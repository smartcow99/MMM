module.exports = (req, res, next) =>{
  console.log(req.session);
  if(req.session.islogined&&req.session.cid != undefined)
    next();
  else 
    res.status(401).send('not logined');
}
