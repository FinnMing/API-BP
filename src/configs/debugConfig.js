import debug from "debug";

class log {
    debug;
    constructor(scoope = "SYSTEM") {
        this.debug = debug(`WP:${scoope}`);
    }

    error(place = "", error = "🤬") {
        this.debug(`🔴 ERROR - ${place}:  ${error}`);
    }

    warn(place = "", warning = "🤬") {
        this.debug(`🟠 WARN - ${place}:  ${warning}`);
    }

    info(place = "", info = "🤬") {
        this.debug(`🔵 INFO - ${place}:  ${info}`);
    }

    success(place = "", message = "🤬") {
        this.debug(`🟢 SUCCESS - ${place}:  ${message}`);
    }
}

const createDebug = (scoope) => new log(scoope);

export default createDebug;
