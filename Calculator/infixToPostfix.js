function conversionToPostfix(str){
    let stack = [];
    let ans = '';
    let num = '';

    for (let i=0; i < str.length; i++) {
        let c = str[i];
        if('0123456789.'.includes(c)){
            num += c;
        }
        else{
            //for multi digits
            if(num){
                ans += num +' ';
                num = '';
            }
            // opertaor clicked
            while (stack.length > 0 && priority(c) <= priority(stack[stack.length-1])) {
                ans += stack.pop()+' ';
            }
            stack.push(c);
        }
    }
    if(num){
        ans += num +' ';
    }
    while(stack.length > 0){
        ans += stack.pop()+' ';
    }
    return ans.trim();
}

function priority(c){
    switch (c) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
    }
    return -1;
}