import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  onSearch,
  onClear,
  placeholder = "Search cities, countries, or timezones...",
  className
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
    onClear();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <form onSubmit={handleSubmit} className="relative">
        <div className={cn(
          "relative flex items-center gap-2 p-2 rounded-xl border transition-all duration-300",
          "bg-background/50 backdrop-blur-sm shadow-lg",
          isFocused
            ? "border-primary/50 shadow-primary/20 shadow-xl"
            : "border-border/50 hover:border-border/80"
        )}>
          {/* Search Icon */}
          <Search className="h-5 w-5 text-muted-foreground ml-2 flex-shrink-0" />

          {/* Input Field */}
          <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={cn(
              "flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-muted-foreground/60 text-foreground"
            )}
          />

          {/* Clear Button - Only show if there's text */}
          {query && (
            <InteractiveHoverButton
              onClick={handleClear}
            // className="h-8 w-8 p-0 bg-muted hover:bg-destructive/10 text-muted-foreground hover:text-destructive border-0"
            >
              <X className="h-4 w-4" />
            </InteractiveHoverButton>
          )}

          {/* Search Button */}
          <ShimmerButton
            type="submit"
            className="text-white dark:!text-white"
          >
            <Search className="h-3 w-3 mr-1" />
            Search
          </ShimmerButton>
        </div>

        {/* Search Status Indicator */}
        {isFocused && (
          <div className="absolute top-full left-0 right-0 mt-2 text-center">
            <span className="text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
              {query ? `Searching for "${query}"...` : "Start typing to search"}
            </span>
          </div>
        )}
      </form>
    </div>
  );
}