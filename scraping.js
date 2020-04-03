const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://remoteok.io/remote-dev-jobs').then((res) => {
    const $ = cheerio.load(res.data);
    const jobs = [];
    
    $('.job').each( ( index, element) => {
        console.log($(element).children('.company').children('a').children('h2').text());
    })
})


// /html/body/notice/div[6]/div[4]/table/tbody[1]/tr[2]/td[2]/h2