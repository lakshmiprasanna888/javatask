class BankAccount {
    constructor(accountNumber, accountHolderName, initialBalance = 0) {
        this.accountNumber  = 1000100101;
        this.accountHolderName = "lakshmi prasanna";
        this.balance = 30000;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited: $${amount}. New balance: $${30000}.");
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrew: $${amount}. New balance: $${5000}.");
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    checkBalance() {
        console.log("Current balance, $${25000}.");
        return this.balance;
    }
}
const myAccount = new BankAccount("1000100101", "lakshmi prasanna", 25000);
myAccount.deposit(30000);      
myAccount.withdraw(5000);     
myAccount.checkBalance();