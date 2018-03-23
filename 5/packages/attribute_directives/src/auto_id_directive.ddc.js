define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__auto_id_directive = Object.create(_root);
  let ElementAndStringTovoid = () => (ElementAndStringTovoid = dart.constFn(dart.fnType(dart.void, [html.Element, core.String])))();
  dart.defineLazy(src__auto_id_directive, {
    /*src__auto_id_directive._idCounter*/get _idCounter() {
      return 0;
    },
    set _idCounter(_) {}
  });
  src__auto_id_directive.autoIdDirective = function(el, prefix) {
    el.id = dart.str`${prefix}${(() => {
      let x = src__auto_id_directive._idCounter;
      src__auto_id_directive._idCounter = dart.notNull(x) + 1;
      return x;
    })()}`;
  };
  dart.fn(src__auto_id_directive.autoIdDirective, ElementAndStringTovoid());
  dart.trackLibraries("packages/attribute_directives/src/auto_id_directive.ddc", {
    "package:attribute_directives/src/auto_id_directive.dart": src__auto_id_directive
  }, '{"version":3,"sourceRoot":"","sources":["auto_id_directive.dart"],"names":[],"mappings":";;;;;;;;;;MAGI,iCAAU;YAAG;;;;oDAIf,EAAU,EACV,MAAkC;AAElC,MAAE,GAAG,GAAG,WAAE,MAAM;cAAE,iCAAU;4DAV9B;;;EAWA","file":"auto_id_directive.ddc.js"}');
  // Exports:
  return {
    src__auto_id_directive: src__auto_id_directive
  };
});

//# sourceMappingURL=auto_id_directive.ddc.js.map
