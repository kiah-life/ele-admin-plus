import { defineComponent as y, ref as z, computed as I, watch as K, openBlock as V, createBlock as J, normalizeStyle as L, unref as M, withCtx as W, renderSlot as X } from "vue";
import Z from "../../ele-watermark/index";
import { useReceiver as q } from "../receiver";
const j = "1.3", $ = "EleAdminPlus\u9700\u8981\u6388\u6743\u4F7F\u7528,\u8BF7\u524D\u5F80eleadmin.com\u8D2D\u4E70\u6388\u6743", U = /* @__PURE__ */ y({
  name: "ReceiverView",
  __name: "receiver-view",
  props: {
    wrapPosition: {
      type: Boolean,
      default: !0
    }
  },
  setup(k) {
    function N(e) {
      const r = (p, F, c) => {
        const i = ((s, E) => {
          const P = s.length - E;
          if (P <= 0)
            return s;
          const b = new Array(s.length);
          for (let v = 0; v < s.length; v++)
            v < E ? b[v] = s[P + v] : b[v] = s[v - E];
          return b;
        })(p.split(""), c).join(""), g = [];
        let C = 0;
        for (; C < i.length; ) {
          let s = C + F;
          s > i.length && (s = i.length);
          const E = i.substring(C, s);
          g.push(E.split("").reverse().join("")), C = s;
        }
        return g.join("");
      }, a = "BAFEDIHGLKJONMRQPUTSXWVaZYdcbgfejihmlkponsrqvutyxw10z432765+98/C", l = e.indexOf("="), h = l === -1 ? e : e.substring(0, l), t = l === -1 ? "" : e.substring(l), o = (r(h, 12, 3) + t).replace(/[^A-Za-z0-9\+\/\=]/g, ""), f = r(a, 3, 1) + "=";
      let n = "", m, _, x, O, S, A, B, w = 0;
      for (; w < o.length; )
        O = f.indexOf(o.charAt(w++)), S = f.indexOf(o.charAt(w++)), A = f.indexOf(o.charAt(w++)), B = f.indexOf(o.charAt(w++)), m = O << 2 | S >> 4, _ = (S & 15) << 4 | A >> 2, x = (A & 3) << 6 | B, n = n + String.fromCharCode(m), A != 64 && (n = n + String.fromCharCode(_)), B != 64 && (n = n + String.fromCharCode(x));
      return n = ((p) => {
        let F = "", c = 0, i = 0, g = 0, C = 0;
        for (; c < p.length; )
          i = p.charCodeAt(c), i < 128 ? (F += String.fromCharCode(i), c++) : i > 191 && i < 224 ? (g = p.charCodeAt(c + 1), F += String.fromCharCode((i & 31) << 6 | g & 63), c += 2) : (g = p.charCodeAt(c + 1), C = p.charCodeAt(c + 2), F += String.fromCharCode(
            (i & 15) << 12 | (g & 63) << 6 | C & 63
          ), c += 3);
        return F;
      })(n), n;
    }
    const R = $.split(",");
    function d(e, r, a, l) {
      const h = new Array(60).join("*"), t = [h];
      if (t.push($), e == null && r == null && a == null && l == null && t.push("\u8BF7\u5148\u914D\u7F6E\u81EA\u5DF1\u7684\u6388\u6743\u7801;"), !e && r == null && !a && t.push("\u8BF7\u4F7F\u7528\u6B63\u786E\u683C\u5F0F\u7684\u6388\u6743\u7801;"), e && t.push(
        `\u6388\u6743\u7248\u672C\u53F7\u4E0D\u5339\u914D, \u6388\u6743\u7801\u7248\u672C: ${e}, \u5B89\u88C5\u7248\u672C: ${j};`
      ), typeof r == "number") {
        const D = new Date(r * 1e3).toLocaleString();
        t.push(`\u6388\u6743\u5DF2\u5931\u6548, \u5230\u671F\u65F6\u95F4: ${D};`);
      }
      a && t.push(`\u57DF\u540D\u4E0D\u5339\u914D, \u8BF7\u90E8\u7F72\u5728: ${a} \u4E0B, \u5F53\u524D\u57DF\u540D: ${l};`), t.push(h), console.error(t.join(`
`));
    }
    const T = q(), u = z(!1), Y = I(() => {
      const e = T.license;
      return e ? e.trim() : void 0;
    });
    return K(
      Y,
      (e) => {
        var r;
        if (typeof e != "string" || !e) {
          u.value = !1, d();
          return;
        }
        try {
          const a = JSON.parse(N(e)), { version: l, expiration: h, domain: t, product: D } = a;
          if (l && l !== j) {
            u.value = !1, d(l);
            return;
          }
          if (D !== "EleAdminPlus") {
            u.value = !1, d("");
            return;
          }
          if (h && h < Date.now() / 1e3) {
            u.value = !1, d(void 0, h);
            return;
          }
          if (t) {
            const o = (r = window == null ? void 0 : window.location) == null ? void 0 : r.hostname;
            if (!o) {
              u.value = !1, d(void 0, void 0, t, "");
              return;
            }
            if (o !== "localhost" && o !== "127.0.0.1") {
              const f = t.split("."), n = o.split(".");
              for (let m = f.length - 1; m >= 0; m--)
                if (f[m] !== n[m]) {
                  u.value = !1, d(void 0, void 0, t, o);
                  return;
                }
              if (n.length > f.length && n[n.length - f.length - 1] !== "www") {
                u.value = !1, d(void 0, void 0, t, o);
                return;
              }
            }
          }
        } catch (a) {
          u.value = !1, console.error(a), d("");
          return;
        }
        u.value = !0;
      },
      {
        immediate: !0
      }
    ), (e, r) => (V(), J(Z, {
      wrapPosition: !1,
      style: L(!k.wrapPosition || u.value ? void 0 : { position: "relative" }),
      disabled: u.value,
      content: M(R)
    }, {
      default: W(() => [
        X(e.$slots, "default", { authenticated: u.value })
      ]),
      _: 3
    }, 8, ["style", "disabled", "content"]));
  }
});
export {
  U as default
};
