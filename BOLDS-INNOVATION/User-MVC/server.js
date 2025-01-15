import express from "express";
import cors from "cors";
import router from "./routes/apiRoutes.js";

const port = process.env.PORT || 8081;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(port, function () {
    console.log(`API hosted at: http://localhost:${port}`);
});