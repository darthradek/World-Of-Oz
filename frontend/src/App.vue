<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
    background-color:black;
    margin:0 auto;
    font-family: 'Big Shoulders Display', cursive;
}

.fab{
color:#4CB690;
}

.fa-facebook-square:hover, .fa-instagram:hover, .fa-youtube:hover{
-webkit-transform: scale(1.3);
 -ms-transform: scale(1.3);
 transform: scale(1.3);
        

}

header{
    margin:0 auto;
    width:100%;
    height:2000px;
    background-color:#011;
    
    
}
.top_container{
    margin-left:850px;
    width:2000px;
    height:700px;
    display:flex;
    justify-content: space-around;
    
}
.svg_banner{

    
    width:800px;
    height:800px;
}


nav{
    display:flex;
    height:200px;
    width:700px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.nav_1{
    width:300px;
    height:100px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    color:#4CB690;
}
a:link{
   text-decoration: none;
    color:#4CB690;
}
a:visited{
color:#4CB690;
}

a:visited:hover{
    color:#11242D;
}

.nav_2{
    width:300px;
    height:100px;
    border: 10px #4CB690 solid;
    background-color:#11242D; 
    display:flex;
    justify-content: space-around;
    align-items: center;
    color:#4CB690;
    font-size:60px;
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

.socials:hover{
    transition: 0.5s;
}

.buttons_container{
    width:100%;
    height:1000px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
}

.head_buttons{
    width:70%;
    height:350px;
    background-color:#11242D;
    color:#4CB690;
    border:none;
    font-size:250px;
    font-stretch: 100%;
    border:10px #4CB690 solid;
    outline-offset:15px;
    font-family: 'Big Shoulders Display', cursive;

}

.head_buttons:hover{
    background:#4CB690;
    color:#11242D;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
    
}


main{
    background-color:#011;
    width:100%;
    height:1600px;
}

.about_container{
    background-color:#11242D;
    width:100%;
    height:1200px;
    display:flex;
    justify-content: space-around;
    align-items: center
}

.about_info{
    width:800px;
    height:900px;
    display:flex;
    justify-content: center;
    color:#4CB690;
    font-size:15em;
}

footer{
    width:100%;
    height:600px;
    background-color:#11242D;
}

/* shop.html property*/


</style>
