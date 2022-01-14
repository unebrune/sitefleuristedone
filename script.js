

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");


function validateForm(){
    if(nameInput.ariaValueMax.length <1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }
}