# Section Scroll

포트폴리오를 만드는 작업 중에 섹션 단위로 움직이는 스크롤을 구현하기 위해서 세 가지의 시도를 해볼 것이다.

### 1. GSAP Scroll Trigger

잘 알려진 라이브러리인 GSAP을 이용해서 스크롤하는 방법이 있다. 최초로 시도한 방법인데, 이전 프로젝트인 밥파고에서도 사용해본 경험이 있기에 작업 과정은 그렇게 어렵지 않았다. 중요한 것은 밥파고 프로젝트에서는 정확히 전체 페이지에서 섹션을 이용해 작은 컴포넌트들이 그 위치에서 스크롤 되는 효과였는데 이번 포트폴리오는 전체를 담고있는 스크롤을 이용해서 보여주는 영역을 다르게 해야하는 점이다. 이전 프로젝트는 움직여야하는 섹션들이 한 위치에 fixed 되어 있기에, 스크롤을 이용할 때, 화면의 Shiver를 감지할 수 없었지만, 이번 포트폴리오 에서는 스크롤을 할 때, 화면이 격하게 shivering 되는 것을 확인할 수 있었다. 보는 입장에서 스크롤을 움직일 때 마다 화면의 모든 것들이 지진난 것 처럼 움직여버리면, 유저 경험 만족도가 상당히 낮아진다는 판단을 내려 어쩔 수 없이 GSAP 라이브러리를 사용하는 것은 포기했다.

```js
/*  GSAP  */

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
let scrollTween: null | gsap.core.Animation;

function goToSection(i: number) {
  let number = i + 1;
  setMapIndex(number);

  scrollTween = gsap.to(window, {
    scrollTo: { y: i * window.innerHeight, autoKill: false },
    duration: 2,
    onComplete: () => (scrollTween = null),
    overwrite: true,
    ease: Power4.easeInOut,
  });
}

nodeList.forEach((section: any, i: number) => {
  ScrollTrigger.create({
    trigger: section,
    onEnter: () => goToSection(i + 1),
    start: "0%",
  });
  ScrollTrigger.create({
    trigger: section,
    end: "99.5%",
    onEnterBack: () => goToSection(i),
  });
});

/*  GSAP  */
```

### 2. 직접 섹션단위 스크롤 효과를 구현하기.

두 번째 방법은 직접 섹션 스크롤을 구현하는 것이었다. 위의 GSAP 코드와 다른 점이 있다면 ScrollTrigger가 되는 section에 addEventListener를 붙이는 것이다. 여기서 중요한 것은 GSAP에서는 알아서 최적화가 되기 때문에 필요하지 않았지만, 직접 작성하면 wheel의 전체 움직임을 감지하는 것이 아닌, 마지막 움직임만 감지할 필요가 있기에, Debounce를 걸어줘야 한다. 추가적으로 GSAP에서 했던 방식에서 약간 다른 점은 scrollTo로 움직이는 것이 아닌 직접 CSS의 top의 위치를 이용해서 움직이는 것이다.

이 방식을 이용하기 위해서 큰 토탈 섹션을 만든 후에 움직임이 필요한 섹션들을 담아줬다. 이제 유저가 마우스 휠을 아래로 움직이면 토탈 섹션을 아래로 움직이는 이벤트 함수가 발생해서 스크롤을 하고 있는 느낌을 그대로 살리되, CSS가 줄 수 있는 여러가지 Animation 효과를 이용할 수 있다는 장점을 가져갈 수 있다.

GSAP을 이용했을 때의 Shivering은 전혀 감지할 수 없었고 움직임은 훨씬 부드러워 졌다. 하지만 큰 문제가 있다. 예를 들어 [section1, section2, section3, section4]의 화면을 가지고 있다고 보고, 스크롤을 이용하여 section1부터 section3까지 이동한 후에 새로고침을 눌렀다고 가정하겠다. 당연하게 모든 컴포넌트들이 초기화 되면서 화면이 section1으로 이동할 줄 알았는데, 새로고침을 눌른 후에도 section3에 머물러 있었다. 문제는 화면의 위치보다 section의 index가 문제였다. 리 렌더링 되면서 3이었던게 1로 가버리니 다음 스크롤에서의 움직임을 예측할 수 없게 됬다.

문제를 해결하기 위해 새로고침을 눌렀을 때, 직전에 모든 것을 초기화 하는 방법이나 local Storage에 위치를 저장해놔서 다음에 켰을 때, Css에서 top의 위치를 직접 수정하는 방식을 이용하는 방법을 도입해봤지만, 실패했다.

한마디로 새로고침 했을 때 최초로 돌아가는 것이 아닌, 이전 화면의 CSS를 그대로 기억해서 토탈 섹션의 움직임이 불확실해졌다.

```js
/* Debounce */

let scrollStatus = {
  wheeling: false,
  functionCall: false,
};
let scrollTimer: any = false;

sections.forEach((section, index) => {
  section.addEventListener("wheel", (e: any) => {
    e.preventDefault();
    let deltaY = e.deltaY;
    scrollStatus.wheeling = true;
    if (!scrollStatus.functionCall) {
      if (deltaY > 0) {
        goToSection(index + 1);
      }
      if (deltaY < 0) {
        goToSection(index - 1);
      }
      scrollStatus.functionCall = true;
    }
    window.clearInterval(scrollTimer); // <- Debounce
    scrollTimer = window.setTimeout(() => {
      scrollStatus.wheeling = false;
      scrollStatus.functionCall = false;
    }, 50);
  });
});

/* Debounce */
```

### 3. fullpage.js 라이브러리 사용.

이 부분은 아직 사용하지 않았고, 최선을 다해서 이 방법을 피하기 위해 노력해봤지만, 아쉽게도 결국 사용을 해볼 때가 온 것 같다. 이 라이브러리가 알기로는 유료인 걸로 알고 있는데, 엄청 큰 프로젝트가 아니기에, 한 번 사용해보는 것 자체는 괜찮을 것 같다.
