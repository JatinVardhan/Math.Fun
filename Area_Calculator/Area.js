function area1(){
    let a = parseInt(document.getElementById('num1').value);
    let ans;
    if (a != "" && !isNaN(a) && a>0) {
        ans = (3.14*a*a).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p1").innerHTML = "Area of Circle is : " + ans;
    }
    else {
        document.getElementById("p1").innerHTML = "Please enter a valid value.........";

    }
}
function area2(){
    let a = parseInt(document.getElementById('num2').value);
    let b = parseInt(document.getElementById('num3').value);
    let ans;
    if (a != "" && !isNaN(a) && a>0 && b != "" && !isNaN(b) && b>0 ){
        ans = (1/2*a*b).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p2").innerHTML = "Area of Triangle is : " + ans;
    }
    else {
        document.getElementById("p2").innerHTML = "Please enter a valid value.........";

    }
}
function area3(){
    let a = parseInt(document.getElementById('num4').value);
    let ans;
    if (a != "" && !isNaN(a) && a>0) {
        ans = (a*a).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p3").innerHTML = "Area of Square is : " + ans;
    }
    else {
        document.getElementById("p3").innerHTML = "Please enter a valid value.........";

    }
}
function area4(){
    let a = parseInt(document.getElementById('num5').value);
    let b = parseInt(document.getElementById('num6').value);
    let ans;
    if (a != "" && !isNaN(a) && a>0 && b != "" && !isNaN(b) && b>0 ){
        ans = (a*b).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p4").innerHTML = "Area of Rectangle is : " + ans;
    }
    else {
        document.getElementById("p4").innerHTML = "Please enter a valid value.........";

    }
}
function circum(){
    let a = parseInt(document.getElementById('num1').value);
    let ans;
    if (a != "" && !isNaN(a) && a>0) {
        ans = (2*3.14*a).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p1").innerHTML = "Circumference of Circle  is : " + ans;
    }
    else {
        document.getElementById("p1").innerHTML = "Please enter a valid value.........";

    }
}

function param1(){
    let a = parseInt(document.getElementById('num4').value);
    let ans;
    if (a != "" && !isNaN(a) && a>0) {
        ans = (4*a).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p3").innerHTML = "Perimeter of Square  is : " + ans;
    }
    else {
        document.getElementById("p3").innerHTML = "Please enter a valid value.........";

    }
}
function param2(){
    let a = parseInt(document.getElementById('num5').value);
    let b = parseInt(document.getElementById('num6').value);
    let ans;
    if (a != "" && !isNaN(a) && a>0 && b != "" && !isNaN(b) && b>0 ){
        ans = (2*(a+b)).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p4").innerHTML = "Perimeter of Rectangle  is : " + ans;
    }
    else {
        document.getElementById("p4").innerHTML = "Please enter a valid value.........";

    }
}
function removeExtraZeros(number) {
    let numberString = number.toString();
    numberString = numberString.replace(/(\.[0-9]*[1-9])0+$/, '$1');
    let formattedNumber = parseFloat(numberString);
    return formattedNumber;
}