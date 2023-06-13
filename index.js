let m = 0;

function dis(val) {
    document.getElementById("result").value += val;
}

function del() {
    let x = document.getElementById("result").value.slice(0, -1);
    document.getElementById("result").value = x;
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}

function save() {
    m = document.getElementById("result").value;
}

function release() {
    document.getElementById("result").value += m;
}

var cal = document.getElementById("buttons");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}

// Function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value;
    let y = math.eval(x);
    document.getElementById("result").value = y;
    console.log(y);
}

// Function that clear the display
function clr() {
    document.getElementById("result").value = "";
}
