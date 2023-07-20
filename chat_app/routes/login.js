const express=require('express');
const router=express.Router();

router.get('/login',(req,res,next)=>{
  res.send(`
  <form action="/login" onsubmit="localStorage.setItem('username', document.getElementById('username').value)" method="POST">
    <input type="text" name="login" id="username">
    <button type="submit">login</button>
  </form>
  `);
})
router.post('/login',(req,res,next)=>{
  const loginUsername = req.body.login;
  if (!loginUsername || loginUsername.trim() === '') {
    res.redirect('/login');
  }
  res.redirect('/message');
})

module.exports=router;