document.getElementById("calculator-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("years").value;  

    if(!principal || Number(principal) <= 0) {
        alert("enter a positive number");
        document.getElementById("principal").focus();
        return;
    } 

    const calculate = (principal * rate * time)/100; 

    const result = document.getElementById("result");
    const principalResult = document.getElementById("principal-value");
    const rateResult = document.getElementById("rate-value");
    const interestResult = document.getElementById("interest-value"); 
    const yearResult = document.getElementById("year-value"); 

    result.classList.remove("hide");
    principalResult.innerText = principal;
    rateResult.innerText = rate;
    interestResult.innerText = calculate;
    yearResult.innerText = new Date().getFullYear() + Number(time); 
    
});   

document.getElementById("rate").addEventListener("input", (event) => {
    document.getElementById("range-text").innerText = `${event.target.value}%`;
})