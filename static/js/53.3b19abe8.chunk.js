"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[53],{9042:function(e,t,n){n.d(t,{LI:function(){return v},Mc:function(){return p},OC:function(){return d},vw:function(){return l}});var r=n(5861),c=n(7757),a=n.n(c),o=n(4569),s=n.n(o),i="caf4817d038ad000058dc20ea7aa15f5",u="https://api.themoviedb.org/3/",l=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"trending/movie/day?api_key=").concat(i));case 3:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"movie/").concat(t,"?api_key=").concat(i));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"movie/").concat(t,"/").concat(n,"?api_key=").concat(i));case 3:return r=e.sent,c=r.data.results,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("".concat(u,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},4053:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r,c,a,o=n(5861),s=n(885),i=n(7757),u=n.n(i),l=n(2791),p=n(470),d=n(6731),v=n(9042),f=n(168),h=n(6444),x=h.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  padding: 8px 0;\n  gap: 16px;\n  padding-left: 14px;\n  border-bottom: 1px solid black;\n"]))),m=n(184),g=function(e){var t=e.movieById,n=t.poster_path,r=t.release_date,c=t.title,a=t.vote_average,o=t.overview,s=t.genres,i=new Date(r).getFullYear(),u="".concat((10*a).toFixed(0),"%"),l=null===s||void 0===s?void 0:s.map((function(e){return e.name})).join(", ");return(0,m.jsxs)(x,{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:n&&"https://image.tmdb.org/t/p/w500".concat(n),alt:"No display"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"".concat(c," (").concat(i,")")}),(0,m.jsx)("p",{children:"User score: ".concat(u)}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:o}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:"".concat(l)})]})]})},j=h.ZP.div(c||(c=(0,f.Z)(["\n  gap: 16px;\n  margin-bottom: 16px;\n  padding-left: 14px;\n  border-bottom: 1px solid black;\n"]))),w=h.ZP.li(a||(a=(0,f.Z)(["\n  padding-bottom: 5px;\n"]))),k=function(){var e,t,n=(0,l.useState)({}),r=(0,s.Z)(n,2),c=r[0],a=r[1],i=(0,p.UO)().movieId,f=(0,p.TH)(),h=null!==(e=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Mc)(i);case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),(0,m.jsxs)("div",{children:[(0,m.jsx)(d.rU,{to:h,children:"\ud83e\udc14 Go back"}),(0,m.jsx)(g,{movieById:c}),(0,m.jsxs)(j,{children:[(0,m.jsx)("h4",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)(w,{children:(0,m.jsx)(d.rU,{to:"cast",state:f.state,children:"Cast"})}),(0,m.jsx)(w,{children:(0,m.jsx)(d.rU,{to:"reviews",state:f.state,children:"Reviews"})})]})]}),(0,m.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=53.3b19abe8.chunk.js.map