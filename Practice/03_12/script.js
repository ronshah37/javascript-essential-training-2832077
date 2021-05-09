/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import LuggageBag from "./LuggageBag.js";

const internationalLuggage = new LuggageBag(
  40,
  100,
  50,
  "red",
  "Four Double Wheeler",
  "Variable",
  2,
  4,
  {
    type: "pouch",
    width: 40,
    height: 20,
  },
  "Polyester",
  "TraWorld",
  true,
  5,
  false
);

console.log(internationalLuggage);
console.log(internationalLuggage.brand);
