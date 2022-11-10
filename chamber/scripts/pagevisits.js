let numVisits;
if (!localStorage.getItem("visits")) {
    numVisits = 1;
    setStorage();
} else {
    numVisits = getItem("visits");
    numVisits++;
    setStorage();
}

function setStorage() {
    localStorage.setItem("visits", numVisits);
}

document.getElementById("pageVisits").textContent = numVisits;