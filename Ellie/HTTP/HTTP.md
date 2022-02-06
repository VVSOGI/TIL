# HTTP **(Hypertext Transfer Protocol)**

Stateless Protocol

Request, Response

client => server (request)

server => client (response)

## Status code

3가지 숫자 200, 302, 404 ... (HTTP 표준 정의)

- 1xx (Informational)
- 2xx (Successful)
- 3xx (Redirection)
- 4xx (Client error)
- 5xx (Server error)

[자주 사용하는 Status Code](https://www.notion.so/287930c7c46647b882c9639bcab9fe84)

## URL (Uniform Resource Locator)

리소스의 위치를 알려주는 고유한 값을 나타내는 주소

https://www.server.com/index.html

- protocols
- hostname
- path

## Request Methods

- GET (get)
- POST (create)
- PUT (replace)
- DELETE (delete)
- PATCH (replace partially)
- HEAD (get without body)
- OPTIONS (all supported methods for URL)
- TRACE (echoes the received request)

## Sessions & Cookies

Cookie 브라우저만 있음

왜 사용? 보통 로그인 로그아웃

브라우저 (Request 로그인 (로그인 정보)(POST)) ⇒ 서버

if (성공) 서버 (Response Cookie:auth token = xxx...) ⇒ 브라우저

로그인 성공 시 쿠키를 제공

이후에 브라우저가 어떠한 리퀘스트를 보낼때 쿠키와 함께 전달하면 유저를 확인함.

## 표준화된 Headers (Request Context)

User-Agent: Mozilla/5.0 (<system-information>)<platform>(<platform-details>)<extensions>

Authorization: Basic YWNAosjIAnwzXMidKAWoq....

Message body information:

- Content-Length : bytes
- Content-Type : text/html | application/json
- Content-Language : en

caching:

- Cache-Control: max-age=(<seconds>) || Cache-Control: No-cache

[HTTP headers - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

---

[Notion](https://lean-hamburger-3a8.notion.site/HTTP-Hypertext-Transfer-Protocol-3c819ba8e4124847bfac67abb549312c)
