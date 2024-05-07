const searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchInputVal = document.querySelector('#search-input-city').value;
  

  if (!searchInputVal) {
    console.error('You need a search a city!');
    return;
  } 
    localStorage.setItem(`search`, searchInputVal);
    console.log(searchInputVal)
    document.location.href='index.html';
  
}


searchFormEl.addEventListener('submit', handleSearchFormSubmit);


