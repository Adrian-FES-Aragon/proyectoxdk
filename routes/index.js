var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//solicitud a una ruta API REST
router.get('/hola', function(req, res, next) {
  res.render('saludo', { title: 'cosa' });
});
module.exports = router;
