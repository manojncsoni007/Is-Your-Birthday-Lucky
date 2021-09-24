let bDate = document.querySelector('#b-date');
let lNumber = document.querySelector('#lucky-no');
let checkBtn = document.querySelector('#check-btn');
let message = document.querySelector('.result');
console.log('connected');

function displayMessage(msg) {
    message.innerText = msg;
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function isNumberLucky(sumOfDate, numberCheck) {
    if (sumOfDate % numberCheck === 0) {
        return displayMessage(`${numberCheck} is lucky number !! 🥳`);
    }

    return displayMessage(`${numberCheck} is not that lucky 😕`)
}

checkBtn.addEventListener('click', () => {
    const date = bDate.value;
    const numberCheck = lNumber.value;
    const sumofDate = calculateSum(date);
    if (date && numberCheck) {
        isNumberLucky(sumofDate, numberCheck)
    } else {
        displayMessage('Enter the both fields *')
    }



})