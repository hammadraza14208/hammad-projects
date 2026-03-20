import {h as jd, j as O_, a2 as Rt, a3 as Xr, a4 as It, a5 as st, a6 as Kc, a7 as hn, a8 as no, a9 as Vr, aa as $o, ab as Na, ac as S_, ad as Bn, ae as ro, af as In, ag as Ca, ah as Ma, ai as A_, aj as Dn, ak as Bd, al as Vd, am as T_, an as R_, ao as C_, ap as Hm, aq as Km, ar as Ud, as as x_, at as Wd, au as Hd, av as Kd, aw as qd, ax as Gd, ay as zd, az as Yd, aA as P_, aB as I_, aC as F_, aD as L_, aE as N_, aF as Jd, aG as M_, aH as k_, aI as Wi, aJ as $_, aK as D_, aL as j_, aM as B_, aN as V_} from "../theme-0/vendorChunk.DYJWRM33.js";
var qm = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(jd, function() {
        var n = function(a, l) {
            return (n = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(d, m) {
                d.__proto__ = m
            }
            || function(d, m) {
                for (var v in m)
                    Object.prototype.hasOwnProperty.call(m, v) && (d[v] = m[v])
            }
            )(a, l)
        }
          , r = function() {
            return (r = Object.assign || function(a) {
                for (var l, d = 1, m = arguments.length; d < m; d++)
                    for (var v in l = arguments[d])
                        Object.prototype.hasOwnProperty.call(l, v) && (a[v] = l[v]);
                return a
            }
            ).apply(this, arguments)
        };
        function i(a, l, d) {
            for (var m, v = 0, b = l.length; v < b; v++)
                !m && v in l || ((m = m || Array.prototype.slice.call(l, 0, v))[v] = l[v]);
            return a.concat(m || Array.prototype.slice.call(l))
        }
        var o = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : jd
          , s = Object.keys
          , u = Array.isArray;
        function c(a, l) {
            return typeof l != "object" || s(l).forEach(function(d) {
                a[d] = l[d]
            }),
            a
        }
        typeof Promise == "undefined" || o.Promise || (o.Promise = Promise);
        var f = Object.getPrototypeOf
          , h = {}.hasOwnProperty;
        function p(a, l) {
            return h.call(a, l)
        }
        function g(a, l) {
            typeof l == "function" && (l = l(f(a))),
            (typeof Reflect == "undefined" ? s : Reflect.ownKeys)(l).forEach(function(d) {
                _(a, d, l[d])
            })
        }
        var y = Object.defineProperty;
        function _(a, l, d, m) {
            y(a, l, c(d && p(d, "get") && typeof d.get == "function" ? {
                get: d.get,
                set: d.set,
                configurable: !0
            } : {
                value: d,
                configurable: !0,
                writable: !0
            }, m))
        }
        function R(a) {
            return {
                from: function(l) {
                    return a.prototype = Object.create(l.prototype),
                    _(a.prototype, "constructor", a),
                    {
                        extend: g.bind(null, a.prototype)
                    }
                }
            }
        }
        var F = Object.getOwnPropertyDescriptor
          , T = [].slice;
        function A(a, l, d) {
            return T.call(a, l, d)
        }
        function E(a, l) {
            return l(a)
        }
        function I(a) {
            if (!a)
                throw new Error("Assertion Failed")
        }
        function W(a) {
            o.setImmediate ? setImmediate(a) : setTimeout(a, 0)
        }
        function $(a, l) {
            if (typeof l == "string" && p(a, l))
                return a[l];
            if (!l)
                return a;
            if (typeof l != "string") {
                for (var d = [], m = 0, v = l.length; m < v; ++m) {
                    var b = $(a, l[m]);
                    d.push(b)
                }
                return d
            }
            var O = l.indexOf(".");
            if (O !== -1) {
                var C = a[l.substr(0, O)];
                return C == null ? void 0 : $(C, l.substr(O + 1))
            }
        }
        function U(a, l, d) {
            if (a && l !== void 0 && !("isFrozen"in Object && Object.isFrozen(a)))
                if (typeof l != "string" && "length"in l) {
                    I(typeof d != "string" && "length"in d);
                    for (var m = 0, v = l.length; m < v; ++m)
                        U(a, l[m], d[m])
                } else {
                    var b, O, C = l.indexOf(".");
                    C !== -1 ? (b = l.substr(0, C),
                    (O = l.substr(C + 1)) === "" ? d === void 0 ? u(a) && !isNaN(parseInt(b)) ? a.splice(b, 1) : delete a[b] : a[b] = d : U(C = !(C = a[b]) || !p(a, b) ? a[b] = {} : C, O, d)) : d === void 0 ? u(a) && !isNaN(parseInt(l)) ? a.splice(l, 1) : delete a[l] : a[l] = d
                }
        }
        function Z(a) {
            var l, d = {};
            for (l in a)
                p(a, l) && (d[l] = a[l]);
            return d
        }
        var j = [].concat;
        function ne(a) {
            return j.apply([], a)
        }
        var or = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ne([8, 16, 32, 64].map(function(a) {
            return ["Int", "Uint", "Float"].map(function(l) {
                return l + a + "Array"
            })
        }))).filter(function(a) {
            return o[a]
        })
          , be = new Set(or.map(function(a) {
            return o[a]
        }))
          , ae = null;
        function we(a) {
            return ae = new WeakMap,
            a = function l(d) {
                if (!d || typeof d != "object")
                    return d;
                var m = ae.get(d);
                if (m)
                    return m;
                if (u(d)) {
                    m = [],
                    ae.set(d, m);
                    for (var v = 0, b = d.length; v < b; ++v)
                        m.push(l(d[v]))
                } else if (be.has(d.constructor))
                    m = d;
                else {
                    var O, C = f(d);
                    for (O in m = C === Object.prototype ? {} : Object.create(C),
                    ae.set(d, m),
                    d)
                        p(d, O) && (m[O] = l(d[O]))
                }
                return m
            }(a),
            ae = null,
            a
        }
        var Ve = {}.toString;
        function Ne(a) {
            return Ve.call(a).slice(8, -1)
        }
        var le = typeof Symbol != "undefined" ? Symbol.iterator : "@@iterator"
          , je = typeof le == "symbol" ? function(a) {
            var l;
            return a != null && (l = a[le]) && l.apply(a)
        }
        : function() {
            return null
        }
        ;
        function Te(a, l) {
            return l = a.indexOf(l),
            0 <= l && a.splice(l, 1),
            0 <= l
        }
        var ut = {};
        function dt(a) {
            var l, d, m, v;
            if (arguments.length === 1) {
                if (u(a))
                    return a.slice();
                if (this === ut && typeof a == "string")
                    return [a];
                if (v = je(a)) {
                    for (d = []; !(m = v.next()).done; )
                        d.push(m.value);
                    return d
                }
                if (a == null)
                    return [a];
                if (typeof (l = a.length) != "number")
                    return [a];
                for (d = new Array(l); l--; )
                    d[l] = a[l];
                return d
            }
            for (l = arguments.length,
            d = new Array(l); l--; )
                d[l] = arguments[l];
            return d
        }
        var it = typeof Symbol != "undefined" ? function(a) {
            return a[Symbol.toStringTag] === "AsyncFunction"
        }
        : function() {
            return !1
        }
          , Oe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"]
          , xn = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Oe)
          , wt = {
            VersionChanged: "Database version changed by other database connection",
            DatabaseClosed: "Database has been closed",
            Abort: "Transaction aborted",
            TransactionInactive: "Transaction has already completed or failed",
            MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };
        function Tt(a, l) {
            this.name = a,
            this.message = l
        }
        function ht(a, l) {
            return a + ". Errors: " + Object.keys(l).map(function(d) {
                return l[d].toString()
            }).filter(function(d, m, v) {
                return v.indexOf(d) === m
            }).join(`
`)
        }
        function qt(a, l, d, m) {
            this.failures = l,
            this.failedKeys = m,
            this.successCount = d,
            this.message = ht(a, l)
        }
        function ge(a, l) {
            this.name = "BulkError",
            this.failures = Object.keys(l).map(function(d) {
                return l[d]
            }),
            this.failuresByPos = l,
            this.message = ht(a, this.failures)
        }
        R(Tt).from(Error).extend({
            toString: function() {
                return this.name + ": " + this.message
            }
        }),
        R(qt).from(Tt),
        R(ge).from(Tt);
        var Y = xn.reduce(function(a, l) {
            return a[l] = l + "Error",
            a
        }, {})
          , ve = Tt
          , z = xn.reduce(function(a, l) {
            var d = l + "Error";
            function m(v, b) {
                this.name = d,
                v ? typeof v == "string" ? (this.message = "".concat(v).concat(b ? `
 ` + b : ""),
                this.inner = b || null) : typeof v == "object" && (this.message = "".concat(v.name, " ").concat(v.message),
                this.inner = v) : (this.message = wt[l] || d,
                this.inner = null)
            }
            return R(m).from(ve),
            a[l] = m,
            a
        }, {});
        z.Syntax = SyntaxError,
        z.Type = TypeError,
        z.Range = RangeError;
        var xe = Oe.reduce(function(a, l) {
            return a[l + "Error"] = z[l],
            a
        }, {})
          , Ue = xn.reduce(function(a, l) {
            return ["Syntax", "Type", "Range"].indexOf(l) === -1 && (a[l + "Error"] = z[l]),
            a
        }, {});
        function Ie() {}
        function S(a) {
            return a
        }
        function w(a, l) {
            return a == null || a === S ? l : function(d) {
                return l(a(d))
            }
        }
        function V(a, l) {
            return function() {
                a.apply(this, arguments),
                l.apply(this, arguments)
            }
        }
        function se(a, l) {
            return a === Ie ? l : function() {
                var d = a.apply(this, arguments);
                d !== void 0 && (arguments[0] = d);
                var m = this.onsuccess
                  , v = this.onerror;
                this.onsuccess = null,
                this.onerror = null;
                var b = l.apply(this, arguments);
                return m && (this.onsuccess = this.onsuccess ? V(m, this.onsuccess) : m),
                v && (this.onerror = this.onerror ? V(v, this.onerror) : v),
                b !== void 0 ? b : d
            }
        }
        function oe(a, l) {
            return a === Ie ? l : function() {
                a.apply(this, arguments);
                var d = this.onsuccess
                  , m = this.onerror;
                this.onsuccess = this.onerror = null,
                l.apply(this, arguments),
                d && (this.onsuccess = this.onsuccess ? V(d, this.onsuccess) : d),
                m && (this.onerror = this.onerror ? V(m, this.onerror) : m)
            }
        }
        function pe(a, l) {
            return a === Ie ? l : function(d) {
                var m = a.apply(this, arguments);
                c(d, m);
                var v = this.onsuccess
                  , b = this.onerror;
                return this.onsuccess = null,
                this.onerror = null,
                d = l.apply(this, arguments),
                v && (this.onsuccess = this.onsuccess ? V(v, this.onsuccess) : v),
                b && (this.onerror = this.onerror ? V(b, this.onerror) : b),
                m === void 0 ? d === void 0 ? void 0 : d : c(m, d)
            }
        }
        function Ee(a, l) {
            return a === Ie ? l : function() {
                return l.apply(this, arguments) !== !1 && a.apply(this, arguments)
            }
        }
        function me(a, l) {
            return a === Ie ? l : function() {
                var d = a.apply(this, arguments);
                if (d && typeof d.then == "function") {
                    for (var m = this, v = arguments.length, b = new Array(v); v--; )
                        b[v] = arguments[v];
                    return d.then(function() {
                        return l.apply(m, b)
                    })
                }
                return l.apply(this, arguments)
            }
        }
        Ue.ModifyError = qt,
        Ue.DexieError = Tt,
        Ue.BulkError = ge;
        var he = typeof location != "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function fe(a) {
            he = a
        }
        var Re = {}
          , $e = 100
          , or = typeof Promise == "undefined" ? [] : function() {
            var a = Promise.resolve();
            if (typeof crypto == "undefined" || !crypto.subtle)
                return [a, f(a), a];
            var l = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
            return [l, f(l), a]
        }()
          , Oe = or[0]
          , xn = or[1]
          , or = or[2]
          , xn = xn && xn.then
          , G = Oe && Oe.constructor
          , ee = !!or
          , ke = function(a, l) {
            He.push([a, l]),
            k && (queueMicrotask(Ro),
            k = !1)
        }
          , x = !0
          , k = !0
          , ie = []
          , _e = []
          , De = S
          , Be = {
            id: "global",
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: Ie,
            pgp: !1,
            env: {},
            finalize: Ie
        }
          , ue = Be
          , He = []
          , Ye = 0
          , Et = [];
        function de(a) {
            if (typeof this != "object")
                throw new TypeError("Promises must be constructed via new");
            this._listeners = [],
            this._lib = !1;
            var l = this._PSD = ue;
            if (typeof a != "function") {
                if (a !== Re)
                    throw new TypeError("Not a function");
                return this._state = arguments[1],
                this._value = arguments[2],
                void (this._state === !1 && Yt(this, this._value))
            }
            this._state = null,
            this._value = null,
            ++l.ref,
            function d(m, v) {
                try {
                    v(function(b) {
                        if (m._state === null) {
                            if (b === m)
                                throw new TypeError("A promise cannot be resolved with itself.");
                            var O = m._lib && Yn();
                            b && typeof b.then == "function" ? d(m, function(C, M) {
                                b instanceof de ? b._then(C, M) : b.then(C, M)
                            }) : (m._state = !0,
                            m._value = b,
                            Or(m)),
                            O && Ni()
                        }
                    }, Yt.bind(null, m))
                } catch (b) {
                    Yt(m, b)
                }
            }(this, a)
        }
        var Lt = {
            get: function() {
                var a = ue
                  , l = Ks;
                function d(m, v) {
                    var b = this
                      , O = !a.global && (a !== ue || l !== Ks)
                      , C = O && !Ar()
                      , M = new de(function(L, H) {
                        ni(b, new Gt(dd(m, a, O, C),dd(v, a, O, C),L,H,a))
                    }
                    );
                    return this._consoleTask && (M._consoleTask = this._consoleTask),
                    M
                }
                return d.prototype = Re,
                d
            },
            set: function(a) {
                _(this, "then", a && a.prototype === Re ? Lt : {
                    get: function() {
                        return a
                    },
                    set: Lt.set
                })
            }
        };
        function Gt(a, l, d, m, v) {
            this.onFulfilled = typeof a == "function" ? a : null,
            this.onRejected = typeof l == "function" ? l : null,
            this.resolve = d,
            this.reject = m,
            this.psd = v
        }
        function Yt(a, l) {
            var d, m;
            _e.push(l),
            a._state === null && (d = a._lib && Yn(),
            l = De(l),
            a._state = !1,
            a._value = l,
            m = a,
            ie.some(function(v) {
                return v._value === m._value
            }) || ie.push(m),
            Or(a),
            d && Ni())
        }
        function Or(a) {
            var l = a._listeners;
            a._listeners = [];
            for (var d = 0, m = l.length; d < m; ++d)
                ni(a, l[d]);
            var v = a._PSD;
            --v.ref || v.finalize(),
            Ye === 0 && (++Ye,
            ke(function() {
                --Ye == 0 && Ku()
            }, []))
        }
        function ni(a, l) {
            if (a._state !== null) {
                var d = a._state ? l.onFulfilled : l.onRejected;
                if (d === null)
                    return (a._state ? l.resolve : l.reject)(a._value);
                ++l.psd.ref,
                ++Ye,
                ke(To, [d, a, l])
            } else
                a._listeners.push(l)
        }
        function To(a, l, d) {
            try {
                var m, v = l._value;
                !l._state && _e.length && (_e = []),
                m = he && l._consoleTask ? l._consoleTask.run(function() {
                    return a(v)
                }) : a(v),
                l._state || _e.indexOf(v) !== -1 || function(b) {
                    for (var O = ie.length; O; )
                        if (ie[--O]._value === b._value)
                            return ie.splice(O, 1)
                }(l),
                d.resolve(m)
            } catch (b) {
                d.reject(b)
            } finally {
                --Ye == 0 && Ku(),
                --d.psd.ref || d.psd.finalize()
            }
        }
        function Ro() {
            ri(Be, function() {
                Yn() && Ni()
            })
        }
        function Yn() {
            var a = x;
            return k = x = !1,
            a
        }
        function Ni() {
            var a, l, d;
            do
                for (; 0 < He.length; )
                    for (a = He,
                    He = [],
                    d = a.length,
                    l = 0; l < d; ++l) {
                        var m = a[l];
                        m[0].apply(null, m[1])
                    }
            while (0 < He.length);
            k = x = !0
        }
        function Ku() {
            var a = ie;
            ie = [],
            a.forEach(function(m) {
                m._PSD.onunhandled.call(null, m._value, m)
            });
            for (var l = Et.slice(0), d = l.length; d; )
                l[--d]()
        }
        function Us(a) {
            return new de(Re,!1,a)
        }
        function Ot(a, l) {
            var d = ue;
            return function() {
                var m = Yn()
                  , v = ue;
                try {
                    return Tr(d, !0),
                    a.apply(this, arguments)
                } catch (b) {
                    l && l(b)
                } finally {
                    Tr(v, !1),
                    m && Ni()
                }
            }
        }
        g(de.prototype, {
            then: Lt,
            _then: function(a, l) {
                ni(this, new Gt(null,null,a,l,ue))
            },
            catch: function(a) {
                if (arguments.length === 1)
                    return this.then(null, a);
                var l = a
                  , d = arguments[1];
                return typeof l == "function" ? this.then(null, function(m) {
                    return (m instanceof l ? d : Us)(m)
                }) : this.then(null, function(m) {
                    return (m && m.name === l ? d : Us)(m)
                })
            },
            finally: function(a) {
                return this.then(function(l) {
                    return de.resolve(a()).then(function() {
                        return l
                    })
                }, function(l) {
                    return de.resolve(a()).then(function() {
                        return Us(l)
                    })
                })
            },
            timeout: function(a, l) {
                var d = this;
                return a < 1 / 0 ? new de(function(m, v) {
                    var b = setTimeout(function() {
                        return v(new z.Timeout(l))
                    }, a);
                    d.then(m, v).finally(clearTimeout.bind(null, b))
                }
                ) : this
            }
        }),
        typeof Symbol != "undefined" && Symbol.toStringTag && _(de.prototype, Symbol.toStringTag, "Dexie.Promise"),
        Be.env = fd(),
        g(de, {
            all: function() {
                var a = dt.apply(null, arguments).map(qs);
                return new de(function(l, d) {
                    a.length === 0 && l([]);
                    var m = a.length;
                    a.forEach(function(v, b) {
                        return de.resolve(v).then(function(O) {
                            a[b] = O,
                            --m || l(a)
                        }, d)
                    })
                }
                )
            },
            resolve: function(a) {
                return a instanceof de ? a : a && typeof a.then == "function" ? new de(function(l, d) {
                    a.then(l, d)
                }
                ) : new de(Re,!0,a)
            },
            reject: Us,
            race: function() {
                var a = dt.apply(null, arguments).map(qs);
                return new de(function(l, d) {
                    a.map(function(m) {
                        return de.resolve(m).then(l, d)
                    })
                }
                )
            },
            PSD: {
                get: function() {
                    return ue
                },
                set: function(a) {
                    return ue = a
                }
            },
            totalEchoes: {
                get: function() {
                    return Ks
                }
            },
            newPSD: Sr,
            usePSD: ri,
            scheduler: {
                get: function() {
                    return ke
                },
                set: function(a) {
                    ke = a
                }
            },
            rejectionMapper: {
                get: function() {
                    return De
                },
                set: function(a) {
                    De = a
                }
            },
            follow: function(a, l) {
                return new de(function(d, m) {
                    return Sr(function(v, b) {
                        var O = ue;
                        O.unhandleds = [],
                        O.onunhandled = b,
                        O.finalize = V(function() {
                            var C, M = this;
                            C = function() {
                                M.unhandleds.length === 0 ? v() : b(M.unhandleds[0])
                            }
                            ,
                            Et.push(function L() {
                                C(),
                                Et.splice(Et.indexOf(L), 1)
                            }),
                            ++Ye,
                            ke(function() {
                                --Ye == 0 && Ku()
                            }, [])
                        }, O.finalize),
                        a()
                    }, l, d, m)
                }
                )
            }
        }),
        G && (G.allSettled && _(de, "allSettled", function() {
            var a = dt.apply(null, arguments).map(qs);
            return new de(function(l) {
                a.length === 0 && l([]);
                var d = a.length
                  , m = new Array(d);
                a.forEach(function(v, b) {
                    return de.resolve(v).then(function(O) {
                        return m[b] = {
                            status: "fulfilled",
                            value: O
                        }
                    }, function(O) {
                        return m[b] = {
                            status: "rejected",
                            reason: O
                        }
                    }).then(function() {
                        return --d || l(m)
                    })
                })
            }
            )
        }),
        G.any && typeof AggregateError != "undefined" && _(de, "any", function() {
            var a = dt.apply(null, arguments).map(qs);
            return new de(function(l, d) {
                a.length === 0 && d(new AggregateError([]));
                var m = a.length
                  , v = new Array(m);
                a.forEach(function(b, O) {
                    return de.resolve(b).then(function(C) {
                        return l(C)
                    }, function(C) {
                        v[O] = C,
                        --m || d(new AggregateError(v))
                    })
                })
            }
            )
        }));
        var Vt = {
            awaits: 0,
            echoes: 0,
            id: 0
        }
          , e_ = 0
          , Ws = []
          , Hs = 0
          , Ks = 0
          , t_ = 0;
        function Sr(a, l, d, m) {
            var v = ue
              , b = Object.create(v);
            return b.parent = v,
            b.ref = 0,
            b.global = !1,
            b.id = ++t_,
            Be.env,
            b.env = ee ? {
                Promise: de,
                PromiseProp: {
                    value: de,
                    configurable: !0,
                    writable: !0
                },
                all: de.all,
                race: de.race,
                allSettled: de.allSettled,
                any: de.any,
                resolve: de.resolve,
                reject: de.reject
            } : {},
            l && c(b, l),
            ++v.ref,
            b.finalize = function() {
                --this.parent.ref || this.parent.finalize()
            }
            ,
            m = ri(b, a, d, m),
            b.ref === 0 && b.finalize(),
            m
        }
        function Mi() {
            return Vt.id || (Vt.id = ++e_),
            ++Vt.awaits,
            Vt.echoes += $e,
            Vt.id
        }
        function Ar() {
            return !!Vt.awaits && (--Vt.awaits == 0 && (Vt.id = 0),
            Vt.echoes = Vt.awaits * $e,
            !0)
        }
        function qs(a) {
            return Vt.echoes && a && a.constructor === G ? (Mi(),
            a.then(function(l) {
                return Ar(),
                l
            }, function(l) {
                return Ar(),
                xt(l)
            })) : a
        }
        function n_() {
            var a = Ws[Ws.length - 1];
            Ws.pop(),
            Tr(a, !1)
        }
        function Tr(a, l) {
            var d, m = ue;
            (l ? !Vt.echoes || Hs++ && a === ue : !Hs || --Hs && a === ue) || queueMicrotask(l ? function(v) {
                ++Ks,
                Vt.echoes && --Vt.echoes != 0 || (Vt.echoes = Vt.awaits = Vt.id = 0),
                Ws.push(ue),
                Tr(v, !0)
            }
            .bind(null, a) : n_),
            a !== ue && (ue = a,
            m === Be && (Be.env = fd()),
            ee && (d = Be.env.Promise,
            l = a.env,
            (m.global || a.global) && (Object.defineProperty(o, "Promise", l.PromiseProp),
            d.all = l.all,
            d.race = l.race,
            d.resolve = l.resolve,
            d.reject = l.reject,
            l.allSettled && (d.allSettled = l.allSettled),
            l.any && (d.any = l.any))))
        }
        function fd() {
            var a = o.Promise;
            return ee ? {
                Promise: a,
                PromiseProp: Object.getOwnPropertyDescriptor(o, "Promise"),
                all: a.all,
                race: a.race,
                allSettled: a.allSettled,
                any: a.any,
                resolve: a.resolve,
                reject: a.reject
            } : {}
        }
        function ri(a, l, d, m, v) {
            var b = ue;
            try {
                return Tr(a, !0),
                l(d, m, v)
            } finally {
                Tr(b, !1)
            }
        }
        function dd(a, l, d, m) {
            return typeof a != "function" ? a : function() {
                var v = ue;
                d && Mi(),
                Tr(l, !0);
                try {
                    return a.apply(this, arguments)
                } finally {
                    Tr(v, !1),
                    m && queueMicrotask(Ar)
                }
            }
        }
        function qu(a) {
            Promise === G && Vt.echoes === 0 ? Hs === 0 ? a() : enqueueNativeMicroTask(a) : setTimeout(a, 0)
        }
        ("" + xn).indexOf("[native code]") === -1 && (Mi = Ar = Ie);
        var xt = de.reject
          , ii = "￿"
          , ir = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>."
          , hd = "String expected."
          , ki = []
          , Gs = "__dbnames"
          , Gu = "readonly"
          , zu = "readwrite";
        function oi(a, l) {
            return a ? l ? function() {
                return a.apply(this, arguments) && l.apply(this, arguments)
            }
            : a : l
        }
        var pd = {
            type: 3,
            lower: -1 / 0,
            lowerOpen: !1,
            upper: [[]],
            upperOpen: !1
        };
        function zs(a) {
            return typeof a != "string" || /\./.test(a) ? function(l) {
                return l
            }
            : function(l) {
                return l[a] === void 0 && a in l && delete (l = we(l))[a],
                l
            }
        }
        function md() {
            throw z.Type()
        }
        function ot(a, l) {
            try {
                var d = gd(a)
                  , m = gd(l);
                if (d !== m)
                    return d === "Array" ? 1 : m === "Array" ? -1 : d === "binary" ? 1 : m === "binary" ? -1 : d === "string" ? 1 : m === "string" ? -1 : d === "Date" ? 1 : m !== "Date" ? NaN : -1;
                switch (d) {
                case "number":
                case "Date":
                case "string":
                    return l < a ? 1 : a < l ? -1 : 0;
                case "binary":
                    return function(v, b) {
                        for (var O = v.length, C = b.length, M = O < C ? O : C, L = 0; L < M; ++L)
                            if (v[L] !== b[L])
                                return v[L] < b[L] ? -1 : 1;
                        return O === C ? 0 : O < C ? -1 : 1
                    }(vd(a), vd(l));
                case "Array":
                    return function(v, b) {
                        for (var O = v.length, C = b.length, M = O < C ? O : C, L = 0; L < M; ++L) {
                            var H = ot(v[L], b[L]);
                            if (H !== 0)
                                return H
                        }
                        return O === C ? 0 : O < C ? -1 : 1
                    }(a, l)
                }
            } catch (v) {}
            return NaN
        }
        function gd(a) {
            var l = typeof a;
            return l != "object" ? l : ArrayBuffer.isView(a) ? "binary" : (a = Ne(a),
            a === "ArrayBuffer" ? "binary" : a)
        }
        function vd(a) {
            return a instanceof Uint8Array ? a : ArrayBuffer.isView(a) ? new Uint8Array(a.buffer,a.byteOffset,a.byteLength) : new Uint8Array(a)
        }
        var yd = (vt.prototype._trans = function(a, l, d) {
            var m = this._tx || ue.trans
              , v = this.name
              , b = he && typeof console != "undefined" && console.createTask && console.createTask("Dexie: ".concat(a === "readonly" ? "read" : "write", " ").concat(this.name));
            function O(L, H, P) {
                if (!P.schema[v])
                    throw new z.NotFound("Table " + v + " not part of transaction");
                return l(P.idbtrans, P)
            }
            var C = Yn();
            try {
                var M = m && m.db._novip === this.db._novip ? m === ue.trans ? m._promise(a, O, d) : Sr(function() {
                    return m._promise(a, O, d)
                }, {
                    trans: m,
                    transless: ue.transless || ue
                }) : function L(H, P, K, N) {
                    if (H.idbdb && (H._state.openComplete || ue.letThrough || H._vip)) {
                        var B = H._createTransaction(P, K, H._dbSchema);
                        try {
                            B.create(),
                            H._state.PR1398_maxLoop = 3
                        } catch (q) {
                            return q.name === Y.InvalidState && H.isOpen() && 0 < --H._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"),
                            H.close({
                                disableAutoOpen: !1
                            }),
                            H.open().then(function() {
                                return L(H, P, K, N)
                            })) : xt(q)
                        }
                        return B._promise(P, function(q, D) {
                            return Sr(function() {
                                return ue.trans = B,
                                N(q, D, B)
                            })
                        }).then(function(q) {
                            if (P === "readwrite")
                                try {
                                    B.idbtrans.commit()
                                } catch (D) {}
                            return P === "readonly" ? q : B._completion.then(function() {
                                return q
                            })
                        })
                    }
                    if (H._state.openComplete)
                        return xt(new z.DatabaseClosed(H._state.dbOpenError));
                    if (!H._state.isBeingOpened) {
                        if (!H._state.autoOpen)
                            return xt(new z.DatabaseClosed);
                        H.open().catch(Ie)
                    }
                    return H._state.dbReadyPromise.then(function() {
                        return L(H, P, K, N)
                    })
                }(this.db, a, [this.name], O);
                return b && (M._consoleTask = b,
                M = M.catch(function(L) {
                    return console.trace(L),
                    xt(L)
                })),
                M
            } finally {
                C && Ni()
            }
        }
        ,
        vt.prototype.get = function(a, l) {
            var d = this;
            return a && a.constructor === Object ? this.where(a).first(l) : a == null ? xt(new z.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(m) {
                return d.core.get({
                    trans: m,
                    key: a
                }).then(function(v) {
                    return d.hook.reading.fire(v)
                })
            }).then(l)
        }
        ,
        vt.prototype.where = function(a) {
            if (typeof a == "string")
                return new this.db.WhereClause(this,a);
            if (u(a))
                return new this.db.WhereClause(this,"[".concat(a.join("+"), "]"));
            var l = s(a);
            if (l.length === 1)
                return this.where(l[0]).equals(a[l[0]]);
            var d = this.schema.indexes.concat(this.schema.primKey).filter(function(M) {
                if (M.compound && l.every(function(H) {
                    return 0 <= M.keyPath.indexOf(H)
                })) {
                    for (var L = 0; L < l.length; ++L)
                        if (l.indexOf(M.keyPath[L]) === -1)
                            return !1;
                    return !0
                }
                return !1
            }).sort(function(M, L) {
                return M.keyPath.length - L.keyPath.length
            })[0];
            if (d && this.db._maxKey !== ii) {
                var O = d.keyPath.slice(0, l.length);
                return this.where(O).equals(O.map(function(L) {
                    return a[L]
                }))
            }
            !d && he && console.warn("The query ".concat(JSON.stringify(a), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(l.join("+"), "]"));
            var m = this.schema.idxByName
              , v = this.db._deps.indexedDB;
            function b(M, L) {
                return v.cmp(M, L) === 0
            }
            var C = l.reduce(function(K, L) {
                var H = K[0]
                  , P = K[1]
                  , K = m[L]
                  , N = a[L];
                return [H || K, H || !K ? oi(P, K && K.multi ? function(B) {
                    return B = $(B, L),
                    u(B) && B.some(function(q) {
                        return b(N, q)
                    })
                }
                : function(B) {
                    return b(N, $(B, L))
                }
                ) : P]
            }, [null, null])
              , O = C[0]
              , C = C[1];
            return O ? this.where(O.name).equals(a[O.keyPath]).filter(C) : d ? this.filter(C) : this.where(l).equals("")
        }
        ,
        vt.prototype.filter = function(a) {
            return this.toCollection().and(a)
        }
        ,
        vt.prototype.count = function(a) {
            return this.toCollection().count(a)
        }
        ,
        vt.prototype.offset = function(a) {
            return this.toCollection().offset(a)
        }
        ,
        vt.prototype.limit = function(a) {
            return this.toCollection().limit(a)
        }
        ,
        vt.prototype.each = function(a) {
            return this.toCollection().each(a)
        }
        ,
        vt.prototype.toArray = function(a) {
            return this.toCollection().toArray(a)
        }
        ,
        vt.prototype.toCollection = function() {
            return new this.db.Collection(new this.db.WhereClause(this))
        }
        ,
        vt.prototype.orderBy = function(a) {
            return new this.db.Collection(new this.db.WhereClause(this,u(a) ? "[".concat(a.join("+"), "]") : a))
        }
        ,
        vt.prototype.reverse = function() {
            return this.toCollection().reverse()
        }
        ,
        vt.prototype.mapToClass = function(a) {
            var l, d = this.db, m = this.name;
            function v() {
                return l !== null && l.apply(this, arguments) || this
            }
            (this.schema.mappedClass = a).prototype instanceof md && (function(M, L) {
                if (typeof L != "function" && L !== null)
                    throw new TypeError("Class extends value " + String(L) + " is not a constructor or null");
                function H() {
                    this.constructor = M
                }
                n(M, L),
                M.prototype = L === null ? Object.create(L) : (H.prototype = L.prototype,
                new H)
            }(v, l = a),
            Object.defineProperty(v.prototype, "db", {
                get: function() {
                    return d
                },
                enumerable: !1,
                configurable: !0
            }),
            v.prototype.table = function() {
                return m
            }
            ,
            a = v);
            for (var b = new Set, O = a.prototype; O; O = f(O))
                Object.getOwnPropertyNames(O).forEach(function(M) {
                    return b.add(M)
                });
            function C(M) {
                if (!M)
                    return M;
                var L, H = Object.create(a.prototype);
                for (L in M)
                    if (!b.has(L))
                        try {
                            H[L] = M[L]
                        } catch (P) {}
                return H
            }
            return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
            this.schema.readHook = C,
            this.hook("reading", C),
            a
        }
        ,
        vt.prototype.defineClass = function() {
            return this.mapToClass(function(a) {
                c(this, a)
            })
        }
        ,
        vt.prototype.add = function(a, l) {
            var d = this
              , m = this.schema.primKey
              , v = m.auto
              , b = m.keyPath
              , O = a;
            return b && v && (O = zs(b)(a)),
            this._trans("readwrite", function(C) {
                return d.core.mutate({
                    trans: C,
                    type: "add",
                    keys: l != null ? [l] : null,
                    values: [O]
                })
            }).then(function(C) {
                return C.numFailures ? de.reject(C.failures[0]) : C.lastResult
            }).then(function(C) {
                if (b)
                    try {
                        U(a, b, C)
                    } catch (M) {}
                return C
            })
        }
        ,
        vt.prototype.update = function(a, l) {
            return typeof a != "object" || u(a) ? this.where(":id").equals(a).modify(l) : (a = $(a, this.schema.primKey.keyPath),
            a === void 0 ? xt(new z.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(a).modify(l))
        }
        ,
        vt.prototype.put = function(a, l) {
            var d = this
              , m = this.schema.primKey
              , v = m.auto
              , b = m.keyPath
              , O = a;
            return b && v && (O = zs(b)(a)),
            this._trans("readwrite", function(C) {
                return d.core.mutate({
                    trans: C,
                    type: "put",
                    values: [O],
                    keys: l != null ? [l] : null
                })
            }).then(function(C) {
                return C.numFailures ? de.reject(C.failures[0]) : C.lastResult
            }).then(function(C) {
                if (b)
                    try {
                        U(a, b, C)
                    } catch (M) {}
                return C
            })
        }
        ,
        vt.prototype.delete = function(a) {
            var l = this;
            return this._trans("readwrite", function(d) {
                return l.core.mutate({
                    trans: d,
                    type: "delete",
                    keys: [a]
                })
            }).then(function(d) {
                return d.numFailures ? de.reject(d.failures[0]) : void 0
            })
        }
        ,
        vt.prototype.clear = function() {
            var a = this;
            return this._trans("readwrite", function(l) {
                return a.core.mutate({
                    trans: l,
                    type: "deleteRange",
                    range: pd
                })
            }).then(function(l) {
                return l.numFailures ? de.reject(l.failures[0]) : void 0
            })
        }
        ,
        vt.prototype.bulkGet = function(a) {
            var l = this;
            return this._trans("readonly", function(d) {
                return l.core.getMany({
                    keys: a,
                    trans: d
                }).then(function(m) {
                    return m.map(function(v) {
                        return l.hook.reading.fire(v)
                    })
                })
            })
        }
        ,
        vt.prototype.bulkAdd = function(a, l, d) {
            var m = this
              , v = Array.isArray(l) ? l : void 0
              , b = (d = d || (v ? void 0 : l)) ? d.allKeys : void 0;
            return this._trans("readwrite", function(O) {
                var L = m.schema.primKey
                  , C = L.auto
                  , L = L.keyPath;
                if (L && v)
                    throw new z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (v && v.length !== a.length)
                    throw new z.InvalidArgument("Arguments objects and keys must have the same length");
                var M = a.length
                  , L = L && C ? a.map(zs(L)) : a;
                return m.core.mutate({
                    trans: O,
                    type: "add",
                    keys: v,
                    values: L,
                    wantResults: b
                }).then(function(B) {
                    var P = B.numFailures
                      , K = B.results
                      , N = B.lastResult
                      , B = B.failures;
                    if (P === 0)
                        return b ? K : N;
                    throw new ge("".concat(m.name, ".bulkAdd(): ").concat(P, " of ").concat(M, " operations failed"),B)
                })
            })
        }
        ,
        vt.prototype.bulkPut = function(a, l, d) {
            var m = this
              , v = Array.isArray(l) ? l : void 0
              , b = (d = d || (v ? void 0 : l)) ? d.allKeys : void 0;
            return this._trans("readwrite", function(O) {
                var L = m.schema.primKey
                  , C = L.auto
                  , L = L.keyPath;
                if (L && v)
                    throw new z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                if (v && v.length !== a.length)
                    throw new z.InvalidArgument("Arguments objects and keys must have the same length");
                var M = a.length
                  , L = L && C ? a.map(zs(L)) : a;
                return m.core.mutate({
                    trans: O,
                    type: "put",
                    keys: v,
                    values: L,
                    wantResults: b
                }).then(function(B) {
                    var P = B.numFailures
                      , K = B.results
                      , N = B.lastResult
                      , B = B.failures;
                    if (P === 0)
                        return b ? K : N;
                    throw new ge("".concat(m.name, ".bulkPut(): ").concat(P, " of ").concat(M, " operations failed"),B)
                })
            })
        }
        ,
        vt.prototype.bulkUpdate = function(a) {
            var l = this
              , d = this.core
              , m = a.map(function(O) {
                return O.key
            })
              , v = a.map(function(O) {
                return O.changes
            })
              , b = [];
            return this._trans("readwrite", function(O) {
                return d.getMany({
                    trans: O,
                    keys: m,
                    cache: "clone"
                }).then(function(C) {
                    var M = []
                      , L = [];
                    a.forEach(function(P, K) {
                        var N = P.key
                          , B = P.changes
                          , q = C[K];
                        if (q) {
                            for (var D = 0, J = Object.keys(B); D < J.length; D++) {
                                var X = J[D]
                                  , Q = B[X];
                                if (X === l.schema.primKey.keyPath) {
                                    if (ot(Q, N) !== 0)
                                        throw new z.Constraint("Cannot update primary key in bulkUpdate()")
                                } else
                                    U(q, X, Q)
                            }
                            b.push(K),
                            M.push(N),
                            L.push(q)
                        }
                    });
                    var H = M.length;
                    return d.mutate({
                        trans: O,
                        type: "put",
                        keys: M,
                        values: L,
                        updates: {
                            keys: m,
                            changeSpecs: v
                        }
                    }).then(function(P) {
                        var K = P.numFailures
                          , N = P.failures;
                        if (K === 0)
                            return H;
                        for (var B = 0, q = Object.keys(N); B < q.length; B++) {
                            var D, J = q[B], X = b[Number(J)];
                            X != null && (D = N[J],
                            delete N[J],
                            N[X] = D)
                        }
                        throw new ge("".concat(l.name, ".bulkUpdate(): ").concat(K, " of ").concat(H, " operations failed"),N)
                    })
                })
            })
        }
        ,
        vt.prototype.bulkDelete = function(a) {
            var l = this
              , d = a.length;
            return this._trans("readwrite", function(m) {
                return l.core.mutate({
                    trans: m,
                    type: "delete",
                    keys: a
                })
            }).then(function(O) {
                var v = O.numFailures
                  , b = O.lastResult
                  , O = O.failures;
                if (v === 0)
                    return b;
                throw new ge("".concat(l.name, ".bulkDelete(): ").concat(v, " of ").concat(d, " operations failed"),O)
            })
        }
        ,
        vt);
        function vt() {}
        function Co(a) {
            function l(O, C) {
                if (C) {
                    for (var M = arguments.length, L = new Array(M - 1); --M; )
                        L[M - 1] = arguments[M];
                    return d[O].subscribe.apply(null, L),
                    a
                }
                if (typeof O == "string")
                    return d[O]
            }
            var d = {};
            l.addEventType = b;
            for (var m = 1, v = arguments.length; m < v; ++m)
                b(arguments[m]);
            return l;
            function b(O, C, M) {
                if (typeof O != "object") {
                    var L;
                    C = C || Ee;
                    var H = {
                        subscribers: [],
                        fire: M = M || Ie,
                        subscribe: function(P) {
                            H.subscribers.indexOf(P) === -1 && (H.subscribers.push(P),
                            H.fire = C(H.fire, P))
                        },
                        unsubscribe: function(P) {
                            H.subscribers = H.subscribers.filter(function(K) {
                                return K !== P
                            }),
                            H.fire = H.subscribers.reduce(C, M)
                        }
                    };
                    return d[O] = l[O] = H
                }
                s(L = O).forEach(function(P) {
                    var K = L[P];
                    if (u(K))
                        b(P, L[P][0], L[P][1]);
                    else {
                        if (K !== "asap")
                            throw new z.InvalidArgument("Invalid event config");
                        var N = b(P, S, function() {
                            for (var B = arguments.length, q = new Array(B); B--; )
                                q[B] = arguments[B];
                            N.subscribers.forEach(function(D) {
                                W(function() {
                                    D.apply(null, q)
                                })
                            })
                        })
                    }
                })
            }
        }
        function xo(a, l) {
            return R(l).from({
                prototype: a
            }),
            l
        }
        function $i(a, l) {
            return !(a.filter || a.algorithm || a.or) && (l ? a.justLimit : !a.replayFilter)
        }
        function Yu(a, l) {
            a.filter = oi(a.filter, l)
        }
        function Ju(a, l, d) {
            var m = a.replayFilter;
            a.replayFilter = m ? function() {
                return oi(m(), l())
            }
            : l,
            a.justLimit = d && !m
        }
        function Ys(a, l) {
            if (a.isPrimKey)
                return l.primaryKey;
            var d = l.getIndexByKeyPath(a.index);
            if (!d)
                throw new z.Schema("KeyPath " + a.index + " on object store " + l.name + " is not indexed");
            return d
        }
        function bd(a, l, d) {
            var m = Ys(a, l.schema);
            return l.openCursor({
                trans: d,
                values: !a.keysOnly,
                reverse: a.dir === "prev",
                unique: !!a.unique,
                query: {
                    index: m,
                    range: a.range
                }
            })
        }
        function Js(a, l, d, m) {
            var v = a.replayFilter ? oi(a.filter, a.replayFilter()) : a.filter;
            if (a.or) {
                var b = {}
                  , O = function(C, M, L) {
                    var H, P;
                    v && !v(M, L, function(K) {
                        return M.stop(K)
                    }, function(K) {
                        return M.fail(K)
                    }) || ((P = "" + (H = M.primaryKey)) == "[object ArrayBuffer]" && (P = "" + new Uint8Array(H)),
                    p(b, P) || (b[P] = !0,
                    l(C, M, L)))
                };
                return Promise.all([a.or._iterate(O, d), _d(bd(a, m, d), a.algorithm, O, !a.keysOnly && a.valueMapper)])
            }
            return _d(bd(a, m, d), oi(a.algorithm, v), l, !a.keysOnly && a.valueMapper)
        }
        function _d(a, l, d, m) {
            var v = Ot(m ? function(b, O, C) {
                return d(m(b), O, C)
            }
            : d);
            return a.then(function(b) {
                if (b)
                    return b.start(function() {
                        var O = function() {
                            return b.continue()
                        };
                        l && !l(b, function(C) {
                            return O = C
                        }, function(C) {
                            b.stop(C),
                            O = Ie
                        }, function(C) {
                            b.fail(C),
                            O = Ie
                        }) || v(b.value, b, function(C) {
                            return O = C
                        }),
                        O()
                    })
            })
        }
        var or = Symbol()
          , Po = (wd.prototype.execute = function(a) {
            if (this.add !== void 0) {
                var l = this.add;
                if (u(l))
                    return i(i([], u(a) ? a : [], !0), l).sort();
                if (typeof l == "number")
                    return (Number(a) || 0) + l;
                if (typeof l == "bigint")
                    try {
                        return BigInt(a) + l
                    } catch (m) {
                        return BigInt(0) + l
                    }
                throw new TypeError("Invalid term ".concat(l))
            }
            if (this.remove !== void 0) {
                var d = this.remove;
                if (u(d))
                    return u(a) ? a.filter(function(m) {
                        return !d.includes(m)
                    }).sort() : [];
                if (typeof d == "number")
                    return Number(a) - d;
                if (typeof d == "bigint")
                    try {
                        return BigInt(a) - d
                    } catch (m) {
                        return BigInt(0) - d
                    }
                throw new TypeError("Invalid subtrahend ".concat(d))
            }
            return l = (l = this.replacePrefix) === null || l === void 0 ? void 0 : l[0],
            l && typeof a == "string" && a.startsWith(l) ? this.replacePrefix[1] + a.substring(l.length) : a
        }
        ,
        wd);
        function wd(a) {
            Object.assign(this, a)
        }
        var r_ = (rt.prototype._read = function(a, l) {
            var d = this._ctx;
            return d.error ? d.table._trans(null, xt.bind(null, d.error)) : d.table._trans("readonly", a).then(l)
        }
        ,
        rt.prototype._write = function(a) {
            var l = this._ctx;
            return l.error ? l.table._trans(null, xt.bind(null, l.error)) : l.table._trans("readwrite", a, "locked")
        }
        ,
        rt.prototype._addAlgorithm = function(a) {
            var l = this._ctx;
            l.algorithm = oi(l.algorithm, a)
        }
        ,
        rt.prototype._iterate = function(a, l) {
            return Js(this._ctx, a, l, this._ctx.table.core)
        }
        ,
        rt.prototype.clone = function(a) {
            var l = Object.create(this.constructor.prototype)
              , d = Object.create(this._ctx);
            return a && c(d, a),
            l._ctx = d,
            l
        }
        ,
        rt.prototype.raw = function() {
            return this._ctx.valueMapper = null,
            this
        }
        ,
        rt.prototype.each = function(a) {
            var l = this._ctx;
            return this._read(function(d) {
                return Js(l, a, d, l.table.core)
            })
        }
        ,
        rt.prototype.count = function(a) {
            var l = this;
            return this._read(function(d) {
                var m = l._ctx
                  , v = m.table.core;
                if ($i(m, !0))
                    return v.count({
                        trans: d,
                        query: {
                            index: Ys(m, v.schema),
                            range: m.range
                        }
                    }).then(function(O) {
                        return Math.min(O, m.limit)
                    });
                var b = 0;
                return Js(m, function() {
                    return ++b,
                    !1
                }, d, v).then(function() {
                    return b
                })
            }).then(a)
        }
        ,
        rt.prototype.sortBy = function(a, l) {
            var d = a.split(".").reverse()
              , m = d[0]
              , v = d.length - 1;
            function b(M, L) {
                return L ? b(M[d[L]], L - 1) : M[m]
            }
            var O = this._ctx.dir === "next" ? 1 : -1;
            function C(M, L) {
                return M = b(M, v),
                L = b(L, v),
                M < L ? -O : L < M ? O : 0
            }
            return this.toArray(function(M) {
                return M.sort(C)
            }).then(l)
        }
        ,
        rt.prototype.toArray = function(a) {
            var l = this;
            return this._read(function(d) {
                var m = l._ctx;
                if (m.dir === "next" && $i(m, !0) && 0 < m.limit) {
                    var v = m.valueMapper
                      , b = Ys(m, m.table.core.schema);
                    return m.table.core.query({
                        trans: d,
                        limit: m.limit,
                        values: !0,
                        query: {
                            index: b,
                            range: m.range
                        }
                    }).then(function(C) {
                        return C = C.result,
                        v ? C.map(v) : C
                    })
                }
                var O = [];
                return Js(m, function(C) {
                    return O.push(C)
                }, d, m.table.core).then(function() {
                    return O
                })
            }, a)
        }
        ,
        rt.prototype.offset = function(a) {
            var l = this._ctx;
            return a <= 0 || (l.offset += a,
            $i(l) ? Ju(l, function() {
                var d = a;
                return function(m, v) {
                    return d === 0 || (d === 1 ? --d : v(function() {
                        m.advance(d),
                        d = 0
                    }),
                    !1)
                }
            }) : Ju(l, function() {
                var d = a;
                return function() {
                    return --d < 0
                }
            })),
            this
        }
        ,
        rt.prototype.limit = function(a) {
            return this._ctx.limit = Math.min(this._ctx.limit, a),
            Ju(this._ctx, function() {
                var l = a;
                return function(d, m, v) {
                    return --l <= 0 && m(v),
                    0 <= l
                }
            }, !0),
            this
        }
        ,
        rt.prototype.until = function(a, l) {
            return Yu(this._ctx, function(d, m, v) {
                return !a(d.value) || (m(v),
                l)
            }),
            this
        }
        ,
        rt.prototype.first = function(a) {
            return this.limit(1).toArray(function(l) {
                return l[0]
            }).then(a)
        }
        ,
        rt.prototype.last = function(a) {
            return this.reverse().first(a)
        }
        ,
        rt.prototype.filter = function(a) {
            var l;
            return Yu(this._ctx, function(d) {
                return a(d.value)
            }),
            (l = this._ctx).isMatch = oi(l.isMatch, a),
            this
        }
        ,
        rt.prototype.and = function(a) {
            return this.filter(a)
        }
        ,
        rt.prototype.or = function(a) {
            return new this.db.WhereClause(this._ctx.table,a,this)
        }
        ,
        rt.prototype.reverse = function() {
            return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev",
            this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
            this
        }
        ,
        rt.prototype.desc = function() {
            return this.reverse()
        }
        ,
        rt.prototype.eachKey = function(a) {
            var l = this._ctx;
            return l.keysOnly = !l.isMatch,
            this.each(function(d, m) {
                a(m.key, m)
            })
        }
        ,
        rt.prototype.eachUniqueKey = function(a) {
            return this._ctx.unique = "unique",
            this.eachKey(a)
        }
        ,
        rt.prototype.eachPrimaryKey = function(a) {
            var l = this._ctx;
            return l.keysOnly = !l.isMatch,
            this.each(function(d, m) {
                a(m.primaryKey, m)
            })
        }
        ,
        rt.prototype.keys = function(a) {
            var l = this._ctx;
            l.keysOnly = !l.isMatch;
            var d = [];
            return this.each(function(m, v) {
                d.push(v.key)
            }).then(function() {
                return d
            }).then(a)
        }
        ,
        rt.prototype.primaryKeys = function(a) {
            var l = this._ctx;
            if (l.dir === "next" && $i(l, !0) && 0 < l.limit)
                return this._read(function(m) {
                    var v = Ys(l, l.table.core.schema);
                    return l.table.core.query({
                        trans: m,
                        values: !1,
                        limit: l.limit,
                        query: {
                            index: v,
                            range: l.range
                        }
                    })
                }).then(function(m) {
                    return m.result
                }).then(a);
            l.keysOnly = !l.isMatch;
            var d = [];
            return this.each(function(m, v) {
                d.push(v.primaryKey)
            }).then(function() {
                return d
            }).then(a)
        }
        ,
        rt.prototype.uniqueKeys = function(a) {
            return this._ctx.unique = "unique",
            this.keys(a)
        }
        ,
        rt.prototype.firstKey = function(a) {
            return this.limit(1).keys(function(l) {
                return l[0]
            }).then(a)
        }
        ,
        rt.prototype.lastKey = function(a) {
            return this.reverse().firstKey(a)
        }
        ,
        rt.prototype.distinct = function() {
            var a = this._ctx
              , a = a.index && a.table.schema.idxByName[a.index];
            if (!a || !a.multi)
                return this;
            var l = {};
            return Yu(this._ctx, function(v) {
                var m = v.primaryKey.toString()
                  , v = p(l, m);
                return l[m] = !0,
                !v
            }),
            this
        }
        ,
        rt.prototype.modify = function(a) {
            var l = this
              , d = this._ctx;
            return this._write(function(m) {
                var v, b, O;
                O = typeof a == "function" ? a : (v = s(a),
                b = v.length,
                function(D) {
                    for (var J = !1, X = 0; X < b; ++X) {
                        var Q = v[X]
                          , re = a[Q]
                          , ce = $(D, Q);
                        re instanceof Po ? (U(D, Q, re.execute(ce)),
                        J = !0) : ce !== re && (U(D, Q, re),
                        J = !0)
                    }
                    return J
                }
                );
                function C(D, Q) {
                    var X = Q.failures
                      , Q = Q.numFailures;
                    B += D - Q;
                    for (var re = 0, ce = s(X); re < ce.length; re++) {
                        var Ce = ce[re];
                        N.push(X[Ce])
                    }
                }
                var M = d.table.core
                  , L = M.schema.primaryKey
                  , H = L.outbound
                  , P = L.extractKey
                  , K = l.db._options.modifyChunkSize || 200
                  , N = []
                  , B = 0
                  , q = [];
                return l.clone().primaryKeys().then(function(D) {
                    function J(Q) {
                        var re = Math.min(K, D.length - Q);
                        return M.getMany({
                            trans: m,
                            keys: D.slice(Q, Q + re),
                            cache: "immutable"
                        }).then(function(ce) {
                            for (var Ce = [], ye = [], Ae = H ? [] : null, Pe = [], Se = 0; Se < re; ++Se) {
                                var Ke = ce[Se]
                                  , qe = {
                                    value: we(Ke),
                                    primKey: D[Q + Se]
                                };
                                O.call(qe, qe.value, qe) !== !1 && (qe.value == null ? Pe.push(D[Q + Se]) : H || ot(P(Ke), P(qe.value)) === 0 ? (ye.push(qe.value),
                                H && Ae.push(D[Q + Se])) : (Pe.push(D[Q + Se]),
                                Ce.push(qe.value)))
                            }
                            return Promise.resolve(0 < Ce.length && M.mutate({
                                trans: m,
                                type: "add",
                                values: Ce
                            }).then(function(Ze) {
                                for (var Je in Ze.failures)
                                    Pe.splice(parseInt(Je), 1);
                                C(Ce.length, Ze)
                            })).then(function() {
                                return (0 < ye.length || X && typeof a == "object") && M.mutate({
                                    trans: m,
                                    type: "put",
                                    keys: Ae,
                                    values: ye,
                                    criteria: X,
                                    changeSpec: typeof a != "function" && a,
                                    isAdditionalChunk: 0 < Q
                                }).then(function(Ze) {
                                    return C(ye.length, Ze)
                                })
                            }).then(function() {
                                return (0 < Pe.length || X && a === Xu) && M.mutate({
                                    trans: m,
                                    type: "delete",
                                    keys: Pe,
                                    criteria: X,
                                    isAdditionalChunk: 0 < Q
                                }).then(function(Ze) {
                                    return C(Pe.length, Ze)
                                })
                            }).then(function() {
                                return D.length > Q + re && J(Q + K)
                            })
                        })
                    }
                    var X = $i(d) && d.limit === 1 / 0 && (typeof a != "function" || a === Xu) && {
                        index: d.index,
                        range: d.range
                    };
                    return J(0).then(function() {
                        if (0 < N.length)
                            throw new qt("Error modifying one or more objects",N,B,q);
                        return D.length
                    })
                })
            })
        }
        ,
        rt.prototype.delete = function() {
            var a = this._ctx
              , l = a.range;
            return $i(a) && (a.isPrimKey || l.type === 3) ? this._write(function(d) {
                var m = a.table.core.schema.primaryKey
                  , v = l;
                return a.table.core.count({
                    trans: d,
                    query: {
                        index: m,
                        range: v
                    }
                }).then(function(b) {
                    return a.table.core.mutate({
                        trans: d,
                        type: "deleteRange",
                        range: v
                    }).then(function(O) {
                        var C = O.failures;
                        if (O.lastResult,
                        O.results,
                        O = O.numFailures,
                        O)
                            throw new qt("Could not delete some values",Object.keys(C).map(function(M) {
                                return C[M]
                            }),b - O);
                        return b - O
                    })
                })
            }) : this.modify(Xu)
        }
        ,
        rt);
        function rt() {}
        var Xu = function(a, l) {
            return l.value = null
        };
        function i_(a, l) {
            return a < l ? -1 : a === l ? 0 : 1
        }
        function o_(a, l) {
            return l < a ? -1 : a === l ? 0 : 1
        }
        function bn(a, l, d) {
            return a = a instanceof Od ? new a.Collection(a) : a,
            a._ctx.error = new (d || TypeError)(l),
            a
        }
        function Di(a) {
            return new a.Collection(a,function() {
                return Ed("")
            }
            ).limit(0)
        }
        function Xs(a, l, d, m) {
            var v, b, O, C, M, L, H, P = d.length;
            if (!d.every(function(B) {
                return typeof B == "string"
            }))
                return bn(a, hd);
            function K(B) {
                v = B === "next" ? function(D) {
                    return D.toUpperCase()
                }
                : function(D) {
                    return D.toLowerCase()
                }
                ,
                b = B === "next" ? function(D) {
                    return D.toLowerCase()
                }
                : function(D) {
                    return D.toUpperCase()
                }
                ,
                O = B === "next" ? i_ : o_;
                var q = d.map(function(D) {
                    return {
                        lower: b(D),
                        upper: v(D)
                    }
                }).sort(function(D, J) {
                    return O(D.lower, J.lower)
                });
                C = q.map(function(D) {
                    return D.upper
                }),
                M = q.map(function(D) {
                    return D.lower
                }),
                H = (L = B) === "next" ? "" : m
            }
            K("next"),
            a = new a.Collection(a,function() {
                return Rr(C[0], M[P - 1] + m)
            }
            ),
            a._ondirectionchange = function(B) {
                K(B)
            }
            ;
            var N = 0;
            return a._addAlgorithm(function(B, q, D) {
                var J = B.key;
                if (typeof J != "string")
                    return !1;
                var X = b(J);
                if (l(X, M, N))
                    return !0;
                for (var Q = null, re = N; re < P; ++re) {
                    var ce = function(Ce, ye, Ae, Pe, Se, Ke) {
                        for (var qe = Math.min(Ce.length, Pe.length), Ze = -1, Je = 0; Je < qe; ++Je) {
                            var kn = ye[Je];
                            if (kn !== Pe[Je])
                                return Se(Ce[Je], Ae[Je]) < 0 ? Ce.substr(0, Je) + Ae[Je] + Ae.substr(Je + 1) : Se(Ce[Je], Pe[Je]) < 0 ? Ce.substr(0, Je) + Pe[Je] + Ae.substr(Je + 1) : 0 <= Ze ? Ce.substr(0, Ze) + ye[Ze] + Ae.substr(Ze + 1) : null;
                            Se(Ce[Je], kn) < 0 && (Ze = Je)
                        }
                        return qe < Pe.length && Ke === "next" ? Ce + Ae.substr(Ce.length) : qe < Ce.length && Ke === "prev" ? Ce.substr(0, Ae.length) : Ze < 0 ? null : Ce.substr(0, Ze) + Pe[Ze] + Ae.substr(Ze + 1)
                    }(J, X, C[re], M[re], O, L);
                    ce === null && Q === null ? N = re + 1 : (Q === null || 0 < O(Q, ce)) && (Q = ce)
                }
                return q(Q !== null ? function() {
                    B.continue(Q + H)
                }
                : D),
                !1
            }),
            a
        }
        function Rr(a, l, d, m) {
            return {
                type: 2,
                lower: a,
                upper: l,
                lowerOpen: d,
                upperOpen: m
            }
        }
        function Ed(a) {
            return {
                type: 1,
                lower: a,
                upper: a
            }
        }
        var Od = (Object.defineProperty(Ut.prototype, "Collection", {
            get: function() {
                return this._ctx.table.db.Collection
            },
            enumerable: !1,
            configurable: !0
        }),
        Ut.prototype.between = function(a, l, d, m) {
            d = d !== !1,
            m = m === !0;
            try {
                return 0 < this._cmp(a, l) || this._cmp(a, l) === 0 && (d || m) && (!d || !m) ? Di(this) : new this.Collection(this,function() {
                    return Rr(a, l, !d, !m)
                }
                )
            } catch (v) {
                return bn(this, ir)
            }
        }
        ,
        Ut.prototype.equals = function(a) {
            return a == null ? bn(this, ir) : new this.Collection(this,function() {
                return Ed(a)
            }
            )
        }
        ,
        Ut.prototype.above = function(a) {
            return a == null ? bn(this, ir) : new this.Collection(this,function() {
                return Rr(a, void 0, !0)
            }
            )
        }
        ,
        Ut.prototype.aboveOrEqual = function(a) {
            return a == null ? bn(this, ir) : new this.Collection(this,function() {
                return Rr(a, void 0, !1)
            }
            )
        }
        ,
        Ut.prototype.below = function(a) {
            return a == null ? bn(this, ir) : new this.Collection(this,function() {
                return Rr(void 0, a, !1, !0)
            }
            )
        }
        ,
        Ut.prototype.belowOrEqual = function(a) {
            return a == null ? bn(this, ir) : new this.Collection(this,function() {
                return Rr(void 0, a)
            }
            )
        }
        ,
        Ut.prototype.startsWith = function(a) {
            return typeof a != "string" ? bn(this, hd) : this.between(a, a + ii, !0, !0)
        }
        ,
        Ut.prototype.startsWithIgnoreCase = function(a) {
            return a === "" ? this.startsWith(a) : Xs(this, function(l, d) {
                return l.indexOf(d[0]) === 0
            }, [a], ii)
        }
        ,
        Ut.prototype.equalsIgnoreCase = function(a) {
            return Xs(this, function(l, d) {
                return l === d[0]
            }, [a], "")
        }
        ,
        Ut.prototype.anyOfIgnoreCase = function() {
            var a = dt.apply(ut, arguments);
            return a.length === 0 ? Di(this) : Xs(this, function(l, d) {
                return d.indexOf(l) !== -1
            }, a, "")
        }
        ,
        Ut.prototype.startsWithAnyOfIgnoreCase = function() {
            var a = dt.apply(ut, arguments);
            return a.length === 0 ? Di(this) : Xs(this, function(l, d) {
                return d.some(function(m) {
                    return l.indexOf(m) === 0
                })
            }, a, ii)
        }
        ,
        Ut.prototype.anyOf = function() {
            var a = this
              , l = dt.apply(ut, arguments)
              , d = this._cmp;
            try {
                l.sort(d)
            } catch (b) {
                return bn(this, ir)
            }
            if (l.length === 0)
                return Di(this);
            var m = new this.Collection(this,function() {
                return Rr(l[0], l[l.length - 1])
            }
            );
            m._ondirectionchange = function(b) {
                d = b === "next" ? a._ascending : a._descending,
                l.sort(d)
            }
            ;
            var v = 0;
            return m._addAlgorithm(function(b, O, C) {
                for (var M = b.key; 0 < d(M, l[v]); )
                    if (++v === l.length)
                        return O(C),
                        !1;
                return d(M, l[v]) === 0 || (O(function() {
                    b.continue(l[v])
                }),
                !1)
            }),
            m
        }
        ,
        Ut.prototype.notEqual = function(a) {
            return this.inAnyRange([[-1 / 0, a], [a, this.db._maxKey]], {
                includeLowers: !1,
                includeUppers: !1
            })
        }
        ,
        Ut.prototype.noneOf = function() {
            var a = dt.apply(ut, arguments);
            if (a.length === 0)
                return new this.Collection(this);
            try {
                a.sort(this._ascending)
            } catch (d) {
                return bn(this, ir)
            }
            var l = a.reduce(function(d, m) {
                return d ? d.concat([[d[d.length - 1][1], m]]) : [[-1 / 0, m]]
            }, null);
            return l.push([a[a.length - 1], this.db._maxKey]),
            this.inAnyRange(l, {
                includeLowers: !1,
                includeUppers: !1
            })
        }
        ,
        Ut.prototype.inAnyRange = function(J, l) {
            var d = this
              , m = this._cmp
              , v = this._ascending
              , b = this._descending
              , O = this._min
              , C = this._max;
            if (J.length === 0)
                return Di(this);
            if (!J.every(function(X) {
                return X[0] !== void 0 && X[1] !== void 0 && v(X[0], X[1]) <= 0
            }))
                return bn(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", z.InvalidArgument);
            var M = !l || l.includeLowers !== !1, L = l && l.includeUppers === !0, H, P = v;
            function K(X, Q) {
                return P(X[0], Q[0])
            }
            try {
                (H = J.reduce(function(X, Q) {
                    for (var re = 0, ce = X.length; re < ce; ++re) {
                        var Ce = X[re];
                        if (m(Q[0], Ce[1]) < 0 && 0 < m(Q[1], Ce[0])) {
                            Ce[0] = O(Ce[0], Q[0]),
                            Ce[1] = C(Ce[1], Q[1]);
                            break
                        }
                    }
                    return re === ce && X.push(Q),
                    X
                }, [])).sort(K)
            } catch (X) {
                return bn(this, ir)
            }
            var N = 0
              , B = L ? function(X) {
                return 0 < v(X, H[N][1])
            }
            : function(X) {
                return 0 <= v(X, H[N][1])
            }
              , q = M ? function(X) {
                return 0 < b(X, H[N][0])
            }
            : function(X) {
                return 0 <= b(X, H[N][0])
            }
              , D = B
              , J = new this.Collection(this,function() {
                return Rr(H[0][0], H[H.length - 1][1], !M, !L)
            }
            );
            return J._ondirectionchange = function(X) {
                P = X === "next" ? (D = B,
                v) : (D = q,
                b),
                H.sort(K)
            }
            ,
            J._addAlgorithm(function(X, Q, re) {
                for (var ce, Ce = X.key; D(Ce); )
                    if (++N === H.length)
                        return Q(re),
                        !1;
                return !B(ce = Ce) && !q(ce) || (d._cmp(Ce, H[N][1]) === 0 || d._cmp(Ce, H[N][0]) === 0 || Q(function() {
                    P === v ? X.continue(H[N][0]) : X.continue(H[N][1])
                }),
                !1)
            }),
            J
        }
        ,
        Ut.prototype.startsWithAnyOf = function() {
            var a = dt.apply(ut, arguments);
            return a.every(function(l) {
                return typeof l == "string"
            }) ? a.length === 0 ? Di(this) : this.inAnyRange(a.map(function(l) {
                return [l, l + ii]
            })) : bn(this, "startsWithAnyOf() only works with strings")
        }
        ,
        Ut);
        function Ut() {}
        function Jn(a) {
            return Ot(function(l) {
                return Io(l),
                a(l.target.error),
                !1
            })
        }
        function Io(a) {
            a.stopPropagation && a.stopPropagation(),
            a.preventDefault && a.preventDefault()
        }
        var Fo = "storagemutated"
          , Qu = "x-storagemutated-1"
          , Cr = Co(null, Fo)
          , s_ = (Xn.prototype._lock = function() {
            return I(!ue.global),
            ++this._reculock,
            this._reculock !== 1 || ue.global || (ue.lockOwnerFor = this),
            this
        }
        ,
        Xn.prototype._unlock = function() {
            if (I(!ue.global),
            --this._reculock == 0)
                for (ue.global || (ue.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
                    var a = this._blockedFuncs.shift();
                    try {
                        ri(a[1], a[0])
                    } catch (l) {}
                }
            return this
        }
        ,
        Xn.prototype._locked = function() {
            return this._reculock && ue.lockOwnerFor !== this
        }
        ,
        Xn.prototype.create = function(a) {
            var l = this;
            if (!this.mode)
                return this;
            var d = this.db.idbdb
              , m = this.db._state.dbOpenError;
            if (I(!this.idbtrans),
            !a && !d)
                switch (m && m.name) {
                case "DatabaseClosedError":
                    throw new z.DatabaseClosed(m);
                case "MissingAPIError":
                    throw new z.MissingAPI(m.message,m);
                default:
                    throw new z.OpenFailed(m)
                }
            if (!this.active)
                throw new z.TransactionInactive;
            return I(this._completion._state === null),
            (a = this.idbtrans = a || (this.db.core || d).transaction(this.storeNames, this.mode, {
                durability: this.chromeTransactionDurability
            })).onerror = Ot(function(v) {
                Io(v),
                l._reject(a.error)
            }),
            a.onabort = Ot(function(v) {
                Io(v),
                l.active && l._reject(new z.Abort(a.error)),
                l.active = !1,
                l.on("abort").fire(v)
            }),
            a.oncomplete = Ot(function() {
                l.active = !1,
                l._resolve(),
                "mutatedParts"in a && Cr.storagemutated.fire(a.mutatedParts)
            }),
            this
        }
        ,
        Xn.prototype._promise = function(a, l, d) {
            var m = this;
            if (a === "readwrite" && this.mode !== "readwrite")
                return xt(new z.ReadOnly("Transaction is readonly"));
            if (!this.active)
                return xt(new z.TransactionInactive);
            if (this._locked())
                return new de(function(b, O) {
                    m._blockedFuncs.push([function() {
                        m._promise(a, l, d).then(b, O)
                    }
                    , ue])
                }
                );
            if (d)
                return Sr(function() {
                    var b = new de(function(O, C) {
                        m._lock();
                        var M = l(O, C, m);
                        M && M.then && M.then(O, C)
                    }
                    );
                    return b.finally(function() {
                        return m._unlock()
                    }),
                    b._lib = !0,
                    b
                });
            var v = new de(function(b, O) {
                var C = l(b, O, m);
                C && C.then && C.then(b, O)
            }
            );
            return v._lib = !0,
            v
        }
        ,
        Xn.prototype._root = function() {
            return this.parent ? this.parent._root() : this
        }
        ,
        Xn.prototype.waitFor = function(a) {
            var l, d = this._root(), m = de.resolve(a);
            d._waitingFor ? d._waitingFor = d._waitingFor.then(function() {
                return m
            }) : (d._waitingFor = m,
            d._waitingQueue = [],
            l = d.idbtrans.objectStore(d.storeNames[0]),
            function b() {
                for (++d._spinCount; d._waitingQueue.length; )
                    d._waitingQueue.shift()();
                d._waitingFor && (l.get(-1 / 0).onsuccess = b)
            }());
            var v = d._waitingFor;
            return new de(function(b, O) {
                m.then(function(C) {
                    return d._waitingQueue.push(Ot(b.bind(null, C)))
                }, function(C) {
                    return d._waitingQueue.push(Ot(O.bind(null, C)))
                }).finally(function() {
                    d._waitingFor === v && (d._waitingFor = null)
                })
            }
            )
        }
        ,
        Xn.prototype.abort = function() {
            this.active && (this.active = !1,
            this.idbtrans && this.idbtrans.abort(),
            this._reject(new z.Abort))
        }
        ,
        Xn.prototype.table = function(a) {
            var l = this._memoizedTables || (this._memoizedTables = {});
            if (p(l, a))
                return l[a];
            var d = this.schema[a];
            if (!d)
                throw new z.NotFound("Table " + a + " not part of transaction");
            return d = new this.db.Table(a,d,this),
            d.core = this.db.core.table(a),
            l[a] = d
        }
        ,
        Xn);
        function Xn() {}
        function Zu(a, l, d, m, v, b, O) {
            return {
                name: a,
                keyPath: l,
                unique: d,
                multi: m,
                auto: v,
                compound: b,
                src: (d && !O ? "&" : "") + (m ? "*" : "") + (v ? "++" : "") + Sd(l)
            }
        }
        function Sd(a) {
            return typeof a == "string" ? a : a ? "[" + [].join.call(a, "+") + "]" : ""
        }
        function el(a, l, d) {
            return {
                name: a,
                primKey: l,
                indexes: d,
                mappedClass: null,
                idxByName: (m = function(v) {
                    return [v.name, v]
                }
                ,
                d.reduce(function(v, b, O) {
                    return O = m(b, O),
                    O && (v[O[0]] = O[1]),
                    v
                }, {}))
            };
            var m
        }
        var Lo = function(a) {
            try {
                return a.only([[]]),
                Lo = function() {
                    return [[]]
                }
                ,
                [[]]
            } catch (l) {
                return Lo = function() {
                    return ii
                }
                ,
                ii
            }
        };
        function tl(a) {
            return a == null ? function() {}
            : typeof a == "string" ? (l = a).split(".").length === 1 ? function(d) {
                return d[l]
            }
            : function(d) {
                return $(d, l)
            }
            : function(d) {
                return $(d, a)
            }
            ;
            var l
        }
        function Ad(a) {
            return [].slice.call(a)
        }
        var a_ = 0;
        function No(a) {
            return a == null ? ":id" : typeof a == "string" ? a : "[".concat(a.join("+"), "]")
        }
        function u_(a, l, M) {
            function m(D) {
                if (D.type === 3)
                    return null;
                if (D.type === 4)
                    throw new Error("Cannot convert never type to IDBKeyRange");
                var N = D.lower
                  , B = D.upper
                  , q = D.lowerOpen
                  , D = D.upperOpen;
                return N === void 0 ? B === void 0 ? null : l.upperBound(B, !!D) : B === void 0 ? l.lowerBound(N, !!q) : l.bound(N, B, !!q, !!D)
            }
            function v(K) {
                var N, B = K.name;
                return {
                    name: B,
                    schema: K,
                    mutate: function(q) {
                        var D = q.trans
                          , J = q.type
                          , X = q.keys
                          , Q = q.values
                          , re = q.range;
                        return new Promise(function(ce, Ce) {
                            ce = Ot(ce);
                            var ye = D.objectStore(B)
                              , Ae = ye.keyPath == null
                              , Pe = J === "put" || J === "add";
                            if (!Pe && J !== "delete" && J !== "deleteRange")
                                throw new Error("Invalid operation type: " + J);
                            var Se, Ke = (X || Q || {
                                length: 1
                            }).length;
                            if (X && Q && X.length !== Q.length)
                                throw new Error("Given keys array must have same length as given values array.");
                            if (Ke === 0)
                                return ce({
                                    numFailures: 0,
                                    failures: {},
                                    results: [],
                                    lastResult: void 0
                                });
                            function qe(tn) {
                                ++kn,
                                Io(tn)
                            }
                            var Ze = []
                              , Je = []
                              , kn = 0;
                            if (J === "deleteRange") {
                                if (re.type === 4)
                                    return ce({
                                        numFailures: kn,
                                        failures: Je,
                                        results: [],
                                        lastResult: void 0
                                    });
                                re.type === 3 ? Ze.push(Se = ye.clear()) : Ze.push(Se = ye.delete(m(re)))
                            } else {
                                var Ae = Pe ? Ae ? [Q, X] : [Q, null] : [X, null]
                                  , Xe = Ae[0]
                                  , Xt = Ae[1];
                                if (Pe)
                                    for (var Qt = 0; Qt < Ke; ++Qt)
                                        Ze.push(Se = Xt && Xt[Qt] !== void 0 ? ye[J](Xe[Qt], Xt[Qt]) : ye[J](Xe[Qt])),
                                        Se.onerror = qe;
                                else
                                    for (Qt = 0; Qt < Ke; ++Qt)
                                        Ze.push(Se = ye[J](Xe[Qt])),
                                        Se.onerror = qe
                            }
                            function ca(tn) {
                                tn = tn.target.result,
                                Ze.forEach(function(ui, _l) {
                                    return ui.error != null && (Je[_l] = ui.error)
                                }),
                                ce({
                                    numFailures: kn,
                                    failures: Je,
                                    results: J === "delete" ? X : Ze.map(function(ui) {
                                        return ui.result
                                    }),
                                    lastResult: tn
                                })
                            }
                            Se.onerror = function(tn) {
                                qe(tn),
                                ca(tn)
                            }
                            ,
                            Se.onsuccess = ca
                        }
                        )
                    },
                    getMany: function(q) {
                        var D = q.trans
                          , J = q.keys;
                        return new Promise(function(X, Q) {
                            X = Ot(X);
                            for (var re, ce = D.objectStore(B), Ce = J.length, ye = new Array(Ce), Ae = 0, Pe = 0, Se = function(Ze) {
                                Ze = Ze.target,
                                ye[Ze._pos] = Ze.result,
                                ++Pe === Ae && X(ye)
                            }, Ke = Jn(Q), qe = 0; qe < Ce; ++qe)
                                J[qe] != null && ((re = ce.get(J[qe]))._pos = qe,
                                re.onsuccess = Se,
                                re.onerror = Ke,
                                ++Ae);
                            Ae === 0 && X(ye)
                        }
                        )
                    },
                    get: function(q) {
                        var D = q.trans
                          , J = q.key;
                        return new Promise(function(X, Q) {
                            X = Ot(X);
                            var re = D.objectStore(B).get(J);
                            re.onsuccess = function(ce) {
                                return X(ce.target.result)
                            }
                            ,
                            re.onerror = Jn(Q)
                        }
                        )
                    },
                    query: (N = L,
                    function(q) {
                        return new Promise(function(D, J) {
                            D = Ot(D);
                            var X, Q, re, Ae = q.trans, ce = q.values, Ce = q.limit, Se = q.query, ye = Ce === 1 / 0 ? void 0 : Ce, Pe = Se.index, Se = Se.range, Ae = Ae.objectStore(B), Pe = Pe.isPrimaryKey ? Ae : Ae.index(Pe.name), Se = m(Se);
                            if (Ce === 0)
                                return D({
                                    result: []
                                });
                            N ? ((ye = ce ? Pe.getAll(Se, ye) : Pe.getAllKeys(Se, ye)).onsuccess = function(Ke) {
                                return D({
                                    result: Ke.target.result
                                })
                            }
                            ,
                            ye.onerror = Jn(J)) : (X = 0,
                            Q = !ce && "openKeyCursor"in Pe ? Pe.openKeyCursor(Se) : Pe.openCursor(Se),
                            re = [],
                            Q.onsuccess = function(Ke) {
                                var qe = Q.result;
                                return qe ? (re.push(ce ? qe.value : qe.primaryKey),
                                ++X === Ce ? D({
                                    result: re
                                }) : void qe.continue()) : D({
                                    result: re
                                })
                            }
                            ,
                            Q.onerror = Jn(J))
                        }
                        )
                    }
                    ),
                    openCursor: function(q) {
                        var D = q.trans
                          , J = q.values
                          , X = q.query
                          , Q = q.reverse
                          , re = q.unique;
                        return new Promise(function(ce, Ce) {
                            ce = Ot(ce);
                            var Pe = X.index
                              , ye = X.range
                              , Ae = D.objectStore(B)
                              , Ae = Pe.isPrimaryKey ? Ae : Ae.index(Pe.name)
                              , Pe = Q ? re ? "prevunique" : "prev" : re ? "nextunique" : "next"
                              , Se = !J && "openKeyCursor"in Ae ? Ae.openKeyCursor(m(ye), Pe) : Ae.openCursor(m(ye), Pe);
                            Se.onerror = Jn(Ce),
                            Se.onsuccess = Ot(function(Ke) {
                                var qe, Ze, Je, kn, Xe = Se.result;
                                Xe ? (Xe.___id = ++a_,
                                Xe.done = !1,
                                qe = Xe.continue.bind(Xe),
                                Ze = (Ze = Xe.continuePrimaryKey) && Ze.bind(Xe),
                                Je = Xe.advance.bind(Xe),
                                kn = function() {
                                    throw new Error("Cursor not stopped")
                                }
                                ,
                                Xe.trans = D,
                                Xe.stop = Xe.continue = Xe.continuePrimaryKey = Xe.advance = function() {
                                    throw new Error("Cursor not started")
                                }
                                ,
                                Xe.fail = Ot(Ce),
                                Xe.next = function() {
                                    var Xt = this
                                      , Qt = 1;
                                    return this.start(function() {
                                        return Qt-- ? Xt.continue() : Xt.stop()
                                    }).then(function() {
                                        return Xt
                                    })
                                }
                                ,
                                Xe.start = function(Xt) {
                                    function Qt() {
                                        if (Se.result)
                                            try {
                                                Xt()
                                            } catch (tn) {
                                                Xe.fail(tn)
                                            }
                                        else
                                            Xe.done = !0,
                                            Xe.start = function() {
                                                throw new Error("Cursor behind last entry")
                                            }
                                            ,
                                            Xe.stop()
                                    }
                                    var ca = new Promise(function(tn, ui) {
                                        tn = Ot(tn),
                                        Se.onerror = Jn(ui),
                                        Xe.fail = ui,
                                        Xe.stop = function(_l) {
                                            Xe.stop = Xe.continue = Xe.continuePrimaryKey = Xe.advance = kn,
                                            tn(_l)
                                        }
                                    }
                                    );
                                    return Se.onsuccess = Ot(function(tn) {
                                        Se.onsuccess = Qt,
                                        Qt()
                                    }),
                                    Xe.continue = qe,
                                    Xe.continuePrimaryKey = Ze,
                                    Xe.advance = Je,
                                    Qt(),
                                    ca
                                }
                                ,
                                ce(Xe)) : ce(null)
                            }, Ce)
                        }
                        )
                    },
                    count: function(q) {
                        var D = q.query
                          , J = q.trans
                          , X = D.index
                          , Q = D.range;
                        return new Promise(function(re, ce) {
                            var Ce = J.objectStore(B)
                              , ye = X.isPrimaryKey ? Ce : Ce.index(X.name)
                              , Ce = m(Q)
                              , ye = Ce ? ye.count(Ce) : ye.count();
                            ye.onsuccess = Ot(function(Ae) {
                                return re(Ae.target.result)
                            }),
                            ye.onerror = Jn(ce)
                        }
                        )
                    }
                }
            }
            var b, O, C, H = (O = M,
            C = Ad((b = a).objectStoreNames),
            {
                schema: {
                    name: b.name,
                    tables: C.map(function(K) {
                        return O.objectStore(K)
                    }).map(function(K) {
                        var N = K.keyPath
                          , D = K.autoIncrement
                          , B = u(N)
                          , q = {}
                          , D = {
                            name: K.name,
                            primaryKey: {
                                name: null,
                                isPrimaryKey: !0,
                                outbound: N == null,
                                compound: B,
                                keyPath: N,
                                autoIncrement: D,
                                unique: !0,
                                extractKey: tl(N)
                            },
                            indexes: Ad(K.indexNames).map(function(J) {
                                return K.index(J)
                            }).map(function(re) {
                                var X = re.name
                                  , Q = re.unique
                                  , ce = re.multiEntry
                                  , re = re.keyPath
                                  , ce = {
                                    name: X,
                                    compound: u(re),
                                    keyPath: re,
                                    unique: Q,
                                    multiEntry: ce,
                                    extractKey: tl(re)
                                };
                                return q[No(re)] = ce
                            }),
                            getIndexByKeyPath: function(J) {
                                return q[No(J)]
                            }
                        };
                        return q[":id"] = D.primaryKey,
                        N != null && (q[No(N)] = D.primaryKey),
                        D
                    })
                },
                hasGetAll: 0 < C.length && "getAll"in O.objectStore(C[0]) && !(typeof navigator != "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
            }), M = H.schema, L = H.hasGetAll, H = M.tables.map(v), P = {};
            return H.forEach(function(K) {
                return P[K.name] = K
            }),
            {
                stack: "dbcore",
                transaction: a.transaction.bind(a),
                table: function(K) {
                    if (!P[K])
                        throw new Error("Table '".concat(K, "' not found"));
                    return P[K]
                },
                MIN_KEY: -1 / 0,
                MAX_KEY: Lo(l),
                schema: M
            }
        }
        function l_(a, l, d, m) {
            var v = d.IDBKeyRange;
            return d.indexedDB,
            {
                dbcore: (m = u_(l, v, m),
                a.dbcore.reduce(function(b, O) {
                    return O = O.create,
                    r(r({}, b), O(b))
                }, m))
            }
        }
        function Qs(a, m) {
            var d = m.db
              , m = l_(a._middlewares, d, a._deps, m);
            a.core = m.dbcore,
            a.tables.forEach(function(v) {
                var b = v.name;
                a.core.schema.tables.some(function(O) {
                    return O.name === b
                }) && (v.core = a.core.table(b),
                a[b]instanceof a.Table && (a[b].core = v.core))
            })
        }
        function Zs(a, l, d, m) {
            d.forEach(function(v) {
                var b = m[v];
                l.forEach(function(O) {
                    var C = function M(L, H) {
                        return F(L, H) || (L = f(L)) && M(L, H)
                    }(O, v);
                    (!C || "value"in C && C.value === void 0) && (O === a.Transaction.prototype || O instanceof a.Transaction ? _(O, v, {
                        get: function() {
                            return this.table(v)
                        },
                        set: function(M) {
                            y(this, v, {
                                value: M,
                                writable: !0,
                                configurable: !0,
                                enumerable: !0
                            })
                        }
                    }) : O[v] = new a.Table(v,b))
                })
            })
        }
        function nl(a, l) {
            l.forEach(function(d) {
                for (var m in d)
                    d[m]instanceof a.Table && delete d[m]
            })
        }
        function c_(a, l) {
            return a._cfg.version - l._cfg.version
        }
        function f_(a, l, d, m) {
            var v = a._dbSchema;
            d.objectStoreNames.contains("$meta") && !v.$meta && (v.$meta = el("$meta", Rd("")[0], []),
            a._storeNames.push("$meta"));
            var b = a._createTransaction("readwrite", a._storeNames, v);
            b.create(d),
            b._completion.catch(m);
            var O = b._reject.bind(b)
              , C = ue.transless || ue;
            Sr(function() {
                return ue.trans = b,
                ue.transless = C,
                l !== 0 ? (Qs(a, d),
                L = l,
                ((M = b).storeNames.includes("$meta") ? M.table("$meta").get("version").then(function(H) {
                    return H != null ? H : L
                }) : de.resolve(L)).then(function(H) {
                    return K = H,
                    N = b,
                    B = d,
                    q = [],
                    H = (P = a)._versions,
                    D = P._dbSchema = ta(0, P.idbdb, B),
                    (H = H.filter(function(J) {
                        return J._cfg.version >= K
                    })).length !== 0 ? (H.forEach(function(J) {
                        q.push(function() {
                            var X = D
                              , Q = J._cfg.dbschema;
                            na(P, X, B),
                            na(P, Q, B),
                            D = P._dbSchema = Q;
                            var re = rl(X, Q);
                            re.add.forEach(function(Pe) {
                                il(B, Pe[0], Pe[1].primKey, Pe[1].indexes)
                            }),
                            re.change.forEach(function(Pe) {
                                if (Pe.recreate)
                                    throw new z.Upgrade("Not yet support for changing primary key");
                                var Se = B.objectStore(Pe.name);
                                Pe.add.forEach(function(Ke) {
                                    return ea(Se, Ke)
                                }),
                                Pe.change.forEach(function(Ke) {
                                    Se.deleteIndex(Ke.name),
                                    ea(Se, Ke)
                                }),
                                Pe.del.forEach(function(Ke) {
                                    return Se.deleteIndex(Ke)
                                })
                            });
                            var ce = J._cfg.contentUpgrade;
                            if (ce && J._cfg.version > K) {
                                Qs(P, B),
                                N._memoizedTables = {};
                                var Ce = Z(Q);
                                re.del.forEach(function(Pe) {
                                    Ce[Pe] = X[Pe]
                                }),
                                nl(P, [P.Transaction.prototype]),
                                Zs(P, [P.Transaction.prototype], s(Ce), Ce),
                                N.schema = Ce;
                                var ye, Ae = it(ce);
                                return Ae && Mi(),
                                re = de.follow(function() {
                                    var Pe;
                                    (ye = ce(N)) && Ae && (Pe = Ar.bind(null, null),
                                    ye.then(Pe, Pe))
                                }),
                                ye && typeof ye.then == "function" ? de.resolve(ye) : re.then(function() {
                                    return ye
                                })
                            }
                        }),
                        q.push(function(X) {
                            var Q, re, ce = J._cfg.dbschema;
                            Q = ce,
                            re = X,
                            [].slice.call(re.db.objectStoreNames).forEach(function(Ce) {
                                return Q[Ce] == null && re.db.deleteObjectStore(Ce)
                            }),
                            nl(P, [P.Transaction.prototype]),
                            Zs(P, [P.Transaction.prototype], P._storeNames, P._dbSchema),
                            N.schema = P._dbSchema
                        }),
                        q.push(function(X) {
                            P.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(P.idbdb.version / 10) === J._cfg.version ? (P.idbdb.deleteObjectStore("$meta"),
                            delete P._dbSchema.$meta,
                            P._storeNames = P._storeNames.filter(function(Q) {
                                return Q !== "$meta"
                            })) : X.objectStore("$meta").put(J._cfg.version, "version"))
                        })
                    }),
                    function J() {
                        return q.length ? de.resolve(q.shift()(N.idbtrans)).then(J) : de.resolve()
                    }().then(function() {
                        Td(D, B)
                    })) : de.resolve();
                    var P, K, N, B, q, D
                }).catch(O)) : (s(v).forEach(function(H) {
                    il(d, H, v[H].primKey, v[H].indexes)
                }),
                Qs(a, d),
                void de.follow(function() {
                    return a.on.populate.fire(b)
                }).catch(O));
                var M, L
            })
        }
        function d_(a, l) {
            Td(a._dbSchema, l),
            l.db.version % 10 != 0 || l.objectStoreNames.contains("$meta") || l.db.createObjectStore("$meta").add(Math.ceil(l.db.version / 10 - 1), "version");
            var d = ta(0, a.idbdb, l);
            na(a, a._dbSchema, l);
            for (var m = 0, v = rl(d, a._dbSchema).change; m < v.length; m++) {
                var b = function(O) {
                    if (O.change.length || O.recreate)
                        return console.warn("Unable to patch indexes of table ".concat(O.name, " because it has changes on the type of index or primary key.")),
                        {
                            value: void 0
                        };
                    var C = l.objectStore(O.name);
                    O.add.forEach(function(M) {
                        he && console.debug("Dexie upgrade patch: Creating missing index ".concat(O.name, ".").concat(M.src)),
                        ea(C, M)
                    })
                }(v[m]);
                if (typeof b == "object")
                    return b.value
            }
        }
        function rl(a, l) {
            var d, m = {
                del: [],
                add: [],
                change: []
            };
            for (d in a)
                l[d] || m.del.push(d);
            for (d in l) {
                var v = a[d]
                  , b = l[d];
                if (v) {
                    var O = {
                        name: d,
                        def: b,
                        recreate: !1,
                        del: [],
                        add: [],
                        change: []
                    };
                    if ("" + (v.primKey.keyPath || "") != "" + (b.primKey.keyPath || "") || v.primKey.auto !== b.primKey.auto)
                        O.recreate = !0,
                        m.change.push(O);
                    else {
                        var C = v.idxByName
                          , M = b.idxByName
                          , L = void 0;
                        for (L in C)
                            M[L] || O.del.push(L);
                        for (L in M) {
                            var H = C[L]
                              , P = M[L];
                            H ? H.src !== P.src && O.change.push(P) : O.add.push(P)
                        }
                        (0 < O.del.length || 0 < O.add.length || 0 < O.change.length) && m.change.push(O)
                    }
                } else
                    m.add.push([d, b])
            }
            return m
        }
        function il(a, l, d, m) {
            var v = a.db.createObjectStore(l, d.keyPath ? {
                keyPath: d.keyPath,
                autoIncrement: d.auto
            } : {
                autoIncrement: d.auto
            });
            return m.forEach(function(b) {
                return ea(v, b)
            }),
            v
        }
        function Td(a, l) {
            s(a).forEach(function(d) {
                l.db.objectStoreNames.contains(d) || (he && console.debug("Dexie: Creating missing table", d),
                il(l, d, a[d].primKey, a[d].indexes))
            })
        }
        function ea(a, l) {
            a.createIndex(l.name, l.keyPath, {
                unique: l.unique,
                multiEntry: l.multi
            })
        }
        function ta(a, l, d) {
            var m = {};
            return A(l.objectStoreNames, 0).forEach(function(v) {
                for (var b = d.objectStore(v), O = Zu(Sd(L = b.keyPath), L || "", !0, !1, !!b.autoIncrement, L && typeof L != "string", !0), C = [], M = 0; M < b.indexNames.length; ++M) {
                    var H = b.index(b.indexNames[M])
                      , L = H.keyPath
                      , H = Zu(H.name, L, !!H.unique, !!H.multiEntry, !1, L && typeof L != "string", !1);
                    C.push(H)
                }
                m[v] = el(v, O, C)
            }),
            m
        }
        function na(a, l, d) {
            for (var m = d.db.objectStoreNames, v = 0; v < m.length; ++v) {
                var b = m[v]
                  , O = d.objectStore(b);
                a._hasGetAll = "getAll"in O;
                for (var C = 0; C < O.indexNames.length; ++C) {
                    var M = O.indexNames[C]
                      , L = O.index(M).keyPath
                      , H = typeof L == "string" ? L : "[" + A(L).join("+") + "]";
                    !l[b] || (L = l[b].idxByName[H]) && (L.name = M,
                    delete l[b].idxByName[H],
                    l[b].idxByName[M] = L)
                }
            }
            typeof navigator != "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && o.WorkerGlobalScope && o instanceof o.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (a._hasGetAll = !1)
        }
        function Rd(a) {
            return a.split(",").map(function(l, d) {
                var m = (l = l.trim()).replace(/([&*]|\+\+)/g, "")
                  , v = /^\[/.test(m) ? m.match(/^\[(.*)\]$/)[1].split("+") : m;
                return Zu(m, v || null, /\&/.test(l), /\*/.test(l), /\+\+/.test(l), u(v), d === 0)
            })
        }
        var h_ = (ra.prototype._parseStoresSpec = function(a, l) {
            s(a).forEach(function(d) {
                if (a[d] !== null) {
                    var m = Rd(a[d])
                      , v = m.shift();
                    if (v.unique = !0,
                    v.multi)
                        throw new z.Schema("Primary key cannot be multi-valued");
                    m.forEach(function(b) {
                        if (b.auto)
                            throw new z.Schema("Only primary key can be marked as autoIncrement (++)");
                        if (!b.keyPath)
                            throw new z.Schema("Index must have a name and cannot be an empty string")
                    }),
                    l[d] = el(d, v, m)
                }
            })
        }
        ,
        ra.prototype.stores = function(d) {
            var l = this.db;
            this._cfg.storesSource = this._cfg.storesSource ? c(this._cfg.storesSource, d) : d;
            var d = l._versions
              , m = {}
              , v = {};
            return d.forEach(function(b) {
                c(m, b._cfg.storesSource),
                v = b._cfg.dbschema = {},
                b._parseStoresSpec(m, v)
            }),
            l._dbSchema = v,
            nl(l, [l._allTables, l, l.Transaction.prototype]),
            Zs(l, [l._allTables, l, l.Transaction.prototype, this._cfg.tables], s(v), v),
            l._storeNames = s(v),
            this
        }
        ,
        ra.prototype.upgrade = function(a) {
            return this._cfg.contentUpgrade = me(this._cfg.contentUpgrade || Ie, a),
            this
        }
        ,
        ra);
        function ra() {}
        function ol(a, l) {
            var d = a._dbNamesDB;
            return d || (d = a._dbNamesDB = new sr(Gs,{
                addons: [],
                indexedDB: a,
                IDBKeyRange: l
            })).version(1).stores({
                dbnames: "name"
            }),
            d.table("dbnames")
        }
        function sl(a) {
            return a && typeof a.databases == "function"
        }
        function al(a) {
            return Sr(function() {
                return ue.letThrough = !0,
                a()
            })
        }
        function ul(a) {
            return !("from"in a)
        }
        var Jt = function(a, l) {
            if (!this) {
                var d = new Jt;
                return a && "d"in a && c(d, a),
                d
            }
            c(this, arguments.length ? {
                d: 1,
                from: a,
                to: 1 < arguments.length ? l : a
            } : {
                d: 0
            })
        };
        function Mo(a, l, d) {
            var m = ot(l, d);
            if (!isNaN(m)) {
                if (0 < m)
                    throw RangeError();
                if (ul(a))
                    return c(a, {
                        from: l,
                        to: d,
                        d: 1
                    });
                var v = a.l
                  , m = a.r;
                if (ot(d, a.from) < 0)
                    return v ? Mo(v, l, d) : a.l = {
                        from: l,
                        to: d,
                        d: 1,
                        l: null,
                        r: null
                    },
                    Cd(a);
                if (0 < ot(l, a.to))
                    return m ? Mo(m, l, d) : a.r = {
                        from: l,
                        to: d,
                        d: 1,
                        l: null,
                        r: null
                    },
                    Cd(a);
                ot(l, a.from) < 0 && (a.from = l,
                a.l = null,
                a.d = m ? m.d + 1 : 1),
                0 < ot(d, a.to) && (a.to = d,
                a.r = null,
                a.d = a.l ? a.l.d + 1 : 1),
                d = !a.r,
                v && !a.l && ko(a, v),
                m && d && ko(a, m)
            }
        }
        function ko(a, l) {
            ul(l) || function d(m, M) {
                var b = M.from
                  , O = M.to
                  , C = M.l
                  , M = M.r;
                Mo(m, b, O),
                C && d(m, C),
                M && d(m, M)
            }(a, l)
        }
        function ia(a, l) {
            var d = ll(l)
              , m = d.next();
            if (m.done)
                return !1;
            for (var v = m.value, b = ll(a), O = b.next(v.from), C = O.value; !m.done && !O.done; ) {
                if (ot(C.from, v.to) <= 0 && 0 <= ot(C.to, v.from))
                    return !0;
                ot(v.from, C.from) < 0 ? v = (m = d.next(C.from)).value : C = (O = b.next(v.from)).value
            }
            return !1
        }
        function ll(a) {
            var l = ul(a) ? null : {
                s: 0,
                n: a
            };
            return {
                next: function(d) {
                    for (var m = 0 < arguments.length; l; )
                        switch (l.s) {
                        case 0:
                            if (l.s = 1,
                            m)
                                for (; l.n.l && ot(d, l.n.from) < 0; )
                                    l = {
                                        up: l,
                                        n: l.n.l,
                                        s: 1
                                    };
                            else
                                for (; l.n.l; )
                                    l = {
                                        up: l,
                                        n: l.n.l,
                                        s: 1
                                    };
                        case 1:
                            if (l.s = 2,
                            !m || ot(d, l.n.to) <= 0)
                                return {
                                    value: l.n,
                                    done: !1
                                };
                        case 2:
                            if (l.n.r) {
                                l.s = 3,
                                l = {
                                    up: l,
                                    n: l.n.r,
                                    s: 0
                                };
                                continue
                            }
                        case 3:
                            l = l.up
                        }
                    return {
                        done: !0
                    }
                }
            }
        }
        function Cd(a) {
            var l, d, m = (((l = a.r) === null || l === void 0 ? void 0 : l.d) || 0) - (((d = a.l) === null || d === void 0 ? void 0 : d.d) || 0), v = 1 < m ? "r" : m < -1 ? "l" : "";
            v && (l = v == "r" ? "l" : "r",
            d = r({}, a),
            m = a[v],
            a.from = m.from,
            a.to = m.to,
            a[v] = m[v],
            d[v] = m[l],
            (a[l] = d).d = xd(d)),
            a.d = xd(a)
        }
        function xd(d) {
            var l = d.r
              , d = d.l;
            return (l ? d ? Math.max(l.d, d.d) : l.d : d ? d.d : 0) + 1
        }
        function oa(a, l) {
            return s(l).forEach(function(d) {
                a[d] ? ko(a[d], l[d]) : a[d] = function m(v) {
                    var b, O, C = {};
                    for (b in v)
                        p(v, b) && (O = v[b],
                        C[b] = !O || typeof O != "object" || be.has(O.constructor) ? O : m(O));
                    return C
                }(l[d])
            }),
            a
        }
        function cl(a, l) {
            return a.all || l.all || Object.keys(a).some(function(d) {
                return l[d] && ia(l[d], a[d])
            })
        }
        g(Jt.prototype, ((xn = {
            add: function(a) {
                return ko(this, a),
                this
            },
            addKey: function(a) {
                return Mo(this, a, a),
                this
            },
            addKeys: function(a) {
                var l = this;
                return a.forEach(function(d) {
                    return Mo(l, d, d)
                }),
                this
            }
        })[le] = function() {
            return ll(this)
        }
        ,
        xn));
        var si = {}
          , fl = {}
          , dl = !1;
        function sa(a) {
            oa(fl, a),
            dl || (dl = !0,
            setTimeout(function() {
                dl = !1,
                hl(fl, !(fl = {}))
            }, 0))
        }
        function hl(a, l) {
            l === void 0 && (l = !1);
            var d = new Set;
            if (a.all)
                for (var m = 0, v = Object.values(si); m < v.length; m++)
                    Pd(O = v[m], a, d, l);
            else
                for (var b in a) {
                    var O, C = /^idb\:\/\/(.*)\/(.*)\//.exec(b);
                    C && (b = C[1],
                    C = C[2],
                    (O = si["idb://".concat(b, "/").concat(C)]) && Pd(O, a, d, l))
                }
            d.forEach(function(M) {
                return M()
            })
        }
        function Pd(a, l, d, m) {
            for (var v = [], b = 0, O = Object.entries(a.queries.query); b < O.length; b++) {
                for (var C = O[b], M = C[0], L = [], H = 0, P = C[1]; H < P.length; H++) {
                    var K = P[H];
                    cl(l, K.obsSet) ? K.subscribers.forEach(function(D) {
                        return d.add(D)
                    }) : m && L.push(K)
                }
                m && v.push([M, L])
            }
            if (m)
                for (var N = 0, B = v; N < B.length; N++) {
                    var q = B[N]
                      , M = q[0]
                      , L = q[1];
                    a.queries.query[M] = L
                }
        }
        function p_(a) {
            var l = a._state
              , d = a._deps.indexedDB;
            if (l.isBeingOpened || a.idbdb)
                return l.dbReadyPromise.then(function() {
                    return l.dbOpenError ? xt(l.dbOpenError) : a
                });
            l.isBeingOpened = !0,
            l.dbOpenError = null,
            l.openComplete = !1;
            var m = l.openCanceller
              , v = Math.round(10 * a.verno)
              , b = !1;
            function O() {
                if (l.openCanceller !== m)
                    throw new z.DatabaseClosed("db.open() was cancelled")
            }
            function C() {
                return new de(function(K, N) {
                    if (O(),
                    !d)
                        throw new z.MissingAPI;
                    var B = a.name
                      , q = l.autoSchema || !v ? d.open(B) : d.open(B, v);
                    if (!q)
                        throw new z.MissingAPI;
                    q.onerror = Jn(N),
                    q.onblocked = Ot(a._fireOnBlocked),
                    q.onupgradeneeded = Ot(function(D) {
                        var J;
                        H = q.transaction,
                        l.autoSchema && !a._options.allowEmptyDB ? (q.onerror = Io,
                        H.abort(),
                        q.result.close(),
                        (J = d.deleteDatabase(B)).onsuccess = J.onerror = Ot(function() {
                            N(new z.NoSuchDatabase("Database ".concat(B, " doesnt exist")))
                        })) : (H.onerror = Jn(N),
                        D = D.oldVersion > Math.pow(2, 62) ? 0 : D.oldVersion,
                        P = D < 1,
                        a.idbdb = q.result,
                        b && d_(a, H),
                        f_(a, D / 10, H, N))
                    }, N),
                    q.onsuccess = Ot(function() {
                        H = null;
                        var D, J, X, Q, re, ce = a.idbdb = q.result, Ce = A(ce.objectStoreNames);
                        if (0 < Ce.length)
                            try {
                                var ye = ce.transaction((Q = Ce).length === 1 ? Q[0] : Q, "readonly");
                                if (l.autoSchema)
                                    J = ce,
                                    X = ye,
                                    (D = a).verno = J.version / 10,
                                    X = D._dbSchema = ta(0, J, X),
                                    D._storeNames = A(J.objectStoreNames, 0),
                                    Zs(D, [D._allTables], s(X), X);
                                else if (na(a, a._dbSchema, ye),
                                ((re = rl(ta(0, (re = a).idbdb, ye), re._dbSchema)).add.length || re.change.some(function(Ae) {
                                    return Ae.add.length || Ae.change.length
                                })) && !b)
                                    return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),
                                    ce.close(),
                                    v = ce.version + 1,
                                    b = !0,
                                    K(C());
                                Qs(a, ye)
                            } catch (Ae) {}
                        ki.push(a),
                        ce.onversionchange = Ot(function(Ae) {
                            l.vcFired = !0,
                            a.on("versionchange").fire(Ae)
                        }),
                        ce.onclose = Ot(function(Ae) {
                            a.on("close").fire(Ae)
                        }),
                        P && (re = a._deps,
                        ye = B,
                        ce = re.indexedDB,
                        re = re.IDBKeyRange,
                        sl(ce) || ye === Gs || ol(ce, re).put({
                            name: ye
                        }).catch(Ie)),
                        K()
                    }, N)
                }
                ).catch(function(K) {
                    switch (K == null ? void 0 : K.name) {
                    case "UnknownError":
                        if (0 < l.PR1398_maxLoop)
                            return l.PR1398_maxLoop--,
                            console.warn("Dexie: Workaround for Chrome UnknownError on open()"),
                            C();
                        break;
                    case "VersionError":
                        if (0 < v)
                            return v = 0,
                            C()
                    }
                    return de.reject(K)
                })
            }
            var M, L = l.dbReadyResolve, H = null, P = !1;
            return de.race([m, (typeof navigator == "undefined" ? de.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(K) {
                function N() {
                    return indexedDB.databases().finally(K)
                }
                M = setInterval(N, 100),
                N()
            }
            ).finally(function() {
                return clearInterval(M)
            }) : Promise.resolve()).then(C)]).then(function() {
                return O(),
                l.onReadyBeingFired = [],
                de.resolve(al(function() {
                    return a.on.ready.fire(a.vip)
                })).then(function K() {
                    if (0 < l.onReadyBeingFired.length) {
                        var N = l.onReadyBeingFired.reduce(me, Ie);
                        return l.onReadyBeingFired = [],
                        de.resolve(al(function() {
                            return N(a.vip)
                        })).then(K)
                    }
                })
            }).finally(function() {
                l.openCanceller === m && (l.onReadyBeingFired = null,
                l.isBeingOpened = !1)
            }).catch(function(K) {
                l.dbOpenError = K;
                try {
                    H && H.abort()
                } catch (N) {}
                return m === l.openCanceller && a._close(),
                xt(K)
            }).finally(function() {
                l.openComplete = !0,
                L()
            }).then(function() {
                var K;
                return P && (K = {},
                a.tables.forEach(function(N) {
                    N.schema.indexes.forEach(function(B) {
                        B.name && (K["idb://".concat(a.name, "/").concat(N.name, "/").concat(B.name)] = new Jt(-1 / 0,[[[]]]))
                    }),
                    K["idb://".concat(a.name, "/").concat(N.name, "/")] = K["idb://".concat(a.name, "/").concat(N.name, "/:dels")] = new Jt(-1 / 0,[[[]]])
                }),
                Cr(Fo).fire(K),
                hl(K, !0)),
                a
            })
        }
        function pl(a) {
            function l(b) {
                return a.next(b)
            }
            var d = v(l)
              , m = v(function(b) {
                return a.throw(b)
            });
            function v(b) {
                return function(M) {
                    var C = b(M)
                      , M = C.value;
                    return C.done ? M : M && typeof M.then == "function" ? M.then(d, m) : u(M) ? Promise.all(M).then(d, m) : d(M)
                }
            }
            return v(l)()
        }
        function aa(a, l, d) {
            for (var m = u(a) ? a.slice() : [a], v = 0; v < d; ++v)
                m.push(l);
            return m
        }
        var m_ = {
            stack: "dbcore",
            name: "VirtualIndexMiddleware",
            level: 1,
            create: function(a) {
                return r(r({}, a), {
                    table: function(l) {
                        var d = a.table(l)
                          , m = d.schema
                          , v = {}
                          , b = [];
                        function O(P, K, N) {
                            var B = No(P)
                              , q = v[B] = v[B] || []
                              , D = P == null ? 0 : typeof P == "string" ? 1 : P.length
                              , J = 0 < K
                              , J = r(r({}, N), {
                                name: J ? "".concat(B, "(virtual-from:").concat(N.name, ")") : N.name,
                                lowLevelIndex: N,
                                isVirtual: J,
                                keyTail: K,
                                keyLength: D,
                                extractKey: tl(P),
                                unique: !J && N.unique
                            });
                            return q.push(J),
                            J.isPrimaryKey || b.push(J),
                            1 < D && O(D === 2 ? P[0] : P.slice(0, D - 1), K + 1, N),
                            q.sort(function(X, Q) {
                                return X.keyTail - Q.keyTail
                            }),
                            J
                        }
                        l = O(m.primaryKey.keyPath, 0, m.primaryKey),
                        v[":id"] = [l];
                        for (var C = 0, M = m.indexes; C < M.length; C++) {
                            var L = M[C];
                            O(L.keyPath, 0, L)
                        }
                        function H(P) {
                            var K, N = P.query.index;
                            return N.isVirtual ? r(r({}, P), {
                                query: {
                                    index: N.lowLevelIndex,
                                    range: (K = P.query.range,
                                    N = N.keyTail,
                                    {
                                        type: K.type === 1 ? 2 : K.type,
                                        lower: aa(K.lower, K.lowerOpen ? a.MAX_KEY : a.MIN_KEY, N),
                                        lowerOpen: !0,
                                        upper: aa(K.upper, K.upperOpen ? a.MIN_KEY : a.MAX_KEY, N),
                                        upperOpen: !0
                                    })
                                }
                            }) : P
                        }
                        return r(r({}, d), {
                            schema: r(r({}, m), {
                                primaryKey: l,
                                indexes: b,
                                getIndexByKeyPath: function(P) {
                                    return (P = v[No(P)]) && P[0]
                                }
                            }),
                            count: function(P) {
                                return d.count(H(P))
                            },
                            query: function(P) {
                                return d.query(H(P))
                            },
                            openCursor: function(P) {
                                var K = P.query.index
                                  , N = K.keyTail
                                  , B = K.isVirtual
                                  , q = K.keyLength;
                                return B ? d.openCursor(H(P)).then(function(J) {
                                    return J && D(J)
                                }) : d.openCursor(P);
                                function D(J) {
                                    return Object.create(J, {
                                        continue: {
                                            value: function(X) {
                                                X != null ? J.continue(aa(X, P.reverse ? a.MAX_KEY : a.MIN_KEY, N)) : P.unique ? J.continue(J.key.slice(0, q).concat(P.reverse ? a.MIN_KEY : a.MAX_KEY, N)) : J.continue()
                                            }
                                        },
                                        continuePrimaryKey: {
                                            value: function(X, Q) {
                                                J.continuePrimaryKey(aa(X, a.MAX_KEY, N), Q)
                                            }
                                        },
                                        primaryKey: {
                                            get: function() {
                                                return J.primaryKey
                                            }
                                        },
                                        key: {
                                            get: function() {
                                                var X = J.key;
                                                return q === 1 ? X[0] : X.slice(0, q)
                                            }
                                        },
                                        value: {
                                            get: function() {
                                                return J.value
                                            }
                                        }
                                    })
                                }
                            }
                        })
                    }
                })
            }
        };
        function ml(a, l, d, m) {
            return d = d || {},
            m = m || "",
            s(a).forEach(function(v) {
                var b, O, C;
                p(l, v) ? (b = a[v],
                O = l[v],
                typeof b == "object" && typeof O == "object" && b && O ? (C = Ne(b)) !== Ne(O) ? d[m + v] = l[v] : C === "Object" ? ml(b, O, d, m + v + ".") : b !== O && (d[m + v] = l[v]) : b !== O && (d[m + v] = l[v])) : d[m + v] = void 0
            }),
            s(l).forEach(function(v) {
                p(a, v) || (d[m + v] = l[v])
            }),
            d
        }
        function gl(a, l) {
            return l.type === "delete" ? l.keys : l.keys || l.values.map(a.extractKey)
        }
        var g_ = {
            stack: "dbcore",
            name: "HooksMiddleware",
            level: 2,
            create: function(a) {
                return r(r({}, a), {
                    table: function(l) {
                        var d = a.table(l)
                          , m = d.schema.primaryKey;
                        return r(r({}, d), {
                            mutate: function(v) {
                                var b = ue.trans
                                  , O = b.table(l).hook
                                  , C = O.deleting
                                  , M = O.creating
                                  , L = O.updating;
                                switch (v.type) {
                                case "add":
                                    if (M.fire === Ie)
                                        break;
                                    return b._promise("readwrite", function() {
                                        return H(v)
                                    }, !0);
                                case "put":
                                    if (M.fire === Ie && L.fire === Ie)
                                        break;
                                    return b._promise("readwrite", function() {
                                        return H(v)
                                    }, !0);
                                case "delete":
                                    if (C.fire === Ie)
                                        break;
                                    return b._promise("readwrite", function() {
                                        return H(v)
                                    }, !0);
                                case "deleteRange":
                                    if (C.fire === Ie)
                                        break;
                                    return b._promise("readwrite", function() {
                                        return function P(K, N, B) {
                                            return d.query({
                                                trans: K,
                                                values: !1,
                                                query: {
                                                    index: m,
                                                    range: N
                                                },
                                                limit: B
                                            }).then(function(q) {
                                                var D = q.result;
                                                return H({
                                                    type: "delete",
                                                    keys: D,
                                                    trans: K
                                                }).then(function(J) {
                                                    return 0 < J.numFailures ? Promise.reject(J.failures[0]) : D.length < B ? {
                                                        failures: [],
                                                        numFailures: 0,
                                                        lastResult: void 0
                                                    } : P(K, r(r({}, N), {
                                                        lower: D[D.length - 1],
                                                        lowerOpen: !0
                                                    }), B)
                                                })
                                            })
                                        }(v.trans, v.range, 1e4)
                                    }, !0)
                                }
                                return d.mutate(v);
                                function H(P) {
                                    var K, N, B, q = ue.trans, D = P.keys || gl(m, P);
                                    if (!D)
                                        throw new Error("Keys missing");
                                    return (P = P.type === "add" || P.type === "put" ? r(r({}, P), {
                                        keys: D
                                    }) : r({}, P)).type !== "delete" && (P.values = i([], P.values)),
                                    P.keys && (P.keys = i([], P.keys)),
                                    K = d,
                                    B = D,
                                    ((N = P).type === "add" ? Promise.resolve([]) : K.getMany({
                                        trans: N.trans,
                                        keys: B,
                                        cache: "immutable"
                                    })).then(function(J) {
                                        var X = D.map(function(Q, re) {
                                            var ce, Ce, ye, Ae = J[re], Pe = {
                                                onerror: null,
                                                onsuccess: null
                                            };
                                            return P.type === "delete" ? C.fire.call(Pe, Q, Ae, q) : P.type === "add" || Ae === void 0 ? (ce = M.fire.call(Pe, Q, P.values[re], q),
                                            Q == null && ce != null && (P.keys[re] = Q = ce,
                                            m.outbound || U(P.values[re], m.keyPath, Q))) : (ce = ml(Ae, P.values[re]),
                                            (Ce = L.fire.call(Pe, ce, Q, Ae, q)) && (ye = P.values[re],
                                            Object.keys(Ce).forEach(function(Se) {
                                                p(ye, Se) ? ye[Se] = Ce[Se] : U(ye, Se, Ce[Se])
                                            }))),
                                            Pe
                                        });
                                        return d.mutate(P).then(function(Q) {
                                            for (var re = Q.failures, ce = Q.results, Ce = Q.numFailures, Q = Q.lastResult, ye = 0; ye < D.length; ++ye) {
                                                var Ae = (ce || D)[ye]
                                                  , Pe = X[ye];
                                                Ae == null ? Pe.onerror && Pe.onerror(re[ye]) : Pe.onsuccess && Pe.onsuccess(P.type === "put" && J[ye] ? P.values[ye] : Ae)
                                            }
                                            return {
                                                failures: re,
                                                results: ce,
                                                numFailures: Ce,
                                                lastResult: Q
                                            }
                                        }).catch(function(Q) {
                                            return X.forEach(function(re) {
                                                return re.onerror && re.onerror(Q)
                                            }),
                                            Promise.reject(Q)
                                        })
                                    })
                                }
                            }
                        })
                    }
                })
            }
        };
        function Id(a, l, d) {
            try {
                if (!l || l.keys.length < a.length)
                    return null;
                for (var m = [], v = 0, b = 0; v < l.keys.length && b < a.length; ++v)
                    ot(l.keys[v], a[b]) === 0 && (m.push(d ? we(l.values[v]) : l.values[v]),
                    ++b);
                return m.length === a.length ? m : null
            } catch (O) {
                return null
            }
        }
        var v_ = {
            stack: "dbcore",
            level: -1,
            create: function(a) {
                return {
                    table: function(l) {
                        var d = a.table(l);
                        return r(r({}, d), {
                            getMany: function(m) {
                                if (!m.cache)
                                    return d.getMany(m);
                                var v = Id(m.keys, m.trans._cache, m.cache === "clone");
                                return v ? de.resolve(v) : d.getMany(m).then(function(b) {
                                    return m.trans._cache = {
                                        keys: m.keys,
                                        values: m.cache === "clone" ? we(b) : b
                                    },
                                    b
                                })
                            },
                            mutate: function(m) {
                                return m.type !== "add" && (m.trans._cache = null),
                                d.mutate(m)
                            }
                        })
                    }
                }
            }
        };
        function Fd(a, l) {
            return a.trans.mode === "readonly" && !!a.subscr && !a.trans.explicit && a.trans.db._options.cache !== "disabled" && !l.schema.primaryKey.outbound
        }
        function Ld(a, l) {
            switch (a) {
            case "query":
                return l.values && !l.unique;
            case "get":
            case "getMany":
            case "count":
            case "openCursor":
                return !1
            }
        }
        var y_ = {
            stack: "dbcore",
            level: 0,
            name: "Observability",
            create: function(a) {
                var l = a.schema.name
                  , d = new Jt(a.MIN_KEY,a.MAX_KEY);
                return r(r({}, a), {
                    transaction: function(m, v, b) {
                        if (ue.subscr && v !== "readonly")
                            throw new z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ue.querier));
                        return a.transaction(m, v, b)
                    },
                    table: function(m) {
                        var v = a.table(m)
                          , b = v.schema
                          , O = b.primaryKey
                          , P = b.indexes
                          , C = O.extractKey
                          , M = O.outbound
                          , L = O.autoIncrement && P.filter(function(N) {
                            return N.compound && N.keyPath.includes(O.keyPath)
                        })
                          , H = r(r({}, v), {
                            mutate: function(N) {
                                function B(Se) {
                                    return Se = "idb://".concat(l, "/").concat(m, "/").concat(Se),
                                    Q[Se] || (Q[Se] = new Jt)
                                }
                                var q, D, J, X = N.trans, Q = N.mutatedParts || (N.mutatedParts = {}), re = B(""), ce = B(":dels"), Ce = N.type, Pe = N.type === "deleteRange" ? [N.range] : N.type === "delete" ? [N.keys] : N.values.length < 50 ? [gl(O, N).filter(function(Se) {
                                    return Se
                                }), N.values] : [], ye = Pe[0], Ae = Pe[1], Pe = N.trans._cache;
                                return u(ye) ? (re.addKeys(ye),
                                (Pe = Ce === "delete" || ye.length === Ae.length ? Id(ye, Pe) : null) || ce.addKeys(ye),
                                (Pe || Ae) && (q = B,
                                D = Pe,
                                J = Ae,
                                b.indexes.forEach(function(Se) {
                                    var Ke = q(Se.name || "");
                                    function qe(Je) {
                                        return Je != null ? Se.extractKey(Je) : null
                                    }
                                    function Ze(Je) {
                                        return Se.multiEntry && u(Je) ? Je.forEach(function(kn) {
                                            return Ke.addKey(kn)
                                        }) : Ke.addKey(Je)
                                    }
                                    (D || J).forEach(function(Je, Xt) {
                                        var Xe = D && qe(D[Xt])
                                          , Xt = J && qe(J[Xt]);
                                        ot(Xe, Xt) !== 0 && (Xe != null && Ze(Xe),
                                        Xt != null && Ze(Xt))
                                    })
                                }))) : ye ? (Ae = {
                                    from: ye.lower,
                                    to: ye.upper
                                },
                                ce.add(Ae),
                                re.add(Ae)) : (re.add(d),
                                ce.add(d),
                                b.indexes.forEach(function(Se) {
                                    return B(Se.name).add(d)
                                })),
                                v.mutate(N).then(function(Se) {
                                    return !ye || N.type !== "add" && N.type !== "put" || (re.addKeys(Se.results),
                                    L && L.forEach(function(Ke) {
                                        var qe = N.values.map(function(Je) {
                                            return Ke.extractKey(Je)
                                        })
                                          , Ze = Ke.keyPath.findIndex(function(Je) {
                                            return Je === O.keyPath
                                        });
                                        Se.results.forEach(function(Je) {
                                            return qe[Ze] = Je
                                        }),
                                        B(Ke.name).addKeys(qe)
                                    })),
                                    X.mutatedParts = oa(X.mutatedParts || {}, Q),
                                    Se
                                })
                            }
                        })
                          , P = function(B) {
                            var q = B.query
                              , B = q.index
                              , q = q.range;
                            return [B, new Jt((B = q.lower) !== null && B !== void 0 ? B : a.MIN_KEY,(q = q.upper) !== null && q !== void 0 ? q : a.MAX_KEY)]
                        }
                          , K = {
                            get: function(N) {
                                return [O, new Jt(N.key)]
                            },
                            getMany: function(N) {
                                return [O, new Jt().addKeys(N.keys)]
                            },
                            count: P,
                            query: P,
                            openCursor: P
                        };
                        return s(K).forEach(function(N) {
                            H[N] = function(B) {
                                var q = ue.subscr
                                  , D = !!q
                                  , J = Fd(ue, v) && Ld(N, B) ? B.obsSet = {} : q;
                                if (D) {
                                    var X = function(Ae) {
                                        return Ae = "idb://".concat(l, "/").concat(m, "/").concat(Ae),
                                        J[Ae] || (J[Ae] = new Jt)
                                    }
                                      , Q = X("")
                                      , re = X(":dels")
                                      , q = K[N](B)
                                      , D = q[0]
                                      , q = q[1];
                                    if ((N === "query" && D.isPrimaryKey && !B.values ? re : X(D.name || "")).add(q),
                                    !D.isPrimaryKey) {
                                        if (N !== "count") {
                                            var ce = N === "query" && M && B.values && v.query(r(r({}, B), {
                                                values: !1
                                            }));
                                            return v[N].apply(this, arguments).then(function(Ae) {
                                                if (N === "query") {
                                                    if (M && B.values)
                                                        return ce.then(function(qe) {
                                                            return qe = qe.result,
                                                            Q.addKeys(qe),
                                                            Ae
                                                        });
                                                    var Pe = B.values ? Ae.result.map(C) : Ae.result;
                                                    (B.values ? Q : re).addKeys(Pe)
                                                } else if (N === "openCursor") {
                                                    var Se = Ae
                                                      , Ke = B.values;
                                                    return Se && Object.create(Se, {
                                                        key: {
                                                            get: function() {
                                                                return re.addKey(Se.primaryKey),
                                                                Se.key
                                                            }
                                                        },
                                                        primaryKey: {
                                                            get: function() {
                                                                var qe = Se.primaryKey;
                                                                return re.addKey(qe),
                                                                qe
                                                            }
                                                        },
                                                        value: {
                                                            get: function() {
                                                                return Ke && Q.addKey(Se.primaryKey),
                                                                Se.value
                                                            }
                                                        }
                                                    })
                                                }
                                                return Ae
                                            })
                                        }
                                        re.add(d)
                                    }
                                }
                                return v[N].apply(this, arguments)
                            }
                        }),
                        H
                    }
                })
            }
        };
        function Nd(a, l, d) {
            if (d.numFailures === 0)
                return l;
            if (l.type === "deleteRange")
                return null;
            var m = l.keys ? l.keys.length : "values"in l && l.values ? l.values.length : 1;
            return d.numFailures === m ? null : (l = r({}, l),
            u(l.keys) && (l.keys = l.keys.filter(function(v, b) {
                return !(b in d.failures)
            })),
            "values"in l && u(l.values) && (l.values = l.values.filter(function(v, b) {
                return !(b in d.failures)
            })),
            l)
        }
        function vl(a, l) {
            return d = a,
            ((m = l).lower === void 0 || (m.lowerOpen ? 0 < ot(d, m.lower) : 0 <= ot(d, m.lower))) && (a = a,
            (l = l).upper === void 0 || (l.upperOpen ? ot(a, l.upper) < 0 : ot(a, l.upper) <= 0));
            var d, m
        }
        function Md(a, l, K, m, v, b) {
            if (!K || K.length === 0)
                return a;
            var O = l.query.index
              , C = O.multiEntry
              , M = l.query.range
              , L = m.schema.primaryKey.extractKey
              , H = O.extractKey
              , P = (O.lowLevelIndex || O).extractKey
              , K = K.reduce(function(N, B) {
                var q = N
                  , D = B.type === "add" || B.type === "put" ? B.values.filter(function(re) {
                    return re = H(re),
                    C && u(re) ? re.some(function(ce) {
                        return vl(ce, M)
                    }) : vl(re, M)
                }).map(function(re) {
                    return re = we(re),
                    b && Object.freeze(re),
                    re
                }) : [];
                switch (B.type) {
                case "add":
                    q = N.concat(l.values ? D : D.map(function(ce) {
                        return L(ce)
                    }));
                    break;
                case "put":
                    var J = new Jt().addKeys(B.values.map(function(ce) {
                        return L(ce)
                    }))
                      , q = N.filter(function(ce) {
                        return ce = l.values ? L(ce) : ce,
                        !ia(new Jt(ce), J)
                    }).concat(l.values ? D : D.map(function(ce) {
                        return L(ce)
                    }));
                    break;
                case "delete":
                    var X = new Jt().addKeys(B.keys);
                    q = N.filter(function(ce) {
                        return ce = l.values ? L(ce) : ce,
                        !ia(new Jt(ce), X)
                    });
                    break;
                case "deleteRange":
                    var Q = B.range;
                    q = N.filter(function(ce) {
                        return !vl(L(ce), Q)
                    })
                }
                return q
            }, a);
            return K === a ? a : (K.sort(function(N, B) {
                return ot(P(N), P(B)) || ot(L(N), L(B))
            }),
            l.limit && l.limit < 1 / 0 && (K.length > l.limit ? K.length = l.limit : a.length === l.limit && K.length < l.limit && (v.dirty = !0)),
            b ? Object.freeze(K) : K)
        }
        function kd(a, l) {
            return ot(a.lower, l.lower) === 0 && ot(a.upper, l.upper) === 0 && !!a.lowerOpen == !!l.lowerOpen && !!a.upperOpen == !!l.upperOpen
        }
        function b_(a, l) {
            return function(d, m, v, b) {
                if (d === void 0)
                    return m !== void 0 ? -1 : 0;
                if (m === void 0)
                    return 1;
                if ((m = ot(d, m)) === 0) {
                    if (v && b)
                        return 0;
                    if (v)
                        return 1;
                    if (b)
                        return -1
                }
                return m
            }(a.lower, l.lower, a.lowerOpen, l.lowerOpen) <= 0 && 0 <= function(d, m, v, b) {
                if (d === void 0)
                    return m !== void 0 ? 1 : 0;
                if (m === void 0)
                    return -1;
                if ((m = ot(d, m)) === 0) {
                    if (v && b)
                        return 0;
                    if (v)
                        return -1;
                    if (b)
                        return 1
                }
                return m
            }(a.upper, l.upper, a.upperOpen, l.upperOpen)
        }
        function __(a, l, d, m) {
            a.subscribers.add(d),
            m.addEventListener("abort", function() {
                var v, b;
                a.subscribers.delete(d),
                a.subscribers.size === 0 && (v = a,
                b = l,
                setTimeout(function() {
                    v.subscribers.size === 0 && Te(b, v)
                }, 3e3))
            })
        }
        var w_ = {
            stack: "dbcore",
            level: 0,
            name: "Cache",
            create: function(a) {
                var l = a.schema.name;
                return r(r({}, a), {
                    transaction: function(d, m, v) {
                        var b, O, C = a.transaction(d, m, v);
                        return m === "readwrite" && (O = (b = new AbortController).signal,
                        v = function(M) {
                            return function() {
                                if (b.abort(),
                                m === "readwrite") {
                                    for (var L = new Set, H = 0, P = d; H < P.length; H++) {
                                        var K = P[H]
                                          , N = si["idb://".concat(l, "/").concat(K)];
                                        if (N) {
                                            var B = a.table(K)
                                              , q = N.optimisticOps.filter(function(Ke) {
                                                return Ke.trans === C
                                            });
                                            if (C._explicit && M && C.mutatedParts)
                                                for (var D = 0, J = Object.values(N.queries.query); D < J.length; D++)
                                                    for (var X = 0, Q = (Ce = J[D]).slice(); X < Q.length; X++)
                                                        cl((ye = Q[X]).obsSet, C.mutatedParts) && (Te(Ce, ye),
                                                        ye.subscribers.forEach(function(Ke) {
                                                            return L.add(Ke)
                                                        }));
                                            else if (0 < q.length) {
                                                N.optimisticOps = N.optimisticOps.filter(function(Ke) {
                                                    return Ke.trans !== C
                                                });
                                                for (var re = 0, ce = Object.values(N.queries.query); re < ce.length; re++)
                                                    for (var Ce, ye, Ae, Pe = 0, Se = (Ce = ce[re]).slice(); Pe < Se.length; Pe++)
                                                        (ye = Se[Pe]).res != null && C.mutatedParts && (M && !ye.dirty ? (Ae = Object.isFrozen(ye.res),
                                                        Ae = Md(ye.res, ye.req, q, B, ye, Ae),
                                                        ye.dirty ? (Te(Ce, ye),
                                                        ye.subscribers.forEach(function(Ke) {
                                                            return L.add(Ke)
                                                        })) : Ae !== ye.res && (ye.res = Ae,
                                                        ye.promise = de.resolve({
                                                            result: Ae
                                                        }))) : (ye.dirty && Te(Ce, ye),
                                                        ye.subscribers.forEach(function(Ke) {
                                                            return L.add(Ke)
                                                        })))
                                            }
                                        }
                                    }
                                    L.forEach(function(Ke) {
                                        return Ke()
                                    })
                                }
                            }
                        }
                        ,
                        C.addEventListener("abort", v(!1), {
                            signal: O
                        }),
                        C.addEventListener("error", v(!1), {
                            signal: O
                        }),
                        C.addEventListener("complete", v(!0), {
                            signal: O
                        })),
                        C
                    },
                    table: function(d) {
                        var m = a.table(d)
                          , v = m.schema.primaryKey;
                        return r(r({}, m), {
                            mutate: function(b) {
                                var O = ue.trans;
                                if (v.outbound || O.db._options.cache === "disabled" || O.explicit)
                                    return m.mutate(b);
                                var C = si["idb://".concat(l, "/").concat(d)];
                                return C ? (O = m.mutate(b),
                                b.type !== "add" && b.type !== "put" || !(50 <= b.values.length || gl(v, b).some(function(M) {
                                    return M == null
                                })) ? (C.optimisticOps.push(b),
                                b.mutatedParts && sa(b.mutatedParts),
                                O.then(function(M) {
                                    0 < M.numFailures && (Te(C.optimisticOps, b),
                                    (M = Nd(0, b, M)) && C.optimisticOps.push(M),
                                    b.mutatedParts && sa(b.mutatedParts))
                                }),
                                O.catch(function() {
                                    Te(C.optimisticOps, b),
                                    b.mutatedParts && sa(b.mutatedParts)
                                })) : O.then(function(M) {
                                    var L = Nd(0, r(r({}, b), {
                                        values: b.values.map(function(N, P) {
                                            var K, N = (K = v.keyPath) !== null && K !== void 0 && K.includes(".") ? we(N) : r({}, N);
                                            return U(N, v.keyPath, M.results[P]),
                                            N
                                        })
                                    }), M);
                                    C.optimisticOps.push(L),
                                    queueMicrotask(function() {
                                        return b.mutatedParts && sa(b.mutatedParts)
                                    })
                                }),
                                O) : m.mutate(b)
                            },
                            query: function(b) {
                                if (!Fd(ue, m) || !Ld("query", b))
                                    return m.query(b);
                                var O = ((L = ue.trans) === null || L === void 0 ? void 0 : L.db._options.cache) === "immutable"
                                  , P = ue
                                  , C = P.requery
                                  , M = P.signal
                                  , L = function(B, q, D, J) {
                                    var X = si["idb://".concat(B, "/").concat(q)];
                                    if (!X)
                                        return [];
                                    if (!(q = X.queries[D]))
                                        return [null, !1, X, null];
                                    var Q = q[(J.query ? J.query.index.name : null) || ""];
                                    if (!Q)
                                        return [null, !1, X, null];
                                    switch (D) {
                                    case "query":
                                        var re = Q.find(function(ce) {
                                            return ce.req.limit === J.limit && ce.req.values === J.values && kd(ce.req.query.range, J.query.range)
                                        });
                                        return re ? [re, !0, X, Q] : [Q.find(function(ce) {
                                            return ("limit"in ce.req ? ce.req.limit : 1 / 0) >= J.limit && (!J.values || ce.req.values) && b_(ce.req.query.range, J.query.range)
                                        }), !1, X, Q];
                                    case "count":
                                        return re = Q.find(function(ce) {
                                            return kd(ce.req.query.range, J.query.range)
                                        }),
                                        [re, !!re, X, Q]
                                    }
                                }(l, d, "query", b)
                                  , H = L[0]
                                  , P = L[1]
                                  , K = L[2]
                                  , N = L[3];
                                return H && P ? H.obsSet = b.obsSet : (P = m.query(b).then(function(B) {
                                    var q = B.result;
                                    if (H && (H.res = q),
                                    O) {
                                        for (var D = 0, J = q.length; D < J; ++D)
                                            Object.freeze(q[D]);
                                        Object.freeze(q)
                                    } else
                                        B.result = we(q);
                                    return B
                                }).catch(function(B) {
                                    return N && H && Te(N, H),
                                    Promise.reject(B)
                                }),
                                H = {
                                    obsSet: b.obsSet,
                                    promise: P,
                                    subscribers: new Set,
                                    type: "query",
                                    req: b,
                                    dirty: !1
                                },
                                N ? N.push(H) : (N = [H],
                                (K = K || (si["idb://".concat(l, "/").concat(d)] = {
                                    queries: {
                                        query: {},
                                        count: {}
                                    },
                                    objs: new Map,
                                    optimisticOps: [],
                                    unsignaledParts: {}
                                })).queries.query[b.query.index.name || ""] = N)),
                                __(H, N, C, M),
                                H.promise.then(function(B) {
                                    return {
                                        result: Md(B.result, b, K == null ? void 0 : K.optimisticOps, m, H, O)
                                    }
                                })
                            }
                        })
                    }
                })
            }
        };
        function ua(a, l) {
            return new Proxy(a,{
                get: function(d, m, v) {
                    return m === "db" ? l : Reflect.get(d, m, v)
                }
            })
        }
        var sr = (Pt.prototype.version = function(a) {
            if (isNaN(a) || a < .1)
                throw new z.Type("Given version is not a positive number");
            if (a = Math.round(10 * a) / 10,
            this.idbdb || this._state.isBeingOpened)
                throw new z.Schema("Cannot add version when database is open");
            this.verno = Math.max(this.verno, a);
            var l = this._versions
              , d = l.filter(function(m) {
                return m._cfg.version === a
            })[0];
            return d || (d = new this.Version(a),
            l.push(d),
            l.sort(c_),
            d.stores({}),
            this._state.autoSchema = !1,
            d)
        }
        ,
        Pt.prototype._whenReady = function(a) {
            var l = this;
            return this.idbdb && (this._state.openComplete || ue.letThrough || this._vip) ? a() : new de(function(d, m) {
                if (l._state.openComplete)
                    return m(new z.DatabaseClosed(l._state.dbOpenError));
                if (!l._state.isBeingOpened) {
                    if (!l._state.autoOpen)
                        return void m(new z.DatabaseClosed);
                    l.open().catch(Ie)
                }
                l._state.dbReadyPromise.then(d, m)
            }
            ).then(a)
        }
        ,
        Pt.prototype.use = function(a) {
            var l = a.stack
              , d = a.create
              , m = a.level
              , v = a.name;
            return v && this.unuse({
                stack: l,
                name: v
            }),
            a = this._middlewares[l] || (this._middlewares[l] = []),
            a.push({
                stack: l,
                create: d,
                level: m == null ? 10 : m,
                name: v
            }),
            a.sort(function(b, O) {
                return b.level - O.level
            }),
            this
        }
        ,
        Pt.prototype.unuse = function(a) {
            var l = a.stack
              , d = a.name
              , m = a.create;
            return l && this._middlewares[l] && (this._middlewares[l] = this._middlewares[l].filter(function(v) {
                return m ? v.create !== m : !!d && v.name !== d
            })),
            this
        }
        ,
        Pt.prototype.open = function() {
            var a = this;
            return ri(Be, function() {
                return p_(a)
            })
        }
        ,
        Pt.prototype._close = function() {
            var a = this._state
              , l = ki.indexOf(this);
            if (0 <= l && ki.splice(l, 1),
            this.idbdb) {
                try {
                    this.idbdb.close()
                } catch (d) {}
                this.idbdb = null
            }
            a.isBeingOpened || (a.dbReadyPromise = new de(function(d) {
                a.dbReadyResolve = d
            }
            ),
            a.openCanceller = new de(function(d, m) {
                a.cancelOpen = m
            }
            ))
        }
        ,
        Pt.prototype.close = function(d) {
            var l = (d === void 0 ? {
                disableAutoOpen: !0
            } : d).disableAutoOpen
              , d = this._state;
            l ? (d.isBeingOpened && d.cancelOpen(new z.DatabaseClosed),
            this._close(),
            d.autoOpen = !1,
            d.dbOpenError = new z.DatabaseClosed) : (this._close(),
            d.autoOpen = this._options.autoOpen || d.isBeingOpened,
            d.openComplete = !1,
            d.dbOpenError = null)
        }
        ,
        Pt.prototype.delete = function(a) {
            var l = this;
            a === void 0 && (a = {
                disableAutoOpen: !0
            });
            var d = 0 < arguments.length && typeof arguments[0] != "object"
              , m = this._state;
            return new de(function(v, b) {
                function O() {
                    l.close(a);
                    var C = l._deps.indexedDB.deleteDatabase(l.name);
                    C.onsuccess = Ot(function() {
                        var M, L, H;
                        M = l._deps,
                        L = l.name,
                        H = M.indexedDB,
                        M = M.IDBKeyRange,
                        sl(H) || L === Gs || ol(H, M).delete(L).catch(Ie),
                        v()
                    }),
                    C.onerror = Jn(b),
                    C.onblocked = l._fireOnBlocked
                }
                if (d)
                    throw new z.InvalidArgument("Invalid closeOptions argument to db.delete()");
                m.isBeingOpened ? m.dbReadyPromise.then(O) : O()
            }
            )
        }
        ,
        Pt.prototype.backendDB = function() {
            return this.idbdb
        }
        ,
        Pt.prototype.isOpen = function() {
            return this.idbdb !== null
        }
        ,
        Pt.prototype.hasBeenClosed = function() {
            var a = this._state.dbOpenError;
            return a && a.name === "DatabaseClosed"
        }
        ,
        Pt.prototype.hasFailed = function() {
            return this._state.dbOpenError !== null
        }
        ,
        Pt.prototype.dynamicallyOpened = function() {
            return this._state.autoSchema
        }
        ,
        Object.defineProperty(Pt.prototype, "tables", {
            get: function() {
                var a = this;
                return s(this._allTables).map(function(l) {
                    return a._allTables[l]
                })
            },
            enumerable: !1,
            configurable: !0
        }),
        Pt.prototype.transaction = function() {
            var a = function(l, d, m) {
                var v = arguments.length;
                if (v < 2)
                    throw new z.InvalidArgument("Too few arguments");
                for (var b = new Array(v - 1); --v; )
                    b[v - 1] = arguments[v];
                return m = b.pop(),
                [l, ne(b), m]
            }
            .apply(this, arguments);
            return this._transaction.apply(this, a)
        }
        ,
        Pt.prototype._transaction = function(a, l, d) {
            var m = this
              , v = ue.trans;
            v && v.db === this && a.indexOf("!") === -1 || (v = null);
            var b, O, C = a.indexOf("?") !== -1;
            a = a.replace("!", "").replace("?", "");
            try {
                if (O = l.map(function(L) {
                    if (L = L instanceof m.Table ? L.name : L,
                    typeof L != "string")
                        throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                    return L
                }),
                a == "r" || a === Gu)
                    b = Gu;
                else {
                    if (a != "rw" && a != zu)
                        throw new z.InvalidArgument("Invalid transaction mode: " + a);
                    b = zu
                }
                if (v) {
                    if (v.mode === Gu && b === zu) {
                        if (!C)
                            throw new z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                        v = null
                    }
                    v && O.forEach(function(L) {
                        if (v && v.storeNames.indexOf(L) === -1) {
                            if (!C)
                                throw new z.SubTransaction("Table " + L + " not included in parent transaction.");
                            v = null
                        }
                    }),
                    C && v && !v.active && (v = null)
                }
            } catch (L) {
                return v ? v._promise(null, function(H, P) {
                    P(L)
                }) : xt(L)
            }
            var M = function L(H, P, K, N, B) {
                return de.resolve().then(function() {
                    var q = ue.transless || ue
                      , D = H._createTransaction(P, K, H._dbSchema, N);
                    if (D.explicit = !0,
                    q = {
                        trans: D,
                        transless: q
                    },
                    N)
                        D.idbtrans = N.idbtrans;
                    else
                        try {
                            D.create(),
                            D.idbtrans._explicit = !0,
                            H._state.PR1398_maxLoop = 3
                        } catch (Q) {
                            return Q.name === Y.InvalidState && H.isOpen() && 0 < --H._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"),
                            H.close({
                                disableAutoOpen: !1
                            }),
                            H.open().then(function() {
                                return L(H, P, K, null, B)
                            })) : xt(Q)
                        }
                    var J, X = it(B);
                    return X && Mi(),
                    q = de.follow(function() {
                        var Q;
                        (J = B.call(D, D)) && (X ? (Q = Ar.bind(null, null),
                        J.then(Q, Q)) : typeof J.next == "function" && typeof J.throw == "function" && (J = pl(J)))
                    }, q),
                    (J && typeof J.then == "function" ? de.resolve(J).then(function(Q) {
                        return D.active ? Q : xt(new z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
                    }) : q.then(function() {
                        return J
                    })).then(function(Q) {
                        return N && D._resolve(),
                        D._completion.then(function() {
                            return Q
                        })
                    }).catch(function(Q) {
                        return D._reject(Q),
                        xt(Q)
                    })
                })
            }
            .bind(null, this, b, O, v, d);
            return v ? v._promise(b, M, "lock") : ue.trans ? ri(ue.transless, function() {
                return m._whenReady(M)
            }) : this._whenReady(M)
        }
        ,
        Pt.prototype.table = function(a) {
            if (!p(this._allTables, a))
                throw new z.InvalidTable("Table ".concat(a, " does not exist"));
            return this._allTables[a]
        }
        ,
        Pt);
        function Pt(a, l) {
            var d = this;
            this._middlewares = {},
            this.verno = 0;
            var m = Pt.dependencies;
            this._options = l = r({
                addons: Pt.addons,
                autoOpen: !0,
                indexedDB: m.indexedDB,
                IDBKeyRange: m.IDBKeyRange,
                cache: "cloned"
            }, l),
            this._deps = {
                indexedDB: l.indexedDB,
                IDBKeyRange: l.IDBKeyRange
            },
            m = l.addons,
            this._dbSchema = {},
            this._versions = [],
            this._storeNames = [],
            this._allTables = {},
            this.idbdb = null,
            this._novip = this;
            var v, b, O, C, M, L = {
                dbOpenError: null,
                isBeingOpened: !1,
                onReadyBeingFired: null,
                openComplete: !1,
                dbReadyResolve: Ie,
                dbReadyPromise: null,
                cancelOpen: Ie,
                openCanceller: null,
                autoSchema: !0,
                PR1398_maxLoop: 3,
                autoOpen: l.autoOpen
            };
            L.dbReadyPromise = new de(function(P) {
                L.dbReadyResolve = P
            }
            ),
            L.openCanceller = new de(function(P, K) {
                L.cancelOpen = K
            }
            ),
            this._state = L,
            this.name = a,
            this.on = Co(this, "populate", "blocked", "versionchange", "close", {
                ready: [me, Ie]
            }),
            this.on.ready.subscribe = E(this.on.ready.subscribe, function(P) {
                return function(K, N) {
                    Pt.vip(function() {
                        var B, q = d._state;
                        q.openComplete ? (q.dbOpenError || de.resolve().then(K),
                        N && P(K)) : q.onReadyBeingFired ? (q.onReadyBeingFired.push(K),
                        N && P(K)) : (P(K),
                        B = d,
                        N || P(function D() {
                            B.on.ready.unsubscribe(K),
                            B.on.ready.unsubscribe(D)
                        }))
                    })
                }
            }),
            this.Collection = (v = this,
            xo(r_.prototype, function(J, D) {
                this.db = v;
                var N = pd
                  , B = null;
                if (D)
                    try {
                        N = D()
                    } catch (X) {
                        B = X
                    }
                var q = J._ctx
                  , D = q.table
                  , J = D.hook.reading.fire;
                this._ctx = {
                    table: D,
                    index: q.index,
                    isPrimKey: !q.index || D.schema.primKey.keyPath && q.index === D.schema.primKey.name,
                    range: N,
                    keysOnly: !1,
                    dir: "next",
                    unique: "",
                    algorithm: null,
                    filter: null,
                    replayFilter: null,
                    justLimit: !0,
                    isMatch: null,
                    offset: 0,
                    limit: 1 / 0,
                    error: B,
                    or: q.or,
                    valueMapper: J !== S ? J : null
                }
            })),
            this.Table = (b = this,
            xo(yd.prototype, function(P, K, N) {
                this.db = b,
                this._tx = N,
                this.name = P,
                this.schema = K,
                this.hook = b._allTables[P] ? b._allTables[P].hook : Co(null, {
                    creating: [se, Ie],
                    reading: [w, S],
                    updating: [pe, Ie],
                    deleting: [oe, Ie]
                })
            })),
            this.Transaction = (O = this,
            xo(s_.prototype, function(P, K, N, B, q) {
                var D = this;
                this.db = O,
                this.mode = P,
                this.storeNames = K,
                this.schema = N,
                this.chromeTransactionDurability = B,
                this.idbtrans = null,
                this.on = Co(this, "complete", "error", "abort"),
                this.parent = q || null,
                this.active = !0,
                this._reculock = 0,
                this._blockedFuncs = [],
                this._resolve = null,
                this._reject = null,
                this._waitingFor = null,
                this._waitingQueue = null,
                this._spinCount = 0,
                this._completion = new de(function(J, X) {
                    D._resolve = J,
                    D._reject = X
                }
                ),
                this._completion.then(function() {
                    D.active = !1,
                    D.on.complete.fire()
                }, function(J) {
                    var X = D.active;
                    return D.active = !1,
                    D.on.error.fire(J),
                    D.parent ? D.parent._reject(J) : X && D.idbtrans && D.idbtrans.abort(),
                    xt(J)
                })
            })),
            this.Version = (C = this,
            xo(h_.prototype, function(P) {
                this.db = C,
                this._cfg = {
                    version: P,
                    storesSource: null,
                    dbschema: {},
                    tables: {},
                    contentUpgrade: null
                }
            })),
            this.WhereClause = (M = this,
            xo(Od.prototype, function(P, K, N) {
                if (this.db = M,
                this._ctx = {
                    table: P,
                    index: K === ":id" ? null : K,
                    or: N
                },
                this._cmp = this._ascending = ot,
                this._descending = function(B, q) {
                    return ot(q, B)
                }
                ,
                this._max = function(B, q) {
                    return 0 < ot(B, q) ? B : q
                }
                ,
                this._min = function(B, q) {
                    return ot(B, q) < 0 ? B : q
                }
                ,
                this._IDBKeyRange = M._deps.IDBKeyRange,
                !this._IDBKeyRange)
                    throw new z.MissingAPI
            })),
            this.on("versionchange", function(P) {
                0 < P.newVersion ? console.warn("Another connection wants to upgrade database '".concat(d.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(d.name, "'. Closing db now to resume the delete request.")),
                d.close({
                    disableAutoOpen: !1
                })
            }),
            this.on("blocked", function(P) {
                !P.newVersion || P.newVersion < P.oldVersion ? console.warn("Dexie.delete('".concat(d.name, "') was blocked")) : console.warn("Upgrade '".concat(d.name, "' blocked by other connection holding version ").concat(P.oldVersion / 10))
            }),
            this._maxKey = Lo(l.IDBKeyRange),
            this._createTransaction = function(P, K, N, B) {
                return new d.Transaction(P,K,N,d._options.chromeTransactionDurability,B)
            }
            ,
            this._fireOnBlocked = function(P) {
                d.on("blocked").fire(P),
                ki.filter(function(K) {
                    return K.name === d.name && K !== d && !K._state.vcFired
                }).map(function(K) {
                    return K.on("versionchange").fire(P)
                })
            }
            ,
            this.use(v_),
            this.use(w_),
            this.use(y_),
            this.use(m_),
            this.use(g_);
            var H = new Proxy(this,{
                get: function(P, K, N) {
                    if (K === "_vip")
                        return !0;
                    if (K === "table")
                        return function(q) {
                            return ua(d.table(q), H)
                        }
                        ;
                    var B = Reflect.get(P, K, N);
                    return B instanceof yd ? ua(B, H) : K === "tables" ? B.map(function(q) {
                        return ua(q, H)
                    }) : K === "_createTransaction" ? function() {
                        return ua(B.apply(this, arguments), H)
                    }
                    : B
                }
            });
            this.vip = H,
            m.forEach(function(P) {
                return P(d)
            })
        }
        var la, xn = typeof Symbol != "undefined" && "observable"in Symbol ? Symbol.observable : "@@observable", E_ = (yl.prototype.subscribe = function(a, l, d) {
            return this._subscribe(a && typeof a != "function" ? a : {
                next: a,
                error: l,
                complete: d
            })
        }
        ,
        yl.prototype[xn] = function() {
            return this
        }
        ,
        yl);
        function yl(a) {
            this._subscribe = a
        }
        try {
            la = {
                indexedDB: o.indexedDB || o.mozIndexedDB || o.webkitIndexedDB || o.msIndexedDB,
                IDBKeyRange: o.IDBKeyRange || o.webkitIDBKeyRange
            }
        } catch (a) {
            la = {
                indexedDB: null,
                IDBKeyRange: null
            }
        }
        function $d(a) {
            var l, d = !1, m = new E_(function(v) {
                var b = it(a), O, C = !1, M = {}, L = {}, H = {
                    get closed() {
                        return C
                    },
                    unsubscribe: function() {
                        C || (C = !0,
                        O && O.abort(),
                        P && Cr.storagemutated.unsubscribe(N))
                    }
                };
                v.start && v.start(H);
                var P = !1
                  , K = function() {
                    return qu(B)
                }
                  , N = function(q) {
                    oa(M, q),
                    cl(L, M) && K()
                }
                  , B = function() {
                    var q, D, J;
                    !C && la.indexedDB && (M = {},
                    q = {},
                    O && O.abort(),
                    O = new AbortController,
                    J = function(X) {
                        var Q = Yn();
                        try {
                            b && Mi();
                            var re = Sr(a, X);
                            return re = b ? re.finally(Ar) : re
                        } finally {
                            Q && Ni()
                        }
                    }(D = {
                        subscr: q,
                        signal: O.signal,
                        requery: K,
                        querier: a,
                        trans: null
                    }),
                    Promise.resolve(J).then(function(X) {
                        d = !0,
                        l = X,
                        C || D.signal.aborted || (M = {},
                        function(Q) {
                            for (var re in Q)
                                if (p(Q, re))
                                    return;
                            return 1
                        }(L = q) || P || (Cr(Fo, N),
                        P = !0),
                        qu(function() {
                            return !C && v.next && v.next(X)
                        }))
                    }, function(X) {
                        d = !1,
                        ["DatabaseClosedError", "AbortError"].includes(X == null ? void 0 : X.name) || C || qu(function() {
                            C || v.error && v.error(X)
                        })
                    }))
                };
                return setTimeout(K, 0),
                H
            }
            );
            return m.hasValue = function() {
                return d
            }
            ,
            m.getValue = function() {
                return l
            }
            ,
            m
        }
        var ai = sr;
        function bl(a) {
            var l = xr;
            try {
                xr = !0,
                Cr.storagemutated.fire(a),
                hl(a, !0)
            } finally {
                xr = l
            }
        }
        g(ai, r(r({}, Ue), {
            delete: function(a) {
                return new ai(a,{
                    addons: []
                }).delete()
            },
            exists: function(a) {
                return new ai(a,{
                    addons: []
                }).open().then(function(l) {
                    return l.close(),
                    !0
                }).catch("NoSuchDatabaseError", function() {
                    return !1
                })
            },
            getDatabaseNames: function(a) {
                try {
                    return l = ai.dependencies,
                    d = l.indexedDB,
                    l = l.IDBKeyRange,
                    (sl(d) ? Promise.resolve(d.databases()).then(function(m) {
                        return m.map(function(v) {
                            return v.name
                        }).filter(function(v) {
                            return v !== Gs
                        })
                    }) : ol(d, l).toCollection().primaryKeys()).then(a)
                } catch (m) {
                    return xt(new z.MissingAPI)
                }
                var l, d
            },
            defineClass: function() {
                return function(a) {
                    c(this, a)
                }
            },
            ignoreTransaction: function(a) {
                return ue.trans ? ri(ue.transless, a) : a()
            },
            vip: al,
            async: function(a) {
                return function() {
                    try {
                        var l = pl(a.apply(this, arguments));
                        return l && typeof l.then == "function" ? l : de.resolve(l)
                    } catch (d) {
                        return xt(d)
                    }
                }
            },
            spawn: function(a, l, d) {
                try {
                    var m = pl(a.apply(d, l || []));
                    return m && typeof m.then == "function" ? m : de.resolve(m)
                } catch (v) {
                    return xt(v)
                }
            },
            currentTransaction: {
                get: function() {
                    return ue.trans || null
                }
            },
            waitFor: function(a, l) {
                return l = de.resolve(typeof a == "function" ? ai.ignoreTransaction(a) : a).timeout(l || 6e4),
                ue.trans ? ue.trans.waitFor(l) : l
            },
            Promise: de,
            debug: {
                get: function() {
                    return he
                },
                set: function(a) {
                    fe(a)
                }
            },
            derive: R,
            extend: c,
            props: g,
            override: E,
            Events: Co,
            on: Cr,
            liveQuery: $d,
            extendObservabilitySet: oa,
            getByKeyPath: $,
            setByKeyPath: U,
            delByKeyPath: function(a, l) {
                typeof l == "string" ? U(a, l, void 0) : "length"in l && [].map.call(l, function(d) {
                    U(a, d, void 0)
                })
            },
            shallowClone: Z,
            deepClone: we,
            getObjectDiff: ml,
            cmp: ot,
            asap: W,
            minKey: -1 / 0,
            addons: [],
            connections: ki,
            errnames: Y,
            dependencies: la,
            cache: si,
            semVer: "4.0.7",
            version: "4.0.7".split(".").map(function(a) {
                return parseInt(a)
            }).reduce(function(a, l, d) {
                return a + l / Math.pow(10, 2 * d)
            })
        })),
        ai.maxKey = Lo(ai.dependencies.IDBKeyRange),
        typeof dispatchEvent != "undefined" && typeof addEventListener != "undefined" && (Cr(Fo, function(a) {
            xr || (a = new CustomEvent(Qu,{
                detail: a
            }),
            xr = !0,
            dispatchEvent(a),
            xr = !1)
        }),
        addEventListener(Qu, function(a) {
            a = a.detail,
            xr || bl(a)
        }));
        var ji, xr = !1, Dd = function() {};
        return typeof BroadcastChannel != "undefined" && ((Dd = function() {
            (ji = new BroadcastChannel(Qu)).onmessage = function(a) {
                return a.data && bl(a.data)
            }
        }
        )(),
        typeof ji.unref == "function" && ji.unref(),
        Cr(Fo, function(a) {
            xr || ji.postMessage(a)
        })),
        typeof addEventListener != "undefined" && (addEventListener("pagehide", function(a) {
            if (!sr.disableBfCache && a.persisted) {
                he && console.debug("Dexie: handling persisted pagehide"),
                ji != null && ji.close();
                for (var l = 0, d = ki; l < d.length; l++)
                    d[l].close({
                        disableAutoOpen: !1
                    })
            }
        }),
        addEventListener("pageshow", function(a) {
            !sr.disableBfCache && a.persisted && (he && console.debug("Dexie: handling persisted pageshow"),
            Dd(),
            bl({
                all: new Jt(-1 / 0,[[]])
            }))
        })),
        de.rejectionMapper = function(a, l) {
            return !a || a instanceof Tt || a instanceof TypeError || a instanceof SyntaxError || !a.name || !xe[a.name] ? a : (l = new xe[a.name](l || a.message,a),
            "stack"in a && _(l, "stack", {
                get: function() {
                    return this.inner.stack
                }
            }),
            l)
        }
        ,
        fe(he),
        r(sr, Object.freeze({
            __proto__: null,
            Dexie: sr,
            liveQuery: $d,
            Entity: md,
            cmp: ot,
            PropModSymbol: or,
            PropModification: Po,
            replacePrefix: function(a, l) {
                return new Po({
                    replacePrefix: [a, l]
                })
            },
            add: function(a) {
                return new Po({
                    add: a
                })
            },
            remove: function(a) {
                return new Po({
                    remove: a
                })
            },
            default: sr,
            RangeSet: Jt,
            mergeRanges: ko,
            rangesOverlap: ia
        }), {
            default: sr
        }),
        sr
    })
}
)(qm);
var U_ = qm.exports;
const Kl = O_(U_)
  , Xd = Symbol.for("Dexie")
  , ql = globalThis[Xd] || (globalThis[Xd] = Kl);
if (Kl.semVer !== ql.semVer)
    throw new Error(`Two different versions of Dexie loaded in the same app: ${Kl.semVer} and ${ql.semVer}`);
const {liveQuery: wN, mergeRanges: EN, rangesOverlap: ON, RangeSet: SN, cmp: AN, Entity: TN, PropModSymbol: RN, PropModification: CN, replacePrefix: xN, add: PN, remove: IN} = ql;
var Gm = typeof global == "object" && global && global.Object === Object && global
  , W_ = typeof self == "object" && self && self.Object === Object && self
  , an = Gm || W_ || Function("return this")()
  , Nn = an.Symbol
  , zm = Object.prototype
  , H_ = zm.hasOwnProperty
  , K_ = zm.toString
  , Do = Nn ? Nn.toStringTag : void 0;
function q_(e) {
    var t = H_.call(e, Do)
      , n = e[Do];
    try {
        e[Do] = void 0;
        var r = !0
    } catch (o) {}
    var i = K_.call(e);
    return r && (t ? e[Do] = n : delete e[Do]),
    i
}
var G_ = Object.prototype
  , z_ = G_.toString;
function Y_(e) {
    return z_.call(e)
}
var J_ = "[object Null]"
  , X_ = "[object Undefined]"
  , Qd = Nn ? Nn.toStringTag : void 0;
function qn(e) {
    return e == null ? e === void 0 ? X_ : J_ : Qd && Qd in Object(e) ? q_(e) : Y_(e)
}
function sn(e) {
    return e != null && typeof e == "object"
}
var Q_ = "[object Symbol]";
function Wr(e) {
    return typeof e == "symbol" || sn(e) && qn(e) == Q_
}
var Z_ = NaN;
function Zd(e) {
    return typeof e == "number" ? e : Wr(e) ? Z_ : +e
}
function Vn(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
        i[n] = t(e[n], n, e);
    return i
}
var St = Array.isArray
  , eh = Nn ? Nn.prototype : void 0
  , th = eh ? eh.toString : void 0;
function ka(e) {
    if (typeof e == "string")
        return e;
    if (St(e))
        return Vn(e, ka) + "";
    if (Wr(e))
        return th ? th.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -1 / 0 ? "-0" : t
}
function qc(e, t) {
    return function(n, r) {
        var i;
        if (n === void 0 && r === void 0)
            return t;
        if (n !== void 0 && (i = n),
        r !== void 0) {
            if (i === void 0)
                return r;
            typeof n == "string" || typeof r == "string" ? (n = ka(n),
            r = ka(r)) : (n = Zd(n),
            r = Zd(r)),
            i = e(n, r)
        }
        return i
    }
}
var FN = qc(function(e, t) {
    return e + t
}, 0)
  , e0 = /\s/;
function t0(e) {
    for (var t = e.length; t-- && e0.test(e.charAt(t)); )
        ;
    return t
}
var n0 = /^\s+/;
function r0(e) {
    return e && e.slice(0, t0(e) + 1).replace(n0, "")
}
function en(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var nh = NaN
  , i0 = /^[-+]0x[0-9a-f]+$/i
  , o0 = /^0b[01]+$/i
  , s0 = /^0o[0-7]+$/i
  , a0 = parseInt;
function Gl(e) {
    if (typeof e == "number")
        return e;
    if (Wr(e))
        return nh;
    if (en(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = en(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = r0(e);
    var n = o0.test(e);
    return n || s0.test(e) ? a0(e.slice(2), n ? 2 : 8) : i0.test(e) ? nh : +e
}
var u0 = 1 / 0
  , l0 = 17976931348623157e292;
function zl(e) {
    if (!e)
        return e === 0 ? e : 0;
    if (e = Gl(e),
    e === u0 || e === -1 / 0) {
        var t = e < 0 ? -1 : 1;
        return t * l0
    }
    return e === e ? e : 0
}
function Hr(e) {
    var t = zl(e)
      , n = t % 1;
    return t === t ? n ? t - n : t : 0
}
function Ai(e) {
    return e
}
var c0 = "[object AsyncFunction]"
  , f0 = "[object Function]"
  , d0 = "[object GeneratorFunction]"
  , h0 = "[object Proxy]";
function Gc(e) {
    if (!en(e))
        return !1;
    var t = qn(e);
    return t == f0 || t == d0 || t == c0 || t == h0
}
var wl = an["__core-js_shared__"]
  , rh = function() {
    var e = /[^.]+$/.exec(wl && wl.keys && wl.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function p0(e) {
    return !!rh && rh in e
}
var m0 = Function.prototype
  , g0 = m0.toString;
function Ti(e) {
    if (e != null) {
        try {
            return g0.call(e)
        } catch (t) {}
        try {
            return e + ""
        } catch (t) {}
    }
    return ""
}
var v0 = /[\\^$.*+?()[\]{}|]/g
  , y0 = /^\[object .+?Constructor\]$/
  , b0 = Function.prototype
  , _0 = Object.prototype
  , w0 = b0.toString
  , E0 = _0.hasOwnProperty
  , O0 = RegExp("^" + w0.call(E0).replace(v0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function S0(e) {
    if (!en(e) || p0(e))
        return !1;
    var t = Gc(e) ? O0 : y0;
    return t.test(Ti(e))
}
function A0(e, t) {
    return e == null ? void 0 : e[t]
}
function Ri(e, t) {
    var n = A0(e, t);
    return S0(n) ? n : void 0
}
var rs = Ri(an, "WeakMap")
  , $a = rs && new rs
  , Ym = $a ? function(e, t) {
    return $a.set(e, t),
    e
}
: Ai
  , ih = Object.create
  , su = function() {
    function e() {}
    return function(t) {
        if (!en(t))
            return {};
        if (ih)
            return ih(t);
        e.prototype = t;
        var n = new e;
        return e.prototype = void 0,
        n
    }
}();
function is(e) {
    return function() {
        var t = arguments;
        switch (t.length) {
        case 0:
            return new e;
        case 1:
            return new e(t[0]);
        case 2:
            return new e(t[0],t[1]);
        case 3:
            return new e(t[0],t[1],t[2]);
        case 4:
            return new e(t[0],t[1],t[2],t[3]);
        case 5:
            return new e(t[0],t[1],t[2],t[3],t[4]);
        case 6:
            return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
        case 7:
            return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
        }
        var n = su(e.prototype)
          , r = e.apply(n, t);
        return en(r) ? r : n
    }
}
var T0 = 1;
function R0(e, t, n) {
    var r = t & T0
      , i = is(e);
    function o() {
        var s = this && this !== an && this instanceof o ? i : e;
        return s.apply(r ? n : this, arguments)
    }
    return o
}
function au(e, t, n) {
    switch (n.length) {
    case 0:
        return e.call(t);
    case 1:
        return e.call(t, n[0]);
    case 2:
        return e.call(t, n[0], n[1]);
    case 3:
        return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}
var C0 = Math.max;
function Jm(e, t, n, r) {
    for (var i = -1, o = e.length, s = n.length, u = -1, c = t.length, f = C0(o - s, 0), h = Array(c + f), p = !r; ++u < c; )
        h[u] = t[u];
    for (; ++i < s; )
        (p || i < o) && (h[n[i]] = e[i]);
    for (; f--; )
        h[u++] = e[i++];
    return h
}
var x0 = Math.max;
function Xm(e, t, n, r) {
    for (var i = -1, o = e.length, s = -1, u = n.length, c = -1, f = t.length, h = x0(o - u, 0), p = Array(h + f), g = !r; ++i < h; )
        p[i] = e[i];
    for (var y = i; ++c < f; )
        p[y + c] = t[c];
    for (; ++s < u; )
        (g || i < o) && (p[y + n[s]] = e[i++]);
    return p
}
function P0(e, t) {
    for (var n = e.length, r = 0; n--; )
        e[n] === t && ++r;
    return r
}
function zc() {}
var I0 = 4294967295;
function io(e) {
    this.__wrapped__ = e,
    this.__actions__ = [],
    this.__dir__ = 1,
    this.__filtered__ = !1,
    this.__iteratees__ = [],
    this.__takeCount__ = I0,
    this.__views__ = []
}
io.prototype = su(zc.prototype);
io.prototype.constructor = io;
function Qm() {}
var Zm = $a ? function(e) {
    return $a.get(e)
}
: Qm
  , oh = {}
  , F0 = Object.prototype
  , L0 = F0.hasOwnProperty;
function N0(e) {
    for (var t = e.name + "", n = oh[t], r = L0.call(oh, t) ? n.length : 0; r--; ) {
        var i = n[r]
          , o = i.func;
        if (o == null || o == e)
            return i.name
    }
    return t
}
function oo(e, t) {
    this.__wrapped__ = e,
    this.__actions__ = [],
    this.__chain__ = !!t,
    this.__index__ = 0,
    this.__values__ = void 0
}
oo.prototype = su(zc.prototype);
oo.prototype.constructor = oo;
function Ci(e, t) {
    var n = -1
      , r = e.length;
    for (t || (t = Array(r)); ++n < r; )
        t[n] = e[n];
    return t
}
function M0(e) {
    if (e instanceof io)
        return e.clone();
    var t = new oo(e.__wrapped__,e.__chain__);
    return t.__actions__ = Ci(e.__actions__),
    t.__index__ = e.__index__,
    t.__values__ = e.__values__,
    t
}
var k0 = Object.prototype
  , $0 = k0.hasOwnProperty;
function Da(e) {
    if (sn(e) && !St(e) && !(e instanceof io)) {
        if (e instanceof oo)
            return e;
        if ($0.call(e, "__wrapped__"))
            return M0(e)
    }
    return new oo(e)
}
Da.prototype = zc.prototype;
Da.prototype.constructor = Da;
function D0(e) {
    var t = N0(e)
      , n = Da[t];
    if (typeof n != "function" || !(t in io.prototype))
        return !1;
    if (e === n)
        return !0;
    var r = Zm(n);
    return !!r && e === r[0]
}
var j0 = 800
  , B0 = 16
  , V0 = Date.now;
function eg(e) {
    var t = 0
      , n = 0;
    return function() {
        var r = V0()
          , i = B0 - (r - n);
        if (n = r,
        i > 0) {
            if (++t >= j0)
                return arguments[0]
        } else
            t = 0;
        return e.apply(void 0, arguments)
    }
}
var tg = eg(Ym)
  , U0 = /\{\n\/\* \[wrapped with (.+)\] \*/
  , W0 = /,? & /;
function H0(e) {
    var t = e.match(U0);
    return t ? t[1].split(W0) : []
}
var K0 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function q0(e, t) {
    var n = t.length;
    if (!n)
        return e;
    var r = n - 1;
    return t[r] = (n > 1 ? "& " : "") + t[r],
    t = t.join(n > 2 ? ", " : " "),
    e.replace(K0, `{
/* [wrapped with ` + t + `] */
`)
}
function G0(e) {
    return function() {
        return e
    }
}
var ja = function() {
    try {
        var e = Ri(Object, "defineProperty");
        return e({}, "", {}),
        e
    } catch (t) {}
}()
  , z0 = ja ? function(e, t) {
    return ja(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: G0(t),
        writable: !0
    })
}
: Ai
  , Yc = eg(z0);
function ng(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
        ;
    return e
}
function rg(e, t, n, r) {
    for (var i = e.length, o = n + -1; ++o < i; )
        if (t(e[o], o, e))
            return o;
    return -1
}
function Y0(e) {
    return e !== e
}
function J0(e, t, n) {
    for (var r = n - 1, i = e.length; ++r < i; )
        if (e[r] === t)
            return r;
    return -1
}
function Jc(e, t, n) {
    return t === t ? J0(e, t, n) : rg(e, Y0, n)
}
function uu(e, t) {
    var n = e == null ? 0 : e.length;
    return !!n && Jc(e, t, 0) > -1
}
var X0 = 1
  , Q0 = 2
  , Z0 = 8
  , ew = 16
  , tw = 32
  , nw = 64
  , rw = 128
  , iw = 256
  , ow = 512
  , sw = [["ary", rw], ["bind", X0], ["bindKey", Q0], ["curry", Z0], ["curryRight", ew], ["flip", ow], ["partial", tw], ["partialRight", nw], ["rearg", iw]];
function aw(e, t) {
    return ng(sw, function(n) {
        var r = "_." + n[0];
        t & n[1] && !uu(e, r) && e.push(r)
    }),
    e.sort()
}
function ig(e, t, n) {
    var r = t + "";
    return Yc(e, q0(r, aw(H0(r), n)))
}
var uw = 4
  , lw = 8
  , sh = 32
  , ah = 64;
function og(e, t, n, r, i, o, s, u, c, f) {
    var h = t & lw
      , p = h ? s : void 0
      , g = h ? void 0 : s
      , y = h ? o : void 0
      , _ = h ? void 0 : o;
    t |= h ? sh : ah,
    t &= ~(h ? ah : sh),
    t & uw || (t &= -4);
    var R = [e, t, i, y, p, _, g, u, c, f]
      , F = n.apply(void 0, R);
    return D0(e) && tg(F, R),
    F.placeholder = r,
    ig(F, e, t)
}
function Xc(e) {
    var t = e;
    return t.placeholder
}
var cw = 9007199254740991
  , fw = /^(?:0|[1-9]\d*)$/;
function vo(e, t) {
    var n = typeof e;
    return t = t == null ? cw : t,
    !!t && (n == "number" || n != "symbol" && fw.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var dw = Math.min;
function hw(e, t) {
    for (var n = e.length, r = dw(t.length, n), i = Ci(e); r--; ) {
        var o = t[r];
        e[r] = vo(o, n) ? i[o] : void 0
    }
    return e
}
var uh = "__lodash_placeholder__";
function os(e, t) {
    for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
        var s = e[n];
        (s === t || s === uh) && (e[n] = uh,
        o[i++] = n)
    }
    return o
}
var pw = 1
  , mw = 2
  , gw = 8
  , vw = 16
  , yw = 128
  , bw = 512;
function Qc(e, t, n, r, i, o, s, u, c, f) {
    var h = t & yw
      , p = t & pw
      , g = t & mw
      , y = t & (gw | vw)
      , _ = t & bw
      , R = g ? void 0 : is(e);
    function F() {
        for (var T = arguments.length, A = Array(T), E = T; E--; )
            A[E] = arguments[E];
        if (y)
            var I = Xc(F)
              , W = P0(A, I);
        if (r && (A = Jm(A, r, i, y)),
        o && (A = Xm(A, o, s, y)),
        T -= W,
        y && T < f) {
            var $ = os(A, I);
            return og(e, t, Qc, F.placeholder, n, A, $, u, c, f - T)
        }
        var U = p ? n : this
          , Z = g ? U[e] : e;
        return T = A.length,
        u ? A = hw(A, u) : _ && T > 1 && A.reverse(),
        h && c < T && (A.length = c),
        this && this !== an && this instanceof F && (Z = R || is(Z)),
        Z.apply(U, A)
    }
    return F
}
function _w(e, t, n) {
    var r = is(e);
    function i() {
        for (var o = arguments.length, s = Array(o), u = o, c = Xc(i); u--; )
            s[u] = arguments[u];
        var f = o < 3 && s[0] !== c && s[o - 1] !== c ? [] : os(s, c);
        if (o -= f.length,
        o < n)
            return og(e, t, Qc, i.placeholder, void 0, s, f, void 0, void 0, n - o);
        var h = this && this !== an && this instanceof i ? r : e;
        return au(h, this, s)
    }
    return i
}
var ww = 1;
function Ew(e, t, n, r) {
    var i = t & ww
      , o = is(e);
    function s() {
        for (var u = -1, c = arguments.length, f = -1, h = r.length, p = Array(h + c), g = this && this !== an && this instanceof s ? o : e; ++f < h; )
            p[f] = r[f];
        for (; c--; )
            p[f++] = arguments[++u];
        return au(g, i ? n : this, p)
    }
    return s
}
var lh = "__lodash_placeholder__"
  , El = 1
  , Ow = 2
  , Sw = 4
  , ch = 8
  , jo = 128
  , fh = 256
  , Aw = Math.min;
function Tw(e, t) {
    var n = e[1]
      , r = t[1]
      , i = n | r
      , o = i < (El | Ow | jo)
      , s = r == jo && n == ch || r == jo && n == fh && e[7].length <= t[8] || r == (jo | fh) && t[7].length <= t[8] && n == ch;
    if (!(o || s))
        return e;
    r & El && (e[2] = t[2],
    i |= n & El ? 0 : Sw);
    var u = t[3];
    if (u) {
        var c = e[3];
        e[3] = c ? Jm(c, u, t[4]) : u,
        e[4] = c ? os(e[3], lh) : t[4]
    }
    return u = t[5],
    u && (c = e[5],
    e[5] = c ? Xm(c, u, t[6]) : u,
    e[6] = c ? os(e[5], lh) : t[6]),
    u = t[7],
    u && (e[7] = u),
    r & jo && (e[8] = e[8] == null ? t[8] : Aw(e[8], t[8])),
    e[9] == null && (e[9] = t[9]),
    e[0] = t[0],
    e[1] = i,
    e
}
var Rw = "Expected a function"
  , dh = 1
  , Cw = 2
  , hh = 8
  , ph = 16
  , mh = 32
  , xw = 64
  , gh = Math.max;
function Pw(e, t, n, r, i, o, s, u) {
    var c = t & Cw;
    if (!c && typeof e != "function")
        throw new TypeError(Rw);
    var f = r ? r.length : 0;
    if (f || (t &= -97,
    r = i = void 0),
    s = s === void 0 ? s : gh(Hr(s), 0),
    u = u === void 0 ? u : Hr(u),
    f -= i ? i.length : 0,
    t & xw) {
        var h = r
          , p = i;
        r = i = void 0
    }
    var g = c ? void 0 : Zm(e)
      , y = [e, t, n, r, i, h, p, o, s, u];
    if (g && Tw(y, g),
    e = y[0],
    t = y[1],
    n = y[2],
    r = y[3],
    i = y[4],
    u = y[9] = y[9] === void 0 ? c ? 0 : e.length : gh(y[9] - f, 0),
    !u && t & (hh | ph) && (t &= -25),
    !t || t == dh)
        var _ = R0(e, t, n);
    else
        t == hh || t == ph ? _ = _w(e, t, u) : (t == mh || t == (dh | mh)) && !i.length ? _ = Ew(e, t, n, r) : _ = Qc.apply(void 0, y);
    var R = g ? Ym : tg;
    return ig(R(_, y), e, t)
}
function xi(e, t, n) {
    t == "__proto__" && ja ? ja(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
function Ss(e, t) {
    return e === t || e !== e && t !== t
}
var Iw = Object.prototype
  , Fw = Iw.hasOwnProperty;
function Zc(e, t, n) {
    var r = e[t];
    (!(Fw.call(e, t) && Ss(r, n)) || n === void 0 && !(t in e)) && xi(e, t, n)
}
function yo(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s; ) {
        var u = t[o]
          , c = void 0;
        c === void 0 && (c = e[u]),
        i ? xi(n, u, c) : Zc(n, u, c)
    }
    return n
}
var vh = Math.max;
function sg(e, t, n) {
    return t = vh(t === void 0 ? e.length - 1 : t, 0),
    function() {
        for (var r = arguments, i = -1, o = vh(r.length - t, 0), s = Array(o); ++i < o; )
            s[i] = r[t + i];
        i = -1;
        for (var u = Array(t + 1); ++i < t; )
            u[i] = r[i];
        return u[t] = n(s),
        au(e, this, u)
    }
}
function Gn(e, t) {
    return Yc(sg(e, t, Ai), e + "")
}
var Lw = 9007199254740991;
function ef(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lw
}
function vr(e) {
    return e != null && ef(e.length) && !Gc(e)
}
function Ba(e, t, n) {
    if (!en(n))
        return !1;
    var r = typeof t;
    return (r == "number" ? vr(n) && vo(t, n.length) : r == "string" && t in n) ? Ss(n[t], e) : !1
}
function ag(e) {
    return Gn(function(t, n) {
        var r = -1
          , i = n.length
          , o = i > 1 ? n[i - 1] : void 0
          , s = i > 2 ? n[2] : void 0;
        for (o = e.length > 3 && typeof o == "function" ? (i--,
        o) : void 0,
        s && Ba(n[0], n[1], s) && (o = i < 3 ? void 0 : o,
        i = 1),
        t = Object(t); ++r < i; ) {
            var u = n[r];
            u && e(t, u, r, o)
        }
        return t
    })
}
var Nw = Object.prototype;
function lu(e) {
    var t = e && e.constructor
      , n = typeof t == "function" && t.prototype || Nw;
    return e === n
}
function Mw(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
        r[n] = t(n);
    return r
}
var kw = "[object Arguments]";
function yh(e) {
    return sn(e) && qn(e) == kw
}
var ug = Object.prototype
  , $w = ug.hasOwnProperty
  , Dw = ug.propertyIsEnumerable
  , so = yh(function() {
    return arguments
}()) ? yh : function(e) {
    return sn(e) && $w.call(e, "callee") && !Dw.call(e, "callee")
}
;
function jw() {
    return !1
}
var lg = typeof exports == "object" && exports && !exports.nodeType && exports
  , bh = lg && typeof module == "object" && module && !module.nodeType && module
  , Bw = bh && bh.exports === lg
  , _h = Bw ? an.Buffer : void 0
  , Vw = _h ? _h.isBuffer : void 0
  , ao = Vw || jw
  , Uw = "[object Arguments]"
  , Ww = "[object Array]"
  , Hw = "[object Boolean]"
  , Kw = "[object Date]"
  , qw = "[object Error]"
  , Gw = "[object Function]"
  , zw = "[object Map]"
  , Yw = "[object Number]"
  , Jw = "[object Object]"
  , Xw = "[object RegExp]"
  , Qw = "[object Set]"
  , Zw = "[object String]"
  , eE = "[object WeakMap]"
  , tE = "[object ArrayBuffer]"
  , nE = "[object DataView]"
  , rE = "[object Float32Array]"
  , iE = "[object Float64Array]"
  , oE = "[object Int8Array]"
  , sE = "[object Int16Array]"
  , aE = "[object Int32Array]"
  , uE = "[object Uint8Array]"
  , lE = "[object Uint8ClampedArray]"
  , cE = "[object Uint16Array]"
  , fE = "[object Uint32Array]"
  , yt = {};
yt[rE] = yt[iE] = yt[oE] = yt[sE] = yt[aE] = yt[uE] = yt[lE] = yt[cE] = yt[fE] = !0;
yt[Uw] = yt[Ww] = yt[tE] = yt[Hw] = yt[nE] = yt[Kw] = yt[qw] = yt[Gw] = yt[zw] = yt[Yw] = yt[Jw] = yt[Xw] = yt[Qw] = yt[Zw] = yt[eE] = !1;
function dE(e) {
    return sn(e) && ef(e.length) && !!yt[qn(e)]
}
function As(e) {
    return function(t) {
        return e(t)
    }
}
var cg = typeof exports == "object" && exports && !exports.nodeType && exports
  , zo = cg && typeof module == "object" && module && !module.nodeType && module
  , hE = zo && zo.exports === cg
  , Ol = hE && Gm.process
  , uo = function() {
    try {
        var e = zo && zo.require && zo.require("util").types;
        return e || Ol && Ol.binding && Ol.binding("util")
    } catch (t) {}
}()
  , wh = uo && uo.isTypedArray
  , cu = wh ? As(wh) : dE
  , pE = Object.prototype
  , mE = pE.hasOwnProperty;
function fg(e, t) {
    var n = St(e)
      , r = !n && so(e)
      , i = !n && !r && ao(e)
      , o = !n && !r && !i && cu(e)
      , s = n || r || i || o
      , u = s ? Mw(e.length, String) : []
      , c = u.length;
    for (var f in e)
        (t || mE.call(e, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || vo(f, c))) && u.push(f);
    return u
}
function dg(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var gE = dg(Object.keys, Object)
  , vE = Object.prototype
  , yE = vE.hasOwnProperty;
function hg(e) {
    if (!lu(e))
        return gE(e);
    var t = [];
    for (var n in Object(e))
        yE.call(e, n) && n != "constructor" && t.push(n);
    return t
}
function Qr(e) {
    return vr(e) ? fg(e) : hg(e)
}
function bE(e) {
    var t = [];
    if (e != null)
        for (var n in Object(e))
            t.push(n);
    return t
}
var _E = Object.prototype
  , wE = _E.hasOwnProperty;
function EE(e) {
    if (!en(e))
        return bE(e);
    var t = lu(e)
      , n = [];
    for (var r in e)
        r == "constructor" && (t || !wE.call(e, r)) || n.push(r);
    return n
}
function Ts(e) {
    return vr(e) ? fg(e, !0) : EE(e)
}
var OE = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
  , SE = /^\w*$/;
function tf(e, t) {
    if (St(e))
        return !1;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || Wr(e) ? !0 : SE.test(e) || !OE.test(e) || t != null && e in Object(t)
}
var ss = Ri(Object, "create");
function AE() {
    this.__data__ = ss ? ss(null) : {},
    this.size = 0
}
function TE(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0,
    t
}
var RE = "__lodash_hash_undefined__"
  , CE = Object.prototype
  , xE = CE.hasOwnProperty;
function PE(e) {
    var t = this.__data__;
    if (ss) {
        var n = t[e];
        return n === RE ? void 0 : n
    }
    return xE.call(t, e) ? t[e] : void 0
}
var IE = Object.prototype
  , FE = IE.hasOwnProperty;
function LE(e) {
    var t = this.__data__;
    return ss ? t[e] !== void 0 : FE.call(t, e)
}
var NE = "__lodash_hash_undefined__";
function ME(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1,
    n[e] = ss && t === void 0 ? NE : t,
    this
}
function yi(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
yi.prototype.clear = AE;
yi.prototype.delete = TE;
yi.prototype.get = PE;
yi.prototype.has = LE;
yi.prototype.set = ME;
function kE() {
    this.__data__ = [],
    this.size = 0
}
function fu(e, t) {
    for (var n = e.length; n--; )
        if (Ss(e[n][0], t))
            return n;
    return -1
}
var $E = Array.prototype
  , DE = $E.splice;
function jE(e) {
    var t = this.__data__
      , n = fu(t, e);
    if (n < 0)
        return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : DE.call(t, n, 1),
    --this.size,
    !0
}
function BE(e) {
    var t = this.__data__
      , n = fu(t, e);
    return n < 0 ? void 0 : t[n][1]
}
function VE(e) {
    return fu(this.__data__, e) > -1
}
function UE(e, t) {
    var n = this.__data__
      , r = fu(n, e);
    return r < 0 ? (++this.size,
    n.push([e, t])) : n[r][1] = t,
    this
}
function yr(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
yr.prototype.clear = kE;
yr.prototype.delete = jE;
yr.prototype.get = BE;
yr.prototype.has = VE;
yr.prototype.set = UE;
var as = Ri(an, "Map");
function WE() {
    this.size = 0,
    this.__data__ = {
        hash: new yi,
        map: new (as || yr),
        string: new yi
    }
}
function HE(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
function du(e, t) {
    var n = e.__data__;
    return HE(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
function KE(e) {
    var t = du(this, e).delete(e);
    return this.size -= t ? 1 : 0,
    t
}
function qE(e) {
    return du(this, e).get(e)
}
function GE(e) {
    return du(this, e).has(e)
}
function zE(e, t) {
    var n = du(this, e)
      , r = n.size;
    return n.set(e, t),
    this.size += n.size == r ? 0 : 1,
    this
}
function br(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
br.prototype.clear = WE;
br.prototype.delete = KE;
br.prototype.get = qE;
br.prototype.has = GE;
br.prototype.set = zE;
var YE = "Expected a function";
function nf(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
        throw new TypeError(YE);
    var n = function() {
        var r = arguments
          , i = t ? t.apply(this, r) : r[0]
          , o = n.cache;
        if (o.has(i))
            return o.get(i);
        var s = e.apply(this, r);
        return n.cache = o.set(i, s) || o,
        s
    };
    return n.cache = new (nf.Cache || br),
    n
}
nf.Cache = br;
var JE = 500;
function XE(e) {
    var t = nf(e, function(r) {
        return n.size === JE && n.clear(),
        r
    })
      , n = t.cache;
    return t
}
var QE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  , ZE = /\\(\\)?/g
  , eO = XE(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""),
    e.replace(QE, function(n, r, i, o) {
        t.push(i ? o.replace(ZE, "$1") : r || n)
    }),
    t
});
function rf(e) {
    return e == null ? "" : ka(e)
}
function bo(e, t) {
    return St(e) ? e : tf(e, t) ? [e] : eO(rf(e))
}
function _o(e) {
    if (typeof e == "string" || Wr(e))
        return e;
    var t = e + "";
    return t == "0" && 1 / e == -1 / 0 ? "-0" : t
}
function Rs(e, t) {
    t = bo(t, e);
    for (var n = 0, r = t.length; e != null && n < r; )
        e = e[_o(t[n++])];
    return n && n == r ? e : void 0
}
function tO(e, t, n) {
    var r = e == null ? void 0 : Rs(e, t);
    return r === void 0 ? n : r
}
function hu(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; )
        e[i + n] = t[n];
    return e
}
var Eh = Nn ? Nn.isConcatSpreadable : void 0;
function nO(e) {
    return St(e) || so(e) || !!(Eh && e && e[Eh])
}
function Pi(e, t, n, r, i) {
    var o = -1
      , s = e.length;
    for (n || (n = nO),
    i || (i = []); ++o < s; ) {
        var u = e[o];
        n(u) ? hu(i, u) : r || (i[i.length] = u)
    }
    return i
}
function rO(e) {
    var t = e == null ? 0 : e.length;
    return t ? Pi(e) : []
}
function pg(e) {
    return Yc(sg(e, void 0, rO), e + "")
}
var of = dg(Object.getPrototypeOf, Object)
  , iO = "[object Object]"
  , oO = Function.prototype
  , sO = Object.prototype
  , mg = oO.toString
  , aO = sO.hasOwnProperty
  , uO = mg.call(Object);
function sf(e) {
    if (!sn(e) || qn(e) != iO)
        return !1;
    var t = of(e);
    if (t === null)
        return !0;
    var n = aO.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && mg.call(n) == uO
}
var lO = "[object DOMException]"
  , cO = "[object Error]";
function fO(e) {
    if (!sn(e))
        return !1;
    var t = qn(e);
    return t == cO || t == lO || typeof e.message == "string" && typeof e.name == "string" && !sf(e)
}
var LN = Gn(function(e, t) {
    try {
        return au(e, void 0, t)
    } catch (n) {
        return fO(n) ? n : new Error(n)
    }
})
  , dO = "Expected a function";
function hO(e, t) {
    var n;
    if (typeof t != "function")
        throw new TypeError(dO);
    return e = Hr(e),
    function() {
        return --e > 0 && (n = t.apply(this, arguments)),
        e <= 1 && (t = void 0),
        n
    }
}
var pO = 1
  , mO = 32
  , gg = Gn(function(e, t, n) {
    var r = pO;
    if (n.length) {
        var i = os(n, Xc(gg));
        r |= mO
    }
    return Pw(e, r, t, n, i)
});
gg.placeholder = {};
function af(e, t, n) {
    var r = -1
      , i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t),
    n = n > i ? i : n,
    n < 0 && (n += i),
    i = t > n ? 0 : n - t >>> 0,
    t >>>= 0;
    for (var o = Array(i); ++r < i; )
        o[r] = e[r + t];
    return o
}
var gO = Math.ceil
  , vO = Math.max;
function NN(e, t, n) {
    t === void 0 ? t = 1 : t = vO(Hr(t), 0);
    var r = e == null ? 0 : e.length;
    if (!r || t < 1)
        return [];
    for (var i = 0, o = 0, s = Array(gO(r / t)); i < r; )
        s[o++] = af(e, i, i += t);
    return s
}
function yO() {
    this.__data__ = new yr,
    this.size = 0
}
function bO(e) {
    var t = this.__data__
      , n = t.delete(e);
    return this.size = t.size,
    n
}
function _O(e) {
    return this.__data__.get(e)
}
function wO(e) {
    return this.__data__.has(e)
}
var EO = 200;
function OO(e, t) {
    var n = this.__data__;
    if (n instanceof yr) {
        var r = n.__data__;
        if (!as || r.length < EO - 1)
            return r.push([e, t]),
            this.size = ++n.size,
            this;
        n = this.__data__ = new br(r)
    }
    return n.set(e, t),
    this.size = n.size,
    this
}
function Un(e) {
    var t = this.__data__ = new yr(e);
    this.size = t.size
}
Un.prototype.clear = yO;
Un.prototype.delete = bO;
Un.prototype.get = _O;
Un.prototype.has = wO;
Un.prototype.set = OO;
function SO(e, t) {
    return e && yo(t, Qr(t), e)
}
function AO(e, t) {
    return e && yo(t, Ts(t), e)
}
var vg = typeof exports == "object" && exports && !exports.nodeType && exports
  , Oh = vg && typeof module == "object" && module && !module.nodeType && module
  , TO = Oh && Oh.exports === vg
  , Sh = TO ? an.Buffer : void 0
  , Ah = Sh ? Sh.allocUnsafe : void 0;
function yg(e, t) {
    if (t)
        return e.slice();
    var n = e.length
      , r = Ah ? Ah(n) : new e.constructor(n);
    return e.copy(r),
    r
}
function uf(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
        var s = e[n];
        t(s, n, e) && (o[i++] = s)
    }
    return o
}
function bg() {
    return []
}
var RO = Object.prototype
  , CO = RO.propertyIsEnumerable
  , Th = Object.getOwnPropertySymbols
  , lf = Th ? function(e) {
    return e == null ? [] : (e = Object(e),
    uf(Th(e), function(t) {
        return CO.call(e, t)
    }))
}
: bg;
function xO(e, t) {
    return yo(e, lf(e), t)
}
var PO = Object.getOwnPropertySymbols
  , _g = PO ? function(e) {
    for (var t = []; e; )
        hu(t, lf(e)),
        e = of(e);
    return t
}
: bg;
function IO(e, t) {
    return yo(e, _g(e), t)
}
function wg(e, t, n) {
    var r = t(e);
    return St(e) ? r : hu(r, n(e))
}
function Yl(e) {
    return wg(e, Qr, lf)
}
function cf(e) {
    return wg(e, Ts, _g)
}
var Jl = Ri(an, "DataView")
  , Xl = Ri(an, "Promise")
  , qi = Ri(an, "Set")
  , Rh = "[object Map]"
  , FO = "[object Object]"
  , Ch = "[object Promise]"
  , xh = "[object Set]"
  , Ph = "[object WeakMap]"
  , Ih = "[object DataView]"
  , LO = Ti(Jl)
  , NO = Ti(as)
  , MO = Ti(Xl)
  , kO = Ti(qi)
  , $O = Ti(rs)
  , En = qn;
(Jl && En(new Jl(new ArrayBuffer(1))) != Ih || as && En(new as) != Rh || Xl && En(Xl.resolve()) != Ch || qi && En(new qi) != xh || rs && En(new rs) != Ph) && (En = function(e) {
    var t = qn(e)
      , n = t == FO ? e.constructor : void 0
      , r = n ? Ti(n) : "";
    if (r)
        switch (r) {
        case LO:
            return Ih;
        case NO:
            return Rh;
        case MO:
            return Ch;
        case kO:
            return xh;
        case $O:
            return Ph
        }
    return t
}
);
var DO = Object.prototype
  , jO = DO.hasOwnProperty;
function BO(e) {
    var t = e.length
      , n = new e.constructor(t);
    return t && typeof e[0] == "string" && jO.call(e, "index") && (n.index = e.index,
    n.input = e.input),
    n
}
var Va = an.Uint8Array;
function ff(e) {
    var t = new e.constructor(e.byteLength);
    return new Va(t).set(new Va(e)),
    t
}
function VO(e, t) {
    var n = t ? ff(e.buffer) : e.buffer;
    return new e.constructor(n,e.byteOffset,e.byteLength)
}
var UO = /\w*$/;
function WO(e) {
    var t = new e.constructor(e.source,UO.exec(e));
    return t.lastIndex = e.lastIndex,
    t
}
var Fh = Nn ? Nn.prototype : void 0
  , Lh = Fh ? Fh.valueOf : void 0;
function HO(e) {
    return Lh ? Object(Lh.call(e)) : {}
}
function Eg(e, t) {
    var n = t ? ff(e.buffer) : e.buffer;
    return new e.constructor(n,e.byteOffset,e.length)
}
var KO = "[object Boolean]"
  , qO = "[object Date]"
  , GO = "[object Map]"
  , zO = "[object Number]"
  , YO = "[object RegExp]"
  , JO = "[object Set]"
  , XO = "[object String]"
  , QO = "[object Symbol]"
  , ZO = "[object ArrayBuffer]"
  , eS = "[object DataView]"
  , tS = "[object Float32Array]"
  , nS = "[object Float64Array]"
  , rS = "[object Int8Array]"
  , iS = "[object Int16Array]"
  , oS = "[object Int32Array]"
  , sS = "[object Uint8Array]"
  , aS = "[object Uint8ClampedArray]"
  , uS = "[object Uint16Array]"
  , lS = "[object Uint32Array]";
function cS(e, t, n) {
    var r = e.constructor;
    switch (t) {
    case ZO:
        return ff(e);
    case KO:
    case qO:
        return new r(+e);
    case eS:
        return VO(e, n);
    case tS:
    case nS:
    case rS:
    case iS:
    case oS:
    case sS:
    case aS:
    case uS:
    case lS:
        return Eg(e, n);
    case GO:
        return new r;
    case zO:
    case XO:
        return new r(e);
    case YO:
        return WO(e);
    case JO:
        return new r;
    case QO:
        return HO(e)
    }
}
function Og(e) {
    return typeof e.constructor == "function" && !lu(e) ? su(of(e)) : {}
}
var fS = "[object Map]";
function dS(e) {
    return sn(e) && En(e) == fS
}
var Nh = uo && uo.isMap
  , hS = Nh ? As(Nh) : dS
  , pS = "[object Set]";
function mS(e) {
    return sn(e) && En(e) == pS
}
var Mh = uo && uo.isSet
  , gS = Mh ? As(Mh) : mS
  , vS = 1
  , yS = 2
  , bS = 4
  , Sg = "[object Arguments]"
  , _S = "[object Array]"
  , wS = "[object Boolean]"
  , ES = "[object Date]"
  , OS = "[object Error]"
  , Ag = "[object Function]"
  , SS = "[object GeneratorFunction]"
  , AS = "[object Map]"
  , TS = "[object Number]"
  , Tg = "[object Object]"
  , RS = "[object RegExp]"
  , CS = "[object Set]"
  , xS = "[object String]"
  , PS = "[object Symbol]"
  , IS = "[object WeakMap]"
  , FS = "[object ArrayBuffer]"
  , LS = "[object DataView]"
  , NS = "[object Float32Array]"
  , MS = "[object Float64Array]"
  , kS = "[object Int8Array]"
  , $S = "[object Int16Array]"
  , DS = "[object Int32Array]"
  , jS = "[object Uint8Array]"
  , BS = "[object Uint8ClampedArray]"
  , VS = "[object Uint16Array]"
  , US = "[object Uint32Array]"
  , mt = {};
mt[Sg] = mt[_S] = mt[FS] = mt[LS] = mt[wS] = mt[ES] = mt[NS] = mt[MS] = mt[kS] = mt[$S] = mt[DS] = mt[AS] = mt[TS] = mt[Tg] = mt[RS] = mt[CS] = mt[xS] = mt[PS] = mt[jS] = mt[BS] = mt[VS] = mt[US] = !0;
mt[OS] = mt[Ag] = mt[IS] = !1;
function Gi(e, t, n, r, i, o) {
    var s, u = t & vS, c = t & yS, f = t & bS;
    if (n && (s = i ? n(e, r, i, o) : n(e)),
    s !== void 0)
        return s;
    if (!en(e))
        return e;
    var h = St(e);
    if (h) {
        if (s = BO(e),
        !u)
            return Ci(e, s)
    } else {
        var p = En(e)
          , g = p == Ag || p == SS;
        if (ao(e))
            return yg(e, u);
        if (p == Tg || p == Sg || g && !i) {
            if (s = c || g ? {} : Og(e),
            !u)
                return c ? IO(e, AO(s, e)) : xO(e, SO(s, e))
        } else {
            if (!mt[p])
                return i ? e : {};
            s = cS(e, p, u)
        }
    }
    o || (o = new Un);
    var y = o.get(e);
    if (y)
        return y;
    o.set(e, s),
    gS(e) ? e.forEach(function(F) {
        s.add(Gi(F, t, n, F, e, o))
    }) : hS(e) && e.forEach(function(F, T) {
        s.set(T, Gi(F, t, n, T, e, o))
    });
    var _ = f ? c ? cf : Yl : c ? Ts : Qr
      , R = h ? void 0 : _(e);
    return ng(R || e, function(F, T) {
        R && (T = F,
        F = e[T]),
        Zc(s, T, Gi(F, t, n, T, e, o))
    }),
    s
}
var WS = 4;
function MN(e) {
    return Gi(e, WS)
}
var HS = 1
  , KS = 4;
function kN(e) {
    return Gi(e, HS | KS)
}
function $N(e) {
    for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n; ) {
        var o = e[t];
        o && (i[r++] = o)
    }
    return i
}
function DN() {
    var e = arguments.length;
    if (!e)
        return [];
    for (var t = Array(e - 1), n = arguments[0], r = e; r--; )
        t[r - 1] = arguments[r];
    return hu(St(n) ? Ci(n) : [n], Pi(t))
}
var qS = "__lodash_hash_undefined__";
function GS(e) {
    return this.__data__.set(e, qS),
    this
}
function zS(e) {
    return this.__data__.has(e)
}
function bi(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.__data__ = new br; ++t < n; )
        this.add(e[t])
}
bi.prototype.add = bi.prototype.push = GS;
bi.prototype.has = zS;
function YS(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e))
            return !0;
    return !1
}
function us(e, t) {
    return e.has(t)
}
var JS = 1
  , XS = 2;
function Rg(e, t, n, r, i, o) {
    var s = n & JS
      , u = e.length
      , c = t.length;
    if (u != c && !(s && c > u))
        return !1;
    var f = o.get(e)
      , h = o.get(t);
    if (f && h)
        return f == t && h == e;
    var p = -1
      , g = !0
      , y = n & XS ? new bi : void 0;
    for (o.set(e, t),
    o.set(t, e); ++p < u; ) {
        var _ = e[p]
          , R = t[p];
        if (r)
            var F = s ? r(R, _, p, t, e, o) : r(_, R, p, e, t, o);
        if (F !== void 0) {
            if (F)
                continue;
            g = !1;
            break
        }
        if (y) {
            if (!YS(t, function(T, A) {
                if (!us(y, A) && (_ === T || i(_, T, n, r, o)))
                    return y.push(A)
            })) {
                g = !1;
                break
            }
        } else if (!(_ === R || i(_, R, n, r, o))) {
            g = !1;
            break
        }
    }
    return o.delete(e),
    o.delete(t),
    g
}
function Cg(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(r, i) {
        n[++t] = [i, r]
    }),
    n
}
function df(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(r) {
        n[++t] = r
    }),
    n
}
var QS = 1
  , ZS = 2
  , eA = "[object Boolean]"
  , tA = "[object Date]"
  , nA = "[object Error]"
  , rA = "[object Map]"
  , iA = "[object Number]"
  , oA = "[object RegExp]"
  , sA = "[object Set]"
  , aA = "[object String]"
  , uA = "[object Symbol]"
  , lA = "[object ArrayBuffer]"
  , cA = "[object DataView]"
  , kh = Nn ? Nn.prototype : void 0
  , Sl = kh ? kh.valueOf : void 0;
function fA(e, t, n, r, i, o, s) {
    switch (n) {
    case cA:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
        e = e.buffer,
        t = t.buffer;
    case lA:
        return !(e.byteLength != t.byteLength || !o(new Va(e), new Va(t)));
    case eA:
    case tA:
    case iA:
        return Ss(+e, +t);
    case nA:
        return e.name == t.name && e.message == t.message;
    case oA:
    case aA:
        return e == t + "";
    case rA:
        var u = Cg;
    case sA:
        var c = r & QS;
        if (u || (u = df),
        e.size != t.size && !c)
            return !1;
        var f = s.get(e);
        if (f)
            return f == t;
        r |= ZS,
        s.set(e, t);
        var h = Rg(u(e), u(t), r, i, o, s);
        return s.delete(e),
        h;
    case uA:
        if (Sl)
            return Sl.call(e) == Sl.call(t)
    }
    return !1
}
var dA = 1
  , hA = Object.prototype
  , pA = hA.hasOwnProperty;
function mA(e, t, n, r, i, o) {
    var s = n & dA
      , u = Yl(e)
      , c = u.length
      , f = Yl(t)
      , h = f.length;
    if (c != h && !s)
        return !1;
    for (var p = c; p--; ) {
        var g = u[p];
        if (!(s ? g in t : pA.call(t, g)))
            return !1
    }
    var y = o.get(e)
      , _ = o.get(t);
    if (y && _)
        return y == t && _ == e;
    var R = !0;
    o.set(e, t),
    o.set(t, e);
    for (var F = s; ++p < c; ) {
        g = u[p];
        var T = e[g]
          , A = t[g];
        if (r)
            var E = s ? r(A, T, g, t, e, o) : r(T, A, g, e, t, o);
        if (!(E === void 0 ? T === A || i(T, A, n, r, o) : E)) {
            R = !1;
            break
        }
        F || (F = g == "constructor")
    }
    if (R && !F) {
        var I = e.constructor
          , W = t.constructor;
        I != W && "constructor"in e && "constructor"in t && !(typeof I == "function" && I instanceof I && typeof W == "function" && W instanceof W) && (R = !1)
    }
    return o.delete(e),
    o.delete(t),
    R
}
var gA = 1
  , $h = "[object Arguments]"
  , Dh = "[object Array]"
  , fa = "[object Object]"
  , vA = Object.prototype
  , jh = vA.hasOwnProperty;
function yA(e, t, n, r, i, o) {
    var s = St(e)
      , u = St(t)
      , c = s ? Dh : En(e)
      , f = u ? Dh : En(t);
    c = c == $h ? fa : c,
    f = f == $h ? fa : f;
    var h = c == fa
      , p = f == fa
      , g = c == f;
    if (g && ao(e)) {
        if (!ao(t))
            return !1;
        s = !0,
        h = !1
    }
    if (g && !h)
        return o || (o = new Un),
        s || cu(e) ? Rg(e, t, n, r, i, o) : fA(e, t, c, n, r, i, o);
    if (!(n & gA)) {
        var y = h && jh.call(e, "__wrapped__")
          , _ = p && jh.call(t, "__wrapped__");
        if (y || _) {
            var R = y ? e.value() : e
              , F = _ ? t.value() : t;
            return o || (o = new Un),
            i(R, F, n, r, o)
        }
    }
    return g ? (o || (o = new Un),
    mA(e, t, n, r, i, o)) : !1
}
function pu(e, t, n, r, i) {
    return e === t ? !0 : e == null || t == null || !sn(e) && !sn(t) ? e !== e && t !== t : yA(e, t, n, r, pu, i)
}
var bA = 1
  , _A = 2;
function wA(e, t, n, r) {
    var i = n.length
      , o = i;
    if (e == null)
        return !o;
    for (e = Object(e); i--; ) {
        var s = n[i];
        if (s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
            return !1
    }
    for (; ++i < o; ) {
        s = n[i];
        var u = s[0]
          , c = e[u]
          , f = s[1];
        if (s[2]) {
            if (c === void 0 && !(u in e))
                return !1
        } else {
            var h = new Un, p;
            if (!(p === void 0 ? pu(f, c, bA | _A, r, h) : p))
                return !1
        }
    }
    return !0
}
function xg(e) {
    return e === e && !en(e)
}
function EA(e) {
    for (var t = Qr(e), n = t.length; n--; ) {
        var r = t[n]
          , i = e[r];
        t[n] = [r, i, xg(i)]
    }
    return t
}
function Pg(e, t) {
    return function(n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
    }
}
function OA(e) {
    var t = EA(e);
    return t.length == 1 && t[0][2] ? Pg(t[0][0], t[0][1]) : function(n) {
        return n === e || wA(n, e, t)
    }
}
function SA(e, t) {
    return e != null && t in Object(e)
}
function AA(e, t, n) {
    t = bo(t, e);
    for (var r = -1, i = t.length, o = !1; ++r < i; ) {
        var s = _o(t[r]);
        if (!(o = e != null && n(e, s)))
            break;
        e = e[s]
    }
    return o || ++r != i ? o : (i = e == null ? 0 : e.length,
    !!i && ef(i) && vo(s, i) && (St(e) || so(e)))
}
function Ig(e, t) {
    return e != null && AA(e, t, SA)
}
var TA = 1
  , RA = 2;
function CA(e, t) {
    return tf(e) && xg(t) ? Pg(_o(e), t) : function(n) {
        var r = tO(n, e);
        return r === void 0 && r === t ? Ig(n, e) : pu(t, r, TA | RA)
    }
}
function xA(e) {
    return function(t) {
        return t == null ? void 0 : t[e]
    }
}
function PA(e) {
    return function(t) {
        return Rs(t, e)
    }
}
function IA(e) {
    return tf(e) ? xA(_o(e)) : PA(e)
}
function Cn(e) {
    return typeof e == "function" ? e : e == null ? Ai : typeof e == "object" ? St(e) ? CA(e[0], e[1]) : OA(e) : IA(e)
}
function FA(e, t, n, r) {
    for (var i = -1, o = e == null ? 0 : e.length; ++i < o; ) {
        var s = e[i];
        t(r, s, n(s), e)
    }
    return r
}
function LA(e) {
    return function(t, n, r) {
        for (var i = -1, o = Object(t), s = r(t), u = s.length; u--; ) {
            var c = s[++i];
            if (n(o[c], c, o) === !1)
                break
        }
        return t
    }
}
var Fg = LA();
function mu(e, t) {
    return e && Fg(e, t, Qr)
}
function NA(e, t) {
    return function(n, r) {
        if (n == null)
            return n;
        if (!vr(n))
            return e(n, r);
        for (var i = n.length, o = -1, s = Object(n); ++o < i && r(s[o], o, s) !== !1; )
            ;
        return n
    }
}
var Lg = NA(mu);
function MA(e, t, n, r) {
    return Lg(e, function(i, o, s) {
        t(r, i, n(i), s)
    }),
    r
}
function Ng(e, t) {
    return function(n, r) {
        var i = St(n) ? FA : MA
          , o = {};
        return i(n, e, Cn(r), o)
    }
}
var Al = function() {
    return an.Date.now()
}
  , kA = "Expected a function"
  , $A = Math.max
  , DA = Math.min;
function jA(e, t, n) {
    var r, i, o, s, u, c, f = 0, h = !1, p = !1, g = !0;
    if (typeof e != "function")
        throw new TypeError(kA);
    t = Gl(t) || 0,
    en(n) && (h = !!n.leading,
    p = "maxWait"in n,
    o = p ? $A(Gl(n.maxWait) || 0, t) : o,
    g = "trailing"in n ? !!n.trailing : g);
    function y($) {
        var U = r
          , Z = i;
        return r = i = void 0,
        f = $,
        s = e.apply(Z, U),
        s
    }
    function _($) {
        return f = $,
        u = setTimeout(T, t),
        h ? y($) : s
    }
    function R($) {
        var U = $ - c
          , Z = $ - f
          , j = t - U;
        return p ? DA(j, o - Z) : j
    }
    function F($) {
        var U = $ - c
          , Z = $ - f;
        return c === void 0 || U >= t || U < 0 || p && Z >= o
    }
    function T() {
        var $ = Al();
        if (F($))
            return A($);
        u = setTimeout(T, R($))
    }
    function A($) {
        return u = void 0,
        g && r ? y($) : (r = i = void 0,
        s)
    }
    function E() {
        u !== void 0 && clearTimeout(u),
        f = 0,
        r = c = i = u = void 0
    }
    function I() {
        return u === void 0 ? s : A(Al())
    }
    function W() {
        var $ = Al()
          , U = F($);
        if (r = arguments,
        i = this,
        c = $,
        U) {
            if (u === void 0)
                return _(c);
            if (p)
                return clearTimeout(u),
                u = setTimeout(T, t),
                y(c)
        }
        return u === void 0 && (u = setTimeout(T, t)),
        s
    }
    return W.cancel = E,
    W.flush = I,
    W
}
function Ql(e, t, n) {
    (n !== void 0 && !Ss(e[t], n) || n === void 0 && !(t in e)) && xi(e, t, n)
}
function Kr(e) {
    return sn(e) && vr(e)
}
function Zl(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
        return e[t]
}
function BA(e) {
    return yo(e, Ts(e))
}
function VA(e, t, n, r, i, o, s) {
    var u = Zl(e, n)
      , c = Zl(t, n)
      , f = s.get(c);
    if (f) {
        Ql(e, n, f);
        return
    }
    var h = o ? o(u, c, n + "", e, t, s) : void 0
      , p = h === void 0;
    if (p) {
        var g = St(c)
          , y = !g && ao(c)
          , _ = !g && !y && cu(c);
        h = c,
        g || y || _ ? St(u) ? h = u : Kr(u) ? h = Ci(u) : y ? (p = !1,
        h = yg(c, !0)) : _ ? (p = !1,
        h = Eg(c, !0)) : h = [] : sf(c) || so(c) ? (h = u,
        so(u) ? h = BA(u) : (!en(u) || Gc(u)) && (h = Og(c))) : p = !1
    }
    p && (s.set(c, h),
    i(h, c, r, o, s),
    s.delete(c)),
    Ql(e, n, h)
}
function hf(e, t, n, r, i) {
    e !== t && Fg(t, function(o, s) {
        if (i || (i = new Un),
        en(o))
            VA(e, t, s, n, hf, r, i);
        else {
            var u = r ? r(Zl(e, s), o, s + "", e, t, i) : void 0;
            u === void 0 && (u = o),
            Ql(e, s, u)
        }
    }, Ts)
}
var jN = ag(function(e, t, n, r) {
    hf(e, t, n, r)
});
function Mg(e, t, n) {
    for (var r = -1, i = e == null ? 0 : e.length; ++r < i; )
        if (n(t, e[r]))
            return !0;
    return !1
}
var UA = 200;
function pf(e, t, n, r) {
    var i = -1
      , o = uu
      , s = !0
      , u = e.length
      , c = []
      , f = t.length;
    if (!u)
        return c;
    r ? (o = Mg,
    s = !1) : t.length >= UA && (o = us,
    s = !1,
    t = new bi(t));
    e: for (; ++i < u; ) {
        var h = e[i]
          , p = h;
        if (h = r || h !== 0 ? h : 0,
        s && p === p) {
            for (var g = f; g--; )
                if (t[g] === p)
                    continue e;
            c.push(h)
        } else
            o(t, p, r) || c.push(h)
    }
    return c
}
var BN = Gn(function(e, t) {
    return Kr(e) ? pf(e, Pi(t, 1, Kr, !0)) : []
});
function Ua(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}
var VN = qc(function(e, t) {
    return e / t
}, 1);
function WA(e) {
    return typeof e == "function" ? e : Ai
}
function HA(e, t) {
    return Vn(t, function(n) {
        return [n, e[n]]
    })
}
function KA(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(r) {
        n[++t] = [r, r]
    }),
    n
}
var qA = "[object Map]"
  , GA = "[object Set]";
function zA(e) {
    return function(t) {
        var n = En(t);
        return n == qA ? Cg(t) : n == GA ? KA(t) : HA(t, e(t))
    }
}
var UN = zA(Qr);
function YA(e) {
    return function(t, n, r) {
        var i = Object(t);
        if (!vr(t)) {
            var o = Cn(n);
            t = Qr(t),
            n = function(u) {
                return o(i[u], u, i)
            }
        }
        var s = e(t, n, r);
        return s > -1 ? i[o ? t[s] : s] : void 0
    }
}
var JA = Math.max;
function XA(e, t, n) {
    var r = e == null ? 0 : e.length;
    if (!r)
        return -1;
    var i = n == null ? 0 : Hr(n);
    return i < 0 && (i = JA(r + i, 0)),
    rg(e, Cn(t), i)
}
var WN = YA(XA);
function HN(e) {
    return e && e.length ? e[0] : void 0
}
function kg(e, t) {
    var n = -1
      , r = vr(e) ? Array(e.length) : [];
    return Lg(e, function(i, o, s) {
        r[++n] = t(i, o, s)
    }),
    r
}
function QA(e, t) {
    var n = St(e) ? Vn : kg;
    return n(e, Cn(t))
}
function KN(e, t) {
    return Pi(QA(e, t))
}
function qN(e, t) {
    return e && mu(e, WA(t))
}
var ZA = Object.prototype
  , eT = ZA.hasOwnProperty
  , GN = Ng(function(e, t, n) {
    eT.call(e, n) ? e[n].push(t) : xi(e, n, [t])
});
function tT(e, t) {
    return e > t
}
var nT = "[object String]";
function rT(e) {
    return typeof e == "string" || !St(e) && sn(e) && qn(e) == nT
}
function iT(e, t) {
    return Vn(t, function(n) {
        return e[n]
    })
}
function mf(e) {
    return e == null ? [] : iT(e, Qr(e))
}
var oT = Math.max;
function zN(e, t, n, r) {
    e = vr(e) ? e : mf(e),
    n = n ? Hr(n) : 0;
    var i = e.length;
    return n < 0 && (n = oT(i + n, 0)),
    rT(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Jc(e, t, n) > -1
}
var sT = Math.min;
function aT(e, t, n) {
    for (var r = uu, i = e[0].length, o = e.length, s = o, u = Array(o), c = 1 / 0, f = []; s--; ) {
        var h = e[s];
        s && t && (h = Vn(h, As(t))),
        c = sT(h.length, c),
        u[s] = t || i >= 120 && h.length >= 120 ? new bi(s && h) : void 0
    }
    h = e[0];
    var p = -1
      , g = u[0];
    e: for (; ++p < i && f.length < c; ) {
        var y = h[p]
          , _ = t ? t(y) : y;
        if (y = y !== 0 ? y : 0,
        !(g ? us(g, _) : r(f, _))) {
            for (s = o; --s; ) {
                var R = u[s];
                if (!(R ? us(R, _) : r(e[s], _)))
                    continue e
            }
            g && g.push(_),
            f.push(y)
        }
    }
    return f
}
function uT(e) {
    return Kr(e) ? e : []
}
var YN = Gn(function(e) {
    var t = Ua(e)
      , n = Vn(e, uT);
    return t === Ua(n) ? t = void 0 : n.pop(),
    n.length && n[0] === e[0] ? aT(n, Cn(t)) : []
});
function lT(e, t) {
    return t.length < 2 ? e : Rs(e, af(t, 0, -1))
}
var cT = "[object Boolean]";
function JN(e) {
    return e === !0 || e === !1 || sn(e) && qn(e) == cT
}
var fT = "[object Map]"
  , dT = "[object Set]"
  , hT = Object.prototype
  , pT = hT.hasOwnProperty;
function XN(e) {
    if (e == null)
        return !0;
    if (vr(e) && (St(e) || typeof e == "string" || typeof e.splice == "function" || ao(e) || cu(e) || so(e)))
        return !e.length;
    var t = En(e);
    if (t == fT || t == dT)
        return !e.size;
    if (lu(e))
        return !hg(e).length;
    for (var n in e)
        if (pT.call(e, n))
            return !1;
    return !0
}
function QN(e, t) {
    return pu(e, t)
}
var mT = "[object Number]";
function ZN(e) {
    return typeof e == "number" || sn(e) && qn(e) == mT
}
function eM(e) {
    return e == null
}
function tM(e) {
    return e === null
}
function nM(e) {
    return e === void 0
}
var rM = Ng(function(e, t, n) {
    xi(e, n, t)
});
function iM(e, t) {
    var n = {};
    return t = Cn(t),
    mu(e, function(r, i, o) {
        xi(n, t(r, i, o), r)
    }),
    n
}
function oM(e, t) {
    var n = {};
    return t = Cn(t),
    mu(e, function(r, i, o) {
        xi(n, i, t(r, i, o))
    }),
    n
}
function gT(e, t, n) {
    for (var r = -1, i = e.length; ++r < i; ) {
        var o = e[r]
          , s = t(o);
        if (s != null && (u === void 0 ? s === s && !Wr(s) : n(s, u)))
            var u = s
              , c = o
    }
    return c
}
function sM(e, t) {
    return e && e.length ? gT(e, Cn(t), tT) : void 0
}
function vT(e, t) {
    for (var n, r = -1, i = e.length; ++r < i; ) {
        var o = t(e[r]);
        o !== void 0 && (n = n === void 0 ? o : n + o)
    }
    return n
}
var aM = ag(function(e, t, n) {
    hf(e, t, n)
})
  , uM = qc(function(e, t) {
    return e * t
}, 1)
  , yT = "Expected a function";
function bT(e) {
    if (typeof e != "function")
        throw new TypeError(yT);
    return function() {
        var t = arguments;
        switch (t.length) {
        case 0:
            return !e.call(this);
        case 1:
            return !e.call(this, t[0]);
        case 2:
            return !e.call(this, t[0], t[1]);
        case 3:
            return !e.call(this, t[0], t[1], t[2])
        }
        return !e.apply(this, t)
    }
}
function $g(e, t) {
    return t = bo(t, e),
    e = lT(e, t),
    e == null || delete e[_o(Ua(t))]
}
function _T(e) {
    return sf(e) ? void 0 : e
}
var wT = 1
  , ET = 2
  , OT = 4
  , lM = pg(function(e, t) {
    var n = {};
    if (e == null)
        return n;
    var r = !1;
    t = Vn(t, function(o) {
        return o = bo(o, e),
        r || (r = o.length > 1),
        o
    }),
    yo(e, cf(e), n),
    r && (n = Gi(n, wT | ET | OT, _T));
    for (var i = t.length; i--; )
        $g(n, t[i]);
    return n
});
function Dg(e, t, n, r) {
    if (!en(e))
        return e;
    t = bo(t, e);
    for (var i = -1, o = t.length, s = o - 1, u = e; u != null && ++i < o; ) {
        var c = _o(t[i])
          , f = n;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
            return e;
        if (i != s) {
            var h = u[c];
            f = void 0,
            f === void 0 && (f = en(h) ? h : vo(t[i + 1]) ? [] : {})
        }
        Zc(u, c, f),
        u = u[c]
    }
    return e
}
function jg(e, t, n) {
    for (var r = -1, i = t.length, o = {}; ++r < i; ) {
        var s = t[r]
          , u = Rs(e, s);
        n(u, s) && Dg(o, bo(s, e), u)
    }
    return o
}
function ST(e, t) {
    if (e == null)
        return {};
    var n = Vn(cf(e), function(r) {
        return [r]
    });
    return t = Cn(t),
    jg(e, n, function(r, i) {
        return t(r, i[0])
    })
}
function cM(e, t) {
    return ST(e, bT(Cn(t)))
}
function fM(e) {
    return hO(2, e)
}
function AT(e, t) {
    var n = e.length;
    for (e.sort(t); n--; )
        e[n] = e[n].value;
    return e
}
function TT(e, t) {
    if (e !== t) {
        var n = e !== void 0
          , r = e === null
          , i = e === e
          , o = Wr(e)
          , s = t !== void 0
          , u = t === null
          , c = t === t
          , f = Wr(t);
        if (!u && !f && !o && e > t || o && s && c && !u && !f || r && s && c || !n && c || !i)
            return 1;
        if (!r && !o && !f && e < t || f && n && i && !r && !o || u && n && i || !s && i || !c)
            return -1
    }
    return 0
}
function RT(e, t, n) {
    for (var r = -1, i = e.criteria, o = t.criteria, s = i.length, u = n.length; ++r < s; ) {
        var c = TT(i[r], o[r]);
        if (c) {
            if (r >= u)
                return c;
            var f = n[r];
            return c * (f == "desc" ? -1 : 1)
        }
    }
    return e.index - t.index
}
function Bg(e, t, n) {
    t.length ? t = Vn(t, function(o) {
        return St(o) ? function(s) {
            return Rs(s, o.length === 1 ? o[0] : o)
        }
        : o
    }) : t = [Ai];
    var r = -1;
    t = Vn(t, As(Cn));
    var i = kg(e, function(o, s, u) {
        var c = Vn(t, function(f) {
            return f(o)
        });
        return {
            criteria: c,
            index: ++r,
            value: o
        }
    });
    return AT(i, function(o, s) {
        return RT(o, s, n)
    })
}
function dM(e, t, n, r) {
    return e == null ? [] : (St(t) || (t = t == null ? [] : [t]),
    n = n,
    St(n) || (n = n == null ? [] : [n]),
    Bg(e, t, n))
}
var CT = 9007199254740991
  , xT = Math.floor;
function PT(e, t) {
    var n = "";
    if (!e || t < 1 || t > CT)
        return n;
    do
        t % 2 && (n += e),
        t = xT(t / 2),
        t && (e += e);
    while (t);
    return n
}
function IT(e, t) {
    return jg(e, t, function(n, r) {
        return Ig(e, r)
    })
}
var hM = pg(function(e, t) {
    return e == null ? {} : IT(e, t)
})
  , FT = Array.prototype
  , Bh = FT.splice;
function LT(e, t, n, r) {
    var i = Jc
      , o = -1
      , s = t.length
      , u = e;
    for (e === t && (t = Ci(t)); ++o < s; )
        for (var c = 0, f = t[o], h = f; (c = i(u, h, c)) > -1; )
            u !== e && Bh.call(u, c, 1),
            Bh.call(e, c, 1);
    return e
}
function NT(e, t) {
    return e && e.length && t && t.length ? LT(e, t) : e
}
var pM = Gn(NT)
  , MT = Array.prototype
  , kT = MT.splice;
function $T(e, t) {
    for (var n = e ? t.length : 0, r = n - 1; n--; ) {
        var i = t[n];
        if (n == r || i !== o) {
            var o = i;
            vo(i) ? kT.call(e, i, 1) : $g(e, i)
        }
    }
    return e
}
var DT = Math.floor
  , jT = Math.random;
function gf(e, t) {
    return e + DT(jT() * (t - e + 1))
}
var BT = parseFloat
  , VT = Math.min
  , UT = Math.random;
function mM(e, t, n) {
    if (n && typeof n != "boolean" && Ba(e, t, n) && (t = n = void 0),
    n === void 0 && (typeof t == "boolean" ? (n = t,
    t = void 0) : typeof e == "boolean" && (n = e,
    e = void 0)),
    e === void 0 && t === void 0 ? (e = 0,
    t = 1) : (e = zl(e),
    t === void 0 ? (t = e,
    e = 0) : t = zl(t)),
    e > t) {
        var r = e;
        e = t,
        t = r
    }
    if (n || e % 1 || t % 1) {
        var i = UT();
        return VT(e + i * (t - e + BT("1e-" + ((i + "").length - 1))), t)
    }
    return gf(e, t)
}
function gM(e, t) {
    var n = [];
    if (!(e && e.length))
        return n;
    var r = -1
      , i = []
      , o = e.length;
    for (t = Cn(t); ++r < o; ) {
        var s = e[r];
        t(s, r, e) && (n.push(s),
        i.push(r))
    }
    return $T(e, i),
    n
}
function vM(e, t, n) {
    return t === void 0 ? t = 1 : t = Hr(t),
    PT(rf(e), t)
}
function Vg(e) {
    var t = e.length;
    return t ? e[gf(0, t - 1)] : void 0
}
function WT(e) {
    return Vg(mf(e))
}
function yM(e) {
    var t = St(e) ? Vg : WT;
    return t(e)
}
function Ug(e, t) {
    var n = -1
      , r = e.length
      , i = r - 1;
    for (t = t === void 0 ? r : t; ++n < t; ) {
        var o = gf(n, i)
          , s = e[o];
        e[o] = e[n],
        e[n] = s
    }
    return e.length = t,
    e
}
function bM(e, t, n) {
    return e == null ? e : Dg(e, t, n)
}
function HT(e) {
    return Ug(Ci(e))
}
function KT(e) {
    return Ug(mf(e))
}
function _M(e) {
    var t = St(e) ? HT : KT;
    return t(e)
}
var wM = Gn(function(e, t) {
    if (e == null)
        return [];
    var n = t.length;
    return n > 1 && Ba(e, t[0], t[1]) ? t = [] : n > 2 && Ba(t[0], t[1], t[2]) && (t = [t[0]]),
    Bg(e, Pi(t), [])
});
function EM(e) {
    return e && e.length ? vT(e, Ai) : 0
}
function OM(e, t, n) {
    return e && e.length ? (t = t === void 0 ? 1 : Hr(t),
    af(e, 0, t < 0 ? 0 : t)) : []
}
var qT = "Expected a function";
function SM(e, t, n) {
    var r = !0
      , i = !0;
    if (typeof e != "function")
        throw new TypeError(qT);
    return en(n) && (r = "leading"in n ? !!n.leading : r,
    i = "trailing"in n ? !!n.trailing : i),
    jA(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}
var GT = 1 / 0
  , zT = qi && 1 / df(new qi([, -0]))[1] == GT ? function(e) {
    return new qi(e)
}
: Qm
  , YT = 200;
function ls(e, t, n) {
    var r = -1
      , i = uu
      , o = e.length
      , s = !0
      , u = []
      , c = u;
    if (n)
        s = !1,
        i = Mg;
    else if (o >= YT) {
        var f = t ? null : zT(e);
        if (f)
            return df(f);
        s = !1,
        i = us,
        c = new bi
    } else
        c = t ? [] : u;
    e: for (; ++r < o; ) {
        var h = e[r]
          , p = t ? t(h) : h;
        if (h = n || h !== 0 ? h : 0,
        s && p === p) {
            for (var g = c.length; g--; )
                if (c[g] === p)
                    continue e;
            t && c.push(p),
            u.push(h)
        } else
            i(c, p, n) || (c !== u && c.push(p),
            u.push(h))
    }
    return u
}
var AM = Gn(function(e) {
    return ls(Pi(e, 1, Kr, !0))
});
function TM(e) {
    return e && e.length ? ls(e) : []
}
function RM(e, t) {
    return e && e.length ? ls(e, Cn(t)) : []
}
var JT = 0;
function CM(e) {
    var t = ++JT;
    return rf(e) + t
}
var xM = Gn(function(e, t) {
    return Kr(e) ? pf(e, t) : []
});
function Wg(e, t, n) {
    var r = e.length;
    if (r < 2)
        return r ? ls(e[0]) : [];
    for (var i = -1, o = Array(r); ++i < r; )
        for (var s = e[i], u = -1; ++u < r; )
            u != i && (o[i] = pf(o[i] || s, e[u], t, n));
    return ls(Pi(o), t, n)
}
var PM = Gn(function(e) {
    return Wg(uf(e, Kr))
})
  , IM = Gn(function(e) {
    var t = Ua(e);
    return t = typeof t == "function" ? t : void 0,
    Wg(uf(e, Kr), void 0, t)
});
/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function gu(e, t) {
    const n = new Set(e.split(","));
    return r => n.has(r)
}
const ct = {}
  , zi = []
  , pn = () => {}
  , XT = () => !1
  , Cs = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , vf = e => e.startsWith("onUpdate:")
  , _t = Object.assign
  , yf = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , QT = Object.prototype.hasOwnProperty
  , nt = (e, t) => QT.call(e, t)
  , Le = Array.isArray
  , Yi = e => wo(e) === "[object Map]"
  , Ii = e => wo(e) === "[object Set]"
  , Vh = e => wo(e) === "[object Date]"
  , ZT = e => wo(e) === "[object RegExp]"
  , We = e => typeof e == "function"
  , At = e => typeof e == "string"
  , er = e => typeof e == "symbol"
  , ft = e => e !== null && typeof e == "object"
  , bf = e => (ft(e) || We(e)) && We(e.then) && We(e.catch)
  , Hg = Object.prototype.toString
  , wo = e => Hg.call(e)
  , e1 = e => wo(e).slice(8, -1)
  , Kg = e => wo(e) === "[object Object]"
  , _f = e => At(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Ji = gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , vu = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , t1 = /-(\w)/g
  , rn = vu(e => e.replace(t1, (t, n) => n ? n.toUpperCase() : ""))
  , n1 = /\B([A-Z])/g
  , Sn = vu(e => e.replace(n1, "-$1").toLowerCase())
  , xs = vu(e => e.charAt(0).toUpperCase() + e.slice(1))
  , Yo = vu(e => e ? `on${xs(e)}` : "")
  , Hn = (e, t) => !Object.is(e, t)
  , Xi = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , qg = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , Wa = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Ha = e => {
    const t = At(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Uh;
const Gg = () => Uh || (Uh = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {})
  , r1 = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error"
  , i1 = gu(r1);
function Ps(e) {
    if (Le(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = At(r) ? u1(r) : Ps(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (At(e) || ft(e))
        return e
}
const o1 = /;(?![^(]*\))/g
  , s1 = /:([^]+)/
  , a1 = /\/\*[^]*?\*\//g;
function u1(e) {
    const t = {};
    return e.replace(a1, "").split(o1).forEach(n => {
        if (n) {
            const r = n.split(s1);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function Is(e) {
    let t = "";
    if (At(e))
        t = e;
    else if (Le(e))
        for (let n = 0; n < e.length; n++) {
            const r = Is(e[n]);
            r && (t += r + " ")
        }
    else if (ft(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function l1(e) {
    if (!e)
        return null;
    let {class: t, style: n} = e;
    return t && !At(t) && (e.class = Is(t)),
    n && (e.style = Ps(n)),
    e
}
const c1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , f1 = gu(c1);
function zg(e) {
    return !!e || e === ""
}
function d1(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = qr(e[r], t[r]);
    return n
}
function qr(e, t) {
    if (e === t)
        return !0;
    let n = Vh(e)
      , r = Vh(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = er(e),
    r = er(t),
    n || r)
        return e === t;
    if (n = Le(e),
    r = Le(t),
    n || r)
        return n && r ? d1(e, t) : !1;
    if (n = ft(e),
    r = ft(t),
    n || r) {
        if (!n || !r)
            return !1;
        const i = Object.keys(e).length
          , o = Object.keys(t).length;
        if (i !== o)
            return !1;
        for (const s in e) {
            const u = e.hasOwnProperty(s)
              , c = t.hasOwnProperty(s);
            if (u && !c || !u && c || !qr(e[s], t[s]))
                return !1
        }
    }
    return String(e) === String(t)
}
function yu(e, t) {
    return e.findIndex(n => qr(n, t))
}
const Yg = e => !!(e && e.__v_isRef === !0)
  , Jg = e => At(e) ? e : e == null ? "" : Le(e) || ft(e) && (e.toString === Hg || !We(e.toString)) ? Yg(e) ? Jg(e.value) : JSON.stringify(e, Xg, 2) : String(e)
  , Xg = (e, t) => Yg(t) ? Xg(e, t.value) : Yi(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,i], o) => (n[Tl(r, o) + " =>"] = i,
    n), {})
} : Ii(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Tl(n))
} : er(t) ? Tl(t) : ft(t) && !Le(t) && !Kg(t) ? String(t) : t
  , Tl = (e, t="") => {
    var n;
    return er(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _n;
class wf {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = _n,
        !t && _n && (this.index = (_n.scopes || (_n.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = _n;
            try {
                return _n = this,
                t()
            } finally {
                _n = n
            }
        }
    }
    on() {
        _n = this
    }
    off() {
        _n = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i,
                i.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function bu(e) {
    return new wf(e)
}
function Qg(e, t=_n) {
    t && t.active && t.effects.push(e)
}
function _u() {
    return _n
}
function wu(e) {
    _n && _n.cleanups.push(e)
}
let di;
class lo {
    constructor(t, n, r, i) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = r,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        Qg(this, i)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Zr();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (h1(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            ei()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = Ur
          , n = di;
        try {
            return Ur = !0,
            di = this,
            this._runnings++,
            Wh(this),
            this.fn()
        } finally {
            Hh(this),
            this._runnings--,
            di = n,
            Ur = t
        }
    }
    stop() {
        this.active && (Wh(this),
        Hh(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function h1(e) {
    return e.value
}
function Wh(e) {
    e._trackId++,
    e._depsLength = 0
}
function Hh(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            Zg(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function Zg(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
function p1(e, t) {
    e.effect instanceof lo && (e = e.effect.fn);
    const n = new lo(e,pn, () => {
        n.dirty && n.run()
    }
    );
    t && (_t(n, t),
    t.scope && Qg(n, t.scope)),
    (!t || !t.lazy) && n.run();
    const r = n.run.bind(n);
    return r.effect = n,
    r
}
function m1(e) {
    e.effect.stop()
}
let Ur = !0
  , ec = 0;
const ev = [];
function Zr() {
    ev.push(Ur),
    Ur = !1
}
function ei() {
    const e = ev.pop();
    Ur = e === void 0 ? !0 : e
}
function Ef() {
    ec++
}
function Of() {
    for (ec--; !ec && tc.length; )
        tc.shift()()
}
function tv(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const r = e.deps[e._depsLength];
        r !== t ? (r && Zg(r, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const tc = [];
function nv(e, t, n) {
    Ef();
    for (const r of e.keys()) {
        let i;
        r._dirtyLevel < t && (i != null ? i : i = e.get(r) === r._trackId) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
        r._dirtyLevel = t),
        r._shouldSchedule && (i != null ? i : i = e.get(r) === r._trackId) && (r.trigger(),
        (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1,
        r.scheduler && tc.push(r.scheduler)))
    }
    Of()
}
const rv = (e, t) => {
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , Ka = new WeakMap
  , hi = Symbol("")
  , nc = Symbol("");
function vn(e, t, n) {
    if (Ur && di) {
        let r = Ka.get(e);
        r || Ka.set(e, r = new Map);
        let i = r.get(n);
        i || r.set(n, i = rv( () => r.delete(n))),
        tv(di, i)
    }
}
function hr(e, t, n, r, i, o) {
    const s = Ka.get(e);
    if (!s)
        return;
    let u = [];
    if (t === "clear")
        u = [...s.values()];
    else if (n === "length" && Le(e)) {
        const c = Number(r);
        s.forEach( (f, h) => {
            (h === "length" || !er(h) && h >= c) && u.push(f)
        }
        )
    } else
        switch (n !== void 0 && u.push(s.get(n)),
        t) {
        case "add":
            Le(e) ? _f(n) && u.push(s.get("length")) : (u.push(s.get(hi)),
            Yi(e) && u.push(s.get(nc)));
            break;
        case "delete":
            Le(e) || (u.push(s.get(hi)),
            Yi(e) && u.push(s.get(nc)));
            break;
        case "set":
            Yi(e) && u.push(s.get(hi));
            break
        }
    Ef();
    for (const c of u)
        c && nv(c, 4);
    Of()
}
function g1(e, t) {
    const n = Ka.get(e);
    return n && n.get(t)
}
const v1 = gu("__proto__,__v_isRef,__isVue")
  , iv = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(er))
  , Kh = y1();
function y1() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = et(this);
            for (let o = 0, s = this.length; o < s; o++)
                vn(r, "get", o + "");
            const i = r[t](...n);
            return i === -1 || i === !1 ? r[t](...n.map(et)) : i
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            Zr(),
            Ef();
            const r = et(this)[t].apply(this, n);
            return Of(),
            ei(),
            r
        }
    }
    ),
    e
}
function b1(e) {
    er(e) || (e = String(e));
    const t = et(this);
    return vn(t, "has", e),
    t.hasOwnProperty(e)
}
class ov {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        const i = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !i;
        if (n === "__v_isReadonly")
            return i;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return r === (i ? o ? fv : cv : o ? lv : uv).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = Le(t);
        if (!i) {
            if (s && nt(Kh, n))
                return Reflect.get(Kh, n, r);
            if (n === "hasOwnProperty")
                return b1
        }
        const u = Reflect.get(t, n, r);
        return (er(n) ? iv.has(n) : v1(n)) || (i || vn(t, "get", n),
        o) ? u : at(u) ? s && _f(n) ? u : u.value : ft(u) ? i ? Eo(u) : yn(u) : u
    }
}
class sv extends ov {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, i) {
        let o = t[n];
        if (!this._isShallow) {
            const c = co(o);
            if (!cs(r) && !co(r) && (o = et(o),
            r = et(r)),
            !Le(t) && at(o) && !at(r))
                return c ? !1 : (o.value = r,
                !0)
        }
        const s = Le(t) && _f(n) ? Number(n) < t.length : nt(t, n)
          , u = Reflect.set(t, n, r, i);
        return t === et(i) && (s ? Hn(r, o) && hr(t, "set", n, r) : hr(t, "add", n, r)),
        u
    }
    deleteProperty(t, n) {
        const r = nt(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && r && hr(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!er(n) || !iv.has(n)) && vn(t, "has", n),
        r
    }
    ownKeys(t) {
        return vn(t, "iterate", Le(t) ? "length" : hi),
        Reflect.ownKeys(t)
    }
}
class av extends ov {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const _1 = new sv
  , w1 = new av
  , E1 = new sv(!0)
  , O1 = new av(!0)
  , Sf = e => e
  , Eu = e => Reflect.getPrototypeOf(e);
function da(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const i = et(e)
      , o = et(t);
    n || (Hn(t, o) && vn(i, "get", t),
    vn(i, "get", o));
    const {has: s} = Eu(i)
      , u = r ? Sf : n ? Rf : fs;
    if (s.call(i, t))
        return u(e.get(t));
    if (s.call(i, o))
        return u(e.get(o));
    e !== i && e.get(t)
}
function ha(e, t=!1) {
    const n = this.__v_raw
      , r = et(n)
      , i = et(e);
    return t || (Hn(e, i) && vn(r, "has", e),
    vn(r, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
}
function pa(e, t=!1) {
    return e = e.__v_raw,
    !t && vn(et(e), "iterate", hi),
    Reflect.get(e, "size", e)
}
function qh(e) {
    e = et(e);
    const t = et(this);
    return Eu(t).has.call(t, e) || (t.add(e),
    hr(t, "add", e, e)),
    this
}
function Gh(e, t) {
    t = et(t);
    const n = et(this)
      , {has: r, get: i} = Eu(n);
    let o = r.call(n, e);
    o || (e = et(e),
    o = r.call(n, e));
    const s = i.call(n, e);
    return n.set(e, t),
    o ? Hn(t, s) && hr(n, "set", e, t) : hr(n, "add", e, t),
    this
}
function zh(e) {
    const t = et(this)
      , {has: n, get: r} = Eu(t);
    let i = n.call(t, e);
    i || (e = et(e),
    i = n.call(t, e)),
    r && r.call(t, e);
    const o = t.delete(e);
    return i && hr(t, "delete", e, void 0),
    o
}
function Yh() {
    const e = et(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && hr(e, "clear", void 0, void 0),
    n
}
function ma(e, t) {
    return function(r, i) {
        const o = this
          , s = o.__v_raw
          , u = et(s)
          , c = t ? Sf : e ? Rf : fs;
        return !e && vn(u, "iterate", hi),
        s.forEach( (f, h) => r.call(i, c(f), c(h), o))
    }
}
function ga(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , o = et(i)
          , s = Yi(o)
          , u = e === "entries" || e === Symbol.iterator && s
          , c = e === "keys" && s
          , f = i[e](...r)
          , h = n ? Sf : t ? Rf : fs;
        return !t && vn(o, "iterate", c ? nc : hi),
        {
            next() {
                const {value: p, done: g} = f.next();
                return g ? {
                    value: p,
                    done: g
                } : {
                    value: u ? [h(p[0]), h(p[1])] : h(p),
                    done: g
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Pr(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function S1() {
    const e = {
        get(o) {
            return da(this, o)
        },
        get size() {
            return pa(this)
        },
        has: ha,
        add: qh,
        set: Gh,
        delete: zh,
        clear: Yh,
        forEach: ma(!1, !1)
    }
      , t = {
        get(o) {
            return da(this, o, !1, !0)
        },
        get size() {
            return pa(this)
        },
        has: ha,
        add: qh,
        set: Gh,
        delete: zh,
        clear: Yh,
        forEach: ma(!1, !0)
    }
      , n = {
        get(o) {
            return da(this, o, !0)
        },
        get size() {
            return pa(this, !0)
        },
        has(o) {
            return ha.call(this, o, !0)
        },
        add: Pr("add"),
        set: Pr("set"),
        delete: Pr("delete"),
        clear: Pr("clear"),
        forEach: ma(!0, !1)
    }
      , r = {
        get(o) {
            return da(this, o, !0, !0)
        },
        get size() {
            return pa(this, !0)
        },
        has(o) {
            return ha.call(this, o, !0)
        },
        add: Pr("add"),
        set: Pr("set"),
        delete: Pr("delete"),
        clear: Pr("clear"),
        forEach: ma(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        e[o] = ga(o, !1, !1),
        n[o] = ga(o, !0, !1),
        t[o] = ga(o, !1, !0),
        r[o] = ga(o, !0, !0)
    }
    ),
    [e, n, t, r]
}
const [A1,T1,R1,C1] = S1();
function Ou(e, t) {
    const n = t ? e ? C1 : R1 : e ? T1 : A1;
    return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(nt(n, i) && i in r ? n : r, i, o)
}
const x1 = {
    get: Ou(!1, !1)
}
  , P1 = {
    get: Ou(!1, !0)
}
  , I1 = {
    get: Ou(!0, !1)
}
  , F1 = {
    get: Ou(!0, !0)
}
  , uv = new WeakMap
  , lv = new WeakMap
  , cv = new WeakMap
  , fv = new WeakMap;
function L1(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function N1(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : L1(e1(e))
}
function yn(e) {
    return co(e) ? e : Su(e, !1, _1, x1, uv)
}
function Af(e) {
    return Su(e, !1, E1, P1, lv)
}
function Eo(e) {
    return Su(e, !0, w1, I1, cv)
}
function M1(e) {
    return Su(e, !0, O1, F1, fv)
}
function Su(e, t, n, r, i) {
    if (!ft(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const s = N1(e);
    if (s === 0)
        return e;
    const u = new Proxy(e,s === 2 ? r : n);
    return i.set(e, u),
    u
}
function pr(e) {
    return co(e) ? pr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function co(e) {
    return !!(e && e.__v_isReadonly)
}
function cs(e) {
    return !!(e && e.__v_isShallow)
}
function Tf(e) {
    return e ? !!e.__v_raw : !1
}
function et(e) {
    const t = e && e.__v_raw;
    return t ? et(t) : e
}
function Au(e) {
    return Object.isExtensible(e) && qg(e, "__v_skip", !0),
    e
}
const fs = e => ft(e) ? yn(e) : e
  , Rf = e => ft(e) ? Eo(e) : e;
class dv {
    constructor(t, n, r, i) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new lo( () => t(this._value), () => Qi(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !i,
        this.__v_isReadonly = r
    }
    get value() {
        const t = et(this);
        return (!t._cacheable || t.effect.dirty) && Hn(t._value, t._value = t.effect.run()) && Qi(t, 4),
        Cf(t),
        t.effect._dirtyLevel >= 2 && Qi(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function k1(e, t, n=!1) {
    let r, i;
    const o = We(e);
    return o ? (r = e,
    i = pn) : (r = e.get,
    i = e.set),
    new dv(r,i,o || !i,n)
}
function Cf(e) {
    var t;
    Ur && di && (e = et(e),
    tv(di, (t = e.dep) != null ? t : e.dep = rv( () => e.dep = void 0, e instanceof dv ? e : void 0)))
}
function Qi(e, t=4, n, r) {
    e = et(e);
    const i = e.dep;
    i && nv(i, t)
}
function at(e) {
    return !!(e && e.__v_isRef === !0)
}
function Me(e) {
    return hv(e, !1)
}
function Fi(e) {
    return hv(e, !0)
}
function hv(e, t) {
    return at(e) ? e : new $1(e,t)
}
class $1 {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : et(t),
        this._value = n ? t : fs(t)
    }
    get value() {
        return Cf(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || cs(t) || co(t);
        t = n ? t : et(t),
        Hn(t, this._rawValue) && (this._rawValue,
        this._rawValue = t,
        this._value = n ? t : fs(t),
        Qi(this, 4))
    }
}
function rc(e) {
    Qi(e, 4)
}
function Qe(e) {
    return at(e) ? e.value : e
}
function ze(e) {
    return We(e) ? e() : Qe(e)
}
const D1 = {
    get: (e, t, n) => Qe(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const i = e[t];
        return at(i) && !at(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function xf(e) {
    return pr(e) ? e : new Proxy(e,D1)
}
class j1 {
    constructor(t) {
        this.dep = void 0,
        this.__v_isRef = !0;
        const {get: n, set: r} = t( () => Cf(this), () => Qi(this));
        this._get = n,
        this._set = r
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Pf(e) {
    return new j1(e)
}
function pv(e) {
    const t = Le(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = gv(e, n);
    return t
}
class B1 {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return g1(et(this._object), this._key)
    }
}
class V1 {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function mv(e, t, n) {
    return at(e) ? e : We(e) ? new V1(e) : ft(e) && arguments.length > 1 ? gv(e, t, n) : Me(e)
}
function gv(e, t, n) {
    const r = e[t];
    return at(r) ? r : new B1(e,t,n)
}
const U1 = {
    GET: "get",
    HAS: "has",
    ITERATE: "iterate"
}
  , W1 = {
    SET: "set",
    ADD: "add",
    DELETE: "delete",
    CLEAR: "clear"
};
/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function H1(e, t) {}
const K1 = {
    SETUP_FUNCTION: 0,
    0: "SETUP_FUNCTION",
    RENDER_FUNCTION: 1,
    1: "RENDER_FUNCTION",
    WATCH_GETTER: 2,
    2: "WATCH_GETTER",
    WATCH_CALLBACK: 3,
    3: "WATCH_CALLBACK",
    WATCH_CLEANUP: 4,
    4: "WATCH_CLEANUP",
    NATIVE_EVENT_HANDLER: 5,
    5: "NATIVE_EVENT_HANDLER",
    COMPONENT_EVENT_HANDLER: 6,
    6: "COMPONENT_EVENT_HANDLER",
    VNODE_HOOK: 7,
    7: "VNODE_HOOK",
    DIRECTIVE_HOOK: 8,
    8: "DIRECTIVE_HOOK",
    TRANSITION_HOOK: 9,
    9: "TRANSITION_HOOK",
    APP_ERROR_HANDLER: 10,
    10: "APP_ERROR_HANDLER",
    APP_WARN_HANDLER: 11,
    11: "APP_WARN_HANDLER",
    FUNCTION_REF: 12,
    12: "FUNCTION_REF",
    ASYNC_COMPONENT_LOADER: 13,
    13: "ASYNC_COMPONENT_LOADER",
    SCHEDULER: 14,
    14: "SCHEDULER"
}
  , q1 = {
    sp: "serverPrefetch hook",
    bc: "beforeCreate hook",
    c: "created hook",
    bm: "beforeMount hook",
    m: "mounted hook",
    bu: "beforeUpdate hook",
    u: "updated",
    bum: "beforeUnmount hook",
    um: "unmounted hook",
    a: "activated hook",
    da: "deactivated hook",
    ec: "errorCaptured hook",
    rtc: "renderTracked hook",
    rtg: "renderTriggered hook",
    0: "setup function",
    1: "render function",
    2: "watcher getter",
    3: "watcher callback",
    4: "watcher cleanup function",
    5: "native event handler",
    6: "component event handler",
    7: "vnode hook",
    8: "directive hook",
    9: "transition hook",
    10: "app errorHandler",
    11: "app warnHandler",
    12: "ref function",
    13: "async component loader",
    14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function mr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (i) {
        Li(i, t, n)
    }
}
function An(e, t, n, r) {
    if (We(e)) {
        const i = mr(e, t, n, r);
        return i && bf(i) && i.catch(o => {
            Li(o, t, n)
        }
        ),
        i
    }
    if (Le(e)) {
        const i = [];
        for (let o = 0; o < e.length; o++)
            i.push(An(e[o], t, n, r));
        return i
    }
}
function Li(e, t, n, r=!0) {
    const i = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const s = t.proxy
          , u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o; ) {
            const f = o.ec;
            if (f) {
                for (let h = 0; h < f.length; h++)
                    if (f[h](e, s, u) === !1)
                        return
            }
            o = o.parent
        }
        const c = t.appContext.config.errorHandler;
        if (c) {
            Zr(),
            mr(c, null, 10, [e, s, u]),
            ei();
            return
        }
    }
    G1(e, n, i, r)
}
function G1(e, t, n, r=!0) {
    console.error(e)
}
let ds = !1
  , ic = !1;
const Zt = [];
let Zn = 0;
const Zi = [];
let kr = null
  , fi = 0;
const vv = Promise.resolve();
let If = null;
function zt(e) {
    const t = If || vv;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function z1(e) {
    let t = Zn + 1
      , n = Zt.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , i = Zt[r]
          , o = hs(i);
        o < e || o === e && i.pre ? t = r + 1 : n = r
    }
    return t
}
function Tu(e) {
    (!Zt.length || !Zt.includes(e, ds && e.allowRecurse ? Zn + 1 : Zn)) && (e.id == null ? Zt.push(e) : Zt.splice(z1(e.id), 0, e),
    yv())
}
function yv() {
    !ds && !ic && (ic = !0,
    If = vv.then(bv))
}
function Y1(e) {
    const t = Zt.indexOf(e);
    t > Zn && Zt.splice(t, 1)
}
function qa(e) {
    Le(e) ? Zi.push(...e) : (!kr || !kr.includes(e, e.allowRecurse ? fi + 1 : fi)) && Zi.push(e),
    yv()
}
function Jh(e, t, n=ds ? Zn + 1 : 0) {
    for (; n < Zt.length; n++) {
        const r = Zt[n];
        if (r && r.pre) {
            if (e && r.id !== e.uid)
                continue;
            Zt.splice(n, 1),
            n--,
            r()
        }
    }
}
function Ga(e) {
    if (Zi.length) {
        const t = [...new Set(Zi)].sort( (n, r) => hs(n) - hs(r));
        if (Zi.length = 0,
        kr) {
            kr.push(...t);
            return
        }
        for (kr = t,
        fi = 0; fi < kr.length; fi++) {
            const n = kr[fi];
            n.active !== !1 && n()
        }
        kr = null,
        fi = 0
    }
}
const hs = e => e.id == null ? 1 / 0 : e.id
  , J1 = (e, t) => {
    const n = hs(e) - hs(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function bv(e) {
    ic = !1,
    ds = !0,
    Zt.sort(J1);
    try {
        for (Zn = 0; Zn < Zt.length; Zn++) {
            const t = Zt[Zn];
            t && t.active !== !1 && mr(t, null, 14)
        }
    } finally {
        Zn = 0,
        Zt.length = 0,
        Ga(),
        ds = !1,
        If = null,
        (Zt.length || Zi.length) && bv()
    }
}
let Hi, va = [];
function _v(e, t) {
    var n, r;
    Hi = e,
    Hi ? (Hi.enabled = !0,
    va.forEach( ({event: i, args: o}) => Hi.emit(i, ...o)),
    va = []) : typeof window != "undefined" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(o => {
        _v(o, t)
    }
    ),
    setTimeout( () => {
        Hi || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null,
        va = [])
    }
    , 3e3)) : va = []
}
function X1(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || ct;
    let i = n;
    const o = t.startsWith("update:")
      , s = o && t.slice(7);
    if (s && s in r) {
        const h = `${s === "modelValue" ? "model" : s}Modifiers`
          , {number: p, trim: g} = r[h] || ct;
        g && (i = n.map(y => At(y) ? y.trim() : y)),
        p && (i = n.map(Wa))
    }
    let u, c = r[u = Yo(t)] || r[u = Yo(rn(t))];
    !c && o && (c = r[u = Yo(Sn(t))]),
    c && An(c, e, 6, i);
    const f = r[u + "Once"];
    if (f) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[u])
            return;
        e.emitted[u] = !0,
        An(f, e, 6, i)
    }
}
function wv(e, t, n=!1) {
    const r = t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    const o = e.emits;
    let s = {}
      , u = !1;
    if (!We(e)) {
        const c = f => {
            const h = wv(f, t, !0);
            h && (u = !0,
            _t(s, h))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !o && !u ? (ft(e) && r.set(e, null),
    null) : (Le(o) ? o.forEach(c => s[c] = null) : _t(s, o),
    ft(e) && r.set(e, s),
    s)
}
function Ru(e, t) {
    return !e || !Cs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, Sn(t)) || nt(e, t))
}
let Dt = null
  , Cu = null;
function ps(e) {
    const t = Dt;
    return Dt = e,
    Cu = e && e.type.__scopeId || null,
    t
}
function Q1(e) {
    Cu = e
}
function Z1() {
    Cu = null
}
const eR = e => Ff;
function Ff(e, t=Dt, n) {
    if (!t || e._n)
        return e;
    const r = (...i) => {
        r._d && hc(-1);
        const o = ps(t);
        let s;
        try {
            s = e(...i)
        } finally {
            ps(o),
            r._d && hc(1)
        }
        return s
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function xa(e) {
    const {type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [o], slots: s, attrs: u, emit: c, render: f, renderCache: h, props: p, data: g, setupState: y, ctx: _, inheritAttrs: R} = e
      , F = ps(e);
    let T, A;
    try {
        if (n.shapeFlag & 4) {
            const I = i || r
              , W = I;
            T = On(f.call(W, I, h, p, y, g, _)),
            A = u
        } else {
            const I = t;
            T = On(I.length > 1 ? I(p, {
                attrs: u,
                slots: s,
                emit: c
            }) : I(p, null)),
            A = t.props ? u : nR(u)
        }
    } catch (I) {
        Qo.length = 0,
        Li(I, e, 1),
        T = gt(Ht)
    }
    let E = T;
    if (A && R !== !1) {
        const I = Object.keys(A)
          , {shapeFlag: W} = E;
        I.length && W & 7 && (o && I.some(vf) && (A = rR(A, o)),
        E = tr(E, A, !1, !0))
    }
    return n.dirs && (E = tr(E, null, !1, !0),
    E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs),
    n.transition && (E.transition = n.transition),
    T = E,
    ps(F),
    T
}
function tR(e, t=!0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        if (Yr(i)) {
            if (i.type !== Ht || i.children === "v-if") {
                if (n)
                    return;
                n = i
            }
        } else
            return
    }
    return n
}
const nR = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Cs(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , rR = (e, t) => {
    const n = {};
    for (const r in e)
        (!vf(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function iR(e, t, n) {
    const {props: r, children: i, component: o} = e
      , {props: s, children: u, patchFlag: c} = t
      , f = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return r ? Xh(r, s, f) : !!s;
        if (c & 8) {
            const h = t.dynamicProps;
            for (let p = 0; p < h.length; p++) {
                const g = h[p];
                if (s[g] !== r[g] && !Ru(f, g))
                    return !0
            }
        }
    } else
        return (i || u) && (!u || !u.$stable) ? !0 : r === s ? !1 : r ? s ? Xh(r, s, f) : !0 : !!s;
    return !1
}
function Xh(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (t[o] !== e[o] && !Ru(n, o))
            return !0
    }
    return !1
}
function Lf({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Nf = "components"
  , oR = "directives";
function sR(e, t) {
    return Mf(Nf, e, !0, t) || e
}
const Ev = Symbol.for("v-ndc");
function aR(e) {
    return At(e) ? Mf(Nf, e, !1) || e : e || Ev
}
function uR(e) {
    return Mf(oR, e)
}
function Mf(e, t, n=!0, r=!1) {
    const i = Dt || $t;
    if (i) {
        const o = i.type;
        if (e === Nf) {
            const u = yc(o, !1);
            if (u && (u === t || u === rn(t) || u === xs(rn(t))))
                return o
        }
        const s = Qh(i[e] || o[e], t) || Qh(i.appContext[e], t);
        return !s && r ? o : s
    }
}
function Qh(e, t) {
    return e && (e[t] || e[rn(t)] || e[xs(rn(t))])
}
const oc = e => e.__isSuspense;
let sc = 0;
const lR = {
    name: "Suspense",
    __isSuspense: !0,
    process(e, t, n, r, i, o, s, u, c, f) {
        if (e == null)
            fR(t, n, r, i, o, s, u, c, f);
        else {
            if (o && o.deps > 0 && !e.suspense.isInFallback) {
                t.suspense = e.suspense,
                t.suspense.vnode = t,
                t.el = e.el;
                return
            }
            dR(e, t, n, r, i, s, u, c, f)
        }
    },
    hydrate: hR,
    normalize: pR
}
  , cR = lR;
function ms(e, t) {
    const n = e.props && e.props[t];
    We(n) && n()
}
function fR(e, t, n, r, i, o, s, u, c) {
    const {p: f, o: {createElement: h}} = c
      , p = h("div")
      , g = e.suspense = Ov(e, i, r, t, p, n, o, s, u, c);
    f(null, g.pendingBranch = e.ssContent, p, null, r, g, o, s),
    g.deps > 0 ? (ms(e, "onPending"),
    ms(e, "onFallback"),
    f(null, e.ssFallback, t, n, r, null, o, s),
    eo(g, e.ssFallback)) : g.resolve(!1, !0)
}
function dR(e, t, n, r, i, o, s, u, {p: c, um: f, o: {createElement: h}}) {
    const p = t.suspense = e.suspense;
    p.vnode = t,
    t.el = e.el;
    const g = t.ssContent
      , y = t.ssFallback
      , {activeBranch: _, pendingBranch: R, isInFallback: F, isHydrating: T} = p;
    if (R)
        p.pendingBranch = g,
        $n(g, R) ? (c(R, g, p.hiddenContainer, null, i, p, o, s, u),
        p.deps <= 0 ? p.resolve() : F && (T || (c(_, y, n, r, i, null, o, s, u),
        eo(p, y)))) : (p.pendingId = sc++,
        T ? (p.isHydrating = !1,
        p.activeBranch = R) : f(R, i, p),
        p.deps = 0,
        p.effects.length = 0,
        p.hiddenContainer = h("div"),
        F ? (c(null, g, p.hiddenContainer, null, i, p, o, s, u),
        p.deps <= 0 ? p.resolve() : (c(_, y, n, r, i, null, o, s, u),
        eo(p, y))) : _ && $n(g, _) ? (c(_, g, n, r, i, p, o, s, u),
        p.resolve(!0)) : (c(null, g, p.hiddenContainer, null, i, p, o, s, u),
        p.deps <= 0 && p.resolve()));
    else if (_ && $n(g, _))
        c(_, g, n, r, i, p, o, s, u),
        eo(p, g);
    else if (ms(t, "onPending"),
    p.pendingBranch = g,
    g.shapeFlag & 512 ? p.pendingId = g.component.suspenseId : p.pendingId = sc++,
    c(null, g, p.hiddenContainer, null, i, p, o, s, u),
    p.deps <= 0)
        p.resolve();
    else {
        const {timeout: A, pendingId: E} = p;
        A > 0 ? setTimeout( () => {
            p.pendingId === E && p.fallback(y)
        }
        , A) : A === 0 && p.fallback(y)
    }
}
function Ov(e, t, n, r, i, o, s, u, c, f, h=!1) {
    const {p, m: g, um: y, n: _, o: {parentNode: R, remove: F}} = f;
    let T;
    const A = mR(e);
    A && t && t.pendingBranch && (T = t.pendingId,
    t.deps++);
    const E = e.props ? Ha(e.props.timeout) : void 0
      , I = o
      , W = {
        vnode: e,
        parent: t,
        parentComponent: n,
        namespace: s,
        container: r,
        hiddenContainer: i,
        deps: 0,
        pendingId: sc++,
        timeout: typeof E == "number" ? E : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !h,
        isHydrating: h,
        isUnmounted: !1,
        effects: [],
        resolve($=!1, U=!1) {
            const {vnode: Z, activeBranch: j, pendingBranch: ne, pendingId: be, effects: ae, parentComponent: we, container: Ve} = W;
            let Ne = !1;
            W.isHydrating ? W.isHydrating = !1 : $ || (Ne = j && ne.transition && ne.transition.mode === "out-in",
            Ne && (j.transition.afterLeave = () => {
                be === W.pendingId && (g(ne, Ve, o === I ? _(j) : o, 0),
                qa(ae))
            }
            ),
            j && (R(j.el) !== W.hiddenContainer && (o = _(j)),
            y(j, we, W, !0)),
            Ne || g(ne, Ve, o, 0)),
            eo(W, ne),
            W.pendingBranch = null,
            W.isInFallback = !1;
            let le = W.parent
              , je = !1;
            for (; le; ) {
                if (le.pendingBranch) {
                    le.effects.push(...ae),
                    je = !0;
                    break
                }
                le = le.parent
            }
            !je && !Ne && qa(ae),
            W.effects = [],
            A && t && t.pendingBranch && T === t.pendingId && (t.deps--,
            t.deps === 0 && !U && t.resolve()),
            ms(Z, "onResolve")
        },
        fallback($) {
            if (!W.pendingBranch)
                return;
            const {vnode: U, activeBranch: Z, parentComponent: j, container: ne, namespace: be} = W;
            ms(U, "onFallback");
            const ae = _(Z)
              , we = () => {
                W.isInFallback && (p(null, $, ne, ae, j, null, be, u, c),
                eo(W, $))
            }
              , Ve = $.transition && $.transition.mode === "out-in";
            Ve && (Z.transition.afterLeave = we),
            W.isInFallback = !0,
            y(Z, j, null, !0),
            Ve || we()
        },
        move($, U, Z) {
            W.activeBranch && g(W.activeBranch, $, U, Z),
            W.container = $
        },
        next() {
            return W.activeBranch && _(W.activeBranch)
        },
        registerDep($, U, Z) {
            const j = !!W.pendingBranch;
            j && W.deps++;
            const ne = $.vnode.el;
            $.asyncDep.catch(be => {
                Li(be, $, 0)
            }
            ).then(be => {
                if ($.isUnmounted || W.isUnmounted || W.pendingId !== $.suspenseId)
                    return;
                $.asyncResolved = !0;
                const {vnode: ae} = $;
                gc($, be, !1),
                ne && (ae.el = ne);
                const we = !ne && $.subTree.el;
                U($, ae, R(ne || $.subTree.el), ne ? null : _($.subTree), W, s, Z),
                we && F(we),
                Lf($, ae.el),
                j && --W.deps === 0 && W.resolve()
            }
            )
        },
        unmount($, U) {
            W.isUnmounted = !0,
            W.activeBranch && y(W.activeBranch, n, $, U),
            W.pendingBranch && y(W.pendingBranch, n, $, U)
        }
    };
    return W
}
function hR(e, t, n, r, i, o, s, u, c) {
    const f = t.suspense = Ov(t, r, n, e.parentNode, document.createElement("div"), null, i, o, s, u, !0)
      , h = c(e, f.pendingBranch = t.ssContent, n, f, o, s);
    return f.deps === 0 && f.resolve(!1, !0),
    h
}
function pR(e) {
    const {shapeFlag: t, children: n} = e
      , r = t & 32;
    e.ssContent = Zh(r ? n.default : n),
    e.ssFallback = r ? Zh(n.fallback) : gt(Ht)
}
function Zh(e) {
    let t;
    if (We(e)) {
        const n = _i && e._c;
        n && (e._d = !1,
        Iu()),
        e = e(),
        n && (e._d = !0,
        t = mn,
        iy())
    }
    return Le(e) && (e = tR(e)),
    e = On(e),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)),
    e
}
function Sv(e, t) {
    t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : qa(e)
}
function eo(e, t) {
    e.activeBranch = t;
    const {vnode: n, parentComponent: r} = e;
    let i = t.el;
    for (; !i && t.component; )
        t = t.component.subTree,
        i = t.el;
    n.el = i,
    r && r.subTree === n && (r.vnode.el = i,
    Lf(r, i))
}
function mR(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
function xu(e, t, n=$t, r=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...s) => {
            Zr();
            const u = wi(n)
              , c = An(t, n, e, s);
            return u(),
            ei(),
            c
        }
        );
        return r ? i.unshift(o) : i.push(o),
        o
    }
}
const _r = e => (t, n=$t) => {
    (!ks || e === "sp") && xu(e, (...r) => t(...r), n)
}
  , kf = _r("bm")
  , un = _r("m")
  , Av = _r("bu")
  , Fs = _r("u")
  , Ls = _r("bum")
  , nr = _r("um")
  , Tv = _r("sp")
  , Rv = _r("rtg")
  , Cv = _r("rtc");
function xv(e, t=$t) {
    xu("ec", e, t)
}
function gR(e, t) {
    if (Dt === null)
        return e;
    const n = $s(Dt)
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[o,s,u,c=ct] = t[i];
        o && (We(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && Br(s),
        r.push({
            dir: o,
            instance: n,
            value: s,
            oldValue: void 0,
            arg: u,
            modifiers: c
        }))
    }
    return e
}
function Qn(e, t, n, r) {
    const i = e.dirs
      , o = t && t.dirs;
    for (let s = 0; s < i.length; s++) {
        const u = i[s];
        o && (u.oldValue = o[s].value);
        let c = u.dir[r];
        c && (Zr(),
        An(c, n, 8, [e.el, u, e, t]),
        ei())
    }
}
function vR(e, t, n, r) {
    let i;
    const o = n && n[r];
    if (Le(e) || At(e)) {
        i = new Array(e.length);
        for (let s = 0, u = e.length; s < u; s++)
            i[s] = t(e[s], s, void 0, o && o[s])
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let s = 0; s < e; s++)
            i[s] = t(s + 1, s, void 0, o && o[s])
    } else if (ft(e))
        if (e[Symbol.iterator])
            i = Array.from(e, (s, u) => t(s, u, void 0, o && o[u]));
        else {
            const s = Object.keys(e);
            i = new Array(s.length);
            for (let u = 0, c = s.length; u < c; u++) {
                const f = s[u];
                i[u] = t(e[f], f, u, o && o[u])
            }
        }
    else
        i = [];
    return n && (n[r] = i),
    i
}
function yR(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (Le(r))
            for (let i = 0; i < r.length; i++)
                e[r[i].name] = r[i].fn;
        else
            r && (e[r.name] = r.key ? (...i) => {
                const o = r.fn(...i);
                return o && (o.key = r.key),
                o
            }
            : r.fn)
    }
    return e
}
/*! #__NO_SIDE_EFFECTS__ */
function wr(e, t) {
    return We(e) ? _t({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const pi = e => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function bR(e) {
    We(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: r, delay: i=200, timeout: o, suspensible: s=!0, onError: u} = e;
    let c = null, f, h = 0;
    const p = () => (h++,
    c = null,
    g())
      , g = () => {
        let y;
        return c || (y = c = t().catch(_ => {
            if (_ = _ instanceof Error ? _ : new Error(String(_)),
            u)
                return new Promise( (R, F) => {
                    u(_, () => R(p()), () => F(_), h + 1)
                }
                );
            throw _
        }
        ).then(_ => y !== c && c ? c : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default),
        f = _,
        _)))
    }
    ;
    return wr({
        name: "AsyncComponentWrapper",
        __asyncLoader: g,
        get __asyncResolved() {
            return f
        },
        setup() {
            const y = $t;
            if (f)
                return () => Rl(f, y);
            const _ = A => {
                c = null,
                Li(A, y, 13, !r)
            }
            ;
            if (s && y.suspense || ks)
                return g().then(A => () => Rl(A, y)).catch(A => (_(A),
                () => r ? gt(r, {
                    error: A
                }) : null));
            const R = Me(!1)
              , F = Me()
              , T = Me(!!i);
            return i && setTimeout( () => {
                T.value = !1
            }
            , i),
            o != null && setTimeout( () => {
                if (!R.value && !F.value) {
                    const A = new Error(`Async component timed out after ${o}ms.`);
                    _(A),
                    F.value = A
                }
            }
            , o),
            g().then( () => {
                R.value = !0,
                y.parent && Ms(y.parent.vnode) && (y.parent.effect.dirty = !0,
                Tu(y.parent.update))
            }
            ).catch(A => {
                _(A),
                F.value = A
            }
            ),
            () => {
                if (R.value && f)
                    return Rl(f, y);
                if (F.value && r)
                    return gt(r, {
                        error: F.value
                    });
                if (n && !T.value)
                    return gt(n)
            }
        }
    })
}
function Rl(e, t) {
    const {ref: n, props: r, children: i, ce: o} = t.vnode
      , s = gt(e, r, i);
    return s.ref = n,
    s.ce = o,
    delete t.vnode.ce,
    s
}
function _R(e, t, n={}, r, i) {
    if (Dt.isCE || Dt.parent && pi(Dt.parent) && Dt.parent.isCE)
        return t !== "default" && (n.name = t),
        gt("slot", n, r && r());
    let o = e[t];
    o && o._c && (o._d = !1),
    Iu();
    const s = o && Pv(o(n))
      , u = Kf(kt, {
        key: n.key || s && s.key || `_${t}`
    }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !i && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    u
}
function Pv(e) {
    return e.some(t => Yr(t) ? !(t.type === Ht || t.type === kt && !Pv(t.children)) : !0) ? e : null
}
function wR(e, t) {
    const n = {};
    for (const r in e)
        n[t && /[A-Z]/.test(r) ? `on:${r}` : Yo(r)] = e[r];
    return n
}
const ac = e => e ? cy(e) ? $s(e) : ac(e.parent) : null
  , Jo = _t(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => ac(e.parent),
    $root: e => ac(e.root),
    $emit: e => e.emit,
    $options: e => $f(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0,
        Tu(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = zt.bind(e.proxy)),
    $watch: e => QR.bind(e)
})
  , Cl = (e, t) => e !== ct && !e.__isScriptSetup && nt(e, t)
  , uc = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: i, props: o, accessCache: s, type: u, appContext: c} = e;
        let f;
        if (t[0] !== "$") {
            const y = s[t];
            if (y !== void 0)
                switch (y) {
                case 1:
                    return r[t];
                case 2:
                    return i[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (Cl(r, t))
                    return s[t] = 1,
                    r[t];
                if (i !== ct && nt(i, t))
                    return s[t] = 2,
                    i[t];
                if ((f = e.propsOptions[0]) && nt(f, t))
                    return s[t] = 3,
                    o[t];
                if (n !== ct && nt(n, t))
                    return s[t] = 4,
                    n[t];
                lc && (s[t] = 0)
            }
        }
        const h = Jo[t];
        let p, g;
        if (h)
            return t === "$attrs" && vn(e.attrs, "get", ""),
            h(e);
        if ((p = u.__cssModules) && (p = p[t]))
            return p;
        if (n !== ct && nt(n, t))
            return s[t] = 4,
            n[t];
        if (g = c.config.globalProperties,
        nt(g, t))
            return g[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: i, ctx: o} = e;
        return Cl(i, t) ? (i[t] = n,
        !0) : r !== ct && nt(r, t) ? (r[t] = n,
        !0) : nt(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o}}, s) {
        let u;
        return !!n[s] || e !== ct && nt(e, s) || Cl(t, s) || (u = o[0]) && nt(u, s) || nt(r, s) || nt(Jo, s) || nt(i.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : nt(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
}
  , ER = _t({}, uc, {
    get(e, t) {
        if (t !== Symbol.unscopables)
            return uc.get(e, t, e)
    },
    has(e, t) {
        return t[0] !== "_" && !i1(t)
    }
});
function OR() {
    return null
}
function SR() {
    return null
}
function AR(e) {}
function TR(e) {}
function RR() {
    return null
}
function CR() {}
function xR(e, t) {
    return null
}
function PR() {
    return Iv().slots
}
function IR() {
    return Iv().attrs
}
function Iv() {
    const e = Ft();
    return e.setupContext || (e.setupContext = hy(e))
}
function gs(e) {
    return Le(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function FR(e, t) {
    const n = gs(e);
    for (const r in t) {
        if (r.startsWith("__skip"))
            continue;
        let i = n[r];
        i ? Le(i) || We(i) ? i = n[r] = {
            type: i,
            default: t[r]
        } : i.default = t[r] : i === null && (i = n[r] = {
            default: t[r]
        }),
        i && t[`__skip_${r}`] && (i.skipFactory = !0)
    }
    return n
}
function LR(e, t) {
    return !e || !t ? e || t : Le(e) && Le(t) ? e.concat(t) : _t({}, gs(e), gs(t))
}
function NR(e, t) {
    const n = {};
    for (const r in e)
        t.includes(r) || Object.defineProperty(n, r, {
            enumerable: !0,
            get: () => e[r]
        });
    return n
}
function MR(e) {
    const t = Ft();
    let n = e();
    return mc(),
    bf(n) && (n = n.catch(r => {
        throw wi(t),
        r
    }
    )),
    [n, () => wi(t)]
}
let lc = !0;
function kR(e) {
    const t = $f(e)
      , n = e.proxy
      , r = e.ctx;
    lc = !1,
    t.beforeCreate && ep(t.beforeCreate, e, "bc");
    const {data: i, computed: o, methods: s, watch: u, provide: c, inject: f, created: h, beforeMount: p, mounted: g, beforeUpdate: y, updated: _, activated: R, deactivated: F, beforeDestroy: T, beforeUnmount: A, destroyed: E, unmounted: I, render: W, renderTracked: $, renderTriggered: U, errorCaptured: Z, serverPrefetch: j, expose: ne, inheritAttrs: be, components: ae, directives: we, filters: Ve} = t;
    if (f && $R(f, r, null),
    s)
        for (const je in s) {
            const Te = s[je];
            We(Te) && (r[je] = Te.bind(n))
        }
    if (i) {
        const je = i.call(n, n);
        ft(je) && (e.data = yn(je))
    }
    if (lc = !0,
    o)
        for (const je in o) {
            const Te = o[je]
              , ut = We(Te) ? Te.bind(n, n) : We(Te.get) ? Te.get.bind(n, n) : pn
              , dt = !We(Te) && We(Te.set) ? Te.set.bind(n) : pn
              , it = Fe({
                get: ut,
                set: dt
            });
            Object.defineProperty(r, je, {
                enumerable: !0,
                configurable: !0,
                get: () => it.value,
                set: wt => it.value = wt
            })
        }
    if (u)
        for (const je in u)
            Fv(u[je], r, n, je);
    if (c) {
        const je = We(c) ? c.call(n) : c;
        Reflect.ownKeys(je).forEach(Te => {
            mi(Te, je[Te])
        }
        )
    }
    h && ep(h, e, "c");
    function le(je, Te) {
        Le(Te) ? Te.forEach(ut => je(ut.bind(n))) : Te && je(Te.bind(n))
    }
    if (le(kf, p),
    le(un, g),
    le(Av, y),
    le(Fs, _),
    le(Vf, R),
    le(Uf, F),
    le(xv, Z),
    le(Cv, $),
    le(Rv, U),
    le(Ls, A),
    le(nr, I),
    le(Tv, j),
    Le(ne))
        if (ne.length) {
            const je = e.exposed || (e.exposed = {});
            ne.forEach(Te => {
                Object.defineProperty(je, Te, {
                    get: () => n[Te],
                    set: ut => n[Te] = ut
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    W && e.render === pn && (e.render = W),
    be != null && (e.inheritAttrs = be),
    ae && (e.components = ae),
    we && (e.directives = we)
}
function $R(e, t, n=pn) {
    Le(e) && (e = cc(e));
    for (const r in e) {
        const i = e[r];
        let o;
        ft(i) ? "default"in i ? o = Nt(i.from || r, i.default, !0) : o = Nt(i.from || r) : o = Nt(i),
        at(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: s => o.value = s
        }) : t[r] = o
    }
}
function ep(e, t, n) {
    An(Le(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Fv(e, t, n, r) {
    const i = r.includes(".") ? Qv(n, r) : () => n[r];
    if (At(e)) {
        const o = t[e];
        We(o) && tt(i, o)
    } else if (We(e))
        tt(i, e.bind(n));
    else if (ft(e))
        if (Le(e))
            e.forEach(o => Fv(o, t, n, r));
        else {
            const o = We(e.handler) ? e.handler.bind(n) : t[e.handler];
            We(o) && tt(i, o, e)
        }
}
function $f(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: i, optionsCache: o, config: {optionMergeStrategies: s}} = e.appContext
      , u = o.get(t);
    let c;
    return u ? c = u : !i.length && !n && !r ? c = t : (c = {},
    i.length && i.forEach(f => za(c, f, s, !0)),
    za(c, t, s)),
    ft(t) && o.set(t, c),
    c
}
function za(e, t, n, r=!1) {
    const {mixins: i, extends: o} = t;
    o && za(e, o, n, !0),
    i && i.forEach(s => za(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const u = DR[s] || n && n[s];
            e[s] = u ? u(e[s], t[s]) : t[s]
        }
    return e
}
const DR = {
    data: tp,
    props: np,
    emits: np,
    methods: Ho,
    computed: Ho,
    beforeCreate: nn,
    created: nn,
    beforeMount: nn,
    mounted: nn,
    beforeUpdate: nn,
    updated: nn,
    beforeDestroy: nn,
    beforeUnmount: nn,
    destroyed: nn,
    unmounted: nn,
    activated: nn,
    deactivated: nn,
    errorCaptured: nn,
    serverPrefetch: nn,
    components: Ho,
    directives: Ho,
    watch: BR,
    provide: tp,
    inject: jR
};
function tp(e, t) {
    return t ? e ? function() {
        return _t(We(e) ? e.call(this, this) : e, We(t) ? t.call(this, this) : t)
    }
    : t : e
}
function jR(e, t) {
    return Ho(cc(e), cc(t))
}
function cc(e) {
    if (Le(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function nn(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Ho(e, t) {
    return e ? _t(Object.create(null), e, t) : t
}
function np(e, t) {
    return e ? Le(e) && Le(t) ? [...new Set([...e, ...t])] : _t(Object.create(null), gs(e), gs(t != null ? t : {})) : t
}
function BR(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = _t(Object.create(null), e);
    for (const r in t)
        n[r] = nn(e[r], t[r]);
    return n
}
function Lv() {
    return {
        app: null,
        config: {
            isNativeTag: XT,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let VR = 0;
function UR(e, t) {
    return function(r, i=null) {
        We(r) || (r = _t({}, r)),
        i != null && !ft(i) && (i = null);
        const o = Lv()
          , s = new WeakSet;
        let u = !1;
        const c = o.app = {
            _uid: VR++,
            _component: r,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: my,
            get config() {
                return o.config
            },
            set config(f) {},
            use(f, ...h) {
                return s.has(f) || (f && We(f.install) ? (s.add(f),
                f.install(c, ...h)) : We(f) && (s.add(f),
                f(c, ...h))),
                c
            },
            mixin(f) {
                return o.mixins.includes(f) || o.mixins.push(f),
                c
            },
            component(f, h) {
                return h ? (o.components[f] = h,
                c) : o.components[f]
            },
            directive(f, h) {
                return h ? (o.directives[f] = h,
                c) : o.directives[f]
            },
            mount(f, h, p) {
                if (!u) {
                    const g = gt(r, i);
                    return g.appContext = o,
                    p === !0 ? p = "svg" : p === !1 && (p = void 0),
                    h && t ? t(g, f) : e(g, f, p),
                    u = !0,
                    c._container = f,
                    f.__vue_app__ = c,
                    $s(g.component)
                }
            },
            unmount() {
                u && (e(null, c._container),
                delete c._container.__vue_app__)
            },
            provide(f, h) {
                return o.provides[f] = h,
                c
            },
            runWithContext(f) {
                const h = to;
                to = c;
                try {
                    return f()
                } finally {
                    to = h
                }
            }
        };
        return c
    }
}
let to = null;
function mi(e, t) {
    if ($t) {
        let n = $t.provides;
        const r = $t.parent && $t.parent.provides;
        r === n && (n = $t.provides = Object.create(r)),
        n[e] = t
    }
}
function Nt(e, t, n=!1) {
    const r = $t || Dt;
    if (r || to) {
        const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : to._context.provides;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && We(t) ? t.call(r && r.proxy) : t
    }
}
function Nv() {
    return !!($t || Dt || to)
}
const Mv = {}
  , kv = () => Object.create(Mv)
  , $v = e => Object.getPrototypeOf(e) === Mv;
function WR(e, t, n, r=!1) {
    const i = {}
      , o = kv();
    e.propsDefaults = Object.create(null),
    Dv(e, t, i, o);
    for (const s in e.propsOptions[0])
        s in i || (i[s] = void 0);
    n ? e.props = r ? i : Af(i) : e.type.props ? e.props = i : e.props = o,
    e.attrs = o
}
function HR(e, t, n, r) {
    const {props: i, attrs: o, vnode: {patchFlag: s}} = e
      , u = et(i)
      , [c] = e.propsOptions;
    let f = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const h = e.vnode.dynamicProps;
            for (let p = 0; p < h.length; p++) {
                let g = h[p];
                if (Ru(e.emitsOptions, g))
                    continue;
                const y = t[g];
                if (c)
                    if (nt(o, g))
                        y !== o[g] && (o[g] = y,
                        f = !0);
                    else {
                        const _ = rn(g);
                        i[_] = fc(c, u, _, y, e, !1)
                    }
                else
                    y !== o[g] && (o[g] = y,
                    f = !0)
            }
        }
    } else {
        Dv(e, t, i, o) && (f = !0);
        let h;
        for (const p in u)
            (!t || !nt(t, p) && ((h = Sn(p)) === p || !nt(t, h))) && (c ? n && (n[p] !== void 0 || n[h] !== void 0) && (i[p] = fc(c, u, p, void 0, e, !0)) : delete i[p]);
        if (o !== u)
            for (const p in o)
                (!t || !nt(t, p)) && (delete o[p],
                f = !0)
    }
    f && hr(e.attrs, "set", "")
}
function Dv(e, t, n, r) {
    const [i,o] = e.propsOptions;
    let s = !1, u;
    if (t)
        for (let c in t) {
            if (Ji(c))
                continue;
            const f = t[c];
            let h;
            i && nt(i, h = rn(c)) ? !o || !o.includes(h) ? n[h] = f : (u || (u = {}))[h] = f : Ru(e.emitsOptions, c) || (!(c in r) || f !== r[c]) && (r[c] = f,
            s = !0)
        }
    if (o) {
        const c = et(n)
          , f = u || ct;
        for (let h = 0; h < o.length; h++) {
            const p = o[h];
            n[p] = fc(i, c, p, f[p], e, !nt(f, p))
        }
    }
    return s
}
function fc(e, t, n, r, i, o) {
    const s = e[n];
    if (s != null) {
        const u = nt(s, "default");
        if (u && r === void 0) {
            const c = s.default;
            if (s.type !== Function && !s.skipFactory && We(c)) {
                const {propsDefaults: f} = i;
                if (n in f)
                    r = f[n];
                else {
                    const h = wi(i);
                    r = f[n] = c.call(null, t),
                    h()
                }
            } else
                r = c
        }
        s[0] && (o && !u ? r = !1 : s[1] && (r === "" || r === Sn(n)) && (r = !0))
    }
    return r
}
function jv(e, t, n=!1) {
    const r = t.propsCache
      , i = r.get(e);
    if (i)
        return i;
    const o = e.props
      , s = {}
      , u = [];
    let c = !1;
    if (!We(e)) {
        const h = p => {
            c = !0;
            const [g,y] = jv(p, t, !0);
            _t(s, g),
            y && u.push(...y)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(h),
        e.extends && h(e.extends),
        e.mixins && e.mixins.forEach(h)
    }
    if (!o && !c)
        return ft(e) && r.set(e, zi),
        zi;
    if (Le(o))
        for (let h = 0; h < o.length; h++) {
            const p = rn(o[h]);
            rp(p) && (s[p] = ct)
        }
    else if (o)
        for (const h in o) {
            const p = rn(h);
            if (rp(p)) {
                const g = o[h]
                  , y = s[p] = Le(g) || We(g) ? {
                    type: g
                } : _t({}, g);
                if (y) {
                    const _ = sp(Boolean, y.type)
                      , R = sp(String, y.type);
                    y[0] = _ > -1,
                    y[1] = R < 0 || _ < R,
                    (_ > -1 || nt(y, "default")) && u.push(p)
                }
            }
        }
    const f = [s, u];
    return ft(e) && r.set(e, f),
    f
}
function rp(e) {
    return e[0] !== "$" && !Ji(e)
}
function ip(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function op(e, t) {
    return ip(e) === ip(t)
}
function sp(e, t) {
    return Le(t) ? t.findIndex(n => op(n, e)) : We(t) && op(t, e) ? 0 : -1
}
const Bv = e => e[0] === "_" || e === "$stable"
  , Df = e => Le(e) ? e.map(On) : [On(e)]
  , KR = (e, t, n) => {
    if (t._n)
        return t;
    const r = Ff( (...i) => Df(t(...i)), n);
    return r._c = !1,
    r
}
  , Vv = (e, t, n) => {
    const r = e._ctx;
    for (const i in e) {
        if (Bv(i))
            continue;
        const o = e[i];
        if (We(o))
            t[i] = KR(i, o, r);
        else if (o != null) {
            const s = Df(o);
            t[i] = () => s
        }
    }
}
  , Uv = (e, t) => {
    const n = Df(t);
    e.slots.default = () => n
}
  , qR = (e, t) => {
    const n = e.slots = kv();
    if (e.vnode.shapeFlag & 32) {
        const r = t._;
        r ? (_t(n, t),
        qg(n, "_", r, !0)) : Vv(t, n)
    } else
        t && Uv(e, t)
}
  , GR = (e, t, n) => {
    const {vnode: r, slots: i} = e;
    let o = !0
      , s = ct;
    if (r.shapeFlag & 32) {
        const u = t._;
        u ? n && u === 1 ? o = !1 : (_t(i, t),
        !n && u === 1 && delete i._) : (o = !t.$stable,
        Vv(t, i)),
        s = t
    } else
        t && (Uv(e, t),
        s = {
            default: 1
        });
    if (o)
        for (const u in i)
            !Bv(u) && s[u] == null && delete i[u]
}
;
function Ya(e, t, n, r, i=!1) {
    if (Le(e)) {
        e.forEach( (g, y) => Ya(g, t && (Le(t) ? t[y] : t), n, r, i));
        return
    }
    if (pi(r) && !i)
        return;
    const o = r.shapeFlag & 4 ? $s(r.component) : r.el
      , s = i ? null : o
      , {i: u, r: c} = e
      , f = t && t.r
      , h = u.refs === ct ? u.refs = {} : u.refs
      , p = u.setupState;
    if (f != null && f !== c && (At(f) ? (h[f] = null,
    nt(p, f) && (p[f] = null)) : at(f) && (f.value = null)),
    We(c))
        mr(c, u, 12, [s, h]);
    else {
        const g = At(c)
          , y = at(c);
        if (g || y) {
            const _ = () => {
                if (e.f) {
                    const R = g ? nt(p, c) ? p[c] : h[c] : c.value;
                    i ? Le(R) && yf(R, o) : Le(R) ? R.includes(o) || R.push(o) : g ? (h[c] = [o],
                    nt(p, c) && (p[c] = h[c])) : (c.value = [o],
                    e.k && (h[e.k] = c.value))
                } else
                    g ? (h[c] = s,
                    nt(p, c) && (p[c] = s)) : y && (c.value = s,
                    e.k && (h[e.k] = s))
            }
            ;
            s ? (_.id = -1,
            Wt(_, n)) : _()
        }
    }
}
let ap = !1;
const Bi = () => {
    ap || (console.error("Hydration completed but contains mismatches."),
    ap = !0)
}
  , zR = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , YR = e => e.namespaceURI.includes("MathML")
  , ya = e => {
    if (zR(e))
        return "svg";
    if (YR(e))
        return "mathml"
}
  , ba = e => e.nodeType === 8;
function JR(e) {
    const {mt: t, p: n, o: {patchProp: r, createText: i, nextSibling: o, parentNode: s, remove: u, insert: c, createComment: f}} = e
      , h = (E, I) => {
        if (!I.hasChildNodes()) {
            n(null, E, I),
            Ga(),
            I._vnode = E;
            return
        }
        p(I.firstChild, E, null, null, null),
        Ga(),
        I._vnode = E
    }
      , p = (E, I, W, $, U, Z=!1) => {
        Z = Z || !!I.dynamicChildren;
        const j = ba(E) && E.data === "["
          , ne = () => R(E, I, W, $, U, j)
          , {type: be, ref: ae, shapeFlag: we, patchFlag: Ve} = I;
        let Ne = E.nodeType;
        I.el = E,
        Ve === -2 && (Z = !1,
        I.dynamicChildren = null);
        let le = null;
        switch (be) {
        case zr:
            Ne !== 3 ? I.children === "" ? (c(I.el = i(""), s(E), E),
            le = E) : le = ne() : (E.data !== I.children && (Bi(),
            E.data = I.children),
            le = o(E));
            break;
        case Ht:
            A(E) ? (le = o(E),
            T(I.el = E.content.firstChild, E, W)) : Ne !== 8 || j ? le = ne() : le = o(E);
            break;
        case gi:
            if (j && (E = o(E),
            Ne = E.nodeType),
            Ne === 1 || Ne === 3) {
                le = E;
                const je = !I.children.length;
                for (let Te = 0; Te < I.staticCount; Te++)
                    je && (I.children += le.nodeType === 1 ? le.outerHTML : le.data),
                    Te === I.staticCount - 1 && (I.anchor = le),
                    le = o(le);
                return j ? o(le) : le
            } else
                ne();
            break;
        case kt:
            j ? le = _(E, I, W, $, U, Z) : le = ne();
            break;
        default:
            if (we & 1)
                (Ne !== 1 || I.type.toLowerCase() !== E.tagName.toLowerCase()) && !A(E) ? le = ne() : le = g(E, I, W, $, U, Z);
            else if (we & 6) {
                I.slotScopeIds = U;
                const je = s(E);
                if (j ? le = F(E) : ba(E) && E.data === "teleport start" ? le = F(E, E.data, "teleport end") : le = o(E),
                t(I, je, null, W, $, ya(je), Z),
                pi(I)) {
                    let Te;
                    j ? (Te = gt(kt),
                    Te.anchor = le ? le.previousSibling : je.lastChild) : Te = E.nodeType === 3 ? Gf("") : gt("div"),
                    Te.el = E,
                    I.component.subTree = Te
                }
            } else
                we & 64 ? Ne !== 8 ? le = ne() : le = I.type.hydrate(E, I, W, $, U, Z, e, y) : we & 128 && (le = I.type.hydrate(E, I, W, $, ya(s(E)), U, Z, e, p))
        }
        return ae != null && Ya(ae, null, $, I),
        le
    }
      , g = (E, I, W, $, U, Z) => {
        Z = Z || !!I.dynamicChildren;
        const {type: j, props: ne, patchFlag: be, shapeFlag: ae, dirs: we, transition: Ve} = I
          , Ne = j === "input" || j === "option";
        if (Ne || be !== -1) {
            we && Qn(I, null, W, "created");
            let le = !1;
            if (A(E)) {
                le = qv($, Ve) && W && W.vnode.props && W.vnode.props.appear;
                const Te = E.content.firstChild;
                le && Ve.beforeEnter(Te),
                T(Te, E, W),
                I.el = E = Te
            }
            if (ae & 16 && !(ne && (ne.innerHTML || ne.textContent))) {
                let Te = y(E.firstChild, I, E, W, $, U, Z);
                for (; Te; ) {
                    Bi();
                    const ut = Te;
                    Te = Te.nextSibling,
                    u(ut)
                }
            } else
                ae & 8 && E.textContent !== I.children && (Bi(),
                E.textContent = I.children);
            if (ne)
                if (Ne || !Z || be & 48)
                    for (const Te in ne)
                        (Ne && (Te.endsWith("value") || Te === "indeterminate") || Cs(Te) && !Ji(Te) || Te[0] === ".") && r(E, Te, null, ne[Te], void 0, void 0, W);
                else
                    ne.onClick && r(E, "onClick", null, ne.onClick, void 0, void 0, W);
            let je;
            (je = ne && ne.onVnodeBeforeMount) && cn(je, W, I),
            we && Qn(I, null, W, "beforeMount"),
            ((je = ne && ne.onVnodeMounted) || we || le) && Sv( () => {
                je && cn(je, W, I),
                le && Ve.enter(E),
                we && Qn(I, null, W, "mounted")
            }
            , $)
        }
        return E.nextSibling
    }
      , y = (E, I, W, $, U, Z, j) => {
        j = j || !!I.dynamicChildren;
        const ne = I.children
          , be = ne.length;
        for (let ae = 0; ae < be; ae++) {
            const we = j ? ne[ae] : ne[ae] = On(ne[ae]);
            E ? E = p(E, we, $, U, Z, j) : we.type === zr && !we.children ? c(we.el = i(""), W) : (Bi(),
            n(null, we, W, null, $, U, ya(W), Z))
        }
        return E
    }
      , _ = (E, I, W, $, U, Z) => {
        const {slotScopeIds: j} = I;
        j && (U = U ? U.concat(j) : j);
        const ne = s(E)
          , be = y(o(E), I, ne, W, $, U, Z);
        return be && ba(be) && be.data === "]" ? o(I.anchor = be) : (Bi(),
        c(I.anchor = f("]"), ne, be),
        be)
    }
      , R = (E, I, W, $, U, Z) => {
        if (Bi(),
        I.el = null,
        Z) {
            const be = F(E);
            for (; ; ) {
                const ae = o(E);
                if (ae && ae !== be)
                    u(ae);
                else
                    break
            }
        }
        const j = o(E)
          , ne = s(E);
        return u(E),
        n(null, I, ne, j, W, $, ya(ne), U),
        j
    }
      , F = (E, I="[", W="]") => {
        let $ = 0;
        for (; E; )
            if (E = o(E),
            E && ba(E) && (E.data === I && $++,
            E.data === W)) {
                if ($ === 0)
                    return o(E);
                $--
            }
        return E
    }
      , T = (E, I, W) => {
        const $ = I.parentNode;
        $ && $.replaceChild(E, I);
        let U = W;
        for (; U; )
            U.vnode.el === I && (U.vnode.el = U.subTree.el = E),
            U = U.parent
    }
      , A = E => E.nodeType === 1 && E.tagName.toLowerCase() === "template";
    return [h, p]
}
const Wt = Sv;
function Wv(e) {
    return Kv(e)
}
function Hv(e) {
    return Kv(e, JR)
}
function Kv(e, t) {
    const n = Gg();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: o, createElement: s, createText: u, createComment: c, setText: f, setElementText: h, parentNode: p, nextSibling: g, setScopeId: y=pn, insertStaticContent: _} = e
      , R = (S, w, V, se=null, oe=null, pe=null, Ee=void 0, me=null, he=!!w.dynamicChildren) => {
        if (S === w)
            return;
        S && !$n(S, w) && (se = Y(S),
        wt(S, oe, pe, !0),
        S = null),
        w.patchFlag === -2 && (he = !1,
        w.dynamicChildren = null);
        const {type: fe, ref: Re, shapeFlag: $e} = w;
        switch (fe) {
        case zr:
            F(S, w, V, se);
            break;
        case Ht:
            T(S, w, V, se);
            break;
        case gi:
            S == null && A(w, V, se, Ee);
            break;
        case kt:
            ae(S, w, V, se, oe, pe, Ee, me, he);
            break;
        default:
            $e & 1 ? W(S, w, V, se, oe, pe, Ee, me, he) : $e & 6 ? we(S, w, V, se, oe, pe, Ee, me, he) : ($e & 64 || $e & 128) && fe.process(S, w, V, se, oe, pe, Ee, me, he, xe)
        }
        Re != null && oe && Ya(Re, S && S.ref, pe, w || S, !w)
    }
      , F = (S, w, V, se) => {
        if (S == null)
            r(w.el = u(w.children), V, se);
        else {
            const oe = w.el = S.el;
            w.children !== S.children && f(oe, w.children)
        }
    }
      , T = (S, w, V, se) => {
        S == null ? r(w.el = c(w.children || ""), V, se) : w.el = S.el
    }
      , A = (S, w, V, se) => {
        [S.el,S.anchor] = _(S.children, w, V, se, S.el, S.anchor)
    }
      , E = ({el: S, anchor: w}, V, se) => {
        let oe;
        for (; S && S !== w; )
            oe = g(S),
            r(S, V, se),
            S = oe;
        r(w, V, se)
    }
      , I = ({el: S, anchor: w}) => {
        let V;
        for (; S && S !== w; )
            V = g(S),
            i(S),
            S = V;
        i(w)
    }
      , W = (S, w, V, se, oe, pe, Ee, me, he) => {
        w.type === "svg" ? Ee = "svg" : w.type === "math" && (Ee = "mathml"),
        S == null ? $(w, V, se, oe, pe, Ee, me, he) : j(S, w, oe, pe, Ee, me, he)
    }
      , $ = (S, w, V, se, oe, pe, Ee, me) => {
        let he, fe;
        const {props: Re, shapeFlag: $e, transition: Oe, dirs: G} = S;
        if (he = S.el = s(S.type, pe, Re && Re.is, Re),
        $e & 8 ? h(he, S.children) : $e & 16 && Z(S.children, he, null, se, oe, xl(S, pe), Ee, me),
        G && Qn(S, null, se, "created"),
        U(he, S, S.scopeId, Ee, se),
        Re) {
            for (const ke in Re)
                ke !== "value" && !Ji(ke) && o(he, ke, null, Re[ke], pe, S.children, se, oe, ge);
            "value"in Re && o(he, "value", null, Re.value, pe),
            (fe = Re.onVnodeBeforeMount) && cn(fe, se, S)
        }
        G && Qn(S, null, se, "beforeMount");
        const ee = qv(oe, Oe);
        ee && Oe.beforeEnter(he),
        r(he, w, V),
        ((fe = Re && Re.onVnodeMounted) || ee || G) && Wt( () => {
            fe && cn(fe, se, S),
            ee && Oe.enter(he),
            G && Qn(S, null, se, "mounted")
        }
        , oe)
    }
      , U = (S, w, V, se, oe) => {
        if (V && y(S, V),
        se)
            for (let pe = 0; pe < se.length; pe++)
                y(S, se[pe]);
        if (oe) {
            let pe = oe.subTree;
            if (w === pe) {
                const Ee = oe.vnode;
                U(S, Ee, Ee.scopeId, Ee.slotScopeIds, oe.parent)
            }
        }
    }
      , Z = (S, w, V, se, oe, pe, Ee, me, he=0) => {
        for (let fe = he; fe < S.length; fe++) {
            const Re = S[fe] = me ? Dr(S[fe]) : On(S[fe]);
            R(null, Re, w, V, se, oe, pe, Ee, me)
        }
    }
      , j = (S, w, V, se, oe, pe, Ee) => {
        const me = w.el = S.el;
        let {patchFlag: he, dynamicChildren: fe, dirs: Re} = w;
        he |= S.patchFlag & 16;
        const $e = S.props || ct
          , Oe = w.props || ct;
        let G;
        if (V && li(V, !1),
        (G = Oe.onVnodeBeforeUpdate) && cn(G, V, w, S),
        Re && Qn(w, S, V, "beforeUpdate"),
        V && li(V, !0),
        fe ? ne(S.dynamicChildren, fe, me, V, se, xl(w, oe), pe) : Ee || Te(S, w, me, null, V, se, xl(w, oe), pe, !1),
        he > 0) {
            if (he & 16)
                be(me, w, $e, Oe, V, se, oe);
            else if (he & 2 && $e.class !== Oe.class && o(me, "class", null, Oe.class, oe),
            he & 4 && o(me, "style", $e.style, Oe.style, oe),
            he & 8) {
                const ee = w.dynamicProps;
                for (let ke = 0; ke < ee.length; ke++) {
                    const x = ee[ke]
                      , k = $e[x]
                      , ie = Oe[x];
                    (ie !== k || x === "value") && o(me, x, k, ie, oe, S.children, V, se, ge)
                }
            }
            he & 1 && S.children !== w.children && h(me, w.children)
        } else
            !Ee && fe == null && be(me, w, $e, Oe, V, se, oe);
        ((G = Oe.onVnodeUpdated) || Re) && Wt( () => {
            G && cn(G, V, w, S),
            Re && Qn(w, S, V, "updated")
        }
        , se)
    }
      , ne = (S, w, V, se, oe, pe, Ee) => {
        for (let me = 0; me < w.length; me++) {
            const he = S[me]
              , fe = w[me]
              , Re = he.el && (he.type === kt || !$n(he, fe) || he.shapeFlag & 70) ? p(he.el) : V;
            R(he, fe, Re, null, se, oe, pe, Ee, !0)
        }
    }
      , be = (S, w, V, se, oe, pe, Ee) => {
        if (V !== se) {
            if (V !== ct)
                for (const me in V)
                    !Ji(me) && !(me in se) && o(S, me, V[me], null, Ee, w.children, oe, pe, ge);
            for (const me in se) {
                if (Ji(me))
                    continue;
                const he = se[me]
                  , fe = V[me];
                he !== fe && me !== "value" && o(S, me, fe, he, Ee, w.children, oe, pe, ge)
            }
            "value"in se && o(S, "value", V.value, se.value, Ee)
        }
    }
      , ae = (S, w, V, se, oe, pe, Ee, me, he) => {
        const fe = w.el = S ? S.el : u("")
          , Re = w.anchor = S ? S.anchor : u("");
        let {patchFlag: $e, dynamicChildren: Oe, slotScopeIds: G} = w;
        G && (me = me ? me.concat(G) : G),
        S == null ? (r(fe, V, se),
        r(Re, V, se),
        Z(w.children || [], V, Re, oe, pe, Ee, me, he)) : $e > 0 && $e & 64 && Oe && S.dynamicChildren ? (ne(S.dynamicChildren, Oe, V, oe, pe, Ee, me),
        (w.key != null || oe && w === oe.subTree) && jf(S, w, !0)) : Te(S, w, V, Re, oe, pe, Ee, me, he)
    }
      , we = (S, w, V, se, oe, pe, Ee, me, he) => {
        w.slotScopeIds = me,
        S == null ? w.shapeFlag & 512 ? oe.ctx.activate(w, V, se, Ee, he) : Ve(w, V, se, oe, pe, Ee, he) : Ne(S, w, he)
    }
      , Ve = (S, w, V, se, oe, pe, Ee) => {
        const me = S.component = ly(S, se, oe);
        if (Ms(S) && (me.ctx.renderer = xe),
        fy(me),
        me.asyncDep) {
            if (oe && oe.registerDep(me, le, Ee),
            !S.el) {
                const he = me.subTree = gt(Ht);
                T(null, he, w, V)
            }
        } else
            le(me, S, w, V, oe, pe, Ee)
    }
      , Ne = (S, w, V) => {
        const se = w.component = S.component;
        if (iR(S, w, V))
            if (se.asyncDep && !se.asyncResolved) {
                je(se, w, V);
                return
            } else
                se.next = w,
                Y1(se.update),
                se.effect.dirty = !0,
                se.update();
        else
            w.el = S.el,
            se.vnode = w
    }
      , le = (S, w, V, se, oe, pe, Ee) => {
        const me = () => {
            if (S.isMounted) {
                let {next: Re, bu: $e, u: Oe, parent: G, vnode: ee} = S;
                {
                    const _e = Gv(S);
                    if (_e) {
                        Re && (Re.el = ee.el,
                        je(S, Re, Ee)),
                        _e.asyncDep.then( () => {
                            S.isUnmounted || me()
                        }
                        );
                        return
                    }
                }
                let ke = Re, x;
                li(S, !1),
                Re ? (Re.el = ee.el,
                je(S, Re, Ee)) : Re = ee,
                $e && Xi($e),
                (x = Re.props && Re.props.onVnodeBeforeUpdate) && cn(x, G, Re, ee),
                li(S, !0);
                const k = xa(S)
                  , ie = S.subTree;
                S.subTree = k,
                R(ie, k, p(ie.el), Y(ie), S, oe, pe),
                Re.el = k.el,
                ke === null && Lf(S, k.el),
                Oe && Wt(Oe, oe),
                (x = Re.props && Re.props.onVnodeUpdated) && Wt( () => cn(x, G, Re, ee), oe)
            } else {
                let Re;
                const {el: $e, props: Oe} = w
                  , {bm: G, m: ee, parent: ke} = S
                  , x = pi(w);
                if (li(S, !1),
                G && Xi(G),
                !x && (Re = Oe && Oe.onVnodeBeforeMount) && cn(Re, ke, w),
                li(S, !0),
                $e && Ie) {
                    const k = () => {
                        S.subTree = xa(S),
                        Ie($e, S.subTree, S, oe, null)
                    }
                    ;
                    x ? w.type.__asyncLoader().then( () => !S.isUnmounted && k()) : k()
                } else {
                    const k = S.subTree = xa(S);
                    R(null, k, V, se, S, oe, pe),
                    w.el = k.el
                }
                if (ee && Wt(ee, oe),
                !x && (Re = Oe && Oe.onVnodeMounted)) {
                    const k = w;
                    Wt( () => cn(Re, ke, k), oe)
                }
                (w.shapeFlag & 256 || ke && pi(ke.vnode) && ke.vnode.shapeFlag & 256) && S.a && Wt(S.a, oe),
                S.isMounted = !0,
                w = V = se = null
            }
        }
          , he = S.effect = new lo(me,pn, () => Tu(fe),S.scope)
          , fe = S.update = () => {
            he.dirty && he.run()
        }
        ;
        fe.id = S.uid,
        li(S, !0),
        fe()
    }
      , je = (S, w, V) => {
        w.component = S;
        const se = S.vnode.props;
        S.vnode = w,
        S.next = null,
        HR(S, w.props, se, V),
        GR(S, w.children, V),
        Zr(),
        Jh(S),
        ei()
    }
      , Te = (S, w, V, se, oe, pe, Ee, me, he=!1) => {
        const fe = S && S.children
          , Re = S ? S.shapeFlag : 0
          , $e = w.children
          , {patchFlag: Oe, shapeFlag: G} = w;
        if (Oe > 0) {
            if (Oe & 128) {
                dt(fe, $e, V, se, oe, pe, Ee, me, he);
                return
            } else if (Oe & 256) {
                ut(fe, $e, V, se, oe, pe, Ee, me, he);
                return
            }
        }
        G & 8 ? (Re & 16 && ge(fe, oe, pe),
        $e !== fe && h(V, $e)) : Re & 16 ? G & 16 ? dt(fe, $e, V, se, oe, pe, Ee, me, he) : ge(fe, oe, pe, !0) : (Re & 8 && h(V, ""),
        G & 16 && Z($e, V, se, oe, pe, Ee, me, he))
    }
      , ut = (S, w, V, se, oe, pe, Ee, me, he) => {
        S = S || zi,
        w = w || zi;
        const fe = S.length
          , Re = w.length
          , $e = Math.min(fe, Re);
        let Oe;
        for (Oe = 0; Oe < $e; Oe++) {
            const G = w[Oe] = he ? Dr(w[Oe]) : On(w[Oe]);
            R(S[Oe], G, V, null, oe, pe, Ee, me, he)
        }
        fe > Re ? ge(S, oe, pe, !0, !1, $e) : Z(w, V, se, oe, pe, Ee, me, he, $e)
    }
      , dt = (S, w, V, se, oe, pe, Ee, me, he) => {
        let fe = 0;
        const Re = w.length;
        let $e = S.length - 1
          , Oe = Re - 1;
        for (; fe <= $e && fe <= Oe; ) {
            const G = S[fe]
              , ee = w[fe] = he ? Dr(w[fe]) : On(w[fe]);
            if ($n(G, ee))
                R(G, ee, V, null, oe, pe, Ee, me, he);
            else
                break;
            fe++
        }
        for (; fe <= $e && fe <= Oe; ) {
            const G = S[$e]
              , ee = w[Oe] = he ? Dr(w[Oe]) : On(w[Oe]);
            if ($n(G, ee))
                R(G, ee, V, null, oe, pe, Ee, me, he);
            else
                break;
            $e--,
            Oe--
        }
        if (fe > $e) {
            if (fe <= Oe) {
                const G = Oe + 1
                  , ee = G < Re ? w[G].el : se;
                for (; fe <= Oe; )
                    R(null, w[fe] = he ? Dr(w[fe]) : On(w[fe]), V, ee, oe, pe, Ee, me, he),
                    fe++
            }
        } else if (fe > Oe)
            for (; fe <= $e; )
                wt(S[fe], oe, pe, !0),
                fe++;
        else {
            const G = fe
              , ee = fe
              , ke = new Map;
            for (fe = ee; fe <= Oe; fe++) {
                const He = w[fe] = he ? Dr(w[fe]) : On(w[fe]);
                He.key != null && ke.set(He.key, fe)
            }
            let x, k = 0;
            const ie = Oe - ee + 1;
            let _e = !1
              , De = 0;
            const Be = new Array(ie);
            for (fe = 0; fe < ie; fe++)
                Be[fe] = 0;
            for (fe = G; fe <= $e; fe++) {
                const He = S[fe];
                if (k >= ie) {
                    wt(He, oe, pe, !0);
                    continue
                }
                let Ye;
                if (He.key != null)
                    Ye = ke.get(He.key);
                else
                    for (x = ee; x <= Oe; x++)
                        if (Be[x - ee] === 0 && $n(He, w[x])) {
                            Ye = x;
                            break
                        }
                Ye === void 0 ? wt(He, oe, pe, !0) : (Be[Ye - ee] = fe + 1,
                Ye >= De ? De = Ye : _e = !0,
                R(He, w[Ye], V, null, oe, pe, Ee, me, he),
                k++)
            }
            const ue = _e ? XR(Be) : zi;
            for (x = ue.length - 1,
            fe = ie - 1; fe >= 0; fe--) {
                const He = ee + fe
                  , Ye = w[He]
                  , Et = He + 1 < Re ? w[He + 1].el : se;
                Be[fe] === 0 ? R(null, Ye, V, Et, oe, pe, Ee, me, he) : _e && (x < 0 || fe !== ue[x] ? it(Ye, V, Et, 2) : x--)
            }
        }
    }
      , it = (S, w, V, se, oe=null) => {
        const {el: pe, type: Ee, transition: me, children: he, shapeFlag: fe} = S;
        if (fe & 6) {
            it(S.component.subTree, w, V, se);
            return
        }
        if (fe & 128) {
            S.suspense.move(w, V, se);
            return
        }
        if (fe & 64) {
            Ee.move(S, w, V, xe);
            return
        }
        if (Ee === kt) {
            r(pe, w, V);
            for (let $e = 0; $e < he.length; $e++)
                it(he[$e], w, V, se);
            r(S.anchor, w, V);
            return
        }
        if (Ee === gi) {
            E(S, w, V);
            return
        }
        if (se !== 2 && fe & 1 && me)
            if (se === 0)
                me.beforeEnter(pe),
                r(pe, w, V),
                Wt( () => me.enter(pe), oe);
            else {
                const {leave: $e, delayLeave: Oe, afterLeave: G} = me
                  , ee = () => r(pe, w, V)
                  , ke = () => {
                    $e(pe, () => {
                        ee(),
                        G && G()
                    }
                    )
                }
                ;
                Oe ? Oe(pe, ee, ke) : ke()
            }
        else
            r(pe, w, V)
    }
      , wt = (S, w, V, se=!1, oe=!1) => {
        const {type: pe, props: Ee, ref: me, children: he, dynamicChildren: fe, shapeFlag: Re, patchFlag: $e, dirs: Oe, memoIndex: G} = S;
        if ($e === -2 && (oe = !1),
        me != null && Ya(me, null, V, S, !0),
        G != null && (w.renderCache[G] = void 0),
        Re & 256) {
            w.ctx.deactivate(S);
            return
        }
        const ee = Re & 1 && Oe
          , ke = !pi(S);
        let x;
        if (ke && (x = Ee && Ee.onVnodeBeforeUnmount) && cn(x, w, S),
        Re & 6)
            qt(S.component, V, se);
        else {
            if (Re & 128) {
                S.suspense.unmount(V, se);
                return
            }
            ee && Qn(S, null, w, "beforeUnmount"),
            Re & 64 ? S.type.remove(S, w, V, xe, se) : fe && (pe !== kt || $e > 0 && $e & 64) ? ge(fe, w, V, !1, !0) : (pe === kt && $e & 384 || !oe && Re & 16) && ge(he, w, V),
            se && Tt(S)
        }
        (ke && (x = Ee && Ee.onVnodeUnmounted) || ee) && Wt( () => {
            x && cn(x, w, S),
            ee && Qn(S, null, w, "unmounted")
        }
        , V)
    }
      , Tt = S => {
        const {type: w, el: V, anchor: se, transition: oe} = S;
        if (w === kt) {
            ht(V, se);
            return
        }
        if (w === gi) {
            I(S);
            return
        }
        const pe = () => {
            i(V),
            oe && !oe.persisted && oe.afterLeave && oe.afterLeave()
        }
        ;
        if (S.shapeFlag & 1 && oe && !oe.persisted) {
            const {leave: Ee, delayLeave: me} = oe
              , he = () => Ee(V, pe);
            me ? me(S.el, pe, he) : he()
        } else
            pe()
    }
      , ht = (S, w) => {
        let V;
        for (; S !== w; )
            V = g(S),
            i(S),
            S = V;
        i(w)
    }
      , qt = (S, w, V) => {
        const {bum: se, scope: oe, update: pe, subTree: Ee, um: me, m: he, a: fe} = S;
        Ja(he),
        Ja(fe),
        se && Xi(se),
        oe.stop(),
        pe && (pe.active = !1,
        wt(Ee, S, w, V)),
        me && Wt(me, w),
        Wt( () => {
            S.isUnmounted = !0
        }
        , w),
        w && w.pendingBranch && !w.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === w.pendingId && (w.deps--,
        w.deps === 0 && w.resolve())
    }
      , ge = (S, w, V, se=!1, oe=!1, pe=0) => {
        for (let Ee = pe; Ee < S.length; Ee++)
            wt(S[Ee], w, V, se, oe)
    }
      , Y = S => S.shapeFlag & 6 ? Y(S.component.subTree) : S.shapeFlag & 128 ? S.suspense.next() : g(S.anchor || S.el);
    let ve = !1;
    const z = (S, w, V) => {
        S == null ? w._vnode && wt(w._vnode, null, null, !0) : R(w._vnode || null, S, w, null, null, null, V),
        ve || (ve = !0,
        Jh(),
        Ga(),
        ve = !1),
        w._vnode = S
    }
      , xe = {
        p: R,
        um: wt,
        m: it,
        r: Tt,
        mt: Ve,
        mc: Z,
        pc: Te,
        pbc: ne,
        n: Y,
        o: e
    };
    let Ue, Ie;
    return t && ([Ue,Ie] = t(xe)),
    {
        render: z,
        hydrate: Ue,
        createApp: UR(z, Ue)
    }
}
function xl({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function li({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function qv(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function jf(e, t, n=!1) {
    const r = e.children
      , i = t.children;
    if (Le(r) && Le(i))
        for (let o = 0; o < r.length; o++) {
            const s = r[o];
            let u = i[o];
            u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[o] = Dr(i[o]),
            u.el = s.el),
            !n && u.patchFlag !== -2 && jf(s, u)),
            u.type === zr && (u.el = s.el)
        }
}
function XR(e) {
    const t = e.slice()
      , n = [0];
    let r, i, o, s, u;
    const c = e.length;
    for (r = 0; r < c; r++) {
        const f = e[r];
        if (f !== 0) {
            if (i = n[n.length - 1],
            e[i] < f) {
                t[r] = i,
                n.push(r);
                continue
            }
            for (o = 0,
            s = n.length - 1; o < s; )
                u = o + s >> 1,
                e[n[u]] < f ? o = u + 1 : s = u;
            f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]),
            n[o] = r)
        }
    }
    for (o = n.length,
    s = n[o - 1]; o-- > 0; )
        n[o] = s,
        s = t[s];
    return n
}
function Gv(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Gv(t)
}
function Ja(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].active = !1
}
const zv = Symbol.for("v-scx")
  , Yv = () => Nt(zv);
function Bf(e, t) {
    return Ns(e, null, t)
}
function Jv(e, t) {
    return Ns(e, null, {
        flush: "post"
    })
}
function Xv(e, t) {
    return Ns(e, null, {
        flush: "sync"
    })
}
const _a = {};
function tt(e, t, n) {
    return Ns(e, t, n)
}
function Ns(e, t, {immediate: n, deep: r, flush: i, once: o, onTrack: s, onTrigger: u}=ct) {
    if (t && o) {
        const $ = t;
        t = (...U) => {
            $(...U),
            W()
        }
    }
    const c = $t
      , f = $ => r === !0 ? $ : Br($, r === !1 ? 1 : void 0);
    let h, p = !1, g = !1;
    if (at(e) ? (h = () => e.value,
    p = cs(e)) : pr(e) ? (h = () => f(e),
    p = !0) : Le(e) ? (g = !0,
    p = e.some($ => pr($) || cs($)),
    h = () => e.map($ => {
        if (at($))
            return $.value;
        if (pr($))
            return f($);
        if (We($))
            return mr($, c, 2)
    }
    )) : We(e) ? t ? h = () => mr(e, c, 2) : h = () => (y && y(),
    An(e, c, 3, [_])) : h = pn,
    t && r) {
        const $ = h;
        h = () => Br($())
    }
    let y, _ = $ => {
        y = E.onStop = () => {
            mr($, c, 4),
            y = E.onStop = void 0
        }
    }
    , R;
    if (ks)
        if (_ = pn,
        t ? n && An(t, c, 3, [h(), g ? [] : void 0, _]) : h(),
        i === "sync") {
            const $ = Yv();
            R = $.__watcherHandles || ($.__watcherHandles = [])
        } else
            return pn;
    let F = g ? new Array(e.length).fill(_a) : _a;
    const T = () => {
        if (!(!E.active || !E.dirty))
            if (t) {
                const $ = E.run();
                (r || p || (g ? $.some( (U, Z) => Hn(U, F[Z])) : Hn($, F))) && (y && y(),
                An(t, c, 3, [$, F === _a ? void 0 : g && F[0] === _a ? [] : F, _]),
                F = $)
            } else
                E.run()
    }
    ;
    T.allowRecurse = !!t;
    let A;
    i === "sync" ? A = T : i === "post" ? A = () => Wt(T, c && c.suspense) : (T.pre = !0,
    c && (T.id = c.uid),
    A = () => Tu(T));
    const E = new lo(h,pn,A)
      , I = _u()
      , W = () => {
        E.stop(),
        I && yf(I.effects, E)
    }
    ;
    return t ? n ? T() : F = E.run() : i === "post" ? Wt(E.run.bind(E), c && c.suspense) : E.run(),
    R && R.push(W),
    W
}
function QR(e, t, n) {
    const r = this.proxy
      , i = At(e) ? e.includes(".") ? Qv(r, e) : () => r[e] : e.bind(r, r);
    let o;
    We(t) ? o = t : (o = t.handler,
    n = t);
    const s = wi(this)
      , u = Ns(i, o.bind(r), n);
    return s(),
    u
}
function Qv(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
function Br(e, t=1 / 0, n) {
    if (t <= 0 || !ft(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    at(e))
        Br(e.value, t, n);
    else if (Le(e))
        for (let r = 0; r < e.length; r++)
            Br(e[r], t, n);
    else if (Ii(e) || Yi(e))
        e.forEach(r => {
            Br(r, t, n)
        }
        );
    else if (Kg(e)) {
        for (const r in e)
            Br(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && Br(e[r], t, n)
    }
    return e
}
const Ms = e => e.type.__isKeepAlive
  , ZR = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = Ft()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const A = t.default && t.default();
                return A && A.length === 1 ? A[0] : A
            }
            ;
        const i = new Map
          , o = new Set;
        let s = null;
        const u = n.suspense
          , {renderer: {p: c, m: f, um: h, o: {createElement: p}}} = r
          , g = p("div");
        r.activate = (A, E, I, W, $) => {
            const U = A.component;
            f(A, E, I, 0, u),
            c(U.vnode, A, E, I, U, u, W, A.slotScopeIds, $),
            Wt( () => {
                U.isDeactivated = !1,
                U.a && Xi(U.a);
                const Z = A.props && A.props.onVnodeMounted;
                Z && cn(Z, U.parent, A)
            }
            , u)
        }
        ,
        r.deactivate = A => {
            const E = A.component;
            Ja(E.m),
            Ja(E.a),
            f(A, g, null, 1, u),
            Wt( () => {
                E.da && Xi(E.da);
                const I = A.props && A.props.onVnodeUnmounted;
                I && cn(I, E.parent, A),
                E.isDeactivated = !0
            }
            , u)
        }
        ;
        function y(A) {
            Pl(A),
            h(A, n, u, !0)
        }
        function _(A) {
            i.forEach( (E, I) => {
                const W = yc(E.type);
                W && (!A || !A(W)) && R(I)
            }
            )
        }
        function R(A) {
            const E = i.get(A);
            !s || !$n(E, s) ? y(E) : s && Pl(s),
            i.delete(A),
            o.delete(A)
        }
        tt( () => [e.include, e.exclude], ([A,E]) => {
            A && _(I => Ko(A, I)),
            E && _(I => !Ko(E, I))
        }
        , {
            flush: "post",
            deep: !0
        });
        let F = null;
        const T = () => {
            F != null && (oc(n.subTree.type) ? Wt( () => {
                i.set(F, wa(n.subTree))
            }
            , n.subTree.suspense) : i.set(F, wa(n.subTree)))
        }
        ;
        return un(T),
        Fs(T),
        Ls( () => {
            i.forEach(A => {
                const {subTree: E, suspense: I} = n
                  , W = wa(E);
                if (A.type === W.type && A.key === W.key) {
                    Pl(W);
                    const $ = W.component.da;
                    $ && Wt($, I);
                    return
                }
                y(A)
            }
            )
        }
        ),
        () => {
            if (F = null,
            !t.default)
                return null;
            const A = t.default()
              , E = A[0];
            if (A.length > 1)
                return s = null,
                A;
            if (!Yr(E) || !(E.shapeFlag & 4) && !(E.shapeFlag & 128))
                return s = null,
                E;
            let I = wa(E);
            const W = I.type
              , $ = yc(pi(I) ? I.type.__asyncResolved || {} : W)
              , {include: U, exclude: Z, max: j} = e;
            if (U && (!$ || !Ko(U, $)) || Z && $ && Ko(Z, $))
                return s = I,
                E;
            const ne = I.key == null ? W : I.key
              , be = i.get(ne);
            return I.el && (I = tr(I),
            E.shapeFlag & 128 && (E.ssContent = I)),
            F = ne,
            be ? (I.el = be.el,
            I.component = be.component,
            I.transition && Gr(I, I.transition),
            I.shapeFlag |= 512,
            o.delete(ne),
            o.add(ne)) : (o.add(ne),
            j && o.size > parseInt(j, 10) && R(o.values().next().value)),
            I.shapeFlag |= 256,
            s = I,
            oc(E.type) ? E : I
        }
    }
}
  , eC = ZR;
function Ko(e, t) {
    return Le(e) ? e.some(n => Ko(n, t)) : At(e) ? e.split(",").includes(t) : ZT(e) ? e.test(t) : !1
}
function Vf(e, t) {
    Zv(e, "a", t)
}
function Uf(e, t) {
    Zv(e, "da", t)
}
function Zv(e, t, n=$t) {
    const r = e.__wdc || (e.__wdc = () => {
        let i = n;
        for (; i; ) {
            if (i.isDeactivated)
                return;
            i = i.parent
        }
        return e()
    }
    );
    if (xu(t, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            Ms(i.parent.vnode) && tC(r, t, n, i),
            i = i.parent
    }
}
function tC(e, t, n, r) {
    const i = xu(t, e, r, !0);
    nr( () => {
        yf(r[t], i)
    }
    , n)
}
function Pl(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function wa(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
const $r = Symbol("_leaveCb")
  , Ea = Symbol("_enterCb");
function Wf() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return un( () => {
        e.isMounted = !0
    }
    ),
    Ls( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const Pn = [Function, Array]
  , Hf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Pn,
    onEnter: Pn,
    onAfterEnter: Pn,
    onEnterCancelled: Pn,
    onBeforeLeave: Pn,
    onLeave: Pn,
    onAfterLeave: Pn,
    onLeaveCancelled: Pn,
    onBeforeAppear: Pn,
    onAppear: Pn,
    onAfterAppear: Pn,
    onAppearCancelled: Pn
}
  , ey = e => {
    const t = e.subTree;
    return t.component ? ey(t.component) : t
}
  , nC = {
    name: "BaseTransition",
    props: Hf,
    setup(e, {slots: t}) {
        const n = Ft()
          , r = Wf();
        return () => {
            const i = t.default && Pu(t.default(), !0);
            if (!i || !i.length)
                return;
            let o = i[0];
            if (i.length > 1) {
                for (const g of i)
                    if (g.type !== Ht) {
                        o = g;
                        break
                    }
            }
            const s = et(e)
              , {mode: u} = s;
            if (r.isLeaving)
                return Il(o);
            const c = up(o);
            if (!c)
                return Il(o);
            let f = fo(c, s, r, n, g => f = g);
            Gr(c, f);
            const h = n.subTree
              , p = h && up(h);
            if (p && p.type !== Ht && !$n(c, p) && ey(n).type !== Ht) {
                const g = fo(p, s, r, n);
                if (Gr(p, g),
                u === "out-in" && c.type !== Ht)
                    return r.isLeaving = !0,
                    g.afterLeave = () => {
                        r.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Il(o);
                u === "in-out" && c.type !== Ht && (g.delayLeave = (y, _, R) => {
                    const F = ny(r, p);
                    F[String(p.key)] = p,
                    y[$r] = () => {
                        _(),
                        y[$r] = void 0,
                        delete f.delayedLeave
                    }
                    ,
                    f.delayedLeave = R
                }
                )
            }
            return o
        }
    }
}
  , ty = nC;
function ny(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function fo(e, t, n, r, i) {
    const {appear: o, mode: s, persisted: u=!1, onBeforeEnter: c, onEnter: f, onAfterEnter: h, onEnterCancelled: p, onBeforeLeave: g, onLeave: y, onAfterLeave: _, onLeaveCancelled: R, onBeforeAppear: F, onAppear: T, onAfterAppear: A, onAppearCancelled: E} = t
      , I = String(e.key)
      , W = ny(n, e)
      , $ = (j, ne) => {
        j && An(j, r, 9, ne)
    }
      , U = (j, ne) => {
        const be = ne[1];
        $(j, ne),
        Le(j) ? j.every(ae => ae.length <= 1) && be() : j.length <= 1 && be()
    }
      , Z = {
        mode: s,
        persisted: u,
        beforeEnter(j) {
            let ne = c;
            if (!n.isMounted)
                if (o)
                    ne = F || c;
                else
                    return;
            j[$r] && j[$r](!0);
            const be = W[I];
            be && $n(e, be) && be.el[$r] && be.el[$r](),
            $(ne, [j])
        },
        enter(j) {
            let ne = f
              , be = h
              , ae = p;
            if (!n.isMounted)
                if (o)
                    ne = T || f,
                    be = A || h,
                    ae = E || p;
                else
                    return;
            let we = !1;
            const Ve = j[Ea] = Ne => {
                we || (we = !0,
                Ne ? $(ae, [j]) : $(be, [j]),
                Z.delayedLeave && Z.delayedLeave(),
                j[Ea] = void 0)
            }
            ;
            ne ? U(ne, [j, Ve]) : Ve()
        },
        leave(j, ne) {
            const be = String(e.key);
            if (j[Ea] && j[Ea](!0),
            n.isUnmounting)
                return ne();
            $(g, [j]);
            let ae = !1;
            const we = j[$r] = Ve => {
                ae || (ae = !0,
                ne(),
                Ve ? $(R, [j]) : $(_, [j]),
                j[$r] = void 0,
                W[be] === e && delete W[be])
            }
            ;
            W[be] = e,
            y ? U(y, [j, we]) : we()
        },
        clone(j) {
            const ne = fo(j, t, n, r, i);
            return i && i(ne),
            ne
        }
    };
    return Z
}
function Il(e) {
    if (Ms(e))
        return e = tr(e),
        e.children = null,
        e
}
function up(e) {
    if (!Ms(e))
        return e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && We(n.default))
            return n.default()
    }
}
function Gr(e, t) {
    e.shapeFlag & 6 && e.component ? Gr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Pu(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        const u = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
        s.type === kt ? (s.patchFlag & 128 && i++,
        r = r.concat(Pu(s.children, t, u))) : (t || s.type !== Ht) && r.push(u != null ? tr(s, {
            key: u
        }) : s)
    }
    if (i > 1)
        for (let o = 0; o < r.length; o++)
            r[o].patchFlag = -2;
    return r
}
const rC = e => e.__isTeleport
  , Xo = e => e && (e.disabled || e.disabled === "")
  , lp = e => typeof SVGElement != "undefined" && e instanceof SVGElement
  , cp = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , dc = (e, t) => {
    const n = e && e.to;
    return At(n) ? t ? t(n) : null : n
}
  , iC = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, s, u, c, f) {
        const {mc: h, pc: p, pbc: g, o: {insert: y, querySelector: _, createText: R, createComment: F}} = f
          , T = Xo(t.props);
        let {shapeFlag: A, children: E, dynamicChildren: I} = t;
        if (e == null) {
            const W = t.el = R("")
              , $ = t.anchor = R("");
            y(W, n, r),
            y($, n, r);
            const U = t.target = dc(t.props, _)
              , Z = t.targetAnchor = R("");
            U && (y(Z, U),
            s === "svg" || lp(U) ? s = "svg" : (s === "mathml" || cp(U)) && (s = "mathml"));
            const j = (ne, be) => {
                A & 16 && h(E, ne, be, i, o, s, u, c)
            }
            ;
            T ? j(n, $) : U && j(U, Z)
        } else {
            t.el = e.el;
            const W = t.anchor = e.anchor
              , $ = t.target = e.target
              , U = t.targetAnchor = e.targetAnchor
              , Z = Xo(e.props)
              , j = Z ? n : $
              , ne = Z ? W : U;
            if (s === "svg" || lp($) ? s = "svg" : (s === "mathml" || cp($)) && (s = "mathml"),
            I ? (g(e.dynamicChildren, I, j, i, o, s, u),
            jf(e, t, !0)) : c || p(e, t, j, ne, i, o, s, u, !1),
            T)
                Z ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Oa(t, n, W, f, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const be = t.target = dc(t.props, _);
                be && Oa(t, be, null, f, 0)
            } else
                Z && Oa(t, $, U, f, 1)
        }
        ry(t)
    },
    remove(e, t, n, {um: r, o: {remove: i}}, o) {
        const {shapeFlag: s, children: u, anchor: c, targetAnchor: f, target: h, props: p} = e;
        if (h && i(f),
        o && i(c),
        s & 16) {
            const g = o || !Xo(p);
            for (let y = 0; y < u.length; y++) {
                const _ = u[y];
                r(_, t, n, g, !!_.dynamicChildren)
            }
        }
    },
    move: Oa,
    hydrate: oC
};
function Oa(e, t, n, {o: {insert: r}, m: i}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: u, shapeFlag: c, children: f, props: h} = e
      , p = o === 2;
    if (p && r(s, t, n),
    (!p || Xo(h)) && c & 16)
        for (let g = 0; g < f.length; g++)
            i(f[g], t, n, 2);
    p && r(u, t, n)
}
function oC(e, t, n, r, i, o, {o: {nextSibling: s, parentNode: u, querySelector: c}}, f) {
    const h = t.target = dc(t.props, c);
    if (h) {
        const p = h._lpa || h.firstChild;
        if (t.shapeFlag & 16)
            if (Xo(t.props))
                t.anchor = f(s(e), t, u(e), n, r, i, o),
                t.targetAnchor = p;
            else {
                t.anchor = s(e);
                let g = p;
                for (; g; )
                    if (g = s(g),
                    g && g.nodeType === 8 && g.data === "teleport anchor") {
                        t.targetAnchor = g,
                        h._lpa = t.targetAnchor && s(t.targetAnchor);
                        break
                    }
                f(p, t, h, n, r, i, o)
            }
        ry(t)
    }
    return t.anchor && s(t.anchor)
}
const sC = iC;
function ry(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const kt = Symbol.for("v-fgt")
  , zr = Symbol.for("v-txt")
  , Ht = Symbol.for("v-cmt")
  , gi = Symbol.for("v-stc")
  , Qo = [];
let mn = null;
function Iu(e=!1) {
    Qo.push(mn = e ? null : [])
}
function iy() {
    Qo.pop(),
    mn = Qo[Qo.length - 1] || null
}
let _i = 1;
function hc(e) {
    _i += e
}
function oy(e) {
    return e.dynamicChildren = _i > 0 ? mn || zi : null,
    iy(),
    _i > 0 && mn && mn.push(e),
    e
}
function aC(e, t, n, r, i, o) {
    return oy(qf(e, t, n, r, i, o, !0))
}
function Kf(e, t, n, r, i) {
    return oy(gt(e, t, n, r, i, !0))
}
function Yr(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function $n(e, t) {
    return e.type === t.type && e.key === t.key
}
function uC(e) {}
const sy = ({key: e}) => e != null ? e : null
  , Pa = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? At(e) || at(e) || We(e) ? {
    i: Dt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function qf(e, t=null, n=null, r=0, i=null, o=e === kt ? 0 : 1, s=!1, u=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && sy(t),
        ref: t && Pa(t),
        scopeId: Cu,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: Dt
    };
    return u ? (zf(c, n),
    o & 128 && e.normalize(c)) : n && (c.shapeFlag |= At(n) ? 8 : 16),
    _i > 0 && !s && mn && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && mn.push(c),
    c
}
const gt = lC;
function lC(e, t=null, n=null, r=0, i=null, o=!1) {
    if ((!e || e === Ev) && (e = Ht),
    Yr(e)) {
        const u = tr(e, t, !0);
        return n && zf(u, n),
        _i > 0 && !o && mn && (u.shapeFlag & 6 ? mn[mn.indexOf(e)] = u : mn.push(u)),
        u.patchFlag = -2,
        u
    }
    if (yC(e) && (e = e.__vccOpts),
    t) {
        t = ay(t);
        let {class: u, style: c} = t;
        u && !At(u) && (t.class = Is(u)),
        ft(c) && (Tf(c) && !Le(c) && (c = _t({}, c)),
        t.style = Ps(c))
    }
    const s = At(e) ? 1 : oc(e) ? 128 : rC(e) ? 64 : ft(e) ? 4 : We(e) ? 2 : 0;
    return qf(e, t, n, r, i, s, o, !0)
}
function ay(e) {
    return e ? Tf(e) || $v(e) ? _t({}, e) : e : null
}
function tr(e, t, n=!1, r=!1) {
    const {props: i, ref: o, patchFlag: s, children: u, transition: c} = e
      , f = t ? uy(i || {}, t) : i
      , h = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: f,
        key: f && sy(f),
        ref: t && t.ref ? n && o ? Le(o) ? o.concat(Pa(t)) : [o, Pa(t)] : Pa(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: u,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== kt ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && tr(e.ssContent),
        ssFallback: e.ssFallback && tr(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && r && Gr(h, c.clone(h)),
    h
}
function Gf(e=" ", t=0) {
    return gt(zr, null, e, t)
}
function cC(e, t) {
    const n = gt(gi, null, e);
    return n.staticCount = t,
    n
}
function fC(e="", t=!1) {
    return t ? (Iu(),
    Kf(Ht, null, e)) : gt(Ht, null, e)
}
function On(e) {
    return e == null || typeof e == "boolean" ? gt(Ht) : Le(e) ? gt(kt, null, e.slice()) : typeof e == "object" ? Dr(e) : gt(zr, null, String(e))
}
function Dr(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : tr(e)
}
function zf(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (Le(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1),
            zf(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !$v(t) ? t._ctx = Dt : i === 3 && Dt && (Dt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        We(t) ? (t = {
            default: t,
            _ctx: Dt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [Gf(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function uy(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const i in r)
            if (i === "class")
                t.class !== r.class && (t.class = Is([t.class, r.class]));
            else if (i === "style")
                t.style = Ps([t.style, r.style]);
            else if (Cs(i)) {
                const o = t[i]
                  , s = r[i];
                s && o !== s && !(Le(o) && o.includes(s)) && (t[i] = o ? [].concat(o, s) : s)
            } else
                i !== "" && (t[i] = r[i])
    }
    return t
}
function cn(e, t, n, r=null) {
    An(e, t, 7, [n, r])
}
const dC = Lv();
let hC = 0;
function ly(e, t, n) {
    const r = e.type
      , i = (t ? t.appContext : e.appContext) || dC
      , o = {
        uid: hC++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new wf(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: jv(r, i),
        emitsOptions: wv(r, i),
        emit: null,
        emitted: null,
        propsDefaults: ct,
        inheritAttrs: r.inheritAttrs,
        ctx: ct,
        data: ct,
        props: ct,
        attrs: ct,
        slots: ct,
        refs: ct,
        setupState: ct,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = X1.bind(null, o),
    e.ce && e.ce(o),
    o
}
let $t = null;
const Ft = () => $t || Dt;
let Xa, pc;
{
    const e = Gg()
      , t = (n, r) => {
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(r),
        o => {
            i.length > 1 ? i.forEach(s => s(o)) : i[0](o)
        }
    }
    ;
    Xa = t("__VUE_INSTANCE_SETTERS__", n => $t = n),
    pc = t("__VUE_SSR_SETTERS__", n => ks = n)
}
const wi = e => {
    const t = $t;
    return Xa(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Xa(t)
    }
}
  , mc = () => {
    $t && $t.scope.off(),
    Xa(null)
}
;
function cy(e) {
    return e.vnode.shapeFlag & 4
}
let ks = !1;
function fy(e, t=!1) {
    t && pc(t);
    const {props: n, children: r} = e.vnode
      , i = cy(e);
    WR(e, n, i, t),
    qR(e, r);
    const o = i ? pC(e, t) : void 0;
    return t && pc(!1),
    o
}
function pC(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,uc);
    const {setup: r} = n;
    if (r) {
        const i = e.setupContext = r.length > 1 ? hy(e) : null
          , o = wi(e);
        Zr();
        const s = mr(r, e, 0, [e.props, i]);
        if (ei(),
        o(),
        bf(s)) {
            if (s.then(mc, mc),
            t)
                return s.then(u => {
                    gc(e, u, t)
                }
                ).catch(u => {
                    Li(u, e, 0)
                }
                );
            e.asyncDep = s
        } else
            gc(e, s, t)
    } else
        dy(e, t)
}
function gc(e, t, n) {
    We(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ft(t) && (e.setupState = xf(t)),
    dy(e, n)
}
let Qa, vc;
function mC(e) {
    Qa = e,
    vc = t => {
        t.render._rc && (t.withProxy = new Proxy(t.ctx,ER))
    }
}
const gC = () => !Qa;
function dy(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Qa && !r.render) {
            const i = r.template || $f(e).template;
            if (i) {
                const {isCustomElement: o, compilerOptions: s} = e.appContext.config
                  , {delimiters: u, compilerOptions: c} = r
                  , f = _t(_t({
                    isCustomElement: o,
                    delimiters: u
                }, s), c);
                r.render = Qa(i, f)
            }
        }
        e.render = r.render || pn,
        vc && vc(e)
    }
    {
        const i = wi(e);
        Zr();
        try {
            kR(e)
        } finally {
            ei(),
            i()
        }
    }
}
const vC = {
    get(e, t) {
        return vn(e, "get", ""),
        e[t]
    }
};
function hy(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,vC),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function $s(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xf(Au(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Jo)
                return Jo[n](e)
        },
        has(t, n) {
            return n in t || n in Jo
        }
    })) : e.proxy
}
function yc(e, t=!0) {
    return We(e) ? e.displayName || e.name : e.name || t && e.__name
}
function yC(e) {
    return We(e) && "__vccOpts"in e
}
const Fe = (e, t) => k1(e, t, ks);
function bC(e, t, n=ct) {
    const r = Ft()
      , i = rn(t)
      , o = Sn(t)
      , s = Pf( (c, f) => {
        let h;
        return Xv( () => {
            const p = e[t];
            Hn(h, p) && (h = p,
            f())
        }
        ),
        {
            get() {
                return c(),
                n.get ? n.get(h) : h
            },
            set(p) {
                const g = r.vnode.props;
                !(g && (t in g || i in g || o in g) && (`onUpdate:${t}`in g || `onUpdate:${i}`in g || `onUpdate:${o}`in g)) && Hn(p, h) && (h = p,
                f()),
                r.emit(`update:${t}`, n.set ? n.set(p) : p)
            }
        }
    }
    )
      , u = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
    return s[Symbol.iterator] = () => {
        let c = 0;
        return {
            next() {
                return c < 2 ? {
                    value: c++ ? e[u] || {} : s,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    s
}
function Oo(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ft(t) && !Le(t) ? Yr(t) ? gt(e, null, [t]) : gt(e, t) : gt(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Yr(n) && (n = [n]),
    gt(e, t, n))
}
function _C() {}
function wC(e, t, n, r) {
    const i = n[r];
    if (i && py(i, e))
        return i;
    const o = t();
    return o.memo = e.slice(),
    o.memoIndex = r,
    n[r] = o
}
function py(e, t) {
    const n = e.memo;
    if (n.length != t.length)
        return !1;
    for (let r = 0; r < n.length; r++)
        if (Hn(n[r], t[r]))
            return !1;
    return _i > 0 && mn && mn.push(e),
    !0
}
const my = "3.4.31"
  , EC = pn
  , OC = q1
  , SC = Hi
  , AC = _v
  , TC = {
    createComponentInstance: ly,
    setupComponent: fy,
    renderComponentRoot: xa,
    setCurrentRenderingInstance: ps,
    isVNode: Yr,
    normalizeVNode: On,
    getComponentPublicInstance: $s
}
  , RC = TC
  , CC = null
  , xC = null
  , PC = null;
/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const IC = "http://www.w3.org/2000/svg"
  , FC = "http://www.w3.org/1998/Math/MathML"
  , fr = typeof document != "undefined" ? document : null
  , fp = fr && fr.createElement("template")
  , LC = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const i = t === "svg" ? fr.createElementNS(IC, e) : t === "mathml" ? fr.createElementNS(FC, e) : n ? fr.createElement(e, {
            is: n
        }) : fr.createElement(e);
        return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: e => fr.createTextNode(e),
    createComment: e => fr.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => fr.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, i, o) {
        const s = n ? n.previousSibling : t.lastChild;
        if (i && (i === o || i.nextSibling))
            for (; t.insertBefore(i.cloneNode(!0), n),
            !(i === o || !(i = i.nextSibling)); )
                ;
        else {
            fp.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
            const u = fp.content;
            if (r === "svg" || r === "mathml") {
                const c = u.firstChild;
                for (; c.firstChild; )
                    u.appendChild(c.firstChild);
                u.removeChild(c)
            }
            t.insertBefore(u, n)
        }
        return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Ir = "transition"
  , Bo = "animation"
  , ho = Symbol("_vtc")
  , Yf = (e, {slots: t}) => Oo(ty, vy(e), t);
Yf.displayName = "Transition";
const gy = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , NC = Yf.props = _t({}, Hf, gy)
  , ci = (e, t=[]) => {
    Le(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , dp = e => e ? Le(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function vy(e) {
    const t = {};
    for (const ae in e)
        ae in gy || (t[ae] = e[ae]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: i, enterFromClass: o=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: u=`${n}-enter-to`, appearFromClass: c=o, appearActiveClass: f=s, appearToClass: h=u, leaveFromClass: p=`${n}-leave-from`, leaveActiveClass: g=`${n}-leave-active`, leaveToClass: y=`${n}-leave-to`} = e
      , _ = MC(i)
      , R = _ && _[0]
      , F = _ && _[1]
      , {onBeforeEnter: T, onEnter: A, onEnterCancelled: E, onLeave: I, onLeaveCancelled: W, onBeforeAppear: $=T, onAppear: U=A, onAppearCancelled: Z=E} = t
      , j = (ae, we, Ve) => {
        Nr(ae, we ? h : u),
        Nr(ae, we ? f : s),
        Ve && Ve()
    }
      , ne = (ae, we) => {
        ae._isLeaving = !1,
        Nr(ae, p),
        Nr(ae, y),
        Nr(ae, g),
        we && we()
    }
      , be = ae => (we, Ve) => {
        const Ne = ae ? U : A
          , le = () => j(we, ae, Ve);
        ci(Ne, [we, le]),
        hp( () => {
            Nr(we, ae ? c : o),
            lr(we, ae ? h : u),
            dp(Ne) || pp(we, r, R, le)
        }
        )
    }
    ;
    return _t(t, {
        onBeforeEnter(ae) {
            ci(T, [ae]),
            lr(ae, o),
            lr(ae, s)
        },
        onBeforeAppear(ae) {
            ci($, [ae]),
            lr(ae, c),
            lr(ae, f)
        },
        onEnter: be(!1),
        onAppear: be(!0),
        onLeave(ae, we) {
            ae._isLeaving = !0;
            const Ve = () => ne(ae, we);
            lr(ae, p),
            lr(ae, g),
            by(),
            hp( () => {
                ae._isLeaving && (Nr(ae, p),
                lr(ae, y),
                dp(I) || pp(ae, r, F, Ve))
            }
            ),
            ci(I, [ae, Ve])
        },
        onEnterCancelled(ae) {
            j(ae, !1),
            ci(E, [ae])
        },
        onAppearCancelled(ae) {
            j(ae, !0),
            ci(Z, [ae])
        },
        onLeaveCancelled(ae) {
            ne(ae),
            ci(W, [ae])
        }
    })
}
function MC(e) {
    if (e == null)
        return null;
    if (ft(e))
        return [Fl(e.enter), Fl(e.leave)];
    {
        const t = Fl(e);
        return [t, t]
    }
}
function Fl(e) {
    return Ha(e)
}
function lr(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[ho] || (e[ho] = new Set)).add(t)
}
function Nr(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[ho];
    n && (n.delete(t),
    n.size || (e[ho] = void 0))
}
function hp(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let kC = 0;
function pp(e, t, n, r) {
    const i = e._endId = ++kC
      , o = () => {
        i === e._endId && r()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: s, timeout: u, propCount: c} = yy(e, t);
    if (!s)
        return r();
    const f = s + "end";
    let h = 0;
    const p = () => {
        e.removeEventListener(f, g),
        o()
    }
      , g = y => {
        y.target === e && ++h >= c && p()
    }
    ;
    setTimeout( () => {
        h < c && p()
    }
    , u + 1),
    e.addEventListener(f, g)
}
function yy(e, t) {
    const n = window.getComputedStyle(e)
      , r = _ => (n[_] || "").split(", ")
      , i = r(`${Ir}Delay`)
      , o = r(`${Ir}Duration`)
      , s = mp(i, o)
      , u = r(`${Bo}Delay`)
      , c = r(`${Bo}Duration`)
      , f = mp(u, c);
    let h = null
      , p = 0
      , g = 0;
    t === Ir ? s > 0 && (h = Ir,
    p = s,
    g = o.length) : t === Bo ? f > 0 && (h = Bo,
    p = f,
    g = c.length) : (p = Math.max(s, f),
    h = p > 0 ? s > f ? Ir : Bo : null,
    g = h ? h === Ir ? o.length : c.length : 0);
    const y = h === Ir && /\b(transform|all)(,|$)/.test(r(`${Ir}Property`).toString());
    return {
        type: h,
        timeout: p,
        propCount: g,
        hasTransform: y
    }
}
function mp(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => gp(n) + gp(e[r])))
}
function gp(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function by() {
    return document.body.offsetHeight
}
function $C(e, t, n) {
    const r = e[ho];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Za = Symbol("_vod")
  , _y = Symbol("_vsh")
  , wy = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Za] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : Vo(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        Vo(e, !0),
        r.enter(e)) : r.leave(e, () => {
            Vo(e, !1)
        }
        ) : Vo(e, t))
    },
    beforeUnmount(e, {value: t}) {
        Vo(e, t)
    }
};
function Vo(e, t) {
    e.style.display = t ? e[Za] : "none",
    e[_y] = !t
}
function DC() {
    wy.getSSRProps = ({value: e}) => {
        if (!e)
            return {
                style: {
                    display: "none"
                }
            }
    }
}
const Ey = Symbol("");
function jC(e) {
    const t = Ft();
    if (!t)
        return;
    const n = t.ut = (i=e(t.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(o => _c(o, i))
    }
      , r = () => {
        const i = e(t.proxy);
        bc(t.subTree, i),
        n(i)
    }
    ;
    un( () => {
        Jv(r);
        const i = new MutationObserver(r);
        i.observe(t.subTree.el.parentNode, {
            childList: !0
        }),
        nr( () => i.disconnect())
    }
    )
}
function bc(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch,
        n.pendingBranch && !n.isHydrating && n.effects.push( () => {
            bc(n.activeBranch, t)
        }
        )
    }
    for (; e.component; )
        e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
        _c(e.el, t);
    else if (e.type === kt)
        e.children.forEach(n => bc(n, t));
    else if (e.type === gi) {
        let {el: n, anchor: r} = e;
        for (; n && (_c(n, t),
        n !== r); )
            n = n.nextSibling
    }
}
function _c(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        let r = "";
        for (const i in t)
            n.setProperty(`--${i}`, t[i]),
            r += `--${i}: ${t[i]};`;
        n[Ey] = r
    }
}
const BC = /(^|;)\s*display\s*:/;
function VC(e, t, n) {
    const r = e.style
      , i = At(n);
    let o = !1;
    if (n && !i) {
        if (t)
            if (At(t))
                for (const s of t.split(";")) {
                    const u = s.slice(0, s.indexOf(":")).trim();
                    n[u] == null && Ia(r, u, "")
                }
            else
                for (const s in t)
                    n[s] == null && Ia(r, s, "");
        for (const s in n)
            s === "display" && (o = !0),
            Ia(r, s, n[s])
    } else if (i) {
        if (t !== n) {
            const s = r[Ey];
            s && (n += ";" + s),
            r.cssText = n,
            o = BC.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Za in e && (e[Za] = o ? r.display : "",
    e[_y] && (r.display = "none"))
}
const vp = /\s*!important$/;
function Ia(e, t, n) {
    if (Le(n))
        n.forEach(r => Ia(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = UC(e, t);
        vp.test(n) ? e.setProperty(Sn(r), n.replace(vp, ""), "important") : e[r] = n
    }
}
const yp = ["Webkit", "Moz", "ms"]
  , Ll = {};
function UC(e, t) {
    const n = Ll[t];
    if (n)
        return n;
    let r = rn(t);
    if (r !== "filter" && r in e)
        return Ll[t] = r;
    r = xs(r);
    for (let i = 0; i < yp.length; i++) {
        const o = yp[i] + r;
        if (o in e)
            return Ll[t] = o
    }
    return t
}
const bp = "http://www.w3.org/1999/xlink";
function _p(e, t, n, r, i, o=f1(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bp, t.slice(6, t.length)) : e.setAttributeNS(bp, t, n) : n == null || o && !zg(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : er(n) ? String(n) : n)
}
function WC(e, t, n, r, i, o, s) {
    if (t === "innerHTML" || t === "textContent") {
        r && s(r, i, o),
        e[t] = n == null ? "" : n;
        return
    }
    const u = e.tagName;
    if (t === "value" && u !== "PROGRESS" && !u.includes("-")) {
        const f = u === "OPTION" ? e.getAttribute("value") || "" : e.value
          , h = n == null ? "" : String(n);
        (f !== h || !("_value"in e)) && (e.value = h),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let c = !1;
    if (n === "" || n == null) {
        const f = typeof e[t];
        f === "boolean" ? n = zg(n) : n == null && f === "string" ? (n = "",
        c = !0) : f === "number" && (n = 0,
        c = !0)
    }
    try {
        e[t] = n
    } catch (f) {}
    c && e.removeAttribute(t)
}
function dr(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function HC(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const wp = Symbol("_vei");
function KC(e, t, n, r, i=null) {
    const o = e[wp] || (e[wp] = {})
      , s = o[t];
    if (r && s)
        s.value = r;
    else {
        const [u,c] = qC(t);
        if (r) {
            const f = o[t] = YC(r, i);
            dr(e, u, f, c)
        } else
            s && (HC(e, u, s, c),
            o[t] = void 0)
    }
}
const Ep = /(?:Once|Passive|Capture)$/;
function qC(e) {
    let t;
    if (Ep.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Ep); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Sn(e.slice(2)), t]
}
let Nl = 0;
const GC = Promise.resolve()
  , zC = () => Nl || (GC.then( () => Nl = 0),
Nl = Date.now());
function YC(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        An(JC(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = zC(),
    n
}
function JC(e, t) {
    if (Le(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => i => !i._stopped && r && r(i))
    } else
        return t
}
const Op = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , XC = (e, t, n, r, i, o, s, u, c) => {
    const f = i === "svg";
    t === "class" ? $C(e, r, f) : t === "style" ? VC(e, n, r) : Cs(t) ? vf(t) || KC(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : QC(e, t, r, f)) ? (WC(e, t, r, o, s, u, c),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _p(e, t, r, f, s, t !== "value")) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    _p(e, t, r, f))
}
;
function QC(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Op(t) && We(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return Op(t) && At(n) ? !1 : t in e
}
/*! #__NO_SIDE_EFFECTS__ */
function Oy(e, t, n) {
    const r = wr(e, t);
    class i extends Fu {
        constructor(s) {
            super(r, s, n)
        }
    }
    return i.def = r,
    i
}
/*! #__NO_SIDE_EFFECTS__ */
const ZC = (e, t) => Oy(e, t, Ny)
  , ex = typeof HTMLElement != "undefined" ? HTMLElement : class {
}
;
class Fu extends ex {
    constructor(t, n={}, r) {
        super(),
        this._def = t,
        this._props = n,
        this._instance = null,
        this._connected = !1,
        this._resolved = !1,
        this._numberProps = null,
        this._ob = null,
        this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({
            mode: "open"
        }),
        this._def.__asyncLoader || this._resolveProps(this._def))
    }
    connectedCallback() {
        this._connected = !0,
        this._instance || (this._resolved ? this._update() : this._resolveDef())
    }
    disconnectedCallback() {
        this._connected = !1,
        zt( () => {
            this._connected || (this._ob && (this._ob.disconnect(),
            this._ob = null),
            wc(null, this.shadowRoot),
            this._instance = null)
        }
        )
    }
    _resolveDef() {
        this._resolved = !0;
        for (let r = 0; r < this.attributes.length; r++)
            this._setAttr(this.attributes[r].name);
        this._ob = new MutationObserver(r => {
            for (const i of r)
                this._setAttr(i.attributeName)
        }
        ),
        this._ob.observe(this, {
            attributes: !0
        });
        const t = (r, i=!1) => {
            const {props: o, styles: s} = r;
            let u;
            if (o && !Le(o))
                for (const c in o) {
                    const f = o[c];
                    (f === Number || f && f.type === Number) && (c in this._props && (this._props[c] = Ha(this._props[c])),
                    (u || (u = Object.create(null)))[rn(c)] = !0)
                }
            this._numberProps = u,
            i && this._resolveProps(r),
            this._applyStyles(s),
            this._update()
        }
          , n = this._def.__asyncLoader;
        n ? n().then(r => t(r, !0)) : t(this._def)
    }
    _resolveProps(t) {
        const {props: n} = t
          , r = Le(n) ? n : Object.keys(n || {});
        for (const i of Object.keys(this))
            i[0] !== "_" && r.includes(i) && this._setProp(i, this[i], !0, !1);
        for (const i of r.map(rn))
            Object.defineProperty(this, i, {
                get() {
                    return this._getProp(i)
                },
                set(o) {
                    this._setProp(i, o)
                }
            })
    }
    _setAttr(t) {
        let n = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
        const r = rn(t);
        this._numberProps && this._numberProps[r] && (n = Ha(n)),
        this._setProp(r, n, !1)
    }
    _getProp(t) {
        return this._props[t]
    }
    _setProp(t, n, r=!0, i=!0) {
        n !== this._props[t] && (this._props[t] = n,
        i && this._instance && this._update(),
        r && (n === !0 ? this.setAttribute(Sn(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Sn(t), n + "") : n || this.removeAttribute(Sn(t))))
    }
    _update() {
        wc(this._createVNode(), this.shadowRoot)
    }
    _createVNode() {
        const t = gt(this._def, _t({}, this._props));
        return this._instance || (t.ce = n => {
            this._instance = n,
            n.isCE = !0;
            const r = (o, s) => {
                this.dispatchEvent(new CustomEvent(o,{
                    detail: s
                }))
            }
            ;
            n.emit = (o, ...s) => {
                r(o, s),
                Sn(o) !== o && r(Sn(o), s)
            }
            ;
            let i = this;
            for (; i = i && (i.parentNode || i.host); )
                if (i instanceof Fu) {
                    n.parent = i._instance,
                    n.provides = i._instance.provides;
                    break
                }
        }
        ),
        t
    }
    _applyStyles(t) {
        t && t.forEach(n => {
            const r = document.createElement("style");
            r.textContent = n,
            this.shadowRoot.appendChild(r)
        }
        )
    }
}
function tx(e="$style") {
    {
        const t = Ft();
        if (!t)
            return ct;
        const n = t.type.__cssModules;
        if (!n)
            return ct;
        const r = n[e];
        return r || ct
    }
}
const Sy = new WeakMap
  , Ay = new WeakMap
  , eu = Symbol("_moveCb")
  , Sp = Symbol("_enterCb")
  , Ty = {
    name: "TransitionGroup",
    props: _t({}, NC, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = Ft()
          , r = Wf();
        let i, o;
        return Fs( () => {
            if (!i.length)
                return;
            const s = e.moveClass || `${e.name || "v"}-move`;
            if (!ax(i[0].el, n.vnode.el, s))
                return;
            i.forEach(ix),
            i.forEach(ox);
            const u = i.filter(sx);
            by(),
            u.forEach(c => {
                const f = c.el
                  , h = f.style;
                lr(f, s),
                h.transform = h.webkitTransform = h.transitionDuration = "";
                const p = f[eu] = g => {
                    g && g.target !== f || (!g || /transform$/.test(g.propertyName)) && (f.removeEventListener("transitionend", p),
                    f[eu] = null,
                    Nr(f, s))
                }
                ;
                f.addEventListener("transitionend", p)
            }
            )
        }
        ),
        () => {
            const s = et(e)
              , u = vy(s);
            let c = s.tag || kt;
            if (i = [],
            o)
                for (let f = 0; f < o.length; f++) {
                    const h = o[f];
                    h.el && h.el instanceof Element && (i.push(h),
                    Gr(h, fo(h, u, r, n)),
                    Sy.set(h, h.el.getBoundingClientRect()))
                }
            o = t.default ? Pu(t.default()) : [];
            for (let f = 0; f < o.length; f++) {
                const h = o[f];
                h.key != null && Gr(h, fo(h, u, r, n))
            }
            return gt(c, null, o)
        }
    }
}
  , nx = e => delete e.mode;
Ty.props;
const rx = Ty;
function ix(e) {
    const t = e.el;
    t[eu] && t[eu](),
    t[Sp] && t[Sp]()
}
function ox(e) {
    Ay.set(e, e.el.getBoundingClientRect())
}
function sx(e) {
    const t = Sy.get(e)
      , n = Ay.get(e)
      , r = t.left - n.left
      , i = t.top - n.top;
    if (r || i) {
        const o = e.el.style;
        return o.transform = o.webkitTransform = `translate(${r}px,${i}px)`,
        o.transitionDuration = "0s",
        e
    }
}
function ax(e, t, n) {
    const r = e.cloneNode()
      , i = e[ho];
    i && i.forEach(u => {
        u.split(/\s+/).forEach(c => c && r.classList.remove(c))
    }
    ),
    n.split(/\s+/).forEach(u => u && r.classList.add(u)),
    r.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(r);
    const {hasTransform: s} = yy(r);
    return o.removeChild(r),
    s
}
const Jr = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Le(t) ? n => Xi(t, n) : t
}
;
function ux(e) {
    e.target.composing = !0
}
function Ap(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Fn = Symbol("_assign")
  , tu = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, i) {
        e[Fn] = Jr(i);
        const o = r || i.props && i.props.type === "number";
        dr(e, t ? "change" : "input", s => {
            if (s.target.composing)
                return;
            let u = e.value;
            n && (u = u.trim()),
            o && (u = Wa(u)),
            e[Fn](u)
        }
        ),
        n && dr(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (dr(e, "compositionstart", ux),
        dr(e, "compositionend", Ap),
        dr(e, "change", Ap))
    },
    mounted(e, {value: t}) {
        e.value = t == null ? "" : t
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: i, number: o}}, s) {
        if (e[Fn] = Jr(s),
        e.composing)
            return;
        const u = (o || e.type === "number") && !/^0\d/.test(e.value) ? Wa(e.value) : e.value
          , c = t == null ? "" : t;
        u !== c && (document.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c))
    }
}
  , Jf = {
    deep: !0,
    created(e, t, n) {
        e[Fn] = Jr(n),
        dr(e, "change", () => {
            const r = e._modelValue
              , i = po(e)
              , o = e.checked
              , s = e[Fn];
            if (Le(r)) {
                const u = yu(r, i)
                  , c = u !== -1;
                if (o && !c)
                    s(r.concat(i));
                else if (!o && c) {
                    const f = [...r];
                    f.splice(u, 1),
                    s(f)
                }
            } else if (Ii(r)) {
                const u = new Set(r);
                o ? u.add(i) : u.delete(i),
                s(u)
            } else
                s(Cy(e, o))
        }
        )
    },
    mounted: Tp,
    beforeUpdate(e, t, n) {
        e[Fn] = Jr(n),
        Tp(e, t, n)
    }
};
function Tp(e, {value: t, oldValue: n}, r) {
    e._modelValue = t,
    Le(t) ? e.checked = yu(t, r.props.value) > -1 : Ii(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = qr(t, Cy(e, !0)))
}
const Xf = {
    created(e, {value: t}, n) {
        e.checked = qr(t, n.props.value),
        e[Fn] = Jr(n),
        dr(e, "change", () => {
            e[Fn](po(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, r) {
        e[Fn] = Jr(r),
        t !== n && (e.checked = qr(t, r.props.value))
    }
}
  , Ry = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, r) {
        const i = Ii(t);
        dr(e, "change", () => {
            const o = Array.prototype.filter.call(e.options, s => s.selected).map(s => n ? Wa(po(s)) : po(s));
            e[Fn](e.multiple ? i ? new Set(o) : o : o[0]),
            e._assigning = !0,
            zt( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[Fn] = Jr(r)
    },
    mounted(e, {value: t, modifiers: {number: n}}) {
        Rp(e, t)
    },
    beforeUpdate(e, t, n) {
        e[Fn] = Jr(n)
    },
    updated(e, {value: t, modifiers: {number: n}}) {
        e._assigning || Rp(e, t)
    }
};
function Rp(e, t, n) {
    const r = e.multiple
      , i = Le(t);
    if (!(r && !i && !Ii(t))) {
        for (let o = 0, s = e.options.length; o < s; o++) {
            const u = e.options[o]
              , c = po(u);
            if (r)
                if (i) {
                    const f = typeof c;
                    f === "string" || f === "number" ? u.selected = t.some(h => String(h) === String(c)) : u.selected = yu(t, c) > -1
                } else
                    u.selected = t.has(c);
            else if (qr(po(u), t)) {
                e.selectedIndex !== o && (e.selectedIndex = o);
                return
            }
        }
        !r && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function po(e) {
    return "_value"in e ? e._value : e.value
}
function Cy(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const xy = {
    created(e, t, n) {
        Sa(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        Sa(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        Sa(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        Sa(e, t, n, r, "updated")
    }
};
function Py(e, t) {
    switch (e) {
    case "SELECT":
        return Ry;
    case "TEXTAREA":
        return tu;
    default:
        switch (t) {
        case "checkbox":
            return Jf;
        case "radio":
            return Xf;
        default:
            return tu
        }
    }
}
function Sa(e, t, n, r, i) {
    const s = Py(e.tagName, n.props && n.props.type)[i];
    s && s(e, t, n, r)
}
function lx() {
    tu.getSSRProps = ({value: e}) => ({
        value: e
    }),
    Xf.getSSRProps = ({value: e}, t) => {
        if (t.props && qr(t.props.value, e))
            return {
                checked: !0
            }
    }
    ,
    Jf.getSSRProps = ({value: e}, t) => {
        if (Le(e)) {
            if (t.props && yu(e, t.props.value) > -1)
                return {
                    checked: !0
                }
        } else if (Ii(e)) {
            if (t.props && e.has(t.props.value))
                return {
                    checked: !0
                }
        } else if (e)
            return {
                checked: !0
            }
    }
    ,
    xy.getSSRProps = (e, t) => {
        if (typeof t.type != "string")
            return;
        const n = Py(t.type.toUpperCase(), t.props && t.props.type);
        if (n.getSSRProps)
            return n.getSSRProps(e, t)
    }
}
const cx = ["ctrl", "shift", "alt", "meta"]
  , fx = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => cx.some(n => e[`${n}Key`] && !t.includes(n))
}
  , dx = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (i, ...o) => {
        for (let s = 0; s < t.length; s++) {
            const u = fx[t[s]];
            if (u && u(i, t))
                return
        }
        return e(i, ...o)
    }
    )
}
  , hx = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , px = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = i => {
        if (!("key"in i))
            return;
        const o = Sn(i.key);
        if (t.some(s => s === o || hx[s] === o))
            return e(i)
    }
    )
}
  , Iy = _t({
    patchProp: XC
}, LC);
let Zo, Cp = !1;
function Fy() {
    return Zo || (Zo = Wv(Iy))
}
function Ly() {
    return Zo = Cp ? Zo : Hv(Iy),
    Cp = !0,
    Zo
}
const wc = (...e) => {
    Fy().render(...e)
}
  , Ny = (...e) => {
    Ly().hydrate(...e)
}
  , mx = (...e) => {
    const t = Fy().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const i = ky(r);
        if (!i)
            return;
        const o = t._component;
        !We(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.innerHTML = "";
        const s = n(i, !1, My(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
  , gx = (...e) => {
    const t = Ly().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const i = ky(r);
        if (i)
            return n(i, !0, My(i))
    }
    ,
    t
}
;
function My(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function ky(e) {
    return At(e) ? document.querySelector(e) : e
}
let xp = !1;
const vx = () => {
    xp || (xp = !0,
    lx(),
    DC())
}
;
/**
* vue v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const yx = () => {}
  , FM = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseTransition: ty,
    BaseTransitionPropsValidators: Hf,
    Comment: Ht,
    DeprecationTypes: PC,
    EffectScope: wf,
    ErrorCodes: K1,
    ErrorTypeStrings: OC,
    Fragment: kt,
    KeepAlive: eC,
    ReactiveEffect: lo,
    Static: gi,
    Suspense: cR,
    Teleport: sC,
    Text: zr,
    TrackOpTypes: U1,
    Transition: Yf,
    TransitionGroup: rx,
    TriggerOpTypes: W1,
    VueElement: Fu,
    assertNumber: H1,
    callWithAsyncErrorHandling: An,
    callWithErrorHandling: mr,
    camelize: rn,
    capitalize: xs,
    cloneVNode: tr,
    compatUtils: xC,
    compile: yx,
    computed: Fe,
    createApp: mx,
    createBlock: Kf,
    createCommentVNode: fC,
    createElementBlock: aC,
    createElementVNode: qf,
    createHydrationRenderer: Hv,
    createPropsRestProxy: NR,
    createRenderer: Wv,
    createSSRApp: gx,
    createSlots: yR,
    createStaticVNode: cC,
    createTextVNode: Gf,
    createVNode: gt,
    customRef: Pf,
    defineAsyncComponent: bR,
    defineComponent: wr,
    defineCustomElement: Oy,
    defineEmits: SR,
    defineExpose: AR,
    defineModel: CR,
    defineOptions: TR,
    defineProps: OR,
    defineSSRCustomElement: ZC,
    defineSlots: RR,
    devtools: SC,
    effect: p1,
    effectScope: bu,
    getCurrentInstance: Ft,
    getCurrentScope: _u,
    getTransitionRawChildren: Pu,
    guardReactiveProps: ay,
    h: Oo,
    handleError: Li,
    hasInjectionContext: Nv,
    hydrate: Ny,
    initCustomFormatter: _C,
    initDirectivesForSSR: vx,
    inject: Nt,
    isMemoSame: py,
    isProxy: Tf,
    isReactive: pr,
    isReadonly: co,
    isRef: at,
    isRuntimeOnly: gC,
    isShallow: cs,
    isVNode: Yr,
    markRaw: Au,
    mergeDefaults: FR,
    mergeModels: LR,
    mergeProps: uy,
    nextTick: zt,
    normalizeClass: Is,
    normalizeProps: l1,
    normalizeStyle: Ps,
    onActivated: Vf,
    onBeforeMount: kf,
    onBeforeUnmount: Ls,
    onBeforeUpdate: Av,
    onDeactivated: Uf,
    onErrorCaptured: xv,
    onMounted: un,
    onRenderTracked: Cv,
    onRenderTriggered: Rv,
    onScopeDispose: wu,
    onServerPrefetch: Tv,
    onUnmounted: nr,
    onUpdated: Fs,
    openBlock: Iu,
    popScopeId: Z1,
    provide: mi,
    proxyRefs: xf,
    pushScopeId: Q1,
    queuePostFlushCb: qa,
    reactive: yn,
    readonly: Eo,
    ref: Me,
    registerRuntimeCompiler: mC,
    render: wc,
    renderList: vR,
    renderSlot: _R,
    resolveComponent: sR,
    resolveDirective: uR,
    resolveDynamicComponent: aR,
    resolveFilter: CC,
    resolveTransitionHooks: fo,
    setBlockTracking: hc,
    setDevtoolsHook: AC,
    setTransitionHooks: Gr,
    shallowReactive: Af,
    shallowReadonly: M1,
    shallowRef: Fi,
    ssrContextKey: zv,
    ssrUtils: RC,
    stop: m1,
    toDisplayString: Jg,
    toHandlerKey: Yo,
    toHandlers: wR,
    toRaw: et,
    toRef: mv,
    toRefs: pv,
    toValue: ze,
    transformVNodeArgs: uC,
    triggerRef: rc,
    unref: Qe,
    useAttrs: IR,
    useCssModule: tx,
    useCssVars: jC,
    useModel: bC,
    useSSRContext: Yv,
    useSlots: PR,
    useTransitionState: Wf,
    vModelCheckbox: Jf,
    vModelDynamic: xy,
    vModelRadio: Xf,
    vModelSelect: Ry,
    vModelText: tu,
    vShow: wy,
    version: my,
    warn: EC,
    watch: tt,
    watchEffect: Bf,
    watchPostEffect: Jv,
    watchSyncEffect: Xv,
    withAsyncContext: MR,
    withCtx: Ff,
    withDefaults: xR,
    withDirectives: gR,
    withKeys: px,
    withMemo: wC,
    withModifiers: dx,
    withScopeId: eR
}, Symbol.toStringTag, {
    value: "Module"
}));
function bx(e, t) {
    let n, r, i;
    const o = Me(!0)
      , s = () => {
        o.value = !0,
        i()
    }
    ;
    tt(e, s, {
        flush: "sync"
    });
    const u = typeof t == "function" ? t : t.get
      , c = typeof t == "function" ? void 0 : t.set
      , f = Pf( (h, p) => (r = h,
    i = p,
    {
        get() {
            return o.value && (n = u(),
            o.value = !1),
            r(),
            n
        },
        set(g) {
            c == null || c(g)
        }
    }));
    return Object.isExtensible(f) && (f.trigger = s),
    f
}
function gr(e) {
    return _u() ? (wu(e),
    !0) : !1
}
function bt(e) {
    return typeof e == "function" ? e() : Qe(e)
}
const Ei = typeof window != "undefined" && typeof document != "undefined";
typeof WorkerGlobalScope != "undefined" && globalThis instanceof WorkerGlobalScope;
const LM = e => typeof e != "undefined"
  , $y = e => e != null
  , _x = Object.prototype.toString
  , wx = e => _x.call(e) === "[object Object]"
  , Tn = () => {}
  , Ex = Ox();
function Ox() {
    var e, t;
    return Ei && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}
function Qf(e, t) {
    function n(...r) {
        return new Promise( (i, o) => {
            Promise.resolve(e( () => t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(i).catch(o)
        }
        )
    }
    return n
}
const Dy = e => e();
function jy(e, t={}) {
    let n, r, i = Tn;
    const o = u => {
        clearTimeout(u),
        i(),
        i = Tn
    }
    ;
    return u => {
        const c = bt(e)
          , f = bt(t.maxWait);
        return n && o(n),
        c <= 0 || f !== void 0 && f <= 0 ? (r && (o(r),
        r = null),
        Promise.resolve(u())) : new Promise( (h, p) => {
            i = t.rejectOnCancel ? p : h,
            f && !r && (r = setTimeout( () => {
                n && o(n),
                r = null,
                h(u())
            }
            , f)),
            n = setTimeout( () => {
                r && o(r),
                r = null,
                h(u())
            }
            , c)
        }
        )
    }
}
function By(...e) {
    let t = 0, n, r = !0, i = Tn, o, s, u, c, f;
    !at(e[0]) && typeof e[0] == "object" ? {delay: s, trailing: u=!0, leading: c=!0, rejectOnCancel: f=!1} = e[0] : [s,u=!0,c=!0,f=!1] = e;
    const h = () => {
        n && (clearTimeout(n),
        n = void 0,
        i(),
        i = Tn)
    }
    ;
    return g => {
        const y = bt(s)
          , _ = Date.now() - t
          , R = () => o = g();
        return h(),
        y <= 0 ? (t = Date.now(),
        R()) : (_ > y && (c || !r) ? (t = Date.now(),
        R()) : u && (o = new Promise( (F, T) => {
            i = f ? T : F,
            n = setTimeout( () => {
                t = Date.now(),
                r = !0,
                F(R()),
                h()
            }
            , Math.max(0, y - _))
        }
        )),
        !c && !n && (n = setTimeout( () => r = !0, y)),
        r = !1,
        o)
    }
}
function Sx(e=Dy) {
    const t = Me(!0);
    function n() {
        t.value = !1
    }
    function r() {
        t.value = !0
    }
    const i = (...o) => {
        t.value && e(...o)
    }
    ;
    return {
        isActive: Eo(t),
        pause: n,
        resume: r,
        eventFilter: i
    }
}
function Pp(e, t=!1, n="Timeout") {
    return new Promise( (r, i) => {
        setTimeout(t ? () => i(n) : r, e)
    }
    )
}
function Ax(e) {
    let t;
    function n() {
        return t || (t = e()),
        t
    }
    return n.reset = async () => {
        const r = t;
        t = void 0,
        r && await r
    }
    ,
    n
}
function Tx(e) {
    return Ft()
}
function Vy(e, t=200, n={}) {
    return Qf(jy(t, n), e)
}
function NM(e, t=200, n={}) {
    const r = Me(e.value)
      , i = Vy( () => {
        r.value = e.value
    }
    , t, n);
    return tt(e, () => i()),
    r
}
function Rx(e, t=200, n=!1, r=!0, i=!1) {
    return Qf(By(t, n, r, i), e)
}
function Zf(e, t, n={}) {
    const {eventFilter: r=Dy, ...i} = n;
    return tt(e, Qf(r, t), i)
}
function Cx(e, t, n={}) {
    const {eventFilter: r, ...i} = n
      , {eventFilter: o, pause: s, resume: u, isActive: c} = Sx(r);
    return {
        stop: Zf(e, t, {
            ...i,
            eventFilter: o
        }),
        pause: s,
        resume: u,
        isActive: c
    }
}
function Ds(e, t=!0, n) {
    Tx() ? un(e, n) : t ? e() : zt(e)
}
function Ec(e, t=!1) {
    function n(p, {flush: g="sync", deep: y=!1, timeout: _, throwOnTimeout: R}={}) {
        let F = null;
        const A = [new Promise(E => {
            F = tt(e, I => {
                p(I) !== t && (F == null || F(),
                E(I))
            }
            , {
                flush: g,
                deep: y,
                immediate: !0
            })
        }
        )];
        return _ != null && A.push(Pp(_, R).then( () => bt(e)).finally( () => F == null ? void 0 : F())),
        Promise.race(A)
    }
    function r(p, g) {
        if (!at(p))
            return n(I => I === p, g);
        const {flush: y="sync", deep: _=!1, timeout: R, throwOnTimeout: F} = g != null ? g : {};
        let T = null;
        const E = [new Promise(I => {
            T = tt([e, p], ([W,$]) => {
                t !== (W === $) && (T == null || T(),
                I(W))
            }
            , {
                flush: y,
                deep: _,
                immediate: !0
            })
        }
        )];
        return R != null && E.push(Pp(R, F).then( () => bt(e)).finally( () => (T == null || T(),
        bt(e)))),
        Promise.race(E)
    }
    function i(p) {
        return n(g => !!g, p)
    }
    function o(p) {
        return r(null, p)
    }
    function s(p) {
        return r(void 0, p)
    }
    function u(p) {
        return n(Number.isNaN, p)
    }
    function c(p, g) {
        return n(y => {
            const _ = Array.from(y);
            return _.includes(p) || _.includes(bt(p))
        }
        , g)
    }
    function f(p) {
        return h(1, p)
    }
    function h(p=1, g) {
        let y = -1;
        return n( () => (y += 1,
        y >= p), g)
    }
    return Array.isArray(bt(e)) ? {
        toMatch: n,
        toContains: c,
        changed: f,
        changedTimes: h,
        get not() {
            return Ec(e, !t)
        }
    } : {
        toMatch: n,
        toBe: r,
        toBeTruthy: i,
        toBeNull: o,
        toBeNaN: u,
        toBeUndefined: s,
        changed: f,
        changedTimes: h,
        get not() {
            return Ec(e, !t)
        }
    }
}
function MM(e) {
    return Ec(e)
}
function kM(e, t=1e3, n={}) {
    const {immediate: r=!0, immediateCallback: i=!1} = n;
    let o = null;
    const s = Me(!1);
    function u() {
        o && (clearInterval(o),
        o = null)
    }
    function c() {
        s.value = !1,
        u()
    }
    function f() {
        const h = bt(t);
        h <= 0 || (s.value = !0,
        i && e(),
        u(),
        o = setInterval(e, h))
    }
    if (r && Ei && f(),
    at(t) || typeof t == "function") {
        const h = tt(t, () => {
            s.value && Ei && f()
        }
        );
        gr(h)
    }
    return gr(c),
    {
        isActive: s,
        pause: c,
        resume: f
    }
}
function xx(e, t, n={}) {
    const {immediate: r=!0} = n
      , i = Me(!1);
    let o = null;
    function s() {
        o && (clearTimeout(o),
        o = null)
    }
    function u() {
        i.value = !1,
        s()
    }
    function c(...f) {
        s(),
        i.value = !0,
        o = setTimeout( () => {
            i.value = !1,
            o = null,
            e(...f)
        }
        , bt(t))
    }
    return r && (i.value = !0,
    Ei && c()),
    gr(u),
    {
        isPending: Eo(i),
        start: c,
        stop: u
    }
}
function $M(e=!1, t={}) {
    const {truthyValue: n=!0, falsyValue: r=!1} = t
      , i = at(e)
      , o = Me(e);
    function s(u) {
        if (arguments.length)
            return o.value = u,
            o.value;
        {
            const c = bt(n);
            return o.value = o.value === c ? bt(r) : c,
            o.value
        }
    }
    return i ? s : [o, s]
}
function DM(e, t, n={}) {
    const {debounce: r=0, maxWait: i=void 0, ...o} = n;
    return Zf(e, t, {
        ...o,
        eventFilter: jy(r, {
            maxWait: i
        })
    })
}
function jM(e, t, n={}) {
    const {throttle: r=0, trailing: i=!0, leading: o=!0, ...s} = n;
    return Zf(e, t, {
        ...s,
        eventFilter: By(r, i, o)
    })
}
function Ct(e) {
    var t;
    const n = bt(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const Mn = Ei ? window : void 0
  , Uy = Ei ? window.document : void 0
  , Wy = Ei ? window.navigator : void 0;
function jt(...e) {
    let t, n, r, i;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,i] = e,
    t = Mn) : [t,n,r,i] = e,
    !t)
        return Tn;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const o = []
      , s = () => {
        o.forEach(h => h()),
        o.length = 0
    }
      , u = (h, p, g, y) => (h.addEventListener(p, g, y),
    () => h.removeEventListener(p, g, y))
      , c = tt( () => [Ct(t), bt(i)], ([h,p]) => {
        if (s(),
        !h)
            return;
        const g = wx(p) ? {
            ...p
        } : p;
        o.push(...n.flatMap(y => r.map(_ => u(h, y, _, g))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , f = () => {
        c(),
        s()
    }
    ;
    return gr(f),
    f
}
let Ip = !1;
function BM(e, t, n={}) {
    const {window: r=Mn, ignore: i=[], capture: o=!0, detectIframe: s=!1} = n;
    if (!r)
        return Tn;
    Ex && !Ip && (Ip = !0,
    Array.from(r.document.body.children).forEach(g => g.addEventListener("click", Tn)),
    r.document.documentElement.addEventListener("click", Tn));
    let u = !0;
    const c = g => i.some(y => {
        if (typeof y == "string")
            return Array.from(r.document.querySelectorAll(y)).some(_ => _ === g.target || g.composedPath().includes(_));
        {
            const _ = Ct(y);
            return _ && (g.target === _ || g.composedPath().includes(_))
        }
    }
    )
      , h = [jt(r, "click", g => {
        const y = Ct(e);
        if (!(!y || y === g.target || g.composedPath().includes(y))) {
            if (g.detail === 0 && (u = !c(g)),
            !u) {
                u = !0;
                return
            }
            t(g)
        }
    }
    , {
        passive: !0,
        capture: o
    }), jt(r, "pointerdown", g => {
        const y = Ct(e);
        u = !c(g) && !!(y && !g.composedPath().includes(y))
    }
    , {
        passive: !0
    }), s && jt(r, "blur", g => {
        setTimeout( () => {
            var y;
            const _ = Ct(e);
            ((y = r.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(_ != null && _.contains(r.document.activeElement)) && t(g)
        }
        , 0)
    }
    )].filter(Boolean);
    return () => h.forEach(g => g())
}
const Px = 500
  , Ix = 10;
function VM(e, t, n) {
    var r, i;
    const o = Fe( () => Ct(e));
    let s, u, c, f = !1;
    function h() {
        s && (clearTimeout(s),
        s = void 0),
        u = void 0,
        c = void 0,
        f = !1
    }
    function p(T) {
        var A, E, I;
        const [W,$,U] = [c, u, f];
        if (h(),
        !(n != null && n.onMouseUp) || !$ || !W || (A = n == null ? void 0 : n.modifiers) != null && A.self && T.target !== o.value)
            return;
        (E = n == null ? void 0 : n.modifiers) != null && E.prevent && T.preventDefault(),
        (I = n == null ? void 0 : n.modifiers) != null && I.stop && T.stopPropagation();
        const Z = T.x - $.x
          , j = T.y - $.y
          , ne = Math.sqrt(Z * Z + j * j);
        n.onMouseUp(T.timeStamp - W, ne, U)
    }
    function g(T) {
        var A, E, I, W;
        (A = n == null ? void 0 : n.modifiers) != null && A.self && T.target !== o.value || (h(),
        (E = n == null ? void 0 : n.modifiers) != null && E.prevent && T.preventDefault(),
        (I = n == null ? void 0 : n.modifiers) != null && I.stop && T.stopPropagation(),
        u = {
            x: T.x,
            y: T.y
        },
        c = T.timeStamp,
        s = setTimeout( () => {
            f = !0,
            t(T)
        }
        , (W = n == null ? void 0 : n.delay) != null ? W : Px))
    }
    function y(T) {
        var A, E, I, W;
        if ((A = n == null ? void 0 : n.modifiers) != null && A.self && T.target !== o.value || !u || (n == null ? void 0 : n.distanceThreshold) === !1)
            return;
        (E = n == null ? void 0 : n.modifiers) != null && E.prevent && T.preventDefault(),
        (I = n == null ? void 0 : n.modifiers) != null && I.stop && T.stopPropagation();
        const $ = T.x - u.x
          , U = T.y - u.y;
        Math.sqrt($ * $ + U * U) >= ((W = n == null ? void 0 : n.distanceThreshold) != null ? W : Ix) && h()
    }
    const _ = {
        capture: (r = n == null ? void 0 : n.modifiers) == null ? void 0 : r.capture,
        once: (i = n == null ? void 0 : n.modifiers) == null ? void 0 : i.once
    }
      , R = [jt(o, "pointerdown", g, _), jt(o, "pointermove", y, _), jt(o, ["pointerup", "pointerleave"], p, _)];
    return () => R.forEach(T => T())
}
function Fx() {
    const e = Me(!1)
      , t = Ft();
    return t && un( () => {
        e.value = !0
    }
    , t),
    e
}
function ti(e) {
    const t = Fx();
    return Fe( () => (t.value,
    !!e()))
}
function Lx(e, t, n={}) {
    const {window: r=Mn, ...i} = n;
    let o;
    const s = ti( () => r && "MutationObserver"in r)
      , u = () => {
        o && (o.disconnect(),
        o = void 0)
    }
      , c = Fe( () => {
        const g = bt(e)
          , y = (Array.isArray(g) ? g : [g]).map(Ct).filter($y);
        return new Set(y)
    }
    )
      , f = tt( () => c.value, g => {
        u(),
        s.value && g.size && (o = new MutationObserver(t),
        g.forEach(y => o.observe(y, i)))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , h = () => o == null ? void 0 : o.takeRecords()
      , p = () => {
        u(),
        f()
    }
    ;
    return gr(p),
    {
        isSupported: s,
        stop: p,
        takeRecords: h
    }
}
function Nx(e, t={}) {
    const {window: n=Mn} = t
      , r = ti( () => n && "matchMedia"in n && typeof n.matchMedia == "function");
    let i;
    const o = Me(!1)
      , s = f => {
        o.value = f.matches
    }
      , u = () => {
        i && ("removeEventListener"in i ? i.removeEventListener("change", s) : i.removeListener(s))
    }
      , c = Bf( () => {
        r.value && (u(),
        i = n.matchMedia(bt(e)),
        "addEventListener"in i ? i.addEventListener("change", s) : i.addListener(s),
        o.value = i.matches)
    }
    );
    return gr( () => {
        c(),
        u(),
        i = void 0
    }
    ),
    o
}
function Fp(e, t={}) {
    const {controls: n=!1, navigator: r=Wy} = t
      , i = ti( () => r && "permissions"in r);
    let o;
    const s = typeof e == "string" ? {
        name: e
    } : e
      , u = Me()
      , c = () => {
        o && (u.value = o.state)
    }
      , f = Ax(async () => {
        if (i.value) {
            if (!o)
                try {
                    o = await r.permissions.query(s),
                    jt(o, "change", c),
                    c()
                } catch (h) {
                    u.value = "prompt"
                }
            return o
        }
    }
    );
    return f(),
    n ? {
        state: u,
        isSupported: i,
        query: f
    } : u
}
function UM(e={}) {
    const {navigator: t=Wy, read: n=!1, source: r, copiedDuring: i=1500, legacy: o=!1} = e
      , s = ti( () => t && "clipboard"in t)
      , u = Fp("clipboard-read")
      , c = Fp("clipboard-write")
      , f = Fe( () => s.value || o)
      , h = Me("")
      , p = Me(!1)
      , g = xx( () => p.value = !1, i);
    function y() {
        s.value && T(u.value) ? t.clipboard.readText().then(A => {
            h.value = A
        }
        ) : h.value = F()
    }
    f.value && n && jt(["copy", "cut"], y);
    async function _(A=bt(r)) {
        f.value && A != null && (s.value && T(c.value) ? await t.clipboard.writeText(A) : R(A),
        h.value = A,
        p.value = !0,
        g.start())
    }
    function R(A) {
        const E = document.createElement("textarea");
        E.value = A != null ? A : "",
        E.style.position = "absolute",
        E.style.opacity = "0",
        document.body.appendChild(E),
        E.select(),
        document.execCommand("copy"),
        E.remove()
    }
    function F() {
        var A, E, I;
        return (I = (E = (A = document == null ? void 0 : document.getSelection) == null ? void 0 : A.call(document)) == null ? void 0 : E.toString()) != null ? I : ""
    }
    function T(A) {
        return A === "granted" || A === "prompt"
    }
    return {
        isSupported: f,
        text: h,
        copied: p,
        copy: _
    }
}
function Mx(e) {
    const t = Ft()
      , n = bx( () => null, () => t.proxy.$el);
    return Fs(n.trigger),
    un(n.trigger),
    n
}
function WM(e={}) {
    const {document: t=Uy} = e;
    if (!t)
        return Me("visible");
    const n = Me(t.visibilityState);
    return jt(t, "visibilitychange", () => {
        n.value = t.visibilityState
    }
    ),
    n
}
function Hy(e, t, n={}) {
    const {window: r=Mn, ...i} = n;
    let o;
    const s = ti( () => r && "ResizeObserver"in r)
      , u = () => {
        o && (o.disconnect(),
        o = void 0)
    }
      , c = Fe( () => Array.isArray(e) ? e.map(p => Ct(p)) : [Ct(e)])
      , f = tt(c, p => {
        if (u(),
        s.value && r) {
            o = new ResizeObserver(t);
            for (const g of p)
                g && o.observe(g, i)
        }
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , h = () => {
        u(),
        f()
    }
    ;
    return gr(h),
    {
        isSupported: s,
        stop: h
    }
}
function HM(e, t={}) {
    const {reset: n=!0, windowResize: r=!0, windowScroll: i=!0, immediate: o=!0} = t
      , s = Me(0)
      , u = Me(0)
      , c = Me(0)
      , f = Me(0)
      , h = Me(0)
      , p = Me(0)
      , g = Me(0)
      , y = Me(0);
    function _() {
        const R = Ct(e);
        if (!R) {
            n && (s.value = 0,
            u.value = 0,
            c.value = 0,
            f.value = 0,
            h.value = 0,
            p.value = 0,
            g.value = 0,
            y.value = 0);
            return
        }
        const F = R.getBoundingClientRect();
        s.value = F.height,
        u.value = F.bottom,
        c.value = F.left,
        f.value = F.right,
        h.value = F.top,
        p.value = F.width,
        g.value = F.x,
        y.value = F.y
    }
    return Hy(e, _),
    tt( () => Ct(e), R => !R && _()),
    Lx(e, _, {
        attributeFilter: ["style", "class"]
    }),
    i && jt("scroll", _, {
        capture: !0,
        passive: !0
    }),
    r && jt("resize", _, {
        passive: !0
    }),
    Ds( () => {
        o && _()
    }
    ),
    {
        height: s,
        bottom: u,
        left: c,
        right: f,
        top: h,
        width: p,
        x: g,
        y,
        update: _
    }
}
function KM(e, t={
    width: 0,
    height: 0
}, n={}) {
    const {window: r=Mn, box: i="content-box"} = n
      , o = Fe( () => {
        var p, g;
        return (g = (p = Ct(e)) == null ? void 0 : p.namespaceURI) == null ? void 0 : g.includes("svg")
    }
    )
      , s = Me(t.width)
      , u = Me(t.height)
      , {stop: c} = Hy(e, ([p]) => {
        const g = i === "border-box" ? p.borderBoxSize : i === "content-box" ? p.contentBoxSize : p.devicePixelContentBoxSize;
        if (r && o.value) {
            const y = Ct(e);
            if (y) {
                const _ = y.getBoundingClientRect();
                s.value = _.width,
                u.value = _.height
            }
        } else if (g) {
            const y = Array.isArray(g) ? g : [g];
            s.value = y.reduce( (_, {inlineSize: R}) => _ + R, 0),
            u.value = y.reduce( (_, {blockSize: R}) => _ + R, 0)
        } else
            s.value = p.contentRect.width,
            u.value = p.contentRect.height
    }
    , n);
    Ds( () => {
        const p = Ct(e);
        p && (s.value = "offsetWidth"in p ? p.offsetWidth : t.width,
        u.value = "offsetHeight"in p ? p.offsetHeight : t.height)
    }
    );
    const f = tt( () => Ct(e), p => {
        s.value = p ? t.width : 0,
        u.value = p ? t.height : 0
    }
    );
    function h() {
        c(),
        f()
    }
    return {
        width: s,
        height: u,
        stop: h
    }
}
function kx(e, t, n={}) {
    const {root: r, rootMargin: i="0px", threshold: o=.1, window: s=Mn, immediate: u=!0} = n
      , c = ti( () => s && "IntersectionObserver"in s)
      , f = Fe( () => {
        const _ = bt(e);
        return (Array.isArray(_) ? _ : [_]).map(Ct).filter($y)
    }
    );
    let h = Tn;
    const p = Me(u)
      , g = c.value ? tt( () => [f.value, Ct(r), p.value], ([_,R]) => {
        if (h(),
        !p.value || !_.length)
            return;
        const F = new IntersectionObserver(t,{
            root: Ct(R),
            rootMargin: i,
            threshold: o
        });
        _.forEach(T => T && F.observe(T)),
        h = () => {
            F.disconnect(),
            h = Tn
        }
    }
    , {
        immediate: u,
        flush: "post"
    }) : Tn
      , y = () => {
        h(),
        g(),
        p.value = !1
    }
    ;
    return gr(y),
    {
        isSupported: c,
        isActive: p,
        pause() {
            h(),
            p.value = !1
        },
        resume() {
            p.value = !0
        },
        stop: y
    }
}
function qM(e, t={}) {
    const {window: n=Mn, scrollTarget: r, threshold: i=0} = t
      , o = Me(!1);
    return kx(e, s => {
        let u = o.value
          , c = 0;
        for (const f of s)
            f.time >= c && (c = f.time,
            u = f.isIntersecting);
        o.value = u
    }
    , {
        root: r,
        window: n,
        threshold: i
    }),
    o
}
const Lp = ["fullscreenchange", "webkitfullscreenchange", "webkitendfullscreen", "mozfullscreenchange", "MSFullscreenChange"];
function GM(e, t={}) {
    const {document: n=Uy, autoExit: r=!1} = t
      , i = Fe( () => {
        var T;
        return (T = Ct(e)) != null ? T : n == null ? void 0 : n.querySelector("html")
    }
    )
      , o = Me(!1)
      , s = Fe( () => ["requestFullscreen", "webkitRequestFullscreen", "webkitEnterFullscreen", "webkitEnterFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].find(T => n && T in n || i.value && T in i.value))
      , u = Fe( () => ["exitFullscreen", "webkitExitFullscreen", "webkitExitFullScreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].find(T => n && T in n || i.value && T in i.value))
      , c = Fe( () => ["fullScreen", "webkitIsFullScreen", "webkitDisplayingFullscreen", "mozFullScreen", "msFullscreenElement"].find(T => n && T in n || i.value && T in i.value))
      , f = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].find(T => n && T in n)
      , h = ti( () => i.value && n && s.value !== void 0 && u.value !== void 0 && c.value !== void 0)
      , p = () => f ? (n == null ? void 0 : n[f]) === i.value : !1
      , g = () => {
        if (c.value) {
            if (n && n[c.value] != null)
                return n[c.value];
            {
                const T = i.value;
                if ((T == null ? void 0 : T[c.value]) != null)
                    return !!T[c.value]
            }
        }
        return !1
    }
    ;
    async function y() {
        if (!(!h.value || !o.value)) {
            if (u.value)
                if ((n == null ? void 0 : n[u.value]) != null)
                    await n[u.value]();
                else {
                    const T = i.value;
                    (T == null ? void 0 : T[u.value]) != null && await T[u.value]()
                }
            o.value = !1
        }
    }
    async function _() {
        if (!h.value || o.value)
            return;
        g() && await y();
        const T = i.value;
        s.value && (T == null ? void 0 : T[s.value]) != null && (await T[s.value](),
        o.value = !0)
    }
    async function R() {
        await (o.value ? y() : _())
    }
    const F = () => {
        const T = g();
        (!T || T && p()) && (o.value = T)
    }
    ;
    return jt(n, Lp, F, !1),
    jt( () => Ct(i), Lp, F, !1),
    r && gr(y),
    {
        isSupported: h,
        isFullscreen: o,
        enter: _,
        exit: y,
        toggle: R
    }
}
const Np = 1;
function zM(e, t={}) {
    const {throttle: n=0, idle: r=200, onStop: i=Tn, onScroll: o=Tn, offset: s={
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, eventListenerOptions: u={
        capture: !1,
        passive: !0
    }, behavior: c="auto", window: f=Mn, onError: h=U => {
        console.error(U)
    }
    } = t
      , p = Me(0)
      , g = Me(0)
      , y = Fe({
        get() {
            return p.value
        },
        set(U) {
            R(U, void 0)
        }
    })
      , _ = Fe({
        get() {
            return g.value
        },
        set(U) {
            R(void 0, U)
        }
    });
    function R(U, Z) {
        var j, ne, be, ae;
        if (!f)
            return;
        const we = bt(e);
        if (!we)
            return;
        (be = we instanceof Document ? f.document.body : we) == null || be.scrollTo({
            top: (j = bt(Z)) != null ? j : _.value,
            left: (ne = bt(U)) != null ? ne : y.value,
            behavior: bt(c)
        });
        const Ve = ((ae = we == null ? void 0 : we.document) == null ? void 0 : ae.documentElement) || (we == null ? void 0 : we.documentElement) || we;
        y != null && (p.value = Ve.scrollLeft),
        _ != null && (g.value = Ve.scrollTop)
    }
    const F = Me(!1)
      , T = yn({
        left: !0,
        right: !1,
        top: !0,
        bottom: !1
    })
      , A = yn({
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
    })
      , E = U => {
        F.value && (F.value = !1,
        A.left = !1,
        A.right = !1,
        A.top = !1,
        A.bottom = !1,
        i(U))
    }
      , I = Vy(E, n + r)
      , W = U => {
        var Z;
        if (!f)
            return;
        const j = ((Z = U == null ? void 0 : U.document) == null ? void 0 : Z.documentElement) || (U == null ? void 0 : U.documentElement) || Ct(U)
          , {display: ne, flexDirection: be} = getComputedStyle(j)
          , ae = j.scrollLeft;
        A.left = ae < p.value,
        A.right = ae > p.value;
        const we = Math.abs(ae) <= (s.left || 0)
          , Ve = Math.abs(ae) + j.clientWidth >= j.scrollWidth - (s.right || 0) - Np;
        ne === "flex" && be === "row-reverse" ? (T.left = Ve,
        T.right = we) : (T.left = we,
        T.right = Ve),
        p.value = ae;
        let Ne = j.scrollTop;
        U === f.document && !Ne && (Ne = f.document.body.scrollTop),
        A.top = Ne < g.value,
        A.bottom = Ne > g.value;
        const le = Math.abs(Ne) <= (s.top || 0)
          , je = Math.abs(Ne) + j.clientHeight >= j.scrollHeight - (s.bottom || 0) - Np;
        ne === "flex" && be === "column-reverse" ? (T.top = je,
        T.bottom = le) : (T.top = le,
        T.bottom = je),
        g.value = Ne
    }
      , $ = U => {
        var Z;
        if (!f)
            return;
        const j = (Z = U.target.documentElement) != null ? Z : U.target;
        W(j),
        F.value = !0,
        I(U),
        o(U)
    }
    ;
    return jt(e, "scroll", n ? Rx($, n, !0, !1) : $, u),
    Ds( () => {
        try {
            const U = bt(e);
            if (!U)
                return;
            W(U)
        } catch (U) {
            h(U)
        }
    }
    ),
    jt(e, "scrollend", E, u),
    {
        x: y,
        y: _,
        isScrolling: F,
        arrivedState: T,
        directions: A,
        measure() {
            const U = bt(e);
            f && U && W(U)
        }
    }
}
function YM(e={}) {
    const {window: t=Mn} = e
      , n = ti( () => t && "screen"in t && "orientation"in t.screen)
      , r = n.value ? t.screen.orientation : {}
      , i = Me(r.type)
      , o = Me(r.angle || 0);
    return n.value && jt(t, "orientationchange", () => {
        i.value = r.type,
        o.value = r.angle
    }
    ),
    {
        isSupported: n,
        orientation: i,
        angle: o,
        lockOrientation: c => n.value && typeof r.lock == "function" ? r.lock(c) : Promise.reject(new Error("Not supported")),
        unlockOrientation: () => {
            n.value && typeof r.unlock == "function" && r.unlock()
        }
    }
}
function JM(e=Mx()) {
    const t = Fi()
      , n = () => {
        const r = Ct(e);
        r && (t.value = r.parentElement)
    }
    ;
    return Ds(n),
    tt( () => bt(e), n),
    t
}
function XM(e="history", t={}) {
    const {initialValue: n={}, removeNullishValues: r=!0, removeFalsyValues: i=!1, write: o=!0, window: s=Mn} = t;
    if (!s)
        return yn(n);
    const u = yn({});
    function c() {
        if (e === "history")
            return s.location.search || "";
        if (e === "hash") {
            const T = s.location.hash || ""
              , A = T.indexOf("?");
            return A > 0 ? T.slice(A) : ""
        } else
            return (s.location.hash || "").replace(/^#/, "")
    }
    function f(T) {
        const A = T.toString();
        if (e === "history")
            return `${A ? `?${A}` : ""}${s.location.hash || ""}`;
        if (e === "hash-params")
            return `${s.location.search || ""}${A ? `#${A}` : ""}`;
        const E = s.location.hash || "#"
          , I = E.indexOf("?");
        return I > 0 ? `${E.slice(0, I)}${A ? `?${A}` : ""}` : `${E}${A ? `?${A}` : ""}`
    }
    function h() {
        return new URLSearchParams(c())
    }
    function p(T) {
        const A = new Set(Object.keys(u));
        for (const E of T.keys()) {
            const I = T.getAll(E);
            u[E] = I.length > 1 ? I : T.get(E) || "",
            A.delete(E)
        }
        Array.from(A).forEach(E => delete u[E])
    }
    const {pause: g, resume: y} = Cx(u, () => {
        const T = new URLSearchParams("");
        Object.keys(u).forEach(A => {
            const E = u[A];
            Array.isArray(E) ? E.forEach(I => T.append(A, I)) : r && E == null || i && !E ? T.delete(A) : T.set(A, E)
        }
        ),
        _(T)
    }
    , {
        deep: !0
    });
    function _(T, A) {
        g(),
        A && p(T),
        s.history.replaceState(s.history.state, s.document.title, s.location.pathname + f(T)),
        y()
    }
    function R() {
        o && _(h(), !0)
    }
    jt(s, "popstate", R, !1),
    e !== "history" && jt(s, "hashchange", R, !1);
    const F = h();
    return F.keys().next().value ? p(F) : Object.assign(u, n),
    u
}
function QM(e={}) {
    const {window: t=Mn, initialWidth: n=Number.POSITIVE_INFINITY, initialHeight: r=Number.POSITIVE_INFINITY, listenOrientation: i=!0, includeScrollbar: o=!0} = e
      , s = Me(n)
      , u = Me(r)
      , c = () => {
        t && (o ? (s.value = t.innerWidth,
        u.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth,
        u.value = t.document.documentElement.clientHeight))
    }
    ;
    if (c(),
    Ds(c),
    jt("resize", c, {
        passive: !0
    }),
    i) {
        const f = Nx("(orientation: portrait)");
        tt(f, () => c())
    }
    return {
        width: s,
        height: u
    }
}
function Ky(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: $x} = Object.prototype
  , {getPrototypeOf: ed} = Object
  , Lu = (e => t => {
    const n = $x.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , zn = e => (e = e.toLowerCase(),
t => Lu(t) === e)
  , Nu = e => t => typeof t === e
  , {isArray: So} = Array
  , vs = Nu("undefined");
function Dx(e) {
    return e !== null && !vs(e) && e.constructor !== null && !vs(e.constructor) && Ln(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const qy = zn("ArrayBuffer");
function jx(e) {
    let t;
    return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qy(e.buffer),
    t
}
const Bx = Nu("string")
  , Ln = Nu("function")
  , Gy = Nu("number")
  , Mu = e => e !== null && typeof e == "object"
  , Vx = e => e === !0 || e === !1
  , Fa = e => {
    if (Lu(e) !== "object")
        return !1;
    const t = ed(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , Ux = zn("Date")
  , Wx = zn("File")
  , Hx = zn("Blob")
  , Kx = zn("FileList")
  , qx = e => Mu(e) && Ln(e.pipe)
  , Gx = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || Ln(e.append) && ((t = Lu(e)) === "formdata" || t === "object" && Ln(e.toString) && e.toString() === "[object FormData]"))
}
  , zx = zn("URLSearchParams")
  , [Yx,Jx,Xx,Qx] = ["ReadableStream", "Request", "Response", "Headers"].map(zn)
  , Zx = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function js(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e == "undefined")
        return;
    let r, i;
    if (typeof e != "object" && (e = [e]),
    So(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = o.length;
        let u;
        for (r = 0; r < s; r++)
            u = o[r],
            t.call(null, e[u], u, e)
    }
}
function zy(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
const Yy = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global
  , Jy = e => !vs(e) && e !== Yy;
function Oc() {
    const {caseless: e} = Jy(this) && this || {}
      , t = {}
      , n = (r, i) => {
        const o = e && zy(t, i) || i;
        Fa(t[o]) && Fa(r) ? t[o] = Oc(t[o], r) : Fa(r) ? t[o] = Oc({}, r) : So(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && js(arguments[r], n);
    return t
}
const eP = (e, t, n, {allOwnKeys: r}={}) => (js(t, (i, o) => {
    n && Ln(i) ? e[o] = Ky(i, n) : e[o] = i
}
, {
    allOwnKeys: r
}),
e)
  , tP = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , nP = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , rP = (e, t, n, r) => {
    let i, o, s;
    const u = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        o = i.length; o-- > 0; )
            s = i[o],
            (!r || r(s, e, t)) && !u[s] && (t[s] = e[s],
            u[s] = !0);
        e = n !== !1 && ed(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , iP = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , oP = e => {
    if (!e)
        return null;
    if (So(e))
        return e;
    let t = e.length;
    if (!Gy(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , sP = (e => t => e && t instanceof e)(typeof Uint8Array != "undefined" && ed(Uint8Array))
  , aP = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1])
    }
}
  , uP = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , lP = zn("HTMLFormElement")
  , cP = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
    return r.toUpperCase() + i
})
  , Mp = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , fP = zn("RegExp")
  , Xy = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    js(n, (i, o) => {
        let s;
        (s = t(i, o, e)) !== !1 && (r[o] = s || i)
    }
    ),
    Object.defineProperties(e, r)
}
  , dP = e => {
    Xy(e, (t, n) => {
        if (Ln(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (Ln(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , hP = (e, t) => {
    const n = {}
      , r = i => {
        i.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return So(e) ? r(e) : r(String(e).split(t)),
    n
}
  , pP = () => {}
  , mP = (e, t) => e != null && Number.isFinite(e = +e) ? e : t
  , Ml = "abcdefghijklmnopqrstuvwxyz"
  , kp = "0123456789"
  , Qy = {
    DIGIT: kp,
    ALPHA: Ml,
    ALPHA_DIGIT: Ml + Ml.toUpperCase() + kp
}
  , gP = (e=16, t=Qy.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function vP(e) {
    return !!(e && Ln(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const yP = e => {
    const t = new Array(10)
      , n = (r, i) => {
        if (Mu(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[i] = r;
                const o = So(r) ? [] : {};
                return js(r, (s, u) => {
                    const c = n(s, i + 1);
                    !vs(c) && (o[u] = c)
                }
                ),
                t[i] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , bP = zn("AsyncFunction")
  , _P = e => e && (Mu(e) || Ln(e)) && Ln(e.then) && Ln(e.catch)
  , te = {
    isArray: So,
    isArrayBuffer: qy,
    isBuffer: Dx,
    isFormData: Gx,
    isArrayBufferView: jx,
    isString: Bx,
    isNumber: Gy,
    isBoolean: Vx,
    isObject: Mu,
    isPlainObject: Fa,
    isReadableStream: Yx,
    isRequest: Jx,
    isResponse: Xx,
    isHeaders: Qx,
    isUndefined: vs,
    isDate: Ux,
    isFile: Wx,
    isBlob: Hx,
    isRegExp: fP,
    isFunction: Ln,
    isStream: qx,
    isURLSearchParams: zx,
    isTypedArray: sP,
    isFileList: Kx,
    forEach: js,
    merge: Oc,
    extend: eP,
    trim: Zx,
    stripBOM: tP,
    inherits: nP,
    toFlatObject: rP,
    kindOf: Lu,
    kindOfTest: zn,
    endsWith: iP,
    toArray: oP,
    forEachEntry: aP,
    matchAll: uP,
    isHTMLForm: lP,
    hasOwnProperty: Mp,
    hasOwnProp: Mp,
    reduceDescriptors: Xy,
    freezeMethods: dP,
    toObjectSet: hP,
    toCamelCase: cP,
    noop: pP,
    toFiniteNumber: mP,
    findKey: zy,
    global: Yy,
    isContextDefined: Jy,
    ALPHABET: Qy,
    generateString: gP,
    isSpecCompliantForm: vP,
    toJSONObject: yP,
    isAsyncFn: bP,
    isThenable: _P
};
function Ge(e, t, n, r, i) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i)
}
te.inherits(Ge, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: te.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Zy = Ge.prototype
  , eb = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    eb[e] = {
        value: e
    }
}
);
Object.defineProperties(Ge, eb);
Object.defineProperty(Zy, "isAxiosError", {
    value: !0
});
Ge.from = (e, t, n, r, i, o) => {
    const s = Object.create(Zy);
    return te.toFlatObject(e, s, function(c) {
        return c !== Error.prototype
    }, u => u !== "isAxiosError"),
    Ge.call(s, e.message, t, n, r, i),
    s.cause = e,
    s.name = e.name,
    o && Object.assign(s, o),
    s
}
;
const wP = null;
function Sc(e) {
    return te.isPlainObject(e) || te.isArray(e)
}
function tb(e) {
    return te.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function $p(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = tb(i),
        !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}
function EP(e) {
    return te.isArray(e) && !e.some(Sc)
}
const OP = te.toFlatObject(te, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function ku(e, t, n) {
    if (!te.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = te.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(R, F) {
        return !te.isUndefined(F[R])
    });
    const r = n.metaTokens
      , i = n.visitor || h
      , o = n.dots
      , s = n.indexes
      , c = (n.Blob || typeof Blob != "undefined" && Blob) && te.isSpecCompliantForm(t);
    if (!te.isFunction(i))
        throw new TypeError("visitor must be a function");
    function f(_) {
        if (_ === null)
            return "";
        if (te.isDate(_))
            return _.toISOString();
        if (!c && te.isBlob(_))
            throw new Ge("Blob is not supported. Use a Buffer instead.");
        return te.isArrayBuffer(_) || te.isTypedArray(_) ? c && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _
    }
    function h(_, R, F) {
        let T = _;
        if (_ && !F && typeof _ == "object") {
            if (te.endsWith(R, "{}"))
                R = r ? R : R.slice(0, -2),
                _ = JSON.stringify(_);
            else if (te.isArray(_) && EP(_) || (te.isFileList(_) || te.endsWith(R, "[]")) && (T = te.toArray(_)))
                return R = tb(R),
                T.forEach(function(E, I) {
                    !(te.isUndefined(E) || E === null) && t.append(s === !0 ? $p([R], I, o) : s === null ? R : R + "[]", f(E))
                }),
                !1
        }
        return Sc(_) ? !0 : (t.append($p(F, R, o), f(_)),
        !1)
    }
    const p = []
      , g = Object.assign(OP, {
        defaultVisitor: h,
        convertValue: f,
        isVisitable: Sc
    });
    function y(_, R) {
        if (!te.isUndefined(_)) {
            if (p.indexOf(_) !== -1)
                throw Error("Circular reference detected in " + R.join("."));
            p.push(_),
            te.forEach(_, function(T, A) {
                (!(te.isUndefined(T) || T === null) && i.call(t, T, te.isString(A) ? A.trim() : A, R, g)) === !0 && y(T, R ? R.concat(A) : [A])
            }),
            p.pop()
        }
    }
    if (!te.isObject(e))
        throw new TypeError("data must be an object");
    return y(e),
    t
}
function Dp(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function td(e, t) {
    this._pairs = [],
    e && ku(e, this, t)
}
const nb = td.prototype;
nb.append = function(t, n) {
    this._pairs.push([t, n])
}
;
nb.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Dp)
    }
    : Dp;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
;
function SP(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function rb(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || SP
      , i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = te.isURLSearchParams(t) ? t.toString() : new td(t,n).toString(r),
    o) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class jp {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        te.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const ib = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , AP = typeof URLSearchParams != "undefined" ? URLSearchParams : td
  , TP = typeof FormData != "undefined" ? FormData : null
  , RP = typeof Blob != "undefined" ? Blob : null
  , CP = {
    isBrowser: !0,
    classes: {
        URLSearchParams: AP,
        FormData: TP,
        Blob: RP
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , nd = typeof window != "undefined" && typeof document != "undefined"
  , xP = (e => nd && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator != "undefined" && navigator.product)
  , PP = typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , IP = nd && window.location.href || "http://localhost"
  , FP = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: nd,
    hasStandardBrowserEnv: xP,
    hasStandardBrowserWebWorkerEnv: PP,
    origin: IP
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wn = {
    ...FP,
    ...CP
};
function LP(e, t) {
    return ku(e, new Wn.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return Wn.isNode && te.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function NP(e) {
    return te.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function MP(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function ob(e) {
    function t(n, r, i, o) {
        let s = n[o++];
        if (s === "__proto__")
            return !0;
        const u = Number.isFinite(+s)
          , c = o >= n.length;
        return s = !s && te.isArray(i) ? i.length : s,
        c ? (te.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r,
        !u) : ((!i[s] || !te.isObject(i[s])) && (i[s] = []),
        t(n, r, i[s], o) && te.isArray(i[s]) && (i[s] = MP(i[s])),
        !u)
    }
    if (te.isFormData(e) && te.isFunction(e.entries)) {
        const n = {};
        return te.forEachEntry(e, (r, i) => {
            t(NP(r), i, n, 0)
        }
        ),
        n
    }
    return null
}
function kP(e, t, n) {
    if (te.isString(e))
        try {
            return (t || JSON.parse)(e),
            te.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const Bs = {
    transitional: ib,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , i = r.indexOf("application/json") > -1
          , o = te.isObject(t);
        if (o && te.isHTMLForm(t) && (t = new FormData(t)),
        te.isFormData(t))
            return i ? JSON.stringify(ob(t)) : t;
        if (te.isArrayBuffer(t) || te.isBuffer(t) || te.isStream(t) || te.isFile(t) || te.isBlob(t) || te.isReadableStream(t))
            return t;
        if (te.isArrayBufferView(t))
            return t.buffer;
        if (te.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let u;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return LP(t, this.formSerializer).toString();
            if ((u = te.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return ku(u ? {
                    "files[]": t
                } : t, c && new c, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1),
        kP(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Bs.transitional
          , r = n && n.forcedJSONParsing
          , i = this.responseType === "json";
        if (te.isResponse(t) || te.isReadableStream(t))
            return t;
        if (t && te.isString(t) && (r && !this.responseType || i)) {
            const s = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (u) {
                if (s)
                    throw u.name === "SyntaxError" ? Ge.from(u, Ge.ERR_BAD_RESPONSE, this, null, this.response) : u
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Wn.classes.FormData,
        Blob: Wn.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
te.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Bs.headers[e] = {}
}
);
const $P = te.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , DP = e => {
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function(s) {
        i = s.indexOf(":"),
        n = s.substring(0, i).trim().toLowerCase(),
        r = s.substring(i + 1).trim(),
        !(!n || t[n] && $P[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Bp = Symbol("internals");
function Uo(e) {
    return e && String(e).trim().toLowerCase()
}
function La(e) {
    return e === !1 || e == null ? e : te.isArray(e) ? e.map(La) : String(e)
}
function jP(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const BP = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function kl(e, t, n, r, i) {
    if (te.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    !!te.isString(t)) {
        if (te.isString(r))
            return t.indexOf(r) !== -1;
        if (te.isRegExp(r))
            return r.test(t)
    }
}
function VP(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function UP(e, t) {
    const n = te.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, s) {
                return this[r].call(this, t, i, o, s)
            },
            configurable: !0
        })
    }
    )
}
let gn = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;
        function o(u, c, f) {
            const h = Uo(c);
            if (!h)
                throw new Error("header name must be a non-empty string");
            const p = te.findKey(i, h);
            (!p || i[p] === void 0 || f === !0 || f === void 0 && i[p] !== !1) && (i[p || c] = La(u))
        }
        const s = (u, c) => te.forEach(u, (f, h) => o(f, h, c));
        if (te.isPlainObject(t) || t instanceof this.constructor)
            s(t, n);
        else if (te.isString(t) && (t = t.trim()) && !BP(t))
            s(DP(t), n);
        else if (te.isHeaders(t))
            for (const [u,c] of t.entries())
                o(c, u, r);
        else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = Uo(t),
        t) {
            const r = te.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return jP(i);
                if (te.isFunction(n))
                    return n.call(this, i, r);
                if (te.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Uo(t),
        t) {
            const r = te.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || kl(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function o(s) {
            if (s = Uo(s),
            s) {
                const u = te.findKey(r, s);
                u && (!n || kl(r, r[u], u, n)) && (delete r[u],
                i = !0)
            }
        }
        return te.isArray(t) ? t.forEach(o) : o(t),
        i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , i = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || kl(this, this[o], o, t, !0)) && (delete this[o],
            i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this
          , r = {};
        return te.forEach(this, (i, o) => {
            const s = te.findKey(r, o);
            if (s) {
                n[s] = La(i),
                delete n[o];
                return
            }
            const u = t ? VP(o) : String(o).trim();
            u !== o && delete n[o],
            n[u] = La(i),
            r[u] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return te.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && te.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)),
        r
    }
    static accessor(t) {
        const r = (this[Bp] = this[Bp] = {
            accessors: {}
        }).accessors
          , i = this.prototype;
        function o(s) {
            const u = Uo(s);
            r[u] || (UP(i, s),
            r[u] = !0)
        }
        return te.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
;
gn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
te.reduceDescriptors(gn.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
te.freezeMethods(gn);
function $l(e, t) {
    const n = this || Bs
      , r = t || n
      , i = gn.from(r.headers);
    let o = r.data;
    return te.forEach(e, function(u) {
        o = u.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
}
function sb(e) {
    return !!(e && e.__CANCEL__)
}
function Ao(e, t, n) {
    Ge.call(this, e == null ? "canceled" : e, Ge.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
te.inherits(Ao, Ge, {
    __CANCEL__: !0
});
function ab(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new Ge("Request failed with status code " + n.status,[Ge.ERR_BAD_REQUEST, Ge.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function WP(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function HP(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let i = 0, o = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(c) {
        const f = Date.now()
          , h = r[o];
        s || (s = f),
        n[i] = c,
        r[i] = f;
        let p = o
          , g = 0;
        for (; p !== i; )
            g += n[p++],
            p = p % e;
        if (i = (i + 1) % e,
        i === o && (o = (o + 1) % e),
        f - s < t)
            return;
        const y = h && f - h;
        return y ? Math.round(g * 1e3 / y) : void 0
    }
}
function KP(e, t) {
    let n = 0;
    const r = 1e3 / t;
    let i = null;
    return function() {
        const s = this === !0
          , u = Date.now();
        if (s || u - n > r)
            return i && (clearTimeout(i),
            i = null),
            n = u,
            e.apply(null, arguments);
        i || (i = setTimeout( () => (i = null,
        n = Date.now(),
        e.apply(null, arguments)), r - (u - n)))
    }
}
const nu = (e, t, n=3) => {
    let r = 0;
    const i = HP(50, 250);
    return KP(o => {
        const s = o.loaded
          , u = o.lengthComputable ? o.total : void 0
          , c = s - r
          , f = i(c)
          , h = s <= u;
        r = s;
        const p = {
            loaded: s,
            total: u,
            progress: u ? s / u : void 0,
            bytes: c,
            rate: f || void 0,
            estimated: f && u && h ? (u - s) / f : void 0,
            event: o,
            lengthComputable: u != null
        };
        p[t ? "download" : "upload"] = !0,
        e(p)
    }
    , n)
}
  , qP = Wn.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function i(o) {
        let s = o;
        return t && (n.setAttribute("href", s),
        s = n.href),
        n.setAttribute("href", s),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = i(window.location.href),
    function(s) {
        const u = te.isString(s) ? i(s) : s;
        return u.protocol === r.protocol && u.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , GP = Wn.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, o) {
        const s = [e + "=" + encodeURIComponent(t)];
        te.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
        te.isString(r) && s.push("path=" + r),
        te.isString(i) && s.push("domain=" + i),
        o === !0 && s.push("secure"),
        document.cookie = s.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function zP(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function YP(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function ub(e, t) {
    return e && !zP(t) ? YP(e, t) : t
}
const Vp = e => e instanceof gn ? {
    ...e
} : e;
function Oi(e, t) {
    t = t || {};
    const n = {};
    function r(f, h, p) {
        return te.isPlainObject(f) && te.isPlainObject(h) ? te.merge.call({
            caseless: p
        }, f, h) : te.isPlainObject(h) ? te.merge({}, h) : te.isArray(h) ? h.slice() : h
    }
    function i(f, h, p) {
        if (te.isUndefined(h)) {
            if (!te.isUndefined(f))
                return r(void 0, f, p)
        } else
            return r(f, h, p)
    }
    function o(f, h) {
        if (!te.isUndefined(h))
            return r(void 0, h)
    }
    function s(f, h) {
        if (te.isUndefined(h)) {
            if (!te.isUndefined(f))
                return r(void 0, f)
        } else
            return r(void 0, h)
    }
    function u(f, h, p) {
        if (p in t)
            return r(f, h);
        if (p in e)
            return r(void 0, f)
    }
    const c = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: u,
        headers: (f, h) => i(Vp(f), Vp(h), !0)
    };
    return te.forEach(Object.keys(Object.assign({}, e, t)), function(h) {
        const p = c[h] || i
          , g = p(e[h], t[h], h);
        te.isUndefined(g) && p !== u || (n[h] = g)
    }),
    n
}
const lb = e => {
    const t = Oi({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: u} = t;
    t.headers = s = gn.from(s),
    t.url = rb(ub(t.baseURL, t.url), e.params, e.paramsSerializer),
    u && s.set("Authorization", "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : "")));
    let c;
    if (te.isFormData(n)) {
        if (Wn.hasStandardBrowserEnv || Wn.hasStandardBrowserWebWorkerEnv)
            s.setContentType(void 0);
        else if ((c = s.getContentType()) !== !1) {
            const [f,...h] = c ? c.split(";").map(p => p.trim()).filter(Boolean) : [];
            s.setContentType([f || "multipart/form-data", ...h].join("; "))
        }
    }
    if (Wn.hasStandardBrowserEnv && (r && te.isFunction(r) && (r = r(t)),
    r || r !== !1 && qP(t.url))) {
        const f = i && o && GP.read(o);
        f && s.set(i, f)
    }
    return t
}
  , JP = typeof XMLHttpRequest != "undefined"
  , XP = JP && function(e) {
    return new Promise(function(n, r) {
        const i = lb(e);
        let o = i.data;
        const s = gn.from(i.headers).normalize();
        let {responseType: u} = i, c;
        function f() {
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c)
        }
        let h = new XMLHttpRequest;
        h.open(i.method.toUpperCase(), i.url, !0),
        h.timeout = i.timeout;
        function p() {
            if (!h)
                return;
            const y = gn.from("getAllResponseHeaders"in h && h.getAllResponseHeaders())
              , R = {
                data: !u || u === "text" || u === "json" ? h.responseText : h.response,
                status: h.status,
                statusText: h.statusText,
                headers: y,
                config: e,
                request: h
            };
            ab(function(T) {
                n(T),
                f()
            }, function(T) {
                r(T),
                f()
            }, R),
            h = null
        }
        "onloadend"in h ? h.onloadend = p : h.onreadystatechange = function() {
            !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(p)
        }
        ,
        h.onabort = function() {
            h && (r(new Ge("Request aborted",Ge.ECONNABORTED,i,h)),
            h = null)
        }
        ,
        h.onerror = function() {
            r(new Ge("Network Error",Ge.ERR_NETWORK,i,h)),
            h = null
        }
        ,
        h.ontimeout = function() {
            let _ = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
            const R = i.transitional || ib;
            i.timeoutErrorMessage && (_ = i.timeoutErrorMessage),
            r(new Ge(_,R.clarifyTimeoutError ? Ge.ETIMEDOUT : Ge.ECONNABORTED,i,h)),
            h = null
        }
        ,
        o === void 0 && s.setContentType(null),
        "setRequestHeader"in h && te.forEach(s.toJSON(), function(_, R) {
            h.setRequestHeader(R, _)
        }),
        te.isUndefined(i.withCredentials) || (h.withCredentials = !!i.withCredentials),
        u && u !== "json" && (h.responseType = i.responseType),
        typeof i.onDownloadProgress == "function" && h.addEventListener("progress", nu(i.onDownloadProgress, !0)),
        typeof i.onUploadProgress == "function" && h.upload && h.upload.addEventListener("progress", nu(i.onUploadProgress)),
        (i.cancelToken || i.signal) && (c = y => {
            h && (r(!y || y.type ? new Ao(null,e,h) : y),
            h.abort(),
            h = null)
        }
        ,
        i.cancelToken && i.cancelToken.subscribe(c),
        i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
        const g = WP(i.url);
        if (g && Wn.protocols.indexOf(g) === -1) {
            r(new Ge("Unsupported protocol " + g + ":",Ge.ERR_BAD_REQUEST,e));
            return
        }
        h.send(o || null)
    }
    )
}
  , QP = (e, t) => {
    let n = new AbortController, r;
    const i = function(c) {
        if (!r) {
            r = !0,
            s();
            const f = c instanceof Error ? c : this.reason;
            n.abort(f instanceof Ge ? f : new Ao(f instanceof Error ? f.message : f))
        }
    };
    let o = t && setTimeout( () => {
        i(new Ge(`timeout ${t} of ms exceeded`,Ge.ETIMEDOUT))
    }
    , t);
    const s = () => {
        e && (o && clearTimeout(o),
        o = null,
        e.forEach(c => {
            c && (c.removeEventListener ? c.removeEventListener("abort", i) : c.unsubscribe(i))
        }
        ),
        e = null)
    }
    ;
    e.forEach(c => c && c.addEventListener && c.addEventListener("abort", i));
    const {signal: u} = n;
    return u.unsubscribe = s,
    [u, () => {
        o && clearTimeout(o),
        o = null
    }
    ]
}
  , ZP = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, i;
    for (; r < n; )
        i = r + t,
        yield e.slice(r, i),
        r = i
}
  , eI = async function*(e, t, n) {
    for await(const r of e)
        yield*ZP(ArrayBuffer.isView(r) ? r : await n(String(r)), t)
}
  , Up = (e, t, n, r, i) => {
    const o = eI(e, t, i);
    let s = 0;
    return new ReadableStream({
        type: "bytes",
        async pull(u) {
            const {done: c, value: f} = await o.next();
            if (c) {
                u.close(),
                r();
                return
            }
            let h = f.byteLength;
            n && n(s += h),
            u.enqueue(new Uint8Array(f))
        },
        cancel(u) {
            return r(u),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Wp = (e, t) => {
    const n = e != null;
    return r => setTimeout( () => t({
        lengthComputable: n,
        total: e,
        loaded: r
    }))
}
  , $u = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , cb = $u && typeof ReadableStream == "function"
  , Ac = $u && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , tI = cb && ( () => {
    let e = !1;
    const t = new Request(Wn.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)()
  , Hp = 64 * 1024
  , Tc = cb && !!( () => {
    try {
        return te.isReadableStream(new Response("").body)
    } catch (e) {}
}
)()
  , ru = {
    stream: Tc && (e => e.body)
};
$u && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !ru[t] && (ru[t] = te.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new Ge(`Response type '${t}' is not supported`,Ge.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const nI = async e => {
    if (e == null)
        return 0;
    if (te.isBlob(e))
        return e.size;
    if (te.isSpecCompliantForm(e))
        return (await new Request(e).arrayBuffer()).byteLength;
    if (te.isArrayBufferView(e))
        return e.byteLength;
    if (te.isURLSearchParams(e) && (e = e + ""),
    te.isString(e))
        return (await Ac(e)).byteLength
}
  , rI = async (e, t) => {
    const n = te.toFiniteNumber(e.getContentLength());
    return n == null ? nI(t) : n
}
  , iI = $u && (async e => {
    let {url: t, method: n, data: r, signal: i, cancelToken: o, timeout: s, onDownloadProgress: u, onUploadProgress: c, responseType: f, headers: h, withCredentials: p="same-origin", fetchOptions: g} = lb(e);
    f = f ? (f + "").toLowerCase() : "text";
    let[y,_] = i || o || s ? QP([i, o], s) : [], R, F;
    const T = () => {
        !R && setTimeout( () => {
            y && y.unsubscribe()
        }
        ),
        R = !0
    }
    ;
    let A;
    try {
        if (c && tI && n !== "get" && n !== "head" && (A = await rI(h, r)) !== 0) {
            let $ = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), U;
            te.isFormData(r) && (U = $.headers.get("content-type")) && h.setContentType(U),
            $.body && (r = Up($.body, Hp, Wp(A, nu(c)), null, Ac))
        }
        te.isString(p) || (p = p ? "cors" : "omit"),
        F = new Request(t,{
            ...g,
            signal: y,
            method: n.toUpperCase(),
            headers: h.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: p
        });
        let E = await fetch(F);
        const I = Tc && (f === "stream" || f === "response");
        if (Tc && (u || I)) {
            const $ = {};
            ["status", "statusText", "headers"].forEach(Z => {
                $[Z] = E[Z]
            }
            );
            const U = te.toFiniteNumber(E.headers.get("content-length"));
            E = new Response(Up(E.body, Hp, u && Wp(U, nu(u, !0)), I && T, Ac),$)
        }
        f = f || "text";
        let W = await ru[te.findKey(ru, f) || "text"](E, e);
        return !I && T(),
        _ && _(),
        await new Promise( ($, U) => {
            ab($, U, {
                data: W,
                headers: gn.from(E.headers),
                status: E.status,
                statusText: E.statusText,
                config: e,
                request: F
            })
        }
        )
    } catch (E) {
        throw T(),
        E && E.name === "TypeError" && /fetch/i.test(E.message) ? Object.assign(new Ge("Network Error",Ge.ERR_NETWORK,e,F), {
            cause: E.cause || E
        }) : Ge.from(E, E && E.code, e, F)
    }
}
)
  , Rc = {
    http: wP,
    xhr: XP,
    fetch: iI
};
te.forEach(Rc, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch (n) {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Kp = e => `- ${e}`
  , oI = e => te.isFunction(e) || e === null || e === !1
  , fb = {
    getAdapter: e => {
        e = te.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const i = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let s;
            if (r = n,
            !oI(n) && (r = Rc[(s = String(n)).toLowerCase()],
            r === void 0))
                throw new Ge(`Unknown adapter '${s}'`);
            if (r)
                break;
            i[s || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(i).map( ([u,c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? o.length > 1 ? `since :
` + o.map(Kp).join(`
`) : " " + Kp(o[0]) : "as no adapter specified";
            throw new Ge("There is no suitable adapter to dispatch the request " + s,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: Rc
};
function Dl(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Ao(null,e)
}
function qp(e) {
    return Dl(e),
    e.headers = gn.from(e.headers),
    e.data = $l.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    fb.getAdapter(e.adapter || Bs.adapter)(e).then(function(r) {
        return Dl(e),
        r.data = $l.call(e, e.transformResponse, r),
        r.headers = gn.from(r.headers),
        r
    }, function(r) {
        return sb(r) || (Dl(e),
        r && r.response && (r.response.data = $l.call(e, e.transformResponse, r.response),
        r.response.headers = gn.from(r.response.headers))),
        Promise.reject(r)
    })
}
const db = "1.7.2"
  , rd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    rd[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Gp = {};
rd.transitional = function(t, n, r) {
    function i(o, s) {
        return "[Axios v" + db + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
    }
    return (o, s, u) => {
        if (t === !1)
            throw new Ge(i(s, " has been removed" + (n ? " in " + n : "")),Ge.ERR_DEPRECATED);
        return n && !Gp[s] && (Gp[s] = !0,
        console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, s, u) : !0
    }
}
;
function sI(e, t, n) {
    if (typeof e != "object")
        throw new Ge("options must be an object",Ge.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const o = r[i]
          , s = t[o];
        if (s) {
            const u = e[o]
              , c = u === void 0 || s(u, o, e);
            if (c !== !0)
                throw new Ge("option " + o + " must be " + c,Ge.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new Ge("Unknown option " + o,Ge.ERR_BAD_OPTION)
    }
}
const Cc = {
    assertOptions: sI,
    validators: rd
}
  , Fr = Cc.validators;
let vi = class {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new jp,
            response: new jp
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i;
                Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error;
                const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch (s) {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Oi(this.defaults, n);
        const {transitional: r, paramsSerializer: i, headers: o} = n;
        r !== void 0 && Cc.assertOptions(r, {
            silentJSONParsing: Fr.transitional(Fr.boolean),
            forcedJSONParsing: Fr.transitional(Fr.boolean),
            clarifyTimeoutError: Fr.transitional(Fr.boolean)
        }, !1),
        i != null && (te.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : Cc.assertOptions(i, {
            encode: Fr.function,
            serialize: Fr.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = o && te.merge(o.common, o[n.method]);
        o && te.forEach(["delete", "get", "head", "post", "put", "patch", "common"], _ => {
            delete o[_]
        }
        ),
        n.headers = gn.concat(s, o);
        const u = [];
        let c = !0;
        this.interceptors.request.forEach(function(R) {
            typeof R.runWhen == "function" && R.runWhen(n) === !1 || (c = c && R.synchronous,
            u.unshift(R.fulfilled, R.rejected))
        });
        const f = [];
        this.interceptors.response.forEach(function(R) {
            f.push(R.fulfilled, R.rejected)
        });
        let h, p = 0, g;
        if (!c) {
            const _ = [qp.bind(this), void 0];
            for (_.unshift.apply(_, u),
            _.push.apply(_, f),
            g = _.length,
            h = Promise.resolve(n); p < g; )
                h = h.then(_[p++], _[p++]);
            return h
        }
        g = u.length;
        let y = n;
        for (p = 0; p < g; ) {
            const _ = u[p++]
              , R = u[p++];
            try {
                y = _(y)
            } catch (F) {
                R.call(this, F);
                break
            }
        }
        try {
            h = qp.call(this, y)
        } catch (_) {
            return Promise.reject(_)
        }
        for (p = 0,
        g = f.length; p < g; )
            h = h.then(f[p++], f[p++]);
        return h
    }
    getUri(t) {
        t = Oi(this.defaults, t);
        const n = ub(t.baseURL, t.url);
        return rb(n, t.params, t.paramsSerializer)
    }
}
;
te.forEach(["delete", "get", "head", "options"], function(t) {
    vi.prototype[t] = function(n, r) {
        return this.request(Oi(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
te.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, s, u) {
            return this.request(Oi(u || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: s
            }))
        }
    }
    vi.prototype[t] = n(),
    vi.prototype[t + "Form"] = n(!0)
});
let aI = class hb {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(i => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](i);
            r._listeners = null
        }
        ),
        this.promise.then = i => {
            let o;
            const s = new Promise(u => {
                r.subscribe(u),
                o = u
            }
            ).then(i);
            return s.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            s
        }
        ,
        t(function(o, s, u) {
            r.reason || (r.reason = new Ao(o,s,u),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new hb(function(i) {
                t = i
            }
            ),
            cancel: t
        }
    }
}
;
function uI(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function lI(e) {
    return te.isObject(e) && e.isAxiosError === !0
}
const xc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(xc).forEach( ([e,t]) => {
    xc[t] = e
}
);
function pb(e) {
    const t = new vi(e)
      , n = Ky(vi.prototype.request, t);
    return te.extend(n, vi.prototype, t, {
        allOwnKeys: !0
    }),
    te.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(i) {
        return pb(Oi(e, i))
    }
    ,
    n
}
const Mt = pb(Bs);
Mt.Axios = vi;
Mt.CanceledError = Ao;
Mt.CancelToken = aI;
Mt.isCancel = sb;
Mt.VERSION = db;
Mt.toFormData = ku;
Mt.AxiosError = Ge;
Mt.Cancel = Mt.CanceledError;
Mt.all = function(t) {
    return Promise.all(t)
}
;
Mt.spread = uI;
Mt.isAxiosError = lI;
Mt.mergeConfig = Oi;
Mt.AxiosHeaders = gn;
Mt.formToJSON = e => ob(te.isHTMLForm(e) ? new FormData(e) : e);
Mt.getAdapter = fb.getAdapter;
Mt.HttpStatusCode = xc;
Mt.default = Mt;
const {Axios: tk, AxiosError: nk, CanceledError: rk, isCancel: ik, CancelToken: ok, VERSION: sk, all: ak, Cancel: uk, isAxiosError: lk, spread: ck, toFormData: fk, AxiosHeaders: dk, HttpStatusCode: hk, formToJSON: pk, getAdapter: mk, mergeConfig: gk} = Mt;
function cI(e) {
    return typeof e == "object" && e !== null
}
function zp(e, t) {
    return e = cI(e) ? e : Object.create(null),
    new Proxy(e,{
        get(n, r, i) {
            return r === "key" ? Reflect.get(n, r, i) : Reflect.get(n, r, i) || Reflect.get(t, r, i)
        }
    })
}
function fI(e, t) {
    return t.reduce( (n, r) => n == null ? void 0 : n[r], e)
}
function dI(e, t, n) {
    return t.slice(0, -1).reduce( (r, i) => /^(__proto__)$/.test(i) ? {} : r[i] = r[i] || {}, e)[t[t.length - 1]] = n,
    e
}
function hI(e, t) {
    return t.reduce( (n, r) => {
        const i = r.split(".");
        return dI(n, i, fI(e, i))
    }
    , {})
}
function pI(e, t) {
    return n => {
        var r;
        try {
            const {storage: i=localStorage, beforeRestore: o=void 0, afterRestore: s=void 0, serializer: u={
                serialize: JSON.stringify,
                deserialize: JSON.parse
            }, key: c=t.$id, paths: f=null, debug: h=!1} = n;
            return {
                storage: i,
                beforeRestore: o,
                afterRestore: s,
                serializer: u,
                key: ((r = e.key) != null ? r : p => p)(typeof c == "string" ? c : c(t.$id)),
                paths: f,
                debug: h
            }
        } catch (i) {
            return n.debug && console.error("[pinia-plugin-persistedstate]", i),
            null
        }
    }
}
function Yp(e, {storage: t, serializer: n, key: r, debug: i}) {
    try {
        const o = t == null ? void 0 : t.getItem(r);
        o && e.$patch(n == null ? void 0 : n.deserialize(o))
    } catch (o) {
        i && console.error("[pinia-plugin-persistedstate]", o)
    }
}
function Jp(e, {storage: t, serializer: n, key: r, paths: i, debug: o}) {
    try {
        const s = Array.isArray(i) ? hI(e, i) : e;
        t.setItem(r, n.serialize(s))
    } catch (s) {
        o && console.error("[pinia-plugin-persistedstate]", s)
    }
}
function vk(e={}) {
    return t => {
        const {auto: n=!1} = e
          , {options: {persist: r=n}, store: i, pinia: o} = t;
        if (!r)
            return;
        if (!(i.$id in o.state.value)) {
            const u = o._s.get(i.$id.replace("__hot:", ""));
            u && Promise.resolve().then( () => u.$persist());
            return
        }
        const s = (Array.isArray(r) ? r.map(u => zp(u, e)) : [zp(r, e)]).map(pI(e, i)).filter(Boolean);
        i.$persist = () => {
            s.forEach(u => {
                Jp(i.$state, u)
            }
            )
        }
        ,
        i.$hydrate = ({runHooks: u=!0}={}) => {
            s.forEach(c => {
                const {beforeRestore: f, afterRestore: h} = c;
                u && (f == null || f(t)),
                Yp(i, c),
                u && (h == null || h(t))
            }
            )
        }
        ,
        s.forEach(u => {
            const {beforeRestore: c, afterRestore: f} = u;
            c == null || c(t),
            Yp(i, u),
            f == null || f(t),
            i.$subscribe( (h, p) => {
                Jp(p, u)
            }
            , {
                detached: !0
            })
        }
        )
    }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let mb;
const Du = e => mb = e
  , gb = Symbol();
function Pc(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var es;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(es || (es = {}));
function yk() {
    const e = bu(!0)
      , t = e.run( () => Me({}));
    let n = []
      , r = [];
    const i = Au({
        install(o) {
            Du(i),
            i._a = o,
            o.provide(gb, i),
            o.config.globalProperties.$pinia = i,
            r.forEach(s => n.push(s)),
            r = []
        },
        use(o) {
            return this._a ? n.push(o) : r.push(o),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return i
}
const vb = () => {}
;
function Xp(e, t, n, r=vb) {
    e.push(t);
    const i = () => {
        const o = e.indexOf(t);
        o > -1 && (e.splice(o, 1),
        r())
    }
    ;
    return !n && _u() && wu(i),
    i
}
function Vi(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    }
    )
}
const mI = e => e();
function Ic(e, t) {
    e instanceof Map && t instanceof Map && t.forEach( (n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const r = t[n]
          , i = e[n];
        Pc(i) && Pc(r) && e.hasOwnProperty(n) && !at(r) && !pr(r) ? e[n] = Ic(i, r) : e[n] = r
    }
    return e
}
const gI = Symbol();
function vI(e) {
    return !Pc(e) || !e.hasOwnProperty(gI)
}
const {assign: Mr} = Object;
function yI(e) {
    return !!(at(e) && e.effect)
}
function bI(e, t, n, r) {
    const {state: i, actions: o, getters: s} = t
      , u = n.state.value[e];
    let c;
    function f() {
        u || (n.state.value[e] = i ? i() : {});
        const h = pv(n.state.value[e]);
        return Mr(h, o, Object.keys(s || {}).reduce( (p, g) => (p[g] = Au(Fe( () => {
            Du(n);
            const y = n._s.get(e);
            return s[g].call(y, y)
        }
        )),
        p), {}))
    }
    return c = yb(e, f, t, n, r, !0),
    c
}
function yb(e, t, n={}, r, i, o) {
    let s;
    const u = Mr({
        actions: {}
    }, n)
      , c = {
        deep: !0
    };
    let f, h, p = [], g = [], y;
    const _ = r.state.value[e];
    !o && !_ && (r.state.value[e] = {}),
    Me({});
    let R;
    function F(Z) {
        let j;
        f = h = !1,
        typeof Z == "function" ? (Z(r.state.value[e]),
        j = {
            type: es.patchFunction,
            storeId: e,
            events: y
        }) : (Ic(r.state.value[e], Z),
        j = {
            type: es.patchObject,
            payload: Z,
            storeId: e,
            events: y
        });
        const ne = R = Symbol();
        zt().then( () => {
            R === ne && (f = !0)
        }
        ),
        h = !0,
        Vi(p, j, r.state.value[e])
    }
    const T = o ? function() {
        const {state: j} = n
          , ne = j ? j() : {};
        this.$patch(be => {
            Mr(be, ne)
        }
        )
    }
    : vb;
    function A() {
        s.stop(),
        p = [],
        g = [],
        r._s.delete(e)
    }
    function E(Z, j) {
        return function() {
            Du(r);
            const ne = Array.from(arguments)
              , be = []
              , ae = [];
            function we(le) {
                be.push(le)
            }
            function Ve(le) {
                ae.push(le)
            }
            Vi(g, {
                args: ne,
                name: Z,
                store: W,
                after: we,
                onError: Ve
            });
            let Ne;
            try {
                Ne = j.apply(this && this.$id === e ? this : W, ne)
            } catch (le) {
                throw Vi(ae, le),
                le
            }
            return Ne instanceof Promise ? Ne.then(le => (Vi(be, le),
            le)).catch(le => (Vi(ae, le),
            Promise.reject(le))) : (Vi(be, Ne),
            Ne)
        }
    }
    const I = {
        _p: r,
        $id: e,
        $onAction: Xp.bind(null, g),
        $patch: F,
        $reset: T,
        $subscribe(Z, j={}) {
            const ne = Xp(p, Z, j.detached, () => be())
              , be = s.run( () => tt( () => r.state.value[e], ae => {
                (j.flush === "sync" ? h : f) && Z({
                    storeId: e,
                    type: es.direct,
                    events: y
                }, ae)
            }
            , Mr({}, c, j)));
            return ne
        },
        $dispose: A
    }
      , W = yn(I);
    r._s.set(e, W);
    const U = (r._a && r._a.runWithContext || mI)( () => r._e.run( () => (s = bu()).run(t)));
    for (const Z in U) {
        const j = U[Z];
        if (at(j) && !yI(j) || pr(j))
            o || (_ && vI(j) && (at(j) ? j.value = _[Z] : Ic(j, _[Z])),
            r.state.value[e][Z] = j);
        else if (typeof j == "function") {
            const ne = E(Z, j);
            U[Z] = ne,
            u.actions[Z] = j
        }
    }
    return Mr(W, U),
    Mr(et(W), U),
    Object.defineProperty(W, "$state", {
        get: () => r.state.value[e],
        set: Z => {
            F(j => {
                Mr(j, Z)
            }
            )
        }
    }),
    r._p.forEach(Z => {
        Mr(W, s.run( () => Z({
            store: W,
            app: r._a,
            pinia: r,
            options: u
        })))
    }
    ),
    _ && o && n.hydrate && n.hydrate(W.$state, _),
    f = !0,
    h = !0,
    W
}
function bk(e, t, n) {
    let r, i;
    const o = typeof t == "function";
    typeof e == "string" ? (r = e,
    i = o ? n : t) : (i = e,
    r = e.id);
    function s(u, c) {
        const f = Nv();
        return u = u || (f ? Nt(gb, null) : null),
        u && Du(u),
        u = mb,
        u._s.has(r) || (o ? yb(r, t, i, u) : bI(r, i, u)),
        u._s.get(r)
    }
    return s.$id = r,
    s
}
function _k(e) {
    {
        e = et(e);
        const t = {};
        for (const n in e) {
            const r = e[n];
            (at(r) || pr(r)) && (t[n] = mv(e, n))
        }
        return t
    }
}
/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Ki = typeof document != "undefined";
function _I(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const lt = Object.assign;
function jl(e, t) {
    const n = {};
    for (const r in t) {
        const i = t[r];
        n[r] = Kn(i) ? i.map(e) : e(i)
    }
    return n
}
const ts = () => {}
  , Kn = Array.isArray
  , bb = /#/g
  , wI = /&/g
  , EI = /\//g
  , OI = /=/g
  , SI = /\?/g
  , _b = /\+/g
  , AI = /%5B/g
  , TI = /%5D/g
  , wb = /%5E/g
  , RI = /%60/g
  , Eb = /%7B/g
  , CI = /%7C/g
  , Ob = /%7D/g
  , xI = /%20/g;
function id(e) {
    return encodeURI("" + e).replace(CI, "|").replace(AI, "[").replace(TI, "]")
}
function PI(e) {
    return id(e).replace(Eb, "{").replace(Ob, "}").replace(wb, "^")
}
function Fc(e) {
    return id(e).replace(_b, "%2B").replace(xI, "+").replace(bb, "%23").replace(wI, "%26").replace(RI, "`").replace(Eb, "{").replace(Ob, "}").replace(wb, "^")
}
function II(e) {
    return Fc(e).replace(OI, "%3D")
}
function FI(e) {
    return id(e).replace(bb, "%23").replace(SI, "%3F")
}
function LI(e) {
    return e == null ? "" : FI(e).replace(EI, "%2F")
}
function ys(e) {
    try {
        return decodeURIComponent("" + e)
    } catch (t) {}
    return "" + e
}
const NI = /\/$/
  , MI = e => e.replace(NI, "");
function Bl(e, t, n="/") {
    let r, i = {}, o = "", s = "";
    const u = t.indexOf("#");
    let c = t.indexOf("?");
    return u < c && u >= 0 && (c = -1),
    c > -1 && (r = t.slice(0, c),
    o = t.slice(c + 1, u > -1 ? u : t.length),
    i = e(o)),
    u > -1 && (r = r || t.slice(0, u),
    s = t.slice(u, t.length)),
    r = jI(r != null ? r : t, n),
    {
        fullPath: r + (o && "?") + o + s,
        path: r,
        query: i,
        hash: ys(s)
    }
}
function kI(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Qp(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function $I(e, t, n) {
    const r = t.matched.length - 1
      , i = n.matched.length - 1;
    return r > -1 && r === i && mo(t.matched[r], n.matched[i]) && Sb(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function mo(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Sb(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!DI(e[n], t[n]))
            return !1;
    return !0
}
function DI(e, t) {
    return Kn(e) ? Zp(e, t) : Kn(t) ? Zp(t, e) : e === t
}
function Zp(e, t) {
    return Kn(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function jI(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , i = r[r.length - 1];
    (i === ".." || i === ".") && r.push("");
    let o = n.length - 1, s, u;
    for (s = 0; s < r.length; s++)
        if (u = r[s],
        u !== ".")
            if (u === "..")
                o > 1 && o--;
            else
                break;
    return n.slice(0, o).join("/") + "/" + r.slice(s).join("/")
}
const Lr = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var bs;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(bs || (bs = {}));
var ns;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(ns || (ns = {}));
function BI(e) {
    if (!e)
        if (Ki) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    MI(e)
}
const VI = /^[^#]+#/;
function UI(e, t) {
    return e.replace(VI, "#") + t
}
function WI(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ju = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function HI(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!i)
            return;
        t = WI(i, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function em(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Lc = new Map;
function KI(e, t) {
    Lc.set(e, t)
}
function qI(e) {
    const t = Lc.get(e);
    return Lc.delete(e),
    t
}
let GI = () => location.protocol + "//" + location.host;
function Ab(e, t) {
    const {pathname: n, search: r, hash: i} = t
      , o = e.indexOf("#");
    if (o > -1) {
        let u = i.includes(e.slice(o)) ? e.slice(o).length : 1
          , c = i.slice(u);
        return c[0] !== "/" && (c = "/" + c),
        Qp(c, "")
    }
    return Qp(n, e) + r + i
}
function zI(e, t, n, r) {
    let i = []
      , o = []
      , s = null;
    const u = ({state: g}) => {
        const y = Ab(e, location)
          , _ = n.value
          , R = t.value;
        let F = 0;
        if (g) {
            if (n.value = y,
            t.value = g,
            s && s === _) {
                s = null;
                return
            }
            F = R ? g.position - R.position : 0
        } else
            r(y);
        i.forEach(T => {
            T(n.value, _, {
                delta: F,
                type: bs.pop,
                direction: F ? F > 0 ? ns.forward : ns.back : ns.unknown
            })
        }
        )
    }
    ;
    function c() {
        s = n.value
    }
    function f(g) {
        i.push(g);
        const y = () => {
            const _ = i.indexOf(g);
            _ > -1 && i.splice(_, 1)
        }
        ;
        return o.push(y),
        y
    }
    function h() {
        const {history: g} = window;
        g.state && g.replaceState(lt({}, g.state, {
            scroll: ju()
        }), "")
    }
    function p() {
        for (const g of o)
            g();
        o = [],
        window.removeEventListener("popstate", u),
        window.removeEventListener("beforeunload", h)
    }
    return window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", h, {
        passive: !0
    }),
    {
        pauseListeners: c,
        listen: f,
        destroy: p
    }
}
function tm(e, t, n, r=!1, i=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: i ? ju() : null
    }
}
function YI(e) {
    const {history: t, location: n} = window
      , r = {
        value: Ab(e, n)
    }
      , i = {
        value: t.state
    };
    i.value || o(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function o(c, f, h) {
        const p = e.indexOf("#")
          , g = p > -1 ? (n.host && document.querySelector("base") ? e : e.slice(p)) + c : GI() + e + c;
        try {
            t[h ? "replaceState" : "pushState"](f, "", g),
            i.value = f
        } catch (y) {
            console.error(y),
            n[h ? "replace" : "assign"](g)
        }
    }
    function s(c, f) {
        const h = lt({}, t.state, tm(i.value.back, c, i.value.forward, !0), f, {
            position: i.value.position
        });
        o(c, h, !0),
        r.value = c
    }
    function u(c, f) {
        const h = lt({}, i.value, t.state, {
            forward: c,
            scroll: ju()
        });
        o(h.current, h, !0);
        const p = lt({}, tm(r.value, c, null), {
            position: h.position + 1
        }, f);
        o(c, p, !1),
        r.value = c
    }
    return {
        location: r,
        state: i,
        push: u,
        replace: s
    }
}
function wk(e) {
    e = BI(e);
    const t = YI(e)
      , n = zI(e, t.state, t.location, t.replace);
    function r(o, s=!0) {
        s || n.pauseListeners(),
        history.go(o)
    }
    const i = lt({
        location: "",
        base: e,
        go: r,
        createHref: UI.bind(null, e)
    }, t, n);
    return Object.defineProperty(i, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(i, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    i
}
function JI(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Tb(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Rb = Symbol("");
var nm;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(nm || (nm = {}));
function go(e, t) {
    return lt(new Error, {
        type: e,
        [Rb]: !0
    }, t)
}
function ar(e, t) {
    return e instanceof Error && Rb in e && (t == null || !!(e.type & t))
}
const rm = "[^/]+?"
  , XI = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , QI = /[.+*?^${}()[\]/\\]/g;
function ZI(e, t) {
    const n = lt({}, XI, t)
      , r = [];
    let i = n.start ? "^" : "";
    const o = [];
    for (const f of e) {
        const h = f.length ? [] : [90];
        n.strict && !f.length && (i += "/");
        for (let p = 0; p < f.length; p++) {
            const g = f[p];
            let y = 40 + (n.sensitive ? .25 : 0);
            if (g.type === 0)
                p || (i += "/"),
                i += g.value.replace(QI, "\\$&"),
                y += 40;
            else if (g.type === 1) {
                const {value: _, repeatable: R, optional: F, regexp: T} = g;
                o.push({
                    name: _,
                    repeatable: R,
                    optional: F
                });
                const A = T || rm;
                if (A !== rm) {
                    y += 10;
                    try {
                        new RegExp(`(${A})`)
                    } catch (I) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${A}): ` + I.message)
                    }
                }
                let E = R ? `((?:${A})(?:/(?:${A}))*)` : `(${A})`;
                p || (E = F && f.length < 2 ? `(?:/${E})` : "/" + E),
                F && (E += "?"),
                i += E,
                y += 20,
                F && (y += -8),
                R && (y += -20),
                A === ".*" && (y += -50)
            }
            h.push(y)
        }
        r.push(h)
    }
    if (n.strict && n.end) {
        const f = r.length - 1;
        r[f][r[f].length - 1] += .7000000000000001
    }
    n.strict || (i += "/?"),
    n.end ? i += "$" : n.strict && (i += "(?:/|$)");
    const s = new RegExp(i,n.sensitive ? "" : "i");
    function u(f) {
        const h = f.match(s)
          , p = {};
        if (!h)
            return null;
        for (let g = 1; g < h.length; g++) {
            const y = h[g] || ""
              , _ = o[g - 1];
            p[_.name] = y && _.repeatable ? y.split("/") : y
        }
        return p
    }
    function c(f) {
        let h = ""
          , p = !1;
        for (const g of e) {
            (!p || !h.endsWith("/")) && (h += "/"),
            p = !1;
            for (const y of g)
                if (y.type === 0)
                    h += y.value;
                else if (y.type === 1) {
                    const {value: _, repeatable: R, optional: F} = y
                      , T = _ in f ? f[_] : "";
                    if (Kn(T) && !R)
                        throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                    const A = Kn(T) ? T.join("/") : T;
                    if (!A)
                        if (F)
                            g.length < 2 && (h.endsWith("/") ? h = h.slice(0, -1) : p = !0);
                        else
                            throw new Error(`Missing required param "${_}"`);
                    h += A
                }
        }
        return h || "/"
    }
    return {
        re: s,
        score: r,
        keys: o,
        parse: u,
        stringify: c
    }
}
function eF(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function Cb(e, t) {
    let n = 0;
    const r = e.score
      , i = t.score;
    for (; n < r.length && n < i.length; ) {
        const o = eF(r[n], i[n]);
        if (o)
            return o;
        n++
    }
    if (Math.abs(i.length - r.length) === 1) {
        if (im(r))
            return 1;
        if (im(i))
            return -1
    }
    return i.length - r.length
}
function im(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const tF = {
    type: 0,
    value: ""
}
  , nF = /[a-zA-Z0-9_]/;
function rF(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[tF]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(y) {
        throw new Error(`ERR (${n})/"${f}": ${y}`)
    }
    let n = 0
      , r = n;
    const i = [];
    let o;
    function s() {
        o && i.push(o),
        o = []
    }
    let u = 0, c, f = "", h = "";
    function p() {
        f && (n === 0 ? o.push({
            type: 0,
            value: f
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),
        o.push({
            type: 1,
            value: f,
            regexp: h,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"),
        f = "")
    }
    function g() {
        f += c
    }
    for (; u < e.length; ) {
        if (c = e[u++],
        c === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            c === "/" ? (f && p(),
            s()) : c === ":" ? (p(),
            n = 1) : g();
            break;
        case 4:
            g(),
            n = r;
            break;
        case 1:
            c === "(" ? n = 2 : nF.test(c) ? g() : (p(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && u--);
            break;
        case 2:
            c === ")" ? h[h.length - 1] == "\\" ? h = h.slice(0, -1) + c : n = 3 : h += c;
            break;
        case 3:
            p(),
            n = 0,
            c !== "*" && c !== "?" && c !== "+" && u--,
            h = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${f}"`),
    p(),
    s(),
    i
}
function iF(e, t, n) {
    const r = ZI(rF(e.path), n)
      , i = lt(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i),
    i
}
function oF(e, t) {
    const n = []
      , r = new Map;
    t = am({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function i(p) {
        return r.get(p)
    }
    function o(p, g, y) {
        const _ = !y
          , R = sF(p);
        R.aliasOf = y && y.record;
        const F = am(t, p)
          , T = [R];
        if ("alias"in p) {
            const I = typeof p.alias == "string" ? [p.alias] : p.alias;
            for (const W of I)
                T.push(lt({}, R, {
                    components: y ? y.record.components : R.components,
                    path: W,
                    aliasOf: y ? y.record : R
                }))
        }
        let A, E;
        for (const I of T) {
            const {path: W} = I;
            if (g && W[0] !== "/") {
                const $ = g.record.path
                  , U = $[$.length - 1] === "/" ? "" : "/";
                I.path = g.record.path + (W && U + W)
            }
            if (A = iF(I, g, F),
            y ? y.alias.push(A) : (E = E || A,
            E !== A && E.alias.push(A),
            _ && p.name && !sm(A) && s(p.name)),
            xb(A) && c(A),
            R.children) {
                const $ = R.children;
                for (let U = 0; U < $.length; U++)
                    o($[U], A, y && y.children[U])
            }
            y = y || A
        }
        return E ? () => {
            s(E)
        }
        : ts
    }
    function s(p) {
        if (Tb(p)) {
            const g = r.get(p);
            g && (r.delete(p),
            n.splice(n.indexOf(g), 1),
            g.children.forEach(s),
            g.alias.forEach(s))
        } else {
            const g = n.indexOf(p);
            g > -1 && (n.splice(g, 1),
            p.record.name && r.delete(p.record.name),
            p.children.forEach(s),
            p.alias.forEach(s))
        }
    }
    function u() {
        return n
    }
    function c(p) {
        const g = lF(p, n);
        n.splice(g, 0, p),
        p.record.name && !sm(p) && r.set(p.record.name, p)
    }
    function f(p, g) {
        let y, _ = {}, R, F;
        if ("name"in p && p.name) {
            if (y = r.get(p.name),
            !y)
                throw go(1, {
                    location: p
                });
            F = y.record.name,
            _ = lt(om(g.params, y.keys.filter(E => !E.optional).concat(y.parent ? y.parent.keys.filter(E => E.optional) : []).map(E => E.name)), p.params && om(p.params, y.keys.map(E => E.name))),
            R = y.stringify(_)
        } else if (p.path != null)
            R = p.path,
            y = n.find(E => E.re.test(R)),
            y && (_ = y.parse(R),
            F = y.record.name);
        else {
            if (y = g.name ? r.get(g.name) : n.find(E => E.re.test(g.path)),
            !y)
                throw go(1, {
                    location: p,
                    currentLocation: g
                });
            F = y.record.name,
            _ = lt({}, g.params, p.params),
            R = y.stringify(_)
        }
        const T = [];
        let A = y;
        for (; A; )
            T.unshift(A.record),
            A = A.parent;
        return {
            name: F,
            path: R,
            params: _,
            matched: T,
            meta: uF(T)
        }
    }
    e.forEach(p => o(p));
    function h() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: o,
        resolve: f,
        removeRoute: s,
        clearRoutes: h,
        getRoutes: u,
        getRecordMatcher: i
    }
}
function om(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function sF(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: aF(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function aF(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function sm(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function uF(e) {
    return e.reduce( (t, n) => lt(t, n.meta), {})
}
function am(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function lF(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        const o = n + r >> 1;
        Cb(e, t[o]) < 0 ? r = o : n = o + 1
    }
    const i = cF(e);
    return i && (r = t.lastIndexOf(i, r - 1)),
    r
}
function cF(e) {
    let t = e;
    for (; t = t.parent; )
        if (xb(t) && Cb(e, t) === 0)
            return t
}
function xb({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function fF(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let i = 0; i < r.length; ++i) {
        const o = r[i].replace(_b, " ")
          , s = o.indexOf("=")
          , u = ys(s < 0 ? o : o.slice(0, s))
          , c = s < 0 ? null : ys(o.slice(s + 1));
        if (u in t) {
            let f = t[u];
            Kn(f) || (f = t[u] = [f]),
            f.push(c)
        } else
            t[u] = c
    }
    return t
}
function um(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = II(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Kn(r) ? r.map(o => o && Fc(o)) : [r && Fc(r)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n,
            o != null && (t += "=" + o))
        }
        )
    }
    return t
}
function dF(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Kn(r) ? r.map(i => i == null ? null : "" + i) : r == null ? r : "" + r)
    }
    return t
}
const Pb = Symbol("")
  , lm = Symbol("")
  , Bu = Symbol("")
  , od = Symbol("")
  , Nc = Symbol("");
function Wo() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const i = e.indexOf(r);
            i > -1 && e.splice(i, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function hF(e, t, n) {
    const r = () => {
        e[t].delete(n)
    }
    ;
    nr(r),
    Uf(r),
    Vf( () => {
        e[t].add(n)
    }
    ),
    e[t].add(n)
}
function Ek(e) {
    const t = Nt(Pb, {}).value;
    t && hF(t, "leaveGuards", e)
}
function jr(e, t, n, r, i, o=s => s()) {
    const s = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
    return () => new Promise( (u, c) => {
        const f = g => {
            g === !1 ? c(go(4, {
                from: n,
                to: t
            })) : g instanceof Error ? c(g) : JI(g) ? c(go(2, {
                from: t,
                to: g
            })) : (s && r.enterCallbacks[i] === s && typeof g == "function" && s.push(g),
            u())
        }
          , h = o( () => e.call(r && r.instances[i], t, n, f));
        let p = Promise.resolve(h);
        e.length < 3 && (p = p.then(f)),
        p.catch(g => c(g))
    }
    )
}
function Vl(e, t, n, r, i=o => o()) {
    const o = [];
    for (const s of e)
        for (const u in s.components) {
            let c = s.components[u];
            if (!(t !== "beforeRouteEnter" && !s.instances[u]))
                if (pF(c)) {
                    const h = (c.__vccOpts || c)[t];
                    h && o.push(jr(h, n, r, s, u, i))
                } else {
                    let f = c();
                    o.push( () => f.then(h => {
                        if (!h)
                            return Promise.reject(new Error(`Couldn't resolve component "${u}" at "${s.path}"`));
                        const p = _I(h) ? h.default : h;
                        s.components[u] = p;
                        const y = (p.__vccOpts || p)[t];
                        return y && jr(y, n, r, s, u, i)()
                    }
                    ))
                }
        }
    return o
}
function pF(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function cm(e) {
    const t = Nt(Bu)
      , n = Nt(od)
      , r = Fe( () => {
        const c = Qe(e.to);
        return t.resolve(c)
    }
    )
      , i = Fe( () => {
        const {matched: c} = r.value
          , {length: f} = c
          , h = c[f - 1]
          , p = n.matched;
        if (!h || !p.length)
            return -1;
        const g = p.findIndex(mo.bind(null, h));
        if (g > -1)
            return g;
        const y = fm(c[f - 2]);
        return f > 1 && fm(h) === y && p[p.length - 1].path !== y ? p.findIndex(mo.bind(null, c[f - 2])) : g
    }
    )
      , o = Fe( () => i.value > -1 && yF(n.params, r.value.params))
      , s = Fe( () => i.value > -1 && i.value === n.matched.length - 1 && Sb(n.params, r.value.params));
    function u(c={}) {
        return vF(c) ? t[Qe(e.replace) ? "replace" : "push"](Qe(e.to)).catch(ts) : Promise.resolve()
    }
    return {
        route: r,
        href: Fe( () => r.value.href),
        isActive: o,
        isExactActive: s,
        navigate: u
    }
}
const mF = wr({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: cm,
    setup(e, {slots: t}) {
        const n = yn(cm(e))
          , {options: r} = Nt(Bu)
          , i = Fe( () => ({
            [dm(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [dm(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && t.default(n);
            return e.custom ? o : Oo("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
            }, o)
        }
    }
})
  , gF = mF;
function vF(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function yF(e, t) {
    for (const n in t) {
        const r = t[n]
          , i = e[n];
        if (typeof r == "string") {
            if (r !== i)
                return !1
        } else if (!Kn(i) || i.length !== r.length || r.some( (o, s) => o !== i[s]))
            return !1
    }
    return !0
}
function fm(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const dm = (e, t, n) => e != null ? e : t != null ? t : n
  , bF = wr({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = Nt(Nc)
          , i = Fe( () => e.route || r.value)
          , o = Nt(lm, 0)
          , s = Fe( () => {
            let f = Qe(o);
            const {matched: h} = i.value;
            let p;
            for (; (p = h[f]) && !p.components; )
                f++;
            return f
        }
        )
          , u = Fe( () => i.value.matched[s.value]);
        mi(lm, Fe( () => s.value + 1)),
        mi(Pb, u),
        mi(Nc, i);
        const c = Me();
        return tt( () => [c.value, u.value, e.name], ([f,h,p], [g,y,_]) => {
            h && (h.instances[p] = f,
            y && y !== h && f && f === g && (h.leaveGuards.size || (h.leaveGuards = y.leaveGuards),
            h.updateGuards.size || (h.updateGuards = y.updateGuards))),
            f && h && (!y || !mo(h, y) || !g) && (h.enterCallbacks[p] || []).forEach(R => R(f))
        }
        , {
            flush: "post"
        }),
        () => {
            const f = i.value
              , h = e.name
              , p = u.value
              , g = p && p.components[h];
            if (!g)
                return hm(n.default, {
                    Component: g,
                    route: f
                });
            const y = p.props[h]
              , _ = y ? y === !0 ? f.params : typeof y == "function" ? y(f) : y : null
              , F = Oo(g, lt({}, _, t, {
                onVnodeUnmounted: T => {
                    T.component.isUnmounted && (p.instances[h] = null)
                }
                ,
                ref: c
            }));
            return hm(n.default, {
                Component: F,
                route: f
            }) || F
        }
    }
});
function hm(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const _F = bF;
function Ok(e) {
    const t = oF(e.routes, e)
      , n = e.parseQuery || fF
      , r = e.stringifyQuery || um
      , i = e.history
      , o = Wo()
      , s = Wo()
      , u = Wo()
      , c = Fi(Lr);
    let f = Lr;
    Ki && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const h = jl.bind(null, Y => "" + Y)
      , p = jl.bind(null, LI)
      , g = jl.bind(null, ys);
    function y(Y, ve) {
        let z, xe;
        return Tb(Y) ? (z = t.getRecordMatcher(Y),
        xe = ve) : xe = Y,
        t.addRoute(xe, z)
    }
    function _(Y) {
        const ve = t.getRecordMatcher(Y);
        ve && t.removeRoute(ve)
    }
    function R() {
        return t.getRoutes().map(Y => Y.record)
    }
    function F(Y) {
        return !!t.getRecordMatcher(Y)
    }
    function T(Y, ve) {
        if (ve = lt({}, ve || c.value),
        typeof Y == "string") {
            const w = Bl(n, Y, ve.path)
              , V = t.resolve({
                path: w.path
            }, ve)
              , se = i.createHref(w.fullPath);
            return lt(w, V, {
                params: g(V.params),
                hash: ys(w.hash),
                redirectedFrom: void 0,
                href: se
            })
        }
        let z;
        if (Y.path != null)
            z = lt({}, Y, {
                path: Bl(n, Y.path, ve.path).path
            });
        else {
            const w = lt({}, Y.params);
            for (const V in w)
                w[V] == null && delete w[V];
            z = lt({}, Y, {
                params: p(w)
            }),
            ve.params = p(ve.params)
        }
        const xe = t.resolve(z, ve)
          , Ue = Y.hash || "";
        xe.params = h(g(xe.params));
        const Ie = kI(r, lt({}, Y, {
            hash: PI(Ue),
            path: xe.path
        }))
          , S = i.createHref(Ie);
        return lt({
            fullPath: Ie,
            hash: Ue,
            query: r === um ? dF(Y.query) : Y.query || {}
        }, xe, {
            redirectedFrom: void 0,
            href: S
        })
    }
    function A(Y) {
        return typeof Y == "string" ? Bl(n, Y, c.value.path) : lt({}, Y)
    }
    function E(Y, ve) {
        if (f !== Y)
            return go(8, {
                from: ve,
                to: Y
            })
    }
    function I(Y) {
        return U(Y)
    }
    function W(Y) {
        return I(lt(A(Y), {
            replace: !0
        }))
    }
    function $(Y) {
        const ve = Y.matched[Y.matched.length - 1];
        if (ve && ve.redirect) {
            const {redirect: z} = ve;
            let xe = typeof z == "function" ? z(Y) : z;
            return typeof xe == "string" && (xe = xe.includes("?") || xe.includes("#") ? xe = A(xe) : {
                path: xe
            },
            xe.params = {}),
            lt({
                query: Y.query,
                hash: Y.hash,
                params: xe.path != null ? {} : Y.params
            }, xe)
        }
    }
    function U(Y, ve) {
        const z = f = T(Y)
          , xe = c.value
          , Ue = Y.state
          , Ie = Y.force
          , S = Y.replace === !0
          , w = $(z);
        if (w)
            return U(lt(A(w), {
                state: typeof w == "object" ? lt({}, Ue, w.state) : Ue,
                force: Ie,
                replace: S
            }), ve || z);
        const V = z;
        V.redirectedFrom = ve;
        let se;
        return !Ie && $I(r, xe, z) && (se = go(16, {
            to: V,
            from: xe
        }),
        it(xe, xe, !0, !1)),
        (se ? Promise.resolve(se) : ne(V, xe)).catch(oe => ar(oe) ? ar(oe, 2) ? oe : dt(oe) : Te(oe, V, xe)).then(oe => {
            if (oe) {
                if (ar(oe, 2))
                    return U(lt({
                        replace: S
                    }, A(oe.to), {
                        state: typeof oe.to == "object" ? lt({}, Ue, oe.to.state) : Ue,
                        force: Ie
                    }), ve || V)
            } else
                oe = ae(V, xe, !0, S, Ue);
            return be(V, xe, oe),
            oe
        }
        )
    }
    function Z(Y, ve) {
        const z = E(Y, ve);
        return z ? Promise.reject(z) : Promise.resolve()
    }
    function j(Y) {
        const ve = ht.values().next().value;
        return ve && typeof ve.runWithContext == "function" ? ve.runWithContext(Y) : Y()
    }
    function ne(Y, ve) {
        let z;
        const [xe,Ue,Ie] = wF(Y, ve);
        z = Vl(xe.reverse(), "beforeRouteLeave", Y, ve);
        for (const w of xe)
            w.leaveGuards.forEach(V => {
                z.push(jr(V, Y, ve))
            }
            );
        const S = Z.bind(null, Y, ve);
        return z.push(S),
        ge(z).then( () => {
            z = [];
            for (const w of o.list())
                z.push(jr(w, Y, ve));
            return z.push(S),
            ge(z)
        }
        ).then( () => {
            z = Vl(Ue, "beforeRouteUpdate", Y, ve);
            for (const w of Ue)
                w.updateGuards.forEach(V => {
                    z.push(jr(V, Y, ve))
                }
                );
            return z.push(S),
            ge(z)
        }
        ).then( () => {
            z = [];
            for (const w of Ie)
                if (w.beforeEnter)
                    if (Kn(w.beforeEnter))
                        for (const V of w.beforeEnter)
                            z.push(jr(V, Y, ve));
                    else
                        z.push(jr(w.beforeEnter, Y, ve));
            return z.push(S),
            ge(z)
        }
        ).then( () => (Y.matched.forEach(w => w.enterCallbacks = {}),
        z = Vl(Ie, "beforeRouteEnter", Y, ve, j),
        z.push(S),
        ge(z))).then( () => {
            z = [];
            for (const w of s.list())
                z.push(jr(w, Y, ve));
            return z.push(S),
            ge(z)
        }
        ).catch(w => ar(w, 8) ? w : Promise.reject(w))
    }
    function be(Y, ve, z) {
        u.list().forEach(xe => j( () => xe(Y, ve, z)))
    }
    function ae(Y, ve, z, xe, Ue) {
        const Ie = E(Y, ve);
        if (Ie)
            return Ie;
        const S = ve === Lr
          , w = Ki ? history.state : {};
        z && (xe || S ? i.replace(Y.fullPath, lt({
            scroll: S && w && w.scroll
        }, Ue)) : i.push(Y.fullPath, Ue)),
        c.value = Y,
        it(Y, ve, z, S),
        dt()
    }
    let we;
    function Ve() {
        we || (we = i.listen( (Y, ve, z) => {
            if (!qt.listening)
                return;
            const xe = T(Y)
              , Ue = $(xe);
            if (Ue) {
                U(lt(Ue, {
                    replace: !0
                }), xe).catch(ts);
                return
            }
            f = xe;
            const Ie = c.value;
            Ki && KI(em(Ie.fullPath, z.delta), ju()),
            ne(xe, Ie).catch(S => ar(S, 12) ? S : ar(S, 2) ? (U(S.to, xe).then(w => {
                ar(w, 20) && !z.delta && z.type === bs.pop && i.go(-1, !1)
            }
            ).catch(ts),
            Promise.reject()) : (z.delta && i.go(-z.delta, !1),
            Te(S, xe, Ie))).then(S => {
                S = S || ae(xe, Ie, !1),
                S && (z.delta && !ar(S, 8) ? i.go(-z.delta, !1) : z.type === bs.pop && ar(S, 20) && i.go(-1, !1)),
                be(xe, Ie, S)
            }
            ).catch(ts)
        }
        ))
    }
    let Ne = Wo(), le = Wo(), je;
    function Te(Y, ve, z) {
        dt(Y);
        const xe = le.list();
        return xe.length ? xe.forEach(Ue => Ue(Y, ve, z)) : console.error(Y),
        Promise.reject(Y)
    }
    function ut() {
        return je && c.value !== Lr ? Promise.resolve() : new Promise( (Y, ve) => {
            Ne.add([Y, ve])
        }
        )
    }
    function dt(Y) {
        return je || (je = !Y,
        Ve(),
        Ne.list().forEach( ([ve,z]) => Y ? z(Y) : ve()),
        Ne.reset()),
        Y
    }
    function it(Y, ve, z, xe) {
        const {scrollBehavior: Ue} = e;
        if (!Ki || !Ue)
            return Promise.resolve();
        const Ie = !z && qI(em(Y.fullPath, 0)) || (xe || !z) && history.state && history.state.scroll || null;
        return zt().then( () => Ue(Y, ve, Ie)).then(S => S && HI(S)).catch(S => Te(S, Y, ve))
    }
    const wt = Y => i.go(Y);
    let Tt;
    const ht = new Set
      , qt = {
        currentRoute: c,
        listening: !0,
        addRoute: y,
        removeRoute: _,
        clearRoutes: t.clearRoutes,
        hasRoute: F,
        getRoutes: R,
        resolve: T,
        options: e,
        push: I,
        replace: W,
        go: wt,
        back: () => wt(-1),
        forward: () => wt(1),
        beforeEach: o.add,
        beforeResolve: s.add,
        afterEach: u.add,
        onError: le.add,
        isReady: ut,
        install(Y) {
            const ve = this;
            Y.component("RouterLink", gF),
            Y.component("RouterView", _F),
            Y.config.globalProperties.$router = ve,
            Object.defineProperty(Y.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Qe(c)
            }),
            Ki && !Tt && c.value === Lr && (Tt = !0,
            I(i.location).catch(Ue => {}
            ));
            const z = {};
            for (const Ue in Lr)
                Object.defineProperty(z, Ue, {
                    get: () => c.value[Ue],
                    enumerable: !0
                });
            Y.provide(Bu, ve),
            Y.provide(od, Af(z)),
            Y.provide(Nc, c);
            const xe = Y.unmount;
            ht.add(Y),
            Y.unmount = function() {
                ht.delete(Y),
                ht.size < 1 && (f = Lr,
                we && we(),
                we = null,
                c.value = Lr,
                Tt = !1,
                je = !1),
                xe()
            }
        }
    };
    function ge(Y) {
        return Y.reduce( (ve, z) => ve.then( () => j(z)), Promise.resolve())
    }
    return qt
}
function wF(e, t) {
    const n = []
      , r = []
      , i = []
      , o = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < o; s++) {
        const u = t.matched[s];
        u && (e.matched.find(f => mo(f, u)) ? r.push(u) : n.push(u));
        const c = e.matched[s];
        c && (t.matched.find(f => mo(f, c)) || i.push(c))
    }
    return [n, r, i]
}
function Sk() {
    return Nt(Bu)
}
function Ak(e) {
    return Nt(od)
}
/*!
  * vue-i18n v9.14.3
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const EF = "9.14.3";
function OF() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Wi().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Wi().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Wi().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Wi().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Wi().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const SF = D_.__EXTEND_POINT__
  , ur = Km(SF);
ur(),
ur(),
ur(),
ur(),
ur(),
ur(),
ur(),
ur(),
ur();
const Ib = x_.__EXTEND_POINT__
  , ln = Km(Ib)
  , Bt = {
    UNEXPECTED_RETURN_TYPE: Ib,
    INVALID_ARGUMENT: ln(),
    MUST_BE_CALL_SETUP_TOP: ln(),
    NOT_INSTALLED: ln(),
    NOT_AVAILABLE_IN_LEGACY_MODE: ln(),
    REQUIRED_VALUE: ln(),
    INVALID_VALUE: ln(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ln(),
    NOT_INSTALLED_WITH_PROVIDE: ln(),
    UNEXPECTED_ERROR: ln(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: ln(),
    BRIDGE_SUPPORT_VUE_2_ONLY: ln(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ln(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ln(),
    __EXTEND_POINT__: ln()
};
function Kt(e, ...t) {
    return S_(e, null, void 0)
}
const Mc = Xr("__translateVNode")
  , kc = Xr("__datetimeParts")
  , $c = Xr("__numberParts")
  , Fb = Xr("__setPluralRules")
  , Lb = Xr("__injectWithOption")
  , Dc = Xr("__dispose");
function _s(e) {
    if (!Dn(e))
        return e;
    for (const t in e)
        if (Ma(e, t))
            if (!t.includes("."))
                Dn(e[t]) && _s(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let i = e
                  , o = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s] === "__proto__")
                        throw new Error(`unsafe key: ${n[s]}`);
                    if (n[s]in i || (i[n[s]] = In()),
                    !Dn(i[n[s]])) {
                        o = !0;
                        break
                    }
                    i = i[n[s]]
                }
                o || (i[n[r]] = e[t],
                delete e[t]),
                Dn(i[n[r]]) && _s(i[n[r]])
            }
    return e
}
function Vu(e, t) {
    const {messages: n, __i18n: r, messageResolver: i, flatJson: o} = t
      , s = It(n) ? n : hn(r) ? In() : {
        [e]: In()
    };
    if (hn(r) && r.forEach(u => {
        if ("locale"in u && "resource"in u) {
            const {locale: c, resource: f} = u;
            c ? (s[c] = s[c] || In(),
            Ca(f, s[c])) : Ca(f, s)
        } else
            st(u) && Ca(JSON.parse(u), s)
    }
    ),
    i == null && o)
        for (const u in s)
            Ma(s, u) && _s(s[u]);
    return s
}
function Nb(e) {
    return e.type
}
function Mb(e, t, n) {
    let r = Dn(t.messages) ? t.messages : In();
    "__i18nGlobal"in n && (r = Vu(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const i = Object.keys(r);
    i.length && i.forEach(o => {
        e.mergeLocaleMessage(o, r[o])
    }
    );
    {
        if (Dn(t.datetimeFormats)) {
            const o = Object.keys(t.datetimeFormats);
            o.length && o.forEach(s => {
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (Dn(t.numberFormats)) {
            const o = Object.keys(t.numberFormats);
            o.length && o.forEach(s => {
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function pm(e) {
    return gt(zr, null, e, 0)
}
const mm = "__INTLIFY_META__"
  , gm = () => []
  , AF = () => !1;
let vm = 0;
function ym(e) {
    return (t, n, r, i) => e(n, r, Ft() || void 0, i)
}
const TF = () => {
    const e = Ft();
    let t = null;
    return e && (t = Nb(e)[mm]) ? {
        [mm]: t
    } : null
}
;
function sd(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , i = n === void 0
      , o = e.flatJson
      , s = Na ? Me : Fi
      , u = !!e.translateExistCompatible;
    let c = Rt(e.inheritLocale) ? e.inheritLocale : !0;
    const f = s(n && c ? n.locale.value : st(e.locale) ? e.locale : Kc)
      , h = s(n && c ? n.fallbackLocale.value : st(e.fallbackLocale) || hn(e.fallbackLocale) || It(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : f.value)
      , p = s(Vu(f.value, e))
      , g = s(It(e.datetimeFormats) ? e.datetimeFormats : {
        [f.value]: {}
    })
      , y = s(It(e.numberFormats) ? e.numberFormats : {
        [f.value]: {}
    });
    let _ = n ? n.missingWarn : Rt(e.missingWarn) || no(e.missingWarn) ? e.missingWarn : !0
      , R = n ? n.fallbackWarn : Rt(e.fallbackWarn) || no(e.fallbackWarn) ? e.fallbackWarn : !0
      , F = n ? n.fallbackRoot : Rt(e.fallbackRoot) ? e.fallbackRoot : !0
      , T = !!e.fallbackFormat
      , A = Vr(e.missing) ? e.missing : null
      , E = Vr(e.missing) ? ym(e.missing) : null
      , I = Vr(e.postTranslation) ? e.postTranslation : null
      , W = n ? n.warnHtmlMessage : Rt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , $ = !!e.escapeParameter;
    const U = n ? n.modifiers : It(e.modifiers) ? e.modifiers : {};
    let Z = e.pluralRules || n && n.pluralRules, j;
    j = ( () => {
        i && Ud(null);
        const G = {
            version: EF,
            locale: f.value,
            fallbackLocale: h.value,
            messages: p.value,
            modifiers: U,
            pluralRules: Z,
            missing: E === null ? void 0 : E,
            missingWarn: _,
            fallbackWarn: R,
            fallbackFormat: T,
            unresolving: !0,
            postTranslation: I === null ? void 0 : I,
            warnHtmlMessage: W,
            escapeParameter: $,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        G.datetimeFormats = g.value,
        G.numberFormats = y.value,
        G.__datetimeFormatters = It(j) ? j.__datetimeFormatters : void 0,
        G.__numberFormatters = It(j) ? j.__numberFormatters : void 0;
        const ee = A_(G);
        return i && Ud(ee),
        ee
    }
    )(),
    $o(j, f.value, h.value);
    function be() {
        return [f.value, h.value, p.value, g.value, y.value]
    }
    const ae = Fe({
        get: () => f.value,
        set: G => {
            f.value = G,
            j.locale = f.value
        }
    })
      , we = Fe({
        get: () => h.value,
        set: G => {
            h.value = G,
            j.fallbackLocale = h.value,
            $o(j, f.value, G)
        }
    })
      , Ve = Fe( () => p.value)
      , Ne = Fe( () => g.value)
      , le = Fe( () => y.value);
    function je() {
        return Vr(I) ? I : null
    }
    function Te(G) {
        I = G,
        j.postTranslation = G
    }
    function ut() {
        return A
    }
    function dt(G) {
        G !== null && (E = ym(G)),
        A = G,
        j.missing = E
    }
    const it = (G, ee, ke, x, k, ie) => {
        be();
        let _e;
        try {
            __INTLIFY_PROD_DEVTOOLS__ && T_(TF()),
            i || (j.fallbackContext = n ? R_() : void 0),
            _e = G(j)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            i || (j.fallbackContext = void 0)
        }
        if (ke !== "translate exists" && ro(_e) && _e === C_ || ke === "translate exists" && !_e) {
            const [De,Be] = ee();
            return n && F ? x(n) : k(De)
        } else {
            if (ie(_e))
                return _e;
            throw Kt(Bt.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function wt(...G) {
        return it(ee => Reflect.apply(Hd, null, [ee, ...G]), () => Wd(...G), "translate", ee => Reflect.apply(ee.t, ee, [...G]), ee => ee, ee => st(ee))
    }
    function Tt(...G) {
        const [ee,ke,x] = G;
        if (x && !Dn(x))
            throw Kt(Bt.INVALID_ARGUMENT);
        return wt(ee, ke, Bn({
            resolvedMessage: !0
        }, x || {}))
    }
    function ht(...G) {
        return it(ee => Reflect.apply(Gd, null, [ee, ...G]), () => qd(...G), "datetime format", ee => Reflect.apply(ee.d, ee, [...G]), () => Kd, ee => st(ee))
    }
    function qt(...G) {
        return it(ee => Reflect.apply(Yd, null, [ee, ...G]), () => zd(...G), "number format", ee => Reflect.apply(ee.n, ee, [...G]), () => Kd, ee => st(ee))
    }
    function ge(G) {
        return G.map(ee => st(ee) || ro(ee) || Rt(ee) ? pm(String(ee)) : ee)
    }
    const ve = {
        normalize: ge,
        interpolate: G => G,
        type: "vnode"
    };
    function z(...G) {
        return it(ee => {
            let ke;
            const x = ee;
            try {
                x.processor = ve,
                ke = Reflect.apply(Hd, null, [x, ...G])
            } finally {
                x.processor = null
            }
            return ke
        }
        , () => Wd(...G), "translate", ee => ee[Mc](...G), ee => [pm(ee)], ee => hn(ee))
    }
    function xe(...G) {
        return it(ee => Reflect.apply(Yd, null, [ee, ...G]), () => zd(...G), "number format", ee => ee[$c](...G), gm, ee => st(ee) || hn(ee))
    }
    function Ue(...G) {
        return it(ee => Reflect.apply(Gd, null, [ee, ...G]), () => qd(...G), "datetime format", ee => ee[kc](...G), gm, ee => st(ee) || hn(ee))
    }
    function Ie(G) {
        Z = G,
        j.pluralRules = Z
    }
    function S(G, ee) {
        return it( () => {
            if (!G)
                return !1;
            const ke = st(ee) ? ee : f.value
              , x = se(ke)
              , k = j.messageResolver(x, G);
            return u ? k != null : P_(k) || I_(k) || st(k)
        }
        , () => [G], "translate exists", ke => Reflect.apply(ke.te, ke, [G, ee]), AF, ke => Rt(ke))
    }
    function w(G) {
        let ee = null;
        const ke = Hm(j, h.value, f.value);
        for (let x = 0; x < ke.length; x++) {
            const k = p.value[ke[x]] || {}
              , ie = j.messageResolver(k, G);
            if (ie != null) {
                ee = ie;
                break
            }
        }
        return ee
    }
    function V(G) {
        const ee = w(G);
        return ee != null ? ee : n ? n.tm(G) || {} : {}
    }
    function se(G) {
        return p.value[G] || {}
    }
    function oe(G, ee) {
        if (o) {
            const ke = {
                [G]: ee
            };
            for (const x in ke)
                Ma(ke, x) && _s(ke[x]);
            ee = ke[G]
        }
        p.value[G] = ee,
        j.messages = p.value
    }
    function pe(G, ee) {
        p.value[G] = p.value[G] || {};
        const ke = {
            [G]: ee
        };
        if (o)
            for (const x in ke)
                Ma(ke, x) && _s(ke[x]);
        ee = ke[G],
        Ca(ee, p.value[G]),
        j.messages = p.value
    }
    function Ee(G) {
        return g.value[G] || {}
    }
    function me(G, ee) {
        g.value[G] = ee,
        j.datetimeFormats = g.value,
        Bd(j, G, ee)
    }
    function he(G, ee) {
        g.value[G] = Bn(g.value[G] || {}, ee),
        j.datetimeFormats = g.value,
        Bd(j, G, ee)
    }
    function fe(G) {
        return y.value[G] || {}
    }
    function Re(G, ee) {
        y.value[G] = ee,
        j.numberFormats = y.value,
        Vd(j, G, ee)
    }
    function $e(G, ee) {
        y.value[G] = Bn(y.value[G] || {}, ee),
        j.numberFormats = y.value,
        Vd(j, G, ee)
    }
    vm++,
    n && Na && (tt(n.locale, G => {
        c && (f.value = G,
        j.locale = G,
        $o(j, f.value, h.value))
    }
    ),
    tt(n.fallbackLocale, G => {
        c && (h.value = G,
        j.fallbackLocale = G,
        $o(j, f.value, h.value))
    }
    ));
    const Oe = {
        id: vm,
        locale: ae,
        fallbackLocale: we,
        get inheritLocale() {
            return c
        },
        set inheritLocale(G) {
            c = G,
            G && n && (f.value = n.locale.value,
            h.value = n.fallbackLocale.value,
            $o(j, f.value, h.value))
        },
        get availableLocales() {
            return Object.keys(p.value).sort()
        },
        messages: Ve,
        get modifiers() {
            return U
        },
        get pluralRules() {
            return Z || {}
        },
        get isGlobal() {
            return i
        },
        get missingWarn() {
            return _
        },
        set missingWarn(G) {
            _ = G,
            j.missingWarn = _
        },
        get fallbackWarn() {
            return R
        },
        set fallbackWarn(G) {
            R = G,
            j.fallbackWarn = R
        },
        get fallbackRoot() {
            return F
        },
        set fallbackRoot(G) {
            F = G
        },
        get fallbackFormat() {
            return T
        },
        set fallbackFormat(G) {
            T = G,
            j.fallbackFormat = T
        },
        get warnHtmlMessage() {
            return W
        },
        set warnHtmlMessage(G) {
            W = G,
            j.warnHtmlMessage = G
        },
        get escapeParameter() {
            return $
        },
        set escapeParameter(G) {
            $ = G,
            j.escapeParameter = G
        },
        t: wt,
        getLocaleMessage: se,
        setLocaleMessage: oe,
        mergeLocaleMessage: pe,
        getPostTranslationHandler: je,
        setPostTranslationHandler: Te,
        getMissingHandler: ut,
        setMissingHandler: dt,
        [Fb]: Ie
    };
    return Oe.datetimeFormats = Ne,
    Oe.numberFormats = le,
    Oe.rt = Tt,
    Oe.te = S,
    Oe.tm = V,
    Oe.d = ht,
    Oe.n = qt,
    Oe.getDateTimeFormat = Ee,
    Oe.setDateTimeFormat = me,
    Oe.mergeDateTimeFormat = he,
    Oe.getNumberFormat = fe,
    Oe.setNumberFormat = Re,
    Oe.mergeNumberFormat = $e,
    Oe[Lb] = r,
    Oe[Mc] = z,
    Oe[kc] = Ue,
    Oe[$c] = xe,
    Oe
}
function RF(e) {
    const t = st(e.locale) ? e.locale : Kc
      , n = st(e.fallbackLocale) || hn(e.fallbackLocale) || It(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t
      , r = Vr(e.missing) ? e.missing : void 0
      , i = Rt(e.silentTranslationWarn) || no(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0
      , o = Rt(e.silentFallbackWarn) || no(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0
      , s = Rt(e.fallbackRoot) ? e.fallbackRoot : !0
      , u = !!e.formatFallbackMessages
      , c = It(e.modifiers) ? e.modifiers : {}
      , f = e.pluralizationRules
      , h = Vr(e.postTranslation) ? e.postTranslation : void 0
      , p = st(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0
      , g = !!e.escapeParameterHtml
      , y = Rt(e.sync) ? e.sync : !0;
    let _ = e.messages;
    if (It(e.sharedMessages)) {
        const $ = e.sharedMessages;
        _ = Object.keys($).reduce( (Z, j) => {
            const ne = Z[j] || (Z[j] = {});
            return Bn(ne, $[j]),
            Z
        }
        , _ || {})
    }
    const {__i18n: R, __root: F, __injectWithOption: T} = e
      , A = e.datetimeFormats
      , E = e.numberFormats
      , I = e.flatJson
      , W = e.translateExistCompatible;
    return {
        locale: t,
        fallbackLocale: n,
        messages: _,
        flatJson: I,
        datetimeFormats: A,
        numberFormats: E,
        missing: r,
        missingWarn: i,
        fallbackWarn: o,
        fallbackRoot: s,
        fallbackFormat: u,
        modifiers: c,
        pluralRules: f,
        postTranslation: h,
        warnHtmlMessage: p,
        escapeParameter: g,
        messageResolver: e.messageResolver,
        inheritLocale: y,
        translateExistCompatible: W,
        __i18n: R,
        __root: F,
        __injectWithOption: T
    }
}
function jc(e={}, t) {
    {
        const n = sd(RF(e))
          , {__extender: r} = e
          , i = {
            id: n.id,
            get locale() {
                return n.locale.value
            },
            set locale(o) {
                n.locale.value = o
            },
            get fallbackLocale() {
                return n.fallbackLocale.value
            },
            set fallbackLocale(o) {
                n.fallbackLocale.value = o
            },
            get messages() {
                return n.messages.value
            },
            get datetimeFormats() {
                return n.datetimeFormats.value
            },
            get numberFormats() {
                return n.numberFormats.value
            },
            get availableLocales() {
                return n.availableLocales
            },
            get formatter() {
                return {
                    interpolate() {
                        return []
                    }
                }
            },
            set formatter(o) {},
            get missing() {
                return n.getMissingHandler()
            },
            set missing(o) {
                n.setMissingHandler(o)
            },
            get silentTranslationWarn() {
                return Rt(n.missingWarn) ? !n.missingWarn : n.missingWarn
            },
            set silentTranslationWarn(o) {
                n.missingWarn = Rt(o) ? !o : o
            },
            get silentFallbackWarn() {
                return Rt(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
            },
            set silentFallbackWarn(o) {
                n.fallbackWarn = Rt(o) ? !o : o
            },
            get modifiers() {
                return n.modifiers
            },
            get formatFallbackMessages() {
                return n.fallbackFormat
            },
            set formatFallbackMessages(o) {
                n.fallbackFormat = o
            },
            get postTranslation() {
                return n.getPostTranslationHandler()
            },
            set postTranslation(o) {
                n.setPostTranslationHandler(o)
            },
            get sync() {
                return n.inheritLocale
            },
            set sync(o) {
                n.inheritLocale = o
            },
            get warnHtmlInMessage() {
                return n.warnHtmlMessage ? "warn" : "off"
            },
            set warnHtmlInMessage(o) {
                n.warnHtmlMessage = o !== "off"
            },
            get escapeParameterHtml() {
                return n.escapeParameter
            },
            set escapeParameterHtml(o) {
                n.escapeParameter = o
            },
            get preserveDirectiveContent() {
                return !0
            },
            set preserveDirectiveContent(o) {},
            get pluralizationRules() {
                return n.pluralRules || {}
            },
            __composer: n,
            t(...o) {
                const [s,u,c] = o
                  , f = {};
                let h = null
                  , p = null;
                if (!st(s))
                    throw Kt(Bt.INVALID_ARGUMENT);
                const g = s;
                return st(u) ? f.locale = u : hn(u) ? h = u : It(u) && (p = u),
                hn(c) ? h = c : It(c) && (p = c),
                Reflect.apply(n.t, n, [g, h || p || {}, f])
            },
            rt(...o) {
                return Reflect.apply(n.rt, n, [...o])
            },
            tc(...o) {
                const [s,u,c] = o
                  , f = {
                    plural: 1
                };
                let h = null
                  , p = null;
                if (!st(s))
                    throw Kt(Bt.INVALID_ARGUMENT);
                const g = s;
                return st(u) ? f.locale = u : ro(u) ? f.plural = u : hn(u) ? h = u : It(u) && (p = u),
                st(c) ? f.locale = c : hn(c) ? h = c : It(c) && (p = c),
                Reflect.apply(n.t, n, [g, h || p || {}, f])
            },
            te(o, s) {
                return n.te(o, s)
            },
            tm(o) {
                return n.tm(o)
            },
            getLocaleMessage(o) {
                return n.getLocaleMessage(o)
            },
            setLocaleMessage(o, s) {
                n.setLocaleMessage(o, s)
            },
            mergeLocaleMessage(o, s) {
                n.mergeLocaleMessage(o, s)
            },
            d(...o) {
                return Reflect.apply(n.d, n, [...o])
            },
            getDateTimeFormat(o) {
                return n.getDateTimeFormat(o)
            },
            setDateTimeFormat(o, s) {
                n.setDateTimeFormat(o, s)
            },
            mergeDateTimeFormat(o, s) {
                n.mergeDateTimeFormat(o, s)
            },
            n(...o) {
                return Reflect.apply(n.n, n, [...o])
            },
            getNumberFormat(o) {
                return n.getNumberFormat(o)
            },
            setNumberFormat(o, s) {
                n.setNumberFormat(o, s)
            },
            mergeNumberFormat(o, s) {
                n.mergeNumberFormat(o, s)
            },
            getChoiceIndex(o, s) {
                return -1
            }
        };
        return i.__extender = r,
        i
    }
}
const ad = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function CF({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce( (r, i) => [...r, ...i.type === kt ? i.children : [i]], []) : t.reduce( (n, r) => {
        const i = e[r];
        return i && (n[r] = i()),
        n
    }
    , In())
}
function kb(e) {
    return kt
}
const xF = wr({
    name: "i18n-t",
    props: Bn({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => ro(e) || !isNaN(e)
        }
    }, ad),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , i = e.i18n || ud({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const o = Object.keys(n).filter(p => p !== "_")
              , s = In();
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = st(e.plural) ? +e.plural : e.plural);
            const u = CF(t, o)
              , c = i[Mc](e.keypath, u, s)
              , f = Bn(In(), r)
              , h = st(e.tag) || Dn(e.tag) ? e.tag : kb();
            return Oo(h, f, c)
        }
    }
})
  , Bc = xF
  , Tk = Bc;
function PF(e) {
    return hn(e) && !st(e[0])
}
function $b(e, t, n, r) {
    const {slots: i, attrs: o} = t;
    return () => {
        const s = {
            part: !0
        };
        let u = In();
        e.locale && (s.locale = e.locale),
        st(e.format) ? s.key = e.format : Dn(e.format) && (st(e.format.key) && (s.key = e.format.key),
        u = Object.keys(e.format).reduce( (g, y) => n.includes(y) ? Bn(In(), g, {
            [y]: e.format[y]
        }) : g, In()));
        const c = r(e.value, s, u);
        let f = [s.key];
        hn(c) ? f = c.map( (g, y) => {
            const _ = i[g.type]
              , R = _ ? _({
                [g.type]: g.value,
                index: y,
                parts: c
            }) : [g.value];
            return PF(R) && (R[0].key = `${g.type}-${y}`),
            R
        }
        ) : st(c) && (f = [c]);
        const h = Bn(In(), o)
          , p = st(e.tag) || Dn(e.tag) ? e.tag : kb();
        return Oo(p, h, f)
    }
}
const IF = wr({
    name: "i18n-n",
    props: Bn({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, ad),
    setup(e, t) {
        const n = e.i18n || ud({
            useScope: e.scope,
            __useComponent: !0
        });
        return $b(e, t, F_, (...r) => n[$c](...r))
    }
})
  , bm = IF
  , FF = wr({
    name: "i18n-d",
    props: Bn({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, ad),
    setup(e, t) {
        const n = e.i18n || ud({
            useScope: e.scope,
            __useComponent: !0
        });
        return $b(e, t, L_, (...r) => n[kc](...r))
    }
})
  , _m = FF;
function LF(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function NF(e) {
    const t = s => {
        const {instance: u, modifiers: c, value: f} = s;
        if (!u || !u.$)
            throw Kt(Bt.UNEXPECTED_ERROR);
        const h = LF(e, u.$)
          , p = wm(f);
        return [Reflect.apply(h.t, h, [...Em(p)]), h]
    }
    ;
    return {
        created: (s, u) => {
            const [c,f] = t(u);
            Na && e.global === f && (s.__i18nWatcher = tt(f.locale, () => {
                u.instance && u.instance.$forceUpdate()
            }
            )),
            s.__composer = f,
            s.textContent = c
        }
        ,
        unmounted: s => {
            Na && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s, {value: u}) => {
            if (s.__composer) {
                const c = s.__composer
                  , f = wm(u);
                s.textContent = Reflect.apply(c.t, c, [...Em(f)])
            }
        }
        ,
        getSSRProps: s => {
            const [u] = t(s);
            return {
                textContent: u
            }
        }
    }
}
function wm(e) {
    if (st(e))
        return {
            path: e
        };
    if (It(e)) {
        if (!("path"in e))
            throw Kt(Bt.REQUIRED_VALUE, "path");
        return e
    } else
        throw Kt(Bt.INVALID_VALUE)
}
function Em(e) {
    const {path: t, locale: n, args: r, choice: i, plural: o} = e
      , s = {}
      , u = r || {};
    return st(n) && (s.locale = n),
    ro(i) && (s.plural = i),
    ro(o) && (s.plural = o),
    [t, u, s]
}
function MF(e, t, ...n) {
    const r = It(n[0]) ? n[0] : {}
      , i = !!r.useI18nComponentName;
    (Rt(r.globalInstall) ? r.globalInstall : !0) && ([i ? "i18n" : Bc.name, "I18nT"].forEach(s => e.component(s, Bc)),
    [bm.name, "I18nN"].forEach(s => e.component(s, bm)),
    [_m.name, "I18nD"].forEach(s => e.component(s, _m))),
    e.directive("t", NF(t))
}
function kF(e, t, n) {
    return {
        beforeCreate() {
            const r = Ft();
            if (!r)
                throw Kt(Bt.UNEXPECTED_ERROR);
            const i = this.$options;
            if (i.i18n) {
                const o = i.i18n;
                if (i.__i18n && (o.__i18n = i.__i18n),
                o.__root = t,
                this === this.$root)
                    this.$i18n = Om(e, o);
                else {
                    o.__injectWithOption = !0,
                    o.__extender = n.__vueI18nExtend,
                    this.$i18n = jc(o);
                    const s = this.$i18n;
                    s.__extender && (s.__disposer = s.__extender(this.$i18n))
                }
            } else if (i.__i18n)
                if (this === this.$root)
                    this.$i18n = Om(e, i);
                else {
                    this.$i18n = jc({
                        __i18n: i.__i18n,
                        __injectWithOption: !0,
                        __extender: n.__vueI18nExtend,
                        __root: t
                    });
                    const o = this.$i18n;
                    o.__extender && (o.__disposer = o.__extender(this.$i18n))
                }
            else
                this.$i18n = e;
            i.__i18nGlobal && Mb(t, i, i),
            this.$t = (...o) => this.$i18n.t(...o),
            this.$rt = (...o) => this.$i18n.rt(...o),
            this.$tc = (...o) => this.$i18n.tc(...o),
            this.$te = (o, s) => this.$i18n.te(o, s),
            this.$d = (...o) => this.$i18n.d(...o),
            this.$n = (...o) => this.$i18n.n(...o),
            this.$tm = o => this.$i18n.tm(o),
            n.__setInstance(r, this.$i18n)
        },
        mounted() {},
        unmounted() {
            const r = Ft();
            if (!r)
                throw Kt(Bt.UNEXPECTED_ERROR);
            const i = this.$i18n;
            delete this.$t,
            delete this.$rt,
            delete this.$tc,
            delete this.$te,
            delete this.$d,
            delete this.$n,
            delete this.$tm,
            i.__disposer && (i.__disposer(),
            delete i.__disposer,
            delete i.__extender),
            n.__deleteInstance(r),
            delete this.$i18n
        }
    }
}
function Om(e, t) {
    e.locale = t.locale || e.locale,
    e.fallbackLocale = t.fallbackLocale || e.fallbackLocale,
    e.missing = t.missing || e.missing,
    e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn,
    e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn,
    e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages,
    e.postTranslation = t.postTranslation || e.postTranslation,
    e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage,
    e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml,
    e.sync = t.sync || e.sync,
    e.__composer[Fb](t.pluralizationRules || e.pluralizationRules);
    const n = Vu(e.locale, {
        messages: t.messages,
        __i18n: t.__i18n
    });
    return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])),
    t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])),
    t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])),
    e
}
const $F = Xr("global-vue-i18n");
function Rk(e={}, t) {
    const n = __VUE_I18N_LEGACY_API__ && Rt(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__
      , r = Rt(e.globalInjection) ? e.globalInjection : !0
      , i = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0
      , o = new Map
      , [s,u] = DF(e, n)
      , c = Xr("");
    function f(g) {
        return o.get(g) || null
    }
    function h(g, y) {
        o.set(g, y)
    }
    function p(g) {
        o.delete(g)
    }
    {
        const g = {
            get mode() {
                return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition"
            },
            get allowComposition() {
                return i
            },
            async install(y, ..._) {
                if (y.__VUE_I18N_SYMBOL__ = c,
                y.provide(y.__VUE_I18N_SYMBOL__, g),
                It(_[0])) {
                    const T = _[0];
                    g.__composerExtend = T.__composerExtend,
                    g.__vueI18nExtend = T.__vueI18nExtend
                }
                let R = null;
                !n && r && (R = GF(y, g.global)),
                __VUE_I18N_FULL_INSTALL__ && MF(y, g, ..._),
                __VUE_I18N_LEGACY_API__ && n && y.mixin(kF(u, u.__composer, g));
                const F = y.unmount;
                y.unmount = () => {
                    R && R(),
                    g.dispose(),
                    F()
                }
            },
            get global() {
                return u
            },
            dispose() {
                s.stop()
            },
            __instances: o,
            __getInstance: f,
            __setInstance: h,
            __deleteInstance: p
        };
        return g
    }
}
function ud(e={}) {
    const t = Ft();
    if (t == null)
        throw Kt(Bt.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw Kt(Bt.NOT_INSTALLED);
    const n = jF(t)
      , r = VF(n)
      , i = Nb(t)
      , o = BF(e, i);
    if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition)
            throw Kt(Bt.NOT_AVAILABLE_IN_LEGACY_MODE);
        return KF(t, o, r, e)
    }
    if (o === "global")
        return Mb(r, e, i),
        r;
    if (o === "parent") {
        let c = UF(n, t, e.__useComponent);
        return c == null && (c = r),
        c
    }
    const s = n;
    let u = s.__getInstance(t);
    if (u == null) {
        const c = Bn({}, e);
        "__i18n"in i && (c.__i18n = i.__i18n),
        r && (c.__root = r),
        u = sd(c),
        s.__composerExtend && (u[Dc] = s.__composerExtend(u)),
        HF(s, t, u),
        s.__setInstance(t, u)
    }
    return u
}
function DF(e, t, n) {
    const r = bu();
    {
        const i = __VUE_I18N_LEGACY_API__ && t ? r.run( () => jc(e)) : r.run( () => sd(e));
        if (i == null)
            throw Kt(Bt.UNEXPECTED_ERROR);
        return [r, i]
    }
}
function jF(e) {
    {
        const t = Nt(e.isCE ? $F : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw Kt(e.isCE ? Bt.NOT_INSTALLED_WITH_PROVIDE : Bt.UNEXPECTED_ERROR);
        return t
    }
}
function BF(e, t) {
    return N_(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function VF(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function UF(e, t, n=!1) {
    let r = null;
    const i = t.root;
    let o = WF(t, n);
    for (; o != null; ) {
        const s = e;
        if (e.mode === "composition")
            r = s.__getInstance(o);
        else if (__VUE_I18N_LEGACY_API__) {
            const u = s.__getInstance(o);
            u != null && (r = u.__composer,
            n && r && !r[Lb] && (r = null))
        }
        if (r != null || i === o)
            break;
        o = o.parent
    }
    return r
}
function WF(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function HF(e, t, n) {
    un( () => {}
    , t),
    nr( () => {
        const r = n;
        e.__deleteInstance(t);
        const i = r[Dc];
        i && (i(),
        delete r[Dc])
    }
    , t)
}
function KF(e, t, n, r={}) {
    const i = t === "local"
      , o = Fi(null);
    if (i && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
        throw Kt(Bt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const s = Rt(r.inheritLocale) ? r.inheritLocale : !st(r.locale)
      , u = Me(!i || s ? n.locale.value : st(r.locale) ? r.locale : Kc)
      , c = Me(!i || s ? n.fallbackLocale.value : st(r.fallbackLocale) || hn(r.fallbackLocale) || It(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : u.value)
      , f = Me(Vu(u.value, r))
      , h = Me(It(r.datetimeFormats) ? r.datetimeFormats : {
        [u.value]: {}
    })
      , p = Me(It(r.numberFormats) ? r.numberFormats : {
        [u.value]: {}
    })
      , g = i ? n.missingWarn : Rt(r.missingWarn) || no(r.missingWarn) ? r.missingWarn : !0
      , y = i ? n.fallbackWarn : Rt(r.fallbackWarn) || no(r.fallbackWarn) ? r.fallbackWarn : !0
      , _ = i ? n.fallbackRoot : Rt(r.fallbackRoot) ? r.fallbackRoot : !0
      , R = !!r.fallbackFormat
      , F = Vr(r.missing) ? r.missing : null
      , T = Vr(r.postTranslation) ? r.postTranslation : null
      , A = i ? n.warnHtmlMessage : Rt(r.warnHtmlMessage) ? r.warnHtmlMessage : !0
      , E = !!r.escapeParameter
      , I = i ? n.modifiers : It(r.modifiers) ? r.modifiers : {}
      , W = r.pluralRules || i && n.pluralRules;
    function $() {
        return [u.value, c.value, f.value, h.value, p.value]
    }
    const U = Fe({
        get: () => o.value ? o.value.locale.value : u.value,
        set: w => {
            o.value && (o.value.locale.value = w),
            u.value = w
        }
    })
      , Z = Fe({
        get: () => o.value ? o.value.fallbackLocale.value : c.value,
        set: w => {
            o.value && (o.value.fallbackLocale.value = w),
            c.value = w
        }
    })
      , j = Fe( () => o.value ? o.value.messages.value : f.value)
      , ne = Fe( () => h.value)
      , be = Fe( () => p.value);
    function ae() {
        return o.value ? o.value.getPostTranslationHandler() : T
    }
    function we(w) {
        o.value && o.value.setPostTranslationHandler(w)
    }
    function Ve() {
        return o.value ? o.value.getMissingHandler() : F
    }
    function Ne(w) {
        o.value && o.value.setMissingHandler(w)
    }
    function le(w) {
        return $(),
        w()
    }
    function je(...w) {
        return o.value ? le( () => Reflect.apply(o.value.t, null, [...w])) : le( () => "")
    }
    function Te(...w) {
        return o.value ? Reflect.apply(o.value.rt, null, [...w]) : ""
    }
    function ut(...w) {
        return o.value ? le( () => Reflect.apply(o.value.d, null, [...w])) : le( () => "")
    }
    function dt(...w) {
        return o.value ? le( () => Reflect.apply(o.value.n, null, [...w])) : le( () => "")
    }
    function it(w) {
        return o.value ? o.value.tm(w) : {}
    }
    function wt(w, V) {
        return o.value ? o.value.te(w, V) : !1
    }
    function Tt(w) {
        return o.value ? o.value.getLocaleMessage(w) : {}
    }
    function ht(w, V) {
        o.value && (o.value.setLocaleMessage(w, V),
        f.value[w] = V)
    }
    function qt(w, V) {
        o.value && o.value.mergeLocaleMessage(w, V)
    }
    function ge(w) {
        return o.value ? o.value.getDateTimeFormat(w) : {}
    }
    function Y(w, V) {
        o.value && (o.value.setDateTimeFormat(w, V),
        h.value[w] = V)
    }
    function ve(w, V) {
        o.value && o.value.mergeDateTimeFormat(w, V)
    }
    function z(w) {
        return o.value ? o.value.getNumberFormat(w) : {}
    }
    function xe(w, V) {
        o.value && (o.value.setNumberFormat(w, V),
        p.value[w] = V)
    }
    function Ue(w, V) {
        o.value && o.value.mergeNumberFormat(w, V)
    }
    const Ie = {
        get id() {
            return o.value ? o.value.id : -1
        },
        locale: U,
        fallbackLocale: Z,
        messages: j,
        datetimeFormats: ne,
        numberFormats: be,
        get inheritLocale() {
            return o.value ? o.value.inheritLocale : s
        },
        set inheritLocale(w) {
            o.value && (o.value.inheritLocale = w)
        },
        get availableLocales() {
            return o.value ? o.value.availableLocales : Object.keys(f.value)
        },
        get modifiers() {
            return o.value ? o.value.modifiers : I
        },
        get pluralRules() {
            return o.value ? o.value.pluralRules : W
        },
        get isGlobal() {
            return o.value ? o.value.isGlobal : !1
        },
        get missingWarn() {
            return o.value ? o.value.missingWarn : g
        },
        set missingWarn(w) {
            o.value && (o.value.missingWarn = w)
        },
        get fallbackWarn() {
            return o.value ? o.value.fallbackWarn : y
        },
        set fallbackWarn(w) {
            o.value && (o.value.missingWarn = w)
        },
        get fallbackRoot() {
            return o.value ? o.value.fallbackRoot : _
        },
        set fallbackRoot(w) {
            o.value && (o.value.fallbackRoot = w)
        },
        get fallbackFormat() {
            return o.value ? o.value.fallbackFormat : R
        },
        set fallbackFormat(w) {
            o.value && (o.value.fallbackFormat = w)
        },
        get warnHtmlMessage() {
            return o.value ? o.value.warnHtmlMessage : A
        },
        set warnHtmlMessage(w) {
            o.value && (o.value.warnHtmlMessage = w)
        },
        get escapeParameter() {
            return o.value ? o.value.escapeParameter : E
        },
        set escapeParameter(w) {
            o.value && (o.value.escapeParameter = w)
        },
        t: je,
        getPostTranslationHandler: ae,
        setPostTranslationHandler: we,
        getMissingHandler: Ve,
        setMissingHandler: Ne,
        rt: Te,
        d: ut,
        n: dt,
        tm: it,
        te: wt,
        getLocaleMessage: Tt,
        setLocaleMessage: ht,
        mergeLocaleMessage: qt,
        getDateTimeFormat: ge,
        setDateTimeFormat: Y,
        mergeDateTimeFormat: ve,
        getNumberFormat: z,
        setNumberFormat: xe,
        mergeNumberFormat: Ue
    };
    function S(w) {
        w.locale.value = u.value,
        w.fallbackLocale.value = c.value,
        Object.keys(f.value).forEach(V => {
            w.mergeLocaleMessage(V, f.value[V])
        }
        ),
        Object.keys(h.value).forEach(V => {
            w.mergeDateTimeFormat(V, h.value[V])
        }
        ),
        Object.keys(p.value).forEach(V => {
            w.mergeNumberFormat(V, p.value[V])
        }
        ),
        w.escapeParameter = E,
        w.fallbackFormat = R,
        w.fallbackRoot = _,
        w.fallbackWarn = y,
        w.missingWarn = g,
        w.warnHtmlMessage = A
    }
    return kf( () => {
        if (e.proxy == null || e.proxy.$i18n == null)
            throw Kt(Bt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const w = o.value = e.proxy.$i18n.__composer;
        t === "global" ? (u.value = w.locale.value,
        c.value = w.fallbackLocale.value,
        f.value = w.messages.value,
        h.value = w.datetimeFormats.value,
        p.value = w.numberFormats.value) : i && S(w)
    }
    ),
    Ie
}
const qF = ["locale", "fallbackLocale", "availableLocales"]
  , Sm = ["t", "rt", "d", "n", "tm", "te"];
function GF(e, t) {
    const n = Object.create(null);
    return qF.forEach(i => {
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o)
            throw Kt(Bt.UNEXPECTED_ERROR);
        const s = at(o.value) ? {
            get() {
                return o.value.value
            },
            set(u) {
                o.value.value = u
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, i, s)
    }
    ),
    e.config.globalProperties.$i18n = n,
    Sm.forEach(i => {
        const o = Object.getOwnPropertyDescriptor(t, i);
        if (!o || !o.value)
            throw Kt(Bt.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${i}`, o)
    }
    ),
    () => {
        delete e.config.globalProperties.$i18n,
        Sm.forEach(i => {
            delete e.config.globalProperties[`$${i}`]
        }
        )
    }
}
OF();
__INTLIFY_JIT_COMPILATION__ ? Jd(j_) : Jd(B_);
M_(V_);
k_(Hm);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = Wi();
    e.__INTLIFY__ = !0,
    $_(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
/**
  * vee-validate v4.13.2
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function fn(e) {
    return typeof e == "function"
}
function Db(e) {
    return e == null
}
const Si = e => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function ld(e) {
    return Number(e) >= 0
}
function zF(e) {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
function YF(e) {
    return typeof e == "object" && e !== null
}
function JF(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}
function Am(e) {
    if (!YF(e) || JF(e) !== "[object Object]")
        return !1;
    if (Object.getPrototypeOf(e) === null)
        return !0;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}
function ws(e, t) {
    return Object.keys(t).forEach(n => {
        if (Am(t[n]) && Am(e[n])) {
            e[n] || (e[n] = {}),
            ws(e[n], t[n]);
            return
        }
        e[n] = t[n]
    }
    ),
    e
}
function qo(e) {
    const t = e.split(".");
    if (!t.length)
        return "";
    let n = String(t[0]);
    for (let r = 1; r < t.length; r++) {
        if (ld(t[r])) {
            n += `[${t[r]}]`;
            continue
        }
        n += `.${t[r]}`
    }
    return n
}
const XF = {};
function QF(e) {
    return XF[e]
}
function Tm(e, t, n) {
    typeof n.value == "object" && (n.value = pt(n.value)),
    !n.enumerable || n.get || n.set || !n.configurable || !n.writable || t === "__proto__" ? Object.defineProperty(e, t, n) : e[t] = n.value
}
function pt(e) {
    if (typeof e != "object")
        return e;
    var t = 0, n, r, i, o = Object.prototype.toString.call(e);
    if (o === "[object Object]" ? i = Object.create(e.__proto__ || null) : o === "[object Array]" ? i = Array(e.length) : o === "[object Set]" ? (i = new Set,
    e.forEach(function(s) {
        i.add(pt(s))
    })) : o === "[object Map]" ? (i = new Map,
    e.forEach(function(s, u) {
        i.set(pt(u), pt(s))
    })) : o === "[object Date]" ? i = new Date(+e) : o === "[object RegExp]" ? i = new RegExp(e.source,e.flags) : o === "[object DataView]" ? i = new e.constructor(pt(e.buffer)) : o === "[object ArrayBuffer]" ? i = e.slice(0) : o.slice(-6) === "Array]" && (i = new e.constructor(e)),
    i) {
        for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
            Tm(i, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
        for (t = 0,
        r = Object.getOwnPropertyNames(e); t < r.length; t++)
            Object.hasOwnProperty.call(i, n = r[t]) && i[n] === e[n] || Tm(i, n, Object.getOwnPropertyDescriptor(e, n))
    }
    return i || e
}
const rr = Symbol("vee-validate-form")
  , Vs = Symbol("vee-validate-field-instance")
  , Rm = Symbol("Default empty value")
  , ZF = typeof window != "undefined";
function Vc(e) {
    return fn(e) && !!e.__locatorRef
}
function jn(e) {
    return !!e && fn(e.parse) && e.__type === "VVTypedSchema"
}
function iu(e) {
    return !!e && fn(e.validate)
}
function jb(e) {
    return e === "checkbox" || e === "radio"
}
function eL(e) {
    return Si(e) || Array.isArray(e)
}
function tL(e) {
    return Array.isArray(e) ? e.length === 0 : Si(e) && Object.keys(e).length === 0
}
function Uu(e) {
    return /^\[.+\]$/i.test(e)
}
function nL(e) {
    return Bb(e) && e.multiple
}
function Bb(e) {
    return e.tagName === "SELECT"
}
function rL(e) {
    return Vb(e) && e.target && "submit"in e.target
}
function Vb(e) {
    return e ? !!(typeof Event != "undefined" && fn(Event) && e instanceof Event || e && e.srcElement) : !1
}
function on(e, t) {
    if (e === t)
        return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor)
            return !1;
        var n, r, i;
        if (Array.isArray(e)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!on(e[r], t[r]))
                    return !1;
            return !0
        }
        if (e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (r of e.entries())
                if (!t.has(r[0]))
                    return !1;
            for (r of e.entries())
                if (!on(r[1], t.get(r[0])))
                    return !1;
            return !0
        }
        if (Cm(e) && Cm(t))
            return !(e.size !== t.size || e.name !== t.name || e.lastModified !== t.lastModified || e.type !== t.type);
        if (e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (r of e.entries())
                if (!t.has(r[0]))
                    return !1;
            return !0
        }
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString)
            return e.toString() === t.toString();
        for (i = Object.keys(e),
        n = i.length,
        r = n; r-- !== 0; ) {
            var o = i[r];
            if (!on(e[o], t[o]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Cm(e) {
    return ZF ? e instanceof File : !1
}
function cd(e) {
    return Uu(e) ? e.replace(/\[|\]/gi, "") : e
}
function dn(e, t, n) {
    return e ? Uu(t) ? e[cd(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce( (i, o) => eL(i) && o in i ? i[o] : n, e) : n
}
function cr(e, t, n) {
    if (Uu(t)) {
        e[cd(t)] = n;
        return
    }
    const r = t.split(/\.|\[(\d+)\]/).filter(Boolean);
    let i = e;
    for (let o = 0; o < r.length; o++) {
        if (o === r.length - 1) {
            i[r[o]] = n;
            return
        }
        (!(r[o]in i) || Db(i[r[o]])) && (i[r[o]] = ld(r[o + 1]) ? [] : {}),
        i = i[r[o]]
    }
}
function Ul(e, t) {
    if (Array.isArray(e) && ld(t)) {
        e.splice(Number(t), 1);
        return
    }
    Si(e) && delete e[t]
}
function xm(e, t) {
    if (Uu(t)) {
        delete e[cd(t)];
        return
    }
    const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
    let r = e;
    for (let o = 0; o < n.length; o++) {
        if (o === n.length - 1) {
            Ul(r, n[o]);
            break
        }
        if (!(n[o]in r) || Db(r[n[o]]))
            break;
        r = r[n[o]]
    }
    const i = n.map( (o, s) => dn(e, n.slice(0, s).join(".")));
    for (let o = i.length - 1; o >= 0; o--)
        if (tL(i[o])) {
            if (o === 0) {
                Ul(e, n[0]);
                continue
            }
            Ul(i[o - 1], n[o - 1])
        }
}
function wn(e) {
    return Object.keys(e)
}
function Er(e, t=void 0) {
    const n = Ft();
    return (n == null ? void 0 : n.provides[e]) || Nt(e, t)
}
function Pm(e, t, n) {
    if (Array.isArray(e)) {
        const r = [...e]
          , i = r.findIndex(o => on(o, t));
        return i >= 0 ? r.splice(i, 1) : r.push(t),
        r
    }
    return on(e, t) ? n : t
}
function Im(e, t=0) {
    let n = null
      , r = [];
    return function(...i) {
        return n && clearTimeout(n),
        n = setTimeout( () => {
            const o = e(...i);
            r.forEach(s => s(o)),
            r = []
        }
        , t),
        new Promise(o => r.push(o))
    }
}
function iL(e, t) {
    return Si(t) && t.number ? zF(e) : e
}
function Uc(e, t) {
    let n;
    return async function(...i) {
        const o = e(...i);
        n = o;
        const s = await o;
        return o !== n ? s : (n = void 0,
        t(s, i))
    }
}
function Wc(e) {
    return Array.isArray(e) ? e : e ? [e] : []
}
function Aa(e, t) {
    const n = {};
    for (const r in e)
        t.includes(r) || (n[r] = e[r]);
    return n
}
function oL(e) {
    let t = null
      , n = [];
    return function(...r) {
        const i = zt( () => {
            if (t !== i)
                return;
            const o = e(...r);
            n.forEach(s => s(o)),
            n = [],
            t = null
        }
        );
        return t = i,
        new Promise(o => n.push(o))
    }
}
function Wl(e) {
    if (Ub(e))
        return e._value
}
function Ub(e) {
    return "_value"in e
}
function sL(e) {
    return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value
}
function ou(e) {
    if (!Vb(e))
        return e;
    const t = e.target;
    if (jb(t.type) && Ub(t))
        return Wl(t);
    if (t.type === "file" && t.files) {
        const n = Array.from(t.files);
        return t.multiple ? n : n[0]
    }
    if (nL(t))
        return Array.from(t.options).filter(n => n.selected && !n.disabled).map(Wl);
    if (Bb(t)) {
        const n = Array.from(t.options).find(r => r.selected);
        return n ? Wl(n) : t.value
    }
    return sL(t)
}
function Wb(e) {
    const t = {};
    return Object.defineProperty(t, "_$$isNormalized", {
        value: !0,
        writable: !1,
        enumerable: !1,
        configurable: !1
    }),
    e ? Si(e) && e._$$isNormalized ? e : Si(e) ? Object.keys(e).reduce( (n, r) => {
        const i = aL(e[r]);
        return e[r] !== !1 && (n[r] = Fm(i)),
        n
    }
    , t) : typeof e != "string" ? t : e.split("|").reduce( (n, r) => {
        const i = uL(r);
        return i.name && (n[i.name] = Fm(i.params)),
        n
    }
    , t) : t
}
function aL(e) {
    return e === !0 ? [] : Array.isArray(e) || Si(e) ? e : [e]
}
function Fm(e) {
    const t = n => typeof n == "string" && n[0] === "@" ? lL(n.slice(1)) : n;
    return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce( (n, r) => (n[r] = t(e[r]),
    n), {})
}
const uL = e => {
    let t = [];
    const n = e.split(":")[0];
    return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")),
    {
        name: n,
        params: t
    }
}
;
function lL(e) {
    const t = n => dn(n, e) || n[e];
    return t.__locatorRef = e,
    t
}
function cL(e) {
    return Array.isArray(e) ? e.filter(Vc) : wn(e).filter(t => Vc(e[t])).map(t => e[t])
}
const fL = {
    generateMessage: ({field: e}) => `${e} is not valid.`,
    bails: !0,
    validateOnBlur: !0,
    validateOnChange: !0,
    validateOnInput: !1,
    validateOnModelUpdate: !0
};
let dL = Object.assign({}, fL);
const Go = () => dL;
async function Hb(e, t, n={}) {
    const r = n == null ? void 0 : n.bails
      , i = {
        name: (n == null ? void 0 : n.name) || "{field}",
        rules: t,
        label: n == null ? void 0 : n.label,
        bails: r != null ? r : !0,
        formData: (n == null ? void 0 : n.values) || {}
    }
      , o = await hL(i, e);
    return Object.assign(Object.assign({}, o), {
        valid: !o.errors.length
    })
}
async function hL(e, t) {
    const n = e.rules;
    if (jn(n) || iu(n))
        return mL(t, Object.assign(Object.assign({}, e), {
            rules: n
        }));
    if (fn(n) || Array.isArray(n)) {
        const u = {
            field: e.label || e.name,
            name: e.name,
            label: e.label,
            form: e.formData,
            value: t
        }
          , c = Array.isArray(n) ? n : [n]
          , f = c.length
          , h = [];
        for (let p = 0; p < f; p++) {
            const g = c[p]
              , y = await g(t, u);
            if (!(typeof y != "string" && !Array.isArray(y) && y)) {
                if (Array.isArray(y))
                    h.push(...y);
                else {
                    const R = typeof y == "string" ? y : qb(u);
                    h.push(R)
                }
                if (e.bails)
                    return {
                        errors: h
                    }
            }
        }
        return {
            errors: h
        }
    }
    const r = Object.assign(Object.assign({}, e), {
        rules: Wb(n)
    })
      , i = []
      , o = Object.keys(r.rules)
      , s = o.length;
    for (let u = 0; u < s; u++) {
        const c = o[u]
          , f = await gL(r, t, {
            name: c,
            params: r.rules[c]
        });
        if (f.error && (i.push(f.error),
        e.bails))
            return {
                errors: i
            }
    }
    return {
        errors: i
    }
}
function pL(e) {
    return !!e && e.name === "ValidationError"
}
function Kb(e) {
    return {
        __type: "VVTypedSchema",
        async parse(n, r) {
            var i;
            try {
                return {
                    output: await e.validate(n, {
                        abortEarly: !1,
                        context: (r == null ? void 0 : r.formData) || {}
                    }),
                    errors: []
                }
            } catch (o) {
                if (!pL(o))
                    throw o;
                if (!(!((i = o.inner) === null || i === void 0) && i.length) && o.errors.length)
                    return {
                        errors: [{
                            path: o.path,
                            errors: o.errors
                        }]
                    };
                const s = o.inner.reduce( (u, c) => {
                    const f = c.path || "";
                    return u[f] || (u[f] = {
                        errors: [],
                        path: f
                    }),
                    u[f].errors.push(...c.errors),
                    u
                }
                , {});
                return {
                    errors: Object.values(s)
                }
            }
        }
    }
}
async function mL(e, t) {
    const r = await (jn(t.rules) ? t.rules : Kb(t.rules)).parse(e, {
        formData: t.formData
    })
      , i = [];
    for (const o of r.errors)
        o.errors.length && i.push(...o.errors);
    return {
        value: r.value,
        errors: i
    }
}
async function gL(e, t, n) {
    const r = QF(n.name);
    if (!r)
        throw new Error(`No such validator '${n.name}' exists.`);
    const i = vL(n.params, e.formData)
      , o = {
        field: e.label || e.name,
        name: e.name,
        label: e.label,
        value: t,
        form: e.formData,
        rule: Object.assign(Object.assign({}, n), {
            params: i
        })
    }
      , s = await r(t, i, o);
    return typeof s == "string" ? {
        error: s
    } : {
        error: s ? void 0 : qb(o)
    }
}
function qb(e) {
    const t = Go().generateMessage;
    return t ? t(e) : "Field is invalid"
}
function vL(e, t) {
    const n = r => Vc(r) ? r(t) : r;
    return Array.isArray(e) ? e.map(n) : Object.keys(e).reduce( (r, i) => (r[i] = n(e[i]),
    r), {})
}
async function yL(e, t) {
    const r = await (jn(e) ? e : Kb(e)).parse(pt(t))
      , i = {}
      , o = {};
    for (const s of r.errors) {
        const u = s.errors
          , c = (s.path || "").replace(/\["(\d+)"\]/g, (f, h) => `[${h}]`);
        i[c] = {
            valid: !u.length,
            errors: u
        },
        u.length && (o[c] = u[0])
    }
    return {
        valid: !r.errors.length,
        results: i,
        errors: o,
        values: r.value,
        source: "schema"
    }
}
async function bL(e, t, n) {
    const i = wn(e).map(async f => {
        var h, p, g;
        const y = (h = n == null ? void 0 : n.names) === null || h === void 0 ? void 0 : h[f]
          , _ = await Hb(dn(t, f), e[f], {
            name: (y == null ? void 0 : y.name) || f,
            label: y == null ? void 0 : y.label,
            values: t,
            bails: (g = (p = n == null ? void 0 : n.bailsMap) === null || p === void 0 ? void 0 : p[f]) !== null && g !== void 0 ? g : !0
        });
        return Object.assign(Object.assign({}, _), {
            path: f
        })
    }
    );
    let o = !0;
    const s = await Promise.all(i)
      , u = {}
      , c = {};
    for (const f of s)
        u[f.path] = {
            valid: f.valid,
            errors: f.errors
        },
        f.valid || (o = !1,
        c[f.path] = f.errors[0]);
    return {
        valid: o,
        results: u,
        errors: c,
        source: "schema"
    }
}
let Lm = 0;
function _L(e, t) {
    const {value: n, initialValue: r, setInitialValue: i} = wL(e, t.modelValue, t.form);
    if (!t.form) {
        let c = function(y) {
            var _;
            "value"in y && (n.value = y.value),
            "errors"in y && h(y.errors),
            "touched"in y && (g.touched = (_ = y.touched) !== null && _ !== void 0 ? _ : g.touched),
            "initialValue"in y && i(y.initialValue)
        };
        const {errors: f, setErrors: h} = SL()
          , p = Lm >= Number.MAX_SAFE_INTEGER ? 0 : ++Lm
          , g = OL(n, r, f, t.schema);
        return {
            id: p,
            path: e,
            value: n,
            initialValue: r,
            meta: g,
            flags: {
                pendingUnmount: {
                    [p]: !1
                },
                pendingReset: !1
            },
            errors: f,
            setState: c
        }
    }
    const o = t.form.createPathState(e, {
        bails: t.bails,
        label: t.label,
        type: t.type,
        validate: t.validate,
        schema: t.schema
    })
      , s = Fe( () => o.errors);
    function u(c) {
        var f, h, p;
        "value"in c && (n.value = c.value),
        "errors"in c && ((f = t.form) === null || f === void 0 || f.setFieldError(Qe(e), c.errors)),
        "touched"in c && ((h = t.form) === null || h === void 0 || h.setFieldTouched(Qe(e), (p = c.touched) !== null && p !== void 0 ? p : !1)),
        "initialValue"in c && i(c.initialValue)
    }
    return {
        id: Array.isArray(o.id) ? o.id[o.id.length - 1] : o.id,
        path: e,
        value: n,
        errors: s,
        meta: o,
        initialValue: r,
        flags: o.__flags,
        setState: u
    }
}
function wL(e, t, n) {
    const r = Me(Qe(t));
    function i() {
        return n ? dn(n.initialValues.value, Qe(e), Qe(r)) : Qe(r)
    }
    function o(f) {
        if (!n) {
            r.value = f;
            return
        }
        n.setFieldInitialValue(Qe(e), f, !0)
    }
    const s = Fe(i);
    if (!n)
        return {
            value: Me(i()),
            initialValue: s,
            setInitialValue: o
        };
    const u = EL(t, n, s, e);
    return n.stageInitialValue(Qe(e), u, !0),
    {
        value: Fe({
            get() {
                return dn(n.values, Qe(e))
            },
            set(f) {
                n.setFieldValue(Qe(e), f, !1)
            }
        }),
        initialValue: s,
        setInitialValue: o
    }
}
function EL(e, t, n, r) {
    return at(e) ? Qe(e) : e !== void 0 ? e : dn(t.values, Qe(r), Qe(n))
}
function OL(e, t, n, r) {
    const i = Fe( () => {
        var s, u, c;
        return (c = (u = (s = ze(r)) === null || s === void 0 ? void 0 : s.describe) === null || u === void 0 ? void 0 : u.call(s).required) !== null && c !== void 0 ? c : !1
    }
    )
      , o = yn({
        touched: !1,
        pending: !1,
        valid: !0,
        required: i,
        validated: !!Qe(n).length,
        initialValue: Fe( () => Qe(t)),
        dirty: Fe( () => !on(Qe(e), Qe(t)))
    });
    return tt(n, s => {
        o.valid = !s.length
    }
    , {
        immediate: !0,
        flush: "sync"
    }),
    o
}
function SL() {
    const e = Me([]);
    return {
        errors: e,
        setErrors: t => {
            e.value = Wc(t)
        }
    }
}
function Ck(e, t, n) {
    return jb(n == null ? void 0 : n.type) ? TL(e, t, n) : Gb(e, t, n)
}
function Gb(e, t, n) {
    const {initialValue: r, validateOnMount: i, bails: o, type: s, checkedValue: u, label: c, validateOnValueUpdate: f, uncheckedValue: h, controlled: p, keepValueOnUnmount: g, syncVModel: y, form: _} = AL(n)
      , R = p ? Er(rr) : void 0
      , F = _ || R
      , T = Fe( () => qo(ze(e)))
      , A = Fe( () => {
        if (ze(F == null ? void 0 : F.schema))
            return;
        const Y = Qe(t);
        return iu(Y) || jn(Y) || fn(Y) || Array.isArray(Y) ? Y : Wb(Y)
    }
    )
      , E = !fn(A.value) && jn(ze(t))
      , {id: I, value: W, initialValue: $, meta: U, setState: Z, errors: j, flags: ne} = _L(T, {
        modelValue: r,
        form: F,
        bails: o,
        label: c,
        type: s,
        validate: A.value ? le : void 0,
        schema: E ? t : void 0
    })
      , be = Fe( () => j.value[0]);
    y && RL({
        value: W,
        prop: y,
        handleChange: je,
        shouldValidate: () => f && !ne.pendingReset
    });
    const ae = (ge, Y=!1) => {
        U.touched = !0,
        Y && Ve()
    }
    ;
    async function we(ge) {
        var Y, ve;
        if (F != null && F.validateSchema) {
            const {results: z} = await F.validateSchema(ge);
            return (Y = z[ze(T)]) !== null && Y !== void 0 ? Y : {
                valid: !0,
                errors: []
            }
        }
        return A.value ? Hb(W.value, A.value, {
            name: ze(T),
            label: ze(c),
            values: (ve = F == null ? void 0 : F.values) !== null && ve !== void 0 ? ve : {},
            bails: o
        }) : {
            valid: !0,
            errors: []
        }
    }
    const Ve = Uc(async () => (U.pending = !0,
    U.validated = !0,
    we("validated-only")), ge => (ne.pendingUnmount[ht.id] || (Z({
        errors: ge.errors
    }),
    U.pending = !1,
    U.valid = ge.valid),
    ge))
      , Ne = Uc(async () => we("silent"), ge => (U.valid = ge.valid,
    ge));
    function le(ge) {
        return (ge == null ? void 0 : ge.mode) === "silent" ? Ne() : Ve()
    }
    function je(ge, Y=!0) {
        const ve = ou(ge);
        it(ve, Y)
    }
    un( () => {
        if (i)
            return Ve();
        (!F || !F.validateSchema) && Ne()
    }
    );
    function Te(ge) {
        U.touched = ge
    }
    function ut(ge) {
        var Y;
        const ve = ge && "value"in ge ? ge.value : $.value;
        Z({
            value: pt(ve),
            initialValue: pt(ve),
            touched: (Y = ge == null ? void 0 : ge.touched) !== null && Y !== void 0 ? Y : !1,
            errors: (ge == null ? void 0 : ge.errors) || []
        }),
        U.pending = !1,
        U.validated = !1,
        Ne()
    }
    const dt = Ft();
    function it(ge, Y=!0) {
        W.value = dt && y ? iL(ge, dt.props.modelModifiers) : ge,
        (Y ? Ve : Ne)()
    }
    function wt(ge) {
        Z({
            errors: Array.isArray(ge) ? ge : [ge]
        })
    }
    const Tt = Fe({
        get() {
            return W.value
        },
        set(ge) {
            it(ge, f)
        }
    })
      , ht = {
        id: I,
        name: T,
        label: c,
        value: Tt,
        meta: U,
        errors: j,
        errorMessage: be,
        type: s,
        checkedValue: u,
        uncheckedValue: h,
        bails: o,
        keepValueOnUnmount: g,
        resetField: ut,
        handleReset: () => ut(),
        validate: le,
        handleChange: je,
        handleBlur: ae,
        setState: Z,
        setTouched: Te,
        setErrors: wt,
        setValue: it
    };
    if (mi(Vs, ht),
    at(t) && typeof Qe(t) != "function" && tt(t, (ge, Y) => {
        on(ge, Y) || (U.validated ? Ve() : Ne())
    }
    , {
        deep: !0
    }),
    !F)
        return ht;
    const qt = Fe( () => {
        const ge = A.value;
        return !ge || fn(ge) || iu(ge) || jn(ge) || Array.isArray(ge) ? {} : Object.keys(ge).reduce( (Y, ve) => {
            const z = cL(ge[ve]).map(xe => xe.__locatorRef).reduce( (xe, Ue) => {
                const Ie = dn(F.values, Ue) || F.values[Ue];
                return Ie !== void 0 && (xe[Ue] = Ie),
                xe
            }
            , {});
            return Object.assign(Y, z),
            Y
        }
        , {})
    }
    );
    return tt(qt, (ge, Y) => {
        if (!Object.keys(ge).length)
            return;
        !on(ge, Y) && (U.validated ? Ve() : Ne())
    }
    ),
    Ls( () => {
        var ge;
        const Y = (ge = ze(ht.keepValueOnUnmount)) !== null && ge !== void 0 ? ge : ze(F.keepValuesOnUnmount)
          , ve = ze(T);
        if (Y || !F || ne.pendingUnmount[ht.id]) {
            F == null || F.removePathState(ve, I);
            return
        }
        ne.pendingUnmount[ht.id] = !0;
        const z = F.getPathState(ve);
        if (Array.isArray(z == null ? void 0 : z.id) && (z != null && z.multiple) ? z != null && z.id.includes(ht.id) : (z == null ? void 0 : z.id) === ht.id) {
            if (z != null && z.multiple && Array.isArray(z.value)) {
                const Ue = z.value.findIndex(Ie => on(Ie, ze(ht.checkedValue)));
                if (Ue > -1) {
                    const Ie = [...z.value];
                    Ie.splice(Ue, 1),
                    F.setFieldValue(ve, Ie)
                }
                Array.isArray(z.id) && z.id.splice(z.id.indexOf(ht.id), 1)
            } else
                F.unsetPathValue(ze(T));
            F.removePathState(ve, I)
        }
    }
    ),
    ht
}
function AL(e) {
    const t = () => ({
        initialValue: void 0,
        validateOnMount: !1,
        bails: !0,
        label: void 0,
        validateOnValueUpdate: !0,
        keepValueOnUnmount: void 0,
        syncVModel: !1,
        controlled: !0
    })
      , n = !!(e != null && e.syncVModel)
      , r = typeof (e == null ? void 0 : e.syncVModel) == "string" ? e.syncVModel : (e == null ? void 0 : e.modelPropName) || "modelValue"
      , i = n && !("initialValue"in (e || {})) ? Hc(Ft(), r) : e == null ? void 0 : e.initialValue;
    if (!e)
        return Object.assign(Object.assign({}, t()), {
            initialValue: i
        });
    const o = "valueProp"in e ? e.valueProp : e.checkedValue
      , s = "standalone"in e ? !e.standalone : e.controlled
      , u = (e == null ? void 0 : e.modelPropName) || (e == null ? void 0 : e.syncVModel) || !1;
    return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
        initialValue: i,
        controlled: s != null ? s : !0,
        checkedValue: o,
        syncVModel: u
    })
}
function TL(e, t, n) {
    const r = n != null && n.standalone ? void 0 : Er(rr)
      , i = n == null ? void 0 : n.checkedValue
      , o = n == null ? void 0 : n.uncheckedValue;
    function s(u) {
        const c = u.handleChange
          , f = Fe( () => {
            const p = ze(u.value)
              , g = ze(i);
            return Array.isArray(p) ? p.findIndex(y => on(y, g)) >= 0 : on(g, p)
        }
        );
        function h(p, g=!0) {
            var y, _;
            if (f.value === ((y = p == null ? void 0 : p.target) === null || y === void 0 ? void 0 : y.checked)) {
                g && u.validate();
                return
            }
            const R = ze(e)
              , F = r == null ? void 0 : r.getPathState(R)
              , T = ou(p);
            let A = (_ = ze(i)) !== null && _ !== void 0 ? _ : T;
            r && (F != null && F.multiple) && F.type === "checkbox" ? A = Pm(dn(r.values, R) || [], A, void 0) : (n == null ? void 0 : n.type) === "checkbox" && (A = Pm(ze(u.value), A, ze(o))),
            c(A, g)
        }
        return Object.assign(Object.assign({}, u), {
            checked: f,
            checkedValue: i,
            uncheckedValue: o,
            handleChange: h
        })
    }
    return s(Gb(e, t, n))
}
function RL({prop: e, value: t, handleChange: n, shouldValidate: r}) {
    const i = Ft();
    if (!i || !e)
        return;
    const o = typeof e == "string" ? e : "modelValue"
      , s = `update:${o}`;
    o in i.props && (tt(t, u => {
        on(u, Hc(i, o)) || i.emit(s, u)
    }
    ),
    tt( () => Hc(i, o), u => {
        if (u === Rm && t.value === void 0)
            return;
        const c = u === Rm ? void 0 : u;
        on(c, t.value) || n(c, r())
    }
    ))
}
function Hc(e, t) {
    if (e)
        return e.props[t]
}
let CL = 0;
const Ta = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function zb(e) {
    const t = (e == null ? void 0 : e.initialValues) || {}
      , n = Object.assign({}, ze(t))
      , r = Qe(e == null ? void 0 : e.validationSchema);
    return r && jn(r) && fn(r.cast) ? pt(r.cast(n) || {}) : pt(n)
}
function xk(e) {
    var t;
    const n = CL++;
    let r = 0;
    const i = Me(!1)
      , o = Me(!1)
      , s = Me(0)
      , u = []
      , c = yn(zb(e))
      , f = Me([])
      , h = Me({})
      , p = Me({})
      , g = oL( () => {
        p.value = f.value.reduce( (x, k) => (x[qo(ze(k.path))] = k,
        x), {})
    }
    );
    function y(x, k) {
        const ie = le(x);
        if (!ie) {
            typeof x == "string" && (h.value[qo(x)] = Wc(k));
            return
        }
        if (typeof x == "string") {
            const _e = qo(x);
            h.value[_e] && delete h.value[_e]
        }
        ie.errors = Wc(k),
        ie.valid = !ie.errors.length
    }
    function _(x) {
        wn(x).forEach(k => {
            y(k, x[k])
        }
        )
    }
    e != null && e.initialErrors && _(e.initialErrors);
    const R = Fe( () => {
        const x = f.value.reduce( (k, ie) => (ie.errors.length && (k[ie.path] = ie.errors),
        k), {});
        return Object.assign(Object.assign({}, h.value), x)
    }
    )
      , F = Fe( () => wn(R.value).reduce( (x, k) => {
        const ie = R.value[k];
        return ie != null && ie.length && (x[k] = ie[0]),
        x
    }
    , {}))
      , T = Fe( () => f.value.reduce( (x, k) => (x[k.path] = {
        name: k.path || "",
        label: k.label || ""
    },
    x), {}))
      , A = Fe( () => f.value.reduce( (x, k) => {
        var ie;
        return x[k.path] = (ie = k.bails) !== null && ie !== void 0 ? ie : !0,
        x
    }
    , {}))
      , E = Object.assign({}, (e == null ? void 0 : e.initialErrors) || {})
      , I = (t = e == null ? void 0 : e.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1
      , {initialValues: W, originalInitialValues: $, setInitialValues: U} = PL(f, c, e)
      , Z = xL(f, c, $, F)
      , j = Fe( () => f.value.reduce( (x, k) => {
        const ie = dn(c, k.path);
        return cr(x, k.path, ie),
        x
    }
    , {}))
      , ne = e == null ? void 0 : e.validationSchema;
    function be(x, k) {
        var ie, _e;
        const De = Fe( () => dn(W.value, ze(x)))
          , Be = p.value[ze(x)]
          , ue = (k == null ? void 0 : k.type) === "checkbox" || (k == null ? void 0 : k.type) === "radio";
        if (Be && ue) {
            Be.multiple = !0;
            const Yt = r++;
            return Array.isArray(Be.id) ? Be.id.push(Yt) : Be.id = [Be.id, Yt],
            Be.fieldsCount++,
            Be.__flags.pendingUnmount[Yt] = !1,
            Be
        }
        const He = Fe( () => dn(c, ze(x)))
          , Ye = ze(x)
          , Et = Te.findIndex(Yt => Yt === Ye);
        Et !== -1 && Te.splice(Et, 1);
        const de = Fe( () => {
            var Yt, Or, ni, To;
            const Ro = ze(ne);
            if (jn(Ro))
                return (Or = (Yt = Ro.describe) === null || Yt === void 0 ? void 0 : Yt.call(Ro, ze(x)).required) !== null && Or !== void 0 ? Or : !1;
            const Yn = ze(k == null ? void 0 : k.schema);
            return jn(Yn) && (To = (ni = Yn.describe) === null || ni === void 0 ? void 0 : ni.call(Yn).required) !== null && To !== void 0 ? To : !1
        }
        )
          , Lt = r++
          , Gt = yn({
            id: Lt,
            path: x,
            touched: !1,
            pending: !1,
            valid: !0,
            validated: !!(!((ie = E[Ye]) === null || ie === void 0) && ie.length),
            required: de,
            initialValue: De,
            errors: Fi([]),
            bails: (_e = k == null ? void 0 : k.bails) !== null && _e !== void 0 ? _e : !1,
            label: k == null ? void 0 : k.label,
            type: (k == null ? void 0 : k.type) || "default",
            value: He,
            multiple: !1,
            __flags: {
                pendingUnmount: {
                    [Lt]: !1
                },
                pendingReset: !1
            },
            fieldsCount: 1,
            validate: k == null ? void 0 : k.validate,
            dirty: Fe( () => !on(Qe(He), Qe(De)))
        });
        return f.value.push(Gt),
        p.value[Ye] = Gt,
        g(),
        F.value[Ye] && !E[Ye] && zt( () => {
            Ee(Ye, {
                mode: "silent"
            })
        }
        ),
        at(x) && tt(x, Yt => {
            g();
            const Or = pt(He.value);
            p.value[Yt] = Gt,
            zt( () => {
                cr(c, Yt, Or)
            }
            )
        }
        ),
        Gt
    }
    const ae = Im(Re, 5)
      , we = Im(Re, 5)
      , Ve = Uc(async x => await (x === "silent" ? ae() : we()), (x, [k]) => {
        const ie = wn(ge.errorBag.value)
          , De = [...new Set([...wn(x.results), ...f.value.map(Be => Be.path), ...ie])].sort().reduce( (Be, ue) => {
            var He;
            const Ye = ue
              , Et = le(Ye) || je(Ye)
              , de = ((He = x.results[Ye]) === null || He === void 0 ? void 0 : He.errors) || []
              , Lt = ze(Et == null ? void 0 : Et.path) || Ye
              , Gt = IL({
                errors: de,
                valid: !de.length
            }, Be.results[Lt]);
            return Be.results[Lt] = Gt,
            Gt.valid || (Be.errors[Lt] = Gt.errors[0]),
            Et && h.value[Lt] && delete h.value[Lt],
            Et ? (Et.valid = Gt.valid,
            k === "silent" || k === "validated-only" && !Et.validated || y(Et, Gt.errors),
            Be) : (y(Lt, de),
            Be)
        }
        , {
            valid: x.valid,
            results: {},
            errors: {},
            source: x.source
        });
        return x.values && (De.values = x.values,
        De.source = x.source),
        wn(De.results).forEach(Be => {
            var ue;
            const He = le(Be);
            He && k !== "silent" && (k === "validated-only" && !He.validated || y(He, (ue = De.results[Be]) === null || ue === void 0 ? void 0 : ue.errors))
        }
        ),
        De
    }
    );
    function Ne(x) {
        f.value.forEach(x)
    }
    function le(x) {
        const k = typeof x == "string" ? qo(x) : x;
        return typeof k == "string" ? p.value[k] : k
    }
    function je(x) {
        return f.value.filter(ie => x.startsWith(ie.path)).reduce( (ie, _e) => ie ? _e.path.length > ie.path.length ? _e : ie : _e, void 0)
    }
    let Te = [], ut;
    function dt(x) {
        return Te.push(x),
        ut || (ut = zt( () => {
            [...Te].sort().reverse().forEach(ie => {
                xm(c, ie)
            }
            ),
            Te = [],
            ut = null
        }
        )),
        ut
    }
    function it(x) {
        return function(ie, _e) {
            return function(Be) {
                return Be instanceof Event && (Be.preventDefault(),
                Be.stopPropagation()),
                Ne(ue => ue.touched = !0),
                i.value = !0,
                s.value++,
                pe().then(ue => {
                    const He = pt(c);
                    if (ue.valid && typeof ie == "function") {
                        const Ye = pt(j.value);
                        let Et = x ? Ye : He;
                        return ue.values && (Et = ue.source === "schema" ? ue.values : Object.assign({}, Et, ue.values)),
                        ie(Et, {
                            evt: Be,
                            controlledValues: Ye,
                            setErrors: _,
                            setFieldError: y,
                            setTouched: V,
                            setFieldTouched: Ue,
                            setValues: z,
                            setFieldValue: Y,
                            resetForm: oe,
                            resetField: se
                        })
                    }
                    !ue.valid && typeof _e == "function" && _e({
                        values: He,
                        evt: Be,
                        errors: ue.errors,
                        results: ue.results
                    })
                }
                ).then(ue => (i.value = !1,
                ue), ue => {
                    throw i.value = !1,
                    ue
                }
                )
            }
        }
    }
    const Tt = it(!1);
    Tt.withControlled = it(!0);
    function ht(x, k) {
        const ie = f.value.findIndex(De => De.path === x && (Array.isArray(De.id) ? De.id.includes(k) : De.id === k))
          , _e = f.value[ie];
        if (!(ie === -1 || !_e)) {
            if (zt( () => {
                Ee(x, {
                    mode: "silent",
                    warn: !1
                })
            }
            ),
            _e.multiple && _e.fieldsCount && _e.fieldsCount--,
            Array.isArray(_e.id)) {
                const De = _e.id.indexOf(k);
                De >= 0 && _e.id.splice(De, 1),
                delete _e.__flags.pendingUnmount[k]
            }
            (!_e.multiple || _e.fieldsCount <= 0) && (f.value.splice(ie, 1),
            me(x),
            g(),
            delete p.value[x])
        }
    }
    function qt(x) {
        wn(p.value).forEach(k => {
            k.startsWith(x) && delete p.value[k]
        }
        ),
        f.value = f.value.filter(k => !k.path.startsWith(x)),
        zt( () => {
            g()
        }
        )
    }
    const ge = {
        formId: n,
        values: c,
        controlledValues: j,
        errorBag: R,
        errors: F,
        schema: ne,
        submitCount: s,
        meta: Z,
        isSubmitting: i,
        isValidating: o,
        fieldArrays: u,
        keepValuesOnUnmount: I,
        validateSchema: Qe(ne) ? Ve : void 0,
        validate: pe,
        setFieldError: y,
        validateField: Ee,
        setFieldValue: Y,
        setValues: z,
        setErrors: _,
        setFieldTouched: Ue,
        setTouched: V,
        resetForm: oe,
        resetField: se,
        handleSubmit: Tt,
        useFieldModel: G,
        defineInputBinds: ee,
        defineComponentBinds: ke,
        defineField: Oe,
        stageInitialValue: he,
        unsetInitialValue: me,
        setFieldInitialValue: fe,
        createPathState: be,
        getPathState: le,
        unsetPathValue: dt,
        removePathState: ht,
        initialValues: W,
        getAllPathStates: () => f.value,
        destroyPath: qt,
        isFieldTouched: Ie,
        isFieldDirty: S,
        isFieldValid: w
    };
    function Y(x, k, ie=!0) {
        const _e = pt(k)
          , De = typeof x == "string" ? x : x.path;
        le(De) || be(De),
        cr(c, De, _e),
        ie && Ee(De)
    }
    function ve(x, k=!0) {
        wn(c).forEach(ie => {
            delete c[ie]
        }
        ),
        wn(x).forEach(ie => {
            Y(ie, x[ie], !1)
        }
        ),
        k && pe()
    }
    function z(x, k=!0) {
        ws(c, x),
        u.forEach(ie => ie && ie.reset()),
        k && pe()
    }
    function xe(x, k) {
        const ie = le(ze(x)) || be(x);
        return Fe({
            get() {
                return ie.value
            },
            set(_e) {
                var De;
                const Be = ze(x);
                Y(Be, _e, (De = ze(k)) !== null && De !== void 0 ? De : !1)
            }
        })
    }
    function Ue(x, k) {
        const ie = le(x);
        ie && (ie.touched = k)
    }
    function Ie(x) {
        const k = le(x);
        return k ? k.touched : f.value.filter(ie => ie.path.startsWith(x)).some(ie => ie.touched)
    }
    function S(x) {
        const k = le(x);
        return k ? k.dirty : f.value.filter(ie => ie.path.startsWith(x)).some(ie => ie.dirty)
    }
    function w(x) {
        const k = le(x);
        return k ? k.valid : f.value.filter(ie => ie.path.startsWith(x)).every(ie => ie.valid)
    }
    function V(x) {
        if (typeof x == "boolean") {
            Ne(k => {
                k.touched = x
            }
            );
            return
        }
        wn(x).forEach(k => {
            Ue(k, !!x[k])
        }
        )
    }
    function se(x, k) {
        var ie;
        const _e = k && "value"in k ? k.value : dn(W.value, x)
          , De = le(x);
        De && (De.__flags.pendingReset = !0),
        fe(x, pt(_e), !0),
        Y(x, _e, !1),
        Ue(x, (ie = k == null ? void 0 : k.touched) !== null && ie !== void 0 ? ie : !1),
        y(x, (k == null ? void 0 : k.errors) || []),
        zt( () => {
            De && (De.__flags.pendingReset = !1)
        }
        )
    }
    function oe(x, k) {
        let ie = pt(x != null && x.values ? x.values : $.value);
        ie = k != null && k.force ? ie : ws($.value, ie),
        ie = jn(ne) && fn(ne.cast) ? ne.cast(ie) : ie,
        U(ie, {
            force: k == null ? void 0 : k.force
        }),
        Ne(_e => {
            var De;
            _e.__flags.pendingReset = !0,
            _e.validated = !1,
            _e.touched = ((De = x == null ? void 0 : x.touched) === null || De === void 0 ? void 0 : De[_e.path]) || !1,
            Y(_e.path, dn(ie, _e.path), !1),
            y(_e.path, void 0)
        }
        ),
        k != null && k.force ? ve(ie, !1) : z(ie, !1),
        _((x == null ? void 0 : x.errors) || {}),
        s.value = (x == null ? void 0 : x.submitCount) || 0,
        zt( () => {
            pe({
                mode: "silent"
            }),
            Ne(_e => {
                _e.__flags.pendingReset = !1
            }
            )
        }
        )
    }
    async function pe(x) {
        const k = (x == null ? void 0 : x.mode) || "force";
        if (k === "force" && Ne(ue => ue.validated = !0),
        ge.validateSchema)
            return ge.validateSchema(k);
        o.value = !0;
        const ie = await Promise.all(f.value.map(ue => ue.validate ? ue.validate(x).then(He => ({
            key: ue.path,
            valid: He.valid,
            errors: He.errors,
            value: He.value
        })) : Promise.resolve({
            key: ue.path,
            valid: !0,
            errors: [],
            value: void 0
        })));
        o.value = !1;
        const _e = {}
          , De = {}
          , Be = {};
        for (const ue of ie)
            _e[ue.key] = {
                valid: ue.valid,
                errors: ue.errors
            },
            ue.value && cr(Be, ue.key, ue.value),
            ue.errors.length && (De[ue.key] = ue.errors[0]);
        return {
            valid: ie.every(ue => ue.valid),
            results: _e,
            errors: De,
            values: Be,
            source: "fields"
        }
    }
    async function Ee(x, k) {
        var ie;
        const _e = le(x);
        if (_e && (k == null ? void 0 : k.mode) !== "silent" && (_e.validated = !0),
        ne) {
            const {results: De} = await Ve((k == null ? void 0 : k.mode) || "validated-only");
            return De[x] || {
                errors: [],
                valid: !0
            }
        }
        return _e != null && _e.validate ? _e.validate(k) : (!_e && (ie = k == null ? void 0 : k.warn),
        Promise.resolve({
            errors: [],
            valid: !0
        }))
    }
    function me(x) {
        xm(W.value, x)
    }
    function he(x, k, ie=!1) {
        fe(x, k),
        cr(c, x, k),
        ie && !(e != null && e.initialValues) && cr($.value, x, pt(k))
    }
    function fe(x, k, ie=!1) {
        cr(W.value, x, pt(k)),
        ie && cr($.value, x, pt(k))
    }
    async function Re() {
        const x = Qe(ne);
        if (!x)
            return {
                valid: !0,
                results: {},
                errors: {},
                source: "none"
            };
        o.value = !0;
        const k = iu(x) || jn(x) ? await yL(x, c) : await bL(x, c, {
            names: T.value,
            bailsMap: A.value
        });
        return o.value = !1,
        k
    }
    const $e = Tt( (x, {evt: k}) => {
        rL(k) && k.target.submit()
    }
    );
    un( () => {
        if (e != null && e.initialErrors && _(e.initialErrors),
        e != null && e.initialTouched && V(e.initialTouched),
        e != null && e.validateOnMount) {
            pe();
            return
        }
        ge.validateSchema && ge.validateSchema("silent")
    }
    ),
    at(ne) && tt(ne, () => {
        var x;
        (x = ge.validateSchema) === null || x === void 0 || x.call(ge, "validated-only")
    }
    ),
    mi(rr, ge);
    function Oe(x, k) {
        const ie = fn(k) || k == null ? void 0 : k.label
          , _e = le(ze(x)) || be(x, {
            label: ie
        })
          , De = () => fn(k) ? k(Aa(_e, Ta)) : k || {};
        function Be() {
            var de;
            _e.touched = !0,
            ((de = De().validateOnBlur) !== null && de !== void 0 ? de : Go().validateOnBlur) && Ee(_e.path)
        }
        function ue() {
            var de;
            ((de = De().validateOnInput) !== null && de !== void 0 ? de : Go().validateOnInput) && zt( () => {
                Ee(_e.path)
            }
            )
        }
        function He() {
            var de;
            ((de = De().validateOnChange) !== null && de !== void 0 ? de : Go().validateOnChange) && zt( () => {
                Ee(_e.path)
            }
            )
        }
        const Ye = Fe( () => {
            const de = {
                onChange: He,
                onInput: ue,
                onBlur: Be
            };
            return fn(k) ? Object.assign(Object.assign({}, de), k(Aa(_e, Ta)).props || {}) : k != null && k.props ? Object.assign(Object.assign({}, de), k.props(Aa(_e, Ta))) : de
        }
        );
        return [xe(x, () => {
            var de, Lt, Gt;
            return (Gt = (de = De().validateOnModelUpdate) !== null && de !== void 0 ? de : (Lt = Go()) === null || Lt === void 0 ? void 0 : Lt.validateOnModelUpdate) !== null && Gt !== void 0 ? Gt : !0
        }
        ), Ye]
    }
    function G(x) {
        return Array.isArray(x) ? x.map(k => xe(k, !0)) : xe(x)
    }
    function ee(x, k) {
        const [ie,_e] = Oe(x, k);
        function De() {
            _e.value.onBlur()
        }
        function Be(He) {
            const Ye = ou(He);
            Y(ze(x), Ye, !1),
            _e.value.onInput()
        }
        function ue(He) {
            const Ye = ou(He);
            Y(ze(x), Ye, !1),
            _e.value.onChange()
        }
        return Fe( () => Object.assign(Object.assign({}, _e.value), {
            onBlur: De,
            onInput: Be,
            onChange: ue,
            value: ie.value
        }))
    }
    function ke(x, k) {
        const [ie,_e] = Oe(x, k)
          , De = le(ze(x));
        function Be(ue) {
            ie.value = ue
        }
        return Fe( () => {
            const ue = fn(k) ? k(Aa(De, Ta)) : k || {};
            return Object.assign({
                [ue.model || "modelValue"]: ie.value,
                [`onUpdate:${ue.model || "modelValue"}`]: Be
            }, _e.value)
        }
        )
    }
    return Object.assign(Object.assign({}, ge), {
        values: Eo(c),
        handleReset: () => oe(),
        submitForm: $e
    })
}
function xL(e, t, n, r) {
    const i = {
        touched: "some",
        pending: "some",
        valid: "every"
    }
      , o = Fe( () => !on(t, Qe(n)));
    function s() {
        const c = e.value;
        return wn(i).reduce( (f, h) => {
            const p = i[h];
            return f[h] = c[p](g => g[h]),
            f
        }
        , {})
    }
    const u = yn(s());
    return Bf( () => {
        const c = s();
        u.touched = c.touched,
        u.valid = c.valid,
        u.pending = c.pending
    }
    ),
    Fe( () => Object.assign(Object.assign({
        initialValues: Qe(n)
    }, u), {
        valid: u.valid && !wn(r.value).length,
        dirty: o.value
    }))
}
function PL(e, t, n) {
    const r = zb(n)
      , i = Me(r)
      , o = Me(pt(r));
    function s(u, c) {
        c != null && c.force ? (i.value = pt(u),
        o.value = pt(u)) : (i.value = ws(pt(i.value) || {}, pt(u)),
        o.value = ws(pt(o.value) || {}, pt(u))),
        c != null && c.updateFields && e.value.forEach(f => {
            if (f.touched)
                return;
            const p = dn(i.value, f.path);
            cr(t, f.path, pt(p))
        }
        )
    }
    return {
        initialValues: i,
        originalInitialValues: o,
        setInitialValues: s
    }
}
function IL(e, t) {
    return t ? {
        valid: e.valid && t.valid,
        errors: [...e.errors, ...t.errors]
    } : e
}
function Pk(e) {
    const t = Er(rr)
      , n = e ? void 0 : Nt(Vs);
    return function() {
        return n ? n.validate() : t && e ? t == null ? void 0 : t.validateField(ze(e)) : Promise.resolve({
            errors: [],
            valid: !0
        })
    }
}
function Ik() {
    const e = Er(rr);
    return function() {
        return e ? e.validate() : Promise.resolve({
            results: {},
            errors: {},
            valid: !0,
            source: "none"
        })
    }
}
function Fk() {
    const e = Er(rr);
    return Fe( () => (e == null ? void 0 : e.values) || {})
}
function Lk() {
    const e = Er(rr);
    return Fe( () => (e == null ? void 0 : e.errors.value) || {})
}
function Nk(e) {
    const t = Er(rr)
      , n = e ? void 0 : Nt(Vs);
    return Fe( () => e ? t == null ? void 0 : t.errors.value[ze(e)] : n == null ? void 0 : n.errorMessage.value)
}
function Mk(e) {
    const t = Er(rr)
      , n = e ? void 0 : Nt(Vs);
    return function(i) {
        if (e && t) {
            t.setFieldError(ze(e), i);
            return
        }
        if (n) {
            n.setErrors(i || []);
            return
        }
    }
}
function kk(e) {
    const t = Er(rr)
      , n = e ? void 0 : Nt(Vs);
    return function(i, o=!0) {
        if (e && t) {
            t.setFieldValue(ze(e), i, o);
            return
        }
        if (n) {
            n.setValue(i, o);
            return
        }
    }
}
/**
  * vee-validate v4.13.2
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function FL(e, t) {
    return Array.isArray(e) ? e[0] : e[t]
}
function LL(e) {
    return !!(e == null || e === "" || Array.isArray(e) && e.length === 0)
}
const NL = (e, t) => {
    if (LL(e))
        return !0;
    let n = FL(t, "regex");
    return typeof n == "string" && (n = new RegExp(n)),
    Array.isArray(e) ? e.every(r => NL(r, {
        regex: n
    })) : n.test(String(e))
}
;
function ML(e) {
    return e == null
}
function kL(e) {
    return Array.isArray(e) && e.length === 0
}
const $k = e => ML(e) || kL(e) || e === !1 ? !1 : !!String(e).trim().length;
/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Yb = Array.isArray
  , Es = e => typeof e == "string"
  , Jb = e => e !== null && typeof e == "object"
  , $L = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , DL = /\B([A-Z])/g
  , jL = $L(e => e.replace(DL, "-$1").toLowerCase());
function BL(e) {
    if (Yb(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = Es(r) ? HL(r) : BL(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (Es(e) || Jb(e))
        return e
}
const VL = /;(?![^(]*\))/g
  , UL = /:([^]+)/
  , WL = /\/\*[^]*?\*\//g;
function HL(e) {
    const t = {};
    return e.replace(WL, "").split(VL).forEach(n => {
        if (n) {
            const r = n.split(UL);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function Dk(e) {
    let t = "";
    if (!e || Es(e))
        return t;
    for (const n in e) {
        const r = e[n];
        if (Es(r) || typeof r == "number") {
            const i = n.startsWith("--") ? n : jL(n);
            t += `${i}:${r};`
        }
    }
    return t
}
function KL(e) {
    let t = "";
    if (Es(e))
        t = e;
    else if (Yb(e))
        for (let n = 0; n < e.length; n++) {
            const r = KL(e[n]);
            r && (t += r + " ")
        }
    else if (Jb(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
function Ui(e, t, n) {
    var s;
    let r = (s = n.initialDeps) != null ? s : [], i;
    function o() {
        var u, c, f, h;
        let p;
        n.key && ((u = n.debug) != null && u.call(n)) && (p = Date.now());
        const g = e();
        if (!(g.length !== r.length || g.some( (R, F) => r[F] !== R)))
            return i;
        r = g;
        let _;
        if (n.key && ((c = n.debug) != null && c.call(n)) && (_ = Date.now()),
        i = t(...g),
        n.key && ((f = n.debug) != null && f.call(n))) {
            const R = Math.round((Date.now() - p) * 100) / 100
              , F = Math.round((Date.now() - _) * 100) / 100
              , T = F / 16
              , A = (E, I) => {
                for (E = String(E); E.length < I; )
                    E = " " + E;
                return E
            }
            ;
            console.info(`%c⏱ ${A(F, 5)} /${A(R, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * T, 120))}deg 100% 31%);`, n == null ? void 0 : n.key)
        }
        return (h = n == null ? void 0 : n.onChange) == null || h.call(n, i),
        i
    }
    return o.updateDeps = u => {
        r = u
    }
    ,
    o
}
function Nm(e, t) {
    if (e === void 0)
        throw new Error("Unexpected undefined");
    return e
}
const qL = (e, t) => Math.abs(e - t) < 1.01
  , GL = (e, t, n) => {
    let r;
    return function(...i) {
        e.clearTimeout(r),
        r = e.setTimeout( () => t.apply(this, i), n)
    }
}
  , Mm = e => {
    const {offsetWidth: t, offsetHeight: n} = e;
    return {
        width: t,
        height: n
    }
}
  , zL = e => e
  , YL = e => {
    const t = Math.max(e.startIndex - e.overscan, 0)
      , n = Math.min(e.endIndex + e.overscan, e.count - 1)
      , r = [];
    for (let i = t; i <= n; i++)
        r.push(i);
    return r
}
  , JL = (e, t) => {
    const n = e.scrollElement;
    if (!n)
        return;
    const r = e.targetWindow;
    if (!r)
        return;
    const i = s => {
        const {width: u, height: c} = s;
        t({
            width: Math.round(u),
            height: Math.round(c)
        })
    }
    ;
    if (i(Mm(n)),
    !r.ResizeObserver)
        return () => {}
        ;
    const o = new r.ResizeObserver(s => {
        const u = () => {
            const c = s[0];
            if (c != null && c.borderBoxSize) {
                const f = c.borderBoxSize[0];
                if (f) {
                    i({
                        width: f.inlineSize,
                        height: f.blockSize
                    });
                    return
                }
            }
            i(Mm(n))
        }
        ;
        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(u) : u()
    }
    );
    return o.observe(n, {
        box: "border-box"
    }),
    () => {
        o.unobserve(n)
    }
}
  , km = {
    passive: !0
}
  , $m = typeof window == "undefined" ? !0 : "onscrollend"in window
  , XL = (e, t) => {
    const n = e.scrollElement;
    if (!n)
        return;
    const r = e.targetWindow;
    if (!r)
        return;
    let i = 0;
    const o = e.options.useScrollendEvent && $m ? () => {}
    : GL(r, () => {
        t(i, !1)
    }
    , e.options.isScrollingResetDelay)
      , s = h => () => {
        const {horizontal: p, isRtl: g} = e.options;
        i = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop,
        o(),
        t(i, h)
    }
      , u = s(!0)
      , c = s(!1);
    c(),
    n.addEventListener("scroll", u, km);
    const f = e.options.useScrollendEvent && $m;
    return f && n.addEventListener("scrollend", c, km),
    () => {
        n.removeEventListener("scroll", u),
        f && n.removeEventListener("scrollend", c)
    }
}
  , QL = (e, t, n) => {
    if (t != null && t.borderBoxSize) {
        const r = t.borderBoxSize[0];
        if (r)
            return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"])
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"]
}
  , ZL = (e, {adjustments: t=0, behavior: n}, r) => {
    var i, o;
    const s = e + t;
    (o = (i = r.scrollElement) == null ? void 0 : i.scrollTo) == null || o.call(i, {
        [r.options.horizontal ? "left" : "top"]: s,
        behavior: n
    })
}
;
class eN {
    constructor(t) {
        this.unsubs = [],
        this.scrollElement = null,
        this.targetWindow = null,
        this.isScrolling = !1,
        this.measurementsCache = [],
        this.itemSizeCache = new Map,
        this.pendingMeasuredCacheIndexes = [],
        this.scrollRect = null,
        this.scrollOffset = null,
        this.scrollDirection = null,
        this.scrollAdjustments = 0,
        this.elementsCache = new Map,
        this.observer = ( () => {
            let n = null;
            const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver(i => {
                i.forEach(o => {
                    const s = () => {
                        this._measureElement(o.target, o)
                    }
                    ;
                    this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s()
                }
                )
            }
            ));
            return {
                disconnect: () => {
                    var i;
                    (i = r()) == null || i.disconnect(),
                    n = null
                }
                ,
                observe: i => {
                    var o;
                    return (o = r()) == null ? void 0 : o.observe(i, {
                        box: "border-box"
                    })
                }
                ,
                unobserve: i => {
                    var o;
                    return (o = r()) == null ? void 0 : o.unobserve(i)
                }
            }
        }
        )(),
        this.range = null,
        this.setOptions = n => {
            Object.entries(n).forEach( ([r,i]) => {
                typeof i == "undefined" && delete n[r]
            }
            ),
            this.options = {
                debug: !1,
                initialOffset: 0,
                overscan: 1,
                paddingStart: 0,
                paddingEnd: 0,
                scrollPaddingStart: 0,
                scrollPaddingEnd: 0,
                horizontal: !1,
                getItemKey: zL,
                rangeExtractor: YL,
                onChange: () => {}
                ,
                measureElement: QL,
                initialRect: {
                    width: 0,
                    height: 0
                },
                scrollMargin: 0,
                gap: 0,
                indexAttribute: "data-index",
                initialMeasurementsCache: [],
                lanes: 1,
                isScrollingResetDelay: 150,
                enabled: !0,
                isRtl: !1,
                useScrollendEvent: !1,
                useAnimationFrameWithResizeObserver: !1,
                ...n
            }
        }
        ,
        this.notify = n => {
            var r, i;
            (i = (r = this.options).onChange) == null || i.call(r, this, n)
        }
        ,
        this.maybeNotify = Ui( () => (this.calculateRange(),
        [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), n => {
            this.notify(n)
        }
        , {
            key: !1,
            debug: () => this.options.debug,
            initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
        }),
        this.cleanup = () => {
            this.unsubs.filter(Boolean).forEach(n => n()),
            this.unsubs = [],
            this.observer.disconnect(),
            this.scrollElement = null,
            this.targetWindow = null
        }
        ,
        this._didMount = () => () => {
            this.cleanup()
        }
        ,
        this._willUpdate = () => {
            var i;
            var n;
            const r = this.options.enabled ? this.options.getScrollElement() : null;
            if (this.scrollElement !== r) {
                if (this.cleanup(),
                !r) {
                    this.maybeNotify();
                    return
                }
                this.scrollElement = r,
                this.scrollElement && "ownerDocument"in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (i = (n = this.scrollElement) == null ? void 0 : n.window) != null ? i : null,
                this.elementsCache.forEach(o => {
                    this.observer.observe(o)
                }
                ),
                this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0
                }),
                this.unsubs.push(this.options.observeElementRect(this, o => {
                    this.scrollRect = o,
                    this.maybeNotify()
                }
                )),
                this.unsubs.push(this.options.observeElementOffset(this, (o, s) => {
                    this.scrollAdjustments = 0,
                    this.scrollDirection = s ? this.getScrollOffset() < o ? "forward" : "backward" : null,
                    this.scrollOffset = o,
                    this.isScrolling = s,
                    this.maybeNotify()
                }
                ))
            }
        }
        ,
        this.getSize = () => {
            var n;
            return this.options.enabled ? (this.scrollRect = (n = this.scrollRect) != null ? n : this.options.initialRect,
            this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null,
            0)
        }
        ,
        this.getScrollOffset = () => {
            var n;
            return this.options.enabled ? (this.scrollOffset = (n = this.scrollOffset) != null ? n : typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset,
            this.scrollOffset) : (this.scrollOffset = null,
            0)
        }
        ,
        this.getFurthestMeasurement = (n, r) => {
            const i = new Map
              , o = new Map;
            for (let s = r - 1; s >= 0; s--) {
                const u = n[s];
                if (i.has(u.lane))
                    continue;
                const c = o.get(u.lane);
                if (c == null || u.end > c.end ? o.set(u.lane, u) : u.end < c.end && i.set(u.lane, !0),
                i.size === this.options.lanes)
                    break
            }
            return o.size === this.options.lanes ? Array.from(o.values()).sort( (s, u) => s.end === u.end ? s.index - u.index : s.end - u.end)[0] : void 0
        }
        ,
        this.getMeasurementOptions = Ui( () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled], (n, r, i, o, s) => (this.pendingMeasuredCacheIndexes = [],
        {
            count: n,
            paddingStart: r,
            scrollMargin: i,
            getItemKey: o,
            enabled: s
        }), {
            key: !1
        }),
        this.getMeasurements = Ui( () => [this.getMeasurementOptions(), this.itemSizeCache], ({count: n, paddingStart: r, scrollMargin: i, getItemKey: o, enabled: s}, u) => {
            if (!s)
                return this.measurementsCache = [],
                this.itemSizeCache.clear(),
                [];
            this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache,
            this.measurementsCache.forEach(h => {
                this.itemSizeCache.set(h.key, h.size)
            }
            ));
            const c = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
            this.pendingMeasuredCacheIndexes = [];
            const f = this.measurementsCache.slice(0, c);
            for (let h = c; h < n; h++) {
                const p = o(h)
                  , g = this.options.lanes === 1 ? f[h - 1] : this.getFurthestMeasurement(f, h)
                  , y = g ? g.end + this.options.gap : r + i
                  , _ = u.get(p)
                  , R = typeof _ == "number" ? _ : this.options.estimateSize(h)
                  , F = y + R
                  , T = g ? g.lane : h % this.options.lanes;
                f[h] = {
                    index: h,
                    start: y,
                    size: R,
                    end: F,
                    key: p,
                    lane: T
                }
            }
            return this.measurementsCache = f,
            f
        }
        , {
            key: !1,
            debug: () => this.options.debug
        }),
        this.calculateRange = Ui( () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (n, r, i, o) => this.range = n.length > 0 && r > 0 ? tN({
            measurements: n,
            outerSize: r,
            scrollOffset: i,
            lanes: o
        }) : null, {
            key: !1,
            debug: () => this.options.debug
        }),
        this.getVirtualIndexes = Ui( () => {
            let n = null
              , r = null;
            const i = this.calculateRange();
            return i && (n = i.startIndex,
            r = i.endIndex),
            this.maybeNotify.updateDeps([this.isScrolling, n, r]),
            [this.options.rangeExtractor, this.options.overscan, this.options.count, n, r]
        }
        , (n, r, i, o, s) => o === null || s === null ? [] : n({
            startIndex: o,
            endIndex: s,
            overscan: r,
            count: i
        }), {
            key: !1,
            debug: () => this.options.debug
        }),
        this.indexFromElement = n => {
            const r = this.options.indexAttribute
              , i = n.getAttribute(r);
            return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${r}={index}' on measured element.`),
            -1)
        }
        ,
        this._measureElement = (n, r) => {
            const i = this.indexFromElement(n)
              , o = this.measurementsCache[i];
            if (!o)
                return;
            const s = o.key
              , u = this.elementsCache.get(s);
            u !== n && (u && this.observer.unobserve(u),
            this.observer.observe(n),
            this.elementsCache.set(s, n)),
            n.isConnected && this.resizeItem(i, this.options.measureElement(n, r, this))
        }
        ,
        this.resizeItem = (n, r) => {
            var u;
            const i = this.measurementsCache[n];
            if (!i)
                return;
            const o = (u = this.itemSizeCache.get(i.key)) != null ? u : i.size
              , s = r - o;
            s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(i, s, this) : i.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
                adjustments: this.scrollAdjustments += s,
                behavior: void 0
            }),
            this.pendingMeasuredCacheIndexes.push(i.index),
            this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, r)),
            this.notify(!1))
        }
        ,
        this.measureElement = n => {
            if (!n) {
                this.elementsCache.forEach( (r, i) => {
                    r.isConnected || (this.observer.unobserve(r),
                    this.elementsCache.delete(i))
                }
                );
                return
            }
            this._measureElement(n, void 0)
        }
        ,
        this.getVirtualItems = Ui( () => [this.getVirtualIndexes(), this.getMeasurements()], (n, r) => {
            const i = [];
            for (let o = 0, s = n.length; o < s; o++) {
                const u = n[o]
                  , c = r[u];
                i.push(c)
            }
            return i
        }
        , {
            key: !1,
            debug: () => this.options.debug
        }),
        this.getVirtualItemForOffset = n => {
            const r = this.getMeasurements();
            if (r.length !== 0)
                return Nm(r[Xb(0, r.length - 1, i => Nm(r[i]).start, n)])
        }
        ,
        this.getOffsetForAlignment = (n, r, i=0) => {
            const o = this.getSize()
              , s = this.getScrollOffset();
            r === "auto" && (r = n >= s + o ? "end" : "start"),
            r === "center" ? n += (i - o) / 2 : r === "end" && (n -= o);
            const u = this.getTotalSize() + this.options.scrollMargin - o;
            return Math.max(Math.min(u, n), 0)
        }
        ,
        this.getOffsetForIndex = (n, r="auto") => {
            n = Math.max(0, Math.min(n, this.options.count - 1));
            const i = this.measurementsCache[n];
            if (!i)
                return;
            const o = this.getSize()
              , s = this.getScrollOffset();
            if (r === "auto")
                if (i.end >= s + o - this.options.scrollPaddingEnd)
                    r = "end";
                else if (i.start <= s + this.options.scrollPaddingStart)
                    r = "start";
                else
                    return [s, r];
            const u = r === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
            return [this.getOffsetForAlignment(u, r, i.size), r]
        }
        ,
        this.isDynamicMode = () => this.elementsCache.size > 0,
        this.scrollToOffset = (n, {align: r="start", behavior: i}={}) => {
            i === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),
            this._scrollToOffset(this.getOffsetForAlignment(n, r), {
                adjustments: void 0,
                behavior: i
            })
        }
        ,
        this.scrollToIndex = (n, {align: r="auto", behavior: i}={}) => {
            i === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),
            n = Math.max(0, Math.min(n, this.options.count - 1));
            let o = 0;
            const s = 10
              , u = f => {
                if (!this.targetWindow)
                    return;
                const h = this.getOffsetForIndex(n, f);
                if (!h) {
                    console.warn("Failed to get offset for index:", n);
                    return
                }
                const [p,g] = h;
                this._scrollToOffset(p, {
                    adjustments: void 0,
                    behavior: i
                }),
                this.targetWindow.requestAnimationFrame( () => {
                    const y = this.getScrollOffset()
                      , _ = this.getOffsetForIndex(n, g);
                    if (!_) {
                        console.warn("Failed to get offset for index:", n);
                        return
                    }
                    qL(_[0], y) || c(g)
                }
                )
            }
              , c = f => {
                this.targetWindow && (o++,
                o < s ? this.targetWindow.requestAnimationFrame( () => u(f)) : console.warn(`Failed to scroll to index ${n} after ${s} attempts.`))
            }
            ;
            u(r)
        }
        ,
        this.scrollBy = (n, {behavior: r}={}) => {
            r === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),
            this._scrollToOffset(this.getScrollOffset() + n, {
                adjustments: void 0,
                behavior: r
            })
        }
        ,
        this.getTotalSize = () => {
            var o;
            var n;
            const r = this.getMeasurements();
            let i;
            if (r.length === 0)
                i = this.options.paddingStart;
            else if (this.options.lanes === 1)
                i = (o = (n = r[r.length - 1]) == null ? void 0 : n.end) != null ? o : 0;
            else {
                const s = Array(this.options.lanes).fill(null);
                let u = r.length - 1;
                for (; u >= 0 && s.some(c => c === null); ) {
                    const c = r[u];
                    s[c.lane] === null && (s[c.lane] = c.end),
                    u--
                }
                i = Math.max(...s.filter(c => c !== null))
            }
            return Math.max(i - this.options.scrollMargin + this.options.paddingEnd, 0)
        }
        ,
        this._scrollToOffset = (n, {adjustments: r, behavior: i}) => {
            this.options.scrollToFn(n, {
                behavior: i,
                adjustments: r
            }, this)
        }
        ,
        this.measure = () => {
            this.itemSizeCache = new Map,
            this.notify(!1)
        }
        ,
        this.setOptions(t)
    }
}
const Xb = (e, t, n, r) => {
    for (; e <= t; ) {
        const i = (e + t) / 2 | 0
          , o = n(i);
        if (o < r)
            e = i + 1;
        else if (o > r)
            t = i - 1;
        else
            return i
    }
    return e > 0 ? e - 1 : 0
}
;
function tN({measurements: e, outerSize: t, scrollOffset: n, lanes: r}) {
    const i = e.length - 1
      , o = c => e[c].start;
    if (e.length <= r)
        return {
            startIndex: 0,
            endIndex: i
        };
    let s = Xb(0, i, o, n)
      , u = s;
    if (r === 1)
        for (; u < i && e[u].end < n + t; )
            u++;
    else if (r > 1) {
        const c = Array(r).fill(0);
        for (; u < i && c.some(h => h < n + t); ) {
            const h = e[u];
            c[h.lane] = h.end,
            u++
        }
        const f = Array(r).fill(n + t);
        for (; s >= 0 && f.some(h => h >= n); ) {
            const h = e[s];
            f[h.lane] = h.start,
            s--
        }
        s = Math.max(0, s - s % r),
        u = Math.min(i, u + (r - 1 - u % r))
    }
    return {
        startIndex: s,
        endIndex: u
    }
}
function nN(e) {
    const t = new eN(Qe(e))
      , n = Fi(t)
      , r = t._didMount();
    return tt( () => Qe(e).getScrollElement(), i => {
        i && t._willUpdate()
    }
    , {
        immediate: !0
    }),
    tt( () => Qe(e), i => {
        t.setOptions({
            ...i,
            onChange: (o, s) => {
                var u;
                rc(n),
                (u = i.onChange) == null || u.call(i, o, s)
            }
        }),
        t._willUpdate(),
        rc(n)
    }
    , {
        immediate: !0
    }),
    wu(r),
    n
}
function jk(e) {
    return nN(Fe( () => ({
        observeElementRect: JL,
        observeElementOffset: XL,
        scrollToFn: ZL,
        ...Qe(e)
    })))
}
function rN(e) {
    return {
        all: e = e || new Map,
        on: function(t, n) {
            var r = e.get(t);
            r ? r.push(n) : e.set(t, [n])
        },
        off: function(t, n) {
            var r = e.get(t);
            r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
        },
        emit: function(t, n) {
            var r = e.get(t);
            r && r.slice().map(function(i) {
                i(n)
            }),
            (r = e.get("*")) && r.slice().map(function(i) {
                i(t, n)
            })
        }
    }
}
function Qb(e) {
    return e === "state" ? window.LiveChatWidget.get("state") : e === "chat" ? window.LiveChatWidget.get("chat_data") : e === "customer" ? window.LiveChatWidget.get("customer_data") : null
}
function Dm(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function iN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Dm(Object(n), !0).forEach(function(r) {
            oN(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dm(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function oN(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function sN(e, t) {
    return aN(e) || uN(e, t) || lN(e, t) || cN()
}
function aN(e) {
    if (Array.isArray(e))
        return e
}
function uN(e, t) {
    var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
        var r = [], i = !0, o = !1, s, u;
        try {
            for (n = n.call(e); !(i = (s = n.next()).done) && (r.push(s.value),
            !(t && r.length === t)); i = !0)
                ;
        } catch (c) {
            o = !0,
            u = c
        } finally {
            try {
                !i && n.return != null && n.return()
            } finally {
                if (o)
                    throw u
            }
        }
        return r
    }
}
function lN(e, t) {
    if (e) {
        if (typeof e == "string")
            return jm(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return jm(e, t)
    }
}
function jm(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function cN() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var Hl = {
    current: null
};
function fN() {
    var e, t = Array.prototype.slice;
    function n(i) {
        return r._h ? r._h.apply(null, i) : r._q.push(i)
    }
    var r = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function() {
            n(["on", t.call(arguments)])
        },
        once: function() {
            n(["once", t.call(arguments)])
        },
        off: function() {
            n(["off", t.call(arguments)])
        },
        get: function() {
            if (!r._h)
                throw new Error("[LiveChatWidget] You can't use getters before load.");
            return n(["get", t.call(arguments)])
        },
        call: function() {
            n(["call", t.call(arguments)])
        },
        init: function() {
            var o = document.createElement("script");
            o.async = !0,
            o.type = "text/javascript",
            o.src = "https://cdn.livechatinc.com/tracking.js",
            document.head.appendChild(o),
            Hl.current = o
        }
    };
    return (e = Hl.current) === null || e === void 0 || e.remove(),
    window.LiveChatWidget = window.LiveChatWidget || r,
    Hl
}
function dN(e) {
    var t = e.license
      , n = e.group
      , r = e.chatBetweenGroups
      , i = e.sessionVariables
      , o = e.customIdentityProvider;
    if (window.__lc = window.__lc || {},
    typeof t == "string")
        window.__lc.license = Number(t);
    else
        throw new Error("[LiveChatWidget] The license property is required for initialization");
    typeof n != "undefined" && (window.__lc.group = Number(n)),
    typeof r != "undefined" && (window.__lc.chat_between_groups = !!r),
    i instanceof Object && (window.__lc.params = Object.entries(i).map(function(s) {
        var u = sN(s, 2)
          , c = u[0]
          , f = u[1];
        return {
            name: c,
            value: f
        }
    })),
    typeof o == "function" && (window.__lc.custom_identity_provider = o)
}
function Rn(e, t) {
    e === "off" && typeof window.LiveChatWidget == "undefined" || (typeof t.onReady == "function" && window.LiveChatWidget[e]("ready", t.onReady),
    typeof t.onAvailabilityChanged == "function" && window.LiveChatWidget[e]("availability_changed", t.onAvailabilityChanged),
    typeof t.onVisibilityChanged == "function" && window.LiveChatWidget[e]("visibility_changed", t.onVisibilityChanged),
    typeof t.onCustomerStatusChanged == "function" && window.LiveChatWidget[e]("customer_status_changed", t.onCustomerStatusChanged),
    typeof t.onNewEvent == "function" && window.LiveChatWidget[e]("new_event", t.onNewEvent),
    typeof t.onFormSubmitted == "function" && window.LiveChatWidget[e]("form_submitted", t.onFormSubmitted),
    typeof t.onRatingSubmitted == "function" && window.LiveChatWidget[e]("rating_submitted", t.onRatingSubmitted),
    typeof t.onGreetingDisplayed == "function" && window.LiveChatWidget[e]("greeting_displayed", t.onGreetingDisplayed),
    typeof t.onGreetingHidden == "function" && window.LiveChatWidget[e]("greeting_hidden", t.onGreetingHidden),
    typeof t.onRichMessageButtonClicked == "function" && window.LiveChatWidget[e]("rich_message_button_clicked", t.onRichMessageButtonClicked))
}
function Bm(e) {
    typeof e.name == "string" && window.LiveChatWidget.call("set_customer_name", e.name),
    typeof e.email == "string" && window.LiveChatWidget.call("set_customer_email", e.email)
}
function Vm(e) {
    e === "hidden" && window.LiveChatWidget.call("hide"),
    e === "maximized" && window.LiveChatWidget.call("maximize"),
    e === "minimized" && window.LiveChatWidget.call("minimize")
}
var Os = rN()
  , Um = Os.emit.bind(null);
function Wu(e) {
    return Os.on("init", e),
    "LiveChatWidget"in window && e(),
    function() {
        Os.off("init", e)
    }
}
function Hu(e) {
    return Os.on("destroy", e),
    function() {
        Os.off("destroy", e)
    }
}
function hN(e) {
    var t = {
        isLoading: !1,
        desiredState: "unknown",
        currentEventHandlers: {
            onReady: e.onReady,
            onNewEvent: e.onNewEvent,
            onFormSubmitted: e.onFormSubmitted,
            onGreetingHidden: e.onGreetingHidden,
            onRatingSubmitted: e.onRatingSubmitted,
            onGreetingDisplayed: e.onGreetingDisplayed,
            onVisibilityChanged: e.onVisibilityChanged,
            onAvailabilityChanged: e.onAvailabilityChanged,
            onCustomerStatusChanged: e.onCustomerStatusChanged,
            onRichMessageButtonClicked: e.onRichMessageButtonClicked
        }
    }
      , n = fN();
    return dN(e),
    Vm(e.visibility),
    Rn("on", t.currentEventHandlers),
    Bm({
        name: e.customerName,
        email: e.customerEmail
    }),
    window.__lc.integration_name = "@livechat/widget-core",
    {
        init: function() {
            var i = this;
            t.desiredState = "loaded",
            !t.isLoading && (window.LC_API = window.LC_API || {},
            window.LC_API.on_after_load = function() {
                t.isLoading = !1,
                t.desiredState === "destroyed" && i.destroy(),
                t.desiredState = "unknown"
            }
            ,
            Um("init"),
            t.isLoading = !0,
            window.LiveChatWidget.init())
        },
        destroy: function() {
            var i;
            t.desiredState = "destroyed",
            !t.isLoading && (Um("destroy"),
            (i = n.current) === null || i === void 0 || i.remove(),
            window.LiveChatWidget.call("destroy"))
        },
        updateVisibility: function(i) {
            Vm(i)
        },
        updateEventHandlers: function(i) {
            Rn("off", t.currentEventHandlers),
            Rn("on", i),
            t.currentEventHandlers = iN({}, i)
        },
        updateSessionVariables: function(i) {
            i && window.LiveChatWidget.call("update_session_variables", i)
        },
        hideGreeting: function() {
            window.LiveChatWidget.call("hide_greeting")
        },
        updateCustomerData: function(i) {
            Bm(i)
        }
    }
}
function pN() {
    var e = Me(!1)
      , t = null
      , n = null
      , r = function() {
        e.value = !0
    };
    return un(function() {
        t = Wu(function() {
            Rn("once", {
                onReady: r
            })
        }),
        n = Hu(function() {
            e.value = !1
        })
    }),
    nr(function() {
        var i, o;
        Rn("off", {
            onReady: r
        }),
        (i = t) === null || i === void 0 || i(),
        (o = n) === null || o === void 0 || o()
    }),
    e
}
function Wm(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function Ra(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Wm(Object(n), !0).forEach(function(r) {
            mN(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wm(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function mN(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function gN() {
    var e = Me(null)
      , t = null
      , n = null
      , r = function(u) {
        var c = u.state;
        e.value = c
    }
      , i = function(u) {
        var c = u.visibility;
        e.value = e.value ? Ra(Ra({}, e.value), {}, {
            visibility: c
        }) : e.value
    }
      , o = function(u) {
        var c = u.availability;
        e.value = e.value ? Ra(Ra({}, e.value), {}, {
            availability: c
        }) : e.value
    };
    return un(function() {
        t = Wu(function() {
            Rn("once", {
                onReady: r
            }),
            Rn("on", {
                onVisibilityChanged: i,
                onAvailabilityChanged: o
            })
        }),
        n = Hu(function() {
            e.value = null
        })
    }),
    nr(function() {
        var s, u;
        Rn("off", {
            onReady: r,
            onVisibilityChanged: i,
            onAvailabilityChanged: o
        }),
        (s = t) === null || s === void 0 || s(),
        (u = n) === null || u === void 0 || u()
    }),
    e
}
function Zb() {
    var e = Me(null)
      , t = null
      , n = null
      , r = function(s) {
        e.value = s.customerData
    }
      , i = function() {
        e.value = Qb("customer")
    };
    return un(function() {
        t = Wu(function() {
            Rn("once", {
                onReady: r
            }),
            Rn("on", {
                onCustomerStatusChanged: i
            })
        }),
        n = Hu(function() {
            e.value = null
        })
    }),
    nr(function() {
        var o, s;
        Rn("off", {
            onReady: r,
            onCustomerStatusChanged: i
        }),
        (o = t) === null || o === void 0 || o(),
        (s = n) === null || s === void 0 || s()
    }),
    e
}
function vN() {
    var e = Me(null)
      , t = Zb();
    return tt(function() {
        var n;
        return (n = t.value) === null || n === void 0 ? void 0 : n.status
    }, function(n) {
        n === "chatting" ? e.value = Qb("chat") : e.value = null
    }),
    e
}
function yN() {
    var e = Me(null)
      , t = null
      , n = null
      , r = function(s) {
        e.value = s
    }
      , i = function() {
        e.value = null
    };
    return un(function() {
        t = Wu(function() {
            Rn("on", {
                onGreetingDisplayed: r,
                onGreetingHidden: i
            })
        }),
        n = Hu(function() {
            e.value = null
        })
    }),
    nr(function() {
        var o, s;
        Rn("off", {
            onGreetingDisplayed: r,
            onGreetingHidden: i
        }),
        (o = t) === null || o === void 0 || o(),
        (s = n) === null || s === void 0 || s()
    }),
    e
}
var bN = wr({
    props: {
        license: {
            type: String,
            required: !0
        },
        group: {
            type: String,
            required: !1,
            default: void 0
        },
        visibility: {
            type: String,
            required: !1,
            default: void 0
        },
        customerName: {
            type: String,
            required: !1,
            default: void 0
        },
        customerEmail: {
            type: String,
            required: !1,
            default: void 0
        },
        sessionVariables: {
            type: Object,
            required: !1,
            default: void 0
        },
        chatBetweenGroups: {
            type: Boolean,
            required: !1,
            default: void 0
        },
        customIdentityProvider: {
            type: Function,
            required: !1,
            default: void 0
        }
    },
    emits: ["ready", "new-event", "form-submitted", "rating-submitted", "greeting-hidden", "greeting-displayed", "visibility-changed", "customer-status-changed", "rich-message-button-clicked", "availability-changed"],
    data: function() {
        return {
            widget: null
        }
    },
    watch: {
        license: "reinitialize",
        group: "reinitialize",
        chatBetweenGroups: "reinitialize",
        visibility: function(t) {
            var n;
            (n = this.widget) === null || n === void 0 || n.updateVisibility(t)
        },
        customerName: function(t) {
            var n;
            (n = this.widget) === null || n === void 0 || n.updateCustomerData({
                name: t
            })
        },
        customerEmail: function(t) {
            var n;
            (n = this.widget) === null || n === void 0 || n.updateCustomerData({
                email: t
            })
        },
        sessionVariables: function(t) {
            var n;
            (n = this.widget) === null || n === void 0 || n.updateSessionVariables(t)
        }
    },
    mounted: function() {
        this.setupWidget()
    },
    unmounted: function() {
        var t;
        (t = this.widget) === null || t === void 0 || t.destroy()
    },
    methods: {
        setupWidget: function() {
            var t = this;
            this.widget = hN({
                group: this.group,
                license: this.license,
                customerName: this.customerName,
                customerEmail: this.customerEmail,
                sessionVariables: this.sessionVariables,
                chatBetweenGroups: this.chatBetweenGroups,
                visibility: this.visibility,
                customIdentityProvider: this.customIdentityProvider,
                onReady: function(r) {
                    return t.$emit("ready", r)
                },
                onNewEvent: function(r) {
                    return t.$emit("new-event", r)
                },
                onFormSubmitted: function(r) {
                    return t.$emit("form-submitted", r)
                },
                onRatingSubmitted: function(r) {
                    return t.$emit("rating-submitted", r)
                },
                onGreetingHidden: function(r) {
                    return t.$emit("greeting-hidden", r)
                },
                onGreetingDisplayed: function(r) {
                    return t.$emit("greeting-displayed", r)
                },
                onVisibilityChanged: function(r) {
                    return t.$emit("visibility-changed", r)
                },
                onCustomerStatusChanged: function(r) {
                    return t.$emit("customer-status-changed", r)
                },
                onRichMessageButtonClicked: function(r) {
                    return t.$emit("rich-message-button-clicked", r)
                },
                onAvailabilityChanged: function(r) {
                    return t.$emit("availability-changed", r)
                }
            }),
            window.__lc.integration_name = "@livechat/widget-vue",
            this.widget.init()
        },
        reinitialize: function() {
            var t;
            (t = this.widget) === null || t === void 0 || t.destroy(),
            this.setupWidget()
        }
    },
    render: function() {
        return null
    }
});
const Bk = Object.freeze(Object.defineProperty({
    __proto__: null,
    LiveChatWidget: bN,
    useWidgetChatData: vN,
    useWidgetCustomerData: Zb,
    useWidgetGreeting: yN,
    useWidgetIsReady: pN,
    useWidgetState: gN
}, Symbol.toStringTag, {
    value: "Module"
}));
export {sC as $, Pk as A, QN as B, kM as C, nr as D, jA as E, kt as F, Ak as G, KM as H, kk as I, Fk as J, yn as K, Gc as L, rT as M, en as N, Ls as O, kN as P, Yr as Q, bk as R, GN as S, yM as T, Tk as U, kf as V, zN as W, cM as X, nM as Y, Ik as Z, Yf as _, Me as a, hM as a$, HM as a0, pv as a1, tO as a2, ZN as a3, ST as a4, LN as a5, fO as a6, WM as a7, Bc as a8, ud as a9, rM as aA, rx as aB, cR as aC, WN as aD, TM as aE, DN as aF, Uf as aG, fM as aH, at as aI, RM as aJ, xM as aK, AM as aL, Rx as aM, mx as aN, sM as aO, eC as aP, XM as aQ, UM as aR, Nk as aS, NN as aT, uR as aU, Ek as aV, Lk as aW, tu as aX, qM as aY, VN as aZ, CM as a_, Mt as aa, Af as ab, JN as ac, Oo as ad, _k as ae, Qe as af, tr as ag, OM as ah, sR as ai, SM as aj, Sk as ak, Ht as al, NM as am, NL as an, wc as ao, bR as ap, xx as aq, GM as ar, wu as as, bu as at, YM as au, $N as av, LM as aw, XN as ax, Vf as ay, Fs as az, gt as b, DM as b$, HN as b0, BM as b1, VM as b2, Vy as b3, ql as b4, sf as b5, Tn as b6, Rk as b7, St as b8, gM as b9, oM as bA, nk as bB, jt as bC, _F as bD, mf as bE, KL as bF, Dk as bG, BL as bH, Ok as bI, wk as bJ, yk as bK, vk as bL, FM as bM, my as bN, Tf as bO, mM as bP, jM as bQ, Hy as bR, pM as bS, PM as bT, EM as bU, gg as bV, QM as bW, BN as bX, uM as bY, dM as bZ, $M as b_, qN as ba, Pp as bb, MM as bc, UN as bd, MN as be, rO as bf, IM as bg, eM as bh, tM as bi, Gl as bj, Av as bk, zr as bl, Fx as bm, px as bn, FN as bo, KN as bp, et as bq, Lx as br, QA as bs, iM as bt, _M as bu, nf as bv, YN as bw, wM as bx, jN as by, vM as bz, Fe as c, Bk as c0, wr as d, Gf as e, tt as f, xk as g, lM as h, Ft as i, Nt as j, Ck as k, gR as l, aM as m, JM as n, un as o, mi as p, zM as q, $k as r, bM as s, uy as t, jk as u, wy as v, Bf as w, Fi as x, zt as y, Mk as z};
