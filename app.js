const { google } = require('googleapis');
const keys = require('./keys.json');
const ejs = require('ejs');
const express = require('express');
const path = require('path');
const app = express();
app.use('/images', express.static(path.join(__dirname, 'images')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/csstutorialassets', express.static(path.join(__dirname, 'csstutorialassets')));
app.use('/model', express.static(path.join(__dirname, 'model')));




app.get('/class', (req, res) => {
    res.render('class');
});
app.get('/normal', (req, res) => {
    res.render('normal');
});
app.get('/map', (req, res) => {
    res.render('map');
});
app.get('/afterschool', (req, res) => {
    res.render('afterschool');
});
app.get('/activities', (req, res) => {
    res.render('activities');
});
app.get('/css-tutorial', (req, res) => {
    res.render('css-tutorial');
});
app.get('/secnormal', (req, res) => {
    res.render('secnormal');
});
app.get('/secafterschool', (req, res) => {
    res.render('secafterschool');
});


const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
);


client.authorize(function (err, tokens) {

    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Connected!');
        gsrun(client);
    }
});


async function gsrun(cl) {
    const gsapi = google.sheets({ version: 'v4', auth: cl });


    const opthome = {
        spreadsheetId: '1Cc9H1GeEhfizYRAWuhUZzS8XGwPV3vLuyK-vl6edThk',
        range: 'home!A2:A50'
    };


    app.get('/', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(opthome);
        let dataArray = data.data.values;
        res.render('home', { data: dataArray });
    });

    const optcpp1 = {
        spreadsheetId: '1Cc9H1GeEhfizYRAWuhUZzS8XGwPV3vLuyK-vl6edThk',
        range: 'cpp1!A2:J17'
    };


    app.get('/cpp1', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optcpp1);
        let dataArray = data.data.values;
        res.render('cpp1', { data: dataArray });
    });

    const optcpp2 = {
        spreadsheetId: '1Cc9H1GeEhfizYRAWuhUZzS8XGwPV3vLuyK-vl6edThk',
        range: 'cpp2!A2:J17'
    };


    app.get('/cpp2', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optcpp2);
        let dataArray = data.data.values;
        res.render('cpp2', { data: dataArray });
    });

    const optjava = {
        spreadsheetId: '1Cc9H1GeEhfizYRAWuhUZzS8XGwPV3vLuyK-vl6edThk',
        range: 'java!A2:J17'
    };


    app.get('/java', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optjava);
        let dataArray = data.data.values;
        res.render('java', { data: dataArray });
    });

    const optweb = {
        spreadsheetId: '1Cc9H1GeEhfizYRAWuhUZzS8XGwPV3vLuyK-vl6edThk',
        range: 'web!A2:D13'
    };


    app.get('/web', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optweb);
        let dataArray = data.data.values;
        res.render('web', { data: dataArray });
    });

    const optpython = {
        spreadsheetId: '1Cc9H1GeEhfizYRAWuhUZzS8XGwPV3vLuyK-vl6edThk',
        range: 'python!A2:D13'
    };


    app.get('/python', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optpython);
        let dataArray = data.data.values;
        res.render('python', { data: dataArray });
    });

    const optseccpp = {
        spreadsheetId: '18iPnwRUtAKua9FOZDl1poRZ5ZifLyIFRs7xPOacADC0',
        range: 'Algorithm!A2:D13'
    };


    app.get('/seccpp', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optseccpp);
        let dataArray = data.data.values;
        res.render('seccpp', { data: dataArray });
    });

    const optsecpygui = {
        spreadsheetId: '18iPnwRUtAKua9FOZDl1poRZ5ZifLyIFRs7xPOacADC0',
        range: 'Python GUI!A2:D13'
    };

    app.get('/secpygui', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optsecpygui);
        let dataArray = data.data.values;
        res.render('secpygui', { data: dataArray });
    });

    const optsecctf = {
        spreadsheetId: '18iPnwRUtAKua9FOZDl1poRZ5ZifLyIFRs7xPOacADC0',
        range: 'CTF!A2:D13'
    };

    app.get('/secctf', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optsecctf);
        let dataArray = data.data.values;
        res.render('secctf', { data: dataArray });
    });

    const optmedia = {
        spreadsheetId: '18iPnwRUtAKua9FOZDl1poRZ5ZifLyIFRs7xPOacADC0',
        range: 'mutimedia!A2:D9'
    };


    app.get('/mutimedia', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optmedia);
        let dataArray = data.data.values;
        res.render('mutimedia', { data: dataArray });
    });

    const optOOP = {
        spreadsheetId: '18iPnwRUtAKua9FOZDl1poRZ5ZifLyIFRs7xPOacADC0',
        range: 'OOP!A2:D9'
    };


    app.get('/OOP', async function (req, res) {
        let data = await gsapi.spreadsheets.values.get(optOOP);
        let dataArray = data.data.values;
        res.render('OOP', { data: dataArray });
    });
};


app.listen(8080, () => console.log('Server up and running'));