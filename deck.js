"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("./card"));
const types_1 = require("./types");
const utils_1 = require("./utils");
class Deck {
    constructor() {
        this.deck = [];
    }
    reset() {
        let currSuit = types_1.Suit.Diamond;
        for (let i = 0; i < 4; i++) {
            switch (i) {
                case 1:
                    currSuit = types_1.Suit.Heart;
                    break;
                case 2:
                    currSuit = types_1.Suit.Spade;
                    break;
                case 3:
                    currSuit = types_1.Suit.Clover;
                    break;
            }
            for (let j = 0; j < 13; j++) {
                let currCard = new card_1.default(j, currSuit);
                this.deck.push(currCard);
            }
        }
        (0, utils_1.shuffleArray)(this.deck);
    }
    deal(num = 2, hand = []) {
        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * this.deck.length);
            const cardToDeal = this.deck[randomIndex];
            hand.push(cardToDeal);
            this.deck = this.deck.filter(item => item !== cardToDeal);
        }
        return hand;
    }
}
exports.default = Deck;
