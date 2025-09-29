"use client";
import Link from "next/link";
import { fetchUpcomingEvents } from "@/Database/fetchPastEvents";
import { useEffect, useState } from "react";
import { EventInterface } from "../../Types";

const UpcomingEvent = ({ event }: { event: EventInterface }) => {
  return (
    <div className="flex flex-col break:flex-row  border border-gray-300 rounded-lg overflow-hidden w-max break:w-full items-center">
      <div className="w-[300px] break:w-[175px] md:w-[200px] lg:w-[250px] aspect-square bg-gray-200 flex-shrink-0">
        {event.ImageLink ? (
          <img
            src={event.ImageLink}
            alt={event.Title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-400"></div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-lg text-gray-500 py-2">{`${event.Month} ${event.Day}`}</div>
        <div className="text-xl md:text-2xl font-bold mt-2 py-2">{event.Title}</div>
        <div className="text-xl md:text-xl font-bold mt-2 py-2">{event.Position} | {event.Firm}</div>

        <span className="text-lg py-2">{event.Speakers}</span>
        <div className="text-md md:text-lg text-gray-700">{event.Venue}</div>
      </div>
      <div className="p-5">
        <Link
          className="bg-background px-3 py-2 text-2xl text-white rounded-lg"
          href={event.Link}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  useEffect(() => {
    const setEventsData = async () => {
      const result = await fetchUpcomingEvents();
      console.log(result);
      setUpcomingEvents(result);
    };
    setEventsData();
  }, []);
  return (
    <section className="bg-gray-50 pt-20 pb-10">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
        Upcoming Events
      </h1>
      <div className="flex flex-col items-center px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
        {upcomingEvents.length != 0 &&
          upcomingEvents.map((upcomingEvent, idx: number) => (
            <UpcomingEvent event={upcomingEvent} key={idx} />
          ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
