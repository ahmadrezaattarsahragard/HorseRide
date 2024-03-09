// header slider
const PRIMARY_SLIDER = document.getElementById('primary-slider');
const PRIMARY_SLIDER_CONTENT = document.getElementById('primary-slider-content');
const PRIMARY_SLIDER_CONTENT_SUB = document.getElementById('primary-slider-content-sub');
const PRIMARY_SLIDER_CONTENT_DESC = document.getElementById('primary-slider-content-desc');
const PRIMARY_SLIDER_CONTENT_BTN = document.getElementById('primary-slider-content-btn');

const images = ['img1.jpg','img2.PNG','img3.jpg'];
let current_pic_num = 0;

function PrimarySliderContent_addClass() {
    PRIMARY_SLIDER_CONTENT_SUB.classList.add('active');
    PRIMARY_SLIDER_CONTENT_DESC.classList.add('active');
    PRIMARY_SLIDER_CONTENT_BTN.classList.add('active');
}
    
function PrimarySliderContent_removeClass() {
    PRIMARY_SLIDER_CONTENT_SUB.classList.remove('active');
    PRIMARY_SLIDER_CONTENT_DESC.classList.remove('active');
    PRIMARY_SLIDER_CONTENT_BTN.classList.remove('active');
} 

let count = 0;
let blurImg = 0;
let opacityImg = 1;
const changeSizeOpacity = 0.0005;
const changeSizeBlur = 1;

setInterval(()=>{
    count += 1;
    if(count == 1800){
        PrimarySliderContent_removeClass();            
    } 
    else if(count >= 1900 && count < 2000){
        opacityImg -= changeSizeOpacity;
        PRIMARY_SLIDER.style.opacity = `${opacityImg}`;
        blurImg += changeSizeBlur;
        PRIMARY_SLIDER.style.filter = `blur(${blurImg}px)`;
    } 
    else if(count == 2000){
        count = 0;
        if(current_pic_num == images.length-1){
            current_pic_num = 0;
            PRIMARY_SLIDER.style.backgroundImage = `url(public/${images[current_pic_num]})`;
        }else{
            current_pic_num += 1;
            PRIMARY_SLIDER.style.backgroundImage = `url(public/${images[current_pic_num]})`;
        }
    }
    else if(count == 100){
        PrimarySliderContent_addClass();
    }
    else if(count < 200 && opacityImg < 1){
        opacityImg += changeSizeOpacity;
        PRIMARY_SLIDER.style.opacity = `${opacityImg}`;
        blurImg -= changeSizeBlur;
        PRIMARY_SLIDER.style.filter = `blur(${blurImg}px)`;
    }
    else{
        opacityImg = 1;
        PRIMARY_SLIDER.style.opacity = `${opacityImg}`;
        blurImg = 0;
        PRIMARY_SLIDER.style.filter = `blur(${blurImg}px)`;
    }
},1);
// /header slider
// about
const aboutImage = document.getElementById("aboutImage");
const aboutContent = document.querySelector("#aboutContent");

let aboutImageInfo = aboutImage.getBoundingClientRect();
let aboutContentInfo = aboutContent.getBoundingClientRect();

window.addEventListener("scroll",()=>{
    if (scrollY > aboutImageInfo.y-500){
        aboutImage.className = 'show';
        aboutContent.classList.add('show');
    } else if(scrollY < aboutContentInfo.y){
        aboutImage.classList.remove('show');
        aboutContent.classList.remove('show');
    }
});
// /about
