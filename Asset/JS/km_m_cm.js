function handleSubmit() {
    let selectBox = document.getElementById("duration").value;
    let inputValue = parseFloat(document.getElementById("value").value);
    let convertValue = document.getElementById("convert").value;

    let result;
    let valueE = true;

    if (!inputValue || inputValue <= 0) {
        document.getElementById("valueErr").innerHTML = "*Please enter value";
    }else {
        document.getElementById("valueErr").innerHTML = "";
        valueE = false ;
    }

    if (valueE) {
        return false
    } else {
        switch (selectBox) {
            case 'km':
                if (convertValue == 'km') {
                    result = inputValue;
                } else if (convertValue == 'cm') {
                    result = inputValue * 100000;
                } else if (convertValue == 'm') {
                    result = inputValue * 1000;
                }
                break;
    
            case 'm':
                if (convertValue == 'm') {
                    result = inputValue;
                } else if (convertValue == 'cm') {
                    result = inputValue * 100;
                } else if (convertValue == 'km') {
                    result = inputValue * 0.001;
                }
                break;
    
            case 'cm':
                if (convertValue == 'cm') {
                    result = inputValue;
                } else if (convertValue == 'm') {
                    result = inputValue * 0.01;
                } else if (convertValue == 'km') {
                    result = inputValue * 0.00001;
                }
                break;
        }
        document.getElementById("total_ans").innerHTML = result;
        return false
    }
    
}