(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{56:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r.n(t),l=r(87),c=r(23),u=r.n(c),o=r(18);function i(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  query {\n    contacts {\n      heroHeading\n      firstIntroMessage\n    }\n  }\n"]);return i=function(){return e},e}var s=u()(i());n.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{query:s},(function(e){var n=e.loading,r=e.error,t=e.data;if(n)return a.a.createElement(o.b,null,"Loading...");if(r)return a.a.createElement(o.b,null,"Error loading welcome");var l=t.contacts[0];return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.b,null,a.a.createElement("h1",null,l.heroHeading),a.a.createElement("p",null,l.firstIntroMessage)))})))}}}]);