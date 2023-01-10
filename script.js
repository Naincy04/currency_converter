const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");

getButton = document.querySelector("form button");

getButton.addEventListener("click", e=>{
    e.preventDefault();
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal== " " || amountVal == "0"){
        amount.value="1";
        amountVal = 1;
    }
    let url = `https://v6.exchangerate-api.com/v6/c0746ea03c6ec09bcf46748b/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangerate = result.conversion_rates[toCurrency.value];
        let totalExchanegerate = (amountVal * exchangerate).toFixed(2);
        const exchangerateTxt = document.querySelector(".exchange-rates");
        exchangerateTxt.innerText =  `${amountVal} ${fromCurrency.value} = ${totalExchanegerate} ${toCurrency.value}`;
    })
}