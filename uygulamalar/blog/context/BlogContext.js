import React,{useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({children})=>{

    const [blogPosts, setBlogPosts] = useState([
        {title:"React Native"},
        {title:"Javascript"}
    ]);

    const addBlogPost = ()=>{
        setBlogPosts([...blogPosts,{title:"Vue Js"}])
    }
   // addBlogPost:addBlogPost propertynin değeri de aynı isimle olunca tek yazabiliyorduk hatırlarsan. addBlogPost callback fonks yani bu diziye ekleme yapacağım fonks.

   //value kısmında da dışarıda kullanacağım veriler oluyor ya da dışarıdan alacağım dinamik veriler
    return <BlogContext.Provider value={{data:blogPosts,addBlogPost}}> 
        {children}
    </BlogContext.Provider>
}

export default BlogContext;