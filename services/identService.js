class identService
//Como va a ser encriptada, en este caso, va a tener unos parametros random de enumeración para que no pueda coincidir
{
    getUUIDD (a,b){
        for (
            b=a='';
            a++<36;
            b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-'); 
        return b;
    }
}

module.exports = identService;