let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let main = document.getElementById('#main-title');

  // Part 2
  document.body.style.backgroundColor = 'red';

  // Part 3
  let domFavorite = document.getElementById('favorite-things');
  domFavorite.removeChild(domFavorite.lastChild);

  // Part 4
  let changeSpecialTitle = document.getElementsByClassName('.special-title');
  for(let i = 0; i<changeSpecialTitle.length; i++){
    changeSpecialTitle[i].style.fontSize = '2rem'; 
  }

  // Part 5
  let pastRaces = document.getElementById('#past-races');
  let removeChicago = pastRaces.getElementsByTagName('li')[3];
  pastRaces.removeChild(removeChicago);

  // Part 6
  let newRace = document.createElement('li');
  newRace.innerHTML = 'Denver';
  pastRaces.appendChild(newRace);

  // Part 7
  let blogPost = document.createElement('div').createElement('class = .blog-post');
  let denverH2 = blogPost.createElement('h2');
  let reasonP = blogPost.createElement('p');
  denverH2.innerHTML = 'DENVER';
  reasonP.innerHTML = 'I WENT VROOM VROOM!'

  blogPost.appendChild(denverH2);
  blogPost.appendChild(reasonP);


  // Part 8
  let randomQ = document.querySelector('#quote-title');
  randomQ.addEventListener('click', randomQuote);
  

  // Part 9
  let selectBlogPost = document.querySelectorAll('.blog-post');
  for(let i = 0; i < selectBlogPost.length; i++){
    selectBlogPost.addEventListener('mouseout', (event) =>{
      this.classList.toggle[i]('.purple');
    })
    selectBlogPost.addEventListener('mouseenter',(event)=>{
      this.classList.toggle[i]('.red');
    })
 }


});
