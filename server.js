const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const app = express();
const hospitals = require("./routes/hospitals");
const connectDB = require("./config/db");

app.use(express.json());
connectDB();

app.use("/api/v1/hospitals", hospitals);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log("Server running in ", process.env.NODE_ENV, " mode in port", PORT)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
