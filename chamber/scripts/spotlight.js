const jsonurl = "json/data.json";
const container = document.getElementById("spotlight");

fetch(jsonurl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let candidates = [];
        json["businesses"].forEach(entry => {
            if (entry.level == "silver" || entry.level == "gold") {
                candidates.push(entry);
            }
        });
        let selected = [];
        for (i = 0; i < 3; ++i) {
            let num = Math.floor(Math.random() * candidates.length);
            selected.push(candidates[num]);
            candidates.splice(num, 1);
        }
        selected.forEach(renderEntries);
        container.lastElementChild.classList.add("large");
    })

function renderEntries(entry) {
    let article = document.createElement("article");
    article.innerHTML = `<h2>${entry.name}</h2>
    <div class="item-box"><img src="${entry.logo}" alt="${entry.logoalt}"></div>
    <p><strong>${entry.description}</strong></p>
    <p><a href="${entry.emaillink}" target="_blank">${entry.email}</a>
    <br>${entry.phone} | <a href="${entry.website}" target="_blank">website</a></p>`;
    container.appendChild(article);
}
