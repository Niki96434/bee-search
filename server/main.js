console.log('=== APP STARTING ===');

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('UNHANDLED REJECTION:', reason);
  process.exit(1);
});


const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database
const db = new sqlite3.Database('./our_database.db', (err) => {
  if (err) {
    console.error('DB error:', err.message);
  } else {
    console.log('Connected to SQLite database');
  }
});

// create tables
db.run(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    img TEXT,
    content TEXT
  )
`);

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT
  )
`);

// routes

// GET articles (with search)
app.get('/articles', (req, res) => {
  const q = `%${req.query.q || ''}%`;

  db.all(
    `
    SELECT * FROM articles
    WHERE title LIKE ? OR content LIKE ?
    ORDER BY id DESC
    `,
    [q, q],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    }
  );
});

// POST article
app.post('/articles', (req, res) => {
  const { title, img, content } = req.body;

  if (!title || !img || !content) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  db.run(
    `
    INSERT INTO articles (title, img, content)
    VALUES (?, ?, ?)
    `,
    [title, img, content],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ status: 'ok', id: this.lastID });
    }
  );
});

// REGISTER
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  db.get(
    'SELECT * FROM users WHERE email = ?',
    [email],
    async (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (user) {
        return res.status(409).json({ error: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      db.run(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [email, hashedPassword],
        (err) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }
          res.json({ status: 'registered' });
        }
      );
    }
  );
});

// start server (Render-friendly)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
