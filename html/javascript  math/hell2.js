function calcTheScore(){
    //input
    var test1 = parseFloat(document.getElementById("test1").value);
    var test2 = parseFloat(document.getElementById("test2").value);
    var test3 = parseFloat(document.getElementById("test3").value);
    
    //processing
    var score = (test1 + test2 + test3) / 3;
    
    if(score >= 75){
        document.getElementById("result").innerHTML = "Pass";
    }
    
    else if(score < 75){
        document.getElementById("result").innerHTML = "Fail";
    }
    
    //output
    document.getElementById("scoreOutput").innerHTML = score.toFixed(2);
}

var calcAverage = document.getElementById("calcAverage");
calcAverage.addEventListener("click", calcTheScore,false);

function clearScreen(){
    document.getElementById("test1").value = "";
    document.getElementById("test2").value = "";
    document.getElementById("test3").value = "";
    document.getElementById("scoreOutput").innerHTML= "";
    document.getElementById("result").innerHTML= "";
    document.getElementById("test1").focus();
}

var clear = document.getElementById("clearForm");
clear.addEventListener("click", clearScreen, false);

