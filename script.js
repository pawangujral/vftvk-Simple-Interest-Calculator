function compute(event) {
    event.preventDefault();
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("years").value;  
    const errorNode = document.getElementById("error"); 

    if(!principal || !Number(rate) || !time) { 
        errorNode.classList.remove("hide");
        return;
    } 

    if(error) {
        errorNode.classList.add("hide");
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
    
}

document.getElementById("calculator-form").addEventListener("submit", compute);   

document.getElementById("rate").addEventListener("input", (e) => {
    document.getElementById("range-text").innerText = `${e.target.value}%`
})