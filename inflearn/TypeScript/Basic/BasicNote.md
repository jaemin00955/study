## 타입스크립트 소개와 배경

- 타입스크립트란?
  - 자바스크립트에 타입을 부여한 언어, 브라우저에서 실행하기 위해 컴파일 과정이 필요
- 왜 쓰는지? : [why-ts 폴더에 실습]
  - 에러의 사전방지
  - 코드 가이드 및 자동완성

---

## 타입스크립트 시작하기

- 타입스크립트를 js로 : tsc 명령어 사용 ex) tsc index.ts

  - 이거보다는 webPack사용이 더 좋음
  - 타입스크립트 컴파일 시 부가적인 옵션을 정하는 파일 : tsconfig.json

- babel : 자바스크립트 컴파일러
  - 더 많은 브라우저가 호환가능하게 컴파일 해주는 것!!
  - ()=>{} 와 같은 함수형 클래스를 변화해주는 등 역활을 한다.

---

## 타입스크립트 기초 - 변수와 함수 타입정의

- 타입스크립트로 함수를 선언: 파라미터를 제한하는 특성을 갖는다. 기존의 Js는 함수 파라미터에 몇개인지는 확인하지 않는다.
- 옵셔널 파라미터 : 함수의 파라미터에 타입지정을 ?를 사용하면 된다.

---

## 첫번째 프로젝트

---

## 인터페이스

---

## 타입 별칭

- 타입 별칭
  - type abc = {name:string; id: number}
- 타입과 인터페이스의 차이점
  - 타입 : 변수나 함수위에 마우스 올렸을 때 프리뷰로 안의 인자값들의 타입이 표시된다.
  - 타입은 확장 불가능하다. extends를 사용하지 못해 Interface로 선언하는게 더 좋다는 ts공홈의 오피셜!!

---

## 연산자를 이용한 타입정의

- |(union)를 이용하여 타입을 여러개 지정(string,number등) 같이 사용할 수 있다.
- 만약 interface 두개(a,b)를 생성하여 |를 사용한다면 함수 안에서는두 인터페이스에 공통된 파라미터값만 사용할 수 있다.
  - 그래서 & (intersection type)을 사용한다.
  - 하지만 해당 함수를 호출하여 사용할 때 인자값으로 |은 a 또는 b의 인터페이스값을 가질 수 있고 &은 a,b모든 인자값을 가져야한다.
  - !!!! **상당히 헷갈리는 부분** !!!!

---

## 이넘

- 특정 값들의 집합을 의미하는 자료형
- **사용예시**로 드롭다운같은 선택형 로직에서 enum을 활용한다면 오류나 예외처리에 도움이 된다.

---

## 클래스

- 자바스크립트 프로토타입
  - const user = {name:'aaa',age:100}
  - const admin = {}
  - admin.**proto** = user;
  - 이런식으로 사용하면 user의 속성값을 사용할 수 있다.
- const obj = {} // [] 처럼 선언하고 obj.~ 하면 Object와 Array의 keys(), push()등과 같은 함수를 사용할 수 있다. 이유는 obj의 프로토타입으로 이미 선언되어 있어 해당 함수들을 사용할 수 있는것!!!!

---

## 제네릭

- 재사용성이 높은 컴포넌트를 만들 때 자주 활용
- 기본 타입 정의 vs 제네릭
  - 만약에 하나의 함수에 string으로 정의했으면 number는 사용을 못하는데 제네릭을 사용하면 해결가능
- 유니온 타입 vs 제네릭
  - 유니온 타입으로 string | number로 해결할 수도 있지만 함수안에서 파라미터의 메소드는 string, number의 교집합인 메소드만 사용이 가능한 문제가 있다. --> 제네릭은 이런 문제도 해결됨.
  - 즉 input 파라미터의 문제는 해결되지만 output(return)값에 대한 문제가 발생한다
- ## 정의된 타입으로 타입 제한

---

## 타입 추론

-

---

## 타입 단언

---

## 타입 가드

---

## 타입 호환

---

## 타입 모듈화
