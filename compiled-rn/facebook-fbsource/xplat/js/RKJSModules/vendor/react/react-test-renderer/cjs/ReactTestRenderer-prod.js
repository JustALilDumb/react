/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @generated SignedSource<<80dbb6d3b46b41baa1ee29972cb3ee51>>
 */

"use strict";
var React = require("react"),
  Scheduler = require("scheduler/unstable_mock"),
  Scheduler$1 = require("scheduler");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1;
    descriptor.configurable = !0;
    "value" in descriptor && (descriptor.writable = !0);
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  protoProps && _defineProperties(Constructor.prototype, protoProps);
  staticProps && _defineProperties(Constructor, staticProps);
  return Constructor;
}
var assign = Object.assign,
  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.tracing_marker");
var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function getComponentNameFromType(type) {
  if (null == type) return null;
  if ("function" === typeof type)
    return type.$$typeof === REACT_CLIENT_REFERENCE
      ? null
      : type.displayName || type.name || null;
  if ("string" === typeof type) return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PORTAL_TYPE:
      return "Portal";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
  }
  if ("object" === typeof type)
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return (type.displayName || "Context") + ".Provider";
      case REACT_CONSUMER_TYPE:
        return (type._context.displayName || "Context") + ".Consumer";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type ||
          ((type = innerType.displayName || innerType.name || ""),
          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
        return type;
      case REACT_MEMO_TYPE:
        return (
          (innerType = type.displayName || null),
          null !== innerType
            ? innerType
            : getComponentNameFromType(type.type) || "Memo"
        );
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {}
    }
  return null;
}
function getComponentNameFromFiber(fiber) {
  var type = fiber.type;
  switch (fiber.tag) {
    case 24:
      return "Cache";
    case 9:
      return (type._context.displayName || "Context") + ".Consumer";
    case 10:
      return (type.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (fiber = type.render),
        (fiber = fiber.displayName || fiber.name || ""),
        type.displayName ||
          ("" !== fiber ? "ForwardRef(" + fiber + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 26:
    case 27:
    case 5:
      return type;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return getComponentNameFromType(type);
    case 8:
      return type === REACT_STRICT_MODE_TYPE ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 17:
    case 28:
    case 1:
    case 0:
    case 14:
    case 15:
      if ("function" === typeof type)
        return type.displayName || type.name || null;
      if ("string" === typeof type) return type;
  }
  return null;
}
var ReactSharedInternals =
    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  prefix;
function describeBuiltInComponentFrame(name) {
  if (void 0 === prefix)
    try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = (match && match[1]) || "";
    }
  return "\n" + prefix + name;
}
var reentry = !1;
function describeNativeComponentFrame(fn, construct) {
  if (!fn || reentry) return "";
  reentry = !0;
  var previousPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  var RunInRootFrame = {
    DetermineComponentFrameRoot: function () {
      try {
        if (construct) {
          var Fake = function () {
            throw Error();
          };
          Object.defineProperty(Fake.prototype, "props", {
            set: function () {
              throw Error();
            }
          });
          if ("object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              var control = x;
            }
            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x$0) {
              control = x$0;
            }
            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x$1) {
            control = x$1;
          }
          (Fake = fn()) &&
            "function" === typeof Fake.catch &&
            Fake.catch(function () {});
        }
      } catch (sample) {
        if (sample && control && "string" === typeof sample.stack)
          return [sample.stack, control.stack];
      }
      return [null, null];
    }
  };
  RunInRootFrame.DetermineComponentFrameRoot.displayName =
    "DetermineComponentFrameRoot";
  var namePropDescriptor = Object.getOwnPropertyDescriptor(
    RunInRootFrame.DetermineComponentFrameRoot,
    "name"
  );
  namePropDescriptor &&
    namePropDescriptor.configurable &&
    Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
      value: "DetermineComponentFrameRoot"
    });
  try {
    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
      sampleStack = _RunInRootFrame$Deter[0],
      controlStack = _RunInRootFrame$Deter[1];
    if (sampleStack && controlStack) {
      var sampleLines = sampleStack.split("\n"),
        controlLines = controlStack.split("\n");
      for (
        namePropDescriptor = RunInRootFrame = 0;
        RunInRootFrame < sampleLines.length &&
        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

      )
        RunInRootFrame++;
      for (
        ;
        namePropDescriptor < controlLines.length &&
        !controlLines[namePropDescriptor].includes(
          "DetermineComponentFrameRoot"
        );

      )
        namePropDescriptor++;
      if (
        RunInRootFrame === sampleLines.length ||
        namePropDescriptor === controlLines.length
      )
        for (
          RunInRootFrame = sampleLines.length - 1,
            namePropDescriptor = controlLines.length - 1;
          1 <= RunInRootFrame &&
          0 <= namePropDescriptor &&
          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

        )
          namePropDescriptor--;
      for (
        ;
        1 <= RunInRootFrame && 0 <= namePropDescriptor;
        RunInRootFrame--, namePropDescriptor--
      )
        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
            do
              if (
                (RunInRootFrame--,
                namePropDescriptor--,
                0 > namePropDescriptor ||
                  sampleLines[RunInRootFrame] !==
                    controlLines[namePropDescriptor])
              ) {
                var frame =
                  "\n" +
                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
                fn.displayName &&
                  frame.includes("<anonymous>") &&
                  (frame = frame.replace("<anonymous>", fn.displayName));
                return frame;
              }
            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
          }
          break;
        }
    }
  } finally {
    (reentry = !1), (Error.prepareStackTrace = previousPrepareStackTrace);
  }
  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
    : "";
}
function describeFiber(fiber) {
  switch (fiber.tag) {
    case 26:
    case 27:
    case 5:
      return describeBuiltInComponentFrame(fiber.type);
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 13:
      return describeBuiltInComponentFrame("Suspense");
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 0:
    case 15:
      return (fiber = describeNativeComponentFrame(fiber.type, !1)), fiber;
    case 11:
      return (
        (fiber = describeNativeComponentFrame(fiber.type.render, !1)), fiber
      );
    case 1:
      return (fiber = describeNativeComponentFrame(fiber.type, !0)), fiber;
    default:
      return "";
  }
}
function getStackByFiberInDevAndProd(workInProgress) {
  try {
    var info = "";
    do
      (info += describeFiber(workInProgress)),
        (workInProgress = workInProgress.return);
    while (workInProgress);
    return info;
  } catch (x) {
    return "\nError generating stack: " + x.message + "\n" + x.stack;
  }
}
function getNearestMountedFiber(fiber) {
  var node = fiber,
    nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      (node = fiber),
        0 !== (node.flags & 4098) && (nearestMounted = node.return),
        (fiber = node.return);
    while (fiber);
  }
  return 3 === node.tag ? nearestMounted : null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error("Unable to find node on an unmounted component.");
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate)
      throw Error("Unable to find node on an unmounted component.");
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    var parentA = a.return;
    if (null === parentA) break;
    var parentB = parentA.alternate;
    if (null === parentB) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error("Unable to find node on an unmounted component.");
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$2 = parentA.child; child$2; ) {
        if (child$2 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$2 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$2 = child$2.sibling;
      }
      if (!didFindChild) {
        for (child$2 = parentB.child; child$2; ) {
          if (child$2 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$2 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$2 = child$2.sibling;
        }
        if (!didFindChild)
          throw Error(
            "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
          );
      }
    }
    if (a.alternate !== b)
      throw Error(
        "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
      );
  }
  if (3 !== a.tag)
    throw Error("Unable to find node on an unmounted component.");
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiberImpl(node) {
  var tag = node.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
  for (node = node.child; null !== node; ) {
    tag = findCurrentHostFiberImpl(node);
    if (null !== tag) return tag;
    node = node.sibling;
  }
  return null;
}
var isArrayImpl = Array.isArray,
  scheduleCallback$3 = Scheduler$1.unstable_scheduleCallback,
  cancelCallback$1 = Scheduler$1.unstable_cancelCallback,
  shouldYield = Scheduler$1.unstable_shouldYield,
  requestPaint = Scheduler$1.unstable_requestPaint,
  now = Scheduler$1.unstable_now,
  ImmediatePriority = Scheduler$1.unstable_ImmediatePriority,
  UserBlockingPriority = Scheduler$1.unstable_UserBlockingPriority,
  NormalPriority$1 = Scheduler$1.unstable_NormalPriority,
  IdlePriority = Scheduler$1.unstable_IdlePriority,
  rendererID = null,
  injectedHook = null;
function onCommitRoot(root) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
    try {
      injectedHook.onCommitFiberRoot(
        rendererID,
        root,
        void 0,
        128 === (root.current.flags & 128)
      );
    } catch (err) {}
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
  log = Math.log,
  LN2 = Math.LN2;
function clz32Fallback(x) {
  x >>>= 0;
  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
}
var nextTransitionLane = 128,
  nextRetryLane = 4194304;
function getHighestPriorityLanes(lanes) {
  var pendingSyncLanes = lanes & 42;
  if (0 !== pendingSyncLanes) return pendingSyncLanes;
  switch (lanes & -lanes) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return lanes & 4194176;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return lanes & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return lanes;
  }
}
function getNextLanes(root, wipLanes) {
  var pendingLanes = root.pendingLanes;
  if (0 === pendingLanes) return 0;
  var nextLanes = 0,
    suspendedLanes = root.suspendedLanes;
  root = root.pingedLanes;
  var nonIdlePendingLanes = pendingLanes & 134217727;
  0 !== nonIdlePendingLanes
    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
      0 !== pendingLanes
        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
        : ((root &= nonIdlePendingLanes),
          0 !== root && (nextLanes = getHighestPriorityLanes(root))))
    : ((pendingLanes &= ~suspendedLanes),
      0 !== pendingLanes
        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
        : 0 !== root && (nextLanes = getHighestPriorityLanes(root)));
  return 0 === nextLanes
    ? 0
    : 0 !== wipLanes &&
      wipLanes !== nextLanes &&
      0 === (wipLanes & suspendedLanes) &&
      ((suspendedLanes = nextLanes & -nextLanes),
      (root = wipLanes & -wipLanes),
      suspendedLanes >= root ||
        (32 === suspendedLanes && 0 !== (root & 4194176)))
    ? wipLanes
    : nextLanes;
}
function computeExpirationTime(lane, currentTime) {
  switch (lane) {
    case 1:
    case 2:
    case 4:
    case 8:
      return currentTime + 250;
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return currentTime + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function getLanesToRetrySynchronouslyOnError(root, originallyAttemptedLanes) {
  if (root.errorRecoveryDisabledLanes & originallyAttemptedLanes) return 0;
  root = root.pendingLanes & -536870913;
  return 0 !== root ? root : root & 536870912 ? 536870912 : 0;
}
function includesBlockingLane(root, lanes) {
  return 0 !== (root.current.mode & 32) ? !1 : 0 !== (lanes & 60);
}
function claimNextTransitionLane() {
  var lane = nextTransitionLane;
  nextTransitionLane <<= 1;
  0 === (nextTransitionLane & 4194176) && (nextTransitionLane = 128);
  return lane;
}
function claimNextRetryLane() {
  var lane = nextRetryLane;
  nextRetryLane <<= 1;
  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
  return lane;
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootUpdated$1(root, updateLane) {
  root.pendingLanes |= updateLane;
  268435456 !== updateLane &&
    ((root.suspendedLanes = 0), (root.pingedLanes = 0));
}
function markRootFinished(root, remainingLanes, spawnedLane) {
  var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
  root.pendingLanes = remainingLanes;
  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  root.errorRecoveryDisabledLanes &= remainingLanes;
  root.shellSuspendCounter = 0;
  remainingLanes = root.entanglements;
  for (
    var expirationTimes = root.expirationTimes,
      hiddenUpdates = root.hiddenUpdates;
    0 < noLongerPendingLanes;

  ) {
    var index$6 = 31 - clz32(noLongerPendingLanes),
      lane = 1 << index$6;
    remainingLanes[index$6] = 0;
    expirationTimes[index$6] = -1;
    var hiddenUpdatesForLane = hiddenUpdates[index$6];
    if (null !== hiddenUpdatesForLane)
      for (
        hiddenUpdates[index$6] = null, index$6 = 0;
        index$6 < hiddenUpdatesForLane.length;
        index$6++
      ) {
        var update = hiddenUpdatesForLane[index$6];
        null !== update && (update.lane &= -536870913);
      }
    noLongerPendingLanes &= ~lane;
  }
  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
}
function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
  root.pendingLanes |= spawnedLane;
  root.suspendedLanes &= ~spawnedLane;
  var spawnedLaneIndex = 31 - clz32(spawnedLane);
  root.entangledLanes |= spawnedLane;
  root.entanglements[spawnedLaneIndex] =
    root.entanglements[spawnedLaneIndex] |
    1073741824 |
    (entangledLanes & 4194218);
}
function markRootEntangled(root, entangledLanes) {
  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    var index$7 = 31 - clz32(rootEntangledLanes),
      lane = 1 << index$7;
    (lane & entangledLanes) | (root[index$7] & entangledLanes) &&
      (root[index$7] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
function lanesToEventPriority(lanes) {
  lanes &= -lanes;
  return 2 < lanes
    ? 8 < lanes
      ? 0 !== (lanes & 134217727)
        ? 32
        : 268435456
      : 8
    : 2;
}
function shim$1() {
  throw Error(
    "The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue."
  );
}
function shim() {
  throw Error(
    "The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue."
  );
}
var NO_CONTEXT = {},
  nodeToInstanceMap = new WeakMap();
function getPublicInstance(inst) {
  switch (inst.tag) {
    case "INSTANCE":
      var createNodeMock = inst.rootContainerInstance.createNodeMock;
      createNodeMock = createNodeMock({ type: inst.type, props: inst.props });
      "object" === typeof createNodeMock &&
        null !== createNodeMock &&
        nodeToInstanceMap.set(createNodeMock, inst);
      return createNodeMock;
    default:
      return inst;
  }
}
function appendChild(parentInstance, child) {
  var index = parentInstance.children.indexOf(child);
  -1 !== index && parentInstance.children.splice(index, 1);
  parentInstance.children.push(child);
}
function insertBefore(parentInstance, child, beforeChild) {
  var index = parentInstance.children.indexOf(child);
  -1 !== index && parentInstance.children.splice(index, 1);
  beforeChild = parentInstance.children.indexOf(beforeChild);
  parentInstance.children.splice(beforeChild, 0, child);
}
var currentUpdatePriority = 0,
  scheduleTimeout = setTimeout,
  cancelTimeout = clearTimeout,
  valueStack = [],
  index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
function pop(cursor) {
  0 > index ||
    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
var emptyContextObject = {},
  contextStackCursor$1 = createCursor(emptyContextObject),
  didPerformWorkStackCursor = createCursor(!1),
  previousContext = emptyContextObject;
function getMaskedContext(workInProgress, unmaskedContext) {
  var contextTypes = workInProgress.type.contextTypes;
  if (!contextTypes) return emptyContextObject;
  var instance = workInProgress.stateNode;
  if (
    instance &&
    instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext
  )
    return instance.__reactInternalMemoizedMaskedChildContext;
  var context = {},
    key;
  for (key in contextTypes) context[key] = unmaskedContext[key];
  instance &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext =
      unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
  return context;
}
function isContextProvider(type) {
  type = type.childContextTypes;
  return null !== type && void 0 !== type;
}
function popContext() {
  pop(didPerformWorkStackCursor);
  pop(contextStackCursor$1);
}
function pushTopLevelContextObject(fiber, context, didChange) {
  if (contextStackCursor$1.current !== emptyContextObject)
    throw Error(
      "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."
    );
  push(contextStackCursor$1, context);
  push(didPerformWorkStackCursor, didChange);
}
function processChildContext(fiber, type, parentContext) {
  var instance = fiber.stateNode;
  type = type.childContextTypes;
  if ("function" !== typeof instance.getChildContext) return parentContext;
  instance = instance.getChildContext();
  for (var contextKey in instance)
    if (!(contextKey in type))
      throw Error(
        (getComponentNameFromFiber(fiber) || "Unknown") +
          '.getChildContext(): key "' +
          contextKey +
          '" is not defined in childContextTypes.'
      );
  return assign({}, parentContext, instance);
}
function pushContextProvider(workInProgress) {
  workInProgress =
    ((workInProgress = workInProgress.stateNode) &&
      workInProgress.__reactInternalMemoizedMergedChildContext) ||
    emptyContextObject;
  previousContext = contextStackCursor$1.current;
  push(contextStackCursor$1, workInProgress);
  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current);
  return !0;
}
function invalidateContextProvider(workInProgress, type, didChange) {
  var instance = workInProgress.stateNode;
  if (!instance)
    throw Error(
      "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."
    );
  didChange
    ? ((workInProgress = processChildContext(
        workInProgress,
        type,
        previousContext
      )),
      (instance.__reactInternalMemoizedMergedChildContext = workInProgress),
      pop(didPerformWorkStackCursor),
      pop(contextStackCursor$1),
      push(contextStackCursor$1, workInProgress))
    : pop(didPerformWorkStackCursor);
  push(didPerformWorkStackCursor, didChange);
}
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  CapturedStacks = new WeakMap();
function createCapturedValueAtFiber(value, source) {
  if ("object" === typeof value && null !== value) {
    var stack = CapturedStacks.get(value);
    "string" !== typeof stack &&
      ((stack = getStackByFiberInDevAndProd(source)),
      CapturedStacks.set(value, stack));
  } else stack = getStackByFiberInDevAndProd(source);
  return { value: value, source: source, stack: stack };
}
var contextStackCursor = createCursor(null),
  contextFiberStackCursor = createCursor(null),
  rootInstanceStackCursor = createCursor(null),
  hostTransitionProviderCursor = createCursor(null),
  HostTransitionContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    Provider: null,
    Consumer: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor, null);
  pop(contextStackCursor);
  push(contextStackCursor, NO_CONTEXT);
}
function popHostContainer() {
  pop(contextStackCursor);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
  contextStackCursor.current !== NO_CONTEXT &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor, NO_CONTEXT));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor), pop(contextFiberStackCursor));
  hostTransitionProviderCursor.current === fiber &&
    (pop(hostTransitionProviderCursor),
    (HostTransitionContext._currentValue2 = null));
}
var hydrationErrors = null,
  concurrentQueues = [],
  concurrentQueuesIndex = 0,
  concurrentlyUpdatedLanes = 0;
function finishQueueingConcurrentUpdates() {
  for (
    var endIndex = concurrentQueuesIndex,
      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
    i < endIndex;

  ) {
    var fiber = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var queue = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var update = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var lane = concurrentQueues[i];
    concurrentQueues[i++] = null;
    if (null !== queue && null !== update) {
      var pending = queue.pending;
      null === pending
        ? (update.next = update)
        : ((update.next = pending.next), (pending.next = update));
      queue.pending = update;
    }
    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
  }
}
function enqueueUpdate$1(fiber, queue, update, lane) {
  concurrentQueues[concurrentQueuesIndex++] = fiber;
  concurrentQueues[concurrentQueuesIndex++] = queue;
  concurrentQueues[concurrentQueuesIndex++] = update;
  concurrentQueues[concurrentQueuesIndex++] = lane;
  concurrentlyUpdatedLanes |= lane;
  fiber.lanes |= lane;
  fiber = fiber.alternate;
  null !== fiber && (fiber.lanes |= lane);
}
function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
  enqueueUpdate$1(fiber, queue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function enqueueConcurrentRenderForLane(fiber, lane) {
  enqueueUpdate$1(fiber, null, null, lane);
  return getRootForUpdatedFiber(fiber);
}
function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
  sourceFiber.lanes |= lane;
  var alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  for (var isHidden = !1, parent = sourceFiber.return; null !== parent; )
    (parent.childLanes |= lane),
      (alternate = parent.alternate),
      null !== alternate && (alternate.childLanes |= lane),
      22 === parent.tag &&
        ((sourceFiber = parent.stateNode),
        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)),
      (sourceFiber = parent),
      (parent = parent.return);
  isHidden &&
    null !== update &&
    3 === sourceFiber.tag &&
    ((parent = sourceFiber.stateNode),
    (isHidden = 31 - clz32(lane)),
    (parent = parent.hiddenUpdates),
    (sourceFiber = parent[isHidden]),
    null === sourceFiber
      ? (parent[isHidden] = [update])
      : sourceFiber.push(update),
    (update.lane = lane | 536870912));
}
function getRootForUpdatedFiber(sourceFiber) {
  if (50 < nestedUpdateCount)
    throw (
      ((nestedUpdateCount = 0),
      (rootWithNestedUpdates = null),
      Error(
        "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
      ))
    );
  for (var parent = sourceFiber.return; null !== parent; )
    (sourceFiber = parent), (parent = sourceFiber.return);
  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
}
var firstScheduledRoot = null,
  lastScheduledRoot = null,
  didScheduleMicrotask = !1,
  mightHavePendingSyncWork = !1,
  isFlushingWork = !1,
  currentEventTransitionLane = 0;
function ensureRootIsScheduled(root) {
  root !== lastScheduledRoot &&
    null === root.next &&
    (null === lastScheduledRoot
      ? (firstScheduledRoot = lastScheduledRoot = root)
      : (lastScheduledRoot = lastScheduledRoot.next = root));
  mightHavePendingSyncWork = !0;
  didScheduleMicrotask ||
    ((didScheduleMicrotask = !0),
    scheduleCallback$3(ImmediatePriority, processRootScheduleInMicrotask));
  scheduleTaskForRootDuringMicrotask(root, now());
}
function flushSyncWorkAcrossRoots_impl(onlyLegacy) {
  if (!isFlushingWork && mightHavePendingSyncWork) {
    isFlushingWork = !0;
    do {
      var didPerformSomeWork = !1;
      for (var root = firstScheduledRoot; null !== root; ) {
        if (!onlyLegacy || 0 === root.tag) {
          var workInProgressRootRenderLanes$9 = workInProgressRootRenderLanes;
          workInProgressRootRenderLanes$9 = getNextLanes(
            root,
            root === workInProgressRoot ? workInProgressRootRenderLanes$9 : 0
          );
          0 !== (workInProgressRootRenderLanes$9 & 3) &&
            ((didPerformSomeWork = !0),
            performSyncWorkOnRoot(root, workInProgressRootRenderLanes$9));
        }
        root = root.next;
      }
    } while (didPerformSomeWork);
    isFlushingWork = !1;
  }
}
function processRootScheduleInMicrotask() {
  mightHavePendingSyncWork = didScheduleMicrotask = !1;
  for (
    var currentTime = now(), prev = null, root = firstScheduledRoot;
    null !== root;

  ) {
    var next = root.next,
      nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
    0 === nextLanes
      ? ((root.next = null),
        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
        null === next && (lastScheduledRoot = prev))
      : ((prev = root),
        0 !== (nextLanes & 3) && (mightHavePendingSyncWork = !0));
    root = next;
  }
  currentEventTransitionLane = 0;
  flushSyncWorkAcrossRoots_impl(!1);
}
function scheduleTaskForRootDuringMicrotask(root, currentTime) {
  for (
    var suspendedLanes = root.suspendedLanes,
      pingedLanes = root.pingedLanes,
      expirationTimes = root.expirationTimes,
      lanes = root.pendingLanes & -62914561;
    0 < lanes;

  ) {
    var index$4 = 31 - clz32(lanes),
      lane = 1 << index$4,
      expirationTime = expirationTimes[index$4];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
        expirationTimes[index$4] = computeExpirationTime(lane, currentTime);
    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
    lanes &= ~lane;
  }
  currentTime = workInProgressRoot;
  suspendedLanes = workInProgressRootRenderLanes;
  suspendedLanes = getNextLanes(
    root,
    root === currentTime ? suspendedLanes : 0
  );
  pingedLanes = root.callbackNode;
  if (
    0 === suspendedLanes ||
    (root === currentTime && 2 === workInProgressSuspendedReason) ||
    null !== root.cancelPendingCommit
  )
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackNode = null),
      (root.callbackPriority = 0)
    );
  if (0 !== (suspendedLanes & 3))
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackPriority = 2),
      (root.callbackNode = null),
      2
    );
  currentTime = suspendedLanes & -suspendedLanes;
  if (currentTime === root.callbackPriority) return currentTime;
  null !== pingedLanes && cancelCallback$1(pingedLanes);
  switch (lanesToEventPriority(suspendedLanes)) {
    case 2:
      suspendedLanes = ImmediatePriority;
      break;
    case 8:
      suspendedLanes = UserBlockingPriority;
      break;
    case 32:
      suspendedLanes = NormalPriority$1;
      break;
    case 268435456:
      suspendedLanes = IdlePriority;
      break;
    default:
      suspendedLanes = NormalPriority$1;
  }
  pingedLanes = performConcurrentWorkOnRoot.bind(null, root);
  suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
  root.callbackPriority = currentTime;
  root.callbackNode = suspendedLanes;
  return currentTime;
}
function requestTransitionLane() {
  0 === currentEventTransitionLane &&
    (currentEventTransitionLane = claimNextTransitionLane());
  return currentEventTransitionLane;
}
var currentEntangledListeners = null,
  currentEntangledPendingCount = 0,
  currentEntangledLane = 0,
  currentEntangledActionThenable = null;
function entangleAsyncAction(transition, thenable) {
  if (null === currentEntangledListeners) {
    var entangledListeners = (currentEntangledListeners = []);
    currentEntangledPendingCount = 0;
    currentEntangledLane = requestTransitionLane();
    currentEntangledActionThenable = {
      status: "pending",
      value: void 0,
      then: function (resolve) {
        entangledListeners.push(resolve);
      }
    };
  }
  currentEntangledPendingCount++;
  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
  return thenable;
}
function pingEngtangledActionScope() {
  if (
    null !== currentEntangledListeners &&
    0 === --currentEntangledPendingCount
  ) {
    null !== currentEntangledActionThenable &&
      (currentEntangledActionThenable.status = "fulfilled");
    var listeners = currentEntangledListeners;
    currentEntangledListeners = null;
    currentEntangledLane = 0;
    currentEntangledActionThenable = null;
    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
  }
}
function chainThenableValue(thenable, result) {
  var listeners = [],
    thenableWithOverride = {
      status: "pending",
      value: null,
      reason: null,
      then: function (resolve) {
        listeners.push(resolve);
      }
    };
  thenable.then(
    function () {
      thenableWithOverride.status = "fulfilled";
      thenableWithOverride.value = result;
      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
    },
    function (error) {
      thenableWithOverride.status = "rejected";
      thenableWithOverride.reason = error;
      for (error = 0; error < listeners.length; error++)
        (0, listeners[error])(void 0);
    }
  );
  return thenableWithOverride;
}
var hasForceUpdate = !1;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function cloneUpdateQueue(current, workInProgress) {
  current = current.updateQueue;
  workInProgress.updateQueue === current &&
    (workInProgress.updateQueue = {
      baseState: current.baseState,
      firstBaseUpdate: current.firstBaseUpdate,
      lastBaseUpdate: current.lastBaseUpdate,
      shared: current.shared,
      callbacks: null
    });
}
function createUpdate(lane) {
  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
}
function enqueueUpdate(fiber, update, lane) {
  var updateQueue = fiber.updateQueue;
  if (null === updateQueue) return null;
  updateQueue = updateQueue.shared;
  if (0 !== (executionContext & 2)) {
    var pending = updateQueue.pending;
    null === pending
      ? (update.next = update)
      : ((update.next = pending.next), (pending.next = update));
    updateQueue.pending = update;
    update = getRootForUpdatedFiber(fiber);
    markUpdateLaneFromFiberToRoot(fiber, null, lane);
    return update;
  }
  enqueueUpdate$1(fiber, updateQueue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function entangleTransitions(root, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194176))) {
    var queueLanes = fiber.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root, lane);
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  var queue = workInProgress.updateQueue,
    current = workInProgress.alternate;
  if (
    null !== current &&
    ((current = current.updateQueue), queue === current)
  ) {
    var newFirst = null,
      newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        var clone = {
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: null,
          next: null
        };
        null === newLast
          ? (newFirst = newLast = clone)
          : (newLast = newLast.next = clone);
        queue = queue.next;
      } while (null !== queue);
      null === newLast
        ? (newFirst = newLast = capturedUpdate)
        : (newLast = newLast.next = capturedUpdate);
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      callbacks: current.callbacks
    };
    workInProgress.updateQueue = queue;
    return;
  }
  workInProgress = queue.lastBaseUpdate;
  null === workInProgress
    ? (queue.firstBaseUpdate = capturedUpdate)
    : (workInProgress.next = capturedUpdate);
  queue.lastBaseUpdate = capturedUpdate;
}
var didReadFromEntangledAsyncAction = !1;
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (didReadFromEntangledAsyncAction) {
    var entangledActionThenable = currentEntangledActionThenable;
    if (null !== entangledActionThenable) throw entangledActionThenable;
  }
}
function processUpdateQueue(
  workInProgress$jscomp$0,
  props,
  instance$jscomp$0,
  renderLanes
) {
  didReadFromEntangledAsyncAction = !1;
  var queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = !1;
  var firstBaseUpdate = queue.firstBaseUpdate,
    lastBaseUpdate = queue.lastBaseUpdate,
    pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue,
      firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    null === lastBaseUpdate
      ? (firstBaseUpdate = firstPendingUpdate)
      : (lastBaseUpdate.next = firstPendingUpdate);
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current &&
      ((current = current.updateQueue),
      (pendingQueue = current.lastBaseUpdate),
      pendingQueue !== lastBaseUpdate &&
        (null === pendingQueue
          ? (current.firstBaseUpdate = firstPendingUpdate)
          : (pendingQueue.next = firstPendingUpdate),
        (current.lastBaseUpdate = lastPendingUpdate)));
  }
  if (null !== firstBaseUpdate) {
    var newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      var updateLane = pendingQueue.lane & -536870913,
        isHiddenUpdate = updateLane !== pendingQueue.lane;
      if (
        isHiddenUpdate
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        0 !== updateLane &&
          updateLane === currentEntangledLane &&
          (didReadFromEntangledAsyncAction = !0);
        null !== current &&
          (current = current.next =
            {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
        a: {
          var workInProgress = workInProgress$jscomp$0,
            update = pendingQueue;
          updateLane = props;
          var instance = instance$jscomp$0;
          switch (update.tag) {
            case 1:
              workInProgress = update.payload;
              if ("function" === typeof workInProgress) {
                newState = workInProgress.call(instance, newState, updateLane);
                break a;
              }
              newState = workInProgress;
              break a;
            case 3:
              workInProgress.flags = (workInProgress.flags & -65537) | 128;
            case 0:
              workInProgress = update.payload;
              updateLane =
                "function" === typeof workInProgress
                  ? workInProgress.call(instance, newState, updateLane)
                  : workInProgress;
              if (null === updateLane || void 0 === updateLane) break a;
              newState = assign({}, newState, updateLane);
              break a;
            case 2:
              hasForceUpdate = !0;
          }
        }
        updateLane = pendingQueue.callback;
        null !== updateLane &&
          ((workInProgress$jscomp$0.flags |= 64),
          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
          (isHiddenUpdate = queue.callbacks),
          null === isHiddenUpdate
            ? (queue.callbacks = [updateLane])
            : isHiddenUpdate.push(updateLane));
      } else
        (isHiddenUpdate = {
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }),
          null === current
            ? ((firstPendingUpdate = current = isHiddenUpdate),
              (lastPendingUpdate = newState))
            : (current = current.next = isHiddenUpdate),
          (lastBaseUpdate |= updateLane);
      pendingQueue = pendingQueue.next;
      if (null === pendingQueue)
        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
          break;
        else
          (isHiddenUpdate = pendingQueue),
            (pendingQueue = isHiddenUpdate.next),
            (isHiddenUpdate.next = null),
            (queue.lastBaseUpdate = isHiddenUpdate),
            (queue.shared.pending = null);
    } while (1);
    null === current && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    null === firstBaseUpdate && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function callCallback(callback, context) {
  if ("function" !== typeof callback)
    throw Error(
      "Invalid argument passed as callback. Expected a function. Instead received: " +
        callback
    );
  callback.call(context);
}
function commitCallbacks(updateQueue, context) {
  var callbacks = updateQueue.callbacks;
  if (null !== callbacks)
    for (
      updateQueue.callbacks = null, updateQueue = 0;
      updateQueue < callbacks.length;
      updateQueue++
    )
      callCallback(callbacks[updateQueue], context);
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return !0;
  if (
    "object" !== typeof objA ||
    null === objA ||
    "object" !== typeof objB ||
    null === objB
  )
    return !1;
  var keysA = Object.keys(objA),
    keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return !1;
  for (keysB = 0; keysB < keysA.length; keysB++) {
    var currentKey = keysA[keysB];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !objectIs(objA[currentKey], objB[currentKey])
    )
      return !1;
  }
  return !0;
}
var SuspenseException = Error(
    "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
  ),
  SuspenseyCommitException = Error(
    "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
  ),
  noopSuspenseyCommitThenable = { then: function () {} };
function isThenableResolved(thenable) {
  thenable = thenable.status;
  return "fulfilled" === thenable || "rejected" === thenable;
}
function noop() {}
function trackUsedThenable(thenableState, thenable, index) {
  index = thenableState[index];
  void 0 === index
    ? thenableState.push(thenable)
    : index !== thenable && (thenable.then(noop, noop), (thenable = index));
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw (
        ((thenableState = thenable.reason),
        checkIfUseWrappedInAsyncCatch(thenableState),
        thenableState)
      );
    default:
      if ("string" === typeof thenable.status) thenable.then(noop, noop);
      else {
        thenableState = workInProgressRoot;
        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
          throw Error(
            "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
          );
        thenableState = thenable;
        thenableState.status = "pending";
        thenableState.then(
          function (fulfilledValue) {
            if ("pending" === thenable.status) {
              var fulfilledThenable = thenable;
              fulfilledThenable.status = "fulfilled";
              fulfilledThenable.value = fulfilledValue;
            }
          },
          function (error) {
            if ("pending" === thenable.status) {
              var rejectedThenable = thenable;
              rejectedThenable.status = "rejected";
              rejectedThenable.reason = error;
            }
          }
        );
      }
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw (
            ((thenableState = thenable.reason),
            checkIfUseWrappedInAsyncCatch(thenableState),
            thenableState)
          );
      }
      suspendedThenable = thenable;
      throw SuspenseException;
  }
}
var suspendedThenable = null;
function getSuspendedThenable() {
  if (null === suspendedThenable)
    throw Error(
      "Expected a suspended thenable. This is a bug in React. Please file an issue."
    );
  var thenable = suspendedThenable;
  suspendedThenable = null;
  return thenable;
}
function checkIfUseWrappedInAsyncCatch(rejectedReason) {
  if (rejectedReason === SuspenseException)
    throw Error(
      "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
    );
}
var thenableState$1 = null,
  thenableIndexCounter$1 = 0;
function unwrapThenable(thenable) {
  var index = thenableIndexCounter$1;
  thenableIndexCounter$1 += 1;
  null === thenableState$1 && (thenableState$1 = []);
  return trackUsedThenable(thenableState$1, thenable, index);
}
function coerceRef(returnFiber, current, workInProgress, element) {
  returnFiber = element.props.ref;
  workInProgress.ref = void 0 !== returnFiber ? returnFiber : null;
}
function throwOnInvalidObjectType(returnFiber, newChild) {
  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
    throw Error(
      'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.'
    );
  returnFiber = Object.prototype.toString.call(newChild);
  throw Error(
    "Objects are not valid as a React child (found: " +
      ("[object Object]" === returnFiber
        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
        : returnFiber) +
      "). If you meant to render a collection of children, use an array instead."
  );
}
function resolveLazy(lazyType) {
  var init = lazyType._init;
  return init(lazyType._payload);
}
function createChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      var deletions = returnFiber.deletions;
      null === deletions
        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
        : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return null;
  }
  function mapRemainingChildren(currentFirstChild) {
    for (var existingChildren = new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key
        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
        : existingChildren.set(currentFirstChild.index, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return existingChildren;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects)
      return (newFiber.flags |= 1048576), lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return (
        (newIndex = newIndex.index),
        newIndex < lastPlacedIndex
          ? ((newFiber.flags |= 33554434), lastPlacedIndex)
          : newIndex
      );
    newFiber.flags |= 33554434;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects &&
      null === newFiber.alternate &&
      (newFiber.flags |= 33554434);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (null === current || 6 !== current.tag)
      return (
        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return updateFragment(
        returnFiber,
        current,
        element.props.children,
        lanes,
        element.key
      );
    if (
      null !== current &&
      (current.elementType === elementType ||
        ("object" === typeof elementType &&
          null !== elementType &&
          elementType.$$typeof === REACT_LAZY_TYPE &&
          resolveLazy(elementType) === current.type))
    )
      return (
        (lanes = useFiber(current, element.props)),
        coerceRef(returnFiber, current, lanes, element),
        (lanes.return = returnFiber),
        lanes
      );
    lanes = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    coerceRef(returnFiber, current, lanes, element);
    lanes.return = returnFiber;
    return lanes;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (
      null === current ||
      4 !== current.tag ||
      current.stateNode.containerInfo !== portal.containerInfo ||
      current.stateNode.implementation !== portal.implementation
    )
      return (
        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (null === current || 7 !== current.tag)
      return (
        (current = createFiberFromFragment(
          fragment,
          returnFiber.mode,
          lanes,
          key
        )),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return (
        (newChild = createFiberFromText(
          "" + newChild,
          returnFiber.mode,
          lanes
        )),
        (newChild.return = returnFiber),
        newChild
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_LEGACY_ELEMENT_TYPE:
          return (
            (lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            )),
            coerceRef(returnFiber, null, lanes, newChild),
            (lanes.return = returnFiber),
            lanes
          );
        case REACT_PORTAL_TYPE:
          return (
            (newChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (newChild.return = returnFiber),
            newChild
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          newChild = init(newChild._payload);
          return createChild(returnFiber, newChild, lanes);
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (newChild = createFiberFromFragment(
            newChild,
            returnFiber.mode,
            lanes,
            null
          )),
          (newChild.return = returnFiber),
          newChild
        );
      if ("function" === typeof newChild.then)
        return createChild(returnFiber, unwrapThenable(newChild), lanes);
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return createChild(
          returnFiber,
          readContextDuringReconciliation(returnFiber, newChild, lanes),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    var key = null !== oldFiber ? oldFiber.key : null;
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return null !== key
        ? null
        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_LEGACY_ELEMENT_TYPE:
          return newChild.key === key
            ? updateElement(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_PORTAL_TYPE:
          return newChild.key === key
            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_LAZY_TYPE:
          return (
            (key = newChild._init),
            (newChild = key(newChild._payload)),
            updateSlot(returnFiber, oldFiber, newChild, lanes)
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return null !== key
          ? null
          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      if ("function" === typeof newChild.then)
        return updateSlot(
          returnFiber,
          oldFiber,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateSlot(
          returnFiber,
          oldFiber,
          readContextDuringReconciliation(returnFiber, newChild, lanes),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChild,
    lanes
  ) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
    )
      return (
        (existingChildren = existingChildren.get(newIdx) || null),
        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_LEGACY_ELEMENT_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updateElement(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_PORTAL_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updatePortal(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          newChild = init(newChild._payload);
          return updateFromMap(
            existingChildren,
            returnFiber,
            newIdx,
            newChild,
            lanes
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (existingChildren = existingChildren.get(newIdx) || null),
          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
        );
      if ("function" === typeof newChild.then)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          readContextDuringReconciliation(returnFiber, newChild, lanes),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null;
      null !== oldFiber && newIdx < newChildren.length;
      newIdx++
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return (
        deleteRemainingChildren(returnFiber, oldFiber), resultingFirstChild
      );
    if (null === oldFiber) {
      for (; newIdx < newChildren.length; newIdx++)
        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
          null !== oldFiber &&
            ((currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            )),
            null === previousNewFiber
              ? (resultingFirstChild = oldFiber)
              : (previousNewFiber.sibling = oldFiber),
            (previousNewFiber = oldFiber));
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      newIdx < newChildren.length;
      newIdx++
    )
      (nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      )),
        null !== nextOldFiber &&
          (shouldTrackSideEffects &&
            null !== nextOldFiber.alternate &&
            oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ),
          (currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          )),
          null === previousNewFiber
            ? (resultingFirstChild = nextOldFiber)
            : (previousNewFiber.sibling = nextOldFiber),
          (previousNewFiber = nextOldFiber));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    if (null == newChildren)
      throw Error("An iterable object provided no iterator.");
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null,
        step = newChildren.next();
      null !== oldFiber && !step.done;
      newIdx++, step = newChildren.next(), null
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return (
        deleteRemainingChildren(returnFiber, oldFiber), resultingFirstChild
      );
    if (null === oldFiber) {
      for (; !step.done; newIdx++, step = newChildren.next(), null)
        (step = createChild(returnFiber, step.value, lanes)),
          null !== step &&
            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
            null === previousNewFiber
              ? (resultingFirstChild = step)
              : (previousNewFiber.sibling = step),
            (previousNewFiber = step));
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(oldFiber);
      !step.done;
      newIdx++, step = newChildren.next(), null
    )
      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
        null !== step &&
          (shouldTrackSideEffects &&
            null !== step.alternate &&
            oldFiber.delete(null === step.key ? newIdx : step.key),
          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
          null === previousNewFiber
            ? (resultingFirstChild = step)
            : (previousNewFiber.sibling = step),
          (previousNewFiber = step));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    return resultingFirstChild;
  }
  function reconcileChildFibersImpl(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes
  ) {
    "object" === typeof newChild &&
      null !== newChild &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      null === newChild.key &&
      (newChild = newChild.props.children);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_LEGACY_ELEMENT_TYPE:
          a: {
            for (
              var key = newChild.key, child = currentFirstChild;
              null !== child;

            ) {
              if (child.key === key) {
                key = newChild.type;
                if (key === REACT_FRAGMENT_TYPE) {
                  if (7 === child.tag) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    currentFirstChild = useFiber(
                      child,
                      newChild.props.children
                    );
                    currentFirstChild.return = returnFiber;
                    returnFiber = currentFirstChild;
                    break a;
                  }
                } else if (
                  child.elementType === key ||
                  ("object" === typeof key &&
                    null !== key &&
                    key.$$typeof === REACT_LAZY_TYPE &&
                    resolveLazy(key) === child.type)
                ) {
                  deleteRemainingChildren(returnFiber, child.sibling);
                  currentFirstChild = useFiber(child, newChild.props);
                  coerceRef(returnFiber, child, currentFirstChild, newChild);
                  currentFirstChild.return = returnFiber;
                  returnFiber = currentFirstChild;
                  break a;
                }
                deleteRemainingChildren(returnFiber, child);
                break;
              } else deleteChild(returnFiber, child);
              child = child.sibling;
            }
            newChild.type === REACT_FRAGMENT_TYPE
              ? ((currentFirstChild = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                )),
                (currentFirstChild.return = returnFiber),
                (returnFiber = currentFirstChild))
              : ((lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                )),
                coerceRef(returnFiber, currentFirstChild, lanes, newChild),
                (lanes.return = returnFiber),
                (returnFiber = lanes));
          }
          return placeSingleChild(returnFiber);
        case REACT_PORTAL_TYPE:
          a: {
            for (child = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === child)
                if (
                  4 === currentFirstChild.tag &&
                  currentFirstChild.stateNode.containerInfo ===
                    newChild.containerInfo &&
                  currentFirstChild.stateNode.implementation ===
                    newChild.implementation
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  currentFirstChild = useFiber(
                    currentFirstChild,
                    newChild.children || []
                  );
                  currentFirstChild.return = returnFiber;
                  returnFiber = currentFirstChild;
                  break a;
                } else {
                  deleteRemainingChildren(returnFiber, currentFirstChild);
                  break;
                }
              else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            currentFirstChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            );
            currentFirstChild.return = returnFiber;
            returnFiber = currentFirstChild;
          }
          return placeSingleChild(returnFiber);
        case REACT_LAZY_TYPE:
          return (
            (child = newChild._init),
            reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              child(newChild._payload),
              lanes
            )
          );
      }
      if (isArrayImpl(newChild))
        return reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if (getIteratorFn(newChild)) {
        child = getIteratorFn(newChild);
        if ("function" !== typeof child)
          throw Error(
            "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
          );
        newChild = child.call(newChild);
        return reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      }
      if ("function" === typeof newChild.then)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          readContextDuringReconciliation(returnFiber, newChild, lanes),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild ||
      "bigint" === typeof newChild
      ? ((newChild = "" + newChild),
        null !== currentFirstChild && 6 === currentFirstChild.tag
          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
            (currentFirstChild = useFiber(currentFirstChild, newChild)),
            (currentFirstChild.return = returnFiber),
            (returnFiber = currentFirstChild))
          : (deleteRemainingChildren(returnFiber, currentFirstChild),
            (currentFirstChild = createFiberFromText(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (currentFirstChild.return = returnFiber),
            (returnFiber = currentFirstChild)),
        placeSingleChild(returnFiber))
      : deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return function (returnFiber, currentFirstChild, newChild, lanes) {
    thenableIndexCounter$1 = 0;
    returnFiber = reconcileChildFibersImpl(
      returnFiber,
      currentFirstChild,
      newChild,
      lanes
    );
    thenableState$1 = null;
    return returnFiber;
  };
}
var reconcileChildFibers = createChildReconciler(!0),
  mountChildFibers = createChildReconciler(!1),
  currentTreeHiddenStackCursor = createCursor(null),
  prevEntangledRenderLanesCursor = createCursor(0);
function pushHiddenContext(fiber, context) {
  fiber = entangledRenderLanes;
  push(prevEntangledRenderLanesCursor, fiber);
  push(currentTreeHiddenStackCursor, context);
  entangledRenderLanes = fiber | context.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
}
function popHiddenContext() {
  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
  pop(currentTreeHiddenStackCursor);
  pop(prevEntangledRenderLanesCursor);
}
var suspenseHandlerStackCursor = createCursor(null),
  shellBoundary = null;
function pushPrimaryTreeSuspenseHandler(handler) {
  var current = handler.alternate;
  push(suspenseStackCursor, suspenseStackCursor.current & 1);
  push(suspenseHandlerStackCursor, handler);
  null === shellBoundary &&
    (null === current || null !== currentTreeHiddenStackCursor.current
      ? (shellBoundary = handler)
      : null !== current.memoizedState && (shellBoundary = handler));
}
function pushOffscreenSuspenseHandler(fiber) {
  if (22 === fiber.tag) {
    if (
      (push(suspenseStackCursor, suspenseStackCursor.current),
      push(suspenseHandlerStackCursor, fiber),
      null === shellBoundary)
    ) {
      var current = fiber.alternate;
      null !== current &&
        null !== current.memoizedState &&
        (shellBoundary = fiber);
    }
  } else reuseSuspenseHandlerOnStack(fiber);
}
function reuseSuspenseHandlerOnStack() {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function popSuspenseHandler(fiber) {
  pop(suspenseHandlerStackCursor);
  shellBoundary === fiber && (shellBoundary = null);
  pop(suspenseStackCursor);
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (null !== state && (null === state.dehydrated || shim$1() || shim$1()))
        return node;
    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
var renderLanes = 0,
  currentlyRenderingFiber$1 = null,
  currentHook = null,
  workInProgressHook = null,
  didScheduleRenderPhaseUpdate = !1,
  didScheduleRenderPhaseUpdateDuringThisPass = !1,
  shouldDoubleInvokeUserFnsInHooksDEV = !1,
  thenableIndexCounter = 0,
  thenableState = null,
  globalClientIdCounter = 0;
function throwInvalidHookError() {
  throw Error(
    "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
  );
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (null === prevDeps) return !1;
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
  return !0;
}
function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderLanes
) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber$1 = workInProgress;
  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = 0;
  ReactSharedInternals.H =
    null === current || null === current.memoizedState
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  current = Component(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  didScheduleRenderPhaseUpdateDuringThisPass &&
    (current = renderWithHooksAgain(
      workInProgress,
      Component,
      props,
      secondArg
    ));
  finishRenderingHooks();
  return current;
}
function finishRenderingHooks() {
  ReactSharedInternals.H = ContextOnlyDispatcher;
  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
  didScheduleRenderPhaseUpdate = !1;
  thenableIndexCounter = 0;
  thenableState = null;
  if (didRenderTooFewHooks)
    throw Error(
      "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
    );
}
function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
  currentlyRenderingFiber$1 = workInProgress;
  var numberOfReRenders = 0;
  do {
    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
    thenableIndexCounter = 0;
    didScheduleRenderPhaseUpdateDuringThisPass = !1;
    if (25 <= numberOfReRenders)
      throw Error(
        "Too many re-renders. React limits the number of renders to prevent an infinite loop."
      );
    numberOfReRenders += 1;
    workInProgressHook = currentHook = null;
    workInProgress.updateQueue = null;
    ReactSharedInternals.H = HooksDispatcherOnRerender;
    var children = Component(props, secondArg);
  } while (didScheduleRenderPhaseUpdateDuringThisPass);
  return children;
}
function TransitionAwareHostComponent() {
  var dispatcher = ReactSharedInternals.H,
    maybeThenable = dispatcher.useState()[0];
  maybeThenable =
    "function" === typeof maybeThenable.then
      ? useThenable(maybeThenable)
      : maybeThenable;
  dispatcher = dispatcher.useState()[0];
  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
    (currentlyRenderingFiber$1.flags |= 1024);
  return maybeThenable;
}
function bailoutHooks(current, workInProgress, lanes) {
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.flags &= -2053;
  current.lanes &= ~lanes;
}
function resetHooksOnUnwind(workInProgress) {
  if (didScheduleRenderPhaseUpdate) {
    for (
      workInProgress = workInProgress.memoizedState;
      null !== workInProgress;

    ) {
      var queue = workInProgress.queue;
      null !== queue && (queue.pending = null);
      workInProgress = workInProgress.next;
    }
    didScheduleRenderPhaseUpdate = !1;
  }
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
  didScheduleRenderPhaseUpdateDuringThisPass = !1;
  thenableIndexCounter = 0;
  thenableState = null;
}
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === workInProgressHook
    ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook)
    : (workInProgressHook = workInProgressHook.next = hook);
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (null === currentHook) {
    var nextCurrentHook = currentlyRenderingFiber$1.alternate;
    nextCurrentHook =
      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  var nextWorkInProgressHook =
    null === workInProgressHook
      ? currentlyRenderingFiber$1.memoizedState
      : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    (workInProgressHook = nextWorkInProgressHook),
      (currentHook = nextCurrentHook);
  else {
    if (null === nextCurrentHook) {
      if (null === currentlyRenderingFiber$1.alternate)
        throw Error(
          "Update hook called on initial render. This is likely a bug in React. Please file an issue."
        );
      throw Error("Rendered more hooks than during the previous render.");
    }
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    null === workInProgressHook
      ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook =
          nextCurrentHook)
      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
  }
  return workInProgressHook;
}
var createFunctionComponentUpdateQueue;
createFunctionComponentUpdateQueue = function () {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
};
function useThenable(thenable) {
  var index = thenableIndexCounter;
  thenableIndexCounter += 1;
  null === thenableState && (thenableState = []);
  thenable = trackUsedThenable(thenableState, thenable, index);
  index = currentlyRenderingFiber$1;
  null ===
    (null === workInProgressHook
      ? index.memoizedState
      : workInProgressHook.next) &&
    ((index = index.alternate),
    (ReactSharedInternals.H =
      null === index || null === index.memoizedState
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate));
  return thenable;
}
function use(usable) {
  if (null !== usable && "object" === typeof usable) {
    if ("function" === typeof usable.then) return useThenable(usable);
    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
  }
  throw Error("An unsupported type was passed to use(): " + String(usable));
}
function useMemoCache(size) {
  var memoCache = null,
    updateQueue = currentlyRenderingFiber$1.updateQueue;
  null !== updateQueue && (memoCache = updateQueue.memoCache);
  if (null == memoCache) {
    var current = currentlyRenderingFiber$1.alternate;
    null !== current &&
      ((current = current.updateQueue),
      null !== current &&
        ((current = current.memoCache),
        null != current &&
          (memoCache = {
            data: current.data.map(function (array) {
              return array.slice();
            }),
            index: 0
          })));
  }
  null == memoCache && (memoCache = { data: [], index: 0 });
  null === updateQueue &&
    ((updateQueue = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber$1.updateQueue = updateQueue));
  updateQueue.memoCache = memoCache;
  updateQueue = memoCache.data[memoCache.index];
  if (void 0 === updateQueue)
    for (
      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
      current < size;
      current++
    )
      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
  memoCache.index++;
  return updateQueue;
}
function basicStateReducer(state, action) {
  return "function" === typeof action ? action(state) : action;
}
function updateReducer(reducer) {
  var hook = updateWorkInProgressHook();
  return updateReducerImpl(hook, currentHook, reducer);
}
function updateReducerImpl(hook, current, reducer) {
  var queue = hook.queue;
  if (null === queue)
    throw Error(
      "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
    );
  queue.lastRenderedReducer = reducer;
  var baseQueue = hook.baseQueue,
    pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  pendingQueue = hook.baseState;
  if (null === baseQueue) hook.memoizedState = pendingQueue;
  else {
    current = baseQueue.next;
    var newBaseQueueFirst = (baseFirst = null),
      newBaseQueueLast = null,
      update = current,
      didReadFromEntangledAsyncAction$27 = !1;
    do {
      var updateLane = update.lane & -536870913;
      if (
        updateLane !== update.lane
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        var revertLane = update.revertLane;
        if (0 === revertLane)
          null !== newBaseQueueLast &&
            (newBaseQueueLast = newBaseQueueLast.next =
              {
                lane: 0,
                revertLane: 0,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }),
            updateLane === currentEntangledLane &&
              (didReadFromEntangledAsyncAction$27 = !0);
        else if ((renderLanes & revertLane) === revertLane) {
          update = update.next;
          revertLane === currentEntangledLane &&
            (didReadFromEntangledAsyncAction$27 = !0);
          continue;
        } else
          (updateLane = {
            lane: 0,
            revertLane: update.revertLane,
            action: update.action,
            hasEagerState: update.hasEagerState,
            eagerState: update.eagerState,
            next: null
          }),
            null === newBaseQueueLast
              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
                (baseFirst = pendingQueue))
              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
            (currentlyRenderingFiber$1.lanes |= revertLane),
            (workInProgressRootSkippedLanes |= revertLane);
        updateLane = update.action;
        shouldDoubleInvokeUserFnsInHooksDEV &&
          reducer(pendingQueue, updateLane);
        pendingQueue = update.hasEagerState
          ? update.eagerState
          : reducer(pendingQueue, updateLane);
      } else
        (revertLane = {
          lane: updateLane,
          revertLane: update.revertLane,
          action: update.action,
          hasEagerState: update.hasEagerState,
          eagerState: update.eagerState,
          next: null
        }),
          null === newBaseQueueLast
            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
              (baseFirst = pendingQueue))
            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
          (currentlyRenderingFiber$1.lanes |= updateLane),
          (workInProgressRootSkippedLanes |= updateLane);
      update = update.next;
    } while (null !== update && update !== current);
    null === newBaseQueueLast
      ? (baseFirst = pendingQueue)
      : (newBaseQueueLast.next = newBaseQueueFirst);
    if (
      !objectIs(pendingQueue, hook.memoizedState) &&
      ((didReceiveUpdate = !0),
      didReadFromEntangledAsyncAction$27 &&
        ((reducer = currentEntangledActionThenable), null !== reducer))
    )
      throw reducer;
    hook.memoizedState = pendingQueue;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = pendingQueue;
  }
  null === baseQueue && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue)
    throw Error(
      "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
    );
  queue.lastRenderedReducer = reducer;
  var dispatch = queue.dispatch,
    lastRenderPhaseUpdate = queue.pending,
    newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
    do (newState = reducer(newState, update.action)), (update = update.next);
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = newState;
    null === hook.baseQueue && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function updateSyncExternalStore(subscribe, getSnapshot) {
  var fiber = currentlyRenderingFiber$1,
    hook = updateWorkInProgressHook();
  var nextSnapshot = getSnapshot();
  var snapshotChanged = !objectIs(
    (currentHook || hook).memoizedState,
    nextSnapshot
  );
  snapshotChanged &&
    ((hook.memoizedState = nextSnapshot), (didReceiveUpdate = !0));
  hook = hook.queue;
  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
    subscribe
  ]);
  if (
    hook.getSnapshot !== getSnapshot ||
    snapshotChanged ||
    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
  ) {
    fiber.flags |= 2048;
    pushEffect(
      9,
      updateStoreInstance.bind(null, fiber, hook, nextSnapshot, getSnapshot),
      { destroy: void 0 },
      null
    );
    subscribe = workInProgressRoot;
    if (null === subscribe)
      throw Error(
        "Expected a work-in-progress root. This is a bug in React. Please file an issue."
      );
    includesBlockingLane(subscribe, renderLanes) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
  }
  return nextSnapshot;
}
function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
  fiber.flags |= 16384;
  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
  getSnapshot = currentlyRenderingFiber$1.updateQueue;
  null === getSnapshot
    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber$1.updateQueue = getSnapshot),
      (getSnapshot.stores = [fiber]))
    : ((renderedSnapshot = getSnapshot.stores),
      null === renderedSnapshot
        ? (getSnapshot.stores = [fiber])
        : renderedSnapshot.push(fiber));
}
function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
  inst.value = nextSnapshot;
  inst.getSnapshot = getSnapshot;
  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
}
function subscribeToStore(fiber, inst, subscribe) {
  return subscribe(function () {
    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
  });
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function forceStoreRerender(fiber) {
  var root = enqueueConcurrentRenderForLane(fiber, 2);
  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
}
function mountStateImpl(initialState) {
  var hook = mountWorkInProgressHook();
  if ("function" === typeof initialState) {
    var initialStateInitializer = initialState;
    initialState = initialStateInitializer();
    shouldDoubleInvokeUserFnsInHooksDEV && initialStateInitializer();
  }
  hook.memoizedState = hook.baseState = initialState;
  hook.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  return hook;
}
function updateOptimisticImpl(hook, current, passthrough, reducer) {
  hook.baseState = passthrough;
  return updateReducerImpl(
    hook,
    currentHook,
    "function" === typeof reducer ? reducer : basicStateReducer
  );
}
function dispatchActionState(
  fiber,
  actionQueue,
  setPendingState,
  setState,
  payload
) {
  if (isRenderPhaseUpdate(fiber))
    throw Error("Cannot update form state while rendering.");
  fiber = actionQueue.pending;
  null === fiber
    ? ((payload = { payload: payload, action: actionQueue.action, next: null }),
      (payload.next = actionQueue.pending = payload),
      runActionStateAction(actionQueue, setPendingState, setState, payload))
    : (actionQueue.pending = fiber.next =
        { payload: payload, action: actionQueue.action, next: fiber.next });
}
function runActionStateAction(actionQueue, setPendingState, setState, node) {
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  setPendingState(!0);
  var action = node.action;
  node = node.payload;
  var prevState = actionQueue.state;
  try {
    var returnValue = action(prevState, node),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    null !== returnValue &&
    "object" === typeof returnValue &&
    "function" === typeof returnValue.then
      ? (returnValue.then(
          function (nextState) {
            actionQueue.state = nextState;
            finishRunningActionStateAction(
              actionQueue,
              setPendingState,
              setState
            );
          },
          function () {
            return finishRunningActionStateAction(
              actionQueue,
              setPendingState,
              setState
            );
          }
        ),
        setState(returnValue))
      : (setState(returnValue),
        (actionQueue.state = returnValue),
        finishRunningActionStateAction(actionQueue, setPendingState, setState));
  } catch (error) {
    setState({ then: function () {}, status: "rejected", reason: error }),
      finishRunningActionStateAction(actionQueue, setPendingState, setState);
  } finally {
    ReactSharedInternals.T = prevTransition;
  }
}
function finishRunningActionStateAction(
  actionQueue,
  setPendingState,
  setState
) {
  var last = actionQueue.pending;
  if (null !== last) {
    var first = last.next;
    first === last
      ? (actionQueue.pending = null)
      : ((first = first.next),
        (last.next = first),
        runActionStateAction(actionQueue, setPendingState, setState, first));
  }
}
function actionStateReducer(oldState, newState) {
  return newState;
}
function mountActionState(action, initialStateProp) {
  var stateHook = mountWorkInProgressHook();
  stateHook.memoizedState = stateHook.baseState = initialStateProp;
  var stateQueue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: actionStateReducer,
    lastRenderedState: initialStateProp
  };
  stateHook.queue = stateQueue;
  stateHook = dispatchSetState.bind(
    null,
    currentlyRenderingFiber$1,
    stateQueue
  );
  stateQueue.dispatch = stateHook;
  stateQueue = mountStateImpl(!1);
  var setPendingState = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber$1,
    !1,
    stateQueue.queue
  );
  stateQueue = mountWorkInProgressHook();
  var actionQueue = {
    state: initialStateProp,
    dispatch: null,
    action: action,
    pending: null
  };
  stateQueue.queue = actionQueue;
  stateHook = dispatchActionState.bind(
    null,
    currentlyRenderingFiber$1,
    actionQueue,
    setPendingState,
    stateHook
  );
  actionQueue.dispatch = stateHook;
  stateQueue.memoizedState = action;
  return [initialStateProp, stateHook, !1];
}
function updateActionState(action) {
  var stateHook = updateWorkInProgressHook();
  return updateActionStateImpl(stateHook, currentHook, action);
}
function updateActionStateImpl(stateHook, currentStateHook, action) {
  currentStateHook = updateReducerImpl(
    stateHook,
    currentStateHook,
    actionStateReducer
  )[0];
  stateHook = updateReducer(basicStateReducer)[0];
  currentStateHook =
    "object" === typeof currentStateHook &&
    null !== currentStateHook &&
    "function" === typeof currentStateHook.then
      ? useThenable(currentStateHook)
      : currentStateHook;
  var actionQueueHook = updateWorkInProgressHook(),
    actionQueue = actionQueueHook.queue,
    dispatch = actionQueue.dispatch;
  action !== actionQueueHook.memoizedState &&
    ((currentlyRenderingFiber$1.flags |= 2048),
    pushEffect(
      9,
      actionStateActionEffect.bind(null, actionQueue, action),
      { destroy: void 0 },
      null
    ));
  return [currentStateHook, dispatch, stateHook];
}
function actionStateActionEffect(actionQueue, action) {
  actionQueue.action = action;
}
function rerenderActionState(action) {
  var stateHook = updateWorkInProgressHook(),
    currentStateHook = currentHook;
  if (null !== currentStateHook)
    return updateActionStateImpl(stateHook, currentStateHook, action);
  updateWorkInProgressHook();
  stateHook = stateHook.memoizedState;
  currentStateHook = updateWorkInProgressHook();
  var dispatch = currentStateHook.queue.dispatch;
  currentStateHook.memoizedState = action;
  return [stateHook, dispatch, !1];
}
function pushEffect(tag, create, inst, deps) {
  tag = { tag: tag, create: create, inst: inst, deps: deps, next: null };
  create = currentlyRenderingFiber$1.updateQueue;
  null === create
    ? ((create = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber$1.updateQueue = create),
      (create.lastEffect = tag.next = tag))
    : ((inst = create.lastEffect),
      null === inst
        ? (create.lastEffect = tag.next = tag)
        : ((deps = inst.next),
          (inst.next = tag),
          (tag.next = deps),
          (create.lastEffect = tag)));
  return tag;
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = mountWorkInProgressHook();
  currentlyRenderingFiber$1.flags |= fiberFlags;
  hook.memoizedState = pushEffect(
    1 | hookFlags,
    create,
    { destroy: void 0 },
    void 0 === deps ? null : deps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var inst = hook.memoizedState.inst;
  null !== currentHook &&
  null !== deps &&
  areHookInputsEqual(deps, currentHook.memoizedState.deps)
    ? (hook.memoizedState = pushEffect(hookFlags, create, inst, deps))
    : ((currentlyRenderingFiber$1.flags |= fiberFlags),
      (hook.memoizedState = pushEffect(1 | hookFlags, create, inst, deps)));
}
function mountEffect(create, deps) {
  mountEffectImpl(8390656, 8, create, deps);
}
function updateEffect(create, deps) {
  updateEffectImpl(2048, 8, create, deps);
}
function updateInsertionEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 4, create, deps);
}
function imperativeHandleEffect(create, ref) {
  if ("function" === typeof ref) {
    create = create();
    var refCleanup = ref(create);
    return function () {
      "function" === typeof refCleanup ? refCleanup() : ref(null);
    };
  }
  if (null !== ref && void 0 !== ref)
    return (
      (create = create()),
      (ref.current = create),
      function () {
        ref.current = null;
      }
    );
}
function updateImperativeHandle(ref, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
}
function mountDebugValue() {}
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  prevState = nextCreate();
  shouldDoubleInvokeUserFnsInHooksDEV && nextCreate();
  hook.memoizedState = [prevState, deps];
  return prevState;
}
function updateDeferredValueImpl(hook, prevValue, value) {
  if (objectIs(value, prevValue)) return value;
  if (null !== currentTreeHiddenStackCursor.current)
    return (
      (hook.memoizedState = value),
      objectIs(value, prevValue) || (didReceiveUpdate = !0),
      value
    );
  if (0 === (renderLanes & 42))
    return (didReceiveUpdate = !0), (hook.memoizedState = value);
  0 === workInProgressDeferredLane &&
    (workInProgressDeferredLane =
      0 !== (workInProgressRootRenderLanes & 536870912)
        ? 536870912
        : claimNextTransitionLane());
  hook = suspenseHandlerStackCursor.current;
  null !== hook && (hook.flags |= 32);
  hook = workInProgressDeferredLane;
  currentlyRenderingFiber$1.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return prevValue;
}
function startTransition(fiber, queue, pendingState, finishedState, callback) {
  var previousPriority = currentUpdatePriority;
  currentUpdatePriority =
    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
  var prevTransition = ReactSharedInternals.T,
    currentTransition = {};
  ReactSharedInternals.T = currentTransition;
  dispatchOptimisticSetState(fiber, !1, queue, pendingState);
  try {
    var returnValue = callback(),
      onStartTransitionFinish = ReactSharedInternals.S;
    null !== onStartTransitionFinish &&
      onStartTransitionFinish(currentTransition, returnValue);
    if (
      null !== returnValue &&
      "object" === typeof returnValue &&
      "function" === typeof returnValue.then
    ) {
      var thenableForFinishedState = chainThenableValue(
        returnValue,
        finishedState
      );
      dispatchSetState(fiber, queue, thenableForFinishedState);
    } else dispatchSetState(fiber, queue, finishedState);
  } catch (error) {
    dispatchSetState(fiber, queue, {
      then: function () {},
      status: "rejected",
      reason: error
    });
  } finally {
    (currentUpdatePriority = previousPriority),
      (ReactSharedInternals.T = prevTransition);
  }
}
function useHostTransitionStatus() {
  var status = readContext(HostTransitionContext);
  return null !== status ? status : null;
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber) {
  for (var provider = fiber.return; null !== provider; ) {
    switch (provider.tag) {
      case 24:
      case 3:
        var lane = requestUpdateLane(provider);
        fiber = createUpdate(lane);
        var root = enqueueUpdate(provider, fiber, lane);
        null !== root &&
          (scheduleUpdateOnFiber(root, provider, lane),
          entangleTransitions(root, provider, lane));
        provider = { cache: createCache() };
        fiber.payload = provider;
        return;
    }
    provider = provider.return;
  }
}
function dispatchReducerAction(fiber, queue, action) {
  var lane = requestUpdateLane(fiber);
  action = {
    lane: lane,
    revertLane: 0,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  isRenderPhaseUpdate(fiber)
    ? enqueueRenderPhaseUpdate(queue, action)
    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
      null !== action &&
        (scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane)));
}
function dispatchSetState(fiber, queue, action) {
  var lane = requestUpdateLane(fiber),
    update = {
      lane: lane,
      revertLane: 0,
      action: action,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
  else {
    var alternate = fiber.alternate;
    if (
      0 === fiber.lanes &&
      (null === alternate || 0 === alternate.lanes) &&
      ((alternate = queue.lastRenderedReducer), null !== alternate)
    )
      try {
        var currentState = queue.lastRenderedState,
          eagerState = alternate(currentState, action);
        update.hasEagerState = !0;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState)) {
          enqueueUpdate$1(fiber, queue, update, 0);
          null === workInProgressRoot && finishQueueingConcurrentUpdates();
          return;
        }
      } catch (error) {
      } finally {
      }
    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
    null !== action &&
      (scheduleUpdateOnFiber(action, fiber, lane),
      entangleTransitionUpdate(action, queue, lane));
  }
}
function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
  action = {
    lane: 2,
    revertLane: requestTransitionLane(),
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) {
    if (throwIfDuringRender)
      throw Error("Cannot update optimistic state while rendering.");
  } else
    (throwIfDuringRender = enqueueConcurrentHookUpdate(
      fiber,
      queue,
      action,
      2
    )),
      null !== throwIfDuringRender &&
        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
}
function isRenderPhaseUpdate(fiber) {
  var alternate = fiber.alternate;
  return (
    fiber === currentlyRenderingFiber$1 ||
    (null !== alternate && alternate === currentlyRenderingFiber$1)
  );
}
function enqueueRenderPhaseUpdate(queue, update) {
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
    !0;
  var pending = queue.pending;
  null === pending
    ? (update.next = update)
    : ((update.next = pending.next), (pending.next = update));
  queue.pending = update;
}
function entangleTransitionUpdate(root, queue, lane) {
  if (0 !== (lane & 4194176)) {
    var queueLanes = queue.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    queue.lanes = lane;
    markRootEntangled(root, lane);
  }
}
var ContextOnlyDispatcher = {
  readContext: readContext,
  use: use,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useInsertionEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useSyncExternalStore: throwInvalidHookError,
  useId: throwInvalidHookError
};
ContextOnlyDispatcher.useCacheRefresh = throwInvalidHookError;
ContextOnlyDispatcher.useMemoCache = throwInvalidHookError;
ContextOnlyDispatcher.useHostTransitionStatus = throwInvalidHookError;
ContextOnlyDispatcher.useFormState = throwInvalidHookError;
ContextOnlyDispatcher.useActionState = throwInvalidHookError;
ContextOnlyDispatcher.useOptimistic = throwInvalidHookError;
var HooksDispatcherOnMount = {
  readContext: readContext,
  use: use,
  useCallback: function (callback, deps) {
    mountWorkInProgressHook().memoizedState = [
      callback,
      void 0 === deps ? null : deps
    ];
    return callback;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle: function (ref, create, deps) {
    deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
    mountEffectImpl(
      4194308,
      4,
      imperativeHandleEffect.bind(null, create, ref),
      deps
    );
  },
  useLayoutEffect: function (create, deps) {
    return mountEffectImpl(4194308, 4, create, deps);
  },
  useInsertionEffect: function (create, deps) {
    mountEffectImpl(4, 2, create, deps);
  },
  useMemo: function (nextCreate, deps) {
    var hook = mountWorkInProgressHook();
    deps = void 0 === deps ? null : deps;
    var nextValue = nextCreate();
    shouldDoubleInvokeUserFnsInHooksDEV && nextCreate();
    hook.memoizedState = [nextValue, deps];
    return nextValue;
  },
  useReducer: function (reducer, initialArg, init) {
    var hook = mountWorkInProgressHook();
    if (void 0 !== init) {
      var initialState = init(initialArg);
      shouldDoubleInvokeUserFnsInHooksDEV && init(initialArg);
    } else initialState = initialArg;
    hook.memoizedState = hook.baseState = initialState;
    reducer = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: reducer,
      lastRenderedState: initialState
    };
    hook.queue = reducer;
    reducer = reducer.dispatch = dispatchReducerAction.bind(
      null,
      currentlyRenderingFiber$1,
      reducer
    );
    return [hook.memoizedState, reducer];
  },
  useRef: function (initialValue) {
    var hook = mountWorkInProgressHook();
    initialValue = { current: initialValue };
    return (hook.memoizedState = initialValue);
  },
  useState: function (initialState) {
    initialState = mountStateImpl(initialState);
    var queue = initialState.queue,
      dispatch = dispatchSetState.bind(null, currentlyRenderingFiber$1, queue);
    queue.dispatch = dispatch;
    return [initialState.memoizedState, dispatch];
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value) {
    mountWorkInProgressHook().memoizedState = value;
    return value;
  },
  useTransition: function () {
    var stateHook = mountStateImpl(!1);
    stateHook = startTransition.bind(
      null,
      currentlyRenderingFiber$1,
      stateHook.queue,
      !0,
      !1
    );
    mountWorkInProgressHook().memoizedState = stateHook;
    return [!1, stateHook];
  },
  useSyncExternalStore: function (subscribe, getSnapshot) {
    var fiber = currentlyRenderingFiber$1,
      hook = mountWorkInProgressHook();
    var nextSnapshot = getSnapshot();
    var root = workInProgressRoot;
    if (null === root)
      throw Error(
        "Expected a work-in-progress root. This is a bug in React. Please file an issue."
      );
    includesBlockingLane(root, workInProgressRootRenderLanes) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
    hook.memoizedState = nextSnapshot;
    root = { value: nextSnapshot, getSnapshot: getSnapshot };
    hook.queue = root;
    mountEffect(subscribeToStore.bind(null, fiber, root, subscribe), [
      subscribe
    ]);
    fiber.flags |= 2048;
    pushEffect(
      9,
      updateStoreInstance.bind(null, fiber, root, nextSnapshot, getSnapshot),
      { destroy: void 0 },
      null
    );
    return nextSnapshot;
  },
  useId: function () {
    var hook = mountWorkInProgressHook(),
      identifierPrefix = workInProgressRoot.identifierPrefix,
      globalClientId = globalClientIdCounter++;
    identifierPrefix =
      ":" + identifierPrefix + "r" + globalClientId.toString(32) + ":";
    return (hook.memoizedState = identifierPrefix);
  },
  useCacheRefresh: function () {
    return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
      null,
      currentlyRenderingFiber$1
    ));
  }
};
HooksDispatcherOnMount.useMemoCache = useMemoCache;
HooksDispatcherOnMount.useHostTransitionStatus = useHostTransitionStatus;
HooksDispatcherOnMount.useFormState = mountActionState;
HooksDispatcherOnMount.useActionState = mountActionState;
HooksDispatcherOnMount.useOptimistic = function (passthrough) {
  var hook = mountWorkInProgressHook();
  hook.memoizedState = hook.baseState = passthrough;
  var queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: null,
    lastRenderedState: null
  };
  hook.queue = queue;
  hook = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber$1,
    !0,
    queue
  );
  queue.dispatch = hook;
  return [passthrough, hook];
};
var HooksDispatcherOnUpdate = {
  readContext: readContext,
  use: use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState: function () {
    return updateReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value) {
    var hook = updateWorkInProgressHook();
    return updateDeferredValueImpl(hook, currentHook.memoizedState, value);
  },
  useTransition: function () {
    var booleanOrThenable = updateReducer(basicStateReducer)[0],
      start = updateWorkInProgressHook().memoizedState;
    return [
      "boolean" === typeof booleanOrThenable
        ? booleanOrThenable
        : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId
};
HooksDispatcherOnUpdate.useCacheRefresh = updateRefresh;
HooksDispatcherOnUpdate.useMemoCache = useMemoCache;
HooksDispatcherOnUpdate.useHostTransitionStatus = useHostTransitionStatus;
HooksDispatcherOnUpdate.useFormState = updateActionState;
HooksDispatcherOnUpdate.useActionState = updateActionState;
HooksDispatcherOnUpdate.useOptimistic = function (passthrough, reducer) {
  var hook = updateWorkInProgressHook();
  return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
};
var HooksDispatcherOnRerender = {
  readContext: readContext,
  use: use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState: function () {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value) {
    var hook = updateWorkInProgressHook();
    return null === currentHook
      ? ((hook.memoizedState = value), value)
      : updateDeferredValueImpl(hook, currentHook.memoizedState, value);
  },
  useTransition: function () {
    var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
      start = updateWorkInProgressHook().memoizedState;
    return [
      "boolean" === typeof booleanOrThenable
        ? booleanOrThenable
        : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId
};
HooksDispatcherOnRerender.useCacheRefresh = updateRefresh;
HooksDispatcherOnRerender.useMemoCache = useMemoCache;
HooksDispatcherOnRerender.useHostTransitionStatus = useHostTransitionStatus;
HooksDispatcherOnRerender.useFormState = rerenderActionState;
HooksDispatcherOnRerender.useActionState = rerenderActionState;
HooksDispatcherOnRerender.useOptimistic = function (passthrough, reducer) {
  var hook = updateWorkInProgressHook();
  if (null !== currentHook)
    return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
  hook.baseState = passthrough;
  return [passthrough, hook.queue.dispatch];
};
function applyDerivedStateFromProps(
  workInProgress,
  ctor,
  getDerivedStateFromProps,
  nextProps
) {
  ctor = workInProgress.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps =
    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
      ? ctor
      : assign({}, ctor, getDerivedStateFromProps);
  workInProgress.memoizedState = getDerivedStateFromProps;
  0 === workInProgress.lanes &&
    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
}
var classComponentUpdater = {
  isMounted: function (component) {
    return (component = component._reactInternals)
      ? getNearestMountedFiber(component) === component
      : !1;
  },
  enqueueSetState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(inst),
      update = createUpdate(lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
  },
  enqueueReplaceState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(inst),
      update = createUpdate(lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
  },
  enqueueForceUpdate: function (inst, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(inst),
      update = createUpdate(lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    callback = enqueueUpdate(inst, update, lane);
    null !== callback &&
      (scheduleUpdateOnFiber(callback, inst, lane),
      entangleTransitions(callback, inst, lane));
  }
};
function checkShouldComponentUpdate(
  workInProgress,
  ctor,
  oldProps,
  newProps,
  oldState,
  newState,
  nextContext
) {
  workInProgress = workInProgress.stateNode;
  return "function" === typeof workInProgress.shouldComponentUpdate
    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
    : ctor.prototype && ctor.prototype.isPureReactComponent
    ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
    : !0;
}
function constructClassInstance(workInProgress, ctor, props) {
  var isLegacyContextConsumer = !1,
    unmaskedContext = emptyContextObject;
  var context = ctor.contextType;
  "object" === typeof context && null !== context
    ? (context = readContext(context))
    : ((unmaskedContext = isContextProvider(ctor)
        ? previousContext
        : contextStackCursor$1.current),
      (isLegacyContextConsumer = ctor.contextTypes),
      (context = (isLegacyContextConsumer =
        null !== isLegacyContextConsumer && void 0 !== isLegacyContextConsumer)
        ? getMaskedContext(workInProgress, unmaskedContext)
        : emptyContextObject));
  ctor = new ctor(props, context);
  workInProgress.memoizedState =
    null !== ctor.state && void 0 !== ctor.state ? ctor.state : null;
  ctor.updater = classComponentUpdater;
  workInProgress.stateNode = ctor;
  ctor._reactInternals = workInProgress;
  isLegacyContextConsumer &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext =
      unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
  return ctor;
}
function callComponentWillReceiveProps(
  workInProgress,
  instance,
  newProps,
  nextContext
) {
  workInProgress = instance.state;
  "function" === typeof instance.componentWillReceiveProps &&
    instance.componentWillReceiveProps(newProps, nextContext);
  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress &&
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function mountClassInstance(workInProgress, ctor, newProps, renderLanes) {
  var instance = workInProgress.stateNode;
  instance.props = newProps;
  instance.state = workInProgress.memoizedState;
  instance.refs = {};
  initializeUpdateQueue(workInProgress);
  var contextType = ctor.contextType;
  "object" === typeof contextType && null !== contextType
    ? (instance.context = readContext(contextType))
    : ((contextType = isContextProvider(ctor)
        ? previousContext
        : contextStackCursor$1.current),
      (instance.context = getMaskedContext(workInProgress, contextType)));
  instance.state = workInProgress.memoizedState;
  contextType = ctor.getDerivedStateFromProps;
  "function" === typeof contextType &&
    (applyDerivedStateFromProps(workInProgress, ctor, contextType, newProps),
    (instance.state = workInProgress.memoizedState));
  "function" === typeof ctor.getDerivedStateFromProps ||
    "function" === typeof instance.getSnapshotBeforeUpdate ||
    ("function" !== typeof instance.UNSAFE_componentWillMount &&
      "function" !== typeof instance.componentWillMount) ||
    ((ctor = instance.state),
    "function" === typeof instance.componentWillMount &&
      instance.componentWillMount(),
    "function" === typeof instance.UNSAFE_componentWillMount &&
      instance.UNSAFE_componentWillMount(),
    ctor !== instance.state &&
      classComponentUpdater.enqueueReplaceState(instance, instance.state, null),
    processUpdateQueue(workInProgress, newProps, instance, renderLanes),
    suspendIfUpdateReadFromEntangledAsyncAction(),
    (instance.state = workInProgress.memoizedState));
  "function" === typeof instance.componentDidMount &&
    (workInProgress.flags |= 4194308);
}
function resolveClassComponentProps(
  Component,
  baseProps,
  alreadyResolvedDefaultProps
) {
  var newProps = baseProps;
  if ("ref" in baseProps) {
    newProps = {};
    for (var propName in baseProps)
      "ref" !== propName && (newProps[propName] = baseProps[propName]);
  }
  if ((Component = Component.defaultProps) && !alreadyResolvedDefaultProps) {
    newProps === baseProps && (newProps = assign({}, newProps));
    for (var propName$32 in Component)
      void 0 === newProps[propName$32] &&
        (newProps[propName$32] = Component[propName$32]);
  }
  return newProps;
}
function resolveDefaultPropsOnNonClassComponent(Component, baseProps) {
  if (Component && Component.defaultProps) {
    baseProps = assign({}, baseProps);
    Component = Component.defaultProps;
    for (var propName in Component)
      void 0 === baseProps[propName] &&
        (baseProps[propName] = Component[propName]);
    return baseProps;
  }
  return baseProps;
}
var reportGlobalError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        if (
          "object" === typeof window &&
          "function" === typeof window.ErrorEvent
        ) {
          var event = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              "object" === typeof error &&
              null !== error &&
              "string" === typeof error.message
                ? String(error.message)
                : String(error),
            error: error
          });
          if (!window.dispatchEvent(event)) return;
        } else if (
          "object" === typeof process &&
          "function" === typeof process.emit
        ) {
          process.emit("uncaughtException", error);
          return;
        }
        console.error(error);
      };
function defaultOnUncaughtError(error) {
  reportGlobalError(error);
}
function defaultOnCaughtError(error) {
  console.error(error);
}
function defaultOnRecoverableError(error) {
  reportGlobalError(error);
}
function logUncaughtError(root, errorInfo) {
  try {
    var onUncaughtError = root.onUncaughtError;
    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function logCaughtError(root, boundary, errorInfo) {
  try {
    var onCaughtError = root.onCaughtError;
    onCaughtError(errorInfo.value, {
      componentStack: errorInfo.stack,
      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
    });
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function createRootErrorUpdate(root, errorInfo, lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  lane.payload = { element: null };
  lane.callback = function () {
    logUncaughtError(root, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  return lane;
}
function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    var error = errorInfo.value;
    update.payload = function () {
      return getDerivedStateFromError(error);
    };
    update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
    };
  }
  var inst = fiber.stateNode;
  null !== inst &&
    "function" === typeof inst.componentDidCatch &&
    (update.callback = function () {
      logCaughtError(root, fiber, errorInfo);
      "function" !== typeof getDerivedStateFromError &&
        (null === legacyErrorBoundariesThatAlreadyFailed
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
          : legacyErrorBoundariesThatAlreadyFailed.add(this));
      var stack = errorInfo.stack;
      this.componentDidCatch(errorInfo.value, {
        componentStack: null !== stack ? stack : ""
      });
    });
}
function throwException(
  root,
  returnFiber,
  sourceFiber,
  value,
  rootRenderLanes
) {
  sourceFiber.flags |= 32768;
  if (
    null !== value &&
    "object" === typeof value &&
    "function" === typeof value.then
  ) {
    var tag = sourceFiber.tag;
    0 !== (sourceFiber.mode & 1) ||
      (0 !== tag && 11 !== tag && 15 !== tag) ||
      ((tag = sourceFiber.alternate)
        ? ((sourceFiber.updateQueue = tag.updateQueue),
          (sourceFiber.memoizedState = tag.memoizedState),
          (sourceFiber.lanes = tag.lanes))
        : ((sourceFiber.updateQueue = null),
          (sourceFiber.memoizedState = null)));
    tag = suspenseHandlerStackCursor.current;
    if (null !== tag) {
      switch (tag.tag) {
        case 13:
          return (
            sourceFiber.mode & 1 &&
              (null === shellBoundary
                ? renderDidSuspendDelayIfPossible()
                : null === tag.alternate &&
                  0 === workInProgressRootExitStatus &&
                  (workInProgressRootExitStatus = 3)),
            (tag.flags &= -257),
            0 === (tag.mode & 1)
              ? tag === returnFiber
                ? (tag.flags |= 65536)
                : ((tag.flags |= 128),
                  (sourceFiber.flags |= 131072),
                  (sourceFiber.flags &= -52805),
                  1 === sourceFiber.tag
                    ? null === sourceFiber.alternate
                      ? (sourceFiber.tag = 17)
                      : ((returnFiber = createUpdate(2)),
                        (returnFiber.tag = 2),
                        enqueueUpdate(sourceFiber, returnFiber, 2))
                    : 0 === sourceFiber.tag &&
                      null === sourceFiber.alternate &&
                      (sourceFiber.tag = 28),
                  (sourceFiber.lanes |= 2))
              : ((tag.flags |= 65536), (tag.lanes = rootRenderLanes)),
            value === noopSuspenseyCommitThenable
              ? (tag.flags |= 16384)
              : ((returnFiber = tag.updateQueue),
                null === returnFiber
                  ? (tag.updateQueue = new Set([value]))
                  : returnFiber.add(value),
                tag.mode & 1 &&
                  attachPingListener(root, value, rootRenderLanes)),
            !1
          );
        case 22:
          if (tag.mode & 1)
            return (
              (tag.flags |= 65536),
              value === noopSuspenseyCommitThenable
                ? (tag.flags |= 16384)
                : ((returnFiber = tag.updateQueue),
                  null === returnFiber
                    ? ((returnFiber = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([value])
                      }),
                      (tag.updateQueue = returnFiber))
                    : ((sourceFiber = returnFiber.retryQueue),
                      null === sourceFiber
                        ? (returnFiber.retryQueue = new Set([value]))
                        : sourceFiber.add(value)),
                  attachPingListener(root, value, rootRenderLanes)),
              !1
            );
      }
      throw Error(
        "Unexpected Suspense handler tag (" +
          tag.tag +
          "). This is a bug in React."
      );
    }
    if (1 === root.tag)
      return (
        attachPingListener(root, value, rootRenderLanes),
        renderDidSuspendDelayIfPossible(),
        !1
      );
    value = Error(
      "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
    );
  }
  tag = createCapturedValueAtFiber(
    Error(
      "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
      { cause: value }
    ),
    sourceFiber
  );
  null === workInProgressRootConcurrentErrors
    ? (workInProgressRootConcurrentErrors = [tag])
    : workInProgressRootConcurrentErrors.push(tag);
  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
  if (null === returnFiber) return !0;
  value = createCapturedValueAtFiber(value, sourceFiber);
  do {
    switch (returnFiber.tag) {
      case 3:
        return (
          (returnFiber.flags |= 65536),
          (root = rootRenderLanes & -rootRenderLanes),
          (returnFiber.lanes |= root),
          (root = createRootErrorUpdate(returnFiber.stateNode, value, root)),
          enqueueCapturedUpdate(returnFiber, root),
          !1
        );
      case 1:
        if (
          ((sourceFiber = returnFiber.type),
          (tag = returnFiber.stateNode),
          0 === (returnFiber.flags & 128) &&
            ("function" === typeof sourceFiber.getDerivedStateFromError ||
              (null !== tag &&
                "function" === typeof tag.componentDidCatch &&
                (null === legacyErrorBoundariesThatAlreadyFailed ||
                  !legacyErrorBoundariesThatAlreadyFailed.has(tag)))))
        )
          return (
            (returnFiber.flags |= 65536),
            (rootRenderLanes &= -rootRenderLanes),
            (returnFiber.lanes |= rootRenderLanes),
            (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
            initializeClassErrorUpdate(
              rootRenderLanes,
              root,
              returnFiber,
              value
            ),
            enqueueCapturedUpdate(returnFiber, rootRenderLanes),
            !1
          );
    }
    returnFiber = returnFiber.return;
  } while (null !== returnFiber);
  return !1;
}
var SelectiveHydrationException = Error(
    "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
  ),
  didReceiveUpdate = !1;
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  workInProgress.child =
    null === current
      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
      : reconcileChildFibers(
          workInProgress,
          current.child,
          nextChildren,
          renderLanes
        );
}
function updateForwardRef(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  Component = Component.render;
  var ref = workInProgress.ref;
  if ("ref" in nextProps) {
    var propsWithoutRef = {};
    for (var key in nextProps)
      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
  } else propsWithoutRef = nextProps;
  prepareToReadContext(workInProgress, renderLanes);
  nextProps = renderWithHooks(
    current,
    workInProgress,
    Component,
    propsWithoutRef,
    ref,
    renderLanes
  );
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null === current) {
    var type = Component.type;
    if (
      "function" === typeof type &&
      !shouldConstruct(type) &&
      void 0 === type.defaultProps &&
      null === Component.compare &&
      void 0 === Component.defaultProps
    )
      return (
        (workInProgress.tag = 15),
        (workInProgress.type = type),
        updateSimpleMemoComponent(
          current,
          workInProgress,
          type,
          nextProps,
          renderLanes
        )
      );
    current = createFiberFromTypeAndProps(
      Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes
    );
    current.ref = workInProgress.ref;
    current.return = workInProgress;
    return (workInProgress.child = current);
  }
  type = current.child;
  if (0 === (current.lanes & renderLanes)) {
    var prevProps = type.memoizedProps;
    Component = Component.compare;
    Component = null !== Component ? Component : shallowEqual;
    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  }
  workInProgress.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress.ref;
  current.return = workInProgress;
  return (workInProgress.child = current);
}
function updateSimpleMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null !== current) {
    var prevProps = current.memoizedProps;
    if (
      shallowEqual(prevProps, nextProps) &&
      current.ref === workInProgress.ref
    )
      if (
        ((didReceiveUpdate = !1),
        (workInProgress.pendingProps = nextProps = prevProps),
        0 !== (current.lanes & renderLanes))
      )
        0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
      else
        return (
          (workInProgress.lanes = current.lanes),
          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
        );
  }
  return updateFunctionComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    renderLanes
  );
}
function updateOffscreenComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    nextChildren = nextProps.children,
    nextIsDetached = 0 !== (workInProgress.stateNode._pendingVisibility & 2),
    prevState = null !== current ? current.memoizedState : null;
  markRef(current, workInProgress);
  if ("hidden" === nextProps.mode || nextIsDetached) {
    if (0 !== (workInProgress.flags & 128)) {
      renderLanes =
        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
      if (null !== current) {
        nextProps = workInProgress.child = current.child;
        for (nextChildren = 0; null !== nextProps; )
          (nextChildren =
            nextChildren | nextProps.lanes | nextProps.childLanes),
            (nextProps = nextProps.sibling);
        workInProgress.childLanes = nextChildren & ~renderLanes;
      } else (workInProgress.childLanes = 0), (workInProgress.child = null);
      return deferHiddenOffscreenComponent(
        current,
        workInProgress,
        renderLanes
      );
    }
    if (0 === (workInProgress.mode & 1))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current && pushTransition(workInProgress, null),
        reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else if (0 !== (renderLanes & 536870912))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current &&
          pushTransition(
            workInProgress,
            null !== prevState ? prevState.cachePool : null
          ),
        null !== prevState
          ? pushHiddenContext(workInProgress, prevState)
          : reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else
      return (
        (workInProgress.lanes = workInProgress.childLanes = 536870912),
        deferHiddenOffscreenComponent(
          current,
          workInProgress,
          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes
        )
      );
  } else
    null !== prevState
      ? (pushTransition(workInProgress, prevState.cachePool),
        pushHiddenContext(workInProgress, prevState),
        reuseSuspenseHandlerOnStack(workInProgress),
        (workInProgress.memoizedState = null))
      : (null !== current && pushTransition(workInProgress, null),
        reuseHiddenContextOnStack(),
        reuseSuspenseHandlerOnStack(workInProgress));
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
function deferHiddenOffscreenComponent(current, workInProgress, nextBaseLanes) {
  var JSCompiler_inline_result = peekCacheFromPool();
  JSCompiler_inline_result =
    null === JSCompiler_inline_result
      ? null
      : { parent: CacheContext._currentValue2, pool: JSCompiler_inline_result };
  workInProgress.memoizedState = {
    baseLanes: nextBaseLanes,
    cachePool: JSCompiler_inline_result
  };
  null !== current && pushTransition(workInProgress, null);
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(workInProgress);
  return null;
}
function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (null === ref)
    null !== current &&
      null !== current.ref &&
      (workInProgress.flags |= 2097664);
  else {
    if ("function" !== typeof ref && "object" !== typeof ref)
      throw Error(
        "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
      );
    if (null === current || current.ref !== ref)
      workInProgress.flags |= 2097664;
  }
}
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  var context = isContextProvider(Component)
    ? previousContext
    : contextStackCursor$1.current;
  context = getMaskedContext(workInProgress, context);
  prepareToReadContext(workInProgress, renderLanes);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    context,
    renderLanes
  );
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, Component, renderLanes);
  return workInProgress.child;
}
function replayFunctionComponent(
  current,
  workInProgress,
  nextProps,
  Component,
  secondArg,
  renderLanes
) {
  prepareToReadContext(workInProgress, renderLanes);
  nextProps = renderWithHooksAgain(
    workInProgress,
    Component,
    nextProps,
    secondArg
  );
  finishRenderingHooks();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateClassComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (isContextProvider(Component)) {
    var hasContext = !0;
    pushContextProvider(workInProgress);
  } else hasContext = !1;
  prepareToReadContext(workInProgress, renderLanes);
  if (null === workInProgress.stateNode)
    resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress),
      constructClassInstance(workInProgress, Component, nextProps),
      mountClassInstance(workInProgress, Component, nextProps, renderLanes),
      (nextProps = !0);
  else if (null === current) {
    var instance = workInProgress.stateNode,
      unresolvedOldProps = workInProgress.memoizedProps,
      oldProps = resolveClassComponentProps(
        Component,
        unresolvedOldProps,
        workInProgress.type === workInProgress.elementType
      );
    instance.props = oldProps;
    var oldContext = instance.context,
      contextType = Component.contextType;
    "object" === typeof contextType && null !== contextType
      ? (contextType = readContext(contextType))
      : ((contextType = isContextProvider(Component)
          ? previousContext
          : contextStackCursor$1.current),
        (contextType = getMaskedContext(workInProgress, contextType)));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps,
      hasNewLifecycles =
        "function" === typeof getDerivedStateFromProps ||
        "function" === typeof instance.getSnapshotBeforeUpdate;
    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
    hasNewLifecycles ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((unresolvedOldProps || oldContext !== contextType) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          contextType
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    instance.state = oldState;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    oldContext = workInProgress.memoizedState;
    unresolvedOldProps ||
    oldState !== oldContext ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps,
            nextProps
          ),
          (oldContext = workInProgress.memoizedState)),
        (oldProps =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            oldProps,
            nextProps,
            oldState,
            oldContext,
            contextType
          ))
          ? (hasNewLifecycles ||
              ("function" !== typeof instance.UNSAFE_componentWillMount &&
                "function" !== typeof instance.componentWillMount) ||
              ("function" === typeof instance.componentWillMount &&
                instance.componentWillMount(),
              "function" === typeof instance.UNSAFE_componentWillMount &&
                instance.UNSAFE_componentWillMount()),
            "function" === typeof instance.componentDidMount &&
              (workInProgress.flags |= 4194308))
          : ("function" === typeof instance.componentDidMount &&
              (workInProgress.flags |= 4194308),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = oldContext)),
        (instance.props = nextProps),
        (instance.state = oldContext),
        (instance.context = contextType),
        (nextProps = oldProps))
      : ("function" === typeof instance.componentDidMount &&
          (workInProgress.flags |= 4194308),
        (nextProps = !1));
  } else {
    instance = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    oldProps = workInProgress.memoizedProps;
    contextType = resolveClassComponentProps(
      Component,
      oldProps,
      workInProgress.type === workInProgress.elementType
    );
    instance.props = contextType;
    hasNewLifecycles = workInProgress.pendingProps;
    unresolvedOldProps = instance.context;
    oldContext = Component.contextType;
    "object" === typeof oldContext && null !== oldContext
      ? (oldContext = readContext(oldContext))
      : ((oldContext = isContextProvider(Component)
          ? previousContext
          : contextStackCursor$1.current),
        (oldContext = getMaskedContext(workInProgress, oldContext)));
    oldState = Component.getDerivedStateFromProps;
    (getDerivedStateFromProps =
      "function" === typeof oldState ||
      "function" === typeof instance.getSnapshotBeforeUpdate) ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((oldProps !== hasNewLifecycles || unresolvedOldProps !== oldContext) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          oldContext
        ));
    hasForceUpdate = !1;
    unresolvedOldProps = workInProgress.memoizedState;
    instance.state = unresolvedOldProps;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    var newState = workInProgress.memoizedState;
    oldProps !== hasNewLifecycles ||
    unresolvedOldProps !== newState ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate
      ? ("function" === typeof oldState &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            oldState,
            nextProps
          ),
          (newState = workInProgress.memoizedState)),
        (contextType =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            contextType,
            nextProps,
            unresolvedOldProps,
            newState,
            oldContext
          ) ||
          !1)
          ? (getDerivedStateFromProps ||
              ("function" !== typeof instance.UNSAFE_componentWillUpdate &&
                "function" !== typeof instance.componentWillUpdate) ||
              ("function" === typeof instance.componentWillUpdate &&
                instance.componentWillUpdate(nextProps, newState, oldContext),
              "function" === typeof instance.UNSAFE_componentWillUpdate &&
                instance.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldContext
                )),
            "function" === typeof instance.componentDidUpdate &&
              (workInProgress.flags |= 4),
            "function" === typeof instance.getSnapshotBeforeUpdate &&
              (workInProgress.flags |= 1024))
          : ("function" !== typeof instance.componentDidUpdate ||
              (oldProps === current.memoizedProps &&
                unresolvedOldProps === current.memoizedState) ||
              (workInProgress.flags |= 4),
            "function" !== typeof instance.getSnapshotBeforeUpdate ||
              (oldProps === current.memoizedProps &&
                unresolvedOldProps === current.memoizedState) ||
              (workInProgress.flags |= 1024),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = newState)),
        (instance.props = nextProps),
        (instance.state = newState),
        (instance.context = oldContext),
        (nextProps = contextType))
      : ("function" !== typeof instance.componentDidUpdate ||
          (oldProps === current.memoizedProps &&
            unresolvedOldProps === current.memoizedState) ||
          (workInProgress.flags |= 4),
        "function" !== typeof instance.getSnapshotBeforeUpdate ||
          (oldProps === current.memoizedProps &&
            unresolvedOldProps === current.memoizedState) ||
          (workInProgress.flags |= 1024),
        (nextProps = !1));
  }
  return finishClassComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    hasContext,
    renderLanes
  );
}
function finishClassComponent(
  current,
  workInProgress,
  Component,
  shouldUpdate,
  hasContext,
  renderLanes
) {
  markRef(current, workInProgress);
  var didCaptureError = 0 !== (workInProgress.flags & 128);
  if (!shouldUpdate && !didCaptureError)
    return (
      hasContext && invalidateContextProvider(workInProgress, Component, !1),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  shouldUpdate = workInProgress.stateNode;
  var nextChildren =
    didCaptureError && "function" !== typeof Component.getDerivedStateFromError
      ? null
      : shouldUpdate.render();
  workInProgress.flags |= 1;
  null !== current && didCaptureError
    ? ((workInProgress.child = reconcileChildFibers(
        workInProgress,
        current.child,
        null,
        renderLanes
      )),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        null,
        nextChildren,
        renderLanes
      )))
    : reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  workInProgress.memoizedState = shouldUpdate.state;
  hasContext && invalidateContextProvider(workInProgress, Component, !0);
  return workInProgress.child;
}
function pushHostRootContext(workInProgress) {
  var root = workInProgress.stateNode;
  root.pendingContext
    ? pushTopLevelContextObject(
        workInProgress,
        root.pendingContext,
        root.pendingContext !== root.context
      )
    : root.context &&
      pushTopLevelContextObject(workInProgress, root.context, !1);
  pushHostContainer(workInProgress, root.containerInfo);
}
var SUSPENDED_MARKER = { dehydrated: null, treeContext: null, retryLane: 0 };
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(
  current,
  primaryTreeDidDefer,
  renderLanes
) {
  current = null !== current ? current.childLanes & ~renderLanes : 0;
  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
  return current;
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    showFallback = !1,
    didSuspend = 0 !== (workInProgress.flags & 128),
    JSCompiler_temp;
  (JSCompiler_temp = didSuspend) ||
    (JSCompiler_temp =
      null !== current && null === current.memoizedState
        ? !1
        : 0 !== (suspenseStackCursor.current & 2));
  JSCompiler_temp && ((showFallback = !0), (workInProgress.flags &= -129));
  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
  workInProgress.flags &= -33;
  if (null === current) {
    var nextPrimaryChildren = nextProps.children;
    didSuspend = nextProps.fallback;
    if (showFallback)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        (nextProps = mountSuspenseFallbackChildren(
          workInProgress,
          nextPrimaryChildren,
          didSuspend,
          renderLanes
        )),
        (nextPrimaryChildren = workInProgress.child),
        (nextPrimaryChildren.memoizedState =
          mountSuspenseOffscreenState(renderLanes)),
        (nextPrimaryChildren.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        nextProps
      );
    if ("number" === typeof nextProps.unstable_expectedLoadTime)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        (nextProps = mountSuspenseFallbackChildren(
          workInProgress,
          nextPrimaryChildren,
          didSuspend,
          renderLanes
        )),
        (nextPrimaryChildren = workInProgress.child),
        (nextPrimaryChildren.memoizedState =
          mountSuspenseOffscreenState(renderLanes)),
        (nextPrimaryChildren.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        (workInProgress.lanes = 4194304),
        nextProps
      );
    pushPrimaryTreeSuspenseHandler(workInProgress);
    return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
  }
  nextPrimaryChildren = current.memoizedState;
  if (null !== nextPrimaryChildren && null !== nextPrimaryChildren.dehydrated) {
    if (didSuspend)
      workInProgress.flags & 256
        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
          (workInProgress.flags &= -257),
          (workInProgress = retrySuspenseComponentWithoutHydrating(
            current,
            workInProgress,
            renderLanes
          )))
        : null !== workInProgress.memoizedState
        ? (reuseSuspenseHandlerOnStack(workInProgress),
          (workInProgress.child = current.child),
          (workInProgress.flags |= 128),
          (workInProgress = null))
        : (reuseSuspenseHandlerOnStack(workInProgress),
          (nextPrimaryChildren = nextProps.fallback),
          (showFallback = workInProgress.mode),
          (nextProps = createFiberFromOffscreen(
            { mode: "visible", children: nextProps.children },
            showFallback,
            0,
            null
          )),
          (nextPrimaryChildren = createFiberFromFragment(
            nextPrimaryChildren,
            showFallback,
            renderLanes,
            null
          )),
          (nextPrimaryChildren.flags |= 2),
          (nextProps.return = workInProgress),
          (nextPrimaryChildren.return = workInProgress),
          (nextProps.sibling = nextPrimaryChildren),
          (workInProgress.child = nextProps),
          0 !== (workInProgress.mode & 1) &&
            reconcileChildFibers(
              workInProgress,
              current.child,
              null,
              renderLanes
            ),
          (nextProps = workInProgress.child),
          (nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes)),
          (nextProps.childLanes = getRemainingWorkInPrimaryTree(
            current,
            JSCompiler_temp,
            renderLanes
          )),
          (workInProgress.memoizedState = SUSPENDED_MARKER),
          (workInProgress = nextPrimaryChildren));
    else if ((pushPrimaryTreeSuspenseHandler(workInProgress), shim$1()))
      (JSCompiler_temp = shim$1().digest),
        (nextProps = Error(
          "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."
        )),
        (nextProps.stack = ""),
        (nextProps.digest = JSCompiler_temp),
        (JSCompiler_temp = { value: nextProps, source: null, stack: null }),
        null === hydrationErrors
          ? (hydrationErrors = [JSCompiler_temp])
          : hydrationErrors.push(JSCompiler_temp),
        (workInProgress = retrySuspenseComponentWithoutHydrating(
          current,
          workInProgress,
          renderLanes
        ));
    else if (
      ((JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
      didReceiveUpdate || JSCompiler_temp)
    ) {
      JSCompiler_temp = workInProgressRoot;
      if (null !== JSCompiler_temp) {
        nextProps = renderLanes & -renderLanes;
        if (0 !== (nextProps & 42)) nextProps = 1;
        else
          switch (nextProps) {
            case 2:
              nextProps = 1;
              break;
            case 8:
              nextProps = 4;
              break;
            case 32:
              nextProps = 16;
              break;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              nextProps = 64;
              break;
            case 268435456:
              nextProps = 134217728;
              break;
            default:
              nextProps = 0;
          }
        nextProps =
          0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes))
            ? 0
            : nextProps;
        if (0 !== nextProps && nextProps !== nextPrimaryChildren.retryLane)
          throw (
            ((nextPrimaryChildren.retryLane = nextProps),
            enqueueConcurrentRenderForLane(current, nextProps),
            scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
            SelectiveHydrationException)
          );
      }
      shim$1() || renderDidSuspendDelayIfPossible();
      workInProgress = retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes
      );
    } else
      shim$1()
        ? ((workInProgress.flags |= 128),
          (workInProgress.child = current.child),
          retryDehydratedSuspenseBoundary.bind(null, current),
          shim$1(),
          (workInProgress = null))
        : ((workInProgress = mountSuspensePrimaryChildren(
            workInProgress,
            nextProps.children
          )),
          (workInProgress.flags |= 4096));
    return workInProgress;
  }
  if (showFallback) {
    reuseSuspenseHandlerOnStack(workInProgress);
    nextPrimaryChildren = nextProps.fallback;
    showFallback = workInProgress.mode;
    didSuspend = current.child;
    var currentFallbackChildFragment = didSuspend.sibling,
      primaryChildProps = { mode: "hidden", children: nextProps.children };
    0 === (showFallback & 1) && workInProgress.child !== didSuspend
      ? ((nextProps = workInProgress.child),
        (nextProps.childLanes = 0),
        (nextProps.pendingProps = primaryChildProps),
        (workInProgress.deletions = null))
      : ((nextProps = createWorkInProgress(didSuspend, primaryChildProps)),
        (nextProps.subtreeFlags = didSuspend.subtreeFlags & 31457280));
    null !== currentFallbackChildFragment
      ? (nextPrimaryChildren = createWorkInProgress(
          currentFallbackChildFragment,
          nextPrimaryChildren
        ))
      : ((nextPrimaryChildren = createFiberFromFragment(
          nextPrimaryChildren,
          showFallback,
          renderLanes,
          null
        )),
        (nextPrimaryChildren.flags |= 2));
    nextPrimaryChildren.return = workInProgress;
    nextProps.return = workInProgress;
    nextProps.sibling = nextPrimaryChildren;
    workInProgress.child = nextProps;
    nextProps = nextPrimaryChildren;
    nextPrimaryChildren = workInProgress.child;
    showFallback = current.child.memoizedState;
    null === showFallback
      ? (showFallback = mountSuspenseOffscreenState(renderLanes))
      : ((didSuspend = showFallback.cachePool),
        null !== didSuspend
          ? ((currentFallbackChildFragment = CacheContext._currentValue2),
            (didSuspend =
              didSuspend.parent !== currentFallbackChildFragment
                ? {
                    parent: currentFallbackChildFragment,
                    pool: currentFallbackChildFragment
                  }
                : didSuspend))
          : (didSuspend = getSuspendedCache()),
        (showFallback = {
          baseLanes: showFallback.baseLanes | renderLanes,
          cachePool: didSuspend
        }));
    nextPrimaryChildren.memoizedState = showFallback;
    nextPrimaryChildren.childLanes = getRemainingWorkInPrimaryTree(
      current,
      JSCompiler_temp,
      renderLanes
    );
    workInProgress.memoizedState = SUSPENDED_MARKER;
    return nextProps;
  }
  pushPrimaryTreeSuspenseHandler(workInProgress);
  JSCompiler_temp = current.child;
  current = JSCompiler_temp.sibling;
  JSCompiler_temp = createWorkInProgress(JSCompiler_temp, {
    mode: "visible",
    children: nextProps.children
  });
  0 === (workInProgress.mode & 1) && (JSCompiler_temp.lanes = renderLanes);
  JSCompiler_temp.return = workInProgress;
  JSCompiler_temp.sibling = null;
  null !== current &&
    ((renderLanes = workInProgress.deletions),
    null === renderLanes
      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
      : renderLanes.push(current));
  workInProgress.child = JSCompiler_temp;
  workInProgress.memoizedState = null;
  return JSCompiler_temp;
}
function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
  primaryChildren = createFiberFromOffscreen(
    { mode: "visible", children: primaryChildren },
    workInProgress.mode,
    0,
    null
  );
  primaryChildren.return = workInProgress;
  return (workInProgress.child = primaryChildren);
}
function mountSuspenseFallbackChildren(
  workInProgress,
  primaryChildren,
  fallbackChildren,
  renderLanes
) {
  var mode = workInProgress.mode,
    progressedPrimaryFragment = workInProgress.child;
  primaryChildren = { mode: "hidden", children: primaryChildren };
  0 === (mode & 1) && null !== progressedPrimaryFragment
    ? ((progressedPrimaryFragment.childLanes = 0),
      (progressedPrimaryFragment.pendingProps = primaryChildren))
    : (progressedPrimaryFragment = createFiberFromOffscreen(
        primaryChildren,
        mode,
        0,
        null
      ));
  fallbackChildren = createFiberFromFragment(
    fallbackChildren,
    mode,
    renderLanes,
    null
  );
  progressedPrimaryFragment.return = workInProgress;
  fallbackChildren.return = workInProgress;
  progressedPrimaryFragment.sibling = fallbackChildren;
  workInProgress.child = progressedPrimaryFragment;
  return fallbackChildren;
}
function retrySuspenseComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes
) {
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountSuspensePrimaryChildren(
    workInProgress,
    workInProgress.pendingProps.children
  );
  current.flags |= 2;
  workInProgress.memoizedState = null;
  return current;
}
function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
  fiber.lanes |= renderLanes;
  var alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes);
  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
}
function initSuspenseListRenderState(
  workInProgress,
  isBackwards,
  tail,
  lastContentRow,
  tailMode
) {
  var renderState = workInProgress.memoizedState;
  null === renderState
    ? (workInProgress.memoizedState = {
        isBackwards: isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail: tail,
        tailMode: tailMode
      })
    : ((renderState.isBackwards = isBackwards),
      (renderState.rendering = null),
      (renderState.renderingStartTime = 0),
      (renderState.last = lastContentRow),
      (renderState.tail = tail),
      (renderState.tailMode = tailMode));
}
function updateSuspenseListComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    revealOrder = nextProps.revealOrder,
    tailMode = nextProps.tail;
  reconcileChildren(current, workInProgress, nextProps.children, renderLanes);
  nextProps = suspenseStackCursor.current;
  if (0 !== (nextProps & 2))
    (nextProps = (nextProps & 1) | 2), (workInProgress.flags |= 128);
  else {
    if (null !== current && 0 !== (current.flags & 128))
      a: for (current = workInProgress.child; null !== current; ) {
        if (13 === current.tag)
          null !== current.memoizedState &&
            scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (19 === current.tag)
          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (null !== current.child) {
          current.child.return = current;
          current = current.child;
          continue;
        }
        if (current === workInProgress) break a;
        for (; null === current.sibling; ) {
          if (null === current.return || current.return === workInProgress)
            break a;
          current = current.return;
        }
        current.sibling.return = current.return;
        current = current.sibling;
      }
    nextProps &= 1;
  }
  push(suspenseStackCursor, nextProps);
  if (0 === (workInProgress.mode & 1)) workInProgress.memoizedState = null;
  else
    switch (revealOrder) {
      case "forwards":
        renderLanes = workInProgress.child;
        for (revealOrder = null; null !== renderLanes; )
          (current = renderLanes.alternate),
            null !== current &&
              null === findFirstSuspended(current) &&
              (revealOrder = renderLanes),
            (renderLanes = renderLanes.sibling);
        renderLanes = revealOrder;
        null === renderLanes
          ? ((revealOrder = workInProgress.child),
            (workInProgress.child = null))
          : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
        initSuspenseListRenderState(
          workInProgress,
          !1,
          revealOrder,
          renderLanes,
          tailMode
        );
        break;
      case "backwards":
        renderLanes = null;
        revealOrder = workInProgress.child;
        for (workInProgress.child = null; null !== revealOrder; ) {
          current = revealOrder.alternate;
          if (null !== current && null === findFirstSuspended(current)) {
            workInProgress.child = revealOrder;
            break;
          }
          current = revealOrder.sibling;
          revealOrder.sibling = renderLanes;
          renderLanes = revealOrder;
          revealOrder = current;
        }
        initSuspenseListRenderState(
          workInProgress,
          !0,
          renderLanes,
          null,
          tailMode
        );
        break;
      case "together":
        initSuspenseListRenderState(workInProgress, !1, null, null, void 0);
        break;
      default:
        workInProgress.memoizedState = null;
    }
  return workInProgress.child;
}
function resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress) {
  0 === (workInProgress.mode & 1) &&
    null !== current &&
    ((current.alternate = null),
    (workInProgress.alternate = null),
    (workInProgress.flags |= 2));
}
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  null !== current && (workInProgress.dependencies = current.dependencies);
  workInProgressRootSkippedLanes |= workInProgress.lanes;
  if (0 === (renderLanes & workInProgress.childLanes)) return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error("Resuming work not yet implemented.");
  if (null !== workInProgress.child) {
    current = workInProgress.child;
    renderLanes = createWorkInProgress(current, current.pendingProps);
    workInProgress.child = renderLanes;
    for (renderLanes.return = workInProgress; null !== current.sibling; )
      (current = current.sibling),
        (renderLanes = renderLanes.sibling =
          createWorkInProgress(current, current.pendingProps)),
        (renderLanes.return = workInProgress);
    renderLanes.sibling = null;
  }
  return workInProgress.child;
}
function attemptEarlyBailoutIfNoScheduledUpdate(
  current,
  workInProgress,
  renderLanes
) {
  switch (workInProgress.tag) {
    case 3:
      pushHostRootContext(workInProgress);
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
      break;
    case 27:
    case 5:
      pushHostContext(workInProgress);
      break;
    case 1:
      isContextProvider(workInProgress.type) &&
        pushContextProvider(workInProgress);
      break;
    case 4:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case 10:
      pushProvider(
        workInProgress,
        workInProgress.type,
        workInProgress.memoizedProps.value
      );
      break;
    case 13:
      var state = workInProgress.memoizedState;
      if (null !== state) {
        if (null !== state.dehydrated)
          return (
            pushPrimaryTreeSuspenseHandler(workInProgress),
            (workInProgress.flags |= 128),
            null
          );
        if (0 !== (renderLanes & workInProgress.child.childLanes))
          return updateSuspenseComponent(current, workInProgress, renderLanes);
        pushPrimaryTreeSuspenseHandler(workInProgress);
        current = bailoutOnAlreadyFinishedWork(
          current,
          workInProgress,
          renderLanes
        );
        return null !== current ? current.sibling : null;
      }
      pushPrimaryTreeSuspenseHandler(workInProgress);
      break;
    case 19:
      state = 0 !== (renderLanes & workInProgress.childLanes);
      if (0 !== (current.flags & 128)) {
        if (state)
          return updateSuspenseListComponent(
            current,
            workInProgress,
            renderLanes
          );
        workInProgress.flags |= 128;
      }
      var renderState = workInProgress.memoizedState;
      null !== renderState &&
        ((renderState.rendering = null),
        (renderState.tail = null),
        (renderState.lastEffect = null));
      push(suspenseStackCursor, suspenseStackCursor.current);
      if (state) break;
      else return null;
    case 22:
    case 23:
      return (
        (workInProgress.lanes = 0),
        updateOffscreenComponent(current, workInProgress, renderLanes)
      );
    case 24:
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
  }
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
function beginWork(current, workInProgress, renderLanes) {
  if (null !== current)
    if (
      current.memoizedProps !== workInProgress.pendingProps ||
      didPerformWorkStackCursor.current
    )
      didReceiveUpdate = !0;
    else {
      if (
        0 === (current.lanes & renderLanes) &&
        0 === (workInProgress.flags & 128)
      )
        return (
          (didReceiveUpdate = !1),
          attemptEarlyBailoutIfNoScheduledUpdate(
            current,
            workInProgress,
            renderLanes
          )
        );
      didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
    }
  else didReceiveUpdate = !1;
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
    case 16:
      var elementType = workInProgress.elementType;
      a: {
        resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress);
        var props = workInProgress.pendingProps;
        current = elementType._init;
        current = current(elementType._payload);
        workInProgress.type = current;
        if ("function" === typeof current)
          shouldConstruct(current)
            ? ((props = resolveClassComponentProps(current, props, !1)),
              (workInProgress.tag = 1),
              (workInProgress = updateClassComponent(
                null,
                workInProgress,
                current,
                props,
                renderLanes
              )))
            : ((props = resolveDefaultPropsOnNonClassComponent(current, props)),
              (workInProgress.tag = 0),
              (workInProgress = updateFunctionComponent(
                null,
                workInProgress,
                current,
                props,
                renderLanes
              )));
        else {
          if (void 0 !== current && null !== current)
            if (
              ((elementType = current.$$typeof),
              elementType === REACT_FORWARD_REF_TYPE)
            ) {
              props = resolveDefaultPropsOnNonClassComponent(current, props);
              workInProgress.tag = 11;
              workInProgress = updateForwardRef(
                null,
                workInProgress,
                current,
                props,
                renderLanes
              );
              break a;
            } else if (elementType === REACT_MEMO_TYPE) {
              props = resolveDefaultPropsOnNonClassComponent(current, props);
              workInProgress.tag = 14;
              workInProgress = updateMemoComponent(
                null,
                workInProgress,
                current,
                resolveDefaultPropsOnNonClassComponent(current.type, props),
                renderLanes
              );
              break a;
            }
          throw Error(
            "Element type is invalid. Received a promise that resolves to: " +
              current +
              ". Lazy element type must resolve to a class or function."
          );
        }
      }
      return workInProgress;
    case 0:
      return (
        (props = workInProgress.type),
        (elementType = workInProgress.pendingProps),
        (elementType =
          workInProgress.elementType === props
            ? elementType
            : resolveDefaultPropsOnNonClassComponent(props, elementType)),
        updateFunctionComponent(
          current,
          workInProgress,
          props,
          elementType,
          renderLanes
        )
      );
    case 1:
      return (
        (props = workInProgress.type),
        (elementType = resolveClassComponentProps(
          props,
          workInProgress.pendingProps,
          workInProgress.elementType === props
        )),
        updateClassComponent(
          current,
          workInProgress,
          props,
          elementType,
          renderLanes
        )
      );
    case 3:
      pushHostRootContext(workInProgress);
      if (null === current)
        throw Error("Should have a current fiber. This is a bug in React.");
      var nextProps = workInProgress.pendingProps;
      elementType = workInProgress.memoizedState;
      props = elementType.element;
      cloneUpdateQueue(current, workInProgress);
      processUpdateQueue(workInProgress, nextProps, null, renderLanes);
      nextProps = workInProgress.memoizedState;
      var nextCache = nextProps.cache;
      pushProvider(workInProgress, CacheContext, nextCache);
      nextCache !== elementType.cache &&
        propagateContextChange(workInProgress, CacheContext, renderLanes);
      suspendIfUpdateReadFromEntangledAsyncAction();
      elementType = nextProps.element;
      elementType === props
        ? (workInProgress = bailoutOnAlreadyFinishedWork(
            current,
            workInProgress,
            renderLanes
          ))
        : (reconcileChildren(current, workInProgress, elementType, renderLanes),
          (workInProgress = workInProgress.child));
      return workInProgress;
    case 26:
    case 27:
    case 5:
      return (
        pushHostContext(workInProgress),
        (props = workInProgress.pendingProps.children),
        null !== workInProgress.memoizedState &&
          ((elementType = renderWithHooks(
            current,
            workInProgress,
            TransitionAwareHostComponent,
            null,
            null,
            renderLanes
          )),
          (HostTransitionContext._currentValue2 = elementType),
          didReceiveUpdate &&
            null !== current &&
            current.memoizedState.memoizedState !== elementType &&
            propagateContextChange(
              workInProgress,
              HostTransitionContext,
              renderLanes
            )),
        markRef(current, workInProgress),
        reconcileChildren(current, workInProgress, props, renderLanes),
        workInProgress.child
      );
    case 6:
      return null;
    case 13:
      return updateSuspenseComponent(current, workInProgress, renderLanes);
    case 4:
      return (
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        ),
        (props = workInProgress.pendingProps),
        null === current
          ? (workInProgress.child = reconcileChildFibers(
              workInProgress,
              null,
              props,
              renderLanes
            ))
          : reconcileChildren(current, workInProgress, props, renderLanes),
        workInProgress.child
      );
    case 11:
      return (
        (props = workInProgress.type),
        (elementType = workInProgress.pendingProps),
        (elementType =
          workInProgress.elementType === props
            ? elementType
            : resolveDefaultPropsOnNonClassComponent(props, elementType)),
        updateForwardRef(
          current,
          workInProgress,
          props,
          elementType,
          renderLanes
        )
      );
    case 7:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps,
          renderLanes
        ),
        workInProgress.child
      );
    case 8:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 12:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 10:
      a: {
        props = workInProgress.type;
        elementType = workInProgress.pendingProps;
        nextProps = workInProgress.memoizedProps;
        nextCache = elementType.value;
        pushProvider(workInProgress, props, nextCache);
        if (null !== nextProps)
          if (objectIs(nextProps.value, nextCache)) {
            if (
              nextProps.children === elementType.children &&
              !didPerformWorkStackCursor.current
            ) {
              workInProgress = bailoutOnAlreadyFinishedWork(
                current,
                workInProgress,
                renderLanes
              );
              break a;
            }
          } else propagateContextChange(workInProgress, props, renderLanes);
        reconcileChildren(
          current,
          workInProgress,
          elementType.children,
          renderLanes
        );
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 9:
      return (
        (elementType = workInProgress.type._context),
        (props = workInProgress.pendingProps.children),
        prepareToReadContext(workInProgress, renderLanes),
        (elementType = readContext(elementType)),
        (props = props(elementType)),
        (workInProgress.flags |= 1),
        reconcileChildren(current, workInProgress, props, renderLanes),
        workInProgress.child
      );
    case 14:
      return (
        (props = workInProgress.type),
        (elementType = resolveDefaultPropsOnNonClassComponent(
          props,
          workInProgress.pendingProps
        )),
        (elementType = resolveDefaultPropsOnNonClassComponent(
          props.type,
          elementType
        )),
        updateMemoComponent(
          current,
          workInProgress,
          props,
          elementType,
          renderLanes
        )
      );
    case 15:
      return updateSimpleMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 17:
      return (
        (props = workInProgress.type),
        (elementType = resolveClassComponentProps(
          props,
          workInProgress.pendingProps,
          workInProgress.elementType === props
        )),
        resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress),
        (workInProgress.tag = 1),
        isContextProvider(props)
          ? ((current = !0), pushContextProvider(workInProgress))
          : (current = !1),
        prepareToReadContext(workInProgress, renderLanes),
        constructClassInstance(workInProgress, props, elementType),
        mountClassInstance(workInProgress, props, elementType, renderLanes),
        finishClassComponent(
          null,
          workInProgress,
          props,
          !0,
          current,
          renderLanes
        )
      );
    case 28:
      return (
        (props = workInProgress.type),
        (elementType = resolveClassComponentProps(
          props,
          workInProgress.pendingProps,
          workInProgress.elementType === props
        )),
        resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress),
        (workInProgress.tag = 0),
        updateFunctionComponent(
          null,
          workInProgress,
          props,
          elementType,
          renderLanes
        )
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress, renderLanes);
    case 22:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 24:
      return (
        prepareToReadContext(workInProgress, renderLanes),
        (props = readContext(CacheContext)),
        null === current
          ? ((elementType = peekCacheFromPool()),
            null === elementType &&
              ((elementType = workInProgressRoot),
              (nextProps = createCache()),
              (elementType.pooledCache = nextProps),
              nextProps.refCount++,
              null !== nextProps &&
                (elementType.pooledCacheLanes |= renderLanes),
              (elementType = nextProps)),
            (workInProgress.memoizedState = {
              parent: props,
              cache: elementType
            }),
            initializeUpdateQueue(workInProgress),
            pushProvider(workInProgress, CacheContext, elementType))
          : (0 !== (current.lanes & renderLanes) &&
              (cloneUpdateQueue(current, workInProgress),
              processUpdateQueue(workInProgress, null, null, renderLanes),
              suspendIfUpdateReadFromEntangledAsyncAction()),
            (elementType = current.memoizedState),
            (nextProps = workInProgress.memoizedState),
            elementType.parent !== props
              ? ((elementType = { parent: props, cache: props }),
                (workInProgress.memoizedState = elementType),
                0 === workInProgress.lanes &&
                  (workInProgress.memoizedState =
                    workInProgress.updateQueue.baseState =
                      elementType),
                pushProvider(workInProgress, CacheContext, props))
              : ((props = nextProps.cache),
                pushProvider(workInProgress, CacheContext, props),
                props !== elementType.cache &&
                  propagateContextChange(
                    workInProgress,
                    CacheContext,
                    renderLanes
                  ))),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
  }
  throw Error(
    "Unknown unit of work tag (" +
      workInProgress.tag +
      "). This error is likely caused by a bug in React. Please file an issue."
  );
}
var valueCursor = createCursor(null),
  currentlyRenderingFiber = null,
  lastContextDependency = null,
  lastFullyObservedContext = null;
function resetContextDependencies() {
  lastFullyObservedContext =
    lastContextDependency =
    currentlyRenderingFiber =
      null;
}
function pushProvider(providerFiber, context, nextValue) {
  push(valueCursor, context._currentValue2);
  context._currentValue2 = nextValue;
}
function popProvider(context) {
  context._currentValue2 = valueCursor.current;
  pop(valueCursor);
}
function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
  for (; null !== parent; ) {
    var alternate = parent.alternate;
    (parent.childLanes & renderLanes) !== renderLanes
      ? ((parent.childLanes |= renderLanes),
        null !== alternate && (alternate.childLanes |= renderLanes))
      : null !== alternate &&
        (alternate.childLanes & renderLanes) !== renderLanes &&
        (alternate.childLanes |= renderLanes);
    if (parent === propagationRoot) break;
    parent = parent.return;
  }
}
function propagateContextChange(workInProgress, context, renderLanes) {
  var fiber = workInProgress.child;
  null !== fiber && (fiber.return = workInProgress);
  for (; null !== fiber; ) {
    var list = fiber.dependencies;
    if (null !== list) {
      var nextFiber = fiber.child;
      for (var dependency = list.firstContext; null !== dependency; ) {
        if (dependency.context === context) {
          if (1 === fiber.tag) {
            dependency = createUpdate(renderLanes & -renderLanes);
            dependency.tag = 2;
            var updateQueue = fiber.updateQueue;
            if (null !== updateQueue) {
              updateQueue = updateQueue.shared;
              var pending = updateQueue.pending;
              null === pending
                ? (dependency.next = dependency)
                : ((dependency.next = pending.next),
                  (pending.next = dependency));
              updateQueue.pending = dependency;
            }
          }
          fiber.lanes |= renderLanes;
          dependency = fiber.alternate;
          null !== dependency && (dependency.lanes |= renderLanes);
          scheduleContextWorkOnParentPath(
            fiber.return,
            renderLanes,
            workInProgress
          );
          list.lanes |= renderLanes;
          break;
        }
        dependency = dependency.next;
      }
    } else if (10 === fiber.tag)
      nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
    else if (18 === fiber.tag) {
      nextFiber = fiber.return;
      if (null === nextFiber)
        throw Error(
          "We just came from a parent so we must have had a parent. This is a bug in React."
        );
      nextFiber.lanes |= renderLanes;
      list = nextFiber.alternate;
      null !== list && (list.lanes |= renderLanes);
      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
      nextFiber = fiber.sibling;
    } else nextFiber = fiber.child;
    if (null !== nextFiber) nextFiber.return = fiber;
    else
      for (nextFiber = fiber; null !== nextFiber; ) {
        if (nextFiber === workInProgress) {
          nextFiber = null;
          break;
        }
        fiber = nextFiber.sibling;
        if (null !== fiber) {
          fiber.return = nextFiber.return;
          nextFiber = fiber;
          break;
        }
        nextFiber = nextFiber.return;
      }
    fiber = nextFiber;
  }
}
function prepareToReadContext(workInProgress, renderLanes) {
  currentlyRenderingFiber = workInProgress;
  lastFullyObservedContext = lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress &&
    null !== workInProgress.firstContext &&
    (0 !== (workInProgress.lanes & renderLanes) && (didReceiveUpdate = !0),
    (workInProgress.firstContext = null));
}
function readContext(context) {
  return readContextForConsumer(currentlyRenderingFiber, context);
}
function readContextDuringReconciliation(consumer, context, renderLanes) {
  null === currentlyRenderingFiber &&
    prepareToReadContext(consumer, renderLanes);
  return readContextForConsumer(consumer, context);
}
function readContextForConsumer(consumer, context) {
  var value = context._currentValue2;
  if (lastFullyObservedContext !== context)
    if (
      ((context = { context: context, memoizedValue: value, next: null }),
      null === lastContextDependency)
    ) {
      if (null === consumer)
        throw Error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      lastContextDependency = context;
      consumer.dependencies = { lanes: 0, firstContext: context };
    } else lastContextDependency = lastContextDependency.next = context;
  return value;
}
var AbortControllerLocal =
    "undefined" !== typeof AbortController
      ? AbortController
      : function () {
          var listeners = [],
            signal = (this.signal = {
              aborted: !1,
              addEventListener: function (type, listener) {
                listeners.push(listener);
              }
            });
          this.abort = function () {
            signal.aborted = !0;
            listeners.forEach(function (listener) {
              return listener();
            });
          };
        },
  scheduleCallback$1 = Scheduler$1.unstable_scheduleCallback,
  NormalPriority = Scheduler$1.unstable_NormalPriority,
  CacheContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
function createCache() {
  return {
    controller: new AbortControllerLocal(),
    data: new Map(),
    refCount: 0
  };
}
function releaseCache(cache) {
  cache.refCount--;
  0 === cache.refCount &&
    scheduleCallback$1(NormalPriority, function () {
      cache.controller.abort();
    });
}
var prevOnStartTransitionFinish = ReactSharedInternals.S;
ReactSharedInternals.S = function (transition, returnValue) {
  "object" === typeof returnValue &&
    null !== returnValue &&
    "function" === typeof returnValue.then &&
    entangleAsyncAction(transition, returnValue);
  null !== prevOnStartTransitionFinish &&
    prevOnStartTransitionFinish(transition, returnValue);
};
var resumedCache = createCursor(null);
function peekCacheFromPool() {
  var cacheResumedFromPreviousRender = resumedCache.current;
  return null !== cacheResumedFromPreviousRender
    ? cacheResumedFromPreviousRender
    : workInProgressRoot.pooledCache;
}
function pushTransition(offscreenWorkInProgress, prevCachePool) {
  null === prevCachePool
    ? push(resumedCache, resumedCache.current)
    : push(resumedCache, prevCachePool.pool);
}
function getSuspendedCache() {
  var cacheFromPool = peekCacheFromPool();
  return null === cacheFromPool
    ? null
    : { parent: CacheContext._currentValue2, pool: cacheFromPool };
}
function scheduleRetryEffect(workInProgress, retryQueue) {
  null !== retryQueue
    ? (workInProgress.flags |= 4)
    : workInProgress.flags & 16384 &&
      ((retryQueue =
        22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
      (workInProgress.lanes |= retryQueue));
}
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  switch (renderState.tailMode) {
    case "hidden":
      hasRenderedATailFallback = renderState.tail;
      for (var lastTailNode = null; null !== hasRenderedATailFallback; )
        null !== hasRenderedATailFallback.alternate &&
          (lastTailNode = hasRenderedATailFallback),
          (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
      null === lastTailNode
        ? (renderState.tail = null)
        : (lastTailNode.sibling = null);
      break;
    case "collapsed":
      lastTailNode = renderState.tail;
      for (var lastTailNode$71 = null; null !== lastTailNode; )
        null !== lastTailNode.alternate && (lastTailNode$71 = lastTailNode),
          (lastTailNode = lastTailNode.sibling);
      null === lastTailNode$71
        ? hasRenderedATailFallback || null === renderState.tail
          ? (renderState.tail = null)
          : (renderState.tail.sibling = null)
        : (lastTailNode$71.sibling = null);
  }
}
function bubbleProperties(completedWork) {
  var didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child,
    newChildLanes = 0,
    subtreeFlags = 0;
  if (didBailout)
    for (var child$72 = completedWork.child; null !== child$72; )
      (newChildLanes |= child$72.lanes | child$72.childLanes),
        (subtreeFlags |= child$72.subtreeFlags & 31457280),
        (subtreeFlags |= child$72.flags & 31457280),
        (child$72.return = completedWork),
        (child$72 = child$72.sibling);
  else
    for (child$72 = completedWork.child; null !== child$72; )
      (newChildLanes |= child$72.lanes | child$72.childLanes),
        (subtreeFlags |= child$72.subtreeFlags),
        (subtreeFlags |= child$72.flags),
        (child$72.return = completedWork),
        (child$72 = child$72.sibling);
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps;
  switch (workInProgress.tag) {
    case 28:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return bubbleProperties(workInProgress), null;
    case 1:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        bubbleProperties(workInProgress),
        null
      );
    case 3:
      return (
        (renderLanes = workInProgress.stateNode),
        (newProps = null),
        null !== current && (newProps = current.memoizedState.cache),
        workInProgress.memoizedState.cache !== newProps &&
          (workInProgress.flags |= 2048),
        popProvider(CacheContext),
        popHostContainer(),
        pop(didPerformWorkStackCursor),
        pop(contextStackCursor$1),
        renderLanes.pendingContext &&
          ((renderLanes.context = renderLanes.pendingContext),
          (renderLanes.pendingContext = null)),
        (null !== current && null !== current.child) ||
          null === current ||
          (current.memoizedState.isDehydrated &&
            0 === (workInProgress.flags & 256)) ||
          ((workInProgress.flags |= 1024),
          null !== hydrationErrors &&
            (queueRecoverableErrors(hydrationErrors),
            (hydrationErrors = null))),
        bubbleProperties(workInProgress),
        null
      );
    case 26:
    case 27:
    case 5:
      popHostContext(workInProgress);
      renderLanes = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && (workInProgress.flags |= 4);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(
              "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
            );
          bubbleProperties(workInProgress);
          return null;
        }
        current = {
          type: renderLanes,
          props: newProps,
          isHidden: !1,
          children: [],
          internalInstanceHandle: workInProgress,
          rootContainerInstance: rootInstanceStackCursor.current,
          tag: "INSTANCE"
        };
        a: for (renderLanes = workInProgress.child; null !== renderLanes; ) {
          if (5 === renderLanes.tag || 6 === renderLanes.tag) {
            newProps = renderLanes.stateNode;
            var index = current.children.indexOf(newProps);
            -1 !== index && current.children.splice(index, 1);
            current.children.push(newProps);
          } else if (4 !== renderLanes.tag && null !== renderLanes.child) {
            renderLanes.child.return = renderLanes;
            renderLanes = renderLanes.child;
            continue;
          }
          if (renderLanes === workInProgress) break a;
          for (; null === renderLanes.sibling; ) {
            if (
              null === renderLanes.return ||
              renderLanes.return === workInProgress
            )
              break a;
            renderLanes = renderLanes.return;
          }
          renderLanes.sibling.return = renderLanes.return;
          renderLanes = renderLanes.sibling;
        }
        workInProgress.stateNode = current;
      }
      bubbleProperties(workInProgress);
      workInProgress.flags &= -16777217;
      return null;
    case 6:
      if (current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && (workInProgress.flags |= 4);
      else {
        if ("string" !== typeof newProps && null === workInProgress.stateNode)
          throw Error(
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
          );
        workInProgress.stateNode = {
          text: newProps,
          isHidden: !1,
          tag: "TEXT"
        };
      }
      bubbleProperties(workInProgress);
      return null;
    case 13:
      newProps = workInProgress.memoizedState;
      if (
        null === current ||
        (null !== current.memoizedState &&
          null !== current.memoizedState.dehydrated)
      ) {
        if (null !== newProps && null !== newProps.dehydrated) {
          if (null === current) {
            throw Error(
              "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
            );
            throw Error(
              "Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
            );
          }
          0 === (workInProgress.flags & 128) &&
            (workInProgress.memoizedState = null);
          workInProgress.flags |= 4;
          bubbleProperties(workInProgress);
          index = !1;
        } else
          null !== hydrationErrors &&
            (queueRecoverableErrors(hydrationErrors), (hydrationErrors = null)),
            (index = !0);
        if (!index) {
          if (workInProgress.flags & 256)
            return popSuspenseHandler(workInProgress), workInProgress;
          popSuspenseHandler(workInProgress);
          return null;
        }
      }
      popSuspenseHandler(workInProgress);
      if (0 !== (workInProgress.flags & 128))
        return (workInProgress.lanes = renderLanes), workInProgress;
      renderLanes = null !== newProps;
      current = null !== current && null !== current.memoizedState;
      if (renderLanes) {
        newProps = workInProgress.child;
        index = null;
        null !== newProps.alternate &&
          null !== newProps.alternate.memoizedState &&
          null !== newProps.alternate.memoizedState.cachePool &&
          (index = newProps.alternate.memoizedState.cachePool.pool);
        var cache$76 = null;
        null !== newProps.memoizedState &&
          null !== newProps.memoizedState.cachePool &&
          (cache$76 = newProps.memoizedState.cachePool.pool);
        cache$76 !== index && (newProps.flags |= 2048);
      }
      renderLanes !== current &&
        renderLanes &&
        (workInProgress.child.flags |= 8192);
      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
      bubbleProperties(workInProgress);
      return null;
    case 4:
      return popHostContainer(), bubbleProperties(workInProgress), null;
    case 10:
      return (
        popProvider(workInProgress.type), bubbleProperties(workInProgress), null
      );
    case 17:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        bubbleProperties(workInProgress),
        null
      );
    case 19:
      pop(suspenseStackCursor);
      index = workInProgress.memoizedState;
      if (null === index) return bubbleProperties(workInProgress), null;
      newProps = 0 !== (workInProgress.flags & 128);
      cache$76 = index.rendering;
      if (null === cache$76)
        if (newProps) cutOffTailIfNeeded(index, !1);
        else {
          if (
            0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
          )
            for (current = workInProgress.child; null !== current; ) {
              cache$76 = findFirstSuspended(current);
              if (null !== cache$76) {
                workInProgress.flags |= 128;
                cutOffTailIfNeeded(index, !1);
                current = cache$76.updateQueue;
                workInProgress.updateQueue = current;
                scheduleRetryEffect(workInProgress, current);
                workInProgress.subtreeFlags = 0;
                current = renderLanes;
                for (renderLanes = workInProgress.child; null !== renderLanes; )
                  resetWorkInProgress(renderLanes, current),
                    (renderLanes = renderLanes.sibling);
                push(
                  suspenseStackCursor,
                  (suspenseStackCursor.current & 1) | 2
                );
                return workInProgress.child;
              }
              current = current.sibling;
            }
          null !== index.tail &&
            now() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (newProps = !0),
            cutOffTailIfNeeded(index, !1),
            (workInProgress.lanes = 4194304));
        }
      else {
        if (!newProps)
          if (((current = findFirstSuspended(cache$76)), null !== current)) {
            if (
              ((workInProgress.flags |= 128),
              (newProps = !0),
              (current = current.updateQueue),
              (workInProgress.updateQueue = current),
              scheduleRetryEffect(workInProgress, current),
              cutOffTailIfNeeded(index, !0),
              null === index.tail &&
                "hidden" === index.tailMode &&
                !cache$76.alternate)
            )
              return bubbleProperties(workInProgress), null;
          } else
            2 * now() - index.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              536870912 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (newProps = !0),
              cutOffTailIfNeeded(index, !1),
              (workInProgress.lanes = 4194304));
        index.isBackwards
          ? ((cache$76.sibling = workInProgress.child),
            (workInProgress.child = cache$76))
          : ((current = index.last),
            null !== current
              ? (current.sibling = cache$76)
              : (workInProgress.child = cache$76),
            (index.last = cache$76));
      }
      if (null !== index.tail)
        return (
          (workInProgress = index.tail),
          (index.rendering = workInProgress),
          (index.tail = workInProgress.sibling),
          (index.renderingStartTime = now()),
          (workInProgress.sibling = null),
          (current = suspenseStackCursor.current),
          push(suspenseStackCursor, newProps ? (current & 1) | 2 : current & 1),
          workInProgress
        );
      bubbleProperties(workInProgress);
      return null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        (newProps = null !== workInProgress.memoizedState),
        null !== current
          ? (null !== current.memoizedState) !== newProps &&
            (workInProgress.flags |= 8192)
          : newProps && (workInProgress.flags |= 8192),
        newProps && 0 !== (workInProgress.mode & 1)
          ? 0 !== (renderLanes & 536870912) &&
            0 === (workInProgress.flags & 128) &&
            (bubbleProperties(workInProgress),
            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
          : bubbleProperties(workInProgress),
        (renderLanes = workInProgress.updateQueue),
        null !== renderLanes &&
          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
        (renderLanes = null),
        null !== current &&
          null !== current.memoizedState &&
          null !== current.memoizedState.cachePool &&
          (renderLanes = current.memoizedState.cachePool.pool),
        (newProps = null),
        null !== workInProgress.memoizedState &&
          null !== workInProgress.memoizedState.cachePool &&
          (newProps = workInProgress.memoizedState.cachePool.pool),
        newProps !== renderLanes && (workInProgress.flags |= 2048),
        null !== current && pop(resumedCache),
        null
      );
    case 24:
      return (
        (renderLanes = null),
        null !== current && (renderLanes = current.memoizedState.cache),
        workInProgress.memoizedState.cache !== renderLanes &&
          (workInProgress.flags |= 2048),
        popProvider(CacheContext),
        bubbleProperties(workInProgress),
        null
      );
    case 25:
      return null;
  }
  throw Error(
    "Unknown unit of work tag (" +
      workInProgress.tag +
      "). This error is likely caused by a bug in React. Please file an issue."
  );
}
function unwindWork(current, workInProgress) {
  switch (workInProgress.tag) {
    case 1:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 3:
      return (
        popProvider(CacheContext),
        popHostContainer(),
        pop(didPerformWorkStackCursor),
        pop(contextStackCursor$1),
        (current = workInProgress.flags),
        0 !== (current & 65536) && 0 === (current & 128)
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 26:
    case 27:
    case 5:
      return popHostContext(workInProgress), null;
    case 13:
      popSuspenseHandler(workInProgress);
      current = workInProgress.memoizedState;
      if (
        null !== current &&
        null !== current.dehydrated &&
        null === workInProgress.alternate
      )
        throw Error(
          "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
        );
      current = workInProgress.flags;
      return current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
        : null;
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return popProvider(workInProgress.type), null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        null !== current && pop(resumedCache),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 24:
      return popProvider(CacheContext), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function unwindInterruptedWork(current, interruptedWork) {
  switch (interruptedWork.tag) {
    case 1:
      current = interruptedWork.type.childContextTypes;
      null !== current && void 0 !== current && popContext();
      break;
    case 3:
      popProvider(CacheContext);
      popHostContainer();
      pop(didPerformWorkStackCursor);
      pop(contextStackCursor$1);
      break;
    case 26:
    case 27:
    case 5:
      popHostContext(interruptedWork);
      break;
    case 4:
      popHostContainer();
      break;
    case 13:
      popSuspenseHandler(interruptedWork);
      break;
    case 19:
      pop(suspenseStackCursor);
      break;
    case 10:
      popProvider(interruptedWork.type);
      break;
    case 22:
    case 23:
      popSuspenseHandler(interruptedWork);
      popHiddenContext();
      null !== current && pop(resumedCache);
      break;
    case 24:
      popProvider(CacheContext);
  }
}
var offscreenSubtreeIsHidden = !1,
  offscreenSubtreeWasHidden = !1,
  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
  nextEffect = null;
function callComponentWillUnmountWithTimer(current, instance) {
  instance.props = resolveClassComponentProps(
    current.type,
    current.memoizedProps,
    current.elementType === current.type
  );
  instance.state = current.memoizedState;
  instance.componentWillUnmount();
}
function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    var ref = current.ref;
    if (null !== ref) {
      var instance = current.stateNode;
      switch (current.tag) {
        case 26:
        case 27:
        case 5:
          var instanceToUse = getPublicInstance(instance);
          break;
        default:
          instanceToUse = instance;
      }
      "function" === typeof ref
        ? (current.refCleanup = ref(instanceToUse))
        : (ref.current = instanceToUse);
    }
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyDetachRef(current, nearestMountedAncestor) {
  var ref = current.ref,
    refCleanup = current.refCleanup;
  if (null !== ref)
    if ("function" === typeof refCleanup)
      try {
        refCleanup();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      } finally {
        (current.refCleanup = null),
          (current = current.alternate),
          null != current && (current.refCleanup = null);
      }
    else if ("function" === typeof ref)
      try {
        ref(null);
      } catch (error$92) {
        captureCommitPhaseError(current, nearestMountedAncestor, error$92);
      }
    else ref.current = null;
}
function safelyCallDestroy(current, nearestMountedAncestor, destroy) {
  try {
    destroy();
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
var shouldFireAfterActiveInstanceBlur = !1;
function commitBeforeMutationEffects(root, firstChild) {
  for (nextEffect = firstChild; null !== nextEffect; )
    if (
      ((root = nextEffect),
      (firstChild = root.child),
      0 !== (root.subtreeFlags & 1028) && null !== firstChild)
    )
      (firstChild.return = root), (nextEffect = firstChild);
    else
      for (; null !== nextEffect; ) {
        root = nextEffect;
        try {
          var current = root.alternate,
            flags = root.flags;
          switch (root.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (0 !== (flags & 1024) && null !== current) {
                var prevState = current.memoizedState,
                  instance = root.stateNode,
                  snapshot = instance.getSnapshotBeforeUpdate(
                    resolveClassComponentProps(
                      root.type,
                      current.memoizedProps,
                      root.elementType === root.type
                    ),
                    prevState
                  );
                instance.__reactInternalSnapshotBeforeUpdate = snapshot;
              }
              break;
            case 3:
              0 !== (flags & 1024) &&
                root.stateNode.containerInfo.children.splice(0);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (0 !== (flags & 1024))
                throw Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                );
          }
        } catch (error) {
          captureCommitPhaseError(root, root.return, error);
        }
        firstChild = root.sibling;
        if (null !== firstChild) {
          firstChild.return = root.return;
          nextEffect = firstChild;
          break;
        }
        nextEffect = root.return;
      }
  current = shouldFireAfterActiveInstanceBlur;
  shouldFireAfterActiveInstanceBlur = !1;
  return current;
}
function commitHookEffectListUnmount(
  flags,
  finishedWork,
  nearestMountedAncestor
) {
  var updateQueue = finishedWork.updateQueue;
  updateQueue = null !== updateQueue ? updateQueue.lastEffect : null;
  if (null !== updateQueue) {
    var effect = (updateQueue = updateQueue.next);
    do {
      if ((effect.tag & flags) === flags) {
        var inst = effect.inst,
          destroy = inst.destroy;
        void 0 !== destroy &&
          ((inst.destroy = void 0),
          safelyCallDestroy(finishedWork, nearestMountedAncestor, destroy));
      }
      effect = effect.next;
    } while (effect !== updateQueue);
  }
}
function commitHookEffectListMount(flags, finishedWork) {
  finishedWork = finishedWork.updateQueue;
  finishedWork = null !== finishedWork ? finishedWork.lastEffect : null;
  if (null !== finishedWork) {
    var effect = (finishedWork = finishedWork.next);
    do {
      if ((effect.tag & flags) === flags) {
        var create$93 = effect.create,
          inst = effect.inst;
        create$93 = create$93();
        inst.destroy = create$93;
      }
      effect = effect.next;
    } while (effect !== finishedWork);
  }
}
function commitHookLayoutEffects(finishedWork, hookFlags) {
  try {
    commitHookEffectListMount(hookFlags, finishedWork);
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitClassCallbacks(finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  if (null !== updateQueue) {
    var instance = finishedWork.stateNode;
    try {
      commitCallbacks(updateQueue, instance);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitHookLayoutEffects(finishedWork, 5);
      break;
    case 1:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 4)
        if (((finishedRoot = finishedWork.stateNode), null === current))
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        else {
          var prevProps = resolveClassComponentProps(
            finishedWork.type,
            current.memoizedProps,
            finishedWork.elementType === finishedWork.type
          );
          current = current.memoizedState;
          try {
            finishedRoot.componentDidUpdate(
              prevProps,
              current,
              finishedRoot.__reactInternalSnapshotBeforeUpdate
            );
          } catch (error$94) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$94
            );
          }
        }
      flags & 64 && commitClassCallbacks(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 64 && ((flags = finishedWork.updateQueue), null !== flags)) {
        finishedRoot = null;
        if (null !== finishedWork.child)
          switch (finishedWork.child.tag) {
            case 27:
            case 5:
              finishedRoot = getPublicInstance(finishedWork.child.stateNode);
              break;
            case 1:
              finishedRoot = finishedWork.child.stateNode;
          }
        try {
          commitCallbacks(flags, finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 26:
    case 27:
    case 5:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 12:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      break;
    case 13:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      break;
    case 22:
      if (0 !== (finishedWork.mode & 1)) {
        if (
          ((prevProps =
            null !== finishedWork.memoizedState || offscreenSubtreeIsHidden),
          !prevProps)
        ) {
          current =
            (null !== current && null !== current.memoizedState) ||
            offscreenSubtreeWasHidden;
          var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
            prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevProps;
          (offscreenSubtreeWasHidden = current) &&
          !prevOffscreenSubtreeWasHidden
            ? recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                0 !== (finishedWork.subtreeFlags & 8772)
              )
            : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
        }
      } else recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 512 &&
        ("manual" === finishedWork.memoizedProps.mode
          ? safelyAttachRef(finishedWork, finishedWork.return)
          : safelyDetachRef(finishedWork, finishedWork.return));
      break;
    default:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
  }
}
function detachFiberAfterEffects(fiber) {
  var alternate = fiber.alternate;
  null !== alternate &&
    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  fiber.stateNode = null;
  fiber.return = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
function isHostParent(fiber) {
  return 5 === fiber.tag || 3 === fiber.tag || 4 === fiber.tag;
}
function getHostSibling(fiber) {
  a: for (;;) {
    for (; null === fiber.sibling; ) {
      if (null === fiber.return || isHostParent(fiber.return)) return null;
      fiber = fiber.return;
    }
    fiber.sibling.return = fiber.return;
    for (
      fiber = fiber.sibling;
      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

    ) {
      if (fiber.flags & 2) continue a;
      if (null === fiber.child || 4 === fiber.tag) continue a;
      else (fiber.child.return = fiber), (fiber = fiber.child);
    }
    if (!(fiber.flags & 2)) return fiber.stateNode;
  }
}
function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before ? insertBefore(parent, node, before) : appendChild(parent, node);
  else if (4 !== tag && ((node = node.child), null !== node))
    for (
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        (node = node.sibling);
}
function insertOrAppendPlacementNode(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before ? insertBefore(parent, node, before) : appendChild(parent, node);
  else if (4 !== tag && ((node = node.child), null !== node))
    for (
      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
}
var hostParent = null;
function recursivelyTraverseDeletionEffects(
  finishedRoot,
  nearestMountedAncestor,
  parent
) {
  for (parent = parent.child; null !== parent; )
    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
      (parent = parent.sibling);
}
function commitDeletionEffectsOnFiber(
  finishedRoot,
  nearestMountedAncestor,
  deletedFiber
) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
    try {
      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
    } catch (err) {}
  switch (deletedFiber.tag) {
    case 26:
    case 27:
    case 5:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    case 6:
      var prevHostParent = hostParent;
      hostParent = null;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      null !== hostParent &&
        ((finishedRoot = hostParent),
        (deletedFiber = finishedRoot.children.indexOf(deletedFiber.stateNode)),
        finishedRoot.children.splice(deletedFiber, 1));
      break;
    case 18:
      null !== hostParent && shim$1();
      break;
    case 4:
      prevHostParent = hostParent;
      hostParent = deletedFiber.stateNode.containerInfo;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !offscreenSubtreeWasHidden &&
        ((prevHostParent = deletedFiber.updateQueue),
        null !== prevHostParent &&
          ((prevHostParent = prevHostParent.lastEffect),
          null !== prevHostParent))
      ) {
        var effect = (prevHostParent = prevHostParent.next);
        do {
          var tag = effect.tag,
            inst = effect.inst,
            destroy = inst.destroy;
          void 0 !== destroy &&
            (0 !== (tag & 2)
              ? ((inst.destroy = void 0),
                safelyCallDestroy(
                  deletedFiber,
                  nearestMountedAncestor,
                  destroy
                ))
              : 0 !== (tag & 4) &&
                ((inst.destroy = void 0),
                safelyCallDestroy(
                  deletedFiber,
                  nearestMountedAncestor,
                  destroy
                )));
          effect = effect.next;
        } while (effect !== prevHostParent);
      }
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 1:
      if (
        !offscreenSubtreeWasHidden &&
        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
        (prevHostParent = deletedFiber.stateNode),
        "function" === typeof prevHostParent.componentWillUnmount)
      )
        try {
          callComponentWillUnmountWithTimer(deletedFiber, prevHostParent);
        } catch (error) {
          captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
        }
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 21:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 22:
      safelyDetachRef(deletedFiber, nearestMountedAncestor);
      deletedFiber.mode & 1
        ? ((offscreenSubtreeWasHidden =
            (prevHostParent = offscreenSubtreeWasHidden) ||
            null !== deletedFiber.memoizedState),
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          ),
          (offscreenSubtreeWasHidden = prevHostParent))
        : recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
      break;
    default:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
  }
}
function getRetryCache(finishedWork) {
  switch (finishedWork.tag) {
    case 13:
    case 19:
      var retryCache = finishedWork.stateNode;
      null === retryCache &&
        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
      return retryCache;
    case 22:
      return (
        (finishedWork = finishedWork.stateNode),
        (retryCache = finishedWork._retryCache),
        null === retryCache &&
          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
        retryCache
      );
    default:
      throw Error(
        "Unexpected Suspense handler tag (" +
          finishedWork.tag +
          "). This is a bug in React."
      );
  }
}
function attachSuspenseRetryListeners(finishedWork, wakeables) {
  var retryCache = getRetryCache(finishedWork);
  wakeables.forEach(function (wakeable) {
    var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
    retryCache.has(wakeable) ||
      (retryCache.add(wakeable), wakeable.then(retry, retry));
  });
}
function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
  var deletions = parentFiber.deletions;
  if (null !== deletions)
    for (var i = 0; i < deletions.length; i++) {
      var childToDelete = deletions[i];
      try {
        var root = root$jscomp$0,
          returnFiber = parentFiber,
          parent = returnFiber;
        a: for (; null !== parent; ) {
          switch (parent.tag) {
            case 27:
            case 5:
              hostParent = parent.stateNode;
              break a;
            case 3:
              hostParent = parent.stateNode.containerInfo;
              break a;
            case 4:
              hostParent = parent.stateNode.containerInfo;
              break a;
          }
          parent = parent.return;
        }
        if (null === hostParent)
          throw Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
          );
        commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
        hostParent = null;
        var alternate = childToDelete.alternate;
        null !== alternate && (alternate.return = null);
        childToDelete.return = null;
      } catch (error) {
        captureCommitPhaseError(childToDelete, parentFiber, error);
      }
    }
  if (parentFiber.subtreeFlags & 13878)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
        (parentFiber = parentFiber.sibling);
}
function commitMutationEffectsOnFiber(finishedWork, root) {
  var current = finishedWork.alternate,
    flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        try {
          commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
            commitHookEffectListMount(3, finishedWork);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
        try {
          commitHookEffectListUnmount(5, finishedWork, finishedWork.return);
        } catch (error$102) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$102);
        }
      }
      break;
    case 1:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      if (
        flags & 64 &&
        offscreenSubtreeIsHidden &&
        ((finishedWork = finishedWork.updateQueue),
        null !== finishedWork &&
          ((flags = finishedWork.callbacks), null !== flags))
      ) {
        var existingHiddenCallbacks = finishedWork.shared.hiddenCallbacks;
        finishedWork.shared.hiddenCallbacks =
          null === existingHiddenCallbacks
            ? flags
            : existingHiddenCallbacks.concat(flags);
      }
      break;
    case 26:
    case 27:
    case 5:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      if (flags & 4 && ((flags = finishedWork.stateNode), null != flags)) {
        existingHiddenCallbacks = finishedWork.memoizedProps;
        var type = finishedWork.type;
        try {
          (flags.type = type), (flags.props = existingHiddenCallbacks);
        } catch (error$105) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$105);
        }
      }
      break;
    case 6:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        if (null === finishedWork.stateNode)
          throw Error(
            "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
          );
        flags = finishedWork.stateNode;
        existingHiddenCallbacks = finishedWork.memoizedProps;
        try {
          flags.text = existingHiddenCallbacks;
        } catch (error$106) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$106);
        }
      }
      break;
    case 3:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      break;
    case 4:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      break;
    case 13:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      finishedWork.child.flags & 8192 &&
        ((existingHiddenCallbacks =
          null !== current && null !== current.memoizedState),
        null === finishedWork.memoizedState ||
          existingHiddenCallbacks ||
          (globalMostRecentFallbackTime = now()));
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 22:
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      existingHiddenCallbacks = null !== finishedWork.memoizedState;
      var wasHidden = null !== current && null !== current.memoizedState;
      if (finishedWork.mode & 1) {
        var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
          prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
        offscreenSubtreeIsHidden =
          prevOffscreenSubtreeIsHidden || existingHiddenCallbacks;
        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
        recursivelyTraverseMutationEffects(root, finishedWork);
        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
        offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
      } else recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      root = finishedWork.stateNode;
      root._current = finishedWork;
      root._visibility &= -3;
      root._visibility |= root._pendingVisibility & 2;
      if (
        flags & 8192 &&
        ((root._visibility = existingHiddenCallbacks
          ? root._visibility & -2
          : root._visibility | 1),
        existingHiddenCallbacks &&
          ((root = offscreenSubtreeIsHidden || offscreenSubtreeWasHidden),
          null === current ||
            wasHidden ||
            root ||
            (0 !== (finishedWork.mode & 1) &&
              recursivelyTraverseDisappearLayoutEffects(finishedWork))),
        null === finishedWork.memoizedProps ||
          "manual" !== finishedWork.memoizedProps.mode)
      )
        a: for (current = null, wasHidden = finishedWork; ; ) {
          if (5 === wasHidden.tag) {
            if (null === current) {
              current = wasHidden;
              try {
                (type = wasHidden.stateNode),
                  existingHiddenCallbacks
                    ? (type.isHidden = !0)
                    : (wasHidden.stateNode.isHidden = !1);
              } catch (error) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error
                );
              }
            }
          } else if (6 === wasHidden.tag) {
            if (null === current)
              try {
                wasHidden.stateNode.isHidden = existingHiddenCallbacks
                  ? !0
                  : !1;
              } catch (error$96) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error$96
                );
              }
          } else if (
            ((22 !== wasHidden.tag && 23 !== wasHidden.tag) ||
              null === wasHidden.memoizedState ||
              wasHidden === finishedWork) &&
            null !== wasHidden.child
          ) {
            wasHidden.child.return = wasHidden;
            wasHidden = wasHidden.child;
            continue;
          }
          if (wasHidden === finishedWork) break a;
          for (; null === wasHidden.sibling; ) {
            if (null === wasHidden.return || wasHidden.return === finishedWork)
              break a;
            current === wasHidden && (current = null);
            wasHidden = wasHidden.return;
          }
          current === wasHidden && (current = null);
          wasHidden.sibling.return = wasHidden.return;
          wasHidden = wasHidden.sibling;
        }
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((existingHiddenCallbacks = flags.retryQueue),
          null !== existingHiddenCallbacks &&
            ((flags.retryQueue = null),
            attachSuspenseRetryListeners(
              finishedWork,
              existingHiddenCallbacks
            ))));
      break;
    case 19:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 21:
      break;
    default:
      recursivelyTraverseMutationEffects(root, finishedWork),
        commitReconciliationEffects(finishedWork);
  }
}
function commitReconciliationEffects(finishedWork) {
  var flags = finishedWork.flags;
  if (flags & 2) {
    try {
      a: {
        for (var parent = finishedWork.return; null !== parent; ) {
          if (isHostParent(parent)) {
            var JSCompiler_inline_result = parent;
            break a;
          }
          parent = parent.return;
        }
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      switch (JSCompiler_inline_result.tag) {
        case 27:
        case 5:
          var parent$jscomp$0 = JSCompiler_inline_result.stateNode;
          JSCompiler_inline_result.flags & 32 &&
            (JSCompiler_inline_result.flags &= -33);
          var before = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before, parent$jscomp$0);
          break;
        case 3:
        case 4:
          var parent$97 = JSCompiler_inline_result.stateNode.containerInfo,
            before$98 = getHostSibling(finishedWork);
          insertOrAppendPlacementNodeIntoContainer(
            finishedWork,
            before$98,
            parent$97
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    finishedWork.flags &= -3;
  }
  flags & 4096 && (finishedWork.flags &= -4097);
}
function recursivelyTraverseLayoutEffects(root, parentFiber) {
  if (parentFiber.subtreeFlags & 8772)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
        (parentFiber = parentFiber.sibling);
}
function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedWork = parentFiber;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 1:
        safelyDetachRef(finishedWork, finishedWork.return);
        var instance = finishedWork.stateNode;
        if ("function" === typeof instance.componentWillUnmount) {
          var current = finishedWork,
            nearestMountedAncestor = finishedWork.return;
          try {
            callComponentWillUnmountWithTimer(current, instance);
          } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
          }
        }
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 26:
      case 27:
      case 5:
        safelyDetachRef(finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 22:
        safelyDetachRef(finishedWork, finishedWork.return);
        null === finishedWork.memoizedState &&
          recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      default:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseReappearLayoutEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        commitHookLayoutEffects(finishedWork, 4);
        break;
      case 1:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        var instance = finishedWork.stateNode;
        if ("function" === typeof instance.componentDidMount)
          try {
            instance.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        finishedRoot = finishedWork.updateQueue;
        if (null !== finishedRoot) {
          var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
          if (null !== hiddenCallbacks)
            for (
              finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
              finishedRoot < hiddenCallbacks.length;
              finishedRoot++
            )
              callCallback(hiddenCallbacks[finishedRoot], instance);
        }
        includeWorkInProgressEffects &&
          flags & 64 &&
          commitClassCallbacks(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 26:
      case 27:
      case 5:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 12:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        break;
      case 13:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseReappearLayoutEffects(
            finishedRoot,
            finishedWork,
            includeWorkInProgressEffects
          );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      default:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitHookPassiveMountEffects(finishedWork, hookFlags) {
  try {
    commitHookEffectListMount(hookFlags, finishedWork);
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitOffscreenPassiveMountEffects(current, finishedWork) {
  var previousCache = null;
  null !== current &&
    null !== current.memoizedState &&
    null !== current.memoizedState.cachePool &&
    (previousCache = current.memoizedState.cachePool.pool);
  current = null;
  null !== finishedWork.memoizedState &&
    null !== finishedWork.memoizedState.cachePool &&
    (current = finishedWork.memoizedState.cachePool.pool);
  current !== previousCache &&
    (null != current && current.refCount++,
    null != previousCache && releaseCache(previousCache));
}
function commitCachePassiveMountEffect(current, finishedWork) {
  current = null;
  null !== finishedWork.alternate &&
    (current = finishedWork.alternate.memoizedState.cache);
  finishedWork = finishedWork.memoizedState.cache;
  finishedWork !== current &&
    (finishedWork.refCount++, null != current && releaseCache(current));
}
function recursivelyTraversePassiveMountEffects(
  root,
  parentFiber,
  committedLanes,
  committedTransitions
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveMountOnFiber(
        root,
        parentFiber,
        committedLanes,
        committedTransitions
      ),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveMountOnFiber(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions
) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && commitHookPassiveMountEffects(finishedWork, 9);
      break;
    case 3:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        ((finishedRoot = null),
        null !== finishedWork.alternate &&
          (finishedRoot = finishedWork.alternate.memoizedState.cache),
        (finishedWork = finishedWork.memoizedState.cache),
        finishedWork !== finishedRoot &&
          (finishedWork.refCount++,
          null != finishedRoot && releaseCache(finishedRoot)));
      break;
    case 23:
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState
        ? instance._visibility & 4
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : finishedWork.mode & 1
          ? recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
          : ((instance._visibility |= 4),
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            ))
        : instance._visibility & 4
        ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          )
        : ((instance._visibility |= 4),
          recursivelyTraverseReconnectPassiveEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions,
            0 !== (finishedWork.subtreeFlags & 10256)
          ));
      flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork
        );
      break;
    case 24:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
      break;
    default:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
  }
}
function recursivelyTraverseReconnectPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  committedLanes$jscomp$0,
  committedTransitions$jscomp$0,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      committedLanes = committedLanes$jscomp$0,
      committedTransitions = committedTransitions$jscomp$0,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        commitHookPassiveMountEffects(finishedWork, 8);
        break;
      case 23:
        break;
      case 22:
        var instance = finishedWork.stateNode;
        null !== finishedWork.memoizedState
          ? instance._visibility & 4
            ? recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              )
            : finishedWork.mode & 1
            ? recursivelyTraverseAtomicPassiveEffects(
                finishedRoot,
                finishedWork
              )
            : ((instance._visibility |= 4),
              recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              ))
          : ((instance._visibility |= 4),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork
          );
        break;
      case 24:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
        break;
      default:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseAtomicPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var finishedRoot = finishedRoot$jscomp$0,
        finishedWork = parentFiber,
        flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 22:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
          break;
        case 24:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
      }
      parentFiber = parentFiber.sibling;
    }
}
var suspenseyCommitFlag = 8192;
function recursivelyAccumulateSuspenseyCommit(parentFiber) {
  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      accumulateSuspenseyCommitOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function accumulateSuspenseyCommitOnFiber(fiber) {
  switch (fiber.tag) {
    case 26:
      recursivelyAccumulateSuspenseyCommit(fiber);
      fiber.flags & suspenseyCommitFlag &&
        null !== fiber.memoizedState &&
        shim();
      break;
    case 5:
      recursivelyAccumulateSuspenseyCommit(fiber);
      break;
    case 3:
    case 4:
      recursivelyAccumulateSuspenseyCommit(fiber);
      break;
    case 22:
      if (null === fiber.memoizedState) {
        var current = fiber.alternate;
        null !== current && null !== current.memoizedState
          ? ((current = suspenseyCommitFlag),
            (suspenseyCommitFlag = 16777216),
            recursivelyAccumulateSuspenseyCommit(fiber),
            (suspenseyCommitFlag = current))
          : recursivelyAccumulateSuspenseyCommit(fiber);
      }
      break;
    default:
      recursivelyAccumulateSuspenseyCommit(fiber);
  }
}
function detachAlternateSiblings(parentFiber) {
  var previousFiber = parentFiber.alternate;
  if (
    null !== previousFiber &&
    ((parentFiber = previousFiber.child), null !== parentFiber)
  ) {
    previousFiber.child = null;
    do
      (previousFiber = parentFiber.sibling),
        (parentFiber.sibling = null),
        (parentFiber = previousFiber);
    while (null !== parentFiber);
  }
}
function recursivelyTraversePassiveUnmountEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveUnmountOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveUnmountOnFiber(finishedWork) {
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      finishedWork.flags & 2048 &&
        commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState &&
      instance._visibility & 4 &&
      (null === finishedWork.return || 13 !== finishedWork.return.tag)
        ? ((instance._visibility &= -5),
          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
        : recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    default:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    deletions = parentFiber;
    switch (deletions.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, deletions, deletions.return);
        recursivelyTraverseDisconnectPassiveEffects(deletions);
        break;
      case 22:
        i = deletions.stateNode;
        i._visibility & 4 &&
          ((i._visibility &= -5),
          recursivelyTraverseDisconnectPassiveEffects(deletions));
        break;
      default:
        recursivelyTraverseDisconnectPassiveEffects(deletions);
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
  deletedSubtreeRoot,
  nearestMountedAncestor
) {
  for (; null !== nextEffect; ) {
    var fiber = nextEffect;
    switch (fiber.tag) {
      case 0:
      case 11:
      case 15:
        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
        break;
      case 23:
      case 22:
        if (
          null !== fiber.memoizedState &&
          null !== fiber.memoizedState.cachePool
        ) {
          var cache = fiber.memoizedState.cachePool.pool;
          null != cache && cache.refCount++;
        }
        break;
      case 24:
        releaseCache(fiber.memoizedState.cache);
    }
    cache = fiber.child;
    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
    else
      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
        cache = nextEffect;
        var sibling = cache.sibling,
          returnFiber = cache.return;
        detachFiberAfterEffects(cache);
        if (cache === fiber) {
          nextEffect = null;
          break a;
        }
        if (null !== sibling) {
          sibling.return = returnFiber;
          nextEffect = sibling;
          break a;
        }
        nextEffect = returnFiber;
      }
  }
}
var DefaultAsyncDispatcher = {
    getCacheForType: function (resourceType) {
      var cache = readContext(CacheContext),
        cacheForType = cache.data.get(resourceType);
      void 0 === cacheForType &&
        ((cacheForType = resourceType()),
        cache.data.set(resourceType, cacheForType));
      return cacheForType;
    }
  },
  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
  executionContext = 0,
  workInProgressRoot = null,
  workInProgress = null,
  workInProgressRootRenderLanes = 0,
  workInProgressSuspendedReason = 0,
  workInProgressThrownValue = null,
  workInProgressRootDidAttachPingListener = !1,
  entangledRenderLanes = 0,
  workInProgressRootExitStatus = 0,
  workInProgressRootSkippedLanes = 0,
  workInProgressRootInterleavedUpdatedLanes = 0,
  workInProgressRootPingedLanes = 0,
  workInProgressDeferredLane = 0,
  workInProgressRootConcurrentErrors = null,
  workInProgressRootRecoverableErrors = null,
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1,
  globalMostRecentFallbackTime = 0,
  workInProgressRootRenderTargetTime = Infinity,
  workInProgressTransitions = null,
  legacyErrorBoundariesThatAlreadyFailed = null,
  rootDoesHavePassiveEffects = !1,
  rootWithPendingPassiveEffects = null,
  pendingPassiveEffectsLanes = 0,
  pendingPassiveEffectsRemainingLanes = 0,
  pendingPassiveTransitions = null,
  nestedUpdateCount = 0,
  rootWithNestedUpdates = null;
function requestUpdateLane(fiber) {
  if (0 === (fiber.mode & 1)) return 2;
  if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
  if (null !== ReactSharedInternals.T)
    return (
      (fiber = currentEntangledLane),
      0 !== fiber ? fiber : requestTransitionLane()
    );
  fiber = 0 !== currentUpdatePriority ? currentUpdatePriority : 32;
  return fiber;
}
function scheduleUpdateOnFiber(root, fiber, lane) {
  if (
    (root === workInProgressRoot && 2 === workInProgressSuspendedReason) ||
    null !== root.cancelPendingCommit
  )
    prepareFreshStack(root, 0),
      markRootSuspended(
        root,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane
      );
  markRootUpdated$1(root, lane);
  if (0 === (executionContext & 2) || root !== workInProgressRoot)
    root === workInProgressRoot &&
      (0 === (executionContext & 2) &&
        (workInProgressRootInterleavedUpdatedLanes |= lane),
      4 === workInProgressRootExitStatus &&
        markRootSuspended(
          root,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane
        )),
      ensureRootIsScheduled(root),
      2 === lane &&
        0 === executionContext &&
        0 === (fiber.mode & 1) &&
        ((workInProgressRootRenderTargetTime = now() + 500),
        flushSyncWorkAcrossRoots_impl(!0));
}
function performConcurrentWorkOnRoot(root, didTimeout) {
  if (0 !== (executionContext & 6))
    throw Error("Should not already be working.");
  var originalCallbackNode = root.callbackNode;
  if (flushPassiveEffects() && root.callbackNode !== originalCallbackNode)
    return null;
  var lanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : 0
  );
  if (0 === lanes) return null;
  var exitStatus = (didTimeout =
    !includesBlockingLane(root, lanes) &&
    0 === (lanes & root.expiredLanes) &&
    !didTimeout)
    ? renderRootConcurrent(root, lanes)
    : renderRootSync(root, lanes);
  if (0 !== exitStatus) {
    var renderWasConcurrent = didTimeout;
    do {
      if (6 === exitStatus) markRootSuspended(root, lanes, 0);
      else {
        didTimeout = root.current.alternate;
        if (
          renderWasConcurrent &&
          !isRenderConsistentWithExternalStores(didTimeout)
        ) {
          exitStatus = renderRootSync(root, lanes);
          renderWasConcurrent = !1;
          continue;
        }
        if (2 === exitStatus) {
          renderWasConcurrent = lanes;
          var errorRetryLanes = getLanesToRetrySynchronouslyOnError(
            root,
            renderWasConcurrent
          );
          if (
            0 !== errorRetryLanes &&
            ((lanes = errorRetryLanes),
            (exitStatus = recoverFromConcurrentError(
              root,
              renderWasConcurrent,
              errorRetryLanes
            )),
            (renderWasConcurrent = !1),
            2 !== exitStatus)
          )
            continue;
        }
        if (1 === exitStatus) {
          prepareFreshStack(root, 0);
          markRootSuspended(root, lanes, 0);
          break;
        }
        root.finishedWork = didTimeout;
        root.finishedLanes = lanes;
        a: {
          renderWasConcurrent = root;
          switch (exitStatus) {
            case 0:
            case 1:
              throw Error("Root did not complete. This is a bug in React.");
            case 4:
              if ((lanes & 4194176) === lanes) {
                markRootSuspended(
                  renderWasConcurrent,
                  lanes,
                  workInProgressDeferredLane
                );
                break a;
              }
              break;
            case 2:
              workInProgressRootRecoverableErrors = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error("Unknown root exit status.");
          }
          if (
            (lanes & 62914560) === lanes &&
            3 === exitStatus &&
            ((exitStatus = globalMostRecentFallbackTime + 300 - now()),
            10 < exitStatus)
          ) {
            markRootSuspended(
              renderWasConcurrent,
              lanes,
              workInProgressDeferredLane
            );
            if (0 !== getNextLanes(renderWasConcurrent, 0)) break a;
            renderWasConcurrent.timeoutHandle = scheduleTimeout(
              commitRootWhenReady.bind(
                null,
                renderWasConcurrent,
                didTimeout,
                workInProgressRootRecoverableErrors,
                workInProgressTransitions,
                workInProgressRootDidIncludeRecursiveRenderUpdate,
                lanes,
                workInProgressDeferredLane
              ),
              exitStatus
            );
            break a;
          }
          commitRootWhenReady(
            renderWasConcurrent,
            didTimeout,
            workInProgressRootRecoverableErrors,
            workInProgressTransitions,
            workInProgressRootDidIncludeRecursiveRenderUpdate,
            lanes,
            workInProgressDeferredLane
          );
        }
      }
      break;
    } while (1);
  }
  ensureRootIsScheduled(root);
  scheduleTaskForRootDuringMicrotask(root, now());
  root =
    root.callbackNode === originalCallbackNode
      ? performConcurrentWorkOnRoot.bind(null, root)
      : null;
  return root;
}
function recoverFromConcurrentError(
  root,
  originallyAttemptedLanes,
  errorRetryLanes
) {
  var errorsFromFirstAttempt = workInProgressRootConcurrentErrors;
  errorRetryLanes = renderRootSync(root, errorRetryLanes);
  if (2 !== errorRetryLanes) {
    if (workInProgressRootDidAttachPingListener)
      return (
        (root.errorRecoveryDisabledLanes |= originallyAttemptedLanes),
        (workInProgressRootInterleavedUpdatedLanes |= originallyAttemptedLanes),
        4
      );
    root = workInProgressRootRecoverableErrors;
    workInProgressRootRecoverableErrors = errorsFromFirstAttempt;
    null !== root && queueRecoverableErrors(root);
  }
  return errorRetryLanes;
}
function queueRecoverableErrors(errors) {
  null === workInProgressRootRecoverableErrors
    ? (workInProgressRootRecoverableErrors = errors)
    : workInProgressRootRecoverableErrors.push.apply(
        workInProgressRootRecoverableErrors,
        errors
      );
}
function commitRootWhenReady(
  root,
  finishedWork,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  lanes,
  spawnedLane
) {
  lanes = finishedWork.subtreeFlags;
  (lanes & 8192 || 16785408 === (lanes & 16785408)) &&
    accumulateSuspenseyCommitOnFiber(finishedWork);
  commitRoot(
    root,
    recoverableErrors,
    transitions,
    didIncludeRenderPhaseUpdate,
    spawnedLane
  );
}
function isRenderConsistentWithExternalStores(finishedWork) {
  for (var node = finishedWork; ; ) {
    if (node.flags & 16384) {
      var updateQueue = node.updateQueue;
      if (
        null !== updateQueue &&
        ((updateQueue = updateQueue.stores), null !== updateQueue)
      )
        for (var i = 0; i < updateQueue.length; i++) {
          var check = updateQueue[i],
            getSnapshot = check.getSnapshot;
          check = check.value;
          try {
            if (!objectIs(getSnapshot(), check)) return !1;
          } catch (error) {
            return !1;
          }
        }
    }
    updateQueue = node.child;
    if (node.subtreeFlags & 16384 && null !== updateQueue)
      (updateQueue.return = node), (node = updateQueue);
    else {
      if (node === finishedWork) break;
      for (; null === node.sibling; ) {
        if (null === node.return || node.return === finishedWork) return !0;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return !0;
}
function markRootSuspended(root, suspendedLanes, spawnedLane) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes;
  for (
    var expirationTimes = root.expirationTimes, lanes = suspendedLanes;
    0 < lanes;

  ) {
    var index$5 = 31 - clz32(lanes),
      lane = 1 << index$5;
    expirationTimes[index$5] = -1;
    lanes &= ~lane;
  }
  0 !== spawnedLane &&
    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
}
function performSyncWorkOnRoot(root, lanes) {
  if (0 !== (executionContext & 6))
    throw Error("Should not already be working.");
  if (flushPassiveEffects()) return ensureRootIsScheduled(root), null;
  var exitStatus = renderRootSync(root, lanes);
  if (0 !== root.tag && 2 === exitStatus) {
    var originallyAttemptedLanes = lanes,
      errorRetryLanes = getLanesToRetrySynchronouslyOnError(
        root,
        originallyAttemptedLanes
      );
    0 !== errorRetryLanes &&
      ((lanes = errorRetryLanes),
      (exitStatus = recoverFromConcurrentError(
        root,
        originallyAttemptedLanes,
        errorRetryLanes
      )));
  }
  if (1 === exitStatus)
    return (
      prepareFreshStack(root, 0),
      markRootSuspended(root, lanes, 0),
      ensureRootIsScheduled(root),
      null
    );
  if (6 === exitStatus)
    return (
      markRootSuspended(root, lanes, workInProgressDeferredLane),
      ensureRootIsScheduled(root),
      null
    );
  root.finishedWork = root.current.alternate;
  root.finishedLanes = lanes;
  commitRoot(
    root,
    workInProgressRootRecoverableErrors,
    workInProgressTransitions,
    workInProgressRootDidIncludeRecursiveRenderUpdate,
    workInProgressDeferredLane
  );
  ensureRootIsScheduled(root);
  return null;
}
function flushSyncFromReconciler(fn) {
  null !== rootWithPendingPassiveEffects &&
    0 === rootWithPendingPassiveEffects.tag &&
    0 === (executionContext & 6) &&
    flushPassiveEffects();
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  var prevTransition = ReactSharedInternals.T,
    previousPriority = currentUpdatePriority;
  try {
    if (((currentUpdatePriority = 2), (ReactSharedInternals.T = null), fn))
      return fn();
  } finally {
    (currentUpdatePriority = previousPriority),
      (ReactSharedInternals.T = prevTransition),
      (executionContext = prevExecutionContext),
      0 === (executionContext & 6) && flushSyncWorkAcrossRoots_impl(!1);
  }
}
function resetWorkInProgressStack() {
  if (null !== workInProgress) {
    if (0 === workInProgressSuspendedReason)
      var interruptedWork = workInProgress.return;
    else
      (interruptedWork = workInProgress),
        resetContextDependencies(),
        resetHooksOnUnwind(interruptedWork),
        (thenableState$1 = null),
        (thenableIndexCounter$1 = 0),
        (interruptedWork = workInProgress);
    for (; null !== interruptedWork; )
      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
        (interruptedWork = interruptedWork.return);
    workInProgress = null;
  }
}
function prepareFreshStack(root, lanes) {
  root.finishedWork = null;
  root.finishedLanes = 0;
  var timeoutHandle = root.timeoutHandle;
  -1 !== timeoutHandle &&
    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
  timeoutHandle = root.cancelPendingCommit;
  null !== timeoutHandle &&
    ((root.cancelPendingCommit = null), timeoutHandle());
  resetWorkInProgressStack();
  workInProgressRoot = root;
  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
  workInProgressRootRenderLanes = lanes;
  workInProgressSuspendedReason = 0;
  workInProgressThrownValue = null;
  workInProgressRootDidAttachPingListener = !1;
  workInProgressDeferredLane =
    workInProgressRootPingedLanes =
    workInProgressRootInterleavedUpdatedLanes =
    workInProgressRootSkippedLanes =
    workInProgressRootExitStatus =
      0;
  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
    null;
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
  0 === (root.current.mode & 32) && 0 !== (lanes & 8) && (lanes |= lanes & 32);
  var allEntangledLanes = root.entangledLanes;
  if (0 !== allEntangledLanes)
    for (
      root = root.entanglements, allEntangledLanes &= lanes;
      0 < allEntangledLanes;

    ) {
      var index$3 = 31 - clz32(allEntangledLanes),
        lane = 1 << index$3;
      lanes |= root[index$3];
      allEntangledLanes &= ~lane;
    }
  entangledRenderLanes = lanes;
  finishQueueingConcurrentUpdates();
  return timeoutHandle;
}
function handleThrow(root, thrownValue) {
  currentlyRenderingFiber$1 = null;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  if (thrownValue === SuspenseException) {
    thrownValue = getSuspendedThenable();
    var handler = suspenseHandlerStackCursor.current;
    workInProgressSuspendedReason =
      (null !== handler &&
        ((workInProgressRootRenderLanes & 4194176) ===
        workInProgressRootRenderLanes
          ? null !== shellBoundary
          : ((workInProgressRootRenderLanes & 62914560) !==
              workInProgressRootRenderLanes &&
              0 === (workInProgressRootRenderLanes & 536870912)) ||
            handler !== shellBoundary)) ||
      0 !== (workInProgressRootSkippedLanes & 134217727) ||
      0 !== (workInProgressRootInterleavedUpdatedLanes & 134217727)
        ? 3
        : 2;
  } else
    thrownValue === SuspenseyCommitException
      ? ((thrownValue = getSuspendedThenable()),
        (workInProgressSuspendedReason = 4))
      : (workInProgressSuspendedReason =
          thrownValue === SelectiveHydrationException
            ? 8
            : null !== thrownValue &&
              "object" === typeof thrownValue &&
              "function" === typeof thrownValue.then
            ? 6
            : 1);
  workInProgressThrownValue = thrownValue;
  null === workInProgress &&
    ((workInProgressRootExitStatus = 1),
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    ));
}
function pushDispatcher() {
  var prevDispatcher = ReactSharedInternals.H;
  ReactSharedInternals.H = ContextOnlyDispatcher;
  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
}
function pushAsyncDispatcher() {
  var prevAsyncDispatcher = ReactSharedInternals.A;
  ReactSharedInternals.A = DefaultAsyncDispatcher;
  return prevAsyncDispatcher;
}
function renderDidSuspendDelayIfPossible() {
  workInProgressRootExitStatus = 4;
  (0 === (workInProgressRootSkippedLanes & 134217727) &&
    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
    null === workInProgressRoot ||
    markRootSuspended(
      workInProgressRoot,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane
    );
}
function renderRootSync(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevAsyncDispatcher = pushAsyncDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
  lanes = !1;
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        var unitOfWork = workInProgress,
          thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
          case 8:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          case 3:
          case 2:
            lanes ||
              null !== suspenseHandlerStackCursor.current ||
              (lanes = !0);
          default:
            (workInProgressSuspendedReason = 0),
              (workInProgressThrownValue = null),
              throwAndUnwindWorkLoop(root, unitOfWork, thrownValue);
        }
      }
      workLoopSync();
      break;
    } catch (thrownValue$114) {
      handleThrow(root, thrownValue$114);
    }
  while (1);
  lanes && root.shellSuspendCounter++;
  resetContextDependencies();
  executionContext = prevExecutionContext;
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  if (null !== workInProgress)
    throw Error(
      "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."
    );
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function renderRootConcurrent(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevAsyncDispatcher = pushAsyncDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
    (workInProgressTransitions = null),
      (workInProgressRootRenderTargetTime = now() + 500),
      prepareFreshStack(root, lanes);
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        lanes = workInProgress;
        var thrownValue = workInProgressThrownValue;
        b: switch (workInProgressSuspendedReason) {
          case 1:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue);
            break;
          case 2:
            if (isThenableResolved(thrownValue)) {
              workInProgressSuspendedReason = 0;
              workInProgressThrownValue = null;
              replaySuspendedUnitOfWork(lanes);
              break;
            }
            lanes = function () {
              2 === workInProgressSuspendedReason &&
                workInProgressRoot === root &&
                (workInProgressSuspendedReason = 7);
              ensureRootIsScheduled(root);
            };
            thrownValue.then(lanes, lanes);
            break a;
          case 3:
            workInProgressSuspendedReason = 7;
            break a;
          case 4:
            workInProgressSuspendedReason = 5;
            break a;
          case 7:
            isThenableResolved(thrownValue)
              ? ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                replaySuspendedUnitOfWork(lanes))
              : ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                throwAndUnwindWorkLoop(root, lanes, thrownValue));
            break;
          case 5:
            var resource = null;
            switch (workInProgress.tag) {
              case 26:
                resource = workInProgress.memoizedState;
              case 5:
              case 27:
                var hostFiber = workInProgress;
                if (resource ? shim(resource) : 1) {
                  workInProgressSuspendedReason = 0;
                  workInProgressThrownValue = null;
                  var sibling = hostFiber.sibling;
                  if (null !== sibling) workInProgress = sibling;
                  else {
                    var returnFiber = hostFiber.return;
                    null !== returnFiber
                      ? ((workInProgress = returnFiber),
                        completeUnitOfWork(returnFiber))
                      : (workInProgress = null);
                  }
                  break b;
                }
            }
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue);
            break;
          case 6:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, thrownValue);
            break;
          case 8:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          default:
            throw Error("Unexpected SuspendedReason. This is a bug in React.");
        }
      }
      workLoopConcurrent();
      break;
    } catch (thrownValue$116) {
      handleThrow(root, thrownValue$116);
    }
  while (1);
  resetContextDependencies();
  ReactSharedInternals.H = prevDispatcher;
  ReactSharedInternals.A = prevAsyncDispatcher;
  executionContext = prevExecutionContext;
  if (null !== workInProgress) return 0;
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopConcurrent() {
  for (; null !== workInProgress && !shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function replaySuspendedUnitOfWork(unitOfWork) {
  var next = unitOfWork;
  var current = next.alternate;
  switch (next.tag) {
    case 15:
    case 0:
      var Component = next.type,
        unresolvedProps = next.pendingProps;
      unresolvedProps =
        next.elementType === Component
          ? unresolvedProps
          : resolveDefaultPropsOnNonClassComponent(Component, unresolvedProps);
      var context = isContextProvider(Component)
        ? previousContext
        : contextStackCursor$1.current;
      context = getMaskedContext(next, context);
      next = replayFunctionComponent(
        current,
        next,
        unresolvedProps,
        Component,
        context,
        workInProgressRootRenderLanes
      );
      break;
    case 11:
      Component = next.type.render;
      unresolvedProps = next.pendingProps;
      unresolvedProps =
        next.elementType === Component
          ? unresolvedProps
          : resolveDefaultPropsOnNonClassComponent(Component, unresolvedProps);
      next = replayFunctionComponent(
        current,
        next,
        unresolvedProps,
        Component,
        next.ref,
        workInProgressRootRenderLanes
      );
      break;
    case 5:
      resetHooksOnUnwind(next);
    default:
      unwindInterruptedWork(current, next),
        (next = workInProgress =
          resetWorkInProgress(next, entangledRenderLanes)),
        (next = beginWork(current, next, entangledRenderLanes));
  }
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
}
function throwAndUnwindWorkLoop(root, unitOfWork, thrownValue) {
  resetContextDependencies();
  resetHooksOnUnwind(unitOfWork);
  thenableState$1 = null;
  thenableIndexCounter$1 = 0;
  var returnFiber = unitOfWork.return;
  try {
    if (
      throwException(
        root,
        returnFiber,
        unitOfWork,
        thrownValue,
        workInProgressRootRenderLanes
      )
    ) {
      workInProgressRootExitStatus = 1;
      logUncaughtError(
        root,
        createCapturedValueAtFiber(thrownValue, root.current)
      );
      workInProgress = null;
      return;
    }
  } catch (error) {
    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
    workInProgressRootExitStatus = 1;
    logUncaughtError(
      root,
      createCapturedValueAtFiber(thrownValue, root.current)
    );
    workInProgress = null;
    return;
  }
  if (unitOfWork.flags & 32768)
    a: {
      root = unitOfWork;
      do {
        unitOfWork = unwindWork(root.alternate, root);
        if (null !== unitOfWork) {
          unitOfWork.flags &= 32767;
          workInProgress = unitOfWork;
          break a;
        }
        root = root.return;
        null !== root &&
          ((root.flags |= 32768),
          (root.subtreeFlags = 0),
          (root.deletions = null));
        workInProgress = root;
      } while (null !== root);
      workInProgressRootExitStatus = 6;
      workInProgress = null;
    }
  else completeUnitOfWork(unitOfWork);
}
function completeUnitOfWork(unitOfWork) {
  var completedWork = unitOfWork;
  do {
    unitOfWork = completedWork.return;
    var next = completeWork(
      completedWork.alternate,
      completedWork,
      entangledRenderLanes
    );
    if (null !== next) {
      workInProgress = next;
      return;
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
}
function commitRoot(
  root,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  spawnedLane
) {
  var prevTransition = ReactSharedInternals.T,
    previousUpdateLanePriority = currentUpdatePriority;
  try {
    (currentUpdatePriority = 2),
      (ReactSharedInternals.T = null),
      commitRootImpl(
        root,
        recoverableErrors,
        transitions,
        didIncludeRenderPhaseUpdate,
        previousUpdateLanePriority,
        spawnedLane
      );
  } finally {
    (ReactSharedInternals.T = prevTransition),
      (currentUpdatePriority = previousUpdateLanePriority);
  }
  return null;
}
function commitRootImpl(
  root,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  renderPriorityLevel,
  spawnedLane
) {
  do flushPassiveEffects();
  while (null !== rootWithPendingPassiveEffects);
  if (0 !== (executionContext & 6))
    throw Error("Should not already be working.");
  var finishedWork = root.finishedWork;
  didIncludeRenderPhaseUpdate = root.finishedLanes;
  if (null === finishedWork) return null;
  root.finishedWork = null;
  root.finishedLanes = 0;
  if (finishedWork === root.current)
    throw Error(
      "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
    );
  root.callbackNode = null;
  root.callbackPriority = 0;
  root.cancelPendingCommit = null;
  var remainingLanes = finishedWork.lanes | finishedWork.childLanes;
  remainingLanes |= concurrentlyUpdatedLanes;
  markRootFinished(root, remainingLanes, spawnedLane);
  root === workInProgressRoot &&
    ((workInProgress = workInProgressRoot = null),
    (workInProgressRootRenderLanes = 0));
  (0 === (finishedWork.subtreeFlags & 10256) &&
    0 === (finishedWork.flags & 10256)) ||
    rootDoesHavePassiveEffects ||
    ((rootDoesHavePassiveEffects = !0),
    (pendingPassiveEffectsRemainingLanes = remainingLanes),
    (pendingPassiveTransitions = transitions),
    scheduleCallback(NormalPriority$1, function () {
      flushPassiveEffects();
      return null;
    }));
  transitions = 0 !== (finishedWork.flags & 15990);
  if (0 !== (finishedWork.subtreeFlags & 15990) || transitions) {
    transitions = ReactSharedInternals.T;
    ReactSharedInternals.T = null;
    spawnedLane = currentUpdatePriority;
    currentUpdatePriority = 2;
    var prevExecutionContext = executionContext;
    executionContext |= 4;
    commitBeforeMutationEffects(root, finishedWork);
    commitMutationEffectsOnFiber(finishedWork, root);
    root.current = finishedWork;
    commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
    requestPaint();
    executionContext = prevExecutionContext;
    currentUpdatePriority = spawnedLane;
    ReactSharedInternals.T = transitions;
  } else root.current = finishedWork;
  rootDoesHavePassiveEffects
    ? ((rootDoesHavePassiveEffects = !1),
      (rootWithPendingPassiveEffects = root),
      (pendingPassiveEffectsLanes = didIncludeRenderPhaseUpdate))
    : releaseRootPooledCache(root, remainingLanes);
  remainingLanes = root.pendingLanes;
  0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
  onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
  ensureRootIsScheduled(root);
  if (null !== recoverableErrors)
    for (
      renderPriorityLevel = root.onRecoverableError, finishedWork = 0;
      finishedWork < recoverableErrors.length;
      finishedWork++
    )
      (remainingLanes = recoverableErrors[finishedWork]),
        renderPriorityLevel(remainingLanes.value, {
          componentStack: remainingLanes.stack
        });
  0 !== (pendingPassiveEffectsLanes & 3) &&
    0 !== root.tag &&
    flushPassiveEffects();
  remainingLanes = root.pendingLanes;
  0 !== (didIncludeRenderPhaseUpdate & 4194218) && 0 !== (remainingLanes & 42)
    ? root === rootWithNestedUpdates
      ? nestedUpdateCount++
      : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
    : (nestedUpdateCount = 0);
  flushSyncWorkAcrossRoots_impl(!1);
  return null;
}
function releaseRootPooledCache(root, remainingLanes) {
  0 === (root.pooledCacheLanes &= remainingLanes) &&
    ((remainingLanes = root.pooledCache),
    null != remainingLanes &&
      ((root.pooledCache = null), releaseCache(remainingLanes)));
}
function flushPassiveEffects() {
  if (null !== rootWithPendingPassiveEffects) {
    var root = rootWithPendingPassiveEffects,
      remainingLanes = pendingPassiveEffectsRemainingLanes;
    pendingPassiveEffectsRemainingLanes = 0;
    var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes),
      prevTransition = ReactSharedInternals.T,
      previousPriority = currentUpdatePriority;
    try {
      currentUpdatePriority = 32 > renderPriority ? 32 : renderPriority;
      ReactSharedInternals.T = null;
      if (null === rootWithPendingPassiveEffects)
        var JSCompiler_inline_result = !1;
      else {
        renderPriority = pendingPassiveTransitions;
        pendingPassiveTransitions = null;
        var root$jscomp$0 = rootWithPendingPassiveEffects,
          lanes = pendingPassiveEffectsLanes;
        rootWithPendingPassiveEffects = null;
        pendingPassiveEffectsLanes = 0;
        if (0 !== (executionContext & 6))
          throw Error("Cannot flush passive effects while already rendering.");
        var prevExecutionContext = executionContext;
        executionContext |= 4;
        commitPassiveUnmountOnFiber(root$jscomp$0.current);
        commitPassiveMountOnFiber(
          root$jscomp$0,
          root$jscomp$0.current,
          lanes,
          renderPriority
        );
        executionContext = prevExecutionContext;
        flushSyncWorkAcrossRoots_impl(!1);
        if (
          injectedHook &&
          "function" === typeof injectedHook.onPostCommitFiberRoot
        )
          try {
            injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
          } catch (err) {}
        JSCompiler_inline_result = !0;
      }
      return JSCompiler_inline_result;
    } finally {
      (currentUpdatePriority = previousPriority),
        (ReactSharedInternals.T = prevTransition),
        releaseRootPooledCache(root, remainingLanes);
    }
  }
  return !1;
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
  null !== rootFiber &&
    (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (; null !== nearestMountedAncestor; ) {
      if (3 === nearestMountedAncestor.tag) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (1 === nearestMountedAncestor.tag) {
        var instance = nearestMountedAncestor.stateNode;
        if (
          "function" ===
            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
          ("function" === typeof instance.componentDidCatch &&
            (null === legacyErrorBoundariesThatAlreadyFailed ||
              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
        ) {
          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
          error = createClassErrorUpdate(2);
          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
          null !== instance &&
            (initializeClassErrorUpdate(
              error,
              instance,
              nearestMountedAncestor,
              sourceFiber
            ),
            markRootUpdated$1(instance, 2),
            ensureRootIsScheduled(instance));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function attachPingListener(root, wakeable, lanes) {
  var pingCache = root.pingCache;
  if (null === pingCache) {
    pingCache = root.pingCache = new PossiblyWeakMap();
    var threadIDs = new Set();
    pingCache.set(wakeable, threadIDs);
  } else
    (threadIDs = pingCache.get(wakeable)),
      void 0 === threadIDs &&
        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
  threadIDs.has(lanes) ||
    ((workInProgressRootDidAttachPingListener = !0),
    threadIDs.add(lanes),
    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
    wakeable.then(root, root));
}
function pingSuspendedRoot(root, wakeable, pingedLanes) {
  var pingCache = root.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
  workInProgressRoot === root &&
    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
    (4 === workInProgressRootExitStatus ||
    (3 === workInProgressRootExitStatus &&
      (workInProgressRootRenderLanes & 62914560) ===
        workInProgressRootRenderLanes &&
      300 > now() - globalMostRecentFallbackTime)
      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
      : (workInProgressRootPingedLanes |= pingedLanes));
  ensureRootIsScheduled(root);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  0 === retryLane &&
    (retryLane = 0 === (boundaryFiber.mode & 1) ? 2 : claimNextRetryLane());
  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
  null !== boundaryFiber &&
    (markRootUpdated$1(boundaryFiber, retryLane),
    ensureRootIsScheduled(boundaryFiber));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  var suspenseState = boundaryFiber.memoizedState,
    retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = 0;
  switch (boundaryFiber.tag) {
    case 13:
      var retryCache = boundaryFiber.stateNode;
      var suspenseState = boundaryFiber.memoizedState;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      break;
    case 19:
      retryCache = boundaryFiber.stateNode;
      break;
    case 22:
      retryCache = boundaryFiber.stateNode._retryCache;
      break;
    default:
      throw Error(
        "Pinged unknown suspense boundary type. This is probably a bug in React."
      );
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function scheduleCallback(priorityLevel, callback) {
  return scheduleCallback$3(priorityLevel, callback);
}
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function createFiber(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function shouldConstruct(Component) {
  Component = Component.prototype;
  return !(!Component || !Component.isReactComponent);
}
function createWorkInProgress(current, pendingProps) {
  var workInProgress = current.alternate;
  null === workInProgress
    ? ((workInProgress = createFiber(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      )),
      (workInProgress.elementType = current.elementType),
      (workInProgress.type = current.type),
      (workInProgress.stateNode = current.stateNode),
      (workInProgress.alternate = current),
      (current.alternate = workInProgress))
    : ((workInProgress.pendingProps = pendingProps),
      (workInProgress.type = current.type),
      (workInProgress.flags = 0),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null));
  workInProgress.flags = current.flags & 31457280;
  workInProgress.childLanes = current.childLanes;
  workInProgress.lanes = current.lanes;
  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress.dependencies =
    null === pendingProps
      ? null
      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;
  workInProgress.refCleanup = current.refCleanup;
  return workInProgress;
}
function resetWorkInProgress(workInProgress, renderLanes) {
  workInProgress.flags &= 31457282;
  var current = workInProgress.alternate;
  null === current
    ? ((workInProgress.childLanes = 0),
      (workInProgress.lanes = renderLanes),
      (workInProgress.child = null),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.memoizedProps = null),
      (workInProgress.memoizedState = null),
      (workInProgress.updateQueue = null),
      (workInProgress.dependencies = null),
      (workInProgress.stateNode = null))
    : ((workInProgress.childLanes = current.childLanes),
      (workInProgress.lanes = current.lanes),
      (workInProgress.child = current.child),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null),
      (workInProgress.memoizedProps = current.memoizedProps),
      (workInProgress.memoizedState = current.memoizedState),
      (workInProgress.updateQueue = current.updateQueue),
      (workInProgress.type = current.type),
      (renderLanes = current.dependencies),
      (workInProgress.dependencies =
        null === renderLanes
          ? null
          : {
              lanes: renderLanes.lanes,
              firstContext: renderLanes.firstContext
            }));
  return workInProgress;
}
function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes
) {
  var fiberTag = 0;
  owner = type;
  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
  else if ("string" === typeof type) fiberTag = 5;
  else
    a: switch (type) {
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
      case REACT_STRICT_MODE_TYPE:
        fiberTag = 8;
        mode |= 8;
        0 !== (mode & 1) && (mode |= 16);
        break;
      case REACT_PROFILER_TYPE:
        return (
          (type = createFiber(12, pendingProps, key, mode | 2)),
          (type.elementType = REACT_PROFILER_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_TYPE:
        return (
          (type = createFiber(13, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_LIST_TYPE:
        return (
          (type = createFiber(19, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_OFFSCREEN_TYPE:
        return createFiberFromOffscreen(pendingProps, mode, lanes, key);
      default:
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_PROVIDER_TYPE:
            case REACT_CONTEXT_TYPE:
              fiberTag = 10;
              break a;
            case REACT_CONSUMER_TYPE:
              fiberTag = 9;
              break a;
            case REACT_FORWARD_REF_TYPE:
              fiberTag = 11;
              break a;
            case REACT_MEMO_TYPE:
              fiberTag = 14;
              break a;
            case REACT_LAZY_TYPE:
              fiberTag = 16;
              owner = null;
              break a;
          }
        throw Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
            ((null === type ? "null" : typeof type) + ".")
        );
    }
  key = createFiber(fiberTag, pendingProps, key, mode);
  key.elementType = type;
  key.type = owner;
  key.lanes = lanes;
  return key;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiber(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
  pendingProps = createFiber(22, pendingProps, key, mode);
  pendingProps.elementType = REACT_OFFSCREEN_TYPE;
  pendingProps.lanes = lanes;
  var primaryChildInstance = {
    _visibility: 1,
    _pendingVisibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null,
    _current: null,
    detach: function () {
      var fiber = primaryChildInstance._current;
      if (null === fiber)
        throw Error(
          "Calling Offscreen.detach before instance handle has been set."
        );
      if (0 === (primaryChildInstance._pendingVisibility & 2)) {
        var root = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root &&
          ((primaryChildInstance._pendingVisibility |= 2),
          scheduleUpdateOnFiber(root, fiber, 2));
      }
    },
    attach: function () {
      var fiber = primaryChildInstance._current;
      if (null === fiber)
        throw Error(
          "Calling Offscreen.detach before instance handle has been set."
        );
      if (0 !== (primaryChildInstance._pendingVisibility & 2)) {
        var root = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root &&
          ((primaryChildInstance._pendingVisibility &= -3),
          scheduleUpdateOnFiber(root, fiber, 2));
      }
    }
  };
  pendingProps.stateNode = primaryChildInstance;
  return pendingProps;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiber(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiber(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  formState
) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.finishedWork =
    this.pingCache =
    this.current =
    this.pendingChildren =
      null;
  this.timeoutHandle = -1;
  this.callbackNode =
    this.next =
    this.pendingContext =
    this.context =
    this.cancelPendingCommit =
      null;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes =
    this.shellSuspendCounter =
    this.errorRecoveryDisabledLanes =
    this.finishedLanes =
    this.expiredLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onUncaughtError = onUncaughtError;
  this.onCaughtError = onCaughtError;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.formState = formState;
  this.incompleteTransitions = new Map();
}
function createContainer(
  containerInfo,
  tag,
  hydrationCallbacks,
  isStrictMode,
  concurrentUpdatesByDefaultOverride,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError
) {
  containerInfo = new FiberRootNode(
    containerInfo,
    tag,
    !1,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    null
  );
  1 === tag
    ? ((tag = 1),
      !0 === isStrictMode && (tag |= 24),
      concurrentUpdatesByDefaultOverride && (tag |= 32))
    : (tag = 0);
  isStrictMode = createFiber(3, null, null, tag);
  containerInfo.current = isStrictMode;
  isStrictMode.stateNode = containerInfo;
  concurrentUpdatesByDefaultOverride = createCache();
  concurrentUpdatesByDefaultOverride.refCount++;
  containerInfo.pooledCache = concurrentUpdatesByDefaultOverride;
  concurrentUpdatesByDefaultOverride.refCount++;
  isStrictMode.memoizedState = {
    element: null,
    isDehydrated: !1,
    cache: concurrentUpdatesByDefaultOverride
  };
  initializeUpdateQueue(isStrictMode);
  return containerInfo;
}
function updateContainer(element, container, parentComponent, callback) {
  var current = container.current,
    lane = requestUpdateLane(current);
  a: if (parentComponent) {
    parentComponent = parentComponent._reactInternals;
    b: {
      if (
        getNearestMountedFiber(parentComponent) !== parentComponent ||
        1 !== parentComponent.tag
      )
        throw Error(
          "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue."
        );
      var JSCompiler_inline_result = parentComponent;
      do {
        switch (JSCompiler_inline_result.tag) {
          case 3:
            JSCompiler_inline_result =
              JSCompiler_inline_result.stateNode.context;
            break b;
          case 1:
            if (isContextProvider(JSCompiler_inline_result.type)) {
              JSCompiler_inline_result =
                JSCompiler_inline_result.stateNode
                  .__reactInternalMemoizedMergedChildContext;
              break b;
            }
        }
        JSCompiler_inline_result = JSCompiler_inline_result.return;
      } while (null !== JSCompiler_inline_result);
      throw Error(
        "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    if (1 === parentComponent.tag) {
      var Component = parentComponent.type;
      if (isContextProvider(Component)) {
        parentComponent = processChildContext(
          parentComponent,
          Component,
          JSCompiler_inline_result
        );
        break a;
      }
    }
    parentComponent = JSCompiler_inline_result;
  } else parentComponent = emptyContextObject;
  null === container.context
    ? (container.context = parentComponent)
    : (container.pendingContext = parentComponent);
  container = createUpdate(lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  element = enqueueUpdate(current, container, lane);
  null !== element &&
    (scheduleUpdateOnFiber(element, current, lane),
    entangleTransitions(element, current, lane));
  return lane;
}
function emptyFindFiberByHostInstance() {
  return null;
}
var act = React.act,
  defaultTestOptions = {
    createNodeMock: function () {
      return null;
    }
  };
function toJSON(inst) {
  if (inst.isHidden) return null;
  switch (inst.tag) {
    case "TEXT":
      return inst.text;
    case "INSTANCE":
      var _inst$props = inst.props;
      var excluded = ["children"];
      if (null == _inst$props) _inst$props = {};
      else {
        var target = {},
          sourceKeys = Object.keys(_inst$props),
          i;
        for (i = 0; i < sourceKeys.length; i++) {
          var key = sourceKeys[i];
          0 <= excluded.indexOf(key) || (target[key] = _inst$props[key]);
        }
        _inst$props = target;
      }
      excluded = null;
      if (inst.children && inst.children.length)
        for (target = 0; target < inst.children.length; target++)
          (sourceKeys = toJSON(inst.children[target])),
            null !== sourceKeys &&
              (null === excluded
                ? (excluded = [sourceKeys])
                : excluded.push(sourceKeys));
      inst = { type: inst.type, props: _inst$props, children: excluded };
      Object.defineProperty(inst, "$$typeof", {
        value: Symbol.for("react.test.json")
      });
      return inst;
    default:
      throw Error("Unexpected node type in toJSON: " + inst.tag);
  }
}
function childrenToTree(node) {
  if (!node) return null;
  node = nodeAndSiblingsArray(node);
  return 0 === node.length
    ? null
    : 1 === node.length
    ? toTree(node[0])
    : flatten(node.map(toTree));
}
function nodeAndSiblingsArray(nodeWithSibling) {
  for (var array = []; null != nodeWithSibling; )
    array.push(nodeWithSibling), (nodeWithSibling = nodeWithSibling.sibling);
  return array;
}
function flatten(arr) {
  var result = [];
  for (arr = [{ i: 0, array: arr }]; arr.length; )
    for (var n = arr.pop(); n.i < n.array.length; ) {
      var el = n.array[n.i];
      n.i += 1;
      if (isArrayImpl(el)) {
        arr.push(n);
        arr.push({ i: 0, array: el });
        break;
      }
      result.push(el);
    }
  return result;
}
function toTree(node) {
  if (null == node) return null;
  switch (node.tag) {
    case 3:
      return childrenToTree(node.child);
    case 4:
      return childrenToTree(node.child);
    case 1:
      return {
        nodeType: "component",
        type: node.type,
        props: assign({}, node.memoizedProps),
        instance: node.stateNode,
        rendered: childrenToTree(node.child)
      };
    case 0:
    case 15:
      return {
        nodeType: "component",
        type: node.type,
        props: assign({}, node.memoizedProps),
        instance: null,
        rendered: childrenToTree(node.child)
      };
    case 26:
    case 27:
    case 5:
      return {
        nodeType: "host",
        type: node.type,
        props: assign({}, node.memoizedProps),
        instance: null,
        rendered: flatten(nodeAndSiblingsArray(node.child).map(toTree))
      };
    case 6:
      return node.stateNode.text;
    case 7:
    case 10:
    case 9:
    case 8:
    case 12:
    case 11:
    case 14:
    case 17:
    case 21:
      return childrenToTree(node.child);
    default:
      throw Error(
        "toTree() does not yet know how to handle nodes with tag=" + node.tag
      );
  }
}
var validWrapperTypes = new Set([0, 1, 5, 11, 14, 15, 3]);
function getChildren(parent) {
  var children = [],
    node = parent;
  if (null === node.child) return children;
  node.child.return = node;
  node = node.child;
  a: for (;;) {
    var descend = !1;
    validWrapperTypes.has(node.tag)
      ? children.push(wrapFiber(node))
      : 6 === node.tag
      ? children.push("" + node.memoizedProps)
      : (descend = !0);
    if (descend && null !== node.child)
      (node.child.return = node), (node = node.child);
    else {
      for (; null === node.sibling; ) {
        if (node.return === parent) break a;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return children;
}
var ReactTestInstance = (function () {
  function ReactTestInstance(fiber) {
    this._fiber = void 0;
    if (!validWrapperTypes.has(fiber.tag))
      throw Error(
        "Unexpected object passed to ReactTestInstance constructor (tag: " +
          fiber.tag +
          "). This is probably a bug in React."
      );
    this._fiber = fiber;
  }
  var _proto = ReactTestInstance.prototype;
  _proto._currentFiber = function () {
    var fiber = findCurrentFiberUsingSlowPath(this._fiber);
    if (null === fiber)
      throw Error(
        "Can't read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue."
      );
    return fiber;
  };
  _proto.find = function (predicate) {
    return expectOne(
      this.findAll(predicate, { deep: !1 }),
      "matching custom predicate: " + predicate.toString()
    );
  };
  _proto.findByType = function (type) {
    return expectOne(
      this.findAllByType(type, { deep: !1 }),
      'with node type: "' + (getComponentNameFromType(type) || "Unknown") + '"'
    );
  };
  _proto.findByProps = function (props) {
    return expectOne(
      this.findAllByProps(props, { deep: !1 }),
      "with props: " + JSON.stringify(props)
    );
  };
  _proto.findAll = function (predicate) {
    return _findAll(
      this,
      predicate,
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _proto.findAllByType = function (type) {
    return _findAll(
      this,
      function (node) {
        return node.type === type;
      },
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _proto.findAllByProps = function (props) {
    return _findAll(
      this,
      function (node) {
        var JSCompiler_temp;
        if ((JSCompiler_temp = node.props))
          a: {
            for (var key in props)
              if (node.props[key] !== props[key]) {
                JSCompiler_temp = !1;
                break a;
              }
            JSCompiler_temp = !0;
          }
        return JSCompiler_temp;
      },
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _createClass(ReactTestInstance, [
    {
      key: "instance",
      get: function () {
        var tag = this._fiber.tag;
        return 5 === tag || 26 === tag || 27 === tag
          ? getPublicInstance(this._fiber.stateNode)
          : this._fiber.stateNode;
      }
    },
    {
      key: "type",
      get: function () {
        return this._fiber.type;
      }
    },
    {
      key: "props",
      get: function () {
        return this._currentFiber().memoizedProps;
      }
    },
    {
      key: "parent",
      get: function () {
        for (var parent = this._fiber.return; null !== parent; ) {
          if (validWrapperTypes.has(parent.tag)) {
            if (3 === parent.tag && 2 > getChildren(parent).length) break;
            return wrapFiber(parent);
          }
          parent = parent.return;
        }
        return null;
      }
    },
    {
      key: "children",
      get: function () {
        return getChildren(this._currentFiber());
      }
    }
  ]);
  return ReactTestInstance;
})();
function _findAll(root, predicate, options) {
  var deep = options ? options.deep : !0,
    results = [];
  if (predicate(root) && (results.push(root), !deep)) return results;
  root.children.forEach(function (child) {
    "string" !== typeof child &&
      results.push.apply(results, _findAll(child, predicate, options));
  });
  return results;
}
function expectOne(all, message) {
  if (1 === all.length) return all[0];
  throw Error(
    (0 === all.length
      ? "No instances found "
      : "Expected 1 but found " + all.length + " instances ") + message
  );
}
var fiberToWrapper = new WeakMap();
function wrapFiber(fiber) {
  var wrapper = fiberToWrapper.get(fiber);
  void 0 === wrapper &&
    null !== fiber.alternate &&
    (wrapper = fiberToWrapper.get(fiber.alternate));
  void 0 === wrapper &&
    ((wrapper = new ReactTestInstance(fiber)),
    fiberToWrapper.set(fiber, wrapper));
  return wrapper;
}
var devToolsConfig$jscomp$inline_1047 = {
  findFiberByHostInstance: function () {
    throw Error("TestRenderer does not support findFiberByHostInstance()");
  },
  bundleType: 0,
  version: "19.0.0-rc-5ad2c37273-20240603",
  rendererPackageName: "react-test-renderer"
};
var internals$jscomp$inline_1234 = {
  bundleType: devToolsConfig$jscomp$inline_1047.bundleType,
  version: devToolsConfig$jscomp$inline_1047.version,
  rendererPackageName: devToolsConfig$jscomp$inline_1047.rendererPackageName,
  rendererConfig: devToolsConfig$jscomp$inline_1047.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ReactSharedInternals,
  findHostInstanceByFiber: function (fiber) {
    fiber = findCurrentFiberUsingSlowPath(fiber);
    fiber = null !== fiber ? findCurrentHostFiberImpl(fiber) : null;
    return null === fiber ? null : fiber.stateNode;
  },
  findFiberByHostInstance:
    devToolsConfig$jscomp$inline_1047.findFiberByHostInstance ||
    emptyFindFiberByHostInstance,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "19.0.0-rc-5ad2c37273-20240603"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var hook$jscomp$inline_1235 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (
    !hook$jscomp$inline_1235.isDisabled &&
    hook$jscomp$inline_1235.supportsFiber
  )
    try {
      (rendererID = hook$jscomp$inline_1235.inject(
        internals$jscomp$inline_1234
      )),
        (injectedHook = hook$jscomp$inline_1235);
    } catch (err) {}
}
exports._Scheduler = Scheduler;
exports.act = act;
exports.create = function (element, options) {
  var createNodeMock = defaultTestOptions.createNodeMock,
    isConcurrent = !1,
    isStrictMode = !1,
    concurrentUpdatesByDefault = null;
  "object" === typeof options &&
    null !== options &&
    ("function" === typeof options.createNodeMock &&
      (createNodeMock = options.createNodeMock),
    (isConcurrent = options.unstable_isConcurrent),
    !0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.unstable_concurrentUpdatesByDefault &&
      (concurrentUpdatesByDefault =
        options.unstable_concurrentUpdatesByDefault));
  var container = {
      children: [],
      createNodeMock: createNodeMock,
      tag: "CONTAINER"
    },
    root = createContainer(
      container,
      isConcurrent ? 1 : 0,
      null,
      isStrictMode,
      concurrentUpdatesByDefault,
      "",
      defaultOnUncaughtError,
      defaultOnCaughtError,
      defaultOnRecoverableError,
      null
    );
  if (null == root) throw Error("something went wrong");
  updateContainer(element, root, null, null);
  element = {
    _Scheduler: Scheduler,
    root: void 0,
    toJSON: function () {
      if (
        null == root ||
        null == root.current ||
        null == container ||
        0 === container.children.length
      )
        return null;
      if (1 === container.children.length) return toJSON(container.children[0]);
      if (
        2 === container.children.length &&
        !0 === container.children[0].isHidden &&
        !1 === container.children[1].isHidden
      )
        return toJSON(container.children[1]);
      var renderedChildren = null;
      if (container.children && container.children.length)
        for (var i = 0; i < container.children.length; i++) {
          var renderedChild = toJSON(container.children[i]);
          null !== renderedChild &&
            (null === renderedChildren
              ? (renderedChildren = [renderedChild])
              : renderedChildren.push(renderedChild));
        }
      return renderedChildren;
    },
    toTree: function () {
      return null == root || null == root.current ? null : toTree(root.current);
    },
    update: function (newElement) {
      null != root &&
        null != root.current &&
        updateContainer(newElement, root, null, null);
    },
    unmount: function () {
      null != root &&
        null != root.current &&
        (updateContainer(null, root, null, null), (root = container = null));
    },
    getInstance: function () {
      if (null == root || null == root.current) return null;
      a: {
        var JSCompiler_inline_result = root.current;
        if (JSCompiler_inline_result.child)
          switch (JSCompiler_inline_result.child.tag) {
            case 27:
            case 5:
              JSCompiler_inline_result = getPublicInstance(
                JSCompiler_inline_result.child.stateNode
              );
              break a;
            default:
              JSCompiler_inline_result =
                JSCompiler_inline_result.child.stateNode;
          }
        else JSCompiler_inline_result = null;
      }
      return JSCompiler_inline_result;
    },
    unstable_flushSync: flushSyncFromReconciler
  };
  Object.defineProperty(element, "root", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      if (null === root)
        throw Error("Can't access .root on unmounted test renderer");
      var children = getChildren(root.current);
      if (0 === children.length)
        throw Error("Can't access .root on unmounted test renderer");
      return 1 === children.length ? children[0] : wrapFiber(root.current);
    }
  });
  return element;
};
exports.unstable_batchedUpdates = function (fn, a) {
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  try {
    return fn(a);
  } finally {
    (executionContext = prevExecutionContext),
      0 === executionContext &&
        ((workInProgressRootRenderTargetTime = now() + 500),
        flushSyncWorkAcrossRoots_impl(!0));
  }
};