function ticketCost(){
    //input
    var numTickets = parseFloat(document.getElementById("numTickets").value);
    
    //processing
    var ticketCost = numTickets * 10.25;
    
    //output
    document.getElementById("ticketCost").innerHTML = "$" + ticketCost.toFixed(2);
    
}

var costButton = document.getElementById("costButton");
costButton.addEventListener("click",ticketCost,false);

function clickMovie(){
    var button = this.id;
    var img = document.getElementById("moviePoster");
    if(button == "exM"){
        img.src = "images/exMachina.jpg";
    }
    else if(button == "goneGirl"){
        img.src = "images/goneGirl.jpg";
    }
    else if(button == "inception"){
        img.src = "images/inception.jpg";
    }
    else if(button == "madMax"){
        img.src = "images/madMax.jpg";
    }
}

var allButtons = document.querySelectorAll("button");
allButtons.forEach(function (button){
    button.addEventListener("click", clickMovie,false);
})