import axios from 'axios'

const receipts = 'http://localhost:5000/api/receipts/'
const receipt = 'http://localhost:5000/api/receipt/'
const carts = 'http://localhost:5000/api/receipts/carts/'

class ReceiptService {
    // get receipts
    static getReceipts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(receipts);
                const data = res.data;
                resolve(
                    data.map(receipt => ({
                        ...receipt,
                        createdAt: new Date(receipt.createdAt)
                    }))
                );
            } catch (err) {
                reject(err)
            }
        })
    }

    // add receipt
    static addReceipt(customerName, cart, total) {
        return axios.post(receipts, { 
            customerName,
            cart,
            total 
        })
    }


    // get carts
    static getCarts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(carts);
                const data = res.data;
                resolve(
                    data.map(carts => ({
                        ...carts
                    }))
                );
            } catch (err) {
                reject(err)
            }
        })
    }

}

export default ReceiptService
