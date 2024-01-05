const path = require('path');
const fs = require('fs');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const multer = require('multer');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

// storage destination for multimedia
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + path.extname(file.originalname))
    }
})
  
// multer object to handle multimedia
const upload = multer({ 
    storage: storage,
    limits: {fileSize:5000000},
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).any()

// function to ensure uploaded file is an accepted file type
function checkFileType (file, cb) {
    const fileTypes = /jpeg|png|jpg/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    } else {
        cb('Please upload images only')
    }
}

// for the API's 
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// initializing express
const app = express();

// port for heroku or 3001
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.engine('handlebars', hbs.engine);

// setting handlebars as the view engine
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/post', (req, res) => {
    res.render('post');
})

app.post('/post/upload', (req, res) => {
    upload(req, res, (err) => {
        if(!err && req.files != ''){
            res.status(200).send()
        } else if(!err && req.files == ''){
            res.statusMessage = 'Please select and image to upload';
            res.status(400).end();
        } else {
            res.statusMessage = (err === 'Please upload images only') ? err : 'Photo exceeds limit of 5MB'
            res.status(400).end()
        }
    })
})

// app listener for server
app.listen(PORT, () => {
    console.log(`Server is active on port ${PORT}`)
})

