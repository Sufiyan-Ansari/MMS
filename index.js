let express = require('express');
let app = express();
let LoginRoutes = require('./routes/login');
let xlsxFile = require('read-excel-file/node');
const mongoose = require('mongoose');

app.set('view engine','ejs');
app.set('views','views');

mongoose.connect('mongodb+srv://Sufiyan:civiccity94@mms.tqmhl.mongodb.net/<dbname>?retryWrites=true&w=majority');



app.use(LoginRoutes);

xlsxFile('./Database/Sheet.xlsx', { sheet: '2020' }).then((rows) => {
    
    console.log(rows[0][1]);
    })


app.listen(3000,()=>{
    console.log(`Listening on port`);
})