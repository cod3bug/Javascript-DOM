var randNo1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randNo1+".png";
var randomImageAdress1 = "images/"+randomImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageAdress1); 

var randNo2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice"+randNo2+".png";
var randomImageAdress2= "images/"+randomImage2;
var image2 =  document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageAdress2);









if(randNo1>randNo2)
{
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(randNo2>randNo1)
{
    document.querySelector("h1").textContent="Player 2 wins";
}
else if(randNo1===randNo2)
{
    document.querySelector("h1").textContent="Draw";
}
