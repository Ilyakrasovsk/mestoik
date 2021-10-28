(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e,n){var r=e.data,o=e.userData,i=e.handleCardClick,a=e.handleLikeClick,u=e.handleDelIconClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=r.link,this._name=r.name,this._cardSelector=n,this._handleCardClick=i,this._data=r,this._handleLikeClick=a,this._handleDelIconClick=u,this._userData=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generate",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._cardDelete(),this.likesNumber(this._data),this._element.querySelector(".element__title").textContent=this._name,this._buttonImage.src=this._link,this._buttonImage.alt=this._name,this._element}},{key:"cardLike",value:function(){var e=this;return!!this._data.likes.some((function(t){return t._id===e._userData._id}))}},{key:"likesNumber",value:function(e){this._data=e,this._likeQuantity.textContent=this._data.likes.length,this.cardLike()?this._buttonLike.classList.add("element__like_active"):this._buttonLike.classList.remove("element__like_active")}},{key:"_cardDelete",value:function(){this._userData._id!==this._data.owner._id&&this._element.querySelector(".element__basket").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike=this._element.querySelector(".element__like"),this._buttonBasket=this._element.querySelector(".element__basket"),this._buttonImage=this._element.querySelector(".element__photo"),this._likeQuantity=this._element.qeurySelector(".element__quantity"),this._buttonLike.addEventListener("click",(function(){e._handleLikeClick(e._data._id)})),this._buttonBasket.addEventListener("click",(function(){e._handleDelIconClick(e._element,e._data._id)})),this._buttonImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._seting=t}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._seting.inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._seting.errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._seting.inputErrorClass),this._errorElement.classList.remove(this._seting.errorClass),this._errorElement.textContent=" "}},{key:"_chekInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasNoInputValid",value:function(){return this._inputList.every((function(e){return 0===e.value.lenght}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)||this._hasNoInputValid(this._inputList)?this.disableSubmitButton():this.enebleSubmitButton()}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._seting.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enebleSubmitButton",value:function(){this._buttonElement.classList.remove(this._seting.inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"disableInptErr",value:function(){var e=this;this._inputList.forEach((function(t){e.__hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._seting.inputSelector)),this._buttonElement=this._formElement.querySelector(this._seting.submitButtonSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._chekInputValidity(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e.disableSubmitButton()})),this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._cardFormModalWindow=this._cardFormModalWindow.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._cardFormModalWindow)}},{key:"close",value:function(){this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._cardFormModalWindow)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_cardFormModalWindow",value:function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__cross"))&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__cross").addEventListener("click",(function(){e.close()}))}},{key:"returnPopup",value:function(){return this._popup}}])&&o(t.prototype,n),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,n){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},f(e,t,n||e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}const h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function a(e){var t,n,r=e.popupSelector,o=e.formSabmitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,r))._popup=f((t=l(n),p(a.prototype)),"returnPopup",t).call(t),n._formSabmitHandler=o,n._inputSelectors=n._popup.querySelectorAll(".popup__item"),n._popupButton=n._popup.querySelector(".popup__button"),n._popupButtonValue=n._popupButton.value,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValid={},this._inputList=Array.from(this._inputSelectors),this._inputList.forEach((function(t){return e._formValid[t.name]=t.value})),this._formValid}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._formSabmitHandler(e._getInputValues())})),f(p(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){f(p(a.prototype),"close",this).call(this),this._popup.querySelector(".popup__input-container").reset()}}])&&u(t.prototype,n),a}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},b(e,t,n||e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}const g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function a(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popup=b((t=v(n),k(a.prototype)),"returnPopup",t).call(t),n._popupMesto=n._popup.querySelector(".popup__mesto"),n._popupImage=n._popup.querySelector(".popup__imag"),n}return t=a,(n=[{key:"open",value:function(e,t){b(k(a.prototype),"open",this).call(this),this._popupMesto.textContent=e,this._popupImage.src=t,this._popupImage.alt=e}}])&&_(t.prototype,n),a}(i);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.id,r=t.userName,o=t.userProf,i=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=r,this._userProf=o,this._id=n,this._userAvatar=i}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{_id:this._id,name:this._userName.textContent,about:this._userProf.textContent,avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e,t,n,r){this._id=e,this._userName.textContent=t,this._userProf.textContent=n,this._userAvatar.src=r}}])&&E(t.prototype,n),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){var t=this;this._renderedItems.forEach((function(n){return t._renderer(n,e)}))}},{key:"setItem",value:function(e){this._container.append(e)}},{key:"setPreItem",value:function(e){this._container.prepend(e)}},{key:"setItemsRendered",value:function(e){this._renderedItems=e}}])&&w(t.prototype,n),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t,n){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},q(e,t,n||e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}const B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t,n,r=e.popupSelector,o=e.formSabmitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,r))._popup=q((t=P(n),R(a.prototype)),"returnPopup",t).call(t),n._formSabmitHandler=o,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._formSabmitHandler(e._deleteElement)})),q(R(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e){q(R(a.prototype),"open",this).call(this),this._deleteElement=e}},{key:"close",value:function(){q(R(a.prototype),"close",this).call(this)}}])&&C(t.prototype,n),a}(i);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getCardInitial",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInfoPersone",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"cardLikeRemove",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&T(t.prototype,n),e}(),D=document.querySelector(".profile__edit-button"),A=".popup_prof",N=document.querySelector(".profile__add-button"),x=".popup_add",V=".popup_avatar",H=document.querySelector(".profile__avatar"),M={formSelector:".popup__input-container",inputSelector:".popup__item",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__item_type_error",errorClass:"popup__error_visible"},F=document.querySelector(".popup__input-container_add"),W=document.querySelector(".popup__input-container_prof"),J=document.querySelector(".popup__input-container_avatar"),G=document.querySelector(".profile__name"),Q=document.querySelector(".profile__prof");function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=new U({baseUrl:"https://nomoreparties.co/v1/cohort-29",headers:{authorization:"66763194-dff7-4592-9eca-89f9d6503745","content-type":"application/json"}}),K=new g(".popup_images"),X=function(e,n,r){var o=new t({data:e,userData:n,handleCardClick:function(e,t){!function(e,t){K.open(e,t)}(e,t)},handleLikeClick:function(e){o.cardLike()?$.cardLikeRemove(e).then((function(e){o.likesNumber(e)})).catch((function(e){console.log(e)})):$.likeCard(e).then((function(e){o.likesNumber(e)})).catch((function(e){console.log(e)}))},handleDelIconClick:function(e,t){ie.open({element:e,cardId:t})}},r);return o},Y=new L({data:{},renderer:function(e,t){var n=X(e,t,"#element__template").generate();Y.setItem(n)}},".elements"),Z=[$.getCardInitial(),$.getInfoPersone()];function ee(e,t){document.querySelector(e).querySelector(".popup__button").value=t?"Сохранение...":"Сохранить"}Promise.all(Z).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ne.setUserInfo(i._id,i.name,i.about,i.avatar),Y.setItemsRendered(o),Y.addItem(i),D.addEventListener("click",(function(){ue.disableInptErr(),ue.enebleSubmitButton(),W.reset(),re.open();var e=ne.getUserInfo();W.name.value=e.name,W.prof.value=e.about})),H.addEventListener("click",(function(){se.disableInptErr(),se.enebleSubmitButton(),J.reset(),oe.open(),J.link.value=ne.getUserInfo().avatar})),N.addEventListener("click",(function(){ae.disableInptErr(),ae.disableSubmitButton(),F.reset(),te.open(),F.mesto.value="",F.link.value=""}))})).catch((function(e){console.log(e)}));var te=new h({popupSelector:x,formSabmitHandler:function(e){ee(x,!0),$.addNewCard({name:e.title,link:e.link}).then((function(e){var t=X(e,ne.getUserInfo(),"#element__template");Y.setPreItem(t.generate()),te.close(),ee(x,!1)})).catch((function(e){console.log(e)}))}}),ne=new S({userName:G,userProf:Q,userAvatar:H}),re=new h({popupSelector:A,formSabmitHandler:function(e){ee(A,!0),$.sendUserInfo({name:e.name,about:e.prof}).then((function(e){ne.setUserInfo(e._id,e.name,e.about,e.avatar),re.close(),ee(A,!1)})).catch((function(e){console.log(e)}))}}),oe=new h({popupSelector:V,formSabmitHandler:function(e){ee(V,!0),$.editAvatar({avatar:e.link}).then((function(e){ne.setUserInfo(e._id,e.name,e.about,e.avatar),oe.close(),ee(V,!1)})).catch((function(e){console.log(e)}))}}),ie=new B({popupSelector:".popup_delete",formSabmitHandler:function(e){var t=e.element,n=e.cardId;$.deleteCard(n).then((function(){t.remove(),ie.close()})).catch((function(e){console.log(e)}))}}),ae=new r(M,F),ue=new r(M,W),se=new r(M,J);oe.setEventListeners(),ie.setEventListeners(),re.setEventListeners(),te.setEventListeners(),K.setEventListeners(),se.enableValidation(),ae.enableValidation(),ue.enableValidation()})();