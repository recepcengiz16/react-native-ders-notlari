import React,{useState,useReducer} from "react";
import createDataContext from "./createDataContext";

const BlogContext = React.createContext();

const blogReducer = (state,action)=>{
    switch (action.type) {
        case "add_blogpost":
            
            return [...state,
                {
                    id:Math.floor(Math.random()*999999),
                    title:"Angular"
                }]
    
        default:
            return state;
    }
}

const addBlogPost = (dispatch)=>{
    return ()=>{
        dispatch({type:"add_blogpost"})
    }
}


export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost},[]); //burada generic oluşturduğumuz contexti çağırıp contexti oluşturuyoruz.