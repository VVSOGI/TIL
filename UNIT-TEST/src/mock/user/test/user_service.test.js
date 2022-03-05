const UserService = require('../user_service');
const UserClient = require('../user_client');

// 행동에 따라서 테스트를 짜는 것.
// 이 경우엔 로그인이 되었을 때,
// isLogedIn이 true일 때와 false일 때를 구분하는 것.
// 가짜 함수를 만든다. jest.mock("../user_client");
// 이러면 가짜 UserClient가 만들어진것.

// 가짜 UserClient 메소드 login에 가짜 리턴값을 만들어준다.
// login = jest.fn(async () => 'success');
// 이후 가짜 메소드를 장착한다.

// UserClient.mockImplementation(() => {
//  return {
//      login
//   }
// })

jest.mock('../user_client');

describe('UserService login', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it('calls login() on UserClient when tries to login', async () => {
    await userService.login('vvso', '1234');
    expect(login).toHaveBeenCalledTimes(1);
  });

  it('should not call login() on UserClient again if already logged in', async () => {
    await userService.login('vvso', '1234');
    await userService.login('asdfso', '1234');

    expect(login).toHaveBeenCalledTimes(1);
  });
});
