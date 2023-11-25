// Importing necessary modules

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'errol', // Change this to your database name
});

// Connect to the database

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Define API route for creating a user profile

app.post('/api/createUser', (req, res) => {
  const [ uname, age, email, phone, password, userid ] = req.body;

const insertQuery = 'INSERT INTO users (uname, age, email, phone, password, userid) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [uname, age, email, phone, password, userid];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error creating user profile:', err);
      res.status(500).json({ message: 'Error creating user profile' });
      return;
    }
    console.log(values);
    console.log('User profile created successfully');
    res.json({ message: 'User profile created successfully' });
  });
});

// Define API route for fetching user profiles

app.get('/api/createUser', (req, res) => {
  // Define the SELECT query
  const selectQuery = 'SELECT * FROM users';

  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error fetching user profiles:', err);
      res.status(500).json({ message: 'Error fetching user profiles' });
      return;
    }
    res.json(results);
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


