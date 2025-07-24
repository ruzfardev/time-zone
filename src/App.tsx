import { useState } from 'react';
import { Clock, Globe, Pin } from 'lucide-react';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { Particles } from '@/components/magicui/particles';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Marquee } from '@/components/magicui/marquee';
import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { TimeZoneCard } from '@/components/TimeZoneCard';
import { ThemeToggle } from '@/components/ThemeToggle';
import { usePinnedTimeZones } from '@/hooks/usePinnedTimeZones';
import type { TimeZone } from '@/types/timezone';
import { timeZones } from '@/data/timezones';

function App() {
  const { pinnedTimeZones, togglePin, isTimeZonePinned } = usePinnedTimeZones();

  // Get popular time zones for initial display
  const popularTimeZones = [
    timeZones.find(tz => tz.id === 'tashkent')!,
    timeZones.find(tz => tz.id === 'kuala_lumpur')!,
    timeZones.find(tz => tz.id === 'nyc')!,
    timeZones.find(tz => tz.id === 'sydney')!,
  ];

  const handleTogglePin = (timeZone: TimeZone) => {
    togglePin(timeZone);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        />
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#64748b"}
          refresh
        />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            {/* Main Title */}
            <div className="space-y-2">
              <AnimatedGradientText className="text-5xl md:text-7xl font-bold">
                Global Time Zones
              </AnimatedGradientText>
              <TypingAnimation className="text-xl md:text-2xl text-muted-foreground">
                Track time across the world
              </TypingAnimation>
            </div>

            {/* Subtitle */}
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Track time across the world. Pin your favorite time zones for quick access.
            </TextAnimate>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 pb-12">
        {/* Pinned Time Zones Section */}
        {pinnedTimeZones.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Pin className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Pinned Time Zones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pinnedTimeZones.map((timeZone, index) => (
                <TimeZoneCard
                  key={timeZone.id}
                  timeZone={timeZone}
                  isPinned={true}
                  onTogglePin={handleTogglePin}
                  delay={index * 0.1}
                  variant="neon"
                />
              ))}
            </div>
          </section>
        )}


        {/* Popular Time Zones Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Popular Time Zones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularTimeZones.map((timeZone, index) => (
              <TimeZoneCard
                key={timeZone.id}
                timeZone={timeZone}
                isPinned={isTimeZonePinned(timeZone.id)}
                onTogglePin={handleTogglePin}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Scrolling Ticker */}
        <section className="mt-16">
          <Marquee className="py-6 bg-muted/20 backdrop-blur-sm rounded-lg border">
            <div className="flex items-center gap-8 text-sm font-mono">
              {timeZones.slice(0, 15).map((tz) => (
                <div key={tz.id} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="font-semibold">{tz.city}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{tz.abbreviation}</span>
                </div>
              ))}
            </div>
          </Marquee>
        </section>

        {/* Call to Action */}
        {pinnedTimeZones.length === 0 && (
          <section className="mt-16 text-center">
            <div className="space-y-4">
              <TextAnimate
                animation="blurInUp"
                by="word"
                className="text-lg text-muted-foreground"
              >
                Start by pinning your first time zone from the popular cities below!
              </TextAnimate>
              <PulsatingButton
                className="mt-4"
                pulseColor="59, 130, 246"
                duration="2s"
              >
                <Globe className="h-4 w-4 mr-2" />
                Explore Time Zones
              </PulsatingButton>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 py-8 border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Built with Magic UI components • Real-time updates • Pin your favorites
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;