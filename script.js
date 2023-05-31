// navbar stuff
const menu = document.querySelector("#mobileMenu");
const menuLinks = document.querySelector(".navMenu");

menu.addEventListener("click", () => {
  menu.classList.toggle("isActive");
  menuLinks.classList.toggle("active");
});

// mataGrub logo
const mataGrub = document.querySelectorAll("#mataGrub path");

for (let i = 0; i < mataGrub.length; i++) {
  console.log(`Letter ${i} is ${mataGrub[i].getTotalLength()}`);
}

//work page stuff 
const buttons = [document.querySelector('#btn'), document.querySelector('#btn0'), document.querySelector('#btn1')];

const panels = [document.querySelector('.panel'), document.querySelector('.panel0'), document.querySelector('.panel1')];

const closeBtns = [document.querySelector('#closeBtn'), document.querySelector('#closeBtn0'), 
document.querySelector('#closeBtn1')];

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        panels[i].setAttribute('open', 'true');
    });

    closeBtns[i].addEventListener('click', () => {
        panels[i].setAttribute('open', 'false');
    });
});