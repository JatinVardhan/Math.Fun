
function table() {
    
    let number = document.getElementById('num1').value;
    let ans=[],mul,result;
    if ( !number=="" && !isNaN(number) || number > 0 ) {
        for(let i = 1; i <= 10; i++) {
            mul =( i * number).toFixed(5);
            mul = removeExtraZeros(mul);
           result= number +" X "+ i +" = "+ mul;
           ans.push(result)
        }
        document.getElementById("p1").innerHTML ="Table for "+number+" is : ";
        document.getElementById("p2").innerHTML =ans.join("<br> ");

       
    }
    else{
        
        document.getElementById("p1").innerHTML ="Please enter valid numeric values.";
        document.getElementById("p2").innerHTML ="";
    }
}
function removeExtraZeros(number) {
    let numberString = number.toString();
    numberString = numberString.replace(/(\.[0-9]*[1-9])0+$/, '$1');
    let formattedNumber = parseFloat(numberString);
    return formattedNumber;
}
