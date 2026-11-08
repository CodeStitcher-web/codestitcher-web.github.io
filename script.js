/**
 * CodeStitcher - Google Antigravity UI & Interactions Engine
 * Authentic replica of https://antigravity.google
 * Clean interactions: Nav mega-menu, mobile drawer, announcement banner, mini calculator
 */

function initAntigravity() {
    // Legacy 2D canvas is disabled in favor of official Three.js particle bundle
    const legacyCanvas = document.getElementById('neural-canvas');
    if (legacyCanvas) {
        legacyCanvas.remove();
    }
}

// 2. ANNOUNCEMENT BANNER CLOSE
document.addEventListener('DOMContentLoaded', () => {
    const bannerClose = document.getElementById('banner-close');
    const banner = document.getElementById('announcement-banner');
    if (bannerClose && banner) {
        bannerClose.addEventListener('click', () => {
            banner.style.display = 'none';
        });
    }

        // 3. MOBILE MENU TOGGLE (ROBUST SVG ICON & OUTSIDE CLICK HANDLER)
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileToggle && mobileDrawer) {
        const hamburgerSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
        const closeSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileDrawer.classList.toggle('open');
            mobileDrawer.classList.toggle('active', isOpen);
            mobileToggle.setAttribute('aria-expanded', isOpen);
            mobileToggle.innerHTML = isOpen ? closeSvg : hamburgerSvg;
        });

        // Close on link click
        mobileDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open', 'active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.innerHTML = hamburgerSvg;
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
                if (mobileDrawer.classList.contains('open') || mobileDrawer.classList.contains('active')) {
                    mobileDrawer.classList.remove('open', 'active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    mobileToggle.innerHTML = hamburgerSvg;
                }
            }
        });
    }

    // 4. DROPDOWN NAV - click / hover outside to close
    const navItems = document.querySelectorAll('.agy-nav-item.has-dropdown');
    navItems.forEach(item => {
        const link = item.querySelector('.agy-nav-link');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 960) {
                    e.preventDefault();
                    item.classList.toggle('open');
                }
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.agy-nav-item')) {
            navItems.forEach(item => item.classList.remove('open'));
        }
    });

    // 5. INTERACTIVE MINI CALCULATOR
    const display = document.getElementById('calc-display');
    const exprDisplay = document.getElementById('calc-expr');
    const keys = document.querySelectorAll('.calc-btn');

    if (display && keys.length > 0) {
        let currentInput = '0';
        let currentExpr = '';
        let awaitingNext = false;

        keys.forEach(key => {
            key.addEventListener('click', () => {
                const action = key.dataset.action;
                const value = key.innerText.trim();

                if (!action) {
                    // Number
                    if (currentInput === '0' || awaitingNext) {
                        currentInput = value;
                        awaitingNext = false;
                    } else {
                        currentInput += value;
                    }
                } else if (action === 'decimal') {
                    if (!currentInput.includes('.')) {
                        currentInput += '.';
                    }
                } else if (action === 'clear') {
                    currentInput = '0';
                    currentExpr = '';
                    if (exprDisplay) exprDisplay.innerText = '';
                } else if (action === 'delete') {
                    currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : '0';
                } else if (action === 'calculate') {
                    try {
                        let evalStr = (currentExpr + currentInput).replace(/×/g, '*').replace(/÷/g, '/');
                        let result = Function('"use strict";return (' + evalStr + ')')();
                        result = Math.round(result * 100000000) / 100000000;
                        if (exprDisplay) exprDisplay.innerText = currentExpr + currentInput + ' =';
                        currentInput = String(result);
                        currentExpr = '';
                        awaitingNext = true;
                    } catch (err) {
                        currentInput = 'Error';
                        currentExpr = '';
                        awaitingNext = true;
                    }
                } else {
                    // Operator (+, -, *, /)
                    let op = value;
                    currentExpr = currentInput + ' ' + op + ' ';
                    if (exprDisplay) exprDisplay.innerText = currentExpr;
                    awaitingNext = true;
                }

                display.innerText = currentInput;
            });
        });
    }
});

// Run init
initAntigravity();


// 6. DYNAMIC GITHUB LATEST RELEASE RESOLVER (ALWAYS DOWNLOADS LATEST APK)
(function initLatestReleaseResolver() {
    const REPO = 'MustafijRatul/Calculate';
    const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;
    const FALLBACK_DIRECT = `https://github.com/${REPO}/releases/latest/download/Calculate.apk`;

    fetch(API_URL)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
            if (!data) return;
            const tagName = data.tag_name || 'latest';
            let downloadUrl = FALLBACK_DIRECT;
            const apkAsset = data.assets && data.assets.find(a => a.name && a.name.toLowerCase().endsWith('.apk'));
            if (apkAsset && apkAsset.browser_download_url) {
                downloadUrl = apkAsset.browser_download_url;
            }

            // Update all download buttons dynamically
            document.querySelectorAll('a[href*="releases/download"], a.btn-apk-download, [data-calculate-download]').forEach(el => {
                el.href = downloadUrl;
            });

            // Update version badges across the site
            document.querySelectorAll('[data-calculate-version], .agy-badge-tag').forEach(el => {
                if (el.innerText.includes('v1.0.0')) {
                    el.innerText = el.innerText.replace('v1.0.0', tagName);
                }
            });
        })
        .catch(() => {
            // Graceful fallback to latest release page if offline or rate-limited
            document.querySelectorAll('a[href*="releases/download"]').forEach(el => {
                el.href = `https://github.com/${REPO}/releases/latest`;
            });
        });
})();
