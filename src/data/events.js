import { format } from 'date-fns';

// Helper to create dates for the current month
const createDate = (day, hoursOffset = 0) => {
  const date = new Date();
  date.setDate(day);
  date.setHours(hoursOffset);
  return format(date, 'yyyy-MM-dd');
};

export const events = [
  {
    id: '1',
    startTime: '09:00',
    endTime: '10:30',
    color: '#4f46e5',
    title: 'Daily Standup',
    date: createDate(new Date().getDate())
  },
  {
    id: '2',
    startTime: '09:30',
    endTime: '10:30',
    color: '#10b981',
    title: 'Team Sync',
    date: createDate(new Date().getDate())
  },
  {
    id: '3',
    startTime: '11:00',
    endTime: '12:30',
    color: '#f97316',
    title: 'Product Demo',
    date: createDate(new Date().getDate())
  },
  {
    id: '4',
    startTime: '14:30',
    endTime: '15:30',
    color: '#8b5cf6',
    title: 'Client Meeting',
    date: createDate(new Date().getDate())
  },
  {
    id: '5',
    startTime: '16:00',
    endTime: '17:00',
    color: '#ec4899',
    title: 'Design Review',
    date: createDate(new Date().getDate())
  },
  {
    id: '6',
    startTime: '10:00',
    endTime: '11:30',
    color: '#14b8a6',
    title: 'Planning Session',
    date: createDate(new Date().getDate() + 1)
  },
  {
    id: '7',
    startTime: '13:00',
    endTime: '14:00',
    color: '#f43f5e',
    title: 'Lunch',
    date: createDate(new Date().getDate() + 1)
  },
  {
    id: '8',
    startTime: '15:00',
    endTime: '16:00',
    color: '#ca8a04',
    title: 'Team Outing',
    date: createDate(new Date().getDate() + 1) // No conflict
  },
  {
    id: '9',
    startTime: '09:00',
    endTime: '10:00',
    color: '#4f46e5',
    title: 'Weekly Planning',
    date: createDate(new Date().getDate() + 2)
  },
  {
    id: '10',
    startTime: '09:30',
    endTime: '10:30',
    color: '#10b981',
    title: 'Strategy Meeting',
    date: createDate(new Date().getDate() + 2)
  },
  {
    id: '11',
    startTime: '09:00',
    endTime: '10:00',
    color: '#4f46e5',
    title: 'Weekly Planning',
    date: createDate(new Date().getDate() + 7)
  },

  {
    id: '13',
    startTime: '09:00',
    endTime: '10:00',
    color: '#4f46e5',
    title: 'Weekly Planning',
    date: createDate(new Date().getDate() + 9)
  },
  {
    id: '14',
    startTime: '09:30',
    endTime: '10:30',
    color: '#ca8a04',
    title: 'Strategy Meeting',
    date: createDate(new Date().getDate() + 5)
  },
  {
    id: '15',
    startTime: '09:30',
    endTime: '10:30',
    color: '#10b981',
    title: 'Huddle with Kiran',
    date: createDate(new Date().getDate() + 11)
  },
  {
    id: '16',
    startTime: '09:30',
    endTime: '10:30',
    color: '#10b981',
    title: 'Project Update',
    date: createDate(new Date().getDate() + 16)
  },
];
