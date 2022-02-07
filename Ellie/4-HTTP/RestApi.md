REST (Representational State Transfer) : 대표하는 상태를 전송한다.

|        | URL   |
| ------ | ----- |
| Client | URL/A |
|        | URL/B |
|        | URL/C |
|        | URL/D |

Client (Request URL/A , JSON) ⇒ Server

Server (Response A State , JSON) ⇒ Client

Restul Api === 표준화된 API 사용법

## RESTful System 6 guiding constrains

1. Client-server architecture (클라이언트가 브라우저, 핸드폰 상관없이 데이터를 제공할 수 있어야 한다.)
2. Statelessness (하나의 요청이 다른 요청과 연결되는 형식으로 하면 안 된다.)
3. Cacheability (Cache가 가능하다면 Cache를 할 수 있는 형식으로 디자인한다.)
4. Layerd System (API를 제공하는 서버가 얼마나 많던지 상관없이 하나의 API를 사용할 수 있도록 디자인한다.)
5. Code on demand (클라이언트가 원한다면 클라이언트가 수행해야 하는 코드를 서버에서 보내줄 수 있도록 디자인한다. (optional))
6. Uniform interface (RESTful system을 결정짓는 중요한 요소 4가지)
   - Resource Identification in requests : 클라이언트에서 어떤 자원 혹은 도메인을 원하는 지 식별할 수 있어야 한다. 그리고 서버에 저장되어 있는 스테이트가 어떤 형식이건 클라이언트가 이해할 수 있는 형식으로 보내야한다. (JSON, HTML/text ...)
   - Resource manipulation through representations : 서버에서 제공되는 데이터를 어떤 형식으로 수정 가공이 가능한지 명확한 형태로 제공해야한다.
   - Self-descriptive messages : 서버에서 제공하는 응답 데이터를 어떤 형식으로 처리를 하는지 설명이 되어있어야 한다. 서버에서 보내는 반응에서 이 데이터타입이 무엇인지 알 수 있어야 한다. ex) HTTP 헤더에 Content-Type 지정해주는 형식
   - Hypermedia as the engine of application state (HATEOAS) : 클라이언트가 필요한 데이터에 대한 가공 및 어떤 URL을 사용해야 하는지 명확히 규정해야 한다. ex) 클라이언트가 account에 관련된 서비스를 사용해야 한다면, 클라이언트는 account에 관련된 명확한 정보가 있는 URL들을 알 수 있어야 한다. (이 정도까지 제공하는 서비스는 거의 없긴 함.)

## How to design APIs

### Designing Web Apis

- C (Create) ⇒ POST
- R (Read) ⇒ GET
- U (Update) ⇒ PATCH, PUT
- D (Delete) ⇒ DELETE

| METHOD | BAD               | GOOD            | Why                                                                                                          |
| ------ | ----------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| GET    | /posts/getPosts   | /posts          | 애초에 GET을 사용하면 get을 붙이지 않아도 된다. url 부분에는 무엇을 할 것인지 간결 명료하게만 작성한다.      |
| POST   | /posts/createPost | /posts          | Same Thing                                                                                                   |
| GET    |                   | /posts/1        | GOOD                                                                                                         |
| PUT    |                   | /posts/1        | GOOD                                                                                                         |
| DELETE |                   | /posts/1        | GOOD                                                                                                         |
| GET    | /posts/1/tags     | /tags/?postid=1 | 결국 제일 관심있는 것이 무엇인가에 한해서 만들면 된다. 이번에는 posts가 아니라 tags이니 tags로 GET을 만든다. |
