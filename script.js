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
const buttons = [document.querySelector('#btn'), document.querySelector('#btn0'), document.querySelector('#btn1'),
document.querySelector('#btn2'), document.querySelector('#btn3'), document.querySelector('#btn4'), 
document.querySelector('#btn5'), document.querySelector('#btn6'), document.querySelector('#btn7')];

const panels = [document.querySelector('.panel'), document.querySelector('.panel0'), document.querySelector('.panel1'),
document.querySelector('.panel2'), document.querySelector('.panel3'), document.querySelector('.panel4'),
document.querySelector('.panel5'), document.querySelector('.panel6'), document.querySelector('.panel7')];

const closeBtns = [document.querySelector('#closeBtn'), document.querySelector('#closeBtn0'), 
document.querySelector('#closeBtn1'), document.querySelector('#closeBtn2'), document.querySelector('#closeBtn3'),
document.querySelector('#closeBtn4'), document.querySelector('#closeBtn5'), document.querySelector('#closeBtn6'),
document.querySelector('#closeBtn7')];

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        panels[i].setAttribute('open', 'true');
    });

    closeBtns[i].addEventListener('click', () => {
        panels[i].setAttribute('open', 'false');
    });
});