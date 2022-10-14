const input = document.querySelector(".input input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function() {
    newListElement = document.createElement("li");
    newDeleteButton = document.createElement("button");
    newListElement.textContent = input.value;
    newDeleteButton.innerHTML = '&#10060;';
    newListElement.appendChild(newDeleteButton);
    list.appendChild(newListElement);
    newDeleteButton.addEventListener("click", function() {
        newListElement.remove();
    });
    input.value = '';
    input.focus();
});