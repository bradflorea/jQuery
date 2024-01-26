let currentId = 0;
let moviesList = [];

$(function () {
  $("#movieForm").on("submit", function (e) {
    e.preventDefault();

    let title = $("#title").val();
    let rating = $("#rating").val();
    let movieData = { title, rating, currentId };
    const addMovie = createMovieData(movieData);

    currentId++;
    moviesList.push(movieData);

    $("#movieTable").append(addMovie);
    $("#movieForm").trigger("reset");
  });

  $("#movieTable").on("click", "button.delete", function () {
    let deleteId = $(this).closest("tr").data("id");
    deleteMovie(deleteId);
  });
});

function createMovieData(data) {
  return `
        <tr data-id="${data.currentId}">
            <td>${data.title}</td>
            <td>${data.rating}</td>
            <td>
                <button class="delete">
                    Delete
                </button>
            </td>
        </tr>
    `;
}

function deleteMovie(deleteId) {
  moviesList = moviesList.filter((movie) => movie.currentId !== deleteId);
  $(`#movieTable tr[data-id="${deleteId}"]`).remove();
}
