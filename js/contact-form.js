const contactForm = document.querySelector(".contactform");

const Name = document.querySelector("#name");
const requiredName = document.querySelector(".requireName");

const email = document.querySelector("#email");
const requiredEmail = document.querySelector(".requireEmail");

const subject = document.querySelector("#subject");
const requiredSubject = document.querySelector(".requireSubject");

const message = document.querySelector("#message");
const requiredMessage = document.querySelector(".requireMessage");

const submitButton = document.querySelector('input[type="submit"]')


Name.onkeydown = function (){
    if (checkLength(Name.value, 5) === true) {
        requiredName.style.display = "none";
    } else {
        requiredName.style.display = "block";
    }
}
email.onkeyup = function (){
     if (validateEmail(email.value) === true) {
        requiredEmail.style.display = "none";
    } else {
        requiredEmail.style.display = "block";
    }
}
subject.onkeyup = function (){
    if (checkLength(subject.value, 15) === true) {
        requiredSubject.style.display = "none";
    } else {
        requiredSubject.style.display = "block";
    }
}
message.onkeyup = function (){
    if (checkLength(message.value, 25) === true) {
        requiredMessage.style.display = "none";
    } else {
        requiredMessage.style.display = "block";
    }
}

function validateForm() {
    event.preventDefault();
        if (checkLength(Name.value, 5) === true 
            && validateEmail(email.value) === true 
            && checkLength(message.value, 25) === true) {
            contactForm.innerHTML = "Thank you for your message!"
        }
        else {
            requiredEmail.style.display = "block";
            requiredName.style.display = "block";
            requiredMessage.style.display = "block";
            
        }
        
    }


function checkLength (value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
     const patternMatches = regEx.test(email);    
   return patternMatches;
 }

 contactForm.addEventListener("submit", validateForm)


