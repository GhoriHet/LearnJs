class Budget {
    constructor() {
        this.budgetInput = document.querySelector("#budgetAmtData");
        this.expenseName = document.querySelector("#expenseNameData");
        this.expenseAmount = document.querySelector("#expenseAmtData");

        this.budget = document.querySelector("#budget-amount");
        this.balance = document.querySelector("#balance-amount");
    }
    submitBudget() {
        // console.log("submitBudget");

        let budget = parseInt(this.budgetInput.value)
        // console.log(budget);

        if (budget < 0) {
            document.getElementById("budget-error").innerHTML = "*Please enter valid budget."
        } else {
            document.getElementById("budget-error").innerHTML = " "

            this.budget.innerHTML = budget;

            this.DisplayData();
        }
 
        event.preventDefault();
    }

    submitExpense() {
        // console.log("submitExpense");

        if (this.expenseName.value === '') {
            document.getElementById("exp-error").innerHTML = "*Please enter valid Expense Name."
        } else {
            document.getElementById("exp-error").innerHTML = " ";   
        }

        // console.log(this.expName);

        if (this.expenseAmount.value < 0 || this.expenseAmount.value === '') {
            document.getElementById("expAmt-error").innerHTML = "*Please enter valid Expense Amount."
        } else {
            document.getElementById("expAmt-error").innerHTML = " "
        }

        event.preventDefault();
    }

    DisplayData() {
        // console.log("jjjjjj");

        let budgetVal = parseInt(this.budget.textContent);
        // console.log(budgetVal);

        let expenseVal = 0;

        let balanceVal = 0;

        balanceVal = budgetVal - expenseVal;

        this.balance.innerHTML = balanceVal;
    }
}

let b = new Budget()

document.getElementById("budgetCalcForm").addEventListener("submit", function() {
    b.submitBudget()
});
document.getElementById("addExpenseForm").addEventListener("submit", function() {
    b.submitExpense()
});