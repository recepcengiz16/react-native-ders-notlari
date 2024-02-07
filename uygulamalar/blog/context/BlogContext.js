import React,{useState,useReducer} from "react";
import createDataContext from "./createDataContext";

const BlogContext = React.createContext();

const blogReducer = (state,action)=>{
    switch (action.type) {
        case "add_blogpost":
            
            return [...state,
                {
                    id: Math.floor(Math.random()*999999),
                    title: action.payLoad.title,
                    content: action.payLoad.content
                }];
        
        case "edit_blogpost":
            return state.map((blogPost)=>{
                return blogPost.id === action.payLoad.id ? action.payLoad : blogPost;
            })

        case "delete_blogpost":
            return state.filter((blogPost)=>blogPost.id !== action.payLoad ) //state dediğimiz blogPost arrayi
    
        default:
            return state;
    }
}

const addBlogPost = (dispatch)=>{
    return (title,content, callBack )=>{
        dispatch({type:"add_blogpost",payLoad:{title,content}});
        if (callBack) {
            callBack();
        }
    }
}

const editBlogPost = (dispatch)=>{
    return (id,title,content, callBack )=>{
        dispatch({type:"edit_blogpost",payLoad:{id,title,content}});
        if (callBack) {
            callBack();
        }
    }
}

const deleteBlogPost = (dispatch)=>{
    return (id)=>{
        dispatch({type:"delete_blogpost",payLoad:id})
    }
}


export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost,editBlogPost,deleteBlogPost},[]); //burada generic oluşturduğumuz contexti çağırıp contexti oluşturuyoruz.