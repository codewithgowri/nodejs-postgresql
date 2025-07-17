require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();

app.get("/get", async (req, res) => {
  const client = await pool.connect();
  const [commentsRes, boardRes] = await Promise.all([
    client.query(
      //   `SELECT * FROM comments NATURAL LEFT JOIN rich_content WHERE board_id = ${req.query.search}`
      "SELECT * FROM comments NATURAL LEFT JOIN rich_content WHERE board_id = $1",
      [req.query.search]
    ),
    client.query("SELECT * FROM boards WHERE board_id = $1", [
      req.query.search,
    ]),
  ]);

  res
    .json({
      status: "ok",
      board: boardRes.rows[0] || {},
      posts: commentsRes.rows,
      //   posts: commentsRes,
    })
    .end();
  await client.end();
});

app.use(express.static("./static"));
app.listen(process.env.PORT);
console.log(`Example app listening at http://localhost:${process.env.PORT}`);
