/*eslint-env broswer*/
function calcThePay(){
    //input
    var hours = parseFloat(document.getElementById("hoursWorked").value);
    var rate = parseFloat(document.getElementById("payRate").value);
    
    //processing
    var pay = 0;
    if(hours <= 40){
        //straight pay
        pay = hours * rate;
    }
    else if(hours > 40){
        pay = rate * 40 + (hours - 40) * rate * 1.5;
    }
    
    //output
    document.getElementById("payOutput").innerHTML = "$" + pay.toFixed(2);
}
var calcButton = document.getElementById("calcButton");
calcButton.addEventListener("click", calcThePay, false);

function resetScreen(){
    document.getElementById("hoursWorked").value = "";
    document.getElementById("payRate").value = "";
    document.getElementById("parOutput").innerHTML = "";
    document.getElementById("hoursWorked").focus();
}
var reset = document.getElementById("resetForm");
reset.addEventListener("click", resetScreen,false);