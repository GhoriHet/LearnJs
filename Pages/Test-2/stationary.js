let pen;
let book;
let pencil;
let eraser;
let statTotal;

let sel1
let sel2
let sel3
let sel4

let pen1;
let book1;
let pencil1;
let eraser1;
let sellTotal;

let sto1;
let sto2;
let sto3;
let sto4;

const handleStationary = () => {
    // console.log("stock");
    pen = parseInt(document.getElementById("pen").value);
    book = parseInt(document.getElementById("book").value);
    pencil = parseInt(document.getElementById("pencil").value);
    eraser = parseInt(document.getElementById("eraser").value);
    // console.log(pen, book, pencil, eraser);

    sel1 = pen_price = pen * 10;
    sel2 = book_price = book * 50;
    sel3 = pencil_price = pencil * 4;
    sel4 = eraser_price = eraser * 5;
    // console.log(pen_price, book_price, pencil_price, eraser_price);

    statTotal = pen_price + book_price + pencil_price + eraser_price;
    // console.log(statTotal);

    document.getElementById("penRate").innerHTML = pen_price;
    document.getElementById("bookRate").innerHTML = book_price;
    document.getElementById("pencilRate").innerHTML = pencil_price;
    document.getElementById("eraserRate").innerHTML = eraser_price;
    document.getElementById("StatRate").innerHTML = statTotal;

    return false;
}

const handleSelling = () => {
    // console.log("selling");
    pen1 = parseInt(document.getElementById("pen1").value);
    book1 = parseInt(document.getElementById("book1").value);
    pencil1 = parseInt(document.getElementById("pencil1").value);
    eraser1 = parseInt(document.getElementById("eraser1").value);
    // console.log(pen1, book1, pencil1, eraser1);

    sto1 = pen_price = pen1 * 10;
    sto2 = book_price = book1 * 50;
    sto3 = pencil_price = pencil1 * 4;
    sto4 = eraser_price = eraser1 * 5;

    let out = sel1 - sto1;
    let out1 = sel2 - sto2;
    let out2 = sel3 - sto3;
    let out3 = sel4 - sto4;
    // console.log(out, out1, out2, out3);

    sellTotal = out + out1 + out2 + out3;
    // console.log(sellTotal);

    let final_bill = statTotal - sellTotal;
    // console.log(final_bill);

    document.getElementById("penOut").innerHTML = out;
    document.getElementById("bookOut").innerHTML = out1;
    document.getElementById("pencilOut").innerHTML = out2;
    document.getElementById("earserOut").innerHTML = out3;
    document.getElementById("sellTOTAL").innerHTML = sellTotal;
    document.getElementById("Final_bill").innerHTML = final_bill;

    return false;
}