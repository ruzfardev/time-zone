import { Search, MapPin } from 'lucide-react';
import { AnimatedList } from '@/components/magicui/animated-list';
import { BlurFade } from '@/components/magicui/blur-fade';
import { TimeZoneCard } from '@/components/TimeZoneCard';
import type { TimeZone } from '@/types/timezone';

interface SearchResultsProps {
  results: TimeZone[];
  hasQuery: boolean;
  noResults: boolean;
  query: string;
  onTogglePin: (timeZone: TimeZone) => void;
  isTimeZonePinned: (id: string) => boolean;
}

export function SearchResults({
  results,
  hasQuery,
  noResults,
  query,
  onTogglePin,
  isTimeZonePinned,
}: SearchResultsProps) {
  // Don't render anything if there's no query
  if (!hasQuery) {
    return null;
  }

  return (
    <BlurFade delay={0.2} inView>
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-6 w-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Search Results
            {hasQuery && (
              <span className="text-lg font-normal text-muted-foreground ml-2">
                for "{query}"
              </span>
            )}
          </h2>
          {results.length > 0 && (
            <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {results.length} found
            </span>
          )}
        </div>

        {/* No Results State */}
        {noResults && (
          <BlurFade delay={0.3} inView>
            <div className="text-center py-12 space-y-4">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  No time zones found
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We couldn't find any time zones matching "{query}". Try searching for a city name, country, or timezone abbreviation.
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-1">Search suggestions:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['New York', 'London', 'Tokyo', 'Sydney', 'Paris'].map((suggestion) => (
                    <span
                      key={suggestion}
                      className="px-2 py-1 bg-muted/50 rounded text-xs hover:bg-muted/80 cursor-pointer transition-colors"
                    >
                      {suggestion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        )}

        {/* Search Results Grid */}
        {results.length > 0 && (
          <AnimatedList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map((timeZone, index) => (
              <TimeZoneCard
                key={timeZone.id}
                timeZone={timeZone}
                isPinned={isTimeZonePinned(timeZone.id)}
                onTogglePin={onTogglePin}
                delay={index * 0.05} // Stagger the animations
                variant="default"
              />
            ))}
          </AnimatedList>
        )}

        {/* Search Tips */}
        {hasQuery && results.length > 0 && (
          <BlurFade delay={0.4} inView>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Tip:</strong> Click the pin button to add time zones to your favorites!
              </p>
            </div>
          </BlurFade>
        )}
      </section>
    </BlurFade>
  );
}