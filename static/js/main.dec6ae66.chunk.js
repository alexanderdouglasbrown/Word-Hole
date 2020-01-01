(this["webpackJsonpword-hole"]=this["webpackJsonpword-hole"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(53),a(7)),l=a(14),i=a(3),m=a(2),u=Object(n.createContext)(),d=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),l=Object(m.a)(s,2),i=l[0],d=l[1],p=Object(n.useState)(null),f=Object(m.a)(p,2),h=f[0],b=f[1],E=Object(n.useState)("User"),v=Object(m.a)(E,2),g=v[0],j=v[1],O=Object(n.useState)(null),w=Object(m.a)(O,2),N=w[0],k=w[1];return r.a.createElement(u.Provider,{value:[{isLoggedIn:c,username:i,userID:h,access:g,token:N},o,d,b,j,k]},e.children)},p=u,f=a(31),h=a(5),b=a.n(h),E=a(15),v=a.n(E),g=function(e){var t=Object(n.useContext)(p),a=Object(m.a)(t,1)[0],c=Object(n.useState)(""),o=Object(m.a)(c,2),s=o[0],l=o[1],u=Object(n.useState)(512),d=Object(m.a)(u,2),f=d[0],h=d[1];return r.a.createElement("div",{className:"card",style:{margin:"1rem auto"}},r.a.createElement("div",{className:"card-content"},r.a.createElement("textarea",{required:!0,onChange:function(e){var t=e.target.value;t.length>512&&(t=t.substr(0,512)),h(512-t.length),l(t)},className:"textarea",placeholder:"Put your words on Word Hole",value:s}),r.a.createElement("button",{onClick:function(){b.a.post("".concat("https://word-hole.herokuapp.com","/api/home/post"),{Post:s},{headers:{Authorization:a.token}}).then((function(){l(""),h(512),e.refreshPosts()})).catch((function(){return i.a.error("Sorry, an error occurred")}))},className:"button is-primary",style:{marginTop:"0.5rem"}},"Post"),r.a.createElement("div",{style:{float:"right",color:"lightgray"}},"Remaining characters: ",f)))},j=a(18),O=a.n(j),w=a(8),N=a(6),k=a(44),y=function(e){var t=Object(n.useContext)(p),a=Object(m.a)(t,1)[0],c=e.postID,o=e.totalLikes,s=e.isUserLiked,l=e.refresh,u=function(){b.a.delete("".concat("https://word-hole.herokuapp.com","/api/likes"),{data:{PostID:c},headers:{Authorization:a.token}}).then((function(){l()})).catch((function(){return i.a.error("Sorry, something went wrong")}))},d=function(){b.a.put("".concat("https://word-hole.herokuapp.com","/api/likes"),{PostID:c},{headers:{Authorization:a.token}}).then((function(){l()})).catch((function(){return i.a.error("Sorry, something went wrong")}))};return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"1.5rem"}},r.a.createElement(w.a,{style:{marginTop:"0.15rem",color:"fuchsia",cursor:"pointer"},icon:s?N.c:k.a,onClick:function(){a.isLoggedIn?s?u():d():i.a.info("Please log in to Like posts")}}),r.a.createElement("div",{style:{marginLeft:"0.25rem",fontWeight:600}},"".concat(o?"(".concat(o,")"):"")))},C=(a(86),function(e){var t=Object(n.useContext)(p),a=Object(m.a)(t,1)[0],c=e.postID,o=e.isExpanded,l=e.isProfile,u=e.expandPost,d=e.refreshIndex,f=e.setRefreshIndex,h=Object(n.useState)(null),E=Object(m.a)(h,2),v=E[0],g=E[1],j=Object(n.useState)(null),w=Object(m.a)(j,2),N=w[0],k=w[1],C=Object(n.useState)(null),S=Object(m.a)(C,2),x=S[0],I=S[1],D=Object(n.useState)(null),P=Object(m.a)(D,2),L=P[0],F=P[1],z=Object(n.useState)(!1),A=Object(m.a)(z,2),B=A[0],U=A[1],R=Object(n.useState)(""),q=Object(m.a)(R,2),W=q[0],T=q[1],H=Object(n.useState)(512),M=Object(m.a)(H,2),X=M[0],J=M[1],Y=Object(n.useState)(!1),$=Object(m.a)(Y,2),G=$[0],K=$[1],Q=function(e){B||o||e.target&&e.target.tagName&&"a"!==e.target.tagName.toLowerCase()&&u(c)},V=Object(n.useCallback)((function(e){null!==c&&b.a.get("".concat("https://word-hole.herokuapp.com","/api/post"),{params:{ID:c},headers:{Authorization:a.token}}).then((function(e){g(e.data.post),k(e.data.totalLikes),F(e.data.totalComments),I(e.data.isUserLiked)})).catch((function(t){t&&t.response&&t.response.data&&t.response.data.notFound?e?(K(!0),g(null)):i.a.error("Post not found"):i.a.error("Sorry, an error occured")}))}),[c,a]),Z=function(){T(""),U(!1),J(512)};Object(n.useEffect)((function(){v||G||null===c||V()}),[V,v,G,c]),Object(n.useEffect)((function(){G||d!==c||(V(!0),f(null))}),[d,c,V,f,G]);return r.a.createElement(r.a.Fragment,null,v?r.a.createElement("div",{className:"card",style:{margin:"1rem auto",overflowX:"auto"}},(a.userID===v.userID||"Admin"===a.access)&&r.a.createElement("div",{style:{position:"absolute",top:"0.25rem",right:"0.25rem",fontSize:"0.7rem"}},B?r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{className:"LinkButton",onClick:Z},"Cancel"),r.a.createElement("div",{style:{width:"0.5rem"}}),r.a.createElement("div",{className:"LinkButton",onClick:function(){b.a.patch("".concat("https://word-hole.herokuapp.com","/api/post"),{ID:c,Post:W},{headers:{Authorization:a.token}}).then((function(){Z(),V(),e.onEdit&&e.onEdit()})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))},style:{fontWeight:700}},"Save")):r.a.createElement("div",{className:"LinkButton",onClick:function(){var e=v&&v.post?v.post:"";T(e),U(!0),J(512-e.length)}},"Edit")),r.a.createElement("div",{className:"card-content",style:{cursor:"".concat(o||B?"auto":"pointer")},onClick:Q},B?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"LinkButton-Danger",onClick:function(){window.confirm("Are you sure you would like to delete this post?")&&b.a.delete("".concat("https://word-hole.herokuapp.com","/api/post"),{data:{ID:c},headers:{Authorization:a.token}}).then((function(){K(!0),g(null),e.onDelete&&e.onDelete()})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))},style:{position:"absolute",top:"0.25rem",left:"0.25rem",fontSize:"0.7rem"}},"Delete"),r.a.createElement("textarea",{onChange:function(e){var t=e.target.value;t.length>512&&(t=t.substr(0,512)),J(512-t.length),T(t)},value:W,className:"textarea"}),r.a.createElement("div",{style:{float:"right",color:"lightgray"}},"Remaining characters: ",X)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{whiteSpace:"pre-wrap"}},r.a.createElement(O.a,null,v.post)))),r.a.createElement("div",{className:"card-footer",style:{justifyContent:"space-between",fontSize:"0.7rem",color:"gray",padding:"1rem"}},r.a.createElement("div",null,r.a.createElement("div",null,"".concat(v.date).concat(v.isEdited?" (Edited)":"")),l?r.a.createElement("div",null,"".concat(v.username)):r.a.createElement("div",{className:"LinkButton"},r.a.createElement(s.b,{to:"/p/".concat(v.username)},"".concat(v.username)))),r.a.createElement("div",null,r.a.createElement(y,{postID:c,totalLikes:N,isUserLiked:x,refresh:V}),!o&&r.a.createElement("div",{className:"LinkButton",style:{width:"5.5rem"},onClick:Q},"Comments".concat(L&&L>0?" (".concat(L,")"):""))))):r.a.createElement(r.a.Fragment,null,G?null:r.a.createElement("div",{className:"card",style:{margin:"1rem auto"}},r.a.createElement("div",{className:"card-content"},r.a.createElement("progress",{className:"progress is-small is-light",max:"100"})))))}),S=a(30),x=a.n(S),I=function(e){var t=e.postID,a=e.refreshComments,c=Object(n.useContext)(p),o=Object(m.a)(c,1)[0],s=Object(n.useState)(""),l=Object(m.a)(s,2),u=l[0],d=l[1];return r.a.createElement("div",{className:"card",style:{margin:"1rem auto"}},r.a.createElement("div",{className:"card-content"},r.a.createElement("textarea",{required:!0,className:"textarea",value:u,onChange:function(e){return d(e.target.value)},placeholder:"Comment on this post"}),r.a.createElement("button",{onClick:function(){b.a.post("".concat("https://word-hole.herokuapp.com","/api/comments"),{Comment:u,PostID:t},{headers:{Authorization:o.token}}).then((function(){d(""),a()})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))},className:"button is-primary",style:{marginTop:"0.5rem"}},"Comment")))},D=function(e){var t=e.commentID,a=e.refreshComments,c=Object(n.useContext)(p),o=Object(m.a)(c,1)[0],l=Object(n.useState)(null),u=Object(m.a)(l,2),d=u[0],f=u[1],h=Object(n.useState)(!1),E=Object(m.a)(h,2),v=E[0],g=E[1],j=Object(n.useState)(""),w=Object(m.a)(j,2),N=w[0],k=w[1],y=Object(n.useCallback)((function(){b.a.get("".concat("https://word-hole.herokuapp.com","/api/comments"),{params:{CommentID:t}}).then((function(e){f(e.data)})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))}),[t]),C=function(){g(!1),k("")};return Object(n.useEffect)((function(){d||y()}),[d,y]),r.a.createElement(r.a.Fragment,null,d?r.a.createElement("div",{className:"card",style:{margin:"1rem auto",overflowX:"auto"}},(o.userID===d.userID||"Admin"===o.access)&&r.a.createElement("div",{style:{position:"absolute",top:"0.25rem",right:"0.25rem",fontSize:"0.7rem"}},v?r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{className:"LinkButton",onClick:C},"Cancel"),r.a.createElement("div",{style:{width:"0.5rem"}}),r.a.createElement("div",{className:"LinkButton",onClick:function(){b.a.patch("".concat("https://word-hole.herokuapp.com","/api/comments"),{CommentID:t,Comment:N},{headers:{Authorization:o.token}}).then((function(){y(),C()})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))},style:{fontWeight:700}},"Save")):r.a.createElement("div",{className:"LinkButton",onClick:function(){var e,t=d&&(null!==(e=d.comment)&&void 0!==e?e:"");k(t),g(!0)}},"Edit")),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{style:{whiteSpace:"pre-wrap"}},v?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"LinkButton-Danger",onClick:function(){window.confirm("Are you sure you would like to delete this comment?")&&b.a.delete("".concat("https://word-hole.herokuapp.com","/api/comments"),{data:{CommentID:t},headers:{Authorization:o.token}}).then((function(){a()})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))},style:{position:"absolute",top:"0.25rem",left:"0.25rem",fontSize:"0.7rem"}},"Delete"),r.a.createElement("textarea",{onChange:function(e){return k(e.target.value)},value:N,className:"textarea"})):r.a.createElement(O.a,null,"".concat(d.comment)))),r.a.createElement("div",{className:"card-footer",style:{justifyContent:"space-between",fontSize:"0.7rem",color:"gray",padding:"1rem"}},r.a.createElement("div",null,r.a.createElement("div",null,"".concat(d.date).concat(d.isEdited?" (Edited)":"")),r.a.createElement("div",{className:"LinkButton"},r.a.createElement(s.b,{to:"/p/".concat(d.username)},"".concat(d.username)))))):r.a.createElement("div",{className:"card",style:{margin:"1rem auto"}},r.a.createElement("div",{className:"card-content"},r.a.createElement("progress",{className:"progress is-small is-light",max:"100"}))))},P=function(e){var t=e.postID,a=e.onPostDelete,c=Object(n.useContext)(p),o=Object(m.a)(c,1)[0],s=Object(n.useState)(null),l=Object(m.a)(s,2),u=l[0],d=l[1],f=Object(n.useCallback)((function(){null!==t&&b.a.get("".concat("https://word-hole.herokuapp.com","/api/comments/list"),{params:{PostID:t}}).then((function(e){d(e.data)})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))}),[t]);return Object(n.useEffect)((function(){u||f()}),[u,f]),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{postID:t,isExpanded:!0,onDelete:a}),o.isLoggedIn&&r.a.createElement(I,{postID:t,refreshComments:f}),u&&u.length>0&&r.a.createElement("div",{style:{width:"40rem",margin:"1rem auto",fontWeight:600,color:"gray",paddingLeft:"2rem"}},"Comments"),u&&u.map((function(e){return r.a.createElement(D,{key:e,commentID:e,refreshComments:f})})))};x.a.setAppElement("#root");var L=function(e){var t=e.isOpen,a=e.closeModal,n=e.postID;return r.a.createElement(x.a,{isOpen:t,onRequestClose:a,style:{content:{padding:"1rem 0 0 0",maxWidth:"60rem",margin:"auto",top:"0.5rem",bottom:"0.5rem",left:"1.75rem",right:"1.75rem",overflowX:"hidden"},overlay:{zIndex:35,backgroundColor:"rgba(128, 128, 128, 0.7)"}}},r.a.createElement("div",{className:"container"},r.a.createElement(P,{postID:n,onPostDelete:function(){a()}})))},F=function(e){var t=Object(n.useContext)(p),a=Object(m.a)(t,1)[0],c=Object(n.useState)(null),o=Object(m.a)(c,2),s=o[0],l=o[1],u=Object(n.useState)(null),d=Object(m.a)(u,2),h=d[0],E=d[1],j=Object(n.useState)(!1),O=Object(m.a)(j,2),w=O[0],N=O[1],k=Object(n.useState)(null),y=Object(m.a)(k,2),S=y[0],x=y[1],I=Object(n.useState)(null),D=Object(m.a)(I,2),P=D[0],F=D[1],z=Object(n.useRef)(),A=Object(n.useRef)(!1);z.current=function(){return h};var B=Object(n.useCallback)((function(){b.a.get("".concat("https://word-hole.herokuapp.com","/api/home/posts"),{params:{LastID:null}}).then((function(e){return E(e.data)})).catch((function(){return i.a.error("Sorry, something went wrong")}))}),[]),U=Object(n.useCallback)((function(){var e=z.current();if(e&&!(e.length<1)){var t=e[e.length-1];t<=1||(A.current=!0,b.a.get("".concat("https://word-hole.herokuapp.com","/api/home/posts"),{params:{lastID:t}}).then((function(e){return E([].concat(Object(f.a)(h),Object(f.a)(e.data)))})).catch((function(){return i.a.error("Sorry, something went wrong")})).finally((function(){return A.current=!1})))}}),[h]),R=function(e){x(e),N(!0),window.history.pushState(null,null,"/wh/".concat(e))},q=Object(n.useCallback)((function(){b.a.get("".concat("https://word-hole.herokuapp.com","/api/home/hi")).then((function(){l(!0)})).catch((function(){l(!1),setTimeout((function(){q()}),1e3)}))}),[]),W=Object(n.useCallback)((function(e){!A.current&&window.innerHeight+document.documentElement.scrollTop+200>=document.documentElement.offsetHeight&&U()}),[U]);return Object(n.useEffect)((function(){return window.addEventListener("scroll",W),function(){return window.removeEventListener("scroll",W)}}),[W]),Object(n.useEffect)((function(){s?h||B():q()}),[q,s,B,h]),Object(n.useEffect)((function(){h&&h.length>0&&window.innerHeight>document.documentElement.offsetHeight&&W()}),[h,W]),Object(n.useEffect)((function(){return w?v.a.on():v.a.off(),function(){return v.a.off()}}),[w]),r.a.createElement(r.a.Fragment,null,s?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(r.a.Fragment,null,a.isLoggedIn&&r.a.createElement(g,{refreshPosts:B}),h&&h.map((function(e){return r.a.createElement(C,{key:e,postID:e,expandPost:R,refreshIndex:P,setRefreshIndex:F})})))),r.a.createElement(L,{isOpen:w,closeModal:function(){N(!1),F(S),x(null),window.history.pushState(null,null,"/")},postID:S})):r.a.createElement(r.a.Fragment,null,!1===s?r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"subtitle",style:{marginTop:"2rem"}},"Waking up the server..."),r.a.createElement("progress",{className:"progress is-small is-primary",max:"100"})):null))},z=function(e){var t=Object(l.g)(),a=Object(l.h)().postID;return r.a.createElement("div",{className:"container"},r.a.createElement(P,{postID:a,onPostDelete:function(){t.push("/")}}))},A=function(e){var t=Object(l.h)().username,a=Object(n.useState)(null),c=Object(m.a)(a,2),o=c[0],s=c[1],u=Object(n.useState)(null),d=Object(m.a)(u,2),p=d[0],f=d[1],h=Object(n.useState)(!1),E=Object(m.a)(h,2),g=E[0],j=E[1],O=Object(n.useState)(null),w=Object(m.a)(O,2),N=w[0],k=w[1],y=Object(n.useState)(null),S=Object(m.a)(y,2),x=S[0],I=S[1],D=Object(n.useCallback)((function(){b.a.get("".concat("https://word-hole.herokuapp.com","/api/profile/posts"),{params:{UserID:o.userID}}).then((function(e){return f(e.data)})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))}),[o]),P=function(e){k(e),j(!0),window.history.pushState(null,null,"/wh/".concat(e))};return Object(n.useEffect)((function(){b.a.get("".concat("https://word-hole.herokuapp.com","/api/profile/user"),{params:{Username:t}}).then((function(e){return s(e.data)})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))}),[t]),Object(n.useEffect)((function(){o&&D()}),[o,D]),Object(n.useEffect)((function(){return g?v.a.on():v.a.off(),function(){return v.a.off()}}),[g]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{style:{textAlign:"center"},className:"title"},"".concat(o.username,"'s Posts")),r.a.createElement(r.a.Fragment,null,"User"!==o.access&&r.a.createElement("h5",{style:{textAlign:"center"},className:"subtitle"},o.access))),p&&p.map((function(e){return r.a.createElement(C,{key:e,postID:e,expandPost:P,refreshIndex:x,setRefreshIndex:I,isProfile:!0})}))),r.a.createElement(L,{isOpen:g,closeModal:function(){j(!1),I(N),k(null),window.history.pushState(null,null,"/p/".concat(t))},postID:N,refresh:D}))},B=function(e){var t=Object(n.useContext)(p),a=Object(m.a)(t,1)[0],c=Object(n.useState)(""),o=Object(m.a)(c,2),s=o[0],l=o[1],u=Object(n.useState)(""),d=Object(m.a)(u,2),f=d[0],h=d[1],E=Object(n.useState)(""),v=Object(m.a)(E,2),g=v[0],j=v[1],O=Object(n.useState)(!1),k=Object(m.a)(O,2),y=k[0],C=k[1],S=Object(n.useState)(!1),x=Object(m.a)(S,2),I=x[0],D=x[1],P=Object(n.useState)(!1),L=Object(m.a)(P,2),F=L[0],z=L[1];return r.a.createElement(r.a.Fragment,null,a.isLoggedIn?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h1",null,"Update Password")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b.a.patch("".concat("https://word-hole.herokuapp.com","/api/settings/password"),{Current:s,New:f,Confirm:g},{headers:{Authorization:a.token}}).then((function(){i.a.info("Password updated"),l(""),h(""),j("")})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))}},r.a.createElement("label",{htmlFor:"current-password",className:"label"},"Current Password"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded"},r.a.createElement("input",{value:s,onChange:function(e){return l(e.target.value)},className:"input",name:"current-password",type:y?"input":"password",placeholder:"Current Password",required:!0})),r.a.createElement("div",{className:"control"},r.a.createElement("div",{onClick:function(){return C(!y)},className:"button",style:{width:"3rem"}},r.a.createElement(w.a,{icon:y?N.a:N.b})))),r.a.createElement("label",{htmlFor:"new-password",className:"label"},"New Password"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded"},r.a.createElement("input",{value:f,onChange:function(e){return h(e.target.value)},className:"input",name:"new-password",type:I?"input":"password",placeholder:"New Password",required:!0})),r.a.createElement("div",{className:"control"},r.a.createElement("div",{onClick:function(){return D(!I)},className:"button",style:{width:"3rem"}},r.a.createElement(w.a,{icon:I?N.a:N.b})))),r.a.createElement("label",{htmlFor:"confirm-password",className:"label"},"Confirm Password"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded"},r.a.createElement("input",{value:g,onChange:function(e){return j(e.target.value)},className:"input",name:"confirm-password",type:F?"input":"password",placeholder:"Confirm Password",required:!0})),r.a.createElement("div",{className:"control"},r.a.createElement("div",{onClick:function(){return z(!F)},className:"button",style:{width:"3rem"}},r.a.createElement(w.a,{icon:F?N.a:N.b})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary"},"Register"))))))):r.a.createElement("div",{className:"container"},"Please log in or create an account to view this page."))},U=a(106),R=(a(97),function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(!1),u=Object(m.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)(""),h=Object(m.a)(f,2),E=h[0],v=h[1],g=Object(n.useState)(""),j=Object(m.a)(g,2),O=j[0],k=j[1],y=Object(n.useState)(""),C=Object(m.a)(y,2),S=C[0],x=C[1],I=Object(U.a)(["token"]),D=Object(m.a)(I,2)[1],P=Object(n.useState)(!1),L=Object(m.a)(P,2),F=L[0],z=L[1];return F?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h1",null,"Registration")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b.a.post("".concat("https://word-hole.herokuapp.com","/api/register"),{username:E,password:O,Confirm:S}).then((function(e){D("token",e.data.jwt),z(!0)})).catch((function(e){e&&e.response&&e.response.data&&e.response.data.error?i.a.error(e.response.data.error):i.a.error("Sorry, an error occured")}))}},r.a.createElement("label",{htmlFor:"username",className:"label"},"Username"),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{value:E,onChange:function(e){return v(e.target.value)},className:"input",type:"text",name:"username",placeholder:"Username",autoFocus:!0,required:!0}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(w.a,{icon:N.e})))),r.a.createElement("label",{htmlFor:"password",className:"label"},"Password"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded has-icons-left"},r.a.createElement("input",{value:O,onChange:function(e){return k(e.target.value)},className:"input",name:"password",type:c?"input":"password",placeholder:"Password",required:!0}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(w.a,{icon:N.d}))),r.a.createElement("div",{className:"control"},r.a.createElement("div",{onClick:function(){return o(!c)},className:"button",style:{width:"3rem"}},r.a.createElement(w.a,{icon:c?N.a:N.b})))),r.a.createElement("label",{htmlFor:"confirm-password",className:"label"},"Confirm Password"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded has-icons-left"},r.a.createElement("input",{value:S,onChange:function(e){return x(e.target.value)},className:"input",name:"confirm-password",type:d?"input":"password",placeholder:"Confirm Password",required:!0}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(w.a,{icon:N.d}))),r.a.createElement("div",{className:"control"},r.a.createElement("div",{onClick:function(){return p(!d)},className:"button",style:{width:"3rem"}},r.a.createElement(w.a,{icon:d?N.a:N.b})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary"},"Register")))))))}),q=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),d=u[0],p=u[1],f=Object(n.useState)(""),h=Object(m.a)(f,2),E=h[0],v=h[1],g=Object(U.a)(["token"]),j=Object(m.a)(g,2)[1],O=Object(n.useState)(!1),k=Object(m.a)(O,2),y=k[0],C=k[1];return y?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h1",null,"Login")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b.a.post("".concat("https://word-hole.herokuapp.com","/api/login"),{username:d,password:E}).then((function(e){e.data.error?i.a.error(e.data.error):(j("token",e.data.jwt),C(!0))})).catch()}},r.a.createElement("label",{htmlFor:"username",className:"label"},"Username"),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{value:d,onChange:function(e){return p(e.target.value)},className:"input",type:"text",name:"username",placeholder:"Username",autoFocus:!0,required:!0}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(w.a,{icon:N.e})))),r.a.createElement("label",{htmlFor:"password",className:"label"},"Password"),r.a.createElement("div",{className:"field has-addons"},r.a.createElement("p",{className:"control is-expanded has-icons-left"},r.a.createElement("input",{value:E,onChange:function(e){return v(e.target.value)},className:"input",name:"password",type:c?"input":"password",placeholder:"Password",required:!0}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement(w.a,{icon:N.d}))),r.a.createElement("div",{className:"control"},r.a.createElement("div",{onClick:function(){return o(!c)},className:"button",style:{width:"3rem"}},r.a.createElement(w.a,{icon:c?N.a:N.b})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary"},"Log In")))))))},W=a(47),T=a(107),H=Object(T.a)((function(e){var t=e.cookies,a=(Object(W.a)(e,["cookies"]),Object(n.useRef)(document.cookie)),c=Object(n.useState)(!1),o=Object(m.a)(c,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){t.remove("token")}),[t]),Object(n.useEffect)((function(){t.get("token")?t.remove("token"):u(!0)}),[a,t]),Object(n.useEffect)((function(){s&&i.a.info("You have been logged out")}),[s]),r.a.createElement(r.a.Fragment,null,s?r.a.createElement(l.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Logging out..."),r.a.createElement("div",{style:{fontSize:"0.8rem",color:"gray"}},"Refresh if this gets stuck, sorry")))})),M=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"404"),r.a.createElement("p",{className:"subtitle"},"Nothing was found at this location"))},X=(a(98),function(){var e=Object(n.useContext)(p),t=Object(m.a)(e,1)[0],a=Object(n.useState)(!1),c=Object(m.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!1),u=Object(m.a)(i,2),d=u[0],f=u[1],h=Object(n.useCallback)((function(e){d&&f(!1)}),[d]);return Object(n.useEffect)((function(){return window.addEventListener("click",h),function(){return window.removeEventListener("click",h)}}),[h]),r.a.createElement("nav",{style:{marginBottom:"1rem"},className:"navbar is-dark",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(s.b,{className:"navbar-item NavBar-brand",to:"/"},"Word Hole"),r.a.createElement("div",{onClick:function(){return l(!o)},role:"button",className:"".concat(o?"is-active":""," navbar-burger"),"aria-label":"menu","aria-expanded":"false"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"".concat(o?"is-active":""," navbar-menu")},r.a.createElement("div",{className:"navbar-end"},t.isLoggedIn?r.a.createElement("div",{id:"navbar-username-dropdown-button",className:"navbar-item has-dropdown ".concat(d?"is-active":"")},r.a.createElement("div",{className:"navbar-link",onClick:function(){return f(!d)}},t.username),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(s.b,{className:"navbar-item",to:"/p/".concat(t.username)},"Profile"),r.a.createElement(s.b,{className:"navbar-item",to:"/settings"},"Settings"),r.a.createElement("hr",{className:"navbar-divider"}),r.a.createElement(s.b,{className:"navbar-item",to:"/logout"},"Log Out"))):r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(s.b,{className:"button is-dark",to:"/register"},"Register"),r.a.createElement(s.b,{className:"button is-primary",to:"/login"},r.a.createElement("strong",null,"Log In")))))))}),J=a(46),Y=a.n(J),$=Object(T.a)((function(e){var t=e.cookies,a=document.cookie,c=Object(n.useContext)(p),o=Object(m.a)(c,6),s=o[1],l=o[2],i=o[3],u=o[4],d=o[5],f=Object(n.useCallback)((function(){s(!1),l(""),i(null),u("User"),d(null)}),[s,l,i,u,d]);return Object(n.useEffect)((function(){var e=t.get("token");if(e){var a=Y()(e);a.exp>Date.now()/1e3?(s(!0),l(a.Username),i(Number(a.UserID)),u(a["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]),d(e)):(t.remove("token"),f())}else f()}),[t,a,s,l,i,u,d,f]),r.a.createElement(r.a.Fragment,null)}));i.a.configure({hideProgressBar:!0,newestOnTop:!0,autoClose:3e3});var G=function(){return r.a.createElement(s.a,null,r.a.createElement(d,null,r.a.createElement($,null),r.a.createElement(X,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/",exact:!0,component:F}),r.a.createElement(l.b,{path:"/wh/:postID",exact:!0,component:z}),r.a.createElement(l.b,{path:"/p/:username",exact:!0,component:A}),r.a.createElement(l.b,{path:"/settings",exact:!0,component:B}),r.a.createElement(l.b,{path:"/register",exact:!0,component:R}),r.a.createElement(l.b,{path:"/login",exact:!0,component:q}),r.a.createElement(l.b,{path:"/logout",exact:!0,component:H}),r.a.createElement(l.b,{component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(101),a(102);o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,a){e.exports=a(103)},53:function(e,t,a){},86:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.dec6ae66.chunk.js.map