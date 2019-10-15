import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 335d31bf77b5f2f433aa5f4c84e72ebde1477011a84156de16dab6205e0c9b39'
    }

});