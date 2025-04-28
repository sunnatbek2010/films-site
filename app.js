let listItem = document.querySelector(".list-item");

let APIkey = "5330fd09405b8a400c12703545a6393a";

async function dataFetch() {
   let fetchList = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}`
   );
   let list = await fetchList.json();
   console.log(list);
   listItem.innerHTML = list.results
      .map(
         (el) =>
            `
        <div class="section">
                <a href="index2.html">
                  <img class="poster" src="https://image.tmdb.org/t/p/original${el.poster_path}" alt="movie img" width="200">
                 </a>
            <div class="buttons">
                <li>${el.title}</li>
                <div>
                <button>hd</button>
                <button>season 1</button>
                </div>
          </div>
        </div>
  
    
    `
      )
      .join(" ");
      
}

dataFetch();