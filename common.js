
let firstNumber = +prompt('Enter the first number?');

let secondNumber;

let mathematicalOperation;


if(firstNumber === '' || !isNaN(firstNumber)){

    secondNumber = +prompt('Enter the second number?');

    if(secondNumber === '' || !isNaN(secondNumber)){

        mathematicalOperation = prompt('Choose a math operation: add, sub, mult, div ?');

        switch (mathematicalOperation){
            case 'add': alert(firstNumber + secondNumber);
                break;
            case 'sub':alert(firstNumber - secondNumber);
                break;
            case 'mult':alert(firstNumber * secondNumber);
                break;
            case 'div':alert(firstNumber / secondNumber);
                break;
            default: alert('You have not selected any mathematical operation.')
        }

    } else {
        alert('You have not selected any mathematical operation.')

    }

}else {
    alert('You have not selected any mathematical operation.')

}






