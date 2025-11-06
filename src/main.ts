import './styles.css'

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      
      // Only handle internal anchor links
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          // Close mobile menu if open
          const navMenu = document.getElementById('nav-menu')
          const navToggle = document.getElementById('nav-toggle')
          if (navMenu && navToggle) {
            navMenu.classList.remove('active')
            navToggle.classList.remove('active')
          }
          
          // Calculate offset for sticky header
          const header = document.querySelector('.header')
          const headerHeight = header ? header.getBoundingClientRect().height : 0
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    })
  })
}

// ============================================
// Mobile Navigation Toggle
// ============================================
function initMobileNav() {
  const navToggle = document.getElementById('nav-toggle')
  const navMenu = document.getElementById('nav-menu')
  
  if (!navToggle || !navMenu) return
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    navToggle.classList.toggle('active')
  })
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!navMenu.contains(target) && !navToggle.contains(target)) {
      navMenu.classList.remove('active')
      navToggle.classList.remove('active')
    }
  })
  
  // Close menu on window resize (if resizing to desktop)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      navMenu.classList.remove('active')
      navToggle.classList.remove('active')
    }
  })
}

// ============================================
// Form Handling (Placeholder - can be replaced with WordPress form plugin)
// ============================================
function initContactForm() {
  const contactForm = document.getElementById('contact-form') as HTMLFormElement
  
  if (!contactForm) return
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // This is a placeholder - in WordPress, this would be handled by a form plugin
    // For now, just show an alert
    alert('Thank you for your message! In production, this would be handled by a WordPress form plugin.')
    
    // Reset form
    contactForm.reset()
  })
}

// ============================================
// Initialize all functionality when DOM is ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrolling()
  initMobileNav()
  initContactForm()
})
