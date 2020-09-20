let Excel = require('exceljs');
var $ = require("jquery");

let workbook = new Excel.Workbook();



exports.getDetailsController = (req,res,next)=>{
    
    res.render('GetDetails',{ pageTitle:'Testing' });




}
function GetExcelData(req,res,next)
{
        let info = req.body;
        let status = null;
        
         workbook.xlsx.readFile('./Database/sheet.xlsx')
        .then(function(){
        let worksheet =  workbook.getWorksheet(1);
        let row = worksheet.getRow(info.flatNo);
         status =  row.getCell(info.block).value;
       //  console.log(status);   
        return res.send(status);
        });
}
exports.postDetailsController = (req,res,next)=>
{
      GetExcelData(req,res,next);
    
}     
        //  if(status != 'PAID')
        //  {
        //     statusObj.temp = 'UNPAID';
        //     res.send(statusObj);
         
            
        //  }
        //  statusObj.temp = 'PAID';
        //  return  res.send(sstatusObj);
            
        //                  });
     
        





        // $('#getDetailsForm').on('submit',function(event)
        // {
        //     event.preventDefault();
        //     let data =
        //     {
        //         block : $('#block').val,
        //         flatno : $('#flatno').val
        //     };

        //     $.ajax(
        //         {
        //             url : 'http://localhost:3000/getDetails',
        //             data : data,
        //             method : post
        //         }).then(function (res)
        //         {
        //             $('#status').append(response);
        //         }).catch(function (err){
        //             console.error(err);
        //         });
        // })

   

