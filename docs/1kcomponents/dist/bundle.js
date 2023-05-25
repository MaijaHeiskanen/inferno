!function(e){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function t(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,a(e,n)}function a(e,n){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},a(e,n)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var r=Array.isArray;function c(e){var n=typeof e;return"string"===n||"number"===n}function o(e){return void 0===e||null===e}function i(e){return null===e||!1===e||!0===e||void 0===e}function l(e){return"function"===typeof e}function d(e){return"string"===typeof e}function u(e){return null===e}function s(e,n){var t={};if(e)for(var a in e)t[a]=e[a];if(n)for(var f in n)t[f]=n[f];return t}function p(e){return!u(e)&&"object"===typeof e}var b={},h=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function v(e){return e.substring(2).toLowerCase()}function m(e,n){e.appendChild(n)}function g(e,n,t){u(t)?m(e,n):e.insertBefore(n,t)}function y(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function $(e,n,t){e.replaceChild(n,t)}function k(e,n){e.removeChild(n)}function w(e){for(var n=0;n<e.length;n++)e[n]()}function C(e,n,t){var a=e.children;if(4&t)return a.$LI;if(8192&t)return 2===e.childFlags?a:a[n?0:a.length-1];return a}function P(e,n){for(var t;e;){if(1521&(t=e.flags))return e.dom;e=C(e,n,t)}return null}function x(e,n){for(var t,a=e.length;void 0!==(t=e.pop());)t((function(){--a<=0&&l(n)&&n()}))}function M(e){for(var n=0;n<e.length;n++)e[n].fn();for(var t=0;t<e.length;t++){var a=e[t];g(a.parent,a.dom,a.next)}e.splice(0,e.length)}function S(e,n,t){do{var a=e.flags;if(1521&a)return void(t&&e.dom.parentNode!==n||k(n,e.dom));var f=e.children;if(4&a&&(e=f.$LI),8&a&&(e=f),8192&a){if(2!==e.childFlags){for(var r=0,c=f.length;r<c;++r)S(f[r],n,!1);return}e=f}}while(e)}function F(e,n){return function(){S(e,n,!0)}}function D(e,n,t){t.componentWillDisappear.length>0?x(t.componentWillDisappear,F(e,n)):S(e,n,!1)}function U(e,n,t,a,f,r,c,o){e.componentWillMove.push({dom:a,fn:function(){4&c?t.componentWillMove(n,f,a):8&c&&t.onComponentWillMove(n,f,a,o)},next:r,parent:f})}function W(e,n,t,a,f){var r,c,i=n.flags;do{var d=n.flags;if(1521&d)return void(o(r)||!l(r.componentWillMove)&&!l(r.onComponentWillMove)?g(t,n.dom,a):U(f,e,r,n.dom,t,a,i,c));var u=n.children;if(4&d)r=n.children,c=n.props,n=u.$LI;else if(8&d)r=n.ref,c=n.props,n=u;else if(8192&d){if(2!==n.childFlags){for(var s=0,p=u.length;s<p;++s)W(e,u[s],t,a,f);return}n=u}}while(n)}function I(e,n,t){if(e.constructor.getDerivedStateFromProps)return s(t,e.constructor.getDerivedStateFromProps(n,t));return t}var A={v:!1},L={componentComparator:null,createVNode:null,renderComplete:null};function N(e,n){e.textContent=n}function V(e,n){return p(e)&&e.event===n.event&&e.data===n.data}function B(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function O(e,n){return!!l(e)&&(e(n),!0)}var E="$";function j(e,n,t,a,f,r,c,o){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=a,this.key=void 0===f?null:f,this.props=void 0===r?null:r,this.ref=void 0===c?null:c,this.type=o}function T(e,n,t,a,f,r,c,o){var i=void 0===f?1:f,l=new j(i,a,t,e,c,r,o,n);return 0===i&&Y(l,l.children),l}function R(e,n,t){if(4&e)return t;var a=(32768&e?n.render:n).defaultHooks;if(o(a))return t;if(o(t))return a;return B(t,a)}function _(e,n,t){var a=(32768&e?n.render:n).defaultProps;if(o(a))return t;if(o(t))return s(a,null);return B(t,a)}function H(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function q(e,n,t,a,f){return new j(1,null,null,e=H(e,n),a,_(e,n,t),R(e,n,f),n)}function Q(e,n){return new j(1,o(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function X(e,n,t){var a=T(8192,8192,null,e,n,null,t,null);switch(a.childFlags){case 1:a.children=J(),a.childFlags=2;break;case 16:a.children=[Q(e)],a.childFlags=4}return a}function G(e){var n=e.children,t=e.childFlags;return X(2===t?K(n):n.map(K),t,e.key)}function K(e){var n=-16385&e.flags,t=e.props;if(14&n&&!u(t)){var a=t;for(var f in t={},a)t[f]=a[f]}if(0===(8192&n))return new j(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return G(e)}function J(){return Q("",null)}function z(e,n,t,a){for(var f=e.length;t<f;t++){var o=e[t];if(!i(o)){var l=a+E+t;if(r(o))z(o,n,0,l);else{if(c(o))o=Q(o,l);else{var s=o.key,p=d(s)&&s[0]===E;(81920&o.flags||p)&&(o=K(o)),o.flags|=65536,p?s.substring(0,a.length)!==a&&(o.key=a+s):u(s)?o.key=l:o.key=a+s}n.push(o)}}}}function Y(e,n){var t,a=1;if(i(n))t=n;else if(c(n))a=16,t=n;else if(r(n)){for(var f=n.length,o=0;o<f;++o){var l=n[o];if(i(l)||r(l)){t=t||n.slice(0,o),z(n,t,o,"");break}if(c(l))(t=t||n.slice(0,o)).push(Q(l,E+o));else{var s=l.key,p=(81920&l.flags)>0,b=u(s),h=d(s)&&s[0]===E;p||b||h?(t=t||n.slice(0,o),(p||h)&&(l=K(l)),(b||h)&&(l.key=E+o),t.push(l)):t&&t.push(l),l.flags|=65536}}a=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=K(n)),a=2;return e.children=t,e.childFlags=a,e}function Z(e){if(i(e)||c(e))return Q(e,null);if(r(e))return X(e,0,null);return 16384&e.flags?K(e):e}var ee="http://www.w3.org/1999/xlink",ne="http://www.w3.org/XML/1998/namespace",te={"xlink:actuate":ee,"xlink:arcrole":ee,"xlink:href":ee,"xlink:role":ee,"xlink:show":ee,"xlink:title":ee,"xlink:type":ee,"xml:base":ne,"xml:lang":ne,"xml:space":ne};function ae(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var fe=ae(0),re=ae(null),ce=ae(!0);function oe(e,n){var t=n.$EV;return t||(t=n.$EV=ae(null)),t[e]||1===++fe[e]&&(re[e]=ge(e)),t}function ie(e,n){var t=n.$EV;t&&t[e]&&(0===--fe[e]&&(document.removeEventListener(v(e),re[e]),re[e]=null),t[e]=null)}function le(e,n,t,a){if(l(t))oe(e,a)[e]=t;else if(p(t)){if(V(n,t))return;oe(e,a)[e]=t}else ie(e,a)}function de(e){return l(e.composedPath)?e.composedPath()[0]:e.target}function ue(e,n,t,a){var f=de(e);do{if(n&&f.disabled)return;var r=f.$EV;if(r){var c=r[t];if(c&&(a.dom=f,c.event?c.event(c.data,e):c(e),e.cancelBubble))return}f=f.parentNode}while(!u(f))}function se(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function pe(){return this.defaultPrevented}function be(){return this.cancelBubble}function he(e){var n={dom:document};return e.isDefaultPrevented=pe,e.isPropagationStopped=be,e.stopPropagation=se,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function ve(e){return function(n){if(0!==n.button)return void n.stopPropagation();ue(n,!0,e,he(n))}}function me(e){return function(n){ue(n,!1,e,he(n))}}function ge(e){var n="onClick"===e||"onDblClick"===e?ve(e):me(e);return document.addEventListener(v(e),n),n}function ye(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function $e(e,n,t){if(e[n]){var a=e[n];a.event?a.event(a.data,t):a(t)}else{var f=n.toLowerCase();e[f]&&e[f](t)}}function ke(e,n){var t=function(t){var a=this.$V;if(!a)return;var f=a.props||b,r=a.dom;if(d(e))$e(f,e,t);else for(var c=0;c<e.length;++c)$e(f,e[c],t);if(l(n)){var o=this.$V,i=o.props||b;n(i,r,!1,o)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function we(e,n,t){var a="$"+n,f=e[a];if(f){if(f[1].wrapped)return;e.removeEventListener(f[0],f[1]),e[a]=null}l(t)&&(e.addEventListener(n,t),e[a]=[n,t])}function Ce(e){return"checkbox"===e||"radio"===e}var Pe=ke("onInput",Fe),xe=ke(["onClick","onChange"],Fe);function Me(e){e.stopPropagation()}function Se(e,n){Ce(n.type)?(we(e,"change",xe),we(e,"click",Me)):we(e,"input",Pe)}function Fe(e,n){var t=e.type,a=e.value,f=e.checked,r=e.multiple,c=e.defaultValue,i=!o(a);t&&t!==n.type&&n.setAttribute("type",t),o(r)||r===n.multiple||(n.multiple=r),o(c)||i||(n.defaultValue=c+""),Ce(t)?(i&&(n.value=a),o(f)||(n.checked=f)):i&&n.value!==a?(n.defaultValue=a,n.value=a):o(f)||(n.checked=f)}function De(e,n){if("option"===e.type)Ue(e,n);else{var t=e.children,a=e.flags;if(4&a)De(t.$LI,n);else if(8&a)De(t,n);else if(2===e.childFlags)De(t,n);else if(12&e.childFlags)for(var f=0,r=t.length;f<r;++f)De(t[f],n)}}function Ue(e,n){var t=e.props||b,a=e.dom;a.value=t.value,t.value===n||r(n)&&-1!==n.indexOf(t.value)?a.selected=!0:o(n)&&o(t.selected)||(a.selected=t.selected||!1)}Me.wrapped=!0;var We=ke("onChange",Ae);function Ie(e){we(e,"change",We)}function Ae(e,n,t,a){var f=Boolean(e.multiple);o(e.multiple)||f===n.multiple||(n.multiple=f);var r=e.selectedIndex;if(-1===r&&(n.selectedIndex=-1),1!==a.childFlags){var c=e.value;"number"===typeof r&&r>-1&&n.options[r]&&(c=n.options[r].value),t&&o(c)&&(c=e.defaultValue),De(a,c)}}var Le,Ne,Ve=ke("onInput",Ee),Be=ke("onChange");function Oe(e,n){we(e,"input",Ve),n.onChange&&we(e,"change",Be)}function Ee(e,n,t){var a=e.value,f=n.value;if(o(a)){if(t){var r=e.defaultValue;o(r)||r===f||(n.defaultValue=r,n.value=r)}}else f!==a&&(n.defaultValue=a,n.value=a)}function je(e,n,t,a,f,r){64&e?Fe(a,t):256&e?Ae(a,t,f,n):128&e&&Ee(a,t,f),r&&(t.$V=n)}function Te(e,n,t){64&e?Se(n,t):256&e?Ie(n):128&e&&Oe(n,t)}function Re(e){return e.type&&Ce(e.type)?!o(e.checked):!o(e.value)}function _e(e){e&&!O(e,null)&&e.current&&(e.current=null)}function He(e,n,t){e&&(l(e)||void 0!==e.current)&&t.push((function(){O(e,n)||void 0===e.current||(e.current=n)}))}function qe(e,n,t){Qe(e,t),D(e,n,t)}function Qe(e,n){var t,a=e.flags,f=e.children;if(481&a){t=e.ref;var r=e.props;_e(t);var c=e.childFlags;if(!u(r))for(var i=Object.keys(r),d=0,s=i.length;d<s;d++){var p=i[d];ce[p]&&ie(p,e.dom)}12&c?Xe(f,n):2===c&&Qe(f,n)}else if(f)if(4&a){l(f.componentWillUnmount)&&f.componentWillUnmount();var v=n;l(f.componentWillDisappear)&&(v=new h,ze(n,f,f.$LI.dom,a,void 0)),_e(e.ref),f.$UN=!0,Qe(f.$LI,v)}else if(8&a){var m=n;if(!o(t=e.ref)){var g=null;l(t.onComponentWillUnmount)&&(g=P(e,!0),t.onComponentWillUnmount(g,e.props||b)),l(t.onComponentWillDisappear)&&(m=new h,ze(n,t,g=g||P(e,!0),a,e.props))}Qe(f,m)}else 1024&a?qe(f,e.ref,n):8192&a&&12&e.childFlags&&Xe(f,n)}function Xe(e,n){for(var t=0,a=e.length;t<a;++t)Qe(e[t],n)}function Ge(e,n){return function(){if(n)for(var t=0;t<e.length;t++)S(e[t],n,!1)}}function Ke(e,n,t){t.componentWillDisappear.length>0?x(t.componentWillDisappear,Ge(n,e)):e.textContent=""}function Je(e,n,t,a){Xe(t,a),8192&n.flags?D(n,e,a):Ke(e,t,a)}function ze(e,n,t,a,f){e.componentWillDisappear.push((function(e){4&a?n.componentWillDisappear(t,e):8&a&&n.onComponentWillDisappear(t,f,e)}))}function Ye(e){var n=e.event;return function(t){n(e.data,t)}}function Ze(e,n,t,a){if(p(t)){if(V(n,t))return;t=Ye(t)}we(a,v(e),t)}function en(e,n,t){if(o(n))return void t.removeAttribute("style");var a,f,r=t.style;if(d(n))return void(r.cssText=n);if(o(e)||d(e))for(a in n)f=n[a],r.setProperty(a,f);else{for(a in n)(f=n[a])!==e[a]&&r.setProperty(a,f);for(a in e)o(n[a])&&r.removeProperty(a)}}function nn(e,n,t,a,f){var r=e&&e.__html||"",c=n&&n.__html||"";r!==c&&(o(c)||ye(a,c)||(u(t)||(12&t.childFlags?Xe(t.children,f):2===t.childFlags&&Qe(t.children,f),t.children=null,t.childFlags=1),a.innerHTML=c))}function tn(e,n,t,a,f,r,c,i){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===e)break;var l=o(t)?"":t;a[e]!==l&&(a[e]=l);break;case"style":en(n,t,a);break;case"dangerouslySetInnerHTML":nn(n,t,c,a,i);break;default:ce[e]?le(e,n,t,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?Ze(e,n,t,a):o(t)?a.removeAttribute(e):f&&te[e]?a.setAttributeNS(te[e],e,t):a.setAttribute(e,t)}}function an(e,n,t,a,f,r){var c=!1,o=(448&n)>0;for(var i in o&&(c=Re(t))&&Te(n,a,t),t)tn(i,null,t[i],a,f,c,null,r);o&&je(n,e,a,t,!0,c)}function fn(e,n,t){var a=Z(e.render(n,e.state,t)),f=t;return l(e.getChildContext)&&(f=s(t,e.getChildContext())),e.$CX=f,a}function rn(e,n,t,a,f,r){var c=new n(t,a),o=c.$N=Boolean(n.getDerivedStateFromProps||c.getSnapshotBeforeUpdate);if(c.$SVG=f,c.$L=r,e.children=c,c.$BS=!1,c.context=a,c.props===b&&(c.props=t),o)c.state=I(c,t,c.state);else if(l(c.componentWillMount)){c.$BR=!0,c.componentWillMount();var i=c.$PS;if(!u(i)){var d=c.state;if(u(d))c.state=i;else for(var s in i)d[s]=i[s];c.$PS=null}c.$BR=!1}return c.$LI=fn(c,t,a),c}function cn(e,n){var t=e.props||b;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function on(e,n,t,a,f,r,c){var o=e.flags|=16384;481&o?sn(e,n,t,a,f,r,c):4&o?bn(e,n,t,a,f,r,c):8&o?hn(e,n,t,a,f,r,c):16&o?un(e,n,f):8192&o?dn(e,t,n,a,f,r,c):1024&o&&ln(e,t,n,f,r,c)}function ln(e,n,t,a,f,r){on(e.children,e.ref,n,!1,null,f,r);var c=J();un(c,t,a),e.dom=c.dom}function dn(e,n,t,a,f,r,c){var o=e.children,i=e.childFlags;12&i&&0===o.length&&(i=e.childFlags=2,o=e.children=J()),2===i?on(o,t,n,a,f,r,c):pn(o,t,n,a,f,r,c)}function un(e,n,t){var a=e.dom=document.createTextNode(e.children);u(n)||g(n,a,t)}function sn(e,n,t,a,f,r,c){var i=e.flags,l=e.props,d=e.className,s=e.childFlags,p=e.dom=y(e.type,a=a||(32&i)>0),b=e.children;if(o(d)||""===d||(a?p.setAttribute("class",d):p.className=d),16===s)N(p,b);else if(1!==s){var h=a&&"foreignObject"!==e.type;2===s?(16384&b.flags&&(e.children=b=K(b)),on(b,p,t,h,null,r,c)):8!==s&&4!==s||pn(b,p,t,h,null,r,c)}u(n)||g(n,p,f),u(l)||an(e,i,l,p,a,c),He(e.ref,p,r)}function pn(e,n,t,a,f,r,c){for(var o=0;o<e.length;++o){var i=e[o];16384&i.flags&&(e[o]=i=K(i)),on(i,n,t,a,f,r,c)}}function bn(e,n,t,a,f,r,c){var o=rn(e,e.type,e.props||b,t,a,r),i=c;l(o.componentDidAppear)&&(i=new h),on(o.$LI,n,o.$CX,a,f,r,i),gn(e.ref,o,r,c)}function hn(e,n,t,a,f,r,c){var i=e.ref,d=c;!o(i)&&l(i.onComponentDidAppear)&&(d=new h),on(e.children=Z(cn(e,t)),n,t,a,f,r,d),$n(e,r,c)}function vn(e){return function(){e.componentDidMount()}}function mn(e,n,t,a,f){e.componentDidAppear.push((function(){4&a?n.componentDidAppear(t):8&a&&n.onComponentDidAppear(t,f)}))}function gn(e,n,t,a){He(e,n,t),l(n.componentDidMount)&&t.push(vn(n)),l(n.componentDidAppear)&&mn(a,n,n.$LI.dom,4,void 0)}function yn(e,n){return function(){e.onComponentDidMount(P(n,!0),n.props||b)}}function $n(e,n,t){var a=e.ref;o(a)||(O(a.onComponentWillMount,e.props||b),l(a.onComponentDidMount)&&n.push(yn(a,e)),l(a.onComponentDidAppear)&&mn(t,a,P(e,!0),8,e.props))}function kn(e,n,t,a,f,r,c){Qe(e,c),0!==(n.flags&e.flags&1521)?(on(n,null,a,f,null,r,c),$(t,n.dom,e.dom)):(on(n,t,a,f,P(e,!0),r,c),D(e,t,c))}function wn(e,n,t,a,f,r,c,o){var i=n.flags|=16384;e.flags!==i||e.type!==n.type||e.key!==n.key||2048&i?16384&e.flags?kn(e,n,t,a,f,c,o):on(n,t,a,f,r,c,o):481&i?Sn(e,n,a,f,i,c,o):4&i?In(e,n,t,a,f,r,c,o):8&i?An(e,n,t,a,f,r,c,o):16&i?Ln(e,n):8192&i?xn(e,n,t,a,f,c,o):Mn(e,n,a,c,o)}function Cn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:N(t,n))}function Pn(e,n){e.textContent!==n&&(e.textContent=n)}function xn(e,n,t,a,f,r,c){var o=e.children,i=n.children,l=e.childFlags,d=n.childFlags,u=null;12&d&&0===i.length&&(d=n.childFlags=2,i=n.children=J());var s=0!==(2&d);if(12&l){var p=o.length;(8&l&&8&d||s||!s&&i.length>p)&&(u=P(o[p-1],!1).nextSibling)}Dn(l,d,o,i,t,a,f,u,e,r,c)}function Mn(e,n,t,a,f){var r=e.ref,c=n.ref,o=n.children;if(Dn(e.childFlags,n.childFlags,e.children,o,r,t,!1,null,e,a,f),n.dom=e.dom,r!==c&&!i(o)){var l=o.dom;k(r,l),m(c,l)}}function Sn(e,n,t,a,f,r,c){var i,l=n.dom=e.dom,d=e.props,u=n.props,s=!1,p=!1;if(a=a||(32&f)>0,d!==u){var h=d||b;if((i=u||b)!==b)for(var v in(s=(448&f)>0)&&(p=Re(i)),i){var m=h[v],g=i[v];m!==g&&tn(v,m,g,l,a,p,e,c)}if(h!==b)for(var y in h)o(i[y])&&!o(h[y])&&tn(y,h[y],null,l,a,p,e,c)}var $=n.children,k=n.className;e.className!==k&&(o(k)?l.removeAttribute("class"):a?l.setAttribute("class",k):l.className=k),4096&f?Pn(l,$):Dn(e.childFlags,n.childFlags,e.children,$,l,t,a&&"foreignObject"!==n.type,null,e,r,c),s&&je(f,n,l,i,!1,p);var w=n.ref,C=e.ref;C!==w&&(_e(C),He(w,l,r))}function Fn(e,n,t,a,f,r,c){Qe(e,c),pn(n,t,a,f,P(e,!0),r,c),D(e,t,c)}function Dn(e,n,t,a,f,r,c,o,i,l,d){switch(e){case 2:switch(n){case 2:wn(t,a,f,r,c,o,l,d);break;case 1:qe(t,f,d);break;case 16:Qe(t,d),N(f,a);break;default:Fn(t,a,f,r,c,l,d)}break;case 1:switch(n){case 2:on(a,f,r,c,o,l,d);break;case 1:break;case 16:N(f,a);break;default:pn(a,f,r,c,o,l,d)}break;case 16:switch(n){case 16:Cn(t,a,f);break;case 2:Ke(f,t,d),on(a,f,r,c,o,l,d);break;case 1:Ke(f,t,d);break;default:Ke(f,t,d),pn(a,f,r,c,o,l,d)}break;default:switch(n){case 16:Xe(t,d),N(f,a);break;case 2:Je(f,i,t,d),on(a,f,r,c,o,l,d);break;case 1:Je(f,i,t,d);break;default:var u=0|t.length,s=0|a.length;0===u?s>0&&pn(a,f,r,c,o,l,d):0===s?Je(f,i,t,d):8===n&&8===e?Vn(t,a,f,r,c,u,s,o,i,l,d):Nn(t,a,f,r,c,u,s,o,l,d)}}}function Un(e,n,t,a,f){f.push((function(){e.componentDidUpdate(n,t,a)}))}function Wn(e,n,t,a,f,r,c,o,i,d){var u=e.state,p=e.props,b=Boolean(e.$N),h=l(e.shouldComponentUpdate);if(b&&(n=I(e,t,n!==u?s(u,n):n)),c||!h||h&&e.shouldComponentUpdate(t,n,f)){!b&&l(e.componentWillUpdate)&&e.componentWillUpdate(t,n,f),e.props=t,e.state=n,e.context=f;var v=null,m=fn(e,t,f);b&&l(e.getSnapshotBeforeUpdate)&&(v=e.getSnapshotBeforeUpdate(p,u)),wn(e.$LI,m,a,e.$CX,r,o,i,d),e.$LI=m,l(e.componentDidUpdate)&&Un(e,p,u,v,i)}else e.props=t,e.state=n,e.context=f}function In(e,n,t,a,f,r,c,o){var i=n.children=e.children;if(u(i))return;i.$L=c;var d=n.props||b,p=n.ref,h=e.ref,v=i.state;if(!i.$N){if(l(i.componentWillReceiveProps)){if(i.$BR=!0,i.componentWillReceiveProps(d,a),i.$UN)return;i.$BR=!1}u(i.$PS)||(v=s(v,i.$PS),i.$PS=null)}Wn(i,v,d,t,a,f,!1,r,c,o),h!==p&&(_e(h),He(p,i,c))}function An(e,n,t,a,f,r,c,i){var d=!0,u=n.props||b,s=n.ref,p=e.props,h=!o(s),v=e.children;if(h&&l(s.onComponentShouldUpdate)&&(d=s.onComponentShouldUpdate(p,u)),!1!==d){h&&l(s.onComponentWillUpdate)&&s.onComponentWillUpdate(p,u);var m=Z(cn(n,a));wn(v,m,t,a,f,r,c,i),n.children=m,h&&l(s.onComponentDidUpdate)&&s.onComponentDidUpdate(p,u)}else n.children=v}function Ln(e,n){var t=n.children,a=n.dom=e.dom;t!==e.children&&(a.nodeValue=t)}function Nn(e,n,t,a,f,r,c,o,i,l){for(var d,u,s=r>c?c:r,p=0;p<s;++p)d=n[p],u=e[p],16384&d.flags&&(d=n[p]=K(d)),wn(u,d,t,a,f,o,i,l),e[p]=d;if(r<c)for(p=s;p<c;++p)16384&(d=n[p]).flags&&(d=n[p]=K(d)),on(d,t,a,f,o,i,l);else if(r>c)for(p=s;p<r;++p)qe(e[p],t,l)}function Vn(e,n,t,a,f,r,c,o,i,l,d){var u,s,p=r-1,b=c-1,h=0,v=e[h],m=n[h];e:{for(;v.key===m.key;){if(16384&m.flags&&(n[h]=m=K(m)),wn(v,m,t,a,f,o,l,d),e[h]=m,++h>p||h>b)break e;v=e[h],m=n[h]}for(v=e[p],m=n[b];v.key===m.key;){if(16384&m.flags&&(n[b]=m=K(m)),wn(v,m,t,a,f,o,l,d),e[p]=m,b--,h>--p||h>b)break e;v=e[p],m=n[b]}}if(h>p){if(h<=b)for(s=(u=b+1)<c?P(n[u],!0):o;h<=b;)16384&(m=n[h]).flags&&(n[h]=m=K(m)),++h,on(m,t,a,f,s,l,d)}else if(h>b)for(;h<=p;)qe(e[h++],t,d);else Bn(e,n,a,r,c,p,b,h,t,f,o,i,l,d)}function Bn(e,n,t,a,f,r,c,o,i,l,d,u,s,p){var b,h,v=0,m=0,g=o,y=o,$=r-o+1,k=c-o+1,w=new Int32Array(k+1),C=$===a,x=!1,S=0,F=0;if(f<4||($|k)<32)for(m=g;m<=r;++m)if(b=e[m],F<k){for(o=y;o<=c;o++)if(h=n[o],b.key===h.key){if(w[o-y]=m+1,C)for(C=!1;g<m;)qe(e[g++],i,p);S>o?x=!0:S=o,16384&h.flags&&(n[o]=h=K(h)),wn(b,h,i,t,l,d,s,p),++F;break}!C&&o>c&&qe(b,i,p)}else C||qe(b,i,p);else{var D={};for(m=y;m<=c;++m)D[n[m].key]=m;for(m=g;m<=r;++m)if(b=e[m],F<k)if(void 0!==(o=D[b.key])){if(C)for(C=!1;m>g;)qe(e[g++],i,p);w[o-y]=m+1,S>o?x=!0:S=o,16384&(h=n[o]).flags&&(n[o]=h=K(h)),wn(b,h,i,t,l,d,s,p),++F}else C||qe(b,i,p);else C||qe(b,i,p)}if(C)Je(i,u,e,p),pn(n,i,t,l,d,s,p);else if(x){var U=En(w);for(o=U.length-1,m=k-1;m>=0;m--)0===w[m]?(16384&(h=n[S=m+y]).flags&&(n[S]=h=K(h)),on(h,i,t,l,(v=S+1)<f?P(n[v],!0):d,s,p)):o<0||m!==U[o]?W(u,h=n[S=m+y],i,(v=S+1)<f?P(n[v],!0):d,p):o--;p.componentWillMove.length>0&&M(p.componentWillMove)}else if(F!==k)for(m=k-1;m>=0;m--)0===w[m]&&(16384&(h=n[S=m+y]).flags&&(n[S]=h=K(h)),on(h,i,t,l,(v=S+1)<f?P(n[v],!0):d,s,p))}var On=0;function En(e){var n=0,t=0,a=0,f=0,r=0,c=0,o=0,i=e.length;for(i>On&&(On=i,Le=new Int32Array(i),Ne=new Int32Array(i));t<i;++t)if(0!==(n=e[t])){if(e[a=Le[f]]<n){Ne[t]=a,Le[++f]=t;continue}for(r=0,c=f;r<c;)e[Le[o=r+c>>1]]<n?r=o+1:c=o;n<e[Le[r]]&&(r>0&&(Ne[t]=Le[r-1]),Le[r]=t)}r=f+1;var l=new Int32Array(r);for(c=Le[r-1];r-- >0;)l[r]=c,c=Ne[c],Le[r]=0;return l}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var jn=[],Tn="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},Rn=!1;function _n(e,n,t,a){var f=e.$PS;if(l(n)&&(n=n(f?s(e.state,f):e.state,e.props,e.context)),o(f))e.$PS=n;else for(var r in n)f[r]=n[r];if(e.$BR)l(t)&&e.$L.push(t.bind(e));else{if(!A.v&&0===jn.length)return Qn(e,a),void(l(t)&&t.call(e));if(-1===jn.indexOf(e)&&jn.push(e),a&&(e.$F=!0),Rn||(Rn=!0,Tn(qn)),l(t)){var c=e.$QU;c||(c=e.$QU=[]),c.push(t)}}}function Hn(e){for(var n=e.$QU,t=0;t<n.length;++t)n[t].call(e);e.$QU=null}function qn(){var e;for(Rn=!1;e=jn.shift();)if(!e.$UN){var n=e.$F;e.$F=!1,Qn(e,n),e.$QU&&Hn(e)}}function Qn(e,n){if(n||!e.$BR){var t=e.$PS;e.$PS=null;var a=[],f=new h;A.v=!0,Wn(e,s(e.state,t),e.props,P(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,a,f),w(a),x(f.componentDidAppear),A.v=!1}else e.state=e.$PS,e.$PS=null}var Xn=function(){function e(e,n){this.state=null,this.props=void 0,this.context=void 0,this.displayName=void 0,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$SSR=void 0,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=e||b,this.context=n||b}var n=e.prototype;return n.forceUpdate=function(e){if(this.$UN)return;_n(this,{},e,!0)},n.setState=function(e,n){if(this.$UN)return;this.$BS||_n(this,e,n,!1)},n.render=function(e,n,t){return null},e}();function Gn(e){for(var n=e.length/6|0,t=new Array(n),a=0;a<n;)t[a]="#"+e.slice(6*a,6*++a);return t}function Kn(e){var n=e.length;return function(t){return e[Math.max(0,Math.min(n-1,Math.floor(t*n)))]}}Xn.defaultProps=null;var Jn=Kn(Gn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));function zn(e,n){for(var t=[],a=0;a<e.length;a++)t.push(n(e[a]));return t}Kn(Gn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),Kn(Gn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),Kn(Gn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),e.startFPSMonitor(),e.startMemMonitor();var Yn=function(e){function n(n,t){var a;return(a=e.call(this,n,t)||this).state={numPoints:0},a.updateCount=a.updateCount.bind(f(a)),a}t(n,e);var a=n.prototype;return a.updateCount=function(e){this.setState({numPoints:e.target.value})},a.componentDidMount=function(){this.setState({numPoints:1e3})},a.render=function(e,n){return T(1,"div","app-wrapper",[q(2,et,{count:n.numPoints},null,null),T(1,"div","controls",[Q("# Points"),T(64,"input",null,null,1,{type:"range",min:10,max:1e4,value:n.numPoints,onInput:this.updateCount},null,null),n.numPoints],0,null,null,null),T(1,"div","about",[Q("InfernoJS 1k Components Demo based on the Glimmer demo by"),Q(" "),T(1,"a",null,"Michael Lange",16,{href:"http://mlange.io",target:"_blank"},null,null),Q(".")],0,null,null,null)],4,null,null,null)},n}(Xn),Zn=[0,3,0,1,2],et=function(e){function a(n,t){var a;return(a=e.call(this,n,t)||this).layout=0,a.phyllotaxis=dt(100),a.grid=ut(100),a.wave=st(100),a.spiral=pt(100),a.points=[],a.step=0,a.numSteps=120,a}t(a,e);var f=a.prototype;return f.next=function(){var e=this;this.step=(this.step+1)%this.numSteps,0===this.step&&(this.layout=(this.layout+1)%Zn.length);var t=Math.min(1,this.step/(.8*this.numSteps)),a=Zn[this.layout],f=Zn[(this.layout+1)%Zn.length],r=ot(a),c=ot(f),o=it(a),i=it(f);this.points=this.points.map((function(e){var a=n({},e);return a.x=lt(a,t,r,c),a.y=lt(a,t,o,i),a})),this.setState(),requestAnimationFrame((function(){e.next()}))},f.setAnchors=function(e){var n=this;e.map((function(e,t){var a=vt(n.grid(t)),f=a[0],r=a[1],c=vt(n.wave(t)),o=c[0],i=c[1],l=vt(n.spiral(t)),d=l[0],u=l[1],s=vt(n.phyllotaxis(t)),p=s[0],b=s[1];Object.assign(e,{gx:f,gy:r,wx:o,wy:i,sx:d,sy:u,px:p,py:b})})),this.points=e},f.makePoints=function(e){for(var n=[],t=0;t<e;t++)n.push({x:0,y:0,color:Jn(t/e)});this.setAnchors(n)},f.componentWillReceiveProps=function(e){e.count!==this.props.count&&(this.phyllotaxis=dt(e.count),this.grid=ut(e.count),this.wave=st(e.count),this.spiral=pt(e.count),this.makePoints(e.count))},f.componentDidMount=function(){this.next()},f.renderPoint=function(e){return q(2,nt,{x:e.x,y:e.y,color:e.color},null,null)},f.render=function(){return T(32,"svg","demo",T(32,"g",null,zn(this.points,this.renderPoint),4,null,null,null),2,null,null,null)},a}(Xn);function nt(e){var n=e.x,t=e.y,a=e.color;return T(32,"rect","point",null,1,{transform:"translate("+Math.floor(n)+", "+Math.floor(t)+")",fill:a},null,null)}var tt,at,ft,rt,ct=Math.PI*(3-Math.sqrt(5));function ot(e){switch(e){case 0:return"px";case 1:return"gx";case 2:return"wx";case 3:return"sx"}}function it(e){switch(e){case 0:return"py";case 1:return"gy";case 2:return"wy";case 3:return"sy"}}function lt(e,n,t,a){var f=e[t];return f+(e[a]-f)*n}function dt(e){return function(n){var t=Math.sqrt(n/e),a=n*ct;return[t*Math.cos(a),t*Math.sin(a)]}}function ut(e){var n=Math.round(Math.sqrt(e));return function(e){return[1.6/n*(e%n)-.8,1.6/n*Math.floor(e/n)-.8]}}function st(e){var n=2/(e-1);return function(e){var t=e*n-1;return[t,.3*Math.sin(t*Math.PI*3)]}}function pt(e){return function(n){var t=Math.sqrt(n/(e-1)),a=t*Math.PI*10;return[t*Math.cos(a),t*Math.sin(a)]}}function bt(e,n){return n.map((function(n){return n*e}))}function ht(e,n){return n.map((function(n,t){return n+e[t]}))}function vt(e){var n=window.innerHeight/2,t=window.innerWidth/2;return ht([t,n],bt(Math.min(n,t),e))}tt=q(2,Yn,null,null,null),at=document.getElementById("app"),void 0===ft&&(ft=null),void 0===rt&&(rt=b),function(e,n,t,a){var f=[],r=new h,c=n.$V;A.v=!0,o(c)?o(e)||(16384&e.flags&&(e=K(e)),on(e,n,a,!1,null,f,r),n.$V=e,c=e):o(e)?(qe(c,n,r),n.$V=null):(16384&e.flags&&(e=K(e)),wn(c,e,n,a,!1,null,f,r),c=n.$V=e),w(f),x(r.componentDidAppear),A.v=!1,l(t)&&t(),l(L.renderComplete)&&L.renderComplete(c,n)}(tt,at,ft,rt)}(perfMonitor);
