const nodemailer = require('nodemailer');
require('dotenv').config();
/**
 * @description Send email to the user
 */
const configOptions = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  transport: 'SMTP',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: true,
    minVersion: "TLSv1.2"
  }
}
const transporter = nodemailer.createTransport({
  service: 'gmail',
  ...configOptions
});

const sendMail = (req, res) => {
  console.log(configOptions, 'Request Body:', req.body)
  const d = new Date();
  const date = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
  
  if(req.body.emailTo) {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: req.body.emailTo,
      subject: `Open Lead - ${date}`,
      text: `Hello Dear,\nPlease find the below customer details\n***********************************\nName: ${req.body.name} \nEmail: ${req.body.email} \nPhone: ${req.body.phone} \nAddress: ${req.body.address}`
    }

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}
module.exports = sendMail