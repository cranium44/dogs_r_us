const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/test", (req, res) => {
    res.send({ message: "GET request to the homepage" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
