var baseurl = "http://localhost:1313/";

var lunrIndex;
var pagesIndex;

function initLunr() {
  $.getJSON(baseurl + "site.json")
    .done(function (index) {
      pagesIndex = index;
      lunrIndex = lunr(function(){
        this.ref('uri');
        this.field('title', {
          boost: 15
        });
        this.field('tags', {
          boost: 10
        });
        this.field("content", {
          boost: 5
        });

        pagesIndex.forEach(function (page) {
          this.add(page);
        }, this);
      })
      lunrIndex.pipeline.remove(lunrIndex.stemmer)
      console.info(lunrIndex);
    })
    .fail(function (jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.error("Error getting Hugo index flie:", err);
    });
}

function search(query) {
  return lunrIndex.search(query).map(function (result) {
    return pagesIndex.filter(function (page) {
      return page.uri === result.ref;
    })[0];
  });
}

function results(r) {
  console.info('results are', r);
  window.localStorage.setItem('results', JSON.stringify(r));

  window.location.href = baseurl + 'search';
}

initLunr();

$(document).ready(function(){
  var result;
  var filterBy;
  
  $('#search-input-site').keypress(function(e){
    if (e.which === 13) {
      result = search($(this).val());
      results(result)
    }
  })

  $('#search-button-site').click(function(){
    var searchBy = $('#search-input-site').val();
    result = search(searchBy);
    results(result)
  })

});