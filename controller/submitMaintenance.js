const User = require('../model/Users');
let Excel = require('exceljs');
let workbook = new Excel.Workbook();
                        
exports.PostMaintenance = async(req,res,next)=>
{
    let info = req.body;
   

    const user = new User({
           
        username : info.username,
        Block : info.block,
        FlatNo : info.flatno,
        Amount : info.amount
       
                        });
        workbook.xlsx.readFile('./Database/sheet.xlsx')
        .then(function(){
        let worksheet =  workbook.getWorksheet(1);
        var row = worksheet.getRow(info.flatno);
        row.getCell(info.block).value = 'PAID'; // A5's value set to 5
        row.commit();
        return workbook.xlsx.writeFile('./Database/sheet.xlsx');
});
                        
    try
    {
        const saveUser = await user.save();
        console.log('Submited Maintenance of Flat :',info.block+info.flatno);

        res.send('Submited');
    }
    catch(error)
    {
        res.status(400).send(error);
    }
}

exports.GetMaintenacne = (req,res,next)=>{
    res.render('SubmitMaintenance')
}