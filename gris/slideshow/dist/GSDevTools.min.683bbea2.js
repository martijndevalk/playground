// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/gsap/minified/TweenLite.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 2.0.0
 * DATE: 2018-05-23
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
!function (a, b) {
  "use strict";

  var c = {},
      d = a.document,
      e = a.GreenSockGlobals = a.GreenSockGlobals || a;
  if (e.TweenLite) return e.TweenLite;

  var f,
      g,
      h,
      i,
      j,
      k = function k(a) {
    var b,
        c = a.split("."),
        d = e;

    for (b = 0; b < c.length; b++) {
      d[c[b]] = d = d[c[b]] || {};
    }

    return d;
  },
      l = k("com.greensock"),
      m = 1e-10,
      n = function n(a) {
    var b,
        c = [],
        d = a.length;

    for (b = 0; b !== d; c.push(a[b++])) {
      ;
    }

    return c;
  },
      o = function o() {},
      p = function () {
    var a = Object.prototype.toString,
        b = a.call([]);
    return function (c) {
      return null != c && (c instanceof Array || "object" == _typeof(c) && !!c.push && a.call(c) === b);
    };
  }(),
      q = {},
      r = function r(d, f, g, h) {
    this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
    var i = [];
    this.check = function (j) {
      for (var l, m, n, o, p = f.length, s = p; --p > -1;) {
        (l = q[f[p]] || new r(f[p], [])).gsClass ? (i[p] = l.gsClass, s--) : j && l.sc.push(this);
      }

      if (0 === s && g) {
        if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h) if (e[n] = c[n] = o, "undefined" != typeof module && module.exports) {
          if (d === b) {
            module.exports = c[b] = o;

            for (p in c) {
              o[p] = c[p];
            }
          } else c[b] && (c[b][n] = o);
        } else "function" == typeof define && define.amd && define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
          return o;
        });

        for (p = 0; p < this.sc.length; p++) {
          this.sc[p].check();
        }
      }
    }, this.check(!0);
  },
      s = a._gsDefine = function (a, b, c, d) {
    return new r(a, b, c, d);
  },
      t = l._class = function (a, b, c) {
    return b = b || function () {}, s(a, [], function () {
      return b;
    }, c), b;
  };

  s.globals = e;

  var u = [0, 0, 1, 1],
      v = t("easing.Ease", function (a, b, c, d) {
    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u;
  }, !0),
      w = v.map = {},
      x = v.register = function (a, b, c, d) {
    for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;) {
      for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) {
        h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
      }
    }
  };

  for (h = v.prototype, h._calcEnd = !1, h.getRatio = function (a) {
    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
    var b = this._type,
        c = this._power,
        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
  }, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) {
    h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
  }

  w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
  var y = t("events.EventDispatcher", function (a) {
    this._listeners = {}, this._eventTarget = a || this;
  });
  h = y.prototype, h.addEventListener = function (a, b, c, d, e) {
    e = e || 0;
    var f,
        g,
        h = this._listeners[a],
        k = 0;

    for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) {
      f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
    }

    h.splice(k, 0, {
      c: b,
      s: c,
      up: d,
      pr: e
    });
  }, h.removeEventListener = function (a, b) {
    var c,
        d = this._listeners[a];
    if (d) for (c = d.length; --c > -1;) {
      if (d[c].c === b) return void d.splice(c, 1);
    }
  }, h.dispatchEvent = function (a) {
    var b,
        c,
        d,
        e = this._listeners[a];
    if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) {
      d = e[b], d && (d.up ? d.c.call(d.s || c, {
        type: a,
        target: c
      }) : d.c.call(d.s || c));
    }
  };

  var z = a.requestAnimationFrame,
      A = a.cancelAnimationFrame,
      B = Date.now || function () {
    return new Date().getTime();
  },
      C = B();

  for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) {
    z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
  }

  t("Ticker", function (a, b) {
    var c,
        e,
        f,
        g,
        h,
        k = this,
        l = B(),
        n = b !== !1 && z ? "auto" : !1,
        p = 500,
        q = 33,
        r = "tick",
        s = function s(a) {
      var b,
          d,
          i = B() - C;
      i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r);
    };

    y.call(k), k.time = k.frame = 0, k.tick = function () {
      s(!0);
    }, k.lagSmoothing = function (a, b) {
      return arguments.length ? (p = a || 1 / m, void (q = Math.min(b, p, 0))) : 1 / m > p;
    }, k.sleep = function () {
      null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1));
    }, k.wake = function (a) {
      null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function (a) {
        return setTimeout(a, 1e3 * (h - k.time) + 1 | 0);
      }, k === i && (j = !0), s(2);
    }, k.fps = function (a) {
      return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c;
    }, k.useRAF = function (a) {
      return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n;
    }, k.fps(a), setTimeout(function () {
      "auto" === n && k.frame < 5 && "hidden" !== (d || {}).visibilityState && k.useRAF(!1);
    }, 1500);
  }), h = l.Ticker.prototype = new l.events.EventDispatcher(), h.constructor = l.Ticker;
  var D = t("core.Animation", function (a, b) {
    if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, X) {
      j || i.wake();
      var c = this.vars.useFrames ? W : X;
      c.add(this, c._time), this.vars.paused && this.paused(!0);
    }
  });
  i = D.ticker = new l.Ticker(), h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;

  var E = function E() {
    j && B() - C > 2e3 && ("hidden" !== (d || {}).visibilityState || !i.lagSmoothing()) && i.wake();
    var a = setTimeout(E, 2e3);
    a.unref && a.unref();
  };

  E(), h.play = function (a, b) {
    return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
  }, h.pause = function (a, b) {
    return null != a && this.seek(a, b), this.paused(!0);
  }, h.resume = function (a, b) {
    return null != a && this.seek(a, b), this.paused(!1);
  }, h.seek = function (a, b) {
    return this.totalTime(Number(a), b !== !1);
  }, h.restart = function (a, b) {
    return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
  }, h.reverse = function (a, b) {
    return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
  }, h.render = function (a, b, c) {}, h.invalidate = function () {
    return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
  }, h.isActive = function () {
    var a,
        b = this._timeline,
        c = this._startTime;
    return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7;
  }, h._enabled = function (a, b) {
    return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1;
  }, h._kill = function (a, b) {
    return this._enabled(!1, !1);
  }, h.kill = function (a, b) {
    return this._kill(a, b), this;
  }, h._uncache = function (a) {
    for (var b = a ? this : this.timeline; b;) {
      b._dirty = !0, b = b.timeline;
    }

    return this;
  }, h._swapSelfInParams = function (a) {
    for (var b = a.length, c = a.concat(); --b > -1;) {
      "{self}" === a[b] && (c[b] = this);
    }

    return c;
  }, h._callback = function (a) {
    var b = this.vars,
        c = b[a],
        d = b[a + "Params"],
        e = b[a + "Scope"] || b.callbackScope || this,
        f = d ? d.length : 0;

    switch (f) {
      case 0:
        c.call(e);
        break;

      case 1:
        c.call(e, d[0]);
        break;

      case 2:
        c.call(e, d[0], d[1]);
        break;

      default:
        c.apply(e, d);
    }
  }, h.eventCallback = function (a, b, c, d) {
    if ("on" === (a || "").substr(0, 2)) {
      var e = this.vars;
      if (1 === arguments.length) return e[a];
      null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
    }

    return this;
  }, h.delay = function (a) {
    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay;
  }, h.duration = function (a) {
    return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration);
  }, h.totalDuration = function (a) {
    return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
  }, h.time = function (a, b) {
    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
  }, h.totalTime = function (a, b, c) {
    if (j || i.wake(), !arguments.length) return this._totalTime;

    if (this._timeline) {
      if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
        this._dirty && this.totalDuration();
        var d = this._totalDuration,
            e = this._timeline;
        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;) {
          e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline;
        }
      }

      this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z());
    }

    return this;
  }, h.progress = h.totalProgress = function (a, b) {
    var c = this.duration();
    return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
  }, h.startTime = function (a) {
    return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
  }, h.endTime = function (a) {
    return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
  }, h.timeScale = function (a) {
    if (!arguments.length) return this._timeScale;
    var b, c;

    for (a = a || m, this._timeline && this._timeline.smoothChildTiming && (b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime(), this._startTime = c - (c - this._startTime) * this._timeScale / a), this._timeScale = a, c = this.timeline; c && c.timeline;) {
      c._dirty = !0, c.totalDuration(), c = c.timeline;
    }

    return this;
  }, h.reversed = function (a) {
    return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
  }, h.paused = function (a) {
    if (!arguments.length) return this._paused;
    var b,
        c,
        d = this._timeline;
    return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this;
  };
  var F = t("core.SimpleTimeline", function (a) {
    D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
  });
  h = F.prototype = new D(), h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function (a, b, c, d) {
    var e, f;
    if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = this.rawTime() - (a._timeline.rawTime() - a._pauseTime)), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;) {
      e = e._prev;
    }
    return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this;
  }, h._remove = function (a, b) {
    return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
  }, h.render = function (a, b, c) {
    var d,
        e = this._first;

    for (this._totalTime = this._time = this._rawPrevTime = a; e;) {
      d = e._next, (e._active || a >= e._startTime && !e._paused && !e._gc) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d;
    }
  }, h.rawTime = function () {
    return j || i.wake(), this._totalTime;
  };

  var G = t("TweenLite", function (b, c, d) {
    if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
    this.target = b = "string" != typeof b ? b : G.selector(b) || b;
    var e,
        f,
        g,
        h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
        i = this.vars.overwrite;
    if (this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0]) for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) {
      f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = $(f, this, !1), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
    } else this._propLookup = {}, this._siblings = $(b, this, !1), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)));
  }, !0),
      H = function H(b) {
    return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
  },
      I = function I(a, b) {
    var c,
        d = {};

    for (c in a) {
      U[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!R[c] || R[c] && R[c]._autoCSS) || (d[c] = a[c], delete a[c]);
    }

    a.css = d;
  };

  h = G.prototype = new D(), h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "2.0.0", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function (a, b) {
    i.lagSmoothing(a, b);
  }, G.selector = a.$ || a.jQuery || function (b) {
    var c = a.$ || a.jQuery;
    return c ? (G.selector = c, c(b)) : (d || (d = a.document), d ? d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b);
  };

  var J = [],
      K = {},
      L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      M = /[\+-]=-?[\.\d]/,
      N = function N(a) {
    for (var b, c = this._firstPT, d = 1e-6; c;) {
      b = c.blob ? 1 === a && null != this.end ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m.call(this._tween, b, this._target || c.t, this._tween) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
    }
  },
      O = function O(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = [],
        m = 0,
        n = "",
        o = 0;

    for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) {
      k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
        _next: l._firstPT,
        t: l,
        p: l.length - 1,
        s: g,
        c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
        f: 0,
        m: o && 4 > o ? Math.round : 0
      }), m += k.length;
    }

    return n += b.substr(m), n && l.push(n), l.setRatio = N, M.test(b) && (l.end = null), l;
  },
      P = function P(a, b, c, d, e, f, g, h, i) {
    "function" == typeof d && (d = d(i || 0, a));

    var j,
        k = _typeof(a[b]),
        l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
        m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
        n = "string" == typeof d && "=" === d.charAt(1),
        o = {
      t: a,
      p: b,
      s: m,
      f: "function" === k,
      pg: 0,
      n: e || b,
      m: f ? "function" == typeof f ? f : Math.round : 0,
      pr: 0,
      c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
    };

    return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = O(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || G.defaultStringFilter, o), o = {
      t: j,
      p: "setRatio",
      s: 0,
      c: 1,
      f: 2,
      pg: 0,
      n: e || b,
      pr: 0,
      m: 0
    }) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0;
  },
      Q = G._internals = {
    isArray: p,
    isSelector: H,
    lazyTweens: J,
    blobDif: O
  },
      R = G._plugins = {},
      S = Q.tweenLookup = {},
      T = 0,
      U = Q.reservedProps = {
    ease: 1,
    delay: 1,
    overwrite: 1,
    onComplete: 1,
    onCompleteParams: 1,
    onCompleteScope: 1,
    useFrames: 1,
    runBackwards: 1,
    startAt: 1,
    onUpdate: 1,
    onUpdateParams: 1,
    onUpdateScope: 1,
    onStart: 1,
    onStartParams: 1,
    onStartScope: 1,
    onReverseComplete: 1,
    onReverseCompleteParams: 1,
    onReverseCompleteScope: 1,
    onRepeat: 1,
    onRepeatParams: 1,
    onRepeatScope: 1,
    easeParams: 1,
    yoyo: 1,
    immediateRender: 1,
    repeat: 1,
    repeatDelay: 1,
    data: 1,
    paused: 1,
    reversed: 1,
    autoCSS: 1,
    lazy: 1,
    onOverwrite: 1,
    callbackScope: 1,
    stringFilter: 1,
    id: 1,
    yoyoEase: 1
  },
      V = {
    none: 0,
    all: 1,
    auto: 2,
    concurrent: 3,
    allOnStart: 4,
    preexisting: 5,
    "true": 1,
    "false": 0
  },
      W = D._rootFramesTimeline = new F(),
      X = D._rootTimeline = new F(),
      Y = 30,
      Z = Q.lazyRender = function () {
    var a,
        b = J.length;

    for (K = {}; --b > -1;) {
      a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
    }

    J.length = 0;
  };

  X._startTime = i.time, W._startTime = i.frame, X._active = W._active = !0, setTimeout(Z, 1), D._updateRoot = G.render = function () {
    var a, b, c;

    if (J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y) {
      Y = i.frame + (parseInt(G.autoSleep, 10) || 120);

      for (c in S) {
        for (b = S[c].tweens, a = b.length; --a > -1;) {
          b[a]._gc && b.splice(a, 1);
        }

        0 === b.length && delete S[c];
      }

      if (c = X._first, (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length) {
        for (; c && c._paused;) {
          c = c._next;
        }

        c || i.sleep();
      }
    }
  }, i.addEventListener("tick", D._updateRoot);

  var $ = function $(a, b, c) {
    var d,
        e,
        f = a._gsTweenID;
    if (S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = {
      target: a,
      tweens: []
    }), b && (d = S[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;) {
      d[e] === b && d.splice(e, 1);
    }
    return S[f].tweens;
  },
      _ = function _(a, b, c, d) {
    var e,
        f,
        g = a.vars.onOverwrite;
    return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
  },
      aa = function aa(a, b, c, d, e) {
    var f, g, h, i;

    if (1 === d || d >= 4) {
      for (i = e.length, f = 0; i > f; f++) {
        if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);else if (5 === d) break;
      }

      return g;
    }

    var j,
        k = b._startTime + m,
        l = [],
        n = 0,
        o = 0 === b._duration;

    for (f = e.length; --f > -1;) {
      (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || ba(b, 0, o), 0 === ba(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
    }

    for (f = n; --f > -1;) {
      if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
        if (2 !== d && !_(h, b)) continue;
        h._enabled(!1, !1) && (g = !0);
      }
    }

    return g;
  },
      ba = function ba(a, b, c) {
    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
      if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
      d = d._timeline;
    }

    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m;
  };

  h._init = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = this.vars,
        h = this._overwrittenProps,
        i = this._duration,
        j = !!g.immediateRender,
        k = g.ease;

    if (g.startAt) {
      this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};

      for (d in g.startAt) {
        e[d] = g.startAt[d];
      }

      if (e.data = "isStart", e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, e.onUpdate = g.onUpdate, e.onUpdateParams = g.onUpdateParams, e.onUpdateScope = g.onUpdateScope || g.callbackScope || this, this._startAt = G.to(this.target || {}, 0, e), j) if (this._time > 0) this._startAt = null;else if (0 !== i) return;
    } else if (g.runBackwards && 0 !== i) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
      0 !== this._time && (j = !1), c = {};

      for (d in g) {
        U[d] && "autoCSS" !== d || (c[d] = g[d]);
      }

      if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
        if (0 === this._time) return;
      } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
    }

    if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (f = this._targets.length, a = 0; f > a; a++) {
      this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
    } else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
    if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for (c = this._firstPT; c;) {
      c.s += c.c, c.c = -c.c, c = c._next;
    }
    this._onUpdate = g.onUpdate, this._initted = !0;
  }, h._initProps = function (b, c, d, e, f) {
    var g, h, i, j, k, l;
    if (null == b) return !1;
    K[b._gsTweenID] && Z(), this.vars.css || b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b);

    for (g in this.vars) {
      if (l = this.vars[g], U[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));else if (R[g] && (j = new R[g]())._onInitTween(b, this.vars[g], this, f)) {
        for (this._firstPT = k = {
          _next: this._firstPT,
          t: j,
          p: "setRatio",
          s: 0,
          c: 1,
          f: 1,
          n: g,
          pg: 1,
          pr: j._priority,
          m: 0
        }, h = j._overwriteProps.length; --h > -1;) {
          c[j._overwriteProps[h]] = this._firstPT;
        }

        (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
      } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
    }

    return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i);
  }, h.render = function (a, b, c) {
    var d,
        e,
        f,
        g,
        h = this._time,
        i = this._duration,
        j = this._rawPrevTime;
    if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), (!this._initted || this._startAt && this._startAt.progress()) && (c = !0);else if (this._totalTime = this._time = a, this._easeType) {
      var k = a / i,
          l = this._easeType,
          n = this._easePower;
      (1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2;
    } else this.ratio = this._ease.getRatio(a / i);

    if (this._time !== h || c) {
      if (!this._initted) {
        if (this._init(), !this._initted || this._gc) return;
        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void (this._lazy = [a, b]);
        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
      }

      for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) {
        f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
      }

      this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0));
    }
  }, h._kill = function (a, b, c) {
    if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
    b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
    if ((p(b) || H(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) {
      this._kill(a, b[d], c) && (i = !0);
    } else {
      if (this._targets) {
        for (d = this._targets.length; --d > -1;) {
          if (b === this._targets[d]) {
            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
            break;
          }
        }
      } else {
        if (b !== this.target) return !1;
        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
      }

      if (h) {
        if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != _typeof(a) || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
          for (f in j) {
            h[f] && (l || (l = []), l.push(f));
          }

          if ((l || !a) && !_(this, c, b, l)) return !1;
        }

        for (f in j) {
          (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
        }

        !this._firstPT && this._initted && this._enabled(!1, !1);
      }
    }
    return i;
  }, h.invalidate = function () {
    return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this;
  }, h._enabled = function (a, b) {
    if (j || i.wake(), a && this._gc) {
      var c,
          d = this._targets;
      if (d) for (c = d.length; --c > -1;) {
        this._siblings[c] = $(d[c], this, !0);
      } else this._siblings = $(this.target, this, !0);
    }

    return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
  }, G.to = function (a, b, c) {
    return new G(a, b, c);
  }, G.from = function (a, b, c) {
    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c);
  }, G.fromTo = function (a, b, c, d) {
    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d);
  }, G.delayedCall = function (a, b, c, d, e) {
    return new G(b, 0, {
      delay: a,
      onComplete: b,
      onCompleteParams: c,
      callbackScope: d,
      onReverseComplete: b,
      onReverseCompleteParams: c,
      immediateRender: !1,
      lazy: !1,
      useFrames: e,
      overwrite: 0
    });
  }, G.set = function (a, b) {
    return new G(a, 0, b);
  }, G.getTweensOf = function (a, b) {
    if (null == a) return [];
    a = "string" != typeof a ? a : G.selector(a) || a;
    var c, d, e, f;

    if ((p(a) || H(a)) && "number" != typeof a[0]) {
      for (c = a.length, d = []; --c > -1;) {
        d = d.concat(G.getTweensOf(a[c], b));
      }

      for (c = d.length; --c > -1;) {
        for (f = d[c], e = c; --e > -1;) {
          f === d[e] && d.splice(c, 1);
        }
      }
    } else if (a._gsTweenID) for (d = $(a).concat(), c = d.length; --c > -1;) {
      (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
    }

    return d || [];
  }, G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
    "object" == _typeof(b) && (c = b, b = !1);

    for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) {
      d[e]._kill(c, a);
    }
  };
  var ca = t("plugins.TweenPlugin", function (a, b) {
    this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ca.prototype;
  }, !0);

  if (h = ca.prototype, ca.version = "1.19.0", ca.API = 2, h._firstPT = null, h._addTween = P, h.setRatio = N, h._kill = function (a) {
    var b,
        c = this._overwriteProps,
        d = this._firstPT;
    if (null != a[this._propName]) this._overwriteProps = [];else for (b = c.length; --b > -1;) {
      null != a[c[b]] && c.splice(b, 1);
    }

    for (; d;) {
      null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
    }

    return !1;
  }, h._mod = h._roundProps = function (a) {
    for (var b, c = this._firstPT; c;) {
      b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next;
    }
  }, G._onPluginEvent = function (a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = b._firstPT;

    if ("_onInitAllProps" === a) {
      for (; h;) {
        for (g = h._next, d = e; d && d.pr > h.pr;) {
          d = d._next;
        }

        (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g;
      }

      h = b._firstPT = e;
    }

    for (; h;) {
      h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
    }

    return c;
  }, ca.activate = function (a) {
    for (var b = a.length; --b > -1;) {
      a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
    }

    return !0;
  }, s.plugin = function (a) {
    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
    var b,
        c = a.propName,
        d = a.priority || 0,
        e = a.overwriteProps,
        f = {
      init: "_onInitTween",
      set: "setRatio",
      kill: "_kill",
      round: "_mod",
      mod: "_mod",
      initAll: "_onInitAllProps"
    },
        g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
      ca.call(this, c, d), this._overwriteProps = e || [];
    }, a.global === !0),
        h = g.prototype = new ca(c);
    h.constructor = g, g.API = a.API;

    for (b in f) {
      "function" == typeof a[b] && (h[f[b]] = a[b]);
    }

    return g.version = a.version, ca.activate([g]), g;
  }, f = a._gsQueue) {
    for (g = 0; g < f.length; g++) {
      f[g]();
    }

    for (h in q) {
      q[h].func || a.console.log("GSAP encountered missing dependency: " + h);
    }
  }

  j = !1;
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
},{}],"js/gsap/minified/TimelineLite.min.js":[function(require,module,exports) {
var global = arguments[3];
var define;
/*!
 * VERSION: 2.0.0
 * DATE: 2018-05-23
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (a, b, c) {
    var d = function d(a) {
      b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
      var c,
          d,
          e = this.vars;

      for (d in e) {
        c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
      }

      i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
    },
        e = 1e-10,
        f = c._internals,
        g = d._internals = {},
        h = f.isSelector,
        i = f.isArray,
        j = f.lazyTweens,
        k = f.lazyRender,
        l = _gsScope._gsDefine.globals,
        m = function m(a) {
      var b,
          c = {};

      for (b in a) {
        c[b] = a[b];
      }

      return c;
    },
        n = function n(a, b, c) {
      var d,
          e,
          f = a.cycle;

      for (d in f) {
        e = f[d], a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length];
      }

      delete a.cycle;
    },
        o = g.pauseCallback = function () {},
        p = function p(a) {
      var b,
          c = [],
          d = a.length;

      for (b = 0; b !== d; c.push(a[b++])) {
        ;
      }

      return c;
    },
        q = d.prototype = new b();

    return d.version = "2.0.0", q.constructor = d, q.kill()._gc = q._forcingPlayhead = q._hasPause = !1, q.to = function (a, b, d, e) {
      var f = d.repeat && l.TweenMax || c;
      return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
    }, q.from = function (a, b, d, e) {
      return this.add((d.repeat && l.TweenMax || c).from(a, b, d), e);
    }, q.fromTo = function (a, b, d, e, f) {
      var g = e.repeat && l.TweenMax || c;
      return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
    }, q.staggerTo = function (a, b, e, f, g, i, j, k) {
      var l,
          o,
          q = new d({
        onComplete: i,
        onCompleteParams: j,
        callbackScope: k,
        smoothChildTiming: this.smoothChildTiming
      }),
          r = e.cycle;

      for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), o = 0; o < a.length; o++) {
        l = m(e), l.startAt && (l.startAt = m(l.startAt), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && (b = l.duration, delete l.duration)), q.to(a[o], b, l, o * f);
      }

      return this.add(q, g);
    }, q.staggerFrom = function (a, b, c, d, e, f, g, h) {
      return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h);
    }, q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i);
    }, q.call = function (a, b, d, e) {
      return this.add(c.delayedCall(0, a, b, d), e);
    }, q.set = function (a, b, d) {
      return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d);
    }, d.exportRoot = function (a, b) {
      a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
      var e,
          f,
          g,
          h,
          i = new d(a),
          j = i._timeline;

      for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g;) {
        h = g._next, b && g instanceof c && g.target === g.vars.onComplete || (f = g._startTime - g._delay, 0 > f && (e = 1), i.add(g, f)), g = h;
      }

      return j.add(i, 0), e && i.totalDuration(), i;
    }, q.add = function (e, f, g, h) {
      var j, k, l, m, n, o;

      if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
        if (e instanceof Array || e && e.push && i(e)) {
          for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) {
            i(m = e[l]) && (m = new d({
              tweens: m
            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
          }

          return this._uncache(!0);
        }

        if ("string" == typeof e) return this.addLabel(e, f);
        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
        e = c.delayedCall(0, e);
      }

      if (b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (n = this, o = n.rawTime() > e._startTime; n._timeline;) {
        o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
      }
      return this;
    }, q.remove = function (b) {
      if (b instanceof a) {
        this._remove(b, !1);

        var c = b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline;
        return b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale, this;
      }

      if (b instanceof Array || b && b.push && i(b)) {
        for (var d = b.length; --d > -1;) {
          this.remove(b[d]);
        }

        return this;
      }

      return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
    }, q._remove = function (a, c) {
      b.prototype._remove.call(this, a, c);

      var d = this._last;
      return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, q.append = function (a, b) {
      return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
    }, q.insert = q.insertMultiple = function (a, b, c, d) {
      return this.add(a, b || 0, c, d);
    }, q.appendMultiple = function (a, b, c, d) {
      return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
    }, q.addLabel = function (a, b) {
      return this._labels[a] = this._parseTimeOrLabel(b), this;
    }, q.addPause = function (a, b, d, e) {
      var f = c.delayedCall(0, o, d, e || this);
      return f.vars.onComplete = f.vars.onReverseComplete = b, f.data = "isPause", this._hasPause = !0, this.add(f, a);
    }, q.removeLabel = function (a) {
      return delete this._labels[a], this;
    }, q.getLabelTime = function (a) {
      return null != this._labels[a] ? this._labels[a] : -1;
    }, q._parseTimeOrLabel = function (b, c, d, e) {
      var f, g;
      if (e instanceof a && e.timeline === this) this.remove(e);else if (e && (e instanceof Array || e.push && i(e))) for (g = e.length; --g > -1;) {
        e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
      }
      if (f = "number" != typeof b || c ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
      if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = f);else {
        if (g = b.indexOf("="), -1 === g) return null == this._labels[b] ? d ? this._labels[b] = f + c : c : this._labels[b] + c;
        c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1)), b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f;
      }
      return Number(b) + c;
    }, q.seek = function (a, b) {
      return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
    }, q.stop = function () {
      return this.paused(!0);
    }, q.gotoAndPlay = function (a, b) {
      return this.play(a, b);
    }, q.gotoAndStop = function (a, b) {
      return this.pause(a, b);
    }, q.render = function (a, b, c) {
      this._gc && this._enabled(!0, !1);
      var d,
          f,
          g,
          h,
          i,
          l,
          m,
          n = this._time,
          o = this._dirty ? this.totalDuration() : this._totalDuration,
          p = this._startTime,
          q = this._timeScale,
          r = this._paused;
      if (n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0) this._totalTime = this._time = o, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", i = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= a && a >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = o + 1e-4;else if (1e-7 > a) {
        if (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (i = f = !0, h = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a;else {
          if (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, 0 === a && f) for (d = this._first; d && 0 === d._startTime;) {
            d._duration || (f = !1), d = d._next;
          }
          a = 0, this._initted || (i = !0);
        }
      } else {
        if (this._hasPause && !this._forcingPlayhead && !b) {
          if (a >= n) for (d = this._first; d && d._startTime <= a && !l;) {
            d._duration || "isPause" !== d.data || d.ratio || 0 === d._startTime && 0 === this._rawPrevTime || (l = d), d = d._next;
          } else for (d = this._last; d && d._startTime >= a && !l;) {
            d._duration || "isPause" === d.data && d._rawPrevTime > 0 && (l = d), d = d._prev;
          }
          l && (this._time = a = l._startTime, this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay));
        }

        this._totalTime = this._time = this._rawPrevTime = a;
      }

      if (this._time !== n && this._first || c || i || l) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && (0 === this._time && this._duration || b || this._callback("onStart")), m = this._time, m >= n) for (d = this._first; d && (g = d._next, m === this._time && (!this._paused || r));) {
          (d._active || d._startTime <= m && !d._paused && !d._gc) && (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
        } else for (d = this._last; d && (g = d._prev, m === this._time && (!this._paused || r));) {
          if (d._active || d._startTime <= n && !d._paused && !d._gc) {
            if (l === d) {
              for (l = d._prev; l && l.endTime() > this._time;) {
                l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), l = l._prev;
              }

              l = null, this.pause();
            }

            d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
          }

          d = g;
        }
        this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))), h && (this._gc || (p === this._startTime || q !== this._timeScale) && (0 === this._time || o >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this._callback(h)));
      }
    }, q._hasPausedChild = function () {
      for (var a = this._first; a;) {
        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
        a = a._next;
      }

      return !1;
    }, q.getChildren = function (a, b, d, e) {
      e = e || -9999999999;

      for (var f = [], g = this._first, h = 0; g;) {
        g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
      }

      return f;
    }, q.getTweensOf = function (a, b) {
      var d,
          e,
          f = this._gc,
          g = [],
          h = 0;

      for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;) {
        (d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
      }

      return f && this._enabled(!1, !0), g;
    }, q.recent = function () {
      return this._recent;
    }, q._contains = function (a) {
      for (var b = a.timeline; b;) {
        if (b === this) return !0;
        b = b.timeline;
      }

      return !1;
    }, q.shiftChildren = function (a, b, c) {
      c = c || 0;

      for (var d, e = this._first, f = this._labels; e;) {
        e._startTime >= c && (e._startTime += a), e = e._next;
      }

      if (b) for (d in f) {
        f[d] >= c && (f[d] += a);
      }
      return this._uncache(!0);
    }, q._kill = function (a, b) {
      if (!a && !b) return this._enabled(!1, !1);

      for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) {
        c[d]._kill(a, b) && (e = !0);
      }

      return e;
    }, q.clear = function (a) {
      var b = this.getChildren(!1, !0, !0),
          c = b.length;

      for (this._time = this._totalTime = 0; --c > -1;) {
        b[c]._enabled(!1, !1);
      }

      return a !== !1 && (this._labels = {}), this._uncache(!0);
    }, q.invalidate = function () {
      for (var b = this._first; b;) {
        b.invalidate(), b = b._next;
      }

      return a.prototype.invalidate.call(this);
    }, q._enabled = function (a, c) {
      if (a === this._gc) for (var d = this._first; d;) {
        d._enabled(a, !0), d = d._next;
      }
      return b.prototype._enabled.call(this, a, c);
    }, q.totalTime = function (b, c, d) {
      this._forcingPlayhead = !0;
      var e = a.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, q.duration = function (a) {
      return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
    }, q.totalDuration = function (a) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var b, c, d = 0, e = this._last, f = 999999999999; e;) {
            b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(e, e._startTime - e._delay), this._calculatingDuration = 0) : f = e._startTime, e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale, this._time -= e._startTime, this._totalTime -= e._startTime, this._rawPrevTime -= e._startTime), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
          }

          this._duration = this._totalDuration = d, this._dirty = !1;
        }

        return this._totalDuration;
      }

      return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
    }, q.paused = function (b) {
      if (!b) for (var c = this._first, d = this._time; c;) {
        c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), c = c._next;
      }
      return a.prototype.paused.apply(this, arguments);
    }, q.usesFrames = function () {
      for (var b = this._timeline; b._timeline;) {
        b = b._timeline;
      }

      return b === a._rootFramesTimeline;
    }, q.rawTime = function (a) {
      return a && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
    }, d;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
  "use strict";

  var b = function b() {
    return (_gsScope.GreenSockGlobals || _gsScope)[a];
  };

  "undefined" != typeof module && module.exports ? (require("./TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b);
}("TimelineLite");
},{"./TweenLite.min.js":"js/gsap/minified/TweenLite.min.js"}],"js/gsap/minified/plugins/CSSPlugin.min.js":[function(require,module,exports) {
var global = arguments[3];
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 1.20.5
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
    var c,
        d,
        e,
        f,
        g = function g() {
      a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio;
    },
        h = _gsScope._gsDefine.globals,
        i = {},
        j = g.prototype = new a("css");

    j.constructor = g, g.version = "1.20.5", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
      top: j,
      right: j,
      bottom: j,
      left: j,
      width: j,
      height: j,
      fontSize: j,
      padding: j,
      margin: j,
      perspective: j,
      lineHeight: ""
    };

    var k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        w = /(?:\d|\-|\+|=|#|\.)*/g,
        x = /opacity *= *([^)]*)/i,
        y = /opacity:([^;]*)/i,
        z = /alpha\(opacity *=.+?\)/i,
        A = /^(rgb|hsl)/,
        B = /([A-Z])/g,
        C = /-([a-z])/gi,
        D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        E = function E(a, b) {
      return b.toUpperCase();
    },
        F = /(?:Left|Right|Width)/i,
        G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        I = /,(?=[^\)]*(?:\(|$))/gi,
        J = /[\s,\(]/i,
        K = Math.PI / 180,
        L = 180 / Math.PI,
        M = {},
        N = {
      style: {}
    },
        O = _gsScope.document || {
      createElement: function createElement() {
        return N;
      }
    },
        P = function P(a, b) {
      return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a);
    },
        Q = P("div"),
        R = P("img"),
        S = g._internals = {
      _specialProps: i
    },
        T = (_gsScope.navigator || {}).userAgent || "",
        U = function () {
      var a = T.indexOf("Android"),
          b = P("a");
      return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1;
    }(),
        V = function V(a) {
      return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        W = function W(a) {
      _gsScope.console && console.log(a);
    },
        X = "",
        Y = "",
        Z = function Z(a, b) {
      b = b || Q;
      var c,
          d,
          e = b.style;
      if (void 0 !== e[a]) return a;

      for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];) {
        ;
      }

      return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null;
    },
        $ = ("undefined" != typeof window ? window : O.defaultView || {
      getComputedStyle: function getComputedStyle() {}
    }).getComputedStyle,
        _ = g.getStyle = function (a, b, c, d, e) {
      var f;
      return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a);
    },
        aa = S.convertToPixels = function (a, c, d, e, f) {
      if ("px" === e || !e && "lineHeight" !== c) return d;
      if ("auto" === e || !d) return 0;
      var h,
          i,
          j,
          k = F.test(c),
          l = a,
          m = Q.style,
          n = 0 > d,
          o = 1 === d;
      if (n && (d = -d), o && (d *= 100), "lineHeight" !== c || e) {
        if ("%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);else {
          if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;else {
            if (l = a.parentNode || O.body, -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
            m[k ? "width" : "height"] = d + e;
          }
          l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0));
        }
      } else i = $(a).lineHeight, a.style.lineHeight = d, h = parseFloat($(a).lineHeight), a.style.lineHeight = i;
      return o && (h /= 100), n ? -h : h;
    },
        ba = S.calculateOffset = function (a, b, c) {
      if ("absolute" !== _(a, "position", c)) return 0;

      var d = "left" === b ? "Left" : "Top",
          e = _(a, "margin" + d, c);

      return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0);
    },
        ca = function ca(a, b) {
      var c,
          d,
          e,
          f = {};
      if (b = b || $(a, null)) {
        if (c = b.length) for (; --c > -1;) {
          e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
        } else for (c in b) {
          (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
        }
      } else if (b = a.currentStyle || a.style) for (c in b) {
        "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
      }
      return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f;
    },
        da = function da(a, b, c, d, e) {
      var f,
          g,
          h,
          i = {},
          j = a.style;

      for (g in c) {
        "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
      }

      if (d) for (g in d) {
        "className" !== g && (i[g] = d[g]);
      }
      return {
        difs: i,
        firstMPT: h
      };
    },
        ea = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ga = function ga(a, b, c) {
      if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
      if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
      var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
          e = ea[b],
          f = e.length;

      for (c = c || $(a, null); --f > -1;) {
        d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
      }

      return d;
    },
        ha = function ha(a, b) {
      if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
      (null == a || "" === a) && (a = "0 0");
      var c,
          d = a.split(" "),
          e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
          f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];

      if (d.length > 3 && !b) {
        for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) {
          a.push(ha(d[c]));
        }

        return a.join(",");
      }

      return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a;
    },
        ia = function ia(a, b) {
      return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
    },
        ja = function ja(a, b) {
      return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
    },
        ka = function ka(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = 1e-6;
      return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h;
    },
        la = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        ma = function ma(a, b, c) {
      return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0;
    },
        na = g.parseColor = function (a, b) {
      var c, d, e, f, g, h, i, j, k, l, m;
      if (a) {
        if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];else {
          if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];else if ("hsl" === a.substr(0, 3)) {
            if (c = m = a.match(s), b) {
              if (-1 !== a.indexOf("=")) return a.match(t);
            } else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(c[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
          } else c = a.match(s) || la.transparent;
          c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]));
        }
      } else c = la.black;
      return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c;
    },
        oa = function oa(a, b) {
      var c,
          d,
          e,
          f = a.match(pa) || [],
          g = 0,
          h = "";
      if (!f.length) return a;

      for (c = 0; c < f.length; c++) {
        d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
      }

      return h + a.substr(g);
    },
        pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

    for (j in la) {
      pa += "|" + j + "\\b";
    }

    pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function (a) {
      var b,
          c = a[0] + " " + a[1];
      pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0;
    }, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);

    var qa = function qa(a, b, c, d) {
      if (null == a) return function (a) {
        return a;
      };
      var e,
          f = b ? (a.match(pa) || [""])[0] : "",
          g = a.split(f).join("").match(u) || [],
          h = a.substr(0, a.indexOf(g[0])),
          i = ")" === a.charAt(a.length - 1) ? ")" : "",
          j = -1 !== a.indexOf(" ") ? " " : ",",
          k = g.length,
          l = k > 0 ? g[0].replace(s, "") : "";
      return k ? e = b ? function (a) {
        var b, m, n, o;
        if ("number" == typeof a) a += l;else if (d && I.test(a)) {
          for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) {
            o[n] = e(o[n]);
          }

          return o.join(",");
        }
        if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--) for (; ++n < k;) {
          m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
        }
        return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
      } : function (a) {
        var b, f, m;
        if ("number" == typeof a) a += l;else if (d && I.test(a)) {
          for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) {
            f[m] = e(f[m]);
          }

          return f.join(",");
        }
        if (b = a.match(u) || [], m = b.length, k > m--) for (; ++m < k;) {
          b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
        }
        return h + b.join(j) + i;
      } : function (a) {
        return a;
      };
    },
        ra = function ra(a) {
      return a = a.split(","), function (b, c, d, e, f, g, h) {
        var i,
            j = (c + "").split(" ");

        for (h = {}, i = 0; 4 > i; i++) {
          h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
        }

        return e.parse(b, h, f, g);
      };
    },
        sa = (S._setPluginRatio = function (a) {
      this.plugin.setRatio(a);

      for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) {
        b = h[i.v], i.r ? b = i.r(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
      }

      if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod.call(this._tween, h.rotation, this.t, this._tween) : h.rotation), 1 === a || 0 === a) for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
        if (c = i.t, c.type) {
          if (1 === c.type) {
            for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) {
              e += c["xn" + d] + c["xs" + (d + 1)];
            }

            c[f] = e;
          }
        } else c[f] = c.s + c.xs0;

        i = i._next;
      }
    }, function (a, b, c, d, e) {
      this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d);
    }),
        ta = (S._parseToProxy = function (a, b, c, d, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l = d,
          m = {},
          n = {},
          o = c._transform,
          p = M;

      for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
        if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type)) for (g = d.l; --g > 0;) {
          i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
        }
        d = d._next;
      }

      return {
        proxy: m,
        end: n,
        firstMPT: j,
        pt: k
      };
    }, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
      this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j ? "function" == typeof j ? j : Math.round : j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this);
    }),
        ua = function ua(a, b, c, d, e, f) {
      var g = new ta(a, b, c, d - c, e, -1, f);
      return g.b = c, g.e = g.xs0 = d, g;
    },
        va = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
      c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
      var m,
          n,
          o,
          p,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D = c.split(", ").join(",").split(" "),
          E = d.split(", ").join(",").split(" "),
          F = D.length,
          G = k !== !1;

      for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl") ? (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" ")) : (D = D.join(" ").split(",").join(", ").split(" "), E = E.join(" ").split(",").join(", ").split(" ")), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++) {
        if (p = D[m], u = E[m] + "", x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px") ? Math.round : !1, !0);else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, z = u, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", Math.round, !0).appendXtra("", p[1], u[1] - p[1], ",", Math.round).appendXtra("", p[2], u[2] - p[2], y ? "," : B, Math.round), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;else if (v = p.match(s)) {
          if (w = u.match(t), !w || w.length !== v.length) return h;

          for (o = 0, n = 0; n < v.length; n++) {
            A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2) ? Math.round : !1, 0 === n), o = z + A.length;
          }

          h["xs" + h.l] += p.substr(o);
        } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
      }

      if (-1 !== d.indexOf("=") && h.data) {
        for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) {
          B += h["xs" + m] + h.data["xn" + m];
        }

        h.e = B + h["xs" + m];
      }

      return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h;
    },
        wa = 9;

    for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) {
      j["xn" + wa] = 0, j["xs" + wa] = "";
    }

    j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
      var g = this,
          h = g.l;
      return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
        s: b + c
      }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g);
    };

    var xa = function xa(a, b) {
      b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0;
    },
        ya = S._registerComplexSpecialProp = function (a, b, c) {
      "object" != _typeof(b) && (b = {
        parser: c
      });
      var d,
          e,
          f = a.split(","),
          g = b.defaultValue;

      for (c = c || [g], d = 0; d < f.length; d++) {
        b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b);
      }
    },
        za = S._registerPluginProp = function (a) {
      if (!i[a]) {
        var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
        ya(a, {
          parser: function parser(a, c, d, e, f, g, j) {
            var k = h.com.greensock.plugins[b];
            return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f);
          }
        });
      }
    };

    j = xa.prototype, j.parseComplex = function (a, b, c, d, e, f) {
      var g,
          h,
          i,
          j,
          k,
          l,
          m = this.keyword;

      if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) {
          b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
        }

        b = h.join(", "), c = i.join(", ");
      }

      return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
    }, j.parse = function (a, b, c, d, f, g, h) {
      return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
    }, g.registerSpecialProp = function (a, b, c) {
      ya(a, {
        parser: function parser(a, d, e, f, g, h, i) {
          var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
          return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j;
        },
        priority: c
      });
    }, g.useSVGTransformAttr = !0;

    var Aa,
        Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        Ca = Z("transform"),
        Da = X + "transform",
        Ea = Z("transformOrigin"),
        Fa = null !== Z("perspective"),
        Ga = S.Transform = function () {
      this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1;
    },
        Ha = _gsScope.SVGElement,
        Ia = function Ia(a, b, c) {
      var d,
          e = O.createElementNS("http://www.w3.org/2000/svg", a),
          f = /([a-z])([A-Z])/g;

      for (d in c) {
        e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
      }

      return b.appendChild(e), e;
    },
        Ja = O.documentElement || {},
        Ka = function () {
      var a,
          b,
          c,
          d = p || /Android/i.test(T) && !_gsScope.chrome;
      return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
        width: 100,
        height: 50,
        x: 100
      }), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d;
    }(),
        La = function La(a, b, c, d, e, f) {
      var h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v = a._gsTransform,
          w = Qa(a, !0);
      v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
        x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
        y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
        width: 0,
        height: 0
      }), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "));
    },
        Ma = function Ma(a) {
      var b,
          c = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          d = this.parentNode,
          e = this.nextSibling,
          f = this.style.cssText;
      if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
        b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma;
      } catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
      return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b;
    },
        Na = function Na(a) {
      try {
        return a.getBBox();
      } catch (b) {
        return Ma.call(a, !0);
      }
    },
        Oa = function Oa(a) {
      return !(!Ha || !a.getCTM || a.parentNode && !a.ownerSVGElement || !Na(a));
    },
        Pa = [1, 0, 0, 1, 0, 0],
        Qa = function Qa(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h,
          i = a._gsTransform || new Ga(),
          j = 1e5,
          k = a.style;
      if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, !Ca || !(h = !$(a) || "none" === $(a).display) && a.parentNode || (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (e = a.transform.baseVal.consolidate().matrix, d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")", c = 0)), c) return Pa;

      for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) {
        f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
      }

      return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
    },
        Ra = S.getTransform = function (a, c, d, e) {
      if (a._gsTransform && d && !e) return a._gsTransform;
      var f,
          h,
          i,
          j,
          k,
          l,
          m = d ? a._gsTransform || new Ga() : new Ga(),
          n = m.scaleX < 0,
          o = 2e-5,
          p = 1e5,
          q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
          r = parseFloat(g.defaultTransformPerspective) || 0;

      if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
        if (16 === f.length) {
          var s,
              t,
              u,
              v,
              w,
              x = f[0],
              y = f[1],
              z = f[2],
              A = f[3],
              B = f[4],
              C = f[5],
              D = f[6],
              E = f[7],
              F = f[8],
              G = f[9],
              H = f[10],
              I = f[12],
              J = f[13],
              K = f[14],
              M = f[11],
              N = Math.atan2(D, H);
          m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(N), w = Math.sin(N), s = x * v + y * w, t = B * v + C * w, u = F * v + G * w, y = y * v - x * w, C = C * v - B * w, G = G * v - F * w, x = s, B = t, F = u), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), N = Math.atan2(B, C), m.scaleX = (Math.sqrt(x * x + y * y + z * z) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + D * D) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(F * F + G * G + H * H) * p + .5 | 0) / p, x /= m.scaleX, B /= m.scaleY, y /= m.scaleX, C /= m.scaleY, Math.abs(N) > o ? (m.skewX = N * L, B = 0, "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : m.skewX = 0, m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C));
        } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
          var O = f.length >= 6,
              P = O ? f[0] : 1,
              Q = f[1] || 0,
              R = f[2] || 0,
              S = O ? f[3] : 1;
          m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S));
        }

        Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180)), m.zOrigin = q;

        for (h in m) {
          m[h] < o && m[h] > -o && (m[h] = 0);
        }
      }

      return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function () {
        Va(a.style, Ca);
      }) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function () {
        a.removeAttribute("transform");
      }))), m;
    },
        Sa = function Sa(a) {
      var b,
          c,
          d = this.data,
          e = -d.rotation * K,
          f = e + d.skewX * K,
          g = 1e5,
          h = (Math.cos(e) * d.scaleX * g | 0) / g,
          i = (Math.sin(e) * d.scaleX * g | 0) / g,
          j = (Math.sin(f) * -d.scaleY * g | 0) / g,
          k = (Math.cos(f) * d.scaleY * g | 0) / g,
          l = this.t.style,
          m = this.t.currentStyle;

      if (m) {
        c = i, i = -j, j = -c, b = m.filter, l.filter = "";
        var n,
            o,
            q = this.t.offsetWidth,
            r = this.t.offsetHeight,
            s = "absolute" !== m.position,
            t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
            u = d.x + q * d.xPercent / 100,
            v = d.y + r * d.yPercent / 100;

        if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
          var y,
              z,
              A,
              B = 8 > p ? 1 : -1;

          for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) {
            z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px";
          }
        }
      }
    },
        Ta = S.set3DTransformRatio = S.setTransformRatio = function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z = this.data,
          A = this.t.style,
          B = z.rotation,
          C = z.rotationX,
          D = z.rotationY,
          E = z.scaleX,
          F = z.scaleY,
          G = z.scaleZ,
          H = z.x,
          I = z.y,
          J = z.z,
          L = z.svg,
          M = z.perspective,
          N = z.force3D,
          O = z.skewY,
          P = z.skewX;
      if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void (B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
      if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;else {
        if (!(D || C || 1 !== G || M || L)) return void (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
        c = g = 1, d = f = 0;
      }
      k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u;
    };

    j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser: function parser(a, b, c, d, f, h, i) {
        if (d._lastParsedTransform === i) return f;
        d._lastParsedTransform = i;
        var j,
            k = i.scale && "function" == typeof i.scale ? i.scale : 0;
        "function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
        var l,
            m,
            n,
            o,
            p,
            s,
            t,
            u,
            v,
            w = a._gsTransform,
            x = a.style,
            y = 1e-6,
            z = Ba.length,
            A = i,
            B = {},
            C = "transformOrigin",
            D = Ra(a, e, !0, A.parseTransform),
            E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
        if (D.skewType = A.skewType || D.skewType || g.defaultSkewType, d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", -1 !== E.indexOf("%") && (m.width = _(a, "width"), m.height = _(a, "height")), O.body.appendChild(Q), l = Ra(Q, null, !1), "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));else if ("object" == _typeof(A)) {
          if (l = {
            scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
            scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
            scaleZ: ja(A.scaleZ, D.scaleZ),
            x: ja(A.x, D.x),
            y: ja(A.y, D.y),
            z: ja(A.z, D.z),
            xPercent: ja(A.xPercent, D.xPercent),
            yPercent: ja(A.yPercent, D.yPercent),
            perspective: ja(A.transformPerspective, D.perspective)
          }, p = A.directionalRotation, null != p) if ("object" == _typeof(p)) for (m in p) {
            A[m] = p[m];
          } else A.rotation = p;
          "string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY);
        }

        for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) {
          v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
        }

        return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f;
      },
      prefix: !0
    }), ya("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: !0,
      color: !0,
      multi: !0,
      keyword: "inset"
    }), ya("borderRadius", {
      defaultValue: "0px",
      parser: function parser(a, b, c, f, g, h) {
        b = this.format(b);
        var i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            z = a.style;

        for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) {
          this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
        }

        return g;
      },
      prefix: !0,
      formatter: qa("0px 0px 0px 0px", !1, !0)
    }), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
      defaultValue: "0px",
      parser: function parser(a, b, c, d, f, g) {
        return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
      },
      prefix: !0,
      formatter: qa("0px 0px", !1, !0)
    }), ya("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(a, b, c, d, f, g) {
        var h,
            i,
            j,
            k,
            l,
            m,
            n = "background-position",
            o = e || $(a, null),
            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
            r = this.format(b);

        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
          for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) {
            q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
          }

          q = h.join(" ");
        }

        return this.parseComplex(a.style, q, r, f, g);
      },
      formatter: ha
    }), ya("backgroundSize", {
      defaultValue: "0 0",
      formatter: function formatter(a) {
        return a += "", "co" === a.substr(0, 2) ? a : ha(-1 === a.indexOf(" ") ? a + " " + a : a);
      }
    }), ya("perspective", {
      defaultValue: "0px",
      prefix: !0
    }), ya("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: !0
    }), ya("transformStyle", {
      prefix: !0
    }), ya("backfaceVisibility", {
      prefix: !0
    }), ya("userSelect", {
      prefix: !0
    }), ya("margin", {
      parser: ra("marginTop,marginRight,marginBottom,marginLeft")
    }), ya("padding", {
      parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), ya("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(a, b, c, d, f, g) {
        var h, i, j;
        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g);
      }
    }), ya("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: !0,
      multi: !0
    }), ya("autoRound,strictUnits", {
      parser: function parser(a, b, c, d, e) {
        return e;
      }
    }), ya("border", {
      defaultValue: "0px solid #000",
      parser: function parser(a, b, c, d, f, g) {
        var h = _(a, "borderTopWidth", e, !1, "0px"),
            i = this.format(b).split(" "),
            j = i[0].replace(w, "");

        return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g);
      },
      color: !0,
      formatter: function formatter(a) {
        var b = a.split(" ");
        return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0];
      }
    }), ya("borderWidth", {
      parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), ya("float,cssFloat,styleFloat", {
      parser: function parser(a, b, c, d, e, f) {
        var g = a.style,
            h = "cssFloat" in g ? "cssFloat" : "styleFloat";
        return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
      }
    });

    var Ua = function Ua(a) {
      var b,
          c = this.t,
          d = c.filter || _(this.data, "filter") || "",
          e = this.s + this.c * a | 0;
      100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e));
    };

    ya("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(a, b, c, d, f, g) {
        var h = parseFloat(_(a, "opacity", e, !1, "1")),
            i = a.style,
            j = "autoAlpha" === c;
        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f;
      }
    });

    var Va = function Va(a, b) {
      b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b));
    },
        Wa = function Wa(a) {
      if (this.t._gsClassPT = this, 1 === a || 0 === a) {
        this.t.setAttribute("class", 0 === a ? this.b : this.e);

        for (var b = this.data, c = this.t.style; b;) {
          b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
        }

        1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };

    ya("className", {
      parser: function parser(a, b, d, f, g, h, i) {
        var j,
            k,
            l,
            m,
            n,
            o = a.getAttribute("class") || "",
            p = a.style.cssText;

        if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
          for (m = {}, n = l.data; n;) {
            m[n.p] = 1, n = n._next;
          }

          l.setRatio(1);
        }

        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h);
      }
    });

    var Xa = function Xa(a) {
      if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var b,
            c,
            d,
            e,
            f,
            g = this.t.style,
            h = i.transform.parse;
        if ("all" === this.e) g.cssText = "", e = !0;else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) {
          c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
        }
        e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
      }
    };

    for (ya("clearProps", {
      parser: function parser(a, b, d, e, f) {
        return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f;
      }
    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) {
      za(j[wa]);
    }

    j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
      if (!a.nodeType) return !1;
      this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
      var n,
          p,
          s,
          t,
          u,
          v,
          w,
          x,
          z,
          A = a.style;

      if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
        for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) {
          s = s._next;
        }

        x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop();
      }

      if (c) {
        for (; p;) {
          for (v = p._next, s = t; s && s.pr > p.pr;) {
            s = s._next;
          }

          (p._prev = s ? s._prev : u) ? p._prev._next = p : t = p, (p._next = s) ? s._prev = p : u = p, p = v;
        }

        this._firstPT = t;
      }

      return !0;
    }, j.parse = function (a, b, c, f) {
      var g,
          h,
          j,
          l,
          m,
          n,
          o,
          p,
          s,
          t,
          u = a.style;

      for (g in b) {
        if (n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g]) c = h.parse(a, n, g, this, c, f, b);else {
          if ("--" === g.substr(0, 2)) {
            this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
            continue;
          }

          m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && ("" !== p || "lineHeight" === g) && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p));
        }
        f && c && !c.plugin && (c.plugin = f);
      }

      return c;
    }, j.setRatio = function (a) {
      var b,
          c,
          d,
          e = this._firstPT,
          f = 1e-6;
      if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; e;) {
          if (b = e.c * a + e.s, e.r ? b = e.r(b) : f > b && b > -f && (b = 0), e.type) {
            if (1 === e.type) {
              if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;else {
                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                  c += e["xn" + d] + e["xs" + (d + 1)];
                }

                e.t[e.p] = c;
              }
            } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
          } else e.t[e.p] = b + e.xs0;
          e = e._next;
        } else for (; e;) {
          2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
        }
      } else for (; e;) {
        if (2 !== e.type) {
          if (e.r && -1 !== e.type) {
            if (b = e.r(e.s + e.c), e.type) {
              if (1 === e.type) {
                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) {
                  c += e["xn" + d] + e["xs" + (d + 1)];
                }

                e.t[e.p] = c;
              }
            } else e.t[e.p] = b + e.xs0;
          } else e.t[e.p] = e.e;
        } else e.setRatio(a);
        e = e._next;
      }
    }, j._enableTransforms = function (a) {
      this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3;
    };

    var Ya = function Ya(a) {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };

    j._addLazySet = function (a, b, c) {
      var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
      d.e = c, d.setRatio = Ya, d.data = this;
    }, j._linkCSSP = function (a, b, c, d) {
      return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a;
    }, j._mod = function (a) {
      for (var b = this._firstPT; b;) {
        "function" == typeof a[b.p] && (b.r = a[b.p]), b = b._next;
      }
    }, j._kill = function (b) {
      var c,
          d,
          e,
          f = b;

      if (b.autoAlpha || b.alpha) {
        f = {};

        for (d in b) {
          f[d] = b[d];
        }

        f.opacity = 1, f.autoAlpha && (f.visibility = 1);
      }

      for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) {
        c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
      }

      return a.prototype._kill.call(this, f);
    };

    var Za = function Za(a, b, c) {
      var d, e, f, g;
      if (a.slice) for (e = a.length; --e > -1;) {
        Za(a[e], b, c);
      } else for (d = a.childNodes, e = d.length; --e > -1;) {
        f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c);
      }
    };

    return g.cascadeTo = function (a, c, d) {
      var e,
          f,
          g,
          h,
          i = b.to(a, c, d),
          j = [i],
          k = [],
          l = [],
          m = [],
          n = b._internals.reservedProps;

      for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;) {
        if (f = da(m[e], k[e], l[e]), f.firstMPT) {
          f = f.difs;

          for (g in d) {
            n[g] && (f[g] = d[g]);
          }

          h = {};

          for (g in f) {
            h[g] = k[e][g];
          }

          j.push(b.fromTo(m[e], c, h, f));
        }
      }

      return j;
    }, a.activate([g]), g;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
  "use strict";

  var b = function b() {
    return (_gsScope.GreenSockGlobals || _gsScope)[a];
  };

  "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b);
}("CSSPlugin");
},{"../TweenLite.min.js":"js/gsap/minified/TweenLite.min.js"}],"js/gsap/minified/utils/GSDevTools.min.js":[function(require,module,exports) {
var global = arguments[3];
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 0.1.8
 * DATE: 2018-05-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * GSDevTools is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("GSDevTools", ["TweenLite", "core.Animation", "core.SimpleTimeline", "TimelineLite", "utils.Draggable", "plugins.CSSPlugin"], function (a, b, c, d, e) {
    var f,
        g,
        h,
        i,
        j,
        k = document,
        l = k.documentElement,
        m = "http://www.w3.org/2000/svg",
        n = "http://www.w3.org/1999/xhtml",
        o = 0,
        p = {},
        q = function q(a, b, c) {
      var d = k.createElementNS ? k.createElementNS("svg" === a ? m : n, a) : k.createElement(a);
      return b && ("string" == typeof b && (b = k.querySelector(b)), b.appendChild(d)), "svg" === a && (d.setAttribute("xmlns", m), d.setAttribute("xmlns:xlink", n)), c && (d.style.cssText = c), d;
    },
        r = function r() {
      k.selection ? k.selection.empty() : window.getSelection && window.getSelection().removeAllRanges();
    },
        s = b._rootTimeline,
        t = function t(b, c) {
      for (var d = [], e = 0, f = b._first; f;) {
        f instanceof a ? f.vars.id && (d[e++] = f) : (c && f.vars.id && (d[e++] = f), d = d.concat(t(f, c)), e = d.length), f = f._next;
      }

      return d;
    },
        u = function u(a, b) {
      var c = 0,
          d = Math.max(0, a._repeat),
          e = a._first;

      for (e || (c = a.duration()); e;) {
        c = Math.max(c, e.totalDuration() > 999 ? e.endTime(!1) : e._startTime + e._totalDuration / e._timeScale), e = e._next;
      }

      return !b && d ? c * (d + 1) + a._repeatDelay * d : c;
    },
        v = function v(a) {
      if (!a) return null;
      if (a instanceof b) return a;

      for (var c = t(s, !0), d = c.length; --d > -1;) {
        if (c[d].vars.id === a) return c[d];
      }
    },
        w = function w(a, b, c, d) {
      var e, f, g;
      return "string" == typeof a && ("=" === a.charAt(1) ? (e = parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)), 0 > e && 0 === d && (d = 100), a = d / 100 * b.duration() + e) : isNaN(a) && b.getLabelTime && -1 !== b.getLabelTime(a) ? a = b.getLabelTime(a) : b === D && (f = a.indexOf("="), f > 0 ? (e = parseInt(a.charAt(f - 1) + "1", 10) * parseFloat(a.substr(f + 1)), a = a.substr(0, f - 1)) : e = 0, g = v(a), g && (a = x(g, c / 100 * g.duration()) + e))), a = isNaN(a) ? c : parseFloat(a), Math.min(100, Math.max(0, a / b.duration() * 100));
    },
        x = function x(a, b) {
      var c = a;
      if (b = b || 0, c.timeline) for (; c.timeline.timeline;) {
        b = b / c._timeScale + c._startTime, c = c.timeline;
      }
      return b;
    },
        y = function y(b, c, d) {
      f || (q("style", l).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", f = !0), "string" == typeof b && (b = document.querySelector(b));
      var e = q("div", b || l.getElementsByTagName("body")[0] || l);
      return e.setAttribute("class", "gs-dev-tools" + (c ? " minimal" : "")), e.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg> <svg class=out-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span> <svg class=select-arrow viewBox="0 0 12.05 6.73"xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38"xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg> <svg class=play-pause viewBox="0 0 20.97 25.67"xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88"class="gs-btn-white play-1"style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85"class="gs-btn-white play-2"style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38"xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67"xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://greensock.com/docs/Utilities/GSDevTools?source=GSDevTools"target=_blank title=Docs><svg class=logo viewBox="0 0 100 100"xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z"style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z"style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z"style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', b && (e.style.position = "absolute", e.style.top = c ? "calc(100% - 42px)" : "calc(100% - 51px)"), d && ("string" == typeof d ? e.style.cssText = d : "object" == _typeof(d) && (d.data = "root", a.set(e, d).kill()), e.style.top && (e.style.bottom = "auto"), e.style.width && a.set(e, {
        xPercent: -50,
        left: "50%",
        right: "auto",
        data: "root"
      }).kill()), !c && e.offsetWidth < 600 && (e.setAttribute("class", "gs-dev-tools minimal"), b && (e.style.top = "calc(100% - 42px)")), e;
    },
        z = function z(a, b, c, d) {
      var e, f;
      return ("mousedown" === b || "mouseup" === b) && (a.style.cursor = "pointer"), "mousedown" === b && (f = void 0 !== a.onpointerdown ? "pointerdown" : void 0 !== a.ontouchstart ? "touchstart" : null) ? (e = function e(b) {
        "select" !== b.target.nodeName.toLowerCase() && b.type === f ? (b.stopPropagation(), g && (b.preventDefault(), c.call(a, b))) : b.type !== f && c.call(a, b), g = !0;
      }, a.addEventListener(f, e, d), void a.addEventListener(b, e, d)) : void a.addEventListener(b, c, d);
    },
        A = function A(a, b, c) {
      a.removeEventListener(b, c), b = "mousedown" !== b ? null : void 0 !== a.onpointerdown ? "pointerdown" : void 0 !== a.ontouchstart ? "touchstart" : null, b && a.removeEventListener(b, c);
    },
        B = function B(a, b, c, d) {
      var e,
          f = a.options,
          g = f.length;

      for (b += ""; --g > -1;) {
        if (f[g].innerHTML === b || f[g].value === b) return a.selectedIndex = g, c.innerHTML = f[g].innerHTML, f[g];
      }

      d && (e = q("option", a), e.setAttribute("value", b), e.innerHTML = c.innerHTML = "string" == typeof d ? d : b, a.selectedIndex = f.length - 1);
    },
        C = function C(a, b, c) {
      var d = a.options,
          e = Math.min(d.length - 1, Math.max(0, a.selectedIndex + b));
      return a.selectedIndex = e, c && (c.innerHTML = d[e].innerHTML), d[e].value;
    },
        D = new d({
      data: "root",
      id: "Global Timeline",
      autoRemoveChildren: !1,
      smoothChildTiming: !0
    }),
        E = new d({
      data: "root",
      id: "Global Temp",
      autoRemoveChildren: !1,
      smoothChildTiming: !0
    }),
        F = a.to(D, 1, {
      time: 1,
      ease: Linear.easeNone,
      data: "root",
      id: "_rootTween",
      paused: !0,
      immediateRender: !1
    }),
        G = function G() {
      var a,
          b,
          d = E._first;

      if (d) {
        if (h && h.animation() === D) {
          for (a = D._duration; d;) {
            b = d._next, "function" == typeof d.target && d.target === d.vars.onComplete && !d._duration || d.target && d.target._gsIgnore ? c.prototype.add.call(s, d, d._startTime - d._delay) : D.add(d, d._startTime - d._delay), d = b;
          }

          return a !== D.duration();
        }

        for (; d;) {
          b = d._next, d._gc || d._totalTime === d._totalDuration ? d.kill() : c.prototype.add.call(s, d, d._startTime - d._delay), d = b;
        }
      }
    },
        H = function H() {
      h && (h.update(), i = !1), a.ticker.removeEventListener("tick", H);
    },
        I = function I(a) {
      var b = new d({
        data: "root",
        onComplete: function onComplete() {
          b.kill();
        }
      });
      return b.to(a.querySelector(".play-1"), .5, {
        attr: {
          d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
        },
        ease: Power3.easeInOut,
        rotation: 360,
        transformOrigin: "50% 50%"
      }).to(a.querySelector(".play-2"), .5, {
        attr: {
          d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
        },
        ease: Power3.easeInOut,
        rotation: 360,
        transformOrigin: "50% 50%"
      }, .05), b;
    },
        J = function J(a) {
      var b = new d({
        data: "root",
        paused: !0,
        onComplete: function onComplete() {
          b.kill();
        }
      });
      return b.to(a, .5, {
        rotation: 360,
        ease: Power3.easeInOut,
        transformOrigin: "50% 50%"
      }).to(a.querySelectorAll(".loop-path"), .5, {
        fill: "#91e600",
        ease: Linear.easeNone
      }, 0), b;
    },
        K = function K(c) {
      this.vars = c = c || {}, c.id = c.id || ("string" == typeof c.animation ? c.animation : o++), p[c.id + ""] = this, c.animation && !L && c.globalSync !== !0 && (c.globalSync = !1);

      var d,
          f,
          g,
          i,
          k,
          m,
          n,
          s,
          x,
          E,
          H,
          K,
          N,
          P = this,
          Q = y(c.container, c.minimal, c.css),
          R = function R(a) {
        return Q.querySelector(a);
      },
          S = function S(a, b) {
        return c.persist !== !1 && "undefined" != typeof sessionStorage && sessionStorage.setItem("gs-dev-" + a + c.id, b), b;
      },
          T = function T(a) {
        var b;
        return c.persist !== !1 && "undefined" != typeof sessionStorage ? (b = sessionStorage.getItem("gs-dev-" + a + c.id), "animation" === a ? b : "loop" === a ? "true" === b : parseFloat(b)) : void 0;
      },
          U = R(".playhead"),
          V = R(".timeline-track"),
          W = R(".progress-bar"),
          X = R(".time"),
          Y = R(".duration"),
          Z = 0,
          $ = function $(a, b, c) {
        return function (e) {
          var h,
              j = V.getBoundingClientRect(),
              l = a.getBoundingClientRect(),
              m = l.width * b,
              n = a._gsTransform.x,
              o = j.left - l.left - m + n,
              p = j.right - l.right + (l.width - m) + n,
              q = o;
          c && (a !== aa && (h = aa.getBoundingClientRect(), h.left && (o += h.left + h.width - j.left)), a !== ba && (h = ba.getBoundingClientRect(), h.left && (p -= j.left + j.width - h.left))), k = la, this.applyBounds({
            minX: o,
            maxX: p
          }), d = s.duration() / j.width, f = -q * d, i ? s.pause() : s.pause(f + d * this.x), this.target === U && (this.activated && (this.allowEventDefault = !1), this.activated = !0), g = !0;
        };
      },
          _ = e.create(U, {
        type: "x",
        cursor: "ew-resize",
        allowNativeTouchScrolling: !1,
        allowEventDefault: !0,
        onPress: $(U, .5, !0),
        onDrag: function onDrag() {
          var a = f + d * this.x;
          0 > a ? a = 0 : a > s._duration && (a = s._duration), i || s.time(a), W.style.width = Math.min(ea - da, Math.max(0, a / s._duration * 100 - da)) + "%", X.innerHTML = a.toFixed(2);
        },
        onRelease: function onRelease(a) {
          la || s.resume();
        }
      })[0],
          aa = R(".in-point"),
          ba = R(".out-point"),
          ca = function ca() {
        da = 0, ea = 100, aa.style.left = "0%", ba.style.left = "100%", S("in", da), S("out", ea), ha(!0);
      },
          da = 0,
          ea = 100,
          fa = e.create(aa, {
        type: "x",
        cursor: "ew-resize",
        zIndexBoost: !1,
        allowNativeTouchScrolling: !1,
        allowEventDefault: !0,
        onPress: $(aa, 1, !0),
        onDoubleClick: ca,
        onDrag: function onDrag() {
          da = (f + d * this.x) / s.duration() * 100, s.progress(da / 100), ha(!0);
        },
        onRelease: function onRelease() {
          0 > da && (da = 0), r(), aa.style.left = da + "%", S("in", da), a.set(aa, {
            x: 0,
            data: "root",
            display: "block"
          }), la || s.resume();
        }
      })[0],
          ga = e.create(ba, {
        type: "x",
        cursor: "ew-resize",
        allowNativeTouchScrolling: !1,
        allowEventDefault: !0,
        zIndexBoost: !1,
        onPress: $(ba, 0, !0),
        onDoubleClick: ca,
        onDrag: function onDrag() {
          ea = (f + d * this.x) / s.duration() * 100, s.progress(ea / 100), ha(!0);
        },
        onRelease: function onRelease() {
          ea > 100 && (ea = 100), r(), ba.style.left = ea + "%", S("out", ea), a.set(ba, {
            x: 0,
            data: "root",
            display: "block"
          }), k || (ma(), s.resume());
        }
      })[0],
          ha = function ha(a) {
        if (!_.isPressed || a) {
          var b = m || -1 !== n._repeat ? 100 * s.progress() || 0 : n.totalTime() / n.duration() * 100,
              c = n._repeat && n._repeatDelay && n.totalTime() % (n.duration() + n._repeatDelay) > n.duration();
          b > 100 && (b = 100), b >= ea ? !m || s.paused() || _.isDragging ? ((b !== ea || -1 === n._repeat) && (b = ea, s.progress(b / 100)), la || 1 !== n.totalProgress() && -1 !== n._repeat || na()) : c || (b = da, s.target === n && s.target.seek(E + (H - E) * da / 100), n._repeat > 0 && !da && 100 === ea ? 1 === n.totalProgress() && s.totalProgress(0, !0).resume() : s.progress(b / 100, !0).resume()) : da > b && (b = da, s.progress(b / 100, !0)), b !== Z || a ? (W.style.left = da + "%", W.style.width = Math.max(0, b - da) + "%", U.style.left = b + "%", X.innerHTML = s._time.toFixed(2), Y.innerHTML = s._duration.toFixed(2), g && (U.style.transform = "translate(-50%,0)", U._gsTransform.x = 0, U._gsTransform.xPercent = -50, g = !1), Z = b) : s._paused !== la && oa();
        }
      },
          ia = function ia(a) {
        if (!_.isPressed) {
          var b = a.target.getBoundingClientRect(),
              c = (a.changedTouches ? a.changedTouches[0] : a).clientX,
              d = (c - b.left) / b.width * 100;
          if (da > d) return da = d = Math.max(0, d), aa.style.left = da + "%", void fa.startDrag(a);
          if (d > ea) return ea = d = Math.min(100, d), ba.style.left = ea + "%", void ga.startDrag(a);
          s.progress(d / 100).pause(), ha(!0), _.startDrag(a);
        }
      },
          ja = R(".play-pause"),
          ka = I(ja),
          la = !1,
          ma = function ma() {
        s.progress() >= ea / 100 && (s.target === n && s.target.seek(E + (H - E) * da / 100), s._repeat && !da ? s.totalProgress(0, !0) : s.progress(da / 100, !0)), ka.play(), s.resume(), la && P.update(), la = !1;
      },
          na = function na() {
        ka.reverse(), s && s.pause(), la = !0;
      },
          oa = function oa() {
        la ? ma() : na();
      },
          pa = function pa(a) {
        _.isPressed || (s.target === n && s.target.seek(E + (H - E) * da / 100), s.progress(da / 100, !0), la || s.resume());
      },
          qa = R(".loop"),
          ra = J(qa),
          sa = function sa(a) {
        m = a, S("loop", m), m ? (ra.play(), s.progress() >= ea / 100 && (s.target === n && s.target.seek(E + (H - E) * da / 100), n._repeat && !da && 100 === ea ? s.totalProgress(0, !0) : s.progress(da / 100, !0), ma())) : ra.reverse();
      },
          ta = function ta() {
        sa(!m);
      },
          ua = R(".animation-list"),
          va = R(".animation-label"),
          wa = function wa() {
        var a,
            b,
            d = t(x && c.globalSync === !1 ? x : D, !0),
            e = ua.children,
            f = 0;

        for (x && c.globalSync === !1 ? d.unshift(x) : c.hideGlobalTimeline || d.unshift(D), b = 0; b < d.length; b++) {
          a = e[b] || q("option", ua), a.animation = d[b], f = b && d[b].vars.id === d[b - 1].vars.id ? f + 1 : 0, a.setAttribute("value", a.innerHTML = d[b].vars.id + (f ? " [" + f + "]" : d[b + 1] && d[b + 1].vars.id === d[b].vars.id ? " [0]" : ""));
        }

        for (; b < e.length; b++) {
          ua.removeChild(e[b]);
        }
      },
          xa = function xa(d) {
        var e,
            f,
            g = parseFloat(Aa.options[Aa.selectedIndex].value) || 1;
        if (!arguments.length) return n;

        if ("string" == typeof d && (d = v(d)), d instanceof b || console.log("GSDevTools error: invalid animation."), d !== n) {
          if (n && (n._inProgress = da, n._outProgress = ea), n = d, s && (g = s.timeScale(), s.target === x && (x.resume(), s.kill())), da = n._inProgress || 0, ea = n._outProgress || 100, aa.style.left = da + "%", ba.style.left = ea + "%", K && (S("animation", n.vars.id), S("in", da), S("out", ea)), E = 0, f = Math.min(1e3, c.maxDuration || 1e3, u(n)), n === D || c.globalSync !== !1) {
            if (G(), s = F, h && h !== P && console.log("Error: GSDevTools can only have one instance that's globally synchronized."), h = P, n !== D) for (e = n, H = e.totalDuration(), H > 99999999 && (H = e.duration()); e.timeline.timeline;) {
              E = E / e._timeScale + e._startTime, H = H / e._timeScale + e._startTime, e = e.timeline;
            } else H = D.duration();
            H - E > f && (H = E + f), D.pause(E), F.vars.time = H, F.invalidate(), F.duration(H - E).timeScale(g), la ? F.progress(1).pause(0) : a.delayedCall(.01, function () {
              F.resume().progress(da / 100), la && ma();
            });
          } else {
            if (h === P && (h = null), n !== x && x) {
              for (e = n, H = e.totalDuration(), H > 99999999 && (H = e.duration()); e.timeline.timeline && e !== x;) {
                E = E / e._timeScale + e._startTime, H = H / e._timeScale + e._startTime, e = e.timeline;
              }

              H - E > f && (H = E + f), x.pause(E), s = a.to(x, H - E, {
                time: H,
                ease: Linear.easeNone,
                data: "root"
              });
            } else s = n;

            s.timeScale(g), F.pause(), D.resume(), s.seek(0);
          }

          Y.innerHTML = s.duration().toFixed(2), B(ua, n.vars.id, va);
        }
      },
          ya = function ya() {
        var a, b, c;
        n === D && (a = D._time, D.progress(1, !0).time(a, !0), a = (F._timeline._time - F._startTime) * F._timeScale, c = Math.min(1e3, D.duration()), 1e3 === c && (c = Math.min(1e3, u(D))), b = F.duration() / c, 1 !== b && c && (da *= b, 100 > ea && (ea *= b), F.seek(0), F.vars.time = c, F.invalidate(), F.duration(c), F.time(a), Y.innerHTML = c.toFixed(2), ha(!0)));
      },
          za = function za(a) {
        xa(ua.options[ua.selectedIndex].animation), a.target && a.target.blur && a.target.blur(), la && ma();
      },
          Aa = R(".time-scale select"),
          Ba = R(".time-scale-label"),
          Ca = function Ca(b) {
        var c = parseFloat(Aa.options[Aa.selectedIndex].value) || 1;
        s.timeScale(c), S("timeScale", c), la || (s.progress() >= ea / 100 ? (s.target === n && s.target.seek(E + (H - E) * da / 100), s.progress(da / 100, !0).pause()) : s.pause(), a.delayedCall(.01, function () {
          s.resume();
        })), Ba.innerHTML = c + "x", Aa.blur && Aa.blur();
      },
          Da = a.to([R(".gs-bottom"), R(".gs-top")], .3, {
        autoAlpha: 0,
        y: 50,
        ease: Power2.easeIn,
        data: "root",
        paused: !0
      }),
          Ea = !1,
          Fa = function Fa(a) {
        e.hitTest(a, Q) || _.isDragging || fa.isDragging || ga.isDragging || Ja.restart(!0);
      },
          Ga = function Ga() {
        Ea || (Da.play(), Ja.pause(), Ea = !0);
      },
          Ha = function Ha() {
        Ja.pause(), Ea && (Da.reverse(), Ea = !1);
      },
          Ia = function Ia() {
        Ea ? Ha() : Ga();
      },
          Ja = a.delayedCall(1.3, Ga).pause(),
          Ka = function Ka(a) {
        M && !O && (O = D._startTime), K = !a, x = v(c.animation), x && !x.vars.id && (x.vars.id = "[no id]"), wa();
        var b = v(T("animation"));
        b && (b._inProgress = T("in") || 0, b._outProgress = T("out") || 100), c.paused && na(), n = null, xa(x || b || D);
        var d = c.timeScale || T("timeScale"),
            e = b === n;
        d && (B(Aa, d, Ba, d + "x"), s.timeScale(d)), da = ("inTime" in c ? w(c.inTime, n, 0, 0) : e ? b._inProgress : 0) || 0, 100 === da && !c.animation && b && (xa(D), da = w(c.inTime, n, 0, 0) || 0), da && (aa.style.left = da + "%", aa.style.display = ba.style.display = "block"), ea = ("outTime" in c ? w(c.outTime, n, 100, da) : e ? b._outProgress : 0) || 100, da > ea && (ea = 100), 100 !== ea && (ba.style.left = ea + "%", aa.style.display = ba.style.display = "block"), m = "loop" in c ? c.loop : T("loop"), m && sa(!0), c.paused && s.progress(da / 100, !0).pause(), M && n === D && O && c.globalSync !== !1 && !la && s.time(-O, !0), ha(!0);
      };

      z(ua, "change", za), z(ua, "mousedown", wa), z(ja, "mousedown", oa), z(R(".seek-bar"), "mousedown", ia), z(R(".rewind"), "mousedown", pa), z(qa, "mousedown", ta), z(Aa, "change", Ca), "auto" === c.visibility ? (z(Q, "mouseout", Fa), z(Q, "mouseover", Ha)) : "hidden" === c.visibility && (Ea = !0, Da.progress(1)), c.keyboard !== !1 && (j && c.keyboard ? console.log("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (j = P, N = function N(a) {
        var b,
            c = a.keyCode ? a.keyCode : a.which;
        32 === c ? oa() : 38 === c ? (b = parseFloat(C(Aa, -1, Ba)), s.timeScale(b), S("timeScale", b)) : 40 === c ? (b = parseFloat(C(Aa, 1, Ba)), s.timeScale(b), S("timeScale", b)) : 37 === c ? pa(a) : 39 === c ? s.progress(ea / 100) : 76 === c ? ta() : 72 === c ? Ia() : 73 === c ? (da = 100 * s.progress(), S("in", da), aa.style.left = da + "%", ha(!0)) : 79 === c && (ea = 100 * s.progress(), S("out", ea), ba.style.left = ea + "%", ha(!0));
      }, z(l, "keydown", N))), a.set(U, {
        xPercent: -50,
        x: 0,
        data: "root"
      }), a.set(aa, {
        xPercent: -100,
        x: 0,
        data: "root"
      }), aa._gsIgnore = ba._gsIgnore = U._gsIgnore = ja._gsIgnore = qa._gsIgnore = !0, a.killTweensOf([aa, ba, U]), Ka(M), M && a.delayedCall(1e-4, Ka, [!1], this), a.ticker.addEventListener("tick", ha), this.update = function (a) {
        h === P && ((!F._paused || a) && G(), ya());
      }, this.kill = function () {
        A(ua, "change", za), A(ua, "mousedown", wa), A(ja, "mousedown", oa), A(R(".seek-bar"), "mousedown", ia), A(R(".rewind"), "mousedown", pa), A(qa, "mousedown", ta), A(Aa, "change", Ca), _.disable(), fa.disable(), ga.disable(), a.ticker.removeEventListener("tick", ha), A(Q, "mouseout", Fa), A(Q, "mouseover", Ha), A(l, "keydown", N), Q.parentNode.removeChild(Q), h === P && (h = null), delete p[c.id + ""];
      }, this.minimal = function (a) {
        var b,
            d = Q.classList.contains("minimal");
        return arguments.length && d !== a ? (a ? Q.classList.add("minimal") : Q.classList.remove("minimal"), c.container && (Q.style.top = a ? "calc(100% - 42px)" : "calc(100% - 51px)"), void (_.isPressed && (i = !0, _.endDrag(_.pointerEvent), i = !1, b = 100 * s.progress(), W.style.width = Math.max(0, b - da) + "%", U.style.left = b + "%", U.style.transform = "translate(-50%,0)", U._gsTransform.x = 0, U._gsTransform.xPercent = -50, _.startDrag(_.pointerEvent, !0)))) : d;
      }, this.animation = xa, this.updateList = wa;
    },
        L = !0,
        M = !0,
        N = a.onOverwrite,
        O = 0;

    return K.version = "0.1.8", K.logOverwrites = !1, K.globalRecordingTime = 2, K.getById = function (a) {
      return a ? p[a] : h;
    }, s._startTime += s._time, D._startTime = E._startTime = s._time = s._totalTime = 0, a.delayedCall(.01, function () {
      h ? h.update() : G();
    }), a.delayedCall(2, function () {
      var b, d, e;
      if (!h) for (G(), b = D._first, e = D._startTime; b;) {
        d = b._next, b._totalDuration !== b._totalTime || 1 !== b.ratio ? c.prototype.add.call(s, b, b._startTime - b._delay + e) : b.kill(), b = d;
      }
      K.globalRecordingTime > 2 ? a.delayedCall(K.globalRecordingTime - 2, function () {
        h && h.update(), L = !1;
      }) : L = !1, M = !1;
    }), s.add = function (b, d, e, f) {
      var g = b.data;

      if (L && b.vars && "root" !== g && "ignore" !== g && "isStart" !== g && "isFromStart" !== g && "_draggable" !== g && !(M && !b._duration && b instanceof a) && (!b.vars.onComplete || b.vars.onComplete !== b.vars.onReverseComplete)) {
        var h = D;
        return F._time && (F._paused ? (h = E, b._recordedTime = D.rawTime()) : (d = (s._time - F._startTime) * F._timeScale, i || (a.ticker.addEventListener("tick", H), i = !0))), h.add(b, d, e, f), b.vars.repeat && (h._dirty = !0), this;
      }

      return c.prototype.add.apply(this, arguments);
    }, D._enabled = E._enabled = function (a, b) {
      return c.prototype._enabled.apply(this, arguments);
    }, d.prototype._remove = function (a, b) {
      c.prototype._remove.apply(this, arguments);

      var d = this._last;
      return d ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, a.onOverwrite = function (a, b, c, d) {
      K.logOverwrites && (d ? console.log("[Overwrite warning] the following properties were overwritten: ", d, "| target:", c, "| overwritten tween: ", a, "| overwriting tween:", b) : console.log("[Overwrite warning] the following tween was overwritten:", a, "by", b)), "function" == typeof N && N(a, b, c, d);
    }, K.create = function (a) {
      return new K(a);
    }, K;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
/*!
* VERSION: 0.16.3
* DATE: 2018-03-02
* UPDATES AND DOCS AT: http://greensock.com
*
* Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
*
* @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
* This work is subject to the terms at http://greensock.com/standard-license or for
* Club GreenSock members, the software agreement that was issued with your membership.
*
* @author: Jack Doyle, jack@greensock.com
*/

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function (a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = {
      css: {},
      data: "_draggable"
    },
        m = {
      css: {},
      data: "_draggable"
    },
        n = {
      css: {},
      data: "_draggable"
    },
        o = {
      css: {}
    },
        p = _gsScope._gsDefine.globals,
        q = {},
        r = {
      style: {}
    },
        s = _gsScope.document || {
      createElement: function createElement() {
        return r;
      }
    },
        t = s.documentElement || {},
        u = function u(a) {
      return s.createElementNS ? s.createElementNS("http://www.w3.org/1999/xhtml", a) : s.createElement(a);
    },
        v = u("div"),
        w = [],
        x = function x() {
      return !1;
    },
        y = 180 / Math.PI,
        z = 999999999999999,
        A = Date.now || function () {
      return new Date().getTime();
    },
        B = !(s.addEventListener || !s.all),
        C = s.createElement("div"),
        D = [],
        E = {},
        F = 0,
        G = /^(?:a|input|textarea|button|select)$/i,
        H = 0,
        I = _gsScope.navigator && -1 !== _gsScope.navigator.userAgent.toLowerCase().indexOf("android"),
        J = 0,
        K = {},
        L = {},
        M = function M(a) {
      if ("string" == typeof a && (a = b.selector(a)), !a || a.nodeType) return [a];
      var c,
          d = [],
          e = a.length;

      for (c = 0; c !== e; d.push(a[c++])) {
        ;
      }

      return d;
    },
        N = function N(a, b) {
      var c,
          d = {};
      if (b) for (c in a) {
        d[c] = a[c] * b;
      } else for (c in a) {
        d[c] = a[c];
      }
      return d;
    },
        O = function O() {
      for (var a = D.length; --a > -1;) {
        D[a]();
      }
    },
        P = function P(a) {
      D.push(a), 1 === D.length && b.ticker.addEventListener("tick", O, this, !1, 1);
    },
        Q = function Q(a) {
      for (var c = D.length; --c > -1;) {
        D[c] === a && D.splice(c, 1);
      }

      b.to(R, 0, {
        overwrite: "all",
        delay: 15,
        onComplete: R,
        data: "_draggable"
      });
    },
        R = function R() {
      D.length || b.ticker.removeEventListener("tick", O);
    },
        S = function S(a, b) {
      var c;

      for (c in b) {
        void 0 === a[c] && (a[c] = b[c]);
      }

      return a;
    },
        T = function T() {
      return null != window.pageYOffset ? window.pageYOffset : null != s.scrollTop ? s.scrollTop : t.scrollTop || s.body.scrollTop || 0;
    },
        U = function U() {
      return null != window.pageXOffset ? window.pageXOffset : null != s.scrollLeft ? s.scrollLeft : t.scrollLeft || s.body.scrollLeft || 0;
    },
        V = function V(a, b) {
      Ia(a, "scroll", b), X(a.parentNode) || V(a.parentNode, b);
    },
        W = function W(a, b) {
      Ja(a, "scroll", b), X(a.parentNode) || W(a.parentNode, b);
    },
        X = function X(a) {
      return !(a && a !== t && a !== s && a !== s.body && a !== window && a.nodeType && a.parentNode);
    },
        Y = function Y(a, b) {
      var c = "x" === b ? "Width" : "Height",
          d = "scroll" + c,
          e = "client" + c,
          f = s.body;
      return Math.max(0, X(a) ? Math.max(t[d], f[d]) - (window["inner" + c] || t[e] || f[e]) : a[d] - a[e]);
    },
        Z = function Z(a) {
      var b = X(a),
          c = Y(a, "x"),
          d = Y(a, "y");
      b ? a = L : Z(a.parentNode), a._gsMaxScrollX = c, a._gsMaxScrollY = d, a._gsScrollX = a.scrollLeft || 0, a._gsScrollY = a.scrollTop || 0;
    },
        $ = function $(a, b) {
      return a = a || window.event, q.pageX = a.clientX + s.body.scrollLeft + t.scrollLeft, q.pageY = a.clientY + s.body.scrollTop + t.scrollTop, b && (a.returnValue = !1), q;
    },
        _ = function _(a) {
      return a ? ("string" == typeof a && (a = b.selector(a)), a.length && a !== window && a[0] && a[0].style && !a.nodeType && (a = a[0]), a === window || a.nodeType && a.style ? a : null) : a;
    },
        aa = function aa(a, b) {
      var c,
          e,
          f,
          g = a.style;

      if (void 0 === g[b]) {
        for (f = ["O", "Moz", "ms", "Ms", "Webkit"], e = 5, c = b.charAt(0).toUpperCase() + b.substr(1); --e > -1 && void 0 === g[f[e] + c];) {
          ;
        }

        if (0 > e) return "";
        d = 3 === e ? "ms" : f[e], b = d + c;
      }

      return b;
    },
        ba = function ba(a, b, c) {
      var d = a.style;
      d && (void 0 === d[b] && (b = aa(a, b)), null == c ? d.removeProperty ? d.removeProperty(b.replace(/([A-Z])/g, "-$1").toLowerCase()) : d.removeAttribute(b) : void 0 !== d[b] && (d[b] = c));
    },
        ca = s.defaultView ? s.defaultView.getComputedStyle : x,
        da = /(?:Left|Right|Width)/i,
        ea = /(?:\d|\-|\+|=|#|\.)*/g,
        fa = function fa(a, b, c, d, e) {
      if ("px" === d || !d) return c;
      if ("auto" === d || !c) return 0;
      var f,
          g = da.test(b),
          h = a,
          i = v.style,
          j = 0 > c;
      return j && (c = -c), "%" === d && -1 !== b.indexOf("border") ? f = c / 100 * (g ? a.clientWidth : a.clientHeight) : (i.cssText = "border:0 solid red;position:" + ha(a, "position", !0) + ";line-height:0;", "%" !== d && h.appendChild ? i[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (h = a.parentNode || s.body, i[g ? "width" : "height"] = c + d), h.appendChild(v), f = parseFloat(v[g ? "offsetWidth" : "offsetHeight"]), h.removeChild(v), 0 !== f || e || (f = fa(a, b, c, d, !0))), j ? -f : f;
    },
        ga = function ga(a, b) {
      if ("absolute" !== ha(a, "position", !0)) return 0;
      var c = "left" === b ? "Left" : "Top",
          d = ha(a, "margin" + c, !0);
      return a["offset" + c] - (fa(a, b, parseFloat(d), (d + "").replace(ea, "")) || 0);
    },
        ha = function ha(a, b, c) {
      var d,
          e = (a._gsTransform || {})[b];
      return e || 0 === e ? e : (a.style[b] ? e = a.style[b] : (d = ca(a)) ? (e = d.getPropertyValue(b.replace(/([A-Z])/g, "-$1").toLowerCase()), e = e || d.length ? e : d[b]) : a.currentStyle && (e = a.currentStyle[b]), "auto" !== e || "top" !== b && "left" !== b || (e = ga(a, b)), c ? e : parseFloat(e) || 0);
    },
        ia = function ia(a, b, c) {
      var d = a.vars,
          e = d[c],
          f = a._listeners[b];
      "function" == typeof e && e.apply(d[c + "Scope"] || d.callbackScope || a, d[c + "Params"] || [a.pointerEvent]), f && a.dispatchEvent(b);
    },
        ja = function ja(a, b) {
      var c,
          d,
          e,
          f = _(a);

      return f ? Da(f, b) : void 0 !== a.left ? (e = xa(b), {
        left: a.left - e.x,
        top: a.top - e.y,
        width: a.width,
        height: a.height
      }) : (d = a.min || a.minX || a.minRotation || 0, c = a.min || a.minY || 0, {
        left: d,
        top: c,
        width: (a.max || a.maxX || a.maxRotation || 0) - d,
        height: (a.max || a.maxY || 0) - c
      });
    },
        ka = function ka() {
      if (!s.createElementNS) return g = 0, void (h = !1);
      var a,
          b,
          c,
          d,
          e = u("div"),
          f = s.createElementNS("http://www.w3.org/2000/svg", "svg"),
          l = u("div"),
          m = e.style,
          n = s.body || t,
          o = "flex" === ha(n, "display", !0);
      s.body && na && (m.position = "absolute", n.appendChild(l), l.appendChild(e), d = e.offsetParent, l.style[na] = "rotate(1deg)", k = e.offsetParent === d, l.style.position = "absolute", m.height = "10px", d = e.offsetTop, l.style.border = "5px solid red", j = d !== e.offsetTop, n.removeChild(l)), m = f.style, f.setAttributeNS(null, "width", "400px"), f.setAttributeNS(null, "height", "400px"), f.setAttributeNS(null, "viewBox", "0 0 400 400"), m.display = "block", m.boxSizing = "border-box", m.border = "0px solid red", m.transform = "none", e.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", n.appendChild(e), e.appendChild(f), c = f.createSVGPoint().matrixTransform(f.getScreenCTM()), b = c.y, e.scrollTop = 100, c.x = c.y = 0, c = c.matrixTransform(f.getScreenCTM()), i = b - c.y < 100.1 ? 0 : b - c.y - 150, e.removeChild(f), n.removeChild(e), n.appendChild(f), o && (n.style.display = "block"), a = f.getScreenCTM(), b = a.e, m.border = "50px solid red", a = f.getScreenCTM(), 0 === b && 0 === a.e && 0 === a.f && 1 === a.a ? (g = 1, h = !0) : (g = b !== a.e ? 1 : 0, h = 1 !== a.a), o && (n.style.display = "flex"), n.removeChild(f);
    },
        la = "" !== aa(v, "perspective"),
        ma = aa(v, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
        na = aa(v, "transform"),
        oa = na.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
        pa = {},
        qa = {},
        ra = _gsScope.SVGElement,
        sa = function sa(a) {
      return !!(ra && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM));
    },
        ta = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
        ua = [],
        va = [],
        wa = function wa(a) {
      if (!a.getBoundingClientRect || !a.parentNode || !na) return {
        offsetTop: 0,
        offsetLeft: 0,
        scaleX: 1,
        scaleY: 1,
        offsetParent: t
      };
      if (Sa.cacheSVGData !== !1 && a._dCache && a._dCache.lastUpdate === b.ticker.frame) return a._dCache;
      var c,
          d,
          e,
          f,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r = a,
          u = ya(a);

      if (u.lastUpdate = b.ticker.frame, a.getBBox && !u.isSVGRoot) {
        for (r = a.parentNode, c = a.getBBox(); r && "svg" !== (r.nodeName + "").toLowerCase();) {
          r = r.parentNode;
        }

        return f = wa(r), u.offsetTop = c.y * f.scaleY, u.offsetLeft = c.x * f.scaleX, u.scaleX = f.scaleX, u.scaleY = f.scaleY, u.offsetParent = r || t, u;
      }

      for (e = u.offsetParent, e === s.body && (e = t), va.length = ua.length = 0; r && (j = ha(r, na, !0), "matrix(1, 0, 0, 1, 0, 0)" !== j && "none" !== j && "translate3d(0px, 0px, 0px)" !== j && (va.push(r), ua.push(r.style[na]), r.style[na] = "none"), r !== e);) {
        r = r.parentNode;
      }

      for (d = e.getBoundingClientRect(), j = a.getScreenCTM(), m = a.createSVGPoint(), l = m.matrixTransform(j), u.scaleX = Math.sqrt(j.a * j.a + j.b * j.b), u.scaleY = Math.sqrt(j.d * j.d + j.c * j.c), void 0 === g && ka(), u.borderBox && !h && a.getAttribute("width") && (f = ca(a) || {}, n = parseFloat(f.borderLeftWidth) + parseFloat(f.borderRightWidth) || 0, o = parseFloat(f.borderTopWidth) + parseFloat(f.borderBottomWidth) || 0, p = parseFloat(f.width) || 0, q = parseFloat(f.height) || 0, u.scaleX *= (p - n) / p, u.scaleY *= (q - o) / q), i ? (c = a.getBoundingClientRect(), u.offsetLeft = c.left - d.left, u.offsetTop = c.top - d.top) : (u.offsetLeft = l.x - d.left, u.offsetTop = l.y - d.top), u.offsetParent = e, k = va.length; --k > -1;) {
        va[k].style[na] = ua[k];
      }

      return u;
    },
        xa = function xa(a, c) {
      if (c = c || {}, !a || a === t || !a.parentNode || a === window) return {
        x: 0,
        y: 0
      };
      var d = ca(a),
          e = ma && d ? d.getPropertyValue(ma) : "50% 50%",
          f = e.split(" "),
          g = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : f[0],
          h = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : f[1];
      return ("center" === h || null == h) && (h = "50%"), ("center" === g || isNaN(parseFloat(g))) && (g = "50%"), a.getBBox && sa(a) ? (a._gsTransform || (b.set(a, {
        x: "+=0",
        overwrite: !1
      }), void 0 === a._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), e = a.getBBox(), c.x = a._gsTransform.xOrigin - e.x, c.y = a._gsTransform.yOrigin - e.y) : (a.getBBox && -1 !== (g + h).indexOf("%") && (a = a.getBBox(), a = {
        offsetWidth: a.width,
        offsetHeight: a.height
      }), c.x = -1 !== g.indexOf("%") ? a.offsetWidth * parseFloat(g) / 100 : parseFloat(g), c.y = -1 !== h.indexOf("%") ? a.offsetHeight * parseFloat(h) / 100 : parseFloat(h)), c;
    },
        ya = function ya(a) {
      if (Sa.cacheSVGData !== !1 && a._dCache && a._dCache.lastUpdate === b.ticker.frame) return a._dCache;
      var c,
          d = a._dCache = a._dCache || {},
          e = ca(a),
          f = a.getBBox && sa(a),
          g = "svg" === (a.nodeName + "").toLowerCase();
      if (d.isSVG = f, d.isSVGRoot = g, d.borderBox = "border-box" === e.boxSizing, d.computedStyle = e, g) c = a.parentNode || t, c.insertBefore(v, a), d.offsetParent = v.offsetParent || t, c.removeChild(v);else if (f) {
        for (c = a.parentNode; c && "svg" !== (c.nodeName + "").toLowerCase();) {
          c = c.parentNode;
        }

        d.offsetParent = c;
      } else d.offsetParent = a.offsetParent;
      return d;
    },
        za = function za(a, b, c, d, e) {
      if (a === window || !a || !a.style || !a.parentNode) return [1, 0, 0, 1, 0, 0];
      var f,
          h,
          i,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          u,
          v,
          w,
          x,
          y = a._dCache || ya(a),
          z = a.parentNode,
          A = z._dCache || ya(z),
          B = y.computedStyle,
          C = y.isSVG ? A.offsetParent : z.offsetParent;
      return f = y.isSVG && -1 !== (a.style[na] + "").indexOf("matrix") ? a.style[na] : B ? B.getPropertyValue(oa) : a.currentStyle ? a.currentStyle[na] : "1,0,0,1,0,0", a.getBBox && -1 !== (a.getAttribute("transform") + "").indexOf("matrix") && (f = a.getAttribute("transform")), f = (f + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0], f.length > 6 && (f = [f[0], f[1], f[4], f[5], f[12], f[13]]), d ? f[4] = f[5] = 0 : y.isSVG && (m = a._gsTransform) && (m.xOrigin || m.yOrigin) && (f[0] = parseFloat(f[0]), f[1] = parseFloat(f[1]), f[2] = parseFloat(f[2]), f[3] = parseFloat(f[3]), f[4] = parseFloat(f[4]) - (m.xOrigin - (m.xOrigin * f[0] + m.yOrigin * f[2])), f[5] = parseFloat(f[5]) - (m.yOrigin - (m.xOrigin * f[1] + m.yOrigin * f[3]))), b && (void 0 === g && ka(), i = y.isSVG || y.isSVGRoot ? wa(a) : a, y.isSVG ? (l = a.getBBox(), r = A.isSVGRoot ? {
        x: 0,
        y: 0
      } : z.getBBox(), i = {
        offsetLeft: l.x - r.x,
        offsetTop: l.y - r.y,
        offsetParent: y.offsetParent
      }) : y.isSVGRoot ? (u = parseInt(B.borderTopWidth, 10) || 0, v = parseInt(B.borderLeftWidth, 10) || 0, w = (f[0] - g) * v + f[2] * u, x = f[1] * v + (f[3] - g) * u, n = b.x, o = b.y, p = n - (n * f[0] + o * f[2]), q = o - (n * f[1] + o * f[3]), f[4] = parseFloat(f[4]) + p, f[5] = parseFloat(f[5]) + q, b.x -= p, b.y -= q, n = i.scaleX, o = i.scaleY, e || (b.x *= n, b.y *= o), f[0] *= n, f[1] *= o, f[2] *= n, f[3] *= o, ta || (b.x += w, b.y += x), C === s.body && i.offsetParent === t && (C = t)) : !j && a.offsetParent && (b.x += parseInt(ha(a.offsetParent, "borderLeftWidth"), 10) || 0, b.y += parseInt(ha(a.offsetParent, "borderTopWidth"), 10) || 0), h = z === t || z === s.body, f[4] = Number(f[4]) + b.x + (i.offsetLeft || 0) - c.x - (h ? 0 : z.scrollLeft || 0), f[5] = Number(f[5]) + b.y + (i.offsetTop || 0) - c.y - (h ? 0 : z.scrollTop || 0), z && "fixed" === ha(a, "position", B) && (f[4] += U(), f[5] += T()), !z || z === t || C !== i.offsetParent || A.isSVG || k && "100100" !== za(z).join("") || (i = A.isSVGRoot ? wa(z) : z, f[4] -= i.offsetLeft || 0, f[5] -= i.offsetTop || 0, j || !A.offsetParent || y.isSVG || y.isSVGRoot || (f[4] -= parseInt(ha(A.offsetParent, "borderLeftWidth"), 10) || 0, f[5] -= parseInt(ha(A.offsetParent, "borderTopWidth"), 10) || 0))), f;
    },
        Aa = function Aa(a, b) {
      if (!a || a === window || !a.parentNode) return [1, 0, 0, 1, 0, 0];

      for (var c, d, e, f, g, h, i, j, k = xa(a, pa), l = xa(a.parentNode, qa), m = za(a, k, l, !1, !b); (a = a.parentNode) && a.parentNode && a !== t;) {
        k = l, l = xa(a.parentNode, k === pa ? qa : pa), i = za(a, k, l), c = m[0], d = m[1], e = m[2], f = m[3], g = m[4], h = m[5], m[0] = c * i[0] + d * i[2], m[1] = c * i[1] + d * i[3], m[2] = e * i[0] + f * i[2], m[3] = e * i[1] + f * i[3], m[4] = g * i[0] + h * i[2] + i[4], m[5] = g * i[1] + h * i[3] + i[5];
      }

      return b && (c = m[0], d = m[1], e = m[2], f = m[3], g = m[4], h = m[5], j = c * f - d * e, m[0] = f / j, m[1] = -d / j, m[2] = -e / j, m[3] = c / j, m[4] = (e * h - f * g) / j, m[5] = -(c * h - d * g) / j), m;
    },
        Ba = function Ba(a, b, c, d, e) {
      a = _(a);
      var f = Aa(a, !1, e),
          g = b.x,
          h = b.y;
      return c && (xa(a, b), g -= b.x, h -= b.y), d = d === !0 ? b : d || {}, d.x = g * f[0] + h * f[2] + f[4], d.y = g * f[1] + h * f[3] + f[5], d;
    },
        Ca = function Ca(a, b, c) {
      var d = a.x * b[0] + a.y * b[2] + b[4],
          e = a.x * b[1] + a.y * b[3] + b[5];
      return a.x = d * c[0] + e * c[2] + c[4], a.y = d * c[1] + e * c[3] + c[5], a;
    },
        Da = function Da(a, b, c) {
      if (!(a = _(a))) return null;
      b = _(b);
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          C = a.getBBox && sa(a);
      if (a === window) g = T(), e = U(), f = e + (t.clientWidth || a.innerWidth || s.body.clientWidth || 0), h = g + ((a.innerHeight || 0) - 20 < t.clientHeight ? t.clientHeight : a.innerHeight || s.body.clientHeight || 0);else {
        if (void 0 === b || b === window) return a.getBoundingClientRect();
        d = xa(a), e = -d.x, g = -d.y, C ? (o = a.getBBox(), p = o.width, q = o.height) : "svg" !== (a.nodeName + "").toLowerCase() && a.offsetWidth ? (p = a.offsetWidth, q = a.offsetHeight) : (z = ca(a), p = parseFloat(z.width), q = parseFloat(z.height)), f = e + p, h = g + q, "svg" !== a.nodeName.toLowerCase() || B || (r = wa(a), A = r.computedStyle || {}, w = (a.getAttribute("viewBox") || "0 0").split(" "), x = parseFloat(w[0]), y = parseFloat(w[1]), u = parseFloat(A.borderLeftWidth) || 0, v = parseFloat(A.borderTopWidth) || 0, f -= p - (p - u) / r.scaleX - x, h -= q - (q - v) / r.scaleY - y, e -= u / r.scaleX - x, g -= v / r.scaleY - y, z && (f += (parseFloat(A.borderRightWidth) + u) / r.scaleX, h += (v + parseFloat(A.borderBottomWidth)) / r.scaleY));
      }
      return a === b ? {
        left: e,
        top: g,
        width: f - e,
        height: h - g
      } : (i = Aa(a), j = Aa(b, !0), k = Ca({
        x: e,
        y: g
      }, i, j), l = Ca({
        x: f,
        y: g
      }, i, j), m = Ca({
        x: f,
        y: h
      }, i, j), n = Ca({
        x: e,
        y: h
      }, i, j), e = Math.min(k.x, l.x, m.x, n.x), g = Math.min(k.y, l.y, m.y, n.y), K.x = K.y = 0, c && xa(b, K), {
        left: e + K.x,
        top: g + K.y,
        width: Math.max(k.x, l.x, m.x, n.x) - e,
        height: Math.max(k.y, l.y, m.y, n.y) - g
      });
    },
        Ea = function Ea(a) {
      return a && a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1;
    },
        Fa = function Fa(a) {
      var b,
          c,
          d,
          e = [],
          f = a.length;

      for (b = 0; f > b; b++) {
        if (c = a[b], Ea(c)) for (d = c.length, d = 0; d < c.length; d++) {
          e.push(c[d]);
        } else c && 0 !== c.length && e.push(c);
      }

      return e;
    },
        Ga = "ontouchstart" in t && "orientation" in window,
        Ha = function (a) {
      for (var b = a.split(","), c = (void 0 !== v.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== v.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : a).split(","), d = {}, e = 4; --e > -1;) {
        d[b[e]] = c[e], d[c[e]] = b[e];
      }

      return d;
    }("touchstart,touchmove,touchend,touchcancel"),
        Ia = function Ia(a, b, c, d) {
      if (a.addEventListener) {
        var e = Ha[b];
        d = d || {
          passive: !1
        }, a.addEventListener(e || b, c, d), e && b !== e && a.addEventListener(b, c, d);
      } else a.attachEvent && a.attachEvent("on" + b, c);
    },
        Ja = function Ja(a, b, c) {
      if (a.removeEventListener) {
        var d = Ha[b];
        a.removeEventListener(d || b, c), d && b !== d && a.removeEventListener(b, c);
      } else a.detachEvent && a.detachEvent("on" + b, c);
    },
        Ka = function Ka(a, b) {
      for (var c = a.length; --c > -1;) {
        if (a[c].identifier === b) return !0;
      }

      return !1;
    },
        La = function La(a) {
      e = a.touches && H < a.touches.length, Ja(a.target, "touchend", La);
    },
        Ma = function Ma(a) {
      e = a.touches && H < a.touches.length, Ia(a.target, "touchend", La);
    },
        Na = function Na(a, b, c, d, e, f) {
      var g,
          h,
          i,
          j = {};
      if (b) if (1 !== e && b instanceof Array) {
        if (j.end = g = [], i = b.length, "object" == _typeof(b[0])) for (h = 0; i > h; h++) {
          g[h] = N(b[h], e);
        } else for (h = 0; i > h; h++) {
          g[h] = b[h] * e;
        }
        c += 1.1, d -= 1.1;
      } else "function" == typeof b ? j.end = function (c) {
        var d,
            f,
            g = b.call(a, c);
        if (1 !== e) if ("object" == _typeof(g)) {
          d = {};

          for (f in g) {
            d[f] = g[f] * e;
          }

          g = d;
        } else g *= e;
        return g;
      } : j.end = b;
      return (c || 0 === c) && (j.max = c), (d || 0 === d) && (j.min = d), f && (j.velocity = 0), j;
    },
        Oa = function Oa(a) {
      var b;
      return a && a.getAttribute && "BODY" !== a.nodeName ? "true" === (b = a.getAttribute("data-clickable")) || "false" !== b && (a.onclick || G.test(a.nodeName + "") || "true" === a.getAttribute("contentEditable")) ? !0 : Oa(a.parentNode) : !1;
    },
        Pa = function Pa(a, b) {
      for (var c, d = a.length; --d > -1;) {
        c = a[d], c.ondragstart = c.onselectstart = b ? null : x, ba(c, "userSelect", b ? "text" : "none");
      }
    },
        Qa = function () {
      var a,
          b = s.createElement("div"),
          c = s.createElement("div"),
          d = c.style,
          e = s.body || v;
      return d.display = "inline-block", d.position = "relative", b.style.cssText = c.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", b.appendChild(c), e.appendChild(b), a = c.offsetHeight + 18 > b.scrollHeight, e.removeChild(b), a;
    }(),
        Ra = function Ra(a, c) {
      a = _(a), c = c || {};
      var d,
          e,
          f,
          g,
          h,
          i,
          j = s.createElement("div"),
          k = j.style,
          l = a.firstChild,
          m = 0,
          n = 0,
          o = a.scrollTop,
          p = a.scrollLeft,
          q = a.scrollWidth,
          r = a.scrollHeight,
          t = 0,
          u = 0,
          v = 0;
      la && c.force3D !== !1 ? (h = "translate3d(", i = "px,0px)") : na && (h = "translate(", i = "px)"), this.scrollTop = function (a, b) {
        return arguments.length ? void this.top(-a, b) : -this.top();
      }, this.scrollLeft = function (a, b) {
        return arguments.length ? void this.left(-a, b) : -this.left();
      }, this.left = function (d, e) {
        if (!arguments.length) return -(a.scrollLeft + n);
        var f = a.scrollLeft - p,
            g = n;
        return (f > 2 || -2 > f) && !e ? (p = a.scrollLeft, b.killTweensOf(this, !0, {
          left: 1,
          scrollLeft: 1
        }), this.left(-p), void (c.onKill && c.onKill())) : (d = -d, 0 > d ? (n = d - .5 | 0, d = 0) : d > u ? (n = d - u | 0, d = u) : n = 0, (n || g) && (h ? this._suspendTransforms || (k[na] = h + -n + "px," + -m + i) : k.left = -n + "px", n + t >= 0 && (k.paddingRight = n + t + "px")), a.scrollLeft = 0 | d, void (p = a.scrollLeft));
      }, this.top = function (d, e) {
        if (!arguments.length) return -(a.scrollTop + m);
        var f = a.scrollTop - o,
            g = m;
        return (f > 2 || -2 > f) && !e ? (o = a.scrollTop, b.killTweensOf(this, !0, {
          top: 1,
          scrollTop: 1
        }), this.top(-o), void (c.onKill && c.onKill())) : (d = -d, 0 > d ? (m = d - .5 | 0, d = 0) : d > v ? (m = d - v | 0, d = v) : m = 0, (m || g) && (h ? this._suspendTransforms || (k[na] = h + -n + "px," + -m + i) : k.top = -m + "px"), a.scrollTop = 0 | d, void (o = a.scrollTop));
      }, this.maxScrollTop = function () {
        return v;
      }, this.maxScrollLeft = function () {
        return u;
      }, this.disable = function () {
        for (l = j.firstChild; l;) {
          g = l.nextSibling, a.appendChild(l), l = g;
        }

        a === j.parentNode && a.removeChild(j);
      }, this.enable = function () {
        if (l = a.firstChild, l !== j) {
          for (; l;) {
            g = l.nextSibling, j.appendChild(l), l = g;
          }

          a.appendChild(j), this.calibrate();
        }
      }, this.calibrate = function (b) {
        var c,
            g,
            h = a.clientWidth === d;
        o = a.scrollTop, p = a.scrollLeft, (!h || a.clientHeight !== e || j.offsetHeight !== f || q !== a.scrollWidth || r !== a.scrollHeight || b) && ((m || n) && (c = this.left(), g = this.top(), this.left(-a.scrollLeft), this.top(-a.scrollTop)), (!h || b) && (k.display = "block", k.width = "auto", k.paddingRight = "0px", t = Math.max(0, a.scrollWidth - a.clientWidth), t && (t += ha(a, "paddingLeft") + (Qa ? ha(a, "paddingRight") : 0))), k.display = "inline-block", k.position = "relative", k.overflow = "visible", k.verticalAlign = "top", k.width = "100%", k.paddingRight = t + "px", Qa && (k.paddingBottom = ha(a, "paddingBottom", !0)), B && (k.zoom = "1"), d = a.clientWidth, e = a.clientHeight, q = a.scrollWidth, r = a.scrollHeight, u = a.scrollWidth - d, v = a.scrollHeight - e, f = j.offsetHeight, k.display = "block", (c || g) && (this.left(c), this.top(g)));
      }, this.content = j, this.element = a, this._suspendTransforms = !1, this.enable();
    },
        Sa = function Sa(d, g) {
      a.call(this, d), d = _(d), f || (f = p.com.greensock.plugins.ThrowPropsPlugin), this.vars = g = N(g || {}), this.target = d, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(g.dragResistance) || 0, this.edgeResistance = isNaN(g.edgeResistance) ? 1 : parseFloat(g.edgeResistance) || 0, this.lockAxis = g.lockAxis, this.autoScroll = g.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!g.allowEventDefault;

      var h,
          i,
          j,
          k,
          q,
          r,
          u,
          v,
          x,
          D,
          G,
          O,
          R,
          T,
          U,
          Y,
          aa,
          ca,
          da,
          ea,
          fa,
          ga,
          ka,
          la,
          ma,
          na,
          oa,
          pa,
          qa,
          ra,
          ta,
          ua,
          va,
          wa,
          xa = (g.type || (B ? "top,left" : "x,y")).toLowerCase(),
          ya = -1 !== xa.indexOf("x") || -1 !== xa.indexOf("y"),
          za = -1 !== xa.indexOf("rotation"),
          Ca = za ? "rotation" : ya ? "x" : "left",
          Da = ya ? "y" : "top",
          Ea = -1 !== xa.indexOf("x") || -1 !== xa.indexOf("left") || "scroll" === xa,
          Fa = -1 !== xa.indexOf("y") || -1 !== xa.indexOf("top") || "scroll" === xa,
          La = g.minimumMovement || 2,
          Qa = this,
          Ta = M(g.trigger || g.handle || d),
          Ua = {},
          Va = 0,
          Xa = !1,
          Ya = g.autoScrollMarginTop || 40,
          Za = g.autoScrollMarginRight || 40,
          $a = g.autoScrollMarginBottom || 40,
          _a = g.autoScrollMarginLeft || 40,
          ab = g.clickableTest || Oa,
          bb = 0,
          cb = function cb(a) {
        return Qa.isPressed && a.which < 2 ? void Qa.endDrag() : (a.preventDefault(), a.stopPropagation(), !1);
      },
          db = function db(a) {
        if (Qa.autoScroll && Qa.isDragging && (Xa || ca)) {
          var b,
              c,
              e,
              f,
              g,
              h,
              j,
              k,
              l = d,
              m = 15 * Qa.autoScroll;

          for (Xa = !1, L.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != t.scrollTop ? t.scrollTop : s.body.scrollTop, L.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != t.scrollLeft ? t.scrollLeft : s.body.scrollLeft, f = Qa.pointerX - L.scrollLeft, g = Qa.pointerY - L.scrollTop; l && !c;) {
            c = X(l.parentNode), b = c ? L : l.parentNode, e = c ? {
              bottom: Math.max(t.clientHeight, window.innerHeight || 0),
              right: Math.max(t.clientWidth, window.innerWidth || 0),
              left: 0,
              top: 0
            } : b.getBoundingClientRect(), h = j = 0, Fa && (k = b._gsMaxScrollY - b.scrollTop, 0 > k ? j = k : g > e.bottom - $a && k ? (Xa = !0, j = Math.min(k, m * (1 - Math.max(0, e.bottom - g) / $a) | 0)) : g < e.top + Ya && b.scrollTop && (Xa = !0, j = -Math.min(b.scrollTop, m * (1 - Math.max(0, g - e.top) / Ya) | 0)), j && (b.scrollTop += j)), Ea && (k = b._gsMaxScrollX - b.scrollLeft, 0 > k ? h = k : f > e.right - Za && k ? (Xa = !0, h = Math.min(k, m * (1 - Math.max(0, e.right - f) / Za) | 0)) : f < e.left + _a && b.scrollLeft && (Xa = !0, h = -Math.min(b.scrollLeft, m * (1 - Math.max(0, f - e.left) / _a) | 0)), h && (b.scrollLeft += h)), c && (h || j) && (window.scrollTo(b.scrollLeft, b.scrollTop), rb(Qa.pointerX + h, Qa.pointerY + j)), l = b;
          }
        }

        if (ca) {
          var n = Qa.x,
              o = Qa.y,
              p = 1e-6;
          p > n && n > -p && (n = 0), p > o && o > -p && (o = 0), za ? (Qa.deltaX = n - qa.data.rotation, qa.data.rotation = Qa.rotation = n, qa.setRatio(1)) : i ? (Fa && (Qa.deltaY = o - i.top(), i.top(o)), Ea && (Qa.deltaX = n - i.left(), i.left(n))) : ya ? (Fa && (Qa.deltaY = o - qa.data.y, qa.data.y = o), Ea && (Qa.deltaX = n - qa.data.x, qa.data.x = n), qa.setRatio(1)) : (Fa && (Qa.deltaY = o - parseFloat(d.style.top || 0), d.style.top = o + "px"), Ea && (Qa.deltaY = n - parseFloat(d.style.left || 0), d.style.left = n + "px")), !v || a || ua || (ua = !0, ia(Qa, "drag", "onDrag"), ua = !1);
        }

        ca = !1;
      },
          eb = function eb(a, c) {
        var e,
            f = Qa.x,
            g = Qa.y;
        d._gsTransform || !ya && !za || b.set(d, {
          x: "+=0",
          overwrite: !1,
          data: "_draggable"
        }), ya ? (Qa.y = d._gsTransform.y, Qa.x = d._gsTransform.x) : za ? Qa.x = Qa.rotation = d._gsTransform.rotation : i ? (Qa.y = i.top(), Qa.x = i.left()) : (Qa.y = parseInt(d.style.top, 10) || 0, Qa.x = parseInt(d.style.left, 10) || 0), (ea || fa || ga) && !c && (Qa.isDragging || Qa.isThrowing) && (ga && (K.x = Qa.x, K.y = Qa.y, e = ga(K), e.x !== Qa.x && (Qa.x = e.x, ca = !0), e.y !== Qa.y && (Qa.y = e.y, ca = !0)), ea && (e = ea(Qa.x), e !== Qa.x && (Qa.x = e, za && (Qa.rotation = e), ca = !0)), fa && (e = fa(Qa.y), e !== Qa.y && (Qa.y = e), ca = !0)), ca && db(!0), a || (Qa.deltaX = Qa.x - f, Qa.deltaY = Qa.y - g, ia(Qa, "throwupdate", "onThrowUpdate"));
      },
          fb = function fb() {
        var a, b, c, e;
        u = !1, i ? (i.calibrate(), Qa.minX = D = -i.maxScrollLeft(), Qa.minY = O = -i.maxScrollTop(), Qa.maxX = x = Qa.maxY = G = 0, u = !0) : g.bounds && (a = ja(g.bounds, d.parentNode), za ? (Qa.minX = D = a.left, Qa.maxX = x = a.left + a.width, Qa.minY = O = Qa.maxY = G = 0) : void 0 !== g.bounds.maxX || void 0 !== g.bounds.maxY ? (a = g.bounds, Qa.minX = D = a.minX, Qa.minY = O = a.minY, Qa.maxX = x = a.maxX, Qa.maxY = G = a.maxY) : (b = ja(d, d.parentNode), Qa.minX = D = ha(d, Ca) + a.left - b.left, Qa.minY = O = ha(d, Da) + a.top - b.top, Qa.maxX = x = D + (a.width - b.width), Qa.maxY = G = O + (a.height - b.height)), D > x && (Qa.minX = x, Qa.maxX = x = D, D = Qa.minX), O > G && (Qa.minY = G, Qa.maxY = G = O, O = Qa.minY), za && (Qa.minRotation = D, Qa.maxRotation = x), u = !0), g.liveSnap && (c = g.liveSnap === !0 ? g.snap || {} : g.liveSnap, e = c instanceof Array || "function" == typeof c, za ? (ea = nb(e ? c : c.rotation, D, x, 1), fa = null) : c.points ? ga = ob(e ? c : c.points, D, x, O, G, c.radius, i ? -1 : 1) : (Ea && (ea = nb(e ? c : c.x || c.left || c.scrollLeft, D, x, i ? -1 : 1)), Fa && (fa = nb(e ? c : c.y || c.top || c.scrollTop, O, G, i ? -1 : 1))));
      },
          gb = function gb() {
        Qa.isThrowing = !1, ia(Qa, "throwcomplete", "onThrowComplete");
      },
          hb = function hb() {
        Qa.isThrowing = !1;
      },
          ib = function ib(a, b) {
        var c, e, h, j;
        a && f ? (a === !0 && (c = g.snap || g.liveSnap || {}, e = c instanceof Array || "function" == typeof c, a = {
          resistance: (g.throwResistance || g.resistance || 1e3) / (za ? 10 : 1)
        }, za ? a.rotation = Na(Qa, e ? c : c.rotation, x, D, 1, b) : (Ea && (a[Ca] = Na(Qa, e ? c : c.points || c.x || c.left || c.scrollLeft, x, D, i ? -1 : 1, b || "x" === Qa.lockedAxis)), Fa && (a[Da] = Na(Qa, e ? c : c.points || c.y || c.top || c.scrollTop, G, O, i ? -1 : 1, b || "y" === Qa.lockedAxis)), (c.points || c instanceof Array && "object" == _typeof(c[0])) && (a.linkedProps = Ca + "," + Da, a.radius = c.radius))), Qa.isThrowing = !0, j = isNaN(g.overshootTolerance) ? 1 === g.edgeResistance ? 0 : 1 - Qa.edgeResistance + .2 : g.overshootTolerance, Qa.tween = h = f.to(i || d, {
          throwProps: a,
          data: "_draggable",
          ease: g.ease || p.Power3.easeOut,
          onComplete: gb,
          onOverwrite: hb,
          onUpdate: g.fastMode ? ia : eb,
          onUpdateParams: g.fastMode ? [Qa, "onthrowupdate", "onThrowUpdate"] : c && c.radius ? [!1, !0] : w
        }, isNaN(g.maxDuration) ? 2 : g.maxDuration, isNaN(g.minDuration) ? 0 === j || "object" == _typeof(a) && a.resistance > 1e3 ? 0 : .5 : g.minDuration, j), g.fastMode || (i && (i._suspendTransforms = !0), h.render(h.duration(), !0, !0), eb(!0, !0), Qa.endX = Qa.x, Qa.endY = Qa.y, za && (Qa.endRotation = Qa.x), h.play(0), eb(!0, !0), i && (i._suspendTransforms = !1))) : u && Qa.applyBounds();
      },
          jb = function jb(a) {
        var b,
            c,
            e,
            f,
            g,
            h,
            i,
            l,
            m,
            n = ma || [1, 0, 0, 1, 0, 0];
        ma = Aa(d.parentNode, !0), a && Qa.isPressed && n.join(",") !== ma.join(",") && (b = n[0], c = n[1], e = n[2], f = n[3], g = n[4], h = n[5], i = b * f - c * e, l = j * (f / i) + k * (-e / i) + (e * h - f * g) / i, m = j * (-c / i) + k * (b / i) + -(b * h - c * g) / i, k = l * ma[1] + m * ma[3] + ma[5], j = l * ma[0] + m * ma[2] + ma[4]), ma[1] || ma[2] || 1 != ma[0] || 1 != ma[3] || 0 != ma[4] || 0 != ma[5] || (ma = null);
      },
          kb = function kb() {
        var a = 1 - Qa.edgeResistance;
        jb(!1), ma && (j = Qa.pointerX * ma[0] + Qa.pointerY * ma[2] + ma[4], k = Qa.pointerX * ma[1] + Qa.pointerY * ma[3] + ma[5]), ca && (rb(Qa.pointerX, Qa.pointerY), db(!0)), i ? (fb(), r = i.top(), q = i.left()) : (lb() ? (eb(!0, !0), fb()) : Qa.applyBounds(), za ? (aa = Qa.rotationOrigin = Ba(d, {
          x: 0,
          y: 0
        }), eb(!0, !0), q = Qa.x, r = Qa.y = Math.atan2(aa.y - Qa.pointerY, Qa.pointerX - aa.x) * y) : (oa = d.parentNode ? d.parentNode.scrollTop || 0 : 0, pa = d.parentNode ? d.parentNode.scrollLeft || 0 : 0, r = ha(d, Da), q = ha(d, Ca))), u && a && (q > x ? q = x + (q - x) / a : D > q && (q = D - (D - q) / a), za || (r > G ? r = G + (r - G) / a : O > r && (r = O - (O - r) / a))), Qa.startX = q, Qa.startY = r;
      },
          lb = function lb() {
        return Qa.tween && Qa.tween.isActive();
      },
          mb = function mb() {
        !C.parentNode || lb() || Qa.isDragging || C.parentNode.removeChild(C);
      },
          nb = function nb(a, b, c, d) {
        return "function" == typeof a ? function (e) {
          var f = Qa.isPressed ? 1 - Qa.edgeResistance : 1;
          return a.call(Qa, e > c ? c + (e - c) * f : b > e ? b + (e - b) * f : e) * d;
        } : a instanceof Array ? function (d) {
          for (var e, f, g = a.length, h = 0, i = z; --g > -1;) {
            e = a[g], f = e - d, 0 > f && (f = -f), i > f && e >= b && c >= e && (h = g, i = f);
          }

          return a[h];
        } : isNaN(a) ? function (a) {
          return a;
        } : function () {
          return a * d;
        };
      },
          ob = function ob(a, b, c, d, e, f, g) {
        return f = f && z > f ? f * f : z, "function" == typeof a ? function (h) {
          var i,
              j,
              k,
              l = Qa.isPressed ? 1 - Qa.edgeResistance : 1,
              m = h.x,
              n = h.y;
          return h.x = m = m > c ? c + (m - c) * l : b > m ? b + (m - b) * l : m, h.y = n = n > e ? e + (n - e) * l : d > n ? d + (n - d) * l : n, i = a.call(Qa, h), i !== h && (h.x = i.x, h.y = i.y), 1 !== g && (h.x *= g, h.y *= g), z > f && (j = h.x - m, k = h.y - n, j * j + k * k > f && (h.x = m, h.y = n)), h;
        } : a instanceof Array ? function (b) {
          for (var c, d, e, g, h = a.length, i = 0, j = z; --h > -1;) {
            e = a[h], c = e.x - b.x, d = e.y - b.y, g = c * c + d * d, j > g && (i = h, j = g);
          }

          return f >= j ? a[i] : b;
        } : function (a) {
          return a;
        };
      },
          pb = function pb(a, c) {
        var e;

        if (h && !Qa.isPressed && a && ("mousedown" !== a.type && "pointerdown" !== a.type || c || !(A() - bb < 30) || !Ha[Qa.pointerEvent.type])) {
          if (na = lb(), Qa.pointerEvent = a, Ha[a.type] ? (la = -1 !== a.type.indexOf("touch") ? a.currentTarget || a.target : s, Ia(la, "touchend", sb), Ia(la, "touchmove", qb), Ia(la, "touchcancel", sb), Ia(s, "touchstart", Ma)) : (la = null, Ia(s, "mousemove", qb)), ta = null, Ia(s, "mouseup", sb), a && a.target && Ia(a.target, "mouseup", sb), ka = ab.call(Qa, a.target) && !g.dragClickables && !c) return Ia(a.target, "change", sb), ia(Qa, "press", "onPress"), void Pa(Ta, !0);
          if (ra = !la || Ea === Fa || Qa.vars.allowNativeTouchScrolling === !1 || Qa.vars.allowContextMenu && a && (a.ctrlKey || a.which > 2) ? !1 : Ea ? "y" : "x", B ? a = $(a, !0) : ra || Qa.allowEventDefault || (a.preventDefault(), a.preventManipulation && a.preventManipulation()), a.changedTouches ? (a = U = a.changedTouches[0], Y = a.identifier) : a.pointerId ? Y = a.pointerId : U = Y = null, H++, P(db), k = Qa.pointerY = a.pageY, j = Qa.pointerX = a.pageX, (ra || Qa.autoScroll) && Z(d.parentNode), !d.parentNode || !Qa.autoScroll || i || za || !d.parentNode._gsMaxScrollX || C.parentNode || d.getBBox || (C.style.width = d.parentNode.scrollWidth + "px", d.parentNode.appendChild(C)), kb(), Qa.tween && Qa.tween.kill(), Qa.isThrowing = !1, b.killTweensOf(i || d, !0, Ua), i && b.killTweensOf(d, !0, {
            scrollTo: 1
          }), Qa.tween = Qa.lockedAxis = null, (g.zIndexBoost || !za && !i && g.zIndexBoost !== !1) && (d.style.zIndex = Sa.zIndex++), Qa.isPressed = !0, v = !(!g.onDrag && !Qa._listeners.drag), !za) for (e = Ta.length; --e > -1;) {
            ba(Ta[e], "cursor", g.cursor || "move");
          }
          ia(Qa, "press", "onPress");
        }
      },
          qb = function qb(a) {
        var b,
            c,
            d,
            f,
            g,
            i,
            l = a;

        if (h && !e && Qa.isPressed && a) {
          if (Qa.pointerEvent = a, b = a.changedTouches) {
            if (a = b[0], a !== U && a.identifier !== Y) {
              for (f = b.length; --f > -1 && (a = b[f]).identifier !== Y;) {
                ;
              }

              if (0 > f) return;
            }
          } else if (a.pointerId && Y && a.pointerId !== Y) return;

          if (B) a = $(a, !0);else {
            if (la && ra && !ta && (c = a.pageX, d = a.pageY, ma && (f = c * ma[0] + d * ma[2] + ma[4], d = c * ma[1] + d * ma[3] + ma[5], c = f), g = Math.abs(c - j), i = Math.abs(d - k), (g !== i && (g > La || i > La) || I && ra === ta) && (ta = g > i && Ea ? "x" : "y", Qa.vars.lockAxisOnTouchScroll !== !1 && (Qa.lockedAxis = "x" === ta ? "y" : "x", "function" == typeof Qa.vars.onLockAxis && Qa.vars.onLockAxis.call(Qa, l)), I && ra === ta))) return void sb(l);
            Qa.allowEventDefault || ra && (!ta || ra === ta) || l.cancelable === !1 || (l.preventDefault(), l.preventManipulation && l.preventManipulation());
          }
          Qa.autoScroll && (Xa = !0), rb(a.pageX, a.pageY);
        }
      },
          rb = function rb(a, b) {
        var c,
            d,
            e,
            f,
            g,
            h,
            i = 1 - Qa.dragResistance,
            l = 1 - Qa.edgeResistance;
        Qa.pointerX = a, Qa.pointerY = b, za ? (f = Math.atan2(aa.y - b, a - aa.x) * y, g = Qa.y - f, g > 180 ? (r -= 360, Qa.y = f) : -180 > g && (r += 360, Qa.y = f), Qa.x !== q || Math.abs(r - f) > La ? (Qa.y = f, e = q + (r - f) * i) : e = q) : (ma && (h = a * ma[0] + b * ma[2] + ma[4], b = a * ma[1] + b * ma[3] + ma[5], a = h), d = b - k, c = a - j, La > d && d > -La && (d = 0), La > c && c > -La && (c = 0), (Qa.lockAxis || Qa.lockedAxis) && (c || d) && (h = Qa.lockedAxis, h || (Qa.lockedAxis = h = Ea && Math.abs(c) > Math.abs(d) ? "y" : Fa ? "x" : null, h && "function" == typeof Qa.vars.onLockAxis && Qa.vars.onLockAxis.call(Qa, Qa.pointerEvent)), "y" === h ? d = 0 : "x" === h && (c = 0)), e = q + c * i, f = r + d * i), (ea || fa || ga) && (Qa.x !== e || Qa.y !== f && !za) ? (ga && (K.x = e, K.y = f, h = ga(K), e = h.x, f = h.y), ea && (e = ea(e)), fa && (f = fa(f))) : u && (e > x ? e = x + (e - x) * l : D > e && (e = D + (e - D) * l), za || (f > G ? f = G + (f - G) * l : O > f && (f = O + (f - O) * l))), za || ma || (e = Math.round(e), f = Math.round(f)), (Qa.x !== e || Qa.y !== f && !za) && (za ? (Qa.endRotation = Qa.x = Qa.endX = e, ca = !0) : (Fa && (Qa.y = Qa.endY = f, ca = !0), Ea && (Qa.x = Qa.endX = e, ca = !0)), !Qa.isDragging && Qa.isPressed && (Qa.isDragging = !0, ia(Qa, "dragstart", "onDragStart")));
      },
          sb = function sb(a, c) {
        if (h && Qa.isPressed && (!a || null == Y || c || !(a.pointerId && a.pointerId !== Y || a.changedTouches && !Ka(a.changedTouches, Y)))) {
          Qa.isPressed = !1;
          var e,
              f,
              i,
              j,
              k,
              l = a,
              m = Qa.isDragging,
              n = Qa.vars.allowContextMenu && a && (a.ctrlKey || a.which > 2),
              o = b.delayedCall(.001, mb);
          if (la ? (Ja(la, "touchend", sb), Ja(la, "touchmove", qb), Ja(la, "touchcancel", sb), Ja(s, "touchstart", Ma)) : Ja(s, "mousemove", qb), Ja(s, "mouseup", sb), a && a.target && Ja(a.target, "mouseup", sb), ca = !1, ka && !n) return a && (Ja(a.target, "change", sb), Qa.pointerEvent = l), Pa(Ta, !1), ia(Qa, "release", "onRelease"), ia(Qa, "click", "onClick"), void (ka = !1);
          if (Q(db), !za) for (f = Ta.length; --f > -1;) {
            ba(Ta[f], "cursor", g.cursor || "move");
          }

          if (m && (Va = J = A(), Qa.isDragging = !1), H--, a) {
            if (B && (a = $(a, !1)), e = a.changedTouches, e && (a = e[0], a !== U && a.identifier !== Y)) {
              for (f = e.length; --f > -1 && (a = e[f]).identifier !== Y;) {
                ;
              }

              if (0 > f) return;
            }

            Qa.pointerEvent = l, Qa.pointerX = a.pageX, Qa.pointerY = a.pageY;
          }

          return n && l ? (l.preventDefault(), l.preventManipulation && l.preventManipulation(), ia(Qa, "release", "onRelease")) : l && !m ? (na && (g.snap || g.bounds) && ib(g.throwProps), ia(Qa, "release", "onRelease"), I && "touchmove" === l.type || -1 !== l.type.indexOf("cancel") || (ia(Qa, "click", "onClick"), A() - bb < 300 && ia(Qa, "doubleclick", "onDoubleClick"), j = l.target || l.srcElement || d, bb = A(), k = function k() {
            bb !== va && Qa.enabled() && !Qa.isPressed && (j.click ? j.click() : s.createEvent && (i = s.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, window, 1, Qa.pointerEvent.screenX, Qa.pointerEvent.screenY, Qa.pointerX, Qa.pointerY, !1, !1, !1, !1, 0, null), j.dispatchEvent(i)));
          }, I || l.defaultPrevented || b.delayedCall(1e-5, k))) : (ib(g.throwProps), B || Qa.allowEventDefault || !l || !g.dragClickables && ab.call(Qa, l.target) || !m || ra && (!ta || ra !== ta) || l.cancelable === !1 || (l.preventDefault(), l.preventManipulation && l.preventManipulation()), ia(Qa, "release", "onRelease")), lb() && o.duration(Qa.tween.duration()), m && ia(Qa, "dragend", "onDragEnd"), !0;
        }
      },
          tb = function tb(a) {
        if (a && Qa.isDragging && !i) {
          var b = a.target || a.srcElement || d.parentNode,
              c = b.scrollLeft - b._gsScrollX,
              e = b.scrollTop - b._gsScrollY;
          (c || e) && (ma ? (j -= c * ma[0] + e * ma[2], k -= e * ma[3] + c * ma[1]) : (j -= c, k -= e), b._gsScrollX += c, b._gsScrollY += e, rb(Qa.pointerX, Qa.pointerY));
        }
      },
          ub = function ub(a) {
        var b = A(),
            c = 40 > b - bb,
            d = 40 > b - Va,
            e = c && va === bb,
            f = !!a.preventDefault,
            g = Qa.pointerEvent && Qa.pointerEvent.defaultPrevented,
            h = c && wa === bb,
            i = a.isTrusted || null == a.isTrusted && c && e;
        return f && (e || d && Qa.vars.suppressClickOnDrag !== !1) && a.stopImmediatePropagation(), !c || Qa.pointerEvent && Qa.pointerEvent.defaultPrevented || e && i === h ? void ((Qa.isPressed || d || c) && (f ? i && a.detail && c && !g || (a.preventDefault(), a.preventManipulation && a.preventManipulation()) : a.returnValue = !1)) : (i && e && (wa = bb), void (va = bb));
      },
          vb = function vb(a) {
        return ma ? {
          x: a.x * ma[0] + a.y * ma[2] + ma[4],
          y: a.x * ma[1] + a.y * ma[3] + ma[5]
        } : {
          x: a.x,
          y: a.y
        };
      };

      da = Sa.get(this.target), da && da.kill(), this.startDrag = function (a, b) {
        var c, e, f, g;
        pb(a || Qa.pointerEvent, !0), b && !Qa.hitTest(a || Qa.pointerEvent) && (c = Wa(a || Qa.pointerEvent), e = Wa(d), f = vb({
          x: c.left + c.width / 2,
          y: c.top + c.height / 2
        }), g = vb({
          x: e.left + e.width / 2,
          y: e.top + e.height / 2
        }), j -= f.x - g.x, k -= f.y - g.y), Qa.isDragging || (Qa.isDragging = !0, ia(Qa, "dragstart", "onDragStart"));
      }, this.drag = qb, this.endDrag = function (a) {
        sb(a || Qa.pointerEvent, !0);
      }, this.timeSinceDrag = function () {
        return Qa.isDragging ? 0 : (A() - Va) / 1e3;
      }, this.timeSinceClick = function () {
        return (A() - bb) / 1e3;
      }, this.hitTest = function (a, b) {
        return Sa.hitTest(Qa.target, a, b);
      }, this.getDirection = function (a, b) {
        var c,
            d,
            e,
            g,
            h,
            i,
            j = "velocity" === a && f ? a : "object" != _typeof(a) || za ? "start" : "element";
        return "element" === j && (h = Wa(Qa.target), i = Wa(a)), c = "start" === j ? Qa.x - q : "velocity" === j ? f.getVelocity(this.target, Ca) : h.left + h.width / 2 - (i.left + i.width / 2), za ? 0 > c ? "counter-clockwise" : "clockwise" : (b = b || 2, d = "start" === j ? Qa.y - r : "velocity" === j ? f.getVelocity(this.target, Da) : h.top + h.height / 2 - (i.top + i.height / 2), e = Math.abs(c / d), g = 1 / b > e ? "" : 0 > c ? "left" : "right", b > e && ("" !== g && (g += "-"), g += 0 > d ? "up" : "down"), g);
      }, this.applyBounds = function (a) {
        var b, c, e, f, h, i;
        if (a && g.bounds !== a) return g.bounds = a, Qa.update(!0);

        if (eb(!0), fb(), u) {
          if (b = Qa.x, c = Qa.y, b > x ? b = x : D > b && (b = D), c > G ? c = G : O > c && (c = O), (Qa.x !== b || Qa.y !== c) && (e = !0, Qa.x = Qa.endX = b, za ? Qa.endRotation = b : Qa.y = Qa.endY = c, ca = !0, db(!0), Qa.autoScroll && !Qa.isDragging)) for (Z(d.parentNode), f = d, L.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != t.scrollTop ? t.scrollTop : s.body.scrollTop, L.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != t.scrollLeft ? t.scrollLeft : s.body.scrollLeft; f && !i;) {
            i = X(f.parentNode), h = i ? L : f.parentNode, Fa && h.scrollTop > h._gsMaxScrollY && (h.scrollTop = h._gsMaxScrollY), Ea && h.scrollLeft > h._gsMaxScrollX && (h.scrollLeft = h._gsMaxScrollX), f = h;
          }
          Qa.isThrowing && (e || Qa.endX > x || Qa.endX < D || Qa.endY > G || Qa.endY < O) && ib(g.throwProps, e);
        }

        return Qa;
      }, this.update = function (a, b, c) {
        var e = Qa.x,
            f = Qa.y;
        return jb(!b), a ? Qa.applyBounds() : (ca && c && db(!0), eb(!0)), b && (rb(Qa.pointerX, Qa.pointerY), ca && db(!0)), Qa.isPressed && !b && (Ea && Math.abs(e - Qa.x) > .01 || Fa && Math.abs(f - Qa.y) > .01 && !za) && kb(), Qa.autoScroll && (Z(d.parentNode), Xa = Qa.isDragging, db(!0)), Qa.autoScroll && (W(d, tb), V(d, tb)), Qa;
      }, this.enable = function (a) {
        var e, j, k;

        if ("soft" !== a) {
          for (j = Ta.length; --j > -1;) {
            k = Ta[j], Ia(k, "mousedown", pb), Ia(k, "touchstart", pb), Ia(k, "click", ub, !0), za || ba(k, "cursor", g.cursor || "move"), ba(k, "touchCallout", "none"), ba(k, "touchAction", Ea === Fa ? "none" : Ea ? "pan-y" : "pan-x"), sa(k) && ba(k.ownerSVGElement || k, "touchAction", Ea === Fa ? "none" : Ea ? "pan-y" : "pan-x"), this.vars.allowContextMenu || Ia(k, "contextmenu", cb);
          }

          Pa(Ta, !1);
        }

        return V(d, tb), h = !0, f && "soft" !== a && f.track(i || d, ya ? "x,y" : za ? "rotation" : "top,left"), i && i.enable(), d._gsDragID = e = "d" + F++, E[e] = this, i && (i.element._gsDragID = e), b.set(d, {
          x: "+=0",
          overwrite: !1,
          data: "_draggable"
        }), qa = {
          t: d,
          data: B ? T : d._gsTransform,
          tween: {},
          setRatio: B ? function () {
            b.set(d, R);
          } : c._internals.setTransformRatio || c._internals.set3DTransformRatio
        }, kb(), Qa.update(!0), Qa;
      }, this.disable = function (a) {
        var b,
            c,
            e = Qa.isDragging;
        if (!za) for (b = Ta.length; --b > -1;) {
          ba(Ta[b], "cursor", null);
        }

        if ("soft" !== a) {
          for (b = Ta.length; --b > -1;) {
            c = Ta[b], ba(c, "touchCallout", null), ba(c, "touchAction", null), Ja(c, "mousedown", pb), Ja(c, "touchstart", pb), Ja(c, "click", ub), Ja(c, "contextmenu", cb);
          }

          Pa(Ta, !0), la && (Ja(la, "touchcancel", sb), Ja(la, "touchend", sb), Ja(la, "touchmove", qb)), Ja(s, "mouseup", sb), Ja(s, "mousemove", qb);
        }

        return W(d, tb), h = !1, f && "soft" !== a && f.untrack(i || d, ya ? "x,y" : za ? "rotation" : "top,left"), i && i.disable(), Q(db), Qa.isDragging = Qa.isPressed = ka = !1, e && ia(Qa, "dragend", "onDragEnd"), Qa;
      }, this.enabled = function (a, b) {
        return arguments.length ? a ? Qa.enable(b) : Qa.disable(b) : h;
      }, this.kill = function () {
        return Qa.isThrowing = !1, b.killTweensOf(i || d, !0, Ua), Qa.disable(), delete E[d._gsDragID], Qa;
      }, -1 !== xa.indexOf("scroll") && (i = this.scrollProxy = new Ra(d, S({
        onKill: function onKill() {
          Qa.isPressed && sb(null);
        }
      }, g)), d.style.overflowY = Fa && !Ga ? "auto" : "hidden", d.style.overflowX = Ea && !Ga ? "auto" : "hidden", d = i.content), g.force3D !== !1 && b.set(d, {
        force3D: !0
      }), za ? Ua.rotation = 1 : (Ea && (Ua[Ca] = 1), Fa && (Ua[Da] = 1)), za ? (R = o, T = R.css, R.overwrite = !1) : ya && (R = Ea && Fa ? l : Ea ? m : n, T = R.css, R.overwrite = !1), this.enable();
    },
        Ta = Sa.prototype = new a();

    Ta.constructor = Sa, Ta.pointerX = Ta.pointerY = Ta.startX = Ta.startY = Ta.deltaX = Ta.deltaY = 0, Ta.isDragging = Ta.isPressed = !1, Sa.version = "0.16.3", Sa.zIndex = 1e3, Ia(s, "touchcancel", function () {}), Ia(s, "contextmenu", function (a) {
      var b;

      for (b in E) {
        E[b].isPressed && E[b].endDrag();
      }
    }), Sa.create = function (a, c) {
      "string" == typeof a && (a = b.selector(a));

      for (var d = a && 0 !== a.length ? Ea(a) ? Fa(a) : [a] : [], e = d.length; --e > -1;) {
        d[e] = new Sa(d[e], c);
      }

      return d;
    }, Sa.get = function (a) {
      return E[(_(a) || {})._gsDragID];
    }, Sa.timeSinceDrag = function () {
      return (A() - J) / 1e3;
    };

    var Ua = {},
        Va = function Va(a) {
      var b,
          c,
          d = 0,
          e = 0;

      for (a = _(a), b = a.offsetWidth, c = a.offsetHeight; a;) {
        d += a.offsetTop, e += a.offsetLeft, a = a.offsetParent;
      }

      return {
        top: d,
        left: e,
        width: b,
        height: c
      };
    },
        Wa = function Wa(a, b) {
      if (a === window) return Ua.left = Ua.top = 0, Ua.width = Ua.right = t.clientWidth || a.innerWidth || s.body.clientWidth || 0, Ua.height = Ua.bottom = (a.innerHeight || 0) - 20 < t.clientHeight ? t.clientHeight : a.innerHeight || s.body.clientHeight || 0, Ua;
      var c = a.pageX !== b ? {
        left: a.pageX - U(),
        top: a.pageY - T(),
        right: a.pageX - U() + 1,
        bottom: a.pageY - T() + 1
      } : a.nodeType || a.left === b || a.top === b ? B ? Va(a) : _(a).getBoundingClientRect() : a;
      return c.right === b && c.width !== b ? (c.right = c.left + c.width, c.bottom = c.top + c.height) : c.width === b && (c = {
        width: c.right - c.left,
        height: c.bottom - c.top,
        right: c.right,
        left: c.left,
        bottom: c.bottom,
        top: c.top
      }), c;
    };

    return Sa.hitTest = function (a, b, c) {
      if (a === b) return !1;
      var d,
          e,
          f,
          g = Wa(a),
          h = Wa(b),
          i = h.left > g.right || h.right < g.left || h.top > g.bottom || h.bottom < g.top;
      return i || !c ? !i : (f = -1 !== (c + "").indexOf("%"), c = parseFloat(c) || 0, d = {
        left: Math.max(g.left, h.left),
        top: Math.max(g.top, h.top)
      }, d.width = Math.min(g.right, h.right) - d.left, d.height = Math.min(g.bottom, h.bottom) - d.top, d.width < 0 || d.height < 0 ? !1 : f ? (c *= .01, e = d.width * d.height, e >= g.width * g.height * c || e >= h.width * h.height * c) : d.width > c && d.height > c);
    }, C.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Sa;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
  "use strict";

  var b = function b() {
    return (_gsScope.GreenSockGlobals || _gsScope)[a];
  };

  "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), require("../TimelineLite.min.js"), require("../plugins/CSSPlugin.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite", "TimelineLite", "CSSPlugin"], b);
}("GSDevTools");
},{"../TweenLite.min.js":"js/gsap/minified/TweenLite.min.js","../TimelineLite.min.js":"js/gsap/minified/TimelineLite.min.js","../plugins/CSSPlugin.min.js":"js/gsap/minified/plugins/CSSPlugin.min.js"}],"C:/Users/martijn.de.valk/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51359" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/martijn.de.valk/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/gsap/minified/utils/GSDevTools.min.js"], null)
//# sourceMappingURL=/GSDevTools.min.683bbea2.map