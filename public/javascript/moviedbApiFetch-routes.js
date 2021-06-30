// materialize automatic select css
$(document).ready(function () {
   $("select").formSelect();
 });
var main = document
   .getElementById("moreInfo") // this has to be the name of the button's id
   .addEventListener("click", function () {
       var title = document.getElementById("title").value; // this needs to grab the movie's title to pass it into a var that will then be searched
       const APIKey = '141d524e5cf007818feee1b4ecf58351';
       const url = 'https://api.themoviedb.org/3/search/movie?api_key=';   
if (title == "" || url + APIKey +'&query=' + title == "null") {
   M.toast({ html: "Please type in a movie title!" });
} else{
   $(".modal").modal({dismissible: false});
fetch( url + APIKey + '&query=' + title
)
.then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);

//=============================This gets the moviedb Image========================================================//

  // Use 'querySelector' to get the ID of where the moviedb image will be displayed
  var moviedbImage = document.getElementById('background');

  // Create an '<img>' element
  var imgEl = document.createElement("img");

  // Set that element's 'src' attribute to the 'image_url' from the moviedb API response
  imgEl.setAttribute('src',`https://image.tmdb.org/t/p/w500${response.results[0].poster_path}`); //get response data from console log
  imgEl.setAttribute('style','float: left;')
  // Append the '<img>' element to the page
  moviedbImage.appendChild(imgEl);

//================================End of the moviedb Image========================================================//
// get title//
var movieTitle = document.getElementById('modalTitle');

movieTitle.innerHTML = response.results[0].original_title;

//=============================This gets the moviedb release date=================================================//

  //Use getElementById to get the ID where the movie release date will be displayed
  var movieRelease = document.getElementById('releasedate');

  //create a div element from release_date and have it appear in the index.html
  var movieDate = document.createElement("div").innerHTML ="Released on " + response.results[0].release_date;

  //Append the api response release date
  movieRelease.append(movieDate);

//===============================End of the moviedb release date==================================================//


//===============================This gets the movie detail ======================================================//

  // Use getElementById to get the ID of where the movie detail will be displayed
  var movieDetail = document.getElementById('overview');

  //create a div element for movieOverview and have it appear in the index.html
  var movieOverview = document.createElement("div").innerHTML = "Movie Summary: \n " + response.results[0].overview;

  //Append the api response overview
  movieDetail.append(movieOverview);
  
//===============================End of the movie detail ========================================================//
}); 
}
});

// code for closing the modal, and clearing it. 
document.getElementById("close").addEventListener("click", function () {
   var moviedbImage = document.getElementById('background');
   var movieRelease = document.getElementById('releasedate');
   var movieDetail = document.getElementById('overview');
   var movieTitle = document.getElementById('modalTitle');
   moviedbImage.innerHTML="";
   movieRelease.innerHTML="";
   movieDetail.innerHTML="";
   movieTitle.innerHTML =""
});