"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9042:function(e,t,n){n.d(t,{LI:function(){return f},Mc:function(){return v},OC:function(){return l},vw:function(){return p}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),o=n.n(u),s="caf4817d038ad000058dc20ea7aa15f5",i="https://api.themoviedb.org/3/",p=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"trending/movie/day?api_key=").concat(s));case 3:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"movie/").concat(t,"?api_key=").concat(s));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"movie/").concat(t,"/").concat(n,"?api_key=").concat(s));case 3:return r=e.sent,c=r.data.results,e.abrupt("return",c);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},8544:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(5861),c=n(885),a=n(7757),u=n.n(a),o=n(2791),s=n(470),i=n(9042),p=n(184),v=function(e){var t=e.movieReview;return(0,p.jsx)(p.Fragment,{children:(null===t||void 0===t?void 0:t.length)>0?(0,p.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h4",{children:"Author: ".concat(n)}),(0,p.jsx)("p",{children:r})]},t)}))}):(0,p.jsx)("p",{children:" We don't have any reviews for this movie"})})},l=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],l=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.OC)(l,"reviews");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,p.jsx)("div",{children:(0,p.jsx)(v,{movieReview:n.results})})}}}]);
//# sourceMappingURL=544.f2ed472c.chunk.js.map