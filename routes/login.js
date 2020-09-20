const express = require('express');
const routes = express.Router();
const bodyparser = require('body-parser');
routes.use(bodyparser.urlencoded({extended:false}));
const LoginController = require('../controller/loginController');
const DashboardController = require('../controller/dashboardController');
const SubmitMaintenance = require('../controller/submitMaintenance');
const GetDetailsController = require('../controller/getDetailsController');
const GetResiter = require('../controller/getRegisterController');
const user = require('../model/user');

routes.get('/',LoginController.GetWelcome);
 routes.get('/login',LoginController.GetLogin);

routes.get('/dashboard',DashboardController.getDashboardController);
routes.get('/SubmitMaintenace',SubmitMaintenance.GetMaintenacne);
routes.post('/SubmitMaintenace',SubmitMaintenance.PostMaintenance);

routes.get('/getDetails',GetDetailsController.getDetailsController);
routes.post('/getDetails',GetDetailsController.postDetailsController);



routes.get('/Register',GetResiter.getRegisterController);
routes.post('/Register',GetResiter.PostRegisterController);


module.exports = routes;