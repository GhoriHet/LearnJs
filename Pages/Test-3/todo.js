let arr = [];
let update = false;
let editIndex;

// Data added.
const handleinsert = () => {
    let data = document.getElementById("data").value;
    arr.push(data);

    display();
    return false;
    // console.log('insert', data);
}

// Data Removed.
const handleRemove = (i) => {
    arr.splice(i, 1);
    // console.log(i);
    display();
}

// Data Edited.
const handleEdit = (i) => {
    update = true;
    document.getElementById("data").value = arr[i];
    // console.log('edit', i);
    editIndex = i;
    // console.log(editIndex, 'editIndex');
}

// Data Display Out.
const display = () => {
    let disp = '<ul>';

    arr.map((v, i) => {
        disp += '<li>' + v;
        disp += '<button onclick="handleRemove(' + i + ')">  Remove  </button>' + '<button onclick="handleEdit(' + i + ')">  Edit  </button>' + '</li>';
    })
    disp += '</ul>';
    document.getElementById("dispdata").innerHTML = disp;
}
// Data Updated.
const handleupdatedata = () => {
    // console.log(editIndex, 'handleupdatedata');
    let data = document.getElementById("data").value;
    arr[editIndex] = data;
    // console.log("update final");
    display();
}

// Onsubmit Function Called.
const handleSubmit = () => {
    if (update) {
        handleupdatedata();
    } else {
        handleinsert();
    }

    return false;
}