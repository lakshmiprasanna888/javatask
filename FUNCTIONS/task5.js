class Loan {
    constructor(loanAmount, interestRate, loanTerm) {
        this.loanAmount = loanAmount; // Total loan amount
        this.interestRate = interestRate; // Annual interest rate (as a percentage)
        this.loanTerm = loanTerm; // Loan term in months
        this.emisPaid = 0; // Number of EMIs paid
    }

    calculateMonthlyPayment() {
        const monthlyInterestRate = this.interestRate / 100 / 12;
        const numerator = this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, this.loanTerm);
        const denominator = Math.pow(1 + monthlyInterestRate, this.loanTerm) - 1;
        const monthlyPayment = numerator / denominator;

        return monthlyPayment;
    }

    checkLoanStatus() {
        const monthlyPayment = this.calculateMonthlyPayment();
        const totalPaid = this.emisPaid * monthlyPayment;
        const remainingLoanAmount = this.loanAmount - totalPaid;
        const remainingInterest = (this.loanAmount * (this.interestRate / 100)) * (this.emisPaid / this.loanTerm);
        const totalRemaining = remainingLoanAmount + remainingInterest;

        console.log("EMIs Paid, ${this:emisPaid}");
        console.log("Total Paid: $${totalPaid.toFixed(2)}");
        console.log("Remaining Amount to Clear (including interest): $${totalRemaining.toFixed(2)}");
    }

    payEMI() {
        if (this.emisPaid < this.loanTerm) {
            this.emisPaid++;
            console.log("EMI paid. Total EMIs paid: ${this.emisPaid}.");
        } else {
            console.log("All EMIs have been paid.");
        }
    }
}

// Example usage
const myLoan = new Loan(50000, 5, 60); // $50,000 loan, 5% interest, 60 months term
const monthlyPayment = myLoan.calculateMonthlyPayment();
console.log("Monthly Payment (EMI): $${monthlyPayment.toFixed(2)}");

myLoan.payEMI(); // Pay one EMI
myLoan.checkLoanStatus(); // Check loan status