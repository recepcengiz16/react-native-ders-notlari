import { StyleSheet, View,Button,FlatList } from 'react-native'
import React,{useReducer} from 'react'
import ColorChange from '../../components/ColorChange'


const reducer = (state,action)=>{
    
    switch (action.type) {
    
        case 'changeRed':
            return state.red +action.payLoad >255 || state.red + action.payLoad < 0  ? state : {...state, red:state.red+action.payLoad} 

        case 'changeBlue':
            return state.blue +action.payLoad >255 || state.blue + action.payLoad < 0  ? state : {...state, blue:state.blue+action.payLoad}  
        
        case 'changeGreen':
            return state.green +action.payLoad >255 || state.green + action.payLoad < 0  ? state : {...state, green:state.green+action.payLoad}        
       
    }
}


export default function ColorChangeScreen() {

    const [state, dispatch] = useReducer(reducer,{red:0,green:0,blue:0})

  return (
    <View>
        
        <ColorChange color="Kırmızı" 
            onIncrease={()=>dispatch({type:'changeRed', payLoad:20})} 
            onDecrease={()=>dispatch({type:'changeRed', payLoad:-20})} 
        />
        <ColorChange color="Mavi"
            onIncrease={()=>dispatch({type:'changeBlue', payLoad:20})} 
            onDecrease={()=>dispatch({type:'changeBlue', payLoad:-20})}
        />
        <ColorChange color="Yeşil" 
            onIncrease={()=>dispatch({type:'changeGreen', payLoad:20})} 
            onDecrease={()=>dispatch({type:'changeGreen', payLoad:-20})}
        />

        <View style={{height:150,width:150,backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}} />
        
    </View>
  )
}

const styles = StyleSheet.create({})