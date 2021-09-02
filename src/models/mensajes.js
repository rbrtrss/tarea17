import moment from 'moment';
import listaMensajes from '../../persistence/mensajesPersistencia';

function formatoMensaje(usuario, contenido) {
  const mensaje = {
    usuario,
    contenido,
    tiempo: moment().format('L h:mm a'),
  };
  listaMensajes.agregar(mensaje);
  return mensaje;
}

export default formatoMensaje;
