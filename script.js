const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");

donationBtn.addEventListener("click", showSection);
historyBtn.addEventListener("click", showSection);

function showSection(event){
    const target = event.target.id;
    
    document.getElementById(target).classList.remove('white-btn');

    let targetId;
    let currentSection;
    let targetSection;
    if(target == "donationBtn"){
        targetId = "historyBtn";
        currentSection = "historySection";
        targetSection = "cardSection";
    }else {
        targetId = "donationBtn";
        currentSection = "cardSection";
        targetSection = "historySection";
    }


    document.getElementById(targetId).classList.add("white-btn");
    document.getElementById(currentSection).style.display = "none";
    document.getElementById(targetSection).style.display = "block";

    
}


const donateBtns = document.getElementsByClassName('donate-now-btn');
for(let i = 0; i < donateBtns.length; i++){
    donateBtns[i].addEventListener('click', addDonate);
}

function addDonate(event){
    const currentAccounts = document.getElementsByClassName("current-account");
    let parent = event.target.parentElement;
    let amountElement = parent.querySelector(".amount");
    const textField = parent.querySelector(".input-bordered");

    let fieldValue = textField.value;
    let amount = amountElement.innerText;
    let currentAccountValue = currentAccounts[0].innerText;

    if(isNaN(fieldValue) || fieldValue === ''){
        alert("Please, Enter Donation Amount!");
        textField.value = '';
    }else {
        fieldValue = parseFloat(fieldValue);
        amount = parseFloat(amount);
        currentAccountValue = parseFloat(currentAccountValue);

        if(currentAccountValue < fieldValue){
            alert("Insufficient Balance!");
        }else{
            amount += fieldValue;
            currentAccountValue -= fieldValue;

            amountElement.innerText = amount;
            currentAccounts[0].innerText = currentAccountValue;
            currentAccounts[1].innerText = currentAccountValue;

            alert("Donation successfull!")
            textField.value = '';
        }
    }
}