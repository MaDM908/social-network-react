(this["webpackJsonpmern-app"]=this["webpackJsonpmern-app"]||[]).push([[7],{230:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return u})),r.d(e,"c",(function(){return b}));var n=r(3),c=r(231),a=(r(0),r(113)),i=r(233),o=r.n(i),s=r(2),j=function(t){var e=Object.assign({},t),r=e.touched&&e.error;return Object(s.jsxs)("div",{className:r?o.a.formControl+" "+o.a.error:o.a.formControl,children:[e.children,r&&Object(s.jsx)("div",{className:o.a.formControl+" "+o.a.error,children:Object(s.jsx)("span",{children:e.error})})]})},l=function(t){var e=t.input,r=t.meta,a=Object(c.a)(t,["input","meta"]);return Object(s.jsx)(j,Object(n.a)(Object(n.a)({},r),{},{children:Object(s.jsx)("textarea",Object(n.a)(Object(n.a)({},e),a))}))},u=function(t){var e=t.input,r=t.meta,a=Object(c.a)(t,["input","meta"]);return Object(s.jsx)(j,Object(n.a)(Object(n.a)({},r),{},{children:Object(s.jsx)("input",Object(n.a)(Object(n.a)({},e),a))}))},b=function(t,e,r,n){return Object(s.jsx)(a.a,{placeholder:t,name:e,validate:r,type:arguments.length<=4?void 0:arguments[4],component:n})}},232:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return c}));var n=function(t){if(!t)return"Field is empty!"},c=function(t){return function(e){if(e&&e.length>t)return"Field is more than ".concat(t," symbols")}}},233:function(t,e,r){t.exports={formControl:"FormControls_formControl__1JQEi",error:"FormControls_error__f71V9"}},303:function(t,e,r){t.exports={content:"Login_content__37FgI",form:"Login_form__2jdhr",error:"Login_error__AV455",title:"Login_title__2xSGI"}},304:function(t,e,r){"use strict";r.r(e);r(0);var n=r(303),c=r.n(n),a=r(114),i=r(230),o=r(232),s=r(23),j=r(27),l=r(21),u=r(2),b=Object(a.a)({form:"login"})((function(t){var e=t.handleSubmit,r=t.error,n=t.captchaUrl;return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:e,className:c.a.form,children:[Object(u.jsx)("div",{children:Object(i.c)("Email...","email",[o.b],i.a,"text")}),Object(u.jsx)("div",{children:Object(i.c)("Password...","password",[o.b],i.a,"password")}),Object(u.jsx)("span",{children:"Remember me"}),Object(u.jsx)("div",{children:Object(i.c)(null,"rememberMe",[],i.a,"checkbox")}),n&&Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:n,alt:"captcha"}),Object(i.c)("Type symbols from image...","captcha",[o.b],i.a)]}),r&&Object(u.jsx)("div",{className:c.a.form+" "+c.a.error,children:r}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{children:"Sign In"})})]})})}));e.default=Object(s.b)((function(t){return{isAuth:t.auth.isAuth,captchaUrl:t.auth.captchaUrl}}),{loginThunk:j.c})((function(t){return t.isAuth?Object(u.jsx)(l.Redirect,{to:"/Profile"}):Object(u.jsxs)("div",{className:c.a.content,children:[Object(u.jsx)("div",{className:c.a.title,children:"Login"}),Object(u.jsx)(b,{onSubmit:function(e){t.loginThunk(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:t.captchaUrl})]})}))}}]);
//# sourceMappingURL=7.602c3d1c.chunk.js.map