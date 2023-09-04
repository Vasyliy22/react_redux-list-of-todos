(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(13),a=c.n(n),s=c(12),r=c(23),o=c(10),i=c(21),l=c(22),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(9),b={query:"",status:"all"},m=function(e){return{type:"query/SET",payload:e}},O=function(e){return{type:"all/SET",payload:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/SET":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"all/SET":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});default:return e}},x=c(6),p=function(e){return{type:"todo/SET",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todo/SET"===t.type?[].concat(Object(x.a)(e),Object(x.a)(t.payload)):e},y=Object(o.combineReducers)({currentTodo:j,filter:f,todos:v}),N=Object(o.createStore)(y,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),g=c(3),T=c(0),w=(c(31),c(32),function(e,t,c){var n=Object(x.a)(e);switch(t&&(n=n.filter((function(e){return e.title.toLowerCase().trim().includes(t.toLowerCase().trim())}))),c){case"Completed":n=n.filter((function(e){return e.completed}));break;case"Active":n=n.filter((function(e){return!e.completed}))}return n}),S=(c(33),c(1)),k=function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})},E=function(e){var t=e.todo,c=e.currentTodo,n=e.showTodoUser,a=t.id,s=t.title,r=t.completed;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("td",{className:"is-vcentered",children:a}),Object(S.jsx)("td",{className:"is-vcentered",children:Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:r?Object(S.jsx)("i",{className:"fas fa-check"}):""})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:r?"has-text-success":"has-text-danger",children:s})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:t!==c?Object(S.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return n(t)},children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"far fa-eye"})})}):Object(S.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return n(t)},children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"far fa-eye-slash"})})})})]})},C=function(e){var t=e.showTodoUser,c=e.isLoader,n=e.value,a=e.status,s=e.todos,r=e.currentTodo,o=w(s,n,a);return Object(S.jsxs)(S.Fragment,{children:[o.length<=0&&Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),c?Object(S.jsx)(k,{}):Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:o.map((function(e){return Object(S.jsx)("tr",{"data-cy":"todo",className:e===r?"has-background-info-light":"",children:Object(S.jsx)(E,{todo:e,currentTodo:r,showTodoUser:t})},e.id)}))})]})]})},q=function(e){var t=e.query,c=e.status,n=e.handleChangeSearch,a=e.handleChangeStatus;return Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsx)("select",{value:c,"data-cy":"statusSelect",onChange:function(e){var t=e.target;return a(t.value)},children:["All","Active","Completed"].map((function(e){return Object(S.jsx)("option",{value:e,children:e},e)}))})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:t,placeholder:"Search...",onChange:function(e){var t=e.target;return n(t.value)}}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),""!==t&&Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},L=c(2),U=c(5);function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var B=function(e){var t=e.todo,c=e.removeTodoUser,n=Object(T.useState)(null),a=Object(g.a)(n,2),s=a[0],r=a[1],o=function(){var e=Object(U.a)(Object(L.a)().mark((function e(){var c;return Object(L.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t.userId||0,_("/users/".concat(n));case 2:c=e.sent,r(c);case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.useEffect)((function(){o()}),[]),Object(S.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(S.jsx)("div",{className:"modal-background"}),s?Object(S.jsxs)("div",{className:"modal-card",children:[Object(S.jsxs)("header",{className:"modal-card-head",children:[Object(S.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(S.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(S.jsxs)("div",{className:"modal-card-body",children:[Object(S.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(S.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(S.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(S.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(S.jsx)("a",{href:"mailto:".concat(null===s||void 0===s?void 0:s.email),children:null===s||void 0===s?void 0:s.name})]})]})]}):Object(S.jsx)(k,{})]})},A=s.b,D=s.c,F=function(){var e=Object(T.useState)(!0),t=Object(g.a)(e,2),c=t[0],n=t[1],a=A(),s=D((function(e){return e.todos})),r=D((function(e){return e.filter.query})),o=D((function(e){return e.filter.status})),i=D((function(e){return e.currentTodo}));Object(T.useEffect)((function(){_("/todos").then((function(e){a(p(e))})).catch((function(e){return e})),n(!1)}),[a]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(q,{handleChangeSearch:function(e){a(m(e))},handleChangeStatus:function(e){a(O(e))},query:r,status:o})}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(C,{todos:s,value:r,status:o,showTodoUser:function(e){a(d(e))},isLoader:c,currentTodo:i})})]})})}),i&&Object(S.jsx)(B,{removeTodoUser:function(){a(u())},todo:i})]})},I=function(){return Object(S.jsx)(s.a,{store:N,children:Object(S.jsx)(r.a,{children:Object(S.jsx)(F,{})})})};a.a.render(Object(S.jsx)(I,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.eb5aa003.chunk.js.map