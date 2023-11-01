class CustomError extends Error {
    code;

    constructor(message, statusCode, publicMessage, logType) {
        super(message);
        this.statusCode = statusCode;
        this.publicMessage = publicMessage;
        this.logType = logType;
    }
}

export default CustomError;
