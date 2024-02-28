import { header } from './header.js';
header();

const data = [
    {
        name: 'Duona',
        unitPrice: 1,
        count: 1,
    },
    {
        name: 'Pienas',
        unitPrice: 0.89,
        count: 2,
    },
    {
        name: 'Cepelinai',
        unitPrice: 2.89,
        count: 5,
    },
];

const tbodyDOM = document.querySelector('tbody');
const finalPriceDOM = document.querySelector('.final-price');

let HTML = '';
let index = 0;

for (const item of data) {
    HTML += `
        <tr>
            <td>${++index}</td>
            <td>${item.name}</td>
            <td>${item.unitPrice.toFixed(2)} Eur</td>
            <td>
                <form class="counter">
                    <button>-</button>
                    <span>${item.count} vnt</span>
                    <button>+</button>
                </form>
            </td>
            <td>${(item.unitPrice * item.count).toFixed(2)} Eur</td>
        </tr>`;
}

tbodyDOM.innerHTML = HTML;

const finalPrice = data.reduce((t, i) => t + i.unitPrice * i.count, 0);
finalPriceDOM.innerText = finalPrice + ' Eur';