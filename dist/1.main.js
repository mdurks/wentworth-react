(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{57:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),l=t(88),c=t(24),u=t.n(c),o=t(20);function i(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  query {\n    contacts {\n      heroHeading\n      firstIntroMessage\n    }\n  }\n"]);return i=function(){return e},e}document.title="Contact Wentworth Jewels";var s=u()(i());n.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{query:s},(function(e){var n=e.loading,t=e.error,r=e.data;if(n)return a.a.createElement(o.b,null,"Loading...");if(t)return a.a.createElement(o.b,null,"Error loading welcome");var l=r.contacts[0];return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.b,null,a.a.createElement("h1",null,l.heroHeading),a.a.createElement("p",null,l.firstIntroMessage)))})))}}}]);