const express = require('express')
const cors = require('cors');
const { urlencoded } = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})