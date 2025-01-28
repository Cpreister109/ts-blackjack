import Card from "./card"
import { ICard, IDealable, Suit } from "./types"
import { shuffleArray } from "./utils"

class Deck implements IDealable {
    private deck: Card[] = [];

    reset () {
        let currSuit = Suit.Diamond
        for (let i = 0; i < 4; i++) {
            switch(i) {
                case 1:
                    currSuit = Suit.Heart;
                    break;
                case 2:
                    currSuit = Suit.Spade;
                    break;
                case 3:
                    currSuit = Suit.Clover;
                    break;
            }

            for (let j = 0; j < 13; j++) {
                let currCard = new Card(j, currSuit)
                this.deck.push(currCard)
            }
        }
        
        shuffleArray(this.deck)
    }

    deal(num: number = 2, hand: ICard[] = []): ICard[] {
        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * this.deck.length);
            const cardToDeal = this.deck[randomIndex];

            hand.push(cardToDeal);
            this.deck = this.deck.filter(item => item !== cardToDeal)
        }

        return hand
    }
}

export default Deck;
