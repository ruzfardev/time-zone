import { MagicCard } from '@/components/magicui/magic-card';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin } from 'lucide-react';
import type { TimeZone } from '@/types/timezone';
import { useTimeZone } from '@/hooks/useTimeZone';
import confetti from 'canvas-confetti';

interface TimeZoneCardProps {
  timeZone: TimeZone;
  isPinned: boolean;
  onTogglePin: (timeZone: TimeZone) => void;
  delay?: number;
  variant?: 'default' | 'neon';
}

export const TimeZoneCard = ({
  timeZone,
  isPinned,
  onTogglePin,
  delay = 0,
  variant = 'default'
}: TimeZoneCardProps) => {
  const timeZoneDisplay = useTimeZone(timeZone);
  const handleTogglePin = () => {
    const newPinnedState = !isPinned;
    onTogglePin(timeZone);

    // Trigger confetti when pinning a new time zone
    if (newPinnedState) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const getOffsetDisplay = (offset: number): string => {
    const hours = Math.floor(Math.abs(offset));
    const minutes = Math.abs(offset) % 1 * 60;
    const sign = offset >= 0 ? '+' : '-';

    if (minutes === 0) {
      return `UTC${sign}${hours}`;
    } else {
      return `UTC${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
    }
  };

  const CardComponent = variant === 'neon' ? NeonGradientCard : MagicCard;
  const cardProps = variant === 'neon'
    ? {
      borderSize: 3,
      borderRadius: 20,
      neonColors: { firstColor: "#ff00aa", secondColor: "#00FFF1" }
    }
    : {};

  return (
    <BlurFade delay={delay} inView>
      <CardComponent
        className="group cursor-pointer transition-all duration-300 hover:scale-105 rounded-xl border border-border/50 shadow-lg hover:shadow-xl"
        {...cardProps}
      >
        <div className="p-6 space-y-4">
          {/* Header with city and pin button */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {timeZoneDisplay.city}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{timeZoneDisplay.country}</p>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                {timeZoneDisplay.abbreviation}
              </Badge>

              {/* <AnimatedSubscribeButton
                subscribeStatus={isSubscribed}
                className="h-8 w-8 p-0"
                onClick={handleTogglePin}
              >
                <span className="flex items-center justify-center">
                  <Pin className="h-4 w-4" />
                </span>
                <span className="flex items-center justify-center">
                  <PinOff className="h-4 w-4" />
                </span>
              </AnimatedSubscribeButton> */}
            </div>
          </div>

          {/* Time display */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-3xl font-mono font-bold text-foreground">
                {timeZoneDisplay.currentTime}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{timeZoneDisplay.currentDate}</span>
              <span className="font-mono">{getOffsetDisplay(timeZoneDisplay.offset)}</span>
            </div>
          </div>

          {/* Interactive button for additional actions */}
          <div className="pt-2">
            <InteractiveHoverButton
              // text={isPinned ? "Pinned" : "Pin Time Zone"}
              className="w-full h-9 text-sm"
              onClick={handleTogglePin}
            />
          </div>
        </div>
      </CardComponent>
    </BlurFade>
  );
};