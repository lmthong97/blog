const path = require('path');
const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
//http logger
    app.use(morgan('combined'));

//template engine
app.engine(
        'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
      app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
