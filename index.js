const express = require("express");
const path = require("path");

const app = express();

const PORT = 5000;

//Serving a folder
app.use(express.static(path.join(__dirname, "static")));

app.use("/", require(path.join(__dirname, "routes/blog.js")));



app.listen(PORT, () => {
  console.log(`Server is running and listening port : ${PORT}`);
});
