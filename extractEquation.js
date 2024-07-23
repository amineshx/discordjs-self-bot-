// this code just extract equation from a string 


// Function to extract and solve the equation from a string
function solveEquation(inputString) {
    // Extract the equation part from the input string
    const equationMatch = inputString.match(/(\d+)\s*([+\-*/])\s*(\d+)/);

    if (equationMatch) {
        // Extract numbers and operator from the match
        const num1 = parseFloat(equationMatch[1]);
        const operator = equationMatch[2];
        const num2 = parseFloat(equationMatch[3]);

        // Evaluate the equation based on the operator
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                // Format the result to one decimal place
                result = result.toFixed(1);
                break;
            default:
                throw new Error('Unsupported operator');
        }

        return result;
    } else {
        throw new Error('No equation found in the string');
    }
}

// Example usage
const inputString = '<@1157685443727478785>, solve this operation: 7233 * 2916';
const result = solveEquation(inputString);
console.log('Result:', result);
