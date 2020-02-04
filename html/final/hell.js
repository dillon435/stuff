function clickGame(){
    var button = this.id;
    var img = document.getElementById("gamePoster");
    if(button == "mW5"){
        img.src = "images/mechWarrior5.jpg";
    }
    else if(button == "doomEternal"){
        img.src = "images/doometernal.jpg"
    }
    else if(button == "Terraria"){
        img.src = "images/terraria.jpg"
    }
    else if(button == "haloMCC"){
        img.src = "images/halomcc.png"
    }
}

var allButtons = document.querySelectorAll("button");
allButtons.forEach(function (button){
    button.addEventListener("click", clickGame,false);
})

var allH1s = document.querySelectorAll("h1");
allH1s.forEach(function (h1){
    h1.addEventListener("click", clickGame, false);
})