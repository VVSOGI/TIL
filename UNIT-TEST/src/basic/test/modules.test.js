const { default: axios } = require('axios');
const Users = require('../modules');

jest.mock('axios');

test('Should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual([{ name: 'Bob' }]));
});

test('should fetch async await', async () => {
  const users = [{ name: 'Amy' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  const data = await Users.all();
  expect(data).toEqual(users);
});

const myMockFn = jest.fn((item) => item(false, true));

// mockImplementation

jest.mock('../foo');
const foo = require('../foo');

foo.mockImplementation((a, b) => a + b);

// Mock Names

const MockFn = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation((scalar) => 42 + scalar)
  .mockName('add42');
