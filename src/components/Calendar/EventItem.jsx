import React from 'react';

const EventItem = React.memo(({ event, truncate = true }) => {
  const eventStyle = {
    borderLeft: `4px solid ${event.color}`,
  };

  return (
    <div
      className="bg-white rounded-sm p-1 mb-1 shadow-sm text-xs transition-all hover:shadow-md"
      style={eventStyle}
    >
      <div className={`font-semibold ${truncate ? 'truncate' : ''}`}>{event.title}</div>
      {!truncate && (
        <div className="text-gray-500 mt-1">
          {event.startTime} - {event.endTime}
        </div>
      )}
    </div>
  );
});

export default EventItem;