webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container my-5"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[this._v("首頁")])],1),this._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/page"}},[this._v("單元作業")])],1),this._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/aqi"}},[this._v("空氣品質指標")])],1)])]),this._v(" "),e("router-view",{staticClass:"my-3"})],1)])},staticRenderFns:[]};var i=a("VU/8")({name:"App",components:{}},n,!1,function(t){a("iK7v")},null,null).exports,l=a("/ocq"),o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"},[this._v("\n  首頁\n")])},staticRenderFns:[]},r=a("VU/8")({name:"HelloWorld",data:function(){return{}}},o,!1,null,null,null).exports,c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("router-view",{attrs:{name:"navs"}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]},d=a("VU/8")({name:"page",data:function(){return{}}},c,!1,null,null,null).exports,u={name:"TodoList",data:function(){return{newTodo:"",todos:[{title:"Default",id:0,completed:!1}],status:"all"}},methods:{addTodo:function(){var t=this.newTodo.trim(),e=Math.floor(Date.now());t&&(this.todos.push({title:t,id:e,completed:!1}),this.newTodo="")},removeTodo:function(t){var e=this.todos.findIndex(function(e){return t.id==e.id});this.todos.splice(e,1)},cleanTodo:function(){this.todos=[]}},computed:{activeTodo:function(){return this.todos.filter(function(t){return!t.completed})},completedTodo:function(){return this.todos.filter(function(t){return t.completed})},filterTodo:function(){switch(this.status){case"all":return this.todos;case"active":return this.activeTodo;case"completed":return this.completedTodo}}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"todo"}},[a("div",{staticClass:"input-group"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"準備要做的任務"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",on:{click:t.addTodo}},[t._v("新增")])])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("ul",{staticClass:"nav nav-tabs card-header-tabs"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"all"==t.status},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.status="all"}}},[t._v("全部")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"active"==t.status},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.status="active"}}},[t._v("進行中")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",class:{active:"completed"==t.status},attrs:{href:""},on:{click:function(e){e.preventDefault(),t.status="completed"}}},[t._v("已完成")])])])]),t._v(" "),a("ul",{staticClass:"list-group list-group-flush"},t._l(t.filterTodo,function(e){return a("li",{key:e.id,staticClass:"list-group-item"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"item.completed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(a){var s=e.completed,n=a.target,i=!!n.checked;if(Array.isArray(s)){var l=t._i(s,null);n.checked?l<0&&t.$set(e,"completed",s.concat([null])):l>-1&&t.$set(e,"completed",s.slice(0,l).concat(s.slice(l+1)))}else t.$set(e,"completed",i)}}}),t._v(" "),a("label",{staticClass:"form-check-label",class:{completed:e.completed},attrs:{for:e.id}},[t._v(t._s(e.title))])]),t._v(" "),a("button",{staticClass:"close ml-auto",on:{click:function(a){return t.removeTodo(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])])}),0),t._v(" "),a("div",{staticClass:"card-footer d-flex justify-content-between"},[a("span",[t._v("還有 "+t._s(t.activeTodo.length)+" 筆任務未完成")]),t._v(" "),a("a",{attrs:{href:"#"},on:{click:t.cleanTodo}},[t._v("清除所有任務")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("待辦事項")])])}]};var p=a("VU/8")(u,v,!1,function(t){a("UWL+")},null,null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sort"},[this._v("\n  TableSort\n")])},staticRenderFns:[]},f=a("VU/8")({name:"TableSort",data:function(){return{}}},m,!1,null,null,null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navs"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/todo"}},[this._v("TodoList")])],1),this._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/sort"}},[this._v("表格排序")])],1)])])])},staticRenderFns:[]},_=a("VU/8")({name:"navs",data:function(){return{}}},h,!1,null,null,null).exports;s.a.use(l.a);var C=new l.a({linkActiveClass:"active",routes:[{name:"首頁",path:"/",component:r},{path:"/page",components:{default:d,navs:_},children:[{name:"待辦事項",path:"",component:p},{name:"表格排序",path:"sort",component:f}]}]});s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:i},template:"<App/>",router:C})},"UWL+":function(t,e){},iK7v:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e6d0a6a9c506174a747f.js.map