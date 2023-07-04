function handleCalculate() {
    // console.log("aaaaaa");
    let salary = parseInt(document.getElementById("basic_salary").value);
    console.log(salary);

    let gen = document.getElementById("gender").value;
    console.log(gen);

    let expn = document.getElementById("experience").value;
    console.log(expn);

    let expgre = parseFloat(document.getElementById("expgred").value);
    // console.log(expgre);/

    let ans;

    let bonus;

    if (gen === 'm' && expn === 'month') {
        bonus = 'Not Eligible for Bonus:- ';
    } else if (gen === 'm' && expn === 'year') {
        if (expgre > 1 && expgre < 3) {
            bonus = salary * 0.15;
        } else if (expgre >= 3) {
            bonus = salary * 0.25;
        }
       
    } else if (gen === 'f' && expn === 'month') {
        bonus = 'Not Eligible for Bonus:- ';
    } else if (gen === 'f' && expn === 'year') {
        if (expgre > 1 && expgre < 3) {
            bonus = salary * 0.17
        } else if (expgre >= 3) {
            bonus = salary * 0.27
        }
    }
    
    ans = salary + bonus ;
    console.log(ans);

    document.getElementById("basicsalary").innerHTML = salary;
    document.getElementById("bonus").innerHTML = bonus;
    document.getElementById("fn_sal").innerHTML = ans;

    return false;
}