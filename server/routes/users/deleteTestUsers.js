const express = require("express");
const router = express.Router();
const db = require("../../database");

router.get("/api/users/delete-test-users", (req, res, next) => {
  db.run(`DELETE FROM User WHERE username='testuser'`, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({ message: "Users deleted!", rows: this.changes });
  });
});

module.exports = router;
