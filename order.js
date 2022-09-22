const variety = document.querySelector(".variety");
let pizza = document.querySelector(".pizza");

let pasta = document.querySelector(".pasta");
let style = document.querySelector(".style");
let amount = document.querySelector(".amount");
let reset = document.querySelector(".reset");
let quantity = 0
let total = 0;

const tot = () => {
     
     return amount.innerText = total;
}

let combos = document.querySelector(".combos");
let combo = document.querySelector(".combo");
combos.addEventListener('click', (e) => {
     const ul = document.createElement('ul');
     const li1 = document.createElement('li');
     const li2 = document.createElement('li');
     li1.innerText = combo.innerText;
     li2.innerText = 500;
     ul.append(li1, li2);
     ul.classList.toggle("order-grid");
     ul.classList.toggle("pay-text");
     style.append(ul);
     
     total = total + 500;
     tot();
})

pizza.addEventListener('click', (e) => {
    const ul = document.createElement('ul');
     const li1 = document.createElement('li');
     // var li3 = document.createElement('li');
     const li2 = document.createElement('li');

     li1.innerText = pasta.innerText;

     li2.innerText = 120;
     ul.append(li1, li2);
     ul.classList.toggle("order-grid");
     ul.classList.toggle("pay-text");
     ul.classList.toggle("amit");
     console.log(ul.classList);
     style.append(ul);
     total = total + 120;
     tot();

})


let takos = document.querySelector(".takos");
let tako = document.querySelector(".tako");
takos.addEventListener('click', (e) => {
     const ul = document.createElement('ul');
     const li1 = document.createElement('li');
     const li2 = document.createElement('li');
     li1.innerText = tako.innerText;
     li2.innerText = 80;
     ul.append(li1, li2);
     ul.classList.toggle("order-grid");
     ul.classList.toggle("pay-text");
     style.append(ul);
     total = total + 80;
     tot();
})
let burgers = document.querySelector(".burgers");
let burger = document.querySelector(".burger");
burgers.addEventListener('click', (e) => {
     const ul = document.createElement('ul');
     const li1 = document.createElement('li');
     const li2 = document.createElement('li');
     li1.innerText = burger.innerText;
     li2.innerText = 100;
     ul.append(li1, li2);
     ul.classList.toggle("order-grid");
     ul.classList.toggle("pay-text");
     style.append(ul);
     total = total + 100;
     tot();
})
let fries = document.querySelector(".fries");
let frie = document.querySelector(".frie");
fries.addEventListener('click', (e) => {
     const ul = document.createElement('ul');
     const li1 = document.createElement('li');
     const li2 = document.createElement('li');
     li1.innerText = frie.innerText;
     li2.innerText = 60;
     ul.append(li1, li2);
     ul.classList.toggle("order-grid");
     ul.classList.toggle("pay-text");
     style.append(ul);
     total += 60;
     tot();
})

reset.addEventListener('click', () => {
     document.getElementsByClassName("pay-text").value = "";
     amount.innerText = 0;
     
})








