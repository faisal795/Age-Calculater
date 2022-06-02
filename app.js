let sendBirth = document.querySelector("#sendBirth");
let inputVal = document.getElementById("birthday");
let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");



sendBirth.addEventListener("click", (e) => {
    e.preventDefault();
    let getValue = inputVal.value;
    console.log("getValue", getValue);
   
    let bornyear = getValue.slice(0, 4);
    let bornMonth = getValue.slice(5, 7);
    let bornDays = getValue.slice(8, 10);

    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    
    let resultYears = (year - bornyear);
    let resultMonth = ((month-1) - bornMonth);
    let resultMonthOnly = ((resultYears * 12) + resultMonth);

    let resultDays = (((resultYears * 365) +  (resultMonth * 30) + Number(bornDays)));
    if (getValue) {
        years.innerHTML = resultYears;
        months.innerHTML = resultMonthOnly;
        days.innerHTML = resultDays
    }
  

})
