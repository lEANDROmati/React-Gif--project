import { useState } from "react"
import { ListGifs } from "./ListGifs";

export const Search=()=>{

    const [gifs , setGifs] = useState([])

    const onSubmit=(event)=>{
        event.preventDefault();
        const valueInput = event.target.add.value;


        if(!valueInput) return

        const newGif = {id: new Date(), value: valueInput}

        setGifs( [ newGif, ...gifs])
        event.target.add.value=""
    }

    return(
       <>
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            name="add" 
            placeholder="buscar gif..." />
           
        </form>

        <ListGifs gifs={gifs} />
       </>
        
    )

}