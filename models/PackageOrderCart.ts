import { ReadUserDTO, ResponseUserDTO } from './User';
import { ReadSimplePrizeDTO } from './Prize';

export interface ReadPackageDTO {
  id: number;
  name: string;
  numOfTickets: number;
  price: number;
}

export interface CreatePackageDTO {
  name: string;
  numOfTickets: number;
  price: number;
}

export interface ReadOrderDTO {
  id: number;
  user: ReadUserDTO;
  prizes: ReadSimplePrizeDTO[];
  orderDate: Date;
  packages: ReadPackageDTO[];
  totalPrice: number;
}

export interface ReadSimpleOrderDTO {
  id: number;
  user: ReadUserDTO;
  orderDate: Date;
  totalPrice: number;


}

export interface ReadCartDTO {
  user: ResponseUserDTO;
  cartItems: CartItemReadDTO[];
}

export interface CartItemReadDTO {
  prizeId: number;
  prize: ReadSimplePrizeDTO;
  quantity: number;

}
export interface CreateCartItemDTO {
  prizeId: number;
  quantity: number;
}




export interface Category {
  id: number;
  name: string;
}