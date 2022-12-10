document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "start") {
                startGame();
            }
        });
    }
});

function startGame(){
    document.getElementById('game-start').style.display = "none",
    document.getElementById('')

}

function attack(){
    let enemyhpbar = document.getElementById  ("enemy-hp-bar")
    enemyhpbar.value -= 25;
}