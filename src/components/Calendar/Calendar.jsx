import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGird';
import EventModal from './EventModal';
import { getCalendarDays, getNextMonth, getPrevMonth } from '../../utils/calender';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Calendar({ events }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const calendarDays = getCalendarDays(currentDate, events);

  const handlePrevMonth = () => {
    setCurrentDate(getPrevMonth(currentDate));
  };

  const handleNextMonth = () => {
    setCurrentDate(getNextMonth(currentDate));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  return (
    <div className="h-full flex flex-col">
      <CalendarHeader
        currentDate={new Date()}
        onToday={handleToday}
        onSelectDay={handleSelectDay}
      />
      <div className="flex-1 flex flex-col overflow-hidden bg-white rounded-lg shadow">
        <div className='flex items-center justify-between'>
          <h2 className="text-lg font-semibold text-gray-800 text-center flex-1">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="flex justify-end p-2 space-x-2">
            <button
              onClick={handlePrevMonth}
              className="p-2 text-gray-600 hover:bg-[#c8fcea]/90 rounded-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-2 text-gray-600 hover:bg-[#c8fcea]/90 rounded-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto"> {/* Allow scrolling for the grid */}
          <CalendarGrid days={calendarDays} onSelectDay={handleSelectDay} />
        </div>
       
      </div>
      {selectedDay && (
        <EventModal selectedDay={selectedDay} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Calendar;