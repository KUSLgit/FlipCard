
var cards = document.querySelectorAll('.card');
var cont = document.getElementById("cont");

var test = document.getElementById("test");
var test2 = document.getElementById("test2");
// var winMsg = document.getElementById("winMsg");
var countList = [];

function clickFlip() {
    this.style.color = "rgb(0, 30, 44)";
    this.style.transform = "translate(0, 0) rotateY(0deg)";
    countList.push(this.getAttribute("num"));
    // test.innerHTML = countList;
    this.style.pointerEvents = "none";
    checkList();
}

function checkList() {
    for (let i = 0; i < countList.length; i++) {
        if (countList.length == 16 && countList[i] == (i + 1)) {
            // winMsg.innerHTML = "you won";
        }
        else if (countList[i] != (i + 1)) {
            // winMsg.innerHTML = "you lose";
            cards.forEach((card) => {
                card.style.pointerEvents = "none";

            });
            // vibrate();

        }
    }
}

function initiate() {
    // countList = [];
    cards.forEach((card) => {
        card.style.color = "transparent";
        card.style.transform = "translate(0, 0) rotateY(180deg)";
        card.addEventListener('click', clickFlip);
        // card.removeEventListener('mouseleave', levitateDown);
        // card.removeEventListener('mouseenter', levitateUp);
        // countList.push(card.getAttribute("num"));
        card.style.pointerEvents = "all";
    });

}



var randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
for (let i = randomNumbers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randomNumbers[i], randomNumbers[j]] = [randomNumbers[j], randomNumbers[i]];

}
var shuffle = Array.from(cards);

for (let i = 0; i < randomNumbers.length; i++) {
    shuffle[i].style.order = randomNumbers[i];
}
test.innerHTML = countList;


function shuffleNumbers() {
    var randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    for (let i = randomNumbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [randomNumbers[i], randomNumbers[j]] = [randomNumbers[j], randomNumbers[i]];

    }
    var shuffle = Array.from(cards);

    for (let i = 0; i < randomNumbers.length; i++) {
        shuffle[i].style.order = randomNumbers[i];
    }
    test.innerHTML = countList;
    // test2.innerHTML = randomNumbers;
}
// setTimeout(() => {
//     initiate();
// }, 5000);

function newGame() {
    cont.style.filter = 'blur(0px)';
    countList = [];
    shuffleNumbers();
    cards.forEach((card) => {
        card.removeEventListener('click', clickFlip);
        card.style.color = "rgb(0, 30, 44)";
        card.style.borderRadius = "5px";
        card.style.transform = "translate(0, 0) rotateY(0deg)";
        // card.removeEventListener('click', clickFlip);
        // countList.push(card.getAttribute("num"));
        
    });
    setTimeout(() => {
        initiate();
    }, 5000);
    cards.forEach((card) => {
        card.style.animation = 'none';
    });
    cont.style.gap = "16px";
}

function show() {
    cards.forEach((card) => {
        card.removeEventListener('click', clickFlip);
        card.style.color = "rgb(0, 30, 44)";
        card.style.transform = "translate(0, 0) rotateY(0deg)";
    });

}

function vibrate() {
    // setTimeout(() => {
    //     newGame();
    //     cards.forEach((card)=>{
    //         // card.style.animation = 'vibrate .3s linear 3';
    //         card.style.color = "transparent";
    //     });
    // }, 1000);
    cards.forEach((card) => {
        card.style.animation = 'vibrate .3s linear 3';
    });
    cont.style.filter = 'blur(10px)';
}






