const mailer = require('./mailer');
const {getBhopalDetails} = require('./coWinApi');
const persons = require('./emails.json')['emails'];

const searchForSlots = async()=>{
    const res = await getBhopalDetails();
    console.log("getting details");
    if (res) {
        persons.map((person)=>{
            mailer.send_notification(person);
        })
    }
}

setInterval(()=>{
    searchForSlots()
},30000)


