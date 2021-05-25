let form = document.querySelector('.form');
form.addEventListener('submit',validateForm);

function validateForm(event){
    event.preventDefault();

    let form = document.querySelector('.form');
    let labels = form.querySelectorAll(".sign_parameter .text_input");
    let inputs = form.querySelectorAll(".sign_parameter input");

    let shouldSubmit = true;
    for(let i=0; i< inputs.length;i++){
        if(!inputs[i].value){
            redBorder(labels[i])
            shouldSubmit = false;
        }
        else{
            blackBorder(labels[i])
        }
    }

    if(!emailValidation()){
        shouldSubmit = false;
    }

    if(shouldSubmit) {
        window.location.href = "MainPage.html";
    }
}