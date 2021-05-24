function createArticlePopUp(){
    const previewTextId = "prev_text";
    const previewText = document.getElementById(previewTextId);

    if(previewText.style.display === "none"){
        openPopUp(previewTextId);
    }
    else{
        closePopUp(previewTextId);
    }
}
