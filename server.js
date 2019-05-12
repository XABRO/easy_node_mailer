var app = require('express')();

const express = require('express');
var mailFn = require('./service/mail');

var path = require('path');

// app.set('/', path.resolve);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/mail' ,express.static('views/template.html'));
app.post('/send-mail', mailFn.sendEmail )


app.listen(2000, ()=>{
    console.log("Server started at port 2000");
});