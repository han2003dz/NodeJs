const express = require('express');
const morgan = require('morgan');
const expressHandlebars = require('express-handlebars');
const handlebars = expressHandlebars.create();
const app = express();
const path = require('path');
const port = 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
// http logger
app.use(morgan('combined'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

const route = require('./routes');
// img
      route(app);

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
