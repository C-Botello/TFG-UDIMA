const exp = require('./server').exp;

//RUTAS
exp.use(require('../routes/index'));
exp.use(require('../routes/users'));
exp.use('/map', require('../routes/map'));
exp.use('/tickets', require('../routes/tickets'));
exp.use('/means', require('../routes/means'));
