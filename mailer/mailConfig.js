const nodemailer = require('nodemailer');
const cred = require('../credential.json')['gmail_creds'];


const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port: 587,
    secure:false,
    requireTLS:true,
    auth: {
        user: cred.GMAIL_USER_ID,
        pass: cred.GMAIL_USER_PASSWORD
    }
});

transporter.verify((error, success) => {
    if (error) {
      console.log(error)   
    } else {
      console.log("Server is ready to take our messages")
    } 
 })

module.exports = transporter;

