// function for showing default advice
async function defaultAdvice() {
    const reponse = await fetch('https://api.adviceslip.com/advice/71');
    
    if(reponse.ok) {
        const defaultAd = await reponse.json();
        fillContent(defaultAd);

    }
}

// function for displaying advice
function fillContent(ad) {
    adviceID.textContent = ad.slip.id;
    adviceText.innerHTML = `
        <span id="ldq"></span>${ad.slip.advice}<span id="rdq"></span>
    `;
}

const btn = document.querySelector('button');
const adviceID = document.getElementById('adID');
const adviceText = document.getElementById('adText');

defaultAdvice();

btn.addEventListener('click', () => {
    
    fetch('https://api.adviceslip.com/advice')
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw Error(res.status);
            }
        })
        .then(advice => {
            fillContent(advice);
        })
        .catch(err => alert(err.message));
})

// 214
// 176