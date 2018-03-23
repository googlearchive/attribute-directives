define(['dart_sdk', 'packages/angular/angular.template'], function(dart_sdk, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__auto_id_directive$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__auto_id_directive$46template, {
    /*src__auto_id_directive$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__auto_id_directive$46template.initReflector = function() {
    if (dart.test(src__auto_id_directive$46template._visited)) {
      return;
    }
    src__auto_id_directive$46template._visited = true;
    angular$46template.initReflector();
  };
  dart.fn(src__auto_id_directive$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/attribute_directives/src/auto_id_directive.template.ddc", {
    "package:attribute_directives/src/auto_id_directive.template.dart": src__auto_id_directive$46template
  }, '{"version":3,"sourceRoot":"","sources":["auto_id_directive.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,gCAAa;EACrB","file":"auto_id_directive.template.ddc.js"}');
  // Exports:
  return {
    src__auto_id_directive$46template: src__auto_id_directive$46template
  };
});

//# sourceMappingURL=auto_id_directive.template.ddc.js.map
