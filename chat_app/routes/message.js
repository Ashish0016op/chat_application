const express = require('express');
const router = express.Router();
const fs = require('fs');
router.use(express.urlencoded({ extended: true }));

router.get('/message', (req, res, next) => {
  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading message.txt:', err);
      data = '';
    }
    res.send(`
      <form action="/message" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
        <p>${data}</p>
        <input type="text" name="chat" id="chat">
        <input type="hidden" name="login" id="username">
        <button type="submit">send</button>
      </form>
    `);
  });
});

router.post('/message', (req, res, next) => {
  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading message.txt:', err);
      data = '';
    }
    const newData = data + req.body.login + " : " + req.body.chat;
    fs.writeFile('message.txt', newData, (err) => {
      if (err) {
        console.error('Error writing to message.txt:', err);
      } else {
        console.log('Data has been updated in message.txt');
      }
    });
  });

  res.redirect('/message');
});

module.exports = router;





