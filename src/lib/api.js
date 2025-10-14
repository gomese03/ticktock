// Mock implementation for dev. Swap to real fetch later.
import mockTimesheets from "../mock/timesheets.json";

export async function getTimesheets() {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 300));
  // return a copy to avoid accidental mutations
  return JSON.parse(JSON.stringify(mockTimesheets));
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
