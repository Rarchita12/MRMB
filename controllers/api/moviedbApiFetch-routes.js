const APIKey = '141d524e5cf007818feee1b4ecf58351';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=';
const movieButton = document.getElementById("movie-button");

//button click event
movieButton.addEventListener("click", function(){
 const movieInput = document.getElementById("movie-input").value;

console.log('log: movieInput ', movieInput);

//this will fetch the moviedb api and has the user input to ouput the movie image of their choosing
fetch( url + APIKey + '&query=' + movieInput
)
.then(function(response) {
     return response.json();
   })
   .then(function(response) {
     console.log(response);
//==============================This gets the moviedb Image=======================================================//     
     // Use 'querySelector' to get the ID of where the moviedb image will be displayed
      var moviedbImage = document.querySelector('#moviedb-image');
 
     // Create an '<img>' element
       var imgEl = document.createElement("img");
       
     // Set that element's 'src' attribute to the 'image_url' from the moviedb API response
     imgEl.setAttribute('src',`https://image.tmdb.org/t/p/w500${response.results[0].backdrop_path}`); //get response data from console log
     
     // Append the '<img>' element to the page
     moviedbImage.appendChild(imgEl);
//================================End of the moviedb Image========================================================//

//==============================This gets the movie detail =======================================================//

     // Use 'querySelector' to get the ID of where the movie detail will be displayed
     var movieDetail = document.querySelector('#movie-detail');

     //create an '<overview>' element
       var overviewEl = document.createElement("overview");

     // Set that element's 'src' attribute to the image_url from the moviedb API response and target the overview to display the movie details
     overviewEl.setAttribute('src',`https://image.tmdb.org/t/p/w500${response.results[0].overview}`); //get response data from console log

     //Append the '<overview>' element to the page
     movieDetail.appendChild(overviewEl);

//===============================End of the movie detail =======================================================//

     //this will delete the image element on the page when user decides to search another movie title
     // while (imgEl.hasChildNodes()) {
     //   movieButton.removeChild(imgEl.firstChild)
     // }
   });
})



