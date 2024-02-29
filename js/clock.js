import { header } from './header.js';
header();


const clockDOM = document.getElementById('clock');

setTimeout(()=>{
//palaukiu sekunde ir dirbu
clockDOM.innerText = "1s"
console.log("time is up")
}, 1000) //milisekundes

setTimeout(()=>{
    clockDOM.innerText = "2s"
    console.log("time is up 2")
    }, 2000) 

setTimeout(()=>{
    clockDOM.innerText = "3s"
    console.log("time is up 3")
    }, 3000) 


// for(let i=0;i<10; i++){
//     setTimeout(()=>{
//         clockDOM.innerText = i + "s"
//         }, i*1000)
// }

let count = 0 ;

setInterval(()=> {

    ++count;
    const seconds = count % 60;
    const minutes = ((count - seconds) /60) % 60;
    const hours = (count -seconds- minutes * 60) /60 ;

    const time = seconds + 'sec';
    if (count >= 60){
        time = minutes + "min" + time;
    }
    if (count >= 3600){
        time = hours + "val" + time;
    }


    clockDOM.innerText = `${hours} val ${minutes} min ${seconds} sec`;

}, 1000)