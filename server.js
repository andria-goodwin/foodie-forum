const path = require('path');
const fs = require('fs');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const util = require('util');

// for the API's 
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// initializing express
const app = express();

// port for heroku or 3001
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      // sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.engine('handlebars', hbs.engine);

// setting handlebars as the view engine
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is active on port ${PORT}`));
  });
