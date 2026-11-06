import express from "express";
import userRoute from "./modules/user/user.route.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/users", userRoute);

export default app;
