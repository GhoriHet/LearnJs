
class Budget {

    constructor() {
        this.budgetInput = document.querySelector("#budgetdata");
        this.expenseInput = document.querySelector("#ExpeData");
        this.expenseInput2 = document.querySelector("#ExpeValue");

        this.budgetvalue = document.querySelector("#budgetValue");
        this.expenseValue = document.querySelector("#expenseValue");
        this.balanceValue = document.querySelector("#balanceValue");

        this.expData = [];
    }

    addBudget = () => {

        let b1 = parseInt(this.budgetInput.value);

        if (b1 < 0) {
            document.getElementById("error1").innerHTML = "Please enter valid number"
        } else {
            document.getElementById("error1").innerHTML = ""

            this.budgetvalue.innerHTML = b1;

            this.DisplayData();
        }

        event.preventDefault()
    }

    addExpense = () => {

        let e2 = parseInt(this.expenseInput2.value);
        let rendnum = parseInt(Math.random() * 1000)

        let obj = {
            id: rendnum,
            name: this.expenseInput.value,
            value: parseInt(this.expenseInput2.value)
        }

        this.expData.push(obj)

        console.log(this.expData);


        if (e2 <= 0) {
            document.getElementById("error2").innerHTML = "Please enter valid number"
        } else {
            document.getElementById("error2").innerHTML = ""
            document.getElementById("error3").innerHTML = ""

            // document.getElementById("listExp").style.display = "inline-block"

            this.DisplayExpence()
            this.DisplayData();
        }


        event.preventDefault()
    }

    DisplayExpence() {
        // <div class="d-flex justify-content-between">
        //     <p class="list-item">recharge</p>
        //     <p class="list-item">100</p>
        //     <p class="list-item"></p>
        // </div>

        let pdiv = document.getElementById("expense_list");

        let divElem = document.createElement("div");
        divElem.setAttribute("class", "d-flex justify-content-evenly");

        let p1 = document.createElement("p");
        p1.setAttribute("class", "list-item");
        let p1Txt = document.createTextNode(this.expenseInput.value);
        p1.appendChild(p1Txt);

        divElem.appendChild(p1);

        let p2 = document.createElement("p");
        p2.setAttribute("class", "list-item");
        let p2Txt = document.createTextNode(this.expenseInput2.value);
        p2.appendChild(p2Txt);

        divElem.appendChild(p2);

        let p3 = document.createElement("p");
        p3.setAttribute("class", "list-item");

        let dEle = document.createElement("a");
        let dTxt = document.createTextNode("Delete")
        dEle.appendChild(dTxt)

        dEle.addEventListener("click", () => this.hendalremove(id))

        p3.appendChild(dEle)
        divElem.appendChild(p3);
        pdiv.appendChild(divElem);
    }

    DisplayData() {

        let budgetval = parseInt(this.budgetvalue.textContent);

        let expenseVal = this.expData.reduce((acc, v) => acc + v.value, 0);

        let balanceVal = budgetval - expenseVal;

        this.balanceValue.innerHTML = balanceVal;
        this.expenseValue.innerHTML = expenseVal;

    }

     hendalremove = (rednum) => {
        console.log(rednum);
        this.expData.map((v, i) => {
            if (v.id == rednum) {
                this.expData.splice(i, 1)
            }
        })

        DisplayData()
    }

}

let b1 = new Budget()
b1.addBudget
b1.addExpense

let addForm = document.getElementById("budgetFrom")
let ExpForm = document.getElementById("expenseForm")

addForm.addEventListener("submit", function () {
    b1.addBudget();
});
ExpForm.addEventListener("submit", function () {
    b1.addExpense();
});
