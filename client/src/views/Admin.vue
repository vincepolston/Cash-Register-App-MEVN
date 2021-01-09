<template>
    <div class="container" id="appContainer">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <strong>RECEIPTS</strong>
                    </div>
                    <div class="card-body">
                            <!-- receipts table -->
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Receipt ID</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Products</th>
                                <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="receipt in receipts" :key="receipt.id">
                                <td>{{ `${receipt.createdAt.getMonth() + 1}/${receipt.createdAt.getDate()}/${receipt.createdAt.getFullYear()}`}}</td>
                                <td>{{receipt._id}}</td>
                                <td>{{receipt.name}}</td>
                                <td>
                                    <span v-for="item in receipt.cart">
                                        {{item.name}}, 
                                    </span>
                                </td>
                                <td>${{receipt.total}}</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                 <!-- add movies card -->
            <div class="card">
            <div class="card-header">
                <strong>ADD MOVIE</strong>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="moveName">Movie Name</label>
                        <input type="text" class="form-control" v-model="mName">
                    </div>
                    <div class="form-group">
                        <label for="moviePrice">Price</label>
                        <input type="text" class="form-control" v-model="mPrice">
                        <small class="form-text text-muted">Price is in US dollars. Do not type dollar sign in field</small>
                    </div>
                    <button type="button" class="btn btn-primary float-right" @click="addMovie">Add Movie</button>
                </form>
            </div>
            </div>
             <!-- movies card -->
            <div class="card">
            <div class="card-header">
                <strong>MOVIES</strong>
            </div>
                <ul v-for="movie in movies" :key="movie.id" class="list-group list-group-flush">
                    <li @click="deleteMovie(movie._id)" class="list-group-item"><button type="button" class="btn btn-sm btn-danger" id="removeButton">Delete</button><strong>{{ movie.name }}</strong><span class="float-right">${{ movie.price }}</span></li>
                </ul>
            </div>
            </div>
            <div class="col">
                 <!-- add products card -->
            <div class="card">
            <div class="card-header">
                <strong>ADD PRODUCT</strong>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="moveName">Product Name</label>
                        <input type="text" class="form-control" v-model="pName">
                    </div>
                    <div class="form-group">
                        <label for="moviePrice">Price</label>
                        <input type="text" class="form-control" v-model="pPrice">
                        <small class="form-text text-muted">Price is in US dollars. Do not type dollar sign in field</small>
                    </div>
                    <button type="button" class="btn btn-primary float-right" @click="addProduct">Add Product</button>
                </form>
            </div>
            </div>
                         <!-- products card -->
            <div class="card">
            <div class="card-header">
                <strong>PRODUCTS</strong>
            </div>
                <ul v-for="product in products" :key="product.id" class="list-group list-group-flush">
                    <li @click="deleteProduct(product._id)" class="list-group-item"><button type="button" class="btn btn-sm btn-danger" id="removeButton">Delete</button><strong>{{ product.name }}</strong><span class="float-right">${{ product.price }}</span></li>
                </ul>
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
    name: 'Admin',
     data () {
        return {
            movies: [],
            products: [],
            receipts: [],
            receipt: [],
            mName: [],
            mPrice: [],
            pName: [],
            pPrice: []
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
    
        async addMovie() {
            this.mPrice = parseInt(this.mPrice, 10) 
            await MovieService.addMovie(this.mName, this.mPrice)
            this.movies = await MovieService.getMovies()
        },

        async deleteMovie(id) {
            await MovieService.deleteMovie(id)
            this.movies = await MovieService.getMovies()
        },

        async addProduct() {
            this.pPrice = parseInt(this.pPrice, 10) 
            await ProductService.addProduct(this.pName, this.pPrice)
            this.products = await ProductService.getProducts()
        },

        async deleteProduct(id) {
        await ProductService.deleteProduct(id)
        this.products = await ProductService.getProducts()
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

    #removeButton {
        margin-right: 1em;
    }

    .routerLinkButton {
        color: white;
    }
</style>