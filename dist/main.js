(()=>{"use strict";let e=document.getElementById("planning-add-button"),t=document.getElementById("add-dialog-open"),n=document.getElementById("add-dialog-close"),d=document.getElementById("add-modal-task"),a=document.getElementById("add-modal-project"),i=document.getElementById("modal-content-form"),l=document.getElementById("all-tasks"),c=document.getElementById("planning-projects-list"),r=document.getElementById("planning-home-h3");function o(e,t){let n=new function(e,t){this.id=e,this.name=t}(e,t);return n}function s(e,t){localStorage.setItem(e,JSON.stringify(t))}function p(e){e.close()}function m(e){e.innerHTML=""}function u(e,t){localStorage.setItem(e,JSON.stringify(t))}function h(e,t,n,d,a,i){let l=new function(e,t,n,d,a,i){this.id=e,this.title=t,this.description=n,this.dueDate=d,this.inProject=a,this.isDone=i}(e,t,n,d,a,i);return l}function E(){let e=0,t=[];return Object.entries(localStorage).forEach((e=>{t.push(JSON.parse(e[1]).id)})),e=Math.max(...t),e}function L(e){let t="";return t=JSON.parse(e[1]).hasOwnProperty("name")?"project":"task",t}function C(){Object.entries(localStorage).forEach((e=>{if("project"==L(e)){let t=document.createElement("div"),n=document.createElement("h3"),d=document.createElement("i");1!=JSON.parse(e[0])&&(c.appendChild(t),t.appendChild(n)),JSON.parse(e[1]).id>1&&t.appendChild(d),n.innerHTML=JSON.parse(e[1]).name,t.classList.add("project-container"),n.id=`project-${JSON.parse(e[1]).id}`,d.id=`project-delete-${JSON.parse(e[1]).id}`,d.classList.add("fa-solid"),d.classList.add("fa-trash-can"),n.addEventListener("pointerdown",(()=>{localStorage.setItem(1,e[1]),S(1,JSON.parse(e[1]).name)})),d.addEventListener("pointerdown",(()=>{!function(e){"project"==L(e)&&(localStorage.removeItem(JSON.parse(e[1]).id),c.innerHTML="",C())}(e)}))}}))}function f(e){let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),s=document.createElement("input"),p=document.createElement("p"),m=document.createElement("button"),E=document.createElement("p"),C=document.createElement("i"),f=document.createElement("dialog"),v=document.createElement("dialog");l.appendChild(t),t.appendChild(n),t.appendChild(d),n.appendChild(a),n.appendChild(i),d.appendChild(c),d.appendChild(r),d.appendChild(o),a.appendChild(s),i.appendChild(p),c.appendChild(m),c.appendChild(f),r.appendChild(E),o.appendChild(C),p.innerHTML=JSON.parse(e[1]).title,m.innerHTML="DETAILS",E.innerHTML=JSON.parse(e[1]).dueDate,s.id=`checkbox-${JSON.parse(e[1]).id}`,p.id=`title-${JSON.parse(e[1]).id}`,m.id=`details-${JSON.parse(e[1]).id}`,E.id=`duedate-${JSON.parse(e[1]).id}`,C.id=`delete-${JSON.parse(e[1]).id}`,f.id=`details-dialog-${JSON.parse(e[1]).id}`,v.id=`delete-dialog-${JSON.parse(e[1]).id}`,s.type="checkbox",C.classList.add("fa-solid"),C.classList.add("fa-trash-can"),t.classList.add("item-container"),n.classList.add("left-container"),d.classList.add("right-container"),a.classList.add("checkbox-container"),i.classList.add("title-container"),c.classList.add("details-container"),r.classList.add("duedate-container"),o.classList.add("delete-container"),s.classList.add("item-element"),p.classList.add("item-element"),m.classList.add("item-element"),E.classList.add("item-element"),C.classList.add("item-element"),"yes"==JSON.parse(e[1]).isDone?s.checked=!0:s.checked=!1,s.addEventListener("change",(()=>{let t="";t=s.checked?"checked":"unchecked",function(e,t){let n=JSON.parse(e[1]).id,d="";d="checked"==t?"yes":"no",u(n,h(n,JSON.parse(e[1]).title,JSON.parse(e[1]).description,JSON.parse(e[1]).dueDate,JSON.parse(e[1]).inProject,d))}(e,t)})),m.addEventListener("pointerdown",(()=>{!function(e){let t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),s=document.createElement("div"),p=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div"),E=document.getElementById(`details-dialog-${JSON.parse(e[1]).id}`);E.innerHTML="";let L=document.createElement("p"),C=document.createElement("p"),f=document.createElement("p"),v=document.createElement("p"),S=document.createElement("p"),g=document.createElement("p"),O=document.createElement("p"),N=document.createElement("p"),J=document.createElement("p");E.appendChild(t),t.appendChild(n),t.appendChild(d),E.appendChild(a),a.appendChild(i),a.appendChild(l),i.appendChild(r),i.appendChild(o),i.appendChild(s),l.appendChild(p),l.appendChild(m),l.appendChild(u),l.appendChild(h),n.appendChild(p),d.appendChild(J),c.appendChild(L),r.appendChild(C),o.appendChild(f),s.appendChild(v),p.appendChild(S),m.appendChild(g),u.appendChild(O),h.appendChild(N),S.innerHTML="Title:",J.innerHTML="X",C.innerHTML="Description:",f.innerHTML="In project:",v.innerHTML="Due date:",S.innerHTML=`${JSON.parse(e[1]).title}`,g.innerHTML=`${JSON.parse(e[1]).description}`,O.innerHTML=`${JSON.parse(e[1]).inProject}`,N.innerHTML=`${JSON.parse(e[1]).dueDate}`,J.addEventListener("pointerdown",(()=>{E.close()})),t.classList.add("details-dialog-header-container"),a.classList.add("details-dialog-info-container"),i.classList.add("details-dialog-info-left-container"),l.classList.add("details-dialog-info-right-container"),E.showModal()}(e)})),o.addEventListener("pointerdown",(()=>{!function(e){"task"==L(e)&&(localStorage.removeItem(JSON.parse(e[1]).id),l.innerHTML="",S(1,JSON.parse(e[1]).inProject))}(e),S(0)}))}function v(){l.innerHTML=""}function S(e,t){0==e?(v(),Object.entries(localStorage).forEach((e=>{"task"==L(e)&&f(e)}))):(v(),Object.entries(localStorage).forEach((e=>{"task"==L(e)&&JSON.parse(e[1]).inProject==t&&f(e)})))}let g=o(0,"Not in a project");s(g.id,g);let O=o(1,"selected-project");s(O.id,O),S(0),C(),r.addEventListener("pointerdown",(()=>{S(0),localStorage.setItem(1,JSON.stringify(O))})),e.addEventListener("pointerdown",(()=>{t.showModal()})),n.addEventListener("pointerdown",(()=>{p(t)})),d.addEventListener("pointerdown",(()=>{m(i),function(e){let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div"),r=document.createElement("p"),o=document.createElement("input"),s=document.createElement("p"),m=document.createElement("input"),C=document.createElement("p"),f=document.createElement("input"),v=document.createElement("p"),g=document.createElement("select"),O=document.createElement("button");e.appendChild(n),e.appendChild(d),e.appendChild(a),e.appendChild(i),e.appendChild(c),n.appendChild(r),n.appendChild(o),d.appendChild(s),d.appendChild(m),a.appendChild(C),a.appendChild(f),i.appendChild(v),i.appendChild(g),c.appendChild(O),r.innerHTML="Title:",s.innerHTML="Description:",C.innerHTML="Due date:",v.innerHTML="In project:",O.innerHTML="ADD TASK",o.type="text",m.type="text",f.type="date",o.placeholder="Task name...",m.placeholder="Describe the task...",n.classList.add("form-group"),d.classList.add("form-group"),a.classList.add("form-group"),i.classList.add("form-group"),c.classList.add("form-group"),r.classList.add("form-label"),s.classList.add("form-label"),C.classList.add("form-label"),v.classList.add("form-label"),g.classList.add("form-input"),o.classList.add("form-input"),m.classList.add("form-input"),f.classList.add("form-input"),O.classList.add("form-input"),Object.entries(localStorage).forEach((e=>{if("project"==L(e)){let t=document.createElement("option");t.innerHTML=JSON.parse(e[1]).name,"selected-project"!=JSON.parse(e[1]).name&&g.add(t)}})),O.addEventListener("pointerdown",(()=>{let e=E()+1;u(e,h(e,o.value,m.value,f.value,g.value,"no")),p(t),l.innerHTML="",S(0)}))}(i)})),a.addEventListener("pointerdown",(()=>{m(i),function(e){let n=document.createElement("div"),d=document.createElement("div"),a=document.createElement("p"),i=document.createElement("input"),l=document.createElement("button");e.appendChild(n),e.appendChild(d),n.appendChild(a),n.appendChild(i),d.appendChild(l),a.innerHTML="Project name:",l.innerHTML="ADD PROJECT",i.type="text",i.placeholder="Name your project...",n.classList.add("form-group"),d.classList.add("form-group"),a.classList.add("form-label"),i.classList.add("form-input"),l.classList.add("form-input"),l.addEventListener("pointerdown",(()=>{let e=E()+1;s(e,o(e,i.value)),p(t),c.innerHTML="",C()}))}(i)}))})();