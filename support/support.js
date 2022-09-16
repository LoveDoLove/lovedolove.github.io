window.onload = start;
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
        var t,
            r,
            d,
            a,
            o,
            n,
            l,
            h = "",
            c = 0;
        for (e = Base64._utf8_encode(e); c < e.length; )
            (t = e.charCodeAt(c++)),
                (r = e.charCodeAt(c++)),
                (d = e.charCodeAt(c++)),
                (a = t >> 2),
                (o = ((3 & t) << 4) | (r >> 4)),
                (n = ((15 & r) << 2) | (d >> 6)),
                (l = 63 & d),
                isNaN(r) ? (n = l = 64) : isNaN(d) && (l = 64),
                (h = h + this._keyStr.charAt(a) + this._keyStr.charAt(o) + this._keyStr.charAt(n) + this._keyStr.charAt(l));
        return h;
    },
    decode: function (e) {
        var t,
            r,
            d,
            a,
            o,
            n,
            l,
            h = "",
            c = 0;
        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length; )
            (a = this._keyStr.indexOf(e.charAt(c++))),
                (o = this._keyStr.indexOf(e.charAt(c++))),
                (n = this._keyStr.indexOf(e.charAt(c++))),
                (l = this._keyStr.indexOf(e.charAt(c++))),
                (t = (a << 2) | (o >> 4)),
                (r = ((15 & o) << 4) | (n >> 2)),
                (d = ((3 & n) << 6) | l),
                (h += String.fromCharCode(t)),
                64 != n && (h += String.fromCharCode(r)),
                64 != l && (h += String.fromCharCode(d));
        return Base64._utf8_decode(h);
    },
    _utf8_encode: function (e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", r = 0; r < e.length; r++) {
            var d = e.charCodeAt(r);
            d < 128
                ? (t += String.fromCharCode(d))
                : d > 127 && d < 2048
                ? ((t += String.fromCharCode((d >> 6) | 192)), (t += String.fromCharCode((63 & d) | 128)))
                : ((t += String.fromCharCode((d >> 12) | 224)), (t += String.fromCharCode(((d >> 6) & 63) | 128)), (t += String.fromCharCode((63 & d) | 128)));
        }
        return t;
    },
    _utf8_decode: function (e) {
        for (var t = "", r = 0, d = (c1 = c2 = 0); r < e.length; )
            (d = e.charCodeAt(r)) < 128
                ? ((t += String.fromCharCode(d)), r++)
                : d > 191 && d < 224
                ? ((t += String.fromCharCode(((31 & d) << 6) | (63 & (c2 = e.charCodeAt(r + 1))))), (r += 2))
                : ((t += String.fromCharCode(((15 & d) << 12) | ((63 & (c2 = e.charCodeAt(r + 1))) << 6) | (63 & (c3 = e.charCodeAt(r + 2))))), (r += 3));
        return t;
    },
};
function start() {
    document.getElementById("submit").addEventListener("click", check);
    var e = document.getElementById("headTitle"),
        t = document.getElementById("formLegend"),
        r = document.getElementById("userName"),
        d = document.getElementById("Email"),
        a = document.getElementById("Phone"),
        o = document.getElementById("titleQuestion"),
        n = document.getElementById("Question");
    (e.innerText = Base64.decode("V2VsY29tZSBUbyBTdXBwb3J0IFBhZ2U=")),
        (t.innerText = Base64.decode("RW1haWwgVXM=")),
        (r.innerText = Base64.decode("VXNlcm5hbWUgOiA=")),
        (d.innerText = Base64.decode("RW1haWwgOiA=")),
        (a.innerText = Base64.decode("UGhvbmUgTnVtYmVyIDog")),
        (o.innerText = Base64.decode("UXVlc3Rpb24gVGl0bGUgOiA=")),
        (n.innerText = Base64.decode("UXVlc3Rpb24gQ29udGVudCBIZXJlIDog"));
}
function check() {
    var e = document.getElementById("username"),
        t = document.getElementById("email"),
        r = document.getElementById("phone"),
        d = document.getElementById("titlequestion");
    if ("" == e.value) alert(Base64.decode("UGxlYXNlIGVudGVyIHVzZXJuYW1lISEh"));
    else if ("" == t.value) alert(Base64.decode("UGxlYXNlIGVudGVyIGVtYWlsISEh"));
    else if (r.value.length < 7) alert(Base64.decode("UGxlYXNlIGVudGVyIHBob25lIG51bWJlciBjb3JyZWN0bHkhISE="));
    else if ("" == d.value) alert(Base64.decode("UGxlYXNlIGVudGVyIHF1ZXN0aW9uIHRpdGxlISEh"));
    else if ("" != t.value && "" != r.value && r.value.length > 7 && "" != d) return window.alert(Base64.decode("WW91ciBxdWVzdGlvbiB3aWxsIHNlbmQgdG8gYWRtaW4gbm93ISEh")), document.getElementById("forms");
}
