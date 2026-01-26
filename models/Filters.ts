

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