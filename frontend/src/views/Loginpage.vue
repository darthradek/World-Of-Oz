<template>
<div> 
    <header>
        <div class="frame_container">
            <div class="title_container"><h1>THE WORLD OF OZ WEBSHOP</h1></div>
            <div class="formular_container">
                <div class="text_box">
                     <form><input type="text" name="search" placeholder="LOGIN"><i class="fas fa-address-book"></i></form>
                </div>     
                <div class="text_box">
                     <form><input type="text" name="search" placeholder="PASSWORD"><i class="fas fa-address-book"></i></form>
                </div>
            </div>
            <div class="register_container">
                    <div class="logo_banner"><img src="../assets/static/oz.svg" alt=""></div>
                <div class="buttons">
                    <div class="login_button">LOGIN<i class="fas fa-sign-in-alt"></i></div>
                    <router-link to="/register">
                        <div class="register_button">REGISTER <i class="fas fa-user-plus fa-1x"></i> </div>
                    </router-link>               
                </div>
            </div>
        </div>
    </header>
    </div> 
</template>


<style scoped>
body{
    background-color:#011;
    font-family: 'Big Shoulders Display', cursive;
}

header{
    width:100%;
    height:800px;
    display:flex;
    justify-content: center;
    align-items: center;
}

.frame_container{
    height:600px;
    width:60%;
    background-color:#11242D;
    display:flex;
    flex-direction: column;
   align-items: center;
    border:#4CB690 9px solid;
    color:#4CB690;
}

h1{
    font-size: 70px;
}

.formular_container{
    width:90%;
    height:100px;
    display:flex;
    justify-content: center;
    align-items: center;
    justify-content:space-between;
}

.title_container{
    width:100%;
    height:30%;
    display:flex;
    justify-content: center;
    align-items: center;

}

.text_box{
    background-color:#11242D;
    width:40%;
    height:70px;
    border:#4CB690 7px solid;
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    font-size:50px;
}

.register_container{
    width:90%;
    height:300px;
    display:flex;
    justify-content:space-between;
    align-items: flex-end;
}

.register_button{
    height:70px;
    width:100%;
    background-color:#11242D;
    border:#4CB690 7px solid;
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    font-size:40px;  
}

.buttons{
    display:flex;
    justify-content: space-around;
    width:600px;
    
}

.login_button{
    height:70px;
    width:30%;
    background-color:#11242D;
    border:#4CB690 7px solid;
    display:flex;
    justify-content:space-evenly;
    align-items: center;
    font-size:50px; 
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
.login_button:hover{
    background:#4CB690;
    color:#11242D;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
}

input[type=text] {
    width: 70%;
    box-sizing: border-box;
    font-size: 16px;
    color:#4CB690;
    background-color:#11242D;
    padding: 12px 20px 12px 40px;
    font-family: 'Big Shoulders Display', cursive;
    border: none;
}

input[type=text]:focus{
    outline: none;
}

.logo_banner{
    height:300px;
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
}

.logo_banner img {
    width:100%;
}
</style>





