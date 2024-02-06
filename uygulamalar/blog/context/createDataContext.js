import React,{useReducer} from "react";

export default (reducer,actions,initialState)=>{
    const Context=React.createContext();

    const Provider = ({children})=>{


        const [state, dispatch] = useReducer(reducer,initialState);
    
       //value kısmında da dışarıda kullanacağım veriler oluyor ya da dışarıdan alacağım dinamik veriler, state:state olunca tek yazıyorduk ya
        return <Context.Provider value={{state}}> 
            {children}
        </Context.Provider>
    }
    
    return {Context,Provider} ;

}