<template>
<div>
 <header>    
        
        <div class="top_container">
            <div class="svg_banner"> <img src="../assets/static/oz.svg" alt=""></div>
                    <nav>
                            <div class="nav_1">
                               <a href="https://www.facebook.com/krzysztof.szufla" target="_blank"><div><i class="fab fa-facebook-square fa-5x"></i></div></a> 
                               <a href="https://www.instagram.com/krisov333/?hl=pl" target="_blank"><div><i class="fab fa-instagram fa-5x"></i></div></a>
                               <a href="https://www.youtube.com/watch?v=8U5mtl65lIE&t=13s" target="_blank"><div><i class="fab fa-youtube fa-5x"></i></div></a>
                            </div>
                        <router-link to="/loginpage">
                            <div class="nav_2">LOG IN</div>
                        </router-link>                   
                    </nav>
         </div>

            <div class="buttons_container">
            <router-link class="buttons_container" to='/shop'>
                <button class="head_buttons"><a href="shop.html">SHOP</a></button>
            </router-link>
            <button class="head_buttons"><a href="#text" v-smooth-scroll>ABOUT</a></button>
            </div>
    </header>

    <main>
        <div class="about_container" id="text">
                <div class="container">
                <div class="about_info"><i class="fas fa-book-open"></i></div>
                <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum, lectus eget commodo pellentesque, orci purus porttitor quam, vel tempus sem neque vel est. Sed sed efficitur est. In egestas dui eu justo tristique, ut fermentum tortor auctor. In ultricies at neque in facilisis. Integer ultricies lorem dui, at rhoncus eros tristique vel. Praesent non mattis magna, eu malesuada quam. Vivamus bibendum est sem. Cras at dolor molestie, facilisis elit quis, accumsan lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec convallis ex quis feugiat faucibus. Quisque dapibus ipsum at massa sodales, et vehicula neque efficitur.
In felis nunc, eleifend tincidunt metus sed, faucibus iaculis enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas pulvinar leo vitae pharetra posuere. Praesent a dolor nec leo tempus dapibus eu in libero. Duis pulvinar bibendum libero, imperdiet dapibus dui lobortis et. In ut mi et dolor molestie lacinia. Vestibulum pellentesque turpis sem, et euismod dolor cursus at. Maecenas feugiat gravida ultricies. Proin ac massa dictum, congue neque vel, hendrerit erat. Integer in justo sagittis, dictum nunc convallis, posuere massa.Proin nulla sapien, pharetra eget nulla a, scelerisque posuere nibh. Curabitur sit amet diam ac nunc aliquam rutrum vel vitae nulla. Aliquam erat volutpat. Ut urna purus, tempus in odio ac, porttitor tristique massa. Proin eget quam a urna vulputate ultricies. Maecenas sit amet odio at elit efficitur ullamcorper in at lectus. Nulla facilisi. Sed at consectetur lorem, vitae consectetur nisi. Etiam luctus ultrices neque, et auctor ipsum pellentesque id. Nam vel arcu dictum, ultrices ipsum vel, mattis ante. Aenean interdum, velit hendrerit maximus cursus, lorem nisl hendrerit justo, lacinia elementum sapien tortor in leo.</div>
                </div>
        </div>
    </main>
<footer>
     <div class="info_container">
               <img class="footer_logo" src="..//assets/static/oz.svg" alt="">
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
</script>

<style scoped>
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
    height:800px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
}

.head_buttons{
    width:60%;
    height:300px;
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
    justify-content:center;
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

.container{
   width:50%;
   height:800px;
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
}

.text{
    width:60%;
    height:900px;
    font-size:30px;
    color:#4CB690;
}
</style>
