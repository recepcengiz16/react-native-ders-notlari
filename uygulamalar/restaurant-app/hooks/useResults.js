import {useEffect} from "react";
import yelp from "../api/yelp"

export default ()=>{

    const searchApi = async (searchTerm)=>{
        await yelp.get("");
    }


    useEffect(()=>{//useEffect her render işleminden sonra çalışan bir fonksiyondur.
        
        searchApi("Toast");

        // Eğer temizleme işlemi yapmamız gerekiyorsa (clean-up), bu işlemi return fonksiyonu içinde gerçekleştirebilirsiniz.
        return () => {
            console.log("useEffect temizleme işlemi");
        };

    },[]); //useEffect kullanımında eğer bir değişkenin değeri değiştiğinde bir işlem yapmak istiyorsak o zaman bu dizinin içinde o değişkeni yazmalıyız. Yoksa her render sonrasında çalışır. 


}