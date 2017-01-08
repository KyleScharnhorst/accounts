!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("immutable"),require("lodash"),require("apollo-errors"),require("redux"),require("redux-immutable")):"function"==typeof define&&define.amd?define(["immutable","lodash","apollo-errors","redux","redux-immutable"],t):"object"==typeof exports?exports["accounts/@accounts"]=t(require("immutable"),require("lodash"),require("apollo-errors"),require("redux"),require("redux-immutable")):e["accounts/@accounts"]=t(e.immutable,e.lodash,e["apollo-errors"],e.redux,e["redux-immutable"])}(this,function(e,t,r,n,o){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.PasswordSignupFields=t.DBDriver=t.AccountsCommon=t.AccountsServer=t.AccountsClient=void 0;var i=r(8),a=o(i),u=r(11),s=o(u),c=r(1),l=o(c),f=r(12),d=o(f),p=r(5),h=n(p);t.AccountsClient=a.default,t.AccountsServer=s.default,t.AccountsCommon=l.default,t.DBDriver=d.default,t.PasswordSignupFields=h},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(7),u=r(2),s=function(){function e(t){n(this,e),this.options=t}return i(e,[{key:"validateEmail",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(0,a.isEmpty)((0,a.trim)(e));if(!r&&t)throw new u.AccountsError({message:"Email is required"});return r}},{key:"validatePassword",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(0,a.isEmpty)((0,a.trim)(e));if(!r&&t)throw new u.AccountsError({message:"Password is required"});return r}},{key:"validateUsername",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(0,a.isEmpty)((0,a.trim)(e));if(!r&&t)throw new u.AccountsError({message:"Username is required"});return r}},{key:"userId",value:function(){}},{key:"user",value:function(){}},{key:"config",value:function(e){this.options=o({},this.options,{options:e})}},{key:"onLogin",value:function(e){this.onLogin=e}},{key:"onLoginFailure",value:function(e){this.onLoginFailure=e}},{key:"onLogout",value:function(e){this.onLogout=e}}]),e}();t.default=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccountsError=void 0;var n=r(13),o=(0,n.createError)("AccountsError",{});t.AccountsError=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loggingIn=void 0;var n=r(6),o="js-accounts/",i=o+"LOGIN",a=o+"SET_USER",u=o+"/LOGGING_IN",s=(0,n.Map)({formType:"login",isLoading:!1,user:null,loggingIn:!1}),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1],r=e;switch(t.type){case i:break;case a:break;case u:var n=t.payload.isLoggingIn;return e.set("loggingIn",n)}return r};t.default=c;t.loggingIn=function e(t){return{type:e,payload:{isLoggingIn:t}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultServerConfig=t.defaultClientConfig=t.defaultSharedConfig=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(5),i=t.defaultSharedConfig={sendVerificationEmail:!1,forbidClientAccountCreation:!1,restrictCreationByEmailDomain:null,loginExpirationInDays:90,passwordResetTokenExpirationInDays:3,passwordEnrollTokenExpirationInDays:30,passwordSignupFields:o.EMAIL_ONLY,minimumPasswordLength:7,path:"/accounts"};t.defaultClientConfig=n({},i,{server:"",title:"",requestPermissions:[],requestOfflineToken:{},forceApprovalPrompt:{},requireEmailVerification:!1,loginPath:"/",signUpPath:null,resetPasswordPath:null,profilePath:"/",changePasswordPath:null,homeRoutePath:"/"}),t.defaultServerConfig=n({},i)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.EMAIL_ONLY="EMAIL_ONLY",t.USERNAME_AND_EMAIL="USERNAME_AND_EMAIL",t.USERNAME_AND_OPTIONAL_EMAIL="USERNAME_AND_OPTIONAL_EMAIL",t.USERNAME_ONLY="USERNAME_ONLY"},function(e,t){e.exports=require("immutable")},function(e,t){e.exports=require("lodash")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(7),f=r(4),d=r(2),p=r(10),h=n(p),v=r(1),g=n(v),m=r(3),y=function(e){return(0,l.has)(e,"user")||(0,l.has)(e,"email")||(0,l.has)(e,"id")},b=function(e){function t(e,r){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(!r)throw new d.AccountsError({message:"A REST or GraphQL client is required"});return n.client=r,n}return u(t,e),c(t,[{key:"getState",value:function(){return h.default.getState().get("accounts")}},{key:"createUser",value:function(){function e(e,r){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&void 0!==t.password){e.next=2;break}throw new d.AccountsError({message:"Unrecognized options for create user request [400]"});case 2:if(this.validatePassword(t.password),this.validateUsername(t.username,!1)||this.validateEmail(t.email,!1)){e.next=5;break}throw new d.AccountsError({message:"Username or Email is required"});case 5:return e.prev=5,e.next=8,this.client.createUser(t);case 8:(0,l.isFunction)(r)&&r(),e.next=16;break;case 11:if(e.prev=11,e.t0=e.catch(5),!(0,l.isFunction)(r)){e.next=16;break}throw r(e.t0),new d.AccountsError({message:e.t0});case 16:case"end":return e.stop()}},e,this,[[5,11]])}));return e}()},{key:"loginWithPassword",value:function(){function e(e,r,n){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t,r,n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&t){e.next=2;break}throw new d.AccountsError({message:"Unrecognized options for login request [400]"});case 2:if(((0,l.isString)(t)||y(t))&&(0,l.isString)(r)){e.next=4;break}throw new d.AccountsError({message:"Match failed [400]"});case 4:return h.default.dispatch((0,m.loggingIn)(!0)),e.prev=5,e.next=8,this.client.loginWithPassword(t,r);case 8:(0,l.isFunction)(n)&&n(),e.next=16;break;case 11:if(e.prev=11,e.t0=e.catch(5),!(0,l.isFunction)(n)){e.next=16;break}throw n(e.t0),new d.AccountsError({message:e.t0});case 16:h.default.dispatch((0,m.loggingIn)(!1));case 17:case"end":return e.stop()}},e,this,[[5,11]])}));return e}()},{key:"loggingIn",value:function(){return this.getState().get("loggingIn")}}]),t}(g.default),w={ui:{},config:function(e,t){this.instance=new b(s({},f.defaultClientConfig,e),t)},createUser:function(){var e;return(e=this.instance).createUser.apply(e,arguments)},loginWithPassword:function(){var e;return(e=this.instance).loginWithPassword.apply(e,arguments)},options:function(){return this.instance.options}};t.default=w},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(14),i=r(6),a=r(15);t.default=function(e){var t=e.reducers,r=void 0===t?{}:t,u=e.middleware,s=void 0===u?[]:u,c=e.state,l=void 0===c?(0,i.Map)():c;return(0,o.createStore)((0,a.combineReducers)(r),l,(0,o.compose)(o.applyMiddleware.apply(void 0,n(s))))}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(9),i=n(o),a=r(3),u=n(a),s=(0,i.default)({reducers:{accounts:u.default}});t.default=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),u=a.value}catch(e){return void r(e)}return a.done?void e(u):Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(4),f=r(2),d=r(1),p=n(d),h=function(e){function t(e,r){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(!r)throw new f.AccountsError({message:"A database driver is required"});return n.db=r,n}return u(t,e),c(t,[{key:"createUser",value:function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.validateUsername(t.username,!1)||this.validateEmail(t.email,!1)){e.next=2;break}throw new f.AccountsError({message:"Username or Email is required"});case 2:if(e.t0=t.username,!e.t0){e.next=7;break}return e.next=6,this.db.findUserByUsername(t.username);case 6:e.t0=e.sent;case 7:if(!e.t0){e.next=9;break}throw new f.AccountsError({message:"Username already exists"});case 9:if(e.t1=t.email,!e.t1){e.next=14;break}return e.next=13,this.db.findUserByEmail(t.email);case 13:e.t1=e.sent;case 14:if(!e.t1){e.next=16;break}throw new f.AccountsError({message:"Email already exists"});case 16:return e.next=18,this.db.createUser(t);case 18:return r=e.sent,e.abrupt("return",r);case 20:case"end":return e.stop()}},e,this)}));return e}()}]),t}(p.default),v={instance:h,config:function(e,t){this.instance=new h(s({},l.defaultServerConfig,e),t)},createUser:function(e){return this.instance.createUser(e)},options:function(){return this.instance.options}};t.default=v},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function e(){r(this,e)};t.default=n},function(e,t){e.exports=require("apollo-errors")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-immutable")}])});