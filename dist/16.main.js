(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    44: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(2),
        i = n.n(a),
        o = n(24),
        l = n(84),
        r = n(85);
      function c(e) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function u(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            a = b(e);
          if (t) {
            var i = b(this).constructor;
            n = Reflect.construct(a, arguments, i);
          } else n = a.apply(this, arguments);
          return m(this, n);
        };
      }
      function m(e, t) {
        return !t || ("object" !== c(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var g = l.b.button.withConfig({
          displayName: "MainNav__Styled_BurgerBtn",
          componentId: "sc-1ce12cc-0",
        })([
          'position:absolute;top:20px;right:20px;width:45px;height:40px;padding:12px 11px;background-color:#000;border-radius:4px;border:none;text-indent:-9999px;font-size:16px;cursor:pointer;outline:none;z-index:15;@media (min-width:768px){display:none;}div:before,div:after,div{position:relative;top:0;height:3px;display:block;background-color:white;pointer-events:none;transition:all ease 0.3s;}div{.pageNoScrollY &{background:none;}}div:before{top:-7px;content:"";.pageNoScrollY &{top:-1px;transform:rotate(45deg);}}div:after{top:4px;content:"";.pageNoScrollY &{top:-4px;transform:rotate(-45deg);}}',
        ]),
        f = l.b.nav.withConfig({
          displayName: "MainNav__Styled_Nav",
          componentId: "sc-1ce12cc-1",
        })([
          "position:absolute;top:0;left:0;width:100%;height:100vh;padding:90px 0 0;background-color:hsl(53,90%,87%);transition:all ease 0.4s;opacity:0;z-index:10;pointer-events:none;overflow:scroll;.pageNoScrollY &{opacity:1;pointer-events:all;}@media (min-width:768px){position:relative;display:block;padding:0;height:auto;background:none;opacity:1;pointer-events:all;overflow:visible;}",
        ]),
        y = l.b.ul.withConfig({
          displayName: "MainNav__Styled_MainNav",
          componentId: "sc-1ce12cc-2",
        })([
          "margin:0;padding:0;list-style-type:none;@media (min-width:768px){position:relative;display:flex;justify-content:space-evenly;text-align:center;border-bottom:2px dotted #dedede;}",
        ]),
        h = l.b.li.withConfig({
          displayName: "MainNav__Styled_ToplevelItem",
          componentId: "sc-1ce12cc-3",
        })([
          'position:relative;border-bottom:1px solid black;@media (min-width:768px){position:initial;display:inline-block;border:none;}@media (max-width:767px){&.hasSubMenu:after{content:"";position:absolute;top:22px;right:20px;width:15px;height:15px;border:4px solid black;border-left:none;border-top:none;transform:rotate(45deg);transition:all ease 0.3s;}&.hasSubMenu.openSubMenu:after{top:26px;transform:rotate(-135deg);}}',
        ]),
        x = Object(l.b)(o.c).withConfig({
          displayName: "MainNav__StyledLink",
          componentId: "sc-1ce12cc-4",
        })([
          'display:block;padding:20px;font-size:15px;font-family:"Playfair Display",serif;text-transform:uppercase;font-weight:bold;@media (min-width:768px){display:inline-block;padding:20px 0;font-size:18px;}:hover{text-decoration:none;}.hasSubMenu &{display:inline-block;}@media (min-width:768px){&.is-active:after{content:"";display:block;position:relative;left:0;bottom:-4px;width:100%;height:2px;background-color:#000;}}',
        ]),
        v = l.b.div.withConfig({
          displayName: "MainNav__Styled_SubMenuContainer",
          componentId: "sc-1ce12cc-5",
        })(
          [
            "display:none;text-align:left;background-color:hsl(53,100%,92%);@media (min-width:768px){position:absolute;width:100%;top:65px;left:0;padding:20px;border-top:2px dotted #dedede;z-index:10;}.openSubMenu &{display:block;}> p{display:none;@media (min-width:768px){display:block;margin:0 0 10px 20px;}}ul > li{flex:1 0 auto;a{padding:20px;display:block;:hover{text-decoration:none;background-color:hsl(53,100%,85%);}}}> ul{list-style-type:none;margin:0 0 20px;padding:0;@media (min-width:768px){display:flex;margin:0;}}@media (min-width:768px) and (hover:hover){",
            ":hover &{display:block;}}",
          ],
          h
        ),
        E = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(c, e);
          var t,
            n,
            a,
            l = u(c);
          function c() {
            return d(this, c), l.apply(this, arguments);
          }
          return (
            (t = c),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = document.getElementById("mobileBurgerBtn"),
                    t = document.documentElement,
                    n = document.getElementById("mainNav");
                  document.getElementsByClassName("hasSubMenu"),
                    e.addEventListener("click", function () {
                      t.classList.toggle("pageNoScrollY");
                    }),
                    n.addEventListener("click", function (e) {
                      var n = e.target;
                      n.matches("a") && t.classList.remove("pageNoScrollY"),
                        n.matches(".hasSubMenu") &&
                          n.classList.toggle("openSubMenu");
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      g,
                      { id: "mobileBurgerBtn" },
                      i.a.createElement("div", null)
                    ),
                    i.a.createElement(
                      f,
                      { id: "mainNav" },
                      i.a.createElement(
                        r.a,
                        { mainNav: !0 },
                        i.a.createElement(
                          y,
                          null,
                          i.a.createElement(
                            h,
                            { className: "hasSubMenu" },
                            i.a.createElement(
                              x,
                              {
                                activeClassName: "is-active",
                                to: "/engagement/",
                              },
                              "Engagement"
                            ),
                            i.a.createElement(
                              v,
                              null,
                              i.a.createElement("p", null, "Engagement:"),
                              i.a.createElement(
                                "ul",
                                null,
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/engagement/classic-diamond-ring/" },
                                    "Classic diamond ring"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/engagement/coloured/" },
                                    "Coloured"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/engagement/trilogy/" },
                                    "Trilogy"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/engagement/wedding band/" },
                                    "Wedding band"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/engagement/Rejuvenated rings/" },
                                    "Rejuvenated rings"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/engagement/bespoke design/" },
                                    "Bespoke design"
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement(
                            h,
                            { className: "hasSubMenu" },
                            i.a.createElement(
                              x,
                              {
                                activeClassName: "is-active",
                                to: "/weddings/",
                              },
                              "Weddings"
                            ),
                            i.a.createElement(
                              v,
                              null,
                              i.a.createElement("p", null, "Weddings:"),
                              i.a.createElement(
                                "ul",
                                null,
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/weddings/ring/" },
                                    "Ring"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/weddings/gifts/" },
                                    "Gifts"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/weddings/earring/" },
                                    "Earring"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/weddings/necklace/" },
                                    "Necklace"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/weddings/tiara/" },
                                    "Tiara"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/weddings/bespoke design/" },
                                    "Bespoke design"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/weddings/eternity ring/" },
                                    "Eternity ring"
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement(
                            h,
                            { className: "hasSubMenu" },
                            i.a.createElement(
                              x,
                              {
                                activeClassName: "is-active",
                                to: "/jewellery/",
                              },
                              "Jewellery"
                            ),
                            i.a.createElement(
                              v,
                              null,
                              i.a.createElement("p", null, "Jewellery:"),
                              i.a.createElement(
                                "ul",
                                null,
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/jewellery/rings/" },
                                    "Rings"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/jewellery/earrings/" },
                                    "Earrings"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/jewellery/necklaces/" },
                                    "Necklaces"
                                  )
                                ),
                                i.a.createElement(
                                  "li",
                                  null,
                                  i.a.createElement(
                                    o.b,
                                    { to: "/jewellery/bracelets/" },
                                    "Bracelets"
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement(
                            h,
                            null,
                            i.a.createElement(
                              x,
                              { activeClassName: "is-active", to: "/contact/" },
                              "Collections"
                            )
                          ),
                          i.a.createElement(
                            h,
                            null,
                            i.a.createElement(
                              x,
                              { activeClassName: "is-active", to: "/contact/" },
                              "Gifts"
                            )
                          ),
                          i.a.createElement(
                            h,
                            null,
                            i.a.createElement(
                              x,
                              { activeClassName: "is-active", to: "/contact/" },
                              "Time piece"
                            )
                          ),
                          i.a.createElement(
                            h,
                            null,
                            i.a.createElement(
                              x,
                              { activeClassName: "is-active", to: "/about/" },
                              "Heritage"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]) && s(t.prototype, n),
            a && s(t, a),
            c
          );
        })(a.Component);
      t.default = E;
    },
    85: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n(84),
        i = a.b.section.withConfig({
          displayName: "commonStyles__Styled_SiteContainer",
          componentId: "zyjwao-0",
        })(
          [
            "display:block;width:calc(100% - 30px);max-width:1060px;margin:auto;padding:15px;",
            ";",
            ";",
            ";",
            ";",
          ],
          function (e) {
            return e.mainNav && Object(a.a)(["padding:0 0 30px;"]);
          },
          function (e) {
            return e.textCenter && Object(a.a)(["text-align:center;"]);
          },
          function (e) {
            return (
              e.mainFooter &&
              Object(a.a)(["margin-bottom:10px;padding-bottom:100px;"])
            );
          },
          function (e) {
            return (
              e.productFlexList &&
              Object(a.a)([
                "display:flex;flex-flow:row wrap;> a:hover{text-decoration:none;}@media (min-width:768px){> a{display:inline-block;width:calc(50% - 20px);margin-top:20px;margin-bottom:20px;padding:10px 20px;background-color:hsla(0,0%,98%,1);:hover{background-color:hsla(0,0%,93%,1);}:nth-child(odd){margin-right:20px;}:nth-child(even){margin-left:20px;}}}",
              ])
            );
          }
        );
      t.b = i;
    },
  },
]);
