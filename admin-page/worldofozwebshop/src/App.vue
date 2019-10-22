<template>
  <div id="app">
    <div id = "nav">
      <router-link class="link" to="/products"> Products </router-link> |
      <router-link class="link" to="/producttypes"> Product Types </router-link> |
      <router-link class="link" to="/brands"> Brands </router-link> |
      <router-link class="link" to="/colors"> Colors </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  #app {
    background-color: #11242D;
    font-family: 'Big Shoulders Display', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 810px;
    color: #2c3e50;
  }

  #nav {
    background-color: #11242D;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link{
    color: #4CB690;
    text-decoration: none;
    font-size: 30px;
    margin: 15px;
    width: 170px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link:hover{
    background:#4CB690;
    color:#11242D;
    letter-spacing: 2px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 5px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
    border: #011 3px solid;
  }

</style>
