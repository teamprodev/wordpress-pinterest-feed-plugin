(function(window){"use strict";/*!
 * 
 * 	elfsight.com
 * 
 * 	Copyright (c) 2020 Elfsight, LLC. ALL RIGHTS RESERVED
 * 
 */
!function(i){var t={};function e(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return i[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=i,e.c=t,e.d=function(i,t,r){e.o(i,t)||Object.defineProperty(i,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(i){var t=i&&i.__esModule?function(){return i.default}:function(){return i};return e.d(t,"a",t),t},e.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},e.p="",e(e.s=0)}([function(i,t){(window.eapps=window.eapps||{}).observer=function(i){i.$watch("widget.data.contentToDisplay",function(){"user"===i.widget.data.contentToDisplay?(i.setPropertyVisibility("headerSettings",!0),i.setPropertyVisibility("boardsSettings",!0),i.setPropertyVisibility("pinsVisible",!0),i.setPropertyVisibility("user",!0),i.setPropertyVisibility("boards",!0),i.setPropertyVisibility("pins",!1)):"boards"===i.widget.data.contentToDisplay?(i.setPropertyVisibility("headerSettings",!1),i.setPropertyVisibility("boardsSettings",!1),i.setPropertyVisibility("pinsVisible",!1),i.setPropertyVisibility("boards",!0),i.setPropertyVisibility("pins",!1),i.setPropertyVisibility("user",!1)):"pins"===i.widget.data.contentToDisplay&&(i.setPropertyVisibility("headerSettings",!1),i.setPropertyVisibility("boardsSettings",!1),i.setPropertyVisibility("pinsVisible",!1),i.setPropertyVisibility("pins",!0),i.setPropertyVisibility("boards",!1),i.setPropertyVisibility("user",!1))})}}]);})(window)