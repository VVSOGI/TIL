const axios = require('axios').default;

class Users {
  constructor() {}
  static all() {
    return axios.get('/users.json').then((item) => item.data);
  }
}

module.exports = Users;
