async function SaveCard(){
    const successFormId = "success_form";
    const successForm = document.getElementById(successFormId);

    if(!validate_all()) {
    	return;
    }

    openPopUp(successFormId);
    await sleep(1000);
    location.href="ProfilePage.html";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}