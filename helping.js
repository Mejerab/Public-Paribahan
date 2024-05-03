document.getElementById('number').addEventListener('keyup', function (event) {
    const num = event.target.value;
    const submit = document.getElementById('submit');
    if (num.length === 11) {
        submit.removeAttribute('disabled');
    }
    else if(num.length !== 11){
        submit.setAttribute('disabled');
    }
})
// Cupon
document.getElementById('cupon-in').addEventListener('keyup', function (event) {
    const input = event.target.value;
    const apply = document.getElementById('apply-cupon');
    if (input === 'NEW15') {
        apply.removeAttribute('disabled');
        document.getElementById('apply-cupon').addEventListener('click', function () {
            const grandPrice = document.getElementById('grand-price');
            price = totalPrice.innerText * 0.15;
            grandPrice.innerText = totalPrice.innerText - price;
            inText = document.getElementById('cupon-in');
            inText.value = '';
        })
    }
    else if ( input === 'COUPLE20') {
        apply.removeAttribute('disabled');
        document.getElementById('apply-cupon').addEventListener('click', function () {
            const grandPrice = document.getElementById('grand-price');
            price = totalPrice.innerText * 0.2;
            grandPrice.innerText = totalPrice.innerText - price;
            inText = document.getElementById('cupon-in');
            inText.value = '';
        })
    }
    else if (input !== 'NEW15' || input !== 'COUPLE20') {
        apply.setAttribute('disabled', true)
    }
})

function success() {
    const firstMain = document.getElementById('first-page');
    firstMain.classList.add('hidden');
    const secondMain = document.getElementById('second-page');
    secondMain.classList.remove('hidden')
}
function returning() {
    const firstMain = document.getElementById('first-page');
    firstMain.classList.remove('hidden');
    const secondMain = document.getElementById('second-page');
    secondMain.classList.add('hidden')
}