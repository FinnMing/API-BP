import { Router } from "express";
import userRouter from "./user/userRouter.js";
import postRouter from "./post/postRouter.js";

const router = Router();
router.use("/ping", (req, res) => {
    res.send("PONG");
});
router.use("/user", userRouter);
router.use("/post", postRouter);

export default router;
