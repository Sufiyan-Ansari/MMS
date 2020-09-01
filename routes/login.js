const express = require('express');
const routes = express.Router();
const bodyparser = require('body-parser');
routes.use(bodyparser.urlencoded({extended:false}));
const LoginController = require('../controller/loginController');
const DashboardController = require('../controller/dashboardController');
const SubmitMaintenance = require('../controller/submitMaintenance');


routes.get('/',LoginController.GetLogin);
routes.get('/dashboard',DashboardController.getDashboardController);
routes.get('/SubmitMaintenace',SubmitMaintenance.GetMaintenacne);
routes.post('/SubmitMaintenace',SubmitMaintenance.PostMaintenance);


module.exports = routes;