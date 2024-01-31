import {useEffect,useState} from "react";
import yelp from "../api/yelp"

export default function() {

    const [results, setResults] = useState([]);
    const searchApi = async (searchTerm)=>{

        try {
            const response = await yelp.get("search", {
              params: {
                limit: 50,
                term: searchTerm,
                location: "İstanbul"
              }
            });
        
            console.log("API Response:", response.data);
            setResults(response.data.businesses);

          } 
          catch (error) {
            console.error("API Call Error:", error);
          }
    }


    useEffect(()=>{//useEffect her render işleminden sonra çalışan bir fonksiyondur.
        
        searchApi("Toast");

        // Eğer temizleme işlemi yapmamız gerekiyorsa (clean-up), bu işlemi return fonksiyonu içinde gerçekleştirebilirsiniz.
        // return () => {
        //     console.log("useEffect temizleme işlemi");
        // };

    },[]); //useEffect kullanımında eğer bir değişkenin değeri değiştiğinde bir işlem yapmak istiyorsak o zaman bu dizinin içinde o değişkeni yazmalıyız. Yoksa her render sonrasında çalışır. Boş dizi olunca da sadece bir kez çalışır. Hiç bir şey olmazsa 2. parametrede, her render edildiğinde çalışır. Dizinin içinde değer olursa o değer değiştiğinde çalışır useEffect içerisindeki değer

    return [searchApi,results]; //dışarıda da aramayı kullanabilmek için searchApiyi açtık.
}