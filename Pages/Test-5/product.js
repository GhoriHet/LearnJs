let allData = [];
let updateindex = null;

const handleSubmit = () => {
    // console.log("hhhhh");

    let product = document.getElementById("product").value;
    let price = document.getElementById("price").value;
    // console.log(product, price);

    if (updateindex === null) {
        let object = {
            "product": product,
            "price": price
        };
        allData.push(object);
    } else {
        allData[updateindex].product = product;
        allData[updateindex].price = price;
    }
    
    // console.log(allData);
    DisplayData()
    return false;
}

const DisplayData = () => {
    let data = '';
    allData.map((v, i) => {
        data += `<div id="disp-box">`
        data += `<p> <span> Product: ${(v.product)} </span> </p>`;
        data += `<p> <span> price: ${(v.price)} </span> </p>`;
        data += `<p> <button onclick="handleEdit(${(i)})"> Edit </button> </p>`;
        data += `</div>`
    })
    document.getElementById("display-show").innerHTML = data;
}

const handleEdit = (index) => {
    console.log("edittt", index);

    allData.map((v, i) => {
        if (i === index) {
            document.getElementById("product").value = v.product;
            document.getElementById("price").value = v.price;
        }
    });
    updateindex = index;
}