let sliderUppercase = document.getElementById("uppercaseRange");
let outputUppercase = document.getElementById("uppercaseValue");
let sliderLowercase = document.getElementById("lowercaseRange");
let outputLowercase = document.getElementById("lowercaseValue");
let sliderNumber = document.getElementById("numberRange");
let outputNumber = document.getElementById("numberValue");
let sliderSymbol = document.getElementById("symbolRange");
let outputSymbol = document.getElementById("symbolValue");
let showPasswordLength = document.getElementById("show-length")
let para = document.getElementById("password")
let iconToggleBtn = document.getElementById("icon")
let button = document.getElementById("generate-password")
let copy = document.getElementById("copy-button")
outputLowercase.innerText = sliderLowercase.value;
outputUppercase.innerText = sliderUppercase.value;
outputNumber.innerText = sliderNumber.value;
outputSymbol.innerText = sliderSymbol.value;

let lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']
let passwordArray = []

sliderLowercase.oninput = function () {
    outputLowercase.innerText = this.value;
}

sliderUppercase.oninput = function () {
    outputUppercase.innerText = this.value;
}

sliderNumber.oninput = function () {
    outputNumber.innerText = this.value;
}

sliderSymbol.oninput = function () {
    outputSymbol.innerText = this.value;
}

function generateUppercase() {
    let charNumUppercase = outputUppercase.innerText;
    for (let i = 0; i < charNumUppercase; i++) {
        passwordArray.push(upperCaseLetters[Math.floor((Math.random() * upperCaseLetters.length))])
    }
}

function generateLowercase() {
    let charNumLowercase = outputLowercase.innerText;
    for (let i = 0; i < charNumLowercase; i++) {
        passwordArray.push(lowerCaseLetters[Math.floor((Math.random() * lowerCaseLetters.length))])
    }
}

function generateNumber() {
    let charNumber = outputNumber.innerText;
    for (let i = 0; i < charNumber; i++) {
        passwordArray.push(numbers[Math.floor((Math.random() * numbers.length))])
    }
}

function generateSymbol() {
    let charNumSymbol = outputSymbol.innerText;
    for (let i = 0; i < charNumSymbol; i++) {
        passwordArray.push(symbols[Math.floor((Math.random() * symbols.length))])
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function copyPassword() {
    let copyText = document.getElementById("password");
    if (copyText.textContent === "" ) {
        alert("Please generate password")
    }
    else{
        navigator.clipboard.writeText(copyText.innerText);
        alert("Copied password: " + copyText.innerText)
    }    
}

function generatePassword() {
    generateUppercase()
    generateLowercase()
    generateNumber()
    generateSymbol()
    shuffle(passwordArray)
    para.innerText = passwordArray.join("")
}

function menu(e) {
    let list = document.querySelector("ul");
    e.target.name === "menu-outline"
        ? ((e.target.name = "arrow-back-outline"),
            list.classList.replace("hidden", "flex"))
        : ((e.target.name = "menu-outline"),
            list.classList.replace("flex", "hidden"));
}

showPasswordLength.textContent = Number(outputLowercase.textContent) + Number(outputNumber.textContent) + Number(outputUppercase.textContent) + Number(outputSymbol.textContent);

sliderSymbol.addEventListener("input", ()=>{
    showPasswordLength.textContent = Number(outputLowercase.textContent) + Number(outputNumber.textContent) + Number(outputUppercase.textContent) + Number(outputSymbol.textContent);
})
sliderLowercase.addEventListener("input", ()=>{
    showPasswordLength.textContent = Number(outputLowercase.textContent) + Number(outputNumber.textContent) + Number(outputUppercase.textContent) + Number(outputSymbol.textContent);
})
sliderUppercase.addEventListener("input", ()=>{
    showPasswordLength.textContent = Number(outputLowercase.textContent) + Number(outputNumber.textContent) + Number(outputUppercase.textContent) + Number(outputSymbol.textContent);
})
sliderNumber.addEventListener("input", ()=>{
    showPasswordLength.textContent = Number(outputLowercase.textContent) + Number(outputNumber.textContent) + Number(outputUppercase.textContent) + Number(outputSymbol.textContent);
})

button.addEventListener("click", () => {
    generatePassword()
    passwordArray = []
})

copy.addEventListener("click", () => {
    copyPassword()
})

iconToggleBtn.addEventListener("click", menu)