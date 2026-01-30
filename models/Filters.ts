

export class OrderQParams {

    userEmail?: string;
    packagesIds?: number[];

    prizesIds?: number[];
    orderDate?: {
        min?: Date,
        max?: Date
    }
    totalPrice?: {
        min?: number,
        max?: number
    }
}


export class DonorQParams {

    name?: string;
    email?: string;
    prizesIds?: number[];
}

export class PrizeQParams {

    name?: string;
    categoryIds?: number[];
    donorId?: number;
    numOfTickets?: number;
}
