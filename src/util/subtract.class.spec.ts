// tslint:disable:no-expression-statement

import test from 'ava';
import Subtract from './subtract.class';

const sut = new Subtract();

test('add', t => {
  t.is(sut.subtract(8, 4), 4);
});