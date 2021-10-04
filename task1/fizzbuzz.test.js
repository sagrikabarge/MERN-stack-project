//const { TestWatcher } = require('@jest/core');
const fizzbuzz = require ('./fizzbuzz');

test('returns "FIZZ BUZZ" for the number 30', () => {
    expect(fizzbuzz(30)).toEqual('FIZZ BUZZ');
  });

  test('returns 7 for the number 7', () => {
    expect(fizzbuzz(7)).toEqual(7);
  });
  
  test('returns "FIZZ" for the number 9', () => {
    expect(fizzbuzz(9)).toEqual('FIZZ');
  });

  test('returns "BUZZ" for the number 20', () => {
    expect(fizzbuzz(20)).toEqual('BUZZ');
  });
  