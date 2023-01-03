interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// function fetchProduct(): Promise<Product[]> {}

function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}

interface UpdateProduct {
  id?: number;
  name?: string;
  price?: number;
  brand?: string;
  stock?: number;
}
// 위에 UpdateProduct처럼 ? 옵셔널 안넣어도 Partial을 사용하면 된다.

type UpdateProd = Partial<Product>;

function updateProductItem(productItem: UpdateProd) {}

// 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
// interface UserUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
type UserProfileUpdate = {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotoUrl?: UserProfile["profilePhotoUrl"];
};

// #2
// type UserProUpdate = {
//   [p in "usernaem" | "emial" | "profilePhotoUrl"]?: UserProfile[p];
// };

// #3
type UserProUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4
type Subset<T> = {
  [p in keyof T]?: T[p];
};
