const express = require('express');
const app = express();
const port = 3000;

// Static file serving
app.use(express.static("public"));

// Route handling
app.get("/", (req, res) => {
    res.send("This is the first text here");
})

// Dynamic content serving
app.get("/:slug/:dont", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`I just want to say ${req.params.slug}, but don't ${req.params.dont}.`);
})

app.listen(port, () => { 
    console.log(`The server is running at http://localhost:${port}`);
})