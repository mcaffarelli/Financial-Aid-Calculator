// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function getdata(){
      var dollarUSLocale = Intl.NumberFormat('en-US');
    var dollarIndianLocale = Intl.NumberFormat('en-IN');
      
var loan = document.getElementById('loan').value; 
loan = loan.replace(/\$|,/g, '');
var units = document.getElementById('units').value; 
    
    if((isNaN(loan)) || (isNaN(units))){
        document.getElementById("newamount").innerHTML = "Enter Number" ;
        document.getElementById("newamount").style.color = "red"; 
        document.getElementById("newamount").style.fontSize = "20px";  
    }
    else{
    
    var first = loan / 36;
    var second = first * units;
    
    
    
document.getElementById("newamount").innerHTML = "$" + dollarUSLocale.format(second) ;
document.getElementById("newamount").style.color = "green"; 
    
  }  
}

function func(){
 

}