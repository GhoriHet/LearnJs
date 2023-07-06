// let pro = document.getElementById("Processor");
// let ram = document.getElementById("ram");
// let memory = document.getElementById("memory");
// let gpcard = document.getElementById("gpcard")
// let total;

// const CalculateCost = (pro) => {

//     if (pro === 'i3') {
//         total =  5000;
//     }
//     console.log(total);

//     return false;
// }


let total = 0;
const CalculateCost = () => {
    // console.log("aaaaaa");
    let pro = document.getElementById("Processer").value;
    let ram = document.getElementById("ram").value;
    let memory = document.getElementById("memory").value;
    let gpcard = document.getElementById("graphics").value;

    console.log(pro, ram, memory, gpcard);

    if (pro === 'i3') {
    } else if (ram === '4GB') {
    } else if (memory === '256GB') {
    } else if (gpcard === 'yes' || gpcard === 'no') {
    }

    if (pro === 'i5') {
    } else if (ram === '8GB') {
    } else if (memory === '512GB') {
    } else if (gpcard === 'yes' || gpcard === 'no') {
    }

    if (pro === 'i7') {
    } else if (ram === '12GB') {
    } else if (memory === '1TB') {
    } else if (gpcard === 'yes' || gpcard === 'no') {
    }

    total = pro + ram + memory + gpcard;

    console.log(total);

    return false;
}

const pcType = () => {




}

pcType();
