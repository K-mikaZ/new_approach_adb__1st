// ==UserScript==
// @name               Trackerless Magnet URI
// @name:de            URL-Magnete ohne Tracker
// @name:fr            Magnets URL sans traqueurs
// @name:it            Magneti URL senza tracker
// @name:pt            Ímãs de URL sem rastreadores
//
// @description        Rewrites all Magnet URI links to forces BitTorrent clients to use trackerless rather than server-assisted peer-discovery.
// @description:de     Schreibt alle Magnet-URI-Links neu, um BitTorrent-Clients zu zwingen, anstelle von servergestützter Peer-Erkennung eine verfolgerlose statt einer servergestützten Peer-Erkennung zu verwenden.
// @description:fr     Réécrit tous les liens URI Magnet pour obliger les clients BitTorrent à utiliser la découverte par les pairs sans suivi plutôt que par le serveur.
// @description:it     Riscrive tutti i collegamenti URI Magnet per obbligare i client BitTorrent a utilizzare trackerless anziché peer discovery assistito dal server.
// @description:pt     Reescreve todos os links de URI do Magnet para forçar os clientes BitTorrent a usarem a descoberta de pares sem rastreadores em vez de assistida por servidor.
//
// @author             K-mik@Z
// @version            1.1.6
// @namespace          tag:github.com,2020:K-mik@Z:TrackerlessMagnetURI:RewritesAllMagnetURILinksToForcesBitTorrentClientsToUseTrackerlessRatherThanServerAssistedPeerDiscovery:TryToTakeOverTheWorld
// @copyright          2020+, K-mik@Z (https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js)
// @homepageURL        https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
// @downloadURL        https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
// @updateURL          https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
// @icon               data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHdpZHRoPSIxMDAiPgogIDxwYXRoIGZpbGw9IiNkZWRlZGUiIGQ9Ik02LjY2NiA2LjY2NnYyMGgyNi42Njh2LTIwSDYuNjY2eiIvPgogIDxwYXRoIGQ9Ik0wIDB2ODYuNjY2aDYuNjY2djYuNjY4SDIwVjEwMGg2MHYtNi42NjZoMTMuMzM0di02LjY2OEgxMDBWMEg2MHYzMy4zMzRoNi42NjZWNjBINjB2Ni42NjZINDBWNjBoLTYuNjY2VjMzLjMzNEg0MFYwSDB6bTYuNjY2IDYuNjY2aDI2LjY2OHYyMGgtNi42Njh2NDBoNi42Njh2Ni42NjhoMzMuMzMydi02LjY2OGg2LjY2OHYtNDBoLTYuNjY4di0yMGgyNi42NjhWODBoLTYuNjY4djYuNjY2SDczLjMzNHY2LjY2OEgyNi42NjZ2LTYuNjY4SDEzLjMzNFY4MEg2LjY2NlY2LjY2NnoiLz4KICA8cGF0aCBmaWxsPSJyZWQiIGQ9Ik02LjY2NiAyNi42NjZWODBoNi42Njh2Ni42NjZoMTMuMzMydjYuNjY4aDQ2LjY2OHYtNi42NjhoMTMuMzMyVjgwaDYuNjY4VjI2LjY2NmgtMjB2NDAuMDAyaC02LjY2NnY2LjY2NmgtLjAwMnYtLjExNUg2MHYuMTE1SDQwdi0uMTE1aC02LjY2NnYuMTE1aC0uMDAydi02LjY2NmgtNi42NjZWMjYuNjY2aC0yMHoiLz4KICA8cGF0aCBmaWxsPSIjZGVkZWRlIiBkPSJNNjYuNjY2IDYuNjY2djIwaDI2LjY2OHYtMjBINjYuNjY2eiIvPgo8L3N2Zz4K
//
// @match              http://*/*
// @match              https://*/*
//
// @grant              none
// @noframes           true
// @run-at             document-end
// @require            data:javascript;charset=utf-8,let context={prod:false},{document,console,top,self}=window,magnets=Array.prototype.slice.call(document?.querySelectorAll("a[href*='magnet:']"));
// ==/UserScript==

// READ: https://en.wikipedia.org/wiki/Magnet_URI_scheme

// originally from "https://github.com/da2x/trackerless-magnets/blob/master/webextensions/data/content-script.js"
// read < https://www.ctrl.blog/entry/trackerless-magnets-extension.html >

// http*://animereleasegroup.blogspot.com/*

// from https://greasyfork.org/fr/scripts/512700-online-shopping-assistant-automatically-query-coupons-save-money/code
// lang: (navigator.language || navigator.userLanguage || "").slice(0, 2).toLowerCase() || "en",

!function(a) {
    "use strict";
    /* global context, magnets */ // https://github.com/Tampermonkey/tampermonkey/issues/1058#issuecomment-724865124

    context.isDebug = context.prod; // (In Prod => context.prod || In Development => !context.prod)

    // https://stackoverflow.com/questions/7500811/how-do-i-disable-console-log-when-i-am-not-debugging
    var LOG = context.isDebug ? console.log.bind(console) : function () {}; // USED ONLY IN DEBUG MODE

    //  How to make userscript match only once?
    if (top !== self) { return; } // The site probably uses IFRAME or hidden IFRAME. Make sure the script is not running in IFRAME.

    try {

        // magnets.length || LOG("No magnets found.");
        if (!magnets.length) { LOG("No magnets found.");/* Abort */return; }

        var magnets_protocol = magnets.filter((magnet) => magnet.protocol === "magnet:"); //protocol: "magnet:"
        magnets_protocol.length && ( LOG({magnets_protocol}) );

        // like: "http://anonymouse.org/cgi-bin/anon-www.cgi/magnet:?xt=urn:btih:5d7c306e862491da4cd9b33b1cb99fc311421b36&dn=Archer+2009+S03E08+PROPER+HDTV+x264-COMPULSiON+%5Beztv%5D&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.ccc.de%3A80"
        var magnets_others = magnets.filter((magnet) => magnet.protocol !== "magnet:");
        magnets_others.length && ( LOG({magnets_others}) );

        // https://www.reddit.com/r/javascript/comments/qov21/parsing_a_magnet_link_with_javascript/#t1_c3z9ybc-post-rtjson-content
        // Array.prototype.forEach.call(magnets_others, (m = m.substr(m.search(/magnet:\?xt=urn:/))) => LOG(m));

        // https://stackoverflow.com/questions/31697237/get-href-list-from-element-list-in-javascript
        // var links = Array.prototype.slice.call(document.querySelectorAll("a[href*='magnet:']"));
        // var links_array = links.map(function(elem){ return elem.getAttribute("href"); });
        // Array.prototype.slice.call(document.querySelectorAll("a[href*='magnet:']")).map(function(elem){ return elem.getAttribute("href"); });
        var r, e, l = document?.querySelectorAll("a[href^='magnet:']");
        if (l) for (a in l) null != l[a] && null != l[a].href && (r = new URL(l[a].href)).searchParams.has("xt") && (e = "magnet:?xt=" + r.searchParams.getAll("xt"),
                                                                                                                     r.searchParams.has("xl") && (e += "&xl=" + r.searchParams.getAll("xl")),
                                                                                                                     r.searchParams.has("dn") && (e += "&dn=" + r.searchParams.getAll("dn")),
                                                                                                                     l[a].href = e);
    } catch (r) {}
}();
