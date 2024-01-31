import axios from "axios";

const appAxios = axios.create({
    baseURL:"https://api.yelp.com/v3/businesses/",
    headers:{
        Authorization:"Bearer lPvHLpAP84Sp-rmvjn4w4qigOjXF3ZseZrotba-ckv6Ae9XAOLoECJHgYYs6c7XaX0FInTZohj_6uJR_SQJFWHqziUQE6SuKzo0NwKqrEMP_b4SbYcR1ygRJJM64ZXYx"
    }
});

export default axios;