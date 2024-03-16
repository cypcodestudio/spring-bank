export class TransferRequest{
    fromAccount: String;
    toAccount: String;
    amount: Number;

    constructor(fromAccount: String,
        toAccount: String,
        amount: Number){
            this.fromAccount = fromAccount;
            this.toAccount = toAccount;
            this.amount =amount;
        }
}