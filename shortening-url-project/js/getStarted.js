const introButton = document.querySelector(".intro-contents-button");
const guideButton = document.querySelector(".guiding-getStart");
const shortingInput = document.querySelector(".short-form-input");

function scrollIntoInput(){
    introButton.addEventListener('click', scrolling);
    guideButton.addEventListener('click', scrolling);

}

function scrolling(event){
    event.preventDefault();
    shortingInput.scrollIntoView();
    shortingInput.focus();
}

function init(){
    scrollIntoInput();
}

init()