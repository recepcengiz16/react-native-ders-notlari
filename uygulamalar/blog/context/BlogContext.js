import React,{useState,useReducer} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({children})=>{

    const blogReducer = (state,action)=>{
        switch (action.type) {
            case "add_blogpost":
                
                return [...state,{title:"Angular"}]
        
            default:
                return state;
        }
    }

    const addBlogPost = ()=>{
        dispatch({type:"add_blogpost"})
    }

    const [blogPosts, dispatch] = useReducer(blogReducer,[
             {title:"React Native"},
             {title:"Javascript"}
    ]);

    // const [blogPosts, setBlogPosts] = useState([
    //     {title:"React Native"},
    //     {title:"Javascript"}
    // ]);

    // const addBlogPost = ()=>{
    //     setBlogPosts([...blogPosts,{title:"Vue Js"}])
    // }
   // addBlogPost:addBlogPost propertynin değeri de aynı isimle olunca tek yazabiliyorduk hatırlarsan. addBlogPost callback fonks yani bu diziye ekleme yapacağım fonks.

   //value kısmında da dışarıda kullanacağım veriler oluyor ya da dışarıdan alacağım dinamik veriler
    return <BlogContext.Provider value={{data:blogPosts,addBlogPost}}> 
        {children}
    </BlogContext.Provider>
}

export default BlogContext;