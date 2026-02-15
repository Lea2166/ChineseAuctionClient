import { DonorForReadPrizesDTO } from './Donor';
import { ReadWinnerInPrizeDTO } from './Winner'

export interface CategoryDTOWithId {
  id: number;
  name: string;
}

export interface CreatePrizeDTO {
  name: string;
  description?: string;
  donorId: number;
  categoryIds: number[];
  imagePath?: string;
  qty: number;
}

export interface ReadPrizeDTO {
  id: number;
  name?: string;
  description?: string;
  donor?: DonorForReadPrizesDTO;
  categories?: CategoryDTOWithId[];
  imagePath?: string;
  qty: number;
  numOfTickets: number;
  winners: ReadWinnerInPrizeDTO[]

}

export interface UpdatePrizeDTO {
  id: number;
  name?: string;
  description?: string;
  donor?: DonorForReadPrizesDTO;
  categoryIds?: number[];
  imagePath?: string;
  qty: number;

}

export interface ReadSimplePrizeDTO {
  id: number;
  name: string;
  categories?: string[];
  imagePath?: string;
  winners: ReadWinnerInPrizeDTO[]
}

export interface PrizeForWinnerDTO {
  id: number;
  name: string;
  CategoriesNames?: string[];
  imagePath?: string;
}