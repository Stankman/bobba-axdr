window.Modernizr = function(ay, ax, aw) {
        function U(b) {
            ao.cssText = b
        }

        function T(d, c) {
            return U(ak.join(d + ";") + (c || ""))
        }

        function S(d, c) {
            return typeof d === c
        }

        function R(d, c) {
            return !!~("" + d).indexOf(c)
        }

        function Q(f, c) {
            for (var h in f) {
                var g = f[h];
                if (!R(g, "-") && ao[g] !== aw) {
                    return c == "pfx" ? g : !0
                }
            }
            return !1
        }

        function P(g, c, j) {
            for (var i in g) {
                var h = c[g[i]];
                if (h !== aw) {
                    return j === !1 ? g[i] : S(h, "function") ? h.bind(j || c) : h
                }
            }
            return !1
        }

        function O(g, f, j) {
            var i = g.charAt(0).toUpperCase() + g.slice(1),
                h = (g + " " + ai.join(i + " ") + i).split(" ");
            return S(f, "string") || S(f, "undefined") ? Q(h, f) : (h = (g + " " + ah.join(i + " ") + i).split(" "), P(h, f, j))
        }

        function N() {
            au.input = function(f) {
                for (var b = 0, a = f.length; b < a; b++) {
                    ad[f[b]] = f[b] in an
                }
                return ad.list && (ad.list = !!ax.createElement("datalist") && !!ay.HTMLDataListElement), ad
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), au.inputtypes = function(b) {
                for (var l = 0, k, j, g, c = b.length; l < c; l++) {
                    an.setAttribute("type", j = b[l]), k = an.type !== "text", k && (an.value = am, an.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(j) && an.style.WebkitAppearance !== aw ? (ar.appendChild(an), g = ax.defaultView, k = g.getComputedStyle && g.getComputedStyle(an, null).WebkitAppearance !== "textfield" && an.offsetHeight !== 0, ar.removeChild(an)) : /^(search|tel)$/.test(j) || (/^(url|email)$/.test(j) ? k = an.checkValidity && an.checkValidity() === !1 : k = an.value != am)), ae[b[l]] = !!k
                }
                return ae
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var av = "2.6.2",
            au = {},
            at = !0,
            ar = ax.documentElement,
            aq = "modernizr",
            ap = ax.createElement(aq),
            ao = ap.style,
            an = ax.createElement("input"),
            am = ":)",
            al = {}.toString,
            ak = " -webkit- -moz- -o- -ms- ".split(" "),
            aj = "Webkit Moz O ms",
            ai = aj.split(" "),
            ah = aj.toLowerCase().split(" "),
            ag = {
                svg: "http://www.w3.org/2000/svg"
            },
            af = {},
            ae = {},
            ad = {},
            ac = [],
            ab = ac.slice,
            aa, Z = function(v, u, t, s) {
                var r, q, p, o, h = ax.createElement("div"),
                    g = ax.body,
                    b = g || ax.createElement("body");
                if (parseInt(t, 10)) {
                    while (t--) {
                        p = ax.createElement("div"), p.id = s ? s[t] : aq + (t + 1), h.appendChild(p)
                    }
                }
                return r = ["&#173;", '<style id="s', aq, '">', v, "</style>"].join(""), h.id = aq, (g ? h : b).innerHTML += r, b.appendChild(h), g || (b.style.background = "", b.style.overflow = "hidden", o = ar.style.overflow, ar.style.overflow = "hidden", ar.appendChild(b)), q = u(h, v), g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b), ar.style.overflow = o), !!q
            },
            Y = function(a) {
                var f = ay.matchMedia || ay.msMatchMedia;
                if (f) {
                    return f(a).matches
                }
                var e;
                return Z("@media " + a + " { #" + aq + " { position: absolute; } }", function(c) {
                    e = (ay.getComputedStyle ? getComputedStyle(c, null) : c.currentStyle)["position"] == "absolute"
                }), e
            },
            X = function() {
                function c(h, g) {
                    g = g || ax.createElement(b[h] || "div"), h = "on" + h;
                    var a = h in g;
                    return a || (g.setAttribute || (g = ax.createElement("div")), g.setAttribute && g.removeAttribute && (g.setAttribute(h, ""), a = S(g[h], "function"), S(g[h], "undefined") || (g[h] = aw), g.removeAttribute(h))), g = null, a
                }
                var b = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return c
            }(),
            W = {}.hasOwnProperty,
            V;
        !S(W, "undefined") && !S(W.call, "undefined") ? V = function(d, c) {
            return W.call(d, c)
        } : V = function(d, c) {
            return c in d && S(d.constructor.prototype[c], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var h = this;
            if (typeof h != "function") {
                throw new TypeError
            }
            var g = ab.call(arguments, 1),
                f = function() {
                    if (this instanceof f) {
                        var b = function() {};
                        b.prototype = h.prototype;
                        var d = new b,
                            c = h.apply(d, g.concat(ab.call(arguments)));
                        return Object(c) === c ? c : d
                    }
                    return h.apply(a, g.concat(ab.call(arguments)))
                };
            return f
        }), af.csstransitions = function() {
            return O("transition")
        }, af.fontface = function() {
            var b;
            return Z('@font-face {font-family:"font";src:url("https://")}', function(k, j) {
                var i = ax.getElementById("smodernizr"),
                    h = i.sheet || i.styleSheet,
                    a = h ? h.cssRules && h.cssRules[0] ? h.cssRules[0].cssText : h.cssText || "" : "";
                b = /src/i.test(a) && a.indexOf(j.split(" ")[0]) === 0
            }), b
        }, af.generatedcontent = function() {
            var b;
            return Z(["#", aq, "{font:0/0 a}#", aq, ':after{content:"', am, '";visibility:hidden;font:3px/1 a}'].join(""), function(a) {
                b = a.offsetHeight >= 3
            }), b
        }, af.video = function() {
            var b = ax.createElement("video"),
                f = !1;
            try {
                if (f = !!b.canPlayType) {
                    f = new Boolean(f), f.ogg = b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), f.h264 = b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), f.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
                }
            } catch (e) {}
            return f
        }, af.audio = function() {
            var b = ax.createElement("audio"),
                f = !1;
            try {
                if (f = !!b.canPlayType) {
                    f = new Boolean(f), f.ogg = b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), f.mp3 = b.canPlayType("audio/mpeg;").replace(/^no$/, ""), f.wav = b.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), f.m4a = (b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/aac;")).replace(/^no$/, "")
                }
            } catch (e) {}
            return f
        }, af.localstorage = function() {
            try {
                return localStorage.setItem(aq, aq), localStorage.removeItem(aq), !0
            } catch (b) {
                return !1
            }
        }, af.sessionstorage = function() {
            try {
                return sessionStorage.setItem(aq, aq), sessionStorage.removeItem(aq), !0
            } catch (b) {
                return !1
            }
        }, af.webworkers = function() {
            return !!ay.Worker
        }, af.applicationcache = function() {
            return !!ay.applicationCache
        }, af.svg = function() {
            return !!ax.createElementNS && !!ax.createElementNS(ag.svg, "svg").createSVGRect
        }, af.inlinesvg = function() {
            var b = ax.createElement("div");
            return b.innerHTML = "<svg/>", (b.firstChild && b.firstChild.namespaceURI) == ag.svg
        }, af.smil = function() {
            return !!ax.createElementNS && /SVGAnimate/.test(al.call(ax.createElementNS(ag.svg, "animate")))
        }, af.svgclippaths = function() {
            return !!ax.createElementNS && /SVGClipPath/.test(al.call(ax.createElementNS(ag.svg, "clipPath")))
        };
        for (var M in af) {
            V(af, M) && (aa = M.toLowerCase(), au[aa] = af[M](), ac.push((au[aa] ? "" : "no-") + aa))
        }
        return au.input || N(), au.addTest = function(e, c) {
                if (typeof e == "object") {
                    for (var f in e) {
                        V(e, f) && au.addTest(f, e[f])
                    }
                } else {
                    e = e.toLowerCase();
                    if (au[e] !== aw) {
                        return au
                    }
                    c = typeof c == "function" ? c() : c, typeof at != "undefined" && at && (ar.className += " " + (c ? "" : "no-") + e), au[e] = c
                }
                return au
            }, U(""), ap = an = null,
            function(J, I) {
                function z(f, e) {
                    var h = f.createElement("p"),
                        g = f.getElementsByTagName("head")[0] || f.documentElement;
                    return h.innerHTML = "x<style>" + e + "</style>", g.insertBefore(h.lastChild, g.firstChild)
                }

                function y() {
                    var b = s.elements;
                    return typeof b == "string" ? b.split(" ") : b
                }

                function x(d) {
                    var c = B[d[D]];
                    return c || (c = {}, C++, d[D] = C, B[C] = c), c
                }

                function w(b, h, e) {
                    h || (h = I);
                    if (A) {
                        return h.createElement(b)
                    }
                    e || (e = x(h));
                    var d;
                    return e.cache[b] ? d = e.cache[b].cloneNode() : F.test(b) ? d = (e.cache[b] = e.createElem(b)).cloneNode() : d = e.createElem(b), d.canHaveChildren && !G.test(b) ? e.frag.appendChild(d) : d
                }

                function v(b, l) {
                    b || (b = I);
                    if (A) {
                        return b.createDocumentFragment()
                    }
                    l = l || x(b);
                    var k = l.frag.cloneNode(),
                        j = 0,
                        i = y(),
                        h = i.length;
                    for (; j < h; j++) {
                        k.createElement(i[j])
                    }
                    return k
                }

                function u(d, c) {
                    c.cache || (c.cache = {}, c.createElem = d.createElement, c.createFrag = d.createDocumentFragment, c.frag = c.createFrag()), d.createElement = function(a) {
                        return s.shivMethods ? w(a, d, c) : c.createElem(a)
                    }, d.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + y().join().replace(/\w+/g, function(b) {
                        return c.createElem(b), c.frag.createElement(b), 'c("' + b + '")'
                    }) + ");return n}")(s, c.frag)
                }

                function t(b) {
                    b || (b = I);
                    var d = x(b);
                    return s.shivCSS && !E && !d.hasCSS && (d.hasCSS = !!z(b, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), A || u(b, d), b
                }
                var H = J.html5 || {},
                    G = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    F = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    E, D = "_html5shiv",
                    C = 0,
                    B = {},
                    A;
                (function() {
                    try {
                        var b = I.createElement("a");
                        b.innerHTML = "<xyz></xyz>", E = "hidden" in b, A = b.childNodes.length == 1 || function() {
                            I.createElement("a");
                            var c = I.createDocumentFragment();
                            return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                        }()
                    } catch (d) {
                        E = !0, A = !0
                    }
                })();
                var s = {
                    //elements: H.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: H.shivCSS !== !1,
                    supportsUnknownElements: A,
                    shivMethods: H.shivMethods !== !1,
                    type: "default",
                    shivDocument: t,
                    createElement: w,
                    createDocumentFragment: v
                };
                J.html5 = s, t(I)
            }(this, ax), au._version = av, au._prefixes = ak, au._domPrefixes = ah, au._cssomPrefixes = ai, au.mq = Y, au.hasEvent = X, au.testProp = function(b) {
                return Q([b])
            }, au.testAllProps = O, au.testStyles = Z, au.prefixed = function(e, d, f) {
                return d ? O(e, d, f) : O(e, "pfx")
            }, ar.className = ar.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (at ? " js " + ac.join(" ") : ""), au
    }(this, this.document),
    function(ad, ac, ab) {
        function aa(b) {
            return "[object Function]" == P.call(b)
        }

        function Z(b) {
            return "string" == typeof b
        }

        function Y() {}

        function X(b) {
            return !b || "loaded" == b || "complete" == b || "uninitialized" == b
        }

        function W() {
            var b = O.shift();
            M = 1, b ? b.t ? R(function() {
                ("c" == b.t ? L.injectCss : L.injectJs)(b.s, 0, b.a, b.x, b.e, 1)
            }, 0) : (b(), W()) : M = 0
        }

        function V(w, v, t, s, q, p, n) {
            function m(a) {
                if (!g && X(h.readyState) && (x.r = g = 1, !M && W(), h.onload = h.onreadystatechange = null, a)) {
                    "img" != w && R(function() {
                        I.removeChild(h)
                    }, 50);
                    for (var c in D[v]) {
                        D[v].hasOwnProperty(c) && D[v][c].onload()
                    }
                }
            }
            var n = n || L.errorTimeout,
                h = ac.createElement(w),
                g = 0,
                b = 0,
                x = {
                    t: t,
                    s: v,
                    e: q,
                    a: p,
                    x: n
                };
            1 === D[v] && (b = 1, D[v] = []), "object" == w ? h.data = v : (h.src = v, h.type = w), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
                m.call(this, b)
            }, O.splice(s, 0, x), "img" != w && (b || 2 === D[v] ? (I.insertBefore(h, J ? null : Q), R(m, n)) : D[v].push(h))
        }

        function U(g, e, j, i, h) {
            return M = 0, e = e || "j", Z(g) ? V("c" == e ? G : H, g, e, this.i++, j, i, h) : (O.splice(this.i++, 0, g), 1 == O.length && W()), this
        }

        function T() {
            var b = L;
            return b.loader = {
                load: U,
                i: 0
            }, b
        }
        var S = ac.documentElement,
            R = ad.setTimeout,
            Q = ac.getElementsByTagName("script")[0],
            P = {}.toString,
            O = [],
            M = 0,
            K = "MozAppearance" in S.style,
            J = K && !!ac.createRange().compareNode,
            I = J ? S : Q.parentNode,
            S = ad.opera && "[object Opera]" == P.call(ad.opera),
            S = !!ac.attachEvent && !S,
            H = K ? "object" : S ? "script" : "img",
            G = S ? "script" : H,
            F = Array.isArray || function(b) {
                return "[object Array]" == P.call(b)
            },
            E = [],
            D = {},
            C = {
                timeout: function(d, c) {
                    return c.length && (d.timeout = c[0]), d
                }
            },
            N, L;
        L = function(e) {
            function c(i) {
                var i = i.split("!"),
                    h = E.length,
                    q = i.pop(),
                    p = i.length,
                    q = {
                        url: q,
                        origUrl: q,
                        prefixes: i
                    },
                    o, l, j;
                for (l = 0; l < p; l++) {
                    j = i[l].split("="), (o = C[j.shift()]) && (q = o(q, j))
                }
                for (l = 0; l < h; l++) {
                    q = E[l](q)
                }
                return q
            }

            function n(b, s, r, q, p) {
                var o = c(b),
                    l = o.autoCallback;
                o.url.split(".").pop().split("?").shift(), o.bypass || (s && (s = aa(s) ? s : s[b] || s[q] || s[b.split("/").pop().split("?")[0]]), o.instead ? o.instead(b, s, r, q, p) : (D[o.url] ? o.noexec = !0 : D[o.url] = 1, r.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : ab, o.noexec, o.attrs, o.timeout), (aa(s) || aa(l)) && r.load(function() {
                    T(), s && s(o.origUrl, p, q), l && l(o.origUrl, p, q), D[o.url] = 2
                })))
            }

            function m(w, v) {
                function u(b, h) {
                    if (b) {
                        if (Z(b)) {
                            h || (r = function() {
                                var i = [].slice.call(arguments);
                                q.apply(this, i), p()
                            }), n(b, r, v, 0, t)
                        } else {
                            if (Object(b) === b) {
                                for (g in o = function() {
                                        var a = 0,
                                            i;
                                        for (i in b) {
                                            b.hasOwnProperty(i) && a++
                                        }
                                        return a
                                    }(), b) {
                                    b.hasOwnProperty(g) && (!h && !--o && (aa(r) ? r = function() {
                                        var i = [].slice.call(arguments);
                                        q.apply(this, i), p()
                                    } : r[g] = function(i) {
                                        return function() {
                                            var a = [].slice.call(arguments);
                                            i && i.apply(this, a), p()
                                        }
                                    }(q[g])), n(b[g], r, v, g, t))
                                }
                            }
                        }
                    } else {
                        !h && p()
                    }
                }
                var t = !!w.test,
                    s = w.load || w.both,
                    r = w.callback || Y,
                    q = r,
                    p = w.complete || Y,
                    o, g;
                u(t ? w.yep : w.nope, !!s), s && u(s)
            }
            var k, f, d = this.yepnope.loader;
            if (Z(e)) {
                n(e, 0, d, 0)
            } else {
                if (F(e)) {
                    for (k = 0; k < e.length; k++) {
                        f = e[k], Z(f) ? n(f, 0, d, 0) : F(f) ? L(f) : Object(f) === f && m(f, d)
                    }
                } else {
                    Object(e) === e && m(e, d)
                }
            }
        }, L.addPrefix = function(d, c) {
            C[d] = c
        }, L.addFilter = function(b) {
            E.push(b)
        }, L.errorTimeout = 10000, null == ac.readyState && ac.addEventListener && (ac.readyState = "loading", ac.addEventListener("DOMContentLoaded", N = function() {
            ac.removeEventListener("DOMContentLoaded", N, 0), ac.readyState = "complete"
        }, 0)), ad.yepnope = T(), ad.yepnope.executeStack = W, ad.yepnope.injectJs = function(r, q, p, n, m, h) {
            var g = ac.createElement("script"),
                f, b, n = n || L.errorTimeout;
            g.src = r;
            for (b in p) {
                g.setAttribute(b, p[b])
            }
            q = h ? W : q || Y, g.onreadystatechange = g.onload = function() {
                !f && X(g.readyState) && (f = 1, q(), g.onload = g.onreadystatechange = null)
            }, R(function() {
                f || (f = 1, q(1))
            }, n), m ? g.onload() : Q.parentNode.insertBefore(g, Q)
        }, ad.yepnope.injectCss = function(b, n, m, l, k, h) {
            var l = ac.createElement("link"),
                f, n = h ? W : n || Y;
            l.href = b, l.rel = "stylesheet", l.type = "text/css";
            for (f in m) {
                l.setAttribute(f, m[f])
            }
            k || (Q.parentNode.insertBefore(l, Q), R(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
var Cookie = {
    set: function(e, g, c, f) {
        var b = "";
        if (c != undefined) {
            var h = new Date();
            h.setTime(h.getTime() + (86400000 * parseFloat(c)));
            b = "; expires=" + h.toGMTString()
        }
        var a = "";
        if (f != undefined) {
            a = "; domain=" + escape(f)
        }
        return (document.cookie = escape(e) + "=" + escape(g || "") + "; path=/" + b + a)
    },
    setWithExpiresIn: function(b, c, e) {
        var a = "";
        if (e > 0) {
            var f = new Date();
            f.setTime(f.getTime() + (1000 * parseFloat(e)));
            a = "; expires=" + f.toGMTString()
        }
        return (document.cookie = escape(b) + "=" + escape(c || "") + "; path=/" + a)
    },
    get: function(a) {
        var b = document.cookie.match(new RegExp("(^|;)\\s*" + escape(a) + "=([^;\\s]*)"));
        return (b ? unescape(b[2]) : null)
    },
    append: function(c, d, a, e) {
        var b = Cookie.get(c);
        if (!!b) {
            d = b + (e || "|") + d
        }
        return Cookie.set(c, d, a)
    },
    erase: function(a) {
        var b = Cookie.get(a) || true;
        Cookie.set(a, "", -1);
        return b
    },
    accept: function() {
        if (typeof navigator.cookieEnabled == "boolean") {
            return navigator.cookieEnabled
        }
        Cookie.set("_test", "1");
        return (Cookie.erase("_test") === "1")
    }
};