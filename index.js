window.onload = startup;
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (t) {
        var n,
            r,
            o,
            s,
            l,
            m,
            y,
            B = "",
            C = 0;
        for (t = Base64._utf8_encode(t); C < t.length; )
            (n = t.charCodeAt(C++)),
                (r = t.charCodeAt(C++)),
                (o = t.charCodeAt(C++)),
                (s = n >> 2),
                (l = ((3 & n) << 4) | (r >> 4)),
                (m = ((15 & r) << 2) | (o >> 6)),
                (y = 63 & o),
                isNaN(r) ? (m = y = 64) : isNaN(o) && (y = 64),
                (B = B + this._keyStr.charAt(s) + this._keyStr.charAt(l) + this._keyStr.charAt(m) + this._keyStr.charAt(y));
        return B;
    },
    decode: function (t) {
        var n,
            r,
            o,
            s,
            l,
            m,
            y,
            B = "",
            C = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); C < t.length; )
            (s = this._keyStr.indexOf(t.charAt(C++))),
                (l = this._keyStr.indexOf(t.charAt(C++))),
                (m = this._keyStr.indexOf(t.charAt(C++))),
                (y = this._keyStr.indexOf(t.charAt(C++))),
                (n = (s << 2) | (l >> 4)),
                (r = ((15 & l) << 4) | (m >> 2)),
                (o = ((3 & m) << 6) | y),
                (B += String.fromCharCode(n)),
                64 != m && (B += String.fromCharCode(r)),
                64 != y && (B += String.fromCharCode(o));
        return Base64._utf8_decode(B);
    },
    _utf8_encode: function (t) {
        t = t.replace(/\r\n/g, "\n");
        for (var n = "", r = 0; r < t.length; r++) {
            var o = t.charCodeAt(r);
            o < 128
                ? (n += String.fromCharCode(o))
                : o > 127 && o < 2048
                ? ((n += String.fromCharCode((o >> 6) | 192)), (n += String.fromCharCode((63 & o) | 128)))
                : ((n += String.fromCharCode((o >> 12) | 224)), (n += String.fromCharCode(((o >> 6) & 63) | 128)), (n += String.fromCharCode((63 & o) | 128)));
        }
        return n;
    },
    _utf8_decode: function (t) {
        for (var n = "", r = 0, o = (c1 = c2 = 0); r < t.length; )
            (o = t.charCodeAt(r)) < 128
                ? ((n += String.fromCharCode(o)), r++)
                : o > 191 && o < 224
                ? ((n += String.fromCharCode(((31 & o) << 6) | (63 & (c2 = t.charCodeAt(r + 1))))), (r += 2))
                : ((n += String.fromCharCode(((15 & o) << 12) | ((63 & (c2 = t.charCodeAt(r + 1))) << 6) | (63 & (c3 = t.charCodeAt(r + 2))))), (r += 3));
        return n;
    },
};
function startup() {
    var t = document.getElementById("tag"),
        n = document.getElementById("youtube"),
        r = document.getElementById("github"),
        o = document.getElementById("twitter"),
        s = document.getElementById("discord"),
        l = document.getElementById("telegram"),
        m = document.getElementById("donate"),
        y = document.getElementById("main"),
        B = document.getElementById("store"),
        C = document.getElementById("adb"),
        u = document.getElementById("support");
    n.addEventListener("click", a),
        r.addEventListener("click", b),
        o.addEventListener("click", c),
        s.addEventListener("click", d),
        l.addEventListener("click", e),
        m.addEventListener("click", f),
        y.addEventListener("click", g),
        B.addEventListener("click", h),
        C.addEventListener("click", i),
        u.addEventListener("click", j),
        (t.innerText = Base64.decode("QExvdmVEb0xvdmU=")),
        (n.innerText = Base64.decode("WW91dHViZQ==")),
        (r.innerText = Base64.decode("R2l0aHVi")),
        (o.innerText = Base64.decode("VHdpdHRlcg==")),
        (s.innerText = Base64.decode("RGlzY29yZA==")),
        (l.innerText = Base64.decode("VGVsZWdyYW0=")),
        (m.innerText = Base64.decode("RG9uYXRl")),
        (y.innerText = Base64.decode("Q2xpY2sgVG8gU3RhcnQgVXNpbmcgVGhlIFdlYnNpdGU=")),
        (B.innerText = Base64.decode("TG92ZURvTG92ZSBTdG9yZQ==")),
        (C.innerText = Base64.decode("QURCIFR1dG9yaWFs")),
        (u.innerText = Base64.decode("U3VwcG9ydA=="));
}
function a() {
    window.open(Base64.decode("aHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ2g2WnYzc2ZyYVdoTGlyOW5DWFQ3bnc="));
}
function b() {
    window.open(Base64.decode("aHR0cHM6Ly9naXRodWIuY29tL0xvdmVEb0xvdmU="));
}
function c() {
    window.open(Base64.decode("aHR0cHM6Ly90d2l0dGVyLmNvbS9Mb3ZlRG9Mb3ZlMQ=="));
}
function d() {
    window.open(Base64.decode("aHR0cHM6Ly9kaXNjb3JkLmdnLzRiNHVETXFWQ3k="));
}
function e() {
    window.open(Base64.decode("aHR0cHM6Ly90Lm1lL0xvdmVEb0xvdmVDaGF0c0dyb3Vw"));
}
function f() {
    window.open(Base64.decode("aHR0cHM6Ly9iaXQubHkvMzFlVEVYaA=="));
}
function g() {
    window.open((document.src = Base64.decode("L21haW4vbWFpbi5odG1s")));
}
function h() {
    window.open((document.src = Base64.decode("L3N0b3JlL3N0b3JlLmh0bWw=")));
}
function i() {
    window.open((document.src = Base64.decode("L2FkYi9hZGIuaHRtbA==")));
}
function j() {
    alert(Base64.decode("U3RpbGwgaW4gZGV2ZWxvcGluZy4uLg=="));
}
