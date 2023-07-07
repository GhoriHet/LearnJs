const handleSubmit = () => {
    let fries = document.getElementById("frieee").value;
    let drink = document.getElementById("colddrink").value;
    let codes = document.getElementById("coupon").value;
    let food = document.getElementsByName("food");
    let fri = document.getElementsByName("fries");
    let coldd = document.getElementsByName("drink");
    let pepsi = document.getElementsByName("pepsi");
    console.log(fries, drink, codes, food, fri, coldd, pepsi);

    let foodVal = 0;
    let friVal = 0;
    let colddVal = 0;
    let pepsiVal = 0;

    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodVal = parseInt(food[i].value);
        }
    }
    console.log(foodVal);

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
            if (pepsi[i].value === '50' ) {
                pepsiVal = colddVal * drink * parseInt(pepsi[i].value);
            } else if (pepsi[i].value === '80') {
                pepsiVal = colddVal * drink * parseInt(pepsi[i].value);
            } else if (pepsi[i].value === '70') {
                pepsiVal = colddVal * drink * parseInt(pepsi[i].value);
            }
        }
    }

    let total = foodVal + friVal + pepsiVal;

    document.getElementById("out1").innerHTML = foodVal;
    document.getElementById("out2").innerHTML = friVal;
    document.getElementById("out3").innerHTML = pepsiVal;
    document.getElementById("out4").innerHTML = total;

    return false;
}
