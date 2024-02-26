// portfolioController.js

const nodeMailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

// transport
const transporter = nodeMailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID,
        },
    })
);

const sendEmailController = async (req, res) => {
    try {
        const { name, email, content } = req.body;

        // validation
        if (!name || !email || !content) {
            return res.status(500).send({
                success: false,
                message: 'Please provide all fields'
            });
        }

        // email matter
        await transporter.sendMail({
            to: 'ofirnahnn221@gmail.com',
            from: 'ofirnahnn221@gmail.com',
            subject: 'Regarding MERN Portfolio',
            html: `
                <h5>Details Information</h5>
                <ul>
                    <li><p>Name: ${name}</p></li>
                    <li><p>Sender Email: ${email}</p></li>
                    <li><p>Message Content: ${content}</p></li>
                </ul>
            `,
        });

        return res.status(200).send({
            success: true,
            message: 'Your message sent successfully',
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Send Email API error',
            error
        })
    }
}

module.exports = { sendEmailController };