const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const pool = require("./db");

app.get("/todos/:userEmail", async (req, res) => {
  const userEmail = "yabad@test.42.fr";
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1;",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
