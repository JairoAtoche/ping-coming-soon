"use strict";

let myRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/g;
let input = document.getElementById("inputCorreo");
let submit = document.getElementById("submit");

let error = document.createElement("P");
error.textContent = "Please provide a valid email address";
error.classList.add("form__notification");
let inputContainer = document.querySelector(".input-container");

submit.addEventListener("click", ()=> {
    let correo = document.getElementById("inputCorreo").value;
    if(!myRegex.test(String(correo).toLowerCase())) {
        input.classList.add("form__input--error");
        inputContainer.appendChild(error);
        submit.classList.add("form__button--error");
    } else {
        input.classList.remove("form__input--error");
    }
})