define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__highlight_directive = Object.create(_root);
  const $backgroundColor = dartx.backgroundColor;
  const _el = Symbol('_el');
  const _highlight = Symbol('_highlight');
  src__highlight_directive.HighlightDirective = class HighlightDirective extends core.Object {
    get defaultColor() {
      return this[defaultColor];
    }
    set defaultColor(value) {
      this[defaultColor] = value;
    }
    get highlightColor() {
      return this[highlightColor];
    }
    set highlightColor(value) {
      this[highlightColor] = value;
    }
    onMouseEnter() {
      return this[_highlight]((() => {
        let l = this.highlightColor;
        let l$ = l != null ? l : this.defaultColor;
        return l$ != null ? l$ : 'red';
      })());
    }
    onMouseLeave() {
      return this[_highlight]();
    }
    [_highlight](color) {
      if (color === void 0) color = null;
      this[_el].style[$backgroundColor] = color;
    }
  };
  (src__highlight_directive.HighlightDirective.new = function(el) {
    this[defaultColor] = null;
    this[highlightColor] = null;
    this[_el] = el;
  }).prototype = src__highlight_directive.HighlightDirective.prototype;
  dart.addTypeTests(src__highlight_directive.HighlightDirective);
  const defaultColor = Symbol("HighlightDirective.defaultColor");
  const highlightColor = Symbol("HighlightDirective.highlightColor");
  dart.setMethodSignature(src__highlight_directive.HighlightDirective, () => ({
    __proto__: dart.getMethods(src__highlight_directive.HighlightDirective.__proto__),
    onMouseEnter: dart.fnType(dart.void, []),
    onMouseLeave: dart.fnType(dart.void, []),
    [_highlight]: dart.fnType(dart.void, [], [core.String])
  }));
  dart.setFieldSignature(src__highlight_directive.HighlightDirective, () => ({
    __proto__: dart.getFields(src__highlight_directive.HighlightDirective.__proto__),
    [_el]: dart.finalFieldType(html.Element),
    defaultColor: dart.fieldType(core.String),
    highlightColor: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/attribute_directives/src/highlight_directive.ddc", {
    "package:attribute_directives/src/highlight_directive.dart": src__highlight_directive
  }, '{"version":3,"sourceRoot":"","sources":["highlight_directive.dart"],"names":[],"mappings":";;;;;;;;;;;;IAWS;;;;;;IAGA;;;;;;;YAGgB,iBAAU;gBAAC,mBAAc;iCAAI,iBAAY;iCAAI;;IAAM;;YAGnD,iBAAU;IAAE;iBAElB,KAAY;4BAAL;AACtB,eAAG,MAAM,kBAAgB,GAAG,KAAK;IACnC;;8DAhBwB,EAAG;IAGpB,kBAAY;IAGZ,oBAAc;IANG,SAAG,GAAH,EAAG;EAAC","file":"highlight_directive.ddc.js"}');
  // Exports:
  return {
    src__highlight_directive: src__highlight_directive
  };
});

//# sourceMappingURL=highlight_directive.ddc.js.map
