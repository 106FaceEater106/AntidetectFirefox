// |reftest| skip -- jstests don't yet support module tests
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Module code is always strict mode code.
es6id: 10.2.1
esid: sec-strict-mode-code
flags: [module]
negative:
  phase: early
  type: SyntaxError
---*/

$ERROR('This statement should not be executed.');
var public;
