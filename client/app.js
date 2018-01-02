const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'app')));

app.use('/', (req, res) => res.sendFile(path.join(__dirname, '/app/index.html')));

// catch 404 and forward to error handler
app.use((req, res, next) => res.redirect('/login'));

app.listen(3000);
