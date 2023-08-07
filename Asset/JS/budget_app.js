class budget {
    constructor() {
        this.budgetInput  = document.querySelector("#budget-input");
        this.expenseName  = document.querySelector("#expense-input");
        this.expenseAmount  = document.querySelector("#amount-input");

        this.budget = document.querySelector("#budget-amount");
        this.balance = document.querySelector("#balance-amount");

        this.balancelist = document.querySelector("#expense-list");
        this.expensevalue = document.querySelector("#expense-value");
    }

    submitBudget() {
        let budget = parseInt(this.budgetInput.value);
        // console.log(budget);
        if (budget < 0) {
            document.getElementById("budget-error").innerHTML = "Please enter valid budget";
        } else {
            document.getElementById("budget-error").innerHTML = '';
        }
        // console.log("submitbudget");

        event.preventDefault();

        this.budget.innerHTML = budget;
        this.DisplayData();
    }

    submitExpense() {
        let expense = this.expenseName.value;
        console.log(expense);

        let expenseamount = parseInt(this.expenseAmount.value);
        console.log(expenseamount);

        if (this.expenseName.value === '') {
            document.getElementById("expenseName-error").innerHTML = "*Please enter valid Expense Name."
        } else {
            document.getElementById("expenseName-error").innerHTML = " ";   
        }

        if (this.expenseAmount.value < 0 || this.expenseAmount.value === '') {
            document.getElementById("expenseAmt-error").innerHTML = "*Please enter valid Expense Amount."
        } else {
            document.getElementById("expenseAmt-error").innerHTML = " "
        }

        event.preventDefault();

        this.balancelist.innerHTML = expense;
        this.expensevalue.innerHTML = expenseamount;
        this.DisplayData();
    }

    DisplayData() {
        // console.log(ffffffffff);

        let budgetVal = parseInt(this.budget.textContent);
        let expenseVal = 0;
        console.log(budgetVal);

        let balanceVal = 0;

        balanceVal = budgetVal - expenseVal;

        this.balance.innerHTML = balanceVal;
    }
}

let b = new budget();

document.getElementById("budget_form").addEventListener("submit", function() {
    b.submitBudget()
});

document.getElementById("expense_form").addEventListener("submit", function() {
    b.submitExpense()
});