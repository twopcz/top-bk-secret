const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 3001;
const nodemailer = require(`nodemailer`);
const creds = require(`./config/config`);
const cors = require(`cors`);

const transport = {
    host: 'smtp.hostinger.com',
    port: 587,
    // host: `imap.hostinger.com`,
    // port: 993,
    secure: false,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Nodemailer working!`);
    }
});

app.use(cors());
app.use(express.json());

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
        to: `info@bzy-kai.com`,
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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
