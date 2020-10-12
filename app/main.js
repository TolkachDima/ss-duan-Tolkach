// let pr =  prompt("Wat is yr name& surname?");
// alert(pr);
//--------------------------------------------------------
// const date = 2020;
// let dateB=prompt('Yr birth time');
// alert(date-dateB);
//--------------------------------------------------------
// let lengthSq=prompt('Enter length');
// alert('Perimeter:'+length*4 +' Square:'+ length*length);
//--------------------------------------------------------
// let radius = prompt('Enter radius');
// alert('Round square: ' + radius*radius*Math.PI);
//--------------------------------------------------------
// let distance = prompt('Enter dist to point')
// let time = prompt('How much time u wanna drive?');
// alert('U need drive near:' + distance/time +'km/h');
//--------------------------------------------------------
// const uahToUsd= 28;
// const eurToUsd= 1.12;
// let usdSumm = prompt('How many Usd u have?');
// alert(`U can take ${uahToUsd * usdSumm}UAH or ${Math.ceil(eurToUsd * usdSumm)}EUR`);
//--------------------------------------------------------
// let capacity = prompt("Capacity yr flash-card in GB");
// alert(`U can download in yr flash ${Math.floor(capacity * 1048 / 820)} times`);
//--------------------------------------------------------
// let amount = prompt('Amont yr mani');
// let chocoCost = 15;
// alert(`U can buy ${Math.floor(amount/chocoCost)} chocs & U have delivery ${amount%chocoCost}`);
//-------------------------------------------------------

let n = prompt("Enter") + '';
let rez = n[n.length -1];
for(let i = n.length - 2; i >= 0; i--)
    rez += n[i];
alert(rez);
