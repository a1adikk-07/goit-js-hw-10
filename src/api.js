import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
    "live_DSVuZxIpcIO8T0SR0eYd55iRQuO3WRJlwQzVuJ5NJQ7IJC3s6EPZujg04zZy0x4T";

const BASE_URL = ' https://api.thecatapi.com/v1';

export function fetchBreeds(breedId) {
    return axios.get(`${BASE_URL}/breeds`).then(resp => resp.data);
}

export function fetchCatByBreed(breedId) {
    return axios
        .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(resp => resp.data[0]);
}


