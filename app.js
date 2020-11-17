const { google } = require('googleapis');
const keys = require('./keys.json');
const ejs = require('ejs');
const express = require('express');
const path = require('path');
const app = express();


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
app.get('/afterschool', (req, res) => {
    res.render('afterschool');
});
app.get('/activities', (req, res) => {
    res.render('activities');
});
app.get('/css-tutorial', (req, res) => {
    res.render('css-tutorial');
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
};


app.listen(8080, () => console.log('Server up and running'));