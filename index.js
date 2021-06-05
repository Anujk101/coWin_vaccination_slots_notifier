const express = require('express');
const dotenv = require('dotenv');
const mailer = require('./mailer');
const {getBhopalDetails} = require('./coWinApi');
const persons = require('./emails.json')['emails'];

const app = express();

dotenv.config();
const PORT = process.env.PORT

const searchForSlots = async()=>{
    const res = await getBhopalDetails();
    console.log("getting details");
    if (res) {
        persons.map((person)=>{
            mailer.send_notification(person);
        })
    }
}

app.get('/',(req,res)=>{
    res.send("Vaccinations Slots Searching")
})
setInterval(()=>{
    searchForSlots().catch(err => {
        console.log("Error at INDEX", err);
    })
},300000)


app.listen(PORT,()=> console.log(`app is listening on: ${PORT}`));