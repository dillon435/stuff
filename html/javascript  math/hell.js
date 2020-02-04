/*eslint-env broswer*/
function calcTheFee(){
    //input
    var weight = parseFloat(document.getElementById("dogWeight").value);
    var days = parseFloat(document.getElementById("dogDays").value);
    
    //processing
    var fee = days * weight * 0.5;
    
    //output
    document.getElementById("feeOutput").innerHTML = "$" + fee.toFixed(2);
    
}

var calcButton = document.getElementById("calcButton");
calcButton.addEventListener("click", calcTheFee, false);

function resetScreen(){
    document.getElementById("dogWeight").value = "";
    document.getElementById("dogDays").value = "";
    document.getElementById("feeOutput").innerHTML = "";
    document.getElementById("dogWeight").focus();
}

var reset =document.getElementById("resetForm");
reset.addEventListener("click", resetScreen, false);






