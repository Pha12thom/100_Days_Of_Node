import nodemailer from "nodemailer";
import express from "express";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'geofreymilugo@gmail.com',
        pass: 'nrmxixzytslzowit',
    }

});


const mailOptions = {
    from: 'geofreymilugo@gmail.com',
    to: 'milugogeogrey@gmail.com',
    subject: 'This is Test Mailer',
    text: 'Hello, this is a test email sent using Nodemailer from milugogeogrey@gmail.com'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});