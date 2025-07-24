import { useState, useEffect } from 'react';
import type { TimeZone, TimeZoneDisplay } from '@/types/timezone';

export const useTimeZone = (timeZone: TimeZone): TimeZoneDisplay => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
          timeZone: timeZone.timezone,
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });

        setCurrentTime(timeFormatter.format(now));
        setCurrentDate(dateFormatter.format(now));
      } catch (error) {
        // Fallback for invalid timezone
        const now = new Date();
        const offsetMs = timeZone.offset * 60 * 60 * 1000;
        const localTime = new Date(now.getTime() + offsetMs - (now.getTimezoneOffset() * 60 * 1000));
        
        setCurrentTime(localTime.toTimeString().slice(0, 8));
        setCurrentDate(localTime.toDateString().slice(0, 10));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timeZone.timezone, timeZone.offset]);

  return {
    ...timeZone,
    currentTime,
    currentDate,
  };
};