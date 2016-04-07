"use strict";(function(){function blurElement(){$(".active-signup-icon").removeClass("active-signup-icon");}
function focusElement(event){var container;blurElement();container=$(event.target).parent().parent();container.addClass("active-signup-icon");}
$(function(){$(".signup-input").on("focus",focusElement);$(".signup-input").on("blur",blurElement);});global.fl.shared={focusInputElement:focusElement,blurInputElement:blurElement};}());"use strict";(function(){var f;function handleModalClick(event){if(event.target===f.get(0)){event.preventDefault();f.hide();}}
function showLoginForm(){var next;f=$("#fl-signin-form-container");f.show();f.on("click",handleModalClick);$(".signin-close",f).on("click",function(){f.hide();});$(".signup-input",f).on("focus",global.fl.shared.focusInputElement);$(".signup-input",f).on("blur",global.fl.shared.blurInputElement);next=$("[name=next]",f);if(!next.val()){next.val(global.location.pathname);}
$("[name=username]",f).focus();}
function handleSignIn(event){event.preventDefault();showLoginForm();}
$(".sign-in-action").on("click",handleSignIn);fl.showLoginForm=showLoginForm;}());