const path = require('path');
const fs = require('fs');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const multer = require('multer');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

// for the API's 
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is active on port ${PORT}`)
})

