import Transaccion from '../models/Transaccion.js';

class TransaccionService {
  async crearTransaccion(datos) {
    const transaccion = new Transaccion(datos);
    await transaccion.save();
    return transaccion;
  }

  async obtenerTransacciones() {
    return await Transaccion.find().populate('usuario').populate('productos');
  }

  async obtenerTransaccionPorId(id) {
    return await Transaccion.findById(id).populate('usuario').populate('productos');
  }

  async actualizarTransaccion(id, datos) {
    return await Transaccion.findByIdAndUpdate(id, datos, { new: true });
  }

  async eliminarTransaccion(id) {
    return await Transaccion.findByIdAndDelete(id);
  }
}

export default new TransaccionService();
