import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    format,
    addMonths,
    subMonths
  } from 'date-fns';
  
  // Get all days in a month, including the days from prev/next months to fill the weeks
  export const getCalendarDays = (date, events) => {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);
    
    const today = new Date();
    
    const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd }).map((day) => {
      const dayEvents = events.filter((event) => event.date === format(day, 'yyyy-MM-dd'));
      
      return {
        date: day,
        dayOfMonth: day.getDate(),
        isCurrentMonth: isSameMonth(day, monthStart),
        isToday: isSameDay(day, today),
        events: dayEvents
      };
    });
    
    return days;
  };
  
  // Group calendar days into weeks
  export const getCalendarWeeks = (days) => {
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  };
  
  // Get next month
  export const getNextMonth = (date) => addMonths(date, 1);
  
  // Get previous month
  export const getPrevMonth = (date) => subMonths(date, 1);
  
  // Format date
  export const formatDate = (date, formatStr) => format(date, formatStr);