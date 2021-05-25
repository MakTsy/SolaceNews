function validate_all() {
	return validate_card_number(this) & validate_expiration_date(this) & validate_cvv(this);	
}



function validate_card_number() {
 	let card_number = document.getElementById("card_number");
    let re = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    if(!re.test(card_number.value)){
        redBorder(card_number);
        alert("Card number is incorrect!");
        return false;
    }
    else {
        blackBorder(card_number);
        return true;
    }
}

function validate_expiration_date() {
 	let expiration = document.getElementById("expiration");
    let re =/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if(!re.test(expiration.value)){
        redBorder(expiration);
        alert("Expiration date is incorrect!\nNeeded format is: dd/mm");
        return false;
    }
    else {
        blackBorder(expiration);
        return true;
    }
}

function validate_cvv() {
 	let cvv = document.getElementById("cvv");
    let re = /^\d{3}$/;
    if(!re.test(cvv.value)){
        redBorder(cvv);
        alert("CVV is incorrect!");
        return false;
    }
    else {
        blackBorder(cvv);
        return true;
    }
}
