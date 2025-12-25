const express = require("express");
const cors = require("cors");
const Database = require('better-sqlite3');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors()) // протокол совместного использования ресурсов между источниками для веб-безопасности
// app.use(express.static(path.join(__dirname, "public"))) // доступ к статичным файлам
const db = new Database('our_database.db');
app.use(express.json()) // перевод клиентских запросов из json

db.prepare(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    img TEXT,
    content TEXT
  )
`).run();

app.get('/articles', (req, res) => {
  const q = req.query.q || ''; // req - объект запроса(/articles), а q - параметр в URL (/articles?id=...)
  const rows = db.prepare(`
    SELECT * FROM articles
    WHERE title LIKE ? OR content LIKE ?
    ORDER BY id DESC
  `).all(`%${q}%`, `%${q}%`);

  res.json(rows);
});

app.post('/articles', (req, res) => {
  console.log('BODY:', req.body);
  const { title, img, content } = req.body; // деструктуризация тела запроса

  if (!title || !img ||!content) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  db.prepare(`
    INSERT INTO articles (title, img, content)
    VALUES (?, ?, ?)
  `).run(title, img, content);

  res.json({ status: 'ok' });
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // проверяем, есть ли пользователь
  const existingUser = db
    .prepare('SELECT * FROM users WHERE email = ?')
    .get(email);

  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  // хэшируем пароль
  const hashedPassword = await bcrypt.hash(password, 10);

  db.prepare(`
    INSERT INTO users (email, password)
    VALUES (?, ?)
  `).run(email, hashedPassword);

  res.json({ status: 'registered' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
