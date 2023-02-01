const express = require('express');
const app = express();

app.get('/calculate', (req, res) => {
    let result = 0;
    let operation = req.query.operation;
    let num1 = parseFloat(req.query.num1);
    let num2 = parseFloat(req.query.num2);

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operation';
    }

    res.send({ result: result });
});

app.listen(3000, () => {
    console.log('API running on port 3000');
});