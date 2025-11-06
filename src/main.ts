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
// Active Navigation Link on Scroll
// ============================================
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
  
  if (sections.length === 0 || navLinks.length === 0) return
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) {
            // Remove active class from all links
            navLinks.forEach(link => {
              link.classList.remove('nav__link--active')
            })
            
            // Add active class to corresponding link
            const activeLink = document.querySelector(`.nav__link[href="#${id}"]`)
            if (activeLink) {
              activeLink.classList.add('nav__link--active')
            }
          }
        }
      })
    },
    {
      threshold: 0.3,
      rootMargin: '-100px 0px -50% 0px'
    }
  )
  
  sections.forEach((section) => {
    observer.observe(section)
  })
  
  // Set home as active by default if at top of page
  const handleScroll = () => {
    if (window.scrollY < 100) {
      navLinks.forEach(link => {
        link.classList.remove('nav__link--active')
        if (link.getAttribute('href') === '#home') {
          link.classList.add('nav__link--active')
        }
      })
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check on load
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
// Scroll Progress Indicator
// ============================================
function initScrollProgress() {
  const scrollProgress = document.getElementById('scroll-progress')
  if (!scrollProgress) return

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (window.scrollY / windowHeight) * 100
    scrollProgress.style.width = `${scrolled}%`
  })
}

// ============================================
// Scroll Animations - Fade in on scroll
// ============================================
function initScrollAnimations() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    // Remove fade-in class if user prefers reduced motion
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.remove('fade-in')
    })
    return
  }
  
  // Create Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible')
          // Optional: unobserve after animation to improve performance
          observer.unobserve(entry.target)
        }
      })
    },
    {
      // Start animation when element is 20% visible
      threshold: 0.2,
      // Trigger 50px before element enters viewport
      rootMargin: '0px 0px -50px 0px'
    }
  )
  
  // Observe all elements with fade-in class
  const fadeElements = document.querySelectorAll('.fade-in')
  fadeElements.forEach((el) => {
    observer.observe(el)
  })
}

// ============================================
// Magnetic Effect for Buttons
// ============================================
function initMagneticEffect() {
  const magneticElements = document.querySelectorAll<HTMLElement>('.btn--magnetic')
  
  magneticElements.forEach((element) => {
    let isHovered = false
    
    element.addEventListener('mouseenter', () => {
      isHovered = true
    })
    
    element.addEventListener('mousemove', (e) => {
      if (!isHovered) return
      
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      // Calculate movement (subtle effect)
      const moveX = x * 0.08
      const moveY = y * 0.08
      
      // Store original transform for hover states
      element.style.setProperty('--magnetic-x', `${moveX}px`)
      element.style.setProperty('--magnetic-y', `${moveY}px`)
    })
    
    element.addEventListener('mouseleave', () => {
      isHovered = false
      element.style.setProperty('--magnetic-x', '0px')
      element.style.setProperty('--magnetic-y', '0px')
    })
  })
}

// ============================================
// Initialize all functionality when DOM is ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrolling()
  initMobileNav()
  initContactForm()
  initScrollProgress()
  initScrollAnimations()
  initMagneticEffect()
  initActiveNavigation()
})
