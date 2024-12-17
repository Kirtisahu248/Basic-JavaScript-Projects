let inputBox = document.querySelector('.display');
let calcBtn = document.querySelectorAll('button');
let displayText = '';

function calcPostfix(postfixExp) {
    let stack = [];
    let number = postfixExp.split(' '); 
    for(let i of number){
        
        if(!(isNaN(i))){
            
            stack.push(parseFloat(i));
        }
        else{
            firstNum = stack.pop();
            secondNum = stack.pop();
            switch (i) {
                case '+':
                    stack.push(secondNum + firstNum);
                    break;
                case '-':
                    stack.push(secondNum - firstNum);
                    break;
                case '*':
                    stack.push(secondNum * firstNum);
                    break;
                case '/':
                    stack.push(secondNum / firstNum);
                    break;
                case '%':
                   let x = (secondNum / firstNum);
                   stack.push(x * 100);
                    break;
            }
        }
    }
    return stack.pop();
}
function calculate(exp){
 let postfixExp = conversionToPostfix(exp);
 return calcPostfix(postfixExp);
}

calcBtn.forEach((button) =>{
    button.addEventListener('click',(e)=>{
      if(e.target.innerHTML === 'DEL'){
        displayText = displayText.substring(0,displayText.length-1); 
        inputBox.value = displayText;
      }
      else if(e.target.innerHTML === 'AC'){
        displayText = ''; 
        inputBox.value = displayText;
      }
      else if(e.target.innerHTML === '='){
        let result = calculate(displayText);
        inputBox.value = result;
      }
      else{
        displayText += e.target.innerHTML; 
        inputBox.value = displayText;
      }
    })
})