<template>
<div class="container" id="appContainer">
    <div class="row"> 
        <!-- shop column -->
        <div class="col">
            <!-- movies -->
            <div class="card">
            <div class="card-header">
                <strong>MOVIES</strong>
            </div>
            
                <ul v-for="movie in movies" :key="movie.id" class="list-group list-group-flush">
                    <!-- the button here is just for looks -- I thought it a better UI to have the whole li clickable -->
                    <li @click="addToCart(movie)" class="list-group-item"><button type="button" class="btn btn-sm btn-secondary" id="btn-cart-item">Add</button><span class="float-left"></span><strong>{{ movie.name }}</strong><span class="float-right">${{ movie.price }} 
</span></li>
                </ul>
            </div>
             <!-- products -->
            <div class="card">
            <div class="card-header">
                <strong>PRODUCTS</strong>
            </div>
                <ul v-for="product in products" :key="product.id" class="list-group list-group-flush">
                    <li @click="addToCart(product)" class="list-group-item"><button type="button" class="btn btn-sm btn-secondary" id="btn-cart-item">Add</button><strong>{{ product.name }}</strong><span class="float-right">${{ product.price }}</span></li>
                </ul>
            </div>
        </div>
        <!-- receipts column -->
        <div class="col">
            <div class="card">
            <div class="card-header">
                <strong>CUSTOMER RECEIPT</strong>
            </div>
                
                <!-- cart loop -->
                <ul v-for="(item, index) in cart" :key="item.id" class="list-group list-group-flush">
                    <li @click="removeFromCart(index)" class="list-group-item"><button type="button" class="btn btn-sm btn-danger" id="btn-cart-item">Remove</button><strong>{{ item.name }}</strong><span class="float-right">${{ item.price }}</span></li>
                </ul>

                <!-- cart total -->
                <div class="card-body">
                    <span class="float-right"><strong>Total: ${{ total }}</strong></span>
                </div>
            </div>

                        <!-- customer name form -->
                        <div class="card">
                            <div class="card-header">
                                <strong>CHECK OUT</strong>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="customerName"><strong>Customer Name</strong></label>
                                        <input type="text" class="form-control" v-model="customerName">
                                    </div>
                                </form>
                                <!-- cart buttons -->
                                <div>
                                    <button @click="clearCart" type="button" class="btn btn-secondary btn-lg float-right">Clear Cart</button>
                                    <button @click="checkout" type="button" class="btn btn-success btn-lg float-right">Check Out</button>
                                </div>
                            </div>
                        </div>
             

        </div>
    </div>
</div>

</template>

<script>
import MovieService from '../services/MovieService'
import ProductService from '../services/ProductService'
import ReceiptService from '../services/ReceiptService'

export default {
    data () {
        return {
            cart: [],
            movies: [],
            products: [],
            customerName: ''
        }
    },


 async created() {
        try {
            this.receipts = await ReceiptService.getReceipts()
            this.movies = await MovieService.getMovies()
            this.products = await ProductService.getProducts()
            
        } catch(err) {
            this.error = err.message
        }
    },

    methods: {
        addToCart(item) {
            this.cart.push(item)
        },

        clearCart() {
            this.cart = []
        },

        removeFromCart(index) {
            this.cart.splice(index, 1)
        },

        async checkout() {
            console.log(this.customerName, this.cart, this.total)
            this.total = parseInt(this.total, 10) 
            await ReceiptService.addReceipt(this.customerName, this.cart, this.total)
            .then(
            this.customerName = '',
            this.cart = []
            )
            
        }
    },

    computed: {
        total() {
            let total = 0

            for (let i = 0; i < this.cart.length; i++) {
            total=this.cart[i].price+total
            }
            return total
        }
    }

}
</script>

<style>
    #appContainer {
        margin-top: 50px;
    }
    
    .card {
        margin-top: 2.5em;
    }

    .btn {
        margin: .1em;
    }

    #btn-cart-item {
        margin-right: 1em;
    }
</style>