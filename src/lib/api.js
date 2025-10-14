// const API_BASE = "http://localhost:4000/api";

// Mock implementation for dev. Swap to real fetch later.
import mockTimesheets from "../mock/timesheets.json";
import mockTimesheetDetails from "../mock/timesheetDetails.json";

export async function getTimesheets() {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 300));
  // return a copy to avoid accidental mutations
  return JSON.parse(JSON.stringify(mockTimesheets));
}

export async function getTimesheetDetails(week) {
  // simulate latency
  await new Promise((res) => setTimeout(res, 300));
  // In a real app, use `week` to fetch `/api/timesheet/${week}`
  console.log(mockTimesheetDetails);
  console.log(week);
  const result = mockTimesheetDetails.find(item => item.week === Number(week));
  console.log(result);
  return JSON.parse(JSON.stringify(result));
//   return mockTimesheetDetails;
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
