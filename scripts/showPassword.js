function show_hide_password(){
    try {
        let password_input = document.getElementById("password");
        show_hide(password_input);
    }
    catch (e){}

    try {
    let confirm_password = document.getElementById("confirm_password");
    show_hide(confirm_password);
    }
    catch (e){}
}

function show_hide(element){
    if (element.type === "password") {
        element.type = "text";
    } else {
        element.type = "password";
    }
}