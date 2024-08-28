import Product from "../models/Product.js";

class ProductService {
    constructor() { }

    async findAll() {
        return await Product.find();
    }


    async create(product) {
        return await Product.create(product);
    }

    async delete(product) {
        return await Product.delete(product);
    }
}

export default new ProductService()