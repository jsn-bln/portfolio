const express = require('express')
const cors = require('cors');
const app = express();
const nodemailer = require("nodemailer");
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.post('/sendemail',(req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
        tls: {
          ciphers:'SSLv3',
          rejectUnauthorized: false
       },
       secure: false
      });

      const formOutput =`
        <h3>sender:${req.body.email}</h3>
        <h5>subject:${req.body.subject}</h5>
        <p>${req.body.body}</p>
      `
      const mailOptions = {
        from: `"Portfolio Client" <${process.env.EMAIL}>`,
        to: "jaysonbalano99@gmail.com",
        subject: "Portfolio Client",
        text: "hi",
        html: formOutput
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send("Something went wrong.");
          } else {
            res.status(200).send("Email successfully sent to recipient!");
          }
      }); 
})




if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})