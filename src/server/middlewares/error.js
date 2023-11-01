import debug from "../../configs/debugConfig.js";
import CustomError from "../models/customError.js";

const log = debug("SYSTEM");

export const generalError = (error, req, res, next) => {
    switch (error.logType) {
        case "warn":
            log.warn("generalError", error.message);
            break;
        case "error":
            log.error("generalError", error.message);
            break;
    }

    res.status(error.statusCode || 500).json({
        error: error.publicMessage || "Something went wrong",
    });
};

export const notFoundError = (req, res, next) => {
    const error = new CustomError(
        "Path not found",
        404,
        "Endpoint not found",
        "warn"
    );
    next(error);
};
