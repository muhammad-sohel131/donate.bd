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

            textField.value = '';

            addHistory(parent.querySelector(".card-title").innerText, fieldValue);
        }
    }
}

function addHistory(title,amount){
    title = amount + " Taka is Donated" +title.slice(6);
    let date = "Date : " + new Date();

    const history = document.querySelector("#historySection .container");

    history.innerHTML += `
    
         <div class="card lg:card-side bg-base-100 shadow-xl mt-9 border-[rgba(17,17,17,.1)] border">
                    <div class="card-body lg:w-1/2">
                        <h2 class="card-title">${title}</h2>
                        <p class="text-[rgba(17,17,17,.7)]"> ${date}</p>
                    </div>
                </div>
    `

    my_modal_1.showModal();
}

function opneModal(){
    
}