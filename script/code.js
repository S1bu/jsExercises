 function calculate() {
    let num1 = parseInt(document.querySelector('.number1').value);
    let num2 = parseInt(document.querySelector('.number2').value);
    let operator = (document.querySelector('.operator').value);

    switch (operator) {
        case "+": 
        document.querySelector('.output').innerHTML= num1 + num2; 
            break;
        case "-":
            document.querySelector('.output').innerHTML= num1 - num2; 
            break;
        case "*":
            document.querySelector('.output').innerHTML= num1 * num2; 
            break;
        case "/":
            document.querySelector('.output').innerHTML= num1 / num2; 
            break;
        default:
            document.querySelector('.output').innerHTML='provide valid inputs'; 
         
    }
 
}
