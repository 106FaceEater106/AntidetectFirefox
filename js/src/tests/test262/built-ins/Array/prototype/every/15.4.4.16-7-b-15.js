// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-b-15
description: >
    Array.prototype.every - decreasing length of array with prototype
    property causes prototype index property to be visited
---*/

        function callbackfn(val, idx, obj) {
            if (idx === 2 && val === "prototype") {
                return false;
            } else {
                return true;
            }
        }
        var arr = [0, 1, 2];

            Object.defineProperty(Array.prototype, "2", {
                get: function () {
                    return "prototype";
                },
                configurable: true
            });

            Object.defineProperty(arr, "1", {
                get: function () {
                    arr.length = 2;
                    return 1;
                },
                configurable: true
            });

assert.sameValue(arr.every(callbackfn), false, 'arr.every(callbackfn)');

reportCompare(0, 0);