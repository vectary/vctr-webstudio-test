var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value), __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// node_modules/@jsep-plugin/assignment/dist/cjs/index.cjs.js
var require_index_cjs = __commonJS({
  "node_modules/@jsep-plugin/assignment/dist/cjs/index.cjs.js"(exports, module2) {
    "use strict";
    var plugin = {
      name: "assignment",
      assignmentOperators: /* @__PURE__ */ new Set([
        "=",
        "*=",
        "**=",
        "/=",
        "%=",
        "+=",
        "-=",
        "<<=",
        ">>=",
        ">>>=",
        "&=",
        "^=",
        "|="
      ]),
      updateOperators: [43, 45],
      assignmentPrecedence: 0.9,
      init(jsep2) {
        let updateNodeTypes = [jsep2.IDENTIFIER, jsep2.MEMBER_EXP];
        plugin.assignmentOperators.forEach((op) => jsep2.addBinaryOp(op, plugin.assignmentPrecedence, !0)), jsep2.hooks.add("gobble-token", function(env) {
          let code = this.code;
          plugin.updateOperators.some((c) => c === code && c === this.expr.charCodeAt(this.index + 1)) && (this.index += 2, env.node = {
            type: "UpdateExpression",
            operator: code === 43 ? "++" : "--",
            argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
            prefix: !0
          }, (!env.node.argument || !updateNodeTypes.includes(env.node.argument.type)) && this.throwError(`Unexpected ${env.node.operator}`));
        }), jsep2.hooks.add("after-token", function(env) {
          if (env.node) {
            let code = this.code;
            plugin.updateOperators.some((c) => c === code && c === this.expr.charCodeAt(this.index + 1)) && (updateNodeTypes.includes(env.node.type) || this.throwError(`Unexpected ${env.node.operator}`), this.index += 2, env.node = {
              type: "UpdateExpression",
              operator: code === 43 ? "++" : "--",
              argument: env.node,
              prefix: !1
            });
          }
        }), jsep2.hooks.add("after-expression", function(env) {
          env.node && updateBinariesToAssignments(env.node);
        });
        function updateBinariesToAssignments(node) {
          plugin.assignmentOperators.has(node.operator) ? (node.type = "AssignmentExpression", updateBinariesToAssignments(node.left), updateBinariesToAssignments(node.right)) : node.operator || Object.values(node).forEach((val) => {
            val && typeof val == "object" && updateBinariesToAssignments(val);
          });
        }
      }
    };
    module2.exports = plugin;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root
});

// node_modules/@webstudio-is/fonts/lib/index.js
var import_zod = require("zod"), SYSTEM_FONTS = /* @__PURE__ */ new Map([
  ["Arial", ["Roboto", "sans-serif"]],
  ["Times New Roman", ["sans"]],
  ["Courier New", ["monospace"]],
  ["system-ui", []]
]), DEFAULT_FONT_FALLBACK = "sans-serif", FONT_FORMATS = /* @__PURE__ */ new Map([
  ["woff", "woff"],
  ["woff2", "woff2"],
  ["ttf", "truetype"],
  ["otf", "opentype"]
]), FONT_MIME_TYPES = Array.from(FONT_FORMATS.keys()).map((format) => `.${format}`).join(", "), FONT_STYLES = ["normal", "italic", "oblique"];
var FontFormat = import_zod.z.union([
  import_zod.z.literal("ttf"),
  import_zod.z.literal("woff"),
  import_zod.z.literal("woff2"),
  import_zod.z.literal("otf")
]), AxisName = import_zod.z.enum([
  "wght",
  "wdth",
  "slnt",
  "opsz",
  "ital",
  "GRAD",
  "XTRA",
  "XOPQ",
  "YOPQ",
  "YTLC",
  "YTUC",
  "YTAS",
  "YTDE",
  "YTFI"
]), VariationAxes = import_zod.z.record(
  AxisName,
  import_zod.z.object({
    name: import_zod.z.string(),
    min: import_zod.z.number(),
    default: import_zod.z.number(),
    max: import_zod.z.number()
  })
), FontMetaStatic = import_zod.z.object({
  family: import_zod.z.string(),
  style: import_zod.z.enum(FONT_STYLES),
  weight: import_zod.z.number()
}), FontMetaVariable = import_zod.z.object({
  family: import_zod.z.string(),
  variationAxes: VariationAxes
}), FontMeta = import_zod.z.union([FontMetaStatic, FontMetaVariable]);

// node_modules/@webstudio-is/react-sdk/lib/index.js
var import_react2 = require("react"), import_react3 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime"), import_react4 = require("react"), import_jsx_runtime3 = require("react/jsx-runtime");

// node_modules/@webstudio-is/error-utils/lib/index.js
var captureError = (error, value) => {
  throw error;
};

// node_modules/@webstudio-is/css-engine/lib/index.js
var import_hyphenate_style_name = __toESM(require("hyphenate-style-name"), 1), import_zod2 = require("zod");
var fallbackTransform = (styleValue) => {
  if (styleValue.type === "fontFamily") {
    let firstFontFamily = styleValue.value[0], fallbacks = SYSTEM_FONTS.get(firstFontFamily ?? "Arial"), fontFamily = [...styleValue.value];
    return Array.isArray(fallbacks) ? fontFamily.push(...fallbacks) : fontFamily.push(DEFAULT_FONT_FALLBACK), {
      type: "fontFamily",
      value: fontFamily
    };
  }
}, toValue = (styleValue, transformValue) => {
  if (styleValue === void 0)
    return "";
  let value = (transformValue == null ? void 0 : transformValue(styleValue)) ?? fallbackTransform(styleValue) ?? styleValue;
  if (value.type === "unit")
    return value.value + (value.unit === "number" ? "" : value.unit);
  if (value.type === "fontFamily")
    return value.value.join(", ");
  if (value.type === "var") {
    let fallbacks = [];
    for (let fallback of value.fallbacks)
      fallbacks.push(toValue(fallback, transformValue));
    let fallbacksString = fallbacks.length > 0 ? `, ${fallbacks.join(", ")}` : "";
    return `var(--${value.value}${fallbacksString})`;
  }
  if (value.type === "keyword" || value.type === "invalid" || value.type === "unset")
    return value.value;
  if (value.type === "rgb")
    return `rgba(${value.r}, ${value.g}, ${value.b}, ${value.alpha})`;
  if (value.type === "image")
    return value.hidden || value.value.type !== "url" ? "none" : `url(${value.value.url})`;
  if (value.type === "unparsed")
    return value.hidden ? "none" : value.value;
  if (value.type === "layers") {
    let valueString = value.value.filter(
      (layer) => !("hidden" in layer) || "hidden" in layer && layer.hidden === !1
    ).map((layer) => toValue(layer, transformValue)).join(", ");
    return valueString === "" ? "none" : valueString;
  }
  return value.type === "tuple" ? value.value.map((value2) => toValue(value2, transformValue)).join(" ") : captureError(new Error("Unknown value type"), value);
}, toProperty = (property) => property === "backgroundClip" ? "-webkit-background-clip" : (0, import_hyphenate_style_name.default)(property), _styleMap, _isDirty, _string, _indent, _transformValue, _a, StylePropertyMap = (_a = class {
  constructor(transformValue) {
    __privateAdd(this, _styleMap, /* @__PURE__ */ new Map());
    __privateAdd(this, _isDirty, !1);
    __privateAdd(this, _string, "");
    __privateAdd(this, _indent, 0);
    __privateAdd(this, _transformValue, void 0);
    __publicField(this, "onChange");
    __privateSet(this, _transformValue, transformValue);
  }
  setTransformer(transformValue) {
    __privateSet(this, _transformValue, transformValue);
  }
  set(property, value) {
    var _a7;
    __privateGet(this, _styleMap).set(property, value), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  has(property) {
    return __privateGet(this, _styleMap).has(property);
  }
  get size() {
    return __privateGet(this, _styleMap).size;
  }
  keys() {
    return __privateGet(this, _styleMap).keys();
  }
  delete(property) {
    var _a7;
    __privateGet(this, _styleMap).delete(property), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  clear() {
    var _a7;
    __privateGet(this, _styleMap).clear(), __privateSet(this, _isDirty, !0), (_a7 = this.onChange) == null || _a7.call(this);
  }
  toString({ indent = 0 } = {}) {
    if (__privateGet(this, _isDirty) === !1 && indent === __privateGet(this, _indent))
      return __privateGet(this, _string);
    __privateSet(this, _indent, indent);
    let block = [], spaces = " ".repeat(indent);
    for (let [property, value] of __privateGet(this, _styleMap))
      value !== void 0 && block.push(
        `${spaces}${toProperty(property)}: ${toValue(
          value,
          __privateGet(this, _transformValue)
        )}`
      );
    return __privateSet(this, _string, block.join(`;
`)), __privateSet(this, _isDirty, !1), __privateGet(this, _string);
  }
}, _styleMap = new WeakMap(), _isDirty = new WeakMap(), _string = new WeakMap(), _indent = new WeakMap(), _transformValue = new WeakMap(), _a), _onChange, _a2, StyleRule = (_a2 = class {
  constructor(selectorText, style, transformValue) {
    __publicField(this, "styleMap");
    __publicField(this, "selectorText");
    __publicField(this, "onChange");
    __privateAdd(this, _onChange, () => {
      var _a7;
      (_a7 = this.onChange) == null || _a7.call(this);
    });
    this.styleMap = new StylePropertyMap(transformValue), this.selectorText = selectorText;
    let property;
    for (property in style)
      this.styleMap.set(property, style[property]);
    this.styleMap.onChange = __privateGet(this, _onChange);
  }
  get cssText() {
    return this.toString();
  }
  toString(options = { indent: 0 }) {
    let spaces = " ".repeat(options.indent);
    return `${spaces}${this.selectorText} {
${this.styleMap.toString({
      indent: options.indent + 2
    })}
${spaces}}`;
  }
}, _onChange = new WeakMap(), _a2), _mediaType, _a3, MediaRule = (_a3 = class {
  constructor(options = {}) {
    __publicField(this, "options");
    __publicField(this, "rules", []);
    __privateAdd(this, _mediaType, void 0);
    this.options = options, __privateSet(this, _mediaType, options.mediaType ?? "all");
  }
  insertRule(rule) {
    return this.rules.push(rule), rule;
  }
  get cssText() {
    return this.toString();
  }
  toString() {
    if (this.rules.length === 0)
      return "";
    let rules = [];
    for (let rule of this.rules)
      rules.push(rule.toString({ indent: 2 }));
    let conditionText = "", { minWidth, maxWidth } = this.options;
    return minWidth !== void 0 && (conditionText = ` and (min-width: ${minWidth}px)`), maxWidth !== void 0 && (conditionText += ` and (max-width: ${maxWidth}px)`), `@media ${__privateGet(this, _mediaType)}${conditionText} {
${rules.join(
      `
`
    )}
}`;
  }
}, _mediaType = new WeakMap(), _a3), PlaintextRule = class {
  cssText;
  styleMap = new StylePropertyMap();
  constructor(cssText) {
    this.cssText = cssText;
  }
  toString() {
    return this.cssText;
  }
}, FontFaceRule = class {
  options;
  constructor(options) {
    this.options = options;
  }
  get cssText() {
    return this.toString();
  }
  toString() {
    let decls = [], { fontFamily, fontStyle, fontWeight, fontDisplay, src } = this.options;
    return decls.push(
      `font-family: ${/\s/.test(fontFamily) ? `"${fontFamily}"` : fontFamily}`
    ), decls.push(`font-style: ${fontStyle}`), decls.push(`font-weight: ${fontWeight}`), decls.push(`font-display: ${fontDisplay}`), decls.push(`src: ${src}`), `@font-face {
  ${decls.join("; ")};
}`;
  }
}, compareMedia = (optionA, optionB) => optionA.minWidth === void 0 && optionA.maxWidth === void 0 ? -1 : optionB.minWidth === void 0 && optionB.maxWidth === void 0 ? 1 : optionA.minWidth !== void 0 && optionB.minWidth !== void 0 ? optionA.minWidth - optionB.minWidth : optionA.maxWidth !== void 0 && optionB.maxWidth !== void 0 ? optionB.maxWidth - optionA.maxWidth : "minWidth" in optionA ? 1 : -1, _element, _name, _a4, StyleElement = (_a4 = class {
  constructor(name = "") {
    __privateAdd(this, _element, void 0);
    __privateAdd(this, _name, void 0);
    __privateSet(this, _name, name);
  }
  get isMounted() {
    var _a7;
    return ((_a7 = __privateGet(this, _element)) == null ? void 0 : _a7.parentElement) != null;
  }
  mount() {
    this.isMounted === !1 && (__privateSet(this, _element, document.createElement("style")), __privateGet(this, _element).setAttribute("data-webstudio", __privateGet(this, _name)), document.head.appendChild(__privateGet(this, _element)));
  }
  unmount() {
    var _a7, _b;
    this.isMounted && ((_b = (_a7 = __privateGet(this, _element)) == null ? void 0 : _a7.parentElement) == null || _b.removeChild(__privateGet(this, _element)), __privateSet(this, _element, void 0));
  }
  render(cssText) {
    __privateGet(this, _element) && (__privateGet(this, _element).textContent = cssText);
  }
  setAttribute(name, value) {
    __privateGet(this, _element) && __privateGet(this, _element).setAttribute(name, value);
  }
  getAttribute(name) {
    if (__privateGet(this, _element))
      return __privateGet(this, _element).getAttribute(name);
  }
}, _element = new WeakMap(), _name = new WeakMap(), _a4), _cssText, _element2, _a5, StyleSheet = (_a5 = class {
  constructor(element) {
    __privateAdd(this, _cssText, "");
    __privateAdd(this, _element2, void 0);
    __privateSet(this, _element2, element);
  }
  replaceSync(cssText) {
    cssText !== __privateGet(this, _cssText) && (__privateSet(this, _cssText, cssText), __privateGet(this, _element2).render(cssText));
  }
}, _cssText = new WeakMap(), _element2 = new WeakMap(), _a5), defaultMediaRuleId = "__default-media-rule__", _element3, _mediaRules, _plainRules, _fontFaceRules, _sheet, _isDirty2, _cssText2, _onChangeRule, _a6, CssEngine = (_a6 = class {
  constructor({ name }) {
    __privateAdd(this, _element3, void 0);
    __privateAdd(this, _mediaRules, /* @__PURE__ */ new Map());
    __privateAdd(this, _plainRules, /* @__PURE__ */ new Map());
    __privateAdd(this, _fontFaceRules, []);
    __privateAdd(this, _sheet, void 0);
    __privateAdd(this, _isDirty2, !1);
    __privateAdd(this, _cssText2, "");
    __privateAdd(this, _onChangeRule, () => {
      __privateSet(this, _isDirty2, !0);
    });
    __privateSet(this, _element3, new StyleElement(name)), __privateSet(this, _sheet, new StyleSheet(__privateGet(this, _element3)));
  }
  addMediaRule(id, options) {
    let mediaRule = __privateGet(this, _mediaRules).get(id);
    return mediaRule === void 0 ? (mediaRule = new MediaRule(options), __privateGet(this, _mediaRules).set(id, mediaRule), __privateSet(this, _isDirty2, !0), mediaRule) : (options && (mediaRule.options = options, __privateSet(this, _isDirty2, !0)), mediaRule);
  }
  addStyleRule(selectorText, rule, transformValue) {
    let mediaRule = this.addMediaRule(rule.breakpoint || defaultMediaRuleId);
    __privateSet(this, _isDirty2, !0);
    let styleRule = new StyleRule(selectorText, rule.style, transformValue);
    if (styleRule.onChange = __privateGet(this, _onChangeRule), mediaRule === void 0)
      throw new Error("No media rule found");
    return mediaRule.insertRule(styleRule), styleRule;
  }
  addPlaintextRule(cssText) {
    let rule = __privateGet(this, _plainRules).get(cssText);
    return rule !== void 0 ? rule : (__privateSet(this, _isDirty2, !0), __privateGet(this, _plainRules).set(cssText, new PlaintextRule(cssText)));
  }
  addFontFaceRule(options) {
    return __privateSet(this, _isDirty2, !0), __privateGet(this, _fontFaceRules).push(new FontFaceRule(options));
  }
  clear() {
    __privateGet(this, _mediaRules).clear(), __privateGet(this, _plainRules).clear(), __privateSet(this, _fontFaceRules, []), __privateSet(this, _isDirty2, !0);
  }
  render() {
    __privateGet(this, _element3).mount(), __privateGet(this, _sheet).replaceSync(this.cssText);
  }
  unmount() {
    __privateGet(this, _element3).unmount();
  }
  setAttribute(name, value) {
    __privateGet(this, _element3).setAttribute(name, value);
  }
  getAttribute(name) {
    return __privateGet(this, _element3).getAttribute(name);
  }
  get cssText() {
    if (__privateGet(this, _isDirty2) === !1)
      return __privateGet(this, _cssText2);
    __privateSet(this, _isDirty2, !1);
    let css = [];
    css.push(...__privateGet(this, _fontFaceRules).map((rule) => rule.cssText));
    for (let plaintextRule of __privateGet(this, _plainRules).values())
      css.push(plaintextRule.cssText);
    let sortedMediaRules = Array.from(__privateGet(this, _mediaRules).values()).sort(
      (ruleA, ruleB) => compareMedia(ruleA.options, ruleB.options)
    );
    for (let mediaRule of sortedMediaRules) {
      let { cssText } = mediaRule;
      cssText !== "" && css.push(cssText);
    }
    return __privateSet(this, _cssText2, css.join(`
`)), __privateGet(this, _cssText2);
  }
}, _element3 = new WeakMap(), _mediaRules = new WeakMap(), _plainRules = new WeakMap(), _fontFaceRules = new WeakMap(), _sheet = new WeakMap(), _isDirty2 = new WeakMap(), _cssText2 = new WeakMap(), _onChangeRule = new WeakMap(), _a6);
var Unit = import_zod2.z.string(), UnitValue = import_zod2.z.object({
  type: import_zod2.z.literal("unit"),
  unit: Unit,
  value: import_zod2.z.number()
}), KeywordValue = import_zod2.z.object({
  type: import_zod2.z.literal("keyword"),
  // @todo use exact type
  value: import_zod2.z.string()
}), UnparsedValue = import_zod2.z.object({
  type: import_zod2.z.literal("unparsed"),
  value: import_zod2.z.string(),
  // For the builder we want to be able to hide background-image
  hidden: import_zod2.z.boolean().optional()
}), FontFamilyValue = import_zod2.z.object({
  type: import_zod2.z.literal("fontFamily"),
  value: import_zod2.z.array(import_zod2.z.string())
}), RgbValue = import_zod2.z.object({
  type: import_zod2.z.literal("rgb"),
  r: import_zod2.z.number(),
  g: import_zod2.z.number(),
  b: import_zod2.z.number(),
  alpha: import_zod2.z.number()
}), ImageValue = import_zod2.z.object({
  type: import_zod2.z.literal("image"),
  value: import_zod2.z.union(
    [
      import_zod2.z.object({ type: import_zod2.z.literal("asset"), value: import_zod2.z.string() }),
      // url is not stored in db and only used by css-engine transformValue
      // to prepare image value for rendering
      import_zod2.z.object({ type: import_zod2.z.literal("url"), url: import_zod2.z.string() })
    ]
  ),
  // For the builder we want to be able to hide images
  hidden: import_zod2.z.boolean().optional()
}), InvalidValue = import_zod2.z.object({
  type: import_zod2.z.literal("invalid"),
  value: import_zod2.z.string()
}), UnsetValue = import_zod2.z.object({
  type: import_zod2.z.literal("unset"),
  value: import_zod2.z.literal("")
}), TupleValueItem = import_zod2.z.union(
  [
    UnitValue,
    KeywordValue,
    UnparsedValue,
    RgbValue
  ]
), TupleValue = import_zod2.z.object({
  type: import_zod2.z.literal("tuple"),
  value: import_zod2.z.array(TupleValueItem),
  hidden: import_zod2.z.boolean().optional()
}), LayerValueItem = import_zod2.z.union(
  [
    UnitValue,
    KeywordValue,
    UnparsedValue,
    ImageValue,
    TupleValue,
    InvalidValue
  ]
), LayersValue = import_zod2.z.object({
  type: import_zod2.z.literal("layers"),
  value: import_zod2.z.array(LayerValueItem)
}), ValidStaticStyleValue = import_zod2.z.union(
  [
    ImageValue,
    LayersValue,
    UnitValue,
    KeywordValue,
    FontFamilyValue,
    RgbValue,
    UnparsedValue,
    TupleValue
  ]
);
var VarValue = import_zod2.z.object({
  type: import_zod2.z.literal("var"),
  value: import_zod2.z.string(),
  fallbacks: import_zod2.z.array(ValidStaticStyleValue)
}), StyleValue = import_zod2.z.union(
  [
    ValidStaticStyleValue,
    InvalidValue,
    UnsetValue,
    VarValue
  ]
), Style = import_zod2.z.record(import_zod2.z.string(), StyleValue);

// node_modules/@webstudio-is/react-sdk/lib/index.js
var import_react5 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime"), import_zod3 = require("zod"), import_zod4 = require("zod"), import_zod5 = require("zod");
var import_jsep = __toESM(require("jsep"), 1), import_assignment = __toESM(require_index_cjs(), 1), import_object = __toESM(require("@jsep-plugin/object"), 1);
var ReactSdkContext = (0, import_react3.createContext)({
  assetBaseUrl: "/",
  imageBaseUrl: "/",
  imageLoader: ({ src }) => src,
  pagesPaths: /* @__PURE__ */ new Set()
});
var idAttribute = "data-ws-id";
var Root = ({
  Outlet: Outlet4 = import_react5.Outlet
}) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", {
  lang: "en",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { charSet: "utf-8" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Meta, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Links, {})
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Outlet4, {})
  ]
}), common = {
  label: import_zod3.z.string().optional(),
  description: import_zod3.z.string().optional(),
  required: import_zod3.z.boolean()
}, Number2 = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("number"),
  type: import_zod3.z.literal("number"),
  defaultValue: import_zod3.z.number().optional()
}), Range = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("range"),
  type: import_zod3.z.literal("number"),
  defaultValue: import_zod3.z.number().optional()
}), Text = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("text"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  /**
   * The number of rows in <textarea>. If set to 0 an <input> will be used instead.
   * In line with Storybook team's plan: https://github.com/storybookjs/storybook/issues/21100
   */
  rows: import_zod3.z.number().optional()
}), Code = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("code"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  /**
   * The number of rows in <textarea>. If set to 0 an <input> will be used instead.
   * In line with Storybook team's plan: https://github.com/storybookjs/storybook/issues/21100
   */
  rows: import_zod3.z.number().optional()
}), Color = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("color"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional()
}), Boolean = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("boolean"),
  type: import_zod3.z.literal("boolean"),
  defaultValue: import_zod3.z.boolean().optional()
}), Radio = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("radio"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), InlineRadio = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("inline-radio"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), Select = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("select"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), Check = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("check"),
  type: import_zod3.z.literal("string[]"),
  defaultValue: import_zod3.z.array(import_zod3.z.string()).optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), InlineCheck = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("inline-check"),
  type: import_zod3.z.literal("string[]"),
  defaultValue: import_zod3.z.array(import_zod3.z.string()).optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), MultiSelect = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("multi-select"),
  type: import_zod3.z.literal("string[]"),
  defaultValue: import_zod3.z.array(import_zod3.z.string()).optional(),
  options: import_zod3.z.array(import_zod3.z.string())
}), File = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("file"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional(),
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept */
  accept: import_zod3.z.string().optional()
}), Url = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("url"),
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional()
}), ObjectType = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("object"),
  // @todo not sure what type should be here
  // (we don't support Object yet, added for completeness)
  type: import_zod3.z.literal("Record<string, string>"),
  defaultValue: import_zod3.z.record(import_zod3.z.string()).optional()
}), Date = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("date"),
  // @todo not sure what type should be here
  // (we don't support Date yet, added for completeness)
  type: import_zod3.z.literal("string"),
  defaultValue: import_zod3.z.string().optional()
}), Action = import_zod3.z.object({
  ...common,
  control: import_zod3.z.literal("action"),
  type: import_zod3.z.literal("action"),
  defaultValue: import_zod3.z.undefined().optional()
}), PropMeta = import_zod3.z.union(
  [
    Number2,
    Range,
    Text,
    Code,
    Color,
    Boolean,
    Radio,
    InlineRadio,
    Select,
    MultiSelect,
    Check,
    InlineCheck,
    File,
    Url,
    ObjectType,
    Date,
    Action
  ]
);
import_jsep.default.plugins.register(import_assignment.default);
import_jsep.default.plugins.register(import_object.default);
var EmbedTemplateText = import_zod5.z.object({
  type: import_zod5.z.literal("text"),
  value: import_zod5.z.string()
}), EmbedTemplateVariable = import_zod5.z.object({
  initialValue: import_zod5.z.union(
    [
      import_zod5.z.string(),
      import_zod5.z.number(),
      import_zod5.z.boolean(),
      import_zod5.z.array(import_zod5.z.string())
    ]
  )
}), EmbedTemplateProp = import_zod5.z.union(
  [
    import_zod5.z.object({
      type: import_zod5.z.literal("number"),
      name: import_zod5.z.string(),
      value: import_zod5.z.number()
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("string"),
      name: import_zod5.z.string(),
      value: import_zod5.z.string()
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("boolean"),
      name: import_zod5.z.string(),
      value: import_zod5.z.boolean()
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("string[]"),
      name: import_zod5.z.string(),
      value: import_zod5.z.array(import_zod5.z.string())
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("expression"),
      name: import_zod5.z.string(),
      code: import_zod5.z.string()
    }),
    import_zod5.z.object({
      type: import_zod5.z.literal("action"),
      name: import_zod5.z.string(),
      value: import_zod5.z.array(
        import_zod5.z.object({
          type: import_zod5.z.literal("execute"),
          args: import_zod5.z.optional(import_zod5.z.array(import_zod5.z.string())),
          code: import_zod5.z.string()
        })
      )
    })
  ]
), EmbedTemplateStyleDeclRaw = import_zod5.z.object({
  // State selector, e.g. :hover
  state: import_zod5.z.optional(import_zod5.z.string()),
  property: import_zod5.z.string(),
  value: StyleValue
}), EmbedTemplateStyleDecl = EmbedTemplateStyleDeclRaw, EmbedTemplateInstance = import_zod5.z.lazy(
  () => import_zod5.z.object({
    type: import_zod5.z.literal("instance"),
    component: import_zod5.z.string(),
    label: import_zod5.z.optional(import_zod5.z.string()),
    variables: import_zod5.z.optional(import_zod5.z.record(import_zod5.z.string(), EmbedTemplateVariable)),
    props: import_zod5.z.optional(import_zod5.z.array(EmbedTemplateProp)),
    tokens: import_zod5.z.optional(import_zod5.z.array(import_zod5.z.string())),
    styles: import_zod5.z.optional(import_zod5.z.array(EmbedTemplateStyleDecl)),
    children: WsEmbedTemplate
  })
), WsEmbedTemplate = import_zod5.z.lazy(
  () => import_zod5.z.array(import_zod5.z.union([EmbedTemplateInstance, EmbedTemplateText]))
);
var WsComponentPropsMeta = import_zod4.z.object({
  props: import_zod4.z.record(PropMeta),
  // Props that will be always visible in properties panel.
  initialProps: import_zod4.z.array(import_zod4.z.string()).optional()
}), componentCategories = [
  "general",
  "text",
  "media",
  "forms",
  "radix",
  "hidden"
], stateCategories = ["states", "component-states"], ComponentState = import_zod4.z.object({
  category: import_zod4.z.enum(stateCategories).optional(),
  selector: import_zod4.z.string(),
  label: import_zod4.z.string()
}), ComponentToken = import_zod4.z.object({
  variant: import_zod4.z.optional(import_zod4.z.string()),
  styles: import_zod4.z.array(EmbedTemplateStyleDecl)
});
var WsComponentMeta = import_zod4.z.object({
  category: import_zod4.z.enum(componentCategories).optional(),
  // container - can accept other components with dnd or be edited as text
  // control - usually form controls like inputs, without children
  // embed - images, videos or other embeddable components, without children
  // rich-text-child - formatted text fragment, not listed in components list
  type: import_zod4.z.enum(["container", "control", "embed", "rich-text-child"]),
  requiredAncestors: import_zod4.z.optional(import_zod4.z.array(import_zod4.z.string())),
  invalidAncestors: import_zod4.z.optional(import_zod4.z.array(import_zod4.z.string())),
  // when this field is specified component receives
  // prop with index of same components withiin specified ancestor
  // important to automatically enumerate collections without
  // naming every item manually
  indexWithinAncestor: import_zod4.z.optional(import_zod4.z.string()),
  stylable: import_zod4.z.optional(import_zod4.z.boolean()),
  // specifies whether the instance can be deleted,
  // copied or dragged out of its parent instance
  // true by default
  detachable: import_zod4.z.optional(import_zod4.z.boolean()),
  label: import_zod4.z.optional(import_zod4.z.string()),
  description: import_zod4.z.string().optional(),
  icon: import_zod4.z.string(),
  presetStyle: import_zod4.z.optional(
    import_zod4.z.record(import_zod4.z.string(), import_zod4.z.array(EmbedTemplateStyleDecl))
  ),
  presetTokens: import_zod4.z.optional(import_zod4.z.record(import_zod4.z.string(), ComponentToken)),
  states: import_zod4.z.optional(import_zod4.z.array(ComponentState)),
  template: import_zod4.z.optional(WsEmbedTemplate),
  order: import_zod4.z.number().optional()
});
var getInstanceIdFromComponentProps = (props) => props[idAttribute];

// app/routes/[ai-test]._index.tsx
var ai_test_index_exports = {};
__export(ai_test_index_exports, {
  action: () => action,
  default: () => ai_test_index_default,
  headers: () => headers,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_server_runtime = require("@remix-run/server-runtime");

// node_modules/@webstudio-is/form-handlers/lib/index.js
var formHiddenFieldPrefix = "ws--form", formIdFieldName = `${formHiddenFieldPrefix}-id`, getFormEntries = (formData) => [...formData.entries()].flatMap(
  ([key, value]) => key.startsWith(formHiddenFieldPrefix) === !1 && typeof value == "string" ? [[key, value]] : []
), getFormId = (formData) => {
  for (let [key, value] of formData.entries())
    if (key === formIdFieldName && typeof value == "string")
      return value;
}, getDomain = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return;
  }
}, formToEmail = ({
  formData,
  pageUrl,
  toEmail,
  fromEmail
}) => {
  let html = `<p>There has been a new submission of your form at <a href="${pageUrl}">${pageUrl}</a>:</p>`, txt = `There has been a new submission of your form at ${pageUrl}:

`;
  html += "<table><tbody>";
  for (let [key, value] of getFormEntries(formData))
    html += `<tr><td><strong>${key}:</strong></td><td>${value}</td></tr>`, txt += `${key}: ${value}
`;
  return html += "</tbody></table>", {
    from: fromEmail,
    to: toEmail,
    subject: `New form submission from ${getDomain(pageUrl) ?? pageUrl}`,
    txt,
    html
  };
}, getResponseBody = async (response) => {
  let text = await response.text();
  try {
    let json4 = JSON.parse(text);
    return typeof json4 == "object" && json4 !== null ? { json: json4, text } : { text };
  } catch {
    return { text: text === "" ? response.statusText : text };
  }
}, getErrors = (json4) => {
  if (json4 !== void 0) {
    if (typeof json4.error == "string")
      return [json4.error];
    if (typeof json4.message == "string")
      return [json4.message];
    if (Array.isArray(json4.errors) && json4.errors.every((error) => typeof error == "string"))
      return json4.errors;
  }
};
var getAuth = (hookUrl) => {
  let url = new URL(hookUrl), { username, password } = url;
  url.username = "", url.password = "";
  let urlWithoutAuth = url.toString();
  return {
    username,
    password,
    urlWithoutAuth
  };
}, n8nHandler = async ({
  formInfo,
  hookUrl
}) => {
  let headers4 = { "Content-Type": "application/json" }, { username, password, urlWithoutAuth } = getAuth(hookUrl);
  username !== "" && password !== "" && (headers4.Authorization = `Basic ${btoa([username, password].join(":"))}`);
  let formId = getFormId(formInfo.formData);
  if (formId === void 0)
    return { success: !1, errors: ["No form id in FormData"] };
  let payload = {
    email: formToEmail(formInfo),
    // globally unique form id (can be used for unsubscribing)
    formId: [formInfo.projectId, formId].join("--"),
    action: formInfo.action,
    method: formInfo.method,
    formData: Object.fromEntries(getFormEntries(formInfo.formData))
  }, response;
  try {
    response = await fetch(urlWithoutAuth, {
      method: "POST",
      headers: headers4,
      body: JSON.stringify(payload)
    });
  } catch (error) {
    return { success: !1, errors: [error.message] };
  }
  let { text, json: json4 } = await getResponseBody(response);
  return response.status >= 200 && response.status < 300 && // It's difficult to control status code at n8n side.
  // Data is easier to control, so we use data to determine success.
  (json4 == null ? void 0 : json4.success) === !0 ? { success: !0 } : { success: !1, errors: getErrors(json4) ?? [text] };
};

// app/routes/[ai-test]._index.tsx
var import_react43 = require("@remix-run/react");

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_react7 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime"), import_react8 = require("react"), import_jsx_runtime7 = require("react/jsx-runtime"), import_react9 = require("react"), import_utils = require("@react-aria/utils");
var import_jsx_runtime8 = require("react/jsx-runtime"), import_react10 = require("react"), import_jsx_runtime9 = require("react/jsx-runtime"), import_react11 = require("react"), import_react12 = require("react"), import_jsx_runtime10 = require("react/jsx-runtime"), import_react13 = require("react"), import_jsx_runtime11 = require("react/jsx-runtime"), import_react14 = require("react"), import_jsx_runtime12 = require("react/jsx-runtime"), import_react15 = require("react"), import_jsx_runtime13 = require("react/jsx-runtime"), import_react16 = require("react"), import_jsx_runtime14 = require("react/jsx-runtime"), import_react17 = require("react"), import_jsx_runtime15 = require("react/jsx-runtime"), import_react18 = require("react"), import_jsx_runtime16 = require("react/jsx-runtime"), import_react19 = require("react"), import_jsx_runtime17 = require("react/jsx-runtime"), import_react20 = require("react"), import_jsx_runtime18 = require("react/jsx-runtime"), import_react21 = require("react"), import_jsx_runtime19 = require("react/jsx-runtime"), import_react22 = require("react"), import_jsx_runtime20 = require("react/jsx-runtime"), import_react23 = require("react"), import_jsx_runtime21 = require("react/jsx-runtime"), import_react24 = require("react"), import_jsx_runtime22 = require("react/jsx-runtime"), import_react25 = require("react");

// node_modules/@webstudio-is/image/lib/index.js
var import_react6 = require("react"), import_jsx_runtime5 = require("react/jsx-runtime"), import_warn_once = __toESM(require("warn-once"), 1), imageSizes = [16, 32, 48, 64, 96, 128, 256, 384], deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840], allSizes = [...imageSizes, ...deviceSizes], getWidths = (width, sizes) => {
  if (sizes) {
    let viewportWidthRe = /(^|\s)(1?\d?\d)vw/g, percentSizes = [];
    for (let match; match = viewportWidthRe.exec(sizes); match)
      percentSizes.push(Number.parseInt(match[2], 10));
    if (percentSizes.length) {
      let smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(
          (size) => size >= deviceSizes[0] * smallestRatio
        ),
        kind: "w"
      };
    }
    return { widths: allSizes, kind: "w" };
  }
  if (width == null)
    return { widths: deviceSizes, kind: "w" };
  let MAX_DEVICE_PIXEL_RATIO = 2, index = allSizes.findIndex(
    (size) => size >= MAX_DEVICE_PIXEL_RATIO * width
  );
  return index = index < 0 ? allSizes.length : index, {
    widths: allSizes.slice(0, index + 1),
    kind: "w"
  };
}, generateImgAttrs = ({
  src,
  width,
  quality,
  sizes,
  loader: loader6
}) => {
  let { widths, kind } = getWidths(width, sizes);
  return {
    sizes: !sizes && kind === "w" ? "100vw" : sizes,
    srcSet: widths.map(
      (w, i) => `${loader6({ src, quality, width: w })} ${kind === "w" ? w : i + 1}${kind}`
    ).join(", "),
    // Must be last, to prevent Safari to load images twice
    src: loader6({
      src,
      quality,
      width: widths[widths.length - 1]
    })
  };
}, getInt = (value) => {
  if (typeof value == "number")
    return Math.round(value);
  if (typeof value == "string") {
    let vNum = Number.parseFloat(value);
    if (!Number.isNaN(vNum))
      return Math.round(vNum);
  }
}, DEFAULT_SIZES = "(min-width: 1280px) 50vw, 100vw", DEFAULT_QUALITY = 80, getImageAttributes = (props) => {
  let width = getInt(props.width), quality = Math.max(
    Math.min(getInt(props.quality) ?? DEFAULT_QUALITY, 100),
    0
  );
  if (props.src != null && props.src !== "") {
    if (props.srcSet == null && props.optimize) {
      let sizes = props.sizes ?? (props.width == null ? DEFAULT_SIZES : void 0);
      return generateImgAttrs({
        src: props.src,
        width,
        quality,
        sizes,
        loader: props.loader
      });
    }
    let resAttrs = { src: props.src };
    return props.srcSet != null && (resAttrs.srcSet = props.srcSet), props.sizes != null && (resAttrs.sizes = props.sizes), resAttrs;
  }
  return null;
}, Image = (0, import_react6.forwardRef)(
  ({
    quality,
    loader: loader6,
    optimize = !0,
    loading = "lazy",
    decoding = "async",
    ...imageProps
  }, ref) => {
    let imageAttributes = getImageAttributes({
      src: imageProps.src,
      srcSet: imageProps.srcSet,
      sizes: imageProps.sizes,
      width: imageProps.width,
      quality,
      loader: loader6,
      optimize
    }) ?? { src: imagePlaceholderSvg };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "img",
      {
        ...imageProps,
        ...imageAttributes,
        decoding,
        loading,
        ref
      }
    );
  }
);
Image.displayName = "Image";
var imagePlaceholderSvg = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;

// node_modules/@webstudio-is/sdk-components-react/lib/components.js
var import_jsx_runtime23 = require("react/jsx-runtime"), import_react26 = require("react"), import_jsx_runtime24 = require("react/jsx-runtime"), import_react27 = require("react"), import_react28 = require("react"), import_jsx_runtime25 = require("react/jsx-runtime"), import_react29 = require("react"), import_react30 = require("react"), import_jsx_runtime26 = require("react/jsx-runtime"), import_react31 = require("react"), import_jsx_runtime27 = require("react/jsx-runtime"), import_react32 = require("react"), import_jsx_runtime28 = require("react/jsx-runtime"), import_react33 = require("react"), import_jsx_runtime29 = require("react/jsx-runtime"), import_react34 = require("react"), import_jsx_runtime30 = require("react/jsx-runtime"), import_colord = require("colord"), import_react35 = require("react");
var import_shallow_equal = require("shallow-equal"), import_jsx_runtime31 = require("react/jsx-runtime"), import_react36 = require("react"), import_jsx_runtime32 = require("react/jsx-runtime"), import_react37 = require("react"), import_jsx_runtime33 = require("react/jsx-runtime"), import_react38 = require("react"), import_jsx_runtime34 = require("react/jsx-runtime"), Slot = (0, import_react7.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "div",
  {
    ...props,
    ref,
    style: { display: props.children ? "contents" : "block" }
  }
));
Slot.displayName = "Slot";
var Fragment3 = (0, import_react8.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ...props, ref, style: { display: "contents" } }));
Fragment3.displayName = "Fragment";
var ExecutableHtml = (props) => {
  let { code, innerRef, ...rest } = props, containerRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useEffect)(() => {
    let container = containerRef.current;
    if (container === null || code === void 0)
      return;
    let range = document.createRange();
    range.setStart(container, 0);
    let fragment = range.createContextualFragment(code);
    for (; container.firstChild; )
      container.removeChild(container.firstChild);
    container.append(fragment);
  }, [code]), /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ...rest,
      ref: (0, import_utils.mergeRefs)(innerRef, containerRef),
      style: { display: "contents" }
    }
  );
}, InnerHtml = (props) => {
  let { code, innerRef, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      ...rest,
      ref: innerRef,
      style: { display: "contents" },
      dangerouslySetInnerHTML: { __html: props.code ?? "" }
    }
  );
}, Placeholder = (props) => {
  let { code, innerRef, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { ref: innerRef, ...rest, style: { padding: "20px" }, children: 'Open the "Settings" panel to insert HTML code' });
}, HtmlEmbed = (0, import_react9.forwardRef)((props, ref) => {
  let { renderer } = (0, import_react9.useContext)(ReactSdkContext), { code, executeScriptOnCanvas, clientOnly, ...rest } = props;
  return code === void 0 || code.trim().length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Placeholder, { innerRef: ref, ...rest }) : renderer === "canvas" && executeScriptOnCanvas === !0 || renderer === "preview" || clientOnly ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ExecutableHtml, { innerRef: ref, code, ...rest }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(InnerHtml, { innerRef: ref, code, ...rest });
});
HtmlEmbed.displayName = "HtmlEmbed";
var Body = (0, import_react10.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("body", { ...props, ref }));
Body.displayName = "Body";
var defaultTag = "div", Box = (0, import_react11.forwardRef)(
  ({ tag = defaultTag, ...props }, ref) => (0, import_react11.createElement)(tag, { ...props, ref })
);
Box.displayName = "Box";
var defaultTag2 = "div", Text2 = (0, import_react12.forwardRef)(
  ({ tag: Tag = defaultTag2, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Tag, { ...props, ref, children: children ?? "The text you can edit" })
);
Text2.displayName = "Text";
var defaultTag3 = "h1", Heading = (0, import_react13.forwardRef)(
  ({ tag: Tag = defaultTag3, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Tag, { ...props, ref, children: children ?? "Heading you can edit" })
);
Heading.displayName = "Heading";
var Paragraph = (0, import_react14.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { ...props, ref, children: children ?? "Paragraph you can edit" }));
Paragraph.displayName = "Paragraph";
var Link = (0, import_react15.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { ...props, href: props.href ?? "#", ref, children: children ?? "Link text you can edit" })
);
Link.displayName = "Link";
var RichTextLink = (0, import_react16.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Link, { ...props, ref }));
RichTextLink.displayName = "RichTextLink";
var Span = (0, import_react17.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { ...props, ref }));
Span.displayName = "Span";
var Bold = (0, import_react18.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("b", { ...props, ref }));
Bold.displayName = "Bold";
var Italic = (0, import_react19.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("i", { ...props, ref }));
Italic.displayName = "Italic";
var Superscript = (0, import_react20.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sup", { ...props, ref }));
Superscript.displayName = "Bold";
var Subscript = (0, import_react21.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("sub", { ...props, ref }));
Subscript.displayName = "Subscript";
var Button = (0, import_react22.forwardRef)(
  ({ type = "submit", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("button", { type, ...props, ref, children: children ?? "Button you can edit" })
);
Button.displayName = "Button";
var Input = (0, import_react23.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("input", { ...props, ref }));
Input.displayName = "Input";
var Form = (0, import_react24.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("form", { ...props, ref, children }));
Form.displayName = "Form";
var imagePlaceholderSvg2 = `data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#CCCCCC" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#A2A2A2"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#A2A2A2"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#A2A2A2"
  />
</svg>`)}`, Image2 = (0, import_react25.forwardRef)(
  ({ loading = "lazy", ...props }, ref) => {
    let { imageLoader: imageLoader2, assetBaseUrl: assetBaseUrl2 } = (0, import_react25.useContext)(ReactSdkContext);
    if (props.src === void 0 || props.src.startsWith(assetBaseUrl2) === !1)
      return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "img",
        {
          loading,
          ...props,
          src: props.src || imagePlaceholderSvg2,
          ref
        },
        props.src
      );
    let src = props.src.slice(assetBaseUrl2.length);
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      Image,
      {
        loading,
        ...props,
        loader: imageLoader2,
        src,
        ref
      },
      src
    );
  }
);
Image2.displayName = "Image";
var Blockquote = (0, import_react26.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("blockquote", { ...props, ref, children: children ?? "Blockquote you can edit" })
);
Blockquote.displayName = "Blockquote";
var unorderedTag = "ul", orderedTag = "ol", List = (0, import_react27.forwardRef)(({ ordered = !1, ...props }, ref) => (0, import_react27.createElement)(ordered ? orderedTag : unorderedTag, { ...props, ref }));
List.displayName = "List";
var ListItem = (0, import_react28.forwardRef)(
  ({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("li", { ...props, ref, children: children ?? "List Item you can edit" })
);
ListItem.displayName = "ListItem";
var defaultTag4 = "hr", Separator = (0, import_react29.forwardRef)(
  (props, ref) => (0, import_react29.createElement)(defaultTag4, { ...props, ref })
);
Separator.displayName = "Separator";
var CodeText = (0, import_react30.forwardRef)(({ children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("code", { ...props, ref, children: children ?? "Code you can edit" }));
CodeText.displayName = "CodeText";
var Label = (0, import_react31.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("label", { ...props, ref }));
Label.displayName = "Label";
var Textarea = (0, import_react32.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("textarea", { ...props, ref }));
Textarea.displayName = "Textarea";
var RadioButton = (0, import_react33.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { ...props, type: "radio", ref }));
RadioButton.displayName = "RadioButton";
var Checkbox = (0, import_react34.forwardRef)(({ children: _children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("input", { ...props, type: "checkbox", ref }));
Checkbox.displayName = "Checkbox";
var getUrl = (options) => {
  if (options.url === void 0)
    return;
  let url;
  try {
    let userUrl = new URL(options.url);
    url = new URL(IFRAME_CDN), url.pathname = `/video${userUrl.pathname}`;
  } catch {
  }
  if (url === void 0)
    return;
  let option;
  for (option in options) {
    let value = options[option];
    option === "url" || value === void 0 || url.searchParams.append(option, value.toString());
  }
  if (url.searchParams.set("autoplay", "true"), typeof options.color == "string") {
    let color = (0, import_colord.colord)(options.color).toHex().replace("#", "");
    url.searchParams.set("color", color);
  }
  return options.portrait && url.searchParams.set("title", "true"), options.byline && (url.searchParams.set("portrait", "true"), url.searchParams.set("title", "true")), url.toString();
}, preconnect = (url) => {
  let link = document.createElement("link");
  link.rel = "preconnect", link.href = url, link.crossOrigin = "true", document.head.append(link);
}, warmed = !1, PLAYER_CDN = "https://f.vimeocdn.com", IFRAME_CDN = "https://player.vimeo.com", IMAGE_CDN = "https://i.vimeocdn.com", warmConnections = () => {
  warmed || (preconnect(PLAYER_CDN), preconnect(IFRAME_CDN), preconnect(IMAGE_CDN), warmed = !0);
}, createPlayer = (parent, options, callback) => {
  let url = getUrl(options);
  if (url === void 0)
    return;
  let iframe = document.createElement("iframe");
  return iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
  ), iframe.setAttribute("frameborder", "0"), iframe.setAttribute("allowfullscreen", "true"), iframe.setAttribute("src", url), iframe.setAttribute(
    "style",
    "position: absolute; width: 100%; height: 100%; opacity: 0; transition: opacity 1s;"
  ), iframe.addEventListener(
    "load",
    () => {
      iframe.style.opacity = "1", callback();
    },
    { once: !0 }
  ), parent.appendChild(iframe), () => {
    var _a7;
    (_a7 = iframe.parentElement) == null || _a7.removeChild(iframe);
  };
}, getVideoId = (url) => {
  try {
    let id = new URL(url).pathname.split("/")[1];
    return id === "" || id == null ? void 0 : id;
  } catch {
  }
}, loadPreviewImage = async (element, videoUrl) => {
  let apiUrl = `https://vimeo.com/api/v2/video/${getVideoId(videoUrl)}.json`, thumbnail = (await (await fetch(apiUrl)).json())[0].thumbnail_large, imgId = thumbnail.substr(thumbnail.lastIndexOf("/") + 1).split("_")[0], imageUrl = new URL(IMAGE_CDN);
  return imageUrl.pathname = `/video/${imgId}.webp`, imageUrl.searchParams.append("mw", "1100"), imageUrl.searchParams.append("mh", "619"), imageUrl.searchParams.append("q", "70"), imageUrl;
}, useVimeo = ({
  options,
  renderer,
  showPreview
}) => {
  let [playerStatus, setPlayerStatus] = (0, import_react35.useState)("initial"), elementRef = (0, import_react35.useRef)(null), [previewImageUrl, setPreviewImageUrl] = (0, import_react35.useState)();
  (0, import_react35.useEffect)(() => {
    setPlayerStatus(
      options.autoplay && renderer !== "canvas" ? "initialized" : "initial"
    );
  }, [options.autoplay, renderer]), (0, import_react35.useEffect)(() => {
    if (!(elementRef.current === null || playerStatus === "ready" || options.url === void 0)) {
      if (showPreview) {
        loadPreviewImage(elementRef.current, options.url).then(
          setPreviewImageUrl
        );
        return;
      }
      setPreviewImageUrl(void 0);
    }
  }, [renderer, showPreview, options.url, playerStatus]);
  let optionsRef = (0, import_react35.useRef)(options), stableOptions = (0, import_react35.useMemo)(() => ((0, import_shallow_equal.shallowEqual)(options, optionsRef.current) === !1 && (optionsRef.current = options), optionsRef.current), [options]);
  return (0, import_react35.useEffect)(() => {
    if (!(elementRef.current === null || playerStatus === "initial"))
      return createPlayer(elementRef.current, stableOptions, () => {
        setPlayerStatus("ready");
      });
  }, [stableOptions, playerStatus]), { previewImageUrl, playerStatus, setPlayerStatus, elementRef };
}, Vimeo = (0, import_react35.forwardRef)(
  ({
    url,
    autoplay = !1,
    autopause = !0,
    backgroundMode = !1,
    showByline = !1,
    showControls = !0,
    doNotTrack = !1,
    keyboard = !0,
    loop = !1,
    muted = !1,
    pip = !1,
    playsinline = !0,
    showPortrait = !0,
    quality = "auto",
    responsive = !0,
    speed = !1,
    showTitle = !1,
    transparent = !0,
    showPreview = !1,
    autopip,
    controlsColor,
    interactiveParams,
    texttrack,
    children,
    ...rest
  }, ref) => {
    let { renderer } = (0, import_react35.useContext)(ReactSdkContext), { previewImageUrl, playerStatus, setPlayerStatus, elementRef } = useVimeo({
      renderer,
      showPreview,
      options: {
        url,
        autoplay,
        autopause,
        keyboard,
        loop,
        muted,
        pip,
        playsinline,
        quality,
        responsive,
        speed,
        transparent,
        portrait: showPortrait,
        byline: showByline,
        title: showTitle,
        color: controlsColor,
        controls: showControls,
        interactive_params: interactiveParams,
        background: backgroundMode,
        dnt: doNotTrack
      }
    });
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      VimeoContext.Provider,
      {
        value: {
          status: playerStatus,
          previewImageUrl,
          onInitPlayer() {
            renderer !== "canvas" && setPlayerStatus("initialized");
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "div",
          {
            ...rest,
            ref: (value) => {
              elementRef.current = value, ref !== null && (typeof ref == "function" ? ref(value) : ref.current = value);
            },
            onPointerOver: () => {
              renderer !== "canvas" && warmConnections();
            },
            children: url === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(EmptyState, {}) : children
          }
        )
      }
    );
  }
);
Vimeo.displayName = "Vimeo";
var EmptyState = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
  "div",
  {
    style: {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.2em"
    },
    children: 'Open the "Settings" panel and paste a video URL, e.g. https://vimeo.com/831343124.'
  }
), VimeoContext = (0, import_react35.createContext)({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onInitPlayer: () => {
  },
  status: "initial"
}), base64Preview = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkOAMAANIAzr59FiYAAAAASUVORK5CYII=", VimeoPreviewImage = (0, import_react36.forwardRef)(({ src, ...rest }, ref) => {
  let vimeoContext = (0, import_react36.useContext)(VimeoContext);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    Image2,
    {
      ...rest,
      src: String(vimeoContext.previewImageUrl ?? src ?? base64Preview),
      ref
    }
  );
});
VimeoPreviewImage.displayName = "VimeoPreviewImage";
var VimeoPlayButton = (0, import_react37.forwardRef)(
  (props, ref) => {
    let vimeoContext = (0, import_react37.useContext)(VimeoContext);
    return vimeoContext.status !== "initial" ? null : /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Button, { ...props, onClick: vimeoContext.onInitPlayer, ref });
  }
);
VimeoPlayButton.displayName = "VimeoPlayButton";
var VimeoSpinner = (0, import_react38.forwardRef)(
  (props, ref) => (0, import_react38.useContext)(VimeoContext).status !== "initialized" ? null : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { ...props, ref })
);
VimeoSpinner.displayName = "VimeoSpinner";

// node_modules/@webstudio-is/sdk-components-react-remix/lib/components.js
var import_react39 = require("react"), import_react40 = require("@remix-run/react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var import_react41 = require("react"), import_react42 = require("@remix-run/react");
var import_jsx_runtime36 = require("react/jsx-runtime"), wrapLinkComponent = (BaseLink3) => {
  let Component = (0, import_react39.forwardRef)((props, ref) => {
    let { pagesPaths: pagesPaths4 } = (0, import_react39.useContext)(ReactSdkContext), href = props.href;
    if (href !== void 0) {
      let url = new URL(href, "https://any-valid.url");
      if (pagesPaths4.has(url.pathname === "/" ? "" : url.pathname))
        return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_react40.NavLink, { ...props, to: href, ref });
    }
    let { prefetch, reloadDocument, replace, preventScrollReset, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(BaseLink3, { ...rest, ref });
  });
  return Component.displayName = BaseLink3.displayName, Component;
}, Link2 = wrapLinkComponent(Link), RichTextLink2 = wrapLinkComponent(RichTextLink), useOnFetchEnd = (fetcher, handler) => {
  let latestHandler = (0, import_react41.useRef)(handler);
  latestHandler.current = handler;
  let prevFetcher = (0, import_react41.useRef)(fetcher);
  (0, import_react41.useEffect)(() => {
    prevFetcher.current.state !== fetcher.state && fetcher.state === "idle" && fetcher.data !== void 0 && latestHandler.current(fetcher.data), prevFetcher.current = fetcher;
  }, [fetcher]);
}, Form2 = (0, import_react41.forwardRef)(
  ({ children, action: action4, method, state = "initial", onStateChange, ...rest }, ref) => {
    let fetcher = (0, import_react42.useFetcher)(), instanceId = getInstanceIdFromComponentProps(rest);
    return useOnFetchEnd(fetcher, (data) => {
      let state2 = (data == null ? void 0 : data.success) === !0 ? "success" : "error";
      onStateChange == null || onStateChange(state2);
    }), /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(fetcher.Form, { ...rest, method: "post", "data-state": state, ref, children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("input", { type: "hidden", name: formIdFieldName, value: instanceId }),
      children
    ] });
  }
);
Form2.displayName = "Form";

// app/__generated__/[ai-test]._index.tsx
var import_jsx_runtime37 = require("react/jsx-runtime"), fontAssets = [], imageAssets = [{ id: "09a04c1e-28d3-4a28-ae61-6f1079a9c823", name: "card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg", description: null, projectId: "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", size: 2641, type: "image", format: "svg", createdAt: "2023-11-13T12:40:51.697Z", meta: { width: 25, height: 28 } }], pageData = { page: { id: "burzlEbdH1A0YHenPqmDw", name: "AI test", title: "AI test", meta: { description: "", excludePageFromSearch: !1, socialImageAssetId: "", custom: [] }, rootInstanceId: "nENw1F2C8wsn0nriq4vmL", path: "/ai-test" } }, user = { email: "meshcheriakov@vectary.com" }, projectId = "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", Page = (props) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
  Body,
  {
    "data-ws-id": "nENw1F2C8wsn0nriq4vmL",
    "data-ws-component": "Body",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
        Box,
        {
          "data-ws-id": "wENWzSvA1Pvv9DZfKtkHw",
          "data-ws-component": "Box",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
              Box,
              {
                "data-ws-id": "pc05TXxO_SLeuO_2N_pvC",
                "data-ws-component": "Box",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                    Heading,
                    {
                      "data-ws-id": "MFVzv4XIQkRxgXR8zMgz7",
                      "data-ws-component": "Heading",
                      children: "What Our Clients Say"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                    Paragraph,
                    {
                      "data-ws-id": "qpq7l4ccHp67ptw0hFpMA",
                      "data-ws-component": "Paragraph",
                      children: "Hear directly from our satisfied customers"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
              Box,
              {
                "data-ws-id": "ow8D1iL1-lT4rovBGDiz0",
                "data-ws-component": "Box",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
                    Box,
                    {
                      "data-ws-id": "hjEjwP6yHiu5sfkTq9_pS",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Image2,
                          {
                            "data-ws-id": "wrnIn02XZdInL3LkPelKy",
                            "data-ws-component": "Image",
                            src: "https://images.pexels.com/photos/18946900/pexels-photo-18946900.jpeg?wsai=true",
                            alt: "Testimonial 1",
                            width: 100,
                            height: 100,
                            title: "Credit: Melvin Buezo"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Bold,
                          {
                            "data-ws-id": "wCUO9j-jJCZcLQg5aDVWj",
                            "data-ws-component": "Bold",
                            children: "Amanda Peterson"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Paragraph,
                          {
                            "data-ws-id": "xihPp8AX2t1ugdQnX2eoS",
                            "data-ws-component": "Paragraph",
                            children: `"The service was exceptional. I couldn't be happier!"`
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Link2,
                          {
                            "data-ws-id": "-NQER_GjrwfAxctim07nA",
                            "data-ws-component": "Link",
                            href: "#",
                            children: "Read More"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
                    Box,
                    {
                      "data-ws-id": "jANgzGBLWQXV8p9nEDbRr",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Image2,
                          {
                            "data-ws-id": "KAyzzbdnZWGqkCV5A6g2n",
                            "data-ws-component": "Image",
                            src: "https://images.pexels.com/photos/4712714/pexels-photo-4712714.jpeg?wsai=true",
                            alt: "Testimonial 2",
                            width: 100,
                            height: 100,
                            title: "Credit: Lucas Meneses"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Bold,
                          {
                            "data-ws-id": "Q7jG32qH0-Ht7fUPcnbG6",
                            "data-ws-component": "Bold",
                            children: "James Smith"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Paragraph,
                          {
                            "data-ws-id": "comxlrGHYQU6OTaLF2hml",
                            "data-ws-component": "Paragraph",
                            children: '"I was blown away by the quality of the product."'
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Link2,
                          {
                            "data-ws-id": "pWgnPT21awrswdF-d0gLG",
                            "data-ws-component": "Link",
                            href: "#",
                            children: "Read More"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
                    Box,
                    {
                      "data-ws-id": "rUlUPKc8QaCOKvxI7OAbE",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Image2,
                          {
                            "data-ws-id": "3i7S3qfsWyIiuiyaR7BNp",
                            "data-ws-component": "Image",
                            src: "https://images.pexels.com/photos/19041161/pexels-photo-19041161.jpeg?wsai=true",
                            alt: "Testimonial 3",
                            width: 100,
                            height: 100,
                            title: "Credit: Lipe"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Bold,
                          {
                            "data-ws-id": "o_zgCJOIp1MoNCwpkLMsl",
                            "data-ws-component": "Bold",
                            children: "Olivia Johnson"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Paragraph,
                          {
                            "data-ws-id": "B93mIL8MGnizacKLVE7Gn",
                            "data-ws-component": "Paragraph",
                            children: '"I would recommend this to anyone. Absolutely fantastic!"'
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                          Link2,
                          {
                            "data-ws-id": "CyKUko4Nqn8NSxJvb0i24",
                            "data-ws-component": "Link",
                            href: "#",
                            children: "Read More"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      props.scripts
    ]
  }
);
var pagesPaths = /* @__PURE__ */ new Set(["", "/ai-test", "/404"]), formsProperties = /* @__PURE__ */ new Map([]);

// app/__generated__/index.css
var generated_default = "/build/_assets/index-QKIVNHEV.css";

// app/constants.mjs
var assetBaseUrl = "/assets/", imageBaseUrl = "/assets/", imageLoader = ({ src }) => imageBaseUrl + src;

// app/routes/[ai-test]._index.tsx
var import_jsx_runtime38 = require("react/jsx-runtime"), loader = async (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "", url = new URL(arg.request.url);
  return url.host = host, url.protocol = "https", arg.context.EXCLUDE_FROM_SEARCH, (0, import_server_runtime.json)(
    {
      host,
      url: url.href,
      excludeFromSearch: arg.context.EXCLUDE_FROM_SEARCH
    },
    // No way for current information to change, so add cache for 10 minutes
    // In case of CRM Data, this should be set to 0
    { headers: { "Cache-Control": "public, max-age=600" } }
  );
}, headers = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate"
}), meta = ({ data }) => {
  let { page, site } = pageData, metas = [];
  data != null && data.url && metas.push({
    property: "og:url",
    content: data.url
  }), page.title && (metas.push({ title: page.title }), metas.push({
    property: "og:title",
    content: page.title
  })), metas.push({ property: "og:type", content: "website" });
  let origin = `https://${data == null ? void 0 : data.host}`;
  if (site != null && site.siteName && (metas.push({
    property: "og:site_name",
    content: site.siteName
  }), metas.push({
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.siteName,
      url: origin
    }
  })), (page.meta.excludePageFromSearch || data != null && data.excludeFromSearch) && metas.push({
    name: "robots",
    content: "noindex, nofollow"
  }), page.meta.description && (metas.push({
    name: "description",
    content: page.meta.description
  }), metas.push({
    property: "og:description",
    content: page.meta.description
  })), page.meta.socialImageAssetId) {
    let imageAsset = imageAssets.find(
      (asset) => asset.id === page.meta.socialImageAssetId
    );
    imageAsset && metas.push({
      property: "og:image",
      content: `https://${data == null ? void 0 : data.host}${imageLoader({
        src: imageAsset.name,
        // Do not transform social image (not enough information do we need to do this)
        format: "raw"
      })}`
    });
  }
  for (let customMeta of page.meta.custom ?? [])
    customMeta.property.trim().length !== 0 && metas.push(customMeta);
  return metas;
}, links = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  let { site } = pageData;
  if (site != null && site.faviconAssetId) {
    let imageAsset = imageAssets.find(
      (asset) => asset.id === site.faviconAssetId
    );
    imageAsset && result.push({
      rel: "icon",
      href: imageLoader({
        src: imageAsset.name,
        width: 128,
        quality: 100,
        format: "auto"
      }),
      type: void 0
    });
  } else
    result.push({
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    }), result.push({
      rel: "shortcut icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    });
  for (let asset of fontAssets)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw (0, import_server_runtime.json)("Form not found", { status: 404 });
  let formProperties = formsProperties.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return (0, import_server_runtime.json)(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId,
    action: action4 ?? null,
    method: getMethod(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet = () => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      Page,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react43.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_react43.ScrollRestoration, {})
        ] })
      }
    )
  }
), ai_test_index_default = Outlet;

// app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader2
});

// app/__generated__/[sitemap.xml].ts
var sitemap = {
  pages: [
    {
      path: "",
      lastModified: "2023-11-14T12:14:33.853Z"
    },
    {
      path: "/ai-test",
      lastModified: "2023-11-14T12:14:33.853Z"
    },
    {
      path: "/404",
      lastModified: "2023-11-14T12:14:33.853Z"
    }
  ]
};

// app/routes/[sitemap.xml].tsx
var loader2 = (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "", urls = sitemap.pages.map((page) => `
  <url>
    <loc>${new URL(`https://${host}${page.path}`).href}</loc>
    <lastmod>${page.lastModified.split("T")[0]}</lastmod>
  </url>
    `);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>
  `,
    {
      headers: {
        "Content-Type": "application/xml"
      },
      status: 200
    }
  );
};

// app/routes/[404]._index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action2,
  default: () => index_default,
  headers: () => headers2,
  links: () => links2,
  loader: () => loader3,
  meta: () => meta2
});
var import_server_runtime2 = require("@remix-run/server-runtime");
var import_react44 = require("@remix-run/react");

// app/__generated__/[404]._index.tsx
var import_jsx_runtime39 = require("react/jsx-runtime"), fontAssets2 = [], imageAssets2 = [{ id: "09a04c1e-28d3-4a28-ae61-6f1079a9c823", name: "card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg", description: null, projectId: "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", size: 2641, type: "image", format: "svg", createdAt: "2023-11-13T12:40:51.697Z", meta: { width: 25, height: 28 } }], pageData2 = { page: { id: "RDOYjj5chw2I7ZOjyaC28", name: "404", title: "404", meta: { description: "", excludePageFromSearch: !1, socialImageAssetId: "", custom: [] }, rootInstanceId: "8p_s4qhYQc_PpFjla1oFt", path: "/404" } }, user2 = { email: "meshcheriakov@vectary.com" }, projectId2 = "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", Page2 = (props) => /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
  Body,
  {
    "data-ws-id": "8p_s4qhYQc_PpFjla1oFt",
    "data-ws-component": "Body",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
        Box,
        {
          "data-ws-id": "9rG4aRApBcFQewdY84lwg",
          "data-ws-component": "Box",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Heading,
              {
                "data-ws-id": "UcTRdocJj4opgY6IekLAt",
                "data-ws-component": "Heading",
                children: "Oops!"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Paragraph,
              {
                "data-ws-id": "hh8RY_Z0uJcf4spwostPQ",
                "data-ws-component": "Paragraph",
                children: "We can't seem to find the page you're looking for."
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Image2,
              {
                "data-ws-id": "BpOvxVUukPk_xXY-Rfq43",
                "data-ws-component": "Image",
                src: "https://images.pexels.com/photos/6975523/pexels-photo-6975523.jpeg?wsai=true",
                alt: "A confused robot looking at a map",
                width: 200,
                height: 200,
                title: "Credit: KoolShooters"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Text2,
              {
                "data-ws-id": "7TtDIib1CfGfsPwH_qAqR",
                "data-ws-component": "Text",
                children: "Error code: 404"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
              Button,
              {
                "data-ws-id": "AFJAEYjsYcgoy3In32eAP",
                "data-ws-component": "Button",
                children: "Go Home"
              }
            )
          ]
        }
      ),
      props.scripts
    ]
  }
);
var pagesPaths2 = /* @__PURE__ */ new Set(["", "/ai-test", "/404"]), formsProperties2 = /* @__PURE__ */ new Map([]);

// app/routes/[404]._index.tsx
var import_jsx_runtime40 = require("react/jsx-runtime"), loader3 = async (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "", url = new URL(arg.request.url);
  return url.host = host, url.protocol = "https", arg.context.EXCLUDE_FROM_SEARCH, (0, import_server_runtime2.json)(
    {
      host,
      url: url.href,
      excludeFromSearch: arg.context.EXCLUDE_FROM_SEARCH
    },
    // No way for current information to change, so add cache for 10 minutes
    // In case of CRM Data, this should be set to 0
    { headers: { "Cache-Control": "public, max-age=600" } }
  );
}, headers2 = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate"
}), meta2 = ({ data }) => {
  let { page, site } = pageData2, metas = [];
  data != null && data.url && metas.push({
    property: "og:url",
    content: data.url
  }), page.title && (metas.push({ title: page.title }), metas.push({
    property: "og:title",
    content: page.title
  })), metas.push({ property: "og:type", content: "website" });
  let origin = `https://${data == null ? void 0 : data.host}`;
  if (site != null && site.siteName && (metas.push({
    property: "og:site_name",
    content: site.siteName
  }), metas.push({
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.siteName,
      url: origin
    }
  })), (page.meta.excludePageFromSearch || data != null && data.excludeFromSearch) && metas.push({
    name: "robots",
    content: "noindex, nofollow"
  }), page.meta.description && (metas.push({
    name: "description",
    content: page.meta.description
  }), metas.push({
    property: "og:description",
    content: page.meta.description
  })), page.meta.socialImageAssetId) {
    let imageAsset = imageAssets2.find(
      (asset) => asset.id === page.meta.socialImageAssetId
    );
    imageAsset && metas.push({
      property: "og:image",
      content: `https://${data == null ? void 0 : data.host}${imageLoader({
        src: imageAsset.name,
        // Do not transform social image (not enough information do we need to do this)
        format: "raw"
      })}`
    });
  }
  for (let customMeta of page.meta.custom ?? [])
    customMeta.property.trim().length !== 0 && metas.push(customMeta);
  return metas;
}, links2 = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  let { site } = pageData2;
  if (site != null && site.faviconAssetId) {
    let imageAsset = imageAssets2.find(
      (asset) => asset.id === site.faviconAssetId
    );
    imageAsset && result.push({
      rel: "icon",
      href: imageLoader({
        src: imageAsset.name,
        width: 128,
        quality: 100,
        format: "auto"
      }),
      type: void 0
    });
  } else
    result.push({
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    }), result.push({
      rel: "shortcut icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    });
  for (let asset of fontAssets2)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost2 = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod2 = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action2 = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw (0, import_server_runtime2.json)("Form not found", { status: 404 });
  let formProperties = formsProperties2.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user2) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost2(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return (0, import_server_runtime2.json)(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId: projectId2,
    action: action4 ?? null,
    method: getMethod2(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet2 = () => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths: pagesPaths2
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      Page2,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react44.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_react44.ScrollRestoration, {})
        ] })
      }
    )
  }
), index_default = Outlet2;

// app/routes/[robots.txt].tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader4
});
var loader4 = (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "";
  return new Response(
    `
User-agent: *
Disallow: /api/

Sitemap: https://${host}/sitemap.xml

  `,
    {
      headers: {
        "Content-Type": "text/plain"
      },
      status: 200
    }
  );
};

// app/routes/_index.tsx
var index_exports2 = {};
__export(index_exports2, {
  action: () => action3,
  default: () => index_default2,
  headers: () => headers3,
  links: () => links3,
  loader: () => loader5,
  meta: () => meta3
});
var import_server_runtime3 = require("@remix-run/server-runtime");
var import_react45 = require("@remix-run/react");

// app/__generated__/_index.tsx
var import_jsx_runtime41 = require("react/jsx-runtime"), fontAssets3 = [], imageAssets3 = [{ id: "09a04c1e-28d3-4a28-ae61-6f1079a9c823", name: "card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg", description: null, projectId: "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", size: 2641, type: "image", format: "svg", createdAt: "2023-11-13T12:40:51.697Z", meta: { width: 25, height: 28 } }], pageData3 = { page: { id: "NbEnUgcJPvVbhnkMtRFnG", name: "Home", title: "Home", meta: {}, rootInstanceId: "VUSkho34c4ybN1utYmVO8", path: "" } }, user3 = { email: "meshcheriakov@vectary.com" }, projectId3 = "b35a1473-4ef1-4be3-93d2-30cf8d9ebf0f", Page3 = (props) => /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
  Body,
  {
    "data-ws-id": "VUSkho34c4ybN1utYmVO8",
    "data-ws-component": "Body",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
        Box,
        {
          "data-ws-id": "bsfj-Ov9S4dgAo-AB2EFF",
          "data-ws-component": "Box",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
              Box,
              {
                "data-ws-id": "HY-Q9CE2YzismzGfMsPS6",
                "data-ws-component": "Box",
                tag: "nav",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                    Box,
                    {
                      "data-ws-id": "WPPbAudve_CpuGfOd3Cwu",
                      "data-ws-component": "Box",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                          Box,
                          {
                            "data-ws-id": "QItzzEa6MPyeCOmP-aWsh",
                            "data-ws-component": "Box",
                            children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Image2,
                              {
                                "data-ws-id": "CMWzgTUCd5wu5cYgw9Qi5",
                                "data-ws-component": "Image",
                                src: "/assets/card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg",
                                width: 25,
                                height: 28
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                          Box,
                          {
                            "data-ws-id": "RbiJ9LGkuTdNxcu_lV_7U",
                            "data-ws-component": "Box",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                                Heading,
                                {
                                  "data-ws-id": "ozKmRy31ahKcmXaP4RkZO",
                                  "data-ws-component": "Heading",
                                  children: "Share & Embed"
                                }
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                                Text2,
                                {
                                  "data-ws-id": "iBmoU8Th7AZbOYQrVVif8",
                                  "data-ws-component": "Text",
                                  children: "Place designs in real environments"
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                    Box,
                    {
                      "data-ws-id": "dUV_Q11tljBmnL7YOr6c7",
                      "data-ws-component": "Box",
                      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        Box,
                        {
                          "data-ws-id": "SXeFN9bFTlp-bYwuljs2U",
                          "data-ws-component": "Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                            HtmlEmbed,
                            {
                              "data-ws-id": "YlWkmTzVX7SDnpEluH0R9",
                              "data-ws-component": "HtmlEmbed",
                              code: `<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
    <dotlottie-player src="https://lottie.host/efa7ac28-cdab-45a5-84fb-70bf575af233/k5xHDk8V2v.lottie" background="transparent" speed="1" style="position: absolute; width: 100%; height: 100%;" loop="" autoplay=""></dotlottie-player>`
                            }
                          )
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              Box,
              {
                "data-ws-id": "5gsigEcOY_-7EEbTGL_ZU",
                "data-ws-component": "Box",
                children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                  Box,
                  {
                    "data-ws-id": "0St7Lu8SbMVg0DMtBuhPs",
                    "data-ws-component": "Box",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        Box,
                        {
                          "data-ws-id": "hT-9MvovEmwGlGzDPzDxb",
                          "data-ws-component": "Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                            Image2,
                            {
                              "data-ws-id": "4VCXnAS8QQAwa2_dHA1P7",
                              "data-ws-component": "Image",
                              src: "/assets/card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg",
                              width: 25,
                              height: 28
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                        Box,
                        {
                          "data-ws-id": "QIt8vvv-ensXCZqpcWXA3",
                          "data-ws-component": "Box",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Heading,
                              {
                                "data-ws-id": "ao6HOCnZdcs2Jczn291NV",
                                "data-ws-component": "Heading",
                                children: "Augmented Reality"
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Text2,
                              {
                                "data-ws-id": "NuLLWk7Q9yjN435MsIlhJ",
                                "data-ws-component": "Text",
                                children: "Place designs in real environments"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              Box,
              {
                "data-ws-id": "KvVw4ZSqSUJPnYKENYZdD",
                "data-ws-component": "Box",
                children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                  Box,
                  {
                    "data-ws-id": "stPdIrK2BhoE6v4fZIuzq",
                    "data-ws-component": "Box",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        Box,
                        {
                          "data-ws-id": "ygdMET686TTz2yUVFAvEk",
                          "data-ws-component": "Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                            Image2,
                            {
                              "data-ws-id": "fbbIWe1bmPRbJuWEwHbZJ",
                              "data-ws-component": "Image",
                              src: "/assets/card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg",
                              width: 25,
                              height: 28
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                        Box,
                        {
                          "data-ws-id": "CsdIbc9NP6ELij-KrbMtS",
                          "data-ws-component": "Box",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Heading,
                              {
                                "data-ws-id": "erFo8COZ_glKwN073AFIC",
                                "data-ws-component": "Heading",
                                children: "Augmented Reality"
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Text2,
                              {
                                "data-ws-id": "CRSLmuT__-u8onSgNlJUZ",
                                "data-ws-component": "Text",
                                children: "Place designs in real environments"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
              Box,
              {
                "data-ws-id": "to0zMflfOQqflszBdiqc9",
                "data-ws-component": "Box",
                children: /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                  Box,
                  {
                    "data-ws-id": "ggWwgICJ97fJ7uKDGqpuS",
                    "data-ws-component": "Box",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                        Box,
                        {
                          "data-ws-id": "FEXJvFQ5Z8Wj5MpLkZaZ1",
                          "data-ws-component": "Box",
                          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                            Image2,
                            {
                              "data-ws-id": "7gdBwu3yKuUZ2nm42pGDn",
                              "data-ws-component": "Image",
                              src: "/assets/card-get-started-icon-ar_1grSx8GEKfADhVrfxzQrS.svg",
                              width: 25,
                              height: 28
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
                        Box,
                        {
                          "data-ws-id": "qtbrH00jcgL2cPRxKPo06",
                          "data-ws-component": "Box",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Heading,
                              {
                                "data-ws-id": "FlxYh3mjAzo5zwK64FYbQ",
                                "data-ws-component": "Heading",
                                children: "Augmented Reality"
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
                              Text2,
                              {
                                "data-ws-id": "GeFhq0AURqdhKCNNlreby",
                                "data-ws-component": "Text",
                                children: "Place designs in real environments"
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              }
            )
          ]
        }
      ),
      props.scripts
    ]
  }
);
var pagesPaths3 = /* @__PURE__ */ new Set(["", "/ai-test", "/404"]), formsProperties3 = /* @__PURE__ */ new Map([]);

// app/routes/_index.tsx
var import_jsx_runtime42 = require("react/jsx-runtime"), loader5 = async (arg) => {
  let host = arg.request.headers.get("x-forwarded-host") || arg.request.headers.get("host") || "", url = new URL(arg.request.url);
  return url.host = host, url.protocol = "https", arg.context.EXCLUDE_FROM_SEARCH, (0, import_server_runtime3.json)(
    {
      host,
      url: url.href,
      excludeFromSearch: arg.context.EXCLUDE_FROM_SEARCH
    },
    // No way for current information to change, so add cache for 10 minutes
    // In case of CRM Data, this should be set to 0
    { headers: { "Cache-Control": "public, max-age=600" } }
  );
}, headers3 = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate"
}), meta3 = ({ data }) => {
  let { page, site } = pageData3, metas = [];
  data != null && data.url && metas.push({
    property: "og:url",
    content: data.url
  }), page.title && (metas.push({ title: page.title }), metas.push({
    property: "og:title",
    content: page.title
  })), metas.push({ property: "og:type", content: "website" });
  let origin = `https://${data == null ? void 0 : data.host}`;
  if (site != null && site.siteName && (metas.push({
    property: "og:site_name",
    content: site.siteName
  }), metas.push({
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.siteName,
      url: origin
    }
  })), (page.meta.excludePageFromSearch || data != null && data.excludeFromSearch) && metas.push({
    name: "robots",
    content: "noindex, nofollow"
  }), page.meta.description && (metas.push({
    name: "description",
    content: page.meta.description
  }), metas.push({
    property: "og:description",
    content: page.meta.description
  })), page.meta.socialImageAssetId) {
    let imageAsset = imageAssets3.find(
      (asset) => asset.id === page.meta.socialImageAssetId
    );
    imageAsset && metas.push({
      property: "og:image",
      content: `https://${data == null ? void 0 : data.host}${imageLoader({
        src: imageAsset.name,
        // Do not transform social image (not enough information do we need to do this)
        format: "raw"
      })}`
    });
  }
  for (let customMeta of page.meta.custom ?? [])
    customMeta.property.trim().length !== 0 && metas.push(customMeta);
  return metas;
}, links3 = () => {
  let result = [];
  result.push({
    rel: "stylesheet",
    href: generated_default
  });
  let { site } = pageData3;
  if (site != null && site.faviconAssetId) {
    let imageAsset = imageAssets3.find(
      (asset) => asset.id === site.faviconAssetId
    );
    imageAsset && result.push({
      rel: "icon",
      href: imageLoader({
        src: imageAsset.name,
        width: 128,
        quality: 100,
        format: "auto"
      }),
      type: void 0
    });
  } else
    result.push({
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    }), result.push({
      rel: "shortcut icon",
      href: "/favicon.ico",
      type: "image/x-icon"
    });
  for (let asset of fontAssets3)
    asset.type === "font" && result.push({
      rel: "preload",
      href: assetBaseUrl + asset.name,
      as: "font",
      crossOrigin: "anonymous"
      // @todo add mimeType
      // type: asset.mimeType,
    });
  return result;
}, getRequestHost3 = (request) => request.headers.get("x-forwarded-host") || request.headers.get("host") || "", getMethod3 = (value) => {
  if (value === void 0)
    return "post";
  switch (value.toLowerCase()) {
    case "get":
      return "get";
    default:
      return "post";
  }
}, action3 = async ({ request, context }) => {
  var _a7;
  let formData = await request.formData(), formId = getFormId(formData);
  if (formId === void 0)
    throw (0, import_server_runtime3.json)("Form not found", { status: 404 });
  let formProperties = formsProperties3.get(formId), { action: action4, method } = formProperties ?? {}, email = (_a7 = user3) == null ? void 0 : _a7.email;
  if (email == null)
    return { success: !1 };
  let pageUrl;
  try {
    pageUrl = new URL(request.url), pageUrl.host = getRequestHost3(request);
  } catch {
    return { success: !1 };
  }
  if (action4 !== void 0)
    try {
      new URL(action4);
    } catch {
      return (0, import_server_runtime3.json)(
        {
          success: !1,
          error: "Invalid action URL, must be valid http/https protocol"
        },
        { status: 200 }
      );
    }
  let formInfo = {
    formData,
    projectId: projectId3,
    action: action4 ?? null,
    method: getMethod3(method),
    pageUrl: pageUrl.toString(),
    toEmail: email,
    fromEmail: pageUrl.hostname + "@webstudio.email"
  };
  return await n8nHandler({
    formInfo,
    hookUrl: context.N8N_FORM_EMAIL_HOOK
  });
}, Outlet3 = () => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
  ReactSdkContext.Provider,
  {
    value: {
      imageLoader,
      assetBaseUrl,
      imageBaseUrl,
      pagesPaths: pagesPaths3
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      Page3,
      {
        scripts: /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react45.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react45.ScrollRestoration, {})
        ] })
      }
    )
  }
), index_default2 = Outlet3;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  getStaticPaths: () => getStaticPaths
});
function getStaticPaths() {
  return ["/", "/404", "/ai-test"];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-D3TH3BKN.js", imports: ["/build/_shared/chunk-22SYOYMK.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JAIYKMBJ.js", imports: ["/build/_shared/chunk-WBBHLTYC.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[404]._index": { id: "routes/[404]._index", parentId: "root", path: "404", index: !0, caseSensitive: void 0, module: "/build/routes/[404]._index-GDC3O5AJ.js", imports: ["/build/_shared/chunk-YPAI4WMS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[ai-test]._index": { id: "routes/[ai-test]._index", parentId: "root", path: "ai-test", index: !0, caseSensitive: void 0, module: "/build/routes/[ai-test]._index-HV3M56SH.js", imports: ["/build/_shared/chunk-YPAI4WMS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[robots.txt]": { id: "routes/[robots.txt]", parentId: "root", path: "robots.txt", index: void 0, caseSensitive: void 0, module: "/build/routes/[robots.txt]-5J2M27VD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/[sitemap.xml]": { id: "routes/[sitemap.xml]", parentId: "root", path: "sitemap.xml", index: void 0, caseSensitive: void 0, module: "/build/routes/[sitemap.xml]-E6JKHXAF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-RJJTHAAE.js", imports: ["/build/_shared/chunk-YPAI4WMS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-PEN3FIEE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "9b0ff50d", hmr: void 0, url: "/build/manifest-9B0FF50D.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/[ai-test]._index": {
    id: "routes/[ai-test]._index",
    parentId: "root",
    path: "ai-test",
    index: !0,
    caseSensitive: void 0,
    module: ai_test_index_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/[404]._index": {
    id: "routes/[404]._index",
    parentId: "root",
    path: "404",
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
