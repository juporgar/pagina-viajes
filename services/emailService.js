const Hbs = require('nodemailer-express-handlebars');
const Path = require('path');
const Email = require('../configuration/emailConf');

class emailService
{
    // Mandar un correo para registrarte
    sendRegisterEmail(data)
    {
        Email.transporter.use('compile',Hbs({
            viewEngine:'hbs',
            extName:'.hbs',
            viewPath: Path.join(__dirname,'../views/emails')
        }));
        let message ={
            to:data.email,
            subject: 'Registro',
            template: 'email',
            context:{
                Usuario: data.usua,
                hash: data.hash
            }
        }
        Email.transporter.sendMail(message,(error, info)=>{
            if(error){
                return console.log('Error' + error);
            }
            Email.transporter.close();
            return console.log("Email enviado");
        })
    }

}

module.exports=emailService;