const curr1=document.getElementById('currency-one');
const curr2=document.getElementById('currency-two');
const amt1=document.getElementById('amount-one');
const amt2=document.getElementById('amount-two');

const rateE1=document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate()
{
    const currency1=curr1.value;
    const currency2=curr2.value;
    fetch(`https://v6.exchangerate-api.com/v6/ee871c0cc10165b24c283986/latest/${currency1}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        const rate=data.conversion_rates[currency2];
        rateE1.innerText=`1 ${currency1}=${rate} ${currency2}`;
        amt2.value=(amt1.value *rate).toFixed(4);
});
}


curr1.addEventListener('change',calculate);
amt1.addEventListener('input',calculate);
curr2.addEventListener('change',calculate);
amt2.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
    const temp=curr1.value;
    curr1.value=curr2.value;
    curr2.value=temp;
});
calculate();