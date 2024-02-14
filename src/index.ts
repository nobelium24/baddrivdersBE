import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { connectToDatabase } from "./database/database";
import router from "./routes/routes";

const app:Application = express();
dotenv.config();
app.use(helmet());
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: "50mb"}));
app.use(cors());
app.use("/api", router);



connectToDatabase().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error("Error connecting to database", error);
});
