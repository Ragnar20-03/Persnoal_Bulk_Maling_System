const nodemailer = require('nodemailer');
const htmlTemplate = require('./htmlBodyTemplate')

// Create a transporter object using SMTP transport
function sendMail( obj ) // obj is one row json object
{
    console.log("to is : " , obj);
    return new Promise((resolve , reject ) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'roshanpp20@gmail.com',
            pass: 'ihhs rjdp buew zfia'
        }
    });
    
    // Setup email data
    let mailOptions = {
        from: 'roshanpp20@gmail.com', // Sender address
        to : obj.email, // List of receivers
        subject: 'Test Email', // Subject line
        // text: 'Hello, this is a test email from Node.js.', // Plain text body
        // // html: '<b>Hello, this is a test email from Node.js.</b>' // HTML body
        html: htmlTemplate(obj) // HTML body
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("error is : " , error);
            reject (error)
        }
        console.log('Message sent: %s', info.messageId);
        resolve(info)
    });

 }) // promise ending
}

module.exports = sendMail