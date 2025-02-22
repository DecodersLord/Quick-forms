import { createLogger, format, transports } from "winston";

const logger = createLogger({
    level: "error",
    format: format.combine(format.timestamp(), format.json()),
    transports: [
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.Console(),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new transports.Console({
            format: format.simple(),
        })
    );
}

export default logger;
