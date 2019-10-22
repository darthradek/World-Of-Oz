<template>
    <div class="background">
        <div>
            <h1 class="heading">Brands</h1>
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
                <router-link to="/brandscreate">
                    <div class="addButton" >
                            <i class="fas fa-plus"></i>
                            <div>ADD BRAND</div>
                    </div>
                </router-link>
            </div>
            <div class="brands_container">
                <ul v-for="(brand, index) in brands" :key="index">
                    <li>
                        <div class="brands">
                            <div class="brands_data">
                                {{brand.id}}: {{brand.name}}
                            </div>
                            <div class="brandsButtons">
                                <router-link :to="`/brandsupdate/${brand.id}`">
                                    <div>
                                        <i class="fas fa-pen"></i>
                                    </div>
                                </router-link>
                                <div>
                                    <i class="fas fa-trash" v-on:click="deleteBrand(index, brand.id, brand.name)"></i>
                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    export default {
        mounted() {
            this.readAllBrands();
        },

        data: () => ({
            brands: [],
            dialog: false,
        }),

        methods: {
            readAllBrands() {
                axios.get('http://world-of-oz.azurewebsites.net/api/brands')
                    .then((response) => {
                        this.brands = response.data;
                    });
            },
            deleteBrand(index, id, name) {
                if(confirm("Are you sure you want to delete Brand \"" + id + ": " + name + "\"?")) {
                    axios.delete('http://world-of-oz.azurewebsites.net/api/brands/' + id)
                        .then(() => {
                            alert("Brand \"" + id + ": " + name + "\" successfully deleted");
                        });
                        Vue.delete(this.brands, index);
                }
            },
        }
    }
</script>

<style scoped>

    ::placeholder {
        color: #38896c;
    }

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
        font-size: 15px;
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
        text-decoration: none;
    }

    .addButton:hover{
        transform: scale(1.125);
        transition: all 0.2s ease 0s;
        cursor: pointer;
    }

    .brands_container{
        color:#4CB690;
        border: #4CB690 5px solid;
        background-color:#011;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .brands{
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

    .brands_data {
        width: 90%;
        margin-right: -60px;
    }

    .brandsButtons {
        width: 70px;
        display: flex;
        justify-content: space-between;
    }

    .fa-pen {
        color: #4CB690;
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