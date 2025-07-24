interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo = ({ size = 40, className = "" }: LogoProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      className={className}
    >
      <defs>
        {/* Gradient for the globe */}
        <radialGradient id="globeGradient" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" style={{stopColor:'#60a5fa', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#1e40af', stopOpacity:1}} />
        </radialGradient>
        
        {/* Gradient for the clock face */}
        <radialGradient id="clockGradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" style={{stopColor:'#f8fafc', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#e2e8f0', stopOpacity:1}} />
        </radialGradient>
        
        {/* Shadow filter */}
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.2)"/>
        </filter>
        
        {/* Glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="url(#globeGradient)" filter="url(#shadow)"/>
      
      {/* Globe grid lines */}
      <g stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.6">
        {/* Horizontal lines (latitude) */}
        <ellipse cx="50" cy="50" rx="40" ry="15" />
        <ellipse cx="50" cy="50" rx="40" ry="30" />
        <ellipse cx="50" cy="50" rx="35" ry="40" />
        
        {/* Vertical lines (longitude) */}
        <path d="M 50 10 Q 35 50 50 90 Q 65 50 50 10" />
        <path d="M 50 10 Q 20 50 50 90 Q 80 50 50 10" />
        <line x1="50" y1="10" x2="50" y2="90" />
      </g>
      
      {/* Clock face */}
      <circle cx="50" cy="50" r="25" fill="url(#clockGradient)" stroke="#1e40af" strokeWidth="2"/>
      
      {/* Clock hour markers */}
      <g stroke="#1e40af" strokeWidth="2" fill="#1e40af">
        {/* 12 o'clock */}
        <rect x="49" y="27" width="2" height="6" />
        {/* 3 o'clock */}
        <rect x="69" y="49" width="6" height="2" />
        {/* 6 o'clock */}
        <rect x="49" y="67" width="2" height="6" />
        {/* 9 o'clock */}
        <rect x="25" y="49" width="6" height="2" />
      </g>
      
      {/* Clock hands */}
      <g stroke="#1e40af" strokeWidth="2" strokeLinecap="round" fill="none">
        {/* Hour hand pointing to 3 */}
        <line x1="50" y1="50" x2="62" y2="50" />
        {/* Minute hand pointing to 12 */}
        <line x1="50" y1="50" x2="50" y2="35" />
      </g>
      
      {/* Center dot */}
      <circle cx="50" cy="50" r="3" fill="#1e40af"/>
      
      {/* Time zone indicators (small dots around the globe) */}
      <g fill="#fbbf24" filter="url(#glow)">
        <circle cx="25" cy="35" r="2" />
        <circle cx="75" cy="35" r="2" />
        <circle cx="75" cy="65" r="2" />
        <circle cx="25" cy="65" r="2" />
      </g>
      
      {/* Subtle highlight on globe */}
      <ellipse cx="38" cy="38" rx="12" ry="8" fill="rgba(255,255,255,0.2)" transform="rotate(-20 38 38)"/>
    </svg>
  );
};