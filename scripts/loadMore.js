function loadMore() {
    let html = '<a href="#">Post-Impeachment Updates: Republican Leaders Divided Over Trump’s Future Influence</a>\n' +
        '                <p>Senator Lindsey Graham of South Carolina made a full-throated case for Mr. Trump as an essential\n' +
        '                    player in the party in the coming Senate and House elections, saying “Trump-plus is the way back in 2022.”\n' +
        '                    Another Republican, Senator Bill Cassidy of Louisiana, called ....</p>\n' +
        '                <img alt="" src="img/trump.jpeg">\n' +
        '                <h6>By Karen Heller | Photos by Michael S. Williamson</h6>\n' +
        '                <hr/>\n'

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.innerHTML = html;
    div2.innerHTML = html;
    document.getElementsByClassName('content_column')[0].appendChild(div1);
    document.getElementsByClassName('content_column')[1].appendChild(div2);
    div1.classList.add("article_preview");
    div2.classList.add("article_preview");
}