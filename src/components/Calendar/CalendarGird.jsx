import React from 'react';
import CalendarDay from './CalendarDay';
import { getCalendarWeeks } from '../../utils/calender';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function CalendarGrid({ days, onSelectDay }) {
  const weeks = getCalendarWeeks(days);

  return (
    <div className="bg-white rounded-lg shadow flex flex-col h-full max-h-[80vh]"> {/* Ensure full height */}
      <div className="grid grid-cols-7 bg-gray-100">
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className='flex-1 overflow-y-auto'> {/* Allow this section to take available space and scroll if needed */}
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7">
            {week.map((day) => (
              <CalendarDay key={day.date.toISOString()} day={day} onClick={onSelectDay} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarGrid;