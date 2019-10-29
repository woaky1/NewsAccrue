
$(document).ready(function(){
    console.log("javascript running")
    $.ajax({
        url: "/api",
        method: "GET"
      }).then (
        function(response) {
            if (response.length) {
                $("#no-articles").addClass("hidden");
                $("#articles").removeClass("hidden");
                for (var i = 0; i < response.length; i++) {
                    console.log(response[i]);
                    var title = response[i].article_title;
                    var link = response[i].article_link;
                    $("#articles").append(`<p>${title}</p><p>${link}</p>`);
                };
        
            } else {
                $("#no-articles").removeClass("hidden");
                $("#articles").addClass("hidden");
            };
          // Reload the page to get the updated list
          location.reload();
        }
      );
});