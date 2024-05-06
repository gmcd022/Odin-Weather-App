const img = document.getElementById("gifHTML");

function fetchSearchGiphy(gif) {
    let searchTerm = gif
    if (searchTerm === "") {
        searchTerm = "random";
    }

    fetch('https://api.giphy.com/v1/gifs/translate?api_key=77i2VacDimvJPb9DMCGzqaRDxTeKlqvy&s=' + searchTerm,
    { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        img.src = response.data.images.original.url;
    })
    .catch(function (err) {
        console.log("free API limit exceeded :(", err);
    });

    img.style.display = 'block'
}

export { fetchSearchGiphy };