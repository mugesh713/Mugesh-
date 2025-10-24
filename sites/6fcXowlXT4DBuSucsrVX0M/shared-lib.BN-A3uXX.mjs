import { __esmMin as e } from "./rolldown-runtime.6X8PNUJl.mjs";
import {
  Y as t,
  ae as n,
  init_jsx_runtime as r,
  init_npm_react_18_2 as i,
  p as a,
  pe as o,
  re as s,
  se as c,
  u as l,
  x as u,
} from "./react.B1HIfdOm.mjs";
import {
  LayoutGroup as d,
  MotionConfigContext as f,
  init_framer_motion_B43RTWKU as p,
  motion as m,
} from "./motion.Bt0WCZwK.mjs";
import {
  ControlType as h,
  Image3 as g,
  Link as ee,
  RichText as _,
  SVG as v,
  addFonts as y,
  addPropertyControls as b,
  cx as x,
  fontStore as S,
  getLoadingLazyAtYPosition as C,
  init_framer_6PNBS5CQ as w,
  useActiveVariantCallback as T,
  useComponentViewport as E,
  useLocaleInfo as D,
  useVariantState as te,
  withCSS as O,
} from "./framer.BuhMpsbc.mjs";
function k(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  ne = e(() => {
    r(),
      w(),
      p(),
      i(),
      (A = {
        hXEhQ5eRd: { hover: !0, pressed: !0 },
        l6_o53v3X: { hover: !0 },
        NLGbl8fkw: { hover: !0, pressed: !0 },
        u0eJOWaxZ: { hover: !0, pressed: !0 },
      }),
      (j = [`NLGbl8fkw`, `l6_o53v3X`, `u0eJOWaxZ`, `hXEhQ5eRd`]),
      (M = `framer-7aQYE`),
      (N = {
        hXEhQ5eRd: `framer-v-r5m2ge`,
        l6_o53v3X: `framer-v-v8165j`,
        NLGbl8fkw: `framer-v-uzwvht`,
        u0eJOWaxZ: `framer-v-19ml4mz`,
      }),
      (P = m.create(u)),
      (F = {
        "Variant 4": `hXEhQ5eRd`,
        Grey: `u0eJOWaxZ`,
        Purple: `NLGbl8fkw`,
        White: `l6_o53v3X`,
      }),
      (I = ({
        click: e,
        height: t,
        id: n,
        link: r,
        newTab: i,
        smoothScroll: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        AL_NU982V: i ?? c.AL_NU982V,
        dlVBgpKLv: o ?? c.dlVBgpKLv ?? `Get In Touch`,
        GT109pdEG: r ?? c.GT109pdEG,
        ovJ6T1ZPP: e ?? c.ovJ6T1ZPP,
        SD1BGlGhK: a ?? c.SD1BGlGhK,
        variant: F[c.variant] ?? c.variant ?? `NLGbl8fkw`,
      })),
      (L = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (R = O(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: f } = D();
          E();
          let {
              style: p,
              className: h,
              layoutId: g,
              variant: y,
              dlVBgpKLv: b,
              GT109pdEG: S,
              AL_NU982V: C,
              SD1BGlGhK: w,
              ovJ6T1ZPP: O,
              ...F
            } = I(e),
            {
              baseVariant: R,
              classNames: z,
              clearLoadingGesture: ne,
              gestureHandlers: B,
              gestureVariant: V,
              isLoading: H,
              setGestureState: U,
              setVariant: W,
              variants: G,
            } = te({
              cycleOrder: j,
              defaultVariant: `NLGbl8fkw`,
              enabledGestures: A,
              ref: i,
              variant: y,
              variantClassNames: N,
            }),
            K = L(e, G),
            { activeVariantCallback: q, delay: J } = T(R),
            Y = q(async (...e) => {
              if ((U({ isPressed: !1 }), O && (await O(...e)) === !1))
                return !1;
            }),
            X = x(M),
            Z = () =>
              !(
                [`hXEhQ5eRd-hover`, `hXEhQ5eRd-pressed`].includes(V) ||
                R === `hXEhQ5eRd`
              ),
            Q = () =>
              !!(
                [`hXEhQ5eRd-hover`, `hXEhQ5eRd-pressed`].includes(V) ||
                R === `hXEhQ5eRd`
              );
          return a(d, {
            id: g ?? s,
            children: a(P, {
              animate: G,
              initial: !1,
              children: a(ee, {
                href: S,
                motionChild: !0,
                nodeId: `NLGbl8fkw`,
                openInNewTab: C,
                scopeId: `fmV0Anf22`,
                smoothScroll: w,
                ...k(
                  {
                    hXEhQ5eRd: {
                      href: { hash: `:BgNtyLH0x`, webPageId: `augiA20Il` },
                      openInNewTab: !1,
                    },
                  },
                  R,
                  V
                ),
                children: l(m.a, {
                  ...F,
                  ...B,
                  className: `${x(X, `framer-uzwvht`, h, z)} framer-1jeiyy6`,
                  "data-border": !0,
                  "data-framer-name": `Purple`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: K,
                  layoutId: `NLGbl8fkw`,
                  onTap: Y,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0.25px`,
                    "--border-color": `rgba(255, 255, 255, 0.12)`,
                    "--border-left-width": `0.25px`,
                    "--border-right-width": `0.25px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0.25px`,
                    background: `linear-gradient(180deg, rgb(61, 87, 217) 0%, rgb(28, 44, 163) 47.52252252252252%, rgb(25, 38, 181) 100%)`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 9999,
                    borderBottomRightRadius: 9999,
                    borderTopLeftRadius: 9999,
                    borderTopRightRadius: 9999,
                    boxShadow: `inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6), 0px 3px 12px 0px rgba(0, 0, 0, 0.6)`,
                    opacity: 1,
                    ...p,
                  },
                  variants: {
                    "hXEhQ5eRd-hover": {
                      background: `linear-gradient(180deg, rgb(36, 36, 48) 0%, rgb(36, 36, 48) 50%, rgb(36, 36, 48) 100%)`,
                      backgroundColor: `rgb(36, 36, 48)`,
                      opacity: 1,
                    },
                    "hXEhQ5eRd-pressed": {
                      background: `linear-gradient(180deg, rgb(21, 21, 28) 0%, rgb(21, 21, 28) 50%, rgb(21, 21, 28) 100%)`,
                      backgroundColor: `rgb(21, 21, 28)`,
                      opacity: 1,
                    },
                    "l6_o53v3X-hover": { opacity: 0.6 },
                    "NLGbl8fkw-hover": {
                      background: `linear-gradient(180deg, rgb(29, 53, 173) 0%, rgb(17, 31, 138) 47.52252252252252%, rgb(8, 16, 110) 100%)`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                    },
                    "NLGbl8fkw-pressed": {
                      background: `linear-gradient(180deg, rgb(40, 62, 209) 0%, rgb(40, 62, 209) 50%, rgb(40, 62, 209) 100%)`,
                      backgroundColor: `rgb(40, 62, 209)`,
                      boxShadow: `inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6)`,
                      opacity: 1,
                    },
                    "u0eJOWaxZ-hover": {
                      background: `linear-gradient(180deg, rgb(36, 36, 48) 0%, rgb(36, 36, 48) 50%, rgb(36, 36, 48) 100%)`,
                      backgroundColor: `rgb(36, 36, 48)`,
                      opacity: 0.82,
                    },
                    "u0eJOWaxZ-pressed": {
                      background: `linear-gradient(180deg, rgb(21, 21, 28) 0%, rgb(21, 21, 28) 50%, rgb(21, 21, 28) 100%)`,
                      backgroundColor: `rgb(21, 21, 28)`,
                      boxShadow: `inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6)`,
                      opacity: 0.82,
                    },
                    hXEhQ5eRd: {
                      background: `linear-gradient(180deg, rgb(50, 54, 69) 0%, rgb(50, 54, 69) 50%, rgb(50, 54, 69) 100%)`,
                      backgroundColor: `rgb(50, 54, 69)`,
                      boxShadow: `inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6), 0px 3px 30px 12px rgba(0, 0, 0, 0.35)`,
                    },
                    l6_o53v3X: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      background: `linear-gradient(180deg, var(--token-b94732ec-0911-4c64-b592-4d592b668e2d, rgb(239, 238, 236)) 0%, var(--token-b94732ec-0911-4c64-b592-4d592b668e2d, rgb(239, 238, 236)) 50%, var(--token-b94732ec-0911-4c64-b592-4d592b668e2d, rgb(239, 238, 236)) 100%)`,
                      backgroundColor: `var(--token-b94732ec-0911-4c64-b592-4d592b668e2d, rgb(239, 238, 236))`,
                      boxShadow: `none`,
                    },
                    u0eJOWaxZ: {
                      background: `linear-gradient(180deg, rgb(67, 70, 84) 0%, rgb(67, 70, 84) 50%, rgb(67, 70, 84) 100%)`,
                      backgroundColor: `rgb(67, 70, 84)`,
                    },
                  },
                  ...k(
                    {
                      "hXEhQ5eRd-hover": { "data-framer-name": void 0 },
                      "hXEhQ5eRd-pressed": { "data-framer-name": void 0 },
                      "l6_o53v3X-hover": { "data-framer-name": void 0 },
                      "NLGbl8fkw-hover": { "data-framer-name": void 0 },
                      "NLGbl8fkw-pressed": { "data-framer-name": void 0 },
                      "u0eJOWaxZ-hover": { "data-framer-name": void 0 },
                      "u0eJOWaxZ-pressed": { "data-framer-name": void 0 },
                      hXEhQ5eRd: { "data-framer-name": `Variant 4` },
                      l6_o53v3X: { "data-framer-name": `White` },
                      u0eJOWaxZ: { "data-framer-name": `Grey` },
                    },
                    R,
                    V
                  ),
                  children: [
                    Z() &&
                      a(_, {
                        __fromCanvasComponent: !0,
                        children: a(u, {
                          children: a(m.p, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.5px`,
                              "--framer-line-height": `26px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                            },
                            children: `Get In Touch`,
                          }),
                        }),
                        className: `framer-1k3tvw4`,
                        "data-framer-name": `Text`,
                        fonts: [`GF;Geist-500`],
                        layoutDependency: K,
                        layoutId: `vfYUMfuv1`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: b,
                        variants: {
                          "NLGbl8fkw-hover": {
                            "--extracted-r6o4lv": `rgb(196, 196, 196)`,
                          },
                          "NLGbl8fkw-pressed": {
                            "--extracted-r6o4lv": `rgb(196, 196, 196)`,
                          },
                          l6_o53v3X: {
                            "--extracted-r6o4lv": `var(--token-561b3d91-c258-4609-94c9-3cc008fdd628, rgb(19, 19, 19))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...k(
                          {
                            "NLGbl8fkw-hover": {
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.5px`,
                                    "--framer-line-height": `26px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(196, 196, 196))`,
                                  },
                                  children: `Get In Touch`,
                                }),
                              }),
                            },
                            "NLGbl8fkw-pressed": {
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.5px`,
                                    "--framer-line-height": `26px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(196, 196, 196))`,
                                  },
                                  children: `Get In Touch`,
                                }),
                              }),
                            },
                            l6_o53v3X: {
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.5px`,
                                    "--framer-line-height": `26px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-561b3d91-c258-4609-94c9-3cc008fdd628, rgb(19, 19, 19)))`,
                                  },
                                  children: `Get In Touch`,
                                }),
                              }),
                            },
                          },
                          R,
                          V
                        ),
                      }),
                    Q() &&
                      a(v, {
                        className: `framer-18sckiw`,
                        layoutDependency: K,
                        layoutId: `SdN5PWNwv`,
                        opacity: 1,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.788 13.728" overflow="visible"></svg>`,
                        withExternalLayout: !0,
                        ...k(
                          {
                            hXEhQ5eRd: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.788 13.728" overflow="visible"><path d="M 7.925 0.852 C 8.019 0.946 8.072 1.074 8.072 1.206 C 8.072 1.339 8.019 1.467 7.925 1.56 L 3.622 5.862 L 17.288 5.862 C 17.565 5.862 17.788 6.086 17.788 6.362 L 17.788 7.362 C 17.788 7.639 17.565 7.862 17.288 7.862 L 3.62 7.862 L 7.925 12.167 C 8.121 12.363 8.121 12.679 7.925 12.874 L 7.217 13.581 C 7.022 13.777 6.706 13.777 6.51 13.581 L 0.146 7.217 C -0.049 7.022 -0.049 6.706 0.146 6.51 L 6.51 0.146 C 6.706 -0.049 7.022 -0.049 7.217 0.146 L 7.925 0.853 Z" fill="rgb(243,243,248)"></path></svg>`,
                            },
                          },
                          R,
                          V
                        ),
                      }),
                    Q() &&
                      a(_, {
                        __fromCanvasComponent: !0,
                        children: a(u, {
                          children: a(m.p, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.5px`,
                              "--framer-line-height": `26px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                            },
                            children: `Get In Touch`,
                          }),
                        }),
                        className: `framer-1eb4p1v`,
                        "data-framer-name": `Text`,
                        fonts: [`GF;Geist-500`],
                        layoutDependency: K,
                        layoutId: `q0ciwrXtv`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: b,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-7aQYE.framer-1jeiyy6, .framer-7aQYE .framer-1jeiyy6 { display: block; }`,
          `.framer-7aQYE.framer-uzwvht { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 24px 10px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-7aQYE .framer-1k3tvw4, .framer-7aQYE .framer-1eb4p1v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-7aQYE .framer-18sckiw { height: 14px; position: relative; width: 18px; }`,
          `.framer-7aQYE.framer-v-r5m2ge.framer-uzwvht { height: 46px; padding: 16px 24px 16px 24px; }`,
          `.framer-7aQYE.framer-v-r5m2ge.hover.framer-uzwvht, .framer-7aQYE.framer-v-r5m2ge.pressed.framer-uzwvht { padding: 10px 24px 10px 24px; }`,
          `.framer-7aQYE[data-border="true"]::after, .framer-7aQYE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-7aQYE`
      )),
      (z = R),
      (R.displayName = `Button/Primary Button`),
      (R.defaultProps = { height: 46, width: 135.5 }),
      b(R, {
        variant: {
          options: [`NLGbl8fkw`, `l6_o53v3X`, `u0eJOWaxZ`, `hXEhQ5eRd`],
          optionTitles: [`Purple`, `White`, `Grey`, `Variant 4`],
          title: `Variant`,
          type: h.Enum,
        },
        dlVBgpKLv: {
          defaultValue: `Get In Touch`,
          displayTextArea: !0,
          title: `Title`,
          type: h.String,
        },
        GT109pdEG: { title: `Link`, type: h.Link },
        AL_NU982V: { defaultValue: !1, title: `New Tab`, type: h.Boolean },
        SD1BGlGhK: {
          defaultValue: !1,
          title: `Smooth Scroll`,
          type: h.Boolean,
        },
        ovJ6T1ZPP: { title: `Click`, type: h.EventHandler },
      }),
      y(
        R,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Geist`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function B(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q = e(() => {
    r(),
      w(),
      p(),
      i(),
      (V = [`woIRdd3N0`, `TPWlZgtQW`, `TKdpOGo6M`, `WN3zTYZu0`]),
      (H = `framer-fhQVQ`),
      (U = {
        TKdpOGo6M: `framer-v-1yq91b3`,
        TPWlZgtQW: `framer-v-1f05mri`,
        WN3zTYZu0: `framer-v-3qg2hu`,
        woIRdd3N0: `framer-v-tsy93w`,
      }),
      (W = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (K = m.create(u)),
      (q = {
        "Variant 1": `woIRdd3N0`,
        "Variant 2": `TPWlZgtQW`,
        "Variant 3": `TKdpOGo6M`,
        "Variant 4": `WN3zTYZu0`,
      }),
      (J = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: q[r.variant] ?? r.variant ?? `woIRdd3N0`,
      })),
      (Y = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (X = O(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: f } = D(),
            p = E(),
            { style: h, className: ee, layoutId: y, variant: b, ...S } = J(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = te({
              cycleOrder: V,
              defaultVariant: `woIRdd3N0`,
              ref: i,
              variant: b,
              variantClassNames: U,
            }),
            F = Y(e, P),
            I = x(H),
            L = () => w === `TPWlZgtQW`,
            R = () => w !== `TKdpOGo6M`;
          return a(d, {
            id: y ?? s,
            children: a(K, {
              animate: P,
              initial: !1,
              children: a(G, {
                value: W,
                children: l(m.div, {
                  ...S,
                  ...k,
                  className: x(I, `framer-tsy93w`, ee, T),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: F,
                  layoutId: `woIRdd3N0`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0.25px`,
                    "--border-color": `rgba(255, 255, 255, 0.4)`,
                    "--border-left-width": `0.25px`,
                    "--border-right-width": `0.25px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0.25px`,
                    backdropFilter: `blur(7px)`,
                    background: `linear-gradient(143deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.16) 100%)`,
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 80,
                    boxShadow: `inset 1px -2px 10px 0px rgba(39, 59, 99, 0.25)`,
                    WebkitBackdropFilter: `blur(7px)`,
                    ...h,
                  },
                  variants: {
                    WN3zTYZu0: {
                      background: `linear-gradient(143deg, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0.49) 100%)`,
                    },
                  },
                  ...B(
                    {
                      TKdpOGo6M: { "data-framer-name": `Variant 3` },
                      TPWlZgtQW: { "data-framer-name": `Variant 2` },
                      WN3zTYZu0: { "data-framer-name": `Variant 4` },
                    },
                    w,
                    A
                  ),
                  children: [
                    a(_, {
                      __fromCanvasComponent: !0,
                      children: a(u, {
                        children: a(m.p, {
                          style: {
                            "--framer-font-size": `18px`,
                            "--framer-line-height": `38px`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 250, 250, 0.8))`,
                          },
                          children: `View Project `,
                        }),
                      }),
                      className: `framer-bnso0v`,
                      fonts: [`Inter`],
                      layoutDependency: F,
                      layoutId: `rasedfdY_`,
                      style: {
                        "--extracted-r6o4lv": `rgba(255, 250, 250, 0.8)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      variants: {
                        TPWlZgtQW: {
                          "--extracted-2gxw0f": `rgba(255, 250, 250, 0.8)`,
                        },
                        WN3zTYZu0: {
                          "--extracted-r6o4lv": `rgba(255, 255, 255, 0.9)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...B(
                        {
                          TKdpOGo6M: {
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--framer-font-size": `18px`,
                                  "--framer-line-height": `38px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 250, 250, 0.8))`,
                                },
                                children: `Next Project  >`,
                              }),
                            }),
                          },
                          TPWlZgtQW: {
                            children: l(u, {
                              children: [
                                a(m.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItTGlnaHQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `300`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `26px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 250, 250, 0.8))`,
                                  },
                                  children: `Can't see`,
                                }),
                                a(m.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `26px`,
                                    "--framer-text-color": `var(--extracted-2gxw0f, rgba(255, 250, 250, 0.8))`,
                                  },
                                  children: `View Figma`,
                                }),
                              ],
                            }),
                            fonts: [`Inter-Light`, `Inter-SemiBold`],
                          },
                          WN3zTYZu0: {
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--framer-font-size": `18px`,
                                  "--framer-line-height": `38px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.9))`,
                                },
                                children: `View all JTBD`,
                              }),
                            }),
                          },
                        },
                        w,
                        A
                      ),
                    }),
                    L() &&
                      a(g, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 151,
                          intrinsicWidth: 249,
                          pixelHeight: 302,
                          pixelWidth: 498,
                          src: `https://framerusercontent.com/images/FhM4pNNEIRj8EGWqDGXTHxWETE.png`,
                        },
                        className: `framer-1dcwffn`,
                        "data-framer-name": `Cat-cat-meme`,
                        layoutDependency: F,
                        layoutId: `ZDFPAuO6U`,
                        style: {
                          borderBottomLeftRadius: 44,
                          borderBottomRightRadius: 44,
                          borderTopLeftRadius: 44,
                          borderTopRightRadius: 44,
                        },
                        ...B(
                          {
                            TPWlZgtQW: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 151,
                                intrinsicWidth: 249,
                                loading: C(
                                  (p?.y || 0) +
                                    (10 + ((p?.height || 108) - 20 - 88) / 2)
                                ),
                                pixelHeight: 302,
                                pixelWidth: 498,
                                src: `https://framerusercontent.com/images/FhM4pNNEIRj8EGWqDGXTHxWETE.png`,
                              },
                            },
                          },
                          w,
                          A
                        ),
                      }),
                    R() &&
                      a(m.div, {
                        className: `framer-44wa43`,
                        layoutDependency: F,
                        layoutId: `bRiB8TRDL`,
                        children: a(v, {
                          className: `framer-1q0kx7n`,
                          layoutDependency: F,
                          layoutId: `KTVR7qMu2`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9.926 9.926" overflow="visible"><path d="M 0.052 9.119 C 0.019 9.086 0 9.04 0 8.993 C 0 8.945 0.019 8.9 0.052 8.866 L 7.49 1.429 L 2.962 1.429 C 2.863 1.429 2.783 1.349 2.783 1.25 L 2.783 0.179 C 2.783 0.08 2.863 0 2.962 0 L 9.569 0 C 9.766 0 9.926 0.16 9.926 0.357 L 9.926 6.964 C 9.926 7.063 9.846 7.143 9.747 7.143 L 8.676 7.143 C 8.577 7.143 8.497 7.063 8.497 6.964 L 8.497 2.436 L 1.06 9.874 C 1.026 9.907 0.981 9.926 0.933 9.926 C 0.886 9.926 0.84 9.907 0.807 9.874 Z" fill="rgb(243,243,248)"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fhQVQ.framer-1tsboi0, .framer-fhQVQ .framer-1tsboi0 { display: block; }`,
          `.framer-fhQVQ.framer-tsy93w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 24px 8px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fhQVQ .framer-bnso0v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-fhQVQ .framer-1dcwffn { aspect-ratio: 1.6490066225165563 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 88px); overflow: visible; position: relative; width: 145px; }`,
          `.framer-fhQVQ .framer-44wa43 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-fhQVQ .framer-1q0kx7n { height: 10px; position: relative; width: 10px; }`,
          `.framer-fhQVQ.framer-v-1f05mri.framer-tsy93w { padding: 10px 24px 10px 10px; }`,
          `.framer-fhQVQ.framer-v-1f05mri .framer-bnso0v { order: 1; }`,
          `.framer-fhQVQ.framer-v-1f05mri .framer-1dcwffn { order: 0; }`,
          `.framer-fhQVQ.framer-v-1f05mri .framer-44wa43 { align-content: flex-end; align-items: flex-end; flex: none; height: 39px; order: 2; width: min-content; }`,
          `.framer-fhQVQ[data-border="true"]::after, .framer-fhQVQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-fhQVQ`
      )),
      (Z = X),
      (X.displayName = `Button`),
      (X.defaultProps = { height: 54, width: 170.5 }),
      b(X, {
        variant: {
          options: [`woIRdd3N0`, `TPWlZgtQW`, `TKdpOGo6M`, `WN3zTYZu0`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: h.Enum,
        },
      }),
      y(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/BkDpl4ghaqvMi1btKFyG2tdbec.woff2`,
                weight: `300`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/zAMK70AQRFSShJgUiaR5IiIhgzk.woff2`,
                weight: `300`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/IETjvc5qzUaRoaruDpPSwCUM8.woff2`,
                weight: `300`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/oLCoaT3ioA0fHdJnWR9W6k7NY.woff2`,
                weight: `300`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/Sj0PCHQSBjFmEp6NBWg6FNaKc.woff2`,
                weight: `300`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/v2q8JTTTs7McDMSEhnxAIBqd0.woff2`,
                weight: `300`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/H4TfENUY1rh8R9UaSD6vngjJP3M.woff2`,
                weight: `300`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  re,
  ie,
  ae,
  oe = e(() => {
    w(),
      S.loadFonts([]),
      (re = [{ explicitInter: !0, fonts: [] }]),
      (ie = [
        `.framer-Bj1g5 .framer-styles-preset-68ruwb:not(.rich-text-wrapper), .framer-Bj1g5 .framer-styles-preset-68ruwb.rich-text-wrapper a { --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #fafdff; --framer-link-hover-text-decoration: none; --framer-link-text-color: #ffffff; --framer-link-text-decoration: underline; }`,
      ]),
      (ae = `framer-Bj1g5`);
  });
function $(e, t) {
  return {
    description: `Made with Framer`,
    robots: `max-image-preview:large`,
    title: `Mugesh's Portfolio `,
  };
}
var se = e(() => {});
function ce(e, t) {
  return {
    breakpoints: [
      { hash: `72rtr7`, mediaQuery: `(min-width: 1200px)` },
      {
        hash: `1nc64nb`,
        mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
      },
      { hash: `1pn6j55`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: $(e, t).description,
    elements: {
      BgNtyLH0x: `home`,
      cF0GYYqyR: `mobile-about-me`,
      cVar0XqH2: `recommendation-mobile-1`,
      dCDC69rMu: `card1`,
      FTMlkB5I5: `card-3`,
      k637go2MC: `contact-me`,
      MLufM5z_P: `card-4`,
      OunIGDRQr: `home-mobile`,
      qiLmUSAi8: `about-me`,
      Rd_hGxn1c: `case-study`,
      UDHvzrpMW: `recommendation-mobile`,
      uqYhhRTT9: `card-2`,
      V5V4Z4DQQ: `work`,
    },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-pOlB9`,
    title: `Mugesh's Portfolio `,
    viewport: `width=device-width`,
  };
}
var le,
  ue,
  de = e(() => {
    se(),
      (le = 1),
      (ue = {
        exports: {
          default: {
            type: `function`,
            annotations: { framerContractVersion: `1` },
          },
          metadataVersion: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
function fe(e, t) {
  return {
    breakpoints: [
      { hash: `cz5ij6`, mediaQuery: `(min-width: 1200px)` },
      {
        hash: `4ry9c1`,
        mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
      },
      { hash: `1sscvvh`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: $(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-9Th0u`,
    title: $(e, t).title || `Curation Documentation`,
    viewport: `width=device-width`,
  };
}
var pe,
  me,
  he = e(() => {
    se(),
      (pe = 1),
      (me = {
        exports: {
          metadataVersion: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          default: {
            type: `function`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
export {
  me as __FramerMetadata__,
  ue as __FramerMetadata__$1,
  ae as className,
  ie as css,
  z as fmV0Anf22_default,
  re as fonts,
  Z as h6OYnRfc4_default,
  oe as init_DOWnf2wWb,
  he as init_YUN0ipZRa,
  de as init_augiA20Il,
  ne as init_fmV0Anf22,
  Q as init_h6OYnRfc4,
  fe as metadata,
  ce as metadata$1,
  pe as metadataVersion,
  le as metadataVersion$1,
};
//# sourceMappingURL=shared-lib.BN-A3uXX.mjs.map
