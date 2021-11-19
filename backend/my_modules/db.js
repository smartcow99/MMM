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

	search_shorts: async (content)=>{
		let [res] = await pool.query(`select distinct title, thumnail, vid as shortId, chid as channelId, hits as numOfViews, recommend as numOfHearts, numOfSubscribers from mmmservice.video \
		natural join (select chid as channelId, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a where title like '%${content}%'`);
		return res;
	},
	search_channel: async (content,cid)=>{
		const [res] = await pool.query(`select distinct ch_name as title, ch_profile as profile, chid as channelId, numOfSubscribers, numOfShorts, isSubscribed, introduce \
		from channel natural join (select chid as channelId, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a natural join (select chid as channelId, count(*) as numOfShorts from mmmservice.video group by chid)b \
		natural left outer join (select chid as channelId, cid as isSubscribed from subscribe where cid = ${cid})c where ch_name like '%${content}%';`);
		return res;
	},
	search_product: async (content)=>{
		const [res] = await pool.query(`select p_name as title, thumnail, pid as productId, rate, price from mmmservice.product where p_name like '%${content}%'`);
		return res;
	},

	recommend_tag: async ()=>{
		const [res] = await pool.query(`select tag from (select tag, count(*) as count from mmmservice.tag group by tag)a order by count desc`)
		return res;
	},
	recommend_shorts: async ()=>{
		const [res] = await pool.query(`select distinct title, thumnail, vid as shortId, chid as channelId, hits as numOfViews, recommend as numOfHearts, numOfSubscribers \
		from mmmservice.video natural join (select chid as channelId, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a order by recommend desc`)
		return res;
	},
	recommend_channel: async (cid)=>{
		const [res] = await pool.query(`select distinct ch_name as title, ch_profile as profile, chid as channelId, numOfSubscribers, numOfShorts, isSubscribed, introduce \
		from channel natural join (select chid as channelId, count(*) as numOfSubscribers from mmmservice.subscribe group by chid)a natural join (select chid as channelId, count(*) as numOfShorts from mmmservice.video group by chid)b \
		natural left outer join (select chid as channelId, cid as isSubscribed from subscribe where cid = ${cid})c order by numOfSubscribers desc;`)
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
			return async function(type, content, cid) {
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
					ret.searchResult =  await target.search_shorts(content);
				return ret;
			}
		}
		else if(apiName == 'recommend'){
			return async function(type, cid) {
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
					return await target.recommend_shorts();
				return ret;
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