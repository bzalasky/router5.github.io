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
(function(){"use strict";function t(t){return React.createClass({propTypes:{routeName:React.PropTypes.string.isRequired,routeParams:React.PropTypes.object,routeOptions:React.PropTypes.object,activeClassName:React.PropTypes.string,activeStrict:React.PropTypes.bool,onClick:React.PropTypes.func},getDefaultProps:function e(){return{activeClassName:"active",activeStrict:false,routeParams:{},routeOptions:{}}},getInitialState:function r(){return{active:t.isActive(this.props.routeName,this.props.routeParams,this.props.activeStrict)}},shouldComponentUpdate:function n(e,r){return!t.areStatesEqual({name:e.routeName,params:e.routeParams},{name:this.props.routeName,params:this.props.routeParams})||this.state.active!==r.active},clickHandler:function a(e){if(e.which===1){e.preventDefault();t.navigate(this.props.routeName,this.props.routeParams,this.props.routeOptions)}},routeChangeHandler:function i(e,r){this.setState({active:t.isActive(this.props.routeName,this.props.routeParams)})},componentDidMount:function o(){t.addListener(this.routeChangeHandler)},componentWillUnmount:function s(){t.removeListener(this.routeChangeHandler)},render:function c(){var e=this.props;var r=this.state.active;var n=t.buildUrl(e.routeName,e.routeParams);var a=(e.className?e.className.split(" "):[]).concat(r?[e.activeClassName]:[]).join(" ");var i=e.onClick||this.clickHandler;return React.createElement("a",{href:n,className:a,onClick:i},e.children)}})}function e(t){return function(e,r){return{nodeListener:function n(t,e){r.call(this,t,e)},componentDidMount:function a(){if(r)t.addNodeListener(e,this.nodeListener);t.registerComponent(e,this)},componentWillUnmount:function i(){if(r)t.removeNodeListener(e,this.nodeListener);t.deregisterComponent(e,this)}}}}window.linkFactory=t;window.segmentMixinFactory=e})();
