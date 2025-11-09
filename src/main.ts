import './styles.css'

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
function initSmoothScrolling() {
  // Handle smooth scrolling for anchor links on the same page
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const link = target.closest('a') as HTMLAnchorElement | null
    
    if (!link) return
    
    const href = link.getAttribute('href')
    
    if (!href) return
    
    // Only handle anchor-only links (same page, like #home)
    // Links like "index.html#home" will be handled by page transitions
    if (href.startsWith('#')) {
      e.preventDefault()
      e.stopPropagation() // Prevent page transition from firing
      
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
  }, true) // Use capture phase to handle before page transitions
}

// ============================================
// Active Navigation Link on Scroll
// ============================================
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__link')
  
  if (sections.length === 0 || navLinks.length === 0) return
  
  let activeSectionId = 'home'
  
  const updateActiveLink = (sectionId: string) => {
    // Only update if it's different
    if (sectionId === activeSectionId) return
    
    activeSectionId = sectionId
    
    navLinks.forEach(link => {
      link.classList.remove('nav__link--active')
      const href = link.getAttribute('href')
      if (href && href === `#${sectionId}`) {
        link.classList.add('nav__link--active')
      }
    })
  }
  
  // Track visibility of all sections
  const sectionVisibility = new Map<string, number>()
  
  const observer = new IntersectionObserver(
    (entries) => {
      // Update visibility for all entries
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (!id) return
        
        sectionVisibility.set(id, entry.isIntersecting ? entry.intersectionRatio : 0)
      })
      
      // Handle top of page
      if (window.scrollY < 150) {
        updateActiveLink('home')
        return
      }
      
      // Find section with highest visibility that's actually intersecting
      let maxVisibility = 0
      let mostVisibleSection = ''
      
      sectionVisibility.forEach((visibility, sectionId) => {
        if (visibility > maxVisibility) {
          maxVisibility = visibility
          mostVisibleSection = sectionId
        }
      })
      
      // Update if we have a visible section
      if (mostVisibleSection && maxVisibility > 0) {
        updateActiveLink(mostVisibleSection)
      }
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: '-100px 0px -50% 0px'
    }
  )
  
  // Observe all sections
  sections.forEach((section) => {
    const id = section.getAttribute('id')
    if (id) {
      sectionVisibility.set(id, 0)
    }
    observer.observe(section)
  })
  
  // Set home as active initially
  updateActiveLink('home')
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
// Page Transition Effects
// ============================================
function initPageTransitions() {
  // Create page transition overlay
  const transitionOverlay = document.createElement('div')
  transitionOverlay.className = 'page-transition'
  document.body.appendChild(transitionOverlay)
  
  // Add event listeners to all links for page transitions
  // This runs after smooth scrolling, so anchor links are already handled
  document.addEventListener('click', (e) => {
    // Check if event was already handled by smooth scrolling
    if (e.defaultPrevented) return
    
    const target = e.target as HTMLElement
    const link = target.closest('a') as HTMLAnchorElement | null
    
    if (!link) return
    
    const href = link.getAttribute('href')
    
    if (!href) return
    
    // Skip anchor links (already handled by smooth scrolling)
    if (href.startsWith('#')) return
    
    // Skip external links (allow them to open normally)
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return
    }
    
    // Skip mailto and tel links
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return
    
    // Skip if link has target="_blank" or download attribute
    if (link.hasAttribute('target') || link.hasAttribute('download')) {
      return
    }
    
    // Handle internal page links - prevent default and show transition
    e.preventDefault()
    e.stopPropagation()
    
    // Show transition overlay
    transitionOverlay.classList.add('active')
    
    // Navigate after transition delay
    setTimeout(() => {
      window.location.href = href
    }, 300)
  }, false) // Use bubble phase so smooth scrolling handles first
  
  // Handle page show event (for back/forward navigation)
  window.addEventListener('pageshow', () => {
    transitionOverlay.classList.remove('active')
  })
  
  // Handle page load - ensure overlay is removed and mark page as loaded
  window.addEventListener('load', () => {
    transitionOverlay.classList.remove('active')
    const app = document.getElementById('app')
    if (app) {
      app.classList.add('page-loaded')
    }
  })
  
  // Also mark as loaded on DOMContentLoaded for faster perceived load
  document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app')
    if (app) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        app.classList.add('page-loaded')
      }, 50)
    }
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
  initPageTransitions()
})
