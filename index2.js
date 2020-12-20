//let el_header = document.getElementsByClassName("header");
//let el_brandName = document.getElementsByClassName("brand-text")
let elDetails = document.getElementsByClassName("product-details");
let elfeats = document.getElementsByClassName("feat");
let tl = gsap.timeline();
let elimg = document.getElementsByClassName("product-image");

//creating an Array from elfeats  HTML Container
let el_featArr = Array.from(elfeats);
let currentSelected = 'galactus';

let featData = {
    galactus: {
        image: "./assets/galactus.png",
        speed: "Single Speed",
        height: 'Height : 27"',
        fork: "Threadless Fork",
        break: "Front and Rear Disk Breaks",
        seat: "BIGBEN 2020 Model Seat",
        suspension: "Front Suspension",
        pedals: "PVS Pedals",
        rims: "Double Wall Alloy Rims",
        spokes: "ED Coated Black Spokes",
        tyres: "Nylon Tyres",
        wheelsize: "27 x 2.25",
        price: ""
    },
    aresmtb: {
        image: "./assets/ares.png",
        speed: "21 Speed TX 50 with Lever Shifter",
        height: '26"',
        fork: "Threadless Fork",
        break: "Front and Rear Disk Break",
        suspension: "Front Suspension",
        seat: "BIGBEN 2020 Model Seat",
        pedals: "PVC Pedals",
        rims: "Black ED Coated Steel Double Wall Alloy Rims",
        spokes: "ED Coated Black Spokes",
        tyres: "Nylon Tyres",
        wheelsize: "26 x 1.95",
        price: ""
    },
    aresbasic: {
        image: "./assets/ares.png",
        speed: "Single Speed",
        height: '26"',
        fork: "Threadless Fork",
        break: "Front and Rear Disk Break",
        suspension: "Front Suspension",
        seat: "PU Seat",
        pedals: "PVC Pedals",
        rims: "Black ED Coated Steel Double Wall Alloy Rims",
        spokes: "ED Coated Black Spokes",
        tyres: "Nylon Tyres",
        wheelsize: "26 x 1.95",
        price: ""
    },
    speardd: {
        image: "./assets/spear.png",
        height: '26"',
        speed: "Single Speed",
        fork: "Threadless Fork",
        break: "Double Disk Break",
        seat: "BIGBEN 2020 Model Seat",
        pedals: "PVC Pedals",
        frame: "Full TIG Steel Frame",
        rims: "Double Wall Alloy Rims",
        spokes: "-",
        suspension: "Front Suspension",
        wheelsize: "26 x 300",
        tyres: "Nylon Tyres",
        price: ""
    },
    spearpremium: {
        image: "./assets/spear.png",
        height: '26"',
        speed: "21 Speed TX 35 With Lever Shifter",
        fork: "Threadless Fork",
        break: "Double Disk Break",
        seat: "BIGBEN 2020 Model Seat",
        pedals: "PVC Pedals",
        frame: "Full TIG Steel Frame",
        rims: "Double Wall Alloy Rims",
        spokes: "-",
        suspension: "Front Suspension",
        wheelsize: "26 x 300",
        tyres: "Nylon Tyres",
        price: ""
    },
    cosmos: {
        image: "./assets/cosmos.png",
        speed: "Single Speed",
        height: '26"',
        fork: "-",
        break: "Front Disc Break",
        seat: "PU Seat",
        pedals: "PVC Pedals",
        rims: "ED Coated Black Steel Rims",
        suspension: "Front Suspension",
        spokes: "-",
        tyres: "Nylon Tyres",
        wheelsize: "26 x 2.25",
        price: ""
    }
};

/*  EXECUTION STACK */
init();
setStartPos();
animateImg();
animatefeatures();

/* Events Setup */
document.getElementsByClassName("prod-1")[0].addEventListener("click", showAres);
document.getElementsByClassName("prod-2")[0].addEventListener("click", showCosmos);
document.getElementsByClassName("prod-3")[0].addEventListener("click", showSpear);
document.getElementsByClassName("prod-4")[0].addEventListener("click", showGalactus);

/*Swipe Gesture Handling */
var swiper = new Swipe(document.getElementsByTagName('body')[0]);
swiper.onLeft(doLeftSwipe);
swiper.onRight(doRightSwipe);
swiper.run();






/* FUNCTION DEFINITIONS */
function init(){
    document.getElementsByClassName("prod-4")[0].classList.add("style4");
}

function doLeftSwipe(){
    if(currentSelected === 'galactus'){
        showAres();
        currentSelected = 'ares';
   }else if(currentSelected === 'ares'){
        showCosmos();
        currentSelected = 'cosmos';
   }else if(currentSelected === 'cosmos'){
        showSpear();
        currentSelected = 'spear';
   }else if(currentSelected === 'spear'){
        showGalactus();
        currentSelected = 'galactus';
   }
}

function doRightSwipe(){
    if(currentSelected === 'galactus'){
        showSpear();
        currentSelected = 'spear';
    }else if(currentSelected === 'ares'){
        showGalactus();
        currentSelected = 'galactus';
    }else if(currentSelected === 'cosmos'){
        showAres();
        currentSelected = 'ares';
    }else if(currentSelected === 'spear'){
        showCosmos();
        currentSelected = 'cosmos';
   }
}

function setStartPos() {
    tl.set(elimg, { y: 90 });
    tl.set(elDetails, { x: 50 })
    //tl.set(el_chainwheel_icon, { rotation: 0 });
}

function animateImg() {
    tl.to(elimg, { duration: 1, opacity: 1, y: 0, ease: "elastic.out(1, 0.3)" });
}

function animatefeatures() {
    tl.to(elDetails, { opacity: 1, duration: 1, x: 0, ease: "elastic.out(1, 0.3)" }, "-=0.8")
}

//Event Definitions
function showGalactus() {
    currentSelected = 'galactus';

    //Remove styles of non-selected elements
    document.getElementsByClassName("prod-1")[0].classList.remove("style1");
    document.getElementsByClassName("prod-2")[0].classList.remove("style2");
    document.getElementsByClassName("prod-3")[0].classList.remove("style3");

    if(document.getElementsByClassName("prod-4")[0].classList.contains("style4") === false){
        document.getElementsByClassName("prod-4")[0].classList.add("style4");
    }

    let count = 0;
    el_featArr.map((el, i) => {
        Object.keys(featData).map(key => {
            if (key === "galactus") {
                elimg[0].src = featData[key].image;
                if (count === 0) {
                    el.innerHTML = featData[key].speed;
                }
                if (count === 1) {
                    el.innerHTML = featData[key].height;
                }
                if (count === 2) {
                    el.innerHTML = featData[key].fork;
                }
                if (count === 3) {
                    el.innerHTML = featData[key].break;
                }
                if (count === 4) {
                    el.innerHTML = featData[key].seat;
                }
                if (count === 5) {
                    el.innerHTML = featData[key].suspension;
                }
                if (count === 6) {
                    el.innerHTML = featData[key].pedals;
                }
                if (count === 7) {
                    el.innerHTML = featData[key].rims;
                }
                if (count === 8) {
                    el.innerHTML = featData[key].spokes;
                }
                if (count === 9) {
                    el.innerHTML = featData[key].tyres;
                }
                if (count === 10) {
                    el.innerHTML = featData[key].wheelsize;
                }
                count++;
            }
        })
    });
}

function showAres() {
    currentSelected = 'ares';

    //remove styles for non-slelected elements
    document.getElementsByClassName("prod-2")[0].classList.remove("style2");
    document.getElementsByClassName("prod-3")[0].classList.remove("style3");
    document.getElementsByClassName("prod-4")[0].classList.remove("style4");

    if(document.getElementsByClassName("prod-1")[0].classList.contains("style1") === false){
        document.getElementsByClassName("prod-1")[0].classList.add("style1");
    }

    let count = 0;
    el_featArr.map((el, i) => {
        Object.keys(featData).map(key => {
            if (key === "aresbasic") {
                elimg[0].src = featData[key].image;
                if (count === 0) {
                    el.innerHTML = featData[key].speed;
                }
                if (count === 1) {
                    el.innerHTML = featData[key].height;
                }
                if (count === 2) {
                    el.innerHTML = featData[key].fork;
                }
                if (count === 3) {
                    el.innerHTML = featData[key].break;
                }
                if (count === 4) {
                    el.innerHTML = featData[key].seat;
                }
                if (count === 5) {
                    el.innerHTML = featData[key].suspension;
                }
                if (count === 6) {
                    el.innerHTML = featData[key].pedals;
                }
                if (count === 7) {
                    el.innerHTML = featData[key].rims;
                }
                if (count === 8) {
                    el.innerHTML = featData[key].spokes;
                }
                if (count === 9) {
                    el.innerHTML = featData[key].tyres;
                }
                if (count === 10) {
                    el.innerHTML = featData[key].wheelsize;
                }
                count++;
            }
        })
    });
}

function showCosmos() {
    currentSelected = 'cosmos';

    document.getElementsByClassName("prod-1")[0].classList.remove("style1");
    document.getElementsByClassName("prod-3")[0].classList.remove("style3");
    document.getElementsByClassName("prod-4")[0].classList.remove("style4");
    if(document.getElementsByClassName("prod-2")[0].classList.contains("style2") === false){
        document.getElementsByClassName("prod-2")[0].classList.add("style2");
    }
    
    let count = 0;
    el_featArr.map((el, i) => {
        Object.keys(featData).map(key => {
            if (key === "cosmos") {
                elimg[0].src = featData[key].image;
                if (count === 0) {
                    el.innerHTML = featData[key].speed;
                }
                if (count === 1) {
                    el.innerHTML = featData[key].height;
                }
                if (count === 2) {
                    el.innerHTML = featData[key].fork;
                }
                if (count === 3) {
                    el.innerHTML = featData[key].break;
                }
                if (count === 4) {
                    el.innerHTML = featData[key].seat;
                }
                if (count === 5) {
                    el.innerHTML = featData[key].suspension;
                }
                if (count === 6) {
                    el.innerHTML = featData[key].pedals;
                }
                if (count === 7) {
                    el.innerHTML = featData[key].rims;
                }
                if (count === 8) {
                    el.innerHTML = featData[key].spokes;
                }
                if (count === 9) {
                    el.innerHTML = featData[key].tyres;
                }
                if (count === 10) {
                    el.innerHTML = featData[key].wheelsize;
                }
                count++;
            }
        })
    });
}

function showSpear() {
    currentSelected = 'spear';

    //Remove styles
    document.getElementsByClassName("prod-1")[0].classList.remove("style1");
    document.getElementsByClassName("prod-2")[0].classList.remove("style2");
    document.getElementsByClassName("prod-4")[0].classList.remove("style4");

    if(document.getElementsByClassName("prod-3")[0].classList.contains("style3") === false){
        document.getElementsByClassName("prod-3")[0].classList.add("style3");
    }

    let count = 0;
    el_featArr.map((el, i) => {
        Object.keys(featData).map(key => {
            if (key === "speardd") {
                elimg[0].src = featData[key].image;
                if (count === 0) {
                    el.innerHTML = featData[key].speed;
                }
                if (count === 1) {
                    el.innerHTML = featData[key].height;
                }
                if (count === 2) {
                    el.innerHTML = featData[key].fork;
                }
                if (count === 3) {
                    el.innerHTML = featData[key].break;
                }
                if (count === 4) {
                    el.innerHTML = featData[key].seat;
                }
                if (count === 5) {
                    el.innerHTML = featData[key].suspension;
                }
                if (count === 6) {
                    el.innerHTML = featData[key].pedals;
                }
                if (count === 7) {
                    el.innerHTML = featData[key].rims;
                }
                if (count === 8) {
                    el.innerHTML = featData[key].spokes;
                }
                if (count === 9) {
                    el.innerHTML = featData[key].tyres;
                }
                if (count === 10) {
                    el.innerHTML = featData[key].wheelsize;
                }
                count++;
            }
        })
    });
}
