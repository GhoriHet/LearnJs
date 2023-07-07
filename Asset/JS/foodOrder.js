const handleSubmit = () => {
    let food = document.getElementsByName("food");
    let fries = document.getElementsByName("fries");
    let colddri = document.getElementsByName("cold");
    let coupon = document.getElementsByName("Coupon_Code");
    let quanity = document.getElementsByName("quanity");
    // console.log(food);

    let foodVal = 0;
    let friesVal = 0;
    let colddriVal = 0;
    let couponVal = 0;
    let quanityVal = 0;

    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodVal = parseInt(food[i].value);
        }
    }

    for (let i = 0; i <= quanity.length; i++) {
        if (quanity[i].checked) {
            quanityVal = parseInt(quanity[i].value);
        }
    }
    console.log(quanityVal);
    
    for (let i = 0; i < fries.length; i++) {
        if (fries[i].checked) {
            friesVal = parseInt(fries[i].value);
        }
    }

    for (let i = 0; i < colddri.length; i++) {
        if (colddri[i].checked) {
            colddriVal = parseInt(colddri[i].value);
        }
    }

    for (let i = 0; i < coupon.length; i++) {
        if (coupon[i].checked) {
            couponVal = parseInt(coupon[i].value);
        }
    }

    // console.log(foodVal, friesVal, colddriVal, couponVal);

    let total = foodVal + friesVal + colddriVal + couponVal + quanityVal;
    // console.log(total);

    document.getElementById("food_total").innerHTML = total;

    return false;
}