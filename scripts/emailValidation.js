function emailValidation(){
    let email = document.getElementById('email')
    let re = /^[^\s@]+@[^\s@]+$/;
    if(!re.test(email.value)){
        redBorder(email);
        return false;
    }
    else {
        blackBorder(email);
        return true;
    }
}