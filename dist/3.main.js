(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{47:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(89),a=n(23),c=n.n(a),u=n(80),l=n(81);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  query {\n    abouts {\n      heroHeading\n      firstIntroMessage {\n        html\n      }\n    }\n  }\n"]);return h=function(){return t},t}var g=u.b.div.withConfig({displayName:"About__Styled_CMScontent",componentId:"sc-100irxr-0"})(["img{height:auto;}"]),w=c()(h()),v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(c,t);var e,n,r,a=m(c);function c(){return p(this,c),a.apply(this,arguments)}return e=c,(n=[{key:"componentDidMount",value:function(){document.title="About Wentworth Jewels",document.description="Description for About Wentworth Jewels"}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{query:w},(function(t){var e=t.loading,n=t.error,r=t.data;if(e)return o.a.createElement(l.a,null,"Loading...");if(n)return o.a.createElement(l.a,null,"Error loading welcome");var i=r.abouts[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null,o.a.createElement("h1",null,i.heroHeading),o.a.createElement(g,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:i.firstIntroMessage.html}}))))})))}}])&&s(e.prototype,n),r&&s(e,r),c}(r.Component);e.default=v},81:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(80),o=r.b.section.withConfig({displayName:"commonStyles__Styled_SiteContainer",componentId:"zyjwao-0"})(["display:block;width:calc(100% - 30px);max-width:1060px;margin:auto;padding:15px;",";",";",";",";"],(function(t){return t.mainNav&&Object(r.a)(["padding:0 0 30px;"])}),(function(t){return t.textCenter&&Object(r.a)(["text-align:center;"])}),(function(t){return t.mainFooter&&Object(r.a)(["margin-bottom:10px;padding-bottom:100px;"])}),(function(t){return t.productFlexList&&Object(r.a)(["display:flex;flex-flow:row wrap;> a:hover{text-decoration:none;}@media (min-width:768px){> a{display:inline-block;width:calc(50% - 20px);margin-top:20px;margin-bottom:20px;padding:10px 20px;background-color:hsla(0,0%,98%,1);:hover{background-color:hsla(0,0%,93%,1);}:nth-child(odd){margin-right:20px;}:nth-child(even){margin-left:20px;}}}"])}));e.b=o}}]);