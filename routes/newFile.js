const { router } = require('.');

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'sofia.f.gomez@gmail.com',
    subject: 'Acceso a la comunidad',
    html: nombre + " " + apellido + " Se contacto a traves de la web y quiere mas info a este correo: " + email + ". <br> Ademas, hizo el siguiente comentario: " + mensaje + "."
  };
});
