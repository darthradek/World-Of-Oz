<template>
<div>
<header>
        
    <div class="search_bar">
        <img src="..//assets/static/oz.svg" alt="">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?">
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   
</div></div>
        <nav>
            <router-link to="/loginpage">
                <div class="nav_1">LOG IN</div>
            </router-link>         
            <router-link to="/basket">
                <div class="nav_2"><i class="fas fa-shopping-cart"></i></div>
            </router-link>            
        </nav>
</header>

<main>
    <div class="cards_container">
     {{basket}}
   
            <div class="shop_card" v-for="product in products" :key="product.id">
                <div class='img'>IMAGE</div>
                        <div class='name_container'>
                        <div class='item_name'>{{product.name}}</div>
                        <div class='item_name'>{{product.brands[0].brand}}</div>
                        </div>
                <div class='shopcard_navwrapper'>
                    <div class='shopcard_nav'>{{product.price}}$$</div>
                    <div class='basket_nav' v-on:click="buy(product)">
                        <i class="fas fa-cart-arrow-down"></i>
                    </div>
                </div>
            </div> 
          
    </div>
</main>

<footer>
     <div class="info_container">
               <img src="..//assets/static/oz.svg" alt="">
                <div class="contact container">
                    <div class="contact_heading"><p>CONTACT</p></div>
                <div class="credits"><p>Webshop by Akos Gyetvan/Grzegorz Charyszczak/Radoslaw Haller</p></div>
                <div class="contact"><p>e-mail:radoslawhaller@gmail.com phone number:888666119</p></div>
                </div>
                <div class="socials">
                     <a href="https://www.facebook.com/krzysztof.szufla" target="_blank"><div><i class="fab fa-facebook-square fa-5x"></i></div></a> 
                               <a href="https://www.instagram.com/krisov333/?hl=pl" target="_blank"><div><i class="fab fa-instagram fa-5x"></i></div></a>
                               <a href="https://www.youtube.com/watch?v=8U5mtl65lIE&t=13s" target="_blank"><div><i class="fab fa-youtube fa-5x"></i></div></a>
                </div>
            </div>
</footer>
</div>
</template>

<script>
    import axios from 'axios';
    export default {
        mounted() {
            this.readAllProducts();
        },
        data (){ 
            return {
                products: [],
                basket: []
        }},
        methods: {
            readAllProducts() {
                axios.get('http://world-of-oz.azurewebsites.net/api/products')
                    .then((response) => {
                        this.products = response.data;
                        
                    });
                    
            },
            buy(product) {
                if (!localStorage.getItem('basket') || localStorage.getItem('basket')==='') {
                    localStorage.setItem('basket',JSON.stringify([]));
                }
                this.basket = JSON.parse(localStorage.getItem('basket'));
                this.basket.push(product);
                localStorage.setItem('basket',JSON.stringify(this.basket));
            }
            
        }
    }
</script>

<style scoped>

body{
    margin:0 auto;
    font-family: 'Big Shoulders Display', cursive;
    background-color:#011;
}

header{
    width:100%;
    height:450px;
    display:flex;
    justify-content: space-between;
}

.search_bar{
    width:100%;
    height:400px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    color:#4CB690;
}


nav{
    width:900px;
    height:300px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
}

.nav_1{
    width:200px;
    height:100px;
    color:#4CB690;
    text-justify:center;
    text-align:center;
    font-size:70px;
    background-color:#11242D;
    border: 5px #4CB690 solid;
}

.nav_1:hover{
    background:#4CB690;
    color:#11242D;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
}

.nav_2:hover{
    background:#4CB690;
    color:#11242D;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
}

.nav_2{
    width:200px;
    height:100px;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#4CB690;
    background-color:#11242D;
    border: 5px #4CB690 solid;
}

main{
    background-color:#011;
    width:100%;
    height:auto;
    display:flex;
    justify-content: center;
}

.cards_container{
    width:95%;
    height:auto;
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
   
}

.shop_card{
    width:25%;
    height:auto;
    margin: 20px 100px;
    
    
      
   
}

.img{
    background-color:#4CB690;
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:650px;
    font-size:100px;
    color:#11242D;
}

.shopcard_navwrapper{
    width:100%;
    height:150px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.shopcard_nav{
    background-color:#11242D;
     border: 5px #4CB690 solid;
    width:45%;
    height:100px;
    border: 5px #4CB690 solid;
    color: #4CB690;
    display:flex;
     justify-content:center;
     align-items:center;
     font-size:50px;
    }

    .shopcard_nav:hover{
        background:#4CB690;
    color:#11242D;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
    }

.basket_nav{
    width:200px;
    height:100px;
     background-color:#11242D;
     border: 5px #4CB690 solid;
    color: #4CB690;
      display:flex;
     justify-content:center;
     align-items:center;
     font-size:50px;
}
.basket_nav:hover{
     background:#4CB690;
    color:#11242D;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
}

.name_container{
    width:100%;
    height:280px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
     font-size:80px;
     flex-direction:column;
    
}
.item_name{
    width:100%;
    height:100px;
    background-color:#11242D;
     border: 5px #4CB690 solid;
     color: #4CB690;
     display:flex;
     justify-content:center;
     align-items:center;
}
img{
    width:920px;
    height:500px;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 700px;
  border: 3px solid #4CB690;
  border-right: none;
  padding: 5px;
  height:100px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #4CB690;
  background-color:#11242D;
  font-size:30px;
}

.searchTerm:focus{
  color:#4CB690;
}

.searchButton {
  width: 100px;
  height:auto;
  border: 5px solid #4CB690;
  background: #4CB690;
  text-align: center;
  color:#011;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 50px;
}
footer{
width:100%;
height:auto;
background-color:#11242D;
} 

.footer_spare{
    background-color:#011;
    width:100%;
    height:200px;
}

.info_container{
    background-color:#11242D;
    width:100%;
    height:500px;
    display:flex;
    align-items: center;
    justify-content: space-around;
}

.socials{
    width:300px;
    height:200;
    display:flex;
    justify-content:space-evenly;
    font-size:10px;
}


.contact_heading{
display:flex;
justify-content: center;
align-items: center;
font-size: 30px;
color:#4CB690;
}

.contact{
    color:#4CB690;
    font-size: 30px;
    
}






</style>

