const clock = document.querySelector('.clock');
const dateToo = document.querySelector('.dateText')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);


let date = new Date();
dateToo.innerHTML = date.toLocaleDateString()
console.log(date.toLocaleDateString())
