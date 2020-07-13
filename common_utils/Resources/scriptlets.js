'use strict';

// ----------------------------------------------------------------------------------------------------------------- //

// Nano Core 2 - An adblocker
// Copyright (C) 2018-2019  Nano Core 2 contributors
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// ----------------------------------------------------------------------------------------------------------------- //

// source:   https://github.com/NanoAdblocker/NanoCore2/blob/master/src/snippets.js
// For redirectable resources, see:   https://github.com/NanoAdblocker/NanoCore2/tree/master/src/war

// ----------------------------------------------------------------------------------------------------------------- //

// Assign a variable when the document gets ready, 2 required arguments
// chain - The property chain
// value - The value to assign, must be 'null', 'true', or 'false'
//
/// nano-assign-variable-onready.js
(() => {
    var chain = '{{1}}';
    var value = '{{2}}';
    if (chain === '' || chain === '{{1}}') {
        return;
    }
    if (value === 'null') {
        value = null;
    } else if (value === 'true') {
        value = true;
    } else if (value === 'false') {
        value = false;
    } else {
        return;
    }
    var assign = function () {
        var parent = window;
        chain = chain.split('.');
        for (var i = 0; i < chain.length - 1; i++) {
            parent = parent[chain[i]];
        }
        parent[chain[chain.length - 1]] = value;
    };
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        assign();
    } else {
        addEventListener('DOMContentLoaded', assign);
    }
})();

// ----------------------------------------------------------------------------------------------------------------- //

// Experimental resources, these can change or break at any time

// Based on KAADIVVVV
// License: https://github.com/Robotex/KAADIVVVV/blob/master/LICENSE
//
/// nano-vvvvid-it.js
(() => {
    function defuse() {
        var checkAdv = function () {
            this.hasAdv = false;
        };
        vvvvid.models.PlayerObj.prototype.checkAdv = checkAdv;
        window[wnbshgd] = vvvvid.models.PlayerObj.prototype.checkAdv;
    }
    if (typeof vvvvid === 'object') {
        defuse();
    } else {
        addEventListener('DOMContentLoaded', defuse);
    }
})();

/// nano-colombiaonline-com.js
(() => {
    var magic = 'a' + Math.random().toString(36).substring(2);
    var testScript = "typeof otab == 'function'";
    var testComment = /\d{5,} \d{1,2}/;
    //
    var getter = function () {
        var script, temp;
        //
        temp = Array.from(document.querySelectorAll(
            'script:not([src]):not([' + magic + '])'
        ));
        if (document.currentScript && !document.currentScript.hasAttribute(magic)) {
            temp.unshift(document.currentScript);
        }
        if (temp.length === 0) {
            return true;
        }
        for (var e of temp) {
            e.setAttribute(magic, '');
            if (e.textContent && e.textContent.includes(testScript)) {
                script = e;
                break;
            }
        }
        //
        if (script === undefined) {
            return true;
        }
        var prev = script.previousSibling;
        temp = prev;
        while (temp = temp.previousSibling) {
            if (temp.nodeType === Node.COMMENT_NODE && testComment.test(temp.data)) {
                prev.style.setProperty('display', 'none', 'important');
                return false;
            }
        }
    };
    //
    Object.defineProperty(window, "trev", {
        set: function () { },
        get: function () {
            var r;
            var i = 0;
            do {
                try {
                    r = getter();
                } catch (err) { }
            } while (i++ , !r && i < 100);
            return null;
        }
    });
    addEventListener('load', function () {
        void trev;
    });
    //
    var isInBackground = false;
    var reStart = /^\/[a-z_]+\.cms/;
    var reEnd = /^ \d{5,} \d{1,2} $/;
    var adsHidder = function () {
        if (isInBackground || !document.body) {
            return;
        }
        var iterator = document.createTreeWalker(document.body, NodeFilter.SHOW_COMMENT);
        var comment;
        while (comment = iterator.nextNode()) {
            if (reStart.test(comment.data)) {
                var toHide = [];
                var prev = comment;
                while (prev = prev.previousSibling) {
                    if (prev.nodeType === Node.COMMENT_NODE && reEnd.test(prev.data)) {
                        if (toHide.length < 15) {
                            for (var e of toHide) {
                                try {
                                    e.style.setProperty('display', 'none', 'important');
                                } catch (err) { }
                            }
                        }
                        break;
                    }
                    toHide.push(prev);
                }
            }
        }
    };
    addEventListener('focus', function () {
        isInBackground = false;
    });
    addEventListener('blur', function () {
        isInBackground = true;
    });
    setInterval(adsHidder, 1000);
})();

// Patch document.createElement and prevent created script from receiving network error event, 1 required argument
// url - The URL matcher of the script
//
/// nano-hijack-script-create.js
(() => {
    var _createElement = document.createElement;
    var needle = '{{1}}';
    if (needle === '' || needle === '{{1}}') {
        needle = '.?';
    } else if (needle.length > 2 && needle.startsWith('/') && needle.endsWith('/')) {
        needle = needle.slice(1, -1);
    } else {
        needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle = new RegExp(needle);
    document.createElement = function (name) {
        var elem = _createElement.apply(this, arguments);
        if (name === 'script') {
            elem.addEventListener('error', function (e) {
                if (needle.test(elem.src)) {
                    e.preventDefault();
                    e.stopPropagation();
                    var ev = new Event('load');
                    elem.dispatchEvent(ev);
                }
            });
        }
        return elem;
    };
})();

// Insert an invisible elements onto the page, can be used to dodge baits, 1 required argument
// identifier - An identifier, either an id or a class name.Like '#id' or '.class'
//
/// nano-make-bait-element.js
(() => {
    var identifier = '{{1}}';
    var element = document.createElement('div');
    if (identifier.charAt(0) === '#') {
        element.id = identifier.substring(1);
    } else if (identifier.charAt(0) === '.') {
        element.className = identifier.substring(1);
    } else {
        return;
    }
    element.style.display = 'none';
    document.documentElement.appendChild(element);
})();

// Grant fake notification permission
//
/// nano-grant-fake-notification.js
(() => {
    Notification = function () { };
    Notification.permission = 'default';
    Notification.requestPermission = function (callback) {
        Notification.permission = 'granted';
        if (callback) {
            setTimeout(callback, 0, 'granted');
        }
        return Promise.resolve('granted');
    };
})();

// Prevent inline scripts with specific IDs from executing, 1 required argument
// needle - The ID matcher, can be a plain string (exact match) or a regular expression
//
/// nano-abort-inline-scripts-by-id.js
(() => {
    let needle = '{{1}}';
    if (needle === '' || needle === '{{1}}') {
        return;
    } else if (needle.startsWith('/') && needle.endsWith('/')) {
        needle = needle.slice(1, -1);
    } else {
        needle = '^' + needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$';
    }
    needle = new RegExp(needle);
    //
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'SCRIPT' && needle.test(node.id)) {
                    node.textContent = '';
                    node.remove();
                }
            }
        }
    });
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        return; // Too late
    } else {
        observer.observe(document, {
            childList: true,
            subtree: true,
        });
        addEventListener('DOMContentLoaded', () => {
            observer.disconnect();
        });
    }
})();

// ----------------------------------------------------------------------------------------------------------------- //

// Deprecated resources, these may be removed in the future

// Remove elements when the document gets ready, 1 required argument
// selector - The selector for elements to remove, must be a plain CSS selector, pseudo-selectors are not supported
//
/// nano-remove-elements-onready.js
(() => {
    var selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
    }
    var remove = function () {
        var elements = document.querySelectorAll(selector);
        for (var element of elements) {
            element.remove();
        }
    };
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        remove();
    } else {
        addEventListener('DOMContentLoaded', remove);
    }
})();

// ----------------------------------------------------------------------------------------------------------------- //

// Privileged resources, these are only available to Nano Adblocker's trusted filter lists

// Click elements when the document gets ready, 1 required argument
// selector - The selector for elements to remove, must be a plain CSS selector, pseudo-selectors are not supported
//
/// nanop-click-elements-onready.js
(() => {
    var guard = '{{nano}}';
    if (guard === '{{nano}}') {
        return;
    }
    var selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
    }
    var click = function () {
        var elements = document.querySelectorAll(selector);
        for (var element of elements) {
            element.click();
        }
    };
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        click();
    } else {
        addEventListener('DOMContentLoaded', click);
    }
})();

// Click elements when the document gets loaded, 1 required argument
// selector - The selector for elements to remove, must be a plain CSS selector, pseudo-selectors are not supported
//
/// nanop-click-elements-onload.js
(() => {
    var guard = '{{nano}}';
    if (guard === '{{nano}}') {
        return;
    }
    var selector = '{{1}}';
    if (selector === '' || selector === '{{1}}') {
        return;
    }
    var click = function () {
        var elements = document.querySelectorAll(selector);
        for (var element of elements) {
            element.click();
        }
    };
    if (document.readyState === 'complete') {
        click();
    } else {
        addEventListener('load', click);
    }
})();

// Set a cookie, 1 required arguments, 3 optional arguments
// data   - The key = value pair
// path   - Optional, the path, default to current path
// domain - Optional, the domain, default to current domain
// secure - true or false; optional, default to false
// del    - true or false, set to true to delete the cookie instead; optional, default to false
//
/// nanop-easy-set-cookie.js
(() => {
    var guard = '{{nano}}';
    if (guard === '{{nano}}') {
        return;
    }
    var data = '{{1}}';
    var path = '{{2}}';
    var domain = '{{3}}';
    var secure = '{{4}}';
    var del = '{{5}}';
    if (data.indexOf('=') === -1) {
        return;
    }
    if (del === 'true') {
        data += ';max-age=-100';
    } else {
        data += ';max-age=2592000'; // 30 days
    }
    if (path !== '' && path !== '{{2}}') {
        data += ';path=' + path;
    }
    if (domain !== '' && domain !== '{{3}}') {
        data += ';domain=' + domain;
    }
    if (secure === 'true') {
        data += ';secure';
    }
    document.cookie = data;
})();

// Set a cookie the hard way, 1 required argument
// data - The cookie data to set
//
/// nanop-set-cookie.js
(() => {
    var guard = '{{nano}}';
    if (guard === '{{nano}}') {
        return;
    }
    var data = '{{1}}';
    if (data.indexOf('=') === -1) {
        return;
    }
    document.cookie = data;
})();

// Redirect to a URL in GET parameter
// key - The parameter key
//
/// nanop-get-redirect.js
(() => {
    var guard = '{{nano}}';
    if (guard === '{{nano}}') {
        return;
    }
    var data = '{{1}}';
    if (data === '' || data === '{{1}}') {
        return;
    }
    var url = new URL(location.href);
    var param = url.searchParams.get(data);
    if (typeof param !== 'string' || !/^https?:\/\//.test(param)) {
        return;
    }
    location.href = param;
})();


// ----------------------------------------------------------------------------------------------------------------- //

// /**
// * uBlock-user's scriptlet
// * for the licence, see source:  https://github.com/uBlock-user/uBO-Personal-Filters
// */
// Collection of userscripts to be used for scriptlet injection on domains.

/// readOnly.js
/// alias ro.js
// example.com##+js(ro, canAds, true)
(() => {
		let prop = '{{1}}';
		if ( prop === '' || prop === '{{1}}' ) { return; }
		let data = '{{2}}';
		const Object = window.Object.bind(window);
		const descriptor = window.Object.getOwnPropertyDescriptor.bind(window.Object);
		const defineProperty = window.Object.defineProperty.bind(window.Object);
		const finalSetter = () => { };
		const finalGetter = () => { return data; };
		const trustedSetters = { };
		const makeProxy = (parent, chain) => {
			const i = chain.indexOf('.');
			if ( i === -1 ) {
				let current = descriptor(parent, chain);
				if ( !current || current.set !== finalSetter || current.get !== finalGetter ) {
					defineProperty(parent, chain, {
						configurable: false,
						set: finalSetter,
						get: finalGetter
					});
				}
			} else {
				let prop = chain.slice(0, i);
				let val = parent[prop];
				chain = chain.substring(i + 1);
				if ( val instanceof Object ) {
					makeProxy(val, chain);
				} else {
					let current = descriptor(parent, prop);
					if ( !current || !trustedSetters[chain] || trustedSetters[chain] !== current.set ) {
						const setter = value => {
							if ( value instanceof Object ) {
								try {
									makeProxy(value, chain);
									val = value;
								} catch { }
							}
						};
						trustedSetters[chain] = setter;
						defineProperty(parent, prop, {
							configurable: false,
							set: setter,
							get: () => { return val; }
						});
					}
				}
			}
		};
		const define = payload => {
			data = payload;
			try {
				makeProxy(window, prop);
			} catch { }
		};
		switch (data) {
			default: 		return define(data);
		}
})();		

/// remove-elem.js
/// alias re.js
// example.com##+js(re, [selector])
(() => {
		'use strict';
		const selector = '{{1}}';
		if ( selector === '' || selector === '{{1}}' ) { return; }
		let asyncTimer;
		const rm = () => {
		 			   asyncTimer = undefined;
					   const elements = document.querySelectorAll(selector);
					   try {
						  for (const element of elements) {
						       if (element) { element.remove(); }
					       	  }
					   } catch { }
		};
		const rmAsync = () => {
        				  if ( asyncTimer !== undefined ) { return; }
        				  asyncTimer = window.requestAnimationFrame(rm);
    		};
		const observer = new MutationObserver(rmAsync);
    		observer.observe(document.documentElement, { childList: true, subtree: true });
})();	

/// remove-shadowroot-elem.js
/// alias rsre.js
// example.com##+js(rsre, [selector])
(() => {
		'use strict';
		const selector = '{{1}}';
		if ( selector === '' || selector === '{{1}}' ) { return; }
		let asyncTimer;
		const queryShadowRootElement = (shadowRootElement, rootElement) => {
	      		if (!rootElement) {
        		     return queryShadowRootElement(shadowRootElement, document.documentElement);
           		}
   			const els = rootElement.querySelectorAll(shadowRootElement);
    			for (const el of els) { if (el) {return el;} }
    			const probes = rootElement.querySelectorAll('*');
    			for (const probe of probes) {
        		     if (probe.shadowRoot) {
            			 const shadowElement = queryShadowRootElement(shadowRootElement, probe.shadowRoot);
            			 if (shadowElement) { return shadowElement; }
        		     }
    			}
    			return null;
		};
		const rmshadowelem = () => {
					   	asyncTimer = undefined;
						try {
						  	const elem = queryShadowRootElement(selector);
						  	if (elem) { elem.remove(); }
					   	} catch { }
		};
		const rmshadowelemAsync = () => {
						   if ( asyncTimer !== undefined ) { return; }
						   asyncTimer = window.requestAnimationFrame(rmshadowelem);
		};	
		const observer = new MutationObserver(rmshadowelemAsync);
    		observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/// rem-attr.js
/// alias rma.js
// example.com##+js(rma, allow, iframe)
(() => {
		    'use strict';
		    const needle = '{{1}}';
		    if ( needle === '' || needle === '{{1}}' ) { return; }
		    const needles = needle.split(/\s*\|\s*/);
		    let selector = '{{2}}';
		    if ( selector === '' || selector === '{{2}}' ) { selector = `[${needles.join('],[')}]`; }
		    let asyncTimer;
		    const removeattr = () => {
							asyncTimer = undefined;
							const nodes = document.querySelectorAll(selector);
							try {
								for ( const node of nodes ) {
									if ( node.hasAttribute(...needles) ) {
									     node.removeAttribute(...needles);
									}	   
								}
							} catch { }
		    };
		    const removeattrAsync = () => {	if ( asyncTimer !== undefined ) { return; }
						   	asyncTimer = window.requestAnimationFrame(removeattr);
		    };				   
		    const observer = new MutationObserver(removeattrAsync);
    		    observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/// remove-node.js
/// alias rn.js
// example.com##+js(rn, /adblock|adsense/, script)
(() => { 
          'use strict';
          let needle = '{{1}}';
          if ( needle === '' || needle === '{{1}}' ) {
              needle = '.?';
          } else if ( needle.slice(0,1) === '/' && needle.slice(-1) === '/' ) {
              needle = needle.slice(1,-1);
          } else {
              needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          }
          needle = new RegExp(needle);
	  let asyncTimer, observer;
	  const remnode = () => {
		  			asyncTimer = undefined;
		  			const nodes = document.querySelectorAll('{{2}}');
		  			try {
                                                  for (const node of nodes) {
							if (needle.test(node.outerHTML)) {
                                                            node.textContent = ''; 
						       	    node.remove(); 
                                                       }     
                                                  }
                                        } catch { }
          };
	  const remnodeAsync = () => {
		  			if ( asyncTimer !== undefined ) { return; }
		                        asyncTimer =  window.requestAnimationFrame(remnode);
	  };	  
	  if ( document.readyState !== 'complete' ) {
		  	observer = new MutationObserver(remnode);  
	  	        observer.observe(document.documentElement, { childList: true, subtree: true });
	  } else {		  
			observer.disconnect();
		  	observer = new MutationObserver(remnodeAsync);  
	  	        observer.observe(document.documentElement, { childList: true, subtree: true });
	  }	  
})();

/// set-attr.js
/// alias sa.js
// example.com##+js(sa, preload, none, video)
(() => {
          'use strict';
          const token = '{{1}}';
          if ( token === '' || token === '{{1}}' ) { return; }
          const tokens = token.split(/\s*\|\s*/);
	  let selector = '{{3}}';
          if ( selector === '' || selector === '{{3}}' ) { selector = `[${tokens.join('],[')}]`; }
	  let asyncTimer;
          const setattr = () => {
					asyncTimer = undefined;
		  			try {
						const nodes = document.querySelectorAll(selector);
						for (const node of nodes) {
						     for ( const attr of tokens ) {
							   node.setAttribute(attr, '{{2}}');
						     }	   
						}
					} catch { }
          };
	  const setattrAsync = () => {
		  			if ( asyncTimer !== undefined ) { return; }
		  			asyncTimer = window.requestAnimationFrame(setattr);
	  };	  
          const observer = new MutationObserver(setattrAsync);
	  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/// tog-attr.js
/// alias ta.js
// example.com##+js(ta, preload, video)
(() => {
		  'use strict';
		  const token = '{{1}}';
		  if ( token === '' || token === '{{1}}' ) { return; }
		  const tokens = token.split(/\s*\|\s*/);
		  let selector = '{{2}}';
		  if ( selector === '' || selector === '{{2}}' ) { selector = `[${tokens.join('],[')}]`; }
		  const togattr = ev => {
						 if (ev) { window.removeEventListener(ev.type, togattr, true); }
						 try {
							const nodes = document.querySelectorAll(selector);
							for (const node of nodes) {
							     node.toggleAttribute(...tokens);
							}
						} catch { }
		  };
		  if (document.readyState === 'loading') {
		    	    window.addEventListener('DOMContentLoaded', togattr, true);
	   	  } else {
		    	    togattr();
	   	  }
})();

/// cookie-set.js
/// alias cs.js
// example.com##+js(cs, name, value, age)
(() => {
		'use strict';
		const cs = ev => {
					if (ev) { window.removeEventListener(ev.type, cs, true); }
					try {
						document.cookie = '{{1}}={{2}}; max-age={{3}}; secure; path=/;';
					} catch { }
	   	};
	   	if (document.readyState === 'loading') {
		    	 window.addEventListener('DOMContentLoaded', cs, true);
	   	} else {
		    	 cs();
	   	}
})();	

/// replace-elem.js
/// alias ree.js
// example.com##+js(ree, .element, div)
(() => {
		'use strict';
		const selector = '{{1}}';
		if ( selector === '' || selector === '{{1}}' ) { return; }
		const elem = document.createElement('{{2}}');
		if ( elem === '' || elem === '{{2}}' ) { return; }
		const replace = ev => {
					    if (ev) { window.removeEventListener(ev.type, replace, true); }
					    try {
							const elements = document.querySelectorAll(selector);
							for ( const element of elements ) {
								const text = element.textContent;
								const attrs = element.attributes;
								element.replaceWith(elem);
								elem.textContent = text;
								for ( const attr of attrs ) {
								      const prop = attr.nodeName;
								      const value = attr.nodeValue;
								      elem.setAttribute(prop, value);
								}	
							}   
					    } catch { }
		};
		if (document.readyState === 'loading') {
		          window.addEventListener('DOMContentLoaded', replace, true);
		} else {
			  replace();
		}
})();

/// remove-prop.js
/// alias rp.js
// example.com##+js(rp, foo.bar)
(() => {
	      'use strict';
  	      const remove = ev => {
	      				    if (ev) { window.removeEventListener(ev.type, remove, true); }
					    try {
						    delete {{1}};
					    } catch { }
              };
              if (document.readyState === 'loading') {
                       window.addEventListener('DOMContentLoaded', remove, true); 
              } else {
                       remove();  
              }
})();

/// add-elem.js
/// alias ae.js
// example.com##+js(ae, [selector], display:block !important, div)
(() => {
		'use strict';
		const identifier = '{{1}}';
		if ( identifier === '' || identifier === '{{1}}' ) { return; }
		const identifiers = identifier.split(/\s*\|\s*/);
		let executeOnce = false;
		const addelem = () => {
						try {
							if (executeOnce !== false) { return; }
							const element = document.createElement('{{3}}');
							for (const identifieradder of identifiers) {
								if (identifieradder.charAt(0) === '#') {
									 element.id = identifieradder.substring(1);
								} else if (identifieradder.charAt(0) === '.') {
									 element.className = identifieradder.substring(1);
								} else { return; }	 
							}
							element.style.cssText = '{{2}}';
							document.body.append(element);
							executeOnce = true;
						} catch { }
	   	};
	   	const observer = new MutationObserver(addelem);
    		observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/// rem-class.js
/// alias rmc.js
// example.com##+js(rmc, example, [selector])
(() => {
		    'use strict';
		    const needle = '{{1}}';
		    if ( needle === '' || needle === '{{1}}' ) { return; }
		    const needles = needle.split(/\s*\|\s*/);
		    let selector = '{{2}}';
		    if ( selector === '' || selector === '{{2}}' ) { selector = '.' + needles.map(a => CSS.escape(a)).join(',.'); }
	            let asyncTimer;
		    const removeclass = () => {
							asyncTimer = undefined;
			    				const nodes = document.querySelectorAll(selector);
							try {
								for ( const node of nodes ) {
								      if ( node.classList.contains(...needles) ) {
		 							   node.classList.remove(...needles);
								      }
	    							}
							} catch { }
		    };
		    const removeclassAsync = () => {
			    				if ( asyncTimer !== undefined ) { return; }
			    				asyncTimer = window.requestAnimationFrame(removeclass);
		    };    
		    const observer = new MutationObserver(removeclassAsync);
    		    observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/// add-class.js
/// alias ac.js
// example.com##+js(ac, example, [selector])
(() => {
		    'use strict';
		    const needle = '{{1}}';
		    if ( needle === '' || needle === '{{1}}' ) { return; }
		    const needles = needle.split(/\s*\|\s*/);
		    let selector = '{{2}}';
		    if ( selector === '' || selector === '{{2}}' ) { selector = '.' + needles.map(a => CSS.escape(a)).join(',.'); }
		    const addclass = ev => {
						if (ev) { window.removeEventListener(ev.type, addclass, true);  }
						const nodes = document.querySelectorAll(selector);
						try {
							for ( const node of nodes ) {
							      node.classList.add(...needles);
							}
						} catch { }
		    };
		    if (document.readyState === 'loading') {
		    	      window.addEventListener('DOMContentLoaded', addclass, true);
	   	    } else {
		    	      addclass();
	   	    }
})();

/// toggle-class.js
/// alias tc.js
// example.com##+js(tc, example, [selector])
(() => {
	    'use strict';
	    const needle = '{{1}}';
	    if ( needle === '' || needle === '{{1}}' ) { return; }
	    const needles = needle.split(/\s*\|\s*/);
	    let selector = '{{2}}';
	    if ( selector === '' || selector === '{{2}}' ) { selector = '.' + needles.map(a => CSS.escape(a)).join(',.'); }
	    const toggleclass = ev => {
						if (ev) { window.removeEventListener(ev.type, toggleclass, true); }
						const nodes = document.querySelectorAll(selector);
						try {
							for ( const node of nodes ) {
							      node.classList.toggle(...needles);
							}
						} catch { }
	    };
	    if (document.readyState === 'loading') {
		      window.addEventListener('DOMContentLoaded', toggleclass, true);
	    } else {
		      toggleclass();
	    } 
})();

/// replace-class.js
/// alias rec.js
// example.com##+js(rec, example, example2, [selector])
(() => {
		    'use strict';
		    const needle = '{{1}}';
		    if ( needle === '' || needle === '{{1}}' ) { return; }
		    const needles = needle.split(/\s*\|\s*/);
		    let selector = '{{3}}';
		    if ( selector === '' || selector === '{{3}}' ) { selector = '.' + needles.map(a => CSS.escape(a)).join(',.'); }
		    const replaceclass = ev => {
							if (ev) { window.removeEventListener(ev.type, replaceclass, true);  }
							const nodes = document.querySelectorAll(selector);
							try {
								for ( const node of nodes ) {
								      for (const tokens of needles ) {
									    if ( node.classList.contains(tokens) ) {
									         node.classList.replace(tokens, '{{2}}');
									    }
								      }		    
								}
							} catch { }
		    };
		    if (document.readyState === 'loading') {
		    	      window.addEventListener('DOMContentLoaded', replaceclass, true);
	   	    } else {
		    	      replaceclass();
	   	    }
})();

/// set-innerHTML.js
/// alias sih.js
// example.com##+js(sih, [selector], <span class="btext">Download</span>)
(() => {
		'use strict';
		const selector = '{{1}}';
		if ( selector === '' || selector === '{{1}}' ) { return; }
		const sih = ev => {
					   if (ev) { window.removeEventListener(ev.type, sih, true); }
					   try {
						  const elements = document.querySelectorAll(selector);
						  for (const element of elements) {
							element.innerHTML = '{{2}}';
						  }
					   } catch { }
		};
		if (document.readyState === 'loading') {
		    	    window.addEventListener('DOMContentLoaded', sih, true);
	   	} else {
		    	    sih();
	   	} 
})();

/// log-node.js
/// alias ln.js
// example.com##+js(ln, script)
(() => {
		'use strict';
		const needle = '{{1}}';
		if ( needle === '' || needle === '{{1}}' ) { return; }
		const logtags = ev => {
					  if (ev) { window.removeEventListener(ev.type, logtags, true); }
					  try {
						const tags = document.querySelectorAll(needle);
						const log = console.log.bind(console);
						for (const tag of tags) {
							log('uBO: %s("%s")', needle, tag.outerHTML);
						}
					  } catch { }
		};
		if (document.readyState === 'complete') {
			logtags(); 
		} else {
			window.addEventListener('load', logtags, true);
		}
})();

/// multiup.js
/// alias mtu.js
// example.com##+js(mtu, form[action], button[link], action, link)
(() => {
		'use strict';
		const selector = '{{1}}';
		if ( selector === '' || selector === '{{1}}' ) { return; }
		const selector2 = '{{2}}';
		if ( selector2 === '' || selector2 === '{{2}}' ) { return; }
		const multiup = ev => {
						if (ev) { window.removeEventListener(ev.type, multiup, true); }
						try {
							const elem = document.querySelectorAll(selector);
							const elem2 = document.querySelectorAll(selector2);
							for (let i = 0; i < elem.length; i++) {
								elem[i].setAttribute('{{3}}', elem2[i].getAttribute('{{4}}'));
							}
						} catch { }
		};
		if (document.readyState === 'loading') {
		    	    window.addEventListener('DOMContentLoaded', multiup, true);
	   	} else {
		    	    multiup();
	   	}
})();

/// insert-iframe.js
/// alias ii.js
// example.com##+js(ii, 2, [selector], src, style)
(() => {
    	        'use strict';
		const iframes = '{{1}}';
		if ( iframes === '' || iframes === '{{1}}' ) { return; }
		let executeOnce = false;
		const insertframe = () => {
						  try {
							if (executeOnce !== false) { return; }
							for ( let i = 0; i < iframes; i++ ) {
							      const iframe = document.createElement('iframe');
							      iframe.setAttribute('id', '{{2}}');
							      iframe.setAttribute('src', '{{3}}');
							      iframe.setAttribute('style', '{{4}}');
							      document.body.append(iframe);
							}
							executeOnce = true;
						  } catch { }
		};			
		const observer = new MutationObserver(insertframe);
    		observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/// insert-elem.js
/// alias ie.js
// example.com##+js(ie, [selector], display:block !important, node, div)
(() => {
		'use strict';
		const identifier = '{{1}}';
		if ( identifier === '' || identifier === '{{1}}' ) { return; }
		const identifiers = identifier.split(/\s*\|\s*/);
		let executeOnce = false;
		const insertelem = () => {
						if (executeOnce !== false) { return; }
						try {
							const element = document.createElement('{{4}}');
							const node = document.querySelector('{{3}}');
							for (const identifieradder of identifiers) {
								if (identifieradder.charAt(0) === '#') {
									 element.id = identifieradder.substring(1);
								} else if (identifieradder.charAt(0) === '.') {
									 element.className = identifieradder.substring(1);
								} else { return; }	 
							}
							element.style.cssText = '{{2}}';
							document.body.insertBefore(element, node);
							executeOnce = true;
						} catch { }
	   	};
	   	const observer = new MutationObserver(insertelem);
    		observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/// append-elem.js
/// alias ape.js
// example.com##+js(ape, [selector], element, attribute, value)
(() => {
		'use strict';
		const selector = '{{1}}';
		if ( selector === '' || selector === '{{1}}' ) { return; }
		const appendNode = ev => {
						if (ev) { window.removeEventListener(ev.type, appendNode, true); }
						try {
							const elements = document.querySelectorAll(selector);
							for ( const element of elements ) {
							      const node = document.createElement('{{2}}');
							      node.setAttribute('{{3}}', '{{4}}');
							      element.append(node);
							}
						} catch { }
		};
		if (document.readyState === 'complete') {
		    	    appendNode();
	   	} else {
		    	    window.addEventListener('load', appendNode, true);
	   	}
})();

/// removeItem.js
/// alias ri.js
// example.com##+js(ri, key)
(() => {
		'use strict';
		const key = '{{1}}';
		if ( key === '' || key === '{{1}}' ) { return; }
		const keys = key.split(/\s*\|\s*/);
		let asyncTimer;
		const removeItem = () => {
		 			   	   asyncTimer = undefined;
						   try {
							   for (const keyName of keys) {
								if (!localStorage.getItem(keyName)) { break; }
								localStorage.removeItem(keyName);
							   }
						   } catch { }
		};
		const removeItemAsync = () => {
						   if ( asyncTimer !== undefined ) { return; }
						   asyncTimer = window.requestAnimationFrame(removeItem);
		};	
		const observer = new MutationObserver(removeItemAsync);
    		observer.observe(document.documentElement, { childList: true, subtree: true });
})();

/// setItem.js
/// alias si.js
// example.com##+js(si, key, value)
(() => {
		'use strict';
		const key = '{{1}}';
		if ( key === '' || key === '{{1}}' ) { return; }
		const value = '{{2}}';
		if ( value === '' || value === '{{2}}' ) { return; }
		const setItem = ev => {
		 			   if (ev) { window.removeEventListener(ev.type, setItem, true); }
					   try {
						   if (localStorage.getItem(key) !== null) { return; }
						   localStorage.setItem(key, value);
					   } catch { }
		};
		if (document.readyState === 'loading') {
		    	    window.addEventListener('DOMContentLoaded', setItem, true); 
	   	} else {
		    	    setItem();
	   	}
})();

/// window.open-bypasser.js
/// alias wob.js
// example.com##+js(wob)
(() => {
		    'use strict';
		    const popup = window.open, value = /^\/[\S]*?$/;
          	    window.open = (needle, pop) => {
	       		if ("string" === typeof needle && value.test(needle)) return window;
			popup(needle, pop);	
    		    };
})();

/// executesitefunction.js
/// alias esf.js
// example.com##+js(esf, funcName, funcDelay)
(() => {
	      'use strict';
	      const funcCall = '{{1}}';
	      if ( funcCall === '' || funcCall === '{{1}}' ) { return; }
	      const funcDelay = '{{2}}';
	      if ( funcDelay === '' || funcDelay === '{{2}}' ) { return; }
	      const funcInvoke = ev => { 
		      				if (ev) { window.removeEventListener(ev.type, funcInvoke, true); }
		      				try { 
							setTimeout(window[funcCall], funcDelay);
						} catch { }
	      };	      
	      if (document.readyState === 'interactive' || document.readyState === 'complete') {
		    	    funcInvoke();
	      } else {
		    	    window.addEventListener('DOMContentLoaded', funcInvoke, true);
	      }
})();

/// no-alert-if.js
/// alias naif.js
// example.com##+js(naif, /loading ad/)
(() => {
                let needle = '{{1}}';
                if ( needle === '' || needle === '{{1}}' ) {
                     needle = '.?';
                } else if ( needle.slice(0,1) === '/' && needle.slice(-1) === '/' ) {
                     needle = needle.slice(1,-1);
                } else {
                     needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                }
                needle = new RegExp(needle);
                window.alert = new Proxy(window.alert, {
                       apply: (target, thisArg, args) => {
                        	const a = args[0];
                        	if ( needle.test(a.toString()) === false ) {
                            	     return target.apply(thisArg, args);
                        	}
                       }
                });
})();

// ----------------------------------------------------------------------------------------------------------------- //

// **
// * AdGuard Redirects
// * Version 1.2.5
// */

// * Metrica Yandex Tag redirect
// * source metrika-yandex-tag:  https://github.com/AdguardTeam/Scriptlets/blob/master/dist/redirect-files/metrika-yandex-tag.js
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



// * Metrica Yandex Wath redirect
// * source metrika-yandex-watch:  https://github.com/AdguardTeam/Scriptlets/blob/master/dist/redirect-files/metrika-yandex-watch.js
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



/**
 * VMAP -VPAID -VAST concern
 **/
noopvmap-1.0 text/xml
<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0"></vmap:VMAP>

noopvast-1.0 text/xml
<VAST version="1.0"></VAST>

noopvast-2.0 text/xml
<VAST version="2.0"></VAST>

noopvast-3.0 text/xml
<VAST version="3.0"></VAST>

noopvast-4.0 text/xml
<VAST version="4.0"></VAST>
