import { add } from './test';
import { Monster } from './monster/monster';
import { findMonsterById } from './monster/monsterLocators';
console.log();

// try {
var test = findMonsterById(1);
//console.log(test.getWeakness());
test.getWeakness();
// } catch (e) {
// 	console.log(e.message);
// }
