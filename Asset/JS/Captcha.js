let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);

document.getElementById("demo").innerHTML = x;

document.getElementById("demo1").innerHTML = y

let ans = x + y;

function validateCaptcha() {
    if (document.getElementById("cpatchaTextBox").value == ans) {
        alert("Correct Answer")
    } else {
        console.log('validateCaptcha', ans);
        alert("Invalid Answer. Correct Answer is : " + ans);
    }
    window.location.reload();
}