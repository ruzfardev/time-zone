export interface TimeZone {
  id: string;
  city: string;
  country: string;
  timezone: string;
  offset: number;
  abbreviation: string;
  isPinned?: boolean;
}

export interface TimeZoneDisplay extends TimeZone {
  currentTime: string;
  currentDate: string;
}