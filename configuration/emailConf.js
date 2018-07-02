const email = require("nodemailer");

let mailer = {};

    mailer.transporter = email.createTransport({
        service:"Gmail",
        auth:{
            user:"julian.geekhubs@gmail.com",
            pass:"1234QWEr"
        }
    },
    {
        from: "julian.geekhubs@gmail.com",
        header:{

        }
    });


module.exports = mailer;