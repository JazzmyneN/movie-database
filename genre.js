let result = new XMLHttpRequest();

result.onreadystatechange = () => {
    const data = JSON.parse(result.response);

    for(i = 0; i < data.genres.length; i++){
        console.log(data.genres[i].name);  
    };
    
};

result.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=669f2553f52c85815c5e7c10b3197af7&language=en-US");
result.send();


