//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'vueInfo',
  props: {
    info: {
      type: String,
      default: 'Tooltip',
      require: true
    },
    color: {
      type: String,
      default: 'black',

      validator(x) {
        return ['black', 'white', 'red'].indexOf(x) !== -1;
      }

    },
    position: {
      type: String,
      default: 'top',

      validator(x) {
        return ['left', 'right', 'top', 'bottom'].indexOf(x) !== -1;
      }

    },
    square: {
      type: Boolean,
      default: false
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: ['v-info', "v-info--" + _vm.color, "v-info--" + _vm.position, {
      'v-info--square': _vm.square
    }]
  }, [_vm._t("default"), _vm._v(" "), _c('div', {
    staticClass: "v-info--text"
  }, [_vm._v("\n        " + _vm._s(_vm.info) + "\n    ")])], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-1b1ef474_0", {
    source: ".v-info[data-v-1b1ef474]{position:relative;display:inline-block;line-height:1}.v-info .v-info--text[data-v-1b1ef474]{visibility:hidden;opacity:0;white-space:nowrap;border:1px solid;text-align:center;padding:5px;position:absolute;font-size:9px;letter-spacing:.8px;border-radius:6px}.v-info--square .v-info--text[data-v-1b1ef474]{border-radius:0}.v-info--black .v-info--text[data-v-1b1ef474]{background-color:#374151;color:#fff;border-color:#374151}.v-info--black.v-info--right .v-info--text[data-v-1b1ef474]:after{border-color:transparent #374151 transparent transparent}.v-info--black.v-info--left .v-info--text[data-v-1b1ef474]:after{border-color:transparent transparent transparent #374151}.v-info--black.v-info--top .v-info--text[data-v-1b1ef474]:after{border-color:#374151 transparent transparent transparent}.v-info--black.v-info--bottom .v-info--text[data-v-1b1ef474]:after{border-color:transparent transparent #374151 transparent}.v-info--white .v-info--text[data-v-1b1ef474]{background-color:#fff;color:#374151;border-color:#fff}.v-info--white.v-info--right .v-info--text[data-v-1b1ef474]:after{border-color:transparent #fff transparent transparent}.v-info--white.v-info--left .v-info--text[data-v-1b1ef474]:after{border-color:transparent transparent transparent #fff}.v-info--white.v-info--top .v-info--text[data-v-1b1ef474]:after{border-color:#fff transparent transparent transparent}.v-info--white.v-info--bottom .v-info--text[data-v-1b1ef474]:after{border-color:transparent transparent #fff transparent}.v-info--red .v-info--text[data-v-1b1ef474]{background-color:#dc2626;border-color:#dc2626;color:#fff}.v-info--red.v-info--right .v-info--text[data-v-1b1ef474]:after{border-color:transparent #dc2626 transparent transparent}.v-info--red.v-info--left .v-info--text[data-v-1b1ef474]:after{border-color:transparent transparent transparent #dc2626}.v-info--red.v-info--top .v-info--text[data-v-1b1ef474]:after{border-color:#dc2626 transparent transparent transparent}.v-info--red.v-info--bottom .v-info--text[data-v-1b1ef474]:after{border-color:transparent transparent #dc2626 transparent}.v-info--right .v-info--text[data-v-1b1ef474]{top:5px;left:100%}.v-info--right .v-info--text[data-v-1b1ef474]:after{content:' ';position:absolute;top:50%;right:100%;margin-top:-5px;border-width:5px;border-style:solid}.v-info--left .v-info--text[data-v-1b1ef474]{top:5px;right:100%}.v-info--left .v-info--text[data-v-1b1ef474]:after{content:' ';position:absolute;top:50%;left:100%;margin-top:-5px;border-width:5px;border-style:solid}.v-info--top .v-info--text[data-v-1b1ef474]{bottom:105%;left:50%;transform:translate(-50%,0)}.v-info--top .v-info--text[data-v-1b1ef474]:after{content:' ';position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid}.v-info--bottom .v-info--text[data-v-1b1ef474]{top:105%;left:50%;transform:translate(-50%,0)}.v-info--bottom .v-info--text[data-v-1b1ef474]:after{content:' ';position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid}.v-info--top .v-info--text[data-v-1b1ef474]:after{transition:all .1s ease-in-out;transform:translate3d(0,-6px,-1)}.v-info--bottom .v-info--text[data-v-1b1ef474]:after{transition:all .1s ease-in-out;transform:translate3d(0,6px,-1)}.v-info--right .v-info--text[data-v-1b1ef474]:after{transition:all .1s ease-in-out;transform:translate3d(6px,0,-1)}.v-info--left .v-info--text[data-v-1b1ef474]:after{transition:all .1s ease-in-out;transform:translate3d(-6px,0,-1)}.v-info:hover .v-info--text[data-v-1b1ef474]{visibility:visible;opacity:1}.v-info:hover .v-info--text[data-v-1b1ef474]:after{opacity:1;transform:scale3d(1,1,1)}.v-info:hover .v-info--text[data-v-1b1ef474]:after{transition:all .2s .3s ease-in-out}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-1b1ef474";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('VueInfo', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
