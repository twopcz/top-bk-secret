const express = require(`express`);
const bodyParser = require(`body-parser`);
const nodemailer = require(`nodemailer`);
const cors = require(`cors`);
const config = require('./config/config.js');
const app = express();

const localport = 3001;

const transporter = nodemailer.createTransport({
    service: `Gmail`,
    port: 465,
    auth: {
        user: config.USER,
        pass: config.PASS
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(`error`);
    } else {
        console.log(`Server is ready to take messages`);
    }
});

const PORT = process.env.PORT || localport;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === `production`) {
    app.use(express.static(`${__dirname}/build}`));
}

app.post(`/send`, (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const shoeStyle = req.body.shoeStyle;
    const shoeSize = req.body.shoeSize;
    const info = req.body.info;
    const content = `name: ${firstName} ${lastName}  \n ${email} \n ${shoeStyle} ${shoeSize} \n ${info}`;

    const mail = {
        from: `${firstName} ${lastName}`,
        to: `testingbzykai@gmail.com`,
        subject: `Inquiry from BZY-KAI.com`,
        text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: `fail`
            });
        } else {
            res.json({
                msg: `success`
            });
        }
    });
});

app.listen(PORT, () =>
    console.log(`API server up on http://localhost:${PORT}`)
);
