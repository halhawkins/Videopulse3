const currentURL = new URL(window.location.href);

const settings = {
    api_url: (currentURL.hostname === "localhost"||currentURL.hostname==="127.0.0.1")?"http://localhost:8000/":"https://api.videopulse.tv/",
    you_tube_key: 'AIzaSyCq3nZbjUfe7B3edaDs04EL_Z5hdLh4SFY',
    ipregistry_key: 'cc9k56odsk2lsju7',
    tmdb_key: '04d3a899d3689faaca857f2c98f44a44',
    poster_base: "https://image.tmdb.org/t/p/w500",
    backdrop_base: "https://image.tmdb.org/t/p/original",
    sm_poster_base: "https://image.tmdb.org/t/p/w342",
    // profile_base: (currentURL.hostname === "localhost"||currentURL.hostname==="127.0.0.1")?"http://localhost:8000/images/profile_path":"https://api.videopulse.tv/images/profile_path"
    profile_base: "https://image.tmdb.org/t/p/original"
}

export default settings;