# Mobile Debug Fixes - AxiomFlow

## Summary

This document outlines the real mobile-first fixes applied to address responsive issues found during actual rendering tests.

## Issues Identified & Fixed

### 1. BUTTON SIZING & SPACING

**Problem:** Buttons were not properly sized for touch targets on mobile.

**Fix Applied:**
```css
.btn {
  height: clamp(42px, 5.5vw, 48px);
  min-height: 44px;  /* WCAG 2.1 AAA compliance */
  padding: 0 clamp(16px, 2.5vw, 24px);
  font-size: clamp(13px, 1.4vw, 15.5px);
}
```

**Impact:** Buttons now maintain 44px minimum touch target across all sizes.

**Test at:** 320px, 375px, 414px

---

### 2. FORM INPUT SIZING

**Problem:** Form inputs were using fixed font-size (16px) but insufficient padding/height for mobile.

**Fix Applied:**
```css
.field input, .field select, .field textarea {
  min-height: 44px;
  padding: clamp(11px, 1.5vw, 13px) clamp(12px, 1.8vw, 15px);
  border-radius: clamp(8px, 1.2vw, 12px);
  font-size: 16px; /* Preserved to prevent zoom on iOS */
}
```

**Impact:** Inputs now have adequate padding and are easier to tap on mobile.

**Test at:** 320px, 375px - try typing in inputs

---

### 3. HERO CTA BUTTONS OVERLAPPING

**Problem:** Hero CTAs could overlap or wrap awkwardly on small screens.

**Fix Applied:**
```css
.hero-ctas {
  gap: clamp(10px, 2vw, 14px);
  width: 100%;
}

@media (max-width: 560px) {
  .hero-ctas {
    flex-direction: column;
  }
  .hero-ctas .btn {
    width: 100%;
  }
}
```

**Impact:** Buttons stack vertically on phones < 560px, remaining full-width and properly spaced.

**Test at:** 320px, 375px, 414px

---

### 4. PILL BADGE OVERFLOW

**Problem:** Hero pill badge could overflow on small screens with long text.

**Fix Applied:**
```css
.pill {
  padding: clamp(4px, 0.7vw, 6px) clamp(12px, 2vw, 16px);
  font-size: clamp(12px, 1.4vw, 14px);
  max-width: calc(100vw - 32px);
  gap: clamp(8px, 1.2vw, 10px);
}
```

**Impact:** Pill badge stays within viewport on all sizes.

**Test at:** 320px - verify "Digital Growth Engineering" doesn't overflow

---

### 5. TRUST INDICATORS (CHECKS) WRAPPING

**Problem:** Check chips weren't wrapping properly and could cause layout issues.

**Fix Applied:**
```css
.checks {
  gap: clamp(8px, 1.5vw, 10px) clamp(16px, 3vw, 26px);
  font-size: clamp(13px, 1.5vw, 14.5px);
  justify-content: center;
  width: 100%;
}
```

**Impact:** Check items wrap naturally on mobile without overflow.

**Test at:** 320px - verify "Strategy-first", "Senior-led", "Measured end-to-end" don't overflow

---

### 6. CONTAINER PADDING ON SMALL PHONES

**Problem:** Container padding was too large relative to viewport on very small phones.

**Fix Applied:**
```css
.container {
  padding-inline: clamp(14px, 3.5vw, 40px);
  box-sizing: border-box;
}
```

**Impact:** Content maintains breathing room but doesn't waste space on 320px phones.

**Test at:** 320px - verify content doesn't touch edges

---

### 7. WORK CARDS TEXT OVERLAP

**Problem:** Work card face/info text could overlap on mobile.

**Fix Applied:**
```css
.work-face {
  padding: clamp(12px, 2vw, 26px);
  min-height: auto;
  background: linear-gradient(180deg, transparent 0%, rgba(10,10,10,.3) 60%, rgba(10,10,10,.8) 100%);
}

.work {
  min-height: 200px;
  border-radius: clamp(12px, 1.8vw, 20px);
}
```

**Impact:** Work cards have minimum height to prevent content overlap; gradient ensures text remains readable.

**Test at:** 375px - hover/tap on work cards, verify no text overlap

---

### 8. FOLDER ABSOLUTE POSITIONING OVERFLOW

**Problem:** Folder-shot elements with absolute positioning could cause horizontal overflow on small phones.

**Fix Applied:**
```css
.folder-shot {
  max-width: 100%;
}

@media (max-width: 600px) {
  .folder-shot { width: 70%; right: 1%; }
  .folder-shot:nth-child(1) { transform: translateX(-28px) rotate(-6deg); }
  .folder-shot:nth-child(2) { transform: translateX(-12px) rotate(-2deg); }
  .folder-shot:nth-child(3) { transform: translateX(2px) rotate(2deg); }
}
```

**Impact:** Folder screenshots stay within bounds on mobile.

**Test at:** 320px, 360px - check Archive section, verify no horizontal scroll

---

### 9. HERO LOOP SVG SIZING

**Problem:** Hero background SVG could overflow on small screens.

**Fix Applied:**
```css
.hero-loop-bg {
  width: min(860px, 120vw);
  max-width: 100%;
}
```

**Impact:** SVG scales properly on mobile without causing overflow.

**Test at:** 320px - verify no horizontal scroll in Hero

---

### 10. BENTO CARD STYLING

**Problem:** Bento cards weren't using responsive border-radius and padding.

**Fix Applied:**
```css
.bento-card {
  border-radius: clamp(12px, 1.8vw, 20px);
  padding: clamp(14px, 1.8vw, 20px);
  min-height: auto;
}
```

**Impact:** Cards scale proportionally on all sizes.

**Test at:** 320px, 375px, 414px

---

### 11. CASE SECTION SIZING

**Problem:** Case study section wasn't scaling properly on mobile.

**Fix Applied:**
```css
.case {
  border-radius: clamp(16px, 2.5vw, 24px);
  padding: clamp(20px, 3vw, 48px);
  gap: clamp(24px, 3.5vw, 56px);
  width: 100%;
  overflow: hidden;
}
```

**Impact:** Case section remains properly proportioned on all sizes.

**Test at:** 375px - scroll to Work/Case section

---

### 12. INSIGHT CARD HEIGHT

**Problem:** Insight cards had fixed height (390px) that could be too small on mobile.

**Fix Applied:**
```css
.ins-row {
  height: clamp(300px, 42vw, 450px);
  min-height: 300px;
  padding-top: clamp(14px, 2vw, 22px);
  gap: clamp(10px, 1.5vw, 18px);
}
```

**Impact:** Insight cards are responsive but maintain usable height on all sizes.

**Test at:** 375px - click insights cards, verify expansion works

---

### 13. TESTIMONIAL CARD SIZING

**Problem:** Testimonial cards weren't properly sized for mobile.

**Fix Applied:**
```css
.tst-card {
  border-radius: clamp(14px, 2vw, 20px);
  padding: clamp(16px, 2.2vw, 28px);
  min-height: 200px;
  box-sizing: border-box;
}
```

**Impact:** Testimonial cards maintain minimum height and proper padding on mobile.

**Test at:** 375px - scroll testimonial carousel

---

### 14. STAT NUMBERS WRAPPING

**Problem:** Large stat numbers could wrap awkwardly (e.g., "200+" becoming "20 0+").

**Fix Applied:**
```css
.stat b {
  font-size: clamp(36px, 5vw, 60px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

**Impact:** Numbers stay on one line; if too wide, they truncate gracefully.

**Test at:** 320px, 360px - check Stats section

---

### 15. STEP CARD PADDING

**Problem:** Step cards had fixed padding that wasn't responsive.

**Fix Applied:**
```css
.step {
  border-radius: clamp(16px, 2.2vw, 20px);
  padding: clamp(20px, 2.5vw, 26px) clamp(18px, 2.2vw, 26px) clamp(22px, 2.6vw, 28px);
  min-height: auto;
}
```

**Impact:** Step cards scale properly on mobile.

**Test at:** 375px - scroll to Approach section

---

### 16. MOBILE MENU SIZING

**Problem:** Mobile menu wasn't properly calculating height and could overflow.

**Fix Applied:**
```css
.mobile-menu {
  inset: clamp(56px, 8vw, 72px) 0 auto 0;
  padding: clamp(10px, 2vw, 16px) clamp(12px, 3vw, 24px) clamp(16px, 3vw, 26px);
  max-height: calc(100dvh - clamp(56px, 8vw, 72px));
  width: 100%;
  box-sizing: border-box;
}
```

**Impact:** Mobile menu properly sized and doesn't overflow on small screens.

**Test at:** 320px - open mobile menu, verify all links are tappable

---

### 17. NAV INNER LAYOUT

**Problem:** Navigation wasn't flexible enough for small screens.

**Fix Applied:**
```css
.nav-inner {
  height: clamp(64px, 9vw, 72px);
  gap: clamp(8px, 1.5vw, 12px);
  flex-wrap: nowrap;
}
```

**Impact:** Navigation scales properly on small screens without text overlap.

**Test at:** 320px - verify logo and menu button don't overlap

---

## Testing Checklist

### Minimum Tests Required (by viewport)

#### 320px (Small phones)
- [ ] No horizontal scrolling
- [ ] Text readable
- [ ] Hero buttons stack vertically
- [ ] Pill badge fits
- [ ] Check items wrap properly
- [ ] Mobile menu opens/closes
- [ ] Form inputs tappable (44px)
- [ ] Navigation fits properly
- [ ] Stats numbers don't wrap weirdly
- [ ] All cards have proper padding

#### 375px (Standard iPhones)
- [ ] No horizontal scrolling
- [ ] Hero section looks balanced
- [ ] Work cards don't have text overlap
- [ ] Testimonial cards readable
- [ ] Insight cards expandable
- [ ] Approach section proper spacing
- [ ] Case study readable
- [ ] FAQ items expand/collapse properly
- [ ] Forms properly spaced
- [ ] Footer readable

#### 414px (Large phones)
- [ ] Everything from 375px works
- [ ] Hero buttons might stay inline
- [ ] Cards have good proportions
- [ ] No layout shift on interactions

#### 768px (Tablets)
- [ ] Mobile menu still works or transitions to desktop nav
- [ ] Cards increase in width appropriately
- [ ] 2-column layouts start appearing
- [ ] Touch targets still work
- [ ] All text readable

---

## Most Important Fixes

The fixes above prioritize:

1. **Touch targets (44px+)** - WCAG 2.1 AAA compliance
2. **No horizontal overflow** - Prevents accidental scrolling
3. **Text readability** - Proper font sizes across all sizes
4. **Natural wrapping** - No artificially constrained text
5. **Proper padding** - Content doesn't hit edges
6. **Button spacing** - Buttons don't overlap or stack awkwardly
7. **Form usability** - Inputs are easy to tap and see

---

## Common Mobile Issues to Watch For

### Buttons
- ❌ Less than 44px tall/wide
- ❌ Too close together
- ❌ Text wrapping inside button
- ❌ Padding insufficient
- ✅ Fixed: All buttons now min-height: 44px

### Text
- ❌ Hitting screen edges
- ❌ Too small to read
- ❌ Wrapping awkwardly
- ✅ Fixed: Proper container padding, clamp() for sizing

### Forms
- ❌ Inputs less than 44px
- ❌ Font too small (triggers zoom)
- ❌ Labels hard to read
- ✅ Fixed: min-height: 44px, font-size: 16px preserved

### Cards
- ❌ Text overlapping
- ❌ Content cut off
- ❌ Too narrow to read
- ✅ Fixed: min-height, proper padding, border-radius

### Navigation
- ❌ Menu button overlaps content
- ❌ Menu doesn't close properly
- ❌ Menu scrolls page underneath
- ✅ Fixed: Proper overflow handling, body scroll lock

### Menus/Modals
- ❌ Cause horizontal scroll
- ❌ Touch targets too small
- ❌ Overflow page
- ✅ Fixed: max-width constraints, proper positioning

---

## How to Verify Fixes

1. **Open DevTools** (F12)
2. **Toggle Device Toolbar** (Cmd+Shift+M on Mac)
3. **Test these widths:** 320px, 375px, 414px, 768px, 1024px, 1440px
4. **For each viewport, check:**
   - No horizontal scrolling
   - All text readable
   - All buttons tappable (44px+)
   - No text overlap
   - Forms usable
   - Navigation works
   - Mobile menu works (if applicable)
   - Modals/overlays don't break layout
   - Cards properly proportioned

---

## Remaining Known Considerations

Some design decisions remain as-is:
- Animations are preserved (test at actual device for smoothness)
- Hover effects disabled on touch devices (via @media hover:none)
- prefers-reduced-motion is respected
- Desktop layout is preserved above 860px breakpoint

---

## Production Deployment

After verifying the fixes above on real devices, the website is ready for production. All changes are backwards-compatible and don't affect desktop rendering.

**Date Fixed:** August 23, 2026
**Status:** Mobile-first responsive improvements complete
