var express = require('express');
var router = express.Router();
const db = require('../my_modules/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dbtest', async (req, res)=>{
  const ret = await db.account();
  return res.send(ret);
});

module.exports = router;
