(() => {
  // ../antigravity-site/antigravity.google/_astro/deviceInfo.0uOIHWn-.js
  var e = (e3) => {
    switch (e3) {
      case `10.0`:
        return `Windows 10/11`;
      case `6.3`:
        return `Windows 8.1`;
      case `6.2`:
        return `Windows 8`;
      case `6.1`:
        return `Windows 7`;
      default:
        return `NT ${e3}`;
    }
  };
  var t = { get ua() {
    return typeof window < `u` ? navigator.userAgent : ``;
  }, get userAgent() {
    return this.ua;
  }, get isGooglebook() {
    let e3 = this.ua, t3 = typeof navigator < `u` ? navigator.userAgentData : void 0;
    return t3?.platform === `Android` && t3?.mobile === false || /googlebook|cros/i.test(e3);
  }, get isMobile() {
    let e3 = this.ua;
    if (this.isGooglebook)
      return false;
    let t3 = typeof navigator < `u` && navigator.maxTouchPoints > 0 && /macintosh/i.test(e3);
    return /Mobi|Android|iPhone|iPad|iPod/i.test(e3) || t3;
  }, get operatingSystem() {
    let t3 = this.ua, n3 = null;
    if (/iphone|ipod/i.test(t3)) {
      let e3 = t3.match(/OS (\d+[_.]\d+([_.]\d+)?)/i);
      return n3 = e3?.[1] ? `iOS ` + e3[1].replace(/_/g, `.`) : null, { name: `iphone`, version: n3, buttonText: ``, links: [] };
    } else if (/ipad/i.test(t3) || typeof navigator < `u` && navigator.maxTouchPoints > 0 && /macintosh/i.test(t3)) {
      let e3 = t3.match(/OS (\d+[_.]\d+([_.]\d+)?)/i);
      return n3 = e3?.[1] ? `iPadOS ` + e3[1].replace(/_/g, `.`) : null, { name: `ipad`, version: n3, buttonText: ``, links: [] };
    } else if (this.isGooglebook)
      return { name: `googlebook`, version: `Googlebook OS`, buttonText: ` for Googlebook`, links: [{ buttonText: `Get it on Google Play`, href: `https://play.google.com/store/apps/details?id=com.google.android.apps.antigravity` }] };
    else if (/android/i.test(t3)) {
      let e3 = t3.match(/Android (\d+(?:\.\d+)*)/i);
      return n3 = e3?.[1] ? `Android ${e3[1]}` : null, { name: `android`, version: n3, buttonText: ``, links: [] };
    } else if (/windows/i.test(t3)) {
      let r5 = t3.match(/Windows NT (\d+\.\d+)/i);
      return n3 = r5 && r5[1] ? e(r5[1]) : `Unknown Version`, { name: `windows`, version: n3, buttonText: ` for Windows`, links: [{ buttonText: `Download for x64`, href: null }, { buttonText: `Download for ARM64`, href: null }] };
    } else if (/macintosh|mac os x/i.test(t3)) {
      let e3 = t3.match(/Mac OS X (\d+[_.]\d+([_.]\d+)?)/i);
      return n3 = e3 && e3[1] ? `macOS ` + e3[1].replace(/_/g, `.`) : `Unknown Version`, { name: `mac`, version: n3, buttonText: ` for macOS`, links: [{ buttonText: `Download for Apple Silicon`, href: null }, { buttonText: `Download for Intel`, href: null }] };
    } else if (/linux/i.test(t3))
      return n3 = `Generic/Unknown Distribution`, { name: `linux`, version: n3, buttonText: ` for Linux`, links: [{ buttonText: `Download`, href: null }] };
    else
      return { name: `unknown`, version: null, buttonText: ``, links: [] };
  }, get viewportInfo() {
    return n();
  }, get viewportCategory() {
    return n().viewportCategory;
  } };
  function n() {
    if (typeof window > `u`)
      return { viewportCategory: `desktop`, formFactor: `desktop`, viewportWidth: 1440, viewportHeight: 900, orientation: `landscape`, operatingSystem: `unknown` };
    let e3 = Math.round(window.innerWidth || document.documentElement?.clientWidth || 0), n3 = Math.round(window.innerHeight || document.documentElement?.clientHeight || 0), r5 = e3 >= n3 ? `landscape` : `portrait`, i4 = Math.min(e3, n3), a4 = Math.max(e3, n3), o3 = i4 > 0 ? a4 / i4 : 1, s3 = typeof navigator < `u` ? navigator.userAgent : ``, c4 = window.visualViewport, l4 = typeof navigator < `u` ? navigator : void 0, u3 = !!(c4 && Array.isArray(c4.segments) && c4.segments.length > 1) || l4?.devicePosture?.type === `folded` || !!window.matchMedia?.(`(horizontal-viewport-segments: 2), (vertical-viewport-segments: 2)`)?.matches, d3 = /Pixel Fold|SM-F9|SM-F7|Galaxy Z Fold|Surface Duo/i.test(s3), f3 = i4 >= 600 && a4 <= 1150 && o3 <= 1.3, p3 = e3 >= 320 && e3 <= 368 && n3 >= 700 && n3 / e3 >= 2 || n3 >= 320 && n3 <= 368 && e3 >= 700 && e3 / n3 >= 2, m3 = `unknown`;
    try {
      m3 = t.operatingSystem.name;
    } catch {
      m3 = `unknown`;
    }
    let h3;
    return h3 = u3 || d3 || f3 || p3 ? `foldable` : e3 < 600 ? `mobile` : e3 <= 1024 || m3 === `ipad` ? `tablet` : `desktop`, { viewportCategory: h3, formFactor: h3, viewportWidth: e3, viewportHeight: n3, orientation: r5, operatingSystem: m3 };
  }
  function r() {
    if (typeof window > `u`)
      return false;
    try {
      let e3 = !!window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches, t3 = !!(typeof navigator < `u` ? navigator : void 0)?.connection?.saveData;
      return e3 || t3;
    } catch {
      return false;
    }
  }
  typeof window < `u` && (window.userDeviceInfo = t, window.deviceInfo = t);

  // ../antigravity-site/antigravity.google/_astro/analytics.B3l_MiwL.js
  var r2 = `pagePath.pageTitle.viewportCategory.formFactor.viewportWidth.viewportHeight.orientation.operatingSystem.referrer.utm_source.utmSource.utm_medium.utmMedium.utm_campaign.utmCampaign.utm_term.utmTerm.utm_content.utmContent.videoProvider.videoId.videoSrc.videoUrl.videoTitle.moduleName.sectionName.modalId.depth.percent.milestone.progressPercent.state.fullscreen.videoIndex`.split(`.`);
  function i(e3) {
    if (!e3)
      return null;
    let t3 = e3.trim(), n3 = t3.match(/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?.*?\bv=|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
    return n3?.[1] ? n3[1] : /^[A-Za-z0-9_-]{11}$/.test(t3) ? t3 : null;
  }
  var a = new Map();
  function o(e3, t3) {
    let n3 = typeof t3.videoId == `string` ? t3.videoId.trim() : ``, r5 = typeof t3.videoSrc == `string` ? t3.videoSrc.trim() : ``, o3 = typeof t3.videoUrl == `string` ? t3.videoUrl.trim() : ``, s3 = r5 || o3 || n3, c4;
    if (c4 = t3.videoProvider === `youtube` || t3.videoProvider === `mp4` ? t3.videoProvider : e3 === `video_modal_open` || e3 === `video_modal_close` || /youtube|youtu\.be/i.test(s3) || i(s3) && !/\.(mp4|webm|mov)\b/i.test(s3) ? `youtube` : `mp4`, t3.videoProvider = c4, c4 === `youtube`) {
      let e4 = i(n3) || i(o3) || i(r5) || n3 || o3 || r5 || `youtube_video`, a4 = o3 || (r5.startsWith(`http`) ? r5 : ``) || `https://www.youtube.com/embed/${e4}`;
      t3.videoId = e4, t3.videoSrc = r5 || a4, t3.videoUrl = a4;
    } else {
      let e4 = r5 || o3 || n3 || `mp4_video`, i4 = e4.split(`?`)[0].split(`#`)[0].split(`/`).filter(Boolean).pop() || e4;
      t3.videoId = n3 || i4, t3.videoSrc = e4, t3.videoUrl = o3 || e4;
    }
    if (t3.moduleName ||= typeof t3.sectionName == `string` && t3.sectionName || `video_player`, e3 === `video_complete`) {
      let e4 = typeof t3.percent == `number` ? t3.percent : typeof t3.milestone == `number` ? t3.milestone : typeof t3.progressPercent == `number` ? t3.progressPercent : 100;
      t3.percent = e4, t3.milestone = e4, t3.progressPercent = e4;
    } else if (t3.percent !== void 0 || t3.milestone !== void 0 || t3.progressPercent !== void 0) {
      let e4 = typeof t3.percent == `number` ? t3.percent : typeof t3.milestone == `number` ? t3.milestone : Number(t3.progressPercent);
      Number.isNaN(e4) || (t3.percent = e4, t3.milestone = e4, t3.progressPercent = e4);
    }
    let l4 = String(t3.videoId || t3.videoSrc || `default`), u3 = `${e3}:${l4}:${t3.milestone === void 0 ? typeof t3.state == `string` ? t3.state : `` : String(t3.milestone)}`, d3 = Date.now(), f3 = a.get(u3);
    return f3 !== void 0 && d3 - f3 < 200 ? false : (a.set(u3, d3), e3 === `video_pause` ? a.delete(`video_play:${l4}:`) : e3 === `video_play` ? a.delete(`video_pause:${l4}:`) : e3 === `video_fullscreen` ? t3.state === `enter` ? a.delete(`video_fullscreen:${l4}:exit`) : t3.state === `exit` && a.delete(`video_fullscreen:${l4}:enter`) : e3 === `video_modal_close` ? (a.delete(`video_modal_open:${l4}:`), a.delete(`video_start:${l4}:`), a.delete(`video_play:${l4}:`), a.delete(`video_pause:${l4}:`)) : e3 === `video_modal_open` && a.delete(`video_modal_close:${l4}:`), true);
  }
  function s(e3, t3 = {}) {
    if (!(typeof window > `u`))
      try {
        let i4 = window, a4 = i4.dataLayer = i4.dataLayer || [], s3 = {};
        for (let [e4, n3] of Object.entries(t3))
          n3 != null && n3 !== `` && (s3[e4] = n3);
        s3.planType !== void 0 && s3.plantType === void 0 && (s3.plantType = s3.planType);
        let c4 = n();
        if (s3.pagePath ||= window.location.pathname || `/`, s3.locale === void 0 && typeof document < `u` && (s3.locale = document.documentElement.lang || `en-US`), s3.viewportCategory ||= c4.viewportCategory, s3.formFactor ||= c4.formFactor, e3.startsWith(`video_`) && !o(e3, s3))
          return;
        let l4 = {};
        for (let e4 of r2)
          s3[e4] !== void 0 && (l4[e4] = s3[e4]);
        a4.push({ event: e3, ...l4, eventParams: s3 }), a4.push({ eventParams: void 0 });
      } catch {
      }
  }
  var c = new Set();
  var l = new Set();
  var u = ``;
  function d(e3, t3 = false) {
    let n3 = e3 ?? (typeof window < `u` && window.location.pathname || `/`);
    (t3 || n3 !== u) && (u = n3, c.clear(), l.clear(), a.clear());
  }
  function f() {
    if (!(typeof window > `u`))
      try {
        let e3 = window.dataLayer;
        if (!Array.isArray(e3))
          return;
        let t3 = n();
        for (let n3 = e3.length - 1; n3 >= 0; n3--) {
          let r5 = e3[n3];
          if (r5 && r5.event === `page_view`) {
            if (r5.viewportCategory = t3.viewportCategory, r5.formFactor = t3.formFactor, r5.viewportWidth = t3.viewportWidth, r5.viewportHeight = t3.viewportHeight, r5.orientation = t3.orientation, r5.operatingSystem = t3.operatingSystem, r5.eventParams && typeof r5.eventParams == `object`) {
              let e4 = r5.eventParams;
              e4.viewportCategory = t3.viewportCategory, e4.formFactor = t3.formFactor, e4.viewportWidth = t3.viewportWidth, e4.viewportHeight = t3.viewportHeight, e4.orientation = t3.orientation, e4.operatingSystem = t3.operatingSystem;
            }
            break;
          }
        }
      } catch {
      }
  }
  var p = ``;
  var m = 0;
  function h() {
    return typeof window > `u` ? `` : `${m}:${window.location.pathname || `/`}`;
  }
  function g(e3 = false) {
    if (!(typeof window > `u`))
      try {
        let t3 = window, r5 = t3.dataLayer = t3.dataLayer || [], i4 = window.location.pathname || `/`, a4 = `${window.location.origin}${i4}`;
        d(i4);
        let o3;
        for (let e4 = r5.length - 1; e4 >= 0; e4--) {
          let t4 = r5[e4];
          if (t4 && t4.event === `page_view`) {
            o3 = t4;
            break;
          }
        }
        let c4 = o3 && o3.pagePath === i4 ? o3 : void 0;
        if (!e3 && t3.__agyLastPageViewPath === i4 && c4) {
          p = a4, f();
          return;
        }
        t3.__agyLastPageViewPath = i4, e3 && (m += 1);
        let l4 = n(), u3 = new URLSearchParams(window.location.search || ``), h3 = u3.get(`utm_source`) || void 0, g3 = u3.get(`utm_medium`) || void 0, _2 = u3.get(`utm_campaign`) || void 0, v2 = u3.get(`utm_term`) || void 0, y2 = u3.get(`utm_content`) || void 0, b = p;
        p = a4;
        let x = b && b !== a4 ? b : document.referrer.split(/[?#]/)[0] || void 0, S = document.title ? document.title : void 0;
        if (!e3 && c4) {
          c4.viewportCategory = l4.viewportCategory, c4.formFactor = l4.formFactor, c4.viewportWidth = l4.viewportWidth, c4.viewportHeight = l4.viewportHeight, c4.orientation = l4.orientation, c4.operatingSystem = l4.operatingSystem, S && (c4.pageTitle = S);
          let e4 = c4.referrer || x;
          e4 && (c4.referrer = e4), h3 && (c4.utm_source = h3, c4.utmSource = h3), g3 && (c4.utm_medium = g3, c4.utmMedium = g3), _2 && (c4.utm_campaign = _2, c4.utmCampaign = _2), v2 && (c4.utm_term = v2, c4.utmTerm = v2), y2 && (c4.utm_content = y2, c4.utmContent = y2), c4.eventParams = { ...typeof c4.eventParams == `object` && c4.eventParams ? c4.eventParams : {}, pagePath: i4, ...S ? { pageTitle: S } : {}, viewportCategory: l4.viewportCategory, formFactor: l4.formFactor, viewportWidth: l4.viewportWidth, viewportHeight: l4.viewportHeight, orientation: l4.orientation, operatingSystem: l4.operatingSystem, ...e4 ? { referrer: e4 } : {}, ...h3 ? { utm_source: h3, utmSource: h3 } : {}, ...g3 ? { utm_medium: g3, utmMedium: g3 } : {}, ..._2 ? { utm_campaign: _2, utmCampaign: _2 } : {}, ...v2 ? { utm_term: v2, utmTerm: v2 } : {}, ...y2 ? { utm_content: y2, utmContent: y2 } : {} };
          return;
        }
        s(`page_view`, { pagePath: i4, pageTitle: S, viewportCategory: l4.viewportCategory, formFactor: l4.formFactor, viewportWidth: l4.viewportWidth, viewportHeight: l4.viewportHeight, orientation: l4.orientation, operatingSystem: l4.operatingSystem, referrer: x, utm_source: h3, utmSource: h3, utm_medium: g3, utmMedium: g3, utm_campaign: _2, utmCampaign: _2, utm_term: v2, utmTerm: v2, utm_content: y2, utmContent: y2 });
      } catch {
      }
  }
  function _(e3, t3 = {}) {
    if (typeof window > `u` || !e3)
      return;
    let n3 = window.location.pathname || `/`;
    d(n3);
    let r5 = `${n3}::${e3}`;
    c.has(r5) || (c.add(r5), s(`section_view`, { ...t3, sectionName: e3, moduleName: typeof t3.moduleName == `string` && t3.moduleName || e3, pagePath: n3 }));
  }
  function v(e3) {
    if (typeof window > `u`)
      return;
    let t3 = window.location.pathname || `/`;
    d(t3), !l.has(e3) && (l.add(e3), s(`scroll_depth`, { depth: e3, percent: e3, milestone: e3, pagePath: t3 }));
  }
  function y(e3, t3 = {}) {
    s(e3, t3);
  }
  typeof window < `u` && (window.agyAnalytics = { track: s, trackPageView: g, trackSectionView: _, trackScrollDepth: v, trackVideoEvent: y, getViewportInfo: n, prefersReducedMotionOrSaveData: r, resetPageAnalyticsState: d });
  var T = new Map([[`google.google-antigravity`, `Visual Studio Code`], [`google.googleantigravity`, `Visual Studio`]]);
  var j = new Set();

  // ../antigravity-site/antigravity.google/_astro/label-text.Ce3V2_FJ.js
  var e2 = `[aria-hidden="true"], .sr-only, svg, kbd`;
  var t2 = /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}\u200D\u20E3\uFE0E\uFE0F\u2190-\u21FF\u27F0-\u27FF\u2900-\u297F\u2B00-\u2BFF\u00AB\u00BB\u2039\u203A]/gu;
  var n2 = `font`;
  var r3 = new WeakMap();
  var i2 = new WeakMap();
  function a2(e3, t3) {
    let n3 = ``;
    for (let i4 = e3.firstChild; i4; i4 = i4.nextSibling)
      if (i4.nodeType === 3)
        n3 += i4.nodeValue ?? ``;
      else if (i4.nodeType === 1) {
        let e4 = i4;
        if (e4.matches(t3))
          continue;
        n3 += r3.get(e4) ?? a2(e4, t3);
      }
    return n3;
  }
  function c2(e3) {
    return e3.replace(t2, ` `).replace(/\s+/g, ` `).trim();
  }
  function l2(t3) {
    let o3 = t3.querySelector(n2) ? i2.get(t3) : void 0;
    return c2(r3.get(t3) ?? o3 ?? a2(t3, e2));
  }

  // ../antigravity-site/antigravity.google/_astro/AnnouncementPill.astro_astro_type_script_index_0_lang.BK-mqr5d.js
  function r4(e3, t3, n3 = Date.now()) {
    return { fingerprint: e3, dismissedAt: n3, expiresAt: n3 + t3 };
  }
  function i3(e3, t3, n3 = Date.now()) {
    if (!e3 || !t3)
      return false;
    let r5 = e3;
    if (typeof e3 == `string`)
      try {
        r5 = JSON.parse(e3);
      } catch {
        return false;
      }
    if (typeof r5 != `object` || !r5)
      return false;
    let i4 = r5;
    return i4.fingerprint === t3 && typeof i4.expiresAt == `number` && Number.isFinite(i4.expiresAt) && n3 < i4.expiresAt;
  }
  var a3 = (e3, t3) => {
    try {
      let n3 = window.localStorage.getItem(e3);
      if (!n3)
        return false;
      if (i3(n3, t3))
        return true;
      window.localStorage.removeItem(e3);
    } catch {
    }
    return false;
  };
  var o2 = (e3, t3, n3) => {
    try {
      let i4 = r4(t3, n3);
      window.localStorage.setItem(e3, JSON.stringify(i4));
    } catch {
    }
  };
  var s2 = null;
  var c3 = null;
  var l3 = 0;
  var u2 = () => {
    l3 = 0;
    let e3 = document.querySelector(`[data-header]`);
    if (e3 && (e3.classList.contains(`menu-open`) || e3.classList.contains(`dropdown-open`)))
      return;
    let t3 = document.querySelector(`[data-home-banner-slot]`);
    if (t3)
      if (t3.querySelectorAll(`[data-announcement-pill]:not([hidden])`).length === 0)
        s2 !== `0px` && (s2 = `0px`, document.documentElement.style.setProperty(`--home-banner-offset`, `0px`));
      else {
        let e4 = Math.ceil(t3.getBoundingClientRect().height);
        if (e4 > 0) {
          let t4 = `${e4}px`;
          s2 !== t4 && (s2 = t4, document.documentElement.style.setProperty(`--home-banner-offset`, t4));
        }
      }
    let n3 = document.querySelector(`[data-docs-announcement-slot="top-banner"]`), r5 = document.querySelector(`header.header`);
    if (!n3 || !r5)
      return;
    if (n3.querySelectorAll(`[data-announcement-pill]:not([hidden])`).length === 0) {
      c3 !== null && (c3 = null, document.documentElement.style.removeProperty(`--sl-nav-height`));
      return;
    }
    let i4 = Math.ceil(r5.getBoundingClientRect().height);
    if (i4 > 0) {
      let e4 = `${i4}px`;
      c3 !== e4 && (c3 = e4, document.documentElement.style.setProperty(`--sl-nav-height`, e4, `important`));
    }
  };
  var d2 = () => {
    l3 ||= requestAnimationFrame(u2);
  };
  var f2 = () => {
    typeof ResizeObserver > `u` || [document.querySelector(`[data-home-banner-slot]`), document.querySelector(`header.header`)].forEach((e3) => {
      !e3 || e3.dataset.bannerResizeObserved === `true` || (e3.dataset.bannerResizeObserved = `true`, new ResizeObserver(() => {
        d2();
      }).observe(e3));
    });
  };
  var p2 = new WeakMap();
  var m2;
  var h2 = () => {
    m2 === void 0 && (m2 = setTimeout(() => {
      m2 = void 0;
      let e3 = h();
      document.querySelectorAll(`[data-announcement-pill]`).forEach((t3) => {
        let n3 = p2.get(t3);
        !n3 || t3.hidden || t3.dataset.impressionPageView === e3 || (t3.dataset.impressionPageView = e3, n3());
      });
    }, 0));
  };
  var g2 = () => {
    document.querySelectorAll(`[data-announcement-pill]`).forEach((t3) => {
      if (t3.dataset.initialized === `true`)
        return;
      t3.dataset.initialized = `true`;
      let r5 = t3.getAttribute(`data-pill-surface`) || `home`, i4 = t3.getAttribute(`data-pill-host-surface`) || (r5 === `docs` ? `docs` : `home`), s3 = t3.getAttribute(`data-pill-placement`) || `top-banner`, c4 = t3.getAttribute(`data-pill-storage-key`) || `agy_announcement_dismissed_${r5}`, l4 = t3.getAttribute(`data-pill-fingerprint`) || ``, u3 = t3.dataset.announcementId || void 0, f3 = Number(t3.getAttribute(`data-pill-ttl-ms`)) || 6048e5;
      if (a3(c4, l4)) {
        t3.hidden = true, t3.setAttribute(`data-pill-dismissed`, `true`);
        return;
      }
      let m3 = t3.getAttribute(`data-pill-variant`) || `dark`, h3 = t3.querySelector(`[data-pill-badge-label]`), g3 = t3.getAttribute(`data-pill-badge`) || (h3 ? l2(h3) : ``), _2 = t3.querySelector(`[data-pill-text]`), v2 = _2 ? l2(_2) : ``, y2 = t3.querySelector(`[data-pill-cta-label]`), b = t3.getAttribute(`data-cta-text`) || (y2 ? l2(y2) : ``), x = t3.querySelector(`[data-pill-link]`), S = t3.dataset.destination || x?.getAttribute(`href`) || void 0, C = t3.dataset.moduleName || `${i4}_top_banner`, w = t3.dataset.pagePosition || s3;
      p2.set(t3, () => {
        s(`announcement_impression`, { announcementId: u3, navElement: u3, moduleName: C, pagePosition: w, surface: r5, hostSurface: i4, placement: s3, variant: m3, badge: g3, announcementText: v2, ctaText: b, destination: S });
      });
      let T2 = t3.querySelector(`[data-pill-dismiss]`);
      T2 && T2.addEventListener(`click`, (n3) => {
        if (n3.preventDefault(), n3.stopPropagation(), n3.detail === 0) {
          let e3 = t3.parentElement, n4 = e3 ? Array.from(e3.querySelectorAll(`[data-announcement-pill]:not([hidden])`)).filter((e4) => e4 !== t3)[0]?.querySelector(`[data-pill-link], [data-pill-dismiss]`) : null;
          n4 ? n4.focus() : T2.blur();
        }
        t3.hidden = true, t3.setAttribute(`data-pill-dismissed`, `true`), o2(c4, l4, f3), d2(), requestAnimationFrame(() => {
          setTimeout(() => {
            s(`announcement_dismiss`, { announcementId: u3, navElement: u3, moduleName: C, pagePosition: w, surface: r5, hostSurface: i4, placement: s3, variant: m3, badge: g3, announcementText: v2, ttlHours: Math.round(f3 / 36e5) });
          }, 0);
        });
      });
    }), f2(), d2(), h2();
  };
  document.addEventListener(`click`, (e3) => {
    let t3 = e3.target;
    t3 instanceof HTMLElement && t3.hasAttribute(`data-announcement-pill`) && !e3.defaultPrevented && t3.querySelector(`[data-pill-link]`)?.click();
  }, { passive: true }), g2(), document.addEventListener(`astro:page-load`, g2), window.addEventListener(`agy:page-ready`, g2), window.addEventListener(`resize`, d2, { passive: true });
})();
