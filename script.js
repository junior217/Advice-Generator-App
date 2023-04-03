const ADVICE_SLIP_API_URL = "https://api.adviceslip.com/advice";
const ADVICE = document.querySelector("#advice")
const ADVICE_ID = document.querySelector('#advice-id');


fetch(ADVICE_SLIP_API_URL).then(response => {
    return response.json()
}).then(adviceData => {
    const ADVICE_OBJECT = adviceData.slip;
    ADVICE.innerHTML = `<p> ${ADVICE_OBJECT.advice} </p>`
    console.log(ADVICE_OBJECT);
}).catch(error => {
    console.log(error.message);
});


function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 }  
 async function getAdvice() {    
    for (let i = 1; i <=1000 ; i++) {        
       await sleep(20000);  
       fetch(ADVICE_SLIP_API_URL).then(response => {
            return response.json()
        }).then(adviceData => {
            const ADVICE_OBJECT = adviceData.slip;
            ADVICE.innerHTML = `<p>"${ADVICE_OBJECT.advice}"</p>`;
            ADVICE_ID.textContent = `ADVICE #${ADVICE_OBJECT.id}`;
        console.log(ADVICE_OBJECT);
        }).catch(error => {
        console.log(error.message);
        });
    }  
 }  
 getAdvice();  