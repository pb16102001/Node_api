const express = require('express')   

const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
var bodyParser=require('body-parser')
const fileUpload = require("express-fileupload");
const { Router } = require('express')

const dotenv = require('dotenv')
const cloudinary = require('cloudinary')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload({useTempFiles: true}));

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

//image 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


//load route
 app.use('/api/blog',web)

app.get('/', (req, res) => {
    res.send('Hello MEAN')
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`server is running : ${process.env.PORT}`)
})