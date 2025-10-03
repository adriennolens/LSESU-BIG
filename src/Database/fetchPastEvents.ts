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
  const parsedEvents: Record<string, PastEventInterface[]> = {};

  // Get unique years as numbers and sort them (optional)
  const uniqueYears = Array.from(
    new Set(pastEvents.map((event) => Number(event.Year))),
  ).sort((a, b) => a - b);

  uniqueYears.forEach((year) => {
    // Use the year as the key (as a string)
    parsedEvents[year] = pastEvents.filter((event) => {
      const eventYear = Number(event.Year);
      const eventMonthIdx = monthIndex(event.Month);

      // For the academic year starting in `year`:
      if (eventYear === year) {
        // The event must be in September or later in the same year.
        return eventMonthIdx >= monthIndex("Sep");
      } else if (eventYear === year + 1) {
        // The event must be before September in the next year.
        return eventMonthIdx < monthIndex("Sep");
      }
      return false;
    });
  });

  return { parsedEvents: parsedEvents, years: uniqueYears };
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
