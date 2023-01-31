import { useEffect, useState } from "react";
import { getUrl } from "../components/getUrl";

export const useFetchGif = ( value ) => {

    const [images , setImages] =useState()
    const [IsLoading, setIsLoading] =useState(true)

    const getImages = async ()=>{

        const newImages = await getUrl(value);
        setImages(newImages)
        setIsLoading(false)

    }

  

    useEffect(()=>{
       getImages();
    }, [])

    return{ images,
            IsLoading}

}