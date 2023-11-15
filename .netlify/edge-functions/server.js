var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value), __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l2 = Symbol.for("react.element"), n2 = Symbol.for("react.portal"), p2 = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r2 = Symbol.for("react.profiler"), t2 = Symbol.for("react.provider"), u2 = Symbol.for("react.context"), v2 = Symbol.for("react.forward_ref"), w2 = Symbol.for("react.suspense"), x2 = Symbol.for("react.memo"), y2 = Symbol.for("react.lazy"), z2 = Symbol.iterator;
    function A(a2) {
      return a2 === null || typeof a2 != "object" ? null : (a2 = z2 && a2[z2] || a2["@@iterator"], typeof a2 == "function" ? a2 : null);
    }
    var B = { isMounted: function() {
      return !1;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C = Object.assign, D = {};
    function E(a2, b2, e2) {
      this.props = a2, this.context = b2, this.refs = D, this.updater = e2 || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a2, b2) {
      if (typeof a2 != "object" && typeof a2 != "function" && a2 != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a2, b2, "setState");
    };
    E.prototype.forceUpdate = function(a2) {
      this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a2, b2, e2) {
      this.props = a2, this.context = b2, this.refs = D, this.updater = e2 || B;
    }
    var H2 = G.prototype = new F();
    H2.constructor = G;
    C(H2, E.prototype);
    H2.isPureReactComponent = !0;
    var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: !0, ref: !0, __self: !0, __source: !0 };
    function M2(a2, b2, e2) {
      var d2, c2 = {}, k = null, h2 = null;
      if (b2 != null)
        for (d2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k = "" + b2.key), b2)
          J.call(b2, d2) && !L.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
      var g2 = arguments.length - 2;
      if (g2 === 1)
        c2.children = e2;
      else if (1 < g2) {
        for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
          f2[m2] = arguments[m2 + 2];
        c2.children = f2;
      }
      if (a2 && a2.defaultProps)
        for (d2 in g2 = a2.defaultProps, g2)
          c2[d2] === void 0 && (c2[d2] = g2[d2]);
      return { $$typeof: l2, type: a2, key: k, ref: h2, props: c2, _owner: K.current };
    }
    function N2(a2, b2) {
      return { $$typeof: l2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
    }
    function O(a2) {
      return typeof a2 == "object" && a2 !== null && a2.$$typeof === l2;
    }
    function escape2(a2) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a2.replace(/[=:]/g, function(a3) {
        return b2[a3];
      });
    }
    var P = /\/+/g;
    function Q(a2, b2) {
      return typeof a2 == "object" && a2 !== null && a2.key != null ? escape2("" + a2.key) : b2.toString(36);
    }
    function R(a2, b2, e2, d2, c2) {
      var k = typeof a2;
      (k === "undefined" || k === "boolean") && (a2 = null);
      var h2 = !1;
      if (a2 === null)
        h2 = !0;
      else
        switch (k) {
          case "string":
          case "number":
            h2 = !0;
            break;
          case "object":
            switch (a2.$$typeof) {
              case l2:
              case n2:
                h2 = !0;
            }
        }
      if (h2)
        return h2 = a2, c2 = c2(h2), a2 = d2 === "" ? "." + Q(h2, 0) : d2, I(c2) ? (e2 = "", a2 != null && (e2 = a2.replace(P, "$&/") + "/"), R(c2, b2, e2, "", function(a3) {
          return a3;
        })) : c2 != null && (O(c2) && (c2 = N2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P, "$&/") + "/") + a2)), b2.push(c2)), 1;
      if (h2 = 0, d2 = d2 === "" ? "." : d2 + ":", I(a2))
        for (var g2 = 0; g2 < a2.length; g2++) {
          k = a2[g2];
          var f2 = d2 + Q(k, g2);
          h2 += R(k, b2, e2, f2, c2);
        }
      else if (f2 = A(a2), typeof f2 == "function")
        for (a2 = f2.call(a2), g2 = 0; !(k = a2.next()).done; )
          k = k.value, f2 = d2 + Q(k, g2++), h2 += R(k, b2, e2, f2, c2);
      else if (k === "object")
        throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S(a2, b2, e2) {
      if (a2 == null)
        return a2;
      var d2 = [], c2 = 0;
      return R(a2, d2, "", "", function(a3) {
        return b2.call(e2, a3, c2++);
      }), d2;
    }
    function T(a2) {
      if (a2._status === -1) {
        var b2 = a2._result;
        b2 = b2(), b2.then(function(b3) {
          (a2._status === 0 || a2._status === -1) && (a2._status = 1, a2._result = b3);
        }, function(b3) {
          (a2._status === 0 || a2._status === -1) && (a2._status = 2, a2._result = b3);
        }), a2._status === -1 && (a2._status = 0, a2._result = b2);
      }
      if (a2._status === 1)
        return a2._result.default;
      throw a2._result;
    }
    var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a2, b2, e2) {
      S(a2, function() {
        b2.apply(this, arguments);
      }, e2);
    }, count: function(a2) {
      var b2 = 0;
      return S(a2, function() {
        b2++;
      }), b2;
    }, toArray: function(a2) {
      return S(a2, function(a3) {
        return a3;
      }) || [];
    }, only: function(a2) {
      if (!O(a2))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a2;
    } };
    exports.Component = E;
    exports.Fragment = p2;
    exports.Profiler = r2;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w2;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a2, b2, e2) {
      if (a2 == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
      var d2 = C({}, a2.props), c2 = a2.key, k = a2.ref, h2 = a2._owner;
      if (b2 != null) {
        if (b2.ref !== void 0 && (k = b2.ref, h2 = K.current), b2.key !== void 0 && (c2 = "" + b2.key), a2.type && a2.type.defaultProps)
          var g2 = a2.type.defaultProps;
        for (f2 in b2)
          J.call(b2, f2) && !L.hasOwnProperty(f2) && (d2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
      }
      var f2 = arguments.length - 2;
      if (f2 === 1)
        d2.children = e2;
      else if (1 < f2) {
        g2 = Array(f2);
        for (var m2 = 0; m2 < f2; m2++)
          g2[m2] = arguments[m2 + 2];
        d2.children = g2;
      }
      return { $$typeof: l2, type: a2.type, key: c2, ref: k, props: d2, _owner: h2 };
    };
    exports.createContext = function(a2) {
      return a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a2.Provider = { $$typeof: t2, _context: a2 }, a2.Consumer = a2;
    };
    exports.createElement = M2;
    exports.createFactory = function(a2) {
      var b2 = M2.bind(null, a2);
      return b2.type = a2, b2;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a2) {
      return { $$typeof: v2, render: a2 };
    };
    exports.isValidElement = O;
    exports.lazy = function(a2) {
      return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T };
    };
    exports.memo = function(a2, b2) {
      return { $$typeof: x2, type: a2, compare: b2 === void 0 ? null : b2 };
    };
    exports.startTransition = function(a2) {
      var b2 = V.transition;
      V.transition = {};
      try {
        a2();
      } finally {
        V.transition = b2;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a2, b2) {
      return U.current.useCallback(a2, b2);
    };
    exports.useContext = function(a2) {
      return U.current.useContext(a2);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a2) {
      return U.current.useDeferredValue(a2);
    };
    exports.useEffect = function(a2, b2) {
      return U.current.useEffect(a2, b2);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a2, b2, e2) {
      return U.current.useImperativeHandle(a2, b2, e2);
    };
    exports.useInsertionEffect = function(a2, b2) {
      return U.current.useInsertionEffect(a2, b2);
    };
    exports.useLayoutEffect = function(a2, b2) {
      return U.current.useLayoutEffect(a2, b2);
    };
    exports.useMemo = function(a2, b2) {
      return U.current.useMemo(a2, b2);
    };
    exports.useReducer = function(a2, b2, e2) {
      return U.current.useReducer(a2, b2, e2);
    };
    exports.useRef = function(a2) {
      return U.current.useRef(a2);
    };
    exports.useState = function(a2) {
      return U.current.useState(a2);
    };
    exports.useSyncExternalStore = function(a2, b2, e2) {
      return U.current.useSyncExternalStore(a2, b2, e2);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.2.0";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    module.exports = require_react_production_min();
  }
});

// node_modules/@remix-run/router/dist/router.js
var router_exports = {};
__export(router_exports, {
  AbortedDeferredError: () => AbortedDeferredError,
  Action: () => Action,
  ErrorResponse: () => ErrorResponse,
  IDLE_BLOCKER: () => IDLE_BLOCKER,
  IDLE_FETCHER: () => IDLE_FETCHER,
  IDLE_NAVIGATION: () => IDLE_NAVIGATION,
  UNSAFE_DEFERRED_SYMBOL: () => UNSAFE_DEFERRED_SYMBOL,
  UNSAFE_DeferredData: () => DeferredData,
  UNSAFE_convertRoutesToDataRoutes: () => convertRoutesToDataRoutes,
  UNSAFE_getPathContributingMatches: () => getPathContributingMatches,
  UNSAFE_invariant: () => invariant,
  UNSAFE_warning: () => warning,
  createBrowserHistory: () => createBrowserHistory,
  createHashHistory: () => createHashHistory,
  createMemoryHistory: () => createMemoryHistory,
  createPath: () => createPath,
  createRouter: () => createRouter,
  createStaticHandler: () => createStaticHandler,
  defer: () => defer,
  generatePath: () => generatePath,
  getStaticContextFromError: () => getStaticContextFromError,
  getToPathname: () => getToPathname,
  isDeferredData: () => isDeferredData,
  isRouteErrorResponse: () => isRouteErrorResponse,
  joinPaths: () => joinPaths,
  json: () => json,
  matchPath: () => matchPath,
  matchRoutes: () => matchRoutes,
  normalizePathname: () => normalizePathname,
  parsePath: () => parsePath,
  redirect: () => redirect,
  resolvePath: () => resolvePath,
  resolveTo: () => resolveTo,
  stripBasename: () => stripBasename
});
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
function createMemoryHistory(options) {
  options === void 0 && (options = {});
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = !1
  } = options, entries;
  entries = initialEntries.map((entry2, index3) => createMemoryLocation(entry2, typeof entry2 == "string" ? null : entry2.state, index3 === 0 ? "default" : void 0));
  let index2 = clampIndex(initialIndex ?? entries.length - 1), action4 = Action.Pop, listener = null;
  function clampIndex(n2) {
    return Math.min(Math.max(n2, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index2];
  }
  function createMemoryLocation(to, state, key) {
    state === void 0 && (state = null);
    let location2 = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    return warning(location2.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to)), location2;
  }
  function createHref(to) {
    return typeof to == "string" ? to : createPath(to);
  }
  return {
    get index() {
      return index2;
    },
    get action() {
      return action4;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to == "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action4 = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index2 += 1, entries.splice(index2, entries.length, nextLocation), v5Compat && listener && listener({
        action: action4,
        location: nextLocation,
        delta: 1
      });
    },
    replace(to, state) {
      action4 = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index2] = nextLocation, v5Compat && listener && listener({
        action: action4,
        location: nextLocation,
        delta: 0
      });
    },
    go(delta) {
      action4 = Action.Pop;
      let nextIndex = clampIndex(index2 + delta), nextLocation = entries[nextIndex];
      index2 = nextIndex, listener && listener({
        action: action4,
        location: nextLocation,
        delta
      });
    },
    listen(fn) {
      return listener = fn, () => {
        listener = null;
      };
    }
  };
}
function createBrowserHistory(options) {
  options === void 0 && (options = {});
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to == "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function createHashHistory(options) {
  options === void 0 && (options = {});
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window2.location.hash.substr(1));
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base"), href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href, hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to == "string" ? to : createPath(to));
  }
  function validateHashLocation(location2, to) {
    warning(location2.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === !1 || value === null || typeof value > "u")
    throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    typeof console < "u" && console.warn(message);
    try {
      throw new Error(message);
    } catch {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location2, index2) {
  return {
    usr: location2.state,
    key: location2.key,
    idx: index2
  };
}
function createLocation(current, to, state, key) {
  return state === void 0 && (state = null), _extends({
    pathname: typeof current == "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to == "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  return search && search !== "?" && (pathname += search.charAt(0) === "?" ? search : "?" + search), hash && hash !== "#" && (pathname += hash.charAt(0) === "#" ? hash : "#" + hash), pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    hashIndex >= 0 && (parsedPath.hash = path.substr(hashIndex), path = path.substr(0, hashIndex));
    let searchIndex = path.indexOf("?");
    searchIndex >= 0 && (parsedPath.search = path.substr(searchIndex), path = path.substr(0, searchIndex)), path && (parsedPath.pathname = path);
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  options === void 0 && (options = {});
  let {
    window: window2 = document.defaultView,
    v5Compat = !1
  } = options, globalHistory = window2.history, action4 = Action.Pop, listener = null, index2 = getIndex();
  index2 == null && (index2 = 0, globalHistory.replaceState(_extends({}, globalHistory.state, {
    idx: index2
  }), ""));
  function getIndex() {
    return (globalHistory.state || {
      idx: null
    }).idx;
  }
  function handlePop() {
    action4 = Action.Pop;
    let nextIndex = getIndex(), delta = nextIndex == null ? null : nextIndex - index2;
    index2 = nextIndex, listener && listener({
      action: action4,
      location: history.location,
      delta
    });
  }
  function push(to, state) {
    action4 = Action.Push;
    let location2 = createLocation(history.location, to, state);
    validateLocation && validateLocation(location2, to), index2 = getIndex() + 1;
    let historyState = getHistoryState(location2, index2), url = history.createHref(location2);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError")
        throw error;
      window2.location.assign(url);
    }
    v5Compat && listener && listener({
      action: action4,
      location: history.location,
      delta: 1
    });
  }
  function replace(to, state) {
    action4 = Action.Replace;
    let location2 = createLocation(history.location, to, state);
    validateLocation && validateLocation(location2, to), index2 = getIndex();
    let historyState = getHistoryState(location2, index2), url = history.createHref(location2);
    globalHistory.replaceState(historyState, "", url), v5Compat && listener && listener({
      action: action4,
      location: history.location,
      delta: 0
    });
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href, href = typeof to == "string" ? to : createPath(to);
    return invariant(base, "No window.location.(origin|href) available to create URL for href: " + href), new URL(href, base);
  }
  let history = {
    get action() {
      return action4;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener)
        throw new Error("A history only accepts one active listener");
      return window2.addEventListener(PopStateEventType, handlePop), listener = fn, () => {
        window2.removeEventListener(PopStateEventType, handlePop), listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
function isIndexRoute(route) {
  return route.index === !0;
}
function convertRoutesToDataRoutes(routes2, mapRouteProperties2, parentPath, manifest) {
  return parentPath === void 0 && (parentPath = []), manifest === void 0 && (manifest = {}), routes2.map((route, index2) => {
    let treePath = [...parentPath, index2], id = typeof route.id == "string" ? route.id : treePath.join("-");
    if (invariant(route.index !== !0 || !route.children, "Cannot specify children on an index route"), invariant(!manifest[id], 'Found a route id collision on id "' + id + `".  Route id's must be globally unique within Data Router usages`), isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties2(route), {
        id
      });
      return manifest[id] = indexRoute, indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties2(route), {
        id,
        children: void 0
      });
      return manifest[id] = pathOrLayoutRoute, route.children && (pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties2, treePath, manifest)), pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes2, locationArg, basename) {
  basename === void 0 && (basename = "/");
  let location2 = typeof locationArg == "string" ? parsePath(locationArg) : locationArg, pathname = stripBasename(location2.pathname || "/", basename);
  if (pathname == null)
    return null;
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2)
    matches = matchRouteBranch(
      branches[i2],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  branches === void 0 && (branches = []), parentsMeta === void 0 && (parentsMeta = []), parentPath === void 0 && (parentPath = "");
  let flattenRoute = (route, index2, relativePath) => {
    let meta4 = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === !0,
      childrenIndex: index2,
      route
    };
    meta4.relativePath.startsWith("/") && (invariant(meta4.relativePath.startsWith(parentPath), 'Absolute route path "' + meta4.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), meta4.relativePath = meta4.relativePath.slice(parentPath.length));
    let path = joinPaths([parentPath, meta4.relativePath]), routesMeta = parentsMeta.concat(meta4);
    route.children && route.children.length > 0 && (invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
    ), flattenRoutes(route.children, branches, routesMeta, path)), !(route.path == null && !route.index) && branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  return routes2.forEach((route, index2) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?")))
      flattenRoute(route, index2);
    else
      for (let exploded of explodeOptionalSegments(route.path))
        flattenRoute(route, index2, exploded);
  }), branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments, isOptional = first.endsWith("?"), required = first.replace(/\?$/, "");
  if (rest.length === 0)
    return isOptional ? [required, ""] : [required];
  let restExploded = explodeOptionalSegments(rest.join("/")), result = [];
  return result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/"))), isOptional && result.push(...restExploded), result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta4) => meta4.childrenIndex), b2.routesMeta.map((meta4) => meta4.childrenIndex)));
}
function computeScore(path, index2) {
  let segments = path.split("/"), initialScore = segments.length;
  return segments.some(isSplat) && (initialScore += splatPenalty), index2 && (initialScore += indexRouteValue), segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  return a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch, matchedParams = {}, matchedPathname = "/", matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta4 = routesMeta[i2], end = i2 === routesMeta.length - 1, remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/", match = matchPath({
      path: meta4.relativePath,
      caseSensitive: meta4.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta4.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    }), match.pathnameBase !== "/" && (matchedPathname = joinPaths([matchedPathname, match.pathnameBase]));
  }
  return matches;
}
function generatePath(originalPath, params) {
  params === void 0 && (params = {});
  let path = originalPath;
  path.endsWith("*") && path !== "*" && !path.endsWith("/*") && (warning(!1, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".')), path = path.replace(/\*$/, "/*"));
  let prefix = path.startsWith("/") ? "/" : "", stringify = (p2) => p2 == null ? "" : typeof p2 == "string" ? p2 : String(p2), segments = path.split(/\/+/).map((segment, index2, array) => {
    if (index2 === array.length - 1 && segment === "*")
      return stringify(params["*"]);
    let keyMatch = segment.match(/^:(\w+)(\??)$/);
    if (keyMatch) {
      let [, key, optional] = keyMatch, param = params[key];
      return invariant(optional === "?" || param != null, 'Missing ":' + key + '" param'), stringify(param);
    }
    return segment.replace(/\?$/g, "");
  }).filter((segment) => !!segment);
  return prefix + segments.join("/");
}
function matchPath(pattern, pathname) {
  typeof pattern == "string" && (pattern = {
    path: pattern,
    caseSensitive: !1,
    end: !0
  });
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end), match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0], pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1"), captureGroups = match.slice(1);
  return {
    params: paramNames.reduce((memo, paramName, index2) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index2] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      return memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName), memo;
    }, {}),
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  caseSensitive === void 0 && (caseSensitive = !1), end === void 0 && (end = !0), warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [], regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_, paramName) => (paramNames.push(paramName), "/([^\\/]+)"));
  return path.endsWith("*") ? (paramNames.push("*"), regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : end ? regexpSource += "\\/*$" : path !== "" && path !== "/" && (regexpSource += "(?:(?=\\/|$))"), [new RegExp(regexpSource, caseSensitive ? void 0 : "i"), paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    return warning(!1, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ").")), value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return warning(!1, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")), value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase()))
    return null;
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length, nextChar = pathname.charAt(startIndex);
  return nextChar && nextChar !== "/" ? null : pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  fromPathname === void 0 && (fromPathname = "/");
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to == "string" ? parsePath(to) : to;
  return {
    pathname: toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  return relativePath.split("/").forEach((segment) => {
    segment === ".." ? segments.length > 1 && segments.pop() : segment !== "." && segments.push(segment);
  }), segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  isPathRelative === void 0 && (isPathRelative = !1);
  let to;
  typeof toArg == "string" ? to = parsePath(toArg) : (to = _extends({}, toArg), invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to)), invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to)), invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to)));
  let isEmptyPath = toArg === "" || to.pathname === "", toPathname = isEmptyPath ? "/" : to.pathname, from;
  if (isPathRelative || toPathname == null)
    from = locationPathname;
  else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      for (; toSegments[0] === ".."; )
        toSegments.shift(), routePathnameIndex -= 1;
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from), hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"), hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  return !path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash) && (path.pathname += "/"), path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to == "string" ? parsePath(to).pathname : to.pathname;
}
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === !0;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value))
    return value;
  if (value._error)
    throw value._error;
  return value._data;
}
function isRouteErrorResponse(error) {
  return error != null && typeof error.status == "number" && typeof error.statusText == "string" && typeof error.internal == "boolean" && "data" in error;
}
function createRouter(init) {
  let routerWindow = init.window ? init.window : typeof window < "u" ? window : void 0, isBrowser2 = typeof routerWindow < "u" && typeof routerWindow.document < "u" && typeof routerWindow.document.createElement < "u", isServer = !isBrowser2;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties2;
  if (init.mapRouteProperties)
    mapRouteProperties2 = init.mapRouteProperties;
  else if (init.detectErrorBoundary) {
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties2 = (route) => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else
    mapRouteProperties2 = defaultMapRouteProperties;
  let manifest = {}, dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties2, void 0, manifest), inFlightDataRoutes, basename = init.basename || "/", future2 = _extends({
    v7_normalizeFormMethod: !1,
    v7_prependBasename: !1
  }, init.future), unlistenHistory = null, subscribers = /* @__PURE__ */ new Set(), savedScrollPositions2 = null, getScrollRestorationKey = null, getScrollPosition = null, initialScrollRestored = init.hydrationData != null, initialMatches = matchRoutes(dataRoutes, init.history.location, basename), initialErrors = null;
  if (initialMatches == null) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    }), {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches, initialErrors = {
      [route.id]: error
    };
  }
  let initialized = (
    // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    !initialMatches.some((m2) => m2.route.lazy) && // And we have to either have no loaders or have been provided hydrationData
    (!initialMatches.some((m2) => m2.route.loader) || init.hydrationData != null)
  ), router, state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, pendingAction = Action.Pop, pendingPreventScrollReset = !1, pendingNavigationController, isUninterruptedRevalidation = !1, isRevalidationRequired = !1, cancelledDeferredRoutes = [], cancelledFetcherLoads = [], fetchControllers = /* @__PURE__ */ new Map(), incrementingLoadId = 0, pendingNavigationLoadId = -1, fetchReloadIds = /* @__PURE__ */ new Map(), fetchRedirectIds = /* @__PURE__ */ new Set(), fetchLoadMatches = /* @__PURE__ */ new Map(), activeDeferreds = /* @__PURE__ */ new Map(), blockerFunctions = /* @__PURE__ */ new Map(), ignoreNextHistoryUpdate = !1;
  function initialize() {
    return unlistenHistory = init.history.listen((_ref) => {
      let {
        action: historyAction,
        location: location2,
        delta
      } = _ref;
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = !1;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location2,
        historyAction
      });
      if (blockerKey && delta != null) {
        ignoreNextHistoryUpdate = !0, init.history.go(delta * -1), updateBlocker(blockerKey, {
          state: "blocked",
          location: location2,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: location2
            }), init.history.go(delta);
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER), updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location2);
    }), state.initialized || startNavigation(Action.Pop, state.location), router;
  }
  function dispose() {
    unlistenHistory && unlistenHistory(), subscribers.clear(), pendingNavigationController && pendingNavigationController.abort(), state.fetchers.forEach((_, key) => deleteFetcher(key)), state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    return subscribers.add(fn), () => subscribers.delete(fn);
  }
  function updateState(newState) {
    state = _extends({}, state, newState), subscribers.forEach((subscriber) => subscriber(state));
  }
  function completeNavigation(location2, newState) {
    var _location$state, _location$state2;
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location2.state) == null ? void 0 : _location$state._isRedirect) !== !0, actionData;
    newState.actionData ? Object.keys(newState.actionData).length > 0 ? actionData = newState.actionData : actionData = null : isActionReload ? actionData = state.actionData : actionData = null;
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData, blockers = state.blockers;
    blockers.size > 0 && (blockers = new Map(blockers), blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER)));
    let preventScrollReset = pendingPreventScrollReset === !0 || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location2.state) == null ? void 0 : _location$state2._isRedirect) !== !0;
    inFlightDataRoutes && (dataRoutes = inFlightDataRoutes, inFlightDataRoutes = void 0), isUninterruptedRevalidation || pendingAction === Action.Pop || (pendingAction === Action.Push ? init.history.push(location2, location2.state) : pendingAction === Action.Replace && init.history.replace(location2, location2.state)), updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location: location2,
      initialized: !0,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location2, newState.matches || state.matches),
      preventScrollReset,
      blockers
    })), pendingAction = Action.Pop, pendingPreventScrollReset = !1, isUninterruptedRevalidation = !1, isRevalidationRequired = !1, cancelledDeferredRoutes = [], cancelledFetcherLoads = [];
  }
  async function navigate(to, opts) {
    if (typeof to == "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future2.v7_prependBasename, to, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative), {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future2.v7_normalizeFormMethod, !1, normalizedPath, opts), currentLocation = state.location, nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : void 0, historyAction = Action.Push;
    userReplace === !0 ? historyAction = Action.Replace : userReplace === !1 || submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search && (historyAction = Action.Replace);
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === !0 : void 0, blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: nextLocation
          }), navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER), updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  }
  function revalidate() {
    if (interruptActiveLoads(), updateState({
      revalidation: "loading"
    }), state.navigation.state !== "submitting") {
      if (state.navigation.state === "idle") {
        startNavigation(state.historyAction, state.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      startNavigation(pendingAction || state.historyAction, state.navigation.location, {
        overrideNavigation: state.navigation
      });
    }
  }
  async function startNavigation(historyAction, location2, opts) {
    pendingNavigationController && pendingNavigationController.abort(), pendingNavigationController = null, pendingAction = historyAction, isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === !0, saveScrollPosition(state.location, state.matches), pendingPreventScrollReset = (opts && opts.preventScrollReset) === !0;
    let routesToUse = inFlightDataRoutes || dataRoutes, loadingNavigation = opts && opts.overrideNavigation, matches = matchRoutes(routesToUse, location2, basename);
    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location2.pathname
      }), {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse);
      cancelActiveDeferreds(), completeNavigation(location2, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    }
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location2) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location2, {
        matches
      });
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location2, pendingNavigationController.signal, opts && opts.submission), pendingActionData, pendingError;
    if (opts && opts.pendingError)
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionOutput = await handleAction(request, location2, opts.submission, matches, {
        replace: opts.replace
      });
      if (actionOutput.shortCircuited)
        return;
      pendingActionData = actionOutput.pendingActionData, pendingError = actionOutput.pendingActionError, loadingNavigation = getLoadingNavigation(location2, opts.submission), request = new Request(request.url, {
        signal: request.signal
      });
    }
    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location2, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);
    shortCircuited || (pendingNavigationController = null, completeNavigation(location2, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    })));
  }
  async function handleAction(request, location2, submission, matches, opts) {
    opts === void 0 && (opts = {}), interruptActiveLoads();
    let navigation = getSubmittingNavigation(location2, submission);
    updateState({
      navigation
    });
    let result, actionMatch = getTargetMatch(matches, location2);
    if (!actionMatch.route.action && !actionMatch.route.lazy)
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location2.pathname,
          routeId: actionMatch.route.id
        })
      };
    else if (result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties2, basename), request.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (isRedirectResult(result)) {
      let replace;
      return opts && opts.replace != null ? replace = opts.replace : replace = result.location === state.location.pathname + state.location.search, await startRedirectNavigation(state, result, {
        submission,
        replace
      }), {
        shortCircuited: !0
      };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      return (opts && opts.replace) !== !0 && (pendingAction = Action.Push), {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }
    if (isDeferredResult(result))
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  }
  async function handleLoaders(request, location2, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location2, submission), activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation), routesToUse = inFlightDataRoutes || dataRoutes, [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location2, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError);
    if (cancelActiveDeferreds((routeId) => !(matches && matches.some((m2) => m2.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m2) => m2.route.id === routeId)), pendingNavigationLoadId = ++incrementingLoadId, matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      return completeNavigation(location2, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}, updatedFetchers2 ? {
        fetchers: new Map(state.fetchers)
      } : {})), {
        shortCircuited: !0
      };
    }
    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach((rf) => {
        let fetcher = state.fetchers.get(rf.key), revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }
    revalidatingFetchers.forEach((rf) => {
      fetchControllers.has(rf.key) && abortFetcher(rf.key), rf.controller && fetchControllers.set(rf.key, rf.controller);
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f2) => abortFetcher(f2.key));
    pendingNavigationController && pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted)
      return {
        shortCircuited: !0
      };
    pendingNavigationController && pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations), revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
    let redirect4 = findRedirect(results);
    if (redirect4) {
      if (redirect4.idx >= matchesToLoad.length) {
        let fetcherKey = revalidatingFetchers[redirect4.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      return await startRedirectNavigation(state, redirect4.result, {
        replace
      }), {
        shortCircuited: !0
      };
    }
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe((aborted) => {
        (aborted || deferredData.done) && activeDeferreds.delete(routeId);
      });
    });
    let updatedFetchers = markFetchRedirectsDone(), didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId), shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function fetch2(key, routeId, href, opts) {
    if (isServer)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    fetchControllers.has(key) && abortFetcher(key);
    let routesToUse = inFlightDataRoutes || dataRoutes, normalizedPath = normalizeTo(state.location, state.matches, basename, future2.v7_prependBasename, href, routeId, opts == null ? void 0 : opts.relative), matches = matchRoutes(routesToUse, normalizedPath, basename);
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }));
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future2.v7_normalizeFormMethod, !0, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error);
      return;
    }
    let match = getTargetMatch(matches, path);
    if (pendingPreventScrollReset = (opts && opts.preventScrollReset) === !0, submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    }
    fetchLoadMatches.set(key, {
      routeId,
      path
    }), handleFetcherLoader(key, routeId, path, match, matches, submission);
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    if (interruptActiveLoads(), fetchLoadMatches.delete(key), !match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId
      });
      setFetcherError(key, routeId, error);
      return;
    }
    let existingFetcher = state.fetchers.get(key), fetcher = getSubmittingFetcher(submission, existingFetcher);
    state.fetchers.set(key, fetcher), updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortController = new AbortController(), fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId, actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties2, basename);
    if (fetchRequest.signal.aborted) {
      fetchControllers.get(key) === abortController && fetchControllers.delete(key);
      return;
    }
    if (isRedirectResult(actionResult))
      if (fetchControllers.delete(key), pendingNavigationLoadId > originatingLoadId) {
        let doneFetcher = getDoneFetcher(void 0);
        state.fetchers.set(key, doneFetcher), updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        let loadingFetcher = getLoadingFetcher(submission);
        return state.fetchers.set(key, loadingFetcher), updateState({
          fetchers: new Map(state.fetchers)
        }), startRedirectNavigation(state, actionResult, {
          submission,
          isFetchActionRedirect: !0
        });
      }
    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }
    if (isDeferredResult(actionResult))
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    let nextLocation = state.navigation.location || state.location, revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal), routesToUse = inFlightDataRoutes || dataRoutes, matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      submission,
      nextLocation,
      isRevalidationRequired,
      cancelledDeferredRoutes,
      cancelledFetcherLoads,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      {
        [match.route.id]: actionResult.data
      },
      void 0
      // No need to send through errors since we short circuit above
    );
    revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
      let staleKey = rf.key, existingFetcher2 = state.fetchers.get(staleKey), revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
      state.fetchers.set(staleKey, revalidatingFetcher), fetchControllers.has(staleKey) && abortFetcher(staleKey), rf.controller && fetchControllers.set(staleKey, rf.controller);
    }), updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted)
      return;
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations), fetchReloadIds.delete(key), fetchControllers.delete(key), revalidatingFetchers.forEach((r2) => fetchControllers.delete(r2.key));
    let redirect4 = findRedirect(results);
    if (redirect4) {
      if (redirect4.idx >= matchesToLoad.length) {
        let fetcherKey = revalidatingFetchers[redirect4.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      return startRedirectNavigation(state, redirect4.result);
    }
    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, void 0, revalidatingFetchers, fetcherResults, activeDeferreds);
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    let didAbortFetchLoads = abortStaleFetchLoads(loadId);
    state.navigation.state === "loading" && loadId > pendingNavigationLoadId ? (invariant(pendingAction, "Expected pending action"), pendingNavigationController && pendingNavigationController.abort(), completeNavigation(state.navigation.location, {
      matches,
      loaderData,
      errors,
      fetchers: new Map(state.fetchers)
    })) : (updateState(_extends({
      errors,
      loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
      fetchers: new Map(state.fetchers)
    } : {})), isRevalidationRequired = !1);
  }
  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key), loadingFetcher = getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0);
    state.fetchers.set(key, loadingFetcher), updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortController = new AbortController(), fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId, result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties2, basename);
    if (isDeferredResult(result) && (result = await resolveDeferredData(result, fetchRequest.signal, !0) || result), fetchControllers.get(key) === abortController && fetchControllers.delete(key), fetchRequest.signal.aborted)
      return;
    if (isRedirectResult(result))
      if (pendingNavigationLoadId > originatingLoadId) {
        let doneFetcher2 = getDoneFetcher(void 0);
        state.fetchers.set(key, doneFetcher2), updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key), await startRedirectNavigation(state, result);
        return;
      }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key), updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    let doneFetcher = getDoneFetcher(result.data);
    state.fetchers.set(key, doneFetcher), updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  async function startRedirectNavigation(state2, redirect4, _temp) {
    let {
      submission,
      replace,
      isFetchActionRedirect
    } = _temp === void 0 ? {} : _temp;
    redirect4.revalidate && (isRevalidationRequired = !0);
    let redirectLocation = createLocation(
      state2.location,
      redirect4.location,
      // TODO: This can be removed once we get rid of useTransition in Remix v2
      _extends({
        _isRedirect: !0
      }, isFetchActionRedirect ? {
        _isFetchActionRedirect: !0
      } : {})
    );
    if (invariant(redirectLocation, "Expected a location on the redirect navigation"), ABSOLUTE_URL_REGEX.test(redirect4.location) && isBrowser2) {
      let url = init.history.createURL(redirect4.location), isDifferentBasename = stripBasename(url.pathname, basename) == null;
      if (routerWindow.location.origin !== url.origin || isDifferentBasename) {
        replace ? routerWindow.location.replace(redirect4.location) : routerWindow.location.assign(redirect4.location);
        return;
      }
    }
    pendingNavigationController = null;
    let redirectHistoryAction = replace === !0 ? Action.Replace : Action.Push, activeSubmission = submission || getSubmissionFromNavigation(state2.navigation);
    if (redirectPreserveMethodStatusCodes.has(redirect4.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod))
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: redirect4.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    else if (isFetchActionRedirect)
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: getLoadingNavigation(redirectLocation),
        fetcherSubmission: activeSubmission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    else {
      let overrideNavigation = getLoadingNavigation(redirectLocation, activeSubmission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }
  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    let results = await Promise.all([...matchesToLoad.map((match) => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties2, basename)), ...fetchersToLoad.map((f2) => f2.matches && f2.match && f2.controller ? callLoaderOrAction("loader", createClientSideRequest(init.history, f2.path, f2.controller.signal), f2.match, f2.matches, manifest, mapRouteProperties2, basename) : {
      type: ResultType.error,
      error: getInternalRouterError(404, {
        pathname: f2.path
      })
    })]), loaderResults = results.slice(0, matchesToLoad.length), fetcherResults = results.slice(matchesToLoad.length);
    return await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(() => request.signal), !1, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map((f2) => f2.match), fetcherResults, fetchersToLoad.map((f2) => f2.controller ? f2.controller.signal : null), !0)]), {
      results,
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = !0, cancelledDeferredRoutes.push(...cancelActiveDeferreds()), fetchLoadMatches.forEach((_, key) => {
      fetchControllers.has(key) && (cancelledFetcherLoads.push(key), abortFetcher(key));
    });
  }
  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key), updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key)) && abortFetcher(key), fetchLoadMatches.delete(key), fetchReloadIds.delete(key), fetchRedirectIds.delete(key), state.fetchers.delete(key);
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key), controller.abort(), fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key), doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [], updatedFetchers = !1;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key), fetcher.state === "loading" && (fetchRedirectIds.delete(key), doneKeys.push(key), updatedFetchers = !0);
    }
    return markFetchersDone(doneKeys), updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds)
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key), fetcher.state === "loading" && (abortFetcher(key), fetchReloadIds.delete(key), yeetedKeys.push(key));
      }
    return markFetchersDone(yeetedKeys), yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    return blockerFunctions.get(key) !== fn && blockerFunctions.set(key, fn), blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key), blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker), updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;
    if (blockerFunctions.size === 0)
      return;
    blockerFunctions.size > 1 && warning(!1, "A router only supports one blocker at a time");
    let entries = Array.from(blockerFunctions.entries()), [blockerKey, blockerFunction] = entries[entries.length - 1], blocker = state.blockers.get(blockerKey);
    if (!(blocker && blocker.state === "proceeding") && blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    }))
      return blockerKey;
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    return activeDeferreds.forEach((dfd, routeId) => {
      (!predicate || predicate(routeId)) && (dfd.cancel(), cancelledRouteIds.push(routeId), activeDeferreds.delete(routeId));
    }), cancelledRouteIds;
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    if (savedScrollPositions2 = positions, getScrollPosition = getPosition, getScrollRestorationKey = getKey || null, !initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = !0;
      let y2 = getSavedScrollPosition(state.location, state.matches);
      y2 != null && updateState({
        restoreScrollPosition: y2
      });
    }
    return () => {
      savedScrollPositions2 = null, getScrollPosition = null, getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location2, matches) {
    return getScrollRestorationKey && getScrollRestorationKey(location2, matches.map((m2) => createUseMatchesMatch(m2, state.loaderData))) || location2.key;
  }
  function saveScrollPosition(location2, matches) {
    if (savedScrollPositions2 && getScrollPosition) {
      let key = getScrollKey(location2, matches);
      savedScrollPositions2[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location2, matches) {
    if (savedScrollPositions2) {
      let key = getScrollKey(location2, matches), y2 = savedScrollPositions2[key];
      if (typeof y2 == "number")
        return y2;
    }
    return null;
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {}, inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties2, void 0, manifest);
  }
  return router = {
    get basename() {
      return basename;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch: fetch2,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (to) => init.history.createHref(to),
    encodeLocation: (to) => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  }, router;
}
function createStaticHandler(routes2, opts) {
  invariant(routes2.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {}, basename = (opts ? opts.basename : null) || "/", mapRouteProperties2;
  if (opts != null && opts.mapRouteProperties)
    mapRouteProperties2 = opts.mapRouteProperties;
  else if (opts != null && opts.detectErrorBoundary) {
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties2 = (route) => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else
    mapRouteProperties2 = defaultMapRouteProperties;
  let dataRoutes = convertRoutesToDataRoutes(routes2, mapRouteProperties2, void 0, manifest);
  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2, url = new URL(request.url), method = request.method, location2 = createLocation("", createPath(url), null, "default"), matches = matchRoutes(dataRoutes, location2, basename);
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      }), {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location: location2,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location2.pathname
      }), {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location: location2,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location2, matches, requestContext);
    return isResponse(result) ? result : _extends({
      location: location2,
      basename
    }, result);
  }
  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3, url = new URL(request.url), method = request.method, location2 = createLocation("", createPath(url), null, "default"), matches = matchRoutes(dataRoutes, location2, basename);
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS")
      throw getInternalRouterError(405, {
        method
      });
    if (!matches)
      throw getInternalRouterError(404, {
        pathname: location2.pathname
      });
    let match = routeId ? matches.find((m2) => m2.route.id === routeId) : getTargetMatch(matches, location2);
    if (routeId && !match)
      throw getInternalRouterError(403, {
        pathname: location2.pathname,
        routeId
      });
    if (!match)
      throw getInternalRouterError(404, {
        pathname: location2.pathname
      });
    let result = await queryImpl(request, location2, matches, requestContext, match);
    if (isResponse(result))
      return result;
    let error = result.errors ? Object.values(result.errors)[0] : void 0;
    if (error !== void 0)
      throw error;
    if (result.actionData)
      return Object.values(result.actionData)[0];
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      return (_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id] && (data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id]), data;
    }
  }
  async function queryImpl(request, location2, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase()))
        return await submit(request, matches, routeMatch || getTargetMatch(matches, location2), requestContext, routeMatch != null);
      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e2) {
      if (isQueryRouteResponse(e2)) {
        if (e2.type === ResultType.error && !isRedirectResponse(e2.response))
          throw e2.response;
        return e2.response;
      }
      if (isRedirectResponse(e2))
        return e2;
      throw e2;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest)
        throw error;
      result = {
        type: ResultType.error,
        error
      };
    } else if (result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties2, basename, {
      isStaticRequest: !0,
      isRouteRequest,
      requestContext
    }), request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    }
    if (isRedirectResult(result))
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest)
        throw error;
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      if (isErrorResult(result))
        throw result.error;
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id), context2 = await loadRouteData(request, matches, requestContext, void 0, {
        [boundaryMatch.route.id]: result.error
      });
      return _extends({}, context2, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    }), context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }
  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null;
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy))
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    let matchesToLoad = (routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0])).filter((m2) => m2.route.loader || m2.route.lazy);
    if (matchesToLoad.length === 0)
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m2) => Object.assign(acc, {
          [m2.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    let results = await Promise.all([...matchesToLoad.map((match) => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties2, basename, {
      isStaticRequest: !0,
      isRouteRequest,
      requestContext
    }))]);
    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    }
    let activeDeferreds = /* @__PURE__ */ new Map(), context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds), executedLoaders = new Set(matchesToLoad.map((match) => match.route.id));
    return matches.forEach((match) => {
      executedLoaders.has(match.route.id) || (context.loaderData[match.route.id] = null);
    }), _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
function getStaticContextFromError(routes2, context, error) {
  return _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes2[0].id]: error
    }
  });
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location2, matches, basename, prependBasename, to, fromRouteId, relative) {
  let contextualMatches, activeRouteMatch;
  if (fromRouteId != null && relative !== "path") {
    contextualMatches = [];
    for (let match of matches)
      if (contextualMatches.push(match), match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
  } else
    contextualMatches = matches, activeRouteMatch = matches[matches.length - 1];
  let path = resolveTo(to || ".", getPathContributingMatches(contextualMatches).map((m2) => m2.pathnameBase), stripBasename(location2.pathname, basename) || location2.pathname, relative === "path");
  return to == null && (path.search = location2.search, path.hash = location2.hash), (to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search) && (path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index"), prependBasename && basename !== "/" && (path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname])), createPath(path);
}
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts))
    return {
      path
    };
  if (opts.formMethod && !isValidMethod(opts.formMethod))
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  }), rawFormMethod = opts.formMethod || "get", formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase(), formAction = stripHashFromPath(path);
  if (opts.body !== void 0) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod))
        return getInvalidBodyError();
      let text = typeof opts.body == "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(opts.body.entries()).reduce((acc, _ref3) => {
          let [name, value] = _ref3;
          return "" + acc + name + "=" + value + `
`;
        }, "")
      ) : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: void 0,
          json: void 0,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod))
        return getInvalidBodyError();
      try {
        let json4 = typeof opts.body == "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: void 0,
            json: json4,
            text: void 0
          }
        };
      } catch {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData == "function", "FormData is not available in this environment");
  let searchParams, formData;
  if (opts.formData)
    searchParams = convertFormDataToSearchParams(opts.formData), formData = opts.formData;
  else if (opts.body instanceof FormData)
    searchParams = convertFormDataToSearchParams(opts.body), formData = opts.body;
  else if (opts.body instanceof URLSearchParams)
    searchParams = opts.body, formData = convertSearchParamsToFormData(searchParams);
  else if (opts.body == null)
    searchParams = new URLSearchParams(), formData = new FormData();
  else
    try {
      searchParams = new URLSearchParams(opts.body), formData = convertSearchParamsToFormData(searchParams);
    } catch {
      return getInvalidBodyError();
    }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: void 0,
    text: void 0
  };
  if (isMutationMethod(submission.formMethod))
    return {
      path,
      submission
    };
  let parsedPath = parsePath(path);
  return isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search) && searchParams.append("index", ""), parsedPath.search = "?" + searchParams, {
    path: createPath(parsedPath),
    submission
  };
}
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;
  if (boundaryId) {
    let index2 = matches.findIndex((m2) => m2.route.id === boundaryId);
    index2 >= 0 && (boundaryMatches = matches.slice(0, index2));
  }
  return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location2, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : void 0, currentUrl = history.createURL(state.location), nextUrl = history.createURL(location2), boundaryId = pendingError ? Object.keys(pendingError)[0] : void 0, navigationMatches = getLoaderMatchesUntilBoundary(matches, boundaryId).filter((match, index2) => {
    if (match.route.lazy)
      return !0;
    if (match.route.loader == null)
      return !1;
    if (isNewLoader(state.loaderData, state.matches[index2], match) || cancelledDeferredRoutes.some((id) => id === match.route.id))
      return !0;
    let currentRouteMatch = state.matches[index2], nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate: (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        isRevalidationRequired || // Clicked the same link, resubmitted a GET form
        currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
        currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
      )
    }));
  }), revalidatingFetchers = [];
  return fetchLoadMatches.forEach((f2, key) => {
    if (!matches.some((m2) => m2.route.id === f2.routeId))
      return;
    let fetcherMatches = matchRoutes(routesToUse, f2.path, basename);
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f2.routeId,
        path: f2.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let fetcher = state.fetchers.get(key), fetcherMatch = getTargetMatch(fetcherMatches, f2.path), shouldRevalidate = !1;
    fetchRedirectIds.has(key) ? shouldRevalidate = !1 : cancelledFetcherLoads.includes(key) ? shouldRevalidate = !0 : fetcher && fetcher.state !== "idle" && fetcher.data === void 0 ? shouldRevalidate = isRevalidationRequired : shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
      currentUrl,
      currentParams: state.matches[state.matches.length - 1].params,
      nextUrl,
      nextParams: matches[matches.length - 1].params
    }, submission, {
      actionResult,
      defaultShouldRevalidate: isRevalidationRequired
    })), shouldRevalidate && revalidatingFetchers.push({
      key,
      routeId: f2.routeId,
      path: f2.path,
      matches: fetcherMatches,
      match: fetcherMatch,
      controller: new AbortController()
    });
  }), [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = (
    // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id
  ), isMissingData = currentLoaderData[match.route.id] === void 0;
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice == "boolean")
      return routeChoice;
  }
  return arg.defaultShouldRevalidate;
}
async function loadLazyRouteModule(route, mapRouteProperties2, manifest) {
  if (!route.lazy)
    return;
  let lazyRoute = await route.lazy();
  if (!route.lazy)
    return;
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let isPropertyStaticallyDefined = routeToUpdate[lazyRouteProperty] !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.')), !isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty) && (routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty]);
  }
  Object.assign(routeToUpdate, routeUpdates), Object.assign(routeToUpdate, _extends({}, mapRouteProperties2(routeToUpdate), {
    lazy: void 0
  }));
}
async function callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties2, basename, opts) {
  opts === void 0 && (opts = {});
  let resultType, result, onReject, runHandler = (handler) => {
    let reject, abortPromise = new Promise((_, r2) => reject = r2);
    return onReject = () => reject(), request.signal.addEventListener("abort", onReject), Promise.race([handler({
      request,
      params: match.params,
      context: opts.requestContext
    }), abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (match.route.lazy)
      if (handler)
        result = (await Promise.all([runHandler(handler), loadLazyRouteModule(match.route, mapRouteProperties2, manifest)]))[0];
      else if (await loadLazyRouteModule(match.route, mapRouteProperties2, manifest), handler = match.route[type], handler)
        result = await runHandler(handler);
      else if (type === "action") {
        let url = new URL(request.url), pathname = url.pathname + url.search;
        throw getInternalRouterError(405, {
          method: request.method,
          pathname,
          routeId: match.route.id
        });
      } else
        return {
          type: ResultType.data,
          data: void 0
        };
    else if (handler)
      result = await runHandler(handler);
    else {
      let url = new URL(request.url), pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    }
    invariant(result !== void 0, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e2) {
    resultType = ResultType.error, result = e2;
  } finally {
    onReject && request.signal.removeEventListener("abort", onReject);
  }
  if (isResponse(result)) {
    let status = result.status;
    if (redirectStatusCodes.has(status)) {
      let location2 = result.headers.get("Location");
      if (invariant(location2, "Redirects returned/thrown from loaders/actions must have a Location header"), !ABSOLUTE_URL_REGEX.test(location2))
        location2 = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, !0, location2);
      else if (!opts.isStaticRequest) {
        let currentUrl = new URL(request.url), url = location2.startsWith("//") ? new URL(currentUrl.protocol + location2) : new URL(location2), isSameBasename = stripBasename(url.pathname, basename) != null;
        url.origin === currentUrl.origin && isSameBasename && (location2 = url.pathname + url.search + url.hash);
      }
      if (opts.isStaticRequest)
        throw result.headers.set("Location", location2), result;
      return {
        type: ResultType.redirect,
        status,
        location: location2,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null
      };
    }
    if (opts.isRouteRequest)
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    let data, contentType = result.headers.get("Content-Type");
    return contentType && /\bapplication\/json\b/.test(contentType) ? data = await result.json() : data = await result.text(), resultType === ResultType.error ? {
      type: resultType,
      error: new ErrorResponse(status, result.statusText, data),
      headers: result.headers
    } : {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (resultType === ResultType.error)
    return {
      type: resultType,
      error: result
    };
  if (isDeferredData(result)) {
    var _result$init, _result$init2;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
function createClientSideRequest(history, location2, signal, submission) {
  let url = history.createURL(stripHashFromPath(location2)).toString(), init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    init.method = formMethod.toUpperCase(), formEncType === "application/json" ? (init.headers = new Headers({
      "Content-Type": formEncType
    }), init.body = JSON.stringify(submission.json)) : formEncType === "text/plain" ? init.body = submission.text : formEncType === "application/x-www-form-urlencoded" && submission.formData ? init.body = convertFormDataToSearchParams(submission.formData) : init.body = submission.formData;
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries())
    searchParams.append(key, typeof value == "string" ? value : value.name);
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries())
    formData.append(key, value);
  return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  let loaderData = {}, errors = null, statusCode, foundError = !1, loaderHeaders = {};
  return results.forEach((result, index2) => {
    let id = matchesToLoad[index2].route.id;
    if (invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData"), isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, id), error = result.error;
      pendingError && (error = Object.values(pendingError)[0], pendingError = void 0), errors = errors || {}, errors[boundaryMatch.route.id] == null && (errors[boundaryMatch.route.id] = error), loaderData[id] = void 0, foundError || (foundError = !0, statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500), result.headers && (loaderHeaders[id] = result.headers);
    } else
      isDeferredResult(result) ? (activeDeferreds.set(id, result.deferredData), loaderData[id] = result.deferredData.data) : loaderData[id] = result.data, result.statusCode != null && result.statusCode !== 200 && !foundError && (statusCode = result.statusCode), result.headers && (loaderHeaders[id] = result.headers);
  }), pendingError && (errors = pendingError, loaderData[Object.keys(pendingError)[0]] = void 0), {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
  for (let index2 = 0; index2 < revalidatingFetchers.length; index2++) {
    let {
      key,
      match,
      controller
    } = revalidatingFetchers[index2];
    invariant(fetcherResults !== void 0 && fetcherResults[index2] !== void 0, "Did not find corresponding fetcher result");
    let result = fetcherResults[index2];
    if (!(controller && controller.signal.aborted))
      if (isErrorResult(result)) {
        let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
        errors && errors[boundaryMatch.route.id] || (errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        })), state.fetchers.delete(key);
      } else if (isRedirectResult(result))
        invariant(!1, "Unhandled fetcher revalidation redirect");
      else if (isDeferredResult(result))
        invariant(!1, "Unhandled fetcher deferred data");
      else {
        let doneFetcher = getDoneFetcher(result.data);
        state.fetchers.set(key, doneFetcher);
      }
  }
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id) ? newLoaderData[id] !== void 0 && (mergedLoaderData[id] = newLoaderData[id]) : loaderData[id] !== void 0 && match.route.loader && (mergedLoaderData[id] = loaderData[id]), errors && errors.hasOwnProperty(id))
      break;
  }
  return mergedLoaderData;
}
function findNearestBoundary(matches, routeId) {
  return (routeId ? matches.slice(0, matches.findIndex((m2) => m2.route.id === routeId) + 1) : [...matches]).reverse().find((m2) => m2.route.hasErrorBoundary === !0) || matches[0];
}
function getShortCircuitMatches(routes2) {
  let route = routes2.find((r2) => r2.index || !r2.path || r2.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4, statusText = "Unknown Server Error", errorMessage = "Unknown @remix-run/router error";
  return status === 400 ? (statusText = "Bad Request", method && pathname && routeId ? errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request." : type === "defer-action" ? errorMessage = "defer() is not supported in actions" : type === "invalid-body" && (errorMessage = "Unable to encode submission body")) : status === 403 ? (statusText = "Forbidden", errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"') : status === 404 ? (statusText = "Not Found", errorMessage = 'No route matches URL "' + pathname + '"') : status === 405 && (statusText = "Method Not Allowed", method && pathname && routeId ? errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request." : method && (errorMessage = 'Invalid request method "' + method.toUpperCase() + '"')), new ErrorResponse(status || 500, statusText, new Error(errorMessage), !0);
}
function findRedirect(results) {
  for (let i2 = results.length - 1; i2 >= 0; i2--) {
    let result = results[i2];
    if (isRedirectResult(result))
      return {
        result,
        idx: i2
      };
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path == "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a2, b2) {
  return a2.pathname !== b2.pathname || a2.search !== b2.search ? !1 : a2.hash === "" ? b2.hash !== "" : a2.hash === b2.hash ? !0 : b2.hash !== "";
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred == "object" && typeof deferred.data == "object" && typeof deferred.subscribe == "function" && typeof deferred.cancel == "function" && typeof deferred.resolveData == "function";
}
function isResponse(value) {
  return value != null && typeof value.status == "number" && typeof value.statusText == "string" && typeof value.headers == "object" && typeof value.body < "u";
}
function isRedirectResponse(result) {
  if (!isResponse(result))
    return !1;
  let status = result.status, location2 = result.headers.get("Location");
  return status >= 300 && status <= 399 && location2 != null;
}
function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
  for (let index2 = 0; index2 < results.length; index2++) {
    let result = results[index2], match = matchesToLoad[index2];
    if (!match)
      continue;
    let currentMatch = currentMatches.find((m2) => m2.route.id === match.route.id), isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== void 0;
    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      let signal = signals[index2];
      invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result"), await resolveDeferredData(result, signal, isFetcher).then((result2) => {
        result2 && (results[index2] = result2 || results[index2]);
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0 && (unwrap = !1), !await result.deferredData.resolveData(signal)) {
    if (unwrap)
      try {
        return {
          type: ResultType.data,
          data: result.deferredData.unwrappedData
        };
      } catch (e2) {
        return {
          type: ResultType.error,
          error: e2
        };
      }
    return {
      type: ResultType.data,
      data: result.deferredData.data
    };
  }
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v2) => v2 === "");
}
function createUseMatchesMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function getTargetMatch(matches, location2) {
  let search = typeof location2 == "string" ? parsePath(location2).search : location2.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || ""))
    return matches[matches.length - 1];
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json: json4
  } = navigation;
  if (!(!formMethod || !formAction || !formEncType)) {
    if (text != null)
      return {
        formMethod,
        formAction,
        formEncType,
        formData: void 0,
        json: void 0,
        text
      };
    if (formData != null)
      return {
        formMethod,
        formAction,
        formEncType,
        formData,
        json: void 0,
        text: void 0
      };
    if (json4 !== void 0)
      return {
        formMethod,
        formAction,
        formEncType,
        formData: void 0,
        json: json4,
        text: void 0
      };
  }
}
function getLoadingNavigation(location2, submission) {
  return submission ? {
    state: "loading",
    location: location2,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  } : {
    state: "loading",
    location: location2,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function getSubmittingNavigation(location2, submission) {
  return {
    state: "submitting",
    location: location2,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
}
function getLoadingFetcher(submission, data) {
  return submission ? {
    state: "loading",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data,
    " _hasFetcherDoneAnything ": !0
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data,
    " _hasFetcherDoneAnything ": !0
  };
}
function getSubmittingFetcher(submission, existingFetcher) {
  return {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : void 0,
    " _hasFetcherDoneAnything ": !0
  };
}
function getDoneFetcher(data) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data,
    " _hasFetcherDoneAnything ": !0
  };
}
var Action, PopStateEventType, ResultType, immutableRouteKeys, paramRe, dynamicSegmentValue, indexRouteValue, emptySegmentValue, staticSegmentValue, splatPenalty, isSplat, joinPaths, normalizePathname, normalizeSearch, normalizeHash, json, AbortedDeferredError, DeferredData, defer, redirect, ErrorResponse, validMutationMethodsArr, validMutationMethods, validRequestMethodsArr, validRequestMethods, redirectStatusCodes, redirectPreserveMethodStatusCodes, IDLE_NAVIGATION, IDLE_FETCHER, IDLE_BLOCKER, ABSOLUTE_URL_REGEX, defaultMapRouteProperties, UNSAFE_DEFERRED_SYMBOL, init_router = __esm({
  "node_modules/@remix-run/router/dist/router.js"() {
    (function(Action3) {
      Action3.Pop = "POP", Action3.Push = "PUSH", Action3.Replace = "REPLACE";
    })(Action || (Action = {}));
    PopStateEventType = "popstate";
    (function(ResultType2) {
      ResultType2.data = "data", ResultType2.deferred = "deferred", ResultType2.redirect = "redirect", ResultType2.error = "error";
    })(ResultType || (ResultType = {}));
    immutableRouteKeys = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    paramRe = /^:\w+$/, dynamicSegmentValue = 3, indexRouteValue = 2, emptySegmentValue = 1, staticSegmentValue = 10, splatPenalty = -2, isSplat = (s2) => s2 === "*";
    joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/"), normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/"), normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search, normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash, json = function(data, init) {
      init === void 0 && (init = {});
      let responseInit = typeof init == "number" ? {
        status: init
      } : init, headers4 = new Headers(responseInit.headers);
      return headers4.has("Content-Type") || headers4.set("Content-Type", "application/json; charset=utf-8"), new Response(JSON.stringify(data), _extends({}, responseInit, {
        headers: headers4
      }));
    }, AbortedDeferredError = class extends Error {
    }, DeferredData = class {
      constructor(data, responseInit) {
        this.pendingKeysSet = /* @__PURE__ */ new Set(), this.subscribers = /* @__PURE__ */ new Set(), this.deferredKeys = [], invariant(data && typeof data == "object" && !Array.isArray(data), "defer() only accepts plain objects");
        let reject;
        this.abortPromise = new Promise((_, r2) => reject = r2), this.controller = new AbortController();
        let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
        this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort), this.controller.signal.addEventListener("abort", onAbort), this.data = Object.entries(data).reduce((acc, _ref) => {
          let [key, value] = _ref;
          return Object.assign(acc, {
            [key]: this.trackPromise(key, value)
          });
        }, {}), this.done && this.unlistenAbortSignal(), this.init = responseInit;
      }
      trackPromise(key, value) {
        if (!(value instanceof Promise))
          return value;
        this.deferredKeys.push(key), this.pendingKeysSet.add(key);
        let promise = Promise.race([value, this.abortPromise]).then((data) => this.onSettle(promise, key, void 0, data), (error) => this.onSettle(promise, key, error));
        return promise.catch(() => {
        }), Object.defineProperty(promise, "_tracked", {
          get: () => !0
        }), promise;
      }
      onSettle(promise, key, error, data) {
        if (this.controller.signal.aborted && error instanceof AbortedDeferredError)
          return this.unlistenAbortSignal(), Object.defineProperty(promise, "_error", {
            get: () => error
          }), Promise.reject(error);
        if (this.pendingKeysSet.delete(key), this.done && this.unlistenAbortSignal(), error === void 0 && data === void 0) {
          let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
          return Object.defineProperty(promise, "_error", {
            get: () => undefinedError
          }), this.emit(!1, key), Promise.reject(undefinedError);
        }
        return data === void 0 ? (Object.defineProperty(promise, "_error", {
          get: () => error
        }), this.emit(!1, key), Promise.reject(error)) : (Object.defineProperty(promise, "_data", {
          get: () => data
        }), this.emit(!1, key), data);
      }
      emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber) => subscriber(aborted, settledKey));
      }
      subscribe(fn) {
        return this.subscribers.add(fn), () => this.subscribers.delete(fn);
      }
      cancel() {
        this.controller.abort(), this.pendingKeysSet.forEach((v2, k) => this.pendingKeysSet.delete(k)), this.emit(!0);
      }
      async resolveData(signal) {
        let aborted = !1;
        if (!this.done) {
          let onAbort = () => this.cancel();
          signal.addEventListener("abort", onAbort), aborted = await new Promise((resolve) => {
            this.subscribe((aborted2) => {
              signal.removeEventListener("abort", onAbort), (aborted2 || this.done) && resolve(aborted2);
            });
          });
        }
        return aborted;
      }
      get done() {
        return this.pendingKeysSet.size === 0;
      }
      get unwrappedData() {
        return invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((acc, _ref2) => {
          let [key, value] = _ref2;
          return Object.assign(acc, {
            [key]: unwrapTrackedPromise(value)
          });
        }, {});
      }
      get pendingKeys() {
        return Array.from(this.pendingKeysSet);
      }
    };
    defer = function(data, init) {
      init === void 0 && (init = {});
      let responseInit = typeof init == "number" ? {
        status: init
      } : init;
      return new DeferredData(data, responseInit);
    }, redirect = function(url, init) {
      init === void 0 && (init = 302);
      let responseInit = init;
      typeof responseInit == "number" ? responseInit = {
        status: responseInit
      } : typeof responseInit.status > "u" && (responseInit.status = 302);
      let headers4 = new Headers(responseInit.headers);
      return headers4.set("Location", url), new Response(null, _extends({}, responseInit, {
        headers: headers4
      }));
    }, ErrorResponse = class {
      constructor(status, statusText, data, internal) {
        internal === void 0 && (internal = !1), this.status = status, this.statusText = statusText || "", this.internal = internal, data instanceof Error ? (this.data = data.toString(), this.error = data) : this.data = data;
      }
    };
    validMutationMethodsArr = ["post", "put", "patch", "delete"], validMutationMethods = new Set(validMutationMethodsArr), validRequestMethodsArr = ["get", ...validMutationMethodsArr], validRequestMethods = new Set(validRequestMethodsArr), redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]), IDLE_NAVIGATION = {
      state: "idle",
      location: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    }, IDLE_FETCHER = {
      state: "idle",
      data: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    }, IDLE_BLOCKER = {
      state: "unblocked",
      proceed: void 0,
      reset: void 0,
      location: void 0
    }, ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, defaultMapRouteProperties = (route) => ({
      hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
    UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
  }
});

// node_modules/react-router/dist/index.js
var dist_exports = {};
__export(dist_exports, {
  AbortedDeferredError: () => AbortedDeferredError,
  Await: () => Await,
  MemoryRouter: () => MemoryRouter,
  Navigate: () => Navigate,
  NavigationType: () => Action,
  Outlet: () => Outlet,
  Route: () => Route,
  Router: () => Router,
  RouterProvider: () => RouterProvider,
  Routes: () => Routes,
  UNSAFE_DataRouterContext: () => DataRouterContext,
  UNSAFE_DataRouterStateContext: () => DataRouterStateContext,
  UNSAFE_LocationContext: () => LocationContext,
  UNSAFE_NavigationContext: () => NavigationContext,
  UNSAFE_RouteContext: () => RouteContext,
  UNSAFE_mapRouteProperties: () => mapRouteProperties,
  UNSAFE_useRouteId: () => useRouteId,
  UNSAFE_useRoutesImpl: () => useRoutesImpl,
  createMemoryRouter: () => createMemoryRouter,
  createPath: () => createPath,
  createRoutesFromChildren: () => createRoutesFromChildren,
  createRoutesFromElements: () => createRoutesFromChildren,
  defer: () => defer,
  generatePath: () => generatePath,
  isRouteErrorResponse: () => isRouteErrorResponse,
  json: () => json,
  matchPath: () => matchPath,
  matchRoutes: () => matchRoutes,
  parsePath: () => parsePath,
  redirect: () => redirect,
  renderMatches: () => renderMatches,
  resolvePath: () => resolvePath,
  unstable_useBlocker: () => useBlocker,
  useActionData: () => useActionData,
  useAsyncError: () => useAsyncError,
  useAsyncValue: () => useAsyncValue,
  useHref: () => useHref,
  useInRouterContext: () => useInRouterContext,
  useLoaderData: () => useLoaderData,
  useLocation: () => useLocation,
  useMatch: () => useMatch,
  useMatches: () => useMatches,
  useNavigate: () => useNavigate,
  useNavigation: () => useNavigation,
  useNavigationType: () => useNavigationType,
  useOutlet: () => useOutlet,
  useOutletContext: () => useOutletContext,
  useParams: () => useParams,
  useResolvedPath: () => useResolvedPath,
  useRevalidator: () => useRevalidator,
  useRouteError: () => useRouteError,
  useRouteLoaderData: () => useRouteLoaderData,
  useRoutes: () => useRoutes
});
function _extends2() {
  return _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends2.apply(this, arguments);
}
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  useInRouterContext() || invariant(!1);
  let {
    basename,
    navigator: navigator2
  } = React.useContext(NavigationContext), {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  }), joinedPathname = pathname;
  return basename !== "/" && (joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname])), navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return React.useContext(LocationContext) != null;
}
function useLocation() {
  return useInRouterContext() || invariant(!1), React.useContext(LocationContext).location;
}
function useNavigationType() {
  return React.useContext(LocationContext).navigationType;
}
function useMatch(pattern) {
  useInRouterContext() || invariant(!1);
  let {
    pathname
  } = useLocation();
  return React.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
function useIsomorphicLayoutEffect(cb) {
  React.useContext(NavigationContext).static || React.useLayoutEffect(cb);
}
function useNavigate() {
  let {
    isDataRoute
  } = React.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  useInRouterContext() || invariant(!1);
  let dataRouterContext = React.useContext(DataRouterContext), {
    basename,
    navigator: navigator2
  } = React.useContext(NavigationContext), {
    matches
  } = React.useContext(RouteContext), {
    pathname: locationPathname
  } = useLocation(), routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase)), activeRef = React.useRef(!1);
  return useIsomorphicLayoutEffect(() => {
    activeRef.current = !0;
  }), React.useCallback(function(to, options) {
    if (options === void 0 && (options = {}), !activeRef.current)
      return;
    if (typeof to == "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    dataRouterContext == null && basename !== "/" && (path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname])), (options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
}
function useOutletContext() {
  return React.useContext(OutletContext);
}
function useOutlet(context) {
  let outlet = React.useContext(RouteContext).outlet;
  return outlet && /* @__PURE__ */ React.createElement(OutletContext.Provider, {
    value: context
  }, outlet);
}
function useParams() {
  let {
    matches
  } = React.useContext(RouteContext), routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2, {
    matches
  } = React.useContext(RouteContext), {
    pathname: locationPathname
  } = useLocation(), routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return React.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes2, locationArg) {
  return useRoutesImpl(routes2, locationArg);
}
function useRoutesImpl(routes2, locationArg, dataRouterState) {
  useInRouterContext() || invariant(!1);
  let {
    navigator: navigator2
  } = React.useContext(NavigationContext), {
    matches: parentMatches
  } = React.useContext(RouteContext), routeMatch = parentMatches[parentMatches.length - 1], parentParams = routeMatch ? routeMatch.params : {}, parentPathname = routeMatch ? routeMatch.pathname : "/", parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/", parentRoute = routeMatch && routeMatch.route, locationFromContext = useLocation(), location2;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg == "string" ? parsePath(locationArg) : locationArg;
    parentPathnameBase === "/" || (_parsedLocationArg$pa = parsedLocationArg.pathname) != null && _parsedLocationArg$pa.startsWith(parentPathnameBase) || invariant(!1), location2 = parsedLocationArg;
  } else
    location2 = locationFromContext;
  let pathname = location2.pathname || "/", remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/", matches = matchRoutes(routes2, {
    pathname: remainingPathname
  }), renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState);
  return locationArg && renderedMatches ? /* @__PURE__ */ React.createElement(LocationContext.Provider, {
    value: {
      location: _extends2({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, location2),
      navigationType: Action.Pop
    }
  }, renderedMatches) : renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError(), message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error), stack = error instanceof Error ? error.stack : null, lightgrey = "rgba(200,200,200, 0.5)", preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  }, codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ React.createElement("pre", {
    style: preStyles
  }, stack) : null, null);
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref, dataRouterContext = React.useContext(DataRouterContext);
  return dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary) && (dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id), /* @__PURE__ */ React.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;
  if (parentMatches === void 0 && (parentMatches = []), dataRouterState === void 0 && (dataRouterState = null), matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors)
      matches = dataRouterState.matches;
    else
      return null;
  }
  let renderedMatches = matches, errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    errorIndex >= 0 || invariant(!1), renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null, errorElement = null;
    dataRouterState && (errorElement = match.route.errorElement || defaultErrorElement);
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1)), getChildren = () => {
      let children;
      return error ? children = errorElement : match.route.Component ? children = /* @__PURE__ */ React.createElement(match.route.Component, null) : match.route.element ? children = match.route.element : children = outlet, /* @__PURE__ */ React.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index2 === 0) ? /* @__PURE__ */ React.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: !0
      }
    }) : getChildren();
  }, null);
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(DataRouterContext);
  return ctx || invariant(!1), ctx;
}
function useDataRouterState(hookName) {
  let state = React.useContext(DataRouterStateContext);
  return state || invariant(!1), state;
}
function useRouteContext(hookName) {
  let route = React.useContext(RouteContext);
  return route || invariant(!1), route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName), thisRoute = route.matches[route.matches.length - 1];
  return thisRoute.route.id || invariant(!1), thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
function useNavigation() {
  return useDataRouterState(DataRouterStateHook.UseNavigation).navigation;
}
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator), state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return React.useMemo(() => matches.map((match) => {
    let {
      pathname,
      params
    } = match;
    return {
      id: match.route.id,
      pathname,
      params,
      data: loaderData[match.route.id],
      handle: match.route.handle
    };
  }), [matches, loaderData]);
}
function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData), routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return;
  }
  return state.loaderData[routeId];
}
function useRouteLoaderData(routeId) {
  return useDataRouterState(DataRouterStateHook.UseRouteLoaderData).loaderData[routeId];
}
function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  return React.useContext(RouteContext) || invariant(!1), Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
function useRouteError() {
  var _state$errors;
  let error = React.useContext(RouteErrorContext), state = useDataRouterState(DataRouterStateHook.UseRouteError), routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
  return error || ((_state$errors = state.errors) == null ? void 0 : _state$errors[routeId]);
}
function useAsyncValue() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
function useAsyncError() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
function useBlocker(shouldBlock) {
  let {
    router,
    basename
  } = useDataRouterContext(DataRouterHook.UseBlocker), state = useDataRouterState(DataRouterStateHook.UseBlocker), [blockerKey, setBlockerKey] = React.useState(""), blockerFunction = React.useCallback((arg) => {
    if (typeof shouldBlock != "function")
      return !!shouldBlock;
    if (basename === "/")
      return shouldBlock(arg);
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = arg;
    return shouldBlock({
      currentLocation: _extends2({}, currentLocation, {
        pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
      }),
      nextLocation: _extends2({}, nextLocation, {
        pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
      }),
      historyAction
    });
  }, [basename, shouldBlock]);
  return React.useEffect(() => {
    let key = String(++blockerId);
    return setBlockerKey(key), () => router.deleteBlocker(key);
  }, [router]), React.useEffect(() => {
    blockerKey !== "" && router.getBlocker(blockerKey, blockerFunction);
  }, [router, blockerKey, blockerFunction]), blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable), id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable), activeRef = React.useRef(!1);
  return useIsomorphicLayoutEffect(() => {
    activeRef.current = !0;
  }), React.useCallback(function(to, options) {
    options === void 0 && (options = {}), activeRef.current && (typeof to == "number" ? router.navigate(to) : router.navigate(to, _extends2({
      fromRouteId: id
    }, options)));
  }, [router, id]);
}
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future: future2
  } = _ref, [state, setStateImpl] = React.useState(router.state), {
    v7_startTransition
  } = future2 || {}, setState = React.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  React.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  let navigator2 = React.useMemo(() => ({
    createHref: router.createHref,
    encodeLocation: router.encodeLocation,
    go: (n2) => router.navigate(n2),
    push: (to, state2, opts) => router.navigate(to, {
      state: state2,
      preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
    }),
    replace: (to, state2, opts) => router.navigate(to, {
      replace: !0,
      state: state2,
      preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
    })
  }), [router]), basename = router.basename || "/", dataRouterContext = React.useMemo(() => ({
    router,
    navigator: navigator2,
    static: !1,
    basename
  }), [router, navigator2, basename]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /* @__PURE__ */ React.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /* @__PURE__ */ React.createElement(Router, {
    basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator2
  }, state.initialized ? /* @__PURE__ */ React.createElement(DataRoutes, {
    routes: router.routes,
    state
  }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
  let {
    routes: routes2,
    state
  } = _ref2;
  return useRoutesImpl(routes2, void 0, state);
}
function MemoryRouter(_ref3) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex,
    future: future2
  } = _ref3, historyRef = React.useRef();
  historyRef.current == null && (historyRef.current = createMemoryHistory({
    initialEntries,
    initialIndex,
    v5Compat: !0
  }));
  let history = historyRef.current, [state, setStateImpl] = React.useState({
    action: history.action,
    location: history.location
  }), {
    v7_startTransition
  } = future2 || {}, setState = React.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  return React.useLayoutEffect(() => history.listen(setState), [history, setState]), /* @__PURE__ */ React.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  useInRouterContext() || invariant(!1);
  let {
    matches
  } = React.useContext(RouteContext), {
    pathname: locationPathname
  } = useLocation(), navigate = useNavigate(), path = resolveTo(to, getPathContributingMatches(matches).map((match) => match.pathnameBase), locationPathname, relative === "path"), jsonPath = JSON.stringify(path);
  return React.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]), null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(!1);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = !1
  } = _ref5;
  useInRouterContext() && invariant(!1);
  let basename = basenameProp.replace(/^\/*/, "/"), navigationContext = React.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  typeof locationProp == "string" && (locationProp = parsePath(locationProp));
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp, locationContext = React.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    return trailingPathname == null ? null : {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  return locationContext == null ? null : /* @__PURE__ */ React.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ React.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location: location2
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location2);
}
function Await(_ref7) {
  let {
    children,
    errorElement,
    resolve
  } = _ref7;
  return /* @__PURE__ */ React.createElement(AwaitErrorBoundary, {
    resolve,
    errorElement
  }, /* @__PURE__ */ React.createElement(ResolveAwait, null, children));
}
function ResolveAwait(_ref8) {
  let {
    children
  } = _ref8, data = useAsyncValue(), toRender = typeof children == "function" ? children(data) : children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, toRender);
}
function createRoutesFromChildren(children, parentPath) {
  parentPath === void 0 && (parentPath = []);
  let routes2 = [];
  return React.Children.forEach(children, (element, index2) => {
    if (!/* @__PURE__ */ React.isValidElement(element))
      return;
    let treePath = [...parentPath, index2];
    if (element.type === React.Fragment) {
      routes2.push.apply(routes2, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    element.type !== Route && invariant(!1), !element.props.index || !element.props.children || invariant(!1);
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    element.props.children && (route.children = createRoutesFromChildren(element.props.children, treePath)), routes2.push(route);
  }), routes2;
}
function renderMatches(matches) {
  return _renderMatches(matches);
}
function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };
  return route.Component && Object.assign(updates, {
    element: /* @__PURE__ */ React.createElement(route.Component),
    Component: void 0
  }), route.ErrorBoundary && Object.assign(updates, {
    errorElement: /* @__PURE__ */ React.createElement(route.ErrorBoundary),
    ErrorBoundary: void 0
  }), updates;
}
function createMemoryRouter(routes2, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends2({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: !0
    }),
    history: createMemoryHistory({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes: routes2,
    mapRouteProperties
  }).initialize();
}
var React, DataRouterContext, DataRouterStateContext, AwaitContext, NavigationContext, LocationContext, RouteContext, RouteErrorContext, OutletContext, defaultErrorElement, RenderErrorBoundary, DataRouterHook, DataRouterStateHook, blockerId, START_TRANSITION, startTransitionImpl, AwaitRenderStatus, neverSettledPromise, AwaitErrorBoundary, init_dist = __esm({
  "node_modules/react-router/dist/index.js"() {
    React = __toESM(require_react());
    init_router();
    init_router();
    DataRouterContext = /* @__PURE__ */ React.createContext(null), DataRouterStateContext = /* @__PURE__ */ React.createContext(null), AwaitContext = /* @__PURE__ */ React.createContext(null), NavigationContext = /* @__PURE__ */ React.createContext(null), LocationContext = /* @__PURE__ */ React.createContext(null), RouteContext = /* @__PURE__ */ React.createContext({
      outlet: null,
      matches: [],
      isDataRoute: !1
    }), RouteErrorContext = /* @__PURE__ */ React.createContext(null);
    OutletContext = /* @__PURE__ */ React.createContext(null);
    defaultErrorElement = /* @__PURE__ */ React.createElement(DefaultErrorComponent, null), RenderErrorBoundary = class extends React.Component {
      constructor(props) {
        super(props), this.state = {
          location: props.location,
          revalidation: props.revalidation,
          error: props.error
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        return state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle" ? {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        } : {
          error: props.error || state.error,
          location: state.location,
          revalidation: props.revalidation || state.revalidation
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
      }
      render() {
        return this.state.error ? /* @__PURE__ */ React.createElement(RouteContext.Provider, {
          value: this.props.routeContext
        }, /* @__PURE__ */ React.createElement(RouteErrorContext.Provider, {
          value: this.state.error,
          children: this.props.component
        })) : this.props.children;
      }
    };
    (function(DataRouterHook3) {
      DataRouterHook3.UseBlocker = "useBlocker", DataRouterHook3.UseRevalidator = "useRevalidator", DataRouterHook3.UseNavigateStable = "useNavigate";
    })(DataRouterHook || (DataRouterHook = {}));
    (function(DataRouterStateHook3) {
      DataRouterStateHook3.UseBlocker = "useBlocker", DataRouterStateHook3.UseLoaderData = "useLoaderData", DataRouterStateHook3.UseActionData = "useActionData", DataRouterStateHook3.UseRouteError = "useRouteError", DataRouterStateHook3.UseNavigation = "useNavigation", DataRouterStateHook3.UseRouteLoaderData = "useRouteLoaderData", DataRouterStateHook3.UseMatches = "useMatches", DataRouterStateHook3.UseRevalidator = "useRevalidator", DataRouterStateHook3.UseNavigateStable = "useNavigate", DataRouterStateHook3.UseRouteId = "useRouteId";
    })(DataRouterStateHook || (DataRouterStateHook = {}));
    blockerId = 0;
    START_TRANSITION = "startTransition", startTransitionImpl = React[START_TRANSITION];
    (function(AwaitRenderStatus2) {
      AwaitRenderStatus2[AwaitRenderStatus2.pending = 0] = "pending", AwaitRenderStatus2[AwaitRenderStatus2.success = 1] = "success", AwaitRenderStatus2[AwaitRenderStatus2.error = 2] = "error";
    })(AwaitRenderStatus || (AwaitRenderStatus = {}));
    neverSettledPromise = new Promise(() => {
    }), AwaitErrorBoundary = class extends React.Component {
      constructor(props) {
        super(props), this.state = {
          error: null
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error("<Await> caught the following error during render", error, errorInfo);
      }
      render() {
        let {
          children,
          errorElement,
          resolve
        } = this.props, promise = null, status = AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise))
          status = AwaitRenderStatus.success, promise = Promise.resolve(), Object.defineProperty(promise, "_tracked", {
            get: () => !0
          }), Object.defineProperty(promise, "_data", {
            get: () => resolve
          });
        else if (this.state.error) {
          status = AwaitRenderStatus.error;
          let renderError = this.state.error;
          promise = Promise.reject().catch(() => {
          }), Object.defineProperty(promise, "_tracked", {
            get: () => !0
          }), Object.defineProperty(promise, "_error", {
            get: () => renderError
          });
        } else
          resolve._tracked ? (promise = resolve, status = promise._error !== void 0 ? AwaitRenderStatus.error : promise._data !== void 0 ? AwaitRenderStatus.success : AwaitRenderStatus.pending) : (status = AwaitRenderStatus.pending, Object.defineProperty(resolve, "_tracked", {
            get: () => !0
          }), promise = resolve.then((data) => Object.defineProperty(resolve, "_data", {
            get: () => data
          }), (error) => Object.defineProperty(resolve, "_error", {
            get: () => error
          })));
        if (status === AwaitRenderStatus.error && promise._error instanceof AbortedDeferredError)
          throw neverSettledPromise;
        if (status === AwaitRenderStatus.error && !errorElement)
          throw promise._error;
        if (status === AwaitRenderStatus.error)
          return /* @__PURE__ */ React.createElement(AwaitContext.Provider, {
            value: promise,
            children: errorElement
          });
        if (status === AwaitRenderStatus.success)
          return /* @__PURE__ */ React.createElement(AwaitContext.Provider, {
            value: promise,
            children
          });
        throw promise;
      }
    };
  }
});

// node_modules/react-router-dom/dist/index.js
var dist_exports2 = {};
__export(dist_exports2, {
  AbortedDeferredError: () => AbortedDeferredError,
  Await: () => Await,
  BrowserRouter: () => BrowserRouter,
  Form: () => Form,
  HashRouter: () => HashRouter,
  Link: () => Link,
  MemoryRouter: () => MemoryRouter,
  NavLink: () => NavLink,
  Navigate: () => Navigate,
  NavigationType: () => Action,
  Outlet: () => Outlet,
  Route: () => Route,
  Router: () => Router,
  RouterProvider: () => RouterProvider,
  Routes: () => Routes,
  ScrollRestoration: () => ScrollRestoration,
  UNSAFE_DataRouterContext: () => DataRouterContext,
  UNSAFE_DataRouterStateContext: () => DataRouterStateContext,
  UNSAFE_LocationContext: () => LocationContext,
  UNSAFE_NavigationContext: () => NavigationContext,
  UNSAFE_RouteContext: () => RouteContext,
  UNSAFE_useRouteId: () => useRouteId,
  UNSAFE_useScrollRestoration: () => useScrollRestoration,
  createBrowserRouter: () => createBrowserRouter,
  createHashRouter: () => createHashRouter,
  createMemoryRouter: () => createMemoryRouter,
  createPath: () => createPath,
  createRoutesFromChildren: () => createRoutesFromChildren,
  createRoutesFromElements: () => createRoutesFromChildren,
  createSearchParams: () => createSearchParams,
  defer: () => defer,
  generatePath: () => generatePath,
  isRouteErrorResponse: () => isRouteErrorResponse,
  json: () => json,
  matchPath: () => matchPath,
  matchRoutes: () => matchRoutes,
  parsePath: () => parsePath,
  redirect: () => redirect,
  renderMatches: () => renderMatches,
  resolvePath: () => resolvePath,
  unstable_HistoryRouter: () => HistoryRouter,
  unstable_useBlocker: () => useBlocker,
  unstable_usePrompt: () => usePrompt,
  useActionData: () => useActionData,
  useAsyncError: () => useAsyncError,
  useAsyncValue: () => useAsyncValue,
  useBeforeUnload: () => useBeforeUnload,
  useFetcher: () => useFetcher,
  useFetchers: () => useFetchers,
  useFormAction: () => useFormAction,
  useHref: () => useHref,
  useInRouterContext: () => useInRouterContext,
  useLinkClickHandler: () => useLinkClickHandler,
  useLoaderData: () => useLoaderData,
  useLocation: () => useLocation,
  useMatch: () => useMatch,
  useMatches: () => useMatches,
  useNavigate: () => useNavigate,
  useNavigation: () => useNavigation,
  useNavigationType: () => useNavigationType,
  useOutlet: () => useOutlet,
  useOutletContext: () => useOutletContext,
  useParams: () => useParams,
  useResolvedPath: () => useResolvedPath,
  useRevalidator: () => useRevalidator,
  useRouteError: () => useRouteError,
  useRouteLoaderData: () => useRouteLoaderData,
  useRoutes: () => useRoutes,
  useSearchParams: () => useSearchParams,
  useSubmit: () => useSubmit
});
function _extends3() {
  return _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {}, sourceKeys = Object.keys(source), key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++)
    key = sourceKeys[i2], !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName == "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
function createSearchParams(init) {
  return init === void 0 && (init = ""), new URLSearchParams(typeof init == "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map((v2) => [key, v2]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams)
    for (let key of defaultSearchParams.keys())
      searchParams.has(key) || defaultSearchParams.getAll(key).forEach((value) => {
        searchParams.append(key, value);
      });
  return searchParams;
}
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), _formDataSupportsSubmitter = !1;
    } catch {
      _formDataSupportsSubmitter = !0;
    }
  return _formDataSupportsSubmitter;
}
function getFormEncType(encType) {
  return encType != null && !supportedFormEncTypes.has(encType) ? null : encType;
}
function getFormSubmissionInfo(target, basename) {
  let method, action4, encType, formData, body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action4 = attr ? stripBasename(attr, basename) : null, method = target.getAttribute("method") || defaultMethod, encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType, formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    if (action4 = attr ? stripBasename(attr, basename) : null, method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod, encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType, formData = new FormData(form, target), !isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0"), formData.append(prefix + "y", "0");
      } else
        name && formData.append(name, value);
    }
  } else {
    if (isHtmlElement(target))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    method = defaultMethod, action4 = null, encType = defaultEncType, body = target;
  }
  return formData && encType === "text/plain" && (body = formData, formData = void 0), {
    action: action4,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}
function createBrowserRouter(routes2, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends3({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: !0
    }),
    history: createBrowserHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: routes2,
    mapRouteProperties
  }).initialize();
}
function createHashRouter(routes2, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends3({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: !0
    }),
    history: createHashHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: routes2,
    mapRouteProperties
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  return state && state.errors && (state = _extends3({}, state, {
    errors: deserializeErrors(state.errors)
  })), state;
}
function deserializeErrors(errors) {
  if (!errors)
    return null;
  let entries = Object.entries(errors), serialized = {};
  for (let [key, val] of entries)
    if (val && val.__type === "RouteErrorResponse")
      serialized[key] = new ErrorResponse(val.status, val.statusText, val.data, val.internal === !0);
    else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor == "function")
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = "", serialized[key] = error;
          } catch {
          }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = "", serialized[key] = error;
      }
    } else
      serialized[key] = val;
  return serialized;
}
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    future: future2,
    window: window2
  } = _ref, historyRef = React2.useRef();
  historyRef.current == null && (historyRef.current = createBrowserHistory({
    window: window2,
    v5Compat: !0
  }));
  let history = historyRef.current, [state, setStateImpl] = React2.useState({
    action: history.action,
    location: history.location
  }), {
    v7_startTransition
  } = future2 || {}, setState = React2.useCallback((newState) => {
    v7_startTransition && startTransitionImpl2 ? startTransitionImpl2(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  return React2.useLayoutEffect(() => history.listen(setState), [history, setState]), /* @__PURE__ */ React2.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function HashRouter(_ref2) {
  let {
    basename,
    children,
    future: future2,
    window: window2
  } = _ref2, historyRef = React2.useRef();
  historyRef.current == null && (historyRef.current = createHashHistory({
    window: window2,
    v5Compat: !0
  }));
  let history = historyRef.current, [state, setStateImpl] = React2.useState({
    action: history.action,
    location: history.location
  }), {
    v7_startTransition
  } = future2 || {}, setState = React2.useCallback((newState) => {
    v7_startTransition && startTransitionImpl2 ? startTransitionImpl2(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  return React2.useLayoutEffect(() => history.listen(setState), [history, setState]), /* @__PURE__ */ React2.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    future: future2,
    history
  } = _ref3, [state, setStateImpl] = React2.useState({
    action: history.action,
    location: history.location
  }), {
    v7_startTransition
  } = future2 || {}, setState = React2.useCallback((newState) => {
    v7_startTransition && startTransitionImpl2 ? startTransitionImpl2(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  return React2.useLayoutEffect(() => history.listen(setState), [history, setState]), /* @__PURE__ */ React2.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  return useScrollRestoration({
    getKey,
    storageKey
  }), null;
}
function useDataRouterContext2(hookName) {
  let ctx = React2.useContext(DataRouterContext);
  return ctx || invariant(!1), ctx;
}
function useDataRouterState2(hookName) {
  let state = React2.useContext(DataRouterStateContext);
  return state || invariant(!1), state;
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp, navigate = useNavigate(), location2 = useLocation(), path = useResolvedPath(to, {
    relative
  });
  return React2.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location2) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location2, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
function useSearchParams(defaultInit) {
  let defaultSearchParamsRef = React2.useRef(createSearchParams(defaultInit)), hasSetSearchParamsRef = React2.useRef(!1), location2 = useLocation(), searchParams = React2.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    getSearchParamsForLocation(location2.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current)
  ), [location2.search]), navigate = useNavigate(), setSearchParams = React2.useCallback((nextInit, navigateOptions) => {
    let newSearchParams = createSearchParams(typeof nextInit == "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = !0, navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
function validateClientSideSubmission() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
function useSubmit() {
  let {
    router
  } = useDataRouterContext2(DataRouterHook2.UseSubmit), {
    basename
  } = React2.useContext(NavigationContext), currentRouteId = useRouteId();
  return React2.useCallback(function(target, options) {
    options === void 0 && (options = {}), validateClientSideSubmission();
    let {
      action: action4,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    router.navigate(options.action || action4, {
      preventScrollReset: options.preventScrollReset,
      formData,
      body,
      formMethod: options.method || method,
      formEncType: options.encType || encType,
      replace: options.replace,
      state: options.state,
      fromRouteId: currentRouteId
    });
  }, [router, basename, currentRouteId]);
}
function useSubmitFetcher(fetcherKey, fetcherRouteId) {
  let {
    router
  } = useDataRouterContext2(DataRouterHook2.UseSubmitFetcher), {
    basename
  } = React2.useContext(NavigationContext);
  return React2.useCallback(function(target, options) {
    options === void 0 && (options = {}), validateClientSideSubmission();
    let {
      action: action4,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    fetcherRouteId == null && invariant(!1), router.fetch(fetcherKey, fetcherRouteId, options.action || action4, {
      preventScrollReset: options.preventScrollReset,
      formData,
      body,
      formMethod: options.method || method,
      formEncType: options.encType || encType
    });
  }, [router, basename, fetcherKey, fetcherRouteId]);
}
function useFormAction(action4, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2, {
    basename
  } = React2.useContext(NavigationContext), routeContext = React2.useContext(RouteContext);
  routeContext || invariant(!1);
  let [match] = routeContext.matches.slice(-1), path = _extends3({}, useResolvedPath(action4 || ".", {
    relative
  })), location2 = useLocation();
  if (action4 == null && (path.search = location2.search, path.hash = location2.hash, match.route.index)) {
    let params = new URLSearchParams(path.search);
    params.delete("index"), path.search = params.toString() ? "?" + params.toString() : "";
  }
  return (!action4 || action4 === ".") && match.route.index && (path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index"), basename !== "/" && (path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname])), createPath(path);
}
function createFetcherForm(fetcherKey, routeId) {
  return /* @__PURE__ */ React2.forwardRef((props, ref) => {
    let submit = useSubmitFetcher(fetcherKey, routeId);
    return /* @__PURE__ */ React2.createElement(FormImpl, _extends3({}, props, {
      ref,
      submit
    }));
  });
}
function useFetcher() {
  var _route$matches;
  let {
    router
  } = useDataRouterContext2(DataRouterHook2.UseFetcher), route = React2.useContext(RouteContext);
  route || invariant(!1);
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  routeId == null && invariant(!1);
  let [fetcherKey] = React2.useState(() => String(++fetcherId)), [Form4] = React2.useState(() => (routeId || invariant(!1), createFetcherForm(fetcherKey, routeId))), [load] = React2.useState(() => (href) => {
    router || invariant(!1), routeId || invariant(!1), router.fetch(fetcherKey, routeId, href);
  }), submit = useSubmitFetcher(fetcherKey, routeId), fetcher = router.getFetcher(fetcherKey), fetcherWithComponents = React2.useMemo(() => _extends3({
    Form: Form4,
    submit,
    load
  }, fetcher), [fetcher, Form4, submit, load]);
  return React2.useEffect(() => () => {
    if (!router) {
      console.warn("No router available to clean up from useFetcher()");
      return;
    }
    router.deleteFetcher(fetcherKey);
  }, [router, fetcherKey]), fetcherWithComponents;
}
function useFetchers() {
  return [...useDataRouterState2(DataRouterStateHook2.UseFetchers).fetchers.values()];
}
function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3, {
    router
  } = useDataRouterContext2(DataRouterHook2.UseScrollRestoration), {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState2(DataRouterStateHook2.UseScrollRestoration), {
    basename
  } = React2.useContext(NavigationContext), location2 = useLocation(), matches = useMatches(), navigation = useNavigation();
  React2.useEffect(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), usePageHide(React2.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location2, matches) : null) || location2.key;
      savedScrollPositions[key] = window.scrollY;
    }
    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions)), window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location2, matches])), typeof document < "u" && (React2.useLayoutEffect(() => {
    try {
      let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
      sessionPositions && (savedScrollPositions = JSON.parse(sessionPositions));
    } catch {
    }
  }, [storageKey]), React2.useLayoutEffect(() => {
    let getKeyWithoutBasename = getKey && basename !== "/" ? (location3, matches2) => getKey(
      // Strip the basename to match useLocation()
      _extends3({}, location3, {
        pathname: stripBasename(location3.pathname, basename) || location3.pathname
      }),
      matches2
    ) : getKey, disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKeyWithoutBasename);
    return () => disableScrollRestoration && disableScrollRestoration();
  }, [router, basename, getKey]), React2.useLayoutEffect(() => {
    if (restoreScrollPosition !== !1) {
      if (typeof restoreScrollPosition == "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      if (location2.hash) {
        let el = document.getElementById(decodeURIComponent(location2.hash.slice(1)));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      preventScrollReset !== !0 && window.scrollTo(0, 0);
    }
  }, [location2, restoreScrollPosition, preventScrollReset]));
}
function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  React2.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : void 0;
    return window.addEventListener("beforeunload", callback, opts), () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  React2.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : void 0;
    return window.addEventListener("pagehide", callback, opts), () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
function usePrompt(_ref8) {
  let {
    when,
    message
  } = _ref8, blocker = useBlocker(when);
  React2.useEffect(() => {
    blocker.state === "blocked" && !when && blocker.reset();
  }, [blocker, when]), React2.useEffect(() => {
    blocker.state === "blocked" && (window.confirm(message) ? setTimeout(blocker.proceed, 0) : blocker.reset());
  }, [blocker, message]);
}
var React2, defaultMethod, defaultEncType, _formDataSupportsSubmitter, supportedFormEncTypes, _excluded, _excluded2, _excluded3, START_TRANSITION2, startTransitionImpl2, isBrowser, ABSOLUTE_URL_REGEX2, Link, NavLink, Form, FormImpl, DataRouterHook2, DataRouterStateHook2, fetcherId, SCROLL_RESTORATION_STORAGE_KEY, savedScrollPositions, init_dist2 = __esm({
  "node_modules/react-router-dom/dist/index.js"() {
    React2 = __toESM(require_react());
    init_dist();
    init_dist();
    init_router();
    defaultMethod = "get", defaultEncType = "application/x-www-form-urlencoded";
    _formDataSupportsSubmitter = null;
    supportedFormEncTypes = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
    _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], _excluded3 = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"];
    START_TRANSITION2 = "startTransition", startTransitionImpl2 = React2[START_TRANSITION2];
    isBrowser = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Link = /* @__PURE__ */ React2.forwardRef(function(_ref4, ref) {
      let {
        onClick,
        relative,
        reloadDocument,
        replace,
        state,
        target,
        to,
        preventScrollReset
      } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded), {
        basename
      } = React2.useContext(NavigationContext), absoluteHref, isExternal = !1;
      if (typeof to == "string" && ABSOLUTE_URL_REGEX2.test(to) && (absoluteHref = to, isBrowser))
        try {
          let currentUrl = new URL(window.location.href), targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to), path = stripBasename(targetUrl.pathname, basename);
          targetUrl.origin === currentUrl.origin && path != null ? to = path + targetUrl.search + targetUrl.hash : isExternal = !0;
        } catch {
        }
      let href = useHref(to, {
        relative
      }), internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
        preventScrollReset,
        relative
      });
      function handleClick(event) {
        onClick && onClick(event), event.defaultPrevented || internalOnClick(event);
      }
      return (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ React2.createElement("a", _extends3({}, rest, {
          href: absoluteHref || href,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref,
          target
        }))
      );
    }), NavLink = /* @__PURE__ */ React2.forwardRef(function(_ref5, ref) {
      let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = !1,
        className: classNameProp = "",
        end = !1,
        style: styleProp,
        to,
        children
      } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2), path = useResolvedPath(to, {
        relative: rest.relative
      }), location2 = useLocation(), routerState = React2.useContext(DataRouterStateContext), {
        navigator: navigator2
      } = React2.useContext(NavigationContext), toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname, locationPathname = location2.pathname, nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      caseSensitive || (locationPathname = locationPathname.toLowerCase(), nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null, toPathname = toPathname.toLowerCase());
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/", isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/"), ariaCurrent = isActive ? ariaCurrentProp : void 0, className;
      typeof classNameProp == "function" ? className = classNameProp({
        isActive,
        isPending
      }) : className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
      let style = typeof styleProp == "function" ? styleProp({
        isActive,
        isPending
      }) : styleProp;
      return /* @__PURE__ */ React2.createElement(Link, _extends3({}, rest, {
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to
      }), typeof children == "function" ? children({
        isActive,
        isPending
      }) : children);
    }), Form = /* @__PURE__ */ React2.forwardRef((props, ref) => {
      let submit = useSubmit();
      return /* @__PURE__ */ React2.createElement(FormImpl, _extends3({}, props, {
        submit,
        ref
      }));
    }), FormImpl = /* @__PURE__ */ React2.forwardRef((_ref6, forwardedRef) => {
      let {
        reloadDocument,
        replace,
        state,
        method = defaultMethod,
        action: action4,
        onSubmit,
        submit,
        relative,
        preventScrollReset
      } = _ref6, props = _objectWithoutPropertiesLoose(_ref6, _excluded3), formMethod = method.toLowerCase() === "get" ? "get" : "post", formAction = useFormAction(action4, {
        relative
      });
      return /* @__PURE__ */ React2.createElement("form", _extends3({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : (event) => {
          if (onSubmit && onSubmit(event), event.defaultPrevented)
            return;
          event.preventDefault();
          let submitter = event.nativeEvent.submitter, submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
          submit(submitter || event.currentTarget, {
            method: submitMethod,
            replace,
            state,
            relative,
            preventScrollReset
          });
        }
      }, props));
    });
    (function(DataRouterHook3) {
      DataRouterHook3.UseScrollRestoration = "useScrollRestoration", DataRouterHook3.UseSubmit = "useSubmit", DataRouterHook3.UseSubmitFetcher = "useSubmitFetcher", DataRouterHook3.UseFetcher = "useFetcher";
    })(DataRouterHook2 || (DataRouterHook2 = {}));
    (function(DataRouterStateHook3) {
      DataRouterStateHook3.UseFetchers = "useFetchers", DataRouterStateHook3.UseScrollRestoration = "useScrollRestoration";
    })(DataRouterStateHook2 || (DataRouterStateHook2 = {}));
    fetcherId = 0;
    SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions", savedScrollPositions = {};
  }
});

// node_modules/react-router-dom/server.js
var require_server = __commonJS({
  "node_modules/react-router-dom/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var React7 = require_react(), router = (init_router(), __toCommonJS(router_exports)), reactRouter = (init_dist(), __toCommonJS(dist_exports)), reactRouterDom = (init_dist2(), __toCommonJS(dist_exports2));
    function _interopNamespace(e2) {
      if (e2 && e2.__esModule)
        return e2;
      var n2 = /* @__PURE__ */ Object.create(null);
      return e2 && Object.keys(e2).forEach(function(k) {
        if (k !== "default") {
          var d2 = Object.getOwnPropertyDescriptor(e2, k);
          Object.defineProperty(n2, k, d2.get ? d2 : {
            enumerable: !0,
            get: function() {
              return e2[k];
            }
          });
        }
      }), n2.default = e2, Object.freeze(n2);
    }
    var React__namespace = /* @__PURE__ */ _interopNamespace(React7);
    function StaticRouter({
      basename,
      children,
      location: locationProp = "/"
    }) {
      typeof locationProp == "string" && (locationProp = reactRouterDom.parsePath(locationProp));
      let action4 = router.Action.Pop, location2 = {
        pathname: locationProp.pathname || "/",
        search: locationProp.search || "",
        hash: locationProp.hash || "",
        state: locationProp.state || null,
        key: locationProp.key || "default"
      }, staticNavigator = getStatelessNavigator();
      return /* @__PURE__ */ React__namespace.createElement(reactRouterDom.Router, {
        basename,
        children,
        location: location2,
        navigationType: action4,
        navigator: staticNavigator,
        static: !0
      });
    }
    function StaticRouterProvider2({
      context,
      router: router$1,
      hydrate = !0,
      nonce
    }) {
      router$1 && context || router.UNSAFE_invariant(!1);
      let dataRouterContext = {
        router: router$1,
        navigator: getStatelessNavigator(),
        static: !0,
        staticContext: context,
        basename: context.basename || "/"
      }, hydrateScript = "";
      if (hydrate !== !1) {
        let data = {
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: serializeErrors2(context.errors)
        };
        hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${htmlEscape(JSON.stringify(JSON.stringify(data)))});`;
      }
      let {
        state
      } = dataRouterContext.router;
      return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.UNSAFE_DataRouterContext.Provider, {
        value: dataRouterContext
      }, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.UNSAFE_DataRouterStateContext.Provider, {
        value: state
      }, /* @__PURE__ */ React__namespace.createElement(reactRouterDom.Router, {
        basename: dataRouterContext.basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: dataRouterContext.navigator,
        static: dataRouterContext.static
      }, /* @__PURE__ */ React__namespace.createElement(DataRoutes2, {
        routes: router$1.routes,
        state
      })))), hydrateScript ? /* @__PURE__ */ React__namespace.createElement("script", {
        suppressHydrationWarning: !0,
        nonce,
        dangerouslySetInnerHTML: {
          __html: hydrateScript
        }
      }) : null);
    }
    function DataRoutes2({
      routes: routes2,
      state
    }) {
      return reactRouter.UNSAFE_useRoutesImpl(routes2, void 0, state);
    }
    function serializeErrors2(errors) {
      if (!errors)
        return null;
      let entries = Object.entries(errors), serialized = {};
      for (let [key, val] of entries)
        router.isRouteErrorResponse(val) ? serialized[key] = {
          ...val,
          __type: "RouteErrorResponse"
        } : val instanceof Error ? serialized[key] = {
          message: val.message,
          __type: "Error",
          // If this is a subclass (i.e., ReferenceError), send up the type so we
          // can re-create the same type during hydration.
          ...val.name !== "Error" ? {
            __subType: val.name
          } : {}
        } : serialized[key] = val;
      return serialized;
    }
    function getStatelessNavigator() {
      return {
        createHref,
        encodeLocation,
        push(to) {
          throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
        },
        replace(to) {
          throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
        },
        go(delta) {
          throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
        },
        back() {
          throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
        },
        forward() {
          throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
        }
      };
    }
    function createStaticHandler2(routes2, opts) {
      return router.createStaticHandler(routes2, {
        ...opts,
        mapRouteProperties: reactRouter.UNSAFE_mapRouteProperties
      });
    }
    function createStaticRouter2(routes2, context) {
      let manifest = {}, dataRoutes = router.UNSAFE_convertRoutesToDataRoutes(routes2, reactRouter.UNSAFE_mapRouteProperties, void 0, manifest), matches = context.matches.map((match) => {
        let route = manifest[match.route.id] || match.route;
        return {
          ...match,
          route
        };
      }), msg = (method) => `You cannot use router.${method}() on the server because it is a stateless environment`;
      return {
        get basename() {
          return context.basename;
        },
        get state() {
          return {
            historyAction: router.Action.Pop,
            location: context.location,
            matches,
            loaderData: context.loaderData,
            actionData: context.actionData,
            errors: context.errors,
            initialized: !0,
            navigation: router.IDLE_NAVIGATION,
            restoreScrollPosition: null,
            preventScrollReset: !1,
            revalidation: "idle",
            fetchers: /* @__PURE__ */ new Map(),
            blockers: /* @__PURE__ */ new Map()
          };
        },
        get routes() {
          return dataRoutes;
        },
        initialize() {
          throw msg("initialize");
        },
        subscribe() {
          throw msg("subscribe");
        },
        enableScrollRestoration() {
          throw msg("enableScrollRestoration");
        },
        navigate() {
          throw msg("navigate");
        },
        fetch() {
          throw msg("fetch");
        },
        revalidate() {
          throw msg("revalidate");
        },
        createHref,
        encodeLocation,
        getFetcher() {
          return router.IDLE_FETCHER;
        },
        deleteFetcher() {
          throw msg("deleteFetcher");
        },
        dispose() {
          throw msg("dispose");
        },
        getBlocker() {
          return router.IDLE_BLOCKER;
        },
        deleteBlocker() {
          throw msg("deleteBlocker");
        },
        _internalFetchControllers: /* @__PURE__ */ new Map(),
        _internalActiveDeferreds: /* @__PURE__ */ new Map(),
        _internalSetRoutes() {
          throw msg("_internalSetRoutes");
        }
      };
    }
    function createHref(to) {
      return typeof to == "string" ? to : reactRouterDom.createPath(to);
    }
    function encodeLocation(to) {
      let path = typeof to == "string" ? reactRouterDom.parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    }
    var ESCAPE_LOOKUP3 = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    }, ESCAPE_REGEX3 = /[&><\u2028\u2029]/g;
    function htmlEscape(str) {
      return str.replace(ESCAPE_REGEX3, (match) => ESCAPE_LOOKUP3[match]);
    }
    exports.StaticRouter = StaticRouter;
    exports.StaticRouterProvider = StaticRouterProvider2;
    exports.createStaticHandler = createStaticHandler2;
    exports.createStaticRouter = createStaticRouter2;
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js
var require_react_dom_server_legacy_browser_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js"(exports) {
    "use strict";
    var aa = require_react();
    function l2(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var p2 = Object.prototype.hasOwnProperty, fa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ha = {}, ia = {};
    function ja(a2) {
      return p2.call(ia, a2) ? !0 : p2.call(ha, a2) ? !1 : fa.test(a2) ? ia[a2] = !0 : (ha[a2] = !0, !1);
    }
    function r2(a2, b2, c2, d2, f2, e2, g2) {
      this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4, this.attributeName = d2, this.attributeNamespace = f2, this.mustUseProperty = c2, this.propertyName = a2, this.type = b2, this.sanitizeURL = e2, this.removeEmptyString = g2;
    }
    var t2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
      t2[a2] = new r2(a2, 0, !1, a2, null, !1, !1);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
      var b2 = a2[0];
      t2[b2] = new r2(b2, 1, !1, a2[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
      t2[a2] = new r2(a2, 2, !1, a2.toLowerCase(), null, !1, !1);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
      t2[a2] = new r2(a2, 2, !1, a2, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
      t2[a2] = new r2(a2, 3, !1, a2.toLowerCase(), null, !1, !1);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
      t2[a2] = new r2(a2, 3, !0, a2, null, !1, !1);
    });
    ["capture", "download"].forEach(function(a2) {
      t2[a2] = new r2(a2, 4, !1, a2, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function(a2) {
      t2[a2] = new r2(a2, 6, !1, a2, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function(a2) {
      t2[a2] = new r2(a2, 5, !1, a2.toLowerCase(), null, !1, !1);
    });
    var ka = /[\-:]([a-z])/g;
    function la(a2) {
      return a2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
      var b2 = a2.replace(
        ka,
        la
      );
      t2[b2] = new r2(b2, 1, !1, a2, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
      var b2 = a2.replace(ka, la);
      t2[b2] = new r2(b2, 1, !1, a2, "http://www.w3.org/1999/xlink", !1, !1);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
      var b2 = a2.replace(ka, la);
      t2[b2] = new r2(b2, 1, !1, a2, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a2) {
      t2[a2] = new r2(a2, 1, !1, a2.toLowerCase(), null, !1, !1);
    });
    t2.xlinkHref = new r2("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function(a2) {
      t2[a2] = new r2(a2, 1, !1, a2.toLowerCase(), null, !0, !0);
    });
    var u2 = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    }, ma = ["Webkit", "ms", "Moz", "O"];
    Object.keys(u2).forEach(function(a2) {
      ma.forEach(function(b2) {
        b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1), u2[b2] = u2[a2];
      });
    });
    var na = /["'&<>]/;
    function v2(a2) {
      if (typeof a2 == "boolean" || typeof a2 == "number")
        return "" + a2;
      a2 = "" + a2;
      var b2 = na.exec(a2);
      if (b2) {
        var c2 = "", d2, f2 = 0;
        for (d2 = b2.index; d2 < a2.length; d2++) {
          switch (a2.charCodeAt(d2)) {
            case 34:
              b2 = "&quot;";
              break;
            case 38:
              b2 = "&amp;";
              break;
            case 39:
              b2 = "&#x27;";
              break;
            case 60:
              b2 = "&lt;";
              break;
            case 62:
              b2 = "&gt;";
              break;
            default:
              continue;
          }
          f2 !== d2 && (c2 += a2.substring(f2, d2)), f2 = d2 + 1, c2 += b2;
        }
        a2 = f2 !== d2 ? c2 + a2.substring(f2, d2) : c2;
      }
      return a2;
    }
    var oa = /([A-Z])/g, pa = /^ms-/, qa = Array.isArray;
    function w2(a2, b2) {
      return { insertionMode: a2, selectedValue: b2 };
    }
    function ra(a2, b2, c2) {
      switch (b2) {
        case "select":
          return w2(1, c2.value != null ? c2.value : c2.defaultValue);
        case "svg":
          return w2(2, null);
        case "math":
          return w2(3, null);
        case "foreignObject":
          return w2(1, null);
        case "table":
          return w2(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return w2(5, null);
        case "colgroup":
          return w2(7, null);
        case "tr":
          return w2(6, null);
      }
      return 4 <= a2.insertionMode || a2.insertionMode === 0 ? w2(1, null) : a2;
    }
    var sa = /* @__PURE__ */ new Map();
    function ta(a2, b2, c2) {
      if (typeof c2 != "object")
        throw Error(l2(62));
      b2 = !0;
      for (var d2 in c2)
        if (p2.call(c2, d2)) {
          var f2 = c2[d2];
          if (f2 != null && typeof f2 != "boolean" && f2 !== "") {
            if (d2.indexOf("--") === 0) {
              var e2 = v2(d2);
              f2 = v2(("" + f2).trim());
            } else {
              e2 = d2;
              var g2 = sa.get(e2);
              g2 !== void 0 || (g2 = v2(e2.replace(oa, "-$1").toLowerCase().replace(pa, "-ms-")), sa.set(e2, g2)), e2 = g2, f2 = typeof f2 == "number" ? f2 === 0 || p2.call(u2, d2) ? "" + f2 : f2 + "px" : v2(("" + f2).trim());
            }
            b2 ? (b2 = !1, a2.push(' style="', e2, ":", f2)) : a2.push(";", e2, ":", f2);
          }
        }
      b2 || a2.push('"');
    }
    function x2(a2, b2, c2, d2) {
      switch (c2) {
        case "style":
          ta(a2, b2, d2);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c2.length) || c2[0] !== "o" && c2[0] !== "O" || c2[1] !== "n" && c2[1] !== "N") {
        if (b2 = t2.hasOwnProperty(c2) ? t2[c2] : null, b2 !== null) {
          switch (typeof d2) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b2.acceptsBooleans)
                return;
          }
          switch (c2 = b2.attributeName, b2.type) {
            case 3:
              d2 && a2.push(" ", c2, '=""');
              break;
            case 4:
              d2 === !0 ? a2.push(" ", c2, '=""') : d2 !== !1 && a2.push(" ", c2, '="', v2(d2), '"');
              break;
            case 5:
              isNaN(d2) || a2.push(" ", c2, '="', v2(d2), '"');
              break;
            case 6:
              !isNaN(d2) && 1 <= d2 && a2.push(" ", c2, '="', v2(d2), '"');
              break;
            default:
              b2.sanitizeURL && (d2 = "" + d2), a2.push(" ", c2, '="', v2(d2), '"');
          }
        } else if (ja(c2)) {
          switch (typeof d2) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b2 = c2.toLowerCase().slice(0, 5), b2 !== "data-" && b2 !== "aria-")
                return;
          }
          a2.push(" ", c2, '="', v2(d2), '"');
        }
      }
    }
    function y2(a2, b2, c2) {
      if (b2 != null) {
        if (c2 != null)
          throw Error(l2(60));
        if (typeof b2 != "object" || !("__html" in b2))
          throw Error(l2(61));
        b2 = b2.__html, b2 != null && a2.push("" + b2);
      }
    }
    function ua(a2) {
      var b2 = "";
      return aa.Children.forEach(a2, function(a3) {
        a3 != null && (b2 += a3);
      }), b2;
    }
    function va(a2, b2, c2, d2) {
      a2.push(A(c2));
      var f2 = c2 = null, e2;
      for (e2 in b2)
        if (p2.call(b2, e2)) {
          var g2 = b2[e2];
          if (g2 != null)
            switch (e2) {
              case "children":
                c2 = g2;
                break;
              case "dangerouslySetInnerHTML":
                f2 = g2;
                break;
              default:
                x2(a2, d2, e2, g2);
            }
        }
      return a2.push(">"), y2(a2, f2, c2), typeof c2 == "string" ? (a2.push(v2(c2)), null) : c2;
    }
    var wa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, xa = /* @__PURE__ */ new Map();
    function A(a2) {
      var b2 = xa.get(a2);
      if (b2 === void 0) {
        if (!wa.test(a2))
          throw Error(l2(65, a2));
        b2 = "<" + a2, xa.set(a2, b2);
      }
      return b2;
    }
    function ya(a2, b2, c2, d2, f2) {
      switch (b2) {
        case "select":
          a2.push(A("select"));
          var e2 = null, g2 = null;
          for (n2 in c2)
            if (p2.call(c2, n2)) {
              var h2 = c2[n2];
              if (h2 != null)
                switch (n2) {
                  case "children":
                    e2 = h2;
                    break;
                  case "dangerouslySetInnerHTML":
                    g2 = h2;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    x2(a2, d2, n2, h2);
                }
            }
          return a2.push(">"), y2(a2, g2, e2), e2;
        case "option":
          g2 = f2.selectedValue, a2.push(A("option"));
          var k = h2 = null, m2 = null, n2 = null;
          for (e2 in c2)
            if (p2.call(c2, e2)) {
              var q = c2[e2];
              if (q != null)
                switch (e2) {
                  case "children":
                    h2 = q;
                    break;
                  case "selected":
                    m2 = q;
                    break;
                  case "dangerouslySetInnerHTML":
                    n2 = q;
                    break;
                  case "value":
                    k = q;
                  default:
                    x2(a2, d2, e2, q);
                }
            }
          if (g2 != null)
            if (c2 = k !== null ? "" + k : ua(h2), qa(g2)) {
              for (d2 = 0; d2 < g2.length; d2++)
                if ("" + g2[d2] === c2) {
                  a2.push(' selected=""');
                  break;
                }
            } else
              "" + g2 === c2 && a2.push(' selected=""');
          else
            m2 && a2.push(' selected=""');
          return a2.push(">"), y2(a2, n2, h2), h2;
        case "textarea":
          a2.push(A("textarea")), n2 = g2 = e2 = null;
          for (h2 in c2)
            if (p2.call(c2, h2) && (k = c2[h2], k != null))
              switch (h2) {
                case "children":
                  n2 = k;
                  break;
                case "value":
                  e2 = k;
                  break;
                case "defaultValue":
                  g2 = k;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(l2(91));
                default:
                  x2(
                    a2,
                    d2,
                    h2,
                    k
                  );
              }
          if (e2 === null && g2 !== null && (e2 = g2), a2.push(">"), n2 != null) {
            if (e2 != null)
              throw Error(l2(92));
            if (qa(n2) && 1 < n2.length)
              throw Error(l2(93));
            e2 = "" + n2;
          }
          return typeof e2 == "string" && e2[0] === `
` && a2.push(`
`), e2 !== null && a2.push(v2("" + e2)), null;
        case "input":
          a2.push(A("input")), k = n2 = h2 = e2 = null;
          for (g2 in c2)
            if (p2.call(c2, g2) && (m2 = c2[g2], m2 != null))
              switch (g2) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l2(399, "input"));
                case "defaultChecked":
                  k = m2;
                  break;
                case "defaultValue":
                  h2 = m2;
                  break;
                case "checked":
                  n2 = m2;
                  break;
                case "value":
                  e2 = m2;
                  break;
                default:
                  x2(a2, d2, g2, m2);
              }
          return n2 !== null ? x2(a2, d2, "checked", n2) : k !== null && x2(a2, d2, "checked", k), e2 !== null ? x2(a2, d2, "value", e2) : h2 !== null && x2(a2, d2, "value", h2), a2.push("/>"), null;
        case "menuitem":
          a2.push(A("menuitem"));
          for (var C in c2)
            if (p2.call(c2, C) && (e2 = c2[C], e2 != null))
              switch (C) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l2(400));
                default:
                  x2(a2, d2, C, e2);
              }
          return a2.push(">"), null;
        case "title":
          a2.push(A("title")), e2 = null;
          for (q in c2)
            if (p2.call(c2, q) && (g2 = c2[q], g2 != null))
              switch (q) {
                case "children":
                  e2 = g2;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(l2(434));
                default:
                  x2(a2, d2, q, g2);
              }
          return a2.push(">"), e2;
        case "listing":
        case "pre":
          a2.push(A(b2)), g2 = e2 = null;
          for (k in c2)
            if (p2.call(c2, k) && (h2 = c2[k], h2 != null))
              switch (k) {
                case "children":
                  e2 = h2;
                  break;
                case "dangerouslySetInnerHTML":
                  g2 = h2;
                  break;
                default:
                  x2(a2, d2, k, h2);
              }
          if (a2.push(">"), g2 != null) {
            if (e2 != null)
              throw Error(l2(60));
            if (typeof g2 != "object" || !("__html" in g2))
              throw Error(l2(61));
            c2 = g2.__html, c2 != null && (typeof c2 == "string" && 0 < c2.length && c2[0] === `
` ? a2.push(`
`, c2) : a2.push("" + c2));
          }
          return typeof e2 == "string" && e2[0] === `
` && a2.push(`
`), e2;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a2.push(A(b2));
          for (var D in c2)
            if (p2.call(c2, D) && (e2 = c2[D], e2 != null))
              switch (D) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l2(399, b2));
                default:
                  x2(a2, d2, D, e2);
              }
          return a2.push("/>"), null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return va(
            a2,
            c2,
            b2,
            d2
          );
        case "html":
          return f2.insertionMode === 0 && a2.push("<!DOCTYPE html>"), va(a2, c2, b2, d2);
        default:
          if (b2.indexOf("-") === -1 && typeof c2.is != "string")
            return va(a2, c2, b2, d2);
          a2.push(A(b2)), g2 = e2 = null;
          for (m2 in c2)
            if (p2.call(c2, m2) && (h2 = c2[m2], h2 != null))
              switch (m2) {
                case "children":
                  e2 = h2;
                  break;
                case "dangerouslySetInnerHTML":
                  g2 = h2;
                  break;
                case "style":
                  ta(a2, d2, h2);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  ja(m2) && typeof h2 != "function" && typeof h2 != "symbol" && a2.push(" ", m2, '="', v2(h2), '"');
              }
          return a2.push(">"), y2(a2, g2, e2), e2;
      }
    }
    function za(a2, b2, c2) {
      if (a2.push('<!--$?--><template id="'), c2 === null)
        throw Error(l2(395));
      return a2.push(c2), a2.push('"></template>');
    }
    function Aa(a2, b2, c2, d2) {
      switch (c2.insertionMode) {
        case 0:
        case 1:
          return a2.push('<div hidden id="'), a2.push(b2.segmentPrefix), b2 = d2.toString(16), a2.push(b2), a2.push('">');
        case 2:
          return a2.push('<svg aria-hidden="true" style="display:none" id="'), a2.push(b2.segmentPrefix), b2 = d2.toString(16), a2.push(b2), a2.push('">');
        case 3:
          return a2.push('<math aria-hidden="true" style="display:none" id="'), a2.push(b2.segmentPrefix), b2 = d2.toString(16), a2.push(b2), a2.push('">');
        case 4:
          return a2.push('<table hidden id="'), a2.push(b2.segmentPrefix), b2 = d2.toString(16), a2.push(b2), a2.push('">');
        case 5:
          return a2.push('<table hidden><tbody id="'), a2.push(b2.segmentPrefix), b2 = d2.toString(16), a2.push(b2), a2.push('">');
        case 6:
          return a2.push('<table hidden><tr id="'), a2.push(b2.segmentPrefix), b2 = d2.toString(16), a2.push(b2), a2.push('">');
        case 7:
          return a2.push('<table hidden><colgroup id="'), a2.push(b2.segmentPrefix), b2 = d2.toString(16), a2.push(b2), a2.push('">');
        default:
          throw Error(l2(397));
      }
    }
    function Ba(a2, b2) {
      switch (b2.insertionMode) {
        case 0:
        case 1:
          return a2.push("</div>");
        case 2:
          return a2.push("</svg>");
        case 3:
          return a2.push("</math>");
        case 4:
          return a2.push("</table>");
        case 5:
          return a2.push("</tbody></table>");
        case 6:
          return a2.push("</tr></table>");
        case 7:
          return a2.push("</colgroup></table>");
        default:
          throw Error(l2(397));
      }
    }
    var Ca = /[<\u2028\u2029]/g;
    function Da(a2) {
      return JSON.stringify(a2).replace(Ca, function(a3) {
        switch (a3) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Ea(a2, b2) {
      return b2 = b2 === void 0 ? "" : b2, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b2 + "P:", segmentPrefix: b2 + "S:", boundaryPrefix: b2 + "B:", idPrefix: b2, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a2 };
    }
    function Fa(a2, b2, c2, d2) {
      return c2.generateStaticMarkup ? (a2.push(v2(b2)), !1) : (b2 === "" ? a2 = d2 : (d2 && a2.push("<!-- -->"), a2.push(v2(b2)), a2 = !0), a2);
    }
    var B = Object.assign, Ga = Symbol.for("react.element"), Ha = Symbol.for("react.portal"), Ia = Symbol.for("react.fragment"), Ja = Symbol.for("react.strict_mode"), Ka = Symbol.for("react.profiler"), La = Symbol.for("react.provider"), Ma = Symbol.for("react.context"), Na = Symbol.for("react.forward_ref"), Oa = Symbol.for("react.suspense"), Pa = Symbol.for("react.suspense_list"), Qa = Symbol.for("react.memo"), Ra = Symbol.for("react.lazy"), Sa = Symbol.for("react.scope"), Ta = Symbol.for("react.debug_trace_mode"), Ua = Symbol.for("react.legacy_hidden"), Va = Symbol.for("react.default_value"), Wa = Symbol.iterator;
    function Xa(a2) {
      if (a2 == null)
        return null;
      if (typeof a2 == "function")
        return a2.displayName || a2.name || null;
      if (typeof a2 == "string")
        return a2;
      switch (a2) {
        case Ia:
          return "Fragment";
        case Ha:
          return "Portal";
        case Ka:
          return "Profiler";
        case Ja:
          return "StrictMode";
        case Oa:
          return "Suspense";
        case Pa:
          return "SuspenseList";
      }
      if (typeof a2 == "object")
        switch (a2.$$typeof) {
          case Ma:
            return (a2.displayName || "Context") + ".Consumer";
          case La:
            return (a2._context.displayName || "Context") + ".Provider";
          case Na:
            var b2 = a2.render;
            return a2 = a2.displayName, a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef"), a2;
          case Qa:
            return b2 = a2.displayName || null, b2 !== null ? b2 : Xa(a2.type) || "Memo";
          case Ra:
            b2 = a2._payload, a2 = a2._init;
            try {
              return Xa(a2(b2));
            } catch {
            }
        }
      return null;
    }
    var Ya = {};
    function Za(a2, b2) {
      if (a2 = a2.contextTypes, !a2)
        return Ya;
      var c2 = {}, d2;
      for (d2 in a2)
        c2[d2] = b2[d2];
      return c2;
    }
    var E = null;
    function F(a2, b2) {
      if (a2 !== b2) {
        a2.context._currentValue2 = a2.parentValue, a2 = a2.parent;
        var c2 = b2.parent;
        if (a2 === null) {
          if (c2 !== null)
            throw Error(l2(401));
        } else {
          if (c2 === null)
            throw Error(l2(401));
          F(a2, c2);
        }
        b2.context._currentValue2 = b2.value;
      }
    }
    function $a(a2) {
      a2.context._currentValue2 = a2.parentValue, a2 = a2.parent, a2 !== null && $a(a2);
    }
    function ab(a2) {
      var b2 = a2.parent;
      b2 !== null && ab(b2), a2.context._currentValue2 = a2.value;
    }
    function bb(a2, b2) {
      if (a2.context._currentValue2 = a2.parentValue, a2 = a2.parent, a2 === null)
        throw Error(l2(402));
      a2.depth === b2.depth ? F(a2, b2) : bb(a2, b2);
    }
    function cb(a2, b2) {
      var c2 = b2.parent;
      if (c2 === null)
        throw Error(l2(402));
      a2.depth === c2.depth ? F(a2, c2) : cb(a2, c2), b2.context._currentValue2 = b2.value;
    }
    function G(a2) {
      var b2 = E;
      b2 !== a2 && (b2 === null ? ab(a2) : a2 === null ? $a(b2) : b2.depth === a2.depth ? F(b2, a2) : b2.depth > a2.depth ? bb(b2, a2) : cb(b2, a2), E = a2);
    }
    var db = { isMounted: function() {
      return !1;
    }, enqueueSetState: function(a2, b2) {
      a2 = a2._reactInternals, a2.queue !== null && a2.queue.push(b2);
    }, enqueueReplaceState: function(a2, b2) {
      a2 = a2._reactInternals, a2.replace = !0, a2.queue = [b2];
    }, enqueueForceUpdate: function() {
    } };
    function eb(a2, b2, c2, d2) {
      var f2 = a2.state !== void 0 ? a2.state : null;
      a2.updater = db, a2.props = c2, a2.state = f2;
      var e2 = { queue: [], replace: !1 };
      a2._reactInternals = e2;
      var g2 = b2.contextType;
      if (a2.context = typeof g2 == "object" && g2 !== null ? g2._currentValue2 : d2, g2 = b2.getDerivedStateFromProps, typeof g2 == "function" && (g2 = g2(c2, f2), f2 = g2 == null ? f2 : B({}, f2, g2), a2.state = f2), typeof b2.getDerivedStateFromProps != "function" && typeof a2.getSnapshotBeforeUpdate != "function" && (typeof a2.UNSAFE_componentWillMount == "function" || typeof a2.componentWillMount == "function"))
        if (b2 = a2.state, typeof a2.componentWillMount == "function" && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount == "function" && a2.UNSAFE_componentWillMount(), b2 !== a2.state && db.enqueueReplaceState(a2, a2.state, null), e2.queue !== null && 0 < e2.queue.length)
          if (b2 = e2.queue, g2 = e2.replace, e2.queue = null, e2.replace = !1, g2 && b2.length === 1)
            a2.state = b2[0];
          else {
            for (e2 = g2 ? b2[0] : a2.state, f2 = !0, g2 = g2 ? 1 : 0; g2 < b2.length; g2++) {
              var h2 = b2[g2];
              h2 = typeof h2 == "function" ? h2.call(a2, e2, c2, d2) : h2, h2 != null && (f2 ? (f2 = !1, e2 = B({}, e2, h2)) : B(e2, h2));
            }
            a2.state = e2;
          }
        else
          e2.queue = null;
    }
    var fb = { id: 1, overflow: "" };
    function gb(a2, b2, c2) {
      var d2 = a2.id;
      a2 = a2.overflow;
      var f2 = 32 - H2(d2) - 1;
      d2 &= ~(1 << f2), c2 += 1;
      var e2 = 32 - H2(b2) + f2;
      if (30 < e2) {
        var g2 = f2 - f2 % 5;
        return e2 = (d2 & (1 << g2) - 1).toString(32), d2 >>= g2, f2 -= g2, { id: 1 << 32 - H2(b2) + f2 | c2 << f2 | d2, overflow: e2 + a2 };
      }
      return { id: 1 << e2 | c2 << f2 | d2, overflow: a2 };
    }
    var H2 = Math.clz32 ? Math.clz32 : hb, ib = Math.log, jb = Math.LN2;
    function hb(a2) {
      return a2 >>>= 0, a2 === 0 ? 32 : 31 - (ib(a2) / jb | 0) | 0;
    }
    function kb(a2, b2) {
      return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var lb = typeof Object.is == "function" ? Object.is : kb, I = null, ob = null, J = null, K = null, L = !1, M2 = !1, N2 = 0, O = null, P = 0;
    function Q() {
      if (I === null)
        throw Error(l2(321));
      return I;
    }
    function pb() {
      if (0 < P)
        throw Error(l2(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function qb() {
      return K === null ? J === null ? (L = !1, J = K = pb()) : (L = !0, K = J) : K.next === null ? (L = !1, K = K.next = pb()) : (L = !0, K = K.next), K;
    }
    function rb() {
      ob = I = null, M2 = !1, J = null, P = 0, K = O = null;
    }
    function sb(a2, b2) {
      return typeof b2 == "function" ? b2(a2) : b2;
    }
    function tb(a2, b2, c2) {
      if (I = Q(), K = qb(), L) {
        var d2 = K.queue;
        if (b2 = d2.dispatch, O !== null && (c2 = O.get(d2), c2 !== void 0)) {
          O.delete(d2), d2 = K.memoizedState;
          do
            d2 = a2(d2, c2.action), c2 = c2.next;
          while (c2 !== null);
          return K.memoizedState = d2, [d2, b2];
        }
        return [K.memoizedState, b2];
      }
      return a2 = a2 === sb ? typeof b2 == "function" ? b2() : b2 : c2 !== void 0 ? c2(b2) : b2, K.memoizedState = a2, a2 = K.queue = { last: null, dispatch: null }, a2 = a2.dispatch = ub.bind(null, I, a2), [K.memoizedState, a2];
    }
    function vb(a2, b2) {
      if (I = Q(), K = qb(), b2 = b2 === void 0 ? null : b2, K !== null) {
        var c2 = K.memoizedState;
        if (c2 !== null && b2 !== null) {
          var d2 = c2[1];
          a:
            if (d2 === null)
              d2 = !1;
            else {
              for (var f2 = 0; f2 < d2.length && f2 < b2.length; f2++)
                if (!lb(b2[f2], d2[f2])) {
                  d2 = !1;
                  break a;
                }
              d2 = !0;
            }
          if (d2)
            return c2[0];
        }
      }
      return a2 = a2(), K.memoizedState = [a2, b2], a2;
    }
    function ub(a2, b2, c2) {
      if (25 <= P)
        throw Error(l2(301));
      if (a2 === I)
        if (M2 = !0, a2 = { action: c2, next: null }, O === null && (O = /* @__PURE__ */ new Map()), c2 = O.get(b2), c2 === void 0)
          O.set(b2, a2);
        else {
          for (b2 = c2; b2.next !== null; )
            b2 = b2.next;
          b2.next = a2;
        }
    }
    function wb() {
      throw Error(l2(394));
    }
    function R() {
    }
    var xb = { readContext: function(a2) {
      return a2._currentValue2;
    }, useContext: function(a2) {
      return Q(), a2._currentValue2;
    }, useMemo: vb, useReducer: tb, useRef: function(a2) {
      I = Q(), K = qb();
      var b2 = K.memoizedState;
      return b2 === null ? (a2 = { current: a2 }, K.memoizedState = a2) : b2;
    }, useState: function(a2) {
      return tb(sb, a2);
    }, useInsertionEffect: R, useLayoutEffect: function() {
    }, useCallback: function(a2, b2) {
      return vb(function() {
        return a2;
      }, b2);
    }, useImperativeHandle: R, useEffect: R, useDebugValue: R, useDeferredValue: function(a2) {
      return Q(), a2;
    }, useTransition: function() {
      return Q(), [
        !1,
        wb
      ];
    }, useId: function() {
      var a2 = ob.treeContext, b2 = a2.overflow;
      a2 = a2.id, a2 = (a2 & ~(1 << 32 - H2(a2) - 1)).toString(32) + b2;
      var c2 = S;
      if (c2 === null)
        throw Error(l2(404));
      return b2 = N2++, a2 = ":" + c2.idPrefix + "R" + a2, 0 < b2 && (a2 += "H" + b2.toString(32)), a2 + ":";
    }, useMutableSource: function(a2, b2) {
      return Q(), b2(a2._source);
    }, useSyncExternalStore: function(a2, b2, c2) {
      if (c2 === void 0)
        throw Error(l2(407));
      return c2();
    } }, S = null, yb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function zb(a2) {
      return console.error(a2), null;
    }
    function T() {
    }
    function Ab(a2, b2, c2, d2, f2, e2, g2, h2, k) {
      var m2 = [], n2 = /* @__PURE__ */ new Set();
      return b2 = { destination: null, responseState: b2, progressiveChunkSize: d2 === void 0 ? 12800 : d2, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: n2, pingedTasks: m2, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f2 === void 0 ? zb : f2, onAllReady: e2 === void 0 ? T : e2, onShellReady: g2 === void 0 ? T : g2, onShellError: h2 === void 0 ? T : h2, onFatalError: k === void 0 ? T : k }, c2 = U(b2, 0, null, c2, !1, !1), c2.parentFlushed = !0, a2 = Bb(b2, a2, null, c2, n2, Ya, null, fb), m2.push(a2), b2;
    }
    function Bb(a2, b2, c2, d2, f2, e2, g2, h2) {
      a2.allPendingTasks++, c2 === null ? a2.pendingRootTasks++ : c2.pendingTasks++;
      var k = { node: b2, ping: function() {
        var b3 = a2.pingedTasks;
        b3.push(k), b3.length === 1 && Cb(a2);
      }, blockedBoundary: c2, blockedSegment: d2, abortSet: f2, legacyContext: e2, context: g2, treeContext: h2 };
      return f2.add(k), k;
    }
    function U(a2, b2, c2, d2, f2, e2) {
      return { status: 0, id: -1, index: b2, parentFlushed: !1, chunks: [], children: [], formatContext: d2, boundary: c2, lastPushedText: f2, textEmbedded: e2 };
    }
    function V(a2, b2) {
      if (a2 = a2.onError(b2), a2 != null && typeof a2 != "string")
        throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a2 + '" instead');
      return a2;
    }
    function W(a2, b2) {
      var c2 = a2.onShellError;
      c2(b2), c2 = a2.onFatalError, c2(b2), a2.destination !== null ? (a2.status = 2, a2.destination.destroy(b2)) : (a2.status = 1, a2.fatalError = b2);
    }
    function Db(a2, b2, c2, d2, f2) {
      for (I = {}, ob = b2, N2 = 0, a2 = c2(d2, f2); M2; )
        M2 = !1, N2 = 0, P += 1, K = null, a2 = c2(d2, f2);
      return rb(), a2;
    }
    function Eb(a2, b2, c2, d2) {
      var f2 = c2.render(), e2 = d2.childContextTypes;
      if (e2 != null) {
        var g2 = b2.legacyContext;
        if (typeof c2.getChildContext != "function")
          d2 = g2;
        else {
          c2 = c2.getChildContext();
          for (var h2 in c2)
            if (!(h2 in e2))
              throw Error(l2(108, Xa(d2) || "Unknown", h2));
          d2 = B({}, g2, c2);
        }
        b2.legacyContext = d2, X(a2, b2, f2), b2.legacyContext = g2;
      } else
        X(a2, b2, f2);
    }
    function Fb(a2, b2) {
      if (a2 && a2.defaultProps) {
        b2 = B({}, b2), a2 = a2.defaultProps;
        for (var c2 in a2)
          b2[c2] === void 0 && (b2[c2] = a2[c2]);
        return b2;
      }
      return b2;
    }
    function Gb(a2, b2, c2, d2, f2) {
      if (typeof c2 == "function")
        if (c2.prototype && c2.prototype.isReactComponent) {
          f2 = Za(c2, b2.legacyContext);
          var e2 = c2.contextType;
          e2 = new c2(d2, typeof e2 == "object" && e2 !== null ? e2._currentValue2 : f2), eb(e2, c2, d2, f2), Eb(a2, b2, e2, c2);
        } else {
          e2 = Za(c2, b2.legacyContext), f2 = Db(a2, b2, c2, d2, e2);
          var g2 = N2 !== 0;
          if (typeof f2 == "object" && f2 !== null && typeof f2.render == "function" && f2.$$typeof === void 0)
            eb(f2, c2, d2, e2), Eb(a2, b2, f2, c2);
          else if (g2) {
            d2 = b2.treeContext, b2.treeContext = gb(d2, 1, 0);
            try {
              X(a2, b2, f2);
            } finally {
              b2.treeContext = d2;
            }
          } else
            X(a2, b2, f2);
        }
      else if (typeof c2 == "string") {
        switch (f2 = b2.blockedSegment, e2 = ya(f2.chunks, c2, d2, a2.responseState, f2.formatContext), f2.lastPushedText = !1, g2 = f2.formatContext, f2.formatContext = ra(g2, c2, d2), Hb(a2, b2, e2), f2.formatContext = g2, c2) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f2.chunks.push("</", c2, ">");
        }
        f2.lastPushedText = !1;
      } else {
        switch (c2) {
          case Ua:
          case Ta:
          case Ja:
          case Ka:
          case Ia:
            X(a2, b2, d2.children);
            return;
          case Pa:
            X(a2, b2, d2.children);
            return;
          case Sa:
            throw Error(l2(343));
          case Oa:
            a: {
              c2 = b2.blockedBoundary, f2 = b2.blockedSegment, e2 = d2.fallback, d2 = d2.children, g2 = /* @__PURE__ */ new Set();
              var h2 = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g2, errorDigest: null }, k = U(a2, f2.chunks.length, h2, f2.formatContext, !1, !1);
              f2.children.push(k), f2.lastPushedText = !1;
              var m2 = U(a2, 0, null, f2.formatContext, !1, !1);
              m2.parentFlushed = !0, b2.blockedBoundary = h2, b2.blockedSegment = m2;
              try {
                if (Hb(
                  a2,
                  b2,
                  d2
                ), a2.responseState.generateStaticMarkup || m2.lastPushedText && m2.textEmbedded && m2.chunks.push("<!-- -->"), m2.status = 1, Y(h2, m2), h2.pendingTasks === 0)
                  break a;
              } catch (n2) {
                m2.status = 4, h2.forceClientRender = !0, h2.errorDigest = V(a2, n2);
              } finally {
                b2.blockedBoundary = c2, b2.blockedSegment = f2;
              }
              b2 = Bb(a2, e2, c2, k, g2, b2.legacyContext, b2.context, b2.treeContext), a2.pingedTasks.push(b2);
            }
            return;
        }
        if (typeof c2 == "object" && c2 !== null)
          switch (c2.$$typeof) {
            case Na:
              if (d2 = Db(a2, b2, c2.render, d2, f2), N2 !== 0) {
                c2 = b2.treeContext, b2.treeContext = gb(c2, 1, 0);
                try {
                  X(a2, b2, d2);
                } finally {
                  b2.treeContext = c2;
                }
              } else
                X(a2, b2, d2);
              return;
            case Qa:
              c2 = c2.type, d2 = Fb(c2, d2), Gb(a2, b2, c2, d2, f2);
              return;
            case La:
              if (f2 = d2.children, c2 = c2._context, d2 = d2.value, e2 = c2._currentValue2, c2._currentValue2 = d2, g2 = E, E = d2 = { parent: g2, depth: g2 === null ? 0 : g2.depth + 1, context: c2, parentValue: e2, value: d2 }, b2.context = d2, X(a2, b2, f2), a2 = E, a2 === null)
                throw Error(l2(403));
              d2 = a2.parentValue, a2.context._currentValue2 = d2 === Va ? a2.context._defaultValue : d2, a2 = E = a2.parent, b2.context = a2;
              return;
            case Ma:
              d2 = d2.children, d2 = d2(c2._currentValue2), X(a2, b2, d2);
              return;
            case Ra:
              f2 = c2._init, c2 = f2(c2._payload), d2 = Fb(c2, d2), Gb(
                a2,
                b2,
                c2,
                d2,
                void 0
              );
              return;
          }
        throw Error(l2(130, c2 == null ? c2 : typeof c2, ""));
      }
    }
    function X(a2, b2, c2) {
      if (b2.node = c2, typeof c2 == "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case Ga:
            Gb(a2, b2, c2.type, c2.props, c2.ref);
            return;
          case Ha:
            throw Error(l2(257));
          case Ra:
            var d2 = c2._init;
            c2 = d2(c2._payload), X(a2, b2, c2);
            return;
        }
        if (qa(c2)) {
          Ib(a2, b2, c2);
          return;
        }
        if (c2 === null || typeof c2 != "object" ? d2 = null : (d2 = Wa && c2[Wa] || c2["@@iterator"], d2 = typeof d2 == "function" ? d2 : null), d2 && (d2 = d2.call(c2))) {
          if (c2 = d2.next(), !c2.done) {
            var f2 = [];
            do
              f2.push(c2.value), c2 = d2.next();
            while (!c2.done);
            Ib(a2, b2, f2);
          }
          return;
        }
        throw a2 = Object.prototype.toString.call(c2), Error(l2(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(c2).join(", ") + "}" : a2));
      }
      typeof c2 == "string" ? (d2 = b2.blockedSegment, d2.lastPushedText = Fa(b2.blockedSegment.chunks, c2, a2.responseState, d2.lastPushedText)) : typeof c2 == "number" && (d2 = b2.blockedSegment, d2.lastPushedText = Fa(b2.blockedSegment.chunks, "" + c2, a2.responseState, d2.lastPushedText));
    }
    function Ib(a2, b2, c2) {
      for (var d2 = c2.length, f2 = 0; f2 < d2; f2++) {
        var e2 = b2.treeContext;
        b2.treeContext = gb(e2, d2, f2);
        try {
          Hb(a2, b2, c2[f2]);
        } finally {
          b2.treeContext = e2;
        }
      }
    }
    function Hb(a2, b2, c2) {
      var d2 = b2.blockedSegment.formatContext, f2 = b2.legacyContext, e2 = b2.context;
      try {
        return X(a2, b2, c2);
      } catch (k) {
        if (rb(), typeof k == "object" && k !== null && typeof k.then == "function") {
          c2 = k;
          var g2 = b2.blockedSegment, h2 = U(a2, g2.chunks.length, null, g2.formatContext, g2.lastPushedText, !0);
          g2.children.push(h2), g2.lastPushedText = !1, a2 = Bb(a2, b2.node, b2.blockedBoundary, h2, b2.abortSet, b2.legacyContext, b2.context, b2.treeContext).ping, c2.then(a2, a2), b2.blockedSegment.formatContext = d2, b2.legacyContext = f2, b2.context = e2, G(e2);
        } else
          throw b2.blockedSegment.formatContext = d2, b2.legacyContext = f2, b2.context = e2, G(e2), k;
      }
    }
    function Jb(a2) {
      var b2 = a2.blockedBoundary;
      a2 = a2.blockedSegment, a2.status = 3, Kb(this, b2, a2);
    }
    function Lb(a2, b2, c2) {
      var d2 = a2.blockedBoundary;
      a2.blockedSegment.status = 3, d2 === null ? (b2.allPendingTasks--, b2.status !== 2 && (b2.status = 2, b2.destination !== null && b2.destination.push(null))) : (d2.pendingTasks--, d2.forceClientRender || (d2.forceClientRender = !0, a2 = c2 === void 0 ? Error(l2(432)) : c2, d2.errorDigest = b2.onError(a2), d2.parentFlushed && b2.clientRenderedBoundaries.push(d2)), d2.fallbackAbortableTasks.forEach(function(a3) {
        return Lb(a3, b2, c2);
      }), d2.fallbackAbortableTasks.clear(), b2.allPendingTasks--, b2.allPendingTasks === 0 && (d2 = b2.onAllReady, d2()));
    }
    function Y(a2, b2) {
      if (b2.chunks.length === 0 && b2.children.length === 1 && b2.children[0].boundary === null) {
        var c2 = b2.children[0];
        c2.id = b2.id, c2.parentFlushed = !0, c2.status === 1 && Y(a2, c2);
      } else
        a2.completedSegments.push(b2);
    }
    function Kb(a2, b2, c2) {
      if (b2 === null) {
        if (c2.parentFlushed) {
          if (a2.completedRootSegment !== null)
            throw Error(l2(389));
          a2.completedRootSegment = c2;
        }
        a2.pendingRootTasks--, a2.pendingRootTasks === 0 && (a2.onShellError = T, b2 = a2.onShellReady, b2());
      } else
        b2.pendingTasks--, b2.forceClientRender || (b2.pendingTasks === 0 ? (c2.parentFlushed && c2.status === 1 && Y(b2, c2), b2.parentFlushed && a2.completedBoundaries.push(b2), b2.fallbackAbortableTasks.forEach(Jb, a2), b2.fallbackAbortableTasks.clear()) : c2.parentFlushed && c2.status === 1 && (Y(b2, c2), b2.completedSegments.length === 1 && b2.parentFlushed && a2.partialBoundaries.push(b2)));
      a2.allPendingTasks--, a2.allPendingTasks === 0 && (a2 = a2.onAllReady, a2());
    }
    function Cb(a2) {
      if (a2.status !== 2) {
        var b2 = E, c2 = yb.current;
        yb.current = xb;
        var d2 = S;
        S = a2.responseState;
        try {
          var f2 = a2.pingedTasks, e2;
          for (e2 = 0; e2 < f2.length; e2++) {
            var g2 = f2[e2], h2 = a2, k = g2.blockedSegment;
            if (k.status === 0) {
              G(g2.context);
              try {
                X(h2, g2, g2.node), h2.responseState.generateStaticMarkup || k.lastPushedText && k.textEmbedded && k.chunks.push("<!-- -->"), g2.abortSet.delete(g2), k.status = 1, Kb(h2, g2.blockedBoundary, k);
              } catch (z2) {
                if (rb(), typeof z2 == "object" && z2 !== null && typeof z2.then == "function") {
                  var m2 = g2.ping;
                  z2.then(m2, m2);
                } else {
                  g2.abortSet.delete(g2), k.status = 4;
                  var n2 = g2.blockedBoundary, q = z2, C = V(h2, q);
                  if (n2 === null ? W(h2, q) : (n2.pendingTasks--, n2.forceClientRender || (n2.forceClientRender = !0, n2.errorDigest = C, n2.parentFlushed && h2.clientRenderedBoundaries.push(n2))), h2.allPendingTasks--, h2.allPendingTasks === 0) {
                    var D = h2.onAllReady;
                    D();
                  }
                }
              } finally {
              }
            }
          }
          f2.splice(0, e2), a2.destination !== null && Mb(a2, a2.destination);
        } catch (z2) {
          V(a2, z2), W(a2, z2);
        } finally {
          S = d2, yb.current = c2, c2 === xb && G(b2);
        }
      }
    }
    function Z(a2, b2, c2) {
      switch (c2.parentFlushed = !0, c2.status) {
        case 0:
          var d2 = c2.id = a2.nextSegmentId++;
          return c2.lastPushedText = !1, c2.textEmbedded = !1, a2 = a2.responseState, b2.push('<template id="'), b2.push(a2.placeholderPrefix), a2 = d2.toString(16), b2.push(a2), b2.push('"></template>');
        case 1:
          c2.status = 2;
          var f2 = !0;
          d2 = c2.chunks;
          var e2 = 0;
          c2 = c2.children;
          for (var g2 = 0; g2 < c2.length; g2++) {
            for (f2 = c2[g2]; e2 < f2.index; e2++)
              b2.push(d2[e2]);
            f2 = Nb(a2, b2, f2);
          }
          for (; e2 < d2.length - 1; e2++)
            b2.push(d2[e2]);
          return e2 < d2.length && (f2 = b2.push(d2[e2])), f2;
        default:
          throw Error(l2(390));
      }
    }
    function Nb(a2, b2, c2) {
      var d2 = c2.boundary;
      if (d2 === null)
        return Z(a2, b2, c2);
      if (d2.parentFlushed = !0, d2.forceClientRender)
        return a2.responseState.generateStaticMarkup || (d2 = d2.errorDigest, b2.push("<!--$!-->"), b2.push("<template"), d2 && (b2.push(' data-dgst="'), d2 = v2(d2), b2.push(d2), b2.push('"')), b2.push("></template>")), Z(a2, b2, c2), a2 = a2.responseState.generateStaticMarkup ? !0 : b2.push("<!--/$-->"), a2;
      if (0 < d2.pendingTasks) {
        d2.rootSegmentID = a2.nextSegmentId++, 0 < d2.completedSegments.length && a2.partialBoundaries.push(d2);
        var f2 = a2.responseState, e2 = f2.nextSuspenseID++;
        return f2 = f2.boundaryPrefix + e2.toString(16), d2 = d2.id = f2, za(b2, a2.responseState, d2), Z(a2, b2, c2), b2.push("<!--/$-->");
      }
      if (d2.byteSize > a2.progressiveChunkSize)
        return d2.rootSegmentID = a2.nextSegmentId++, a2.completedBoundaries.push(d2), za(b2, a2.responseState, d2.id), Z(a2, b2, c2), b2.push("<!--/$-->");
      if (a2.responseState.generateStaticMarkup || b2.push("<!--$-->"), c2 = d2.completedSegments, c2.length !== 1)
        throw Error(l2(391));
      return Nb(a2, b2, c2[0]), a2 = a2.responseState.generateStaticMarkup ? !0 : b2.push("<!--/$-->"), a2;
    }
    function Ob(a2, b2, c2) {
      return Aa(b2, a2.responseState, c2.formatContext, c2.id), Nb(a2, b2, c2), Ba(b2, c2.formatContext);
    }
    function Pb(a2, b2, c2) {
      for (var d2 = c2.completedSegments, f2 = 0; f2 < d2.length; f2++)
        Qb(a2, b2, c2, d2[f2]);
      if (d2.length = 0, a2 = a2.responseState, d2 = c2.id, c2 = c2.rootSegmentID, b2.push(a2.startInlineScript), a2.sentCompleteBoundaryFunction ? b2.push('$RC("') : (a2.sentCompleteBoundaryFunction = !0, b2.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), d2 === null)
        throw Error(l2(395));
      return c2 = c2.toString(16), b2.push(d2), b2.push('","'), b2.push(a2.segmentPrefix), b2.push(c2), b2.push('")</script>');
    }
    function Qb(a2, b2, c2, d2) {
      if (d2.status === 2)
        return !0;
      var f2 = d2.id;
      if (f2 === -1) {
        if ((d2.id = c2.rootSegmentID) === -1)
          throw Error(l2(392));
        return Ob(a2, b2, d2);
      }
      return Ob(a2, b2, d2), a2 = a2.responseState, b2.push(a2.startInlineScript), a2.sentCompleteSegmentFunction ? b2.push('$RS("') : (a2.sentCompleteSegmentFunction = !0, b2.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), b2.push(a2.segmentPrefix), f2 = f2.toString(16), b2.push(f2), b2.push('","'), b2.push(a2.placeholderPrefix), b2.push(f2), b2.push('")</script>');
    }
    function Mb(a2, b2) {
      try {
        var c2 = a2.completedRootSegment;
        if (c2 !== null && a2.pendingRootTasks === 0) {
          Nb(a2, b2, c2), a2.completedRootSegment = null;
          var d2 = a2.responseState.bootstrapChunks;
          for (c2 = 0; c2 < d2.length - 1; c2++)
            b2.push(d2[c2]);
          c2 < d2.length && b2.push(d2[c2]);
        }
        var f2 = a2.clientRenderedBoundaries, e2;
        for (e2 = 0; e2 < f2.length; e2++) {
          var g2 = f2[e2];
          d2 = b2;
          var h2 = a2.responseState, k = g2.id, m2 = g2.errorDigest, n2 = g2.errorMessage, q = g2.errorComponentStack;
          if (d2.push(h2.startInlineScript), h2.sentClientRenderFunction ? d2.push('$RX("') : (h2.sentClientRenderFunction = !0, d2.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), k === null)
            throw Error(l2(395));
          if (d2.push(k), d2.push('"'), m2 || n2 || q) {
            d2.push(",");
            var C = Da(m2 || "");
            d2.push(C);
          }
          if (n2 || q) {
            d2.push(",");
            var D = Da(n2 || "");
            d2.push(D);
          }
          if (q) {
            d2.push(",");
            var z2 = Da(q);
            d2.push(z2);
          }
          if (!d2.push(")</script>")) {
            a2.destination = null, e2++, f2.splice(0, e2);
            return;
          }
        }
        f2.splice(0, e2);
        var ba = a2.completedBoundaries;
        for (e2 = 0; e2 < ba.length; e2++)
          if (!Pb(a2, b2, ba[e2])) {
            a2.destination = null, e2++, ba.splice(0, e2);
            return;
          }
        ba.splice(0, e2);
        var ca = a2.partialBoundaries;
        for (e2 = 0; e2 < ca.length; e2++) {
          var mb = ca[e2];
          a: {
            f2 = a2, g2 = b2;
            var da = mb.completedSegments;
            for (h2 = 0; h2 < da.length; h2++)
              if (!Qb(f2, g2, mb, da[h2])) {
                h2++, da.splice(0, h2);
                var nb = !1;
                break a;
              }
            da.splice(0, h2), nb = !0;
          }
          if (!nb) {
            a2.destination = null, e2++, ca.splice(0, e2);
            return;
          }
        }
        ca.splice(0, e2);
        var ea = a2.completedBoundaries;
        for (e2 = 0; e2 < ea.length; e2++)
          if (!Pb(a2, b2, ea[e2])) {
            a2.destination = null, e2++, ea.splice(0, e2);
            return;
          }
        ea.splice(0, e2);
      } finally {
        a2.allPendingTasks === 0 && a2.pingedTasks.length === 0 && a2.clientRenderedBoundaries.length === 0 && a2.completedBoundaries.length === 0 && b2.push(null);
      }
    }
    function Rb(a2, b2) {
      try {
        var c2 = a2.abortableTasks;
        c2.forEach(function(c3) {
          return Lb(c3, a2, b2);
        }), c2.clear(), a2.destination !== null && Mb(a2, a2.destination);
      } catch (d2) {
        V(a2, d2), W(a2, d2);
      }
    }
    function Sb() {
    }
    function Tb(a2, b2, c2, d2) {
      var f2 = !1, e2 = null, g2 = "", h2 = { push: function(a3) {
        return a3 !== null && (g2 += a3), !0;
      }, destroy: function(a3) {
        f2 = !0, e2 = a3;
      } }, k = !1;
      if (a2 = Ab(a2, Ea(c2, b2 ? b2.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Sb, void 0, function() {
        k = !0;
      }, void 0, void 0), Cb(a2), Rb(a2, d2), a2.status === 1)
        a2.status = 2, h2.destroy(a2.fatalError);
      else if (a2.status !== 2 && a2.destination === null) {
        a2.destination = h2;
        try {
          Mb(a2, h2);
        } catch (m2) {
          V(a2, m2), W(a2, m2);
        }
      }
      if (f2)
        throw e2;
      if (!k)
        throw Error(l2(426));
      return g2;
    }
    exports.renderToNodeStream = function() {
      throw Error(l2(207));
    };
    exports.renderToStaticMarkup = function(a2, b2) {
      return Tb(a2, b2, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.renderToStaticNodeStream = function() {
      throw Error(l2(208));
    };
    exports.renderToString = function(a2, b2) {
      return Tb(a2, b2, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.version = "18.2.0";
  }
});

// node_modules/react-dom/cjs/react-dom-server.browser.production.min.js
var require_react_dom_server_browser_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.browser.production.min.js"(exports) {
    "use strict";
    var aa = require_react();
    function k(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var l2 = null, n2 = 0;
    function p2(a2, b2) {
      if (b2.length !== 0)
        if (512 < b2.length)
          0 < n2 && (a2.enqueue(new Uint8Array(l2.buffer, 0, n2)), l2 = new Uint8Array(512), n2 = 0), a2.enqueue(b2);
        else {
          var c2 = l2.length - n2;
          c2 < b2.length && (c2 === 0 ? a2.enqueue(l2) : (l2.set(b2.subarray(0, c2), n2), a2.enqueue(l2), b2 = b2.subarray(c2)), l2 = new Uint8Array(512), n2 = 0), l2.set(b2, n2), n2 += b2.length;
        }
    }
    function t2(a2, b2) {
      return p2(a2, b2), !0;
    }
    function ba(a2) {
      l2 && 0 < n2 && (a2.enqueue(new Uint8Array(l2.buffer, 0, n2)), l2 = null, n2 = 0);
    }
    var ca = new TextEncoder();
    function u2(a2) {
      return ca.encode(a2);
    }
    function w2(a2) {
      return ca.encode(a2);
    }
    function da(a2, b2) {
      typeof a2.error == "function" ? a2.error(b2) : a2.close();
    }
    var x2 = Object.prototype.hasOwnProperty, ea = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, fa = {}, ha = {};
    function ia(a2) {
      return x2.call(ha, a2) ? !0 : x2.call(fa, a2) ? !1 : ea.test(a2) ? ha[a2] = !0 : (fa[a2] = !0, !1);
    }
    function y2(a2, b2, c2, d2, f2, e2, g2) {
      this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4, this.attributeName = d2, this.attributeNamespace = f2, this.mustUseProperty = c2, this.propertyName = a2, this.type = b2, this.sanitizeURL = e2, this.removeEmptyString = g2;
    }
    var z2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
      z2[a2] = new y2(a2, 0, !1, a2, null, !1, !1);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
      var b2 = a2[0];
      z2[b2] = new y2(b2, 1, !1, a2[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
      z2[a2] = new y2(a2, 2, !1, a2.toLowerCase(), null, !1, !1);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
      z2[a2] = new y2(a2, 2, !1, a2, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
      z2[a2] = new y2(a2, 3, !1, a2.toLowerCase(), null, !1, !1);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
      z2[a2] = new y2(a2, 3, !0, a2, null, !1, !1);
    });
    ["capture", "download"].forEach(function(a2) {
      z2[a2] = new y2(a2, 4, !1, a2, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function(a2) {
      z2[a2] = new y2(a2, 6, !1, a2, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function(a2) {
      z2[a2] = new y2(a2, 5, !1, a2.toLowerCase(), null, !1, !1);
    });
    var ja = /[\-:]([a-z])/g;
    function ka(a2) {
      return a2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
      var b2 = a2.replace(
        ja,
        ka
      );
      z2[b2] = new y2(b2, 1, !1, a2, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
      var b2 = a2.replace(ja, ka);
      z2[b2] = new y2(b2, 1, !1, a2, "http://www.w3.org/1999/xlink", !1, !1);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
      var b2 = a2.replace(ja, ka);
      z2[b2] = new y2(b2, 1, !1, a2, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a2) {
      z2[a2] = new y2(a2, 1, !1, a2.toLowerCase(), null, !1, !1);
    });
    z2.xlinkHref = new y2("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    ["src", "href", "action", "formAction"].forEach(function(a2) {
      z2[a2] = new y2(a2, 1, !1, a2.toLowerCase(), null, !0, !0);
    });
    var B = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    }, la = ["Webkit", "ms", "Moz", "O"];
    Object.keys(B).forEach(function(a2) {
      la.forEach(function(b2) {
        b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1), B[b2] = B[a2];
      });
    });
    var oa = /["'&<>]/;
    function C(a2) {
      if (typeof a2 == "boolean" || typeof a2 == "number")
        return "" + a2;
      a2 = "" + a2;
      var b2 = oa.exec(a2);
      if (b2) {
        var c2 = "", d2, f2 = 0;
        for (d2 = b2.index; d2 < a2.length; d2++) {
          switch (a2.charCodeAt(d2)) {
            case 34:
              b2 = "&quot;";
              break;
            case 38:
              b2 = "&amp;";
              break;
            case 39:
              b2 = "&#x27;";
              break;
            case 60:
              b2 = "&lt;";
              break;
            case 62:
              b2 = "&gt;";
              break;
            default:
              continue;
          }
          f2 !== d2 && (c2 += a2.substring(f2, d2)), f2 = d2 + 1, c2 += b2;
        }
        a2 = f2 !== d2 ? c2 + a2.substring(f2, d2) : c2;
      }
      return a2;
    }
    var pa = /([A-Z])/g, qa = /^ms-/, ra = Array.isArray, sa = w2("<script>"), ta = w2("</script>"), ua = w2('<script src="'), va = w2('<script type="module" src="'), wa = w2('" async=""></script>'), xa = /(<\/|<)(s)(cript)/gi;
    function ya(a2, b2, c2, d2) {
      return "" + b2 + (c2 === "s" ? "\\u0073" : "\\u0053") + d2;
    }
    function za(a2, b2, c2, d2, f2) {
      a2 = a2 === void 0 ? "" : a2, b2 = b2 === void 0 ? sa : w2('<script nonce="' + C(b2) + '">');
      var e2 = [];
      if (c2 !== void 0 && e2.push(b2, u2(("" + c2).replace(xa, ya)), ta), d2 !== void 0)
        for (c2 = 0; c2 < d2.length; c2++)
          e2.push(ua, u2(C(d2[c2])), wa);
      if (f2 !== void 0)
        for (d2 = 0; d2 < f2.length; d2++)
          e2.push(va, u2(C(f2[d2])), wa);
      return { bootstrapChunks: e2, startInlineScript: b2, placeholderPrefix: w2(a2 + "P:"), segmentPrefix: w2(a2 + "S:"), boundaryPrefix: a2 + "B:", idPrefix: a2, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
    }
    function D(a2, b2) {
      return { insertionMode: a2, selectedValue: b2 };
    }
    function Aa(a2) {
      return D(a2 === "http://www.w3.org/2000/svg" ? 2 : a2 === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
    }
    function Ba(a2, b2, c2) {
      switch (b2) {
        case "select":
          return D(1, c2.value != null ? c2.value : c2.defaultValue);
        case "svg":
          return D(2, null);
        case "math":
          return D(3, null);
        case "foreignObject":
          return D(1, null);
        case "table":
          return D(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return D(5, null);
        case "colgroup":
          return D(7, null);
        case "tr":
          return D(6, null);
      }
      return 4 <= a2.insertionMode || a2.insertionMode === 0 ? D(1, null) : a2;
    }
    var Ca = w2("<!-- -->");
    function Da(a2, b2, c2, d2) {
      return b2 === "" ? d2 : (d2 && a2.push(Ca), a2.push(u2(C(b2))), !0);
    }
    var Ea = /* @__PURE__ */ new Map(), Fa = w2(' style="'), Ga = w2(":"), Ha = w2(";");
    function Ia(a2, b2, c2) {
      if (typeof c2 != "object")
        throw Error(k(62));
      b2 = !0;
      for (var d2 in c2)
        if (x2.call(c2, d2)) {
          var f2 = c2[d2];
          if (f2 != null && typeof f2 != "boolean" && f2 !== "") {
            if (d2.indexOf("--") === 0) {
              var e2 = u2(C(d2));
              f2 = u2(C(("" + f2).trim()));
            } else {
              e2 = d2;
              var g2 = Ea.get(e2);
              g2 !== void 0 || (g2 = w2(C(e2.replace(pa, "-$1").toLowerCase().replace(qa, "-ms-"))), Ea.set(e2, g2)), e2 = g2, f2 = typeof f2 == "number" ? f2 === 0 || x2.call(B, d2) ? u2("" + f2) : u2(f2 + "px") : u2(C(("" + f2).trim()));
            }
            b2 ? (b2 = !1, a2.push(Fa, e2, Ga, f2)) : a2.push(Ha, e2, Ga, f2);
          }
        }
      b2 || a2.push(E);
    }
    var H2 = w2(" "), I = w2('="'), E = w2('"'), Ja = w2('=""');
    function J(a2, b2, c2, d2) {
      switch (c2) {
        case "style":
          Ia(a2, b2, d2);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c2.length) || c2[0] !== "o" && c2[0] !== "O" || c2[1] !== "n" && c2[1] !== "N") {
        if (b2 = z2.hasOwnProperty(c2) ? z2[c2] : null, b2 !== null) {
          switch (typeof d2) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b2.acceptsBooleans)
                return;
          }
          switch (c2 = u2(b2.attributeName), b2.type) {
            case 3:
              d2 && a2.push(H2, c2, Ja);
              break;
            case 4:
              d2 === !0 ? a2.push(H2, c2, Ja) : d2 !== !1 && a2.push(H2, c2, I, u2(C(d2)), E);
              break;
            case 5:
              isNaN(d2) || a2.push(H2, c2, I, u2(C(d2)), E);
              break;
            case 6:
              !isNaN(d2) && 1 <= d2 && a2.push(H2, c2, I, u2(C(d2)), E);
              break;
            default:
              b2.sanitizeURL && (d2 = "" + d2), a2.push(H2, c2, I, u2(C(d2)), E);
          }
        } else if (ia(c2)) {
          switch (typeof d2) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b2 = c2.toLowerCase().slice(0, 5), b2 !== "data-" && b2 !== "aria-")
                return;
          }
          a2.push(H2, u2(c2), I, u2(C(d2)), E);
        }
      }
    }
    var K = w2(">"), Ka = w2("/>");
    function L(a2, b2, c2) {
      if (b2 != null) {
        if (c2 != null)
          throw Error(k(60));
        if (typeof b2 != "object" || !("__html" in b2))
          throw Error(k(61));
        b2 = b2.__html, b2 != null && a2.push(u2("" + b2));
      }
    }
    function La(a2) {
      var b2 = "";
      return aa.Children.forEach(a2, function(a3) {
        a3 != null && (b2 += a3);
      }), b2;
    }
    var Ma = w2(' selected=""');
    function Na(a2, b2, c2, d2) {
      a2.push(M2(c2));
      var f2 = c2 = null, e2;
      for (e2 in b2)
        if (x2.call(b2, e2)) {
          var g2 = b2[e2];
          if (g2 != null)
            switch (e2) {
              case "children":
                c2 = g2;
                break;
              case "dangerouslySetInnerHTML":
                f2 = g2;
                break;
              default:
                J(a2, d2, e2, g2);
            }
        }
      return a2.push(K), L(a2, f2, c2), typeof c2 == "string" ? (a2.push(u2(C(c2))), null) : c2;
    }
    var Oa = w2(`
`), Pa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qa = /* @__PURE__ */ new Map();
    function M2(a2) {
      var b2 = Qa.get(a2);
      if (b2 === void 0) {
        if (!Pa.test(a2))
          throw Error(k(65, a2));
        b2 = w2("<" + a2), Qa.set(a2, b2);
      }
      return b2;
    }
    var Ra = w2("<!DOCTYPE html>");
    function Sa(a2, b2, c2, d2, f2) {
      switch (b2) {
        case "select":
          a2.push(M2("select"));
          var e2 = null, g2 = null;
          for (r2 in c2)
            if (x2.call(c2, r2)) {
              var h2 = c2[r2];
              if (h2 != null)
                switch (r2) {
                  case "children":
                    e2 = h2;
                    break;
                  case "dangerouslySetInnerHTML":
                    g2 = h2;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    J(a2, d2, r2, h2);
                }
            }
          return a2.push(K), L(a2, g2, e2), e2;
        case "option":
          g2 = f2.selectedValue, a2.push(M2("option"));
          var m2 = h2 = null, q = null, r2 = null;
          for (e2 in c2)
            if (x2.call(c2, e2)) {
              var v2 = c2[e2];
              if (v2 != null)
                switch (e2) {
                  case "children":
                    h2 = v2;
                    break;
                  case "selected":
                    q = v2;
                    break;
                  case "dangerouslySetInnerHTML":
                    r2 = v2;
                    break;
                  case "value":
                    m2 = v2;
                  default:
                    J(a2, d2, e2, v2);
                }
            }
          if (g2 != null)
            if (c2 = m2 !== null ? "" + m2 : La(h2), ra(g2)) {
              for (d2 = 0; d2 < g2.length; d2++)
                if ("" + g2[d2] === c2) {
                  a2.push(Ma);
                  break;
                }
            } else
              "" + g2 === c2 && a2.push(Ma);
          else
            q && a2.push(Ma);
          return a2.push(K), L(a2, r2, h2), h2;
        case "textarea":
          a2.push(M2("textarea")), r2 = g2 = e2 = null;
          for (h2 in c2)
            if (x2.call(c2, h2) && (m2 = c2[h2], m2 != null))
              switch (h2) {
                case "children":
                  r2 = m2;
                  break;
                case "value":
                  e2 = m2;
                  break;
                case "defaultValue":
                  g2 = m2;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(k(91));
                default:
                  J(a2, d2, h2, m2);
              }
          if (e2 === null && g2 !== null && (e2 = g2), a2.push(K), r2 != null) {
            if (e2 != null)
              throw Error(k(92));
            if (ra(r2) && 1 < r2.length)
              throw Error(k(93));
            e2 = "" + r2;
          }
          return typeof e2 == "string" && e2[0] === `
` && a2.push(Oa), e2 !== null && a2.push(u2(C("" + e2))), null;
        case "input":
          a2.push(M2("input")), m2 = r2 = h2 = e2 = null;
          for (g2 in c2)
            if (x2.call(c2, g2) && (q = c2[g2], q != null))
              switch (g2) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(399, "input"));
                case "defaultChecked":
                  m2 = q;
                  break;
                case "defaultValue":
                  h2 = q;
                  break;
                case "checked":
                  r2 = q;
                  break;
                case "value":
                  e2 = q;
                  break;
                default:
                  J(a2, d2, g2, q);
              }
          return r2 !== null ? J(
            a2,
            d2,
            "checked",
            r2
          ) : m2 !== null && J(a2, d2, "checked", m2), e2 !== null ? J(a2, d2, "value", e2) : h2 !== null && J(a2, d2, "value", h2), a2.push(Ka), null;
        case "menuitem":
          a2.push(M2("menuitem"));
          for (var A in c2)
            if (x2.call(c2, A) && (e2 = c2[A], e2 != null))
              switch (A) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(400));
                default:
                  J(a2, d2, A, e2);
              }
          return a2.push(K), null;
        case "title":
          a2.push(M2("title")), e2 = null;
          for (v2 in c2)
            if (x2.call(c2, v2) && (g2 = c2[v2], g2 != null))
              switch (v2) {
                case "children":
                  e2 = g2;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(k(434));
                default:
                  J(a2, d2, v2, g2);
              }
          return a2.push(K), e2;
        case "listing":
        case "pre":
          a2.push(M2(b2)), g2 = e2 = null;
          for (m2 in c2)
            if (x2.call(c2, m2) && (h2 = c2[m2], h2 != null))
              switch (m2) {
                case "children":
                  e2 = h2;
                  break;
                case "dangerouslySetInnerHTML":
                  g2 = h2;
                  break;
                default:
                  J(a2, d2, m2, h2);
              }
          if (a2.push(K), g2 != null) {
            if (e2 != null)
              throw Error(k(60));
            if (typeof g2 != "object" || !("__html" in g2))
              throw Error(k(61));
            c2 = g2.__html, c2 != null && (typeof c2 == "string" && 0 < c2.length && c2[0] === `
` ? a2.push(Oa, u2(c2)) : a2.push(u2("" + c2)));
          }
          return typeof e2 == "string" && e2[0] === `
` && a2.push(Oa), e2;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a2.push(M2(b2));
          for (var F in c2)
            if (x2.call(c2, F) && (e2 = c2[F], e2 != null))
              switch (F) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(399, b2));
                default:
                  J(a2, d2, F, e2);
              }
          return a2.push(Ka), null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Na(a2, c2, b2, d2);
        case "html":
          return f2.insertionMode === 0 && a2.push(Ra), Na(a2, c2, b2, d2);
        default:
          if (b2.indexOf("-") === -1 && typeof c2.is != "string")
            return Na(a2, c2, b2, d2);
          a2.push(M2(b2)), g2 = e2 = null;
          for (q in c2)
            if (x2.call(c2, q) && (h2 = c2[q], h2 != null))
              switch (q) {
                case "children":
                  e2 = h2;
                  break;
                case "dangerouslySetInnerHTML":
                  g2 = h2;
                  break;
                case "style":
                  Ia(a2, d2, h2);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  ia(q) && typeof h2 != "function" && typeof h2 != "symbol" && a2.push(H2, u2(q), I, u2(C(h2)), E);
              }
          return a2.push(K), L(a2, g2, e2), e2;
      }
    }
    var Ta = w2("</"), Ua = w2(">"), Va = w2('<template id="'), Wa = w2('"></template>'), Xa = w2("<!--$-->"), Ya = w2('<!--$?--><template id="'), Za = w2('"></template>'), $a = w2("<!--$!-->"), ab = w2("<!--/$-->"), bb = w2("<template"), cb = w2('"'), db = w2(' data-dgst="');
    w2(' data-msg="');
    w2(' data-stck="');
    var eb = w2("></template>");
    function fb(a2, b2, c2) {
      if (p2(a2, Ya), c2 === null)
        throw Error(k(395));
      return p2(a2, c2), t2(a2, Za);
    }
    var gb = w2('<div hidden id="'), hb = w2('">'), ib = w2("</div>"), jb = w2('<svg aria-hidden="true" style="display:none" id="'), kb = w2('">'), lb = w2("</svg>"), mb = w2('<math aria-hidden="true" style="display:none" id="'), nb = w2('">'), ob = w2("</math>"), pb = w2('<table hidden id="'), qb = w2('">'), rb = w2("</table>"), sb = w2('<table hidden><tbody id="'), tb = w2('">'), ub = w2("</tbody></table>"), vb = w2('<table hidden><tr id="'), wb = w2('">'), xb = w2("</tr></table>"), yb = w2('<table hidden><colgroup id="'), zb = w2('">'), Ab = w2("</colgroup></table>");
    function Bb(a2, b2, c2, d2) {
      switch (c2.insertionMode) {
        case 0:
        case 1:
          return p2(a2, gb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, hb);
        case 2:
          return p2(a2, jb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, kb);
        case 3:
          return p2(a2, mb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, nb);
        case 4:
          return p2(a2, pb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, qb);
        case 5:
          return p2(a2, sb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, tb);
        case 6:
          return p2(a2, vb), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, wb);
        case 7:
          return p2(
            a2,
            yb
          ), p2(a2, b2.segmentPrefix), p2(a2, u2(d2.toString(16))), t2(a2, zb);
        default:
          throw Error(k(397));
      }
    }
    function Cb(a2, b2) {
      switch (b2.insertionMode) {
        case 0:
        case 1:
          return t2(a2, ib);
        case 2:
          return t2(a2, lb);
        case 3:
          return t2(a2, ob);
        case 4:
          return t2(a2, rb);
        case 5:
          return t2(a2, ub);
        case 6:
          return t2(a2, xb);
        case 7:
          return t2(a2, Ab);
        default:
          throw Error(k(397));
      }
    }
    var Db = w2('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Eb = w2('$RS("'), Gb = w2('","'), Hb = w2('")</script>'), Ib = w2('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Jb = w2('$RC("'), Kb = w2('","'), Lb = w2('")</script>'), Mb = w2('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Nb = w2('$RX("'), Ob = w2('"'), Pb = w2(")</script>"), Qb = w2(","), Rb = /[<\u2028\u2029]/g;
    function Sb(a2) {
      return JSON.stringify(a2).replace(Rb, function(a3) {
        switch (a3) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var N2 = Object.assign, Tb = Symbol.for("react.element"), Ub = Symbol.for("react.portal"), Vb = Symbol.for("react.fragment"), Wb = Symbol.for("react.strict_mode"), Xb = Symbol.for("react.profiler"), Yb = Symbol.for("react.provider"), Zb = Symbol.for("react.context"), $b = Symbol.for("react.forward_ref"), ac = Symbol.for("react.suspense"), bc = Symbol.for("react.suspense_list"), cc = Symbol.for("react.memo"), dc = Symbol.for("react.lazy"), ec = Symbol.for("react.scope"), fc = Symbol.for("react.debug_trace_mode"), gc = Symbol.for("react.legacy_hidden"), hc = Symbol.for("react.default_value"), ic = Symbol.iterator;
    function jc(a2) {
      if (a2 == null)
        return null;
      if (typeof a2 == "function")
        return a2.displayName || a2.name || null;
      if (typeof a2 == "string")
        return a2;
      switch (a2) {
        case Vb:
          return "Fragment";
        case Ub:
          return "Portal";
        case Xb:
          return "Profiler";
        case Wb:
          return "StrictMode";
        case ac:
          return "Suspense";
        case bc:
          return "SuspenseList";
      }
      if (typeof a2 == "object")
        switch (a2.$$typeof) {
          case Zb:
            return (a2.displayName || "Context") + ".Consumer";
          case Yb:
            return (a2._context.displayName || "Context") + ".Provider";
          case $b:
            var b2 = a2.render;
            return a2 = a2.displayName, a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef"), a2;
          case cc:
            return b2 = a2.displayName || null, b2 !== null ? b2 : jc(a2.type) || "Memo";
          case dc:
            b2 = a2._payload, a2 = a2._init;
            try {
              return jc(a2(b2));
            } catch {
            }
        }
      return null;
    }
    var kc = {};
    function lc(a2, b2) {
      if (a2 = a2.contextTypes, !a2)
        return kc;
      var c2 = {}, d2;
      for (d2 in a2)
        c2[d2] = b2[d2];
      return c2;
    }
    var O = null;
    function P(a2, b2) {
      if (a2 !== b2) {
        a2.context._currentValue = a2.parentValue, a2 = a2.parent;
        var c2 = b2.parent;
        if (a2 === null) {
          if (c2 !== null)
            throw Error(k(401));
        } else {
          if (c2 === null)
            throw Error(k(401));
          P(a2, c2);
        }
        b2.context._currentValue = b2.value;
      }
    }
    function mc(a2) {
      a2.context._currentValue = a2.parentValue, a2 = a2.parent, a2 !== null && mc(a2);
    }
    function nc(a2) {
      var b2 = a2.parent;
      b2 !== null && nc(b2), a2.context._currentValue = a2.value;
    }
    function oc(a2, b2) {
      if (a2.context._currentValue = a2.parentValue, a2 = a2.parent, a2 === null)
        throw Error(k(402));
      a2.depth === b2.depth ? P(a2, b2) : oc(a2, b2);
    }
    function pc(a2, b2) {
      var c2 = b2.parent;
      if (c2 === null)
        throw Error(k(402));
      a2.depth === c2.depth ? P(a2, c2) : pc(a2, c2), b2.context._currentValue = b2.value;
    }
    function Q(a2) {
      var b2 = O;
      b2 !== a2 && (b2 === null ? nc(a2) : a2 === null ? mc(b2) : b2.depth === a2.depth ? P(b2, a2) : b2.depth > a2.depth ? oc(b2, a2) : pc(b2, a2), O = a2);
    }
    var qc = { isMounted: function() {
      return !1;
    }, enqueueSetState: function(a2, b2) {
      a2 = a2._reactInternals, a2.queue !== null && a2.queue.push(b2);
    }, enqueueReplaceState: function(a2, b2) {
      a2 = a2._reactInternals, a2.replace = !0, a2.queue = [b2];
    }, enqueueForceUpdate: function() {
    } };
    function rc(a2, b2, c2, d2) {
      var f2 = a2.state !== void 0 ? a2.state : null;
      a2.updater = qc, a2.props = c2, a2.state = f2;
      var e2 = { queue: [], replace: !1 };
      a2._reactInternals = e2;
      var g2 = b2.contextType;
      if (a2.context = typeof g2 == "object" && g2 !== null ? g2._currentValue : d2, g2 = b2.getDerivedStateFromProps, typeof g2 == "function" && (g2 = g2(c2, f2), f2 = g2 == null ? f2 : N2({}, f2, g2), a2.state = f2), typeof b2.getDerivedStateFromProps != "function" && typeof a2.getSnapshotBeforeUpdate != "function" && (typeof a2.UNSAFE_componentWillMount == "function" || typeof a2.componentWillMount == "function"))
        if (b2 = a2.state, typeof a2.componentWillMount == "function" && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount == "function" && a2.UNSAFE_componentWillMount(), b2 !== a2.state && qc.enqueueReplaceState(a2, a2.state, null), e2.queue !== null && 0 < e2.queue.length)
          if (b2 = e2.queue, g2 = e2.replace, e2.queue = null, e2.replace = !1, g2 && b2.length === 1)
            a2.state = b2[0];
          else {
            for (e2 = g2 ? b2[0] : a2.state, f2 = !0, g2 = g2 ? 1 : 0; g2 < b2.length; g2++) {
              var h2 = b2[g2];
              h2 = typeof h2 == "function" ? h2.call(a2, e2, c2, d2) : h2, h2 != null && (f2 ? (f2 = !1, e2 = N2({}, e2, h2)) : N2(e2, h2));
            }
            a2.state = e2;
          }
        else
          e2.queue = null;
    }
    var sc = { id: 1, overflow: "" };
    function tc(a2, b2, c2) {
      var d2 = a2.id;
      a2 = a2.overflow;
      var f2 = 32 - uc(d2) - 1;
      d2 &= ~(1 << f2), c2 += 1;
      var e2 = 32 - uc(b2) + f2;
      if (30 < e2) {
        var g2 = f2 - f2 % 5;
        return e2 = (d2 & (1 << g2) - 1).toString(32), d2 >>= g2, f2 -= g2, { id: 1 << 32 - uc(b2) + f2 | c2 << f2 | d2, overflow: e2 + a2 };
      }
      return { id: 1 << e2 | c2 << f2 | d2, overflow: a2 };
    }
    var uc = Math.clz32 ? Math.clz32 : vc, wc = Math.log, xc = Math.LN2;
    function vc(a2) {
      return a2 >>>= 0, a2 === 0 ? 32 : 31 - (wc(a2) / xc | 0) | 0;
    }
    function yc(a2, b2) {
      return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var zc = typeof Object.is == "function" ? Object.is : yc, R = null, Ac = null, Bc = null, S = null, T = !1, Cc = !1, U = 0, V = null, Dc = 0;
    function W() {
      if (R === null)
        throw Error(k(321));
      return R;
    }
    function Ec() {
      if (0 < Dc)
        throw Error(k(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function Fc() {
      return S === null ? Bc === null ? (T = !1, Bc = S = Ec()) : (T = !0, S = Bc) : S.next === null ? (T = !1, S = S.next = Ec()) : (T = !0, S = S.next), S;
    }
    function Gc() {
      Ac = R = null, Cc = !1, Bc = null, Dc = 0, S = V = null;
    }
    function Hc(a2, b2) {
      return typeof b2 == "function" ? b2(a2) : b2;
    }
    function Ic(a2, b2, c2) {
      if (R = W(), S = Fc(), T) {
        var d2 = S.queue;
        if (b2 = d2.dispatch, V !== null && (c2 = V.get(d2), c2 !== void 0)) {
          V.delete(d2), d2 = S.memoizedState;
          do
            d2 = a2(d2, c2.action), c2 = c2.next;
          while (c2 !== null);
          return S.memoizedState = d2, [d2, b2];
        }
        return [S.memoizedState, b2];
      }
      return a2 = a2 === Hc ? typeof b2 == "function" ? b2() : b2 : c2 !== void 0 ? c2(b2) : b2, S.memoizedState = a2, a2 = S.queue = { last: null, dispatch: null }, a2 = a2.dispatch = Jc.bind(null, R, a2), [S.memoizedState, a2];
    }
    function Kc(a2, b2) {
      if (R = W(), S = Fc(), b2 = b2 === void 0 ? null : b2, S !== null) {
        var c2 = S.memoizedState;
        if (c2 !== null && b2 !== null) {
          var d2 = c2[1];
          a:
            if (d2 === null)
              d2 = !1;
            else {
              for (var f2 = 0; f2 < d2.length && f2 < b2.length; f2++)
                if (!zc(b2[f2], d2[f2])) {
                  d2 = !1;
                  break a;
                }
              d2 = !0;
            }
          if (d2)
            return c2[0];
        }
      }
      return a2 = a2(), S.memoizedState = [a2, b2], a2;
    }
    function Jc(a2, b2, c2) {
      if (25 <= Dc)
        throw Error(k(301));
      if (a2 === R)
        if (Cc = !0, a2 = { action: c2, next: null }, V === null && (V = /* @__PURE__ */ new Map()), c2 = V.get(b2), c2 === void 0)
          V.set(b2, a2);
        else {
          for (b2 = c2; b2.next !== null; )
            b2 = b2.next;
          b2.next = a2;
        }
    }
    function Lc() {
      throw Error(k(394));
    }
    function Mc() {
    }
    var Oc = { readContext: function(a2) {
      return a2._currentValue;
    }, useContext: function(a2) {
      return W(), a2._currentValue;
    }, useMemo: Kc, useReducer: Ic, useRef: function(a2) {
      R = W(), S = Fc();
      var b2 = S.memoizedState;
      return b2 === null ? (a2 = { current: a2 }, S.memoizedState = a2) : b2;
    }, useState: function(a2) {
      return Ic(Hc, a2);
    }, useInsertionEffect: Mc, useLayoutEffect: function() {
    }, useCallback: function(a2, b2) {
      return Kc(function() {
        return a2;
      }, b2);
    }, useImperativeHandle: Mc, useEffect: Mc, useDebugValue: Mc, useDeferredValue: function(a2) {
      return W(), a2;
    }, useTransition: function() {
      return W(), [!1, Lc];
    }, useId: function() {
      var a2 = Ac.treeContext, b2 = a2.overflow;
      a2 = a2.id, a2 = (a2 & ~(1 << 32 - uc(a2) - 1)).toString(32) + b2;
      var c2 = Nc;
      if (c2 === null)
        throw Error(k(404));
      return b2 = U++, a2 = ":" + c2.idPrefix + "R" + a2, 0 < b2 && (a2 += "H" + b2.toString(32)), a2 + ":";
    }, useMutableSource: function(a2, b2) {
      return W(), b2(a2._source);
    }, useSyncExternalStore: function(a2, b2, c2) {
      if (c2 === void 0)
        throw Error(k(407));
      return c2();
    } }, Nc = null, Pc = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Qc(a2) {
      return console.error(a2), null;
    }
    function X() {
    }
    function Rc(a2, b2, c2, d2, f2, e2, g2, h2, m2) {
      var q = [], r2 = /* @__PURE__ */ new Set();
      return b2 = { destination: null, responseState: b2, progressiveChunkSize: d2 === void 0 ? 12800 : d2, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: r2, pingedTasks: q, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f2 === void 0 ? Qc : f2, onAllReady: e2 === void 0 ? X : e2, onShellReady: g2 === void 0 ? X : g2, onShellError: h2 === void 0 ? X : h2, onFatalError: m2 === void 0 ? X : m2 }, c2 = Sc(b2, 0, null, c2, !1, !1), c2.parentFlushed = !0, a2 = Tc(b2, a2, null, c2, r2, kc, null, sc), q.push(a2), b2;
    }
    function Tc(a2, b2, c2, d2, f2, e2, g2, h2) {
      a2.allPendingTasks++, c2 === null ? a2.pendingRootTasks++ : c2.pendingTasks++;
      var m2 = { node: b2, ping: function() {
        var b3 = a2.pingedTasks;
        b3.push(m2), b3.length === 1 && Uc(a2);
      }, blockedBoundary: c2, blockedSegment: d2, abortSet: f2, legacyContext: e2, context: g2, treeContext: h2 };
      return f2.add(m2), m2;
    }
    function Sc(a2, b2, c2, d2, f2, e2) {
      return { status: 0, id: -1, index: b2, parentFlushed: !1, chunks: [], children: [], formatContext: d2, boundary: c2, lastPushedText: f2, textEmbedded: e2 };
    }
    function Y(a2, b2) {
      if (a2 = a2.onError(b2), a2 != null && typeof a2 != "string")
        throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a2 + '" instead');
      return a2;
    }
    function Vc(a2, b2) {
      var c2 = a2.onShellError;
      c2(b2), c2 = a2.onFatalError, c2(b2), a2.destination !== null ? (a2.status = 2, da(a2.destination, b2)) : (a2.status = 1, a2.fatalError = b2);
    }
    function Wc(a2, b2, c2, d2, f2) {
      for (R = {}, Ac = b2, U = 0, a2 = c2(d2, f2); Cc; )
        Cc = !1, U = 0, Dc += 1, S = null, a2 = c2(d2, f2);
      return Gc(), a2;
    }
    function Xc(a2, b2, c2, d2) {
      var f2 = c2.render(), e2 = d2.childContextTypes;
      if (e2 != null) {
        var g2 = b2.legacyContext;
        if (typeof c2.getChildContext != "function")
          d2 = g2;
        else {
          c2 = c2.getChildContext();
          for (var h2 in c2)
            if (!(h2 in e2))
              throw Error(k(108, jc(d2) || "Unknown", h2));
          d2 = N2({}, g2, c2);
        }
        b2.legacyContext = d2, Z(a2, b2, f2), b2.legacyContext = g2;
      } else
        Z(a2, b2, f2);
    }
    function Yc(a2, b2) {
      if (a2 && a2.defaultProps) {
        b2 = N2({}, b2), a2 = a2.defaultProps;
        for (var c2 in a2)
          b2[c2] === void 0 && (b2[c2] = a2[c2]);
        return b2;
      }
      return b2;
    }
    function Zc(a2, b2, c2, d2, f2) {
      if (typeof c2 == "function")
        if (c2.prototype && c2.prototype.isReactComponent) {
          f2 = lc(c2, b2.legacyContext);
          var e2 = c2.contextType;
          e2 = new c2(d2, typeof e2 == "object" && e2 !== null ? e2._currentValue : f2), rc(e2, c2, d2, f2), Xc(a2, b2, e2, c2);
        } else {
          e2 = lc(c2, b2.legacyContext), f2 = Wc(a2, b2, c2, d2, e2);
          var g2 = U !== 0;
          if (typeof f2 == "object" && f2 !== null && typeof f2.render == "function" && f2.$$typeof === void 0)
            rc(f2, c2, d2, e2), Xc(a2, b2, f2, c2);
          else if (g2) {
            d2 = b2.treeContext, b2.treeContext = tc(d2, 1, 0);
            try {
              Z(a2, b2, f2);
            } finally {
              b2.treeContext = d2;
            }
          } else
            Z(a2, b2, f2);
        }
      else if (typeof c2 == "string") {
        switch (f2 = b2.blockedSegment, e2 = Sa(f2.chunks, c2, d2, a2.responseState, f2.formatContext), f2.lastPushedText = !1, g2 = f2.formatContext, f2.formatContext = Ba(g2, c2, d2), $c(a2, b2, e2), f2.formatContext = g2, c2) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f2.chunks.push(Ta, u2(c2), Ua);
        }
        f2.lastPushedText = !1;
      } else {
        switch (c2) {
          case gc:
          case fc:
          case Wb:
          case Xb:
          case Vb:
            Z(a2, b2, d2.children);
            return;
          case bc:
            Z(a2, b2, d2.children);
            return;
          case ec:
            throw Error(k(343));
          case ac:
            a: {
              c2 = b2.blockedBoundary, f2 = b2.blockedSegment, e2 = d2.fallback, d2 = d2.children, g2 = /* @__PURE__ */ new Set();
              var h2 = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g2, errorDigest: null }, m2 = Sc(a2, f2.chunks.length, h2, f2.formatContext, !1, !1);
              f2.children.push(m2), f2.lastPushedText = !1;
              var q = Sc(a2, 0, null, f2.formatContext, !1, !1);
              q.parentFlushed = !0, b2.blockedBoundary = h2, b2.blockedSegment = q;
              try {
                if ($c(
                  a2,
                  b2,
                  d2
                ), q.lastPushedText && q.textEmbedded && q.chunks.push(Ca), q.status = 1, ad(h2, q), h2.pendingTasks === 0)
                  break a;
              } catch (r2) {
                q.status = 4, h2.forceClientRender = !0, h2.errorDigest = Y(a2, r2);
              } finally {
                b2.blockedBoundary = c2, b2.blockedSegment = f2;
              }
              b2 = Tc(a2, e2, c2, m2, g2, b2.legacyContext, b2.context, b2.treeContext), a2.pingedTasks.push(b2);
            }
            return;
        }
        if (typeof c2 == "object" && c2 !== null)
          switch (c2.$$typeof) {
            case $b:
              if (d2 = Wc(a2, b2, c2.render, d2, f2), U !== 0) {
                c2 = b2.treeContext, b2.treeContext = tc(c2, 1, 0);
                try {
                  Z(a2, b2, d2);
                } finally {
                  b2.treeContext = c2;
                }
              } else
                Z(a2, b2, d2);
              return;
            case cc:
              c2 = c2.type, d2 = Yc(c2, d2), Zc(a2, b2, c2, d2, f2);
              return;
            case Yb:
              if (f2 = d2.children, c2 = c2._context, d2 = d2.value, e2 = c2._currentValue, c2._currentValue = d2, g2 = O, O = d2 = { parent: g2, depth: g2 === null ? 0 : g2.depth + 1, context: c2, parentValue: e2, value: d2 }, b2.context = d2, Z(a2, b2, f2), a2 = O, a2 === null)
                throw Error(k(403));
              d2 = a2.parentValue, a2.context._currentValue = d2 === hc ? a2.context._defaultValue : d2, a2 = O = a2.parent, b2.context = a2;
              return;
            case Zb:
              d2 = d2.children, d2 = d2(c2._currentValue), Z(a2, b2, d2);
              return;
            case dc:
              f2 = c2._init, c2 = f2(c2._payload), d2 = Yc(c2, d2), Zc(a2, b2, c2, d2, void 0);
              return;
          }
        throw Error(k(
          130,
          c2 == null ? c2 : typeof c2,
          ""
        ));
      }
    }
    function Z(a2, b2, c2) {
      if (b2.node = c2, typeof c2 == "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case Tb:
            Zc(a2, b2, c2.type, c2.props, c2.ref);
            return;
          case Ub:
            throw Error(k(257));
          case dc:
            var d2 = c2._init;
            c2 = d2(c2._payload), Z(a2, b2, c2);
            return;
        }
        if (ra(c2)) {
          bd(a2, b2, c2);
          return;
        }
        if (c2 === null || typeof c2 != "object" ? d2 = null : (d2 = ic && c2[ic] || c2["@@iterator"], d2 = typeof d2 == "function" ? d2 : null), d2 && (d2 = d2.call(c2))) {
          if (c2 = d2.next(), !c2.done) {
            var f2 = [];
            do
              f2.push(c2.value), c2 = d2.next();
            while (!c2.done);
            bd(a2, b2, f2);
          }
          return;
        }
        throw a2 = Object.prototype.toString.call(c2), Error(k(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(c2).join(", ") + "}" : a2));
      }
      typeof c2 == "string" ? (d2 = b2.blockedSegment, d2.lastPushedText = Da(b2.blockedSegment.chunks, c2, a2.responseState, d2.lastPushedText)) : typeof c2 == "number" && (d2 = b2.blockedSegment, d2.lastPushedText = Da(b2.blockedSegment.chunks, "" + c2, a2.responseState, d2.lastPushedText));
    }
    function bd(a2, b2, c2) {
      for (var d2 = c2.length, f2 = 0; f2 < d2; f2++) {
        var e2 = b2.treeContext;
        b2.treeContext = tc(e2, d2, f2);
        try {
          $c(a2, b2, c2[f2]);
        } finally {
          b2.treeContext = e2;
        }
      }
    }
    function $c(a2, b2, c2) {
      var d2 = b2.blockedSegment.formatContext, f2 = b2.legacyContext, e2 = b2.context;
      try {
        return Z(a2, b2, c2);
      } catch (m2) {
        if (Gc(), typeof m2 == "object" && m2 !== null && typeof m2.then == "function") {
          c2 = m2;
          var g2 = b2.blockedSegment, h2 = Sc(a2, g2.chunks.length, null, g2.formatContext, g2.lastPushedText, !0);
          g2.children.push(h2), g2.lastPushedText = !1, a2 = Tc(a2, b2.node, b2.blockedBoundary, h2, b2.abortSet, b2.legacyContext, b2.context, b2.treeContext).ping, c2.then(a2, a2), b2.blockedSegment.formatContext = d2, b2.legacyContext = f2, b2.context = e2, Q(e2);
        } else
          throw b2.blockedSegment.formatContext = d2, b2.legacyContext = f2, b2.context = e2, Q(e2), m2;
      }
    }
    function cd(a2) {
      var b2 = a2.blockedBoundary;
      a2 = a2.blockedSegment, a2.status = 3, dd(this, b2, a2);
    }
    function ed(a2, b2, c2) {
      var d2 = a2.blockedBoundary;
      a2.blockedSegment.status = 3, d2 === null ? (b2.allPendingTasks--, b2.status !== 2 && (b2.status = 2, b2.destination !== null && b2.destination.close())) : (d2.pendingTasks--, d2.forceClientRender || (d2.forceClientRender = !0, a2 = c2 === void 0 ? Error(k(432)) : c2, d2.errorDigest = b2.onError(a2), d2.parentFlushed && b2.clientRenderedBoundaries.push(d2)), d2.fallbackAbortableTasks.forEach(function(a3) {
        return ed(a3, b2, c2);
      }), d2.fallbackAbortableTasks.clear(), b2.allPendingTasks--, b2.allPendingTasks === 0 && (d2 = b2.onAllReady, d2()));
    }
    function ad(a2, b2) {
      if (b2.chunks.length === 0 && b2.children.length === 1 && b2.children[0].boundary === null) {
        var c2 = b2.children[0];
        c2.id = b2.id, c2.parentFlushed = !0, c2.status === 1 && ad(a2, c2);
      } else
        a2.completedSegments.push(b2);
    }
    function dd(a2, b2, c2) {
      if (b2 === null) {
        if (c2.parentFlushed) {
          if (a2.completedRootSegment !== null)
            throw Error(k(389));
          a2.completedRootSegment = c2;
        }
        a2.pendingRootTasks--, a2.pendingRootTasks === 0 && (a2.onShellError = X, b2 = a2.onShellReady, b2());
      } else
        b2.pendingTasks--, b2.forceClientRender || (b2.pendingTasks === 0 ? (c2.parentFlushed && c2.status === 1 && ad(b2, c2), b2.parentFlushed && a2.completedBoundaries.push(b2), b2.fallbackAbortableTasks.forEach(cd, a2), b2.fallbackAbortableTasks.clear()) : c2.parentFlushed && c2.status === 1 && (ad(b2, c2), b2.completedSegments.length === 1 && b2.parentFlushed && a2.partialBoundaries.push(b2)));
      a2.allPendingTasks--, a2.allPendingTasks === 0 && (a2 = a2.onAllReady, a2());
    }
    function Uc(a2) {
      if (a2.status !== 2) {
        var b2 = O, c2 = Pc.current;
        Pc.current = Oc;
        var d2 = Nc;
        Nc = a2.responseState;
        try {
          var f2 = a2.pingedTasks, e2;
          for (e2 = 0; e2 < f2.length; e2++) {
            var g2 = f2[e2], h2 = a2, m2 = g2.blockedSegment;
            if (m2.status === 0) {
              Q(g2.context);
              try {
                Z(h2, g2, g2.node), m2.lastPushedText && m2.textEmbedded && m2.chunks.push(Ca), g2.abortSet.delete(g2), m2.status = 1, dd(h2, g2.blockedBoundary, m2);
              } catch (G) {
                if (Gc(), typeof G == "object" && G !== null && typeof G.then == "function") {
                  var q = g2.ping;
                  G.then(q, q);
                } else {
                  g2.abortSet.delete(g2), m2.status = 4;
                  var r2 = g2.blockedBoundary, v2 = G, A = Y(h2, v2);
                  if (r2 === null ? Vc(h2, v2) : (r2.pendingTasks--, r2.forceClientRender || (r2.forceClientRender = !0, r2.errorDigest = A, r2.parentFlushed && h2.clientRenderedBoundaries.push(r2))), h2.allPendingTasks--, h2.allPendingTasks === 0) {
                    var F = h2.onAllReady;
                    F();
                  }
                }
              } finally {
              }
            }
          }
          f2.splice(0, e2), a2.destination !== null && fd(a2, a2.destination);
        } catch (G) {
          Y(a2, G), Vc(a2, G);
        } finally {
          Nc = d2, Pc.current = c2, c2 === Oc && Q(b2);
        }
      }
    }
    function gd(a2, b2, c2) {
      switch (c2.parentFlushed = !0, c2.status) {
        case 0:
          var d2 = c2.id = a2.nextSegmentId++;
          return c2.lastPushedText = !1, c2.textEmbedded = !1, a2 = a2.responseState, p2(b2, Va), p2(b2, a2.placeholderPrefix), a2 = u2(d2.toString(16)), p2(b2, a2), t2(b2, Wa);
        case 1:
          c2.status = 2;
          var f2 = !0;
          d2 = c2.chunks;
          var e2 = 0;
          c2 = c2.children;
          for (var g2 = 0; g2 < c2.length; g2++) {
            for (f2 = c2[g2]; e2 < f2.index; e2++)
              p2(b2, d2[e2]);
            f2 = hd(a2, b2, f2);
          }
          for (; e2 < d2.length - 1; e2++)
            p2(b2, d2[e2]);
          return e2 < d2.length && (f2 = t2(b2, d2[e2])), f2;
        default:
          throw Error(k(390));
      }
    }
    function hd(a2, b2, c2) {
      var d2 = c2.boundary;
      if (d2 === null)
        return gd(a2, b2, c2);
      if (d2.parentFlushed = !0, d2.forceClientRender)
        d2 = d2.errorDigest, t2(b2, $a), p2(b2, bb), d2 && (p2(b2, db), p2(b2, u2(C(d2))), p2(b2, cb)), t2(b2, eb), gd(a2, b2, c2);
      else if (0 < d2.pendingTasks) {
        d2.rootSegmentID = a2.nextSegmentId++, 0 < d2.completedSegments.length && a2.partialBoundaries.push(d2);
        var f2 = a2.responseState, e2 = f2.nextSuspenseID++;
        f2 = w2(f2.boundaryPrefix + e2.toString(16)), d2 = d2.id = f2, fb(b2, a2.responseState, d2), gd(a2, b2, c2);
      } else if (d2.byteSize > a2.progressiveChunkSize)
        d2.rootSegmentID = a2.nextSegmentId++, a2.completedBoundaries.push(d2), fb(b2, a2.responseState, d2.id), gd(a2, b2, c2);
      else {
        if (t2(b2, Xa), c2 = d2.completedSegments, c2.length !== 1)
          throw Error(k(391));
        hd(a2, b2, c2[0]);
      }
      return t2(b2, ab);
    }
    function id(a2, b2, c2) {
      return Bb(b2, a2.responseState, c2.formatContext, c2.id), hd(a2, b2, c2), Cb(b2, c2.formatContext);
    }
    function jd(a2, b2, c2) {
      for (var d2 = c2.completedSegments, f2 = 0; f2 < d2.length; f2++)
        kd(a2, b2, c2, d2[f2]);
      if (d2.length = 0, a2 = a2.responseState, d2 = c2.id, c2 = c2.rootSegmentID, p2(b2, a2.startInlineScript), a2.sentCompleteBoundaryFunction ? p2(b2, Jb) : (a2.sentCompleteBoundaryFunction = !0, p2(b2, Ib)), d2 === null)
        throw Error(k(395));
      return c2 = u2(c2.toString(16)), p2(b2, d2), p2(b2, Kb), p2(b2, a2.segmentPrefix), p2(b2, c2), t2(b2, Lb);
    }
    function kd(a2, b2, c2, d2) {
      if (d2.status === 2)
        return !0;
      var f2 = d2.id;
      if (f2 === -1) {
        if ((d2.id = c2.rootSegmentID) === -1)
          throw Error(k(392));
        return id(a2, b2, d2);
      }
      return id(a2, b2, d2), a2 = a2.responseState, p2(b2, a2.startInlineScript), a2.sentCompleteSegmentFunction ? p2(b2, Eb) : (a2.sentCompleteSegmentFunction = !0, p2(b2, Db)), p2(b2, a2.segmentPrefix), f2 = u2(f2.toString(16)), p2(b2, f2), p2(b2, Gb), p2(b2, a2.placeholderPrefix), p2(b2, f2), t2(b2, Hb);
    }
    function fd(a2, b2) {
      l2 = new Uint8Array(512), n2 = 0;
      try {
        var c2 = a2.completedRootSegment;
        if (c2 !== null && a2.pendingRootTasks === 0) {
          hd(a2, b2, c2), a2.completedRootSegment = null;
          var d2 = a2.responseState.bootstrapChunks;
          for (c2 = 0; c2 < d2.length - 1; c2++)
            p2(b2, d2[c2]);
          c2 < d2.length && t2(b2, d2[c2]);
        }
        var f2 = a2.clientRenderedBoundaries, e2;
        for (e2 = 0; e2 < f2.length; e2++) {
          var g2 = f2[e2];
          d2 = b2;
          var h2 = a2.responseState, m2 = g2.id, q = g2.errorDigest, r2 = g2.errorMessage, v2 = g2.errorComponentStack;
          if (p2(d2, h2.startInlineScript), h2.sentClientRenderFunction ? p2(d2, Nb) : (h2.sentClientRenderFunction = !0, p2(
            d2,
            Mb
          )), m2 === null)
            throw Error(k(395));
          if (p2(d2, m2), p2(d2, Ob), (q || r2 || v2) && (p2(d2, Qb), p2(d2, u2(Sb(q || "")))), (r2 || v2) && (p2(d2, Qb), p2(d2, u2(Sb(r2 || "")))), v2 && (p2(d2, Qb), p2(d2, u2(Sb(v2)))), !t2(d2, Pb)) {
            a2.destination = null, e2++, f2.splice(0, e2);
            return;
          }
        }
        f2.splice(0, e2);
        var A = a2.completedBoundaries;
        for (e2 = 0; e2 < A.length; e2++)
          if (!jd(a2, b2, A[e2])) {
            a2.destination = null, e2++, A.splice(0, e2);
            return;
          }
        A.splice(0, e2), ba(b2), l2 = new Uint8Array(512), n2 = 0;
        var F = a2.partialBoundaries;
        for (e2 = 0; e2 < F.length; e2++) {
          var G = F[e2];
          a: {
            f2 = a2, g2 = b2;
            var ma = G.completedSegments;
            for (h2 = 0; h2 < ma.length; h2++)
              if (!kd(
                f2,
                g2,
                G,
                ma[h2]
              )) {
                h2++, ma.splice(0, h2);
                var Fb = !1;
                break a;
              }
            ma.splice(0, h2), Fb = !0;
          }
          if (!Fb) {
            a2.destination = null, e2++, F.splice(0, e2);
            return;
          }
        }
        F.splice(0, e2);
        var na = a2.completedBoundaries;
        for (e2 = 0; e2 < na.length; e2++)
          if (!jd(a2, b2, na[e2])) {
            a2.destination = null, e2++, na.splice(0, e2);
            return;
          }
        na.splice(0, e2);
      } finally {
        ba(b2), a2.allPendingTasks === 0 && a2.pingedTasks.length === 0 && a2.clientRenderedBoundaries.length === 0 && a2.completedBoundaries.length === 0 && b2.close();
      }
    }
    function ld(a2, b2) {
      try {
        var c2 = a2.abortableTasks;
        c2.forEach(function(c3) {
          return ed(c3, a2, b2);
        }), c2.clear(), a2.destination !== null && fd(a2, a2.destination);
      } catch (d2) {
        Y(a2, d2), Vc(a2, d2);
      }
    }
    exports.renderToReadableStream = function(a2, b2) {
      return new Promise(function(c2, d2) {
        var f2, e2, g2 = new Promise(function(a3, b3) {
          e2 = a3, f2 = b3;
        }), h2 = Rc(a2, za(b2 ? b2.identifierPrefix : void 0, b2 ? b2.nonce : void 0, b2 ? b2.bootstrapScriptContent : void 0, b2 ? b2.bootstrapScripts : void 0, b2 ? b2.bootstrapModules : void 0), Aa(b2 ? b2.namespaceURI : void 0), b2 ? b2.progressiveChunkSize : void 0, b2 ? b2.onError : void 0, e2, function() {
          var a3 = new ReadableStream({ type: "bytes", pull: function(a4) {
            if (h2.status === 1)
              h2.status = 2, da(a4, h2.fatalError);
            else if (h2.status !== 2 && h2.destination === null) {
              h2.destination = a4;
              try {
                fd(h2, a4);
              } catch (A) {
                Y(h2, A), Vc(h2, A);
              }
            }
          }, cancel: function() {
            ld(h2);
          } }, { highWaterMark: 0 });
          a3.allReady = g2, c2(a3);
        }, function(a3) {
          g2.catch(function() {
          }), d2(a3);
        }, f2);
        if (b2 && b2.signal) {
          var m2 = b2.signal, q = function() {
            ld(h2, m2.reason), m2.removeEventListener("abort", q);
          };
          m2.addEventListener("abort", q);
        }
        Uc(h2);
      });
    };
    exports.version = "18.2.0";
  }
});

// node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/react-dom/server.browser.js"(exports) {
    "use strict";
    var l2, s2;
    l2 = require_react_dom_server_legacy_browser_production_min(), s2 = require_react_dom_server_browser_production_min();
    exports.version = l2.version;
    exports.renderToString = l2.renderToString;
    exports.renderToStaticMarkup = l2.renderToStaticMarkup;
    exports.renderToNodeStream = l2.renderToNodeStream;
    exports.renderToStaticNodeStream = l2.renderToStaticNodeStream;
    exports.renderToReadableStream = s2.renderToReadableStream;
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
    "use strict";
    var f2 = require_react(), k = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n2 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: !0, ref: !0, __self: !0, __source: !0 };
    function q(c2, a2, g2) {
      var b2, d2 = {}, e2 = null, h2 = null;
      g2 !== void 0 && (e2 = "" + g2), a2.key !== void 0 && (e2 = "" + a2.key), a2.ref !== void 0 && (h2 = a2.ref);
      for (b2 in a2)
        m2.call(a2, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
      if (c2 && c2.defaultProps)
        for (b2 in a2 = c2.defaultProps, a2)
          d2[b2] === void 0 && (d2[b2] = a2[b2]);
      return { $$typeof: k, type: c2, key: e2, ref: h2, props: d2, _owner: n2.current };
    }
    exports.Fragment = l2;
    exports.jsx = q;
    exports.jsxs = q;
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    module.exports = require_react_jsx_runtime_production_min();
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize2;
    var decode = decodeURIComponent, encode = encodeURIComponent, fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str != "string")
        throw new TypeError("argument str must be a string");
      for (var obj = {}, opt = options || {}, pairs = str.split(";"), dec = opt.decode || decode, i2 = 0; i2 < pairs.length; i2++) {
        var pair = pairs[i2], index2 = pair.indexOf("=");
        if (!(index2 < 0)) {
          var key = pair.substring(0, index2).trim();
          if (obj[key] == null) {
            var val = pair.substring(index2 + 1, pair.length).trim();
            val[0] === '"' && (val = val.slice(1, -1)), obj[key] = tryDecode(val, dec);
          }
        }
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {}, enc = opt.encode || encode;
      if (typeof enc != "function")
        throw new TypeError("option encode is invalid");
      if (!fieldContentRegExp.test(name))
        throw new TypeError("argument name is invalid");
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value))
        throw new TypeError("argument val is invalid");
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge))
          throw new TypeError("option maxAge is invalid");
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain))
          throw new TypeError("option domain is invalid");
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path))
          throw new TypeError("option path is invalid");
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString != "function")
          throw new TypeError("option expires is invalid");
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly && (str += "; HttpOnly"), opt.secure && (str += "; Secure"), opt.sameSite) {
        var sameSite = typeof opt.sameSite == "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case !0:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch {
        return str;
      }
    }
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/warnings.js
function warnOnce(condition, message) {
  !condition && !alreadyWarned[message] && (alreadyWarned[message] = !0, console.warn(message));
}
var alreadyWarned, init_warnings = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/warnings.js"() {
    alreadyWarned = {};
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/cookies.js
async function encodeCookieValue(sign, value, secrets) {
  let encoded = encodeData(value);
  return secrets.length > 0 && (encoded = await sign(encoded, secrets[0])), encoded;
}
async function decodeCookieValue(unsign, value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== !1)
        return decodeData(unsignedValue);
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString(), result = "", index2 = 0, chr, code;
  for (; index2 < str.length; )
    chr = str.charAt(index2++), /[\w*+\-./@]/.exec(chr) ? result += chr : (code = chr.charCodeAt(0), code < 256 ? result += "%" + hex(code, 2) : result += "%u" + hex(code, 4).toUpperCase());
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  for (; result.length < length; )
    result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString(), result = "", index2 = 0, chr, part;
  for (; index2 < str.length; ) {
    if (chr = str.charAt(index2++), chr === "%") {
      if (str.charAt(index2) === "u") {
        if (part = str.slice(index2 + 1, index2 + 5), /^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16)), index2 += 5;
          continue;
        }
      } else if (part = str.slice(index2, index2 + 2), /^[\da-f]{2}$/i.exec(part)) {
        result += String.fromCharCode(parseInt(part, 16)), index2 += 2;
        continue;
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(!expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}
var import_cookie, createCookieFactory, isCookie, init_cookies = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/cookies.js"() {
    import_cookie = __toESM(require_cookie());
    init_warnings();
    createCookieFactory = ({
      sign,
      unsign
    }) => (name, cookieOptions = {}) => {
      let {
        secrets = [],
        ...options
      } = {
        path: "/",
        sameSite: "lax",
        ...cookieOptions
      };
      return warnOnceAboutExpiresCookie(name, options.expires), {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge < "u" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = (0, import_cookie.parse)(cookieHeader, {
            ...options,
            ...parseOptions
          });
          return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(unsign, cookies[name], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return (0, import_cookie.serialize)(name, value === "" ? "" : await encodeCookieValue(sign, value, secrets), {
            ...options,
            ...serializeOptions
          });
        }
      };
    }, isCookie = (object) => object != null && typeof object.name == "string" && typeof object.isSigned == "boolean" && typeof object.parse == "function" && typeof object.serialize == "function";
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/utils.js
function stringToArray(s2) {
  let utf8 = unescape(encodeURIComponent(s2));
  return Uint8Array.from(utf8, (_, i2) => utf8.charCodeAt(i2));
}
function arrayToString(a2) {
  let utf8 = String.fromCharCode.apply(null, a2);
  return decodeURIComponent(escape(utf8));
}
function mergeArrays(...arrays) {
  let out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0)), offset = 0;
  for (let arr of arrays)
    out.set(arr, offset), offset += arr.length;
  return out;
}
function arraysEqual(a2, b2) {
  if (a2.length !== b2.length)
    return !1;
  for (let i2 = 0; i2 < a2.length; i2++)
    if (a2[i2] !== b2[i2])
      return !1;
  return !0;
}
var init_utils = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/utils.js"() {
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/search.js
function coerce2(a2) {
  return a2 instanceof Uint8Array ? (index2) => a2[index2] : a2;
}
function jsmemcmp(buf1, pos1, buf2, pos2, len) {
  let fn1 = coerce2(buf1), fn2 = coerce2(buf2);
  for (let i2 = 0; i2 < len; ++i2)
    if (fn1(pos1 + i2) !== fn2(pos2 + i2))
      return !1;
  return !0;
}
function createOccurenceTable(s2) {
  let table = new Array(256).fill(s2.length);
  if (s2.length > 1)
    for (let i2 = 0; i2 < s2.length - 1; i2++)
      table[s2[i2]] = s2.length - 1 - i2;
  return table;
}
var MATCH, StreamSearch, ReadableStreamSearch, EOQ, QueueableStreamSearch, init_search = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/search.js"() {
    init_utils();
    MATCH = Symbol("Match"), StreamSearch = class {
      constructor(needle) {
        this._lookbehind = new Uint8Array(), typeof needle == "string" ? this._needle = needle = stringToArray(needle) : this._needle = needle, this._lastChar = needle[needle.length - 1], this._occ = createOccurenceTable(needle);
      }
      feed(chunk) {
        let pos = 0, tokens, allTokens = [];
        for (; pos !== chunk.length; )
          [pos, ...tokens] = this._feed(chunk, pos), allTokens.push(...tokens);
        return allTokens;
      }
      end() {
        let tail = this._lookbehind;
        return this._lookbehind = new Uint8Array(), tail;
      }
      _feed(data, bufPos) {
        let tokens = [], pos = -this._lookbehind.length;
        if (pos < 0) {
          for (; pos < 0 && pos <= data.length - this._needle.length; ) {
            let ch = this._charAt(data, pos + this._needle.length - 1);
            if (ch === this._lastChar && this._memcmp(data, pos, this._needle.length - 1))
              return pos > -this._lookbehind.length && tokens.push(this._lookbehind.slice(0, this._lookbehind.length + pos)), tokens.push(MATCH), this._lookbehind = new Uint8Array(), [
                pos + this._needle.length,
                ...tokens
              ];
            pos += this._occ[ch];
          }
          if (pos < 0)
            for (; pos < 0 && !this._memcmp(data, pos, data.length - pos); )
              pos++;
          if (pos >= 0)
            tokens.push(this._lookbehind), this._lookbehind = new Uint8Array();
          else {
            let bytesToCutOff = this._lookbehind.length + pos;
            return bytesToCutOff > 0 && (tokens.push(this._lookbehind.slice(0, bytesToCutOff)), this._lookbehind = this._lookbehind.slice(bytesToCutOff)), this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + data.length), (_, i2) => this._charAt(data, i2 - this._lookbehind.length)), [
              data.length,
              ...tokens
            ];
          }
        }
        for (pos += bufPos; pos <= data.length - this._needle.length; ) {
          let ch = data[pos + this._needle.length - 1];
          if (ch === this._lastChar && data[pos] === this._needle[0] && jsmemcmp(this._needle, 0, data, pos, this._needle.length - 1))
            return pos > bufPos && tokens.push(data.slice(bufPos, pos)), tokens.push(MATCH), [
              pos + this._needle.length,
              ...tokens
            ];
          pos += this._occ[ch];
        }
        if (pos < data.length) {
          for (; pos < data.length && (data[pos] !== this._needle[0] || !jsmemcmp(data, pos, this._needle, 0, data.length - pos)); )
            ++pos;
          pos < data.length && (this._lookbehind = data.slice(pos));
        }
        return pos > 0 && tokens.push(data.slice(bufPos, pos < data.length ? pos : data.length)), [
          data.length,
          ...tokens
        ];
      }
      _charAt(data, pos) {
        return pos < 0 ? this._lookbehind[this._lookbehind.length + pos] : data[pos];
      }
      _memcmp(data, pos, len) {
        return jsmemcmp(this._charAt.bind(this, data), pos, this._needle, 0, len);
      }
    }, ReadableStreamSearch = class {
      constructor(needle, _readableStream) {
        this._readableStream = _readableStream, this._search = new StreamSearch(needle);
      }
      async *[Symbol.asyncIterator]() {
        let reader = this._readableStream.getReader();
        try {
          for (; ; ) {
            let result = await reader.read();
            if (result.done)
              break;
            yield* this._search.feed(result.value);
          }
          let tail = this._search.end();
          tail.length && (yield tail);
        } finally {
          reader.releaseLock();
        }
      }
    }, EOQ = Symbol("End of Queue"), QueueableStreamSearch = class {
      constructor(needle) {
        this._chunksQueue = [], this._closed = !1, this._search = new StreamSearch(needle);
      }
      push(...chunks) {
        if (this._closed)
          throw new Error("cannot call push after close");
        this._chunksQueue.push(...chunks), this._notify && this._notify();
      }
      close() {
        if (this._closed)
          throw new Error("close was already called");
        this._closed = !0, this._chunksQueue.push(EOQ), this._notify && this._notify();
      }
      async *[Symbol.asyncIterator]() {
        for (; ; ) {
          let chunk;
          for (; !(chunk = this._chunksQueue.shift()); )
            await new Promise((resolve) => this._notify = resolve), this._notify = void 0;
          if (chunk === EOQ)
            break;
          yield* this._search.feed(chunk);
        }
        let tail = this._search.end();
        tail.length && (yield tail);
      }
    };
  }
});

// node_modules/@web3-storage/multipart-parser/esm/src/index.js
function parseContentDisposition(header) {
  let parts = header.split(";").map((part) => part.trim());
  if (parts.shift() !== "form-data")
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(parts) + "`");
  let out = {};
  for (let part of parts) {
    let kv = part.split("=", 2);
    if (kv.length !== 2)
      throw new Error("malformed content-disposition header: key-value pair not found - " + part + " in `" + header + "`");
    let [name, value] = kv;
    if (value[0] === '"' && value[value.length - 1] === '"')
      out[name] = value.slice(1, -1).replace(/\\"/g, '"');
    else if (value[0] !== '"' && value[value.length - 1] !== '"')
      out[name] = value;
    else if (value[0] === '"' && value[value.length - 1] !== '"' || value[0] !== '"' && value[value.length - 1] === '"')
      throw new Error("malformed content-disposition header: mismatched quotations in `" + header + "`");
  }
  if (!out.name)
    throw new Error("malformed content-disposition header: missing field name in `" + header + "`");
  return out;
}
function parsePartHeaders(lines) {
  let entries = [], disposition = !1, line;
  for (; typeof (line = lines.shift()) < "u"; ) {
    let colon = line.indexOf(":");
    if (colon === -1)
      throw new Error("malformed multipart-form header: missing colon");
    let header = line.slice(0, colon).trim().toLowerCase(), value = line.slice(colon + 1).trim();
    switch (header) {
      case "content-disposition":
        disposition = !0, entries.push(...Object.entries(parseContentDisposition(value)));
        break;
      case "content-type":
        entries.push([
          "contentType",
          value
        ]);
    }
  }
  if (!disposition)
    throw new Error("malformed multipart-form header: missing content-disposition");
  return Object.fromEntries(entries);
}
async function readHeaderLines(it, needle) {
  let firstChunk = !0, lastTokenWasMatch = !1, headerLines = [[]], crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let result = await it.next();
    if (result.done)
      throw new Error("malformed multipart-form data: unexpected end of stream");
    if (firstChunk && result.value !== MATCH && arraysEqual(result.value.slice(0, 2), dash))
      return [
        void 0,
        new Uint8Array()
      ];
    let chunk;
    if (result.value !== MATCH)
      chunk = result.value;
    else if (!lastTokenWasMatch)
      chunk = needle;
    else
      throw new Error("malformed multipart-form data: unexpected boundary");
    if (!chunk.length)
      continue;
    firstChunk && (firstChunk = !1);
    let tokens = crlfSearch.feed(chunk);
    for (let [i2, token] of tokens.entries()) {
      let isMatch = token === MATCH;
      if (!(!isMatch && !token.length)) {
        if (lastTokenWasMatch && isMatch)
          return tokens.push(crlfSearch.end()), [
            headerLines.filter((chunks) => chunks.length).map(mergeArrays2).map(arrayToString),
            mergeArrays(...tokens.slice(i2 + 1).map((token2) => token2 === MATCH ? CRLF : token2))
          ];
        (lastTokenWasMatch = isMatch) ? headerLines.push([]) : headerLines[headerLines.length - 1].push(token);
      }
    }
  }
}
async function* streamMultipart(body, boundary) {
  let needle = mergeArrays(dash, stringToArray(boundary)), it = new ReadableStreamSearch(needle, body)[Symbol.asyncIterator]();
  for (; ; ) {
    let result = await it.next();
    if (result.done)
      return;
    if (result.value === MATCH)
      break;
  }
  let crlfSearch = new StreamSearch(CRLF);
  for (; ; ) {
    let feedChunk = function(chunk) {
      let chunks = [];
      for (let token of crlfSearch.feed(chunk))
        trailingCRLF && chunks.push(CRLF), (trailingCRLF = token === MATCH) || chunks.push(token);
      return mergeArrays(...chunks);
    }, [headerLines, tail] = await readHeaderLines(it, needle);
    if (!headerLines)
      return;
    async function nextToken() {
      let result = await it.next();
      if (result.done)
        throw new Error("malformed multipart-form data: unexpected end of stream");
      return result;
    }
    let trailingCRLF = !1, done = !1;
    async function nextChunk() {
      let result = await nextToken(), chunk;
      if (result.value !== MATCH)
        chunk = result.value;
      else if (!trailingCRLF)
        chunk = CRLF;
      else
        return done = !0, { value: crlfSearch.end() };
      return { value: feedChunk(chunk) };
    }
    let bufferedChunks = [{ value: feedChunk(tail) }];
    for (yield {
      ...parsePartHeaders(headerLines),
      data: {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          for (; ; ) {
            let result = bufferedChunks.shift();
            if (!result)
              break;
            if (result.value.length > 0)
              return result;
          }
          for (; ; ) {
            if (done)
              return {
                done,
                value: void 0
              };
            let result = await nextChunk();
            if (result.value.length > 0)
              return result;
          }
        }
      }
    }; !done; )
      bufferedChunks.push(await nextChunk());
  }
}
var mergeArrays2, dash, CRLF, init_src = __esm({
  "node_modules/@web3-storage/multipart-parser/esm/src/index.js"() {
    init_search();
    init_utils();
    mergeArrays2 = Function.prototype.apply.bind(mergeArrays, void 0), dash = stringToArray("--"), CRLF = stringToArray(`\r
`);
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/formData.js
function composeUploadHandlers(...handlers) {
  return async (part) => {
    for (let handler of handlers) {
      let value = await handler(part);
      if (typeof value < "u" && value !== null)
        return value;
    }
  };
}
async function parseMultipartFormData(request, uploadHandler) {
  let contentType = request.headers.get("Content-Type") || "", [type, boundary] = contentType.split(/\s*;\s*boundary=/);
  if (!request.body || !boundary || type !== "multipart/form-data")
    throw new TypeError("Could not parse content as FormData.");
  let formData = new FormData(), parts = streamMultipart(request.body, boundary);
  for await (let part of parts) {
    if (part.done)
      break;
    typeof part.filename == "string" && (part.filename = part.filename.split(/[/\\]/).pop());
    let value = await uploadHandler(part);
    typeof value < "u" && value !== null && formData.append(part.name, value);
  }
  return formData;
}
var init_formData = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/formData.js"() {
    init_src();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/mode.js
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode, init_mode = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/mode.js"() {
    ServerMode = /* @__PURE__ */ function(ServerMode2) {
      return ServerMode2.Development = "development", ServerMode2.Production = "production", ServerMode2.Test = "test", ServerMode2;
    }({});
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/errors.js
function sanitizeError(error, serverMode) {
  if (error instanceof Error && serverMode !== ServerMode.Development) {
    let sanitized = new Error("Unexpected Server Error");
    return sanitized.stack = void 0, sanitized;
  }
  return error;
}
function sanitizeErrors(errors, serverMode) {
  return Object.entries(errors).reduce((acc, [routeId, error]) => Object.assign(acc, {
    [routeId]: sanitizeError(error, serverMode)
  }), {});
}
function serializeError(error, serverMode) {
  let sanitized = sanitizeError(error, serverMode);
  return {
    message: sanitized.message,
    stack: sanitized.stack
  };
}
function serializeErrors(errors, serverMode) {
  if (!errors)
    return null;
  let entries = Object.entries(errors), serialized = {};
  for (let [key, val] of entries)
    if (isRouteErrorResponse(val))
      serialized[key] = {
        ...val,
        __type: "RouteErrorResponse"
      };
    else if (val instanceof Error) {
      let sanitized = sanitizeError(val, serverMode);
      serialized[key] = {
        message: sanitized.message,
        stack: sanitized.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...sanitized.name !== "Error" ? {
          __subType: sanitized.name
        } : {}
      };
    } else
      serialized[key] = val;
  return serialized;
}
var init_errors = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/errors.js"() {
    init_router();
    init_mode();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/responses.js
function isDeferredData2(value) {
  let deferred = value;
  return deferred && typeof deferred == "object" && typeof deferred.data == "object" && typeof deferred.subscribe == "function" && typeof deferred.cancel == "function" && typeof deferred.resolveData == "function";
}
function isResponse2(value) {
  return value != null && typeof value.status == "number" && typeof value.statusText == "string" && typeof value.headers == "object" && typeof value.body < "u";
}
function isRedirectStatusCode(statusCode) {
  return redirectStatusCodes2.has(statusCode);
}
function isRedirectResponse2(response) {
  return isRedirectStatusCode(response.status);
}
function isTrackedPromise2(value) {
  return value != null && typeof value.then == "function" && value._tracked === !0;
}
function createDeferredReadableStream(deferredData, signal, serverMode) {
  let encoder = new TextEncoder();
  return new ReadableStream({
    async start(controller) {
      let criticalData = {}, preresolvedKeys = [];
      for (let [key, value] of Object.entries(deferredData.data))
        isTrackedPromise2(value) ? (criticalData[key] = `${DEFERRED_VALUE_PLACEHOLDER_PREFIX}${key}`, (typeof value._data < "u" || typeof value._error < "u") && preresolvedKeys.push(key)) : criticalData[key] = value;
      controller.enqueue(encoder.encode(JSON.stringify(criticalData) + `

`));
      for (let preresolvedKey of preresolvedKeys)
        enqueueTrackedPromise(controller, encoder, preresolvedKey, deferredData.data[preresolvedKey], serverMode);
      let unsubscribe = deferredData.subscribe((aborted, settledKey) => {
        settledKey && enqueueTrackedPromise(controller, encoder, settledKey, deferredData.data[settledKey], serverMode);
      });
      await deferredData.resolveData(signal), unsubscribe(), controller.close();
    }
  });
}
function enqueueTrackedPromise(controller, encoder, settledKey, promise, serverMode) {
  "_error" in promise ? controller.enqueue(encoder.encode("error:" + JSON.stringify({
    [settledKey]: promise._error instanceof Error ? serializeError(promise._error, serverMode) : promise._error
  }) + `

`)) : controller.enqueue(encoder.encode("data:" + JSON.stringify({
    [settledKey]: promise._data ?? null
  }) + `

`));
}
var json3, defer3, redirect3, redirectStatusCodes2, DEFERRED_VALUE_PLACEHOLDER_PREFIX, init_responses = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/responses.js"() {
    init_router();
    init_errors();
    json3 = (data, init = {}) => json(data, init), defer3 = (data, init = {}) => defer(data, init), redirect3 = (url, init = 302) => redirect(url, init);
    redirectStatusCodes2 = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    DEFERRED_VALUE_PLACEHOLDER_PREFIX = "__deferred_promise:";
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/entry.js
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => (memo[routeId] = manifest[routeId].module, memo), {});
}
var init_entry = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/entry.js"() {
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: !0,
      map: !1,
      silent: !1
    };
    function isNonEmptyString(str) {
      return typeof str == "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString), nameValuePairStr = parts.shift(), parsed = parseNameValuePair(nameValuePairStr), name = parsed.name, value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e2) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e2
        );
      }
      var cookie = {
        name,
        value
      };
      return parts.forEach(function(part) {
        var sides = part.split("="), key = sides.shift().trimLeft().toLowerCase(), value2 = sides.join("=");
        key === "expires" ? cookie.expires = new Date(value2) : key === "max-age" ? cookie.maxAge = parseInt(value2, 10) : key === "secure" ? cookie.secure = !0 : key === "httponly" ? cookie.httpOnly = !0 : key === "samesite" ? cookie.sameSite = value2 : cookie[key] = value2;
      }), cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "", value = "", nameValueArr = nameValuePairStr.split("=");
      return nameValueArr.length > 1 ? (name = nameValueArr.shift(), value = nameValueArr.join("=")) : value = nameValuePairStr, { name, value };
    }
    function parse2(input, options) {
      if (options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions, !input)
        return options.map ? {} : [];
      if (input.headers)
        if (typeof input.headers.getSetCookie == "function")
          input = input.headers.getSetCookie();
        else if (input.headers["set-cookie"])
          input = input.headers["set-cookie"];
        else {
          var sch = input.headers[Object.keys(input.headers).find(function(key) {
            return key.toLowerCase() === "set-cookie";
          })];
          !sch && input.headers.cookie && !options.silent && console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          ), input = sch;
        }
      if (Array.isArray(input) || (input = [input]), options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions, options.map) {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          return cookies2[cookie.name] = cookie, cookies2;
        }, cookies);
      } else
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString))
        return cookiesString;
      if (typeof cookiesString != "string")
        return [];
      var cookiesStrings = [], pos = 0, start, ch, lastComma, nextStart, cookiesSeparatorFound;
      function skipWhitespace() {
        for (; pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos)); )
          pos += 1;
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        return ch = cookiesString.charAt(pos), ch !== "=" && ch !== ";" && ch !== ",";
      }
      for (; pos < cookiesString.length; ) {
        for (start = pos, cookiesSeparatorFound = !1; skipWhitespace(); )
          if (ch = cookiesString.charAt(pos), ch === ",") {
            for (lastComma = pos, pos += 1, skipWhitespace(), nextStart = pos; pos < cookiesString.length && notSpecialChar(); )
              pos += 1;
            pos < cookiesString.length && cookiesString.charAt(pos) === "=" ? (cookiesSeparatorFound = !0, pos = nextStart, cookiesStrings.push(cookiesString.substring(start, lastComma)), start = pos) : pos = lastComma + 1;
          } else
            pos += 1;
        (!cookiesSeparatorFound || pos >= cookiesString.length) && cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/headers.js
function getDocumentHeadersRR(build, context) {
  let boundaryIdx = context.errors ? context.matches.findIndex((m2) => context.errors[m2.route.id]) : -1, matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches, errorHeaders;
  if (boundaryIdx >= 0) {
    let {
      actionHeaders,
      actionData,
      loaderHeaders,
      loaderData
    } = context;
    context.matches.slice(boundaryIdx).some((match) => {
      let id = match.route.id;
      return actionHeaders[id] && (!actionData || actionData[id] === void 0) ? errorHeaders = actionHeaders[id] : loaderHeaders[id] && loaderData[id] === void 0 && (errorHeaders = loaderHeaders[id]), errorHeaders != null;
    });
  }
  return matches.reduce((parentHeaders, match, idx) => {
    let {
      id
    } = match.route, routeModule = build.routes[id].module, loaderHeaders = context.loaderHeaders[id] || new Headers(), actionHeaders = context.actionHeaders[id] || new Headers(), includeErrorHeaders = errorHeaders != null && idx === matches.length - 1, includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
    if (routeModule.headers == null && build.future.v2_headers) {
      let headers5 = new Headers(parentHeaders);
      return includeErrorCookies && prependCookies(errorHeaders, headers5), prependCookies(actionHeaders, headers5), prependCookies(loaderHeaders, headers5), headers5;
    }
    let headers4 = new Headers(routeModule.headers ? typeof routeModule.headers == "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders,
      errorHeaders: includeErrorHeaders ? errorHeaders : void 0
    }) : routeModule.headers : void 0);
    return includeErrorCookies && prependCookies(errorHeaders, headers4), prependCookies(actionHeaders, headers4), prependCookies(loaderHeaders, headers4), prependCookies(parentHeaders, headers4), headers4;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  parentSetCookieString && (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString).forEach((cookie) => {
    childHeaders.append("Set-Cookie", cookie);
  });
}
var import_set_cookie_parser, init_headers = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/headers.js"() {
    import_set_cookie_parser = __toESM(require_set_cookie());
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/invariant.js
function invariant3(value, message) {
  if (value === !1 || value === null || typeof value > "u")
    throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"), new Error(message);
}
var init_invariant = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/invariant.js"() {
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js
function matchServerRoutes(routes2, pathname) {
  let matches = matchRoutes(routes2, pathname);
  return matches ? matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  })) : null;
}
var init_routeMatching = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js"() {
    init_router();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/data.js
async function callRouteActionRR({
  loadContext,
  action: action4,
  params,
  request,
  routeId
}) {
  let result = await action4({
    request: stripDataParam(stripIndexParam(request)),
    context: loadContext,
    params
  });
  if (result === void 0)
    throw new Error(`You defined an action for route "${routeId}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  return isResponse2(result) ? result : json3(result);
}
async function callRouteLoaderRR({
  loadContext,
  loader: loader6,
  params,
  request,
  routeId
}) {
  let result = await loader6({
    request: stripDataParam(stripIndexParam(request)),
    context: loadContext,
    params
  });
  if (result === void 0)
    throw new Error(`You defined a loader for route "${routeId}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  return isDeferredData2(result) ? result.init && isRedirectStatusCode(result.init.status || 200) ? redirect3(new Headers(result.init.headers).get("Location"), result.init) : result : isResponse2(result) ? result : json3(result);
}
function stripIndexParam(request) {
  let url = new URL(request.url), indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues)
    indexValue && indexValuesToKeep.push(indexValue);
  for (let toKeep of indexValuesToKeep)
    url.searchParams.append("index", toKeep);
  return new Request(url.href, request);
}
function stripDataParam(request) {
  let url = new URL(request.url);
  return url.searchParams.delete("_data"), new Request(url.href, request);
}
var init_data = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/data.js"() {
    init_responses();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/routes.js
function groupRoutesByParentId2(manifest) {
  let routes2 = {};
  return Object.values(manifest).forEach((route) => {
    let parentId = route.parentId || "";
    routes2[parentId] || (routes2[parentId] = []), routes2[parentId].push(route);
  }), routes2;
}
function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => ({
    ...route,
    children: createRoutes(manifest, route.id, routesByParentId)
  }));
}
function createStaticHandlerDataRoutes(manifest, future2, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let commonRoute = {
      // Always include root due to default boundaries
      hasErrorBoundary: future2.v2_errorBoundary === !0 ? route.id === "root" || route.module.ErrorBoundary != null : route.id === "root" || route.module.CatchBoundary != null || route.module.ErrorBoundary != null,
      id: route.id,
      path: route.path,
      loader: route.module.loader ? (args) => callRouteLoaderRR({
        request: args.request,
        params: args.params,
        loadContext: args.context,
        loader: route.module.loader,
        routeId: route.id
      }) : void 0,
      action: route.module.action ? (args) => callRouteActionRR({
        request: args.request,
        params: args.params,
        loadContext: args.context,
        action: route.module.action,
        routeId: route.id
      }) : void 0,
      handle: route.module.handle
    };
    return route.index ? {
      index: !0,
      ...commonRoute
    } : {
      caseSensitive: route.caseSensitive,
      children: createStaticHandlerDataRoutes(manifest, future2, route.id, routesByParentId),
      ...commonRoute
    };
  });
}
var init_routes = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/routes.js"() {
    init_data();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/markup.js
function escapeHtml2(html) {
  return html.replace(ESCAPE_REGEX2, (match) => ESCAPE_LOOKUP2[match]);
}
var ESCAPE_LOOKUP2, ESCAPE_REGEX2, init_markup = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/markup.js"() {
    ESCAPE_LOOKUP2 = {
      "&": "\\u0026",
      ">": "\\u003e",
      "<": "\\u003c",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    }, ESCAPE_REGEX2 = /[&><\u2028\u2029]/g;
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js
function createServerHandoffString(serverHandoff) {
  return escapeHtml2(JSON.stringify(serverHandoff));
}
var init_serverHandoff = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js"() {
    init_markup();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/server.js
async function handleDataRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext
    });
    if (isRedirectResponse2(response)) {
      let headers4 = new Headers(response.headers);
      return headers4.set("X-Remix-Redirect", headers4.get("Location")), headers4.set("X-Remix-Status", response.status), headers4.delete("Location"), response.headers.get("Set-Cookie") !== null && headers4.set("X-Remix-Revalidate", "yes"), new Response(null, {
        status: 204,
        headers: headers4
      });
    }
    if (UNSAFE_DEFERRED_SYMBOL in response) {
      let deferredData = response[UNSAFE_DEFERRED_SYMBOL], body = createDeferredReadableStream(deferredData, request.signal, serverMode), init = deferredData.init || {}, headers4 = new Headers(init.headers);
      return headers4.set("Content-Type", "text/remix-deferred"), headers4.set("X-Remix-Response", "yes"), init.headers = headers4, new Response(body, init);
    }
    return response.headers.set("X-Remix-Response", "yes"), response;
  } catch (error) {
    if (isResponse2(error))
      return error.headers.set("X-Remix-Catch", "yes"), error;
    if (isRouteErrorResponse(error))
      return error.error && handleError(error.error), errorResponseToJson(error, serverMode);
    let errorInstance = error instanceof Error ? error : new Error("Unexpected Server Error");
    return handleError(errorInstance), json(serializeError(errorInstance, serverMode), {
      status: 500,
      headers: {
        "X-Remix-Error": "yes"
      }
    });
  }
}
function findParentBoundary(routes2, routeId, error) {
  let route = routes2[routeId] || routes2.root, isCatch = isRouteErrorResponse(error) && (!error.error || error.status === 404);
  return isCatch && route.module.CatchBoundary || !isCatch && route.module.ErrorBoundary || !route.parentId ? route.id : findParentBoundary(routes2, route.parentId, error);
}
function differentiateCatchVersusErrorBoundaries(build, context) {
  if (!context.errors)
    return;
  let errors = {};
  for (let routeId of Object.keys(context.errors)) {
    let error = context.errors[routeId], handlingRouteId = findParentBoundary(build.routes, routeId, error);
    errors[handlingRouteId] = error;
  }
  context.errors = errors;
}
async function handleDocumentRequestRR(serverMode, build, staticHandler, request, loadContext, handleError) {
  let context;
  try {
    context = await staticHandler.query(request, {
      requestContext: loadContext
    });
  } catch (error) {
    return handleError(error), new Response(null, {
      status: 500
    });
  }
  if (isResponse2(context))
    return context;
  context.errors && (Object.values(context.errors).forEach((err) => {
    (!isRouteErrorResponse(err) || err.error) && handleError(err);
  }), context.errors = sanitizeErrors(context.errors, serverMode)), build.future.v2_errorBoundary !== !0 && differentiateCatchVersusErrorBoundaries(build, context);
  let headers4 = getDocumentHeadersRR(build, context), entryContext = {
    manifest: build.assets,
    routeModules: createEntryRouteModules(build.routes),
    staticHandlerContext: context,
    serverHandoffString: createServerHandoffString({
      url: context.location.pathname,
      state: {
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: serializeErrors(context.errors, serverMode)
      },
      future: build.future
    }),
    future: build.future,
    serializeError: (err) => serializeError(err, serverMode)
  }, handleDocumentRequestFunction = build.entry.module.default;
  try {
    return await handleDocumentRequestFunction(request, context.statusCode, headers4, entryContext, loadContext);
  } catch (error) {
    handleError(error), context = getStaticContextFromError(staticHandler.dataRoutes, context, error), context.errors && (context.errors = sanitizeErrors(context.errors, serverMode)), build.future.v2_errorBoundary !== !0 && differentiateCatchVersusErrorBoundaries(build, context), entryContext = {
      ...entryContext,
      staticHandlerContext: context,
      serverHandoffString: createServerHandoffString({
        url: context.location.pathname,
        state: {
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: serializeErrors(context.errors, serverMode)
        },
        future: build.future
      })
    };
    try {
      return await handleDocumentRequestFunction(request, context.statusCode, headers4, entryContext, loadContext);
    } catch (error2) {
      return handleError(error2), returnLastResortErrorResponse(error2, serverMode);
    }
  }
}
async function handleResourceRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext
    });
    return invariant3(isResponse2(response), "Expected a Response to be returned from queryRoute"), response;
  } catch (error) {
    return isResponse2(error) ? (error.headers.set("X-Remix-Catch", "yes"), error) : isRouteErrorResponse(error) ? (error.error && handleError(error.error), errorResponseToJson(error, serverMode)) : (handleError(error), returnLastResortErrorResponse(error, serverMode));
  }
}
function errorResponseToJson(errorResponse, serverMode) {
  return json(serializeError(errorResponse.error || new Error("Unexpected Server Error"), serverMode), {
    status: errorResponse.status,
    statusText: errorResponse.statusText,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function returnLastResortErrorResponse(error, serverMode) {
  let message = "Unexpected Server Error";
  return serverMode !== ServerMode.Production && (message += `

${String(error)}`), new Response(message, {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
var createRequestHandler, init_server = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/server.js"() {
    init_router();
    init_entry();
    init_errors();
    init_headers();
    init_invariant();
    init_mode();
    init_routeMatching();
    init_routes();
    init_responses();
    init_serverHandoff();
    createRequestHandler = (build, mode) => {
      let routes2 = createRoutes(build.routes), dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future), serverMode = isServerMode(mode) ? mode : ServerMode.Production, staticHandler = createStaticHandler(dataRoutes), errorHandler = build.entry.module.handleError || ((error, {
        request
      }) => {
        serverMode !== ServerMode.Test && !request.signal.aborted && console.error(error);
      });
      return async function(request, loadContext = {}) {
        let url = new URL(request.url), matches = matchServerRoutes(routes2, url.pathname), handleError = (error) => errorHandler(error, {
          context: loadContext,
          params: matches && matches.length > 0 ? matches[0].params : {},
          request
        }), response;
        if (url.searchParams.has("_data")) {
          let routeId = url.searchParams.get("_data");
          if (response = await handleDataRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError), build.entry.module.handleDataRequest) {
            var _matches$find;
            response = await build.entry.module.handleDataRequest(response, {
              context: loadContext,
              params: (matches == null || (_matches$find = matches.find((m2) => m2.route.id == routeId)) === null || _matches$find === void 0 ? void 0 : _matches$find.params) || {},
              request
            });
          }
        } else
          matches && matches[matches.length - 1].route.module.default == null ? response = await handleResourceRequestRR(serverMode, staticHandler, matches.slice(-1)[0].route.id, request, loadContext, handleError) : response = await handleDocumentRequestRR(serverMode, build, staticHandler, request, loadContext, handleError);
        return request.method === "HEAD" ? new Response(null, {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText
        }) : response;
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions.js
function flash(name) {
  return `__flash_${name}__`;
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`);
}
var createSession, isSession, createSessionStorageFactory, init_sessions = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions.js"() {
    init_cookies();
    init_warnings();
    createSession = (initialData = {}, id = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name))
            return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            return map.delete(flashName), value;
          }
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    }, isSession = (object) => object != null && typeof object.id == "string" && typeof object.data < "u" && typeof object.has == "function" && typeof object.get == "function" && typeof object.set == "function" && typeof object.flash == "function" && typeof object.unset == "function", createSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg == null ? void 0 : cookieArg.name) || "__session", cookieArg);
      return warnOnceAboutSigningSessionCookie(cookie), {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options), data = id && await readData(id);
          return createSession(data || {}, id || "");
        },
        async commitSession(session, options) {
          let {
            id,
            data
          } = session;
          return id ? await updateData(id, data, cookie.expires) : id = await createData(data, cookie.expires), cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          return await deleteData(session.id), cookie.serialize("", {
            ...options,
            expires: /* @__PURE__ */ new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js
var createCookieSessionStorageFactory, init_cookieStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js"() {
    init_cookies();
    init_sessions();
    createCookieSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg
    } = {}) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg == null ? void 0 : cookieArg.name) || "__session", cookieArg);
      return warnOnceAboutSigningSessionCookie(cookie), {
        async getSession(cookieHeader, options) {
          return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096)
            throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", {
            ...options,
            expires: /* @__PURE__ */ new Date(0)
          });
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js
var createMemorySessionStorageFactory, init_memoryStorage = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js"() {
    createMemorySessionStorageFactory = (createSessionStorage) => ({
      cookie
    } = {}) => {
      let uniqueId = 0, map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id = (++uniqueId).toString();
          return map.set(id, {
            data,
            expires
          }), id;
        },
        async readData(id) {
          if (map.has(id)) {
            let {
              data,
              expires
            } = map.get(id);
            if (!expires || expires > /* @__PURE__ */ new Date())
              return data;
            expires && map.delete(id);
          }
          return null;
        },
        async updateData(id, data, expires) {
          map.set(id, {
            data,
            expires
          });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js
var MaxPartSizeExceededError, init_errors2 = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js"() {
    MaxPartSizeExceededError = class extends Error {
      constructor(field, maxBytes) {
        super(`Field "${field}" exceeded upload size of ${maxBytes} bytes.`), this.field = field, this.maxBytes = maxBytes;
      }
    };
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js
function createMemoryUploadHandler({
  filter,
  maxPartSize = 3e6
} = {}) {
  return async ({
    filename,
    contentType,
    name,
    data
  }) => {
    if (filter && !await filter({
      filename,
      contentType,
      name
    }))
      return;
    let size = 0, chunks = [];
    for await (let chunk of data) {
      if (size += chunk.byteLength, size > maxPartSize)
        throw new MaxPartSizeExceededError(name, maxPartSize);
      chunks.push(chunk);
    }
    return typeof filename == "string" ? new File(chunks, filename, {
      type: contentType
    }) : await new Blob(chunks, {
      type: contentType
    }).text();
  };
}
var init_memoryUploadHandler = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js"() {
    init_errors2();
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/dev.js
async function broadcastDevReady(build, origin) {
  if (origin ?? (origin = ""), !origin)
    throw Error("Dev server origin not set");
  let url = new URL(origin);
  url.pathname = "ping";
  let response = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      buildHash: build.assets.version
    })
  }).catch((error) => {
    throw console.error(`Could not reach Remix dev server at ${url}`), error;
  });
  if (!response.ok)
    throw console.error(`Could not reach Remix dev server at ${url} (${response.status})`), Error(await response.text());
}
function logDevReady(build) {
  console.log(`[REMIX DEV] ${build.assets.version} ready`);
}
var init_dev = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/dev.js"() {
  }
});

// node_modules/@remix-run/server-runtime/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  MaxPartSizeExceededError: () => MaxPartSizeExceededError,
  broadcastDevReady: () => broadcastDevReady,
  createCookieFactory: () => createCookieFactory,
  createCookieSessionStorageFactory: () => createCookieSessionStorageFactory,
  createMemorySessionStorageFactory: () => createMemorySessionStorageFactory,
  createRequestHandler: () => createRequestHandler,
  createSession: () => createSession,
  createSessionStorageFactory: () => createSessionStorageFactory,
  defer: () => defer3,
  isCookie: () => isCookie,
  isSession: () => isSession,
  json: () => json3,
  logDevReady: () => logDevReady,
  redirect: () => redirect3,
  unstable_composeUploadHandlers: () => composeUploadHandlers,
  unstable_createMemoryUploadHandler: () => createMemoryUploadHandler,
  unstable_parseMultipartFormData: () => parseMultipartFormData
});
var init_esm = __esm({
  "node_modules/@remix-run/server-runtime/dist/esm/index.js"() {
    init_cookies();
    init_formData();
    init_responses();
    init_server();
    init_sessions();
    init_cookieStorage();
    init_memoryStorage();
    init_memoryUploadHandler();
    init_errors2();
    init_dev();
  }
});

// node_modules/warn-once/index.js
var require_warn_once = __commonJS({
  "node_modules/warn-once/index.js"(exports, module) {
    function warnOnce3(condition, ...rest) {
    }
    module.exports = warnOnce3;
  }
});

// node_modules/@netlify/remix-edge-adapter/build/src/globals.js
var require_globals = __commonJS({
  "node_modules/@netlify/remix-edge-adapter/build/src/globals.js"() {
    "use strict";
    globalThis.process || (globalThis.process = { env: Deno.env.toObject() });
  }
});

// node_modules/@netlify/remix-runtime/build/src/crypto.js
var require_crypto = __commonJS({
  "node_modules/@netlify/remix-runtime/build/src/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.unsign = exports.sign = void 0;
    var encoder = new TextEncoder(), sign = async (value, secret) => {
      let data = encoder.encode(value), key = await createKey2(secret, ["sign"]), signature = await crypto.subtle.sign("HMAC", key, data), hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
      return value + "." + hash;
    };
    exports.sign = sign;
    var unsign = async (cookie, secret) => {
      let value = cookie.slice(0, cookie.lastIndexOf(".")), hash = cookie.slice(cookie.lastIndexOf(".") + 1), data = encoder.encode(value), key = await createKey2(secret, ["verify"]), signature = byteStringToUint8Array(atob(hash));
      return await crypto.subtle.verify("HMAC", key, signature, data) ? value : !1;
    };
    exports.unsign = unsign;
    async function createKey2(secret, usages) {
      return await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, !1, usages);
    }
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i2 = 0; i2 < byteString.length; i2++)
        array[i2] = byteString.charCodeAt(i2);
      return array;
    }
  }
});

// node_modules/@netlify/remix-runtime/build/src/implementations.js
var require_implementations = __commonJS({
  "node_modules/@netlify/remix-runtime/build/src/implementations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.createMemorySessionStorage = exports.createSessionStorage = exports.createCookieSessionStorage = exports.createCookie = void 0;
    var server_runtime_1 = (init_esm(), __toCommonJS(esm_exports)), crypto_1 = require_crypto();
    exports.createCookie = (0, server_runtime_1.createCookieFactory)({ sign: crypto_1.sign, unsign: crypto_1.unsign });
    exports.createCookieSessionStorage = (0, server_runtime_1.createCookieSessionStorageFactory)(exports.createCookie);
    exports.createSessionStorage = (0, server_runtime_1.createSessionStorageFactory)(exports.createCookie);
    exports.createMemorySessionStorage = (0, server_runtime_1.createMemorySessionStorageFactory)(exports.createSessionStorage);
  }
});

// node_modules/@netlify/remix-runtime/build/src/index.js
var require_src = __commonJS({
  "node_modules/@netlify/remix-runtime/build/src/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.unstable_parseMultipartFormData = exports.unstable_createMemoryUploadHandler = exports.unstable_composeUploadHandlers = exports.redirect = exports.MaxPartSizeExceededError = exports.json = exports.isSession = exports.isCookie = exports.createSession = exports.createRequestHandler = exports.createSessionStorage = exports.createMemorySessionStorage = exports.createCookieSessionStorage = exports.createCookie = void 0;
    var implementations_1 = require_implementations();
    Object.defineProperty(exports, "createCookie", { enumerable: !0, get: function() {
      return implementations_1.createCookie;
    } });
    Object.defineProperty(exports, "createCookieSessionStorage", { enumerable: !0, get: function() {
      return implementations_1.createCookieSessionStorage;
    } });
    Object.defineProperty(exports, "createMemorySessionStorage", { enumerable: !0, get: function() {
      return implementations_1.createMemorySessionStorage;
    } });
    Object.defineProperty(exports, "createSessionStorage", { enumerable: !0, get: function() {
      return implementations_1.createSessionStorage;
    } });
    var server_runtime_1 = (init_esm(), __toCommonJS(esm_exports));
    Object.defineProperty(exports, "createRequestHandler", { enumerable: !0, get: function() {
      return server_runtime_1.createRequestHandler;
    } });
    Object.defineProperty(exports, "createSession", { enumerable: !0, get: function() {
      return server_runtime_1.createSession;
    } });
    Object.defineProperty(exports, "isCookie", { enumerable: !0, get: function() {
      return server_runtime_1.isCookie;
    } });
    Object.defineProperty(exports, "isSession", { enumerable: !0, get: function() {
      return server_runtime_1.isSession;
    } });
    Object.defineProperty(exports, "json", { enumerable: !0, get: function() {
      return server_runtime_1.json;
    } });
    Object.defineProperty(exports, "MaxPartSizeExceededError", { enumerable: !0, get: function() {
      return server_runtime_1.MaxPartSizeExceededError;
    } });
    Object.defineProperty(exports, "redirect", { enumerable: !0, get: function() {
      return server_runtime_1.redirect;
    } });
    Object.defineProperty(exports, "unstable_composeUploadHandlers", { enumerable: !0, get: function() {
      return server_runtime_1.unstable_composeUploadHandlers;
    } });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", { enumerable: !0, get: function() {
      return server_runtime_1.unstable_createMemoryUploadHandler;
    } });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", { enumerable: !0, get: function() {
      return server_runtime_1.unstable_parseMultipartFormData;
    } });
  }
});

// node_modules/@netlify/remix-edge-adapter/build/src/server.js
var require_server2 = __commonJS({
  "node_modules/@netlify/remix-edge-adapter/build/src/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.createRequestHandler = void 0;
    var remix_runtime_1 = require_src();
    function createRequestHandler3({ build, mode, getLoadContext }) {
      let remixHandler = (0, remix_runtime_1.createRequestHandler)(build, mode), assetPath = build.assets.url.split("/").slice(0, -1).join("/");
      return async (request, context) => {
        let { pathname } = new URL(request.url);
        if (!pathname.startsWith(`${assetPath}/`))
          try {
            let loadContext = await (getLoadContext == null ? void 0 : getLoadContext(request, context)) || context, response = await remixHandler(request, loadContext);
            if (response.headers.set("x-nf-runtime", "Edge"), response.status === 404) {
              let originResponse = await context.next({
                sendConditionalRequest: !0
              });
              if (originResponse.status !== 404)
                return originResponse;
            }
            return response;
          } catch (error) {
            return console.error(error), new Response("Internal Error", { status: 500 });
          }
      };
    }
    exports.createRequestHandler = createRequestHandler3;
  }
});

// node_modules/@netlify/remix-edge-adapter/build/src/defaultRemixConfig.js
var require_defaultRemixConfig = __commonJS({
  "node_modules/@netlify/remix-edge-adapter/build/src/defaultRemixConfig.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.config = void 0;
    exports.config = {
      server: "./server.js",
      ignoredRouteFiles: ["**/.*"],
      serverBuildPath: ".netlify/edge-functions/server.js",
      serverConditions: ["deno", "worker"],
      serverDependenciesToBundle: "all",
      serverMainFields: ["module", "main"],
      serverModuleFormat: "esm",
      serverPlatform: "neutral",
      // See https://remix.run/docs/en/main/file-conventions/route-files-v2
      future: {
        v2_routeConvention: !0
      }
    };
  }
});

// node_modules/@netlify/remix-edge-adapter/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/@netlify/remix-edge-adapter/build/src/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.config = exports.createRequestHandler = void 0;
    require_globals();
    var server_1 = require_server2();
    Object.defineProperty(exports, "createRequestHandler", { enumerable: !0, get: function() {
      return server_1.createRequestHandler;
    } });
    var defaultRemixConfig_1 = require_defaultRemixConfig();
    Object.defineProperty(exports, "config", { enumerable: !0, get: function() {
      return defaultRemixConfig_1.config;
    } });
  }
});

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});

// node_modules/@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js
function _extends4() {
  return _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends4.apply(this, arguments);
}

// node_modules/@remix-run/react/dist/esm/components.js
var React3 = __toESM(require_react());
init_dist2();

// node_modules/@remix-run/react/dist/esm/errorBoundaries.js
var import_react = __toESM(require_react());
init_dist2();
var RemixErrorBoundary = class extends import_react.default.Component {
  constructor(props) {
    super(props), this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    return state.location !== props.location ? {
      error: props.error || null,
      location: props.location
    } : {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ import_react.default.createElement(this.props.component, {
      error: this.state.error
    }) : this.props.children;
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  return import_react.default.useEffect(() => {
    console.error(error);
  }, [error]), /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, viewport-fit=cover"
  }), /* @__PURE__ */ import_react.default.createElement("title", null, "Application Error!")), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), error.stack ? /* @__PURE__ */ import_react.default.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, error.stack) : null), /* @__PURE__ */ import_react.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
    }
  })));
}
function V2_RemixRootDefaultErrorBoundary() {
  let error = useRouteError();
  if (isRouteErrorResponse(error))
    return /* @__PURE__ */ import_react.default.createElement(RemixRootDefaultCatchBoundaryImpl, {
      caught: error
    });
  if (error instanceof Error)
    return /* @__PURE__ */ import_react.default.createElement(RemixRootDefaultErrorBoundary, {
      error
    });
  {
    let errorString = error == null ? "Unknown Error" : typeof error == "object" && "toString" in error ? error.toString() : JSON.stringify(error);
    return /* @__PURE__ */ import_react.default.createElement(RemixRootDefaultErrorBoundary, {
      error: new Error(errorString)
    });
  }
}
var RemixCatchContext = /* @__PURE__ */ import_react.default.createContext(void 0);
function useCatch() {
  return (0, import_react.useContext)(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component2,
  children
}) {
  return catchVal ? /* @__PURE__ */ import_react.default.createElement(RemixCatchContext.Provider, {
    value: catchVal
  }, /* @__PURE__ */ import_react.default.createElement(Component2, null)) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  let caught = useCatch();
  return /* @__PURE__ */ import_react.default.createElement(RemixRootDefaultCatchBoundaryImpl, {
    caught
  });
}
function RemixRootDefaultCatchBoundaryImpl({
  caught
}) {
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, viewport-fit=cover"
  }), /* @__PURE__ */ import_react.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement("h1", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
    }
  })));
}

// node_modules/@remix-run/react/dist/esm/invariant.js
function invariant2(value, message) {
  if (value === !1 || value === null || typeof value > "u")
    throw new Error(message);
}

// node_modules/@remix-run/react/dist/esm/links.js
init_dist2();

// node_modules/@remix-run/react/dist/esm/routeModules.js
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache)
    return routeModulesCache[route.id];
  try {
    let routeModule = await import(
      /* webpackIgnore: true */
      route.module
    );
    return routeModulesCache[route.id] = routeModule, routeModule;
  } catch {
    return window.location.reload(), new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/dist/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _module$links;
    let module = routeModules[match.route.id];
    return ((_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || [];
  }).flat(1), preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page == "string";
}
function isHtmlLinkDescriptor(object) {
  return object == null ? !1 : object.href == null ? object.rel === "preload" && (typeof object.imageSrcSet == "string" || typeof object.imagesrcset == "string") && (typeof object.imageSizes == "string" || typeof object.imagesizes == "string") : typeof object.rel == "string" && typeof object.href == "string";
}
async function getStylesheetPrefetchLinks(matches, manifest, routeModules) {
  return (await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(manifest.routes[match.route.id], routeModules);
    return mod.links ? mod.links() : [];
  }))).flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "preload" ? {
    ...link,
    rel: "prefetch"
  } : {
    ...link,
    rel: "prefetch",
    as: "style"
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location2, mode) {
  let path = parsePathPatch(page), isNew = (match, index2) => currentMatches[index2] ? match.route.id !== currentMatches[index2].route.id : !0, matchPathChanged = (match, index2) => {
    var _currentMatches$index;
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index2].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((_currentMatches$index = currentMatches[index2].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index2].params["*"] !== match.params["*"]
    );
  };
  return mode === "data" && location2.search !== path.search ? (
    // this is really similar to stuff in transition.ts, maybe somebody smarter
    // than me (or in less of a hurry) can share some of it. You're the best.
    nextMatches.filter((match, index2) => {
      if (!manifest.routes[match.route.id].hasLoader)
        return !1;
      if (isNew(match, index2) || matchPathChanged(match, index2))
        return !0;
      if (match.route.shouldRevalidate) {
        var _currentMatches$;
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(location2.pathname + location2.search + location2.hash, window.origin),
          currentParams: ((_currentMatches$ = currentMatches[0]) === null || _currentMatches$ === void 0 ? void 0 : _currentMatches$.params) || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: !0
        });
        if (typeof routeChoice == "boolean")
          return routeChoice;
      }
      return !0;
    })
  ) : nextMatches.filter((match, index2) => {
    let manifestRoute = manifest.routes[match.route.id];
    return (mode === "assets" || manifestRoute.hasLoader) && (isNew(match, index2) || matchPathChanged(match, index2));
  });
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path, searchParams = new URLSearchParams(search);
    return searchParams.set("_data", match.route.id), `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id], hrefs = [route.module];
    return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id], hrefs = [route.module];
    return route.imports && (hrefs = hrefs.concat(route.imports)), hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set(), preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    if (!isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href))
      return deduped;
    let str = JSON.stringify(descriptor);
    return set.has(str) || (set.add(str), deduped.push(descriptor)), deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  return path.search === void 0 && (path.search = ""), path;
}

// node_modules/@remix-run/react/dist/esm/markup.js
var ESCAPE_LOOKUP = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
}, ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function createHtml(html) {
  return {
    __html: html
  };
}

// node_modules/@remix-run/react/dist/esm/transition.js
var IDLE_FETCHER2 = {
  state: "idle",
  type: "init",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0,
  submission: void 0
};

// node_modules/@remix-run/react/dist/esm/components.js
function useDataRouterContext3() {
  let context = React3.useContext(DataRouterContext);
  return invariant2(context, "You must render this element inside a <DataRouterContext.Provider> element"), context;
}
function useDataRouterStateContext() {
  let context = React3.useContext(DataRouterStateContext);
  return invariant2(context, "You must render this element inside a <DataRouterStateContext.Provider> element"), context;
}
var RemixContext = /* @__PURE__ */ React3.createContext(void 0);
RemixContext.displayName = "Remix";
function useRemixContext() {
  let context = React3.useContext(RemixContext);
  return invariant2(context, "You must render this element inside a <Remix> element"), context;
}
function RemixRoute({
  id
}) {
  let {
    routeModules,
    future: future2
  } = useRemixContext();
  invariant2(routeModules, `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);
  let {
    default: Component2,
    ErrorBoundary,
    CatchBoundary
  } = routeModules[id];
  return !Component2 && (ErrorBoundary || !future2.v2_errorBoundary && CatchBoundary) && (Component2 = Outlet), invariant2(Component2, `Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`), /* @__PURE__ */ React3.createElement(Component2, null);
}
function RemixRouteError({
  id
}) {
  let {
    future: future2,
    routeModules
  } = useRemixContext();
  invariant2(routeModules, `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`);
  let error = useRouteError(), {
    CatchBoundary,
    ErrorBoundary
  } = routeModules[id];
  if (future2.v2_errorBoundary) {
    if (id === "root" && (ErrorBoundary || (ErrorBoundary = V2_RemixRootDefaultErrorBoundary)), ErrorBoundary)
      return /* @__PURE__ */ React3.createElement(ErrorBoundary, null);
    throw error;
  }
  if (id === "root" && (CatchBoundary || (CatchBoundary = RemixRootDefaultCatchBoundary), ErrorBoundary || (ErrorBoundary = RemixRootDefaultErrorBoundary)), isRouteErrorResponse(error)) {
    let tError = error;
    if (tError != null && tError.error && tError.status !== 404 && ErrorBoundary)
      return /* @__PURE__ */ React3.createElement(ErrorBoundary, {
        error: tError.error
      });
    if (CatchBoundary)
      return /* @__PURE__ */ React3.createElement(RemixCatchBoundary, {
        catch: error,
        component: CatchBoundary
      });
  }
  if (error instanceof Error && ErrorBoundary)
    return /* @__PURE__ */ React3.createElement(ErrorBoundary, {
      error
    });
  throw error;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React3.useState(!1), [shouldPrefetch, setShouldPrefetch] = React3.useState(!1), {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps, ref = React3.useRef(null);
  React3.useEffect(() => {
    if (prefetch === "render" && setShouldPrefetch(!0), prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry2) => {
          setShouldPrefetch(entry2.isIntersecting);
        });
      }, observer = new IntersectionObserver(callback, {
        threshold: 0.5
      });
      return ref.current && observer.observe(ref.current), () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  let setIntent = () => {
    prefetch === "intent" && setMaybePrefetch(!0);
  }, cancelIntent = () => {
    prefetch === "intent" && (setMaybePrefetch(!1), setShouldPrefetch(!1));
  };
  return React3.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(!0);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]), [shouldPrefetch, ref, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var ABSOLUTE_URL_REGEX3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, NavLink2 = /* @__PURE__ */ React3.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let isAbsolute = typeof to == "string" && ABSOLUTE_URL_REGEX3.test(to), href = useHref(to), [shouldPrefetch, ref, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(NavLink, _extends4({}, props, prefetchHandlers, {
    ref: mergeRefs(forwardedRef, ref),
    to
  })), shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink2.displayName = "NavLink";
var Link2 = /* @__PURE__ */ React3.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let isAbsolute = typeof to == "string" && ABSOLUTE_URL_REGEX3.test(to), href = useHref(to), [shouldPrefetch, ref, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(Link, _extends4({}, props, prefetchHandlers, {
    ref: mergeRefs(forwardedRef, ref),
    to
  })), shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link2.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event), event.defaultPrevented || ourHandler(event);
  };
}
var linksWarning = "\u26A0\uFE0F REMIX FUTURE CHANGE: The behavior of links `imagesizes` and `imagesrcset` will be changing in v2. Only the React camel case versions will be valid. Please change to `imageSizes` and `imageSrcSet`. For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#links-imagesizes-and-imagesrcset";
var fetcherTypeWarning = "\u26A0\uFE0F REMIX FUTURE CHANGE: `fetcher.type` will be removed in v2. Please use `fetcher.state`, `fetcher.formData`, and `fetcher.data` to achieve the same UX. For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#usefetcher", fetcherSubmissionWarning = "\u26A0\uFE0F REMIX FUTURE CHANGE : `fetcher.submission` will be removed in v2. The submission fields are now part of the fetcher object itself (`fetcher.formData`). For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#usefetcher";
function Links() {
  let {
    manifest,
    routeModules
  } = useRemixContext(), {
    errors,
    matches: routerMatches
  } = useDataRouterStateContext(), matches = errors ? routerMatches.slice(0, routerMatches.findIndex((m2) => errors[m2.route.id]) + 1) : routerMatches, links4 = React3.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return React3.useEffect(() => {
    links4.some((link) => "imagesizes" in link || "imagesrcset" in link) && void 0;
  }, [links4]), /* @__PURE__ */ React3.createElement(React3.Fragment, null, links4.map((link) => {
    if (isPageLinkDescriptor(link))
      return /* @__PURE__ */ React3.createElement(PrefetchPageLinks, _extends4({
        key: link.page
      }, link));
    let imageSrcSet = null;
    return "useId" in React3 ? (link.imagesrcset && (link.imageSrcSet = imageSrcSet = link.imagesrcset, delete link.imagesrcset), link.imagesizes && (link.imageSizes = link.imagesizes, delete link.imagesizes)) : (link.imageSrcSet && (link.imagesrcset = imageSrcSet = link.imageSrcSet, delete link.imageSrcSet), link.imageSizes && (link.imagesizes = link.imageSizes, delete link.imageSizes)), /* @__PURE__ */ React3.createElement("link", _extends4({
      key: link.rel + (link.href || "") + (imageSrcSet || "")
    }, link));
  }));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    router
  } = useDataRouterContext3(), matches = React3.useMemo(() => matchRoutes(router.routes, page), [router.routes, page]);
  return matches ? /* @__PURE__ */ React3.createElement(PrefetchPageLinksImpl, _extends4({
    page,
    matches
  }, dataLinkProps)) : (console.warn(`Tried to prefetch ${page} but no routes matched.`), null);
}
function usePrefetchedStylesheets(matches) {
  let {
    manifest,
    routeModules
  } = useRemixContext(), [styleLinks, setStyleLinks] = React3.useState([]);
  return React3.useEffect(() => {
    let interrupted = !1;
    return getStylesheetPrefetchLinks(matches, manifest, routeModules).then((links4) => {
      interrupted || setStyleLinks(links4);
    }), () => {
      interrupted = !0;
    };
  }, [matches, manifest, routeModules]), styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location2 = useLocation(), {
    manifest
  } = useRemixContext(), {
    matches
  } = useDataRouterStateContext(), newMatchesForData = React3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location2, "data"), [page, nextMatches, matches, manifest, location2]), newMatchesForAssets = React3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location2, "assets"), [page, nextMatches, matches, manifest, location2]), dataHrefs = React3.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]), moduleHrefs = React3.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]), styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React3.createElement("link", _extends4({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React3.createElement("link", _extends4({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ React3.createElement("link", _extends4({
      key: link.href
    }, link))
  )));
}
function V1Meta() {
  let {
    routeModules
  } = useRemixContext(), {
    errors,
    matches: routerMatches,
    loaderData
  } = useDataRouterStateContext(), location2 = useLocation(), matches = errors ? routerMatches.slice(0, routerMatches.findIndex((m2) => errors[m2.route.id]) + 1) : routerMatches, meta4 = {}, parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id, data = loaderData[routeId], params = match.params, routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta == "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location: location2
      }) : routeModule.meta;
      if (routeMeta && Array.isArray(routeMeta))
        throw new Error(
          "The route at " + match.route.path + " returns an array. This is only supported with the `v2_meta` future flag in the Remix config. Either set the flag to `true` or update the route's meta function to return an object.\n\nTo reference the v1 meta function API, see https://remix.run/route/meta"
          // TODO: Add link to the docs once they are written
          // + "\n\nTo reference future flags and the v2 meta API, see https://remix.run/file-conventions/remix-config#future-v2-meta."
        );
      Object.assign(meta4, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, Object.entries(meta4).map(([name, value]) => {
    if (!value)
      return null;
    if (["charset", "charSet"].includes(name))
      return /* @__PURE__ */ React3.createElement("meta", {
        key: "charSet",
        charSet: value
      });
    if (name === "title")
      return /* @__PURE__ */ React3.createElement("title", {
        key: "title"
      }, String(value));
    let isOpenGraphTag = /^(og|music|video|article|book|profile|fb):.+$/.test(name);
    return [value].flat().map((content) => isOpenGraphTag ? /* @__PURE__ */ React3.createElement("meta", {
      property: name,
      content,
      key: name + content
    }) : typeof content == "string" ? /* @__PURE__ */ React3.createElement("meta", {
      name,
      content,
      key: name + content
    }) : /* @__PURE__ */ React3.createElement("meta", _extends4({
      key: name + JSON.stringify(content)
    }, content)));
  }));
}
function V2Meta() {
  let {
    routeModules
  } = useRemixContext(), {
    errors,
    matches: routerMatches,
    loaderData
  } = useDataRouterStateContext(), location2 = useLocation(), _matches = errors ? routerMatches.slice(0, routerMatches.findIndex((m2) => errors[m2.route.id]) + 1) : routerMatches, meta4 = [], leafMeta = null, matches = [];
  for (let i2 = 0; i2 < _matches.length; i2++) {
    let _match = _matches[i2], routeId = _match.route.id, data = loaderData[routeId], params = _match.params, routeModule = routeModules[routeId], routeMeta = [], match = {
      id: routeId,
      data,
      meta: [],
      params: _match.params,
      pathname: _match.pathname,
      handle: _match.route.handle,
      // TODO: Remove in v2. Only leaving it for now because we used it in
      // examples and there's no reason to crash someone's build for one line.
      // They'll get a TS error from the type updates anyway.
      // @ts-expect-error
      get route() {
        return console.warn("The meta function in " + _match.route.path + " accesses the `route` property on `matches`. This is deprecated and will be removed in Remix version 2. See"), _match.route;
      }
    };
    if (matches[i2] = match, routeModule != null && routeModule.meta ? routeMeta = typeof routeModule.meta == "function" ? routeModule.meta({
      data,
      params,
      location: location2,
      matches
    }) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta : leafMeta && (routeMeta = [...leafMeta]), routeMeta = routeMeta || [], !Array.isArray(routeMeta))
      throw new Error("The `v2_meta` API is enabled in the Remix config, but the route at " + _match.route.path + ` returns an invalid value. In v2, all route meta functions must return an array of meta objects.

To reference the v1 meta function API, see https://remix.run/route/meta`);
    match.meta = routeMeta, matches[i2] = match, meta4 = [...routeMeta], leafMeta = meta4;
  }
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, meta4.flat().map((metaProps) => {
    if (!metaProps)
      return null;
    if ("tagName" in metaProps) {
      let tagName = metaProps.tagName;
      return delete metaProps.tagName, isValidMetaTag(tagName) ? /* @__PURE__ */ React3.createElement(tagName, _extends4({
        key: JSON.stringify(metaProps)
      }, metaProps)) : (console.warn(`A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`), null);
    }
    if ("title" in metaProps)
      return /* @__PURE__ */ React3.createElement("title", {
        key: "title"
      }, String(metaProps.title));
    if ("charset" in metaProps && (metaProps.charSet ?? (metaProps.charSet = metaProps.charset), delete metaProps.charset), "charSet" in metaProps && metaProps.charSet != null)
      return typeof metaProps.charSet == "string" ? /* @__PURE__ */ React3.createElement("meta", {
        key: "charSet",
        charSet: metaProps.charSet
      }) : null;
    if ("script:ld+json" in metaProps) {
      let json4 = null;
      try {
        json4 = JSON.stringify(metaProps["script:ld+json"]);
      } catch {
      }
      return json4 != null && /* @__PURE__ */ React3.createElement("script", {
        key: "script:ld+json",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(metaProps["script:ld+json"])
        }
      });
    }
    return /* @__PURE__ */ React3.createElement("meta", _extends4({
      key: JSON.stringify(metaProps)
    }, metaProps));
  }));
}
function isValidMetaTag(tagName) {
  return typeof tagName == "string" && /^(meta|link)$/.test(tagName);
}
function Meta() {
  let {
    future: future2
  } = useRemixContext();
  return future2 != null && future2.v2_meta ? /* @__PURE__ */ React3.createElement(V2Meta, null) : /* @__PURE__ */ React3.createElement(V1Meta, null);
}
function Await2(props) {
  return /* @__PURE__ */ React3.createElement(Await, props);
}
var isHydrated = !1;
function Scripts(props) {
  let {
    manifest,
    serverHandoffString,
    abortDelay,
    serializeError: serializeError2
  } = useRemixContext(), {
    router,
    static: isStatic,
    staticContext
  } = useDataRouterContext3(), {
    matches
  } = useDataRouterStateContext(), navigation = useNavigation();
  React3.useEffect(() => {
    isHydrated = !0;
  }, []);
  let serializePreResolvedErrorImp = (key, error) => {
    let toSerialize;
    return serializeError2 && error instanceof Error ? toSerialize = serializeError2(error) : toSerialize = error, `${JSON.stringify(key)}:__remixContext.p(!1, ${escapeHtml(JSON.stringify(toSerialize))})`;
  }, serializePreresolvedDataImp = (routeId, key, data) => {
    let serializedData;
    try {
      serializedData = JSON.stringify(data);
    } catch (error) {
      return serializePreResolvedErrorImp(key, error);
    }
    return `${JSON.stringify(key)}:__remixContext.p(${escapeHtml(serializedData)})`;
  }, serializeErrorImp = (routeId, key, error) => {
    let toSerialize;
    return serializeError2 && error instanceof Error ? toSerialize = serializeError2(error) : toSerialize = error, `__remixContext.r(${JSON.stringify(routeId)}, ${JSON.stringify(key)}, !1, ${escapeHtml(JSON.stringify(toSerialize))})`;
  }, serializeDataImp = (routeId, key, data) => {
    let serializedData;
    try {
      serializedData = JSON.stringify(data);
    } catch (error) {
      return serializeErrorImp(routeId, key, error);
    }
    return `__remixContext.r(${JSON.stringify(routeId)}, ${JSON.stringify(key)}, ${escapeHtml(serializedData)})`;
  }, deferredScripts = [], initialScripts = React3.useMemo(() => {
    var _manifest$hmr;
    let contextScript = staticContext ? `window.__remixContext = ${serverHandoffString};` : " ", activeDeferreds = staticContext == null ? void 0 : staticContext.activeDeferreds;
    contextScript += activeDeferreds ? ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof abortDelay == "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${abortDelay});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join(`
`) + Object.entries(activeDeferreds).map(([routeId, deferredData]) => {
      let pendingKeys = new Set(deferredData.pendingKeys), promiseKeyValues = deferredData.deferredKeys.map((key) => {
        if (pendingKeys.has(key))
          return deferredScripts.push(/* @__PURE__ */ React3.createElement(DeferredHydrationScript, {
            key: `${routeId} | ${key}`,
            deferredData,
            routeId,
            dataKey: key,
            scriptProps: props,
            serializeData: serializeDataImp,
            serializeError: serializeErrorImp
          })), `${JSON.stringify(key)}:__remixContext.n(${JSON.stringify(routeId)}, ${JSON.stringify(key)})`;
        {
          let trackedPromise = deferredData.data[key];
          return typeof trackedPromise._error < "u" ? serializePreResolvedErrorImp(key, trackedPromise._error) : serializePreresolvedDataImp(routeId, key, trackedPromise._data);
        }
      }).join(`,
`);
      return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(routeId)}], {${promiseKeyValues}});`;
    }).join(`
`) + (deferredScripts.length > 0 ? `__remixContext.a=${deferredScripts.length};` : "") : "";
    let routeModulesScript = isStatic ? `${(_manifest$hmr = manifest.hmr) !== null && _manifest$hmr !== void 0 && _manifest$hmr.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}import ${JSON.stringify(manifest.url)};
${matches.map((match, index2) => `import * as route${index2} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${matches.map((match, index2) => `${JSON.stringify(match.route.id)}:route${index2}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});` : " ";
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("script", _extends4({}, props, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: createHtml(contextScript),
      type: void 0
    })), /* @__PURE__ */ React3.createElement("script", _extends4({}, props, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module",
      async: !0
    })));
  }, []);
  if (!isStatic && typeof __remixContext == "object" && __remixContext.a)
    for (let i2 = 0; i2 < __remixContext.a; i2++)
      deferredScripts.push(/* @__PURE__ */ React3.createElement(DeferredHydrationScript, {
        key: i2,
        scriptProps: props,
        serializeData: serializeDataImp,
        serializeError: serializeErrorImp
      }));
  let nextMatches = React3.useMemo(() => {
    if (navigation.location) {
      let matches2 = matchRoutes(router.routes, navigation.location);
      return invariant2(matches2, `No routes match path "${navigation.location.pathname}"`), matches2;
    }
    return [];
  }, [navigation.location, router.routes]), routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1), preloads = isHydrated ? [] : manifest.entry.imports.concat(routePreloads);
  return isHydrated ? null : /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("link", {
    rel: "modulepreload",
    href: manifest.entry.module,
    crossOrigin: props.crossOrigin
  }), dedupe2(preloads).map((path) => /* @__PURE__ */ React3.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), initialScripts, deferredScripts);
}
function DeferredHydrationScript({
  dataKey,
  deferredData,
  routeId,
  scriptProps,
  serializeData,
  serializeError: serializeError2
}) {
  return typeof document > "u" && deferredData && dataKey && routeId && invariant2(deferredData.pendingKeys.includes(dataKey), `Deferred data for route ${routeId} with key ${dataKey} was not pending but tried to render a script for it.`), /* @__PURE__ */ React3.createElement(React3.Suspense, {
    fallback: (
      // This makes absolutely no sense. The server renders null as a fallback,
      // but when hydrating, we need to render a script tag to avoid a hydration issue.
      // To reproduce a hydration mismatch, just render null as a fallback.
      typeof document > "u" && deferredData && dataKey && routeId ? null : /* @__PURE__ */ React3.createElement("script", _extends4({}, scriptProps, {
        async: !0,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
          __html: " "
        }
      }))
    )
  }, typeof document > "u" && deferredData && dataKey && routeId ? /* @__PURE__ */ React3.createElement(Await2, {
    resolve: deferredData.data[dataKey],
    errorElement: /* @__PURE__ */ React3.createElement(ErrorDeferredHydrationScript, {
      dataKey,
      routeId,
      scriptProps,
      serializeError: serializeError2
    }),
    children: (data) => /* @__PURE__ */ React3.createElement("script", _extends4({}, scriptProps, {
      async: !0,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: serializeData(routeId, dataKey, data)
      }
    }))
  }) : /* @__PURE__ */ React3.createElement("script", _extends4({}, scriptProps, {
    async: !0,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: " "
    }
  })));
}
function ErrorDeferredHydrationScript({
  dataKey,
  routeId,
  scriptProps,
  serializeError: serializeError2
}) {
  let error = useAsyncError();
  return /* @__PURE__ */ React3.createElement("script", _extends4({}, scriptProps, {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: serializeError2(routeId, dataKey, error)
    }
  }));
}
function dedupe2(array) {
  return [...new Set(array)];
}
function useMatches2() {
  let {
    routeModules
  } = useRemixContext(), matches = useMatches();
  return React3.useMemo(() => matches.map((match) => ({
    id: match.id,
    pathname: match.pathname,
    params: match.params,
    data: match.data,
    // Need to grab handle here since we don't have it at client-side route
    // creation time
    handle: routeModules[match.id].handle
  })), [matches, routeModules]);
}
function useFetcher2() {
  let fetcherRR = useFetcher();
  return React3.useMemo(() => {
    let fetcherWithComponents = {
      ...convertRouterFetcherToRemixFetcher({
        state: fetcherRR.state,
        data: fetcherRR.data,
        formMethod: fetcherRR.formMethod,
        formAction: fetcherRR.formAction,
        formEncType: fetcherRR.formEncType,
        formData: fetcherRR.formData,
        json: fetcherRR.json,
        text: fetcherRR.text,
        " _hasFetcherDoneAnything ": fetcherRR[" _hasFetcherDoneAnything "]
      }),
      load: fetcherRR.load,
      submit: fetcherRR.submit,
      Form: fetcherRR.Form
    };
    return addFetcherDeprecationWarnings(fetcherWithComponents), fetcherWithComponents;
  }, [fetcherRR]);
}
function addFetcherDeprecationWarnings(fetcher) {
  let type = fetcher.type;
  Object.defineProperty(fetcher, "type", {
    get() {
      return type;
    },
    set(value) {
      type = value;
    },
    // These settings should make this behave like a normal object `type` field
    configurable: !0,
    enumerable: !0
  });
  let submission = fetcher.submission;
  Object.defineProperty(fetcher, "submission", {
    get() {
      return submission;
    },
    set(value) {
      submission = value;
    },
    // These settings should make this behave like a normal object `type` field
    configurable: !0,
    enumerable: !0
  });
}
function convertRouterFetcherToRemixFetcher(fetcherRR) {
  let {
    state,
    formMethod,
    formAction,
    formEncType,
    formData,
    json: json4,
    text,
    data
  } = fetcherRR, isActionSubmission = formMethod != null && ["POST", "PUT", "PATCH", "DELETE"].includes(formMethod.toUpperCase());
  if (state === "idle")
    return fetcherRR[" _hasFetcherDoneAnything "] === !0 ? {
      state: "idle",
      type: "done",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      submission: void 0,
      data
    } : IDLE_FETCHER2;
  if (state === "submitting" && formMethod && formAction && formEncType && (formData || json4 !== void 0 || text !== void 0)) {
    if (isActionSubmission)
      return {
        state,
        type: "actionSubmission",
        formMethod: formMethod.toUpperCase(),
        formAction,
        formEncType,
        formData,
        json: json4,
        text,
        // @ts-expect-error formData/json/text are mutually exclusive in the type,
        // so TS can't be sure these meet that criteria, but as a straight
        // assignment from the RR fetcher we know they will
        submission: {
          method: formMethod.toUpperCase(),
          action: formAction,
          encType: formEncType,
          formData,
          json: json4,
          text,
          key: ""
        },
        data
      };
    invariant2(!1, "Encountered an unexpected fetcher scenario in useFetcher()");
  }
  if (state === "loading" && formMethod && formAction && formEncType) {
    if (isActionSubmission)
      return data ? {
        state,
        type: "actionReload",
        formMethod: formMethod.toUpperCase(),
        formAction,
        formEncType,
        formData,
        json: json4,
        text,
        // @ts-expect-error formData/json/text are mutually exclusive in the type,
        // so TS can't be sure these meet that criteria, but as a straight
        // assignment from the RR fetcher we know they will
        submission: {
          method: formMethod.toUpperCase(),
          action: formAction,
          encType: formEncType,
          formData,
          json: json4,
          text,
          key: ""
        },
        data
      } : {
        state,
        type: "actionRedirect",
        formMethod: formMethod.toUpperCase(),
        formAction,
        formEncType,
        formData,
        json: json4,
        text,
        // @ts-expect-error formData/json/text are mutually exclusive in the type,
        // so TS can't be sure these meet that criteria, but as a straight
        // assignment from the RR fetcher we know they will
        submission: {
          method: formMethod.toUpperCase(),
          action: formAction,
          encType: formEncType,
          formData,
          json: json4,
          text,
          key: ""
        },
        data: void 0
      };
    {
      let url = new URL(formAction, window.location.origin);
      return formData && (url.search = new URLSearchParams(formData.entries()).toString()), {
        state: "submitting",
        type: "loaderSubmission",
        formMethod: formMethod.toUpperCase(),
        formAction,
        formEncType,
        formData,
        json: json4,
        text,
        // @ts-expect-error formData/json/text are mutually exclusive in the type,
        // so TS can't be sure these meet that criteria, but as a straight
        // assignment from the RR fetcher we know they will
        submission: {
          method: formMethod.toUpperCase(),
          action: url.pathname + url.search,
          encType: formEncType,
          formData,
          json: json4,
          text,
          key: ""
        },
        data
      };
    }
  }
  return {
    state: "loading",
    type: "normalLoad",
    formMethod: void 0,
    formAction: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    formEncType: void 0,
    submission: void 0,
    data
  };
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      typeof ref == "function" ? ref(value) : ref != null && (ref.current = value);
    });
  };
}

// node_modules/@remix-run/react/dist/esm/routes.js
var React4 = __toESM(require_react());
function groupRoutesByParentId(manifest) {
  let routes2 = {};
  return Object.values(manifest).forEach((route) => {
    let parentId = route.parentId || "";
    routes2[parentId] || (routes2[parentId] = []), routes2[parentId].push(route);
  }), routes2;
}
function createServerRoutes(manifest, routeModules, future2, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let hasErrorBoundary = future2.v2_errorBoundary === !0 ? route.id === "root" || route.hasErrorBoundary : route.id === "root" || route.hasCatchBoundary || route.hasErrorBoundary, dataRoute = {
      caseSensitive: route.caseSensitive,
      element: /* @__PURE__ */ React4.createElement(RemixRoute, {
        id: route.id
      }),
      errorElement: hasErrorBoundary ? /* @__PURE__ */ React4.createElement(RemixRouteError, {
        id: route.id
      }) : void 0,
      id: route.id,
      index: route.index,
      path: route.path,
      handle: routeModules[route.id].handle
      // Note: we don't need loader/action/shouldRevalidate on these routes
      // since they're for a static render
    }, children = createServerRoutes(manifest, routeModules, future2, route.id, routesByParentId);
    return children.length > 0 && (dataRoute.children = children), dataRoute;
  });
}

// node_modules/@remix-run/react/dist/esm/index.js
init_dist2();

// node_modules/@remix-run/react/dist/esm/scroll-restoration.js
var React5 = __toESM(require_react());
init_dist2();
var STORAGE_KEY = "positions";
function ScrollRestoration2({
  getKey,
  ...props
}) {
  let location2 = useLocation(), matches = useMatches2();
  useScrollRestoration({
    getKey,
    storageKey: STORAGE_KEY
  });
  let key = React5.useMemo(
    () => {
      if (!getKey)
        return null;
      let userKey = getKey(location2, matches);
      return userKey !== location2.key ? userKey : null;
    },
    // Nah, we only need this the first time for the SSR render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), restoreScroll = ((STORAGE_KEY2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key2 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: key2
      }, "");
    }
    try {
      let storedY = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}")[restoreKey || window.history.state.key];
      typeof storedY == "number" && window.scrollTo(0, storedY);
    } catch (error) {
      console.error(error), sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ React5.createElement("script", _extends4({}, props, {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)}, ${JSON.stringify(key)})`
    }
  }));
}

// node_modules/@remix-run/react/dist/esm/server.js
var React6 = __toESM(require_react()), import_server = __toESM(require_server());
function RemixServer({
  context,
  url,
  abortDelay
}) {
  typeof url == "string" && (url = new URL(url));
  let {
    manifest,
    routeModules,
    serverHandoffString
  } = context, routes2 = createServerRoutes(manifest.routes, routeModules, context.future), router = (0, import_server.createStaticRouter)(routes2, context.staticHandlerContext);
  return /* @__PURE__ */ React6.createElement(RemixContext.Provider, {
    value: {
      manifest,
      routeModules,
      serverHandoffString,
      future: context.future,
      serializeError: context.serializeError,
      abortDelay
    }
  }, /* @__PURE__ */ React6.createElement(RemixErrorBoundary, {
    location: router.state.location,
    component: RemixRootDefaultErrorBoundary
  }, /* @__PURE__ */ React6.createElement(import_server.StaticRouterProvider, {
    router,
    context: context.staticHandlerContext,
    hydrate: !1
  })));
}

// app/entry.server.tsx
var import_server3 = __toESM(require_server_browser()), import_jsx_runtime = __toESM(require_jsx_runtime());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server3.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root
});

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever, util2.arrayToEnum = (items) => {
    let obj = {};
    for (let item of items)
      obj[item] = item;
    return obj;
  }, util2.getValidEnumValues = (obj) => {
    let validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] != "number"), filtered = {};
    for (let k of validKeys)
      filtered[k] = obj[k];
    return util2.objectValues(filtered);
  }, util2.objectValues = (obj) => util2.objectKeys(obj).map(function(e2) {
    return obj[e2];
  }), util2.objectKeys = typeof Object.keys == "function" ? (obj) => Object.keys(obj) : (object) => {
    let keys = [];
    for (let key in object)
      Object.prototype.hasOwnProperty.call(object, key) && keys.push(key);
    return keys;
  }, util2.find = (arr, checker) => {
    for (let item of arr)
      if (checker(item))
        return item;
  }, util2.isInteger = typeof Number.isInteger == "function" ? (val) => Number.isInteger(val) : (val) => typeof val == "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val == "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues, util2.jsonStringifyReplacer = (_, value) => typeof value == "bigint" ? value.toString() : value;
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => ({
    ...first,
    ...second
    // second overwrites first
  });
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), getParsedType = (data) => {
  switch (typeof data) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      return Array.isArray(data) ? ZodParsedType.array : data === null ? ZodParsedType.null : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && data instanceof Map ? ZodParsedType.map : typeof Set < "u" && data instanceof Set ? ZodParsedType.set : typeof Date < "u" && data instanceof Date ? ZodParsedType.date : ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), quotelessJson = (obj) => JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, "$1:"), ZodError = class extends Error {
  constructor(issues) {
    super(), this.issues = [], this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    }, this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    let actualProto = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, actualProto) : this.__proto__ = actualProto, this.name = "ZodError", this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    let mapper = _mapper || function(issue) {
      return issue.message;
    }, fieldErrors = { _errors: [] }, processError = (error) => {
      for (let issue of error.issues)
        if (issue.code === "invalid_union")
          issue.unionErrors.map(processError);
        else if (issue.code === "invalid_return_type")
          processError(issue.returnTypeError);
        else if (issue.code === "invalid_arguments")
          processError(issue.argumentsError);
        else if (issue.path.length === 0)
          fieldErrors._errors.push(mapper(issue));
        else {
          let curr = fieldErrors, i2 = 0;
          for (; i2 < issue.path.length; ) {
            let el = issue.path[i2];
            i2 === issue.path.length - 1 ? (curr[el] = curr[el] || { _errors: [] }, curr[el]._errors.push(mapper(issue))) : curr[el] = curr[el] || { _errors: [] }, curr = curr[el], i2++;
          }
        }
    };
    return processError(this), fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    let fieldErrors = {}, formErrors = [];
    for (let sub of this.issues)
      sub.path.length > 0 ? (fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [], fieldErrors[sub.path[0]].push(mapper(sub))) : formErrors.push(mapper(sub));
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => new ZodError(issues);
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      issue.received === ZodParsedType.undefined ? message = "Required" : message = `Expected ${issue.expected}, received ${issue.received}`;
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      message = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      message = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      typeof issue.validation == "object" ? "includes" in issue.validation ? (message = `Invalid input: must include "${issue.validation.includes}"`, typeof issue.validation.position == "number" && (message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`)) : "startsWith" in issue.validation ? message = `Invalid input: must start with "${issue.validation.startsWith}"` : "endsWith" in issue.validation ? message = `Invalid input: must end with "${issue.validation.endsWith}"` : util.assertNever(issue.validation) : issue.validation !== "regex" ? message = `Invalid ${issue.validation}` : message = "Invalid";
      break;
    case ZodIssueCode.too_small:
      issue.type === "array" ? message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? "at least" : "more than"} ${issue.minimum} element(s)` : issue.type === "string" ? message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? "at least" : "over"} ${issue.minimum} character(s)` : issue.type === "number" ? message = `Number must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${issue.minimum}` : issue.type === "date" ? message = `Date must be ${issue.exact ? "exactly equal to " : issue.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(issue.minimum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      issue.type === "array" ? message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? "at most" : "less than"} ${issue.maximum} element(s)` : issue.type === "string" ? message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? "at most" : "under"} ${issue.maximum} character(s)` : issue.type === "number" ? message = `Number must be ${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} ${issue.maximum}` : issue.type === "bigint" ? message = `BigInt must be ${issue.exact ? "exactly" : issue.inclusive ? "less than or equal to" : "less than"} ${issue.maximum}` : issue.type === "date" ? message = `Date must be ${issue.exact ? "exactly" : issue.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(issue.maximum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError, util.assertNever(issue);
  }
  return { message };
}, overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  let { data, path, errorMaps, issueData } = params, fullPath = [...path, ...issueData.path || []], fullIssue = {
    ...issueData,
    path: fullPath
  }, errorMessage = "", maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (let map of maps)
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
}, EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  let issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(status, results) {
    let arrayValue = [];
    for (let s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      s2.status === "dirty" && status.dirty(), arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    let syncPairs = [];
    for (let pair of pairs)
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    let finalObject = {};
    for (let pair of pairs) {
      let { key, value } = pair;
      if (key.status === "aborted" || value.status === "aborted")
        return INVALID;
      key.status === "dirty" && status.dirty(), value.status === "dirty" && status.dirty(), key.value !== "__proto__" && (typeof value.value < "u" || pair.alwaysSet) && (finalObject[key.value] = value.value);
    }
    return { status: status.value, value: finalObject };
  }
}, INVALID = Object.freeze({
  status: "aborted"
}), DIRTY = (value) => ({ status: "dirty", value }), OK = (value) => ({ status: "valid", value }), isAborted = (x2) => x2.status === "aborted", isDirty = (x2) => x2.status === "dirty", isValid = (x2) => x2.status === "valid", isAsync = (x2) => typeof Promise < "u" && x2 instanceof Promise, errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message == "string" ? { message } : message || {}, errorUtil2.toString = (message) => typeof message == "string" ? message : message == null ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [], this.parent = parent, this.data = value, this._path = path, this._key = key;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}, handleResult = (ctx, result) => {
  if (isValid(result))
    return { success: !0, data: result.value };
  if (!ctx.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      let error = new ZodError(ctx.common.issues);
      return this._error = error, this._error;
    }
  };
};
function processCreateParams(params) {
  if (!params)
    return {};
  let { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return errorMap2 ? { errorMap: errorMap2, description } : { errorMap: (iss, ctx) => iss.code !== "invalid_type" ? { message: ctx.defaultError } : typeof ctx.data > "u" ? { message: required_error ?? ctx.defaultError } : { message: invalid_type_error ?? ctx.defaultError }, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync, this._def = def, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    let result = this._parse(input);
    if (isAsync(result))
      throw new Error("Synchronous parse encountered promise.");
    return result;
  }
  _parseAsync(input) {
    let result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    let result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a7;
    let ctx = {
      common: {
        issues: [],
        async: (_a7 = params == null ? void 0 : params.async) !== null && _a7 !== void 0 ? _a7 : !1,
        contextualErrorMap: params == null ? void 0 : params.errorMap
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    let result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    let ctx = {
      common: {
        issues: [],
        contextualErrorMap: params == null ? void 0 : params.errorMap,
        async: !0
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx }), result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    let getIssueProperties = (val) => typeof message == "string" || typeof message > "u" ? { message } : typeof message == "function" ? message(val) : message;
    return this._refinement((val, ctx) => {
      let result = check(val), setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      return typeof Promise < "u" && result instanceof Promise ? result.then((data) => data ? !0 : (setError(), !1)) : result ? !0 : (setError(), !1);
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => check(val) ? !0 : (ctx.addIssue(typeof refinementData == "function" ? refinementData(val, ctx) : refinementData), !1));
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    let defaultValueFunc = typeof def == "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    let catchValueFunc = typeof def == "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    let This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}, cuidRegex = /^c[^\s-]{8,}$/i, cuid2Regex = /^[a-z][a-z0-9]*$/, ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/, uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, _emojiRegex = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", emojiRegex, ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, datetimeRegex = (args) => args.precision ? args.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`) : args.precision === 0 ? args.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : args.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function isValidIP(ip, version) {
  return !!((version === "v4" || !version) && ipv4Regex.test(ip) || (version === "v6" || !version) && ipv6Regex.test(ip));
}
var ZodString = class extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = String(input.data)), this._getType(input) !== ZodParsedType.string) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      ), INVALID;
    }
    let status = new ParseStatus(), ctx;
    for (let check of this._def.checks)
      if (check.kind === "min")
        input.data.length < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "max")
        input.data.length > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "length") {
        let tooBig = input.data.length > check.value, tooSmall = input.data.length < check.value;
        (tooBig || tooSmall) && (ctx = this._getOrReturnCtx(input, ctx), tooBig ? addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }) : tooSmall && addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }), status.dirty());
      } else if (check.kind === "email")
        emailRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "email",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "emoji")
        emojiRegex || (emojiRegex = new RegExp(_emojiRegex, "u")), emojiRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "emoji",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "uuid")
        uuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "uuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid")
        cuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid2")
        cuid2Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid2",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "ulid")
        ulidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ulid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "url")
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          }), status.dirty();
        }
      else
        check.kind === "regex" ? (check.regex.lastIndex = 0, check.regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "regex",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty())) : check.kind === "trim" ? input.data = input.data.trim() : check.kind === "includes" ? input.data.includes(check.value, check.position) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: { includes: check.value, position: check.position },
          message: check.message
        }), status.dirty()) : check.kind === "toLowerCase" ? input.data = input.data.toLowerCase() : check.kind === "toUpperCase" ? input.data = input.data.toUpperCase() : check.kind === "startsWith" ? input.data.startsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: { startsWith: check.value },
          message: check.message
        }), status.dirty()) : check.kind === "endsWith" ? input.data.endsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: { endsWith: check.value },
          message: check.message
        }), status.dirty()) : check.kind === "datetime" ? datetimeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_string,
          validation: "datetime",
          message: check.message
        }), status.dirty()) : check.kind === "ip" ? isValidIP(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ip",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a7;
    return typeof options == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: options
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (options == null ? void 0 : options.precision) > "u" ? null : options == null ? void 0 : options.precision,
      offset: (_a7 = options == null ? void 0 : options.offset) !== null && _a7 !== void 0 ? _a7 : !1,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options == null ? void 0 : options.position,
      ...errorUtil.errToObj(options == null ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxLength() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodString.create = (params) => {
  var _a7;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a7 = params == null ? void 0 : params.coerce) !== null && _a7 !== void 0 ? _a7 : !1,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  let valDecCount = (val.toString().split(".")[1] || "").length, stepDecCount = (step.toString().split(".")[1] || "").length, decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount, valInt = parseInt(val.toFixed(decCount).replace(".", "")), stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = Number(input.data)), this._getType(input) !== ZodParsedType.number) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx, status = new ParseStatus();
    for (let check of this._def.checks)
      check.kind === "int" ? util.isInteger(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: "integer",
        received: "float",
        message: check.message
      }), status.dirty()) : check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? floatSafeRemainder(input.data, check.value) !== 0 && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : check.kind === "finite" ? Number.isFinite(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_finite,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (let ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf")
        return !0;
      ch.kind === "min" ? (min === null || ch.value > min) && (min = ch.value) : ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => new ZodNumber({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: (params == null ? void 0 : params.coerce) || !1,
  ...processCreateParams(params)
});
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = BigInt(input.data)), this._getType(input) !== ZodParsedType.bigint) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx, status = new ParseStatus();
    for (let check of this._def.checks)
      check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        type: "bigint",
        minimum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        type: "bigint",
        maximum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? input.data % check.value !== BigInt(0) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a7;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a7 = params == null ? void 0 : params.coerce) !== null && _a7 !== void 0 ? _a7 : !1,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = Boolean(input.data)), this._getType(input) !== ZodParsedType.boolean) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => new ZodBoolean({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: (params == null ? void 0 : params.coerce) || !1,
  ...processCreateParams(params)
});
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = new Date(input.data)), this._getType(input) !== ZodParsedType.date) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      }), INVALID;
    }
    if (isNaN(input.data.getTime())) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      }), INVALID;
    }
    let status = new ParseStatus(), ctx;
    for (let check of this._def.checks)
      check.kind === "min" ? input.data.getTime() < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        message: check.message,
        inclusive: !0,
        exact: !1,
        minimum: check.value,
        type: "date"
      }), status.dirty()) : check.kind === "max" ? input.data.getTime() > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        message: check.message,
        inclusive: !0,
        exact: !1,
        maximum: check.value,
        type: "date"
      }), status.dirty()) : util.assertNever(check);
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => new ZodDate({
  checks: [],
  coerce: (params == null ? void 0 : params.coerce) || !1,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...processCreateParams(params)
});
var ZodSymbol = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.symbol) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => new ZodSymbol({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...processCreateParams(params)
});
var ZodUndefined = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => new ZodUndefined({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...processCreateParams(params)
});
var ZodNull = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.null) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => new ZodNull({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...processCreateParams(params)
});
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => new ZodAny({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...processCreateParams(params)
});
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => new ZodUnknown({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...processCreateParams(params)
});
var ZodNever = class extends ZodType {
  _parse(input) {
    let ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    }), INVALID;
  }
};
ZodNever.create = (params) => new ZodNever({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...processCreateParams(params)
});
var ZodVoid = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => new ZodVoid({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...processCreateParams(params)
});
var ZodArray = class extends ZodType {
  _parse(input) {
    let { ctx, status } = this._processInputParams(input), def = this._def;
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (def.exactLength !== null) {
      let tooBig = ctx.data.length > def.exactLength.value, tooSmall = ctx.data.length < def.exactLength.value;
      (tooBig || tooSmall) && (addIssueToContext(ctx, {
        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: tooSmall ? def.exactLength.value : void 0,
        maximum: tooBig ? def.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: def.exactLength.message
      }), status.dirty());
    }
    if (def.minLength !== null && ctx.data.length < def.minLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.minLength.message
    }), status.dirty()), def.maxLength !== null && ctx.data.length > def.maxLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.maxLength.message
    }), status.dirty()), ctx.common.async)
      return Promise.all([...ctx.data].map((item, i2) => def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2)))).then((result2) => ParseStatus.mergeArray(status, result2));
    let result = [...ctx.data].map((item, i2) => def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => new ZodArray({
  type: schema,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...processCreateParams(params)
});
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    let newShape = {};
    for (let key in schema.shape) {
      let fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else
    return schema instanceof ZodArray ? new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    }) : schema instanceof ZodOptional ? ZodOptional.create(deepPartialify(schema.unwrap())) : schema instanceof ZodNullable ? ZodNullable.create(deepPartialify(schema.unwrap())) : schema instanceof ZodTuple ? ZodTuple.create(schema.items.map((item) => deepPartialify(item))) : schema;
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    let shape = this._def.shape(), keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.object) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      }), INVALID;
    }
    let { status, ctx } = this._processInputParams(input), { shape, keys: shapeKeys } = this._getCached(), extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip"))
      for (let key in ctx.data)
        shapeKeys.includes(key) || extraKeys.push(key);
    let pairs = [];
    for (let key of shapeKeys) {
      let keyValidator = shape[key], value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      let unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough")
        for (let key of extraKeys)
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
      else if (unknownKeys === "strict")
        extraKeys.length > 0 && (addIssueToContext(ctx, {
          code: ZodIssueCode.unrecognized_keys,
          keys: extraKeys
        }), status.dirty());
      else if (unknownKeys !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let catchall = this._def.catchall;
      for (let key of extraKeys) {
        let value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    return ctx.common.async ? Promise.resolve().then(async () => {
      let syncPairs = [];
      for (let pair of pairs) {
        let key = await pair.key;
        syncPairs.push({
          key,
          value: await pair.value,
          alwaysSet: pair.alwaysSet
        });
      }
      return syncPairs;
    }).then((syncPairs) => ParseStatus.mergeObjectSync(status, syncPairs)) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    return errorUtil.errToObj, new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a7, _b, _c, _d;
          let defaultError = (_c = (_b = (_a7 = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a7, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          return issue.code === "unrecognized_keys" ? {
            message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
          } : {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    return new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index2) {
    return new ZodObject({
      ...this._def,
      catchall: index2
    });
  }
  pick(mask) {
    let shape = {};
    return util.objectKeys(mask).forEach((key) => {
      mask[key] && this.shape[key] && (shape[key] = this.shape[key]);
    }), new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    let shape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      mask[key] || (shape[key] = this.shape[key]);
    }), new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    let newShape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      let fieldSchema = this.shape[key];
      mask && !mask[key] ? newShape[key] = fieldSchema : newShape[key] = fieldSchema.optional();
    }), new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    let newShape = {};
    return util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key])
        newShape[key] = this.shape[key];
      else {
        let newField = this.shape[key];
        for (; newField instanceof ZodOptional; )
          newField = newField._def.innerType;
        newShape[key] = newField;
      }
    }), new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.strictCreate = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strict",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.lazycreate = (shape, params) => new ZodObject({
  shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
var ZodUnion = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), options = this._def.options;
    function handleResults(results) {
      for (let result of results)
        if (result.result.status === "valid")
          return result.result;
      for (let result of results)
        if (result.result.status === "dirty")
          return ctx.common.issues.push(...result.ctx.common.issues), result.result;
      let unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
    if (ctx.common.async)
      return Promise.all(options.map(async (option) => {
        let childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    {
      let dirty, issues = [];
      for (let option of options) {
        let childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        }, result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid")
          return result;
        result.status === "dirty" && !dirty && (dirty = { result, ctx: childCtx }), childCtx.common.issues.length && issues.push(childCtx.common.issues);
      }
      if (dirty)
        return ctx.common.issues.push(...dirty.ctx.common.issues), dirty.result;
      let unionErrors = issues.map((issues2) => new ZodError(issues2));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => new ZodUnion({
  options: types,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...processCreateParams(params)
});
var getDiscriminator = (type) => type instanceof ZodLazy ? getDiscriminator(type.schema) : type instanceof ZodEffects ? getDiscriminator(type.innerType()) : type instanceof ZodLiteral ? [type.value] : type instanceof ZodEnum ? type.options : type instanceof ZodNativeEnum ? Object.keys(type.enum) : type instanceof ZodDefault ? getDiscriminator(type._def.innerType) : type instanceof ZodUndefined ? [void 0] : type instanceof ZodNull ? [null] : null, ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    let discriminator = this.discriminator, discriminatorValue = ctx.data[discriminator], option = this.optionsMap.get(discriminatorValue);
    return option ? ctx.common.async ? option._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : option._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : (addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [discriminator]
    }), INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    let optionsMap = /* @__PURE__ */ new Map();
    for (let type of options) {
      let discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues)
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      for (let value of discriminatorValues) {
        if (optionsMap.has(value))
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a2, b2) {
  let aType = getParsedType(a2), bType = getParsedType(b2);
  if (a2 === b2)
    return { valid: !0, data: a2 };
  if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    let bKeys = util.objectKeys(b2), sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a2, ...b2 };
    for (let key of sharedKeys) {
      let sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid)
        return { valid: !1 };
      newObj[key] = sharedValue.data;
    }
    return { valid: !0, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b2.length)
      return { valid: !1 };
    let newArray = [];
    for (let index2 = 0; index2 < a2.length; index2++) {
      let itemA = a2[index2], itemB = b2[index2], sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return { valid: !1 };
      newArray.push(sharedValue.data);
    }
    return { valid: !0, data: newArray };
  } else
    return aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 == +b2 ? { valid: !0, data: a2 } : { valid: !1 };
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input), handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight))
        return INVALID;
      let merged = mergeValues(parsedLeft.value, parsedRight.value);
      return merged.valid ? ((isDirty(parsedLeft) || isDirty(parsedRight)) && status.dirty(), { status: status.value, value: merged.data }) : (addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return ctx.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }),
      this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })
    ]).then(([left, right]) => handleParsed(left, right)) : handleParsed(this._def.left._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }));
  }
};
ZodIntersection.create = (left, right, params) => new ZodIntersection({
  left,
  right,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...processCreateParams(params)
});
var ZodTuple = class extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (ctx.data.length < this._def.items.length)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), INVALID;
    !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), status.dirty());
    let items = [...ctx.data].map((item, itemIndex) => {
      let schema = this._def.items[itemIndex] || this._def.rest;
      return schema ? schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)) : null;
    }).filter((x2) => !!x2);
    return ctx.common.async ? Promise.all(items).then((results) => ParseStatus.mergeArray(status, results)) : ParseStatus.mergeArray(status, items);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    let pairs = [], keyType = this._def.keyType, valueType = this._def.valueType;
    for (let key in ctx.data)
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    return ctx.common.async ? ParseStatus.mergeObjectAsync(status, pairs) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    return second instanceof ZodType ? new ZodRecord({
      keyType: first,
      valueType: second,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(third)
    }) : new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}, ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      }), INVALID;
    let keyType = this._def.keyType, valueType = this._def.valueType, pairs = [...ctx.data.entries()].map(([key, value], index2) => ({
      key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index2, "key"])),
      value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index2, "value"]))
    }));
    if (ctx.common.async) {
      let finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let pair of pairs) {
          let key = await pair.key, value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted")
            return INVALID;
          (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      let finalMap = /* @__PURE__ */ new Map();
      for (let pair of pairs) {
        let key = pair.key, value = pair.value;
        if (key.status === "aborted" || value.status === "aborted")
          return INVALID;
        (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => new ZodMap({
  valueType,
  keyType,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...processCreateParams(params)
});
var ZodSet = class extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      }), INVALID;
    let def = this._def;
    def.minSize !== null && ctx.data.size < def.minSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.minSize.message
    }), status.dirty()), def.maxSize !== null && ctx.data.size > def.maxSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.maxSize.message
    }), status.dirty());
    let valueType = this._def.valueType;
    function finalizeSet(elements2) {
      let parsedSet = /* @__PURE__ */ new Set();
      for (let element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        element.status === "dirty" && status.dirty(), parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    let elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    return ctx.common.async ? Promise.all(elements).then((elements2) => finalizeSet(elements2)) : finalizeSet(elements);
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => new ZodSet({
  valueType,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...processCreateParams(params)
});
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      }), INVALID;
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    let params = { errorMap: ctx.common.contextualErrorMap }, fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      let me = this;
      return OK(async function(...args) {
        let error = new ZodError([]), parsedArgs = await me._def.args.parseAsync(args, params).catch((e2) => {
          throw error.addIssue(makeArgsIssue(args, e2)), error;
        }), result = await Reflect.apply(fn, this, parsedArgs);
        return await me._def.returns._def.type.parseAsync(result, params).catch((e2) => {
          throw error.addIssue(makeReturnsIssue(result, e2)), error;
        });
      });
    } else {
      let me = this;
      return OK(function(...args) {
        let parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success)
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        let result = Reflect.apply(fn, this, parsedArgs.data), parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success)
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    return this.parse(func);
  }
  strictImplement(func) {
    return this.parse(func);
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args || ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}, ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    return this._def.getter()._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => new ZodLazy({
  getter,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...processCreateParams(params)
});
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => new ZodLiteral({
  value,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...processCreateParams(params)
});
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  _parse(input) {
    if (typeof input.data != "string") {
      let ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      let ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Values() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Enum() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    let nativeEnumValues = util.getValidEnumValues(this._def.values), ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      let expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      let expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => new ZodNativeEnum({
  values,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...processCreateParams(params)
});
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === !1)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      }), INVALID;
    let promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => this._def.type.parseAsync(data, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap
    })));
  }
};
ZodPromise.create = (schema, params) => new ZodPromise({
  type: schema,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...processCreateParams(params)
});
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input), effect = this._def.effect || null, checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg), arg.fatal ? status.abort() : status.dirty();
      },
      get path() {
        return ctx.path;
      }
    };
    if (checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx), effect.type === "preprocess") {
      let processed = effect.transform(ctx.data, checkCtx);
      return ctx.common.issues.length ? {
        status: "dirty",
        value: ctx.data
      } : ctx.common.async ? Promise.resolve(processed).then((processed2) => this._def.schema._parseAsync({
        data: processed2,
        path: ctx.path,
        parent: ctx
      })) : this._def.schema._parseSync({
        data: processed,
        path: ctx.path,
        parent: ctx
      });
    }
    if (effect.type === "refinement") {
      let executeRefinement = (acc) => {
        let result = effect.refinement(acc, checkCtx);
        if (ctx.common.async)
          return Promise.resolve(result);
        if (result instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return acc;
      };
      if (ctx.common.async === !1) {
        let inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value), { status: status.value, value: inner.value });
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value).then(() => ({ status: status.value, value: inner.value }))));
    }
    if (effect.type === "transform")
      if (ctx.common.async === !1) {
        let base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        let result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: status.value, value: result };
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => isValid(base) ? Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result })) : base);
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => new ZodEffects({
  schema,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect,
  ...processCreateParams(params)
});
ZodEffects.createWithPreprocess = (preprocess, schema, params) => new ZodEffects({
  schema,
  effect: { type: "preprocess", transform: preprocess },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...processCreateParams(params)
});
var ZodOptional = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => new ZodOptional({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...processCreateParams(params)
});
var ZodNullable = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => new ZodNullable({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...processCreateParams(params)
});
var ZodDefault = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), data = ctx.data;
    return ctx.parsedType === ZodParsedType.undefined && (data = this._def.defaultValue()), this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => new ZodDefault({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof params.default == "function" ? params.default : () => params.default,
  ...processCreateParams(params)
});
var ZodCatch = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    }, result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    return isAsync(result) ? result.then((result2) => ({
      status: "valid",
      value: result2.status === "valid" ? result2.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    })) : {
      status: "valid",
      value: result.status === "valid" ? result.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => new ZodCatch({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof params.catch == "function" ? params.catch : () => params.catch,
  ...processCreateParams(params)
});
var ZodNaN = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.nan) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => new ZodNaN({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...processCreateParams(params)
});
var BRAND = Symbol("zod_brand"), ZodBranded = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}, ZodPipeline = class extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.common.async)
      return (async () => {
        let inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), DIRTY(inResult.value)) : this._def.out._parseAsync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      })();
    {
      let inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), {
        status: "dirty",
        value: inResult.value
      }) : this._def.out._parseSync({
        data: inResult.value,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  static create(a2, b2) {
    return new ZodPipeline({
      in: a2,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}, ZodReadonly = class extends ZodType {
  _parse(input) {
    let result = this._def.innerType._parse(input);
    return isValid(result) && (result.value = Object.freeze(result.value)), result;
  }
};
ZodReadonly.create = (type, params) => new ZodReadonly({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...processCreateParams(params)
});
var custom = (check, params = {}, fatal) => check ? ZodAny.create().superRefine((data, ctx) => {
  var _a7, _b;
  if (!check(data)) {
    let p2 = typeof params == "function" ? params(data) : typeof params == "string" ? { message: params } : params, _fatal = (_b = (_a7 = p2.fatal) !== null && _a7 !== void 0 ? _a7 : fatal) !== null && _b !== void 0 ? _b : !0, p22 = typeof p2 == "string" ? { message: p2 } : p2;
    ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
  }
}) : ZodAny.create(), late = {
  object: ZodObject.lazycreate
}, ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2.ZodString = "ZodString", ZodFirstPartyTypeKind2.ZodNumber = "ZodNumber", ZodFirstPartyTypeKind2.ZodNaN = "ZodNaN", ZodFirstPartyTypeKind2.ZodBigInt = "ZodBigInt", ZodFirstPartyTypeKind2.ZodBoolean = "ZodBoolean", ZodFirstPartyTypeKind2.ZodDate = "ZodDate", ZodFirstPartyTypeKind2.ZodSymbol = "ZodSymbol", ZodFirstPartyTypeKind2.ZodUndefined = "ZodUndefined", ZodFirstPartyTypeKind2.ZodNull = "ZodNull", ZodFirstPartyTypeKind2.ZodAny = "ZodAny", ZodFirstPartyTypeKind2.ZodUnknown = "ZodUnknown", ZodFirstPartyTypeKind2.ZodNever = "ZodNever", ZodFirstPartyTypeKind2.ZodVoid = "ZodVoid", ZodFirstPartyTypeKind2.ZodArray = "ZodArray", ZodFirstPartyTypeKind2.ZodObject = "ZodObject", ZodFirstPartyTypeKind2.ZodUnion = "ZodUnion", ZodFirstPartyTypeKind2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ZodFirstPartyTypeKind2.ZodIntersection = "ZodIntersection", ZodFirstPartyTypeKind2.ZodTuple = "ZodTuple", ZodFirstPartyTypeKind2.ZodRecord = "ZodRecord", ZodFirstPartyTypeKind2.ZodMap = "ZodMap", ZodFirstPartyTypeKind2.ZodSet = "ZodSet", ZodFirstPartyTypeKind2.ZodFunction = "ZodFunction", ZodFirstPartyTypeKind2.ZodLazy = "ZodLazy", ZodFirstPartyTypeKind2.ZodLiteral = "ZodLiteral", ZodFirstPartyTypeKind2.ZodEnum = "ZodEnum", ZodFirstPartyTypeKind2.ZodEffects = "ZodEffects", ZodFirstPartyTypeKind2.ZodNativeEnum = "ZodNativeEnum", ZodFirstPartyTypeKind2.ZodOptional = "ZodOptional", ZodFirstPartyTypeKind2.ZodNullable = "ZodNullable", ZodFirstPartyTypeKind2.ZodDefault = "ZodDefault", ZodFirstPartyTypeKind2.ZodCatch = "ZodCatch", ZodFirstPartyTypeKind2.ZodPromise = "ZodPromise", ZodFirstPartyTypeKind2.ZodBranded = "ZodBranded", ZodFirstPartyTypeKind2.ZodPipeline = "ZodPipeline", ZodFirstPartyTypeKind2.ZodReadonly = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create, ostring = () => stringType().optional(), onumber = () => numberType().optional(), oboolean = () => booleanType().optional(), coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: !0 }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: !0 }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: !0
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: !0 }),
  date: (arg) => ZodDate.create({ ...arg, coerce: !0 })
}, NEVER = INVALID, z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/@webstudio-is/fonts/lib/index.js
var SYSTEM_FONTS = /* @__PURE__ */ new Map([
  ["Arial", ["Roboto", "sans-serif"]],
  ["Times New Roman", ["sans"]],
  ["Courier New", ["monospace"]],
  ["system-ui", []]
]), DEFAULT_FONT_FALLBACK = "sans-serif", FONT_FORMATS = /* @__PURE__ */ new Map([
  ["woff", "woff"],
  ["woff2", "woff2"],
  ["ttf", "truetype"],
  ["otf", "opentype"]
]), FONT_MIME_TYPES = Array.from(FONT_FORMATS.keys()).map((format) => `.${format}`).join(", "), FONT_STYLES = ["normal", "italic", "oblique"];
var FontFormat = z.union([
  z.literal("ttf"),
  z.literal("woff"),
  z.literal("woff2"),
  z.literal("otf")
]), AxisName = z.enum([
  "wght",
  "wdth",
  "slnt",
  "opsz",
  "ital",
  "GRAD",
  "XTRA",
  "XOPQ",
  "YOPQ",
  "YTLC",
  "YTUC",
  "YTAS",
  "YTDE",
  "YTFI"
]), VariationAxes = z.record(
  AxisName,
  z.object({
    name: z.string(),
    min: z.number(),
    default: z.number(),
    max: z.number()
  })
), FontMetaStatic = z.object({
  family: z.string(),
  style: z.enum(FONT_STYLES),
  weight: z.number()
}), FontMetaVariable = z.object({
  family: z.string(),
  variationAxes: VariationAxes
}), FontMeta = z.union([FontMetaStatic, FontMetaVariable]);

// node_modules/@webstudio-is/react-sdk/lib/index.js
var import_react3 = __toESM(require_react(), 1), import_react4 = __toESM(require_react(), 1), import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1), import_react5 = __toESM(require_react(), 1), import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);

// node_modules/@webstudio-is/error-utils/lib/index.js
var captureError = (error, value) => {
  throw error;
};

// node_modules/hyphenate-style-name/index.js
var uppercasePattern = /[A-Z]/g, msPattern = /^ms-/, cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name))
    return cache[name];
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
var hyphenate_style_name_default = hyphenateStyleName;

// node_modules/@webstudio-is/css-engine/lib/index.js
var fallbackTransform = (styleValue) => {
  if (styleValue.type === "fontFamily") {
    let firstFontFamily = styleValue.value[0], fallbacks = SYSTEM_FONTS.get(firstFontFamily ?? "Arial"), fontFamily = [...styleValue.value];
    return Array.isArray(fallbacks) ? fontFamily.push(...fallbacks) : fontFamily.push(DEFAULT_FONT_FALLBACK), {
      type: "fontFamily",
      value: fontFamily
    };
  }
}, toValue = (styleValue, transformValue) => {
  if (styleValue === void 0)
    return "";
  let value = (transformValue == null ? void 0 : transformValue(styleValue)) ?? fallbackTransform(styleValue) ?? styleValue;
  if (value.type === "unit")
    return value.value + (value.unit === "number" ? "" : value.unit);
  if (value.type === "fontFamily")
    return value.value.join(", ");
  if (value.type === "var") {
    let fallbacks = [];
    for (let fallback of value.fallbacks)
      fallbacks.push(toValue(fallback, transformValue));
    let fallbacksString = fallbacks.length > 0 ? `, ${fallbacks.join(", ")}` : "";
    return `var(--${value.value}${fallbacksString})`;
  }
  if (value.type === "keyword" || value.type === "invalid" || value.type === "unset")
    return value.value;
  if (value.type === "rgb")
    return `rgba(${value.r}, ${value.g}, ${value.b}, ${value.alpha})`;
  if (value.type === "image")
    return value.hidden || value.value.type !== "url" ? "none" : `url(${value.value.url})`;
  if (value.type === "unparsed")
    return value.hidden ? "none" : value.value;
  if (value.type === "layers") {
    let valueString = value.value.filter(
      (layer) => !("hidden" in layer) || "hidden" in layer && layer.hidden === !1
    ).map((layer) => toValue(layer, transformValue)).join(", ");
    return valueString === "" ? "none" : valueString;
  }
  return value.type === "tuple" ? value.value.map((value2) => toValue(value2, transformValue)).join(" ") : captureError(new Error("Unknown value type"), value);
}, toProperty = (property) => property === "backgroundClip" ? "-webkit-background-clip" : hyphenate_style_name_default(property), _styleMap, _isDirty, _string, _indent, _transformValue, _a, StylePropertyMap = (_a = class {
  constructor(transformValue) {
    __privateAdd(this, _styleMap, /* @__PURE__ */ new Map());
    __privateAdd(this, _isDirty, !1);
    __privateAdd(this, _string, "");
    __privateAdd(this, _indent, 0);
    __privateAdd(this, _transformValue, void 0);
    __publicField(this, "onChange");
    __privateSet(this, _transformValue, transformValue);
  }
  setTransformer(transformValue) {
    __privateSet(this, _transformValue, transformValue);
  }
  set(property, value) {
    var _a7;
    __privateGet(this, _styleMap).set(property, value), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  has(property) {
    return __privateGet(this, _styleMap).has(property);
  }
  get size() {
    return __privateGet(this, _styleMap).size;
  }
  keys() {
    return __privateGet(this, _styleMap).keys();
  }
  delete(property) {
    var _a7;
    __privateGet(this, _styleMap).delete(property), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  clear() {
    var _a7;
    __privateGet(this, _styleMap).clear(), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  toString({ indent = 0 } = {}) {
    if (__privateGet(this, _isDirty) === !1 && indent === __privateGet(this, _indent))
      return __privateGet(this, _string);
    __privateSet(this, _indent, indent);
    let block = [], spaces = " ".repeat(indent);
    for (let [property, value] of __privateGet(this, _styleMap))
      value !== void 0 && block.push(
        `${spaces}${toProperty(property)}: ${toValue(
          value,
          __privateGet(this, _transformValue)
        )}`
      );
    return __privateSet(this, _string, block.join(`;
`)), __privateSet(this, _isDirty, !1), __privateGet(this, _string);
  }
}, _styleMap = new WeakMap(), _isDirty = new WeakMap(), _string = new WeakMap(), _indent = new WeakMap(), _transformValue = new WeakMap(), _a), _onChange, _a2, StyleRule = (_a2 = class {
  constructor(selectorText, style, transformValue) {
    __publicField(this, "styleMap");
    __publicField(this, "selectorText");
    __publicField(this, "onChange");
    __privateAdd(this, _onChange, () => {
      var _a7;
      (_a7 = this.onChange) == null || _a7.call(this);
    });
    this.styleMap = new StylePropertyMap(transformValue), this.selectorText = selectorText;
    let property;
    for (property in style)
      this.styleMap.set(property, style[property]);
    this.styleMap.onChange = __privateGet(this, _onChange);
  }
  get cssText() {
    return this.toString();
  }
  toString(options = { indent: 0 }) {
    let spaces = " ".repeat(options.indent);
    return `${spaces}${this.selectorText} {
${this.styleMap.toString({
      indent: options.indent + 2
    })}
${spaces}}`;
  }
}, _onChange = new WeakMap(), _a2), _mediaType, _a3, MediaRule = (_a3 = class {
  constructor(options = {}) {
    __publicField(this, "options");
    __publicField(this, "rules", []);
    __privateAdd(this, _mediaType, void 0);
    this.options = options, __privateSet(this, _mediaType, options.mediaType ?? "all");
  }
  insertRule(rule) {
    return this.rules.push(rule), rule;
  }
  get cssText() {
    return this.toString();
  }
  toString() {
    if (this.rules.length === 0)
      return "";
    let rules = [];
    for (let rule of this.rules)
      rules.push(rule.toString({ indent: 2 }));
    let conditionText = "", { minWidth, maxWidth } = this.options;
    return minWidth !== void 0 && (conditionText = ` and (min-width: ${minWidth}px)`), maxWidth !== void 0 && (conditionText += ` and (max-width: ${maxWidth}px)`), `@media ${__privateGet(this, _mediaType)}${conditionText} {
${rules.join(
      `
`
    )}
}`;
  }
}, _mediaType = new WeakMap(), _a3), PlaintextRule = class {
  cssText;
  styleMap = new StylePropertyMap();
  constructor(cssText) {
    this.cssText = cssText;
  }
  toString() {
    return this.cssText;
  }
}, FontFaceRule = class {
  options;
  constructor(options) {
    this.options = options;
  }
  get cssText() {
    return this.toString();
  }
  toString() {
    let decls = [], { fontFamily, fontStyle, fontWeight, fontDisplay, src } = this.options;
    return decls.push(
      `font-family: ${/\s/.test(fontFamily) ? `"${fontFamily}"` : fontFamily}`
    ), decls.push(`font-style: ${fontStyle}`), decls.push(`font-weight: ${fontWeight}`), decls.push(`font-display: ${fontDisplay}`), decls.push(`src: ${src}`), `@font-face {
  ${decls.join("; ")};
}`;
  }
}, compareMedia = (optionA, optionB) => optionA.minWidth === void 0 && optionA.maxWidth === void 0 ? -1 : optionB.minWidth === void 0 && optionB.maxWidth === void 0 ? 1 : optionA.minWidth !== void 0 && optionB.minWidth !== void 0 ? optionA.minWidth - optionB.minWidth : optionA.maxWidth !== void 0 && optionB.maxWidth !== void 0 ? optionB.maxWidth - optionA.maxWidth : "minWidth" in optionA ? 1 : -1, _element, _name, _a4, StyleElement = (_a4 = class {
  constructor(name = "") {
    __privateAdd(this, _element, void 0);
    __privateAdd(this, _name, void 0);
    __privateSet(this, _name, name);
  }
  get isMounted() {
    var _a7;
    return ((_a7 = __privateGet(this, _element)) == null ? void 0 : _a7.parentElement) != null;
  }
  mount() {
    this.isMounted === !1 && (__privateSet(this, _element, document.createElement("style")), __privateGet(this, _element).setAttribute("data-webstudio", __privateGet(this, _name)), document.head.appendChild(__privateGet(this, _element)));
  }
  unmount() {
    var _a7, _b;
    this.isMounted && ((_b = (_a7 = __privateGet(this, _element)) == null ? void 0 : _a7.parentElement) == null || _b.removeChild(__privateGet(this, _element)), __privateSet(this, _element, void 0));
  }
  render(cssText) {
    __privateGet(this, _element) && (__privateGet(this, _element).textContent = cssText);
  }
  setAttribute(name, value) {
    __privateGet(this, _element) && __privateGet(this, _element).setAttribute(name, value);
  }
  getAttribute(name) {
    if (__privateGet(this, _element))
      return __privateGet(this, _element).getAttribute(name);
  }
}, _element = new WeakMap(), _name = new WeakMap(), _a4), _cssText, _element2, _a5, StyleSheet = (_a5 = class {
  constructor(element) {
    __privateAdd(this, _cssText, "");
    __privateAdd(this, _element2, void 0);
    __privateSet(this, _element2, element);
  }
  replaceSync(cssText) {
    cssText !== __privateGet(this, _cssText) && (__privateSet(this, _cssText, cssText), __privateGet(this, _element2).render(cssText));
  }
}, _cssText = new WeakMap(), _element2 = new WeakMap(), _a5), defaultMediaRuleId = "__default-media-rule__", _element3, _mediaRules, _plainRules, _fontFaceRules, _sheet, _isDirty2, _cssText2, _onChangeRule, _a6, CssEngine = (_a6 = class {
  constructor({ name }) {
    __privateAdd(this, _element3, void 0);
    __privateAdd(this, _mediaRules, /* @__PURE__ */ new Map());
    __privateAdd(this, _plainRules, /* @__PURE__ */ new Map());
    __privateAdd(this, _fontFaceRules, []);
    __privateAdd(this, _sheet, void 0);
    __privateAdd(this, _isDirty2, !1);
    __privateAdd(this, _cssText2, "");
    __privateAdd(this, _onChangeRule, () => {
      __privateSet(this, _isDirty2, !0);
    });
    __privateSet(this, _element3, new StyleElement(name)), __privateSet(this, _sheet, new StyleSheet(__privateGet(this, _element3)));
  }
  addMediaRule(id, options) {
    let mediaRule = __privateGet(this, _mediaRules).get(id);
    return mediaRule === void 0 ? (mediaRule = new MediaRule(options), __privateGet(this, _mediaRules).set(id, mediaRule), __privateSet(this, _isDirty2, !0), mediaRule) : (options && (mediaRule.options = options, __privateSet(this, _isDirty2, !0)), mediaRule);
  }
  addStyleRule(selectorText, rule, transformValue) {
    let mediaRule = this.addMediaRule(rule.breakpoint || defaultMediaRuleId);
    __privateSet(this, _isDirty2, !0);
    let styleRule = new StyleRule(selectorText, rule.style, transformValue);
    if (styleRule.onChange = __privateGet(this, _onChangeRule), mediaRule === void 0)
      throw new Error("No media rule found");
    return mediaRule.insertRule(styleRule), styleRule;
  }
  addPlaintextRule(cssText) {
    let rule = __privateGet(this, _plainRules).get(cssText);
    return rule !== void 0 ? rule : (__privateSet(this, _isDirty2, !0), __privateGet(this, _plainRules).set(cssText, new PlaintextRule(cssText)));
  }
  addFontFaceRule(options) {
    return __privateSet(this, _isDirty2, !0), __privateGet(this, _fontFaceRules).push(new FontFaceRule(options));
  }
  clear() {
    __privateGet(this, _mediaRules).clear(), __privateGet(this, _plainRules).clear(), __privateSet(this, _fontFaceRules, []), __privateSet(this, _isDirty2, !0);
  }
  render() {
    __privateGet(this, _element3).mount(), __privateGet(this, _sheet).replaceSync(this.cssText);
  }
  unmount() {
    __privateGet(this, _element3).unmount();
  }
  setAttribute(name, value) {
    __privateGet(this, _element3).setAttribute(name, value);
  }
  getAttribute(name) {
    return __privateGet(this, _element3).getAttribute(name);
  }
  get cssText() {
    if (__privateGet(this, _isDirty2) === !1)
      return __privateGet(this, _cssText2);
    __privateSet(this, _isDirty2, !1);
    let css = [];
    css.push(...__privateGet(this, _fontFaceRules).map((rule) => rule.cssText));
    for (let plaintextRule of __privateGet(this, _plainRules).values())
      css.push(plaintextRule.cssText);
    let sortedMediaRules = Array.from(__privateGet(this, _mediaRules).values()).sort(
      (ruleA, ruleB) => compareMedia(ruleA.options, ruleB.options)
    );
    for (let mediaRule of sortedMediaRules) {
      let { cssText } = mediaRule;
      cssText !== "" && css.push(cssText);
    }
    return __privateSet(this, _cssText2, css.join(`
`)), __privateGet(this, _cssText2);
  }
}, _element3 = new WeakMap(), _mediaRules = new WeakMap(), _plainRules = new WeakMap(), _fontFaceRules = new WeakMap(), _sheet = new WeakMap(), _isDirty2 = new WeakMap(), _cssText2 = new WeakMap(), _onChangeRule = new WeakMap(), _a6);
var Unit = z.string(), UnitValue = z.object({
  type: z.literal("unit"),
  unit: Unit,
  value: z.number()
}), KeywordValue = z.object({
  type: z.literal("keyword"),
  // @todo use exact type
  value: z.string()
}), UnparsedValue = z.object({
  type: z.literal("unparsed"),
  value: z.string(),
  // For the builder we want to be able to hide background-image
  hidden: z.boolean().optional()
}), FontFamilyValue = z.object({
  type: z.literal("fontFamily"),
  value: z.array(z.string())
}), RgbValue = z.object({
  type: z.literal("rgb"),
  r: z.number(),
  g: z.number(),
  b: z.number(),
  alpha: z.number()
}), ImageValue = z.object({
  type: z.literal("image"),
  value: z.union(
    [
      z.object({ type: z.literal("asset"), value: z.string() }),
      // url is not stored in db and only used by css-engine transformValue
      // to prepare image value for rendering
      z.object({ type: z.literal("url"), url: z.string() })
    ]
  ),
  // For the builder we want to be able to hide images
  hidden: z.boolean().optional()
}), InvalidValue = z.object({
  type: z.literal("invalid"),
  value: z.string()
}), UnsetValue = z.object({
  type: z.literal("unset"),
  value: z.literal("")
}), TupleValueItem = z.union(
  [
    UnitValue,
    KeywordValue,
    UnparsedValue,
    RgbValue
  ]
), TupleValue = z.object({
  type: z.literal("tuple"),
  value: z.array(TupleValueItem),
  hidden: z.boolean().optional()
}), LayerValueItem = z.union(
  [
    UnitValue,
    KeywordValue,
    UnparsedValue,
    ImageValue,
    TupleValue,
    InvalidValue
  ]
), LayersValue = z.object({
  type: z.literal("layers"),
  value: z.array(LayerValueItem)
}), ValidStaticStyleValue = z.union(
  [
    ImageValue,
    LayersValue,
    UnitValue,
    KeywordValue,
    FontFamilyValue,
    RgbValue,
    UnparsedValue,
    TupleValue
  ]
);
var VarValue = z.object({
  type: z.literal("var"),
  value: z.string(),
  fallbacks: z.array(ValidStaticStyleValue)
}), StyleValue = z.union(
  [
    ValidStaticStyleValue,
    InvalidValue,
    UnsetValue,
    VarValue
  ]
), Style = z.record(z.string(), StyleValue);

// node_modules/@webstudio-is/react-sdk/lib/index.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/jsep/dist/jsep.js
var Hooks = class {
  /**
   * @callback HookCallback
   * @this {*|Jsep} this
   * @param {Jsep} env
   * @returns: void
   */
  /**
   * Adds the given callback to the list of callbacks for the given hook.
   *
   * The callback will be invoked when the hook it is registered for is run.
   *
   * One callback function can be registered to multiple hooks and the same hook multiple times.
   *
   * @param {string|object} name The name of the hook, or an object of callbacks keyed by name
   * @param {HookCallback|boolean} callback The callback function which is given environment variables.
   * @param {?boolean} [first=false] Will add the hook to the top of the list (defaults to the bottom)
   * @public
   */
  add(name, callback, first) {
    if (typeof arguments[0] != "string")
      for (let name2 in arguments[0])
        this.add(name2, arguments[0][name2], arguments[1]);
    else
      (Array.isArray(name) ? name : [name]).forEach(function(name2) {
        this[name2] = this[name2] || [], callback && this[name2][first ? "unshift" : "push"](callback);
      }, this);
  }
  /**
   * Runs a hook invoking all registered callbacks with the given environment variables.
   *
   * Callbacks will be invoked synchronously and in the order in which they were registered.
   *
   * @param {string} name The name of the hook.
   * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
   * @public
   */
  run(name, env) {
    this[name] = this[name] || [], this[name].forEach(function(callback) {
      callback.call(env && env.context ? env.context : env, env);
    });
  }
}, Plugins = class {
  constructor(jsep2) {
    this.jsep = jsep2, this.registered = {};
  }
  /**
   * @callback PluginSetup
   * @this {Jsep} jsep
   * @returns: void
   */
  /**
   * Adds the given plugin(s) to the registry
   *
   * @param {object} plugins
   * @param {string} plugins.name The name of the plugin
   * @param {PluginSetup} plugins.init The init function
   * @public
   */
  register(...plugins) {
    plugins.forEach((plugin2) => {
      if (typeof plugin2 != "object" || !plugin2.name || !plugin2.init)
        throw new Error("Invalid JSEP plugin format");
      this.registered[plugin2.name] || (plugin2.init(this.jsep), this.registered[plugin2.name] = plugin2);
    });
  }
}, Jsep = class {
  /**
   * @returns {string}
   */
  static get version() {
    return "1.3.8";
  }
  /**
   * @returns {string}
   */
  static toString() {
    return "JavaScript Expression Parser (JSEP) v" + Jsep.version;
  }
  // ==================== CONFIG ================================
  /**
   * @method addUnaryOp
   * @param {string} op_name The name of the unary op to add
   * @returns {Jsep}
   */
  static addUnaryOp(op_name) {
    return Jsep.max_unop_len = Math.max(op_name.length, Jsep.max_unop_len), Jsep.unary_ops[op_name] = 1, Jsep;
  }
  /**
   * @method jsep.addBinaryOp
   * @param {string} op_name The name of the binary op to add
   * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
   * @param {boolean} [isRightAssociative=false] whether operator is right-associative
   * @returns {Jsep}
   */
  static addBinaryOp(op_name, precedence, isRightAssociative) {
    return Jsep.max_binop_len = Math.max(op_name.length, Jsep.max_binop_len), Jsep.binary_ops[op_name] = precedence, isRightAssociative ? Jsep.right_associative.add(op_name) : Jsep.right_associative.delete(op_name), Jsep;
  }
  /**
   * @method addIdentifierChar
   * @param {string} char The additional character to treat as a valid part of an identifier
   * @returns {Jsep}
   */
  static addIdentifierChar(char) {
    return Jsep.additional_identifier_chars.add(char), Jsep;
  }
  /**
   * @method addLiteral
   * @param {string} literal_name The name of the literal to add
   * @param {*} literal_value The value of the literal
   * @returns {Jsep}
   */
  static addLiteral(literal_name, literal_value) {
    return Jsep.literals[literal_name] = literal_value, Jsep;
  }
  /**
   * @method removeUnaryOp
   * @param {string} op_name The name of the unary op to remove
   * @returns {Jsep}
   */
  static removeUnaryOp(op_name) {
    return delete Jsep.unary_ops[op_name], op_name.length === Jsep.max_unop_len && (Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops)), Jsep;
  }
  /**
   * @method removeAllUnaryOps
   * @returns {Jsep}
   */
  static removeAllUnaryOps() {
    return Jsep.unary_ops = {}, Jsep.max_unop_len = 0, Jsep;
  }
  /**
   * @method removeIdentifierChar
   * @param {string} char The additional character to stop treating as a valid part of an identifier
   * @returns {Jsep}
   */
  static removeIdentifierChar(char) {
    return Jsep.additional_identifier_chars.delete(char), Jsep;
  }
  /**
   * @method removeBinaryOp
   * @param {string} op_name The name of the binary op to remove
   * @returns {Jsep}
   */
  static removeBinaryOp(op_name) {
    return delete Jsep.binary_ops[op_name], op_name.length === Jsep.max_binop_len && (Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops)), Jsep.right_associative.delete(op_name), Jsep;
  }
  /**
   * @method removeAllBinaryOps
   * @returns {Jsep}
   */
  static removeAllBinaryOps() {
    return Jsep.binary_ops = {}, Jsep.max_binop_len = 0, Jsep;
  }
  /**
   * @method removeLiteral
   * @param {string} literal_name The name of the literal to remove
   * @returns {Jsep}
   */
  static removeLiteral(literal_name) {
    return delete Jsep.literals[literal_name], Jsep;
  }
  /**
   * @method removeAllLiterals
   * @returns {Jsep}
   */
  static removeAllLiterals() {
    return Jsep.literals = {}, Jsep;
  }
  // ==================== END CONFIG ============================
  /**
   * @returns {string}
   */
  get char() {
    return this.expr.charAt(this.index);
  }
  /**
   * @returns {number}
   */
  get code() {
    return this.expr.charCodeAt(this.index);
  }
  /**
   * @param {string} expr a string with the passed in express
   * @returns Jsep
   */
  constructor(expr) {
    this.expr = expr, this.index = 0;
  }
  /**
   * static top-level parser
   * @returns {jsep.Expression}
   */
  static parse(expr) {
    return new Jsep(expr).parse();
  }
  /**
   * Get the longest key length of any object
   * @param {object} obj
   * @returns {number}
   */
  static getMaxKeyLen(obj) {
    return Math.max(0, ...Object.keys(obj).map((k) => k.length));
  }
  /**
   * `ch` is a character code in the next three functions
   * @param {number} ch
   * @returns {boolean}
   */
  static isDecimalDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  /**
   * Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
   * @param {string} op_val
   * @returns {number}
   */
  static binaryPrecedence(op_val) {
    return Jsep.binary_ops[op_val] || 0;
  }
  /**
   * Looks for start of identifier
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierStart(ch) {
    return ch >= 65 && ch <= 90 || // A...Z
    ch >= 97 && ch <= 122 || // a...z
    ch >= 128 && !Jsep.binary_ops[String.fromCharCode(ch)] || // any non-ASCII that is not an operator
    Jsep.additional_identifier_chars.has(String.fromCharCode(ch));
  }
  /**
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierPart(ch) {
    return Jsep.isIdentifierStart(ch) || Jsep.isDecimalDigit(ch);
  }
  /**
   * throw error at index of the expression
   * @param {string} message
   * @throws
   */
  throwError(message) {
    let error = new Error(message + " at character " + this.index);
    throw error.index = this.index, error.description = message, error;
  }
  /**
   * Run a given hook
   * @param {string} name
   * @param {jsep.Expression|false} [node]
   * @returns {?jsep.Expression}
   */
  runHook(name, node) {
    if (Jsep.hooks[name]) {
      let env = { context: this, node };
      return Jsep.hooks.run(name, env), env.node;
    }
    return node;
  }
  /**
   * Runs a given hook until one returns a node
   * @param {string} name
   * @returns {?jsep.Expression}
   */
  searchHook(name) {
    if (Jsep.hooks[name]) {
      let env = { context: this };
      return Jsep.hooks[name].find(function(callback) {
        return callback.call(env.context, env), env.node;
      }), env.node;
    }
  }
  /**
   * Push `index` up to the next non-space character
   */
  gobbleSpaces() {
    let ch = this.code;
    for (; ch === Jsep.SPACE_CODE || ch === Jsep.TAB_CODE || ch === Jsep.LF_CODE || ch === Jsep.CR_CODE; )
      ch = this.expr.charCodeAt(++this.index);
    this.runHook("gobble-spaces");
  }
  /**
   * Top-level method to parse all expressions and returns compound or single node
   * @returns {jsep.Expression}
   */
  parse() {
    this.runHook("before-all");
    let nodes = this.gobbleExpressions(), node = nodes.length === 1 ? nodes[0] : {
      type: Jsep.COMPOUND,
      body: nodes
    };
    return this.runHook("after-all", node);
  }
  /**
   * top-level parser (but can be reused within as well)
   * @param {number} [untilICode]
   * @returns {jsep.Expression[]}
   */
  gobbleExpressions(untilICode) {
    let nodes = [], ch_i, node;
    for (; this.index < this.expr.length; )
      if (ch_i = this.code, ch_i === Jsep.SEMCOL_CODE || ch_i === Jsep.COMMA_CODE)
        this.index++;
      else if (node = this.gobbleExpression())
        nodes.push(node);
      else if (this.index < this.expr.length) {
        if (ch_i === untilICode)
          break;
        this.throwError('Unexpected "' + this.char + '"');
      }
    return nodes;
  }
  /**
   * The main parsing function.
   * @returns {?jsep.Expression}
   */
  gobbleExpression() {
    let node = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
    return this.gobbleSpaces(), this.runHook("after-expression", node);
  }
  /**
   * Search for the operation portion of the string (e.g. `+`, `===`)
   * Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
   * and move down from 3 to 2 to 1 character until a matching binary operation is found
   * then, return that binary operation
   * @returns {string|boolean}
   */
  gobbleBinaryOp() {
    this.gobbleSpaces();
    let to_check = this.expr.substr(this.index, Jsep.max_binop_len), tc_len = to_check.length;
    for (; tc_len > 0; ) {
      if (Jsep.binary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length))))
        return this.index += tc_len, to_check;
      to_check = to_check.substr(0, --tc_len);
    }
    return !1;
  }
  /**
   * This function is responsible for gobbling an individual expression,
   * e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
   * @returns {?jsep.BinaryExpression}
   */
  gobbleBinaryExpression() {
    let node, biop, prec, stack, biop_info, left, right, i2, cur_biop;
    if (left = this.gobbleToken(), !left || (biop = this.gobbleBinaryOp(), !biop))
      return left;
    for (biop_info = { value: biop, prec: Jsep.binaryPrecedence(biop), right_a: Jsep.right_associative.has(biop) }, right = this.gobbleToken(), right || this.throwError("Expected expression after " + biop), stack = [left, biop_info, right]; biop = this.gobbleBinaryOp(); ) {
      if (prec = Jsep.binaryPrecedence(biop), prec === 0) {
        this.index -= biop.length;
        break;
      }
      biop_info = { value: biop, prec, right_a: Jsep.right_associative.has(biop) }, cur_biop = biop;
      let comparePrev = (prev) => biop_info.right_a && prev.right_a ? prec > prev.prec : prec <= prev.prec;
      for (; stack.length > 2 && comparePrev(stack[stack.length - 2]); )
        right = stack.pop(), biop = stack.pop().value, left = stack.pop(), node = {
          type: Jsep.BINARY_EXP,
          operator: biop,
          left,
          right
        }, stack.push(node);
      node = this.gobbleToken(), node || this.throwError("Expected expression after " + cur_biop), stack.push(biop_info, node);
    }
    for (i2 = stack.length - 1, node = stack[i2]; i2 > 1; )
      node = {
        type: Jsep.BINARY_EXP,
        operator: stack[i2 - 1].value,
        left: stack[i2 - 2],
        right: node
      }, i2 -= 2;
    return node;
  }
  /**
   * An individual part of a binary expression:
   * e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
   * @returns {boolean|jsep.Expression}
   */
  gobbleToken() {
    let ch, to_check, tc_len, node;
    if (this.gobbleSpaces(), node = this.searchHook("gobble-token"), node)
      return this.runHook("after-token", node);
    if (ch = this.code, Jsep.isDecimalDigit(ch) || ch === Jsep.PERIOD_CODE)
      return this.gobbleNumericLiteral();
    if (ch === Jsep.SQUOTE_CODE || ch === Jsep.DQUOTE_CODE)
      node = this.gobbleStringLiteral();
    else if (ch === Jsep.OBRACK_CODE)
      node = this.gobbleArray();
    else {
      for (to_check = this.expr.substr(this.index, Jsep.max_unop_len), tc_len = to_check.length; tc_len > 0; ) {
        if (Jsep.unary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
          this.index += tc_len;
          let argument = this.gobbleToken();
          return argument || this.throwError("missing unaryOp argument"), this.runHook("after-token", {
            type: Jsep.UNARY_EXP,
            operator: to_check,
            argument,
            prefix: !0
          });
        }
        to_check = to_check.substr(0, --tc_len);
      }
      Jsep.isIdentifierStart(ch) ? (node = this.gobbleIdentifier(), Jsep.literals.hasOwnProperty(node.name) ? node = {
        type: Jsep.LITERAL,
        value: Jsep.literals[node.name],
        raw: node.name
      } : node.name === Jsep.this_str && (node = { type: Jsep.THIS_EXP })) : ch === Jsep.OPAREN_CODE && (node = this.gobbleGroup());
    }
    return node ? (node = this.gobbleTokenProperty(node), this.runHook("after-token", node)) : this.runHook("after-token", !1);
  }
  /**
   * Gobble properties of of identifiers/strings/arrays/groups.
   * e.g. `foo`, `bar.baz`, `foo['bar'].baz`
   * It also gobbles function calls:
   * e.g. `Math.acos(obj.angle)`
   * @param {jsep.Expression} node
   * @returns {jsep.Expression}
   */
  gobbleTokenProperty(node) {
    this.gobbleSpaces();
    let ch = this.code;
    for (; ch === Jsep.PERIOD_CODE || ch === Jsep.OBRACK_CODE || ch === Jsep.OPAREN_CODE || ch === Jsep.QUMARK_CODE; ) {
      let optional;
      if (ch === Jsep.QUMARK_CODE) {
        if (this.expr.charCodeAt(this.index + 1) !== Jsep.PERIOD_CODE)
          break;
        optional = !0, this.index += 2, this.gobbleSpaces(), ch = this.code;
      }
      this.index++, ch === Jsep.OBRACK_CODE ? (node = {
        type: Jsep.MEMBER_EXP,
        computed: !0,
        object: node,
        property: this.gobbleExpression()
      }, this.gobbleSpaces(), ch = this.code, ch !== Jsep.CBRACK_CODE && this.throwError("Unclosed ["), this.index++) : ch === Jsep.OPAREN_CODE ? node = {
        type: Jsep.CALL_EXP,
        arguments: this.gobbleArguments(Jsep.CPAREN_CODE),
        callee: node
      } : (ch === Jsep.PERIOD_CODE || optional) && (optional && this.index--, this.gobbleSpaces(), node = {
        type: Jsep.MEMBER_EXP,
        computed: !1,
        object: node,
        property: this.gobbleIdentifier()
      }), optional && (node.optional = !0), this.gobbleSpaces(), ch = this.code;
    }
    return node;
  }
  /**
   * Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
   * keep track of everything in the numeric literal and then calling `parseFloat` on that string
   * @returns {jsep.Literal}
   */
  gobbleNumericLiteral() {
    let number = "", ch, chCode;
    for (; Jsep.isDecimalDigit(this.code); )
      number += this.expr.charAt(this.index++);
    if (this.code === Jsep.PERIOD_CODE)
      for (number += this.expr.charAt(this.index++); Jsep.isDecimalDigit(this.code); )
        number += this.expr.charAt(this.index++);
    if (ch = this.char, ch === "e" || ch === "E") {
      for (number += this.expr.charAt(this.index++), ch = this.char, (ch === "+" || ch === "-") && (number += this.expr.charAt(this.index++)); Jsep.isDecimalDigit(this.code); )
        number += this.expr.charAt(this.index++);
      Jsep.isDecimalDigit(this.expr.charCodeAt(this.index - 1)) || this.throwError("Expected exponent (" + number + this.char + ")");
    }
    return chCode = this.code, Jsep.isIdentifierStart(chCode) ? this.throwError("Variable names cannot start with a number (" + number + this.char + ")") : (chCode === Jsep.PERIOD_CODE || number.length === 1 && number.charCodeAt(0) === Jsep.PERIOD_CODE) && this.throwError("Unexpected period"), {
      type: Jsep.LITERAL,
      value: parseFloat(number),
      raw: number
    };
  }
  /**
   * Parses a string literal, staring with single or double quotes with basic support for escape codes
   * e.g. `"hello world"`, `'this is\nJSEP'`
   * @returns {jsep.Literal}
   */
  gobbleStringLiteral() {
    let str = "", startIndex = this.index, quote = this.expr.charAt(this.index++), closed = !1;
    for (; this.index < this.expr.length; ) {
      let ch = this.expr.charAt(this.index++);
      if (ch === quote) {
        closed = !0;
        break;
      } else if (ch === "\\")
        switch (ch = this.expr.charAt(this.index++), ch) {
          case "n":
            str += `
`;
            break;
          case "r":
            str += "\r";
            break;
          case "t":
            str += "	";
            break;
          case "b":
            str += "\b";
            break;
          case "f":
            str += "\f";
            break;
          case "v":
            str += "\v";
            break;
          default:
            str += ch;
        }
      else
        str += ch;
    }
    return closed || this.throwError('Unclosed quote after "' + str + '"'), {
      type: Jsep.LITERAL,
      value: str,
      raw: this.expr.substring(startIndex, this.index)
    };
  }
  /**
   * Gobbles only identifiers
   * e.g.: `foo`, `_value`, `$x1`
   * Also, this function checks if that identifier is a literal:
   * (e.g. `true`, `false`, `null`) or `this`
   * @returns {jsep.Identifier}
   */
  gobbleIdentifier() {
    let ch = this.code, start = this.index;
    for (Jsep.isIdentifierStart(ch) ? this.index++ : this.throwError("Unexpected " + this.char); this.index < this.expr.length && (ch = this.code, Jsep.isIdentifierPart(ch)); )
      this.index++;
    return {
      type: Jsep.IDENTIFIER,
      name: this.expr.slice(start, this.index)
    };
  }
  /**
   * Gobbles a list of arguments within the context of a function call
   * or array literal. This function also assumes that the opening character
   * `(` or `[` has already been gobbled, and gobbles expressions and commas
   * until the terminator character `)` or `]` is encountered.
   * e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
   * @param {number} termination
   * @returns {jsep.Expression[]}
   */
  gobbleArguments(termination) {
    let args = [], closed = !1, separator_count = 0;
    for (; this.index < this.expr.length; ) {
      this.gobbleSpaces();
      let ch_i = this.code;
      if (ch_i === termination) {
        closed = !0, this.index++, termination === Jsep.CPAREN_CODE && separator_count && separator_count >= args.length && this.throwError("Unexpected token " + String.fromCharCode(termination));
        break;
      } else if (ch_i === Jsep.COMMA_CODE) {
        if (this.index++, separator_count++, separator_count !== args.length) {
          if (termination === Jsep.CPAREN_CODE)
            this.throwError("Unexpected token ,");
          else if (termination === Jsep.CBRACK_CODE)
            for (let arg = args.length; arg < separator_count; arg++)
              args.push(null);
        }
      } else if (args.length !== separator_count && separator_count !== 0)
        this.throwError("Expected comma");
      else {
        let node = this.gobbleExpression();
        (!node || node.type === Jsep.COMPOUND) && this.throwError("Expected comma"), args.push(node);
      }
    }
    return closed || this.throwError("Expected " + String.fromCharCode(termination)), args;
  }
  /**
   * Responsible for parsing a group of things within parentheses `()`
   * that have no identifier in front (so not a function call)
   * This function assumes that it needs to gobble the opening parenthesis
   * and then tries to gobble everything within that parenthesis, assuming
   * that the next thing it should see is the close parenthesis. If not,
   * then the expression probably doesn't have a `)`
   * @returns {boolean|jsep.Expression}
   */
  gobbleGroup() {
    this.index++;
    let nodes = this.gobbleExpressions(Jsep.CPAREN_CODE);
    if (this.code === Jsep.CPAREN_CODE)
      return this.index++, nodes.length === 1 ? nodes[0] : nodes.length ? {
        type: Jsep.SEQUENCE_EXP,
        expressions: nodes
      } : !1;
    this.throwError("Unclosed (");
  }
  /**
   * Responsible for parsing Array literals `[1, 2, 3]`
   * This function assumes that it needs to gobble the opening bracket
   * and then tries to gobble the expressions as arguments.
   * @returns {jsep.ArrayExpression}
   */
  gobbleArray() {
    return this.index++, {
      type: Jsep.ARRAY_EXP,
      elements: this.gobbleArguments(Jsep.CBRACK_CODE)
    };
  }
}, hooks = new Hooks();
Object.assign(Jsep, {
  hooks,
  plugins: new Plugins(Jsep),
  // Node Types
  // ----------
  // This is the full set of types that any JSEP node can be.
  // Store them here to save space when minified
  COMPOUND: "Compound",
  SEQUENCE_EXP: "SequenceExpression",
  IDENTIFIER: "Identifier",
  MEMBER_EXP: "MemberExpression",
  LITERAL: "Literal",
  THIS_EXP: "ThisExpression",
  CALL_EXP: "CallExpression",
  UNARY_EXP: "UnaryExpression",
  BINARY_EXP: "BinaryExpression",
  ARRAY_EXP: "ArrayExpression",
  TAB_CODE: 9,
  LF_CODE: 10,
  CR_CODE: 13,
  SPACE_CODE: 32,
  PERIOD_CODE: 46,
  // '.'
  COMMA_CODE: 44,
  // ','
  SQUOTE_CODE: 39,
  // single quote
  DQUOTE_CODE: 34,
  // double quotes
  OPAREN_CODE: 40,
  // (
  CPAREN_CODE: 41,
  // )
  OBRACK_CODE: 91,
  // [
  CBRACK_CODE: 93,
  // ]
  QUMARK_CODE: 63,
  // ?
  SEMCOL_CODE: 59,
  // ;
  COLON_CODE: 58,
  // :
  // Operations
  // ----------
  // Use a quickly-accessible map to store all of the unary operators
  // Values are set to `1` (it really doesn't matter)
  unary_ops: {
    "-": 1,
    "!": 1,
    "~": 1,
    "+": 1
  },
  // Also use a map for the binary operations but set their values to their
  // binary precedence for quick reference (higher number = higher precedence)
  // see [Order of operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
  binary_ops: {
    "||": 1,
    "&&": 2,
    "|": 3,
    "^": 4,
    "&": 5,
    "==": 6,
    "!=": 6,
    "===": 6,
    "!==": 6,
    "<": 7,
    ">": 7,
    "<=": 7,
    ">=": 7,
    "<<": 8,
    ">>": 8,
    ">>>": 8,
    "+": 9,
    "-": 9,
    "*": 10,
    "/": 10,
    "%": 10
  },
  // sets specific binary_ops as right-associative
  right_associative: /* @__PURE__ */ new Set(),
  // Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
  additional_identifier_chars: /* @__PURE__ */ new Set(["$", "_"]),
  // Literals
  // ----------
  // Store the values to return for the various literals we may encounter
  literals: {
    true: !0,
    false: !1,
    null: null
  },
  // Except for `this`, which is special. This could be changed to something like `'self'` as well
  this_str: "this"
});
Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
var jsep = (expr) => new Jsep(expr).parse(), staticMethods = Object.getOwnPropertyNames(Jsep);
staticMethods.forEach((m2) => {
  jsep[m2] === void 0 && m2 !== "prototype" && (jsep[m2] = Jsep[m2]);
});
jsep.Jsep = Jsep;
var CONDITIONAL_EXP = "ConditionalExpression", ternary = {
  name: "ternary",
  init(jsep2) {
    jsep2.hooks.add("after-expression", function(env) {
      if (env.node && this.code === jsep2.QUMARK_CODE) {
        this.index++;
        let test = env.node, consequent = this.gobbleExpression();
        if (consequent || this.throwError("Expected expression"), this.gobbleSpaces(), this.code === jsep2.COLON_CODE) {
          this.index++;
          let alternate = this.gobbleExpression();
          if (alternate || this.throwError("Expected expression"), env.node = {
            type: CONDITIONAL_EXP,
            test,
            consequent,
            alternate
          }, test.operator && jsep2.binary_ops[test.operator] <= 0.9) {
            let newTest = test;
            for (; newTest.right.operator && jsep2.binary_ops[newTest.right.operator] <= 0.9; )
              newTest = newTest.right;
            env.node.test = newTest.right, newTest.right = env.node, env.node = test;
          }
        } else
          this.throwError("Expected :");
      }
    });
  }
};
jsep.plugins.register(ternary);

// node_modules/@jsep-plugin/assignment/dist/index.js
var plugin = {
  name: "assignment",
  assignmentOperators: /* @__PURE__ */ new Set([
    "=",
    "*=",
    "**=",
    "/=",
    "%=",
    "+=",
    "-=",
    "<<=",
    ">>=",
    ">>>=",
    "&=",
    "^=",
    "|="
  ]),
  updateOperators: [43, 45],
  assignmentPrecedence: 0.9,
  init(jsep2) {
    let updateNodeTypes = [jsep2.IDENTIFIER, jsep2.MEMBER_EXP];
    plugin.assignmentOperators.forEach((op) => jsep2.addBinaryOp(op, plugin.assignmentPrecedence, !0)), jsep2.hooks.add("gobble-token", function(env) {
      let code = this.code;
      plugin.updateOperators.some((c2) => c2 === code && c2 === this.expr.charCodeAt(this.index + 1)) && (this.index += 2, env.node = {
        type: "UpdateExpression",
        operator: code === 43 ? "++" : "--",
        argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
        prefix: !0
      }, (!env.node.argument || !updateNodeTypes.includes(env.node.argument.type)) && this.throwError(`Unexpected ${env.node.operator}`));
    }), jsep2.hooks.add("after-token", function(env) {
      if (env.node) {
        let code = this.code;
        plugin.updateOperators.some((c2) => c2 === code && c2 === this.expr.charCodeAt(this.index + 1)) && (updateNodeTypes.includes(env.node.type) || this.throwError(`Unexpected ${env.node.operator}`), this.index += 2, env.node = {
          type: "UpdateExpression",
          operator: code === 43 ? "++" : "--",
          argument: env.node,
          prefix: !1
        });
      }
    }), jsep2.hooks.add("after-expression", function(env) {
      env.node && updateBinariesToAssignments(env.node);
    });
    function updateBinariesToAssignments(node) {
      plugin.assignmentOperators.has(node.operator) ? (node.type = "AssignmentExpression", updateBinariesToAssignments(node.left), updateBinariesToAssignments(node.right)) : node.operator || Object.values(node).forEach((val) => {
        val && typeof val == "object" && updateBinariesToAssignments(val);
      });
    }
  }
};

// node_modules/@jsep-plugin/object/dist/index.js
var OBJECT_EXP = "ObjectExpression", PROPERTY = "Property", index = {
  name: "object",
  init(jsep2) {
    function gobbleObjectExpression(env) {
      if (this.code === 123) {
        this.index++;
        let properties = [];
        for (; !isNaN(this.code); ) {
          if (this.gobbleSpaces(), this.code === 125) {
            this.index++, env.node = this.gobbleTokenProperty({
              type: OBJECT_EXP,
              properties
            });
            return;
          }
          let key = this.gobbleExpression();
          if (!key)
            break;
          if (this.gobbleSpaces(), key.type === jsep2.IDENTIFIER && (this.code === jsep2.COMMA_CODE || this.code === 125))
            properties.push({
              type: PROPERTY,
              computed: !1,
              key,
              value: key,
              shorthand: !0
            });
          else if (this.code === jsep2.COLON_CODE) {
            this.index++;
            let value = this.gobbleExpression();
            value || this.throwError("unexpected object property");
            let computed = key.type === jsep2.ARRAY_EXP;
            properties.push({
              type: PROPERTY,
              computed,
              key: computed ? key.elements[0] : key,
              value,
              shorthand: !1
            }), this.gobbleSpaces();
          } else
            key && properties.push(key);
          this.code === jsep2.COMMA_CODE && this.index++;
        }
        this.throwError("missing }");
      }
    }
    jsep2.hooks.add("gobble-token", gobbleObjectExpression);
  }
};

// node_modules/@webstudio-is/react-sdk/lib/index.js
var ReactSdkContext = (0, import_react4.createContext)({
  assetBaseUrl: "/",
  imageBaseUrl: "/",
  imageLoader: ({ src }) => src,
  pagesPaths: /* @__PURE__ */ new Set()
});
var idAttribute = "data-ws-id";
var Root = ({
  Outlet: Outlet5 = Outlet
}) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", {
  lang: "en",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Meta, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Links, {})
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Outlet5, {})
  ]
}), common = {
  label: z.string().optional(),
  description: z.string().optional(),
  required: z.boolean()
}, Number2 = z.object({
  ...common,
  control: z.literal("number"),
  type: z.literal("number"),
  defaultValue: z.number().optional()
}), Range = z.object({
  ...common,
  control: z.literal("range"),
  type: z.literal("number"),
  defaultValue: z.number().optional()
}), Text = z.object({
  ...common,
  control: z.literal("text"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  /**
   * The number of rows in <textarea>. If set to 0 an <input> will be used instead.
   * In line with Storybook team's plan: https://github.com/storybookjs/storybook/issues/21100
   */
  rows: z.number().optional()
}), Code = z.object({
  ...common,
  control: z.literal("code"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  /**
   * The number of rows in <textarea>. If set to 0 an <input> will be used instead.
   * In line with Storybook team's plan: https://github.com/storybookjs/storybook/issues/21100
   */
  rows: z.number().optional()
}), Color = z.object({
  ...common,
  control: z.literal("color"),
  type: z.literal("string"),
  defaultValue: z.string().optional()
}), Boolean2 = z.object({
  ...common,
  control: z.literal("boolean"),
  type: z.literal("boolean"),
  defaultValue: z.boolean().optional()
}), Radio = z.object({
  ...common,
  control: z.literal("radio"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  options: z.array(z.string())
}), InlineRadio = z.object({
  ...common,
  control: z.literal("inline-radio"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  options: z.array(z.string())
}), Select = z.object({
  ...common,
  control: z.literal("select"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  options: z.array(z.string())
}), Check = z.object({
  ...common,
  control: z.literal("check"),
  type: z.literal("string[]"),
  defaultValue: z.array(z.string()).optional(),
  options: z.array(z.string())
}), InlineCheck = z.object({
  ...common,
  control: z.literal("inline-check"),
  type: z.literal("string[]"),
  defaultValue: z.array(z.string()).optional(),
  options: z.array(z.string())
}), MultiSelect = z.object({
  ...common,
  control: z.literal("multi-select"),
  type: z.literal("string[]"),
  defaultValue: z.array(z.string()).optional(),
  options: z.array(z.string())
}), File2 = z.object({
  ...common,
  control: z.literal("file"),
  type: z.literal("string"),
  defaultValue: z.string().optional(),
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept */
  accept: z.string().optional()
}), Url = z.object({
  ...common,
  control: z.literal("url"),
  type: z.literal("string"),
  defaultValue: z.string().optional()
}), ObjectType = z.object({
  ...common,
  control: z.literal("object"),
  // @todo not sure what type should be here
  // (we don't support Object yet, added for completeness)
  type: z.literal("Record<string, string>"),
  defaultValue: z.record(z.string()).optional()
}), Date2 = z.object({
  ...common,
  control: z.literal("date"),
  // @todo not sure what type should be here
  // (we don't support Date yet, added for completeness)
  type: z.literal("string"),
  defaultValue: z.string().optional()
}), Action2 = z.object({
  ...common,
  control: z.literal("action"),
  type: z.literal("action"),
  defaultValue: z.undefined().optional()
}), PropMeta = z.union(
  [
    Number2,
    Range,
    Text,
    Code,
    Color,
    Boolean2,
    Radio,
    InlineRadio,
    Select,
    MultiSelect,
    Check,
    InlineCheck,
    File2,
    Url,
    ObjectType,
    Date2,
    Action2
  ]
);
jsep.plugins.register(plugin);
jsep.plugins.register(index);
var EmbedTemplateText = z.object({
  type: z.literal("text"),
  value: z.string()
}), EmbedTemplateVariable = z.object({
  initialValue: z.union(
    [
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.string())
    ]
  )
}), EmbedTemplateProp = z.union(
  [
    z.object({
      type: z.literal("number"),
      name: z.string(),
      value: z.number()
    }),
    z.object({
      type: z.literal("string"),
      name: z.string(),
      value: z.string()
    }),
    z.object({
      type: z.literal("boolean"),
      name: z.string(),
      value: z.boolean()
    }),
    z.object({
      type: z.literal("string[]"),
      name: z.string(),
      value: z.array(z.string())
    }),
    z.object({
      type: z.literal("expression"),
      name: z.string(),
      code: z.string()
    }),
    z.object({
      type: z.literal("action"),
      name: z.string(),
      value: z.array(
        z.object({
          type: z.literal("execute"),
          args: z.optional(z.array(z.string())),
          code: z.string()
        })
      )
    })
  ]
), EmbedTemplateStyleDeclRaw = z.object({
  // State selector, e.g. :hover
  state: z.optional(z.string()),
  property: z.string(),
  value: StyleValue
}), EmbedTemplateStyleDecl = EmbedTemplateStyleDeclRaw, EmbedTemplateInstance = z.lazy(
  () => z.object({
    type: z.literal("instance"),
    component: z.string(),
    label: z.optional(z.string()),
    variables: z.optional(z.record(z.string(), EmbedTemplateVariable)),
    props: z.optional(z.array(EmbedTemplateProp)),
    tokens: z.optional(z.array(z.string())),
    styles: z.optional(z.array(EmbedTemplateStyleDecl)),
    children: WsEmbedTemplate
  })
), WsEmbedTemplate = z.lazy(
  () => z.array(z.union([EmbedTemplateInstance, EmbedTemplateText]))
);
var WsComponentPropsMeta = z.object({
  props: z.record(PropMeta),
  // Props that will be always visible in properties panel.
  initialProps: z.array(z.string()).optional()
}), componentCategories = [
  "general",
  "text",
  "media",
  "forms",
  "radix",
  "hidden"
], stateCategories = ["states", "component-states"], ComponentState = z.object({
  category: z.enum(stateCategories).optional(),
  selector: z.string(),
  label: z.string()
}), ComponentToken = z.object({
  variant: z.optional(z.string()),
  styles: z.array(EmbedTemplateStyleDecl)
});
var WsComponentMeta = z.object({
  category: z.enum(componentCategories).optional(),
  // container - can accept other components with dnd or be edited as text
  // control - usually form controls like inputs, without children
  // embed - images, videos or other embeddable components, without children
  // rich-text-child - formatted text fragment, not listed in components list
  type: z.enum(["container", "control", "embed", "rich-text-child"]),
  requiredAncestors: z.optional(z.array(z.string())),
  invalidAncestors: z.optional(z.array(z.string())),
  // when this field is specified component receives
  // prop with index of same components withiin specified ancestor
  // important to automatically enumerate collections without
  // naming every item manually
  indexWithinAncestor: z.optional(z.string()),
  stylable: z.optional(z.boolean()),
  // specifies whether the instance can be deleted,
  // copied or dragged out of its parent instance
  // true by default
  detachable: z.optional(z.boolean()),
  label: z.optional(z.string()),
  description: z.string().optional(),
  icon: z.string(),
  presetStyle: z.optional(
    z.record(z.string(), z.array(EmbedTemplateStyleDecl))
  ),
  presetTokens: z.optional(z.record(z.string(), ComponentToken)),
  states: z.optional(z.array(ComponentState)),
  template: z.optional(WsEmbedTemplate),
  order: z.number().optional()
});
var getInstanceIdFromComponentProps = (props) => props[idAttribute];

// app/routes/[ai-test]._index.tsx
var ai_test_index_exports = {};
__export(ai_test_index_exports, {
  action: () => action,
  default: () => ai_test_index_default,
  headers: () => headers,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_esm();

// node_modules/@webstudio-is/form-handlers/lib/index.js
var formHiddenFieldPrefix = "ws--form", formIdFieldName = `${formHiddenFieldPrefix}-id`, getFormEntries = (formData) => [...formData.entries()].flatMap(
  ([key, value]) => key.startsWith(formHiddenFieldPrefix) === !1 && typeof value == "string" ? [[key, value]] : []
), getFormId = (formData) => {
  for (let [key, value] of formData.entries())
    if (key === formIdFieldName && typeof value == "string")
      return value;
}, getDomain = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return;
  }
}, formToEmail = ({
  formData,
  pageUrl,
  toEmail,
  fromEmail
}) => {
  let html = `<p>There has been a new submission of your form at <a href="${pageUrl}">${pageUrl}</a>:</p>`, txt = `There has been a new submission of your form at ${pageUrl}:

`;
  html += "<table><tbody>";
  for (let [key, value] of getFormEntries(formData))
    html += `<tr><td><strong>${key}:</strong></td><td>${value}</td></tr>`, txt += `${key}: ${value}
`;
  return html += "</tbody></table>", {
    from: fromEmail,
    to: toEmail,
    subject: `New form submission from ${getDomain(pageUrl) ?? pageUrl}`,
    txt,
    html
  };
}, getResponseBody = async (response) => {
  let text = await response.text();
  try {
    let json4 = JSON.parse(text);
    return typeof json4 == "object" && json4 !== null ? { json: json4, text } : { text };
  } catch {
    return { text: text === "" ? response.statusText : text };
  }
}, getErrors = (json4) => {
  if (json4 !== void 0) {
    if (typeof json4.error == "string")
      return [json4.error];
    if (typeof json4.message == "string")
      return [json4.message];
    if (Array.isArray(json4.errors) && json4.errors.every((error) => typeof error == "string"))
      return json4.errors;
  }
};
var getAuth = (hookUrl) => {
  let url = new URL(hookUrl), { username, password } = url;
  url.username = "", url.password = "";
  let urlWithoutAuth = url.toString();
  return {
    username,
    password,
    urlWithoutAuth
  };
}, n8nHandler = async ({
  formInfo,
  hookUrl
}) => {
  let headers4 = { "Content-Type": "application/json" }, { username, password, urlWithoutAuth } = getAuth(hookUrl);
  username !== "" && password !== "" && (headers4.Authorization = `Basic ${btoa([username, password].join(":"))}`);
  let formId = getFormId(formInfo.formData);
  if (formId === void 0)
    return { success: !1, errors: ["No form id in FormData"] };
  let payload = {
    email: formToEmail(formInfo),
    // globally unique form id (can be used for unsubscribing)
    formId: [formInfo.projectId, formId].join("--"),
    action: formInfo.action,
    method: formInfo.method,
    formData: Object.fromEntries(getFormEntries(formInfo.formData))
  }, response;
  try {
    response = await fetch(urlWithoutAuth, {
      method: "POST",
      headers: headers4,
      body: JSON.stringify(payload)
    });
  } catch (error) {
    return { success: !1, errors: [error.message] };
  }
  let { text, json: json4 } = await getResponseBody(response);
  return response.status >= 200 && response.status < 300 && // It's difficult to control status code at n8n side.
  // Data is easier to control, so we use data to determine success.
  (json4 == null ? void 0 : json4.success) === !0 ? { success: !0 } : { success: !1, errors: getErrors(json4) ?? [text] };
};

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_react9 = __toESM(require_react(), 1), import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1), import_react10 = __toESM(require_react(), 1), import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1), import_react11 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/import.mjs
var import_react7 = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document < "u" ? import_react7.default.useLayoutEffect : () => {
};
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window < "u" && window.document && window.document.createElement);
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
  return refs.length === 1 ? refs[0] : (value) => {
    for (let ref of refs)
      typeof ref == "function" ? ref(value) : ref != null && (ref.current = value);
  };
}
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll())
    element.focus({
      preventScroll: !0
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus(), $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = !1;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          return $7215afc6de606d6b$var$supportsPreventScrollCached = !0, !0;
        }
      });
    } catch {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  for (var parent = element.parentNode, scrollableElements = [], rootScrollingElement = document.scrollingElement || document.documentElement; parent instanceof HTMLElement && parent !== rootScrollingElement; )
    (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) && scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    }), parent = parent.parentNode;
  return rootScrollingElement instanceof HTMLElement && scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  }), scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements)
    element.scrollTop = scrollTop, element.scrollLeft = scrollLeft;
}
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  return typeof window > "u" || window.navigator == null ? !1 : ((_window_navigator_userAgentData = window.navigator.userAgentData) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window < "u" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator.userAgentData) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : !1;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = !0) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  $c87311424ea30a05$export$b7d78993b74f766d() && (!((_window_event = window.event) === null || _window_event === void 0 || (_window_event_type = _window_event.type) === null || _window_event_type === void 0) && _window_event_type.startsWith("key")) && target.target === "_blank" && ($c87311424ea30a05$export$9ac100e40613ea10() ? metaKey = !0 : ctrlKey = !0);
  let event = $c87311424ea30a05$export$78551043582a6a98() && $c87311424ea30a05$export$9ac100e40613ea10() && !$c87311424ea30a05$export$7bef049ce92e4224() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: !0,
    cancelable: !0
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening, $7215afc6de606d6b$export$de79e2c695e052f3(target), target.dispatchEvent(event), $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = !1;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = !1;
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map(), $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window > "u")
    return;
  let onTransitionStart = (e2) => {
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e2.target);
    transitions || (transitions = /* @__PURE__ */ new Set(), $bbed8b41f857bcc0$var$transitionsByElement.set(e2.target, transitions), e2.target.addEventListener("transitioncancel", onTransitionEnd)), transitions.add(e2.propertyName);
  }, onTransitionEnd = (e2) => {
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e2.target);
    if (properties && (properties.delete(e2.propertyName), properties.size === 0 && (e2.target.removeEventListener("transitioncancel", onTransitionEnd), $bbed8b41f857bcc0$var$transitionsByElement.delete(e2.target)), $bbed8b41f857bcc0$var$transitionsByElement.size === 0)) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart), document.body.addEventListener("transitionend", onTransitionEnd);
}
typeof document < "u" && (document.readyState !== "loading" ? $bbed8b41f857bcc0$var$setupGlobalEvents() : document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents));
var $5df64b3807dc15ee$var$visualViewport = typeof document < "u" && window.visualViewport;

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1), import_react12 = __toESM(require_react(), 1), import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1), import_react13 = __toESM(require_react(), 1), import_react14 = __toESM(require_react(), 1), import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1), import_react15 = __toESM(require_react(), 1), import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1), import_react16 = __toESM(require_react(), 1), import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1), import_react17 = __toESM(require_react(), 1), import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1), import_react18 = __toESM(require_react(), 1), import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1), import_react19 = __toESM(require_react(), 1), import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1), import_react20 = __toESM(require_react(), 1), import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1), import_react21 = __toESM(require_react(), 1), import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1), import_react22 = __toESM(require_react(), 1), import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1), import_react23 = __toESM(require_react(), 1), import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1), import_react24 = __toESM(require_react(), 1), import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1), import_react25 = __toESM(require_react(), 1), import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1), import_react26 = __toESM(require_react(), 1), import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1), import_react27 = __toESM(require_react(), 1);

// node_modules/@webstudio-is/image/lib/index.js
var import_react8 = __toESM(require_react(), 1), import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1), import_warn_once = __toESM(require_warn_once(), 1), imageSizes = [16, 32, 48, 64, 96, 128, 256, 384], deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840], allSizes = [...imageSizes, ...deviceSizes], getWidths = (width, sizes) => {
  if (sizes) {
    let viewportWidthRe = /(^|\s)(1?\d?\d)vw/g, percentSizes = [];
    for (let match; match = viewportWidthRe.exec(sizes); match)
      percentSizes.push(Number.parseInt(match[2], 10));
    if (percentSizes.length) {
      let smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(
          (size) => size >= deviceSizes[0] * smallestRatio
        ),
        kind: "w"
      };
    }
    return { widths: allSizes, kind: "w" };
  }
  if (width == null)
    return { widths: deviceSizes, kind: "w" };
  let MAX_DEVICE_PIXEL_RATIO = 2, index2 = allSizes.findIndex(
    (size) => size >= MAX_DEVICE_PIXEL_RATIO * width
  );
  return index2 = index2 < 0 ? allSizes.length : index2, {
    widths: allSizes.slice(0, index2 + 1),
    kind: "w"
  };
}, generateImgAttrs = ({
  src,
  width,
  quality,
  sizes,
  loader: loader6
}) => {
  let { widths, kind } = getWidths(width, sizes);
  return {
    sizes: !sizes && kind === "w" ? "100vw" : sizes,
    srcSet: widths.map(
      (w2, i2) => `${loader6({ src, quality, width: w2 })} ${kind === "w" ? w2 : i2 + 1}${kind}`
    ).join(", "),
    // Must be last, to prevent Safari to load images twice
    src: loader6({
      src,
      quality,
      width: widths[widths.length - 1]
    })
  };
}, getInt = (value) => {
  if (typeof value == "number")
    return Math.round(value);
  if (typeof value == "string") {
    let vNum = Number.parseFloat(value);
    if (!Number.isNaN(vNum))
      return Math.round(vNum);
  }
}, DEFAULT_SIZES = "(min-width: 1280px) 50vw, 100vw", DEFAULT_QUALITY = 80, getImageAttributes = (props) => {
  let width = getInt(props.width), quality = Math.max(
    Math.min(getInt(props.quality) ?? DEFAULT_QUALITY, 100),
    0
  );
  if (props.src != null && props.src !== "") {
    if (props.srcSet == null && props.optimize) {
      let sizes = props.sizes ?? (props.width == null ? DEFAULT_SIZES : void 0);
      return generateImgAttrs({
        src: props.src,
        width,
        quality,
        sizes,
        loader: props.loader
      });
    }
    let resAttrs = { src: props.src };
    return props.srcSet != null && (resAttrs.srcSet = props.srcSet), props.sizes != null && (resAttrs.sizes = props.sizes), resAttrs;
  }
  return null;
}, Image = (0, import_react8.forwardRef)(
  ({
    quality,
    loader: loader6,
    optimize = !0,
    loading = "lazy",
    decoding = "async",
    ...imageProps
  }, ref) => {
    let imageAttributes = getImageAttributes({
      src: imageProps.src,
      srcSet: imageProps.srcSet,
      sizes: imageProps.sizes,
      width: imageProps.width,
      quality,
      loader: loader6,
      optimize
    }) ?? { src: imagePlaceholderSvg };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "img",
      {
        ...imageProps,
        ...imageAttributes,
        decoding,
        loading,
        ref
      }
    );
  }
);
Image.displayName = "Image";
var imagePlaceholderSvg = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1), import_react28 = __toESM(require_react(), 1), import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1), import_react29 = __toESM(require_react(), 1), import_react30 = __toESM(require_react(), 1), import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1), import_react31 = __toESM(require_react(), 1), import_react32 = __toESM(require_react(), 1), import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1), import_react33 = __toESM(require_react(), 1), import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1), import_react34 = __toESM(require_react(), 1), import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1), import_react35 = __toESM(require_react(), 1), import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1), import_react36 = __toESM(require_react(), 1), import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);

// node_modules/colord/index.mjs
var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, t = function(r2) {
  return typeof r2 == "string" ? r2.length > 0 : typeof r2 == "number";
}, n = function(r2, t2, n2) {
  return t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
}, e = function(r2, t2, n2) {
  return t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
}, u = function(r2) {
  return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
}, a = function(r2) {
  return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
}, o = function(r2) {
  return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
}, i = /^#([0-9a-f]{3,8})$/i, s = function(r2) {
  var t2 = r2.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
}, h = function(r2) {
  var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
  return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
}, b = function(r2) {
  var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
  t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
  var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h2 = a2 % 6;
  return { r: 255 * [e2, i2, o2, o2, s2, e2][h2], g: 255 * [s2, e2, e2, i2, o2, o2][h2], b: 255 * [o2, o2, s2, e2, e2, i2][h2], a: u2 };
}, g = function(r2) {
  return { h: u(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
}, d = function(r2) {
  return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
}, f = function(r2) {
  return b((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
  var t2, n2, e2;
}, c = function(r2) {
  return { h: (t2 = h(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
  var t2, n2, e2, u2;
}, l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, y = { string: [[function(r2) {
  var t2 = i.exec(r2);
  return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: r2.length === 4 ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : r2.length === 6 || r2.length === 8 ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: r2.length === 8 ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r2) {
  var t2 = v.exec(r2) || m.exec(r2);
  return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: t2[7] === void 0 ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t2) {
  var n2 = l.exec(t2) || p.exec(t2);
  if (!n2)
    return null;
  var e2, u2, a2 = g({ h: (e2 = n2[1], u2 = n2[2], u2 === void 0 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: n2[5] === void 0 ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
  return f(a2);
}, "hsl"]], object: [[function(r2) {
  var n2 = r2.r, e2 = r2.g, u2 = r2.b, o2 = r2.a, i2 = o2 === void 0 ? 1 : o2;
  return t(n2) && t(e2) && t(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
}, "rgb"], [function(r2) {
  var n2 = r2.h, e2 = r2.s, u2 = r2.l, a2 = r2.a, o2 = a2 === void 0 ? 1 : a2;
  if (!t(n2) || !t(e2) || !t(u2))
    return null;
  var i2 = g({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
  return f(i2);
}, "hsl"], [function(r2) {
  var n2 = r2.h, a2 = r2.s, o2 = r2.v, i2 = r2.a, s2 = i2 === void 0 ? 1 : i2;
  if (!t(n2) || !t(a2) || !t(o2))
    return null;
  var h2 = function(r3) {
    return { h: u(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
  }({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
  return b(h2);
}, "hsv"]] }, N = function(r2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2][0](r2);
    if (e2)
      return [e2, t2[n2][1]];
  }
  return [null, void 0];
}, x = function(r2) {
  return typeof r2 == "string" ? N(r2.trim(), y.string) : typeof r2 == "object" && r2 !== null ? N(r2, y.object) : [null, void 0];
};
var M = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
}, H = function(r2) {
  return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
}, $ = function(r2, t2) {
  var n2 = c(r2);
  return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
}, j = function() {
  function r2(r3) {
    this.parsed = x(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r2.prototype.isValid = function() {
    return this.parsed !== null;
  }, r2.prototype.brightness = function() {
    return n(H(this.rgba), 2);
  }, r2.prototype.isDark = function() {
    return H(this.rgba) < 0.5;
  }, r2.prototype.isLight = function() {
    return H(this.rgba) >= 0.5;
  }, r2.prototype.toHex = function() {
    return r3 = o(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, i2 = (a2 = r3.a) < 1 ? s(n(255 * a2)) : "", "#" + s(t2) + s(e2) + s(u2) + i2;
    var r3, t2, e2, u2, a2, i2;
  }, r2.prototype.toRgb = function() {
    return o(this.rgba);
  }, r2.prototype.toRgbString = function() {
    return r3 = o(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsl = function() {
    return d(c(this.rgba));
  }, r2.prototype.toHslString = function() {
    return r3 = d(c(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
    var r3, t2, n2, e2, u2;
  }, r2.prototype.toHsv = function() {
    return r3 = h(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
    var r3;
  }, r2.prototype.invert = function() {
    return w({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
    var r3;
  }, r2.prototype.saturate = function(r3) {
    return r3 === void 0 && (r3 = 0.1), w(M(this.rgba, r3));
  }, r2.prototype.desaturate = function(r3) {
    return r3 === void 0 && (r3 = 0.1), w(M(this.rgba, -r3));
  }, r2.prototype.grayscale = function() {
    return w(M(this.rgba, -1));
  }, r2.prototype.lighten = function(r3) {
    return r3 === void 0 && (r3 = 0.1), w($(this.rgba, r3));
  }, r2.prototype.darken = function(r3) {
    return r3 === void 0 && (r3 = 0.1), w($(this.rgba, -r3));
  }, r2.prototype.rotate = function(r3) {
    return r3 === void 0 && (r3 = 15), this.hue(this.hue() + r3);
  }, r2.prototype.alpha = function(r3) {
    return typeof r3 == "number" ? w({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
    var t2;
  }, r2.prototype.hue = function(r3) {
    var t2 = c(this.rgba);
    return typeof r3 == "number" ? w({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
  }, r2.prototype.isEqual = function(r3) {
    return this.toHex() === w(r3).toHex();
  }, r2;
}(), w = function(r2) {
  return r2 instanceof j ? r2 : new j(r2);
};

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_react37 = __toESM(require_react(), 1);

// node_modules/shallow-equal/dist/index.modern.mjs
function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB)
    return !0;
  if (!arrA || !arrB)
    return !1;
  let len = arrA.length;
  if (arrB.length !== len)
    return !1;
  for (let i2 = 0; i2 < len; i2++)
    if (arrA[i2] !== arrB[i2])
      return !1;
  return !0;
}
function shallowEqualObjects(objA, objB) {
  if (objA === objB)
    return !0;
  if (!objA || !objB)
    return !1;
  let aKeys = Object.keys(objA), bKeys = Object.keys(objB), len = aKeys.length;
  if (bKeys.length !== len)
    return !1;
  for (let i2 = 0; i2 < len; i2++) {
    let key = aKeys[i2];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key))
      return !1;
  }
  return !0;
}
function shallowEqual(a2, b2) {
  let aIsArr = Array.isArray(a2), bIsArr = Array.isArray(b2);
  return aIsArr !== bIsArr ? !1 : aIsArr && bIsArr ? shallowEqualArrays(a2, b2) : shallowEqualObjects(a2, b2);
}

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1), import_react38 = __toESM(require_react(), 1), import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1), import_react39 = __toESM(require_react(), 1), import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1), import_react40 = __toESM(require_react(), 1), import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1), Slot = (0, import_react9.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "div",
  {
    ...props,
    ref,
    style: { display: props.children ? "contents" : "block" }
  }
));
Slot.displayName = "Slot";
var Fragment4 = (0, import_react10.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ...props, ref, style: { display: "contents" } }));
Fragment4.displayName = "Fragment";
var ExecutableHtml = (props) => {
  let { code, innerRef, ...rest } = props, containerRef = (0, import_react11.useRef)(null);
  return (0, import_react11.useEffect)(() => {
    let container = containerRef.current;
    if (container === null || code === void 0)
      return;
    let range = document.createRange();
    range.setStart(container, 0);
    let fragment = range.createContextualFragment(code);
    for (; container.firstChild; )
      container.removeChild(container.firstChild);
    container.append(fragment);
  }, [code]), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ...rest,
      ref: $5dc95899b306f630$export$c9058316764c140e(innerRef, containerRef),
      style: { display: "contents" }
    }
  );
}, InnerHtml = (props) => {
  let { code, innerRef, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ...rest,
      ref: innerRef,
      style: { display: "contents" },
      dangerouslySetInnerHTML: { __html: props.code ?? "" }
    }
  );
}, Placeholder = (props) => {
  let { code, innerRef, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { ref: innerRef, ...rest, style: { padding: "20px" }, children: 'Open the "Settings" panel to insert HTML code' });
}, HtmlEmbed = (0, import_react11.forwardRef)((props, ref) => {
  let { renderer } = (0, import_react11.useContext)(ReactSdkContext), { code, executeScriptOnCanvas, clientOnly, ...rest } = props;
  return code === void 0 || code.trim().length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Placeholder, { innerRef: ref, ...rest }) : renderer === "canvas" && executeScriptOnCanvas === !0 || renderer === "preview" || clientOnly ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ExecutableHtml, { innerRef: ref, code, ...rest }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(InnerHtml, { innerRef: ref, code, ...rest });
});
HtmlEmbed.displayName = "HtmlEmbed";
var Body = (0, import_react12.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("body", { ...props, ref }));
Body.displayName = "Body";
var defaultTag = "div", Box = (0, import_react13.forwardRef)(
  ({ tag = defaultTag, ...props }, ref) => (0, import_react13.createElement)(tag, { ...props, ref })
);
Box.displayName = "Box";
var defaultTag2 = "div", Text2 = (0, import_react14.forwardRef)(
  ({ tag: Tag = defaultTag2, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { ...props, ref, children: children ?? "The text you can edit" })
);
Text2.displayName = "Text";
var defaultTag3 = "h1", Heading = (0, import_react15.forwardRef)(
  ({ tag: Tag = defaultTag3, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Tag, { ...props, ref, children: children ?? "Heading you can edit" })
);
Heading.displayName = "Heading";
var Paragraph = (0, import_react16.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { ...props, ref, children: children ?? "Paragraph you can edit" }));
Paragraph.displayName = "Paragraph";
var Link3 = (0, import_react17.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { ...props, href: props.href ?? "#", ref, children: children ?? "Link text you can edit" })
);
Link3.displayName = "Link";
var RichTextLink = (0, import_react18.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Link3, { ...props, ref }));
RichTextLink.displayName = "RichTextLink";
var Span = (0, import_react19.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { ...props, ref }));
Span.displayName = "Span";
var Bold = (0, import_react20.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("b", { ...props, ref }));
Bold.displayName = "Bold";
var Italic = (0, import_react21.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { ...props, ref }));
Italic.displayName = "Italic";
var Superscript = (0, import_react22.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sup", { ...props, ref }));
Superscript.displayName = "Bold";
var Subscript = (0, import_react23.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("sub", { ...props, ref }));
Subscript.displayName = "Subscript";
var Button = (0, import_react24.forwardRef)(
  ({ type = "submit", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { type, ...props, ref, children: children ?? "Button you can edit" })
);
Button.displayName = "Button";
var Input = (0, import_react25.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { ...props, ref }));
Input.displayName = "Input";
var Form2 = (0, import_react26.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("form", { ...props, ref, children }));
Form2.displayName = "Form";
var imagePlaceholderSvg2 = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#CCCCCC" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#A2A2A2"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#A2A2A2"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#A2A2A2"
  />
</svg>`)}`, Image2 = (0, import_react27.forwardRef)(
  ({ loading = "lazy", ...props }, ref) => {
    let { imageLoader: imageLoader2, assetBaseUrl: assetBaseUrl2 } = (0, import_react27.useContext)(ReactSdkContext);
    if (props.src === void 0 || props.src.startsWith(assetBaseUrl2) === !1)
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "img",
        {
          loading,
          ...props,
          src: props.src || imagePlaceholderSvg2,
          ref
        },
        props.src
      );
    let src = props.src.slice(assetBaseUrl2.length);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Image,
      {
        loading,
        ...props,
        loader: imageLoader2,
        src,
        ref
      },
      src
    );
  }
);
Image2.displayName = "Image";
var Blockquote = (0, import_react28.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("blockquote", { ...props, ref, children: children ?? "Blockquote you can edit" })
);
Blockquote.displayName = "Blockquote";
var unorderedTag = "ul", orderedTag = "ol", List = (0, import_react29.forwardRef)(({ ordered = !1, ...props }, ref) => (0, import_react29.createElement)(ordered ? orderedTag : unorderedTag, { ...props, ref }));
List.displayName = "List";
var ListItem = (0, import_react30.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { ...props, ref, children: children ?? "List Item you can edit" })
);
ListItem.displayName = "ListItem";
var defaultTag4 = "hr", Separator = (0, import_react31.forwardRef)(
  (props, ref) => (0, import_react31.createElement)(defaultTag4, { ...props, ref })
);
Separator.displayName = "Separator";
var CodeText = (0, import_react32.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("code", { ...props, ref, children: children ?? "Code you can edit" }));
CodeText.displayName = "CodeText";
var Label = (0, import_react33.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { ...props, ref }));
Label.displayName = "Label";
var Textarea = (0, import_react34.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("textarea", { ...props, ref }));
Textarea.displayName = "Textarea";
var RadioButton = (0, import_react35.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { ...props, type: "radio", ref }));
RadioButton.displayName = "RadioButton";
var Checkbox = (0, import_react36.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { ...props, type: "checkbox", ref }));
Checkbox.displayName = "Checkbox";
var getUrl = (options) => {
  if (options.url === void 0)
    return;
  let url;
  try {
    let userUrl = new URL(options.url);
    url = new URL(IFRAME_CDN), url.pathname = `/video${userUrl.pathname}`;
  } catch {
  }
  if (url === void 0)
    return;
  let option;
  for (option in options) {
    let value = options[option];
    option === "url" || value === void 0 || url.searchParams.append(option, value.toString());
  }
  if (url.searchParams.set("autoplay", "true"), typeof options.color == "string") {
    let color = w(options.color).toHex().replace("#", "");
    url.searchParams.set("color", color);
  }
  return options.portrait && url.searchParams.set("title", "true"), options.byline && (url.searchParams.set("portrait", "true"), url.searchParams.set("title", "true")), url.toString();
}, preconnect = (url) => {
  let link = document.createElement("link");
  link.rel = "preconnect", link.href = url, link.crossOrigin = "true", document.head.append(link);
}, warmed = !1, PLAYER_CDN = "https://f.vimeocdn.com", IFRAME_CDN = "https://player.vimeo.com", IMAGE_CDN = "https://i.vimeocdn.com", warmConnections = () => {
  warmed || (preconnect(PLAYER_CDN), preconnect(IFRAME_CDN), preconnect(IMAGE_CDN), warmed = !0);
}, createPlayer = (parent, options, callback) => {
  let url = getUrl(options);
  if (url === void 0)
    return;
  let iframe = document.createElement("iframe");
  return iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
  ), iframe.setAttribute("frameborder", "0"), iframe.setAttribute("allowfullscreen", "true"), iframe.setAttribute("src", url), iframe.setAttribute(
    "style",
    "position: absolute; width: 100%; height: 100%; opacity: 0; transition: opacity 1s;"
  ), iframe.addEventListener(
    "load",
    () => {
      iframe.style.opacity = "1", callback();
    },
    { once: !0 }
  ), parent.appendChild(iframe), () => {
    var _a7;
    (_a7 = iframe.parentElement) == null || _a7.removeChild(iframe);
  };
}, getVideoId = (url) => {
  try {
    let id = new URL(url).pathname.split("/")[1];
    return id === "" || id == null ? void 0 : id;
  } catch {
  }
}, loadPreviewImage = async (element, videoUrl) => {
  let apiUrl = `https://vimeo.com/api/v2/video/${getVideoId(videoUrl)}.json`, thumbnail = (await (await fetch(apiUrl)).json())[0].thumbnail_large, imgId = thumbnail.substr(thumbnail.lastIndexOf("/") + 1).split("_")[0], imageUrl = new URL(IMAGE_CDN);
  return imageUrl.pathname = `/video/${imgId}.webp`, imageUrl.searchParams.append("mw", "1100"), imageUrl.searchParams.append("mh", "619"), imageUrl.searchParams.append("q", "70"), imageUrl;
}, useVimeo = ({
  options,
  renderer,
  showPreview
}) => {
  let [playerStatus, setPlayerStatus] = (0, import_react37.useState)("initial"), elementRef = (0, import_react37.useRef)(null), [previewImageUrl, setPreviewImageUrl] = (0, import_react37.useState)();
  (0, import_react37.useEffect)(() => {
    setPlayerStatus(
      options.autoplay && renderer !== "canvas" ? "initialized" : "initial"
    );
  }, [options.autoplay, renderer]), (0, import_react37.useEffect)(() => {
    if (!(elementRef.current === null || playerStatus === "ready" || options.url === void 0)) {
      if (showPreview) {
        loadPreviewImage(elementRef.current, options.url).then(
          setPreviewImageUrl
        );
        return;
      }
      setPreviewImageUrl(void 0);
    }
  }, [renderer, showPreview, options.url, playerStatus]);
  let optionsRef = (0, import_react37.useRef)(options), stableOptions = (0, import_react37.useMemo)(() => (shallowEqual(options, optionsRef.current) === !1 && (optionsRef.current = options), optionsRef.current), [options]);
  return (0, import_react37.useEffect)(() => {
    if (!(elementRef.current === null || playerStatus === "initial"))
      return createPlayer(elementRef.current, stableOptions, () => {
        setPlayerStatus("ready");
      });
  }, [stableOptions, playerStatus]), { previewImageUrl, playerStatus, setPlayerStatus, elementRef };
}, Vimeo = (0, import_react37.forwardRef)(
  ({
    url,
    autoplay = !1,
    autopause = !0,
    backgroundMode = !1,
    showByline = !1,
    showControls = !0,
    doNotTrack = !1,
    keyboard = !0,
    loop = !1,
    muted = !1,
    pip = !1,
    playsinline = !0,
    showPortrait = !0,
    quality = "auto",
    responsive = !0,
    speed = !1,
    showTitle = !1,
    transparent = !0,
    showPreview = !1,
    autopip,
    controlsColor,
    interactiveParams,
    texttrack,
    children,
    ...rest
  }, ref) => {
    let { renderer } = (0, import_react37.useContext)(ReactSdkContext), { previewImageUrl, playerStatus, setPlayerStatus, elementRef } = useVimeo({
      renderer,
      showPreview,
      options: {
        url,
        autoplay,
        autopause,
        keyboard,
        loop,
        muted,
        pip,
        playsinline,
        quality,
        responsive,
        speed,
        transparent,
        portrait: showPortrait,
        byline: showByline,
        title: showTitle,
        color: controlsColor,
        controls: showControls,
        interactive_params: interactiveParams,
        background: backgroundMode,
        dnt: doNotTrack
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      VimeoContext.Provider,
      {
        value: {
          status: playerStatus,
          previewImageUrl,
          onInitPlayer() {
            renderer !== "canvas" && setPlayerStatus("initialized");
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "div",
          {
            ...rest,
            ref: (value) => {
              elementRef.current = value, ref !== null && (typeof ref == "function" ? ref(value) : ref.current = value);
            },
            onPointerOver: () => {
              renderer !== "canvas" && warmConnections();
            },
            children: url === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(EmptyState, {}) : children
          }
        )
      }
    );
  }
);
Vimeo.displayName = "Vimeo";
var EmptyState = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  "div",
  {
    style: {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2em"
    },
    children: 'Open the "Settings" panel and paste a video URL, e.g. https://vimeo.com/831343124.'
  }
), VimeoContext = (0, import_react37.createContext)({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onInitPlayer: () => {
  },
  status: "initial"
}), base64Preview = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOAMAANIAzr59FiYAAAAASUVORK5CYII=", VimeoPreviewImage = (0, import_react38.forwardRef)(({ src, ...rest }, ref) => {
  let vimeoContext = (0, import_react38.useContext)(VimeoContext);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    Image2,
    {
      ...rest,
      src: String(vimeoContext.previewImageUrl ?? src ?? base64Preview),
      ref
    }
  );
});
VimeoPreviewImage.displayName = "VimeoPreviewImage";
var VimeoPlayButton = (0, import_react39.forwardRef)(
  (props, ref) => {
    let vimeoContext = (0, import_react39.useContext)(VimeoContext);
    return vimeoContext.status !== "initial" ? null : /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Button, { ...props, onClick: vimeoContext.onInitPlayer, ref });
  }
);
VimeoPlayButton.displayName = "VimeoPlayButton";
var VimeoSpinner = (0, import_react40.forwardRef)(
  (props, ref) => (0, import_react40.useContext)(VimeoContext).status !== "initialized" ? null : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { ...props, ref })
);
VimeoSpinner.displayName = "VimeoSpinner";

// node_modules/@webstudio-is/sdk-components-react-remix/lib/components.js
var import_react41 = __toESM(require_react(), 1);
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var import_react43 = __toESM(require_react(), 1);
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1), wrapLinkComponent = (BaseLink3) => {
  let Component2 = (0, import_react41.forwardRef)((props, ref) => {
    let { pagesPaths: pagesPaths4 } = (0, import_react41.useContext)(ReactSdkContext), href = props.href;
    if (href !== void 0) {
      let url = new URL(href, "https://any-valid.url");
      if (pagesPaths4.has(url.pathname === "/" ? "" : url.pathname))
        return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(NavLink2, { ...props, to: href, ref });
    }
    let { prefetch, reloadDocument, replace, preventScrollReset, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(BaseLink3, { ...rest, ref });
  });
  return Component2.displayName = BaseLink3.displayName, Component2;
}, Link4 = wrapLinkComponent(Link3), RichTextLink2 = wrapLinkComponent(RichTextLink), useOnFetchEnd = (fetcher, handler) => {
  let latestHandler = (0, import_react43.useRef)(handler);
  latestHandler.current = handler;
  let prevFetcher = (0, import_react43.useRef)(fetcher);
  (0, import_react43.useEffect)(() => {
    prevFetcher.current.state !== fetcher.state && fetcher.state === "idle" && fetcher.data !== void 0 && latestHandler.current(fetcher.data), prevFetcher.current = fetcher;
  }, [fetcher]);
}, Form3 = (0, import_react43.forwardRef)(
  ({ children, action: action4, method, state = "initial", onStateChange, ...rest }, ref) => {
    let fetcher = useFetcher2(), instanceId = getInstanceIdFromComponentProps(rest);
    return useOnFetchEnd(fetcher, (data) => {
      let state2 = (data == null ? void 0 : data.success) === !0 ? "success" : "error";
      onStateChange == null || onStateChange(state2);
    }), /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(fetcher.Form, { ...rest, method: "post", "data-state": state, ref, children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: formIdFieldName, value: instanceId }),
      children
    ] });
  }
);
Form3.displayName = "Form";

// app/__generated__/[ai-test]._index.tsx
var import_jsx_runtime37 = __toESM(require_jsx_runtime()), fontAssets = [], imageAssets = [{ id: "09a04c1e-28d3-4a28-ae61-6f1079a9c823", name: "card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg", description: null, projectId: "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", size: 2641, type: "image", format: "svg", createdAt: "2023-11-13T12:40:51.697Z", meta: { width: 25, height: 28 } }], pageData = { page: { id: "burzlEbdH1A0YHenPqmDw", name: "AI test", title: "AI test", meta: { description: "", excludePageFromSearch: !1, socialImageAssetId: "", custom: [] }, rootInstanceId: "nENw1F2C8wsn0nriq4vmL", path: "/ai-test" } }, user = { email: "meshcheriakov@vectary.com" }, projectId = "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", Page = (props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
  Body,
  {
    "data-ws-id": "nENw1F2C8wsn0nriq4vmL",
    "data-ws-component": "Body",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
        Box,
        {
          "data-ws-id": "wENWzSvA1Pvv9DZfKtkHw",
          "data-ws-component": "Box",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
              Box,
              {
                "data-ws-id": "pc05TXxO_SLeuO_2N_pvC",
                "data-ws-component": "Box",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                    Heading,
                    {
                      "data-ws-id": "MFVzv4XIQkRxgXR8zMgz7",
                      "data-ws-component": "Heading",
                      children: "What Our Clients Say"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                    Paragraph,
                    {
                      "data-ws-id": "qpq7l4ccHp67ptw0hFpMA",
                      "data-ws-component": "Paragraph",
                      children: "Hear directly from our satisfied customers"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
              Box,
              {
                "data-ws-id": "ow8D1iL1-lT4rovBGDiz0",
                "data-ws-component": "Box",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
                    Box,
                    {
                      "data-ws-id": "hjEjwP6yHiu5sfkTq9_pS",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Image2,
                          {
                            "data-ws-id": "wrnIn02XZdInL3LkPelKy",
                            "data-ws-component": "Image",
                            src: "https://images.pexels.com/photos/18946900/pexels-photo-18946900.jpeg?wsai=true",
                            alt: "Testimonial 1",
                            width: 100,
                            height: 100,
                            title: "Credit: Melvin Buezo"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Bold,
                          {
                            "data-ws-id": "wCUO9j-jJCZcLQg5aDVWj",
                            "data-ws-component": "Bold",
                            children: "Amanda Peterson"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Paragraph,
                          {
                            "data-ws-id": "xihPp8AX2t1ugdQnX2eoS",
                            "data-ws-component": "Paragraph",
                            children: `"The service was exceptional. I couldn't be happier!"`
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Link4,
                          {
                            "data-ws-id": "-NQER_GjrwfAxctim07nA",
                            "data-ws-component": "Link",
                            href: "#",
                            children: "Read More"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
                    Box,
                    {
                      "data-ws-id": "jANgzGBLWQXV8p9nEDbRr",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Image2,
                          {
                            "data-ws-id": "KAyzzbdnZWGqkCV5A6g2n",
                            "data-ws-component": "Image",
                            src: "https://images.pexels.com/photos/4712714/pexels-photo-4712714.jpeg?wsai=true",
                            alt: "Testimonial 2",
                            width: 100,
                            height: 100,
                            title: "Credit: Lucas Meneses"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Bold,
                          {
                            "data-ws-id": "Q7jG32qH0-Ht7fUPcnbG6",
                            "data-ws-component": "Bold",
                            children: "James Smith"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Paragraph,
                          {
                            "data-ws-id": "comxlrGHYQU6OTaLF2hml",
                            "data-ws-component": "Paragraph",
                            children: '"I was blown away by the quality of the product."'
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Link4,
                          {
                            "data-ws-id": "pWgnPT21awrswdF-d0gLG",
                            "data-ws-component": "Link",
                            href: "#",
                            children: "Read More"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
                    Box,
                    {
                      "data-ws-id": "rUlUPKc8QaCOKvxI7OAbE",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Image2,
                          {
                            "data-ws-id": "3i7S3qfsWyIiuiyaR7BNp",
                            "data-ws-component": "Image",
                            src: "https://images.pexels.com/photos/19041161/pexels-photo-19041161.jpeg?wsai=true",
                            alt: "Testimonial 3",
                            width: 100,
                            height: 100,
                            title: "Credit: Lipe"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Bold,
                          {
                            "data-ws-id": "o_zgCJOIp1MoNCwpkLMsl",
                            "data-ws-component": "Bold",
                            children: "Olivia Johnson"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Paragraph,
                          {
                            "data-ws-id": "B93mIL8MGnizacKLVE7Gn",
                            "data-ws-component": "Paragraph",
                            children: '"I would recommend this to anyone. Absolutely fantastic!"'
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Link4,
                          {
                            "data-ws-id": "CyKUko4Nqn8NSxJvb0i24",
                            "data-ws-component": "Link",
                            href: "#",
                            children: "Read More"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      props.scripts
    ]
  }
);
var pagesPaths = /* @__PURE__ */ new Set(["", "/ai-test", "/404"]), formsProperties = /* @__PURE__ */ new Map([]);

// app/__generated__/index.css
var generated_default = "/build/_assets/index-QKIVNHEV.css";

// app/constants.mjs
var assetBaseUrl = "/assets/", imageBaseUrl = "/assets/", imageLoader = ({ src }) => imageBaseUrl + src;

// app/routes/[ai-test]._index.tsx
var import_jsx_runtime38 = __toESM(require_jsx_runtime()), loader = async (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "", url = new URL(arg.request.url);
  return url.host = host, url.protocol = "https", arg.context.EXCLUDE_FROM_SEARCH, json3(
    {
      host,
      url: url.href,
      excludeFromSearch: arg.context.EXCLUDE_FROM_SEARCH
    },
    // No way for current information to change, so add cache for 10 minutes
    // In case of CRM Data, this should be set to 0
    { headers: { "Cache-Control": "public, max-age=600" } }
  );
}, headers = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate"
}), meta = ({ data }) => {
  let { page, site } = pageData, metas = [];
  data != null && data.url && metas.push({
    property: "og:url",
    content: data.url
  }), page.title && (metas.push({ title: page.title }), metas.push({
    property: "og:title",
    content: page.title
  })), metas.push({ property: "og:type", content: "website" });
  let origin = `https://${data == null ? void 0 : data.host}`;
  if (site != null && site.siteName && (metas.push({
    property: "og:site_name",
    content: site.siteName
  }), metas.push({
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.siteName,
      url: origin
    }
  })), (page.meta.excludePageFromSearch || data != null && data.excludeFromSearch) && metas.push({
    name: "robots",
    content: "noindex, nofollow"
  }), page.meta.description && (metas.push({
    name: "description",
    content: page.meta.description
  }), metas.push({
    property: "og:description",
    content: page.meta.description
  })), page.meta.socialImageAssetId) {
    let imageAsset = imageAssets.find(
      (asset) => asset.id === page.meta.socialImageAssetId
    );
    imageAsset && metas.push({
      property: "og:image",
      content: `https://${data == null ? void 0 : data.host}${imageLoader({
        src: imageAsset.name,
        // Do not transform social image (not enough information do we need to do this)
        format: "raw"
      })}`
    });
  }
  for (let customMeta of page.meta.custom ?? [])
    customMeta.property.trim().length !== 0 && metas.push(customMeta);
  return metas;
}, links = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  let { site } = pageData;
  if (site != null && site.faviconAssetId) {
    let imageAsset = imageAssets.find(
      (asset) => asset.id === site.faviconAssetId
    );
    imageAsset && result.push({
      rel: "icon",
      href: imageLoader({
        src: imageAsset.name,
        width: 128,
        quality: 100,
        format: "auto"
      }),
      type: void 0
    });
  } else
    result.push({
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    }), result.push({
      rel: "shortcut icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    });
  for (let asset of fontAssets)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw json3("Form not found", { status: 404 });
  let formProperties = formsProperties.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return json3(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId,
    action: action4 ?? null,
    method: getMethod(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet2 = () => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      Page,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(ScrollRestoration2, {})
        ] })
      }
    )
  }
), ai_test_index_default = Outlet2;

// app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader2
});

// app/__generated__/[sitemap.xml].ts
var sitemap = {
  pages: [
    {
      path: "",
      lastModified: "2023-11-14T12:14:33.853Z"
    },
    {
      path: "/ai-test",
      lastModified: "2023-11-14T12:14:33.853Z"
    },
    {
      path: "/404",
      lastModified: "2023-11-14T12:14:33.853Z"
    }
  ]
};

// app/routes/[sitemap.xml].tsx
var loader2 = (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "", urls = sitemap.pages.map((page) => `
  <url>
    <loc>${new URL(`https://${host}${page.path}`).href}</loc>
    <lastmod>${page.lastModified.split("T")[0]}</lastmod>
  </url>
    `);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>
  `,
    {
      headers: {
        "Content-Type": "application/xml"
      },
      status: 200
    }
  );
};

// app/routes/[404]._index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action2,
  default: () => index_default,
  headers: () => headers2,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta2
});
init_esm();

// app/__generated__/[404]._index.tsx
var import_jsx_runtime39 = __toESM(require_jsx_runtime()), fontAssets2 = [], imageAssets2 = [{ id: "09a04c1e-28d3-4a28-ae61-6f1079a9c823", name: "card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg", description: null, projectId: "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", size: 2641, type: "image", format: "svg", createdAt: "2023-11-13T12:40:51.697Z", meta: { width: 25, height: 28 } }], pageData2 = { page: { id: "RDOYjj5chw2I7ZOjyaC28", name: "404", title: "404", meta: { description: "", excludePageFromSearch: !1, socialImageAssetId: "", custom: [] }, rootInstanceId: "8p_s4qhYQc_PpFjla1oFt", path: "/404" } }, user2 = { email: "meshcheriakov@vectary.com" }, projectId2 = "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", Page2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
  Body,
  {
    "data-ws-id": "8p_s4qhYQc_PpFjla1oFt",
    "data-ws-component": "Body",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
        Box,
        {
          "data-ws-id": "9rG4aRApBcFQewdY84lwg",
          "data-ws-component": "Box",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Heading,
              {
                "data-ws-id": "UcTRdocJj4opgY6IekLAt",
                "data-ws-component": "Heading",
                children: "Oops!"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Paragraph,
              {
                "data-ws-id": "hh8RY_Z0uJcf4spwostPQ",
                "data-ws-component": "Paragraph",
                children: "We can't seem to find the page you're looking for."
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Image2,
              {
                "data-ws-id": "BpOvxVUukPk_xXY-Rfq43",
                "data-ws-component": "Image",
                src: "https://images.pexels.com/photos/6975523/pexels-photo-6975523.jpeg?wsai=true",
                alt: "A confused robot looking at a map",
                width: 200,
                height: 200,
                title: "Credit: KoolShooters"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Text2,
              {
                "data-ws-id": "7TtDIib1CfGfsPwH_qAqR",
                "data-ws-component": "Text",
                children: "Error code: 404"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Button,
              {
                "data-ws-id": "AFJAEYjsYcgoy3In32eAP",
                "data-ws-component": "Button",
                children: "Go Home"
              }
            )
          ]
        }
      ),
      props.scripts
    ]
  }
);
var pagesPaths2 = /* @__PURE__ */ new Set(["", "/ai-test", "/404"]), formsProperties2 = /* @__PURE__ */ new Map([]);

// app/routes/[404]._index.tsx
var import_jsx_runtime40 = __toESM(require_jsx_runtime()), loader3 = async (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "", url = new URL(arg.request.url);
  return url.host = host, url.protocol = "https", arg.context.EXCLUDE_FROM_SEARCH, json3(
    {
      host,
      url: url.href,
      excludeFromSearch: arg.context.EXCLUDE_FROM_SEARCH
    },
    // No way for current information to change, so add cache for 10 minutes
    // In case of CRM Data, this should be set to 0
    { headers: { "Cache-Control": "public, max-age=600" } }
  );
}, headers2 = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate"
}), meta2 = ({ data }) => {
  let { page, site } = pageData2, metas = [];
  data != null && data.url && metas.push({
    property: "og:url",
    content: data.url
  }), page.title && (metas.push({ title: page.title }), metas.push({
    property: "og:title",
    content: page.title
  })), metas.push({ property: "og:type", content: "website" });
  let origin = `https://${data == null ? void 0 : data.host}`;
  if (site != null && site.siteName && (metas.push({
    property: "og:site_name",
    content: site.siteName
  }), metas.push({
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.siteName,
      url: origin
    }
  })), (page.meta.excludePageFromSearch || data != null && data.excludeFromSearch) && metas.push({
    name: "robots",
    content: "noindex, nofollow"
  }), page.meta.description && (metas.push({
    name: "description",
    content: page.meta.description
  }), metas.push({
    property: "og:description",
    content: page.meta.description
  })), page.meta.socialImageAssetId) {
    let imageAsset = imageAssets2.find(
      (asset) => asset.id === page.meta.socialImageAssetId
    );
    imageAsset && metas.push({
      property: "og:image",
      content: `https://${data == null ? void 0 : data.host}${imageLoader({
        src: imageAsset.name,
        // Do not transform social image (not enough information do we need to do this)
        format: "raw"
      })}`
    });
  }
  for (let customMeta of page.meta.custom ?? [])
    customMeta.property.trim().length !== 0 && metas.push(customMeta);
  return metas;
}, links2 = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  let { site } = pageData2;
  if (site != null && site.faviconAssetId) {
    let imageAsset = imageAssets2.find(
      (asset) => asset.id === site.faviconAssetId
    );
    imageAsset && result.push({
      rel: "icon",
      href: imageLoader({
        src: imageAsset.name,
        width: 128,
        quality: 100,
        format: "auto"
      }),
      type: void 0
    });
  } else
    result.push({
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    }), result.push({
      rel: "shortcut icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    });
  for (let asset of fontAssets2)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost2 = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod2 = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action2 = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw json3("Form not found", { status: 404 });
  let formProperties = formsProperties2.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user2) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost2(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return json3(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId: projectId2,
    action: action4 ?? null,
    method: getMethod2(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet3 = () => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths: pagesPaths2
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      Page2,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(ScrollRestoration2, {})
        ] })
      }
    )
  }
), index_default = Outlet3;

// app/routes/[robots.txt].tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader4
});
var loader4 = (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "";
  return new Response(
    `
User-agent: *
Disallow: /api/

Sitemap: https://${host}/sitemap.xml

  `,
    {
      headers: {
        "Content-Type": "text/plain"
      },
      status: 200
    }
  );
};

// app/routes/_index.tsx
var index_exports2 = {};
__export(index_exports2, {
  action: () => action3,
  default: () => index_default2,
  headers: () => headers3,
  links: () => links3,
  loader: () => loader5,
  meta: () => meta3
});
init_esm();

// app/__generated__/_index.tsx
var import_jsx_runtime41 = __toESM(require_jsx_runtime()), fontAssets3 = [], imageAssets3 = [{ id: "09a04c1e-28d3-4a28-ae61-6f1079a9c823", name: "card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg", description: null, projectId: "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", size: 2641, type: "image", format: "svg", createdAt: "2023-11-13T12:40:51.697Z", meta: { width: 25, height: 28 } }], pageData3 = { page: { id: "NbEnUgcJPvVbhnkMtRFnG", name: "Home", title: "Home", meta: {}, rootInstanceId: "VUSkho34c4ybN1utYmVO8", path: "" } }, user3 = { email: "meshcheriakov@vectary.com" }, projectId3 = "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", Page3 = (props) => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
  Body,
  {
    "data-ws-id": "VUSkho34c4ybN1utYmVO8",
    "data-ws-component": "Body",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
        Box,
        {
          "data-ws-id": "bsfj-Ov9S4dgAo-AB2EFF",
          "data-ws-component": "Box",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
              Box,
              {
                "data-ws-id": "HY-Q9CE2YzismzGfMsPS6",
                "data-ws-component": "Box",
                tag: "nav",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                    Box,
                    {
                      "data-ws-id": "WPPbAudve_CpuGfOd3Cwu",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                          Box,
                          {
                            "data-ws-id": "QItzzEa6MPyeCOmP-aWsh",
                            "data-ws-component": "Box",
                            children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Image2,
                              {
                                "data-ws-id": "CMWzgTUCd5wu5cYgw9Qi5",
                                "data-ws-component": "Image",
                                src: "/assets/card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg",
                                width: 25,
                                height: 28
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                          Box,
                          {
                            "data-ws-id": "RbiJ9LGkuTdNxcu_lV_7U",
                            "data-ws-component": "Box",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                                Heading,
                                {
                                  "data-ws-id": "ozKmRy31ahKcmXaP4RkZO",
                                  "data-ws-component": "Heading",
                                  children: "Share & Embed"
                                }
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                                Text2,
                                {
                                  "data-ws-id": "iBmoU8Th7AZbOYQrVVif8",
                                  "data-ws-component": "Text",
                                  children: "Place designs in real environments"
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                    Box,
                    {
                      "data-ws-id": "dUV_Q11tljBmnL7YOr6c7",
                      "data-ws-component": "Box",
                      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        Box,
                        {
                          "data-ws-id": "SXeFN9bFTlp-bYwuljs2U",
                          "data-ws-component": "Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                            HtmlEmbed,
                            {
                              "data-ws-id": "YlWkmTzVX7SDnpEluH0R9",
                              "data-ws-component": "HtmlEmbed",
                              code: `<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
    <dotlottie-player src="https://lottie.host/efa7ac28-cdab-45a5-84fb-70bf575af233/k5xHDk8V2v.lottie" background="transparent" speed="1" style="position: absolute; width: 100%; height: 100%;" loop="" autoplay=""></dotlottie-player>`
                            }
                          )
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              Box,
              {
                "data-ws-id": "5gsigEcOY_-7EEbTGL_ZU",
                "data-ws-component": "Box",
                children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                  Box,
                  {
                    "data-ws-id": "0St7Lu8SbMVg0DMtBuhPs",
                    "data-ws-component": "Box",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        Box,
                        {
                          "data-ws-id": "hT-9MvovEmwGlGzDPzDxb",
                          "data-ws-component": "Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                            Image2,
                            {
                              "data-ws-id": "4VCXnAS8QQAwa2_dHA1P7",
                              "data-ws-component": "Image",
                              src: "/assets/card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg",
                              width: 25,
                              height: 28
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                        Box,
                        {
                          "data-ws-id": "QIt8vvv-ensXCZqpcWXA3",
                          "data-ws-component": "Box",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Heading,
                              {
                                "data-ws-id": "ao6HOCnZdcs2Jczn291NV",
                                "data-ws-component": "Heading",
                                children: "Augmented Reality"
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Text2,
                              {
                                "data-ws-id": "NuLLWk7Q9yjN435MsIlhJ",
                                "data-ws-component": "Text",
                                children: "Place designs in real environments"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              Box,
              {
                "data-ws-id": "KvVw4ZSqSUJPnYKENYZdD",
                "data-ws-component": "Box",
                children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                  Box,
                  {
                    "data-ws-id": "stPdIrK2BhoE6v4fZIuzq",
                    "data-ws-component": "Box",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        Box,
                        {
                          "data-ws-id": "ygdMET686TTz2yUVFAvEk",
                          "data-ws-component": "Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                            Image2,
                            {
                              "data-ws-id": "fbbIWe1bmPRbJuWEwHbZJ",
                              "data-ws-component": "Image",
                              src: "/assets/card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg",
                              width: 25,
                              height: 28
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                        Box,
                        {
                          "data-ws-id": "CsdIbc9NP6ELij-KrbMtS",
                          "data-ws-component": "Box",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Heading,
                              {
                                "data-ws-id": "erFo8COZ_glKwN073AFIC",
                                "data-ws-component": "Heading",
                                children: "Augmented Reality"
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Text2,
                              {
                                "data-ws-id": "CRSLmuT__-u8onSgNlJUZ",
                                "data-ws-component": "Text",
                                children: "Place designs in real environments"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              Box,
              {
                "data-ws-id": "to0zMflfOQqflszBdiqc9",
                "data-ws-component": "Box",
                children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                  Box,
                  {
                    "data-ws-id": "ggWwgICJ97fJ7uKDGqpuS",
                    "data-ws-component": "Box",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        Box,
                        {
                          "data-ws-id": "FEXJvFQ5Z8Wj5MpLkZaZ1",
                          "data-ws-component": "Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                            Image2,
                            {
                              "data-ws-id": "7gdBwu3yKuUZ2nm42pGDn",
                              "data-ws-component": "Image",
                              src: "/assets/card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg",
                              width: 25,
                              height: 28
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                        Box,
                        {
                          "data-ws-id": "qtbrH00jcgL2cPRxKPo06",
                          "data-ws-component": "Box",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Heading,
                              {
                                "data-ws-id": "FlxYh3mjAzo5zwK64FYbQ",
                                "data-ws-component": "Heading",
                                children: "Augmented Reality"
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Text2,
                              {
                                "data-ws-id": "GeFhq0AURqdhKCNNlreby",
                                "data-ws-component": "Text",
                                children: "Place designs in real environments"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            )
          ]
        }
      ),
      props.scripts
    ]
  }
);
var pagesPaths3 = /* @__PURE__ */ new Set(["", "/ai-test", "/404"]), formsProperties3 = /* @__PURE__ */ new Map([]);

// app/routes/_index.tsx
var import_jsx_runtime42 = __toESM(require_jsx_runtime()), loader5 = async (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "", url = new URL(arg.request.url);
  return url.host = host, url.protocol = "https", arg.context.EXCLUDE_FROM_SEARCH, json3(
    {
      host,
      url: url.href,
      excludeFromSearch: arg.context.EXCLUDE_FROM_SEARCH
    },
    // No way for current information to change, so add cache for 10 minutes
    // In case of CRM Data, this should be set to 0
    { headers: { "Cache-Control": "public, max-age=600" } }
  );
}, headers3 = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate"
}), meta3 = ({ data }) => {
  let { page, site } = pageData3, metas = [];
  data != null && data.url && metas.push({
    property: "og:url",
    content: data.url
  }), page.title && (metas.push({ title: page.title }), metas.push({
    property: "og:title",
    content: page.title
  })), metas.push({ property: "og:type", content: "website" });
  let origin = `https://${data == null ? void 0 : data.host}`;
  if (site != null && site.siteName && (metas.push({
    property: "og:site_name",
    content: site.siteName
  }), metas.push({
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.siteName,
      url: origin
    }
  })), (page.meta.excludePageFromSearch || data != null && data.excludeFromSearch) && metas.push({
    name: "robots",
    content: "noindex, nofollow"
  }), page.meta.description && (metas.push({
    name: "description",
    content: page.meta.description
  }), metas.push({
    property: "og:description",
    content: page.meta.description
  })), page.meta.socialImageAssetId) {
    let imageAsset = imageAssets3.find(
      (asset) => asset.id === page.meta.socialImageAssetId
    );
    imageAsset && metas.push({
      property: "og:image",
      content: `https://${data == null ? void 0 : data.host}${imageLoader({
        src: imageAsset.name,
        // Do not transform social image (not enough information do we need to do this)
        format: "raw"
      })}`
    });
  }
  for (let customMeta of page.meta.custom ?? [])
    customMeta.property.trim().length !== 0 && metas.push(customMeta);
  return metas;
}, links3 = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  let { site } = pageData3;
  if (site != null && site.faviconAssetId) {
    let imageAsset = imageAssets3.find(
      (asset) => asset.id === site.faviconAssetId
    );
    imageAsset && result.push({
      rel: "icon",
      href: imageLoader({
        src: imageAsset.name,
        width: 128,
        quality: 100,
        format: "auto"
      }),
      type: void 0
    });
  } else
    result.push({
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    }), result.push({
      rel: "shortcut icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    });
  for (let asset of fontAssets3)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost3 = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod3 = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action3 = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw json3("Form not found", { status: 404 });
  let formProperties = formsProperties3.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user3) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost3(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return json3(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId: projectId3,
    action: action4 ?? null,
    method: getMethod3(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet4 = () => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths: pagesPaths3
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      Page3,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(ScrollRestoration2, {})
        ] })
      }
    )
  }
), index_default2 = Outlet4;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-D3TH3BKN.js", imports: ["/build/_shared/chunk-22SYOYMK.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JAIYKMBJ.js", imports: ["/build/_shared/chunk-WBBHLTYC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[404]._index": { id: "routes/[404]._index", parentId: "root", path: "404", index: !0, caseSensitive: void 0, module: "/build/routes/[404]._index-GDC3O5AJ.js", imports: ["/build/_shared/chunk-YPAI4WMS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[ai-test]._index": { id: "routes/[ai-test]._index", parentId: "root", path: "ai-test", index: !0, caseSensitive: void 0, module: "/build/routes/[ai-test]._index-HV3M56SH.js", imports: ["/build/_shared/chunk-YPAI4WMS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-5J2M27VD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-E6JKHXAF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-RJJTHAAE.js", imports: ["/build/_shared/chunk-YPAI4WMS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "d660eb15", hmr: void 0, url: "/build/manifest-D660EB15.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/[ai-test]._index": {
    id: "routes/[ai-test]._index",
    parentId: "root",
    path: "ai-test",
    index: !0,
    caseSensitive: void 0,
    module: ai_test_index_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/[404]._index": {
    id: "routes/[404]._index",
    parentId: "root",
    path: "404",
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports2
  }
};

// server.js
var import_remix_edge_adapter = __toESM(require_src2()), server_default = (0, import_remix_edge_adapter.createRequestHandler)({
  build: server_build_exports,
  // process.env.NODE_ENV is provided by Remix at compile time
  mode: "production"
}), config = {
  cache: "manual",
  path: "/*",
  // Let the CDN handle requests for static assets, i.e. ^/_assets/*$
  //
  // Add other exclusions here, e.g. "^/api/*$" for custom Netlify functions or
  // custom Netlify Edge Functions
  excluded_patterns: ["^/_assets/*$"]
};
export {
  config,
  server_default as default
};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.14.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.14.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-dom/cjs/react-dom-server-legacy.browser.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.browser.production.min.js:
  (**
   * @license React
   * react-dom-server.browser.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

@remix-run/server-runtime/dist/esm/warnings.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/cookies.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/formData.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/mode.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/errors.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/responses.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/entry.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/headers.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/invariant.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routeMatching.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/data.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/routes.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/markup.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/serverHandoff.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/server.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/upload/errors.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/dev.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/transition.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/server.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
