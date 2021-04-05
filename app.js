const express = require("express");
var createError = require('http-errors');
const path = require("path");
const favicon = require('serve-favicon');
const dotenv = require('dotenv');
dotenv.config();
console.log(` database connection string : ${process.env.DATABASE_CONNECTION_STRING}`)

var indexRouter=require("./routes/index");
var aboutRouter=require("./routes/about")

const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname , 'public')));
app.use(favicon(path.join(__dirname,'public','favicon.png'))); 

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use("/",indexRouter);
app.use("/about", aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// app.listen(process.env.port || 6000);

// console.log(`Running at port ${process.env.port} or 6000`);
module.exports = app;
