"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{9042:function(n,t,e){e.d(t,{LI:function(){return d},Mc:function(){return l},OC:function(){return f},vw:function(){return p}});var r=e(5861),c=e(7757),a=e.n(c),o=e(4569),u=e.n(o),i="caf4817d038ad000058dc20ea7aa15f5",s="https://api.themoviedb.org/3/",p=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"trending/movie/day?api_key=").concat(i));case 3:return t=n.sent,e=t.data.results,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"movie/").concat(t,"?api_key=").concat(i));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"movie/").concat(t,"/").concat(e,"?api_key=").concat(i));case 3:return r=n.sent,c=r.data,n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u().get("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},6748:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,c,a=e(5861),o=e(885),u=e(7757),i=e.n(u),s=e(2791),p=e(6731),l=e(470),f=e(9042),d=e(168),h=e(6444),v=h.ZP.input(r||(r=(0,d.Z)(["\n  display: inline-block;\n  width: 280px;\n  height: 30px;\n  margin-top: 5px;\n  border: 2px solid rgba(188, 184, 184, 0.989);\n  padding-left: 20px;\n  outline: none;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:hover {\n    border: 2px solid rgb(75, 62, 142);\n  }\n"]))),x=h.ZP.button(c||(c=(0,d.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 36px;\n  color: black;\n  border: 2px solid rgba(188, 184, 184, 0.989);\n  background-color: transparent;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n}\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n    color: white;\n    background-color: rgb(75, 62, 142);\n  }\n"]))),b=e(184),g=function(){var n=(0,l.TH)(),t=(0,s.useState)(""),e=(0,o.Z)(t,2),r=e[0],c=e[1],u=(0,p.lr)(),d=(0,o.Z)(u,2),h=d[0],g=d[1],k=(0,s.useState)([]),m=(0,o.Z)(k,2),y=m[0],w=m[1];return(0,s.useEffect)((function(){if(""!==h){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t=h.get("query"))){n.next=6;break}return n.next=4,(0,f.LI)(t);case 4:e=n.sent,w(e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[h]),(0,b.jsxs)("div",{children:[(0,b.jsxs)("form",{onSubmit:function(n){n.preventDefault(),g(r?{query:r}:""),c("")},children:[(0,b.jsx)(v,{type:"text",value:r,onChange:function(n){c(n.target.value)}}),(0,b.jsx)(x,{children:"Search"})]}),(0,b.jsx)("main",{children:y.map((function(t){return(0,b.jsx)("ul",{children:(0,b.jsx)("li",{children:(0,b.jsx)(p.rU,{to:"/movies/".concat(t.id),state:{from:n},children:(0,b.jsx)("h4",{children:t.title})})})},t.id)}))})]})}}}]);
//# sourceMappingURL=748.e8c799bf.chunk.js.map