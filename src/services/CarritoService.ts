import Carrito from '../models/Carrito.js';

class CarritoService {
  async crearCarrito(datos) {
    const carrito = new Carrito(datos);
    await carrito.save();
    return carrito;
  }

  async obtenerCarritos() {
    return await Carrito.find().populate('cliente').populate('productos');
  }

  async obtenerCarritoPorId(id) {
    return await Carrito.findById(id).populate('cliente').populate('productos');
  }

  async actualizarCarrito(id, datos) {
    return await Carrito.findByIdAndUpdate(id, datos, { new: true });
  }

  async eliminarCarrito(id) {
    return await Carrito.findByIdAndDelete(id);
  }
}

export default new CarritoService();
