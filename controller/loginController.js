exports.GetLogin = (req,res,next)=>{
    res.render('Login',{title:'::Login'});
    if(req.username=='admin' && req.password=='admin')
    {
        req.redirect('/dashboard');
    }
    };