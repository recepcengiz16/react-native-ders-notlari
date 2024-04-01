import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },
  card: {
    alignItems:'center',
    justifyContent:'center',
    padding: 16,
    marginTop: 20,
    backgroundColor:"orange"
    },
    input: {
        borderBottomWidth:2,
        borderBottomColor:"yellow",
        width:50,
        height:50,
        marginVertical:10,
        fontSize:20,
        fontWeight:"bold"
    },
    buttonsContainer : {
        flexDirection:"row"
    },
    buttonContainer: {
        flex:1
    }
});
