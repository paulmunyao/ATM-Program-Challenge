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

function addTransaction(transaction) {
  transaction.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add amount you wish to transact");
  } else {
    const transaction = {
        id: generateID(),
        
    }
  }
}
