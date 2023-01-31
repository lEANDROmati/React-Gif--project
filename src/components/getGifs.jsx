import { useFetchGif } from "../hooks/useFetchGif"
import { GifsItems } from "./GifsItems"


export const GetGifs =({value})=>{

  const {images, isLoading} = useFetchGif(value)

    return(
        <>  
            
            <h3>{value}</h3>
           
        <div className="card-grid">
       {
        images?.map((image) =>(
            <GifsItems
                key={image.id}
                {...image}/>
        ))
       }

      </div>
        
        </>
     
    )

}