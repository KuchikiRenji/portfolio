# Resume Upload Guide

## Quick Start

### Step 1: Prepare Your Resume
1. **Save your resume as PDF** with the filename: `Kuchiki_Renji_Resume.pdf`
2. **Optimize the file size** (recommended < 2MB for fast loading)
3. **Ensure it's a PDF** (not Word, image, or other format)

### Step 2: Upload to Portfolio
1. **Navigate to**: `public/resume/` folder in your project
2. **Place your PDF file** there with the exact name: `Kuchiki_Renji_Resume.pdf`
3. **Commit and push** to your repository

### Step 3: Verify
After deployment, your resume will be available at:
- **Direct URL**: `https://your-domain.com/resume/Kuchiki_Renji_Resume.pdf`
- **Download button**: In the About section of your portfolio

## File Location

```
your-portfolio/
├── public/
│   ├── resume/
│   │   ├── Kuchiki_Renji_Resume.pdf  ← Place your resume here
│   │   └── README.md
│   └── ...
└── ...
```

## Implementation Details

### 1. Resume Download Button

A "Download Resume" button has been added to the About section (`src/components/about/about-section.tsx`):

```tsx
<motion.a
  href="/resume/Kuchiki_Renji_Resume.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 border border-white/20 bg-white/5 text-lg font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
>
  <Download className="h-5 w-5" />
  Download Resume
</motion.a>
```

### 2. Button Features
- **Gradient border** with glassmorphism effect
- **Hover animation** (scale up)
- **Tap feedback** (scale down)
- **Download attribute** triggers browser download
- **Responsive design** works on mobile and desktop
- **Positioned next to** "Get in Touch" button

### 3. Mobile Optimization
- Buttons stack vertically on mobile (< 640px)
- Full width on small screens for easy tapping
- Adequate spacing between buttons
- Touch-friendly size (48px height minimum)

## File Naming Options

### Recommended (Primary)
```
Kuchiki_Renji_Resume.pdf
```

### Alternative Options
If you want to use a different name, update the href in `about-section.tsx`:

```tsx
// Option 1: Simple name
href="/resume/resume.pdf"

// Option 2: With date
href="/resume/Kuchiki_Renji_Resume_2026.pdf"

// Option 3: With version
href="/resume/Kuchiki_Renji_Resume_v2.pdf"
```

## File Requirements

### Format
- **Required**: PDF (.pdf)
- **Not supported**: Word (.doc, .docx), Images (.jpg, .png), Text (.txt)

### Size
- **Recommended**: < 2MB
- **Maximum**: < 5MB (for fast loading)
- **Optimization**: Use online PDF compressors if needed

### Content
- **Pages**: 1-2 pages recommended
- **Resolution**: 300 DPI for print quality
- **Fonts**: Embed all fonts
- **Links**: Clickable links work in PDF

## How to Optimize PDF Size

### Online Tools
1. **Adobe Acrobat Online**: https://www.adobe.com/acrobat/online/compress-pdf.html
2. **Smallpdf**: https://smallpdf.com/compress-pdf
3. **iLovePDF**: https://www.ilovepdf.com/compress_pdf

### Tips
- Remove unnecessary images
- Reduce image resolution to 150-300 DPI
- Use PDF compression tools
- Remove metadata if not needed

## Testing Your Resume

### Local Testing
1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/#about`
3. Scroll to the bottom
4. Click "Download Resume" button
5. Verify the PDF downloads correctly

### Production Testing
After deployment:
1. Visit your live site
2. Go to About section
3. Click "Download Resume"
4. Verify download works
5. Test direct URL: `https://your-domain.com/resume/Kuchiki_Renji_Resume.pdf`

## Updating Your Resume

### To Update
1. **Replace the file** in `public/resume/` with your new version
2. **Keep the same filename** (or update the code if you change it)
3. **Commit and push** changes
4. **Deploy** to production

### Version Control
If you want to keep old versions:
```
public/resume/
├── Kuchiki_Renji_Resume.pdf          ← Current version (linked)
├── Kuchiki_Renji_Resume_2025.pdf     ← Old version
└── Kuchiki_Renji_Resume_2024.pdf     ← Older version
```

## Adding Resume to Navbar (Optional)

If you want to add a "Resume" link to the navbar:

### Step 1: Update Navbar Links
Edit `src/components/Navbar.tsx`:

```tsx
const navLinks = [
  { href: "/", label: "Home", isHash: false },
  { href: "#projects", label: "Projects", isHash: true },
  { href: "#about", label: "About", isHash: true },
  { href: "#contact", label: "Contact", isHash: true },
  { href: "/resume/Kuchiki_Renji_Resume.pdf", label: "Resume", isHash: false, download: true }, // Add this
] as const;
```

### Step 2: Handle Download Attribute
Update the link rendering to support download:

```tsx
<Link 
  key={link.href} 
  href={link.href}
  download={link.download}
  className={linkBaseClasses}
>
  <span>{link.label}</span>
</Link>
```

## Troubleshooting

### Issue: Resume doesn't download
**Solution**: 
- Check filename matches exactly (case-sensitive)
- Verify file is in `public/resume/` folder
- Clear browser cache
- Check browser console for errors

### Issue: 404 Not Found
**Solution**:
- Ensure file is in `public/resume/` not `src/resume/`
- Verify filename spelling
- Rebuild and redeploy

### Issue: File opens in browser instead of downloading
**Solution**:
- The `download` attribute should trigger download
- Some browsers may open PDF instead (this is normal)
- Users can right-click → "Save As" if needed

### Issue: File size too large
**Solution**:
- Compress PDF using online tools
- Reduce image quality in resume
- Remove unnecessary pages or images

## Best Practices

### Resume Content
- ✅ Keep it concise (1-2 pages)
- ✅ Use professional formatting
- ✅ Include contact information
- ✅ Highlight relevant skills and projects
- ✅ Use action verbs and metrics

### File Management
- ✅ Use consistent naming convention
- ✅ Keep file size under 2MB
- ✅ Update regularly (every 3-6 months)
- ✅ Test download after each update
- ✅ Keep backup copies

### SEO & Accessibility
- ✅ Use descriptive filename
- ✅ Add alt text to download button
- ✅ Ensure PDF is text-based (not scanned image)
- ✅ Include metadata in PDF
- ✅ Make sure PDF is searchable

## Advanced: Multiple Resume Versions

If you want to offer different resume versions:

### Example Structure
```
public/resume/
├── Kuchiki_Renji_Resume.pdf           ← General version
├── Kuchiki_Renji_Resume_AI_ML.pdf     ← AI/ML focused
├── Kuchiki_Renji_Resume_FullStack.pdf ← Full-stack focused
└── Kuchiki_Renji_CV_Academic.pdf      ← Academic CV
```

### Update About Section
```tsx
<div className="flex flex-wrap gap-3 justify-center">
  <motion.a href="/resume/Kuchiki_Renji_Resume.pdf" download>
    <Download /> General Resume
  </motion.a>
  <motion.a href="/resume/Kuchiki_Renji_Resume_AI_ML.pdf" download>
    <Download /> AI/ML Resume
  </motion.a>
  <motion.a href="/resume/Kuchiki_Renji_Resume_FullStack.pdf" download>
    <Download /> Full-Stack Resume
  </motion.a>
</div>
```

## Security Considerations

### What's Safe
- ✅ PDF files in `public/` folder are publicly accessible
- ✅ Anyone with the URL can download
- ✅ This is normal for portfolio resumes

### What to Avoid
- ❌ Don't include sensitive personal information (SSN, passport number)
- ❌ Don't include private addresses (use city/state only)
- ❌ Don't include personal phone numbers (use professional number)
- ❌ Don't include references without permission

### Privacy Tips
- Use professional email address
- Use LinkedIn URL instead of full address
- Consider using a Google Voice number
- Remove birth date if not required

## Analytics (Optional)

To track resume downloads, you can add analytics:

### Using Google Analytics
```tsx
<motion.a
  href="/resume/Kuchiki_Renji_Resume.pdf"
  download
  onClick={() => {
    // Track download event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'Resume',
        event_label: 'Kuchiki_Renji_Resume.pdf',
      });
    }
  }}
>
  <Download /> Download Resume
</motion.a>
```

## Summary

Your portfolio now has a professional resume download feature:

✅ **Download button** in About section  
✅ **Mobile-optimized** with responsive design  
✅ **Smooth animations** on hover and tap  
✅ **Easy to update** - just replace the PDF file  
✅ **Direct URL access** for sharing  
✅ **Professional styling** matching your portfolio theme  

Simply place your `Kuchiki_Renji_Resume.pdf` file in the `public/resume/` folder and it will be ready to download!
