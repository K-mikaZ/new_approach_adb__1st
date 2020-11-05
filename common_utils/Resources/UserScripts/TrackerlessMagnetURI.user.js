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
  //
  // @description        Rewrites all Magnet URI links to forces BitTorrent clients to use trackerless rather than server-assisted peer-discovery.
  // @description:de     Schreibt alle Magnet-URI-Links neu, um BitTorrent-Clients zu zwingen, anstelle von servergestützter Peer-Erkennung eine verfolgerlose statt einer servergestützten Peer-Erkennung zu verwenden.
  // @description:fr     Réécrit tous les liens URI Magnet pour obliger les clients BitTorrent à utiliser la découverte par les pairs sans suivi plutôt que par le serveur.
  // @description:it     Riscrive tutti i collegamenti URI Magnet per obbligare i client BitTorrent a utilizzare trackerless anziché peer discovery assistito dal server.
  // @description:pt     Reescreve todos os links de URI do Magnet para forçar os clientes BitTorrent a usarem a descoberta de pares sem rastreadores em vez de assistida por servidor.
  //
  // @author             K-mik@Z
  // @version            1.1.4
  // @namespace          tag:github.com,2020:K-mik@Z:TrackerlessMagnetURI:RewritesAllMagnetURILinksToForcesBitTorrentClientsToUseTrackerlessRatherThanServerAssistedPeerDiscovery:TryToTakeOverTheWorld
  // @copyright          2020+, K-mik@Z (https://github.com/K-mikaZ/new_approach_adb__1st/tree/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js)
  // @homepageURL        https://github.com/K-mikaZ/new_approach_adb__1st/tree/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
  // @downloadURL        https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
  // @updateURL          https://github.com/K-mikaZ/new_approach_adb__1st/tree/master/common_utils/Resources/UserScripts/TrackerlessMagnetURI.user.js
  // @icon               data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHdpZHRoPSIxMDAiPgogIDxwYXRoIGZpbGw9IiNkZWRlZGUiIGQ9Ik02LjY2NiA2LjY2NnYyMGgyNi42Njh2LTIwSDYuNjY2eiIvPgogIDxwYXRoIGQ9Ik0wIDB2ODYuNjY2aDYuNjY2djYuNjY4SDIwVjEwMGg2MHYtNi42NjZoMTMuMzM0di02LjY2OEgxMDBWMEg2MHYzMy4zMzRoNi42NjZWNjBINjB2Ni42NjZINDBWNjBoLTYuNjY2VjMzLjMzNEg0MFYwSDB6bTYuNjY2IDYuNjY2aDI2LjY2OHYyMGgtNi42Njh2NDBoNi42Njh2Ni42NjhoMzMuMzMydi02LjY2OGg2LjY2OHYtNDBoLTYuNjY4di0yMGgyNi42NjhWODBoLTYuNjY4djYuNjY2SDczLjMzNHY2LjY2OEgyNi42NjZ2LTYuNjY4SDEzLjMzNFY4MEg2LjY2NlY2LjY2NnoiLz4KICA8cGF0aCBmaWxsPSJyZWQiIGQ9Ik02LjY2NiAyNi42NjZWODBoNi42Njh2Ni42NjZoMTMuMzMydjYuNjY4aDQ2LjY2OHYtNi42NjhoMTMuMzMyVjgwaDYuNjY4VjI2LjY2NmgtMjB2NDAuMDAyaC02LjY2NnY2LjY2NmgtLjAwMnYtLjExNUg2MHYuMTE1SDQwdi0uMTE1aC02LjY2NnYuMTE1aC0uMDAydi02LjY2NmgtNi42NjZWMjYuNjY2aC0yMHoiLz4KICA8cGF0aCBmaWxsPSIjZGVkZWRlIiBkPSJNNjYuNjY2IDYuNjY2djIwaDI2LjY2OHYtMjBINjYuNjY2eiIvPgo8L3N2Zz4K
  // @grant              none
  //
  // @match              */torrent/*
  //
  // @include            /^ht{2}ps?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:e[t|z]tv(.*)?)\.(.{2,})\/*$/
  // @include            /^ht{2}ps?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:glodls)\.(.{2,})\/*$/
  // @include            /^ht{2}ps?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:nya{2})\.(.{2,})\/*$/
  // @include            /^ht{2}ps?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:((?!.*yg{2}).*)?tor{2}ent(.*)?)\.(.{2,})\/*$/
  // @include            /^ht{2}ps?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:yts)\.(.{2,})\/*$/
  //
  // @exclude            /^ht{2}ps?:\/\/([vw]{2,}([a-z]{1,})?([0-9]{1,})?\.)?(?:cpasbien)\.(.{2,})\/*$/
  // ==/UserScript==
}));
// originally from "https://github.com/da2x/trackerless-magnets/blob/master/webextensions/data/content-script.js"
// read < https://www.ctrl.blog/entry/trackerless-magnets-extension.html >
!function(a){
  "use strict";var r=document.querySelectorAll("a[href^='magnet:']");if(r)for(a in r)if(null!=r[a]&&null!=r[a].href){var e=new URL(r[a].href);if(e.searchParams.has("xt")){var s=`magnet:?xt=${e.searchParams.getAll("xt")}`;e.searchParams.has("xl")&&(s+=`&xl=${e.searchParams.getAll("xl")}`),e.searchParams.has("dn")&&(s+=`&dn=${e.searchParams.getAll("dn")}`),r[a].href=s}}
}();
