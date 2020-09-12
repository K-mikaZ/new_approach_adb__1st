/**
 * @param {string} e
 * @return {?}
 */
function parseHeaders(e){e=e.toString();var r,n,c,i,s,t=/^\/\/ @(\S+)(?:\s+(.*))?/,a={},l=e.split(/[\r\n]+/).filter(function(e,r,n){return e.match(t)});for(var f in l){switch([,r,s]=l[f].replace(/\s+$/,"").match(t),r){case"licence":r="license"}[i,n]=r.split(/:/).reverse(),i&&(n?(a[n]||(a[n]=new Object),c=a[n]):c=a,c[i]?(c[i]instanceof Array||(c[i]=new Array(c[i])),c[i].push(s||"")):c[i]=s||"")}return a.license&&(a.licence=a.license),a}
// https://sourceforge.net/p/greasemonkey/wiki/Metadata_Block/#multiplexing-metadata-blocks
var fileMETA = parseHeaders((function () {
  // ==UserScript==
  // @name               Trackerless Magnet URI
  // @name:de            URL-Magnete ohne Tracker
  // @name:fr            Magnets URL sans traqueurs
  // @name:it            Magneti URL senza tracker
  // @name:pt            Ímãs de URL sem rastreadores
  // @namespace          tag:github.com,2020:K-mik@Z:TrackerlessMagnetURI:RewritesAllMagnetURILinksToForcesBitTorrentClientsToUseTrackerlessRatherThanServerAssistedPeerDiscovery:TryToTakeOverTheWorld
  // @copyright          2020+, K-mik@Z (https://github.com/K-mikaZ)
  // @author             K-mik@Z
  // @version            1.1.1
  // @homepageURL        https://github.com/K-mikaZ/new_approach_adb__1st/tree/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
  // @downloadURL        https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
  // @updateURL          https://github.com/K-mikaZ/new_approach_adb__1st/tree/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
  // @description        Disconnect magnet links from trackers and other centralized forms of peer discovery, and use alternative distributed peer discovery methods instead.
  // @description:de     Trennen Sie Magnetverbindungen von Trackern und anderen zentralisierten Formen der Peer-Erkennung und verwenden Sie stattdessen alternative verteilte Peer-Erkennungsmethoden.
  // @description:fr     Déconnecter les liens magnet des trackers et d'autres formes centralisées de découverte de pairs, et utiliser à la place des méthodes de découverte de pairs distribuées alternatives.
  // @description:it     Disconnetti i collegamenti magnetici dai tracker e da altre forme centralizzate di scoperta tra pari e utilizza invece metodi di scoperta tra pari distribuiti alternativi.
  // @description:pt     Desconecte os links magnéticos de rastreadores e outras formas centralizadas de descoberta de pares e use métodos alternativos de descoberta de pares distribuídos.
  // @match              */torrent/*
  // @include            /^https?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:nya{2})\.(.{2,})\/*$/
  // @exclude            /^https?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:yg{2}tor{2}ent)\.(.{2,})\/*$/
  // @exclude            /^https?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:cpasbien)\.(.{2,})\/*$/
  // @grant              none
  // @icon               data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHdpZHRoPSIxMDAiPgogIDxwYXRoIGZpbGw9IiNkZWRlZGUiIGQ9Ik02LjY2NiA2LjY2NnYyMGgyNi42Njh2LTIwSDYuNjY2eiIvPgogIDxwYXRoIGQ9Ik0wIDB2ODYuNjY2aDYuNjY2djYuNjY4SDIwVjEwMGg2MHYtNi42NjZoMTMuMzM0di02LjY2OEgxMDBWMEg2MHYzMy4zMzRoNi42NjZWNjBINjB2Ni42NjZINDBWNjBoLTYuNjY2VjMzLjMzNEg0MFYwSDB6bTYuNjY2IDYuNjY2aDI2LjY2OHYyMGgtNi42Njh2NDBoNi42Njh2Ni42NjhoMzMuMzMydi02LjY2OGg2LjY2OHYtNDBoLTYuNjY4di0yMGgyNi42NjhWODBoLTYuNjY4djYuNjY2SDczLjMzNHY2LjY2OEgyNi42NjZ2LTYuNjY4SDEzLjMzNFY4MEg2LjY2NlY2LjY2NnoiLz4KICA8cGF0aCBmaWxsPSJyZWQiIGQ9Ik02LjY2NiAyNi42NjZWODBoNi42Njh2Ni42NjZoMTMuMzMydjYuNjY4aDQ2LjY2OHYtNi42NjhoMTMuMzMyVjgwaDYuNjY4VjI2LjY2NmgtMjB2NDAuMDAyaC02LjY2NnY2LjY2NmgtLjAwMnYtLjExNUg2MHYuMTE1SDQwdi0uMTE1aC02LjY2NnYuMTE1aC0uMDAydi02LjY2NmgtNi42NjZWMjYuNjY2aC0yMHoiLz4KICA8cGF0aCBmaWxsPSIjZGVkZWRlIiBkPSJNNjYuNjY2IDYuNjY2djIwaDI2LjY2OHYtMjBINjYuNjY2eiIvPgo8L3N2Zz4K
  // ==/UserScript==
}));
// originally from "https://github.com/da2x/trackerless-magnets/blob/master/webextensions/data/content-script.js"
// read < https://www.ctrl.blog/entry/trackerless-magnets-extension.html >
!function(a){"use strict";var r=document.querySelectorAll("a[href^='magnet:']");if(r)for(a in r)if(null!=r[a]&&null!=r[a].href){var e=new URL(r[a].href);if(e.searchParams.has("xt")){var s=`magnet:?xt=${e.searchParams.getAll("xt")}`;e.searchParams.has("xl")&&(s+=`&xl=${e.searchParams.getAll("xl")}`),e.searchParams.has("dn")&&(s+=`&dn=${e.searchParams.getAll("dn")}`),r[a].href=s}}}();
