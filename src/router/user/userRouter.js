import { Router } from "express";

const userRouter = Router();

userRouter.use("/", (req, res) => {
    res.send("USER");
});

export default userRouter;
