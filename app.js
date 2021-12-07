const generateNumbers = function() {

    evenNumbersCol.innerHTML = '';
    oddNumbersCol.innerHTML = '';

    const getNumbersArrays = function() {
        const min = 1;
        const max = 100;
        const evenNumbers = [];
        const oddNumbers = [];
        const arrayLength = 20;
    
        for(let i = 0; i < arrayLength; i++){
           const number = Math.floor(Math.random() * (max - min + 1) + min);
            if(number % 2 == 0){
                evenNumbers.push(number);
            } 
            else oddNumbers.push(number);
        }

        return {evenNumbers, oddNumbers};
    }

    const {evenNumbers, oddNumbers} = getNumbersArrays();
    currentEvenNumbers = currentEvenNumbers.concat(evenNumbers)
    currentOddNumbers = currentOddNumbers.concat(oddNumbers)

    const compare = function(a, b) {
        return a - b;
    }

    currentEvenNumbers.sort(compare);
    currentOddNumbers.sort(compare);

    const createDiv = function(numbersArray, numbersCol) {
        numbersArray.forEach(number => {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = number;
            numbersCol.appendChild(newDiv);
        })
    }

    createDiv(currentEvenNumbers, evenNumbersCol);
    createDiv(currentOddNumbers, oddNumbersCol); 

}

const evenNumbersCol = document.querySelector('#even-numbers');
const oddNumbersCol = document.querySelector('#odd-numbers');

let currentEvenNumbers = []
let currentOddNumbers = []

const btnGenerate = document.querySelector('.btn');
btnGenerate.addEventListener('click', generateNumbers)

