let el_header = document.getElementsByClassName("header");
let el_brandName = document.getElementsByClassName("brand-text");
let el_Details = document.getElementsByClassName("product-details");
let el_feats = document.getElementsByClassName("feat");
let tl = gsap.timeline();
let el_img = document.getElementsByClassName("product-image")

//creating an Array from el_feats  HTML Container
let el_featArr = Array.from(el_feats);


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
        image: "",
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
        image: "",
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
        image: "",
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
setStartPos();
animateImg();
animatefeatures();


/* Events */
document.getElementsByClassName("prod-1")[0].addEventListener("click", showAres);
document.getElementsByClassName("prod-2")[0].addEventListener("click", showCosmos);
document.getElementsByClassName("prod-3")[0].addEventListener("click", showSpear);
document.getElementsByClassName("prod-4")[0].addEventListener("click", showGalactus);


/* FUNCTION DEFINITIONS */
function setStartPos() {
    tl.set(el_img, { y: 90 });
    tl.set(el_Details, { x: 50 })
    //tl.set(el_chainwheel_icon, { rotation: 0 });
}

function animateImg() {
    tl.to(el_img, { duration: 1, opacity: 1, y: 0, ease: "elastic.out(1, 0.3)" });
}

function animatefeatures() {
    tl.to(el_Details, { opacity: 1, duration: 1, x: 0, ease: "elastic.out(1, 0.3)" }, "-=0.8")
}


//Event Definitions
function showGalactus() {
    let count = 0;
    el_featArr.map((el, i) => {
        Object.keys(featData).map(key => {
            if (key === "galactus") {
                el_img[0].src = featData[key].image;
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
    let count = 0;
    el_featArr.map((el, i) => {
        Object.keys(featData).map(key => {
            if (key === "aresbasic") {
                el_img[0].src = featData[key].image;
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
    let count = 0;
    el_featArr.map((el, i) => {
        Object.keys(featData).map(key => {
            if (key === "cosmos") {
                el_img[0].src = featData[key].image;
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
    let count = 0;
    el_featArr.map((el, i) => {
        Object.keys(featData).map(key => {
            if (key === "speardd") {
                el_img[0].src = featData[key].image;
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
