function e(e=`Google Antigravity`){let t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080d1a" />
      <stop offset="50%" stop-color="#0d1629" />
      <stop offset="100%" stop-color="#060913" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="48%" r="45%">
      <stop offset="0%" stop-color="#3186ff" stop-opacity="0.22" />
      <stop offset="60%" stop-color="#8cc8ff" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a6a" />
      <stop offset="100%" stop-color="#12213d" />
    </linearGradient>
    <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#68b5ff" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#3186ff" stop-opacity="0.2" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <rect width="1280" height="720" fill="url(#bg)" />
  <rect width="1280" height="720" fill="url(#glow)" />

  <!-- Subtle tech grid -->
  <g stroke="rgba(255,255,255,0.03)" stroke-width="1">
    <line x1="0" y1="180" x2="1280" y2="180" />
    <line x1="0" y1="360" x2="1280" y2="360" />
    <line x1="0" y1="540" x2="1280" y2="540" />
    <line x1="320" y1="0" x2="320" y2="720" />
    <line x1="640" y1="0" x2="640" y2="720" />
    <line x1="960" y1="0" x2="960" y2="720" />
  </g>

  <!-- Central Play Badge -->
  <g filter="url(#shadow)">
    <circle cx="640" cy="340" r="54" fill="url(#badge-grad)" stroke="url(#ring-grad)" stroke-width="2" />
    <!-- Play arrow -->
    <path d="M632 322 L658 340 L632 358 Z" fill="#ffffff" />
  </g>

  <!-- Title / Branding -->
  <text x="640" y="440" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="600" fill="#e2e8f0" letter-spacing="-0.01em">${e.replace(/[<>&"']/g,``)}</text>
  <text x="640" y="470" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="400" fill="rgba(226,232,240,0.6)" letter-spacing="0.04em">CLICK TO PLAY</text>
</svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(t)}`}var t=e(`Google Antigravity`);function n(n,r){if(!n)return;let i=n.getAttribute(`poster`);(!i||i.trim()===``)&&(n.poster=r?e(r):t)}export{n as t};