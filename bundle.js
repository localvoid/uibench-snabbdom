!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){function r(e){function t(t){console.log("Clicked"+e),t.stopPropagation()}return p("td.TableCell",{on:{click:t}},e)}function i(e){for(var t=e.props,n=[m("td.TableCell",r,["#"+e.id])],i=0;i<t.length;i++)n.push(m("td.TableCell",r,[t[i]]));return p("tr.TableRow",{"class":{active:e.active},attrs:{"data-id":e.id}},n)}function o(e){for(var t=e.items,n=[],r=0;r<t.length;r++){var o=t[r];n.push(m("tr.TableRow",o.id,i,[o]))}return p("table.Table",[p("tbody",n)])}function a(e){var t=e.time,n={borderRadius:(t%10).toString()+"px",background:"rgba(0,0,0,"+(.5+t%10/10).toString()+")"};return p("div.AnimBox",{style:n,attrs:{"data-id":e.id}})}function l(e){for(var t=e.items,n=[],r=0;r<t.length;r++){var i=t[r];n.push(m("div.AnimBox",i.id,a,[i]))}return p("div.Anim",n)}function d(e){return p("li.TreeLeaf",e.id.toString())}function f(e){for(var t=[],n=0;n<e.children.length;n++){var r=e.children[n];r.container?t.push(m("ul.TreeNode",r.id,f,[r])):t.push(m("li.TreeLeaf",r.id,d,[r]))}return p("ul.TreeNode",t)}function u(e){return p("div.Tree",[m("ul.TreeNode",f,[e.root])])}function c(e){var t,n=e.location;return"table"===n?t=m("table.Table",o,[e.table]):"anim"===n?t=m("div.Anim",l,[e.anim]):"tree"===n&&(t=m("div.Tree",u,[e.tree])),void 0===t?p("div.Main"):p("div.Main",[t])}var s=n(3),v=s.init([n(7),n(8),n(9),n(2),n(10)]),p=n(11),m=n(12);uibench.init("Snabbdom","0.5.0"),document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector("#App"),n=p("div.Main");v(t,n),uibench.run(function(e){var t=c(e);v(n,t),n=t},function(e){v(n,p("pre",JSON.stringify(e,null," ")))})})},function(e,t){function n(e,t,n){l(function(){e[t]=n})}function r(e,t){var r,i,o=t.elm,a=e.data.style||{},l=t.data.style||{},d="delayed"in a;for(i in a)l[i]||(o.style[i]="");for(i in l)if(r=l[i],"delayed"===i)for(i in l.delayed)r=l.delayed[i],d&&r===a.delayed[i]||n(o.style,i,r);else"remove"!==i&&r!==a[i]&&(o.style[i]=r)}function i(e){var t,n,r=e.elm,i=e.data.style;if(i&&(t=i.destroy))for(n in t)r.style[n]=t[n]}function o(e,t){var n=e.data.style;if(!n||!n.remove)return void t();var r,i,o=e.elm,a=0,l=n.remove,d=0,f=[];for(r in l)f.push(r),o.style[r]=l[r];i=getComputedStyle(o);for(var u=i["transition-property"].split(", ");a<u.length;++a)-1!==f.indexOf(u[a])&&d++;o.addEventListener("transitionend",function(e){e.target===o&&--d,0===d&&t()})}var a="undefined"!=typeof window&&window.requestAnimationFrame||setTimeout,l=function(e){a(function(){a(e)})};e.exports={create:r,update:r,destroy:i,remove:o}},function(e,t,n){"use strict";function r(e){return void 0===e}function i(e){return void 0!==e}function o(e,t){return e.key===t.key&&e.sel===t.sel}function a(e,t,n){var r,o,a={};for(r=t;n>=r;++r)o=e[r].key,i(o)&&(a[o]=r);return a}function l(e,t){function n(e){return d(t.tagName(e).toLowerCase(),{},[],void 0,e)}function l(e,n){return function(){if(0===--n){var r=t.parentNode(e);t.removeChild(r,e)}}}function v(e,n){var r,o=e.data;i(o)&&i(r=o.hook)&&i(r=r.init)&&(r(e),o=e.data);var a,l=e.children,d=e.sel;if(i(d)){var u=d.indexOf("#"),s=d.indexOf(".",u),p=u>0?u:d.length,m=s>0?s:d.length,h=-1!==u||-1!==s?d.slice(0,Math.min(p,m)):d;if(a=e.elm=i(o)&&i(r=o.ns)?t.createElementNS(r,h):t.createElement(h),m>p&&(a.id=d.slice(p+1,m)),s>0&&(a.className=d.slice(m+1).replace(/\./g," ")),f.array(l))for(r=0;r<l.length;++r)t.appendChild(a,v(l[r],n));else f.primitive(e.text)&&t.appendChild(a,t.createTextNode(e.text));for(r=0;r<T.create.length;++r)T.create[r](c,e);r=e.data.hook,i(r)&&(r.create&&r.create(c,e),r.insert&&n.push(e))}else a=e.elm=t.createTextNode(e.text);return e.elm}function p(e,n,r,i,o,a){for(;o>=i;++i)t.insertBefore(e,v(r[i],a),n)}function m(e){var t,n,r=e.data;if(i(r)){for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<T.destroy.length;++t)T.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n])}}function h(e,n,r,o){for(;o>=r;++r){var a,d,f,u=n[r];if(i(u))if(i(u.sel)){for(m(u),d=T.remove.length+1,f=l(u.elm,d),a=0;a<T.remove.length;++a)T.remove[a](u,f);i(a=u.data)&&i(a=a.hook)&&i(a=a.remove)?a(u,f):f()}else t.removeChild(e,u.elm)}}function g(e,n,i,l){for(var d,f,u,c,s=0,m=0,g=n.length-1,x=n[0],b=n[g],T=i.length-1,k=i[0],C=i[T];g>=s&&T>=m;)r(x)?x=n[++s]:r(b)?b=n[--g]:o(x,k)?(y(x,k,l),x=n[++s],k=i[++m]):o(b,C)?(y(b,C,l),b=n[--g],C=i[--T]):o(x,C)?(y(x,C,l),t.insertBefore(e,x.elm,t.nextSibling(b.elm)),x=n[++s],C=i[--T]):o(b,k)?(y(b,k,l),t.insertBefore(e,b.elm,x.elm),b=n[--g],k=i[++m]):(r(d)&&(d=a(n,s,g)),f=d[k.key],r(f)?(t.insertBefore(e,v(k,l),x.elm),k=i[++m]):(u=n[f],y(u,k,l),n[f]=void 0,t.insertBefore(e,u.elm,x.elm),k=i[++m]));s>g?(c=r(i[T+1])?null:i[T+1].elm,p(e,c,i,m,T,l)):m>T&&h(e,n,s,g)}function y(e,n,a){var l,d;i(l=n.data)&&i(d=l.hook)&&i(l=d.prepatch)&&l(e,n);var f=n.elm=e.elm,u=e.children,c=n.children;if(e!==n){if(!o(e,n)){var s=t.parentNode(e.elm);return f=v(n,a),t.insertBefore(s,f,e.elm),void h(s,[e],0,0)}if(i(n.data)){for(l=0;l<T.update.length;++l)T.update[l](e,n);l=n.data.hook,i(l)&&i(l=l.update)&&l(e,n)}r(n.text)?i(u)&&i(c)?u!==c&&g(f,u,c,a):i(c)?(i(e.text)&&t.setTextContent(f,""),p(f,null,c,0,c.length-1,a)):i(u)?h(f,u,0,u.length-1):i(e.text)&&t.setTextContent(f,""):e.text!==n.text&&t.setTextContent(f,n.text),i(d)&&i(l=d.postpatch)&&l(e,n)}}var x,b,T={};for(r(t)&&(t=u),x=0;x<s.length;++x)for(T[s[x]]=[],b=0;b<e.length;++b)void 0!==e[b][s[x]]&&T[s[x]].push(e[b][s[x]]);return function(e,i){var a,l,d,f=[];for(a=0;a<T.pre.length;++a)T.pre[a]();for(r(e.sel)&&(e=n(e)),o(e,i)?y(e,i,f):(l=e.elm,d=t.parentNode(l),v(i,f),null!==d&&(t.insertBefore(d,i.elm,t.nextSibling(l)),h(d,[e],0,0))),a=0;a<f.length;++a)f[a].data.hook.insert(f[a]);for(a=0;a<T.post.length;++a)T.post[a]();return i}}var d=n(4),f=n(5),u=n(6),c=d("",{},[],void 0,void 0),s=["create","update","remove","destroy","pre","post"];e.exports={init:l}},function(e,t){e.exports=function(e,t,n,r,i){var o=void 0===t?void 0:t.key;return{sel:e,data:t,children:n,text:r,elm:i,key:o}}},function(e,t){e.exports={array:Array.isArray,primitive:function(e){return"string"==typeof e||"number"==typeof e}}},function(e,t){function n(e){return document.createElement(e)}function r(e,t){return document.createElementNS(e,t)}function i(e){return document.createTextNode(e)}function o(e,t,n){e.insertBefore(t,n)}function a(e,t){e.removeChild(t)}function l(e,t){e.appendChild(t)}function d(e){return e.parentElement}function f(e){return e.nextSibling}function u(e){return e.tagName}function c(e,t){e.textContent=t}e.exports={createElement:n,createElementNS:r,createTextNode:i,appendChild:l,removeChild:a,insertBefore:o,parentNode:d,nextSibling:f,tagName:u,setTextContent:c}},function(e,t){function n(e,t){var n,r,o,a=t.elm,l=e.data.attrs||{},d=t.data.attrs||{};for(n in d)r=d[n],o=l[n],o!==r&&(!r&&i[n]?a.removeAttribute(n):a.setAttribute(n,r));for(n in l)n in d||a.removeAttribute(n)}for(var r=["allowfullscreen","async","autofocus","autoplay","checked","compact","controls","declare","default","defaultchecked","defaultmuted","defaultselected","defer","disabled","draggable","enabled","formnovalidate","hidden","indeterminate","inert","ismap","itemscope","loop","multiple","muted","nohref","noresize","noshade","novalidate","nowrap","open","pauseonexit","readonly","required","reversed","scoped","seamless","selected","sortable","spellcheck","translate","truespeed","typemustmatch","visible"],i={},o=0,a=r.length;a>o;o++)i[r[o]]=!0;e.exports={create:n,update:n}},function(e,t){function n(e,t){var n,r,i=t.elm,o=e.data["class"]||{},a=t.data["class"]||{};for(r in o)a[r]||i.classList.remove(r);for(r in a)n=a[r],n!==o[r]&&i.classList[n?"add":"remove"](r)}e.exports={create:n,update:n}},function(e,t){function n(e,t){var n,r,i,o=t.elm,a=e.data.props||{},l=t.data.props||{};for(n in a)l[n]||delete o[n];for(n in l)r=l[n],i=a[n],i===r||"value"===n&&o[n]===r||(o[n]=r)}e.exports={create:n,update:n}},function(e,t,n){function r(e){return function(){e.length&&(2===e.length?e[0](e[1]):e[0].apply(void 0,e.slice(1)))}}function i(e){return function(t){null!==e.fn&&e.fn(t)}}function o(e,t){var n,o,l,d=t.elm,f=e.data.on||{},u=t.data.on;if(u){for(n in u)if(o=u[n],l=f[n],void 0===l)a.array(o)?d.addEventListener(n,r(o)):(o={fn:o},u[n]=o,d.addEventListener(n,i(o)));else if(a.array(l)){l.length=o.length;for(var c=0;c<l.length;++c)l[c]=o[c];u[n]=l}else l.fn=o,u[n]=l;if(f)for(n in f)if(void 0===u[n]){var l=f[n];a.array(l)?l.length=0:l.fn=null}}}var a=n(5);e.exports={create:o,update:o}},function(e,t,n){function r(e,t){if(e.ns="http://www.w3.org/2000/svg",void 0!==t)for(var n=0;n<t.length;++n)r(t[n].data,t[n].children)}var i=n(4),o=n(5);e.exports=function(e,t,n){var a,l,d,f={};if(void 0!==n?(f=t,o.array(n)?a=n:o.primitive(n)&&(l=n)):void 0!==t&&(o.array(t)?a=t:o.primitive(t)?l=t:f=t),o.array(a))for(d=0;d<a.length;++d)o.primitive(a[d])&&(a[d]=i(void 0,void 0,void 0,a[d]));return"s"===e[0]&&"v"===e[1]&&"g"===e[2]&&r(f,a),i(e,f,a,l,void 0)}},function(e,t,n){function r(e,t){t.elm=e.elm,e.data.fn=t.data.fn,e.data.args=t.data.args,t.data=e.data,t.children=e.children,t.text=e.text,t.elm=e.elm}function i(e){var t=e.data,n=t.fn.apply(void 0,t.args);r(n,e)}function o(e,t){var n,i=e.data,o=t.data,a=i.args,l=o.args;for((i.fn!==o.fn||a.length!==l.length)&&r(o.fn.apply(void 0,l),t),n=0;n<l.length;++n)if(a[n]!==l[n])return void r(o.fn.apply(void 0,l),t);r(e,t)}var a=n(11);e.exports=function(e,t,n,r){return void 0===r&&(r=n,n=t,t=void 0),a(e,{key:t,hook:{init:i,prepatch:o},fn:n,args:r})}}]);