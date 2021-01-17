//REQUIRES
const server = require('./config/server').server;
const exp = require('./config/server').exp;
const initialFaqs = require('./config/initialMeans').initialFaqs;
const initialDiseases = require('./config/initialMeans').initialDiseases;
const initialLinks = require('./config/initialMeans').initialLinks;

//INIT
require('./config/routes');
require('./config/sockets');
initialFaqs();
initialDiseases();
initialLinks();

//LISTEN
server.listen(exp.get('port'), () => {
  console.log('Servidor escuchando en el puerto'.blue, exp.get('port'));
});
