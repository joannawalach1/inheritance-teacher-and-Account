class Account {
    balance;
    #number;
    #deposit;
    #withdraw
    constructor(balance = 0, number, deposit, withdraw) {
        this.balance = balance;
        this.#number = number;
        this.#deposit = deposit;
        this.#withdraw = withdraw;
    }
    getBalance() {
        return this.balance;
    }

    setBalance() {
        this.balance = balance;
    }


    getNumber() {
        return this.#number;
    }
    setNumber() {
        this.#number = number;
    }
    deposit(value) {
        this.balance += value;
        return this.balance;
    }
    withdraw(value) {
        this.balance -= value;
        return this.balance;
    }
}

class SavingAccount extends Account {
    constructor(balance, number, interest = 10, deposit, withdraw) {
        super(balance, number, deposit, withdraw)
        this.interest = interest;
    }
    setInterest() {
        this.interest = interest;
    }

    getInterest() {
        return this.interest;
    }


    addinterest(interest) {
        this.interest += interest;
        return this.interest;
    }

    calculateBalance() {

        this.balance += this.balance + ((this.balance * this.interest) / 100);
        return this.balance;
    }

}

/*
class CurrentAccount extends Account {
    constructor(balance, number, deposit, withdraw, overdraft_limit) {
        super(balance, number, deposit, withdraw)
        this.overdraft_limit = overdraft_limit;
    }
    setOverDraft_Limit() {

    }

    getOverDraft_Limit() {

    }
    addOverDraft_Limit(overdraft_limit) {
        const overdraftLimit = overdraft_limit;

    }
}
*/
const account = new Account(4000);
account.deposit(300);
account.deposit(5000);
account.withdraw(3000);
account.withdraw(5000);
console.log(account.balance);

const interest = new SavingAccount();
interest.addinterest(10);
console.log(interest.interest)
interest.calculateBalance();
console.log(interest.balance);
interest.getBalance();
console.log(interest.balance);