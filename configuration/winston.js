const AppRoot = require('app-root-path');
const winston = require('winston');

let options = {
    file: {
        level: 'info',
        filename: `${AppRoot}/logs/app.log`,
        handleExceptions: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: winston.format.json()
    },
    console: {
        level: 'info',
        handleExceptions: true,
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    },
};
let logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false,
});
logger.stream = {
    write: function (message, encoding) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    },
};
module.exports = logger;