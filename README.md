# 🌍 Global Time Zones App

A beautiful, modern time-zone application built with React, TypeScript, and Magic UI components. Search for cities worldwide, pin your favorites, and track time across the globe with stunning animations.

![Time Zone App](https://img.shields.io/badge/Status-Ready-brightgreen)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.6-yellow)

## ✨ Features

- 🔍 **Smart Search** - Search by city name, country, or timezone abbreviation
- 📌 **Pin Favorites** - Pin your most-used time zones for quick access
- 🎨 **Magic UI Components** - Beautiful animations and interactive elements
- ⏰ **Real-time Updates** - Live time updates every second
- 🎊 **Confetti Effects** - Celebration animations when pinning time zones
- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile
- 🌙 **Dark/Light Mode** - Automatic theme support
- 💾 **Local Storage** - Your pinned time zones persist between sessions

## 🎭 Magic UI Components Used

- **AnimatedGradientText** - Dynamic gradient title
- **TypingAnimation** - Typewriter effect for subtitles
- **AnimatedGridPattern** - Subtle animated background
- **Particles** - Interactive floating particles
- **MagicCard** - Interactive hover cards for time zones
- **NeonGradientCard** - Glowing cards for pinned favorites
- **ShimmerButton** - Animated search button
- **InteractiveHoverButton** - Pin/unpin buttons
- **AnimatedList** - Smooth search results animation
- **BlurFade** - Elegant entrance animations
- **Marquee** - Scrolling time zone ticker
- **PulsatingButton** - Call-to-action animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd time-zone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── magicui/           # Magic UI components
│   ├── ui/                # shadcn/ui components
│   ├── SearchBar.tsx      # Search functionality
│   └── TimeZoneCard.tsx   # Time zone display cards
├── hooks/
│   ├── useTimeZone.ts     # Real-time clock hook
│   └── usePinnedTimeZones.ts # Pin management
├── data/
│   └── timezones.ts       # Time zone database
├── types/
│   └── timezone.ts        # Type definitions
└── App.tsx                # Main application
```

## 🎯 Usage

### Search for Time Zones
1. Use the search bar to find cities or countries
2. Click enter or the shimmer search button
3. Select from animated search results

### Pin Your Favorites
1. Click the pin button on any time zone card
2. Enjoy the confetti celebration! 🎉
3. Pinned zones appear in the dedicated section

### Real-time Updates
- All time zones update every second
- Shows current time, date, and UTC offset
- Supports daylight saving time automatically

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Supported Time Zones

The app includes **40+ major cities** worldwide:

**Americas**: New York, Los Angeles, Chicago, Toronto, Mexico City, São Paulo, Buenos Aires
**Europe**: London, Paris, Berlin, Madrid, Rome, Amsterdam, Stockholm
**Asia**: Tokyo, Beijing, Mumbai, Bangkok, Singapore, Hong Kong
**Oceania**: Sydney, Melbourne, Auckland
**Africa**: Cairo, Johannesburg

## 🎨 Customization

### Adding New Time Zones
Edit `src/data/timezones.ts` and add new entries:

```typescript
{
  id: 'unique_id',
  city: 'City Name',
  country: 'Country',
  timezone: 'IANA/Timezone',
  offset: 0, // UTC offset in hours
  abbreviation: 'TZ'
}
```

### Styling
- Built with Tailwind CSS
- Magic UI components are fully customizable
- Dark/light mode support included

## 🛠️ Built With

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Magic UI** - Animated components
- **shadcn/ui** - Base UI components
- **Lucide React** - Icons
- **Canvas Confetti** - Celebration effects

## 📱 Mobile Experience

- Fully responsive design
- Touch-friendly interactions
- Optimized animations for mobile
- Grid layout adapts to screen size

## 🔮 Future Enhancements

- [ ] Weather integration
- [ ] World clock widget mode
- [ ] Meeting time planner
- [ ] Time zone converter
- [ ] Export to calendar
- [ ] Push notifications

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Magic UI components**

*Search, pin, and track time zones across the globe with style!*