import React from 'react';
import EventItem from './EventItem';

const CalendarDay = React.memo(({ day, onClick })  => {
  const { date, dayOfMonth, isCurrentMonth, isToday, events } = day;

  // Only show the first 2 events
  const visibleEvents = events.slice(0, 2);
  const hasMoreEvents = events.length > 2;

  return (
    <div
      className={`h-28 p-1 border border-gray-200 overflow-hidden transition-all
      ${!isCurrentMonth ? 'bg-gray-50 text-gray-400' : 'bg-white text-gray-900'}
      ${isToday ? 'ring-2 ring-indigo-500 ring-inset' : ''}
      hover:bg-[#c8fcea]/50 cursor-pointer`}
      onClick={() => onClick(day)}
    >
      <div className="flex justify-between items-start">
        <div
          className={`h-6 w-6 flex items-center justify-center text-sm rounded-full
          ${isToday ? 'bg-indigo-500 text-white' : ''}`}
        >
          {dayOfMonth}
        </div>
      </div>
      <div className="mt-1">
        {visibleEvents.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
        {hasMoreEvents && (
          <button
            className="text-xs text-indigo-600 font-medium mt-1 hover:text-indigo-800 transition-colors "
            onClick={(e) => {
              e.stopPropagation();
              onClick(day);
            }}
          >
            +{events.length - 2} more
          </button>
        )}
      </div>
    </div>
  );
});

export default CalendarDay;