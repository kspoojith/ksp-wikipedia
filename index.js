let search = document.getElementById('searchInput');
let spinner = document.getElementById('spinner');

function displaySearchResults(results) {
    let resultsection = document.getElementById('searchResults');
    resultsection.textContent = '';
    let newdiv = document.createElement('div');
    newdiv.id = 'newdiv';
    for (let item of results) {
        let indiv = document.createElement('div');
        indiv.classList.add('result-item');

        let title = document.createElement('a');
        title.href = item.link;
        title.textContent = item.title;
        title.classList.add('result-title');

        let br = document.createElement('br');

        let link = document.createElement('a');
        link.href = item.link;
        link.textContent = item.link;
        link.classList.add('result-url');

        let description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add('link-description');

        indiv.appendChild(title);
        indiv.appendChild(br);
        indiv.appendChild(link);
        indiv.appendChild(description);
        newdiv.appendChild(indiv);
    }
    resultsection.appendChild(newdiv);
}

function searchwikipedia(event) {
    if (event.key === 'Enter' && event.target.value !== '') {
        spinner.classList.remove('d-none');
        let resultsection = document.getElementById('searchResults');
        resultsection.textContent = '';
        let options = {
            method: 'GET',

        };
        fetch('https://apis.ccbp.in/wiki-search?search=' + event.target.value, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                spinner.classList.add('d-none');
                displaySearchResults(json.search_results);
            });
    }
}
search.addEventListener('keydown', searchwikipedia);