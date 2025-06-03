import express from "express";
import {
  doctorList,
  getDoctorById,
  loginDoctor,
} from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/get-doctor", getDoctorById);
doctorRouter.post("/login", loginDoctor);

export default doctorRouter;
