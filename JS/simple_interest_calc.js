function answer() {
    // console.log("fffff");
    let p = parseInt(document.getElementById("amount").value);
    let r = parseInt(document.getElementById("rate").value);
    let t = parseInt(document.getElementById("time").value);
    let d = document.getElementById("select_ye").value;

    // console.log(p, r, t, d);

    let ans;

    switch (d) {
        case 'y':
            ans = (p * r * t) / 100;
            break;
        case 'm':
            ans = (p * r * t) / 1200;
            break;
        default:
            ans = 0;
    }
    // console.log(ans);
    
    document.getElementById("result_total").innerHTML = ans;

    return false;
}