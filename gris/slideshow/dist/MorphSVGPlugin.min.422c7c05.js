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
},{}],"js/gsap/minified/plugins/MorphSVGPlugin.min.js":[function(require,module,exports) {
var global = arguments[3];
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * VERSION: 0.8.11
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  var a = Math.PI / 180,
      b = 180 / Math.PI,
      c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      d = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      e = /(^[#\.][a-z]|[a-y][a-z])/gi,
      f = /[achlmqstvz]/gi,
      g = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      h = _gsScope._gsDefine.globals.TweenLite,
      i = function i(a) {
    _gsScope.console && console.log(a);
  },
      j = function j(b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j = Math.ceil(Math.abs(c) / 90),
        k = 0,
        l = [];

    for (b *= a, c *= a, d = c / j, e = 4 / 3 * Math.sin(d / 2) / (1 + Math.cos(d / 2)), i = 0; j > i; i++) {
      f = b + i * d, g = Math.cos(f), h = Math.sin(f), l[k++] = g - e * h, l[k++] = h + e * g, f += d, g = Math.cos(f), h = Math.sin(f), l[k++] = g + e * h, l[k++] = h - e * g, l[k++] = g, l[k++] = h;
    }

    return l;
  },
      k = function k(c, d, e, f, g, h, i, _k, l) {
    if (c !== _k || d !== l) {
      e = Math.abs(e), f = Math.abs(f);
      var m = g % 360 * a,
          n = Math.cos(m),
          o = Math.sin(m),
          p = (c - _k) / 2,
          q = (d - l) / 2,
          r = n * p + o * q,
          s = -o * p + n * q,
          t = e * e,
          u = f * f,
          v = r * r,
          w = s * s,
          x = v / t + w / u;
      x > 1 && (e = Math.sqrt(x) * e, f = Math.sqrt(x) * f, t = e * e, u = f * f);
      var y = h === i ? -1 : 1,
          z = (t * u - t * w - u * v) / (t * w + u * v);
      0 > z && (z = 0);
      var A = y * Math.sqrt(z),
          B = A * (e * s / f),
          C = A * -(f * r / e),
          D = (c + _k) / 2,
          E = (d + l) / 2,
          F = D + (n * B - o * C),
          G = E + (o * B + n * C),
          H = (r - B) / e,
          I = (s - C) / f,
          J = (-r - B) / e,
          K = (-s - C) / f,
          L = Math.sqrt(H * H + I * I),
          M = H;
      y = 0 > I ? -1 : 1;
      var N = y * Math.acos(M / L) * b;
      L = Math.sqrt((H * H + I * I) * (J * J + K * K)), M = H * J + I * K, y = 0 > H * K - I * J ? -1 : 1;
      var O = y * Math.acos(M / L) * b;
      !i && O > 0 ? O -= 360 : i && 0 > O && (O += 360), O %= 360, N %= 360;
      var P,
          Q,
          R,
          S = j(N, O),
          T = n * e,
          U = o * e,
          V = o * -f,
          W = n * f,
          X = S.length - 2;

      for (P = 0; X > P; P += 2) {
        Q = S[P], R = S[P + 1], S[P] = Q * T + R * V + F, S[P + 1] = Q * U + R * W + G;
      }

      return S[S.length - 2] = _k, S[S.length - 1] = l, S;
    }
  },
      l = function l(a) {
    var b,
        d,
        e,
        f,
        h,
        j,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = (a + "").replace(g, function (a) {
      var b = +a;
      return 1e-4 > b && b > -1e-4 ? 0 : b;
    }).match(c) || [],
        t = [],
        u = 0,
        v = 0,
        w = s.length,
        x = 2,
        y = 0;
    if (!a || !isNaN(s[0]) || isNaN(s[1])) return i("ERROR: malformed path data: " + a), t;

    for (b = 0; w > b; b++) {
      if (r = h, isNaN(s[b]) ? (h = s[b].toUpperCase(), j = h !== s[b]) : b--, e = +s[b + 1], f = +s[b + 2], j && (e += u, f += v), 0 === b && (m = e, n = f), "M" === h) l && l.length < 8 && (t.length -= 1, x = 0), u = m = e, v = n = f, l = [e, f], y += x, x = 2, t.push(l), b += 2, h = "L";else if ("C" === h) l || (l = [0, 0]), l[x++] = e, l[x++] = f, j || (u = v = 0), l[x++] = u + 1 * s[b + 3], l[x++] = v + 1 * s[b + 4], l[x++] = u += 1 * s[b + 5], l[x++] = v += 1 * s[b + 6], b += 6;else if ("S" === h) "C" === r || "S" === r ? (o = u - l[x - 4], p = v - l[x - 3], l[x++] = u + o, l[x++] = v + p) : (l[x++] = u, l[x++] = v), l[x++] = e, l[x++] = f, j || (u = v = 0), l[x++] = u += 1 * s[b + 3], l[x++] = v += 1 * s[b + 4], b += 4;else if ("Q" === h) o = e - u, p = f - v, l[x++] = u + 2 * o / 3, l[x++] = v + 2 * p / 3, j || (u = v = 0), u += 1 * s[b + 3], v += 1 * s[b + 4], o = e - u, p = f - v, l[x++] = u + 2 * o / 3, l[x++] = v + 2 * p / 3, l[x++] = u, l[x++] = v, b += 4;else if ("T" === h) o = u - l[x - 4], p = v - l[x - 3], l[x++] = u + o, l[x++] = v + p, o = u + 1.5 * o - e, p = v + 1.5 * p - f, l[x++] = e + 2 * o / 3, l[x++] = f + 2 * p / 3, l[x++] = u = e, l[x++] = v = f, b += 2;else if ("H" === h) f = v, l[x++] = u + (e - u) / 3, l[x++] = v + (f - v) / 3, l[x++] = u + 2 * (e - u) / 3, l[x++] = v + 2 * (f - v) / 3, l[x++] = u = e, l[x++] = f, b += 1;else if ("V" === h) f = e, e = u, j && (f += v - u), l[x++] = e, l[x++] = v + (f - v) / 3, l[x++] = e, l[x++] = v + 2 * (f - v) / 3, l[x++] = e, l[x++] = v = f, b += 1;else if ("L" === h || "Z" === h) "Z" === h && (e = m, f = n, l.closed = !0), ("L" === h || Math.abs(u - e) > .5 || Math.abs(v - f) > .5) && (l[x++] = u + (e - u) / 3, l[x++] = v + (f - v) / 3, l[x++] = u + 2 * (e - u) / 3, l[x++] = v + 2 * (f - v) / 3, l[x++] = e, l[x++] = f, "L" === h && (b += 2)), u = e, v = f;else if ("A" === h) {
        if (q = k(u, v, 1 * s[b + 1], 1 * s[b + 2], 1 * s[b + 3], 1 * s[b + 4], 1 * s[b + 5], (j ? u : 0) + 1 * s[b + 6], (j ? v : 0) + 1 * s[b + 7])) for (d = 0; d < q.length; d++) {
          l[x++] = q[d];
        }
        u = l[x - 2], v = l[x - 1], b += 7;
      } else i("Error: malformed path data: " + a);
    }

    return t.totalPoints = y + x, t;
  },
      m = function m(a, b) {
    var c,
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
        n,
        o,
        p,
        q = 0,
        r = .999999,
        s = a.length,
        t = b / ((s - 2) / 6);

    for (o = 2; s > o; o += 6) {
      for (q += t; q > r;) {
        c = a[o - 2], d = a[o - 1], e = a[o], f = a[o + 1], g = a[o + 2], h = a[o + 3], i = a[o + 4], j = a[o + 5], p = 1 / (Math.floor(q) + 1), k = c + (e - c) * p, m = e + (g - e) * p, k += (m - k) * p, m += (g + (i - g) * p - m) * p, l = d + (f - d) * p, n = f + (h - f) * p, l += (n - l) * p, n += (h + (j - h) * p - n) * p, a.splice(o, 4, c + (e - c) * p, d + (f - d) * p, k, l, k + (m - k) * p, l + (n - l) * p, m, n, g + (i - g) * p, h + (j - h) * p), o += 6, s += 6, q--;
      }
    }

    return a;
  },
      n = function n(a) {
    var b,
        c,
        d,
        e,
        f = "",
        g = a.length,
        h = 100;

    for (c = 0; g > c; c++) {
      for (e = a[c], f += "M" + e[0] + "," + e[1] + " C", b = e.length, d = 2; b > d; d++) {
        f += (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d] * h | 0) / h + " ";
      }

      e.closed && (f += "z");
    }

    return f;
  },
      o = function o(a) {
    for (var b = [], c = a.length - 1, d = 0; --c > -1;) {
      b[d++] = a[c], b[d++] = a[c + 1], c--;
    }

    for (c = 0; d > c; c++) {
      a[c] = b[c];
    }

    a.reversed = a.reversed ? !1 : !0;
  },
      p = function p(a) {
    var b,
        c = a.length,
        d = 0,
        e = 0;

    for (b = 0; c > b; b++) {
      d += a[b++], e += a[b];
    }

    return [d / (c / 2), e / (c / 2)];
  },
      q = function q(a) {
    var b,
        c,
        d,
        e = a.length,
        f = a[0],
        g = f,
        h = a[1],
        i = h;

    for (d = 6; e > d; d += 6) {
      b = a[d], c = a[d + 1], b > f ? f = b : g > b && (g = b), c > h ? h = c : i > c && (i = c);
    }

    return a.centerX = (f + g) / 2, a.centerY = (h + i) / 2, a.size = (f - g) * (h - i);
  },
      r = function r(a) {
    for (var b, c, d, e, f, g = a.length, h = a[0][0], i = h, j = a[0][1], k = j; --g > -1;) {
      for (f = a[g], b = f.length, e = 6; b > e; e += 6) {
        c = f[e], d = f[e + 1], c > h ? h = c : i > c && (i = c), d > j ? j = d : k > d && (k = d);
      }
    }

    return a.centerX = (h + i) / 2, a.centerY = (j + k) / 2, a.size = (h - i) * (j - k);
  },
      s = function s(a, b) {
    return b.length - a.length;
  },
      t = function t(a, b) {
    var c = a.size || q(a),
        d = b.size || q(b);
    return Math.abs(d - c) < (c + d) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : d - c;
  },
      u = function u(a, b) {
    var c,
        d,
        e = a.slice(0),
        f = a.length,
        g = f - 2;

    for (b = 0 | b, c = 0; f > c; c++) {
      d = (c + b) % g, a[c++] = e[d], a[c] = e[d + 1];
    }
  },
      v = function v(a, b, c, d, e) {
    var f,
        g,
        h,
        i,
        j = a.length,
        k = 0,
        l = j - 2;

    for (c *= 6, g = 0; j > g; g += 6) {
      f = (g + c) % l, i = a[f] - (b[g] - d), h = a[f + 1] - (b[g + 1] - e), k += Math.sqrt(h * h + i * i);
    }

    return k;
  },
      w = function w(a, b, c) {
    var d,
        e,
        f,
        g = a.length,
        h = p(a),
        i = p(b),
        j = i[0] - h[0],
        k = i[1] - h[1],
        l = v(a, b, 0, j, k),
        m = 0;

    for (f = 6; g > f; f += 6) {
      e = v(a, b, f / 6, j, k), l > e && (l = e, m = f);
    }

    if (c) for (d = a.slice(0), o(d), f = 6; g > f; f += 6) {
      e = v(d, b, f / 6, j, k), l > e && (l = e, m = -f);
    }
    return m / 6;
  },
      x = function x(a, b, c) {
    for (var d, e, f, g, h, i, j = a.length, k = 99999999999, l = 0, m = 0; --j > -1;) {
      for (d = a[j], i = d.length, h = 0; i > h; h += 6) {
        e = d[h] - b, f = d[h + 1] - c, g = Math.sqrt(e * e + f * f), k > g && (k = g, l = d[h], m = d[h + 1]);
      }
    }

    return [l, m];
  },
      y = function y(a, b, c, d, e, f) {
    var g,
        h,
        i,
        j,
        k,
        l = b.length,
        m = 0,
        n = Math.min(a.size || q(a), b[c].size || q(b[c])) * d,
        o = 999999999999,
        p = a.centerX + e,
        r = a.centerY + f;

    for (h = c; l > h && (g = b[h].size || q(b[h]), !(n > g)); h++) {
      i = b[h].centerX - p, j = b[h].centerY - r, k = Math.sqrt(i * i + j * j), o > k && (m = h, o = k);
    }

    return k = b[m], b.splice(m, 1), k;
  },
      z = function z(a, b, c, d) {
    var e,
        f,
        g,
        h,
        j,
        k,
        l,
        n = b.length - a.length,
        p = n > 0 ? b : a,
        v = n > 0 ? a : b,
        z = 0,
        A = "complexity" === d ? s : t,
        B = "position" === d ? 0 : "number" == typeof d ? d : .8,
        C = v.length,
        D = "object" == _typeof(c) && c.push ? c.slice(0) : [c],
        E = "reverse" === D[0] || D[0] < 0,
        F = "log" === c;

    if (v[0]) {
      if (p.length > 1 && (a.sort(A), b.sort(A), k = p.size || r(p), k = v.size || r(v), k = p.centerX - v.centerX, l = p.centerY - v.centerY, A === t)) for (C = 0; C < v.length; C++) {
        p.splice(C, 0, y(v[C], p, C, B, k, l));
      }
      if (n) for (0 > n && (n = -n), p[0].length > v[0].length && m(v[0], (p[0].length - v[0].length) / 6 | 0), C = v.length; n > z;) {
        h = p[C].size || q(p[C]), g = x(v, p[C].centerX, p[C].centerY), h = g[0], j = g[1], v[C++] = [h, j, h, j, h, j, h, j], v.totalPoints += 8, z++;
      }

      for (C = 0; C < a.length; C++) {
        e = b[C], f = a[C], n = e.length - f.length, 0 > n ? m(e, -n / 6 | 0) : n > 0 && m(f, n / 6 | 0), E && !f.reversed && o(f), c = D[C] || 0 === D[C] ? D[C] : "auto", c && (f.closed || Math.abs(f[0] - f[f.length - 2]) < .5 && Math.abs(f[1] - f[f.length - 1]) < .5 ? "auto" === c || "log" === c ? (D[C] = c = w(f, e, 0 === C), 0 > c && (E = !0, o(f), c = -c), u(f, 6 * c)) : "reverse" !== c && (C && 0 > c && o(f), u(f, 6 * (0 > c ? -c : c))) : !E && ("auto" === c && Math.abs(e[0] - f[0]) + Math.abs(e[1] - f[1]) + Math.abs(e[e.length - 2] - f[f.length - 2]) + Math.abs(e[e.length - 1] - f[f.length - 1]) > Math.abs(e[0] - f[f.length - 2]) + Math.abs(e[1] - f[f.length - 1]) + Math.abs(e[e.length - 2] - f[0]) + Math.abs(e[e.length - 1] - f[1]) || c % 2) ? (o(f), D[C] = -1, E = !0) : "auto" === c ? D[C] = 0 : "reverse" === c && (D[C] = -1), f.closed !== e.closed && (f.closed = e.closed = !1));
      }

      return F && i("shapeIndex:[" + D.join(",") + "]"), D;
    }
  },
      A = function A(a, b, c, d) {
    var e = l(a[0]),
        f = l(a[1]);
    z(e, f, b || 0 === b ? b : "auto", c) && (a[0] = n(e), a[1] = n(f), ("log" === d || d === !0) && i('precompile:["' + a[0] + '","' + a[1] + '"]'));
  },
      B = function B(a, b, c) {
    return b || c || a || 0 === a ? function (d) {
      A(d, a, b, c);
    } : A;
  },
      C = function C(a, b) {
    if (!b) return a;
    var c,
        e,
        f,
        g = a.match(d) || [],
        h = g.length,
        i = "";

    for ("reverse" === b ? (e = h - 1, c = -2) : (e = (2 * (parseInt(b, 10) || 0) + 1 + 100 * h) % h, c = 2), f = 0; h > f; f += 2) {
      i += g[e - 1] + "," + g[e] + " ", e = (e + c) % h;
    }

    return i;
  },
      D = function D(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = 0,
        k = parseFloat(a[0]),
        l = parseFloat(a[1]),
        m = k + "," + l + " ",
        n = .999999;

    for (e = a.length, c = .5 * b / (.5 * e - 1), d = 0; e - 2 > d; d += 2) {
      if (j += c, h = parseFloat(a[d + 2]), i = parseFloat(a[d + 3]), j > n) for (g = 1 / (Math.floor(j) + 1), f = 1; j > n;) {
        m += (k + (h - k) * g * f).toFixed(2) + "," + (l + (i - l) * g * f).toFixed(2) + " ", j--, f++;
      }
      m += h + "," + i + " ", k = h, l = i;
    }

    return m;
  },
      E = function E(a) {
    var b = a[0].match(d) || [],
        c = a[1].match(d) || [],
        e = c.length - b.length;
    e > 0 ? a[0] = D(b, e) : a[1] = D(c, -e);
  },
      F = function F(a) {
    return isNaN(a) ? E : function (b) {
      E(b), b[1] = C(b[1], parseInt(a, 10));
    };
  },
      G = function G(a, b) {
    var c,
        d = _gsScope.document.createElementNS("http://www.w3.org/2000/svg", "path"),
        e = Array.prototype.slice.call(a.attributes),
        f = e.length;

    for (b = "," + b + ","; --f > -1;) {
      c = e[f].nodeName.toLowerCase(), -1 === b.indexOf("," + c + ",") && d.setAttributeNS(null, c, e[f].nodeValue);
    }

    return d;
  },
      H = function H(a, b) {
    var c,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
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
        z,
        A = a.tagName.toLowerCase(),
        B = .552284749831;
    return "path" !== A && a.getBBox ? (i = G(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === A ? (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, e = +a.getAttribute("x") || 0, f = +a.getAttribute("y") || 0, o = (+a.getAttribute("width") || 0) - 2 * g, p = (+a.getAttribute("height") || 0) - 2 * h, g || h ? (q = e + g * (1 - B), r = e + g, s = r + o, t = s + g * B, u = s + g, v = f + h * (1 - B), w = f + h, x = w + p, y = x + h * B, z = x + h, c = "M" + u + "," + w + " V" + x + " C" + [u, y, t, z, s, z, s - (s - r) / 3, z, r + (s - r) / 3, z, r, z, q, z, e, y, e, x, e, x - (x - w) / 3, e, w + (x - w) / 3, e, w, e, v, q, f, r, f, r + (s - r) / 3, f, s - (s - r) / 3, f, s, f, t, f, u, v, u, w].join(",") + "z") : c = "M" + (e + o) + "," + f + " v" + p + " h" + -o + " v" + -p + " h" + o + "z") : "circle" === A || "ellipse" === A ? ("circle" === A ? (g = h = +a.getAttribute("r") || 0, k = g * B) : (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, k = h * B), e = +a.getAttribute("cx") || 0, f = +a.getAttribute("cy") || 0, j = g * B, c = "M" + (e + g) + "," + f + " C" + [e + g, f + k, e + j, f + h, e, f + h, e - j, f + h, e - g, f + k, e - g, f, e - g, f - k, e - j, f - h, e, f - h, e + j, f - h, e + g, f - k, e + g, f].join(",") + "z") : "line" === A ? c = n(l("M" + (a.getAttribute("x1") || 0) + "," + (a.getAttribute("y1") || 0) + " L" + (a.getAttribute("x2") || 0) + "," + (a.getAttribute("y2") || 0))) : ("polyline" === A || "polygon" === A) && (m = (a.getAttribute("points") + "").match(d) || [], e = m.shift(), f = m.shift(), c = "M" + e + "," + f + " L" + m.join(","), "polygon" === A && (c += "," + e + "," + f + "z")), i.setAttribute("d", c), b && a.parentNode && (a.parentNode.insertBefore(i, a), a.parentNode.removeChild(a)), i) : a;
  },
      I = function I(a, b, c) {
    var f,
        g,
        j = "string" == typeof a;
    return (!j || e.test(a) || (a.match(d) || []).length < 3) && (f = j ? h.selector(a) : a && a[0] ? a : [a], f && f[0] ? (f = f[0], g = f.nodeName.toUpperCase(), b && "PATH" !== g && (f = H(f, !1), g = "PATH"), a = f.getAttribute("PATH" === g ? "d" : "points") || "", f === c && (a = f.getAttributeNS(null, "data-original") || a)) : (i("WARNING: invalid morph to: " + a), a = !1)), a;
  },
      J = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
      K = _gsScope._gsDefine.plugin({
    propName: "morphSVG",
    API: 2,
    global: !0,
    version: "0.8.11",
    init: function init(a, b, c, d) {
      var e, g, h, j, k;
      return "function" != typeof a.setAttribute ? !1 : ("function" == typeof b && (b = b(d, a)), e = a.nodeName.toUpperCase(), k = "POLYLINE" === e || "POLYGON" === e, "PATH" === e || k ? (g = "PATH" === e ? "d" : "points", ("string" == typeof b || b.getBBox || b[0]) && (b = {
        shape: b
      }), j = I(b.shape || b.d || b.points || "", "d" === g, a), k && f.test(j) ? (i("WARNING: a <" + e + "> cannot accept path data. " + J), !1) : (j && (this._target = a, a.getAttributeNS(null, "data-original") || a.setAttributeNS(null, "data-original", a.getAttribute(g)), h = this._addTween(a, "setAttribute", a.getAttribute(g) + "", j + "", "morphSVG", !1, g, "object" == _typeof(b.precompile) ? function (a) {
        a[0] = b.precompile[0], a[1] = b.precompile[1];
      } : "d" === g ? B(b.shapeIndex, b.map || K.defaultMap, b.precompile) : F(b.shapeIndex)), h && (this._overwriteProps.push("morphSVG"), h.end = j, h.endProp = g)), !0)) : (i("WARNING: cannot morph a <" + e + "> SVG element. " + J), !1));
    },
    set: function set(a) {
      var b;
      if (this._super.setRatio.call(this, a), 1 === a) for (b = this._firstPT; b;) {
        b.end && this._target.setAttribute(b.endProp, b.end), b = b._next;
      }
    }
  });

  K.pathFilter = A, K.pointsFilter = E, K.subdivideRawBezier = m, K.defaultMap = "size", K.pathDataToRawBezier = function (a) {
    return l(I(a, !0));
  }, K.equalizeSegmentQuantity = z, K.convertToPath = function (a, b) {
    "string" == typeof a && (a = h.selector(a));

    for (var c = a && 0 !== a.length ? a.length && a[0] && a[0].nodeType ? Array.prototype.slice.call(a, 0) : [a] : [], d = c.length; --d > -1;) {
      c[d] = H(c[d], b !== !1);
    }

    return c;
  }, K.pathDataToBezier = function (a, b) {
    var c,
        d,
        e,
        f,
        g,
        i,
        j,
        k,
        m = l(I(a, !0))[0] || [],
        n = 0;
    if (b = b || {}, k = b.align || b.relative, f = b.matrix || [1, 0, 0, 1, 0, 0], g = b.offsetX || 0, i = b.offsetY || 0, "relative" === k || k === !0 ? (g -= m[0] * f[0] + m[1] * f[2], i -= m[0] * f[1] + m[1] * f[3], n = "+=") : (g += f[4], i += f[5], k && (k = "string" == typeof k ? h.selector(k) : k && k[0] ? k : [k], k && k[0] && (j = k[0].getBBox() || {
      x: 0,
      y: 0
    }, g -= j.x, i -= j.y))), c = [], e = m.length, f && "1,0,0,1,0,0" !== f.join(",")) for (d = 0; e > d; d += 2) {
      c.push({
        x: n + (m[d] * f[0] + m[d + 1] * f[2] + g),
        y: n + (m[d] * f[1] + m[d + 1] * f[3] + i)
      });
    } else for (d = 0; e > d; d += 2) {
      c.push({
        x: n + (m[d] + g),
        y: n + (m[d + 1] + i)
      });
    }
    return c;
  };
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (a) {
  "use strict";

  var b = function b() {
    return (_gsScope.GreenSockGlobals || _gsScope)[a];
  };

  "undefined" != typeof module && module.exports ? (require("../TweenLite.min.js"), module.exports = b()) : "function" == typeof define && define.amd && define(["TweenLite"], b);
}("MorphSVGPlugin");
},{"../TweenLite.min.js":"js/gsap/minified/TweenLite.min.js"}],"C:/Users/martijn.de.valk/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["C:/Users/martijn.de.valk/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/gsap/minified/plugins/MorphSVGPlugin.min.js"], null)
//# sourceMappingURL=/MorphSVGPlugin.min.422c7c05.map