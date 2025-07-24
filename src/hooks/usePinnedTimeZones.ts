import { useState, useEffect } from 'react';
import type { TimeZone } from '@/types/timezone';
import { timeZones } from '@/data/timezones';

const STORAGE_KEY = 'pinnedTimeZones';
const DEFAULT_PINS = ['kuala_lumpur', 'nyc', 'tashkent']; // Malaysia, USA, Tashkent

export const usePinnedTimeZones = () => {
  const [pinnedTimeZones, setPinnedTimeZones] = useState<TimeZone[]>([]);

  // Load pinned time zones from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPinnedTimeZones(JSON.parse(stored));
      } else {
        // Set default pinned time zones if none exist
        const defaultPinnedZones = timeZones.filter(tz => DEFAULT_PINS.includes(tz.id));
        setPinnedTimeZones(defaultPinnedZones);
      }
    } catch (error) {
      console.error('Error loading pinned time zones:', error);
      // Set defaults on error
      const defaultPinnedZones = timeZones.filter(tz => DEFAULT_PINS.includes(tz.id));
      setPinnedTimeZones(defaultPinnedZones);
    }
  }, []);

  // Save to localStorage whenever pinnedTimeZones changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pinnedTimeZones));
    } catch (error) {
      console.error('Error saving pinned time zones:', error);
    }
  }, [pinnedTimeZones]);

  const pinTimeZone = (timeZone: TimeZone) => {
    setPinnedTimeZones(prev => {
      if (prev.some(tz => tz.id === timeZone.id)) {
        return prev; // Already pinned
      }
      return [...prev, { ...timeZone, isPinned: true }];
    });
  };

  const unpinTimeZone = (timeZoneId: string) => {
    setPinnedTimeZones(prev => prev.filter(tz => tz.id !== timeZoneId));
  };

  const isTimeZonePinned = (timeZoneId: string): boolean => {
    return pinnedTimeZones.some(tz => tz.id === timeZoneId);
  };

  const togglePin = (timeZone: TimeZone) => {
    if (isTimeZonePinned(timeZone.id)) {
      unpinTimeZone(timeZone.id);
    } else {
      pinTimeZone(timeZone);
    }
  };

  return {
    pinnedTimeZones,
    pinTimeZone,
    unpinTimeZone,
    isTimeZonePinned,
    togglePin,
  };
};