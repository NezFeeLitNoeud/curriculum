document.getElementById('phone').onmouseover = function() {phoneMouseOver()}
document.getElementById('phone').onmouseout = function() {phoneMouseOut()};

function phoneMouseOver() {
    document.getElementById("info").innerHTML = "06.52.62.42.92";
}

function phoneMouseOut() {
    document.getElementById("info").innerHTML = "";
}


document.getElementById('email').onmouseover = function() {emailMouseOver()}
document.getElementById('email').onmouseout = function() {emailMouseOut()};

function emailMouseOver() {
    document.getElementById("info").innerHTML = "Nepheline.Nehlig@gmail.com";
}

function emailMouseOut() {
    document.getElementById("info").innerHTML = "";
}

document.getElementById('maison').onmouseover = function() {maisonMouseOver()}
document.getElementById('maison').onmouseout = function() {maisonMouseOut()};

function maisonMouseOver() {
    document.getElementById("info").innerHTML = "Gennevilliers";
}

function maisonMouseOut() {
    document.getElementById("info").innerHTML = "";
}




setTimeout(function() {
	document.getElementById("coloor").style.color = "darkred";

}, 1000); 
setTimeout(function() {
	document.getElementById("coloor1").style.color = "darkred";

}, 1500); 
setTimeout(function() {
	document.getElementById("coloor2").style.color = "darkred";

}, 2000); 
setTimeout(function() {
	document.getElementById("coloor3").style.color = "darkred";

}, 2500); 
setTimeout(function() {
	document.getElementById("coloor4").style.color = "darkred";

}, 3000); 
setTimeout(function() {
	document.getElementById("coloor5").style.color = "darkred";

}, 3500); 



document.getElementById('travel').onmouseover = function() {travelMouseOver()}
document.getElementById('travel').onmouseout = function() {travelMouseOut()};

function travelMouseOver() {
    document.getElementById("show").innerHTML = "Fan de voyage, je part à la découverte du monde dès que j'en ai l'occasion. <br> Avec un monde aussi grand et diversifié, pourquoi se cantonner à 1 seul pays? ;)";
}

function travelMouseOut() {
    document.getElementById("show").innerHTML = "";
}

document.getElementById('game').onmouseover = function() {gameMouseOver()}
document.getElementById('game').onmouseout = function() {gameMouseOut()};

function gameMouseOver() {
    document.getElementById("show").innerHTML = "Les FPS n'ont aucun secret pour moi ! <br> Joueuse depuis ma plus tendre enfance j'ai entretenue cette passion à travers les différentes générations de console <br> J'aimerai d'ailleurs m'orientée professionellement dans l'industrie du jeux video";
}

function gameMouseOut() {
    document.getElementById("show").innerHTML = "";
}

document.getElementById('read').onmouseover = function() {readMouseOver()}
document.getElementById('read').onmouseout = function() {readMouseOut()};

function readMouseOver() {
    document.getElementById("show").innerHTML = "1h30 de transport pour aller travailler ? Aucun problème, un bon petit livre fait passer le temps <br> Des grands classiques comme 'Les Hauts de Hurlevent' à la Science-fiction de B. Weber en passant par Amelie Nothomb; <br> Il faut savoir apprécier la plume et le génie des écrivains.";
}

function readMouseOut() {
    document.getElementById("show").innerHTML = "";
}

document.getElementById('puzzle').onmouseover = function() {puzzleMouseOver()}
document.getElementById('puzzle').onmouseout = function() {puzzleMouseOut()};

function puzzleMouseOver() {
    document.getElementById("show").innerHTML = "Se torturer l'esprit à trouver la solution d'un casse-tête c'est tout ce que j'aime.<br> C'est aussi une des raisons qui ma poussée à me former dans le Developpement Web";
}

function puzzleMouseOut() {
    document.getElementById("show").innerHTML = "";
}
