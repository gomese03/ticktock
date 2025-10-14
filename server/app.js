import express from "express";
import cors from "cors";
import { timesheets, timesheetDetails } from "./data.js";

const app = express();
app.use(cors());
app.use(express.json());

// GET all timesheets
app.get("/api/timesheets", (req, res) => {
  res.json(timesheets);
});

// GET details for a specific week
app.get("/api/timesheet/:week", (req, res) => {
  const week = Number(req.params.week);
  const detail = timesheetDetails.find((t) => t.week === week);
  if (!detail) {
    return res.status(404).json({ error: "Timesheet not found" });
  }
  res.json(detail);
});

export default app;
