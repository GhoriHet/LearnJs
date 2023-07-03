function calculate() {
    var x = parseInt(document.getElementById("num1").value);
    var y = parseInt(document.getElementById("num2").value);
    var op = document.getElementById("operator").value;
    var ans;

    // if (op == "+") {
    //     ans = x + y;
    //     console.log(ans);
    // } else if (op == "-") {
    //     ans = x - y;
    // } else if (op == "*") {
    //     ans = x * y;
    // } else if (op == "/" && y != 0) {
    //     ans = x / y;
    // }

    // document.getElementById("return").innerHTML = ans;

    switch (op) {
        case '+':
            ans = x + y;
            break;
        case '-':
            ans = x - y;
            break;
        case '*':
            ans = x * y;
            break;
        case '/':
            if (y === 0) {
                ans = 'Invalid';
            } else {
                ans = x / y;
            }
            break;
        default:
            ans = 'Invalid';      
    }
    document.getElementById("return").innerHTML = ans;

}