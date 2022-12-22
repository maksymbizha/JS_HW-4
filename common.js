
const firstNumber = +prompt('Enter the first number?');

let secondNumber;

let mathematicalOperation;

let sum;



if(!isNaN(firstNumber)){

    secondNumber = +prompt('Enter the second number?');

    if(!isNaN(secondNumber)){

        mathematicalOperation = prompt('Choose a math operation: add, sub, mult, div ?');

        switch (mathematicalOperation){
            case 'add':
               sum = firstNumber + secondNumber ;
                alert (`${firstNumber} + ${secondNumber} = ${sum}`);
                break;
            case 'sub':
                sum= firstNumber - secondNumber;
                alert (`${firstNumber} - ${secondNumber} = ${sum}`);
                break;
            case 'mult':
               sum = firstNumber * secondNumber;
                alert (`${firstNumber} * ${secondNumber} = ${sum}`);
                break;
            case 'div':
                sum = firstNumber / secondNumber;
                alert (`${firstNumber} / ${secondNumber} = ${sum}`);
                break;
            default:
                alert('Not a valid operation.')
        }

    } else {
        alert('Not a valid operation.')

    }

}else {
    alert('Not a valid operation.')

}




