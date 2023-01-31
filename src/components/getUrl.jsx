




  export const getUrl = async ( value )=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=vWkOFEdIyZ5lJ5mCA2gOsGYQPbwr8Cnd&q=${value}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json();

    const dataGifs = data.map( img => ({
    
        id : img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    
       }));

       
       return dataGifs;

   }
    

   
