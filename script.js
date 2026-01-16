const animeList = [
  {
    title: "Death Note",
    genre: ["Action","Thriller"],
    status: "Completed",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg"
  },
  {
    title: "Jujutsu Kaisen",
    genre: ["Action","Fantasy"],
    status: "Watching",
    img: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg"
  }
];

const grid = document.getElementById("animeGrid");

function display(list){
  grid.innerHTML="";
  list.forEach(a=>{
    grid.innerHTML += `
      <div class="card" data-genre="${a.genre.join(' ')}">
        <img src="${a.img}">
        <h4>${a.title}</h4>
        <p>${a.status}</p>
      </div>`;
  });
}

display(animeList);

function filterGenre(g){
  if(g==="all"){ display(animeList); return; }
  display(animeList.filter(a=>a.genre.includes(g)));
}
