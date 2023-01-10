## Statement(문장)
* 세미콜론
  * JS엔진이 분석하여 삽입한다 (es5 이후부터)
* white space
  * 가독성을 위한 것
* Block
  * {}형태 
  * optional하다. 없어도 있어도 상관없다는 뜻
* debugger
  * debugger; 위치에서 멈춤
* do ~ while
  * do문을 먼저실행 후 while문으로 들어간다.
* switch 
  * case 표현식 : {}
  * default : {}
* throw
  * throw 표현식;
  * 명시적으로 예외를 발생시킴
  * ex) throw new Error('예외발생');
  * 예외가 발생하면 try catch문이라면 catch문을 실행
* strict 모드
  * `use strict` (형태)
  * 엄격하게 JS 문법 사용의 선언
  * es5부터 지원
* with문 
  * 특정 객체를 여러번 사용할 경우, 생략할 수 있게해줌
  * ex) with(document)
  * write("~~")
  * write("~~")
  * ex2) `with(Math){x = cos(PI)+sin(LN10); y=tan(E)}`

---
## 함수(Function)
* 첫문자 : 영문자, $, _(언더바) 사용가능
* return 
  * return; 또는 아무것도 없으면 undefined를 반환
* 주석 
  * ex) 
  * /**
  * *@function calcula~
  * *@param {number} quantity
  * *@param {number} price
  * *@return {number} result
  *  */
  *  이런식으로 사용가능

---
## Object (오브젝트)
* Property
  * {name:value} 형태
  * 오브젝트와 객체는 살짝 다름
* property 추가, 변경
  * 1) var obj = {}; obj.abc = 123; abc없으면 123추가, 있으면 변경
  * 2) 대괄호 사용 : obj["abc"] = 123 
* property 열거
  * for ~ in문
  * : for let item in sports{코드}

---
## Built-In (빌트인)
* 값 타입, 연산자, 오브젝트를 사전에 만들어 놓을 것
* 값 타입 : undefined, Null,Object, Boolean, Number,String
* 오브젝트 : 11개의 오브젝트 존재
  * Number object
  * String object
  * Boolean object
  * Object object
  * Array object
  * Function object
  * Math object
  * Date object
  * JSON object: [{"name":"value"}]형태
  * RegExp object
  * Global object

---
## Number 오브젝트
* 숫자처리를 위한 오브젝트
* 프로퍼티 리스트 : 
  * new Number(), toString(), valueOf(), toFixed(), toPrecision(),Number() ....
* Number(param) 
  * 파라미터 값을 Number 타입으로 변환
  * 파라미터 값 작성x -> 0 반환
* new 연산자
  * 오브젝트로 인스턴스 생성하여 반환
  * prototype에 있는 것만 인스턴스에 준다. 다른 곳은 가려서 주는것.
  * 따라서 var obj = new Number(); obj.__proto__로 접근할 수 있다.
* Primitive(프리미티브)
  * 프리미티브 값을 갖는 오브젝트 : Boolean, Date, Number, String
  * 인스턴스를 생성하면 파라미터 값을 인스턴스의 프리미티브 값으로 설정함
    * ex) `var obj = new Number(123); log(obj+200); // 323출력`
    * obj의 프리미티브 값은 123이 되어 연산이 가능해진것!
  * valueOf() 
    * Number 인스턴스의 **프리미티브 값**을 반환한다.
* toString()
  * ex) `20.toString()`은 오류 발생
  * 20..toString()은 20을 반환
  * 20.이 20.0을 표현한것으로 정수로 변환후 toString()해야함
* toLocaleString()
  * 숫자를 브라우저가 지원하는 지역화 문자로 변환
  * value.toLocaleString()  // 1,234.56
* toExponential(param)
  * 숫자를 지수표기로 변환하여 문자열로 반환
  * 1234 // 1.234e+3
  * param이 2이면 12.35e+2
* toFixed(param)
  * 고정 소숫점 표기로 변환 
  * `param이 2이면 1234.567은 1234.56으로` 



---
## String 오브젝트
* String(param)
  * param을 string타입으로 변환
  * ex) `String(123) // "123"반환`
* new String(param)
  * String 인스턴스를 반환
* valueOf(param)
  * String 인스턴스의 프리미티브 값 반환
* length
  * 문자수 반환
  * ex) `const value = "123"; value.length; `
  * 예시에서 value에 문자열을 주면 안의 로직에서 new String("123")을 하는 것!! 그래서 value.length, 오브젝트의 프로퍼티인 length를 사용할 수 있는 것!!
* trim()
  * white space 삭제
* toString()
  * `"123".toString()`
    * 문자열을 toString()?? -> 의미 없는게 아니다
    * 왜 : JS의 함수 호출 구조는 데이터 타입으로 Number오브젝트인지, String 오브젝트인지 결정하고 해당 오브젝트의 함수를 호출한다.
    * `let value = 123; value.toString()`여기서 value는 number타입이므로 Number오브젝트의 toString()을 호출하는 것!
    * "123"의 __proto__의 toString()이 있고 String 오브젝트의 __proto__의 toString()이 있는 것!!
* chartAt()
  * 문자열 인덱싱
* indexOf(a,b)
  * a를 b번째부터 찾아라
  * a가 없으면 -1을 반환
* lastIndexOf()
  * 뒤 인덱스부터 시작
* concat()
  * 문자열 합치기
* toLowerCase()
* toUpperCase()
* substring(a,b)
  * a번 인덱스부터 b-1번 인덱스까지
* substr(a,b)
  * a번 인덱스부터 b개 뽑기
* slice(a,b)
  * a번 인덱스부터 b-1번 인덱스까지
* match()
  * 정규표현식의 패턴을 적용하여 매치하고 매치결과 반환
  * 패턴 : ^, $, *, +등
* replace(a,b)
  * a값을 찾아 b로 대치
  * a값 전부 다 바꾸려면 정규표현식 g사용
* search()
  * 검색된 첫 번째 인덱스 반환
  * 없으면 -1 반환
* split()


---
## Object 오브젝트
* 빌트인 오브젝트
  * 사전에 만들어 놓은 오브젝트
  * Number 오브젝트, String 오브젝트
  * 오브젝트.prototype
    * 인스턴스 생성 가능 여부 기준
    * 프로퍼티를 연결하는 오브젝트
  * 오브젝트.prototype.constructor
    * 오브젝트의 생성자
  * 오브젝트.prototype.method
    * 메소드 이름과 함수 작성
  * 모든 빌트인 오브젝트의 prototype에는 6개의 함수가 있다.
    * constructor, toFixed, hasOwnProperty,valueOf, toString, toLocalString

* 네이티브 오브젝트


* 호스트 오브젝트
  * window, DOM 오브젝트
  * ex) `document.querySelector()`
* object 인스턴스 생성
  * new Object(param)
    * param의 type에 따라 인스턴스 생성됨
  * Object(param)
    * ex) `Object({name:"js책"})`으로 인스턴스 생성 가능
---
## Function 오브젝트
* new function() : 인스턴스 생성
* length 프로퍼티
* call() : 함수 호출
  * `메소드명.call(this, 10,20)` 일반적으로 this 사용
* apply(): 함수 호출
  * `메소드명.apply(this,[배열])`
* toString() : 함수 코드를 문자열로 반환
* argument 오브젝트
  
---
## Global 오브젝트
* 모든 `<script>` 통해 하나만 존재
* 프로퍼티 리스트
  * NaN, Infinity, undefined, 
  * isNaN(), isFinite(), parseInt(), parseFloat(), eval(), encodeURI(), encodeURIComponent(), decodeURI(), decodeURIComponent()
  * NaN, undefined등은 window에 설정되어 있어 window.NaN도 성립
* Global과 window 관계
  * Host 오브젝트 개념 활용 : global 오브젝트의 프로퍼티 9개를 window 오브젝트에 저장할 수 있는 것
  * 주체는 다르지만 global (JS), window는 (window) global 오브젝트 프로퍼티를 window에서 사용가능!!
* parseInt() 프로퍼티
  * `parseInt(123px)` 는 px는 삭제하고 123 반환
  * `parseInt(12AB34)`는 12는 반환 34는 반환 x
  * 공백은 빈문자열 반환, 값 작성안하면 NaN 반환
* parseFloat()
  * `parseFloat("1.2e3")`은 지수를 변환
* isNaN()
  * 숫자 값이 아니면 true 반환
  * 숫자 값이면 false 반환, 문자열이여도 값이 숫자로 변환되면 숫자로 인식해서 false 반환
  * NaN === NaN은 false 반환
    * 설계 실수
    * ES6의 Object.is() 사용 `Object.is(NaN,NaN)`은 true 반환
---
## Array 오브젝트
* 프로퍼티 리스트 (ES3 기준)
  * new Array(), Array(), length, constructor, unshift(), push(), concat(), slice(), join(), toString(), toLocaleString(), shift(), pop(), splice(), sort(), reverse(), 
* delete로 삭제하면 해당 인덱스에는 undefined로 바뀜 : 앞으로 하나씩 당기는데 처리시간이 걸리기 때문

* 프로퍼티 리스트 (ES5 기준)
  * isArray(), indexOf(), lastIndexOf(), forEach(), every(), some(), filter(), map(),reduce(), reduceRight()
* isArray()
  * typeof 연산자로 데이터 타입을 구하면 `{a:1}, [1,2], null`모두 object로 반환된다.
  * 그래서 isArray()를 사용하거나 null일 때는 Object.is()사용한다.
* 콜백 함수를 가진 Array 메소드
  * forEach() : 시작할 때 반복 범위를 결정 `엘리먼트를 추가하더라도 처리하지 않음`
  
---
## Number 오브젝트
---
## Number 오브젝트
---
## Number 오브젝트
