const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
