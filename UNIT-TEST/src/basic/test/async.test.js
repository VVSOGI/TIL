const fetchProduct = require('../async.js');

test('fetch Product function', async () => {
  const item = await fetchProduct('success');
  expect(item).toStrictEqual({ item: 'Milk', price: 200 });
});

test('async - resolves', () => {
  return expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 });
});

test('async - reject', () => {
  return expect(fetchProduct('error')).rejects.toEqual('network Error');
});
