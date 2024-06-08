var mydiv = document.getElementById("mydiv");
mydiv.addEventListener("mouseover",function (){
    mydiv.style.backgroundColor ="green";
});
mydiv.addEventListener("mouseout",function (){
    mydiv.style.backgroundColor = "grey";
});

var spantag = document.getElementById("spantag");
var prom = prompt("Enter your Name");
spantag.textContent = prom;

document.querySelector("#characters").addEventListener("keyup",function(eve){
var charlength = parseInt(eve.target.textLength);
document.getElementById("charno").textContent = "Character Count:" + charlength;
})