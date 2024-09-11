import nodemailer from "nodemailer";
import express from "express";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL,
        pass: process.env.PASS,
    }

})