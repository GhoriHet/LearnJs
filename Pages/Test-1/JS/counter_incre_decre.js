let data = 0;

const increment = () => {
    data = data + 1;

    document.getElementById("res").innerHTML = data;
}

const decrement = () => {
    data = data - 1;

    document.getElementById("res").innerHTML = data;
}