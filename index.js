
// 669f2553f52c85815c5e7c10b3197af7

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
    console.log(data.results[0].original_title)
    document.querySelector('.title').innerHTML = data.results[0].original_title;
    document.querySelector('.card-text').innerHTML = data.results[0].overview;
    document.querySelector('.card-img-top').src = "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path;
    
};
xhr.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=669f2553f52c85815c5e7c10b3197af7");
xhr.send();