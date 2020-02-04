/*My library of cool JavaScript functions*/
/*eslint-env browser*/
function docLastMod() {
    var lastMod = new Date(document.lastModified);
    document.write("<h6>Document last modified on ");
    document.write((lastMod.getMonth() + 1) + "/" + lastMod.getDate() + "/" + lastMod.getFullYear());
    document.write("</h6>");
}

//event handlers
function hoverImg() {
    document.getElementById("heroName").innerHTML = this.title;
    //this == whatever object calls the function
}
/**
//event handler on an object
var img = document.getElementById("hero0");
img.addEventListener("mouseover", hoverImg, false);
//event   function   false
//document.getElementById("hero0").addEventListener
*/

function clickImage() {
    //click image to make big image appear
    var img = this.id;
    var bigImg = document.getElementById("heroLarge");
    if(img == "hero0"){
        bigImg.src = "images/captainamerica.jpg";
        bigImg.title = "Captain America";
    }
    else if(img == "hero1"){
        bigImg.src = "images/deadpool.jpg";
        bigImg.title = "Deadpool";
    }
    else if(img == "hero2"){
        bigImg.src = "images/hulk.jpg";
        bigImg.title = "Hulk";
    }
    else if(img == "hero3"){
        bigImg.src = "images/spiderman.jpg";
        bigImg.title = "Spiderman";
    }
    else if(img == "hero4"){
        bigImg.src = "images/thor.jpg";
        bigImg.title = "Thor";
    }
    }

var allImages = document.querySelectorAll("img");
allImages.forEach(function (img) {
    img.addEventListener("click", clickImage, false);
    img.addEventListener("mouseover", hoverImg, false);
    img.addEventListener("mouseout", function () {
        document.getElementById("heroName").innerHTML = "Hover over an image";
    }, false);
});









//keep my white space please
