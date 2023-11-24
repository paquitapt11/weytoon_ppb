import axios from "axios";

const instance = axios.create({
  baseURL: "https://mangaverse-api.p.rapidapi.com/manga", // MangaVerse API base URL
  timeout: 5000, // Set the request timeout in milliseconds
  headers: {
    "X-RapidAPI-Key": "ea242c8751msh1b19bc9dea72495p191965jsn93018cda78e5", // MangaVerse API key
    "X-RapidAPI-Host": "mangaverse-api.p.rapidapi.com",
  },
});

export default instance;
