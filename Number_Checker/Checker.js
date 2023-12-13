function palindrome_checker() {
    let a = document.getElementById("num").value;
    let b = s_reverse(a);
    if (a != ""&& !isNaN(a)) {
        if (a == b) {
            document.getElementById("p1").innerHTML = "Given string is a Palindrome.";
        }
        else {
            document.getElementById("p1").innerHTML = "Given string is not a Palindrome.";
        }
    }
    else {
        document.getElementById("p1").innerHTML = "Please enter a valid Sequence.........";
    }
}
function s_reverse(string) {
    let a = string.split("");
    let b = a.reverse();
    let c = b.join("");
    return c;
}
function prime_checker() {
    let a = document.getElementById("num2").value;
    let count = 0;
    if (is_whole(a)===0 && a>0 && a != "" ) {
        if (a != 0 && a != 1) {
            for (let i = 2; i <= (a / 2); i++) {
                if (a % i === 0) {
                    count = 1;
                    break;
                }
            }
            if (count === 0) {
                document.getElementById("p2").innerHTML = "Given number is a Prime Number.";
            }
            else {
                document.getElementById("p2").innerHTML = "Given number is not a Prime Number.";
            }
        }
        else {
            document.getElementById("p2").innerHTML = "Given number is not a Prime Number.";
        }
    }
    else {
        document.getElementById("p2").innerHTML = "Please enter a positive integer value.........";
    }
}
function greatest_common_factor() {
    let a = document.getElementById("num3").value;
    let b = document.getElementById("num4").value;
    var divisor;
    if ( is_whole(a)===0 && is_whole(b)===0 && a>0 && b>0 && a != "" && b != ""&& !isNaN(a)&& !isNaN(b)) {
        for (let i = 1; i <= a && i <= b; i++) {
            if (a % i == 0 && b % i == 0) {
                divisor = i;
            }
        }
        document.getElementById("p3").innerHTML = "Greatest Common Factor is : " + divisor;
    }
    else {
        document.getElementById("p3").innerHTML = "Please enter a Positive Integer value.........";
    }

}
function is_whole(num) {
    var a = (num - Math.floor(num))
    if (a === 0&& a>0) {
        return 0;
    }
    else {
        return 1;
    }
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
