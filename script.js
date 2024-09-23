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