import axios from "axios";

const appAxios = axios.create({
    baseURL:"https://api.yelp.com/v3/businesses/",
    headers:{
        Authorization:"Bearer coDQQs9mOQAT5K68TTeixVFR7Wm9XTsp8GrWnlVTtpBuY92-lb8aCuA6TuLvWTJKlqYApvXDG1TC0QHhpYGuZ31Ups_scJHJVPOgZNeP8Q1YxERLnfi5TrUCi_a5ZXYx",
        Accept:"application/json"
    }
});

export default appAxios;