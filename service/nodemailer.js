// NO partials

const util = require('util');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const juice = require('nodemailer-juice');

exports.sendMail = async function (mail) {
    const testEmailAccount = await nodemailer.createTestAccount();
    const smtpTransport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testEmailAccount.user,
            pass: testEmailAccount.pass
        }
    });

    const options = {
        viewEngine: {
            extname: '.hbs',
            layoutsDir: 'views/email/',
            defaultLayout: 'layout'
        },
        extName: '.hbs',
        viewPath: 'views/email/'
    };

    smtpTransport.use('compile', hbs(options));
    smtpTransport.use('compile', juice());

    const sendMail = util.promisify(smtpTransport.sendMail);
    const response = await smtpTransport.sendMail(mail);

    response.url = nodemailer.getTestMessageUrl(response);

    return response;
};
