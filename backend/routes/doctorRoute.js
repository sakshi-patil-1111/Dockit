import express from "express";
import { doctorList, getDoctorById } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/get-doctor", getDoctorById);

export default doctorRouter;
