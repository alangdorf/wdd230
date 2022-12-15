const receipt = document.getElementById("receipt");
const submitBtn = document.querySelector("#submitbtn")
const fruitsUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

if (!localStorage.getItem("drinksOrdered")) {
    localStorage.setItem("drinksOrdered", 0);
}

function generateReceipt() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let fruit1 = document.querySelector("#fruit1").value;
    let fruit2 = document.querySelector("#fruit2").value;
    let fruit3 = document.querySelector("#fruit3").value;
    let additional = document.querySelector("textarea[name='additional']").value;
    if (name == '' || email == '' || phone == '' || fruit1 == '' || fruit2 == '' || fruit3 == '') {
        receipt.innerHTML = '';
        receipt.classList.remove("display");
    } else {
        let carbs = 0;
        let protein = 0;
        let fat = 0;
        let sugar = 0;
        let calories = 0;
        fetch(fruitsUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (fruitList) {
            fruitList.forEach(fruit => {
                if (fruit.name == fruit1) {
                    carbs += fruit.nutritions.carbohydrates;
                    protein += fruit.nutritions.protein;
                    fat += fruit.nutritions.fat;
                    sugar += fruit.nutritions.sugar;
                    calories += fruit.nutritions.calories;
                }
                if (fruit.name == fruit2) {
                    carbs += fruit.nutritions.carbohydrates;
                    protein += fruit.nutritions.protein;
                    fat += fruit.nutritions.fat;
                    sugar += fruit.nutritions.sugar;
                    calories += fruit.nutritions.calories;
                }
                if (fruit.name == fruit3) {
                    carbs += fruit.nutritions.carbohydrates;
                    protein += fruit.nutritions.protein;
                    fat += fruit.nutritions.fat;
                    sugar += fruit.nutritions.sugar;
                    calories += fruit.nutritions.calories;
                }
            });
            let todaysDate = new Date;
            let receiptDate = todaysDate.toLocaleDateString("en-US");
            receipt.innerHTML = `<table>
            <tr><td>Customer Name:</td><td>${name}</td></tr>
            <tr><td>E-mail:</td><td>${email}</td></tr>
            <tr><td>Phone Number:</td><td>${phone}</td></tr>
            <tr><td>Order Date:</td><td>${receiptDate}</td></tr>
            <tr><td>Fruit 1:</td><td>${fruit1}</td></tr>
            <tr><td>Fruit 2:</td><td>${fruit2}</td></tr>
            <tr><td>Fruit 3:</td><td>${fruit3}</td></tr>
            <tr><td>Carbohydrates:</td><td>${carbs.toFixed(2)}g</td></tr>
            <tr><td>Protein:</td><td>${protein.toFixed(2)}g</td></tr>
            <tr><td>Fat:</td><td>${fat.toFixed(2)}g</td></tr>
            <tr><td>Sugar:</td><td>${sugar.toFixed(2)}g</td></tr>
            <tr><td>Calories:</td><td>${calories}</td></tr>
            <tr><td>Special Instructions:</td><td>${additional}</td></tr>
            </table>`
            receipt.classList.add("display");
            let numOrdered = localStorage.getItem("drinksOrdered");
            numOrdered++;
            localStorage.setItem("drinksOrdered", numOrdered);
        });
    }
}

submitBtn.onclick = generateReceipt;