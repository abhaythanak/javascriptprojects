import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://playground-ff641-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const ShoppingListInDB = ref(database, "ShoppingList")

console.log(app)

const Input = document.getElementById("input-field")
const Button = document.getElementById("add-button")
const shoppingList = document.getElementById("shopping-list")

Button.addEventListener("click", function(){
    let inputValue = Input.value

    push(ShoppingListInDB, inputValue)

    ClearInputField()

    ShoppingList(inputValue)
    console.log(`${inputValue} added to database`)
})

function ClearInputField() {
    Input.value = "";
}

function ShoppingList(ItemList) {
    shoppingList.innerHTML += `<li>${ItemList}</li>`;
}
