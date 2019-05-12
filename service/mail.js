const mailer = require('../config/smtp.config');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

exports.sendEmail = async (req, res)=>{
    try{

        console.log('req.body', req.body);
        if(req.body){

            var emailVariables = {
                title1 : req.body.heading1,
                link1 : req.body.link1,
                detail1: req.body.details1,

                title2 : req.body.heading2,
                link2 : req.body.link2,
                detail2: req.body.details2,

                title3 : req.body.heading3,
                link3 : req.body.link3,
                detail3: req.body.details3,

                title4 : req.body.heading4,
                link4 : req.body.link4,
                detail4: req.body.details4,

                title5 : req.body.heading5,
                link5 : req.body.link5,
                detail5: req.body.detail1s5
            }
        }


        var emailArray = req.body.emails.split(',');

        console.log("emailArrayemailArrayemailArray", emailArray);

        var transporter = mailer.transporter;
           
        var mailOptions = mailer.mailOptions;
        mailOptions.to = emailArray;
        mailOptions.subject = req.body.subject;

        // var emailVariables = {
        //     name: "Akshay",
        //     job: "backend developer",
        //     company: "WAPology"
        // }

        var template = fs.readFileSync(path.resolve(__dirname,"../views/mainpage.html"),{encoding:'utf-8'});
        mailOptions.html = ejs.render(template, emailVariables)
    
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    catch(e){
        throw new Error(e);
    }
}