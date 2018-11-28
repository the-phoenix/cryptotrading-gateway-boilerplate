/*  tslint:disable:no-expression-statement no-console */

import Add from './util/add.class';
import Subtract from './util/subtract.class';

const addOp = new Add();
const subOp = new Subtract();

console.log('3 + 5:', addOp.add(3,5));
console.log('2 - 5:', subOp.subtract(2,5));
console.log('what?', addOp.add(3, 9));
