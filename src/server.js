import express from 'express';
import configViewEngine from './configs/viewEngine';
import  initWebRoute from './route/web';



require ('dotenv').config();

const app = express();
const port = process.env.PORT;
//console.log('>>>check port: ', port);


//set up view engine
configViewEngine(app);

// init web Route
initWebRoute(app)

//  app.get('/', (req, res) => {
//    res.render('index.ejs')

//  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})