// tslint:disable:no-expression-statement

import test from 'ava';
import Add from './add.class';

const sut = new Add();

test('add', t => {
  t.is(sut.add(1, 1), 2);
});