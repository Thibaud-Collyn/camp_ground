import express from "express";
import campgroundRoutes from "./routes/campgroundRoutes.js";

const app = express();

app.use("/campgrounds", campgroundRoutes);

const port = 5001;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});