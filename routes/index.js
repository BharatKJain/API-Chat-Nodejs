const express=require("express");
var router = express.Router();
const message = require("../models/message");

router.get('/',(req,res,next)=>{
    const messages = message.find((err,result)=>{
        if (err) return console.error(err);
        res.render('index',{Messages: result});
    });
});

router.post('/',(req,res,next)=>{
    
    const newMessage = new message({
		username: req.body.username,
		message: req.body.message,
	});
    newMessage.save();
    res.redirect('/');
});

module.exports=router;