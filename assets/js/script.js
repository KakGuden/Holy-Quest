/** diffrent screens */
const gameScreensRef = document.querySelectorAll('.game-screens');
const introScreensRef = document.querySelectorAll('.intro-screens');
const gameOptionsRef = document.getElementById('game-options');
/** Enemy Hp */
const enemyHpRef = document.querySelectorAll(".enemyhp")
const enemyHpNumberRef = document.querySelectorAll(".enemyhp-number");
/** Attack Effects */
const enemyAttackEffect = document.querySelectorAll(".enemy-animation");
const heroAttackEffect = document.querySelectorAll('.hero-animation');
/** Hero Hp */
const heroHpRef = document.querySelectorAll('.herohp');
const heroHpNumberRef = document.querySelectorAll(".herohp-number");
/** Game Options */
const cooldownOptionsRef = document.querySelectorAll(".options");
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
    gameScreensRef[0].style.display = "none";
    introScreensRef[0].style.display = "flex";
    setTimeout(startGame, 12000);
}

function startGame(){
    introScreensRef[0].style.display = "none";
    gameScreensRef[1].style.display = "flex";
    gameOptionsRef.style.display = "flex";

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
    enemyHpRef[0].value = Number(enemyHpRef[0].value) - Math.floor(Math.random() * (35 - 25 + 1) + 25);
    enemyHpNumberRef[0].innerHTML = enemyHpRef[0].value;
    attackAnimation();
    cooldownOn();
    if (enemyHpRef[0].value == '0'){
        enemyDead( );
    } else {
        setTimeout(enemyFirstAttack, 5000);
    }
    } else if (defeated == '1'){
    enemyHpRef[1].value = Number(enemyHpRef[1].value) - Math.floor(Math.random() * (35 - 25 + 1) + 25);
    enemyHpNumberRef[1].innerHTML = enemyHpRef[1].value;
    attackAnimation();
    cooldownOn();
    if (enemyHpRef[1].value == '0'){
        enemyDead(  );
        } else {
            setTimeout(enemySecondAttackOne, 5000);
        }
    } else if (defeated == '2'){
        enemyHpRef[2].value = Number(enemyHpRef[2].value) - Math.floor(Math.random() * (35 - 25 + 1) + 25);
        enemyHpNumberRef[2].innerHTML = enemyHpRef[2].value;
        attackAnimation();
        cooldownOn();
        if (enemyHpRef[2].value == '0'){
            enemyDead(  );
            }
         else {
            setTimeout(enemyThirdAttack, 5000);
        }
    }
}
function spell(){
    if (defeated == '0'){
        enemyHpRef[0].value = Number(enemyHpRef[0].value) - 30;
        enemyHpNumberRef[0].innerHTML = enemyHpRef[0].value;
        cooldownOn();
        spellAnimation();
        if (enemyHpRef[0].value == '0'){
            enemyDead(  );
        } else {
            setTimeout(enemyFirstAttack, 5000);
        }
    } else if (defeated == '1'){
        enemyHpRef[1].value = Number(enemyHpRef[1].value) - 30;
        enemyHpNumberRef[1].innerHTML = enemyHpRef[1].value;
        cooldownOn();
        spellAnimation();
        if (enemyHpRef[1].value == '0'){
            enemyDead(  );
            } else{
                setTimeout(enemySecondAttackTwo, 5000);
            }
        } else if (defeated == '2'){
            enemyHpRef[2].value = Number(enemyHpRef[2].value) - 30;
            enemyHpNumberRef[2].innerHTML = enemyHpRef[2].value;
            spellAnimation();
            cooldownOn();
            if (enemyHpRef[2].value == '0'){
                enemyDead(  );
                } else{
                setTimeout(enemyThirdAttack, 5000);
            }
        }
}
function heal(){
    if (defeated == '0'){
        heroHpRef[0].value = Number(heroHpRef[0].value) + 30;
        heroHpNumberRef[0].innerHTML = heroHpRef[0].value;
        healAnimation();
        cooldownOn();
        setTimeout(enemyFirstAttack, 5000);
    } else if (defeated == '1'){
        heroHpRef[1].value = Number(heroHpRef[1].value) + 30;
        heroHpNumberRef[1].innerHTML = heroHpRef[1].value;
        healAnimation();
        cooldownOn();
        setTimeout(enemySecondAttackThree, 5000);
    } else if (defeated == '2'){
        heroHpRef[2].value = Number(heroHpRef[2].value) + 30;
        heroHpNumberRef[2].innerHTML = heroHpRef[2].value;
        healAnimation();
        cooldownOn();
        setTimeout(enemyThirdAttack, 5000);
    }
}
/** screen changers */
function enemyDead(){
    if (defeated == '0'){
    gameScreensRef[1].style.display = "none";
    gameOptionsRef.style.display = "none";
    introScreensRef[1].style.display = "flex";
    defeated = 1;
    cooldownOff();
    setTimeout(gameScreenTwo, 5000);
    } else if (defeated == '1'){
    gameScreensRef[2].style.display = "none";
    gameOptionsRef.style.display = "none";
    introScreensRef[2].style.display = "flex";
    defeated = 2;
    cooldownOff();
    setTimeout(gameScreenThree, 7000);
    } else if (defeated == '2'){
        gameScreensRef[3].style.display = "none";
        gameOptionsRef.style.display = "none";
        introScreensRef[3].style.display = "flex";
        defeated = 0;
        cooldownOff();
        setTimeout(endScreen, 10000);
    }
}
function heroDead(){
    gameScreensRef[1].style.display = "none";
    gameScreensRef[2].style.display = "none";
    gameScreensRef[3].style.display = "none";
    gameOptionsRef.style.display = "none";
    introScreensRef[5].style.display = "flex";
}
function gameScreenTwo(){
    introScreensRef[1].style.display = "none";
    gameScreensRef[2].style.display = "flex";
    gameOptionsRef.style.display = "flex";
}
function gameScreenThree(){
    introScreensRef[2].style.display = "none";
    gameScreensRef[3].style.display = "flex";
    gameOptionsRef.style.display = "flex";
}
function endScreen(){
    introScreensRef[3].style.display = "none";
    introScreensRef[4].style.display = "flex";
}
/** Enemy attacks */
function enemyFirstAttack(){
    heroHpRef[0].value = Number(heroHpRef[0].value) - 20;
    heroHpNumberRef[0].innerHTML = heroHpRef[0].value;
    heroAttackEffect[0].src = "assets/images/Attack.png";
    setTimeout(animationsOff, 500);
    setTimeout(cooldownOff, 1000);
    if (heroHpRef[0].value == '0'){
        heroDead(  );
    }
}
function enemySecondAttackOne(){
    heroHpRef[1].value = Number(heroHpRef[1].value) - Math.floor(Math.random() * (35 - 25 + 1) + 25);
    heroHpNumberRef[1].innerHTML = heroHpRef[1].value;
    heroAttackEffect[1].src = "assets/images/Attack.png";
    setTimeout(animationsOff, 500);
    setTimeout(cooldownOff, 1000);
    if (heroHpRef[1].value == '0'){
        heroDead(  );
    }
}
function enemySecondAttackTwo(){
    heroHpRef[1].value = Number(heroHpRef[1].value) - 30;
    heroHpNumberRef[1].innerHTML = heroHpRef[1].value;
    heroAttackEffect[1].src = "assets/images/Spell.png";
    setTimeout(animationsOff, 500);
    setTimeout(cooldownOff, 1000);
    if (heroHpRef[1].value == '0'){
        heroDead(  );
    }
}
function enemySecondAttackThree(){
    enemyHpRef[1].value = Number(enemyHpRef[1].value) + 30;
    enemyHpNumberRef[1].innerHTML = enemyHpRef[1].value;
    enemyAttackEffect[1].src = "assets/images/Heal.png";
    setTimeout(animationsOff, 500);
    setTimeout(cooldownOff, 1000);
    if (heroHpRef[1].value == '0'){
        heroDead(  );
    }
}
function enemyThirdAttack(){
    heroHpRef[2].value = Number(heroHpRef[2].value) - 25;
    heroHpNumberRef[2].innerHTML = heroHpRef[2].value;
    heroAttackEffect[2].src = "assets/images/Spell.png";
    setTimeout(animationsOff, 500);
    setTimeout(cooldownOff, 1000);
    if (heroHpRef[2].value == '0'){
        heroDead(  );
    }
}
/** Making the attacks feel better with effects and cooldown */
function attackAnimation(){
    if (defeated == '0'){
        enemyAttackEffect[0].src = "assets/images/Attack.png";
        setTimeout(animationsOff, 500);
    } else if (defeated == '1'){
        enemyAttackEffect[1].src = "assets/images/Attack.png";
        setTimeout(animationsOff, 500);
    } else  if (defeated == '2'){
        enemyAttackEffect[2].src = "assets/images/Attack.png";
        setTimeout(animationsOff, 500);
    }
}
function spellAnimation(){
    if (defeated == '0'){
        enemyAttackEffect[0].src = "assets/images/Spell.png";
        setTimeout(animationsOff, 500);
    } else if (defeated == '1'){
        enemyAttackEffect[1].src = "assets/images/Spell.png";
        setTimeout(animationsOff, 500);
    } else if (defeated == '2'){
        enemyAttackEffect[2].src = "assets/images/Spell.png";
        setTimeout(animationsOff, 500);
    }
}
function healAnimation(){
    if (defeated == '0'){
        heroAttackEffect[0].src = "assets/images/Heal.png";
        setTimeout(animationsOff, 500);
    } else if (defeated == '1'){
        heroAttackEffect[1].src = "assets/images/Heal.png";
        setTimeout(animationsOff, 500);
    } else  if (defeated == '2'){
        heroAttackEffect[2].src = "assets/images/Heal.png";
        setTimeout(animationsOff, 500);
    }
}
function animationsOff(){
    if (defeated == '0'){
        enemyAttackEffect[0].src = "assets/images/Clear.png";
        heroAttackEffect[0].src = "assets/images/Clear.png";
    } else if (defeated == '1'){
        enemyAttackEffect[1].src = "assets/images/Clear.png";
        heroAttackEffect[1].src = "assets/images/Clear.png";
    } else if (defeated == '2'){
        enemyAttackEffect[2].src = "assets/images/Clear.png";
        heroAttackEffect[2].src = "assets/images/Clear.png";
    }
}

function cooldownOn(){
    cooldownOptionsRef[0].disabled = true;
    cooldownOptionsRef[1].disabled = true;
    cooldownOptionsRef[2].disabled = true;
}
function cooldownOff(){
    cooldownOptionsRef[0].disabled = false;
    cooldownOptionsRef[1].disabled = false;
    cooldownOptionsRef[2].disabled = false;
}
