import { header } from './header.js';
header();

const billDom = document.getElementById('inputBillSum');
const inputValueDom = document.getElementById('input-value');


const tipsSumDom = document.getElementById('sumTips');
const totalSumDom = document.getElementById('sumTotal');
const buttonDom = document.getElementById('btn')
console.log(buttonDom);

function calculate ( ){

    const rate= parseFloat(inputValueDom.value);
   
   let tipsSum  = 0;
   tipsSum = billDom.value*100/rate;
   tipsSumDom.innerText = "Sum of tips: "+ tipsSum ;
   

   }

   buttonDom.addEventListener('click', calculate)
   

