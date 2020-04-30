import { Test } from './test';

const foobar = '5';
const bar = 'apples';

/**
 * Logs a string.
 * @param {string} str The string to log.
 */
function log(str: string): void {
  console.log(str);
  console.log(str);
  console.log(str);
  console.log(str);
}

log(foobar);
log(foobar);
log(foobar);
log(bar);
log(foobar);

const test: Test = new Test();
test.doSomething();
