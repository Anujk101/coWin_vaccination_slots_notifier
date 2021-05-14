const transporter = require('./mailConfig');
const cred = require('../credential.json')['gmail_creds'];


const send_notification = async (receiversEmail) =>{
    let mailDetails = {
        from : 'danuj0163@gmail.com',
        to : receiversEmail,
        subject : 'Vaccinations slot availabe in Bhopal',
        text : 'Slots available in your District. Please book asap'
    }
    transporter.sendMail(mailDetails,(err,data)=>{
        if(err) {
            console.log('Error Occurs',err);
        }
        else {
            console.log('Email Sent SuccessFully');
        }
    });
}

module.exports = send_notification