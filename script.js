//mengambil element html menggunakan class number
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    })
})

//mendefinisikan function untuk memperbaharui layar tampilan
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number
}

//mendefinisikan Variable untuk melakukan kalkulasi
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

//mendefinisikan function "inputNumber"
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        //cara mengaktifkan penginputan lebih dari 2 angka
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

//menambah click event ke operator tombol-tombol
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

//mendefinisikan function "inputOperator"
const inputOperator = (operator) => {
    if(calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

//menjalankan function calculate saat tombol (=) di klik
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
    clearAll();
})

//mendefinisikan function calculation
const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return
    }
    //simpan hasil kalkulasi ke currentNumber
    currentNumber = result;
    calculationOperator = '';
}

//mendefinisikan dan menjalankan function clearAll
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

//mendefinisikan dan menjalankan inputPercentage
const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value);
    updateScreen(currentNumber);
})

inputPercentage = (dot) => {
    if(currentNumber.includes('%')){
        return
    }
    currentNumber = currentNumber/100;
}


//mendefinisikan dan menjalankan inputDecimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

//mencegah titik (.) penginputan decimal berulang kali
inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}
