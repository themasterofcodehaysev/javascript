
function getRadioValue(radios) {
    // TODO: get Radio value from radios array
    for (let valueRadio of radios){
        if (valueRadio.checked){
            return valueRadio.value
        }
    }
}

function getCheckboxValue(checkboxes) {
    // TODO: get Check box value from checkboxes array
    let valueCheck = ''
    for (let valueCheckBox of checkboxes){
        if (valueCheckBox.checked){
            valueCheck += valueCheckBox.value + ', ';
        }
    }
    return valueCheck.slice(0, -1);
    // Return value example: red, orange, purple
    // remove the last charector by slice(0, -1) 
}

function submitSurvey() {
    let qOne = getRadioValue(questionOne);
    let qTwo = getRadioValue(questionTwo);
    let qThree = getCheckboxValue(questionThree);
    let qFour = getCheckboxValue(questionFour);

    answerOne.textContent = qOne;
    answerTwo.textContent = qTwo;
    answerThree.textContent = qThree;
    answerFour.textContent = qFour;
    console.log(answerOne);
}




// Main
const questionOne = document.querySelectorAll('input[name="q_1"]');
const questionTwo = document.querySelectorAll('input[name="q_2"]');
const questionThree = document.querySelectorAll('.chef');
const questionFour = document.querySelectorAll('.canteen');
console.log(questionFour);


const answerOne = document.querySelector('#quality')
const answerTwo = document.querySelector('#taste')
const answerThree = document.querySelector('#chef')
const answerFour = document.querySelector('#canteen')


const submitButton = document.querySelector('#submit');
const questionContainer = document.querySelector('.form-container');
const resultContainer = document.querySelector('.result-container');


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    resultContainer.classList.add('hide');
    questionContainer.classList.add('hide');
    submitSurvey();
});