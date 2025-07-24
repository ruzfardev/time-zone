# Magic UI Components for Time Zone Application

This document contains the necessary Magic UI component installation commands for building a modern time-zone landing page application with search and pin functionality.

## Installation Commands

Run these commands to install the required Magic UI components for your time-zone application:

### Core UI Components

#### Cards (for displaying pinned time zones)
```bash
# Magic Card - Interactive card with hover effects
npx shadcn@latest add "https://magicui.design/r/magic-card"

# Neon Gradient Card - Eye-catching gradient cards for featured time zones
npx shadcn@latest add "https://magicui.design/r/neon-gradient-card"
```

#### Buttons (for pin/unpin and search actions)
```bash
# Interactive Hover Button - For pin/unpin actions
npx shadcn@latest add "https://magicui.design/r/interactive-hover-button"

# Shimmer Button - For search button with shimmer effect
npx shadcn@latest add "https://magicui.design/r/shimmer-button"

# Pulsating Button - For call-to-action buttons
npx shadcn@latest add "https://magicui.design/r/pulsating-button"

# Animated Subscribe Button - For following/pinning time zones
npx shadcn@latest add "https://magicui.design/r/animated-subscribe-button"
```

### Text & Animation Components

#### Text Effects (for time zone names and times)
```bash
# Typing Animation - For dynamic time zone name display
npx shadcn@latest add "https://magicui.design/r/typing-animation"

# Animated Gradient Text - For highlighting featured cities
npx shadcn@latest add "https://magicui.design/r/animated-gradient-text"

# Text Animate - For smooth text transitions
npx shadcn@latest add "https://magicui.design/r/text-animate"

# Animated Shiny Text - For premium city features
npx shadcn@latest add "https://magicui.design/r/animated-shiny-text"
```

### Layout & Background Components

#### Background Effects (for landing page design)
```bash
# Animated Grid Pattern - For subtle background animation
npx shadcn@latest add "https://magicui.design/r/animated-grid-pattern"

# Particles - For interactive background particles
npx shadcn@latest add "https://magicui.design/r/particles"

# Grid Pattern - For static grid background
npx shadcn@latest add "https://magicui.design/r/grid-pattern"

# Meteors - For dynamic background effects
npx shadcn@latest add "https://magicui.design/r/meteors"
```

### List & Display Components

#### Search Results & Time Zone Lists
```bash
# Animated List - For search results animation
npx shadcn@latest add "https://magicui.design/r/animated-list"

# Marquee - For scrolling time zone ticker
npx shadcn@latest add "https://magicui.design/r/marquee"
```

### Special Effects Components

#### Interactive Elements
```bash
# Box Reveal - For revealing time zone information
npx shadcn@latest add "https://magicui.design/r/box-reveal"

# Blur Fade - For smooth content transitions
npx shadcn@latest add "https://magicui.design/r/blur-fade"

# Confetti - For celebration when pinning favorite cities
npx shadcn@latest add "https://magicui.design/r/confetti"
```

## Required Dependencies

Some components require additional npm packages:

```bash
# For animation components
npm install motion

# For confetti effects (if using confetti component)
npm install canvas-confetti

# For card interactions (if needed)
npm install framer-motion
```

## Component Usage Examples

### Magic Card for Time Zone Display
```tsx
import { MagicCard } from "@/components/magicui/magic-card";

<MagicCard className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl">
  <div className="text-2xl font-bold">New York</div>
  <div className="text-xl">EST - 14:30</div>
  <div className="text-sm text-gray-500">UTC-5</div>
</MagicCard>
```

### Interactive Hover Button for Pin Action
```tsx
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

<InteractiveHoverButton text="Pin Time Zone" />
```

### Animated List for Search Results
```tsx
import { AnimatedList } from "@/components/magicui/animated-list";

<AnimatedList>
  <div>London, UK - GMT</div>
  <div>Tokyo, Japan - JST</div>
  <div>Sydney, Australia - AEDT</div>
</AnimatedList>
```

### Typing Animation for Dynamic City Names
```tsx
import { TypingAnimation } from "@/components/magicui/typing-animation";

<TypingAnimation>Welcome to Global Time Zones</TypingAnimation>
```

## Application Structure Recommendations

1. **Header**: Use Animated Gradient Text for the app title
2. **Search Bar**: Combine with Shimmer Button for search functionality
3. **Pinned Time Zones**: Use Magic Cards in a grid layout
4. **Search Results**: Display with Animated List
5. **Background**: Use Animated Grid Pattern or Particles for visual appeal
6. **Pin Actions**: Use Interactive Hover Button or Animated Subscribe Button
7. **Celebrations**: Trigger Confetti when users pin their first time zone

## CSS Animations Required

Some components require additional CSS to be added to your global CSS file. Check the component documentation for specific keyframe animations needed.

---

**Note**: All components are built with Tailwind CSS and work seamlessly together. Ensure you have Tailwind CSS configured in your project before using these components.