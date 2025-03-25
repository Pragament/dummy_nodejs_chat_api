const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/chat', (req, res) => {
    const message = req.body.message;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    res.json({ response: `Echo: ${message}` });
});

app.listen(port, () => {
    console.log(`Chat API running at http://localhost:${port}`);
});

// Export for deployment
module.exports = app;
