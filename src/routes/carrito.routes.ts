import express from 'express';
import { check, validationResult } from 'express-validator';
import CarritoController from '../controllers/carritoController';

const router = express.Router();

router.post('/carritos', [
  check('cliente').isMongoId().withMessage('ID de cliente inválido'),
  check('productos').isArray().withMessage('Productos deben ser un array'),
  check('total').isNumeric().withMessage('Total debe ser un número')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  CarritoController.crearCarrito(req, res);
});

router.get('/carritos', CarritoController.obtenerCarritos);
router.get('/carritos/:id', CarritoController.obtenerCarritoPorId);
router.put('/carritos/:id', CarritoController.actualizarCarrito);
router.delete('/carritos/:id', CarritoController.eliminarCarrito);

export default router;
    