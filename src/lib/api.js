// const API_BASE = "http://localhost:4000/api";

// Mock implementation for dev. Swap to real fetch later.
import mockTimesheets from "../mock/timesheets.json";
import mockTimesheetDetails from "../mock/timesheetDetails.json";

export async function getTimesheets() {
  await new Promise((r) => setTimeout(r, 300));
  return JSON.parse(JSON.stringify(mockTimesheets));
}

export async function getTimesheetDetails(week) {
  await new Promise((res) => setTimeout(res, 300));
  const result = mockTimesheetDetails.find(item => item.week === Number(week));
  console.log(result);
  return JSON.parse(JSON.stringify(result));
}

// export async function getTimesheets() {
//   const res = await fetch(`${API_BASE}/timesheets`);
//   if (!res.ok) throw new Error("Failed to fetch timesheets");
//   return res.json();
// }

// export async function getTimesheetDetails(week) {
//   const res = await fetch(`${API_BASE}/timesheet/${week}`);
//   if (!res.ok) throw new Error("Failed to fetch timesheet details");
//   return res.json();
// }
