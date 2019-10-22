<template>
  <div>
    <div id="vue-app">
      <div class="container">
        <div class="heading">
          <h1>
            <div class="shopper"></div>Basket
          </h1>
          <router-link to="/shop">
            <a href="productpage.html" class="visibility-cart transition is-open">X</a>
          </router-link>
        </div>
        <div class="cart transition is-open">
          <a href="shop.html" class="btn btn-update">Continue Shopping</a>
          
          <div class="table">
            <div class="layout-inline row th">
              <div class="col col-pro">Product</div>
              <div class="col col-price align-center">Price</div>
              <div id="qtyheader">QTY</div>
              <div class="col">Total</div>
            </div>

            <div class="layout-inline row" v-for="product in basket" v-bind:key="product.id">
              <div class="col col-pro layout-inline">
                <img
                  src="https://trello-attachments.s3.amazonaws.com/5d9ae74f3283264b6b7ad171/5d9b2dde6e74513c6fa9716d/f3682a1d64ca3a9a10a891ca29b3bedf/swaetshirt.png"
                  alt="kitten"
                />
                <p>{{product.name}}</p>
              </div>

              <div class="col col-price col-numeric align-center">
                <p>${{price}}</p>
              </div>

              <div class="col col-qty layout-inline">
                <button
                  type="button"
                  v-on:click="subtract"
                  v-on:change="totalCalc"
                  class="qty qty-minus"
                >-</button>
                <div id="number">{{itemn}}</div>
                <button type="button" v-on:click="add" class="qty qty-plus">+</button>
                <button type="button" v-on:click="clear" class="qty qty-plus"><i class="fas fa-broom"></i></button>
              </div>

              <div class="col col-total col-numeric">
                <p>${{formattedTotal}}</p>
              </div>
            </div>

            <div>
              <div class="tf">
                <div class="row layout-inline">
                  <div class="shipping">
                    <p>Shipping : $0.0</p>
                  </div>
                  <div class="col"></div>
                </div>
                <div class="row layout-inline">
                  <div class="total">
                    <p>Total : ${{formattedTotal}}</p>
                  </div>
                  <div class="col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.getBasket()
                
    },
  data() {
    return {
      itemn: 1,
      total: 0,
      price: 113.99,
      formattedTotal: 0,
      basket: []
    };
  },
  methods: {
    add: function() {
      this.itemn++;
      this.totalCalc(this.itemn);
    },
    clear: function() {
      localStorage.setItem('basket',JSON.stringify([]));
      this.basket = []
    },
    subtract: function() {
      this.itemn--;
      if (this.itemn >= 1) {
        this.totalCalc(this.itemn);
      } else {
        this.itemn = 1;
      }
    },
    totalCalc: function(itemn) {
      this.total = itemn * this.price;
      this.formattedTotal = Number(this.total).toFixed(2);
    },

    setInitialTotal: function() {
      if ((this.itemn === 1)) {
        this.formattedTotal = this.price;
      }
    },
    getBasket() {
        if (!localStorage.getItem('basket') || localStorage.getItem('basket')==='') {
            localStorage.setItem('basket',JSON.stringify([]));
        }
        this.basket = JSON.parse(localStorage.getItem('basket'));

    }
  },
  beforeMount() {
    this.setInitialTotal();
  }
};
</script>

<style scoped>
html {
  background: black;
  font: 1.5em "Big Shoulders Display", cursive;
}

* {
  box-sizing: border-box;
}

.shopper {
  text-transform: lowercase;
  font: 2em "Shopper", sans-serif;
  line-height: 0.5em;
  display: inline-block;
}

h1 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.5em;
}

p {
  font-size: 1.5em;
  color: #4cb690;
}

input {
  border: 0.3em solid #4cb690;
  padding: 0.5em 0.3em;
  font-size: 1.4em;
  color: #4cb690;
  text-align: center;
  background-color: #11242d;
}

img {
  max-width: 9em;
  width: 100%;
  overflow: hidden;
  margin-right: 1em;
}

a {
  text-decoration: none;
}

.container {
  max-width: 75em;
  width: 95%;
  margin: 40px auto;
  overflow: hidden;
  position: relative;

  border-radius: 0.6em;
  background:#11242d;
  box-shadow: 0 0.5em 0 rgba(138, 148, 152, 0.2);
}

.heading {
  padding: 1em;
  position: relative;
  z-index: 1;
  color:#11242d;
  background: #4cb690;
}

.cart {
  margin: 2.5em;
  overflow: hidden;
}

.cart.is-closed {
  height: 0;
  margin-top: -2.5em;
}

.table {
  background:#11242d;
  border-radius: 0.6em;
  overflow: hidden;
  clear: both;
  margin-bottom: 1.8em;
}

.layout-inline > * {
  display: inline-block;
}

.align-center {
  text-align: center;
}

.th {
  background: #4cb690;
  color:#011;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5em;
}

.tf {
  background:#011;
  text-transform: uppercase;
  text-align: right;
  font-size: 1.2em;
}

.tf p {
  color: #4cb690;
  font-weight: bold;
}

.col {
  padding: 1em;
  width: 12%;
}

.col-pro {
  width: 44%;
}

.col-pro > * {
  vertical-align: middle;
}

.col-qty {
  text-align: center;
  width: 20%;
  color: #4cb690;
  font-size: 1.5em;
}

.col-numeric p {
  font: bold 1.8em "Big Shoulders Display", cursive;
}

.col-total p {
  color: #4cb690;
}

.tf .col {
  width: 20%;
}

.row > div {
  vertical-align: middle;
}

.row-bg2 {
  background: #11242d;
}

.visibility-cart {
  position: absolute;
  color: #11242d;
  top: 0.5em;
  right: 0.5em;
  font: bold 2em arial;
  border: 0.16em solid #11242d;
  border-radius: 2.5em;
  padding: 0 0.22em 0 0.25em;
}

a.qty {
  width: 1em;
  line-height: 1em;
  border-radius: 2em;
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  background: #4cb690;
  color: #11242d;
}

a.qty:hover {
  background: #4cb690;
}

.btn {
  padding: 10px 30px;
  border-radius: 0.3em;
  font-size: 1.4em;
  font-weight: bold;
  background: #4cb690;
  color:#11242d;
}

.btn:hover {
  box-shadow: 0 3px 0 rgba(59, 154, 198, 0);
}

.btn-update {
  float: right;
  margin: 0 0 1.5em 0;
}

.transition {
  transition: all 0.3s ease-in-out;
}

.qty.qty-plus {
  color: #4cb690;
  background-color:#11242d;
  border: 0px;
  font-size: 1.5em;
  margin: 3px;
}

.qty.qty-minus {
  color: #4cb690;
  background-color:#11242d;
  border: 0px;
  font-size: 1.5em;
  margin: 3px;
}

#qtyheader {
  text-align: center;
  width: 17%;
  color: black;
  font-size: 1em;
}

#total {
  font-size: 1.5em;
  color: #4cb690;
}
</style>