import { GetGifs } from "./getGifs"

export const ListGifs=({gifs})=>{


    return(

        <>
        
        {
            gifs.map((gif)=>(
               
                <>
                 
                <GetGifs key={gif.id} {...gif}/>
                </>
            ))
        }
        </>
    )
}