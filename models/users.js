let conn = require('../connections/mysqlconnection');

class UserModel {
    getAll(cb) {
        if (!conn) return cb("no se ha podido crear la conexion")
        const SQL = "SELECT * FROM clientes;"
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }
    findUser(Usuario, cb) {
        if (!conn) return cb("No se ha podido crear la conexión")
        const SQL = "SELECT * FROM clientes WHERE Usuario LIKE '%" + Usuario + "%';";
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }

     findUserByEmail(email){ //para comprobar el email si existe o no
         return new Promise((resolve, reject)=>{
             if (!conn) reject ("No existe conexión");
             const SQL =`SELECT * FROM clientes where Email ='${email}';`;
             conn.query(SQL, (error, rows)=>{
                 if(error) return reject(error);
                 else return resolve(rows);
             })
         });
    }

    // Comprobar un usuario con un nombre o email
    getUserByEmailOrUsername( usua, email){
        return new Promise((resolve, reject)=>{
            if(!conn) return reject("No existe conexión");
            let SQL = `SELECT * FROM clientes where Usuario ='${usua}' or email ='${email}';`
            conn.query(SQL,(error, rows)=>{
                if(error) return reject(error);
                else return resolve(rows);
            })
        })
    };
    // Registrar un usuario
    insertUser(data){
        return new Promise((resolve, reject)=>{
            if(!conn) return reject("No existe conexión");
            const SQL = `INSERT INTO clientes (Usuario,email,password,hash) VALUES ('${data.usua}','${data.email}','${data.passw}','${data.hash}');`;
            conn.query(SQL, (error, rows)=>{
                if(error) return reject(error);
                else return resolve(rows);
            })
        })
    }

    getUserByHash(hash){
        return new Promise((resolve,reject)=>{
            if(!conn) return reject('No existe conexión');
            let SQL = `SELECT * FROM clientes WHERE hash = '${hash}';`;
            conn.query(SQL,(error, rows)=>{
                if (error) return reject(error);
                else return resolve(rows);
            })
        })
    };


    // Activar usuario
    setActiveUser(hash){
        return new Promise ((resolve, reject)=>{
            if(!conn) return reject('No existe conexión');
            let SQL = `UPDATE clientes set active=1 , hash='' where hash='${hash}';`;
            conn.query(SQL, (error, rows)=>{
                if(error) return reject(error);
                else return resolve(rows);
            })
        })
    };


}

module.exports = UserModel;