let play = document.querySelector('.play')
let audio = document.querySelector('.aud')
let vol = document.querySelector('#vol')
let num=document.querySelector('.num')

vol.oninput = function () {
    audio.volume = vol.value/100
num.innerHTML= vol.value;
}
play.addEventListener('click', ()=>{
    audio.play()
})


function showSubMenu() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('subMenu').style.display = 'block';
}

function showMainMenu() {
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('subMenu').style.display = 'none';
    document.getElementById('subMenu2').style.display = 'none';
}

function showSubMenu2() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('subMenu2').style.display = 'block';
}