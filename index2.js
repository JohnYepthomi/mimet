let el_img = document.getElementsByTagName("img");
let el_header = document.getElementsByClassName("header");
let el_brandName = document.getElementsByClassName("brand-text");
let el_Details = document.getElementsByClassName("product-details");

let tl = gsap.timeline();

setStartPos();
animateImg();
animatefeatures();


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




