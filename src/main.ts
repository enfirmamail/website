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
  
  let ticking = false
  let lastActiveSection = 'home'
  
  const updateActiveLink = (sectionId: string) => {
    if (sectionId === lastActiveSection) return
    
    lastActiveSection = sectionId
    
    navLinks.forEach(link => {
      link.classList.remove('nav__link--active')
      const href = link.getAttribute('href')
      if (href && href === `#${sectionId}`) {
        link.classList.add('nav__link--active')
      }
    })
  }
  
  const handleScroll = () => {
    if (ticking) return
    
    ticking = true
    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY + 200 // Offset for header + buffer
      
      // If at the top, set home as active
      if (window.scrollY < 150) {
        updateActiveLink('home')
        ticking = false
        return
      }
      
      let currentSection = ''
      let minDistance = Infinity
      
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop
        const sectionHeight = sectionElement.offsetHeight
        const sectionId = section.getAttribute('id') || ''
        const sectionCenter = sectionTop + sectionHeight / 2
        const distanceFromCenter = Math.abs(scrollPosition - sectionCenter)
        
        // Check if scroll position is within section bounds
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (distanceFromCenter < minDistance) {
            minDistance = distanceFromCenter
            currentSection = sectionId
          }
        }
      })
      
      // If we found a section, update active link
      if (currentSection) {
        updateActiveLink(currentSection)
      }
      
      ticking = false
    })
  }
  
  // Use Intersection Observer for more accurate tracking
  const observer = new IntersectionObserver(
    (entries) => {
      if (ticking) return
      
      ticking = true
      requestAnimationFrame(() => {
        let mostVisibleSection = ''
        let maxVisibility = 0
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio
            const id = entry.target.getAttribute('id')
            if (id) {
              mostVisibleSection = id
            }
          }
        })
        
        if (mostVisibleSection && window.scrollY > 150) {
          updateActiveLink(mostVisibleSection)
        } else if (window.scrollY < 150) {
          updateActiveLink('home')
        }
        
        ticking = false
      })
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: '-150px 0px -40% 0px'
    }
  )
  
  sections.forEach((section) => {
    observer.observe(section)
  })
  
  window.addEventListener('scroll', handleScroll, { passive: true })
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
