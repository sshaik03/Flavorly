const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize database
const db = new Database('waitlist.db', { verbose: console.log });

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS waitlist (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    timestamp TEXT NOT NULL
  )
`);

// API endpoint to add a new waitlist entry
app.post('/api/waitlist', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  try {
    const stmt = db.prepare('INSERT INTO waitlist (name, email, timestamp) VALUES (?, ?, ?)');
    const timestamp = new Date().toISOString();
    const info = stmt.run(name, email, timestamp);
    
    return res.status(201).json({ 
      success: true, 
      message: 'Successfully added to waitlist',
      id: info.lastInsertRowid 
    });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(409).json({ error: 'Email already registered' });
    }
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to add to waitlist' });
  }
});

// API endpoint to get all waitlist entries
app.get('/api/waitlist', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM waitlist ORDER BY timestamp DESC');
    const entries = stmt.all();
    return res.json(entries);
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Failed to retrieve waitlist entries' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Database file: ${process.cwd()}/waitlist.db`);
});