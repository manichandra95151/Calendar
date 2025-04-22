
import React from 'react';
import { X } from 'lucide-react';
import EventItem from './EventItem';
import { formatDate } from '../../utils/calender';

function EventModal({ selectedDay, onClose }) {
  if (!selectedDay) return null;

  const { date, events } = selectedDay;

  const findConflictingEvents = (events) => {
    const conflicts = [];
    
    // Check for conflicts
    for (let i = 0; i < events.length; i++) {
      for (let j = i + 1; j < events.length; j++) {
        const eventA = events[i];
        const eventB = events[j];

        // Check if eventA and eventB overlap
        if (
          (eventA.startTime < eventB.endTime && eventA.endTime > eventB.startTime)
        ) {
          // If there are any conflicting events
          if (!conflicts.includes(eventA)) {
            conflicts.push(eventA);
          }
          if (!conflicts.includes(eventB)) {
            conflicts.push(eventB);
          }
        }
      }
    }

    return conflicts;
  };;

  const conflictingEvents = findConflictingEvents(events);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            {formatDate(date, 'EEEE, MMMM d, yyyy')}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 flex justify-center items-center w-8 h-8 rounded-full hover:bg-[#c8fcea]/90 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4">
          {events.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No events for this day</p>
          ) : (
            <>
            <h4 className="font-semibold text-gray-800">All Events</h4>
            <div className="space-y-3 max-h-40 overflow-y-auto">
              
              {events.map(event => (
                <EventItem key={event.id} event={event} truncate={false} />
              ))}
            </div>
            </>
          )}
        </div>

        {/* Conflicting Events Section */}
        {conflictingEvents.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            {/* <div className='mx-2 border-t border-gray-200 mb-2'></div> */}
            <h4 className="font-semibold text-gray-800">Conflicting Events</h4>
            <div className="space-y-3 max-h-40 overflow-y-auto">
              {conflictingEvents.map(event => (
                <EventItem key={event.id} event={event} truncate={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventModal;
