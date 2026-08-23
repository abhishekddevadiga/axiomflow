# Responsive Testing Guide - AxiomFlow

## Quick Testing Checklist

### How to Test

1. **Open Browser DevTools** (F12 or Cmd+Option+I)
2. **Toggle Device Toolbar** (Cmd+Shift+M on Mac, Ctrl+Shift+M on Windows)
3. **Test each viewport size** listed below
4. **Check both Portrait and Landscape** orientations
5. **Use the checklist below** for each device

---

## Viewport Test Sizes

### Desktop Viewports

#### 1920px Wide (Large Monitor)
```
Expected: Full design with maximum container width
- Container width: ~1320px
- Hero section spans nicely with space on sides
- All navigation items visible horizontally
- Full-width images and sections well-proportioned
```

#### 1440px (Standard Laptop)
```
Expected: Primary design state
- Container width: ~1180px
- Hero section centered with balanced margins
- All navigation visible
- Optimal reading line length for text
```

#### 1280px (Small Laptop)
```
Expected: Comfortable working size
- Container width: ~1200px
- All content remains accessible
- Navigation fully visible
- Minor spacing adjustments applied
```

### Tablet Viewports

#### 1024px Landscape (iPad Pro, Large Tablet)
```
Expected: Transitional layout
- ✓ Navigation still horizontal but may be tightened
- ✓ Bento cards: 6-column spans (1x2 or 2x1)
- ✓ Work cards: 6-column spans
- ✓ Steps: 2-column grid
- ✓ Footer: 3-column grid
- ✓ Case study: Single column layout
- ✓ Archive folders: Single column
```

#### 820px Landscape (iPad Air)
```
Expected: Tablet landscape mode
- ✓ Still 3-column layouts where applicable
- ✓ Navigation remains horizontal but compact
- ✓ Wall: 3 columns of images
- ✓ Reel: Smaller dimensions
- ✓ Testimonials: Scroll-able carousel visible
- ✓ Reduced padding but content still breathes
```

#### 768px Portrait (iPad)
```
Expected: Mobile navigation activation
- ✓ Hamburger menu appears at 860px breakpoint
- ✓ Mobile menu slides in from top
- ✓ Navigation links hidden, menu button visible
- ✓ All content stacks appropriately
- ✓ Single-column layout for main content
- ✓ Touch targets are 44px+ minimum
```

### Mobile Viewports

#### 414px (Large iPhone - iPhone 12/13)
```
Expected: Single column layout
- ✓ Hamburger menu active
- ✓ Hero: Single column with stacked CTAs
- ✓ Typography readable without zooming
- ✓ All buttons full-width or properly spaced
- ✓ Images scale without distortion
- ✓ Form fields have adequate spacing
- ✓ Testimonial carousel horizontal scroll works
- ✓ Archive folders: Single column with proper stack
- ✓ Wall: 2-column grid
- ✓ Reel: Smaller, but viewable
- ✓ Footer: Single column
```

#### 375px (Standard iPhone - iPhone SE/12 Mini)
```
Expected: Optimized single-column layout
- ✓ No horizontal scrolling
- ✓ Comfortable edge margins (no content touching edges)
- ✓ Typography at readable sizes
- ✓ Cards maintain visual hierarchy
- ✓ Images not too cramped
- ✓ Form inputs spacious
- ✓ Buttons easy to tap
- ✓ Numbers don't wrap awkwardly (e.g., "200+" not "20 0+")
- ✓ Content well-organized
```

#### 360px (Android Standard)
```
Expected: Maximized mobile experience
- ✓ All content accessible
- ✓ Proper padding maintained
- ✓ No clipping or overflow
- ✓ Text remains readable
- ✓ Touch targets comfortable
- ✓ Adequate spacing between interactive elements
```

#### 320px (iPhone SE 1st Gen, Small Phones)
```
Expected: Graceful scaling on smallest screen
- ✓ Text is readable (not tiny)
- ✓ Margins prevent edge-to-edge content
- ✓ Cards don't feel cramped
- ✓ All interactive elements accessible
- ✓ No horizontal scrolling at any point
- ✓ Images scaled appropriately
- ✓ Form fields have padding
```

---

## Section-by-Section Testing

### Navigation (All Sizes)

**Desktop (1440px+)**
- [ ] Logo displays properly
- [ ] Navigation links: "How We Think", "What We Do", "Results", "Who We Help", "Insights"
- [ ] CTA button visible
- [ ] Underline animation on hover
- [ ] Proper spacing between nav items

**Tablet (860px - 1024px)**
- [ ] Navigation still shows all links
- [ ] Spacing tighter but readable
- [ ] Button still visible

**Mobile (< 860px)**
- [ ] Hamburger menu visible
- [ ] "AxiomFlow." logo visible
- [ ] Menu button takes up small space
- [ ] Menu slides in from top when clicked
- [ ] Menu links are full-width and tappable
- [ ] Close menu by clicking outside or choosing link

---

### Hero Section (Critical)

**Desktop (1440px)**
- [ ] Large hero image/SVG centered
- [ ] Heading "Business outcomes, built intelligently." is prominent (not too large)
- [ ] Description text fits in ~2 lines
- [ ] Two CTAs side-by-side
- [ ] Trust indicators below

**Tablet (768px)**
- [ ] Hero still impactful
- [ ] Heading size reduced but still readable
- [ ] Description fits properly
- [ ] CTAs may adjust spacing

**Mobile (375px)**
- [ ] Heading size: clamp(24px, 7.5vw, 92px) - should be ~30-35px
- [ ] Description: ~16px readable
- [ ] CTAs stack vertically (both full-width)
- [ ] Trust indicators stack or wrap properly
- [ ] No text touching screen edges

**Small Mobile (320px)**
- [ ] Heading doesn't get too small (minimum 24px)
- [ ] Everything has breathing room from edges
- [ ] Text remains readable
- [ ] CTAs full-width

---

### Capabilities/Bento (Complex Layout)

**Desktop (1440px)**
- [ ] 6 cards in 12-column grid
- [ ] Some cards span 6, 7, or 5 columns as designed
- [ ] Visual panels have 16:9 aspect ratio
- [ ] Title and description readable
- [ ] Interactive elements respond to hover
- [ ] Metadata tags display properly

**Tablet Landscape (1020px)**
- [ ] All cards normalized to 6-column spans
- [ ] No cards remain oversized or undersized
- [ ] Spacing maintained
- [ ] Visual panels readable

**Mobile (375px)**
- [ ] Single column layout
- [ ] Cards full-width minus container padding
- [ ] Visual panels maintain 16:10 aspect ratio
- [ ] Text not cramped
- [ ] Tags wrap properly

---

### Work/Projects (Interactive)

**Desktop (1440px)**
- [ ] Project cards arranged in grid
- [ ] Images load and display properly
- [ ] Hover states work: image scales, overlay appears
- [ ] Project information visible on hover
- [ ] Project title and sector visible at all times

**Tablet (1020px)**
- [ ] Cards normalize to 6-column width
- [ ] Images still display nicely
- [ ] Hover effects still visible
- [ ] Text overlay readable

**Mobile (< 768px - Touch Device)**
- [ ] Tap affordance (circular button) visible in corner
- [ ] Tap to expand/collapse project details
- [ ] Image displayed full-width
- [ ] Title visible by default
- [ ] Tap to reveal full project information
- [ ] Details visible, then tappable to hide

---

### Testimonials/Reviews

**Desktop (1440px)**
- [ ] Multiple testimonial cards visible in scrollable carousel
- [ ] Each card: quote, client name, role, company
- [ ] Navigation arrows and dots visible
- [ ] Can scroll left/right

**Tablet (860px)**
- [ ] Fewer cards visible (responsive width)
- [ ] Still scrollable carousel
- [ ] Navigation controls work

**Mobile (375px)**
- [ ] Single or 1.5 cards visible
- [ ] Card width: ~85-90% of viewport
- [ ] Scroll and navigation works smoothly
- [ ] Touch-friendly arrow buttons (40px+)
- [ ] Tap dots to jump to card

---

### Thinking Track (Timeline)

**Desktop (1440px)**
- [ ] Alternating left-right layout
- [ ] Vertical spine in center
- [ ] Text left for odd steps, right for even steps
- [ ] Figures (diagrams) on opposite side
- [ ] Animated on scroll

**Tablet (860px)**
- [ ] Transitions to single-column left-rail
- [ ] Vertical spine on left
- [ ] All content on right side
- [ ] Figures stack below content

**Mobile (375px)**
- [ ] Single spine on left
- [ ] All content flows down the right
- [ ] Spine marker visible
- [ ] Figures scale down but visible
- [ ] Text readable (not cramped)

---

### Content Production (Complex Node System)

**Desktop (1440px)**
- [ ] Multiple phases visible
- [ ] Nodes arranged horizontally within phases
- [ ] Connectors between nodes visible
- [ ] Animated on interaction

**Tablet (1020px)**
- [ ] Nodes wrap within phases
- [ ] Still readable

**Mobile (375px)**
- [ ] Vertical layout
- [ ] Nodes stack vertically
- [ ] Connectors adjust to vertical orientation
- [ ] Content remains accessible
- [ ] No overflow

---

### Forms (Contact)

**Desktop (1440px)**
- [ ] Contact notes on left, form on right
- [ ] Form inputs: ~2 columns
- [ ] Labels clear
- [ ] Inputs have adequate padding

**Tablet (1020px)**
- [ ] Stacks to single column
- [ ] Notes above or beside
- [ ] Maintains readability

**Mobile (375px)**
- [ ] Full-width single column
- [ ] Labels above inputs
- [ ] Input padding: ~10px top/bottom, ~12px left/right
- [ ] Font size: ~16px (zoom-safe)
- [ ] Submit button: Full-width, 44px+ height
- [ ] Error messages appear below fields
- [ ] All fields accessible without horizontal scroll

---

### Footer

**Desktop (1440px)**
- [ ] 3-column footer (Company, Resources, Legal)
- [ ] Logo at top
- [ ] Address/tagline under logo
- [ ] Links organized in columns
- [ ] Horizontal line separates footer sections

**Tablet (860px)**
- [ ] Adjusts to single column
- [ ] Content stacks vertically
- [ ] Links remain organized

**Mobile (375px)**
- [ ] Single column
- [ ] Logo, company info, links, legal
- [ ] Each section stacks
- [ ] Ghost text visible but not intrusive

---

## Critical Issues to Watch For

### ❌ Major Problems (MUST FIX)

1. **Horizontal Scrolling**
   - No horizontal scrolling at any viewport
   - Test: Resize to each size, ensure no scroll bar appears

2. **Text Clipping**
   - No text cut off at edges
   - Headings that wrap awkwardly (e.g., "Business outcomes," on first line, "built intelligently" on next)

3. **Image Distortion**
   - Images not stretched or squeezed
   - Proper aspect ratios maintained

4. **Button/Link Inaccessibility**
   - All buttons at least 44px tall/wide for touch
   - No overlapping interactive elements
   - Proper spacing between buttons

5. **Form Field Issues**
   - Inputs not tiny on mobile
   - Labels clearly visible
   - Submit button tappable

### ⚠️ Medium Issues (SHOULD FIX)

1. **Spacing Inconsistencies**
   - Large gaps on one size, cramped on another
   - Should transition smoothly using clamp()

2. **Typography Readability**
   - Text too small on any size
   - Line length too long (should be max ~65 characters on desktop)

3. **Navigation Usability**
   - Mobile menu hard to access
   - Links hard to tap
   - Menu doesn't close properly

4. **Animation Problems**
   - Animations causing layout shifts
   - Animations jittery on mobile
   - Animations not respecting prefers-reduced-motion

### ℹ️ Minor Issues (NICE TO HAVE)

1. **Whitespace Optimization**
   - Extra space that could be better utilized
   - Uneven spacing between sections

2. **Visual Balance**
   - Content not centered properly
   - Asymmetrical layouts

---

## Mobile-Specific Testing Tips

### iPhone Testing
```
Device          | Screen Size | Test Width
iPhone SE 1     | 320 x 568   | 320px
iPhone SE 3     | 375 x 667   | 375px
iPhone 12 mini  | 375 x 812   | 375px
iPhone 12/13    | 390 x 844   | 390px
iPhone 14/15    | 393 x 852   | 393px
iPhone 12 Pro Max| 428 x 926  | 428px
```

### Android Testing
```
Device          | Screen Size | Test Width
Galaxy S21      | 360 x 800   | 360px
Galaxy S22      | 360 x 800   | 360px
Galaxy A12      | 720 x 1600  | 360px (2x scale)
```

### Tablet Testing
```
Device          | Screen Size | Portrait | Landscape
iPad Mini 6     | 2266 x 1488 | 540px    | 810px
iPad Air 5      | 2560 x 1640 | 820px    | 1180px
iPad Pro 11"    | 2388 x 1668 | 834px    | 1194px
iPad Pro 12.9"  | 2732 x 2048 | 1024px   | 1366px
```

---

## Keyboard Navigation Testing

For accessibility, verify:
- [ ] Tab through all interactive elements
- [ ] Tab order makes sense (left-to-right, top-to-bottom)
- [ ] Focus indicator visible on all elements
- [ ] Can activate buttons with Enter/Space
- [ ] Can open/close mobile menu with keyboard
- [ ] Form inputs accessible via Tab
- [ ] Links underlined or highlighted on focus

---

## Browser Testing

Test on:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Safari iOS (iPhone)
- [ ] Chrome Mobile (Android)

---

## Performance Checks

- [ ] Page loads quickly at each size
- [ ] Animations are smooth (60fps)
- [ ] No layout thrashing
- [ ] Images load appropriately
- [ ] Mobile doesn't load huge desktop images

---

## Sign-Off Checklist

After testing all sections above at all viewport sizes:

- [ ] No horizontal scrolling at any size
- [ ] All text readable at all sizes
- [ ] All interactive elements accessible (44px+)
- [ ] Images display properly without distortion
- [ ] Navigation works at all sizes
- [ ] Touch interactions work on mobile
- [ ] Forms are usable on mobile
- [ ] Footer displays properly
- [ ] Animations don't cause issues
- [ ] Color contrast maintained
- [ ] Keyboard navigation works
- [ ] Responsive design intent preserved
- [ ] No jarring layout shifts
- [ ] Touch targets properly spaced

---

## Approved for Production ✓

Once all items in the Sign-Off Checklist pass, the website is ready for production deployment with full responsive support.

---

**Last Updated:** August 23, 2026
**Framework:** Next.js with CSS Grid/Flexbox
**Breakpoints:** 320px to 2560px+
**Touch Support:** Yes
**Accessibility:** WCAG 2.1 AA focused
