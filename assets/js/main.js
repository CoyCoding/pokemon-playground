import { Monster } from './monster/modles/monster';
import { findMonsterById } from './monster/monsterLocators';

// try {
var test = findMonsterById(1);
//console.log(test.getWeakness());
test.getWeaknesses();
test.getStrengths();
// } catch (e) {
// 	console.log(e.message);
// }
