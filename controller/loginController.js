exports.GetWelcome = (req,res,next)=>{
    res.render('welcome');
    };

exports.GetLogin = (req,res,next)=>
{
    res.render('Login');
}
