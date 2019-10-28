// var dummyArticles = [{"article_title": "article title","article_link": "article link", "article_saved": false, "article_comment_collection": [{"article_comment": "I'm a comment"}]},{"article_title": "article title 2","article_link": "article link 2", "article_saved": false, "article_comment_collection": [{"article_comment": "I'm another comment"}]}];
var dummyArticles = [];

$(document).ready(function(){
    console.log("javascript running")
    console.log(dummyArticles.length);
    
    if (dummyArticles.length) {
        $("#no-articles").addClass("hidden");
        $("#articles").removeClass("hidden");
        for (var i = 0; i < dummyArticles.length; i++) {
            console.log(dummyArticles[i]);
            var title = dummyArticles[i].article_title;
            var link = dummyArticles[i].article_link;
            $("#articles").append(`<p>${title}</p><p>${link}</p>`);
        };

    } else {
        $("#no-articles").removeClass("hidden");
        $("#articles").addClass("hidden");
    };

})