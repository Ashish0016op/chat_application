const express = require('express');
const app = express();
const loginRoute=require('./routes/login');
const messageRoute=require('./routes/message');
const parsedBody=require('body-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginRoute);
app.use(messageRoute);
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
})

app.listen(5500);

