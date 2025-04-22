import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar/Calendar.jsx'; 
import { events } from './data/events';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);

  return (
    <div className="h-screen flex bg-gray-50">
      <Sidebar 
        expanded={sidebarExpanded} 
        pinned={sidebarPinned}
        onExpand={setSidebarExpanded}
        onPin={setSidebarPinned}
      />
      
      <div 
        className={`flex-1 p-4 transition-all duration-300 ${
          sidebarExpanded ? 'ml-64' : 'ml-16'
        }`}
      >
        <div className="h-full flex flex-col mx-auto">
          <Calendar events={events} />
        </div>
      </div>
    </div>
  );
}

export default App;