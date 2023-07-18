let allData = [];
let updateIndex = null;

const handleSubmit = () => {
    // console.log(fffffffffff);

    let todo = document.getElementById("todo").value;
    // console.log(todo);

    if (updateIndex !== null) {
        allData[updateIndex] = todo;
    } else {
        allData.push(todo);
    }
    updateIndex = null;

    // console.log(allData);
    displaydata();

    return false;
}

const handleRemove = (i) => {
    allData.splice(i, 1);
    // console.log(allData);

    displaydata();

    return false;
}

const handleEdit = (i) => {
    // console.log(allData[i]);

    document.getElementById("todo").value = allData[i];
    updateIndex = i;
}

const displaydata = () => {
    let print = '';

    allData.map((a, i) => {

        print += `<li>${a}`;
        print += `<button onclick=handleRemove(${i})>Remove</button>`;
        print += `<button onclick=handleEdit(${i})>Edit</button>`;
        print += `</li>`;
    });

    document.getElementById("disp").innerHTML = print;
}