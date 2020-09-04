let express = require('express');
let app = express();
let LoginRoutes = require('./routes/login');
const mongoose = require('mongoose');
// const XLSX = require('xlsx');
// const { Workbook } = require('exceljs');



// let workbook = XLSX.readFile('./Database/sheet.xlsx');
// let first_sheet_name = workbook.SheetNames[0];
// let worksheet = workbook.Sheets[first_sheet_name];

// let cell = worksheet['D4'].value();

// console.log(cell);

// worksheet['D4'].ve: = 'PAID';

// //XLSX.writeFile(workbook,'sheet.xls');
// XLSX.utils.sheet_add_aoa(worksheet,[['abc']],{origin:'D4'});
app.set('view engine','ejs');
app.set('views','views');

mongoose.connect('mongodb+srv://Sufiyan:civiccity94@mms.tqmhl.mongodb.net/<dbname>?retryWrites=true&w=majority');

// var  aspose = aspose||{};
// aspose.cells = require('aspose.cells');

// let workbook = aspose.cells.Workbook("./Database/sheet.xlsx");
// let cell= workbook.getWorksheets().get(0).get('A1');
// cell.setValue('Testing');
// workbook.save('sheet.xlsx',aspose.cells.FileFormatType.EXCEL_97_TO_2003);

// 
// let Excel = require('exceljs');
// let workbook = new Excel.Workbook();
// workbook.xlsx.readFile('./Database/sheet.xlsx')
// .then(function(){
//     let worksheet =  workbook.getWorksheet(1);
//     var row = worksheet.getRow(6);
//     row.getCell(8).value = 'PAID'; // A5's value set to 5
//     row.commit();
// return workbook.xlsx.writeFile('./Database/sheet.xlsx');
// }); 



app.use(LoginRoutes);

// xlsxFile('./Database/Sheet.xlsx', { sheet: '2020' }).then((rows) => {
    
//     console.log(rows[0][1]);
//     })


app.listen(3000,()=>{
    console.log(`Listening on port`);
})