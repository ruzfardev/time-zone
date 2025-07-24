import type { TimeZone } from '@/types/timezone';

export const timeZones: TimeZone[] = [
  // Major cities
  { id: 'nyc', city: 'New York', country: 'United States', timezone: 'America/New_York', offset: -5, abbreviation: 'EST' },
  { id: 'london', city: 'London', country: 'United Kingdom', timezone: 'Europe/London', offset: 0, abbreviation: 'GMT' },
  { id: 'tokyo', city: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo', offset: 9, abbreviation: 'JST' },
  { id: 'sydney', city: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney', offset: 11, abbreviation: 'AEDT' },
  { id: 'paris', city: 'Paris', country: 'France', timezone: 'Europe/Paris', offset: 1, abbreviation: 'CET' },
  { id: 'berlin', city: 'Berlin', country: 'Germany', timezone: 'Europe/Berlin', offset: 1, abbreviation: 'CET' },
  { id: 'moscow', city: 'Moscow', country: 'Russia', timezone: 'Europe/Moscow', offset: 3, abbreviation: 'MSK' },
  { id: 'dubai', city: 'Dubai', country: 'UAE', timezone: 'Asia/Dubai', offset: 4, abbreviation: 'GST' },
  { id: 'singapore', city: 'Singapore', country: 'Singapore', timezone: 'Asia/Singapore', offset: 8, abbreviation: 'SGT' },
  { id: 'hongkong', city: 'Hong Kong', country: 'Hong Kong', timezone: 'Asia/Hong_Kong', offset: 8, abbreviation: 'HKT' },
  
  // Americas
  { id: 'la', city: 'Los Angeles', country: 'United States', timezone: 'America/Los_Angeles', offset: -8, abbreviation: 'PST' },
  { id: 'chicago', city: 'Chicago', country: 'United States', timezone: 'America/Chicago', offset: -6, abbreviation: 'CST' },
  { id: 'toronto', city: 'Toronto', country: 'Canada', timezone: 'America/Toronto', offset: -5, abbreviation: 'EST' },
  { id: 'vancouver', city: 'Vancouver', country: 'Canada', timezone: 'America/Vancouver', offset: -8, abbreviation: 'PST' },
  { id: 'mexico_city', city: 'Mexico City', country: 'Mexico', timezone: 'America/Mexico_City', offset: -6, abbreviation: 'CST' },
  { id: 'sao_paulo', city: 'São Paulo', country: 'Brazil', timezone: 'America/Sao_Paulo', offset: -3, abbreviation: 'BRT' },
  { id: 'buenos_aires', city: 'Buenos Aires', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires', offset: -3, abbreviation: 'ART' },
  
  // Europe
  { id: 'madrid', city: 'Madrid', country: 'Spain', timezone: 'Europe/Madrid', offset: 1, abbreviation: 'CET' },
  { id: 'rome', city: 'Rome', country: 'Italy', timezone: 'Europe/Rome', offset: 1, abbreviation: 'CET' },
  { id: 'amsterdam', city: 'Amsterdam', country: 'Netherlands', timezone: 'Europe/Amsterdam', offset: 1, abbreviation: 'CET' },
  { id: 'stockholm', city: 'Stockholm', country: 'Sweden', timezone: 'Europe/Stockholm', offset: 1, abbreviation: 'CET' },
  { id: 'zurich', city: 'Zurich', country: 'Switzerland', timezone: 'Europe/Zurich', offset: 1, abbreviation: 'CET' },
  { id: 'vienna', city: 'Vienna', country: 'Austria', timezone: 'Europe/Vienna', offset: 1, abbreviation: 'CET' },
  { id: 'prague', city: 'Prague', country: 'Czech Republic', timezone: 'Europe/Prague', offset: 1, abbreviation: 'CET' },
  { id: 'istanbul', city: 'Istanbul', country: 'Turkey', timezone: 'Europe/Istanbul', offset: 3, abbreviation: 'TRT' },
  
  // Asia
  { id: 'beijing', city: 'Beijing', country: 'China', timezone: 'Asia/Shanghai', offset: 8, abbreviation: 'CST' },
  { id: 'shanghai', city: 'Shanghai', country: 'China', timezone: 'Asia/Shanghai', offset: 8, abbreviation: 'CST' },
  { id: 'mumbai', city: 'Mumbai', country: 'India', timezone: 'Asia/Kolkata', offset: 5.5, abbreviation: 'IST' },
  { id: 'delhi', city: 'Delhi', country: 'India', timezone: 'Asia/Kolkata', offset: 5.5, abbreviation: 'IST' },
  { id: 'bangkok', city: 'Bangkok', country: 'Thailand', timezone: 'Asia/Bangkok', offset: 7, abbreviation: 'ICT' },
  { id: 'seoul', city: 'Seoul', country: 'South Korea', timezone: 'Asia/Seoul', offset: 9, abbreviation: 'KST' },
  { id: 'jakarta', city: 'Jakarta', country: 'Indonesia', timezone: 'Asia/Jakarta', offset: 7, abbreviation: 'WIB' },
  { id: 'manila', city: 'Manila', country: 'Philippines', timezone: 'Asia/Manila', offset: 8, abbreviation: 'PHT' },
  { id: 'kuala_lumpur', city: 'Kuala Lumpur', country: 'Malaysia', timezone: 'Asia/Kuala_Lumpur', offset: 8, abbreviation: 'MYT' },
  { id: 'tashkent', city: 'Tashkent', country: 'Uzbekistan', timezone: 'Asia/Tashkent', offset: 5, abbreviation: 'UZT' },
  
  // Africa & Middle East
  { id: 'cairo', city: 'Cairo', country: 'Egypt', timezone: 'Africa/Cairo', offset: 2, abbreviation: 'EET' },
  { id: 'johannesburg', city: 'Johannesburg', country: 'South Africa', timezone: 'Africa/Johannesburg', offset: 2, abbreviation: 'SAST' },
  { id: 'riyadh', city: 'Riyadh', country: 'Saudi Arabia', timezone: 'Asia/Riyadh', offset: 3, abbreviation: 'AST' },
  
  // Oceania
  { id: 'melbourne', city: 'Melbourne', country: 'Australia', timezone: 'Australia/Melbourne', offset: 11, abbreviation: 'AEDT' },
  { id: 'perth', city: 'Perth', country: 'Australia', timezone: 'Australia/Perth', offset: 8, abbreviation: 'AWST' },
  { id: 'auckland', city: 'Auckland', country: 'New Zealand', timezone: 'Pacific/Auckland', offset: 13, abbreviation: 'NZDT' },
  { id: 'fiji', city: 'Suva', country: 'Fiji', timezone: 'Pacific/Fiji', offset: 12, abbreviation: 'FJT' },
];

