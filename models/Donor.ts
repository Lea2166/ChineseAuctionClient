export interface DonorReadDTO {
  id: number;
  firstName?: string;
  lastName?: string;
  company?: string
  address?: string;
  email?: string;
  phoneNumber?: string;
  prizes?: ReadPrizeForDonorsDTO[];
}

export interface DonorCreateDTO {
  firstName?: string;
  lastName?: string;
  company?: string
  address?: string;
  email?: string;
  phoneNumber?: string;
}

export interface DonorUpdateDTO {
  id: number
  firstName?: string;
  lastName?: string;
  company?: string
  address?: string;
  email?: string;
  phoneNumber?: string;
}


export interface DonorForReadPrizesDTO {
  id: number;
  firstName?: string;
  lastName?: string;
  company?: string
  email?: string;
}

export interface ReadPrizeForDonorsDTO {
  id: number;
  name?: string;
  description?: string;
  categoryName?: string;
  imagePath?: string;
}