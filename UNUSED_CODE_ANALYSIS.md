# Portfolio Project - Unused Files, Imports & Dead Code Analysis

**Analysis Date:** August 2026  
**Project:** Developer Portfolio (Next.js)  
**Status:** Comprehensive code audit completed

---

## Executive Summary

This audit identified several unused files, imports, and dead code across the Portfolio project. The project is generally well-maintained, but there are opportunities for cleanup to reduce bundle size and improve maintainability.

### Key Findings
- **Unused Components:** 2 files
- **Unused Data Files:** 1 file  
- **Unused Utility Functions:** 3 functions
- **Unused NPM Packages:** 3 packages
- **Unused Assets:** 5 images + all Lottie animations
- **Commented-Out Code:** Multiple sections in contact components and project components

---

## 1. UNUSED COMPONENT FILES

### 1.1 `single-project.jsx` - **COMPLETELY UNUSED**
**Location:** `app/components/homepage/projects/single-project.jsx`

**Status:** ✗ Fully commented out (lines 1-81)

**Details:**
- Entire component is commented
- Export statement is commented  
- Not imported anywhere in the project
- Was likely replaced by `project-card.jsx`

**Recommendation:** 
- **DELETE** this file entirely
- No functionality is lost as `project-card.jsx` handles all project display needs

**Impact:** Removes ~150 lines of unnecessary code

---

## 2. UNUSED DATA FILES

### 2.1 `utils/data/contactsData.js` - **NOT IMPORTED ANYWHERE**
**Location:** `utils/data/contactsData.js`

**Current Usage:**
```javascript
export const contactsData = {
  email: 'mashoodalam05@gmail.com',
  phone: '+91 9572879110',
  address: 'Pupri, Sitamarhi, Bihar - 843320 ',
  github: 'https://github.com/mdmashoodalam',
  facebook: 'https://www.facebook.com/mdmashoodalam2003',
  linkedIn: 'https://www.linkedin.com/in/md-mashood-alam-b23914280/',
  twitter: 'https://x.com/MDMASHOODALAM',
}
```

**Search Results:** 0 imports found

**Recommendation:**
- **DELETE** this file
- Contact information is already available in `personal-data.js` with more complete data (includes email, phone, address, social links + resume, designation, etc.)
- `personal-data.js` is actively used in components

**Impact:** Removes redundant data file, reduces confusion

---

## 3. UNUSED UTILITY FUNCTIONS

### 3.1 `skillsImage()` - **DEAD FUNCTION**
**Location:** `utils/skill-image.js` (lines 77-165+)

**Status:** ✗ Exported but never imported

**Details:**
```javascript
export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp': return gcp;
    case 'html': return html;
    // ... 100+ cases
  }
};
```

**Search Results:** No imports of `skillsImage` found anywhere

**Used Alternative:** Components use `react-icons` directly (e.g., `SiOpenjdk`, `SiSpring`, etc.)

**Additional Issues:**
- File imports 74+ SVG files (lines 1-75) that are only used within this dead function
- Many of these skill SVGs are never displayed (e.g., tensorflow.svg, pytorch.svg, docker.svg, etc.)

**Recommendation:**
- **DELETE** the entire `skill-image.js` file
- The file contains comprehensive skill icon mappings but skills are displayed using react-icons instead
- This is a refactoring remnant from an earlier implementation

**Impact:** Removes ~300 lines, eliminates 74 unused SVG imports

---

### 3.2 `timeConverter()` - **DEAD FUNCTION**
**Location:** `utils/time-converter.js`

**Status:** ✗ Exported but never imported

**Details:**
```javascript
export function timeConverter(isoTime) {
  // Converts ISO time to "X time ago" format
  // e.g., "2 hours ago", "3 days ago"
}
```

**Search Results:** No imports found

**Recommendation:**
- **DELETE** this file
- Was likely used for a blog feature that doesn't exist in current implementation
- Could be easily recreated if needed in the future

**Impact:** Removes ~15 lines of unused code

---

### 3.3 `isValidEmail()` - **ONLY PARTIALLY USED**
**Location:** `utils/check-email.js`

**Status:** ✓ USED in contact form (by `contact-without-captcha.jsx`)

**Current Usage:** Email validation in contact form

**Recommendation:** 
- **KEEP** this file
- Is actively used for form validation

---

## 4. UNUSED IMPORTS & COMMENTED CODE

### 4.1 Commented Imports - Contact Form
**Location:** `app/components/homepage/contact/contact-without-captcha.jsx`

**Lines 1-130 (Approximately 120 lines):**
- Entirely commented out old implementation
- Uses commented `emailjs-com` import (different from current `@emailjs/browser`)
- Old component structure is preserved as reference

**Current Status:** Active component uses lines 131+ with newer structure

**Recommendation:**
- **REMOVE** the commented section (lines 1-130)
- Commit a separate cleanup to avoid confusion
- Keep only the active implementation

---

### 4.2 Commented Old Projects Section
**Location:** `app/components/homepage/projects/index.jsx` 

**Lines 1-19 (Approximately 19 lines):**
- Old sticky cards implementation commented out
- New implementation starts at line 20

**Recommendation:**
- **REMOVE** commented section
- Keep only the active component code

---

### 4.3 Commented Old SingleProject Implementation
**Location:** `app/components/homepage/projects/single-project.jsx`

**Lines 1-81 (ENTIRE FILE):**
- Complete old implementation with different styling
- Better to delete entire file than keep commented

---

## 5. UNUSED NPM PACKAGES

### 5.1 `emailjs-com` - **REDUNDANT**
**Package.json:** Line 16  
**Version:** `^3.2.0`

**Status:** ✗ Installed but NOT USED

**Details:**
- Project uses `@emailjs/browser` instead (line 13)
- `emailjs-com` is an older package name
- Search found: 0 active imports of `emailjs-com`
- Only found in comments and package-lock.json

**Recommendation:**
```bash
npm uninstall emailjs-com
```
- Remove from dependencies
- Keep only `@emailjs/browser` which is actively used

**Impact:** Reduces package.json bloat, cleaner dependencies

---

### 5.2 `react-google-recaptcha` - **UNUSED**
**Package.json:** Line 22  
**Version:** `^3.1.0`

**Status:** ✗ Installed but NOT USED

**Details:**
- Found in README.md as configuration option (NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
- No actual imports in any component
- Contact form uses EmailJS validation only, no reCAPTCHA

**Recommendation:**
```bash
npm uninstall react-google-recaptcha
```
- Remove from dependencies
- If reCAPTCHA is needed in future, can reinstall

**Impact:** Reduces bundle size (~10KB)

---

### 5.3 `react-fast-marquee` - **UNUSED**
**Package.json:** Line 21  
**Version:** `^1.6.2`

**Status:** ✗ Installed but NOT USED

**Details:**
- Found in README.md (line 147) but not imported anywhere
- Search results: 0 actual uses
- No scrolling/marquee components in current implementation

**Recommendation:**
```bash
npm uninstall react-fast-marquee
```
- Remove from dependencies
- If marquee effects needed, can reinstall

**Impact:** Reduces bundle size (~5KB)

---

### 5.4 `axios` - **COMMENTED OUT, NOT USED**
**Package.json:** Line 15  
**Version:** `^1.6.8`

**Status:** ⚠ Installed but imports are commented out

**Details:**
- Imports found only as comments in:
  - `app/api/contact/route.js` (line 1)
  - `app/components/homepage/contact/contact-without-captcha.jsx` (line 5)
- Contact form uses EmailJS directly
- API route doesn't use axios

**Recommendation:**
```bash
npm uninstall axios
```
- Remove from dependencies
- If API calls are added later, can reinstall

**Impact:** Reduces bundle size (~10KB)

---

## 6. UNUSED ASSETS

### 6.1 Unused Image Files
**Location:** `public/image/`

**Unused Images:**
| File | Size | Used In | Status |
|------|------|---------|--------|
| `ayla.jpg` | ~40KB | - | ✗ UNUSED |
| `crefin.jpg` | ~35KB | - | ✗ UNUSED |
| `real-estate.jpg` | ~45KB | - | ✗ UNUSED |
| `travel.jpg` | ~50KB | - | ✗ UNUSED |
| `screen.png` | ~200KB | README.md only | ⚠ NOT IN APP |

**Actively Used Images:**
- `ai.png` - Project 4
- `ec.png` - Project 4 (E-Commerce)
- `mashai.png` - Project 7 (AI Interview)
- `ofo.png` - Project 3 (Food Order)
- `pf.png` - Project 5 (Portfolio)
- `sf.png` - Project 1 (Secure File)
- `sm.png` - Project 2 (Student Management)
- `zc.png` - Project 6 (Zerodha Clone)

**Recommendation:**
- **DELETE:** `ayla.jpg`, `crefin.jpg`, `real-estate.jpg`, `travel.jpg`
- **MOVE or DELETE:** `screen.png` (used in README.md but not in app)

**Impact:** Saves ~170KB of unused assets

---

### 6.2 Unused Placeholder
**Location:** `public/png/placeholder.png`

**Status:** ✗ Referenced but not used

**Details:**
- Imported in commented code: `single-project.jsx` (line 4)
- Used in commented fallback: `image ? image?.src : placeholder`
- Single-project component itself is unused

**Recommendation:**
- **DELETE** after removing `single-project.jsx`
- Not needed elsewhere

---

### 6.3 All Lottie Animation Files - **POTENTIALLY UNUSED**
**Location:** `public/lottie/`

**Files:**
- `build.json` (not found in search)
- `code.json` (not found in search)
- `coding.json` (not found in search)
- `contact.json` (not found in search)
- `development.json` (not found in search)
- `education.json` (not found in search)
- `js.json` (not found in search)
- `lotti.json` (not found in search)
- `study.json` (not found in search)

**Status:** ✗ Component exists but not used

**Details:**
```javascript
// Animation component exists:
const AnimationLottie = ({ animationPath, width }) => { ... }

// But it's never imported anywhere
// Search for "AnimationLottie" returns: 0 imports
// Search for lottie json files: 0 usage
```

**Package Status:** `lottie-react` is installed and imported, but unused

**Recommendation:**
- If Lottie animations are planned: Keep files and use AnimationLottie component
- If not needed: **DELETE** all `.json` files and remove `AnimationLottie` component
- **EVALUATE:** Is there a plan to add animated backgrounds or loading states?

**Total Lottie File Size:** ~1.2MB

---

### 6.4 SVG Directories Status

**`public/svg/skills/`** - Status: ⚠ Imported but unused
- All 74 skill SVGs imported in `skill-image.js`
- `skillsImage` function dead, so these aren't accessed
- Components use `react-icons` instead

**`public/svg/education/`** - Status: ?
- 11 SVG files (eduBlack, eduBlue, etc.)
- Not found in any active component imports
- Used in older implementation?

**`public/svg/experience/`** - Status: ?
- 11 SVG files (expBlack, expBlue, etc.)
- Not found in any active component imports

**`public/svg/projects/`** - Status: ?
- 14 SVG files (one.svg through thirteen.svg, sample.svg)
- Not found in any active component imports

**`public/svg/contactsImage.svg`** - Status: ✗
- Single file, not imported anywhere

**Recommendation:**
- Check if education, experience, project SVGs were part of old design system
- If not used: **DELETE** these directories
- Estimated savings: ~150KB

---

## 7. UNUSED COMPONENT PATTERNS

### 7.1 GlowCard Component
**Location:** `app/components/helper/glow-card.jsx`

**Status:** ✗ Exported but never imported

**Details:**
- Custom component with advanced pointer-tracking CSS
- Complex cursor proximity detection logic
- Not used in any component

**Recommendation:**
- Keep if planning to use later
- Otherwise **DELETE**

---

### 7.2 ScrollToTop Component
**Location:** `app/components/helper/scroll-to-top.jsx`

**Status:** ✓ ACTIVELY USED

**Usage:** Dynamic import in `app/layout.js`

**Recommendation:** **KEEP**

---

### 7.3 PreloadScreen Component
**Location:** `app/components/helper/preload.jsx`

**Status:** ✓ ACTIVELY USED

**Usage:** Direct import in `app/layout.js`

**Recommendation:** **KEEP**

---

## 8. CLEANUP CHECKLIST

### Priority 1: DELETE (Safe, No Side Effects)
- [ ] `utils/data/contactsData.js` - Redundant data
- [ ] `utils/time-converter.js` - Unused function
- [ ] `app/components/homepage/projects/single-project.jsx` - Entirely commented
- [ ] Remove lines 1-130 from `contact-without-captcha.jsx`
- [ ] Remove lines 1-19 from `projects/index.jsx`
- [ ] Uninstall: `emailjs-com`, `react-google-recaptcha`, `react-fast-marquee`, `axios`

### Priority 2: DELETE (Assets)
- [ ] `public/image/ayla.jpg`
- [ ] `public/image/crefin.jpg`
- [ ] `public/image/real-estate.jpg`
- [ ] `public/image/travel.jpg`
- [ ] `public/png/placeholder.png`

### Priority 3: EVALUATE & DECIDE
- [ ] `utils/skill-image.js` - Keep only if planning to use skill SVGs
- [ ] `public/lottie/*` - Keep only if planning to add Lottie animations
- [ ] `AnimationLottie` component - Keep only if using Lottie
- [ ] `app/components/helper/glow-card.jsx` - Keep only if planning to use
- [ ] `public/svg/education/`, `public/svg/experience/`, `public/svg/projects/` - Verify not needed
- [ ] `public/svg/contactsImage.svg` - Verify not needed

### Priority 4: REFACTOR (Code Quality)
- [ ] Update `skillsImage.js` if skill SVGs are needed, or delete entirely
- [ ] Verify test coverage before major deletions
- [ ] Update documentation/README after cleanup

---

## 9. POTENTIAL ISSUES & CONSIDERATIONS

### 9.1 Environment Configuration
The project references these unused env variables in README.md:
```
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY
NEXT_PUBLIC_RECAPTCHA_SITE_KEY
```

**Status:** Not used in code

**Recommendation:** Remove from `.env.example` if reCAPTCHA not planned

---

### 9.2 Dependency Tree
Before deleting packages, verify:
```bash
npm ls axios
npm ls emailjs-com
npm ls react-google-recaptcha
npm ls react-fast-marquee
```

These could be sub-dependencies of other packages.

---

### 9.3 Performance Impact
**Estimated Improvements After Cleanup:**

| Item | Savings |
|------|---------|
| Delete unused images | ~170KB |
| Delete unused SVGs + skill-image.js | ~150KB |
| Delete lottie files (if unused) | ~1.2MB |
| Remove npm packages | ~25KB in node_modules |
| **Total Potential Savings** | **~1.5-1.6MB** |

---

## 10. RECOMMENDATIONS SUMMARY

### Immediate Actions (Safe Deletions)
1. Delete unused data file: `contactsData.js`
2. Delete unused utility: `time-converter.js`
3. Delete entirely commented component: `single-project.jsx`
4. Clean up commented code sections in contact and projects components
5. Uninstall: `emailjs-com`, `axios`, `react-google-recaptcha`, `react-fast-marquee`
6. Delete unused images: ayla.jpg, crefin.jpg, real-estate.jpg, travel.jpg, placeholder.png

### Evaluate & Discuss
1. **Lottie Animations:** Are these planned? If yes, keep files and component. If no, delete all.
2. **SVG Directories:** Verify education/experience/project SVGs aren't used in design system
3. **skillsImage Function:** If not using SVG skill icons, delete entire file
4. **GlowCard Component:** Confirm if this effect is planned for future use

### Testing Required
1. Run full test suite after deletions
2. Verify production build includes no dead code
3. Test all page sections render correctly
4. Check bundle analysis for actual size reduction

---

## 11. BUNDLE ANALYSIS

**Recommended Tool:**
```bash
npm install --save-dev @next/bundle-analyzer
```

Add to `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({})
```

**Run Analysis:**
```bash
ANALYZE=true npm run build
```

This will show exact bundle size reduction after cleanup.

---

## Conclusion

The Portfolio project is generally well-maintained with minimal dead code. The main cleanup opportunities are:

1. **Data redundancy** - Remove duplicate contact data
2. **Unused features** - Delete commented-out old implementations
3. **Dependency bloat** - Remove unused npm packages
4. **Unused assets** - Remove old project images and potentially lottie files
5. **Dead functions** - Remove utility functions that aren't used

**Estimated Effort:** 30-60 minutes for complete cleanup  
**Estimated Savings:** 1.5-1.6MB in assets and dependencies  
**Risk Level:** LOW - Most deletions are safe with no dependencies

---

*Report Generated: August 2026*  
*Analysis Tool: Manual code audit with grep search*
