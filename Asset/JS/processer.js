let pro_1 = document.getElementById("i3").value
let pro_2 = document.getElementById("i5").value
let pro_3 = document.getElementById("i7").value

let ram_1 = document.getElementById("4gb").value;
let ram_2 = document.getElementById("8gb").value;
let ram_3 = document.getElementById("12gb").value;

let memory_1 = document.getElementById("256").value;
let memory_2 = document.getElementById("512").value;
let memory_3 = document.getElementById("1TB").value;

let graphic_card1 = document.getElementById("yes").value;
let graphic_card2 = document.getElementById("no").value;

const calculateCost = (gener, ram) => {

    if (gener === 'i3') {
        return 7000;
    } else if (gener === 'i5') {
        return 12000;
    } else if (gener === 'i7') {
        return 18000;
    }

    if (graphic_card1 === 'y') {
        return 4500;
    } else {
        return 0;
    }
    console.log(graphic_card1);
     return false
}
const pcType = (p3, p5, p7, ram4) => {
    // console.log("asfh");
    let cost1 = calculateCost(p3);
    let cost2 = calculateCost(p5);
    let cost3 = calculateCost(p7);

    let ram1 = calculateCost(ram4);

    let msg = p3 + " memory " + cost1 + ' and ' + p5 + " memory " + cost2 + ' and ' + p7 + " memory " + cost3;

    return msg;
}

let res = pcType('i3', 'i5', 'i7', 'ram');
console.log(res);