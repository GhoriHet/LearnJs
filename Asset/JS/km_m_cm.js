function handleSubmit() {
    // // console.log("aaaaaa");
    let a = document.getElementById("duration").value;
    let b = parseFloat(document.getElementById("value").value);
    let c = document.getElementById("convert").value;

    let result;

    switch (a) {
        case 'km':
            if (c == 'km') {
                result = b;
            } else if (c == 'cm') {
                result = b * 100000;
            } else if (c == 'm') {
                result = b * 1000;
            }
            break;

        case 'm':
            if (c == 'm') {
                result = b;
            } else if (c == 'cm') {
                result = b * 100;
            } else if (c == 'km') {
                result = b * 0.001;
            }
            break;

        case 'cm':
            if (c == 'cm') {
                result = b;
            } else if (c == 'm') {
                result = b * 0.01;
            } else if (c == 'km') {
                result = b * 0.00001;
            }
            break;
    }

    // console.log(result);
    document.getElementById("total_ans").innerHTML = result;
    return false;
}