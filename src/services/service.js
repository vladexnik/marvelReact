import {useHttp} from '../hooks/http.hook'


const useMarvelService=()=> {

    const {loading,request,error,clearError, process,setProcess}=useHttp();
    const _apiBase='https://gateway.marvel.com:443/v1/public/';
    const _apiKey='apikey=ee08e659fe8dbd136caf78ed92338ca2'    
    const _baseOffset='291';


        // request  вместо getResource 
        const getAllCharacters=async (offset=_baseOffset)=>{
            const res=await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
            return res.data.results.map(_transformCharacter);
        }
       
        const getCharacter= async (id)=>{
            const res=await request(`${_apiBase}characters/${id}?${_apiKey}`);
            
            return _transformCharacter(res.data.results[0]);
        }

        const getComic = async (id) => {
            const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        
            return _transformComics(res.data.results[0]);
        };

        const getAllComics=async (offset='33')=>{
            const res=await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
            return res.data.results.map(_transformComics);
        }

        const getCharacterByName=async (name)=>{
            const res=await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
            let character=(res.data.results.map(_transformCharacter));
            return character; // [{}]
        }

       

        const _transformComics=(comics)=>{
            return {
                pageCount: comics.pageCount ? `${comics.pageCount} p.` : 'No info about number of pages',
                id: comics.id,
                title: comics.title,
                description: comics.description || 'Theres no description',
                price: comics.prices[0].price ? `${comics.prices[0].price}$`
				: "not available",
                thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
                homepage: comics.urls[0].url,
                language: comics.textObjects[0]?.language || "en-us",
            }
        }

        // const getCharacterApi=()=>{
        //     return request('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=291&apikey=ee08e659fe8dbd136caf78ed92338ca2')
        // }

        const _transformCharacter=(character)=>{
            
            if(character.description===''){
                character.description='This person has no description';
            }
            if(character.description.length>200){
                character.description=character.description.slice(0,210)+'...';
            }
            return {
                id: character.id,
                name:character.name,
                description: character.description,
                thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
                homepage: character.urls[0].url,
                wiki: character.urls[1].url,
                comics: character.comics.items           
            }     
        }

        return {
            loading, error, clearError, process,setProcess, 
            getAllCharacters, getCharacter, getAllComics, 
            getComic,getCharacterByName
        }
}

export default useMarvelService;