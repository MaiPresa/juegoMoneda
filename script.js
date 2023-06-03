
let scoreHeads = 0;
let scoreTails = 0;

let container = document.getElementsByClassName("coinContainer")[0];

let coinBoolean = true;

document.getElementById("buttonFlip").addEventListener("click", (event) => {
    container.firstElementChild.className="";
    container.lastElementChild.className="";
    
    let previousValue = coinBoolean;

    coinBoolean = Math.round(Math.random());

    if(coinBoolean) {
        //Quiero que salga cara sobre cara
        if(coinBoolean === previousValue) {
            container.firstElementChild.classList.add("coinTailsRepeat");
            container.lastElementChild.classList.add("coinHeadsRepeat");
        } else {
            container.firstElementChild.classList.add("coinHeads");
            container.lastElementChild.classList.add("coinTails");
        }
    } else {
        if(coinBoolean === previousValue) {
            container.firstElementChild.classList.add("coinHeadsRepeat");
            container.lastElementChild.classList.add("coinTailsRepeat");
        } else {
            container.firstElementChild.classList.add("coinTails");
            container.lastElementChild.classList.add("coinHeads");
        }
    }



    // if(coinBoolean) {

    //     container.firstElementChild.classList.add("coinHeads");
    //     container.lastElementChild.classList.add("coinTails");
    //     scoreHeads++;
    // } else {

    //     container.firstElementChild.classList.add("coinTails");
    //     container.lastElementChild.classList.add("coinHeads");
    //     scoreTails++;
    // }


    console.log(coinBoolean);
});