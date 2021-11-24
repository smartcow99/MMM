var express = require('express');
var router = express.Router();
const db = require('../my_modules/db');
const multer = require('multer');
const { PythonShell } = require("python-shell");
const islogined = require('../my_modules/logincheck')
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn

    
// const upload = multer({ dest: 'public/image', limits: { fileSize: 5 * 1024 * 1024 } });
// const upload = multer({
//   storage: multer.diskStorage({
//     // set a localstorage destination
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     // convert a file name
//     filename: (req, file, cb) => {
//       cb(null, new Date().valueOf() + path.extname(file.originalname));
//     },
//   }),
// });
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/dbtest', async (req, res)=>{
//   const ret = await db.account();
//   return res.send(ret);
// });

// router.post('/imgtest', upload.single('file'/* img사용 가능?*/), (req, res)=>{
//   console.log(req.file);
//   res.send('ok');
// })
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

router.post('/pytest',upload.single('img'),(req, res)=>{
  let options = {
    scriptPath: "../AI",
    args: ['public/'+req.file.filename]
  };

  PythonShell.run("face_model_v3.py", options, function(err, data) {
    fs.unlink('public/'+req.file.filename, err => {
      if(err && err.code == 'ENOENT'){
          console.log("파일 삭제 Error 발생");
      }
    });
    if (err) {
      console.log(err)
      return res.status(400).send('fail')
    };
    
    return res.status(200).send(data)
  });
})

router.post('/login', async (req, res)=>{
  const [result] = await db.login(req.body.id, req.body.password);
  if(result && result.cid){
    // session.setAttribute(String name, Object value);
    req.session.islogined = true;
    req.session.cid = result.cid;
    req.session.save((err)=>{
      if(err) return res.status(400).send('fail');
      res.status(200).send('success');
    })

  }
  else
    res.status(401).send('fail');
})

router.get('/logout',islogined,(req, res)=>{
  if(req.session.islogined){
    req.session.destroy(function(){
      req.session;
    });
  }
  res.status(200).send('success')
})

router.get('/search',async (req, res)=>{
  const cid = req.session.cid | 0;
  const result = await db.search(req.query.type, req.query.content, cid, req.query.requestNum);

  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/recommend', async (req, res)=>{
  const cid = req.session.cid | 0;
  const result = await db.recommend(req.query.type, cid, req.query.requestNum);
  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/purchaseList', islogined, async (req, res)=>{
  const result = await db.get_purchare_list(req.session.cid, req.query.requestNum);

  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/short', async (req, res)=>{
  const cid = req.session.cid | 0;
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
  const result = await db.channel_info(req.query.chid, cid)

  if(result)
    return res.status(200).send(result);
  else
    return res.status(400).send('fail');
})

router.get('/productInfo', async (req, res) => {
  const result = await db.product_info(req.query.pid)
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
  const id = req.query.chid | req.query.pid | req.query.vid | 0;
  const result = await db.add_request(req.query.type, id, req.query.requestNum)

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
