  let selectElm = document.querySelector('select');
  selectElm.addEventListener('change', function(event) {
    const chosen = event.target.value;
    if (chosen === 'creditCard') {
        const credit = document.getElementById('creditCardNumberContainer');
        credit.classList.remove('hide');
        const paymepal = document.getElementById('paypalUsernameContainer');
        paymepal.classList.add('hide');
        const checkingpay = document.getElementById('paypalUsername');
        checkingpay.required = false
        const checkingCredit = document.getElementById('creditCardNumber');
        checkingCredit.required = true
        }
    else if (chosen === 'paypal') {
        const paymepal = document.getElementById('paypalUsernameContainer');
        paymepal.classList.remove('hide');
        const credit = document.getElementById('creditCardNumberContainer');
        credit.classList.add('hide');
        const checkingCredit = document.getElementById('creditCardNumber');
        checkingCredit.required = false
        const checkingpay = document.getElementById('paypalUsername');
        checkingpay.required = true
    }
    else if (chosen === 'none') {
        const credit = document.getElementById('creditCardNumberContainer');
        credit.classList.add('hide');
        const paymepal = document.getElementById('paypalUsernameContainer');
        paymepal.classList.add('hide');
    }
});