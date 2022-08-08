const nodemailer = require('nodemailer');
const {google} =require('googleapis');


const {
    CLIENT_ID,
    CLIENT_SECRET,
    REFRES
  } = process.env



//Config mailer

const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.URI
);

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

async function sendEmail() {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                type: 'OAUTH2',
                user:'',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken:accessToken
            },
        })
        const mailOptions = {
            from: 'Unknow Code Admin',
            to: '',
            subject: 'NodeMailer prueba',
            html: `<h1>Esto es una prueba del NodeMailer </h1>`
        };

        const result = await transporter.sendEmail(mailOptions);
        
        return result

    } catch (error) {
        console.log(error)
    }
}

mopdule.exports = sendEmail