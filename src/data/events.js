import { format } from 'date-fns';

// Get the current date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

// Helper to create dates for the current month
const createDate = (day, hoursOffset = 0) => {
  const date = new Date(currentYear, currentMonth, day);
  date.setHours(hoursOffset);
  return format(date, 'yyyy-MM-dd');
};

export const events = [
  {
    id: '1',
    startTime: '09:00',
    endTime: '10:30',
    color: '#4f46e5', // indigo
    title: 'Daily Standup',
    date: createDate(today.getDate())
  },
  {
    id: '2',
    startTime: '14:30',
    endTime: '17:30',
    color: '#10b981', // emerald
    title: 'Weekly Catchup',
    date: createDate(today.getDate())
  },
  {
    id: '3',
    startTime: '11:00',
    endTime: '12:30',
    color: '#f97316', // orange
    title: 'Product Demo',
    date: createDate(today.getDate())
  },
  {
    id: '1',
    startTime: '09:00',
    endTime: '10:30',
    color: '#4f46e5', // indigo
    title: 'Daily Standup',
    date: createDate(today.getDate())
  },
  {
    id: '2',
    startTime: '14:30',
    endTime: '17:30',
    color: '#10b981', // emerald
    title: 'Weekly Catchup',
    date: createDate(today.getDate())
  },
  {
    id: '3',
    startTime: '11:00',
    endTime: '12:30',
    color: '#f97316', // orange
    title: 'Product Demo',
    date: createDate(today.getDate())
  },
  {
    id: '1',
    startTime: '09:00',
    endTime: '10:30',
    color: '#4f46e5', // indigo
    title: 'Daily Standup',
    date: createDate(today.getDate())
  },
  {
    id: '2',
    startTime: '14:30',
    endTime: '17:30',
    color: '#10b981', // emerald
    title: 'Weekly Catchup',
    date: createDate(today.getDate())
  },
  {
    id: '3',
    startTime: '11:00',
    endTime: '12:30',
    color: '#f97316', // orange
    title: 'Product Demo',
    date: createDate(today.getDate())
  },
  {
    id: '1',
    startTime: '09:00',
    endTime: '10:30',
    color: '#4f46e5', // indigo
    title: 'Daily Standup',
    date: createDate(today.getDate())
  },
  {
    id: '2',
    startTime: '14:30',
    endTime: '17:30',
    color: '#10b981', // emerald
    title: 'Weekly Catchup',
    date: createDate(today.getDate())
  },
  {
    id: '3',
    startTime: '11:00',
    endTime: '12:30',
    color: '#f97316', // orange
    title: 'Product Demo',
    date: createDate(today.getDate())
  },
  {
    id: '4',
    startTime: '10:00',
    endTime: '11:30',
    color: '#8b5cf6', // violet
    title: 'Planning Session',
    date: createDate(today.getDate() + 1)
  },
  {
    id: '5',
    startTime: '13:00',
    endTime: '14:00',
    color: '#ec4899', // pink
    title: 'Lunch & Learn',
    date: createDate(today.getDate() + 1)
  },
  {
    id: '6',
    startTime: '15:00',
    endTime: '16:00',
    color: '#14b8a6', // teal
    title: 'Design Review',
    date: createDate(today.getDate() + 2)
  },
  {
    id: '7',
    startTime: '09:00',
    endTime: '16:00',
    color: '#f43f5e', // rose
    title: 'Company Offsite',
    date: createDate(today.getDate() + 5)
  },
  {
    id: '8',
    startTime: '10:00',
    endTime: '11:00',
    color: '#ca8a04', // yellow
    title: 'One-on-One',
    date: createDate(today.getDate() + 5)
  },
  {
    id: '9',
    startTime: '13:00',
    endTime: '17:00',
    color: '#4f46e5', // indigo
    title: 'Hackathon',
    date: createDate(today.getDate() + 5)
  },
  {
    id: '10',
    startTime: '09:30',
    endTime: '10:30',
    color: '#10b981', // emerald
    title: 'Strategy Meeting',
    date: createDate(today.getDate() + 10)
  }
];