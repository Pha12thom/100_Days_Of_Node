import nodemailer from "nodemailer";
import express from "express";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
    }

});


const mailOptions = {
    from: 'milugogeogrey@gmail.com',
    to: 'geofreymilugo@gmail.com',
    subject: 'This is Test Mailer',
    text: 'Hello, this is a test email sent using Nodemailer from milugogeogrey@gmail.com'
};