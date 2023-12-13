let ans;
function add() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    if (a != "" && b != "" && !isNaN(a) && !isNaN(b)) {
        ans = (Number(a) + Number(b)).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p1").innerHTML = "Addition  is : " + ans;
    }
    else {
        document.getElementById("p1").innerHTML = "Please enter a valid value.........";

    }
}
function subtract() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (a != "" && b != "" && !isNaN(a) && !isNaN(b)) {
        ans = (a - b).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p1").innerHTML = "Subtraction  is : " + ans;
    }
    else {
        document.getElementById("p1").innerHTML = "Please enter a valid value.........";
    }
}
function multiply() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (a != "" && b != "" && !isNaN(a) && !isNaN(b)) {
        ans = (a * b).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p1").innerHTML = "Multiplication  is : " + ans;
    }
    else {
        document.getElementById("p1").innerHTML = "Please enter a valid value.........";
    }
}
function divide() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (a != "" && b != "" && !isNaN(a) && !isNaN(b)) {
        ans = (a / b).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p1").innerHTML = "Division  is : " + ans;
    }
    else {
        document.getElementById("p1").innerHTML = "Please enter a valid value.........";
    }
}
function square() {
    let a = document.getElementById("num3").value;
    if (a != "" && !isNaN(a)) {
        ans = (a * a).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p2").innerHTML = "Square is: " + ans;
    }
    else {
        document.getElementById("p2").innerHTML = "Please enter a valid value.........";
    }
}
function squareRoot() {
    let a = document.getElementById("num3").value;
    if (a != "" && !isNaN(a)) {
        ans = (Math.pow(a, 0.5)).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p2").innerHTML = "Square Root is: " + ans;
    }
    else {
        document.getElementById("p2").innerHTML = "Please enter a valid value.........";

    }
}

function exponent() {
    let a = document.getElementById("num4").value;
    let b = document.getElementById("num5").value;
    if (a != "" && b != "" && !isNaN(a) && !isNaN(b)) {
        ans = (Math.pow(a, b)).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p3").innerHTML = "Answer is: " + ans;
    }
    else {
        document.getElementById("p3").innerHTML = "Please enter a valid value.........";
    }
}
function mod() {
    let a = document.getElementById("num4").value;
    let b = document.getElementById("num5").value;
    if (a != "" && b != "" && !isNaN(a) && !isNaN(b)) {
        ans = (a % b).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p3").innerHTML = "Answer is: " + ans;
    }
    else {
        document.getElementById("p3").innerHTML = "Please enter a valid value.........";
    }
}

function factorial() {
    let a = document.getElementById("num6").value;
    if (a != "" && !isNaN(a) && is_whole(a)==0) {
        if (a === 0 || a === 1) {
            ans = 1;
        } else {
            ans = 1;
            for (let i = 2; i <= a; i++) {
                ans *= i;
            }
        }
        document.getElementById("p4").innerHTML = "Factorial is: " + ans;
    }
    else {
        document.getElementById("p4").innerHTML = "Please enter a valid value.........";

    }
}
function log() {
    let a = document.getElementById("num6").value;
    if (a != "" && !isNaN(a)) {
        ans = (Math.log(a)).toFixed(8);
        ans = removeExtraZeros(ans);
        document.getElementById("p4").innerHTML = "Answer is: " + ans;
    }
    else {
        document.getElementById("p4").innerHTML = "Please enter a valid value.........";
    }
}
function sin() {
    let a = document.getElementById("num7").value;
    if (a != "" && !isNaN(a)) {
        ans = (Math.sin(a)).toFixed(8);
        ans = removeExtraZeros(ans);
        document.getElementById("p5").innerHTML = " Answer is:: " + ans;
    }
    else {
        document.getElementById("p5").innerHTML = "Please enter a valid value.........";
    }
} function cos() {
    let a = document.getElementById("num7").value;
    if (a != "" && !isNaN(a)) {
        ans = (Math.cos(a)).toFixed(8);
        ans = removeExtraZeros(ans);
        document.getElementById("p5").innerHTML = "Answer is: " + ans;
    }
    else {
        document.getElementById("p5").innerHTML = "Please enter a valid value.........";
    }
} function tan() {
    let a = document.getElementById("num7").value;
    if (a != "" && !isNaN(a)) {
        ans = (Math.tan(a)).toFixed(8);
        ans = removeExtraZeros(ans);
        document.getElementById("p5").innerHTML = "Answer is: " + ans;
    }
    else {
        document.getElementById("p5").innerHTML = "Please enter a valid value.........";
    }
}
function removeExtraZeros(number) {
    let numberString = number.toString();
    numberString = numberString.replace(/(\.[0-9]*[1-9])0+$/, '$1');
    let formattedNumber = parseFloat(numberString);
    return formattedNumber;
}
function is_whole(num) {
    var a = (num - Math.floor(num))
    if (a === 0 && a>0) {
        return 0;
    }
    else {
        return 1;
    }
}