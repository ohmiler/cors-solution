const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))

app.get('/', (req, res) => {
    res.send("'/' this is get request");
})

app.post("/post", (req, res) => {
    res.send("Request Received");
})

app.listen(8000, (req, res) => {
    console.log("Server is listening on port 8000");
})