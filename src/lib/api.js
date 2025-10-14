const API_BASE = "http://localhost:4000/api";

export async function getTimesheets() {
  const res = await fetch(`${API_BASE}/timesheets`);
  if (!res.ok) throw new Error("Failed to fetch timesheets");
  return res.json();
}

export async function getTimesheetDetails(week) {
  const res = await fetch(`${API_BASE}/timesheet/${week}`);
  if (!res.ok) throw new Error("Failed to fetch timesheet details");
  return res.json();
}
