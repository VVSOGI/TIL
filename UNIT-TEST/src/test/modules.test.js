const { default: axios } = require('axios');
const Users = require('../modules');

jest.mock('axios');

test('Should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual([{ name: 'Bob' }]));
});
