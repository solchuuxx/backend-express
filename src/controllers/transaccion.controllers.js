import TransaccionService from '../services/transaccionService';

class TransaccionController {
  async crearTransaccion(req, res) {
    try {
      const transaccion = await TransaccionService.crearTransaccion(req.body);
      res.status(201).json(transaccion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async obtenerTransacciones(req, res) {
    try {
      const transacciones = await TransaccionService.obtenerTransacciones();
      res.status(200).json(transacciones);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async obtenerTransaccionPorId(req, res) {
    try {
      const transaccion = await TransaccionService.obtenerTransaccionPorId(req.params.id);
      if (!transaccion) {
        return res.status(404).json({ error: 'Transacción no encontrada' });
      }
      res.status(200).json(transaccion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async actualizarTransaccion(req, res) {
    try {
      const transaccion = await TransaccionService.actualizarTransaccion(req.params.id, req.body);
      if (!transaccion) {
        return res.status(404).json({ error: 'Transacción no encontrada' });
      }
      res.status(200).json(transaccion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async eliminarTransaccion(req, res) {
    try {
      const transaccion = await TransaccionService.eliminarTransaccion(req.params.id);
      if (!transaccion) {
        return res.status(404).json({ error: 'Transacción no encontrada' });
      }
      res.status(200).json({ message: 'Transacción eliminada correctamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new TransaccionController();
