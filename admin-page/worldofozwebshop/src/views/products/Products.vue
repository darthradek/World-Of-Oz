<template>
    <div class="background">
        <div>
            <h1 class="heading">Products</h1>
            <div class="add_search_bar">
                <div class="search_kit">
                    <div class="search_bar">
                        <div class="wrap">
                            <div class="search">
                                <input type="text" class="searchTerm" placeholder="Search">
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search" ></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="addButton">
                    <i class="fas fa-plus"></i>
                    <div class="title">ADD PRODUCT</div>
                </div>
            </div>

            <div class="products_container">
                <ul v-for="product in products" :key="product.id">
                    <li>
                        <div class="products">
                            <div class="products_data">
                                {{product.id}}: {{product.name}}
                            </div>
                            <div class="productsButtons">
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-trash"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        mounted() {
            this.readAllProducts();
        },

        data: () => ({
            products: []
        }),

        methods: {
            readAllProducts() {
                axios.get('http://world-of-oz.azurewebsites.net/api/products')
                    .then((response) => {
                        this.products = response.data;
                    });
            }
        }
    }
</script>

<style scoped>

    .background{
        background-color: #11242D;
    }


    .heading{
        color: #4CB690;
        font-size: 45px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .add_search_bar{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search_kit{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100px;
        width: 20%;
    }

    .search_bar{
        margin-left: 100px;
        width:300px;
        height:300px;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .search {
        width: 100%;
        position: relative;
        display: flex;
        color: #11242D;
    }

    .searchTerm {
        width: 300px;
        border: 3px solid #4CB690;
        border-right: none;
        padding: 5px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color:#4CB690;
        background-color:#11242D;
    }

    .searchTerm:focus{
        color:#4CB690;
    }

    .searchButton {
        width: 40px;
        height: 36px;
        border: 1px solid #4CB690;
        background: #4CB690;
        text-align: center;
        color:#11242D;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
    }

    .searchButton:focus{
        outline:none;
    }

    .addButton {
        margin-left: 160px;
        width: 180px;
        font-size: 30px;
        color: #4CB690;
        border: #4CB690 3px solid;
        display:flex;
        justify-content:space-evenly;
        flex-direction: row;
        align-items: center;
    }

    .addButton:hover{
        transform: scale(1.125);
        transition: all 0.2s ease 0s;
        cursor: pointer;
    }

    .products_container{
        color:#4CB690;
        border: #4CB690 5px solid;
        background-color:#011;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .products{
        margin-top: 15px;
        margin-bottom: 15px;
        background-color: #11242D;
        width:600px;
        height:80px;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: #4CB690 2px solid;
    }

    .products_data {
        width: 90%;
        margin-right: -60px;
    }

    .productsButtons{
        width: 70px;
        display: flex;
        justify-content: space-between;
    }

    .fa-pen:hover{
        transform: scale(1.2);
        transition: all 0.2s ease 0s;
        cursor: pointer;
    }

    .fa-trash:hover{
        transform: scale(1.2);
        transition: all 0.2s ease 0s;
        cursor: pointer;
    }

    ul{
        list-style:none;
    }
</style>