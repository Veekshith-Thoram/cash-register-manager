const billAmt = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check");
const errorMessage = document.querySelector("#error-message");
const availableNotes = [2000,500,100,50,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

function clickHandler(){
    validateBillAmount();
}

function validateBillAmount(){
    hideMessage();
    if (billAmt.value>0){
        validateBillVsCashPaid()
    } else {
        showMessage("Invalid bill amount.")
    }
}
function validateBillVsCashPaid(){
    if(Number(cashGiven.value) >= Number(billAmt.value)){
        const amountToBeReturned = Number(cashGiven.value) - Number(billAmt.value);
        calculateChange(amountToBeReturned);
    } else{
        showMessage("What? Do you want wash plates!!")
    }
}

function hideMessage(){
    errorMessage.style.display = "none";
}

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        if(numberOfNotes>0){
        noOfNotes[i].innerText = numberOfNotes;
        }
    }
}

function showMessage(message){
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

checkBtn.addEventListener("click", clickHandler)