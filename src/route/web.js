import express from "express";

import homeController from "../controller/homeController";


let router = express.Router();
const initWebRoute = (app) =>{
    // router.get('/', (req, res)=> {
    //     res.render('./check/index.ejs');
    // })

    router.get('/', homeController.getHomePage);

    router.get('/about', (req, res)=> {
        res.send('check res.send');
    })

    return app.use('/', router);

}


export default initWebRoute

//module.exports = initWebRoute;

