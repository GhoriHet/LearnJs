const incometaxsbt = () => {
    // console.log("ddddd");

    let incomedata = parseInt(document.getElementById("incometax123").value);

    // console.log("tax else", incomedata);
    let incometax1 = 0;
    let incometax2 = 0;
    let incometax3 = 0;
    let incometax4 = 0;
    let incometax5 = 0;
    let incometax6 = 0;
    let totalAmount = 0;

    if (incomedata <= 300000) {
        incometax1 = incomedata * 0;
        console.log('in tax1 if', incometax1);
    } else {
        if (incomedata > 300000) {
            incometax2 = (600000 - 300000) * 0.05;
            console.log('in tax2 if', incometax2)
        }
    }

    if (incomedata > 600000) {
        incometax3 = ((900000 - 600000) * 0.10);
        console.log('in tax3 if', incometax3)
    } else {
        if (incomedata > 600000 && incomedata <= 900000) {
            incometax3 = ((incomedata - 600000) * 0.10);
            console.log('in tax3 else', incometax3)
        }
    }

    if (incomedata > 900000) {
        incometax4 = ((1200000 - 900000) * 0.15);
        console.log('in tax4 if', incometax4)
    } else {
        if (incomedata > 900000 && incomedata <= 1200000) {
            incometax4 = ((incomedata - 900000) * 0.15);
            console.log('in tax4 else', incometax4)
        }
    }

    if (incomedata > 1200000) {
        incometax5 = ((1500000 - 1200000) * 0.20);
        console.log('in tax5 if', incometax5)
    } else {
        if (incomedata > 1200000 && incomedata <= 1500000) {
            incometax5 = ((incomedata - 1200000) * 0.20);
            console.log('in tax5 else', incometax5)
        } 
    }

    if (incomedata > 1500000) {
        incometax6 = ((incomedata - 1500000) * 0.30);
        console.log('in tax6 else', incometax6)
    }

    totalAmount = incometax1 + incometax2 + incometax3 + incometax4 + incometax5 + incometax6;
    document.getElementById("tax1").innerHTML = incometax1;
    document.getElementById("tax2").innerHTML = incometax2;
    document.getElementById("tax3").innerHTML = incometax3;
    document.getElementById("tax4").innerHTML = incometax4;
    document.getElementById("tax5").innerHTML = incometax5;
    document.getElementById("tax6").innerHTML = incometax6;
    document.getElementById("totalpaytax").innerHTML = totalAmount
    
    console.log(totalAmount);

    return false
}