'use strict';

// ----------------------------------------------------------------------------------------------------------------- //

// /**
//  * the "Grabber"
//  * @author K-mik@Z
//  */

function asyncGeneratorStep(e,r,n,t,a,o,c){try{var u=e[o](c),s=u.value}catch(e){return void n(e)}u.done?r(s):Promise.resolve(s).then(t,a)}function _asyncToGenerator(u){return function(){var e=this,c=arguments;return new Promise(function(r,n){function t(e){asyncGeneratorStep(o,r,n,t,a,"next",e)}function a(e){asyncGeneratorStep(o,r,n,t,a,"throw",e)}var o=u.apply(e,c);t(void 0)})}}var grab=function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:if((n=e.sent).ok)return e.next=6,n.text();e.next=10;break;case 6:return t=e.sent,e.abrupt("return",t);case 10:console.log("HTTP-Error: "+n.status);case 11:case"end":return e.stop()}},e)}));return function(e){return r.apply(this,arguments)}}()();


// ----------------------------------------------------------------------------------------------------------------- //

// /**
// * Nano Core 2 - An adblocker
// * Copyright (C) 2018-2019  Nano Core 2 contributors
// * for the licence, see source:  https://github.com/NanoAdblocker/NanoCore2/blob/master/src/snippets.js
// * For redirectable resources, see: https://github.com/NanoAdblocker/NanoCore2/tree/master/src/war
// */

grab(https://raw.githubusercontent.com/NanoAdblocker/NanoCore2/master/src/snippets.js)


// ----------------------------------------------------------------------------------------------------------------- //

// /**
// * uBlock-user's scriptlet
// * for the licence, see source:  https://github.com/uBlock-user/uBO-Personal-Filters
// */

grab(https://raw.githubusercontent.com/uBlock-user/uBO-Scriptlets/master/scriptlets.js)


//! IN TEST (ADGUARD INTEGRATION)
// ----------------------------------------------------------------------------------------------------------------- //

// **
// * AdGuard Scriptlets integration
// * Version 1.2.5
// * source metrika-yandex-tag:  https://github.com/AdguardTeam/Scriptlets/blob/master/dist/redirect-files/metrika-yandex-tag.js
// * source metrika-yandex-watch:  https://github.com/AdguardTeam/Scriptlets/blob/master/dist/redirect-files/metrika-yandex-watch.js
// */

metrika-yandex-tag application/javascript
grab(https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/redirect-files/metrika-yandex-tag.js)

metrika-yandex-watch application/javascript
grab(https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/redirect-files/metrika-yandex-watch.js)

