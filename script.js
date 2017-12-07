
$(document).ready(function() {
  $("#search_val").val('');  
  console.log('document ready');
  $('form').submit(function(event) {
    event.preventDefault();
    $(".results").html('');
    let search_val = $("#search_val").val();
    queryData = {
      "action": "query",
      "format": "json",
      "list": "search",
      "srsearch": search_val
    };
    $.ajax( {
        url: "https://en.wikipedia.org/w/api.php",
        data: queryData,
        dataType: 'jsonp',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
           for (let query of data.query.search) {
             console.log(query);
             let result = '<div class="search_result"><h2 class="search_title">' + query.title + '</h2><p class="search_snippet">' + query.snippet + '</p></div>';
             $(".results").append('<a href="https://en.wikipedia.org/?curid=' + query.pageid + '">' + result + '</a>');
           }
        }
    });
  });
});