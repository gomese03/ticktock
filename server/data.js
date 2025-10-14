export const timesheets = [
  { week: 1, date: "1 - 5 January, 2024", status: "COMPLETED" },
  { week: 2, date: "8 - 12 January, 2024", status: "COMPLETED" },
  { week: 3, date: "15 - 19 January, 2024", status: "INCOMPLETE" },
  { week: 4, date: "22 - 26 January, 2024", status: "COMPLETED" },
  { week: 5, date: "28 January - 1 February, 2024", status: "MISSING" }
];

export const timesheetDetails = [
  {
    week: 3,
    totalHours: 40,
    days: [
      { date: "Jan 21", tasks: ["Homepage Development", "Homepage Development"] },
      { date: "Jan 22", tasks: ["Homepage Development", "Homepage Development", "Homepage Development"] },
      { date: "Jan 23", tasks: ["Homepage Development", "Homepage Development", "Homepage Development"] },
      { date: "Jan 24", tasks: ["Homepage Development", "Homepage Development", "Homepage Development"] },
      { date: "Jan 25", tasks: [] }
    ]
  },
    {
    week: 2,
    totalHours: 40,
    days: [
      { date: "Jan 15", tasks: ["API Development"] },
      { date: "Jan 16", tasks: ["API Development", "API Development", "Homepage Development"] },
      { date: "Jan 17", tasks: ["Hosting"] },
      { date: "Jan 18", tasks: ["API Development"] },
      { date: "Jan 19", tasks: [] }
    ]
  },
    {
    week: 1,
    totalHours: 30,
    days: [
      { date: "Jan 28", tasks: ["API Development"] },
      { date: "Jan 29", tasks: [] },
      { date: "Jan 30", tasks: [] },
      { date: "Jan 31", tasks: [] },
      { date: "Feb 1", tasks: [] }
    ]
  },  
    {
    week: 4,
    totalHours: 5,
    days: [
      { date: "Jan 8", tasks: ["API Development"] },
      { date: "Jan 9", tasks: [] },
      { date: "Jan 10", tasks: [] },
      { date: "Jan 11", tasks: [] },
      { date: "Jan 12", tasks: [] }
    ]
  }, 
    {
    week: 5,
    totalHours: 0,
    days: [
      { date: "Jan 8", tasks: [] },
      { date: "Jan 9", tasks: [] },
      { date: "Jan 10", tasks: [] },
      { date: "Jan 11", tasks: [] },
      { date: "Jan 12", tasks: [] }
    ]
  }
];
