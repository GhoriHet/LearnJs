const BillType = (foodVal, friVal, pepsiVal, total, coup, total1) => {

    document.getElementById("out1").innerHTML = foodVal;
    document.getElementById("out2").innerHTML = friVal;
    document.getElementById("out3").innerHTML = pepsiVal;
    document.getElementById("out4").innerHTML = total;
    document.getElementById("out5").innerHTML = coup;
    document.getElementById("out6").innerHTML = total1;
}

const handleSubmit = () => {
    let fries = document.getElementById("frieee").value;
    let drink = document.getElementById("colddrink").value;
    let codes = document.getElementById("coupon").value;
    let food = document.getElementsByName("food");
    let fri = document.getElementsByName("fries");
    let coldd = document.getElementsByName("drink");
    let pepsi = document.getElementsByName("pepsi");

    let foodVal = 0;
    let friVal = 0;
    let colddVal = 0;
    let pepsiVal = 0;

    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodVal = parseInt(food[i].value);
        }
    }

    for (let i = 0; i < fri.length; i++) {
        if (fri[i].checked) {
            if (fri[i].value === '100') {
                friVal = fries * parseInt((fri[i].value));
            } else if (fri[i].value === '0') {
                friVal = 0;
            }
        }
    }

    for (let i = 0; i < coldd.length; i++) {
        if (coldd[i].checked) {
            if (coldd[i].value === '1') {
                colddVal = parseInt(coldd[i].value);
            } else if (coldd[i].value === '0') {
                colddVal = 0;
            }
        }
    }

    for (let i = 0; i < pepsi.length; i++) {
        if (pepsi[i].checked) {
            if (pepsi[i].value === '50' || pepsi[i].value === '80' || pepsi[i].value === '70') {
                pepsiVal = colddVal * drink * parseInt(pepsi[i].value);
            }
        }
    }

    let total = foodVal + friVal + pepsiVal;
    let coup;
    if (codes === 'ABC123' || codes === 'XYX856' || codes === 'MNP987') {
        coup = total * 0.10
    } else {
        coup = 0;
    }
    let total1 = (foodVal + friVal + pepsiVal - coup)

    BillType(foodVal, friVal, pepsiVal, total, coup, total1);

    return false;
}