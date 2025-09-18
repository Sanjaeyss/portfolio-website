# Portfolio Deployment Guide

## 🚀 GitHub Pages Deployment

### Step 1: Push to GitHub
```bash
# If you haven't already, push your code to GitHub
git add .
git commit -m "Add EmailJS integration for contact form"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository: https://github.com/Sanjaeyss/portfolio-website
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**
7. Your site will be available at: `https://sanjaey.github.io/portfolio-website/`

## 📧 EmailJS Setup (Contact Form)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Sanjaey,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (starts with "user_")
3. Copy this key

### Step 5: Update Your Code
Replace the placeholders in `script.js`:

```javascript
// Line 86: Replace YOUR_PUBLIC_KEY
emailjs.init("your_actual_public_key_here");

// Line 120: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send("your_service_id", "your_template_id", {
    // ... rest of the code
});
```

### Step 6: Test the Contact Form
1. Deploy your site to GitHub Pages
2. Visit your live site
3. Fill out the contact form
4. Check your email for the message

## 🔧 Alternative: Simple Contact Form (No EmailJS)

If you prefer not to use EmailJS, you can use a simple form service like Formspree:

### Step 1: Sign up for Formspree
1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Get your form endpoint URL

### Step 2: Update Contact Form
Replace the form action in `index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- ... form fields ... -->
</form>
```

## 📱 Mobile Testing
- Test your site on different devices
- Ensure the contact form works on mobile
- Check that all links and buttons are responsive

## 🎯 Final Steps
1. Update your resume with the live portfolio URL
2. Share your portfolio on LinkedIn
3. Add the URL to your GitHub profile
4. Test all functionality thoroughly

## 🆘 Troubleshooting

### GitHub Pages not updating?
- Wait 5-10 minutes for changes to propagate
- Check if there are any build errors in the Pages settings
- Ensure your `index.html` is in the root directory

### Contact form not working?
- Check browser console for JavaScript errors
- Verify EmailJS credentials are correct
- Test with a simple email first
- Check if your email provider blocks automated emails

### Images not loading?
- Ensure all image files are committed to GitHub
- Check file paths are correct
- Use relative paths (e.g., `./profile-pic.png`)

## 📞 Support
If you need help with deployment, feel free to reach out!
