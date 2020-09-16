/**
 * @param {string} e
 * @return {?}
 */
function parseHeaders(e){e=e.toString();var r,n,c,i,s,t=/^\/\/ @(\S+)(?:\s+(.*))?/,a={},l=e.split(/[\r\n]+/).filter(function(e,r,n){return e.match(t)});for(var f in l){switch([,r,s]=l[f].replace(/\s+$/,"").match(t),r){case"licence":r="license"}[i,n]=r.split(/:/).reverse(),i&&(n?(a[n]||(a[n]=new Object),c=a[n]):c=a,c[i]?(c[i]instanceof Array||(c[i]=new Array(c[i])),c[i].push(s||"")):c[i]=s||"")}return a.license&&(a.licence=a.license),a}
// https://sourceforge.net/p/greasemonkey/wiki/Metadata_Block/#multiplexing-metadata-blocks
var fileMETA = parseHeaders((function () {
  // ==UserScript==
  // @name            instant.page
  // @namespace       tag:github.com,2020:K-mik@Z:InstantPage:MakeSitePagesInstant:TryToTakeOverTheWorld
  // @copyright       2020+, K-mik@Z (https://github.com/K-mikaZ)
  // @author          K-mik@Z
  // @version         1.3.0
  // @homepageURL     https://github.com/K-mikaZ/new_approach_adb__1st/tree/master/common_utils/Resources/UserScripts/InstantPage.user.js
  // @downloadURL     https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/UserScripts/InstantPage.user.js
  // @updateURL       https://github.com/K-mikaZ/new_approach_adb__1st/tree/master/common_utils/Resources/UserScripts/InstantPage.user.js
  // @description     Make site pages instant and significantly improve conversion rate!
  // @description-de  Machen Sie Websiteseiten sofort und verbessern Sie die Conversion-Rate erheblich!
  // @description-fr  Rendez les pages de sites instantanées et améliorez sensiblement le taux de conversion!
  // @description-it  Rendi istantanee le pagine del sito e migliora notevolmente il tasso di conversione!
  // @description-pt  Torne as páginas do site instantâneas e melhore significativamente a taxa de conversão!
  // @match           *://*/*
  // @grant           none
  // @runt-at         document-end
  // @icon            data:image/png;base64,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
  // ==/UserScript==
}));
// replace instant.page addon
// < https://chrome.google.com/webstore/detail/instant-page/hmjffbhgdpbhfemdjncjjpfcjiaiflbi >
// see < https://instant.page >
!function() {
    "use strict";
    var t = document.getElementsByTagName("html"),
        e = !0,
        n = !1,
        a = void 0,
        s = document.createElement("style");
    try {
        // DISABLE "Google optimisation Flicker"
        for (var o, l = t[Symbol.iterator](); !(e = (o = l.next()).done); e = !0) {
            var i = o.value,
                d = i.getAttribute("style") || "";
            i.setAttribute("style", d + " opacity:1 !important;"), i.classList.remove("async-hide");
        }
    } catch (t) {
        n = !0, a = t;
    } finally {
        try {
            e || null == l.return || l.return();
        } finally {
            if (n) throw a;
        }
    }!1 === m && "fonts" in document ? (document.fonts.load("1em Open Sans Regular"),
        document.fonts.ready.then(function(t) {
            document.documentElement.className += " fonts-loaded";
        })) : document.documentElement.className += " fonts-loaded"/*;
    // FASTEST CSS ANIMATION                 << BREAK too many sites
    var c = Math.ceil(1e3 * Math.random()),
        u = document.createElement("style");
    u.id = `stylus-${c}`, u.className = "stylus", u.type = "text/css", u.setAttribute("rel", "preload"),
        u.setAttribute("as", "style"), u.setAttribute("onload", "this.onload=null;this.rel='stylesheet'");
    var y = "*{-webkit-animation-delay:0s!important;animation-delay:0!important}*[hidden]{display:none!important;visibility:hidden!important;opacity=0!important}video::-internal-media-controls-download-button{display:visible!important}video::-webkit-media-controls-panel{width:auto!important;}";
    u.styleSheet ? u.styleSheet.cssText = y : u.appendChild(document.createTextNode(y)),
        document.getElementsByTagName("head")[0].appendChild(u)*/, window.onload = function() {
            var t = document.createElement("script");
            t.src = "//instant.page/5.1.0", t.type = "module", t.integrity = "sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw",
                document.getElementsByTagName("body")[0].appendChild(t); // Insert Instant.Page //
        };
}();
