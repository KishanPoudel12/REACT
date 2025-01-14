import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.Database_Host,
  user: process.env.Database_User,
  password: process.env.Database_Pass,
  database: process.env.Database_Name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');``
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create User
const curTimeStamp = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
app.post('/api/users', (req, res) => {
  console.log('req.body=',req.body)
  const { email_address, username, password } = req.body;
  const query = `INSERT INTO users (email_address, username, password, created_at) VALUES (?, ?, ?,?)`;
  console.log('query=',query)
  db.query(query, [email_address, username, password, curTimeStamp], (err, results) => {
    if (err) {
      console.error('Error inserting user: ' + err.stack);
      res.status(500).send('Error inserting user');
      return;
    }
    console.log('results=',results)
    res.status(201).send('User created successfully');
  });
});

// Read All Users
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users: ' + err.stack);
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});

// Read Single User
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM users WHERE ID = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching user: ' + err.stack);
      res.status(500).send('Error fetching user');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('User not found');
      return;
    }
    res.json(results[0]);
  });
});

// Update User
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const data={...req.body,updated_at:curTimeStamp}
  const columns = Object.keys(data);
    const values = Object.values(data);
    const setClause = columns.map(column => `${column} = ?`).join(', ');

    // SQL query with placeholders
    const sql = `UPDATE users SET ${setClause} WHERE ID = ?`;
  
    // Add the `id` as the last value for the WHERE clause
    values.push(id);
  
    // Debugging logs (optional)
    console.log('SQL Query:', sql);
    console.log('Values:', values);
  
    // Execute the query
    db.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error updating user:', err.stack);
        res.status(500).send('Error updating user');
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).send('User not found');
        return;
      }
      res.send('User updated successfully');
  });
});

// Delete User
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  console.log('id=',id)
  const query = 'DELETE FROM users WHERE ID = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).send(err.message);
      conosole.log('i Am is error')
      return;
    }
    if (results.affectedRows === 0) {
      console.log('i am inside affected rows')
      res.status(404).send('User not found');
      return;
    }
    res.send('User deleted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
