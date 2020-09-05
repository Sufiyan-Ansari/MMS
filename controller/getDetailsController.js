let Excel = require('exceljs');
let workbook = new Excel.Workbook();


exports.getDetailsController = (req,res,next)=>{
    
    res.render('GetDetails');




}

exports.postDetailsController = (req,res,next)=>
{
     let info = req.body;
     let status = null;
     workbook.xlsx.readFile('./Database/sheet.xlsx')
        .then(function(){
        let worksheet =  workbook.getWorksheet(1);
        let row = worksheet.getRow(info.flatNo);
         status =  row.getCell(info.block).value;
         if(status != 'PAID')
         {
             res.send('UNPAID');
         }
        //  console.log(status);
        //  res.send(status);
                         }); // A5's value set to 5

   
        
}