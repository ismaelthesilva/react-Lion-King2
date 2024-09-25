const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());  // Make sure CORS is enabled
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// API to register email
app.post('/register', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  res.json({ message: `${email} is now registered` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
