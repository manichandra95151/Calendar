import React from 'react';
import { formatDate } from '../../utils/calender';
import { events } from '../../data/events';
import { format } from 'date-fns';

function CalendarHeader({ currentDate, onToday, onSelectDay }) {
 
// Get the current date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
  const createDate = (day, hoursOffset = 0) => {
    const date = new Date(currentYear, currentMonth, day);
    date.setHours(hoursOffset);
    return format(date, 'yyyy-MM-dd');
  };
 
  const dayEvents=events.filter(event => event.date === createDate(today.getDate()));
  const todayObject = {
    date: today,
    dayOfMonth: today.getDate(),
    isCurrentMonth: true,
    isToday: true,
    events:dayEvents
  };

  return (
    <div className="border-l-4 border-[#40493b] mb-2 rounded-lg shadow-md p-4">
      <div className='flex flex-col gap-1'>
        <div className="">
          <h2 className="text-lg font-bold text-blue-600">Today</h2>
          <p className="text-sm text-gray-700">{formatDate(new Date(), 'EEEE, MMMM d, yyyy')}</p>
        </div>
        <div className="">
          <button
            onClick={() => onSelectDay(todayObject)}
            className="mt-3 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            View Today's Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarHeader;
