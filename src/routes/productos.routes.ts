import { Router } from 'express';
import { createProduct, getProducts, deleteProduct } from '../controllers/productos.controllers.js';

const router = Router();


router.get('/products', getProducts )
router.post('/product', createProduct )
router.delete('/product', deleteProduct )

export default router;