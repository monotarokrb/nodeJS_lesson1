import express from 'express';
import configViewEngine from './configs/viewEngine';


require ('dotenv').config();

const app = express();
const port = process.env.PORT;
//console.log('>>>check port: ', port);

configViewEngine(app);

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index.ejs')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})