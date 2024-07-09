import {ErrorRequestHandler} from "express";
import {INTERNAL_SERVER_ERROR} from "../constants/statusCodes";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`Path: ${req.path}`, err);
  return res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
};

export default errorHandler;
