const fs = require("fs");
const winston = require("winston");
const WinstonRotateFile = require("winston-daily-rotate-file");

const { combine, timestamp, printf } = winston.format;

// converts the date object to local time string
const tsFormat = () => (new Date().toISOString());


const myFormat = printf(info => {
  const message = (typeof(info.message) === "object") ? JSON.stringify(info.message) : info.message;
  return `${tsFormat(info.timestamp)} - ${info.level}: ${message}`;
});

const logDir = "logs";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const transports = [];
if (process.env.NODE_ENV !== "production") {
  // colorize the output to the console
  // winston console only if not production
  transports.push(
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: "debug", // level of log
    })
  );
} else {
  // generates the log files
  // files write for prod only
  transports.push(
    new (WinstonRotateFile)({
      filename: `${logDir}/-results.log`, // filename to be created
      timestamp: tsFormat,
      datePattern: "yyyy-MM-dd",
      prepend: true, // prepends date to name of file
      level: "info", // level of log
    })
  );
}
// winston logger to generate logs
let Logger = winston.createLogger({
  transports,
  format: combine(
    winston.format.colorize(),
    winston.format.json(),
    timestamp(),
    myFormat,

  ),
});

module.exports = Logger;
