let numVisits;
if (!localStorage.getItem("visits")) {
    numVisits = 1;
    setStorage();
} else {
    numVisits = localStorage.getItem("visits");
    numVisits++;
    setStorage();
}

function setStorage() {
    localStorage.setItem("visits", numVisits);
}

console.log(numVisits);