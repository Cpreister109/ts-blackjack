import Deck from "./deck"
import { ICard } from "./types";
import promptSync from 'prompt-sync';

let gameDeck = new Deck()

function askUser(
    money: number = 100, usrHand: ICard[] = [], dlrHand: ICard[] = []
    ): boolean | undefined {
    console.log(`Player's funds: $${money}`);

    const promptM = promptSync();

    while(1) {
        const bet = promptM('Enter your bet: $');
        if (parseInt(bet) > money) {
            console.log('TOO MUCH!')
        } else if (parseInt(bet) < 0) {
            console.log('TOO LITTLE!')
        } else {
            break;
        }
    }

    if (usrHand.length === 0 && usrHand.length === 0) {
        gameDeck.reset();
        usrHand = gameDeck.deal();
        dlrHand = gameDeck.deal();
    }

    console.log('Your Hand: ');
    for (let i = 0; i < usrHand.length; i++)
        console.log(`${usrHand[i].value}${usrHand[i].suit}`);

    console.log('Dealer Hand: ');
    for (let i = 0; i < dlrHand.length; i++)
        console.log(`${usrHand[i].value}${usrHand[i].suit}`);
    
    const promptA = promptSync();
    
    while(1){
        const action = promptA('Your Action (hit/stand): ');
        switch(action) {
            case "hit":
                usrHand = gameDeck.deal(1, usrHand)
                return true;
                break;
            case "stand":
                return false;
                break;
        }

        console.log('Incorrect Input!')
    }

}

function checkHand(usrHand: ICard[], dlrHand: ICard[]): boolean {
    return false;
}

function addFunds(money: number, bet: number): number {
    return 0;
}

function subFunds(money: number, bet: number): number {
    return 0;
}

checkHand
