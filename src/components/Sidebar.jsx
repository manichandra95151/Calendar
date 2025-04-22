import React,{useCallback} from 'react';
import { Calendar, Users, Settings, Pin, PinOff } from 'lucide-react';

function Sidebar({ expanded, pinned, onExpand, onPin }) {
  const handleMouseEnter = () => {
    if (!pinned) {
      onExpand(true);
    }
  };

  const handleMouseLeave = useCallback(() => {
    if (!pinned) {
      onExpand(false);
    }
  });

  const handleTogglePin = useCallback(() => {
    onPin(!pinned);
    if (!pinned) {
      onExpand(true);
    }
  });

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-md transition-all duration-300 ease-in-out z-10 ${
        expanded ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center p-4 border-b">
        {expanded && <h2 className="text-xl font-semibold text-indigo-600">Calendar</h2>}
        <button
          onClick={handleTogglePin}
          className={`text-gray-600 flex justify-center items-center w-8 h-8 rounded-full hover:bg-[#c8fcea]/90 transition-colors ml-auto ${
            !expanded && 'mx-auto'
          } ${pinned ? 'bg-[#c8fcea]/90' : ''}`}  
        >
          {pinned ? <PinOff size={20} /> : <Pin size={20} />}
        </button>
      </div>

      <div className="py-6">
        <NavItem icon={<Calendar />} text="Calendar" expanded={expanded} active />
        <NavItem icon={<Users />} text="Team" expanded={expanded} />
        <NavItem icon={<Settings />} text="Settings" expanded={expanded} />
      </div>
    </div>
  );
}

function NavItem({ icon, text, expanded, active }) {
  return (
    <div
      className={`flex items-center p-4 cursor-pointer ${
        active
          ? 'bg-indigo-100 text-indigo-600'
          : 'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'
      } transition-colors`}
    >
      <div className={`${!expanded && 'mx-auto'}`}>{icon}</div>
      {expanded && <span className="ml-4 font-medium">{text}</span>}
    </div>
  );
}

export default Sidebar;