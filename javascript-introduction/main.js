import showArrayExamples from "./modules/arrays.js";
import showBooleanExamples from "./modules/booleans.js";
import showObjectExamples from "./modules/objects.js";
import showStringExamples from "./modules/strings.js";
import {showNumberExamples, showArithmeticExamples, showCoercionExamples} from "./modules/numbers.js";
import {sayMyName, whatsMyCar} from "./modules/functions.js";

showArrayExamples();
showBooleanExamples();
showStringExamples();
showNumberExamples();
showArithmeticExamples();
showCoercionExamples();
showObjectExamples();

const name = sayMyName("Jane", "Doe");
console.log(name);

whatsMyCar("Opel");
whatsMyCar(13);




