// JavaScript source code
// model
var points = 0;
var pointsPerClick = 1;
var smileyIndex = 0;
let begging = "none"

// controller
function doClick() {
    if (smileyIndex === 3) {
        alert("YOU HAVE CHEATED GAME OVER")
        return
    }
    points += pointsPerClick;
    smileyIndex = 1 - smileyIndex;
    updateView();
    console.log(doClick);
}

function buyUpgrade() {
    if (smileyIndex === 3) {
        alert("YOU HAVE CHEATED GAME OVER")

        return  
    
}
    else if (points < 10) return;
    else
    points -= 10;
    pointsPerClick++;
    updateView();
}
function CHEATER() {
    if (smileyIndex === 3) {
        alert("YOU HAVE CHEATED GAME OVER")
        return
    }
    points += points;
    pointsPerClick += pointsPerClick;
    smileyIndex = 3;
    begging = "block-inline";

    updateView();
}
function BEG() {
    smileyIndex = 0;
    points -= points + 50;
    pointsPerClick -= pointsPerClick -1;
    begging = "none";
    updateView();

}
//end of controller

// view
updateView();
function updateView() {
    if (smileyIndex === 0) { smiley = '😀' 
}
    else if (smileyIndex == 3) {
        smiley = '😠';
    }    

    else smiley = '😁';

    document.getElementById('theviewthingy').innerHTML = `
                <div id="image" onclick="doClick()">${smiley}</div>
                <div id="pointsInfo">${points}</div>
                <button onclick="buyUpgrade()">Kjøp oppgradering (10 poeng)</button>
                <button onclick="CHEATER()">Cheat? Doubles your points and doubles your future onclicks</button>
                <button id="1" onclick="BEG()" style="display:${begging};";>Beg for forgiveness?</button>
            `;
    console.log(updateView)
}
// end of view