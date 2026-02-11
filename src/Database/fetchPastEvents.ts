import fetchCSVData from "./fetchGoogleSheets";
import { PastEventInterface } from "@/Types";

const PRECEDENCE = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// A helper to get the index of a month
const monthIndex = (month: string): number => PRECEDENCE.indexOf(month);

const segregatePastEvents = (pastEvents: PastEventInterface[]) => {
  const parsedEvents: Record<number, PastEventInterface[]> = {};

  pastEvents.forEach((event) => {
    const eventYear = Number(event.Year);
    const monthIdx = monthIndex(event.Month);

    const academicYearStart = monthIdx < monthIndex("Sep") ? eventYear - 1 : eventYear;

    if (!parsedEvents[academicYearStart]) parsedEvents[academicYearStart] = [];
    parsedEvents[academicYearStart].push(event);
  });

  Object.values(parsedEvents).forEach((events) => {
    events.sort((a, b) => {
      const aMonthIdx = monthIndex(a.Month);
      const bMonthIdx = monthIndex(b.Month);
    
      const aAdjusted = aMonthIdx >= monthIndex("Sep") ? aMonthIdx : aMonthIdx + 12;
      const bAdjusted = bMonthIdx >= monthIndex("Sep") ? bMonthIdx : bMonthIdx + 12;
    
      if (aAdjusted !== bAdjusted) return bAdjusted - aAdjusted;
      return Number(b.Day) - Number(a.Day);
    });
    console.log("Sorted order:", events.map(e => `${e.Month} ${e.Day}`));
  });

  const years = Object.keys(parsedEvents)
    .map(Number)
    .sort((a, b) => a - b);

  return { parsedEvents, years };
};

export const fetchPastEvents = async () => {
  const pastEventsURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7_vuL9hEs__RLf9fT6s1eLuX9NFk0WjDi7jYWn8grgKIOzwvQ0IM6HhDLj3maDQgROq9-dXpRY1p3/pub?gid=78096891&single=true&output=csv";
  const CSVData = await fetchCSVData(pastEventsURL);
  const result = segregatePastEvents(CSVData.data);
  return { segregatedEvents: result.parsedEvents, years: result.years };
};

export const fetchUpcomingEvents = async () => {
  const upcomingEventsURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7_vuL9hEs__RLf9fT6s1eLuX9NFk0WjDi7jYWn8grgKIOzwvQ0IM6HhDLj3maDQgROq9-dXpRY1p3/pub?gid=0&single=true&output=csv";
  const CSVData = await fetchCSVData(upcomingEventsURL);
  return CSVData.data;
};
