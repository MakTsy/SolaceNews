let form = document.querySelector('.form');
form.addEventListener('submit',validateForm);

function validateForm(event){
    event.preventDefault();

    let form = document.querySelector('.form');
    let labels = form.querySelectorAll(".parameter .text_input");
    let inputs = form.querySelectorAll(".parameter input");

    let shouldSubmit = true;
    for(let i=0; i< inputs.length;i++){
        if(!inputs[i].value){
            console.log(labels[i])
            redBorder(labels[i])
            shouldSubmit = false;
        }
        else{
            console.log(labels[i].style)
            blackBorder(labels[i])
        }
    }

    if(!emailValidation()){
        shouldSubmit = false;
    }

    if(shouldSubmit)
        form.submit();
}