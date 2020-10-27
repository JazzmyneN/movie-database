let result = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    const data = JSON.parse(xhr.response);
    console.log(data);
    console.log(data.results[0].original_title)
    document.querySelector('.tv_slide_one_title').innerHTML = data.results[0].original_title;
    document.querySelector('.tv_slide_one').innerHTML = data.results[0].overview;
    document.querySelector('.firstm').src = "https://image.tmdb.org/t/p/original/" + data.results[0].poster_path;

    document.querySelector('.tv_slide_two_title').innerHTML = data.results[1].original_title;
    document.querySelector('.tv_slide_two').innerHTML = data.results[1].overview;
    document.querySelector('.secondm').src = "https://image.tmdb.org/t/p/original/" + data.results[1].poster_path;

    document.querySelector('.tv_slide_three_title').innerHTML = data.results[2].original_title;
    document.querySelector('.tv_slide_three').innerHTML = data.results[2].overview;
    document.querySelector('.thirdm').src = "https://image.tmdb.org/t/p/original/" + data.results[2].poster_path;
}
result.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=669f2553f52c85815c5e7c10b3197af7&language=en-US");
result.send();
