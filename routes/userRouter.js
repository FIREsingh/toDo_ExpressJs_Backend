import { Router } from "express";
import {
  getAllData,
  deleteData,
  updateData,
  insertData,
} from "../controllers/userContoller.js";

const userRouter = Router();
userRouter.route("/getAll").get(getAllData);
userRouter.route("/delete/:id").delete(deleteData);
userRouter.route("/update/:id").put(updateData);
userRouter.route("/insert").post(insertData);

export default userRouter;
