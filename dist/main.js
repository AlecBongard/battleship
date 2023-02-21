(() => {
  var e = {
      426: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => i });
        var n = r(81),
          o = r.n(n),
          a = r(645),
          s = r.n(a)()(o());
        s.push([
          e.id,
          ":root{\n  --view-size: calc(100vw / 3);\n  --square-size: calc(var(--view-size) / 10);\n}\n\n.test {\n  height: 50px;\n  width: 50px;\n  background-color: red;\n}\n\n.board{\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n}\n\n.map{\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.map-square{\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: 1px solid black;\n  background-color: red;\n}\n\n.own-board{\n  height: var(--view-size);\n  width: var(--view-size);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.board-square{\n  box-sizing: border-box;\n  height: var(--square-size);\n  width: var(--square-size);\n  border: 1px solid black;\n  background-color: red;\n}\n\n\n",
          "",
        ]);
        const i = s;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (r += "@supports (".concat(t[4], ") {")),
                  t[2] && (r += "@media ".concat(t[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (r += e(t)),
                  n && (r += "}"),
                  t[2] && (r += "}"),
                  t[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (t.i = function (e, r, n, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (s[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
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
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        "use strict";
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var a = {}, s = [], i = 0; i < e.length; i++) {
            var c = e[i],
              u = n.base ? c[0] + n.base : c[0],
              l = a[u] || 0,
              d = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var p = r(d),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var v = o(f, n);
              (n.byIndex = i),
                t.splice(i, 0, { identifier: d, updater: v, references: 1 });
            }
            s.push(d);
          }
          return s;
        }
        function o(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < a.length; s++) {
              var i = r(a[s]);
              t[i].references--;
            }
            for (var c = n(e, o), u = 0; u < a.length; u++) {
              var l = r(a[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, r) => {
        "use strict";
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
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
                  t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      181: (e) => {
        document.querySelector(".board");
        const t = document.querySelector(".map"),
          r = document.querySelector(".own-board");
        e.exports = () => ({
          drawBoard: function () {
            for (let e = 0; e < 100; e += 1) {
              const r = document.createElement("div");
              r.classList.add("map-square");
              const n = Math.floor(e / 10),
                o = e % 10;
              r.setAttribute("data-mapcoord", `[${n}, ${o}]`), t.appendChild(r);
            }
            for (let e = 0; e < 100; e += 1) {
              const t = document.createElement("div");
              t.classList.add("board-square");
              const n = Math.floor(e / 10),
                o = e % 10;
              t.setAttribute("data-boardcoord", `[${n}, ${o}]`),
                r.appendChild(t);
            }
          },
        });
      },
      498: (e, t, r) => {
        const n = r(497);
        e.exports = () => {
          const e = [];
          return (
            (function () {
              for (let t = 0; t < 10; t += 1) e[t] = new Array(10).fill(null);
            })(),
            {
              board: e,
              placeShip: function (t, r, o) {
                const a = [...r, ...o];
                for (let e = 0; e < a.length; e += 1)
                  if (a[e] > 10 || a[e] < 0) return "Invalid ship placement";
                const s = n(t);
                for (let t = r[0]; o[0] - t >= 0; t += 1)
                  for (let n = r[1]; o[1] - n >= 0; n += 1)
                    e[t][n] = { ship: s, isHit: !1 };
                return "Ship placed";
              },
              receiveAttack: function (t) {
                const r = e[t[0]][t[1]];
                if (!r) return (e[t[0]][t[1]] = "miss"), "Miss";
                if ("miss" === r)
                  return "Invalid attack: square has already been attacked";
                if ("object" == typeof r && r.isHit)
                  return "Invalid attack: square has already been attacked";
                r.isHit = !0;
                const n = r.ship.hit();
                return (function () {
                  let t = !0;
                  return (
                    e.forEach((e) => {
                      e.forEach((e) => {
                        e && "object" == typeof e && !1 === e.isHit && (t = !1);
                      });
                    }),
                    t
                  );
                })()
                  ? "All ships have been sunk."
                  : n;
              },
            }
          );
        };
      },
      507: (e) => {
        e.exports = (e) => {
          const t = [];
          function r(e, r) {
            const n = e.receiveAttack(r);
            return (t[r[0]][r[1]] = "Miss" === n ? n.toLowerCase() : "hit"), n;
          }
          !(function () {
            for (let e = 0; e < 10; e += 1) t[e] = new Array(10).fill(null);
          })();
          const n = (() => {
            const e = [];
            for (let t = 0; t < 10; t += 1)
              for (let r = 0; r < 10; r += 1) e.push([t, r]);
            return e;
          })();
          return {
            map: t,
            attack: r,
            comMove: function (e) {
              const t = Math.floor(Math.random() * n.length),
                o = n[t];
              return n.splice(t, 1), r(e, o);
            },
          };
        };
      },
      497: (e) => {
        e.exports = (e) => {
          let t = 0;
          return {
            hit: function () {
              return (t += 1), t >= e ? "You sunk my battleship" : "Hit";
            },
          };
        };
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { id: n, exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.nc = void 0),
    (() => {
      "use strict";
      var e = r(379),
        t = r.n(e),
        n = r(795),
        o = r.n(n),
        a = r(569),
        s = r.n(a),
        i = r(565),
        c = r.n(i),
        u = r(216),
        l = r.n(u),
        d = r(589),
        p = r.n(d),
        f = r(426),
        v = {};
      (v.styleTagTransform = p()),
        (v.setAttributes = c()),
        (v.insert = s().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = l()),
        t()(f.Z, v),
        f.Z && f.Z.locals && f.Z.locals,
        r(497),
        r(498),
        r(507),
        r(181)().drawBoard();
    })();
})();
