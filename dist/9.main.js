(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{52:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(89),c=n(23),i=n.n(c),d=n(24),l=n(82),p=n.n(l),u=n(81),m=Object(u.b)(d.b).withConfig({displayName:"Product__Styled_ProductItem",componentId:"sroqae-0"})(["margin-bottom:40px;padding-bottom:30px;border-bottom:1px dashed #bdbdbd;@media (min-width:768px){border:none;}"]),s=u.b.div.withConfig({displayName:"Product__Styled_Img",componentId:"sroqae-1"})(["margin-bottom:25px;"]),g=u.b.h2.withConfig({displayName:"Product__Styled_Title",componentId:"sroqae-2"})(["@media (min-width:768px){min-height:80px;text-align:center;}"]),h=function(e){return o.a.createElement(m,{to:"/".concat(e.category,"/").concat(e.product.slug,"/")},o.a.createElement(g,null,e.product.name),o.a.createElement(s,null,o.a.createElement(p.a,{image:e.product.image[0],transforms:["quality=value:80"],maxWidth:500})),o.a.createElement("div",null,o.a.createElement("p",null,e.product.description),o.a.createElement("p",null,"£",e.product.price)))},b=n(80);function f(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    query {\n      products(orderBy: updatedAt_DESC, where: {productType: ",", AND: {categoryType_contains_some: ","}}) {\n        id\n        slug\n        name\n        categoryType\n        productType\n        price\n        description\n        createdAt\n        image {\n          id\n          url\n          handle\n          width\n          height\n        }\n      }\n    }\n  "]);return f=function(){return e},e}t.default=function(e){var t=e.match.url.split("/")[1],n=e.match.params.id;console.log("categoryType: ",t),console.log("productType: ",n);var r=i()(f(),n,t);return document.title="".concat(t," - ").concat(n," - Wentworth Jewels"),document.description="Description for jewellery with Wentworth Jewels",o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{query:r},(function(e){var r=e.loading,a=e.error,c=e.data;if(r)return o.a.createElement(b.b,null,"Fetching products...");if(a)return o.a.createElement(b.b,null,"Error fetching products");var i,d=c.products;return console.log("Product Listing: ",d,"length: ",d.length),d.length||(i="There are no items found."),o.a.createElement(o.a.Fragment,null,o.a.createElement(b.b,{productFlexList:!0},d.map((function(e){return o.a.createElement(h,{key:e.id,category:"".concat(t,"/").concat(n),product:e})})),i))})))}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(81),o=r.b.section.withConfig({displayName:"commonStyles__Styled_SiteContainer",componentId:"zyjwao-0"})(["display:block;width:calc(100% - 30px);max-width:1060px;margin:auto;padding:15px;",";",";",";",";"],(function(e){return e.mainNav&&Object(r.a)(["padding:0 0 30px;"])}),(function(e){return e.textCenter&&Object(r.a)(["text-align:center;"])}),(function(e){return e.mainFooter&&Object(r.a)(["margin-bottom:10px;padding-bottom:100px;"])}),(function(e){return e.productFlexList&&Object(r.a)(["display:flex;flex-flow:row wrap;> a:hover{text-decoration:none;}@media (min-width:768px){> a{display:inline-block;width:calc(50% - 20px);margin-top:20px;margin-bottom:20px;padding:10px 20px;background-color:hsla(0,0%,98%,1);:hover{background-color:hsla(0,0%,93%,1);}:nth-child(odd){margin-right:20px;}:nth-child(even){margin-left:20px;}}}"])}));t.b=o}}]);