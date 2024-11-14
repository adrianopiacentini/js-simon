const startBtn = document.getElementById('start-btn');
const numbersListElem = document.getElementById('numbers-list');
const countdownElem = document.getElementById('countdown');
const formElem = document.getElementById('answers-form');
const instructionsElem = document.getElementById('instructions');
const inputsList = document.querySelectorAll('input')
const messageElem = document.getElementById('message');



const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomNumbersArray = (min, max, length) => {
    const numsArray = [];
    for (let i = 0; i < length; i++) {
        const randomNum = getRandomInt (min, max);
        numsArray.push(randomNum);
    }
    return numsArray;
}

let numbersArray = [];

const startGame = () => {
    messageElem.innerHTML = '';
    formElem.classList.add('d-none')
    startBtn.disabled = true;
    numbersArray = getRandomNumbersArray(1, 100, 5);
    console.log(numbersArray);

    for (let i = 0; i < numbersArray.length; i++) {
        const curNumber = numbersArray[i];
        numbersListElem.innerHTML += `<li>${curNumber}<li>`
    }

    let counter = 3;
    const intervalId = setInterval(() => {
        if(counter > 0) {
        countdownElem.innerHTML = counter--; 
    } else {
        clearInterval(intervalId);
        numbersListElem.innerHTML = '';
        countdownElem.innerHTML = '';
        formElem.classList.remove('d-none');
        startBtn.disabled = false;
    }
    }, 1000)
}


const handleFormSubmit = (event) => {
event.preventDefault();
const insertedNumbers = [];
for(let i = 0; i < inputsList.length; i++) {
    const curInput = inputsList[i];
    insertedNumbers.push(parseInt(curInput.value));
}
console.log(insertedNumbers)

const correctNumbers = [];
for (let i = 0; i < insertedNumbers.length; i++) {
    const curNumber = insertedNumbers[i];
    if(numbersArray.includes(curNumber)) {
        correctNumbers.push(curNumber);
    }
}
console.log(correctNumbers);

messageElem.innerHTML = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`

}

startBtn.addEventListener('click', startGame);
formElem.addEventListener('submit', handleFormSubmit)


