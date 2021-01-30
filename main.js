document.getElementById("economy-plus").addEventListener("click", function(){
    const economyInput = document.getElementById("economy-input");
    const economyValue = parseInt(economyInput.value);
    const economyNewValue = economyValue + 1;
    economyInput.value = economyNewValue;
    const economyTotal = economyNewValue * 100;
    document.getElementById("subtotal").innerText = economyTotal;
});
document.getElementById("economy-minus").addEventListener("click", function(){
    const economyInput = document.getElementById("economy-input");
    const economyValue = parseInt(economyInput.value);
    const economyNewValue = economyValue - 1;
    economyInput.value = economyNewValue;
    const economyTotal = economyNewValue * 100;
    document.getElementById("subtotal").innerText = economyTotal;
});

