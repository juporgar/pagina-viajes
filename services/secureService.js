const Bcrypt  = require('bcrypt');


//Para encryptar la contraseña

class secureService
{
    encryptPass(pass)
    {
        return Bcrypt.hashSync(pass,10);
    }
    comparePass(pass, hash){
        return Bcrypt.compareSync(pass, hash);
    }
}

module.exports=secureService;