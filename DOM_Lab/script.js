let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.classList.add('flex-ctr');

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];



for(let i = 0; i <= menuLinks.length; i++){
    let a = document.createElement('a');
    a.setAttribute('href',menuLinks[i].href);
    a.innerHTML = menuLinks[i].text;
    topMenuEl.append(a);

}



