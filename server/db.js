const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "articles.db"); // здесь проверить

const db = new sqlite3.Database(dbPath);

// db.serialize(() => { // здесь проверить
//   db.run(`
//     CREATE TABLE IF NOT EXISTS articles (
//       ArticleId INTEGER PRIMARY KEY AUTOINCREMENT,
//       ArticleTitle TEXT,
//       ArticleImg TEXT,
//       ArticleContent TEXT
//     )
//   `),
//   (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('таблица успешно создана')
//     }
//   };
// }); 
// const search = (callback) => {
//   db.all(`SELECT * FROM articles`, (err, rows) => {
//     if (err) {
//       console.err(err)
//     } else {
//       callback(rows)
//     }
//   });
// };

// const insertData = db.prepare(`INSERT INTO articles (ArticlesTitle, ArticleImg, ArticleContent) VALUES (?,?,?,?)`,
//   (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('добавили статью')
//     }
//   }
// );

// const deleteData = db.prepare( `DELETE FROM articles WHERE ArticleId == ?`,
//   (err) => {
//     if(err) {
//       console.error(err)
//     } else {
//       console.log('удалили статью с айди')
//     }
//   }
// );

module.exports = db;
