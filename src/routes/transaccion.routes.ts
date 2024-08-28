import express from 'express';
import { check, validationResult } from 'express-validator';
import TransaccionController from '../controllers/transaccionController';

const router = express.Router();

router.post('/transacciones', [
  check('tipo').isIn(['compra', 'venta']).withMessage('Tipo de transacción inválido'),
  check('usuario').isMongoId().withMessage('ID de usuario inválido'),
  check('productos').isArray().withMessage('Productos deben ser un array'),
  check('total').isNumeric().withMessage('Total debe ser un número')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  TransaccionController.crearTransaccion(req, res);
});

router.get('/transacciones', TransaccionController.obtenerTransacciones);
router.get('/transacciones/:id', TransaccionController.obtenerTransaccionPorId);
router.put('/transacciones/:id', TransaccionController.actualizarTransaccion);
router.delete('/transacciones/:id', TransaccionController.eliminarTransaccion);

export default router;
