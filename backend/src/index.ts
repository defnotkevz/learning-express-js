import "dotenv/config";
import express from "express";
import connectToDatabase from "./config/db";
import cors from "cors";
import {APP_ORIGIN, PORT} from "./constants/env";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import catchErrors from "./utils/catchErrors";
import {OK} from "./constants/statusCodes";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: APP_ORIGIN, credentials: true}));
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.status(OK).json({status: "Healthy"});
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // await connectToDatabase();
});
