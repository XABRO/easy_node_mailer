const env = require('./smtp.env');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	host: env.HOST,
	port: env.PORT,
	secure: true,
	auth: {
		user: env.USER,
		pass: env.SECRET_KEY
	}
});

var mailOptions = {
	from: env.USER, // sender address
	to: 'example@gmail.com', // list of receivers
	subject: 'SUBJECT',
	text: 'this is some text', 
	// html: '<b style="color: red">TEST HTML</b>'
}

var mailer = {};
mailer.transporter = transporter;
mailer.mailOptions = mailOptions;

module.exports = mailer;