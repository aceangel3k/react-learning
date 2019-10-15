import axios from 'axios'

const KEY = 'AIzaSyDXoYVJErSIZuvpkSMcrpreoG5Yv3S_2eQ';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
