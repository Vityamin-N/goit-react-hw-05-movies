"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[249],{648:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return j}});var c=r(885),l=r(501),o=r(871),i=r(205),u=r(894),m="MovieCard_item__dDdoH",p="MovieCard_link__SztRb",f="MovieCard_img__UtOtD",v="MovieCard_text__dxzVv",d=r(184);var g=function(e){var t=e.movie,r=e.pathname,n=(0,o.TH)(),a=(0,l.lr)(),g=(0,c.Z)(a,1)[0],x=g.get("query"),j=g.get("page"),_=t.id,h=t.title,b=t.name,Z=t.poster_path,y=t.release_date,N=t.first_air_date,O=new Date(y||N).getFullYear()||"",P=Z?"https://image.tmdb.org/t/p/w300".concat(Z):i,k=Z?"https://image.tmdb.org/t/p/w500".concat(Z):u;return(0,d.jsx)("li",{className:m,children:(0,d.jsxs)(l.rU,{to:"".concat(r,"/").concat(_),state:s(s({},n),{},{query:x,page:j}),className:p,children:[(0,d.jsxs)("picture",{children:[(0,d.jsx)("source",{srcSet:"".concat(P," 1x, ").concat(k," 2x")}),(0,d.jsx)("img",{className:f,src:P,alt:null!==h&&void 0!==h?h:b})]}),(0,d.jsxs)("p",{className:v,children:[null!==h&&void 0!==h?h:b,", ",O]})]})})},x="MovieList_list__mWX-c";var j=function(e){var t=e.movies,r=void 0===t?[]:t,n=e.pathname;return(0,d.jsx)("ul",{className:x,children:r.map((function(e){return(0,d.jsx)(g,{movie:e,pathname:n},e.id)}))})}},235:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(885),a=r(501),s=r(459),c="Pagination_list__h6+20",l=r(184);var o=function(e){var t=e.totalPages,r=(0,a.lr)(),o=(0,n.Z)(r,2),i=o[0],u=o[1],m=i.get("page")?Number(i.get("page")):1,p=i.get("query"),f=function(e){var r;r=e<t?e:t,u(p?{query:p,page:r}:{page:r})};return(0,l.jsxs)("div",{className:c,children:[m>1&&(0,l.jsx)(s.Z,{text:"<",onClick:function(){return f(m-1)},className:"small"}),m>1&&(0,l.jsx)(s.Z,{text:"1",onClick:function(){return f(1)},className:"small"}),m-2>2&&(0,l.jsx)("span",{children:"..."}),m-2>1&&(0,l.jsx)(s.Z,{text:m-2,onClick:function(){return f(m-2)},className:"small"}),m-1>1&&(0,l.jsx)(s.Z,{text:m-1,onClick:function(){return f(m-1)},className:"small"}),(0,l.jsx)(s.Z,{text:m,onClick:function(){},className:"current"}),m+1<t&&(0,l.jsx)(s.Z,{text:m+1,onClick:function(){return f(m+1)},className:"small"}),m+2<t&&(0,l.jsx)(s.Z,{text:m+2,onClick:function(){return f(m+2)},className:"small"}),m+2<t-1&&(0,l.jsx)("span",{children:"..."}),m<t&&(0,l.jsx)(s.Z,{text:t,onClick:function(){return f(t)},className:"small"}),m<t&&(0,l.jsx)(s.Z,{text:">",onClick:function(){return f(m+1)},className:"small"})]})}},411:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(418),a=r(87),s=r(885),c=r(791),l=r(501),o=r(134),i="SearchForm_form__2sZgH",u="SearchForm_label__71cdW",m="SearchForm_btn__kFQZl",p="SearchForm_input__JyON4",f=r(790),v=r(184);var d=function(){var e=(0,c.useState)(""),t=(0,s.Z)(e,2),r=t[0],n=t[1],a=(0,l.lr)(),d=(0,s.Z)(a,2)[1],g=function(){return n("")};return(0,v.jsx)("form",{className:i,onSubmit:function(e){e.preventDefault();var t=e.target.query.value.trim().toLowerCase();d(t?{query:t}:{}),g()},children:(0,v.jsxs)("label",{className:u,children:[(0,v.jsx)("span",{className:m,children:(0,v.jsx)(f.Z,{type:"submit",role:"search",icon:(0,v.jsx)(o.RB5,{style:{width:"40"}})})}),(0,v.jsx)("input",{className:p,type:"text",name:"query",placeholder:"Search movies",value:r,onInput:function(e){var t=e.target.value;n(t)}})]})})},g=r(933),x=r(871),j=r(648),_=r(908),h=r(877),b=r(235),Z="MovieSearch_error__+k98Q";var y=function(e){var t,r=e.totalPages,n=e.setTotalPages,a=(0,l.lr)(),o=(0,s.Z)(a,1)[0],i=o.get("query"),u=o.get("page")?o.get("page"):1,m=(0,g.useQuery)(["movies",i,u],(function(){return i?(h.Z.query=i,h.Z.page=u,h.Z.getMovies()):[]})),p=m.data,f=m.isLoading,d=(0,x.TH)().pathname,y=null===p||void 0===p?void 0:p.total_pages;return(0,c.useEffect)((function(){y&&n(y)}),[y,n]),f?(0,v.jsx)(_.Z,{}):!i||null!==p&&void 0!==p&&null!==(t=p.results)&&void 0!==t&&t.length?(0,v.jsxs)(c.Fragment,{children:[(null===p||void 0===p?void 0:p.results)&&(0,v.jsx)(j.Z,{movies:p.results,pathname:d}),i&&(0,v.jsx)(b.Z,{totalPages:r})]}):(0,v.jsxs)("p",{className:Z,children:[i," not found"]})};var N=function(e){var t=e.totalPages,r=e.setTotalPages;return(0,v.jsx)(n.Z,{children:(0,v.jsxs)(a.Z,{children:[(0,v.jsx)(d,{}),(0,v.jsx)(y,{totalPages:t,setTotalPages:r})]})})}}}]);
//# sourceMappingURL=Movies.8ae1ffaf.chunk.js.map