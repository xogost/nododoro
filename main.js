/*Pomodoro en tiempo real con NodeJs
1. Creacion de un servidor web
se incluye el modulo de express*/
var express = require('express');
/*se instancia la aplicación que hereda del objeto expresss*/
var app = express();
/*Agregamos el puerto por el que el servidor web va a escuchat*/
var port = 9090;
/**/
/**/
var stylus = require('stylus');
/**/
/*creamos el listener por el puerto 8080*/
app.listen(port, function(){ console.log('Listening for port:' + 9090) });
/*Fin creacion de servidor web*/
/**/
app.configure(function(){
 app.set('view options',{
    layout: false
 });
 app.use(express.static(__dirname + '/static'));
 app.use(stylus.middleware(
  {src: __dirname + '/static/theme/css', 
   dest: __dirname + '/static/theme/css',
   compress: true}
 ));
});
/**/


/*Enrutamiento Simple para / */

app.get('/', function(request, response){
 response.render('main.jade');
});

/*Fin Enrutamiento Simple para / */



