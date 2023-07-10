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
  let mainTitle = document.getElementById('#main-title');

  // Part 2
  document.body.style.backgroundColor = 'red';

  // Part 3
  let domFavorite = document.getElementById('favorite-things');
  domFavorite.removeChild(domFavorite.lastElementChild);

  // Part 4
  let changeSpecialTitle = document.querySelectorAll('.special-title');
  for(let i = 0; i < changeSpecialTitle.length; i++){
    changeSpecialTitle[i].style.fontSize = '2rem';
  }

  // Part 5
  let pastRaces = document.getElementById('past-races');
  pastRaces.removeChild(pastRaces.children[3]);
  

  // Part 6
  let newRace = document.createElement('li');
  newRace.innerHTML = 'Denver';
  pastRaces.appendChild(newRace);

  // Part 7
  let blogPost = document.createElement('div');
  blogPost.classList.add('blog-post');

  let denver2 = document.createElement('h2');
  denver2.style.color ='white';
  denver2.textContent = 'Denver';

  let reasonP = document.createElement('p');
  reasonP.textContent = 'I RAN A RED LIGHT!';

  blogPost.appendChild(denver2);
  blogPost.appendChild(reasonP);

  const main = document.querySelector('.main');
  main.appendChild(blogPost);


  // Part 8
  let randomQ = document.querySelector('#quote-title');
  randomQ.addEventListener('click', randomQuote);
  

  // Part 9
  let selectBlogPost = document.querySelectorAll('.blog-post');
  selectBlogPost.forEach(selectBlogPost => {
    selectBlogPost.addEventListener('mouseout', () =>{
      selectBlogPost.classList.toggle('purple');
    });

    selectBlogPost.addEventListener('mouseenter', () =>{
      selectBlogPost.classList.toggle('red');
    });
  });
