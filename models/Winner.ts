import { ReadUserDTO } from './User';
import { PrizeForWinnerDTO } from './Prize'

export class ReadWinnerDTO {
    id?: number
    user?: ReadUserDTO
    prize?: PrizeForWinnerDTO
}

export class ReadWinnerInPrizeDTO {
    id?: number
    user?: ReadUserDTO
}