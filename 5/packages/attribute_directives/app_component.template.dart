// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/auto_id_directive.dart';
import 'src/highlight_directive.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/auto_id_directive.template.dart' as _ref1;
import 'src/highlight_directive.template.dart' as _ref2;

import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'src/highlight_directive.dart' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';
import 'src/auto_id_directive.dart' as import9;

const List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.DivElement _el_4;
  import2.InputElement _el_5;
  import2.InputElement _el_7;
  import2.InputElement _el_9;
  import2.Element _el_11;
  import3.HighlightDirective _HighlightDirective_11_4;
  import2.Element _el_13;
  import3.HighlightDirective _HighlightDirective_13_4;
  import2.Element _el_15;
  import2.Element _el_16;
  import2.Element _el_18;
  import2.Text _text_20;
  import2.Element _el_21;
  import2.Element _el_23;
  import2.Text _text_25;
  import2.Element _el_26;
  import2.Element _el_27;
  import2.Element _el_28;
  import2.Element _el_30;
  import3.HighlightDirective _HighlightDirective_30_4;
  import2.Element _el_32;
  import3.HighlightDirective _HighlightDirective_32_4;
  String _expr_0;
  String _expr_2;
  var _expr_3;
  var _expr_4;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.AppComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    import2.Text _text_1 = new import2.Text('My First Attribute Directive');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'h4', parentRenderNode);
    import2.Text _text_3 = new import2.Text('Pick a highlight color');
    _el_2.append(_text_3);
    _el_4 = createDivAndAppend(doc, parentRenderNode);
    _el_5 = createAndAppend(doc, 'input', _el_4);
    createAttr(_el_5, 'name', 'colors');
    createAttr(_el_5, 'type', 'radio');
    import2.Text _text_6 = new import2.Text('Green');
    _el_4.append(_text_6);
    _el_7 = createAndAppend(doc, 'input', _el_4);
    createAttr(_el_7, 'name', 'colors');
    createAttr(_el_7, 'type', 'radio');
    import2.Text _text_8 = new import2.Text('Yellow');
    _el_4.append(_text_8);
    _el_9 = createAndAppend(doc, 'input', _el_4);
    createAttr(_el_9, 'name', 'colors');
    createAttr(_el_9, 'type', 'radio');
    import2.Text _text_10 = new import2.Text('Cyan');
    _el_4.append(_text_10);
    _el_11 = createAndAppend(doc, 'p', parentRenderNode);
    _HighlightDirective_11_4 = new import3.HighlightDirective(_el_11);
    import2.Text _text_12 = new import2.Text('Highlight me!');
    _el_11.append(_text_12);
    _el_13 = createAndAppend(doc, 'p', parentRenderNode);
    createAttr(_el_13, 'defaultColor', 'violet');
    _HighlightDirective_13_4 = new import3.HighlightDirective(_el_13);
    import2.Text _text_14 = new import2.Text('Highlight me too!');
    _el_13.append(_text_14);
    _el_15 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_16 = createAndAppend(doc, 'h4', parentRenderNode);
    createAttr(_el_16, 'autoId', 'heading-');
    import2.Text _text_17 = new import2.Text('Auto-ID at work');
    _el_16.append(_text_17);
    import9.autoIdDirective(_el_16, 'heading-');
    _el_18 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_19 = new import2.Text('The previous heading has ID ');
    _el_18.append(_text_19);
    _text_20 = new import2.Text('');
    _el_18.append(_text_20);
    _el_21 = createAndAppend(doc, 'h4', parentRenderNode);
    createAttr(_el_21, 'autoId', 'heading-');
    import2.Text _text_22 = new import2.Text('Auto-ID at work, again');
    _el_21.append(_text_22);
    import9.autoIdDirective(_el_21, 'heading-');
    _el_23 = createAndAppend(doc, 'p', parentRenderNode);
    import2.Text _text_24 = new import2.Text('The previous heading has ID ');
    _el_23.append(_text_24);
    _text_25 = new import2.Text('');
    _el_23.append(_text_25);
    _el_26 = createAndAppend(doc, 'hr', parentRenderNode);
    _el_27 = createAndAppend(doc, 'p', parentRenderNode);
    _el_28 = createAndAppend(doc, 'i', _el_27);
    import2.Text _text_29 = new import2.Text('Mouse over the following lines to see fixed highlights');
    _el_28.append(_text_29);
    _el_30 = createAndAppend(doc, 'p', parentRenderNode);
    _HighlightDirective_30_4 = new import3.HighlightDirective(_el_30);
    import2.Text _text_31 = new import2.Text('Highlighted in yellow');
    _el_30.append(_text_31);
    _el_32 = createAndAppend(doc, 'p', parentRenderNode);
    createAttr(_el_32, 'myHighlight', 'orange');
    _HighlightDirective_32_4 = new import3.HighlightDirective(_el_32);
    import2.Text _text_33 = new import2.Text('Highlighted in orange');
    _el_32.append(_text_33);
    _el_5.addEventListener('click', eventHandler1(_handle_click_5_0));
    _el_7.addEventListener('click', eventHandler1(_handle_click_7_0));
    _el_9.addEventListener('click', eventHandler1(_handle_click_9_0));
    _el_11.addEventListener('mouseenter', eventHandler0(_HighlightDirective_11_4.onMouseEnter));
    _el_11.addEventListener('mouseleave', eventHandler0(_HighlightDirective_11_4.onMouseLeave));
    _el_13.addEventListener('mouseenter', eventHandler0(_HighlightDirective_13_4.onMouseEnter));
    _el_13.addEventListener('mouseleave', eventHandler0(_HighlightDirective_13_4.onMouseLeave));
    _el_30.addEventListener('mouseenter', eventHandler0(_HighlightDirective_30_4.onMouseEnter));
    _el_30.addEventListener('mouseleave', eventHandler0(_HighlightDirective_30_4.onMouseLeave));
    _el_32.addEventListener('mouseenter', eventHandler0(_HighlightDirective_32_4.onMouseEnter));
    _el_32.addEventListener('mouseleave', eventHandler0(_HighlightDirective_32_4.onMouseLeave));
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import3.HighlightDirective) && ((11 <= nodeIndex) && (nodeIndex <= 12)))) {
      return _HighlightDirective_11_4;
    }
    if ((identical(token, import3.HighlightDirective) && ((13 <= nodeIndex) && (nodeIndex <= 14)))) {
      return _HighlightDirective_13_4;
    }
    if ((identical(token, import3.HighlightDirective) && ((30 <= nodeIndex) && (nodeIndex <= 31)))) {
      return _HighlightDirective_30_4;
    }
    if ((identical(token, import3.HighlightDirective) && ((32 <= nodeIndex) && (nodeIndex <= 33)))) {
      return _HighlightDirective_32_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.AppComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final local_h1 = _el_16;
    final local_h2 = _el_21;
    final currVal_0 = _ctx.color;
    if (!identical(_expr_0, currVal_0)) {
      _HighlightDirective_11_4.highlightColor = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      (_HighlightDirective_13_4.defaultColor = 'violet');
    }
    final currVal_2 = _ctx.color;
    if (!identical(_expr_2, currVal_2)) {
      _HighlightDirective_13_4.highlightColor = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      (_HighlightDirective_30_4.highlightColor = 'yellow');
    }
    if (firstCheck) {
      (_HighlightDirective_32_4.highlightColor = 'orange');
    }
    final currVal_3 = import7.interpolate0(local_h1.id);
    if (!identical(_expr_3, currVal_3)) {
      _text_20.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import7.interpolate0(local_h2.id);
    if (!identical(_expr_4, currVal_4)) {
      _text_25.text = currVal_4;
      _expr_4 = currVal_4;
    }
  }

  void _handle_click_5_0($event) {
    ctx.color = 'lightgreen';
  }

  void _handle_click_7_0($event) {
    ctx.color = 'yellow';
  }

  void _handle_click_9_0($event) {
    ctx.color = 'cyan';
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import1.AppComponent _AppComponent_0_4;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_4 = new import1.AppComponent();
    _compView_0.create(_AppComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AppComponent>(0, this, rootEl, _AppComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> AppComponentNgFactory = const ComponentFactory<import1.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ngRef.registerComponent(
    AppComponent,
    AppComponentNgFactory,
  );
}
