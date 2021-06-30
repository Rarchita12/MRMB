async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const movie_review = document.querySelector(
    'input[name="movie-review"]'
  ).value;
  const star_rating = document.querySelector('input[name="rate"]').value;
  const genreSelection = document.getElementById("genres");

  console.log("This is the star: " + star_rating);
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      movie_review,
      star_rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

var el = document.getElementById("update");
if (el) {
  el.addEventListener("click", editFormHandler);
}