document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                intro();
            } else {
                let attackType = this.getAttribute("data-type");
                options(attackType);
            }
        }); 
    }
});

function intro(){
    document.getElementById('game-start').style.display = "none"
    document.getElementById('intro').style.display = 'flex'
    setTimeout(startGame, 10000)
}

function startGame(){
    document.getElementById('intro').style.display = 'none'
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
/** Hp and "lvl" values*/

var enemyHpFirst = document.getElementById('enemyhp-1')
var enemyHpSecond = document.getElementById('enemyhp-2')
var enemyHpThird = document.getElementById('enemyhp-3')
var heroHpFirst = document.getElementById('herohp-1')
var heroHpSecond = document.getElementById('herohp-2')
var heroHpThird = document.getElementById('herohp-3')
var defeated = '0';

/** Attack funtions */

function attack(){
    if (defeated == '0'){
    enemyHpFirst.value = Number(enemyHpFirst.value) - Math.floor(Math.random() * (35 - 25 + 1) + 25)
    document.getElementById("enemy-hp-number-1").innerHTML = enemyHpFirst.value;
    cooldownOn();
    if (enemyHpFirst.value == '0'){
        enemyDead( )
    } else {
        setTimeout(enemyFirstAttack, 1000);
    }
    } else if (defeated == '1'){
    enemyHpSecond.value = Number(enemyHpSecond.value) - Math.floor(Math.random() * (35 - 25 + 1) + 25);
    document.getElementById("enemy-hp-number-2").innerHTML = enemyHpSecond.value;
    cooldownOn();
    if (enemyHpSecond.value == '0'){
        enemyDead(  )
        } else {
            setTimeout(enemySecondAttackOne, 1000);
        }
    } else if (defeated == '2'){
        enemyHpThird.value = Number(enemyHpThird.value) - Math.floor(Math.random() * (35 - 25 + 1) + 25);
        document.getElementById("enemy-hp-number-3").innerHTML = enemyHpThird.value;
        cooldownOn();
        if (enemyHpThird.value == '0'){
            enemyDead(  )
            }
         else {
            setTimeout(enemyThirdAttack, 1000);
        }
    }
}
function spell(){
    if (defeated == '0'){
        enemyHpFirst.value = Number(enemyHpFirst.value) - 30;
        document.getElementById("enemy-hp-number-1").innerHTML = enemyHpFirst.value;
        cooldownOn();
        if (enemyHpFirst.value == '0'){
            enemyDead(  )
        } else {
            setTimeout(enemyFirstAttack, 10000);
        }
    } else if (defeated == '1'){
        enemyHpSecond.value = Number(enemyHpSecond.value) - 30;
        document.getElementById("enemy-hp-number-2").innerHTML = enemyHpSecond.value;
        cooldownOn();
        if (enemyHpSecond.value == '0'){
            enemyDead(  )
            } else{
                setTimeout(enemySecondAttackTwo, 10000);
            }
        } else if (defeated == '2'){
            enemyHpThird.value = Number(enemyHpThird.value) - 30;
            document.getElementById("enemy-hp-number-3").innerHTML = enemyHpThird.value;
            cooldownOn();
            if (enemyHpThird.value == '0'){
                enemyDead(  )
                } else{
                setTimeout(enemyThirdAttack, 10000);
            }
        }
}
function heal(){
    if (defeated == '0'){
        heroHpFirst.value = Number(heroHpFirst.value) + 30;
        document.getElementById("hero-hp-number-1").innerHTML = heroHpFirst.value;
        cooldownOn();
        setTimeout(enemyFirstAttack, 10000);
    } else if (defeated == '1'){
    heroHpSecond.value = Number(heroHpSecond.value) + 30;
        document.getElementById("hero-hp-number-2").innerHTML = heroHpSecond.value;
        cooldownOn();
        setTimeout(enemySecondAttackThree, 10000);
    } else if (defeated == '2'){
        heroHpThird.value = Number(heroHpThird.value) + 30;
        document.getElementById("hero-hp-number-3").innerHTML = heroHpThird.value;
        cooldownOn();
        setTimeout(enemyThirdAttack, 10000);
    }
}

function enemyDead(){
    if (defeated == '0'){
    document.getElementById('game-screen-1').style.display = "none"
    document.getElementById('game-options').style.display = "none"
    document.getElementById('intro-2').style.display = "flex"
    defeated = 1;
    console.log(defeated)  
    cooldownOff()
    setTimeout(gameScreenTwo, 10000)
    } else if (defeated == '1'){
    document.getElementById('game-screen-2').style.display = "none"
    document.getElementById('game-options').style.display = "none"
    document.getElementById('intro-3').style.display = "flex"
    defeated = 2;
    console.log(defeated)
    cooldownOff()
    setTimeout(gameScreenThree, 10000)
    } else if (defeated == '2'){
        document.getElementById('game-screen-3').style.display = "none"
        document.getElementById('game-options').style.display = "none"
        document.getElementById('end-screen-1').style.display = "flex"
        defeated = 0;
        console.log(defeated)
        cooldownOff()
        setTimeout(endScreen, 10000)
    }
}
function gameScreenTwo(){
    document.getElementById('intro-2').style.display = "none"
    document.getElementById('game-screen-2').style.display = "flex"
    document.getElementById('game-options').style.display = "flex"
}
function gameScreenThree(){
    document.getElementById('intro-3').style.display = "none"
    document.getElementById('game-screen-3').style.display = "flex"
    document.getElementById('game-options').style.display = "flex"
}
function endScreen(){
    document.getElementById('end-screen-1').style.display = "none"
    document.getElementById('end-screen-2').style.display = "flex"
}
function enemyFirstAttack(){
    heroHpFirst.value = Number(heroHpFirst.value) - 20;
    document.getElementById("hero-hp-number-1").innerHTML = heroHpFirst.value;
    cooldownOff();
    if (heroHpFirst.value == '0'){
        heroDead(  )
    }
}
function enemySecondAttackOne(){
    heroHpSecond.value = Number(heroHpSecond.value) - Math.floor(Math.random() * (35 - 25 + 1) + 25)
    document.getElementById("hero-hp-number-2").innerHTML = heroHpSecond.value;
    cooldownOff();
    if (heroHpSecond.value == '0'){
        heroDead(  )
    }
}
function enemySecondAttackTwo(){
    heroHpSecond.value = Number(heroHpSecond.value) - 30;
    document.getElementById("hero-hp-number-2").innerHTML = heroHpSecond.value;
    cooldownOff();
    if (heroHpSecond.value == '0'){
        heroDead(  )
    }
}
function enemySecondAttackThree(){
    enemyHpSecond.value = Number(enemyHpSecond.value) + 30;
    document.getElementById("enemy-hp-number-2").innerHTML = enemyHpSecond.value;
    cooldownOff();
    if (heroHpSecond.value == '0'){
        heroDead(  )
    }
}
function enemyThirdAttack(){
    heroHpThird.value = Number(heroHpThird.value) - 25;
    document.getElementById("hero-hp-number-3").innerHTML = heroHpThird.value;
    cooldownOff();
    if (heroHpThird.value == '0'){
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
