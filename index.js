let express = require('express');
let app = express();
let LoginRoutes = require('./routes/login');
const mongoose = require('mongoose');
const expressEjsLayout = require('express-ejs-layouts');


let path = require('path');
app.use(expressEjsLayout);
app.use(express.urlencoded({extended : false}));


app.set('view engine','ejs');
app.set('views','views');

mongoose.connect('mongodb+srv://Sufiyan:civiccity94@mms.tqmhl.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true});

app.use(express.static('public'))

app.use(LoginRoutes);
console.log('Index executed');


app.listen(3000,()=>{
    console.log(`Listening on port`);
})