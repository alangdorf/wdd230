if (!localStorage.getItem("drinksOrdered")) {
    localStorage.setItem("drinksOrdered", 0);
}
const numDrinks = document.getElementById("numdrinks");
numDrinks.innerHTML = localStorage.getItem("drinksOrdered")