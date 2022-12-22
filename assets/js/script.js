/** diffrent screens */
const gameScreenOneRef = document.getElementById('game-screen-1')
const gameScreenTwoRef = document.getElementById('game-screen-2')
const gameScreenThreeRef = document.getElementById('game-screen-3')
const introOneRef = document.getElementById('intro')
const introTwoRef = document.getElementById('intro-2')
const introThreeRef = document.getElementById('intro-3')
const endScreenOneRef = document.getElementById('end-screen-1')
const endScreenTwoRef = document.getElementById('end-screen-2')
const gameOptionsRef = document.getElementById('game-options')
/** Enemy Hp */
const enemyHpFirst = document.getElementById('enemyhp-1')
const enemyHpFirstRef = document.getElementById("enemy-hp-number-1")
const enemyHpSecond = document.getElementById('enemyhp-2')
const enemyHpTwoRef = document.getElementById("enemy-hp-number-2")
const enemyHpThird = document.getElementById('enemyhp-3')
const enemyHpThirdRef = document.getElementById("enemy-hp-number-3")
/** Attack Effects */
const enemyAttackEffect = document.querySelectorAll(".enemy-animation")
const heroAttackEffect = document.querySelectorAll('.hero-animation')
/** Hero Hp */
const heroHpFirst = document.getElementById('herohp-1')
const heroHpFirstRef = document.getElementById("hero-hp-number-1")
const heroHpSecond = document.getElementById('herohp-2')
const heroHpTwoRef = document.getElementById("hero-hp-number-2")
const heroHpThird = document.getElementById('herohp-3')
const heroHpThirdRef = document.getElementById("hero-hp-number-3")
/** Game Options */
const cooldownAttackRef = document.getElementById("attack-button")
const cooldownSpellRef = document.getElementById("spell-button")
const cooldownHealRef = document.getElementById("heal-button")
let defeated = '0';


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
    introOneRef.style.display = "flex"
    setTimeout(startGame, 12000)
}

function startGame(){
    introOneRef.style.display = "none"
    gameScreenOneRef.style.display = "flex"
    gameOptionsRef.style.display = "flex"

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


/** Attack funtions */

function attack(){
    if (defeated == '0'){
    enemyHpFirst.value = Number(enemyHpFirst.value) - Math.floor(Math.random() * (35 - 25 + 1) + 25)
    enemyHpFirstRef.innerHTML = enemyHpFirst.value;
    attackAnimation();
    cooldownOn();
    if (enemyHpFirst.value == '0'){
        enemyDead( )
    } else {
        setTimeout(enemyFirstAttack, 5000);
    }
    } else if (defeated == '1'){
    enemyHpSecond.value = Number(enemyHpSecond.value) - Math.floor(Math.random() * (35 - 25 + 1) + 25);
    enemyHpTwoRef.innerHTML = enemyHpSecond.value;
    attackAnimation();
    cooldownOn();
    if (enemyHpSecond.value == '0'){
        enemyDead(  )
        } else {
            setTimeout(enemySecondAttackOne, 5000);
        }
    } else if (defeated == '2'){
        enemyHpThird.value = Number(enemyHpThird.value) - Math.floor(Math.random() * (35 - 25 + 1) + 25);
        enemyHpThirdRef.innerHTML = enemyHpThird.value;
        attackAnimation();
        cooldownOn();
        if (enemyHpThird.value == '0'){
            enemyDead(  )
            }
         else {
            setTimeout(enemyThirdAttack, 5000);
        }
    }
}
function spell(){
    if (defeated == '0'){
        enemyHpFirst.value = Number(enemyHpFirst.value) - 30;
        enemyHpFirstRef.innerHTML = enemyHpFirst.value;
        cooldownOn();
        spellAnimation();
        if (enemyHpFirst.value == '0'){
            enemyDead(  )
        } else {
            setTimeout(enemyFirstAttack, 5000);
        }
    } else if (defeated == '1'){
        enemyHpSecond.value = Number(enemyHpSecond.value) - 30;
        enemyHpTwoRef.innerHTML = enemyHpSecond.value;
        cooldownOn();
        spellAnimation();
        if (enemyHpSecond.value == '0'){
            enemyDead(  )
            } else{
                setTimeout(enemySecondAttackTwo, 5000);
            }
        } else if (defeated == '2'){
            enemyHpThird.value = Number(enemyHpThird.value) - 30;
            enemyHpThirdRef.innerHTML = enemyHpThird.value;
            spellAnimation();
            cooldownOn();
            if (enemyHpThird.value == '0'){
                enemyDead(  )
                } else{
                setTimeout(enemyThirdAttack, 5000);
            }
        }
}
function heal(){
    if (defeated == '0'){
        heroHpFirst.value = Number(heroHpFirst.value) + 30;
        heroHpFirstRef.innerHTML = heroHpFirst.value;
        healAnimation();
        cooldownOn();
        setTimeout(enemyFirstAttack, 5000);
    } else if (defeated == '1'){
    heroHpSecond.value = Number(heroHpSecond.value) + 30;
    heroHpTwoRef.innerHTML = heroHpSecond.value;
        healAnimation();
        cooldownOn();
        setTimeout(enemySecondAttackThree, 5000);
    } else if (defeated == '2'){
        heroHpThird.value = Number(heroHpThird.value) + 30;
        heroHpThirdRef.innerHTML = heroHpThird.value;
        healAnimation();
        cooldownOn();
        setTimeout(enemyThirdAttack, 5000);
    }
}
/** screen changers */
function enemyDead(){
    if (defeated == '0'){
    gameScreenOneRef.style.display = "none"
    gameOptionsRef.style.display = "none"
    introTwoRef.style.display = "flex"
    defeated = 1;
    console.log(defeated)  
    cooldownOff()
    setTimeout(gameScreenTwo, 5000)
    } else if (defeated == '1'){
    gameScreenTwoRef.style.display = "none"
    gameOptionsRef.style.display = "none"
    introThreeRef.style.display = "flex"
    defeated = 2;
    console.log(defeated)
    cooldownOff()
    setTimeout(gameScreenThree, 7000)
    } else if (defeated == '2'){
        gameScreenThreeRef.style.display = "none"
        gameOptionsRef.style.display = "none"
        endScreenOneRef.style.display = "flex"
        defeated = 0;
        console.log(defeated)
        cooldownOff()
        setTimeout(endScreen, 10000)
    }
}
function heroDead(){
    gameOptionsRef.style.display = "none"
    gameScreenTwoRef.style.display = "none"
    gameScreenThreeRef.style.display = "none"
    gameOptionsRef.style.display = "none"
    document.getElementById('lose-screen').style.display = "flex"
}

function gameScreenTwo(){
    introTwoRef.style.display = "none"
    gameScreenTwoRef.style.display = "flex"
    gameOptionsRef.style.display = "flex"
}
function gameScreenThree(){
    introThreeRef.style.display = "none"
    gameScreenThreeRef.style.display = "flex"
    gameOptionsRef.style.display = "flex"
}
function endScreen(){
    endScreenOneRef.style.display = "none"
    endScreenTwoRef.style.display = "flex"
}
/** Enemy attacks */
function enemyFirstAttack(){
    heroHpFirst.value = Number(heroHpFirst.value) - 20;
    heroHpFirstRef.innerHTML = heroHpFirst.value;
    heroAttackEffect[0].src = "assets/images/Attack.png"
    setTimeout(animationsOff, 500)
    setTimeout(cooldownOff, 1000);;
    if (heroHpFirst.value == '0'){
        heroDead(  )
    }
}
function enemySecondAttackOne(){
    heroHpSecond.value = Number(heroHpSecond.value) - Math.floor(Math.random() * (35 - 25 + 1) + 25)
    heroHpTwoRef.innerHTML = heroHpSecond.value;
    heroAttackEffect[1].src = "assets/images/Attack.png"
    setTimeout(animationsOff, 500)
    setTimeout(cooldownOff, 1000);;
    if (heroHpSecond.value == '0'){
        heroDead(  )
    }
}
function enemySecondAttackTwo(){
    heroHpSecond.value = Number(heroHpSecond.value) - 30;
    heroHpTwoRef.innerHTML = heroHpSecond.value;
    heroAttackEffect[1].src = "assets/images/Spell.png"
    setTimeout(animationsOff, 500)
    setTimeout(cooldownOff, 1000);;
    if (heroHpSecond.value == '0'){
        heroDead(  )
    }
}
function enemySecondAttackThree(){
    enemyHpSecond.value = Number(enemyHpSecond.value) + 30;
    enemyHpTwoRef.innerHTML = enemyHpSecond.value;
    enemyAttackEffect[1].src = "assets/images/Heal.png"
    setTimeout(animationsOff, 500)
    setTimeout(cooldownOff, 1000);
    if (heroHpSecond.value == '0'){
        heroDead(  )
    }
}
function enemyThirdAttack(){
    heroHpThird.value = Number(heroHpThird.value) - 25;
    heroHpThirdRef.innerHTML = heroHpThird.value;
    heroAttackEffect[2].src = "assets/images/Spell.png"
    setTimeout(animationsOff, 500)
    setTimeout(cooldownOff, 1000);;
    if (heroHpThird.value == '0'){
        heroDead(  )
    }
}
/** Making the attacks feel better with effects and cooldown */
function attackAnimation(){
    if (defeated == '0'){
        enemyAttackEffect[0].src = "assets/images/Attack.png"
        setTimeout(animationsOff, 500)
    } else if (defeated == '1'){
        enemyAttackEffect[1].src = "assets/images/Attack.png"
        setTimeout(animationsOff, 500)
    } else  if (defeated == '2'){
        enemyAttackEffect[2].src = "assets/images/Attack.png"
        setTimeout(animationsOff, 500)
    }
}
function spellAnimation(){
    if (defeated == '0'){
        enemyAttackEffect[0].src = "assets/images/Spell.png"
        setTimeout(animationsOff, 500)
    } else if (defeated == '1'){
        enemyAttackEffect[1].src = "assets/images/Spell.png"
        setTimeout(animationsOff, 500)
    } else if (defeated == '2'){
        enemyAttackEffect[2].src = "assets/images/Spell.png"
        setTimeout(animationsOff, 500)
    }
}
function healAnimation(){
    if (defeated == '0'){
        heroAttackEffect[0].src = "assets/images/Heal.png"
        setTimeout(animationsOff, 500)
    } else if (defeated == '1'){
        heroAttackEffect[1].src = "assets/images/Heal.png"
        setTimeout(animationsOff, 500)
    } else  if (defeated == '2'){
        heroAttackEffect[2].src = "assets/images/Heal.png"
        setTimeout(animationsOff, 500)
    }
}
function animationsOff(){
    if (defeated == '0'){
        enemyAttackEffect[0].src = "assets/images/Clear.png"
        heroAttackEffect[0].src = "assets/images/Clear.png"
    } else if (defeated == '1'){
        enemyAttackEffect[1].src = "assets/images/Clear.png"
        heroAttackEffect[1].src = "assets/images/Clear.png"
    } else if (defeated == '2'){
        enemyAttackEffect[2].src = "assets/images/Clear.png"
        heroAttackEffect[2].src = "assets/images/Clear.png"
    }
}

function cooldownOn(){
    cooldownAttackRef.disabled = true;
    cooldownSpellRef.disabled = true;
    cooldownHealRef.disabled = true;
}
function cooldownOff(){
    cooldownAttackRef.disabled = false;
    cooldownSpellRef.disabled = false;
    cooldownHealRef.disabled = false;
}
