(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{39:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(4);e.a=function(){return Object(c.jsx)("img",{src:r,style:{display:"block",width:"250px",height:"250px",margin:"0 auto"}})}},40:function(t,e,n){"use strict";var r=n(3),c=n(6),a=n(5),s=n(0);e.a=function(){var t=function(){var t=Object(s.useState)(!1),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(s.useState)(null),u=Object(a.a)(o,2),l=u[0],b=u[1],p=Object(s.useState)("waiting"),j=Object(a.a)(p,2),d=j[0],m=j[1],h=Object(s.useCallback)(function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){var n,c,a,s,o,u=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},i(!0),m("loading"),t.prev=5,t.next=8,fetch(e,{method:n,body:c,headers:a});case 8:if((s=t.sent).ok){t.next=11;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));case 11:return t.next=13,s.json();case 13:return o=t.sent,i(!1),t.abrupt("return",o);case 18:throw t.prev=18,t.t0=t.catch(5),i(!1),b(t.t0.message),m("error"),t.t0;case 24:case"end":return t.stop()}}),t,null,[[5,18]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,request:h,error:l,clearError:Object(s.useCallback)((function(){b(null),m("loading")}),[]),process:d,setProcess:m}}(),e=t.loading,n=t.request,i=t.error,o=t.clearError,u=t.process,l=t.setProcess,b="https://gateway.marvel.com:443/v1/public/",p="apikey=ee08e659fe8dbd136caf78ed92338ca2",j=function(){var t=Object(c.a)(Object(r.a)().mark((function t(){var e,c,a=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"291",t.next=3,n("".concat(b,"characters?limit=9&offset=").concat(e,"&").concat(p));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){var c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(b,"characters/").concat(e,"?").concat(p));case 2:return c=t.sent,t.abrupt("return",v(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){var c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(b,"comics/").concat(e,"?").concat(p));case 2:return c=t.sent,t.abrupt("return",O(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(Object(r.a)().mark((function t(){var e,c,a=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"33",t.next=3,n("".concat(b,"comics?limit=8&offset=").concat(e,"&").concat(p));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(O));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){var c,a;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(b,"characters?name=").concat(e,"&").concat(p));case 2:return c=t.sent,a=c.data.results.map(v),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e;return{pageCount:t.pageCount?"".concat(t.pageCount," p."):"No info about number of pages",id:t.id,title:t.title,description:t.description||"Theres no description",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us"}},v=function(t){return""===t.description&&(t.description="This person has no description"),t.description.length>200&&(t.description=t.description.slice(0,210)+"..."),{id:t.id,name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}};return{loading:e,error:i,clearError:o,process:u,setProcess:l,getAllCharacters:j,getCharacter:d,getAllComics:h,getComic:m,getCharacterByName:f}}},47:function(t,e,n){"use strict";var r=n(11),c=n(10),a=n(16),s=n(17),i=n(0),o=n(4),u=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={error:!1},t}return Object(c.a)(n,[{key:"componentDidCatch",value:function(t,e){this.setState({error:!0}),console.log(e)}},{key:"render",value:function(){return this.state.error?Object(o.jsx)("h2",{children:"Somth went wrong "}):this.props.children}}]),n}(i.Component);e.a=u},73:function(t,e,n){},74:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var r=n(42),c=(n(73),n.p+"static/media/Avengers.4065c8f9.png"),a=n.p+"static/media/Avengers_logo.9eaf2193.png",s=n(4),i=function(){return Object(s.jsxs)("div",{className:"app__banner",children:[Object(s.jsx)("img",{src:c,alt:"Avengers"}),Object(s.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(s.jsx)("br",{}),"Stay tuned!"]}),Object(s.jsx)("img",{src:a,alt:"Avengers logo"})]})},o=(n(47),n(8)),u=n(5),l=(n(74),n(0)),b=n(39),p=n(29),j=n(40),d=n(14),m=function(t,e,n){switch(t){case"waiting":return Object(s.jsx)(p.a,{});case"loading":return n?Object(s.jsx)(e,{}):Object(s.jsx)(p.a,{});case"confirmed":return Object(s.jsx)(e,{});case"error":return Object(s.jsx)(b.a,{});default:throw new Error("unexpected process state")}},h=function(){var t=Object(l.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(l.useState)(55),a=Object(u.a)(c,2),i=a[0],b=a[1],p=Object(l.useState)(!1),h=Object(u.a)(p,2),f=h[0],O=h[1],v=Object(l.useState)(!1),g=Object(u.a)(v,2),x=g[0],w=g[1],_=Object(j.a)(),y=_.getAllComics,k=_.process,C=_.setProcess;Object(l.useEffect)((function(){N(i)}),[]);var N=function(t,e){O(!e),y(t).then(S).then((function(){return C("confirmed")})).then((function(t){return console.log(t)}))},S=function(t){var e=!1;t.length<8&&(e=!0),r((function(e){return[].concat(Object(o.a)(e),Object(o.a)(t))})),O(!1),b((function(t){return t+4})),w(e)};return Object(s.jsxs)("div",{className:"comics__list",children:[m(k,(function(){return function(t){var e=t.map((function(t,e){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(s.jsx)("li",{className:"comics__item",tabIndex:0,children:Object(s.jsxs)(d.b,{to:"/comics/".concat(t.id),children:[Object(s.jsx)("img",{src:t.thumbnail,style:n,alt:"ultimate war",className:"comics__item-img"}),Object(s.jsx)("div",{className:"comics__item-name",children:t.title}),Object(s.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(s.jsx)("ul",{className:"comics__grid",children:e})}(n)}),f),Object(s.jsx)("button",{className:"button button__main button__long",disabled:f,onClick:function(){return N(i)},style:{display:x?"none":"block"},children:Object(s.jsx)("div",{className:"inner",children:"load more"})})]})};e.default=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(r.a,{children:[Object(s.jsx)("meta",{name:"description",content:"Page with lists of our comucs"}),Object(s.jsx)("title",{children:"Comics Page"})]}),Object(s.jsx)(i,{}),Object(s.jsx)(h,{})]})}}}]);
//# sourceMappingURL=6.65007c16.chunk.js.map