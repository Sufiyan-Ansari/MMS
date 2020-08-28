let express = require('express');
let app = express();
let LoginRoutes = require('./routes/login');
app.set('view engine','ejs');
app.set('views','views');

app.use(LoginRoutes);



app.listen(3000,()=>{
    console.log(`Listening on port`);
})