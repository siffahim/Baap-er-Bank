


document.getElementById('deposit-btn').addEventListener('click', () => {
    const depositInput = document.getElementById('input-deposit');
    const depositInputValue = parseFloat(depositInput.value);

    if (depositInputValue > 0) {
        const displayDeposit = document.getElementById('deposit-display');
        const displayDepositValue = parseFloat(displayDeposit.innerText);
        displayDeposit.innerText = depositInputValue + displayDepositValue;


        const displayBalance = document.getElementById('balance-display');
        const displayBalanceValue = parseFloat(displayBalance.innerText);
        displayBalance.innerText = displayBalanceValue + depositInputValue;
    }



    depositInput.value = '';
})

//withdraw here
document.querySelector('#withdraw-btn').addEventListener('click', () => {
    const withdrawInput = document.getElementById('input-withdraw');
    const withdrawInputValue = parseFloat(withdrawInput.value);

    //balance 
    const displayBalance = document.getElementById('balance-display');
    const displayBalanceValue = parseFloat(displayBalance.innerText);

    if (withdrawInputValue > 0 && withdrawInputValue < displayBalanceValue) {

        const displayWithdraw = document.querySelector('#withdraw-display');
        const displayWithdrawValue = parseFloat(displayWithdraw.innerText);
        displayWithdraw.innerText = withdrawInputValue + displayWithdrawValue;


        displayBalance.innerText = displayBalanceValue - withdrawInputValue;
    }

    if (withdrawInputValue > displayBalanceValue) {
        alert('Sorry, your amount is low!')
    }
    withdrawInput.value = '';
})