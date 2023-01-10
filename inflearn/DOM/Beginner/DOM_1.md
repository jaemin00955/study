# DOM 완전 끝내기 : 기본편

## 개요
* DOM의 핵심 : 사용자와 상호작용, 동적으로 콘텐츠 표현 
* DOM 연동기술 : HTML, Canvas, SVG, XML, Proxy, Promise, Symbol, Class, ArrayBuffer, DataView, XMLHttpRequest, Fetch, WEb Workers, 실행 콘텍스트, Event Loop, Node.js
* 콘텐츠 표현 플로우
  * html 파일의 마크업을 HTML로 파싱, 랜더링
  * DOM
  * CSSOM
  * AOM
---
## DOM 관련 요소 기술 개념 정리
* JS의 Host Environment
  * DOM은 인터페이스를 제공
* JS의 Object, Property 
  * 함수 실행 단계, 오브젝트와 프로퍼티
* 함수, 메소드, Global Object
  * 함수와 메소드를 구분해야하는 이유? 
    * function이 작성된 위치, 구조가 다르기 때문
    * 함수는 인스턴스에 포함되지 않음
* **실행 Context**
  * 실행 Context : 코드를 실행하는데 필요한 환경을 제공하는 객체
  * **Hoisting(호이스팅)** : 선언문이 마치 최상단에 끌어올려진 현상
    * **Record(환경 레코드)** : 식별자와 식별자에 바인딩된 값을 기록
      * 과정 : 생성단계(선언문만 모두 읽어 record에 저장), 실행단계
    * variable 호이스팅, function 호이스팅 2가지가 존재
  * **식별자 결정**(Identify) 
    * **Outer** : 스코프 체인(scope chain)
  * **lexical Scoping(렉시컬 스코핑)**
  * **Closure(클로저)**

---
## DOM 기본 개념
* Document Object Model : 다큐먼트를 오브젝트로 접근하여 콘텐츠를 표현하는 모델
  * 개념적 핵심 : 동적으로 콘텐츠 제공, 사용자와 상호 작용
* HTML의 element는 JS의 object와 모두 대응한다.
* CSS와 JS
  * CSS 룰 : 
