let articles = [
    {
        name: 'Bakes | Poulet',
        price: 8.00 + ' €',
        description: 'Bakes + salade de carotte, papay et conconcombre ',
        img: "/images/img/amusebouche-.jpg"
    },
    {
        name: 'Bakes | Morrue',
        price: 12.00 + ' €',
        description: 'Bakes + salade de carotte, papay et conconcombre ',
        img: "/images/img/amusebouche-.jpg"
    },
    {
        name: 'Bakes | Hareng',
        price: 12.00 + ' €',
        description: 'Bakes + salade de carotte, papay et conconcombre ',
        img: "/images/img/amusebouche-.jpg"
    },

    {
        name: 'Souse',
        price: 8.00 + ' €',
        description: 'Porc + salade de concombre + hot sauce',
        img: "/images/img/acras-.jpg"
    },
    {
        name: 'Amuses Bouches x20',
        price: 15.00 + ' €',
        description: 'Poulet, hareng, morrue',
        img: "/images/img/amusebouche-.jpg"
    },
    {
        name: 'Acras x5',
        price: 2.00 + ' €',
        description: 'Morrue, ciboulette , piment végétarien',
        img: "/images/img/acras-.jpg"
    },
    {
        name: 'Gingembre-curcuma',
        price: 2.50 + ' €',
        description: 'Gingembre curcuma',
        img: "/images/img/jus1-.jpg"
    },
    {
        name: 'Jus de scosh',
        price: 2.50 + ' €',
        description: "A base d'essence de banane et de citron  ",
        img: "/images/img/jus3-.jpg"
    },
    {
        name: 'Seamoss',
        price: 5.00 + ' €',
        description: "Algue des mers  roduits laitiers ",
        img: "/images/img/jus3-.jpg"
    },
    {
        name: 'Jus de citronelle',
        price: 2.50 + ' €',
        description: "Jus de citronelle ",
        img: "/images/img/jus-seamoss.-jpg"
    },
    {
        name: 'Mauby',
        price: 2.50 + ' €',
        description: "Thé glacé bosé ",
        img: "/images/img/jus3-.jpg"
    },
    {
        name: 'Ice Lolly Coco & cacahuète',
        price: 2.00 + ' €',
        description: "Déssert glacé ",
        img: "/images/img/icelolly-.jpg"
    },
];

const cardHolder = document.getElementById("cardHolder");

for (let index = 0; index < articles.length; index++) {

    const newCard = document.createElement('div');

    const cardName = document.createElement('h3');
    cardName.textContent = articles[index].name;

    const cardImg = document.createElement('img');
    cardImg.src = articles[index].img;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = articles[index].description;

    const cardPrice = document.createElement('h3');
    cardPrice.textContent = articles[index].price;

    newCard.appendChild(cardName);
    newCard.appendChild(cardImg);
    newCard.appendChild(cardPrice);
    newCard.appendChild(cardDescription);
    newCard.className = 'card';
    cardHolder.appendChild(newCard);



}