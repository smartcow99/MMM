const db = require('mysql2');
require('dotenv').config();

const table = process.env.TABLE;
const pool = db.createPool({
	host: process.env.DB_HOST,
	user: process.env.USER_NAME,
	password: process.env.DB_KEY,
	database: process.env.DB_NAME,
	connectionLimit: 10
}).promise();

const api = {
	login: async (id, pw)=>{
		const [res] = await pool.query(`select cid from ${process.env.login_info} where id='${id}' and password='${pw}'`)
		return res;
	},
	search_shorts: async (content, reqNum)=>{
		let [res] = await pool.query(`select distinct title, thumnail, vid as shortId, chid as channelId, hits as numOfViews, numOfHearts, numOfSubscribers from mmmservice.video \
		natural join (select chid as channelId, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a natural left outer join (select vid, count(*) as numOfHearts from recommend group by vid)b where title like '%${content}%' limit ${reqNum*6}, 6`);
		return res;
	},
	search_channel: async (content,cid)=>{
		const [res] = await pool.query(`select distinct ch_name as title, ch_profile as profile, chid as channelId, numOfSubscribers, introduce, isSubscribed
		from mmmservice.channel left outer join (select chid, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a using (chid) natural left outer join (select chid, case when cid = ${cid} then 'true' else 'false' end as isSubscribed from mmmservice.subscribe)c where ch_name like '%${content}%';`);
		return res;
	},
	search_product: async (content)=>{
		const [res] = await pool.query(`select p_name as title, thumnail, pid as productId, avg_rate as rate, price from mmmservice.product left outer join (select pid, round(avg(rate),1) as avg_rate from review group by pid)a using (pid) where p_name like '%${content}%'`);
		return res;
	},

	recommend_tag: async ()=>{
		const [res] = await pool.query(`select tag from (select tag, count(*) as count from mmmservice.tag group by tag)a order by count desc limit 10`)
		return res;
	},
	recommend_shorts: async (reqNum)=>{
		const [res] = await pool.query(`select distinct title, thumnail, vid as shortId, chid as channelId, hits as numOfViews, numOfHearts, numOfSubscribers \
		from mmmservice.video natural join (select chid as channelId, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a natural left outer join (select vid, count(*) as numOfHearts from recommend group by vid)b order by recommend desc limit ${reqNum*6}, 6`)
		return res;
	},
	recommend_channel: async (cid)=>{
		const [res] = await pool.query(`select distinct ch_name as title, ch_profile as profile, chid as channelId, numOfSubscribers, introduce, isSubscribed \
		from mmmservice.channel left outer join (select chid, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a using (chid) \
		natural left outer join (select chid, case when cid = ${cid} then 'true' else 'false' end as isSubscribed from mmmservice.subscribe)c order by numOfSubscribers desc limit 5;`)
		return res;
	},
	get_purchare_list: async (cid, reqNum) => {
		console.log(reqNum);
		const [res] = await pool.query(`select distinct pid, p_date as date, price, p_num as purchaseNum, thumnail, p_name as productName\
		from product natural join purchase limit ${reqNum*6}, 6`)
		return res;
	},

	get_short_info: async (vid) =>{
		const [res] = await pool.query(`select distinct title, vid as shortId, v_comment as info, numOfHearts, hits as numOfViews \
		from mmmservice.video natural left outer join (select vid, count(*) as numOfHearts from recommend group by vid)b where vid = ${vid};`)
		return res;
	},
	get_channel_info: async (vid, cid)=>{
		const [res] = await pool.query(`select distinct ch_name as title, ch_profile as profile, chid as channelId, numOfSubscribers, introduce, isSubscribed
		from mmmservice.channel left outer join (select chid, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a using (chid) \
		natural left outer join (select chid, case when cid = ${cid} then 'true' else 'false' end as isSubscribed from mmmservice.subscribe)c
		natural join (select vid, chid from mmmservice.video where vid = ${vid})d`);
		return res;
	},
	get_tag: async (vid)=>{
		const [res] = await pool.query(`select tag from mmmservice.tag where vid = ${vid}`);
		return res;
	},
	get_comments: async (vid) => {
        const [res] = await pool.query(`select distinct cu.c_name as name, ch.ch_profile as profile, re.r_comment as content from customer as cu natural join(channel as ch natural join reply as re) where re.vid = ${vid}`)
        return res;
	},
  get_related_product: async (vid) => {
        const [res] = await pool.query(`select distinct p_name as title, img, pid as productId from tag natural join (product_img natural join product) where tag.vid = ${vid}`)
        return res;
  },
	get_dressing_talbe: async (cid) => {
		const [res] = await pool.query(`select distinct category, p_name as title, thumnail as img, pid as productId from customer natural join (dressing_table natural join product) where cid = ${cid}`)
		return res;
	},
	get_product_info: async (pid) => {
		const [res] = await pool.query(`select pid as productId, p_name as title, company as manufacturer, avg_rate as rate, price, access as views, detail as productExplainHtml from product left outer join (select pid, round(avg(rate),1) as avg_rate from review group by pid)a using (pid) where pid = 1;`)
		return res;
	},
	get_product_img_info : async (pid) => {
		const [res] = await pool.query(`select img as productImages from product_img where pid = ${pid}`)
		return res;
	},
	get_related_short_info : async (pid) => {
		const [res] = await pool.query(`select title, thumnail, vid as shortId, chid as channelId, numOfSubscribers, numOfHearts, hits as numOfViews from channel natural join (video natural join tag) left outer join (select chid, count(*) as numOfSubscribers from subscribe group by chid)a using (chid) left outer join (select vid, count(*) as numOfHearts from recommend group by vid)b using (vid) where tag.pid = ${pid}`)
		return res;
	},
	get_product_review: async (pid) => {
		const [res] = await pool.query(`select ch_profile as profile, c_name as name, comment as content, avg_rate as rate, photo from channel join customer using(cid) join review using(cid) join product using(pid) left outer join (select pid, round(avg(rate),1) as avg_rate from review group by pid)a using (pid) where pid = ${pid}`)
		return res;
	},
	like_up: async (cid, vid) => {
				console.log(vid)
        const [res] = await pool.query(`insert into recommend (cid, vid) values(${cid}, ${vid})`)
        return res;
    },
  like_down: async (cid, vid) => {
        const [res] = await pool.query(`delete from recommend where cid = ${cid} and vid = ${vid}`)
        return res;
  },

	get_my_shorts: async (chid) =>{
		const [res] = await pool.query(`select distinct title, vid as shortId, v_comment as info, numOfHearts, hits as numOfViews , thumnail, chid as channelId \
		from mmmservice.video natural left outer join (select vid, count(*) as numOfHearts from recommend group by vid)b where chid = ${chid};`)
		return res;
	}
}

module.exports = new Proxy(api,{
	get: (target, apiName, receiver)=>{
		if(apiName == 'login'){ // 로그인 신청시
			return async function(id, pw){
				if(id && pw)// 아이디 비밀번호 입력 확인
					return await target.login(id, pw);
				else
					return null;
			}
		}
		else if(apiName == 'search'){
			return async function(type, content, cid, reqNum) {
				if(!content)
					return null;

				let ret = {
					'type': type
				}
				if(type == 'product')
					ret.searchResult =  await target.search_product(content);
				else if(type == 'channel'){
					const result = await target.search_channel(content, cid);
					ret.searchResult = result.filter(element => {
						element.isSubscribed = element.isSubscribed?true:false;
						return element;
					})
				}
				else if(type == 'short')
					ret.searchResult =  await target.search_shorts(content, reqNum);
				return ret;
			}
		}
		else if(apiName == 'recommend'){
			return async function(type, cid, reqNum) {
				if(type == 'tag')
					return await target.recommend_tag();
				else if(type == 'channel'){
					const result = await target.recommend_channel(cid);
					return result.filter(element => {
						element.isSubscribed = element.isSubscribed?true:false;
						return element;
					})
				}
				else if(type == 'short')
					return await target.recommend_shorts(reqNum);
				return ret;
			}
		}
		else if(apiName == 'short_info'){
			return async function(vid, cid) {
				let [res] = await target.get_short_info(vid);
				[res.relatedChannel] = await target.get_channel_info(vid, cid)
				res.relatedTags = await target.get_tag(vid);
				res.relatedProducts = await target.get_related_product(vid);
				res.comments = await target.get_comments(vid)
				if(res.relatedChannel.isSubscribed != null)
					res.relatedChannel.isSubscribed = true;
				else
					res.relatedChannel.isSubscribed = false
				return res;
			}
		}

	else if(apiName =='channel_info') {
		return async function(vid, cid) {
			let [res] = await target.get_channel_info(vid, cid);
			res.dressingTable = await target.get_dressing_talbe(cid);

			return res;
		}
	}
	else if(apiName == 'product_info') {
		return async function(pid) {
			let [res] = await target.get_product_info(pid);
			res.productImages = await target.get_product_img_info(pid);
			res.relatedShorts = await target.get_related_short_info(pid);
			res.reviews = await target.get_product_review(pid);


		}
	}
		else
			return target[apiName];
	}
})


// module.exports.account = async () =>{
// 	let [a] = await pool.query(`select * from ${table}`);
// 	console.log(a);
// 	return a;
// }
