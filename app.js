const express = require('express')   
 
const app = express()
const port = process.env.PORT || 3000;
var bodyParser=require('body-parser')
const { Router } = require('express')

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
//connecting db
const {connectDB}= require('./DB/connectDB.js')



//import routes
const web = require('./routes/web.js');



// static files
 
app.use(express.static('public'))

// connect db here 
connectDB()


//load route
 app.use('/api/pn',web)

app.get('/', (req, res) => {
    res.send('Hello MEAN')
  })
  
  app.listen(port, () => {
    console.log(`server is running 😁👍🔥`)
})