(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=o.handleCardClick,a=o.handleTrashIcon,c=o.handleLikeIcon;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._card=e,this._name=e.name,this._link=e.link,this._likes=e.likes,this._cardOwnerId=e.owner._id,this._myId=r,this._cardId=e._id,this._cardSelector=n,this._handleCardClick=i,this._handleTrashIcon=a,this._handleLikeIcon=c,this._isOwner=this._cardOwnerId==this._myId,this._isLiked=!1}var n,r;return n=t,(r=[{key:"_makeCloneTemplateForCard",value:function(){return this._cardTemplate=document.querySelector(this._cardSelector).content.cloneNode(!0),this._cardTemplate}},{key:"_makeCard",value:function(){this._element=this._makeCloneTemplateForCard(),this._cardImage=this._element.querySelector(".group__image"),this._cardImage.src=this._link,this._cardName=this._element.querySelector(".group__name"),this._cardName.textContent=this._name,this._cardImage.alt=this._name,this._likeCount=this._element.querySelector(".group__like-number"),this._likeCount.textContent=this._likes.length}},{key:"getIsLiked",value:function(){var e=this;return this._card.likes.some((function(t){return t._id===e._myId}))}},{key:"getCardId",value:function(){return this._card._id}},{key:"setCardLikes",value:function(e){this._card.likes=e.likes,this._likeCount.textContent=e.likes.length}},{key:"showLikeOffOn",value:function(){this.getIsLiked()?this._likeIcon.classList.add("group__like-icon_active"):this._likeIcon.classList.remove("group__like-icon_active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeIcon=this._element.querySelector(".group__like-icon"),this._trashIcon=this._element.querySelector(".group__delete-icon"),this._isOwner||this._trashIcon.classList.add("group__delete-icon_disable"),this.showLikeOffOn(),this._likeIcon.addEventListener("click",(function(){e._handleLikeIcon()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})})),this._trashIcon.addEventListener("click",(function(t){var n=t.target.closest(".group__rectangle");e._handleTrashIcon(e._card,n)}))}},{key:"getCard",value:function(){return this._makeCard(),this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._form.checkValidity()?i._enableSubmit():i._disableSubmit()},(r="_toggleButton")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._formSelector=n.formSelector,this._inputSelector=n.inputSelector,this._submitButtonSelector=n.submitButtonSelector,this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass,this._form=t}var t,r;return t=e,(r=[{key:"_showError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_enableSubmit",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_disableSubmit",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.setAttribute("disabled","disabled")}},{key:"enableValidation",value:function(){var e=this;this._submitButton=this._form.querySelector(this._submitButtonSelector),this._toggleButton(),this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._inputs=this._form.querySelectorAll(this._inputSelector),this._inputs.forEach((function(t){t.addEventListener("input",(function(){if(t.validity.valid)e._hideError(t);else{var n=t.validationMessage;e._showError(t,n)}e._toggleButton()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButton(),this._inputs.forEach((function(t){e._hideError(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._element.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-icon")&&e.close()}))}},{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._element.classList.remove("popup_opened")}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){var t,n=e.selector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._element.querySelector(".popup__form"),t._inputList=Array.from(t._element.querySelectorAll(".popup__text")),t._submitButton=t._element.querySelector(".popup__submit"),t._isLoading=!1,t._formValues={},t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setSubmitText",value:function(e){this._submitButton.value=e}},{key:"close",value:function(){s(h(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;s(h(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupFullImage=t._element.querySelector(".popup__fullscreen-image"),t._popupFullImageCaption=t._element.querySelector(".popup__fullscreen-caption"),t}return t=a,(n=[{key:"open",value:function(e){this._popupFullImage.src=e.link,this._popupFullImageCaption.textContent=e.name,this._popupFullImage.alt=e.name,y(g(a.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t.addItem(e)}))}},{key:"addItem",value:function(e,t){var n=this._renderer(e);t&&this._container.prepend(n),this._container.append(n)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.nameSelector,r=t.selfInfoSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._selfInfoSelector=r,this._avatarSelector=o,this._userName=document.querySelector(this._nameSelector),this._userInfo=document.querySelector(this._selfInfoSelector),this._avatar=document.querySelector(this._avatarSelector),this._id=""}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user={name:this._userName.textContent,about:this._userInfo.textContent,avatar:this._avatar.src,_id:this._id},this._user}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userInfo.textContent=e.about,this._avatar.src=e.avatar,this._id=e._id}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headeres=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){if(e.ok)return e.json()}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headeres}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headeres,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headeres}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headeres,body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headeres}).then(this._checkResponse)}},{key:"putLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headeres}).then(this._checkResponse)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headeres}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headeres,body:JSON.stringify({avatar:"".concat(e)})}).then(this._checkResponse)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function x(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e){var t,n=e.selector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._element.querySelector(".popup__form"),t}return t=a,(n=[{key:"open",value:function(e,t){P(q(a.prototype),"open",this).call(this),this._arg=e,this._item=t}},{key:"setEventListeners",value:function(){var e=this;P(q(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._arg,e._item)}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i),U=document.querySelector(".profile__info-edit"),A=document.querySelector(".profile__add"),F=document.querySelector(".profile__avatar-edit");function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.querySelector(".popup__text_profile-name"),document.querySelector(".popup__text_profile-description");var D,N={};D={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__text_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(D.formSelector)).forEach((function(e){var t=new r(e,D),n=e.getAttribute("name");N[n]=t,t.enableValidation()}));var J=function(e,t){t.setCardLikes(e),t.showLikeOffOn()},H=function(e){X.open(e)},M=function(e,t){Q.open(e,t)},z=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-37",headers:{authorization:"bcc22094-6aca-4aef-ba1e-307f93bc116d","Content-type":"application/json"}}),$=new C({nameSelector:".profile__info-name",selfInfoSelector:".profile__info-description",avatarSelector:".profile__avatar"}),G=new p({selector:".popup_profile",handleFormSubmit:function(e){G.setSubmitText("Сохранение..."),z.setUserInfo(e.name,e.about).then((function(e){$.setUserInfo(e)})).then((function(){return G.close()})).catch((function(e){console.log(e)})).finally((function(){return G.setSubmitText("Сохранить")}))}}),K=new p({selector:".popup_card-add",handleFormSubmit:function(e){K.setSubmitText("Создание..."),z.addCard(e).then((function(e){Y.addItem(e,!0)})).then((function(){return K.close()})).catch((function(e){console.log(e)})).finally((function(){return K.setSubmitText("Создать")}))}}),Q=new B({selector:".popup_delete-card",handleFormSubmit:function(e,t){z.deleteCard(e).then((function(){return t.remove()})).then((function(){return Q.close()})).catch((function(e){console.log(e)}))}}),W=new p({selector:".popup_profile-avatar",handleFormSubmit:function(e){W.setSubmitText("Сохранение..."),z.changeAvatar(e.avatar).then((function(e){$.setUserInfo(e)})).then((function(){return W.close()})).catch((function(e){console.log(e)})).finally((function(){return W.setSubmitText("Сохранить")}))}}),X=new k(".popup_fullscreen-image"),Y=new w({renderer:function(e){var n=new t(e,"#group__cards",$._id,{handleCardClick:H,handleTrashIcon:M,handleLikeIcon:function(){n.getIsLiked()?function(e){z.deleteLikeCard(e.getCardId()).then((function(t){J(t,e)})).catch((function(e){console.log(e)}))}(n):function(e){z.putLikeCard(e.getCardId()).then((function(t){J(t,e)})).catch((function(e){console.log(e)}))}(n)}});return n.getCard()}},".group");Promise.all([z.getUserInfo(),z.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo(o),Y.renderItems(i)})).catch((function(e){console.log(e)})),G.setEventListeners(),K.setEventListeners(),X.setEventListeners(),Q.setEventListeners(),W.setEventListeners(),U.addEventListener("click",(function(){N["profile-form"].resetValidation();var e=$.getUserInfo();G.setInputValues(e),G.open()})),A.addEventListener("click",(function(){N["card-form"].resetValidation(),K.open()})),F.addEventListener("click",(function(){N["profile-avatar-form"].resetValidation(),W.open()}))})();