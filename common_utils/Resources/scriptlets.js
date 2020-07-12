'use strict';

// ----------------------------------------------------------------------------------------------------------------- //

// /**
//  * the "Grabber"
//  * @author K-mik@Z
//  */
function asyncGeneratorStep(e,r,n,t,a,o,c){try{var u=e[o](c),s=u.value}catch(e){return void n(e)}u.done?r(s):Promise.resolve(s).then(t,a)}function _asyncToGenerator(u){return function(){var e=this,c=arguments;return new Promise(function(r,n){function t(e){asyncGeneratorStep(o,r,n,t,a,"next",e)}function a(e){asyncGeneratorStep(o,r,n,t,a,"throw",e)}var o=u.apply(e,c);t(void 0)})}}var grab=function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function e(r){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:if((n=e.sent).ok)return e.next=6,n.text();e.next=10;break;case 6:return t=e.sent,e.abrupt("return",t);case 10:console.log("HTTP-Error: "+n.status);case 11:case"end":return e.stop()}},e)}));return function(e){return r.apply(this,arguments)}}()();

// ----------------------------------------------------------------------------------------------------------------- //

// **
// * AdGuard Scriptlets integration
// * Version 1.2.5
// * source metrika-yandex-tag:  https://github.com/AdguardTeam/Scriptlets/blob/master/dist/redirect-files/metrika-yandex-tag.js
// * source metrika-yandex-watch:  https://github.com/AdguardTeam/Scriptlets/blob/master/dist/redirect-files/metrika-yandex-watch.js
// */
// Utils
grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/types/scriptlets.d.ts");
grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/scriptlets.js");
//# sourceMappingURL=https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/scriptlets.js.map


// ----------------------------------------------------------------------------------------------------------------- //

// /**
// * Nano Core 2 - An adblocker
// * Copyright (C) 2018-2019  Nano Core 2 contributors
// * for the licence, see source:  https://github.com/NanoAdblocker/NanoCore2/blob/master/src/snippets.js
// * For redirectable resources, see: https://github.com/NanoAdblocker/NanoCore2/tree/master/src/war
// */
grab("https://raw.githubusercontent.com/NanoAdblocker/NanoCore2/master/src/snippets.js");


// ----------------------------------------------------------------------------------------------------------------- //

// /**
// * uBlock-user's scriptlet
// * for the licence, see source:  https://github.com/uBlock-user/uBO-Personal-Filters
// */
grab("https://raw.githubusercontent.com/uBlock-user/uBO-Scriptlets/master/scriptlets.js");

// ----------------------------------------------------------------------------------------------------------------- //

// **
// * AdGuard Redirects
// * Version 1.2.5
// * source metrika-yandex-tag:  https://github.com/AdguardTeam/Scriptlets/blob/master/dist/redirect-files/metrika-yandex-tag.js
// * source metrika-yandex-watch:  https://github.com/AdguardTeam/Scriptlets/blob/master/dist/redirect-files/metrika-yandex-watch.js
// */
// Utils
grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/types/scriptlets.d.ts");
grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/scriptlets.js");
//# sourceMappingURL=https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/scriptlets.js.map
//grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/cjs/scriptlets.d.ts");
//grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/cjs/scriptletsCjs.js");
//# sourceMappingURL=https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/cjs/scriptletsCjs.js.map
grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/redirects.js");
//# sourceMappingURL=https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/redirects.js.map
// redirect-rule
//let metrika_yandex_tag_script = grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/redirect-files/metrika-yandex-tag.js");
//let metrika_yandex_watch_script = grab("https://raw.githubusercontent.com/AdguardTeam/Scriptlets/master/dist/redirect-files/metrika-yandex-watch.js");
metrika-yandex-tag application/javascript
(function(source, args){
function metrikaYandexTag(source) {
    var asyncCallbackFromOptions = function asyncCallbackFromOptions(param) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = options.callback;
      var ctx = options.ctx;

      if (typeof callback === 'function') {
        callback = ctx !== undefined ? callback.bind(ctx) : callback;
        setTimeout(function () {
          return callback();
        });
      }
    };

    var init = noopFunc;
    /**
     * https://yandex.ru/support/metrica/objects/addfileextension.html
     */

    var addFileExtension = noopFunc;
    /**
     * https://yandex.ru/support/metrica/objects/extlink.html
     */

    var extLink = asyncCallbackFromOptions;
    /**
     * https://yandex.ru/support/metrica/objects/file.html
     */

    var file = asyncCallbackFromOptions;
    /**
     * https://yandex.ru/support/metrica/objects/get-client-id.html
     * @param {Function} cb
     */

    var getClientID = function getClientID(cb) {
      setTimeout(cb(null));
    };
    /**
     * https://yandex.ru/support/metrica/objects/hit.html
     */


    var hitFunc = asyncCallbackFromOptions;
    /**
     * https://yandex.ru/support/metrica/objects/notbounce.html
     */

    var notBounce = asyncCallbackFromOptions;
    /**
     * https://yandex.ru/support/metrica/objects/params-method.html
     */

    var params = noopFunc;
    /**
     * https://yandex.ru/support/metrica/objects/reachgoal.html
     * @param {string} target
     * @param {Object} params
     * @param {Function} callback
     * @param {any} ctx
     */

    var reachGoal = function reachGoal(target, params, callback, ctx) {
      asyncCallbackFromOptions(null, {
        callback: callback,
        ctx: ctx
      });
    };
    /**
     * https://yandex.ru/support/metrica/objects/set-user-id.html
     */


    var setUserID = noopFunc;
    /**
     * https://yandex.ru/support/metrica/objects/user-params.html
     */

    var userParams = noopFunc;
    var api = {
      init: init,
      addFileExtension: addFileExtension,
      extLink: extLink,
      file: file,
      getClientID: getClientID,
      hit: hitFunc,
      notBounce: notBounce,
      params: params,
      reachGoal: reachGoal,
      setUserID: setUserID,
      userParams: userParams
    };

    function ym(id, funcName) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return api[funcName] && api[funcName].apply(api, args);
    }

    window.ym = ym;
    hit(source);
  }
function hit(source, message) {
    if (source.verbose !== true) {
      return;
    }

    try {
      var log = console.log.bind(console);
      var trace = console.trace.bind(console);
      var prefix = source.ruleText || '';

      if (source.domainName) {
        var AG_SCRIPTLET_MARKER = '#%#//';
        var UBO_SCRIPTLET_MARKER = '##+js';
        var ruleStartIndex;

        if (source.ruleText.indexOf(AG_SCRIPTLET_MARKER) > -1) {
          ruleStartIndex = source.ruleText.indexOf(AG_SCRIPTLET_MARKER);
        } else if (source.ruleText.indexOf(UBO_SCRIPTLET_MARKER) > -1) {
          ruleStartIndex = source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);
        } // delete all domains from ruleText and leave just rule part


        var rulePart = source.ruleText.slice(ruleStartIndex); // prepare applied scriptlet rule for specific domain

        prefix = "".concat(source.domainName).concat(rulePart);
      } // Used to check if scriptlet uses 'hit' function for logging


      var LOG_MARKER = 'log: ';

      if (message) {
        if (message.indexOf(LOG_MARKER) === -1) {
          log("".concat(prefix, " message:\n").concat(message));
        } else {
          log(message.slice(LOG_MARKER.length));
        }
      }

      log("".concat(prefix, " trace start"));

      if (trace) {
        trace();
      }

      log("".concat(prefix, " trace end"));
    } catch (e) {// try catch for Edge 15
      // In according to this issue https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14495220/
      // console.log throws an error
    } // This is necessary for unit-tests only!


    if (typeof window.__debug === 'function') {
      window.__debug(source);
    }
  }
function noopFunc() {};
        const updatedArgs = args ? [].concat(source).concat(args) : [source];
        metrikaYandexTag.apply(this, updatedArgs);
    
})({"name":"metrika-yandex-tag","args":[]}, []);
//metrika_yandex_tag_script;

metrika-yandex-watch application/javascript
(function(source, args){
function metrikaYandexWatch(source) {
    var cbName = 'yandex_metrika_callbacks';
    /**
     * Gets callback and its context from options and call it in async way
     * @param {Object} options Yandex Metrika API options
     */

    var asyncCallbackFromOptions = function asyncCallbackFromOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = options.callback;
      var ctx = options.ctx;

      if (typeof callback === 'function') {
        callback = ctx !== undefined ? callback.bind(ctx) : callback;
        setTimeout(function () {
          return callback();
        });
      }
    };

    function Metrika() {} // constructor
    // Methods without options


    Metrika.prototype.addFileExtension = noopFunc;
    Metrika.prototype.getClientID = noopFunc;
    Metrika.prototype.setUserID = noopFunc;
    Metrika.prototype.userParams = noopFunc; // Methods with options
    // The order of arguments should be kept in according to API

    Metrika.prototype.extLink = function (url, options) {
      asyncCallbackFromOptions(options);
    };

    Metrika.prototype.file = function (url, options) {
      asyncCallbackFromOptions(options);
    };

    Metrika.prototype.hit = function (url, options) {
      asyncCallbackFromOptions(options);
    };

    Metrika.prototype.reachGoal = function (target, params, cb, ctx) {
      asyncCallbackFromOptions({
        callback: cb,
        ctx: ctx
      });
    };

    Metrika.prototype.notBounce = asyncCallbackFromOptions;

    if (window.Ya) {
      window.Ya.Metrika = Metrika;
    } else {
      window.Ya = {
        Metrika: Metrika
      };
    }

    if (window[cbName] && Array.isArray(window[cbName])) {
      window[cbName].forEach(function (func) {
        if (typeof func === 'function') {
          func();
        }
      });
    }

    hit(source);
  }
function hit(source, message) {
    if (source.verbose !== true) {
      return;
    }

    try {
      var log = console.log.bind(console);
      var trace = console.trace.bind(console);
      var prefix = source.ruleText || '';

      if (source.domainName) {
        var AG_SCRIPTLET_MARKER = '#%#//';
        var UBO_SCRIPTLET_MARKER = '##+js';
        var ruleStartIndex;

        if (source.ruleText.indexOf(AG_SCRIPTLET_MARKER) > -1) {
          ruleStartIndex = source.ruleText.indexOf(AG_SCRIPTLET_MARKER);
        } else if (source.ruleText.indexOf(UBO_SCRIPTLET_MARKER) > -1) {
          ruleStartIndex = source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);
        } // delete all domains from ruleText and leave just rule part


        var rulePart = source.ruleText.slice(ruleStartIndex); // prepare applied scriptlet rule for specific domain

        prefix = "".concat(source.domainName).concat(rulePart);
      } // Used to check if scriptlet uses 'hit' function for logging


      var LOG_MARKER = 'log: ';

      if (message) {
        if (message.indexOf(LOG_MARKER) === -1) {
          log("".concat(prefix, " message:\n").concat(message));
        } else {
          log(message.slice(LOG_MARKER.length));
        }
      }

      log("".concat(prefix, " trace start"));

      if (trace) {
        trace();
      }

      log("".concat(prefix, " trace end"));
    } catch (e) {// try catch for Edge 15
      // In according to this issue https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14495220/
      // console.log throws an error
    } // This is necessary for unit-tests only!


    if (typeof window.__debug === 'function') {
      window.__debug(source);
    }
  }
function noopFunc() {};
        const updatedArgs = args ? [].concat(source).concat(args) : [source];
        metrikaYandexWatch.apply(this, updatedArgs);
    
})({"name":"metrika-yandex-watch","args":[]}, []);
//metrika_yandex_watch_script;
