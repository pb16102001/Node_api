const express = require('express')   

const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
var bodyParser=require('body-parser')
const { Router } = require('express')

const dotenv = require('dotenv')

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

dotenv.config({path:".env"})

app.use(express.json())
//connecting db
const {connectDB}= require('./DB/connectDB.js')



//import routes
const web = require('./routes/web.js');
const cookieParser = require('cookie-parser');



// static files
 
app.use(express.static('public'))

// connect db here 
connectDB()


//load route
 app.use('/api/pn',web)

app.get('/', (req, res) => {
    res.send('Hello MEAN')
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`server is running : ${process.env.PORT}`)
})