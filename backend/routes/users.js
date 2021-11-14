var express = require('express');
var router = express.Router();
const db = require('../my_modules/db');
const multer = require('multer');
const { PythonShell } = require("python-shell");

const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dbtest', async (req, res)=>{
  const ret = await db.account();
  return res.send(ret);
});

router.post('/imgtest', upload.single('file'/* img사용 가능?*/), (req, res)=>{
  console.log(req.file);
  res.send('ok');
})

router.get('/pytest',(req, res)=>{
  let options = {
    scriptPath: "my_modules",
    args: ['value1', 'value2']
  };
  PythonShell.run("test.py", options, function(err, data) {
    if (err) throw err;
    console.log(data);
    res.send('ok')
  });
})
module.exports = router;
