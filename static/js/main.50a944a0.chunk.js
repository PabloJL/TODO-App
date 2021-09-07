(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(2),c=n.n(o),a=n(7),r=n.n(a),s=(n(15),n(6)),l=n(3);var i=n(1),d=c.a.createContext();function u(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),i=Object(l.a)(s,2),d=i[0],u=i[1],j=c.a.useState(t),b=Object(l.a)(j,2),h=b[0],m=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),u(!1)}catch(a){r(a)}}),1e3)})),{item:h,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(a){r(a)}},loading:d,error:a}}("todos_v1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,u=c.a.useState(""),j=Object(l.a)(u,2),b=j[0],h=j[1],m=c.a.useState(!1),x=Object(l.a)(m,2),p=x[0],f=x[1],O=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(i.jsx)(d.Provider,{value:{error:r,loading:a,totalTodos:v,completedTodos:O,searchValue:b,setSearchValue:h,searchedTodos:g,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},unCompleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!1,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:p,setOpenModal:f},children:e.children})}n(17);function j(){var e=c.a.useContext(d),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["You have completed ",n," out of ",t," tasks"]})}n(18);function b(){var e=c.a.useContext(d),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Search",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}n(19);function h(e){return Object(i.jsx)("section",{children:e.children})}n(20);var m=n(10),x=n(4);function p(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.completed?e.unComplete:e.onComplete,children:Object(i.jsx)(x.a,{})}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:Object(i.jsx)(m.a,{})})]})}n(21);function f(){var e=c.a.useContext(d),t=e.addTodo,n=e.setOpenModal,o=c.a.useState(""),a=Object(l.a)(o,2),r=a[0],s=a[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),n(!1)},children:[Object(i.jsx)("label",{children:"Write your new task"}),Object(i.jsx)("textarea",{value:r,onChange:function(e){s(e.target.value)},placeholder:"Write here the task you want to complete"}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button-cancel",type:"button",onClick:function(){n(!1)},children:"Cancel"}),Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",disabled:!r,children:"Add"})]})]})}n(22);function O(){var e=c.a.useContext(d),t=e.openModal,n=e.setOpenModal;return Object(i.jsx)("button",{className:"CreateTodoButton ".concat(t&&"Create"),onClick:function(){n(!t)},children:"+"})}n(23);function v(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function g(e){e.error;return Object(i.jsx)("p",{children:"There was a mistake, please refresh the page"})}n(24);function T(){return Object(i.jsx)("div",{className:"LoadingTodo-container",children:Object(i.jsx)("p",{className:"LoadingTodo-text",children:"Loading, please wait..."})})}n(25);function C(){return Object(i.jsx)("p",{className:"TodoEmpty-p",children:"Create your first task!"})}function k(){var e=c.a.useContext(d),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.unCompleteTodo,l=e.openModal,u=e.setOpenModal;return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)("h1",{children:"TODO list \ud83d\udcd7"}),n||o.length?Object(i.jsx)(j,{}):Object(i.jsx)(C,{}),Object(i.jsx)(b,{}),Object(i.jsxs)(h,{children:[t&&Object(i.jsx)(g,{error:t}),n&&Object(i.jsx)(T,{}),o.map((function(e){return Object(i.jsx)(p,{text:e.text,completed:e.completed,onComplete:function(){a(e.text)},unComplete:function(){s(e.text)},onDelete:function(){r(e.text)}},e.text)}))]}),l&&Object(i.jsx)(v,{children:Object(i.jsx)(f,{})}),Object(i.jsx)(O,{setOpenModal:u}),Object(i.jsxs)("footer",{children:[Object(i.jsx)("h2",{children:" Made by J\u03c0 "}),Object(i.jsx)("p",{className:"contact",children:"Contact"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)("a",{href:"https://github.com/PabloJL",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(x.b,{size:40})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/juan-pablo-jim%C3%A9nez-l%C3%B3pez-2590a1165/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(x.d,{size:40})}),Object(i.jsx)("a",{href:"https://www.instagram.com/juan_pablo78/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(x.c,{size:40})})]})]})]})}var N=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(k,{})})};r.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.50a944a0.chunk.js.map