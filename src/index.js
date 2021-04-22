const path = require('path');
const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')


const route = require('./routes');
const db = require('./config/db')

// Connect to DB
db.connect();


app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
//http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
           sum: (a, b)  => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
