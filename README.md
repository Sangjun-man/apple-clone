# apple-clone

인프런 애플 웹사이트 인터렉션 클론 강의를 html/css 가 아닌 styled-components와 mvp 패턴의 react 기반으로 구현해보는 연습을 진행합니다

08/09 수정사항) 인터랙티브한 효과를 주기에 styled-component가 부적합하다고 판단해서 react + vanila.js + css.module로 리팩토링 및 구현연습 진행중입니다
작업중에 커밋을 거의 하지 않고 파일, 코드를 수정했는네 앞으로 커밋 컨벤션을 염두에 두면서 커밋 작성할 예정입니다.....


# 구조

```

src

├── components 
│   ├── layouts //레이아웃과 관련된 컴포넌트들
│   └── features // 기능을 모아둔 컴포넌트
│
├── containers
├── pages 
├── modules // Redux 상태관리 모듈
├── data
├── image // 페이지에 필요한 image파일들, 나중에 스크롤으로 동영상 제어를 위한 파일들도 담아둘예정
├── style
│   └── animation // js 애니메이션 발생 코드들 
└── ... 추가및 수정
```


