// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"86oZd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
//import { KrThing } from "./dist/main.js"
//import kraken_record from "./dist/main.js";
var _indexJs = require("./src/index.js");
function test() {
    var k = new (0, _indexJs.KrThing)();
    k.record = {
        "@type": "person",
        "@id": "person_1",
        givenName: "givenName_1",
        familyName: "familyName_1",
        email: "test@test.com",
        telephone: "1-514-111-2222",
        hasOccupation: {
            "@type": "Occupation",
            name: "occupation_1"
        },
        worksfor: {
            "@type": "organization",
            name: "test_org_1",
            url: "https://www.test.com",
            other: [
                {
                    "@type": "person",
                    "@id": "person_2",
                    givenName: "givenName_2"
                },
                {
                    "@type": "person",
                    "@id": "person_3",
                    givenName: "givenName_3"
                }
            ]
        }
    };
    // Test properties
    for (let t of k.things)console.log(t.record_type);
}
test();

},{"./src/index.js":"8lqZg"}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KrThing", ()=>KrThing);
parcelHelpers.export(exports, "KrProperty", ()=>KrProperty);
parcelHelpers.export(exports, "KrPropertyValue", ()=>KrPropertyValue) //export var KrProperty = KrPropertyRecord;
 //export var KrPropertyValue = KrPropertyValueRecord;
;
var _classThingJs = require("./modules/class_thing/class_thing.js");
var _classPropertyJs = require("./modules/class_property/class_property.js");
var _classPropertyValueJs = require("./modules/class_propertyValue/class_propertyValue.js");
function KrThing() {
    return 0, _classThingJs.KrThing;
}
function KrProperty() {
    return 0, _classPropertyJs.KrProperty;
}
function KrPropertyValue() {
    return 0, _classPropertyValueJs.KrPropertyValue;
}

},{"./modules/class_thing/class_thing.js":"2En51","./modules/class_property/class_property.js":"13rHw","./modules/class_propertyValue/class_propertyValue.js":"i7WfF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2En51":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KrThing", ()=>KrThing);
var _uuid = require("uuid");
var _classPropertyJs = require("../class_property/class_property.js");
var _classMetadataJs = require("../class_metadata/class_metadata.js");
//import { KrListItem } from "../../../kraken_thing.js";
let MAX_DEPTH = 6;
class KrThing {
    /*

    attributes:
    - record_type:
    - record_id: 
    - record: 
    - ref:            returns dict with @type and @id
    - fullRecord:     returns native records from class objects (nested)
    - properties:     returns list of KrProperties
    - json:           returns this.record as json

    Methods
    - getProperty: 
    - setProperty:
    - get (same as getProperty):
    - set (same as setProperty):

    */ constructor(record_type = null, record_id = null){
        this._properties = [];
        this._callbacks = {};
        // metadata
        this.metadata = new (0, _classMetadataJs.KrMetadata)();
        // if record_type is a dict, treat as record instead
        if (record_type && record_type["@type"]) this.setFullRecord(record_type);
        //
        if (record_type && !record_type["@type"]) this.setProperty("@type", record_type);
        if (record_id) this.setProperty("@id", record_id);
        if (!this.record_id || this.record_id == null) record_id = String((0, _uuid.v4)());
    }
    // -----------------------------------------------------
    //  events
    // -----------------------------------------------------
    addEventListener(eventType, callback) {
        if (typeof callback !== "function") return;
        if (!eventType || eventType == null) eventType;
        if (this._callbacks[eventType] === undefined) this._callbacks[eventType] = [];
        this._callbacks[eventType].push(callback);
    }
    dispatchEvent(eventType, data) {
        //if (this._callbacks[eventType] === undefined) return;
        const event = {
            type: eventType,
            target: this,
            data: data
        };
        if (this._callbacks[eventType] === undefined) this._callbacks[eventType] = [];
        if (this._callbacks["all"] === undefined) this._callbacks["all"] = [];
        this._callbacks[eventType].forEach((callback)=>{
            callback(event);
        });
        this._callbacks["all"].forEach((callback)=>{
            callback(event);
        });
    }
    // ----------------------------------------------------
    // Attributes
    // ----------------------------------------------------
    get record_type() {
        return this.getProperty("@type").value;
    }
    set record_type(value) {
        if (!value) return;
        return this.setProperty("@type", value);
    }
    get record_id() {
        let record_id = this.getProperty("@id").value;
        if (!record_id || record_id == null) this.record_id = String((0, _uuid.v4)());
        return this.getProperty("@id").value;
    }
    set record_id(value) {
        if (!value) return;
        return this.setProperty("@id", value);
    }
    get ref() {
        return {
            "@type": this.record_type,
            "@id": this.record_id
        };
    }
    get properties() {
        /**
         * Returns list of KrProperty object in alphabetical order
         */ //function compare(a, b) { return a.lt(b) }
        //return this._properties.toSorted(compare);
        return this._properties.toSorted((a, b)=>{
            return a.lt(b);
        });
    }
    get things() {
        // return all things 
        let results = [];
        for (let p of this._properties)for (let v of p.values){
            if (v?.record_type) results.push(v);
            results = results.concat(v.things);
        }
        results = results.filter(function(el) {
            return el != null;
        });
        return results;
    }
    // ----------------------------------------------------
    // Records
    // ----------------------------------------------------
    get record() {
        return this.getFullRecord(0);
    }
    set record(value) {
        this.setFullRecord(value);
    }
    get fullRecord() {
        return this.getFullRecord(0);
    }
    set fullRecord(value) {
        this.setFullRecord(value);
    }
    get bestRecord() {
        return this.getBestRecord(0);
    }
    set bestRecord(value) {
        this.setBestRecord(value);
    }
    get refRecord() {
        return this.getRefRecord(0);
    }
    set refRecord(value) {
        this.setRefRecord(value);
    }
    getFullRecord(depth = 0) {
        if (depth && depth > MAX_DEPTH) return this.ref;
        let record = {};
        let properties = this.properties;
        for (let p of properties)record[p.propertyID] = p.getFullRecord(depth + 1);
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record = simplify(record);
        return record;
    }
    setFullRecord(value) {
        this._properties = [];
        Object.keys(value).forEach((key)=>{
            this.addProperty(key, value[key]);
        });
    }
    getRefRecord(depth = 0) {
        let record = {};
        for(let i = 0; i < this.properties.length; i++)record[this.properties[i].propertyID] = this.properties[i].getRefRecord(depth);
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record = simplify(record);
        return record;
    }
    getBestRecord(depth = 0) {
        if (depth > MAX_DEPTH) return this.ref;
        let record = {};
        for(let i = 0; i < this.properties.length; i++)record[this.properties[i].propertyID] = this.properties[i].getBestRecord(depth + 1);
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        return record;
    }
    // ----------------------------------------------------
    // System records
    // ----------------------------------------------------
    get systemRecord() {
        return this.getSystemRecord(0);
    }
    set systemRecord(value) {
        this.setSystemRecord(value);
    }
    get rawRecord() {
        return this.getSystemRecord(0);
    }
    set rawRecord(value) {
        this.setSystemRecord(value);
    }
    getSystemRecord(depth) {
        if (depth > MAX_DEPTH) return this.ref;
        let record = {};
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record.properties = {};
        record.summary = this.getFullRecord();
        for (let p of this.properties)record["properties"][p.propertyID] = p.getSystemRecord(depth);
        return record;
    }
    setSystemRecord(value) {
        // Load data into object
        if (!value || !value.properties) return;
        // Reset current properties
        this._properties = [];
        // convert sub things to KrThing
        var keys = Object.keys(value.properties);
        for (let key of keys){
            let properties = value.properties[key];
            properties = ensureArray(properties);
            for (let propertyValue of properties)if (propertyValue?.object.value?.["@type"]) {
                var thing = this.new(propertyValue.object.value["@type"], propertyValue.object.value["@id"]);
                thing.setSystemRecord(propertyValue.object.value);
                propertyValue.object.value = thing;
            }
        }
        // load data
        var keys = Object.keys(value.properties);
        for (let key of keys){
            var property = new (0, _classPropertyJs.KrProperty)(key);
            property.setSystemRecord(value.properties[key]);
            this._properties.push(property);
        }
    }
    // ----------------------------------------------------
    // Methods
    // ----------------------------------------------------
    getProperty(propertyID) {
        /**
         * Returns property of
         */ let propertiesID = propertyID.split(".");
        let pID = propertyID.split(".")[0];
        let otherIDS = propertyID.split(".").slice(1);
        // Find property object
        let property;
        for(let i = 0; i < this._properties.length; i++)if (this._properties[i].propertyID == pID) property = this._properties[i];
        // Create property object if missing
        if (!property || property == null) {
            property = new (0, _classPropertyJs.KrProperty)(propertyID);
            this._properties.push(property);
        }
        // Recurse
        if (otherIDS.length > 0) {
            if (!property.value?.record_type) return null;
            else return property.value.getProperty(otherIDS.join("."));
        } else return property;
    }
    addProperty(propertyID, value, credibility, observationDate) {
        return this._updateProperty(propertyID, value, credibility, observationDate, "addAction");
    }
    deleteProperty(propertyID, value, credibility, observationDate) {
        return this._updateProperty(propertyID, value, credibility, observationDate, "deleteAction");
    }
    replaceProperty(propertyID, previousValue, newValue, credibility, observationDate) {
        return this._updateProperty(propertyID, newValue, credibility, observationDate, "replaceAction", previousValue);
    }
    setProperty(propertyID, value, credibility, observationDate) {
        return this.replaceProperty(propertyID, null, value, credibility, observationDate);
    }
    _updateProperty(propertyID, value, credibility, observationDate, actionType, previousValue) {
        // Handle dot notation
        if (propertyID.includes(".")) {
            let pID = propertyID.split(".")[0];
            let otherIDS = propertyID.split(".").slice(1);
            let p = this.getProperty(pID);
            // If not value, create new KrThing
            if (!p.value?.record_type) p.setValues(new KrThing("Thing"), metadataRecord, actionType, null);
            // Set value
            p.value.setProperty(otherIDS.join("."), value);
            return p;
        }
        // Get olf value
        let oldValue = this.getProperty(propertyID)?.value;
        // get or create property object
        let property = this.getProperty(propertyID);
        if (!property) {
            property = new (0, _classPropertyJs.KrProperty)(propertyID);
            this._properties.push(property);
        }
        // Iterate through values and convert to KrThing if required
        let values = ensureArray(value);
        for(let i = 0; i < values.length; i++)if (values[i] && values[i]["@type"]) values[i] = this.new(values[i]);
        // Set metadata
        var metadataRecord = this.metadata.record;
        if (credibility) metadataRecord.credibility = credibility;
        if (observationDate) metadataRecord.observationDate = observationDate;
        // set property value
        var newValues = property.setValues(values, metadataRecord, actionType, previousValue);
        // dispatch event
        let newValue = this.getProperty(propertyID)?.value;
        if (oldValue != newValue) {
            let data = {
                propertyID: propertyID,
                oldValue: oldValue,
                newValue: newValue
            };
            this.dispatchEvent(actionType, data);
        }
        return newValues;
    }
    get(propertyID) {
        return this.getProperty(propertyID);
    }
    set(propertyID, value) {
        return this.setProperty(propertyID, value);
    }
    new(record_type, record_id) {
        return new KrThing(record_type, record_id);
    }
    // ----------------------------------------------------
    // Dot notation
    // ----------------------------------------------------
    dotGet(path) {}
    dotSet(path, value) {}
    // ----------------------------------------------------
    // Comparisons
    // ----------------------------------------------------
    lt(other) {
        if (this.record_type < other.record_type) return true;
        if (this.record_type > other.record_type) return false;
        if (this.record_id < other.record_id) return true;
        if (this.record_id > other.record_id) return false;
        return false;
    }
    gt(other) {
        if (this.record_type > other.record_type) return true;
        if (this.record_type < other.record_type) return false;
        if (this.record_id > other.record_id) return true;
        if (this.record_id < other.record_id) return false;
        return false;
    }
    eq(other) {
        if (this.record_type != other.record_type) return false;
        if (this.record_id != other.record_id) return false;
        return true;
    }
    printScreen() {
        console.log("----------------------------------");
        console.log(this.properties.length);
        console.log("thing:", this.record_type, this.record_id);
        this.properties.map((property)=>{
            property.printScreen("    ");
        });
    }
}
function ensureNotArray(value) {
    let new_value = ensureArray(value);
    if (new_value.length > 0) return new_value[0];
    else return null;
}
function ensureArray(value) {
    if (Array.isArray(value)) return value;
    else return [
        value
    ];
}
function simplify(data) {
    // Remove arrays of 1
    //return data
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) return simplify(data[0]);
        else // Otherwise, process each element in the array
        return data.map(simplify);
    } else if (data !== null && typeof data === "object") {
        // If the data is an object, process each key
        const newData = {};
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = simplify(data[key]);
        return newData;
    } else // If the data is neither an array nor an object, return it as is
    return data;
}

},{"uuid":"j4KJi","../class_property/class_property.js":"13rHw","../class_metadata/class_metadata.js":"6Z1Oi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":false,"./stringify.js":false,"./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"lYayS","./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYayS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13rHw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KrProperty", ()=>KrProperty);
var _classPropertyValueJs = require("../class_propertyValue/class_propertyValue.js");
var _classMetadataJs = require("../class_metadata/class_metadata.js");
class KrProperty {
    /*

    attributes:
    - propertyID:     string
    - propertyValue:         get best KrPropertyValue object or sets a value
    - propertyValues:        get best KrPropertyValue object for each values
    - propertyValuesAll:     get all KrPropertyValue
    - value:                 return best value
    - values:                return values
    - record:        get value as non Kr object  

    methods:
    - gt: greater than a.gt(b) a is greater than b
    - lt: less than a.lt(b) a is less than b
    - setValues:     Sets several values
    - setValue:      Sets a single value and returns a KrPropertyValue object
    - get_max:       Returns best KrPropertyValue object
    
    */ constructor(propertyID = null){
        this._propertyID = propertyID;
        this._propertyValues = [];
        this.metadata = new (0, _classMetadataJs.KrMetadata)();
    }
    // Base
    get propertyID() {
        return this._propertyID;
    }
    set propertyID(record) {
        this._propertyID = ensureNotArray(value);
    }
    gt(other) {
        if (this.propertyID == other.propertyID) return false;
        if (this.propertyID == "@type") return false;
        if (other.propertyID == "@type") return true;
        if (this.propertyID == "@id") return false;
        if (other.propertyID == "@id") return true;
        if (this.propertyID > other.propertyID) return true;
        return false;
    }
    lt(other) {
        if (this.propertyID == other.propertyID) return false;
        if (this.propertyID == "@type") return true;
        if (other.propertyID == "@type") return false;
        if (this.propertyID == "@id") return true;
        if (other.propertyID == "@id") return false;
        if (this.propertyID < other.propertyID) return true;
        return false;
    }
    eq(other) {
        if (this.propertyID && this.propertyID == other.propertyID) return true;
        return false;
    }
    //
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getFullRecord(depth = 0) {
        return this._propertyValues.map((x)=>x.getFullRecord(depth));
    }
    getRefRecord(depth = 0) {
        return this._propertyValues.map((x)=>x.getRefRecord(depth));
    }
    getBestRecord(depth = 0) {
        return this._propertyValues.map((x)=>x.getBestRecord(depth));
    }
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getSystemRecord(depth = 0) {
        return this._propertyValues.map((x)=>x.getSystemRecord(depth));
    }
    setSystemRecord(value1) {
        this._propertyValues = [];
        var values = ensureArray(value1);
        for (let value1 of values){
            var propertyValue = new (0, _classPropertyValueJs.KrPropertyValue)();
            propertyValue.setSystemRecord(value1);
            this._propertyValues.push(propertyValue);
        }
    }
    // ----------------------------------------------------
    // PropertyValues 
    // ----------------------------------------------------
    get propertyValue() {
        // return best property value object
        return this.propertyValues[0];
    }
    get propertyValues() {
        // returns best pv for each different value
        var results = [];
        const values = [
            ...new Set(this.propertyValuesAll.map((x)=>x.value))
        ];
        values.forEach((value1)=>{
            const filteredPV = this.propertyValuesAll.filter((item)=>item.value == value1);
            let maxPV = filteredPV.reduce((maxItem, item)=>maxItem.gt(item) ? maxItem : item);
            results.push(maxPV);
        });
        return results;
    }
    get propertyValuesNet() {
        let results = [];
        // process additions
        // Process additions        
        results = results.concat(this.propertyValues.filter((item)=>item.record_type == "addAction"));
        results = results.concat(this.propertyValues.filter((item)=>item.record_type == "replaceAction"));
        // Process deletions and replacements
        this.propertyValues.filter((item)=>item.record_type == "replaceAction").forEach((filteredItem)=>{
            results = results.filter((result)=>!(result.lt(filteredItem) && (filteredItem.replacee == null || filteredItem.replacee == result.value)));
        });
        this.propertyValues.filter((item)=>item.record_type == "deleteAction").forEach((filteredItem)=>{
            results = results.filter((result)=>!(result.lt(filteredItem) && result.value == filteredItem.value));
        });
        return results;
    }
    get propertyValuesAll() {
        // return in reverse order
        function compare(a, b) {
            if (a.gt(b)) return -1;
            if (a.lt(b)) return 1;
            return 0;
        }
        return this._propertyValues.toSorted(compare);
    }
    // ----------------------------------------------------
    // Values 
    // ----------------------------------------------------
    get value() {
        // Return value element of best propertyValue object
        if (this.propertyValue) return this.propertyValue.value;
        return null;
    }
    set value(value1) {
        return this.setValues(value1);
    }
    get values() {
        // Return value elements of all propertyValue object in order
        return this.propertyValuesNet.map((x)=>x.value);
    }
    setValues(value1, metadataRecord, actionType) {
        let results = [];
        let values = ensureArray(value1);
        for(let i = 0; i < values.length; i++)results.push(this.setValue(values[i], metadataRecord, actionType));
        return results;
    }
    setValue(value1, metadataRecord, actionType) {
        let newValueObject = value1;
        if (!(newValueObject instanceof (0, _classPropertyValueJs.KrPropertyValue))) newValueObject = new (0, _classPropertyValueJs.KrPropertyValue)(this.propertyID, value1, actionType);
        newValueObject.metadata.inheritMetadata(metadataRecord);
        this._propertyValues.push(newValueObject);
        newValueObject.metadata.position = this._propertyValues.length;
        return newValueObject;
    }
    printScreen(suffix = "") {
        var v = this.value;
        if (this.value && this.value.record_type) v = this.value.record_type + "/" + this.value.record_id;
        console.log(suffix, " - ", this.propertyID, ": ", v);
        console.log(suffix, "       Net");
        this.propertyValuesNet.map((propertyValue)=>{
            propertyValue.printScreen(suffix + "        ");
        });
        console.log(suffix, "       Raw");
        this.propertyValuesAll.map((propertyValue)=>{
            propertyValue.printScreen(suffix + "        ");
        });
    }
}
function ensureNotArray(value1) {
    let new_value = ensureArray(value1);
    if (new_value.length > 0) return new_value[0];
    else return null;
}
function ensureArray(value1) {
    if (Array.isArray(value1)) return value1;
    else return [
        value1
    ];
}

},{"../class_propertyValue/class_propertyValue.js":"i7WfF","../class_metadata/class_metadata.js":"6Z1Oi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7WfF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KrPropertyValue", ()=>KrPropertyValue);
var _uuid = require("uuid");
var _classMetadataJs = require("../class_metadata/class_metadata.js");
class KrPropertyValue {
    /*

    attributes:
    - proeprtyID:
    - value: 
    - c: 
    - d:

    */ constructor(propertyID, value, actionType = "replaceAction", previousValue){
        this._record = {
            "@type": actionType,
            "@id": String((0, _uuid.v4)()),
            "object": {
                "@type": "propertyValue",
                propertyID: propertyID,
                value: value
            },
            actionStatus: "completedActionStatus",
            replacee: previousValue,
            replacer: value
        };
        this.metadata = new (0, _classMetadataJs.KrMetadata)();
    }
    // ----------------------------------------------------
    // Attributes - action
    // ----------------------------------------------------
    get record_type() {
        return this._record["@type"];
    }
    set record_type(value) {
        this._record["@type"] = value;
    }
    get record_id() {
        return this._record["@id"];
    }
    set record_id(value) {
        this._record["@id"] = value;
    }
    get object() {
        return this._record.object;
    }
    set object(value) {
        this._record.object = value;
    }
    get replacer() {
        return this._record.replacer;
    }
    set replacer(value) {
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
    }
    // ----------------------------------------------------
    // Attributes - object
    // ----------------------------------------------------
    get propertyID() {
        return this._record.object.propertyID;
    }
    set propertyID(value) {
        this._record.object.object.propertyID = value;
    }
    get value() {
        return this._record.object.value;
    }
    set value(value) {
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
    }
    // ----------------------------------------------------
    // Attributes - metadata
    // ----------------------------------------------------
    get t() {
        return this._record.t;
    }
    set t(value) {
        this._record.t = value;
    }
    get value() {
        return this._record.object.value;
    }
    set value(value) {
        this._record.object.value = ensureNotArray(value);
        this._record.replacer = ensureNotArray(value);
    }
    get agent() {
        return this.metadata.agent;
    }
    set agent(value) {
        this.metadata.agent = value;
    }
    get instrument() {
        return this.metadata.instrument;
    }
    set instrument(value) {
        this.metadata.instrument = value;
    }
    get credibility() {
        this.metadata.credibility;
    }
    set credibility(value) {
        this.metadata.credibility = value;
    }
    get observationDate() {
        return this.metadata.observationDate;
    }
    set observationDate(value) {
        this.metadata.observationDate = value;
    }
    get c() {
        return this.metadata.credibility;
    }
    set c(value) {
        this.metadata.credibility = value;
    }
    get d() {
        return this.metadata.observationDate;
    }
    set d(value) {
        this.metadata.observationDate = value;
    }
    // ----------------------------------------------------
    // Records 
    // ----------------------------------------------------
    getFullRecord(depth = 0) {
        if (this.value && this.value.constructor.name == "KrThing") return this.value.getFullRecord(depth);
        return this.value;
    }
    getRefRecord(depth = 0) {
        let record = JSON.parse(JSON.stringify(this._record));
        record.metadata = this.metadata.getRefRecord(depth);
        if (this.value && this.value.record_type) record["value"] = this.value.ref;
        return record;
    }
    getBestRecord(depth = 0) {
        let value = this.value;
        if (this.value && this.value.record_type) value = this.value.getBestRecord(depth);
        return value;
    }
    // ----------------------------------------------------
    // Raw records 
    // ----------------------------------------------------
    getSystemRecord(depth = 0) {
        let record = {};
        record["@type"] = this.record_type;
        record["@id"] = this.record_id;
        record["actionStatus"] = this._record.actionStatus;
        record["object"] = {};
        record.object["@type"] = this._record.object["@type"];
        record.object["propertyID"] = this._record.object["propertyID"];
        record.object["value"] = null;
        record.metadata = this.metadata.getSystemRecord();
        if (this.value && this.value.constructor.name == "KrThing") record.object["value"] = this.value.getSystemRecord(depth);
        else record.object["value"] = this.value;
        return record;
    }
    setSystemRecord(value) {
        this.metadata.setSystemRecord(value.metadata);
        delete value.metadata;
        this._record = JSON.parse(JSON.stringify(value));
        this._record = value;
    }
    // ----------------------------------------------------
    // Methods 
    // ----------------------------------------------------
    setValue(value, metadataRecord) {
        this.value = value;
        this.metadata.inheritMetadata(metadataRecord);
    }
    equal(other) {
        return this.eq(other);
    }
    eq(other) {
        // returns true if equal
        if (this.value == other.value) return true;
        return false;
    }
    gt(other) {
        return this.metadata.gt(other.metadata);
    }
    lt(other) {
        return this.metadata.lt(other.metadata);
    }
    printScreen(suffix = "") {
        var v = this.value;
        if (this.value && this.value.record_type) v = this.value.record_type + "/" + this.value.record_id;
        var t_string = this.record_type.replace("Action", "").padEnd(10);
        var c_string = String(this.metadata.c || 0).padStart(5);
        var p_string = String(this.metadata.position).padStart(5);
        console.log(suffix, " - ", c_string, p_string, t_string, v);
    }
    // -----------------------------------------------------
    //  HTML values 
    // -----------------------------------------------------
    get valueHTML() {
        this.value.record_type;
    }
}

},{"uuid":"j4KJi","../class_metadata/class_metadata.js":"6Z1Oi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Z1Oi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KrMetadata", ()=>KrMetadata);
class KrMetadata {
    /* Contains metadata to qualify a value

    attributes:
    - credibility or c:    
    - observationDate or d: 
    - record:         Returns all metadata in a dict
    - object:         The original source of the data
    - Instrument:     What brought the data over
    - validFrom
    - validThrough


    Methods
    - equal:     Returns true if comes from same object
    - lt:        Worst metadata in order of c and d
    - gt:        Best metadata in order of c and d
    - isValid    Returns true if date between validfrom validthrough
    

    */ constructor(record){
        this._record = {};
        this.createdDate = new Date();
    }
    get record() {
        return this._record;
    }
    getFullRecord(depth) {
        return JSON.parse(JSON.stringify(this._record));
    }
    setFullRecord(value) {
        this._record = JSON.parse(JSON.stringify(value));
    }
    getRefRecord(depth) {
        return JSON.parse(JSON.stringify(this._record));
    }
    getSystemRecord(depth) {
        return JSON.parse(JSON.stringify(this._record));
    }
    setSystemRecord(value) {
        this._record = JSON.parse(JSON.stringify(value));
    }
    inheritMetadata(metadataRecord) {
        let currentPosition = this.position;
        this.record = metadataRecord;
        this.position = currentPosition;
    }
    set record(value) {
        if (!value) return;
        this._record = JSON.parse(JSON.stringify(value));
    }
    get credibility() {
        return this._record.credibility;
    }
    set credibility(value) {
        this._record.credibility = value;
    }
    get c() {
        return this.credibility;
    }
    set c(value) {
        this.credibility = value;
    }
    get createdDate() {
        return new Date(JSON.parse(this._record.createdDate || null));
    }
    set createdDate(value) {
        if (value && value instanceof Date) this._record.createdDate = JSON.stringify(value);
    }
    get position() {
        return this._record.position;
    }
    set position(value) {
        this._record.position = value;
    }
    get observationDate() {
        return new Date(JSON.parse(this._record.observationDate || null));
    }
    set observationDate(value) {
        if (value && value instanceof Date) this._record.observationDate = JSON.stringify(value);
    }
    get d() {
        return this.observationDate;
    }
    set d(value) {
        this.observationDate = value;
    }
    get validFrom() {
        return this._record.validFrom;
    }
    set validFrom(value) {
        this._record.validFrom = value;
    }
    get validThrough() {
        return this._record.validThrough;
    }
    set validThrough(value) {
        this._record.validThrough = value;
    }
    get object() {
        return this._record.object;
    }
    set object(value) {
        this._record.object = value;
    }
    equal(other) {
        // returns true if data comes from same object
        if (this.object == other.object) return true;
        return false;
    }
    isValid(comparisonDate = null) {
        // Returns true if value is within velidFrom, validThrough. Uses today's date if not provided
        if (comparisonDate == null) comparisonDate = new Date();
        if (this.validFrom && comparisonDate < this.validFrom) return False;
        if (this.validThrough && comparisonDate >= this.validThrough) return False;
        return True;
    }
    gt(other, comparisonDate) {
        if (!this.credibility && other.credibility) return false;
        if (this.credibility && !other.credibility) return true;
        if (this.credibility > other.credibility) return true;
        if (this.credibility < other.credibility) return false;
        if (!this.observationDate && other.observationDate) return false;
        if (this.observationDate && !other.observationDate) return true;
        if (this.observationDate > other.observationDate) return true;
        if (this.observationDate < other.observationDate) return false;
        if (!this.createdDate && other.createdDate) return false;
        if (this.createdDate && !other.createdDate) return true;
        if (this.createdDate > other.createdDate) return true;
        if (this.createdDate < other.createdDate) return false;
        if (!this.position && other.position) return false;
        if (this.position && !other.position) return true;
        if (this.position > other.position) return true;
        if (this.position < other.position) return false;
        return false;
    }
    lt(other) {
        if (!this.credibility && other.credibility) return true;
        if (this.credibility && !other.credibility) return false;
        if (this.credibility < other.credibility) return true;
        if (this.credibility > other.credibility) return false;
        if (!this.observationDate && other.observationDate) return true;
        if (this.observationDate && !other.observationDate) return false;
        if (this.observationDate < other.observationDate) return true;
        if (this.observationDate > other.observationDate) return false;
        if (!this.createdDate && other.createdDate) return true;
        if (this.createdDate && !other.createdDate) return false;
        if (this.createdDate < other.createdDate) return true;
        if (this.createdDate > other.createdDate) return false;
        if (!this.position && other.position) return true;
        if (this.position && !other.position) return false;
        if (this.position < other.position) return true;
        if (this.position > other.position) return false;
        return false;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["86oZd","6rimH"], "6rimH", "parcelRequired237")

//# sourceMappingURL=index.8cfc62b9.js.map
