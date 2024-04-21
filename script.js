let budget = 0;
let totalExpenses = 0;
let expenseCount = 0;

function setBudget() {
    budget = parseFloat(document.getElementById("budget-amount").value);
    updateTotalBudget();
    updateRemainingBalance();
}

function updateTotalBudget() {
    document.getElementById("total-budget").textContent = "Total Budget: $" + budget;
}

function addExpense() {
    const title = document.getElementById("expense-title").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);

    if (isNaN(amount) || amount <= 0 || title.trim() === "") {
        alert("Please enter a valid title and amount.");
        return;
    }

    totalExpenses += amount;
    expenseCount++;

    updateTotalExpenses();
    updateRemainingBalance();
    updateExpenseList(title, amount);

    // Clear the form fields
    document.getElementById("expense-title").value = "";
    document.getElementById("expense-amount").value = "";
}

function updateTotalExpenses() {
    document.getElementById("total-expenses").textContent = "Product: " + expenseCount;
}

function updateRemainingBalance() {
    const remainingBalance = budget - totalExpenses;
    document.getElementById("remaining-balance").textContent = "Remaining Balance: $" + remainingBalance;
}

function updateExpenseList(title, cost) {
    const expensesList = document.getElementById("expenses");
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.textContent = expenseCount;
    td2.textContent = title;
    td3.textContent = `$${cost}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementById("expenses").appendChild(tr);
}