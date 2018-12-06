class BankAccount
{
    constructor(accountNumber,accountHolderName,accountBalance)
    {
        this.accountNumber=BankAccount;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
    }
    deposit(amount)
    {
        this.accountBalance+=amount;
    }
    getAccountBalance()
    {
            console.log("Account balance->"+this.accountBalance);
    }
}
// class for saving 
class Saving extends BankAccount
{
        constructor(accountNumber,accountHolderName,accountBalance,isSalary)
        {
        super(accountNumber,accountHolderName,accountBalance)
        this.isSalary=isSalary;
        }
        withdraw(amount)
        {
            if(this.accountBalance>=amount)
            {
            this.accountBalance-=amount;
            }
            else
            {
                console.log("Insufficient Amount");
            }
        }
        getAccountBalance()
        {
            console.log("Savings Account balacne->"+this.accountBalance);
        }
}
// class for current account
class Current extends BankAccount
{
        constructor(accountNumber,accountHolderName,accountBalance,odLimit)
        {
        super(accountNumber,accountHolderName,accountBalance)
        this.odLimit=odLimit;
        }
        withdraw(amount)
        {
            if(this.accountBalance+this.odLimt<=amount)
            {
                console.log("Insufficient Amount");
            } 
            else
            {
                this.accountBalance-=amount;
            }
        }
            getAccountBalance()
            {
                console.log("Current Accout balance->"+ this.accountBalance);
            }
}
        var BankAccountObject=new BankAccount(43532,"Theja",5000);      //object for BankAccount
        var CurrentAccountObject=new Current(23456,"Bhanu",5000,3000)   //object for CurrentAccount
        var SavingAccountObject=new Saving(12345,"priyanka",5000,true); //object for SavingAccountss  
        BankAccountObject.deposit(5000);
        CurrentAccountObject.withdraw(2500);
        BankAccountObject.getAccountBalance();
        SavingAccountObject.getAccountBalance();
        CurrentAccountObject.getAccountBalance();
       
      