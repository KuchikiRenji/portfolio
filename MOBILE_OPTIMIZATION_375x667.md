# Mobile Optimization for 375x667 Viewport

## Overview

Comprehensive responsive design optimizations for mobile devices with 375x667 viewport (iPhone SE, iPhone 6/7/8 size).

## Changes Made

### 1. Custom Breakpoint Added

- Added `xs` breakpoint at 375px for fine-grained mobile control
- Configured in `src/app/globals.css` using `@custom-media --xs (min-width: 375px)`

### 2. Hero Section (`src/components/hero/hero-content.tsx`)

#### Typography Optimizations

- **Main heading**: Reduced from `text-5xl` to `text-4xl` on mobile, scales up with `xs:text-5xl`
- **Subtitle**: Reduced from `text-lg` to `text-base`, scales with `xs:text-lg`
- **Tagline**: Reduced from `text-base` to `text-sm`, scales with `xs:text-base`
- **Location text**: Reduced to `text-sm xs:text-base`

#### Spacing Adjustments

- Reduced sparkle icon size: `h-5 w-5` → `xs:h-6 xs:w-6`
- Reduced margins: `mb-12` → `mb-10 xs:mb-12`
- Reduced tech stack spacing: `mt-16` → `mt-12 xs:mt-16`
- Reduced gaps: `gap-4` → `gap-3 xs:gap-4`

#### Button Optimizations

- Added full width on smallest screens: `w-full xs:w-auto`
- Reduced padding: `px-8 py-4` → `px-6 py-3 xs:px-8 xs:py-4`
- Reduced text size: `text-base` → `text-sm xs:text-base`
- Reduced icon size: `h-5 w-5` → `h-4 w-4 xs:h-5 xs:w-5`

#### Tech Stack Pills

- Reduced padding: `px-3 py-1` → `px-2.5 py-1 xs:px-3`
- Reduced text size: `text-xs` → `text-[11px] xs:text-xs`
- Reduced gap: `gap-2` → `gap-1.5 xs:gap-2`
- Added horizontal padding: `px-4` to prevent edge overflow

### 3. Projects Showcase (`src/components/projects/projects-showcase.tsx`)

#### Section Header

- Reduced badge padding: `px-4 py-2` → `px-3 py-1.5 xs:px-4 xs:py-2`
- Reduced badge text: `text-sm` → `text-xs xs:text-sm`
- Reduced title size: `text-4xl` → `text-3xl xs:text-4xl`
- Reduced subtitle size: Added `text-sm xs:text-base`
- Added horizontal padding: `px-2` and `px-4` to prevent overflow
- Reduced margins: `mb-8` → `mb-6 xs:mb-8`, `mb-6` → `mb-4 xs:mb-6`

### 4. Navbar (`src/components/Navbar.tsx`)

#### Height Adjustments

- Reduced navbar height: `h-16` → `h-14 xs:h-16`
- Maintains `md:h-20` for desktop

#### Padding Optimizations

- Reduced horizontal padding: `px-4` → `px-3 xs:px-4`
- Maintains `md:px-12` for desktop

#### Brand Text

- Reduced "AI ENGINEER" text: `text-xs` → `text-[0.6rem] xs:text-xs`
- Reduced tracking: `tracking-[0.35em]` → `tracking-[0.3em] xs:tracking-[0.35em]`
- Reduced main brand text: `text-lg` → `text-base xs:text-lg`
- Reduced gaps: `gap-1.5` → `gap-1 xs:gap-1.5`

### 5. Global CSS Optimizations (`src/app/globals.css`)

#### Mobile-Specific Media Queries

**For screens ≤ 375px:**

- Base font size: 14px
- Reduced container padding: 1rem
- Optimized hero padding
- Smaller headings (h1: 2rem, h2: 1.5rem)
- Minimum button height: 44px (iOS touch target)
- Reduced flex gaps: 0.75rem
- Reduced card padding: 1rem

**For 375px - 640px range:**

- Section padding: 3rem top/bottom
- Single column grid layouts
- Touch target minimum: 44px × 44px
- Optimized navbar padding: 0.75rem 1rem
- Better line height: 1.6

**Landscape mode (height ≤ 667px):**

- Auto height for hero section
- Reduced vertical spacing
- Smaller headings: 2.5rem
- Compact button padding

#### Safe Area Insets

- Support for notched devices
- Padding for safe-area-inset-left/right
- Fixed header/footer safe areas

#### Horizontal Scroll Prevention

- Max-width: 100% on all elements
- Auto height for images/videos
- Scrollable tables
- 16px font size for inputs (prevents iOS zoom)

#### Touch-Friendly Interactions

- Removed hover effects on touch devices
- Active state scaling: 0.98
- Tap highlight color: purple with 20% opacity
- Reduced animation complexity
- Disabled parallax on mobile

#### iOS-Specific Fixes

- 16px font size for inputs (prevents zoom)
- Touch scrolling optimization
- Removed default button appearance
- Fixed scroll bounce behavior

### 6. Performance Optimizations

#### Animation Reductions

- Shorter animation durations on mobile
- Disabled complex parallax effects
- Simplified hover states for touch devices

#### Layout Optimizations

- Prevented horizontal overflow
- Optimized grid layouts for single column
- Better touch target sizes (minimum 44px)
- Improved tap feedback

## Testing Recommendations

### Viewport Sizes to Test

1. **375x667** (iPhone SE, 6, 7, 8) - Primary target
2. **360x640** (Small Android devices)
3. **414x896** (iPhone XR, 11)
4. **390x844** (iPhone 12, 13, 14)

### Orientation Testing

- Portrait mode (primary)
- Landscape mode (reduced vertical spacing)

### Device Testing

- iOS Safari (primary browser)
- Chrome Mobile
- Samsung Internet
- Firefox Mobile

### Key Areas to Verify

1. Hero section text doesn't overflow
2. Buttons are easily tappable (44px minimum)
3. Navigation is accessible
4. Project cards display properly
5. No horizontal scrolling
6. Forms don't trigger zoom on iOS
7. Safe area insets work on notched devices

## Browser Support

### Fully Supported

- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+
- Firefox Mobile 90+

### Graceful Degradation

- Older browsers fall back to standard responsive design
- Custom media queries ignored if not supported
- Safe area insets optional enhancement

## Performance Metrics

### Target Metrics for 375x667

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### Optimizations Applied

- Reduced particle counts for mobile
- Simplified animations
- Lazy loading for images
- Code splitting for heavy components
- Optimized font loading

## Accessibility

### Touch Targets

- Minimum size: 44px × 44px (WCAG 2.1 Level AAA)
- Adequate spacing between interactive elements
- Clear focus indicators

### Text Readability

- Minimum font size: 14px (11px for labels)
- Line height: 1.6 for body text
- Sufficient color contrast maintained

### Keyboard Navigation

- All interactive elements keyboard accessible
- Skip links for screen readers
- Proper focus management

## Future Enhancements

### Potential Improvements

1. Add PWA support for mobile installation
2. Implement touch gestures for project navigation
3. Add pull-to-refresh functionality
4. Optimize images with WebP/AVIF formats
5. Implement service worker for offline support
6. Add haptic feedback for iOS devices

### Monitoring

- Set up real user monitoring (RUM)
- Track Core Web Vitals on mobile
- Monitor error rates by device type
- A/B test mobile-specific features

## Summary

The portfolio is now fully optimized for 375x667 viewport with:

- ✅ Responsive typography scaling
- ✅ Touch-friendly interactions
- ✅ Optimized spacing and layout
- ✅ iOS-specific fixes
- ✅ Performance optimizations
- ✅ Accessibility compliance
- ✅ Safe area inset support
- ✅ Landscape mode support

All changes maintain visual consistency while ensuring excellent mobile user experience.
