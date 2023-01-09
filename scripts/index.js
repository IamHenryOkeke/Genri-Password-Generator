let sliderUppercase = document.getElementById("uppercaseRange");
let outputUppercase = document.getElementById("uppercaseValue");
let sliderLowercase = document.getElementById("lowercaseRange");
let outputLowercase = document.getElementById("lowercaseValue");
let sliderNumber = document.getElementById("numberRange");
let outputNumber = document.getElementById("numberValue");
let sliderSymbol = document.getElementById("symbolRange");
let outputSymbol = document.getElementById("symbolValue");
let para = document.getElementById("password")
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
    let randNumber;
    let uppercaseLetter;
    for (let i = 0; i < charNumUppercase; i++) {
        randNumber = Math.floor((Math.random() * upperCaseLetters.length))
        uppercaseLetter = upperCaseLetters[randNumber]
        passwordArray.push(uppercaseLetter)
    }
}

function generateLowercase() {
    let charNumLowercase = outputLowercase.innerText;
    let randNumber;
    let lowercaseLetter;
    for (let i = 0; i < charNumLowercase; i++) {
        randNumber = Math.floor((Math.random() * lowerCaseLetters.length))
        lowercaseLetter = lowerCaseLetters[randNumber]
        passwordArray.push(lowercaseLetter)
    }
}

function generateNumber() {
    let charNumber = outputNumber.innerText;
    let randNumber;
    let number;
    for (let i = 0; i < charNumber; i++) {
        randNumber = Math.floor((Math.random() * numbers.length))
        number = numbers[randNumber]
        passwordArray.push(number)
    }
}

function generateSymbol() {
    let charNumSymbol = outputSymbol.innerText;
    let randNumber;
    let symbol;
    for (let i = 0; i < charNumSymbol; i++) {
        randNumber = Math.floor((Math.random() * symbols.length));
        symbol = symbols[randNumber]
        passwordArray.push(symbol)
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
    navigator.clipboard.writeText(copyText.innerText);
    alert("Copied password: " + copyText.innerText)
}

function generatePassword() {
    generateUppercase()
    generateLowercase()
    generateNumber()
    generateSymbol()
    shuffle(passwordArray)
    para.innerText = passwordArray.join("")
}

button.addEventListener("click", () => {
    generatePassword()
    passwordArray = []
})

copy.addEventListener("click", () => {
    copyPassword()
})
