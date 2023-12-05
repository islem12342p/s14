// Configure environment variables
require("dotenv").config();

// import nodemailer from "nodemailer"
const nodemailer = require("nodemailer");

// Create the transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// define mail options
const options = {
  from: "youremail@gmail.com",
  to: "myfriend@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

// use transporter to send mail
transporter.sendMail(options, (error, info) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(info);
});
