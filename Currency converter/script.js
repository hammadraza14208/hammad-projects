const fromCurrency = document.querySelector("#fromCurrency");
const toCurrency = document.querySelector("#toCurrency");
async function loadScreen(params) {
  try {
    const url = await fetch("https://open.er-api.com/v6/latest/USD");
    let response = await url.json();
    let refined = response.rates;
    console.log(refined)
    console.log(refined.USD,refined.PKR)
    let data = Object.keys(refined);
    data.forEach((item) => {
      let option = document.createElement("option");
      option.value = item;
      option.innerText = item;
      let option1 = document.createElement("option");
      option1.value = item;
      option1.innerText = item;

      fromCurrency.appendChild(option);
      toCurrency.appendChild(option1);
      if (item == "USD") {
        option.selected = true;
      }
      if (item == "PKR") {
        option1.selected = true;
      }
    });
  } catch {
    console.log("erorr form api");
  }
}
loadScreen();
let btn = document.querySelector(".convert-btn")
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  try {
    const url = await fetch("https://open.er-api.com/v6/latest/USD");
    let response = await url.json();
    let refined = response.rates;
    let data = Object.keys(refined);
    let from = document.querySelector(".from");
    let fromCode=from.value

    let to = document.querySelector(".to");
    let toCode=to.value
    let amount = document.querySelector("#amount");
    amountValue = Number(amount.value);

    console.log(amountValue,fromCode,toCode)
    let finalAmount = (amountValue / refined[fromCode]) * refined[toCode];
    // console.log(finalAmount)
    // console.log(refined)\
    document.querySelector("#result").innerText=`${fromCode} to ${toCode} = ${finalAmount.toFixed(2)}`;
  } catch {}
});
