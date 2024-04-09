const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5050;

// GET request handler
app.get('/', (req, res) => {
    res.send('GET request received');
});

// POST request handler
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    // Check if username and password are valid (dummy check for demonstration)
    if (username === 'user' && password === 'password') {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid username or password');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
