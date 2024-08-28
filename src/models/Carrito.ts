import mongoose from 'mongoose';

const carritoSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true }],
  total: { type: Number, required: true }
}, { timestamps: true });

const Carrito = mongoose.model('Carrito', carritoSchema);
export default Carrito;
