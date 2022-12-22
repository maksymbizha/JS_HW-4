
const firstNumber = +prompt('Enter the first number?');


if(!isNaN(firstNumber)){

    const secondNumber = +prompt('Enter the second number?');

    if(!isNaN(secondNumber)){

        const mathematicalOperation = prompt('Choose a math operation: add, sub, mult, div ?');

        let sum;

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
        alert('Not a valid number.')

    }

}else {
    alert('Not a valid number.')

}




