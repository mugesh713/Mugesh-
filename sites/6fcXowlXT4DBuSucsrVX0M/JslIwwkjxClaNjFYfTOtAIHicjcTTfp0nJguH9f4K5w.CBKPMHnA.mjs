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
  ye as ee,
} from "./react.B1HIfdOm.mjs";
import {
  LayoutGroup as d,
  MotionConfigContext as f,
  init_framer_motion_B43RTWKU as p,
  motion as m,
  useSpring as h,
} from "./motion.Bt0WCZwK.mjs";
import {
  ComponentViewportProvider as g,
  Container as _,
  ControlType as v,
  GeneratedComponentContext as y,
  Image3 as b,
  Link as x,
  PropertyOverrides2 as S,
  RichText as C,
  SVG as w,
  SmartComponentScopedContainer as T,
  addFonts as E,
  addPropertyControls as D,
  cx as O,
  fontStore as k,
  getFonts as A,
  getFontsFromSharedStyle as j,
  getLoadingLazyAtYPosition as M,
  init_framer_6PNBS5CQ as N,
  useActiveVariantCallback as P,
  useComponentViewport as F,
  useCustomCursors as I,
  useHydratedBreakpointVariants as L,
  useIsOnFramerCanvas as R,
  useLocaleInfo as z,
  useMetadata as te,
  useVariantState as B,
  withCSS as V,
  withOptimizedAppearEffect as H,
} from "./framer.BuhMpsbc.mjs";
import {
  className as ne,
  css as re,
  fmV0Anf22_default as ie,
  fonts as U,
  h6OYnRfc4_default as ae,
  init_DOWnf2wWb as oe,
  init_YUN0ipZRa as se,
  init_fmV0Anf22 as W,
  init_h6OYnRfc4 as ce,
  metadata as le,
} from "./shared-lib.BN-A3uXX.mjs";
var G,
  ue,
  K,
  q,
  de,
  fe,
  pe,
  me,
  he,
  ge = e(() => {
    r(),
      N(),
      p(),
      i(),
      (G = `framer-q8Ttd`),
      (ue = { XvqTw0Be9: `framer-v-jjcw9a` }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (de = m(u)),
      (fe = ({ height: e, id: t, subtitle: n, title: r, width: i, ...a }) => ({
        ...a,
        WuF2iG84P:
          n ??
          a.WuF2iG84P ??
          `Set up the component by adding background and bouncer elements to the component properties.`,
        yeAnKbEUZ: r ?? a.yeAnKbEUZ ?? `Screen Saver`,
      })),
      (pe = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (me = V(
        t(function (e, t) {
          let { activeLocale: r, setLocale: i } = z(),
            {
              style: s,
              className: c,
              layoutId: ee,
              variant: f,
              yeAnKbEUZ: p,
              WuF2iG84P: h,
              ...g
            } = fe(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = B({
              defaultVariant: `XvqTw0Be9`,
              variant: f,
              variantClassNames: ue,
            }),
            k = pe(e, D),
            A = o(null),
            j = n(),
            M = [];
          return (
            F(),
            a(d, {
              id: ee ?? j,
              children: a(de, {
                animate: D,
                initial: !1,
                children: a(q, {
                  value: K,
                  children: a(m.div, {
                    ...g,
                    ...b,
                    className: O(G, ...M, `framer-jjcw9a`, c, v),
                    "data-framer-name": `Default`,
                    layoutDependency: k,
                    layoutId: `XvqTw0Be9`,
                    ref: t ?? A,
                    style: { backgroundColor: `rgba(136, 85, 255, 0.1)`, ...s },
                    children: l(m.div, {
                      className: `framer-uh2i08`,
                      layoutDependency: k,
                      layoutId: `aM7oiNoFL`,
                      children: [
                        a(w, {
                          className: `framer-flw0dh`,
                          "data-framer-name": `Logo`,
                          layout: `position`,
                          layoutDependency: k,
                          layoutId: `GthLmGmBt`,
                          opacity: 1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g id="ss11036020200_1"><path d="M 0 0 L 28 0 L 28 28 L 0 28 Z" fill="transparent"></path><path d="M 21 7.113 C 21 7.041 21.029 6.971 21.079 6.921 L 27.534 0.465 C 27.613 0.388 27.73 0.365 27.831 0.407 C 27.933 0.449 28 0.548 28 0.658 L 28 13.888 C 28 13.96 27.971 14.028 27.921 14.079 L 21 21 Z M 7 21 L 7 7.658 C 7 7.548 6.933 7.449 6.831 7.407 C 6.73 7.365 6.613 7.388 6.534 7.465 L 0.079 13.921 C 0.028 13.972 0 14.041 0 14.113 L 0 27.728 C 0 27.877 0.122 28 0.273 28 L 13.888 28 C 13.96 28 14.028 27.971 14.079 27.921 L 21 21 Z" fill="rgb(153, 102, 255)"></path></g></svg>`,
                          svgContentId: 11036020200,
                          withExternalLayout: !0,
                        }),
                        l(m.div, {
                          className: `framer-k3ullq`,
                          layoutDependency: k,
                          layoutId: `E3DQBYSAf`,
                          children: [
                            a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItQm9sZA==`,
                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                    "--framer-font-size": `11px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-letter-spacing": `-0.02em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 102, 255))`,
                                  },
                                  children: `Screen Saver`,
                                }),
                              }),
                              className: `framer-q0gs4u`,
                              "data-framer-name": `Title`,
                              fonts: [`Inter-Bold`],
                              layoutDependency: k,
                              layoutId: `UqJwZqJjg`,
                              style: {
                                "--extracted-r6o4lv": `rgb(153, 102, 255)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: p,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--framer-font-size": `11px`,
                                    "--framer-letter-spacing": `-0.03em`,
                                    "--framer-line-height": `1.4em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(153, 102, 255, 0.7))`,
                                  },
                                  children: `Set up the component by adding background and bouncer elements to the component properties.`,
                                }),
                              }),
                              className: `framer-g5dqhc`,
                              "data-framer-name": `Subtitle`,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `RJ7UF99m8`,
                              style: {
                                "--extracted-r6o4lv": `rgba(153, 102, 255, 0.7)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: h,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-q8Ttd.framer-qanqo2, .framer-q8Ttd .framer-qanqo2 { display: block; }`,
          `.framer-q8Ttd.framer-jjcw9a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 200px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 400px; }`,
          `.framer-q8Ttd .framer-uh2i08 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 1px; }`,
          `.framer-q8Ttd .framer-flw0dh { flex: none; height: 28px; position: relative; width: 28px; }`,
          `.framer-q8Ttd .framer-k3ullq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-q8Ttd .framer-q0gs4u, .framer-q8Ttd .framer-g5dqhc { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-q8Ttd.framer-jjcw9a, .framer-q8Ttd .framer-uh2i08, .framer-q8Ttd .framer-k3ullq { gap: 0px; } .framer-q8Ttd.framer-jjcw9a > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-q8Ttd.framer-jjcw9a > :first-child { margin-left: 0px; } .framer-q8Ttd.framer-jjcw9a > :last-child { margin-right: 0px; } .framer-q8Ttd .framer-uh2i08 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-q8Ttd .framer-uh2i08 > :first-child, .framer-q8Ttd .framer-k3ullq > :first-child { margin-top: 0px; } .framer-q8Ttd .framer-uh2i08 > :last-child, .framer-q8Ttd .framer-k3ullq > :last-child { margin-bottom: 0px; } .framer-q8Ttd .framer-k3ullq > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }`,
        ],
        `framer-q8Ttd`
      )),
      (he = me),
      (me.displayName = `Utils/Component Message`),
      (me.defaultProps = { height: 200, width: 400 }),
      D(me, {
        yeAnKbEUZ: {
          defaultValue: `Screen Saver`,
          displayTextArea: !1,
          title: `Title`,
          type: v.String,
        },
        WuF2iG84P: {
          defaultValue: `Set up the component by adding background and bouncer elements to the component properties.`,
          displayTextArea: !1,
          title: `Subtitle`,
          type: v.String,
        },
      }),
      E(
        me,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
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
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  _e,
  ve = e(() => {
    r(),
      i(),
      ge(),
      (_e = ({ title: e, subtitle: t, style: n }) =>
        a(he, {
          yeAnKbEUZ: e,
          WuF2iG84P: t,
          style: { width: `100%`, height: `100%`, ...n },
        }));
  });
function ye({ color: e, width: t, style: n, radius: r = `inherit` }) {
  return !n || !t || t === `0px` || t === `0`
    ? null
    : a(`div`, {
        style: {
          position: `absolute`,
          inset: 0,
          borderColor: e,
          borderWidth: t,
          borderStyle: n,
          borderRadius: r,
          pointerEvents: `none`,
          boxSizing: `border-box`,
        },
      });
}
function J(e) {
  let {
      image: t,
      zoomLevel: n = 1.5,
      style: r,
      sizing: i = `cover`,
      radius: s,
      border: c,
      shadows: u,
    } = e,
    d = o(null),
    [f, p] = ee(!1),
    g = h(1, be),
    _ = h(0, be),
    v = h(0, be),
    y = (e) => {
      if (!d.current || !f) return;
      let t = d.current.getBoundingClientRect(),
        n = g.get();
      if (n <= 1.01) return;
      let r = (e.clientX - t.left) / t.width,
        i = (e.clientY - t.top) / t.height,
        a = (0.5 - r) * t.width * (n - 1),
        o = (0.5 - i) * t.height * (n - 1),
        s = (t.width * (n - 1)) / 2,
        c = (t.height * (n - 1)) / 2,
        l = Math.max(-s, Math.min(s, a)),
        u = Math.max(-c, Math.min(c, o));
      _.set(l), v.set(u);
    },
    b = () => {
      p(!0), g.set(n);
    },
    x = () => {
      p(!1), g.set(1), _.set(0), v.set(0);
    },
    S = (e) => {
      e.preventDefault();
    };
  return t?.src
    ? l(`div`, {
        ref: d,
        style: {
          position: `relative`,
          overflow: `hidden`,
          width: `100%`,
          height: `100%`,
          borderRadius: s,
          boxShadow: u,
          userSelect: `none`,
          ...r,
        },
        onMouseEnter: b,
        onMouseLeave: x,
        onMouseMove: y,
        onDragStart: S,
        children: [
          a(m.div, {
            style: { width: `100%`, height: `100%`, scale: g, x: _, y: v },
            children: a(`img`, {
              src: t.src,
              alt: t.alt || `Zoomable image`,
              style: {
                display: `block`,
                width: `100%`,
                height: `100%`,
                objectFit: i,
                pointerEvents: `none`,
              },
            }),
          }),
          c &&
            a(ye, {
              color: c.color,
              width: c.width,
              style: c.style,
              radius: s,
            }),
        ],
      })
    : a(_e, {
        title: `Image Zoom`,
        subtitle: `Upload an image on the right panel.`,
      });
}
var be,
  xe = e(() => {
    r(),
      i(),
      N(),
      p(),
      ve(),
      (be = { stiffness: 150, damping: 20, mass: 0.5 }),
      D(J, {
        image: { title: `Image`, type: v.ResponsiveImage },
        sizing: {
          title: `Sizing`,
          type: v.Enum,
          defaultValue: `cover`,
          options: [`cover`, `contain`, `fill`],
          optionTitles: [`Fill`, `Fit`, `Stretch`],
        },
        zoomLevel: {
          title: `Zoom Level`,
          type: v.Number,
          defaultValue: 1.5,
          min: 1,
          max: 10,
          step: 0.1,
          unit: `x`,
          displayStepper: !0,
        },
        radius: { title: `Radius`, type: v.BorderRadius, defaultValue: `0px` },
        border: {
          type: v.Object,
          title: `Border`,
          optional: !0,
          controls: {
            color: { type: v.Color, defaultValue: `#000000`, title: `Color` },
            width: { type: v.Padding, defaultValue: `1px`, title: `Width` },
            style: {
              type: v.Enum,
              defaultValue: `solid`,
              options: [`solid`, `dashed`, `dotted`, `double`],
              optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
              title: `Style`,
            },
          },
        },
        shadows: {
          title: `Shadow`,
          type: v.BoxShadow,
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }),
      (J.displayName = `Image Zoom`);
  });
function Y(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne = e(() => {
    r(),
      N(),
      p(),
      i(),
      (Se = [`kg3gP_Z6A`, `R37eyotZt`, `LCQrEeut2`, `cdMco3xq8`]),
      (Ce = `framer-q1q1j`),
      (we = {
        cdMco3xq8: `framer-v-dok5e`,
        kg3gP_Z6A: `framer-v-1uh5y25`,
        LCQrEeut2: `framer-v-wq8v7b`,
        R37eyotZt: `framer-v-14mv3v8`,
      }),
      (Te = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ee = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (De = m.create(u)),
      (Oe = {
        "Variant 1": `kg3gP_Z6A`,
        "Variant 2": `R37eyotZt`,
        "Variant 3": `LCQrEeut2`,
        "Variant 4": `cdMco3xq8`,
      }),
      (ke = ({
        click: e,
        click2: t,
        click3: n,
        height: r,
        id: i,
        width: a,
        ...o
      }) => ({
        ...o,
        FkZkNn8Vt: t ?? o.FkZkNn8Vt,
        KQSEzpqjE: e ?? o.KQSEzpqjE,
        variant: Oe[o.variant] ?? o.variant ?? `kg3gP_Z6A`,
        xwg4_6mae: n ?? o.xwg4_6mae,
      })),
      (Ae = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (je = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z(),
            f = F(),
            {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              KQSEzpqjE: v,
              FkZkNn8Vt: y,
              xwg4_6mae: x,
              ...S
            } = ke(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: N,
              variants: I,
            } = B({
              cycleOrder: Se,
              defaultVariant: `kg3gP_Z6A`,
              ref: i,
              variant: _,
              variantClassNames: we,
            }),
            L = Ae(e, I),
            { activeVariantCallback: R, delay: te } = P(w),
            V = R(async (...e) => {
              N(`kg3gP_Z6A`);
            }),
            H = R(async (...e) => {
              if (v && (await v(...e)) === !1) return !1;
              N(`R37eyotZt`);
            }),
            ne = R(async (...e) => {
              if (y && (await y(...e)) === !1) return !1;
              N(`LCQrEeut2`);
            }),
            re = R(async (...e) => {
              if (x && (await x(...e)) === !1) return !1;
              N(`cdMco3xq8`);
            }),
            ie = O(Ce),
            U = () => ![`LCQrEeut2`, `cdMco3xq8`].includes(w),
            ae = () => !![`LCQrEeut2`, `cdMco3xq8`].includes(w);
          return a(d, {
            id: g ?? s,
            children: a(De, {
              animate: I,
              initial: !1,
              children: a(Ee, {
                value: Te,
                children: l(m.div, {
                  ...S,
                  ...D,
                  className: O(ie, `framer-1uh5y25`, h, T),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: L,
                  layoutId: `kg3gP_Z6A`,
                  ref: i,
                  style: { ...p },
                  ...Y(
                    {
                      cdMco3xq8: { "data-framer-name": `Variant 4` },
                      LCQrEeut2: { "data-framer-name": `Variant 3` },
                      R37eyotZt: { "data-framer-name": `Variant 2` },
                    },
                    w,
                    k
                  ),
                  children: [
                    l(m.div, {
                      className: `framer-ujohdc`,
                      layoutDependency: L,
                      layoutId: `lKirfb0LE`,
                      children: [
                        U() &&
                          a(m.div, {
                            className: `framer-xj0fay`,
                            "data-border": !0,
                            "data-framer-name": `Highlighter`,
                            layoutDependency: L,
                            layoutId: `vOJuVn1bG`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(36, 44, 79)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(9, 14, 28)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                            },
                            variants: {
                              R37eyotZt: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgb(25, 30, 41)`,
                                boxShadow: `none`,
                              },
                            },
                            ...Y(
                              { R37eyotZt: { "data-highlight": !0, onTap: V } },
                              w,
                              k
                            ),
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                  },
                                  children: `Landing Page`,
                                }),
                              }),
                              className: `framer-3r518x`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `BRPElBFel`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              variants: {
                                R37eyotZt: {
                                  "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Y(
                                {
                                  R37eyotZt: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `-0.2px`,
                                          "--framer-line-height": `10px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Landing Page`,
                                      }),
                                    }),
                                  },
                                },
                                w,
                                k
                              ),
                            }),
                          }),
                        a(m.div, {
                          className: `framer-1b7na1v`,
                          "data-framer-name": `Highlighter`,
                          "data-highlight": !0,
                          layoutDependency: L,
                          layoutId: `CmWP5oCeC`,
                          onTap: H,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `rgba(0, 0, 0, 0)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            backgroundColor: `rgb(25, 30, 41)`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            boxShadow: `none`,
                          },
                          variants: {
                            cdMco3xq8: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              boxShadow: `none`,
                            },
                            LCQrEeut2: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              boxShadow: `none`,
                            },
                            R37eyotZt: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(36, 44, 79)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(9, 14, 28)`,
                              boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                            },
                          },
                          ...Y({ R37eyotZt: { "data-border": !0 } }, w, k),
                          children: a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-size": `12px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.2px`,
                                  "--framer-line-height": `10px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                },
                                children: `Details`,
                              }),
                            }),
                            className: `framer-1vl52sg`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Geist-500`],
                            layoutDependency: L,
                            layoutId: `dDgqghL9n`,
                            style: {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              R37eyotZt: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                R37eyotZt: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.2px`,
                                        "--framer-line-height": `10px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                      },
                                      children: `Details`,
                                    }),
                                  }),
                                },
                              },
                              w,
                              k
                            ),
                          }),
                        }),
                        a(m.div, {
                          className: `framer-brktdc`,
                          "data-framer-name": `Highlighter`,
                          "data-highlight": !0,
                          layoutDependency: L,
                          layoutId: `MmBtyFvsY`,
                          onTap: ne,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `rgba(0, 0, 0, 0)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            backgroundColor: `rgb(25, 30, 41)`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            boxShadow: `none`,
                          },
                          variants: {
                            cdMco3xq8: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              boxShadow: `none`,
                            },
                            LCQrEeut2: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(36, 44, 79)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(9, 14, 28)`,
                              boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                            },
                          },
                          ...Y({ LCQrEeut2: { "data-border": !0 } }, w, k),
                          children: a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-size": `12px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.2px`,
                                  "--framer-line-height": `10px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                },
                                children: `Collections- View`,
                              }),
                            }),
                            className: `framer-1ql706o`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Geist-500`],
                            layoutDependency: L,
                            layoutId: `BIYqADliu`,
                            style: {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              LCQrEeut2: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                LCQrEeut2: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.2px`,
                                        "--framer-line-height": `10px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                      },
                                      children: `Collections- View`,
                                    }),
                                  }),
                                },
                              },
                              w,
                              k
                            ),
                          }),
                        }),
                        a(m.div, {
                          className: `framer-gsv3vu`,
                          "data-framer-name": `Highlighter`,
                          "data-highlight": !0,
                          layoutDependency: L,
                          layoutId: `PMRkUm_qZ`,
                          onTap: re,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `rgba(0, 0, 0, 0)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            backgroundColor: `rgb(25, 30, 41)`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            boxShadow: `none`,
                          },
                          variants: {
                            cdMco3xq8: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(36, 44, 79)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(9, 14, 28)`,
                              boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                            },
                          },
                          ...Y({ cdMco3xq8: { "data-border": !0 } }, w, k),
                          children: a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-size": `12px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.2px`,
                                  "--framer-line-height": `10px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                },
                                children: `Collections- Create`,
                              }),
                            }),
                            className: `framer-5tp7dn`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Geist-500`],
                            layoutDependency: L,
                            layoutId: `BnXKBw25f`,
                            style: {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              cdMco3xq8: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...Y(
                              {
                                cdMco3xq8: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.2px`,
                                        "--framer-line-height": `10px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                      },
                                      children: `Collections- Create`,
                                    }),
                                  }),
                                },
                              },
                              w,
                              k
                            ),
                          }),
                        }),
                        ae() &&
                          a(m.div, {
                            className: `framer-1wy9h6m`,
                            "data-framer-name": `Highlighter`,
                            layoutDependency: L,
                            layoutId: `OW_1JxGih`,
                            style: {
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            ...Y(
                              {
                                cdMco3xq8: { "data-highlight": !0, onTap: V },
                                LCQrEeut2: { "data-highlight": !0, onTap: V },
                              },
                              w,
                              k
                            ),
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `Landing Page`,
                                }),
                              }),
                              className: `framer-dluyme`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `bjLIS5tXH`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                      ],
                    }),
                    a(b, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 2480,
                        intrinsicWidth: 5584,
                        loading: M(
                          (f?.y || 0) +
                            0 +
                            (((f?.height || 571) -
                              0 -
                              (40 + ((f?.height || 571) - 0) * 0.9124 + 10)) /
                              2 +
                              40 +
                              10)
                        ),
                        pixelHeight: 2955,
                        pixelWidth: 5426,
                        sizes: `961px`,
                        src: `https://framerusercontent.com/images/MXT5CVAydTomQoyBpF97r8po2k.png`,
                        srcSet: `https://framerusercontent.com/images/MXT5CVAydTomQoyBpF97r8po2k.png?scale-down-to=512 512w,https://framerusercontent.com/images/MXT5CVAydTomQoyBpF97r8po2k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MXT5CVAydTomQoyBpF97r8po2k.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/MXT5CVAydTomQoyBpF97r8po2k.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/MXT5CVAydTomQoyBpF97r8po2k.png 5426w`,
                      },
                      className: `framer-1axwaix`,
                      "data-framer-name": `Image`,
                      layoutDependency: L,
                      layoutId: `Abt2njtt_`,
                      ...Y(
                        {
                          cdMco3xq8: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 2480,
                              intrinsicWidth: 5584,
                              loading: M(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 571) -
                                    0 -
                                    (40 +
                                      ((f?.height || 571) - 0) * 0.9124 +
                                      10)) /
                                    2 +
                                    40 +
                                    10)
                              ),
                              pixelHeight: 3006,
                              pixelWidth: 5520,
                              sizes: `961px`,
                              src: `https://framerusercontent.com/images/q7Aw2LUJm8b04QcfjkhQmDxpvg.png`,
                              srcSet: `https://framerusercontent.com/images/q7Aw2LUJm8b04QcfjkhQmDxpvg.png?scale-down-to=512 512w,https://framerusercontent.com/images/q7Aw2LUJm8b04QcfjkhQmDxpvg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/q7Aw2LUJm8b04QcfjkhQmDxpvg.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/q7Aw2LUJm8b04QcfjkhQmDxpvg.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/q7Aw2LUJm8b04QcfjkhQmDxpvg.png 5520w`,
                            },
                          },
                          LCQrEeut2: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 2480,
                              intrinsicWidth: 5584,
                              loading: M(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 571) -
                                    0 -
                                    (40 +
                                      ((f?.height || 571) - 0) * 0.9124 +
                                      10)) /
                                    2 +
                                    40 +
                                    10)
                              ),
                              pixelHeight: 3006,
                              pixelWidth: 5520,
                              sizes: `961px`,
                              src: `https://framerusercontent.com/images/Wu3JlWb50yf79GBIJliW2xPfNU.png`,
                              srcSet: `https://framerusercontent.com/images/Wu3JlWb50yf79GBIJliW2xPfNU.png?scale-down-to=512 512w,https://framerusercontent.com/images/Wu3JlWb50yf79GBIJliW2xPfNU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Wu3JlWb50yf79GBIJliW2xPfNU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/Wu3JlWb50yf79GBIJliW2xPfNU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/Wu3JlWb50yf79GBIJliW2xPfNU.png 5520w`,
                            },
                          },
                          R37eyotZt: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 2480,
                              intrinsicWidth: 5584,
                              loading: M(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 571) -
                                    0 -
                                    (40 +
                                      ((f?.height || 571) - 0) * 0.9124 +
                                      10)) /
                                    2 +
                                    40 +
                                    10)
                              ),
                              pixelHeight: 3006,
                              pixelWidth: 5520,
                              sizes: `961px`,
                              src: `https://framerusercontent.com/images/TFQDZNYtOvUDhBGs0Irrosyao.png`,
                              srcSet: `https://framerusercontent.com/images/TFQDZNYtOvUDhBGs0Irrosyao.png?scale-down-to=512 512w,https://framerusercontent.com/images/TFQDZNYtOvUDhBGs0Irrosyao.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/TFQDZNYtOvUDhBGs0Irrosyao.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/TFQDZNYtOvUDhBGs0Irrosyao.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/TFQDZNYtOvUDhBGs0Irrosyao.png 5520w`,
                            },
                          },
                        },
                        w,
                        k
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-q1q1j.framer-1c2xd9x, .framer-q1q1j .framer-1c2xd9x { display: block; }`,
          `.framer-q1q1j.framer-1uh5y25 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 571px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 960px; }`,
          `.framer-q1q1j .framer-ujohdc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 960px; }`,
          `.framer-q1q1j .framer-xj0fay { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q1q1j .framer-3r518x, .framer-q1q1j .framer-1vl52sg, .framer-q1q1j .framer-1ql706o, .framer-q1q1j .framer-5tp7dn, .framer-q1q1j .framer-dluyme { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-q1q1j .framer-1b7na1v, .framer-q1q1j .framer-brktdc, .framer-q1q1j .framer-gsv3vu { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 15px; position: relative; width: min-content; }`,
          `.framer-q1q1j .framer-1wy9h6m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 15px; position: relative; width: min-content; }`,
          `.framer-q1q1j .framer-1axwaix { flex: none; height: 91%; overflow: visible; position: relative; width: 961px; }`,
          `.framer-q1q1j.framer-v-14mv3v8 .framer-xj0fay { align-content: center; align-items: center; cursor: pointer; flex-direction: row; overflow: visible; will-change: unset; }`,
          `.framer-q1q1j.framer-v-14mv3v8 .framer-1b7na1v { align-content: flex-start; align-items: flex-start; flex-direction: column; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q1q1j.framer-v-wq8v7b .framer-1b7na1v, .framer-q1q1j.framer-v-dok5e .framer-1b7na1v { order: 2; }`,
          `.framer-q1q1j.framer-v-wq8v7b .framer-brktdc { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 3; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q1q1j.framer-v-wq8v7b .framer-gsv3vu { order: 4; }`,
          `.framer-q1q1j.framer-v-wq8v7b .framer-1wy9h6m, .framer-q1q1j.framer-v-dok5e .framer-1wy9h6m { cursor: pointer; order: 0; }`,
          `.framer-q1q1j.framer-v-dok5e .framer-brktdc { order: 3; }`,
          `.framer-q1q1j.framer-v-dok5e .framer-gsv3vu { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 4; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q1q1j[data-border="true"]::after, .framer-q1q1j [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-q1q1j`
      )),
      (Me = je),
      (je.displayName = `Learner's wire`),
      (je.defaultProps = { height: 571, width: 960 }),
      D(je, {
        variant: {
          options: [`kg3gP_Z6A`, `R37eyotZt`, `LCQrEeut2`, `cdMco3xq8`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: v.Enum,
        },
        KQSEzpqjE: { title: `Click`, type: v.EventHandler },
        FkZkNn8Vt: { title: `Click 2`, type: v.EventHandler },
        xwg4_6mae: { title: `Click 3`, type: v.EventHandler },
      }),
      E(
        je,
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
function Pe(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge = e(() => {
    r(),
      N(),
      p(),
      i(),
      (Fe = { gmOiorwVJ: { hover: !0, pressed: !0 } }),
      (Ie = `framer-0NtUH`),
      (Le = { gmOiorwVJ: `framer-v-arx37p` }),
      (Re = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ze = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Be = m.create(u)),
      (Ve = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        RGrvSt1mz: n ?? a.RGrvSt1mz,
        YV6gG4UC4: r ?? a.YV6gG4UC4 ?? `Current Challenges`,
      })),
      (He = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Ue = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z();
          F();
          let {
              style: f,
              className: p,
              layoutId: h,
              variant: g,
              YV6gG4UC4: _,
              RGrvSt1mz: v,
              ...y
            } = Ve(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = B({
              defaultVariant: `gmOiorwVJ`,
              enabledGestures: Fe,
              ref: i,
              variant: g,
              variantClassNames: Le,
            }),
            N = He(e, M),
            P = O(Ie);
          return a(d, {
            id: h ?? s,
            children: a(Be, {
              animate: M,
              initial: !1,
              children: a(ze, {
                value: Re,
                children: a(x, {
                  href: v,
                  motionChild: !0,
                  nodeId: `gmOiorwVJ`,
                  openInNewTab: !1,
                  scopeId: `gNo00vZzS`,
                  children: l(m.a, {
                    ...y,
                    ...E,
                    className: `${O(P, `framer-arx37p`, p, S)} framer-dzt13r`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: N,
                    layoutId: `gmOiorwVJ`,
                    ref: i,
                    style: {
                      backgroundColor: `rgba(255, 255, 255, 0.08)`,
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      ...f,
                    },
                    variants: {
                      "gmOiorwVJ-hover": {
                        backgroundColor: `rgba(255, 255, 255, 0.16)`,
                      },
                      "gmOiorwVJ-pressed": {
                        backgroundColor: `rgba(255, 255, 255, 0.16)`,
                      },
                    },
                    ...Pe(
                      {
                        "gmOiorwVJ-hover": { "data-framer-name": void 0 },
                        "gmOiorwVJ-pressed": { "data-framer-name": void 0 },
                      },
                      b,
                      D
                    ),
                    children: [
                      a(C, {
                        __fromCanvasComponent: !0,
                        children: a(u, {
                          children: a(m.p, {
                            style: {
                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                              "--framer-font-size": `12px`,
                              "--framer-font-weight": `500`,
                              "--framer-line-height": `1.4em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              "--framer-text-decoration-color": `rgb(105, 105, 105)`,
                              "--framer-text-decoration-offset": `2.5px`,
                              "--framer-text-decoration-thickness": `1px`,
                              "--framer-text-transform": `inherit`,
                            },
                            children: `Current Challenges`,
                          }),
                        }),
                        className: `framer-196x3l6`,
                        "data-framer-name": `Paragraph`,
                        fonts: [`GF;Geist-500`],
                        layoutDependency: N,
                        layoutId: `Z__4MsCMr`,
                        style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                        text: _,
                        variants: {
                          "gmOiorwVJ-pressed": {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Pe(
                          {
                            "gmOiorwVJ-pressed": {
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-line-height": `1.4em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                    "--framer-text-decoration-color": `rgb(105, 105, 105)`,
                                    "--framer-text-decoration-offset": `2.5px`,
                                    "--framer-text-decoration-thickness": `1px`,
                                    "--framer-text-transform": `inherit`,
                                  },
                                  children: `Current Challenges`,
                                }),
                              }),
                            },
                          },
                          b,
                          D
                        ),
                      }),
                      l(w, {
                        className: `framer-1l1fpbn`,
                        layoutDependency: N,
                        layoutId: `PK9QvrE0M`,
                        opacity: 1,
                        requiresOverflowVisible: !0,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 8" overflow="visible"><g><path d="M 7 1 L 0 8" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 1.333 0.125 C 1.333 0.125 6.699 -0.327 7.513 0.487 C 8.327 1.301 7.875 6.667 7.875 6.667" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                        withExternalLayout: !0,
                        ...Pe(
                          {
                            "gmOiorwVJ-pressed": {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 8" overflow="visible"><g><path d="M 7 1 L 0 8" fill="transparent" stroke-width="1.5" stroke="rgba(255, 255, 255, 0.6)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 1.333 0.125 C 1.333 0.125 6.699 -0.327 7.513 0.487 C 8.327 1.301 7.875 6.667 7.875 6.667" fill="transparent" stroke-width="1.5" stroke="rgba(255, 255, 255, 0.6)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                            },
                          },
                          b,
                          D
                        ),
                        children: [
                          a(w, {
                            className: `framer-fhuun0`,
                            layoutDependency: N,
                            layoutId: `Jf_frYoA_`,
                            opacity: 1,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 7" overflow="visible"><path d="M 7 0 L 0 7" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                            withExternalLayout: !0,
                            ...Pe(
                              {
                                "gmOiorwVJ-pressed": {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 7" overflow="visible"><path d="M 7 0 L 0 7" fill="transparent" stroke-width="1.5" stroke="rgba(255, 255, 255, 0.6)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                },
                              },
                              b,
                              D
                            ),
                          }),
                          a(w, {
                            className: `framer-16usofb`,
                            layoutDependency: N,
                            layoutId: `OjgvBZ6de`,
                            opacity: 1,
                            requiresOverflowVisible: !0,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.667 6.667" overflow="visible"><path d="M 0 0.125 C 0 0.125 5.365 -0.327 6.18 0.487 C 6.993 1.301 6.541 6.667 6.541 6.667" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                            withExternalLayout: !0,
                            ...Pe(
                              {
                                "gmOiorwVJ-pressed": {
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.667 6.667" overflow="visible"><path d="M 0 0.125 C 0 0.125 5.365 -0.327 6.18 0.487 C 6.993 1.301 6.541 6.667 6.541 6.667" fill="transparent" stroke-width="1.5" stroke="rgba(255, 255, 255, 0.6)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                },
                              },
                              b,
                              D
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0NtUH.framer-dzt13r, .framer-0NtUH .framer-dzt13r { display: block; }`,
          `.framer-0NtUH.framer-arx37p { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 10px 6px 10px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-0NtUH .framer-196x3l6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-0NtUH .framer-1l1fpbn { height: 8px; position: relative; width: 8px; }`,
          `.framer-0NtUH .framer-fhuun0 { height: 7px; left: 0px; position: absolute; top: 1px; width: 7px; }`,
          `.framer-0NtUH .framer-16usofb { height: 7px; left: 2px; position: absolute; top: 0px; width: 7px; }`,
        ],
        `framer-0NtUH`
      )),
      (We = Ue),
      (Ue.displayName = `Link Btn`),
      (Ue.defaultProps = { height: 29, width: 146 }),
      D(Ue, {
        YV6gG4UC4: {
          defaultValue: `Current Challenges`,
          displayTextArea: !1,
          title: `Title`,
          type: v.String,
        },
        RGrvSt1mz: { title: `Link`, type: v.Link },
      }),
      E(
        Ue,
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
function Ke(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it = e(() => {
    r(),
      N(),
      p(),
      i(),
      (qe = [`g5sScXvmb`, `egEDNKzzv`]),
      (Je = `framer-FDjZy`),
      (Ye = { egEDNKzzv: `framer-v-1p381hv`, g5sScXvmb: `framer-v-1abog7d` }),
      (Xe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ze = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Qe = m.create(u)),
      ($e = { "Variant 1": `g5sScXvmb`, "Variant 2": `egEDNKzzv` }),
      (et = ({ height: e, id: t, text2: n, title: r, width: i, ...a }) => ({
        ...a,
        Hldsy7RD3: r ?? a.Hldsy7RD3 ?? `Key point`,
        P3t7CVzCD:
          n ??
          a.P3t7CVzCD ??
          `We revisited the IA to evaluate the purpose of each module, eliminate duplicate solutions, and ensure we deliver the most effective experience for users.`,
        variant: $e[a.variant] ?? a.variant ?? `g5sScXvmb`,
      })),
      (tt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (nt = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z();
          F();
          let {
              style: f,
              className: p,
              layoutId: h,
              variant: g,
              Hldsy7RD3: _,
              P3t7CVzCD: v,
              ...y
            } = et(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: k,
              variants: A,
            } = B({
              cycleOrder: qe,
              defaultVariant: `g5sScXvmb`,
              ref: i,
              variant: g,
              variantClassNames: Ye,
            }),
            j = tt(e, A),
            M = O(Je);
          return a(d, {
            id: h ?? s,
            children: a(Qe, {
              animate: A,
              initial: !1,
              children: a(Ze, {
                value: Xe,
                children: l(m.div, {
                  ...y,
                  ...w,
                  className: O(M, `framer-1abog7d`, p, x),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `g5sScXvmb`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(255, 255, 255, 0.07)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgb(3, 13, 38)`,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    boxShadow: `12px 16px 24px 0px rgba(0, 0, 0, 0.18)`,
                    ...f,
                  },
                  variants: {
                    egEDNKzzv: { backgroundColor: `rgb(30, 3, 38)` },
                  },
                  ...Ke(
                    { egEDNKzzv: { "data-framer-name": `Variant 2` } },
                    b,
                    T
                  ),
                  children: [
                    l(m.div, {
                      className: `framer-utkqd9`,
                      "data-framer-name": `Pin`,
                      layoutDependency: j,
                      layoutId: `afop4uxea`,
                      children: [
                        a(m.div, {
                          className: `framer-mhf8wl`,
                          layoutDependency: j,
                          layoutId: `NLlxjGJ2i`,
                          style: {
                            background: `radial-gradient(50% 50% at 45.300000000000004% 44.4%, rgb(81, 171, 245) 0%, rgb(81, 133, 245) 56.229268214120744%, rgb(71, 136, 255) 77%, rgb(9, 85, 148) 100%)`,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            boxShadow: `8px 6px 12px -1px rgba(58, 96, 232, 0.16)`,
                          },
                          variants: {
                            egEDNKzzv: {
                              background: `radial-gradient(50% 50% at 45.300000000000004% 44.4%, rgb(244, 207, 255) 0%, rgb(85, 19, 105) 56.229268214120744%, rgb(183, 39, 227) 77%, rgb(106, 8, 135) 100%)`,
                              boxShadow: `8px 6px 12px -1px rgba(221, 16, 232, 0.16)`,
                            },
                          },
                          children: a(m.div, {
                            className: `framer-o5wmji`,
                            layoutDependency: j,
                            layoutId: `p8rQsapXI`,
                            style: {
                              background: `linear-gradient(150deg, rgba(44, 136, 201, 0) 24%, rgb(9, 53, 148) 85%)`,
                              borderBottomLeftRadius: 15,
                              borderBottomRightRadius: 15,
                              borderTopLeftRadius: 15,
                              borderTopRightRadius: 15,
                              boxShadow: `inset -1px 1px 2px 0px rgba(11, 26, 71, 0.6)`,
                            },
                            variants: {
                              egEDNKzzv: {
                                background: `linear-gradient(150deg, rgb(209, 116, 237) 24%, rgb(127, 18, 161) 80%)`,
                                boxShadow: `inset -1px 1px 2px 0px rgba(125, 32, 153, 0.6)`,
                              },
                            },
                          }),
                        }),
                        a(m.div, {
                          className: `framer-e2erv4`,
                          layoutDependency: j,
                          layoutId: `v4lKq8iy7`,
                          style: {
                            background: `radial-gradient(50% 50% at 45.300000000000004% 44.4%, rgb(81, 171, 245) 0%, rgb(81, 133, 245) 56.229268214120744%, rgb(71, 136, 255) 77%, rgb(9, 85, 148) 100%)`,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            boxShadow: `8px 6px 12px -1px rgba(58, 102, 232, 0.16)`,
                          },
                          variants: {
                            egEDNKzzv: {
                              background: `radial-gradient(50% 50% at 45.300000000000004% 44.4%, rgb(255, 255, 255) 0%, rgb(236, 173, 255) 56.229268214120744%, rgb(220, 107, 255) 77%, rgb(132, 12, 168) 100%)`,
                            },
                          },
                        }),
                        a(m.div, {
                          className: `framer-c5zjji`,
                          layoutDependency: j,
                          layoutId: `Y2l3TSp4v`,
                          style: {
                            background: `linear-gradient(153deg, rgb(114, 161, 247) 12%, rgb(42, 67, 250) 90%)`,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            boxShadow: `inset 2px 1px 2px 0px rgb(89, 118, 247)`,
                          },
                          variants: {
                            egEDNKzzv: {
                              background: `linear-gradient(153deg, rgb(238, 181, 255) 12%, rgb(194, 43, 240) 90%)`,
                              boxShadow: `inset 2px 1px 2px 0px rgb(182, 69, 217)`,
                            },
                          },
                        }),
                      ],
                    }),
                    a(m.div, {
                      className: `framer-n0mpvy`,
                      layoutDependency: j,
                      layoutId: `Mx4JmiRJH`,
                      style: {
                        backgroundColor: `rgb(7, 22, 56)`,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      variants: {
                        egEDNKzzv: { backgroundColor: `rgb(63, 17, 77)` },
                      },
                      children: l(m.div, {
                        className: `framer-53zu0j`,
                        "data-framer-name": `Title/Tag`,
                        layoutDependency: j,
                        layoutId: `jxf9DHhYC`,
                        children: [
                          a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-size": `19px`,
                                  "--framer-font-weight": `600`,
                                  "--framer-letter-spacing": `-0.4px`,
                                  "--framer-line-height": `21px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))`,
                                },
                                children: `Key point`,
                              }),
                            }),
                            className: `framer-hmz01d`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Geist-600`],
                            layoutDependency: j,
                            layoutId: `Z7v8_KANz`,
                            style: {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.8)`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: _,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-letter-spacing": `-0.4px`,
                                  "--framer-line-height": `21px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.5))`,
                                },
                                children: `We revisited the IA to evaluate the purpose of each module, eliminate duplicate solutions, and ensure we deliver the most effective experience for users.`,
                              }),
                            }),
                            className: `framer-qnir8q`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Geist-regular`],
                            layoutDependency: j,
                            layoutId: `QFQNjV35s`,
                            style: {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.5)`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
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
          `.framer-FDjZy.framer-v5ejyw, .framer-FDjZy .framer-v5ejyw { display: block; }`,
          `.framer-FDjZy.framer-1abog7d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: 250px; }`,
          `.framer-FDjZy .framer-utkqd9 { flex: none; height: 34px; overflow: visible; position: relative; width: 32px; }`,
          `.framer-FDjZy .framer-mhf8wl { bottom: 0px; flex: none; height: 30px; overflow: hidden; position: absolute; right: 0px; width: 30px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FDjZy .framer-o5wmji { flex: none; height: 22px; left: calc(46.66666666666669% - 22px / 2); overflow: hidden; position: absolute; top: 2px; width: 22px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FDjZy .framer-e2erv4 { flex: none; height: 22px; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 22px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FDjZy .framer-c5zjji { flex: none; height: 16px; left: 2px; overflow: hidden; position: absolute; top: 2px; width: 16px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FDjZy .framer-n0mpvy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FDjZy .framer-53zu0j { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 6px 6px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-FDjZy .framer-hmz01d, .framer-FDjZy .framer-qnir8q { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-FDjZy[data-border="true"]::after, .framer-FDjZy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-FDjZy`
      )),
      (rt = nt),
      (nt.displayName = `Pin Card`),
      (nt.defaultProps = { height: 284, width: 250 }),
      D(nt, {
        variant: {
          options: [`g5sScXvmb`, `egEDNKzzv`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: v.Enum,
        },
        Hldsy7RD3: {
          defaultValue: `Key point`,
          displayTextArea: !1,
          title: `Title`,
          type: v.String,
        },
        P3t7CVzCD: {
          defaultValue: `We revisited the IA to evaluate the purpose of each module, eliminate duplicate solutions, and ensure we deliver the most effective experience for users.`,
          description: ``,
          displayTextArea: !0,
          title: `Text 2`,
          type: v.String,
        },
      }),
      E(
        nt,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Geist`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2`,
                weight: `600`,
              },
              {
                family: `Geist`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function X(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt = e(() => {
    r(),
      N(),
      p(),
      i(),
      (at = [`flC5aKWFQ`, `lj2bcRlQV`, `sYq8gHixR`, `rTL_Q9mlz`, `z8AN624oB`]),
      (ot = `framer-q77JX`),
      (st = {
        flC5aKWFQ: `framer-v-13hncf9`,
        lj2bcRlQV: `framer-v-mmsgkk`,
        rTL_Q9mlz: `framer-v-16aei2`,
        sYq8gHixR: `framer-v-1vni2d`,
        z8AN624oB: `framer-v-1ta2gke`,
      }),
      (ct = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (lt = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (ut = m.create(u)),
      (dt = {
        "Variant 1": `flC5aKWFQ`,
        "Variant 2": `lj2bcRlQV`,
        "Variant 3": `sYq8gHixR`,
        "Variant 4": `rTL_Q9mlz`,
        "Variant 5": `z8AN624oB`,
      }),
      (ft = ({
        click: e,
        click2: t,
        click3: n,
        height: r,
        id: i,
        width: a,
        ...o
      }) => ({
        ...o,
        HMltuWSfi: e ?? o.HMltuWSfi,
        variant: dt[o.variant] ?? o.variant ?? `flC5aKWFQ`,
        YZ8pJAC4w: n ?? o.YZ8pJAC4w,
        Znb9LCFYl: t ?? o.Znb9LCFYl,
      })),
      (pt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (mt = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z(),
            f = F(),
            {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              HMltuWSfi: v,
              Znb9LCFYl: y,
              YZ8pJAC4w: x,
              ...S
            } = ft(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: N,
              variants: I,
            } = B({
              cycleOrder: at,
              defaultVariant: `flC5aKWFQ`,
              ref: i,
              variant: _,
              variantClassNames: st,
            }),
            L = pt(e, I),
            { activeVariantCallback: R, delay: te } = P(w),
            V = R(async (...e) => {
              N(`flC5aKWFQ`);
            }),
            H = R(async (...e) => {
              N(`lj2bcRlQV`);
            }),
            ne = R(async (...e) => {
              N(`sYq8gHixR`);
            }),
            re = R(async (...e) => {
              N(`rTL_Q9mlz`);
            }),
            ie = R(async (...e) => {
              if (v && (await v(...e)) === !1) return !1;
            }),
            U = R(async (...e) => {
              if (v && (await v(...e)) === !1) return !1;
              N(`rTL_Q9mlz`);
            }),
            ae = R(async (...e) => {
              if (y && (await y(...e)) === !1) return !1;
            }),
            oe = R(async (...e) => {
              if (y && (await y(...e)) === !1) return !1;
              N(`lj2bcRlQV`);
            }),
            se = R(async (...e) => {
              if (x && (await x(...e)) === !1) return !1;
            }),
            W = R(async (...e) => {
              if (x && (await x(...e)) === !1) return !1;
              N(`z8AN624oB`);
            }),
            ce = R(async (...e) => {
              N(`z8AN624oB`);
            }),
            le = R(async (...e) => {
              if (v && (await v(...e)) === !1) return !1;
              N(`sYq8gHixR`);
            }),
            G = O(ot),
            ue = () => ![`sYq8gHixR`, `rTL_Q9mlz`, `z8AN624oB`].includes(w),
            K = () => !![`sYq8gHixR`, `z8AN624oB`].includes(w),
            q = () => !![`sYq8gHixR`, `rTL_Q9mlz`, `z8AN624oB`].includes(w),
            de = () => w === `lj2bcRlQV`,
            fe = () =>
              ![`lj2bcRlQV`, `sYq8gHixR`, `rTL_Q9mlz`, `z8AN624oB`].includes(w),
            pe = () => w === `sYq8gHixR`,
            me = () => !![`rTL_Q9mlz`, `z8AN624oB`].includes(w),
            he = () => w === `rTL_Q9mlz`;
          return a(d, {
            id: g ?? s,
            children: a(ut, {
              animate: I,
              initial: !1,
              children: a(lt, {
                value: ct,
                children: l(m.div, {
                  ...S,
                  ...D,
                  className: O(G, `framer-13hncf9`, h, T),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: L,
                  layoutId: `flC5aKWFQ`,
                  ref: i,
                  style: { ...p },
                  ...X(
                    {
                      lj2bcRlQV: { "data-framer-name": `Variant 2` },
                      rTL_Q9mlz: { "data-framer-name": `Variant 4` },
                      sYq8gHixR: { "data-framer-name": `Variant 3` },
                      z8AN624oB: { "data-framer-name": `Variant 5` },
                    },
                    w,
                    k
                  ),
                  children: [
                    l(m.div, {
                      className: `framer-o68ac8`,
                      layoutDependency: L,
                      layoutId: `j0PldWe_r`,
                      children: [
                        a(m.div, {
                          className: `framer-1qxku7x`,
                          "data-border": !0,
                          "data-framer-name": `Highlighter`,
                          layoutDependency: L,
                          layoutId: `sxH4QV7uW`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(36, 44, 79)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `rgb(9, 14, 28)`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                          },
                          variants: {
                            lj2bcRlQV: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              backgroundColor: `rgb(25, 30, 41)`,
                              boxShadow: `none`,
                            },
                            rTL_Q9mlz: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              backgroundColor: `rgb(25, 30, 41)`,
                              boxShadow: `none`,
                            },
                            sYq8gHixR: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              backgroundColor: `rgb(25, 30, 41)`,
                              boxShadow: `none`,
                            },
                            z8AN624oB: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              backgroundColor: `rgb(25, 30, 41)`,
                              boxShadow: `none`,
                            },
                          },
                          ...X(
                            {
                              lj2bcRlQV: { "data-highlight": !0, onTap: V },
                              sYq8gHixR: { "data-highlight": !0, onTap: V },
                              z8AN624oB: { "data-highlight": !0, onTap: V },
                            },
                            w,
                            k
                          ),
                          children: a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-size": `12px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `0.2px`,
                                  "--framer-line-height": `10px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                },
                                children: `Landing Page`,
                              }),
                            }),
                            className: `framer-eiyw36`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Geist-500`],
                            layoutDependency: L,
                            layoutId: `KbYXsTfyf`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              lj2bcRlQV: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              },
                              rTL_Q9mlz: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              },
                              sYq8gHixR: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              },
                              z8AN624oB: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...X(
                              {
                                lj2bcRlQV: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `-0.2px`,
                                        "--framer-line-height": `10px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `Landing Page`,
                                    }),
                                  }),
                                },
                                rTL_Q9mlz: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `-0.2px`,
                                        "--framer-line-height": `10px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `Landing Page`,
                                    }),
                                  }),
                                },
                                sYq8gHixR: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `-0.2px`,
                                        "--framer-line-height": `10px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `Landing Page`,
                                    }),
                                  }),
                                },
                                z8AN624oB: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `-0.2px`,
                                        "--framer-line-height": `10px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `Landing Page`,
                                    }),
                                  }),
                                },
                              },
                              w,
                              k
                            ),
                          }),
                        }),
                        ue() &&
                          a(m.div, {
                            className: `framer-1vhzxyw`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `q8Kepte6O`,
                            onTap: H,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `rgba(0, 0, 0, 0)`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `none`,
                            },
                            variants: {
                              lj2bcRlQV: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backgroundColor: `rgb(9, 14, 28)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                              },
                            },
                            ...X({ lj2bcRlQV: { "data-border": !0 } }, w, k),
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `Create`,
                                }),
                              }),
                              className: `framer-1v9pj42`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `KXRpKyGVA`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              variants: {
                                lj2bcRlQV: {
                                  "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  lj2bcRlQV: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.2px`,
                                          "--framer-line-height": `10px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                        },
                                        children: `Create`,
                                      }),
                                    }),
                                  },
                                },
                                w,
                                k
                              ),
                            }),
                          }),
                        ue() &&
                          a(m.div, {
                            className: `framer-ezwqvu`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `Z43JTr7NI`,
                            onTap: ne,
                            style: {
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `Add Content`,
                                }),
                              }),
                              className: `framer-1m9vvlw`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `uzs6GLxcg`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ue() &&
                          a(m.div, {
                            className: `framer-1yiddqy`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `PuHykgZYN`,
                            onTap: re,
                            style: {
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `Details `,
                                }),
                              }),
                              className: `framer-1fw0t99`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `bay5gNzAn`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        K() &&
                          a(m.div, {
                            className: `framer-gblgux`,
                            "data-border": !0,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `reCYPqsWE`,
                            onTap: ie,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(36, 44, 79)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(9, 14, 28)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                            },
                            variants: {
                              sYq8gHixR: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgb(25, 30, 41)`,
                                boxShadow: `none`,
                              },
                              z8AN624oB: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `rgb(25, 30, 41)`,
                                boxShadow: `none`,
                              },
                            },
                            ...X(
                              {
                                sYq8gHixR: { onTap: U },
                                z8AN624oB: { onTap: U },
                              },
                              w,
                              k
                            ),
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                  },
                                  children: `Details `,
                                }),
                              }),
                              className: `framer-1v10hq7`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `cZRGyqsm4`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              variants: {
                                sYq8gHixR: {
                                  "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                },
                                z8AN624oB: {
                                  "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  sYq8gHixR: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `-0.2px`,
                                          "--framer-line-height": `10px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Details `,
                                      }),
                                    }),
                                  },
                                  z8AN624oB: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `-0.2px`,
                                          "--framer-line-height": `10px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Details `,
                                      }),
                                    }),
                                  },
                                },
                                w,
                                k
                              ),
                            }),
                          }),
                        q() &&
                          a(m.div, {
                            className: `framer-1ojo1ga`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `lq7dZLKeB`,
                            onTap: ae,
                            style: {
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            ...X(
                              {
                                rTL_Q9mlz: { onTap: H },
                                sYq8gHixR: { onTap: oe },
                                z8AN624oB: { onTap: oe },
                              },
                              w,
                              k
                            ),
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `Creation `,
                                }),
                              }),
                              className: `framer-1s63hsi`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `YK5NXsqV7`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  rTL_Q9mlz: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `-0.2px`,
                                          "--framer-line-height": `10px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Create`,
                                      }),
                                    }),
                                  },
                                  sYq8gHixR: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `-0.2px`,
                                          "--framer-line-height": `10px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Create`,
                                      }),
                                    }),
                                  },
                                  z8AN624oB: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `-0.2px`,
                                          "--framer-line-height": `10px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                        },
                                        children: `Create`,
                                      }),
                                    }),
                                  },
                                },
                                w,
                                k
                              ),
                            }),
                          }),
                        K() &&
                          a(m.div, {
                            className: `framer-ldmokv`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `dIRfa2S2z`,
                            onTap: se,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `rgba(0, 0, 0, 0)`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `none`,
                            },
                            variants: {
                              z8AN624oB: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backgroundColor: `rgb(9, 14, 28)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                              },
                            },
                            ...X(
                              {
                                sYq8gHixR: { onTap: W },
                                z8AN624oB: { "data-border": !0 },
                              },
                              w,
                              k
                            ),
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `AI Iris`,
                                }),
                              }),
                              className: `framer-kt35md`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `TORSYnhg3`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              variants: {
                                z8AN624oB: {
                                  "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...X(
                                {
                                  z8AN624oB: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `12px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `0.2px`,
                                          "--framer-line-height": `10px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                        },
                                        children: `AI Iris`,
                                      }),
                                    }),
                                  },
                                },
                                w,
                                k
                              ),
                            }),
                          }),
                        de() &&
                          a(m.div, {
                            className: `framer-2d429s`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `hEgww3Y8Q`,
                            onTap: W,
                            style: {
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `AI Iris`,
                                }),
                              }),
                              className: `framer-l3au0q`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `n5FJ2n8qH`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        fe() &&
                          a(m.div, {
                            className: `framer-1ylgdoy`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `GTySrBilT`,
                            onTap: ce,
                            style: {
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `AI Iris`,
                                }),
                              }),
                              className: `framer-iga5sz`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `AftN2RAgM`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        pe() &&
                          a(m.div, {
                            className: `framer-w0wy9i`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `z7jLv_hjS`,
                            onTap: ie,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `rgba(0, 0, 0, 0)`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `none`,
                            },
                            variants: {
                              sYq8gHixR: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                backgroundColor: `rgb(9, 14, 28)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                              },
                            },
                            ...X({ sYq8gHixR: { "data-border": !0 } }, w, k),
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                  },
                                  children: `Add Content`,
                                }),
                              }),
                              className: `framer-vjxpks`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `QLNzY6dR_`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        me() &&
                          a(m.div, {
                            className: `framer-1h80veh`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `ifC2x627h`,
                            onTap: ie,
                            style: {
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            ...X(
                              {
                                rTL_Q9mlz: { onTap: ne },
                                z8AN624oB: { onTap: le },
                              },
                              w,
                              k
                            ),
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `Add Content`,
                                }),
                              }),
                              className: `framer-4ck6a4`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `gsxjnuHtZ`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        he() &&
                          a(m.div, {
                            className: `framer-1as3fn5`,
                            "data-border": !0,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `LNGsMcWMN`,
                            onTap: ie,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(36, 44, 79)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(9, 14, 28)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                            },
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                  },
                                  children: `Details `,
                                }),
                              }),
                              className: `framer-1i6pjej`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `ztFXioIw2`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        he() &&
                          a(m.div, {
                            className: `framer-1cm64nz`,
                            "data-framer-name": `Highlighter`,
                            "data-highlight": !0,
                            layoutDependency: L,
                            layoutId: `VoE5q7lOc`,
                            onTap: W,
                            style: {
                              backgroundColor: `rgb(25, 30, 41)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            children: a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.2px`,
                                    "--framer-line-height": `10px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                  },
                                  children: `AI Iris`,
                                }),
                              }),
                              className: `framer-v0njy`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-500`],
                              layoutDependency: L,
                              layoutId: `x_Zq1voix`,
                              style: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                      ],
                    }),
                    a(b, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 2480,
                        intrinsicWidth: 5584,
                        loading: M(
                          (f?.y || 0) +
                            0 +
                            (((f?.height || 571) -
                              0 -
                              (40 + ((f?.height || 571) - 0) * 0.9124 + 10)) /
                              2 +
                              40 +
                              10)
                        ),
                        pixelHeight: 2955,
                        pixelWidth: 5426,
                        sizes: `961px`,
                        src: `https://framerusercontent.com/images/euBYovVyUlKVQSjWmcWCWiw6TvI.png`,
                        srcSet: `https://framerusercontent.com/images/euBYovVyUlKVQSjWmcWCWiw6TvI.png?scale-down-to=512 512w,https://framerusercontent.com/images/euBYovVyUlKVQSjWmcWCWiw6TvI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/euBYovVyUlKVQSjWmcWCWiw6TvI.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/euBYovVyUlKVQSjWmcWCWiw6TvI.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/euBYovVyUlKVQSjWmcWCWiw6TvI.png 5426w`,
                      },
                      className: `framer-1671zpj`,
                      "data-framer-name": `Image`,
                      layoutDependency: L,
                      layoutId: `fD6b7e8if`,
                      ...X(
                        {
                          lj2bcRlQV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 2480,
                              intrinsicWidth: 5584,
                              loading: M(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 571) -
                                    0 -
                                    (40 +
                                      ((f?.height || 571) - 0) * 0.9124 +
                                      10)) /
                                    2 +
                                    40 +
                                    10)
                              ),
                              pixelHeight: 3006,
                              pixelWidth: 5520,
                              sizes: `961px`,
                              src: `https://framerusercontent.com/images/B8pB99hpKAO0FE969jJ3LmAxU.png`,
                              srcSet: `https://framerusercontent.com/images/B8pB99hpKAO0FE969jJ3LmAxU.png?scale-down-to=512 512w,https://framerusercontent.com/images/B8pB99hpKAO0FE969jJ3LmAxU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/B8pB99hpKAO0FE969jJ3LmAxU.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/B8pB99hpKAO0FE969jJ3LmAxU.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/B8pB99hpKAO0FE969jJ3LmAxU.png 5520w`,
                            },
                          },
                          rTL_Q9mlz: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 2480,
                              intrinsicWidth: 5584,
                              loading: M(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 571) -
                                    0 -
                                    (40 +
                                      ((f?.height || 571) - 0) * 0.9124 +
                                      10)) /
                                    2 +
                                    40 +
                                    10)
                              ),
                              pixelHeight: 3006,
                              pixelWidth: 5520,
                              sizes: `961px`,
                              src: `https://framerusercontent.com/images/KIFrAuXBDwSYNl2SEvFYHBGoN2U.png`,
                              srcSet: `https://framerusercontent.com/images/KIFrAuXBDwSYNl2SEvFYHBGoN2U.png?scale-down-to=512 512w,https://framerusercontent.com/images/KIFrAuXBDwSYNl2SEvFYHBGoN2U.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/KIFrAuXBDwSYNl2SEvFYHBGoN2U.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/KIFrAuXBDwSYNl2SEvFYHBGoN2U.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/KIFrAuXBDwSYNl2SEvFYHBGoN2U.png 5520w`,
                            },
                          },
                          sYq8gHixR: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 2480,
                              intrinsicWidth: 5584,
                              loading: M(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 571) -
                                    0 -
                                    (40 +
                                      ((f?.height || 571) - 0) * 0.9124 +
                                      10)) /
                                    2 +
                                    40 +
                                    10)
                              ),
                              pixelHeight: 3006,
                              pixelWidth: 5520,
                              sizes: `961px`,
                              src: `https://framerusercontent.com/images/XzfTZcRc4ORcVnJ9mViRdyHIfw.png`,
                              srcSet: `https://framerusercontent.com/images/XzfTZcRc4ORcVnJ9mViRdyHIfw.png?scale-down-to=512 512w,https://framerusercontent.com/images/XzfTZcRc4ORcVnJ9mViRdyHIfw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XzfTZcRc4ORcVnJ9mViRdyHIfw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/XzfTZcRc4ORcVnJ9mViRdyHIfw.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/XzfTZcRc4ORcVnJ9mViRdyHIfw.png 5520w`,
                            },
                          },
                          z8AN624oB: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 2480,
                              intrinsicWidth: 5584,
                              loading: M(
                                (f?.y || 0) +
                                  0 +
                                  (((f?.height || 571) -
                                    0 -
                                    (40 +
                                      ((f?.height || 571) - 0) * 0.9124 +
                                      10)) /
                                    2 +
                                    40 +
                                    10)
                              ),
                              pixelHeight: 3006,
                              pixelWidth: 5520,
                              sizes: `961px`,
                              src: `https://framerusercontent.com/images/i2OABHy94qJhUS302zbDQMwvEnw.png`,
                              srcSet: `https://framerusercontent.com/images/i2OABHy94qJhUS302zbDQMwvEnw.png?scale-down-to=512 512w,https://framerusercontent.com/images/i2OABHy94qJhUS302zbDQMwvEnw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/i2OABHy94qJhUS302zbDQMwvEnw.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/i2OABHy94qJhUS302zbDQMwvEnw.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/i2OABHy94qJhUS302zbDQMwvEnw.png 5520w`,
                            },
                          },
                        },
                        w,
                        k
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-q77JX.framer-6d9emg, .framer-q77JX .framer-6d9emg { display: block; }`,
          `.framer-q77JX.framer-13hncf9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 571px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-q77JX .framer-o68ac8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 960px; }`,
          `.framer-q77JX .framer-1qxku7x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q77JX .framer-eiyw36, .framer-q77JX .framer-1v9pj42, .framer-q77JX .framer-1m9vvlw, .framer-q77JX .framer-1fw0t99, .framer-q77JX .framer-1v10hq7, .framer-q77JX .framer-1s63hsi, .framer-q77JX .framer-kt35md, .framer-q77JX .framer-l3au0q, .framer-q77JX .framer-iga5sz, .framer-q77JX .framer-vjxpks, .framer-q77JX .framer-4ck6a4, .framer-q77JX .framer-1i6pjej, .framer-q77JX .framer-v0njy { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-q77JX .framer-1vhzxyw, .framer-q77JX .framer-ezwqvu, .framer-q77JX .framer-1yiddqy, .framer-q77JX .framer-1ojo1ga { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 15px; position: relative; width: min-content; }`,
          `.framer-q77JX .framer-gblgux, .framer-q77JX .framer-1as3fn5 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 15px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q77JX .framer-ldmokv, .framer-q77JX .framer-2d429s, .framer-q77JX .framer-1ylgdoy, .framer-q77JX .framer-w0wy9i, .framer-q77JX .framer-1h80veh, .framer-q77JX .framer-1cm64nz { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 15px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-q77JX .framer-1671zpj { flex: none; height: 91%; overflow: visible; position: relative; width: 961px; }`,
          `.framer-q77JX.framer-v-mmsgkk .framer-1qxku7x, .framer-q77JX.framer-v-1vni2d .framer-1qxku7x, .framer-q77JX.framer-v-1ta2gke .framer-1qxku7x { align-content: center; align-items: center; cursor: pointer; flex-direction: row; order: 0; overflow: visible; will-change: unset; }`,
          `.framer-q77JX.framer-v-mmsgkk .framer-1vhzxyw { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 1; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-q77JX.framer-v-mmsgkk .framer-ezwqvu { order: 2; overflow: unset; z-index: 1; }`,
          `.framer-q77JX.framer-v-mmsgkk .framer-1yiddqy { order: 3; overflow: unset; z-index: 1; }`,
          `.framer-q77JX.framer-v-mmsgkk .framer-2d429s, .framer-q77JX.framer-v-1vni2d .framer-ldmokv { order: 7; }`,
          `.framer-q77JX.framer-v-1vni2d .framer-gblgux { align-content: center; align-items: center; flex-direction: row; order: 4; overflow: unset; will-change: unset; z-index: 1; }`,
          `.framer-q77JX.framer-v-1vni2d .framer-1ojo1ga, .framer-q77JX.framer-v-16aei2 .framer-1ojo1ga, .framer-q77JX.framer-v-1ta2gke .framer-1ojo1ga { order: 1; }`,
          `.framer-q77JX.framer-v-1vni2d .framer-w0wy9i { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 3; overflow: hidden; will-change: var(--framer-will-change-override, transform); z-index: unset; }`,
          `.framer-q77JX.framer-v-16aei2 .framer-1qxku7x { align-content: center; align-items: center; flex-direction: row; order: 0; overflow: visible; will-change: unset; }`,
          `.framer-q77JX.framer-v-16aei2 .framer-1h80veh, .framer-q77JX.framer-v-1ta2gke .framer-1h80veh { order: 3; }`,
          `.framer-q77JX.framer-v-16aei2 .framer-1as3fn5 { order: 10; }`,
          `.framer-q77JX.framer-v-16aei2 .framer-1cm64nz { order: 12; }`,
          `.framer-q77JX.framer-v-1ta2gke .framer-gblgux { align-content: center; align-items: center; flex-direction: row; order: 4; overflow: visible; will-change: unset; }`,
          `.framer-q77JX.framer-v-1ta2gke .framer-ldmokv { align-content: flex-start; align-items: flex-start; flex-direction: column; order: 7; overflow: hidden; will-change: var(--framer-will-change-override, transform); z-index: unset; }`,
          `.framer-q77JX[data-border="true"]::after, .framer-q77JX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-q77JX`
      )),
      (ht = mt),
      (mt.displayName = `Leader's wire`),
      (mt.defaultProps = { height: 571, width: 961 }),
      D(mt, {
        variant: {
          options: [
            `flC5aKWFQ`,
            `lj2bcRlQV`,
            `sYq8gHixR`,
            `rTL_Q9mlz`,
            `z8AN624oB`,
          ],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 4`,
            `Variant 5`,
          ],
          title: `Variant`,
          type: v.Enum,
        },
        HMltuWSfi: { title: `Click`, type: v.EventHandler },
        Znb9LCFYl: { title: `Click 2`, type: v.EventHandler },
        YZ8pJAC4w: { title: `Click 3`, type: v.EventHandler },
      }),
      E(
        mt,
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
function _t(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot = e(() => {
    r(),
      N(),
      p(),
      i(),
      (vt = { qyIyGiKkI: { hover: !0, pressed: !0 } }),
      (yt = `framer-WqCTC`),
      (bt = { qyIyGiKkI: `framer-v-1hskv8k` }),
      (xt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (St = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Ct = m.create(u)),
      (wt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        KccpIFvNc: e ?? i.KccpIFvNc,
      })),
      (Tt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Et = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z();
          F();
          let {
              style: f,
              className: p,
              layoutId: h,
              variant: g,
              KccpIFvNc: _,
              ...v
            } = wt(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: k,
              variants: A,
            } = B({
              defaultVariant: `qyIyGiKkI`,
              enabledGestures: vt,
              ref: i,
              variant: g,
              variantClassNames: bt,
            }),
            j = Tt(e, A),
            { activeVariantCallback: M, delay: N } = P(y),
            I = M(async (...e) => {
              if ((D({ isPressed: !1 }), _ && (await _(...e)) === !1))
                return !1;
            }),
            L = O(yt);
          return a(d, {
            id: h ?? s,
            children: a(Ct, {
              animate: A,
              initial: !1,
              children: a(St, {
                value: xt,
                children: l(m.div, {
                  ...v,
                  ...S,
                  className: O(L, `framer-1hskv8k`, p, b),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: j,
                  layoutId: `qyIyGiKkI`,
                  onTap: I,
                  ref: i,
                  style: {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 32,
                    borderBottomRightRadius: 32,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    ...f,
                  },
                  variants: {
                    "qyIyGiKkI-hover": {
                      backgroundColor: `rgba(0, 0, 0, 0.14)`,
                    },
                    "qyIyGiKkI-pressed": {
                      backgroundColor: `rgba(255, 255, 255, 0.03)`,
                    },
                  },
                  ..._t(
                    {
                      "qyIyGiKkI-hover": { "data-framer-name": void 0 },
                      "qyIyGiKkI-pressed": { "data-framer-name": void 0 },
                    },
                    y,
                    T
                  ),
                  children: [
                    l(w, {
                      className: `framer-1mkxfni`,
                      layoutDependency: j,
                      layoutId: `clMzfjhh0`,
                      opacity: 1,
                      requiresOverflowVisible: !0,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 18" overflow="visible"><path d="M 7 4 L 6.484 5.394 C 5.808 7.222 5.47 8.136 4.803 8.803 C 4.136 9.469 3.222 9.808 1.394 10.484 L 0 11 L 1.394 11.516 C 3.222 12.192 4.136 12.53 4.803 13.197 C 5.47 13.864 5.808 14.778 6.484 16.606 L 7 18 L 7.516 16.606 C 8.192 14.778 8.53 13.864 9.197 13.197 C 9.864 12.531 10.778 12.192 12.606 11.516 L 14 11 L 12.606 10.484 C 10.778 9.808 9.864 9.47 9.197 8.803 C 8.531 8.136 8.192 7.222 7.516 5.394 Z M 15 0 L 14.779 0.597 C 14.489 1.381 14.344 1.773 14.059 2.058 C 13.773 2.344 13.381 2.489 12.597 2.778 L 12 3 L 12.598 3.221 C 13.381 3.511 13.773 3.656 14.058 3.941 C 14.344 4.227 14.489 4.619 14.778 5.403 L 15 6 L 15.221 5.403 C 15.511 4.619 15.656 4.227 15.941 3.942 C 16.227 3.656 16.619 3.511 17.403 3.222 L 18 3 L 17.402 2.779 C 16.619 2.489 16.227 2.344 15.942 2.059 C 15.656 1.773 15.511 1.381 15.222 0.597 Z" fill="transparent" stroke-width="1.5" stroke="rgb(207, 212, 255)" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                      withExternalLayout: !0,
                      children: [
                        a(w, {
                          className: `framer-11q00ni`,
                          layoutDependency: j,
                          layoutId: `moGr_GVcl`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14" overflow="visible"><path d="M 7 0 L 6.484 1.394 C 5.808 3.222 5.47 4.136 4.803 4.803 C 4.136 5.469 3.222 5.808 1.394 6.484 L 0 7 L 1.394 7.516 C 3.222 8.192 4.136 8.53 4.803 9.197 C 5.47 9.864 5.808 10.778 6.484 12.606 L 7 14 L 7.516 12.606 C 8.192 10.778 8.53 9.864 9.197 9.197 C 9.864 8.531 10.778 8.192 12.606 7.516 L 14 7 L 12.606 6.484 C 10.778 5.808 9.864 5.47 9.197 4.803 C 8.531 4.136 8.192 3.222 7.516 1.394 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                        a(w, {
                          className: `framer-ogabf0`,
                          layoutDependency: j,
                          layoutId: `CFnqJnMss`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 6" overflow="visible"><path d="M 3 0 L 2.779 0.597 C 2.489 1.381 2.344 1.773 2.059 2.058 C 1.773 2.344 1.381 2.489 0.597 2.778 L 0 3 L 0.598 3.221 C 1.381 3.511 1.773 3.656 2.058 3.941 C 2.344 4.227 2.489 4.619 2.778 5.403 L 3 6 L 3.221 5.403 C 3.511 4.619 3.656 4.227 3.941 3.942 C 4.227 3.656 4.619 3.511 5.403 3.222 L 6 3 L 5.402 2.779 C 4.619 2.489 4.227 2.344 3.942 2.059 C 3.656 1.773 3.511 1.381 3.222 0.597 Z" fill="transparent"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    a(C, {
                      __fromCanvasComponent: !0,
                      children: a(u, {
                        children: a(m.p, {
                          style: {
                            "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                            "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                            "--framer-font-weight": `500`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                          },
                          children: a(m.span, {
                            "data-text-fill": `true`,
                            style: {
                              backgroundImage: `linear-gradient(274deg, rgb(153, 165, 255) 0%, rgb(255, 255, 255) 51.0716%, rgb(163, 174, 255) 100%)`,
                            },
                            children: `Summarise with AI`,
                          }),
                        }),
                      }),
                      className: `framer-1v8b9kv`,
                      fonts: [`GF;Geist-500`],
                      layoutDependency: j,
                      layoutId: `psXDn0l0J`,
                      style: {
                        "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      variants: {
                        "qyIyGiKkI-hover": {
                          "--extracted-r6o4lv": `rgba(255, 255, 255, 0.8)`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ..._t(
                        {
                          "qyIyGiKkI-hover": {
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.8))`,
                                },
                                children: `Summarise with AI`,
                              }),
                            }),
                          },
                          "qyIyGiKkI-pressed": {
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: `Summarise with AI`,
                              }),
                            }),
                          },
                        },
                        y,
                        T
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-WqCTC.framer-6b5x0w, .framer-WqCTC .framer-6b5x0w { display: block; }`,
          `.framer-WqCTC.framer-1hskv8k { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 24px 16px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-WqCTC .framer-1mkxfni { height: 18px; position: relative; width: 18px; }`,
          `.framer-WqCTC .framer-11q00ni { height: 14px; left: 0px; position: absolute; top: 4px; width: 14px; }`,
          `.framer-WqCTC .framer-ogabf0 { height: 6px; left: 12px; position: absolute; top: 0px; width: 6px; }`,
          `.framer-WqCTC .framer-1v8b9kv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-WqCTC`
      )),
      (Dt = Et),
      (Et.displayName = `Summarise Button`),
      (Et.defaultProps = { height: 51, width: 215.5 }),
      D(Et, { KccpIFvNc: { title: `Click`, type: v.EventHandler } }),
      E(
        Et,
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
function kt(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt = e(() => {
    r(),
      N(),
      p(),
      i(),
      Ot(),
      (At = A(Dt)),
      (jt = [`NWc2njwfM`, `CZwtlBVDC`]),
      (Mt = `framer-tp6xd`),
      (Nt = { CZwtlBVDC: `framer-v-bj9svk`, NWc2njwfM: `framer-v-1b1c608` }),
      (Pt = { bounce: 0.2, delay: 0, duration: 0.1, type: `spring` }),
      (Ft = (e, t) => `translateX(-50%) ${t}`),
      (It = {
        effect: {
          opacity: 0.001,
          rotate: 0,
          rotateX: 0,
          rotateY: 90,
          scale: 0,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 0,
        },
        startDelay: 0.5,
        tokenization: `line`,
        transition: { bounce: 0, delay: 0.1, duration: 0.1, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (Lt = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Rt = m.create(u)),
      (zt = { "Variant 1": `NWc2njwfM`, "Variant 2": `CZwtlBVDC` }),
      (Bt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        icujSedas: e ?? i.icujSedas,
        variant: zt[i.variant] ?? i.variant ?? `NWc2njwfM`,
      })),
      (Vt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Ht = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z(),
            f = F(),
            {
              style: p,
              className: h,
              layoutId: _,
              variant: v,
              icujSedas: y,
              ...b
            } = Bt(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = B({
              cycleOrder: jt,
              defaultVariant: `NWc2njwfM`,
              ref: i,
              variant: v,
              variantClassNames: Nt,
            }),
            I = Vt(e, N),
            { activeVariantCallback: L, delay: R } = P(x),
            te = L(async (...e) => {
              j({ isPressed: !1 }), M(`CZwtlBVDC`);
            }),
            V = L(async (...e) => {
              j({ isPressed: !1 }), M(`NWc2njwfM`);
            }),
            H = L(async (...e) => {
              if (y && (await y(...e)) === !1) return !1;
            }),
            ne = O(Mt),
            re = () => x !== `CZwtlBVDC`,
            ie = () => x === `CZwtlBVDC`;
          return a(d, {
            id: _ ?? s,
            children: a(Rt, {
              animate: N,
              initial: !1,
              children: a(Lt, {
                ...kt({ CZwtlBVDC: { value: Pt } }, x, k),
                children: l(m.div, {
                  ...b,
                  ...D,
                  className: O(ne, `framer-1b1c608`, h, S),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: I,
                  layoutId: `NWc2njwfM`,
                  onTap: te,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0.25px`,
                    "--border-color": `rgba(255, 255, 255, 0.12)`,
                    "--border-left-width": `0.25px`,
                    "--border-right-width": `0.25px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0.25px`,
                    background: `linear-gradient(180deg, rgb(61, 87, 217) 0%, rgb(28, 44, 163) 47.52252252252252%, rgb(25, 38, 181) 100%)`,
                    borderBottomLeftRadius: 9999,
                    borderBottomRightRadius: 9999,
                    borderTopLeftRadius: 9999,
                    borderTopRightRadius: 9999,
                    boxShadow: `inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6), 0px 3px 21px 14px rgba(0, 0, 0, 0.3)`,
                    ...p,
                  },
                  ...kt(
                    {
                      CZwtlBVDC: { "data-framer-name": `Variant 2`, onTap: V },
                    },
                    x,
                    k
                  ),
                  children: [
                    re() &&
                      a(m.div, {
                        className: `framer-345tfm`,
                        layoutDependency: I,
                        layoutId: `NWc2njwfMe3ovOXvpZ`,
                        children: a(g, {
                          height: 51,
                          y:
                            (f?.y || 0) +
                            (0 + ((f?.height || 51) - 0 - 51) / 2) +
                            0,
                          children: a(T, {
                            className: `framer-zzoe7t-container`,
                            layoutDependency: I,
                            layoutId: `FLMy9usp3-container`,
                            nodeId: `FLMy9usp3`,
                            rendersWithMotion: !0,
                            scopeId: `suJENM3K3`,
                            children: a(Dt, {
                              height: `100%`,
                              id: `FLMy9usp3`,
                              KccpIFvNc: H,
                              layoutId: `FLMy9usp3`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    ie() &&
                      a(m.div, {
                        className: `framer-q9kaam`,
                        "data-border": !0,
                        layoutDependency: I,
                        layoutId: `OlM23E8tO`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgb(33, 33, 33)`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backgroundColor: `rgb(22, 22, 22)`,
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                          boxShadow: `0px 1px 122px 140px rgba(0, 0, 0, 0.3)`,
                        },
                        transformTemplate: Ft,
                        children: a(C, {
                          __fromCanvasComponent: !0,
                          children: l(u, {
                            children: [
                              a(m.p, {
                                style: {
                                  "--framer-font-size": `18px`,
                                  "--framer-line-height": `2.5em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: a(m.strong, {
                                  children: `🧩 What Was the Problem?`,
                                }),
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-2gxw0f, rgb(255, 255, 255))`,
                                },
                                children: `• Pluralsight’s curation tools were disjointed, confusing, and hard to use.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-1iakedh, rgb(255, 255, 255))`,
                                },
                                children: `• Users- learners, leaders, and curators, struggled with personalization, tracking, and engagement.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-14qxiz, rgb(255, 255, 255))`,
                                },
                                children: a(m.br, {
                                  className: `trailing-break`,
                                }),
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-font-size": `18px`,
                                  "--framer-line-height": `2.5em`,
                                  "--framer-text-color": `var(--extracted-ydz9fi, rgb(255, 255, 255))`,
                                },
                                children: a(m.strong, {
                                  children: `✏️ What Did the Redesign Focus On?`,
                                }),
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `2em`,
                                  "--framer-text-color": `var(--extracted-1yfvjw7, rgb(255, 255, 255))`,
                                },
                                children: `• Creating a unified, intuitive platform to manage learning paths.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-8vgz36, rgb(255, 255, 255))`,
                                },
                                children: `• Enabling leaders to assign and monitor progress easily.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-t2ptvp, rgb(255, 255, 255))`,
                                },
                                children: `• Helping learners stay motivated and aligned with goals.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-1jpqyj2, rgb(255, 255, 255))`,
                                },
                                children: a(m.br, {
                                  className: `trailing-break`,
                                }),
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-font-size": `18px`,
                                  "--framer-line-height": `2.5em`,
                                  "--framer-text-color": `var(--extracted-f9af1q, rgb(255, 255, 255))`,
                                },
                                children: a(m.strong, {
                                  children: `✅ How Was It Done?`,
                                }),
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-i57awu, rgb(255, 255, 255))`,
                                },
                                children: `• Through research (quant, qual, interviews), pain points were mapped.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-httz1r, rgb(255, 255, 255))`,
                                },
                                children: `• Object-Oriented UX shaped a modular, scalable structure.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-1s8lkzu, rgb(255, 255, 255))`,
                                },
                                children: `• Clear user flows were designed for different roles.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-1fa19q2, rgb(255, 255, 255))`,
                                },
                                children: a(m.br, {
                                  className: `trailing-break`,
                                }),
                              }),
                              l(m.p, {
                                style: {
                                  "--framer-line-height": `2em`,
                                  "--framer-text-color": `var(--extracted-1a4feko, rgb(255, 255, 255))`,
                                },
                                children: [
                                  a(m.strong, { children: `🌟 ` }),
                                  a(m.span, {
                                    style: { "--framer-font-size": `18px` },
                                    children: a(m.strong, {
                                      children: `Outcome`,
                                    }),
                                  }),
                                ],
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-kya66u, rgb(255, 255, 255))`,
                                },
                                children: `• A curated, flexible, and engaging experience that drives adoption, improves completion, and aligns learning with business goals.`,
                              }),
                              a(m.p, {
                                style: {
                                  "--framer-line-height": `1.25em`,
                                  "--framer-text-color": `var(--extracted-ud10sr, rgb(255, 255, 255))`,
                                },
                                children: a(m.br, {
                                  className: `trailing-break`,
                                }),
                              }),
                            ],
                          }),
                          className: `framer-zqfu2q`,
                          effect: It,
                          fonts: [`Inter`, `Inter-Bold`],
                          layoutDependency: I,
                          layoutId: `DeNTGWp8w`,
                          style: {
                            "--extracted-14qxiz": `rgb(255, 255, 255)`,
                            "--extracted-1a4feko": `rgb(255, 255, 255)`,
                            "--extracted-1fa19q2": `rgb(255, 255, 255)`,
                            "--extracted-1iakedh": `rgb(255, 255, 255)`,
                            "--extracted-1jpqyj2": `rgb(255, 255, 255)`,
                            "--extracted-1s8lkzu": `rgb(255, 255, 255)`,
                            "--extracted-1yfvjw7": `rgb(255, 255, 255)`,
                            "--extracted-2gxw0f": `rgb(255, 255, 255)`,
                            "--extracted-8vgz36": `rgb(255, 255, 255)`,
                            "--extracted-f9af1q": `rgb(255, 255, 255)`,
                            "--extracted-httz1r": `rgb(255, 255, 255)`,
                            "--extracted-i57awu": `rgb(255, 255, 255)`,
                            "--extracted-kya66u": `rgb(255, 255, 255)`,
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--extracted-t2ptvp": `rgb(255, 255, 255)`,
                            "--extracted-ud10sr": `rgb(255, 255, 255)`,
                            "--extracted-ydz9fi": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                    ie() &&
                      a(m.div, {
                        className: `framer-6n324p`,
                        layoutDependency: I,
                        layoutId: `lY4jAnu59`,
                        children: l(w, {
                          className: `framer-1uxr6p1`,
                          layoutDependency: I,
                          layoutId: `Ois420lLu`,
                          opacity: 1,
                          requiresOverflowVisible: !0,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" overflow="visible"><path d="M 12 0 L 0 12 M 12 12 L 0 0" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                          withExternalLayout: !0,
                          children: [
                            a(w, {
                              className: `framer-1osu3ue`,
                              layoutDependency: I,
                              layoutId: `JdcFbNXj3`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" overflow="visible"><path d="M 12 0 L 0 12" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-18uxeqg`,
                              layoutDependency: I,
                              layoutId: `ttv_mj_vW`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" overflow="visible"><path d="M 12 12 L 0 0" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                          ],
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
          `.framer-tp6xd.framer-haxxid, .framer-tp6xd .framer-haxxid { display: block; }`,
          `.framer-tp6xd.framer-1b1c608 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-tp6xd .framer-345tfm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-tp6xd .framer-zzoe7t-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-tp6xd .framer-q9kaam { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 40px; position: absolute; top: -699px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: -1; }`,
          `.framer-tp6xd .framer-zqfu2q { flex: none; height: 598px; position: relative; white-space: pre-wrap; width: 468px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-tp6xd .framer-6n324p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 52px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 52px; }`,
          `.framer-tp6xd .framer-1uxr6p1 { height: 12px; position: relative; width: 12px; }`,
          `.framer-tp6xd .framer-1osu3ue, .framer-tp6xd .framer-18uxeqg { height: 12px; left: 0px; position: absolute; top: 0px; width: 12px; }`,
          `.framer-tp6xd.framer-v-bj9svk.framer-1b1c608 { overflow: visible; will-change: unset; }`,
          `.framer-tp6xd.framer-v-bj9svk .framer-q9kaam { order: 1; }`,
          `.framer-tp6xd.framer-v-bj9svk .framer-zqfu2q, .framer-tp6xd.framer-v-bj9svk .framer-6n324p { order: 0; }`,
          `.framer-tp6xd[data-border="true"]::after, .framer-tp6xd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-tp6xd`
      )),
      (Ut = Ht),
      (Ht.displayName = `Summarise with AI`),
      (Ht.defaultProps = { height: 51, width: 215.5 }),
      D(Ht, {
        variant: {
          options: [`NWc2njwfM`, `CZwtlBVDC`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: v.Enum,
        },
        icujSedas: { title: `Click`, type: v.EventHandler },
      }),
      E(
        Ht,
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
                url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
                weight: `700`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
            ],
          },
          ...At,
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function Z(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var Gt,
  Kt,
  qt,
  Jt,
  Q,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn = e(() => {
    r(),
      N(),
      p(),
      i(),
      (Gt = [
        `s0hpJwkAE`,
        `RPQRf27RZ`,
        `i3s1ZjbCJ`,
        `EFhOJ4sjy`,
        `nbN541DJF`,
        `sxJUGMylx`,
        `TB0Rm8m6Q`,
        `aiGuXATmM`,
        `UANJP7N_Y`,
        `cWJMx7065`,
        `P5b6mbSMW`,
        `HaV4tpl7B`,
      ]),
      (Kt = `framer-xbubm`),
      (qt = {
        aiGuXATmM: `framer-v-7d3ajp`,
        cWJMx7065: `framer-v-dqa40y`,
        EFhOJ4sjy: `framer-v-nj1yt5`,
        HaV4tpl7B: `framer-v-1k94tdl`,
        i3s1ZjbCJ: `framer-v-i06a8o`,
        nbN541DJF: `framer-v-t5yzgv`,
        P5b6mbSMW: `framer-v-7kghn9`,
        RPQRf27RZ: `framer-v-1ykgz8`,
        s0hpJwkAE: `framer-v-1set6ki`,
        sxJUGMylx: `framer-v-9772le`,
        TB0Rm8m6Q: `framer-v-6si01r`,
        UANJP7N_Y: `framer-v-z00g2q`,
      }),
      (Jt = { duration: 0, type: `tween` }),
      (Q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
          ? { src: e }
          : void 0),
      (Yt = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Xt = m.create(u)),
      (Zt = {
        "Feature Tab - Mobile": `UANJP7N_Y`,
        "Feature Tab - Tablet": `nbN541DJF`,
        "Feature Tab Fourth - Mobile": `HaV4tpl7B`,
        "Feature Tab Fourth - Tablet": `aiGuXATmM`,
        "Feature Tab Fourth": `EFhOJ4sjy`,
        "Feature Tab Second - Mobile": `cWJMx7065`,
        "Feature Tab Second - Tablet": `sxJUGMylx`,
        "Feature Tab Second": `RPQRf27RZ`,
        "Feature Tab Third - Mobile": `P5b6mbSMW`,
        "Feature Tab Third - Tablet": `TB0Rm8m6Q`,
        "Feature Tab Third": `i3s1ZjbCJ`,
        "Feature Tab": `s0hpJwkAE`,
      }),
      (Qt = ({
        height: e,
        id: t,
        tab1Content: n,
        tab1Image: r,
        tab1LinkIcon: i,
        tab1LinkText: a,
        tab1Title: o,
        tab2Content: s,
        tab2Image: c,
        tab2LinkIcon: l,
        tab2LinkText: u,
        tab2Title: ee,
        tab3Content: d,
        tab3Image: f,
        tab3LinkIcon: p,
        tab3LinkText: m,
        tab3Title: h,
        tab4Content: g,
        tab4Image: _,
        tab4LinkIcon: v,
        tab4LinkText: y,
        tab4Title: b,
        width: x,
        ...S
      }) => ({
        ...S,
        efL5EylsZ: r ??
          S.efL5EylsZ ?? {
            pixelHeight: 1547,
            pixelWidth: 1631,
            src: `https://framerusercontent.com/images/XWi3Zoe7fK700s6m3scfS6AXdyA.png`,
            srcSet: `https://framerusercontent.com/images/XWi3Zoe7fK700s6m3scfS6AXdyA.png?scale-down-to=512 512w,https://framerusercontent.com/images/XWi3Zoe7fK700s6m3scfS6AXdyA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/XWi3Zoe7fK700s6m3scfS6AXdyA.png 1631w`,
          },
        f5eY3cgCD: o ?? S.f5eY3cgCD ?? `dfdfdfdfdf`,
        g4hpGL7GZ: v ??
          S.g4hpGL7GZ ?? {
            alt: `Tab Link Icon`,
            pixelHeight: 18,
            pixelWidth: 17,
            src: `https://framerusercontent.com/images/5iaj2LbCKG2yKfyRWeZ1F5l6yo.svg`,
          },
        GOkJ7PyjO: y ?? S.GOkJ7PyjO ?? `Fragmented Experience`,
        HaFQRicXl:
          g ??
          S.HaFQRicXl ??
          `Automatically classify and sort text data using AI-powered models. Perfect for email filtering, document categorization, and content tagging.`,
        hlriAO8HM:
          ee ?? S.hlriAO8HM ?? `Process large datasets with AI efficiency`,
        HRjOXWPgm: h ?? S.HRjOXWPgm ?? `AI that recognizes and tags images`,
        hZRcI7QMJ:
          s ??
          S.hZRcI7QMJ ??
          `Users are redirected out of context to find and add content e.g., to add Course, Path- global search, to add Skill IQ or external link there are modals  and to add a lab user get redirected to content landing page.`,
        LQ0TPE0ax: a ?? S.LQ0TPE0ax ?? `Feature Overlap`,
        mTCDp4LCs: i ??
          S.mTCDp4LCs ?? {
            alt: `Tab Link Icon`,
            pixelHeight: 24,
            pixelWidth: 24,
            src: `https://framerusercontent.com/images/wO0GRgseDD00cYZIb19bSEXJwE.svg`,
          },
        NBxqpZQMB: b ?? S.NBxqpZQMB ?? `Organize and categorize text with AI`,
        NXnQ8rU_i: c ??
          S.NXnQ8rU_i ?? {
            alt: `Tab Image`,
            pixelHeight: 382,
            pixelWidth: 351,
            src: `https://framerusercontent.com/images/3TBLMSoYmYZWwwfG5z2MBMqmmw.svg`,
          },
        nZPVgCoQa:
          d ??
          S.nZPVgCoQa ??
          `Use AI-driven image recognition to detect objects, classify visuals, and automate labeling for media, security, and content management.`,
        pXLl77XPo: l ??
          S.pXLl77XPo ?? {
            alt: `Tab Link Icon`,
            pixelHeight: 18,
            pixelWidth: 19,
            src: `https://framerusercontent.com/images/LMfyGHv4vd8bnlZ8SToOMMW4TU.svg`,
          },
        QEVGJtFdG: m ?? S.QEVGJtFdG ?? `No Personalization`,
        roVUInC6L: p ??
          S.roVUInC6L ?? {
            alt: `Tab Link Icon`,
            pixelHeight: 20,
            pixelWidth: 20,
            src: `https://framerusercontent.com/images/Jo4qTyQc9CpoB46EAmjUdVqc20I.svg`,
          },
        tnkctlVRh: _ ??
          S.tnkctlVRh ?? {
            alt: `Tab Image`,
            pixelHeight: 388,
            pixelWidth: 293,
            src: `https://framerusercontent.com/images/Ib9kSuswBGe1xRfpYuMVBWhZPao.svg`,
          },
        ueSr9Pjev: f ??
          S.ueSr9Pjev ?? {
            alt: `Tab Image`,
            pixelHeight: 703,
            pixelWidth: 702,
            src: `https://framerusercontent.com/images/UAWCkcOwiIGWlZzk6TjxjSm4DU.png`,
            srcSet: `https://framerusercontent.com/images/UAWCkcOwiIGWlZzk6TjxjSm4DU.png 702w`,
          },
        variant: Zt[S.variant] ?? S.variant ?? `s0hpJwkAE`,
        VJAOmtLMy: u ?? S.VJAOmtLMy ?? `Difficult Discovery`,
        VW0z7nrEX:
          n ??
          S.VW0z7nrEX ??
          `Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real time.`,
      })),
      ($t = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (en = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z(),
            f = F(),
            {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              mTCDp4LCs: v,
              LQ0TPE0ax: y,
              f5eY3cgCD: x,
              VW0z7nrEX: S,
              efL5EylsZ: w,
              VJAOmtLMy: T,
              pXLl77XPo: E,
              hlriAO8HM: D,
              hZRcI7QMJ: k,
              NXnQ8rU_i: A,
              QEVGJtFdG: j,
              roVUInC6L: N,
              HRjOXWPgm: I,
              nZPVgCoQa: L,
              ueSr9Pjev: R,
              GOkJ7PyjO: te,
              g4hpGL7GZ: V,
              NBxqpZQMB: H,
              HaFQRicXl: ne,
              tnkctlVRh: re,
              ...ie
            } = Qt(e),
            {
              baseVariant: U,
              classNames: ae,
              clearLoadingGesture: oe,
              gestureHandlers: se,
              gestureVariant: W,
              isLoading: ce,
              setGestureState: le,
              setVariant: G,
              variants: ue,
            } = B({
              cycleOrder: Gt,
              defaultVariant: `s0hpJwkAE`,
              ref: i,
              variant: _,
              variantClassNames: qt,
            }),
            K = $t(e, ue),
            { activeVariantCallback: q, delay: de } = P(U),
            fe = q(async (...e) => {
              G(`s0hpJwkAE`);
            }),
            pe = q(async (...e) => {
              G(`nbN541DJF`);
            }),
            me = q(async (...e) => {
              G(`UANJP7N_Y`);
            }),
            he = q(async (...e) => {
              G(`RPQRf27RZ`);
            }),
            ge = q(async (...e) => {
              G(`sxJUGMylx`);
            }),
            _e = q(async (...e) => {
              G(`cWJMx7065`);
            }),
            ve = q(async (...e) => {
              G(`i3s1ZjbCJ`);
            }),
            ye = q(async (...e) => {
              G(`TB0Rm8m6Q`);
            }),
            J = q(async (...e) => {
              G(`P5b6mbSMW`);
            }),
            be = q(async (...e) => {
              G(`EFhOJ4sjy`);
            }),
            xe = q(async (...e) => {
              G(`aiGuXATmM`);
            }),
            Y = q(async (...e) => {
              G(`HaV4tpl7B`);
            }),
            Se = O(Kt),
            Ce = () => U !== `nbN541DJF`,
            we = () => U === `nbN541DJF`;
          return a(d, {
            id: g ?? s,
            children: a(Xt, {
              animate: ue,
              initial: !1,
              children: a(Yt, {
                value: Jt,
                children: a(m.div, {
                  ...ie,
                  ...se,
                  className: O(Se, `framer-1set6ki`, h, ae),
                  "data-framer-name": `Feature Tab`,
                  layoutDependency: K,
                  layoutId: `s0hpJwkAE`,
                  ref: i,
                  style: { ...p },
                  ...Z(
                    {
                      aiGuXATmM: {
                        "data-framer-name": `Feature Tab Fourth - Tablet`,
                      },
                      cWJMx7065: {
                        "data-framer-name": `Feature Tab Second - Mobile`,
                      },
                      EFhOJ4sjy: { "data-framer-name": `Feature Tab Fourth` },
                      HaV4tpl7B: {
                        "data-framer-name": `Feature Tab Fourth - Mobile`,
                      },
                      i3s1ZjbCJ: { "data-framer-name": `Feature Tab Third` },
                      nbN541DJF: { "data-framer-name": `Feature Tab - Tablet` },
                      P5b6mbSMW: {
                        "data-framer-name": `Feature Tab Third - Mobile`,
                      },
                      RPQRf27RZ: { "data-framer-name": `Feature Tab Second` },
                      sxJUGMylx: {
                        "data-framer-name": `Feature Tab Second - Tablet`,
                      },
                      TB0Rm8m6Q: {
                        "data-framer-name": `Feature Tab Third - Tablet`,
                      },
                      UANJP7N_Y: { "data-framer-name": `Feature Tab - Mobile` },
                    },
                    U,
                    W
                  ),
                  children: l(m.div, {
                    className: `framer-qfs3mc`,
                    "data-framer-name": `Tab Item`,
                    layoutDependency: K,
                    layoutId: `X23EpbUkd`,
                    children: [
                      l(m.div, {
                        className: `framer-196z61y`,
                        "data-framer-name": `Tab List`,
                        layoutDependency: K,
                        layoutId: `kSAjew1IJ`,
                        children: [
                          a(m.div, {
                            className: `framer-pdow0s`,
                            "data-border": !0,
                            "data-framer-name": `Tab Link Item`,
                            layoutDependency: K,
                            layoutId: `xEuOawPUF`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(36, 44, 79)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(6, 9, 18)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                              opacity: 1,
                            },
                            variants: {
                              aiGuXATmM: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                boxShadow: `none`,
                                opacity: 0.6,
                              },
                              cWJMx7065: {
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                opacity: 0.6,
                              },
                              EFhOJ4sjy: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                boxShadow: `none`,
                                opacity: 0.6,
                              },
                              HaV4tpl7B: {
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                opacity: 0.6,
                              },
                              i3s1ZjbCJ: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                boxShadow: `none`,
                                opacity: 0.6,
                              },
                              nbN541DJF: { opacity: 1 },
                              P5b6mbSMW: {
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                opacity: 0.6,
                              },
                              RPQRf27RZ: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                boxShadow: `none`,
                                opacity: 0.6,
                              },
                              sxJUGMylx: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                boxShadow: `none`,
                                opacity: 0.6,
                              },
                              TB0Rm8m6Q: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                boxShadow: `none`,
                                opacity: 0.6,
                              },
                              UANJP7N_Y: { opacity: 1 },
                            },
                            ...Z(
                              {
                                aiGuXATmM: { "data-highlight": !0, onTap: pe },
                                cWJMx7065: { "data-highlight": !0, onTap: me },
                                EFhOJ4sjy: { "data-highlight": !0, onTap: fe },
                                HaV4tpl7B: { "data-highlight": !0, onTap: me },
                                i3s1ZjbCJ: { "data-highlight": !0, onTap: fe },
                                RPQRf27RZ: { "data-highlight": !0, onTap: fe },
                                sxJUGMylx: { "data-highlight": !0, onTap: pe },
                                TB0Rm8m6Q: { "data-highlight": !0, onTap: pe },
                              },
                              U,
                              W
                            ),
                            children: l(m.div, {
                              className: `framer-vlt9a5`,
                              "data-framer-name": `Tab Link`,
                              layoutDependency: K,
                              layoutId: `R3gEQjUHp`,
                              style: {
                                backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                opacity: 1,
                              },
                              variants: {
                                aiGuXATmM: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  opacity: 1,
                                },
                                cWJMx7065: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  opacity: 1,
                                },
                                EFhOJ4sjy: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                HaV4tpl7B: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  opacity: 1,
                                },
                                i3s1ZjbCJ: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                P5b6mbSMW: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  opacity: 1,
                                },
                                RPQRf27RZ: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                sxJUGMylx: {
                                  backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                                  opacity: 0.6,
                                },
                                TB0Rm8m6Q: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                  opacity: 1,
                                },
                                UANJP7N_Y: { opacity: 1 },
                              },
                              children: [
                                a(b, {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: M(
                                      (f?.y || 0) +
                                        1 +
                                        (((f?.height || 430) - 2 - 436) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        0 +
                                        0 +
                                        15 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 24,
                                    pixelWidth: 24,
                                    sizes: `24px`,
                                    ...Q(v),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                  className: `framer-i6kv6`,
                                  "data-framer-name": `Tab Link Icon`,
                                  layoutDependency: K,
                                  layoutId: `t_b7wnf4m`,
                                  ...Z(
                                    {
                                      aiGuXATmM: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `24px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      cWJMx7065: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `18px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      HaV4tpl7B: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `18px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      i3s1ZjbCJ: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: M(
                                            (f?.y || 0) +
                                              1 +
                                              (((f?.height || 430) - 2 - 428) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              15 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `24px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      nbN541DJF: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `24px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      P5b6mbSMW: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `18px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      sxJUGMylx: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `24px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      TB0Rm8m6Q: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `24px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      UANJP7N_Y: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 24,
                                          pixelWidth: 24,
                                          sizes: `18px`,
                                          ...Q(v),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                    },
                                    U,
                                    W
                                  ),
                                }),
                                a(C, {
                                  __fromCanvasComponent: !0,
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                      },
                                      children: `Feature Overlap`,
                                    }),
                                  }),
                                  className: `framer-nvfl8z`,
                                  fonts: [`GF;Geist-500`],
                                  layoutDependency: K,
                                  layoutId: `ThhMDiz41`,
                                  style: {
                                    "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: y,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      cWJMx7065: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Feature Overlap`,
                                          }),
                                        }),
                                      },
                                      HaV4tpl7B: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Feature Overlap`,
                                          }),
                                        }),
                                      },
                                      P5b6mbSMW: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Feature Overlap`,
                                          }),
                                        }),
                                      },
                                      UANJP7N_Y: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Feature Overlap`,
                                          }),
                                        }),
                                      },
                                    },
                                    U,
                                    W
                                  ),
                                }),
                              ],
                            }),
                          }),
                          a(m.div, {
                            className: `framer-lxbgpt`,
                            "data-framer-name": `Tab Link Item`,
                            "data-highlight": !0,
                            layoutDependency: K,
                            layoutId: `AU1qcNjvY`,
                            onTap: he,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `rgba(0, 0, 0, 0)`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              background: `linear-gradient(180deg, var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14)) 0%, var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14)) 100%)`,
                              backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `none`,
                              opacity: 0.6,
                            },
                            variants: {
                              aiGuXATmM: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              cWJMx7065: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                background: `linear-gradient(180deg, var(--token-44fd2277-9c3f-4980-bff5-788ce75a1cd0, rgb(27, 31, 47)) 0%, rgba(27, 31, 47, 0.3) 100%)`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                boxShadow: `none`,
                                opacity: 1,
                              },
                              EFhOJ4sjy: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              HaV4tpl7B: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              i3s1ZjbCJ: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              nbN541DJF: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              P5b6mbSMW: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              RPQRf27RZ: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                background: `linear-gradient(180deg, rgb(6, 9, 18) 0%, rgb(6, 9, 18) 100%)`,
                                backgroundColor: `rgb(6, 9, 18)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                                opacity: 1,
                              },
                              sxJUGMylx: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                background: `linear-gradient(180deg, rgb(6, 9, 18) 0%, rgb(6, 9, 18) 100%)`,
                                backgroundColor: `rgb(6, 9, 18)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                                opacity: 1,
                              },
                              TB0Rm8m6Q: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              UANJP7N_Y: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                            },
                            ...Z(
                              {
                                aiGuXATmM: { onTap: ge },
                                cWJMx7065: {
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                HaV4tpl7B: { onTap: _e },
                                nbN541DJF: { onTap: ge },
                                P5b6mbSMW: { onTap: _e },
                                RPQRf27RZ: {
                                  "data-border": !0,
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                sxJUGMylx: {
                                  "data-border": !0,
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                TB0Rm8m6Q: { onTap: ge },
                                UANJP7N_Y: { onTap: _e },
                              },
                              U,
                              W
                            ),
                            children: l(m.div, {
                              className: `framer-b2g883`,
                              "data-framer-name": `Tab Link`,
                              layoutDependency: K,
                              layoutId: `UipzQ3Lsn`,
                              style: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                              },
                              variants: {
                                aiGuXATmM: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                cWJMx7065: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                EFhOJ4sjy: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                HaV4tpl7B: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                i3s1ZjbCJ: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                nbN541DJF: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                P5b6mbSMW: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                RPQRf27RZ: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                sxJUGMylx: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                TB0Rm8m6Q: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                UANJP7N_Y: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                              },
                              children: [
                                a(b, {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: M(
                                      (f?.y || 0) +
                                        1 +
                                        (((f?.height || 430) - 2 - 436) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        0 +
                                        64 +
                                        1 +
                                        0 +
                                        15
                                    ),
                                    pixelHeight: 18,
                                    pixelWidth: 19,
                                    sizes: `24px`,
                                    ...Q(E),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                  className: `framer-ibpkxl`,
                                  "data-framer-name": `Tab Link Icon`,
                                  layoutDependency: K,
                                  layoutId: `A4hWS4FGC`,
                                  ...Z(
                                    {
                                      aiGuXATmM: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `24px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      cWJMx7065: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `18px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      HaV4tpl7B: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `18px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      i3s1ZjbCJ: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: M(
                                            (f?.y || 0) +
                                              1 +
                                              (((f?.height || 430) - 2 - 428) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              64 +
                                              1 +
                                              0 +
                                              15
                                          ),
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `24px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      nbN541DJF: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `24px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      P5b6mbSMW: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `18px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      RPQRf27RZ: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: M(
                                            (f?.y || 0) +
                                              1 +
                                              (((f?.height || 430) - 2 - 436) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              64 +
                                              15 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `24px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      sxJUGMylx: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `24px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      TB0Rm8m6Q: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `24px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      UANJP7N_Y: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 19,
                                          sizes: `18px`,
                                          ...Q(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                    },
                                    U,
                                    W
                                  ),
                                }),
                                a(C, {
                                  __fromCanvasComponent: !0,
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                      },
                                      children: ` Difficult Discovery`,
                                    }),
                                  }),
                                  className: `framer-1yoiu4n`,
                                  fonts: [`GF;Geist-500`],
                                  layoutDependency: K,
                                  layoutId: `QZF3BmiIV`,
                                  style: {
                                    "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: T,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      cWJMx7065: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: ` Difficult Discovery`,
                                          }),
                                        }),
                                      },
                                      HaV4tpl7B: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: ` Difficult Discovery`,
                                          }),
                                        }),
                                      },
                                      P5b6mbSMW: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: ` Difficult Discovery`,
                                          }),
                                        }),
                                      },
                                      UANJP7N_Y: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: ` Difficult Discovery`,
                                          }),
                                        }),
                                      },
                                    },
                                    U,
                                    W
                                  ),
                                }),
                              ],
                            }),
                          }),
                          a(m.div, {
                            className: `framer-8wohb9`,
                            "data-framer-name": `Tab Link Item`,
                            "data-highlight": !0,
                            layoutDependency: K,
                            layoutId: `wVDGzttmi`,
                            onTap: ve,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `rgba(0, 0, 0, 0)`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              background: `linear-gradient(180deg, var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14)) 0%, var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14)) 100%)`,
                              backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `none`,
                              opacity: 0.6,
                            },
                            variants: {
                              aiGuXATmM: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              cWJMx7065: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              EFhOJ4sjy: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              HaV4tpl7B: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              i3s1ZjbCJ: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                background: `linear-gradient(180deg, rgb(6, 9, 18) 0%, rgb(6, 9, 18) 100%)`,
                                backgroundColor: `rgb(6, 9, 18)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                                opacity: 1,
                              },
                              nbN541DJF: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              P5b6mbSMW: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                background: `linear-gradient(180deg, var(--token-44fd2277-9c3f-4980-bff5-788ce75a1cd0, rgb(27, 31, 47)) 0%, rgba(27, 31, 47, 0.3) 100%)`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                boxShadow: `none`,
                                opacity: 1,
                              },
                              sxJUGMylx: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              TB0Rm8m6Q: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                background: `linear-gradient(180deg, rgb(6, 9, 18) 0%, rgb(6, 9, 18) 100%)`,
                                backgroundColor: `rgb(6, 9, 18)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                                opacity: 1,
                              },
                              UANJP7N_Y: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                            },
                            ...Z(
                              {
                                aiGuXATmM: { onTap: ye },
                                cWJMx7065: { onTap: J },
                                HaV4tpl7B: { onTap: J },
                                i3s1ZjbCJ: {
                                  "data-border": !0,
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                nbN541DJF: { onTap: ye },
                                P5b6mbSMW: {
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                sxJUGMylx: { onTap: ye },
                                TB0Rm8m6Q: {
                                  "data-border": !0,
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                UANJP7N_Y: { onTap: J },
                              },
                              U,
                              W
                            ),
                            children: l(m.div, {
                              className: `framer-7nsqjl`,
                              "data-framer-name": `Tab Link`,
                              layoutDependency: K,
                              layoutId: `yzqGssIMR`,
                              style: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                              },
                              variants: {
                                aiGuXATmM: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                cWJMx7065: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                EFhOJ4sjy: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                HaV4tpl7B: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                i3s1ZjbCJ: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                nbN541DJF: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                P5b6mbSMW: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                sxJUGMylx: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                TB0Rm8m6Q: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                UANJP7N_Y: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                              },
                              children: [
                                a(b, {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: M(
                                      (f?.y || 0) +
                                        1 +
                                        (((f?.height || 430) - 2 - 436) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        0 +
                                        130 +
                                        1 +
                                        0 +
                                        15
                                    ),
                                    pixelHeight: 20,
                                    pixelWidth: 20,
                                    sizes: `24px`,
                                    ...Q(N),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                  className: `framer-1wu78r7`,
                                  "data-framer-name": `Tab Link Icon`,
                                  layoutDependency: K,
                                  layoutId: `oAYTO5C3L`,
                                  ...Z(
                                    {
                                      aiGuXATmM: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `24px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      cWJMx7065: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `18px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      HaV4tpl7B: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `18px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      i3s1ZjbCJ: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: M(
                                            (f?.y || 0) +
                                              1 +
                                              (((f?.height || 430) - 2 - 428) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              130 +
                                              15 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `24px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      nbN541DJF: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `24px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      P5b6mbSMW: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `18px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      RPQRf27RZ: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: M(
                                            (f?.y || 0) +
                                              1 +
                                              (((f?.height || 430) - 2 - 436) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              128 +
                                              1 +
                                              0 +
                                              15
                                          ),
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `24px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      sxJUGMylx: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `24px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      TB0Rm8m6Q: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `24px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      UANJP7N_Y: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 20,
                                          pixelWidth: 20,
                                          sizes: `18px`,
                                          ...Q(N),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                    },
                                    U,
                                    W
                                  ),
                                }),
                                a(C, {
                                  __fromCanvasComponent: !0,
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                      },
                                      children: `No Personalization`,
                                    }),
                                  }),
                                  className: `framer-174m8ie`,
                                  fonts: [`GF;Geist-500`],
                                  layoutDependency: K,
                                  layoutId: `CYPrFfKDZ`,
                                  style: {
                                    "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: j,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      cWJMx7065: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `No Personalization`,
                                          }),
                                        }),
                                      },
                                      HaV4tpl7B: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `No Personalization`,
                                          }),
                                        }),
                                      },
                                      P5b6mbSMW: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `No Personalization`,
                                          }),
                                        }),
                                      },
                                      UANJP7N_Y: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `No Personalization`,
                                          }),
                                        }),
                                      },
                                    },
                                    U,
                                    W
                                  ),
                                }),
                              ],
                            }),
                          }),
                          a(m.div, {
                            className: `framer-1e2139i`,
                            "data-framer-name": `Tab Link Item`,
                            "data-highlight": !0,
                            layoutDependency: K,
                            layoutId: `NPfM8eS4D`,
                            onTap: be,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `rgba(0, 0, 0, 0)`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                              background: `linear-gradient(180deg, var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14)) 0%, var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14)) 100%)`,
                              backgroundColor: `var(--token-e4e4f4db-f934-41af-9ba9-bfefc47fb1a8, rgb(4, 6, 14))`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              boxShadow: `none`,
                              opacity: 0.6,
                            },
                            variants: {
                              aiGuXATmM: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                background: `linear-gradient(180deg, rgb(6, 9, 18) 0%, rgb(6, 9, 18) 100%)`,
                                backgroundColor: `rgb(6, 9, 18)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                                opacity: 1,
                              },
                              cWJMx7065: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              EFhOJ4sjy: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `rgb(36, 44, 79)`,
                                "--border-left-width": `1px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                                background: `linear-gradient(180deg, rgb(6, 9, 18) 0%, rgb(6, 9, 18) 100%)`,
                                backgroundColor: `rgb(6, 9, 18)`,
                                boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                                opacity: 1,
                              },
                              HaV4tpl7B: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                background: `linear-gradient(180deg, var(--token-44fd2277-9c3f-4980-bff5-788ce75a1cd0, rgb(27, 31, 47)) 0%, rgba(27, 31, 47, 0.3) 100%)`,
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                boxShadow: `none`,
                                opacity: 1,
                              },
                              nbN541DJF: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              P5b6mbSMW: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              sxJUGMylx: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              TB0Rm8m6Q: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                              UANJP7N_Y: {
                                "--border-bottom-width": `0px`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-top-width": `0px`,
                                boxShadow: `none`,
                              },
                            },
                            ...Z(
                              {
                                aiGuXATmM: {
                                  "data-border": !0,
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                cWJMx7065: { onTap: Y },
                                EFhOJ4sjy: {
                                  "data-border": !0,
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                HaV4tpl7B: {
                                  "data-highlight": void 0,
                                  onTap: void 0,
                                },
                                nbN541DJF: { onTap: xe },
                                P5b6mbSMW: { onTap: Y },
                                sxJUGMylx: { onTap: xe },
                                TB0Rm8m6Q: { onTap: xe },
                                UANJP7N_Y: { onTap: Y },
                              },
                              U,
                              W
                            ),
                            children: l(m.div, {
                              className: `framer-hchete`,
                              "data-framer-name": `Tab Link`,
                              layoutDependency: K,
                              layoutId: `TDw4Vxs7n`,
                              style: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                              },
                              variants: {
                                aiGuXATmM: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                cWJMx7065: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                EFhOJ4sjy: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                HaV4tpl7B: {
                                  backgroundColor: `var(--token-7f644d3c-fafa-4df1-9482-cf8ab29882f1, rgb(7, 11, 21))`,
                                },
                                nbN541DJF: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                P5b6mbSMW: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                sxJUGMylx: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                TB0Rm8m6Q: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                                UANJP7N_Y: {
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                              },
                              children: [
                                a(b, {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: M(
                                      (f?.y || 0) +
                                        1 +
                                        (((f?.height || 430) - 2 - 436) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        0 +
                                        196 +
                                        1 +
                                        0 +
                                        15
                                    ),
                                    pixelHeight: 18,
                                    pixelWidth: 17,
                                    sizes: `24px`,
                                    ...Q(V),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                  className: `framer-1o18sua`,
                                  "data-framer-name": `Tab Link Icon`,
                                  layoutDependency: K,
                                  layoutId: `XujVYEu09`,
                                  ...Z(
                                    {
                                      aiGuXATmM: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `24px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      cWJMx7065: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `18px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      EFhOJ4sjy: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: M(
                                            (f?.y || 0) +
                                              1 +
                                              (((f?.height || 430) - 2 - 436) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              196 +
                                              15 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `24px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      HaV4tpl7B: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `18px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      i3s1ZjbCJ: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: M(
                                            (f?.y || 0) +
                                              1 +
                                              (((f?.height || 430) - 2 - 428) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              194 +
                                              1 +
                                              0 +
                                              15
                                          ),
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `24px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      nbN541DJF: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `24px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      P5b6mbSMW: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `18px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      RPQRf27RZ: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: M(
                                            (f?.y || 0) +
                                              1 +
                                              (((f?.height || 430) - 2 - 436) /
                                                2 +
                                                0 +
                                                0) +
                                              0 +
                                              0 +
                                              194 +
                                              1 +
                                              0 +
                                              15
                                          ),
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `24px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      sxJUGMylx: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `24px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      TB0Rm8m6Q: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `24px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      UANJP7N_Y: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          pixelHeight: 18,
                                          pixelWidth: 17,
                                          sizes: `18px`,
                                          ...Q(V),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                    },
                                    U,
                                    W
                                  ),
                                }),
                                a(C, {
                                  __fromCanvasComponent: !0,
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-weight": `500`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                      },
                                      children: `Fragmented Experience`,
                                    }),
                                  }),
                                  className: `framer-p45cma`,
                                  fonts: [`GF;Geist-500`],
                                  layoutDependency: K,
                                  layoutId: `zAn40f_Ty`,
                                  style: {
                                    "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  text: te,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...Z(
                                    {
                                      cWJMx7065: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Fragmented Experience`,
                                          }),
                                        }),
                                      },
                                      HaV4tpl7B: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Fragmented Experience`,
                                          }),
                                        }),
                                      },
                                      P5b6mbSMW: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Fragmented Experience`,
                                          }),
                                        }),
                                      },
                                      UANJP7N_Y: {
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `Fragmented Experience`,
                                          }),
                                        }),
                                      },
                                    },
                                    U,
                                    W
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      a(m.div, {
                        className: `framer-z3kaam`,
                        "data-framer-name": `Tab Content Wrapper`,
                        layoutDependency: K,
                        layoutId: `VSgEYNF_7`,
                        style: {
                          background: `linear-gradient(180deg, var(--token-44fd2277-9c3f-4980-bff5-788ce75a1cd0, rgb(27, 31, 47)) 0%, rgba(27, 31, 47, 0.3) 100%)`,
                          borderBottomLeftRadius: 22,
                          borderBottomRightRadius: 22,
                          borderTopLeftRadius: 22,
                          borderTopRightRadius: 22,
                        },
                        variants: {
                          EFhOJ4sjy: {
                            borderBottomLeftRadius: 23,
                            borderBottomRightRadius: 23,
                            borderTopLeftRadius: 23,
                            borderTopRightRadius: 23,
                          },
                          i3s1ZjbCJ: {
                            borderBottomLeftRadius: 23,
                            borderBottomRightRadius: 23,
                            borderTopLeftRadius: 23,
                            borderTopRightRadius: 23,
                          },
                        },
                        children: a(m.div, {
                          className: `framer-5c7hn0`,
                          "data-border": !0,
                          "data-framer-name": `Tab Content Wrap`,
                          layoutDependency: K,
                          layoutId: `ZcQYmvERh`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(36, 44, 79)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `rgb(6, 9, 18)`,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                          },
                          children: a(m.div, {
                            className: `framer-1siz5jw`,
                            "data-framer-name": `Tab Content`,
                            layoutDependency: K,
                            layoutId: `wge8dl2Lx`,
                            style: {
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                            },
                            variants: {
                              aiGuXATmM: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              cWJMx7065: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              EFhOJ4sjy: {
                                backgroundColor: `rgb(7, 9, 18)`,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                              },
                              HaV4tpl7B: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              nbN541DJF: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              P5b6mbSMW: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              sxJUGMylx: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              TB0Rm8m6Q: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                              UANJP7N_Y: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                              },
                            },
                            children: l(m.div, {
                              className: `framer-72ww45`,
                              "data-framer-name": `Tab Content Inner`,
                              layoutDependency: K,
                              layoutId: `lI7VxXYLH`,
                              style: {
                                borderBottomLeftRadius: 8,
                                borderBottomRightRadius: 8,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                              },
                              children: [
                                a(m.div, {
                                  className: `framer-159lvze`,
                                  "data-framer-name": `Tab Image Wrap`,
                                  layoutDependency: K,
                                  layoutId: `R7bwM2qur`,
                                  children: a(b, {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      loading: M(
                                        (f?.y || 0) +
                                          1 +
                                          (((f?.height || 430) - 2 - 436) / 2 +
                                            0 +
                                            0) +
                                          0 +
                                          1 +
                                          0 +
                                          24 +
                                          0 +
                                          24 +
                                          0 +
                                          0 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 355,
                                      pixelWidth: 396,
                                      sizes: `max((max((${
                                        f?.width || `100vw`
                                      } - 52px) / 1.3, 1px) - 142px) / 1.8, 1px)`,
                                      ...Q(w),
                                      positionX: `center`,
                                      positionY: `center`,
                                    },
                                    className: `framer-8uazmh`,
                                    "data-framer-name": `Tab Image`,
                                    layoutDependency: K,
                                    layoutId: `jDtBcpFn_`,
                                    ...Z(
                                      {
                                        aiGuXATmM: {
                                          background: {
                                            alt: `Tab Image`,
                                            fit: `fit`,
                                            pixelHeight: 849,
                                            pixelWidth: 662,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `max((${
                                              f?.width || `100vw`
                                            } - 154px) / 1.8, 1px)`,
                                            src: `https://framerusercontent.com/images/HYd157tUKmb1tWz85nAXG50tWns.png`,
                                            srcSet: `https://framerusercontent.com/images/HYd157tUKmb1tWz85nAXG50tWns.png 662w`,
                                          },
                                        },
                                        cWJMx7065: {
                                          background: {
                                            alt: `Tab Image`,
                                            fit: `fit`,
                                            pixelHeight: 382,
                                            pixelWidth: 351,
                                            positionX: `center`,
                                            positionY: `center`,
                                            src: `https://framerusercontent.com/images/3TBLMSoYmYZWwwfG5z2MBMqmmw.svg`,
                                          },
                                        },
                                        EFhOJ4sjy: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: M(
                                              (f?.y || 0) +
                                                1 +
                                                (((f?.height || 430) -
                                                  2 -
                                                  436) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                1 +
                                                0 +
                                                24 +
                                                0 +
                                                24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 388,
                                            pixelWidth: 293,
                                            sizes: `max((max((${
                                              f?.width || `100vw`
                                            } - 52px) / 1.3, 1px) - 142px) / 1.8, 1px)`,
                                            ...Q(re),
                                            positionX: `center`,
                                            positionY: `center`,
                                          },
                                        },
                                        HaV4tpl7B: {
                                          background: {
                                            alt: `Tab Image`,
                                            fit: `fit`,
                                            pixelHeight: 388,
                                            pixelWidth: 293,
                                            positionX: `center`,
                                            positionY: `center`,
                                            src: `https://framerusercontent.com/images/Ib9kSuswBGe1xRfpYuMVBWhZPao.svg`,
                                          },
                                        },
                                        i3s1ZjbCJ: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: M(
                                              (f?.y || 0) +
                                                1 +
                                                (((f?.height || 430) -
                                                  2 -
                                                  428) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                1 +
                                                0 +
                                                24 +
                                                0 +
                                                24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 703,
                                            pixelWidth: 702,
                                            sizes: `max((max((${
                                              f?.width || `100vw`
                                            } - 52px) / 1.3, 1px) - 142px) / 1.8, 1px)`,
                                            ...Q(R),
                                            positionX: `center`,
                                            positionY: `center`,
                                          },
                                        },
                                        nbN541DJF: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            pixelHeight: 355,
                                            pixelWidth: 396,
                                            sizes: `max((${
                                              f?.width || `100vw`
                                            } - 154px) / 1.8, 1px)`,
                                            ...Q(w),
                                            positionX: `center`,
                                            positionY: `center`,
                                          },
                                        },
                                        P5b6mbSMW: {
                                          background: {
                                            alt: `Tab Image`,
                                            fit: `fit`,
                                            pixelHeight: 703,
                                            pixelWidth: 702,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(${
                                              f?.width || `100vw`
                                            } - 104px)`,
                                            src: `https://framerusercontent.com/images/UAWCkcOwiIGWlZzk6TjxjSm4DU.png`,
                                            srcSet: `https://framerusercontent.com/images/UAWCkcOwiIGWlZzk6TjxjSm4DU.png 702w`,
                                          },
                                        },
                                        RPQRf27RZ: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: M(
                                              (f?.y || 0) +
                                                1 +
                                                (((f?.height || 430) -
                                                  2 -
                                                  436) /
                                                  2 +
                                                  0 +
                                                  0) +
                                                0 +
                                                1 +
                                                0 +
                                                24 +
                                                0 +
                                                24 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 382,
                                            pixelWidth: 351,
                                            sizes: `max((max((${
                                              f?.width || `100vw`
                                            } - 52px) / 1.3, 1px) - 142px) / 1.8, 1px)`,
                                            ...Q(A),
                                            positionX: `center`,
                                            positionY: `center`,
                                          },
                                        },
                                        sxJUGMylx: {
                                          background: {
                                            alt: `Tab Image`,
                                            fit: `fit`,
                                            pixelHeight: 976,
                                            pixelWidth: 841,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `max((${
                                              f?.width || `100vw`
                                            } - 154px) / 1.8, 1px)`,
                                            src: `https://framerusercontent.com/images/MIvdQyE12kQHylVURqUkIAPbiKM.png`,
                                            srcSet: `https://framerusercontent.com/images/MIvdQyE12kQHylVURqUkIAPbiKM.png 841w`,
                                          },
                                        },
                                        TB0Rm8m6Q: {
                                          background: {
                                            alt: `Tab Image`,
                                            fit: `fit`,
                                            pixelHeight: 843,
                                            pixelWidth: 682,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `max((${
                                              f?.width || `100vw`
                                            } - 154px) / 1.8, 1px)`,
                                            src: `https://framerusercontent.com/images/RtlR8w7Cmt2iepOUpSibqePM.png`,
                                            srcSet: `https://framerusercontent.com/images/RtlR8w7Cmt2iepOUpSibqePM.png 682w`,
                                          },
                                        },
                                        UANJP7N_Y: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            pixelHeight: 355,
                                            pixelWidth: 396,
                                            sizes: `calc(${
                                              f?.width || `100vw`
                                            } - 104px)`,
                                            ...Q(w),
                                            positionX: `center`,
                                            positionY: `center`,
                                          },
                                        },
                                      },
                                      U,
                                      W
                                    ),
                                  }),
                                }),
                                l(m.div, {
                                  className: `framer-cxyskt`,
                                  "data-framer-name": `Tab Content Right`,
                                  layoutDependency: K,
                                  layoutId: `vqxdmPDjw`,
                                  children: [
                                    Ce() &&
                                      a(C, {
                                        __fromCanvasComponent: !0,
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `dfdfdfdfdf`,
                                          }),
                                        }),
                                        className: `framer-e4508e`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: K,
                                        layoutId: `wwq5NVcjn`,
                                        style: {
                                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: x,
                                        variants: {
                                          cWJMx7065: {
                                            "--extracted-r6o4lv": `var(--token-785ffc64-3e49-4c17-a719-4c8c80870b89, rgb(255, 255, 255))`,
                                          },
                                          HaV4tpl7B: {
                                            "--extracted-r6o4lv": `var(--token-785ffc64-3e49-4c17-a719-4c8c80870b89, rgb(255, 255, 255))`,
                                          },
                                          P5b6mbSMW: {
                                            "--extracted-r6o4lv": `var(--token-785ffc64-3e49-4c17-a719-4c8c80870b89, rgb(255, 255, 255))`,
                                          },
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Z(
                                          {
                                            aiGuXATmM: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                    "--framer-font-size": `24px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Organize and categorize text with AI`,
                                                }),
                                              }),
                                              text: H,
                                            },
                                            cWJMx7065: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `RlM7U3dpdHplci1tZWRpdW0=`,
                                                    "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-785ffc64-3e49-4c17-a719-4c8c80870b89, rgb(255, 255, 255)))`,
                                                  },
                                                  children: `dfdfdfdfdf`,
                                                }),
                                              }),
                                              fonts: [`FS;Switzer-medium`],
                                            },
                                            EFhOJ4sjy: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                    "--framer-font-size": `24px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Organize and categorize text with AI`,
                                                }),
                                              }),
                                              text: H,
                                            },
                                            HaV4tpl7B: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `RlM7U3dpdHplci1tZWRpdW0=`,
                                                    "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-785ffc64-3e49-4c17-a719-4c8c80870b89, rgb(255, 255, 255)))`,
                                                  },
                                                  children: `dfdfdfdfdf`,
                                                }),
                                              }),
                                              fonts: [`FS;Switzer-medium`],
                                            },
                                            i3s1ZjbCJ: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                    "--framer-font-size": `24px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                  },
                                                  children: `AI that recognizes and tags images`,
                                                }),
                                              }),
                                              text: I,
                                            },
                                            P5b6mbSMW: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `RlM7U3dpdHplci1tZWRpdW0=`,
                                                    "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                                    "--framer-font-size": `28px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-785ffc64-3e49-4c17-a719-4c8c80870b89, rgb(255, 255, 255)))`,
                                                  },
                                                  children: `dfdfdfdfdf`,
                                                }),
                                              }),
                                              fonts: [`FS;Switzer-medium`],
                                            },
                                            RPQRf27RZ: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                    "--framer-font-size": `24px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Process large datasets with AI efficiency`,
                                                }),
                                              }),
                                              text: D,
                                            },
                                            sxJUGMylx: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                    "--framer-font-size": `24px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Process large datasets with AI efficiency`,
                                                }),
                                              }),
                                              text: D,
                                            },
                                            TB0Rm8m6Q: {
                                              children: a(u, {
                                                children: a(m.p, {
                                                  style: {
                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                    "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                    "--framer-font-size": `24px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                                  },
                                                  children: `AI that recognizes and tags images`,
                                                }),
                                              }),
                                              text: I,
                                            },
                                          },
                                          U,
                                          W
                                        ),
                                      }),
                                    a(C, {
                                      __fromCanvasComponent: !0,
                                      children: a(u, {
                                        children: a(m.p, {
                                          style: {
                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                            "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                            "--framer-font-weight": `500`,
                                            "--framer-line-height": `1.5em`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.61))`,
                                          },
                                          children: `Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real time.`,
                                        }),
                                      }),
                                      className: `framer-1fzgb3s`,
                                      fonts: [`Inter-Medium`],
                                      layoutDependency: K,
                                      layoutId: `ASDcelXL6`,
                                      style: {
                                        "--extracted-r6o4lv": `rgba(255, 255, 255, 0.61)`,
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: S,
                                      variants: {
                                        cWJMx7065: {
                                          "--extracted-r6o4lv": `var(--token-1e26854f-977d-4cfb-bbfb-57ca67695fb0, rgb(153, 153, 153))`,
                                        },
                                        HaV4tpl7B: {
                                          "--extracted-r6o4lv": `var(--token-1e26854f-977d-4cfb-bbfb-57ca67695fb0, rgb(153, 153, 153))`,
                                        },
                                        P5b6mbSMW: {
                                          "--extracted-r6o4lv": `var(--token-1e26854f-977d-4cfb-bbfb-57ca67695fb0, rgb(153, 153, 153))`,
                                        },
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                      ...Z(
                                        {
                                          aiGuXATmM: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.61))`,
                                                },
                                                children: `Automatically classify and sort text data using AI-powered models. Perfect for email filtering, document categorization, and content tagging.`,
                                              }),
                                            }),
                                            text: ne,
                                          },
                                          cWJMx7065: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `RlM7U3dpdHplci1tZWRpdW0=`,
                                                  "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                                  "--framer-font-size": `18px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e26854f-977d-4cfb-bbfb-57ca67695fb0, rgb(153, 153, 153)))`,
                                                },
                                                children: `Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real time.`,
                                              }),
                                            }),
                                            fonts: [`FS;Switzer-medium`],
                                          },
                                          EFhOJ4sjy: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.61))`,
                                                },
                                                children: `Automatically classify and sort text data using AI-powered models. Perfect for email filtering, document categorization, and content tagging.`,
                                              }),
                                            }),
                                            text: ne,
                                          },
                                          HaV4tpl7B: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `RlM7U3dpdHplci1tZWRpdW0=`,
                                                  "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                                  "--framer-font-size": `18px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e26854f-977d-4cfb-bbfb-57ca67695fb0, rgb(153, 153, 153)))`,
                                                },
                                                children: `Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real time.`,
                                              }),
                                            }),
                                            fonts: [`FS;Switzer-medium`],
                                          },
                                          i3s1ZjbCJ: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.61))`,
                                                },
                                                children: `Use AI-driven image recognition to detect objects, classify visuals, and automate labeling for media, security, and content management.`,
                                              }),
                                            }),
                                            text: L,
                                          },
                                          P5b6mbSMW: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `RlM7U3dpdHplci1tZWRpdW0=`,
                                                  "--framer-font-family": `"Switzer", "Switzer Placeholder", sans-serif`,
                                                  "--framer-font-size": `18px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e26854f-977d-4cfb-bbfb-57ca67695fb0, rgb(153, 153, 153)))`,
                                                },
                                                children: `Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real time.`,
                                              }),
                                            }),
                                            fonts: [`FS;Switzer-medium`],
                                          },
                                          RPQRf27RZ: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.61))`,
                                                },
                                                children: `AI streamlines data extraction, transformation, and analysis, reducing manual effort and improving accuracy in handling big data.`,
                                              }),
                                            }),
                                            text: k,
                                          },
                                          sxJUGMylx: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.61))`,
                                                },
                                                children: `AI streamlines data extraction, transformation, and analysis, reducing manual effort and improving accuracy in handling big data.`,
                                              }),
                                            }),
                                            text: k,
                                          },
                                          TB0Rm8m6Q: {
                                            children: a(u, {
                                              children: a(m.p, {
                                                style: {
                                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                                  "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.61))`,
                                                },
                                                children: `Use AI-driven image recognition to detect objects, classify visuals, and automate labeling for media, security, and content management.`,
                                              }),
                                            }),
                                            text: L,
                                          },
                                        },
                                        U,
                                        W
                                      ),
                                    }),
                                    we() &&
                                      a(C, {
                                        __fromCanvasComponent: !0,
                                        children: a(u, {
                                          children: a(m.p, {
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-family": `"Inter", "Inter Placeholder", sans-serif`,
                                              "--framer-font-size": `24px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                            },
                                            children: `dfdfdfdfdf`,
                                          }),
                                        }),
                                        className: `framer-143p9k5`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: K,
                                        layoutId: `DUsDVWD70`,
                                        style: {
                                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: x,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-xbubm.framer-poyjpm, .framer-xbubm .framer-poyjpm { display: block; }`,
          `.framer-xbubm.framer-1set6ki { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 1px; position: relative; width: 1140px; }`,
          `.framer-xbubm .framer-qfs3mc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-xbubm .framer-196z61y { align-content: center; align-items: center; display: flex; flex: 0.3 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-xbubm .framer-pdow0s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 15px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xbubm .framer-vlt9a5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-xbubm .framer-i6kv6, .framer-xbubm .framer-ibpkxl, .framer-xbubm .framer-1wu78r7, .framer-xbubm .framer-1o18sua { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          `.framer-xbubm .framer-nvfl8z, .framer-xbubm .framer-1yoiu4n, .framer-xbubm .framer-174m8ie, .framer-xbubm .framer-p45cma { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-xbubm .framer-lxbgpt, .framer-xbubm .framer-8wohb9, .framer-xbubm .framer-1e2139i { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 1px; position: relative; width: 100%; }`,
          `.framer-xbubm .framer-b2g883, .framer-xbubm .framer-7nsqjl, .framer-xbubm .framer-hchete { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 15px; position: relative; width: 100%; }`,
          `.framer-xbubm .framer-z3kaam { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 1px; position: relative; width: 1px; }`,
          `.framer-xbubm .framer-5c7hn0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 30px 24px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xbubm .framer-1siz5jw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 24px; position: relative; width: 100%; }`,
          `.framer-xbubm .framer-72ww45 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-xbubm .framer-159lvze { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-xbubm .framer-8uazmh { flex: none; height: 330px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-xbubm .framer-cxyskt { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.8 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-xbubm .framer-e4508e, .framer-xbubm .framer-1fzgb3s, .framer-xbubm .framer-143p9k5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-xbubm.framer-v-1ykgz8 .framer-pdow0s, .framer-xbubm.framer-v-i06a8o .framer-pdow0s, .framer-xbubm.framer-v-nj1yt5 .framer-pdow0s { align-content: center; align-items: center; cursor: pointer; justify-content: center; overflow: visible; will-change: unset; }`,
          `.framer-xbubm.framer-v-1ykgz8 .framer-lxbgpt, .framer-xbubm.framer-v-i06a8o .framer-8wohb9, .framer-xbubm.framer-v-nj1yt5 .framer-1e2139i { align-content: flex-start; align-items: flex-start; cursor: unset; justify-content: flex-start; overflow: hidden; padding: 15px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xbubm.framer-v-1ykgz8 .framer-b2g883, .framer-xbubm.framer-v-i06a8o .framer-7nsqjl, .framer-xbubm.framer-v-nj1yt5 .framer-hchete, .framer-xbubm.framer-v-t5yzgv .framer-cxyskt, .framer-xbubm.framer-v-6si01r .framer-cxyskt { padding: 0px; }`,
          `.framer-xbubm.framer-v-1ykgz8 .framer-159lvze, .framer-xbubm.framer-v-i06a8o .framer-e4508e, .framer-xbubm.framer-v-nj1yt5 .framer-159lvze, .framer-xbubm.framer-v-9772le .framer-159lvze, .framer-xbubm.framer-v-7d3ajp .framer-159lvze { order: 0; }`,
          `.framer-xbubm.framer-v-1ykgz8 .framer-cxyskt, .framer-xbubm.framer-v-i06a8o .framer-1fzgb3s, .framer-xbubm.framer-v-nj1yt5 .framer-cxyskt, .framer-xbubm.framer-v-t5yzgv .framer-143p9k5 { order: 1; }`,
          `.framer-xbubm.framer-v-t5yzgv.framer-1set6ki, .framer-xbubm.framer-v-9772le.framer-1set6ki, .framer-xbubm.framer-v-6si01r.framer-1set6ki { width: 810px; }`,
          `.framer-xbubm.framer-v-t5yzgv .framer-qfs3mc, .framer-xbubm.framer-v-9772le .framer-qfs3mc, .framer-xbubm.framer-v-6si01r .framer-qfs3mc, .framer-xbubm.framer-v-7d3ajp .framer-qfs3mc, .framer-xbubm.framer-v-z00g2q .framer-qfs3mc, .framer-xbubm.framer-v-dqa40y .framer-qfs3mc, .framer-xbubm.framer-v-7kghn9 .framer-qfs3mc, .framer-xbubm.framer-v-1k94tdl .framer-qfs3mc { flex-direction: column; gap: 10px; }`,
          `.framer-xbubm.framer-v-t5yzgv .framer-196z61y, .framer-xbubm.framer-v-9772le .framer-196z61y, .framer-xbubm.framer-v-6si01r .framer-196z61y { flex: none; flex-direction: row; flex-wrap: wrap; gap: 12px 10px; justify-content: flex-start; width: 100%; }`,
          `.framer-xbubm.framer-v-t5yzgv .framer-pdow0s, .framer-xbubm.framer-v-t5yzgv .framer-vlt9a5, .framer-xbubm.framer-v-t5yzgv .framer-lxbgpt, .framer-xbubm.framer-v-t5yzgv .framer-b2g883, .framer-xbubm.framer-v-t5yzgv .framer-8wohb9, .framer-xbubm.framer-v-t5yzgv .framer-7nsqjl, .framer-xbubm.framer-v-t5yzgv .framer-1e2139i, .framer-xbubm.framer-v-t5yzgv .framer-hchete, .framer-xbubm.framer-v-9772le .framer-8wohb9, .framer-xbubm.framer-v-9772le .framer-7nsqjl, .framer-xbubm.framer-v-9772le .framer-1e2139i, .framer-xbubm.framer-v-9772le .framer-hchete, .framer-xbubm.framer-v-6si01r .framer-vlt9a5, .framer-xbubm.framer-v-6si01r .framer-lxbgpt, .framer-xbubm.framer-v-6si01r .framer-b2g883, .framer-xbubm.framer-v-6si01r .framer-1e2139i, .framer-xbubm.framer-v-6si01r .framer-hchete, .framer-xbubm.framer-v-7d3ajp .framer-vlt9a5, .framer-xbubm.framer-v-7d3ajp .framer-lxbgpt, .framer-xbubm.framer-v-7d3ajp .framer-b2g883, .framer-xbubm.framer-v-7d3ajp .framer-8wohb9, .framer-xbubm.framer-v-7d3ajp .framer-7nsqjl, .framer-xbubm.framer-v-z00g2q .framer-pdow0s, .framer-xbubm.framer-v-z00g2q .framer-lxbgpt, .framer-xbubm.framer-v-z00g2q .framer-8wohb9, .framer-xbubm.framer-v-z00g2q .framer-1e2139i, .framer-xbubm.framer-v-dqa40y .framer-8wohb9, .framer-xbubm.framer-v-dqa40y .framer-1e2139i, .framer-xbubm.framer-v-7kghn9 .framer-pdow0s, .framer-xbubm.framer-v-7kghn9 .framer-lxbgpt, .framer-xbubm.framer-v-7kghn9 .framer-1e2139i, .framer-xbubm.framer-v-1k94tdl .framer-lxbgpt, .framer-xbubm.framer-v-1k94tdl .framer-8wohb9 { width: min-content; }`,
          `.framer-xbubm.framer-v-t5yzgv .framer-z3kaam, .framer-xbubm.framer-v-9772le .framer-z3kaam, .framer-xbubm.framer-v-6si01r .framer-z3kaam, .framer-xbubm.framer-v-7d3ajp .framer-z3kaam, .framer-xbubm.framer-v-z00g2q .framer-159lvze, .framer-xbubm.framer-v-dqa40y .framer-z3kaam, .framer-xbubm.framer-v-7kghn9 .framer-z3kaam, .framer-xbubm.framer-v-7kghn9 .framer-159lvze, .framer-xbubm.framer-v-1k94tdl .framer-z3kaam { flex: none; width: 100%; }`,
          `.framer-xbubm.framer-v-t5yzgv .framer-1siz5jw, .framer-xbubm.framer-v-9772le .framer-1siz5jw, .framer-xbubm.framer-v-6si01r .framer-1siz5jw, .framer-xbubm.framer-v-7d3ajp .framer-1siz5jw { padding: 30px; }`,
          `.framer-xbubm.framer-v-t5yzgv .framer-72ww45, .framer-xbubm.framer-v-9772le .framer-72ww45, .framer-xbubm.framer-v-6si01r .framer-72ww45, .framer-xbubm.framer-v-7d3ajp .framer-72ww45 { gap: 30px; }`,
          `.framer-xbubm.framer-v-t5yzgv .framer-1fzgb3s { order: 2; }`,
          `.framer-xbubm.framer-v-9772le .framer-pdow0s { cursor: pointer; padding: 0px; width: min-content; }`,
          `.framer-xbubm.framer-v-9772le .framer-vlt9a5 { justify-content: center; padding: 15px; width: min-content; }`,
          `.framer-xbubm.framer-v-9772le .framer-lxbgpt, .framer-xbubm.framer-v-6si01r .framer-8wohb9, .framer-xbubm.framer-v-7d3ajp .framer-1e2139i { align-content: flex-start; align-items: flex-start; cursor: unset; justify-content: flex-start; overflow: hidden; padding: 15px; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-xbubm.framer-v-9772le .framer-b2g883, .framer-xbubm.framer-v-6si01r .framer-7nsqjl, .framer-xbubm.framer-v-7d3ajp .framer-hchete { padding: 0px; width: min-content; }`,
          `.framer-xbubm.framer-v-9772le .framer-cxyskt, .framer-xbubm.framer-v-7d3ajp .framer-cxyskt { order: 1; padding: 0px; }`,
          `.framer-xbubm.framer-v-6si01r .framer-pdow0s, .framer-xbubm.framer-v-7d3ajp .framer-pdow0s, .framer-xbubm.framer-v-dqa40y .framer-pdow0s, .framer-xbubm.framer-v-1k94tdl .framer-pdow0s { cursor: pointer; width: min-content; }`,
          `.framer-xbubm.framer-v-7d3ajp.framer-1set6ki { gap: 20px; width: 810px; }`,
          `.framer-xbubm.framer-v-7d3ajp .framer-196z61y { flex: none; flex-direction: row; flex-wrap: wrap; gap: 13px 10px; justify-content: flex-start; width: 100%; }`,
          `.framer-xbubm.framer-v-z00g2q.framer-1set6ki, .framer-xbubm.framer-v-dqa40y.framer-1set6ki, .framer-xbubm.framer-v-7kghn9.framer-1set6ki, .framer-xbubm.framer-v-1k94tdl.framer-1set6ki { width: 350px; }`,
          `.framer-xbubm.framer-v-z00g2q .framer-196z61y { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: row; flex-wrap: wrap; gap: 5px; justify-content: flex-start; order: 0; width: 100%; }`,
          `.framer-xbubm.framer-v-z00g2q .framer-vlt9a5, .framer-xbubm.framer-v-z00g2q .framer-b2g883, .framer-xbubm.framer-v-z00g2q .framer-7nsqjl, .framer-xbubm.framer-v-z00g2q .framer-hchete, .framer-xbubm.framer-v-dqa40y .framer-vlt9a5, .framer-xbubm.framer-v-dqa40y .framer-b2g883, .framer-xbubm.framer-v-dqa40y .framer-7nsqjl, .framer-xbubm.framer-v-dqa40y .framer-hchete, .framer-xbubm.framer-v-7kghn9 .framer-vlt9a5, .framer-xbubm.framer-v-7kghn9 .framer-b2g883, .framer-xbubm.framer-v-7kghn9 .framer-7nsqjl, .framer-xbubm.framer-v-7kghn9 .framer-hchete, .framer-xbubm.framer-v-1k94tdl .framer-vlt9a5, .framer-xbubm.framer-v-1k94tdl .framer-b2g883, .framer-xbubm.framer-v-1k94tdl .framer-7nsqjl, .framer-xbubm.framer-v-1k94tdl .framer-hchete { gap: 8px; padding: 10px; width: min-content; }`,
          `.framer-xbubm.framer-v-z00g2q .framer-i6kv6, .framer-xbubm.framer-v-z00g2q .framer-ibpkxl, .framer-xbubm.framer-v-z00g2q .framer-1wu78r7, .framer-xbubm.framer-v-z00g2q .framer-1o18sua, .framer-xbubm.framer-v-dqa40y .framer-i6kv6, .framer-xbubm.framer-v-dqa40y .framer-ibpkxl, .framer-xbubm.framer-v-dqa40y .framer-1wu78r7, .framer-xbubm.framer-v-dqa40y .framer-1o18sua, .framer-xbubm.framer-v-7kghn9 .framer-i6kv6, .framer-xbubm.framer-v-7kghn9 .framer-ibpkxl, .framer-xbubm.framer-v-7kghn9 .framer-1wu78r7, .framer-xbubm.framer-v-7kghn9 .framer-1o18sua, .framer-xbubm.framer-v-1k94tdl .framer-i6kv6, .framer-xbubm.framer-v-1k94tdl .framer-ibpkxl, .framer-xbubm.framer-v-1k94tdl .framer-1wu78r7, .framer-xbubm.framer-v-1k94tdl .framer-1o18sua { height: var(--framer-aspect-ratio-supported, 19px); width: 18px; }`,
          `.framer-xbubm.framer-v-z00g2q .framer-z3kaam { flex: none; order: 1; width: 100%; }`,
          `.framer-xbubm.framer-v-z00g2q .framer-1siz5jw, .framer-xbubm.framer-v-dqa40y .framer-1siz5jw, .framer-xbubm.framer-v-7kghn9 .framer-1siz5jw, .framer-xbubm.framer-v-1k94tdl .framer-1siz5jw { padding: 20px; }`,
          `.framer-xbubm.framer-v-z00g2q .framer-72ww45, .framer-xbubm.framer-v-dqa40y .framer-72ww45, .framer-xbubm.framer-v-7kghn9 .framer-72ww45, .framer-xbubm.framer-v-1k94tdl .framer-72ww45 { flex-direction: column; gap: 30px; }`,
          `.framer-xbubm.framer-v-z00g2q .framer-8uazmh, .framer-xbubm.framer-v-dqa40y .framer-8uazmh, .framer-xbubm.framer-v-7kghn9 .framer-8uazmh, .framer-xbubm.framer-v-1k94tdl .framer-8uazmh { height: 260px; }`,
          `.framer-xbubm.framer-v-z00g2q .framer-cxyskt, .framer-xbubm.framer-v-7kghn9 .framer-cxyskt { flex: none; padding: 0px; width: 100%; }`,
          `.framer-xbubm.framer-v-dqa40y .framer-196z61y, .framer-xbubm.framer-v-7kghn9 .framer-196z61y, .framer-xbubm.framer-v-1k94tdl .framer-196z61y { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: row; flex-wrap: wrap; gap: 5px; justify-content: flex-start; width: 100%; }`,
          `.framer-xbubm.framer-v-dqa40y .framer-lxbgpt, .framer-xbubm.framer-v-7kghn9 .framer-8wohb9, .framer-xbubm.framer-v-1k94tdl .framer-1e2139i { cursor: unset; width: min-content; }`,
          `.framer-xbubm.framer-v-dqa40y .framer-159lvze, .framer-xbubm.framer-v-1k94tdl .framer-159lvze { flex: none; order: 0; width: 100%; }`,
          `.framer-xbubm.framer-v-dqa40y .framer-cxyskt, .framer-xbubm.framer-v-1k94tdl .framer-cxyskt { flex: none; order: 1; padding: 0px; width: 100%; }`,
          `.framer-xbubm[data-border="true"]::after, .framer-xbubm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-xbubm`
      )),
      (tn = en),
      (en.displayName = `Feature Tab`),
      (en.defaultProps = { height: 430, width: 1140 }),
      D(en, {
        variant: {
          options: [
            `s0hpJwkAE`,
            `RPQRf27RZ`,
            `i3s1ZjbCJ`,
            `EFhOJ4sjy`,
            `nbN541DJF`,
            `sxJUGMylx`,
            `TB0Rm8m6Q`,
            `aiGuXATmM`,
            `UANJP7N_Y`,
            `cWJMx7065`,
            `P5b6mbSMW`,
            `HaV4tpl7B`,
          ],
          optionTitles: [
            `Feature Tab`,
            `Feature Tab Second`,
            `Feature Tab Third`,
            `Feature Tab Fourth`,
            `Feature Tab - Tablet`,
            `Feature Tab Second - Tablet`,
            `Feature Tab Third - Tablet`,
            `Feature Tab Fourth - Tablet`,
            `Feature Tab - Mobile`,
            `Feature Tab Second - Mobile`,
            `Feature Tab Third - Mobile`,
            `Feature Tab Fourth - Mobile`,
          ],
          title: `Variant`,
          type: v.Enum,
        },
        mTCDp4LCs: {
          __defaultAssetReference: `data:framer/asset-reference,wO0GRgseDD00cYZIb19bSEXJwE.svg?originalFilename=icon-02.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Tab Link Icon`,
            assetReference: `data:framer/asset-reference,wO0GRgseDD00cYZIb19bSEXJwE.svg?originalFilename=icon-02.svg&preferredSize=auto`,
          },
          title: `Tab 1 - Link Icon`,
          type: v.ResponsiveImage,
        },
        LQ0TPE0ax: {
          defaultValue: `Feature Overlap`,
          displayTextArea: !1,
          placeholder: ``,
          title: `Tab 1 -  Link Text`,
          type: v.String,
        },
        f5eY3cgCD: {
          defaultValue: `dfdfdfdfdf`,
          displayTextArea: !0,
          title: `Tab 1 -  Title`,
          type: v.String,
        },
        VW0z7nrEX: {
          defaultValue: `Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real time.`,
          displayTextArea: !0,
          title: `Tab 1 -  Content`,
          type: v.String,
        },
        efL5EylsZ: {
          __defaultAssetReference: `data:framer/asset-reference,XWi3Zoe7fK700s6m3scfS6AXdyA.png?originalFilename=Curation+Types.png&preferredSize=auto`,
          title: `Tab 1 -  Image`,
          type: v.ResponsiveImage,
        },
        VJAOmtLMy: {
          defaultValue: `Difficult Discovery`,
          displayTextArea: !1,
          title: `Tab 2 -  Link Text`,
          type: v.String,
        },
        pXLl77XPo: {
          __defaultAssetReference: `data:framer/asset-reference,LMfyGHv4vd8bnlZ8SToOMMW4TU.svg?originalFilename=icon-03.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Tab Link Icon`,
            assetReference: `data:framer/asset-reference,LMfyGHv4vd8bnlZ8SToOMMW4TU.svg?originalFilename=icon-03.svg&preferredSize=auto`,
          },
          title: `Tab 2 - Link Icon`,
          type: v.ResponsiveImage,
        },
        hlriAO8HM: {
          defaultValue: `Process large datasets with AI efficiency`,
          displayTextArea: !0,
          title: `Tab 2 - Title`,
          type: v.String,
        },
        hZRcI7QMJ: {
          defaultValue: `Users are redirected out of context to find and add content e.g., to add Course, Path- global search, to add Skill IQ or external link there are modals  and to add a lab user get redirected to content landing page.`,
          displayTextArea: !0,
          title: `Tab 2 - Content`,
          type: v.String,
        },
        NXnQ8rU_i: {
          __defaultAssetReference: `data:framer/asset-reference,3TBLMSoYmYZWwwfG5z2MBMqmmw.svg?originalFilename=tab-image-02.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Tab Image`,
            assetReference: `data:framer/asset-reference,3TBLMSoYmYZWwwfG5z2MBMqmmw.svg?originalFilename=tab-image-02.svg&preferredSize=auto`,
          },
          title: `Tab 2 - Image`,
          type: v.ResponsiveImage,
        },
        QEVGJtFdG: {
          defaultValue: `No Personalization`,
          displayTextArea: !1,
          title: `Tab 3 -  Link Text`,
          type: v.String,
        },
        roVUInC6L: {
          __defaultAssetReference: `data:framer/asset-reference,Jo4qTyQc9CpoB46EAmjUdVqc20I.svg?originalFilename=icon-04.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Tab Link Icon`,
            assetReference: `data:framer/asset-reference,Jo4qTyQc9CpoB46EAmjUdVqc20I.svg?originalFilename=icon-04.svg&preferredSize=auto`,
          },
          title: `Tab 3 - Link Icon`,
          type: v.ResponsiveImage,
        },
        HRjOXWPgm: {
          defaultValue: `AI that recognizes and tags images`,
          displayTextArea: !0,
          title: `Tab 3 - Title`,
          type: v.String,
        },
        nZPVgCoQa: {
          defaultValue: `Use AI-driven image recognition to detect objects, classify visuals, and automate labeling for media, security, and content management.`,
          displayTextArea: !0,
          title: `Tab 3 - Content`,
          type: v.String,
        },
        ueSr9Pjev: {
          __defaultAssetReference: `data:framer/asset-reference,UAWCkcOwiIGWlZzk6TjxjSm4DU.png?originalFilename=tab-image-03.png&preferredSize=auto`,
          __vekterDefault: {
            alt: `Tab Image`,
            assetReference: `data:framer/asset-reference,UAWCkcOwiIGWlZzk6TjxjSm4DU.png?originalFilename=tab-image-03.png&preferredSize=auto`,
          },
          title: `Tab 3 - Image`,
          type: v.ResponsiveImage,
        },
        GOkJ7PyjO: {
          defaultValue: `Fragmented Experience`,
          displayTextArea: !1,
          title: `Tab 4 -  Link Text`,
          type: v.String,
        },
        g4hpGL7GZ: {
          __defaultAssetReference: `data:framer/asset-reference,5iaj2LbCKG2yKfyRWeZ1F5l6yo.svg?originalFilename=icon-05.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Tab Link Icon`,
            assetReference: `data:framer/asset-reference,5iaj2LbCKG2yKfyRWeZ1F5l6yo.svg?originalFilename=icon-05.svg&preferredSize=auto`,
          },
          title: `Tab 4 - Link Icon`,
          type: v.ResponsiveImage,
        },
        NBxqpZQMB: {
          defaultValue: `Organize and categorize text with AI`,
          displayTextArea: !0,
          title: `Tab 4 - Title`,
          type: v.String,
        },
        HaFQRicXl: {
          defaultValue: `Automatically classify and sort text data using AI-powered models. Perfect for email filtering, document categorization, and content tagging.`,
          displayTextArea: !0,
          title: `Tab 4 - Content`,
          type: v.String,
        },
        tnkctlVRh: {
          __defaultAssetReference: `data:framer/asset-reference,Ib9kSuswBGe1xRfpYuMVBWhZPao.svg?originalFilename=tab-image-04.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Tab Image`,
            assetReference: `data:framer/asset-reference,Ib9kSuswBGe1xRfpYuMVBWhZPao.svg?originalFilename=tab-image-04.svg&preferredSize=auto`,
          },
          title: `Tab 4 - Image`,
          type: v.ResponsiveImage,
        },
      }),
      E(
        en,
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
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2`,
                weight: `500`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
              {
                family: `Switzer`,
                source: `fontshare`,
                style: `normal`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/OYB4CXKJQXKTNSLJMTDQOIVUL2V5EL7S/WYO2P7DQVV5RNXGMCUO2HL4RJP4VFUAS/6XPIMU23OJVRY676OG5YVJMWEHWICATX.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function rn(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn = e(() => {
    r(),
      N(),
      p(),
      i(),
      (an = [`kXBq4LYWQ`, `TNLnUsQ3c`]),
      (on = `framer-QvaQu`),
      (sn = { kXBq4LYWQ: `framer-v-1aworhg`, TNLnUsQ3c: `framer-v-k2txut` }),
      (cn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ln = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (un = m.create(u)),
      (dn = { "Variant 2": `TNLnUsQ3c`, Curatior: `kXBq4LYWQ` }),
      (fn = ({ cursor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        efFNNHhEz: e ?? i.efFNNHhEz,
        variant: dn[i.variant] ?? i.variant ?? `kXBq4LYWQ`,
      })),
      (pn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (mn = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z(),
            f = F(),
            {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              efFNNHhEz: v,
              ...y
            } = fn(e),
            {
              baseVariant: S,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: N,
            } = B({
              cycleOrder: an,
              defaultVariant: `kXBq4LYWQ`,
              ref: i,
              variant: _,
              variantClassNames: sn,
            }),
            I = pn(e, N),
            { activeVariantCallback: L, delay: R } = P(S),
            te = L(async (...e) => {
              j(`kXBq4LYWQ`);
            }),
            V = L(async (...e) => {
              j(`TNLnUsQ3c`);
            }),
            H = O(on);
          return a(d, {
            id: g ?? s,
            children: a(un, {
              animate: N,
              initial: !1,
              children: a(ln, {
                value: cn,
                children: l(m.div, {
                  ...y,
                  ...E,
                  className: O(H, `framer-1aworhg`, h, w),
                  "data-framer-name": `Curatior`,
                  layoutDependency: I,
                  layoutId: `kXBq4LYWQ`,
                  ref: i,
                  style: { ...p },
                  ...rn(
                    { TNLnUsQ3c: { "data-framer-name": `Variant 2` } },
                    S,
                    D
                  ),
                  children: [
                    l(m.div, {
                      className: `framer-czh01b`,
                      layoutDependency: I,
                      layoutId: `ImnRK_pFF`,
                      children: [
                        a(m.div, {
                          className: `framer-5ldwzf`,
                          "data-border": !0,
                          "data-framer-name": `Highlighter`,
                          layoutDependency: I,
                          layoutId: `ITsVqVNrC`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgb(36, 44, 79)`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `rgb(9, 14, 28)`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                          },
                          variants: {
                            TNLnUsQ3c: {
                              "--border-bottom-width": `0px`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-top-width": `0px`,
                              backgroundColor: `rgb(25, 30, 41)`,
                              boxShadow: `none`,
                            },
                          },
                          ...rn(
                            { TNLnUsQ3c: { "data-highlight": !0, onTap: te } },
                            S,
                            D
                          ),
                          children: a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `0.1px`,
                                  "--framer-line-height": `12px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                },
                                children: `Curator's Flow`,
                              }),
                            }),
                            className: `framer-s5p8u3`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Geist-500`],
                            layoutDependency: I,
                            layoutId: `J1mAKxToP`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              TNLnUsQ3c: {
                                "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...rn(
                              {
                                TNLnUsQ3c: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.1px`,
                                        "--framer-line-height": `12px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                      },
                                      children: `Curator's Flow`,
                                    }),
                                  }),
                                },
                              },
                              S,
                              D
                            ),
                          }),
                        }),
                        a(m.div, {
                          className: `framer-6hj1ju`,
                          "data-framer-name": `Highlighter`,
                          "data-highlight": !0,
                          layoutDependency: I,
                          layoutId: `pGc0NxAMr`,
                          onTap: V,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `rgba(0, 0, 0, 0)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            backgroundColor: `rgb(25, 30, 41)`,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            boxShadow: `none`,
                          },
                          variants: {
                            TNLnUsQ3c: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `rgb(36, 44, 79)`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `rgb(9, 14, 28)`,
                              boxShadow: `inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(66, 95, 168, 0.73), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(66, 95, 168, 0.69), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(66, 95, 168, 0.59), inset 6px 12px 13.416407864998739px -3.75px rgba(66, 95, 168, 0.25)`,
                            },
                          },
                          ...rn({ TNLnUsQ3c: { "data-border": !0 } }, S, D),
                          children: a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(m.p, {
                                style: {
                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `0.1px`,
                                  "--framer-line-height": `12px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))`,
                                },
                                children: `Learner's Flow`,
                              }),
                            }),
                            className: `framer-1l0j4ho`,
                            "data-framer-name": `Text`,
                            fonts: [`GF;Geist-500`],
                            layoutDependency: I,
                            layoutId: `DBMxfBtJd`,
                            style: {
                              "--extracted-r6o4lv": `rgba(255, 255, 255, 0.6)`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            variants: {
                              TNLnUsQ3c: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...rn(
                              {
                                TNLnUsQ3c: {
                                  children: a(u, {
                                    children: a(m.p, {
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `0.1px`,
                                        "--framer-line-height": `12px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                      },
                                      children: `Learner's Flow`,
                                    }),
                                  }),
                                },
                              },
                              S,
                              D
                            ),
                          }),
                        }),
                      ],
                    }),
                    a(x, {
                      href: `https://www.figma.com/design/UJYiu6FMSoQ7UoRzO7Voae/Portfolio---LP?node-id=1542-7410&t=yjPnSfmg08e3lSEW-4`,
                      motionChild: !0,
                      nodeId: `wnmmkquQ7`,
                      openInNewTab: !0,
                      scopeId: `W7o41jgq1`,
                      ...rn(
                        {
                          TNLnUsQ3c: {
                            href: `https://www.figma.com/design/UJYiu6FMSoQ7UoRzO7Voae/Portfolio---LP?node-id=1542-7476&t=yjPnSfmg08e3lSEW-4`,
                          },
                        },
                        S,
                        D
                      ),
                      children: a(b, {
                        as: `a`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 2480,
                          intrinsicWidth: 5584,
                          loading: M((f?.y || 0) + 0 + 58),
                          pixelHeight: 2268,
                          pixelWidth: 4613,
                          sizes: `calc(${f?.width || `100vw`} * 1.001)`,
                          src: `https://framerusercontent.com/images/Dq4FkPn5j2ExdIV375Iltt658c.png`,
                          srcSet: `https://framerusercontent.com/images/Dq4FkPn5j2ExdIV375Iltt658c.png?scale-down-to=512 512w,https://framerusercontent.com/images/Dq4FkPn5j2ExdIV375Iltt658c.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Dq4FkPn5j2ExdIV375Iltt658c.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/Dq4FkPn5j2ExdIV375Iltt658c.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/Dq4FkPn5j2ExdIV375Iltt658c.png 4613w`,
                        },
                        className: `framer-6ayiz0 framer-w7383h`,
                        "data-framer-cursor": v,
                        "data-framer-name": `Image`,
                        layoutDependency: I,
                        layoutId: `wnmmkquQ7`,
                        ...rn(
                          {
                            TNLnUsQ3c: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 2480,
                                intrinsicWidth: 5584,
                                loading: M((f?.y || 0) + 0 + 58),
                                pixelHeight: 3089,
                                pixelWidth: 6299,
                                sizes: `calc(${f?.width || `100vw`} * 1.001)`,
                                src: `https://framerusercontent.com/images/xKdukMeuPQNBoSy8xkHVISSqHv8.png`,
                                srcSet: `https://framerusercontent.com/images/xKdukMeuPQNBoSy8xkHVISSqHv8.png?scale-down-to=512 512w,https://framerusercontent.com/images/xKdukMeuPQNBoSy8xkHVISSqHv8.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/xKdukMeuPQNBoSy8xkHVISSqHv8.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/xKdukMeuPQNBoSy8xkHVISSqHv8.png?scale-down-to=4096 4096w,https://framerusercontent.com/images/xKdukMeuPQNBoSy8xkHVISSqHv8.png 6299w`,
                              },
                            },
                          },
                          S,
                          D
                        ),
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
          `.framer-QvaQu.framer-w7383h, .framer-QvaQu .framer-w7383h { display: block; }`,
          `.framer-QvaQu.framer-1aworhg { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 513px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 960px; }`,
          `.framer-QvaQu .framer-czh01b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-QvaQu .framer-5ldwzf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 18px 24px 18px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QvaQu .framer-s5p8u3, .framer-QvaQu .framer-1l0j4ho { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-QvaQu .framer-6hj1ju { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 18px 24px 18px 24px; position: relative; width: min-content; }`,
          `.framer-QvaQu .framer-6ayiz0 { flex: none; height: 90%; overflow: visible; position: relative; text-decoration: none; width: 100%; }`,
          `.framer-QvaQu.framer-v-k2txut .framer-5ldwzf { align-content: center; align-items: center; cursor: pointer; flex-direction: row; overflow: visible; will-change: unset; }`,
          `.framer-QvaQu.framer-v-k2txut .framer-6hj1ju { align-content: flex-start; align-items: flex-start; flex-direction: column; overflow: hidden; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QvaQu[data-border="true"]::after, .framer-QvaQu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-QvaQu`
      )),
      (hn = mn),
      (mn.displayName = `User Flow`),
      (mn.defaultProps = { height: 513, width: 960 }),
      D(mn, {
        variant: {
          options: [`kXBq4LYWQ`, `TNLnUsQ3c`],
          optionTitles: [`Curatior`, `Variant 2`],
          title: `Variant`,
          type: v.Enum,
        },
        efFNNHhEz: { title: `Cursor`, type: v.CustomCursor },
      }),
      E(
        mn,
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
function _n(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn = e(() => {
    r(),
      N(),
      p(),
      i(),
      (vn = [
        `fvMr6EC4I`,
        `G67NuZR19`,
        `cW7c_PaUG`,
        `mXqm98au_`,
        `J97SrbYCH`,
        `IJAJ99xTC`,
      ]),
      (yn = `framer-fRXX3`),
      (bn = {
        cW7c_PaUG: `framer-v-1gf2lna`,
        fvMr6EC4I: `framer-v-1xue6e7`,
        G67NuZR19: `framer-v-1opff7s`,
        IJAJ99xTC: `framer-v-1cdbgd`,
        J97SrbYCH: `framer-v-hkwmu0`,
        mXqm98au_: `framer-v-1ym3vyj`,
      }),
      (xn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Sn = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Cn = m.create(u)),
      (wn = {
        "Variant 1- Selected": `mXqm98au_`,
        "Variant 1": `fvMr6EC4I`,
        "Variant 2 -selected": `J97SrbYCH`,
        "Variant 2": `G67NuZR19`,
        "Variant 3 - Selectd": `IJAJ99xTC`,
        "Variant 3": `cW7c_PaUG`,
      }),
      (Tn = ({ click: e, height: t, id: n, visible: r, width: i, ...a }) => ({
        ...a,
        DlvJfZNHR: e ?? a.DlvJfZNHR,
        GwG3Esq6U: r ?? a.GwG3Esq6U ?? !0,
        variant: wn[a.variant] ?? a.variant ?? `fvMr6EC4I`,
      })),
      (En = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Dn = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z(),
            f = F(),
            {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              DlvJfZNHR: v,
              GwG3Esq6U: y,
              ...x
            } = Tn(e),
            {
              baseVariant: S,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: N,
              variants: I,
            } = B({
              cycleOrder: vn,
              defaultVariant: `fvMr6EC4I`,
              ref: i,
              variant: _,
              variantClassNames: bn,
            }),
            L = En(e, I),
            { activeVariantCallback: R, delay: te } = P(S),
            V = R(async (...e) => {
              if ((j({ isPressed: !1 }), v && (await v(...e)) === !1))
                return !1;
            }),
            H = O(yn);
          return a(d, {
            id: g ?? s,
            children: a(Cn, {
              animate: I,
              initial: !1,
              children: a(Sn, {
                value: xn,
                children: a(b, {
                  ...x,
                  ...D,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    loading: M(f?.y || 0),
                    pixelHeight: 1536,
                    pixelWidth: 1024,
                    sizes: f?.width || `100vw`,
                    src: `https://framerusercontent.com/images/jZPxYTlRUHKarzAsMcxZCL2M72U.png`,
                    srcSet: `https://framerusercontent.com/images/jZPxYTlRUHKarzAsMcxZCL2M72U.png?scale-down-to=1024 682w,https://framerusercontent.com/images/jZPxYTlRUHKarzAsMcxZCL2M72U.png 1024w`,
                  },
                  className: O(H, `framer-1xue6e7`, h, T),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: L,
                  layoutId: `fvMr6EC4I`,
                  onTap: V,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    boxShadow: `12px 16px 22px 0px rgba(51, 51, 51, 0.32)`,
                    ...p,
                  },
                  variants: {
                    IJAJ99xTC: {
                      "--border-bottom-width": `2px`,
                      "--border-color": `rgb(255, 255, 255)`,
                      "--border-left-width": `2px`,
                      "--border-right-width": `2px`,
                      "--border-style": `solid`,
                      "--border-top-width": `2px`,
                      boxShadow: `12px 16px 22px 0px rgba(51, 51, 51, 0.32), -10px -8px 14px 0px rgba(116, 146, 204, 0.15)`,
                    },
                    J97SrbYCH: {
                      "--border-bottom-width": `2px`,
                      "--border-color": `rgb(255, 255, 255)`,
                      "--border-left-width": `2px`,
                      "--border-right-width": `2px`,
                      "--border-style": `solid`,
                      "--border-top-width": `2px`,
                      boxShadow: `12px 16px 22px 0px rgba(51, 51, 51, 0.32), -10px -8px 14px 0px rgba(116, 146, 204, 0.15)`,
                    },
                    mXqm98au_: {
                      "--border-bottom-width": `2px`,
                      "--border-color": `rgb(255, 255, 255)`,
                      "--border-left-width": `2px`,
                      "--border-right-width": `2px`,
                      "--border-style": `solid`,
                      "--border-top-width": `2px`,
                      boxShadow: `12px 16px 22px 0px rgba(51, 51, 51, 0.32), -10px -8px 14px 0px rgba(116, 146, 204, 0.15)`,
                    },
                  },
                  ..._n(
                    {
                      cW7c_PaUG: {
                        "data-framer-name": `Variant 3`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: M(f?.y || 0),
                          pixelHeight: 1536,
                          pixelWidth: 1024,
                          sizes: f?.width || `100vw`,
                          src: `https://framerusercontent.com/images/iwfjJGQz9lSYfdDaxqXGq1EWC8.png`,
                          srcSet: `https://framerusercontent.com/images/iwfjJGQz9lSYfdDaxqXGq1EWC8.png?scale-down-to=1024 682w,https://framerusercontent.com/images/iwfjJGQz9lSYfdDaxqXGq1EWC8.png 1024w`,
                        },
                      },
                      G67NuZR19: {
                        "data-framer-name": `Variant 2`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: M(f?.y || 0),
                          pixelHeight: 1536,
                          pixelWidth: 1024,
                          sizes: f?.width || `100vw`,
                          src: `https://framerusercontent.com/images/pLAIiq30MBmYIDp9eHxJWx37nYk.png`,
                          srcSet: `https://framerusercontent.com/images/pLAIiq30MBmYIDp9eHxJWx37nYk.png?scale-down-to=1024 682w,https://framerusercontent.com/images/pLAIiq30MBmYIDp9eHxJWx37nYk.png 1024w`,
                        },
                      },
                      IJAJ99xTC: {
                        "data-border": !0,
                        "data-framer-name": `Variant 3 - Selectd`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: M(f?.y || 0),
                          pixelHeight: 1536,
                          pixelWidth: 1024,
                          sizes: f?.width || `100vw`,
                          src: `https://framerusercontent.com/images/iwfjJGQz9lSYfdDaxqXGq1EWC8.png`,
                          srcSet: `https://framerusercontent.com/images/iwfjJGQz9lSYfdDaxqXGq1EWC8.png?scale-down-to=1024 682w,https://framerusercontent.com/images/iwfjJGQz9lSYfdDaxqXGq1EWC8.png 1024w`,
                        },
                      },
                      J97SrbYCH: {
                        "data-border": !0,
                        "data-framer-name": `Variant 2 -selected`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: M(f?.y || 0),
                          pixelHeight: 1536,
                          pixelWidth: 1024,
                          sizes: f?.width || `100vw`,
                          src: `https://framerusercontent.com/images/pLAIiq30MBmYIDp9eHxJWx37nYk.png`,
                          srcSet: `https://framerusercontent.com/images/pLAIiq30MBmYIDp9eHxJWx37nYk.png?scale-down-to=1024 682w,https://framerusercontent.com/images/pLAIiq30MBmYIDp9eHxJWx37nYk.png 1024w`,
                        },
                      },
                      mXqm98au_: {
                        "data-border": !0,
                        "data-framer-name": `Variant 1- Selected`,
                      },
                    },
                    S,
                    k
                  ),
                  children: a(m.div, {
                    className: `framer-1nsy02y`,
                    "data-border": !0,
                    layoutDependency: L,
                    layoutId: `rz_O6oTOi`,
                    style: {
                      "--border-bottom-width": `0.25px`,
                      "--border-color": `rgba(34, 34, 34, 0.3)`,
                      "--border-left-width": `0.25px`,
                      "--border-right-width": `0.25px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0.25px`,
                      backdropFilter: `blur(8px)`,
                      background: `linear-gradient(180deg, rgba(8, 8, 8, 0) 6%, rgba(8, 8, 8, 0) 31%, rgb(8, 8, 8) 100%)`,
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                      boxShadow: `0px 4px 8px 0px rgba(8, 8, 8, 0.73)`,
                      WebkitBackdropFilter: `blur(8px)`,
                    },
                    children: l(m.div, {
                      className: `framer-zpiah0`,
                      "data-framer-name": `Title/Tag`,
                      layoutDependency: L,
                      layoutId: `QSYiE9K57`,
                      children: [
                        l(m.div, {
                          className: `framer-1khqxjp`,
                          layoutDependency: L,
                          layoutId: `Kuw6kNt5n`,
                          children: [
                            a(m.div, {
                              className: `framer-15i0lyh`,
                              "data-border": !0,
                              layoutDependency: L,
                              layoutId: `eu5HxOa5m`,
                              style: {
                                "--border-bottom-width": `0.5px`,
                                "--border-color": `rgba(255, 255, 255, 0.19)`,
                                "--border-left-width": `0.5px`,
                                "--border-right-width": `0.5px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0.5px`,
                                backgroundColor: `rgba(0, 0, 0, 0.32)`,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.15)`,
                              },
                              children: a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(m.p, {
                                    style: {
                                      "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                      "--framer-font-size": `10px`,
                                      "--framer-font-weight": `600`,
                                      "--framer-letter-spacing": `0.1px`,
                                      "--framer-line-height": `16px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.88))`,
                                    },
                                    children: `TEAM LEADER "END USER"`,
                                  }),
                                }),
                                className: `framer-18cwd9v`,
                                "data-framer-name": `Text`,
                                fonts: [`GF;Geist-600`],
                                layoutDependency: L,
                                layoutId: `d9KAwpE7p`,
                                style: {
                                  "--extracted-r6o4lv": `rgba(255, 255, 255, 0.88)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ..._n(
                                  {
                                    cW7c_PaUG: {
                                      children: a(u, {
                                        children: a(m.p, {
                                          style: {
                                            "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                            "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                            "--framer-font-size": `10px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.1px`,
                                            "--framer-line-height": `16px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.88))`,
                                          },
                                          children: `LEARNER "END USER"`,
                                        }),
                                      }),
                                    },
                                    G67NuZR19: {
                                      children: a(u, {
                                        children: a(m.p, {
                                          style: {
                                            "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                            "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                            "--framer-font-size": `10px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.1px`,
                                            "--framer-line-height": `16px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.88))`,
                                          },
                                          children: `CONTENT CURATOR "END USER"`,
                                        }),
                                      }),
                                    },
                                    IJAJ99xTC: {
                                      children: a(u, {
                                        children: a(m.p, {
                                          style: {
                                            "--font-selector": `R0Y7RE0gU2Fucy02MDA=`,
                                            "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `10px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.1px`,
                                            "--framer-line-height": `16px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.88))`,
                                          },
                                          children: `LEARNER "END USER"`,
                                        }),
                                      }),
                                      fonts: [`GF;DM Sans-600`],
                                    },
                                    J97SrbYCH: {
                                      children: a(u, {
                                        children: a(m.p, {
                                          style: {
                                            "--font-selector": `R0Y7RE0gU2Fucy02MDA=`,
                                            "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `10px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.1px`,
                                            "--framer-line-height": `16px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.88))`,
                                          },
                                          children: `CONTENT CURATOR "END USER"`,
                                        }),
                                      }),
                                      fonts: [`GF;DM Sans-600`],
                                    },
                                  },
                                  S,
                                  k
                                ),
                              }),
                            }),
                            a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `20px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-letter-spacing": `-0.4px`,
                                    "--framer-line-height": `21px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                  },
                                  children: `Emily Carter`,
                                }),
                              }),
                              className: `framer-1trfwtr`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-600`],
                              layoutDependency: L,
                              layoutId: `InTqqPm58`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ..._n(
                                {
                                  cW7c_PaUG: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-0.4px`,
                                          "--framer-line-height": `21px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                        },
                                        children: `Alex Rivera`,
                                      }),
                                    }),
                                  },
                                  G67NuZR19: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-0.4px`,
                                          "--framer-line-height": `21px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                        },
                                        children: `Marcus Johnson`,
                                      }),
                                    }),
                                  },
                                  IJAJ99xTC: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7RE0gU2Fucy02MDA=`,
                                          "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-0.4px`,
                                          "--framer-line-height": `21px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                        },
                                        children: `Alex Rivera`,
                                      }),
                                    }),
                                    fonts: [`GF;DM Sans-600`],
                                  },
                                  J97SrbYCH: {
                                    children: a(u, {
                                      children: a(m.p, {
                                        style: {
                                          "--font-selector": `R0Y7RE0gU2Fucy02MDA=`,
                                          "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-0.4px`,
                                          "--framer-line-height": `21px`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                        },
                                        children: `Marcus Johnson`,
                                      }),
                                    }),
                                    fonts: [`GF;DM Sans-600`],
                                  },
                                },
                                S,
                                k
                              ),
                            }),
                          ],
                        }),
                        a(C, {
                          __fromCanvasComponent: !0,
                          children: a(u, {
                            children: a(m.p, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-letter-spacing": `-0.3px`,
                                "--framer-line-height": `18px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.84))`,
                              },
                              children: `I want to assign the right content to my team and track if they're doing`,
                            }),
                          }),
                          className: `framer-126hvrj`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Geist-regular`],
                          layoutDependency: L,
                          layoutId: `PJRbr_6Ix`,
                          style: {
                            "--extracted-r6o4lv": `rgba(255, 255, 255, 0.84)`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ..._n(
                            {
                              cW7c_PaUG: {
                                children: a(u, {
                                  children: a(m.p, {
                                    style: {
                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-letter-spacing": `-0.3px`,
                                      "--framer-line-height": `18px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.84))`,
                                    },
                                    children: `I want to know what to learn, when and how it helps me, what is assigned to me`,
                                  }),
                                }),
                              },
                              G67NuZR19: {
                                children: a(u, {
                                  children: a(m.p, {
                                    style: {
                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-letter-spacing": `-0.3px`,
                                      "--framer-line-height": `18px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.84))`,
                                    },
                                    children: `I create structured paths aligned to roles, skills and certifications using existing PS content `,
                                  }),
                                }),
                              },
                              IJAJ99xTC: {
                                children: a(u, {
                                  children: a(m.p, {
                                    style: {
                                      "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-letter-spacing": `-0.3px`,
                                      "--framer-line-height": `18px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.84))`,
                                    },
                                    children: `I want to know what to learn, when and how it helps me, what is assigned to me`,
                                  }),
                                }),
                                fonts: [`GF;DM Sans-regular`],
                              },
                              J97SrbYCH: {
                                children: a(u, {
                                  children: a(m.p, {
                                    style: {
                                      "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-letter-spacing": `-0.3px`,
                                      "--framer-line-height": `18px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.84))`,
                                    },
                                    children: `I create structured paths aligned to roles, skills and certifications using existing PS content `,
                                  }),
                                }),
                                fonts: [`GF;DM Sans-regular`],
                              },
                            },
                            S,
                            k
                          ),
                        }),
                        y &&
                          l(m.div, {
                            className: `framer-iq90h1`,
                            layoutDependency: L,
                            layoutId: `OJsLaSaFC`,
                            children: [
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(m.p, {
                                    style: {
                                      "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                      "--framer-font-size": `12px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.3px`,
                                      "--framer-line-height": `16px`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                    },
                                    children: `View User Journey`,
                                  }),
                                }),
                                className: `framer-1a0dwjz`,
                                "data-framer-name": `Text`,
                                fonts: [`GF;Geist-500`],
                                layoutDependency: L,
                                layoutId: `SspPddag3`,
                                style: {
                                  "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                  "--framer-paragraph-spacing": `0px`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ..._n(
                                  {
                                    IJAJ99xTC: {
                                      children: a(u, {
                                        children: a(m.p, {
                                          style: {
                                            "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                            "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.3px`,
                                            "--framer-line-height": `16px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                          },
                                          children: `Hide User Journey`,
                                        }),
                                      }),
                                      fonts: [`GF;DM Sans-500`],
                                    },
                                    J97SrbYCH: {
                                      children: a(u, {
                                        children: a(m.p, {
                                          style: {
                                            "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                            "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.3px`,
                                            "--framer-line-height": `16px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                          },
                                          children: `Hide User Journey`,
                                        }),
                                      }),
                                      fonts: [`GF;DM Sans-500`],
                                    },
                                    mXqm98au_: {
                                      children: a(u, {
                                        children: a(m.p, {
                                          style: {
                                            "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                            "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                            "--framer-font-size": `12px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-0.3px`,
                                            "--framer-line-height": `16px`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                          },
                                          children: `Hide User Journey`,
                                        }),
                                      }),
                                      fonts: [`GF;DM Sans-500`],
                                    },
                                  },
                                  S,
                                  k
                                ),
                              }),
                              l(w, {
                                className: `framer-ezi9rr`,
                                layoutDependency: L,
                                layoutId: `xda10EiBo`,
                                opacity: 1,
                                requiresOverflowVisible: !0,
                                style: { rotate: 45 },
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 8" overflow="visible"><g><path d="M 7 1 L 0 8" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 1.333 0.125 C 1.333 0.125 6.699 -0.327 7.513 0.487 C 8.327 1.301 7.875 6.667 7.875 6.667" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                withExternalLayout: !0,
                                children: [
                                  a(w, {
                                    className: `framer-1xscaco`,
                                    layoutDependency: L,
                                    layoutId: `eFr6mGPIA`,
                                    opacity: 1,
                                    requiresOverflowVisible: !0,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 7" overflow="visible"><path d="M 7 0 L 0 7" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                  a(w, {
                                    className: `framer-l6v4ip`,
                                    layoutDependency: L,
                                    layoutId: `POzDPuKFc`,
                                    opacity: 1,
                                    requiresOverflowVisible: !0,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.667 6.667" overflow="visible"><path d="M 0 0.125 C 0 0.125 5.365 -0.327 6.18 0.487 C 6.993 1.301 6.541 6.667 6.541 6.667" fill="transparent" stroke-width="1.5" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fRXX3.framer-vm3xhg, .framer-fRXX3 .framer-vm3xhg { display: block; }`,
          `.framer-fRXX3.framer-1xue6e7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 230px 8px 8px 8px; position: relative; width: 259px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fRXX3 .framer-1nsy02y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: relative; width: 100%; }`,
          `.framer-fRXX3 .framer-zpiah0 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: wrap; gap: 12px 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-fRXX3 .framer-1khqxjp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fRXX3 .framer-15i0lyh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 2px 6px 2px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fRXX3 .framer-18cwd9v, .framer-fRXX3 .framer-1trfwtr, .framer-fRXX3 .framer-1a0dwjz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-fRXX3 .framer-126hvrj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-fRXX3 .framer-iq90h1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fRXX3 .framer-ezi9rr { height: 8px; position: relative; width: 8px; }`,
          `.framer-fRXX3 .framer-1xscaco { height: 7px; left: 0px; position: absolute; top: 1px; width: 7px; }`,
          `.framer-fRXX3 .framer-l6v4ip { height: 7px; left: 2px; position: absolute; top: 0px; width: 7px; }`,
          `.framer-fRXX3.framer-v-1ym3vyj.framer-1xue6e7, .framer-fRXX3.framer-v-hkwmu0.framer-1xue6e7, .framer-fRXX3.framer-v-1cdbgd.framer-1xue6e7 { width: 258px; }`,
          `.framer-fRXX3[data-border="true"]::after, .framer-fRXX3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-fRXX3`
      )),
      (On = Dn),
      (Dn.displayName = `Persona Card`),
      (Dn.defaultProps = { height: 413, width: 258.5 }),
      D(Dn, {
        variant: {
          options: [
            `fvMr6EC4I`,
            `G67NuZR19`,
            `cW7c_PaUG`,
            `mXqm98au_`,
            `J97SrbYCH`,
            `IJAJ99xTC`,
          ],
          optionTitles: [
            `Variant 1`,
            `Variant 2`,
            `Variant 3`,
            `Variant 1- Selected`,
            `Variant 2 -selected`,
            `Variant 3 - Selectd`,
          ],
          title: `Variant`,
          type: v.Enum,
        },
        DlvJfZNHR: { title: `Click`, type: v.EventHandler },
        GwG3Esq6U: { defaultValue: !0, title: `Visible`, type: v.Boolean },
      }),
      E(
        Dn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Geist`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2`,
                weight: `600`,
              },
              {
                family: `DM Sans`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAfJthS2f3ZGMZpg.woff2`,
                weight: `600`,
              },
              {
                family: `Geist`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2`,
                weight: `400`,
              },
              {
                family: `DM Sans`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
                weight: `400`,
              },
              {
                family: `Geist`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
                weight: `500`,
              },
              {
                family: `DM Sans`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  });
function An(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un = e(() => {
    r(),
      N(),
      p(),
      i(),
      kn(),
      (jn = A(On)),
      (Mn = [`zprpTTPcw`, `nSo5wxrPU`, `OY9_SLA8x`, `ceVc0Vlgm`]),
      (Nn = `framer-j5f2q`),
      (Pn = {
        ceVc0Vlgm: `framer-v-1sztvtu`,
        nSo5wxrPU: `framer-v-1ux2xnk`,
        OY9_SLA8x: `framer-v-1w5dfws`,
        zprpTTPcw: `framer-v-1cpslrf`,
      }),
      (Fn = {
        delay: 0,
        duration: 0.4,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (In = ({ value: e, children: t }) => {
        let n = s(f),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return a(f.Provider, { value: i, children: t });
      }),
      (Ln = m.create(u)),
      (Rn = {
        "Variant 1": `zprpTTPcw`,
        "Variant 2": `nSo5wxrPU`,
        "Variant 3": `OY9_SLA8x`,
        "Variant 4": `ceVc0Vlgm`,
      }),
      (zn = ({ cursor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: Rn[i.variant] ?? i.variant ?? `zprpTTPcw`,
        VYxUNWsZV: e ?? i.VYxUNWsZV,
      })),
      (Bn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Vn = V(
        t(function (e, t) {
          let r = o(null),
            i = t ?? r,
            s = n(),
            { activeLocale: c, setLocale: ee } = z(),
            f = F(),
            {
              style: p,
              className: h,
              layoutId: _,
              variant: v,
              VYxUNWsZV: y,
              ...x
            } = zn(e),
            {
              baseVariant: S,
              classNames: w,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: N,
              variants: I,
            } = B({
              cycleOrder: Mn,
              defaultVariant: `zprpTTPcw`,
              ref: i,
              variant: v,
              variantClassNames: Pn,
            }),
            L = Bn(e, I),
            { activeVariantCallback: R, delay: te } = P(S),
            V = R(async (...e) => {
              N(`nSo5wxrPU`);
            }),
            H = R(async (...e) => {
              N(`zprpTTPcw`);
            }),
            ne = R(async (...e) => {
              N(`OY9_SLA8x`);
            }),
            re = R(async (...e) => {
              N(`ceVc0Vlgm`);
            }),
            ie = O(Nn),
            U = () => ![`nSo5wxrPU`, `OY9_SLA8x`].includes(S),
            ae = () => S === `ceVc0Vlgm`,
            oe = () => S === `nSo5wxrPU`,
            se = () => S === `OY9_SLA8x`;
          return a(d, {
            id: _ ?? s,
            children: a(Ln, {
              animate: I,
              initial: !1,
              children: a(In, {
                value: Fn,
                children: l(m.div, {
                  ...x,
                  ...D,
                  className: O(ie, `framer-1cpslrf`, h, w),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: L,
                  layoutId: `zprpTTPcw`,
                  ref: i,
                  style: { ...p },
                  ...An(
                    {
                      ceVc0Vlgm: { "data-framer-name": `Variant 4` },
                      nSo5wxrPU: { "data-framer-name": `Variant 2` },
                      OY9_SLA8x: { "data-framer-name": `Variant 3` },
                    },
                    S,
                    k
                  ),
                  children: [
                    l(m.div, {
                      className: `framer-i2zewj`,
                      layoutDependency: L,
                      layoutId: `cPYVwvlEY`,
                      children: [
                        a(g, {
                          height: 413,
                          width: `258.6667px`,
                          y:
                            (f?.y || 0) +
                            0 +
                            (((f?.height || 413) - 0 - 413) / 2 + 0 + 0) +
                            0,
                          ...An(
                            {
                              ceVc0Vlgm: {
                                width: `259px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                              nSo5wxrPU: {
                                width: `258px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                              OY9_SLA8x: {
                                width: `259px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                            },
                            S,
                            k
                          ),
                          children: a(T, {
                            className: `framer-1sod0gs-container`,
                            "data-framer-cursor": y,
                            layoutDependency: L,
                            layoutId: `y7bXbiI7K-container`,
                            nodeId: `y7bXbiI7K`,
                            rendersWithMotion: !0,
                            scopeId: `YhDX0Z8b4`,
                            children: a(On, {
                              DlvJfZNHR: V,
                              GwG3Esq6U: !0,
                              height: `100%`,
                              id: `y7bXbiI7K`,
                              layoutId: `y7bXbiI7K`,
                              style: { width: `100%` },
                              variant: `fvMr6EC4I`,
                              width: `100%`,
                              ...An(
                                {
                                  nSo5wxrPU: {
                                    DlvJfZNHR: H,
                                    variant: `mXqm98au_`,
                                  },
                                },
                                S,
                                k
                              ),
                            }),
                          }),
                        }),
                        a(g, {
                          height: 413,
                          width: `258.6667px`,
                          y:
                            (f?.y || 0) +
                            0 +
                            (((f?.height || 413) - 0 - 413) / 2 + 0 + 0) +
                            0,
                          ...An(
                            {
                              ceVc0Vlgm: {
                                width: `258.5px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                              nSo5wxrPU: {
                                width: `259px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                              OY9_SLA8x: {
                                width: `258.5px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                            },
                            S,
                            k
                          ),
                          children: a(T, {
                            className: `framer-cr11jw-container`,
                            layoutDependency: L,
                            layoutId: `GApHxibxJ-container`,
                            nodeId: `GApHxibxJ`,
                            rendersWithMotion: !0,
                            scopeId: `YhDX0Z8b4`,
                            children: a(On, {
                              DlvJfZNHR: ne,
                              GwG3Esq6U: !0,
                              height: `100%`,
                              id: `GApHxibxJ`,
                              layoutId: `GApHxibxJ`,
                              style: { width: `100%` },
                              variant: `cW7c_PaUG`,
                              width: `100%`,
                              ...An(
                                {
                                  OY9_SLA8x: {
                                    DlvJfZNHR: H,
                                    variant: `IJAJ99xTC`,
                                  },
                                },
                                S,
                                k
                              ),
                            }),
                          }),
                        }),
                        a(g, {
                          height: 413,
                          width: `258.6667px`,
                          y:
                            (f?.y || 0) +
                            0 +
                            (((f?.height || 413) - 0 - 413) / 2 + 0 + 0) +
                            0,
                          ...An(
                            {
                              ceVc0Vlgm: {
                                width: `258.5px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                              nSo5wxrPU: {
                                width: `259px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                              OY9_SLA8x: {
                                width: `258.5px`,
                                y:
                                  (f?.y || 0) +
                                  0 +
                                  (((f?.height || 1002) - 0 - 1002) / 2 +
                                    0 +
                                    0) +
                                  0,
                              },
                            },
                            S,
                            k
                          ),
                          children: a(T, {
                            className: `framer-1ilbadv-container`,
                            layoutDependency: L,
                            layoutId: `T1vTJOaXS-container`,
                            nodeId: `T1vTJOaXS`,
                            rendersWithMotion: !0,
                            scopeId: `YhDX0Z8b4`,
                            children: a(On, {
                              DlvJfZNHR: re,
                              GwG3Esq6U: !0,
                              height: `100%`,
                              id: `T1vTJOaXS`,
                              layoutId: `T1vTJOaXS`,
                              style: { width: `100%` },
                              variant: `G67NuZR19`,
                              width: `100%`,
                              ...An(
                                {
                                  ceVc0Vlgm: {
                                    DlvJfZNHR: H,
                                    variant: `J97SrbYCH`,
                                  },
                                },
                                S,
                                k
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    U() &&
                      a(m.div, {
                        className: `framer-2swp64`,
                        layoutDependency: L,
                        layoutId: `TISjoQ_y7`,
                        children:
                          ae() &&
                          l(m.div, {
                            className: `framer-gbh5li`,
                            layoutDependency: L,
                            layoutId: `fS_LHmxLP`,
                            children: [
                              a(b, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  pixelHeight: 1308,
                                  pixelWidth: 2558,
                                  sizes: `904px`,
                                  src: `https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png`,
                                  srcSet: `https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png?scale-down-to=512 512w,https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png 2558w`,
                                },
                                className: `framer-n4rmsp`,
                                "data-framer-name": `Image`,
                                layoutDependency: L,
                                layoutId: `PzAuJl9co`,
                                ...An(
                                  {
                                    ceVc0Vlgm: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: M(
                                          (f?.y || 0) +
                                            0 +
                                            (((f?.height || 1002) - 0 - 1002) /
                                              2 +
                                              413 +
                                              32) +
                                            40 +
                                            0 +
                                            0 +
                                            50
                                        ),
                                        pixelHeight: 1308,
                                        pixelWidth: 2558,
                                        sizes: `904px`,
                                        src: `https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png`,
                                        srcSet: `https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png?scale-down-to=512 512w,https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/MfCsvCF6ncnygtS6BUjQjqbSzIA.png 2558w`,
                                      },
                                    },
                                  },
                                  S,
                                  k
                                ),
                              }),
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(m.h4, {
                                    style: {
                                      "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      "--framer-font-size": `18px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.5px`,
                                      "--framer-line-height": `26px`,
                                      "--framer-text-color": `var(--extracted-1eung3n, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                    },
                                    children: `Content Curator's Journey Mapping `,
                                  }),
                                }),
                                className: `framer-hd94s6`,
                                "data-framer-name": `Header`,
                                fonts: [`GF;DM Sans-500`],
                                layoutDependency: L,
                                layoutId: `x0M28Slh5`,
                                style: {
                                  "--extracted-1eung3n": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                      }),
                    oe() &&
                      a(m.div, {
                        className: `framer-1u3th3e`,
                        layoutDependency: L,
                        layoutId: `HT_mTWspr`,
                        children: l(m.div, {
                          className: `framer-1r0chq4`,
                          layoutDependency: L,
                          layoutId: `kgAZYqEem`,
                          children: [
                            a(b, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1236,
                                pixelWidth: 2428,
                                sizes: `916px`,
                                src: `https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png`,
                                srcSet: `https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png?scale-down-to=512 512w,https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png 2428w`,
                              },
                              className: `framer-1l662u4`,
                              "data-framer-name": `Image`,
                              layoutDependency: L,
                              layoutId: `wuyFdGJ8h`,
                              ...An(
                                {
                                  nSo5wxrPU: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: M(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 1002) - 0 - 1002) /
                                            2 +
                                            413 +
                                            32) +
                                          40 +
                                          0 +
                                          0 +
                                          50
                                      ),
                                      pixelHeight: 1236,
                                      pixelWidth: 2428,
                                      sizes: `916px`,
                                      src: `https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png`,
                                      srcSet: `https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png?scale-down-to=512 512w,https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/SSyxmNs8AQVaH71rHzYs8YMoKA.png 2428w`,
                                    },
                                  },
                                },
                                S,
                                k
                              ),
                            }),
                            a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.h4, {
                                  style: {
                                    "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                    "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.5px`,
                                    "--framer-line-height": `26px`,
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                  },
                                  children: `Leader's Journey Mapping `,
                                }),
                              }),
                              className: `framer-sp4v2b`,
                              "data-framer-name": `Header`,
                              fonts: [`GF;DM Sans-500`],
                              layoutDependency: L,
                              layoutId: `GUQpHrSWi`,
                              style: {
                                "--extracted-1eung3n": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                    se() &&
                      a(m.div, {
                        className: `framer-9lob8q`,
                        layoutDependency: L,
                        layoutId: `qy9S5WZQu`,
                        children: l(m.div, {
                          className: `framer-10922dg`,
                          layoutDependency: L,
                          layoutId: `XZyTX4dBp`,
                          children: [
                            a(b, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1239,
                                pixelWidth: 2426,
                                sizes: `916px`,
                                src: `https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png`,
                                srcSet: `https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png?scale-down-to=512 512w,https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png 2426w`,
                              },
                              className: `framer-1cfa2uq`,
                              "data-framer-name": `Image`,
                              layoutDependency: L,
                              layoutId: `LjtZTA8z8`,
                              ...An(
                                {
                                  OY9_SLA8x: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: M(
                                        (f?.y || 0) +
                                          0 +
                                          (((f?.height || 1002) - 0 - 1002) /
                                            2 +
                                            413 +
                                            32) +
                                          40 +
                                          0 +
                                          0 +
                                          50
                                      ),
                                      pixelHeight: 1239,
                                      pixelWidth: 2426,
                                      sizes: `916px`,
                                      src: `https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png`,
                                      srcSet: `https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png?scale-down-to=512 512w,https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/H7b8FmbhkLpQincJpvMXp09WBM.png 2426w`,
                                    },
                                  },
                                },
                                S,
                                k
                              ),
                            }),
                            a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(m.h4, {
                                  style: {
                                    "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                    "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-letter-spacing": `-0.5px`,
                                    "--framer-line-height": `26px`,
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255)))`,
                                  },
                                  children: `Learner's Journey Mapping `,
                                }),
                              }),
                              className: `framer-oly581`,
                              "data-framer-name": `Header`,
                              fonts: [`GF;DM Sans-500`],
                              layoutDependency: L,
                              layoutId: `hdu0AwiYY`,
                              style: {
                                "--extracted-1eung3n": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
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
          `.framer-j5f2q.framer-9g98bu, .framer-j5f2q .framer-9g98bu { display: block; }`,
          `.framer-j5f2q.framer-1cpslrf { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1000px; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-j5f2q .framer-i2zewj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 60px 0px 60px; position: relative; width: 960px; }`,
          `.framer-j5f2q .framer-1sod0gs-container, .framer-j5f2q .framer-cr11jw-container, .framer-j5f2q .framer-1ilbadv-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-j5f2q .framer-2swp64 { align-content: flex-start; align-items: flex-start; bottom: -200px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; left: 0px; min-height: 200px; overflow: hidden; padding: 0px 60px 0px 60px; position: absolute; right: 0px; z-index: 1; }`,
          `.framer-j5f2q .framer-gbh5li, .framer-j5f2q .framer-1r0chq4, .framer-j5f2q .framer-10922dg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-j5f2q .framer-n4rmsp { flex: none; gap: 10px; height: 467px; overflow: hidden; position: relative; width: 904px; }`,
          `.framer-j5f2q .framer-hd94s6, .framer-j5f2q .framer-sp4v2b, .framer-j5f2q .framer-oly581 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-j5f2q .framer-1u3th3e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 961px; z-index: 1; }`,
          `.framer-j5f2q .framer-1l662u4, .framer-j5f2q .framer-1cfa2uq { flex: none; gap: 10px; height: 467px; overflow: hidden; position: relative; width: 916px; }`,
          `.framer-j5f2q .framer-9lob8q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 60px 0px 60px; position: relative; width: 960px; z-index: 1; }`,
          `.framer-j5f2q.framer-v-1ux2xnk.framer-1cpslrf, .framer-j5f2q.framer-v-1w5dfws.framer-1cpslrf { overflow: visible; }`,
          `.framer-j5f2q.framer-v-1ux2xnk .framer-1sod0gs-container { flex: none; width: 258px; }`,
          `.framer-j5f2q.framer-v-1ux2xnk .framer-cr11jw-container, .framer-j5f2q.framer-v-1ux2xnk .framer-1ilbadv-container, .framer-j5f2q.framer-v-1w5dfws .framer-1sod0gs-container, .framer-j5f2q.framer-v-1w5dfws .framer-cr11jw-container, .framer-j5f2q.framer-v-1w5dfws .framer-1ilbadv-container, .framer-j5f2q.framer-v-1sztvtu .framer-1sod0gs-container, .framer-j5f2q.framer-v-1sztvtu .framer-cr11jw-container, .framer-j5f2q.framer-v-1sztvtu .framer-1ilbadv-container { flex: none; width: 259px; }`,
          `.framer-j5f2q.framer-v-1ux2xnk .framer-1l662u4, .framer-j5f2q.framer-v-1w5dfws .framer-1cfa2uq, .framer-j5f2q.framer-v-1sztvtu .framer-n4rmsp { order: 1; }`,
          `.framer-j5f2q.framer-v-1ux2xnk .framer-sp4v2b, .framer-j5f2q.framer-v-1w5dfws .framer-oly581, .framer-j5f2q.framer-v-1sztvtu .framer-gbh5li, .framer-j5f2q.framer-v-1sztvtu .framer-hd94s6 { order: 0; }`,
          `.framer-j5f2q.framer-v-1sztvtu .framer-2swp64 { align-content: center; align-items: center; bottom: unset; left: unset; min-height: unset; padding: 40px 60px 0px 60px; position: relative; right: unset; width: 960px; }`,
        ],
        `framer-j5f2q`
      )),
      (Hn = Vn),
      (Vn.displayName = `Persona - Journey`),
      (Vn.defaultProps = { height: 413, width: 960 }),
      D(Vn, {
        variant: {
          options: [`zprpTTPcw`, `nSo5wxrPU`, `OY9_SLA8x`, `ceVc0Vlgm`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: v.Enum,
        },
        VYxUNWsZV: { title: `Cursor`, type: v.CustomCursor },
      }),
      E(
        Vn,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `DM Sans`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/dmsans/v16/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
                weight: `500`,
              },
            ],
          },
          ...jn,
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  Wn,
  Gn,
  Kn,
  qn = e(() => {
    N(),
      k.loadFonts([`GF;Geist-regular`, `GF;Geist-700`]),
      (Wn = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Geist`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2`,
              weight: `400`,
            },
            {
              family: `Geist`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/geist/v3/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (Gn = [
        `.framer-fyCzI .framer-styles-preset-1f3m2eo:not(.rich-text-wrapper), .framer-fyCzI .framer-styles-preset-1f3m2eo.rich-text-wrapper p { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Kn = `framer-fyCzI`);
  }),
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  $,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr;
e(() => {
  r(),
    N(),
    p(),
    i(),
    xe(),
    Ne(),
    W(),
    Ge(),
    ce(),
    it(),
    gt(),
    Wt(),
    nn(),
    gn(),
    Un(),
    oe(),
    qn(),
    se(),
    (Jn = A(ie)),
    (Yn = H(b)),
    (Xn = A(rt)),
    (Zn = H(m.div)),
    (Qn = A(We)),
    ($n = A(Hn)),
    (er = A(tn)),
    (tr = A(hn)),
    (nr = A(ht)),
    (rr = A(Me)),
    (ir = A(J)),
    (ar = A(Ut)),
    (or = A(ae)),
    (sr = {
      DlGnk7T64: `(min-width: 1200px)`,
      dY2OPVKkO: `(min-width: 810px) and (max-width: 1199.98px)`,
      Ph7JVtEPW: `(max-width: 809.98px)`,
    }),
    (cr = () => typeof document < `u`),
    (lr = `framer-9Th0u`),
    (ur = {
      DlGnk7T64: `framer-v-cz5ij6`,
      dY2OPVKkO: `framer-v-4ry9c1`,
      Ph7JVtEPW: `framer-v-1sscvvh`,
    }),
    (dr = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0.2, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (fr = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (pr = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 60,
        delay: 1,
        mass: 1,
        stiffness: 200,
        type: `spring`,
      },
      x: 0,
      y: 0,
    }),
    ($ = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (mr = ({ value: e }) =>
      R()
        ? null
        : a(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (hr = { Desktop: `DlGnk7T64`, Phone: `Ph7JVtEPW`, Tablet: `dY2OPVKkO` }),
    (gr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: hr[r.variant] ?? r.variant ?? `DlGnk7T64`,
    })),
    (_r = { component: ae, variant: `WN3zTYZu0` }),
    (vr = { component: ae, variant: `TPWlZgtQW` }),
    (yr = { component: ae, variant: `TKdpOGo6M` }),
    (br = t(function (e, t) {
      let r = o(null),
        i = t ?? r,
        s = n(),
        { activeLocale: ee, setLocale: f } = z(),
        p = F(),
        { style: h, className: v, layoutId: T, variant: E, ...D } = gr(e),
        k = c(() => le({}, ee), [ee]);
      te(k);
      let [A, j] = L(E, sr, !1),
        N = O(lr, Kn, ne),
        P = () => (cr() ? ![`Ph7JVtEPW`, `dY2OPVKkO`].includes(A) : !0),
        R = () => (cr() ? A !== `Ph7JVtEPW` : !0),
        B = () => !cr() || A === `Ph7JVtEPW`,
        V = () => (cr() ? A !== `dY2OPVKkO` : !0),
        H = () => !cr() || A === `dY2OPVKkO`;
      return (
        I({ "1b4aww4": _r, dtktov: vr, gdzvod: yr }),
        a(y.Provider, {
          value: { primaryVariantId: `DlGnk7T64`, variantClassNames: ur },
          children: l(d, {
            id: T ?? s,
            children: [
              a(mr, { value: `html body { background: rgb(0, 0, 0); }` }),
              l(m.div, {
                ...D,
                className: O(N, `framer-cz5ij6`, v),
                ref: i,
                style: { ...h },
                children: [
                  P() &&
                    a(g, {
                      height: 46,
                      y: 48,
                      children: a(_, {
                        className: `framer-6nmge1-container hidden-1sscvvh hidden-4ry9c1`,
                        layoutScroll: !0,
                        nodeId: `BnwHN5Scx`,
                        scopeId: `YUN0ipZRa`,
                        children: a(ie, {
                          AL_NU982V: !1,
                          dlVBgpKLv: `Back`,
                          height: `100%`,
                          id: `BnwHN5Scx`,
                          layoutId: `BnwHN5Scx`,
                          SD1BGlGhK: !1,
                          variant: `hXEhQ5eRd`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  l(`section`, {
                    className: `framer-1a7hfl8`,
                    "data-framer-name": `Main`,
                    children: [
                      a(S, {
                        breakpoint: A,
                        overrides: {
                          dY2OPVKkO: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: M((p?.y || 0) + 0 + 0 + 0 + 0),
                              pixelHeight: 883,
                              pixelWidth: 1920,
                              sizes: `min(min(${
                                p?.width || `100vw`
                              }, 2000px), 1999px)`,
                              src: `https://framerusercontent.com/images/VxaM9XgT1yDwxZbgUESnVdmHDwo.png?width=1920&height=883`,
                              srcSet: `https://framerusercontent.com/images/VxaM9XgT1yDwxZbgUESnVdmHDwo.png?scale-down-to=512&width=1920&height=883 512w,https://framerusercontent.com/images/VxaM9XgT1yDwxZbgUESnVdmHDwo.png?scale-down-to=1024&width=1920&height=883 1024w,https://framerusercontent.com/images/VxaM9XgT1yDwxZbgUESnVdmHDwo.png?width=1920&height=883 1920w`,
                            },
                          },
                        },
                        children: a(Yn, {
                          animate: dr,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: M((p?.y || 0) + 0 + 0 + 0 + 0),
                            pixelHeight: 883,
                            pixelWidth: 1920,
                            sizes: `min(${p?.width || `100vw`}, 2000px)`,
                            src: `https://framerusercontent.com/images/VxaM9XgT1yDwxZbgUESnVdmHDwo.png?width=1920&height=883`,
                            srcSet: `https://framerusercontent.com/images/VxaM9XgT1yDwxZbgUESnVdmHDwo.png?scale-down-to=512&width=1920&height=883 512w,https://framerusercontent.com/images/VxaM9XgT1yDwxZbgUESnVdmHDwo.png?scale-down-to=1024&width=1920&height=883 1024w,https://framerusercontent.com/images/VxaM9XgT1yDwxZbgUESnVdmHDwo.png?width=1920&height=883 1920w`,
                          },
                          className: `framer-1o058uv`,
                          "data-framer-appear-id": `1o058uv`,
                          "data-framer-name": `Details`,
                          initial: fr,
                          optimized: !0,
                          children: l(`div`, {
                            className: `framer-6qjtdj`,
                            "data-framer-name": `Tag & Title`,
                            children: [
                              l(`div`, {
                                className: `framer-1uz5zmg`,
                                "data-framer-name": `Title`,
                                children: [
                                  R() &&
                                    a(`div`, {
                                      className: `framer-1ja7axl hidden-1sscvvh`,
                                      "data-border": !0,
                                      "data-framer-name": `Tag/Primary Tag 2`,
                                      children: a(C, {
                                        __fromCanvasComponent: !0,
                                        children: a(u, {
                                          children: a(`p`, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-letter-spacing": `-0.5px`,
                                              "--framer-line-height": `26px`,
                                              "--framer-text-color": `var(--token-8f8054d9-8a09-4e7e-b957-8a76557c5e75, rgba(255, 255, 255, 0.6))`,
                                            },
                                            children: a(`span`, {
                                              "data-text-fill": `true`,
                                              style: {
                                                backgroundImage: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(153, 153, 153, 0) 350%)`,
                                              },
                                              children: `PLURALSIGHT`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-12sjkh0`,
                                        "data-framer-name": `Title`,
                                        fonts: [`GF;Geist-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  a(C, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `40px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `-0.5px`,
                                          "--framer-line-height": `1.3em`,
                                          "--framer-text-color": `rgba(255, 255, 255, 0.9)`,
                                        },
                                        children: `Unified Experience for Content Curation`,
                                      }),
                                    }),
                                    className: `framer-w3mob0`,
                                    "data-framer-name": `Text`,
                                    fonts: [`GF;Geist-600`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  a(C, {
                                    __fromCanvasComponent: !0,
                                    children: a(u, {
                                      children: a(`h3`, {
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `20px`,
                                          "--framer-letter-spacing": `-0.1px`,
                                          "--framer-line-height": `1.6em`,
                                          "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                        },
                                        children: `Unified, flexible platform to empower users to curate, arrange and share learning more seamlessly, enhancing both individual growth (B2C/B2B) and team alignment (B2B).`,
                                      }),
                                    }),
                                    className: `framer-p2yneh`,
                                    "data-framer-name": `Text`,
                                    fonts: [`GF;Geist-regular`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(S, {
                                breakpoint: A,
                                overrides: {
                                  dY2OPVKkO: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1080,
                                      intrinsicWidth: 1920,
                                      loading: M(
                                        (p?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          160 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 1714,
                                      pixelWidth: 1731,
                                      sizes: `calc(min(min(min(${
                                        p?.width || `100vw`
                                      }, 2000px), 1999px), 1200px) * 0.3992)`,
                                      src: `https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?width=1731&height=1714`,
                                      srcSet: `https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?scale-down-to=512&width=1731&height=1714 512w,https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?scale-down-to=1024&width=1731&height=1714 1024w,https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?width=1731&height=1714 1731w`,
                                    },
                                  },
                                  Ph7JVtEPW: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1080,
                                      intrinsicWidth: 1920,
                                      loading: M(
                                        (p?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          126 +
                                          0 +
                                          16 +
                                          108
                                      ),
                                      pixelHeight: 1714,
                                      pixelWidth: 1731,
                                      sizes: `calc((min(min(${
                                        p?.width || `100vw`
                                      }, 2000px), 1200px) - 64px) * 0.7791)`,
                                      src: `https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?width=1731&height=1714`,
                                      srcSet: `https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?scale-down-to=512&width=1731&height=1714 512w,https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?scale-down-to=1024&width=1731&height=1714 1024w,https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?width=1731&height=1714 1731w`,
                                    },
                                  },
                                },
                                children: a(b, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1080,
                                    intrinsicWidth: 1920,
                                    loading: M(
                                      (p?.y || 0) + 0 + 0 + 0 + 0 + 126 + 0 + 16
                                    ),
                                    pixelHeight: 1714,
                                    pixelWidth: 1731,
                                    sizes: `431px`,
                                    src: `https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?width=1731&height=1714`,
                                    srcSet: `https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?scale-down-to=512&width=1731&height=1714 512w,https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?scale-down-to=1024&width=1731&height=1714 1024w,https://framerusercontent.com/images/Qdlwh1VSNPpX4kRkSGTimf1t6E.png?width=1731&height=1714 1731w`,
                                  },
                                  className: `framer-aocisk`,
                                  "data-framer-name": `Image`,
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      l(`div`, {
                        className: `framer-1l4lqbz`,
                        "data-framer-name": `Container`,
                        children: [
                          l(`div`, {
                            className: `framer-vzvojv`,
                            "data-framer-name": `Detail Content`,
                            children: [
                              B() &&
                                l(`div`, {
                                  className: `framer-14f82to hidden-cz5ij6 hidden-4ry9c1`,
                                  "data-framer-name": `Main Text`,
                                  children: [
                                    a(C, {
                                      __fromCanvasComponent: !0,
                                      children: a(u, {
                                        children: a(`h3`, {
                                          style: {
                                            "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                            "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                            "--framer-font-size": `34px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-1px`,
                                            "--framer-line-height": `36px`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                          },
                                          children: `Summary of the project`,
                                        }),
                                      }),
                                      className: `framer-1zyga7`,
                                      "data-framer-name": `Header`,
                                      fonts: [`GF;Geist-500`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(C, {
                                      __fromCanvasComponent: !0,
                                      children: l(u, {
                                        children: [
                                          a(`p`, {
                                            style: {
                                              "--framer-font-size": `18px`,
                                              "--framer-line-height": `2.5em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: a(`strong`, {
                                              children: `🧩 What Was the Problem?`,
                                            }),
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• Pluralsight’s curation tools were disjointed, confusing, and hard to use.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• Users- learners, leaders, and curators, struggled with personalization, tracking, and engagement.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: a(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-font-size": `18px`,
                                              "--framer-line-height": `2.5em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: a(`strong`, {
                                              children: `✏️ What Did the Redesign Focus On?`,
                                            }),
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `2em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• Creating a unified, intuitive platform to manage learning paths.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• Enabling leaders to assign and monitor progress easily.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• Helping learners stay motivated and aligned with goals.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: a(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-font-size": `18px`,
                                              "--framer-line-height": `2.5em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: a(`strong`, {
                                              children: `✅ How Was It Done?`,
                                            }),
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• Through research (quant, qual, interviews), pain points were mapped.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• Object-Oriented UX shaped a modular, scalable structure.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• Clear user flows were designed for different roles.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: a(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          }),
                                          l(`p`, {
                                            style: {
                                              "--framer-line-height": `2em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: [
                                              a(`strong`, { children: `🌟 ` }),
                                              a(`span`, {
                                                style: {
                                                  "--framer-font-size": `18px`,
                                                },
                                                children: a(`strong`, {
                                                  children: `Outcome`,
                                                }),
                                              }),
                                            ],
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `• A curated, flexible, and engaging experience that drives adoption, improves completion, and aligns learning with business goals.`,
                                          }),
                                          a(`p`, {
                                            style: {
                                              "--framer-line-height": `1.25em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: a(`br`, {
                                              className: `trailing-break`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      className: `framer-1qt53ps`,
                                      "data-framer-name": `Paragraph`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              R() &&
                                l(`div`, {
                                  className: `framer-1nw2ak9 hidden-1sscvvh`,
                                  children: [
                                    V() &&
                                      l(`div`, {
                                        className: `framer-jjfh65 hidden-4ry9c1`,
                                        "data-framer-name": `Main Text`,
                                        children: [
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                              children: a(`h3`, {
                                                style: {
                                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `-1px`,
                                                  "--framer-line-height": `36px`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                },
                                                children: `Overview `,
                                              }),
                                            }),
                                            className: `framer-qqhf0e`,
                                            "data-framer-name": `Header`,
                                            fonts: [`GF;Geist-500`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: l(u, {
                                              children: [
                                                l(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.7em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: [
                                                    `Focus of this project is to enable`,
                                                    a(`span`, {
                                                      style: {
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: a(`strong`, {
                                                        children: ` `,
                                                      }),
                                                    }),
                                                    a(`span`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: `leaders, content managers, and individual contributors`,
                                                    }),
                                                    a(`span`, {
                                                      style: {
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: ` `,
                                                    }),
                                                    `to create structured, goal-oriented learning experiences from Pluralsight’s vast library. `,
                                                  ],
                                                }),
                                                l(`ul`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.7em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                  },
                                                  children: [
                                                    a(`li`, {
                                                      children: l(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                        },
                                                        children: [
                                                          a(`span`, {
                                                            style: {
                                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                            },
                                                            children: `Drive skill development`,
                                                          }),
                                                          a(`span`, {
                                                            style: {
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                            },
                                                            children: ` `,
                                                          }),
                                                          `by aligning learning content to professional growth and business goals.`,
                                                        ],
                                                      }),
                                                    }),
                                                    a(`li`, {
                                                      children: l(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                        },
                                                        children: [
                                                          a(`span`, {
                                                            style: {
                                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                            },
                                                            children: `Surface relevant learning paths `,
                                                          }),
                                                          `tailored to roles, levels, or teams.`,
                                                        ],
                                                      }),
                                                    }),
                                                    a(`li`, {
                                                      children: l(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                          "--framer-font-weight": `400`,
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                        },
                                                        children: [
                                                          a(`span`, {
                                                            style: {
                                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                            },
                                                            children: `Enable structured, scalable learning`,
                                                          }),
                                                          a(`span`, {
                                                            style: {
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                            },
                                                            children: ` `,
                                                          }),
                                                          `through content grouping personalisation.`,
                                                        ],
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            className: `framer-f3azjv`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [
                                              `GF;Geist-regular`,
                                              `GF;Geist-700`,
                                              `GF;Geist-500`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    V() &&
                                      l(`div`, {
                                        className: `framer-4ld0mg hidden-4ry9c1`,
                                        children: [
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                              children: a(`h4`, {
                                                style: {
                                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `-1px`,
                                                  "--framer-line-height": `36px`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                },
                                                children: `My Role `,
                                              }),
                                            }),
                                            className: `framer-1ngzmux`,
                                            "data-framer-name": `Header`,
                                            fonts: [`GF;Geist-500`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                              children: a(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                  "--framer-line-height": `1.5em`,
                                                  "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                },
                                                children: `Led the project with junior designers and collaborated with the strategy team to unify the product experience. Contributed cross-functionally to align all stakeholders.`,
                                              }),
                                            }),
                                            className: `framer-6rfm38`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [`GF;Geist-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          l(`div`, {
                                            className: `framer-1g29ehg`,
                                            children: [
                                              a(`div`, {
                                                className: `framer-83788w`,
                                                "data-border": !0,
                                                children: l(w, {
                                                  className: `framer-1x4xuig`,
                                                  opacity: 1,
                                                  requiresOverflowVisible: !0,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><g><path d="M 0 7.5 C 0 3.965 0 2.196 1.098 1.098 C 2.196 0 3.964 0 7.5 0 C 11.035 0 12.804 0 13.902 1.098 C 15 2.196 15 3.964 15 7.5 C 15 11.035 15 12.804 13.902 13.902 C 12.803 15 11.036 15 7.5 15 C 3.965 15 2.196 15 1.098 13.902 C 0 12.803 0 11.036 0 7.5 Z" fill="transparent" stroke="rgb(137, 209, 13)" stroke-miterlimit="10" stroke-dasharray=""></path><path d="M 0 5.132 L 15 5.132" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 8.289 8.289 L 11.447 8.289 M 8.289 11.447 L 9.868 11.447" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 3.553 2.763 L 3.56 2.763 M 6.711 2.763 L 6.718 2.763" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 5.132 5.132 L 5.132 15" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                  withExternalLayout: !0,
                                                  children: [
                                                    a(w, {
                                                      className: `framer-1l2wnbf`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" overflow="visible"><path d="M 0 7.5 C 0 3.965 0 2.196 1.098 1.098 C 2.196 0 3.964 0 7.5 0 C 11.035 0 12.804 0 13.902 1.098 C 15 2.196 15 3.964 15 7.5 C 15 11.035 15 12.804 13.902 13.902 C 12.803 15 11.036 15 7.5 15 C 3.965 15 2.196 15 1.098 13.902 C 0 12.803 0 11.036 0 7.5 Z" fill="transparent" stroke="rgb(137, 209, 13)" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    a(w, {
                                                      className: `framer-11spzwd`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 1" overflow="visible"><path d="M 0 0 L 15 0" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    l(w, {
                                                      className: `framer-1xh3pkg`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.158 3.158" overflow="visible"><path d="M 0 0 L 3.158 0 M 0 3.158 L 1.579 3.158" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                      withExternalLayout: !0,
                                                      children: [
                                                        a(w, {
                                                          className: `framer-eubqs1`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !1,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.158 1" overflow="visible"><path d="M 0 0 L 3.158 0" fill="transparent"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-tam3hb`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !1,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.579 1" overflow="visible"><path d="M 0 0 L 1.579 0" fill="transparent"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      ],
                                                    }),
                                                    l(w, {
                                                      className: `framer-1bjz52u`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.165 1" overflow="visible"><path d="M 0 0 L 0.007 0 M 3.158 0 L 3.165 0" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                      withExternalLayout: !0,
                                                      children: [
                                                        a(w, {
                                                          className: `framer-1xn73w9`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !1,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0 L 0.007 0" fill="transparent"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-1vmtw4l`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !1,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0 L 0.007 0" fill="transparent"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      ],
                                                    }),
                                                    a(w, {
                                                      className: `framer-18s0uss`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 9.868" overflow="visible"><path d="M 0 0 L 0 9.868" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: a(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                    },
                                                    children: `Product Design`,
                                                  }),
                                                }),
                                                className: `framer-mqozcz`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [`GF;Geist-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          l(`div`, {
                                            className: `framer-1cqylzy`,
                                            children: [
                                              a(`div`, {
                                                className: `framer-112fzvf`,
                                                "data-border": !0,
                                                children: l(w, {
                                                  className: `framer-1alei55`,
                                                  opacity: 1,
                                                  requiresOverflowVisible: !0,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.001 18.001" overflow="visible"><g><path d="M 14 9.9 L 14 7.791 C 14 7.055 14 6.688 13.867 6.357 C 13.734 6.026 13.481 5.765 12.975 5.245 L 8.831 0.983 C 8.394 0.534 8.176 0.31 7.905 0.176 C 7.849 0.149 7.791 0.124 7.732 0.103 C 7.45 0 7.141 0 6.524 0 C 3.685 0 2.264 0 1.303 0.797 C 1.109 0.958 0.932 1.14 0.775 1.34 C 0 2.331 0 3.79 0 6.71 L 0 10.8 C 0 14.194 0 15.891 1.025 16.945 C 1.956 17.903 3.4 17.991 6.125 18 M 7.875 0.45 L 7.875 0.9 C 7.875 3.445 7.875 4.719 8.644 5.509 C 9.412 6.3 10.65 6.3 13.125 6.3 L 13.563 6.3" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 14.001 18.001 L 12.123 16.068 M 12.123 16.068 C 12.685 15.489 13.001 14.705 13.001 13.887 C 13.001 12.414 11.99 11.147 10.586 10.86 C 9.182 10.572 7.776 11.345 7.229 12.705 C 6.681 14.066 7.144 15.635 8.334 16.453 C 9.524 17.27 11.11 17.11 12.123 16.068 Z" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                  withExternalLayout: !0,
                                                  children: [
                                                    l(w, {
                                                      className: `framer-2gr2zt`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 18" overflow="visible"><path d="M 14 9.9 L 14 7.791 C 14 7.055 14 6.688 13.867 6.357 C 13.734 6.026 13.481 5.765 12.975 5.245 L 8.831 0.983 C 8.394 0.534 8.176 0.31 7.905 0.176 C 7.849 0.149 7.791 0.124 7.732 0.103 C 7.45 0 7.141 0 6.524 0 C 3.685 0 2.264 0 1.303 0.797 C 1.109 0.958 0.932 1.14 0.775 1.34 C 0 2.331 0 3.79 0 6.71 L 0 10.8 C 0 14.194 0 15.891 1.025 16.945 C 1.956 17.903 3.4 17.991 6.125 18 M 7.875 0.45 L 7.875 0.9 C 7.875 3.445 7.875 4.719 8.644 5.509 C 9.412 6.3 10.65 6.3 13.125 6.3 L 13.563 6.3" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                      withExternalLayout: !0,
                                                      children: [
                                                        a(w, {
                                                          className: `framer-bxnmom`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !1,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 18" overflow="visible"><path d="M 14 9.9 L 14 7.791 C 14 7.055 14 6.688 13.867 6.357 C 13.734 6.026 13.481 5.765 12.975 5.245 L 8.831 0.983 C 8.394 0.534 8.176 0.31 7.905 0.176 C 7.849 0.149 7.791 0.124 7.732 0.103 C 7.45 0 7.141 0 6.524 0 C 3.685 0 2.264 0 1.303 0.797 C 1.109 0.958 0.932 1.14 0.775 1.34 C 0 2.331 0 3.79 0 6.71 L 0 10.8 C 0 14.194 0 15.891 1.025 16.945 C 1.956 17.903 3.4 17.991 6.125 18" fill="transparent"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-1ct81bh`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !1,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.688 5.85" overflow="visible"><path d="M 0 0 L 0 0.45 C 0 2.995 0 4.269 0.769 5.059 C 1.537 5.85 2.775 5.85 5.25 5.85 L 5.688 5.85" fill="transparent"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      ],
                                                    }),
                                                    l(w, {
                                                      className: `framer-3hbyhi`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.001 7.201" overflow="visible"><path d="M 7.001 7.201 L 5.123 5.268 M 5.123 5.268 C 5.685 4.689 6.001 3.905 6.001 3.087 C 6.001 1.614 4.99 0.347 3.586 0.06 C 2.182 -0.228 0.776 0.545 0.229 1.905 C -0.319 3.266 0.144 4.835 1.334 5.653 C 2.524 6.47 4.11 6.31 5.123 5.268 Z" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                      withExternalLayout: !0,
                                                      children: [
                                                        a(w, {
                                                          className: `framer-e3kun2`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !1,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.879 1.932" overflow="visible"><path d="M 1.879 1.932 L 0 0" fill="transparent"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-1dsup79`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !1,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.001 6.173" overflow="visible"><path d="M 5.123 5.268 C 5.685 4.689 6.001 3.905 6.001 3.087 C 6.001 1.614 4.99 0.347 3.586 0.06 C 2.182 -0.228 0.776 0.545 0.229 1.905 C -0.319 3.266 0.144 4.835 1.334 5.653 C 2.524 6.47 4.11 6.31 5.123 5.268 Z" fill="transparent"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: a(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                    },
                                                    children: `Researcher`,
                                                  }),
                                                }),
                                                className: `framer-11gs6j5`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [`GF;Geist-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          l(`div`, {
                                            className: `framer-1reyv28`,
                                            children: [
                                              a(`div`, {
                                                className: `framer-ip2dke`,
                                                "data-border": !0,
                                                children: l(w, {
                                                  className: `framer-1by2rnc`,
                                                  opacity: 1,
                                                  requiresOverflowVisible: !0,
                                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><g><path d="M 3.272 10.4 C 2.96 9.696 2.799 8.934 2.8 8.164 C 2.8 5.202 5.128 2.8 8 2.8 C 10.872 2.8 13.2 5.202 13.2 8.165 C 13.201 8.935 13.04 9.696 12.728 10.4" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M 8 0 L 8 0.8 M 16 8 L 15.2 8 M 0.8 8 L 0 8 M 13.656 2.342 L 13.09 2.908 M 2.91 2.909 L 2.344 2.343 M 10.014 13.845 C 10.822 13.583 11.146 12.843 11.238 12.099 C 11.265 11.877 11.082 11.692 10.858 11.692 L 5.182 11.692 C 5.071 11.69 4.965 11.736 4.89 11.818 C 4.816 11.899 4.78 12.009 4.791 12.119 C 4.881 12.862 5.106 13.405 5.962 13.845 M 10.014 13.845 L 5.962 13.845 M 10.014 13.845 C 9.917 15.401 9.467 16.017 8.006 15.999 C 6.442 16.028 6.082 15.266 5.962 13.845" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`,
                                                  withExternalLayout: !0,
                                                  children: [
                                                    a(w, {
                                                      className: `framer-qo4lh8`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10.4 7.6" overflow="visible"><path d="M 0.472 7.6 C 0.16 6.896 -0.001 6.134 0 5.364 C 0 2.402 2.328 0 5.2 0 C 8.072 0 10.4 2.402 10.4 5.365 C 10.401 6.135 10.24 6.896 9.928 7.6" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-miterlimit="10"></path></svg>`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    l(w, {
                                                      className: `framer-1vav38r`,
                                                      opacity: 1,
                                                      requiresOverflowVisible:
                                                        !0,
                                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 8 0 L 8 0.8 M 16 8 L 15.2 8 M 0.8 8 L 0 8 M 13.656 2.342 L 13.09 2.908 M 2.91 2.909 L 2.344 2.343 M 10.014 13.845 C 10.822 13.583 11.146 12.843 11.238 12.099 C 11.265 11.877 11.082 11.692 10.858 11.692 L 5.182 11.692 C 5.071 11.69 4.965 11.736 4.89 11.818 C 4.816 11.899 4.78 12.009 4.791 12.119 C 4.881 12.862 5.106 13.405 5.962 13.845 M 10.014 13.845 L 5.962 13.845 M 10.014 13.845 C 9.917 15.401 9.467 16.017 8.006 15.999 C 6.442 16.028 6.082 15.266 5.962 13.845" fill="transparent" stroke="rgb(137, 209, 13)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                                                      withExternalLayout: !0,
                                                      children: [
                                                        a(w, {
                                                          className: `framer-12f3r4e`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0 L 0 0.8" fill="transparent" stroke="rgb(137, 209, 13)"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-6gppr6`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.8 0 L 0 0" fill="transparent" stroke="rgb(137, 209, 13)"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-1u0nyg8`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.8 0 L 0 0" fill="transparent" stroke="rgb(137, 209, 13)"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-qbzgxd`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.566 0 L 0 0.566" fill="transparent" stroke="rgb(137, 209, 13)"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-1pyjljd`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0.566 0.566 L 0 0" fill="transparent" stroke="rgb(137, 209, 13)"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-10ntotn`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.451 2.153" overflow="visible"><path d="M 5.225 2.153 C 6.033 1.891 6.357 1.151 6.449 0.407 C 6.476 0.185 6.293 0 6.069 0 L 0.393 0 C 0.282 -0.002 0.176 0.044 0.101 0.126 C 0.027 0.207 -0.01 0.317 0.002 0.427 C 0.092 1.17 0.317 1.713 1.173 2.153" fill="transparent" stroke="rgb(137, 209, 13)"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-lrnyni`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.051 1" overflow="visible"><path d="M 4.051 0 L 0 0" fill="transparent" stroke="rgb(137, 209, 13)"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                        a(w, {
                                                          className: `framer-daiab8`,
                                                          opacity: 1,
                                                          requiresOverflowVisible:
                                                            !0,
                                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.051 2.155" overflow="visible"><path d="M 4.051 0 C 3.954 1.556 3.505 2.172 2.043 2.154 C 0.48 2.183 0.12 1.422 0 0" fill="transparent" stroke="rgb(137, 209, 13)"></path></svg>`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: a(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-font-weight": `500`,
                                                      "--framer-line-height": `1.4em`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                    },
                                                    children: `Strategist`,
                                                  }),
                                                }),
                                                className: `framer-5oqhuc`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [`GF;Geist-500`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    H() &&
                                      l(`div`, {
                                        className: `framer-3fv52u hidden-cz5ij6`,
                                        "data-framer-name": `Main Text`,
                                        children: [
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                              children: a(`h3`, {
                                                style: {
                                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                  "--framer-font-size": `34px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `-1px`,
                                                  "--framer-line-height": `36px`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                },
                                                children: `Summary of the project`,
                                              }),
                                            }),
                                            className: `framer-15kvx3z`,
                                            "data-framer-name": `Header`,
                                            fonts: [`GF;Geist-500`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: l(u, {
                                              children: [
                                                a(`p`, {
                                                  style: {
                                                    "--framer-font-size": `18px`,
                                                    "--framer-line-height": `2.5em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: a(`strong`, {
                                                    children: `🧩 What Was the Problem?`,
                                                  }),
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• Pluralsight’s curation tools were disjointed, confusing, and hard to use.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• Users- learners, leaders, and curators, struggled with personalization, tracking, and engagement.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: a(`br`, {
                                                    className: `trailing-break`,
                                                  }),
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-font-size": `18px`,
                                                    "--framer-line-height": `2.5em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: a(`strong`, {
                                                    children: `✏️ What Did the Redesign Focus On?`,
                                                  }),
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `2em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• Creating a unified, intuitive platform to manage learning paths.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• Enabling leaders to assign and monitor progress easily.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• Helping learners stay motivated and aligned with goals.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: a(`br`, {
                                                    className: `trailing-break`,
                                                  }),
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-font-size": `18px`,
                                                    "--framer-line-height": `2.5em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: a(`strong`, {
                                                    children: `✅ How Was It Done?`,
                                                  }),
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• Through research (quant, qual, interviews), pain points were mapped.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• Object-Oriented UX shaped a modular, scalable structure.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• Clear user flows were designed for different roles.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: a(`br`, {
                                                    className: `trailing-break`,
                                                  }),
                                                }),
                                                l(`p`, {
                                                  style: {
                                                    "--framer-line-height": `2em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: [
                                                    a(`strong`, {
                                                      children: `🌟 `,
                                                    }),
                                                    a(`span`, {
                                                      style: {
                                                        "--framer-font-size": `18px`,
                                                      },
                                                      children: a(`strong`, {
                                                        children: `Outcome`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: `• A curated, flexible, and engaging experience that drives adoption, improves completion, and aligns learning with business goals.`,
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.25em`,
                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                  },
                                                  children: a(`br`, {
                                                    className: `trailing-break`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            className: `framer-cvznjw`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              P() &&
                                a(`div`, {
                                  className: `framer-1yz7rjf hidden-1sscvvh hidden-4ry9c1`,
                                  "data-framer-name": `Text Details 1`,
                                  children: l(`div`, {
                                    className: `framer-yfmbdx`,
                                    "data-framer-name": `Main Text`,
                                    children: [
                                      a(C, {
                                        __fromCanvasComponent: !0,
                                        children: a(u, {
                                          children: a(`h3`, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `34px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-1px`,
                                              "--framer-line-height": `36px`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                            },
                                            children: `Problem Statement `,
                                          }),
                                        }),
                                        className: `framer-1d1s9x9`,
                                        "data-framer-name": `Header`,
                                        fonts: [`GF;Geist-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      l(`div`, {
                                        className: `framer-m999in`,
                                        children: [
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: l(u, {
                                              children: [
                                                l(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: [
                                                    `The current experience is `,
                                                    a(`span`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: `fragmented, confusing, and difficult to use`,
                                                    }),
                                                    ` - making it hard for learners to find the right content and for leaders to effectively create guide learning.`,
                                                  ],
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: a(`br`, {
                                                    className: `trailing-break`,
                                                  }),
                                                }),
                                                l(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: [
                                                    `Multiple `,
                                                    a(`span`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: `overlapping tools`,
                                                    }),
                                                    a(`span`, {
                                                      style: {
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: a(`strong`, {
                                                        children: ` `,
                                                      }),
                                                    }),
                                                    `(channels, priorities, path, certification preparation, bookmarks, tech foundation) create redundancy, poor discoverability, and unclear user journeys. This results in low engagement, high session dropouts, and under utilisation of curated content.`,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            className: `framer-103vd1p`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [
                                              `GF;Geist-regular`,
                                              `GF;Geist-700`,
                                              `GF;Geist-500`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: l(u, {
                                              children: [
                                                a(`ul`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: a(`li`, {
                                                    children: l(`p`, {
                                                      children: [
                                                        a(`strong`, {
                                                          children: `Individuals`,
                                                        }),
                                                        ` looking to build or refine tech skills.`,
                                                      ],
                                                    }),
                                                  }),
                                                }),
                                                l(`ul`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: [
                                                    a(`li`, {
                                                      children: l(`p`, {
                                                        children: [
                                                          a(`strong`, {
                                                            children: `Teams and enterprises`,
                                                          }),
                                                          ` across industries (about 70% of Fortune 500 companies rely on Pluralsight for workforce development).`,
                                                        ],
                                                      }),
                                                    }),
                                                    a(`li`, {
                                                      children: l(`p`, {
                                                        children: [
                                                          a(`strong`, {
                                                            children: `Public sector`,
                                                          }),
                                                          ` organisations, academic institutions, and nonprofits also use it through special programs.`,
                                                        ],
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            className: `framer-zg3s21`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [
                                              `GF;Geist-regular`,
                                              `GF;Geist-700`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              P() &&
                                l(`div`, {
                                  className: `framer-1a3elqa hidden-1sscvvh hidden-4ry9c1`,
                                  children: [
                                    a(C, {
                                      __fromCanvasComponent: !0,
                                      children: a(u, {
                                        children: a(`h4`, {
                                          style: {
                                            "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                            "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                            "--framer-font-size": `34px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-1px`,
                                            "--framer-line-height": `36px`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                          },
                                          children: `Architecture Analysis`,
                                        }),
                                      }),
                                      className: `framer-1obgqef`,
                                      "data-framer-name": `Header`,
                                      fonts: [`GF;Geist-500`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(`div`, {
                                      className: `framer-1maqv7t`,
                                      "data-framer-name": `Content`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-1yv7e47`,
                                          "data-framer-name": `Main Text`,
                                          children: a(C, {
                                            __fromCanvasComponent: !0,
                                            children: l(u, {
                                              children: [
                                                a(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: `Skills offers multiple features that enable both learners and leaders to - `,
                                                }),
                                                l(`ul`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: [
                                                    a(`li`, {
                                                      children: a(`p`, {
                                                        children: `Curate content`,
                                                      }),
                                                    }),
                                                    a(`li`, {
                                                      children: a(`p`, {
                                                        children: `Highlight company prioritiesg`,
                                                      }),
                                                    }),
                                                    a(`li`, {
                                                      children: a(`p`, {
                                                        children: `Manage team learning`,
                                                      }),
                                                    }),
                                                    l(`li`, {
                                                      children: [
                                                        a(`p`, {
                                                          children: `Access expert-curated learning journeys`,
                                                        }),
                                                        a(`p`, {
                                                          style: {
                                                            "--font-selector": `SW50ZXI=`,
                                                            "--framer-font-family": `"Inter", sans-serif`,
                                                            "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                          },
                                                          children: a(`br`, {
                                                            className: `trailing-break`,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                a(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                  },
                                                  children: `These tools were design to help users grow in their roles, prepare for top certifications, and explore career transitions.`,
                                                }),
                                              ],
                                            }),
                                            className: `framer-1yppyn9`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [
                                              `GF;Geist-regular`,
                                              `Inter`,
                                            ],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-j14e7k`,
                                          children: a(g, {
                                            height: 284,
                                            width: `250px`,
                                            y:
                                              (p?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              560 +
                                              40 +
                                              0 +
                                              0 +
                                              1500 +
                                              0 +
                                              60 +
                                              0 +
                                              14,
                                            children: a(_, {
                                              className: `framer-3dcg05-container`,
                                              nodeId: `QvkTNJeFf`,
                                              rendersWithMotion: !0,
                                              scopeId: `YUN0ipZRa`,
                                              style: { rotate: 5 },
                                              children: a(rt, {
                                                height: `100%`,
                                                Hldsy7RD3: `Key point`,
                                                id: `QvkTNJeFf`,
                                                layoutId: `QvkTNJeFf`,
                                                P3t7CVzCD: `We revisited the IA to evaluate the purpose of each module, eliminate duplicate solutions, and ensure we deliver the most effective experience for users.`,
                                                style: { width: `100%` },
                                                variant: `egEDNKzzv`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(Zn, {
                                      animate: pr,
                                      className: `framer-1qx494t`,
                                      "data-framer-appear-id": `1qx494t`,
                                      "data-framer-name": `Image 1`,
                                      initial: fr,
                                      optimized: !0,
                                      children: a(b, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: M(
                                            (p?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              560 +
                                              40 +
                                              0 +
                                              0 +
                                              1500 +
                                              0 +
                                              396 +
                                              0
                                          ),
                                          pixelHeight: 1780,
                                          pixelWidth: 3173,
                                          sizes: `845px`,
                                          src: `https://framerusercontent.com/images/6J3gYPc0Ao7JaHzAY7lk5cRuBIg.png?width=3173&height=1780`,
                                          srcSet: `https://framerusercontent.com/images/6J3gYPc0Ao7JaHzAY7lk5cRuBIg.png?scale-down-to=512&width=3173&height=1780 512w,https://framerusercontent.com/images/6J3gYPc0Ao7JaHzAY7lk5cRuBIg.png?scale-down-to=1024&width=3173&height=1780 1024w,https://framerusercontent.com/images/6J3gYPc0Ao7JaHzAY7lk5cRuBIg.png?scale-down-to=2048&width=3173&height=1780 2048w,https://framerusercontent.com/images/6J3gYPc0Ao7JaHzAY7lk5cRuBIg.png?width=3173&height=1780 3173w`,
                                        },
                                        className: `framer-1mm9qre`,
                                        "data-framer-name": `Image`,
                                      }),
                                    }),
                                  ],
                                }),
                              P() &&
                                l(`div`, {
                                  className: `framer-fpakmn hidden-1sscvvh hidden-4ry9c1`,
                                  "data-framer-name": `Heading/Tag`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-qnk3ov`,
                                      children: [
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: a(`h4`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-font-size": `34px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-1px`,
                                                "--framer-line-height": `36px`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                              },
                                              children: `Business Goals & Objectives`,
                                            }),
                                          }),
                                          className: `framer-l8qeek`,
                                          "data-framer-name": `Header`,
                                          fonts: [`GF;Geist-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: l(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                              },
                                              children: [
                                                `Goal with new experience is to deliver`,
                                                a(`span`, {
                                                  style: {
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                  },
                                                  children: ` `,
                                                }),
                                                `a unified system that enables both learners and organizations to curate, manage, assign, and prioritise learning journey  aligned with individual goals, skill levels, and learning pace.`,
                                              ],
                                            }),
                                          }),
                                          className: `framer-h7ame4`,
                                          "data-framer-name": `Paragraph`,
                                          fonts: [`GF;Geist-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(`div`, {
                                          className: `framer-bv87vx`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-3h2bk8`,
                                              "data-border": !0,
                                              children: l(w, {
                                                className: `framer-pecew8`,
                                                opacity: 1,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14" overflow="visible"><g><path d="M 0 5.833 L 0 12.833 C 0 13.196 0 13.377 0.063 13.52 C 0.146 13.71 0.307 13.861 0.508 13.94 C 0.66 14 0.852 14 1.235 14 C 1.619 14 1.811 14 1.962 13.941 C 2.164 13.862 2.324 13.71 2.407 13.52 C 2.471 13.377 2.471 13.196 2.471 12.833 L 2.471 5.833 C 2.471 5.471 2.471 5.29 2.408 5.147 C 2.324 4.956 2.164 4.805 1.962 4.727 C 1.811 4.667 1.619 4.667 1.235 4.667 C 0.852 4.667 0.66 4.667 0.508 4.726 C 0.307 4.805 0.147 4.956 0.063 5.147 C 0 5.29 0 5.471 0 5.833 Z" fill="transparent" stroke="rgb(158, 245, 7)" stroke-linejoin="round" stroke-dasharray="" opacity="0.75"></path><path d="M 11.529 3.889 L 13.176 5.833 L 11.118 7.389" fill="transparent" stroke-width="1.5" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="" opacity="0.75"></path><path d="M 12.765 5.833 C 12.765 5.833 6.588 5.833 0.412 0" fill="transparent" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="" opacity="0.75"></path><path d="M 5.765 8.556 L 5.765 12.833 C 5.765 13.196 5.765 13.377 5.827 13.52 C 5.911 13.71 6.071 13.861 6.273 13.94 C 6.424 14 6.616 14 7 14 C 7.384 14 7.576 14 7.727 13.941 C 7.929 13.862 8.088 13.71 8.172 13.52 C 8.235 13.377 8.235 13.196 8.235 12.833 L 8.235 8.556 C 8.235 8.193 8.235 8.012 8.173 7.869 C 8.089 7.679 7.929 7.528 7.727 7.449 C 7.576 7.389 7.384 7.389 7 7.389 C 6.616 7.389 6.424 7.389 6.273 7.448 C 6.071 7.527 5.912 7.678 5.828 7.869 C 5.765 8.012 5.765 8.193 5.765 8.556 Z M 11.529 10.5 L 11.529 12.833 C 11.529 13.196 11.529 13.377 11.592 13.52 C 11.676 13.71 11.836 13.861 12.038 13.94 C 12.189 14 12.381 14 12.765 14 C 13.148 14 13.34 14 13.492 13.941 C 13.693 13.862 13.853 13.71 13.937 13.52 C 14 13.377 14 13.196 14 12.833 L 14 10.5 C 14 10.138 14 9.956 13.937 9.813 C 13.854 9.623 13.693 9.472 13.492 9.393 C 13.34 9.333 13.148 9.333 12.765 9.333 C 12.381 9.333 12.189 9.333 12.038 9.392 C 11.836 9.472 11.676 9.623 11.593 9.813 C 11.529 9.956 11.529 10.138 11.529 10.5 Z" fill="transparent" stroke="rgb(158, 245, 7)" stroke-linejoin="round" stroke-dasharray="" opacity="0.75"></path></g></svg>`,
                                                withExternalLayout: !0,
                                                children: [
                                                  a(w, {
                                                    className: `framer-ci3xs1`,
                                                    opacity: 0.75,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.471 9.333" overflow="visible"><path d="M 0 1.167 L 0 8.167 C 0 8.529 0 8.71 0.063 8.853 C 0.146 9.044 0.307 9.195 0.508 9.273 C 0.66 9.333 0.852 9.333 1.235 9.333 C 1.619 9.333 1.811 9.333 1.962 9.274 C 2.164 9.195 2.324 9.044 2.407 8.853 C 2.471 8.71 2.471 8.529 2.471 8.167 L 2.471 1.167 C 2.471 0.804 2.471 0.623 2.408 0.48 C 2.324 0.29 2.164 0.139 1.962 0.06 C 1.811 0 1.619 0 1.235 0 C 0.852 0 0.66 0 0.508 0.059 C 0.307 0.138 0.147 0.29 0.063 0.48 C 0 0.623 0 0.804 0 1.167 Z" fill="transparent" stroke="rgb(158, 245, 7)" stroke-linejoin="round" stroke-dasharray="" opacity="0.75"></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  a(w, {
                                                    className: `framer-1o2ir2h`,
                                                    opacity: 0.75,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.059 3.5" overflow="visible"><path d="M 0.412 0 L 2.059 1.944 L 0 3.5" fill="transparent" stroke-width="1.5" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="" opacity="0.75"></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  a(w, {
                                                    className: `framer-5uo868`,
                                                    opacity: 0.75,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12.353 5.833" overflow="visible"><path d="M 12.353 5.833 C 12.353 5.833 6.176 5.833 0 0" fill="transparent" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="" opacity="0.75"></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  l(w, {
                                                    className: `framer-ixuher`,
                                                    opacity: 0.75,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.235 6.611" overflow="visible"><path d="M 0 1.167 L 0 5.444 C 0 5.807 0 5.988 0.063 6.131 C 0.146 6.321 0.307 6.472 0.508 6.551 C 0.66 6.611 0.852 6.611 1.235 6.611 C 1.619 6.611 1.811 6.611 1.962 6.552 C 2.164 6.473 2.324 6.322 2.407 6.131 C 2.471 5.988 2.471 5.807 2.471 5.444 L 2.471 1.167 C 2.471 0.804 2.471 0.623 2.408 0.48 C 2.324 0.29 2.164 0.139 1.962 0.06 C 1.811 0 1.619 0 1.235 0 C 0.852 0 0.66 0 0.508 0.059 C 0.307 0.138 0.147 0.29 0.063 0.48 C 0 0.623 0 0.804 0 1.167 Z M 5.765 3.111 L 5.765 5.444 C 5.765 5.807 5.765 5.988 5.827 6.131 C 5.911 6.321 6.071 6.472 6.273 6.551 C 6.424 6.611 6.616 6.611 7 6.611 C 7.384 6.611 7.576 6.611 7.727 6.552 C 7.929 6.473 8.088 6.322 8.172 6.131 C 8.235 5.988 8.235 5.807 8.235 5.444 L 8.235 3.111 C 8.235 2.749 8.235 2.567 8.173 2.424 C 8.089 2.234 7.929 2.083 7.727 2.004 C 7.576 1.944 7.384 1.944 7 1.944 C 6.616 1.944 6.424 1.944 6.273 2.004 C 6.071 2.083 5.912 2.234 5.828 2.424 C 5.765 2.567 5.765 2.749 5.765 3.111 Z" fill="transparent" stroke="rgb(158, 245, 7)" stroke-linejoin="round" stroke-dasharray="" opacity="0.75"></path></svg>`,
                                                    withExternalLayout: !0,
                                                    children: [
                                                      a(w, {
                                                        className: `framer-5x8mja`,
                                                        opacity: 0.75,
                                                        requiresOverflowVisible:
                                                          !1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.471 6.611" overflow="visible"><path d="M 0 1.167 L 0 5.444 C 0 5.807 0 5.988 0.063 6.131 C 0.146 6.321 0.307 6.472 0.508 6.551 C 0.66 6.611 0.852 6.611 1.235 6.611 C 1.619 6.611 1.811 6.611 1.962 6.552 C 2.164 6.473 2.324 6.322 2.407 6.131 C 2.471 5.988 2.471 5.807 2.471 5.444 L 2.471 1.167 C 2.471 0.804 2.471 0.623 2.408 0.48 C 2.324 0.29 2.164 0.139 1.962 0.06 C 1.811 0 1.619 0 1.235 0 C 0.852 0 0.66 0 0.508 0.059 C 0.307 0.138 0.147 0.29 0.063 0.48 C 0 0.623 0 0.804 0 1.167 Z" fill="transparent" opacity="0.75"></path></svg>`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      a(w, {
                                                        className: `framer-9ebqtc`,
                                                        opacity: 0.75,
                                                        requiresOverflowVisible:
                                                          !1,
                                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.471 4.667" overflow="visible"><path d="M 0 1.167 L 0 3.5 C 0 3.862 0 4.044 0.063 4.187 C 0.146 4.377 0.307 4.528 0.508 4.607 C 0.66 4.667 0.852 4.667 1.235 4.667 C 1.619 4.667 1.811 4.667 1.962 4.608 C 2.164 4.528 2.324 4.377 2.407 4.187 C 2.471 4.044 2.471 3.862 2.471 3.5 L 2.471 1.167 C 2.471 0.804 2.471 0.623 2.408 0.48 C 2.324 0.29 2.164 0.139 1.962 0.06 C 1.811 0 1.619 0 1.235 0 C 0.852 0 0.66 0 0.508 0.059 C 0.307 0.138 0.147 0.29 0.063 0.48 C 0 0.623 0 0.804 0 1.167 Z" fill="transparent" opacity="0.75"></path></svg>`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            a(C, {
                                              __fromCanvasComponent: !0,
                                              children: a(u, {
                                                children: a(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                  },
                                                  children: `Reduce Session dropout rate `,
                                                }),
                                              }),
                                              className: `framer-q4y8fo`,
                                              "data-framer-name": `Paragraph`,
                                              fonts: [`GF;Geist-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        l(`div`, {
                                          className: `framer-tavwmx`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-1wjq4y`,
                                              "data-border": !0,
                                              children: l(w, {
                                                className: `framer-prv6gn`,
                                                opacity: 1,
                                                requiresOverflowVisible: !0,
                                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18 14.211" overflow="visible"><g><path d="M 4.737 14.211 C 4.737 13.295 5.049 12.371 5.807 11.861 C 6.752 11.229 7.863 10.892 9 10.895 C 10.182 10.895 11.28 11.251 12.193 11.861 C 12.952 12.371 13.263 13.295 13.263 14.211" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 6.632 6.158 C 6.632 4.85 7.692 3.789 9 3.789 C 10.308 3.789 11.368 4.85 11.368 6.158 C 11.368 7.466 10.308 8.526 9 8.526 C 7.692 8.526 6.632 7.466 6.632 6.158 Z" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 14.211 6.158 C 15.262 6.158 16.24 6.515 17.05 7.126 C 17.738 7.645 18 8.522 18 9.383 L 18 9.474" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 12.316 1.895 C 12.316 0.848 13.164 0 14.211 0 C 15.257 0 16.105 0.848 16.105 1.895 C 16.105 2.941 15.257 3.789 14.211 3.789 C 13.164 3.789 12.316 2.941 12.316 1.895 Z" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 3.789 6.158 C 2.738 6.158 1.76 6.515 0.95 7.126 C 0.262 7.645 0 8.522 0 9.383 L 0 9.474" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path><path d="M 1.895 1.895 C 1.895 0.848 2.743 0 3.789 0 C 4.836 0 5.684 0.848 5.684 1.895 C 5.684 2.941 4.836 3.789 3.789 3.789 C 2.743 3.789 1.895 2.941 1.895 1.895 Z" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                                withExternalLayout: !0,
                                                children: [
                                                  a(w, {
                                                    className: `framer-knw4x2`,
                                                    opacity: 1,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8.526 3.316" overflow="visible"><path d="M 0 3.316 C 0 2.401 0.312 1.476 1.071 0.966 C 2.015 0.334 3.127 -0.002 4.263 0 C 5.445 0 6.543 0.356 7.456 0.966 C 8.216 1.476 8.526 2.401 8.526 3.316" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  a(w, {
                                                    className: `framer-1ic05ar`,
                                                    opacity: 1,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4.737 4.737" overflow="visible"><path d="M 0 2.368 C 0 1.06 1.06 0 2.368 0 C 3.676 0 4.737 1.06 4.737 2.368 C 4.737 3.676 3.676 4.737 2.368 4.737 C 1.06 4.737 0 3.676 0 2.368 Z" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  a(w, {
                                                    className: `framer-z4cxnr`,
                                                    opacity: 1,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.789 3.316" overflow="visible"><path d="M 0 0 C 1.052 0 2.029 0.357 2.839 0.968 C 3.527 1.487 3.789 2.364 3.789 3.225 L 3.789 3.316" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  a(w, {
                                                    className: `framer-tae6eo`,
                                                    opacity: 1,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.789 3.789" overflow="visible"><path d="M 0 1.895 C 0 0.848 0.848 0 1.895 0 C 2.941 0 3.789 0.848 3.789 1.895 C 3.789 2.941 2.941 3.789 1.895 3.789 C 0.848 3.789 0 2.941 0 1.895 Z" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  a(w, {
                                                    className: `framer-1phqnu3`,
                                                    opacity: 1,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.789 3.316" overflow="visible"><path d="M 3.789 0 C 2.738 0 1.76 0.357 0.95 0.968 C 0.262 1.487 0 2.364 0 3.225 L 0 3.316" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  a(w, {
                                                    className: `framer-hbmh5l`,
                                                    opacity: 1,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.789 3.789" overflow="visible"><path d="M 0 1.895 C 0 0.848 0.848 0 1.895 0 C 2.941 0 3.789 0.848 3.789 1.895 C 3.789 2.941 2.941 3.789 1.895 3.789 C 0.848 3.789 0 2.941 0 1.895 Z" fill="transparent" stroke-width="0.75" stroke="rgb(158, 245, 7)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            a(C, {
                                              __fromCanvasComponent: !0,
                                              children: a(u, {
                                                children: a(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                  },
                                                  children: `Increase Curation Monthly Active Users `,
                                                }),
                                              }),
                                              className: `framer-1f3ka0f`,
                                              "data-framer-name": `Paragraph`,
                                              fonts: [`GF;Geist-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    l(`div`, {
                                      className: `framer-yr01r7`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-igaej6`,
                                          "data-border": !0,
                                          "data-framer-name": `Card/ Testimonial Card 2`,
                                          children: l(`div`, {
                                            className: `framer-10i6d0g`,
                                            "data-framer-name": `Content`,
                                            children: [
                                              a(b, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 600,
                                                  intrinsicWidth: 600,
                                                  loading: M(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      560 +
                                                      40 +
                                                      0 +
                                                      0 +
                                                      2472 +
                                                      0 +
                                                      458 +
                                                      40 +
                                                      24 +
                                                      0 +
                                                      30
                                                  ),
                                                  pixelHeight: 2468,
                                                  pixelWidth: 2468,
                                                  sizes: `70px`,
                                                  src: `https://framerusercontent.com/images/ncLu3vt6JWkwoSYBPDDYAqGVo.png?scale-down-to=1024&width=2468&height=2468`,
                                                  srcSet: `https://framerusercontent.com/images/ncLu3vt6JWkwoSYBPDDYAqGVo.png?scale-down-to=512&width=2468&height=2468 512w,https://framerusercontent.com/images/ncLu3vt6JWkwoSYBPDDYAqGVo.png?scale-down-to=1024&width=2468&height=2468 1024w,https://framerusercontent.com/images/ncLu3vt6JWkwoSYBPDDYAqGVo.png?scale-down-to=2048&width=2468&height=2468 2048w,https://framerusercontent.com/images/ncLu3vt6JWkwoSYBPDDYAqGVo.png?width=2468&height=2468 2468w`,
                                                },
                                                className: `framer-1pmj879`,
                                                "data-framer-name": `Picture`,
                                              }),
                                              a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: l(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                                      "--framer-letter-spacing": `-0.2px`,
                                                      "--framer-line-height": `26px`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                    },
                                                    children: [
                                                      l(`span`, {
                                                        style: {
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: [
                                                          a(`strong`, {
                                                            children: `Simplify the platform`,
                                                          }),
                                                          ` `,
                                                          a(`strong`, {
                                                            children: `by`,
                                                          }),
                                                        ],
                                                      }),
                                                      ` reducing multiple curation tools; deprecate outdated features like Priorities and Bookmarks which will make platform easy to maintain`,
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-1m1sdzs`,
                                                "data-framer-name": `Body Text`,
                                                fonts: [
                                                  `GF;DM Sans-regular`,
                                                  `GF;DM Sans-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-1nz64f5`,
                                          "data-border": !0,
                                          "data-framer-name": `Card/ Testimonial Card 2`,
                                          children: l(`div`, {
                                            className: `framer-14s5z1w`,
                                            "data-framer-name": `Content`,
                                            children: [
                                              a(b, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 600,
                                                  intrinsicWidth: 600,
                                                  loading: M(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      560 +
                                                      40 +
                                                      0 +
                                                      0 +
                                                      2472 +
                                                      0 +
                                                      458 +
                                                      40 +
                                                      24 +
                                                      95
                                                  ),
                                                  pixelHeight: 1924,
                                                  pixelWidth: 1924,
                                                  sizes: `70px`,
                                                  src: `https://framerusercontent.com/images/QOhR3qbumNr4QXb7DKsHsXFyC5k.png?scale-down-to=1024&width=1924&height=1924`,
                                                  srcSet: `https://framerusercontent.com/images/QOhR3qbumNr4QXb7DKsHsXFyC5k.png?scale-down-to=512&width=1924&height=1924 512w,https://framerusercontent.com/images/QOhR3qbumNr4QXb7DKsHsXFyC5k.png?scale-down-to=1024&width=1924&height=1924 1024w,https://framerusercontent.com/images/QOhR3qbumNr4QXb7DKsHsXFyC5k.png?width=1924&height=1924 1924w`,
                                                },
                                                className: `framer-iv6utp`,
                                                "data-framer-name": `Picture`,
                                              }),
                                              a(C, {
                                                __fromCanvasComponent: !0,
                                                children: l(u, {
                                                  children: [
                                                    a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `26px`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: a(`strong`, {
                                                        children: `Reduce drop-offs and improve completion rates `,
                                                      }),
                                                    }),
                                                    a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                                        "--framer-letter-spacing": `-0.2px`,
                                                        "--framer-line-height": `26px`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                      },
                                                      children: `By delivering an intuitive UX with a low learning curve, clear guidance, and well-defined learner priorities.`,
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-2mr99x`,
                                                "data-framer-name": `Body Text`,
                                                fonts: [
                                                  `GF;DM Sans-regular`,
                                                  `GF;DM Sans-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    l(`div`, {
                                      className: `framer-13aa2ws`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-1piljhs`,
                                          "data-border": !0,
                                          "data-framer-name": `Card/ Testimonial Card 2`,
                                          children: l(`div`, {
                                            className: `framer-al0zpn`,
                                            "data-framer-name": `Content`,
                                            children: [
                                              a(b, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 600,
                                                  intrinsicWidth: 600,
                                                  loading: M(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      560 +
                                                      40 +
                                                      0 +
                                                      0 +
                                                      2472 +
                                                      0 +
                                                      824 +
                                                      24 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 3584,
                                                  pixelWidth: 3584,
                                                  sizes: `70px`,
                                                  src: `https://framerusercontent.com/images/D0vZEbcEFt6g6dFCqn43bnAhgM.png?scale-down-to=1024&width=3584&height=3584`,
                                                  srcSet: `https://framerusercontent.com/images/D0vZEbcEFt6g6dFCqn43bnAhgM.png?scale-down-to=512&width=3584&height=3584 512w,https://framerusercontent.com/images/D0vZEbcEFt6g6dFCqn43bnAhgM.png?scale-down-to=1024&width=3584&height=3584 1024w,https://framerusercontent.com/images/D0vZEbcEFt6g6dFCqn43bnAhgM.png?scale-down-to=2048&width=3584&height=3584 2048w,https://framerusercontent.com/images/D0vZEbcEFt6g6dFCqn43bnAhgM.png?width=3584&height=3584 3584w`,
                                                },
                                                className: `framer-1r7eal2`,
                                                "data-framer-name": `Picture`,
                                              }),
                                              a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: l(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                                      "--framer-letter-spacing": `-0.2px`,
                                                      "--framer-line-height": `26px`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                    },
                                                    children: [
                                                      a(`span`, {
                                                        style: {
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: a(`strong`, {
                                                          children: `Boost adoption `,
                                                        }),
                                                      }),
                                                      a(`strong`, {
                                                        children: `of content curation features by simplifying the experience making it easier to discover, understand guided learning.`,
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-1u1mkyz`,
                                                "data-framer-name": `Body Text`,
                                                fonts: [
                                                  `GF;DM Sans-regular`,
                                                  `GF;DM Sans-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-z9s8dj`,
                                          "data-border": !0,
                                          "data-framer-name": `Card/ Testimonial Card 2`,
                                          children: l(`div`, {
                                            className: `framer-1rk43v`,
                                            "data-framer-name": `Content`,
                                            children: [
                                              a(b, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 600,
                                                  intrinsicWidth: 600,
                                                  loading: M(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      560 +
                                                      40 +
                                                      0 +
                                                      0 +
                                                      2472 +
                                                      0 +
                                                      824 +
                                                      24 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 1216,
                                                  pixelWidth: 1216,
                                                  sizes: `70px`,
                                                  src: `https://framerusercontent.com/images/wg6yV0L2zRs3NDvR1E2xVqIO3Y.png?scale-down-to=1024&width=1216&height=1216`,
                                                  srcSet: `https://framerusercontent.com/images/wg6yV0L2zRs3NDvR1E2xVqIO3Y.png?scale-down-to=512&width=1216&height=1216 512w,https://framerusercontent.com/images/wg6yV0L2zRs3NDvR1E2xVqIO3Y.png?scale-down-to=1024&width=1216&height=1216 1024w,https://framerusercontent.com/images/wg6yV0L2zRs3NDvR1E2xVqIO3Y.png?width=1216&height=1216 1216w`,
                                                },
                                                className: `framer-trfscb`,
                                                "data-framer-name": `Picture`,
                                              }),
                                              a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: l(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                                      "--framer-letter-spacing": `-0.2px`,
                                                      "--framer-line-height": `26px`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                    },
                                                    children: [
                                                      a(`span`, {
                                                        style: {
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: a(`strong`, {
                                                          children: `Support B2B Leaders`,
                                                        }),
                                                      }),
                                                      ` create learning goals. Efficiently create, assign, prioritize, and monitor team learning with streamlined workflows.`,
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-fjopo6`,
                                                "data-framer-name": `Body Text`,
                                                fonts: [
                                                  `GF;DM Sans-regular`,
                                                  `GF;DM Sans-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-64wl6b`,
                                          "data-border": !0,
                                          "data-framer-name": `Card/ Testimonial Card 2`,
                                          children: l(`div`, {
                                            className: `framer-1oqyqfd`,
                                            "data-framer-name": `Content`,
                                            children: [
                                              a(b, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 600,
                                                  intrinsicWidth: 600,
                                                  loading: M(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      560 +
                                                      40 +
                                                      0 +
                                                      0 +
                                                      2472 +
                                                      0 +
                                                      824 +
                                                      24 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 1996,
                                                  pixelWidth: 1996,
                                                  sizes: `70px`,
                                                  src: `https://framerusercontent.com/images/rThwOxRAF3jiDeNdzu3Kz6ypWQI.png?scale-down-to=1024&width=1996&height=1996`,
                                                  srcSet: `https://framerusercontent.com/images/rThwOxRAF3jiDeNdzu3Kz6ypWQI.png?scale-down-to=512&width=1996&height=1996 512w,https://framerusercontent.com/images/rThwOxRAF3jiDeNdzu3Kz6ypWQI.png?scale-down-to=1024&width=1996&height=1996 1024w,https://framerusercontent.com/images/rThwOxRAF3jiDeNdzu3Kz6ypWQI.png?width=1996&height=1996 1996w`,
                                                },
                                                className: `framer-xz2ilr`,
                                                "data-framer-name": `Picture`,
                                              }),
                                              a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: l(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                                      "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                                      "--framer-letter-spacing": `-0.2px`,
                                                      "--framer-line-height": `26px`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                    },
                                                    children: [
                                                      a(`span`, {
                                                        style: {
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: a(`strong`, {
                                                          children: `Increase visibility and impact `,
                                                        }),
                                                      }),
                                                      ` of expert-created Paths by improving discoverability and driving higher learner engagement.`,
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-1vxmykw`,
                                                "data-framer-name": `Body Text`,
                                                fonts: [
                                                  `GF;DM Sans-regular`,
                                                  `GF;DM Sans-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              P() &&
                                a(`div`, {
                                  className: `framer-8navgo hidden-1sscvvh hidden-4ry9c1`,
                                  "data-framer-name": `Persona`,
                                  children: l(`div`, {
                                    className: `framer-cadkkf`,
                                    "data-framer-name": `Main Text`,
                                    children: [
                                      a(C, {
                                        __fromCanvasComponent: !0,
                                        children: a(u, {
                                          children: a(`h4`, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `34px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-1px`,
                                              "--framer-line-height": `36px`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                            },
                                            children: `Persona`,
                                          }),
                                        }),
                                        className: `framer-12anv1g`,
                                        "data-framer-name": `Header`,
                                        fonts: [`GF;Geist-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      l(`div`, {
                                        className: `framer-onbfd5`,
                                        children: [
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                              children: a(`p`, {
                                                style: {
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `rgba(255, 255, 255, 0.76)`,
                                                },
                                                children: `I created three primary personas for Curation to identify and segment user needs. This helped ensure the experience supports different roles, goals, and behaviour — from content curator to learners.`,
                                              }),
                                            }),
                                            className: `framer-d2xfxz`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(g, {
                                            height: 29,
                                            y:
                                              (p?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              560 +
                                              40 +
                                              0 +
                                              0 +
                                              3708 +
                                              0 +
                                              0 +
                                              0 +
                                              60 +
                                              0 +
                                              136,
                                            children: a(_, {
                                              className: `framer-1mt8z80-container`,
                                              nodeId: `oOa6bvsga`,
                                              scopeId: `YUN0ipZRa`,
                                              children: a(We, {
                                                height: `100%`,
                                                id: `oOa6bvsga`,
                                                layoutId: `oOa6bvsga`,
                                                RGrvSt1mz: `https://www.figma.com/proto/UJYiu6FMSoQ7UoRzO7Voae/Portfolio---LP?page-id=152%3A20&node-id=1519-357&viewport=-2987%2C2133%2C0.29&t=ak1rx46XVFkviQOr-1&scaling=contain&content-scaling=fixed`,
                                                width: `100%`,
                                                YV6gG4UC4: `Detailed Persona`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      a(g, {
                                        height: 413,
                                        y:
                                          (p?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          560 +
                                          40 +
                                          0 +
                                          0 +
                                          3708 +
                                          0 +
                                          0 +
                                          0 +
                                          273,
                                        children: a(_, {
                                          className: `framer-dz2tas-container`,
                                          nodeId: `AkIjMSw75`,
                                          scopeId: `YUN0ipZRa`,
                                          children: a(Hn, {
                                            height: `100%`,
                                            id: `AkIjMSw75`,
                                            layoutId: `AkIjMSw75`,
                                            variant: `zprpTTPcw`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              P() &&
                                l(`div`, {
                                  className: `framer-1bb0o50 hidden-1sscvvh hidden-4ry9c1`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-185vsya`,
                                      children: [
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: a(`h4`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-font-size": `34px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-1px`,
                                                "--framer-line-height": `36px`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                              },
                                              children: `When I talked to users `,
                                            }),
                                          }),
                                          className: `framer-zxn4la`,
                                          "data-framer-name": `Header`,
                                          fonts: [`GF;Geist-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(`div`, {
                                          className: `framer-1yi67n2`,
                                          "data-framer-name": `Sub Text`,
                                          children: [
                                            l(`div`, {
                                              className: `framer-cy65mb`,
                                              "data-framer-name": `Heading/Tag`,
                                              children: [
                                                l(`div`, {
                                                  className: `framer-14a4dvd`,
                                                  children: [
                                                    a(C, {
                                                      __fromCanvasComponent: !0,
                                                      children: a(u, {
                                                        children: l(`p`, {
                                                          style: {
                                                            "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                            "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                            "--framer-line-height": `1.5em`,
                                                            "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                          },
                                                          children: [
                                                            `We collected user behavior and feedback through multiple methods over time to gain a holistic understanding of user needs and pain points,`,
                                                            a(`span`, {
                                                              style: {
                                                                "--framer-letter-spacing": `-0.02em`,
                                                              },
                                                              children: ` we invested time in research to deeply understand and identify key issues:`,
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      className: `framer-1vivnb9`,
                                                      "data-framer-name": `Paragraph`,
                                                      fonts: [
                                                        `GF;Geist-regular`,
                                                      ],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    a(C, {
                                                      __fromCanvasComponent: !0,
                                                      children: l(u, {
                                                        children: [
                                                          a(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `1.6em`,
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                            },
                                                            children: `Quantitative Research`,
                                                          }),
                                                          a(`ul`, {
                                                            style: {
                                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                              "--framer-font-size": `14px`,
                                                              "--framer-font-weight": `500`,
                                                              "--framer-line-height": `1.6em`,
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                            },
                                                            children: a(`li`, {
                                                              children: l(`p`, {
                                                                style: {
                                                                  "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                                },
                                                                children: [
                                                                  a(`span`, {
                                                                    style: {
                                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                                    },
                                                                    children: `Analytics tools`,
                                                                  }),
                                                                  ` like Snowflake and Adobe Analytics`,
                                                                ],
                                                              }),
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      className: `framer-li78sg`,
                                                      "data-framer-name": `Paragraph`,
                                                      fonts: [`GF;Geist-500`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    a(C, {
                                                      __fromCanvasComponent: !0,
                                                      children: l(u, {
                                                        children: [
                                                          a(`p`, {
                                                            style: {
                                                              "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                              "--framer-line-height": `1.6em`,
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                            },
                                                            children: `Quantitative Research`,
                                                          }),
                                                          l(`ul`, {
                                                            style: {
                                                              "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                              "--framer-font-size": `14px`,
                                                              "--framer-line-height": `1.6em`,
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                            },
                                                            children: [
                                                              a(`li`, {
                                                                style: {
                                                                  "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                                },
                                                                children: l(
                                                                  `p`,
                                                                  {
                                                                    style: {
                                                                      "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                                    },
                                                                    children: [
                                                                      a(
                                                                        `span`,
                                                                        {
                                                                          style:
                                                                            {
                                                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                                            },
                                                                          children: `Continuous feedback`,
                                                                        }
                                                                      ),
                                                                      ` from Product board and Aha Board!`,
                                                                    ],
                                                                  }
                                                                ),
                                                              }),
                                                              a(`li`, {
                                                                children: a(
                                                                  `p`,
                                                                  {
                                                                    children: `1:1 interviews with learners, leaders, and especially Customer Success Managers`,
                                                                  }
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      className: `framer-116avns`,
                                                      "data-framer-name": `Paragraph`,
                                                      fonts: [
                                                        `GF;Geist-regular`,
                                                      ],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                a(`div`, {
                                                  className: `framer-1bxw3id`,
                                                }),
                                              ],
                                            }),
                                            a(`div`, {
                                              className: `framer-1wcrunp`,
                                              children: a(g, {
                                                height: 284,
                                                width: `275px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  560 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  4530 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  68 +
                                                  0 +
                                                  10,
                                                children: a(_, {
                                                  className: `framer-mmhm51-container`,
                                                  nodeId: `y7z6CjuHw`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `YUN0ipZRa`,
                                                  style: { rotate: 5 },
                                                  children: a(rt, {
                                                    height: `100%`,
                                                    Hldsy7RD3: `Insights`,
                                                    id: `y7z6CjuHw`,
                                                    layoutId: `y7z6CjuHw`,
                                                    P3t7CVzCD: `Throughout the design process, we did multiple rounds of interview with stakeholders, leaders & learners. At every stage—from wireframes to final designs—we tested and iterated based on real user feedback.`,
                                                    style: { width: `100%` },
                                                    variant: `g5sScXvmb`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    l(`div`, {
                                      className: `framer-cprqc`,
                                      "data-framer-name": `Jobs to be done`,
                                      children: [
                                        l(`div`, {
                                          className: `framer-1lm0z1w`,
                                          children: [
                                            a(C, {
                                              __fromCanvasComponent: !0,
                                              children: a(u, {
                                                children: a(`h4`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-font-size": `34px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-letter-spacing": `-1px`,
                                                    "--framer-line-height": `36px`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                  },
                                                  children: `Jobs To Be Done`,
                                                }),
                                              }),
                                              className: `framer-1hmv3x8`,
                                              "data-framer-name": `Header`,
                                              fonts: [`GF;Geist-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            a(`div`, {
                                              className: `framer-1t5zucn`,
                                              children: a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: a(`h4`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-letter-spacing": `-0.5px`,
                                                      "--framer-line-height": `26px`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.6)`,
                                                    },
                                                    children: `This helped us uncover real user problems, not just business use cases or feature hypotheses, and enabled stronger collaboration across product, design leadership, and engineering.`,
                                                  }),
                                                }),
                                                className: `framer-116gajh`,
                                                "data-framer-name": `Header`,
                                                fonts: [`GF;Geist-regular`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            a(`div`, {
                                              className: `framer-gjf8gn`,
                                              children: a(g, {
                                                height: 29,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  560 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  4530 +
                                                  0 +
                                                  844 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  102 +
                                                  0,
                                                children: a(_, {
                                                  className: `framer-17xk1f0-container`,
                                                  nodeId: `srSArqHPT`,
                                                  scopeId: `YUN0ipZRa`,
                                                  children: a(We, {
                                                    height: `100%`,
                                                    id: `srSArqHPT`,
                                                    layoutId: `srSArqHPT`,
                                                    RGrvSt1mz: `https://www.figma.com/proto/UJYiu6FMSoQ7UoRzO7Voae/Portfolio---LP?page-id=152%3A20&node-id=1513-1085&viewport=-2987%2C2133%2C0.29&t=ak1rx46XVFkviQOr-1&scaling=contain&content-scaling=fixed`,
                                                    width: `100%`,
                                                    YV6gG4UC4: `View All Jobs`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        a(x, {
                                          href: `https://www.figma.com/design/UJYiu6FMSoQ7UoRzO7Voae/Portfolio---LP?node-id=1513-1085&t=Fu1BCxQhZHB0eS7W-4`,
                                          motionChild: !0,
                                          nodeId: `YcQsK6Bhj`,
                                          openInNewTab: !0,
                                          scopeId: `YUN0ipZRa`,
                                          children: a(b, {
                                            as: `a`,
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 1013.5,
                                              intrinsicWidth: 2060,
                                              loading: M(
                                                (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  560 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  4530 +
                                                  0 +
                                                  844 +
                                                  0 +
                                                  155
                                              ),
                                              pixelHeight: 1868,
                                              pixelWidth: 4120,
                                              sizes: `calc(min(min(min(${
                                                p?.width || `100vw`
                                              }, 2000px), 1750px) - 160px, 1200px) - 80px)`,
                                              src: `https://framerusercontent.com/images/mEiPuxpQOA7sHLXJXEwCimXAsyQ.png?scale-down-to=4096&width=4120&height=1868`,
                                              srcSet: `https://framerusercontent.com/images/mEiPuxpQOA7sHLXJXEwCimXAsyQ.png?scale-down-to=512&width=4120&height=1868 512w,https://framerusercontent.com/images/mEiPuxpQOA7sHLXJXEwCimXAsyQ.png?scale-down-to=1024&width=4120&height=1868 1024w,https://framerusercontent.com/images/mEiPuxpQOA7sHLXJXEwCimXAsyQ.png?scale-down-to=2048&width=4120&height=1868 2048w,https://framerusercontent.com/images/mEiPuxpQOA7sHLXJXEwCimXAsyQ.png?scale-down-to=4096&width=4120&height=1868 4096w,https://framerusercontent.com/images/mEiPuxpQOA7sHLXJXEwCimXAsyQ.png?width=4120&height=1868 4120w`,
                                            },
                                            className: `framer-1q9d0c9 framer-94nhgv`,
                                            "data-framer-cursor": `1b4aww4`,
                                            "data-framer-name": `Image`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    l(`div`, {
                                      className: `framer-1k2bqrv`,
                                      "data-framer-name": `Heading/Tag`,
                                      children: [
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: a(`h4`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-0.5px`,
                                                "--framer-line-height": `38px`,
                                                "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                              },
                                              children: `Challenges `,
                                            }),
                                          }),
                                          className: `framer-4ypyu`,
                                          "data-framer-name": `Header`,
                                          fonts: [`GF;Geist-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(`div`, {
                                          className: `framer-1a3kj7r`,
                                          children: [
                                            l(`div`, {
                                              className: `framer-11fo6dt`,
                                              "data-border": !0,
                                              children: [
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7Q292ZXJlZCBCeSBZb3VyIEdyYWNlLXJlZ3VsYXI=`,
                                                        "--framer-font-family": `"Covered By Your Grace", sans-serif`,
                                                        "--framer-font-size": `44px`,
                                                        "--framer-letter-spacing": `-0.51px`,
                                                        "--framer-line-height": `27.000000000000004px`,
                                                        "--framer-text-color": `rgb(255, 87, 36)`,
                                                      },
                                                      children: `01`,
                                                    }),
                                                  }),
                                                  className: `framer-18kpfhc`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [
                                                    `GF;Covered By Your Grace-regular`,
                                                  ],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: l(u, {
                                                    children: [
                                                      a(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                          "--framer-font-size": `19px`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `-0.4px`,
                                                          "--framer-line-height": `21px`,
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: `Making learning goals `,
                                                      }),
                                                      a(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                          "--framer-font-size": `19px`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `-0.4px`,
                                                          "--framer-line-height": `21px`,
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: `clear to employees`,
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-15b0knz`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.5)`,
                                                      },
                                                      children: `Leaders communicate the urgency or priority of a learning goal using third-party tools or limited descriptions available on the platform.`,
                                                    }),
                                                  }),
                                                  className: `framer-1xb8msb`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            l(`div`, {
                                              className: `framer-1ak8u9n`,
                                              "data-border": !0,
                                              children: [
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7Q292ZXJlZCBCeSBZb3VyIEdyYWNlLXJlZ3VsYXI=`,
                                                        "--framer-font-family": `"Covered By Your Grace", sans-serif`,
                                                        "--framer-font-size": `44px`,
                                                        "--framer-letter-spacing": `-0.51px`,
                                                        "--framer-line-height": `27.000000000000004px`,
                                                        "--framer-text-color": `rgb(255, 87, 36)`,
                                                      },
                                                      children: `02`,
                                                    }),
                                                  }),
                                                  className: `framer-1h3gagd`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [
                                                    `GF;Covered By Your Grace-regular`,
                                                  ],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-font-size": `19px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: `Adding content is challenging `,
                                                    }),
                                                  }),
                                                  className: `framer-1al78rv`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                                        "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.5)`,
                                                      },
                                                      children: `Adding content is unintuitive, as users are redirected to global search or separate content-type pages, leading to a fragmented and inconsistent experience.`,
                                                    }),
                                                  }),
                                                  className: `framer-dy48v9`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;DM Sans-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            l(`div`, {
                                              className: `framer-1t59yk6`,
                                              "data-border": !0,
                                              children: [
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7Q292ZXJlZCBCeSBZb3VyIEdyYWNlLXJlZ3VsYXI=`,
                                                        "--framer-font-family": `"Covered By Your Grace", sans-serif`,
                                                        "--framer-font-size": `44px`,
                                                        "--framer-letter-spacing": `-0.51px`,
                                                        "--framer-line-height": `27.000000000000004px`,
                                                        "--framer-text-color": `rgb(255, 87, 36)`,
                                                      },
                                                      children: `03`,
                                                    }),
                                                  }),
                                                  className: `framer-1nv64zr`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [
                                                    `GF;Covered By Your Grace-regular`,
                                                  ],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-font-size": `19px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: `Manual analytics report shared by CSM`,
                                                    }),
                                                  }),
                                                  className: `framer-2rt2pb`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.5)`,
                                                      },
                                                      children: `Leaders depend on manual reports from Customer Success Managers to track learner progress and engagement. This delays insights and limits timely decision-making.`,
                                                    }),
                                                  }),
                                                  className: `framer-nyo0kk`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        l(`div`, {
                                          className: `framer-rbl9o0`,
                                          children: [
                                            l(`div`, {
                                              className: `framer-h6u7be`,
                                              "data-border": !0,
                                              children: [
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7Q292ZXJlZCBCeSBZb3VyIEdyYWNlLXJlZ3VsYXI=`,
                                                        "--framer-font-family": `"Covered By Your Grace", sans-serif`,
                                                        "--framer-font-size": `44px`,
                                                        "--framer-letter-spacing": `-0.51px`,
                                                        "--framer-line-height": `27.000000000000004px`,
                                                        "--framer-text-color": `rgb(255, 87, 36)`,
                                                      },
                                                      children: `04`,
                                                    }),
                                                  }),
                                                  className: `framer-1wmwnjk`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [
                                                    `GF;Covered By Your Grace-regular`,
                                                  ],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: l(u, {
                                                    children: [
                                                      a(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                          "--framer-font-size": `19px`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `-0.4px`,
                                                          "--framer-line-height": `21px`,
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: `Lack of Personalisation `,
                                                      }),
                                                      a(`p`, {
                                                        style: {
                                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                          "--framer-font-size": `19px`,
                                                          "--framer-font-weight": `500`,
                                                          "--framer-letter-spacing": `-0.4px`,
                                                          "--framer-line-height": `21px`,
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: `and Flexibility`,
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-187c7ye`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.5)`,
                                                      },
                                                      children: `Users struggle to customize learning goals- saving or adding specific modules or clips, modifying existing paths, & marking content optional.`,
                                                    }),
                                                  }),
                                                  className: `framer-ojeox5`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            l(`div`, {
                                              className: `framer-1loswyi`,
                                              "data-border": !0,
                                              children: [
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7Q292ZXJlZCBCeSBZb3VyIEdyYWNlLXJlZ3VsYXI=`,
                                                        "--framer-font-family": `"Covered By Your Grace", sans-serif`,
                                                        "--framer-font-size": `44px`,
                                                        "--framer-letter-spacing": `-0.51px`,
                                                        "--framer-line-height": `27.000000000000004px`,
                                                        "--framer-text-color": `rgb(255, 87, 36)`,
                                                      },
                                                      children: `05`,
                                                    }),
                                                  }),
                                                  className: `framer-4uvjyq`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [
                                                    `GF;Covered By Your Grace-regular`,
                                                  ],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-font-size": `19px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: `Lack of Motivation to Stay Engaged`,
                                                    }),
                                                  }),
                                                  className: `framer-jpumdb`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.5)`,
                                                      },
                                                      children: `Learners often lose interest midway as it's hard to stay motivated- there are no reminders, nudges, or gamification to keep users engaged.`,
                                                    }),
                                                  }),
                                                  className: `framer-tit7jh`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            l(`div`, {
                                              className: `framer-1aa70zl`,
                                              "data-border": !0,
                                              children: [
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7Q292ZXJlZCBCeSBZb3VyIEdyYWNlLXJlZ3VsYXI=`,
                                                        "--framer-font-family": `"Covered By Your Grace", sans-serif`,
                                                        "--framer-font-size": `44px`,
                                                        "--framer-letter-spacing": `-0.51px`,
                                                        "--framer-line-height": `27.000000000000004px`,
                                                        "--framer-text-color": `rgb(255, 87, 36)`,
                                                      },
                                                      children: `06`,
                                                    }),
                                                  }),
                                                  className: `framer-1gy5kkb`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [
                                                    `GF;Covered By Your Grace-regular`,
                                                  ],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-font-size": `19px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: `Too Much Content, Too Little Clarity`,
                                                    }),
                                                  }),
                                                  className: `framer-194pbx0`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-letter-spacing": `-0.4px`,
                                                        "--framer-line-height": `21px`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.5)`,
                                                      },
                                                      children: `Curated learning are often lengthy and lack relevance to individual needs. Learners can't skip or remove unnecessary sections.`,
                                                    }),
                                                  }),
                                                  className: `framer-1mtukhk`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`GF;Geist-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              P() &&
                                l(`div`, {
                                  className: `framer-1n8p1wt hidden-1sscvvh hidden-4ry9c1`,
                                  "data-framer-name": `Experience `,
                                  children: [
                                    l(`div`, {
                                      className: `framer-kbwb35`,
                                      children: [
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: a(`h4`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-font-size": `34px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-1px`,
                                                "--framer-line-height": `36px`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                              },
                                              children: `Problem with Current Experience`,
                                            }),
                                          }),
                                          className: `framer-3bhalo`,
                                          "data-framer-name": `Header`,
                                          fonts: [`GF;Geist-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(`div`, {
                                          className: `framer-10qsndi`,
                                          children: a(C, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                              children: a(`p`, {
                                                style: {
                                                  "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                  "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                },
                                                children: `Goal with new experience is to deliver high-quality, structured content while empowering both learners and organizations to create personalized learning journeys aligned with individual goals, skill levels, and learning pace.`,
                                              }),
                                            }),
                                            className: `framer-1ciacit`,
                                            "data-framer-name": `Paragraph`,
                                            fonts: [`GF;Geist-regular`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    a(`div`, {
                                      className: `framer-e7orfs`,
                                      children: a(g, {
                                        height: 430,
                                        width: `max(min(min(min(${
                                          p?.width || `100vw`
                                        }, 2000px), 1750px) - 160px, 1200px) - 80px, 1px)`,
                                        y:
                                          (p?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          560 +
                                          40 +
                                          0 +
                                          0 +
                                          6721 +
                                          0 +
                                          196 +
                                          20,
                                        children: a(_, {
                                          className: `framer-1cdbueo-container`,
                                          nodeId: `wsgINVsLW`,
                                          scopeId: `YUN0ipZRa`,
                                          children: a(tn, {
                                            efL5EylsZ: $(
                                              {
                                                pixelHeight: 1405,
                                                pixelWidth: 1333,
                                                src: `https://framerusercontent.com/images/1VpfeB4iZZF4nXr7pbS40rkocxk.png?width=1333&height=1405`,
                                                srcSet: `https://framerusercontent.com/images/1VpfeB4iZZF4nXr7pbS40rkocxk.png?scale-down-to=1024&width=1333&height=1405 971w,https://framerusercontent.com/images/1VpfeB4iZZF4nXr7pbS40rkocxk.png?width=1333&height=1405 1333w`,
                                              },
                                              `Tab Image`
                                            ),
                                            f5eY3cgCD: `Solving the Same Job, Repeatedly`,
                                            g4hpGL7GZ: $(
                                              {
                                                pixelHeight: 353,
                                                pixelWidth: 353,
                                                src: `https://framerusercontent.com/images/pVrdXdf1tqofMrq1eCtw6bnhWM.png?width=353&height=353`,
                                              },
                                              `Tab Link Icon`
                                            ),
                                            GOkJ7PyjO: `Fragmented UX`,
                                            HaFQRicXl: `The current experience suffers from inconsistent flows, unclear entry points, duplicated functionality across modules, and confusing terminology — all of which increase cognitive load and hinder user engagement.`,
                                            height: `100%`,
                                            hlriAO8HM: `Difficult Content Discovery & Addition`,
                                            HRjOXWPgm: `User cannot tailor the experience`,
                                            hZRcI7QMJ: `Users are redirected out of context to find and add content e.g., to add Course, Path- global search, to add Skill IQ or external link there are modals  and to add a lab user get redirected to content landing page.`,
                                            id: `wsgINVsLW`,
                                            layoutId: `wsgINVsLW`,
                                            LQ0TPE0ax: ` Feature Overlap`,
                                            mTCDp4LCs: $(
                                              {
                                                pixelHeight: 54,
                                                pixelWidth: 54,
                                                src: `https://framerusercontent.com/images/G3JrGfhit6kcF3ps1CHuC5jOjM.png?width=54&height=54`,
                                              },
                                              `Tab Link Icon`
                                            ),
                                            NBxqpZQMB: `A Disconnected and Confusing Experience`,
                                            NXnQ8rU_i: $(
                                              {
                                                pixelHeight: 976,
                                                pixelWidth: 841,
                                                src: `https://framerusercontent.com/images/MIvdQyE12kQHylVURqUkIAPbiKM.png?width=841&height=976`,
                                                srcSet: `https://framerusercontent.com/images/MIvdQyE12kQHylVURqUkIAPbiKM.png?width=841&height=976 841w`,
                                              },
                                              `Tab Image`
                                            ),
                                            nZPVgCoQa: `Users can’t tailor the experience to their level, needs, or time. They lack the ability to set clear expectations like priority, due dates or optional. Many of these tools were never iterated on, and little to no user research was done to improve the experience.`,
                                            pXLl77XPo: $(
                                              {
                                                pixelHeight: 51,
                                                pixelWidth: 44,
                                                src: `https://framerusercontent.com/images/C3DDKS40mjVfWDwvyN1O3Vzf4oI.png?width=44&height=51`,
                                              },
                                              `Tab Link Icon`
                                            ),
                                            QEVGJtFdG: `No Personalization`,
                                            roVUInC6L: $(
                                              {
                                                pixelHeight: 500,
                                                pixelWidth: 500,
                                                src: `https://framerusercontent.com/images/OEAyJwXQZHnznKhcW9KLhN5xkQo.png?width=500&height=500`,
                                              },
                                              `Tab Link Icon`
                                            ),
                                            style: { width: `100%` },
                                            ueSr9Pjev: $(
                                              {
                                                pixelHeight: 838,
                                                pixelWidth: 658,
                                                src: `https://framerusercontent.com/images/4Q9aLIdA6osQrhZzcZ9YyElVDk.png?width=658&height=838`,
                                                srcSet: `https://framerusercontent.com/images/4Q9aLIdA6osQrhZzcZ9YyElVDk.png?width=658&height=838 658w`,
                                              },
                                              `Tab Image`
                                            ),
                                            variant: `s0hpJwkAE`,
                                            VJAOmtLMy: ` Content Discovery`,
                                            VW0z7nrEX: `Existing features show significant overlap, with each offering partial solutions—such as due dates or mandatory content. This creates redundancy and user confusion, highlighting the need for unified & streamlined experience.`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              P() &&
                                l(`div`, {
                                  className: `framer-ktwyw hidden-1sscvvh hidden-4ry9c1`,
                                  "data-framer-name": `Text Details 3`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-vy4c3b`,
                                      "data-framer-name": `Content`,
                                      children: [
                                        l(`div`, {
                                          className: `framer-9phf50`,
                                          children: [
                                            l(`div`, {
                                              className: `framer-13gkl6w`,
                                              children: [
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`h4`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-font-size": `34px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-1px`,
                                                        "--framer-line-height": `36px`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                      },
                                                      children: `Design Hypothesis`,
                                                    }),
                                                  }),
                                                  className: `framer-8b5fzn`,
                                                  "data-framer-name": `Header`,
                                                  fonts: [`GF;Geist-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-font-size": `20px`,
                                                        "--framer-line-height": `1.6em`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                      },
                                                      children: `We believe that a unified Curations experience will help users align with company goals, follow structured learning paths, and share progress seamlessly—driving individual growth and team alignment`,
                                                    }),
                                                  }),
                                                  className: `framer-u41awn`,
                                                  "data-framer-name": `Paragraph`,
                                                  fonts: [`GF;Geist-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            l(`div`, {
                                              className: `framer-n2pali`,
                                              "data-framer-name": `Sub Text`,
                                              children: [
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: a(u, {
                                                    children: a(`h4`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-font-size": `20px`,
                                                        "--framer-font-weight": `500`,
                                                        "--framer-letter-spacing": `-0.5px`,
                                                        "--framer-line-height": `38px`,
                                                        "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                                      },
                                                      children: `Experience Design Goal`,
                                                    }),
                                                  }),
                                                  className: `framer-1xicof3`,
                                                  "data-framer-name": `Header`,
                                                  fonts: [`GF;Geist-500`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                a(C, {
                                                  __fromCanvasComponent: !0,
                                                  children: l(u, {
                                                    children: [
                                                      a(`p`, {
                                                        style: {
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                        },
                                                        children: `The goal is to deliver an efficient and seamless flow across the following experiences:`,
                                                      }),
                                                      l(`ol`, {
                                                        className: `framer-styles-preset-1f3m2eo`,
                                                        "data-styles-preset": `T6GLK7GNw`,
                                                        style: {
                                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                                        },
                                                        children: [
                                                          a(`li`, {
                                                            children: l(`p`, {
                                                              style: {
                                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                              },
                                                              children: [
                                                                l(`span`, {
                                                                  style: {
                                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                                  },
                                                                  children: [
                                                                    `Create & Customize Learning Paths`,
                                                                    a(
                                                                      `strong`,
                                                                      {
                                                                        children:
                                                                          a(
                                                                            `br`,
                                                                            {}
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                                `Enable users to build personalized learning journeys that align with individual goals or organizational priorities.`,
                                                              ],
                                                            }),
                                                          }),
                                                          a(`li`, {
                                                            children: l(`p`, {
                                                              style: {
                                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                              },
                                                              children: [
                                                                l(`span`, {
                                                                  style: {
                                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                                  },
                                                                  children: [
                                                                    `Assign Content Easily`,
                                                                    a(
                                                                      `strong`,
                                                                      {
                                                                        children:
                                                                          a(
                                                                            `br`,
                                                                            {}
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                                `Make it easy for leaders to assign the most relevant paths to individuals or entire teams with minimal effort.`,
                                                              ],
                                                            }),
                                                          }),
                                                          a(`li`, {
                                                            children: l(`p`, {
                                                              style: {
                                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                              },
                                                              children: [
                                                                l(`span`, {
                                                                  style: {
                                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                                  },
                                                                  children: [
                                                                    `Scale Skill Development`,
                                                                    a(
                                                                      `strong`,
                                                                      {
                                                                        children:
                                                                          a(
                                                                            `br`,
                                                                            {}
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                                `Centralize learning recommendations to help users focus on their weak areas and improve with relevant, targeted content.`,
                                                              ],
                                                            }),
                                                          }),
                                                          a(`li`, {
                                                            children: l(`p`, {
                                                              style: {
                                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                              },
                                                              children: [
                                                                l(`span`, {
                                                                  style: {
                                                                    "--framer-text-color": `rgb(255, 255, 255)`,
                                                                  },
                                                                  children: [
                                                                    `Track Progress & Impact`,
                                                                    a(
                                                                      `strong`,
                                                                      {
                                                                        children:
                                                                          a(
                                                                            `br`,
                                                                            {}
                                                                          ),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }),
                                                                `Provide clear insights into progress, identify skill gaps, and guide users with actionable steps to improve.`,
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-1fjmw5m`,
                                                  "data-framer-name": `Paragraph`,
                                                  fonts: [
                                                    `Inter`,
                                                    `Inter-Bold`,
                                                  ],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        l(`div`, {
                                          className: `framer-oznrzu`,
                                          children: [
                                            a(Zn, {
                                              animate: pr,
                                              className: `framer-1vlk2lh`,
                                              "data-framer-appear-id": `1vlk2lh`,
                                              "data-framer-name": `Image 1`,
                                              initial: fr,
                                              optimized: !0,
                                              children: a(b, {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  loading: M(
                                                    (p?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      560 +
                                                      40 +
                                                      0 +
                                                      0 +
                                                      7495 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      1066 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0
                                                  ),
                                                  pixelHeight: 2196,
                                                  pixelWidth: 3852,
                                                  sizes: `664px`,
                                                  src: `https://framerusercontent.com/images/V1W55ldvTLg5DB58VFbK5mOU.png?width=3852&height=2196`,
                                                  srcSet: `https://framerusercontent.com/images/V1W55ldvTLg5DB58VFbK5mOU.png?scale-down-to=512&width=3852&height=2196 512w,https://framerusercontent.com/images/V1W55ldvTLg5DB58VFbK5mOU.png?scale-down-to=1024&width=3852&height=2196 1024w,https://framerusercontent.com/images/V1W55ldvTLg5DB58VFbK5mOU.png?scale-down-to=2048&width=3852&height=2196 2048w,https://framerusercontent.com/images/V1W55ldvTLg5DB58VFbK5mOU.png?width=3852&height=2196 3852w`,
                                                },
                                                className: `framer-1iwcivb`,
                                                "data-framer-name": `Image`,
                                              }),
                                            }),
                                            a(C, {
                                              __fromCanvasComponent: !0,
                                              children: a(u, {
                                                children: l(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                  },
                                                  children: [
                                                    `We used the `,
                                                    a(`span`, {
                                                      style: {
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: `Object-Oriented UX (OOUX)`,
                                                    }),
                                                    ` methodology during the research phase.`,
                                                    a(`br`, {}),
                                                    `It helped us identify`,
                                                    a(`span`, {
                                                      style: {
                                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                                      },
                                                      children: ` key objects, relationships, and user interactions.`,
                                                    }),
                                                    a(`br`, {}),
                                                    `This approach guided a clearer, more scalable structure for the redesigned curation experience. `,
                                                  ],
                                                }),
                                              }),
                                              className: `framer-16ccts8`,
                                              "data-framer-name": `Paragraph`,
                                              fonts: [`GF;Geist-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    l(`div`, {
                                      className: `framer-39d127`,
                                      "data-framer-name": `Sub Text`,
                                      children: [
                                        l(`div`, {
                                          className: `framer-v3ij66`,
                                          children: [
                                            a(C, {
                                              __fromCanvasComponent: !0,
                                              children: a(u, {
                                                children: a(`h4`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-font-size": `34px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-letter-spacing": `-1px`,
                                                    "--framer-line-height": `36px`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                  },
                                                  children: `User Flow`,
                                                }),
                                              }),
                                              className: `framer-4a3kla`,
                                              "data-framer-name": `Header`,
                                              fonts: [`GF;Geist-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            a(C, {
                                              __fromCanvasComponent: !0,
                                              children: l(u, {
                                                children: [
                                                  a(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                    },
                                                    children: `User flows help me map what success looks like for each role, step-by-step:`,
                                                  }),
                                                  a(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                    },
                                                    children: a(`br`, {
                                                      className: `trailing-break`,
                                                    }),
                                                  }),
                                                  a(`ul`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `rgb(255, 255, 255)`,
                                                    },
                                                    children: a(`li`, {
                                                      children: l(`p`, {
                                                        style: {
                                                          "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                        },
                                                        children: [
                                                          a(`span`, {
                                                            style: {
                                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                                            },
                                                            children: `Learners `,
                                                          }),
                                                          `want to`,
                                                          a(`span`, {
                                                            style: {
                                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                                            },
                                                            children: ` consume and complete `,
                                                          }),
                                                          `relevant learning quickly.`,
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                  a(`ul`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `rgb(255, 255, 255)`,
                                                    },
                                                    children: a(`li`, {
                                                      children: l(`p`, {
                                                        children: [
                                                          `Leaders, Content curator `,
                                                          a(`span`, {
                                                            style: {
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                            },
                                                            children: `want to `,
                                                          }),
                                                          `curate, assign, and track `,
                                                          a(`span`, {
                                                            style: {
                                                              "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                            },
                                                            children: `learning that aligns with team goals.`,
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              className: `framer-fadett`,
                                              "data-framer-name": `Paragraph`,
                                              fonts: [`GF;Geist-regular`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        a(g, {
                                          height: 513,
                                          width: `960px`,
                                          y:
                                            (p?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            560 +
                                            40 +
                                            0 +
                                            0 +
                                            7495 +
                                            0 +
                                            1722 +
                                            0 +
                                            576,
                                          children: a(_, {
                                            className: `framer-tjfhfc-container`,
                                            nodeId: `rCZx_6xT7`,
                                            scopeId: `YUN0ipZRa`,
                                            children: a(hn, {
                                              efFNNHhEz: `dtktov`,
                                              height: `100%`,
                                              id: `rCZx_6xT7`,
                                              layoutId: `rCZx_6xT7`,
                                              style: { width: `100%` },
                                              variant: `kXBq4LYWQ`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              P() &&
                                l(`div`, {
                                  className: `framer-xaiaq5 hidden-1sscvvh hidden-4ry9c1`,
                                  "data-framer-name": `Sub Text`,
                                  children: [
                                    a(C, {
                                      __fromCanvasComponent: !0,
                                      children: a(u, {
                                        children: a(`h4`, {
                                          style: {
                                            "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                            "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                            "--framer-font-size": `34px`,
                                            "--framer-font-weight": `500`,
                                            "--framer-letter-spacing": `-1px`,
                                            "--framer-line-height": `36px`,
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                          },
                                          children: `Wireframe`,
                                        }),
                                      }),
                                      className: `framer-4kw51w`,
                                      "data-framer-name": `Header`,
                                      fonts: [`GF;Geist-500`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(C, {
                                      __fromCanvasComponent: !0,
                                      children: a(u, {
                                        children: a(`p`, {
                                          style: {
                                            "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                            "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                            "--framer-line-height": `1.5em`,
                                            "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                          },
                                          children: `A unified curation experience will help users align with company goals, follow structured learning paths, and share progress seamlessly—driving personal and team growth.`,
                                        }),
                                      }),
                                      className: `framer-19q5t1t`,
                                      "data-framer-name": `Paragraph`,
                                      fonts: [`GF;Geist-regular`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    a(g, {
                                      height: 29,
                                      y:
                                        (p?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        560 +
                                        40 +
                                        0 +
                                        0 +
                                        10394 +
                                        0 +
                                        196,
                                      children: a(_, {
                                        className: `framer-129hfi2-container`,
                                        nodeId: `nJLFkGxa5`,
                                        scopeId: `YUN0ipZRa`,
                                        children: a(We, {
                                          height: `100%`,
                                          id: `nJLFkGxa5`,
                                          layoutId: `nJLFkGxa5`,
                                          RGrvSt1mz: `https://www.figma.com/proto/UJYiu6FMSoQ7UoRzO7Voae/Portfolio---LP?page-id=152%3A20&node-id=1528-10649&viewport=-2987%2C2133%2C0.29&t=ak1rx46XVFkviQOr-1&scaling=contain&content-scaling=fixed`,
                                          width: `100%`,
                                          YV6gG4UC4: `Curation Ecosystem`,
                                        }),
                                      }),
                                    }),
                                    l(`div`, {
                                      className: `framer-74uoq9`,
                                      "data-framer-name": `Sub Text`,
                                      children: [
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: a(`h4`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-0.5px`,
                                                "--framer-line-height": `38px`,
                                                "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                              },
                                              children: `Curator `,
                                            }),
                                          }),
                                          className: `framer-lrv68u`,
                                          "data-framer-name": `Header`,
                                          fonts: [`GF;Geist-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(`div`, {
                                          className: `framer-1wasxhz`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-20t84g`,
                                              children: a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: a(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                    },
                                                    children: `The Curator flow simplifies content creation by combining all curation tools (Channels, Paths, Priorities) into one streamlined builder.`,
                                                  }),
                                                }),
                                                className: `framer-5xzjae`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [`GF;Geist-regular`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            a(`div`, {
                                              className: `framer-oetw5w`,
                                              children: a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: l(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                    },
                                                    children: [
                                                      `It includes `,
                                                      a(`strong`, {
                                                        children: `quick content search`,
                                                      }),
                                                      `, `,
                                                      a(`strong`, {
                                                        children: `drag-and-drop customization`,
                                                      }),
                                                      `, and `,
                                                      a(`strong`, {
                                                        children: `clear progress indicators`,
                                                      }),
                                                      ` to reduce friction in building learning paths.`,
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-l5fqvs`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [
                                                  `GF;Geist-regular`,
                                                  `GF;Geist-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            a(`div`, {
                                              className: `framer-1x02f26`,
                                              children: a(C, {
                                                __fromCanvasComponent: !0,
                                                children: l(u, {
                                                  children: [
                                                    l(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                      },
                                                      children: [
                                                        `Admins can `,
                                                        a(`strong`, {
                                                          children: `set priorities, assign due dates`,
                                                        }),
                                                        `, and preview the learner’s experience in real time.`,
                                                      ],
                                                    }),
                                                    a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                      },
                                                      children: a(`br`, {
                                                        className: `trailing-break`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-1vycuwe`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [
                                                  `GF;Geist-regular`,
                                                  `GF;Geist-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a(g, {
                                      height: 571,
                                      width: `calc(min(min(min(${
                                        p?.width || `100vw`
                                      }, 2000px), 1750px) - 160px, 1200px) - 80px)`,
                                      y:
                                        (p?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        560 +
                                        40 +
                                        0 +
                                        0 +
                                        10394 +
                                        0 +
                                        475,
                                      children: a(_, {
                                        className: `framer-1yhpr1e-container`,
                                        nodeId: `HXr0Y7SWD`,
                                        scopeId: `YUN0ipZRa`,
                                        children: a(ht, {
                                          height: `100%`,
                                          id: `HXr0Y7SWD`,
                                          layoutId: `HXr0Y7SWD`,
                                          style: { width: `100%` },
                                          variant: `flC5aKWFQ`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    l(`div`, {
                                      className: `framer-7lammk`,
                                      "data-framer-name": `Sub Text`,
                                      children: [
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: a(`h4`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-font-size": `20px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-0.5px`,
                                                "--framer-line-height": `38px`,
                                                "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                              },
                                              children: `Learner`,
                                            }),
                                          }),
                                          className: `framer-15dw2jl`,
                                          "data-framer-name": `Header`,
                                          fonts: [`GF;Geist-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        l(`div`, {
                                          className: `framer-11td6fn`,
                                          children: [
                                            a(`div`, {
                                              className: `framer-1mc1wgx`,
                                              children: a(C, {
                                                __fromCanvasComponent: !0,
                                                children: l(u, {
                                                  children: [
                                                    l(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                      },
                                                      children: [
                                                        `The Learner flow focuses on `,
                                                        a(`strong`, {
                                                          children: `clarity and motivation`,
                                                        }),
                                                        `, showcasing assigned paths, recommended content, and completion progress upfront.`,
                                                      ],
                                                    }),
                                                    a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                      },
                                                      children: a(`br`, {
                                                        className: `trailing-break`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-1phdcre`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [
                                                  `GF;Geist-regular`,
                                                  `GF;Geist-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            a(`div`, {
                                              className: `framer-1o1jdva`,
                                              children: a(C, {
                                                __fromCanvasComponent: !0,
                                                children: a(u, {
                                                  children: l(`p`, {
                                                    style: {
                                                      "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                      "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                    },
                                                    children: [
                                                      `Learners can easily `,
                                                      a(`strong`, {
                                                        children: `see their priorities`,
                                                      }),
                                                      `, track their progress with `,
                                                      a(`strong`, {
                                                        children: `visual indicators`,
                                                      }),
                                                      `, and get `,
                                                      a(`strong`, {
                                                        children: `personalized recommendations`,
                                                      }),
                                                      ` based on Skill IQ.`,
                                                    ],
                                                  }),
                                                }),
                                                className: `framer-wj4hvj`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [
                                                  `GF;Geist-regular`,
                                                  `GF;Geist-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            a(`div`, {
                                              className: `framer-1p3rpr1`,
                                              children: a(C, {
                                                __fromCanvasComponent: !0,
                                                children: l(u, {
                                                  children: [
                                                    l(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                      },
                                                      children: [
                                                        `A `,
                                                        a(`strong`, {
                                                          children: `simplified navigation and dashboard`,
                                                        }),
                                                        ` reduces confusion, guiding learners directly to their next step.`,
                                                      ],
                                                    }),
                                                    a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                      },
                                                      children: a(`br`, {
                                                        className: `trailing-break`,
                                                      }),
                                                    }),
                                                    a(`p`, {
                                                      style: {
                                                        "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                        "--framer-line-height": `1.5em`,
                                                        "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                                      },
                                                      children: a(`br`, {
                                                        className: `trailing-break`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                className: `framer-6920x`,
                                                "data-framer-name": `Paragraph`,
                                                fonts: [
                                                  `GF;Geist-regular`,
                                                  `GF;Geist-700`,
                                                ],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a(g, {
                                      height: 571,
                                      width: `calc(min(min(min(${
                                        p?.width || `100vw`
                                      }, 2000px), 1750px) - 160px, 1200px) - 80px)`,
                                      y:
                                        (p?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        560 +
                                        40 +
                                        0 +
                                        0 +
                                        10394 +
                                        0 +
                                        1560,
                                      children: a(_, {
                                        className: `framer-10bhk98-container`,
                                        nodeId: `zl0FL3dnC`,
                                        scopeId: `YUN0ipZRa`,
                                        children: a(Me, {
                                          height: `100%`,
                                          id: `zl0FL3dnC`,
                                          layoutId: `zl0FL3dnC`,
                                          style: { width: `100%` },
                                          variant: `kg3gP_Z6A`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              P() &&
                                l(`div`, {
                                  className: `framer-166nia8 hidden-1sscvvh hidden-4ry9c1`,
                                  children: [
                                    l(`div`, {
                                      className: `framer-1a1o77i`,
                                      children: [
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: a(`h4`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-font-size": `34px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `-1px`,
                                                "--framer-line-height": `36px`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                              },
                                              children: `Testing Insights`,
                                            }),
                                          }),
                                          className: `framer-15vtqyg`,
                                          "data-framer-name": `Header`,
                                          fonts: [`GF;Geist-500`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(C, {
                                          __fromCanvasComponent: !0,
                                          children: a(u, {
                                            children: a(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-line-height": `1.6em`,
                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                              },
                                              children: `Design prototypes were tested with CSMs (Customer Success Mangers), B2B leaders and core stake holders in multiple rounds. There were few key insights we got to know.`,
                                            }),
                                          }),
                                          className: `framer-1uhgrlx`,
                                          "data-framer-name": `Paragraph`,
                                          fonts: [`GF;Geist-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    a(C, {
                                      __fromCanvasComponent: !0,
                                      children: a(u, {
                                        children: l(`ol`, {
                                          style: {
                                            "--framer-font-size": `18px`,
                                            "--framer-line-height": `1.6em`,
                                            "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                          },
                                          children: [
                                            a(`li`, {
                                              children: a(`p`, {
                                                children: `Marking a learning path a priority should be just for organisational level.`,
                                              }),
                                            }),
                                            a(`li`, {
                                              children: a(`p`, {
                                                children: `A manager can can make a learner as a collaborator as well. `,
                                              }),
                                            }),
                                            a(`li`, {
                                              children: a(`p`, {
                                                children: `Adding content within the experience was acknowledge by all users. `,
                                              }),
                                            }),
                                            a(`li`, {
                                              children: a(`p`, {
                                                children: `Focus learning can really help learner figure out the important and assigned learning paths. `,
                                              }),
                                            }),
                                            a(`li`, {
                                              style: {
                                                "--framer-font-size": `16px`,
                                              },
                                              children: a(`p`, {
                                                children: `If Iris helps leader's to create learning path it will simplify CSMs daily tasks, streamline the creation and assignment process and reduce the learning cover.`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      className: `framer-1573g7w`,
                                      "data-framer-name": `Paragraph`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              P() &&
                                l(`div`, {
                                  className: `framer-omnjf3 hidden-1sscvvh hidden-4ry9c1`,
                                  children: [
                                    a(`div`, {
                                      className: `framer-54m64f`,
                                      children: l(`div`, {
                                        className: `framer-1jswc6k`,
                                        children: [
                                          a(C, {
                                            __fromCanvasComponent: !0,
                                            children: a(u, {
                                              children: a(`h4`, {
                                                style: {
                                                  "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                  "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                  "--framer-font-size": `34px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-letter-spacing": `-1px`,
                                                  "--framer-line-height": `36px`,
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                },
                                                children: `Interface Designs`,
                                              }),
                                            }),
                                            className: `framer-usqbp2`,
                                            "data-framer-name": `Header`,
                                            fonts: [`GF;Geist-500`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          a(`div`, {
                                            className: `framer-1bbz1uf`,
                                            "data-border": !0,
                                            "data-framer-name": `Highlighter`,
                                            children: a(C, {
                                              __fromCanvasComponent: !0,
                                              children: a(u, {
                                                children: a(`p`, {
                                                  style: {
                                                    "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                    "--framer-font-size": `12px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-letter-spacing": `-0.2px`,
                                                    "--framer-line-height": `10px`,
                                                    "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                                  },
                                                  children: `Key Highlightes`,
                                                }),
                                              }),
                                              className: `framer-5a63tg`,
                                              "data-framer-name": `Text`,
                                              fonts: [`GF;Geist-500`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    a(C, {
                                      __fromCanvasComponent: !0,
                                      children: a(u, {
                                        children: l(`p`, {
                                          style: {
                                            "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                          },
                                          children: [
                                            `The goal of the redesigned interface was to support both `,
                                            a(`strong`, {
                                              children: `B2B and B2C users`,
                                            }),
                                            ` by solving key user jobs with minimal learning effort. The design focuses on delivering a seamless, intuitive experience for both `,
                                            a(`strong`, {
                                              children: `curators`,
                                            }),
                                            ` and `,
                                            a(`strong`, {
                                              children: `learners`,
                                            }),
                                            `, while retaining flexibility and scalability. `,
                                          ],
                                        }),
                                      }),
                                      className: `framer-8mcbm4`,
                                      "data-framer-name": `Paragraph`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    l(`div`, {
                                      className: `framer-1e3vr9f`,
                                      children: [
                                        a(`div`, {
                                          className: `framer-16z2bf0`,
                                          "data-border": !0,
                                          "data-framer-name": `Card/ Testimonial Card 2`,
                                          children: a(`div`, {
                                            className: `framer-ocrfeu`,
                                            "data-framer-name": `Content`,
                                            children: a(C, {
                                              __fromCanvasComponent: !0,
                                              children: l(u, {
                                                children: [
                                                  a(`p`, {
                                                    style: {
                                                      "--framer-line-height": `36px`,
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: a(`strong`, {
                                                      children: `Curator Flow Highlights`,
                                                    }),
                                                  }),
                                                  a(`p`, {
                                                    style: {
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: `Personalised path for teams `,
                                                  }),
                                                  a(`p`, {
                                                    style: {
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: a(`br`, {
                                                      className: `trailing-break`,
                                                    }),
                                                  }),
                                                  l(`ul`, {
                                                    style: {
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: [
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `Create, customize, and assign paths with ease`,
                                                        }),
                                                      }),
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `Quick edit access via a clean dashboard`,
                                                        }),
                                                      }),
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `AI-powered content suggestions via Iris`,
                                                        }),
                                                      }),
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `Smart search, filters, and contextual guidance`,
                                                        }),
                                                      }),
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `Track learner engagement with built-in analytics`,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                  a(`p`, {
                                                    style: {
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: a(`br`, {
                                                      className: `trailing-break`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              className: `framer-ra7msh`,
                                              "data-framer-name": `Body Text`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                        a(`div`, {
                                          className: `framer-ixzek4`,
                                          "data-border": !0,
                                          "data-framer-name": `Card/ Testimonial Card 2`,
                                          children: a(`div`, {
                                            className: `framer-l6n07h`,
                                            "data-framer-name": `Content`,
                                            children: a(C, {
                                              __fromCanvasComponent: !0,
                                              children: l(u, {
                                                children: [
                                                  a(`p`, {
                                                    style: {
                                                      "--framer-line-height": `36px`,
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: a(`strong`, {
                                                      children: `Learner Flow Highlights`,
                                                    }),
                                                  }),
                                                  a(`p`, {
                                                    style: {
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: `Engaging and personalised learning journey:`,
                                                  }),
                                                  a(`p`, {
                                                    style: {
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: a(`br`, {
                                                      className: `trailing-break`,
                                                    }),
                                                  }),
                                                  l(`ul`, {
                                                    style: {
                                                      "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                                    },
                                                    children: [
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `Clear view of assigned and recommended paths`,
                                                        }),
                                                      }),
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `Visual progress indicators and next steps`,
                                                        }),
                                                      }),
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `Save favourite content to collections`,
                                                        }),
                                                      }),
                                                      a(`li`, {
                                                        children: a(`p`, {
                                                          children: `Motivation through Skill IQ, badges, and certificates`,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              className: `framer-16yfh7w`,
                                              "data-framer-name": `Body Text`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          P() &&
                            l(`div`, {
                              className: `framer-m0pdzt hidden-1sscvvh hidden-4ry9c1`,
                              children: [
                                a(g, {
                                  children: a(_, {
                                    className: `framer-xzxqz6-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `Dzr8OMpmN`,
                                    scopeId: `YUN0ipZRa`,
                                    children: a(J, {
                                      height: `100%`,
                                      id: `Dzr8OMpmN`,
                                      image: $(
                                        {
                                          pixelHeight: 2347,
                                          pixelWidth: 3550,
                                          src: `https://framerusercontent.com/images/htOXGjj3aw2giKDtq4M2LjT3xA.png?width=3550&height=2347`,
                                          srcSet: `https://framerusercontent.com/images/htOXGjj3aw2giKDtq4M2LjT3xA.png?scale-down-to=512&width=3550&height=2347 512w,https://framerusercontent.com/images/htOXGjj3aw2giKDtq4M2LjT3xA.png?scale-down-to=1024&width=3550&height=2347 1024w,https://framerusercontent.com/images/htOXGjj3aw2giKDtq4M2LjT3xA.png?scale-down-to=2048&width=3550&height=2347 2048w,https://framerusercontent.com/images/htOXGjj3aw2giKDtq4M2LjT3xA.png?width=3550&height=2347 3550w`,
                                        },
                                        ``
                                      ),
                                      layoutId: `Dzr8OMpmN`,
                                      radius: `0px`,
                                      shadows: ``,
                                      sizing: `cover`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                      zoomLevel: 1.5,
                                    }),
                                  }),
                                }),
                                a(g, {
                                  children: a(_, {
                                    className: `framer-1sxv9vo-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `WheG3aY62`,
                                    scopeId: `YUN0ipZRa`,
                                    children: a(J, {
                                      height: `100%`,
                                      id: `WheG3aY62`,
                                      image: $(
                                        {
                                          pixelHeight: 2424,
                                          pixelWidth: 3405,
                                          src: `https://framerusercontent.com/images/Eh4hBzkTodspz5szfXTg58jjB0.png?width=3405&height=2424`,
                                          srcSet: `https://framerusercontent.com/images/Eh4hBzkTodspz5szfXTg58jjB0.png?scale-down-to=512&width=3405&height=2424 512w,https://framerusercontent.com/images/Eh4hBzkTodspz5szfXTg58jjB0.png?scale-down-to=1024&width=3405&height=2424 1024w,https://framerusercontent.com/images/Eh4hBzkTodspz5szfXTg58jjB0.png?scale-down-to=2048&width=3405&height=2424 2048w,https://framerusercontent.com/images/Eh4hBzkTodspz5szfXTg58jjB0.png?width=3405&height=2424 3405w`,
                                        },
                                        ``
                                      ),
                                      layoutId: `WheG3aY62`,
                                      radius: `0px`,
                                      shadows: ``,
                                      sizing: `cover`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                      zoomLevel: 1.5,
                                    }),
                                  }),
                                }),
                                a(g, {
                                  children: a(_, {
                                    className: `framer-ce6on3-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `sC4kdXqqg`,
                                    scopeId: `YUN0ipZRa`,
                                    children: a(J, {
                                      height: `100%`,
                                      id: `sC4kdXqqg`,
                                      image: $(
                                        {
                                          pixelHeight: 1975,
                                          pixelWidth: 3267,
                                          src: `https://framerusercontent.com/images/1mMPpY08AoOLZN9yAI4e6Y8PEs.png?width=3267&height=1975`,
                                          srcSet: `https://framerusercontent.com/images/1mMPpY08AoOLZN9yAI4e6Y8PEs.png?scale-down-to=512&width=3267&height=1975 512w,https://framerusercontent.com/images/1mMPpY08AoOLZN9yAI4e6Y8PEs.png?scale-down-to=1024&width=3267&height=1975 1024w,https://framerusercontent.com/images/1mMPpY08AoOLZN9yAI4e6Y8PEs.png?scale-down-to=2048&width=3267&height=1975 2048w,https://framerusercontent.com/images/1mMPpY08AoOLZN9yAI4e6Y8PEs.png?width=3267&height=1975 3267w`,
                                        },
                                        ``
                                      ),
                                      layoutId: `sC4kdXqqg`,
                                      radius: `0px`,
                                      shadows: ``,
                                      sizing: `cover`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                      zoomLevel: 1.5,
                                    }),
                                  }),
                                }),
                                a(g, {
                                  children: a(_, {
                                    className: `framer-5ccnt8-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `hTNJ4AdXI`,
                                    scopeId: `YUN0ipZRa`,
                                    children: a(J, {
                                      height: `100%`,
                                      id: `hTNJ4AdXI`,
                                      image: $(
                                        {
                                          pixelHeight: 2177,
                                          pixelWidth: 3550,
                                          src: `https://framerusercontent.com/images/2DiqvhXJ0wqFnzLaD4f598KNw.png?width=3550&height=2177`,
                                          srcSet: `https://framerusercontent.com/images/2DiqvhXJ0wqFnzLaD4f598KNw.png?scale-down-to=512&width=3550&height=2177 512w,https://framerusercontent.com/images/2DiqvhXJ0wqFnzLaD4f598KNw.png?scale-down-to=1024&width=3550&height=2177 1024w,https://framerusercontent.com/images/2DiqvhXJ0wqFnzLaD4f598KNw.png?scale-down-to=2048&width=3550&height=2177 2048w,https://framerusercontent.com/images/2DiqvhXJ0wqFnzLaD4f598KNw.png?width=3550&height=2177 3550w`,
                                        },
                                        ``
                                      ),
                                      layoutId: `hTNJ4AdXI`,
                                      radius: `0px`,
                                      shadows: ``,
                                      sizing: `cover`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                      zoomLevel: 1.5,
                                    }),
                                  }),
                                }),
                                a(g, {
                                  children: a(_, {
                                    className: `framer-j9i3jb-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `HevfT4281`,
                                    scopeId: `YUN0ipZRa`,
                                    children: a(J, {
                                      height: `100%`,
                                      id: `HevfT4281`,
                                      image: $(
                                        {
                                          pixelHeight: 2327,
                                          pixelWidth: 3153,
                                          src: `https://framerusercontent.com/images/kUnw8ggZ9TzOcHV0qix8V3Lhmo.png?width=3153&height=2327`,
                                          srcSet: `https://framerusercontent.com/images/kUnw8ggZ9TzOcHV0qix8V3Lhmo.png?scale-down-to=512&width=3153&height=2327 512w,https://framerusercontent.com/images/kUnw8ggZ9TzOcHV0qix8V3Lhmo.png?scale-down-to=1024&width=3153&height=2327 1024w,https://framerusercontent.com/images/kUnw8ggZ9TzOcHV0qix8V3Lhmo.png?scale-down-to=2048&width=3153&height=2327 2048w,https://framerusercontent.com/images/kUnw8ggZ9TzOcHV0qix8V3Lhmo.png?width=3153&height=2327 3153w`,
                                        },
                                        ``
                                      ),
                                      layoutId: `HevfT4281`,
                                      radius: `0px`,
                                      shadows: ``,
                                      sizing: `cover`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                      zoomLevel: 1.5,
                                    }),
                                  }),
                                }),
                                a(g, {
                                  children: a(_, {
                                    className: `framer-t1mmmc-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `Qw5iAOn6Q`,
                                    scopeId: `YUN0ipZRa`,
                                    children: a(J, {
                                      height: `100%`,
                                      id: `Qw5iAOn6Q`,
                                      image: $(
                                        {
                                          pixelHeight: 2300,
                                          pixelWidth: 3550,
                                          src: `https://framerusercontent.com/images/Hh0g8tb10gk81kkxaNYMi7iIaA.png?width=3550&height=2300`,
                                          srcSet: `https://framerusercontent.com/images/Hh0g8tb10gk81kkxaNYMi7iIaA.png?scale-down-to=512&width=3550&height=2300 512w,https://framerusercontent.com/images/Hh0g8tb10gk81kkxaNYMi7iIaA.png?scale-down-to=1024&width=3550&height=2300 1024w,https://framerusercontent.com/images/Hh0g8tb10gk81kkxaNYMi7iIaA.png?scale-down-to=2048&width=3550&height=2300 2048w,https://framerusercontent.com/images/Hh0g8tb10gk81kkxaNYMi7iIaA.png?width=3550&height=2300 3550w`,
                                        },
                                        ``
                                      ),
                                      layoutId: `Qw5iAOn6Q`,
                                      radius: `0px`,
                                      shadows: ``,
                                      sizing: `cover`,
                                      style: { width: `100%` },
                                      width: `100%`,
                                      zoomLevel: 1.5,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          P() &&
                            a(x, {
                              href: `https://prernakohli.notion.site/Learn-to-Type-e3be404947b0404bb5a0282595aa3cf3`,
                              motionChild: !0,
                              nodeId: `wi4YrnlAi`,
                              openInNewTab: !0,
                              scopeId: `YUN0ipZRa`,
                              children: l(m.a, {
                                className: `framer-s7y6yb hidden-1sscvvh hidden-4ry9c1 framer-94nhgv`,
                                "data-framer-cursor": `gdzvod`,
                                "data-framer-name": `Key takeaway`,
                                children: [
                                  l(`div`, {
                                    className: `framer-1a1qewv`,
                                    "data-framer-name": `Sub Text`,
                                    children: [
                                      a(C, {
                                        __fromCanvasComponent: !0,
                                        children: a(u, {
                                          children: a(`h4`, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `34px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-1px`,
                                              "--framer-line-height": `36px`,
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `rgba(255, 255, 255, 0.8)`,
                                            },
                                            children: `Key Takeaways  `,
                                          }),
                                        }),
                                        className: `framer-136nxdo`,
                                        "data-framer-name": `Header`,
                                        fonts: [`GF;Geist-500`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(C, {
                                        __fromCanvasComponent: !0,
                                        children: l(u, {
                                          children: [
                                            l(`ol`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                              },
                                              children: [
                                                l(`li`, {
                                                  children: [
                                                    a(`p`, {
                                                      children: a(`strong`, {
                                                        children: `Simplifying fragmented experiences increases adoption`,
                                                      }),
                                                    }),
                                                    a(`p`, {
                                                      children: `Consolidating multiple tools like Channels, Paths, and Priorities into a unified flow reduced user confusion and improved discoverability.`,
                                                    }),
                                                    a(`p`, {
                                                      children: a(`br`, {
                                                        className: `trailing-break`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                l(`li`, {
                                                  children: [
                                                    a(`p`, {
                                                      children: a(`strong`, {
                                                        children: `User-led insights drive meaningful design`,
                                                      }),
                                                    }),
                                                    a(`p`, {
                                                      children: `Interviews with learners, leaders, and content managers revealed critical friction points—like unclear value, poor guidance, and feature overload—which directly informed solution priorities.`,
                                                    }),
                                                    a(`p`, {
                                                      children: a(`br`, {
                                                        className: `trailing-break`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                l(`li`, {
                                                  children: [
                                                    a(`p`, {
                                                      children: a(`strong`, {
                                                        children: `Data-backed decisions improve design confidence`,
                                                      }),
                                                    }),
                                                    a(`p`, {
                                                      children: `Analytics showing a 55% drop in engagement and 63.6% task failure helped identify high-impact problems and justify redesign efforts.`,
                                                    }),
                                                    a(`p`, {
                                                      children: a(`br`, {
                                                        className: `trailing-break`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                l(`li`, {
                                                  children: [
                                                    a(`p`, {
                                                      children: a(`strong`, {
                                                        children: `Flexible systems serve varied personas better`,
                                                      }),
                                                    }),
                                                    a(`p`, {
                                                      children: `Building for different user goals—content creation, consumption, and assignment—ensured the system supported real-world organizational needs.`,
                                                    }),
                                                    a(`p`, {
                                                      children: a(`br`, {
                                                        className: `trailing-break`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                l(`li`, {
                                                  children: [
                                                    a(`p`, {
                                                      children: a(`strong`, {
                                                        children: `Progress tracking is as important as content delivery`,
                                                      }),
                                                    }),
                                                    a(`p`, {
                                                      children: `Users need clarity not just on what to learn, but how they’re progressing—guiding design efforts toward impact-focused feedback and tracking features.`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            a(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-color": `rgba(255, 255, 255, 0.7)`,
                                              },
                                              children: a(`br`, {
                                                className: `trailing-break`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        className: `framer-14plkfm`,
                                        "data-framer-name": `Paragraph`,
                                        fonts: [
                                          `GF;Geist-regular`,
                                          `GF;Geist-700`,
                                        ],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  l(`div`, {
                                    className: `framer-1jkdtne`,
                                    children: [
                                      a(b, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 400,
                                          intrinsicWidth: 361,
                                          loading: M(
                                            (p?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              560 +
                                              40 +
                                              15558 +
                                              0 +
                                              1936 +
                                              0
                                          ),
                                          pixelHeight: 800,
                                          pixelWidth: 722,
                                          sizes: `84px`,
                                          src: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?scale-down-to=512&width=722&height=800`,
                                          srcSet: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?width=722&height=800 722w`,
                                        },
                                        className: `framer-y41c53`,
                                        "data-framer-name": `Screenshot 2025-07-15_at_2.02.10_AM-removebg-preview`,
                                      }),
                                      a(C, {
                                        __fromCanvasComponent: !0,
                                        children: a(u, {
                                          children: a(`h2`, {
                                            style: {
                                              "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                              "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                              "--framer-font-size": `29px`,
                                              "--framer-letter-spacing": `-1.9px`,
                                              "--framer-line-height": `50px`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                            },
                                            children: `Thanks for reading !`,
                                          }),
                                        }),
                                        className: `framer-1j9ug5q`,
                                        "data-framer-name": `Text`,
                                        fonts: [`GF;Geist-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                      B() &&
                        l(`div`, {
                          className: `framer-jc3x9q hidden-cz5ij6 hidden-4ry9c1`,
                          children: [
                            a(S, {
                              breakpoint: A,
                              overrides: {
                                Ph7JVtEPW: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 400,
                                    intrinsicWidth: 361,
                                    loading: M(
                                      (p?.y || 0) + 0 + 0 + 0 + 2843 + 8 + 0
                                    ),
                                    pixelHeight: 800,
                                    pixelWidth: 722,
                                    sizes: `84px`,
                                    src: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?scale-down-to=512&width=722&height=800`,
                                    srcSet: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?width=722&height=800 722w`,
                                  },
                                },
                              },
                              children: a(b, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 400,
                                  intrinsicWidth: 361,
                                  pixelHeight: 800,
                                  pixelWidth: 722,
                                  sizes: `84px`,
                                  src: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?scale-down-to=512&width=722&height=800`,
                                  srcSet: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?width=722&height=800 722w`,
                                },
                                className: `framer-1p3ewg6`,
                                "data-framer-name": `Screenshot 2025-07-15_at_2.02.10_AM-removebg-preview`,
                              }),
                            }),
                            a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: a(`h2`, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-letter-spacing": `0px`,
                                    "--framer-line-height": `24px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                  },
                                  children: `We recommend viewing this case study on a desktop for  better visual experience`,
                                }),
                              }),
                              className: `framer-1at5t0u`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-regular`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      H() &&
                        l(`div`, {
                          className: `framer-1gxj00q hidden-cz5ij6 hidden-1sscvvh`,
                          children: [
                            a(S, {
                              breakpoint: A,
                              overrides: {
                                dY2OPVKkO: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 400,
                                    intrinsicWidth: 361,
                                    loading: M(
                                      (p?.y || 0) + 0 + 0 + 0 + 2789 + 8 + 0
                                    ),
                                    pixelHeight: 800,
                                    pixelWidth: 722,
                                    sizes: `84px`,
                                    src: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?scale-down-to=512&width=722&height=800`,
                                    srcSet: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?width=722&height=800 722w`,
                                  },
                                },
                              },
                              children: a(b, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 400,
                                  intrinsicWidth: 361,
                                  pixelHeight: 800,
                                  pixelWidth: 722,
                                  sizes: `84px`,
                                  src: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?scale-down-to=512&width=722&height=800`,
                                  srcSet: `https://framerusercontent.com/images/AOfIWqtCu56OqktpHhsYUdw.png?width=722&height=800 722w`,
                                },
                                className: `framer-f7gw8g`,
                                "data-framer-name": `Screenshot 2025-07-15_at_2.02.10_AM-removebg-preview`,
                              }),
                            }),
                            a(C, {
                              __fromCanvasComponent: !0,
                              children: a(u, {
                                children: l(`h2`, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtcmVndWxhcg==`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-letter-spacing": `0px`,
                                    "--framer-line-height": `24px`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                                  },
                                  children: [
                                    `We recommend viewing this case study on `,
                                    a(`br`, {}),
                                    ` desktop for a better visual experience`,
                                  ],
                                }),
                              }),
                              className: `framer-p0fwqr`,
                              "data-framer-name": `Text`,
                              fonts: [`GF;Geist-regular`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                    ],
                  }),
                  P() &&
                    a(g, {
                      height: 51,
                      y: 904.5,
                      children: a(_, {
                        className: `framer-jhhyty-container hidden-1sscvvh hidden-4ry9c1`,
                        layoutScroll: !0,
                        nodeId: `ELYrHXmzv`,
                        scopeId: `YUN0ipZRa`,
                        children: a(Ut, {
                          height: `100%`,
                          id: `ELYrHXmzv`,
                          layoutId: `ELYrHXmzv`,
                          variant: `NWc2njwfM`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  R() &&
                    a(`footer`, {
                      className: `framer-1b55o0q hidden-1sscvvh`,
                      "data-framer-name": `Footer`,
                      children: l(`div`, {
                        className: `framer-1wp6u63`,
                        children: [
                          a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(`p`, {
                                className: `framer-styles-preset-uq0oqh`,
                                "data-styles-preset": `QCtzoRG1E`,
                                style: {
                                  "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                },
                                children: `MV`,
                              }),
                            }),
                            className: `framer-1jv1d0b`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          l(`div`, {
                            className: `framer-mpsn7h`,
                            children: [
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://www.linkedin.com/in/prernakohli4/`,
                                      motionChild: !0,
                                      nodeId: `jQQNhJZB1`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `LinkedIN`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-18cip71`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://www.instagram.com/the_designage?igsh=MTFpeTZlenI2b3Z2cg%3D%3D&utm_source=qr`,
                                      motionChild: !0,
                                      nodeId: `pix_SyP2E`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `Instagram`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-uhwuav`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://www.behance.net/prernakohli`,
                                      motionChild: !0,
                                      nodeId: `cR4pP0StW`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `Bēhance`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-129gy1d`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://medium.com/@prernkohli`,
                                      motionChild: !0,
                                      nodeId: `Ou9hxWvgO`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `Medium`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-1uuwb68`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://drive.google.com/file/d/1Tbhnm9y1PYQHF76LR3inHeiFPqSs4mfm/view?usp=sharing`,
                                      motionChild: !0,
                                      nodeId: `OoXCdHh_3`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `Resume`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-4sogxm`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  B() &&
                    a(`footer`, {
                      className: `framer-yc0to7 hidden-cz5ij6 hidden-4ry9c1`,
                      "data-framer-name": `Footer`,
                      children: l(`div`, {
                        className: `framer-21vpl8`,
                        children: [
                          a(C, {
                            __fromCanvasComponent: !0,
                            children: a(u, {
                              children: a(`p`, {
                                className: `framer-styles-preset-uq0oqh`,
                                "data-styles-preset": `QCtzoRG1E`,
                                style: {
                                  "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                },
                                children: `MV `,
                              }),
                            }),
                            className: `framer-1mpmpmz`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          l(`div`, {
                            className: `framer-1vkr5xu`,
                            children: [
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://www.linkedin.com/in/prernakohli4/`,
                                      motionChild: !0,
                                      nodeId: `tjhLuWeN3`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `LinkedIN`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-1gdyytm`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://www.instagram.com/the_designage?igsh=MTFpeTZlenI2b3Z2cg%3D%3D&utm_source=qr`,
                                      motionChild: !0,
                                      nodeId: `fOiuGbmca`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `Instagram`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-8e1e2h`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://www.behance.net/prernakohli`,
                                      motionChild: !0,
                                      nodeId: `veF1J_DzL`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `Bēhance`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-19zmuot`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(C, {
                                __fromCanvasComponent: !0,
                                children: a(u, {
                                  children: a(`p`, {
                                    style: {
                                      "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                      "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `500`,
                                      "--framer-letter-spacing": `-0.2px`,
                                      "--framer-text-color": `var(--token-4ca7d748-6404-4dbd-82d7-1148c1e14e26, rgb(191, 191, 191))`,
                                    },
                                    children: a(x, {
                                      href: `https://medium.com/@prernkohli`,
                                      motionChild: !0,
                                      nodeId: `HA0QKUMMM`,
                                      openInNewTab: !0,
                                      relValues: [],
                                      scopeId: `YUN0ipZRa`,
                                      smoothScroll: !1,
                                      children: a(m.a, {
                                        className: `framer-styles-preset-68ruwb`,
                                        "data-styles-preset": `DOWnf2wWb`,
                                        children: `Medium`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-qzrdcc`,
                                fonts: [`FS;Satoshi-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  B() &&
                    l(`button`, {
                      className: `framer-vvf1ql hidden-cz5ij6 hidden-4ry9c1`,
                      "data-border": !0,
                      "data-framer-name": `Button/Primary Button`,
                      "data-reset": `button`,
                      children: [
                        a(C, {
                          __fromCanvasComponent: !0,
                          children: a(u, {
                            children: a(`p`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                "--framer-font-size": `12px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.5px`,
                                "--framer-line-height": `26px`,
                                "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              },
                              children: `This is  mobile preview,  switch to desktop for the full case study.`,
                            }),
                          }),
                          className: `framer-5uoyhb`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Geist-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        l(w, {
                          className: `framer-za2dop`,
                          opacity: 1,
                          requiresOverflowVisible: !0,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.2 16" overflow="visible"><path d="M 4.484 5.622 L 0.962 2.093 C 0.488 1.612 0.492 0.838 0.972 0.363 C 1.199 0.132 1.509 0.002 1.833 0 C 2.156 -0.002 2.467 0.125 2.697 0.353 L 8.926 6.533 C 11.052 8.665 12.278 11.458 9.904 14.345 L 9.652 14.598 C 8.757 15.495 7.543 16 6.276 16 C 5.009 16 3.794 15.495 2.9 14.598 L 0.349 12.078 C -0.125 11.604 -0.115 10.824 0.371 10.337 C 0.831 9.875 1.555 9.842 2.032 10.245 M 4.484 5.622 L 6.492 7.633 M 4.484 5.622 C 4.009 5.147 3.212 5.158 2.724 5.647 C 2.235 6.137 2.224 6.918 2.697 7.393 L 3.28 7.977 M 3.28 7.977 L 4.707 9.406 M 3.28 7.977 C 2.806 7.501 2.046 7.524 1.558 8.013 C 1.07 8.501 1.058 9.283 1.532 9.758 L 2.032 10.245 M 2.032 10.245 L 2.936 11.125 M 2.032 10.245 C 2.059 10.267 2.084 10.29 2.108 10.315 M 5.708 3.341 C 5.843 2.112 7.299 0.837 9.116 1.71 C 9.289 1.793 9.426 1.95 9.428 2.142 C 9.43 2.451 9.295 2.833 8.86 3.086 C 8.237 3.448 7.219 4.83 8.579 6.194" fill="transparent" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                          withExternalLayout: !0,
                          children: [
                            a(w, {
                              className: `framer-1bh60f7`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.2 16" overflow="visible"><path d="M 4.484 5.622 L 0.962 2.093 C 0.488 1.612 0.492 0.838 0.972 0.363 C 1.199 0.132 1.509 0.002 1.833 0 C 2.156 -0.002 2.467 0.125 2.697 0.353 L 8.926 6.533 C 11.052 8.665 12.278 11.458 9.904 14.345 L 9.652 14.598 C 8.757 15.495 7.543 16 6.276 16 C 5.009 16 3.794 15.495 2.9 14.598 L 0.349 12.078 C -0.125 11.604 -0.115 10.824 0.371 10.337 C 0.831 9.875 1.555 9.842 2.032 10.245" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-51dui9`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.008 2.011" overflow="visible"><path d="M 0 0 L 2.008 2.011" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-amomrc`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.134 2.704" overflow="visible"><path d="M 2.134 0.349 C 1.66 -0.126 0.862 -0.115 0.374 0.374 C -0.115 0.864 -0.126 1.645 0.348 2.12 L 0.93 2.704" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-rlqh5f`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.427 1.43" overflow="visible"><path d="M 0 0 L 1.427 1.43" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-e2uc11`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.095 2.612" overflow="visible"><path d="M 2.095 0.344 C 1.622 -0.131 0.862 -0.109 0.374 0.38 C -0.114 0.869 -0.126 1.65 0.348 2.125 L 0.848 2.612" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-1et4jr8`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0 L 0.904 0.88" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-2gkd76`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0 C 0.026 0.022 0.052 0.046 0.076 0.07" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-14rvjhk`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.72 4.772" overflow="visible"><path d="M 0 1.919 C 0.134 0.69 1.59 -0.585 3.408 0.288 C 3.581 0.371 3.718 0.528 3.72 0.72 C 3.722 1.029 3.586 1.411 3.151 1.664 C 2.529 2.026 1.51 3.408 2.87 4.772" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  H() &&
                    l(`button`, {
                      className: `framer-y0xvl5 hidden-cz5ij6 hidden-1sscvvh`,
                      "data-border": !0,
                      "data-framer-name": `Button/Primary Button`,
                      "data-reset": `button`,
                      children: [
                        a(C, {
                          __fromCanvasComponent: !0,
                          children: a(u, {
                            children: a(`p`, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                "--framer-font-size": `12px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.5px`,
                                "--framer-line-height": `26px`,
                                "--framer-text-color": `var(--token-59e77027-930e-45f7-94aa-a8ffadf9e382, rgb(255, 255, 255))`,
                              },
                              children: `This is  Tablet preview,  switch to desktop for the full case study.`,
                            }),
                          }),
                          className: `framer-moassr`,
                          "data-framer-name": `Text`,
                          fonts: [`GF;Geist-500`],
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        l(w, {
                          className: `framer-1hie93f`,
                          opacity: 1,
                          requiresOverflowVisible: !0,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.2 16" overflow="visible"><path d="M 4.484 5.622 L 0.962 2.093 C 0.488 1.612 0.492 0.838 0.972 0.363 C 1.199 0.132 1.509 0.002 1.833 0 C 2.156 -0.002 2.467 0.125 2.697 0.353 L 8.926 6.533 C 11.052 8.665 12.278 11.458 9.904 14.345 L 9.652 14.598 C 8.757 15.495 7.543 16 6.276 16 C 5.009 16 3.794 15.495 2.9 14.598 L 0.349 12.078 C -0.125 11.604 -0.115 10.824 0.371 10.337 C 0.831 9.875 1.555 9.842 2.032 10.245 M 4.484 5.622 L 6.492 7.633 M 4.484 5.622 C 4.009 5.147 3.212 5.158 2.724 5.647 C 2.235 6.137 2.224 6.918 2.697 7.393 L 3.28 7.977 M 3.28 7.977 L 4.707 9.406 M 3.28 7.977 C 2.806 7.501 2.046 7.524 1.558 8.013 C 1.07 8.501 1.058 9.283 1.532 9.758 L 2.032 10.245 M 2.032 10.245 L 2.936 11.125 M 2.032 10.245 C 2.059 10.267 2.084 10.29 2.108 10.315 M 5.708 3.341 C 5.843 2.112 7.299 0.837 9.116 1.71 C 9.289 1.793 9.426 1.95 9.428 2.142 C 9.43 2.451 9.295 2.833 8.86 3.086 C 8.237 3.448 7.219 4.83 8.579 6.194" fill="transparent" stroke="rgb(255, 255, 255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                          withExternalLayout: !0,
                          children: [
                            a(w, {
                              className: `framer-lbn2w9`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.2 16" overflow="visible"><path d="M 4.484 5.622 L 0.962 2.093 C 0.488 1.612 0.492 0.838 0.972 0.363 C 1.199 0.132 1.509 0.002 1.833 0 C 2.156 -0.002 2.467 0.125 2.697 0.353 L 8.926 6.533 C 11.052 8.665 12.278 11.458 9.904 14.345 L 9.652 14.598 C 8.757 15.495 7.543 16 6.276 16 C 5.009 16 3.794 15.495 2.9 14.598 L 0.349 12.078 C -0.125 11.604 -0.115 10.824 0.371 10.337 C 0.831 9.875 1.555 9.842 2.032 10.245" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-1uhybcx`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.008 2.011" overflow="visible"><path d="M 0 0 L 2.008 2.011" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-lzqdy4`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.134 2.704" overflow="visible"><path d="M 2.134 0.349 C 1.66 -0.126 0.862 -0.115 0.374 0.374 C -0.115 0.864 -0.126 1.645 0.348 2.12 L 0.93 2.704" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-6m1oly`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.427 1.43" overflow="visible"><path d="M 0 0 L 1.427 1.43" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-1tihzlc`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2.095 2.612" overflow="visible"><path d="M 2.095 0.344 C 1.622 -0.131 0.862 -0.109 0.374 0.38 C -0.114 0.869 -0.126 1.65 0.348 2.125 L 0.848 2.612" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-1ocwxph`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0 L 0.904 0.88" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-1g1ph6y`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 1" overflow="visible"><path d="M 0 0 C 0.026 0.022 0.052 0.046 0.076 0.07" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                            a(w, {
                              className: `framer-v33gpr`,
                              opacity: 1,
                              requiresOverflowVisible: !1,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3.72 4.772" overflow="visible"><path d="M 0 1.919 C 0.134 0.69 1.59 -0.585 3.408 0.288 C 3.581 0.371 3.718 0.528 3.72 0.72 C 3.722 1.029 3.586 1.411 3.151 1.664 C 2.529 2.026 1.51 3.408 2.87 4.772" fill="transparent"></path></svg>`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  H() &&
                    a(x, {
                      href: { hash: `:BgNtyLH0x`, webPageId: `augiA20Il` },
                      motionChild: !0,
                      nodeId: `Etzd9ve6z`,
                      openInNewTab: !1,
                      scopeId: `YUN0ipZRa`,
                      smoothScroll: !1,
                      children: a(m.a, {
                        className: `framer-s2scbr hidden-cz5ij6 hidden-1sscvvh framer-94nhgv`,
                        "data-border": !0,
                        "data-framer-name": `Button/Primary Button`,
                        "data-reset": `button`,
                        children: a(w, {
                          className: `framer-1aaz62o`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.788 13.728" overflow="visible"><path d="M 7.925 0.852 C 8.019 0.946 8.072 1.074 8.072 1.206 C 8.072 1.339 8.019 1.467 7.925 1.56 L 3.622 5.862 L 17.288 5.862 C 17.565 5.862 17.788 6.086 17.788 6.362 L 17.788 7.362 C 17.788 7.639 17.565 7.862 17.288 7.862 L 3.62 7.862 L 7.925 12.167 C 8.121 12.363 8.121 12.679 7.925 12.874 L 7.217 13.581 C 7.022 13.777 6.706 13.777 6.51 13.581 L 0.146 7.217 C -0.049 7.022 -0.049 6.706 0.146 6.51 L 6.51 0.146 C 6.706 -0.049 7.022 -0.049 7.217 0.146 L 7.925 0.853 Z" fill="rgb(243,243,248)"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  B() &&
                    a(x, {
                      href: { hash: `:BgNtyLH0x`, webPageId: `augiA20Il` },
                      motionChild: !0,
                      nodeId: `QRfLWcayp`,
                      openInNewTab: !1,
                      scopeId: `YUN0ipZRa`,
                      smoothScroll: !1,
                      children: a(m.a, {
                        className: `framer-1cvnlu1 hidden-cz5ij6 hidden-4ry9c1 framer-94nhgv`,
                        "data-border": !0,
                        "data-framer-name": `Button/Primary Button`,
                        "data-reset": `button`,
                        children: a(w, {
                          className: `framer-11ssjoy`,
                          opacity: 1,
                          requiresOverflowVisible: !1,
                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.788 13.728" overflow="visible"><path d="M 7.925 0.852 C 8.019 0.946 8.072 1.074 8.072 1.206 C 8.072 1.339 8.019 1.467 7.925 1.56 L 3.622 5.862 L 17.288 5.862 C 17.565 5.862 17.788 6.086 17.788 6.362 L 17.788 7.362 C 17.788 7.639 17.565 7.862 17.288 7.862 L 3.62 7.862 L 7.925 12.167 C 8.121 12.363 8.121 12.679 7.925 12.874 L 7.217 13.581 C 7.022 13.777 6.706 13.777 6.51 13.581 L 0.146 7.217 C -0.049 7.022 -0.049 6.706 0.146 6.51 L 6.51 0.146 C 6.706 -0.049 7.022 -0.049 7.217 0.146 L 7.925 0.853 Z" fill="rgb(243,243,248)"></path></svg>`,
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                ],
              }),
              a(`div`, { id: `overlay` }),
            ],
          }),
        })
      );
    })),
    (xr = [
      `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
      `.framer-9Th0u.framer-94nhgv, .framer-9Th0u .framer-94nhgv { display: block; }`,
      `.framer-9Th0u.framer-cz5ij6 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
      `.framer-9Th0u .framer-6nmge1-container { flex: none; height: auto; left: 97px; position: fixed; top: 48px; width: auto; z-index: 2; }`,
      `.framer-9Th0u .framer-1a7hfl8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 2000px; overflow: hidden; padding: 0px 0px 50px 0px; position: relative; width: 100%; z-index: 1; }`,
      `.framer-9Th0u .framer-1o058uv { -webkit-filter: grayscale(0); align-content: center; align-items: center; display: flex; filter: grayscale(0); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 2000px; overflow: visible; padding: 126px 80px 62px 80px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
      `.framer-9Th0u .framer-6qjtdj { -webkit-backdrop-filter: blur(0px); align-content: center; align-items: center; backdrop-filter: blur(0px); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 33px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 16px 32px 16px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1uz5zmg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 47%; }`,
      `.framer-9Th0u .framer-1ja7axl { --border-bottom-width: 1px; --border-color: var(--token-30ee69d1-cae6-4a5c-9af2-db5c94a12e77, rgba(255, 255, 255, 0.05)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background: linear-gradient(-7.642439925348299e-8deg, rgba(255, 255, 255, 0.05) 0%, rgba(15, 23, 41, 0.61) 100%); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 6px 16px 6px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-12sjkh0, .framer-9Th0u .framer-5a63tg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
      `.framer-9Th0u .framer-w3mob0, .framer-9Th0u .framer-p2yneh, .framer-9Th0u .framer-1u1mkyz, .framer-9Th0u .framer-fjopo6, .framer-9Th0u .framer-1vxmykw, .framer-9Th0u .framer-ra7msh, .framer-9Th0u .framer-16yfh7w { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
      `.framer-9Th0u .framer-aocisk { flex: none; height: 340px; overflow: visible; position: relative; width: 431px; }`,
      `.framer-9Th0u .framer-1l4lqbz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1750px; opacity: 0.9; overflow: hidden; padding: 40px 80px 0px 80px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-vzvojv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 88px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-14f82to { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 0px 0px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1zyga7, .framer-9Th0u .framer-15kvx3z, .framer-9Th0u .framer-1d1s9x9, .framer-9Th0u .framer-1obgqef, .framer-9Th0u .framer-l8qeek, .framer-9Th0u .framer-12anv1g, .framer-9Th0u .framer-zxn4la, .framer-9Th0u .framer-1hmv3x8, .framer-9Th0u .framer-3bhalo, .framer-9Th0u .framer-8b5fzn, .framer-9Th0u .framer-4a3kla, .framer-9Th0u .framer-4kw51w, .framer-9Th0u .framer-15vtqyg, .framer-9Th0u .framer-136nxdo { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-1qt53ps, .framer-9Th0u .framer-f3azjv, .framer-9Th0u .framer-6rfm38, .framer-9Th0u .framer-cvznjw, .framer-9Th0u .framer-103vd1p, .framer-9Th0u .framer-zg3s21, .framer-9Th0u .framer-h7ame4, .framer-9Th0u .framer-d2xfxz, .framer-9Th0u .framer-1vivnb9, .framer-9Th0u .framer-li78sg, .framer-9Th0u .framer-116avns, .framer-9Th0u .framer-116gajh, .framer-9Th0u .framer-1ciacit, .framer-9Th0u .framer-u41awn, .framer-9Th0u .framer-16ccts8, .framer-9Th0u .framer-fadett, .framer-9Th0u .framer-19q5t1t, .framer-9Th0u .framer-5xzjae, .framer-9Th0u .framer-l5fqvs, .framer-9Th0u .framer-1vycuwe, .framer-9Th0u .framer-1phdcre, .framer-9Th0u .framer-wj4hvj, .framer-9Th0u .framer-6920x, .framer-9Th0u .framer-1uhgrlx, .framer-9Th0u .framer-1573g7w, .framer-9Th0u .framer-14plkfm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-1nw2ak9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 114px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 960px; }`,
      `.framer-9Th0u .framer-jjfh65 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
      `.framer-9Th0u .framer-qqhf0e { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 103px; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-4ld0mg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 37%; }`,
      `.framer-9Th0u .framer-1ngzmux { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 90px; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-1g29ehg, .framer-9Th0u .framer-1cqylzy, .framer-9Th0u .framer-1reyv28, .framer-9Th0u .framer-bv87vx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 12px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-83788w, .framer-9Th0u .framer-112fzvf, .framer-9Th0u .framer-ip2dke, .framer-9Th0u .framer-3h2bk8, .framer-9Th0u .framer-1wjq4y { --border-bottom-width: 1px; --border-color: #243806; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background: linear-gradient(180deg, #000000 16%, rgb(45, 71, 5) 100%); border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 32px; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-1x4xuig { height: 15px; position: relative; width: 15px; }`,
      `.framer-9Th0u .framer-1l2wnbf { height: 15px; left: 0px; position: absolute; top: 0px; width: 15px; }`,
      `.framer-9Th0u .framer-11spzwd { height: 1px; left: 0px; position: absolute; top: 5px; width: 15px; }`,
      `.framer-9Th0u .framer-1xh3pkg { height: 3px; left: 9px; position: absolute; top: 9px; width: 3px; }`,
      `.framer-9Th0u .framer-eubqs1 { height: 1px; left: 0px; position: absolute; top: 0px; width: 3px; }`,
      `.framer-9Th0u .framer-tam3hb { height: 1px; left: 0px; position: absolute; top: 3px; width: 2px; }`,
      `.framer-9Th0u .framer-1bjz52u { height: 1px; left: 4px; position: absolute; top: 3px; width: 3px; }`,
      `.framer-9Th0u .framer-1xn73w9 { height: 1px; left: 0px; position: absolute; top: 0px; width: 1px; }`,
      `.framer-9Th0u .framer-1vmtw4l { height: 1px; left: 3px; position: absolute; top: 0px; width: 1px; }`,
      `.framer-9Th0u .framer-18s0uss { height: 10px; left: 5px; position: absolute; top: 5px; width: 1px; }`,
      `.framer-9Th0u .framer-mqozcz, .framer-9Th0u .framer-11gs6j5, .framer-9Th0u .framer-5oqhuc, .framer-9Th0u .framer-q4y8fo, .framer-9Th0u .framer-1f3ka0f { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-1alei55 { height: 18px; position: relative; width: 14px; }`,
      `.framer-9Th0u .framer-2gr2zt, .framer-9Th0u .framer-bxnmom { height: 18px; left: 0px; position: absolute; top: 0px; width: 14px; }`,
      `.framer-9Th0u .framer-1ct81bh { height: 6px; left: 8px; position: absolute; top: 1px; width: 6px; }`,
      `.framer-9Th0u .framer-3hbyhi { height: 7px; left: 7px; position: absolute; top: 11px; width: 7px; }`,
      `.framer-9Th0u .framer-e3kun2, .framer-9Th0u .framer-51dui9, .framer-9Th0u .framer-1uhybcx { height: 2px; left: 5px; position: absolute; top: 6px; width: 2px; }`,
      `.framer-9Th0u .framer-1dsup79 { height: 6px; left: 0px; position: absolute; top: 0px; width: 6px; }`,
      `.framer-9Th0u .framer-1by2rnc { height: 16px; position: relative; width: 16px; }`,
      `.framer-9Th0u .framer-qo4lh8 { height: 8px; left: 3px; position: absolute; top: 3px; width: 11px; }`,
      `.framer-9Th0u .framer-1vav38r { height: 16px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
      `.framer-9Th0u .framer-12f3r4e { height: 1px; left: 8px; position: absolute; top: 0px; width: 1px; }`,
      `.framer-9Th0u .framer-6gppr6 { height: 1px; left: 15px; position: absolute; top: 8px; width: 1px; }`,
      `.framer-9Th0u .framer-1u0nyg8 { height: 1px; left: 0px; position: absolute; top: 8px; width: 1px; }`,
      `.framer-9Th0u .framer-qbzgxd { height: 1px; left: 13px; position: absolute; top: 3px; width: 1px; }`,
      `.framer-9Th0u .framer-1pyjljd { height: 1px; left: 3px; position: absolute; top: 3px; width: 1px; }`,
      `.framer-9Th0u .framer-10ntotn { height: 2px; left: 5px; position: absolute; top: 12px; width: 7px; }`,
      `.framer-9Th0u .framer-lrnyni { height: 1px; left: 6px; position: absolute; top: 14px; width: 4px; }`,
      `.framer-9Th0u .framer-daiab8 { height: 2px; left: 6px; position: absolute; top: 14px; width: 4px; }`,
      `.framer-9Th0u .framer-3fv52u { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 0px 0px 0px; position: relative; width: 1px; }`,
      `.framer-9Th0u .framer-1yz7rjf, .framer-9Th0u .framer-m0pdzt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-yfmbdx, .framer-9Th0u .framer-qnk3ov, .framer-9Th0u .framer-xaiaq5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-m999in { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1a3elqa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 48px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1maqv7t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1yv7e47 { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.9 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 1px; }`,
      `.framer-9Th0u .framer-1yppyn9 { flex: none; height: 180px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-j14e7k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 14px 10px 14px 10px; position: relative; width: min-content; }`,
      `.framer-9Th0u .framer-3dcg05-container { flex: none; height: auto; position: relative; width: 250px; z-index: 1; }`,
      `.framer-9Th0u .framer-1qx494t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 88%; will-change: var(--framer-will-change-effect-override, transform); }`,
      `.framer-9Th0u .framer-1mm9qre { border-bottom-left-radius: 21px; border-bottom-right-radius: 21px; border-top-left-radius: 21px; border-top-right-radius: 21px; flex: none; gap: 10px; height: 440px; overflow: hidden; position: relative; width: 845px; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-fpakmn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-pecew8 { height: 14px; position: relative; width: 14px; }`,
      `.framer-9Th0u .framer-ci3xs1 { height: 10px; left: 0px; opacity: 0.75; position: absolute; top: 5px; width: 3px; }`,
      `.framer-9Th0u .framer-1o2ir2h { height: 4px; left: 11px; opacity: 0.75; position: absolute; top: 4px; width: 2px; }`,
      `.framer-9Th0u .framer-5uo868 { height: 6px; left: 1px; opacity: 0.75; position: absolute; top: 0px; width: 13px; }`,
      `.framer-9Th0u .framer-ixuher { height: 7px; left: 6px; opacity: 0.75; position: absolute; top: 8px; width: 8px; }`,
      `.framer-9Th0u .framer-5x8mja { height: 7px; left: 0px; opacity: 0.75; position: absolute; top: 0px; width: 3px; }`,
      `.framer-9Th0u .framer-9ebqtc { height: 5px; left: 6px; opacity: 0.75; position: absolute; top: 2px; width: 3px; }`,
      `.framer-9Th0u .framer-tavwmx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 12px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-prv6gn, .framer-9Th0u .framer-1aaz62o, .framer-9Th0u .framer-11ssjoy { height: 14px; position: relative; width: 18px; }`,
      `.framer-9Th0u .framer-knw4x2 { height: 4px; left: 5px; position: absolute; top: 11px; width: 9px; }`,
      `.framer-9Th0u .framer-1ic05ar { height: 5px; left: 7px; position: absolute; top: 4px; width: 5px; }`,
      `.framer-9Th0u .framer-z4cxnr { height: 4px; left: 14px; position: absolute; top: 6px; width: 4px; }`,
      `.framer-9Th0u .framer-tae6eo { height: 4px; left: 13px; position: absolute; top: 0px; width: 4px; }`,
      `.framer-9Th0u .framer-1phqnu3 { height: 4px; left: 0px; position: absolute; top: 6px; width: 4px; }`,
      `.framer-9Th0u .framer-hbmh5l { height: 4px; left: 2px; position: absolute; top: 0px; width: 4px; }`,
      `.framer-9Th0u .framer-yr01r7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-igaej6 { --border-bottom-width: 1px; --border-color: var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: stretch; background-color: #151517; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(255, 255, 255, 0.18), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(255, 255, 255, 0.17), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(255, 255, 255, 0.15), inset 6px 12px 13.416407864998739px -3.75px rgba(255, 255, 255, 0.06); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: auto; justify-content: flex-start; overflow: hidden; padding: 24px 30px 24px 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-10i6d0g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1pmj879, .framer-9Th0u .framer-iv6utp, .framer-9Th0u .framer-1r7eal2, .framer-9Th0u .framer-trfscb, .framer-9Th0u .framer-xz2ilr { border-bottom-left-radius: 42px; border-bottom-right-radius: 42px; border-top-left-radius: 42px; border-top-right-radius: 42px; flex: none; height: 70px; position: relative; width: 70px; }`,
      `.framer-9Th0u .framer-1m1sdzs, .framer-9Th0u .framer-2mr99x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
      `.framer-9Th0u .framer-1nz64f5 { --border-bottom-width: 1px; --border-color: var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #151517; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(255, 255, 255, 0.18), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(255, 255, 255, 0.17), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(255, 255, 255, 0.15), inset 6px 12px 13.416407864998739px -3.75px rgba(255, 255, 255, 0.06); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 30px 24px 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-14s5z1w { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
      `.framer-9Th0u .framer-13aa2ws { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 0px 0px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1piljhs, .framer-9Th0u .framer-z9s8dj, .framer-9Th0u .framer-64wl6b { --border-bottom-width: 1px; --border-color: var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #151517; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(255, 255, 255, 0.18), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(255, 255, 255, 0.17), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(255, 255, 255, 0.15), inset 6px 12px 13.416407864998739px -3.75px rgba(255, 255, 255, 0.06); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 24px 30px 24px 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-al0zpn, .framer-9Th0u .framer-1rk43v, .framer-9Th0u .framer-1oqyqfd, .framer-9Th0u .framer-ocrfeu, .framer-9Th0u .framer-l6n07h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-8navgo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 48px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-cadkkf, .framer-9Th0u .framer-9phf50, .framer-9Th0u .framer-166nia8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-onbfd5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 24px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1mt8z80-container, .framer-9Th0u .framer-dz2tas-container, .framer-9Th0u .framer-17xk1f0-container, .framer-9Th0u .framer-129hfi2-container { flex: none; height: auto; position: relative; width: auto; }`,
      `.framer-9Th0u .framer-1bb0o50 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-185vsya, .framer-9Th0u .framer-omnjf3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1yi67n2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-cy65mb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
      `.framer-9Th0u .framer-14a4dvd, .framer-9Th0u .framer-54m64f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1bxw3id { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 29px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1wcrunp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 40px 10px 20px; position: relative; width: min-content; }`,
      `.framer-9Th0u .framer-mmhm51-container { flex: none; height: auto; position: relative; width: 275px; z-index: 1; }`,
      `.framer-9Th0u .framer-cprqc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1lm0z1w, .framer-9Th0u .framer-v3ij66 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1t5zucn, .framer-9Th0u .framer-10qsndi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-gjf8gn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1q9d0c9 { aspect-ratio: 2.0325604341391217 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 473px); opacity: 0.9; overflow: visible; position: relative; text-decoration: none; width: 100%; }`,
      `.framer-9Th0u .framer-1k2bqrv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-4ypyu, .framer-9Th0u .framer-1xicof3, .framer-9Th0u .framer-lrv68u, .framer-9Th0u .framer-15dw2jl, .framer-9Th0u .framer-1jv1d0b, .framer-9Th0u .framer-18cip71, .framer-9Th0u .framer-uhwuav, .framer-9Th0u .framer-129gy1d, .framer-9Th0u .framer-1uuwb68, .framer-9Th0u .framer-4sogxm, .framer-9Th0u .framer-1mpmpmz, .framer-9Th0u .framer-1gdyytm, .framer-9Th0u .framer-8e1e2h, .framer-9Th0u .framer-19zmuot, .framer-9Th0u .framer-qzrdcc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
      `.framer-9Th0u .framer-1a3kj7r, .framer-9Th0u .framer-rbl9o0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-11fo6dt, .framer-9Th0u .framer-1ak8u9n, .framer-9Th0u .framer-1t59yk6, .framer-9Th0u .framer-h6u7be, .framer-9Th0u .framer-1loswyi, .framer-9Th0u .framer-1aa70zl { --border-bottom-width: 1px; --border-color: #361515; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #140404; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 226px; justify-content: flex-start; overflow: hidden; padding: 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-18kpfhc, .framer-9Th0u .framer-1h3gagd, .framer-9Th0u .framer-1nv64zr, .framer-9Th0u .framer-1wmwnjk, .framer-9Th0u .framer-4uvjyq, .framer-9Th0u .framer-1gy5kkb, .framer-9Th0u .framer-1j9ug5q { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
      `.framer-9Th0u .framer-15b0knz, .framer-9Th0u .framer-1xb8msb, .framer-9Th0u .framer-1al78rv, .framer-9Th0u .framer-dy48v9, .framer-9Th0u .framer-2rt2pb, .framer-9Th0u .framer-nyo0kk, .framer-9Th0u .framer-187c7ye, .framer-9Th0u .framer-ojeox5, .framer-9Th0u .framer-jpumdb, .framer-9Th0u .framer-tit7jh, .framer-9Th0u .framer-194pbx0, .framer-9Th0u .framer-1mtukhk, .framer-9Th0u .framer-p0fwqr { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-1n8p1wt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-kbwb35 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-e7orfs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1cdbueo-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
      `.framer-9Th0u .framer-ktwyw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-vy4c3b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-13gkl6w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-n2pali { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 0px 0px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1fjmw5m { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 98%; }`,
      `.framer-9Th0u .framer-oznrzu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 30px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1vlk2lh { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
      `.framer-9Th0u .framer-1iwcivb { flex: none; gap: 10px; height: 418px; overflow: hidden; position: relative; width: 664px; }`,
      `.framer-9Th0u .framer-39d127 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-tjfhfc-container { flex: none; height: auto; position: relative; width: 960px; }`,
      `.framer-9Th0u .framer-74uoq9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 210px; justify-content: center; overflow: hidden; padding: 8px 0px 0px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1wasxhz, .framer-9Th0u .framer-11td6fn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-20t84g, .framer-9Th0u .framer-oetw5w, .framer-9Th0u .framer-1x02f26, .framer-9Th0u .framer-1mc1wgx, .framer-9Th0u .framer-1o1jdva, .framer-9Th0u .framer-1p3rpr1 { align-content: flex-start; align-items: flex-start; background-color: #10141c; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 12px 16px 12px; position: relative; width: 32%; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-1yhpr1e-container, .framer-9Th0u .framer-10bhk98-container, .framer-9Th0u .framer-xzxqz6-container, .framer-9Th0u .framer-1sxv9vo-container, .framer-9Th0u .framer-ce6on3-container, .framer-9Th0u .framer-5ccnt8-container, .framer-9Th0u .framer-j9i3jb-container, .framer-9Th0u .framer-t1mmmc-container { flex: none; height: auto; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-7lammk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 0px 24px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1a1o77i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1jswc6k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-usqbp2 { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
      `.framer-9Th0u .framer-1bbz1uf { --border-bottom-width: 2px; --border-color: var(--token-a58752c8-168c-47db-857e-906f22f33790, rgba(255, 255, 255, 0.15)); --border-left-width: 2px; --border-right-width: 2px; --border-style: solid; --border-top-width: 2px; align-content: center; align-items: center; background: linear-gradient(180deg, rgba(84, 107, 255, 0.97) 0%, rgb(25, 45, 176) 100%); border-bottom-left-radius: 26px; border-bottom-right-radius: 26px; border-top-left-radius: 26px; border-top-right-radius: 26px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 9px 10px 9px 10px; position: relative; width: min-content; }`,
      `.framer-9Th0u .framer-8mcbm4 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 941px; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-1e3vr9f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: 237px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-16z2bf0, .framer-9Th0u .framer-ixzek4 { --border-bottom-width: 1px; --border-color: var(--token-a9883d9b-c1bd-4bd9-be15-284cd72e1b1f, rgba(255, 255, 255, 0.07)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #151517; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; box-shadow: inset 0.23885756205709185px 0.4777151241141837px 0.534101745699532px -0.9375px rgba(255, 255, 255, 0.18), inset 0.7243518429313553px 1.4487036858627107px 1.6196999604217612px -1.875px rgba(255, 255, 255, 0.17), inset 1.9147960564453386px 3.829592112890677px 4.281614145260301px -2.8125px rgba(255, 255, 255, 0.15), inset 6px 12px 13.416407864998739px -3.75px rgba(255, 255, 255, 0.06); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: 100%; justify-content: flex-start; overflow: hidden; padding: 24px 30px 24px 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
      `.framer-9Th0u .framer-s7y6yb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 88px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; text-decoration: none; width: 100%; }`,
      `.framer-9Th0u .framer-1a1qewv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1jkdtne, .framer-9Th0u .framer-jc3x9q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-y41c53, .framer-9Th0u .framer-1p3ewg6, .framer-9Th0u .framer-f7gw8g { aspect-ratio: 0.9025 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 93px); overflow: visible; position: relative; width: 84px; }`,
      `.framer-9Th0u .framer-1at5t0u { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
      `.framer-9Th0u .framer-1gxj00q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 24px 24px 24px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-jhhyty-container { bottom: 45px; flex: none; height: auto; left: 50%; position: fixed; transform: translateX(-50%); width: auto; z-index: 3; }`,
      `.framer-9Th0u .framer-1b55o0q { align-content: center; align-items: center; background-color: #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 120px; justify-content: center; overflow: visible; padding: 40px 0px 80px 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1wp6u63 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1088px; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-mpsn7h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
      `.framer-9Th0u .framer-yc0to7 { align-content: flex-start; align-items: flex-start; background-color: #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: 120px; justify-content: center; overflow: visible; padding: 40px 16px 40px 16px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-21vpl8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1088px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
      `.framer-9Th0u .framer-1vkr5xu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
      `.framer-9Th0u .framer-vvf1ql { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.06); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #242526; box-shadow: inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6), 0px 6px 10px -1px rgba(255, 255, 255, 0.09); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 10px 8px 10px 8px; position: fixed; right: 0px; top: 0px; z-index: 1; }`,
      `.framer-9Th0u .framer-5uoyhb, .framer-9Th0u .framer-moassr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
      `.framer-9Th0u .framer-za2dop, .framer-9Th0u .framer-1hie93f { height: 16px; position: relative; width: 11px; }`,
      `.framer-9Th0u .framer-1bh60f7, .framer-9Th0u .framer-lbn2w9 { height: 16px; left: 0px; position: absolute; top: 0px; width: 11px; }`,
      `.framer-9Th0u .framer-amomrc, .framer-9Th0u .framer-lzqdy4 { height: 3px; left: 3px; position: absolute; top: 6px; width: 2px; }`,
      `.framer-9Th0u .framer-rlqh5f, .framer-9Th0u .framer-6m1oly { height: 2px; left: 4px; position: absolute; top: 8px; width: 2px; }`,
      `.framer-9Th0u .framer-e2uc11, .framer-9Th0u .framer-1tihzlc { height: 3px; left: 1px; position: absolute; top: 8px; width: 2px; }`,
      `.framer-9Th0u .framer-1et4jr8, .framer-9Th0u .framer-2gkd76, .framer-9Th0u .framer-1ocwxph, .framer-9Th0u .framer-1g1ph6y { height: 1px; left: 2px; position: absolute; top: 10px; width: 1px; }`,
      `.framer-9Th0u .framer-14rvjhk, .framer-9Th0u .framer-v33gpr { height: 5px; left: 6px; position: absolute; top: 2px; width: 4px; }`,
      `.framer-9Th0u .framer-y0xvl5 { --border-bottom-width: 0px; --border-color: rgba(255, 255, 255, 0.06); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: #242526; box-shadow: inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6), 0px 6px 10px -1px rgba(255, 255, 255, 0.09); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 12px 8px 12px 8px; position: fixed; right: 0px; top: 0px; z-index: 1; }`,
      `.framer-9Th0u .framer-s2scbr { --border-bottom-width: 0.25px; --border-color: rgba(255, 255, 255, 0.12); --border-left-width: 0.25px; --border-right-width: 0.25px; --border-style: solid; --border-top-width: 0.25px; align-content: center; align-items: center; background-color: #323645; border-bottom-left-radius: 23px; border-bottom-right-radius: 23px; border-top-left-radius: 23px; border-top-right-radius: 23px; box-shadow: inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6), 0px 3px 30px 12px rgba(0, 0, 0, 0.35); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 46px; justify-content: center; left: 43px; overflow: hidden; padding: 16px 24px 16px 24px; position: fixed; text-decoration: none; top: 80px; width: 52px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
      `.framer-9Th0u .framer-1cvnlu1 { --border-bottom-width: 0.25px; --border-color: rgba(255, 255, 255, 0.12); --border-left-width: 0.25px; --border-right-width: 0.25px; --border-style: solid; --border-top-width: 0.25px; align-content: center; align-items: center; background-color: #323645; border-bottom-left-radius: 23px; border-bottom-right-radius: 23px; border-top-left-radius: 23px; border-top-right-radius: 23px; box-shadow: inset 0px 0.75px 1px 0px rgba(255, 255, 255, 0.24), inset 0px -2px 8px 0px rgba(0, 0, 0, 0.6), 0px 3px 30px 12px rgba(0, 0, 0, 0.35); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; left: 32px; overflow: hidden; padding: 16px 24px 16px 24px; position: fixed; text-decoration: none; top: 72px; width: 52px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
      ...Gn,
      ...re,
      `.framer-9Th0u[data-border="true"]::after, .framer-9Th0u [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      `@media (max-width: 809.98px) { .framer-9Th0u.framer-cz5ij6 { width: 390px; } .framer-9Th0u .framer-1a7hfl8 { padding: 0px 0px 2px 0px; } .framer-9Th0u .framer-1o058uv { order: 0; padding: 126px 0px 24px 0px; } .framer-9Th0u .framer-6qjtdj { flex-direction: column; gap: 12px; padding: 16px 32px 0px 32px; } .framer-9Th0u .framer-1uz5zmg { order: 0; width: 100%; } .framer-9Th0u .framer-w3mob0, .framer-9Th0u .framer-5uoyhb { order: 1; } .framer-9Th0u .framer-p2yneh { order: 2; width: 100%; } .framer-9Th0u .framer-aocisk { height: 234px; order: 1; width: 78%; } .framer-9Th0u .framer-1l4lqbz { gap: 32px; order: 1; padding: 40px 32px 0px 32px; } .framer-9Th0u .framer-vzvojv { gap: 48px; order: 0; padding: 0px; } .framer-9Th0u .framer-jc3x9q { flex-direction: column; order: 2; padding: 8px 24px 24px 24px; } .framer-9Th0u .framer-1at5t0u { flex: none; width: 100%; } .framer-9Th0u .framer-21vpl8, .framer-9Th0u .framer-za2dop { order: 0; } .framer-9Th0u .framer-vvf1ql { padding: 12px 8px 12px 8px; }}`,
      `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-9Th0u.framer-cz5ij6 { width: 810px; } .framer-9Th0u .framer-1a7hfl8 { padding: 0px 0px 18px 0px; } .framer-9Th0u .framer-1o058uv { max-width: 1999px; order: 0; padding: 160px 0px 56px 0px; } .framer-9Th0u .framer-6qjtdj { gap: 0px; order: 0; padding: 0px; } .framer-9Th0u .framer-1uz5zmg { width: min-content; } .framer-9Th0u .framer-w3mob0 { width: 356px; } .framer-9Th0u .framer-p2yneh { width: 402px; } .framer-9Th0u .framer-aocisk { height: 238px; width: 40%; } .framer-9Th0u .framer-1l4lqbz { align-content: flex-start; align-items: flex-start; gap: 60px; order: 1; padding: 40px 32px 0px 32px; } .framer-9Th0u .framer-vzvojv { gap: 80px; order: 0; padding: 0px 32px 0px 32px; } .framer-9Th0u .framer-1nw2ak9 { flex-direction: column; gap: 48px; order: 0; width: 739px; } .framer-9Th0u .framer-3fv52u { flex: none; order: 0; width: 100%; } .framer-9Th0u .framer-1gxj00q { order: 3; } .framer-9Th0u .framer-1b55o0q { padding: 40px 0px 40px 0px; width: 100%; } .framer-9Th0u .framer-mpsn7h { gap: 24px; } .framer-9Th0u .framer-moassr { order: 1; } .framer-9Th0u .framer-1hie93f { order: 0; }}`,
    ]),
    (Sr = V(br, xr, `framer-9Th0u`)),
    (Cr = Sr),
    (Sr.displayName = `Page`),
    (Sr.defaultProps = { height: 16369, width: 1200 }),
    E(
      Sr,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Geist`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4mJPby1QNtA.woff2`,
              weight: `400`,
            },
            {
              family: `Geist`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2`,
              weight: `600`,
            },
            {
              family: `Geist`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
              weight: `500`,
            },
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
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
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
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Geist`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4mJPby1QNtA.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
              weight: `400`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2`,
              weight: `700`,
            },
            {
              family: `Covered By Your Grace`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/coveredbyyourgrace/v17/QGYwz-AZahWOJJI9kykWW9mD6opopoqXSOS0EwItq6bFIg.woff2`,
              weight: `400`,
            },
            {
              family: `Satoshi`,
              source: `fontshare`,
              style: `normal`,
              url: `https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2`,
              weight: `500`,
            },
          ],
        },
        ...Jn,
        ...Xn,
        ...Qn,
        ...$n,
        ...er,
        ...tr,
        ...nr,
        ...rr,
        ...ir,
        ...ar,
        ...or,
        ...j(Wn),
        ...j(U),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (wr = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerYUN0ipZRa`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `16369`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Ph7JVtEPW":{"layout":["fixed","auto"]},"dY2OPVKkO":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    });
})();
export { wr as __FramerMetadata__, Cr as default };
//# sourceMappingURL=JslIwwkjxClaNjFYfTOtAIHicjcTTfp0nJguH9f4K5w.CBKPMHnA.mjs.map
