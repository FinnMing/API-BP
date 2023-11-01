import "./configs/dotenvConfig.js";
import debug from "./configs/debugConfig.js";
import startServer from "./server/startServer.js";

const log = debug("root");

try {
    const port = process.env.PORT ?? 8080;

    startServer(+port);
} catch (error) {
    log.error(error);
}
