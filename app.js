"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = __importDefault(require("./deck"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let gameDeck = new deck_1.default();
function askUser(money = 100, usrHand = [], dlrHand = []) {
    console.log(`Player's funds: $${money}`);
    const promptM = (0, prompt_sync_1.default)();
    while (1) {
        const bet = promptM('Enter your bet: $');
        if (parseInt(bet) > money) {
            console.log('TOO MUCH!');
        }
        else if (parseInt(bet) < 0) {
            console.log('TOO LITTLE!');
        }
        else {
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
    const promptA = (0, prompt_sync_1.default)();
    while (1) {
        const action = promptA('Your Action (hit/stand): ');
        switch (action) {
            case "hit":
                return true;
                break;
            case "stand":
                return false;
                break;
        }
        console.log('Incorrect Input!');
    }
}
function checkHand(hand) {
    return false;
}
function addFunds(money, bet) {
    return 0;
}
function subFunds(money, bet) {
    return 0;
}
askUser();
