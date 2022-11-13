const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject["prophets"];
        prophets.forEach(displayProphets);
    })

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birth = document.createElement('p');
    let portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birth.innerHTML = `Date of Birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}`;
    
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${ordinal(prophet.order)} Latter-Day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(birth);
    card.appendChild(portrait);

    cards.appendChild(card);
}

function ordinal(number) {
    let lastDigit = number % 10;
    if (number % 100 < 10 || number % 100 > 20) {
        switch (lastDigit) {
            case 1:
                return number + 'st';
            case 2:
                return number + 'nd';
            case 3:
                return number + 'rd';
        }
    }
    return number + 'th';
}