const express  = require('express');
const parser = require('body-parser')
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const PORT = 9000;

const router = require('./router');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(parser.json());

app.use(parser.urlencoded({
  extended:true
}));

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'public')))


app.listen(PORT, ()=> {
  console.log(`server is now running at port ${PORT} !!`)
})