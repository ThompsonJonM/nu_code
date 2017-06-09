var favTVshows = []
var tvShow;

for (var i = 1; i < 4 ; i++) {
  
  tvShow = prompt("what's your #" + i + " favorite TV show?");
  
  favTVshows.push(tvShow);
}

for (i = 0; i < favTVshows.length; i++) {
  
  alert(favTVshows[i]);
}