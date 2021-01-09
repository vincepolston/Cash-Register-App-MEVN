import axios from 'axios'

const products = 'http://localhost:5000/api/products/'

class ProductService {
    // get products
    static getProducts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(products);
                const data = res.data;
                resolve(
                    data.map(product => ({
                        ...product
                    }))
                );
            } catch (err) {
                reject(err)
            }
        })
    }

    // add product
    static addProduct(name, price) {
        return axios.post(products, { 
            name,
            price 
        })
    }

    // delete product

    static deleteProduct(id) {
        return axios.delete(`${products}${id}`)
    }
}


export default ProductService
