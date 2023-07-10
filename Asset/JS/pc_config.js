
let PcType = (p, r, m, g) => {

    let type;

    if (p === 7000 && r >= 3000 && m >= 2500 && g === 0) {
        type = "student";
    } else if (p === 12000 && r >= 6000 && m >= 5000 && g === 0) {
        type = "professional";
    } else if (p === 18000 && r >= 6000 && m >= 10000 && g === 4500) {
        type = "gaming";
    } else {
        type = "daily use";
    }

    return type;
}

let CalculateCost = (processer, ram, memory, graphics) => {

    let pro = parseInt(document.getElementById("processer").value);
    let ra = parseInt(document.getElementById("ram").value);
    let mem = parseInt(document.getElementById("memory").value);
    let gra = parseInt(document.getElementById("graphics").value);

    let res = PcType(pro, ra, mem, gra)

    let total = pro + ra + mem + gra;

    console.log(total);

    document.getElementById("totalVal").innerHTML = total;
    document.getElementById("typeof").innerHTML = res;

    return false;
}