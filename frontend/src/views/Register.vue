<template>
<div>
        <header>
           <div class="spare"></div>
        </header>
         <main>
            <div class="frame_container">
                <div class="form_container">
                    <div class="form"><form><input type="text" name="search" placeholder="FULL NAME"></form></div>
                    <div class="form"><form><input type="text" name="search" placeholder="LOGIN"></form></div>
                    <div class="form"><form><input type="text" name="search" placeholder="PASSWORD"></form></div>
                    <div class="form"><form><input type="text" name="search" placeholder="CONFIRM PASSWORD"></form></div>
                    <button class="register_button">REGISTER</button>
                </div>
            </div>
        </main>
        <footer>
            <div class="footer_spare"></div>
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
export default {};
</script>
<style scoped>

body{
    background-color:#011;
    font-family: 'Big Shoulders Display', cursive;
}

header{
    height:auto;
    width:100%;
    display: flex;
    font-size:50px;
    align-items: center;
    justify-content:flex-end;  
}

.spare{
    background-color:#011;
    width:100%;
    height:150px;
}

 
 main{
    display:flex;
    justify-content: center;
    width:auto;
    height:auto;
 }
.frame_container{
    background-color:#11242D;
    width:70%;
    height:600px;
    display:flex;
    justify-content: center;
}

.form_container{
    width:60%;
     display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.form{
    width:50%;
    height:10%;
    display:flex;
    justify-content: center;
    text-align: center;
     border:#4CB690 7px solid;
     color:#4CB690;
     font-size:50px;
}
input[type=text] {
    text-align: center;
    width: 90%;
    box-sizing: border-box;
    font-size: 30px;
    color:#4CB690;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:#11242D;
    padding: 12px 20px 12px 40px;
    font-family: 'Big Shoulders Display', cursive;
    border: none;
}

input[type=text]:focus{
    outline: none;
}

.register_button{
     height:20%;
     width:50%;
     display:flex;
    justify-content: center;
    align-items: center;
     background-color:#11242D;
    border:#4CB690 7px solid;
     color:#4CB690;
     font-size:80px;
     font-family: 'Big Shoulders Display', cursive;
}

.register_button:hover{
    background:#4CB690;
    color:#11242D;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
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
    height:250px;
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

#logo{
background-color:black;
}



</style>