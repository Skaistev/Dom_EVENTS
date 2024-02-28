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
finalPriceDOM.innerText = finalPrice.toFixed(2) + ' Eur';


const trListDOM = tbodyDOM.querySelectorAll('tr');

for (let i=0; i<data.length; i++) {
    const trDOM = trListDOM[i];
    const formDOM = trDOM.querySelector ('form');
    const minusDOM = formDOM.querySelector('button:nth-of-type(1)');
    const plusDOM = formDOM.querySelector('button:nth-of-type(2)');
    const countDOM = formDOM.querySelector('span')
    const priceDOM = trDOM.querySelector("td:nth-child(5)")

    minusDOM.addEventListener("click", event =>{

        event.preventDefault() 
        const minOrderAmount = 0
        if (data[i].count === minOrderAmount){
            return;
        }

        data[i].count--;
        countDOM.innerText = data[i].count + " vnt.";
        priceDOM.innerText = (data[i].count * data[i].unitPrice).toFixed(2) + " EUR";
        const finalPrice = data.reduce((t, i) => t + i.unitPrice * i.count, 0);
        finalPriceDOM.innerText = finalPrice.toFixed(2) + ' Eur';
    });
    plusDOM.addEventListener("click", event=>{

        event.preventDefault()
        const maxOrderAmount = 10;
        if (data[i].count === maxOrderAmount){
            return;
        }
        data[i].count++;
        countDOM.innerText = data[i].count + " vnt.";
        priceDOM.innerText = (data[i].count * data[i].unitPrice).toFixed(2) + " EUR";
        const finalPrice = data.reduce((t, i) => t + i.unitPrice * i.count, 0);
        finalPriceDOM.innerText = finalPrice.toFixed(2) + ' Eur';
    });
}

// function minusButtonHandler(event){
//     event.preventDefault()
// }

// function plusButtonHandler(event){
//     event.preventDefault()
    
// }