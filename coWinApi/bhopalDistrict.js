const fetch = require('node-fetch');
const moment = require('moment');

const nextDate = moment().add(1,'days').format('D-M-YYYY');


const getBhopalDetails = async () => {
    const response = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=312&date=${nextDate}`,{
        method: 'GET',
        headers: {
            'Accept-language': 'hi_IN',
            'Accept':'application/json',
            //Host: 'cdn-api.co-vin.in',
            Connection: 'keep-alive',
            Host: 'cdn-api.co-vin.in',
            'User-Agent': 'request',
            //'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
        }
    })
    console.log(response)
    const json = await response.json()

    let availabe = false
    const results = json.centers.map((center)=>{
        console.log(center.sessions[0].min_age_limit)
        if(center.sessions[0].min_age_limit == 18 && center.sessions[0].available_capacity > 0) {
            availabe = true
        }
    })
    return availabe;
};

module.exports = getBhopalDetails;