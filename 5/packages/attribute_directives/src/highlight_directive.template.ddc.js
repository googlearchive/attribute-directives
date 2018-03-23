define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__highlight_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__highlight_directive$46template, {
    /*src__highlight_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__highlight_directive$46template.initReflector = function() {
    if (dart.test(src__highlight_directive$46template._visited)) {
      return;
    }
    src__highlight_directive$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(src__highlight_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/attribute_directives/src/highlight_directive.template.ddc", {
    "package:attribute_directives/src/highlight_directive.template.dart": src__highlight_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["highlight_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,gCAAa;EACrB","file":"highlight_directive.template.ddc.js"}');
  // Exports:
  return {
    src__highlight_directive$46template: src__highlight_directive$46template
  };
});

//# sourceMappingURL=highlight_directive.template.ddc.js.map
