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
var heroHpFirst = document.getElementById('herohp-1')
var defeated = '0';

function attack(){
    if (defeated == '0'){
    enemyHpFirst.value = Number(enemyHpFirst.value) - 10;
    if (enemyHpFirst.value == '0'){
        enemyDead(  )
    }
} 
}
function spell(){
    if (defeated == '0'){
    enemyhp.value = Number(enemyhp.value) - 30;
    if (enemyhp.value == '0'){
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
    }
};
