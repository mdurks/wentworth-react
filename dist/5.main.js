(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{46:function(e,n,t){"use strict";t.r(n);var a=t(2),i=t.n(a),r=t(89),o=t(23),l=t.n(o),d=t(82),c=t.n(d),m=t(81),p=t(80);function u(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n  query {\n    products(\n      where: { slug_contains: "','" }\n      ) {\n        id\n        name\n        price\n        description\n        productType\n        createdAt\n        detailedDescription {\n          html\n        }\n        image {\n          id\n          url\n          handle\n          width\n          height\n        }\n      }\n    }\n    ']);return u=function(){return e},e}m.b.div.withConfig({displayName:"Details__Styled_ProductItem",componentId:"sc-1mk3hh8-0"})(["margin-bottom:40px;padding-bottom:30px;border-bottom:1px dashed #bdbdbd;@media (min-width:768px){border:none;}"]);var s=m.b.div.withConfig({displayName:"Details__Styled_Img",componentId:"sc-1mk3hh8-1"})(["@media (min-width:768px){width:50%;margin:0 auto 25px;}"]),h=m.b.h2.withConfig({displayName:"Details__Styled_Title",componentId:"sc-1mk3hh8-2"})(["@media (min-width:768px){text-align:center;}"]),g=m.b.div.withConfig({displayName:"Details__Styled_CMScontent",componentId:"sc-1mk3hh8-3"})(["img{height:auto;}"]);n.default=function(e){var n=l()(u(),e.match.params.id);return console.log("SINGLE_PRODUCT_QUERY: ",n),i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{query:n},(function(e){var n=e.loading,t=e.error,a=e.data;if(n)return i.a.createElement(p.b,null,"Loading...");if(t)return i.a.createElement(p.b,null,"Error loading welcome");var r=a.products[0];return console.log("Details data: ",r),document.title="".concat(r.name," - ").concat(r.productType," - Wentworth Jewels"),document.description=r.description,i.a.createElement(i.a.Fragment,null,i.a.createElement(p.b,null,i.a.createElement(h,null,r.name),i.a.createElement("p",null,r.description),i.a.createElement(s,null,i.a.createElement(c.a,{image:r.image[0],transforms:["quality=value:80"],maxWidth:500})),i.a.createElement(g,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.detailedDescription.html}}),i.a.createElement("p",null,"£",r.price))))})))}},80:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(81),i=a.b.section.withConfig({displayName:"commonStyles__Styled_SiteContainer",componentId:"zyjwao-0"})(["display:block;width:calc(100% - 30px);max-width:1060px;margin:auto;padding:15px;",";",";",";",";"],(function(e){return e.mainNav&&Object(a.a)(["padding:0 0 30px;"])}),(function(e){return e.textCenter&&Object(a.a)(["text-align:center;"])}),(function(e){return e.mainFooter&&Object(a.a)(["margin-bottom:10px;padding-bottom:100px;"])}),(function(e){return e.productFlexList&&Object(a.a)(["display:flex;flex-flow:row wrap;> a:hover{text-decoration:none;}@media (min-width:768px){> a{display:inline-block;width:calc(50% - 20px);margin-top:20px;margin-bottom:20px;padding:10px 20px;background-color:hsla(0,0%,98%,1);:hover{background-color:hsla(0,0%,93%,1);}:nth-child(odd){margin-right:20px;}:nth-child(even){margin-left:20px;}}}"])}));n.b=i}}]);