

// Weather Cards
function printResults(data) {
  for (let i = 0; i < data.length; i++) {
    
    const weather = data[i]


    const calanderDateEl = document.createElement('h3')
    calanderDateEl.setAttribute('class', 'calander-date')
    titleEl.textContent = article.title

    
    const descEl = document.createElement("p")
    descEl.textContent = article.description
    
    const card = document.createElement("div")







    card.appendChild(titleEl)
    card.appendChild(descEl)
    resultContentEl.appendChild(card)
  }
}


function getParams2() {
  const readEl = document.createElement('button')
  readEl.textContent = 'Read More'
  readEl.setAttribute('href', article.url)
}

getParams();