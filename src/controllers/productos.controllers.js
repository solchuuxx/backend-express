import ProductService from "../services/ProductService.js"


export const getProducts = async (req, res) => {

    try {
        const products = await ProductService.findAll();
        if(products.length === 0 || !products){
            throw({
                statusCode: 404,
                status: 'Not Found',
                message: 'No se han encontrado productos'
            })
        }
        return res.json(products)

    } catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
}}

export const createProduct = async (req, res) => {

    try {

        await ProductService.create(req.body)
        return res.status(201).json({
            message: 'Producto creado'
        })
        
    } catch (error) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await ProductService.delete(req.body);
        return res.status(201).json({
            message: 'Producto eliminado'
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message,
            status: error.status
        });
    }
};


export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }
        return res.json(updatedProduct);
    } catch (error) {
        return res.status(500).json({ msg: 'Error actualizando producto', error: error.message });
    }
};