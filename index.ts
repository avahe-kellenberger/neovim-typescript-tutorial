const foobar: string = '5';
const bar: string = 'apples';

log(foobar);
log(foobar);
log(bar);
log(foobar);

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
