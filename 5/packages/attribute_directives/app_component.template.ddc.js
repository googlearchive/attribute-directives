define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/attribute_directives/src/highlight_directive', 'packages/attribute_directives/src/auto_id_directive', 'packages/attribute_directives/app_component', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/attribute_directives/src/auto_id_directive.template', 'packages/attribute_directives/src/highlight_directive.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, highlight_directive, auto_id_directive, app_component, reflector, angular, auto_id_directive$, highlight_directive$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__highlight_directive = highlight_directive.src__highlight_directive;
  const src__auto_id_directive = auto_id_directive.src__auto_id_directive;
  const app_component$ = app_component.app_component;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__auto_id_directive$46template = auto_id_directive$.src__auto_id_directive$46template;
  const src__highlight_directive$46template = highlight_directive$.src__highlight_directive$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _el_5 = Symbol('_el_5');
  const _el_7 = Symbol('_el_7');
  const _el_9 = Symbol('_el_9');
  const _el_11 = Symbol('_el_11');
  const _HighlightDirective_11_5 = Symbol('_HighlightDirective_11_5');
  const _el_13 = Symbol('_el_13');
  const _HighlightDirective_13_5 = Symbol('_HighlightDirective_13_5');
  const _el_15 = Symbol('_el_15');
  const _el_16 = Symbol('_el_16');
  const _el_18 = Symbol('_el_18');
  const _text_20 = Symbol('_text_20');
  const _el_21 = Symbol('_el_21');
  const _el_23 = Symbol('_el_23');
  const _text_25 = Symbol('_text_25');
  const _el_26 = Symbol('_el_26');
  const _el_27 = Symbol('_el_27');
  const _el_28 = Symbol('_el_28');
  const _el_30 = Symbol('_el_30');
  const _HighlightDirective_30_5 = Symbol('_HighlightDirective_30_5');
  const _el_32 = Symbol('_el_32');
  const _HighlightDirective_32_5 = Symbol('_HighlightDirective_32_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _handle_click_5_0 = Symbol('_handle_click_5_0');
  const _handle_click_7_0 = Symbol('_handle_click_7_0');
  const _handle_click_9_0 = Symbol('_handle_click_9_0');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      let _text_1 = html.Text.new('My First Attribute Directive');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      let _text_3 = html.Text.new('Pick a highlight color');
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_5] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_4]));
      this.createAttr(this[_el_5], 'name', 'colors');
      this.createAttr(this[_el_5], 'type', 'radio');
      let _text_6 = html.Text.new('Green');
      this[_el_4][$append](_text_6);
      this[_el_7] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_4]));
      this.createAttr(this[_el_7], 'name', 'colors');
      this.createAttr(this[_el_7], 'type', 'radio');
      let _text_8 = html.Text.new('Yellow');
      this[_el_4][$append](_text_8);
      this[_el_9] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_4]));
      this.createAttr(this[_el_9], 'name', 'colors');
      this.createAttr(this[_el_9], 'type', 'radio');
      let _text_10 = html.Text.new('Cyan');
      this[_el_4][$append](_text_10);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_HighlightDirective_11_5] = new src__highlight_directive.HighlightDirective.new(this[_el_11]);
      let _text_12 = html.Text.new('Highlight me!');
      this[_el_11][$append](_text_12);
      this[_el_13] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.createAttr(this[_el_13], 'defaultColor', 'violet');
      this[_HighlightDirective_13_5] = new src__highlight_directive.HighlightDirective.new(this[_el_13]);
      let _text_14 = html.Text.new('Highlight me too!');
      this[_el_13][$append](_text_14);
      this[_el_15] = src__core__linker__app_view.createAndAppend(doc, 'hr', parentRenderNode);
      this[_el_16] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      this.createAttr(this[_el_16], 'autoId', 'heading-');
      let _text_17 = html.Text.new('Auto-ID at work');
      this[_el_16][$append](_text_17);
      src__auto_id_directive.autoIdDirective(this[_el_16], 'heading-');
      this[_el_18] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_19 = html.Text.new('The previous heading has ID ');
      this[_el_18][$append](_text_19);
      this[_text_20] = html.Text.new('');
      this[_el_18][$append](this[_text_20]);
      this[_el_21] = src__core__linker__app_view.createAndAppend(doc, 'h4', parentRenderNode);
      this.createAttr(this[_el_21], 'autoId', 'heading-');
      let _text_22 = html.Text.new('Auto-ID at work, again');
      this[_el_21][$append](_text_22);
      src__auto_id_directive.autoIdDirective(this[_el_21], 'heading-');
      this[_el_23] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      let _text_24 = html.Text.new('The previous heading has ID ');
      this[_el_23][$append](_text_24);
      this[_text_25] = html.Text.new('');
      this[_el_23][$append](this[_text_25]);
      this[_el_26] = src__core__linker__app_view.createAndAppend(doc, 'hr', parentRenderNode);
      this[_el_27] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_el_28] = src__core__linker__app_view.createAndAppend(doc, 'i', this[_el_27]);
      let _text_29 = html.Text.new('Mouse over the following lines to see fixed highlights');
      this[_el_28][$append](_text_29);
      this[_el_30] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this[_HighlightDirective_30_5] = new src__highlight_directive.HighlightDirective.new(this[_el_30]);
      let _text_31 = html.Text.new('Highlighted in yellow');
      this[_el_30][$append](_text_31);
      this[_el_32] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.createAttr(this[_el_32], 'myHighlight', 'orange');
      this[_HighlightDirective_32_5] = new src__highlight_directive.HighlightDirective.new(this[_el_32]);
      let _text_33 = html.Text.new('Highlighted in orange');
      this[_el_32][$append](_text_33);
      this[_el_5][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_5_0)));
      this[_el_7][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_7_0)));
      this[_el_9][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_9_0)));
      this[_el_11][$addEventListener]('mouseenter', this.eventHandler0(html.Event, dart.bind(this[_HighlightDirective_11_5], 'onMouseEnter')));
      this[_el_11][$addEventListener]('mouseleave', this.eventHandler0(html.Event, dart.bind(this[_HighlightDirective_11_5], 'onMouseLeave')));
      this[_el_13][$addEventListener]('mouseenter', this.eventHandler0(html.Event, dart.bind(this[_HighlightDirective_13_5], 'onMouseEnter')));
      this[_el_13][$addEventListener]('mouseleave', this.eventHandler0(html.Event, dart.bind(this[_HighlightDirective_13_5], 'onMouseLeave')));
      this[_el_30][$addEventListener]('mouseenter', this.eventHandler0(html.Event, dart.bind(this[_HighlightDirective_30_5], 'onMouseEnter')));
      this[_el_30][$addEventListener]('mouseleave', this.eventHandler0(html.Event, dart.bind(this[_HighlightDirective_30_5], 'onMouseLeave')));
      this[_el_32][$addEventListener]('mouseenter', this.eventHandler0(html.Event, dart.bind(this[_HighlightDirective_32_5], 'onMouseEnter')));
      this[_el_32][$addEventListener]('mouseleave', this.eventHandler0(html.Event, dart.bind(this[_HighlightDirective_32_5], 'onMouseLeave')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_h1 = this[_el_16];
      let local_h2 = this[_el_21];
      let currVal_0 = _ctx.color;
      if (!(this[_expr_0] == currVal_0)) {
        this[_HighlightDirective_11_5].highlightColor = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        this[_HighlightDirective_13_5].defaultColor = 'violet';
      }
      let currVal_2 = _ctx.color;
      if (!(this[_expr_2] == currVal_2)) {
        this[_HighlightDirective_13_5].highlightColor = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (firstCheck) {
        this[_HighlightDirective_30_5].highlightColor = 'yellow';
      }
      if (firstCheck) {
        this[_HighlightDirective_32_5].highlightColor = 'orange';
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(local_h1.id);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_text_20][$text] = core.String._check(currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(local_h2.id);
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_text_25][$text] = core.String._check(currVal_4);
        this[_expr_4] = currVal_4;
      }
    }
    [_handle_click_5_0]($event) {
      this.ctx.color = 'lightgreen';
    }
    [_handle_click_7_0]($event) {
      this.ctx.color = 'yellow';
    }
    [_handle_click_9_0]($event) {
      this.ctx.color = 'cyan';
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_el_9] = null;
    this[_el_11] = null;
    this[_HighlightDirective_11_5] = null;
    this[_el_13] = null;
    this[_HighlightDirective_13_5] = null;
    this[_el_15] = null;
    this[_el_16] = null;
    this[_el_18] = null;
    this[_text_20] = null;
    this[_el_21] = null;
    this[_el_23] = null;
    this[_text_25] = null;
    this[_el_26] = null;
    this[_el_27] = null;
    this[_el_28] = null;
    this[_el_30] = null;
    this[_HighlightDirective_30_5] = null;
    this[_el_32] = null;
    this[_HighlightDirective_32_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-app'));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_5_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_7_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_9_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.InputElement),
    [_el_7]: dart.fieldType(html.InputElement),
    [_el_9]: dart.fieldType(html.InputElement),
    [_el_11]: dart.fieldType(html.Element),
    [_HighlightDirective_11_5]: dart.fieldType(src__highlight_directive.HighlightDirective),
    [_el_13]: dart.fieldType(html.Element),
    [_HighlightDirective_13_5]: dart.fieldType(src__highlight_directive.HighlightDirective),
    [_el_15]: dart.fieldType(html.Element),
    [_el_16]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.Element),
    [_text_20]: dart.fieldType(html.Text),
    [_el_21]: dart.fieldType(html.Element),
    [_el_23]: dart.fieldType(html.Element),
    [_text_25]: dart.fieldType(html.Text),
    [_el_26]: dart.fieldType(html.Element),
    [_el_27]: dart.fieldType(html.Element),
    [_el_28]: dart.fieldType(html.Element),
    [_el_30]: dart.fieldType(html.Element),
    [_HighlightDirective_30_5]: dart.fieldType(src__highlight_directive.HighlightDirective),
    [_el_32]: dart.fieldType(html.Element),
    [_HighlightDirective_32_5]: dart.fieldType(src__highlight_directive.HighlightDirective),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('my-app', app_component$46template.viewFactory_AppComponentHost0, app_component$46template._AppComponentMetadata));
    },
    /*app_component$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__auto_id_directive$46template.initReflector();
    src__highlight_directive$46template.initReflector();
  };
  dart.fn(app_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/attribute_directives/app_component.template.ddc", {
    "package:attribute_directives/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
