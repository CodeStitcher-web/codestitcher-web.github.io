(() => {
  // ../antigravity-site/antigravity.google/_astro/deviceInfo.0uOIHWn-.js
  var e = (e16) => {
    switch (e16) {
      case `10.0`:
        return `Windows 10/11`;
      case `6.3`:
        return `Windows 8.1`;
      case `6.2`:
        return `Windows 8`;
      case `6.1`:
        return `Windows 7`;
      default:
        return `NT ${e16}`;
    }
  };
  var t = { get ua() {
    return typeof window < `u` ? navigator.userAgent : ``;
  }, get userAgent() {
    return this.ua;
  }, get isGooglebook() {
    let e16 = this.ua, t3 = typeof navigator < `u` ? navigator.userAgentData : void 0;
    return t3?.platform === `Android` && t3?.mobile === false || /googlebook|cros/i.test(e16);
  }, get isMobile() {
    let e16 = this.ua;
    if (this.isGooglebook)
      return false;
    let t3 = typeof navigator < `u` && navigator.maxTouchPoints > 0 && /macintosh/i.test(e16);
    return /Mobi|Android|iPhone|iPad|iPod/i.test(e16) || t3;
  }, get operatingSystem() {
    let t3 = this.ua, n4 = null;
    if (/iphone|ipod/i.test(t3)) {
      let e16 = t3.match(/OS (\d+[_.]\d+([_.]\d+)?)/i);
      return n4 = e16?.[1] ? `iOS ` + e16[1].replace(/_/g, `.`) : null, { name: `iphone`, version: n4, buttonText: ``, links: [] };
    } else if (/ipad/i.test(t3) || typeof navigator < `u` && navigator.maxTouchPoints > 0 && /macintosh/i.test(t3)) {
      let e16 = t3.match(/OS (\d+[_.]\d+([_.]\d+)?)/i);
      return n4 = e16?.[1] ? `iPadOS ` + e16[1].replace(/_/g, `.`) : null, { name: `ipad`, version: n4, buttonText: ``, links: [] };
    } else if (this.isGooglebook)
      return { name: `googlebook`, version: `Googlebook OS`, buttonText: ` for Googlebook`, links: [{ buttonText: `Get it on Google Play`, href: `https://play.google.com/store/apps/details?id=com.google.android.apps.antigravity` }] };
    else if (/android/i.test(t3)) {
      let e16 = t3.match(/Android (\d+(?:\.\d+)*)/i);
      return n4 = e16?.[1] ? `Android ${e16[1]}` : null, { name: `android`, version: n4, buttonText: ``, links: [] };
    } else if (/windows/i.test(t3)) {
      let r5 = t3.match(/Windows NT (\d+\.\d+)/i);
      return n4 = r5 && r5[1] ? e(r5[1]) : `Unknown Version`, { name: `windows`, version: n4, buttonText: ` for Windows`, links: [{ buttonText: `Download for x64`, href: null }, { buttonText: `Download for ARM64`, href: null }] };
    } else if (/macintosh|mac os x/i.test(t3)) {
      let e16 = t3.match(/Mac OS X (\d+[_.]\d+([_.]\d+)?)/i);
      return n4 = e16 && e16[1] ? `macOS ` + e16[1].replace(/_/g, `.`) : `Unknown Version`, { name: `mac`, version: n4, buttonText: ` for macOS`, links: [{ buttonText: `Download for Apple Silicon`, href: null }, { buttonText: `Download for Intel`, href: null }] };
    } else if (/linux/i.test(t3))
      return n4 = `Generic/Unknown Distribution`, { name: `linux`, version: n4, buttonText: ` for Linux`, links: [{ buttonText: `Download`, href: null }] };
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
    let e16 = Math.round(window.innerWidth || document.documentElement?.clientWidth || 0), n4 = Math.round(window.innerHeight || document.documentElement?.clientHeight || 0), r5 = e16 >= n4 ? `landscape` : `portrait`, i4 = Math.min(e16, n4), a4 = Math.max(e16, n4), o4 = i4 > 0 ? a4 / i4 : 1, s4 = typeof navigator < `u` ? navigator.userAgent : ``, c4 = window.visualViewport, l4 = typeof navigator < `u` ? navigator : void 0, u4 = !!(c4 && Array.isArray(c4.segments) && c4.segments.length > 1) || l4?.devicePosture?.type === `folded` || !!window.matchMedia?.(`(horizontal-viewport-segments: 2), (vertical-viewport-segments: 2)`)?.matches, d3 = /Pixel Fold|SM-F9|SM-F7|Galaxy Z Fold|Surface Duo/i.test(s4), f3 = i4 >= 600 && a4 <= 1150 && o4 <= 1.3, p3 = e16 >= 320 && e16 <= 368 && n4 >= 700 && n4 / e16 >= 2 || n4 >= 320 && n4 <= 368 && e16 >= 700 && e16 / n4 >= 2, m3 = `unknown`;
    try {
      m3 = t.operatingSystem.name;
    } catch {
      m3 = `unknown`;
    }
    let h2;
    return h2 = u4 || d3 || f3 || p3 ? `foldable` : e16 < 600 ? `mobile` : e16 <= 1024 || m3 === `ipad` ? `tablet` : `desktop`, { viewportCategory: h2, formFactor: h2, viewportWidth: e16, viewportHeight: n4, orientation: r5, operatingSystem: m3 };
  }
  function r() {
    if (typeof window > `u`)
      return false;
    try {
      let e16 = !!window.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches, t3 = !!(typeof navigator < `u` ? navigator : void 0)?.connection?.saveData;
      return e16 || t3;
    } catch {
      return false;
    }
  }
  typeof window < `u` && (window.userDeviceInfo = t, window.deviceInfo = t);

  // ../antigravity-site/antigravity.google/_astro/analytics.B3l_MiwL.js
  var r2 = `pagePath.pageTitle.viewportCategory.formFactor.viewportWidth.viewportHeight.orientation.operatingSystem.referrer.utm_source.utmSource.utm_medium.utmMedium.utm_campaign.utmCampaign.utm_term.utmTerm.utm_content.utmContent.videoProvider.videoId.videoSrc.videoUrl.videoTitle.moduleName.sectionName.modalId.depth.percent.milestone.progressPercent.state.fullscreen.videoIndex`.split(`.`);
  function i(e16) {
    if (!e16)
      return null;
    let t3 = e16.trim(), n4 = t3.match(/(?:youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?.*?\bv=|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i);
    return n4?.[1] ? n4[1] : /^[A-Za-z0-9_-]{11}$/.test(t3) ? t3 : null;
  }
  var a = new Map();
  function o(e16, t3) {
    let n4 = typeof t3.videoId == `string` ? t3.videoId.trim() : ``, r5 = typeof t3.videoSrc == `string` ? t3.videoSrc.trim() : ``, o4 = typeof t3.videoUrl == `string` ? t3.videoUrl.trim() : ``, s4 = r5 || o4 || n4, c4;
    if (c4 = t3.videoProvider === `youtube` || t3.videoProvider === `mp4` ? t3.videoProvider : e16 === `video_modal_open` || e16 === `video_modal_close` || /youtube|youtu\.be/i.test(s4) || i(s4) && !/\.(mp4|webm|mov)\b/i.test(s4) ? `youtube` : `mp4`, t3.videoProvider = c4, c4 === `youtube`) {
      let e17 = i(n4) || i(o4) || i(r5) || n4 || o4 || r5 || `youtube_video`, a4 = o4 || (r5.startsWith(`http`) ? r5 : ``) || `https://www.youtube.com/embed/${e17}`;
      t3.videoId = e17, t3.videoSrc = r5 || a4, t3.videoUrl = a4;
    } else {
      let e17 = r5 || o4 || n4 || `mp4_video`, i4 = e17.split(`?`)[0].split(`#`)[0].split(`/`).filter(Boolean).pop() || e17;
      t3.videoId = n4 || i4, t3.videoSrc = e17, t3.videoUrl = o4 || e17;
    }
    if (t3.moduleName ||= typeof t3.sectionName == `string` && t3.sectionName || `video_player`, e16 === `video_complete`) {
      let e17 = typeof t3.percent == `number` ? t3.percent : typeof t3.milestone == `number` ? t3.milestone : typeof t3.progressPercent == `number` ? t3.progressPercent : 100;
      t3.percent = e17, t3.milestone = e17, t3.progressPercent = e17;
    } else if (t3.percent !== void 0 || t3.milestone !== void 0 || t3.progressPercent !== void 0) {
      let e17 = typeof t3.percent == `number` ? t3.percent : typeof t3.milestone == `number` ? t3.milestone : Number(t3.progressPercent);
      Number.isNaN(e17) || (t3.percent = e17, t3.milestone = e17, t3.progressPercent = e17);
    }
    let l4 = String(t3.videoId || t3.videoSrc || `default`), u4 = `${e16}:${l4}:${t3.milestone === void 0 ? typeof t3.state == `string` ? t3.state : `` : String(t3.milestone)}`, d3 = Date.now(), f3 = a.get(u4);
    return f3 !== void 0 && d3 - f3 < 200 ? false : (a.set(u4, d3), e16 === `video_pause` ? a.delete(`video_play:${l4}:`) : e16 === `video_play` ? a.delete(`video_pause:${l4}:`) : e16 === `video_fullscreen` ? t3.state === `enter` ? a.delete(`video_fullscreen:${l4}:exit`) : t3.state === `exit` && a.delete(`video_fullscreen:${l4}:enter`) : e16 === `video_modal_close` ? (a.delete(`video_modal_open:${l4}:`), a.delete(`video_start:${l4}:`), a.delete(`video_play:${l4}:`), a.delete(`video_pause:${l4}:`)) : e16 === `video_modal_open` && a.delete(`video_modal_close:${l4}:`), true);
  }
  function s(e16, t3 = {}) {
    if (!(typeof window > `u`))
      try {
        let i4 = window, a4 = i4.dataLayer = i4.dataLayer || [], s4 = {};
        for (let [e17, n4] of Object.entries(t3))
          n4 != null && n4 !== `` && (s4[e17] = n4);
        s4.planType !== void 0 && s4.plantType === void 0 && (s4.plantType = s4.planType);
        let c4 = n();
        if (s4.pagePath ||= window.location.pathname || `/`, s4.locale === void 0 && typeof document < `u` && (s4.locale = document.documentElement.lang || `en-US`), s4.viewportCategory ||= c4.viewportCategory, s4.formFactor ||= c4.formFactor, e16.startsWith(`video_`) && !o(e16, s4))
          return;
        let l4 = {};
        for (let e17 of r2)
          s4[e17] !== void 0 && (l4[e17] = s4[e17]);
        a4.push({ event: e16, ...l4, eventParams: s4 }), a4.push({ eventParams: void 0 });
      } catch {
      }
  }
  var c = new Set();
  var l = new Set();
  var u = ``;
  function d(e16, t3 = false) {
    let n4 = e16 ?? (typeof window < `u` && window.location.pathname || `/`);
    (t3 || n4 !== u) && (u = n4, c.clear(), l.clear(), a.clear());
  }
  function f() {
    if (!(typeof window > `u`))
      try {
        let e16 = window.dataLayer;
        if (!Array.isArray(e16))
          return;
        let t3 = n();
        for (let n4 = e16.length - 1; n4 >= 0; n4--) {
          let r5 = e16[n4];
          if (r5 && r5.event === `page_view`) {
            if (r5.viewportCategory = t3.viewportCategory, r5.formFactor = t3.formFactor, r5.viewportWidth = t3.viewportWidth, r5.viewportHeight = t3.viewportHeight, r5.orientation = t3.orientation, r5.operatingSystem = t3.operatingSystem, r5.eventParams && typeof r5.eventParams == `object`) {
              let e17 = r5.eventParams;
              e17.viewportCategory = t3.viewportCategory, e17.formFactor = t3.formFactor, e17.viewportWidth = t3.viewportWidth, e17.viewportHeight = t3.viewportHeight, e17.orientation = t3.orientation, e17.operatingSystem = t3.operatingSystem;
            }
            break;
          }
        }
      } catch {
      }
  }
  var p = ``;
  var m = 0;
  function g(e16 = false) {
    if (!(typeof window > `u`))
      try {
        let t3 = window, r5 = t3.dataLayer = t3.dataLayer || [], i4 = window.location.pathname || `/`, a4 = `${window.location.origin}${i4}`;
        d(i4);
        let o4;
        for (let e17 = r5.length - 1; e17 >= 0; e17--) {
          let t4 = r5[e17];
          if (t4 && t4.event === `page_view`) {
            o4 = t4;
            break;
          }
        }
        let c4 = o4 && o4.pagePath === i4 ? o4 : void 0;
        if (!e16 && t3.__agyLastPageViewPath === i4 && c4) {
          p = a4, f();
          return;
        }
        t3.__agyLastPageViewPath = i4, e16 && (m += 1);
        let l4 = n(), u4 = new URLSearchParams(window.location.search || ``), h2 = u4.get(`utm_source`) || void 0, g3 = u4.get(`utm_medium`) || void 0, _3 = u4.get(`utm_campaign`) || void 0, v3 = u4.get(`utm_term`) || void 0, y3 = u4.get(`utm_content`) || void 0, b2 = p;
        p = a4;
        let x2 = b2 && b2 !== a4 ? b2 : document.referrer.split(/[?#]/)[0] || void 0, S2 = document.title ? document.title : void 0;
        if (!e16 && c4) {
          c4.viewportCategory = l4.viewportCategory, c4.formFactor = l4.formFactor, c4.viewportWidth = l4.viewportWidth, c4.viewportHeight = l4.viewportHeight, c4.orientation = l4.orientation, c4.operatingSystem = l4.operatingSystem, S2 && (c4.pageTitle = S2);
          let e17 = c4.referrer || x2;
          e17 && (c4.referrer = e17), h2 && (c4.utm_source = h2, c4.utmSource = h2), g3 && (c4.utm_medium = g3, c4.utmMedium = g3), _3 && (c4.utm_campaign = _3, c4.utmCampaign = _3), v3 && (c4.utm_term = v3, c4.utmTerm = v3), y3 && (c4.utm_content = y3, c4.utmContent = y3), c4.eventParams = { ...typeof c4.eventParams == `object` && c4.eventParams ? c4.eventParams : {}, pagePath: i4, ...S2 ? { pageTitle: S2 } : {}, viewportCategory: l4.viewportCategory, formFactor: l4.formFactor, viewportWidth: l4.viewportWidth, viewportHeight: l4.viewportHeight, orientation: l4.orientation, operatingSystem: l4.operatingSystem, ...e17 ? { referrer: e17 } : {}, ...h2 ? { utm_source: h2, utmSource: h2 } : {}, ...g3 ? { utm_medium: g3, utmMedium: g3 } : {}, ..._3 ? { utm_campaign: _3, utmCampaign: _3 } : {}, ...v3 ? { utm_term: v3, utmTerm: v3 } : {}, ...y3 ? { utm_content: y3, utmContent: y3 } : {} };
          return;
        }
        s(`page_view`, { pagePath: i4, pageTitle: S2, viewportCategory: l4.viewportCategory, formFactor: l4.formFactor, viewportWidth: l4.viewportWidth, viewportHeight: l4.viewportHeight, orientation: l4.orientation, operatingSystem: l4.operatingSystem, referrer: x2, utm_source: h2, utmSource: h2, utm_medium: g3, utmMedium: g3, utm_campaign: _3, utmCampaign: _3, utm_term: v3, utmTerm: v3, utm_content: y3, utmContent: y3 });
      } catch {
      }
  }
  function _(e16, t3 = {}) {
    if (typeof window > `u` || !e16)
      return;
    let n4 = window.location.pathname || `/`;
    d(n4);
    let r5 = `${n4}::${e16}`;
    c.has(r5) || (c.add(r5), s(`section_view`, { ...t3, sectionName: e16, moduleName: typeof t3.moduleName == `string` && t3.moduleName || e16, pagePath: n4 }));
  }
  function v(e16) {
    if (typeof window > `u`)
      return;
    let t3 = window.location.pathname || `/`;
    d(t3), !l.has(e16) && (l.add(e16), s(`scroll_depth`, { depth: e16, percent: e16, milestone: e16, pagePath: t3 }));
  }
  function y(e16, t3 = {}) {
    s(e16, t3);
  }
  typeof window < `u` && (window.agyAnalytics = { track: s, trackPageView: g, trackSectionView: _, trackScrollDepth: v, trackVideoEvent: y, getViewportInfo: n, prefersReducedMotionOrSaveData: r, resetPageAnalyticsState: d });
  var T = new Map([[`google.google-antigravity`, `Visual Studio Code`], [`google.googleantigravity`, `Visual Studio`]]);
  var j = new Set();
  function M(e16, t3, n4) {
    j.has(e16) || (j.add(e16), s(`nav_menu_open`, { navMenu: e16, navElement: e16, navMethod: t3, navType: n4 }));
  }

  // ../antigravity-site/antigravity.google/_astro/gsap.Bi_c5vh2.js
  function e2(e16) {
    if (e16 === void 0)
      throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e16;
  }
  function t2(e16, t3) {
    e16.prototype = Object.create(t3.prototype), e16.prototype.constructor = e16, e16.__proto__ = t3;
  }
  var n2 = { autoSleep: 120, force3D: `auto`, nullTargetWarn: 1, units: { lineHeight: `` } };
  var r3 = { duration: 0.5, overwrite: false, delay: 0 };
  var i2;
  var a2;
  var o2;
  var s2 = 1e8;
  var c2 = 1 / s2;
  var l2 = Math.PI * 2;
  var u2 = l2 / 4;
  var d2 = 0;
  var f2 = Math.sqrt;
  var p2 = Math.cos;
  var m2 = Math.sin;
  var h = function(e16) {
    return typeof e16 == `string`;
  };
  var g2 = function(e16) {
    return typeof e16 == `function`;
  };
  var _2 = function(e16) {
    return typeof e16 == `number`;
  };
  var v2 = function(e16) {
    return e16 === void 0;
  };
  var y2 = function(e16) {
    return typeof e16 == `object`;
  };
  var b = function(e16) {
    return e16 !== false;
  };
  var x = function() {
    return typeof window < `u`;
  };
  var S = function(e16) {
    return g2(e16) || h(e16);
  };
  var C = typeof ArrayBuffer == `function` && ArrayBuffer.isView || function() {
  };
  var w = Array.isArray;
  var T2 = /random\([^)]+\)/g;
  var E = /,\s*/g;
  var D = /(?:-?\.?\d|\.)+/gi;
  var O = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var k = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var A = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var j2 = /[+-]=-?[.\d]+/;
  var M2 = /[^,'"\[\]\s]+/gi;
  var N = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var P;
  var F;
  var I;
  var L;
  var R = {};
  var z = {};
  var B;
  var ee = function(e16) {
    return (z = Oe(e16, R)) && Z;
  };
  var te = function(e16, t3) {
    return console.warn(`Invalid property`, e16, `set to`, t3, `Missing plugin? gsap.registerPlugin()`);
  };
  var ne = function(e16, t3) {
    return !t3 && console.warn(e16);
  };
  var re = function(e16, t3) {
    return e16 && (R[e16] = t3) && z && (z[e16] = t3) || R;
  };
  var ie = function() {
    return 0;
  };
  var ae = { suppressEvents: true, isStart: true, kill: false };
  var oe = { suppressEvents: true, kill: false };
  var se = { suppressEvents: true };
  var ce = {};
  var le = [];
  var ue = {};
  var de;
  var V = {};
  var fe = {};
  var pe = 30;
  var me = [];
  var he = ``;
  var ge = function(e16) {
    var t3 = e16[0], n4, r5;
    if (y2(t3) || g2(t3) || (e16 = [e16]), !(n4 = (t3._gsap || {}).harness)) {
      for (r5 = me.length; r5-- && !me[r5].targetTest(t3); )
        ;
      n4 = me[r5];
    }
    for (r5 = e16.length; r5--; )
      e16[r5] && (e16[r5]._gsap || (e16[r5]._gsap = new en(e16[r5], n4))) || e16.splice(r5, 1);
    return e16;
  };
  var _e = function(e16) {
    return e16._gsap || ge(ut(e16))[0]._gsap;
  };
  var ve = function(e16, t3, n4) {
    return (n4 = e16[t3]) && g2(n4) ? e16[t3]() : v2(n4) && e16.getAttribute && e16.getAttribute(t3) || n4;
  };
  var H = function(e16, t3) {
    return (e16 = e16.split(`,`)).forEach(t3) || e16;
  };
  var U = function(e16) {
    return Math.round(e16 * 1e5) / 1e5 || 0;
  };
  var W = function(e16) {
    return Math.round(e16 * 1e7) / 1e7 || 0;
  };
  var ye = function(e16, t3) {
    var n4 = t3.charAt(0), r5 = parseFloat(t3.substr(2));
    return e16 = parseFloat(e16), n4 === `+` ? e16 + r5 : n4 === `-` ? e16 - r5 : n4 === `*` ? e16 * r5 : e16 / r5;
  };
  var be = function(e16, t3) {
    for (var n4 = t3.length, r5 = 0; e16.indexOf(t3[r5]) < 0 && ++r5 < n4; )
      ;
    return r5 < n4;
  };
  var xe = function() {
    var e16 = le.length, t3 = le.slice(0), n4, r5;
    for (ue = {}, le.length = 0, n4 = 0; n4 < e16; n4++)
      r5 = t3[n4], r5 && r5._lazy && (r5.render(r5._lazy[0], r5._lazy[1], true)._lazy = 0);
  };
  var Se = function(e16) {
    return !!(e16._initted || e16._startAt || e16.add);
  };
  var Ce = function(e16, t3, n4, r5) {
    le.length && !a2 && xe(), e16.render(t3, n4, r5 || !!(a2 && t3 < 0 && Se(e16))), le.length && !a2 && xe();
  };
  var we = function(e16) {
    var t3 = parseFloat(e16);
    return (t3 || t3 === 0) && (e16 + ``).match(M2).length < 2 ? t3 : h(e16) ? e16.trim() : e16;
  };
  var Te = function(e16) {
    return e16;
  };
  var Ee = function(e16, t3) {
    for (var n4 in t3)
      n4 in e16 || (e16[n4] = t3[n4]);
    return e16;
  };
  var De = function(e16) {
    return function(t3, n4) {
      for (var r5 in n4)
        r5 in t3 || r5 === `duration` && e16 || r5 === `ease` || (t3[r5] = n4[r5]);
    };
  };
  var Oe = function(e16, t3) {
    for (var n4 in t3)
      e16[n4] = t3[n4];
    return e16;
  };
  var ke = function e3(t3, n4) {
    for (var r5 in n4)
      r5 !== `__proto__` && r5 !== `constructor` && r5 !== `prototype` && (t3[r5] = y2(n4[r5]) ? e3(t3[r5] || (t3[r5] = {}), n4[r5]) : n4[r5]);
    return t3;
  };
  var Ae = function(e16, t3) {
    var n4 = {}, r5;
    for (r5 in e16)
      r5 in t3 || (n4[r5] = e16[r5]);
    return n4;
  };
  var je = function(e16) {
    var t3 = e16.parent || P, n4 = e16.keyframes ? De(w(e16.keyframes)) : Ee;
    if (b(e16.inherit))
      for (; t3; )
        n4(e16, t3.vars.defaults), t3 = t3.parent || t3._dp;
    return e16;
  };
  var Me = function(e16, t3) {
    for (var n4 = e16.length, r5 = n4 === t3.length; r5 && n4-- && e16[n4] === t3[n4]; )
      ;
    return n4 < 0;
  };
  var Ne = function(e16, t3, n4, r5, i4) {
    n4 === void 0 && (n4 = `_first`), r5 === void 0 && (r5 = `_last`);
    var a4 = e16[r5], o4;
    if (i4)
      for (o4 = t3[i4]; a4 && a4[i4] > o4; )
        a4 = a4._prev;
    return a4 ? (t3._next = a4._next, a4._next = t3) : (t3._next = e16[n4], e16[n4] = t3), t3._next ? t3._next._prev = t3 : e16[r5] = t3, t3._prev = a4, t3.parent = t3._dp = e16, t3;
  };
  var Pe = function(e16, t3, n4, r5) {
    n4 === void 0 && (n4 = `_first`), r5 === void 0 && (r5 = `_last`);
    var i4 = t3._prev, a4 = t3._next;
    i4 ? i4._next = a4 : e16[n4] === t3 && (e16[n4] = a4), a4 ? a4._prev = i4 : e16[r5] === t3 && (e16[r5] = i4), t3._next = t3._prev = t3.parent = null;
  };
  var Fe = function(e16, t3) {
    e16.parent && (!t3 || e16.parent.autoRemoveChildren) && e16.parent.remove && e16.parent.remove(e16), e16._act = 0;
  };
  var Ie = function(e16, t3) {
    if (e16 && (!t3 || t3._end > e16._dur || t3._start < 0))
      for (var n4 = e16; n4; )
        n4._dirty = 1, n4 = n4.parent;
    return e16;
  };
  var Le = function(e16) {
    for (var t3 = e16.parent; t3 && t3.parent; )
      t3._dirty = 1, t3.totalDuration(), t3 = t3.parent;
    return e16;
  };
  var Re = function(e16, t3, n4, r5) {
    return e16._startAt && (a2 ? e16._startAt.revert(oe) : e16.vars.immediateRender && !e16.vars.autoRevert || e16._startAt.render(t3, true, r5));
  };
  var ze = function e4(t3) {
    return !t3 || t3._ts && e4(t3.parent);
  };
  var Be = function(e16) {
    return e16._repeat ? Ve(e16._tTime, e16 = e16.duration() + e16._rDelay) * e16 : 0;
  };
  var Ve = function(e16, t3) {
    var n4 = Math.floor(e16 = W(e16 / t3));
    return e16 && n4 === e16 ? n4 - 1 : n4;
  };
  var He = function(e16, t3) {
    return (e16 - t3._start) * t3._ts + (t3._ts >= 0 ? 0 : t3._dirty ? t3.totalDuration() : t3._tDur);
  };
  var Ue = function(e16) {
    return e16._end = W(e16._start + (e16._tDur / Math.abs(e16._ts || e16._rts || c2) || 0));
  };
  var We = function(e16, t3) {
    var n4 = e16._dp;
    return n4 && n4.smoothChildTiming && e16._ts && (e16._start = W(n4._time - (e16._ts > 0 ? t3 / e16._ts : ((e16._dirty ? e16.totalDuration() : e16._tDur) - t3) / -e16._ts)), Ue(e16), n4._dirty || Ie(n4, e16)), e16;
  };
  var Ge = function(e16, t3) {
    var n4;
    if ((t3._time || !t3._dur && t3._initted || t3._start < e16._time && (t3._dur || !t3.add)) && (n4 = He(e16.rawTime(), t3), (!t3._dur || at(0, t3.totalDuration(), n4) - t3._tTime > c2) && t3.render(n4, true)), Ie(e16, t3)._dp && e16._initted && e16._time >= e16._dur && e16._ts) {
      if (e16._dur < e16.duration())
        for (n4 = e16; n4._dp; )
          n4.rawTime() >= 0 && n4.totalTime(n4._tTime), n4 = n4._dp;
      e16._zTime = -c2;
    }
  };
  var Ke = function(e16, t3, n4, r5) {
    return t3.parent && Fe(t3), t3._start = W((_2(n4) ? n4 : n4 || e16 !== P ? nt(e16, n4, t3) : e16._time) + t3._delay), t3._end = W(t3._start + (t3.totalDuration() / Math.abs(t3.timeScale()) || 0)), Ne(e16, t3, `_first`, `_last`, e16._sort ? `_start` : 0), Xe(t3) || (e16._recent = t3), r5 || Ge(e16, t3), e16._ts < 0 && We(e16, e16._tTime), e16;
  };
  var qe = function(e16, t3) {
    return (R.ScrollTrigger || te(`scrollTrigger`, t3)) && R.ScrollTrigger.create(t3, e16);
  };
  var Je = function(e16, t3, n4, r5, i4) {
    if (ln(e16, t3, i4), !e16._initted)
      return 1;
    if (!n4 && e16._pt && !a2 && (e16._dur && e16.vars.lazy !== false || !e16._dur && e16.vars.lazy) && de !== Vt.frame)
      return le.push(e16), e16._lazy = [i4, r5], 1;
  };
  var Ye = function e5(t3) {
    var n4 = t3.parent;
    return n4 && n4._ts && n4._initted && !n4._lock && (n4.rawTime() < 0 || e5(n4));
  };
  var Xe = function(e16) {
    var t3 = e16.data;
    return t3 === `isFromStart` || t3 === `isStart`;
  };
  var Ze = function(e16, t3, n4, r5) {
    var i4 = e16.ratio, o4 = t3 < 0 || !t3 && (!e16._start && Ye(e16) && !(!e16._initted && Xe(e16)) || (e16._ts < 0 || e16._dp._ts < 0) && !Xe(e16)) ? 0 : 1, s4 = e16._rDelay, l4 = 0, u4, d3, f3;
    if (s4 && e16._repeat && (l4 = at(0, e16._tDur, t3), d3 = Ve(l4, s4), e16._yoyo && d3 & 1 && (o4 = 1 - o4), d3 !== Ve(e16._tTime, s4) && (i4 = 1 - o4, e16.vars.repeatRefresh && e16._initted && e16.invalidate())), o4 !== i4 || a2 || r5 || e16._zTime === c2 || !t3 && e16._zTime) {
      if (!e16._initted && Je(e16, t3, r5, n4, l4))
        return;
      for (f3 = e16._zTime, e16._zTime = t3 || (n4 ? c2 : 0), n4 ||= t3 && !f3, e16.ratio = o4, e16._from && (o4 = 1 - o4), e16._time = 0, e16._tTime = l4, u4 = e16._pt; u4; )
        u4.r(o4, u4.d), u4 = u4._next;
      t3 < 0 && Re(e16, t3, n4, true), e16._onUpdate && !n4 && Dt(e16, `onUpdate`), l4 && e16._repeat && !n4 && e16.parent && Dt(e16, `onRepeat`), (t3 >= e16._tDur || t3 < 0) && e16.ratio === o4 && (o4 && Fe(e16, 1), !n4 && !a2 && (Dt(e16, o4 ? `onComplete` : `onReverseComplete`, true), e16._prom && e16._prom()));
    } else
      e16._zTime ||= t3;
  };
  var Qe = function(e16, t3, n4) {
    var r5;
    if (n4 > t3)
      for (r5 = e16._first; r5 && r5._start <= n4; ) {
        if (r5.data === `isPause` && r5._start > t3)
          return r5;
        r5 = r5._next;
      }
    else
      for (r5 = e16._last; r5 && r5._start >= n4; ) {
        if (r5.data === `isPause` && r5._start < t3)
          return r5;
        r5 = r5._prev;
      }
  };
  var $e = function(e16, t3, n4, r5) {
    var i4 = e16._repeat, a4 = W(t3) || 0, o4 = e16._tTime / e16._tDur;
    return o4 && !r5 && (e16._time *= a4 / e16._dur), e16._dur = a4, e16._tDur = i4 ? i4 < 0 ? 1e10 : W(a4 * (i4 + 1) + e16._rDelay * i4) : a4, o4 > 0 && !r5 && We(e16, e16._tTime = e16._tDur * o4), e16.parent && Ue(e16), n4 || Ie(e16.parent, e16), e16;
  };
  var et = function(e16) {
    return e16 instanceof J ? Ie(e16) : $e(e16, e16._dur);
  };
  var tt = { _start: 0, endTime: ie, totalDuration: ie };
  var nt = function e6(t3, n4, r5) {
    var i4 = t3.labels, a4 = t3._recent || tt, o4 = t3.duration() >= s2 ? a4.endTime(false) : t3._dur, c4, l4, u4;
    return h(n4) && (isNaN(n4) || n4 in i4) ? (l4 = n4.charAt(0), u4 = n4.substr(-1) === `%`, c4 = n4.indexOf(`=`), l4 === `<` || l4 === `>` ? (c4 >= 0 && (n4 = n4.replace(/=/, ``)), (l4 === `<` ? a4._start : a4.endTime(a4._repeat >= 0)) + (parseFloat(n4.substr(1)) || 0) * (u4 ? (c4 < 0 ? a4 : r5).totalDuration() / 100 : 1)) : c4 < 0 ? (n4 in i4 || (i4[n4] = o4), i4[n4]) : (l4 = parseFloat(n4.charAt(c4 - 1) + n4.substr(c4 + 1)), u4 && r5 && (l4 = l4 / 100 * (w(r5) ? r5[0] : r5).totalDuration()), c4 > 1 ? e6(t3, n4.substr(0, c4 - 1), r5) + l4 : o4 + l4)) : n4 == null ? o4 : +n4;
  };
  var rt = function(e16, t3, n4) {
    var r5 = _2(t3[1]), i4 = (r5 ? 2 : 1) + (e16 < 2 ? 0 : 1), a4 = t3[i4], o4, s4;
    if (r5 && (a4.duration = t3[1]), a4.parent = n4, e16) {
      for (o4 = a4, s4 = n4; s4 && !(`immediateRender` in o4); )
        o4 = s4.vars.defaults || {}, s4 = b(s4.vars.inherit) && s4.parent;
      a4.immediateRender = b(o4.immediateRender), e16 < 2 ? a4.runBackwards = 1 : a4.startAt = t3[i4 - 1];
    }
    return new Y(t3[0], a4, t3[i4 + 1]);
  };
  var it = function(e16, t3) {
    return e16 || e16 === 0 ? t3(e16) : t3;
  };
  var at = function(e16, t3, n4) {
    return n4 < e16 ? e16 : n4 > t3 ? t3 : n4;
  };
  var G = function(e16, t3) {
    return !h(e16) || !(t3 = N.exec(e16)) ? `` : t3[1];
  };
  var ot = function(e16, t3, n4) {
    return it(n4, function(n5) {
      return at(e16, t3, n5);
    });
  };
  var st = [].slice;
  var ct = function(e16, t3) {
    return e16 && y2(e16) && `length` in e16 && (!t3 && !e16.length || e16.length - 1 in e16 && y2(e16[0])) && !e16.nodeType && e16 !== F;
  };
  var lt = function(e16, t3, n4) {
    return n4 === void 0 && (n4 = []), e16.forEach(function(e17) {
      var r5;
      return h(e17) && !t3 || ct(e17, 1) ? (r5 = n4).push.apply(r5, ut(e17)) : n4.push(e17);
    }) || n4;
  };
  var ut = function(e16, t3, n4) {
    return o2 && !t3 && o2.selector ? o2.selector(e16) : h(e16) && !n4 && (I || !Ht()) ? st.call((t3 || L).querySelectorAll(e16), 0) : w(e16) ? lt(e16, n4) : ct(e16) ? st.call(e16, 0) : e16 ? [e16] : [];
  };
  var dt = function(e16) {
    return e16 = ut(e16)[0] || ne(`Invalid scope`) || {}, function(t3) {
      var n4 = e16.current || e16.nativeElement || e16;
      return ut(t3, n4.querySelectorAll ? n4 : n4 === e16 ? ne(`Invalid scope`) || L.createElement(`div`) : e16);
    };
  };
  var ft = function(e16) {
    return e16.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var pt = function(e16) {
    if (g2(e16))
      return e16;
    var t3 = y2(e16) ? e16 : { each: e16 }, n4 = Yt(t3.ease), r5 = t3.from || 0, i4 = parseFloat(t3.base) || 0, a4 = {}, o4 = r5 > 0 && r5 < 1, c4 = isNaN(r5) || o4, l4 = t3.axis, u4 = r5, d3 = r5;
    return h(r5) ? u4 = d3 = { center: 0.5, edges: 0.5, end: 1 }[r5] || 0 : !o4 && c4 && (u4 = r5[0], d3 = r5[1]), function(e17, o5, p3) {
      var m3 = (p3 || t3).length, h2 = a4[m3], g3, _3, v3, y3, b2, x2, S2, C2, w2;
      if (!h2) {
        if (w2 = t3.grid === `auto` ? 0 : (t3.grid || [1, s2])[1], !w2) {
          for (S2 = -s2; S2 < (S2 = p3[w2++].getBoundingClientRect().left) && w2 < m3; )
            ;
          w2 < m3 && w2--;
        }
        for (h2 = a4[m3] = [], g3 = c4 ? Math.min(w2, m3) * u4 - 0.5 : r5 % w2, _3 = w2 === s2 ? 0 : c4 ? m3 * d3 / w2 - 0.5 : r5 / w2 | 0, S2 = 0, C2 = s2, x2 = 0; x2 < m3; x2++)
          v3 = x2 % w2 - g3, y3 = _3 - (x2 / w2 | 0), h2[x2] = b2 = l4 ? Math.abs(l4 === `y` ? y3 : v3) : f2(v3 * v3 + y3 * y3), b2 > S2 && (S2 = b2), b2 < C2 && (C2 = b2);
        r5 === `random` && ft(h2), h2.max = S2 - C2, h2.min = C2, h2.v = m3 = (parseFloat(t3.amount) || parseFloat(t3.each) * (w2 > m3 ? m3 - 1 : l4 ? l4 === `y` ? m3 / w2 : w2 : Math.max(w2, m3 / w2)) || 0) * (r5 === `edges` ? -1 : 1), h2.b = m3 < 0 ? i4 - m3 : i4, h2.u = G(t3.amount || t3.each) || 0, n4 = n4 && m3 < 0 ? Jt(n4) : n4;
      }
      return m3 = (h2[e17] - h2.min) / h2.max || 0, W(h2.b + (n4 ? n4(m3) : m3) * h2.v) + h2.u;
    };
  };
  var mt = function(e16) {
    var t3 = 10 ** ((e16 + ``).split(`.`)[1] || ``).length;
    return function(n4) {
      var r5 = W(Math.round(parseFloat(n4) / e16) * e16 * t3);
      return (r5 - r5 % 1) / t3 + (_2(n4) ? 0 : G(n4));
    };
  };
  var ht = function(e16, t3) {
    var n4 = w(e16), r5, i4;
    return !n4 && y2(e16) && (r5 = n4 = e16.radius || s2, e16.values ? (e16 = ut(e16.values), (i4 = !_2(e16[0])) && (r5 *= r5)) : e16 = mt(e16.increment)), it(t3, n4 ? g2(e16) ? function(t4) {
      return i4 = e16(t4), Math.abs(i4 - t4) <= r5 ? i4 : t4;
    } : function(t4) {
      for (var n5 = parseFloat(i4 ? t4.x : t4), a4 = parseFloat(i4 ? t4.y : 0), o4 = s2, c4 = 0, l4 = e16.length, u4, d3; l4--; )
        i4 ? (u4 = e16[l4].x - n5, d3 = e16[l4].y - a4, u4 = u4 * u4 + d3 * d3) : u4 = Math.abs(e16[l4] - n5), u4 < o4 && (o4 = u4, c4 = l4);
      return c4 = !r5 || o4 <= r5 ? e16[c4] : t4, i4 || c4 === t4 || _2(t4) ? c4 : c4 + G(t4);
    } : mt(e16));
  };
  var gt = function(e16, t3, n4, r5) {
    return it(w(e16) ? !t3 : n4 === true ? !!(n4 = 0) : !r5, function() {
      return w(e16) ? e16[~~(Math.random() * e16.length)] : (n4 ||= 1e-5) && (r5 = n4 < 1 ? 10 ** ((n4 + ``).length - 2) : 1) && Math.floor(Math.round((e16 - n4 / 2 + Math.random() * (t3 - e16 + n4 * 0.99)) / n4) * n4 * r5) / r5;
    });
  };
  var _t = function() {
    var e16 = [...arguments];
    return function(t3) {
      return e16.reduce(function(e17, t4) {
        return t4(e17);
      }, t3);
    };
  };
  var vt = function(e16, t3) {
    return function(n4) {
      return e16(parseFloat(n4)) + (t3 || G(n4));
    };
  };
  var yt = function(e16, t3, n4) {
    return wt(e16, t3, 0, 1, n4);
  };
  var bt = function(e16, t3, n4) {
    return it(n4, function(n5) {
      return e16[~~t3(n5)];
    });
  };
  var xt = function e7(t3, n4, r5) {
    var i4 = n4 - t3;
    return w(t3) ? bt(t3, e7(0, t3.length), n4) : it(r5, function(e16) {
      return (i4 + (e16 - t3) % i4) % i4 + t3;
    });
  };
  var St = function e8(t3, n4, r5) {
    var i4 = n4 - t3, a4 = i4 * 2;
    return w(t3) ? bt(t3, e8(0, t3.length - 1), n4) : it(r5, function(e16) {
      return e16 = (a4 + (e16 - t3) % a4) % a4 || 0, t3 + (e16 > i4 ? a4 - e16 : e16);
    });
  };
  var Ct = function(e16) {
    return e16.replace(T2, function(e17) {
      var t3 = e17.indexOf(`[`) + 1, n4 = e17.substring(t3 || 7, t3 ? e17.indexOf(`]`) : e17.length - 1).split(E);
      return gt(t3 ? n4 : +n4[0], t3 ? 0 : +n4[1], +n4[2] || 1e-5);
    });
  };
  var wt = function(e16, t3, n4, r5, i4) {
    var a4 = t3 - e16, o4 = r5 - n4;
    return it(i4, function(t4) {
      return n4 + ((t4 - e16) / a4 * o4 || 0);
    });
  };
  var Tt = function e9(t3, n4, r5, i4) {
    var a4 = isNaN(t3 + n4) ? 0 : function(e16) {
      return (1 - e16) * t3 + e16 * n4;
    };
    if (!a4) {
      var o4 = h(t3), s4 = {}, c4, l4, u4, d3, f3;
      if (r5 === true && (i4 = 1) && (r5 = null), o4)
        t3 = { p: t3 }, n4 = { p: n4 };
      else if (w(t3) && !w(n4)) {
        for (u4 = [], d3 = t3.length, f3 = d3 - 2, l4 = 1; l4 < d3; l4++)
          u4.push(e9(t3[l4 - 1], t3[l4]));
        d3--, a4 = function(e16) {
          e16 *= d3;
          var t4 = Math.min(f3, ~~e16);
          return u4[t4](e16 - t4);
        }, r5 = n4;
      } else
        i4 || (t3 = Oe(w(t3) ? [] : {}, t3));
      if (!u4) {
        for (c4 in n4)
          rn.call(s4, t3, c4, `get`, n4[c4]);
        a4 = function(e16) {
          return wn(e16, s4) || (o4 ? t3.p : t3);
        };
      }
    }
    return it(r5, a4);
  };
  var Et = function(e16, t3, n4) {
    var r5 = e16.labels, i4 = s2, a4, o4, c4;
    for (a4 in r5)
      o4 = r5[a4] - t3, o4 < 0 == !!n4 && o4 && i4 > (o4 = Math.abs(o4)) && (c4 = a4, i4 = o4);
    return c4;
  };
  var Dt = function(e16, t3, n4) {
    var r5 = e16.vars, i4 = r5[t3], a4 = o2, s4 = e16._ctx, c4, l4, u4;
    if (i4)
      return c4 = r5[t3 + `Params`], l4 = r5.callbackScope || e16, n4 && le.length && xe(), s4 && (o2 = s4), u4 = c4 ? i4.apply(l4, c4) : i4.call(l4), o2 = a4, u4;
  };
  var Ot = function(e16) {
    return Fe(e16), e16.scrollTrigger && e16.scrollTrigger.kill(!!a2), e16.progress() < 1 && Dt(e16, `onInterrupt`), e16;
  };
  var kt;
  var At = [];
  var jt = function(e16) {
    if (e16)
      if (e16 = !e16.name && e16.default || e16, x() || e16.headless) {
        var t3 = e16.name, n4 = g2(e16), r5 = t3 && !n4 && e16.init ? function() {
          this._props = [];
        } : e16, i4 = { init: ie, render: wn, add: rn, kill: En, modifier: Tn, rawVars: 0 }, a4 = { targetTest: 0, get: 0, getSetter: bn, aliases: {}, register: 0 };
        if (Ht(), e16 !== r5) {
          if (V[t3])
            return;
          Ee(r5, Ee(Ae(e16, i4), a4)), Oe(r5.prototype, Oe(i4, Ae(e16, a4))), V[r5.prop = t3] = r5, e16.targetTest && (me.push(r5), ce[t3] = 1), t3 = (t3 === `css` ? `CSS` : t3.charAt(0).toUpperCase() + t3.substr(1)) + `Plugin`;
        }
        re(t3, r5), e16.register && e16.register(Z, r5, X);
      } else
        At.push(e16);
  };
  var K = 255;
  var Mt = { aqua: [0, K, K], lime: [0, K, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, K], navy: [0, 0, 128], white: [K, K, K], olive: [128, 128, 0], yellow: [K, K, 0], orange: [K, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [K, 0, 0], pink: [K, 192, 203], cyan: [0, K, K], transparent: [K, K, K, 0] };
  var Nt = function(e16, t3, n4) {
    return e16 += e16 < 0 ? 1 : e16 > 1 ? -1 : 0, (e16 * 6 < 1 ? t3 + (n4 - t3) * e16 * 6 : e16 < 0.5 ? n4 : e16 * 3 < 2 ? t3 + (n4 - t3) * (2 / 3 - e16) * 6 : t3) * K + 0.5 | 0;
  };
  var Pt = function(e16, t3, n4) {
    var r5 = e16 ? _2(e16) ? [e16 >> 16, e16 >> 8 & K, e16 & K] : 0 : Mt.black, i4, a4, o4, s4, c4, l4, u4, d3, f3, p3;
    if (!r5) {
      if (e16.substr(-1) === `,` && (e16 = e16.substr(0, e16.length - 1)), Mt[e16])
        r5 = Mt[e16];
      else if (e16.charAt(0) === `#`) {
        if (e16.length < 6 && (i4 = e16.charAt(1), a4 = e16.charAt(2), o4 = e16.charAt(3), e16 = `#` + i4 + i4 + a4 + a4 + o4 + o4 + (e16.length === 5 ? e16.charAt(4) + e16.charAt(4) : ``)), e16.length === 9)
          return r5 = parseInt(e16.substr(1, 6), 16), [r5 >> 16, r5 >> 8 & K, r5 & K, parseInt(e16.substr(7), 16) / 255];
        e16 = parseInt(e16.substr(1), 16), r5 = [e16 >> 16, e16 >> 8 & K, e16 & K];
      } else if (e16.substr(0, 3) === `hsl`) {
        if (r5 = p3 = e16.match(D), !t3)
          s4 = r5[0] % 360 / 360, c4 = r5[1] / 100, l4 = r5[2] / 100, a4 = l4 <= 0.5 ? l4 * (c4 + 1) : l4 + c4 - l4 * c4, i4 = l4 * 2 - a4, r5.length > 3 && (r5[3] *= 1), r5[0] = Nt(s4 + 1 / 3, i4, a4), r5[1] = Nt(s4, i4, a4), r5[2] = Nt(s4 - 1 / 3, i4, a4);
        else if (~e16.indexOf(`=`))
          return r5 = e16.match(O), n4 && r5.length < 4 && (r5[3] = 1), r5;
      } else
        r5 = e16.match(D) || Mt.transparent;
      r5 = r5.map(Number);
    }
    return t3 && !p3 && (i4 = r5[0] / K, a4 = r5[1] / K, o4 = r5[2] / K, u4 = Math.max(i4, a4, o4), d3 = Math.min(i4, a4, o4), l4 = (u4 + d3) / 2, u4 === d3 ? s4 = c4 = 0 : (f3 = u4 - d3, c4 = l4 > 0.5 ? f3 / (2 - u4 - d3) : f3 / (u4 + d3), s4 = u4 === i4 ? (a4 - o4) / f3 + (a4 < o4 ? 6 : 0) : u4 === a4 ? (o4 - i4) / f3 + 2 : (i4 - a4) / f3 + 4, s4 *= 60), r5[0] = ~~(s4 + 0.5), r5[1] = ~~(c4 * 100 + 0.5), r5[2] = ~~(l4 * 100 + 0.5)), n4 && r5.length < 4 && (r5[3] = 1), r5;
  };
  var Ft = function(e16) {
    var t3 = [], n4 = [], r5 = -1;
    return e16.split(Lt).forEach(function(e17) {
      var i4 = e17.match(k) || [];
      t3.push.apply(t3, i4), n4.push(r5 += i4.length + 1);
    }), t3.c = n4, t3;
  };
  var It = function(e16, t3, n4) {
    var r5 = ``, i4 = (e16 + r5).match(Lt), a4 = t3 ? `hsla(` : `rgba(`, o4 = 0, s4, c4, l4, u4;
    if (!i4)
      return e16;
    if (i4 = i4.map(function(e17) {
      return (e17 = Pt(e17, t3, 1)) && a4 + (t3 ? e17[0] + `,` + e17[1] + `%,` + e17[2] + `%,` + e17[3] : e17.join(`,`)) + `)`;
    }), n4 && (l4 = Ft(e16), s4 = n4.c, s4.join(r5) !== l4.c.join(r5)))
      for (c4 = e16.replace(Lt, `1`).split(k), u4 = c4.length - 1; o4 < u4; o4++)
        r5 += c4[o4] + (~s4.indexOf(o4) ? i4.shift() || a4 + `0,0,0,0)` : (l4.length ? l4 : i4.length ? i4 : n4).shift());
    if (!c4)
      for (c4 = e16.split(Lt), u4 = c4.length - 1; o4 < u4; o4++)
        r5 += c4[o4] + i4[o4];
    return r5 + c4[u4];
  };
  var Lt = function() {
    var e16 = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`, t3;
    for (t3 in Mt)
      e16 += `|` + t3 + `\\b`;
    return RegExp(e16 + `)`, `gi`);
  }();
  var Rt = /hsl[a]?\(/;
  var zt = function(e16) {
    var t3 = e16.join(` `), n4;
    if (Lt.lastIndex = 0, Lt.test(t3))
      return n4 = Rt.test(t3), e16[1] = It(e16[1], n4), e16[0] = It(e16[0], n4, Ft(e16[1])), true;
  };
  var Bt;
  var Vt = function() {
    var e16 = Date.now, t3 = 500, n4 = 33, r5 = e16(), i4 = r5, a4 = 1e3 / 240, o4 = a4, s4 = [], c4, l4, u4, d3, f3, p3, m3 = function u5(m4) {
      var h2 = e16() - i4, g3 = m4 === true, _3, v3, y3, b2;
      if ((h2 > t3 || h2 < 0) && (r5 += h2 - n4), i4 += h2, y3 = i4 - r5, _3 = y3 - o4, (_3 > 0 || g3) && (b2 = ++d3.frame, f3 = y3 - d3.time * 1e3, d3.time = y3 /= 1e3, o4 += _3 + (_3 >= a4 ? 4 : a4 - _3), v3 = 1), g3 || (c4 = l4(u5)), v3)
        for (p3 = 0; p3 < s4.length; p3++)
          s4[p3](y3, f3, b2, m4);
    };
    return d3 = { time: 0, frame: 0, tick: function() {
      m3(true);
    }, deltaRatio: function(e17) {
      return f3 / (1e3 / (e17 || 60));
    }, wake: function() {
      B && (!I && x() && (F = I = window, L = F.document || {}, R.gsap = Z, (F.gsapVersions ||= []).push(Z.version), ee(z || F.GreenSockGlobals || !F.gsap && F || {}), At.forEach(jt)), u4 = typeof requestAnimationFrame < `u` && requestAnimationFrame, c4 && d3.sleep(), l4 = u4 || function(e17) {
        return setTimeout(e17, o4 - d3.time * 1e3 + 1 | 0);
      }, Bt = 1, m3(2));
    }, sleep: function() {
      (u4 ? cancelAnimationFrame : clearTimeout)(c4), Bt = 0, l4 = ie;
    }, lagSmoothing: function(e17, r6) {
      t3 = e17 || 1 / 0, n4 = Math.min(r6 || 33, t3);
    }, fps: function(e17) {
      a4 = 1e3 / (e17 || 240), o4 = d3.time * 1e3 + a4;
    }, add: function(e17, t4, n5) {
      var r6 = t4 ? function(t5, n6, i5, a5) {
        e17(t5, n6, i5, a5), d3.remove(r6);
      } : e17;
      return d3.remove(e17), s4[n5 ? `unshift` : `push`](r6), Ht(), r6;
    }, remove: function(e17, t4) {
      ~(t4 = s4.indexOf(e17)) && s4.splice(t4, 1) && p3 >= t4 && p3--;
    }, _listeners: s4 }, d3;
  }();
  var Ht = function() {
    return !Bt && Vt.wake();
  };
  var q = {};
  var Ut = /^[\d.\-M][\d.\-,\s]/;
  var Wt = /["']/g;
  var Gt = function(e16) {
    for (var t3 = {}, n4 = e16.substr(1, e16.length - 3).split(`:`), r5 = n4[0], i4 = 1, a4 = n4.length, o4, s4, c4; i4 < a4; i4++)
      s4 = n4[i4], o4 = i4 === a4 - 1 ? s4.length : s4.lastIndexOf(`,`), c4 = s4.substr(0, o4), t3[r5] = isNaN(c4) ? c4.replace(Wt, ``).trim() : +c4, r5 = s4.substr(o4 + 1).trim();
    return t3;
  };
  var Kt = function(e16) {
    var t3 = e16.indexOf(`(`) + 1, n4 = e16.indexOf(`)`), r5 = e16.indexOf(`(`, t3);
    return e16.substring(t3, ~r5 && r5 < n4 ? e16.indexOf(`)`, n4 + 1) : n4);
  };
  var qt = function(e16) {
    var t3 = (e16 + ``).split(`(`), n4 = q[t3[0]];
    return n4 && t3.length > 1 && n4.config ? n4.config.apply(null, ~e16.indexOf(`{`) ? [Gt(t3[1])] : Kt(e16).split(`,`).map(we)) : q._CE && Ut.test(e16) ? q._CE(``, e16) : n4;
  };
  var Jt = function(e16) {
    return function(t3) {
      return 1 - e16(1 - t3);
    };
  };
  var Yt = function(e16, t3) {
    return e16 && (g2(e16) ? e16 : q[e16] || qt(e16)) || t3;
  };
  var Xt = function(e16, t3, n4, r5) {
    n4 === void 0 && (n4 = function(e17) {
      return 1 - t3(1 - e17);
    }), r5 === void 0 && (r5 = function(e17) {
      return e17 < 0.5 ? t3(e17 * 2) / 2 : 1 - t3((1 - e17) * 2) / 2;
    });
    var i4 = { easeIn: t3, easeOut: n4, easeInOut: r5 }, a4;
    return H(e16, function(e17) {
      for (var t4 in q[e17] = R[e17] = i4, q[a4 = e17.toLowerCase()] = n4, i4)
        q[a4 + (t4 === `easeIn` ? `.in` : t4 === `easeOut` ? `.out` : `.inOut`)] = q[e17 + `.` + t4] = i4[t4];
    }), i4;
  };
  var Zt = function(e16) {
    return function(t3) {
      return t3 < 0.5 ? (1 - e16(1 - t3 * 2)) / 2 : 0.5 + e16((t3 - 0.5) * 2) / 2;
    };
  };
  var Qt = function e10(t3, n4, r5) {
    var i4 = n4 >= 1 ? n4 : 1, a4 = (r5 || (t3 ? 0.3 : 0.45)) / (n4 < 1 ? n4 : 1), o4 = a4 / l2 * (Math.asin(1 / i4) || 0), s4 = function(e16) {
      return e16 === 1 ? 1 : i4 * 2 ** (-10 * e16) * m2((e16 - o4) * a4) + 1;
    }, c4 = t3 === `out` ? s4 : t3 === `in` ? function(e16) {
      return 1 - s4(1 - e16);
    } : Zt(s4);
    return a4 = l2 / a4, c4.config = function(n5, r6) {
      return e10(t3, n5, r6);
    }, c4;
  };
  var $t = function e11(t3, n4) {
    n4 === void 0 && (n4 = 1.70158);
    var r5 = function(e16) {
      return e16 ? --e16 * e16 * ((n4 + 1) * e16 + n4) + 1 : 0;
    }, i4 = t3 === `out` ? r5 : t3 === `in` ? function(e16) {
      return 1 - r5(1 - e16);
    } : Zt(r5);
    return i4.config = function(n5) {
      return e11(t3, n5);
    }, i4;
  };
  H(`Linear,Quad,Cubic,Quart,Quint,Strong`, function(e16, t3) {
    var n4 = t3 < 5 ? t3 + 1 : t3;
    Xt(e16 + `,Power` + (n4 - 1), t3 ? function(e17) {
      return e17 ** +n4;
    } : function(e17) {
      return e17;
    }, function(e17) {
      return 1 - (1 - e17) ** n4;
    }, function(e17) {
      return e17 < 0.5 ? (e17 * 2) ** n4 / 2 : 1 - ((1 - e17) * 2) ** n4 / 2;
    });
  }), q.Linear.easeNone = q.none = q.Linear.easeIn, Xt(`Elastic`, Qt(`in`), Qt(`out`), Qt()), function(e16, t3) {
    var n4 = 1 / t3, r5 = 2 * n4, i4 = 2.5 * n4, a4 = function(a5) {
      return a5 < n4 ? e16 * a5 * a5 : a5 < r5 ? e16 * (a5 - 1.5 / t3) ** 2 + 0.75 : a5 < i4 ? e16 * (a5 -= 2.25 / t3) * a5 + 0.9375 : e16 * (a5 - 2.625 / t3) ** 2 + 0.984375;
    };
    Xt(`Bounce`, function(e17) {
      return 1 - a4(1 - e17);
    }, a4);
  }(7.5625, 2.75), Xt(`Expo`, function(e16) {
    return 2 ** (10 * (e16 - 1)) * e16 + e16 * e16 * e16 * e16 * e16 * e16 * (1 - e16);
  }), Xt(`Circ`, function(e16) {
    return -(f2(1 - e16 * e16) - 1);
  }), Xt(`Sine`, function(e16) {
    return e16 === 1 ? 1 : -p2(e16 * u2) + 1;
  }), Xt(`Back`, $t(`in`), $t(`out`), $t()), q.SteppedEase = q.steps = R.SteppedEase = { config: function(e16, t3) {
    e16 === void 0 && (e16 = 1);
    var n4 = 1 / e16, r5 = e16 + +!t3, i4 = +!!t3, a4 = 1 - c2;
    return function(e17) {
      return ((r5 * at(0, a4, e17) | 0) + i4) * n4;
    };
  } }, r3.ease = q[`quad.out`], H(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function(e16) {
    return he += e16 + `,` + e16 + `Params,`;
  });
  var en = function(e16, t3) {
    this.id = d2++, e16._gsap = this, this.target = e16, this.harness = t3, this.get = t3 ? t3.get : ve, this.set = t3 ? t3.getSetter : bn;
  };
  var tn = function() {
    function e16(e17) {
      this.vars = e17, this._delay = +e17.delay || 0, (this._repeat = e17.repeat === 1 / 0 ? -2 : e17.repeat || 0) && (this._rDelay = e17.repeatDelay || 0, this._yoyo = !!e17.yoyo || !!e17.yoyoEase), this._ts = 1, $e(this, +e17.duration, 1, 1), this.data = e17.data, o2 && (this._ctx = o2, o2.data.push(this)), Bt || Vt.wake();
    }
    var t3 = e16.prototype;
    return t3.delay = function(e17) {
      return e17 || e17 === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e17 - this._delay), this._delay = e17, this) : this._delay;
    }, t3.duration = function(e17) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? e17 + (e17 + this._rDelay) * this._repeat : e17) : this.totalDuration() && this._dur;
    }, t3.totalDuration = function(e17) {
      return arguments.length ? (this._dirty = 0, $e(this, this._repeat < 0 ? e17 : (e17 - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, t3.totalTime = function(e17, t4) {
      if (Ht(), !arguments.length)
        return this._tTime;
      var n4 = this._dp;
      if (n4 && n4.smoothChildTiming && this._ts) {
        for (We(this, e17), !n4._dp || n4.parent || Ge(n4, this); n4 && n4.parent; )
          n4.parent._time !== n4._start + (n4._ts >= 0 ? n4._tTime / n4._ts : (n4.totalDuration() - n4._tTime) / -n4._ts) && n4.totalTime(n4._tTime, true), n4 = n4.parent;
        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e17 < this._tDur || this._ts < 0 && e17 > 0 || !this._tDur && !e17) && Ke(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== e17 || !this._dur && !t4 || this._initted && Math.abs(this._zTime) === c2 || !this._initted && this._dur && e17 || !e17 && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e17), Ce(this, e17, t4)), this;
    }, t3.time = function(e17, t4) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e17 + Be(this)) % (this._dur + this._rDelay) || (e17 ? this._dur : 0), t4) : this._time;
    }, t3.totalProgress = function(e17, t4) {
      return arguments.length ? this.totalTime(this.totalDuration() * e17, t4) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
    }, t3.progress = function(e17, t4) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e17 : e17) + Be(this), t4) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0);
    }, t3.iteration = function(e17, t4) {
      var n4 = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (e17 - 1) * n4, t4) : this._repeat ? Ve(this._tTime, n4) + 1 : 1;
    }, t3.timeScale = function(e17, t4) {
      if (!arguments.length)
        return this._rts === -c2 ? 0 : this._rts;
      if (this._rts === e17)
        return this;
      var n4 = this.parent && this._ts ? He(this.parent._time, this) : this._tTime;
      return this._rts = +e17 || 0, this._ts = this._ps || e17 === -c2 ? 0 : this._rts, this.totalTime(at(-Math.abs(this._delay), this.totalDuration(), n4), t4 !== false), Ue(this), Le(this);
    }, t3.paused = function(e17) {
      return arguments.length ? (this._ps !== e17 && (this._ps = e17, e17 ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ht(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== c2 && (this._tTime -= c2)))), this) : this._ps;
    }, t3.startTime = function(e17) {
      if (arguments.length) {
        this._start = W(e17);
        var t4 = this.parent || this._dp;
        return t4 && (t4._sort || !this.parent) && Ke(t4, this, this._start - this._delay), this;
      }
      return this._start;
    }, t3.endTime = function(e17) {
      return this._start + (b(e17) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, t3.rawTime = function(e17) {
      var t4 = this.parent || this._dp;
      return t4 ? e17 && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? He(t4.rawTime(e17), this) : this._tTime : this._tTime;
    }, t3.revert = function(e17) {
      e17 === void 0 && (e17 = se);
      var t4 = a2;
      return a2 = e17, Se(this) && (this.timeline && this.timeline.revert(e17), this.totalTime(-0.01, e17.suppressEvents)), this.data !== `nested` && e17.kill !== false && this.kill(), a2 = t4, this;
    }, t3.globalTime = function(e17) {
      for (var t4 = this, n4 = arguments.length ? e17 : t4.rawTime(); t4; )
        n4 = t4._start + n4 / (Math.abs(t4._ts) || 1), t4 = t4._dp;
      return !this.parent && this._sat ? this._sat.globalTime(e17) : n4;
    }, t3.repeat = function(e17) {
      return arguments.length ? (this._repeat = e17 === 1 / 0 ? -2 : e17, et(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
    }, t3.repeatDelay = function(e17) {
      if (arguments.length) {
        var t4 = this._time;
        return this._rDelay = e17, et(this), t4 ? this.time(t4) : this;
      }
      return this._rDelay;
    }, t3.yoyo = function(e17) {
      return arguments.length ? (this._yoyo = e17, this) : this._yoyo;
    }, t3.seek = function(e17, t4) {
      return this.totalTime(nt(this, e17), b(t4));
    }, t3.restart = function(e17, t4) {
      return this.play().totalTime(e17 ? -this._delay : 0, b(t4)), this._dur || (this._zTime = -c2), this;
    }, t3.play = function(e17, t4) {
      return e17 != null && this.seek(e17, t4), this.reversed(false).paused(false);
    }, t3.reverse = function(e17, t4) {
      return e17 != null && this.seek(e17 || this.totalDuration(), t4), this.reversed(true).paused(false);
    }, t3.pause = function(e17, t4) {
      return e17 != null && this.seek(e17, t4), this.paused(true);
    }, t3.resume = function() {
      return this.paused(false);
    }, t3.reversed = function(e17) {
      return arguments.length ? (!!e17 !== this.reversed() && this.timeScale(-this._rts || (e17 ? -c2 : 0)), this) : this._rts < 0;
    }, t3.invalidate = function() {
      return this._initted = this._act = 0, this._zTime = -c2, this;
    }, t3.isActive = function() {
      var e17 = this.parent || this._dp, t4 = this._start, n4;
      return !!(!e17 || this._ts && this._initted && e17.isActive() && (n4 = e17.rawTime(true)) >= t4 && n4 < this.endTime(true) - c2);
    }, t3.eventCallback = function(e17, t4, n4) {
      var r5 = this.vars;
      return arguments.length > 1 ? (t4 ? (r5[e17] = t4, n4 && (r5[e17 + `Params`] = n4), e17 === `onUpdate` && (this._onUpdate = t4)) : delete r5[e17], this) : r5[e17];
    }, t3.then = function(e17) {
      var t4 = this, n4 = t4._prom;
      return new Promise(function(r5) {
        var i4 = g2(e17) ? e17 : Te, a4 = function() {
          var e18 = t4.then;
          t4.then = null, n4 && n4(), g2(i4) && (i4 = i4(t4)) && (i4.then || i4 === t4) && (t4.then = e18), r5(i4), t4.then = e18;
        };
        t4._initted && t4.totalProgress() === 1 && t4._ts >= 0 || !t4._tTime && t4._ts < 0 ? a4() : t4._prom = a4;
      });
    }, t3.kill = function() {
      Ot(this);
    }, e16;
  }();
  Ee(tn.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -c2, _prom: 0, _ps: false, _rts: 1 });
  var J = function(r5) {
    t2(i4, r5);
    function i4(t3, n4) {
      var i5;
      return t3 === void 0 && (t3 = {}), i5 = r5.call(this, t3) || this, i5.labels = {}, i5.smoothChildTiming = !!t3.smoothChildTiming, i5.autoRemoveChildren = !!t3.autoRemoveChildren, i5._sort = b(t3.sortChildren), P && Ke(t3.parent || P, e2(i5), n4), t3.reversed && i5.reverse(), t3.paused && i5.paused(true), t3.scrollTrigger && qe(e2(i5), t3.scrollTrigger), i5;
    }
    var o4 = i4.prototype;
    return o4.to = function(e16, t3, n4) {
      return rt(0, arguments, this), this;
    }, o4.from = function(e16, t3, n4) {
      return rt(1, arguments, this), this;
    }, o4.fromTo = function(e16, t3, n4, r6) {
      return rt(2, arguments, this), this;
    }, o4.set = function(e16, t3, n4) {
      return t3.duration = 0, t3.parent = this, je(t3).repeatDelay || (t3.repeat = 0), t3.immediateRender = !!t3.immediateRender, new Y(e16, t3, nt(this, n4), 1), this;
    }, o4.call = function(e16, t3, n4) {
      return Ke(this, Y.delayedCall(0, e16, t3), n4);
    }, o4.staggerTo = function(e16, t3, n4, r6, i5, a4, o5) {
      return n4.duration = t3, n4.stagger = n4.stagger || r6, n4.onComplete = a4, n4.onCompleteParams = o5, n4.parent = this, new Y(e16, n4, nt(this, i5)), this;
    }, o4.staggerFrom = function(e16, t3, n4, r6, i5, a4, o5) {
      return n4.runBackwards = 1, je(n4).immediateRender = b(n4.immediateRender), this.staggerTo(e16, t3, n4, r6, i5, a4, o5);
    }, o4.staggerFromTo = function(e16, t3, n4, r6, i5, a4, o5, s4) {
      return r6.startAt = n4, je(r6).immediateRender = b(r6.immediateRender), this.staggerTo(e16, t3, r6, i5, a4, o5, s4);
    }, o4.render = function(e16, t3, n4) {
      var r6 = this._time, i5 = this._dirty ? this.totalDuration() : this._tDur, o5 = this._dur, s4 = e16 <= 0 ? 0 : W(e16), l4 = this._zTime < 0 != e16 < 0 && (this._initted || !o5), u4, d3, f3, p3, m3, h2, g3, _3, v3, y3, b2, x2;
      if (this !== P && s4 > i5 && e16 >= 0 && (s4 = i5), s4 !== this._tTime || n4 || l4) {
        if (r6 !== this._time && o5 && (s4 += this._time - r6, e16 += this._time - r6), u4 = s4, v3 = this._start, _3 = this._ts, h2 = !_3, l4 && (o5 || (r6 = this._zTime), (e16 || !t3) && (this._zTime = e16)), this._repeat) {
          if (b2 = this._yoyo, m3 = o5 + this._rDelay, this._repeat < -1 && e16 < 0)
            return this.totalTime(m3 * 100 + e16, t3, n4);
          if (u4 = W(s4 % m3), s4 === i5 ? (p3 = this._repeat, u4 = o5) : (y3 = W(s4 / m3), p3 = ~~y3, p3 && p3 === y3 && (u4 = o5, p3--), u4 > o5 && (u4 = o5)), y3 = Ve(this._tTime, m3), !r6 && this._tTime && y3 !== p3 && this._tTime - y3 * m3 - this._dur <= 0 && (y3 = p3), b2 && p3 & 1 && (u4 = o5 - u4, x2 = 1), p3 !== y3 && !this._lock) {
            var S2 = b2 && y3 & 1, C2 = S2 === (b2 && p3 & 1);
            if (p3 < y3 && (S2 = !S2), r6 = S2 ? 0 : s4 % o5 ? o5 : s4, this._lock = 1, this.render(r6 || (x2 ? 0 : W(p3 * m3)), t3, !o5)._lock = 0, this._tTime = s4, !t3 && this.parent && Dt(this, `onRepeat`), this.vars.repeatRefresh && !x2 && (this.invalidate()._lock = 1, y3 = p3), r6 && r6 !== this._time || h2 !== !this._ts || this.vars.onRepeat && !this.parent && !this._act || (o5 = this._dur, i5 = this._tDur, C2 && (this._lock = 2, r6 = S2 ? o5 : -1e-4, this.render(r6, true), this.vars.repeatRefresh && !x2 && this.invalidate()), this._lock = 0, !this._ts && !h2))
              return this;
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (g3 = Qe(this, W(r6), W(u4)), g3 && (s4 -= u4 - (u4 = g3._start))), this._tTime = s4, this._time = u4, this._act = !!_3, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e16, r6 = 0), !r6 && s4 && o5 && !t3 && !y3 && (Dt(this, `onStart`), this._tTime !== s4))
          return this;
        if (u4 >= r6 && e16 >= 0)
          for (d3 = this._first; d3; ) {
            if (f3 = d3._next, (d3._act || u4 >= d3._start) && d3._ts && g3 !== d3) {
              if (d3.parent !== this)
                return this.render(e16, t3, n4);
              if (d3.render(d3._ts > 0 ? (u4 - d3._start) * d3._ts : (d3._dirty ? d3.totalDuration() : d3._tDur) + (u4 - d3._start) * d3._ts, t3, n4), u4 !== this._time || !this._ts && !h2) {
                g3 = 0, f3 && (s4 += this._zTime = -c2);
                break;
              }
            }
            d3 = f3;
          }
        else {
          d3 = this._last;
          for (var w2 = e16 < 0 ? e16 : u4; d3; ) {
            if (f3 = d3._prev, (d3._act || w2 <= d3._end) && d3._ts && g3 !== d3) {
              if (d3.parent !== this)
                return this.render(e16, t3, n4);
              if (d3.render(d3._ts > 0 ? (w2 - d3._start) * d3._ts : (d3._dirty ? d3.totalDuration() : d3._tDur) + (w2 - d3._start) * d3._ts, t3, n4 || a2 && Se(d3)), u4 !== this._time || !this._ts && !h2) {
                g3 = 0, f3 && (s4 += this._zTime = w2 ? -c2 : c2);
                break;
              }
            }
            d3 = f3;
          }
        }
        if (g3 && !t3 && (this.pause(), g3.render(u4 >= r6 ? 0 : -c2)._zTime = u4 >= r6 ? 1 : -1, this._ts))
          return this._start = v3, Ue(this), this.render(e16, t3, n4);
        this._onUpdate && !t3 && Dt(this, `onUpdate`, true), (s4 === i5 && this._tTime >= this.totalDuration() || !s4 && r6) && (v3 === this._start || Math.abs(_3) !== Math.abs(this._ts)) && (this._lock || ((e16 || !o5) && (s4 === i5 && this._ts > 0 || !s4 && this._ts < 0) && Fe(this, 1), !t3 && !(e16 < 0 && !r6) && (s4 || r6 || !i5) && (Dt(this, s4 === i5 && e16 >= 0 ? `onComplete` : `onReverseComplete`, true), this._prom && !(s4 < i5 && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }, o4.add = function(e16, t3) {
      var n4 = this;
      if (_2(t3) || (t3 = nt(this, t3, e16)), !(e16 instanceof tn)) {
        if (w(e16))
          return e16.forEach(function(e17) {
            return n4.add(e17, t3);
          }), this;
        if (h(e16))
          return this.addLabel(e16, t3);
        if (g2(e16))
          e16 = Y.delayedCall(0, e16);
        else
          return this;
      }
      return this === e16 ? this : Ke(this, e16, t3);
    }, o4.getChildren = function(e16, t3, n4, r6) {
      e16 === void 0 && (e16 = true), t3 === void 0 && (t3 = true), n4 === void 0 && (n4 = true), r6 === void 0 && (r6 = -s2);
      for (var i5 = [], a4 = this._first; a4; )
        a4._start >= r6 && (a4 instanceof Y ? t3 && i5.push(a4) : (n4 && i5.push(a4), e16 && i5.push.apply(i5, a4.getChildren(true, t3, n4)))), a4 = a4._next;
      return i5;
    }, o4.getById = function(e16) {
      for (var t3 = this.getChildren(1, 1, 1), n4 = t3.length; n4--; )
        if (t3[n4].vars.id === e16)
          return t3[n4];
    }, o4.remove = function(e16) {
      return h(e16) ? this.removeLabel(e16) : g2(e16) ? this.killTweensOf(e16) : (e16.parent === this && Pe(this, e16), e16 === this._recent && (this._recent = this._last), Ie(this));
    }, o4.totalTime = function(e16, t3) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = W(Vt.time - (this._ts > 0 ? e16 / this._ts : (this.totalDuration() - e16) / -this._ts))), r5.prototype.totalTime.call(this, e16, t3), this._forcing = 0, this) : this._tTime;
    }, o4.addLabel = function(e16, t3) {
      return this.labels[e16] = nt(this, t3), this;
    }, o4.removeLabel = function(e16) {
      return delete this.labels[e16], this;
    }, o4.addPause = function(e16, t3, n4) {
      var r6 = Y.delayedCall(0, t3 || ie, n4);
      return r6.data = `isPause`, this._hasPause = 1, Ke(this, r6, nt(this, e16));
    }, o4.removePause = function(e16) {
      var t3 = this._first;
      for (e16 = nt(this, e16); t3; )
        t3._start === e16 && t3.data === `isPause` && Fe(t3), t3 = t3._next;
    }, o4.killTweensOf = function(e16, t3, n4) {
      for (var r6 = this.getTweensOf(e16, n4), i5 = r6.length; i5--; )
        sn !== r6[i5] && r6[i5].kill(e16, t3);
      return this;
    }, o4.getTweensOf = function(e16, t3) {
      for (var n4 = [], r6 = ut(e16), i5 = this._first, a4 = _2(t3), o5; i5; )
        i5 instanceof Y ? be(i5._targets, r6) && (a4 ? (!sn || i5._initted && i5._ts) && i5.globalTime(0) <= t3 && i5.globalTime(i5.totalDuration()) > t3 : !t3 || i5.isActive()) && n4.push(i5) : (o5 = i5.getTweensOf(r6, t3)).length && n4.push.apply(n4, o5), i5 = i5._next;
      return n4;
    }, o4.tweenTo = function(e16, t3) {
      t3 ||= {};
      var n4 = this, r6 = nt(n4, e16), i5 = t3, a4 = i5.startAt, o5 = i5.onStart, s4 = i5.onStartParams, l4 = i5.immediateRender, u4, d3 = Y.to(n4, Ee({ ease: t3.ease || `none`, lazy: false, immediateRender: false, time: r6, overwrite: `auto`, duration: t3.duration || Math.abs((r6 - (a4 && `time` in a4 ? a4.time : n4._time)) / n4.timeScale()) || c2, onStart: function() {
        if (n4.pause(), !u4) {
          var e17 = t3.duration || Math.abs((r6 - (a4 && `time` in a4 ? a4.time : n4._time)) / n4.timeScale());
          d3._dur !== e17 && $e(d3, e17, 0, 1).render(d3._time, true, true), u4 = 1;
        }
        o5 && o5.apply(d3, s4 || []);
      } }, t3));
      return l4 ? d3.render(0) : d3;
    }, o4.tweenFromTo = function(e16, t3, n4) {
      return this.tweenTo(t3, Ee({ startAt: { time: nt(this, e16) } }, n4));
    }, o4.recent = function() {
      return this._recent;
    }, o4.nextLabel = function(e16) {
      return e16 === void 0 && (e16 = this._time), Et(this, nt(this, e16));
    }, o4.previousLabel = function(e16) {
      return e16 === void 0 && (e16 = this._time), Et(this, nt(this, e16), 1);
    }, o4.currentLabel = function(e16) {
      return arguments.length ? this.seek(e16, true) : this.previousLabel(this._time + c2);
    }, o4.shiftChildren = function(e16, t3, n4) {
      n4 === void 0 && (n4 = 0);
      var r6 = this._first, i5 = this.labels, a4;
      for (e16 = W(e16); r6; )
        r6._start >= n4 && (r6._start += e16, r6._end += e16), r6 = r6._next;
      if (t3)
        for (a4 in i5)
          i5[a4] >= n4 && (i5[a4] += e16);
      return Ie(this);
    }, o4.invalidate = function(e16) {
      var t3 = this._first;
      for (this._lock = 0; t3; )
        t3.invalidate(e16), t3 = t3._next;
      return r5.prototype.invalidate.call(this, e16);
    }, o4.clear = function(e16) {
      e16 === void 0 && (e16 = true);
      for (var t3 = this._first, n4; t3; )
        n4 = t3._next, this.remove(t3), t3 = n4;
      return this._dp && (this._time = this._tTime = this._pTime = 0), e16 && (this.labels = {}), Ie(this);
    }, o4.totalDuration = function(e16) {
      var t3 = 0, n4 = this, r6 = n4._last, i5 = s2, a4, o5, c4;
      if (arguments.length)
        return n4.timeScale((n4._repeat < 0 ? n4.duration() : n4.totalDuration()) / (n4.reversed() ? -e16 : e16));
      if (n4._dirty) {
        for (c4 = n4.parent; r6; )
          a4 = r6._prev, r6._dirty && r6.totalDuration(), o5 = r6._start, o5 > i5 && n4._sort && r6._ts && !n4._lock ? (n4._lock = 1, Ke(n4, r6, o5 - r6._delay, 1)._lock = 0) : i5 = o5, o5 < 0 && r6._ts && (t3 -= o5, (!c4 && !n4._dp || c4 && c4.smoothChildTiming) && (n4._start += W(o5 / n4._ts), n4._time -= o5, n4._tTime -= o5), n4.shiftChildren(-o5, false, -1 / 0), i5 = 0), r6._end > t3 && r6._ts && (t3 = r6._end), r6 = a4;
        $e(n4, n4 === P && n4._time > t3 ? n4._time : t3, 1, 1), n4._dirty = 0;
      }
      return n4._tDur;
    }, i4.updateRoot = function(e16) {
      if (P._ts && (Ce(P, He(e16, P)), de = Vt.frame), Vt.frame >= pe) {
        pe += n2.autoSleep || 120;
        var t3 = P._first;
        if ((!t3 || !t3._ts) && n2.autoSleep && Vt._listeners.length < 2) {
          for (; t3 && !t3._ts; )
            t3 = t3._next;
          t3 || Vt.sleep();
        }
      }
    }, i4;
  }(tn);
  Ee(J.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var nn = function(e16, t3, n4, r5, i4, a4, o4) {
    var s4 = new X(this._pt, e16, t3, 0, 1, Cn, null, i4), c4 = 0, l4 = 0, u4, d3, f3, p3, m3, h2, g3, _3;
    for (s4.b = n4, s4.e = r5, n4 += ``, r5 += ``, (g3 = ~r5.indexOf(`random(`)) && (r5 = Ct(r5)), a4 && (_3 = [n4, r5], a4(_3, e16, t3), n4 = _3[0], r5 = _3[1]), d3 = n4.match(A) || []; u4 = A.exec(r5); )
      p3 = u4[0], m3 = r5.substring(c4, u4.index), f3 ? f3 = (f3 + 1) % 5 : m3.substr(-5) === `rgba(` && (f3 = 1), p3 !== d3[l4++] && (h2 = parseFloat(d3[l4 - 1]) || 0, s4._pt = { _next: s4._pt, p: m3 || l4 === 1 ? m3 : `,`, s: h2, c: p3.charAt(1) === `=` ? ye(h2, p3) - h2 : parseFloat(p3) - h2, m: f3 && f3 < 4 ? Math.round : 0 }, c4 = A.lastIndex);
    return s4.c = c4 < r5.length ? r5.substring(c4, r5.length) : ``, s4.fp = o4, (j2.test(r5) || g3) && (s4.e = 0), this._pt = s4, s4;
  };
  var rn = function(e16, t3, r5, i4, a4, o4, s4, c4, l4, u4) {
    g2(i4) && (i4 = i4(a4 || 0, e16, o4));
    var d3 = e16[t3], f3 = r5 === `get` ? g2(d3) ? l4 ? e16[t3.indexOf(`set`) || !g2(e16[`get` + t3.substr(3)]) ? t3 : `get` + t3.substr(3)](l4) : e16[t3]() : d3 : r5, p3 = g2(d3) ? l4 ? vn : _n : gn, m3;
    if (h(i4) && (~i4.indexOf(`random(`) && (i4 = Ct(i4)), i4.charAt(1) === `=` && (m3 = ye(f3, i4) + (G(f3) || 0), (m3 || m3 === 0) && (i4 = m3))), !u4 || f3 !== i4 || cn)
      return !isNaN(f3 * i4) && i4 !== `` ? (m3 = new X(this._pt, e16, t3, +f3 || 0, i4 - (f3 || 0), typeof d3 == `boolean` ? Sn : xn, 0, p3), l4 && (m3.fp = l4), s4 && m3.modifier(s4, this, e16), this._pt = m3) : (!d3 && !(t3 in e16) && te(t3, i4), nn.call(this, e16, t3, f3, i4, p3, c4 || n2.stringFilter, l4));
  };
  var an = function(e16, t3, n4, r5, i4) {
    if (g2(e16) && (e16 = pn(e16, i4, t3, n4, r5)), !y2(e16) || e16.style && e16.nodeType || w(e16) || C(e16))
      return h(e16) ? pn(e16, i4, t3, n4, r5) : e16;
    var a4 = {}, o4;
    for (o4 in e16)
      a4[o4] = pn(e16[o4], i4, t3, n4, r5);
    return a4;
  };
  var on = function(e16, t3, n4, r5, i4, a4) {
    var o4, s4, c4, l4;
    if (V[e16] && (o4 = new V[e16]()).init(i4, o4.rawVars ? t3[e16] : an(t3[e16], r5, i4, a4, n4), n4, r5, a4) !== false && (n4._pt = s4 = new X(n4._pt, i4, e16, 0, 1, o4.render, o4, 0, o4.priority), n4 !== kt))
      for (c4 = n4._ptLookup[n4._targets.indexOf(i4)], l4 = o4._props.length; l4--; )
        c4[o4._props[l4]] = s4;
    return o4;
  };
  var sn;
  var cn;
  var ln = function e12(t3, n4, o4) {
    var l4 = t3.vars, u4 = l4.ease, d3 = l4.startAt, f3 = l4.immediateRender, p3 = l4.lazy, m3 = l4.onUpdate, h2 = l4.runBackwards, g3 = l4.yoyoEase, _3 = l4.keyframes, v3 = l4.autoRevert, y3 = t3._dur, x2 = t3._startAt, S2 = t3._targets, C2 = t3.parent, w2 = C2 && C2.data === `nested` ? C2.vars.targets : S2, T3 = t3._overwrite === `auto` && !i2, E2 = t3.timeline, D2 = l4.easeReverse || g3, O2, k2, A2, j3, M3, N2, F2, I2, L2, R2, z2, B2, ee2;
    if (E2 && (!_3 || !u4) && (u4 = `none`), t3._ease = Yt(u4, r3.ease), t3._rEase = D2 && (Yt(D2) || t3._ease), t3._from = !E2 && !!l4.runBackwards, t3._from && (t3.ratio = 1), !E2 || _3 && !l4.stagger) {
      if (I2 = S2[0] ? _e(S2[0]).harness : 0, B2 = I2 && l4[I2.prop], O2 = Ae(l4, ce), x2 && (x2._zTime < 0 && x2.progress(1), n4 < 0 && h2 && f3 && !v3 ? x2.render(-1, true) : x2.revert(h2 && y3 ? oe : ae), x2._lazy = 0), d3) {
        if (Fe(t3._startAt = Y.set(S2, Ee({ data: `isStart`, overwrite: false, parent: C2, immediateRender: true, lazy: !x2 && b(p3), startAt: null, delay: 0, onUpdate: m3 && function() {
          return Dt(t3, `onUpdate`);
        }, stagger: 0 }, d3))), t3._startAt._dp = 0, t3._startAt._sat = t3, n4 < 0 && (a2 || !f3 && !v3) && t3._startAt.revert(oe), f3 && y3 && n4 <= 0 && o4 <= 0) {
          n4 && (t3._zTime = n4);
          return;
        }
      } else if (h2 && y3 && !x2) {
        if (n4 && (f3 = false), A2 = Ee({ overwrite: false, data: `isFromStart`, lazy: f3 && !x2 && b(p3), immediateRender: f3, stagger: 0, parent: C2 }, O2), B2 && (A2[I2.prop] = B2), Fe(t3._startAt = Y.set(S2, A2)), t3._startAt._dp = 0, t3._startAt._sat = t3, n4 < 0 && (a2 ? t3._startAt.revert(oe) : t3._startAt.render(-1, true)), t3._zTime = n4, !f3)
          e12(t3._startAt, c2, c2);
        else if (!n4)
          return;
      }
      for (t3._pt = t3._ptCache = 0, p3 = y3 && b(p3) || p3 && !y3, k2 = 0; k2 < S2.length; k2++) {
        if (M3 = S2[k2], F2 = M3._gsap || ge(S2)[k2]._gsap, t3._ptLookup[k2] = R2 = {}, ue[F2.id] && le.length && xe(), z2 = w2 === S2 ? k2 : w2.indexOf(M3), I2 && (L2 = new I2()).init(M3, B2 || O2, t3, z2, w2) !== false && (t3._pt = j3 = new X(t3._pt, M3, L2.name, 0, 1, L2.render, L2, 0, L2.priority), L2._props.forEach(function(e16) {
          R2[e16] = j3;
        }), L2.priority && (N2 = 1)), !I2 || B2)
          for (A2 in O2)
            V[A2] && (L2 = on(A2, O2, t3, z2, M3, w2)) ? L2.priority && (N2 = 1) : R2[A2] = j3 = rn.call(t3, M3, A2, `get`, O2[A2], z2, w2, 0, l4.stringFilter);
        t3._op && t3._op[k2] && t3.kill(M3, t3._op[k2]), T3 && t3._pt && (sn = t3, P.killTweensOf(M3, R2, t3.globalTime(n4)), ee2 = !t3.parent, sn = 0), t3._pt && p3 && (ue[F2.id] = 1);
      }
      N2 && On(t3), t3._onInit && t3._onInit(t3);
    }
    t3._onUpdate = m3, t3._initted = (!t3._op || t3._pt) && !ee2, _3 && n4 <= 0 && E2.render(s2, true, true);
  };
  var un = function(e16, t3, n4, r5, i4, a4, o4, s4) {
    var c4 = (e16._pt && e16._ptCache || (e16._ptCache = {}))[t3], l4, u4, d3, f3;
    if (!c4)
      for (c4 = e16._ptCache[t3] = [], d3 = e16._ptLookup, f3 = e16._targets.length; f3--; ) {
        if (l4 = d3[f3][t3], l4 && l4.d && l4.d._pt)
          for (l4 = l4.d._pt; l4 && l4.p !== t3 && l4.fp !== t3; )
            l4 = l4._next;
        if (!l4)
          return cn = 1, e16.vars[t3] = `+=0`, ln(e16, o4), cn = 0, s4 ? ne(t3 + ` not eligible for reset. Try splitting into individual properties`) : 1;
        c4.push(l4);
      }
    for (f3 = c4.length; f3--; )
      u4 = c4[f3], l4 = u4._pt || u4, l4.s = (r5 || r5 === 0) && !i4 ? r5 : l4.s + (r5 || 0) + a4 * l4.c, l4.c = n4 - l4.s, u4.e &&= U(n4) + G(u4.e), u4.b &&= l4.s + G(u4.b);
  };
  var dn = function(e16, t3) {
    var n4 = e16[0] ? _e(e16[0]).harness : 0, r5 = n4 && n4.aliases, i4, a4, o4, s4;
    if (!r5)
      return t3;
    for (a4 in i4 = Oe({}, t3), r5)
      if (a4 in i4)
        for (s4 = r5[a4].split(`,`), o4 = s4.length; o4--; )
          i4[s4[o4]] = i4[a4];
    return i4;
  };
  var fn = function(e16, t3, n4, r5) {
    var i4 = t3.ease || r5 || `power1.inOut`, a4, o4;
    if (w(t3))
      o4 = n4[e16] || (n4[e16] = []), t3.forEach(function(e17, n5) {
        return o4.push({ t: n5 / (t3.length - 1) * 100, v: e17, e: i4 });
      });
    else
      for (a4 in t3)
        o4 = n4[a4] || (n4[a4] = []), a4 === `ease` || o4.push({ t: parseFloat(e16), v: t3[a4], e: i4 });
  };
  var pn = function(e16, t3, n4, r5, i4) {
    return g2(e16) ? e16.call(t3, n4, r5, i4) : h(e16) && ~e16.indexOf(`random(`) ? Ct(e16) : e16;
  };
  var mn = he + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`;
  var hn = {};
  H(mn + `,id,stagger,delay,duration,paused,scrollTrigger`, function(e16) {
    return hn[e16] = 1;
  });
  var Y = function(r5) {
    t2(o4, r5);
    function o4(t3, a4, o5, s5) {
      var l4;
      typeof a4 == `number` && (o5.duration = a4, a4 = o5, o5 = null), l4 = r5.call(this, s5 ? a4 : je(a4)) || this;
      var u4 = l4.vars, d3 = u4.duration, f3 = u4.delay, p3 = u4.immediateRender, m3 = u4.stagger, h2 = u4.overwrite, g3 = u4.keyframes, v3 = u4.defaults, x2 = u4.scrollTrigger, T3 = a4.parent || P, E2 = (w(t3) || C(t3) ? _2(t3[0]) : `length` in a4) ? [t3] : ut(t3), D2, O2, k2, A2, j3, M3, N2, F2;
      if (l4._targets = E2.length ? ge(E2) : ne(`GSAP target ` + t3 + ` not found. https://gsap.com`, !n2.nullTargetWarn) || [], l4._ptLookup = [], l4._overwrite = h2, g3 || m3 || S(d3) || S(f3)) {
        a4 = l4.vars;
        var I2 = a4.easeReverse || a4.yoyoEase;
        if (D2 = l4.timeline = new J({ data: `nested`, defaults: v3 || {}, targets: T3 && T3.data === `nested` ? T3.vars.targets : E2 }), D2.kill(), D2.parent = D2._dp = e2(l4), D2._start = 0, m3 || S(d3) || S(f3)) {
          if (A2 = E2.length, N2 = m3 && pt(m3), y2(m3))
            for (j3 in m3)
              ~mn.indexOf(j3) && (F2 ||= {}, F2[j3] = m3[j3]);
          for (O2 = 0; O2 < A2; O2++)
            k2 = Ae(a4, hn), k2.stagger = 0, I2 && (k2.easeReverse = I2), F2 && Oe(k2, F2), M3 = E2[O2], k2.duration = +pn(d3, e2(l4), O2, M3, E2), k2.delay = (+pn(f3, e2(l4), O2, M3, E2) || 0) - l4._delay, !m3 && A2 === 1 && k2.delay && (l4._delay = f3 = k2.delay, l4._start += f3, k2.delay = 0), D2.to(M3, k2, N2 ? N2(O2, M3, E2) : 0), D2._ease = q.none;
          D2.duration() ? d3 = f3 = 0 : l4.timeline = 0;
        } else if (g3) {
          je(Ee(D2.vars.defaults, { ease: `none` })), D2._ease = Yt(g3.ease || a4.ease || `none`);
          var L2 = 0, R2, z2, B2;
          if (w(g3))
            g3.forEach(function(e16) {
              return D2.to(E2, e16, `>`);
            }), D2.duration();
          else {
            for (j3 in k2 = {}, g3)
              j3 === `ease` || j3 === `easeEach` || fn(j3, g3[j3], k2, g3.easeEach);
            for (j3 in k2)
              for (R2 = k2[j3].sort(function(e16, t4) {
                return e16.t - t4.t;
              }), L2 = 0, O2 = 0; O2 < R2.length; O2++)
                z2 = R2[O2], B2 = { ease: z2.e, duration: (z2.t - (O2 ? R2[O2 - 1].t : 0)) / 100 * d3 }, B2[j3] = z2.v, D2.to(E2, B2, L2), L2 += B2.duration;
            D2.duration() < d3 && D2.to({}, { duration: d3 - D2.duration() });
          }
        }
        d3 || l4.duration(d3 = D2.duration());
      } else
        l4.timeline = 0;
      return h2 === true && !i2 && (sn = e2(l4), P.killTweensOf(E2), sn = 0), Ke(T3, e2(l4), o5), a4.reversed && l4.reverse(), a4.paused && l4.paused(true), (p3 || !d3 && !g3 && l4._start === W(T3._time) && b(p3) && ze(e2(l4)) && T3.data !== `nested`) && (l4._tTime = -c2, l4.render(Math.max(0, -f3) || 0)), x2 && qe(e2(l4), x2), l4;
    }
    var s4 = o4.prototype;
    return s4.render = function(e16, t3, n4) {
      var r6 = this._time, i4 = this._tDur, a4 = this._dur, o5 = e16 < 0, s5 = e16 > i4 - c2 && !o5 ? i4 : e16 < c2 ? 0 : e16, l4, u4, d3, f3, p3, m3, h2, g3;
      if (!a4)
        Ze(this, e16, t3, n4);
      else if (s5 !== this._tTime || !e16 || n4 || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== o5 || this._lazy) {
        if (l4 = s5, g3 = this.timeline, this._repeat) {
          if (f3 = a4 + this._rDelay, this._repeat < -1 && o5)
            return this.totalTime(f3 * 100 + e16, t3, n4);
          if (l4 = W(s5 % f3), s5 === i4 ? (d3 = this._repeat, l4 = a4) : (p3 = W(s5 / f3), d3 = ~~p3, d3 && d3 === p3 ? (l4 = a4, d3--) : l4 > a4 && (l4 = a4)), m3 = this._yoyo && d3 & 1, m3 && (l4 = a4 - l4), p3 = Ve(this._tTime, f3), l4 === r6 && !n4 && this._initted && d3 === p3)
            return this._tTime = s5, this;
          d3 !== p3 && this.vars.repeatRefresh && !m3 && !this._lock && l4 !== f3 && this._initted && (this._lock = n4 = 1, this.render(W(f3 * d3), true).invalidate()._lock = 0);
        }
        if (!this._initted) {
          if (Je(this, o5 ? e16 : l4, n4, t3, s5))
            return this._tTime = 0, this;
          if (r6 !== this._time && !(n4 && this.vars.repeatRefresh && d3 !== p3))
            return this;
          if (a4 !== this._dur)
            return this.render(e16, t3, n4);
        }
        if (this._rEase) {
          var _3 = l4 < r6;
          if (_3 !== this._inv) {
            var v3 = _3 ? r6 : a4 - r6;
            this._inv = _3, this._from && (this.ratio = 1 - this.ratio), this._invRatio = this.ratio, this._invTime = r6, this._invRecip = v3 ? (_3 ? -1 : 1) / v3 : 0, this._invScale = _3 ? -this.ratio : 1 - this.ratio, this._invEase = _3 ? this._rEase : this._ease;
          }
          this.ratio = h2 = this._invRatio + this._invScale * this._invEase((l4 - this._invTime) * this._invRecip);
        } else
          this.ratio = h2 = this._ease(l4 / a4);
        if (this._from && (this.ratio = h2 = 1 - h2), this._tTime = s5, this._time = l4, !this._act && this._ts && (this._act = 1, this._lazy = 0), !r6 && s5 && !t3 && !p3 && (Dt(this, `onStart`), this._tTime !== s5))
          return this;
        for (u4 = this._pt; u4; )
          u4.r(h2, u4.d), u4 = u4._next;
        g3 && g3.render(e16 < 0 ? e16 : g3._dur * g3._ease(l4 / this._dur), t3, n4) || this._startAt && (this._zTime = e16), this._onUpdate && !t3 && (o5 && Re(this, e16, t3, n4), Dt(this, `onUpdate`)), this._repeat && d3 !== p3 && this.vars.onRepeat && !t3 && this.parent && Dt(this, `onRepeat`), (s5 === this._tDur || !s5) && this._tTime === s5 && (o5 && !this._onUpdate && Re(this, e16, true, true), (e16 || !a4) && (s5 === this._tDur && this._ts > 0 || !s5 && this._ts < 0) && Fe(this, 1), !t3 && !(o5 && !r6) && (s5 || r6 || m3) && (Dt(this, s5 === i4 ? `onComplete` : `onReverseComplete`, true), this._prom && !(s5 < i4 && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }, s4.targets = function() {
      return this._targets;
    }, s4.invalidate = function(e16) {
      return (!e16 || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e16), r5.prototype.invalidate.call(this, e16);
    }, s4.resetTo = function(e16, t3, n4, r6, i4) {
      Bt || Vt.wake(), this._ts || this.play();
      var a4 = Math.min(this._dur, (this._dp._time - this._start) * this._ts), o5;
      return this._initted || ln(this, a4), o5 = this._ease(a4 / this._dur), un(this, e16, t3, n4, r6, o5, a4, i4) ? this.resetTo(e16, t3, n4, r6, 1) : (We(this, 0), this.parent || Ne(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0), this.render(0));
    }, s4.kill = function(e16, t3) {
      if (t3 === void 0 && (t3 = `all`), !e16 && (!t3 || t3 === `all`))
        return this._lazy = this._pt = 0, this.parent ? Ot(this) : this.scrollTrigger && this.scrollTrigger.kill(!!a2), this;
      if (this.timeline) {
        var n4 = this.timeline.totalDuration();
        return this.timeline.killTweensOf(e16, t3, sn && sn.vars.overwrite !== true)._first || Ot(this), this.parent && n4 !== this.timeline.totalDuration() && $e(this, this._dur * this.timeline._tDur / n4, 0, 1), this;
      }
      var r6 = this._targets, i4 = e16 ? ut(e16) : r6, o5 = this._ptLookup, s5 = this._pt, c4, l4, u4, d3, f3, p3, m3;
      if ((!t3 || t3 === `all`) && Me(r6, i4))
        return t3 === `all` && (this._pt = 0), Ot(this);
      for (c4 = this._op = this._op || [], t3 !== `all` && (h(t3) && (f3 = {}, H(t3, function(e17) {
        return f3[e17] = 1;
      }), t3 = f3), t3 = dn(r6, t3)), m3 = r6.length; m3--; )
        if (~i4.indexOf(r6[m3]))
          for (f3 in l4 = o5[m3], t3 === `all` ? (c4[m3] = t3, d3 = l4, u4 = {}) : (u4 = c4[m3] = c4[m3] || {}, d3 = t3), d3)
            p3 = l4 && l4[f3], p3 && ((!(`kill` in p3.d) || p3.d.kill(f3) === true) && Pe(this, p3, `_pt`), delete l4[f3]), u4 !== `all` && (u4[f3] = 1);
      return this._initted && !this._pt && s5 && Ot(this), this;
    }, o4.to = function(e16, t3) {
      return new o4(e16, t3, arguments[2]);
    }, o4.from = function(e16, t3) {
      return rt(1, arguments);
    }, o4.delayedCall = function(e16, t3, n4, r6) {
      return new o4(t3, 0, { immediateRender: false, lazy: false, overwrite: false, delay: e16, onComplete: t3, onReverseComplete: t3, onCompleteParams: n4, onReverseCompleteParams: n4, callbackScope: r6 });
    }, o4.fromTo = function(e16, t3, n4) {
      return rt(2, arguments);
    }, o4.set = function(e16, t3) {
      return t3.duration = 0, t3.repeatDelay || (t3.repeat = 0), new o4(e16, t3);
    }, o4.killTweensOf = function(e16, t3, n4) {
      return P.killTweensOf(e16, t3, n4);
    }, o4;
  }(tn);
  Ee(Y.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), H(`staggerTo,staggerFrom,staggerFromTo`, function(e16) {
    Y[e16] = function() {
      var t3 = new J(), n4 = st.call(arguments, 0);
      return n4.splice(e16 === `staggerFromTo` ? 5 : 4, 0, 0), t3[e16].apply(t3, n4);
    };
  });
  var gn = function(e16, t3, n4) {
    return e16[t3] = n4;
  };
  var _n = function(e16, t3, n4) {
    return e16[t3](n4);
  };
  var vn = function(e16, t3, n4, r5) {
    return e16[t3](r5.fp, n4);
  };
  var yn = function(e16, t3, n4) {
    return e16.setAttribute(t3, n4);
  };
  var bn = function(e16, t3) {
    return g2(e16[t3]) ? _n : v2(e16[t3]) && e16.setAttribute ? yn : gn;
  };
  var xn = function(e16, t3) {
    return t3.set(t3.t, t3.p, Math.round((t3.s + t3.c * e16) * 1e6) / 1e6, t3);
  };
  var Sn = function(e16, t3) {
    return t3.set(t3.t, t3.p, !!(t3.s + t3.c * e16), t3);
  };
  var Cn = function(e16, t3) {
    var n4 = t3._pt, r5 = ``;
    if (!e16 && t3.b)
      r5 = t3.b;
    else if (e16 === 1 && t3.e)
      r5 = t3.e;
    else {
      for (; n4; )
        r5 = n4.p + (n4.m ? n4.m(n4.s + n4.c * e16) : Math.round((n4.s + n4.c * e16) * 1e4) / 1e4) + r5, n4 = n4._next;
      r5 += t3.c;
    }
    t3.set(t3.t, t3.p, r5, t3);
  };
  var wn = function(e16, t3) {
    for (var n4 = t3._pt; n4; )
      n4.r(e16, n4.d), n4 = n4._next;
  };
  var Tn = function(e16, t3, n4, r5) {
    for (var i4 = this._pt, a4; i4; )
      a4 = i4._next, i4.p === r5 && i4.modifier(e16, t3, n4), i4 = a4;
  };
  var En = function(e16) {
    for (var t3 = this._pt, n4, r5; t3; )
      r5 = t3._next, t3.p === e16 && !t3.op || t3.op === e16 ? Pe(this, t3, `_pt`) : t3.dep || (n4 = 1), t3 = r5;
    return !n4;
  };
  var Dn = function(e16, t3, n4, r5) {
    r5.mSet(e16, t3, r5.m.call(r5.tween, n4, r5.mt), r5);
  };
  var On = function(e16) {
    for (var t3 = e16._pt, n4, r5, i4, a4; t3; ) {
      for (n4 = t3._next, r5 = i4; r5 && r5.pr > t3.pr; )
        r5 = r5._next;
      (t3._prev = r5 ? r5._prev : a4) ? t3._prev._next = t3 : i4 = t3, (t3._next = r5) ? r5._prev = t3 : a4 = t3, t3 = n4;
    }
    e16._pt = i4;
  };
  var X = function() {
    function e16(e17, t4, n4, r5, i4, a4, o4, s4, c4) {
      this.t = t4, this.s = r5, this.c = i4, this.p = n4, this.r = a4 || xn, this.d = o4 || this, this.set = s4 || gn, this.pr = c4 || 0, this._next = e17, e17 && (e17._prev = this);
    }
    var t3 = e16.prototype;
    return t3.modifier = function(e17, t4, n4) {
      this.mSet = this.mSet || this.set, this.set = Dn, this.m = e17, this.mt = n4, this.tween = t4;
    }, e16;
  }();
  H(he + `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`, function(e16) {
    return ce[e16] = 1;
  }), R.TweenMax = R.TweenLite = Y, R.TimelineLite = R.TimelineMax = J, P = new J({ sortChildren: false, defaults: r3, autoRemoveChildren: true, id: `root`, smoothChildTiming: true }), n2.stringFilter = zt;
  var kn = [];
  var An = {};
  var jn = [];
  var Mn = 0;
  var Nn = 0;
  var Pn = function(e16) {
    return (An[e16] || jn).map(function(e17) {
      return e17();
    });
  };
  var Fn = function() {
    var e16 = Date.now(), t3 = [];
    e16 - Mn > 2 && (Pn(`matchMediaInit`), kn.forEach(function(e17) {
      var n4 = e17.queries, r5 = e17.conditions, i4, a4, o4, s4;
      for (a4 in n4)
        i4 = F.matchMedia(n4[a4]).matches, i4 && (o4 = 1), i4 !== r5[a4] && (r5[a4] = i4, s4 = 1);
      s4 && (e17.revert(), o4 && t3.push(e17));
    }), Pn(`matchMediaRevert`), t3.forEach(function(e17) {
      return e17.onMatch(e17, function(t4) {
        return e17.add(null, t4);
      });
    }), Mn = e16, Pn(`matchMedia`));
  };
  var In = function() {
    function e16(e17, t4) {
      this.selector = t4 && dt(t4), this.data = [], this._r = [], this.isReverted = false, this.id = Nn++, e17 && this.add(e17);
    }
    var t3 = e16.prototype;
    return t3.add = function(e17, t4, n4) {
      g2(e17) && (n4 = t4, t4 = e17, e17 = g2);
      var r5 = this, i4 = function() {
        var e18 = o2, i5 = r5.selector, a4;
        return e18 && e18 !== r5 && e18.data.push(r5), n4 && (r5.selector = dt(n4)), o2 = r5, a4 = t4.apply(r5, arguments), g2(a4) && r5._r.push(a4), o2 = e18, r5.selector = i5, r5.isReverted = false, a4;
      };
      return r5.last = i4, e17 === g2 ? i4(r5, function(e18) {
        return r5.add(null, e18);
      }) : e17 ? r5[e17] = i4 : i4;
    }, t3.ignore = function(e17) {
      var t4 = o2;
      o2 = null, e17(this), o2 = t4;
    }, t3.getTweens = function() {
      var t4 = [];
      return this.data.forEach(function(n4) {
        return n4 instanceof e16 ? t4.push.apply(t4, n4.getTweens()) : n4 instanceof Y && !(n4.parent && n4.parent.data === `nested`) && t4.push(n4);
      }), t4;
    }, t3.clear = function() {
      this._r.length = this.data.length = 0;
    }, t3.kill = function(e17, t4) {
      var n4 = this;
      if (e17 ? function() {
        for (var t5 = n4.getTweens(), r6 = n4.data.length, i4; r6--; )
          i4 = n4.data[r6], i4.data === `isFlip` && (i4.revert(), i4.getChildren(true, true, false).forEach(function(e18) {
            return t5.splice(t5.indexOf(e18), 1);
          }));
        for (t5.map(function(e18) {
          return { g: e18._dur || e18._delay || e18._sat && !e18._sat.vars.immediateRender ? e18.globalTime(0) : -1 / 0, t: e18 };
        }).sort(function(e18, t6) {
          return t6.g - e18.g || -1 / 0;
        }).forEach(function(t6) {
          return t6.t.revert(e17);
        }), r6 = n4.data.length; r6--; )
          i4 = n4.data[r6], i4 instanceof J ? i4.data !== `nested` && (i4.scrollTrigger && i4.scrollTrigger.revert(), i4.kill()) : !(i4 instanceof Y) && i4.revert && i4.revert(e17);
        n4._r.forEach(function(t6) {
          return t6(e17, n4);
        }), n4.isReverted = true;
      }() : this.data.forEach(function(e18) {
        return e18.kill && e18.kill();
      }), this.clear(), t4)
        for (var r5 = kn.length; r5--; )
          kn[r5].id === this.id && kn.splice(r5, 1);
    }, t3.revert = function(e17) {
      this.kill(e17 || {});
    }, e16;
  }();
  var Ln = function() {
    function e16(e17) {
      this.contexts = [], this.scope = e17, o2 && o2.data.push(this);
    }
    var t3 = e16.prototype;
    return t3.add = function(e17, t4, n4) {
      y2(e17) || (e17 = { matches: e17 });
      var r5 = new In(0, n4 || this.scope), i4 = r5.conditions = {}, a4, s4, c4;
      for (s4 in o2 && !r5.selector && (r5.selector = o2.selector), this.contexts.push(r5), t4 = r5.add(`onMatch`, t4), r5.queries = e17, e17)
        s4 === `all` ? c4 = 1 : (a4 = F.matchMedia(e17[s4]), a4 && (kn.indexOf(r5) < 0 && kn.push(r5), (i4[s4] = a4.matches) && (c4 = 1), a4.addListener ? a4.addListener(Fn) : a4.addEventListener(`change`, Fn)));
      return c4 && t4(r5, function(e18) {
        return r5.add(null, e18);
      }), this;
    }, t3.revert = function(e17) {
      this.kill(e17 || {});
    }, t3.kill = function(e17) {
      this.contexts.forEach(function(t4) {
        return t4.kill(e17, true);
      });
    }, e16;
  }();
  var Rn = { registerPlugin: function() {
    [...arguments].forEach(function(e16) {
      return jt(e16);
    });
  }, timeline: function(e16) {
    return new J(e16);
  }, getTweensOf: function(e16, t3) {
    return P.getTweensOf(e16, t3);
  }, getProperty: function(e16, t3, n4, r5) {
    h(e16) && (e16 = ut(e16)[0]);
    var i4 = _e(e16 || {}).get, a4 = n4 ? Te : we;
    return n4 === `native` && (n4 = ``), e16 && (t3 ? a4((V[t3] && V[t3].get || i4)(e16, t3, n4, r5)) : function(t4, n5, r6) {
      return a4((V[t4] && V[t4].get || i4)(e16, t4, n5, r6));
    });
  }, quickSetter: function(e16, t3, n4) {
    if (e16 = ut(e16), e16.length > 1) {
      var r5 = e16.map(function(e17) {
        return Z.quickSetter(e17, t3, n4);
      }), i4 = r5.length;
      return function(e17) {
        for (var t4 = i4; t4--; )
          r5[t4](e17);
      };
    }
    e16 = e16[0] || {};
    var a4 = V[t3], o4 = _e(e16), s4 = o4.harness && (o4.harness.aliases || {})[t3] || t3, c4 = a4 ? function(t4) {
      var r6 = new a4();
      kt._pt = 0, r6.init(e16, n4 ? t4 + n4 : t4, kt, 0, [e16]), r6.render(1, r6), kt._pt && wn(1, kt);
    } : o4.set(e16, s4);
    return a4 ? c4 : function(t4) {
      return c4(e16, s4, n4 ? t4 + n4 : t4, o4, 1);
    };
  }, quickTo: function(e16, t3, n4) {
    var r5, i4 = Z.to(e16, Ee((r5 = {}, r5[t3] = `+=0.1`, r5.paused = true, r5.stagger = 0, r5), n4 || {})), a4 = function(e17, n5, r6) {
      return i4.resetTo(t3, e17, n5, r6);
    };
    return a4.tween = i4, a4;
  }, isTweening: function(e16) {
    return P.getTweensOf(e16, true).length > 0;
  }, defaults: function(e16) {
    return e16 && e16.ease && (e16.ease = Yt(e16.ease, r3.ease)), ke(r3, e16 || {});
  }, config: function(e16) {
    return ke(n2, e16 || {});
  }, registerEffect: function(e16) {
    var t3 = e16.name, n4 = e16.effect, r5 = e16.plugins, i4 = e16.defaults, a4 = e16.extendTimeline;
    (r5 || ``).split(`,`).forEach(function(e17) {
      return e17 && !V[e17] && !R[e17] && ne(t3 + ` effect requires ` + e17 + ` plugin.`);
    }), fe[t3] = function(e17, t4, r6) {
      return n4(ut(e17), Ee(t4 || {}, i4), r6);
    }, a4 && (J.prototype[t3] = function(e17, n5, r6) {
      return this.add(fe[t3](e17, y2(n5) ? n5 : (r6 = n5) && {}, this), r6);
    });
  }, registerEase: function(e16, t3) {
    q[e16] = Yt(t3);
  }, parseEase: function(e16, t3) {
    return arguments.length ? Yt(e16, t3) : q;
  }, getById: function(e16) {
    return P.getById(e16);
  }, exportRoot: function(e16, t3) {
    e16 === void 0 && (e16 = {});
    var n4 = new J(e16), r5, i4;
    for (n4.smoothChildTiming = b(e16.smoothChildTiming), P.remove(n4), n4._dp = 0, n4._time = n4._tTime = P._time, r5 = P._first; r5; )
      i4 = r5._next, (t3 || !(!r5._dur && r5 instanceof Y && r5.vars.onComplete === r5._targets[0])) && Ke(n4, r5, r5._start - r5._delay), r5 = i4;
    return Ke(P, n4, 0), n4;
  }, context: function(e16, t3) {
    return e16 ? new In(e16, t3) : o2;
  }, matchMedia: function(e16) {
    return new Ln(e16);
  }, matchMediaRefresh: function() {
    return kn.forEach(function(e16) {
      var t3 = e16.conditions, n4, r5;
      for (r5 in t3)
        t3[r5] && (t3[r5] = false, n4 = 1);
      n4 && e16.revert();
    }) || Fn();
  }, addEventListener: function(e16, t3) {
    var n4 = An[e16] || (An[e16] = []);
    ~n4.indexOf(t3) || n4.push(t3);
  }, removeEventListener: function(e16, t3) {
    var n4 = An[e16], r5 = n4 && n4.indexOf(t3);
    r5 >= 0 && n4.splice(r5, 1);
  }, utils: { wrap: xt, wrapYoyo: St, distribute: pt, random: gt, snap: ht, normalize: yt, getUnit: G, clamp: ot, splitColor: Pt, toArray: ut, selector: dt, mapRange: wt, pipe: _t, unitize: vt, interpolate: Tt, shuffle: ft }, install: ee, effects: fe, ticker: Vt, updateRoot: J.updateRoot, plugins: V, globalTimeline: P, core: { PropTween: X, globals: re, Tween: Y, Timeline: J, Animation: tn, getCache: _e, _removeLinkedListItem: Pe, reverting: function() {
    return a2;
  }, context: function(e16) {
    return e16 && o2 && (o2.data.push(e16), e16._ctx = o2), o2;
  }, suppressOverwrites: function(e16) {
    return i2 = e16;
  } } };
  H(`to,from,fromTo,delayedCall,set,killTweensOf`, function(e16) {
    return Rn[e16] = Y[e16];
  }), Vt.add(J.updateRoot), kt = Rn.to({}, { duration: 0 });
  var zn = function(e16, t3) {
    for (var n4 = e16._pt; n4 && n4.p !== t3 && n4.op !== t3 && n4.fp !== t3; )
      n4 = n4._next;
    return n4;
  };
  var Bn = function(e16, t3) {
    var n4 = e16._targets, r5, i4, a4;
    for (r5 in t3)
      for (i4 = n4.length; i4--; )
        a4 = e16._ptLookup[i4][r5], (a4 &&= a4.d) && (a4._pt && (a4 = zn(a4, r5)), a4 && a4.modifier && a4.modifier(t3[r5], e16, n4[i4], r5));
  };
  var Vn = function(e16, t3) {
    return { name: e16, headless: 1, rawVars: 1, init: function(e17, n4, r5) {
      r5._onInit = function(e18) {
        var r6, i4;
        if (h(n4) && (r6 = {}, H(n4, function(e19) {
          return r6[e19] = 1;
        }), n4 = r6), t3) {
          for (i4 in r6 = {}, n4)
            r6[i4] = t3(n4[i4]);
          n4 = r6;
        }
        Bn(e18, n4);
      };
    } };
  };
  var Z = Rn.registerPlugin({ name: `attr`, init: function(e16, t3, n4, r5, i4) {
    var a4, o4, s4;
    for (a4 in this.tween = n4, t3)
      s4 = e16.getAttribute(a4) || ``, o4 = this.add(e16, `setAttribute`, (s4 || 0) + ``, t3[a4], r5, i4, 0, 0, a4), o4.op = a4, o4.b = s4, this._props.push(a4);
  }, render: function(e16, t3) {
    for (var n4 = t3._pt; n4; )
      a2 ? n4.set(n4.t, n4.p, n4.b, n4) : n4.r(e16, n4.d), n4 = n4._next;
  } }, { name: `endArray`, headless: 1, init: function(e16, t3) {
    for (var n4 = t3.length; n4--; )
      this.add(e16, n4, e16[n4] || 0, t3[n4], 0, 0, 0, 0, 0, 1);
  } }, Vn(`roundProps`, mt), Vn(`modifiers`), Vn(`snap`, ht)) || Rn;
  Y.version = J.version = Z.version = `3.15.0`, B = 1, x() && Ht(), q.Power0, q.Power1, q.Power2, q.Power3, q.Power4, q.Linear, q.Quad, q.Cubic, q.Quart, q.Quint, q.Strong, q.Elastic, q.Back, q.SteppedEase, q.Bounce, q.Sine, q.Expo, q.Circ;
  var Hn;
  var Un;
  var Wn;
  var Gn;
  var Kn;
  var qn;
  var Jn;
  var Yn = function() {
    return typeof window < `u`;
  };
  var Xn = {};
  var Zn = 180 / Math.PI;
  var Qn = Math.PI / 180;
  var $n = Math.atan2;
  var er = 1e8;
  var tr = /([A-Z])/g;
  var nr = /(left|right|width|margin|padding|x)/i;
  var rr = /[\s,\(]\S/;
  var ir = { autoAlpha: `opacity,visibility`, scale: `scaleX,scaleY`, alpha: `opacity` };
  var ar = function(e16, t3) {
    return t3.set(t3.t, t3.p, Math.round((t3.s + t3.c * e16) * 1e4) / 1e4 + t3.u, t3);
  };
  var or = function(e16, t3) {
    return t3.set(t3.t, t3.p, e16 === 1 ? t3.e : Math.round((t3.s + t3.c * e16) * 1e4) / 1e4 + t3.u, t3);
  };
  var sr = function(e16, t3) {
    return t3.set(t3.t, t3.p, e16 ? Math.round((t3.s + t3.c * e16) * 1e4) / 1e4 + t3.u : t3.b, t3);
  };
  var cr = function(e16, t3) {
    return t3.set(t3.t, t3.p, e16 === 1 ? t3.e : e16 ? Math.round((t3.s + t3.c * e16) * 1e4) / 1e4 + t3.u : t3.b, t3);
  };
  var lr = function(e16, t3) {
    var n4 = t3.s + t3.c * e16;
    t3.set(t3.t, t3.p, ~~(n4 + (n4 < 0 ? -0.5 : 0.5)) + t3.u, t3);
  };
  var ur = function(e16, t3) {
    return t3.set(t3.t, t3.p, e16 ? t3.e : t3.b, t3);
  };
  var dr = function(e16, t3) {
    return t3.set(t3.t, t3.p, e16 === 1 ? t3.e : t3.b, t3);
  };
  var fr = function(e16, t3, n4) {
    return e16.style[t3] = n4;
  };
  var pr = function(e16, t3, n4) {
    return e16.style.setProperty(t3, n4);
  };
  var mr = function(e16, t3, n4) {
    return e16._gsap[t3] = n4;
  };
  var hr = function(e16, t3, n4) {
    return e16._gsap.scaleX = e16._gsap.scaleY = n4;
  };
  var gr = function(e16, t3, n4, r5, i4) {
    var a4 = e16._gsap;
    a4.scaleX = a4.scaleY = n4, a4.renderTransform(i4, a4);
  };
  var _r = function(e16, t3, n4, r5, i4) {
    var a4 = e16._gsap;
    a4[t3] = n4, a4.renderTransform(i4, a4);
  };
  var Q = `transform`;
  var $ = Q + `Origin`;
  var vr = function e13(t3, n4) {
    var r5 = this, i4 = this.target, a4 = i4.style, o4 = i4._gsap;
    if (t3 in Xn && a4) {
      if (this.tfm = this.tfm || {}, t3 !== `transform`)
        t3 = ir[t3] || t3, ~t3.indexOf(`,`) ? t3.split(`,`).forEach(function(e16) {
          return r5.tfm[e16] = Lr(i4, e16);
        }) : this.tfm[t3] = o4.x ? o4[t3] : Lr(i4, t3), t3 === $ && (this.tfm.zOrigin = o4.zOrigin);
      else
        return ir.transform.split(`,`).forEach(function(t4) {
          return e13.call(r5, t4, n4);
        });
      if (this.props.indexOf(Q) >= 0)
        return;
      o4.svg && (this.svgo = i4.getAttribute(`data-svg-origin`), this.props.push($, n4, ``)), t3 = Q;
    }
    (a4 || n4) && this.props.push(t3, n4, a4[t3]);
  };
  var yr = function(e16) {
    e16.translate && (e16.removeProperty(`translate`), e16.removeProperty(`scale`), e16.removeProperty(`rotate`));
  };
  var br = function() {
    var e16 = this.props, t3 = this.target, n4 = t3.style, r5 = t3._gsap, i4, a4;
    for (i4 = 0; i4 < e16.length; i4 += 3)
      e16[i4 + 1] ? e16[i4 + 1] === 2 ? t3[e16[i4]](e16[i4 + 2]) : t3[e16[i4]] = e16[i4 + 2] : e16[i4 + 2] ? n4[e16[i4]] = e16[i4 + 2] : n4.removeProperty(e16[i4].substr(0, 2) === `--` ? e16[i4] : e16[i4].replace(tr, `-$1`).toLowerCase());
    if (this.tfm) {
      for (a4 in this.tfm)
        r5[a4] = this.tfm[a4];
      r5.svg && (r5.renderTransform(), t3.setAttribute(`data-svg-origin`, this.svgo || ``)), i4 = Jn(), (!i4 || !i4.isStart) && !n4[Q] && (yr(n4), r5.zOrigin && n4[$] && (n4[$] += ` ` + r5.zOrigin + `px`, r5.zOrigin = 0, r5.renderTransform()), r5.uncache = 1);
    }
  };
  var xr = function(e16, t3) {
    var n4 = { target: e16, props: [], revert: br, save: vr };
    return e16._gsap || Z.core.getCache(e16), t3 && e16.style && e16.nodeType && t3.split(`,`).forEach(function(e17) {
      return n4.save(e17);
    }), n4;
  };
  var Sr;
  var Cr = function(e16, t3) {
    var n4 = Un.createElementNS ? Un.createElementNS((t3 || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e16) : Un.createElement(e16);
    return n4 && n4.style ? n4 : Un.createElement(e16);
  };
  var wr = function e14(t3, n4, r5) {
    var i4 = getComputedStyle(t3);
    return i4[n4] || i4.getPropertyValue(n4.replace(tr, `-$1`).toLowerCase()) || i4.getPropertyValue(n4) || !r5 && e14(t3, Er(n4) || n4, 1) || ``;
  };
  var Tr = `O,Moz,ms,Ms,Webkit`.split(`,`);
  var Er = function(e16, t3, n4) {
    var r5 = (t3 || Kn).style, i4 = 5;
    if (e16 in r5 && !n4)
      return e16;
    for (e16 = e16.charAt(0).toUpperCase() + e16.substr(1); i4-- && !(Tr[i4] + e16 in r5); )
      ;
    return i4 < 0 ? null : (i4 === 3 ? `ms` : i4 >= 0 ? Tr[i4] : ``) + e16;
  };
  var Dr = function() {
    Yn() && window.document && (Hn = window, Un = Hn.document, Wn = Un.documentElement, Kn = Cr(`div`) || { style: {} }, Cr(`div`), Q = Er(Q), $ = Q + `Origin`, Kn.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`, Sr = !!Er(`perspective`), Jn = Z.core.reverting, Gn = 1);
  };
  var Or = function(e16) {
    var t3 = e16.ownerSVGElement, n4 = Cr(`svg`, t3 && t3.getAttribute(`xmlns`) || `http://www.w3.org/2000/svg`), r5 = e16.cloneNode(true), i4;
    r5.style.display = `block`, n4.appendChild(r5), Wn.appendChild(n4);
    try {
      i4 = r5.getBBox();
    } catch {
    }
    return n4.removeChild(r5), Wn.removeChild(n4), i4;
  };
  var kr = function(e16, t3) {
    for (var n4 = t3.length; n4--; )
      if (e16.hasAttribute(t3[n4]))
        return e16.getAttribute(t3[n4]);
  };
  var Ar = function(e16) {
    var t3, n4;
    try {
      t3 = e16.getBBox();
    } catch {
      t3 = Or(e16), n4 = 1;
    }
    return t3 && (t3.width || t3.height) || n4 || (t3 = Or(e16)), t3 && !t3.width && !t3.x && !t3.y ? { x: +kr(e16, [`x`, `cx`, `x1`]) || 0, y: +kr(e16, [`y`, `cy`, `y1`]) || 0, width: 0, height: 0 } : t3;
  };
  var jr = function(e16) {
    return !!(e16.getCTM && (!e16.parentNode || e16.ownerSVGElement) && Ar(e16));
  };
  var Mr = function(e16, t3) {
    if (t3) {
      var n4 = e16.style, r5;
      t3 in Xn && t3 !== $ && (t3 = Q), n4.removeProperty ? (r5 = t3.substr(0, 2), (r5 === `ms` || t3.substr(0, 6) === `webkit`) && (t3 = `-` + t3), n4.removeProperty(r5 === `--` ? t3 : t3.replace(tr, `-$1`).toLowerCase())) : n4.removeAttribute(t3);
    }
  };
  var Nr = function(e16, t3, n4, r5, i4, a4) {
    var o4 = new X(e16._pt, t3, n4, 0, 1, a4 ? dr : ur);
    return e16._pt = o4, o4.b = r5, o4.e = i4, e16._props.push(n4), o4;
  };
  var Pr = { deg: 1, rad: 1, turn: 1 };
  var Fr = { grid: 1, flex: 1 };
  var Ir = function e15(t3, n4, r5, i4) {
    var a4 = parseFloat(r5) || 0, o4 = (r5 + ``).trim().substr((a4 + ``).length) || `px`, s4 = Kn.style, c4 = nr.test(n4), l4 = t3.tagName.toLowerCase() === `svg`, u4 = (l4 ? `client` : `offset`) + (c4 ? `Width` : `Height`), d3 = 100, f3 = i4 === `px`, p3 = i4 === `%`, m3, h2, g3, _3;
    if (i4 === o4 || !a4 || Pr[i4] || Pr[o4])
      return a4;
    if (o4 !== `px` && !f3 && (a4 = e15(t3, n4, r5, `px`)), _3 = t3.getCTM && jr(t3), (p3 || o4 === `%`) && (Xn[n4] || ~n4.indexOf(`adius`)))
      return m3 = _3 ? t3.getBBox()[c4 ? `width` : `height`] : t3[u4], U(p3 ? a4 / m3 * d3 : a4 / 100 * m3);
    if (s4[c4 ? `width` : `height`] = d3 + (f3 ? o4 : i4), h2 = i4 !== `rem` && ~n4.indexOf(`adius`) || i4 === `em` && t3.appendChild && !l4 ? t3 : t3.parentNode, _3 && (h2 = (t3.ownerSVGElement || {}).parentNode), (!h2 || h2 === Un || !h2.appendChild) && (h2 = Un.body), g3 = h2._gsap, g3 && p3 && g3.width && c4 && g3.time === Vt.time && !g3.uncache)
      return U(a4 / g3.width * d3);
    if (p3 && (n4 === `height` || n4 === `width`)) {
      var v3 = t3.style[n4];
      t3.style[n4] = d3 + i4, m3 = t3[u4], v3 ? t3.style[n4] = v3 : Mr(t3, n4);
    } else
      (p3 || o4 === `%`) && !Fr[wr(h2, `display`)] && (s4.position = wr(t3, `position`)), h2 === t3 && (s4.position = `static`), h2.appendChild(Kn), m3 = Kn[u4], h2.removeChild(Kn), s4.position = `absolute`;
    return c4 && p3 && (g3 = _e(h2), g3.time = Vt.time, g3.width = h2[u4]), U(f3 ? m3 * a4 / d3 : m3 && a4 ? d3 / m3 * a4 : 0);
  };
  var Lr = function(e16, t3, n4, r5) {
    var i4;
    return Gn || Dr(), t3 in ir && t3 !== `transform` && (t3 = ir[t3], ~t3.indexOf(`,`) && (t3 = t3.split(`,`)[0])), Xn[t3] && t3 !== `transform` ? (i4 = Yr(e16, r5), i4 = t3 === `transformOrigin` ? i4.svg ? i4.origin : Xr(wr(e16, $)) + ` ` + i4.zOrigin + `px` : i4[t3]) : (i4 = e16.style[t3], (!i4 || i4 === `auto` || r5 || ~(i4 + ``).indexOf(`calc(`)) && (i4 = Hr[t3] && Hr[t3](e16, t3, n4) || wr(e16, t3) || ve(e16, t3) || +(t3 === `opacity`))), n4 && !~(i4 + ``).trim().indexOf(` `) ? Ir(e16, t3, i4, n4) + n4 : i4;
  };
  var Rr = function(e16, t3, r5, i4) {
    if (!r5 || r5 === `none`) {
      var a4 = Er(t3, e16, 1), o4 = a4 && wr(e16, a4, 1);
      o4 && o4 !== r5 ? (t3 = a4, r5 = o4) : t3 === `borderColor` && (r5 = wr(e16, `borderTopColor`));
    }
    var s4 = new X(this._pt, e16.style, t3, 0, 1, Cn), c4 = 0, l4 = 0, u4, d3, f3, p3, m3, h2, g3, _3, v3, y3, b2, x2;
    if (s4.b = r5, s4.e = i4, r5 += ``, i4 += ``, i4.substring(0, 6) === `var(--` && (i4 = wr(e16, i4.substring(4, i4.indexOf(`)`)))), i4 === `auto` && (h2 = e16.style[t3], e16.style[t3] = i4, i4 = wr(e16, t3) || i4, h2 ? e16.style[t3] = h2 : Mr(e16, t3)), u4 = [r5, i4], zt(u4), r5 = u4[0], i4 = u4[1], f3 = r5.match(k) || [], x2 = i4.match(k) || [], x2.length) {
      for (; d3 = k.exec(i4); )
        g3 = d3[0], v3 = i4.substring(c4, d3.index), m3 ? m3 = (m3 + 1) % 5 : (v3.substr(-5) === `rgba(` || v3.substr(-5) === `hsla(`) && (m3 = 1), g3 !== (h2 = f3[l4++] || ``) && (p3 = parseFloat(h2) || 0, b2 = h2.substr((p3 + ``).length), g3.charAt(1) === `=` && (g3 = ye(p3, g3) + b2), _3 = parseFloat(g3), y3 = g3.substr((_3 + ``).length), c4 = k.lastIndex - y3.length, y3 || (y3 = y3 || n2.units[t3] || b2, c4 === i4.length && (i4 += y3, s4.e += y3)), b2 !== y3 && (p3 = Ir(e16, t3, h2, y3) || 0), s4._pt = { _next: s4._pt, p: v3 || l4 === 1 ? v3 : `,`, s: p3, c: _3 - p3, m: m3 && m3 < 4 || t3 === `zIndex` ? Math.round : 0 });
      s4.c = c4 < i4.length ? i4.substring(c4, i4.length) : ``;
    } else
      s4.r = t3 === `display` && i4 === `none` ? dr : ur;
    return j2.test(i4) && (s4.e = 0), this._pt = s4, s4;
  };
  var zr = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` };
  var Br = function(e16) {
    var t3 = e16.split(` `), n4 = t3[0], r5 = t3[1] || `50%`;
    return (n4 === `top` || n4 === `bottom` || r5 === `left` || r5 === `right`) && (e16 = n4, n4 = r5, r5 = e16), t3[0] = zr[n4] || n4, t3[1] = zr[r5] || r5, t3.join(` `);
  };
  var Vr = function(e16, t3) {
    if (t3.tween && t3.tween._time === t3.tween._dur) {
      var n4 = t3.t, r5 = n4.style, i4 = t3.u, a4 = n4._gsap, o4, s4, c4;
      if (i4 === `all` || i4 === true)
        r5.cssText = ``, s4 = 1;
      else
        for (i4 = i4.split(`,`), c4 = i4.length; --c4 > -1; )
          o4 = i4[c4], Xn[o4] && (s4 = 1, o4 = o4 === `transformOrigin` ? $ : Q), Mr(n4, o4);
      s4 && (Mr(n4, Q), a4 && (a4.svg && n4.removeAttribute(`transform`), r5.scale = r5.rotate = r5.translate = `none`, Yr(n4, 1), a4.uncache = 1, yr(r5)));
    }
  };
  var Hr = { clearProps: function(e16, t3, n4, r5, i4) {
    if (i4.data !== `isFromStart`) {
      var a4 = e16._pt = new X(e16._pt, t3, n4, 0, 0, Vr);
      return a4.u = r5, a4.pr = -10, a4.tween = i4, e16._props.push(n4), 1;
    }
  } };
  var Ur = [1, 0, 0, 1, 0, 0];
  var Wr = {};
  var Gr = function(e16) {
    return e16 === `matrix(1, 0, 0, 1, 0, 0)` || e16 === `none` || !e16;
  };
  var Kr = function(e16) {
    var t3 = wr(e16, Q);
    return Gr(t3) ? Ur : t3.substr(7).match(O).map(U);
  };
  var qr = function(e16, t3) {
    var n4 = e16._gsap || _e(e16), r5 = e16.style, i4 = Kr(e16), a4, o4, s4, c4;
    return n4.svg && e16.getAttribute(`transform`) ? (s4 = e16.transform.baseVal.consolidate().matrix, i4 = [s4.a, s4.b, s4.c, s4.d, s4.e, s4.f], i4.join(`,`) === `1,0,0,1,0,0` ? Ur : i4) : (i4 === Ur && !e16.offsetParent && e16 !== Wn && !n4.svg && (s4 = r5.display, r5.display = `block`, a4 = e16.parentNode, (!a4 || !e16.offsetParent && !e16.getBoundingClientRect().width) && (c4 = 1, o4 = e16.nextElementSibling, Wn.appendChild(e16)), i4 = Kr(e16), s4 ? r5.display = s4 : Mr(e16, `display`), c4 && (o4 ? a4.insertBefore(e16, o4) : a4 ? a4.appendChild(e16) : Wn.removeChild(e16))), t3 && i4.length > 6 ? [i4[0], i4[1], i4[4], i4[5], i4[12], i4[13]] : i4);
  };
  var Jr = function(e16, t3, n4, r5, i4, a4) {
    var o4 = e16._gsap, s4 = i4 || qr(e16, true), c4 = o4.xOrigin || 0, l4 = o4.yOrigin || 0, u4 = o4.xOffset || 0, d3 = o4.yOffset || 0, f3 = s4[0], p3 = s4[1], m3 = s4[2], h2 = s4[3], g3 = s4[4], _3 = s4[5], v3 = t3.split(` `), y3 = parseFloat(v3[0]) || 0, b2 = parseFloat(v3[1]) || 0, x2, S2, C2, w2;
    n4 ? s4 !== Ur && (S2 = f3 * h2 - p3 * m3) && (C2 = h2 / S2 * y3 + b2 * (-m3 / S2) + (m3 * _3 - h2 * g3) / S2, w2 = y3 * (-p3 / S2) + f3 / S2 * b2 - (f3 * _3 - p3 * g3) / S2, y3 = C2, b2 = w2) : (x2 = Ar(e16), y3 = x2.x + (~v3[0].indexOf(`%`) ? y3 / 100 * x2.width : y3), b2 = x2.y + (~(v3[1] || v3[0]).indexOf(`%`) ? b2 / 100 * x2.height : b2)), r5 || r5 !== false && o4.smooth ? (g3 = y3 - c4, _3 = b2 - l4, o4.xOffset = u4 + (g3 * f3 + _3 * m3) - g3, o4.yOffset = d3 + (g3 * p3 + _3 * h2) - _3) : o4.xOffset = o4.yOffset = 0, o4.xOrigin = y3, o4.yOrigin = b2, o4.smooth = !!r5, o4.origin = t3, o4.originIsAbsolute = !!n4, e16.style[$] = `0px 0px`, a4 && (Nr(a4, o4, `xOrigin`, c4, y3), Nr(a4, o4, `yOrigin`, l4, b2), Nr(a4, o4, `xOffset`, u4, o4.xOffset), Nr(a4, o4, `yOffset`, d3, o4.yOffset)), e16.setAttribute(`data-svg-origin`, y3 + ` ` + b2);
  };
  var Yr = function(e16, t3) {
    var r5 = e16._gsap || new en(e16);
    if (`x` in r5 && !t3 && !r5.uncache)
      return r5;
    var i4 = e16.style, a4 = r5.scaleX < 0, o4 = `px`, s4 = `deg`, c4 = getComputedStyle(e16), l4 = wr(e16, $) || `0`, u4 = d3 = f3 = h2 = g3 = _3 = v3 = y3 = b2 = 0, d3, f3, p3 = m3 = 1, m3, h2, g3, _3, v3, y3, b2, x2, S2, C2, w2, T3, E2, D2, O2, k2, A2, j3, M3, N2, P2, F2, I2, L2, R2, z2, B2, ee2;
    return r5.svg = !!(e16.getCTM && jr(e16)), c4.translate && ((c4.translate !== `none` || c4.scale !== `none` || c4.rotate !== `none`) && (i4[Q] = (c4.translate === `none` ? `` : `translate3d(` + (c4.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) + `) `) + (c4.rotate === `none` ? `` : `rotate(` + c4.rotate + `) `) + (c4.scale === `none` ? `` : `scale(` + c4.scale.split(` `).join(`,`) + `) `) + (c4[Q] === `none` ? `` : c4[Q])), i4.scale = i4.rotate = i4.translate = `none`), C2 = qr(e16, r5.svg), r5.svg && (r5.uncache ? (P2 = e16.getBBox(), l4 = r5.xOrigin - P2.x + `px ` + (r5.yOrigin - P2.y) + `px`, N2 = ``) : N2 = !t3 && e16.getAttribute(`data-svg-origin`), Jr(e16, N2 || l4, !!N2 || r5.originIsAbsolute, r5.smooth !== false, C2)), x2 = r5.xOrigin || 0, S2 = r5.yOrigin || 0, C2 !== Ur && (D2 = C2[0], O2 = C2[1], k2 = C2[2], A2 = C2[3], u4 = j3 = C2[4], d3 = M3 = C2[5], C2.length === 6 ? (p3 = Math.sqrt(D2 * D2 + O2 * O2), m3 = Math.sqrt(A2 * A2 + k2 * k2), h2 = D2 || O2 ? $n(O2, D2) * Zn : 0, v3 = k2 || A2 ? $n(k2, A2) * Zn + h2 : 0, v3 && (m3 *= Math.abs(Math.cos(v3 * Qn))), r5.svg && (u4 -= x2 - (x2 * D2 + S2 * k2), d3 -= S2 - (x2 * O2 + S2 * A2))) : (ee2 = C2[6], z2 = C2[7], I2 = C2[8], L2 = C2[9], R2 = C2[10], B2 = C2[11], u4 = C2[12], d3 = C2[13], f3 = C2[14], w2 = $n(ee2, R2), g3 = w2 * Zn, w2 && (T3 = Math.cos(-w2), E2 = Math.sin(-w2), N2 = j3 * T3 + I2 * E2, P2 = M3 * T3 + L2 * E2, F2 = ee2 * T3 + R2 * E2, I2 = j3 * -E2 + I2 * T3, L2 = M3 * -E2 + L2 * T3, R2 = ee2 * -E2 + R2 * T3, B2 = z2 * -E2 + B2 * T3, j3 = N2, M3 = P2, ee2 = F2), w2 = $n(-k2, R2), _3 = w2 * Zn, w2 && (T3 = Math.cos(-w2), E2 = Math.sin(-w2), N2 = D2 * T3 - I2 * E2, P2 = O2 * T3 - L2 * E2, F2 = k2 * T3 - R2 * E2, B2 = A2 * E2 + B2 * T3, D2 = N2, O2 = P2, k2 = F2), w2 = $n(O2, D2), h2 = w2 * Zn, w2 && (T3 = Math.cos(w2), E2 = Math.sin(w2), N2 = D2 * T3 + O2 * E2, P2 = j3 * T3 + M3 * E2, O2 = O2 * T3 - D2 * E2, M3 = M3 * T3 - j3 * E2, D2 = N2, j3 = P2), g3 && Math.abs(g3) + Math.abs(h2) > 359.9 && (g3 = h2 = 0, _3 = 180 - _3), p3 = U(Math.sqrt(D2 * D2 + O2 * O2 + k2 * k2)), m3 = U(Math.sqrt(M3 * M3 + ee2 * ee2)), w2 = $n(j3, M3), v3 = Math.abs(w2) > 2e-4 ? w2 * Zn : 0, b2 = B2 ? 1 / (B2 < 0 ? -B2 : B2) : 0), r5.svg && (N2 = e16.getAttribute(`transform`), r5.forceCSS = e16.setAttribute(`transform`, ``) || !Gr(wr(e16, Q)), N2 && e16.setAttribute(`transform`, N2))), Math.abs(v3) > 90 && Math.abs(v3) < 270 && (a4 ? (p3 *= -1, v3 += h2 <= 0 ? 180 : -180, h2 += h2 <= 0 ? 180 : -180) : (m3 *= -1, v3 += v3 <= 0 ? 180 : -180)), t3 ||= r5.uncache, r5.x = u4 - ((r5.xPercent = u4 && (!t3 && r5.xPercent || (Math.round(e16.offsetWidth / 2) === Math.round(-u4) ? -50 : 0))) ? e16.offsetWidth * r5.xPercent / 100 : 0) + o4, r5.y = d3 - ((r5.yPercent = d3 && (!t3 && r5.yPercent || (Math.round(e16.offsetHeight / 2) === Math.round(-d3) ? -50 : 0))) ? e16.offsetHeight * r5.yPercent / 100 : 0) + o4, r5.z = f3 + o4, r5.scaleX = U(p3), r5.scaleY = U(m3), r5.rotation = U(h2) + s4, r5.rotationX = U(g3) + s4, r5.rotationY = U(_3) + s4, r5.skewX = v3 + s4, r5.skewY = y3 + s4, r5.transformPerspective = b2 + o4, (r5.zOrigin = parseFloat(l4.split(` `)[2]) || !t3 && r5.zOrigin || 0) && (i4[$] = Xr(l4)), r5.xOffset = r5.yOffset = 0, r5.force3D = n2.force3D, r5.renderTransform = r5.svg ? ri : Sr ? ni : Qr, r5.uncache = 0, r5;
  };
  var Xr = function(e16) {
    return (e16 = e16.split(` `))[0] + ` ` + e16[1];
  };
  var Zr = function(e16, t3, n4) {
    var r5 = G(t3);
    return U(parseFloat(t3) + parseFloat(Ir(e16, `x`, n4 + `px`, r5))) + r5;
  };
  var Qr = function(e16, t3) {
    t3.z = `0px`, t3.rotationY = t3.rotationX = `0deg`, t3.force3D = 0, ni(e16, t3);
  };
  var $r = `0deg`;
  var ei = `0px`;
  var ti = `) `;
  var ni = function(e16, t3) {
    var n4 = t3 || this, r5 = n4.xPercent, i4 = n4.yPercent, a4 = n4.x, o4 = n4.y, s4 = n4.z, c4 = n4.rotation, l4 = n4.rotationY, u4 = n4.rotationX, d3 = n4.skewX, f3 = n4.skewY, p3 = n4.scaleX, m3 = n4.scaleY, h2 = n4.transformPerspective, g3 = n4.force3D, _3 = n4.target, v3 = n4.zOrigin, y3 = ``, b2 = g3 === `auto` && e16 && e16 !== 1 || g3 === true;
    if (v3 && (u4 !== $r || l4 !== $r)) {
      var x2 = parseFloat(l4) * Qn, S2 = Math.sin(x2), C2 = Math.cos(x2), w2;
      x2 = parseFloat(u4) * Qn, w2 = Math.cos(x2), a4 = Zr(_3, a4, S2 * w2 * -v3), o4 = Zr(_3, o4, -Math.sin(x2) * -v3), s4 = Zr(_3, s4, C2 * w2 * -v3 + v3);
    }
    h2 !== ei && (y3 += `perspective(` + h2 + ti), (r5 || i4) && (y3 += `translate(` + r5 + `%, ` + i4 + `%) `), (b2 || a4 !== ei || o4 !== ei || s4 !== ei) && (y3 += s4 !== ei || b2 ? `translate3d(` + a4 + `, ` + o4 + `, ` + s4 + `) ` : `translate(` + a4 + `, ` + o4 + ti), c4 !== $r && (y3 += `rotate(` + c4 + ti), l4 !== $r && (y3 += `rotateY(` + l4 + ti), u4 !== $r && (y3 += `rotateX(` + u4 + ti), (d3 !== $r || f3 !== $r) && (y3 += `skew(` + d3 + `, ` + f3 + ti), (p3 !== 1 || m3 !== 1) && (y3 += `scale(` + p3 + `, ` + m3 + ti), _3.style[Q] = y3 || `translate(0, 0)`;
  };
  var ri = function(e16, t3) {
    var n4 = t3 || this, r5 = n4.xPercent, i4 = n4.yPercent, a4 = n4.x, o4 = n4.y, s4 = n4.rotation, c4 = n4.skewX, l4 = n4.skewY, u4 = n4.scaleX, d3 = n4.scaleY, f3 = n4.target, p3 = n4.xOrigin, m3 = n4.yOrigin, h2 = n4.xOffset, g3 = n4.yOffset, _3 = n4.forceCSS, v3 = parseFloat(a4), y3 = parseFloat(o4), b2, x2, S2, C2, w2;
    s4 = parseFloat(s4), c4 = parseFloat(c4), l4 = parseFloat(l4), l4 && (l4 = parseFloat(l4), c4 += l4, s4 += l4), s4 || c4 ? (s4 *= Qn, c4 *= Qn, b2 = Math.cos(s4) * u4, x2 = Math.sin(s4) * u4, S2 = Math.sin(s4 - c4) * -d3, C2 = Math.cos(s4 - c4) * d3, c4 && (l4 *= Qn, w2 = Math.tan(c4 - l4), w2 = Math.sqrt(1 + w2 * w2), S2 *= w2, C2 *= w2, l4 && (w2 = Math.tan(l4), w2 = Math.sqrt(1 + w2 * w2), b2 *= w2, x2 *= w2)), b2 = U(b2), x2 = U(x2), S2 = U(S2), C2 = U(C2)) : (b2 = u4, C2 = d3, x2 = S2 = 0), (v3 && !~(a4 + ``).indexOf(`px`) || y3 && !~(o4 + ``).indexOf(`px`)) && (v3 = Ir(f3, `x`, a4, `px`), y3 = Ir(f3, `y`, o4, `px`)), (p3 || m3 || h2 || g3) && (v3 = U(v3 + p3 - (p3 * b2 + m3 * S2) + h2), y3 = U(y3 + m3 - (p3 * x2 + m3 * C2) + g3)), (r5 || i4) && (w2 = f3.getBBox(), v3 = U(v3 + r5 / 100 * w2.width), y3 = U(y3 + i4 / 100 * w2.height)), w2 = `matrix(` + b2 + `,` + x2 + `,` + S2 + `,` + C2 + `,` + v3 + `,` + y3 + `)`, f3.setAttribute(`transform`, w2), _3 && (f3.style[Q] = w2);
  };
  var ii = function(e16, t3, n4, r5, i4) {
    var a4 = 360, o4 = h(i4), s4 = parseFloat(i4) * (o4 && ~i4.indexOf(`rad`) ? Zn : 1) - r5, c4 = r5 + s4 + `deg`, l4, u4;
    return o4 && (l4 = i4.split(`_`)[1], l4 === `short` && (s4 %= a4, s4 !== s4 % (a4 / 2) && (s4 += s4 < 0 ? a4 : -a4)), l4 === `cw` && s4 < 0 ? s4 = (s4 + a4 * er) % a4 - ~~(s4 / a4) * a4 : l4 === `ccw` && s4 > 0 && (s4 = (s4 - a4 * er) % a4 - ~~(s4 / a4) * a4)), e16._pt = u4 = new X(e16._pt, t3, n4, r5, s4, or), u4.e = c4, u4.u = `deg`, e16._props.push(n4), u4;
  };
  var ai = function(e16, t3) {
    for (var n4 in t3)
      e16[n4] = t3[n4];
    return e16;
  };
  var oi = function(e16, t3, n4) {
    var r5 = ai({}, n4._gsap), i4 = `perspective,force3D,transformOrigin,svgOrigin`, a4 = n4.style, o4, s4, c4, l4, u4, d3, f3, p3;
    for (s4 in r5.svg ? (c4 = n4.getAttribute(`transform`), n4.setAttribute(`transform`, ``), a4[Q] = t3, o4 = Yr(n4, 1), Mr(n4, Q), n4.setAttribute(`transform`, c4)) : (c4 = getComputedStyle(n4)[Q], a4[Q] = t3, o4 = Yr(n4, 1), a4[Q] = c4), Xn)
      c4 = r5[s4], l4 = o4[s4], c4 !== l4 && i4.indexOf(s4) < 0 && (f3 = G(c4), p3 = G(l4), u4 = f3 === p3 ? parseFloat(c4) : Ir(n4, s4, c4, p3), d3 = parseFloat(l4), e16._pt = new X(e16._pt, o4, s4, u4, d3 - u4, ar), e16._pt.u = p3 || 0, e16._props.push(s4));
    ai(o4, r5);
  };
  H(`padding,margin,Width,Radius`, function(e16, t3) {
    var n4 = `Top`, r5 = `Right`, i4 = `Bottom`, a4 = `Left`, o4 = (t3 < 3 ? [n4, r5, i4, a4] : [n4 + a4, n4 + r5, i4 + r5, i4 + a4]).map(function(n5) {
      return t3 < 2 ? e16 + n5 : `border` + n5 + e16;
    });
    Hr[t3 > 1 ? `border` + e16 : e16] = function(e17, t4, n5, r6, i5) {
      var a5, s4;
      if (arguments.length < 4)
        return a5 = o4.map(function(t5) {
          return Lr(e17, t5, n5);
        }), s4 = a5.join(` `), s4.split(a5[0]).length === 5 ? a5[0] : s4;
      a5 = (r6 + ``).split(` `), s4 = {}, o4.forEach(function(e18, t5) {
        return s4[e18] = a5[t5] = a5[t5] || a5[(t5 - 1) / 2 | 0];
      }), e17.init(t4, s4, i5);
    };
  });
  var si = { name: `css`, register: Dr, targetTest: function(e16) {
    return e16.style && e16.nodeType;
  }, init: function(e16, t3, r5, i4, a4) {
    var o4 = this._props, s4 = e16.style, c4 = r5.vars.startAt, l4, u4, d3, f3, p3, m3, g3, _3, v3, y3, b2, x2, S2, C2, w2, T3, E2;
    for (g3 in Gn || Dr(), this.styles = this.styles || xr(e16), T3 = this.styles.props, this.tween = r5, t3)
      if (g3 !== `autoRound` && (u4 = t3[g3], !(V[g3] && on(g3, t3, r5, i4, e16, a4)))) {
        if (p3 = typeof u4, m3 = Hr[g3], p3 === `function` && (u4 = u4.call(r5, i4, e16, a4), p3 = typeof u4), p3 === `string` && ~u4.indexOf(`random(`) && (u4 = Ct(u4)), m3)
          m3(this, e16, g3, u4, r5) && (w2 = 1);
        else if (g3.substr(0, 2) === `--`)
          l4 = (getComputedStyle(e16).getPropertyValue(g3) + ``).trim(), u4 += ``, Lt.lastIndex = 0, Lt.test(l4) || (_3 = G(l4), v3 = G(u4), v3 ? _3 !== v3 && (l4 = Ir(e16, g3, l4, v3) + v3) : _3 && (u4 += _3)), this.add(s4, `setProperty`, l4, u4, i4, a4, 0, 0, g3), o4.push(g3), T3.push(g3, 0, s4[g3]);
        else if (p3 !== `undefined`) {
          if (c4 && g3 in c4 ? (l4 = typeof c4[g3] == `function` ? c4[g3].call(r5, i4, e16, a4) : c4[g3], h(l4) && ~l4.indexOf(`random(`) && (l4 = Ct(l4)), G(l4 + ``) || l4 === `auto` || (l4 += n2.units[g3] || G(Lr(e16, g3)) || ``), (l4 + ``).charAt(1) === `=` && (l4 = Lr(e16, g3))) : l4 = Lr(e16, g3), f3 = parseFloat(l4), y3 = p3 === `string` && u4.charAt(1) === `=` && u4.substr(0, 2), y3 && (u4 = u4.substr(2)), d3 = parseFloat(u4), g3 in ir && (g3 === `autoAlpha` && (f3 === 1 && Lr(e16, `visibility`) === `hidden` && d3 && (f3 = 0), T3.push(`visibility`, 0, s4.visibility), Nr(this, s4, `visibility`, f3 ? `inherit` : `hidden`, d3 ? `inherit` : `hidden`, !d3)), g3 !== `scale` && g3 !== `transform` && (g3 = ir[g3], ~g3.indexOf(`,`) && (g3 = g3.split(`,`)[0]))), b2 = g3 in Xn, b2) {
            if (this.styles.save(g3), E2 = u4, p3 === `string` && u4.substring(0, 6) === `var(--`) {
              if (u4 = wr(e16, u4.substring(4, u4.indexOf(`)`))), u4.substring(0, 5) === `calc(`) {
                var D2 = e16.style.perspective;
                e16.style.perspective = u4, u4 = wr(e16, `perspective`), D2 ? e16.style.perspective = D2 : Mr(e16, `perspective`);
              }
              d3 = parseFloat(u4);
            }
            if (x2 || (S2 = e16._gsap, S2.renderTransform && !t3.parseTransform || Yr(e16, t3.parseTransform), C2 = t3.smoothOrigin !== false && S2.smooth, x2 = this._pt = new X(this._pt, s4, Q, 0, 1, S2.renderTransform, S2, 0, -1), x2.dep = 1), g3 === `scale`)
              this._pt = new X(this._pt, S2, `scaleY`, S2.scaleY, (y3 ? ye(S2.scaleY, y3 + d3) : d3) - S2.scaleY || 0, ar), this._pt.u = 0, o4.push(`scaleY`, g3), g3 += `X`;
            else if (g3 === `transformOrigin`) {
              T3.push($, 0, s4[$]), u4 = Br(u4), S2.svg ? Jr(e16, u4, 0, C2, 0, this) : (v3 = parseFloat(u4.split(` `)[2]) || 0, v3 !== S2.zOrigin && Nr(this, S2, `zOrigin`, S2.zOrigin, v3), Nr(this, s4, g3, Xr(l4), Xr(u4)));
              continue;
            } else if (g3 === `svgOrigin`) {
              Jr(e16, u4, 1, C2, 0, this);
              continue;
            } else if (g3 in Wr) {
              ii(this, S2, g3, f3, y3 ? ye(f3, y3 + u4) : u4);
              continue;
            } else if (g3 === `smoothOrigin`) {
              Nr(this, S2, `smooth`, S2.smooth, u4);
              continue;
            } else if (g3 === `force3D`) {
              S2[g3] = u4;
              continue;
            } else if (g3 === `transform`) {
              oi(this, u4, e16);
              continue;
            }
          } else
            g3 in s4 || (g3 = Er(g3) || g3);
          if (b2 || (d3 || d3 === 0) && (f3 || f3 === 0) && !rr.test(u4) && g3 in s4)
            _3 = (l4 + ``).substr((f3 + ``).length), d3 ||= 0, v3 = G(u4) || (g3 in n2.units ? n2.units[g3] : _3), _3 !== v3 && (f3 = Ir(e16, g3, l4, v3)), this._pt = new X(this._pt, b2 ? S2 : s4, g3, f3, (y3 ? ye(f3, y3 + d3) : d3) - f3, !b2 && (v3 === `px` || g3 === `zIndex`) && t3.autoRound !== false ? lr : ar), this._pt.u = v3 || 0, b2 && E2 !== u4 ? (this._pt.b = l4, this._pt.e = E2, this._pt.r = cr) : _3 !== v3 && v3 !== `%` && (this._pt.b = l4, this._pt.r = sr);
          else if (g3 in s4)
            Rr.call(this, e16, g3, l4, y3 ? y3 + u4 : u4);
          else if (g3 in e16)
            this.add(e16, g3, l4 || e16[g3], y3 ? y3 + u4 : u4, i4, a4);
          else if (g3 !== `parseTransform`) {
            te(g3, u4);
            continue;
          }
          b2 || (g3 in s4 ? T3.push(g3, 0, s4[g3]) : typeof e16[g3] == `function` ? T3.push(g3, 2, e16[g3]()) : T3.push(g3, 1, l4 || e16[g3])), o4.push(g3);
        }
      }
    w2 && On(this);
  }, render: function(e16, t3) {
    if (t3.tween._time || !Jn())
      for (var n4 = t3._pt; n4; )
        n4.r(e16, n4.d), n4 = n4._next;
    else
      t3.styles.revert();
  }, get: Lr, aliases: ir, getSetter: function(e16, t3, n4) {
    var r5 = ir[t3];
    return r5 && r5.indexOf(`,`) < 0 && (t3 = r5), t3 in Xn && t3 !== $ && (e16._gsap.x || Lr(e16, `x`)) ? n4 && qn === n4 ? t3 === `scale` ? hr : mr : (qn = n4 || {}) && (t3 === `scale` ? gr : _r) : e16.style && !v2(e16.style[t3]) ? fr : ~t3.indexOf(`-`) ? pr : bn(e16, t3);
  }, core: { _removeProperty: Mr, _getMatrix: qr } };
  Z.utils.checkPrefix = Er, Z.core.getStyleSaver = xr, function(e16, t3, r5, i4) {
    var a4 = H(e16 + `,` + t3 + `,` + r5, function(e17) {
      Xn[e17] = 1;
    });
    H(t3, function(e17) {
      n2.units[e17] = `deg`, Wr[e17] = 1;
    }), ir[a4[13]] = e16 + `,` + t3, H(i4, function(e17) {
      var t4 = e17.split(`:`);
      ir[t4[1]] = a4[t4[0]];
    });
  }(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`, `rotation,rotationX,rotationY,skewX,skewY`, `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`, `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`), H(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`, function(e16) {
    n2.units[e16] = `px`;
  }), Z.registerPlugin(si);
  var ci = Z.registerPlugin(si) || Z;
  ci.core.Tween;

  // ../antigravity-site/antigravity.google/_astro/Header.astro_astro_type_script_index_0_lang.BFZI1eBv.js
  var n3 = `M144.248 149.062C151.748 154.688 162.998 150.938 152.685 140.625C121.748 110.625 128.31 28.125 89.8727 28.125C51.4352 28.125 57.9977 110.625 27.0602 140.625C15.8102 151.875 27.9977 154.688 35.4977 149.062C64.5602 129.375 62.6852 94.6875 89.8727 94.6875C117.06 94.6875 115.185 129.375 144.248 149.062Z`;
  var r4 = [`<ellipse cx="36.6225" cy="43.0872" rx="36.6225" ry="43.0872" transform="matrix(-0.112784 0.99362 -0.99362 -0.112781 106.557 -26.4847)" fill="#FFE432"/>`, `<ellipse cx="155.163" cy="54.9292" rx="47.4118" ry="48.4541" transform="rotate(76.9243 155.163 54.9292)" fill="#FC413D"/>`, `<ellipse cx="14.6006" cy="65.4425" rx="49.5515" ry="64.192" transform="rotate(74.1257 14.6006 65.4425)" fill="#00B95C"/>`, `<ellipse cx="14.6006" cy="65.4425" rx="49.5515" ry="64.192" transform="rotate(74.1257 14.6006 65.4425)" fill="#00B95C"/>`, `<ellipse cx="18.1226" cy="67.414" rx="48.5679" ry="53.4688" transform="rotate(45.6065 18.1226 67.414)" fill="#00B95C"/>`, `<ellipse cx="121.837" cy="166.945" rx="46.6356" ry="44.9084" transform="rotate(76.9243 121.837 166.945)" fill="#3186FF"/>`, `<ellipse cx="53.9456" cy="56.8997" rx="53.9456" ry="56.8997" transform="matrix(-0.409539 0.912293 -0.912294 -0.409537 162.811 -25.895)" fill="#FBBC04"/>`, `<path d="M4.21557 239.063C-25.3231 227.467 25.1577 132.061 37.7105 100.085C50.2634 68.1097 84.3853 51.5888 113.924 63.1848C143.463 74.7809 178.474 138.65 165.921 170.626C153.368 202.601 33.7543 250.659 4.21557 239.063Z" fill="#3186FF"/>`, `<path d="M183.197 120.315C175.289 129.545 154.652 124.839 137.102 109.803C119.553 94.7668 111.738 75.0955 119.646 65.8656C127.554 56.6357 148.191 61.3423 165.74 76.3782C183.289 91.414 191.105 111.085 183.197 120.315Z" fill="#749BFF"/>`, `<ellipse cx="148.928" cy="36.7252" rx="71.1018" ry="44.199" transform="rotate(34.0763 148.928 36.7252)" fill="#FC413D"/>`, `<ellipse cx="37.848" cy="46.0346" rx="38.1008" ry="22.1575" transform="rotate(112.516 37.848 46.0346)" fill="#FFEE48"/>`];
  var i3 = [{ attrs: `x="4.09591" y="-44.1761" width="111.037" height="98.4416" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `6.25234` }, { attrs: `x="46.2974" y="-53.0009" width="217.731" height="215.86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `30.2268` }, { attrs: `x="-100.018" y="-36.7558" width="229.238" height="204.397" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `25.6957` }, { attrs: `x="-100.018" y="-36.7558" width="229.238" height="204.397" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `25.6957` }, { attrs: `x="-84.3985" y="-35.003" width="205.042" height="204.834" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `25.6957` }, { attrs: `x="27.9915" y="71.5493" width="187.691" height="190.791" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `24.4184` }, { attrs: `x="-11.8808" y="-98.7085" width="201.38" height="197.45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `22.1301` }, { attrs: `x="-44.4432" y="19.9522" width="252.513" height="260.404" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `19.7631` }, { attrs: `x="81.1915" y="25.7722" width="140.46" height="134.637" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `17.6843` }, { attrs: `x="55.1499" y="-47.2531" width="187.555" height="167.957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `14.9365` }, { attrs: `x="-24.2633" y="-27.1515" width="124.223" height="146.372" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"`, stdDeviation: `18.4865` }];
  function a3(e16 = `ag`, t3 = true) {
    let a4 = `${e16}_m`, o4 = (t4) => `${e16}_f${t4}`, s4 = t3 ? r4 : r4.filter((e17, t4) => t4 !== 3), c4 = t3 ? i3 : i3.filter((e17, t4) => t4 !== 3), l4 = s4.map((e17, t4) => `<g filter="url(#${o4(t4)})">${e17}</g>`).join(``), u4 = c4.map((e17, t4) => `<filter id="${o4(t4)}" ${e17.attrs}><feGaussianBlur stdDeviation="${e17.stdDeviation}"/></filter>`).join(``);
    return [`<path d="${n3}" fill="#3186FF"/>`, `<mask id="${a4}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="22" y="28" width="136" height="125"><path d="${n3}" fill="white"/></mask>`, `<g mask="url(#${a4})">${l4}</g>`, `<defs>${u4}</defs>`].join(``);
  }
  function o3(e16 = {}) {
    let { size: t3 = 180, className: n4 = ``, idPrefix: r5 = `ag_logo`, includeDuplicateGreenLayer: i4 = true } = e16;
    return `<svg${n4 ? ` class="${n4}"` : ``} viewBox="0 0 180 180" height="${t3}" width="${t3}" fill="none" xmlns="http://www.w3.org/2000/svg">${a3(r5, i4)}</svg>`;
  }
  var s3 = o3({ size: 180, idPrefix: `ag_logo`, includeDuplicateGreenLayer: true });
  var c3 = 400;
  var l3;
  var u3 = () => {
    if (typeof document > `u`)
      return;
    let n4 = document.querySelector(`[data-header]`);
    if (!n4)
      return;
    let r5 = (e16) => e16.replace(/\/+$/, ``) || `/`, i4 = r5(window.location.pathname);
    if (n4.querySelectorAll(`.subnav-link`).forEach((e16) => {
      let t3 = r5(e16.getAttribute(`href`) || ``) === i4;
      e16.classList.toggle(`is-active`, t3), t3 ? e16.setAttribute(`aria-current`, `page`) : e16.removeAttribute(`aria-current`);
    }), n4.dataset.headerInitialized === `true`)
      return;
    n4.dataset.headerInitialized = `true`;
    let a4 = n4.getAttribute(`data-scroll-reactive`) === `true`, o4 = n4.querySelectorAll(`[data-dropdown-trigger]`), u4 = n4.querySelectorAll(`[data-dropdown-panel-id]`), d3 = n4.querySelector(`[data-dropdowns-container]`), f3 = document.querySelector(`[data-dropdown-overlay]`), p3 = n4.querySelector(`[data-mobile-menu-toggle]`), m3 = n4.querySelector(`[data-mobile-menu]`), h2 = n4.querySelectorAll(`[data-mobile-dropdown-trigger]`), g3 = n4.querySelectorAll(`[data-mobile-dropdown-panel]`), _3 = window.scrollY, v3 = false, y3 = null, b2 = _3 > 0, x2 = false, S2 = (e16) => {
      requestAnimationFrame(() => {
        setTimeout(e16, 0);
      });
    };
    a4 && window.addEventListener(`scroll`, () => {
      if (v3 || n4.classList.contains(`menu-open`))
        return;
      let e16 = window.scrollY, t3 = e16 > 0;
      t3 !== b2 && (b2 = t3, n4.classList.toggle(`scrolled`, t3));
      let r6 = e16 - _3;
      r6 > 5 ? (x2 || (x2 = true, n4.classList.add(`hidden`)), E2(), T3()) : r6 < -5 && x2 && (x2 = false, n4.classList.remove(`hidden`)), Math.abs(r6) > 5 && (_3 = e16);
    }, { passive: true });
    let C2 = n4.querySelector(`[data-logo-link]`), w2 = n4.querySelector(`[data-logo-context-menu]`), T3 = () => {
      w2 && w2.classList.contains(`visible`) && (w2.classList.remove(`visible`), w2.setAttribute(`aria-hidden`, `true`));
    };
    if (C2 && w2) {
      C2.addEventListener(`contextmenu`, (e17) => {
        e17.preventDefault(), e17.stopPropagation(), w2.classList.add(`visible`), w2.setAttribute(`aria-hidden`, `false`);
      }), C2.addEventListener(`click`, (e17) => {
        w2.classList.contains(`visible`) && e17.preventDefault();
      }), window.addEventListener(`pointerdown`, (e17) => {
        if (!w2.classList.contains(`visible`))
          return;
        let t4 = e17.target;
        w2.contains(t4) || C2.contains(t4) || T3();
      }, { passive: true }), window.addEventListener(`scroll`, T3, { passive: true }), window.addEventListener(`keydown`, (e17) => {
        e17.key === `Escape` && T3();
      });
      let e16 = w2.querySelector(`[data-context-action="copy-logo"]`), t3 = w2.querySelector(`[data-context-action="copy-wordmark"]`), n5 = (e17) => {
        e17.classList.add(`copied`), setTimeout(() => {
          e17.classList.remove(`copied`), T3();
        }, 1200);
      };
      e16 && e16.addEventListener(`click`, (t4) => {
        t4.stopPropagation(), navigator.clipboard.writeText(s3).then(() => {
          n5(e16);
        });
      }), t3 && t3.addEventListener(`click`, (e17) => {
        e17.stopPropagation();
        let r6 = C2.querySelector(`svg`)?.outerHTML || ``;
        navigator.clipboard.writeText(r6).then(() => {
          n5(t3);
        });
      });
    }
    o4.forEach((r6) => {
      let i5 = r6.getAttribute(`data-dropdown-trigger`), a5 = (r7 = `hover`) => {
        if (!i5) {
          E2();
          return;
        }
        if (y3 !== i5 && (y3 = i5, T3(), clearTimeout(l3), l3 = setTimeout(() => {
          y3 === i5 && M(i5, r7, `header`);
        }, c3), u4.forEach((e16) => {
          e16.classList.remove(`open`), e16.getAttribute(`data-dropdown-panel-id`) === i5 && e16.classList.add(`open`);
        }), o4.forEach((e16) => {
          e16.getAttribute(`data-dropdown-trigger`) === i5 ? (e16.classList.add(`dropdown-open`), e16.setAttribute(`aria-expanded`, `true`)) : (e16.classList.remove(`dropdown-open`), e16.setAttribute(`aria-expanded`, `false`));
        }), n4.classList.add(`dropdown-open`), d3 && d3.classList.add(`open`), f3 && f3.classList.add(`open`), d3)) {
          let e16 = d3.querySelector(`[data-dropdown-panel-id="${i5}"]`);
          if (e16) {
            let n5 = e16.querySelectorAll(`.dropdown-title, .dropdown-info, .nav-button`), r8 = e16.querySelectorAll(`.subnav-link`);
            ci.timeline().set(n5, { opacity: 0, y: `1em` }).to(d3, { duration: 0.3, height: `auto`, opacity: 1, ease: `power2.out` }).to(n5, { duration: 0.3, opacity: 1, y: 0, stagger: 0.08, ease: `power2.out` }, `<`).fromTo(r8, { y: `1em`, opacity: 0 }, { y: 0, opacity: 1, stagger: { amount: 0.2 }, ease: `power2.out` }, `<0.12`);
          }
        }
      };
      r6.addEventListener(`mouseenter`, () => a5(`hover`)), r6.addEventListener(`focus`, () => a5(`focus`)), r6.addEventListener(`click`, (e16) => {
        i5 && (e16.preventDefault(), a5(`click`));
      });
    }), n4.addEventListener(`mouseleave`, () => {
      E2(), T3();
    }), f3 && f3.addEventListener(`click`, () => {
      E2(), T3();
    });
    function E2() {
      clearTimeout(l3), !(!n4 || !y3 && !n4.classList.contains(`dropdown-open`)) && (y3 = null, n4.classList.remove(`dropdown-open`), d3 && d3.classList.remove(`open`), f3 && f3.classList.remove(`open`), u4.forEach((e16) => e16.classList.remove(`open`)), o4.forEach((e16) => {
        e16.classList.remove(`dropdown-open`), e16.setAttribute(`aria-expanded`, `false`);
      }));
    }
    p3 && p3.addEventListener(`click`, (t3) => {
      t3.stopPropagation(), v3 = !n4.classList.contains(`menu-open`), v3 ? (x2 = false, n4.classList.remove(`hidden`), n4.classList.add(`menu-open`), m3 && m3.classList.add(`open`), document.body.classList.add(`no-scroll`), T3(), S2(() => {
        M(`mobile`, `click`, `mobile_menu`);
      })) : D2();
    });
    function D2() {
      !n4 || !v3 && !n4.classList.contains(`menu-open`) || (v3 = false, n4.classList.remove(`menu-open`), m3 && m3.classList.remove(`open`), document.body.classList.remove(`no-scroll`), g3.forEach((e16) => e16.classList.remove(`open`)), h2.forEach((e16) => {
        e16.classList.remove(`open`), e16.setAttribute(`aria-expanded`, `false`);
      }));
    }
    h2.forEach((t3) => {
      let n5 = t3.getAttribute(`data-mobile-dropdown-trigger`), r6 = n5 ? m3?.querySelector(`[data-mobile-dropdown-panel="${n5}"]`) : null;
      t3.addEventListener(`click`, (i5) => {
        if (i5.stopPropagation(), r6) {
          let i6 = r6.classList.contains(`open`);
          r6.classList.toggle(`open`, !i6), t3.classList.toggle(`open`, !i6), t3.setAttribute(`aria-expanded`, i6 ? `false` : `true`), !i6 && n5 && S2(() => {
            M(`mobile:${n5}`, `click`, `mobile_menu`);
          });
        }
      });
    }), n4.querySelectorAll(`.nav a, .mobile-menu a, .dropdown a, [data-logo-link]`).forEach((e16) => {
      e16.addEventListener(`click`, () => {
        (v3 || n4.classList.contains(`menu-open`)) && requestAnimationFrame(() => {
          D2();
        }), E2(), T3();
      });
    });
  };
  typeof document < `u` && (document.readyState === `loading` ? document.addEventListener(`DOMContentLoaded`, u3) : u3(), document.addEventListener(`astro:page-load`, u3), window.addEventListener(`agy:page-ready`, u3));
})();
