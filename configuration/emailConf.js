const email = require("nodemailer");

let mailer = {};

    mailer.transporter = email.createTransport({
        service:"Gmail",
        auth:{
            user:"julian.porgar@gmail.com",
            pass:"asaber726"
        }
    },
    {
        from: "julian.porgar@gmail.com",
        header:{

        }
    });


module.exports = mailer;