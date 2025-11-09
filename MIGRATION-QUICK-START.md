# WordPress Migration Quick Start Guide

## 🎯 Priority Tasks (Do These First)

### 1. Update Contact Information
**Action Required:** Replace placeholder email and domain

```bash
# Search and replace in all HTML files:
- Find: hello@aistudio.com
- Replace: your-actual-email@yourdomain.com

- Find: aistudio.com
- Replace: yourdomain.com
```

**Files to update:**
- All HTML files (index.html, blog.html, etc.)
- `public/sitemap.xml`
- `public/robots.txt`
- Meta tags in `<head>` sections

### 2. Remove "Coming Soon" Placeholders
**Location:** `index.html` - Hero section dashboard card

**Options:**
- Remove the placeholder divs
- Replace with actual project logos
- Hide the section if no projects ready

### 3. Update Blog Images
**Location:** `blog.html` and `blog-post.html`

**Action:**
- Replace `.blog-card__image-placeholder` divs with actual `<img>` tags
- Add real featured images for blog posts
- Optimize image file sizes

### 4. Create Missing Favicon Files
**Action:** Generate favicon files from SVG

**Required sizes:**
- `favicon.ico` (16x16, 32x32)
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

**Tool:** Use https://realfavicongenerator.net/

### 5. Clean Up Form Code
**Location:** `index.html` - Contact section

**Action:** 
- Document form fields for WordPress plugin
- Remove JavaScript form handler (will use WordPress plugin)
- Keep HTML structure for styling reference

**Form Fields:**
- Name (text)
- Email (email)
- Project Type (select: website, ai-agent, mobile-app, web-app, other)
- Message (textarea)

### 6. Update Documentation Link
**Location:** Footer - Resources section

**Action:**
- Update `href="#"` to actual documentation URL
- Or remove if not available

---

## 📋 Content Review Checklist

### Homepage (`index.html`)
- [ ] Hero title and subtitle
- [ ] Services descriptions
- [ ] Process steps
- [ ] Tech stack badges
- [ ] Contact form text

### Blog Pages
- [ ] Blog listing page content
- [ ] Blog post template content
- [ ] Replace placeholder images
- [ ] Add real blog posts or remove placeholders

### Legal Pages
- [ ] Privacy Policy - Legal review
- [ ] Terms of Service - Legal review
- [ ] Cookie Policy - GDPR compliance
- [ ] Update last modified dates

### FAQ Page
- [ ] Review all questions and answers
- [ ] Ensure answers are accurate
- [ ] Add/remove questions as needed

---

## 🔧 Code Cleanup Tasks

### Remove Unused Code
- [ ] Remove social media CSS (if not needed)
- [ ] Remove form submission JavaScript
- [ ] Clean up development comments
- [ ] Remove unused CSS classes

### Optimize Assets
- [ ] Compress PNG images
- [ ] Optimize SVG files
- [ ] Minify CSS for production
- [ ] Minify JavaScript for production

### Update References
- [ ] Update all internal links
- [ ] Verify external links work
- [ ] Update Open Graph images
- [ ] Update sitemap lastmod dates

---

## 🧪 Testing Checklist

### Functionality
- [ ] All navigation links work
- [ ] Mobile menu works
- [ ] Smooth scrolling works
- [ ] Cookie consent works
- [ ] Animations work
- [ ] Form validation works

### Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Responsive Design
- [ ] Desktop (1920px, 1440px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 414px)

### Performance
- [ ] Page load speed < 3 seconds
- [ ] Images optimized
- [ ] CSS minified
- [ ] JavaScript minified

---

## 📦 WordPress Preparation

### Theme Structure Planning
```
WordPress Theme Structure:
├── style.css (theme header required)
├── functions.php
├── index.php
├── header.php
├── footer.php
├── single.php (blog posts)
├── archive.php (blog listing)
├── page.php (static pages)
├── page-faq.php
├── page-privacy.php
├── page-terms.php
├── page-cookie.php
├── 404.php
└── assets/
    ├── css/
    ├── js/
    └── images/
```

### WordPress Functions to Add
- `wp_head()` - In header.php
- `wp_footer()` - In footer.php
- `wp_nav_menu()` - For navigation
- `the_title()` - For titles
- `the_content()` - For content
- `get_template_directory_uri()` - For assets

### Required Plugins
1. **Contact Form** - Contact Form 7 or WPForms
2. **SEO** - Yoast SEO or Rank Math
3. **Blog** - Jetpack (for blog functionality)
4. **Security** - Wordfence
5. **Cache** - WP Rocket or W3 Total Cache
6. **Backup** - UpdraftPlus

---

## 🚀 Migration Steps

### Step 1: Prepare Files
1. Complete all checklist items
2. Backup current site
3. Organize assets folder
4. Document custom functions

### Step 2: Create WordPress Theme
1. Create theme folder structure
2. Convert HTML to PHP templates
3. Add WordPress functions
4. Enqueue styles and scripts

### Step 3: Migrate Content
1. Create WordPress pages
2. Import blog posts
3. Upload media files
4. Setup menus

### Step 4: Configure WordPress
1. Install required plugins
2. Configure contact form
3. Setup SEO plugin
4. Configure security plugin

### Step 5: Test & Launch
1. Test all pages
2. Test all functionality
3. Test responsive design
4. Go live

---

## 📝 Notes

### Form Plugin Setup
When setting up contact form in WordPress:
- Use same field names for CSS compatibility
- Form classes are already styled: `.contact__form`, `.form-group`, `.form-input`
- Plugin form will inherit existing styles

### Menu Setup
WordPress menu should match current navigation:
- Home
- Services
- Process
- Stack
- Contact

### Blog Setup
- Use Jetpack for blog functionality
- Blog posts will use `single.php` template
- Blog listing will use `archive.php` template
- Categories and tags supported

### SEO Setup
- Install Yoast SEO or Rank Math
- Meta descriptions already in HTML (can be imported)
- Sitemap.xml will be generated by plugin
- Update robots.txt in WordPress

---

## 🆘 Quick Fixes

### Update Email Address
```bash
# Find all instances
grep -r "hello@aistudio.com" .

# Replace in all files (use your editor's find/replace)
```

### Update Domain
```bash
# Find all instances
grep -r "aistudio.com" .

# Replace in all files
```

### Remove Coming Soon
Edit `index.html` and remove or replace:
```html
<div class="dashboard-card__logo dashboard-card__logo--coming-soon">
  <span class="coming-soon-text">Coming soon</span>
</div>
```

### Add Blog Images
Replace placeholder divs with:
```html
<img src="/path-to-image.jpg" alt="Blog post title" />
```

---

## ✅ Final Checklist Before Migration

- [ ] All contact information updated
- [ ] All domain references updated
- [ ] All placeholder content replaced
- [ ] All images added and optimized
- [ ] All links tested and working
- [ ] All functionality tested
- [ ] All browsers tested
- [ ] All devices tested
- [ ] Performance optimized
- [ ] Documentation complete
- [ ] Backup created
- [ ] Ready for WordPress migration

---

**Ready to migrate?** Start with the priority tasks, then move through the checklist systematically.

