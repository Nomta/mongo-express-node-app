!(function (t) {
    var r = {};
    function n(e) {
        if (r[e]) return r[e].exports;
        var o = (r[e] = { i: e, l: !1, exports: {} });
        return t[e].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = r),
        (n.d = function (t, r, e) {
            n.o(t, r) ||
                Object.defineProperty(t, r, { enumerable: !0, get: e });
        }),
        (n.r = function (t) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: 'Module'
                }),
                Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (n.t = function (t, r) {
            if ((1 & r && (t = n(t)), 8 & r)) return t;
            if (4 & r && 'object' == typeof t && t && t.__esModule) return t;
            var e = Object.create(null);
            if (
                (n.r(e),
                Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    value: t
                }),
                2 & r && 'string' != typeof t)
            )
                for (var o in t)
                    n.d(
                        e,
                        o,
                        function (r) {
                            return t[r];
                        }.bind(null, o)
                    );
            return e;
        }),
        (n.n = function (t) {
            var r =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(r, 'a', r), r;
        }),
        (n.o = function (t, r) {
            return Object.prototype.hasOwnProperty.call(t, r);
        }),
        (n.p = ''),
        n((n.s = 307));
})({
    307: function (t, r, n) {
        'use strict';
        n.r(r),
            function (t) {
                n(309), n(310);
                var r = ['f', '8', '0'],
                    e = [];
                r.forEach(function (t) {
                    return r.forEach(function (n) {
                        return r.forEach(function (r) {
                            return e.push(''.concat(t).concat(n).concat(r));
                        });
                    });
                });
                var o = t(
                    'ul',
                    { class: 'hex-list' },
                    e.map(function (r) {
                        return t('li', {
                            style: 'background-color: #' + r,
                            title: r
                        });
                    })
                );
                document.getElementById('root').appendChild(o);
            }.call(this, n(308));
    },
    308: function (t, r) {
        function n(t, r) {
            return (
                (function (t) {
                    if (Array.isArray(t)) return t;
                })(t) ||
                (function (t, r) {
                    if (
                        'undefined' == typeof Symbol ||
                        !(Symbol.iterator in Object(t))
                    )
                        return;
                    var n = [],
                        e = !0,
                        o = !1,
                        u = void 0;
                    try {
                        for (
                            var i, c = t[Symbol.iterator]();
                            !(e = (i = c.next()).done) &&
                            (n.push(i.value), !r || n.length !== r);
                            e = !0
                        );
                    } catch (t) {
                        (o = !0), (u = t);
                    } finally {
                        try {
                            e || null == c.return || c.return();
                        } finally {
                            if (o) throw u;
                        }
                    }
                    return n;
                })(t, r) ||
                (function (t, r) {
                    if (!t) return;
                    if ('string' == typeof t) return e(t, r);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    'Object' === n && t.constructor && (n = t.constructor.name);
                    if ('Map' === n || 'Set' === n) return Array.from(t);
                    if (
                        'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                        return e(t, r);
                })(t, r) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                })()
            );
        }
        function e(t, r) {
            (null == r || r > t.length) && (r = t.length);
            for (var n = 0, e = new Array(r); n < r; n++) e[n] = t[n];
            return e;
        }
        function o(t, r) {
            Array.isArray(r)
                ? r.forEach(function (r) {
                      return o(t, r);
                  })
                : t.appendChild(r.nodeType ? r : document.createTextNode(r));
        }
        t.exports = function (t, r) {
            for (
                var e = arguments.length,
                    u = new Array(e > 2 ? e - 2 : 0),
                    i = 2;
                i < e;
                i++
            )
                u[i - 2] = arguments[i];
            if ('function' == typeof t) return t(r, u);
            var c = document.createElement(t);
            return (
                Object.entries(r || {}).forEach(function (t) {
                    var r = n(t, 2),
                        e = r[0],
                        o = r[1];
                    'classname' === e.toLowerCase() && (e = 'class'),
                        c.setAttribute(e, o.toString());
                }),
                u.forEach(function (t) {
                    o(c, t);
                }),
                c
            );
        };
    },
    309: function (t, r, n) {},
    310: function (t, r, n) {}
});
