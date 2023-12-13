
function factor_printer() {
    let a = document.getElementById("num1").value;
    let count = [];
    if (is_whole(a)===0 && a>0 && a != "" && !isNaN(a)) {
        for (let i = 1; i <= (a / 2); i++) {
            if (a % i === 0) {
                count.push(i);
            }
        }
        count.push(a);

        document.getElementById("p1").innerHTML = "Prime Factors are : " + count.join(", ");
    }
    else {
        document.getElementById("p1").innerHTML = "Please enter a Positive Integer value.........";
    }
}
function fibo_series() {
    let a = document.getElementById("num2").value;
    let n1 = 0, n2 = 1, nextTerm, series1 = [];
    if ( is_whole(a)===0 && a>0 && a != "" && a != 0 && !isNaN(a)) {
        for (let i = 1; i <= a; i++) {
            series1.push(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;

        }
        document.getElementById("p2").innerHTML = "Fibonacci Sequence is  : " + series1.join(", ");
    }
    else {
        document.getElementById("p2").innerHTML = "Please enter an Positive Integer value.........";
    }
}


function ap_series() {
    let first = document.getElementById("num3").value;
    let second = document.getElementById("num4").value;
    let n = document.getElementById("num5").value;
    document.getElementById("num5").innerHTML = Math.round(n);
    let d, ans, series2 = [];
    if (first != "" && second != "" && n != "" && !isNaN(first)&& !isNaN(second)&& !isNaN(n)) {
        d = (second - first).toFixed(5);
        d = removeExtraZeros(d);
        document.getElementById("p3").innerHTML = "Here,    a = " + first + " &  d (Common Difference) = " + d;
        for (let i = 1; i <= n; i++) {
            ans = (Number(first) + (i - 1) * d).toFixed(5);
            ans = removeExtraZeros(ans);
            series2.push(ans);
        }
        document.getElementById("p4").innerHTML = "A.P. Sequence is  : " + series2.join(", ");
    }
    else {
        document.getElementById("p3").innerHTML = "Please enter all the terms........."
        document.getElementById("p4 ").innerHTML = "";
    }

}
function ap_sum() {
    let first = document.getElementById("num3").value;
    let second = document.getElementById("num4").value;
    let n = document.getElementById("num5").value;
    document.getElementById("num5").innerHTML = Math.round(n);
    let d, ans;
    if (first != "" && second != "" && n != ""&& !isNaN(first)&& !isNaN(second)&& !isNaN(n)){
        d = (second - first).toFixed(5);
        d = removeExtraZeros(d);
        document.getElementById("p3").innerHTML = "Here,    a = " + first + " &  d (Common Difference) = " + d;
        ans = ((2 * first + (n - 1) * d) * n / 2).toFixed(5);
        ans = removeExtraZeros(ans);
        document.getElementById("p4").innerHTML = "Sum up to " + n + "th term is : " + ans;
    }
    else {
        document.getElementById("p3").innerHTML = "Please enter all the terms........."
        document.getElementById("p4").innerHTML = "";
    }

}
function gp_series() {
    let first = document.getElementById("num6").value;
    let second = document.getElementById("num7").value;
    let n = document.getElementById("num8").value;
    document.getElementById("num8").innerHTML = Math.round(n);
    let r, ans, series3 = [];
    if (first != "" && second != "" && n != ""&& !isNaN(first)&& !isNaN(second)&& !isNaN(n)) {
        r = (second / first).toFixed(5);
        r = removeExtraZeros(r);
        document.getElementById("p5").innerHTML = "Here,    a = " + first + " &  r (Common Ratio) = " + r;
        for (let i = 1; i <= n; i++) {
            ans = (first * Math.pow(r, i - 1)).toFixed(5);
            ans = removeExtraZeros(ans);
            series3.push(ans);
        }
        document.getElementById("p6").innerHTML = "G.P. Sequence is  : " + series3.join(", ");
    }
    else {
        document.getElementById("p5").innerHTML = "Please enter all the terms........."
        document.getElementById("p6").innerHTML = "";
    }

}
function gp_sum() {
    let first = document.getElementById("num6").value;
    let second = document.getElementById("num7").value;
    let n = document.getElementById("num8").value;
    document.getElementById("num8").innerHTML = Math.round(n);
    let r, ans;

    if (first != "" && second != ""&& !isNaN(first)&& !isNaN(second)) {
        r = (second / first).toFixed(5);
        r = removeExtraZeros(r);
        document.getElementById("p5").innerHTML = "Here,    a = " + first + " &  r (Common Ratio) = " + r;
        if (n != "" && !isNaN(n)) {
            if (r < 1) {
                ans = (first * (1 - Math.pow(r, n)) / (1 - r)).toFixed(5);
            }
            else if (r > 1) {
                ans = (first * (Math.pow(r, n) - 1) / (r - 1)).toFixed(5);
            }
            else {
                ans = (first * n).toFixed(5);
            }
            ans = removeExtraZeros(ans);
            document.getElementById("p6").innerHTML = "Sum up to " + n + "th term is : " + ans;
        } else {
            if (r > -1 && r < 1) {
                ans = (first / (1 - r)).toFixed(5);
                ans = removeExtraZeros(ans);
                document.getElementById("p6").innerHTML = "Sum for this infinite G.P. is : " + ans;
            }
            else {
                document.getElementById("p5").innerHTML = "This is not a valid infinite G.P......"
                document.getElementById("p6").innerHTML = "";
            }

        }
    }
    else {
        document.getElementById("p5").innerHTML = "Please enter both the terms........."
        document.getElementById("p6").innerHTML = "";
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
    if (a == 0) {
        return 0;
    }
    else {
        return 1;
    }
}
