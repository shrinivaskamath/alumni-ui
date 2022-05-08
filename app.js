const express = require("express");

const app = express();

app.use(express.static("./dist/alumni-ui"));

app.listen(process.env.PORT || 8080);
