(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/e88":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"3CW5":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),c=n("AJ07"),l=n.n(c);e.a=function(t){var e=t.pageContext,n=e.previousPagePath,r=e.nextPagePath;return a.a.createElement("nav",{className:l.a.pagenav},a.a.createElement("div",{className:l.a.pagenav__item},n&&a.a.createElement(i.Link,{to:n},"← Newer Posts")),a.a.createElement("div",{className:l.a.pagenav__item},r&&a.a.createElement(i.Link,{to:r},"Older Posts →")))}},"6VaU":function(t,e,n){"use strict";var r=n("XKFU"),a=n("xF/b"),i=n("S/j/"),c=n("ne8i"),l=n("2OiF"),o=n("zRwo");r(r.P,"Array",{flatMap:function(t){var e,n,r=i(this);return l(t),e=c(r.length),n=o(r,0),a(n,r,r,e,0,1,t,arguments[1]),n}}),n("nGyu")("flatMap")},"6WUh":function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return v}));n("0mN4");var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),c=n("9eSz"),l=n.n(c),o=n("LvDl"),u=n.n(o),s=n("E4U4"),f=n.n(s),m=n("Bl7J"),d=n("vrFN"),p=n("3CW5"),g=function(t){var e=t.condition,n=t.wrapper,r=t.children;return e?n(r):r};e.default=function(t){var e=t.data,n=t.pageContext,r=e.allMarkdownRemark.edges;return a.a.createElement(m.a,null,a.a.createElement(d.a,{title:"Articles",description:"All articles published by the Project",image:"/logo.png",pathname:"/articles"}),a.a.createElement("section",{className:f.a.articlelist},a.a.createElement("h2",null,"Articles"),a.a.createElement("ul",null,r.map((function(t,e){var n=t.node;return a.a.createElement("li",{key:e,className:f.a.listitem},n.frontmatter.featimg&&a.a.createElement("figure",{className:f.a.featimg},a.a.createElement(i.Link,{to:n.fields.slug},a.a.createElement(l.a,{fixed:n.frontmatter.featimg.childImageSharp.fixed,alt:n.frontmatter.title}))),a.a.createElement(g,{condition:n.frontmatter.featimg,wrapper:function(t){return a.a.createElement("div",{className:f.a.article__wrap},t)}},a.a.createElement(i.Link,{to:n.fields.slug},a.a.createElement("h1",{className:f.a.article__title},n.frontmatter.title)),a.a.createElement("div",{className:f.a.article__meta},"by ",n.frontmatter.author,". Published"," ",new Date(n.frontmatter.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})," "),a.a.createElement("div",{className:f.a.article__tax},"Filed under:"," ",n.frontmatter.subject.map((function(t,e){return[e>0&&", ",a.a.createElement(i.Link,{key:e,to:"/subjects/"+u.a.kebabCase(t)},t)]}))),a.a.createElement("div",{className:f.a.article__content,dangerouslySetInnerHTML:{__html:n.excerpt}})))})))),a.a.createElement(p.a,{pageContext:n}))};var v="517238989"},"7VC1":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*c,"String",{padEnd:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"9XZr":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*c,"String",{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},AJ07:function(t,e,n){t.exports={pagenav:"pagination-module--pagenav--1yqJC",pagenav__item:"pagination-module--pagenav__item--lUZdj",customMedia:{},customProperties:{},customSelectors:{}}},AphP:function(t,e,n){"use strict";var r=n("XKFU"),a=n("S/j/"),i=n("apmT");r(r.P+r.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=a(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},E4U4:function(t,e,n){t.exports={articlelist:"articles-module--articlelist--2Iovd",article__meta:"articles-module--article__meta--2IK0U",article__tax:"articles-module--article__tax--3tE4X",listitem:"articles-module--listitem--NtnIq",featimg:"articles-module--featimg--2qBkd",article__title:"articles-module--article__title--2RRh0",article__content:"articles-module--article__content--P4Opw",customMedia:{},customProperties:{},customSelectors:{}}},FLlr:function(t,e,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},I74W:function(t,e,n){"use strict";n("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},Lgjv:function(t,e,n){var r=n("ne8i"),a=n("l0Rn"),i=n("vhPU");t.exports=function(t,e,n,c){var l=String(i(t)),o=l.length,u=void 0===n?" ":String(n),s=r(e);if(s<=o||""==u)return l;var f=s-o,m=a.call(u,Math.ceil(f/u.length));return m.length>f&&(m=m.slice(0,f)),c?m+l:l+m}},Nr18:function(t,e,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");t.exports=function(t){for(var e=r(this),n=i(e.length),c=arguments.length,l=a(c>1?arguments[1]:void 0,n),o=c>2?arguments[2]:void 0,u=void 0===o?n:a(o,n);u>l;)e[l++]=t;return e}},SPin:function(t,e,n){"use strict";var r=n("XKFU"),a=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return a(this,t,arguments.length,arguments[1],!0)}})},Tze0:function(t,e,n){"use strict";n("qncB")("trim",(function(t){return function(){return t(this,3)}}))},YuTi:function(t,e,n){n("HAE/"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},bHtr:function(t,e,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},fA63:function(t,e,n){"use strict";n("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},l0Rn:function(t,e,n){"use strict";var r=n("RYi7"),a=n("vhPU");t.exports=function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},mGWK:function(t,e,n){"use strict";var r=n("XKFU"),a=n("aCFj"),i=n("RYi7"),c=n("ne8i"),l=[].lastIndexOf,o=!!l&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(o||!n("LyE8")(l)),"Array",{lastIndexOf:function(t){if(o)return l.apply(this,arguments)||0;var e=a(this),n=c(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},qncB:function(t,e,n){var r=n("XKFU"),a=n("vhPU"),i=n("eeVq"),c=n("/e88"),l="["+c+"]",o=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),s=function(t,e,n){var a={},l=i((function(){return!!c[t]()||"​"!="​"[t]()})),o=a[t]=l?e(f):c[t];n&&(a[n]=o),r(r.P+r.F*l,"String",a)},f=s.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(u,"")),t};t.exports=s},"xF/b":function(t,e,n){"use strict";var r=n("EWmC"),a=n("0/R4"),i=n("ne8i"),c=n("m0Pp"),l=n("K0xU")("isConcatSpreadable");t.exports=function t(e,n,o,u,s,f,m,d){for(var p,g,v=s,h=0,E=!!m&&c(m,d,3);h<u;){if(h in o){if(p=E?E(o[h],h,n):o[h],g=!1,a(p)&&(g=void 0!==(g=p[l])?!!g:r(p)),g&&f>0)v=t(e,n,p,i(p.length),v,f-1)-1;else{if(v>=9007199254740991)throw TypeError();e[v]=p}v++}h++}return v}}}]);
//# sourceMappingURL=component---src-templates-articles-js-d775771efc57e18499b4.js.map