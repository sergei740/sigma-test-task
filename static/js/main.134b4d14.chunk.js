(this["webpackJsonpsigma-task"]=this["webpackJsonpsigma-task"]||[]).push([[0],{63:function(e,t,a){e.exports=a(74)},68:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(68),a(11)),l=a(52),s=a(26),u=a(112),d=a(119),m=a(114),f=a(123),p=a(120),g=[{id:"1",name:"Turkish",age:25,login:"turkish",password:"1234",photo:"/photos/turkish.jpg",friendsList:["2","4","5","6","7"]},{id:"2",name:"Tommy",age:23,login:"tommy",password:"123asda4",photo:"/photos/tommy.jpg",friendsList:["1","3","5","6","7"]},{id:"3",name:"Mickey O'Neil",age:21,login:"mickey",password:"1234",photo:"/photos/mickey.jpg",friendsList:["2","5","6","7"]},{id:"4",name:"Brick Top",age:27,login:"brickTop",password:"123457",photo:"/photos/brickTop.jpg",friendsList:["1","5","6","7"]},{id:"5",name:"Vinny",age:28,login:"Vinny",password:"123asdf4",photo:"/photos/vinny.jpg",friendsList:["1","2","4","3"]},{id:"6",name:"Fat Nick",age:25,login:"fatNick",password:"12345",photo:"/photos/fatNick.jpg",friendsList:["1","2","4","3","7"]},{id:"7",name:"Rory Breaker",age:25,login:"roryBreaker",password:"123456",photo:"/photos/roryBreaker.jpg",friendsList:["1","2","4","3","6"]}];function h(e){return r.a.createElement(p.a,Object.assign({elevation:6,variant:"filled"},e))}var b=Object(u.a)((function(){return{container:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},form:{display:"flex",margin:0,width:300,flexDirection:"column"},textField:{marginBottom:"25px"},button:{width:"200px",margin:"40px auto 0"}}})),E=function(e){var t=e.setAuthorizedUserId,a=b(),i=Object(n.useState)(""),o=Object(c.a)(i,2),l=o[0],s=o[1],u=Object(n.useState)(""),p=Object(c.a)(u,2),E=p[0],y=p[1],j=Object(n.useState)(!1),v=Object(c.a)(j,2),O=v[0],x=v[1],w=function(e,t){"clickaway"!==t&&x(!1)},S=function(e,a){var n=g.filter((function(t){return t.login===e}));if(n.length){var r=n.filter((function(e){return e.password===a}));if(r.length){var i=Object(c.a)(r,1)[0];return localStorage.setItem("authorizedUserId",i.id),t(i.id),s(""),y(""),!0}}return!1};return r.a.createElement("div",{className:a.container},r.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault(),S(l,E)||x(!0)}},r.a.createElement(d.a,{value:l,className:a.textField,onChange:function(e){var t=e.target.value;return s(t)},label:"Login"}),r.a.createElement(d.a,{value:E,className:a.textField,onChange:function(e){var t=e.target.value;return y(t)},label:"Password",type:"password"}),r.a.createElement(m.a,{className:a.button,variant:"contained",color:"primary",type:"submit",disabled:!l||!E},"Log In")),r.a.createElement(f.a,{open:O,onClose:w},r.a.createElement(h,{onClose:w,severity:"error"},"Wrong login or password! Please try again.")))},y=a(115),j=a(124),v=a(116),O=a(117),x=a(111),w=a(121),S=a(118),k=a(21),C=Object(u.a)((function(){return{liStyle:{marginBottom:"25px",display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%",fontSize:"26px",margin:"auto"},img:{maxWidth:"100%",height:"auto"},photo:{overflow:"hidden",textAlign:"center",borderRadius:"50px",width:"100px",height:"100px"},name:{width:"30%",textAlign:"left"},buttonsContainer:{width:"30%",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"},friendStatus:{fontWeight:"300",color:"#655050"}}})),N=function(e){var t=e.user,a=t.id,n=t.name,i=t.photo,o=e.isFriend,c=e.changeCurrentUserFriendsList,l=e.currentUserFriendsList,s=C();return r.a.createElement("li",{id:a,className:s.liStyle,onClick:function(e){"add"!==e.target.getAttribute("data-btn-type")&&"add"!==e.target.parentNode.getAttribute("data-btn-type")||c([].concat(Object(k.a)(l),[a])),"delete"!==e.target.getAttribute("data-btn-type")&&"delete"!==e.target.parentNode.getAttribute("data-btn-type")||c(l.filter((function(e){return e!==a})))}},r.a.createElement("div",{className:s.photo},r.a.createElement("img",{alt:a,src:i,className:s.img})),r.a.createElement("div",{className:s.name},"".concat(n)),r.a.createElement("div",{className:s.buttonsContainer},o?r.a.createElement("p",{className:s.friendStatus},"friend"):null,o?null:r.a.createElement(m.a,{"data-btn-type":"add",variant:"contained",color:"primary"},"Add friend"),o?r.a.createElement(m.a,{"data-btn-type":"delete",variant:"contained",color:"secondary"},"Remove friend"):null))},L=Object(u.a)((function(){return{textField:{margin:"20px 0 20px 40px",width:"40%"}}})),U=function(e){var t=e.authorizedUserId,a=L(),i=g.filter((function(e){return e.id!==t})),o=Object(n.useState)(i),l=Object(c.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(""),f=Object(c.a)(m,2),p=f[0],h=f[1],b=g.find((function(e){return e.id===t})),E=Object(n.useState)(b.friendsList),j=Object(c.a)(E,2),v=j[0],O=j[1];Object(n.useEffect)((function(){u(i)}),[]),Object(n.useEffect)((function(){var e=i.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase().trim())}));u(e)}),[p]);return r.a.createElement(y.a,{direction:"column"},r.a.createElement(d.a,{className:a.textField,onChange:function(e){var t=e.target.value;t!==p&&h(t)},label:"Search user",type:"search",variant:"outlined"}),r.a.createElement("ul",null,s.map((function(e){return r.a.createElement(N,{key:e.id,user:e,changeCurrentUserFriendsList:O,currentUserFriendsList:v,isFriend:v.includes(e.id)})}))))},F=a(75),I=Object(u.a)((function(){return{typo:{padding:"0 30px",textAlign:"left",margin:"30px 0"}}})),A=function(e){var t=e.users,a=e.authorizedUserId,i=I(),o=t.filter((function(e){return e.id!==a})),l=t.find((function(e){return e.id===a})),s=o.filter((function(e){var t=e.id;return l.friendsList.includes(t)})),u=Object(n.useState)(l.friendsList),d=Object(c.a)(u,2),m=d[0],f=d[1],p=Object(n.useState)(s),g=Object(c.a)(p,2),h=g[0],b=g[1];return Object(n.useEffect)((function(){b(h.filter((function(e){var t=e.id;return m.includes(t)})))}),[m]),r.a.createElement(y.a,{direction:"column",justify:"space-between"},r.a.createElement(y.a,{className:i.typo},r.a.createElement(F.a,{variant:"h3",gutterBottom:!0},"Friends")),r.a.createElement("ul",null,h.length?h.map((function(e){return r.a.createElement(N,{key:e.id,currentUserFriendsList:m,changeCurrentUserFriendsList:f,user:e,isFriend:m.includes(e.id)})})):r.a.createElement(F.a,{align:"center",variant:"h4",gutterBottom:!0},"You haven't friends")))},z=Object(u.a)((function(){return{paperStyle:{width:"100%"},logOutBtn:{position:"absolute",right:0,height:"48px"}}})),B="USERS",R="FRIENDS",D={0:"USERS",1:"FRIENDS"},T=function(e){var t=e.setAuthorizedUserId,a=e.authorizedUserId,i=z(),o=Object(n.useState)(B),l=Object(c.a)(o,2),s=l[0],u=l[1],d=Object(n.useState)(0),f=Object(c.a)(d,2),p=f[0],h=f[1],b=Object(n.useState)(!1),E=Object(c.a)(b,2),k=E[0],C=E[1],N=function(){C(!1)};return r.a.createElement(y.a,null,r.a.createElement(j.a,{open:k,onClose:N},r.a.createElement(v.a,{id:"alert-dialog-title"},"Do you really want to left?"),r.a.createElement(O.a,null,r.a.createElement(m.a,{onClick:N,variant:"outlined"},"Disagree"),r.a.createElement(m.a,{onClick:function(){localStorage.clear(),t("")},color:"primary",variant:"contained",autoFocus:!0},"Agree"))),r.a.createElement(y.a,{container:!0,justify:"space-between"},r.a.createElement(x.a,{className:i.paperStyle},r.a.createElement(w.a,{value:p,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){u(D[t]),h(t)},"aria-label":"disabled tabs example"},r.a.createElement(S.a,{label:"Users"}),r.a.createElement(S.a,{label:"Friends"}))),r.a.createElement(m.a,{className:i.logOutBtn,variant:"outlined",color:"secondary",onClick:function(){C(!0)}},"Log Out")),s===B&&r.a.createElement(U,{users:g,authorizedUserId:a}),s===R&&r.a.createElement(A,{users:g,authorizedUserId:a}))};var P=function(){var e=Object(n.useState)(localStorage.authorizedUserId||""),t=Object(c.a)(e,2),a=t[0],i=t[1];return r.a.createElement(l.a,null,r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return a?r.a.createElement(s.a,{to:"/homePage"}):r.a.createElement(E,{setAuthorizedUserId:i})}}),r.a.createElement(s.b,{exact:!0,path:"/homePage",render:function(){return a?r.a.createElement(T,{authorizedUserId:a,setAuthorizedUserId:i}):r.a.createElement(s.a,{to:"/"})}}))};o.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.134b4d14.chunk.js.map