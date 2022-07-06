const express = require('express')
const router = express.Router();
const Receta = require('../models/receta.model')
router.get('/', (req, res) => {
    res.render('index');
})
router.get('/send-email', (req, res) => {
    res.render('email');
})
const nodemailer = require('nodemailer');
router.post('/send-email', async(req, res) => {
    const { name, email, phone, message } = req.body;
    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: 'tomas.salcedo@cesjuanpablosegundo.es',
            pass: 'Hijoynala1234'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let info = await transporter.sendMail({
        from: '"Fitness App" ',
        to: 'tomas.salcedo@cesjuanpablosegundo.es',
        subject: 'Formulario de contacto',
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.render('success');
});
module.exports = router