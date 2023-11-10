const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());

app.get("/todos/:userEmail", async (req, res) => {
  console.log(req);
  const { userEmail } = req.params;
  console.log(userEmail);
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
