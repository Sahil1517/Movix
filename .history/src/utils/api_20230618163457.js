import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.export.env.VITE_APP_TMDB_TOKEN; 

const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}