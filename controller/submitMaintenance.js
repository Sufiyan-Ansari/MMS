const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
exports.PostMaintenance = (req,res,next)=>
{
    console.log('Submited');

    res.send('Submited');
}

exports.GetMaintenacne = (req,res,next)=>{
    res.render('SubmitMaintenance')
}