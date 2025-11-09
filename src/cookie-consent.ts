// ============================================
// Cookie Consent Banner
// ============================================
function initCookieConsent() {
  // Check if user has already consented
  const consentGiven = localStorage.getItem('cookie-consent')
  
  if (consentGiven === 'accepted') {
    return // Don't show banner if already accepted
  }
  
  // Create cookie consent banner
  const banner = document.createElement('div')
  banner.className = 'cookie-consent'
  banner.setAttribute('role', 'dialog')
  banner.setAttribute('aria-label', 'Cookie consent')
  banner.innerHTML = `
    <div class="cookie-consent__content">
      <div class="cookie-consent__text">
        <p class="cookie-consent__message">
          We use cookies to enhance your browsing experience and analyze site traffic. 
          By clicking "Accept", you consent to our use of cookies. 
          <a href="cookie.html" class="cookie-consent__link">Learn more</a>
        </p>
      </div>
      <div class="cookie-consent__actions">
        <button class="cookie-consent__btn cookie-consent__btn--accept" aria-label="Accept cookies">
          Accept
        </button>
        <button class="cookie-consent__btn cookie-consent__btn--decline" aria-label="Decline cookies">
          Decline
        </button>
      </div>
    </div>
  `
  
  document.body.appendChild(banner)
  
  // Show banner after a short delay
  setTimeout(() => {
    banner.classList.add('cookie-consent--visible')
  }, 500)
  
  // Accept button
  const acceptBtn = banner.querySelector('.cookie-consent__btn--accept')
  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'accepted')
    banner.classList.remove('cookie-consent--visible')
    setTimeout(() => {
      banner.remove()
    }, 300)
  })
  
  // Decline button
  const declineBtn = banner.querySelector('.cookie-consent__btn--decline')
  declineBtn?.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'declined')
    banner.classList.remove('cookie-consent--visible')
    setTimeout(() => {
      banner.remove()
    }, 300)
  })
  
  // Close on click outside (optional - can be removed)
  banner.addEventListener('click', (e) => {
    if (e.target === banner) {
      // Don't close on click outside for accessibility
    }
  })
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initCookieConsent()
})

