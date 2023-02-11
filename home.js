// deposit calculation part:
document.getElementById("deposit-btn").addEventListener("click",function(){

    // step-1 get the input amount
    let depositField = document.getElementById("deposit-Input");

    // step-1.1 conver the user input into number
    let newDepositAmount = parseFloat(depositField.value);
   
    
    // step-2 get the totall amount
    let depositTotallAmount = document.getElementById("display-deposit");

    // step-2.2 convert the totall amount
    let OldDepositTotall = parseFloat(depositTotallAmount.innerText);

    // totall Diposit amount:
    let totalDipositAmount= newDepositAmount + OldDepositTotall;

     // set the totall diposit amount:
    depositTotallAmount.innerText = totalDipositAmount;

    // clear deposit field:
    depositField.value = "";

    // step-3
    let totalBalanceOldString = document.getElementById("totall-balance");
    // typeConvert:
    let totalBalanceOld = parseFloat(totalBalanceOldString.innerText);

    // step-4:
    let totallBalance = newDepositAmount + totalBalanceOld;

    // set totall updated balance
    totalBalanceOldString.innerText = totallBalance;
    
});

// withdraw amount:
document.getElementById("Withdraw-btn").addEventListener("click", function(){

   // taking the withdraw input amount:
   let withdrawAmountStrings = document.getElementById("withdraw-field");
   // convert the amount   
   let withdrawAmount = parseFloat(withdrawAmountStrings.value);

   // taking the withdraw display amount:
   let displayWithdrawAmountString = document.getElementById("display-withdraw");
   // convert the amount 
   let displaywithdrawAmount = parseFloat(displayWithdrawAmountString.innerText);

   // set the display withdraw amount:
   let totallWithdrawAmount = withdrawAmount + displaywithdrawAmount;
   displayWithdrawAmountString.innerText = totallWithdrawAmount;


//    update the totall balance:

    // get the totall balance:
    let totallBalanceDisplay = document.getElementById("totall-balance");
    let totalBalanceOld = parseFloat(totallBalanceDisplay.innerText);
    
    // set the totall balance
    let totalBalance =  totalBalanceOld - withdrawAmount;
    totallBalanceDisplay.innerText = totalBalance;
    
    // Refresh the field:
    withdrawAmountStrings.value = "";  



});