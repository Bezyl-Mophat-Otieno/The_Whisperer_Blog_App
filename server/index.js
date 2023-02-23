const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const morgan = require('morgan')
const authRoute = require('./routes/auth')
const multer = require('multer')
const Router = express.Router()
//Using morgan (' whenever a request  is made on  any route the route path is consoled on the terminal')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//adding a body parser middleware 
app.use(express.json());

//adding a form handling data middleware
app.use(express.urlencoded({ extended: false }));


//Using Multer Image Upload 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({ storage: storage })

app.post('/api/uploads', upload.single("file"), (req, res) => {
  res.status(200).json("You have successfully upploaded the image ")
})
//Routing initialization
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/posts', require('./routes/posts'))
app.use('/api/comments', require('./routes/commentsRoutes'))
app.use('/api/categories', require('./routes/categoriesRoutes'))




//Asynchronous database connection
const asyncDatabaseConnection = async () => {

  try {
    //Mongo DB config
    const connectDB = require('./config/db');
    //Starting the database .
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT} `);
    })
  } catch (error) {
    console.log(error);
  }
};
asyncDatabaseConnection();  