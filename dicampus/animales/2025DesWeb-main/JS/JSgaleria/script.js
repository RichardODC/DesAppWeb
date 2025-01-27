const datos= [
    ["Léon: The Professional", "https://pics.filmaffinity.com/leon_leon-207548886-large.jpg", "1994"],
	["Beautiful Girls", "https://pics.filmaffinity.com/beautiful_girls-847053126-large.jpg", "1996"],
	["Mars Attack", "https://pics.filmaffinity.com/mars_attacks-785566493-large.jpg", "1996"],

 
]

const carpetaimg="img/";
let indice=0;

function sig(){
    document.querySelector("img").src=carpetaimg+datos[indice][1];
    document.querySelector("img").alt=datos[indice][0];
    document.querySelector("h1").innerText=datos[indice][0];
    document.querySelector("p").innerText=datos[indice][2];
    document.querySelector("h2").innerText=indice;
    
    indice++

if(indice>datos.length-1){
    indice=0;
}
}

etInterval(sig,2000);