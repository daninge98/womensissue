(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"pieceQuery",function(){return p});var n=a(0),r=a.n(n),i=a(36),c=a(169),l=a(170),o=(a(173),a(172)),s=a(171),m=a(162),d=a(168);t.default=function(e){var t=e.data;return r.a.createElement(c.a,null,r.a.createElement(m.a,{title:"Poetry",keywords:["poetry"]}),r.a.createElement(d.a,null),r.a.createElement("ul",{class:"genreBar"},r.a.createElement("li",{class:"genre"},r.a.createElement(i.Link,{to:"/",activeClassName:"active"},"All")),r.a.createElement("li",{class:"genre"},r.a.createElement(i.Link,{to:"/art",activeClassName:"active"},"Art")),r.a.createElement("li",{class:"genre"},r.a.createElement(i.Link,{to:"/fiction",activeClassName:"active"},"Fiction")),r.a.createElement("li",{class:"genre"},r.a.createElement(i.Link,{to:"/personalessay",activeClassName:"active"},"Personal Essays")),r.a.createElement("li",{class:"genre"},r.a.createElement(i.Link,{to:"/poetry",activeClassName:"active"},"Poetry")),r.a.createElement("li",{class:"genre"},r.a.createElement(i.Link,{to:"/interview",activeClassName:"active"},"Interviews"))),r.a.createElement("h4",null,"Explore poetry"),r.a.createElement(l.a,null,t.poetry.edges.map(function(e){return r.a.createElement("a",{href:e.node.frontmatter.path},r.a.createElement("div",{class:"piecepreviewcolumn"},r.a.createElement("div",{class:"piecepreview poetrypreview"},r.a.createElement("div",{key:e.node.id},r.a.createElement("h3",null,e.node.frontmatter.title),r.a.createElement("small",null,e.node.frontmatter.type," by ",e.node.frontmatter.author),r.a.createElement(s.a,null,e.node.excerpt),r.a.createElement("br",null),r.a.createElement("div",{class:"fadetowhite"}),r.a.createElement(o.a,null," ",r.a.createElement("small",null," Read more ")," ")))))})))};var p="25054806"},162:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),c=a(1),l=a.n(c),o=a(174),s=a.n(o),m=a(36);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title;return i.a.createElement(m.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var p="1025518380"},163:function(e,t,a){e.exports=a.p+"static/logo-f56ae416c7d337b5f768938c611a796d.png"},164:function(e,t,a){},165:function(e){e.exports={data:{site:{siteMetadata:{title:"The Womens Issue",description:"The Women's Issue, An Art & Literary Magazine",author:"Marie Konopacki"}}}}},166:function(e){e.exports={data:{site:{siteMetadata:{title:"The Womens Issue"}}}}},167:function(e,t,a){e.exports=a.p+"static/cover-61511ab8902fd50c99e34ba6f08184c5.png"},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(36),c=a(163),l=a.n(c);t.a=function(e){e.children;return r.a.createElement("div",{class:"stickyHeaderHome"},r.a.createElement("a",{href:"/"},r.a.createElement("div",{class:"logo"},r.a.createElement("img",{src:l.a}))),r.a.createElement("ul",{class:"navLinksStickyHeader"},r.a.createElement("li",{class:"stickyLink"},r.a.createElement(i.Link,{to:"/",activeClassName:"activeSub"},"Home")),r.a.createElement("li",{class:"dropdown"},r.a.createElement("div",{class:"stickyLink"},r.a.createElement(i.Link,{to:"/",activeClassName:"activeSub"},"Browse  ⌄")),r.a.createElement("div",{class:"dropdown-set"},r.a.createElement("ul",null,r.a.createElement("li",{class:"dropdown-content"},r.a.createElement(i.Link,{to:"/art",activeClassName:"active"},"Art")),r.a.createElement("li",{class:"dropdown-content"},r.a.createElement(i.Link,{to:"/fiction",activeClassName:"active"},"Fiction")),r.a.createElement("li",{class:"dropdown-content"},r.a.createElement(i.Link,{to:"/personalessay",activeClassName:"active"},"Personal Essays")),r.a.createElement("li",{class:"dropdown-content"},r.a.createElement(i.Link,{to:"/poetry",activeClassName:"active"},"Poetry")),r.a.createElement("li",{class:"dropdown-content"},r.a.createElement(i.Link,{to:"/interview",activeClassName:"active"},"Interviews"))))),r.a.createElement("li",{class:"stickyLink"},r.a.createElement(i.Link,{to:"/about",activeClassName:"activeSub"},"About")),r.a.createElement("li",{class:"stickyLink donate"},r.a.createElement(i.Link,{to:"/donate",activeClassName:"activeSub"},"Donate"))))}},169:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),c=a(1),l=a.n(c),o=a(36),s=a(167),m=a.n(s),d=function(e){e.siteTitle;return i.a.createElement("div",{style:{marginBottom:"-3.5em",marginTop:"80px"}},i.a.createElement("img",{src:m.a,alt:"Cover",style:{zIndex:"3"}}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1rem 1rem 1rem",borderBottom:"solid 1px #333333"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none"}}))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var p=d,u=(a(164),function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",background:"white",maxWidth:1300,padding:"0px 1.0875rem 1.45rem",paddingTop:"40px",boxShadow:"0px 0px 5px rgba(0, 0, 0, 0.3)"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960}},t)))},data:n})});u.propTypes={children:l.a.node.isRequired};t.a=u},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(161).a.div.withConfig({displayName:"piecepreviewrow__PreviewRow",componentId:"vz48fg-0"})(["display:inline-block;margin-top:50px;"]);t.a=function(e){var t=e.children;return r.a.createElement(i,null,t)}},171:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(161),c=i.a.div.withConfig({displayName:"shorten__Shorten",componentId:"sc-1rmxc3z-0"})(["margin-top:20px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:7;line-height:1.6em;"]),l=i.a.div.withConfig({displayName:"shorten__Excerpttext",componentId:"sc-1rmxc3z-1"})(["font-size:1em;"]);t.a=function(e){var t=e.children;return r.a.createElement(c,null,r.a.createElement(l,null,t))}},172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(161).a.div.withConfig({displayName:"circlebutton__Circlebutton",componentId:"sc-4eec0w-0"})(["border:none;color:#808080;padding-bottom:15px;text-align:right;right:25px;text-decoration:none;position:absolute;bottom:10px;z-index:100;"]);t.a=function(e){var t=e.children;return r.a.createElement(i,null,t)}},173:function(e,t,a){"use strict";a(0),a(161).a.div.withConfig({displayName:"piecepreview__PieceBox",componentId:"sc-1echr88-0"})(["box-shadow:0px 0px 1px rgba(0,0,0,0.2);margin:25px;height:300px;padding:25px;border-top:solid 3px #F7E490;position:relative;overflow:hidden;"])}}]);
//# sourceMappingURL=component---src-pages-poetry-js-b19c7165563fcba97f74.js.map