class budget {
    constructor() {
        this.budgetinput = document.querySelector("#budget-input");
        this.expenseinput = document.querySelector("#expense-input");
        this.amountinput = document.querySelector("#amount-input");

        this.budget = document.querySelector("#budget-amount");
        this.blance = document.querySelector("#balance-amount");

        this.blancelist = document.querySelector("#expense-list");
        this.expensevalue = document.querySelector("#expense-value");

        this.expedata = [];
    }

    submitbudget() {
        let budget = parseInt(this.budgetinput.value);
        console.log(budget);
        if (budget < 0) {
            document.getElementById("budget-error").innerHTML = "Please enter valid budget";
        } else {
            document.getElementById("budget-error").innerHTML = '';
        }
        // console.log("submitbudget");

        event.preventDefault();

        this.budget.innerHTML = budget;
        this.handeldisplay();
    }

    submitexpense() {
        // console.log("submitexpense");
        let expense = this.expenseinput.value;
        console.log(expense);

        let expenseamount = parseInt(this.amountinput.value);
        console.log(expenseamount);

        if (this.expenseinput.value === "") {
            document.getElementById("expenseName-error").innerHTML = "Please enter valid expense Name.";
        } else {
            document.getElementById("expenseName-error").innerHTML = ''

            }
      

        if (this.amountinput.value < 0 || this.amountinput.value === "") {
            document.getElementById("expenseAmt-error").innerHTML = "Please enter valid budget.";
        } else {
            document.getElementById("expenseAmt-error").innerHTML = '';
        }
        event.preventDefault();

        this.blancelist.innerHTML = expense;
        this.expensevalue.innerHTML = expenseamount;
        this.handeldisplay();
    }

    handeldisplay() {

        // console.log(ffffffffff);

        let bugetval = parseInt(this.budget.textContent);
        let expenseval = 0;
        console.log(bugetval);

        let blanceval = 0;

        blanceval = bugetval - expenseval;

        this.blance.innerHTML = blanceval;
    }
}



let b = new budget();

let budgetform = document.getElementById("budget_form");
budgetform.addEventListener("submit", function () {
    b.submitbudget()
});

let expenseform = document.getElementById("expense_form");
expenseform.addEventListener("submit", function () {
    b.submitexpense()
});