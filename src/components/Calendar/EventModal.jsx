import React from 'react';
import { X } from 'lucide-react';
import EventItem from './EventItem';
import { formatDate } from '../../utils/calender';

function EventModal({ selectedDay, onClose }) {
  if (!selectedDay) return null;

  const { date, events } = selectedDay;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            {formatDate(date, 'EEEE, MMMM d, yyyy')}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 flex justify-center items-center  w-8 h-8 rounded-full hover:bg-[#c8fcea]/90 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          {events.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No events for this day</p>
          ) : (
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {events.map((event) => (
                <div key={event.id} className="p-3 bg-white border border-gray-200 rounded-md">
                  <EventItem event={event} truncate={false} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventModal;