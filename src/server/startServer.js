import debug from "../configs/debugConfig.js";
import app from "./app.js";
const log = debug("SERVER");

const startServer = async (port) => {
    try {
        const server = await app.listen(port);

        server.on("error", (error) => {
            throw error;
        });

        log.info(
            "startServer",
            `El servidor está escuchando en http://localhost:${port}`
        );
    } catch (error) {
        if (error.code === "EADDRINUSE") {
            log.error(
                "startServer",
                `${error.code}: port ${port} already in use.`
            );
        } else {
            log.error("startServer", `${error.code}: ${error.message} .`);
        }
    }
};

export default startServer;
