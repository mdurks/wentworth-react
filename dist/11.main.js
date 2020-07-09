(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{50:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(95),c=n(23),a=n.n(c),u=n(86),l=n(85);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  query {\n    products(orderBy: updatedAt_DESC, where: { productType: Necklace }) {\n      id\n      slug\n      name\n      productType\n      price\n      description\n      createdAt\n      image {\n        id\n        url\n        handle\n        width\n        height\n      }\n    }\n  }\n"]);return y=function(){return t},t}var h=a()(y()),g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n,r,c=m(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this,t)).state={cartitems:[]},e}return e=a,(n=[{key:"componentDidMount",value:function(){document.title="Jewellery Wentworth Jewels",document.description="Description for jewellery with Wentworth Jewels"}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{query:h},(function(t){var e=t.loading,n=t.error,r=t.data;if(e)return o.a.createElement(l.b,null,"Fetching products...");if(n)return o.a.createElement(l.b,null,"Error fetching products");var i=r.products;return console.log(i),o.a.createElement(l.b,{productFlexList:!0},i.map((function(t){return o.a.createElement(u.a,{key:t.id,product:t})})))})))}}])&&d(e.prototype,n),r&&d(e,r),a}(r.Component);e.default=g},85:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(84),o=r.b.section.withConfig({displayName:"commonStyles__Styled_SiteContainer",componentId:"zyjwao-0"})(["display:block;width:calc(100% - 30px);max-width:1060px;margin:auto;padding:15px;",";",";",";",";"],(function(t){return t.mainNav&&Object(r.a)(["padding:0 0 30px;"])}),(function(t){return t.textCenter&&Object(r.a)(["text-align:center;"])}),(function(t){return t.mainFooter&&Object(r.a)(["margin-bottom:10px;padding-bottom:100px;"])}),(function(t){return t.productFlexList&&Object(r.a)(["display:flex;flex-flow:row wrap;> a:hover{text-decoration:none;}@media (min-width:768px){> a{display:inline-block;width:calc(50% - 20px);margin-top:20px;margin-bottom:20px;padding:10px 20px;background-color:hsla(0,0%,98%,1);:hover{background-color:hsla(0,0%,93%,1);}:nth-child(odd){margin-right:20px;}:nth-child(even){margin-left:20px;}}}"])}));e.b=o},86:function(t,e,n){"use strict";var r=n(2),o=n.n(r),i=n(24),c=n(87),a=n.n(c),u=n(84),l=Object(u.b)(i.b).withConfig({displayName:"Product__Styled_ProductItem",componentId:"sroqae-0"})(["margin-bottom:40px;padding-bottom:30px;border-bottom:1px dashed #bdbdbd;@media (min-width:768px){border:none;}"]),p=u.b.div.withConfig({displayName:"Product__Styled_Img",componentId:"sroqae-1"})(["margin-bottom:25px;"]),d=u.b.h2.withConfig({displayName:"Product__Styled_Title",componentId:"sroqae-2"})(["@media (min-width:768px){min-height:80px;text-align:center;}"]);e.a=function(t){return o.a.createElement(l,{to:"/".concat(t.category,"/").concat(t.product.slug,"/")},o.a.createElement(d,null,t.product.name),o.a.createElement(p,null,o.a.createElement(a.a,{image:t.product.image[0],transforms:["quality=value:80"],maxWidth:500})),o.a.createElement("div",null,o.a.createElement("p",null,t.product.description),o.a.createElement("p",null,"£",t.product.price)))}}}]);