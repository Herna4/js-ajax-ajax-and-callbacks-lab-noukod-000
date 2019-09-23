$(document).ready(function (){
});

function searchRepositories(){
  const searchTerms = document.getElementById('searchTerms').value;
  $.get('https://api.github.com/search/repositories?q' + searchTerms, (response) => {
     $("#results").html(showRepositories(response));
  }).fail(error => {
    displayError()
  })
  
}

function showRepositories(response) {
  let repoList = `<ul>${response.items.map(repo => {
    return (
      `<li>
        <h1>${repo.name}</h1>
        <p>${repo.description}</p>
        <a href="${repo.html_url}">${repo.html_url}</a>
        <p>${repo.owner.login}</p>
        <img src="${repo.owner.avatar_url}" height="32" width="32">
        <a href="${repo.owner.url}">${repo.owner.url}</a>
        <a href="#" data-owner="${repo.owner.login}" data-repository="${repo.name}" onClick="showCommits(this)">Show Commits</a>
      </li>`)}).join('')}
  </ul>`
  return repoList
}



function displayError() {
    $("#errors").html("I'm sorry, there's been an error. Please try again.");
}