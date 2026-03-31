/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ngraph.merge";
exports.ids = ["vendor-chunks/ngraph.merge"];
exports.modules = {

/***/ "(ssr)/./node_modules/ngraph.merge/index.js":
/*!********************************************!*\
  !*** ./node_modules/ngraph.merge/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("module.exports = merge;\n\n/**\n * Augments `target` with properties in `options`. Does not override\n * target's properties if they are defined and matches expected type in \n * options\n *\n * @returns {Object} merged object\n */\nfunction merge(target, options) {\n  var key;\n  if (!target) { target = {}; }\n  if (options) {\n    for (key in options) {\n      if (options.hasOwnProperty(key)) {\n        var targetHasIt = target.hasOwnProperty(key),\n            optionsValueType = typeof options[key],\n            shouldReplace = !targetHasIt || (typeof target[key] !== optionsValueType);\n\n        if (shouldReplace) {\n          target[key] = options[key];\n        } else if (optionsValueType === 'object') {\n          // go deep, don't care about loops here, we are simple API!:\n          target[key] = merge(target[key], options[key]);\n        }\n      }\n    }\n  }\n\n  return target;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmdyYXBoLm1lcmdlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VuYXRlLWludGVsbGlnZW5jZS8uL25vZGVfbW9kdWxlcy9uZ3JhcGgubWVyZ2UvaW5kZXguanM/MWZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IG1lcmdlO1xuXG4vKipcbiAqIEF1Z21lbnRzIGB0YXJnZXRgIHdpdGggcHJvcGVydGllcyBpbiBgb3B0aW9uc2AuIERvZXMgbm90IG92ZXJyaWRlXG4gKiB0YXJnZXQncyBwcm9wZXJ0aWVzIGlmIHRoZXkgYXJlIGRlZmluZWQgYW5kIG1hdGNoZXMgZXhwZWN0ZWQgdHlwZSBpbiBcbiAqIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBtZXJnZWQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgb3B0aW9ucykge1xuICB2YXIga2V5O1xuICBpZiAoIXRhcmdldCkgeyB0YXJnZXQgPSB7fTsgfVxuICBpZiAob3B0aW9ucykge1xuICAgIGZvciAoa2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHRhcmdldEhhc0l0ID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSksXG4gICAgICAgICAgICBvcHRpb25zVmFsdWVUeXBlID0gdHlwZW9mIG9wdGlvbnNba2V5XSxcbiAgICAgICAgICAgIHNob3VsZFJlcGxhY2UgPSAhdGFyZ2V0SGFzSXQgfHwgKHR5cGVvZiB0YXJnZXRba2V5XSAhPT0gb3B0aW9uc1ZhbHVlVHlwZSk7XG5cbiAgICAgICAgaWYgKHNob3VsZFJlcGxhY2UpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zVmFsdWVUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGdvIGRlZXAsIGRvbid0IGNhcmUgYWJvdXQgbG9vcHMgaGVyZSwgd2UgYXJlIHNpbXBsZSBBUEkhOlxuICAgICAgICAgIHRhcmdldFtrZXldID0gbWVyZ2UodGFyZ2V0W2tleV0sIG9wdGlvbnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ngraph.merge/index.js\n");

/***/ })

};
;