(function(){"use strict";var o={1007:function(o,n,t){var e=t(9242),r=t(3396);const i=(0,r._)("h1",null,"Todo-List1",-1);function u(o,n,t,e,u,d){const l=(0,r.up)("my-components");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r.Wm)(l)],64)}var d={name:"App"},l=t(89);const c=(0,l.Z)(d,[["render",u]]);var f=c,s=t(7139);const a=(0,r._)("button",null,"Add Todo",-1),p=["onUpdate:modelValue"],h=["onClick"];function v(o,n,t,i,u,d){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("form",{onSubmit:n[1]||(n[1]=(0,e.iM)(((...o)=>d.addTodo&&d.addTodo(...o)),["prevent"]))},[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>u.newTodo=o)},null,512),[[e.nr,u.newTodo]]),a],32),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(d.filterTodo,(o=>((0,r.wg)(),(0,r.iD)("li",{key:o.id},[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":n=>o.done=n},null,8,p),[[e.e8,o.done]]),(0,r._)("span",{class:(0,s.C_)({done:o.done})},(0,s.zw)(o.text),3),(0,r._)("button",{onClick:n=>d.removeTodo(o)},"X",8,h)])))),128))]),(0,r._)("button",{onClick:n[2]||(n[2]=o=>u.hideCompleted=!u.hideCompleted)},(0,s.zw)(u.hideCompleted?"Показать все":"Скрыть выделенные"),1)],64)}t(7658);let m=0;var w={data(){return{hideCompleted:!1,newTodo:"",todos:[{id:m++,text:"Vue1"}]}},methods:{addTodo(){this.todos.push({id:m++,text:this.newTodo}),this.newTodo=""},removeTodo(o){this.todos=this.todos.filter((n=>n!==o))}},computed:{filterTodo(){return this.hideCompleted?this.todos.filter((o=>!o.done)):this.todos}}};const b=(0,l.Z)(w,[["render",v]]);var T=b;const y=(0,e.ri)(f);y.component("my-components",T),y.mount("#app")}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,t),i.exports}t.m=o,function(){var o=[];t.O=function(n,e,r,i){if(!e){var u=1/0;for(f=0;f<o.length;f++){e=o[f][0],r=o[f][1],i=o[f][2];for(var d=!0,l=0;l<e.length;l++)(!1&i||u>=i)&&Object.keys(t.O).every((function(o){return t.O[o](e[l])}))?e.splice(l--,1):(d=!1,i<u&&(u=i));if(d){o.splice(f--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var f=o.length;f>0&&o[f-1][2]>i;f--)o[f]=o[f-1];o[f]=[e,r,i]}}(),function(){t.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(n,{a:n}),n}}(),function(){t.d=function(o,n){for(var e in n)t.o(n,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:n[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)}}(),function(){var o={143:0};t.O.j=function(n){return 0===o[n]};var n=function(n,e){var r,i,u=e[0],d=e[1],l=e[2],c=0;if(u.some((function(n){return 0!==o[n]}))){for(r in d)t.o(d,r)&&(t.m[r]=d[r]);if(l)var f=l(t)}for(n&&n(e);c<u.length;c++)i=u[c],t.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return t.O(f)},e=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(1007)}));e=t.O(e)})();
//# sourceMappingURL=app.9b73f6d6.js.map