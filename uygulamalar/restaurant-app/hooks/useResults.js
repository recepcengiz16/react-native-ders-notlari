import {useEffect,useState} from "react";
import yelp from "../api/yelp"

export default function() {

    const [results, setResults] = useState([]);
    const searchApi = async (searchTerm)=>{

        await yelp.get("search",{
            params:{
                limit:50,
                term:searchTerm,
                location:"İstanbul"
            }
        }).then((response)=>{
            console.log("response_data",response.data)
            setResults(response.data.businesses);
        });
    }


    useEffect(()=>{//useEffect her render işleminden sonra çalışan bir fonksiyondur.
        
        const fetchData = async () => { //neden async fonks. değişken içinde yazıp çağırdık çünkü async fonks useeffect içinde direk çağıramıyorsun o yüzden
            await searchApi("Toast");
          };
      
        fetchData();

        // Eğer temizleme işlemi yapmamız gerekiyorsa (clean-up), bu işlemi return fonksiyonu içinde gerçekleştirebilirsiniz.
        // return () => {
        //     console.log("useEffect temizleme işlemi");
        // };

    },[]); //useEffect kullanımında eğer bir değişkenin değeri değiştiğinde bir işlem yapmak istiyorsak o zaman bu dizinin içinde o değişkeni yazmalıyız. Yoksa her render sonrasında çalışır. 

    return [searchApi,results]; //dışarıda da aramayı kullanabilmek için searchApiyi açtık.
}