(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{26:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i=n(0),l=n.n(i),b=n(10),u=n.n(b),s=(n(26),n(6)),d=n(13),j=n(14),p=n(20),f=n(19),h=n(3),m=n(4),O=m.a.form(a||(a=Object(h.a)(["\n  width: 350px;\n  padding: 5px;\n  border: 2px solid black;\n"]))),x=m.a.label(r||(r=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  margin-bottom: 10px;\n  font-size: 20px;\n"]))),g=n(1),C=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(O,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(x,{children:["Name",Object(g.jsx)("input",{value:this.state.name,onChange:this.handleChange,autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(g.jsxs)(x,{children:["Number",Object(g.jsx)("input",{value:this.state.number,onChange:this.handleChange,autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(g.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(i.Component),v=m.a.label(c||(c=Object(h.a)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n"]))),y=m.a.input(o||(o=Object(h.a)(["\n  margin-left: 5px;\n"]))),k=n(8),w=n(40),A=n(5),z=Object(A.b)("phonebook/filterChange"),B=Object(A.b)("phonebook/filterBlur"),D=Object(A.b)("phonebook/deleteContact"),S=Object(A.b)("phonebook/addContact",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(w.a)(),name:t,number:n}}}));var F,J=Object(k.b)((function(e){return{filter:e.contacts.filter}}),(function(e){return{onFilterChange:function(t){return e(z(t.target.value))},onFilterBlur:function(){return e(B(""))}}}))((function(e){var t=e.onFilterBlur,n=e.onFilterChange,a=e.filter;return Object(g.jsxs)(v,{children:["Find contacts by name:",Object(g.jsx)(y,{value:a,onChange:n,onBlur:t})]})})),Z=m.a.li(F||(F=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 450px;\n  font-size: 20px;\n  border: 2px solid tomato;\n  border-radius: 5px;\n  box-shadow: 0px 2px 3px 3px rgba(34, 60, 80, 0.4);\n"])));var q,E=function(e){var t=e.id,n=e.name,a=e.number,r=e.onDeleteContact;return Object(g.jsxs)(Z,{children:[n,": ",a,Object(g.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"Delete"})]})},L=m.a.ul(q||(q=Object(h.a)(["\n  list-style: none;\n  padding: 0;\n"])));var M,N=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},I=Object(k.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{items:N(n,a)}}),(function(e){return{onDeleteContact:function(t){return e(D(t))}}}))((function(e){var t=e.items,n=e.onDeleteContact;return Object(g.jsx)(L,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(g.jsx)(E,{id:t,name:a,number:r,onDeleteContact:n},t)}))})})),P=m.a.div(M||(M=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));var T,$,G=Object(k.b)(null,(function(e){return{onAddContact:function(t){return e(S(t))}}}))((function(e){var t=e.onAddContact;return Object(g.jsxs)(P,{children:[Object(g.jsx)("h1",{children:"Phonebook"}),Object(g.jsx)(C,{onAddContact:t}),Object(g.jsx)("h2",{children:"Contacts"}),Object(g.jsx)(J,{}),Object(g.jsx)(I,{})]})})),H=n(11),K=n(16),Q=n.n(K),R=n(7),U=n(17),V=n.n(U),W=n(2),X=Object(A.c)([],(T={},Object(s.a)(T,S,(function(e,t){var n=!1;return e.forEach((function(e){e.name!==t.payload.name||(n=!0)})),n?(alert("".concat(t.payload.name," is already in contacts")),e):[].concat(Object(H.a)(e),[t.payload])})),Object(s.a)(T,D,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),T)),Y=Object(A.c)("",($={},Object(s.a)($,z,(function(e,t){return t.payload})),Object(s.a)($,B,(function(e,t){return t.payload})),$)),_=Object(W.b)({items:X,filter:Y}),ee=[].concat(Object(H.a)(Object(A.d)({serializableCheck:{ignoredActions:[R.a,R.f,R.b,R.c,R.d,R.e]}})),[Q.a]),te={key:"contacts",storage:V.a,blacklist:["filter"]},ne=Object(A.a)({reducer:{contacts:Object(R.g)(te,_)},middleware:ee,devTools:!1}),ae=Object(R.h)(ne),re=n(18);u.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(k.a,{store:ne,children:Object(g.jsx)(re.a,{loading:null,persistor:ae,children:Object(g.jsx)(G,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d641f64d.chunk.js.map