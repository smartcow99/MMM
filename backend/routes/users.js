var express = require('express');
var router = express.Router();
const db = require('../my_modules/db');
const multer = require('multer');
const { PythonShell } = require("python-shell");
const islogined = require('../my_modules/logincheck')
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn

const upload = multer({
    storage: multer.diskStorage({
      // set a localstorage destination
      destination: (req, file, cb) => {
        cb(null, 'public');
      },
      // convert a file name
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    }),
  });

router.post('/pytest',upload.single('img'),async (req, res)=>{
  let options = {
    scriptPath: "../AI",
    args: ['public/'+req.file.filename]
  };

  PythonShell.run("face_model_v4.py", options, async function(err, data) {
    fs.unlink('public/'+req.file.filename, err => {
      if(err && err.code == 'ENOENT')
          console.log("파일 삭제 Error 발생");
    });
    if (err) {
      console.log(err)
      return res.status(400).send('fail')
    };
    if(req.body.requestNum == undefined){
      console.log(req.body.requestNum,' req.query.requestNum')
      return res.status(400).send('not enough element')}
    else if(data.length != 2){
      console.log(data,' data')
      return res.status(200).send('fail')}
    let ret = {
      face : data[0],
      tone : data[1],
      relatedShort : await db.get_AI_relation_short(data[0], data[1],req.body.requestNum)
    }
    return res.status(200).send(ret)
  });
})

router.post('/login', async (req, res)=>{
  const [result] = await db.login(req.body.id, req.body.password);
  if(result && result.cid){
    // session.setAttribute(String name, Object value);
    req.session.islogined = true;
    req.session.cid = result.cid;
    res.cookie('login', 'logined', {
      // httpOnly: true
    })
    res.status(200).send('success');
  }
  else
    res.status(401).send('fail');
})

router.get('/logout',islogined,(req, res)=>{
  
    req.session.destroy(function(){
      req.session;
    });
  res.status(200).send('success')
})

router.get('/search',async (req, res)=>{
  const cid = req.session.cid | 0;
  if(req.query.type == undefined || req.query.content == undefined || req.query.requestNum == undefined)
    return res.status(400).send('not enough element')
  const result = await db.search(req.query.type, req.query.content, cid, req.query.requestNum, req.query.order);

  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/getSubscribeVideo', islogined, async (req, res)=>{
  const result = await db.get_sub_video(req.session.cid, req.query.requestNum)

  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/recommend', async (req, res)=>{
  const cid = req.session.cid | 0;
  if(req.query.type == undefined || req.query.requestNum == undefined)
    return res.status(400).send('not enough element')
  const result = await db.recommend(req.query.type, cid, req.query.requestNum);
  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/purchaseList', islogined, async (req, res)=>{
  if(req.query.requestNum == undefined)
    return res.status(400).send('not enough element')
  const result = await db.get_purchare_list(req.session.cid, req.query.requestNum);
  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/short', async (req, res)=>{
  const cid = req.session.cid | 0;
  if(req.query.vid == undefined)
    return res.status(400).send('not enough element')
  db.add_view_video(req.query.vid)
  const result = await db.short_info(req.query.vid, cid)

  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/likeUp', islogined, async (req, res)=> {
  const result = await db.like_up(req.session.cid, req.query.vid)

  if(result)
    return res.status(200).send('success');
  else
    return res.status(400).send('fail');
})

router.get('/likeDown', islogined, async (req, res)=> {
  const result = await db.like_down(req.session.cid, req.query.vid)

  if(result)
   return res.status(200).send('success');
  else
    return res.status(400).send('fail');
})

router.get('/channel', async (req, res) => {
  const cid = req.session.cid | 0;
  let result;
  if(req.query.chid == '0'){
    result = await db.get_sub_video(cid, req.query.requestNum)}
  else
    result = await db.channel_info(req.query.chid, cid)
  
  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/productInfo', async (req, res) => {
  if(req.query.pid == undefined)
    return res.status(400).send('not enough element')
  const result = await db.product_info(req.query.pid)
  db.add_view_product(req.query.pid)
  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/isPurchase', islogined, async(req, res)=>{
  const result = await db.is_purchase(req.query.pid,req.session.cid);
  if(result){
    if(result[0])
      return res.status(200).send(true)
    else
      return res.status(200).send(false)
  }
  else
    return res.status(400).send('fail')
})

router.get('/addRequest', async (req, res)=>{
  const id = req.query.chid | req.query.pid | req.query.vid;
  const orderdesc = req.query.isDesc == 'false'?false : true;
  let result;
  if(req.query.requestNum == undefined)
    return res.status(400).send('not enough element')
  else if(id == 0)
    result = await db.get_sub_video(cid, req.query.requestNum)
  else
    result = await db.add_request(req.query.type, id, req.query.requestNum, orderdesc)

  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/info', islogined, async (req, res) => {
  const result = await db.user_info(req.session.cid);

  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})


module.exports = router;
