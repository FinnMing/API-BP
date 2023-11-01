import express from "express";
import cors from "cors";
import morgan from "morgan";
import options from "../configs/corsConfig.js";
import router from "../router/router.js";
import { generalError, notFoundError } from "./middlewares/error.js";

const app = express();

app.use(cors(options));

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());

app.use("/", router);

app.use(notFoundError);
app.use(generalError);

export default app;
