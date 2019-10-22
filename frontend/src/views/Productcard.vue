<template>
<div class="wrap">

    <header>
        <div id="login">
            LOG IN
        </div>
        
    </header>
    <main>
            <div id="container">
            <div id="threeboxcontainer">
                <div id="img"></div>
                <div id="desc">Az utóbbi évek slágere a rozé, amely a modern borászati technológiák eredményeként indult világhódító útjára. A reduktív eljárásnak köszönhetően marad meg a borban a szőlő frissessége, gyümölcsössége. A Lovassy Rosé illatában, ízében eperre, málnára emlékeztető karakterével, vidám savaival, élénk színével igazi nyári hangulatot varázsolnak a pohárba.</div>
                <div id="cont">

                </div>
                <div id="buttoncontainer">
                
                    <div id="price">$$$</div>
                    <a href="#" id="button"><i class="fas fa-shopping-cart"></i>ADD TO CART<i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
            </div>
    </main>

    <footer>

    </footer>
        
</div>
</template>

<style scoped>
body{
    background-color: black;

}

header{
    background-color: black;
    height: 120px;
}

#login{
    width:150px;
    height:70px;
    border: 5px #4CB690 solid;
    background-color:#11242D; 
    display:flex;
    justify-content: center;
    align-content: center;
    color:#4CB690;
    font-size:40px;
    font-family: 'Big Shoulders Display', cursive;
    text-align: center;
    margin: auto;
    flex-wrap:wrap;
}

#container{
    align-content: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0 0 0;
    background-color: black;
    
}

#img{
    height: 560px;
    width: 550px;
    background-image: url(https://trello-attachments.s3.amazonaws.com/5d9ae74f3283264b6b7ad171/5d9b2dde6e74513c6fa9716d/f3682a1d64ca3a9a10a891ca29b3bedf/swaetshirt.png);
    background-size: cover;
    float: left;
    background-repeat: no-repeat;
    background-position: center;

}

#desc{    
    height:300px;
    width: 800px;
    background-color:black;
    float: center;
    text-align: justify;
    justify-content: center;
    align-content: center;
    display:flex;
    flex-wrap: wrap;
    padding: 30px;
    font-family: 'Big Shoulders Display', cursive;
    color:#4cb690;
}

#button{
    color: #4CB690;
    background-color: #11242D;
    height:50px;
    width: 300px;
    justify-content: space-between;
    align-content: center;
    display:flex;
    margin: auto;
    text-align: center;
    flex-wrap: wrap;
    transition: 1s;
    font-family: 'Big Shoulders Display', cursive;
    font-size: 30px;
    border:5px solid #4CB690;
    padding:5px;
}
#button:hover{
    background:#4CB690;
    color:#11242D;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
}

#button:hover{
    color: #ffffff;
    font-family: 'Big Shoulders Display', cursive;
}

#button:visited{
    color:#4CB690;
    font-family: 'Big Shoulders Display', cursive;
}



a
{
   text-decoration:none;
}

a.underlined
{
   text-decoration:underline;
}

#buttoncontainer{
    justify-content: center;
    align-content: center;
    display: flex;
    float: center;
    margin: auto;
    height: 150px;
}

#price{
    margin-left:20px;
    background-color: #11242D;
    color: #4cb690;
    height:50px;
    width: 300px;
    justify-content: center;
    align-content: center;
    display:flex;
    margin: 40px 0 0 50px;
    text-align: center;
    flex-wrap: wrap;
    font-family: 'Big Shoulders Display', cursive;
    border:    5px solid  #4CB690;
    font-size: 40px;
    padding:5px;
}

footer{
    justify-content: center;
    align-content: center;
    display:flex;
    margin: auto;
    text-align: center;
    flex-wrap: wrap;
}

#home{
    align-content: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin: 50px 50px 50px 50px;
}

a:visited{
    color:#4cb690
}
a:hover{
    color:#ffffff;
}

i.fab.fa-facebook-square{
    transition: 1s;

}

i.fab.fa-facebook-square:hover{
    font-size: 1.5em;
    color:#ffffff;
}

i.fab.fa-instagram{
    transition: 1s;

}

i.fab.fa-instagram:hover{
    font-size: 1.5em;
    color:#ffffff;
}

i.fab.fa-twitter-square{
    transition: 1s;

}

i.fab.fa-twitter-square:hover{
    font-size: 1.5em;
    color:#ffffff;
}

button{
    height:30px;
    background: #4cb690;
    font-family: Helvetica;    

}

#sizecontainer{
    justify-content: space-between;
    align-content: center;
    display: flex;
    float: center;
    margin: 25px 0 25px 0;
    height: 40px; 
    width: 500px;
}

#cont{
    align-content: center;
    justify-content: center;
    display: flex; 

}
</style>
