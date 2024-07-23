// and this code can was made for a ctf challenge which will automate solving 1000 equation
//      or more or less

const { Client } = require("discord.js-selfbot-v13");
const settings = require('./settings.json');
const client = new Client({ checkUpdate: false });

function solveEquation(inputString) {
    // Extract the equation part from the input string
    const equationPart = inputString.split(':')[1].trim();  // Get the part after the colon and trim any extra spaces

    // Split the equation into its components
    const [num1, operator, num2] = equationPart.split(' ').filter(part => part);  // Remove empty strings and split by spaces

    // Convert numbers from strings to floats
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Evaluate the equation based on the operator
    let result;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            // Format the result to one decimal place
            result = result.toFixed(1);
            break;
        default:
            throw new Error('Unsupported operator');
    }

    return result;
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.username}`);
});

client.on('messageCreate', (msg) => {
    if (msg.author.id === client.user.id) return; // Ignore messages from the bot itself

    // Extract message content and process it
    const messageContent = msg.content;

    // Check if the message mentions the bot and contains "@Aminech"
    if ((msg.mentions.has(client.user) || messageContent.includes('<@1157685443727478785>')) && !messageContent.endsWith('.')) {
        try {
            const result = solveEquation(messageContent);
            console.log(`!submit ${result}`);

            // Introduce a delay before replying
            setTimeout(() => {
                msg.reply(`!submit ${result}`);
            }, 1500); // Delay in milliseconds (2000 ms = 2 seconds)
        } catch (error) {
            console.error('Error solving equation:', error);
            setTimeout(() => {
                msg.reply('There was an error solving the equation.');
            }, 1500); // Delay in milliseconds
        }
    } else {
        setTimeout(() => {
            msg.reply('!math');
        }, 1500); // Delay in milliseconds
    }
});

client.login(settings.token);
