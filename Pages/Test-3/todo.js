let todosubdata = document.getElementById("todosub");
let arr = [];
let update = false;

const handleupdatedata = () => {
    // console.log(editIndex, 'handleupdatedata');

    let data = document.getElementById("data").value;

    arr[editIndex] = data;
    // console.log("update final");
    display();
}

const handleRemove = (i) => {
    arr.splice(i, 1);
    display();

}

const display = () => {
    let disp = '<ul>';

    arr.map((v, i) => {
        disp += '<li>' + v;
        disp += '<button onclick=" handleRemove(' + i + ')">  Remove  </button>';

    })
    disp += '</ul>';
    document.getElementById("dispdata").innerHTML = disp;
}
const handledese = () => {
    if (update) {
        handleupdatedata();
    } else {
        handleinsert();
    }

    event.preventDefault();
}

const handleinsert = () => {
    let data = document.getElementById("data").value;
    arr.push(data);
    display();

    event.preventDefault();
    
}
todosubdata.addEventListener("submit", handledese);