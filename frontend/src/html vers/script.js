let play = document.querySelector('.play')
let audio = document.querySelector('.aud')
let vol = document.querySelector('#vol')
let num=document.querySelector('.num')

vol.oninput = function () {
    audio.volume = vol.value/100
num.innerHTML= vol.value;
}

function showSubMenu() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('subMenu').style.display = 'block';
}

function showSubMenuInv() {
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('subMenu').style.display = 'none';
}

function showSubMenu2() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('subMenu2').style.display = 'block';
}

function showSubMenu2Inv() {
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('subMenu2').style.display = 'none';
}

function showMenuInfo() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('MenuInfo').style.display = 'block';
}
function showMenuInfoInv() {
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('MenuInfo').style.display = 'none';
}


// cam asa vor functiona functiile pt meniul game info
let cardsPlayed = 69;
let dmgDealt = 69;
let totalManaUsed = 69;
let startTime = 9999999999;

function playCard() {
    cardsPlayed++;
    updateStats();
}

function dealDamage(dmg) {
    dmgDealt += dmg;
    updateStats();
}

function useMana(m) {
    totalManaUsed += m;
    updateStats();
}

// functie pt timp
// vom incepe timer ul cand pagina de joc se incarca
function updateStats() {
    var nr_cards = document.getElementById("cardsPlayed");
    if (nr_cards) {
        nr_cards.innerHTML = 'Num. of cards used:' + '&nbsp;&nbsp;&nbsp;' + cardsPlayed;
    }

    var dmg_total = document.getElementById("dmgDealt");
    if (dmg_total) {
        dmg_total.innerHTML = 'Dmg dealt:' + '&nbsp;&nbsp;&nbsp;' + dmgDealt;
    }

    var mana_total = document.getElementById("totalManaUsed");
    if (mana_total) {
        mana_total.innerHTML = 'Total mana used:' + '&nbsp;&nbsp;&nbsp;' + totalManaUsed;
    }

    var time_total = document.getElementById("timePlayed");
    if (time_total) {
        time_total.innerHTML = 'Time played:' + '&nbsp;&nbsp;&nbsp;' + startTime + 's';
    }
}

updateStats();
