(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{61:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(94),i=n(24),u=n.n(i),a=n(95),l=n(18);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  query {\n    products(orderBy: updatedAt_DESC, where: { productType: Other }) {\n      id\n      slug\n      name\n      productType\n      price\n      description\n      createdAt\n      image {\n        id\n        url\n        handle\n        width\n        height\n      }\n    }\n  }\n"]);return b=function(){return e},e}var h=u()(b()),w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,r,i=s(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).state={cartitems:[]},t}return t=u,(n=[{key:"componentDidMount",value:function(){document.title="Jewellery Wentworth Jewels",document.description="Description for jewellery with Wentworth Jewels"}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{query:h},(function(e){var t=e.loading,n=e.error,r=e.data;if(t)return o.a.createElement(l.b,null,"Fetching products...");if(n)return o.a.createElement(l.b,null,"Error fetching products");var c=r.products;return console.log(c),o.a.createElement(l.b,{productFlexList:!0},c.map((function(e){return o.a.createElement(a.a,{key:e.id,product:e})})))})))}}])&&f(t.prototype,n),r&&f(t,r),u}(r.Component);t.default=w},95:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=n(6),i=n(31),u=n.n(i),a=n(8),l=Object(a.b)(c.b).withConfig({displayName:"Product__Styled_ProductItem",componentId:"sroqae-0"})(["margin-bottom:40px;padding-bottom:30px;border-bottom:1px dashed #bdbdbd;@media (min-width:768px){border:none;}"]),p=a.b.div.withConfig({displayName:"Product__Styled_Img",componentId:"sroqae-1"})(["margin-bottom:25px;"]),f=a.b.h2.withConfig({displayName:"Product__Styled_Title",componentId:"sroqae-2"})(["@media (min-width:768px){min-height:80px;text-align:center;}"]);t.a=function(e){return o.a.createElement(l,{to:"/".concat(e.category,"/").concat(e.product.slug,"/")},o.a.createElement(f,null,e.product.name),o.a.createElement(p,null,o.a.createElement(u.a,{image:e.product.image[0],transforms:["quality=value:80"],maxWidth:500})),o.a.createElement("div",null,o.a.createElement("p",null,e.product.description),o.a.createElement("p",null,"£",e.product.price)))}}}]);