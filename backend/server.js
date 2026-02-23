const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/crops", (req, res) => {
    const { name, description, image } = req.body;

    const sql = "INSERT INTO crops (name, description, image) VALUES (?, ?, ?)";

    db.query(sql, [name, description, image], (err, result) => {
        if (err) {
            res.status(500).json({
                message: "Some error occurred",
                error: err
            });
        } else {
            res.status(201).json({
                message: "Data successfully submitted ✅",
                result
            });
        }
    });
});
app.get("/get-crops", (req, res) => {
  const sql = "SELECT * FROM crops"; 
  db.query(sql, [], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({
        message: "Some error occurred while fetching data",
      });
    }

    res.status(200).json({
      message: "Data received successfully",
      result,
    });
  });
});
app.post("/tools", (req, res) => {
    const { name, description, image } = req.body;

    const sql = "INSERT INTO tools (name, description, image) VALUES (?, ?, ?)";

    db.query(sql, [name, description, image], (err, result) => {
        if (err) {
            res.status(500).json({
                message: "Some error occurred",
                error: err
            });
        } else {
            res.status(201).json({
                message: "Data successfully submitted ✅",
                result
            });
        }
    });
});
app.get("/get-tools", (req, res) => {
  const sql = "SELECT * FROM tools"; 
  db.query(sql, [], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({
        message: "Some error occurred while fetching data",
      });
    }

    res.status(200).json({
      message: "Data received successfully",
      result,
    });
  });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000 🚀");
});
