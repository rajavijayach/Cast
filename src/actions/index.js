import axios from 'axios';
export const FETCH_REPOS = 'FETCH_REPOS';
const REPO_URL = "https://api.github.com/search/repositories?q=";

export function fetchRepos(id){
    const request = axios.get(`${REPO_URL}${id}`);
    return {
        type: FETCH_REPOS,
        payload: request
    };
}