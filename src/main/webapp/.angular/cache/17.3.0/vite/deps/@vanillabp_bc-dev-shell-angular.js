import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-R2NCL2Z6.js";
import {
  Title,
  bootstrapApplication
} from "./chunk-IRCABFDG.js";
import {
  HttpClient,
  HttpClientModule
} from "./chunk-KEYCELQW.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-Z7ZKEN7V.js";
import {
  BaseIcon,
  ConnectedOverlayScrollHandler,
  DomHandler,
  Ripple,
  RippleModule,
  SpinnerIcon
} from "./chunk-JCCC4OP3.js";
import {
  FilterService,
  ObjectUtils,
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  UniqueComponentId,
  zindexutils
} from "./chunk-F3CW2QSA.js";
import {
  CommonModule,
  DOCUMENT,
  HashLocationStrategy,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  PathLocationStrategy,
  ViewportScroller,
  isPlatformBrowser
} from "./chunk-2QXD6YRY.js";
import {
  APP_BOOTSTRAP_LISTENER,
  APP_INITIALIZER,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Compiler,
  Component,
  ConnectableObservable,
  Console,
  ContentChildren,
  Directive,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgModuleFactory$1,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  PendingTasks,
  Renderer2,
  RuntimeError,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __async,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  concat,
  concatMap,
  createEnvironmentInjector,
  defaultIfEmpty,
  defer,
  effect,
  filter,
  finalize,
  first,
  forwardRef,
  from,
  fromPromise,
  inject,
  isInjectable,
  isNgModule,
  isObservable,
  isPromise,
  isStandalone,
  last,
  makeEnvironmentProviders,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  of,
  pipe,
  refCount,
  reflectComponentType,
  runInInjectionContext,
  scan,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-KXTR34PH.js";

// node_modules/@angular/router/fesm2022/router.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = Symbol("RouteTitle");
var ParamsAsMap = class {
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part.startsWith(":");
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return {
    consumed: segments.slice(0, parts.length),
    posParams
  };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i]))
      return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last2(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments))
    return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren)
    return false;
  for (const c in containee.children) {
    if (!container.children[c])
      return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams))
      return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths))
      return false;
    if (containee.hasChildren())
      return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams))
      return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths))
      return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams))
      return false;
    for (const c in containee.children) {
      if (!container.children[c])
        return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current))
      return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams))
      return false;
    if (!container.children[PRIMARY_OUTLET])
      return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  /** @docsNotRequired */
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    this.parent = null;
    Object.values(children).forEach((v) => v.parent = this);
  }
  /** Whether the segment has child segments */
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  /** Number of child segments */
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  /** @docsNotRequired */
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  /** @docsNotRequired */
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length)
    return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = class _UrlSerializer {
  static {
    this.ɵfac = function UrlSerializer_Factory(t) {
      return new (t || _UrlSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UrlSerializer,
      factory: () => (() => new DefaultUrlSerializer())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  /** Parses a url into a `UrlTree` */
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  /** Converts a `UrlTree` into a url */
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  // parse a segment with its matrix parameters
  // ie `name;k1=v1;k2`
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  // Parse a single query parameter `name[=value]`
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  // parse `(a/b//outlet_name:c/d)`
  parseParens(allowPrimary) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName = void 0;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  // Consumes the prefix when it is present and returns whether it has been consumed
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") {
        } else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length)
      return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0)
      break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path))
        return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path))
        return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.type = EventType.NavigationStart;
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.type = EventType.NavigationEnd;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = EventType.NavigationCancel;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationSkipped = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = EventType.NavigationSkipped;
  }
};
var NavigationError = class extends RouterEvent {
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
    this.type = EventType.NavigationError;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.RoutesRecognized;
  }
  /** @docsNotRequired */
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.GuardsCheckStart;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
    this.type = EventType.GuardsCheckEnd;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.ResolveStart;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = EventType.ResolveEnd;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  constructor(route) {
    this.route = route;
    this.type = EventType.RouteConfigLoadStart;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  constructor(route) {
    this.route = route;
    this.type = EventType.RouteConfigLoadEnd;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ChildActivationStart;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ChildActivationEnd;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ActivationStart;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ActivationEnd;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  constructor(routerEvent, position, anchor) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
    this.type = EventType.Scroll;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var RedirectRequest = class {
  constructor(url) {
    this.url = url;
  }
};
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
var OutletContext = class {
  constructor() {
    this.outlet = null;
    this.route = null;
    this.injector = null;
    this.children = new ChildrenOutletContexts();
    this.attachRef = null;
  }
};
var ChildrenOutletContexts = class _ChildrenOutletContexts {
  constructor() {
    this.contexts = /* @__PURE__ */ new Map();
  }
  /** Called when a `RouterOutlet` directive is instantiated */
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  /**
   * Called when a `RouterOutlet` directive is destroyed.
   * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
   * re-created later.
   */
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  /**
   * Called when the corresponding route is deactivated during navigation.
   * Because the component get destroyed, all children outlet are destroyed.
   */
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext();
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
  static {
    this.ɵfac = function ChildrenOutletContexts_Factory(t) {
      return new (t || _ChildrenOutletContexts)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ChildrenOutletContexts,
      factory: _ChildrenOutletContexts.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Tree = class {
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  /**
   * @internal
   */
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  /**
   * @internal
   */
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map((t2) => t2.value) : [];
  }
  /**
   * @internal
   */
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  /**
   * @internal
   */
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2)
      return [];
    const c = p[p.length - 2].children.map((c2) => c2.value);
    return c.filter((cc) => cc !== t);
  }
  /**
   * @internal
   */
  pathFromRoot(t) {
    return findPath(t, this._root).map((s) => s.value);
  }
};
function findNode(value, node) {
  if (value === node.value)
    return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2)
      return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value)
    return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  /** @internal */
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent) {
  const snapshot = createEmptyStateSnapshot(rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  /** @internal */
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  /** The configuration used to match this route. */
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  /** The root of the router state. */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree. */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree. */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree. */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route. */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
    return this._paramMap;
  }
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  /** The resolved route title */
  get title() {
    return this.data?.[RouteTitleKey];
  }
  /** @internal */
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
  }
  /** The root of the router state */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  /** @internal */
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c) => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var RouterOutlet = class _RouterOutlet {
  constructor() {
    this.activated = null;
    this._activatedRoute = null;
    this.name = PRIMARY_OUTLET;
    this.activateEvents = new EventEmitter();
    this.deactivateEvents = new EventEmitter();
    this.attachEvents = new EventEmitter();
    this.detachEvents = new EventEmitter();
    this.parentContexts = inject(ChildrenOutletContexts);
    this.location = inject(ViewContainerRef);
    this.changeDetector = inject(ChangeDetectorRef);
    this.environmentInjector = inject(EnvironmentInjector);
    this.inputBinder = inject(INPUT_BINDER, {
      optional: true
    });
    this.supportsBindingToComponentInputs = true;
  }
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  /** @nodoc */
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  /**
   * @returns The currently activated component instance.
   * @throws An error if the outlet is not activated.
   */
  get component() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector: environmentInjector ?? this.environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
  static {
    this.ɵfac = function RouterOutlet_Factory(t) {
      return new (t || _RouterOutlet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _RouterOutlet,
      selectors: [["router-outlet"]],
      inputs: {
        name: "name"
      },
      outputs: {
        activateEvents: "activate",
        deactivateEvents: "deactivate",
        attachEvents: "attach",
        detachEvents: "detach"
      },
      exportAs: ["outlet"],
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet",
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }]
  });
})();
var OutletInjector = class {
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
    this.__ngOutletInjector = true;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  constructor() {
    this.outletDataSubscriptions = /* @__PURE__ */ new Map();
  }
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  static {
    this.ɵfac = function RoutedComponentInputBinder_Factory(t) {
      return new (t || _RoutedComponentInputBinder)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RoutedComponentInputBinder,
      factory: _RoutedComponentInputBinder.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var ɵEmptyOutletComponent = class _ɵEmptyOutletComponent {
  static {
    this.ɵfac = function ɵEmptyOutletComponent_Factory(t) {
      return new (t || _ɵEmptyOutletComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ɵEmptyOutletComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 0,
      template: function _EmptyOutletComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "router-outlet");
        }
      },
      dependencies: [RouterOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵEmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet></router-outlet>`,
      imports: [RouterOutlet],
      standalone: true
    }]
  }], null, null);
})();
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.redirectTo && (route.component || route.loadComponent)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo && route.canActivate) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and canActivate cannot be used together. Redirects happen before activation so canActivate will never be executed.`);
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), {
    children
  }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = ɵEmptyOutletComponent;
  }
  return c;
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes2, outletName) {
  const sortedConfig = routes2.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes2.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot)
    return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    if (route?._loadedInjector)
      return route._loadedInjector;
    if (route?._injector)
      return route._injector;
  }
  return null;
}
var warnedAboutUnsupportedInputBinding = false;
var activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t) => {
  new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
  return t;
});
var ActivateRoutes = class {
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  // De-activate the child route that are not re-used for the future state
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v) => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c) => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          const injector = getClosestRouteInjector(future.snapshot);
          context.attachRef = null;
          context.route = future;
          context.injector = injector;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0)
    return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
var INITIAL_VALUE = Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || result instanceof UrlTree) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0)
    return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0)
    return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (!isUrlTree(result))
      return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0)
    return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class {
  constructor(segmentGroup) {
    this.segmentGroup = segmentGroup || null;
  }
};
var AbsoluteRedirect = class extends Error {
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
  }
};
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected));
}
var ApplyRedirects = class {
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return of(res);
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        return namedOutletsRedirect(route.redirectTo);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  applyRedirectCommands(segments, redirectTo, posParams) {
    const newTree = this.applyRedirectCreateUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    if (redirectTo.startsWith("/")) {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === "string" && v.startsWith(":");
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s) => s.path.startsWith(":") ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos)
      throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "**") {
    return createWildcardMatchResult(segments);
  }
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res)
    return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s2,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s2,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes2, children) {
  const res = {};
  for (const r of routes2) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes2, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes2) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function isImmediateMatch(route, rawSegment, segments, outlet) {
  if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
    return false;
  }
  return match(rawSegment, route, segments).matched;
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
    this.absoluteRedirectCount = 0;
    this.allowRedirects = true;
  }
  noMatchError(e) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
  }
  recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    return this.match(rootSegmentGroup).pipe(map((children) => {
      const root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, {});
      const rootNode = new TreeNode(root, children);
      const routeState = new RouterStateSnapshot("", rootNode);
      const tree2 = createUrlTreeFromSnapshot(root, [], this.urlTree.queryParams, this.urlTree.fragment);
      tree2.queryParams = this.urlTree.queryParams;
      routeState.url = this.urlSerializer.serialize(tree2);
      this.inheritParamsAndData(routeState._root, null);
      return {
        state: routeState,
        tree: tree2
      };
    }));
  }
  match(rootSegmentGroup) {
    const expanded$ = this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET);
    return expanded$.pipe(catchError((e) => {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }));
  }
  inheritParamsAndData(routeNode, parent) {
    const route = routeNode.value;
    const i = getInherited(route, parent, this.paramsInheritanceStrategy);
    route.params = Object.freeze(i.params);
    route.data = Object.freeze(i.data);
    routeNode.children.forEach((n) => this.inheritParamsAndData(n, route));
  }
  processSegmentGroup(injector, config, segmentGroup, outlet) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup);
    }
    return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true).pipe(map((child) => child instanceof TreeNode ? [child] : []));
  }
  /**
   * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
   * we cannot find a match for _any_ of the children.
   *
   * @param config - The `Routes` to match against
   * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
   *     config.
   */
  processChildren(injector, config, segmentGroup) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    return from(childOutlets).pipe(concatMap((childOutlet) => {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      return this.processSegmentGroup(injector, sortedConfig, child, childOutlet);
    }), scan((children, outletChildren) => {
      children.push(...outletChildren);
      return children;
    }), defaultIfEmpty(null), last(), mergeMap((children) => {
      if (children === null)
        return noMatch$1(segmentGroup);
      const mergedChildren = mergeEmptyPathMatches(children);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        checkOutletNameUniqueness(mergedChildren);
      }
      sortActivatedRouteSnapshots(mergedChildren);
      return of(mergedChildren);
    }));
  }
  processSegment(injector, routes2, segmentGroup, segments, outlet, allowRedirects) {
    return from(routes2).pipe(concatMap((r) => {
      return this.processSegmentAgainstRoute(r._injector ?? injector, routes2, r, segmentGroup, segments, outlet, allowRedirects).pipe(catchError((e) => {
        if (e instanceof NoMatch) {
          return of(null);
        }
        throw e;
      }));
    }), first((x) => !!x), catchError((e) => {
      if (isEmptyError(e)) {
        if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
          return of(new NoLeftoversInUrl());
        }
        return noMatch$1(segmentGroup);
      }
      throw e;
    }));
  }
  processSegmentAgainstRoute(injector, routes2, route, rawSegment, segments, outlet, allowRedirects) {
    if (!isImmediateMatch(route, rawSegment, segments, outlet))
      return noMatch$1(rawSegment);
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes2, route, segments, outlet);
    }
    return noMatch$1(rawSegment);
  }
  expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes2, route, segments, outlet) {
    const {
      matched,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched)
      return noMatch$1(segmentGroup);
    if (route.redirectTo.startsWith("/")) {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const newTree = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
    return this.applyRedirects.lineralizeSegments(route, newTree).pipe(mergeMap((newSegments) => {
      return this.processSegment(injector, routes2, segmentGroup, newSegments.concat(remainingSegments), outlet, false);
    }));
  }
  matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet) {
    const matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
    if (route.path === "**") {
      rawSegment.children = {};
    }
    return matchResult.pipe(switchMap((result) => {
      if (!result.matched) {
        return noMatch$1(rawSegment);
      }
      injector = route._injector ?? injector;
      return this.getChildConfig(injector, route, segments).pipe(switchMap(({
        routes: childConfig
      }) => {
        const childInjector = route._loadedInjector ?? injector;
        const {
          consumedSegments,
          remainingSegments,
          parameters
        } = result;
        const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const {
          segmentGroup,
          slicedSegments
        } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(childInjector, childConfig, segmentGroup).pipe(map((children) => {
            if (children === null) {
              return null;
            }
            return new TreeNode(snapshot, children);
          }));
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
          return of(new TreeNode(snapshot, []));
        }
        const matchedOnOutlet = getOutlet(route) === outlet;
        return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true).pipe(map((child) => {
          return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
        }));
      }));
    }));
  }
  getChildConfig(injector, route, segments) {
    if (route.children) {
      return of({
        routes: route.children,
        injector
      });
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        return of({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
        if (shouldLoadResult) {
          return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
            route._loadedRoutes = cfg.routes;
            route._loadedInjector = cfg.injector;
          }));
        }
        return canLoadFails(route);
      }));
    }
    return of({
      routes: [],
      injector
    });
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET)
      return -1;
    if (b.value.outlet === PRIMARY_OUTLET)
      return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t) => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({
    state: targetSnapshot,
    tree: urlAfterRedirects
  }) => {
    return __spreadProps(__spreadValues({}, t), {
      targetSnapshot,
      urlAfterRedirects
    });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
    futureARS._resolvedData = resolvedData;
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return null;
  }));
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    data[key] = value;
  }))), takeLast(1), mapTo(data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
var TitleStrategy = class _TitleStrategy {
  /**
   * @returns The `title` of the deepest primary route.
   */
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  /**
   * Given an `ActivatedRouteSnapshot`, returns the final value of the
   * `Route.title` property, which can either be a static string or a resolved value.
   */
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
  static {
    this.ɵfac = function TitleStrategy_Factory(t) {
      return new (t || _TitleStrategy)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TitleStrategy,
      factory: () => (() => inject(DefaultTitleStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  constructor(title) {
    super();
    this.title = title;
  }
  /**
   * Sets the title of the browser to the given value.
   *
   * @param title The `pageTitle` from the deepest primary route.
   */
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  static {
    this.ɵfac = function DefaultTitleStrategy_Factory(t) {
      return new (t || _DefaultTitleStrategy)(ɵɵinject(Title));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultTitleStrategy,
      factory: _DefaultTitleStrategy.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  providedIn: "root",
  factory: () => ({})
});
var ROUTES = new InjectionToken(ngDevMode ? "ROUTES" : "");
var RouterConfigLoader = class _RouterConfigLoader {
  constructor() {
    this.componentLoaders = /* @__PURE__ */ new WeakMap();
    this.childrenLoaders = /* @__PURE__ */ new WeakMap();
    this.compiler = inject(Compiler);
  }
  loadComponent(route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return of(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loadRunner = wrapIntoObservable(route.loadComponent()).pipe(map(maybeUnwrapDefaultExport), tap((component) => {
      if (this.onLoadEndListener) {
        this.onLoadEndListener(route);
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
      route._loadedComponent = component;
    }), finalize(() => {
      this.componentLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return of({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
    const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
      this.childrenLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.childrenLoaders.set(route, loader);
    return loader;
  }
  static {
    this.ɵfac = function RouterConfigLoader_Factory(t) {
      return new (t || _RouterConfigLoader)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RouterConfigLoader,
      factory: _RouterConfigLoader.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(route.loadChildren()).pipe(map(maybeUnwrapDefaultExport), mergeMap((t) => {
    if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
      return of(t);
    } else {
      return from(compiler.compileModuleAsync(t));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], {
        optional: true,
        self: true
      }).flat();
    }
    const routes2 = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes2, route.path, requireStandaloneComponents);
    return {
      routes: routes2,
      injector
    };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input) {
  return isWrappedDefaultExport(input) ? input["default"] : input;
}
var UrlHandlingStrategy = class _UrlHandlingStrategy {
  static {
    this.ɵfac = function UrlHandlingStrategy_Factory(t) {
      return new (t || _UrlHandlingStrategy)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UrlHandlingStrategy,
      factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
  static {
    this.ɵfac = function DefaultUrlHandlingStrategy_Factory(t) {
      return new (t || _DefaultUrlHandlingStrategy)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultUrlHandlingStrategy,
      factory: _DefaultUrlHandlingStrategy.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  return injector.get(NgZone).runOutsideAngular(() => {
    if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
      transitionOptions.skipNextTransition = false;
      return Promise.resolve();
    }
    let resolveViewTransitionStarted;
    const viewTransitionStarted = new Promise((resolve) => {
      resolveViewTransitionStarted = resolve;
    });
    const transition2 = document2.startViewTransition(() => {
      resolveViewTransitionStarted();
      return createRenderPromise(injector);
    });
    const {
      onViewTransitionCreated
    } = transitionOptions;
    if (onViewTransitionCreated) {
      runInInjectionContext(injector, () => onViewTransitionCreated({
        transition: transition2,
        from: from2,
        to
      }));
    }
    return viewTransitionStarted;
  });
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender(resolve, {
      injector
    });
  });
}
var NavigationTransitions = class _NavigationTransitions {
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  constructor() {
    this.currentNavigation = null;
    this.currentTransition = null;
    this.lastSuccessfulNavigation = null;
    this.events = new Subject();
    this.transitionAbortSubject = new Subject();
    this.configLoader = inject(RouterConfigLoader);
    this.environmentInjector = inject(EnvironmentInjector);
    this.urlSerializer = inject(UrlSerializer);
    this.rootContexts = inject(ChildrenOutletContexts);
    this.location = inject(Location);
    this.inputBindingEnabled = inject(INPUT_BINDER, {
      optional: true
    }) !== null;
    this.titleStrategy = inject(TitleStrategy);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this.createViewTransition = inject(CREATE_VIEW_TRANSITION, {
      optional: true
    });
    this.navigationId = 0;
    this.afterPreactivation = () => of(void 0);
    this.rootComponentType = null;
    const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
    const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    this.transitions?.next(__spreadProps(__spreadValues(__spreadValues({}, this.transitions.value), request), {
      id
    }));
  }
  setupNavigations(router, initialUrlTree, initialRouterState) {
    this.transitions = new BehaviorSubject({
      id: 0,
      currentUrlTree: initialUrlTree,
      currentRawUrl: initialUrlTree,
      extractedUrl: this.urlHandlingStrategy.extract(initialUrlTree),
      urlAfterRedirects: this.urlHandlingStrategy.extract(initialUrlTree),
      rawUrl: initialUrlTree,
      extras: {},
      resolve: null,
      reject: null,
      promise: Promise.resolve(true),
      source: IMPERATIVE_NAVIGATION,
      restoredState: null,
      currentSnapshot: initialRouterState.snapshot,
      targetSnapshot: null,
      currentRouterState: initialRouterState,
      targetRouterState: null,
      guards: {
        canActivateChecks: [],
        canDeactivateChecks: []
      },
      guardsResult: null
    });
    return this.transitions.pipe(
      filter((t) => t.id !== 0),
      // Extract URL
      map((t) => __spreadProps(__spreadValues({}, t), {
        extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
      })),
      // Using switchMap so we cancel executing navigations when a new one comes in
      switchMap((overallTransitionState) => {
        let completed = false;
        let errored = false;
        return of(overallTransitionState).pipe(
          switchMap((t) => {
            if (this.navigationId > overallTransitionState.id) {
              const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
              return EMPTY;
            }
            this.currentTransition = overallTransitionState;
            this.currentNavigation = {
              id: t.id,
              initialUrl: t.rawUrl,
              extractedUrl: t.extractedUrl,
              trigger: t.source,
              extras: t.extras,
              previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              })
            };
            const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
            const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
            if (!urlTransition && onSameUrlNavigation !== "reload") {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
              t.resolve(null);
              return EMPTY;
            }
            if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
              return of(t).pipe(
                // Fire NavigationStart event
                switchMap((t2) => {
                  const transition2 = this.transitions?.getValue();
                  this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
                  if (transition2 !== this.transitions?.getValue()) {
                    return EMPTY;
                  }
                  return Promise.resolve(t2);
                }),
                // Recognize
                recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                // Update URL if in `eager` update mode
                tap((t2) => {
                  overallTransitionState.targetSnapshot = t2.targetSnapshot;
                  overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
                  this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
                    finalUrl: t2.urlAfterRedirects
                  });
                  const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(routesRecognized);
                })
              );
            } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
              const {
                id,
                extractedUrl,
                source,
                restoredState,
                extras
              } = t;
              const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
              this.events.next(navStart);
              const targetSnapshot = createEmptyState(this.rootComponentType).snapshot;
              this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                targetSnapshot,
                urlAfterRedirects: extractedUrl,
                extras: __spreadProps(__spreadValues({}, extras), {
                  skipLocationChange: false,
                  replaceUrl: false
                })
              });
              this.currentNavigation.finalUrl = extractedUrl;
              return of(overallTransitionState);
            } else {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
              t.resolve(null);
              return EMPTY;
            }
          }),
          // --- GUARDS ---
          tap((t) => {
            const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
            this.events.next(guardsStart);
          }),
          map((t) => {
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
            });
            return overallTransitionState;
          }),
          checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
          tap((t) => {
            overallTransitionState.guardsResult = t.guardsResult;
            if (isUrlTree(t.guardsResult)) {
              throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
            }
            const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.events.next(guardsEnd);
          }),
          filter((t) => {
            if (!t.guardsResult) {
              this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
              return false;
            }
            return true;
          }),
          // --- RESOLVE ---
          switchTap((t) => {
            if (t.guards.canActivateChecks.length) {
              return of(t).pipe(tap((t2) => {
                const resolveStart = new ResolveStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                this.events.next(resolveStart);
              }), switchMap((t2) => {
                let dataResolved = false;
                return of(t2).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                  next: () => dataResolved = true,
                  complete: () => {
                    if (!dataResolved) {
                      this.cancelNavigationTransition(t2, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
                    }
                  }
                }));
              }), tap((t2) => {
                const resolveEnd = new ResolveEnd(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                this.events.next(resolveEnd);
              }));
            }
            return void 0;
          }),
          // --- LOAD COMPONENTS ---
          switchTap((t) => {
            const loadComponents = (route) => {
              const loaders = [];
              if (route.routeConfig?.loadComponent && !route.routeConfig._loadedComponent) {
                loaders.push(this.configLoader.loadComponent(route.routeConfig).pipe(tap((loadedComponent) => {
                  route.component = loadedComponent;
                }), map(() => void 0)));
              }
              for (const child of route.children) {
                loaders.push(...loadComponents(child));
              }
              return loaders;
            };
            return combineLatest(loadComponents(t.targetSnapshot.root)).pipe(defaultIfEmpty(null), take(1));
          }),
          switchTap(() => this.afterPreactivation()),
          switchMap(() => {
            const {
              currentSnapshot,
              targetSnapshot
            } = overallTransitionState;
            const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
            return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
          }),
          map((t) => {
            const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              targetRouterState
            });
            this.currentNavigation.targetRouterState = targetRouterState;
            return overallTransitionState;
          }),
          tap(() => {
            this.events.next(new BeforeActivateRoutes());
          }),
          activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
          // Ensure that if some observable used to drive the transition doesn't
          // complete, the navigation still finalizes This should never happen, but
          // this is done as a safety measure to avoid surfacing this error (#49567).
          take(1),
          tap({
            next: (t) => {
              completed = true;
              this.lastSuccessfulNavigation = this.currentNavigation;
              this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
              this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
              t.resolve(true);
            },
            complete: () => {
              completed = true;
            }
          }),
          // There used to be a lot more logic happening directly within the
          // transition Observable. Some of this logic has been refactored out to
          // other places but there may still be errors that happen there. This gives
          // us a way to cancel the transition from the outside. This may also be
          // required in the future to support something like the abort signal of the
          // Navigation API where the navigation gets aborted from outside the
          // transition.
          takeUntil(this.transitionAbortSubject.pipe(tap((err) => {
            throw err;
          }))),
          finalize(() => {
            if (!completed && !errored) {
              const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
            }
            if (this.currentTransition?.id === overallTransitionState.id) {
              this.currentNavigation = null;
              this.currentTransition = null;
            }
          }),
          catchError((e) => {
            errored = true;
            if (isNavigationCancelingError(e)) {
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
              if (!isRedirectingNavigationCancelingError(e)) {
                overallTransitionState.resolve(false);
              } else {
                this.events.next(new RedirectRequest(e.url));
              }
            } else {
              this.events.next(new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0));
              try {
                overallTransitionState.resolve(router.errorHandler(e));
              } catch (ee) {
                if (this.options.resolveNavigationPromiseOnError) {
                  overallTransitionState.resolve(false);
                } else {
                  overallTransitionState.reject(ee);
                }
              }
            }
            return EMPTY;
          })
        );
      })
    );
  }
  cancelNavigationTransition(t, reason, code) {
    const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
    this.events.next(navCancel);
    t.resolve(false);
  }
  /**
   * @returns Whether we're navigating to somewhere that is not what the Router is
   * currently set to.
   */
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  /**
   * @returns Whether we're updating the browser URL to something new (navigation is going
   * to somewhere not displayed in the URL bar and we will update the URL
   * bar if navigation succeeds).
   */
  isUpdatedBrowserUrl() {
    const extractedBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    return extractedBrowserUrl.toString() !== this.currentTransition?.extractedUrl.toString() && !this.currentTransition?.extras.skipLocationChange;
  }
  static {
    this.ɵfac = function NavigationTransitions_Factory(t) {
      return new (t || _NavigationTransitions)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NavigationTransitions,
      factory: _NavigationTransitions.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var RouteReuseStrategy = class _RouteReuseStrategy {
  static {
    this.ɵfac = function RouteReuseStrategy_Factory(t) {
      return new (t || _RouteReuseStrategy)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RouteReuseStrategy,
      factory: () => (() => inject(DefaultRouteReuseStrategy))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route, detachedTree) {
  }
  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route) {
    return false;
  }
  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
};
var DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultRouteReuseStrategy_BaseFactory;
      return function DefaultRouteReuseStrategy_Factory(t) {
        return (ɵDefaultRouteReuseStrategy_BaseFactory || (ɵDefaultRouteReuseStrategy_BaseFactory = ɵɵgetInheritedFactory(_DefaultRouteReuseStrategy)))(t || _DefaultRouteReuseStrategy);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DefaultRouteReuseStrategy,
      factory: _DefaultRouteReuseStrategy.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StateManager = class _StateManager {
  static {
    this.ɵfac = function StateManager_Factory(t) {
      return new (t || _StateManager)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StateManager,
      factory: () => (() => inject(HistoryStateManager))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var HistoryStateManager = class _HistoryStateManager extends StateManager {
  constructor() {
    super(...arguments);
    this.location = inject(Location);
    this.urlSerializer = inject(UrlSerializer);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    this.currentUrlTree = new UrlTree();
    this.rawUrlTree = this.currentUrlTree;
    this.currentPageId = 0;
    this.lastSuccessfulId = -1;
    this.routerState = createEmptyState(null);
    this.stateMemento = this.createStateMemento();
  }
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  restoredState() {
    return this.location.getState();
  }
  /**
   * The ɵrouterPageId of whatever page is currently active in the browser history. This is
   * important for computing the target page id for new navigations because we need to ensure each
   * page id in the browser history is 1 more than the previous entry.
   */
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
  }
  getRouterState() {
    return this.routerState;
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        listener(event["url"], event.state);
      }
    });
  }
  handleRouterEvent(e, currentTransition) {
    if (e instanceof NavigationStart) {
      this.stateMemento = this.createStateMemento();
    } else if (e instanceof NavigationSkipped) {
      this.rawUrlTree = currentTransition.initialUrl;
    } else if (e instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          const rawUrl = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
          this.setBrowserUrl(rawUrl, currentTransition);
        }
      }
    } else if (e instanceof BeforeActivateRoutes) {
      this.currentUrlTree = currentTransition.finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
      this.routerState = currentTransition.targetRouterState;
      if (this.urlUpdateStrategy === "deferred") {
        if (!currentTransition.extras.skipLocationChange) {
          this.setBrowserUrl(this.rawUrlTree, currentTransition);
        }
      }
    } else if (e instanceof NavigationCancel && (e.code === NavigationCancellationCode.GuardRejected || e.code === NavigationCancellationCode.NoDataFromResolver)) {
      this.restoreHistory(currentTransition);
    } else if (e instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e instanceof NavigationEnd) {
      this.lastSuccessfulId = e.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(url, transition2) {
    const path = this.urlSerializer.serialize(url);
    if (this.location.isCurrentPathEqualTo(path) || !!transition2.extras.replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const state = __spreadValues(__spreadValues({}, transition2.extras.state), this.generateNgRouterState(transition2.id, currentBrowserPageId));
      this.location.replaceState(path, "", state);
    } else {
      const state = __spreadValues(__spreadValues({}, transition2.extras.state), this.generateNgRouterState(transition2.id, this.browserPageId + 1));
      this.location.go(path, "", state);
    }
  }
  /**
   * Performs the necessary rollback action to restore the browser URL to the
   * state before the transition.
   */
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.currentUrlTree === navigation.finalUrl && targetPagePosition === 0) {
        this.resetState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else {
      }
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetState(navigation) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, navigation.finalUrl ?? this.rawUrlTree);
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId) {
    if (this.canceledNavigationResolution === "computed") {
      return {
        navigationId,
        ɵrouterPageId: routerPageId
      };
    }
    return {
      navigationId
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵHistoryStateManager_BaseFactory;
      return function HistoryStateManager_Factory(t) {
        return (ɵHistoryStateManager_BaseFactory || (ɵHistoryStateManager_BaseFactory = ɵɵgetInheritedFactory(_HistoryStateManager)))(t || _HistoryStateManager);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HistoryStateManager,
      factory: _HistoryStateManager.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NavigationResult;
(function(NavigationResult2) {
  NavigationResult2[NavigationResult2["COMPLETE"] = 0] = "COMPLETE";
  NavigationResult2[NavigationResult2["FAILED"] = 1] = "FAILED";
  NavigationResult2[NavigationResult2["REDIRECTING"] = 2] = "REDIRECTING";
})(NavigationResult || (NavigationResult = {}));
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return NavigationResult.COMPLETE;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? NavigationResult.REDIRECTING : NavigationResult.FAILED;
  }), filter((result) => result !== NavigationResult.REDIRECTING), take(1)).subscribe(() => {
    action();
  });
}
function defaultErrorHandler(error) {
  throw error;
}
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
var Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  /**
   * An event stream for routing events.
   */
  get events() {
    return this._events;
  }
  /**
   * The current state of routing in this NgModule.
   */
  get routerState() {
    return this.stateManager.getRouterState();
  }
  constructor() {
    this.disposed = false;
    this.isNgZoneEnabled = false;
    this.console = inject(Console);
    this.stateManager = inject(StateManager);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.pendingTasks = inject(PendingTasks);
    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    this.navigationTransitions = inject(NavigationTransitions);
    this.urlSerializer = inject(UrlSerializer);
    this.location = inject(Location);
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this._events = new Subject();
    this.errorHandler = this.options.errorHandler || defaultErrorHandler;
    this.navigated = false;
    this.routeReuseStrategy = inject(RouteReuseStrategy);
    this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    this.config = inject(ROUTES, {
      optional: true
    })?.flat() ?? [];
    this.componentInputBindingEnabled = !!inject(INPUT_BINDER, {
      optional: true
    });
    this.eventsSubscription = new Subscription();
    this.isNgZoneEnabled = inject(NgZone) instanceof NgZone && NgZone.isInAngularZone();
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
      error: (e) => {
        this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
      }
    });
    this.subscribeToNavigationEvents();
  }
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = this.navigationTransitions.currentNavigation;
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e, currentNavigation);
          if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e instanceof NavigationEnd) {
            this.navigated = true;
          } else if (e instanceof RedirectRequest) {
            const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
            const extras = {
              // Persist transient navigation info from the original navigation request.
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              // The URL is already updated at this point if we have 'eager' URL
              // updates or if the navigation was triggered by the browser (back
              // button, URL bar, etc). We want to replace that item in history
              // if the navigation is rejected.
              replaceUrl: this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            };
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e)) {
          this._events.next(e);
        }
      } catch (e2) {
        this.navigationTransitions.transitionAbortSubject.next(e2);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  /** @internal */
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  /**
   * Sets up the location change listener and performs the initial navigation.
   */
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
    }
  }
  /**
   * Sets up the location change listener. This listener detects navigations triggered from outside
   * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
   * navigation so that the correct events, guards, etc. are triggered.
   */
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state) => {
      setTimeout(() => {
        this.navigateToSyncWithBrowser(url, "popstate", state);
      }, 0);
    });
  }
  /**
   * Schedules a router navigation to synchronize Router state with the browser state.
   *
   * This is done as a response to a popstate event and the initial navigation. These
   * two scenarios represent times when the browser URL/state has been updated and
   * the Router needs to respond to ensure its internal state matches.
   */
  navigateToSyncWithBrowser(url, source, state) {
    const extras = {
      replaceUrl: true
    };
    const restoredState = state?.navigationId ? state : null;
    if (state) {
      const stateCopy = __spreadValues({}, state);
      delete stateCopy.navigationId;
      delete stateCopy.ɵrouterPageId;
      if (Object.keys(stateCopy).length !== 0) {
        extras.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(url);
    this.scheduleNavigation(urlTree, source, restoredState, extras);
  }
  /** The current URL. */
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  /**
   * Returns the current `Navigation` object when the router is navigating,
   * and `null` when idle.
   */
  getCurrentNavigation() {
    return this.navigationTransitions.currentNavigation;
  }
  /**
   * The `Navigation` object of the most recent navigation to succeed and `null` if there
   *     has not been a successful navigation yet.
   */
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  /**
   * Resets the route configuration used for navigation and generating links.
   *
   * @param config The route array for the new configuration.
   *
   * @usageNotes
   *
   * ```
   * router.resetConfig([
   *  { path: 'team/:id', component: TeamCmp, children: [
   *    { path: 'simple', component: SimpleCmp },
   *    { path: 'user/:name', component: UserCmp }
   *  ]}
   * ]);
   * ```
   */
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  /** @nodoc */
  ngOnDestroy() {
    this.dispose();
  }
  /** Disposes of the router. */
  dispose() {
    this.navigationTransitions.complete();
    if (this.nonRouterCurrentEntryChangeSubscription) {
      this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
      this.nonRouterCurrentEntryChangeSubscription = void 0;
    }
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  /**
   * Appends URL segments to the current URL tree to create a new URL tree.
   *
   * @param commands An array of URL fragments with which to construct the new URL tree.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
   * property of the options object, if supplied.
   * @param navigationExtras Options that control the navigation strategy.
   * @returns The new URL tree.
   *
   * @usageNotes
   *
   * ```
   * // create /team/33/user/11
   * router.createUrlTree(['/team', 33, 'user', 11]);
   *
   * // create /team/33;expand=true/user/11
   * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
   *
   * // you can collapse static segments like this (this works only with the first passed-in value):
   * router.createUrlTree(['/team/33/user', userId]);
   *
   * // If the first segment can contain slashes, and you do not want the router to split it,
   * // you can do the following:
   * router.createUrlTree([{segmentPath: '/one/two'}]);
   *
   * // create /team/33/(user/11//right:chat)
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
   *
   * // remove the right secondary node
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
   *
   * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
   *
   * // navigate to /team/33/user/11/details
   * router.createUrlTree(['details'], {relativeTo: route});
   *
   * // navigate to /team/33/user/22
   * router.createUrlTree(['../22'], {relativeTo: route});
   *
   * // navigate to /team/44/user/22
   * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
   *
   * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
   * tree should be created relative to the root.
   * ```
   */
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q = null;
    switch (queryParamsHandling) {
      case "merge":
        q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q = this.currentUrlTree.queryParams;
        break;
      default:
        q = queryParams || null;
    }
    if (q !== null) {
      q = this.removeEmptyProps(q);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e) {
      if (typeof commands[0] !== "string" || !commands[0].startsWith("/")) {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
  }
  /**
   * Navigates to a view using an absolute route path.
   *
   * @param url An absolute path for a defined route. The function does not apply any delta to the
   *     current URL.
   * @param extras An object containing properties that modify the navigation strategy.
   *
   * @returns A Promise that resolves to 'true' when navigation succeeds,
   * to 'false' when navigation fails, or is rejected on error.
   *
   * @usageNotes
   *
   * The following calls request navigation to an absolute path.
   *
   * ```
   * router.navigateByUrl("/team/33/user/11");
   *
   * // Navigate without updating the URL
   * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
   * ```
   *
   * @see [Routing and Navigation guide](guide/router)
   *
   */
  navigateByUrl(url, extras = {
    skipLocationChange: false
  }) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (this.isNgZoneEnabled && !NgZone.isInAngularZone()) {
        this.console.warn(`Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?`);
      }
    }
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
  }
  /**
   * Navigate based on the provided array of commands and a starting point.
   * If no starting route is provided, the navigation is absolute.
   *
   * @param commands An array of URL fragments with which to construct the target URL.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
   * of the options object, if supplied.
   * @param extras An options object that determines how the URL should be constructed or
   *     interpreted.
   *
   * @returns A Promise that resolves to `true` when navigation succeeds, or `false` when navigation
   *     fails. The Promise is rejected when an error occurs if `resolveNavigationPromiseOnError` is
   * not `true`.
   *
   * @usageNotes
   *
   * The following calls request navigation to a dynamic route path relative to the current URL.
   *
   * ```
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
   *
   * // Navigate without updating the URL, overriding the default behavior
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
   * ```
   *
   * @see [Routing and Navigation guide](guide/router)
   *
   */
  navigate(commands, extras = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
  }
  /** Serializes a `UrlTree` into a string */
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  /** Parses a string into a `UrlTree` */
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch {
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = matchOptions;
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (value !== null && value !== void 0) {
        result[key] = value;
      }
      return result;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch((e) => {
      return Promise.reject(e);
    });
  }
  static {
    this.ɵfac = function Router_Factory(t) {
      return new (t || _Router)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Router,
      factory: _Router.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
var RouterLink = class _RouterLink {
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    this.href = null;
    this.commands = null;
    this.onChanges = new Subject();
    this.preserveFragment = false;
    this.skipLocationChange = false;
    this.replaceUrl = false;
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area";
    if (this.isAnchorElement) {
      this.subscription = router.events.subscribe((s) => {
        if (s instanceof NavigationEnd) {
          this.updateHref();
        }
      });
    } else {
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  /**
   * Modifies the tab index if there was not a tabindex attribute on the element during
   * instantiation.
   */
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.isAnchorElement) {
      this.updateHref();
    }
    this.onChanges.next(this);
  }
  /**
   * Commands to pass to {@link Router#createUrlTree}.
   *   - **array**: commands to pass to {@link Router#createUrlTree}.
   *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
   *   - **null|undefined**: effectively disables the `routerLink`
   * @see {@link Router#createUrlTree}
   */
  set routerLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
      this.setTabIndexIfNotOnNativeEl("0");
    } else {
      this.commands = null;
      this.setTabIndexIfNotOnNativeEl(null);
    }
  }
  /** @nodoc */
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this.urlTree;
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras);
    return !this.isAnchorElement;
  }
  /** @nodoc */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  updateHref() {
    const urlTree = this.urlTree;
    this.href = urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) : null;
    const sanitizedValue = this.href === null ? null : (
      // This class represents a directive that can be added to both `<a>` elements,
      // as well as other elements. As a result, we can't define security context at
      // compile time. So the security context is deferred to runtime.
      // The `ɵɵsanitizeUrlOrResourceUrl` selects the necessary sanitizer function
      // based on the tag and property names. The logic mimics the one from
      // `packages/compiler/src/schema/dom_security_schema.ts`, which is used at compile time.
      //
      // Note: we should investigate whether we can switch to using `@HostBinding('attr.href')`
      // instead of applying a value via a renderer, after a final merge of the
      // `RouterLinkWithHref` directive.
      ɵɵsanitizeUrlOrResourceUrl(this.href, this.el.nativeElement.tagName.toLowerCase(), "href")
    );
    this.applyAttributeValue("href", sanitizedValue);
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  get urlTree() {
    if (this.commands === null) {
      return null;
    }
    return this.router.createUrlTree(this.commands, {
      // If the `relativeTo` input is not defined, we want to use `this.route` by default.
      // Otherwise, we should use the value provided by the user in the input.
      relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: this.preserveFragment
    });
  }
  static {
    this.ɵfac = function RouterLink_Factory(t) {
      return new (t || _RouterLink)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵinjectAttribute("tabindex"), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocationStrategy));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _RouterLink,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function RouterLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function RouterLink_click_HostBindingHandler($event) {
            return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
          });
        }
        if (rf & 2) {
          ɵɵattribute("target", ctx.target);
        }
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        info: "info",
        relativeTo: "relativeTo",
        preserveFragment: [InputFlags.HasDecoratorInputTransform, "preserveFragment", "preserveFragment", booleanAttribute],
        skipLocationChange: [InputFlags.HasDecoratorInputTransform, "skipLocationChange", "skipLocationChange", booleanAttribute],
        replaceUrl: [InputFlags.HasDecoratorInputTransform, "replaceUrl", "replaceUrl", booleanAttribute],
        routerLink: "routerLink"
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      standalone: true
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var RouterLinkActive = class _RouterLinkActive {
  get isActive() {
    return this._isActive;
  }
  constructor(router, element, renderer, cdr, link) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.link = link;
    this.classes = [];
    this._isActive = false;
    this.routerLinkActiveOptions = {
      exact: false
    };
    this.isActiveChange = new EventEmitter();
    this.routerEventsSubscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  /** @nodoc */
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes.filter((c) => !!c);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this.update();
  }
  /** @nodoc */
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated)
      return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : (
      // While the types should disallow `undefined` here, it's possible without strict inputs
      this.routerLinkActiveOptions.exact || false
    );
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? router.isActive(urlTree, options) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
  static {
    this.ɵfac = function RouterLinkActive_Factory(t) {
      return new (t || _RouterLinkActive)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(RouterLink, 8));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _RouterLinkActive,
      selectors: [["", "routerLinkActive", ""]],
      contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, RouterLink, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.links = _t);
        }
      },
      inputs: {
        routerLinkActiveOptions: "routerLinkActiveOptions",
        ariaCurrentWhenActive: "ariaCurrentWhenActive",
        routerLinkActive: "routerLinkActive"
      },
      outputs: {
        isActiveChange: "isActiveChange"
      },
      exportAs: ["routerLinkActive"],
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive",
      standalone: true
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  return !!options.paths;
}
var PreloadingStrategy = class {
};
var PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
  static {
    this.ɵfac = function PreloadAllModules_Factory(t) {
      return new (t || _PreloadAllModules)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PreloadAllModules,
      factory: _PreloadAllModules.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
  static {
    this.ɵfac = function NoPreloading_Factory(t) {
      return new (t || _NoPreloading)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NoPreloading,
      factory: _NoPreloading.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterPreloader = class _RouterPreloader {
  constructor(router, compiler, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  processRoutes(injector, routes2) {
    const res = [];
    for (const route of routes2) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, `Route: ${route.path}`);
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = this.loader.loadChildren(injector, route);
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
  static {
    this.ɵfac = function RouterPreloader_Factory(t) {
      return new (t || _RouterPreloader)(ɵɵinject(Router), ɵɵinject(Compiler), ɵɵinject(EnvironmentInjector), ɵɵinject(PreloadingStrategy), ɵɵinject(RouterConfigLoader));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RouterPreloader,
      factory: _RouterPreloader.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: Compiler
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken("");
var RouterScroller = class _RouterScroller {
  /** @nodoc */
  constructor(urlSerializer, transitions, viewportScroller, zone, options = {}) {
    this.urlSerializer = urlSerializer;
    this.transitions = transitions;
    this.viewportScroller = viewportScroller;
    this.zone = zone;
    this.options = options;
    this.lastId = 0;
    this.lastSource = "imperative";
    this.restoredId = 0;
    this.store = {};
    options.scrollPositionRestoration ||= "disabled";
    options.anchorScrolling ||= "disabled";
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e.navigationTrigger;
        this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
      } else if (e instanceof NavigationEnd) {
        this.lastId = e.id;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment);
      } else if (e instanceof NavigationSkipped && e.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (!(e instanceof Scroll))
        return;
      if (e.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0]);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e.position);
        }
      } else {
        if (e.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.zone.run(() => {
          this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor));
        });
      }, 0);
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
  static {
    this.ɵfac = function RouterScroller_Factory(t) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RouterScroller,
      factory: _RouterScroller.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: UrlSerializer
  }, {
    type: NavigationTransitions
  }, {
    type: ViewportScroller
  }, {
    type: NgZone
  }, {
    type: void 0
  }], null);
})();
function provideRouter(routes2, ...features) {
  return makeEnvironmentProviders([{
    provide: ROUTES,
    multi: true,
    useValue: routes2
  }, typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map((feature) => feature.ɵproviders)]);
}
function rootRoute(router) {
  return router.routerState.root;
}
function routerFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken("", {
  providedIn: "root",
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, InjectFlags.Optional)?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, InjectFlags.Optional)?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  providedIn: "root",
  factory: () => 1
  /* InitialNavigation.EnabledNonBlocking */
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: INITIAL_NAVIGATION,
    useValue: 0
    /* InitialNavigation.EnabledBlocking */
  }, {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [Injector],
    useFactory: (injector) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
      return () => {
        return locationInitialized.then(() => {
          return new Promise((resolve) => {
            const router = injector.get(Router);
            const bootstrapDone = injector.get(BOOTSTRAP_DONE);
            afterNextNavigation(router, () => {
              resolve(true);
            });
            injector.get(NavigationTransitions).afterPreactivation = () => {
              resolve(true);
              return bootstrapDone.closed ? of(void 0) : bootstrapDone;
            };
            router.initialNavigation();
          });
        });
      };
    }
  }];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [{
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: () => {
      const router = inject(Router);
      return () => {
        router.setUpLocationChangeListener();
      };
    }
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 2
    /* InitialNavigation.Disabled */
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e) => {
          console.group?.(`Router Event: ${e.constructor.name}`);
          console.log(stringifyEvent(e));
          console.log(e);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, ɵEmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "ROUTER_FORROOT_GUARD");
var ROUTER_PROVIDERS = [
  Location,
  {
    provide: UrlSerializer,
    useClass: DefaultUrlSerializer
  },
  Router,
  ChildrenOutletContexts,
  {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  },
  RouterConfigLoader,
  // Only used to warn when `provideRoutes` is used without `RouterModule` or `provideRouter`. Can
  // be removed when `provideRoutes` is removed.
  typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : []
];
var RouterModule = class _RouterModule {
  constructor(guard) {
  }
  /**
   * Creates and configures a module with all the router providers and directives.
   * Optionally sets up an application listener to perform an initial navigation.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```
   * @NgModule({
   *   imports: [RouterModule.forRoot(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the application.
   * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
   * @return The new `NgModule`.
   *
   */
  static forRoot(routes2, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().ɵproviders : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }, {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard,
        deps: [[Router, new Optional(), new SkipSelf()]]
      }, {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).ɵproviders : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().ɵproviders : [], config?.enableViewTransitions ? withViewTransitions().ɵproviders : [], provideRouterInitializer()]
    };
  }
  /**
   * Creates a module with all the router directives and a provider registering routes,
   * without creating a new Router service.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```
   * @NgModule({
   *   imports: [RouterModule.forChild(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the submodule.
   * @return The new NgModule.
   *
   */
  static forChild(routes2) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }]
    };
  }
  static {
    this.ɵfac = function RouterModule_Factory(t) {
      return new (t || _RouterModule)(ɵɵinject(ROUTER_FORROOT_GUARD, 8));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RouterModule,
      imports: [RouterOutlet, RouterLink, RouterLinkActive, ɵEmptyOutletComponent],
      exports: [RouterOutlet, RouterLink, RouterLinkActive, ɵEmptyOutletComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ROUTER_FORROOT_GUARD]
    }]
  }], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const zone = inject(NgZone);
      const config = inject(ROUTER_CONFIGURATION);
      const transitions = inject(NavigationTransitions);
      const urlSerializer = inject(UrlSerializer);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(urlSerializer, transitions, viewportScroller, zone, config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard(router) {
  if ((typeof ngDevMode === "undefined" || ngDevMode) && router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().ɵproviders : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().ɵproviders : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [
    // ROUTER_INITIALIZER token should be removed. It's public API but shouldn't be. We can just
    // have `getBootstrapListener` directly attached to APP_BOOTSTRAP_LISTENER.
    {
      provide: ROUTER_INITIALIZER,
      useFactory: getBootstrapListener
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useExisting: ROUTER_INITIALIZER
    }
  ];
}
var VERSION = new Version("17.3.3");

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus {
  host;
  constructor(host) {
    this.host = host;
  }
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  focused = false;
  ngAfterContentChecked() {
    if (!this.focused) {
      if (this.autofocus) {
        setTimeout(() => {
          const focusableElements = DomHandler.getFocusableElements(this.host.nativeElement);
          if (focusableElements.length === 0) {
            this.host.nativeElement.focus();
          }
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
          this.focused = true;
        });
      }
    }
  }
  static ɵfac = function AutoFocus_Factory(t) {
    return new (t || _AutoFocus)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      autofocus: "autofocus"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }], {
    autofocus: [{
      type: Input
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static ɵfac = function AutoFocusModule_Factory(t) {
    return new (t || _AutoFocusModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AutoFocusModule,
    declarations: [AutoFocus],
    imports: [CommonModule],
    exports: [AutoFocus]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [AutoFocus],
      declarations: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-overlay.mjs
var _c0 = ["overlay"];
var _c1 = ["content"];
var _c2 = ["*"];
var _c3 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({
  "p-overlay p-component": true,
  "p-overlay-modal p-component-overlay p-component-overlay-enter": a0,
  "p-overlay-center": a1,
  "p-overlay-top": a2,
  "p-overlay-top-start": a3,
  "p-overlay-top-end": a4,
  "p-overlay-bottom": a5,
  "p-overlay-bottom-start": a6,
  "p-overlay-bottom-end": a7,
  "p-overlay-left": a8,
  "p-overlay-left-start": a9,
  "p-overlay-left-end": a10,
  "p-overlay-right": a11,
  "p-overlay-right-start": a12,
  "p-overlay-right-end": a13
});
var _c4 = (a0, a1, a2) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1,
  transform: a2
});
var _c5 = (a0) => ({
  value: "visible",
  params: a0
});
var _c6 = (a0) => ({
  mode: a0
});
var _c7 = (a0) => ({
  $implicit: a0
});
function Overlay_div_0_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Overlay_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 1);
    ɵɵlistener("click", function Overlay_div_0_div_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onOverlayContentClick($event));
    })("@overlayContentAnimation.start", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onOverlayContentAnimationStart($event));
    })("@overlayContentAnimation.done", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onOverlayContentAnimationDone($event));
    });
    ɵɵprojection(2);
    ɵɵtemplate(3, Overlay_div_0_div_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.contentStyleClass);
    ɵɵproperty("ngStyle", ctx_r1.contentStyle)("ngClass", "p-overlay-content")("@overlayContentAnimation", ɵɵpureFunction1(11, _c5, ɵɵpureFunction3(7, _c4, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions, ctx_r1.transformOptions[ctx_r1.modal ? ctx_r1.overlayResponsiveDirection : "default"])));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(15, _c7, ɵɵpureFunction1(13, _c6, ctx_r1.overlayMode)));
  }
}
function Overlay_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵlistener("click", function Overlay_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick());
    });
    ɵɵtemplate(2, Overlay_div_0_div_2_Template, 4, 17, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngStyle", ctx_r1.style)("ngClass", ɵɵpureFunctionV(5, _c3, [ctx_r1.modal, ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "center", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "top-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "bottom-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "left-end", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-start", ctx_r1.modal && ctx_r1.overlayResponsiveDirection === "right-end"]));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.visible);
  }
}
var OVERLAY_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Overlay),
  multi: true
};
var showOverlayContentAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{showTransitionParams}}")]);
var hideOverlayContentAnimation = animation([animate("{{hideTransitionParams}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Overlay = class _Overlay {
  document;
  platformId;
  el;
  renderer;
  config;
  overlayService;
  cd;
  zone;
  /**
   * The visible property is an input that determines the visibility of the component.
   * @defaultValue false
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.modalVisible) {
      this.modalVisible = true;
    }
  }
  /**
   * The mode property is an input that determines the overlay mode type or string.
   * @defaultValue null
   * @group Props
   */
  get mode() {
    return this._mode || this.overlayOptions?.mode;
  }
  set mode(value) {
    this._mode = value;
  }
  /**
   * The style property is an input that determines the style object for the component.
   * @defaultValue null
   * @group Props
   */
  get style() {
    return ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
  }
  set style(value) {
    this._style = value;
  }
  /**
   * The styleClass property is an input that determines the CSS class(es) for the component.
   * @defaultValue null
   * @group Props
   */
  get styleClass() {
    return ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
  }
  set styleClass(value) {
    this._styleClass = value;
  }
  /**
   * The contentStyle property is an input that determines the style object for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyle() {
    return ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
  }
  set contentStyle(value) {
    this._contentStyle = value;
  }
  /**
   * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyleClass() {
    return ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
  }
  set contentStyleClass(value) {
    this._contentStyleClass = value;
  }
  /**
   * The target property is an input that specifies the target element or selector for the component.
   * @defaultValue null
   * @group Props
   */
  get target() {
    const value = this._target || this.overlayOptions?.target;
    return value === void 0 ? "@prev" : value;
  }
  set target(value) {
    this._target = value;
  }
  /**
   * Overlay can be mounted into its location, body or DOM element instance using this option.
   * @defaultValue null
   * @group Props
   */
  get appendTo() {
    return this._appendTo || this.overlayOptions?.appendTo;
  }
  set appendTo(value) {
    this._appendTo = value;
  }
  /**
   * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
   * @defaultValue false
   * @group Props
   */
  get autoZIndex() {
    const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
    return value === void 0 ? true : value;
  }
  set autoZIndex(value) {
    this._autoZIndex = value;
  }
  /**
   * The baseZIndex is base zIndex value to use in layering.
   * @defaultValue null
   * @group Props
   */
  get baseZIndex() {
    const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
    return value === void 0 ? 0 : value;
  }
  set baseZIndex(value) {
    this._baseZIndex = value;
  }
  /**
   * Transition options of the show or hide animation.
   * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
   * @group Props
   */
  get showTransitionOptions() {
    const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
    return value === void 0 ? ".12s cubic-bezier(0, 0, 0.2, 1)" : value;
  }
  set showTransitionOptions(value) {
    this._showTransitionOptions = value;
  }
  /**
   * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
   * @defaultValue .1s linear
   * @group Props
   */
  get hideTransitionOptions() {
    const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
    return value === void 0 ? ".1s linear" : value;
  }
  set hideTransitionOptions(value) {
    this._hideTransitionOptions = value;
  }
  /**
   * The listener property is an input that specifies the listener object for the component.
   * @defaultValue null
   * @group Props
   */
  get listener() {
    return this._listener || this.overlayOptions?.listener;
  }
  set listener(value) {
    this._listener = value;
  }
  /**
   * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
   * @defaultValue null
   * @group Props
   */
  get responsive() {
    return this._responsive || this.overlayOptions?.responsive;
  }
  set responsive(val) {
    this._responsive = val;
  }
  /**
   * The options property is an input that specifies the overlay options for the component.
   * @defaultValue null
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
  }
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {Boolean} boolean - Value of visibility as boolean.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke before the overlay is shown.
   * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
   * @group Emits
   */
  onBeforeShow = new EventEmitter();
  /**
   * Callback to invoke when the overlay is shown.
   * @param {OverlayOnShowEvent} event - Custom overlay show event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke before the overlay is hidden.
   * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
   * @group Emits
   */
  onBeforeHide = new EventEmitter();
  /**
   * Callback to invoke when the overlay is hidden
   * @param {OverlayOnHideEvent} event - Custom hide event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the animation is started.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationStart = new EventEmitter();
  /**
   * Callback to invoke when the animation is done.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationDone = new EventEmitter();
  templates;
  overlayViewChild;
  contentViewChild;
  contentTemplate;
  _visible = false;
  _mode;
  _style;
  _styleClass;
  _contentStyle;
  _contentStyleClass;
  _target;
  _appendTo;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _listener;
  _responsive;
  _options;
  modalVisible = false;
  isOverlayClicked = false;
  isOverlayContentClicked = false;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  documentKeyboardListener;
  window;
  transformOptions = {
    default: "scaleY(0.8)",
    center: "scale(0.7)",
    top: "translate3d(0px, -100%, 0px)",
    "top-start": "translate3d(0px, -100%, 0px)",
    "top-end": "translate3d(0px, -100%, 0px)",
    bottom: "translate3d(0px, 100%, 0px)",
    "bottom-start": "translate3d(0px, 100%, 0px)",
    "bottom-end": "translate3d(0px, 100%, 0px)",
    left: "translate3d(-100%, 0px, 0px)",
    "left-start": "translate3d(-100%, 0px, 0px)",
    "left-end": "translate3d(-100%, 0px, 0px)",
    right: "translate3d(100%, 0px, 0px)",
    "right-start": "translate3d(100%, 0px, 0px)",
    "right-end": "translate3d(100%, 0px, 0px)"
  };
  get modal() {
    if (isPlatformBrowser(this.platformId)) {
      return this.mode === "modal" || this.overlayResponsiveOptions && this.window?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media", "") || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
    }
  }
  get overlayMode() {
    return this.mode || (this.modal ? "modal" : "overlay");
  }
  get overlayOptions() {
    return __spreadValues(__spreadValues({}, this.config?.overlayOptions), this.options);
  }
  get overlayResponsiveOptions() {
    return __spreadValues(__spreadValues({}, this.overlayOptions?.responsive), this.responsive);
  }
  get overlayResponsiveDirection() {
    return this.overlayResponsiveOptions?.direction || "center";
  }
  get overlayEl() {
    return this.overlayViewChild?.nativeElement;
  }
  get contentEl() {
    return this.contentViewChild?.nativeElement;
  }
  get targetEl() {
    return DomHandler.getTargetElement(this.target, this.el?.nativeElement);
  }
  constructor(document2, platformId, el, renderer, config, overlayService, cd, zone) {
    this.document = document2;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.config = config;
    this.overlayService = overlayService;
    this.cd = cd;
    this.zone = zone;
    this.window = this.document.defaultView;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  show(overlay, isFocus = false) {
    this.onVisibleChange(true);
    this.handleEvents("onShow", {
      overlay: overlay || this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    isFocus && DomHandler.focus(this.targetEl);
    this.modal && DomHandler.addClass(this.document?.body, "p-overflow-hidden");
  }
  hide(overlay, isFocus = false) {
    if (!this.visible) {
      return;
    } else {
      this.onVisibleChange(false);
      this.handleEvents("onHide", {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && DomHandler.focus(this.targetEl);
      this.modal && DomHandler.removeClass(this.document?.body, "p-overflow-hidden");
    }
  }
  alignOverlay() {
    !this.modal && DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.appendTo);
  }
  onVisibleChange(visible) {
    this._visible = visible;
    this.visibleChange.emit(visible);
  }
  onOverlayClick() {
    this.isOverlayClicked = true;
  }
  onOverlayContentClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.targetEl
    });
    this.isOverlayContentClicked = true;
  }
  onOverlayContentAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.handleEvents("onBeforeShow", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        if (this.autoZIndex) {
          zindexutils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
        }
        DomHandler.appendOverlay(this.overlayEl, this.appendTo === "body" ? this.document.body : this.appendTo, this.appendTo);
        this.alignOverlay();
        break;
      case "void":
        this.handleEvents("onBeforeHide", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        this.modal && DomHandler.addClass(this.overlayEl, "p-component-overlay-leave");
        break;
    }
    this.handleEvents("onAnimationStart", event);
  }
  onOverlayContentAnimationDone(event) {
    const container = this.overlayEl || event.element.parentElement;
    switch (event.toState) {
      case "visible":
        this.show(container, true);
        this.bindListeners();
        break;
      case "void":
        this.hide(container, true);
        this.unbindListeners();
        DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
        zindexutils.clear(container);
        this.modalVisible = false;
        this.cd.markForCheck();
        break;
    }
    this.handleEvents("onAnimationDone", event);
  }
  handleEvents(name, params) {
    this[name].emit(params);
    this.options && this.options[name] && this.options[name](params);
    this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
  }
  bindListeners() {
    this.bindScrollListener();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindDocumentKeyboardListener();
  }
  unbindListeners() {
    this.unbindScrollListener();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentKeyboardListener();
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl, (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "scroll",
          mode: this.overlayMode,
          valid: true
        }) : true;
        valid && this.hide(event, true);
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
        const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
        const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
        const valid = this.listener ? this.listener(event, {
          type: "outside",
          mode: this.overlayMode,
          valid: event.which !== 3 && isOutsideClicked
        }) : isOutsideClicked;
        valid && this.hide(event);
        this.isOverlayClicked = this.isOverlayContentClicked = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "resize",
          mode: this.overlayMode,
          valid: !DomHandler.isTouchDevice()
        }) : !DomHandler.isTouchDevice();
        valid && this.hide(event, true);
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.documentKeyboardListener = this.renderer.listen(this.window, "keydown", (event) => {
        if (this.overlayOptions.hideOnEscape === false || event.code !== "Escape") {
          return;
        }
        const valid = this.listener ? this.listener(event, {
          type: "keydown",
          mode: this.overlayMode,
          valid: !DomHandler.isTouchDevice()
        }) : !DomHandler.isTouchDevice();
        if (valid) {
          this.zone.run(() => {
            this.hide(event, true);
          });
        }
      });
    });
  }
  unbindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      this.documentKeyboardListener();
      this.documentKeyboardListener = null;
    }
  }
  ngOnDestroy() {
    this.hide(this.overlayEl, true);
    if (this.overlayEl) {
      DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
      zindexutils.clear(this.overlayEl);
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindListeners();
  }
  static ɵfac = function Overlay_Factory(t) {
    return new (t || _Overlay)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Overlay,
    selectors: [["p-overlay"]],
    contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Overlay_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      visible: "visible",
      mode: "mode",
      style: "style",
      styleClass: "styleClass",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      target: "target",
      appendTo: "appendTo",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      listener: "listener",
      responsive: "responsive",
      options: "options"
    },
    outputs: {
      visibleChange: "visibleChange",
      onBeforeShow: "onBeforeShow",
      onShow: "onShow",
      onBeforeHide: "onBeforeHide",
      onHide: "onHide",
      onAnimationStart: "onAnimationStart",
      onAnimationDone: "onAnimationDone"
    },
    features: [ɵɵProvidersFeature([OVERLAY_VALUE_ACCESSOR])],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 1,
    consts: [["overlay", ""], ["content", ""], [3, "ngStyle", "class", "ngClass", "click", 4, "ngIf"], [3, "click", "ngStyle", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Overlay_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, Overlay_div_0_Template, 3, 20, "div", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.modalVisible);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Component,
    args: [{
      selector: "p-overlay",
      template: `
        <div
            *ngIf="modalVisible"
            #overlay
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-overlay p-component': true,
                'p-overlay-modal p-component-overlay p-component-overlay-enter': modal,
                'p-overlay-center': modal && overlayResponsiveDirection === 'center',
                'p-overlay-top': modal && overlayResponsiveDirection === 'top',
                'p-overlay-top-start': modal && overlayResponsiveDirection === 'top-start',
                'p-overlay-top-end': modal && overlayResponsiveDirection === 'top-end',
                'p-overlay-bottom': modal && overlayResponsiveDirection === 'bottom',
                'p-overlay-bottom-start': modal && overlayResponsiveDirection === 'bottom-start',
                'p-overlay-bottom-end': modal && overlayResponsiveDirection === 'bottom-end',
                'p-overlay-left': modal && overlayResponsiveDirection === 'left',
                'p-overlay-left-start': modal && overlayResponsiveDirection === 'left-start',
                'p-overlay-left-end': modal && overlayResponsiveDirection === 'left-end',
                'p-overlay-right': modal && overlayResponsiveDirection === 'right',
                'p-overlay-right-start': modal && overlayResponsiveDirection === 'right-start',
                'p-overlay-right-end': modal && overlayResponsiveDirection === 'right-end'
            }"
            (click)="onOverlayClick()"
        >
            <div
                *ngIf="visible"
                #content
                [ngStyle]="contentStyle"
                [class]="contentStyleClass"
                [ngClass]="'p-overlay-content'"
                (click)="onOverlayContentClick($event)"
                [@overlayContentAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions, transform: transformOptions[modal ? overlayResponsiveDirection : 'default'] } }"
                (@overlayContentAnimation.start)="onOverlayContentAnimationStart($event)"
                (@overlayContentAnimation.done)="onOverlayContentAnimationDone($event)"
            >
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [OVERLAY_VALUE_ACCESSOR],
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }], {
    visible: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    listener: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    onBeforeShow: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onBeforeHide: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onAnimationStart: [{
      type: Output
    }],
    onAnimationDone: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var OverlayModule = class _OverlayModule {
  static ɵfac = function OverlayModule_Factory(t) {
    return new (t || _OverlayModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OverlayModule,
    declarations: [Overlay],
    imports: [CommonModule, SharedModule],
    exports: [Overlay, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [Overlay, SharedModule],
      declarations: [Overlay]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-scroller.mjs
var _c02 = ["element"];
var _c12 = ["content"];
var _c22 = ["*"];
var _c32 = (a0, a1, a2) => ({
  "p-scroller": true,
  "p-scroller-inline": a0,
  "p-both-scroll": a1,
  "p-horizontal-scroll": a2
});
var _c42 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c52 = (a0) => ({
  "p-scroller-loading": a0
});
var _c62 = (a0) => ({
  "p-component-overlay": a0
});
var _c72 = (a0) => ({
  numCols: a0
});
var _c8 = (a0) => ({
  options: a0
});
var _c9 = () => ({
  styleClass: "p-scroller-loading-icon"
});
var _c10 = (a0, a1) => ({
  rows: a0,
  columns: a1
});
function Scroller_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Scroller_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c42, ctx_r1.loadedItems, ctx_r1.getContentOptions()));
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c42, item_r3, ctx_r1.getOptions(index_r4)));
  }
}
function Scroller_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11, 3);
    ɵɵtemplate(2, Scroller_ng_container_0_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c52, ctx_r1.d_loading))("ngStyle", ctx_r1.contentStyle);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.loadedItems)("ngForTrackBy", ctx_r1._trackBy || ctx_r1.index);
  }
}
function Scroller_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r1.spacerStyle);
    ɵɵattribute("data-pc-section", "spacer");
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c8, ctx_r1.getLoaderOptions(index_r5, ctx_r1.both && ɵɵpureFunction1(2, _c72, ctx_r1._numItemsInViewport.cols))));
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.loaderArr);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loaderIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c8, ɵɵpureFunction0(2, _c9)));
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-scroller-loading-icon pi-spin");
    ɵɵattribute("data-pc-section", "loadingIcon");
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template, 2, 5, "ng-container", 6)(1, Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template, 1, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const buildInLoaderIcon_r6 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.loaderIconTemplate)("ngIfElse", buildInLoaderIcon_r6);
  }
}
function Scroller_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 6)(2, Scroller_ng_container_0_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const buildInLoader_r7 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c62, !ctx_r1.loaderTemplate));
    ɵɵattribute("data-pc-section", "loader");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.loaderTemplate)("ngIfElse", buildInLoader_r7);
  }
}
function Scroller_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7, 1);
    ɵɵlistener("scroll", function Scroller_ng_container_0_Template_div_scroll_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onContainerScroll($event));
    });
    ɵɵtemplate(3, Scroller_ng_container_0_ng_container_3_Template, 2, 5, "ng-container", 6)(4, Scroller_ng_container_0_ng_template_4_Template, 3, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, Scroller_ng_container_0_div_6_Template, 1, 2, "div", 8)(7, Scroller_ng_container_0_div_7_Template, 4, 6, "div", 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const buildInContent_r8 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassMap(ctx_r1._styleClass);
    ɵɵproperty("ngStyle", ctx_r1._style)("ngClass", ɵɵpureFunction3(12, _c32, ctx_r1.inline, ctx_r1.both, ctx_r1.horizontal));
    ɵɵattribute("id", ctx_r1._id)("tabindex", ctx_r1.tabindex)("data-pc-name", "scroller")("data-pc-section", "root");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.contentTemplate)("ngIfElse", buildInContent_r8);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1._showSpacer);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.loaderDisabled && ctx_r1._showLoader && ctx_r1.d_loading);
  }
}
function Scroller_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Scroller_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(5, _c42, ctx_r1.items, ɵɵpureFunction2(2, _c10, ctx_r1._items, ctx_r1.loadedColumns)));
  }
}
function Scroller_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
    ɵɵtemplate(1, Scroller_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.contentTemplate);
  }
}
var Scroller = class _Scroller {
  document;
  platformId;
  renderer;
  cd;
  zone;
  /**
   * Unique identifier of the element.
   * @group Props
   */
  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(val) {
    this._style = val;
  }
  /**
   * Style class of the element.
   * @group Props
   */
  get styleClass() {
    return this._styleClass;
  }
  set styleClass(val) {
    this._styleClass = val;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(val) {
    this._tabindex = val;
  }
  /**
   * An array of objects to display.
   * @group Props
   */
  get items() {
    return this._items;
  }
  set items(val) {
    this._items = val;
  }
  /**
   * The height/width of item according to orientation.
   * @group Props
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
  }
  /**
   * Height of the scroll viewport.
   * @group Props
   */
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
  }
  /**
   * Width of the scroll viewport.
   * @group Props
   */
  get scrollWidth() {
    return this._scrollWidth;
  }
  set scrollWidth(val) {
    this._scrollWidth = val;
  }
  /**
   * The orientation of scrollbar.
   * @group Props
   */
  get orientation() {
    return this._orientation;
  }
  set orientation(val) {
    this._orientation = val;
  }
  /**
   * Used to specify how many items to load in each load method in lazy mode.
   * @group Props
   */
  get step() {
    return this._step;
  }
  set step(val) {
    this._step = val;
  }
  /**
   * Delay in scroll before new data is loaded.
   * @group Props
   */
  get delay() {
    return this._delay;
  }
  set delay(val) {
    this._delay = val;
  }
  /**
   * Delay after window's resize finishes.
   * @group Props
   */
  get resizeDelay() {
    return this._resizeDelay;
  }
  set resizeDelay(val) {
    this._resizeDelay = val;
  }
  /**
   * Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.
   * @group Props
   */
  get appendOnly() {
    return this._appendOnly;
  }
  set appendOnly(val) {
    this._appendOnly = val;
  }
  /**
   * Specifies whether the scroller should be displayed inline or not.
   * @group Props
   */
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = val;
  }
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  get lazy() {
    return this._lazy;
  }
  set lazy(val) {
    this._lazy = val;
  }
  /**
   * If disabled, the scroller feature is eliminated and the content is displayed directly.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
  }
  /**
   * Used to implement a custom loader instead of using the loader feature in the scroller.
   * @group Props
   */
  get loaderDisabled() {
    return this._loaderDisabled;
  }
  set loaderDisabled(val) {
    this._loaderDisabled = val;
  }
  /**
   * Columns to display.
   * @group Props
   */
  get columns() {
    return this._columns;
  }
  set columns(val) {
    this._columns = val;
  }
  /**
   * Used to implement a custom spacer instead of using the spacer feature in the scroller.
   * @group Props
   */
  get showSpacer() {
    return this._showSpacer;
  }
  set showSpacer(val) {
    this._showSpacer = val;
  }
  /**
   * Defines whether to show loader.
   * @group Props
   */
  get showLoader() {
    return this._showLoader;
  }
  set showLoader(val) {
    this._showLoader = val;
  }
  /**
   * Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.
   * @group Props
   */
  get numToleratedItems() {
    return this._numToleratedItems;
  }
  set numToleratedItems(val) {
    this._numToleratedItems = val;
  }
  /**
   * Defines whether the data is loaded.
   * @group Props
   */
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
  }
  /**
   * Defines whether to dynamically change the height or width of scrollable container.
   * @group Props
   */
  get autoSize() {
    return this._autoSize;
  }
  set autoSize(val) {
    this._autoSize = val;
  }
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.
   * @group Props
   */
  get trackBy() {
    return this._trackBy;
  }
  set trackBy(val) {
    this._trackBy = val;
  }
  /**
   * Defines whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {ScrollerLazyLoadEvent} event - Custom lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when scroll position changes.
   * @param {ScrollerScrollEvent} event - Custom scroll event.
   * @group Emits
   */
  onScroll = new EventEmitter();
  /**
   * Callback to invoke when scroll position and item's range in view changes.
   * @param {ScrollerScrollEvent} event - Custom scroll index change event.
   * @group Emits
   */
  onScrollIndexChange = new EventEmitter();
  elementViewChild;
  contentViewChild;
  templates;
  _id;
  _style;
  _styleClass;
  _tabindex = 0;
  _items;
  _itemSize = 0;
  _scrollHeight;
  _scrollWidth;
  _orientation = "vertical";
  _step = 0;
  _delay = 0;
  _resizeDelay = 10;
  _appendOnly = false;
  _inline = false;
  _lazy = false;
  _disabled = false;
  _loaderDisabled = false;
  _columns;
  _showSpacer = true;
  _showLoader = false;
  _numToleratedItems;
  _loading;
  _autoSize = false;
  _trackBy;
  _options;
  d_loading = false;
  d_numToleratedItems;
  contentEl;
  contentTemplate;
  itemTemplate;
  loaderTemplate;
  loaderIconTemplate;
  first = 0;
  last = 0;
  page = 0;
  isRangeChanged = false;
  numItemsInViewport = 0;
  lastScrollPos = 0;
  lazyLoadState = {};
  loaderArr = [];
  spacerStyle = {};
  contentStyle = {};
  scrollTimeout;
  resizeTimeout;
  initialized = false;
  windowResizeListener;
  defaultWidth;
  defaultHeight;
  defaultContentWidth;
  defaultContentHeight;
  get vertical() {
    return this._orientation === "vertical";
  }
  get horizontal() {
    return this._orientation === "horizontal";
  }
  get both() {
    return this._orientation === "both";
  }
  get loadedItems() {
    if (this._items && !this.d_loading) {
      if (this.both)
        return this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map((item) => this._columns ? item : item.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols));
      else if (this.horizontal && this._columns)
        return this._items;
      else
        return this._items.slice(this._appendOnly ? 0 : this.first, this.last);
    }
    return [];
  }
  get loadedRows() {
    return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
  }
  get loadedColumns() {
    if (this._columns && (this.both || this.horizontal)) {
      return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
    }
    return this._columns;
  }
  constructor(document2, platformId, renderer, cd, zone) {
    this.document = document2;
    this.platformId = platformId;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
  }
  ngOnInit() {
    this.setInitialState();
  }
  ngOnChanges(simpleChanges) {
    let isLoadingChanged = false;
    if (simpleChanges.loading) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.loading;
      if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
        this.d_loading = currentValue;
        isLoadingChanged = true;
      }
    }
    if (simpleChanges.orientation) {
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
    }
    if (simpleChanges.numToleratedItems) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.numToleratedItems;
      if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue;
      }
    }
    if (simpleChanges.options) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.options;
      if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
        this.d_loading = currentValue.loading;
        isLoadingChanged = true;
      }
      if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue.numToleratedItems;
      }
    }
    if (this.initialized) {
      const isChanged = !isLoadingChanged && (simpleChanges.items?.previousValue?.length !== simpleChanges.items?.currentValue?.length || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
      if (isChanged) {
        this.init();
        this.calculateAutoSize();
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "loadericon":
          this.loaderIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.viewInit();
    });
  }
  ngAfterViewChecked() {
    if (!this.initialized) {
      this.viewInit();
    }
  }
  ngOnDestroy() {
    this.unbindResizeListener();
    this.contentEl = null;
    this.initialized = false;
  }
  viewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
        this.setInitialState();
        this.setContentEl(this.contentEl);
        this.init();
        this.defaultWidth = DomHandler.getWidth(this.elementViewChild?.nativeElement);
        this.defaultHeight = DomHandler.getHeight(this.elementViewChild?.nativeElement);
        this.defaultContentWidth = DomHandler.getWidth(this.contentEl);
        this.defaultContentHeight = DomHandler.getHeight(this.contentEl);
        this.initialized = true;
      }
    }
  }
  init() {
    if (!this._disabled) {
      this.setSize();
      this.calculateOptions();
      this.setSpacerSize();
      this.bindResizeListener();
      this.cd.detectChanges();
    }
  }
  setContentEl(el) {
    this.contentEl = el || this.contentViewChild?.nativeElement || DomHandler.findSingle(this.elementViewChild?.nativeElement, ".p-scroller-content");
  }
  setInitialState() {
    this.first = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.last = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.numItemsInViewport = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.lastScrollPos = this.both ? {
      top: 0,
      left: 0
    } : 0;
    this.d_loading = this._loading || false;
    this.d_numToleratedItems = this._numToleratedItems;
    this.loaderArr = [];
    this.spacerStyle = {};
    this.contentStyle = {};
  }
  getElementRef() {
    return this.elementViewChild;
  }
  getPageByFirst(first2) {
    return Math.floor(((first2 ?? this.first) + this.d_numToleratedItems * 4) / (this._step || 1));
  }
  isPageChanged(first2) {
    return this._step ? this.page !== this.getPageByFirst(first2 ?? this.first) : true;
  }
  scrollTo(options) {
    this.elementViewChild?.nativeElement?.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    const valid = this.both ? index.every((i) => i > -1) : index > -1;
    if (valid) {
      const first2 = this.first;
      const {
        scrollTop = 0,
        scrollLeft = 0
      } = this.elementViewChild?.nativeElement;
      const {
        numToleratedItems
      } = this.calculateNumItems();
      const contentPos = this.getContentPosition();
      const itemSize = this.itemSize;
      const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
      const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      let newFirst = this.both ? {
        rows: 0,
        cols: 0
      } : 0;
      let isRangeChanged = false, isScrollChanged = false;
      if (this.both) {
        newFirst = {
          rows: calculateFirst(index[0], numToleratedItems[0]),
          cols: calculateFirst(index[1], numToleratedItems[1])
        };
        scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
        isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
        isRangeChanged = newFirst.rows !== first2.rows || newFirst.cols !== first2.cols;
      } else {
        newFirst = calculateFirst(index, numToleratedItems);
        this.horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop) : scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
        isScrollChanged = this.lastScrollPos !== (this.horizontal ? scrollLeft : scrollTop);
        isRangeChanged = newFirst !== first2;
      }
      this.isRangeChanged = isRangeChanged;
      isScrollChanged && (this.first = newFirst);
    }
  }
  scrollInView(index, to, behavior = "auto") {
    if (to) {
      const {
        first: first2,
        viewport
      } = this.getRenderedRange();
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      const isToStart = to === "to-start";
      const isToEnd = to === "to-end";
      if (isToStart) {
        if (this.both) {
          if (viewport.first.rows - first2.rows > index[0]) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
          } else if (viewport.first.cols - first2.cols > index[1]) {
            scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.first - first2 > index) {
            const pos = (viewport.first - 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      } else if (isToEnd) {
        if (this.both) {
          if (viewport.last.rows - first2.rows <= index[0] + 1) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
          } else if (viewport.last.cols - first2.cols <= index[1] + 1) {
            scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.last - first2 <= index + 1) {
            const pos = (viewport.first + 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      }
    } else {
      this.scrollToIndex(index, behavior);
    }
  }
  getRenderedRange() {
    const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));
    let firstInViewport = this.first;
    let lastInViewport = 0;
    if (this.elementViewChild?.nativeElement) {
      const {
        scrollTop,
        scrollLeft
      } = this.elementViewChild.nativeElement;
      if (this.both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + this.numItemsInViewport.rows,
          cols: firstInViewport.cols + this.numItemsInViewport.cols
        };
      } else {
        const scrollPos = this.horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
        lastInViewport = firstInViewport + this.numItemsInViewport;
      }
    }
    return {
      first: this.first,
      last: this.last,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  }
  calculateNumItems() {
    const contentPos = this.getContentPosition();
    const contentWidth = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0) || 0;
    const contentHeight = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0) || 0;
    const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
    const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
    const numItemsInViewport = this.both ? {
      rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
    } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
    const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  }
  calculateOptions() {
    const {
      numItemsInViewport,
      numToleratedItems
    } = this.calculateNumItems();
    const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    const first2 = this.first;
    const last3 = this.both ? {
      rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
    this.last = last3;
    this.numItemsInViewport = numItemsInViewport;
    this.d_numToleratedItems = numToleratedItems;
    if (this.showLoader) {
      this.loaderArr = this.both ? Array.from({
        length: numItemsInViewport.rows
      }).map(() => Array.from({
        length: numItemsInViewport.cols
      })) : Array.from({
        length: numItemsInViewport
      });
    }
    if (this._lazy) {
      Promise.resolve().then(() => {
        this.lazyLoadState = {
          first: this._step ? this.both ? {
            rows: 0,
            cols: first2.cols
          } : 0 : first2,
          last: Math.min(this._step ? this._step : this.last, this.items.length)
        };
        this.handleEvents("onLazyLoad", this.lazyLoadState);
      });
    }
  }
  calculateAutoSize() {
    if (this._autoSize && !this.d_loading) {
      Promise.resolve().then(() => {
        if (this.contentEl) {
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = "auto";
          this.contentEl.style.position = "relative";
          this.elementViewChild.nativeElement.style.contain = "none";
          const [contentWidth, contentHeight] = [DomHandler.getWidth(this.contentEl), DomHandler.getHeight(this.contentEl)];
          contentWidth !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = "");
          contentHeight !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = "");
          const [width, height] = [DomHandler.getWidth(this.elementViewChild.nativeElement), DomHandler.getHeight(this.elementViewChild.nativeElement)];
          (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = width < this.defaultWidth ? width + "px" : this._scrollWidth || this.defaultWidth + "px");
          (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = height < this.defaultHeight ? height + "px" : this._scrollHeight || this.defaultHeight + "px");
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = "";
          this.contentEl.style.position = "";
          this.elementViewChild.nativeElement.style.contain = "";
        }
      });
    }
  }
  getLast(last3 = 0, isCols = false) {
    return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last3) : 0;
  }
  getContentPosition() {
    if (this.contentEl) {
      const style2 = getComputedStyle(this.contentEl);
      const left = parseFloat(style2.paddingLeft) + Math.max(parseFloat(style2.left) || 0, 0);
      const right = parseFloat(style2.paddingRight) + Math.max(parseFloat(style2.right) || 0, 0);
      const top = parseFloat(style2.paddingTop) + Math.max(parseFloat(style2.top) || 0, 0);
      const bottom = parseFloat(style2.paddingBottom) + Math.max(parseFloat(style2.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  }
  setSize() {
    if (this.elementViewChild?.nativeElement) {
      const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
      const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
      const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
      const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
      if (this.both || this.horizontal) {
        setProp("height", height);
        setProp("width", width);
      } else {
        setProp("height", height);
      }
    }
  }
  setSpacerSize() {
    if (this._items) {
      const contentPos = this.getContentPosition();
      const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = __spreadValues(__spreadValues({}, this.spacerStyle), {
        [`${_name}`]: (_value || []).length * _size + _cpos + "px"
      });
      if (this.both) {
        setProp("height", this._items, this._itemSize[0], contentPos.y);
        setProp("width", this._columns || this._items[1], this._itemSize[1], contentPos.x);
      } else {
        this.horizontal ? setProp("width", this._columns || this._items, this._itemSize, contentPos.x) : setProp("height", this._items, this._itemSize, contentPos.y);
      }
    }
  }
  setContentPosition(pos) {
    if (this.contentEl && !this._appendOnly) {
      const first2 = pos ? pos.first : this.first;
      const calculateTranslateVal = (_first, _size) => _first * _size;
      const setTransform = (_x = 0, _y = 0) => this.contentStyle = __spreadValues(__spreadValues({}, this.contentStyle), {
        transform: `translate3d(${_x}px, ${_y}px, 0)`
      });
      if (this.both) {
        setTransform(calculateTranslateVal(first2.cols, this._itemSize[1]), calculateTranslateVal(first2.rows, this._itemSize[0]));
      } else {
        const translateVal = calculateTranslateVal(first2, this._itemSize);
        this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  }
  onScrollPositionChange(event) {
    const target = event.target;
    const contentPos = this.getContentPosition();
    const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
    const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      if (_currentIndex <= _numT)
        return 0;
      else
        return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
      let lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue += _numT + 1;
      }
      return this.getLast(lastValue, _isCols);
    };
    const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    let newFirst = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    let newLast = this.last;
    let isRangeChanged = false;
    let newScrollPos = this.lastScrollPos;
    if (this.both) {
      const isScrollDown = this.lastScrollPos.top <= scrollTop;
      const isScrollRight = this.lastScrollPos.left <= scrollLeft;
      if (!this._appendOnly || this._appendOnly && (isScrollDown || isScrollRight)) {
        const currentIndex = {
          rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
        };
        const triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
        };
        isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      const scrollPos = this.horizontal ? scrollLeft : scrollTop;
      const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
      if (!this._appendOnly || this._appendOnly && isScrollDownOrRight) {
        const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
        const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
        isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  }
  onScrollChange(event) {
    const {
      first: first2,
      last: last3,
      isRangeChanged,
      scrollPos
    } = this.onScrollPositionChange(event);
    if (isRangeChanged) {
      const newState = {
        first: first2,
        last: last3
      };
      this.setContentPosition(newState);
      this.first = first2;
      this.last = last3;
      this.lastScrollPos = scrollPos;
      this.handleEvents("onScrollIndexChange", newState);
      if (this._lazy && this.isPageChanged(first2)) {
        const lazyLoadState = {
          first: this._step ? Math.min(this.getPageByFirst(first2) * this._step, this.items.length - this._step) : first2,
          last: Math.min(this._step ? (this.getPageByFirst(first2) + 1) * this._step : last3, this.items.length)
        };
        const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
        isLazyStateChanged && this.handleEvents("onLazyLoad", lazyLoadState);
        this.lazyLoadState = lazyLoadState;
      }
    }
  }
  onContainerScroll(event) {
    this.handleEvents("onScroll", {
      originalEvent: event
    });
    if (this._delay && this.isPageChanged()) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      if (!this.d_loading && this.showLoader) {
        const {
          isRangeChanged
        } = this.onScrollPositionChange(event);
        const changed = isRangeChanged || (this._step ? this.isPageChanged() : false);
        if (changed) {
          this.d_loading = true;
          this.cd.detectChanges();
        }
      }
      this.scrollTimeout = setTimeout(() => {
        this.onScrollChange(event);
        if (this.d_loading && this.showLoader && (!this._lazy || this._loading === void 0)) {
          this.d_loading = false;
          this.page = this.getPageByFirst();
          this.cd.detectChanges();
        }
      }, this._delay);
    } else {
      !this.d_loading && this.onScrollChange(event);
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.windowResizeListener) {
        this.zone.runOutsideAngular(() => {
          const window2 = this.document.defaultView;
          const event = DomHandler.isTouchDevice() ? "orientationchange" : "resize";
          this.windowResizeListener = this.renderer.listen(window2, event, this.onWindowResize.bind(this));
        });
      }
    }
  }
  unbindResizeListener() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      if (DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
        const [width, height] = [DomHandler.getWidth(this.elementViewChild?.nativeElement), DomHandler.getHeight(this.elementViewChild?.nativeElement)];
        const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
        const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
        reinit && this.zone.run(() => {
          this.d_numToleratedItems = this._numToleratedItems;
          this.defaultWidth = width;
          this.defaultHeight = height;
          this.defaultContentWidth = DomHandler.getWidth(this.contentEl);
          this.defaultContentHeight = DomHandler.getHeight(this.contentEl);
          this.init();
        });
      }
    }, this._resizeDelay);
  }
  handleEvents(name, params) {
    return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
  }
  getContentOptions() {
    return {
      contentStyleClass: `p-scroller-content ${this.d_loading ? "p-scroller-loading" : ""}`,
      items: this.loadedItems,
      getItemOptions: (index) => this.getOptions(index),
      loading: this.d_loading,
      getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
      itemSize: this._itemSize,
      rows: this.loadedRows,
      columns: this.loadedColumns,
      spacerStyle: this.spacerStyle,
      contentStyle: this.contentStyle,
      vertical: this.vertical,
      horizontal: this.horizontal,
      both: this.both
    };
  }
  getOptions(renderedIndex) {
    const count = (this._items || []).length;
    const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    };
  }
  getLoaderOptions(index, extOptions) {
    const count = this.loaderArr.length;
    return __spreadValues({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    }, extOptions);
  }
  static ɵfac = function Scroller_Factory(t) {
    return new (t || _Scroller)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Scroller,
    selectors: [["p-scroller"]],
    contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Scroller_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c02, 5);
        ɵɵviewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elementViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-scroller-viewport", "p-element"],
    inputs: {
      id: "id",
      style: "style",
      styleClass: "styleClass",
      tabindex: "tabindex",
      items: "items",
      itemSize: "itemSize",
      scrollHeight: "scrollHeight",
      scrollWidth: "scrollWidth",
      orientation: "orientation",
      step: "step",
      delay: "delay",
      resizeDelay: "resizeDelay",
      appendOnly: "appendOnly",
      inline: "inline",
      lazy: "lazy",
      disabled: "disabled",
      loaderDisabled: "loaderDisabled",
      columns: "columns",
      showSpacer: "showSpacer",
      showLoader: "showLoader",
      numToleratedItems: "numToleratedItems",
      loading: "loading",
      autoSize: "autoSize",
      trackBy: "trackBy",
      options: "options"
    },
    outputs: {
      onLazyLoad: "onLazyLoad",
      onScroll: "onScroll",
      onScrollIndexChange: "onScrollIndexChange"
    },
    features: [ɵɵNgOnChangesFeature],
    ngContentSelectors: _c22,
    decls: 3,
    vars: 2,
    consts: [["disabledContainer", ""], ["element", ""], ["buildInContent", ""], ["content", ""], ["buildInLoader", ""], ["buildInLoaderIcon", ""], [4, "ngIf", "ngIfElse"], [3, "scroll", "ngStyle", "ngClass"], ["class", "p-scroller-spacer", 3, "ngStyle", 4, "ngIf"], ["class", "p-scroller-loader", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-scroller-content", 3, "ngClass", "ngStyle"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-scroller-spacer", 3, "ngStyle"], [1, "p-scroller-loader", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "styleClass"], [4, "ngIf"]],
    template: function Scroller_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, Scroller_ng_container_0_Template, 8, 16, "ng-container", 6)(1, Scroller_ng_template_1_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const disabledContainer_r9 = ɵɵreference(2);
        ɵɵproperty("ngIf", !ctx._disabled)("ngIfElse", disabledContainer_r9);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, SpinnerIcon],
    styles: ["@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scroller, [{
    type: Component,
    args: [{
      selector: "p-scroller",
      template: `
        <ng-container *ngIf="!_disabled; else disabledContainer">
            <div
                #element
                [attr.id]="_id"
                [attr.tabindex]="tabindex"
                [ngStyle]="_style"
                [class]="_styleClass"
                [ngClass]="{ 'p-scroller': true, 'p-scroller-inline': inline, 'p-both-scroll': both, 'p-horizontal-scroll': horizontal }"
                (scroll)="onContainerScroll($event)"
                [attr.data-pc-name]="'scroller'"
                [attr.data-pc-section]="'root'"
            >
                <ng-container *ngIf="contentTemplate; else buildInContent">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: loadedItems, options: getContentOptions() }"></ng-container>
                </ng-container>
                <ng-template #buildInContent>
                    <div #content class="p-scroller-content" [ngClass]="{ 'p-scroller-loading': d_loading }" [ngStyle]="contentStyle" [attr.data-pc-section]="'content'">
                        <ng-container *ngFor="let item of loadedItems; let index = index; trackBy: _trackBy || index">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, options: getOptions(index) }"></ng-container>
                        </ng-container>
                    </div>
                </ng-template>
                <div *ngIf="_showSpacer" class="p-scroller-spacer" [ngStyle]="spacerStyle" [attr.data-pc-section]="'spacer'"></div>
                <div *ngIf="!loaderDisabled && _showLoader && d_loading" class="p-scroller-loader" [ngClass]="{ 'p-component-overlay': !loaderTemplate }" [attr.data-pc-section]="'loader'">
                    <ng-container *ngIf="loaderTemplate; else buildInLoader">
                        <ng-container *ngFor="let item of loaderArr; let index = index">
                            <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: getLoaderOptions(index, both && { numCols: _numItemsInViewport.cols }) }"></ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-template #buildInLoader>
                        <ng-container *ngIf="loaderIconTemplate; else buildInLoaderIcon">
                            <ng-container *ngTemplateOutlet="loaderIconTemplate; context: { options: { styleClass: 'p-scroller-loading-icon' } }"></ng-container>
                        </ng-container>
                        <ng-template #buildInLoaderIcon>
                            <SpinnerIcon [styleClass]="'p-scroller-loading-icon pi-spin'" [attr.data-pc-section]="'loadingIcon'" />
                        </ng-template>
                    </ng-template>
                </div>
            </div>
        </ng-container>
        <ng-template #disabledContainer>
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate">
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: items, options: { rows: _items, columns: loadedColumns } }"></ng-container>
            </ng-container>
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-scroller-viewport p-element"
      },
      styles: ["@layer primeng{p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }], {
    id: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    scrollWidth: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    resizeDelay: [{
      type: Input
    }],
    appendOnly: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    loaderDisabled: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    showSpacer: [{
      type: Input
    }],
    showLoader: [{
      type: Input
    }],
    numToleratedItems: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    autoSize: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onLazyLoad: [{
      type: Output
    }],
    onScroll: [{
      type: Output
    }],
    onScrollIndexChange: [{
      type: Output
    }],
    elementViewChild: [{
      type: ViewChild,
      args: ["element"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ScrollerModule = class _ScrollerModule {
  static ɵfac = function ScrollerModule_Factory(t) {
    return new (t || _ScrollerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ScrollerModule,
    declarations: [Scroller],
    imports: [CommonModule, SharedModule, SpinnerIcon],
    exports: [Scroller, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, SpinnerIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, SpinnerIcon],
      exports: [Scroller, SharedModule],
      declarations: [Scroller]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var Tooltip = class _Tooltip {
  platformId;
  el;
  zone;
  config;
  renderer;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: UniqueComponentId() + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  scrollHandler;
  resizeListener;
  constructor(platformId, el, zone, config, renderer, viewContainer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.getOption("tooltipEvent") === "hover") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        } else if (this.getOption("tooltipEvent") === "focus") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.getTarget(this.el.nativeElement);
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = DomHandler.hasClass(e.relatedTarget, "p-tooltip") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-text") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }
  activate() {
    this.active = true;
    this.clearHideTimeout();
    if (this.getOption("showDelay"))
      this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
    else
      this.show();
    if (this.getOption("life")) {
      let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body")
      document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target")
      DomHandler.appendChild(this.container, this.el.nativeElement);
    else
      DomHandler.appendChild(this.container, this.getOption("appendTo"));
    this.container.style.display = "inline-block";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    this.align();
    DomHandler.fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto")
      zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else
      this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    switch (position) {
      case "top":
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "bottom":
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "left":
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case "right":
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign("right");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + DomHandler.getOuterWidth(this.el.nativeElement);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignLeft() {
    this.preAlign("left");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignTop() {
    this.preAlign("top");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignBottom() {
    this.preAlign("bottom");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return DomHandler.hasClass(el, "p-inputwrapper") ? DomHandler.findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(this.container);
    let height = DomHandler.getOuterHeight(this.container);
    let viewport = DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    if (this.getOption("tooltipEvent") === "hover") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    } else if (this.getOption("tooltipEvent") === "focus") {
      let target = this.getTarget(this.el.nativeElement);
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body")
        document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target")
        this.el.nativeElement.removeChild(this.container);
      else
        DomHandler.removeChild(this.container, this.getOption("appendTo"));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function Tooltip_Factory(t) {
    return new (t || _Tooltip)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Tooltip_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function Tooltip_keydown_escape_HostBindingHandler($event) {
          return ctx.onPressEscape($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: "escape",
      showDelay: "showDelay",
      hideDelay: "hideDelay",
      life: "life",
      positionTop: "positionTop",
      positionLeft: "positionLeft",
      autoHide: "autoHide",
      fitContent: "fitContent",
      hideOnEscape: "hideOnEscape",
      content: [InputFlags.None, "pTooltip", "content"],
      disabled: [InputFlags.None, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input
    }],
    showDelay: [{
      type: Input
    }],
    hideDelay: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    positionTop: [{
      type: Input
    }],
    positionLeft: [{
      type: Input
    }],
    autoHide: [{
      type: Input
    }],
    fitContent: [{
      type: Input
    }],
    hideOnEscape: [{
      type: Input
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    onPressEscape: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(t) {
    return new (t || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    declarations: [Tooltip],
    imports: [CommonModule],
    exports: [Tooltip]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-times.mjs
var TimesIcon = class _TimesIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTimesIcon_BaseFactory;
    return function TimesIcon_Factory(t) {
      return (ɵTimesIcon_BaseFactory || (ɵTimesIcon_BaseFactory = ɵɵgetInheritedFactory(_TimesIcon)))(t || _TimesIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _TimesIcon,
    selectors: [["TimesIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z", "fill", "currentColor"]],
    template: function TimesIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimesIcon, [{
    type: Component,
    args: [{
      selector: "TimesIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs
var ChevronDownIcon = class _ChevronDownIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵChevronDownIcon_BaseFactory;
    return function ChevronDownIcon_Factory(t) {
      return (ɵChevronDownIcon_BaseFactory || (ɵChevronDownIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronDownIcon)))(t || _ChevronDownIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronDownIcon,
    selectors: [["ChevronDownIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
    template: function ChevronDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronDownIcon, [{
    type: Component,
    args: [{
      selector: "ChevronDownIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-search.mjs
var SearchIcon = class _SearchIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    this.pathId = "url(#" + UniqueComponentId() + ")";
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSearchIcon_BaseFactory;
    return function SearchIcon_Factory(t) {
      return (ɵSearchIcon_BaseFactory || (ɵSearchIcon_BaseFactory = ɵɵgetInheritedFactory(_SearchIcon)))(t || _SearchIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SearchIcon,
    selectors: [["SearchIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 7,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function SearchIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0)(1, "g");
        ɵɵelement(2, "path", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "defs")(4, "clipPath", 2);
        ɵɵelement(5, "rect", 3);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        ɵɵadvance();
        ɵɵattribute("clip-path", ctx.pathId);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchIcon, [{
    type: Component,
    args: [{
      selector: "SearchIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g [attr.clip-path]="pathId">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath [id]="pathId">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dropdown.mjs
var _c03 = (a0) => ({
  height: a0
});
var _c13 = (a0, a1, a2) => ({
  "p-dropdown-item": true,
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c23 = (a0) => ({
  $implicit: a0
});
function DropdownItem_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate((tmp_1_0 = ctx_r0.label) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : "empty");
  }
}
function DropdownItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c33 = ["container"];
var _c43 = ["filter"];
var _c53 = ["focusInput"];
var _c63 = ["editableInput"];
var _c73 = ["items"];
var _c82 = ["scroller"];
var _c92 = ["overlay"];
var _c102 = ["firstHiddenFocusableEl"];
var _c11 = ["lastHiddenFocusableEl"];
var _c122 = (a0) => ({
  options: a0
});
var _c132 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c14 = () => ({});
function Dropdown_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.label() === "p-emptylabel" ? " " : ctx_r2.label());
  }
}
function Dropdown_span_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 25);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c23, ctx_r2.selectedOption));
  }
}
function Dropdown_span_2_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.label() === "p-emptylabel" ? " " : ctx_r2.placeholder());
  }
}
function Dropdown_span_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_span_2_ng_template_4_span_0_Template, 2, 1, "span", 17);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.displayPlaceholder());
  }
}
function Dropdown_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 22, 2);
    ɵɵlistener("focus", function Dropdown_span_2_Template_span_focus_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_span_2_Template_span_blur_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    })("keydown", function Dropdown_span_2_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    });
    ɵɵtemplate(2, Dropdown_span_2_ng_container_2_Template, 2, 1, "ng-container", 23)(3, Dropdown_span_2_ng_container_3_Template, 1, 4, "ng-container", 24)(4, Dropdown_span_2_ng_template_4_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const defaultPlaceholder_r4 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.inputClass)("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("autofocus", ctx_r2.autofocus);
    ɵɵattribute("aria-disabled", ctx_r2.disabled)("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", (tmp_16_0 = ctx_r2.overlayVisible) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.disabled ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0)("aria-required", ctx_r2.required)("required", ctx_r2.required);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.selectedItemTemplate && ctx_r2.selectedOption);
  }
}
function Dropdown_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 26, 4);
    ɵɵlistener("input", function Dropdown_input_3_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onEditableInput($event));
    })("keydown", function Dropdown_input_3_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    })("focus", function Dropdown_input_3_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function Dropdown_input_3_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.inputClass)("disabled", ctx_r2.disabled);
    ɵɵattribute("maxlength", ctx_r2.maxlength)("placeholder", ctx_r2.modelValue() === void 0 || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : void 0);
  }
}
function Dropdown_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 29);
    ɵɵlistener("click", function Dropdown_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-clear-icon");
    ɵɵattribute("data-pc-section", "clearicon");
  }
}
function Dropdown_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 30);
    ɵɵlistener("click", function Dropdown_ng_container_4_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear($event));
    });
    ɵɵtemplate(1, Dropdown_ng_container_4_span_2_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "clearicon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_container_4_TimesIcon_1_Template, 1, 2, "TimesIcon", 27)(2, Dropdown_ng_container_4_span_2_Template, 2, 2, "span", 28);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.clearIconTemplate);
  }
}
function Dropdown_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 34);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.dropdownIcon);
  }
}
function Dropdown_ng_container_6_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 35);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-trigger-icon");
  }
}
function Dropdown_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_container_6_span_1_Template, 1, 1, "span", 32)(2, Dropdown_ng_container_6_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 33);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.dropdownIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Dropdown_span_7_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_span_7_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_span_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 36);
    ɵɵtemplate(1, Dropdown_span_7_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_10_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 43);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c122, ctx_r2.filterOptions));
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchIcon", 35);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-filter-icon");
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 47);
    ɵɵtemplate(1, Dropdown_ng_template_10_div_4_ng_template_2_span_4_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_10_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44)(1, "input", 45, 9);
    ɵɵlistener("input", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_input_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterInputChange($event));
    })("keydown", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterKeyDown($event));
    })("blur", function Dropdown_ng_template_10_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterBlur($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, Dropdown_ng_template_10_div_4_ng_template_2_SearchIcon_3_Template, 1, 1, "SearchIcon", 33)(4, Dropdown_ng_template_10_div_4_ng_template_2_span_4_Template, 2, 1, "span", 46);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("value", ctx_r2._filterValue() || "");
    ɵɵattribute("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterIconTemplate);
  }
}
function Dropdown_ng_template_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 42);
    ɵɵlistener("click", function Dropdown_ng_template_10_div_4_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵtemplate(1, Dropdown_ng_template_10_div_4_ng_container_1_Template, 2, 4, "ng-container", 23)(2, Dropdown_ng_template_10_div_4_ng_template_2_Template, 5, 7, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_10_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 43);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    ɵɵnextContext(2);
    const buildInItems_r15 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c132, items_r13, scrollerOptions_r14));
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 43);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c122, scrollerOptions_r16));
  }
}
function Dropdown_ng_template_10_p_scroller_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_10_p_scroller_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 49);
    ɵɵelementContainerEnd();
  }
}
function Dropdown_ng_template_10_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 48, 10);
    ɵɵlistener("onLazyLoad", function Dropdown_ng_template_10_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, Dropdown_ng_template_10_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", 21)(3, Dropdown_ng_template_10_p_scroller_6_ng_container_3_Template, 2, 0, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(8, _c03, ctx_r2.scrollHeight));
    ɵɵproperty("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize || ctx_r2._itemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.loaderTemplate);
  }
}
function Dropdown_ng_template_10_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_10_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 43);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const buildInItems_r15 = ɵɵreference(9);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c132, ctx_r2.visibleOptions(), ɵɵpureFunction0(2, _c14)));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 53);
    ɵɵtemplate(2, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 17)(3, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 43);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c03, scrollerOptions_r20.itemSize + "px"));
    ɵɵattribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.groupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.groupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c23, option_r17.optionGroup));
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p-dropdownItem", 54);
    ɵɵlistener("onClick", function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onClick_1_listener($event) {
      ɵɵrestoreView(_r21);
      const option_r17 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template_p_dropdownItem_onMouseEnter_1_listener($event) {
      ɵɵrestoreView(_r21);
      const i_r19 = ɵɵnextContext().index;
      const scrollerOptions_r20 = ɵɵnextContext().options;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize);
  }
}
function Dropdown_ng_template_10_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 17)(1, Dropdown_ng_template_10_ng_template_8_ng_template_2_ng_container_1_Template, 2, 9, "ng-container", 17);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r2.isOptionGroup(option_r17));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 12);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 55);
    ɵɵtemplate(1, Dropdown_ng_template_10_ng_template_8_li_3_ng_container_1_Template, 2, 1, "ng-container", 23)(2, Dropdown_ng_template_10_ng_template_8_li_3_ng_container_2_Template, 2, 0, "ng-container", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c03, scrollerOptions_r20.itemSize + "px"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.emptyFilterTemplate && !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.emptyFilter);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 13);
  }
}
function Dropdown_ng_template_10_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 55);
    ɵɵtemplate(1, Dropdown_ng_template_10_ng_template_8_li_4_ng_container_1_Template, 2, 1, "ng-container", 23)(2, Dropdown_ng_template_10_ng_template_8_li_4_ng_container_2_Template, 2, 0, "ng-container", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c03, scrollerOptions_r20.itemSize + "px"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.emptyTemplate)("ngIfElse", ctx_r2.empty);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyTemplate);
  }
}
function Dropdown_ng_template_10_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 50, 11);
    ɵɵtemplate(2, Dropdown_ng_template_10_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 51)(3, Dropdown_ng_template_10_ng_template_8_li_3_Template, 3, 6, "li", 52)(4, Dropdown_ng_template_10_ng_template_8_li_4_Template, 3, 6, "li", 52);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(scrollerOptions_r20.contentStyle);
    ɵɵproperty("ngClass", scrollerOptions_r20.contentStyleClass);
    ɵɵattribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", items_r22);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Dropdown_ng_template_10_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 37)(1, "span", 38, 5);
    ɵɵlistener("focus", function Dropdown_ng_template_10_Template_span_focus_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onFirstHiddenFocus($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, Dropdown_ng_template_10_ng_container_3_Template, 1, 0, "ng-container", 31)(4, Dropdown_ng_template_10_div_4_Template, 4, 2, "div", 39);
    ɵɵelementStart(5, "div", 40);
    ɵɵtemplate(6, Dropdown_ng_template_10_p_scroller_6_Template, 4, 10, "p-scroller", 41)(7, Dropdown_ng_template_10_ng_container_7_Template, 2, 6, "ng-container", 17)(8, Dropdown_ng_template_10_ng_template_8_Template, 5, 8, "ng-template", null, 6, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵtemplate(10, Dropdown_ng_template_10_ng_container_10_Template, 1, 0, "ng-container", 31);
    ɵɵelementStart(11, "span", 38, 7);
    ɵɵlistener("focus", function Dropdown_ng_template_10_Template_span_focus_11_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onLastHiddenFocus($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.panelStyleClass);
    ɵɵproperty("ngClass", "p-dropdown-panel p-component")("ngStyle", ctx_r2.panelStyle);
    ɵɵadvance();
    ɵɵattribute("aria-hidden", true)("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filter);
    ɵɵadvance();
    ɵɵstyleProp("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.virtualScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.virtualScroll);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.footerTemplate);
    ɵɵadvance();
    ɵɵattribute("aria-hidden", true)("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var DROPDOWN_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Dropdown),
  multi: true
};
var DropdownItem = class _DropdownItem {
  id;
  option;
  selected;
  focused;
  label;
  disabled;
  visible;
  itemSize;
  ariaPosInset;
  ariaSetSize;
  template;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  ngOnInit() {
  }
  onOptionClick(event) {
    this.onClick.emit(event);
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit(event);
  }
  static ɵfac = function DropdownItem_Factory(t) {
    return new (t || _DropdownItem)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DropdownItem,
    selectors: [["p-dropdownItem"]],
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      option: "option",
      selected: "selected",
      focused: "focused",
      label: "label",
      disabled: "disabled",
      visible: "visible",
      itemSize: "itemSize",
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template"
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    decls: 3,
    vars: 21,
    consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "ngStyle", "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function DropdownItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "li", 0);
        ɵɵlistener("click", function DropdownItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function DropdownItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        ɵɵtemplate(1, DropdownItem_span_1_Template, 2, 1, "span", 1)(2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("id", ctx.id)("ngStyle", ɵɵpureFunction1(13, _c03, ctx.itemSize + "px"))("ngClass", ɵɵpureFunction3(15, _c13, ctx.selected, ctx.disabled, ctx.focused));
        ɵɵattribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.template);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵɵpureFunction1(19, _c23, ctx.option));
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItem, [{
    type: Component,
    args: [{
      selector: "p-dropdownItem",
      template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [ngClass]="{ 'p-dropdown-item': true, 'p-highlight': selected, 'p-disabled': disabled, 'p-focus': focused }"
        >
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    focused: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var Dropdown = class _Dropdown {
  el;
  renderer;
  cd;
  zone;
  filterService;
  config;
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter;
  /**
   * Name of the input element.
   * @group Props
   */
  name;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @group Props
   */
  required;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @group Props
   */
  editable;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Default text to display when no option is selected.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Clears the filter value when hiding the dropdown.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Icon class of the dropdown icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to display the first item as the label if no placeholder is defined and value is null.
   * @deprecated since v17.3.0, set initial value by model instead.
   * @group Props
   */
  autoDisplayFirst = true;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Maximum number of character allows in the editable input field.
   * @group Props
   */
  maxlength;
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = false;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible)
        this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  /**
   * Item size of item to be virtual scrolled.
   * @group Props
   * @deprecated use virtualScrollItemSize property instead.
   */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  _itemSize;
  /**
   * Whether to automatically manage layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.warn("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _autoZIndex;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.warn("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _baseZIndex;
  /**
   * Transition options of the show animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _showTransitionOptions;
  /**
   * Transition options of the hide animation.
   * @group Props
   * @deprecated since v14.2.0, use overlayOptions property instead.
   */
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  _hideTransitionOptions;
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    setTimeout(() => {
      this._filterValue.set(val);
    });
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!ObjectUtils.deepEquals(val, this._options())) {
      this._options.set(val);
    }
  }
  /**
   * Callback to invoke when value of dropdown changes.
   * @param {DropdownChangeEvent} event - custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {DropdownFilterEvent} event - custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when dropdown gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when dropdown loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when dropdown overlay gets hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when dropdown clears the value.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {DropdownLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  containerViewChild;
  filterViewChild;
  focusInputViewChild;
  editableInputViewChild;
  itemsViewChild;
  scroller;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  templates;
  _disabled;
  itemsWrapper;
  itemTemplate;
  groupTemplate;
  loaderTemplate;
  selectedItemTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  dropdownIconTemplate;
  clearIconTemplate;
  filterIconTemplate;
  filterOptions;
  _options = signal(null);
  _placeholder = signal(void 0);
  modelValue = signal(null);
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  hover;
  focused;
  overlayVisible;
  optionsChanged;
  panel;
  dimensionsUpdated;
  hoveredItem;
  selectedOptionUpdated;
  _filterValue = signal(null);
  searchValue;
  searchIndex;
  searchTimeout;
  previousSearchChar;
  currentSearchChar;
  preventModelTouched;
  focusedOptionIndex = signal(-1);
  labelId;
  listId;
  clicked = signal(false);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.disabled;
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get containerClass() {
    return {
      "p-dropdown p-component p-inputwrapper": true,
      "p-disabled": this.disabled,
      "p-dropdown-clearable": this.showClear && !this.disabled,
      "p-focus": this.focused,
      "p-inputwrapper-filled": this.modelValue() !== void 0 && this.modelValue() !== null && !this.modelValue().length,
      "p-inputwrapper-focus": this.focused || this.overlayVisible
    };
  }
  get inputClass() {
    const label = this.label();
    return {
      "p-dropdown-label p-inputtext": true,
      "p-placeholder": this.placeholder() && label === this.placeholder(),
      "p-dropdown-label-empty": !this.editable && !this.selectedItemTemplate && (label === void 0 || label === null || label === "p-emptylabel" || label.length === 0)
    };
  }
  get panelClass() {
    return {
      "p-dropdown-panel p-component": true,
      "p-input-filled": this.config.inputStyle === "filled",
      "p-ripple-disabled": this.config.ripple === false
    };
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    if (this._filterValue()) {
      const _filterBy = this.filterBy || this.optionLabel;
      const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter((option) => {
        if (option.label) {
          return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }
        return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
      }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
          if (filteredItems.length > 0)
            filtered.push(__spreadProps(__spreadValues({}, group), {
              [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
            }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  });
  label = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const selectedOptionIndex = options.findIndex((option) => this.isOptionValueEqualsModelValue(option));
    return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || "p-emptylabel";
  });
  filled = computed(() => {
    if (typeof this.modelValue() === "string")
      return !!this.modelValue();
    return this.label() !== "p-emptylabel" && this.modelValue() !== void 0 && this.modelValue() !== null;
  });
  selectedOption;
  editableInputValue = computed(() => this.getOptionLabel(this.selectedOption) || this.modelValue() || "");
  constructor(el, renderer, cd, zone, filterService, config) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && ObjectUtils.isNotEmpty(visibleOptions)) {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
          this.selectedOption = visibleOptions[selectedOptionIndex];
        }
      }
      if (ObjectUtils.isEmpty(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && ObjectUtils.isNotEmpty(this.selectedOption)) {
        this.selectedOption = null;
      }
      if (modelValue !== void 0 && this.editable) {
        this.updateEditableLabel();
      }
      this.cd.markForCheck();
    });
  }
  isModelValueNotSet() {
    return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
  }
  displayPlaceholder() {
    return ObjectUtils.isEmpty(this.selectedOption) && this.label() === this.placeholder();
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, "li.p-highlight");
      if (selectedItem) {
        DomHandler.scrollInView(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "selectedItem":
          this.selectedItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
    if (this.autoDisplayFirst && (this.modelValue() === null || this.modelValue() === void 0)) {
      if (!this.placeholder()) {
        const ind = this.findFirstOptionIndex();
        this.onOptionSelect(null, this.visibleOptions()[ind], false, true);
      }
    }
  }
  onOptionSelect(event, option, isHide = true, preventChange = false) {
    if (!this.isSelected(option)) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value
      });
    }
    if (isHide) {
      this.hide(true);
    }
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.modelValue.set(value);
    this.selectedOptionUpdated = true;
  }
  writeValue(value) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.allowModelChange() && this.onModelChange(value);
    this.modelValue.set(this.value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  allowModelChange() {
    return this.autoDisplayFirst && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length;
  }
  isSelected(option) {
    return this.isValidOption(option) && this.isOptionValueEqualsModelValue(option);
  }
  isOptionValueEqualsModelValue(option) {
    return ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  ngAfterViewInit() {
    if (this.editable) {
      this.updateEditableLabel();
    }
  }
  updateEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || "";
    }
  }
  clearEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = "";
    }
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionLabel(option) {
    return this.optionLabel !== void 0 && this.optionLabel !== null ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue && this.optionValue !== null ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  isOptionDisabled(option) {
    if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
      return false;
    } else {
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
    }
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this._filterValue.set(null);
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onContainerClick(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.onClick.emit(event);
    this.clicked.set(true);
    this.cd.detectChanges();
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  onEditableInput(event) {
    const value = event.target.value;
    this.searchValue = "";
    const matched = this.searchOptions(event, value);
    !matched && this.focusedOptionIndex.set(-1);
    this.onModelChange(value);
    this.updateModel(value, event);
    setTimeout(() => {
      this.onChange.emit({
        originalEvent: event,
        value
      });
    }, 1);
    !this.overlayVisible && ObjectUtils.isNotEmpty(value) && this.show();
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
    this.focusedOptionIndex.set(focusedOptionIndex);
    if (isFocus) {
      DomHandler.focus(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-dropdown-items-wrapper");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = DomHandler.findSingle(this.itemsWrapper, ".p-dropdown-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter && !this.editable) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    this.clicked.set(false);
    this.searchValue = "";
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (isFocus) {
      if (this.focusInputViewChild) {
        DomHandler.focus(this.focusInputViewChild?.nativeElement);
      }
      if (this.editable && this.editableInputViewChild) {
        DomHandler.focus(this.editableInputViewChild?.nativeElement);
      }
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    if (this.disabled) {
      return;
    }
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onKeyDown(event, search) {
    if (this.disabled || this.readonly) {
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, this.editable);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, this.editable);
        break;
      case "Delete":
        this.onDeleteKey(event);
        break;
      case "Home":
        this.onHomeKey(event, this.editable);
        break;
      case "End":
        this.onEndKey(event, this.editable);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Space":
        this.onSpaceKey(event, search);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event, this.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!event.metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          !this.overlayVisible && this.show();
          !this.editable && this.searchOptions(event, event.key);
        }
        break;
    }
    this.clicked.set(false);
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
        this.onEnterKey(event, true);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      this.show();
      this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        const option = this.visibleOptions()[index];
        this.onOptionSelect(event, option, false);
      }
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  hasSelectedOption() {
    return this.modelValue() !== void 0;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastOptionIndex() {
    return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  isValidOption(option) {
    return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionGroup(option) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      this.overlayVisible && this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        target.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onSpaceKey(event, pressedInInputText = false) {
    !this.editable && !pressedInInputText && this.onEnterKey(event);
  }
  onEnterKey(event, pressedInInput = false) {
    if (!this.overlayVisible) {
      this.focusedOptionIndex.set(-1);
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      !pressedInInput && this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    this.overlayVisible && this.hide(true);
    event.preventDefault();
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getFirstFocusableElement(this.overlayViewChild.el?.nativeElement, ":not(.p-hidden-focusable)") : this.focusInputViewChild?.nativeElement;
    DomHandler.focus(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    DomHandler.focus(focusableEl);
  }
  hasFocusableElements() {
    return DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  onBackspaceKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      !this.overlayVisible && this.show();
    }
  }
  searchFields() {
    return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild.alignOverlay();
    });
    this.cd.markForCheck();
  }
  applyFocus() {
    if (this.editable)
      DomHandler.findSingle(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
    else
      DomHandler.focus(this.focusInputViewChild?.nativeElement);
  }
  /**
   * Applies focus.
   * @group Method
   */
  focus() {
    this.applyFocus();
  }
  /**
   * Clears the model.
   * @group Method
   */
  clear(event) {
    this.updateModel(null, event);
    this.clearEditableLabel();
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onClear.emit(event);
    this.resetFilter();
  }
  static ɵfac = function Dropdown_Factory(t) {
    return new (t || _Dropdown)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FilterService), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Dropdown,
    selectors: [["p-dropdown"]],
    contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dropdown_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c33, 5);
        ɵɵviewQuery(_c43, 5);
        ɵɵviewQuery(_c53, 5);
        ɵɵviewQuery(_c63, 5);
        ɵɵviewQuery(_c73, 5);
        ɵɵviewQuery(_c82, 5);
        ɵɵviewQuery(_c92, 5);
        ɵɵviewQuery(_c102, 5);
        ɵɵviewQuery(_c11, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusInputViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editableInputViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 4,
    hostBindings: function Dropdown_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-inputwrapper-filled", ctx.filled())("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: "filter",
      name: "name",
      style: "style",
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: "readonly",
      required: "required",
      editable: "editable",
      appendTo: "appendTo",
      tabindex: "tabindex",
      placeholder: "placeholder",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: "autofocus",
      resetFilterOnHide: "resetFilterOnHide",
      dropdownIcon: "dropdownIcon",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      autoDisplayFirst: "autoDisplayFirst",
      group: "group",
      showClear: "showClear",
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: "lazy",
      virtualScroll: "virtualScroll",
      virtualScrollItemSize: "virtualScrollItemSize",
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      maxlength: "maxlength",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: "focusOnHover",
      selectOnFocus: "selectOnFocus",
      autoOptionFocus: "autoOptionFocus",
      autofocusFilter: "autofocusFilter",
      disabled: "disabled",
      itemSize: "itemSize",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      filterValue: "filterValue",
      options: "options"
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    features: [ɵɵProvidersFeature([DROPDOWN_VALUE_ACCESSOR])],
    decls: 11,
    vars: 20,
    consts: [["container", ""], ["overlay", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], [3, "click", "ngClass", "ngStyle"], ["role", "combobox", "pAutoFocus", "", 3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", "aria-haspopup", "listbox", 3, "ngClass", "disabled", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], ["class", "p-dropdown-trigger-icon", 4, "ngIf"], [3, "visibleChange", "onAnimationStart", "onHide", "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions"], ["pTemplate", "content"], ["role", "combobox", "pAutoFocus", "", 3, "focus", "blur", "keydown", "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "autofocus"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", "aria-haspopup", "listbox", 3, "input", "keydown", "focus", "blur", "ngClass", "disabled"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-dropdown-clear-icon", 3, "click", 4, "ngIf"], [3, "click", "styleClass"], [1, "p-dropdown-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-dropdown-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-dropdown-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["class", "p-dropdown-header", 3, "click", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [1, "p-dropdown-header", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-dropdown-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "input", "keydown", "blur", "value"], ["class", "p-dropdown-filter-icon", 4, "ngIf"], [1, "p-dropdown-filter-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-dropdown-empty-message", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-dropdown-item-group", 3, "ngStyle"], [3, "onClick", "onMouseEnter", "id", "option", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize"], [1, "p-dropdown-empty-message", 3, "ngStyle"]],
    template: function Dropdown_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 14, 0);
        ɵɵlistener("click", function Dropdown_Template_div_click_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onContainerClick($event));
        });
        ɵɵtemplate(2, Dropdown_span_2_Template, 6, 20, "span", 15)(3, Dropdown_input_3_Template, 2, 4, "input", 16)(4, Dropdown_ng_container_4_Template, 3, 2, "ng-container", 17);
        ɵɵelementStart(5, "div", 18);
        ɵɵtemplate(6, Dropdown_ng_container_6_Template, 3, 2, "ng-container", 17)(7, Dropdown_span_7_Template, 2, 1, "span", 19);
        ɵɵelementEnd();
        ɵɵelementStart(8, "p-overlay", 20, 1);
        ɵɵtwoWayListener("visibleChange", function Dropdown_Template_p_overlay_visibleChange_8_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_8_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function Dropdown_Template_p_overlay_onHide_8_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.hide());
        });
        ɵɵtemplate(10, Dropdown_ng_template_10_Template, 13, 19, "ng-template", 21);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        let tmp_9_0;
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        ɵɵattribute("id", ctx.id);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx.editable);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.editable);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.isVisibleClearIcon);
        ɵɵadvance();
        ɵɵattribute("aria-expanded", (tmp_9_0 = ctx.overlayVisible) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : false)("data-pc-section", "trigger");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.dropdownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dropdownIconTemplate);
        ɵɵadvance();
        ɵɵtwoWayProperty("visible", ctx.overlayVisible);
        ɵɵproperty("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, PrimeTemplate, Tooltip, Scroller, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, DropdownItem],
    styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dropdown, [{
    type: Component,
    args: [{
      selector: "p-dropdown",
      template: `
        <div #container [attr.id]="id" [ngClass]="containerClass" (click)="onContainerClick($event)" [ngStyle]="style" [class]="styleClass">
            <span
                #focusInput
                [ngClass]="inputClass"
                *ngIf="!editable"
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
                [attr.aria-disabled]="disabled"
                [attr.id]="inputId"
                role="combobox"
                [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? id + '_list' : null"
                [attr.tabindex]="!disabled ? tabindex : -1"
                pAutoFocus
                [autofocus]="autofocus"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-required]="required"
                [attr.required]="required"
            >
                <ng-container *ngIf="!selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
                <ng-container *ngIf="selectedItemTemplate && selectedOption" [ngTemplateOutlet]="selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
                <ng-template #defaultPlaceholder>
                    <span *ngIf="displayPlaceholder()">{{ label() === 'p-emptylabel' ? '&nbsp;' : placeholder() }}</span>
                </ng-template>
            </span>
            <input
                *ngIf="editable"
                #editableInput
                type="text"
                [attr.maxlength]="maxlength"
                [ngClass]="inputClass"
                [disabled]="disabled"
                aria-haspopup="listbox"
                [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
                (input)="onEditableInput($event)"
                (keydown)="onKeyDown($event)"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
            />
            <ng-container *ngIf="isVisibleClearIcon">
                <TimesIcon [styleClass]="'p-dropdown-clear-icon'" (click)="clear($event)" *ngIf="!clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
                <span class="p-dropdown-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>

            <div class="p-dropdown-trigger" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span class="p-dropdown-trigger-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-dropdown-trigger-icon'" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-dropdown-trigger-icon">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                </span>
            </div>

            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [ngClass]="'p-dropdown-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <span
                            #firstHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="true"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onFirstHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        >
                        </span>
                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                        <div class="p-dropdown-header" *ngIf="filter" (click)="$event.stopPropagation()">
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div class="p-dropdown-filter-container">
                                    <input
                                        #filter
                                        type="text"
                                        autocomplete="off"
                                        [value]="_filterValue() || ''"
                                        class="p-dropdown-filter p-inputtext p-component"
                                        [attr.placeholder]="filterPlaceholder"
                                        [attr.aria-owns]="id + '_list'"
                                        (input)="onFilterInputChange($event)"
                                        [attr.aria-label]="ariaFilterLabel"
                                        [attr.aria-activedescendant]="focusedOptionId"
                                        (keydown)="onFilterKeyDown($event)"
                                        (blur)="onFilterBlur($event)"
                                    />
                                    <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-dropdown-filter-icon'" />
                                    <span *ngIf="filterIconTemplate" class="p-dropdown-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>
                            </ng-template>
                        </div>
                        <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" class="p-dropdown-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                    <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                        <ng-container *ngIf="isOptionGroup(option)">
                                            <li class="p-dropdown-item-group" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                            </li>
                                        </ng-container>
                                        <ng-container *ngIf="!isOptionGroup(option)">
                                            <p-dropdownItem
                                                [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                                [option]="option"
                                                [selected]="isSelected(option)"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                [template]="itemTemplate"
                                                [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                                [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                                [ariaSetSize]="ariaSetSize"
                                                (onClick)="onOptionSelect($event, option)"
                                                (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                            ></p-dropdownItem>
                                        </ng-container>
                                    </ng-template>

                                    <li *ngIf="filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                        <span
                            #lastHiddenFocusableEl
                            role="presentation"
                            [attr.aria-hidden]="true"
                            class="p-hidden-accessible p-hidden-focusable"
                            [attr.tabindex]="0"
                            (focus)="onLastHiddenFocus($event)"
                            [attr.data-p-hidden-accessible]="true"
                            [attr.data-p-hidden-focusable]="true"
                        ></span>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `,
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled()",
        "[class.p-inputwrapper-focus]": "focused || overlayVisible"
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;opacity:0}input.p-dropdown-label{cursor:default}.p-dropdown .p-dropdown-panel{min-width:100%}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-item-group{cursor:auto}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }], {
    id: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterFields: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    resetFilterOnHide: [{
      type: Input
    }],
    dropdownIcon: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    autoDisplayFirst: [{
      type: Input
    }],
    group: [{
      type: Input
    }],
    showClear: [{
      type: Input
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input
    }],
    virtualScrollItemSize: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input
    }],
    autofocusFilter: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DropdownModule = class _DropdownModule {
  static ɵfac = function DropdownModule_Factory(t) {
    return new (t || _DropdownModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DropdownModule,
    declarations: [Dropdown, DropdownItem],
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon],
    exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, OverlayModule, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon],
      exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();

// node_modules/@vanillabp/bc-official-gui-client/dist/index.js
var BASE_PATH = "/gui/api/v1".replace(/\/+$/, "");
var Configuration = class {
  constructor(configuration = {}) {
    this.configuration = configuration;
  }
  set config(configuration) {
    this.configuration = configuration;
  }
  get basePath() {
    return this.configuration.basePath != null ? this.configuration.basePath : BASE_PATH;
  }
  get fetchApi() {
    return this.configuration.fetchApi;
  }
  get middleware() {
    return this.configuration.middleware || [];
  }
  get queryParamsStringify() {
    return this.configuration.queryParamsStringify || querystring;
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const apiKey = this.configuration.apiKey;
    if (apiKey) {
      return typeof apiKey === "function" ? apiKey : () => apiKey;
    }
    return void 0;
  }
  get accessToken() {
    const accessToken = this.configuration.accessToken;
    if (accessToken) {
      return typeof accessToken === "function" ? accessToken : () => __async(this, null, function* () {
        return accessToken;
      });
    }
    return void 0;
  }
  get headers() {
    return this.configuration.headers;
  }
  get credentials() {
    return this.configuration.credentials;
  }
};
var DefaultConfig = new Configuration();
var _BaseAPI = class _BaseAPI2 {
  constructor(configuration = DefaultConfig) {
    this.configuration = configuration;
    this.fetchApi = (url, init) => __async(this, null, function* () {
      let fetchParams = { url, init };
      for (const middleware of this.middleware) {
        if (middleware.pre) {
          fetchParams = (yield middleware.pre(__spreadValues({
            fetch: this.fetchApi
          }, fetchParams))) || fetchParams;
        }
      }
      let response = void 0;
      try {
        response = yield (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
      } catch (e) {
        for (const middleware of this.middleware) {
          if (middleware.onError) {
            response = (yield middleware.onError({
              fetch: this.fetchApi,
              url: fetchParams.url,
              init: fetchParams.init,
              error: e,
              response: response ? response.clone() : void 0
            })) || response;
          }
        }
        if (response === void 0) {
          if (e instanceof Error) {
            throw new FetchError(e, "The request failed and the interceptors did not return an alternative response");
          } else {
            throw e;
          }
        }
      }
      for (const middleware of this.middleware) {
        if (middleware.post) {
          response = (yield middleware.post({
            fetch: this.fetchApi,
            url: fetchParams.url,
            init: fetchParams.init,
            response: response.clone()
          })) || response;
        }
      }
      return response;
    });
    this.middleware = configuration.middleware;
  }
  withMiddleware(...middlewares) {
    const next = this.clone();
    next.middleware = next.middleware.concat(...middlewares);
    return next;
  }
  withPreMiddleware(...preMiddlewares) {
    const middlewares = preMiddlewares.map((pre) => ({ pre }));
    return this.withMiddleware(...middlewares);
  }
  withPostMiddleware(...postMiddlewares) {
    const middlewares = postMiddlewares.map((post) => ({ post }));
    return this.withMiddleware(...middlewares);
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    if (!mime) {
      return false;
    }
    return _BaseAPI2.jsonRegex.test(mime);
  }
  request(context, initOverrides) {
    return __async(this, null, function* () {
      const { url, init } = yield this.createFetchParams(context, initOverrides);
      const response = yield this.fetchApi(url, init);
      if (response && (response.status >= 200 && response.status < 300)) {
        return response;
      }
      throw new ResponseError(response, "Response returned an error code");
    });
  }
  createFetchParams(context, initOverrides) {
    return __async(this, null, function* () {
      let url = this.configuration.basePath + context.path;
      if (context.query !== void 0 && Object.keys(context.query).length !== 0) {
        url += "?" + this.configuration.queryParamsStringify(context.query);
      }
      const headers = Object.assign({}, this.configuration.headers, context.headers);
      Object.keys(headers).forEach((key) => headers[key] === void 0 ? delete headers[key] : {});
      const initOverrideFn = typeof initOverrides === "function" ? initOverrides : () => __async(this, null, function* () {
        return initOverrides;
      });
      const initParams = {
        method: context.method,
        headers,
        body: context.body,
        credentials: this.configuration.credentials
      };
      const overriddenInit = __spreadValues(__spreadValues({}, initParams), yield initOverrideFn({
        init: initParams,
        context
      }));
      const init = __spreadProps(__spreadValues({}, overriddenInit), {
        body: isFormData(overriddenInit.body) || overriddenInit.body instanceof URLSearchParams || isBlob(overriddenInit.body) ? overriddenInit.body : JSON.stringify(overriddenInit.body)
      });
      return { url, init };
    });
  }
  /**
   * Create a shallow clone of `this` by constructing a new instance
   * and then shallow cloning data members.
   */
  clone() {
    const constructor = this.constructor;
    const next = new constructor(this.configuration);
    next.middleware = this.middleware.slice();
    return next;
  }
};
_BaseAPI.jsonRegex = new RegExp("^(:?application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(:?;.*)?$", "i");
var BaseAPI = _BaseAPI;
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
var ResponseError = class extends Error {
  constructor(response, msg) {
    super(msg);
    this.response = response;
    this.name = "ResponseError";
  }
};
var FetchError = class extends Error {
  constructor(cause, msg) {
    super(msg);
    this.cause = cause;
    this.name = "FetchError";
  }
};
var RequiredError = class extends Error {
  constructor(field, msg) {
    super(msg);
    this.field = field;
    this.name = "RequiredError";
  }
};
function exists(json, key) {
  const value = json[key];
  return value !== null && value !== void 0;
}
function querystring(params, prefix = "") {
  return Object.keys(params).map((key) => querystringSingleKey(key, params[key], prefix)).filter((part) => part.length > 0).join("&");
}
function querystringSingleKey(key, value, keyPrefix = "") {
  const fullKey = keyPrefix + (keyPrefix.length ? `[${key}]` : key);
  if (value instanceof Array) {
    const multiValue = value.map((singleValue) => encodeURIComponent(String(singleValue))).join(`&${encodeURIComponent(fullKey)}=`);
    return `${encodeURIComponent(fullKey)}=${multiValue}`;
  }
  if (value instanceof Set) {
    const valueAsArray = Array.from(value);
    return querystringSingleKey(key, valueAsArray, keyPrefix);
  }
  if (value instanceof Date) {
    return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
  }
  if (value instanceof Object) {
    return querystring(value, fullKey);
  }
  return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
}
var JSONApiResponse = class {
  constructor(raw, transformer = (jsonValue) => jsonValue) {
    this.raw = raw;
    this.transformer = transformer;
  }
  value() {
    return __async(this, null, function* () {
      return this.transformer(yield this.raw.json());
    });
  }
};
var VoidApiResponse = class {
  constructor(raw) {
    this.raw = raw;
  }
  value() {
    return __async(this, null, function* () {
      return void 0;
    });
  }
};
function GroupFromJSON(json) {
  return GroupFromJSONTyped(json);
}
function GroupFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "id": json["id"],
    "display": !exists(json, "display") ? void 0 : json["display"],
    "details": !exists(json, "details") ? void 0 : json["details"]
  };
}
function SearchQueryToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "path": value.path,
    "query": value.query,
    "caseInsensitive": value.caseInsensitive
  };
}
function KwicRequestToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "searchQueries": value.searchQueries === void 0 ? void 0 : value.searchQueries.map(SearchQueryToJSON)
  };
}
function KwicResultFromJSON(json) {
  return KwicResultFromJSONTyped(json);
}
function KwicResultFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "item": json["item"],
    "count": json["count"]
  };
}
function KwicResultsFromJSON(json) {
  return KwicResultsFromJSONTyped(json);
}
function KwicResultsFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "result": json["result"].map(KwicResultFromJSON)
  };
}
function PageFromJSON(json) {
  return PageFromJSONTyped(json);
}
function PageFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "totalElements": json["totalElements"],
    "totalPages": json["totalPages"],
    "number": json["number"],
    "size": json["size"]
  };
}
function PersonFromJSON(json) {
  return PersonFromJSONTyped(json);
}
function PersonFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "id": json["id"],
    "display": !exists(json, "display") ? void 0 : json["display"],
    "displayShort": !exists(json, "displayShort") ? void 0 : json["displayShort"],
    "email": !exists(json, "email") ? void 0 : json["email"],
    "avatar": !exists(json, "avatar") ? void 0 : json["avatar"],
    "details": !exists(json, "details") ? void 0 : json["details"]
  };
}
function UiUriTypeFromJSON(json) {
  return UiUriTypeFromJSONTyped(json);
}
function UiUriTypeFromJSONTyped(json, ignoreDiscriminator) {
  return json;
}
function UserSearchResultFromJSON(json) {
  return UserSearchResultFromJSONTyped(json);
}
function UserSearchResultFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "users": !exists(json, "users") ? void 0 : json["users"].map(PersonFromJSON)
  };
}
function UserTaskFromJSON(json) {
  return UserTaskFromJSONTyped(json);
}
function UserTaskFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "id": json["id"],
    "version": !exists(json, "version") ? void 0 : json["version"],
    "initiator": !exists(json, "initiator") ? void 0 : json["initiator"],
    "createdAt": new Date(json["createdAt"]),
    "updatedAt": new Date(json["updatedAt"]),
    "endedAt": !exists(json, "endedAt") ? void 0 : new Date(json["endedAt"]),
    "workflowModuleId": json["workflowModuleId"],
    "comment": !exists(json, "comment") ? void 0 : json["comment"],
    "bpmnProcessId": json["bpmnProcessId"],
    "bpmnProcessVersion": !exists(json, "bpmnProcessVersion") ? void 0 : json["bpmnProcessVersion"],
    "workflowTitle": !exists(json, "workflowTitle") ? void 0 : json["workflowTitle"],
    "workflowId": !exists(json, "workflowId") ? void 0 : json["workflowId"],
    "businessId": !exists(json, "businessId") ? void 0 : json["businessId"],
    "title": json["title"],
    "bpmnTaskId": !exists(json, "bpmnTaskId") ? void 0 : json["bpmnTaskId"],
    "taskDefinition": json["taskDefinition"],
    "taskDefinitionTitle": !exists(json, "taskDefinitionTitle") ? void 0 : json["taskDefinitionTitle"],
    "uiUri": json["uiUri"],
    "uiUriType": UiUriTypeFromJSON(json["uiUriType"]),
    "workflowModuleUri": json["workflowModuleUri"],
    "assignee": !exists(json, "assignee") ? void 0 : PersonFromJSON(json["assignee"]),
    "candidateUsers": !exists(json, "candidateUsers") ? void 0 : json["candidateUsers"].map(PersonFromJSON),
    "candidateGroups": !exists(json, "candidateGroups") ? void 0 : json["candidateGroups"].map(GroupFromJSON),
    "dueDate": !exists(json, "dueDate") ? void 0 : new Date(json["dueDate"]),
    "followUpDate": !exists(json, "followUpDate") ? void 0 : new Date(json["followUpDate"]),
    "details": !exists(json, "details") ? void 0 : json["details"],
    "detailsFulltextSearch": !exists(json, "detailsFulltextSearch") ? void 0 : json["detailsFulltextSearch"],
    "read": !exists(json, "read") ? void 0 : new Date(json["read"])
  };
}
function UserTaskIdsToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "userTaskIds": value.userTaskIds
  };
}
function UserTaskRetrieveModeToJSON(value) {
  return value;
}
function UserTasksFromJSON(json) {
  return UserTasksFromJSONTyped(json);
}
function UserTasksFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "serverTimestamp": new Date(json["serverTimestamp"]),
    "page": PageFromJSON(json["page"]),
    "userTasks": json["userTasks"].map(UserTaskFromJSON)
  };
}
function UserTasksRequestToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "pageNumber": value.pageNumber,
    "pageSize": value.pageSize,
    "query": value.query,
    "searchQueries": value.searchQueries === void 0 ? void 0 : value.searchQueries.map(SearchQueryToJSON),
    "sort": value.sort,
    "sortAscending": value.sortAscending,
    "mode": UserTaskRetrieveModeToJSON(value.mode)
  };
}
function UserTasksUpdateRequestToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "size": value.size,
    "query": value.query,
    "searchQueries": value.searchQueries === void 0 ? void 0 : value.searchQueries.map(SearchQueryToJSON),
    "sort": value.sort,
    "sortAscending": value.sortAscending,
    "knownUserTasksIds": value.knownUserTasksIds
  };
}
function WorkflowFromJSON(json) {
  return WorkflowFromJSONTyped(json);
}
function WorkflowFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "id": json["id"],
    "version": !exists(json, "version") ? void 0 : json["version"],
    "initiator": !exists(json, "initiator") ? void 0 : PersonFromJSON(json["initiator"]),
    "createdAt": new Date(json["createdAt"]),
    "updatedAt": new Date(json["updatedAt"]),
    "endedAt": !exists(json, "endedAt") ? void 0 : new Date(json["endedAt"]),
    "workflowModuleId": json["workflowModuleId"],
    "comment": !exists(json, "comment") ? void 0 : json["comment"],
    "bpmnProcessId": json["bpmnProcessId"],
    "bpmnProcessVersion": !exists(json, "bpmnProcessVersion") ? void 0 : json["bpmnProcessVersion"],
    "businessId": !exists(json, "businessId") ? void 0 : json["businessId"],
    "title": json["title"],
    "uiUri": json["uiUri"],
    "uiUriType": UiUriTypeFromJSON(json["uiUriType"]),
    "workflowModuleUri": json["workflowModuleUri"],
    "accessibleToUsers": !exists(json, "accessibleToUsers") ? void 0 : json["accessibleToUsers"].map(PersonFromJSON),
    "accessibleToGroups": !exists(json, "accessibleToGroups") ? void 0 : json["accessibleToGroups"].map(GroupFromJSON),
    "details": !exists(json, "details") ? void 0 : json["details"],
    "detailsFulltextSearch": !exists(json, "detailsFulltextSearch") ? void 0 : json["detailsFulltextSearch"]
  };
}
function WorkflowRetrieveModeToJSON(value) {
  return value;
}
function WorkflowsFromJSON(json) {
  return WorkflowsFromJSONTyped(json);
}
function WorkflowsFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "requestId": !exists(json, "requestId") ? void 0 : json["requestId"],
    "serverTimestamp": new Date(json["serverTimestamp"]),
    "page": PageFromJSON(json["page"]),
    "workflows": json["workflows"].map(WorkflowFromJSON)
  };
}
function WorkflowsRequestToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "pageNumber": value.pageNumber,
    "pageSize": value.pageSize,
    "searchQueries": value.searchQueries === void 0 ? void 0 : value.searchQueries.map(SearchQueryToJSON),
    "businessIds": value.businessIds,
    "sort": value.sort,
    "sortAscending": value.sortAscending,
    "mode": WorkflowRetrieveModeToJSON(value.mode)
  };
}
function WorkflowsUpdateRequestToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "size": value.size,
    "knownWorkflowsIds": value.knownWorkflowsIds,
    "searchQueries": value.searchQueries === void 0 ? void 0 : value.searchQueries.map(SearchQueryToJSON),
    "sort": value.sort,
    "sortAscending": value.sortAscending
  };
}
var OfficialTasklistApi = class extends BaseAPI {
  /**
   * assign or unassign a task to a user
   */
  assignTaskRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTaskId === null || requestParameters.userTaskId === void 0) {
        throw new RequiredError("userTaskId", "Required parameter requestParameters.userTaskId was null or undefined when calling assignTask.");
      }
      const queryParameters = {};
      if (requestParameters.unassign !== void 0) {
        queryParameters["unassign"] = requestParameters.unassign;
      }
      if (requestParameters.userId !== void 0) {
        queryParameters["userId"] = requestParameters.userId;
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/usertask/{userTaskId}/assign`.replace(`{${"userTaskId"}}`, encodeURIComponent(String(requestParameters.userTaskId))),
        method: "PATCH",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new VoidApiResponse(response);
    });
  }
  /**
   * assign or unassign a task to a user
   */
  assignTask(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      yield this.assignTaskRaw(requestParameters, initOverrides);
    });
  }
  /**
   * assign or unassign tasks to a user
   */
  assignTasksRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTaskIds === null || requestParameters.userTaskIds === void 0) {
        throw new RequiredError("userTaskIds", "Required parameter requestParameters.userTaskIds was null or undefined when calling assignTasks.");
      }
      const queryParameters = {};
      if (requestParameters.unassign !== void 0) {
        queryParameters["unassign"] = requestParameters.unassign;
      }
      if (requestParameters.userId !== void 0) {
        queryParameters["userId"] = requestParameters.userId;
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/usertask/assign`,
        method: "PATCH",
        headers: headerParameters,
        query: queryParameters,
        body: UserTaskIdsToJSON(requestParameters.userTaskIds)
      }, initOverrides);
      return new VoidApiResponse(response);
    });
  }
  /**
   * assign or unassign tasks to a user
   */
  assignTasks(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      yield this.assignTasksRaw(requestParameters, initOverrides);
    });
  }
  /**
   * claim or unclaim a task to the current user
   */
  claimTaskRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTaskId === null || requestParameters.userTaskId === void 0) {
        throw new RequiredError("userTaskId", "Required parameter requestParameters.userTaskId was null or undefined when calling claimTask.");
      }
      const queryParameters = {};
      if (requestParameters.unclaim !== void 0) {
        queryParameters["unclaim"] = requestParameters.unclaim;
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/usertask/{userTaskId}/claim`.replace(`{${"userTaskId"}}`, encodeURIComponent(String(requestParameters.userTaskId))),
        method: "PATCH",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new VoidApiResponse(response);
    });
  }
  /**
   * claim or unclaim a task to the current user
   */
  claimTask(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      yield this.claimTaskRaw(requestParameters, initOverrides);
    });
  }
  /**
   * claim or unclaim tasks to the current user
   */
  claimTasksRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTaskIds === null || requestParameters.userTaskIds === void 0) {
        throw new RequiredError("userTaskIds", "Required parameter requestParameters.userTaskIds was null or undefined when calling claimTasks.");
      }
      const queryParameters = {};
      if (requestParameters.unclaim !== void 0) {
        queryParameters["unclaim"] = requestParameters.unclaim;
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/usertask/claim`,
        method: "PATCH",
        headers: headerParameters,
        query: queryParameters,
        body: UserTaskIdsToJSON(requestParameters.userTaskIds)
      }, initOverrides);
      return new VoidApiResponse(response);
    });
  }
  /**
   * claim or unclaim tasks to the current user
   */
  claimTasks(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      yield this.claimTasksRaw(requestParameters, initOverrides);
    });
  }
  /**
   * Find users
   */
  findUsersRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const queryParameters = {};
      if (requestParameters.query !== void 0) {
        queryParameters["query"] = requestParameters.query;
      }
      if (requestParameters.limit !== void 0) {
        queryParameters["limit"] = requestParameters.limit;
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/user`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => UserSearchResultFromJSON(jsonValue));
    });
  }
  /**
   * Find users
   */
  findUsers() {
    return __async(this, arguments, function* (requestParameters = {}, initOverrides) {
      const response = yield this.findUsersRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Fetch data of one single User task
   */
  getUserTaskRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTaskId === null || requestParameters.userTaskId === void 0) {
        throw new RequiredError("userTaskId", "Required parameter requestParameters.userTaskId was null or undefined when calling getUserTask.");
      }
      const queryParameters = {};
      if (requestParameters.markAsRead !== void 0) {
        queryParameters["markAsRead"] = requestParameters.markAsRead;
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/usertask/{userTaskId}`.replace(`{${"userTaskId"}}`, encodeURIComponent(String(requestParameters.userTaskId))),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => UserTaskFromJSON(jsonValue));
    });
  }
  /**
   * Fetch data of one single User task
   */
  getUserTask(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getUserTaskRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Kwic results over user tasks
   */
  getUserTaskKwicResultsRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.kwicRequest === null || requestParameters.kwicRequest === void 0) {
        throw new RequiredError("kwicRequest", "Required parameter requestParameters.kwicRequest was null or undefined when calling getUserTaskKwicResults.");
      }
      const queryParameters = {};
      if (requestParameters.initialTimestamp !== void 0) {
        queryParameters["initialTimestamp"] = requestParameters.initialTimestamp.toISOString();
      }
      if (requestParameters.path !== void 0) {
        queryParameters["path"] = requestParameters.path;
      }
      if (requestParameters.query !== void 0) {
        queryParameters["query"] = requestParameters.query;
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/usertask`,
        method: "OPTIONS",
        headers: headerParameters,
        query: queryParameters,
        body: KwicRequestToJSON(requestParameters.kwicRequest)
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => KwicResultsFromJSON(jsonValue));
    });
  }
  /**
   * Kwic results over user tasks
   */
  getUserTaskKwicResults(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getUserTaskKwicResultsRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * User tasks to be shown in a list view
   */
  getUserTasksRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTasksRequest === null || requestParameters.userTasksRequest === void 0) {
        throw new RequiredError("userTasksRequest", "Required parameter requestParameters.userTasksRequest was null or undefined when calling getUserTasks.");
      }
      const queryParameters = {};
      if (requestParameters.initialTimestamp !== void 0) {
        queryParameters["initialTimestamp"] = requestParameters.initialTimestamp.toISOString();
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/usertask`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: UserTasksRequestToJSON(requestParameters.userTasksRequest)
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => UserTasksFromJSON(jsonValue));
    });
  }
  /**
   * User tasks to be shown in a list view
   */
  getUserTasks(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getUserTasksRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Updated list of usertasks
   */
  getUserTasksUpdateRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTasksUpdateRequest === null || requestParameters.userTasksUpdateRequest === void 0) {
        throw new RequiredError("userTasksUpdateRequest", "Required parameter requestParameters.userTasksUpdateRequest was null or undefined when calling getUserTasksUpdate.");
      }
      const queryParameters = {};
      if (requestParameters.initialTimestamp !== void 0) {
        queryParameters["initialTimestamp"] = requestParameters.initialTimestamp.toISOString();
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/usertask`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: UserTasksUpdateRequestToJSON(requestParameters.userTasksUpdateRequest)
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => UserTasksFromJSON(jsonValue));
    });
  }
  /**
   * Updated list of usertasks
   */
  getUserTasksUpdate(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getUserTasksUpdateRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * mark a task as read or unread
   */
  markTaskAsReadRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTaskId === null || requestParameters.userTaskId === void 0) {
        throw new RequiredError("userTaskId", "Required parameter requestParameters.userTaskId was null or undefined when calling markTaskAsRead.");
      }
      const queryParameters = {};
      if (requestParameters.unread !== void 0) {
        queryParameters["unread"] = requestParameters.unread;
      }
      const headerParameters = {};
      const response = yield this.request({
        path: `/usertask/{userTaskId}/mark-as-read`.replace(`{${"userTaskId"}}`, encodeURIComponent(String(requestParameters.userTaskId))),
        method: "PATCH",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new VoidApiResponse(response);
    });
  }
  /**
   * mark a task as read or unread
   */
  markTaskAsRead(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      yield this.markTaskAsReadRaw(requestParameters, initOverrides);
    });
  }
  /**
   * mark tasks as read or unread
   */
  markTasksAsReadRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.userTaskIds === null || requestParameters.userTaskIds === void 0) {
        throw new RequiredError("userTaskIds", "Required parameter requestParameters.userTaskIds was null or undefined when calling markTasksAsRead.");
      }
      const queryParameters = {};
      if (requestParameters.unread !== void 0) {
        queryParameters["unread"] = requestParameters.unread;
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/usertask/mark-as-read`,
        method: "PATCH",
        headers: headerParameters,
        query: queryParameters,
        body: UserTaskIdsToJSON(requestParameters.userTaskIds)
      }, initOverrides);
      return new VoidApiResponse(response);
    });
  }
  /**
   * mark tasks as read or unread
   */
  markTasksAsRead(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      yield this.markTasksAsReadRaw(requestParameters, initOverrides);
    });
  }
};
var OfficialWorkflowlistApi = class extends BaseAPI {
  /**
   * Kwic results over workflow items
   */
  getKwicResultsRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.kwicRequest === null || requestParameters.kwicRequest === void 0) {
        throw new RequiredError("kwicRequest", "Required parameter requestParameters.kwicRequest was null or undefined when calling getKwicResults.");
      }
      const queryParameters = {};
      if (requestParameters.initialTimestamp !== void 0) {
        queryParameters["initialTimestamp"] = requestParameters.initialTimestamp.toISOString();
      }
      if (requestParameters.path !== void 0) {
        queryParameters["path"] = requestParameters.path;
      }
      if (requestParameters.query !== void 0) {
        queryParameters["query"] = requestParameters.query;
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/workflow`,
        method: "OPTIONS",
        headers: headerParameters,
        query: queryParameters,
        body: KwicRequestToJSON(requestParameters.kwicRequest)
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => KwicResultsFromJSON(jsonValue));
    });
  }
  /**
   * Kwic results over workflow items
   */
  getKwicResults(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getKwicResultsRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Fetch usertasks for the workflow
   */
  getUserTasksOfWorkflowRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.workflowId === null || requestParameters.workflowId === void 0) {
        throw new RequiredError("workflowId", "Required parameter requestParameters.workflowId was null or undefined when calling getUserTasksOfWorkflow.");
      }
      if (requestParameters.llatcup === null || requestParameters.llatcup === void 0) {
        throw new RequiredError("llatcup", "Required parameter requestParameters.llatcup was null or undefined when calling getUserTasksOfWorkflow.");
      }
      if (requestParameters.userTasksRequest === null || requestParameters.userTasksRequest === void 0) {
        throw new RequiredError("userTasksRequest", "Required parameter requestParameters.userTasksRequest was null or undefined when calling getUserTasksOfWorkflow.");
      }
      const queryParameters = {};
      if (requestParameters.llatcup !== void 0) {
        queryParameters["llatcup"] = requestParameters.llatcup;
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/workflow/{workflowId}/usertasks`.replace(`{${"workflowId"}}`, encodeURIComponent(String(requestParameters.workflowId))),
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: UserTasksRequestToJSON(requestParameters.userTasksRequest)
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => jsonValue.map(UserTaskFromJSON));
    });
  }
  /**
   * Fetch usertasks for the workflow
   */
  getUserTasksOfWorkflow(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getUserTasksOfWorkflowRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Fetch data of one single workflow
   */
  getWorkflowRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.workflowId === null || requestParameters.workflowId === void 0) {
        throw new RequiredError("workflowId", "Required parameter requestParameters.workflowId was null or undefined when calling getWorkflow.");
      }
      const queryParameters = {};
      const headerParameters = {};
      const response = yield this.request({
        path: `/workflow/{workflowId}`.replace(`{${"workflowId"}}`, encodeURIComponent(String(requestParameters.workflowId))),
        method: "GET",
        headers: headerParameters,
        query: queryParameters
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => WorkflowFromJSON(jsonValue));
    });
  }
  /**
   * Fetch data of one single workflow
   */
  getWorkflow(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getWorkflowRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Workflows to be shown in a list view
   */
  getWorkflowsRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.workflowsRequest === null || requestParameters.workflowsRequest === void 0) {
        throw new RequiredError("workflowsRequest", "Required parameter requestParameters.workflowsRequest was null or undefined when calling getWorkflows.");
      }
      const queryParameters = {};
      if (requestParameters.requestId !== void 0) {
        queryParameters["requestId"] = requestParameters.requestId;
      }
      if (requestParameters.initialTimestamp !== void 0) {
        queryParameters["initialTimestamp"] = requestParameters.initialTimestamp.toISOString();
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/workflow`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: WorkflowsRequestToJSON(requestParameters.workflowsRequest)
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => WorkflowsFromJSON(jsonValue));
    });
  }
  /**
   * Workflows to be shown in a list view
   */
  getWorkflows(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getWorkflowsRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
  /**
   * Updated list of workflows
   */
  getWorkflowsUpdateRaw(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      if (requestParameters.workflowsUpdateRequest === null || requestParameters.workflowsUpdateRequest === void 0) {
        throw new RequiredError("workflowsUpdateRequest", "Required parameter requestParameters.workflowsUpdateRequest was null or undefined when calling getWorkflowsUpdate.");
      }
      const queryParameters = {};
      if (requestParameters.requestId !== void 0) {
        queryParameters["requestId"] = requestParameters.requestId;
      }
      if (requestParameters.initialTimestamp !== void 0) {
        queryParameters["initialTimestamp"] = requestParameters.initialTimestamp.toISOString();
      }
      const headerParameters = {};
      headerParameters["Content-Type"] = "application/json";
      const response = yield this.request({
        path: `/workflow`,
        method: "PUT",
        headers: headerParameters,
        query: queryParameters,
        body: WorkflowsUpdateRequestToJSON(requestParameters.workflowsUpdateRequest)
      }, initOverrides);
      return new JSONApiResponse(response, (jsonValue) => WorkflowsFromJSON(jsonValue));
    });
  }
  /**
   * Updated list of workflows
   */
  getWorkflowsUpdate(requestParameters, initOverrides) {
    return __async(this, null, function* () {
      const response = yield this.getWorkflowsUpdateRaw(requestParameters, initOverrides);
      return yield response.value();
    });
  }
};

// node_modules/@vanillabp/bc-dev-shell-angular/fesm2022/vanillabp-bc-dev-shell-angular.mjs
function MainComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    ɵɵproperty("value", user_r1.id);
    ɵɵadvance();
    ɵɵtextInterpolate3("", user_r1.id, ", ", user_r1.firstName, " ", user_r1.lastName, "");
  }
}
function MainComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function MainComponent_button_18_Template_button_click_0_listener() {
      const route_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.navigateTo(route_r3));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const route_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(route_r3);
  }
}
var _c04 = (a0) => ({
  "active": a0
});
function TaskToggleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("click", function TaskToggleComponent_div_1_Template_div_click_0_listener() {
      const option_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onChange.emit(option_r2.value));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("background-color", option_r2.background);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c04, ctx_r2.value === option_r2.value));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", option_r2.label, " ");
  }
}
var _c15 = (a0) => ({
  "phone": a0
});
var _c24 = () => ({
  "width": "100%"
});
function HeaderComponent_p_dropdown_7_ng_template_1_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 18);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const selectedOption_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(selectedOption_r3.label.split("|")[0].trim());
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" | ", selectedOption_r3.label.split("|")[1].trim(), "");
  }
}
function HeaderComponent_p_dropdown_7_ng_template_1_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const selectedOption_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(selectedOption_r3.label);
  }
}
function HeaderComponent_p_dropdown_7_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, HeaderComponent_p_dropdown_7_ng_template_1_div_0_ng_container_1_Template, 5, 2, "ng-container", 16)(2, HeaderComponent_p_dropdown_7_ng_template_1_div_0_ng_container_2_Template, 3, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selectedOption_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", selectedOption_r3.label.includes("|"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !selectedOption_r3.label.includes("|"));
  }
}
function HeaderComponent_p_dropdown_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, HeaderComponent_p_dropdown_7_ng_template_1_div_0_Template, 3, 2, "div", 14);
  }
  if (rf & 2) {
    const selectedOption_r3 = ctx.$implicit;
    ɵɵproperty("ngIf", selectedOption_r3);
  }
}
function HeaderComponent_p_dropdown_7_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 18);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const option_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r4.label.split("|")[0].trim());
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" | ", option_r4.label.split("|")[1].trim(), "");
  }
}
function HeaderComponent_p_dropdown_7_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const option_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r4.label);
  }
}
function HeaderComponent_p_dropdown_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, HeaderComponent_p_dropdown_7_ng_template_2_ng_container_1_Template, 5, 2, "ng-container", 16)(2, HeaderComponent_p_dropdown_7_ng_template_2_ng_container_2_Template, 3, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", option_r4.label.includes("|"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !option_r4.label.includes("|"));
  }
}
function HeaderComponent_p_dropdown_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-dropdown", 11);
    ɵɵtwoWayListener("ngModelChange", function HeaderComponent_p_dropdown_7_Template_p_dropdown_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.selectedTaskId, $event) || (ctx_r1.selectedTaskId = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function HeaderComponent_p_dropdown_7_Template_p_dropdown_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemSelect($event));
    })("onLazyLoad", function HeaderComponent_p_dropdown_7_Template_p_dropdown_onLazyLoad_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.loadMore());
    });
    ɵɵtemplate(1, HeaderComponent_p_dropdown_7_ng_template_1_Template, 1, 1, "ng-template", 12)(2, HeaderComponent_p_dropdown_7_ng_template_2_Template, 3, 2, "ng-template", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction0(10, _c24));
    ɵɵproperty("options", ctx_r1.userTaskOptions);
    ɵɵtwoWayProperty("ngModel", ctx_r1.selectedTaskId);
    ɵɵproperty("virtualScroll", true)("filter", true)("showClear", true)("lazy", true)("virtualScrollItemSize", 38)("scrollHeight", "250px");
  }
}
function HeaderComponent_p_dropdown_8_ng_template_1_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 18);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const selectedOption_r6 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(selectedOption_r6.label.split("|")[0].trim());
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" | ", selectedOption_r6.label.split("|")[1].trim(), "");
  }
}
function HeaderComponent_p_dropdown_8_ng_template_1_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const selectedOption_r6 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(selectedOption_r6.label);
  }
}
function HeaderComponent_p_dropdown_8_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, HeaderComponent_p_dropdown_8_ng_template_1_div_0_ng_container_1_Template, 5, 2, "ng-container", 16)(2, HeaderComponent_p_dropdown_8_ng_template_1_div_0_ng_container_2_Template, 3, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selectedOption_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", selectedOption_r6.label.includes("|"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !selectedOption_r6.label.includes("|"));
  }
}
function HeaderComponent_p_dropdown_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, HeaderComponent_p_dropdown_8_ng_template_1_div_0_Template, 3, 2, "div", 14);
  }
  if (rf & 2) {
    const selectedOption_r6 = ctx.$implicit;
    ɵɵproperty("ngIf", selectedOption_r6);
  }
}
function HeaderComponent_p_dropdown_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 18);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const option_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r7.label.split("|")[0].trim());
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" | ", option_r7.label.split("|")[1].trim(), "");
  }
}
function HeaderComponent_p_dropdown_8_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const option_r7 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r7.label);
  }
}
function HeaderComponent_p_dropdown_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, HeaderComponent_p_dropdown_8_ng_template_2_ng_container_1_Template, 5, 2, "ng-container", 16)(2, HeaderComponent_p_dropdown_8_ng_template_2_ng_container_2_Template, 3, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", option_r7.label.includes("|"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !option_r7.label.includes("|"));
  }
}
function HeaderComponent_p_dropdown_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-dropdown", 19);
    ɵɵtwoWayListener("ngModelChange", function HeaderComponent_p_dropdown_8_Template_p_dropdown_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.selectedWorkflowId, $event) || (ctx_r1.selectedWorkflowId = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function HeaderComponent_p_dropdown_8_Template_p_dropdown_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemSelect($event));
    })("onLazyLoad", function HeaderComponent_p_dropdown_8_Template_p_dropdown_onLazyLoad_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.loadMore());
    });
    ɵɵtemplate(1, HeaderComponent_p_dropdown_8_ng_template_1_Template, 1, 1, "ng-template", 12)(2, HeaderComponent_p_dropdown_8_ng_template_2_Template, 3, 2, "ng-template", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction0(10, _c24));
    ɵɵproperty("options", ctx_r1.workflowOptions);
    ɵɵtwoWayProperty("ngModel", ctx_r1.selectedWorkflowId);
    ɵɵproperty("virtualScroll", true)("filter", true)("showClear", true)("lazy", true)("virtualScrollItemSize", 38)("scrollHeight", "250px");
  }
}
function HeaderComponent_app_task_toggle_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "app-task-toggle", 20);
    ɵɵlistener("onChange", function HeaderComponent_app_task_toggle_9_Template_app_task_toggle_onChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFilterChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r1.taskFilter)("options", ctx_r1.taskToggleOptions);
  }
}
function HeaderComponent_app_task_toggle_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "app-task-toggle", 20);
    ɵɵlistener("onChange", function HeaderComponent_app_task_toggle_10_Template_app_task_toggle_onChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFilterChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r1.workflowFilter)("options", ctx_r1.workflowToggleOptions);
  }
}
function HeaderComponent_Conditional_11_button_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 24);
    ɵɵtext(1, "Views");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r1.selectedTaskId);
  }
}
function HeaderComponent_Conditional_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 25)(1, "a", 26);
    ɵɵlistener("click", function HeaderComponent_Conditional_11_div_3_Template_a_click_1_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.navigateToView("form"));
    });
    ɵɵtext(2, "form");
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 26);
    ɵɵlistener("click", function HeaderComponent_Conditional_11_div_3_Template_a_click_3_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.navigateToView("list"));
    });
    ɵɵtext(4, "list");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 26);
    ɵɵlistener("click", function HeaderComponent_Conditional_11_div_3_Template_a_click_5_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.navigateToView("icon"));
    });
    ɵɵtext(6, "icon");
    ɵɵelementEnd()();
  }
}
function HeaderComponent_Conditional_11_button_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 24);
    ɵɵtext(1, "Views");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", !ctx_r1.selectedWorkflowId);
  }
}
function HeaderComponent_Conditional_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 25)(1, "a", 26);
    ɵɵlistener("click", function HeaderComponent_Conditional_11_div_5_Template_a_click_1_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.navigateToView("page"));
    });
    ɵɵtext(2, "page");
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 26);
    ɵɵlistener("click", function HeaderComponent_Conditional_11_div_5_Template_a_click_3_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.navigateToView("list"));
    });
    ɵɵtext(4, "list");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 26);
    ɵɵlistener("click", function HeaderComponent_Conditional_11_div_5_Template_a_click_5_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.navigateToView("icon"));
    });
    ɵɵtext(6, "icon");
    ɵɵelementEnd()();
  }
}
function HeaderComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 21);
    ɵɵtemplate(2, HeaderComponent_Conditional_11_button_2_Template, 2, 1, "button", 22)(3, HeaderComponent_Conditional_11_div_3_Template, 7, 0, "div", 23)(4, HeaderComponent_Conditional_11_button_4_Template, 2, 1, "button", 22)(5, HeaderComponent_Conditional_11_div_5_Template, 7, 0, "div", 23);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isUserTaskView);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isUserTaskView && ctx_r1.selectedTaskId);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isWorkflowView);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isWorkflowView && ctx_r1.selectedWorkflowId);
  }
}
function UserTaskComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "p");
    ɵɵtext(2, "Unknown task");
    ɵɵelementEnd()();
  }
}
function UserTaskComponent_router_outlet_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "router-outlet");
  }
}
function UserTaskWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "p");
    ɵɵtext(2, "Could not load user-task");
    ɵɵelementEnd()();
  }
}
function UserTaskWrapperComponent_router_outlet_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "router-outlet");
  }
}
function WorkflowPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "p");
    ɵɵtext(2, "Unknown workflow");
    ɵɵelementEnd()();
  }
}
function WorkflowPageComponent_router_outlet_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "router-outlet");
  }
}
var _c34 = "[_nghost-%COMP%]{display:block;font-family:Arial,sans-serif}div[_ngcontent-%COMP%]{margin:.5rem}p[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}button[_ngcontent-%COMP%]{padding:.5rem 1rem;margin-right:.5rem;margin-bottom:.5rem;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;color:#333;cursor:pointer;transition:background-color .2s}button[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}";
function WorkflowPageWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "p");
    ɵɵtext(2, "Could not load workflow");
    ɵɵelementEnd()();
  }
}
function WorkflowPageWrapperComponent_router_outlet_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "router-outlet");
  }
}
var _c44 = "[_nghost-%COMP%]{display:block;padding:1rem}div[_ngcontent-%COMP%]{padding:1rem;border-radius:4px;box-shadow:0 1px 3px #0000001a}";
var MainComponent = class _MainComponent {
  constructor(router, route, http) {
    this.router = router;
    this.route = route;
    this.http = http;
    this.dataObserver = void 0;
    this.additionalRoutes = [];
    this.users = [];
    this.currentUser = void 0;
    this.baseUrl = "/dev-shell";
  }
  ngOnInit() {
    this.dataObserver = this.route.data.subscribe((data) => this.additionalRoutes = data["additionalRoutes"]);
    this.loadUsers();
  }
  ngOnDestroy() {
    this.dataObserver?.unsubscribe();
  }
  navigateTo(target) {
    this.router.navigate([`/${target}`]);
  }
  loadUsers() {
    this.http.get(`${this.baseUrl}/user/all`).subscribe({
      next: (allUsers) => {
        this.users = allUsers;
        this.getCurrentUser();
      },
      error: (error) => {
        console.error("Error fetching users:", error);
      }
    });
  }
  getCurrentUser() {
    this.http.get(`${this.baseUrl}/user/`, {
      responseType: "text",
      withCredentials: true
    }).subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: () => {
        this.currentUser = void 0;
      }
    });
  }
  changeUser(event) {
    const userId = event.target.value;
    this.http.post(`${this.baseUrl}/user/${userId}`, {}, {
      withCredentials: true
    }).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => {
        console.error("Error changing user:", error);
      }
    });
  }
  static {
    this.ɵfac = function MainComponent_Factory(t) {
      return new (t || _MainComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(HttpClient));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MainComponent,
      selectors: [["lib-main"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 19,
      vars: 3,
      consts: [[1, "devShell", "main-page"], [1, "user-selector"], [3, "change", "ngModel"], ["value", "---"], [3, "value", 4, "ngFor", "ngForOf"], [1, "componentButtons"], [3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "h1");
          ɵɵtext(2, "VanillaBP Business Cockpit Dev Shell");
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 1)(4, "span");
          ɵɵtext(5, "User:");
          ɵɵelementEnd();
          ɵɵelementStart(6, "select", 2);
          ɵɵlistener("change", function MainComponent_Template_select_change_6_listener($event) {
            return ctx.changeUser($event);
          });
          ɵɵelementStart(7, "option", 3);
          ɵɵtext(8, "---");
          ɵɵelementEnd();
          ɵɵtemplate(9, MainComponent_option_9_Template, 2, 4, "option", 4);
          ɵɵelementEnd()();
          ɵɵelementStart(10, "div", 5)(11, "button", 6);
          ɵɵlistener("click", function MainComponent_Template_button_click_11_listener() {
            return ctx.navigateTo("task");
          });
          ɵɵtext(12, "task");
          ɵɵelementEnd();
          ɵɵelementStart(13, "button", 6);
          ɵɵlistener("click", function MainComponent_Template_button_click_13_listener() {
            return ctx.navigateTo("workflow");
          });
          ɵɵtext(14, "workflow");
          ɵɵelementEnd()();
          ɵɵelementStart(15, "div");
          ɵɵtext(16, "Custom module-federation components:");
          ɵɵelementEnd();
          ɵɵelementStart(17, "div", 5);
          ɵɵtemplate(18, MainComponent_button_18_Template, 2, 1, "button", 7);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(6);
          ɵɵproperty("ngModel", ctx.currentUser || "");
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.users);
          ɵɵadvance(9);
          ɵɵproperty("ngForOf", ctx.additionalRoutes);
        }
      },
      dependencies: [NgForOf, FormsModule, NgSelectOption, ɵNgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, HttpClientModule],
      styles: [`.devShell[_ngcontent-%COMP%]{margin:2rem;font-family:Arial,sans-serif}h1[_ngcontent-%COMP%]{font-weight:700;margin-bottom:1.5rem;color:#613500}.componentButtons[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-direction:column;margin:1rem 0;width:100px}.componentButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem 1rem;background-color:#b88d00;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:all .3s}.componentButtons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#fbe495;color:#613500}.user-selector[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;margin-top:1.5rem}.user-selector[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#613500}.user-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.5rem 1.5rem .5rem .5rem;border:1px solid #b88d00;border-radius:4px;font-size:1rem;min-width:250px;color:#613500;background-color:#fff;appearance:none;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23613500' width='18px' height='18px'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .5rem center}.user-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none;border-color:#613500;box-shadow:0 0 0 2px #b88d0033}`]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainComponent, [{
    type: Component,
    args: [{
      selector: "lib-main",
      standalone: true,
      imports: [NgForOf, NgIf, FormsModule, HttpClientModule],
      template: `<div class="devShell main-page">
  <h1>VanillaBP Business Cockpit Dev Shell</h1>

  <div class="user-selector">
    <span>User:</span>
    <select [ngModel]="currentUser || ''" (change)="changeUser($event)">
      <option value="---">---</option>
      <option *ngFor="let user of users" [value]="user.id">{{ user.id }}, {{ user.firstName }} {{ user.lastName }}</option>
    </select>
  </div>

  <div class="componentButtons">
    <button (click)="navigateTo('task')">task</button>
    <button (click)="navigateTo('workflow')">workflow</button>
  </div>

  <div>Custom module-federation components:</div>
  <div class="componentButtons">
    <button *ngFor="let route of additionalRoutes" (click)="navigateTo(route)">{{ route }}</button>
  </div>


</div>
`,
      styles: [`.devShell{margin:2rem;font-family:Arial,sans-serif}h1{font-weight:700;margin-bottom:1.5rem;color:#613500}.componentButtons{display:flex;gap:1rem;flex-direction:column;margin:1rem 0;width:100px}.componentButtons button{padding:.5rem 1rem;background-color:#b88d00;color:#fff;border:none;border-radius:4px;cursor:pointer;transition:all .3s}.componentButtons button:hover{background-color:#fbe495;color:#613500}.user-selector{display:flex;align-items:center;gap:.5rem;margin-top:1.5rem}.user-selector span{color:#613500}.user-selector select{padding:.5rem 1.5rem .5rem .5rem;border:1px solid #b88d00;border-radius:4px;font-size:1rem;min-width:250px;color:#613500;background-color:#fff;appearance:none;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23613500' width='18px' height='18px'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right .5rem center}.user-selector select:focus{outline:none;border-color:#613500;box-shadow:0 0 0 2px #b88d0033}
`]
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: HttpClient
  }], null);
})();
var TASK_OPTIONS = [{
  label: "All",
  value: "all",
  background: "#f2f2f2"
}, {
  label: "Open",
  value: "open",
  background: "rgba(0, 200, 0, 0.2)"
}, {
  label: "Closed",
  value: "closed",
  background: "rgba(200, 0, 0, 0.2)"
}];
var TaskToggleComponent = class _TaskToggleComponent {
  constructor() {
    this.value = "all";
    this.options = TASK_OPTIONS;
    this.onChange = new EventEmitter();
  }
  static {
    this.ɵfac = function TaskToggleComponent_Factory(t) {
      return new (t || _TaskToggleComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TaskToggleComponent,
      selectors: [["app-task-toggle"]],
      inputs: {
        value: "value",
        options: "options"
      },
      outputs: {
        onChange: "onChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 1,
      consts: [[1, "task-toggle-container"], ["class", "toggle-option", 3, "ngClass", "background-color", "click", 4, "ngFor", "ngForOf"], [1, "toggle-option", 3, "click", "ngClass"]],
      template: function TaskToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TaskToggleComponent_div_1_Template, 2, 6, "div", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.options);
        }
      },
      dependencies: [CommonModule, NgClass, NgForOf],
      styles: [".task-toggle-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:4px;align-items:center;margin-left:.5rem}.main-page[_nghost-%COMP%]   .toggle-option[_ngcontent-%COMP%], .main-page   [_nghost-%COMP%]   .toggle-option[_ngcontent-%COMP%]{padding:3px 10px;border-radius:4px;border:1px solid #b88d00;color:#613500;cursor:pointer;font-size:.75rem;transition:all .2s;background-color:#fff}.main-page[_nghost-%COMP%]   .toggle-option[_ngcontent-%COMP%]:hover, .main-page   [_nghost-%COMP%]   .toggle-option[_ngcontent-%COMP%]:hover{background-color:#fbe495}.main-page[_nghost-%COMP%]   .toggle-option.active[_ngcontent-%COMP%], .main-page   [_nghost-%COMP%]   .toggle-option.active[_ngcontent-%COMP%]{border-color:#613500;background-color:#b88d00;color:#fff;font-weight:700}.toggle-option[_ngcontent-%COMP%]{padding:3px 10px;border-radius:4px;border:1px solid #ccc;color:#333;cursor:pointer;font-size:.75rem;transition:all .2s;background-color:#fff}.toggle-option[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.toggle-option.active[_ngcontent-%COMP%]{border-color:#666;background-color:#e0e0e0;color:#333;font-weight:700}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskToggleComponent, [{
    type: Component,
    args: [{
      selector: "app-task-toggle",
      standalone: true,
      imports: [CommonModule],
      template: `<div class="task-toggle-container">
  <div *ngFor="let option of options" 
      class="toggle-option" 
      [ngClass]="{ 'active': value === option.value }"
      [style.background-color]="option.background"
      (click)="onChange.emit(option.value)">
    {{ option.label }}
  </div>
</div> `,
      styles: [".task-toggle-container{display:flex;flex-direction:row;gap:4px;align-items:center;margin-left:.5rem}:host-context(.main-page) .toggle-option{padding:3px 10px;border-radius:4px;border:1px solid #b88d00;color:#613500;cursor:pointer;font-size:.75rem;transition:all .2s;background-color:#fff}:host-context(.main-page) .toggle-option:hover{background-color:#fbe495}:host-context(.main-page) .toggle-option.active{border-color:#613500;background-color:#b88d00;color:#fff;font-weight:700}.toggle-option{padding:3px 10px;border-radius:4px;border:1px solid #ccc;color:#333;cursor:pointer;font-size:.75rem;transition:all .2s;background-color:#fff}.toggle-option:hover{background-color:#f0f0f0}.toggle-option.active{border-color:#666;background-color:#e0e0e0;color:#333;font-weight:700}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }]
  });
})();
var UserTaskRetrieveMode;
(function(UserTaskRetrieveMode2) {
  UserTaskRetrieveMode2["All"] = "All";
  UserTaskRetrieveMode2["OpenTasks"] = "OpenTasks";
  UserTaskRetrieveMode2["ClosedTasksOnly"] = "ClosedTasksOnly";
})(UserTaskRetrieveMode || (UserTaskRetrieveMode = {}));
var WorkflowRetrieveMode;
(function(WorkflowRetrieveMode2) {
  WorkflowRetrieveMode2["All"] = "All";
  WorkflowRetrieveMode2["Active"] = "Active";
  WorkflowRetrieveMode2["Inactive"] = "Inactive";
})(WorkflowRetrieveMode || (WorkflowRetrieveMode = {}));
var ContentType;
(function(ContentType2) {
  ContentType2["UserTask"] = "usertask";
  ContentType2["Workflow"] = "workflow";
})(ContentType || (ContentType = {}));
var HeaderComponent = class _HeaderComponent {
  constructor(router, route, http, cdRef) {
    this.router = router;
    this.route = route;
    this.http = http;
    this.cdRef = cdRef;
    this.contentType = ContentType.UserTask;
    this.page = 0;
    this.hasMorePages = true;
    this.isLoading = false;
    this.taskFilter = "all";
    this.workflowFilter = "all";
    this.isPhone = window.innerWidth < 768;
    this.taskToggleOptions = [{
      label: "All",
      value: "all",
      background: "#f2f2f2"
    }, {
      label: "Open",
      value: "open",
      background: "rgba(0, 200, 0, 0.2)"
    }, {
      label: "Closed",
      value: "closed",
      background: "rgba(200, 0, 0, 0.2)"
    }];
    this.workflowToggleOptions = [{
      label: "All",
      value: "all",
      background: "#f2f2f2"
    }, {
      label: "Active",
      value: "active",
      background: "rgba(0, 200, 0, 0.2)"
    }, {
      label: "Inactive",
      value: "inactive",
      background: "rgba(200, 0, 0, 0.2)"
    }];
    this.userTasks = [];
    this.userTaskOptions = [];
    this.workflows = [];
    this.workflowOptions = [];
    this.resizeListener = () => {
      this.isPhone = window.innerWidth < 768;
      this.cdRef.detectChanges();
    };
  }
  ngOnInit() {
    const url = this.router.url;
    if (url.includes("/workflow")) {
      this.contentType = ContentType.Workflow;
      this.selectedWorkflowId = this.route.snapshot.paramMap.get("workflowId") || void 0;
      this.fetchWorkflows(0);
    } else {
      this.contentType = ContentType.UserTask;
      this.selectedTaskId = this.route.snapshot.paramMap.get("userTaskId") || void 0;
      this.fetchUserTasks(0);
    }
    this.routeSubscription = this.route.params.subscribe((params) => {
      const newTaskId = params["userTaskId"];
      const newWorkflowId = params["workflowId"];
      if (this.contentType === ContentType.UserTask && newTaskId !== this.selectedTaskId) {
        this.selectedTaskId = newTaskId;
        this.cdRef.detectChanges();
      }
      if (this.contentType === ContentType.Workflow && newWorkflowId !== this.selectedWorkflowId) {
        this.selectedWorkflowId = newWorkflowId;
        this.cdRef.detectChanges();
      }
    });
    window.addEventListener("resize", this.resizeListener);
  }
  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
    window.removeEventListener("resize", this.resizeListener);
  }
  get isUserTaskView() {
    return this.contentType === ContentType.UserTask;
  }
  get isWorkflowView() {
    return this.contentType === ContentType.Workflow;
  }
  // User Task methods
  fetchUserTasks(pageToFetch) {
    if (this.isLoading)
      return;
    this.isLoading = true;
    let mode;
    if (this.taskFilter === "open")
      mode = UserTaskRetrieveMode.OpenTasks;
    else if (this.taskFilter === "closed")
      mode = UserTaskRetrieveMode.ClosedTasksOnly;
    else
      mode = UserTaskRetrieveMode.All;
    const request = {
      pageNumber: pageToFetch,
      pageSize: 20,
      sort: "createdAt",
      sortAscending: false,
      mode
    };
    this.http.post("/official-api/v1/usertask", request).subscribe({
      next: (data) => {
        this.userTasks = pageToFetch === 0 ? data.userTasks : [...this.userTasks, ...data.userTasks];
        this.userTaskOptions = this.userTasks.map((task) => ({
          label: `${task.businessId || ""} | ${task.taskDefinition}/${task.bpmnProcessId} | (${task.id})`,
          value: task.id
        }));
        this.page = pageToFetch;
        this.hasMorePages = data.page.number + 1 < data.page.totalPages;
        this.isLoading = false;
        this.cdRef.detectChanges();
      },
      error: (error) => {
        console.error("Error fetching tasks:", error);
        if (pageToFetch === 0) {
          this.userTasks = [];
          this.userTaskOptions = [];
        }
        this.isLoading = false;
        this.hasMorePages = false;
        this.cdRef.detectChanges();
      }
    });
  }
  // Workflow methods
  fetchWorkflows(pageToFetch) {
    if (this.isLoading)
      return;
    this.isLoading = true;
    let mode;
    if (this.workflowFilter === "active")
      mode = WorkflowRetrieveMode.Active;
    else if (this.workflowFilter === "inactive")
      mode = WorkflowRetrieveMode.Inactive;
    else
      mode = WorkflowRetrieveMode.All;
    const request = {
      pageNumber: pageToFetch,
      pageSize: 20,
      sort: "createdAt",
      sortAscending: false,
      mode
    };
    this.http.post("/official-api/v1/workflow", request).subscribe({
      next: (data) => {
        this.workflows = pageToFetch === 0 ? data.workflows : [...this.workflows, ...data.workflows];
        this.workflowOptions = this.workflows.map((workflow) => ({
          label: `${workflow.businessId || ""} | ${workflow.bpmnProcessId} (${workflow.id})`,
          value: workflow.id
        }));
        this.page = pageToFetch;
        this.hasMorePages = data.page.number + 1 < data.page.totalPages;
        this.isLoading = false;
        this.cdRef.detectChanges();
      },
      error: (error) => {
        console.error("Error fetching workflows:", error);
        if (pageToFetch === 0) {
          this.workflows = [];
          this.workflowOptions = [];
        }
        this.isLoading = false;
        this.hasMorePages = false;
        this.cdRef.detectChanges();
      }
    });
  }
  loadMore() {
    if (!this.isLoading && this.hasMorePages) {
      const nextPage = this.page + 1;
      if (this.isUserTaskView) {
        this.fetchUserTasks(nextPage);
      } else {
        this.fetchWorkflows(nextPage);
      }
    }
  }
  onItemSelect(itemId) {
    if (this.isUserTaskView && itemId) {
      this.loadUserTask(itemId);
    } else if (this.isWorkflowView && itemId) {
      this.loadWorkflow(itemId);
    } else if (!itemId) {
      if (this.isUserTaskView)
        this.router.navigate(["/task"]);
      else if (this.isWorkflowView)
        this.router.navigate(["/workflow"]);
    }
  }
  loadUserTask(taskId) {
    if (this.route.snapshot.paramMap.get("userTaskId") !== taskId) {
      this.router.navigate(["/task", taskId]);
    }
  }
  loadWorkflow(workflowId) {
    if (this.route.snapshot.paramMap.get("workflowId") !== workflowId) {
      this.router.navigate(["/workflow", workflowId]);
    }
  }
  onFilterChange(filter2) {
    this.page = 0;
    this.hasMorePages = true;
    this.isLoading = false;
    if (this.isUserTaskView) {
      this.taskFilter = filter2;
      this.userTasks = [];
      this.userTaskOptions = [];
      this.fetchUserTasks(0);
    } else {
      this.workflowFilter = filter2;
      this.workflows = [];
      this.workflowOptions = [];
      this.fetchWorkflows(0);
    }
    this.cdRef.detectChanges();
  }
  navigateHome() {
    this.router.navigate(["/"]);
  }
  navigateToView(view) {
    const currentBase = this.isUserTaskView ? `/task/${this.selectedTaskId}` : `/workflow/${this.selectedWorkflowId}`;
    const targetRoute = view === "form" || view === "page" ? [currentBase] : [currentBase, view];
    const currentUrl = this.router.url;
    const targetUrl = this.router.createUrlTree(targetRoute).toString();
    if (currentUrl !== targetUrl) {
      this.router.navigate(targetRoute);
    }
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || _HeaderComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(HttpClient), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _HeaderComponent,
      selectors: [["lib-header"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 12,
      vars: 8,
      consts: [[1, "header-container"], [1, "task-selection-container"], ["title", "Home", 1, "home-button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "select-container", 3, "ngClass"], ["styleClass", "header-dropdown", "optionLabel", "label", "optionValue", "value", "placeholder", "Select a task", "filterBy", "label", 3, "options", "ngModel", "virtualScroll", "filter", "showClear", "lazy", "virtualScrollItemSize", "style", "scrollHeight", "ngModelChange", "onLazyLoad", 4, "ngIf"], ["styleClass", "header-dropdown", "optionLabel", "label", "optionValue", "value", "placeholder", "Select a workflow", "filterBy", "label", 3, "options", "ngModel", "virtualScroll", "filter", "showClear", "lazy", "virtualScrollItemSize", "style", "scrollHeight", "ngModelChange", "onLazyLoad", 4, "ngIf"], [3, "value", "options", "onChange", 4, "ngIf"], [1, "view-menu"], ["styleClass", "header-dropdown", "optionLabel", "label", "optionValue", "value", "placeholder", "Select a task", "filterBy", "label", 3, "ngModelChange", "onLazyLoad", "options", "ngModel", "virtualScroll", "filter", "showClear", "lazy", "virtualScrollItemSize", "scrollHeight"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], [4, "ngIf"], [1, "font-bold"], [1, "font-normal"], ["styleClass", "header-dropdown", "optionLabel", "label", "optionValue", "value", "placeholder", "Select a workflow", "filterBy", "label", 3, "ngModelChange", "onLazyLoad", "options", "ngModel", "virtualScroll", "filter", "showClear", "lazy", "virtualScrollItemSize", "scrollHeight"], [3, "onChange", "value", "options"], [1, "dropdown"], ["class", "dropdown-button", 3, "disabled", 4, "ngIf"], ["class", "dropdown-content", 4, "ngIf"], [1, "dropdown-button", 3, "disabled"], [1, "dropdown-content"], [3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
          ɵɵlistener("click", function HeaderComponent_Template_button_click_2_listener() {
            return ctx.navigateHome();
          });
          ɵɵnamespaceSVG();
          ɵɵelementStart(3, "svg", 3);
          ɵɵelement(4, "path", 4)(5, "polyline", 5);
          ɵɵelementEnd()();
          ɵɵnamespaceHTML();
          ɵɵelementStart(6, "div", 6);
          ɵɵtemplate(7, HeaderComponent_p_dropdown_7_Template, 3, 11, "p-dropdown", 7)(8, HeaderComponent_p_dropdown_8_Template, 3, 11, "p-dropdown", 8);
          ɵɵelementEnd();
          ɵɵtemplate(9, HeaderComponent_app_task_toggle_9_Template, 1, 2, "app-task-toggle", 9)(10, HeaderComponent_app_task_toggle_10_Template, 1, 2, "app-task-toggle", 9);
          ɵɵelementEnd();
          ɵɵtemplate(11, HeaderComponent_Conditional_11_Template, 6, 4, "div", 10);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(6);
          ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c15, ctx.isPhone));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isUserTaskView);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isWorkflowView);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isUserTaskView);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isWorkflowView);
          ɵɵadvance();
          ɵɵconditional(11, false ? 11 : -1);
        }
      },
      dependencies: [CommonModule, NgClass, NgIf, FormsModule, NgControlStatus, NgModel, TaskToggleComponent, DropdownModule, Dropdown, PrimeTemplate],
      styles: [".header-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:.5rem;gap:.5rem;background-color:#fff;box-shadow:0 1px 4px #0000001a;min-height:3.5rem;font-family:Arial,sans-serif;width:100%}.task-selection-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:.5rem;align-items:center;flex:1}.home-button[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;background-color:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;font-size:1.1rem;color:#333;flex-shrink:0;transition:all .2s}.home-button[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.main-page[_nghost-%COMP%]   .home-button[_ngcontent-%COMP%], .main-page   [_nghost-%COMP%]   .home-button[_ngcontent-%COMP%]{border-color:#b88d00;color:#613500}.main-page[_nghost-%COMP%]   .home-button[_ngcontent-%COMP%]:hover, .main-page   [_nghost-%COMP%]   .home-button[_ngcontent-%COMP%]:hover{background-color:#fbe495}.select-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;position:relative}.select-container.phone[_ngcontent-%COMP%]{width:15rem}.main-page[_nghost-%COMP%]   select[_ngcontent-%COMP%], .main-page   [_nghost-%COMP%]   select[_ngcontent-%COMP%]{padding:.5rem 1.5rem .5rem .5rem;border:1px solid #b88d00;border-radius:4px;font-size:.9rem;background-color:#fff;color:#613500;cursor:pointer;appearance:none;background-repeat:no-repeat;background-position:right .5rem center}.main-page[_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus, .main-page   [_nghost-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none;border-color:#613500;box-shadow:0 0 0 2px #b88d0033}.main-page[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%], .main-page   [_nghost-%COMP%]   .more-button[_ngcontent-%COMP%]{margin-top:.25rem;padding:.25rem;background-color:transparent;border:none;color:#613500;cursor:pointer;text-align:left;font-size:.8rem}.main-page[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%]:hover, .main-page   [_nghost-%COMP%]   .more-button[_ngcontent-%COMP%]:hover{color:#b88d00;text-decoration:underline}.main-page[_nghost-%COMP%]   .dropdown-button[_ngcontent-%COMP%], .main-page   [_nghost-%COMP%]   .dropdown-button[_ngcontent-%COMP%]{padding:.5rem 1rem;background-color:#fff;border:1px solid #b88d00;color:#613500;border-radius:4px;cursor:pointer;font-size:.9rem;transition:all .2s}.main-page[_nghost-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:hover:not(:disabled), .main-page   [_nghost-%COMP%]   .dropdown-button[_ngcontent-%COMP%]:hover:not(:disabled){background-color:#fbe495}.main-page[_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%], .main-page   [_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%]{border:1px solid #b88d00;box-shadow:0 2px 5px #61350033}.main-page[_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-page   [_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#613500}.main-page[_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .main-page   [_nghost-%COMP%]   .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#fbe495}select[_ngcontent-%COMP%]{padding:.5rem 1.5rem .5rem .5rem;border:1px solid #ccc;border-radius:4px;font-size:.9rem;background-color:#fff;color:#333;cursor:pointer;appearance:none;background-repeat:no-repeat;background-position:right .5rem center}select[_ngcontent-%COMP%]:focus{outline:none;border-color:#666;box-shadow:0 0 0 2px #0000001a}.more-button[_ngcontent-%COMP%]{margin-top:.25rem;padding:.25rem;background-color:transparent;border:none;color:#444;cursor:pointer;text-align:left;font-size:.8rem}.more-button[_ngcontent-%COMP%]:hover{color:#000;text-decoration:underline}.toggle-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;border:1px solid #ccc;border-radius:4px;overflow:hidden}.toggle-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem .75rem;background-color:#fff;border:none;color:#333;cursor:pointer;font-size:.85rem;transition:background-color .2s}.toggle-container[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#e0e0e0;color:#333}.toggle-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active){background-color:#f0f0f0}.toggle-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #ccc}.view-menu[_ngcontent-%COMP%]{position:relative}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block}.dropdown-button[_ngcontent-%COMP%]{padding:.5rem 1rem;background-color:#fff;border:1px solid #ccc;color:#333;border-radius:4px;cursor:pointer;font-size:.9rem;transition:all .2s}.dropdown-button[_ngcontent-%COMP%]:hover:not(:disabled){background-color:#f0f0f0}.dropdown-button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;right:0;background-color:#fff;min-width:120px;box-shadow:0 2px 5px #0000001a;z-index:1;border-radius:4px;border:1px solid #ccc}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.5rem 1rem;display:block;color:#333;text-decoration:none;cursor:pointer}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{
      selector: "lib-header",
      standalone: true,
      imports: [CommonModule, FormsModule, TaskToggleComponent, DropdownModule],
      template: `<div class="header-container">
  <div class="task-selection-container">
    <button class="home-button" (click)="navigateHome()" title="Home">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    </button>
    <div class="select-container" [ngClass]="{ 'phone': isPhone }">
      <!-- User Task Dropdown -->
      <p-dropdown
        *ngIf="isUserTaskView"
        styleClass="header-dropdown"
        [options]="userTaskOptions"
        [(ngModel)]="selectedTaskId"
        (ngModelChange)="onItemSelect($event)"
        optionLabel="label"
        optionValue="value"
        placeholder="Select a task"
        [virtualScroll]="true"
        [filter]="true"
        filterBy="label"
        [showClear]="true"
        [lazy]="true"
        (onLazyLoad)="loadMore()"
        [virtualScrollItemSize]="38"
        [style]="{ 'width': '100%' }"
        [scrollHeight]="'250px'">
        <ng-template pTemplate="selectedItem" let-selectedOption>
          <div class="flex items-center gap-2" *ngIf="selectedOption">
            <ng-container *ngIf="selectedOption.label.includes('|')">
                <span class="font-bold">{{ selectedOption.label.split('|')[0].trim() }}</span>
                <span class="font-normal"> | {{ selectedOption.label.split('|')[1].trim() }}</span>
              </ng-container>
              <ng-container *ngIf="!selectedOption.label.includes('|')">
                <span>{{ selectedOption.label }}</span>
              </ng-container>
          </div>
        </ng-template>
        <ng-template let-option pTemplate="item">
          <div class="flex items-center gap-2">
             <ng-container *ngIf="option.label.includes('|')">
               <span class="font-bold">{{ option.label.split('|')[0].trim() }}</span>
               <span class="font-normal"> | {{ option.label.split('|')[1].trim() }}</span>
             </ng-container>
             <ng-container *ngIf="!option.label.includes('|')">
               <span>{{ option.label }}</span>
             </ng-container>
          </div>
        </ng-template>
      </p-dropdown>

      <!-- Workflow Dropdown -->
      <p-dropdown
        *ngIf="isWorkflowView"
        styleClass="header-dropdown"
        [options]="workflowOptions"
        [(ngModel)]="selectedWorkflowId"
        (ngModelChange)="onItemSelect($event)"
        optionLabel="label"
        optionValue="value"
        placeholder="Select a workflow"
        [virtualScroll]="true"
        [filter]="true"
        filterBy="label"
        [showClear]="true"
        [lazy]="true"
        (onLazyLoad)="loadMore()"
        [virtualScrollItemSize]="38"
        [style]="{ 'width': '100%' }"
        [scrollHeight]="'250px'">
         <ng-template pTemplate="selectedItem" let-selectedOption>
           <div class="flex items-center gap-2" *ngIf="selectedOption">
             <ng-container *ngIf="selectedOption.label.includes('|')">
                <span class="font-bold">{{ selectedOption.label.split('|')[0].trim() }}</span>
                <span class="font-normal"> | {{ selectedOption.label.split('|')[1].trim() }}</span>
              </ng-container>
              <ng-container *ngIf="!selectedOption.label.includes('|')">
                <span>{{ selectedOption.label }}</span>
              </ng-container>
           </div>
         </ng-template>
         <ng-template let-option pTemplate="item">
           <div class="flex items-center gap-2">
              <ng-container *ngIf="option.label.includes('|')">
                <span class="font-bold">{{ option.label.split('|')[0].trim() }}</span>
                <span class="font-normal"> | {{ option.label.split('|')[1].trim() }}</span>
              </ng-container>
              <ng-container *ngIf="!option.label.includes('|')">
                <span>{{ option.label }}</span>
              </ng-container>
           </div>
         </ng-template>
      </p-dropdown>
    </div>

    <app-task-toggle
      *ngIf="isUserTaskView"
      [value]="taskFilter"
      [options]="taskToggleOptions"
      (onChange)="onFilterChange($event)">
    </app-task-toggle>
    <app-task-toggle
      *ngIf="isWorkflowView"
      [value]="workflowFilter"
      [options]="workflowToggleOptions"
      (onChange)="onFilterChange($event)">
    </app-task-toggle>
  </div>
  @if (false) {
    <div class="view-menu">
      <div class="dropdown">
        <button *ngIf="isUserTaskView" class="dropdown-button" [disabled]="!selectedTaskId">Views</button>
        <div *ngIf="isUserTaskView && selectedTaskId" class="dropdown-content">
          <a (click)="navigateToView('form')">form</a>
          <a (click)="navigateToView('list')">list</a>
          <a (click)="navigateToView('icon')">icon</a>
        </div>
        <button *ngIf="isWorkflowView" class="dropdown-button" [disabled]="!selectedWorkflowId">Views</button>
        <div *ngIf="isWorkflowView && selectedWorkflowId" class="dropdown-content">
          <a (click)="navigateToView('page')">page</a>
          <a (click)="navigateToView('list')">list</a>
          <a (click)="navigateToView('icon')">icon</a>
        </div>
      </div>
    </div>
  }
</div>
`,
      styles: [".header-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:.5rem;gap:.5rem;background-color:#fff;box-shadow:0 1px 4px #0000001a;min-height:3.5rem;font-family:Arial,sans-serif;width:100%}.task-selection-container{display:flex;flex-direction:row;gap:.5rem;align-items:center;flex:1}.home-button{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;background-color:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;font-size:1.1rem;color:#333;flex-shrink:0;transition:all .2s}.home-button:hover{background-color:#f0f0f0}:host-context(.main-page) .home-button{border-color:#b88d00;color:#613500}:host-context(.main-page) .home-button:hover{background-color:#fbe495}.select-container{display:flex;flex-direction:column;width:100%;position:relative}.select-container.phone{width:15rem}:host-context(.main-page) select{padding:.5rem 1.5rem .5rem .5rem;border:1px solid #b88d00;border-radius:4px;font-size:.9rem;background-color:#fff;color:#613500;cursor:pointer;appearance:none;background-repeat:no-repeat;background-position:right .5rem center}:host-context(.main-page) select:focus{outline:none;border-color:#613500;box-shadow:0 0 0 2px #b88d0033}:host-context(.main-page) .more-button{margin-top:.25rem;padding:.25rem;background-color:transparent;border:none;color:#613500;cursor:pointer;text-align:left;font-size:.8rem}:host-context(.main-page) .more-button:hover{color:#b88d00;text-decoration:underline}:host-context(.main-page) .dropdown-button{padding:.5rem 1rem;background-color:#fff;border:1px solid #b88d00;color:#613500;border-radius:4px;cursor:pointer;font-size:.9rem;transition:all .2s}:host-context(.main-page) .dropdown-button:hover:not(:disabled){background-color:#fbe495}:host-context(.main-page) .dropdown-content{border:1px solid #b88d00;box-shadow:0 2px 5px #61350033}:host-context(.main-page) .dropdown-content a{color:#613500}:host-context(.main-page) .dropdown-content a:hover{background-color:#fbe495}select{padding:.5rem 1.5rem .5rem .5rem;border:1px solid #ccc;border-radius:4px;font-size:.9rem;background-color:#fff;color:#333;cursor:pointer;appearance:none;background-repeat:no-repeat;background-position:right .5rem center}select:focus{outline:none;border-color:#666;box-shadow:0 0 0 2px #0000001a}.more-button{margin-top:.25rem;padding:.25rem;background-color:transparent;border:none;color:#444;cursor:pointer;text-align:left;font-size:.8rem}.more-button:hover{color:#000;text-decoration:underline}.toggle-container{display:flex;flex-direction:row;border:1px solid #ccc;border-radius:4px;overflow:hidden}.toggle-container button{padding:.5rem .75rem;background-color:#fff;border:none;color:#333;cursor:pointer;font-size:.85rem;transition:background-color .2s}.toggle-container button.active{background-color:#e0e0e0;color:#333}.toggle-container button:hover:not(.active){background-color:#f0f0f0}.toggle-container button:not(:last-child){border-right:1px solid #ccc}.view-menu{position:relative}.dropdown{position:relative;display:inline-block}.dropdown-button{padding:.5rem 1rem;background-color:#fff;border:1px solid #ccc;color:#333;border-radius:4px;cursor:pointer;font-size:.9rem;transition:all .2s}.dropdown-button:hover:not(:disabled){background-color:#f0f0f0}.dropdown-button:disabled{opacity:.5;cursor:not-allowed}.dropdown-content{display:none;position:absolute;right:0;background-color:#fff;min-width:120px;box-shadow:0 2px 5px #0000001a;z-index:1;border-radius:4px;border:1px solid #ccc}.dropdown:hover .dropdown-content{display:block}.dropdown-content a{padding:.5rem 1rem;display:block;color:#333;text-decoration:none;cursor:pointer}.dropdown-content a:hover{background-color:#f0f0f0}\n"]
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: HttpClient
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var UserTaskComponent = class _UserTaskComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.userTaskId = null;
  }
  ngOnInit() {
    this.userTaskId = this.route.snapshot.paramMap.get("userTaskId");
    if (!this.router.url.includes("task") && this.userTaskId) {
      this.router.navigate(["/task", this.userTaskId], {
        replaceUrl: true
      });
    }
  }
  static {
    this.ɵfac = function UserTaskComponent_Factory(t) {
      return new (t || _UserTaskComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserTaskComponent,
      selectors: [["user-task"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function UserTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "lib-header");
          ɵɵtemplate(1, UserTaskComponent_div_1_Template, 3, 0, "div", 0)(2, UserTaskComponent_router_outlet_2_Template, 1, 0, "router-outlet", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.userTaskId);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.userTaskId);
        }
      },
      dependencies: [RouterOutlet, HeaderComponent, NgIf],
      styles: ["[_nghost-%COMP%]{display:block;font-family:Arial,sans-serif}div[_ngcontent-%COMP%]{margin:.5rem}p[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}button[_ngcontent-%COMP%]{padding:.5rem 1rem;margin-right:.5rem;margin-bottom:.5rem;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;color:#333;cursor:pointer;transition:background-color .2s}button[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{color:#333;margin-bottom:1rem}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserTaskComponent, [{
    type: Component,
    args: [{
      selector: "user-task",
      standalone: true,
      imports: [RouterOutlet, HeaderComponent, NgIf],
      template: '<lib-header/>\n<div *ngIf="!userTaskId">\n  <p>Unknown task</p>\n</div>\n<router-outlet *ngIf="userTaskId" />\n',
      styles: [":host{display:block;font-family:Arial,sans-serif}div{margin:.5rem}p{color:#333;margin-bottom:1rem}button{padding:.5rem 1rem;margin-right:.5rem;margin-bottom:.5rem;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;color:#333;cursor:pointer;transition:background-color .2s}button:hover{background-color:#e0e0e0}h1,h2{color:#333;margin-bottom:1rem}\n"]
    }]
  }], () => [{
    type: ActivatedRoute
  }, {
    type: Router
  }], null);
})();
var DevShellAppContextService = class _DevShellAppContextService {
  constructor(tasklistApi, workflowlistApi) {
    this.tasklistApi = tasklistApi;
    this.workflowlistApi = workflowlistApi;
  }
  mapUserTask(userTask) {
    return __spreadProps(__spreadValues({}, userTask), {
      open: () => alert("Will open task"),
      navigateToWorkflow: () => alert("Will navigate to workflow"),
      assign: (userId) => alert(`Assigned task for user ${userId}`),
      unassign: (userId) => alert(`Unassigned task for user ${userId}`),
      claim: () => alert(`Will claim task`),
      unclaim: () => alert(`Will unclaim task`)
    });
  }
  loadUserTask(userTaskId) {
    return fromPromise(this.tasklistApi.getUserTask({
      userTaskId
    })).pipe(catchError((err) => {
      console.error(`Error loading task '${userTaskId}`, err);
      return of(null);
    }), map(this.mapUserTask));
  }
  loadUserTasks(workflowId, activeOnly, llatcup) {
    return new Promise((resolve, reject) => {
      this.workflowlistApi.getUserTasksOfWorkflow({
        workflowId,
        llatcup,
        userTasksRequest: {
          mode: activeOnly ? "OpenTasks" : "All"
        }
      }).then((userTasks) => {
        resolve(userTasks.map(this.mapUserTask));
      }).catch((err) => {
        console.error(`Error loading tasks for workflow '${workflowId}'`, err);
        reject(err);
      });
    });
  }
  mapWorkflow(workflow) {
    return __spreadProps(__spreadValues({}, workflow), {
      navigateToWorkflow: () => alert("Will navigate to workflow"),
      getUserTasks: (activeOnly, limitListAccordingToCurrentUsersPermissions) => this.loadUserTasks(workflow.id, activeOnly, limitListAccordingToCurrentUsersPermissions)
    });
  }
  /*
  
   */
  loadWorkflow(workflowId) {
    return fromPromise(this.workflowlistApi.getWorkflow({
      workflowId
    })).pipe(catchError((err) => {
      console.error("Error loading workflow: ", err);
      return of(null);
    }), map(this.mapWorkflow));
  }
  static {
    this.ɵfac = function DevShellAppContextService_Factory(t) {
      return new (t || _DevShellAppContextService)(ɵɵinject(OfficialTasklistApi), ɵɵinject(OfficialWorkflowlistApi));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DevShellAppContextService,
      factory: _DevShellAppContextService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevShellAppContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OfficialTasklistApi
  }, {
    type: OfficialWorkflowlistApi
  }], null);
})();
var userTaskResolver = (route, state, userTaskAppContextService = inject(DevShellAppContextService)) => {
  return userTaskAppContextService.loadUserTask(route.paramMap.get("userTaskId"));
};
var UserTaskWrapperComponent = class _UserTaskWrapperComponent {
  static {
    this.ɵfac = function UserTaskWrapperComponent_Factory(t) {
      return new (t || _UserTaskWrapperComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserTaskWrapperComponent,
      selectors: [["user-task-wrapper"]],
      inputs: {
        userTask: "userTask"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function UserTaskWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserTaskWrapperComponent_div_0_Template, 3, 0, "div", 0)(1, UserTaskWrapperComponent_router_outlet_1_Template, 1, 0, "router-outlet", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", !ctx.userTask);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.userTask);
        }
      },
      dependencies: [RouterOutlet, NgIf],
      styles: ["[_nghost-%COMP%]{display:block;padding:1rem}div[_ngcontent-%COMP%]{padding:1rem;border-radius:4px;box-shadow:0 1px 3px #0000001a}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserTaskWrapperComponent, [{
    type: Component,
    args: [{
      selector: "user-task-wrapper",
      standalone: true,
      imports: [RouterOutlet, NgIf],
      template: '<div *ngIf="!userTask">\n  <p>Could not load user-task</p>\n</div>\n<router-outlet *ngIf="userTask" />\n',
      styles: [":host{display:block;padding:1rem}div{padding:1rem;border-radius:4px;box-shadow:0 1px 3px #0000001a}\n"]
    }]
  }], null, {
    userTask: [{
      type: Input
    }]
  });
})();
var WorkflowPageComponent = class _WorkflowPageComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.workflowId = null;
  }
  ngOnInit() {
    this.workflowId = this.route.snapshot.paramMap.get("workflowId");
    if (!this.router.url.includes("workflow") && this.workflowId) {
      this.router.navigate(["/workflow", this.workflowId], {
        replaceUrl: true
      });
    }
  }
  static {
    this.ɵfac = function WorkflowPageComponent_Factory(t) {
      return new (t || _WorkflowPageComponent)(ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WorkflowPageComponent,
      selectors: [["workflow-page"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function WorkflowPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "lib-header");
          ɵɵtemplate(1, WorkflowPageComponent_div_1_Template, 3, 0, "div", 0)(2, WorkflowPageComponent_router_outlet_2_Template, 1, 0, "router-outlet", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.workflowId);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.workflowId);
        }
      },
      dependencies: [RouterOutlet, HeaderComponent, NgIf],
      styles: [_c34]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowPageComponent, [{
    type: Component,
    args: [{
      selector: "workflow-page",
      standalone: true,
      imports: [RouterOutlet, HeaderComponent, NgIf],
      template: '<lib-header/>\n<div *ngIf="!workflowId">\n  <p>Unknown workflow</p>\n</div>\n<router-outlet *ngIf="workflowId" />\n',
      styles: [":host{display:block;font-family:Arial,sans-serif}div{margin:.5rem}p{color:#333;margin-bottom:1rem}button{padding:.5rem 1rem;margin-right:.5rem;margin-bottom:.5rem;background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px;color:#333;cursor:pointer;transition:background-color .2s}button:hover{background-color:#e0e0e0}h1,h2{color:#333;margin-bottom:1rem}\n"]
    }]
  }], () => [{
    type: ActivatedRoute
  }, {
    type: Router
  }], null);
})();
var workflowResolver = (route, state, userTaskAppContextService = inject(DevShellAppContextService)) => {
  return userTaskAppContextService.loadWorkflow(route.paramMap.get("workflowId"));
};
var WorkflowPageWrapperComponent = class _WorkflowPageWrapperComponent {
  static {
    this.ɵfac = function WorkflowPageWrapperComponent_Factory(t) {
      return new (t || _WorkflowPageWrapperComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WorkflowPageWrapperComponent,
      selectors: [["workflow-page-wrapper"]],
      inputs: {
        workflow: "workflow"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"]],
      template: function WorkflowPageWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, WorkflowPageWrapperComponent_div_0_Template, 3, 0, "div", 0)(1, WorkflowPageWrapperComponent_router_outlet_1_Template, 1, 0, "router-outlet", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", !ctx.workflow);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.workflow);
        }
      },
      dependencies: [RouterOutlet, NgIf],
      styles: [_c44]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkflowPageWrapperComponent, [{
    type: Component,
    args: [{
      selector: "workflow-page-wrapper",
      standalone: true,
      imports: [RouterOutlet, NgIf],
      template: '<div *ngIf="!workflow">\n  <p>Could not load workflow</p>\n</div>\n<router-outlet *ngIf="workflow" />\n',
      styles: [":host{display:block;padding:1rem}div{padding:1rem;border-radius:4px;box-shadow:0 1px 3px #0000001a}\n"]
    }]
  }], null, {
    workflow: [{
      type: Input
    }]
  });
})();
var routes = (userTaskForm, workFlowPage, additionalComponents) => {
  return [{
    path: "",
    component: MainComponent,
    data: {
      additionalRoutes: additionalComponents === void 0 ? [] : Object.keys(additionalComponents)
    }
  }, {
    path: "task",
    component: UserTaskComponent
  }, {
    path: "task/:userTaskId",
    component: UserTaskComponent,
    children: [{
      path: "",
      resolve: {
        userTask: userTaskResolver
      },
      component: UserTaskWrapperComponent,
      children: [{
        path: "",
        component: userTaskForm
      }]
    }]
  }, {
    path: "workflow",
    component: WorkflowPageComponent
  }, {
    path: "workflow/:workflowId",
    component: WorkflowPageComponent,
    children: [{
      path: "",
      resolve: {
        workflow: workflowResolver
      },
      component: WorkflowPageWrapperComponent,
      children: [{
        path: "",
        component: workFlowPage
      }]
    }]
  }, ...additionalComponents === void 0 ? [] : Object.keys(additionalComponents).map((componentId) => ({
    path: componentId,
    component: additionalComponents[componentId]
  }))];
};
var officialGuiClientProvider = class {
  static officialTasklistApi(basePath) {
    return {
      provide: OfficialTasklistApi,
      useFactory: () => {
        const config = new Configuration({
          basePath
        });
        return new OfficialTasklistApi(config);
      }
    };
  }
  static officialWorkflowlistApi(basePath) {
    return {
      provide: OfficialWorkflowlistApi,
      useFactory: () => {
        const config = new Configuration({
          basePath
        });
        return new OfficialWorkflowlistApi(config);
      }
    };
  }
};
var appConfig = (officialApiUri, userTaskForm, workFlowPage, additionalComponents, providers = []) => {
  return {
    providers: [provideRouter(routes(userTaskForm, workFlowPage, additionalComponents), withComponentInputBinding()), officialGuiClientProvider.officialTasklistApi(officialApiUri), officialGuiClientProvider.officialWorkflowlistApi(officialApiUri), ...providers]
  };
};
var DevShellComponent = class _DevShellComponent {
  static {
    this.ɵfac = function DevShellComponent_Factory(t) {
      return new (t || _DevShellComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DevShellComponent,
      selectors: [["lib-dev-shell"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 0,
      template: function DevShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "router-outlet");
        }
      },
      dependencies: [RouterOutlet]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevShellComponent, [{
    type: Component,
    args: [{
      selector: "lib-dev-shell",
      standalone: true,
      imports: [RouterOutlet],
      template: `
    <router-outlet />
  `
    }]
  }], null, null);
})();
var bootstrapDevShell = (officalApiUri, userTaskForm, workFlowPage, additionalComponents, providers) => {
  return bootstrapApplication(DevShellComponent, appConfig(officalApiUri, userTaskForm, workFlowPage, additionalComponents, providers));
};
export {
  DevShellAppContextService,
  DevShellComponent,
  MainComponent,
  appConfig,
  bootstrapDevShell
};
/*! Bundled license information:

@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v17.3.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=@vanillabp_bc-dev-shell-angular.js.map
