$(function() {
    $("#submit-btn").click(function(event) {
        event.preventDefault();
        var searchQuery = $("#search-input").val();

        var apiRoute = `https://api.giphy.com/v1/gifs/search?api_key=f9374633a53a4bd9906f881af8d3b491&q=${searchQuery}&limit=25&offset=0&rating=G&lang=en`;

        $.get({
                url: apiRoute
            })
            .done(function(response) {
                var currentRow;
                for (var i = 0; i < response.data.length; i++) {
                    if (i % 4 == 0) {
                        currentRow = $("<div>");
                        currentRow.addClass("row");
                        $("#img-zone").append(currentRow);
                    }
                    var div = $("<div>");
                    div.addClass("col-md-4");
                    var tempImg = $("<img>");
                    tempImg.attr("src", response.data[i].images.fixed_height.url);
                    div.append(tempImg);
                    $(currentRow).append(div);
                }
            })
    })
})