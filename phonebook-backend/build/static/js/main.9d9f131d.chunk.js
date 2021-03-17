(this["webpackJsonpphonebook-frontend"]=this["webpackJsonpphonebook-frontend"]||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(15),u=t.n(a),o=(t(20),t(6)),i=t(3),s=t(4),d=t.n(s),l="/api/persons",b={getAll:function(){return d.a.get(l).then((function(e){return e.data}))},create:function(e){return d.a.post(l,e).then((function(e){return e.data}))},deletePerson:function(e){return d.a.delete("".concat(l,"/").concat(e))},update:function(e){return d.a.put("".concat(l,"/").concat(e.id),e).then((function(e){return e.data}))}},j=t(0),f=function(e){var n=e.persons,t=e.filter,r=e.deleteHandlerCreator;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Numbers"}),n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(j.jsxs)("div",{children:[e.name," ",e.number,"\xa0",Object(j.jsx)("button",{onClick:r(e),children:"Delete"})]},e.name)}))]})},h=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Add new"}),Object(j.jsxs)("form",{onSubmit:e.submitHandler,children:[Object(j.jsxs)("div",{children:["name:\xa0",Object(j.jsx)("input",{value:e.newName,onChange:e.nameChangeHander})]}),Object(j.jsxs)("div",{children:["number:\xa0",Object(j.jsx)("input",{value:e.newNumber,onChange:e.numberChangeHandler})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})]})},m=function(e){var n=e.filter,t=e.filterChangeHandler;return Object(j.jsxs)("div",{children:["filter shown with: ",Object(j.jsx)("input",{value:n,onChange:t})]})},p=function(e){var n=e.data;if(null==n)return null;var t={color:"success"===n.type?"green":"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return Object(j.jsx)("div",{style:t,children:n.message})},O=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),u=Object(i.a)(a,2),s=u[0],d=u[1],l=Object(r.useState)(""),O=Object(i.a)(l,2),g=O[0],x=O[1],v=Object(r.useState)(""),w=Object(i.a)(v,2),C=w[0],y=w[1],H=Object(r.useState)(null),S=Object(i.a)(H,2),k=S[0],N=S[1],A=function(e){setTimeout((function(){N(null)}),3e3),N(e)};Object(r.useEffect)((function(){b.getAll().then((function(e){return c(e)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{data:k}),Object(j.jsx)(m,{filter:C,filterChangeHandler:function(e){return y(e.target.value)}}),Object(j.jsx)(h,{submitHandler:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===s}));if(0===n.length){var r={name:s,number:g};b.create(r).then((function(e){c(t.concat(e)),A({message:"Added ".concat(e.name,"."),type:"success"})})),d(""),x("")}else!function(e){if(window.confirm("".concat(s," is already added to phonebook, do you want to update the phone number?"))){var n=Object(o.a)(Object(o.a)({},e),{},{number:g});b.update(n).then((function(e){c(t.map((function(n){return n.id===e.id?e:n}))),A({message:"Updated phone number of ".concat(e.name,"."),type:"success"})})).catch((function(e){return A({message:"".concat(n.name," was already removed from the server."),type:"error"})}))}}(n[0])},newName:s,nameChangeHander:function(e){return d(e.target.value)},newNumber:g,numberChangeHandler:function(e){return x(e.target.value)}}),Object(j.jsx)(f,{persons:t,filter:C,deleteHandlerCreator:function(e){return function(){window.confirm("Delete ".concat(e.name,"?"))&&b.deletePerson(e.id).then((function(n){c(t.filter((function(e){return e.id!==n.id}))),A({message:"Deleted ".concat(e.name,"."),type:"success"})}))}}})]})};u.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9d9f131d.chunk.js.map