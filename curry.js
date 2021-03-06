!(function(e) {
  if ('function' == typeof bootstrap) bootstrap('curry', e);
  else if ('object' == typeof exports) module.exports = e();
  else if ('function' == typeof define && define.amd)
    define(e);
  else if ('undefined' != typeof ses) {
    if (!ses.ok()) return;
    ses.makeCurry = e;
  } else
    'undefined' != typeof window
      ? (window.curry = e())
      : (global.curry = e());
})(function() {
  var define, ses, bootstrap, module, exports;
  return (function(e, t, n) {
    function i(n, s) {
      if (!t[n]) {
        if (!e[n]) {
          var o = typeof require == 'function' && require;
          if (!s && o) return o(n, !0);
          if (r) return r(n, !0);
          throw new Error("Cannot find module '" + n + "'");
        }
        var u = (t[n] = { exports: {} });
        e[n][0].call(
          u.exports,
          function(t) {
            var r = e[n][1][t];
            return i(r ? r : t);
          },
          u,
          u.exports
        );
      }
      return t[n].exports;
    }
    var r = typeof require == 'function' && require;
    for (var s = 0; s < n.length; s++) i(n[s]);
    return i;
  })(
    {
      1: [
        function(require, module, exports) {
          var slice = Array.prototype.slice;
          var toArray = function(a) {
            return slice.call(a);
          };
          var tail = function(a) {
            return slice.call(a, 1);
          };
          var createFn = function(fn, args, totalArity) {
            var remainingArity = totalArity - args.length;
            switch (remainingArity) {
              case 0:
                return function() {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 1:
                return function(a) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 2:
                return function(a, b) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 3:
                return function(a, b, c) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 4:
                return function(a, b, c, d) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 5:
                return function(a, b, c, d, e) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 6:
                return function(a, b, c, d, e, f) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 7:
                return function(a, b, c, d, e, f, g) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 8:
                return function(a, b, c, d, e, f, g, h) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 9:
                return function(a, b, c, d, e, f, g, h, i) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              case 10:
                return function(
                  a,
                  b,
                  c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j
                ) {
                  return processInvocation(
                    fn,
                    concatArgs(args, arguments),
                    totalArity
                  );
                };
              default:
                return createEvalFn(
                  fn,
                  args,
                  remainingArity
                );
            }
          };
          var concatArgs = function(args1, args2) {
            return args1.concat(toArray(args2));
          };
          var createEvalFn = function(fn, args, arity) {
            var argList = makeArgList(arity);
            var fnStr =
              'false||' +
              'function(' +
              argList +
              '){ return processInvocation(fn, concatArgs(args, arguments)); }';
            return eval(fnStr);
          };
          var makeArgList = function(len) {
            var a = [];
            for (var i = 0; i < len; i += 1)
              a.push('a' + i.toString());
            return a.join(',');
          };
          var trimArrLength = function(arr, length) {
            if (arr.length > length)
              return arr.slice(0, length);
            else return arr;
          };
          var processInvocation = function(
            fn,
            argsArr,
            totalArity
          ) {
            argsArr = trimArrLength(argsArr, totalArity);
            if (argsArr.length === totalArity)
              return fn.apply(null, argsArr);
            return createFn(fn, argsArr, totalArity);
          };
          var curry = function(fn) {
            return createFn(fn, [], fn.length);
          };
          curry.to = curry(function(arity, fn) {
            return createFn(fn, [], arity);
          });
          curry.adaptTo = curry(function(num, fn) {
            return curry.to(num, function(context) {
              var args = tail(arguments).concat(context);
              return fn.apply(this, args);
            });
          });
          curry.adapt = function(fn) {
            return curry.adaptTo(fn.length, fn);
          };
          module.exports = curry;
        },
        {}
      ]
    },
    {},
    [1]
  )(1);
});
