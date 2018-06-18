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
    registroUser(Usu, ema, pass, cb) {
        if (!conn) return cb("No se ha podido crear la conexión")
        const SQL = `INSERT INTO clientes (Usuario,email,password) VALUES ('${Usu}','${ema}','${pass}');`;
        conn.query(SQL, (error, rows) => {
            if (error) return cb(error);
            else return cb(rows);
        })
    }
}

module.exports = UserModel;