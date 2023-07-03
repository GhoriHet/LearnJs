// -------------Mouse Event-------------
function handleClick() {
    console.log("click");
}
function handleMouseover() {
    console.log("Mouse Over!");
}
function handleMouseout() {
    console.log("Mouse Out!");
}
function handleMousedown() {
    console.log("Mouse Down!");
}
function handleMouseUp() {
    console.log("Mouse Up!");
}
function handleMousemove() {
    console.log("Mouse Move!");
}
//---------------------------------------

//-------------KeyBoard Event-------------

function handlekeyup() {
    let a = document.getElementById("key_up").value;
    console.log("a");
}
function handlekeydown() {
    let a = document.getElementById("key_down").value;
    console.log("a");
}

//----------------------------------------

//---------------Form Event---------------

function handleFocus() {
    let a = document.getElementById("focus").style.backgroundColor = 'yellow'
    console.log("a");
}

function handlesubmit() {
    let a = document.getElementById("submit").value;
    console.log("a");
}
function handleblur() {
    let a = document.getElementById("focus").style.backgroundColor = 'white'
    console.log("a");
}

function handlechange() {
    let a = document.getElementById("country").value;
    console.log(a);
}

//----------------------------------------