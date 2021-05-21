function ReadMore(){
    const readMoreText = document.getElementById("read_more_text");
    const readMoreButton = document.getElementById("read_more_button");

    if(readMoreText.style.display === "none"){
        readMoreText.style.display = "block";
        readMoreButton.textContent = "Hide";
    }
    else{
        readMoreText.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
}