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
  user: ReadUserDTO;
  prizes: ReadSimplePrizeDTO[];
  orderDate: Date;
  packages: ReadPackageDTO[];
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