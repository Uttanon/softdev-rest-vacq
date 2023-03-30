const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config/config.env" });
const cors = require("cors");
const app = express();
const hospitals = require("./routes/hospitals");
const appointments = require("./routes/appointments");
const auth = require("./routes/auth");
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
connectDB();

app.use("/api/v1/hospitals", hospitals);
app.use("/api/v1/appointments", appointments);
app.use("/api/v1/auth", auth);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        "Server running in ",
        process.env.NODE_ENV,
        " mode in port",
        PORT
    )
);

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
