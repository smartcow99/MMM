var express = require('express');
var router = express.Router();
const db = require('../my_modules/db');
const multer = require('multer');
const { PythonShell } = require("python-shell");
const islogined = require('../my_modules/logincheck')

// const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });
// // const upload = multer({
// //   storage: multer.diskStorage({
// //     // set a localstorage destination
// //     destination: (req, file, cb) => {
// //       cb(null, 'uploads/');
// //     },
// //     // convert a file name
// //     filename: (req, file, cb) => {
// //       cb(null, new Date().valueOf() + path.extname(file.originalname));
// //     },
// //   }),
// // });
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


router.get('/pytest',(req, res)=>{
  let options = {
    scriptPath: "my_modules",
    args: ['helloworld', 'value2']
  };
  PythonShell.run("test.py", options, function(err, data) {
    if (err) throw err;
    console.log(data);
    res.send('ok')
  });
})

router.post('/login', async (req, res)=>{
  const [result] = await db.login(req.body.id, req.body.password);
  if(result && result.cid){
    console.log(result.cid, ' logined');
    req.session.islogined = true;
    req.session.cid = result.cid;
    res.status(200).send('success');
  }
  else
    res.status(401).send('fail');
})

router.get('/logout',(req, res)=>{
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
    res.status(200).send(result);
  else
    res.status(400).send('fail');
})

router.get('/recommend', async (req, res)=>{
  const cid = req.session.cid | 0;
  const result = await db.recommend(req.query.type, cid, req.query.requestNum);

  if(result)
    res.status(200).send(result);
  else
    res.status(400).send('fail');
})

router.get('/purchaseList', islogined, async (req, res)=>{
  console.log(req.query.requestNum);
  const result = await db.get_purchare_list(req.session.cid, req.query.requestNum);

  if(result)
    res.status(200).send(result);
  else
    res.status(400).send('fail');
})

router.get('/short', async (req, res)=>{
  const cid = req.session.cid | 0;
  const result = await db.short_info(req.query.vid, cid)
  
  if(result)
    res.status(200).send(result);
  else
    res.status(400).send('fail');
})
module.exports = router;
