!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=299)}({0:function(e,t){e.exports=function(e,t,r,n,i,o){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i);var f;if(o?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=f):n&&(f=n),f){var l=c.functional,_=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(e,t){return f.call(t),_(e,t)}):c.beforeCreate=_?[].concat(_,f):[f]}return{esModule:s,exports:a,options:c}}},299:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(300);r.d(t,"default",function(){return n.a})},300:function(e,t,r){"use strict";function n(e){r(301)}var i=r(302),o=r(303),s=r(0),a=n,u=s(i.a,o.a,!1,a,"data-v-01c1a136",null);t.a=u.exports},301:function(e,t){},302:function(e,t,r){"use strict";t.a={name:"wv-preview",props:{title:String,value:String,dataItems:{type:Array,default:function(){return[]}},buttons:{type:Array,default:function(){return[]}}}}},303:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"weui-form-preview"},[r("div",{staticClass:"weui-form-preview__hd"},[r("label",{staticClass:"weui-form-preview__label",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),r("em",{staticClass:"weui-form-preview__value",domProps:{innerHTML:e._s(e.value)}})]),e._v(" "),r("div",{staticClass:"weui-form-preview__bd"},e._l(e.dataItems,function(t,n,i){return r("div",{key:n,staticClass:"weui-form-preview__item"},[r("label",{staticClass:"weui-form-preview__label"},[e._v(e._s(t.label))]),e._v(" "),r("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(t.value))])])})),e._v(" "),r("div",{staticClass:"weui-form-preview__ft"},e._l(e.buttons,function(t,n,i){return r("a",{key:n,staticClass:"weui-form-preview__btn",class:"primary"===t.type?"weui-form-preview__btn_primary":"weui-form-preview__btn_default",domProps:{textContent:e._s(t.text)},on:{click:t.action}})}))])},i=[],o={render:n,staticRenderFns:i};t.a=o}})});