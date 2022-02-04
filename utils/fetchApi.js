import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'fe0dad3b60mshb17d2e3811fe335p1225bejsn3deabf869a31'
          }
    });
    return data;
}

