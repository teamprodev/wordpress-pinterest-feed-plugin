/*
    Pinterest Feed
    Version: 1.2.0
    Release date: Tue Sep 08 2020

    https://elfsight.com

    Copyright (c) 2020 Elfsight, LLC. ALL RIGHTS RESERVED
*/

!function(wp,$){"use strict";let IconBlock=function(e){return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20",viewBox:"0 0 20 20",class:"dashicon"},[wp.element.createElement("path",{id:"a",d:"M12.58 0a4.103 4.103 0 0 1 4.092 4.092v8.488a4.103 4.103 0 0 1-4.092 4.092H4.092A4.103 4.103 0 0 1 0 12.58V4.092A4.103 4.103 0 0 1 4.092 0h8.488zm2.37 12.387h-.009V4.286a2.564 2.564 0 0 0-2.554-2.555H4.286A2.564 2.564 0 0 0 1.73 4.286v8.1a2.564 2.564 0 0 0 2.555 2.555h8.109a2.564 2.564 0 0 0 2.555-2.554zm3.319-8.303A4.09 4.09 0 0 1 20 7.42v8.488A4.103 4.103 0 0 1 15.908 20H7.42c-1.37 0-2.596-.69-3.336-1.731h11.63a2.564 2.564 0 0 0 2.555-2.555V4.084zM6.822 7.873a2.344 2.344 0 0 1-.093-.654c0-.858.513-1.531 1.189-1.531.546 0 .874.397.874.95 0 .293-.058.518-.293 1.272a13.008 13.008 0 0 0-.188.661c-.11.462.224.852.71.852.89 0 1.568-1.17 1.568-2.701 0-1.147-.788-1.906-2.102-1.906-1.478 0-2.515 1.063-2.515 2.419 0 .403.109.707.321.955.131.154.157.25.108.43a21.63 21.63 0 0 0-.11.43c-.058.22-.26.316-.466.232-.776-.314-1.198-1.142-1.198-2.18 0-1.865 1.623-3.491 4.008-3.491 2.044 0 3.567 1.449 3.567 3.213 0 2.205-1.259 3.815-3.061 3.815-.479 0-.96-.198-1.253-.487l-.12.466-.003.011a53.79 53.79 0 0 1-.184.707 4.303 4.303 0 0 1-.467 1.034 6.998 6.998 0 0 1-.534.77c-.115.147-.361.094-.388-.1a7.339 7.339 0 0 1-.042-.32 6.23 6.23 0 0 1-.017-1.297 3.63 3.63 0 0 1 .078-.472l.34-1.427.343-1.442a1.863 1.863 0 0 1-.072-.209z"})])};if(void 0===wp.components||void 0===wp.blocks||void 0===wp.element||void 0===wp.i18n)return!1;const{Component:Component}=window.React,{__:__}=wp.i18n,el=wp.element.createElement,registerBlockType=wp.blocks.registerBlockType,ServerSideRender=wp.components.ServerSideRender,restApiUrl=window.wpApiSettings.root+"/elfsight-pinterest-feed/admin",restApiNonce=window.wpApiSettings.nonce;let initTimeout;function initWidget(){clearTimeout(initTimeout),initTimeout=setTimeout(function(){const widgets=document.querySelectorAll("[data-elfsight-pinterest-feed-options]");Array.prototype.slice.call(widgets).forEach(function(widget){const options=widget.getAttribute("data-elfsight-pinterest-feed-options"),data=JSON.parse(decodeURIComponent(options));eval("eappsPinterestFeed(widget, data)"),widget.removeAttribute("data-elfsight-pinterest-feed-options"),widget.removeAttribute("data-elfsight-pinterest-feed-version"),widget.closest(".elfsight-block-widget-container").classList.add("elfsight-block-widget-initialized")})},1500)}async function getWidgets(){const e=await $.ajax({type:"GET",url:restApiUrl+"/widgets/list/",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",restApiNonce)}});return e.status?[e.data,e.data.reduce(function(e,t){return e[t.id]=t,e},{})]:[]}function getWidgetId(e){let t;return e.some(function(e){return"1"===e.active&&(t=parseInt(e.id),!0)}),t}class Widget extends Component{componentDidMount(){initWidget()}componentDidUpdate(){initWidget()}render(){const{id:e}=this.props;return e?el("div",{className:"elfsight-block-widget-container"},el(ServerSideRender,{block:"elfsight-pinterest-feed/block",attributes:{id:e}}),el("div",{className:"elfsight-block-widget-placeholder"},el(IconBlock,{}),el("span",{},"Pinterest Feed"))):null}}class Button extends Component{render(){const{href:e,className:t,text:i}=this.props,s=document.location.origin+document.location.pathname.replace("post.php","admin.php")+"?page=elfsight-pinterest-feed#";return el("a",{href:s+e,target:"_blank",className:t},i)}}class WidgetSelect extends Component{constructor(){super(),this.state={widgets:[]}}setWidget(e){e.preventDefault();const{setAttributes:t}=this.props,i=e.target.querySelector("option:checked");t({id:parseInt(i.value)})}componentDidMount(){const{id:e,setAttributes:t}=this.props;getWidgets().then(i=>{const[s,n]=i;this.setState({widgets:s});const o=!(!n[e]||"1"!==n[e].active);t(!o&&n?{id:getWidgetId(s),exist:!0}:{id:e,exist:o})})}render(){const{widgets:e}=this.state,{id:t}=this.props;return e.length>0?el("div",{className:"components-base-control"},el("div",{className:"components-base-control__field"},el("select",{className:"components-select-control__input",id:"elfsight-pinterest-feed-block-control-id",value:t,onChange:this.setWidget.bind(this)},e.map(({id:e,name:t})=>el("option",{value:e},t))))):null}}registerBlockType("elfsight-pinterest-feed/block",{title:"Pinterest Feed",description:"Display Pinterest profile, boards and pins on your website",icon:{src:IconBlock},category:"widgets",keywords:["Pinterest Feed","Elfsight"],supports:{html:!1},attributes:{id:{type:"number"},exist:{type:"bool",default:!1}},edit:function(e){const{attributes:{id:t,exist:i},setAttributes:s}=e;return getWidgets().then(e=>{const[n,o]=e;s(!i&&n?{id:getWidgetId(n),exist:!0}:{id:t,exist:i})}),el(wp.element.Fragment,{},el(wp.editor.InspectorControls,{},el(wp.components.PanelBody,{className:"elfsight-block-panel",title:"Select widget"},el(WidgetSelect,{id:t,setAttributes:function(t){e.setAttributes(t)}}),i?el("div",{className:"elfsight-block-panel-group"},el(Button,{href:"/edit-widget/"+t,className:"components-button is-button is-default is-large elfsight-block-panel-button",text:__("Edit Widget")}),el(Button,{href:"/add-widget/",className:"elfsight-block-panel-link",text:__("Create new widget")})):el("div",{className:"elfsight-block-panel-group"},el("span",{},__("No widgets yet")),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-panel-button",text:__("Create Widget")})))),i?el(Widget,{id:t,exist:i}):null,i?null:el("div",{className:"elfsight-block-form"},el("div",{className:"elfsight-block-form-header"},el(IconBlock,{}),el("span",{},"Pinterest Feed")),el("div",{className:"elfsight-block-form-text"},__("Display Pinterest profile, boards and pins on your website"),el("br"),el("strong",{},__("Let's create your first widget!"))),el(Button,{href:"/add-widget/",className:"components-button is-button is-default is-primary is-large elfsight-block-form-button",text:__("Create Widget")})))},save:function(){return null}})}(wp,jQuery);