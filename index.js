const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

// function for cash deposit
function addTransaction(transaction) {
  // transaction.preventDefault();

  if (amount.value === "") {
    alert("Please add amount you wish to transact");
  } else {
    const transaction = {
      amount: +amount.value,
    };
    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();

    // amount.value = "";
  }
}

// function for cash withdrawal
function removeTransaction(transaction) {
  // transaction.preventDefault();

  if (amount.value === "") {
    alert("Please remove amount you wish to transact");
  } else{
    const transaction = {
      amount: -amount.value,
    };
    transactions.push(transaction);
    removeTransaction(transaction);
    updateValues();
    updateLocalStorage();

    // amount.value = ""
  }
}

function removeTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");

  item.classList.remove(transaction.amount< 0 ? "minus" : "plus");

  
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");

  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
  <span>${sign}${Math.abs(
    transaction.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">x</button>
`;

  list.appendChild(item);
}

// Update the balance, deposit and withdrawal
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const deposit = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc = item), 0)
    .toFixed(2);

  const withdrawal = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${deposit}`;
  money_minus.innerText = `$${withdrawal}`;
}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();

  init();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Init app
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener("submit", addTransaction);

// Form validation
function validateForm() {
  var email = document.myForm.email.value;
  var password = document.myForm.email.value;

  if (!email == null || email == "") {
    alert("email can't be blank");
  } else if (password.length < 6) {
    alert("password must be at least 6 characters long");
  }
}
