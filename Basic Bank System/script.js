let myAccountbalance = parseInt(document.getElementById("myAccountbalance").innerText);
function sendMoney(){
    var enterName =document.getElementById('enterName').Value;
    var enterAmount = parseInt(document.getElementById('enterAmount').value)
    if(enterAmount > 8000){
        alert("Insufficient balance")
    }else{
        var findUserBankAccount = enterName+ "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountbalance = parseInt(document.getElementById("myAccountbalance").innerText) - enterAmount
        document.getElementById("myAccountbalance").innerText = myAccountbalance
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert($(enterAmount),$(enterAmount));
         //transaction history
         var creatPTag = document.createElement("li");
         var textNode = document.createTextNode($(enterAmount),$(enterAmount));
         var element = document.getElementById("transaction-history-body");
         element.insertBefore(creatPTag,element.firstChild);
    }
}