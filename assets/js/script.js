document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                startGame();
            } else {
                let attackType = this.getAttribute("data-type");
                options(attackType);
            }
        }); 
    }
});

function startGame(){
    document.getElementById('game-start').style.display = "none",
    document.getElementById('game-screen-1').style.display = "flex"
    document.getElementById('game-options').style.display = "flex"

}
function options(attackType) {
    if (attackType === "attack-button") {
        attack();
    } else if (attackType === "spell-button"){
        spell();
    } else if (attackType === "heal-button"){
        heal();
    }
}
var enemyHpFirst = document.getElementById('enemyhp-1')
var enemyHpSecond = document.getElementById('enemyhp-2')
var enemyHpThird = document.getElementById('enemyhp-3')
var heroHpFirst = document.getElementById('herohp-1')
var defeated = '0';

function attack(){
    if (defeated == '0'){
    enemyHpFirst.value = Number(enemyHpFirst.value) - 10;
    cooldownOn();
    if (enemyHpFirst.value == '0'){
        enemyDead( )
    } else {
        setTimeout(enemyFirstAttack, 10000);
    }
} else if (defeated == '1'){
    enemyHpSecond.value = Number(enemyHpSecond.value) - 10;
    cooldownOn();
    if (enemyHpSecond.value == '0'){
        enemyDead(  )
        } else {
            setTimeout(enemyFirstAttack, 10000);
        }
    } else if (defeated == '2'){
        enemyHpThird.value = Number(enemyHpThird.value) - 10;
        cooldownOn();
        if (enemyHpThird.value == '0'){
            enemyDead(  )
            }
        } else {
            setTimeout(enemyFirstAttack, 10000);
        }
}
function spell(){
    if (defeated == '0'){
        enemyHpFirst.value = Number(enemyHpFirst.value) - 10;
        if (enemyHpFirst.value == '0'){
            enemyDead(  )
        }
    } else if (defeated == '1'){
        enemyHpSecond.value = Number(enemyHpSecond.value) - 10;
        if (enemyHpSecond.value == '0'){
            enemyDead(  )
            }
        } else if (defeated == '2'){
            enemyHpThird.value = Number(enemyHpThird.value) - 10;
            if (enemyHpThird.value == '0'){
                enemyDead(  )
                }
            }
    }
function heal(){
    let herohp = document.getElementById("herohp")
    herohp.value += 30;
}
function enemyDead(){
    if (defeated == '0'){
    document.getElementById('game-screen-1').style.display = "none"
    document.getElementById('game-screen-2').style.display = "flex"
    defeated = 1;
    console.log(defeated)   
    } else if (defeated == '1'){
    document.getElementById('game-screen-2').style.display = "none"
    document.getElementById('game-screen-3').style.display = "flex"
    defeated = 2;
    console.log(defeated)
    }
};
function enemyFirstAttack(){
    heroHpFirst.value = Number(heroHpFirst.value) - 10;
    cooldownOff();
    if (heroHpFirst.value == '0'){
        heroDead(  )
    }
}
function attackAnimation(){

}
function spellAnimation(){

}
function cooldownOn(){
    document.getElementById("attack-button").disabled = true;
    document.getElementById("spell-button").disabled = true;
    document.getElementById("heal-button").disabled = true;
}
function cooldownOff(){
    document.getElementById("attack-button").disabled = false;
    document.getElementById("spell-button").disabled = false;
    document.getElementById("heal-button").disabled = false;
}
