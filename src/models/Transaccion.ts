import mongoose from 'mongoose';

const transaccionSchema = new mongoose.Schema({
  tipo: { type: String, enum: ['compra', 'venta'], required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true }],
  total: { type: Number, required: true },
  fecha: { type: Date, default: Date.now }
}, { timestamps: true });

const Transaccion = mongoose.model('Transaccion', transaccionSchema);
export default Transaccion;
