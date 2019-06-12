var express = require('express');

var app = express();

var territoryRouter = require('./routes/territory')

app.use(express.json());
app.use('/territory', territoryRouter);

// Error handler
app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
