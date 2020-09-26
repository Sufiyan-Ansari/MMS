let express = require('express');
let app = express();
let LoginRoutes = require('./routes/login');
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

require("./config/passport")(passport)
let path = require('path');
app.use(expressEjsLayout);
app.use(express.urlencoded({extended : false}));

app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
   }));
   app.use(passport.initialize());
   app.use(passport.session());
   //use flash
   app.use(flash());
   app.use((req,res,next)=> {
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error  = req.flash('error');
   next();
   });


app.set('view engine','ejs');
app.set('views','views');

mongoose.connect('mongodb+srv://Sufiyan:civiccity94@mms.tqmhl.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true});

app.use(express.static('public'))

app.use(LoginRoutes);
console.log('Index executed');


app.listen(3000,()=>{
    console.log(`Listening on port`);
})