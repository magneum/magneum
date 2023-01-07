var winston = require("winston");

var getLogger = (fileName = "application") => {
  var level = () => {
    var env = process.env.NODE_ENV || "development";
    var isDevelopment = env === "development";
    return isDevelopment ? "debug" : "warn";
  };

  winston.addColors({
    info: "italic green",
    notice: "bold cyan",
    debug: "rainbow",
    warn: "italic yellow",
    error: "bold red",
    crit: "inverse yellow",
    alert: "bold inverse red",
    emerg: "bold inverse magenta",
  });

  return winston.createLogger({
    level: level(),
    levels: {
      error: 0,
      warn: 1,
      info: 2,
      http: 3,
      debug: 4,
    },
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
      winston.format.colorize({ all: true }),
      winston.format.printf(
        (info: any) => `${info.timestamp}::${info.level}::${info.message}`
      )
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: "error.log",
        level: "error",
      }),
      new winston.transports.File({ filename: "all.log" }),
    ],
  });
};

export default getLogger();
