export enum Suit {
    Diamond = "♦",
    Heart = "♥",
    Spade = "♠",
    Clover = "☘️"
}

export interface ICard {
    value: number,
    suit: Suit
    getName(): string
}

export interface IDealable {
    deal(num: number, ogHand: ICard[]): ICard[],
    reset(): void
}
