(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){e.exports=n(73)},48:function(e,t,n){},49:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),i=n.n(r),s=(n(48),n(18)),c=(n(49),n(2)),l=n(3),u=n(6),d=n(4),p=n(5),m=n(40),f=n.n(m),h=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:f.a,alt:"logo"})),o.a.createElement("nav",{className:"menu"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/users"},"Users")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/todo"},"Todo List")),o.a.createElement("li",null,o.a.createElement(s.b,{to:"/signup"},"Signup")))),o.a.createElement("div",{className:"clear"}))}}]),t}(a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},"Copyright 2019 @ React js")}}]),t}(a.Component),g=n(20),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"innercontent"},o.a.createElement("h1",null,"Home Page"),o.a.createElement("div",{className:"prodcontainer"},o.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),o.a.createElement("p",null,"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))}}]),t}(a.Component),E=n(17),O=n(12),j=n(19),y=n.n(j),T=(n(55),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={loginId:n.props.data.login,img:n.props.data.avatar_url},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"user-item"},o.a.createElement("div",{className:"wrap"},o.a.createElement("div",{className:"userimg"},o.a.createElement("img",{src:this.state.img,alt:this.state.loginId})),o.a.createElement("div",{className:"usertitle"},this.state.loginId),o.a.createElement("ul",{className:"vote"},o.a.createElement("li",{className:"like"},o.a.createElement("div",{className:"innerbtn"},o.a.createElement("i",{className:"fal fa-thumbs-up",onClick:function(){return e.props.onLikePress()}}),o.a.createElement("span",null,this.props.votes?this.props.votes.up:0))),o.a.createElement("li",{className:"dislike"},o.a.createElement("div",{className:"innerbtn"},o.a.createElement("span",null,this.props.votes?this.props.votes.down:0),o.a.createElement("i",{className:"fal fa-thumbs-down",onClick:function(){return e.props.onDislikePress()}}))))))}}]),t}(a.Component)),k=n(11),N=n(15),w="up_vote",I="down_vote",L={UP_VOTE:w,DOWN_VOTE:I};function S(e){return{type:w,payload:e}}function D(e){return{type:I,payload:e}}var U={electedUsers:[]},_=function(e,t){if(e.length){var n=y.a.findIndex(e,function(e){return e.id===t});return n<0?[].concat(Object(N.a)(e),[{id:t,up:1,down:0}]):[].concat(Object(N.a)(e.slice(0,n)),[Object(k.a)({},e[n],{up:e[n].up+1})],Object(N.a)(e.slice(n+1)))}return[{id:t,up:1,down:0}]},x=function(e,t){if(e.length){var n=y.a.findIndex(e,function(e){return e.id===t});return n<0?[].concat(Object(N.a)(e),[{id:t,up:0,down:1}]):[].concat(Object(N.a)(e.slice(0,n)),[Object(k.a)({},e[n],{down:e[n].down+1})],Object(N.a)(e.slice(n+1)))}return[{id:t,up:0,down:1}]};var P="add_to_list",C="delete_from_list",A="update_status_done",V="update_status_notdone",R={ADD_TO_LIST:P,DELETE_FROM_LIST:C,UPDATE_STATUS_DONE:A,UPDATE_STATUS_NOTDONE:V};function B(e){return{type:P,payload:e}}function G(e){return{type:C,payload:e}}function M(e){return{type:A,payload:e}}function W(e){return{type:V,payload:e}}var F={todoList:[]},H=function(e,t,n){var a=y.a.findIndex(e,function(e){return e.id===t});return[].concat(Object(N.a)(e.slice(0,a)),[Object(k.a)({},e[a],{done:n})],Object(N.a)(e.slice(a+1)))};var J="update_user",z={UPDATE_USER:J};function $(e){return console.log("payload = ",e),{type:J,payload:e}}var q={user:{}};var K=Object(O.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case L.UP_VOTE:return Object(k.a)({},e,{electedUsers:_(e.electedUsers,a.id)});case L.DOWN_VOTE:return Object(k.a)({},e,{electedUsers:x(e.electedUsers,a.id)});default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case R.ADD_TO_LIST:return Object(k.a)({},e,{todoList:[].concat(Object(N.a)(e.todoList),[{id:a.id,name:a.name,done:!1}])});case R.UPDATE_STATUS_DONE:return Object(k.a)({},e,{todoList:H(e.todoList,a.id,!0)});case R.UPDATE_STATUS_NOTDONE:return Object(k.a)({},e,{todoList:H(e.todoList,a.id,!1)});case R.DELETE_FROM_LIST:return Object(k.a)({},e,{todoList:y.a.filter(e.todoList,function(e){return e.id!==a.id})});default:return e}},loggedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case z.UPDATE_USER:return Object(k.a)({},e,{user:a});default:return e}}}),Q=function(e){return function(e){return function(t){t.payload.doConfirm?window.confirm("Are you sure ?")&&e(t):e(t)}}};function X(){return Object(O.d)(K,Object(O.a)(Q))}var Y=X(),Z=n(31),ee=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).storeUpdated=function(){console.log("subscribed to store"),n.setState({electedUsers:Y.getState().users.electedUsers})},n.handleLikePress=function(e){var t={id:e};n.props.updateUpVote(t)},n.handleDislikePress=function(e){var t={id:e};n.props.updateDownVote(t)},n.renderGitProfiles=function(){var e=n.state.users,t=[];return e.length&&e.forEach(function(e){t.push(o.a.createElement(T,{data:e,key:e.id,onLikePress:function(){return n.handleLikePress(e.id)},onDislikePress:function(){return n.handleDislikePress(e.id)},votes:n.getUservotes(e.id)}))}),t},n.state={users:[],electedUsers:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("hi");Z.get("https://api.github.com/users").then(function(t){console.log("response = ",t),e.setState({users:t.data})})}},{key:"getUservotes",value:function(e){if(this.props.electedUsers){var t=this.props.electedUsers;return y.a.find(t,function(t){return t.id===e})}}},{key:"render",value:function(){return o.a.createElement("div",{className:"innercontent"},o.a.createElement("h1",null,"Git Profiles Page"),o.a.createElement("div",{className:"usercontainer"},this.renderGitProfiles()))}}]),t}(a.Component),te=Object(E.b)(function(e){return console.log("new state = ",e),{electedUsers:e.users.electedUsers}},function(e){return Object(O.b)({updateUpVote:S,updateDownVote:D},e)})(ee),ne=n(21),ae=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleInput=function(e){n.setState({inputText:e.target.value}),n.setState({inputValue:e.target.value})},n.handleAddToList=function(){if(n.state.inputText){var e=n.state.itemId;e++,n.setState({itemId:e}),n.props.addTolist({name:n.state.inputText,id:e}),n.setState({inputValue:""}),n.setState({inputText:""});var t=Object(ne.a)(n);setTimeout(function(){t.filterList(t.state.filterType)},100)}},n.filterList=function(e){if(n.setState({filterType:e}),"all"===e)n.setState({filterApplied:!1});else{var t="complete"===e,a=n.props.todos.filter(function(e){return e.done===t});n.setState({toDoList:a}),n.setState({filterApplied:!0})}},n.handleCheckBox=function(e,t){e?n.props.updateToDoStatusDone({id:t}):n.props.updateToDoStatusNotDone({id:t}),n.filterList(n.state.filterType)},n.removeItem=function(e){n.props.deleteFromList({id:e,doConfirm:!0})},n.renderToDoList=function(){var e;return!1===n.state.filterApplied?e=n.props.todos:!0===n.state.filterApplied&&(e=n.state.toDoList),e.length?e.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",onChange:function(t){return n.handleCheckBox(t.target.checked,e.id)},checked:e.done?"checked":""}),o.a.createElement("span",null,e.name)),o.a.createElement("i",{className:"fa fa-trash list-rm","aria-hidden":"true",onClick:function(){return n.removeItem(e.id)}}))}):o.a.createElement("li",null,o.a.createElement("label",null," ",o.a.createElement("span",null,"No Items")))},n.state={inputText:"",inputValue:"",filterApplied:!1,filterType:"all",itemId:0,toDoList:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"renderToDos",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"tablinks"},o.a.createElement("span",{onClick:function(){return e.filterList("all")},className:"all"===this.state.filterType?"active":""},"All"),o.a.createElement("span",{onClick:function(){return e.filterList("pending")},className:"pending"===this.state.filterType?"active":""},"Pending"),o.a.createElement("span",{onClick:function(){return e.filterList("complete")},className:"complete"===this.state.filterType?"active":""},"Completed")),o.a.createElement("div",{className:"listbox"},o.a.createElement("ul",null,this.renderToDoList())))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"innercontent"},o.a.createElement("h1",null,"Todo List Page"),o.a.createElement("div",{className:"prodcontainer"},o.a.createElement("div",{className:"todocontainer"},o.a.createElement("div",{className:"formbox"},o.a.createElement("input",{type:"text",onChange:function(t){return e.handleInput(t)},value:this.state.inputValue}),o.a.createElement("button",{className:"btn btn-primary",onClick:this.handleAddToList},"Add")),this.renderToDos())))}}]),t}(a.Component),oe=Object(E.b)(function(e){return{todos:e.todos.todoList}},function(e){return Object(O.b)({addTolist:B,updateToDoStatusDone:M,updateToDoStatusNotDone:W,deleteFromList:G},e)})(ae),re="566747368285-nutel28dapl8063tchef5pnbmfmngslk.apps.googleusercontent.com",ie="https://accounts.google.com/o/oauth2/v2/auth",se="http://localhost:3000/authenticate",ce=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleInput=function(e,t){"email"===t?(n.setState({emailInputText:e.target.value}),n.setState({emailInputValue:e.target.value})):(n.setState({passInputText:e.target.value}),n.setState({passInputValue:e.target.value}))},n.handleLoginButtonClick=function(){},n.handleGoogleSignup=function(){var e=ie+"?scope="+encodeURI("https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email")+"&redirect_uri="+encodeURI(se)+"&response_type=token&client_id="+re+"&access_type=online&prompt=consent";window.location.href=e},n.state={emailInputText:"",emailInputValue:"",passInputText:"",passInputValue:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(){}},{key:"onSignIn",value:function(e){var t=e.getBasicProfile();sessionStorage.setItem("authToken",t.getId()),sessionStorage.setItem("name",t.getName()),sessionStorage.setItem("imageUrl",t.getImageUrl()),sessionStorage.setItem("email",t.getEmail()),console.log("id = ",t.getId()),console.log("name = ",t.getName()),console.log("photo = ",t.getImageUrl()),console.log("email = ",t.getEmail())}},{key:"render",value:function(){return o.a.createElement("div",{className:"innercontent"},o.a.createElement("h1",null,"Signup Page"),o.a.createElement("div",{className:"prodcontainer"},o.a.createElement("div",{className:"todocontainer"},o.a.createElement("div",{className:"formbox login"},o.a.createElement("div",{className:"row"},o.a.createElement("button",{className:"btn btn-primary",id:"g-signin2",onClick:this.handleGoogleSignup},"Signup with Google"))))))}}]),t}(a.Component),le=n(31),ue=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(""!==this.props.location.hash){var t=this.props.location.hash.split("#access_token=")[1].split("&")[0],n="Bearer ".concat(t);le.get("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:n}}).then(function(t){t.data&&e.props.updateLoggedInUser(t.data)}).catch(function(e){e.response&&console.log("error = ",e.response.data.error)})}}},{key:"render",value:function(){return o.a.createElement("div",{className:"innercontent"},o.a.createElement("h1",null,"Validating user ..."),o.a.createElement("div",{className:"prodcontainer"}))}}]),t}(a.Component),de=Object(E.b)(function(e){return console.log("new state = ",e),{}},function(e){return Object(O.b)({updateLoggedInUser:$},e)})(ue),pe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(g.c,null,o.a.createElement(g.a,{exact:!0,path:"/",component:b}),o.a.createElement(g.a,{exact:!0,path:"/users",component:te}),o.a.createElement(g.a,{exact:!0,path:"/todo",component:oe}),o.a.createElement(g.a,{exact:!0,path:"/signup",component:ce}),o.a.createElement(g.a,{exact:!0,path:"/authenticate",component:de})))}}]),t}(a.Component),me=X();var fe=function(){return o.a.createElement(E.a,{store:me},o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement(h,null),o.a.createElement(pe,null),o.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.63b95eaf.chunk.js.map