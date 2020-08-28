const express = require('express');
const routes = express.Router();
const bodyparser = require('body-parser');
routes.use(bodyparser.urlencoded({extended:false}));
const LoginController = require('../controller/loginController');
const DashboardController = require('../controller/dashboardController');


routes.get('/',LoginController.GetLogin);
routes.get('/dashboard',DashboardController.getDashboardController);


module.exports = routes;