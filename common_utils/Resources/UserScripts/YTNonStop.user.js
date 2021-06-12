;/**
 * @param {string} e
 * @return {?}
 */
function parseHeaders(e){e=e.toString();var r,n,c,i,s,t=/^\/\/ @(\S+)(?:\s+(.*))?/,a={},l=e.split(/[\r\n]+/).filter(function(e,r,n){return e.match(t)});for(var f in l){switch([,r,s]=l[f].replace(/\s+$/,"").match(t),r){case"licence":r="license"}[i,n]=r.split(/:/).reverse(),i&&(n?(a[n]||(a[n]=new Object),c=a[n]):c=a,c[i]?(c[i]instanceof Array||(c[i]=new Array(c[i])),c[i].push(s||"")):c[i]=s||"")}return a.license&&(a.licence=a.license),a}
// https://sourceforge.net/p/greasemonkey/wiki/Metadata_Block/#multiplexing-metadata-blocks
var fileMETA = parseHeaders((function () {
    // ==UserScript==
    // @name               You(Tube)™ nonstop!
    // @namespace          tag:github.com,2020:K-mik@Z:YTNonStop:EmancipatedVersionOfYT:TryToTakeOverTheWorld
    // @copyright          2020+, K-mik@Z
    // @author             K-mik@Z <cool2larime@yahoo.fr> (https://github.com/K-mikaZ)
    // @version            1.6.1.
    // @id                 13fbc8ca-c92d-4032-aa17-276e77cd8552-YTNonStop
    // @homepageURL        https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/Resources/UserScripts/YTNonStop.user.js
    // @downloadURL        https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/UserScripts/YTNonStop.user.js
    // @installURL         https://raw.githubusercontent.com/K-mikaZ/new_approach_adb__1st/master/common_utils/Resources/UserScripts/YTNonStop.user.js
    // @updateURL          https://github.com/K-mikaZ/new_approach_adb__1st/blob/master/common_utils/Resources/UserScripts/YTNonStop.user.js
    // @description        Emancipated version of YouTube: avoid annoying "video paused, log in, ... cookies" dialog boxes thus preventing these pop-ups from stopping the video + automatically skip all YouTube ads without waiting time + playing automatic of the next video in the second after the end of the video + added audio mode to listen only audio on YouTube without loading the video (can be enabled / disabled in player settings).
    // @description:en     Emancipated version of YouTube: avoid annoying "video paused, log in, ... cookies" dialog boxes thus preventing these pop-ups from stopping the video + automatically skip all YouTube ads without waiting time + playing automatic of the next video in the second after the end of the video + added audio mode to listen only audio on YouTube without loading the video (can be enabled / disabled in player settings).
    // @description:de     Emanzipierte Version von YouTube: Vermeiden Sie lästige Dialoge "Video angehalten, Anmelden, ... Cookies", um zu verhindern, dass diese Popups das Video automatisch stoppen. Überspringen Sie automatisch alle YouTube-Anzeigen, ohne die Wartezeit für die automatische Wiedergabe ab dem nächsten Video in der Sekunde nach dem Ende von Das Video hat einen Audiomodus hinzugefügt, um nur Audio auf YouTube anzuhören, ohne das Video zu laden (kann in den Player-Einstellungen aktiviert / deaktiviert werden).
    // @description:fr     Version émancipée de YouTube: évitez les boîtes de dialogue ennuyeuses "vidéo en pause, connectez-vous, ... cookies" empêchant ainsi ces pop-ups d'arrêter la vidéo + sautez automatiquement toutes les publicités YouTube sans temps d'attente + lecture automatique de la vidéo suivante dans la seconde après la fin de la vidéo + ajout d'un mode audio pour écouter uniquement l'audio sur YouTube sans charger la vidéo (peut être activé / désactivé dans les paramètres du lecteur).
    // @description:it     Versione emancipata di YouTube: evita le fastidiose finestre di dialogo "video in pausa, accedi, ... cookie", impedendo così a questi popup di fermare il video, salta automaticamente tutti gli annunci di YouTube senza attendere la riproduzione automatica dal video successivo nel secondo dopo la fine del il video ha aggiunto una modalità audio per ascoltare solo l'audio su YouTube senza caricare il video (può essere abilitato / disabilitato nelle impostazioni del lettore).
    // @description:pt     Versão emancipada do YouTube: evite os diálogos "vídeo pausado, faça login, ... cookies" irritantes, evitando que esses pop-ups parem o vídeo pular automaticamente todos os anúncios do YouTube sem esperar a reprodução automática do próximo vídeo no segundo após o final de o vídeo adicionou um modo de áudio para ouvir apenas áudio no YouTube sem carregar o vídeo (pode ser ativado / desativado nas configurações do player).
    // @include            /y(ou)?t(u)?(be)?(\-noco{2}kie)?\.(.{2,})\/.*/
    // @match              *://www.youtube.com/watch*
    // @match              *://www.y2mate.com/*/youtube/*
    // @connect            self
    // @connect            googlevideo.com
    // @connect            googleapis.com
    // @connect            s.ytimg.com
    // @require            https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
    // @require            https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/layer.min.js
    // @resource           layercss https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/layer.min.css
    // @resource           layericon https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/icon.png
    // @resource           layerloading https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/loading-0.gif
    // @icon               data:image/png;base64,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
    // @attribution        YouTube Downloader (https://greasyfork.org/fr/scripts/411551-youtube-downloader-support-video-audio-subtitle-download)
    // @attribution        Youtube Screenshot Button (https://greasyfork.org/en/scripts/402659-youtube-screenshot-button)
    // @delay              2000
    // @unstableMinify     A brief technical reason
    // @grant		       unsafeWindow
    // @grant              GM_addStyle
    // @grant              GM_openInTab
    // @grant              GM_getResourceText
    // @grant              GM_getResourceURL
    // @grant              GM_addValueChangeListener
    // @grant              GM_removeValueChangeListener
    // @grant              GM_xmlhttpRequest
    // @grant              GM.setValue
    // @grant              GM.getValue
    // @grant              GM_getValue
    // @grant              GM_setValue
    // ==/UserScript==
}));

'use strict';


/// FIXME: document with https://jsdoc.app/index.html


/**
 * ///////   BABELJS START  ///////////////////////////
 * /// BABELJS PARAMS:
 * /// https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=true&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Ces2016%2Creact%2Cstage-2&prettier=false&targets=&version=7.8.4&externalPlugins=%40babel%2Fplugin-proposal-class-properties%407.8.3
 */
/**
 * @function _defineProperty
 * @param {!Object} obj
 * @param {string} key
 * @param {!Object} value
 * @return {?}
 */
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value : value,
            enumerable : true,
            configurable : true,
            writable : true
        });
    } else {
        /** @type {!Object} */
        obj[key] = value;
    }
    return obj;
};


/**
 * @function _slicedToArray
 * @param {?} arr
 * @param {?} i
 * @return {?}
 */
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
};


/**
 * @function _nonIterableRest
 * @return {?}
 */
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
};


/**
 * @function _iterableToArrayLimit
 * @param {?} arr
 * @param {string} i
 * @return {?}
 */
function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
    }
    /** @type {!Array} */
    var _arr = [];
    /** @type {boolean} */
    var _n = true;
    /** @type {boolean} */
    var _d = false;
    var _e = undefined;
    try {
        var _i = arr[Symbol.iterator]();
        var _s;
        for (; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) {
                break;
            }
        }
    } catch (err) {
        /** @type {boolean} */
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i.return != null) {
                _i.return();
            }
        } finally {
            if (_d) {
                throw _e;
            }
        }
    }
    return _arr;
};


/**
 * @function _arrayWithHoles
 * @param {?} arr
 * @return {?}
 */
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) {
        return arr;
    }
};


/**
 * @function _toConsumableArray
 * @param {?} arr
 * @return {?}
 */
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
};


/**
 * @function _nonIterableSpread
 * @return {?}
 */
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
};


/**
 * @function _iterableToArray
 * @param {?} iter
 * @return {?}
 */
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") {
        return Array.from(iter);
    }
};


/**
 * @function _arrayWithoutHoles
 * @param {!NodeList} arr
 * @return {?}
 */
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        /** @type {number} */
        var i = 0;
        /** @type {!Array} */
        var arr2 = new Array(arr.length);
        for (; i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
};
/**
 * ///////   BABELJS END  ///////////////////////////
 */

/**
 * @param {?} i
 * @return {?}
 * @const
 * @description JQuery selector like (in pure JS).
 */
const _$$ = (i) => {
    return document.querySelectorAll.bind(document)(i).length, document.querySelectorAll.bind(document)(i);
};

/**
 * Dictionary map
 * @const
 */
const _getI18nMap = {
    en: {
        downloading:      "Download",
        screenshot:       "Take a screenshot of the video",
        videospeed:       "Video speed: ",
        normal:           "Normal",
        audiomode:        "Audio mode",
        activated:        "activated",
        noactivated:      "deactivated",
        audiomodenotice:  "Listen only to audio without loading video. Only for videos that are not live.",
        showCommentsText: "Afficher les commentaires",
        hideCommentsText: "Masquer les commentaires"
    },
    de: {
        downloading:      "Herunterladen",
        screenshot:       "Faire une capture d'écran de la vidéo",
        videospeed:       "Lesegeschwindigkeit: ",
        normal:           "Normal",
        audiomode:        "Audiomodus",
        activated:        "aktiviert",
        noactivated:      "behindert",
        audiomodenotice:  "Écouter uniquement l'audio sans charger la vidéo (seulement pour les vidéos qui ne sont pas en direct).",
        showCommentsText: "Afficher les commentaires",
        hideCommentsText: "Masquer les commentaires"
    },
    es: {
        downloading:      "Download",
        screenshot:       "Take a screenshot of the video",
        videospeed:       "Video speed: ",
        normal:           "Normal",
        audiomode:        "Mode audio",
        activated:        "activé",
        noactivated:      "désactivé",
        audiomodenotice:  "Écouter uniquement l'audio sans charger la vidéo (seulement pour les vidéos qui ne sont pas en direct).",
        showCommentsText: "Afficher les commentaires",
        hideCommentsText: "Masquer les commentaires"
    },
    fr: {
        downloading:      "Télécharger",
        screenshot:       "Faire une capture d'écran de la vidéo",
        videospeed:       "Vitesse de lecture: ",
        normal:           "Normale",
        audiomode:        "Mode audio",
        activated:        "activé",
        noactivated:      "désactivé",
        audiomodenotice:  "Écouter uniquement l'audio sans charger la vidéo (seulement pour les vidéos qui ne sont pas en direct).",
        showCommentsText: "Afficher les commentaires",
        hideCommentsText: "Masquer les commentaires"
    },
    it: {
        downloading:      "Download",
        screenshot:       "Take a screenshot of the video",
        videospeed:       "Video speed: ",
        normal:           "Normal",
        audiomode:        "Mode audio",
        activated:        "activé",
        noactivated:      "désactivé",
        audiomodenotice:  "Écouter uniquement l'audio sans charger la vidéo (seulement pour les vidéos qui ne sont pas en direct).",
        showCommentsText: "Afficher les commentaires",
        hideCommentsText: "Masquer les commentaires"
    },
    pt: {
        downloading:      "Descarregar",
        screenshot:       "Tirar uma foto do ecrã",
        videospeed:       "Velocidade de leitura: ",
        normal:           "Normal",
        audiomode:        "Modo áudio",
        activated:        "activé",
        noactivated:      "désactivé",
        audiomodenotice:  "Écouter uniquement l'audio sans charger la vidéo (seulement pour les vidéos qui ne sont pas en direct).",
        showCommentsText: "Afficher les commentaires",
        hideCommentsText: "Masquer les commentaires"
    },
    'pt-BR': { // translate to pt-BR https://www.deepl.com/translator#fr/pt/
        downloading:      "Baixar",
        screenshot:       "Tirar uma foto do vídeo",
        videospeed:       "Velocidade de leitura: ",
        normal:           "Normal",
        audiomode:        "Modo de áudio",
        activated:        "activé",
        noactivated:      "désactivé",
        audiomodenotice:  "Écouter uniquement l'audio sans charger la vidéo (seulement pour les vidéos qui ne sont pas en direct).",
        showCommentsText: "Afficher les commentaires",
        hideCommentsText: "Masquer les commentaires"
    },
    ru: {
        downloading:      "Download",
        screenshot:       "Take a screenshot of the video",
        videospeed:       "Video speed: ",
        normal:           "Normal",
        audiomode:        "Mode audio",
        activated:        "activé",
        noactivated:      "désactivé",
        audiomodenotice:  "Écouter uniquement l'audio sans charger la vidéo (seulement pour les vidéos qui ne sont pas en direct).",
        showCommentsText: "Afficher les commentaires",
        hideCommentsText: "Masquer les commentaires"
    }
};

/**
 *   [ °°° SECTION LANGUAGE °°° ]
 */

/**
 * Navigator language
 * @const {string}
 */
let L10n = navigator.language;

//L10n = "de"; // DEBUG LANGUAGE

/**
 * Define the language to use.
 */
if (!_getI18nMap[L10n]) {
    /**
   * Return lng (if lng-LNG is not present in Dictionary map).
   * @const {string}
  */
    L10n = L10n.substring(0, 2);
}
if (!_getI18nMap[L10n]) {
    /**
   * Default language to en if not supported.
   * @const {string}
   */
    L10n = "en";
};

/**
 * Function translate
 * @const
 * @example
 * // return "Take a screenshot of the video"
 * translate.screenshot
 */
const translate = _getI18nMap[L10n];

/**
 * @function docReady
 * @param {?} fn
 * @return {undefined}
 */
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn, {
            passive : true
        });
    }
};

/// https://greasyfork.org/fr/scripts/410150-addstyle/code
/**
 * Replace GM_addStyle;
 * Utility function to add replaceable CSS.
 * Support external stylesheet path.
 * @param {String} inputCSS
 */
const addStyle = (inputCSS) => {
    let node;
    let css = inputCSS.trim();
    if (css.length === 0) {
        return;
    }
    if (css.includes("{") && css.includes("}")) {
        /** @type {!Element} */
        node = document.createElement("style");
        /** @type {string} */
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
    } else {
        if (css.includes(".css")) {
            /** @type {!Element} */
            node = document.createElement("link");
            /** @type {string} */
            node.rel = "stylesheet";
            node.href = css;
        } else {
            console.error(`Function addStyle does't support input parameter: ${css}`);
        }
    }
    const heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        document.documentElement.appendChild(node);
    }
};

// Some youtube fix
addStyle(`.ytp-gradient-bottom{width:0px!important;height:0px!important;visibility:hidden!important;display:none!important}.text-wrapper.ytd-video-renderer,ytd-channel-video-player-renderer>#content,ytd-video-primary-info-renderer>#container{position:relative};`)

// /*
//  * removeVideoAutoPlay
//  * - Deletes all the audio and video autoplay attribute
//  *   This function is run after the DOM is rendered and loaded
//  */
// var topframe = window === window.top;
// var YT_Stop_Autoplay = YT_Stop_Autoplay || [],
//     LOG = false;

// YT_Stop_Autoplay.active = true;
// YT_Stop_Autoplay.focused = false;
// YT_Stop_Autoplay.enablejs = true;
// YT_Stop_Autoplay.embedded = true;
// YT_Stop_Autoplay.playlist = true;
// YT_Stop_Autoplay.unfocused = false;

// var check = function() {
//   var cond_1 = YT_Stop_Autoplay.active;
//   var cond_2 = topframe || (YT_Stop_Autoplay.embedded && !topframe);
//   return cond_1 && cond_2;
// };

// var onYouTubePlayerReady = function(e) {
//   YT_Stop_Autoplay.forEach(c => c(e))
// };

// YT_Stop_Autoplay.push(function(e) {
//   var pathname = document.location.pathname;
//   document.addEventListener('visibilitychange', function() {
//     if (check()) {
//       var visibility = document.visibilityState;
//       var focused = YT_Stop_Autoplay.focused && visibility === 'visible';
//       var unfocused = YT_Stop_Autoplay.unfocused && visibility === 'hidden';
//       if (focused) {
//         e.playVideo();
//         if (YT_Stop_Autoplay.unfocused === false) YT_Stop_Autoplay.focused = false;
//       }
//       if (unfocused) e.pauseVideo();
//     }
//   }, { passive: true });

//   if (pathname.startsWith('/user') || pathname.startsWith('/channel')) try {
//     if (LOG) console.error("0", YT_Stop_Autoplay);
//     if (check()) e.stopVideo();
//   } catch (e) {};

//   document.addEventListener('yt-page-data-fetched', function() {
//     if (LOG) console.error("1", YT_Stop_Autoplay);
//     var cond_1 = !YT_Stop_Autoplay.playlist;
//     var cond_2 = document.location.href.indexOf('&list=') !== -1;
//     var cond_3 = document.location.href.indexOf('&index=') !== -1;
//     if (cond_1 && cond_2 && cond_3) return;
//     if (check()) e.stopVideo();
//   }, { passive: true });
// });

// document.addEventListener('spfpartprocess', function(e) {
//   var flag = e.detail && e.detail.part && e.detail.part.data && e.detail.part.data.swfcfg;
//   if (flag) {
//     delete e.detail.part.data.swfcfg.args.ad3_module;
//     var cond_1 = !YT_Stop_Autoplay.playlist;
//     var cond_2 = document.location.href.indexOf('&list=') !== -1;
//     var cond_3 = document.location.href.indexOf('&index=') !== -1;
//     if (cond_1 && cond_2 && cond_3) return;
//     if (check()) {
//       if (LOG) console.error("2", YT_Stop_Autoplay);
//       e.detail.part.data.swfcfg.args.autoplay = '0';
//       e.detail.part.data.swfcfg.args.enablejs = YT_Stop_Autoplay.enablejs ? '1' : '0';
//     }
//   }
// }, { passive: true });

// (function(observe) {
//   observe(window, 'ytplayer', function(ytplayer) {
//     observe(ytplayer, 'config', function(config) {
//       if (config && config.args) {
//         if (check()) {
//           delete config.args.ad3_module;
//           if (LOG) console.error("3", YT_Stop_Autoplay);
//             "configurable": true,
//             get: () => '0'
//           });
//           config.args.fflags = config.args.fflags.replace("legacy_autoplay_flag=true", "legacy_autoplay_flag=false");
//           if (YT_Stop_Autoplay.enablejs) Object.defineProperty(config.args, 'enablejs', {
//             "configurable": true,
//             get: () => '1'
//           });
//           config.args.jsapicallback = 'onYouTubePlayerReady';
//         }
//       }
//     });
//   });
// })(function(object, property, callback) {
//   var value;
//   var descriptor = Object.getOwnPropertyDescriptor(object, property);
//   Object.defineProperty(object, property, {
//     "enumerable": true,
//     "configurable": true,
//     get: () => value,
//     set: (v) => {
//       callback(v);
//       if (descriptor && descriptor.set) descriptor.set(v);
//       value = v;
//       return value;
//     }
//   });
// });

// window.addEventListener('message', function(e) {
//   var flag = e.data && e.data.action === "storage-update";
//   if (flag) YT_Stop_Autoplay = Object.assign(YT_Stop_Autoplay, e.data.storage);
// }, { passive: true });

//[ °°° PLAYER °°° ]
var ytplayer
;
function getPlayer(node) {
    "use-strict";
    var player;

    if (node && node.type !== 'canplay') {
        player = node;
    } else if (this.hasOwnProperty('target')) {
        player = this.target.parentNode.parentNode;
    } else if (this.hasOwnProperty('parentNode')) {
        player = this.parentNode.parentNode;
    } else {
        player = document.querySelector('.html5-video-player') || document.getElementsByClassName("html5-video-player")[0];
    }

    //player = player || (window && window.ytplayer) || (unsafeWindow && unsafeWindow.ytplayer) || (window && window.yt) || (unsafeWindow && unsafeWindow.yt) || yt.player.Application || yt.player.Application.create || yt.player.Application.createAlternate || document.getElementById("movie_player") || document.getElementsByClassName("html5-video-player")[0];
    return player;
}
;
//getPlayer();
ytplayer = ytplayer || getPlayer() || (window && window.ytplayer) || (unsafeWindow && unsafeWindow.ytplayer) || (window && window.yt) || (unsafeWindow && unsafeWindow.yt) || yt.player.Application || yt.player.Application.create || yt.player.Application.createAlternate || document.getElementById("movie_player") || document.getElementsByClassName("html5-video-player")[0] || []; //getPlayer();

var tag = document.createElement('script');
//tag.src = "https://www.youtube.com/player_api"; // iframe_api
tag.src = "https://www.youtube.com/iframe_api";
tag.async = false;
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
;
//if(ytplayer){
//   var monelement = document.getElementById('movie_player');
//   var lieu = monelement.getAttribute('data-version');// Load the IFrame Player API code asynchronously.
//   console.log('player data-version',lieu);
//   // give https://www.youtube.com/s/player/a3726513/player_ias.vflset/fr_FR/base.js
//   monelement.removeAttribute('data-version');
//   monelement.setAttribute('data-version','');
//   console.log('player data-version after',lieu);
//}

var video_url = window.location.href; //document.getElementById('youtubediv').value;
function ytid(video_url){
    "use-strict";
    var VIDEO_ID = video_url.split('v=')[1];
    //   var ampersandPosition = VIDEO_ID.indexOf('&');
    //   if(ampersandPosition != -1) {
    //     VIDEO_ID = VIDEO_ID.substring(0, ampersandPosition);
    //   }
    return VIDEO_ID;
}
const YT_VIDEO_ID = ytid(video_url);
// if(video_url!=""){
//   var YT_VIDEO_ID = ytid(video_url);
//   var listVideo = document.getElementsByClassName("html5-video-container")[0];
//   for (var i = 0; i < listVideo.length; i++) {
//     // list[i] is a node with the desired class name
//     listVideo[i].setAttribute("src","https://www.youtube-nocookie.com/embed/"+ytid(video_url));
//   }
//   //document.getElementsByClassName("html5-video-container")[0].setAttribute("src","https://www.youtube-nocookie.com/embed/"+ytid(video_url));
// }
var YT = ytplayer, yt = ytplayer, ytcfg = {d: function() {return (yt && yt.config_) || (yt && yt.config) || ytcfg.data_ || (ytcfg.data_ = {});},get: function(k, o) {return (k in ytcfg.d()) ? ytcfg.d()[k] : o;},set: function() {var a = arguments;if (a.length > 1) {ytcfg.d()[a[0]] = a[1];} else {for (var k in a[0]) {ytcfg.d()[k] = a[0][k];}}}};
ytcfg.set('enableCsiLogging', "false");
ytplayer.config = {
    "args": {
        "enablejsapi"                       : "0"
        ,"enablecsi"                        : "0"
        ,"transparent_background"           : "1"
        ,"ps"                               : "desktop-polymer"
        ,"external_fullscreen"              : true
        //,"c"                                : "WEB"
        //,"show_miniplayer_button"           : "0"
        //,"use_miniplayer_ui"                : "0"
    }
};
// into console, enter :  ytplayer.web_player_context_config, ytplayer.web_player_context_config.serializedExperimentFlags, ...
ytplayer.web_player_context_config = {
    "enableCsiLogging"                   : false
    ,"transparentBackground"             : true
    ,"useFastSizingOnWatchDefault"       : false
    ,"showMiniplayerButton"              : true
    ,"externalFullscreen"                : true
    ,"showMiniplayerUiWhenMinimized"     : false
    ,"rootElementId"                     : "movie_player"
    ,"playerStyle"                       : "desktop-polymer"
    ,"serializedExperimentIds"           : ""
    ,"serializedExperimentFlags"         : "use_video_ad_break_offset_ms_int64=false&csi_on_gel=false&enable_ad_pod_specific_ui=false&use_ivar_to_extract_ad_video_id=false&autoplay_time=1000&condition_biscotti_fetch_on_consent_cookie_html5_clients=false&set_interstitial_advertisers_question_text=false&align_ad_to_video_player_lifecycle_for_bulleit=false&html5_enable_per_format_loudness=false&drop_overlay_ads_on_cba_violation=false&hide_preskip=false&html5_disable_aac_ac3=false&enable_eviction_protection_for_bulleit=false&ad_pod_disable_companion_persist_ads_quality=true&html5_ignore_start_seconds_for_ads_killswitch=false&release_player_on_abandon_for_bulleit_lr_ads_frontend=false&player_ads_set_adformat_on_client=false&condition_ad_status_fetch_on_consent_cookie_html5_clients=false&self_podding_midroll_choice_string_template=&html5_ads_preroll_lock_timeout_delay_ms=-1&bulleit_get_midroll_info_timeout_ms=-1"
};
// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.

// https://developers.google.com/youtube/player_parameters

/// https://www.youtube-nocookie.com/embed/watch?v=A7WZhoGRjMI&list=PU2fVSthyWxWSjsiEAHPzriQ&autoplay=1&egm=0&showinfo=0&rel=0&iv_load_policy=3&annotations=0&related=0&modestbranding=0&enablejsapi=0&enablecsi=0
/// https://www.youtube-nocookie.com/embed/watch?v=A7WZhoGRjMI&list=PU2fVSthyWxWSjsiEAHPzriQ&autoplay=1&amp;egm=0&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;annotations=0&amp;related=0&amp;modestbranding=0&amp;enablejsapi=0&amp;enablecsi=0
function onYouTubePlayerAPIReady() {
    "use-strict";
    ytplayer = new ytplayer('ytplayer', ytplayer.config, ytplayer.web_player_context_config, {
        playerVars : {
            rel              : 0
            ,annotations     : 0
            ,related         : 0
            ,showinfo        : 0
            ,egm             : 0
            ,showsearch      : 0
            ,controls        : 1
            ,disablekb       : 0
            ,modestbranding  : 0
            ,iv_load_policy  : 3 // 3 causes video annotations to not be shown by default. The default value is 1.
            ,cplayer         : 'UNIPLAYER'
            ,host            : 'https://www.youtube-nocookie.com'
            ,videoId         : `${YT_VIDEO_ID}`
      ,enablejsapi     : 1
            ,enablecsi       : 0
            ,html5           : 1
        },
        events : {
            'onReady'       : onPlayerReady
            ,'onStateChange' : onPlayerStateChange
        }
    })
    ;
    (function playerBootstrap() {
        var createPlayer = ytplayer && ytplayer.player && ytplayer.player.Application && (ytplayer.player.Application.createAlternate || ytplayer.player.Application.create);
        if (createPlayer) {
            createPlayer("ytplayer", ytplayer.config, ytplayer.web_player_context_config);
            ytplayer.config.loaded = true;
        }
    }())
    ;
    ytplayer.load = function () {
        throw new Error('Unexpected call to ytplayer.load.');
    }
    ;
}
window.onPlayerStateChange = function(event, element) {
    //When the video has ended
    if (event.data == ytplayer.PlayerState.ENDED) {
        //Get rid of the player
        element.style.display = "none";
    }
}
;
// No more youtube ads! (https://greasyfork.org/fr/scripts/407477-no-more-youtube-ads-updated/code)
// Automaticly Skips all youtube ads! with no waiting time.
(function() {
    'use strict';
    var closeAd=function (){
        var css = '.video-ads .ad-container .adDisplay,#player-ads,.ytp-ad-module,.ytp-ad-image-overlay{ display: none!important; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    };
    var skipInt;
    var log=function(msg){
        // unsafeWindow.console.log (msg);
    };
    var skipAd=function(){
        //ytp-ad-preview-text
        //ytp-ad-skip-button
        var skipbtn=document.querySelector(".ytp-ad-skip-button.ytp-button")||document.querySelector(".videoAdUiSkipButton ");
        //var skipbtn=document.querySelector(".ytp-ad-skip-button ")||document.querySelector(".videoAdUiSkipButton ");
        if(skipbtn){
            skipbtn=document.querySelector(".ytp-ad-skip-button.ytp-button")||document.querySelector(".videoAdUiSkipButton ");
            log("skip");
            skipbtn.click();
            if(skipInt) {clearTimeout(skipInt);}
            skipInt=setTimeout(skipAd,500);
        }else{
            log("checking...");
            if(skipInt) {clearTimeout(skipInt);}
            skipInt=setTimeout(skipAd,500);
        }
    };

    closeAd();
    skipAd();

})()
;
/// BLOCK ADS
/// https://chrome.google.com/webstore/detail/adblocker-for-youtube/naihbfkjlampnpbnohcehoedklmejhmh/related?hl=fr
///
(function noAnnotations(){
    /*
 * Name: Youtube Zero Annotations
 * Developer: China-Cheats
 *
 * Website: China-Cheats.com
 * All Rights Reserved
 * Credits to StackoverFlow for some of the Scripts used in this Extension.
 */

    var YTZero = function() {

        window.setTimeout(function() {
            YTPlayerAPI(true);
        }, 2500);
        window.setTimeout(function() {
            YTPlayerAPI(false);
        }, 3000);
        window.setTimeout(function() {
            YTPlayerAPI(false);
        }, 3500);

        function YTPlayerAPI() {
            // Avoid TypeError: Null or Undefiend
            var YTPlayer = document.getElementById("movie_player");
            if (typeof YTPlayer !== 'undefined' && YTPlayer !== null) {
                YTPlayer.addEventListener("onStateChange", "onPlayerStateChange");
            }
        }

        onPlayerStateChange = function(newState) {
            if (newState == "-1") {
                init();
            } //Video Unstarted!
            if (newState == "0") {
                init();
            } //Video Ended!
            if (newState == "1") {
                init();
            } //Video Playing!
            if (newState == "2") {
                init();
            } //Video Paused
            if (newState == "4") {
                init();
            } //Video Buffering!
            if (newState == "5") {
                init();
            } //Video Cued!
        }

        onStateChange = function(newState) {}

        init = function() {
            var settings_button = document.querySelector(".ytp-settings-button")
            if (typeof settings_button !== 'undefined' && settings_button !== null) {
                settings_button.click();
                settings_button.click();
            }
            var all_labels = document.getElementsByClassName("ytp-menuitem-label");
            for (var i = 0; i < all_labels.length; i++) {
                var txt = all_labels[i].textContent;
                if ((txt == "Annotations" || txt == "Aantekeninge" || txt == "Annotasiyalar" || txt == "Anotasi" || txt == "Anotasi" || txt == "Anotacions" || txt == "Poznámky" || txt == "Annoteringer" || txt == "Anmerkungen" || txt == "Märkused" || txt == "Anotaciones" || txt == "Anotaciones" || txt == "Oharpenak" || txt == "Mga Anotasyon" || txt == "##PART 2##" || txt == "Anotacións" || txt == "Napomene" || txt == "Izichasiselo" || txt == "Textaskýringar" || txt == "Annotazioni" || txt == "Ufafanuzi" || txt == "Piezīmes" || txt == "Komentarai" || txt == "Kommentárok" || txt == "Aantekeningen" || txt == "Annoteringer" || txt == "Izohlar" || txt == "Adnotacje" || txt == "Notas" || txt == "Anotações" || txt == "##PART 3##" || "Adnotări" || txt == "Shënime" || txt == "Anotácie" || txt == "Pripisi" || txt == "Merkinnät" || txt == "Annoteringar" || txt == "Chú thích" || txt == "Пояснения" || txt == "Аннотациялар" || txt == "Аннотациялар" || txt == "Прибелешки" || txt == "Тэмдэглэгээ" || txt == "Аннотацииv" || txt == "Напомене" || txt == "Анотації" || txt == "##PART 4##" || txt == "Σχολιασμοί" || txt == "Ծանոթագրություններ" || txt == "הערות" || txt == "تشریحات" || txt == "التعليقات التوضيحية" || txt == "حاشیه‌نویسی‌ها" || txt == "एनोटेशनहरू" || txt == "भाष्ये" || txt == "टिप्पणियां" || txt == "টিকা রচনা" || txt == "ਐਨੋਟੇਸ਼ਨਸ" || txt == "ઍનોટેશન્સ" || txt == "விரிவுரைகள்" || txt == "ఉల్లేఖనాలు" || txt == "ಟಿಪ್ಪಣಿಗಳು" || txt == "വ്യാഖ്യാനങ്ങൾ" || txt == "##PART 5##" || txt == "විවරණ" || txt == "คำอธิบายประกอบ" || txt == "ຄໍາ​ອະທິບາຍ​ປະກອບ" || txt == "မှတ်စာများ" || txt == "ანოტაციები" || txt == "ማብራሪያዎች" || txt == "ចំណារ​ពន្យល់" || txt == "注释" || txt == "註解" || txt == "註解" || txt == "アノテーション" || txt == "특수효과") && (all_labels[i].parentNode.getAttribute("aria-checked") == "true")) {
                    all_labels[i].click();
                }
            }
        };

    };
    document.body.appendChild(document.createElement("script"))
        .innerHTML = "(" + YTZero + ")()";

    function init() {
        var settings_button = document.querySelector(".ytp-settings-button");
        if (typeof settings_button !== 'undefined' && settings_button !== null) {
            settings_button.click();
            settings_button.click();
        }
        var all_labels = document.getElementsByClassName("ytp-menuitem-label");
        for (var i = 0; i < all_labels.length; i++) {
            var txt = all_labels[i].textContent;
            if ((txt == "Annotations" || txt == "Aantekeninge" || txt == "Annotasiyalar" || txt == "Anotasi" || txt == "Anotasi" || txt == "Anotacions" || txt == "Poznámky" || txt == "Annoteringer" || txt == "Anmerkungen" || txt == "Märkused" || txt == "Anotaciones" || txt == "Anotaciones" || txt == "Oharpenak" || txt == "Mga Anotasyon" || txt == "##PART 2##" || txt == "Anotacións" || txt == "Napomene" || txt == "Izichasiselo" || txt == "Textaskýringar" || txt == "Annotazioni" || txt == "Ufafanuzi" || txt == "Piezīmes" || txt == "Komentarai" || txt == "Kommentárok" || txt == "Aantekeningen" || txt == "Annoteringer" || txt == "Izohlar" || txt == "Adnotacje" || txt == "Notas" || txt == "Anotações" || txt == "##PART 3##" || "Adnotări" || txt == "Shënime" || txt == "Anotácie" || txt == "Pripisi" || txt == "Merkinnät" || txt == "Annoteringar" || txt == "Chú thích" || txt == "Пояснения" || txt == "Аннотациялар" || txt == "Аннотациялар" || txt == "Прибелешки" || txt == "Тэмдэглэгээ" || txt == "Аннотацииv" || txt == "Напомене" || txt == "Анотації" || txt == "##PART 4##" || txt == "Σχολιασμοί" || txt == "Ծանոթագրություններ" || txt == "הערות" || txt == "تشریحات" || txt == "التعليقات التوضيحية" || txt == "حاشیه‌نویسی‌ها" || txt == "एनोटेशनहरू" || txt == "भाष्ये" || txt == "टिप्पणियां" || txt == "টিকা রচনা" || txt == "ਐਨੋਟੇਸ਼ਨਸ" || txt == "ઍનોટેશન્સ" || txt == "விரிவுரைகள்" || txt == "ఉల్లేఖనాలు" || txt == "ಟಿಪ್ಪಣಿಗಳು" || txt == "വ്യാഖ്യാനങ്ങൾ" || txt == "##PART 5##" || txt == "විවරණ" || txt == "คำอธิบายประกอบ" || txt == "ຄໍາ​ອະທິບາຍ​ປະກອບ" || txt == "မှတ်စာများ" || txt == "ანოტაციები" || txt == "ማብራሪያዎች" || txt == "ចំណារ​ពន្យល់" || txt == "注释" || txt == "註解" || txt == "註解" || txt == "アノテーション" || txt == "특수효과") && (all_labels[i].parentNode.getAttribute("aria-checked") == "true")) {
                all_labels[i].click();
            }
        }
        $("iframe[src*='youtube.com'], embed[src*='youtube.com']")
            .each(function() {
            var url = $(this)
            .prop("src");
            if (url.search(/\?/) === -1) {
                $(this)
                    .prop("src", url + "?iv_load_policy=3&rel=0&showinfo=0&modestbranding=0&enablejsapi=1&enablecsi=0");
            } else {
                $(this)
                    .prop("src", url + "&iv_load_policy=3&rel=0&showinfo=0&modestbranding=0&enablejsapi=1&enablecsi=0");
            }
        });
    };

    init();
})();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// name:             YT DOWNLOADER
/// based on:         https://greasyfork.org/fr/scripts/411551-youtube-downloader-support-video-audio-subtitle-download
/// author:           K-mik@Z; https://greasyfork.org/fr/users/39823-k-mik-z
/// description:      Add a download button to YouTube.
///
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function ytDownloader() {
    "use-strict";

    if(!document.domain == "www.youtube.com") {
        return
    }
    else {

        /// Video analysis server
        var videoServer="y2mate.com";
        var videoServer2="y2mate.com";

        // https://www.cybrhome.com/website/y2mate.com/alternatives
        // https://2conv.org/fr/?url=https%3A%2F%2Fyoutu.be%2FUdQshRbiX0Q/    https://youtu.be/BKkJzCuV1IM  =>  partagez sous la video

        var junklist = "";
        if(videoServer){
            junklist = ".small,.navbar-nav.nav > li:not(.dropdown),.p-r-md.p-l-md.row-centered.row-bordered.row-padded.row,div.p-r-md.p-l-md.text-center.homepage-grid.row-bordered.row-padded.row,.p-r-md.p-l-md.m-t.text-center.homepage-grid.row-padded.row,.footer-borderless.clearfix.footer,[href*='https://y2mate.com/help/']{display:none!important}";
            //junklist = ".small,.navbar-nav.nav > li:not(.dropdown),.p-r-md.p-l-md.row-centered.row-bordered.row-padded.row,div.p-r-md.p-l-md.text-center.homepage-grid.row-bordered.row-padded.row,.p-r-md.p-l-md.m-t.text-center.homepage-grid.row-padded.row,.footer-borderless.clearfix.footer,[href*='https://y2mate.com/help/']";
            // .hero-homepage.hero > div:nth-of-type(2),.navbar-header,
            // .table-bordered.table > tbody > tr > .text-center
        }

        /// Get URL parameters
        var getQueryVariable = function (variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
            }
            return "";
        }

        /// Jump to the monitoring ID prefix of server 2
        var isLoadingServer2 = "__is_loading_server2_";

        /// YouTube script
        if(document.domain == "www.youtube.com") {
            /// Get the video key and analysis address
            var lng = 'fr';
            var getVideoUrl = function getVideoUrl(videoServerDomain){
                videoServerDomain = videoServerDomain || videoServer;
                var videoKey = getQueryVariable("v") || $("ytd-watch-flexy").attr("video-id");
                if(videoServer){
                    return "//"+videoServerDomain+"/"+lng+"/youtube-mp3/"+encodeURIComponent(videoKey);
                }
                if(videoServer2){
                    return "//"+videoServerDomain+"/"+lng+"/youtube/"+encodeURIComponent(videoKey);
                }
            }
            ;
            /// Start inserting button
            var downTimmer = null, dtcount=0;
            var insertButton = function(){
                if($("#wish_downloader").length > 0) return;
                if(downTimmer) clearTimeout(downTimmer);
                dtcount++;
                if(dtcount> 5000) return;
                var authorInfo = $("#top-row #upload-info.ytd-video-owner-renderer");
                //var titleInfo = $(".ytd-video-primary-info-renderer.style-scope.title > .ytd-video-primary-info-renderer.style-scope");
                //var likeInfo = $("#container > .ytd-video-primary-info-renderer.style-scope");
                //if(authorInfo.length > 0){

                if(authorInfo.length > 0){
                    // target="_blank"  replace with onclick="var o;o=window.open(this.href);if(o){o.opener=null;};if(window.focus){o.focus();};return !o;"
                    /// Text reminder
                    //authorInfo.after(`<a id="wish_downloader" href="`+getVideoUrl()+`" target="_blank" rel="noopener" style="width: 100px;height: 18px;background-color: rgb(0, 183, 90);color: white;text-align: center;padding: 8px 8px;margin: 0px 10px;font-size: 14px;border: 0px;cursor: pointer;border-radius: 2px;font-family: Roboto, Arial, sans-serif;text-decoration: none;margin-top: 9px;">${translate.downloading}</a>`);
                    //titleInfo.after(`<a id="wish_downloader" href="`+getVideoUrl()+`" target="_blank" rel="noopener" style="width: 100px;height: 18px;background-color: rgb(0, 183, 90);color: white;text-align: center;padding: 8px 8px;margin: 0px 10px;font-size: 14px;border: 0px;cursor: pointer;border-radius: 2px;font-family: Roboto, Arial, sans-serif;text-decoration: none;margin-top: 9px;">${translate.downloading}</a>`);
                    authorInfo.after(`<paper-button id="wish_downloader" href="`+getVideoUrl()+`" title="${translate.downloading} avec y2mate" rel="noopener noreferrer external" class="ytd-button-renderer style-destructive" style="padding: 8px 8px;margin: 0px 10px;max-width: fit-content;background-color: var(--yt-spec-10-percent-layer); color: var(--yt-spec-text-secondary); border-radius: 2px; padding: var(--yt-button-padding); margin: auto var(--ytd-subscribe-button-margin, 4px); white-space: nowrap; font-size: var(--ytd-tab-system_-_font-size); font-weight: var(--ytd-tab-system_-_font-weight); letter-spacing: var(--ytd-tab-system_-_letter-spacing); text-transform: var(--ytd-tab-system_-_text-transform); display: flex; flex-direction: row; cursor: pointer; --yt-formatted-string-deemphasize-color: var(--yt-spec-text-secondary); --yt-formatted-string-deemphasize_-_margin-left: 4px; --yt-formatted-string-deemphasize_-_display: initial;">${translate.downloading}</a>`);

                    /// Click the button to open the pop-up window
                    var count=0;
                    $("#wish_downloader").click(function(){
                        count++;
                        $(this).attr("href", getVideoUrl());
                        if(layer){
                            var title = $("h1.title.style-scope.ytd-video-primary-info-renderer").text();
                            layer.open({
                                type: 2
                                ,title: 'YT Downloader - ' + title
                                ,maxmin: true
                                ,shade : 0
                                ,area : ['800px' , '520px']
                                ,content: $(this).attr('href')+'&count='+count
                                ,id: 'YTDownloader'
                            });

                            /// Show loading
                            var loading = `<div class="layui-layer layui-layer-loading wish_loading0" type="loading" showtime="0" contype="string" style="z-index: 88888888;top: 50%;left: 50%;position: absolute;margin-left: -30px;margin-top: -12px;"><div id="" class="layui-layer-content layui-layer-loading0"></div><span class="layui-layer-setwin"></span></div>`;
                            $('.layui-layer.layui-layer-iframe:last').append(loading);
                            $('.layui-layer.layui-layer-iframe iframe').on('load', function() {
                                var me=$(this);
                                me.parent().parent().find(".wish_loading0").hide();
                            });
                            /// Dynamically change size when the window changes
                            $(".layui-layer-max").click(function() {
                                var me=$(this);
                                setTimeout(function(){me.parents(".layui-layer.layui-layer-iframe").find("iframe").height(me.parents(".layui-layer.layui-layer-iframe").height()-50);}, 100);
                            });
                            /// Multi-window display
                            var zIndex=$('.layui-layer.layui-layer-iframe:last').css("z-index");
                            $(".layui-layer-title").on('mousedown', function(){
                                var me=$(this);
                                me.parents(".layui-layer.layui-layer-iframe").css("z-index", zIndex++);
                            });
                            /// Monitor if it is jumping to server 2
                            GM_setValue(isLoadingServer2+count, 0);
                            var listener_id = GM_addValueChangeListener(isLoadingServer2+count, function(name, old_value, new_value, remote) {
                                if(new_value == 1){
                                    //server2 loading
                                    $(".layui-layer.layui-layer-iframe:last").find(".wish_loading0").show();
                                } else {
                                    //server2 loaded
                                    $(".layui-layer.layui-layer-iframe:last").find(".wish_loading0").css();
                                    GM_removeValueChangeListener(listener_id);
                                }
                            });


                            /// If the layer exists, open the pop-up window
                            return false;
                        } else {
                            /// If the layer does not exist, open a new window
                            return true;
                        }
                    });

                    /// Adjust popup style
                    var layermorecss = ".layui-layer.layui-layer-loading{position: absolute;top: 50%;left: 50%;margin-left: -30px;margin-top: -12px;}.layui-layer-shade{display:none;}.layui-layer-ico{background:url("+GM_getResourceURL("layericon")+") no-repeat;}.layui-layer-setwin .layui-layer-max {background-position: -32px -40px;}.layui-layer-setwin .layui-layer-close1 { background-position: 1px -40px; cursor: pointer; }.layui-layer-loading .layui-layer-content {     width: 60px;     height: 24px;     background: url("+GM_getResourceURL("layerloading")+") no-repeat; }";
                    GM_addStyle(GM_getResourceText("layercss") + layermorecss);

                    /// Ensure that the button is 100% inserted correctly
                    setTimeout(function(){
                        if($("#wish_downloader").length ===0){
                            insertButton();
                        }
                    }, 500);

                    /// Stop monitoring dom changes
                    setTimeout(function(){
                        if(observer) observer.disconnect();
                    }, 200);
                } else {
                    /// If it is not loaded, continue to wait and try again
                    downTimmer = setTimeout(function(){
                        insertButton();
                    }, 200);
                }
            };


            /// Monitor dom changes
            var observer = null, monitoringTimer = null, monitoringCount=0;
            var monitoringDOMChanges = function(){
                /// More than 100 attempts to exit
                monitoringCount++;
                if(monitoringCount > 100){
                    if(monitoringTimer) clearTimeout(monitoringTimer);
                    return;
                }
                /// Monitor content element loading
                var targetNode = document.getElementById("content");
                if(!targetNode){
                    if(monitoringTimer) clearTimeout(monitoringTimer);
                    monitoringTimer = setTimeout(function(){
                        monitoringDOMChanges();
                    }, 100);
                    return;
                }
                if(monitoringTimer) clearTimeout(monitoringTimer);

                var catched = false, MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                if(MutationObserver){
                    /// MutationObserver monitors dom changes
                    try{
                        var config = { attributes: false, childList: true, subtree: true };
                        var callback = function(mutationsList) {
                            if(location.href.toLowerCase().indexOf("www.youtube.com/watch") !== -1 && !catched){
                                catched = true;
                                insertButton();
                            }
                        };
                        observer = new MutationObserver(callback);
                        observer.observe(targetNode, config);
                    }catch(e){
                        if(observer) observer.disconnect();
                        if(console && console.log) console.log(e);
                    }
                } else {
                    /// Use events to monitor dom changes
                    var domChange = function(e) {
                        if(location.href.toLowerCase().indexOf("www.youtube.com/watch") !== -1 && !catched){
                            catched = true;
                            insertButton();
                            document.removeEventListener("DOMNodeInserted", domChange, false);
                        }
                    };
                    document.addEventListener("DOMNodeInserted", domChange, false, { passive: true });
                }
            }
            /// Start monitoring dom changes
            monitoringDOMChanges();

        }

        /// Video parsing server script
        if(document.domain === videoServer || document.domain === videoServer2){
            var parseTimer = null, ptcount=0;
            var parseVideo = function(){
                if(parseTimer) clearTimeout(parseTimer);
                ptcount++;
                if(ptcount> 10000) return;
                /// Page loaded
                var ourl = $('#url');
                if(ourl.length > 0){
                    var url = getQueryVariable("url");
                    if(url){
                        /// If server 2 is loaded, notify the parent window
                        var notifyStyle = "";
                        if(document.domain === videoServer2){
                            notifyStyle = "#notify1{display:none!important;}";
                            GM_setValue(isLoadingServer2 + getQueryVariable("count"), 0);
                        }
                        /// Hide extraneous elements on the page
                        GM_addStyle(notifyStyle/*+".title,#divURL,#log,#divFooter{display:none;}#divResult{padding-top:10px;}table td {background-color: #F7F7F7;}#recode{color: #fff;background: #28a745;padding: 9px 20px;}table th {background-color: #E3E3E3;}#divResult tr:hover td {background: none;}#divResult tr:hover {background: #E3E3E3;}"*/);

                        url=decodeURIComponent(url);
                        ourl.val(url);
                        $("form[name=parse]").submit();

                        /// FIXME: Try Hide extraneous elements on the page
                        // https://stackoverflow.com/questions/217776/how-to-apply-css-to-iframe
                        /// https://stackoverflow.com/questions/583753/using-css-to-affect-div-style-inside-iframe

                    }
                } else {
                    //没有加载完毕等待后继续尝试
                    parseTimer = setTimeout(function(){
                        parseVideo();
                    }, 100);
                }
            };
            //开始解析视频
            parseVideo();
        }
    }

})()
;
///////////////////////////////////////////////////////////////////////////////////
///
/// name:             Video Speed Buttons
/// author:           Braden Best; https://greasyfork.org/en/users/508-braden-best
/// description:      Add speed buttons to <video> element.
/// originally from:  https://greasyfork.org/en/scripts/30506-video-speed-buttons
///
///////////////////////////////////////////////////////////////////////////////////
(function videoSpeedButtons(){
    "use-strict";

    function video_speed_buttons(anchor, video_el){
        if(!anchor || !video_el)
            return null;

        const COLOR_SELECTED =        "var(--red-500)", //"var(--yt-paper-button-ink-color)",
              COLOR_NORMAL =          "var(--yt-spec-text-secondary)", //"grey",
              BUTTON_SIZE =           "120%",
              DEFAULT_SPEED =         1.0,
              LABEL_TEXT =            translate.videospeed,
              ALLOW_EXTERNAL_ACCESS = false;

        const BUTTON_TEMPLATES = [
            ["25%",           0.25],
            ["50%",            0.5],
            [translate.normal,   1],
            ["1.5x",           1.5],
            ["2x",               2],
            ["3x",               3],
            ["4x",               4],
            ["8x",               8],
            ["16x",             16]
        ];

        const buttons = {
            head:     null,
            selected: null,
            last:     null
        };

        //     const keyboard_controls = [
        //       ["-", "Speed Down", function(ev){
        //         if(is_comment_box(ev.target))
        //           return false;

        //         (buttons.selected || buttons.head)
        //           .getprev()
        //           .el
        //           .dispatchEvent(new MouseEvent("click"));
        //       }],
        //       ["+", "Speed Up", function(ev){
        //         if(is_comment_box(ev.target))
        //           return false;

        //         (buttons.selected || buttons.head)
        //           .getnext()
        //           .el
        //           .dispatchEvent(new MouseEvent("click"));
        //       }],
        //       ["*", "Reset Speed", function(ev){
        //         let selbtn = buttons.head;
        //         let result = null;

        //         if(is_comment_box(ev.target))
        //           return false;

        //         while(selbtn !== null && result === null)
        //           if(selbtn.speed === DEFAULT_SPEED)
        //             result = selbtn;
        //           else
        //             selbtn = selbtn.next;

        //         if(result === null)
        //           result = buttons.head;

        //         result.el.dispatchEvent(new MouseEvent("click"));
        //       }],
        //       ["?", "Show Help", function(ev){
        //         let infobox;

        //         if(is_comment_box(ev.target))
        //           return false;

        //         (infobox = Infobox(container))
        //           .log("Keyboard Controls (click to close)<br>");

        //         keyboard_controls.forEach(function([key, description]){
        //           infobox.log(`    [${key}]  ${description}<br>`);
        //         });
        //       }]
        //     ];

        var container = (function(){
            let div = document.createElement("div");
            let prev_node = null;

            div.className = "vsb-container";
            div.style.borderBottom = "1px solid #ccc";
            div.style.marginBottom = "10px";
            div.style.paddingBottom = "10px";
            div.style.maxWidth = "fit-content";
            div.style.maxHeight = "fit-content";
            div.appendChild(SpeedButtonLabel(LABEL_TEXT));

            BUTTON_TEMPLATES.forEach(function(button){
                let speedButton = SpeedButton(...button, div);

                if(buttons.head === null)
                    buttons.head = speedButton;

                if(prev_node !== null){
                    speedButton.prev = prev_node;
                    prev_node.next = speedButton;
                }

                prev_node = speedButton;

                if(speedButton.speed == DEFAULT_SPEED)
                    speedButton.select();
            });

            return div;
        })();

        function is_comment_box(el){
            const candidate = [
                ".comment-simplebox-text",
                "textarea"
            ].map(c => document.querySelector(c))
            .find(el => el !== null);

            if(candidate === null){
                logvsb("video_speed_buttons::is_comment_box", "no candidate for comment box. Assuming false.");
                return 0;
            }

            return el === candidate;
        }

        function Infobox(parent){
            let el = document.createElement("pre");

            el.style.font = "1em monospace";
            el.style.borderTop = "1px solid #ccc";
            el.style.marginTop = "10px";
            el.style.paddingTop = "10px";

            el.addEventListener("click", function(){
                parent.removeChild(el);
            }, { passive: true });

            parent.appendChild(el);

            function log(msg){
                el.innerHTML += msg;
            }

            return {
                el,
                log
            };
        }

        function setPlaybackRate(el, rate){
            if(el)
                el.playbackRate = rate;
            else
                logvsb("video_speed_buttons::setPlaybackRate", "video element is null or undefined", 1);
        }

        function SpeedButtonLabel(text){
            let el = document.createElement("span");

            el.innerHTML = text;
            el.style.marginRight = "10px";
            el.style.fontWeight = "bold";
            el.style.fontSize = BUTTON_SIZE;
            el.style.color = COLOR_NORMAL;

            return el;
        }

        function SpeedButton(text, speed, parent){
            let el = SpeedButtonLabel(text);
            let self;

            el.style.cursor = "pointer";

            el.addEventListener("click", function(){
                setPlaybackRate(video_el, speed);
                self.select();
            }, { passive: true });

            parent.appendChild(el);

            function select(){
                if(buttons.last !== null)
                    buttons.last.el.style.color = COLOR_NORMAL;

                buttons.last = self;
                buttons.selected = self;
                el.style.color = COLOR_SELECTED;
            }

            function getprev(){
                if(self.prev === null)
                    return self;

                return buttons.selected = self.prev;
            }

            function getnext(){
                if(self.next === null)
                    return self;

                return buttons.selected = self.next;
            }

            return self = {
                el,
                text,
                speed,
                prev:  null,
                next:  null,
                select,
                getprev,
                getnext
            };
        }

        function kill(){
            anchor.removeChild(container);
            //       document.body.removeEventListener("keydown", ev_keyboard);
        }

        function set_video_el(new_video_el){
            video_el = new_video_el;
        }

        //     function ev_keyboard(ev){
        //       let match = keyboard_controls.find(([key, unused, callback]) => key === ev.key);
        //       let callback = (match || {2: ()=>null})[2];

        //       callback(ev);
        //     }

        setPlaybackRate(video_el, DEFAULT_SPEED);
        anchor.insertBefore(container, anchor.firstChild);
        //     document.bodyev_keyboard.addEventListener("keydown", ev_keyboard);

        return {
            //       controls: keyboard_controls,
            buttons,
            kill,
            SpeedButton,
            Infobox,
            setPlaybackRate,
            is_comment_box,
            set_video_el,
            ALLOW_EXTERNAL_ACCESS,
        };
    }

    video_speed_buttons.from_query = function(anchor_q, video_q){
        return video_speed_buttons(
            document.querySelector(anchor_q),
            document.querySelector(video_q));
    }

    // Multi-purpose Loader (defaults to floating on top right)
    const loader_data = {
        container_candidates: [
            "div#container.ytd-video-primary-info-renderer",
            "div#watch-header",
            "div#watch7-headline",
            "div#watch-headline-title",
        ],

        css_div: [
            "position:    fixed",
            "top:         0",
            "right:       0",
            "zIndex:      100000",
            "background:  rgba(0, 0, 0, 0.8)",
            "color:       #eeeeee",
            "padding:     10px"
        ].map(rule => rule.split(/: */)),

        css_vsb_container: [
            "borderBottom:    none",
            "marginBottom:    0",
            "paddingBottom:   0",
        ].map(rule => rule.split(/: */))
    };

    function logvsb(where, msg, lvl = 0){
        let logf = (["info", "error"])[lvl];

        console[logf](`[vsb::${where}] ${msg}`);
    }

    function loader_loop(){
        let vsbc = () => document.querySelector(".vsb-container");
        let candidate;
        let default_candidate;
        let vsb_handle;

        if(vsbc() !== null)
            return;

        candidate = loader_data
            .container_candidates
            .map(candidate => document.querySelector(candidate))
            .find(candidate => candidate !== null);

        default_candidate = (function(){
            let el = document.createElement("div");

            loader_data.css_div.forEach(function([name, value]){
                el.style[name] = value; });

            return el;
        }());

        vsb_handle = video_speed_buttons(candidate || default_candidate, document.querySelector("video"));

        if(candidate === null){
            logvsb("loader_loop", "no candidates for title section. Defaulting to top of page.");
            document.body.appendChild(default_candidate);

            loader_data.css_vsb_container.forEach(function([name, value]){
                vsbc().style[name] = value;
            });
        }

        /*if(vsb_handle.ALLOW_EXTERNAL_ACCESS)
            window.vsb = vsb_handle;*/
    }

    setInterval(function(){
        // if(document.readyState === "complete")
        setTimeout(loader_loop, 1000);
    }, 1000); // Blame YouTube for this

})()
;
////////////////////////////////////////////////////////////////////////////////////////////
///
/// name:             Youtube Screenshot Button
/// author:           Riophae Lee; https://greasyfork.org/en/users/64491-riophae
/// description:      Adds a button that enables you to take screenshots for YouTube videos.
/// originally from:  https://greasyfork.org/en/scripts/402659-youtube-screenshot-button
/// license:          MIT license; https://opensource.org/licenses/mit-license.php
///
////////////////////////////////////////////////////////////////////////////////////////////
(function screenshot() {
    "use-strict";
    let currentUrl = document.location.href;
    let isPlaylist = currentUrl.includes("playlist");

    // Types inspired by
    // https://github.com/Microsoft/TypeScript/blob/9d3707d/src/lib/dom.generated.d.ts#L10581
    // Type predicate for TypeScript
    function isQueryable(object) {
        return typeof object.querySelectorAll === 'function';
    }
    function select(selectors, baseElement) {
        // Shortcut with specified-but-null baseElement
        if (arguments.length === 2 && !baseElement) {
            return null;
        }
        return (baseElement !== null && baseElement !== void 0 ? baseElement : document).querySelector(String(selectors));
    }
    function selectLast(selectors, baseElement) {
        // Shortcut with specified-but-null baseElement
        if (arguments.length === 2 && !baseElement) {
            return null;
        }
        const all = (baseElement !== null && baseElement !== void 0 ? baseElement : document).querySelectorAll(String(selectors));
        return all[all.length - 1];
    }
    /**
     * @param selectors      One or more CSS selectors separated by commas
     * @param [baseElement]  The element to look inside of
     * @return               Whether it's been found
     */
    function selectExists(selectors, baseElement) {
        if (arguments.length === 2) {
            return Boolean(select(selectors, baseElement));
        }
        return Boolean(select(selectors));
    }
    function selectAll(selectors, baseElements) {
        // Shortcut with specified-but-null baseElements
        if (arguments.length === 2 && !baseElements) {
            return [];
        }
        // Can be: select.all('selectors') or select.all('selectors', singleElementOrDocument)
        if (!baseElements || isQueryable(baseElements)) {
            const elements = (baseElements !== null && baseElements !== void 0 ? baseElements : document).querySelectorAll(String(selectors));
            return Array.apply(null, elements);
        }
        const all = [];
        for (let i = 0; i < baseElements.length; i++) {
            const current = baseElements[i].querySelectorAll(String(selectors));
            for (let ii = 0; ii < current.length; ii++) {
                all.push(current[ii]);
            }
        }
        // Preserves IE11 support and performs 3x better than `...all` in Safari
        const array = [];
        all.forEach(function (v) {
            array.push(v);
        });
        return array;
    }
    select.last = selectLast;
    select.exists = selectExists;
    select.all = selectAll;

    var noop2 = noop;

    // no operation
    // null -> null
    function noop() {}

    function memoize(fn) {
        let value;

        return () => {
            if (fn) {
                value = fn();

                if (value != null) {
                    fn = null;
                }
            }

            return value
        }
    }

    function generateButtonHtml(buttonId, buttonSvg) {
        return `<button id="${buttonId}" class="ytp-button" aria-haspopup="false" draggable="false">${buttonSvg}</button>`
    }

    function generateMenuHtml(menuId, menuItemGenerator, menuItems) {
        return `
<div id="${menuId}" class="ytp-popup ytp-settings-menu" style="display: none">
  <div class="ytp-panel">
    <div class="ytp-panel-menu" role="menu">
      ${menuItems.map(menuItemGenerator).join('')}
</div>
  </div>
</div>
`
    }

    function getEdgePosition() {
        return parseInt(getChromeBottom().style.left, 10)
    }

    function triggerMouseEvent(element, eventType) {
        const event = new MouseEvent(eventType);

        element.dispatchEvent(event);
    }

    const getChromeBottom = memoize(() => select('.ytp-chrome-bottom'));
    const getSettingsButton = memoize(() => select('.ytp-button.ytp-settings-button'));
    const getTooltip = memoize(() => select('.ytp-tooltip.ytp-bottom'));
    const getTooltipText = memoize(() => select('.ytp-tooltip-text'));

    var createYoutubePlayerButton = opts => {
        const {
            buttonTitle,
            buttonId,
            buttonSvg,

            hasMenu = false,
            menuId,
            menuItemGenerator,
            menuItems,

            onClickButton = noop2, // optional
            onRightClickButton = noop2, // optional
            onShowMenu = noop2, // optional
            onHideMenu = noop2, // optional
        } = opts;

        const isRightClickButtonBound = onRightClickButton !== noop2;

        let isMenuOpen = false;
        let justOpenedMenu = false;
        let isTooltipShown = false;

        const controls = select('.ytp-right-controls');
        controls.insertAdjacentHTML('afterbegin', generateButtonHtml(buttonId, buttonSvg));

        if (hasMenu) {
            const settingsMenu = select('.ytp-settings-menu');
            const menuHtml = generateMenuHtml(menuId, menuItemGenerator, menuItems);

            settingsMenu.insertAdjacentHTML('beforebegin', menuHtml);
        }

        const button = document.getElementById(buttonId);
        const menu = hasMenu ? document.getElementById(menuId) : null;
        const innerMenu = hasMenu ? select(`#${menuId} .ytp-panel-menu`) : null;

        button.addEventListener('click', () => {
            if (hasMenu && !isMenuOpen) {
                justOpenedMenu = true;

                hideTooltip(true);
                showMenu();
            }

            onClickButton();
        }, { passive: true });

        button.addEventListener('contextmenu', event => {
            if (hasMenu) {
                hideMenu();
            }

            if (isRightClickButtonBound) {
                event.preventDefault();
                event.stopPropagation();

                showTooltip();
                onRightClickButton();
            } else {
                hideTooltip();
            }
        }, { passive: true });

        button.addEventListener('mouseenter', () => {
            if (!(hasMenu && isMenuOpen)) {
                showTooltip();
            }
        }, { passive: true });

        button.addEventListener('mouseleave', () => {
            if (!(hasMenu && isMenuOpen)) {
                hideTooltip();
            }
        }, { passive: true });

        if (hasMenu) {
            window.addEventListener('click', () => {
                if (!justOpenedMenu) {
                    hideMenu();
                }

                justOpenedMenu = false;
            }, { passive: true });

            window.addEventListener('blur', () => {
                hideMenu();
            }, { passive: true });
        }

        function showTooltip() {
            if (isTooltipShown) return
            isTooltipShown = true;

            triggerMouseEvent(getSettingsButton(), 'mouseover');
            getTooltipText().textContent = buttonTitle;
            adjustTooltipPosition();
        }

        function adjustTooltipPosition() {
            const calculateNormal = () => {
                getTooltip().style.left = '0';

                const offsetParentRect = getTooltip().offsetParent.getBoundingClientRect();
                const tooltipRect = getTooltip().getBoundingClientRect();
                const buttonRect = button.getBoundingClientRect();

                const tooltipHalfWidth = tooltipRect.width / 2;
                const buttonCenterX = buttonRect.x + buttonRect.width / 2;
                const normal = buttonCenterX - offsetParentRect.x - tooltipHalfWidth;

                return normal
            };

            const calculateEdge = () => {
                const offsetParentRect = getTooltip().offsetParent.getBoundingClientRect();
                const tooltipRect = getTooltip().getBoundingClientRect();
                const edge = offsetParentRect.width - getEdgePosition() - tooltipRect.width;

                return edge
            };

            getTooltip().style.left = Math.min(calculateNormal(), calculateEdge()) + 'px';
        }

        function hideTooltip(immediate = false) {
            if (!isTooltipShown) return
            isTooltipShown = false;

            triggerMouseEvent(getSettingsButton(), 'mouseout');

            if (immediate) {
                getTooltip().style.display = 'none';
            }
        }

        function showMenu() {
            if (isMenuOpen) return
            isMenuOpen = true;

            menu.style.opacity = '1';
            menu.style.display = '';

            const { offsetWidth: width, offsetHeight: height } = innerMenu;

            setMenuSize(width, height);
            adjustMenuPosition();

            onShowMenu();
        }

        function setMenuSize(width, height) {
            width += 'px';
            height += 'px';

            Object.assign(innerMenu.parentElement.style, { width, height });
            Object.assign(menu.style, { width, height });
        }

        function adjustMenuPosition() {
            menu.style.right = '0';

            const menuRect = menu.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();

            const menuCenterX = menuRect.x + menuRect.width / 2;
            const buttonCenterX = buttonRect.x + buttonRect.width / 2;
            const diff = menuCenterX - buttonCenterX;

            menu.style.right = Math.max(diff, getEdgePosition()) + 'px';
        }

        function hideMenu() {
            if (!isMenuOpen) return
            isMenuOpen = false;

            menu.style.opacity = '0';
            menu.addEventListener(
                'transitionend',
                event => {
                    if (event.propertyName === 'opacity' && menu.style.opacity === '0') {
                        menu.style.display = 'none';
                        menu.style.opacity = '';
                    }
                },
                { once: true , passive: true },
            );

            onHideMenu();
        }
    };

    const hasLoaded = () => document.readyState === 'interactive' || document.readyState === 'complete';

    const domLoaded = new Promise(resolve => {
        if (hasLoaded()) {
            resolve();
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                resolve();
            }, {
                capture: true,
                once: true,
                passive: true
            });
        }
    });

    Object.defineProperty(domLoaded, 'hasLoaded', {
        get: () => hasLoaded()
    });

    var domLoaded_1 = domLoaded;

    const TIMEOUT = 15 * 1000;

    let readyTime = 0;

    //domLoaded_1.then(() => readyTime = Date.now());

    var tolerantElementReady = selector => new Promise(resolve => {
        const check = () => {
            const element = document.querySelector(selector);

            if (element) {
                return resolve(element)
            }

            if (readyTime && readyTime - Date.now() > TIMEOUT) {
                return resolve()
            }

            requestAnimationFrame(check);
        };

        check();
    });



    // Based on work by Amio:
    // https://github.com/amio/youtube-screenshot-button
    // (c) MIT License
    const BUTTON_ID = 'youtube-screenshot-button';
    const isEmbed = window.location.pathname.startsWith('/embed/');

    const anchorCacheMap = {};

    function getAnchor(key, initializer) {
        // eslint-disable-next-line no-prototype-builtins
        if (anchorCacheMap.hasOwnProperty(key)) {
            return anchorCacheMap[key]
        }

        const anchor = anchorCacheMap[key] = document.createElement('a');

        anchor.hidden = true;
        anchor.style.position = 'absolute';
        initializer && initializer(anchor);
        document.body.appendChild(anchor);

        return anchor
    }

    function createScreenshotBlobUrlForVideo(video) {
        return new Promise(resolve => {
            const canvas = document.createElement('canvas');
            canvas.width = video.clientWidth;
            canvas.height = video.clientHeight;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(blob => {
                const blobUrl = URL.createObjectURL(blob);
                resolve(blobUrl);

                setTimeout(() => {
                    URL.revokeObjectURL(blobUrl);
                }, 60 * 1000);
            });
        })
    }

    function openInNewTab(blobUrl) {
        // Older versions of Greasemonkey (3.x) have both GM_openInTab and GM.openInTab.
        // Newer versions of Greasemonkey (4.x) seem have deleted GM_openInTab, which
        // allows opening blob: urls while GM.openInTab don't.
        // GM.openInTab is too strict even base64 urls are not allowed.
        // So we prefer GM_openInTab whenever available.

        // eslint-disable-next-line camelcase
        if (typeof GM_openInTab === 'function') {
            // eslint-disable-next-line new-cap
            GM_openInTab(blobUrl, false);
        } else {
            // eslint-disable-next-line no-shadow
            const anchor = getAnchor('open_in_new_tab', anchor => {
                anchor.target = '_blank';
            });

            anchor.href = blobUrl;
            // A popup may be blocked by the browser. Make sure to allow it.
            // Another reason why GM_openInTab is preferred.
            anchor.click();
        }
    }

    function download(blobUrl) {
        const anchor = getAnchor('download');

        anchor.href = blobUrl;
        anchor.download = getFileName();
        anchor.click();
    }

    function getFileName() {
        const videoTitle = getVideoTitle();
        const videoTime = formatVideoTime(getVideoCurrentTime()).join('-');
        // The file name may contain invalid characters for the file system.
        // We don't need to handle that ourself, the browser will do.
        const fileName = [
            'youtube-video-screenshot',
            `[${videoTitle}]`,
            videoTime,
        ].join(' ') + '.png';

        return fileName
    }

    function getVideoTitle() {
        const titleElement = isEmbed
        ? _$$('.ytp-title-link')
        : _$$('ytd-video-primary-info-renderer h1.title yt-formatted-string');
        const videoTitle = titleElement && titleElement.textContent.trim();

        return videoTitle
    }

    function getVideoCurrentTime() {
        const videoElement = isEmbed
        ? _$$('.html5-video-container video')
        : _$$('#ytd-player video');
        const videoCurrentTime = videoElement
        ? videoElement.currentTime
        : NaN;

        return videoCurrentTime
    }

    // The video that is claimed to be the longest on YouTube:
    // https://youtu.be/04cF1m6Jxu8
    // Use it to test how this code handles the time in different situations.
    function formatVideoTime(totalSeconds) {
        // Remove the decimal part (milliseconds).
        // e.g. 90.6 -> 90
        let m = Math.floor(totalSeconds);
        let n;

        // Do the time format conversion.
        let result = [ 60, 60, 24 ].map(factor => {
            n = m % factor;
            m = (m - n) / factor;
            return n
        });
        result.push(m);
        result.reverse();
        // result => [ day, hour, minute, second ]

        // Omit day or hour if 0.
        // The minute is always kept even if 0.
        // e.g.:
        //   [ 0, 0 ]
        //   [ 2, 30 ]
        //   [ 1, 10, 45 ]
        //   [ 4, 0, 50, 15 ]
        while (result.length > 2 && result[0] === 0) {
            result.shift();
        }

        // Left-pad 0 to all numbers but the first (same as YouTube).
        // e.g.:
        //   [ "0", "00" ]
        //   [ "1", "00", "00" ]
        //   [ "1", "00", "00", "00" ]
        result = result.map((number, index) => {
            return index > 0 && number < 10
                ? `0${number}`
          : String(number)
        });

        return result
    }

    async function mainButtonScreenshot() {
        const existingButton = document.getElementById(BUTTON_ID);

        if (existingButton) {
            console.info('Screenshot button already injected.');
            return
        }

        const [ video, controls ] = await Promise.all([
            tolerantElementReady('.html5-main-video'),
            tolerantElementReady('.ytp-right-controls'),
        ]);

        if (!(video && controls)) {
            return
        }

        //    var BUTTON_SVG = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#fff' viewBox='0 0 20 20' style='transform: scale(0.90)' height='20' width='20'>" +
        //                     "    <circle cx='13' cy='10' r='3.5'/>" +
        //                     "        <path d='M0 4v12h20V4H0z M7 7H1V5h6V7z M13 15c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5S15.8 15 13 15z'/>" +
        //                     "    </svg>"
        const SCREENSHOT_BUTTON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" height="100%" width="100%" viewBox="0 0 220 201" fill="#fff" style="transform: scale(0.50)"><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAC1CAMAAACecmipAAABfGlDQ1BpY2MAACiRfZE9SMNAHMVf U7VqKw52EHHIUJ0siIo4ahWKUCHUCq06mFz6BU0akhQXR8G14ODHYtXBxVlXB1dBEPwAcXJ0UnSR Ev+XFFrEenDcj3f3HnfvAKFWYprVMQ5oum0m4zExnVkVA68IIoQedCEoM8uYk6QE2o6ve/j4ehfl We3P/Tn61KzFAJ9IPMsM0ybeIJ7etA3O+8RhVpBV4nPiMZMuSPzIdcXjN855lwWeGTZTyXniMLGY b2GlhVnB1IiniCOqplO+kPZY5bzFWStVWOOe/IWhrL6yzHWaw4hjEUuQIEJBBUWUYCNKq06KhSTt x9r4h1y/RC6FXEUwciygDA2y6wf/g9/dWrnJCS8pFAM6XxznYwQI7AL1quN8HztO/QTwPwNXetNf rgEzn6RXm1rkCOjfBi6um5qyB1zuAINPhmzKruSnKeRywPsZfVMGGLgFete83hr7OH0AUtRV4gY4 OARG85S93ubd3a29/Xum0d8P5M1ybgQP/ykAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADq YAAAOpgAABdwnLpRPAAAADNQTFRFAAAg19fXx8fHsbGxq6urubm5wcHB5OTk////8PDw3t7e+fn5 6enpzs7O+/v75+fnAAAgIfrdPgAAAAF0Uk5TAEDm2GYAAAABYktHRACIBR1IAAAACXBIWXMAAC4j AAAuIwF4pT92AAAAB3RJTUUH5AsMDAgCU8pv3QAAG2N6VFh0UmF3IHByb2ZpbGUgdHlwZSBleGlm AABoga2baZIcN5KF/+MUcwRsjuU4WM3mBnP8+R6yKEpUUd09NsUWkxWZGRHw5S2OaHf+57+v+y9+ SgnZZaut9FI8P7nnHgf/aP7z83kNPr+/38/5euX3vxx3077eiBxKvKbPr+V8fX5w3H5+oeav4/Ov x11dX+dpXyf6ccX4eUm6sv69v27y60Qpfo6Hr99d//rCKH9aztd/cX2d9uvkv/6eK8HYxvlSdPGk kPz7O36ulD7/DY6E93fkg+Ed8anyd07h7/Fzf4TumwCu/X38/I87Sz/D8TnRj2WVX+L0dTzYL8d/ nFBR+vMdhfj1kfjzDf3MHX4Uwt/id+9u957P6kYujnCVr0X9WOL7Fx+chDO9rxX+VP4z/l3fn86f 5odfZG2z1On85JceItG8IYcdRrjhvNcVFreY44mV1xhXTO9YSzX2uJJSkPUn3Fhd6mmnRp4WmUsc jn/cS3jX7boeF2tcmaWSw8DJyOVf/7hfD/xf//zlRPeqzENQMEl9+CQ4qr64DWVOf/MpEhLuV0zt xTe4z4v/9UeJTWTQXpgbCxx+fk4xLfysrfTynLw5Ppr9p19C3V8nIERc27gZqjsHX0KyUIKvMdYQ iGMjP4M7jynHSQaCOYubu4w5pUJyWtS1+U4N77PR4ucw8EIiLBWapJGgQbJytlzot0YJDWfJspkV q9as2yip5GKllFqEU6OmmqvVUmtttdfRUsvNWmm1tdbb6LEnYMxcL7321nsfg4uOPDjX4PODAzPO NPO0WWadbfY5FuWz8rJVVl1t9TV23GkDAW6XXXfbfY8TDqV08rFTTj3t9DMutXbTzdduufW22+/4 I2tfWf1r1n7N3D9nLXxlLb5E6XP1Z9Y4XOuPUwTBiSlnZCzmQMarMiBwUs58CzlHZU458z0ml5JF 7tKUnB2UMTKYT4h2wx+5+5m53+bNEd3/NG/xu8w5pe7/I3NOqftT5v6et2+ytseD2/QSpC4kpiBk ov34wGkjtiFe+s3rMO7L+rnljKhbbH3wqxXPAhvdb62fbcHq7HR/JvJzXdZ92yQN4/bkWa/NXEJv acy+/D4VLgqTNIN0Lc253Wg+zXa91RW4t8N1Sot15+Ftm9Cx9ZzG3ovQmT85pGm5nTTqJoyLv4hk o2n9GOnDMHlmODjZSblTPjtY89cCnzt7VOtpllNmpjqvpdAGJ+Tzlu8h3i5BBXWVfYnUgRlGuiSK BQIZvM+7Ojjr+47xnT2DPttvbun++EYqblVOtKPXm/OWOAhXpkC/zhd5O/08IRXFkvrKNYVNIfAL 6/VjJqcr5VA75XdZal9TledH3uWmKJ2TauiUKz0ewl6ooFlXnrfFSXGfvusdRNaVHm3YWnRTMWqv tlV7vuQoNfOJuPvUwyq1E7wDXNIzqobbvIFnieYS4yQHJjZSQTlfwtb2Pr7a9ftS+2fMkhuVTMMX 2IGO8ZNGaFy86f5T91xgswRiRKVwk/9QiN+8jtyK76yo0HGeOrTubDbKYueZwh2STUF533a6wu/3 XLZHX4FWC0QxGnRJ6RZh/rjNxL0ATXEVLVT3mKP3ekvdl1XWcFjcKLmfRfVQqFyDpNRuXOT0MSn/ S9MuPpl3Z5nLjVdBK1PK6SiGO9+y06obICHpsVD6jbpagEg53KCdCEpuymx3i7nT/6sd58+mAhIH 7slprxb2mQcs8Df3WfXCsneKSDzSXXaIq4w5e5/SLDrTuGle13K9pGKiT2Y6dOeIsW9g0pfIOqmL 7kFCsEy8OrpPqa+bA1WSaJX8Iw3uP8jXqeqlEyoVH4DLUujKOSeayJK7aRQiCh+vhDTKh+UF0jHB 8qmOGkTvFESPZTK+Ty6NOyWP8XX0WSLNQ/pvHRvsvUTxAup1Et8LC5yJ3oIABm2xaMW8KPd84A6p kwHqw1GUPblcVZV9ZhdCTiCaKwguWcAAMjpo21OqyqpERKAr6ODiEY8xkoUJUt3Pu9m7cAoQATqt DhrocNuR01S1bx+1jF42HVc2RbORbXMXzkCRrFBPzGjE1Pa57uYyeaNkv6jwDBLGa+vshYQ/l0Kn 8AEWk1n4+WpnbmC4YnH2uq2d4loyrjFSbeBiuGklAhgGMb+bWu93J9C4pNtC4mt0yom3NOJ/uPqG YRZIc5MLEQnLKmPjHkD5BGKopckG34KSaJa6KBmVNvlYeyNZKeK+8DelACoqgOEQCHv141XprIYA jNZKaAc8aYeFBYuRvkEeA/XqOGQ5wEh5xUH1HkHkSBteW4i2ZH1bOhfOA9jzGGusBFqEcIYMFrJA EQK2f/fq/tUHfn3NNSIZ82kGuO2wc+N6yS93PZVFOQ4wEvOXljofFUVRpAswzVZn4MZ6rWdgzRb9 JzhpKV0gXfJo03XHUY50YQ12CWhbcK2p0kk9oalGjSBraAguqsYAfAGoC+pv2HjcaWcIkodLu5Vp pQFCgDB3iZqCiBBRMZ4qRCfD5OJwdW60EnzKj7jeVgVlLZ7ZWoSyDU0Da8yN1ocmbsq13QPYtxXA MW6tabG2gjDSAEcINapZWHqh0GVk6naNmkI+wao0eUjbg13Iw7RBJ+4VrKUiF9CUJ/8QKe6QIK4N Yc3Af1RNoINJ/13NKkV9CAKoQ8P5joqaCAjq1Chd0kSsC+uYl/qdAOcBnbk1+pxCOmtmTmQFPiNv 4CjAQXChgCyoAScbJoJSPRn2ws9TuoN+YvmXivVz0XBwCXGYj2lRGlrmQtnB7wjQSNB4cwtSLgAl ugTzgSetBcpVqYN2YDtirZCo4lQMoFflKIukk4BL/ltyn574YXWWCgJjuCl4TyNXtP7lBjjPodpS CrWg/LdIHAaG4SeMBrPMVTJCaFEhIvmpCKNTdi6rECC0MJZ0DOJGZrn8jmNth4CDRVg0y0oAxT5I j1k7QFTQy5d02kqFO2oSE8hk+0vncBaK8gwXBIMUatlSd+gZvjIJEAYaLPLwQIfn8GmLGmqE7Y4C U/cmNlziDXAlXnqt75XuRv4GBK+wRMWNowOHAwU6roQOfec3xL6Bc4MIEZSqu4QY7QUmaNFd+peO QpIgmRLYNydyF+KCdbjVmToLTXDRjmg0nEX0fD/eah4MB051y+VEB/bPpRYn96oXfoeTVBNxIRIE esJD3R7OALFGYYYhSuA8aDZoosTVtoNwaFWMzLxBzVaEjmAAUZz0GMBLtYKFgRZsKLCETSiIfCSm gcliA3RWrG4VeLFJGRhCPcf7FC3dCEhRdbT06ZpNEFgcyp5QwoFCUf7HUoQVQCg6+DofgRkD+Rp3 Agkj/anckt6liAHi92wqlrrYawFBbRPBErvqOGzOjG9ioS5qgpIutYsux4VdsFACPe5dkDUT/Mhx UxBzyOM3IJ6cdIFaI3VUOH7pjOoGKlr8VC7x2bgNNDNshMDQV6j25g95UjFNQVttEm0AHUtpt2Fw DhyYrlumEQzLiDWgK7gIyM3FQ8+H5OUUIp1wIGJUawVmOWFBoCwc0qI4esG6EF7XIQIIQAbhySBO 43/zmuhqYhzoCcoMJUg1ZdySNVjaXcALQ0Cm50JJoiz9kvAWzlLK8DMaB9MJiYS1y6Hf51yw4fSy txhTolhLcbaazxT2BPFxYbhD2ipFBXdA/rAuqrzAA3ejYHNBFLJOjDe2kd6hcVAHoITzF8SDEIrY 9qrtSCO80IEJIKdQdpjUBPJ2wTw0LsE7sb1fvlJVToG5yXlGQch0CqKjZyk3oAq0hKwhki+HVUFV lPRZxyAx3tLMZWd+V5P4tZzCUhpddfk2cDACncFyjmzrepOLg06io6mcjyKPKBH6aR5Ul8AkJdks vVn7jJKDk8q+ANK5zxsSzCYC2G/y9DGasP7XmnBSJiYAY4Dk6KiJZB7GwOo28RtrWOAOZGysFP6q IrZj6GBsRgQ4wQ48HcKb9HzEYqcgiT5uEYk2OQn/Q7NnqUdDOkIoqEVUEX7touZzg8ZQpLsibLc4 jNI4d6IqBt1/MSeIbS4Js+B/ySPdPOtALOy34p7Qzj/0I+x/wmP+x08ALKsbxQGDvXoNLvwcNNbq rFOE/rpGrE+6iDxUdiV/YDHdTMmr1oBnB1Nh2nIcYq8ACRWyMFaHyBk+UmvoeMlvih+8IVb0OGlU RIrkN30Nu8zba0BX8eNSKdKOcynE3O6EJGAJbGDwOOxmmF8Ac7Qn3Nuk6uCJmUEYWAHaWbE1EMJl apNPbICZogkYsbsiYEd5AcHgPsK40nsBh4ROG1QQBQc4yDuvLPmLtp3dwaibr4NIxwP99DPuc7Lw Tc3DWuAH39aEMiZYHzwCT5emYekaLQv0seRu+H5ZHggKVKC9aEb/tENQggAslo0HAR7L2GERkoHo obKOjF7MsnX4Cz8dcHNIfuYgMIA2v0h7SaQDEwfCy3UqeYidQoTyixqEvMdhWJahYwcYQoye53vV 5QSUyN02KFvcwoTQaLhIrPDEUaqWii0bkC7HXv7gUSimyU26fuN98IdWJBez4cl3R61h8ZBNsRJX A3al3dH03PKUJgXx0LOsU0p2IurdNeTKxgMsIMQXJFvDbs3CguXY3kjD13bQKvQ8YM0/I3hNCxcr AcOrSRR+zZ/fIjUdCRViZcBm6FGoIS+XORPpgeEDrGMDSgEJHezQH3Y+GBln/fDDupJmU9/bCWMh Q+orTeoF5eF6b3Q9Rhkwnt64+f4qhP5QT12ujcaYIo3FgmpeXHR7AOUalTbRXWRxNG0eoO0Be1XQ 3c9ik4BpGhKNhRhBnGPqCCzdFjOIxKL4oe6FfeuwghaWK1kpw1aiCoV79GUrUr3T6BjZ5LDQf/Q8 ggmZeMAC6JebPQO2GrQcF03dCVs8mrtCSSsjPkCmAVpTcdq1g56AH1u3Wyi5nIpy1khCw74FqKH0 gHwbyYHhTSN51EuVhhag5xnQFyAiivQUIBWuUg/ajtgWYlpkG96SMGkNNA9kLY69/+ai3yvG7sSq +23c70SLkf1D93m+gEkvFPrIFZc6YdrPvKxPTT2w/JbWGz6QDfoaNTc7+JSrbB3CkIO0D6FJ0HmX X2tzGWZqQpD4xIo8gbxoEARQxj7H2TUIAL7xJxQfORRKFKARzUVbAPe2acWIHuBFE60aQ94LNViI iMZ8YI3cJwHifGfgK2mrdMQAaSAkaNmRYjkIQ5Q8xo/qzMnxVjPNgmJFFKKf4B6NXdbYACJFCOUE 2nRRnFhJpBuiCeSkkEFAEGezeKsHPOpFm5t8AqiIqelWNGwLLHEAAFR8D/LS2i+kanM9KMj7a+u4 jwVPuckOsmy+0RCB6Hp6vVCAOXQNk9EGcoWViEC0MHmXxCgZhsjUynBTO4CaVjyqQfyTA7PyLRw8 I46TAHc7VgiTnCscgbMH/CPyFc6HdeFaQEakXCYefa43CIa84Sj6g6aJsljIfkz5Che00yCsApH7 7Rxz5FOBlbsWqIl/UqPQJkEPEvH0BbnNhabj+EutJsMVm8p9gqkLDYkGUx8hrHD0oAvZBsKWxhRI GZp9aV5LIcIE9ffDDvfzQF1nYiDQB/mIq554DUa2TsAKELnV22FJCPxzuPOnuimJyr/MXdCuvrns KkVzy6shA3cLG658biCc1CIgOu/SZLQRgvkaq/8xWMRKO1QvcjRQ+aMifbJMF0IIn0VLdEBQi5ys TeM2jWmx51Rtk8Iax4BosoHRwa8RZ9CigioRmXIqNNO/i0XR/aiUI8CknUHinK8aUJMDJ9nGfQPB KC/ufskDLLiH2sMfQOczUMhbmwGykW+TIQcQUP8y/AqYR0DdNxPV+eFRpDvcCbyBuMjOlnCUKump vklNCn+m9OZ4zQj2EvJqQ2ZfTQWALspJEqVaynnZsaV2hJprOBYoagviS+RK/6gx/xn6Pro+qEVg gTgVsA8MfXesX8uTRw2fCcdg1xG8iD60QzPaEU3zCLcdx5fGjv/ODBkVvkoYOZssvElKyTlD52Bw c6S4y3XLDoGdaNTH1J0SgJQA/JVCOrtkUJGSrV2+WRtOmlp+2S9JZk40OGtU9cWzLKA2aKuuTQ0u jGAMzw8TLugOnAtVcymcGHpvddRHzfiDMRwSl4qf4HjJ3y4I15VfqiPSELNFSkE27APyZn2mx9HH 7uaPt6CvQ0Y+bzQNkpHXXeMug4SrJhmrRcz5PXQIsg/O+BNauT/BFtIcXpW71Ak0ixyw8Jz75qAx adQgFqF50YNAiRAcrW7WNKpyFA0+X30zJCXb5SuKF8CjcRRapAK2D8i99gXjXk/2dsrMSEV8ZGzL wZYxHM2qjhwCsks1NuTGGpyBDiN5VxufW1u8cXd/I1yPwq6QnEQ21i1tdDZNiO4UfaGFEOLr7flp dgAJ1kDptAnLAzGLnlQh0+BH4xUyuBEOXCYHKbYQ9r83IZahO5s8X6CltFSq2pF+p3gcjJWh5XLx BmBWS9qdeXdmZ+PiCQc6ZqkXKcOuSVODpED3trRdAYqNA125oC1QZBmerVDHFerPAZuANzigaFok 550jdY2XAROCztLu+HjHmmnyHqIjChgXqKpBkZOzUh0JsRybFM0LvHanVmlX1HT9IeMngIv9IKmW ZntceTuwcTRpcRyVeexBgq8n4ieoUEFCo93RFfQMIu18x5s49PBx2QC6XFrVrgM33z5v/f0dKHsO 0w7c7h9eDvnx8hnT4X2phAmrN1LpwW2z+BlSfqfisrYejDJnPYTXb+WaYo2ODpKIRRsOciYjw7mQ FAfDjMVe1BDsmMHKoSdIJCtDB1JBhj6prbqQ32cvJ5iAPxbaL2ii0zSTihqCYuJWmtGiYJPeAnaq JjeY/bTLzXhOinfSFNJeDrrCzNhaIqi0NUTJqD1VKCLp6RmPbIy2O02Ag8byhXo1yYTjsExISFg4 4vsPkh0q8hODmJCQwDyY1qVYKQHNEUBTbBKFPUrrGtxTw3R9Z5Xra58XNfKm1vtqS6vlz87XNiD+ 7IlHthRR7701tR8Ehi5FBWkOr53lyxrgCYg4uar9KKSlZJ5kSpUUiva3YgGKtBo9KgETyx08Ey69 7EEZbUKlNDUwKiS3Cwgq0Yfagfiys8WD5keLInxgZ2stXlCDMske8Op04qi2SnWDOnqjOqwoFAkU ImShSfUHkhhe3RoJTbjshXOg0aTVYCNcCiBVjUQuz4m+gLaW+6nXheAH5qF53rqh8LkSQodEwHA0 xNKeIQ3TUKu4hSIYqtXBZuQEQ7+i7Llqowhw6qDrQXDqTXvRAc2Kt9ATNSKdnVWmVIdoGf9VNjYL tgZ58tI4oqPvqEwIBfPwNh3RIlVNML7bQfzyPsBTfU3bObqxdGiWxJmCae8iZnwCdmggJDU1qI36 0ilRw0iIuGFQiZ1qcF+J7/mjFCQHkCgrvHbkTgZqDONSF8Y2eG0EHo2KTWNV7APW5CzNEq4eAiqj XTdbage5iWdOV9N0qHB/1/Y/FgJsaMDKN/C6cA40o6mxOyarzFtrE/RIwjXUApVhNTpm6fmSa/YR C14KU/6P7FPx8mU2wNVm6KOsUfPSlqXk1tDeBfoF96lHA5IWTqXoGY+KsfB0zOJS5/Bp2VHJdu2g RsfrosZOCc8AZq5Ou6Mdr57+AYgg8GD+YK6KnnJFLptGAzDCGygfSjWjDh3EKE5s74mTan1O9D1u 2wC3qmrP3NGKCU+mOQyGMbzcYbBBXclEKF5bPuiGituhWtHqc8iL6NFZ5N0LkqZHGiOOdBHfQ4OU c4WgXfPPDhOCK1R3c0mPASlZa++Ps6HddKVa4MqLrAId9BSNUBcon9qrMO3Y4xGwsEX77DgEh4TB uCDBsXdYOhRY2kHbVWjYhnuj8nX+MgqKP2YKyrSJTaSq6fEDRA9naMNlzhRBOizIoLy0MaRJA5Q0 f2g2PR62A6vHTRB+DFvpGrMU5F+RpOyZpsWKFf9mKpE6QZDTa7X2w3XxIVTvjpk0nSObtzSATrsK krWXu1FQ1DxR906D+UBcWO0EPbSzYQrXxnPq8QgIRk/iIaUeES20HCZc0kQeSsMYdCR35drM+Fna f4AbQ3M/7UlDeRt9JkCG1P5Z7BAwtISDhobGX5NwJ4DEDoXHydHf1gaAlChFjzIjgabd1FRJWSIC 6FLC4U/DBO/t+tHIfx89ogaGWD4kWqitsZQeh4EoiV2Ve8hBz4tcPr4yxgKr05DYIRM/TqRxSzrF j4Rd6/QZHoo+8ahM6WQdiJCyZPbQjO/DY3wm37oQwm0YBIDxI41bMEn2RPd7aHyEFwjQoK332IHm 2siigoC7UCaU/fxn+bPCcd9PDhc9RTo5a9XWOVg4cXdee06xQDug+ut1BW0Q777da0DISFOwvlsm tBoRBfA9Iwe0IYaFg3DBnlllseD3MbSTSOJZ3tHGq02nR5La26JZmuxJ9GmPpOspJ+ofQKn7aJKb tJNXP88YFJ05t5G0WxcJYQOPmnYoULMvRcenQWQh5YncHmSYMg9vM2dPCrp6zRCRGEX5oeDAvViB 6qunxmahNLRHiMS5eqgnaMCOINejUdoHjm97n3vYevgIh65ZXikarleR/AptwmsezV+wG7ZrLmjb 2JeeBbSS6PGEQARPOiSFYuh6HA9nQWXk+nXJg16iU1zS3ltEKXvTtkrUFmVHa3OKXY/GJtriECIh ZMAfxZLQTT2rODWLBcw7feTgc9D3HPiFe0Tk0GTj0qmNe0f2Zy0PCDyal2HU+DkiMjCrp89UOBgV 6LKsDRZdZbk0/W8FXevn2/RWpkKnVlDl4x+3Fb176NX1QDyaXDvHTTJpoTfAopimNzMO5L5MQ+0b 4iQYenxTbAUQystgb/C0eiCnA9veMq2DhmT58PRpEflLvVHiBCrCqLKBEZlSJDYWmhS7AbZqUHjc NoAK663HWpKedtdjLOJsZAJKEpDu9T2+qDENWkO7TgAHqIWP+zyiMETgrmnfG1kGG5QlbqhbOwDc fUlBD+KjuckzdjahGaa2EEAeYJbE0N2Ys7g6Fs5pQOcXTvT696zjxTVSZ6YdUa4U+5tPAwIbtUMT Ico0jYwBm4pmND0oFwmMw1HITEnPzkdr9KLJxCygUA+LBjCRxjU7UsiKp5q1yWfB1h0wTyoup7AM RVdP7oC6IBdm0XO/qNTD+e39P1t+I3J+vrp/9YFfXxHWW8xO/+n5PKWVXg3mDmYDQCRvR07x7Cyz SPtyW0l7/12qlB5fLbeGOtJQnU7pKK2LXe8Aq7YdnGm23UFBPcFNuklBfNq1ls8uGuHveswJhEax aK91H0weihdi00OM6T2A7cCec2lOwF+2GRqlpXjBanF5vqsdVD2eN9F2kB+nrF1VC4GBa61pWrOq 0f0Dv6PNEZRG7+ON96Ieg2yvMdAWc8evGey94DF99b+Habt/1lWk9gAAB8ZJREFUeNrdndeW6yAM RWPjXv//b2/KTSZFgDk6Mk70OFmDvUFGBQGnk5UUZyndVaonqd/k/nfnmqIwexmWVG1HkH6ocoP4 +EYG300OyUgZv4dMuXE+pacCnnU1N9C7lGTArptzI71KQQfsOpcb6kXYOnqV3FDPUlsAHkpPTQCP NIiDEeFhTEZjBHgcw28yzVxlzI12k8oMsOua3HBXMQQ8xmTD92ae5QgBlSngERCtLMVdslsMO0tx l9wWw85S3CWzxXDmgF1XZyXcATCvxZh3Icw5ne4CmBPR2lLcpc0FuMc0c5NdEhpl41zl6rKc56Io hqFtp90Az3a/bYfh/Nx5LpvaVZVreJrrmrYnpnqpMvZDrYs+ivKobM8ywQbT3iGjSVsCw2eRATWU KXUy4i5C7CJ9iou+j6tCl82BlmXexVi2fY5f9gG+ypZQ6xvsQ0hiM84XWQifhFc7vvgT/JMhALif K50J8SdGMIT4A9/gXTwBZe7XYopoGGUzMTWuaRwvmF+WZRdEwWiInlq/kiahtajdc8y6unpeTRG3 TaMvcTT6Qmct8E/ejVlGednyEb4lCoCsxVLEgxo327hRb5+itET24aqnPqPYmmFoTHzh+Mt/vEiS vZzSVlQqvrq+1I1Jfbh+vsZ2dRrS0wolPfv63MfS71vnW4lv3cz10s9kxqdQSlyoFhKS20xGj6cy V24O9m+QxJ+lTk5rFhFmGe7fIMoziNTF8UaHBBpZmEmi+2wgd5vwLUW1dGEsMJQ8v+5u8ORfhZeN RR+sNSKeeQy+t6BvEZvFK2CiRapV8L0/1SfcGnMJrCBp6k2rfL9+TPrBIWSXTJB8nEtT/o/rze8K TnL8wh7OwoILEr4iBnXUYh2a4uHMkaH5yz2GvQ2bhXYGYhttZ7gM81pN0WYOingJhPWuoN6P8QnB MJ4Ik9am/TvV3I93C7CM/TA3m+JHffefCEnE+EiUci+OczyKPAJhLFaqg9FClDE/YUTZ4l9SJB2g XUtRE85KvouEtUC52KAlDPpq22vcg/2kmwq1hAENcynOczCwzEkYAEwN1QOqqtJTHWFAR9NVq2c2 xiL09jvW615N1azhqAi9gOgM77U8iuyUitD3PngOwltlmIfQN4QaG+1DxDdXaQgtZj6vosINrvj/ eiyFdmXXk7CD91KXOKGns9VZefIg4oSer1AflntyWuh0ihPKSsqoqpL1FNV+mNDjgRAAxRWTExzu w4Sy/8FZcJAJQSsLE4ovwaobk7tvX0I5vcaqNpA9ekxBUELRMPOKNx2veZSQORcIIs9jICE0C/e8 PpbF0XqwxHxa0WQxC5vEdQLIcwMJRXNPBJQ/A0jdHES4SM/n1lAnlMBaEIqfIbfYZ2Q9AiMUvW4q oPwMxPvGCKWZjl0HL0X7yIeAETak/g2J5DUhszVGaP8Zej7EvQgX0sPTuxGosjkwofQpAK49RCgZ C/6WKcm5B2psIMJ2F0JpDIGpBiKUTBV/05Tk1QAvCxHOnGfv048OUS+JkL/9ezgYIX9PyNEI9xlD 6Dv8dcLquISk+QwizGctgH6ECCWLz98lLYVPwLoPRCi5/Xx7KHltgF8KEe7jeUurF0CiBiJkBTbp DwGawQil7mWf2dNnJdwjTyNN2MjHXkGTYLMDodSLyGhghGLOnUwoPQJxfjFCMUvE3eIq1isg65MY odjB3ChfXHxCGgIJxedT7YX0AOhTBwnFqmWm813kJpQX2omE4tITVCYAEsoFIby5ZuL1IEoo9jEv kyGuMWPFeyihrKasQZSHEFsZQQk9FYQkwoLYOEwoF+5xokR5fwlYYQoTijEipypqpDYNE3rKlRln P8lVbXj9P0roKb/U3/zkqa5GV2BxQl9BtnYUJ3KzWAR8Fd8pO7pP0bfRCDZECkLvti4NoncnFdyi htB7jIIiyPApBp4F0hD6d2LBiD5ARYpERejfnIcpak9uT08YuB8F0Sqbg1V1hIGt+Ol6FdiPqnlF rCbqIYF9n4mXDiyBA4pUyWYlYfDgpJSsRmjDus5N0hIGz0RYt3b+GmxF94JOG9OFD09yWybBMXzA lDJcUezO+y+Ro1vK2Di2kRPCtKkRxQ7Lp04KS+Cc2T76z+pY5UTIPMRPMVtFyL6JH5GpXzxnEG47 qK2oymKY+n7s+2koymrTAZmEBa0TJRlvdacWI2Nw4izeGhESOv8SADHyY4saRhDKyYIzR9c7C0Xl vNd1jqC0RL8ajbQceW2LtPOTi0iqseqJ6sBVVNZa5C19TjvBf9PRdJuEdnz5f5+JtzzN0VRiRcD/ FvV56ocwjlAkrpY/3F5ek/oLiqllnI9WqWXok2rGoW4Qe6psYjarmVTJVapPL8IuLMQY2bXiL0l5 cttnBUmG5O/YeAk/DW48TLpxsTK4mPatj/kPuDxjm320uYTlPaQzunJtGWIj6Qaj+wg/Hmx3A/U4 OM+RS661u95KdYkMIktflPXlVujGubpuSquRezxP6FHbK7T2FnEq/5nLATuv70j0wDOLN4/O39qT RwLHEv/GJY/BpYJfUNTIVevff9lq3I/67iuPly0Xon3ztdUbsyjNtw5jwoVa3zmnpt03ZRAwGsuc xPd9jOl8F7EIvE0kKZ3wDsnOUfGlVSfa13qe9rmHOVWWqajj5u8fKXaLrO+VmOcAAAAldEVYdGRh dGU6Y3JlYXRlADIwMjAtMTEtMTJUMTI6MDg6MDIrMDM6MDDVsZnCAAAAJXRFWHRkYXRlOm1vZGlm eQAyMDIwLTExLTEyVDEyOjA4OjAyKzAzOjAwpOwhfgAAABp0RVh0ZXhpZjpCaXRzUGVyU2FtcGxl ADgsIDgsIDgS7T4nAAAAIXRFWHRleGlmOkRhdGVUaW1lADIwMjA6MTE6MTIgMTA6MDc6NDFa/1ij AAAAFHRFWHRleGlmOkltYWdlTGVuZ3RoADE4McJHk5sAAAATdEVYdGV4aWY6SW1hZ2VXaWR0aAAy MjXu/xHcAAAAGnRFWHRleGlmOlNvZnR3YXJlAEdJTVAgMi4xMC4xMsMztC0AAAAbdEVYdGljYzpj b3B5cmlnaHQAUHVibGljIERvbWFpbraRMVsAAAAidEVYdGljYzpkZXNjcmlwdGlvbgBHSU1QIGJ1 aWx0LWluIHNSR0JMZ0ETAAAAFXRFWHRpY2M6bWFudWZhY3R1cmVyAEdJTVBMnpDKAAAADnRFWHRp Y2M6bW9kZWwAc1JHQltgSUMAAAAASUVORK5CYII="/></svg>';
        // height="100%" width="100%" viewBox="0 0 36 36"
        // viewBox="0 10 220 201"
        //var BUTTON_TITLE = translate.screenshot;
        createYoutubePlayerButton({
            buttonTitle: translate.screenshot,
            buttonId: BUTTON_ID,
            buttonSvg: SCREENSHOT_BUTTON_SVG,
            async onClickButton() {
                openInNewTab(await createScreenshotBlobUrlForVideo(video));
            },

            async onRightClickButton() {
                download(await createScreenshotBlobUrlForVideo(video));
            },
        });
    }
    mainButtonScreenshot();

    function toggleHideShowButtonOnResize() {
        //code
        //console.log("I'm on fullscreen!");
        var targetButton = document.getElementById(BUTTON_ID);
        function toggleHideShowButton(elements, specifiedDisplay) {
            'use-strict';
            var element, index;

            elements = elements.length ? elements : [elements];
            for (index = 0; index < elements.length; index++) {
                element = elements[index];

                if (isElementHidden(element)) {
                    element.style.display = '';

                    // If the element is still hidden after removing the inline display
                    if (isElementHidden(element)) {
                        element.style.display = specifiedDisplay || 'block';
                    }
                } else {
                    element.style.display = 'none';
                }
            }
            function isElementHidden (element) {
                return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
            }
        }
        toggleHideShowButton(targetButton);
    }

    const ifScreenChanged = "fullscreenchange" || "mozfullscreenchange" || "webkitfullscreenchange" || "msfullscreenchange";

    /// Hide on FullScreen
    document.addEventListener(ifScreenChanged, function() {
        //console.log("fullscreenchange event fired!");
        toggleHideShowButtonOnResize();
    }, false, { passive: true });

})()
;
///////////////////////////////////////////////////////////////////////////////////////////////////
///
/// name:             YouTube Qualities Size
/// author:           Abdelrahman Khalil; https://greasyfork.org/fr/users/435629-abdelrahman-khalil
/// description:      Shows file size for each quality in YouTube.
/// originally from:  https://greasyfork.org/fr/scripts/404953-youtube-qualities-size/code
/// license:          MIT license; https://opensource.org/licenses/mit-license.php
/// screenshot:       https://i.ibb.co/qnLgYfm/2020-06-08-18-47-01-min.jpg
///
///////////////////////////////////////////////////////////////////////////////////////////////////
(function Qsize() {
    "use-strict";
    const DEFAULT_CODEC = 'vp9'
    const ALT_CODEC = 'avc1'
    const CACHE = {}

    // --------------------------------
    // API Stuff.
    // --------------------------------
    const fetchInfo = (videoId, detailpage = false) => {
        let url = `https://www.youtube.com/get_video_info?video_id=${videoId}`

        // Retrive full info when video is copyrighted.
        if (detailpage) url += '&el=detailpage'

        return fetch(url)
    }

    // Youtube sends data as ugly ass url queries.
    // Parse it using URLSearchParams then get value of player_response which is stringified JSON.
    const parseInfo = uglyInfo =>
    JSON.parse(getQuery(uglyInfo, 'player_response')).streamingData
    .adaptiveFormats

    const getFormats = async videoId => {
        let info = await (await fetchInfo(videoId)).text()

        if (!info.includes('adaptiveFormats'))
            info = await (await fetchInfo(videoId, true)).text()

        return parseInfo(info)
    }

    // YouTube separates audio and video.
    const getAudioContentLength = formats =>
    formats.find(
        f =>
        f.audioQuality === 'AUDIO_QUALITY_MEDIUM' &&
        f.mimeType.includes('opus')
    ).contentLength || 0

    // Filter formats per quality.
    // Returns video content Length for all codecs summed by opus medium-quality audio content length.
    const mapFormats = (formats, qualityLabel, audioCL) =>
    formats
    .filter(f => f.qualityLabel === qualityLabel && f.contentLength)
    .map(vf => ({
        [matchCodec(vf.mimeType)]: toMBytes(vf.contentLength, audioCL)
    }))
    .reduce((r, c) => Object.assign(r, c), {})

    // --------------------------------
    // DOM Stuff.
    // --------------------------------
    const createYQSNode = mappedFormats => {
        let YQSElement = document.createElement('yt-quality-size')
        let isRTL = document.body.getAttribute('dir') === 'rtl'

        YQSElement.style.float = isRTL ? 'left' : 'right'
        YQSElement.style.textAlign = 'right'
        YQSElement.style.marginRight = '8px'
        YQSElement.setAttribute('dir', 'ltr')

        YQSElement.setAttribute('title', objectStringify(mappedFormats))

        let textNode = document.createTextNode(
            mappedFormats[DEFAULT_CODEC] || mappedFormats[ALT_CODEC] || ''
        )

        YQSElement.appendChild(textNode)

        return YQSElement
    }

    // Hook YQS element to each quality.
    const hookYQS = async addedNode => {
        let doesYQMExist =
            addedNode && addedNode.classList.contains('ytp-quality-menu'),
            doesYQSNotExist = !document.querySelector('yt-quality-size')

        if (doesYQMExist && doesYQSNotExist) {
            let YQM = addedNode,
                videoId = getQuery(location.search, 'v')

            if (!CACHE[videoId]) CACHE[videoId] = await getFormats(videoId)

            let formats = CACHE[videoId],
                qualitiesNode = YQM.querySelectorAll('span'),
                audioCL = getAudioContentLength(formats)

            qualitiesNode.forEach((qualityNode, index) => {
                if (index === qualitiesNode.length - 1) return

                let qualityLabel = matchQLabel(qualityNode.textContent),
                    mappedFormats = mapFormats(formats, qualityLabel, audioCL),
                    YQSNode = createYQSNode(mappedFormats)

                qualityNode.appendChild(YQSNode)
            })
        }
    }

    // Listen to page navigation and observe settings-menu if it's /watch.
    const onPageUpdate = () => {
        let SettingsMenuElement = document.querySelector('.ytp-settings-menu')

        if (SettingsMenuElement) {
            removeEventListener('yt-page-data-updated', onPageUpdate)
            new MutationObserver(([{ addedNodes }]) => {
                hookYQS(addedNodes[0])
            }).observe(SettingsMenuElement, { childList: true })
        }
    }

    window.addEventListener('yt-page-data-updated', onPageUpdate, { passive: true })

    // --------------------------------
    // Utils
    // --------------------------------
    const getQuery = (string, query) => new URLSearchParams(string).get(query)

    const matchCodec = mimeType => mimeType.replace(/(?!=").+="|\..+|"/g, '')
    const matchQLabel = qLabel => qLabel.replace(/\s.+/, '')

    const toMBytes = (vCL, aCL) => {
        let videoAudioMB = (parseInt(vCL) + parseInt(aCL)) / 1048576
        return (Math.round(videoAudioMB) || videoAudioMB.toFixed(2)) + ' MB'
    }

    const objectStringify = (obj) => {
        return JSON.stringify(obj, null, "\u200e")
            .replace(/{|}|"|,/g, "")
            .trim();
    }

    })()
;
(function commonStuff() {
    "use-strict"
    ;

    //   // LAZY-LOADING CONCERN
    //   // ####################
    //   // Can I use Lazy loading via attribute for images & iframes < https://caniuse.com/#feat=loading-lazy-attr >
    //    // Can I use HTML element: img: loading < https://caniuse.com/#feat=mdn-html_elements_img_loading >
    //   if ("loading" in HTMLImageElement.prototype) {
    //     _$$("img")
    //       .forEach((t) => {
    //       t.setAttribute("loading", "lazy");
    //     });
    //   }

    //   // Can I use HTML element: iframe: loading < https://caniuse.com/#feat=mdn-html_elements_iframe_loading >
    //   if ("loading" in HTMLIFrameElement.prototype) {
    //     _$$("iframe")
    //       .forEach((t) => {
    //       t.setAttribute("loading", "lazy");
    //     });
    //   }


    ////////////////////////////////////////////////////////////////////////////////////
    ///
    /// name:             Youtube Playlist Duration Calculator
    /// author:           adblanc; https://github.com/adblanc
    /// description:      displays the remaining time for all youtube playlists!
    /// originally from:  https://github.com/adblanc/youtube-playlist-duration
    ///                   https://chrome.google.com/webstore/detail/youtube-playlist-duration/flkamnloonejpkclncceejohhpfckldm
    /// screenshot:       https://lh3.googleusercontent.com/I29yXpzVAxPD_ljB9RcTaO1YNsklGdTkzj-UkJUeoO2vx1KT0W0saFaC2WRDEPZ6jL0YHqD1Fw=w640-h400-e365-rj-sc0x00ffffff
    ///
    ////////////////////////////////////////////////////////////////////////////////////

    (function addEstimateTimeDuration() {
        const TIMESTAMP_SELECTOR = "#overlays > ytd-thumbnail-overlay-time-status-renderer > span";
        let playlistTime = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        window.addEventListener("yt-navigate-start", () => {
            calculatePlaylistDuration();
        }, { passive: true });
        function calculatePlaylistDuration() {
            if (!isPlaylist())
                return;
            //console.log("Calculating playlist duration...");
            resetTime();
            const videos = getPlaylistItems();
            const notSeen = filterAlreadySeenVideos(videos);
            notSeen.forEach(v => {
                addTimeStamp(v);
            });
        }
        const resetTime = () => {
            playlistTime.hours = 0;
            playlistTime.minutes = 0;
            playlistTime.seconds = 0;
        };
        const isPlaylist = () => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get("list");
        };
        const getPlaylistItems = () => {
            return Array.from(document.querySelectorAll("#playlist-items"));
        };
        const filterAlreadySeenVideos = (videos) => {
            const watching = getWatchingVideo(videos);
            if (!watching)
                return videos;
            const index = videos.indexOf(watching);
            return videos.slice(index, videos.length);
        };
        const getWatchingVideo = (videos) => {
            const videoIndex = getCurrentVideoIndex();
            return videoIndex ?
                videos[parseInt(videoIndex, 10) - 1] :
            videos.find(v => v.hasAttribute("selected"));
        };
        const getCurrentVideoIndex = () => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get("index");
        };
        const addTimeStamp = (video) => {
            const timestamp = getTimeStampElement(video);
            if (!timestamp)
                observeVideoLength(video);
            else
                addTime(timestamp.textContent);
        };
        const getTimeStampElement = (video) => {
            return video.querySelector(TIMESTAMP_SELECTOR);
        };
        const observeVideoLength = (video) => {
            const {
                observer,
                options
            } = setupObserver();
            observer.observe(video, options);
        };
        const setupObserver = () => {
            const observer = new MutationObserver(checkVideoDuration);
            const options = {
                childList: true,
                subtree: true
            };
            return {
                observer,
                options
            };
        };
        function checkVideoDuration(mutations, observer) {
            for (let mutation of mutations) {
                if (mutation.type !== "childList")
                    continue;
                mutation.addedNodes.forEach(n => {
                    if (n.nodeName === "SPAN" &&
                        n.textContent &&
                        n.textContent.includes(":")) {
                        addTime(n.textContent);
                        observer.disconnect();
                    }
                });
            }
        }
        const addTime = (time) => {
            const split = time.split(":");
            if (!split.length || split.length === 1)
                return;
            if (split.length === 2) {
                addMinutesSeconds(split);
            } else {
                addHoursMinutesSeconds(split);
            }
            correctTime();
            renderTime();
        };
        const addMinutesSeconds = (split) => {
            playlistTime.minutes += parseInt(split[0], 10);
            playlistTime.seconds += parseInt(split[1], 10);
        };
        const addHoursMinutesSeconds = (split) => {
            playlistTime.hours += parseInt(split[0], 10);
            playlistTime.minutes += parseInt(split[1], 10);
            playlistTime.seconds += parseInt(split[2], 10);
        };
        const correctTime = () => {
            if (playlistTime.seconds >= 60) {
                playlistTime.minutes += Math.floor(playlistTime.seconds / 60);
                playlistTime.seconds = playlistTime.seconds % 60;
            }
            if (playlistTime.minutes >= 60) {
                playlistTime.hours += Math.floor(playlistTime.minutes / 60);
                playlistTime.minutes = playlistTime.minutes % 60;
            }
        };
        function renderTime() {
            //const playlistHeader = document.getElementById("header-description");
            const playlistHeader = document.getElementById("playlist-actions").lastChild;
            if (!playlistHeader)
                return;
            const timeHeader = getTimeElement(playlistHeader);
            const {
                hours,
                minutes,
                seconds
            } = getFormattedTime();
            timeHeader.textContent = `${hours}:${minutes}:${seconds}`;
        }
        const getTimeElement = (playlistHeader) => {
            let timeHeader = document.querySelector("#header-TIME");
            if (!timeHeader) {
                timeHeader = document.createElement("h2");
                timeHeader.setAttribute("class", "yt-simple-endpoint style-scope yt-formatted-string");
                timeHeader.setAttribute("id", "header-TIME");
                timeHeader.style.position = "relative";
                timeHeader.style.top = "-12px";
                timeHeader.style.before = "6px";
                timeHeader.style.color = "var(--yt-spec-text-secondary)";
                playlistHeader.appendChild(timeHeader);
            }
            return timeHeader;
        };
        const getFormattedTime = () => {
            let {
                hours: h,
                minutes: m,
                seconds: s
            } = playlistTime;
            const hours = `${h < 10 ? "0" : ""}${h}`;
            const minutes = `${m < 10 ? "0" : ""}${m}`;
            const seconds = `${s < 10 ? "0" : ""}${s}`;
            return {
                hours,
                minutes,
                seconds
            };
        };

        window.addEventListener("yt-navigate-finish", calculatePlaylistDuration, { passive: true });

        window.onYouTubeIframeAPIReady = setInterval(function(){
            window.setTimeout(calculatePlaylistDuration(), 60);
        }, 600); // Blame YouTube for this


        // FIXME: https://stackoverflow.com/questions/25806608/how-to-detect-browser-back-button-event-cross-browser

    })()
    ;
    ////////////////////////////////////////////////////////////////////////////////////
    ///
    /// name:             Hide youtube google ad
    /// author:           vince ding; https://greasyfork.org/en/users/168850-vince-ding
    /// description:      hide youtube google ad, auto click "skip ad".
    /// originally from:  https://greasyfork.org/en/scripts/38182-hide-youtube-google-ad
    ///
    ////////////////////////////////////////////////////////////////////////////////////
    /**
   * @return {undefined}
   */
    var closeAd = function() {
        /** @type {string} */
        var css = ".video-ads .ad-container .adDisplay,#player-ads,.ytp-ad-module,.ytp-ad-image-overlay{ display: none!important; }";
        /** @type {!Element} */
        var head = document.head || document.getElementsByTagName("head")[0];
        /** @type {!Element} */
        var style = document.createElement("style");
        /** @type {string} */
        style.type = "text/css";
        if (style.styleSheet) {
            /** @type {string} */
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    };
    var skipInt;
    /**
   * @param {string} msg
   * @return {undefined}
   */
    var log = function(msg) {
    };
    /**
   * @return {undefined}
   */
    var skipAd = function() {
        /** @type {(Element|null)} */
        var skipbtn = document.querySelector(".ytp-ad-skip-button.ytp-button") || document.querySelector(".videoAdUiSkipButton ");
        if (skipbtn) {
            /** @type {(Element|null)} */
            skipbtn = document.querySelector(".ytp-ad-skip-button.ytp-button") || document.querySelector(".videoAdUiSkipButton ");
            log("skip");
            skipbtn.click();
            if (skipInt) {
                clearTimeout(skipInt);
            }
            /** @type {number} */
            skipInt = setTimeout(skipAd, 95);
        } else {
            log("checking...");
            if (skipInt) {
                clearTimeout(skipInt);
            }
            /** @type {number} */
            skipInt = setTimeout(skipAd, 95);
        }
    };
    closeAd();
    skipAd();

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///
    /// name:             Yes i'm here, youtube !
    /// author:           momala454; https://greasyfork.org/en/users/521874-momala454
    /// description:      This script disable the auto pausing of youtube videos if you don't interact with the
    ///                   screen for a certain amount of time.
    ///                   So, this disable the functionnality "Video paused. Continue watching?" on youtube.
    /// originally from:  https://greasyfork.org/en/scripts/401348-yes-i-m-here-youtube
    ///
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /** @type {number} */
    var count = 0;
    /** @type {boolean} */
    var inited = false;
    /** @type {number} */
    var interval = setInterval(function() {
        if (document.querySelector("ytd-watch-flexy")) {
            if (!inited) {
                /**
         * @return {undefined}
         */
                document.querySelector("ytd-watch-flexy").youthereDataChanged_ = function() {
                };
                /** @type {boolean} */
                inited = true;
            }
            if (count < 30) {
                /** @type {null} */
                document.querySelector("ytd-watch-flexy").youThereManager_.youThereData_ = null;
            } else {
                clearInterval(interval);
            }
        }
        if (count > 100) {
            clearInterval(interval);
        }
        count++;
    }, 1000)
    ;

    //   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //   ///
    //   /// name:             Youtube - dismiss sign-in
    //   /// author:           Achernar; https://greasyfork.org/en/users/435938-achernar
    //   /// description:      Hide the "sign-in" and cookies dialogs. Prevent the dialogs from pausing the video.
    //   /// originally from:  https://greasyfork.org/en/scripts/412178-youtube-dismiss-sign-in
    //   /// screenshot:       https://greasyfork.org/system/screenshots/screenshots/000/023/673/original/youtube-sign-in.gif
    //   ///                   https://greasyfork.org/system/screenshots/screenshots/000/023/674/original/youtube-cookies.gif
    //   ///
    //   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //   /**
    //    * @return {undefined}
    //    */
    //   function consent() {
    //     /** @type {(Element|null)} */
    //     var e = document.querySelector("#introAgreeButton");
    //     if (e) {
    //       e.click();
    //     }
    //   }
    //   /**
    //    * @return {?}
    //    */
    //   function cookies() {
    //     var r = {};
    //     /** @type {string} */
    //     var a = document.cookie;
    //     a.split(";").forEach(function(e) {
    //       /** @type {!Array<string>} */
    //       var p = e.split("=");
    //       if (p[0]) {
    //         /** @type {string} */
    //         r[p.shift().trim()] = p.join("=");
    //       }
    //     });
    //     return r;
    //   }
    //   /**
    //    * @param {?} mutL
    //    * @return {undefined}
    //    */
    //   function SImutF(mutL) {
    //     for (let mut of mutL) {
    //       var t = mut.target;
    //       if (t.id == "dismiss-button" || t.parentNode && t.parentNode.id == "dismiss-button") {
    //         if (t.classList.contains("yt-upsell-dialog-renderer") || t.classList.contains("ytd-mealbar-promo-renderer")) {
    //         } else {
    //           if (t.classList.contains("yt-tooltip-renderer")) {
    //             t = t.querySelector("yt-button-renderer");
    //             if (!t) {
    //               continue;
    //             }
    //           } else {
    //             continue;
    //           }
    //         }
    //         setTimeout(function() {
    //           t.click();
    //         }, 300);
    //         subObs.observe(t, {
    //           attributes : true,
    //           subtree : true
    //         });
    //         return;
    //       }
    //     }
    //   }
    //   /**
    //    * @return {undefined}
    //    */
    //   function init() {
    //     setObs();
    //     if (ck.CONSENT && !ck.CONSENT.startsWith("YES")) {
    //       obs3.observe(document.body, {
    //         childList : true
    //       });
    //       setTimeout(function() {
    //         obs3.disconnect();
    //       }, 30000);
    //     }
    //   }
    //   /**
    //    * @return {undefined}
    //    */
    //   function setObs() {
    //     /** @type {(Element|null)} */
    //     var r = document.querySelector("ytd-app ytd-popup-container");
    //     if (!r) {
    //       if (c--) {
    //         obs2.observe(document.querySelector("ytd-app"), {
    //           childList : true
    //         });
    //       }
    //       return;
    //     }
    //     obs.observe(r, {
    //       childList : true,
    //       subtree : true
    //     });
    //   }
    //   if (location.href.startsWith("https://consent.youtube.com/")) {
    //     if (document.readyState != "loading") {
    //       consent();
    //     } else {
    //       document.addEventListener("DOMContentLoaded", consent, { passive: true });
    //     }
    //     return;
    //   }
    //   var ck = cookies();
    //   if (ck.APISID) {
    //     return;
    //   }
    //   /** @type {!MutationObserver} */
    //   var obs = new MutationObserver(SImutF);
    //   /** @type {!MutationObserver} */
    //   var subObs = new MutationObserver(SImutF);
    //   /** @type {!MutationObserver} */
    //   var obs2 = new MutationObserver(function(mutL) {
    //     for (let mut of mutL) {
    //       for (let n of mut.addedNodes) {
    //         if (n.nodeName == "YTD-POPUP-CONTAINER") {
    //           this.disconnect();
    //           setObs();
    //           return;
    //         }
    //       }
    //     }
    //   });
    //   /** @type {!MutationObserver} */
    //   var obs3 = new MutationObserver(function(mutL) {
    //     for (let mut of mutL) {
    //       for (let n of mut.addedNodes) {
    //         if (n.nodeName == "YTD-CONSENT-BUMP-LIGHTBOX") {
    //           this.disconnect();
    //           setTimeout(function() {
    //             let ck = cookies();
    //             if (ck.CONSENT && !ck.CONSENT.startsWith("YES")) {
    //               /** @type {string} */
    //               document.cookie = "CONSENT=YES+;path=/;secure;domain=youtube.com;expires=" + (new Date(Date.now() + 567648000000)).toUTCString() + ";";
    //             }
    //           }, 5000);
    //           return;
    //         }
    //       }
    //     }
    //   });
    //   /** @type {number} */
    //   var c = 1;
    //   if (document.readyState != "loading") {
    //     init();
    //   } else {
    //     document.addEventListener("DOMContentLoaded", init, { passive: true });
    //   }
    //   /** @type {!Element} */
    //   var s = document.createElement("style");
    //   (document.head || document.documentElement).appendChild(s);
    //   /** @type {string} */
    //   s.textContent = "#consent-bump,iron-overlay-backdrop,yt-upsell-dialog-renderer{opacity:0;}yt-upsell-dialog-renderer *{display:none !important;}ytd-app > ytd-consent-bump-lightbox,ytd-app ~ iron-overlay-backdrop{display:none;}";
    //   /** @type {!Element} */
    //   s = document.createElement("script");
    //   s.textContent = `(function(){var c=80, pl, plR, oldp={};\n  function f(){\n    plR=document.querySelector('ytd-player#ytd-player');\n    if (plR) pl=plR.getPlayer();\n    if (!pl) {\n      if (--c) setTimeout(f,200);\n      else if (plR) {\n        var obs=new MutationObserver(function(mutL){\n          for (let mut of mutL) {\n            for (let n of mut.addedNodes) {\n              if (n.id == 'movie_player') {\n                this.disconnect();\n                pl=plR.getPlayer();\n                init();\n                return;\n                }\n              }\n            }\n          }).observe(document.querySelector('ytd-app'), {childList: true, subtree: true});\n        }\n      return;\n      }\n    else init();\n    }\n  if (document.readyState != 'loading') f();\n  else document.addEventListener('DOMContentLoaded', f);\n\n  function init() {\n    for (let i in pl) if (typeof pl[i] == 'function') {\n      if ( !['cancelPlayback', 'pauseVideo', 'stopVideo', 'playVideo'].includes(i) ) continue;\n      oldp[i]=pl[i];\n      pl[i]=function() {\n        let st=(new Error()).stack;\n        if ( (st.search(/(\\.onFulfilled|scheduler\\.js:|handlePopupClose_)/)>0) && (st.search(/onYtStopOldPlayer_/) ==-1) ) return;\n        oldp[i].apply(this,arguments);\n        }\n      }\n    }\n  })();`;
    //   (document.head || document.documentElement).appendChild(s);
    //   if (s.parentNode) {
    //     s.parentNode.removeChild(s);
    //   }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///
    /// name:             Bypass YouTube age verification
    /// author:           tfr; https://greasyfork.org/fr/users/1473-tfr; https://github.com/t-fr/userscripts
    /// description:      Bypass YouTube age verification without logging in.
    /// originally from:  https://greasyfork.org/fr/scripts/10032-bypass-youtube-age-verification
    /// license:          CC0; https://creativecommons.org/publicdomain/zero/1.0/
    /// license:          MIT license; https://pastebin.com/raw.php?i=4TMeeUXC
    ///
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(window.document.getElementById("watch7-player-age-gate-content"))
    {
        var videoid = window.location.search.substr(window.location.search.indexOf("v=") + 2);
        if(videoid.indexOf("&") > -1)
        {
            videoid = videoid.substr(0, videoid.indexOf("&"));
        }
        videoid = decodeURIComponent(videoid);
        window.document.getElementById("player-api").remove();
        var playerparent = window.document.getElementById("player-unavailable");
        var playerframe = window.document.createElement("iframe");
        playerframe.setAttribute("src", "//www.youtube.com/embed/" + videoid + "?autoplay=1&showinfo=0");
        playerframe.setAttribute("id", "player-frame");
        playerframe.setAttribute("style", "position:absolute; z-index:99999; width:100%; height:100%;");
        playerparent.appendChild(playerframe);
    }


    /// https://github.com/th-ch/youtube-music/tree/master/plugins
    function removeLoginElements() {
        const elementsToRemove = [
            ".sign-in-link.ytmusic-nav-bar",
            '.ytmusic-pivot-bar-renderer[tab-id="FEmusic_liked"]'
        ];

        elementsToRemove.forEach(selector => {
            const node = document.querySelector(selector);
            if (node) {
                node.remove();
            }
        });

        addStyle(`
      .ytmusic-pivot-bar-renderer[tab-id="FEmusic_liked"] {
	      display: none !important;
      }
    `)
    };

    removeLoginElements();

    //   function focusTrue() {

    //     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //     ///
    //     /// name:             Video Background Play Fix
    //     /// author:           Couchy; https://greasyfork.org/fr/users/50-couchy
    //     /// description:      Prevents YouTube from pausing videos when minimizing or switching tabs.
    //     ///                   Cross-browser port of https://addons.mozilla.org/en-US/firefox/addon/video-background-play-fix/
    //     /// originally from:  https://greasyfork.org/fr/scripts/371641-video-background-play-fix
    //     ///
    //     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //     const IS_YOUTUBE = window.location.hostname.endsWith('youtube.com') || window.location.hostname.endsWith('youtube-nocookie.com');

    //     // Page Visibility API
    //     Object.defineProperties(document, { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });
    //     window.addEventListener('visibilitychange', evt => evt.stopImmediatePropagation(), true, { passive: true });

    //     // User activity tracking
    //     if (IS_YOUTUBE) {
    //       const REFRESH_INTERVAL = 60 * 1000;
    //       const TIMEOUT_FUNC = function(){window._lact = Date.now();};
    //       if (window.hasOwnProperty('_lact')) {
    //         window.setInterval(TIMEOUT_FUNC, REFRESH_INTERVAL);
    //       }
    //       else {
    //         // Set a "listener" for _lact property to be written the first time
    //         Object.defineProperty(window, '_lact', {
    //           configurable: true,
    //           set: function(val){
    //             Object.defineProperty(window, '_lact', {writable: true});
    //             window._lact = val;
    //             window.setInterval(TIMEOUT_FUNC, REFRESH_INTERVAL);
    //           }
    //         });
    //       }
    //     }
    //   };
    //   //////////////////////////////////////////////////////////////////////////
    //   ///
    //   /// Focus true
    //   /// description:  Fixed to continue reading when the browser is minimized.
    //   ///
    //   //////////////////////////////////////////////////////////////////////////
    document.hasFocus = function () { return true; };

    //     window.onYouTubeIframeAPIReady = async function doDDL(){
    //         var videos = await document.querySelector('video'); // removeAttribute
    //         ///videos.getAttribute('controlslist');
    //         videos.controlsList.remove('nodownload');
    //     }


})();
(function AudioModeToggle(open) {
    "use-strict";
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///
    /// name:             Youtube Audio Mode
    /// author:           Calum; https://greasyfork.org/en/users/195276-calum
    /// description:      Add button too listen to only the audio on YouTube without loading the video.
    ///                   It doesn't support Youtube live videos.
    /// originally from:  mix beetween https://greasyfork.org/en/scripts/372074-youtube-audio-mode and https://chrome.google.com/webstore/detail/music-mode-for-youtube/abbpaepbpakcpipajigmlpnhlnbennna
    /// license:          GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
    /// screenshot:       https://raw.githubusercontent.com/teaqu/youtube-audio-mode/master/settings.jpg
    ///
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    /// FIXME: DOCUMENT
    /// https://jsdoc.app/index.html

    var timeUpdateIdentityNumber = -1;

    window.addEventListener("yt-navigate-finish", audioMode, {
        passive : true
    });

    let apply_settings = setInterval(() => {
        setTimeout(audioMode, 60);
    }, 1000);


    window.onYouTubeIframeAPIReady = apply_settings; // Blame YouTube for this

    try {
        if (typeof HXRopen === 'undefined') { // if (void 0 === HXRopen) { //
            var HXRopen = XMLHttpRequest.prototype.open;
        }
    } catch (e) {
        //console.log("The HXRopen has not been defined");
    }

    var audioMode = async function __audioMode__() {
        if (location.pathname == "/watch") {

            let video = document.getElementsByTagName("video")[0];
            let audioMode = await GM.getValue("ytAudioMode");
            addToMenu(audioMode);
            if (audioMode) {
                //watchStream();
                setPoster(video, ["maxres", "hq", "sd"]);
                //video.style.display = "none";
            } else {
                //originalStream();
                video.style.visibility = "visible";
                //video.style.display = "";
                //cleanCSS(container);
                //timeUpdateIdentityNumber++;
                //         if (!isYoutubeMusic()) {
                //           addTimeUpdate();
                //         }
                //setTimeout(videoDisable(), 1000);
            }
        } else {
            return;
        }
    };

    //   function playError(video, time) {
    //     if ( "" === video.src) {
    //       window.location.reload();
    //     }
    //   }

    //   var originalStream = () => {
    //     XMLHttpRequest.prototype.open = function(method, url) {
    //       var videoElements = document.getElementsByTagName("video");
    //       if (videoElements && videoElements.length) {
    //         var video;
    //         var videoRect;
    //         for (let i=0; i < videoElements.length; i++) {
    //           videoRect = videoElements[i].getBoundingClientRect();
    //           if (videoRect.width > 0 && videoRect.height > 0) {
    //             video = videoElements[i];
    //             break;
    //           }
    //         }
    //         if (video) {
    //           if (video.src !== "" && (video.src.indexOf("www.youtube.com") !== -1 || video.src.indexOf("music.youtube.com") !== -1)) {
    //             var paused = video.paused;
    //             var curTime = 0;
    //             curTime = video.currentTime;
    //             if (video.dataset.originalurl && video.src !== video.dataset.originalurl && video.dataset.musicurl) {
    //               if (video.dataset.musicurl !== "1" && video.src.indexOf("www.youtube.com") !== -1) {
    //                 video.src = video.dataset.originalurl;
    //                 video.load();
    //               } else {
    //                 video.load();
    //               }
    //               if (!paused) {
    //                 video.pause();
    //                 var promise = video.play();
    //                 if (void 0 !== promise) {
    //                   promise.then(function(_) {
    //                     video.currentTime = curTime;
    //                   }).catch(function(error) {
    //                     playError(video, curTime);
    //                   });
    //                 }
    //               }
    //               video.play();
    //             }
    //           }
    //         }
    //       }
    //       return HXRopen.apply(this, arguments);
    //     };
    //   };

    //   var watchStream = () => {
    //     XMLHttpRequest.prototype.open = function(method, url) {
    //       if (url.indexOf("mime=audio") !== -1) {
    //         var videoElements = document.getElementsByTagName("video");
    //         if (videoElements && videoElements.length) {
    //           var video;
    //           var videoRect;
    //           for (let i=0; i < videoElements.length; i++) {
    //             videoRect = videoElements[i].getBoundingClientRect();
    //             if (videoRect.width > 0 && videoRect.height > 0) {
    //               video = videoElements[i];
    //               break;
    //             }
    //           }
    //           if (video) {
    //             var notLiveStream = /^(?!.*live=1).+.audio.+$/;
    //             if (url.indexOf("live=1") === -1) {
    //               if (video.src.indexOf("www.youtube.com") !== -1 || video.src.indexOf("music.youtube.com") !== -1) {
    //                 /*if (flagFun())*/ setNewURL(video, url);
    //               }
    //             } else {
    //               if (notLiveStream.test(url) && !video.src.includes("audio")) {
    //                 //if (video.src.indexOf("www.youtube.com") !== -1 || video.src.indexOf("music.youtube.com") !== -1) {
    //                 video.src = url.split("&range")[0];
    //                 video.dataset.originalurl = video.src;
    //                 video.dataset.musicurl = 1;
    //               }
    //             }
    //           }
    //         }
    //       }
    //       return HXRopen.apply(this, arguments);
    //     };
    //   };

    //   function setNewURL(video, url) {
    //     var urlparts = url.split('?');
    //     if (urlparts.length >= 2) {
    //       var parametersToBeRemoved = ['rn', 'rbuf', 'range'];
    //       var parameters = urlparts[1].split(/[&;]/g);
    //       parametersToBeRemoved.forEach(k => {
    //         parameters = parameters.filter((p) => !p.startsWith(encodeURIComponent(k) + '='))
    //       });
    //       url = urlparts[0] + '?' + parameters.join('&');
    //       if (video.src !== url /*&& flagFun()*/) {
    //         video.dataset.musicurl = url;
    //         video.dataset.originalurl = video.src;
    //         var paused = video.paused;
    //         video.pause();
    //         var curTime = video.currentTime || 0;
    //         video.src = url;
    //         video.load();
    //         video.currentTime = curTime;
    //         if (!paused) {
    //           var promise = video.play();
    //           if (promise !== undefined) {
    //             promise.then(_ => {
    //               //console.log("video plays properly");
    //             })
    //               .catch(error => {
    //               //console.log("#video.play ERROR");
    //             });
    //           }
    //         }
    //       }
    //     }
    //   }

    //   function videoDisable() {
    //     var videoElements = document.getElementsByTagName("video");
    //     var videoRect;
    //     for (let i=0; i < videoElements.length; i++) {
    //       videoRect = videoElements[i].getBoundingClientRect();
    //       if (videoRect.width > 0 && videoRect.height > 0) {
    //         if (videoElements[i]) {
    //           if (videoElements[i].src !== "" && videoElements[i].src.indexOf("www.youtube.com") === -1 && videoElements[i].src.indexOf("music.youtube.com") === -1) {
    //             if (videoElements[i].dataset.musicurl && videoElements[i].dataset.musicurl === videoElements[i].src && videoElements[i].dataset.originalurl) {
    //               var paused = videoElements[i].paused;
    //               videoElements[i].pause();
    //               var curTime = 0;
    //               curTime = videoElements[i].currentTime;
    //               if (isEmbed()) {
    //                 var startTime = "start=" + parseInt(curTime);
    //                 var autoplayF = paused ? "autoplay=0" : "autoplay=1";
    //                 var wls = window.location.search;
    //                 if (wls.indexOf("?") === -1) {
    //                   wls = "?" + startTime + "&" + autoplayF;
    //                 } else {
    //                   var autoplayIndex = wls.indexOf("autoplay");
    //                   var startIndex = wls.indexOf("start");
    //                   if (autoplayIndex === -1 && startIndex === -1) {
    //                     wls = wls.replace("?", "?" + startTime + "&" + autoplayF + "&");
    //                   } else {
    //                     if (autoplayIndex !== -1) {
    //                       wls = wls.replace(wls.slice(autoplayIndex, wls.indexOf("&", autoplayIndex)), autoplayF);
    //                     } else {
    //                       wls = wls.replace("?", "?" + autoplayF + "&");
    //                     }
    //                     if (startIndex !== -1) {
    //                       wls = wls.replace(wls.slice(startIndex, wls.indexOf("&", startIndex)), startTime);
    //                     } else {
    //                       wls = wls.replace("?", "?" + startTime + "&");
    //                     }
    //                   }
    //                 }
    //                 window.location.search = wls;
    //               } else {
    //                 videoElements[i].src = videoElements[i].dataset.originalurl;
    //                 videoElements[i].load();
    //                 if (!paused) {
    //                   var promise = videoElements[i].play();
    //                   if (void 0 !== promise) {
    //                     promise.then((_) => {
    //                       videoElements[i] = curTime;
    //                     }).catch((error) => {
    //                       playError(videoElements[i], curTime);
    //                     });
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }


    //   function addTimeUpdate() {
    //     function findProgressBar() {
    //       if (idNumber === timeUpdateIdentityNumber) {
    //         iterations++;

    //         if (iterations >= 10) {
    //           clearInterval(timerId);
    //         }
    //         var videoElements = document.getElementsByTagName("video");
    //         var videoRect;
    //         var video;
    //         var i;
    //         i = 0;

    //         for (; i < videoElements.length; i++) {
    //           video = videoElements[i];

    //           if (video) {
    //             videoRect = video.getBoundingClientRect();

    //             if (videoRect.width > 0 && videoRect.height > 0) {
    //               if (video.parentNode) {
    //                 if (video.parentNode.parentNode) {
    //                   var ytplayer = video.parentNode.parentNode;

    //                   if (ytplayer.querySelector(".ytp-time-current") && ytplayer.querySelector(".ytp-play-progress")) {
    //                     video.addEventListener("timeupdate", tu);
    //                     clearInterval(timerId);
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       } else {
    //         clearInterval(timerId);
    //       }
    //     }


    //     function tu() {
    //       if (idNumber === timeUpdateIdentityNumber) {
    //         if (event.target.src.indexOf("www.youtube.com") === -1) {
    //           if (event.path[2]) {
    //             event.path[2].querySelector(".ytp-time-current").textContent = getHourMinuteSecond(event.target.currentTime);
    //             event.path[2].querySelector(".ytp-play-progress").style.transform = "scaleX(" + event.target.currentTime / event.target.duration + ")";
    //           }
    //         }
    //       } else {
    //         removeHandler(event.target);
    //       }
    //     }


    //     function removeHandler(video) {
    //       video.removeEventListener("timeupdate", tu);
    //     }


    //     function getHourMinuteSecond(seconds) {
    //       var result;
    //       var hour;
    //       var minute;
    //       var second;

    //       seconds = Math.floor(seconds);

    //       if (seconds < 60) {
    //         hour = "false";
    //         minute = "0";
    //         second = seconds;
    //       } else {
    //         if (seconds >= 3600) {
    //           hour = Math.floor(seconds / 3600);
    //           minute = Math.floor(seconds % 3600 / 60);
    //           second = Math.floor(seconds % 60);
    //         } else {
    //           if (seconds >= 60) {
    //             /** @type {string} */
    //             hour = "false";
    //             /** @type {number} */

    //             minute = Math.floor(seconds / 60);
    //             /** @type {number} */

    //             second = Math.floor(seconds % 60);
    //           }
    //         }
    //       }

    //       if (second < 10) {
    //         /** @type {string} */
    //         second = "0" + second;
    //       }

    //       if (hour === "false") {
    //         return minute + ":" + second;
    //       } else {
    //         if (minute < 10) {
    //           /** @type {string} */
    //           minute = "0" + minute;
    //         }

    //         return hour + ":" + minute + ":" + second;
    //       }
    //     }

    //     var idNumber = timeUpdateIdentityNumber;
    //     /** @type {number} */
    //     var iterations = 0;
    //     /** @type {number} */
    //     var timerId = setInterval(findProgressBar, 1000);
    //   };

    /**
   * @return {?}
   */

    function isEmbed() {
        return -1 !== window.location.href.indexOf("www.youtube.com/embed/");
    };
    /**
   * @return {?}
   */

    function isYoutubeMusic() {
        return -1 !== window.location.hostname.indexOf("music.youtube.com");
    };


    var addToMenu = function(audioMode) { // No async here

        if (audioMode) {
            document.getElementById('youtube-screenshot-button').style.display = 'none';
        }
        /// Sanitize
        /// Fix title container
        //$(".title").css("max-width", "fit-content");

        const superTitles = $( ".ytd-video-primary-info-renderer.style-scope.super-title" );

        if (superTitles){
            //$(".ytd-video-primary-info-renderer.style-scope.super-title").hide("fast");
            $( ".ytd-video-primary-info-renderer.style-scope.super-title" ).insertAfter( $( ".ytd-video-primary-info-renderer.style-scope.title" ) );
            //$(".ytd-video-primary-info-renderer.style-scope.super-title").show();
        }

        /// Add audio mode to the settings menu
        const videoTitleContainer = $( ".ytd-video-primary-info-renderer.style-scope.title" )[0];
        const panel = document.getElementsByClassName("ytp-panel-menu")[0];

        var setCSS = function(elem){
            var elem_list = [];
            elem.style.position        = "absolute";
            elem.style.right           = "0px";
            elem.style.top             = "0px";
            elem.style.backgroundColor = "transparent";
            elem.style.color           = "var(--yt-spec-text-secondary)";
            elem_list.push(elem);
            return elem_list;
        }

        let audioToggleReady = document.getElementById("audio-mode"); // In case of "SHIFT+P" or "SHIFT+N"

        if (!audioToggleReady) {

            /// TRY add tooltip
            /// onmouseover="this.style.content = '${translate.audiomodenotice}'"

            //const audioModeTooltip = document.getElementsByClassName("audiomodetooltip");
            //       var contentIconButton;
            //       if (audioMode) contentIconButton = "♪"

            // Is activated
            var modeAudioState = translate.noactivated;
            audioMode ? modeAudioState = translate.activated : translate.noactivated;

            videoTitleContainer
                .insertAdjacentHTML('beforebegin', `
            <div class="ytp-menuitem"
                aria-checked="${audioMode}"
                id="audio-mode">
                <div class="ytp-menuitem-content" style="white-space:nowrap">&nbsp${translate.audiomode}&nbsp&nbsp
                    <div class="ytp-menuitem-toggle-checkbox"></div>
                </div>
            </div>`)
            ;

            // Toggle audio mode on or off
            let audioToggle = document.getElementById("audio-mode");

            audioToggle.onclick = async function() {
                let audioMode = ! await GM.getValue("ytAudioMode");
                this.setAttribute("aria-checked", audioMode);
                GM.setValue("ytAudioMode", audioMode);
                if (audioMode) {
                    setPoster(video, ["maxres", "hq", "sd"]);
                    //video.style.visibility = "hidden";
                } else {
                    let watermarkAudioMode = document.getElementById('watermarkAudioMode');
                    if (watermarkAudioMode) watermarkAudioMode.remove();
                    var container = document.getElementsByClassName('html5-video-player')[0];
                    container.style.background = '';
                    container.style.filter = "";
                    var video = document.getElementsByTagName("video")[0];
                    video.style.visibility = "visible";
                    //location.reload();
                }
                //location.reload();
            }
            setCSS(audioToggle);
        } else {
            return;
        }

    }

    // Set the video poster from thumbnails with the best avaliable format
    // https://developers.google.com/youtube/v3/docs/thumbnails
    /// FIXME: try add watermark like https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_text
    var setPoster = function(video, fmts) {
        let container = document.getElementsByClassName('html5-video-player')[0];
        let containerHeight = container.clientHeight;
        //console.log("containerHeight: " + container.clientHeight);
        let img = new Image();
        let videoId = location.search.match(/v=(.+?)(&|$)/)[1];
        img.src = `//i.ytimg.com/vi/${videoId}/${fmts.shift()}default.jpg`
        img.onload = function() {
            // A height 90 is YouTube"s not found image.
            if (img.height <= 90) {
                setPoster(video, fmts);
            } else {
                var setContainerCSS = function(elem){
                    var elem_list = [];
                    elem.style.background         = `url(${img.src})`;
                    elem.style.backgroundSize     = "contain";
                    elem.style.backgroundRepeat   = "no-repeat";
                    elem.style.backgroundPosition = "center";
                    elem.style.filter             = "saturate(30%)";
                    elem_list.push(elem);
                    return elem_list;
                }
                setContainerCSS(container);
            }

            video.style.visibility = "hidden";

            let watermark = document.createElement("div");
            watermark.id = 'watermarkAudioMode';
            let watermarkAudioMode = document.getElementById('watermarkAudioMode');
            if (!watermarkAudioMode)
                container.appendChild(watermark);

            let {direction, "writing-mode": writing_mode} = getComputedStyle(document.body);
            //console.log(direction, writing_mode);

            var setFiligraneCSS = function(elem){
                var elem_list = [];
                elem.innerHTML                 = `&#8239${translate.audiomode}&#8239`;
                elem.style.color               = "#bbb !important";
                elem.style.fontSize            = "3.2vw";
                elem.style.width               = `${containerHeight}px !important`;
                elem.style.maxWidth            = `${containerHeight}px !important`;
                elem.style.height              = "auto";
                elem.style.position            = "sticky";
                //         elem.style.position            = "relative";
                elem.style.padding             = "30px";
                //         elem.style.display             = "flex";
                //         elem.style.alignSelf           = "flex-start";
                //         elem.style.overflow            = "hidden";
                //         elem.style.float      = "none";
                //         elem.style.clear      = "both";
                elem.style.zIndex              = "-1";
                elem.style.whiteSpace          = "nowrap";
                elem.style.fontFamily          = "sans-serif";
                elem.style.background          = "rgba(0,0,0,0.34)";
                elem.style.textOrientation     = "mixed";
                //         elem.style.top                 = "0px";
                elem.style.top                 = `calc(100% - 100%/2)`;
                //         elem.style.top                 = "70%";
                //elem.style.writingMode = "vertical-rl";
                //         elem.style.textOrientation = `${direction}`;
                //         elem.style.writingMode = `${writing_mode}`;
                //         elem.style.transformOrigin = "left";
                elem.style.transform           = "translateY(-50%) rotate(-90deg)"; //standard
                elem.style.msTransform         = "translateY(-50%) rotate(-90deg)"; //IE
                elem.style.mozTransform        = "translateY(-50%) rotate(-90deg)"; //Firefox
                elem.style.webkitTransform     = "translateY(-50%) rotate(-90deg)"; //Chrome
                elem.style.oTransform          = "translateY(-50%) rotate(-90deg)"; //Opera
                //         elem.style.transform           = `translateY(calc(100% - ${containerHeight}px/2)) rotate(-90deg)`; //standard
                //         elem.style.msTransform         = `translateY(calc(100% - ${containerHeight}px/2)) rotate(-90deg)`; //IE
                //         elem.style.mozTransform        = `translateY(calc(100% - ${containerHeight}px/2)) rotate(-90deg)`; //Firefox
                //         elem.style.webkitTransform     = `translateY(calc(100% - ${containerHeight}px/2)) rotate(-90deg)`; //Chrome
                //         elem.style.oTransform          = `translateY(calc(100% - ${containerHeight}px/2)) rotate(-90deg)`; //Opera
                elem.style.textAlign           = "center";
                //         elem.style.justifyContent      = "center";
                elem.style.justifyContent      = "safe stretch !important";
                elem.style.alignItems          = "center !important";
                elem.style.marginLeft          = "-87%";
                elem.style.textShadow          = "1px 1px 1px rgba(0,0,0,0.004) !important";
                elem.style.mozOsxFontSmoothing = "grayscale !important";
                elem.style.webkitFontSmoothing = "antialiased !important";
                elem.style.mozFontSmoothing    = "antialiased !important";
                elem.style.textRendering       = "optimizelegibility !important";

                elem_list.push(elem);
                return elem_list;
            };
            setFiligraneCSS(watermark);

        }
    };

    //   // TOOLTIP
    //   function showTooltip (elem) {  /* added argument */
    //     //elem = audioModeTooltip;
    //     elem.style.display="block"; /* changed variable to argument */
    //   }
    //   function hideTooltip (elem) { /* added argument */
    //     //elem = audioModeTooltip;
    //     elem.style.display="";  /* changed variable to argument */
    //   }


})(XMLHttpRequest.prototype.open)
;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///
/// name:             Youtube: AutoPlay Next Right Away
/// author:           Zren
/// description:      Play next video within 1 second of the end of a video.
/// originally from:  https://greasyfork.org/en/scripts/23455-youtube-autoplay-next-right-away
///                   https://raw.githubusercontent.com/teaqu/youtube-audio-mode/master/settings.jpg
///
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
setInterval(async function APNRA() {
  /** @type {(Element|null)} */
  var q = document.querySelector('.ytp-upnext:not([style="display: none;"]) a.ytp-upnext-autoplay-icon');
  if (q) {
    q.click();
  }
}, 100);
