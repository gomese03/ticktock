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
  return JSON.parse(JSON.stringify(mockTimesheetDetails));
//   return mockTimesheetDetails;
}

/*
export async function getTimesheets() {
  const res = await fetch("https://your-api.com/timesheets", {
    headers: { Authorization: `Bearer ${sessionStorage.getItem("authToken")}` },
  });
  if (!res.ok) throw new Error("Failed to fetch timesheets");
  return res.json();
}
*/
