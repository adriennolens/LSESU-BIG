"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PastEventInterface } from "../../Types";
import { fetchPastEvents } from "@/Database/fetchPastEvents";

const Event = ({ event }: { event: PastEventInterface }) => {
  return (
    <div className="flex flex-col break:flex-row  border border-gray-300 rounded-lg overflow-hidden w-11/12 break:w-full items-center">
      <div className="w-[250px] break:w-[175px] md:w-[200px] lg:w-[250px] aspect-square bg-gray-600 flex-shrink-0">
        {event.ImageLink ? (
          <img
            src={event.ImageLink}
            alt={event.Title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-600"></div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow w-full">
        <div className="text-lg text-gray-500">{`${event.Month} ${event.Day} ${event.Year}`}</div>
        <div className="text-xl md:text-2xl mt-2 flex flex-col">
          <span className="font-bold text-xl">{event.Title}</span>
          <span className="text-lg">{event.Speakers}</span>
        </div>

        <span className="text-base">{event.Position}</span>
        <Link href={event.Link || ""}>
          <button className="bg-background px-3 py-2 text-white rounded-lg mt-5 self-start">
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

const YearButton = ({
  index,
  setIndex,
  text,
  idx,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  idx: number;
}) => {
  return (
    <span
      className={`${
        index === idx ? "bg-background text-white" : ""
      } w-full text-center py-2 cursor-pointer`}
      onClick={() => setIndex(idx)}
    >
      {text}
    </span>
  );
};

const PastEvents = () => {
  const [index, setIndex] = useState(2023); // current year index
  const [pastEvents, setPastEvents] = useState<Record<number, PastEventInterface[]>>({});
  const [years, setYears] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  useEffect(() => {
    const setEventsData = async () => {
      const result = await fetchPastEvents();
      setPastEvents(result.segregatedEvents);
      setYears(result.years);
    };
    setEventsData();
  }, []);

  // reset pagination whenever the year changes
  useEffect(() => {
    setCurrentPage(1);
  }, [index]);

  const eventsForYear = pastEvents[index] || [];
  const totalPages = Math.ceil(eventsForYear.length / eventsPerPage);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = eventsForYear.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <section className="bg-gray-50 py-32">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
        Past Events
      </h1>

      {/* Year buttons */}
      <div className="flex justify-center text-xl mb-10 px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-96">
        {years.map((year, idx: number) => (
          <YearButton
            key={idx}
            index={index}
            setIndex={setIndex}
            text={`${year}-${year + 1}`}
            idx={year}
          />
        ))}
      </div>

      {/* Events for selected year */}
      <div className="flex flex-col items-center px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 gap-4">
        {currentEvents.map((event: PastEventInterface, idx: number) => (
          <Event key={idx} event={event} />
        ))}
      </div>

      {/* Pagination controls */}
      {eventsForYear.length > eventsPerPage && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg border bg-background disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg border bg-background disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default PastEvents;
