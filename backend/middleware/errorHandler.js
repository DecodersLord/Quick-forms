import customError from "../utils/customError.js";
import logger from "../utils/logger.js";

const errorHandler = (err, req, res, next) => {
    logger.error(err.message, { stack: err.stack });

    const errStatus = err.statusCode || 500;
    const errMsg = err.message || "Something went wrong";

    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === "development" ? err.stack : {},
    });
};

export default errorHandler;
