#!/usr/bin/env python3
"""
Script to generate a PDF resume from the HTML template.
Requires: pip install weasyprint
"""

try:
    from weasyprint import HTML, CSS
    from weasyprint.text.fonts import FontConfiguration
    import os
    
    def generate_resume_pdf():
        """Generate PDF resume from HTML template."""
        
        # Check if resume.html exists
        if not os.path.exists('resume.html'):
            print("Error: resume.html not found!")
            return False
            
        try:
            # Read the HTML file
            with open('resume.html', 'r', encoding='utf-8') as file:
                html_content = file.read()
            
            # Create HTML object
            html_doc = HTML(string=html_content)
            
            # Generate PDF
            html_doc.write_pdf('resume.pdf')
            
            print("✅ Resume PDF generated successfully: resume.pdf")
            return True
            
        except Exception as e:
            print(f"Error generating PDF: {e}")
            return False
    
    if __name__ == "__main__":
        generate_resume_pdf()
        
except ImportError:
    print("""
    ⚠️  WeasyPrint not installed. To generate PDF resume:
    
    1. Install WeasyPrint:
       pip install weasyprint
    
    2. Run this script again:
       python generate_resume_pdf.py
    
    Alternatively, you can:
    - Use the resume.html file directly in a browser
    - Print to PDF from the browser (Ctrl+P → Save as PDF)
    - Use online HTML to PDF converters
    """)
    
    # Create a simple text-based resume as fallback
    with open('resume.txt', 'w', encoding='utf-8') as f:
        f.write("""
SANJAEY SHUNMUGA SUNDARAM
Data Scientist and Developer

CONTACT INFORMATION
Email: your.email@example.com
Phone: +1 (555) 123-4567
Location: San Francisco, CA

PROFESSIONAL SUMMARY
Creative developer with a passion for crafting beautiful, functional digital experiences. 
With expertise in modern web technologies and a keen eye for design, I bring ideas to life 
through clean code and thoughtful user experiences. Specialized in data science, machine learning, 
and full-stack development.

TECHNICAL SKILLS
• HTML5, CSS3, JavaScript
• React, Node.js, Python
• Machine Learning, Data Analysis
• MongoDB, Firebase, TypeScript
• D3.js, Vue.js

PROFESSIONAL EXPERIENCE

Senior Data Scientist | Tech Innovations Inc. | 2022 - Present
• Led development of machine learning models for predictive analytics
• Improved business decision-making by 40%
• Built and deployed scalable data pipelines processing 1M+ records daily

Full Stack Developer | Digital Solutions LLC | 2020 - 2022
• Developed responsive web applications using React and Node.js
• Implemented real-time features and optimized application performance
• Resulted in 50% faster load times

Frontend Developer | Creative Agency | 2018 - 2020
• Created engaging user interfaces for various client projects
• Specialized in responsive design and user experience optimization

EDUCATION
Master of Science in Computer Science | University of California, Berkeley | 2016 - 2018
Bachelor of Science in Mathematics | Stanford University | 2012 - 2016

CERTIFICATIONS
• Google Cloud Professional Data Engineer (2023)
• AWS Certified Solutions Architect (2022)
• Certified Scrum Master (2021)
        """)
    
    print("📄 Created resume.txt as fallback. You can convert this to PDF manually.")
