# WordPress Migration Checklist

Complete this checklist before transferring your website to WordPress.

## 📋 1. CONTENT FINALIZATION

### ✅ Text Content
- [ ] **Review all page content** - Check for typos, grammar, and accuracy
  - [ ] `index.html` - Homepage content
  - [ ] `blog.html` - Blog listing page
  - [ ] `blog-post.html` - Blog post template (update with real content)
  - [ ] `faq.html` - FAQ questions and answers
  - [ ] `privacy.html` - Privacy Policy (legal review recommended)
  - [ ] `terms.html` - Terms of Service (legal review recommended)
  - [ ] `cookie.html` - Cookie Policy
  - [ ] `404.html` - Error page content

### ✅ Contact Information
- [ ] **Update email address** - Replace `hello@aistudio.com` with your actual email
  - Search and replace in all HTML files
  - Update in footer sections
  - Update in meta tags if needed
- [ ] **Update phone number** (if applicable)
- [ ] **Update physical address** (if applicable)
- [ ] **Update business location** - Currently shows "Copenhagen, Denmark"

### ✅ Domain & URLs
- [ ] **Update domain name** - Replace `aistudio.com` with your actual domain
  - Update in all HTML files (meta tags, canonical URLs)
  - Update in `public/sitemap.xml`
  - Update in `public/robots.txt`
  - Update Open Graph tags
  - Update Twitter Card tags
- [ ] **Verify all internal links** work correctly
- [ ] **Update external links** (DMIFY, DentalDesk) if needed

### ✅ SEO Content
- [ ] **Review meta descriptions** for all pages
- [ ] **Update keywords** if needed
- [ ] **Review page titles** - Ensure they're optimized
- [ ] **Add alt text** to all images (if not already done)
- [ ] **Update sitemap.xml** with correct lastmod dates

---

## 🎨 2. ASSETS & IMAGES

### ✅ Logo Files
- [x] `ai-studio-logo.svg` - Main logo
- [x] `ai-studio-logo-icon-only.svg` - Icon only
- [x] `ai-studio-logo-full.svg` - Full logo
- [x] `favicon.svg` - Favicon
- [ ] **Create favicon.ico** (for older browsers) - Generate from SVG
- [ ] **Create Apple touch icon** (180x180px PNG)
- [ ] **Create multiple favicon sizes** (16x16, 32x32, 192x192, 512x512)

### ✅ Project Logos
- [x] `dentaldesk-logo.svg` - DentalDesk logo
- [x] `logos/dmify-logo.png` - DMIFY logo
- [ ] **Verify all logo links** are correct
- [ ] **Optimize image sizes** - Compress PNGs, optimize SVGs

### ✅ Blog Images
- [ ] **Add real blog post images** - Replace placeholder divs with actual images
  - Featured images for blog posts
  - Blog card images
  - Blog post content images
- [ ] **Optimize blog images** - Compress and optimize file sizes
- [ ] **Add alt text** to all blog images

### ✅ Other Assets
- [ ] **Remove unused assets** - Delete `vite.svg` if not needed
- [ ] **Organize assets folder** - Ensure clean structure for WordPress
- [ ] **Document asset locations** - Create asset inventory

---

## 🔧 3. CODE CLEANUP

### ✅ Remove Placeholders
- [ ] **Remove "Coming soon" placeholders** - Update with real projects or remove
- [ ] **Remove form placeholder code** - Form will be handled by WordPress plugin
- [ ] **Clean up comments** - Remove development comments
- [ ] **Remove unused CSS** - Clean up unused styles (social media styles, etc.)

### ✅ Update Code for WordPress
- [ ] **Document form structure** - Note form fields for WordPress plugin setup
  - Name field
  - Email field
  - Project Type dropdown
  - Message textarea
- [ ] **Document navigation structure** - For WordPress menu setup
- [ ] **Document widget areas** - Identify sections that might become widgets
- [ ] **Document custom post types** - Blog posts, etc.

### ✅ JavaScript Cleanup
- [ ] **Review JavaScript functions** - Ensure all are needed in WordPress
- [ ] **Document JavaScript dependencies** - For WordPress enqueue
- [ ] **Remove form submission handler** - Will be handled by WordPress plugin
- [ ] **Test all interactive features** - Smooth scroll, animations, etc.

### ✅ CSS Organization
- [ ] **Document CSS structure** - For WordPress theme organization
- [ ] **Identify reusable components** - For WordPress template parts
- [ ] **Note responsive breakpoints** - Document media queries
- [ ] **Document CSS variables** - For easy customization in WordPress

---

## 📱 4. TESTING

### ✅ Functionality Testing
- [ ] **Test all navigation links** - Internal and external
- [ ] **Test mobile navigation** - Hamburger menu
- [ ] **Test smooth scrolling** - Anchor links
- [ ] **Test form validation** - Before WordPress conversion
- [ ] **Test cookie consent banner** - Accept/decline functionality
- [ ] **Test page transitions** - Fade-in animations
- [ ] **Test scroll animations** - Fade-in on scroll
- [ ] **Test magnetic button effects**
- [ ] **Test scroll progress indicator**

### ✅ Browser Testing
- [ ] **Chrome** - Latest version
- [ ] **Firefox** - Latest version
- [ ] **Safari** - Latest version
- [ ] **Edge** - Latest version
- [ ] **Mobile browsers** - iOS Safari, Chrome Mobile

### ✅ Responsive Testing
- [ ] **Desktop** - 1920px, 1440px, 1280px
- [ ] **Tablet** - 768px, 1024px
- [ ] **Mobile** - 375px, 414px, 360px
- [ ] **Test all breakpoints** - Ensure no layout issues

### ✅ Performance Testing
- [ ] **Page load speed** - Use Lighthouse
- [ ] **Image optimization** - Check file sizes
- [ ] **CSS optimization** - Minify for production
- [ ] **JavaScript optimization** - Minify for production
- [ ] **Check bundle size** - Optimize if needed

### ✅ Accessibility Testing
- [ ] **Keyboard navigation** - Test all interactive elements
- [ ] **Screen reader compatibility** - Test with screen reader
- [ ] **Color contrast** - Check WCAG compliance
- [ ] **Focus indicators** - Ensure visible focus states
- [ ] **ARIA labels** - Verify all are correct

---

## 📄 5. DOCUMENTATION

### ✅ Create Documentation Files
- [ ] **WordPress Theme Structure** - Document file organization
- [ ] **Template Mapping** - Map HTML files to WordPress templates
  - `index.html` → `front-page.php` or `home.php`
  - `blog.html` → `archive.php` or `index.php`
  - `blog-post.html` → `single.php`
  - `faq.html` → `page-faq.php`
  - `privacy.html` → `page-privacy.php`
  - `terms.html` → `page-terms.php`
  - `cookie.html` → `page-cookie.php`
  - `404.html` → `404.php`
- [ ] **Component Documentation** - Document reusable components
- [ ] **Function Reference** - Document custom functions
- [ ] **Plugin Requirements** - List required WordPress plugins

### ✅ WordPress Setup Notes
- [ ] **Menu Structure** - Document navigation menu items
- [ ] **Widget Areas** - Document sidebar/widget areas
- [ ] **Custom Fields** - Document ACF fields if needed
- [ ] **Post Types** - Document custom post types
- [ ] **Taxonomies** - Document categories and tags

---

## 🔌 6. WORDPRESS-SPECIFIC PREPARATIONS

### ✅ Plugin Planning
- [ ] **Contact Form Plugin** - Choose plugin (Contact Form 7, WPForms, etc.)
- [ ] **SEO Plugin** - Yoast SEO or Rank Math
- [ ] **Blog Plugin** - Jetpack (already planned)
- [ ] **Security Plugin** - Wordfence or similar
- [ ] **Cache Plugin** - WP Rocket, W3 Total Cache, etc.
- [ ] **Backup Plugin** - UpdraftPlus or similar

### ✅ WordPress Theme Structure
- [ ] **Plan theme structure** - Organize files for WordPress
  - `style.css` - Main stylesheet
  - `functions.php` - Theme functions
  - `header.php` - Header template
  - `footer.php` - Footer template
  - `index.php` - Main template
  - `single.php` - Single post template
  - `archive.php` - Archive template
  - `page.php` - Page template
  - `404.php` - 404 template
  - `template-parts/` - Reusable template parts
  - `assets/css/` - CSS files
  - `assets/js/` - JavaScript files
  - `assets/images/` - Image files

### ✅ Content Migration Planning
- [ ] **Plan content migration** - How to transfer content to WordPress
- [ ] **Blog posts** - Plan how to import blog posts
- [ ] **Pages** - Plan how to create WordPress pages
- [ ] **Media library** - Plan image uploads
- [ ] **Menus** - Plan menu structure in WordPress

---

## 🌐 7. DOMAIN & HOSTING

### ✅ Domain Setup
- [ ] **Purchase domain** (if not already done)
- [ ] **DNS configuration** - Point domain to hosting
- [ ] **SSL certificate** - Ensure HTTPS is enabled
- [ ] **Email setup** - Configure email for domain

### ✅ Hosting Setup
- [ ] **Choose hosting provider** - WordPress-optimized hosting
- [ ] **PHP version** - Ensure PHP 8.0+ is available
- [ ] **MySQL database** - Ensure database is available
- [ ] **WordPress installation** - Install WordPress on hosting

---

## 🔒 8. SECURITY & LEGAL

### ✅ Legal Pages
- [ ] **Review Privacy Policy** - Legal review recommended
- [ ] **Review Terms of Service** - Legal review recommended
- [ ] **Review Cookie Policy** - Ensure GDPR compliance
- [ ] **Update copyright year** - Ensure current year
- [ ] **Add privacy policy date** - Last updated date

### ✅ Security
- [ ] **Remove development files** - Delete unnecessary files
- [ ] **Secure sensitive information** - No API keys in code
- [ ] **Update passwords** - Strong passwords for all accounts
- [ ] **Enable two-factor authentication** - For WordPress admin

---

## ✅ 9. FINAL CHECKS

### ✅ Pre-Migration Checklist
- [ ] **Backup current site** - Full backup of all files
- [ ] **Export database** (if applicable)
- [ ] **Document current setup** - Version numbers, dependencies
- [ ] **Create migration plan** - Step-by-step migration process
- [ ] **Test in staging environment** - Before going live
- [ ] **Plan downtime** - Schedule maintenance window if needed

### ✅ Post-Migration Checklist (After WordPress Setup)
- [ ] **Test all pages** - Verify all pages work
- [ ] **Test all functionality** - Forms, navigation, etc.
- [ ] **Test responsive design** - On all devices
- [ ] **Test SEO** - Verify meta tags, sitemap
- [ ] **Test performance** - Page load speed
- [ ] **Test security** - Security scan
- [ ] **Update sitemap** - Submit to Google Search Console
- [ ] **Setup analytics** - Google Analytics or similar
- [ ] **Setup monitoring** - Uptime monitoring

---

## 📝 10. QUICK REFERENCE

### File Structure for WordPress Theme
```
theme-name/
├── style.css (with theme header)
├── functions.php
├── index.php
├── header.php
├── footer.php
├── single.php
├── archive.php
├── page.php
├── 404.php
├── page-faq.php
├── page-privacy.php
├── page-terms.php
├── page-cookie.php
├── template-parts/
│   ├── hero.php
│   ├── services.php
│   ├── process.php
│   ├── stack.php
│   └── contact.php
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── (all images)
└── inc/
    └── (helper functions)
```

### WordPress Template Hierarchy
- Homepage: `front-page.php` or `home.php` or `index.php`
- Blog listing: `home.php` or `index.php`
- Single post: `single.php`
- Page: `page.php` or `page-{slug}.php`
- Archive: `archive.php`
- 404: `404.php`

### Required WordPress Functions
- `wp_head()` - In `<head>`
- `wp_footer()` - Before `</body>`
- `wp_nav_menu()` - For navigation
- `the_title()` - For page/post titles
- `the_content()` - For page/post content
- `get_template_directory_uri()` - For asset URLs

---

## 🚀 NEXT STEPS AFTER CHECKLIST

1. **Complete all checklist items** ✅
2. **Create WordPress theme structure** 📁
3. **Convert HTML to PHP templates** 🔄
4. **Migrate assets to WordPress** 🎨
5. **Setup WordPress plugins** 🔌
6. **Import content to WordPress** 📝
7. **Test everything** 🧪
8. **Go live** 🚀

---

## 📞 SUPPORT

If you need help with any item on this checklist, refer to:
- WordPress Codex: https://codex.wordpress.org/
- WordPress Theme Handbook: https://developer.wordpress.org/themes/
- Your development team

---

**Last Updated:** 2024-01-01
**Version:** 1.0

