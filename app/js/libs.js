function onEntry(e){e.forEach(e=>{e.isIntersecting&&e.target.classList.add("show-active")})}$(document).ready(function(){setTimeout(function(){$("body").removeClass("overflow-hidden")},1500)}),$(document).ready(function(){$(document).on("click",".heart__favorite",function(e){$(this).hasClass("active-add")?($(this).removeClass("active-add"),$(this).addClass("active-del")):($(this).removeClass("active-del"),$(this).addClass("active-add"))})}),$(document).ready(function(){$(document).on("click",".heart__favorite",function(e){$(this).parent().addClass("heart__favorite-button-active"),$(this).parent().hasClass("heart__favorite-button-active-add")?($(this).parent().removeClass("heart__favorite-button-active-add"),$(this).parent().addClass("heart__favorite-button-active-del")):($(this).parent().removeClass("heart__favorite-button-active-del"),$(this).parent().addClass("heart__favorite-button-active-add"))})}),$(document).ready(function(){$(document).on("click",".buttons-anim",function(e){$(this).addClass("show")})}),$(document).ready(function(){$(document).on("click",".js-icon-scale-change",function(e){$(this).addClass("js-icon-scale-change-active")}),$(document).on("animationend",".js-icon-scale-change",function(e){$(this).removeClass("js-icon-scale-change-active")})}),$(".jsButtonCounter").on("input paste keyup keydown change blur",".buttons-anim__input",function(){$(this).val($(this).val().replace(/[^0-9]/g,"")),(isNaN(parseInt($(this).val()))||parseInt($(this).val())<1)&&$(this).val(1),9999<parseInt($(this).val())&&$(this).val(9999),reCalcCart()}),$(".js-change-number").on("click",function(){let e=$(this).siblings(".js-number-inp"),t=parseInt(e.val())||0,o=$(this).parent(),n=$(this).closest(".buttons-anim");"decrease"===$(this).data("type")?1===t?(n.addClass(""),o.addClass("button-show-cancel"),setTimeout(function(){o.removeClass("show"),n.removeClass("show"),setTimeout(function(){o.removeClass("button-show-cancel"),n.removeClass("")},700)},700)):--t:t<9999&&++t,e.val(t).change()}),$(document).ready(function(){$(document).on("click",".button-anim",function(e){$(this).addClass("js-button-anim-active"),setTimeout(function(){$(".button-anim").removeClass("js-button-anim-active")},2e3)}),$(document).on("click",".load-more-button",function(e){$(".content").addClass("js-content-back"),setTimeout(function(){$(".content").removeClass("js-content-back")},2e3)})}),$(document).ready(function(){$(".on-order__input").on("change keyup keydown",function(){$(document).on("click",".js-on-order__button",function(e){var t=parseInt($.trim($(this).val()).length);console.log(t),t<3&&($(this).addClass("js-on-order__button-active"),$("body").removeClass("overflow-hidden"),$(".state-form").addClass("open-slow"),$(".js-state-form-back").addClass("_active"),setTimeout(function(){$(".jsOnOrderModal").removeClass("open"),$(".overlay").removeClass("open")},500),setTimeout(function(){$(".js-on-order__button").removeClass("js-on-order__button-active")},2e3))})}),$(document).on("click",".btn-bell-anim-black",function(e){$(this).addClass("btn-bell-anim-black-active"),setTimeout(function(){$(".btn-bell-anim-black").removeClass("btn-bell-anim-black-active")},2e3)}),$(document).on("click",".js-state-form-back",function(e){$(this).removeClass("_active"),$(".state-form").removeClass("open"),$("body").removeClass("overflow-hidden")})}),$(document).ready(function(){$(document).on("click",".btn-bell-anim",function(e){$(".overlay").addClass("_active"),$(this).addClass("js-btn-bell-anim-active"),setTimeout(function(){$(".btn-bell-anim").removeClass("js-btn-bell-anim-active")},300)})}),$(document).ready(function(){$(document).on("click",".overlay",function(e){$(".overlay").removeClass("open"),$(".modal").removeClass("open"),$(".dropdown").removeClass("open"),$("header").removeClass("headerZI"),$("body").removeClass("overflow-hidden"),$(this).removeClass("_active")}),$(document).on("click",".jsCloseStateForm",function(e){$("header").removeClass("headerZI"),$(".overlay").removeClass("_active"),$(".js-state-form-back").removeClass("_active"),$(".state-form").removeClass("open-slow")})}),$(document).ready(function(){$(document).on("click","body",function(e){$(".dropdown").hasClass("open")&&$("header").addClass("headerZI")})}),$(document).ready(function(){$(document).on("click",".jsBtnFilter",function(e){$(".overlay").addClass("open")}),$(document).on("click",".jsCloseFilter",function(e){$(".overlay").fadeOut(0),$(".overlay").removeClass("open"),setTimeout(function(){$(".overlay").fadeIn(0)},1e3)})}),$(document).on("click",".cart__popup-header .close",function(e){$(this).addClass("scale"),setTimeout(function(){$(".cart__popup-header .close").removeClass("scale")},1e3)}),$(document).ready(function(){$(".show-main").addClass("show-main-active")});let options={threshold:[.5]},observer=new IntersectionObserver(onEntry,options),elements=document.querySelectorAll(".show");for(let e of elements)observer.observe(e);$(document).ready(function(){$(".accordion__overhead--new").click(function(e){$(this).toggleClass("active").next().slideToggle(700)})});const sections=document.querySelectorAll(".main-page .scrolltoblock"),scrolling={enabled:!0,events:"scroll,wheel,touchmove,pointermove".split(","),prevent:e=>e.preventDefault(),disable(){scrolling.enabled&&(scrolling.enabled=!1,window.addEventListener("scroll",gsap.ticker.tick,{passive:!0}),scrolling.events.forEach((e,t)=>(t?document:window).addEventListener(e,scrolling.prevent,{passive:!1})))},enable(){scrolling.enabled||(scrolling.enabled=!0,window.removeEventListener("scroll",gsap.ticker.tick),scrolling.events.forEach((e,t)=>(t?document:window).removeEventListener(e,scrolling.prevent)))}};function goToSection(e,t,o){scrolling.enabled&&(scrolling.disable(),gsap.to(window,{scrollTo:{y:e,autoKill:!1},onComplete:scrolling.enable,duration:2}),t&&t.restart())}sections.forEach((e,t)=>{const o=gsap.from(e.querySelector(".scrolltoblock-slow"),{yPercent:50,duration:1.5,paused:!0});ScrollTrigger.create({trigger:e,start:"top bottom-=1",end:"bottom top+=1",onEnter:()=>goToSection(e,o),onEnterBack:()=>goToSection(e)})}),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.NiceSelect=t():e.NiceSelect=t()}(self,function(){return(()=>{"use strict";var n={d:(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},e={};function s(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!1),e.dispatchEvent(t)}function o(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),e.dispatchEvent(t)}function i(e,t){return e.getAttribute(t)}function a(e,t){return!!e&&e.classList.contains(t)}function l(e,t){return e&&e.classList.add(t)}function r(e,t){return e&&e.classList.remove(t)}n.r(e),n.d(e,{default:()=>d,bind:()=>function(e,t){return new d(e,t)}});var c={data:null,searchable:!1};function d(e,t){this.el=e,this.config=Object.assign({},c,t||{}),this.data=this.config.data,this.selectedOptions=[],this.placeholder=i(this.el,"placeholder")||this.config.placeholder||"Select an option",this.dropdown=null,this.multiple=i(this.el,"multiple"),this.disabled=i(this.el,"disabled"),this.create()}return d.prototype.create=function(){this.el.style.display="none",this.data?this.processData(this.data):this.extractData(),this.renderDropdown(),this.bindEvent()},d.prototype.processData=function(e){var t=[];e.forEach(e=>{t.push({data:e,attributes:{selected:!1,disabled:!1,optgroup:"optgroup"==e.value}})}),this.options=t},d.prototype.extractData=function(){var e=this.el.querySelectorAll("option,optgroup"),o=[],n=[],t=[];e.forEach(e=>{var t="OPTGROUP"==e.tagName?{text:e.label,value:"optgroup"}:{text:e.innerText,value:e.value},e={selected:null!=e.getAttribute("selected"),disabled:null!=e.getAttribute("disabled"),optgroup:"OPTGROUP"==e.tagName};o.push(t),n.push({data:t,attributes:e})}),this.data=o,this.options=n,this.options.forEach(function(e){e.attributes.selected&&t.push(e)}),this.selectedOptions=t},d.prototype.renderDropdown=function(){var e=`<div class="${["nice-select",i(this.el,"class")||"",this.disabled?"disabled":"",this.multiple?"has-multiple":""].join(" ")}" tabindex="${this.disabled?null:0}">
  <span class="${this.multiple?"multiple-options":"current"}"></span>
  <div class="nice-select-dropdown">
  ${this.config.searchable?'<div class="nice-select-search-box">\n<input type="text" class="nice-select-search" placeholder="Search..."/>\n</div>':""}
  <ul class="list"></ul>
  </div></div>
`;this.el.insertAdjacentHTML("afterend",e),this.dropdown=this.el.nextElementSibling,this._renderSelectedItems(),this._renderItems()},d.prototype._renderSelectedItems=function(){var t,e;this.multiple?(t="",t="auto"==window.getComputedStyle(this.dropdown).width||this.selectedOptions.length<2?(this.selectedOptions.forEach(function(e){t+=`<span class="current">${e.data.text}</span>`}),""==t?this.placeholder:t):this.selectedOptions.length+" selected",this.dropdown.querySelector(".multiple-options").innerHTML=t):(e=0<this.selectedOptions.length?this.selectedOptions[0].data.text:this.placeholder,this.dropdown.querySelector(".current").innerHTML=e)},d.prototype._renderItems=function(){var t=this.dropdown.querySelector("ul");this.options.forEach(e=>{t.appendChild(this._renderItem(e))})},d.prototype._renderItem=function(e){var t,o=document.createElement("li");return o.innerHTML=e.data.text,e.attributes.optgroup?o.classList.add("optgroup"):(o.setAttribute("data-value",e.data.value),t=["option",e.attributes.selected?"selected":null,e.attributes.disabled?"disabled":null],o.addEventListener("click",this._onItemClicked.bind(this,e)),o.classList.add(...t)),e.element=o},d.prototype.update=function(){var e;this.extractData(),this.dropdown&&(e=a(this.dropdown,"open"),this.dropdown.parentNode.removeChild(this.dropdown),this.create(),e&&s(this.dropdown))},d.prototype.disable=function(){this.disabled||(this.disabled=!0,l(this.dropdown,"disabled"))},d.prototype.enable=function(){this.disabled&&(this.disabled=!1,r(this.dropdown,"disabled"))},d.prototype.clear=function(){this.selectedOptions=[],this._renderSelectedItems(),this.updateSelectValue(),o(this.el)},d.prototype.destroy=function(){this.dropdown&&(this.dropdown.parentNode.removeChild(this.dropdown),this.el.style.display="")},d.prototype.bindEvent=function(){this.dropdown.addEventListener("click",this._onClicked.bind(this)),this.dropdown.addEventListener("keydown",this._onKeyPressed.bind(this)),this.dropdown.addEventListener("focusin",function(e){var t=document.createEvent("FocusEvent");t.initEvent("focusin",!0,!1),e.dispatchEvent(t)}.bind(this,this.el)),this.dropdown.addEventListener("focusout",function(e){var t=document.createEvent("FocusEvent");t.initEvent("focusout",!0,!1),e.dispatchEvent(t)}.bind(this,this.el)),window.addEventListener("click",this._onClickedOutside.bind(this)),this.config.searchable&&this._bindSearchEvent()},d.prototype._bindSearchEvent=function(){var e=this.dropdown.querySelector(".nice-select-search");e&&e.addEventListener("click",function(e){return e.stopPropagation(),!1}),e.addEventListener("input",this._onSearchChanged.bind(this))},d.prototype._onClicked=function(e){var t;this.multiple?this.dropdown.classList.add("open"):this.dropdown.classList.toggle("open"),this.dropdown.classList.contains("open")?((t=this.dropdown.querySelector(".nice-select-search"))&&(t.value="",t.focus()),r(this.dropdown.querySelector(".focus"),"focus"),l(this.dropdown.querySelector(".selected"),"focus"),this.dropdown.querySelectorAll("ul li").forEach(function(e){e.style.display=""})):this.dropdown.focus()},d.prototype._onItemClicked=function(e,t){t=t.target;a(t,"disabled")||(this.multiple?a(t,"selected")?(r(t,"selected"),this.selectedOptions.splice(this.selectedOptions.indexOf(e),1),this.el.querySelector('option[value="'+t.dataset.value+'"]').selected=!1):(l(t,"selected"),this.selectedOptions.push(e)):(this.selectedOptions.forEach(function(e){r(e.element,"selected")}),l(t,"selected"),this.selectedOptions=[e]),this._renderSelectedItems(),this.updateSelectValue())},d.prototype.updateSelectValue=function(){var t;this.multiple?(t=this.el,this.selectedOptions.forEach(function(e){e=t.querySelector('option[value="'+e.data.value+'"]');e&&e.setAttribute("selected",!0)})):0<this.selectedOptions.length&&(this.el.value=this.selectedOptions[0].data.value),o(this.el)},d.prototype._onClickedOutside=function(e){this.dropdown.contains(e.target)||this.dropdown.classList.remove("open")},d.prototype._onKeyPressed=function(e){var t,o=this.dropdown.querySelector(".focus"),n=this.dropdown.classList.contains("open");return 32==e.keyCode||13==e.keyCode?s(n?o:this.dropdown):40==e.keyCode?(n?(t=this._findNext(o))&&(r(this.dropdown.querySelector(".focus"),"focus"),l(t,"focus")):s(this.dropdown),e.preventDefault()):38==e.keyCode?(n?(o=this._findPrev(o))&&(r(this.dropdown.querySelector(".focus"),"focus"),l(o,"focus")):s(this.dropdown),e.preventDefault()):27==e.keyCode&&n&&s(this.dropdown),!1},d.prototype._findNext=function(e){for(e=e?e.nextElementSibling:this.dropdown.querySelector(".list .option");e;){if(!a(e,"disabled")&&"none"!=e.style.display)return e;e=e.nextElementSibling}return null},d.prototype._findPrev=function(e){for(e=e?e.previousElementSibling:this.dropdown.querySelector(".list .option:last-child");e;){if(!a(e,"disabled")&&"none"!=e.style.display)return e;e=e.previousElementSibling}return null},d.prototype._onSearchChanged=function(e){var o,t=this.dropdown.classList.contains("open"),e=e.target.value;""==(e=e.toLowerCase())?this.options.forEach(function(e){e.element.style.display=""}):t&&(o=new RegExp(e),this.options.forEach(function(e){var t=e.data.text.toLowerCase(),t=o.test(t);e.element.style.display=t?"":"none"})),this.dropdown.querySelectorAll(".focus").forEach(function(e){r(e,"focus")}),l(this._findNext(null),"focus")},e})()});