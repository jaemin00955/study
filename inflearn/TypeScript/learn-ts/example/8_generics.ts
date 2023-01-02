// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText("aaa");

function logText<T>(text: T): T {
  return text;
}
const abc = logText<string>("하이");
abc.split("");

const bool = logText<Boolean>(true);
bool.valueOf();

// function getNumber(value: number) {
//   return value;
// }

// function getArray(value: string[]) {
//   return value;
// }

// // 제네릭 기본 문법 - 함수
// function getValue<T>(value: T): T {
//   return value;
// }
// getValue('hi').toLocaleUpperCase();
// getValue(100).toLocaleString();

// // 제네릭 기본 문법 - 인터페이스
// interface Developer<T> {
//   name: string;
//   age: T;
// }
// const tony: Developer<number> = { name: 'tony', age: 100 };

// // 제네릭 타입 제한 - 구체적인 타입
// function getNumberAndArray<T>(value: T): T {
//   value.length; // X
//   return value;
// }

// function getNumberAndArray<T>(value: T[]): T[] {
//   value.length; // O
//   return value;
// }
interface LengthType {
  length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === "name" || option === "address") {
    console.log("option type is string");
    return option;
  }
  if (option === "price" || option === "stock") {
    console.log("option type is number");
    return option;
  }
  return option;
}
getAllowedOptions("stock");
// // const a = getAllowedOptions('name');
// // a.toUpperCase(); // Name
