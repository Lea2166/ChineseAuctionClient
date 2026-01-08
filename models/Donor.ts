export interface DonorReadDTO {
  id: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  email?: string;
  phoneNumber?: string;
  prizes?: ReadPrizeForDonorsDTO[];
}

export interface DonorForReadPrizesDTO {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface ReadPrizeForDonorsDTO {
  id: number;
  name?: string;
  description?: string;
  categoryName?: string;
  imagePath?: string;
}