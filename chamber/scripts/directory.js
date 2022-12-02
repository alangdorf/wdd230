const jsonurl = "json/data.json";
const container = document.getElementById("directory")

fetch(jsonurl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        json.businesses.forEach(renderEntries);
    })

function renderEntries(entry) {
    let article = document.createElement("article");
    article.innerHTML = `<h2>${entry.name}</h2>
    <div class="item-box gridonly"><img src="${entry.logo}" alt="${entry.logoalt}"></div>
    <p class="gridonly"><strong>${entry.description}</strong></p>
    <p><a href="${entry.emaillink}" target="_blank">${entry.email}</a>
    <br class="br"><span class="brspace">&emsp;&emsp;&emsp;</span>${entry.phone} | <a href="${entry.website}" target="_blank">website</a></p>`;
    container.appendChild(article);
}

const gridButton = document.getElementById("grid-button");
const listButton = document.getElementById("list-button");

gridButton.addEventListener("click", () => {
    container.classList.add("discgrid");
    container.classList.remove("disclist");
})
listButton.addEventListener("click", () => {
    container.classList.add("disclist");
    container.classList.remove("discgrid");
})