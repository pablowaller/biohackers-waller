(this["webpackJsonpbiohackers-waller"]=this["webpackJsonpbiohackers-waller"]||[]).push([[0],{70:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(10),i=c.n(n),o=(c(70),c(14)),s=c(7),l=c.p+"static/media/chicavr.9db8dc43.gif",d=c(107),b=c(116),j=c(115),m=c(2),x=Object(d.a)((function(e){return{navbar:{backgroundColor:"rgba(19, 20, 18, 0.507)",height:"5em",marginTop:"1px",width:"100%"},menu:{display:"grid",gridTemplateColumns:"repeat(5,auto)",gridGap:"5px",listStyleType:"none",paddingLeft:"85%",marginTop:"-3em"},navItem:{fontFamily:"Silkscreen",color:"red",display:"flex",flexDirection:"row",justifyContent:"center",textDecoration:"none",cursor:"pointer",margin:"3px 0px"},brandingStyle:{display:"flex",flexDirection:"row"},logo:{width:"7em",marginTop:"-1em",marginLeft:"0.1%"},tituloysubtitulo:{display:"flex",flexDirection:"column"},titulo:{fontFamily:"Silkscreen",fontSize:"3em",color:"red",textAlign:"center",marginTop:"1%"},subtitulo:{fontFamily:"Silkscreen",fontSize:"1em",color:"rgb(41, 209, 19)",marginTop:"-12%"},dropdown:{marginTop:"2%",marginLeft:"-0.5%",width:"10em",justifyContent:"center"},navItem2:{fontFamily:"Silkscreen",color:"red",textDecoration:"none",justifyContent:"center"},"@media (max-width: 1800px)":{logo:{marginLeft:"3%"},menu:{display:"flex",flexDirection:"column",marginTop:"-5em",marginLeft:"-4em"},dropdown:{marginTop:"2em",marginLeft:"4.5%",width:"10em",justifyContent:"center"},navItem2:{fontFamily:"Silkscreen",fontSize:"15px",color:"red",marginTop:"-3%",marginLeft:"auto",justifyContent:"center"}},"@media (max-width: 768px)":{tituloysubtitulo:{display:"none"},logo:{marginLeft:"3%"},menu:{display:"flex",flexDirection:"column",marginTop:"-5em",marginLeft:"-4em"},dropdown:{marginTop:"2.5rem",width:"9em",height:"20em",marginLeft:"0.3em"},navItem2:{fontFamily:"Silkscreen",fontSize:"15px",color:"red",marginTop:"-3%",marginLeft:"auto",justifyContent:"center"}}}}));function u(){var e=x(),t=Object(r.useState)(!1),c=Object(s.a)(t,2),a=c[0],n=c[1],i=function(){n(!1)};return Object(m.jsx)("header",{children:Object(m.jsxs)("nav",{className:e.navbar,children:[Object(m.jsxs)("div",{className:e.brandingStyle,children:[Object(m.jsx)(o.b,{to:"/#",children:Object(m.jsx)("img",{src:l,className:e.logo,alt:""})}),Object(m.jsxs)("div",{className:e.tituloysubtitulo,children:[Object(m.jsx)("h1",{className:e.titulo,children:"BIOHACKERS"}),Object(m.jsx)("h2",{className:e.subtitulo,children:"E-COMMERCE TRANSHUMANISTA"})]})]}),Object(m.jsxs)("ul",{className:e.menu,children:[Object(m.jsx)(o.b,{to:"/#",children:Object(m.jsx)("li",{className:e.navItem,children:"HOME"})}),Object(m.jsx)("li",{className:e.navItem,onClick:function(e){n(e.currentTarget)},children:"PRODUCTOS"}),Object(m.jsxs)(b.a,{className:e.dropdown,anchorEl:a,open:Boolean(a),onClose:i,children:[Object(m.jsx)(j.a,{className:e.navItem2,onClick:i,children:Object(m.jsx)(o.b,{to:"/category/".concat("tangibles"),className:e.navItem2,children:"TANGIBLES"})}),Object(m.jsx)(j.a,{className:e.navItem2,onClick:i,children:Object(m.jsx)(o.b,{to:"/category/".concat("intangibles"),className:e.navItem2,children:"INTANGIBLES"})})]}),Object(m.jsx)(o.b,{to:"/carrito",children:Object(m.jsx)("li",{className:e.navItem,children:"CARRITO"})})]})]})})}var O=c.p+"static/media/drone.87922698.gif",h=c(26),p=c(11),g=Object(r.createContext)(),f=function(e){var t=Object(r.useState)([]),c=Object(s.a)(t,2),a=c[0],n=c[1],i=Object(r.useState)(0),o=Object(s.a)(i,2),l=o[0],d=o[1],b=Object(r.useState)(0),j=Object(s.a)(b,2),x=j[0],u=j[1];return Object(m.jsx)(g.Provider,{value:{addProducto:function(e){if(d(l+e.item.price*e.quantity),u(x+e.quantity),a.find((function(t){return t.item.id===e.item.id}))){var t=a.map((function(t){var c=t.quantity+e.quantity;return t.item.id===e.item.id?Object(p.a)(Object(p.a)({},t),{},{quantity:c}):{productoCarrito:t}}));n(t)}else n((function(t){return[].concat(Object(h.a)(t),[e])}))},removeProducto:function(e){var t=a.find((function(t){return t.item.id===e}));d(l-t.item.price*t.quantity),u(x-t.quantity),n(a.filter((function(t){return t.item.id!==e})))},subtotal:l,clear:function(){n([]),d(0),u(0)},productosCarrito:a,productosQuantity:x},children:e.children})},N=Object(d.a)((function(e){return{carritoWidget:{display:"flex",flexDirection:"column",marginTop:"-100px",width:"8.5em"},letras:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},"@media (max-width: 1024px)":{carritoWidget:{display:"flex",flexDirection:"column",marginTop:"auto",marginLeft:"33%"},drone:{width:"80%"}}}})),k=function(){var e=Object(r.useContext)(g),t=e.productosCarrito,c=e.productosQuantity,a=N(),n=function(){return Object(m.jsx)("div",{className:a.carritoWidget,children:Object(m.jsxs)(o.b,{to:"/carrito",style:{color:"transparent"},children:[Object(m.jsx)("div",{className:a.carritoWidget,children:Object(m.jsx)("img",{src:O,className:a.drone,alt:""})}),Object(m.jsxs)("h3",{className:a.letras,children:["TU COMPRA (",c,")"]})]})})};return Object(m.jsx)(m.Fragment,{children:0!==t.length?Object(m.jsx)("section",{children:Object(m.jsx)(n,{})}):Object(m.jsx)(m.Fragment,{})})},y=c(12),C=c.p+"static/media/camrobot1.c1f627f5.gif",S=c.p+"static/media/camrobot2.2a22359a.gif",v=c(112),w=Object(d.a)((function(e){return{title:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},img:{width:"10em",margin:"auto"},price:{fontFamily:"Silkscreen",color:"rgb(223, 13, 188)"},description:{fontFamily:"Silkscreen",color:"rgb(241, 241, 241)"},"@media (max-width: 768px)":{title:{fontSize:"20px"},img:{margin:"auto",width:"14em"},description:{fontSize:"15px"}}}})),R=function(e){var t=e.producto,c=w(),r=t.id,a=t.pictureUrl,n=t.title,i=t.price,s=t.description;return Object(m.jsx)("div",{className:c.item,children:Object(m.jsxs)(o.b,{to:"/product/".concat(r),style:{color:"transparent"},children:[Object(m.jsx)(v.a,{className:c.img,component:"img",image:a,title:n,alt:n}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"row--1",children:[Object(m.jsx)("h3",{className:c.title,children:n}),Object(m.jsxs)("h4",{className:c.price,children:["$",i]})]}),Object(m.jsx)("h5",{className:c.description,children:s})]})]})})},F=function(e){var t=e.productos;return Object(m.jsx)(m.Fragment,{children:t.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)(R,{producto:e})},t)}))})},A=c(54),T=(c(57),A.a.initializeApp({apiKey:"AIzaSyDUqR0PyBqRVHB6t1xkIGebatTqAjDLK0I",authDomain:"biohackers-waller.firebaseapp.com",projectId:"biohackers-waller",storageBucket:"biohackers-waller.appspot.com",messagingSenderId:"916301897599",appId:"1:916301897599:web:83a3e1b356986ba700444a"}).firestore()),I=A.a.firestore.FieldPath.documentId(),E=Object(d.a)((function(e){return{row1:{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"1em"},bienvenida:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},cambot:{width:"6em",marginTop:"-1%"},container:{display:"inline-block",backgroundColor:"rgba(19, 17, 17, 0.438)",borderRadius:"25px 25px 25px 25px",width:"60%"},items:{display:"grid",alignItems:"center",gridTemplateColumns:"1fr 1fr 1fr"},linkitems:{color:"transparent"},loading:{fontFamily:"Silkscreen",fontSize:"2.5em",color:"red",padding:"auto"},"@media (max-width: 1300px)":{items:{gridTemplateColumns:"1fr 1fr"}},"@media (max-width: 768px)":{row1:{margin:"auto"},bienvenida:{fontSize:"18px"},cambot:{height:"4.3em",top:"2em"},container:{backgroundColor:"rgba(19, 17, 17, 0.438)",borderRadius:"25px 25px 25px 25px",width:"100%"},items:{display:"flex",flexDirection:"column",height:"auto"}}}})),D=function(){var e=E(),t=Object(r.useState)([]),c=Object(s.a)(t,2),a=c[0],n=c[1],i=Object(y.h)().category;return Object(r.useEffect)((function(){var e=T.collection("productos");(void 0!==i&&null!==i?e.where("category","==",i).get():e.get()).then((function(e){var t=[];e.forEach((function(e){t.push(Object(p.a)({id:e.id},e.data()))})),n(t)})).catch((function(){return Object(m.jsx)(y.a,{to:"/notFound"})}))}),[i]),Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsxs)("section",{children:[Object(m.jsxs)("div",{className:e.row1,children:[Object(m.jsx)("img",{src:C,className:e.cambot,alt:""}),Object(m.jsx)("h3",{className:e.bienvenida,children:"BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045"}),Object(m.jsx)("img",{src:S,className:e.cambot,alt:""})]}),Object(m.jsx)("div",{className:e.container,children:Object(m.jsx)("h1",{className:e.loading,children:"CARGANDO..."})})]}):Object(m.jsxs)("section",{children:[Object(m.jsxs)("div",{className:e.row1,children:[Object(m.jsx)("img",{src:C,className:e.cambot,alt:""}),Object(m.jsx)("h3",{className:e.bienvenida,children:"BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045"}),Object(m.jsx)("img",{src:S,className:e.cambot,alt:""})]}),Object(m.jsx)("div",{className:e.container,children:Object(m.jsx)("div",{className:e.items,children:Object(m.jsx)(F,{productos:a})})})]})})},L=c(113),z=Object(d.a)((function(e){return{contador:{display:"inline-block"},sumarYRestar:{display:"flex",flexDirection:"row",alignItems:"center"},numero:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",marginTop:"8%"},boton:{borderStyle:"solid",display:"inline-block",padding:"20px",backgroundColor:"rgb(30, 208, 240)",borderRadius:"50%",height:"50px",margin:"20px",cursor:"pointer"},signo:{fontSize:"15px"},agregar:{backgroundColor:"rgb(233, 30, 240)",cursor:"pointer"},cancelar:{backgroundColor:"rgb(240, 30, 30)",cursor:"pointer"},finalizar:{backgroundColor:"rgb(31, 207, 7)",cursor:"pointer"},botonclose:{borderStyle:"solid",display:"inline-block",backgroundColor:"rgb(240, 30, 30)",height:"3em",width:"3em",marginLeft:"1em",borderRadius:"25px 25px 25px 25px",cursor:"pointer"},letrasboton:{fontFamily:"Silkscreen",justifyContent:"center",color:"white",textShadow:"none"},"@media(max - width: 768px)":{boton:{padding:"20px"},numero:{fontSize:"14px"}}}})),P=function(e){var t=z(),c=e.stock,a=e.initial,n=e.cantidad,i=e.agregarProductos,o=Object(r.useState)(a>n?a:n),l=Object(s.a)(o,2),d=l[0],b=l[1];return Object(m.jsxs)("div",{className:t.contador,children:[Object(m.jsxs)("div",{className:t.sumarYRestar,children:[Object(m.jsx)("button",{onClick:function(){b(d-1)},className:t.boton,disabled:d===a,children:Object(m.jsx)("b",{className:t.signo,children:"-"})}),Object(m.jsx)("h3",{className:t.numero,children:d}),Object(m.jsx)("button",{onClick:function(){b(d+1)},className:t.boton,disabled:!(d<c),children:Object(m.jsx)("b",{className:t.signo,children:"+"})})]}),Object(m.jsx)("button",{className:t.agregar,onClick:function(){return i(d)},disabled:0===c,children:Object(m.jsx)("h3",{className:t.letrasboton,children:"AGREGAR AL CARRITO"})}),d===c]})},q=Object(d.a)((function(e){return{row2:{display:"flex",flexDirection:"row",justifyContent:"center"},cancelar:{backgroundColor:"rgb(240, 30, 30)",cursor:"pointer"},finalizar:{backgroundColor:"rgb(31, 207, 7)",cursor:"pointer"},botonclose:{borderStyle:"solid",display:"inline-block",backgroundColor:"rgb(240, 30, 30)",height:"3em",width:"3em",marginLeft:"1em",borderRadius:"25px 25px 25px 25px",cursor:"pointer"},letrasboton:{fontFamily:"Silkscreen",justifyContent:"center",color:"white",textShadow:"none"},"@media (max-width: 768px)":{cancelar:{backgroundColor:"rgb(240, 30, 30)",width:"10em",marginRight:"5%",cursor:"pointer"},finalizar:{backgroundColor:"rgb(31, 207, 7)",width:"10em",marginLeft:"5%",cursor:"pointer"},letrasboton:{marginTop:"9%"}}}})),B=function(e){var t=q(),c=e.clickCancelar;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:t.row2,children:[Object(m.jsx)("button",{className:t.cancelar,onClick:function(){return c(!1)},children:Object(m.jsx)("h3",{className:t.letrasboton,children:"CANCELAR COMPRA"})}),Object(m.jsx)(o.b,{to:"/carrito",children:Object(m.jsx)("button",{className:t.finalizar,children:Object(m.jsx)("h3",{className:t.letrasboton,children:"FINALIZAR COMPRA"})})})]})})},M=Object(d.a)((function(e){return{itemDetail:{marginTop:"7%"},title:{fontFamily:"Silkscreen",fontSize:"1.5em",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},description:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},stock:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",marginLeft:"3%"},price:{fontFamily:"Silkscreen",color:"rgb(223, 13, 188)",marginLeft:"3%"}}})),U=function(e){var t=e.producto,c=M(),a=Object(r.useState)(0),n=Object(s.a)(a,2),i=n[0],o=n[1],l=Object(r.useState)(!1),d=Object(s.a)(l,2),b=d[0],j=d[1],x=Object(r.useContext)(g),u=x.addProducto,O=x.clear,h=t.title,p=t.description,f=t.price,N=t.stock,k=t.pictureUrl;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:c.itemDetail,children:Object(m.jsxs)(L.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:2,children:[Object(m.jsx)(L.a,{item:!0,xs:12,lg:4,children:Object(m.jsx)(v.a,{component:"img",image:k,title:h,alt:h})}),Object(m.jsxs)(L.a,{item:!0,xs:12,lg:4,children:[Object(m.jsx)("h3",{className:c.title,children:h}),Object(m.jsx)("h3",{className:c.description,children:p}),Object(m.jsxs)("h4",{className:c.price,children:["$",f]}),b?Object(m.jsx)(B,{clickCancelar:function(){j(!1),O()}}):Object(m.jsx)(P,{stock:N,initial:1,cantidad:i,agregarProductos:function(e){o(e),j(!0),u({item:t,quantity:e})}}),Object(m.jsxs)("h3",{className:c.stock,children:[N," UNIDADES EN STOCK"]})]})]})})})},G=Object(d.a)((function(e){return{containerDetail:{display:"inline-block",backgroundColor:"rgba(19, 17, 17, 0.507)",borderRadius:"25px 25px 25px 25px",width:"40%"},loader:{padding:"18%",fontSize:"3em"},"@media (max-width: 768px)":{containerDetail:{display:"inline-block",backgroundColor:"rgba(19, 17, 17, 0.507)",borderRadius:"25px 25px 25px 25px",width:"100%",marginTop:"2em"}}}})),$=function(){var e=G(),t=Object(y.h)().id,c=Object(r.useState)([]),a=Object(s.a)(c,2),n=a[0],i=a[1],o=Object(r.useState)(!1),l=Object(s.a)(o,2),d=l[0],b=l[1],j=Object(r.useState)(!1),x=Object(s.a)(j,2),u=x[0],O=x[1];return Object(r.useEffect)((function(){var e=T.collection("productos").doc(t);b(!1),e.get().then((function(e){e.exists?i(Object(p.a)({id:e.id},e.data())):O(!0)})).catch((function(e){console.log("Error getting document:",e),O(!0)})).finally((function(){b(!0)})).catch((function(){return Object(m.jsx)(y.a,{to:"/notFound"})}))}),[t]),Object(m.jsx)(m.Fragment,{children:d?Object(m.jsx)(m.Fragment,{children:u?Object(m.jsx)("h1",{children:"\xa1Ups! Ese item no se encuentra en nuestro cat\xe1logo."}):Object(m.jsx)("div",{className:e.containerDetail,children:Object(m.jsx)(U,{producto:n})})}):Object(m.jsx)("div",{})})},H=c(13),V=c(47),Z=Object(d.a)((function(e){return{row4:{display:"flex",flexDirection:"row",marginTop:"3%"},input:{height:"3.5em",borderRadius:"25px 25px 25px 25px ",backgroundColor:"rgb(63, 191, 191)"},letras:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},total:{fontFamily:"Silkscreen",color:"rgb(223, 13, 188)",marginLeft:"3%",marginTop:"3%"},confirmar:{backgroundColor:"rgb(79, 16, 141)",cursor:"pointer",marginLeft:"38%"},letrasBoton:{fontFamily:"Silkscreen",justifyContent:"center",color:"white",textShadow:"none"},margin:{marginTop:"10px"},letrasRojas:{fontFamily:"Silkscreen",fontSize:"0.8em",color:"red"},"@media (max-width: 768px)":{confirmar:{marginLeft:"none"},margin:{marginTop:"10px"}}}})),K=function e(t,c,r){Object(V.a)(this,e),this.nombre=t,this.apellido=c,this.email=r},W=new K("","",""),X=Object(p.a)(Object(p.a)({},new K(!1,!1,!1)),{},{confirmacionEmail:!1}),Y=new K(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda][a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda \s]*$/,/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda][a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda \s]*$/,/^[^\s@]+@[^\s@]+$/),J=function(e){var t=Z(),c=e.ended,a=e.addOrder,n=e.totalPrice,i=Object(r.useState)(X),o=Object(s.a)(i,2),l=o[0],d=o[1],b=Object(r.useState)(W),j=Object(s.a)(b,2),x=j[0],u=j[1],O=Object(r.useState)(!1),h=Object(s.a)(O,2),g=h[0],f=h[1],N=function(e){var t=e.target,c=t.name,r=t.value;Y[c].test(r)?(d(Object(p.a)(Object(p.a)({},l),{},Object(H.a)({},c,!1))),u(Object(p.a)(Object(p.a)({},x),{},Object(H.a)({},c,r)))):d(Object(p.a)(Object(p.a)({},l),{},Object(H.a)({},c,!0)))};return Object(r.useEffect)((function(){c&&(d(X),u(W))}),[c]),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=!0;for(var c in x){if(!Y[c].test(x[c])){t=!1;break}}t?(f(!1),a(x)):f(!0)},children:[Object(m.jsx)("h3",{className:t.letras,children:"RELLENE LOS CAMPOS"}),Object(m.jsx)("input",{className:t.input,placeholder:"Ingresa tu nombre.",name:"nombre",label:"Nombre",required:!0,onChange:N}),Object(m.jsx)("br",{}),l.nombre?Object(m.jsx)("div",{className:t.margin,children:Object(m.jsx)("b",{className:t.letrasRojas,children:"El nombre solo debe estar compuesto por letras"})}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:t.input,placeholder:"Ingresa tu apellido",name:"apellido",label:"Apellido",required:!0,onChange:N}),Object(m.jsx)("br",{}),l.apellido?Object(m.jsx)("div",{className:t.margin,children:Object(m.jsx)("b",{className:t.letrasRojas,children:"El apellido solo debe estar compuesto por letras"})}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:t.input,placeholder:"Introduc\xed tu email.",name:"email",label:"Email",required:!0,onChange:N}),Object(m.jsx)("br",{}),l.email?Object(m.jsx)("div",{className:t.margin,children:Object(m.jsx)("b",{className:t.letrasRojas,children:"Ingrese un correo electronico valido"})}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:t.input,placeholder:"Confirmar Email.",name:"confirmacionEmail",required:!0,onChange:function(e){var t=e.target,c=t.name,r=t.value;0!==x.email.localeCompare(r)?d(Object(p.a)(Object(p.a)({},l),{},Object(H.a)({},c,!0))):d(Object(p.a)(Object(p.a)({},l),{},Object(H.a)({},c,!1)))}}),Object(m.jsx)("br",{}),l.confirmacionEmail?Object(m.jsx)("div",{className:t.margin,children:Object(m.jsx)("b",{className:t.letrasRojas,children:"Los dos correos deben coincidir"})}):Object(m.jsx)(m.Fragment,{}),Object(m.jsxs)("div",{className:t.row4,children:[Object(m.jsxs)("div",{className:t.total,children:[" Total: $",n]}),Object(m.jsx)("button",{className:t.confirmar,type:"submit",children:Object(m.jsx)("p",{className:t.letrasBoton,children:"CONFIRMAR PAGO"})})]}),g?Object(m.jsx)("div",{className:t.margin,children:Object(m.jsx)("b",{className:t.letrasRojas,children:"Revise los datos del formulario."})}):Object(m.jsx)(m.Fragment,{})]})},Q=c.p+"static/media/waiting.7e766fb0.gif",_=c(118),ee=c(114),te=T.collection("orders"),ce=T.collection("productos"),re=Object(d.a)((function(e){return{letras:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},total:{fontFamily:"Silkscreen",color:"rgb(223, 13, 188)",marginLeft:"3%"},carritoTotal:{margin:"auto"},finalizar:{backgroundColor:"rgb(233, 30, 240)",cursor:"pointer"},letrasBoton:{fontFamily:"Silkscreen",color:"white",textShadow:"none"},espera:{width:"33em",borderRadius:"25px 25px 25px 25px"},row3:{display:"flex",flexDirection:"row"},botonClose:{backgroundColor:"#C01F1F",borderStyle:"solid",height:"3em",marginTop:"4.5%",cursor:"pointer"},cruz:{fontFamily:"Silkscreen",justifyContent:"center",color:"white",textShadow:"none"},dialog:{borderRadius:"25px 25px 25px 25px"},dialogContent:{backgroundColor:"rgba(22, 22, 20, 0.87)"},"@media (max-width: 768px)":{botonClose:{marginTop:"18%",marginLeft:"10%"},espera:{width:"15em",borderRadius:"25px 25px 25px 25px"}}}})),ae=function(e){var t=re(),c=e.totalPrice,a=e.addOrderId,n=Object(r.useContext)(g),i=n.productosCarrito,o=n.clear,l=Object(r.useState)(!1),d=Object(s.a)(l,2),b=d[0],j=d[1],x=Object(r.useState)(!0),u=Object(s.a)(x,2),O=u[0],h=u[1],f=Object(r.useState)(!1),N=Object(s.a)(f,2),k=N[0],y=N[1],C=Object(r.useState)(!1),S=Object(s.a)(C,2),v=S[0],w=S[1],R=Object(r.useState)([]),F=Object(s.a)(R,2),A=F[0],E=F[1],D=Object(r.useState)(),L=Object(s.a)(D,2),z=L[0],P=L[1],q=function(){k&&!v&&o(),j(!1),h(!0),y(!1),w(!1),E([]),P()},B=function(e){var t,r=function(e){var t=new Date,r=[];return i.forEach((function(e){var t={id:e.item.id,title:e.item.title,price:e.item.price,quantity:e.quantity};r.push(t)})),{comprador:e,items:r,date:t,total:c}}(e);try{(t=r,te.add(t)).then((function(e){P(e.id),a(e.id)})).catch((function(e){console.error("Error adding document: ",e)}))}catch(n){console.log("Firebase add doc error:",n)}};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:t.carritoTotal,children:[Object(m.jsxs)("h4",{className:t.total,children:["Total del carrito: $",c]}),Object(m.jsx)("button",{className:t.finalizar,onClick:function(){j(!0)},children:Object(m.jsx)("p",{className:t.letrasBoton,children:"Finalizar Compra"})})]}),Object(m.jsx)(_.a,{className:t.dialog,onClose:q,open:b,children:Object(m.jsxs)(ee.a,{className:t.dialogContent,children:[O?Object(m.jsx)(J,{addOrder:function(e){var t=T.batch();h(!1);var c,r=[];(c=i,ce.where(I,"in",c.map((function(e){return e.item.id}))).get()).then((function(c){c.docs.forEach((function(e,c){var a=e.data(),n=i[c].quantity;a.stock>=n?t.update(e.ref,{stock:a.stock-n}):r.push(Object(p.a)({id:e.id,cantidad:n},a))})),0===r.length?t.commit().then((function(){B(e)})):(E(r),w(!0))})).finally((function(){y(!0)}))},totalPrice:c,ended:!O}):Object(m.jsx)(m.Fragment,{}),k&&v?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{className:t.letras,children:"No fue posible ejecutar la compra"}),Object(m.jsx)("h2",{className:t.letras,children:"Productos sin el stock pedido: "}),Object(m.jsx)("ul",{children:A.map((function(e,t){return Object(m.jsxs)("li",{children:[e.titulo," pedido por ",e.cantidad," unidades."]},t)}))})]}):k&&!v?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:t.row3,children:[Object(m.jsx)("h1",{className:t.letras,children:"\xa1TU COMPRA HA SIDO REALIZADA CON EXITO!"}),Object(m.jsx)("button",{className:t.botonClose,onClick:q,children:Object(m.jsx)("p",{className:t.cruz,children:"X"})})]}),Object(m.jsx)("img",{src:Q,className:t.espera,alt:""}),Object(m.jsx)("h4",{className:t.letras,children:"AGUARDE LA LLEGADA DEL DRONE CON SU PRODUCTO"}),Object(m.jsxs)("h3",{className:t.letras,children:["ID de compra: ",z]})]}):Object(m.jsx)(m.Fragment,{})]})})]})},ne=Object(d.a)((function(e){return{containerCarrito:{display:"inline-block",backgroundColor:"rgba(19, 17, 17, 0.507)",borderRadius:"25px 25px 25px 25px",width:"60%"},tableShop:{margin:"auto"},letras:{fontFamily:"Silkscreen",color:"rgb(41, 209, 19)",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"},letrasBoton:{fontFamily:"Silkscreen",justifyContent:"center",color:"white",textShadow:"none"},botonClose:{borderStyle:"solid",display:"inline-block",backgroundColor:"rgb(240, 30, 30)",height:"3em",width:"3em",marginLeft:"1em",borderRadius:"25px 25px 25px 25px",cursor:"pointer"},carritoTotal:{margin:"auto"},volver:{backgroundColor:"rgb(233, 30, 240)",cursor:"pointer"},finalizar:{backgroundColor:"rgb(233, 30, 240)",cursor:"pointer"},cruz:{fontFamily:"Silkscreen",justifyContent:"center",color:"white",textShadow:"none"},total:{fontFamily:"Silkscreen",color:"rgb(223, 13, 188)",marginLeft:"3%"},"@media (max-width: 768px)":{containerCarrito:{display:"inline-block",backgroundColor:"rgba(19, 17, 17, 0.507)",borderRadius:"25px 25px 25px 25px",width:"100%",marginTop:"3%"},table:{overflowX:"scroll",textAlign:"center",justifyContent:"center"},tableShop:{textAlign:"center",justifyContent:"center"},letras:{fontSize:"14px"},ancho:{width:"100%"}}}})),ie=function(){var e=Object(r.useContext)(g),t=e.productosCarrito,c=e.removeProducto,a=ne();return Object(m.jsx)("div",{className:a.table,children:Object(m.jsxs)("table",{className:a.tableShop,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsx)("h3",{className:a.letras,children:"Producto"})}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{children:Object(m.jsx)("h3",{className:a.letras,children:"Precio"})}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{children:Object(m.jsx)("h3",{className:a.letras,children:"Cantidad"})}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{children:Object(m.jsx)("h3",{className:a.letras,children:"Subtotal"})}),Object(m.jsx)("th",{})]})}),Object(m.jsx)("tbody",{children:t.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("h3",{className:a.letras,children:e.item.title})}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:Object(m.jsx)("h3",{className:a.letras,children:e.item.price})}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:Object(m.jsx)("h3",{className:a.letras,children:e.quantity})}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:Object(m.jsxs)("h3",{className:a.letras,children:[" $",e.quantity*e.item.price]})}),Object(m.jsx)("td",{children:Object(m.jsx)("button",{className:a.botonClose,onClick:function(t){return c(e.item.id)},children:Object(m.jsx)("h3",{className:a.cruz,children:"X"})})})]},t)}))})]})})},oe=function(){var e=ne(),t=Object(y.g)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{className:e.letras,children:"NO HAY PRODUCTOS EN EL CARRITO :("}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:e.volver,onClick:function(){return t.push("/")},children:Object(m.jsx)("p",{className:e.letrasBoton,children:"Volver al inicio"})})})]})},se=function(){var e=ne(),t=Object(r.useContext)(g),c=t.productosCarrito,a=t.subtotal;return Object(m.jsx)("div",{className:e.containerCarrito,children:0===c.length?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(oe,{})}):Object(m.jsxs)(m.Fragment,{children:["    ",Object(m.jsx)(ie,{productosCarrito:c,subtotal:a}),Object(m.jsx)(ae,{totalPrice:a})]})})},le=c.p+"static/media/robotonmars.8ec6cfd7.gif",de=Object(d.a)((function(e){return{container:{display:"inline-block",justifyContent:"center",backgroundColor:"rgba(19, 17, 17, 0.438)",borderRadius:"25px 25px 25px 25px",height:"40em",width:"80em",marginTop:"1em"},error:{fontFamily:"Silkscreen",color:"red"},robotOnMars:{width:"24em",borderRadius:"25px 25px 25px 25px"},volver:{backgroundColor:"rgb(233, 30, 240)",cursor:"pointer"},letras:{fontFamily:"Silkscreen",justifyContent:"center",color:"white",textShadow:"none"},"@media (max-width: 768px)":{container:{display:"flex",flexDirection:"column",backgroundColor:"rgba(19, 17, 17, 0.438)",borderRadius:"25px 25px 25px 25px",width:"100%"},robotOnMars:{width:"15em",borderRadius:"25px 25px 25px 25px"}}}})),be=function(){var e=de();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:e.container,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:e.error,children:"ERROR 404 - PAGE NOT FOUND"}),Object(m.jsx)("img",{src:le,className:e.robotOnMars,alt:""})]}),Object(m.jsx)("br",{}),Object(m.jsx)(o.b,{to:"/#",children:Object(m.jsx)("button",{className:e.volver,children:Object(m.jsx)("p",{className:e.letras,children:"VOLVER AL INICIO"})})}),Object(m.jsx)("br",{})]})})},je=function(){return Object(m.jsxs)(y.d,{children:[Object(m.jsx)(y.b,{exact:!0,path:"/",children:Object(m.jsx)(D,{})}),Object(m.jsx)(y.b,{path:"/category/:category",children:Object(m.jsx)(D,{})}),Object(m.jsx)(y.b,{path:"/product/:id",children:Object(m.jsx)($,{})}),Object(m.jsx)(y.b,{path:"/carrito",children:Object(m.jsx)(se,{})}),Object(m.jsx)(y.b,{path:"/notFound",children:Object(m.jsx)(be,{})})]})},me=(c(81),function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(f,{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(u,{}),Object(m.jsx)(je,{}),Object(m.jsx)(k,{})]})})})})});i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(me,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.8cc75e18.chunk.js.map