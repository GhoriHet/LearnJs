let arr = [];
let updateIndex = null;

// HandleSubmit Value
const handleSubmit = () => {
    // console.log("aaaaaa");
    let product = document.getElementById("textValue").value
    // console.log(product);
    if (updateIndex !== null) {
        arr[updateIndex] = product;
    } else {
        arr.push(product);
    }
    updateIndex = null;

    // arr.push(product);
    // console.log(arr);
    displayData();
    return false;
}

// Data Remove.
const handleRemove = (i) => {
    arr.splice(i, 1);
    // console.log(arr);
    displayData();

    return false;
}

// Data Edit.
const handleEdit = (i) => {
    // console.log(allData[i]);

    document.getElementById("textValue").value = arr[i];
    updateIndex = i;
}

// HTML data show.
const displayData = () => {
    let print = '';

    arr.map((v, i) => {
        print += `<li>${v}`;
        print += `<button onclick=handleRemove(${i})>Remove</button>`;
        print += `<button onclick=handleEdit(${i})>Edit</button>`;
        print += `</li>`;
    });
    document.getElementById("displayList").innerHTML = print;
}