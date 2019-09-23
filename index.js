$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = document.getElementById('searchTerms').value;
  $.get('https://api.github.com/search/repositories?q' + searchTerms, (response) => {
     
  });
  
}

// function searchRepositories() {
//   const searchTerms = document.getElementById('searchTerms').value
//   $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(response) {
//     $("#results").html(showRepositories(response));
//   }).fail(error => {
//     displayError()
//   })
// }


function searchRepositories(){
  const search_term = $("#searchTerms").val()
  $.get("https://api.github.com/search/repositories?q=" + search_term, (response) => {
    var output = []
    response.items.forEach((result) => {
      output.push(`<li><a href=${result.html_url}>${result.name} - ${result.description}</a> - <a href="#" data-owner="${result.owner.login}" data-repository="${result.name}" onclick="showCommits(this)">see commits</a></li>`)
    });
    $('#results').html("<ul>" + output.join("") + "</ul>")
  }).fail((error) => {
    console.log('Something went wrong: ' + error);
    displayError();
  });
}
