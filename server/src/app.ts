import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.set("useFindAndModify", false);

mongoose
  .connect(process.env.MONGO_URL as string, options)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  );

app.use(cors());
app.use(router);
