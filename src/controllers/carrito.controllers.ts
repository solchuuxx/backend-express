import CarritoService from '../services/CarritoService.js';

class CarritoController {
  async crearCarrito(req, res) {
    try {
      const carrito = await CarritoService.crearCarrito(req.body);
      res.status(201).json(carrito);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async obtenerCarritos(req, res) {
    try {
      const carritos = await CarritoService.obtenerCarritos();
      res.status(200).json(carritos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async obtenerCarritoPorId(req, res) {
    try {
      const carrito = await CarritoService.obtenerCarritoPorId(req.params.id);
      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
      }
      res.status(200).json(carrito);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async actualizarCarrito(req, res) {
    try {
      const carrito = await CarritoService.actualizarCarrito(req.params.id, req.body);
      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
      }
      res.status(200).json(carrito);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async eliminarCarrito(req, res) {
    try {
      const carrito = await CarritoService.eliminarCarrito(req.params.id);
      if (!carrito) {
        return res.status(404).json({ error: 'Carrito no encontrado' });
      }
      res.status(200).json({ message: 'Carrito eliminado correctamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new CarritoController();
