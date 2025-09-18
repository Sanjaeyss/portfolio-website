# Resume Download Feature

## Overview
I've added a Resume download button to your portfolio website that allows visitors to download your resume as a PDF file.

## What was added:

### 1. Resume Button in Hero Section
- Added a "Download Resume" button with a download icon
- Styled with a distinctive red gradient to make it stand out
- Positioned alongside the existing "View My Work" and "Get In Touch" buttons

### 2. Resume Button in Navigation
- Added a "Resume" link in the navigation menu for easy access
- Styled consistently with the hero button design

### 3. Resume Files
- `resume.html` - A well-formatted HTML version of your resume
- `resume.pdf` - A PDF version ready for download
- `resume.txt` - A plain text fallback version

### 4. Interactive Features
- Click animation on the resume button
- Success notification when resume is downloaded
- Responsive design that works on mobile devices

## How to customize your resume:

### Option 1: Edit the HTML file
1. Open `resume.html` in a text editor
2. Update your personal information, experience, education, etc.
3. Run `python3 generate_resume_pdf.py` to generate a new PDF
4. The website will automatically use the updated PDF

### Option 2: Replace the PDF directly
1. Create your resume in your preferred format (Word, Google Docs, etc.)
2. Export/save it as a PDF
3. Replace the existing `resume.pdf` file with your new resume
4. Make sure to name it `resume.pdf` so the download links work correctly

### Option 3: Use the text file
1. Edit `resume.txt` with your information
2. Convert it to PDF using any online converter or your preferred method
3. Replace the existing `resume.pdf`

## File Structure
```
portfolio-website/
├── index.html          # Main website file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── resume.html         # HTML resume template
├── resume.pdf          # PDF resume (downloadable)
├── resume.txt          # Text resume (fallback)
└── generate_resume_pdf.py  # Script to convert HTML to PDF
```

## Testing
1. Open `index.html` in your browser
2. Click the "Download Resume" button in the hero section
3. Click the "Resume" link in the navigation menu
4. Both should trigger a download of your resume PDF

## Notes
- The resume button uses a distinctive red gradient color scheme to make it stand out
- The download functionality works on all modern browsers
- The design is fully responsive and works on mobile devices
- You can easily change the button colors by modifying the CSS in `styles.css`
