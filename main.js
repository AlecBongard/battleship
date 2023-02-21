(() => {
  var t = {
      426: (t, e, r) => {
        "use strict";
        r.d(e, { Z: () => c });
        var n = r(81),
          o = r.n(n),
          a = r(645),
          s = r.n(a)()(o());
        s.push([
          t.id,
          ".test {\n  height: 50px;\n  width: 50px;\n  background-color: red;\n}\n",
          "",
        ]);
        const c = s;
      },
      645: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = "",
                  n = void 0 !== e[5];
                return (
                  e[4] && (r += "@supports (".concat(e[4], ") {")),
                  e[2] && (r += "@media ".concat(e[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (r += t(e)),
                  n && (r += "}"),
                  e[2] && (r += "}"),
                  e[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (e.i = function (t, r, n, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var s = {};
              if (n)
                for (var c = 0; c < this.length; c++) {
                  var i = this[c][0];
                  null != i && (s[i] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var l = [].concat(t[u]);
                (n && s[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = r))
                      : (l[2] = r)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        "use strict";
        var e = [];
        function r(t) {
          for (var r = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              r = n;
              break;
            }
          return r;
        }
        function n(t, n) {
          for (var a = {}, s = [], c = 0; c < t.length; c++) {
            var i = t[c],
              u = n.base ? i[0] + n.base : i[0],
              l = a[u] || 0,
              d = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var p = r(d),
              f = {
                css: i[1],
                media: i[2],
                sourceMap: i[3],
                supports: i[4],
                layer: i[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var h = o(f, n);
              (n.byIndex = c),
                e.splice(c, 0, { identifier: d, updater: h, references: 1 });
            }
            s.push(d);
          }
          return s;
        }
        function o(t, e) {
          var r = e.domAPI(e);
          return (
            r.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                r.update((t = e));
              } else r.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = n((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var s = 0; s < a.length; s++) {
              var c = r(a[s]);
              e[c].references--;
            }
            for (var i = n(t, o), u = 0; u < a.length; u++) {
              var l = r(a[u]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = i;
          };
        };
      },
      569: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, r) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var r = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (t) {
                  r = null;
                }
              e[t] = r;
            }
            return e[t];
          })(t);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      216: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, r) => {
        "use strict";
        t.exports = function (t) {
          var e = r.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (r) {
              !(function (t, e, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  o && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(n, t, e.options);
              })(e, t, r);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      181: (t) => {
        document.querySelector(".board");
        const e = document.querySelector(".map");
        document.querySelector(".own-board"),
          (t.exports = () => ({
            drawBoard: function () {
              for (let t = 0; t < 100; t += 1) {
                const r = document.createElement("div");
                r.classList.add("map-square");
                const n = Math.floor(t / 10),
                  o = t % 10;
                r.setAttribute("data-mapcoord", `[${n}, ${o}]`),
                  e.appendChild(r);
              }
              for (let t = 0; t < 100; t += 1) {
                const r = document.createElement("div");
                r.classList.add("board-square");
                const n = Math.floor(t / 10),
                  o = t % 10;
                r.setAttribute("data-boardcoord", `[${n}, ${o}]`),
                  e.appendChild(r);
              }
            },
          }));
      },
      498: (t, e, r) => {
        const n = r(497);
        t.exports = () => {
          const t = [];
          return (
            (function () {
              for (let e = 0; e < 10; e += 1) t[e] = new Array(10).fill(null);
            })(),
            {
              board: t,
              placeShip: function (e, r, o) {
                const a = [...r, ...o];
                for (let t = 0; t < a.length; t += 1)
                  if (a[t] > 10 || a[t] < 0) return "Invalid ship placement";
                const s = n(e);
                for (let e = r[0]; o[0] - e >= 0; e += 1)
                  for (let n = r[1]; o[1] - n >= 0; n += 1)
                    t[e][n] = { ship: s, isHit: !1 };
                return "Ship placed";
              },
              receiveAttack: function (e) {
                const r = t[e[0]][e[1]];
                if (!r) return (t[e[0]][e[1]] = "miss"), "Miss";
                if ("miss" === r)
                  return "Invalid attack: square has already been attacked";
                if ("object" == typeof r && r.isHit)
                  return "Invalid attack: square has already been attacked";
                r.isHit = !0;
                const n = r.ship.hit();
                return (function () {
                  let e = !0;
                  return (
                    t.forEach((t) => {
                      t.forEach((t) => {
                        t && "object" == typeof t && !1 === t.isHit && (e = !1);
                      });
                    }),
                    e
                  );
                })()
                  ? "All ships have been sunk."
                  : n;
              },
            }
          );
        };
      },
      507: (t) => {
        t.exports = (t) => {
          const e = [];
          function r(t, r) {
            const n = t.receiveAttack(r);
            return (e[r[0]][r[1]] = "Miss" === n ? n.toLowerCase() : "hit"), n;
          }
          !(function () {
            for (let t = 0; t < 10; t += 1) e[t] = new Array(10).fill(null);
          })();
          const n = (() => {
            const t = [];
            for (let e = 0; e < 10; e += 1)
              for (let r = 0; r < 10; r += 1) t.push([e, r]);
            return t;
          })();
          return {
            map: e,
            attack: r,
            comMove: function (t) {
              const e = Math.floor(Math.random() * n.length),
                o = n[e];
              return n.splice(e, 1), r(t, o);
            },
          };
        };
      },
      497: (t) => {
        t.exports = (t) => {
          let e = 0;
          return {
            hit: function () {
              return (e += 1), e >= t ? "You sunk my battleship" : "Hit";
            },
          };
        };
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var a = (e[n] = { id: n, exports: {} });
    return t[n](a, a.exports, r), a.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.nc = void 0),
    (() => {
      "use strict";
      var t = r(379),
        e = r.n(t),
        n = r(795),
        o = r.n(n),
        a = r(569),
        s = r.n(a),
        c = r(565),
        i = r.n(c),
        u = r(216),
        l = r.n(u),
        d = r(589),
        p = r.n(d),
        f = r(426),
        h = {};
      (h.styleTagTransform = p()),
        (h.setAttributes = i()),
        (h.insert = s().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        e()(f.Z, h),
        f.Z && f.Z.locals && f.Z.locals,
        r(497),
        r(498),
        r(507),
        r(181)().drawBoard();
    })();
})();
