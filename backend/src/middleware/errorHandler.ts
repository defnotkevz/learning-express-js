import {ErrorRequestHandler} from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`Path: ${req.path}`, err);
  return res.status(500).send("Internal Server Error");
};
