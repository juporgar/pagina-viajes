const Bcrypt  = require('bcrypt');


//Para encryptar la contraseña

class secureService
{
    encryptPass(pass)
    {
        return Bcrypt.hashSync(pass,10);
    }
}

module.exports=secureService;