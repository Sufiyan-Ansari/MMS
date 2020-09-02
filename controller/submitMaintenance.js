const User = require('../model/Users');

exports.PostMaintenance = async(req,res,next)=>
{
    let info = req.body;
   

    const user = new User({
           
        username : info.username,
        Block : info.block,
        FlatNo : info.flatno,
        Amount : info.amount
       
                        });
    try
    {
        const saveUser = await user.save();
        console.log('Submited');

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