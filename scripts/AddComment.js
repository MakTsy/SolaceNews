function AddComment(){
    let commentatorInput = document.getElementById("commentator_message");
    const message = commentatorInput.value;
    commentatorInput.value = "";
    const commentDiv = document.getElementById("another_comments");
    const newComment = "<div class=\"comment_field\"><a href=\"#\"><img src=\"img/Bogdan.jpg\"></a><div class=\"comment\">\n" +
        `<h5>Bogdan Naida</h5> <p>${message}</p></div></div>`;

    commentDiv.insertAdjacentHTML("afterbegin",newComment);

    return false;
}
g