/**
 * @fileoverview Finds configured words, baaaaad words... I guess ¯\_(ツ)_/¯
 * @author Daniel Lazar
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/bad-words"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("bad-words", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "const thisIsReallyReallyBadLol = 0;",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
