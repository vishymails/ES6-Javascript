class Account {

    constructor(balance)
    {
        this.balance = balance;
    }
    toString(){
        return 'Available Balance' + this.balance;
    }

}
class CorporateAccount extends Account{

constructor(balance, deposit){
    super(balance);
    this.deposit = deposit;
}
toString(){
    return 'Available Balance' + this.balance + "Deposit " + this.deposit;
}
}




console.log("Test" + new Account(10000));
