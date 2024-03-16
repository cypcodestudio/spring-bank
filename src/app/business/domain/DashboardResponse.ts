export class DashboardResponse{
    account: String;
    balance: Number;
    overdraft: Number;
    
    constructor(account: String, balance: Number, overdraft: Number){
        this.account = account;
        this.balance = balance;
        this.overdraft = overdraft;
    }
}