define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  app_component.AppComponent = class AppComponent extends core.Object {
    get color() {
      return this[color];
    }
    set color(value) {
      this[color] = value;
    }
  };
  (app_component.AppComponent.new = function() {
    this[color] = null;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const color = Symbol("AppComponent.color");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    color: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/attribute_directives/app_component.ddc", {
    "package:attribute_directives/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;IAWS;;;;;;;;eAAK;EACd","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
