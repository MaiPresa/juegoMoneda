
let scoreHeads = 0;
let scoreTails = 0;


let container = document.getElementsByClassName("coinContainer")[0];

let coinBoolean = false;


document.getElementById("buttonFlip").addEventListener("click", (event) => {
    document.getElementById("buttonFlip").disabled = true;
    container.firstElementChild.className='';
    container.lastElementChild.className='';

    
    let previousValue = coinBoolean;

    coinBoolean = Math.round(Math.random());

    if(coinBoolean) {
        if(coinBoolean === previousValue) {
            if(scoreHeads % 2 === 0) {
                container.firstElementChild.classList.add("coinTailsRepeat");
                container.lastElementChild.classList.add("coinHeadsRepeat");
            } else {
                container.firstElementChild.classList.add("coinTailsRepeatOdd");
                container.lastElementChild.classList.add("coinHeadsRepeatEven");
            }

        } else {
            container.firstElementChild.classList.add("coinHeads");
            container.lastElementChild.classList.add("coinTails");
        }
        scoreHeads++;

    } else {
        if(coinBoolean === previousValue) {
            if(scoreTails % 2 === 0) {
                container.firstElementChild.classList.add("coinHeadsRepeat");
                container.lastElementChild.classList.add("coinTailsRepeat");
            } else {
                container.firstElementChild.classList.add("coinHeadsRepeatEven");
                container.lastElementChild.classList.add("coinTailsRepeatOdd");
            }

        } else {
            container.firstElementChild.classList.add("coinTails");
            container.lastElementChild.classList.add("coinHeads");
        }
        scoreTails++;
    }
    
    console.log(coinBoolean);
});


container.firstElementChild.addEventListener("animationend", () => {
    document.getElementById("scoreHeads").innerText = scoreHeads;
    document.getElementById("scoreTails").innerText = scoreTails;
    document.getElementById("buttonFlip").disabled = false;
});