function checkString(str) {

    let stack = [];
    let openBrackets = '({[';
    let closeBracets = ')}]';
    let lastIndex;
    let small = '()';
    let curly = '{}';
    let square = '[]';
    let flag;
    if (str.length > 1 && str.length <= 104) {

        for (let i = 0; i < str.length; i++) {

            if (openBrackets.includes(str[i])) {
                stack.push(str[i]);
            }
            else if (closeBracets.includes(str[i]) && stack.length > 0) {

                lastIndex = stack.pop();
                let pair = lastIndex + str[i];

                if (pair == small || pair == curly || pair == square) {
                    flag = true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }

        }

        if (stack.length >= 1) {
            return false;
        }
        else {
            return flag;
        }
    }
    else {
        console.log('Invalid String length');
        return false;
    }
}

let check = checkString('()');

if (check == true) {
    alert("Valid String");
}
else {
    alert('Invalid String')
}