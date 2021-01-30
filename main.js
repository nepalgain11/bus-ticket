// first class function area

document.getElementById("first-plus").addEventListener("click", function(){
    firstClassFunction("increase");
});
document.getElementById("first-minus").addEventListener("click", function(){
    firstClassFunction("decrease");
});

function firstClassFunction(firstIncrease){
    const firstInput = document.getElementById("first-input");
    const firstValue = parseInt(firstInput.value);
    var increaseDecrease = firstValue;
    if(firstIncrease == "decrease" && firstValue > 0){
        increaseDecrease = firstValue - 1;
    }
    if(firstIncrease == "increase"){
        increaseDecrease = firstValue + 1;
    }
    firstInput.value = increaseDecrease;
    const firstTotal = increaseDecrease * 150;
    document.getElementById("pop-first-class").innerText ="$" + firstTotal;
    ticketTotalCost()
}




// economy function area
document.getElementById("economy-plus").addEventListener("click", function(){
    economyFunction("increase")
});
document.getElementById("economy-minus").addEventListener("click", function(){
    economyFunction("decrease")
});

function economyFunction(economyIncrease){
    const economyInput = document.getElementById("economy-input");
    const economyValue = parseInt(economyInput.value);
    var increaseDecrease = economyValue;
    if(economyIncrease == "increase"){
        increaseDecrease = economyValue +1;
    }
    else if(economyIncrease == "decrease" && economyValue > 0){
        increaseDecrease = economyValue - 1;
    }
    economyInput.value = increaseDecrease;
    const economyTotal = increaseDecrease * 100;
    document.getElementById("pop-economy-class").innerText = "$" + economyTotal;
    ticketTotalCost()
}



// subtotal, vat, inTotal 

function ticketTotalCost(){

    const economyInput = document.getElementById("economy-input");
    const economyValue = parseInt(economyInput.value);

    const firstInput = document.getElementById("first-input");
    const firstValue = parseInt(firstInput.value);

    var totalTicketPrice = economyValue * 100 + firstValue*150;
    document.getElementById("subtotal").innerText =  totalTicketPrice;
    let vatCount = totalTicketPrice * 10 /100;
    document.getElementById("vat").innerText = vatCount;
    document.getElementById("pop-vat").innerText = "$" + vatCount;    
    var inTotal = totalTicketPrice + vatCount;
    document.getElementById("in-total").innerText = "$" + inTotal;
    document.getElementById("pop-total").innerText = "$" + inTotal;
}








































