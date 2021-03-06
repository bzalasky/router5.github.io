/**
 * @license
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 router5
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function(){"use strict";var t=function t(t){return function(e){e.set("currentRoute",t.getState());t.addListener(function(t){e.set("currentRoute",t)})}};function e(t){var e={currentRoute:{source:"currentRoute"},button:{type:"boolean"},routeName:{type:"string",optional:false},routeParams:{type:"object"},routeOptions:{type:"object"},activeClass:{type:"string"},activeStrict:{type:"function"},onClick:{type:"function"}};var n={activeClass:"active",button:false,activeStrict:false,routeParams:{},routeOptions:{}};var r=function r(e,n,r){e.preventDefault();var o=n.props;t.navigate(o.routeName,o.routeParams,o.routeOptions)};var o=function o(e,n){var o=e.props;var i=t.isActive(o.routeName,o.routeParams);var a=t.buildUrl(o.routeName,o.routeParams);var u=(o["class"]?o["class"].split(" "):[]).concat(i?[o.activeClass]:[]).join(" ");var c=o.onClick||r;if(o.button){return element("button",{type:"button","class":u,onClick:c},o.children)}return element("a",{href:a,"class":u,onClick:c},o.children)};return{propTypes:e,defaultProps:n,render:o}}function n(t,e){var n={};var r={};return function o(o,i,a){var u=o.afterMount;var c=o.beforeUnmount;o.afterMount=function(c,s,f){if(u)u(c,s,f);if(a){n[c.id]=function(t,n){var r=e.entities[c.id];a(r.context,e.setState(r),t,n)};t.addNodeListener(i,n[c.id])}if(o.canDeactivate){r[c.id]={canDeactivate:function v(t,n){var r=e.entities[c.id];return o.canDeactivate(r.context,e.setState(r),t,n)}};t.registerComponent(i,r[c.id])}};o.beforeUnmount=function(e,o){if(c)c(e,o);if(n[e.id]){t.removeNodeListener(i,n[e.id]);delete r[e.id]}if(r[e.id]){t.deregisterComponent(i,r[e.id])}};return o}}window.routerPlugin=t;window.linkFactory=e;window.segmentDecoratorFactory=n})();
