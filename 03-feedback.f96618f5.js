!function(){function e(e,t,o){var n,a=o||{},r=a.noTrailing,i=void 0!==r&&r,u=a.noLeading,c=void 0!==u&&u,l=a.debounceMode,d=void 0===l?void 0:l,f=!1,m=0;function v(){n&&clearTimeout(n)}function g(){for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];var u=this,l=Date.now()-m;function g(){m=Date.now(),t.apply(u,a)}function s(){n=void 0}f||(c||!d||n||g(),v(),void 0===d&&l>e?c?(m=Date.now(),i||(n=setTimeout(d?s:g,e))):g():!0!==i&&(n=setTimeout(d?s:g,void 0===d?e-l:e)))}return g.cancel=function(e){var t=(e||{}).upcomingOnly,o=void 0!==t&&t;v(),f=!o},g}var t={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector(".feedback-form textarea")};t.form.addEventListener("input",e(500,(function(e){localStorage.setItem(e.target.name,JSON.stringify(e.target.value))}))),t.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.clear()})),t.textarea.value=JSON.parse(localStorage.getItem("message"))||"",t.input.value=JSON.parse(localStorage.getItem("email"))||""}();
//# sourceMappingURL=03-feedback.f96618f5.js.map