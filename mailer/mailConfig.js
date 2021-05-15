const nodemailer = require('nodemailer');
const cred = require('../credential.json')['gmail_creds'];


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type : "OAuth2",
        user: cred.GMAIL_USER_ID,
        pass: cred.GMAIL_USER_PASSWORD,
        clientId : cred.CLIENT_ID,
        clientSecret : cred.CLIENT_SECRET,
        refreshToken : cred.REFRESH_TOKEN
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

