import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TOKEN_TMDB = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDI5YmNiMjA4ZGIzOWQ3NGMwNGMyZWMwYzAwZTYzOSIsInN1YiI6IjY0NjUxMDMxMDI4NDIwMDEzNjM4OWM4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_GQovuX2B7iWjPufodVH26BhfP9smYXFhxli_dta4Y";

const headers ={
    Authorization: "bearer " + TOKEN_TMDB,
};

export const fetchDataFromApi = async(url, params)=>{

    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
        
    } catch (error) {
        console.log(error);
        return error;
        
    }

}

