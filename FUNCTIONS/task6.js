
class Loan {
    constructor(loanId, applicantName, loanAmount, monthlyIncome, accountBalance) {
      this.loanId = loanId;
      this.applicantName = applicantName;
      this.loanAmount = loanAmount;
      this.monthlyIncome = monthlyIncome;
      this.accountBalance = accountBalance;
      this.status = "pending";
    }
  }

  class LoanManager {
    constructor() {
      this.loans = [];
    }
  
    applyLoan(loanId, applicantName, loanAmount, monthlyIncome, accountBalance) {
      const loan = new Loan(loanId, applicantName, loanAmount, monthlyIncome, accountBalance);
      this.loans.push(loan);
      return loan;
    }
    approveLoan(loanId) {
      const loan = this.loans.find((loan) => loan.loanId === loanId);
      if (loan) {
        if (this.isEligible(loan)) {
          loan.status = "approved";
          console.log(`Loan ${loanId} approved for ${loan.applicantName}`);
        } else {
          loan.status = "rejected";
          console.log(`Loan ${loanId} rejected for ${loan.applicantName}`);
        }
      } else {
        console.log(`Loan ${loanId} not found`);
      }
    }
  
    rejectLoan(loanId) {
      const loan = this.loans.find((loan) => loan.loanId === loanId);
      if (loan) {
        loan.status = "rejected";
        console.log(`Loan ${loanId} rejected for ${loan.applicantName}`);
      } else {
        console.log(`Loan ${loanId} not found`);
      }
    }
  
    isEligible(loan) {
      return loan.monthlyIncome >= 30000 && loan.accountBalance >= 10000;
    }

    displayLoans() {
      console.log("All Loans:");
      this.loans.forEach((loan) => {
        console.log(`Loan ID: ${loan.loanId}, Applicant Name: ${loan.applicantName}, Status: ${loan.status}`);
      });
    }
  }
  
 
  
  
  
  